#!/usr/bin/env python3
import argparse
import sqlite3
import zlib
from pathlib import Path

# Columnas que deben quedar "buscables" (no comprimidas)
KEEP_TEXT = {"source", "title"}

BATCH = 2000

def z(s: str | None) -> bytes | None:
    if s is None:
        return None
    return zlib.compress(s.encode("utf-8"), level=9)

def q(name: str) -> str:
    # quote identifier
    return '"' + name.replace('"', '""') + '"'

def build_create_table_sql(src_con: sqlite3.Connection, table: str) -> tuple[str, list[tuple[str,str,bool, str|None, int]]]:
    """
    Returns (create_sql, cols_meta)
    cols_meta = [(name, type_sql, notnull, dflt, pkpos), ...]
    type_sql already adjusted (TEXT->BLOB if compressing)
    """
    cols = src_con.execute(f"PRAGMA table_info({q(table)})").fetchall()
    # PRAGMA table_info columns: cid, name, type, notnull, dflt_value, pk
    meta = []
    pk_cols = []
    for _, name, typ, notnull, dflt, pk in cols:
        typ_u = (typ or "").upper()

        new_type = typ  # default
        if "TEXT" in typ_u and name not in KEEP_TEXT:
            new_type = "BLOB"

        meta.append((name, new_type, bool(notnull), dflt, int(pk)))
        if pk:
            pk_cols.append((int(pk), name))

    pk_cols_sorted = [name for _, name in sorted(pk_cols, key=lambda x: x[0])]
    col_defs = []
    for name, typ, notnull, dflt, pk in meta:
        parts = [q(name)]
        if typ:
            parts.append(typ)
        if notnull:
            parts.append("NOT NULL")
        if dflt is not None:
            parts.append(f"DEFAULT {dflt}")
        col_defs.append(" ".join(parts))

    pk_sql = ""
    if pk_cols_sorted:
        pk_sql = f", PRIMARY KEY ({', '.join(q(c) for c in pk_cols_sorted)})"

    create_sql = f"CREATE TABLE {q(table)} (\n  " + ",\n  ".join(col_defs) + pk_sql + "\n);"
    return create_sql, meta

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--in", dest="inp", required=True, help="Input .sqlite")
    ap.add_argument("--out", dest="out", required=True, help="Output .sqlite (new optimized DB)")
    ap.add_argument("--table", default="entries", help="Table to optimize (default: entries)")
    ap.add_argument("--keep", default="source,title", help="Comma list of TEXT columns to keep uncompressed")
    args = ap.parse_args()

    global KEEP_TEXT
    KEEP_TEXT = {c.strip() for c in args.keep.split(",") if c.strip()}

    in_path = Path(args.inp)
    out_path = Path(args.out)
    table = args.table

    if not in_path.exists():
        raise SystemExit(f"Input not found: {in_path}")
    if out_path.exists():
        raise SystemExit(f"Output already exists: {out_path}")

    src = sqlite3.connect(str(in_path))
    try:
        # sanity
        chk = src.execute("PRAGMA integrity_check;").fetchone()[0]
        if chk != "ok":
            raise SystemExit(f"Input DB integrity_check failed: {chk}")

        create_sql, meta = build_create_table_sql(src, table)

        dst = sqlite3.connect(str(out_path))
        try:
            dst.execute("PRAGMA journal_mode=DELETE;")
            dst.execute("PRAGMA synchronous=NORMAL;")
            dst.execute("PRAGMA temp_store=MEMORY;")
            dst.execute(create_sql)

            col_names = [m[0] for m in meta]
            select_sql = f"SELECT {', '.join(q(c) for c in col_names)} FROM {q(table)}"
            insert_sql = f"INSERT INTO {q(table)} ({', '.join(q(c) for c in col_names)}) VALUES ({', '.join(['?']*len(col_names))})"

            # Identify which columns need compression (TEXT->BLOB in output)
            compress_cols = set()
            for name, new_type, _, _, _ in meta:
                if new_type.upper() == "BLOB" and name not in KEEP_TEXT:
                    compress_cols.add(name)
            compress_idx = [i for i, c in enumerate(col_names) if c in compress_cols]

            cur = src.execute(select_sql)
            dst.execute("BEGIN;")
            buf = []
            n = 0

            for row in cur:
                row = list(row)
                for i in compress_idx:
                    # only compress if value is str (TEXT)
                    if row[i] is not None:
                        row[i] = z(row[i])
                buf.append(tuple(row))
                if len(buf) >= BATCH:
                    dst.executemany(insert_sql, buf)
                    n += len(buf)
                    buf.clear()
                    print(f"copied {n} rows...")

            if buf:
                dst.executemany(insert_sql, buf)
                n += len(buf)

            dst.execute("COMMIT;")
            print(f"✓ copied total rows: {n}")

            # Final structural optimization
            dst.execute("ANALYZE;")
            dst.execute("VACUUM;")
            print("✓ ANALYZE + VACUUM done")

            chk2 = dst.execute("PRAGMA integrity_check;").fetchone()[0]
            if chk2 != "ok":
                raise SystemExit(f"Output DB integrity_check failed: {chk2}")

            print(f"✓ optimized DB written: {out_path}")

        finally:
            dst.close()

    finally:
        src.close()

if __name__ == "__main__":
    main()
