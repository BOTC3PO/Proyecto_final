"""
orchestrator_docs.py — Auto-documentador de código por función/método
Adaptado para TypeScript (clases + métodos), pensado para generadoresV2.

Uso:
  python orchestrator_docs.py --root ./generadoresV2 --output docs_ai
  python orchestrator_docs.py --root ./generadoresV2 --include fisica matematicas --output docs_ai
"""

import re
import ast
import json
import time
import requests
import subprocess
from pathlib import Path
from datetime import datetime

# =========================
# CONFIGURACIÓN
# =========================

CODER_MODELS = [
    "codellama:13b",
    "qwen2.5-coder:14b",
    "qwen3.5:9b",
    "deepseek-coder-v2:16b",
]

REVIEWER_MODELS = [
    "gemma3:12b",
    "gpt-oss:20b",
    "glm-4.7-flash:latest",
]

OLLAMA_URL      = "http://localhost:11434"
MAX_BLOCK_LINES = 120       # líneas máximas por bloque enviado al modelo
REQUEST_TIMEOUT = 1_000    # segundos por llamada
MAX_RETRIES     = 5

# Extensiones analizadas
CODE_EXTENSIONS = {".ts", ".tsx", ".js", ".jsx", ".mjs", ".py"}

# =========================
# LOGGING
# =========================

def log(tag: str, msg: str):
    ts = datetime.now().strftime("%H:%M:%S")
    print(f"[{ts}] [{tag}] {msg}")

# =========================
# CONTEXTOS
# =========================

CONTEXT_ANALYZER = """
Sos un analizador de código TypeScript experto. Recibís UN SOLO método, función o clase.
Documentá con precisión: qué hace, cómo lo hace, qué retorna, qué puede fallar.

ANALIZAR:
1. FIRMA: nombre, parámetros con tipos inferidos, tipo de retorno
2. COMPORTAMIENTO: lógica real (no solo paráfrasis del nombre), casos borde, efectos secundarios
3. DEPENDENCIAS: métodos internos que llama, imports/libs externas que usa
4. BUGS Y MEJORAS: errores evidentes, code smells, sugerencias concretas
5. DIAGRAMA: flowchart Mermaid solo si hay lógica de control no trivial (múltiples branches o loops)

CONTEXTO DEL PROYECTO:
- Librería de generadores de ejercicios educativos para Virtual Book
- Cada generador extiende BaseGenerador y produce objetos Ejercicio (quiz, numérico, completar)
- Los métodos privados `genXxx` generan ejercicios de un subtipo específico
- PRNG es un generador pseudoaleatorio determinístico (semilla fija = mismo ejercicio)
- shared.ts provee helpers: randInt, randFloat, pickOne, shuffle, crearQuiz, renderTemplate

FORMATO — JSON estricto, sin texto fuera del JSON, sin bloques markdown alrededor:
{
  "name": "<nombre>",
  "kind": "method|function|class|handler",
  "signature": {
    "params": [{"name": "<param>", "type": "<tipo inferido>"}],
    "returns": "<tipo inferido>"
  },
  "description": "<qué hace en 1-3 oraciones>",
  "behavior": {
    "side_effects": ["<efecto>"],
    "exceptions": ["<excepción posible>"],
    "edge_cases": ["<caso borde>"]
  },
  "dependencies": {
    "internal": ["<método interno>"],
    "external": ["<lib o módulo>"]
  },
  "bugs": [
    {
      "severity": "high|medium|low",
      "location": "<expresión o línea>",
      "description": "<problema>",
      "suggestion": "<cómo arreglarlo>"
    }
  ],
  "diagram": {
    "type": "flowchart|sequenceDiagram|null",
    "title": "<título o null>",
    "mermaid": "<código mermaid o null>"
  }
}

REGLAS:
- SOLO el JSON, sin preámbulo ni explicación
- Si no hay bugs: "bugs" es []
- Si no necesita diagrama: diagram.type = null, diagram.mermaid = null
- No inventes nada que no esté en el código
"""

