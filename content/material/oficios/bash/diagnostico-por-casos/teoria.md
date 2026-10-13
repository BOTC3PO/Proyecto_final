# Bash — Diagnóstico de scripts por casos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../cron-y-tareas-programadas/` y todos los temas anteriores de Bash (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/bash/diagnostico-por-casos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. El método

Cuando un script falla, **no se prueba al azar**. Se sigue un camino:

1. **Leer el mensaje de error completo**: dice el archivo, la línea y, muchas veces, la causa.
2. **Reproducirlo** de la forma más simple posible.
3. **Mirar el entorno**: ¿qué usuario, qué carpeta, qué `PATH`, qué variables?
4. **Formular una hipótesis** y comprobarla con una prueba chica (un `echo`, `bash -x`, `bash -n`).
5. **Arreglar una sola cosa** y volver a probar.

---

## 2. Síntomas y causas más probables

| Síntoma | Hipótesis para revisar primero |
|:--|:--|
| `Permission denied` al ejecutar | falta `chmod +x` |
| `command not found` | error de tipeo, falta el `./`, o el programa no está en el `PATH` |
| `bad interpreter` con `^M` | finales de línea de Windows (CRLF) |
| `[: too many arguments` o `unary operator expected` | variable sin comillas dentro de `[ ]` |
| `syntax error near unexpected token` | falta un `fi`, `done`, `esac` o `;` |
| `unbound variable` | variable sin definir con `set -u` |
| funciona a mano y no en cron | `PATH`/rutas relativas/entorno mínimo |
| no muestra nada | la salida va a un archivo o al canal de errores |
| borra o copia de más | variable vacía o sin comillas |

---

## 3. Herramientas

- `bash -x script.sh`: **traza** de cada comando con sus valores.
- `bash -n script.sh`: revisa la **sintaxis** sin ejecutar.
- `echo "valor: [$var]"`: muestra el contenido (los corchetes revelan espacios).
- `set -euo pipefail`: hace que los errores aparezcan antes.
- `type comando` o `which comando`: dónde está un comando.
- `echo $?`: el código de salida del último comando.

---

## 4. El caso más peligroso

```bash
directorio=""
rm -rf $directorio/*         # si la variable está vacía, ¡se borra /*!
```

Siempre: **comillas**, **`set -u`**, y **verificar** (`[ -n "$directorio" ] && rm -rf -- "$directorio"/*`). Antes de borrar algo con una variable, mostrala con `echo`.
