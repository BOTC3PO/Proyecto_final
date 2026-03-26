import os
import re
import json

ROOT_DIR = r"C:\Users\javie\tesis final\Proyecto_final\apps\web\src\generadoresV2"   # <-- CAMBIAR
OUTPUT_FILE = "functions_structured.json"


def extract_functions_from_ts(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        lines = f.readlines()

    functions = []
    i = 0

    while i < len(lines):
        line = lines[i]

        # -------------------------
        # FUNCTION DECLARATION
        # -------------------------
        match_func = re.search(r'(export\s+)?(async\s+)?function\s+(\w+)\s*\((.*?)\)', line)
        if match_func:
            name = match_func.group(3)
            params = match_func.group(4)
            is_exported = bool(match_func.group(1))

            brace_count = 0
            func_lines = []

            while i < len(lines):
                func_lines.append(lines[i])
                brace_count += lines[i].count("{")
                brace_count -= lines[i].count("}")

                if brace_count == 0 and "{" in "".join(func_lines):
                    break
                i += 1

            functions.append({
                "name": name,
                "type": "function",
                "params": params,
                "code": "".join(func_lines),
                "file": file_path,
                "isExported": is_exported
            })

        # -------------------------
        # ARROW FUNCTIONS
        # -------------------------
        match_arrow = re.search(r'const\s+(\w+)\s*=\s*\((.*?)\)\s*=>', line)
        if match_arrow:
            name = match_arrow.group(1)
            params = match_arrow.group(2)

            brace_count = 0
            func_lines = []

            while i < len(lines):
                func_lines.append(lines[i])
                brace_count += lines[i].count("{")
                brace_count -= lines[i].count("}")

                if brace_count == 0 and "{" in "".join(func_lines):
                    break
                i += 1

            functions.append({
                "name": name,
                "type": "arrow",
                "params": params,
                "code": "".join(func_lines),
                "file": file_path
            })

        # -------------------------
        # CLASS METHODS
        # -------------------------
        match_class = re.search(r'class\s+(\w+)', line)
        if match_class:
            class_name = match_class.group(1)

            i += 1
            while i < len(lines) and "}" not in lines[i]:
                method_match = re.search(r'(async\s+)?(\w+)\s*\((.*?)\)\s*\{', lines[i])

                if method_match:
                    name = method_match.group(2)
                    params = method_match.group(3)

                    brace_count = 0
                    func_lines = []

                    while i < len(lines):
                        func_lines.append(lines[i])
                        brace_count += lines[i].count("{")
                        brace_count -= lines[i].count("}")

                        if brace_count == 0:
                            break
                        i += 1

                    functions.append({
                        "name": name,
                        "type": "method",
                        "class": class_name,
                        "params": params,
                        "code": "".join(func_lines),
                        "file": file_path
                    })

                i += 1

        i += 1

    return functions


def process_directory(root_dir):
    result = []

    for root, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".ts") or file.endswith(".tsx"):
                path = os.path.join(root, file)

                try:
                    functions = extract_functions_from_ts(path)

                    if functions:
                        result.append({
                            "file": path,
                            "functions": functions
                        })

                except Exception as e:
                    print(f"[ERROR] {path}: {e}")

    return result


if __name__ == "__main__":
    data = process_directory(ROOT_DIR)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"\n✔ Listo. Archivo generado: {OUTPUT_FILE}")
    print(f"✔ Archivos procesados: {len(data)}")