CONTEXT_REVIEWER = """
Sos un arquitecto de software senior. Recibís análisis JSON de múltiples modelos
sobre las mismas funciones/métodos de una librería TypeScript de generadores educativos.

Tu trabajo:
1. MERGEAR: lo que varios modelos coinciden es más confiable; si difieren, mencionalo.
2. PRIORIZAR bugs por severidad real, sin duplicados.
3. ELEGIR o sintetizar el mejor diagrama Mermaid por función.
4. PRODUCIR un informe Markdown estructurado, claro y renderizable.

ESTRUCTURA DEL INFORME:

# Documentación — generadoresV2
> Generado: <fecha>

## Resumen Ejecutivo
<visión general de la arquitectura en 1-2 párrafos>

## Módulos

### <módulo> (ej: fisica, matematicas)

#### <archivo> (ej: Cinematica.ts)

##### `<nombre del método/función>`
**Firma:** `<firma completa>`
**Descripción:** <qué hace>
**Casos borde / efectos:** <o "ninguno detectado">

**Bugs y mejoras:**
| Severidad | Ubicación | Problema | Sugerencia |
|-----------|-----------|----------|------------|

**Diagrama:** (solo si hay uno útil)
```mermaid
<código>
```

---

## Problemas Críticos
<todos los bugs `high` con módulo/archivo/función>

## Dependencias Externas
<lista deduplicada>

REGLAS:
- Usá ⚠️ *Discrepancia: ...* si los modelos difieren en algo importante
- Solo incluí diagramas correctos y que aporten valor real
- Markdown válido y renderizable
"""

# =========================
# EXTRACCIÓN DE BLOQUES
# =========================

class FunctionBlock:
    def __init__(self, name: str, kind: str, source: str, lineno: int, file_path: str):
        self.name      = name
        self.kind      = kind       # method | function | class | handler | module
        self.source    = source
        self.lineno    = lineno
        self.file_path = file_path

    def __repr__(self):
        return f"<{self.kind} {self.name} @ {self.file_path}:{self.lineno}>"


def _balance_end(lines: list, start: int) -> int:
    """Línea donde cierra el bloque de llaves abierto en `start`."""
    depth = 0
    for i in range(start, len(lines)):
        depth += lines[i].count("{") - lines[i].count("}")
        if i > start and depth <= 0:
            return i
    return min(start + MAX_BLOCK_LINES, len(lines) - 1)


def _truncate_block(source: str) -> str:
    lines = source.splitlines()
    if len(lines) <= MAX_BLOCK_LINES:
        return source
    half    = MAX_BLOCK_LINES // 2
    omitted = len(lines) - MAX_BLOCK_LINES
    return (
        "\n".join(lines[:half])
        + f"\n  // ... [{omitted} líneas omitidas] ...\n"
        + "\n".join(lines[-half:])
    )


def extract_ts(content: str, file_path: str) -> list:
    """
    Extrae de TypeScript:
    - Métodos de clase (public/private/protected/sin modificador, indentados 2 espacios)
    - Funciones sueltas de módulo (export function, const fn = ...)
    - Handlers en objetos literales (generate, validate, calcular)
    """
    lines  = content.splitlines()
    blocks = []
    seen   = set()   # índices de línea ya procesados

    # ── Métodos de clase ─────────────────────────────────────────────
    # Cubre: constructor, generarEjercicio, private genMRU, public calcular, etc.
    method_pat = re.compile(
        r"^  (?:(?:public|private|protected)\s+)?(?:static\s+)?(?:async\s+)?"
        r"((?:get |set )?[a-zA-Z_$][a-zA-Z0-9_$]*)\s*[<(]"
    )
    for i, line in enumerate(lines):
        m = method_pat.match(line)
        if m and "{" in line and i not in seen:
            name = m.group(1)
            end  = _balance_end(lines, i)
            seen.add(i)
            src  = "\n".join(lines[i : end + 1])
            blocks.append(FunctionBlock(name, "method", _truncate_block(src), i + 1, file_path))

    # ── Funciones sueltas de módulo ───────────────────────────────────
    fn_pat    = re.compile(
        r"^(?:export\s+)?(?:default\s+)?(?:async\s+)?function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*[<(]"
    )
    arrow_pat = re.compile(
        r"^(?:export\s+)?(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?:<[^=]*>)?\s*=\s*(?:async\s*)?\("
    )
    for i, line in enumerate(lines):
        stripped = line.strip()
        for pat in (fn_pat, arrow_pat):
            m = pat.match(stripped)
            if m and i not in seen:
                name = m.group(1)
                end  = _balance_end(lines, i)
                seen.add(i)
                src  = "\n".join(lines[i : end + 1])
                blocks.append(FunctionBlock(name, "function", _truncate_block(src), i + 1, file_path))
                break

    # ── Handlers en objetos literales ────────────────────────────────
    # Ej: "  generate(q, rng, shuffle) {" dentro de HANDLERS = { mc: { ... } }
    handler_pat = re.compile(
        r"^\s{2,}(generate|validate|calcular|handle[A-Z][a-zA-Z]*)\s*\("
    )
    for i, line in enumerate(lines):
        m = handler_pat.match(line)
        if m and "{" in line and i not in seen:
            name = m.group(1)
            end  = _balance_end(lines, i)
            seen.add(i)
            src  = "\n".join(lines[i : end + 1])
            blocks.append(FunctionBlock(name, "handler", _truncate_block(src), i + 1, file_path))

    # Fallback: si no se extrajo nada, tratar el archivo como bloque único
    if not blocks:
        blocks.append(FunctionBlock("_module", "module", _truncate_block(content), 1, file_path))

    return sorted(blocks, key=lambda b: b.lineno)


