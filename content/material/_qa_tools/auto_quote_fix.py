#!/usr/bin/env python3
"""
Mechanical (safe, no content redesign) fixer for the most common recurring
bug patterns found across content/material/*/*/cuestionario.md:

  1. enunciado:/explicacion:/respuesta: given as bare unquoted text -> quote it.
  2. enunciado:/explicacion: with an empty value followed by the text on the
     next (indented) line(s) -> join and quote as a single-line string.
  3. opciones_explicitas:/respuestas_validas: dash-list items unquoted -> quote them.
  4. respuesta_orden: given as a dash-list -> collapse to a single-line inline array.
  5. tipo: vf with respuesta: "verdadero"/"falso" (quoted) -> bare keyword.
  6. tipo: ordenar with `respuesta:` instead of `respuesta_orden:` (and no
     respuesta_orden: already present) -> rename the field.

Every block is re-validated after the transform; the transform is only
applied if the block now compiles OK. Otherwise left untouched, logged as
unresolved for manual follow-up. Never trusts its own tally — caller should
re-run validate_file.py / full_rescan.py afterward for the true state.
"""
import re
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from block_extract import extract_blocks_with_spans

REPO = Path("/home/javier/Proyecto_final")
TSX = REPO / "api/node_modules/.bin/tsx"
VALIDATOR = REPO / "content/material/_validate_dsl.ts"

BARE_KEYS_SIMPLE = ("enunciado", "explicacion")


def esc(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def is_already_ok(value: str) -> bool:
    v = value.strip()
    if v == "":
        return True
    if v[0] in ('"', "'", "[", "|"):
        return True
    if v in ("verdadero", "falso"):
        return True
    try:
        float(v)
        return True
    except ValueError:
        pass
    return False


def join_next_line_scalars(text: str, keys) -> str:
    """Handle `enunciado:` (or `explicacion:`) with an empty value on its own
    line, followed by the actual text on the next (indented) line(s)."""
    lines = text.split("\n")
    out = []
    i = 0
    n = len(lines)
    while i < n:
        line = lines[i]
        m = re.match(r"^(\s*)(" + "|".join(keys) + r"):\s*$", line)
        if m:
            indent, key = m.groups()
            j = i + 1
            collected = []
            while j < n:
                nxt = lines[j]
                if nxt.strip() == "":
                    break
                nxt_indent = len(nxt) - len(nxt.lstrip(" "))
                if re.match(r"^[a-zA-Z_]+:", nxt.strip()) and nxt_indent <= len(indent):
                    break
                collected.append(nxt.strip())
                j += 1
            if collected:
                joined = " ".join(collected)
                out.append(f'{indent}{key}: "{esc(joined)}"')
                i = j
                continue
        out.append(line)
        i += 1
    return "\n".join(out)


def quote_scalar_lines(text: str, keys) -> str:
    out = []
    for line in text.split("\n"):
        m = re.match(r"^(\s*)(" + "|".join(keys) + r"):\s*(.*)$", line)
        if m:
            indent, key, val = m.groups()
            if not is_already_ok(val):
                line = f'{indent}{key}: "{esc(val)}"'
        out.append(line)
    return "\n".join(out)


def quote_dash_items(text: str, list_keys) -> str:
    lines = text.split("\n")
    out = []
    in_list = False
    for line in lines:
        header_match = re.match(r"^(\s*)(" + "|".join(list_keys) + r"):\s*$", line)
        if header_match:
            in_list = True
            out.append(line)
            continue
        if in_list:
            item_match = re.match(r"^(\s*)-\s*(.*)$", line)
            if item_match:
                indent, val = item_match.groups()
                if not is_already_ok(val):
                    line = f'{indent}- "{esc(val)}"'
                out.append(line)
                continue
            else:
                in_list = False
        out.append(line)
    return "\n".join(out)


def collapse_respuesta_orden(text: str) -> str:
    lines = text.split("\n")
    out = []
    i = 0
    while i < len(lines):
        line = lines[i]
        m = re.match(r"^(\s*)respuesta_orden:\s*$", line)
        if m:
            indent = m.group(1)
            items = []
            j = i + 1
            while j < len(lines):
                im = re.match(r"^(\s*)-\s*(.*)$", lines[j])
                if not im:
                    break
                val = im.group(2).strip()
                items.append(val.strip('"\''))
                j += 1
            if items:
                quoted = ", ".join(f'"{esc(x)}"' for x in items)
                out.append(f"{indent}respuesta_orden: [{quoted}]")
                i = j
                continue
        out.append(line)
        i += 1
    return "\n".join(out)


def unquote_vf_boolean(text: str) -> str:
    if not re.search(r'^tipo:\s*"?vf"?\s*$', text, re.M):
        return text
    text = re.sub(r'respuesta:\s*"verdadero"', "respuesta: verdadero", text)
    text = re.sub(r"respuesta:\s*'verdadero'", "respuesta: verdadero", text)
    text = re.sub(r'respuesta:\s*"falso"', "respuesta: falso", text)
    text = re.sub(r"respuesta:\s*'falso'", "respuesta: falso", text)
    return text


def rename_respuesta_to_orden(text: str) -> str:
    if not re.search(r'^tipo:\s*"?ordenar"?\s*$', text, re.M):
        return text
    if re.search(r"^respuesta_orden:", text, re.M):
        return text
    return re.sub(r"^respuesta:(\s*)", r"respuesta_orden:\1", text, count=1, flags=re.M)


def fix_block(block: str) -> str:
    b = block
    b = join_next_line_scalars(b, BARE_KEYS_SIMPLE)
    b = unquote_vf_boolean(b)
    b = rename_respuesta_to_orden(b)
    b = collapse_respuesta_orden(b)
    b = quote_dash_items(b, ["opciones_explicitas", "respuestas_validas"])
    b = quote_scalar_lines(b, BARE_KEYS_SIMPLE)
    b = quote_scalar_lines(b, ["respuesta"])
    return b


def validate(block: str) -> bool:
    try:
        r = subprocess.run(
            [str(TSX), str(VALIDATOR)],
            input=block,
            capture_output=True,
            text=True,
            cwd=str(REPO),
            timeout=30,
        )
        return r.returncode == 0 and r.stdout.strip() == "OK"
    except Exception:
        return False


def process_file(path: Path, log):
    text = path.read_text()
    spans = extract_blocks_with_spans(text)
    changed = False
    new_text = text
    offset = 0
    fixed_count = 0
    unresolved = 0
    for block, start, end in spans:
        if validate(block):
            continue
        fixed = fix_block(block)
        if fixed != block and validate(fixed):
            new_text = new_text[: start + offset] + fixed + new_text[end + offset :]
            offset += len(fixed) - len(block)
            changed = True
            fixed_count += 1
        else:
            unresolved += 1
    if changed:
        path.write_text(new_text)
    log.write(f"{path}: fixed={fixed_count} unresolved={unresolved}\n")
    log.flush()
    return fixed_count, unresolved


def main():
    targets = sys.argv[1:]
    if not targets:
        print("usage: auto_quote_fix.py <file1> [file2] ...")
        sys.exit(1)
    log_path = Path(__file__).parent / "auto_quote_fix_progress.log"
    total_fixed = 0
    total_unresolved = 0
    with open(log_path, "a") as log:
        for t in targets:
            p = Path(t)
            f, u = process_file(p, log)
            total_fixed += f
            total_unresolved += u
    print(f"TOTAL fixed={total_fixed} unresolved={total_unresolved}")


if __name__ == "__main__":
    main()
