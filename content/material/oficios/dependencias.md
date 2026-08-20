# Oficios — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Materia nueva (2026-08-13, decisión de Javier): mismo patrón
`teoria.md`/`cuestionario.md` que el resto de las materias, no el
formato Ruta A/B de `Cocina/Gastronomía` (ver nota en
`../PROCEDIMIENTO.md`). Cada oficio nuevo (`OF20`-`OF27` de
`troncos.md`) es una subcarpeta; dentro, un tema por **sección
numerada** del diseño en `../oficios-orientacion-vocacional-
PLANIFICACION.md` (no un tema por cada sub-ítem — las secciones
"Materiales"/"Herramientas"/etc. se tratan como una sola lección
cohesiva, mismo criterio de "dos caras de la misma cosa" del Paso 2 de
`../PROCEDIMIENTO.md`, para no explotar en 150+ carpetas un contenido
que por diseño es más liviano que las materias académicas).

El "Nodo MAPA" de cada fila es `OFxx.slug-de-la-seccion` (no hay ID de
mermaid por sub-sección, sólo el `OFxx` del oficio entero en
`troncos.md`). `teoria.md` generado con qwen/qwen3.6-35b-a3b, "revisión
pendiente" en el header de cada uno.

## Jardinero / Paisajista (`OF20`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `jardinero-paisajista/fundamentos-botanicos/` | `../biologia/partes-de-una-planta-y-germinacion/` | Sección 1. Morfología/fisiología de la planta, condicionantes, identificación y sistemática. |
| `jardinero-paisajista/seguridad-jardineria/` | `fundamentos-botanicos/` | Sección 2. |
| `jardinero-paisajista/materiales-jardineria/` | `seguridad-jardineria/` | Sección 3. |
| `jardinero-paisajista/herramientas-y-maquinaria-jardineria/` | `materiales-jardineria/` | Sección 4. |
| `jardinero-paisajista/tecnicas-jardineria/` | `herramientas-y-maquinaria-jardineria/` | Sección 5. |
| `jardinero-paisajista/diagnostico-jardineria-por-casos/` | `tecnicas-jardineria/` | Sección 6, cierre. |

## Tapicero (`OF21`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `tapicero/fundamentos-tapiceria/` | `../matematica/perimetro-y-area/` | Sección 1. |
| `tapicero/seguridad-tapiceria/` | `fundamentos-tapiceria/` | Sección 2. |
| `tapicero/materiales-tapiceria/` | `seguridad-tapiceria/` | Sección 3. |
| `tapicero/herramientas-tapiceria/` | `materiales-tapiceria/` | Sección 4. |
| `tapicero/tecnicas-tapiceria/` | `herramientas-tapiceria/` | Sección 5. |
| `tapicero/diagnostico-tapiceria-por-casos/` | `tecnicas-tapiceria/` | Sección 6, cierre. |

## Modista / Corte y Confección (`OF22`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `modista-corte-y-confeccion/fundamentos-confeccion/` | `../matematica/razon-y-proporcion/` | Sección 1. |
| `modista-corte-y-confeccion/seguridad-confeccion/` | `fundamentos-confeccion/` | Sección 2. |
| `modista-corte-y-confeccion/materiales-confeccion/` | `seguridad-confeccion/` | Sección 3. |
| `modista-corte-y-confeccion/herramientas-confeccion/` | `materiales-confeccion/` | Sección 4. |
| `modista-corte-y-confeccion/tecnicas-confeccion/` | `herramientas-confeccion/` | Sección 5. |
| `modista-corte-y-confeccion/diagnostico-confeccion-por-casos/` | `tecnicas-confeccion/` | Sección 6, cierre. |