def extract_python(content: str, file_path: str) -> list:
    blocks = []
    try:
        tree = ast.parse(content)
    except SyntaxError:
        return [FunctionBlock("_module", "module", _truncate_block(content), 1, file_path)]

    for node in ast.walk(tree):
        if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef, ast.ClassDef)):
            src  = ast.get_source_segment(content, node) or ""
            kind = "class" if isinstance(node, ast.ClassDef) else "function"
            blocks.append(FunctionBlock(node.name, kind, _truncate_block(src), node.lineno, file_path))

    return blocks or [FunctionBlock("_module", "module", _truncate_block(content), 1, file_path)]


def extract_functions(file_path: str, content: str) -> list:
    ext = Path(file_path).suffix.lower()
    if ext == ".py":
        return extract_python(content, file_path)
    elif ext in (".ts", ".tsx", ".js", ".jsx", ".mjs"):
        return extract_ts(content, file_path)
    else:
        return [FunctionBlock("_module", "module", _truncate_block(content), 1, file_path)]

# =========================
# MODEL RUNNER
# =========================

def strip_thinking(text: str) -> str:
    text = re.sub(r"<think>.*?</think>", "", text, flags=re.DOTALL)
    text = re.sub(r"Thinking\.\.\..*?\.\.\.done thinking\.", "", text, flags=re.DOTALL)
    return text.strip()


class ModelRunner:
    def __init__(self, model: str):
        self.model = model

    def start(self):
        log("START", self.model)
        try:
            requests.post(
                f"{OLLAMA_URL}/api/generate",
                json={"model": self.model, "prompt": "ping", "stream": False},
                timeout=600,
            )
            time.sleep(1)
        except requests.exceptions.RequestException as e:
            log("WARN", f"Warm-up fallido para {self.model}: {e}")

    def run(self, prompt: str):
        last_error = None
        for attempt in range(1, MAX_RETRIES + 1):
            try:
                r = requests.post(
                    f"{OLLAMA_URL}/api/generate",
                    json={"model": self.model, "prompt": prompt, "stream": False},
                    timeout=REQUEST_TIMEOUT,
                )
                r.raise_for_status()
                return strip_thinking(r.json()["response"])
            except requests.exceptions.Timeout:
                last_error = "timeout"
                log("WARN", f"{self.model} — timeout intento {attempt}/{MAX_RETRIES}")
            except requests.exceptions.RequestException as e:
                last_error = str(e)
                log("WARN", f"{self.model} — error intento {attempt}/{MAX_RETRIES}: {e}")
            except (KeyError, ValueError) as e:
                last_error = str(e)
                log("WARN", f"{self.model} — respuesta inválida: {e}")
                break
            time.sleep(2)
        log("ERROR", f"{self.model} falló tras {MAX_RETRIES} intentos: {last_error}")
        return None

    def stop(self):
        log("STOP", self.model)
        subprocess.run(
            ["ollama", "stop", self.model],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )

# =========================
# SCAN
# =========================

def scan_files(root: str, include_paths=None) -> list:
    files     = []
    root_path = Path(root)

    for path in sorted(root_path.rglob("*")):
        if not path.is_file():
            continue
        if path.suffix.lower() not in CODE_EXTENSIONS:
            continue
        if include_paths:
            if not any(str(path).startswith(str(root_path / p)) for p in include_paths):
                continue
        try:
            content = path.read_text(encoding="utf-8", errors="ignore")
        except Exception as e:
            log("SKIP", f"No se pudo leer {path}: {e}")
            continue
        files.append({"path": str(path.relative_to(root_path)), "content": content})

    log("SCAN", f"{len(files)} archivos encontrados")
    return files

# =========================
# AGRUPAR módulo → archivo → bloques
# =========================

