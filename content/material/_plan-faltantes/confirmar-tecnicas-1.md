# Para confirmar — UX/Diseño y Dibujo técnico (29 temas nuevos)

Lista de lo que quedó sin verificar con fuente oficial o que requiere una decisión. Todo lo no listado acá se escribió con conocimiento general estable (principios de diseño, geometría, convenciones de dibujo).

## Verificado con búsqueda web
- Las diez heurísticas de Nielsen (nombres y origen 1990/1994).
- WCAG 2.2: principios POUR, niveles A/AA/AAA, Recomendación del W3C de octubre de 2023.
- Ley 26.653 (accesibilidad web, ONTI, Decreto 656/2019, Disposición 6/2019).
- ISO 286: grados IT, letras de posición, agujero base, ejemplos H7/g6, H7/h6, H7/k6, H7/p6.
- Nombres de normas IRAM de dibujo técnico, **tal como las citan programas de cátedras** (4501 método de proyección, 4502 líneas, 4503 letras y números, 4504 formatos y plegado, 4505 escalas, 4507 cortes, 4508 rótulo, 4511 y 4513 acotación, 4540 perspectivas).

## Sin verificar con la fuente oficial (confirmar antes de publicar)
| Dato | Tema | Motivo |
|---|---|---|
| Números y títulos exactos de las normas IRAM, y que sigan vigentes | `tipos-de-linea-formatos-y-rotulo`, `cortes-y-secciones`, `dibujo-arquitectonico-...` | Solo hay programas de cátedra, no el texto de IRAM. |
| Conteo exacto de criterios de éxito de WCAG 2.2 y número de criterios por nivel | `niveles-wcag-...` | No se cita ningún conteo en el tema, pero conviene revisar la redacción. |
| Qué versión y nivel de WCAG exige hoy la Ley 26.653 (WCAG 2.0 vs. AA vs. A) | `niveles-wcag-...` | Las fuentes encontradas difieren; el tema solo dice "consultar la disposición vigente". |
| Que ISO 21920 actualizó a ISO 1302 (símbolos de rugosidad) | `rugosidad-y-acabado-superficial` | La búsqueda no lo confirmó. |
| Rangos de Ra por proceso (torneado, rectificado, lapeado) | `rugosidad-y-acabado-superficial` | Son órdenes de magnitud de tablas de taller, no de una norma. |
| Pasos normales de roscas métricas (M6=1, M8=1,25, M10=1,5, M12=1,75, M16=2, M20=2,5) | `representacion-de-roscas-...` | De memoria; son valores estándar pero no se citó la tabla ISO. |
| Convención ISO 2553 sobre lado de la flecha/opuesto y símbolos de soldadura | `simbolos-de-soldadura-y-uniones` | De memoria; difiere de AWS A2.4. |
| Tamaño mínimo táctil de WCAG 2.2 (24×24 px AA; 44×44 px AAA) | `diseno-responsive-y-mobile-first` | De memoria. |
| Proporción de varones con daltonismo (~1 de cada 12) | `color-en-interfaces` | Orden de magnitud habitual, sin fuente citada. |
| Año del término "dark patterns" (2010, Harry Brignull) | `etica-del-diseno-patrones-oscuros` | De memoria. |
| Promedio de SUS (~68) y fórmula de cálculo | `analisis-de-datos-de-uso-y-metricas-ux` | De memoria; es la fórmula estándar. |
| Ley 25.326 y Ley 24.240 (artículos y alcance) | `etica-del-diseno-patrones-oscuros` | Solo se citan los números y la idea general. |
| Atribuciones: Marcotte (2010), Frost (Atomic Design), Norman, ISO 9241-210, Mago de Oz | varios de UX | De memoria. |
| Reglas de AEA para instalaciones y matrícula | `dibujo-electrico-...` | Se citan genéricamente, sin números de reglamento. |

## Hallazgos fuera de alcance (no se tocaron)
- `dibujo-tecnico/acotacion-normalizada/teoria.md` describe la línea de cota como "discontinua o continua" y cita normas ABNT (Brasil); en dibujo técnico la línea de cota es continua fina, y la referencia local son las IRAM 4511/4513. Conviene corregirlo.
- `diseño/jerarquia-visual-e-informacion/teoria.md` anuncia "tipografía" y "colores": ahora existen `tipografia-en-interfaces` y `color-en-interfaces`; falta actualizar el enlace.
- `oficios/soldador` y `oficios/electricista/lectura-de-planos-electricos` son referencias cruzadas: ninguno de esos oficios enlaza todavía a estos temas.

## Decisiones tuyas
- ¿Dibujo arquitectónico queda dentro de Dibujo técnico (como se hizo) o se separa como materia?
- Estos 29 temas no tienen ID en `troncos.md` (solo fila en `dependencias.md`): ¿se agregan al grafo?
- ¿Entran a un examen jefe? Hoy UX/Diseño y Dibujo técnico tienen 1 cluster cada uno; habría que rehacer los clusters con `gen_examen_jefe_prereq_clusters.py`.
