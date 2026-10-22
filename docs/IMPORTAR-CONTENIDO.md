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

## Qué crea
Todo queda a nombre del administrador (el admin principal, o `--dueno=<usuarioId>`), con visibilidad pública.
- **Tema** → `Modulo` `cont-<materia>--<ruta>` (ids seguros para URL: sin `:`, `/` ni `#`): teoría como un `theoryItems` tipo "Texto" y prerrequisitos en `dependencies` como `{id, type: "required"}`
  (los de `dependencias.md`, incluidos los cruces entre materias). Una `PlantillaEjercicio` por pregunta (`….pN`, visibilidad `privada`: no aparece en la
  biblioteca de los docentes) y un `Quiz` **formal** que sortea **10 preguntas** por intento. Es formal a propósito: aprobarlo (60 %) marca el módulo como completado y desbloquea los siguientes; uno de práctica no avanza.
- **Examen jefe** → `Modulo` `cont-examen-jefe--<logro>` de tipo evaluación (categoría "Evaluación", quiz `formal`). Depende de los temas que evalúa.
  Sortea **de 20 a 50 preguntas**: un cuarto del pool, con piso 20 y tope 50 (`preguntasDeExamen`). Los de materia reutilizan las plantillas de sus temas;
  los 13 de idiomas (`cont-examen-jefe-idiomas--<idioma>`) traen sus 500 preguntas propias (sortean 50). La certificación exige **todo hasta B2** (o su equivalente: JLPT N2, HSK 3-4, TOPIK intermedio-alto); los temas C1 (N1, HSK 5-6, avanzado) son un extra y no entran en el logro.
- **Libro de teoría extendida** → `Libro` público (`cont-libro--<materia>`) y un `Modulo` sin evaluación (categoría "Libro") que lo abre.

Los módulos con prerrequisitos se abren al completarlos; un directivo o docente puede habilitar uno a mano.

## Qué no importa
- Los logros: se implementan después de los exámenes jefe.
- Las recetas (Ruta B no se evalúa) y los 68 cuestionarios con referencias internas al sistema (se filtran en el manifiesto).

## Garantías
- Es idempotente: ids determinísticos, lo existente se omite. `--actualizar` reemplaza lo importado antes, salvo cuestionarios con intentos.
- Con `--aplicar` compara `IMPORT_DB_ESPERADA` con `select current_database()` y aborta si no coinciden.
- Probado contra `virtualbook_test` (no producción): 2378 módulos (2133 temas, 221 exámenes jefe, 24 libros), 52285 plantillas y 2126 cuestionarios en 8 s.
  Un alumno ve el módulo, abre un intento de 10 preguntas y lo envía con nota; un examen jefe de 157 preguntas sortea 40, el de alemán (500) sortea 50; los módulos con
  prerrequisitos devuelven `module_locked`; el libro se lee desde su módulo.