def group_modules(files: list) -> dict:
    """
    Retorna:
    {
      "módulo": {
        "archivo/relativo.ts": [FunctionBlock, ...]
      }
    }
    El módulo es la primera carpeta del path (fisica, matematicas, core, etc.)
    """
    modules = {}

    for f in files:
        parts  = f["path"].replace("\\", "/").split("/")
        module = parts[0] if len(parts) > 1 else "_root"
        blocks = extract_functions(f["path"], f["content"])
        log("EXTRACT", f"{f['path']}: {len(blocks)} bloques")
        modules.setdefault(module, {}).setdefault(f["path"], []).extend(blocks)

    total = sum(len(b) for fd in modules.values() for b in fd.values())
    log("GROUP", f"{len(modules)} módulos | {total} bloques en total: {list(modules.keys())}")
    return modules

# =========================
# UTILIDADES
# =========================

def safe_parse_json(text, model: str, label: str) -> dict:
    if text is None:
        return {"error": "modelo no respondió", "model": model, "label": label}

    clean = text.strip()
    if clean.startswith("```"):
        lines = clean.split("\n")
        clean = "\n".join(lines[1:-1]) if lines[-1].strip() == "```" else "\n".join(lines[1:])

    try:
        return json.loads(clean)
    except json.JSONDecodeError:
        log("WARN", f"{model} — {label}: no es JSON válido, guardando raw")
        return {"raw_response": text, "parse_error": True, "model": model, "label": label}


def safe_name(s: str) -> str:
    return re.sub(r"[^a-zA-Z0-9_\-]", "_", s)

# =========================
# PROMPTS
# =========================

def build_function_prompt(module: str, file_path: str, block: FunctionBlock) -> str:
    return (
        f"{CONTEXT_ANALYZER}\n\n"
        f"MÓDULO: {module}\n"
        f"ARCHIVO: {file_path}\n"
        f"TIPO: {block.kind}\n"
        f"NOMBRE: {block.name}\n"
        f"LÍNEA: {block.lineno}\n\n"
        f"CÓDIGO:\n```typescript\n{block.source}\n```"
    )


def build_reviewer_prompt(all_data: dict) -> str:
    now = datetime.now().strftime("%Y-%m-%d %H:%M")
    return (
        f"{CONTEXT_REVIEWER}\n\n"
        f"FECHA: {now}\n\n"
        f"ANÁLISIS DE MODELOS:\n"
        f"{json.dumps(all_data, indent=2, ensure_ascii=False)}"
    )

# =========================
# GUARDAR OUTPUTS
# =========================

def save_function_output(base_path: str, model: str, module: str, file_path: str, block_name: str, data: dict):
    safe_model = model.replace(":", "_").replace("/", "_")
    out_dir = (
        Path(base_path) / "coders" / safe_model
        / safe_name(module) / safe_name(file_path)
    )
    out_dir.mkdir(parents=True, exist_ok=True)
    out_file = out_dir / f"{safe_name(block_name)}.json"
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

# =========================
# ORQUESTADOR GENÉRICO
# =========================

def run_models(models: list, task_fn) -> dict:
    results = {}
    for model in models:
        runner = ModelRunner(model)
        runner.start()
        try:
            result = task_fn(runner)
            if result is not None:
                results[model] = result
        except Exception as e:
            log("ERROR", f"Excepción inesperada con {model}: {e}")
        finally:
            runner.stop()
    return results

# =========================
# FASE CODERS
# =========================

def run_coders(modules: dict, output_dir: str) -> dict:
    """
    Itera módulo → archivo → bloque.
    Resultado: { model: { módulo: { archivo: { nombre_bloque: json } } } }
    """
    def task(runner: ModelRunner) -> dict:
        output = {}
        for module_name, files_dict in modules.items():
            output.setdefault(module_name, {})
            for file_path, blocks in files_dict.items():
                output[module_name].setdefault(file_path, {})
                for block in blocks:
                    label = f"{module_name}/{file_path}/{block.name}"
                    log(runner.model, f"analizando: {label}")
                    prompt = build_function_prompt(module_name, file_path, block)
                    raw    = runner.run(prompt)
                    parsed = safe_parse_json(raw, runner.model, label)
                    output[module_name][file_path][block.name] = parsed
                    save_function_output(output_dir, runner.model, module_name, file_path, block.name, parsed)
        return output

    return run_models(CODER_MODELS, task)

# =========================
# FASE REVIEWERS
# =========================

