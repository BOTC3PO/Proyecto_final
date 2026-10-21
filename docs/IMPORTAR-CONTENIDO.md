# Importar el temario a la plataforma

La plataforma no lee `content/material/`: el temario entra a la base con un importador de dos pasos.

```bash
# 1. Manifiesto (no toca ninguna base): un registro por tema con teoría limpia, preguntas VBLang y dependencias resueltas
python3 content/material/_qa_tools/exportar_manifiesto.py /tmp/manifiesto.json [materia ...]

# 2. Importador. Sin --aplicar es un ensayo.
cd api
tsx scripts/importar_contenido.ts /tmp/manifiesto.json [--materia=x,y]            # ensayo
IMPORT_DB_ESPERADA=<nombre de la base> tsx scripts/importar_contenido.ts /tmp/manifiesto.json --aplicar
```

## Qué crea por cada tema
- `Modulo` `cont:<materia>/<ruta>`: teoría como un `theoryItems` tipo "Texto", prerrequisitos en `dependencies` como `{id, type: "required"}`
  (los de `dependencias.md`, incluidos los cruces entre materias), `visibility: "publico"`, dueño `system`.
- Una `PlantillaEjercicio` por pregunta (`cont:<…>#pN`): dueño `system`, visibilidad `privada`, así que no aparece en la biblioteca de los docentes.
- Un `Quiz` y su `QuizVersion` (`cont:<…>#quiz`, `#v1`): pool de relleno, hasta 10 preguntas por intento (`POR_INTENTO`).

## Qué no importa
- Los exámenes jefe (no existe modelo) y los logros.
- Los libros de teoría extendida y las recetas (Ruta B no se evalúa).
- Los 68 cuestionarios con referencias internas al sistema se filtran en el manifiesto.

## Garantías
- Es idempotente: ids determinísticos, lo existente se omite. `--actualizar` reemplaza lo importado antes, salvo cuestionarios con intentos.
- Con `--aplicar` compara `IMPORT_DB_ESPERADA` con `select current_database()` y aborta si no coinciden.
- Probado el 2026-10-21 contra `virtualbook_test`: 2133 módulos, 45785 plantillas y 1905 cuestionarios en 7 s (65 MB); un alumno vio el módulo,
  creó un intento de 10 preguntas y lo envió con nota. Las dependencias se aplican: un módulo con prerrequisitos devuelve `module_locked`.
