# Auto-Docs Ollama (Rust)

Programa en Rust que documenta automáticamente un proyecto usando **Ollama** (LLM local).
Escanea el código fuente, extrae la estructura de bases SQLite, genera documentación por módulo, un README consolidado y diagramas de flujo en Mermaid.

## Requisitos

- **Rust** >= 1.75 (`rustup` recomendado)
- **Ollama** corriendo localmente con al menos un modelo descargado
- El proyecto a documentar accesible en disco

## Instalación rápida

```bash
# 1. Clonar/copiar esta carpeta
cd auto-docs-rs

# 2. Compilar (release para mejor rendimiento)
cargo build --release

# 3. El binario queda en target/release/auto-docs-ollama
```

## Uso

```bash
# Uso básico (usa llama3 por defecto)
./target/release/auto-docs-ollama --proyecto /ruta/al/proyecto

# Especificar modelo
./target/release/auto-docs-ollama \
  --proyecto /ruta/al/proyecto \
  --modelo deepseek-coder \
  --salida auto_docs

# Todos los parámetros
./target/release/auto-docs-ollama \
  --proyecto /ruta/al/proyecto \
  --modelo mistral \
  --ollama-url http://localhost:11434 \
  --salida auto_docs \
  --max-tokens 4096 \
  --temperatura 0.3
```

## Parámetros CLI

| Parámetro | Corto | Default | Descripción |
|-----------|-------|---------|-------------|
| `--proyecto` | `-p` | `.` | Ruta raíz del proyecto |
| `--modelo` | `-m` | `llama3` | Modelo de Ollama |
| `--ollama-url` | `-o` | `http://localhost:11434` | URL de Ollama |
| `--salida` | `-s` | `auto_docs` | Carpeta base de salida |
| `--max-tokens` | | `4096` | Tokens máx por respuesta |
| `--temperatura` | | `0.3` | Temperatura de generación |

## Carpetas ignoradas

El programa ignora automáticamente:
`.claude`, `node_modules`, `audits`, `server`, `docs`, `archive`, `tools`, `.git`, `.expo`, `dist`, `.next`, `build`, `coverage`, `__pycache__`, `target`, `auto_docs`, `auto docs`, `logs`

## Salida generada

La documentación se guarda en `auto_docs/<nombre_modelo>/`:

```
auto_docs/
└── deepseek-coder/          # Subcarpeta con nombre del modelo
    ├── INDICE.md             # Índice con links a todos los docs
    ├── 00_esquema_db.md      # Estructura de todas las DBs SQLite
    ├── 01_api_src.md         # Doc del módulo api/src
    ├── 02_api_routes.md      # Doc del módulo api/routes
    ├── ...                   # Un .md por cada módulo
    ├── README_PROYECTO.md    # Documentación consolidada final
    └── FLUJO_PROYECTO.md     # Diagramas Mermaid del flujo
```

## Pipeline de ejecución

1. **Verifica** conexión con Ollama y existencia del modelo
2. **Escanea** archivos del proyecto (ignora carpetas configuradas)
3. **Extrae** estructura de bases SQLite (solo schema, no datos)
4. **Agrupa** archivos por módulo (primeros 2 niveles de directorio)
5. **Documenta** cada módulo enviando código + schema al LLM
6. **Genera** README consolidado con arquitectura y stack
7. **Genera** diagramas de flujo Mermaid del proyecto
8. **Crea** índice con links a toda la documentación

## Comparar modelos

Podés correr el programa con distintos modelos y la salida queda en carpetas separadas:

```bash
# Correr con 3 modelos distintos
./target/release/auto-docs-ollama -p ./mi-proyecto -m llama3
./target/release/auto-docs-ollama -p ./mi-proyecto -m deepseek-coder
./target/release/auto-docs-ollama -p ./mi-proyecto -m mistral

# Resultado:
# auto_docs/llama3/
# auto_docs/deepseek-coder/
# auto_docs/mistral/
```

## Notas

- Archivos >100KB se ignoran para no exceder el contexto del LLM
- Archivos largos se truncan a ~3000 chars (inicio + final) en el prompt
- El timeout por request es de 300s (modelos grandes pueden tardar)
- Extensiones soportadas: `.ts`, `.tsx`, `.js`, `.jsx`, `.rs`, `.py`, `.sql`, `.json`, `.toml`, `.yaml`, `.yml`, `.md`, `.html`, `.css`, `.scss`, `.vue`, `.svelte`