## Carpintero de Aluminio (`OF23`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `carpintero-de-aluminio/fundamentos-carpinteria-aluminio/` | `../matematica/rectas-paralelas-y-perpendiculares/` (mismo prerrequisito que `../carpinteria/`) | Sección 1. |
| `carpintero-de-aluminio/seguridad-carpinteria-aluminio/` | `fundamentos-carpinteria-aluminio/` | Sección 2. |
| `carpintero-de-aluminio/materiales-carpinteria-aluminio/` | `seguridad-carpinteria-aluminio/` | Sección 3. |
| `carpintero-de-aluminio/herramientas-carpinteria-aluminio/` | `materiales-carpinteria-aluminio/` | Sección 4. |
| `carpintero-de-aluminio/tecnicas-carpinteria-aluminio/` | `herramientas-carpinteria-aluminio/` | Sección 5. |
| `carpintero-de-aluminio/calculo-carpinteria-aluminio/` | `tecnicas-carpinteria-aluminio/` | Sección 6. |
| `carpintero-de-aluminio/lectura-de-planos-carpinteria-aluminio/` | `calculo-carpinteria-aluminio/` | Sección 7. |
| `carpintero-de-aluminio/diagnostico-aberturas-por-casos/` | `lectura-de-planos-carpinteria-aluminio/` | Sección 8, cierre. |

## Tornero (`OF24`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `tornero/fundamentos-torneria/` | `../fisica/mru/` | Sección 1. Velocidad de corte = velocidad lineal de un punto que gira. |
| `tornero/seguridad-torneria/` | `fundamentos-torneria/` | Sección 2. |
| `tornero/materiales-torneria/` | `seguridad-torneria/` | Sección 3. |
| `tornero/herramientas-torneria/` | `materiales-torneria/` | Sección 4. |
| `tornero/tecnicas-torneria/` | `herramientas-torneria/` | Sección 5. |
| `tornero/calculo-torneria/` | `tecnicas-torneria/` | Sección 6. |
| `tornero/lectura-de-planos-torneria/` | `calculo-torneria/` | Sección 7. |
| `tornero/diagnostico-mecanizado-por-casos/` | `lectura-de-planos-torneria/` | Sección 8, cierre. |

## Cerrajero (`OF25`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `cerrajero/fundamentos-cerrajeria/` | `../matematica/rectas-paralelas-y-perpendiculares/` | Sección 1. |
| `cerrajero/seguridad-cerrajeria/` | `fundamentos-cerrajeria/` | Sección 2. |
| `cerrajero/materiales-cerrajeria/` | `seguridad-cerrajeria/` | Sección 3. |
| `cerrajero/herramientas-cerrajeria/` | `materiales-cerrajeria/` | Sección 4. |
| `cerrajero/tecnicas-cerrajeria/` | `herramientas-cerrajeria/` | Sección 5. |
| `cerrajero/diagnostico-cerrajeria-por-casos/` | `tecnicas-cerrajeria/` | Sección 6. |
| `cerrajero/apertura-de-emergencia-sin-destruccion/` | `diagnostico-cerrajeria-por-casos/` | Sección 7, **último tema a propósito** (decisión de Javier 2026-08-13: lo avanzado va al final, requiere práctica y paciencia). Tratado a nivel conceptual — ver `../oficios-orientacion-vocacional-PLANIFICACION.md` sección Cerrajero para el alcance exacto (qué NO incluir). |

## Herrero / Forjador (`OF26`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `herrero-forjador/fundamentos-herreria/` | `../fisica/calor-q-mc-deltat/`, `../historia-profunda/metalurgia/` | Sección 1. Compartido con `../soldadura/` (si existe la carpeta). |
| `herrero-forjador/seguridad-herreria/` | `fundamentos-herreria/` | Sección 2. |
| `herrero-forjador/materiales-herreria/` | `seguridad-herreria/` | Sección 3. |
| `herrero-forjador/herramientas-herreria/` | `materiales-herreria/` | Sección 4. |
| `herrero-forjador/tecnicas-herreria/` | `herramientas-herreria/` | Sección 5. |
| `herrero-forjador/diagnostico-forja-por-casos/` | `tecnicas-herreria/` | Sección 6, cierre. |

## Relojero (`OF27`)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `relojero/fundamentos-relojeria/` | `../fisica/conservacion-de-la-energia-mecanica/` | Sección 1. El resorte que guarda/libera energía es ese concepto a escala miniatura. |
| `relojero/seguridad-relojeria/` | `fundamentos-relojeria/` | Sección 2. |
| `relojero/materiales-relojeria/` | `seguridad-relojeria/` | Sección 3. |
| `relojero/herramientas-relojeria/` | `materiales-relojeria/` | Sección 4. |
| `relojero/tecnicas-relojeria/` | `herramientas-relojeria/` | Sección 5. |
| `relojero/diagnostico-relojeria-por-casos/` | `tecnicas-relojeria/` | Sección 6, cierre. |
