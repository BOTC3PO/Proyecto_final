#!/usr/bin/env python3
"""
Build a SQLite database from recent Wiktionary dumps.
Supports streaming processing to avoid excessive RAM usage.
"""

import argparse
import bz2
import hashlib
import os
import re
import sqlite3
import sys
import time
from datetime import datetime
from pathlib import Path
from typing import Optional, Iterator
from urllib.parse import urljoin
from urllib.request import urlopen, Request
import xml.etree.ElementTree as ET

try:
    from lxml import etree
    HAS_LXML = True
except ImportError:
    HAS_LXML = False
    print("WARNING: lxml not available, falling back to xml.etree (slower)")


# Wikimedia dump URL patterns
DUMPS_BASE = "https://dumps.wikimedia.org/"
DUMP_FILENAME_PATTERN = "{wiki}wiktionary-{date}-pages-articles.xml.bz2"


class ProgressTracker:
    """Simple progress tracking for downloads and processing."""
    
    def __init__(self, total: Optional[int] = None, prefix: str = ""):
        self.total = total
        self.current = 0
        self.prefix = prefix
        self.start_time = time.time()
        self.last_print = 0
        
    def update(self, increment: int = 1):
        self.current += increment
        now = time.time()
        
        # Print every second or at completion
        if now - self.last_print >= 1.0 or (self.total and self.current >= self.total):
            self.print_progress()
            self.last_print = now
    
    def print_progress(self):
        elapsed = time.time() - self.start_time
        rate = self.current / elapsed if elapsed > 0 else 0
        
        if self.total:
            pct = 100 * self.current / self.total
            eta = (self.total - self.current) / rate if rate > 0 else 0
            print(f"\r{self.prefix}{self.current:,}/{self.total:,} ({pct:.1f}%) "
                  f"- {rate:.0f}/s - ETA: {eta:.0f}s", end="", flush=True)
        else:
            print(f"\r{self.prefix}{self.current:,} - {rate:.0f}/s - {elapsed:.0f}s elapsed",
                  end="", flush=True)
    
    def finish(self):
        if self.last_print > 0:  # Only if we printed something
            print()  # New line


def find_latest_dump_date(wiki: str) -> Optional[str]:
    """Find the most recent dump date for a given wiki."""
    url = f"{DUMPS_BASE}{wiki}wiktionary/"
    
    try:
        print(f"Finding latest dump for {wiki}wiktionary...", end=" ", flush=True)
        req = Request(url, headers={'User-Agent': 'WiktionaryDB/1.0'})
        with urlopen(req, timeout=30) as response:
            html = response.read().decode('utf-8')
        
        # Find all date directories (format: YYYYMMDD)
        date_pattern = r'href="(\d{8})/"'
        dates = re.findall(date_pattern, html)
        
        if not dates:
            print(f"FAILED - no dumps found")
            return None
        
        latest = max(dates)
        print(f"found {latest}")
        return latest
        
    except Exception as e:
        print(f"FAILED - {e}")
        return None


def get_dump_url(wiki: str, date: str) -> str:
    """Construct the dump file URL."""
    filename = DUMP_FILENAME_PATTERN.format(wiki=wiki, date=date)
    return f"{DUMPS_BASE}{wiki}wiktionary/{date}/{filename}"


