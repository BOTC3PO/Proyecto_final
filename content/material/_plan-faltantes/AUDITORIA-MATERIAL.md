# Auditoría del material general (2026-10-19)

Script reutilizable: `python3 content/material/_qa_tools/auditar_material.py` (varias categorías son heurísticas: abajo se aclara cuáles son reales).

## Ya corregido en esta pasada
- **53 cuestionarios de idiomas con bloques VBLang mal cerrados** (alemán, francés, inglés, italiano, japonés, portugués BR/PT…): el bloque de la última pregunta no tenía fence de cierre (en 29 casos los backticks estaban pegados al final de la última línea), así que esa pregunta no se leía; en `aleman/writing-b2` quedaban 13 de 25 sin leerse. Se cerraron los bloques y las preguntas finales que resultaron estar **cortadas por la generación original** (25 archivos, p. ej. «el string no tiene comilla de cierre») se eliminaron y se renumeró. Ningún archivo bajó de 20 preguntas. Los 53 pasan el validador.

## Corregido después (segunda pasada, con el motor real de VBLang)
`_qa_tools/auditar_preguntas.ts` genera cada pregunta como lo hace la app y detecta lo que el validador de sintaxis no ve. Resultado sobre los 1.850 cuestionarios:
- **285 preguntas con opciones servidas como campo de texto** (tenían `opciones_explicitas` pero no `tipo: mc`, así que el alumno veía un campo vacío en vez de opciones): se agregó `tipo: mc`. Estaban sobre todo en idiomas, historia profunda, informática y física.
- **Preguntas con dos opciones correctas, opciones repetidas o vacías:** 0 restantes (≈150 corregidas: distractores aleatorios que chocaban con la respuesta correcta, opciones literalmente repetidas, respuestas erróneas como `schöne` por `schönen` o L'Hôpital con resultados equivocados).
- **Copias exactas de preguntas y plantillas rotas** (`{{ uno_de([...]) }}` visible en 37 preguntas de historia profunda, `${frase1}` sin resolver en francés): reemplazadas o reescritas; ≈10 archivos de idiomas se reescribieron enteros.
- **Notas internas del generador visibles al alumno** (`antropologia/subcampos-de-la-antropologia`): limpiadas.
- **Avisos que quedan y NO son defectos:** «completar sin hueco `___`» (≈1.600; el motor corrige contra la respuesta guardada), «enunciado repetido» con enunciado genérico y opciones distintas (válido), llaves `{...}` de código de ejemplo (awk, JSON, bash), «tipo vf/completar con opciones» (vf con `verdadero/falso` y completar con banco de palabras son intencionales).

## Problemas reales sin corregir (necesitan tu criterio)
1. **127 temas nuevos fuera de los exámenes jefe** (`verificar_examen_jefe.py`: 127 errores, 20 avisos; antes 0). Son los de Electrónica 15, Dibujo técnico 15, Ciencia de Materiales 15, UX/Diseño 14, Automatización 14, Filosofía 9, Arte 9, Sociología 7, Psicología 6, Comunicación 6, Ciudadanía digital 6, Aprendizaje 6, Antropología 5. Hay que rehacer clusters y pools (`gen_examen_jefe_prereq_clusters.py`) y los logros. Los 20 avisos son `dependencias.md` desactualizados (Ciudadanía digital tiene 12 temas sin fila; Antropología cita `H10`).
2. **Cuestionarios de destrezas casi idénticos entre idiomas:** `speaking-*` y `writing-*` de **árabe, ruso y hindi** comparten entre el 56 % y el 88 % de los enunciados (36 pares; p. ej. `arabe/speaking-b1` vs `ruso/speaking-b1` 88 %). Son preguntas genéricas en español, no del idioma. También `aleman/writing-b2` y `aleman/reading-b2` son el mismo cuestionario de preposiciones y conjugación (no tratan de escritura ni lectura B2), y `portugues-pt/ser-estar` y `speaking-a2` comparten el primer título.
3. **Cuestionarios con menos de 20 preguntas** (mínimo de `PROCEDIMIENTO.md`): Economía — economía-feminista (6), fisiocracia (6), mercantilismo (6), keynesianismo (8), ordoliberalismo (10), socialismo-utópico (10), marxismo (11), neoliberalismo (11), liberalismo-clásico (12) — y `oficios/cocina-gastronomia/diagnostico-cocina-por-casos` (18).
4. **Placeholders `[IMAGEN: …]` visibles en 219 teorías (388 en total):** historia-profunda 151, física 52, informática 42, economía 19, ingeniería 13, psicología 13, derecho 12, resolución de problemas 10, civica 8, diseño 8, dibujo técnico 7, comunicación 7… Si el lector muestra el texto tal cual, el alumno ve el pedido de imagen.
5. **251 teorías con «Depende de: a determinar (ver dependencias.md)»** en la cabecera (resto de la plantilla). Cosmético, pero se ve.
6. **24 temas antiguos sin fila en su `dependencias.md`** (ciudadanía digital ×5, ESI ×7, matemática ×5, física ×2, economía ×2, arte, filosofía, vida cotidiana) y `idiomas-extranjeros/` no tiene `dependencias.md`.
7. **Numeración con saltos en 4 cuestionarios** (falta una pregunta intermedia): `arte/ritmo-compas-pulso-figuras-musicales` (sin 15), `historia/economias-regionales-tempranas` (sin 6), `comunicacion/teoria-de-la-comunicacion-emisor-receptor-canal-ruido`, `idiomas-extranjeros/portugues-br/writing-b1`.
8. **Metadatos `tema:` y `materia:` inconsistentes dentro de un mismo cuestionario** en ~150–170 archivos (p. ej. `historia_profunda` y `historia`, o `tema:` distinto en cada pregunta). Solo importa si el sistema agrupa o filtra por esos campos: confirmalo.
9. **Enlaces entre temas:** 36 referencias `../materia/tema/` en teorías que, desde la carpeta del tema, deberían ser `../../materia/tema/` (12 en temas nuevos); y ~60 destinos que no existen (p. ej. `../../derecho/s-nino/`, mal escrito, en 4 temas de Cívica; `../armonia-básica/` con tilde en Arte; `../gestion-de-proyectos/` y `../clases-de-palabras/` sin carpeta). En `oficios/dependencias.md` las rutas de «Depende de» tienen un nivel de `../` menos del necesario (265 filas): no afecta si la app solo lee nombres.
10. **Teorías de idiomas sin título H1** (257): empiezan con la nota «Generado directamente…» y recién después el `#`.

## Falsos positivos de la auditoría (no son problemas)
- «TODO» (≈736) y «pendiente» (≈344) son palabras comunes en español («todo», «pendiente de una recta»).
- Teorías «<250 palabras» de chino: el chino no lleva espacios; las de `matematica/divisibilidad/regla-del-*` son cortas por diseño.
- Títulos de preguntas repetidos («Pregunta», «Cálculo»): cosmético.
- IDs del MAPA en `dependencias.md` (`N1`, `H10`…): son nodos de `troncos.md`, no carpetas.

## Estado de la validación completa de cuestionarios
Ver el final de este archivo (se completa al terminar la corrida).