def run_reviewers(coder_outputs: dict, output_dir: str) -> dict:
    def task(runner: ModelRunner):
        log(runner.model, "mergeando y revisando análisis...")
        return runner.run(build_reviewer_prompt(coder_outputs))

    results = run_models(REVIEWER_MODELS, task)

    for model, report in results.items():
        if report:
            safe_model  = model.replace(":", "_").replace("/", "_")
            report_path = Path(output_dir) / f"report_{safe_model}.md"
            report_path.write_text(report, encoding="utf-8")
            log("SAVE", f"Reporte guardado: {report_path}")

    return results

# =========================
# VALIDACIÓN DE MODELOS
# =========================

def get_available_models() -> list:
    try:
        r = requests.get(f"{OLLAMA_URL}/api/tags", timeout=10)
        r.raise_for_status()
        return [m["name"] for m in r.json().get("models", [])]
    except requests.exceptions.RequestException as e:
        log("ERROR", f"No se pudo conectar a Ollama: {e}")
        return []


def filter_available(models: list, available: list):
    ok, missing = [], []
    for m in models:
        if any(m == a or m.split(":")[0] == a.split(":")[0] for a in available):
            ok.append(m)
        else:
            missing.append(m)
    return ok, missing


def validate_models() -> bool:
    global CODER_MODELS, REVIEWER_MODELS

    log("VALIDATE", "Consultando modelos disponibles en Ollama...")
    available = get_available_models()

    if not available:
        log("ERROR", "Ollama no devolvió modelos. ¿Descargaste alguno?")
        log("INFO",  "Ejecutá: ollama pull qwen2.5-coder:14b")
        return False

    log("VALIDATE", f"Modelos disponibles: {available}")

    coder_ok,  coder_miss  = filter_available(CODER_MODELS,    available)
    review_ok, review_miss = filter_available(REVIEWER_MODELS, available)

    if coder_miss:
        log("WARN", f"Coders faltantes (ignorados): {coder_miss}")
        for m in coder_miss:
            print(f"          → ollama pull {m}")
    if review_miss:
        log("WARN", f"Reviewers faltantes (ignorados): {review_miss}")
        for m in review_miss:
            print(f"          → ollama pull {m}")

    CODER_MODELS    = coder_ok
    REVIEWER_MODELS = review_ok

    if not CODER_MODELS:
        log("ABORT", "No hay ningún coder disponible.")
        return False
    if not REVIEWER_MODELS:
        log("WARN", "No hay reviewers — se omite la fase de revisión.")

    log("VALIDATE", f"Coders activos:    {CODER_MODELS}")
    log("VALIDATE", f"Reviewers activos: {REVIEWER_MODELS}")
    return True

# =========================
# PIPELINE PRINCIPAL
# =========================

def run_pipeline(root: str = ".", include_paths=None, output: str = "auto_docs"):
    start = time.time()
    Path(output).mkdir(exist_ok=True)

    log("PIPELINE", f"root={root} | output={output}")

    if not validate_models():
        return

    files = scan_files(root, include_paths)
    if not files:
        log("ABORT", "No se encontraron archivos para analizar")
        return

    modules = group_modules(files)

    log("PHASE", "=== CODERS ===")
    coder_outputs = run_coders(modules, output)

    coders_json = Path(output) / "coders.json"
    coders_json.write_text(json.dumps(coder_outputs, indent=2, ensure_ascii=False), encoding="utf-8")
    log("SAVE", f"Outputs de coders: {coders_json}")

    log("PHASE", "=== REVIEWERS ===")
    run_reviewers(coder_outputs, output)

    elapsed = time.time() - start
    log("DONE", f"Pipeline completado en {elapsed:.1f}s — reportes en ./{output}/")

# =========================
# CLI
# =========================

if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(
        description="Auto-documentador de código por función/método con LLMs locales via Ollama"
    )
    parser.add_argument("--root",    default=".",         help="Raíz del proyecto a analizar")
    parser.add_argument("--include", nargs="*",           help="Subcarpetas a incluir (ej: fisica matematicas)")
    parser.add_argument("--output",  default="auto_docs", help="Carpeta de salida para reportes")

    args = parser.parse_args()
    run_pipeline(root=args.root, include_paths=args.include, output=args.output)

# Ejemplos:
#   python orchestrator_docs.py --root ./generadoresV2 --output docs_ai
#   python orchestrator_docs.py --root ./generadoresV2 --include fisica matematicas --output docs_ai
#   python orchestrator_docs.py --root ./generadoresV2 --include core basic --output docs_ai