def download_file(url: str, dest_path: Path, resume: bool = True) -> bool:
    """Download a file with progress tracking and optional resume."""
    
    # Check if file already exists
    existing_size = dest_path.stat().st_size if dest_path.exists() else 0
    
    try:
        # Get file info
        req = Request(url, headers={'User-Agent': 'WiktionaryDB/1.0'})
        
        if resume and existing_size > 0:
            req.add_header('Range', f'bytes={existing_size}-')
        
        print(f"Downloading: {url}")
        with urlopen(req, timeout=30) as response:
            total_size = int(response.headers.get('Content-Length', 0))
            
            if resume and existing_size > 0:
                if response.code == 206:  # Partial content
                    total_size += existing_size
                    print(f"Resuming from {existing_size:,} bytes")
                else:
                    existing_size = 0  # Server doesn't support resume
            
            # Download
            dest_path.parent.mkdir(parents=True, exist_ok=True)
            mode = 'ab' if (resume and existing_size > 0) else 'wb'
            
            tracker = ProgressTracker(total_size, "Downloaded: ")
            tracker.current = existing_size
            
            with open(dest_path, mode) as f:
                chunk_size = 1024 * 1024  # 1MB chunks
                while True:
                    chunk = response.read(chunk_size)
                    if not chunk:
                        break
                    f.write(chunk)
                    tracker.update(len(chunk))
            
            tracker.finish()
            print(f"✓ Download complete: {dest_path}")
            return True
            
    except Exception as e:
        print(f"✗ Download failed: {e}")
        return False


def iter_xml_pages_streaming(bz2_path: Path) -> Iterator[dict]:
    """
    Stream parse pages from a bz2-compressed Wikimedia dump.
    Yields one page dict at a time, clearing memory as we go.
    """
    
    # XML namespace
    NS = '{http://www.mediawiki.org/xml/export-0.10/}'
    
    def strip_ns(tag):
        """Remove namespace from tag."""
        if '}' in tag:
            return tag.split('}', 1)[1]
        return tag
    
    print(f"Parsing {bz2_path.name} in streaming mode...")
    
    with bz2.open(bz2_path, 'rb') as bz2_file:
        # Use lxml if available for better performance
        if HAS_LXML:
            # lxml allows filtering by tag in iterparse
            context = etree.iterparse(bz2_file, events=('end',), tag='{*}page')
            
            page_count = 0
            
            for event, elem in context:
                page_count += 1
                
                # Extract page data
                page_data = {}
                
                for child in elem:
                    child_tag = strip_ns(child.tag)
                    
                    if child_tag == 'title':
                        page_data['title'] = child.text or ''
                    elif child_tag == 'ns':
                        page_data['ns'] = int(child.text or 0)
                    elif child_tag == 'id':
                        page_data['page_id'] = int(child.text or 0)
                    elif child_tag == 'redirect':
                        page_data['is_redirect'] = 1
                        page_data['redirect_title'] = child.get('title', '')
                    elif child_tag == 'revision':
                        # Parse revision data
                        for rev_child in child:
                            rev_tag = strip_ns(rev_child.tag)
                            
                            if rev_tag == 'id':
                                page_data['rev_id'] = int(rev_child.text or 0)
                            elif rev_tag == 'parentid':
                                page_data['parent_id'] = int(rev_child.text or 0)
                            elif rev_tag == 'timestamp':
                                page_data['timestamp'] = rev_child.text or ''
                            elif rev_tag == 'model':
                                page_data['model'] = rev_child.text or ''
                            elif rev_tag == 'format':
                                page_data['format'] = rev_child.text or ''
                            elif rev_tag == 'text':
                                page_data['text'] = rev_child.text or ''
                            elif rev_tag == 'sha1':
                                page_data['sha1'] = rev_child.text or ''
                
                # Set defaults
                page_data.setdefault('is_redirect', 0)
                page_data.setdefault('redirect_title', None)
                page_data.setdefault('parent_id', None)
                
                yield page_data
                
                # Clear memory
                elem.clear()
                # Also clear previous siblings to free memory
                while elem.getprevious() is not None:
                    del elem.getparent()[0]
                
                if page_count % 10000 == 0:
                    print(f"\rParsed {page_count:,} pages...", end="", flush=True)
        else:
            # xml.etree doesn't support tag filtering, so we need to filter manually
            context = ET.iterparse(bz2_file, events=('end',))
            
            page_count = 0
            
            for event, elem in context:
                tag = strip_ns(elem.tag)
                
                # Only process <page> elements
                if tag != 'page':
                    continue
                
                page_count += 1
                
                # Extract page data
                page_data = {}
                
                for child in elem:
                    child_tag = strip_ns(child.tag)
                    
                    if child_tag == 'title':
                        page_data['title'] = child.text or ''
                    elif child_tag == 'ns':
                        page_data['ns'] = int(child.text or 0)
                    elif child_tag == 'id':
                        page_data['page_id'] = int(child.text or 0)
                    elif child_tag == 'redirect':
                        page_data['is_redirect'] = 1
                        page_data['redirect_title'] = child.get('title', '')
                    elif child_tag == 'revision':
                        # Parse revision data
                        for rev_child in child:
                            rev_tag = strip_ns(rev_child.tag)
                            
                            if rev_tag == 'id':
                                page_data['rev_id'] = int(rev_child.text or 0)
                            elif rev_tag == 'parentid':
                                page_data['parent_id'] = int(rev_child.text or 0)
                            elif rev_tag == 'timestamp':
                                page_data['timestamp'] = rev_child.text or ''
                            elif rev_tag == 'model':
                                page_data['model'] = rev_child.text or ''
                            elif rev_tag == 'format':
                                page_data['format'] = rev_child.text or ''
                            elif rev_tag == 'text':
                                page_data['text'] = rev_child.text or ''
                            elif rev_tag == 'sha1':
                                page_data['sha1'] = rev_child.text or ''
                
                # Set defaults
                page_data.setdefault('is_redirect', 0)
                page_data.setdefault('redirect_title', None)
                page_data.setdefault('parent_id', None)
                
                yield page_data
                
                # Clear memory (xml.etree doesn't have getprevious/getparent)
                elem.clear()
                
                if page_count % 10000 == 0:
                    print(f"\rParsed {page_count:,} pages...", end="", flush=True)
    
    print(f"\rParsed {page_count:,} pages total.")


