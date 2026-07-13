# Guía del docente — crear y publicar un módulo

| | |
|---|---|
| **Estado** | Vigente |
| **Audiencia** | Docentes |
| **Última actualización** | 2026-07-08 (PLAN-P §2) |
| **Fuente de verdad** | `apps/web/src/pages/modulos/ModuloEditor.tsx` |

> Referencia técnica (modelo de datos, invariantes de guardado, intentos) en
> [`../modulos.md`](../modulos.md). Esta guía describe la pantalla de edición tal como existe hoy.

## Las 5 secciones del editor (`/modulos/crear`, `/modulos/:id/editar`)

El editor de un módulo se organiza en secciones navegables desde una barra lateral, cada una con un
estado (Completa/Incompleta/Opcional): **General**, **Teoría**, **Herramientas**, **Cuestionarios**,
**Dependencias**.

## 1. General

Título, descripción, materia, nivel, categoría, duración estimada, y la **Visibilidad**:

- **Público** — cualquiera puede verlo. Es el valor por defecto para un módulo nuevo.
- **Privado (solo vos)** — sólo el docente que lo creó.
- **Escuela** — visible para todos los de una escuela puntual (se elige buscándola).

**No hay un botón "Publicar" separado ni un estado de borrador**: el módulo es visible según esta
Visibilidad desde el momento en que se guarda. Cambiar de Privado a Público/Escuela *es* publicarlo.

## 2. Teoría

Recursos de estudio del módulo: texto, video, presentación, enlace, libro, documento, o una
herramienta interactiva embebida. Para agregar uno: título + tipo de recurso (el selector sólo
habilita los tipos que la materia elegida en General soporta — por ejemplo, no todas las materias
ofrecen "TuesdayJS").

**Insertar un material guardado**: si antes guardaste un mapa, un documento de bloques o una
presentación como "Material" desde su propio editor (botón "Guardar como material"), el botón
**"Insertar material guardado"** de esta sección lo trae acá. Importante: es una **copia (snapshot)
en el momento de insertar, no un vínculo en vivo** — si después editás el material original, el
recurso ya insertado en este módulo **no se actualiza solo**; hay que volver a insertarlo.

Tipos de recurso disponibles:

| Tipo | Qué es |
|---|---|
| Texto / Video | Contenido simple: texto libre o un video (embed). |
| Presentación | Diapositivas armadas con el editor de diapositivas (`TheorySlideEditor`). |
| Enlace | Un link externo o a otra página de la plataforma. |
| Libro | Un libro del editor de libros (se abre para leer sin salir del módulo). |
| Documento | Una página de referencia existente. |
| Herramienta | Un documento del **editor de bloques** embebido — texto, LaTeX, tablas, gráficos, diagramas, formas, audio/video/PDF, etc. Ver [`editor-bloques.md`](./editor-bloques.md). |
| Herramienta standalone | Una de las herramientas fijas de la plataforma (tabla periódica, escalador de recetas, línea de tiempo, mapa), embebida en modo lectura. |

## 3. Herramientas

Atajo visual sobre la misma Teoría: esta sección marca "Con herramientas" apenas hay al menos un
recurso de tipo Herramienta o Herramienta standalone en la lista de arriba — no es una lista
separada, es el mismo contenido de la sección Teoría.

## 4. Cuestionarios

**Escala de notas**: qué escala se le muestra al alumno como nota final (por defecto, 0–100). Se
aplica a todos los cuestionarios formales del módulo.

Dos caminos para sumar un cuestionario, ambos reemplazan por completo a los editores manuales V1/V2
(retirados de esta pantalla):

- **"Usar plantilla VBLang"** — abre el selector de plantillas: elegís una plantilla existente (de
  la escuela, de la plataforma, o tuya) y se genera un cuestionario paramétrico con ella. Es el
  camino recomendado para crear un cuestionario nuevo.
- **"Usar cuestionario existente"** (sólo con el módulo ya guardado) — clona dentro de este módulo un
  cuestionario **suelto** (uno que armaste sin asignarlo a ningún módulo) o uno que ya usás en otro
  módulo. Clona, no mueve: el original sigue existiendo tal cual donde estaba.
- **Generador (legacy)** — sigue disponible sólo para materias que todavía no tienen sus generadores
  portados a VBLang. Si tu materia ya migró, no vas a ver esta opción.

## 5. Dependencias

Encadenar módulos: buscás otro módulo y elegís qué relación tiene con el que estás editando —
**"Requerido antes"** (el alumno no puede empezar este módulo si no completó el otro) o **"Desbloquea
al terminar"** (terminar este módulo habilita el otro). Es opcional.

> Nota técnica para quien reporte un bug acá: hoy sólo "Requerido antes" efectivamente bloquea el
> acceso del alumno; "Desbloquea al terminar" se guarda pero no se encontró ningún lugar del código
> que lo use para habilitar nada — si un docente reporta que "desbloquea" no hace efecto visible,
> puede ser justamente eso (ver [`../modulos.md`](../modulos.md#dependencias-entre-módulos)).

## Vista del alumno

Un alumno ve el módulo publicado (según su Visibilidad/escuela) desde `/modulos/:id`, con la teoría
en `TheoryItemCard` y los cuestionarios listados para rendir. Un docente puede previsualizar cómo lo
ve el alumno mediante el overlay de vista alumno (`VistaAlumnoOverlay`) sin salir del editor. Rendir
un cuestionario navega a `QuizAttempt` (`pages/quizzes/QuizAttempt.tsx`) — el intento se puede
abandonar y retomar mientras esté `in_progress` (ver
[intentos](../modulos.md#intentos-materializar-y-congelar)); si venció el tiempo límite, se cierra
solo la próxima vez que se lo consulta, sin que el alumno tenga que hacer nada.