def create_database(db_path: Path):
    """Create the SQLite database with schema."""
    
    print(f"Creating database: {db_path}")
    db_path.parent.mkdir(parents=True, exist_ok=True)
    
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    
    # Create table
    cur.execute("""
        CREATE TABLE IF NOT EXISTS entries (
            source TEXT NOT NULL,
            title TEXT NOT NULL,
            ns INTEGER,
            page_id INTEGER,
            rev_id INTEGER,
            parent_id INTEGER,
            timestamp TEXT,
            model TEXT,
            format TEXT,
            text TEXT,
            sha1 TEXT,
            is_redirect INTEGER DEFAULT 0,
            redirect_title TEXT,
            PRIMARY KEY (source, title)
        )
    """)
    
    # Create indices
    cur.execute("CREATE INDEX IF NOT EXISTS idx_entries_source_title ON entries(source, title)")
    cur.execute("CREATE INDEX IF NOT EXISTS idx_entries_source_pageid ON entries(source, page_id)")
    
    conn.commit()
    conn.close()
    
    print("✓ Database schema created")


def set_build_pragmas(conn: sqlite3.Connection):
    """Set SQLite pragmas for fast build."""
    cur = conn.cursor()
    cur.execute("PRAGMA journal_mode=OFF")
    cur.execute("PRAGMA synchronous=OFF")
    cur.execute("PRAGMA temp_store=MEMORY")
    cur.execute("PRAGMA cache_size=-200000")  # ~200MB cache
    conn.commit()


def set_production_pragmas(conn: sqlite3.Connection):
    """Set SQLite pragmas for production use."""
    cur = conn.cursor()
    cur.execute("PRAGMA journal_mode=WAL")
    cur.execute("PRAGMA synchronous=NORMAL")
    conn.commit()


def import_dump(db_path: Path, dump_path: Path, source: str, mode: str, 
                max_pages: Optional[int], max_text_bytes: Optional[int]):
    """Import a dump file into the database."""
    
    print(f"\n=== Importing {source} ===")
    
    conn = sqlite3.connect(db_path)
    set_build_pragmas(conn)
    cur = conn.cursor()
    
    inserted = 0
    skipped_ns = 0
    skipped_size = 0
    skipped_limit = 0
    
    batch = []
    batch_size = 1000
    
    try:
        for page in iter_xml_pages_streaming(dump_path):
            # Filter: only namespace 0
            if page.get('ns', 0) != 0:
                skipped_ns += 1
                continue
            
            # Check text size limit
            text = page.get('text', '')
            if max_text_bytes and len(text.encode('utf-8')) > max_text_bytes:
                skipped_size += 1
                continue
            
            # Check page limit (for LITE mode)
            if max_pages and inserted >= max_pages:
                skipped_limit += 1
                continue
            
            # Prepare row
            row = (
                source,
                page.get('title', ''),
                page.get('ns', 0),
                page.get('page_id'),
                page.get('rev_id'),
                page.get('parent_id'),
                page.get('timestamp', ''),
                page.get('model', ''),
                page.get('format', ''),
                text,
                page.get('sha1', ''),
                page.get('is_redirect', 0),
                page.get('redirect_title'),
            )
            
            batch.append(row)
            
            # Insert in batches
            if len(batch) >= batch_size:
                cur.executemany("""
                    INSERT OR REPLACE INTO entries 
                    (source, title, ns, page_id, rev_id, parent_id, timestamp, 
                     model, format, text, sha1, is_redirect, redirect_title)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """, batch)
                conn.commit()
                inserted += len(batch)
                batch = []
                
                print(f"\rInserted: {inserted:,} | Skipped: ns={skipped_ns:,}, "
                      f"size={skipped_size:,}, limit={skipped_limit:,}", 
                      end="", flush=True)
        
        # Insert remaining
        if batch:
            cur.executemany("""
                INSERT OR REPLACE INTO entries 
                (source, title, ns, page_id, rev_id, parent_id, timestamp, 
                 model, format, text, sha1, is_redirect, redirect_title)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, batch)
            conn.commit()
            inserted += len(batch)
        
        print(f"\n✓ Imported {inserted:,} entries from {source}")
        print(f"  Skipped: {skipped_ns:,} (wrong ns), {skipped_size:,} (too large), "
              f"{skipped_limit:,} (limit reached)")
        
    finally:
        conn.close()
    
    return inserted


def validate_database(db_path: Path):
    """Run validation queries on the database."""
    
    print("\n=== Validation ===")
    
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    
    # Count by source
    print("\nEntries per source:")
    cur.execute("SELECT source, COUNT(*) FROM entries GROUP BY source ORDER BY source")
    for source, count in cur.fetchall():
        print(f"  {source}: {count:,}")
    
    # Total count
    cur.execute("SELECT COUNT(*) FROM entries")
    total = cur.fetchone()[0]
    print(f"\nTotal entries: {total:,}")
    
    # Check namespaces
    cur.execute("SELECT DISTINCT ns FROM entries")
    namespaces = [row[0] for row in cur.fetchall()]
    print(f"Namespaces: {namespaces}")
    
    # Count redirects
    cur.execute("SELECT COUNT(*) FROM entries WHERE is_redirect = 1")
    redirects = cur.fetchone()[0]
    print(f"Redirects: {redirects:,}")
    
    # Sample titles
    print("\nSample titles (first 5):")
    cur.execute("SELECT source, title FROM entries LIMIT 5")
    for source, title in cur.fetchall():
        print(f"  [{source}] {title}")
    
    conn.close()
    
    # File size
    size_mb = db_path.stat().st_size / (1024 * 1024)
    print(f"\nDatabase size: {size_mb:.2f} MB")
    
    return size_mb


def main():
    parser = argparse.ArgumentParser(
        description="Build SQLite database from recent Wiktionary dumps"
    )
    parser.add_argument(
        '--out', 
        type=Path, 
        default=Path('./data/dictionaries.sqlite'),
        help='Output SQLite database path'
    )
    parser.add_argument(
        '--sources', 
        type=str, 
        default='es,it,eo',
        help='Comma-separated list of wiki sources (e.g., es,it,eo)'
    )
    parser.add_argument(
        '--mode', 
        type=str, 
        choices=['full', 'lite'],
        default='full',
        help='Build mode: full (all pages) or lite (limited)'
    )
    parser.add_argument(
        '--max-pages', 
        type=int,
        help='Maximum pages per source (for lite mode)'
    )
    parser.add_argument(
        '--max-text-bytes', 
        type=int,
        help='Maximum text size in bytes (skip larger pages)'
    )
    parser.add_argument(
        '--workdir', 
        type=Path,
        default=Path('./data'),
        help='Working directory for downloads'
    )
    parser.add_argument(
        '--skip-download',
        action='store_true',
        help='Skip download step (use existing files)'
    )
    
    args = parser.parse_args()
    
    # Parse sources
    sources = [s.strip() for s in args.sources.split(',')]
    
    print("=" * 70)
    print("Wiktionary SQLite Database Builder")
    print("=" * 70)
    print(f"Output: {args.out}")
    print(f"Sources: {', '.join(sources)}")
    print(f"Mode: {args.mode}")
    if args.max_pages:
        print(f"Max pages per source: {args.max_pages:,}")
    if args.max_text_bytes:
        print(f"Max text bytes: {args.max_text_bytes:,}")
    print(f"Work directory: {args.workdir}")
    print()
    
    # Create database
    create_database(args.out)
    
    # Process each source
    dumps_dir = args.workdir / 'dumps'
    dumps_dir.mkdir(parents=True, exist_ok=True)
    
    total_inserted = 0
    
    for source in sources:
        print(f"\n{'=' * 70}")
        print(f"Processing: {source}wiktionary")
        print('=' * 70)
        
        # Find latest dump
        if not args.skip_download:
            date = find_latest_dump_date(source)
            if not date:
                print(f"✗ Could not find latest dump for {source}, skipping")
                continue
            
            # Download dump
            dump_url = get_dump_url(source, date)
            dump_filename = DUMP_FILENAME_PATTERN.format(wiki=source, date=date)
            dump_path = dumps_dir / dump_filename
            
            if dump_path.exists():
                print(f"✓ Dump already exists: {dump_path}")
            else:
                if not download_file(dump_url, dump_path):
                    print(f"✗ Could not download dump for {source}, skipping")
                    continue
        else:
            # Find existing dump file
            pattern = f"{source}wiktionary-*-pages-articles.xml.bz2"
            existing = list(dumps_dir.glob(pattern))
            if not existing:
                print(f"✗ No existing dump found for {source} in {dumps_dir}")
                continue
            dump_path = sorted(existing)[-1]  # Use most recent
            print(f"Using existing dump: {dump_path}")
        
        # Import dump
        max_pages = args.max_pages if args.mode == 'lite' else None
        inserted = import_dump(
            args.out, 
            dump_path, 
            source, 
            args.mode,
            max_pages,
            args.max_text_bytes
        )
        total_inserted += inserted
    
    # Finalize database
    print(f"\n{'=' * 70}")
    print("Finalizing database...")
    conn = sqlite3.connect(args.out)
    set_production_pragmas(conn)
    conn.execute("VACUUM")
    conn.close()
    print("✓ Database optimized")
    
    # Validate
    final_size = validate_database(args.out)
    
    # Final report
    print(f"\n{'=' * 70}")
    print("BUILD COMPLETE")
    print('=' * 70)
    print(f"Database: {args.out}")
    print(f"Total entries: {total_inserted:,}")
    print(f"Final size: {final_size:.2f} MB")
    
    if final_size > 100:
        print(f"\n⚠ WARNING: Database is larger than 100 MB")
        print("Consider:")
        print("  - Using --mode lite with --max-pages")
        print("  - Compressing for distribution (zstd, zip)")
        print("  - Generating during installation via extras.ps1")
    
    print("\n✓ Success!")


if __name__ == '__main__':
    main()
