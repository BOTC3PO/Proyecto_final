# A confirmar — oficios (lote taller y técnicos: Mecánico, Soldador, Metalúrgico, Montador, Refrigeración, Electromecánico, Automatización y robótica)

Escrito el 2026-10-19. Se crearon 32 lecciones nuevas (solo `teoria.md`) y se agregaron 5 preguntas a cada uno de los 7 `diagnostico-*` (ahora 21–23 preguntas). No se crearon libros ni exámenes jefe. No se generó audio.

## Verificado con búsqueda web
- **Resolución SRT 61/2023**: norma de trabajo en altura que complementa el Decreto 911/96; exige responsable de la tarea presente y personal capacitado.
- **Resolución SRT 550/2011**: trata demolición, excavación y submuraciones en obras, **no** trabajo en altura. La planificación y la consigna original citaban «550/11 y 3641/15» para altura; no se usó esa cita.
- **Ley 24.040** (sustancias que agotan la capa de ozono), autoridad de aplicación el organismo nacional de ambiente.
- **Enmienda de Kigali**: ratificación depositada el 22/11/2019, en vigor para la Argentina el 20/02/2020; los HFC se incorporaron a licencias de importación/exportación (Res. 104/2020 del entonces Ministerio de Ambiente).
- **ISO 10218** (partes 1 y 2, ediciones 2011 revisadas en 2025, con ISO/TS 15066 incorporada a la parte 2) y los cuatro modos de colaboración.
- **IRAM-IAS U 500**: esquema de certificación de inspectores de soldadura.

## No se pudo verificar: confirmar antes de publicar
1. **Resolución SRT 3641/2015**: la búsqueda no la encontró. No se cita en el contenido. Confirmar si existe y qué regula.
2. **Definición de «trabajo en altura»** (la altura mínima, habitualmente 2 m): el texto de la Res. 61/2023 lo define, pero no se leyó el articulado; se redactó sin cifra. Confirmar y, si se quiere, agregar el número.
3. **Matrícula o habilitación del técnico en refrigeración**: la búsqueda no encontró requisito nacional. La lección dice que depende de la jurisdicción, el empleador y el cliente. Confirmar si hay registro/matrícula obligatoria en la jurisdicción de uso (CABA, PBA, otras) y si el organismo ambiental exige capacitación para manipular refrigerantes.
4. **Cronograma de eliminación de HCFC/R-22 en la Argentina** y restricciones para equipos nuevos: se redactó sin fechas. Confirmar.
5. **Ediciones vigentes** de AWS D1.1, ASME IX, ISO 6947 (posiciones PA/PC/PF/PE), ISO 9606, CIRSOC (soldadura/estructuras de acero) e IRAM-IAS U 500: se mencionan sin número de edición. La numeración de posiciones 1G–6G y los códigos ISO 6947 salen de fuentes secundarias.
6. **Series IRAM-IAS U 500** para barras, perfiles y chapas (lección de normas metalúrgicas): se nombra la serie sin números de norma.
7. **Certificado «3.1» de EN 10204** y escalas de dureza Brinell/Rockwell/Vickers: conocimiento general, sin fuente web.
8. **Clasificación ASHRAE de seguridad de refrigerantes** (A1, A2L, A3, B2L) y qué refrigerante cae en cada clase: de memoria; confirmar contra la tabla vigente.
9. **Límite de llenado de cilindros de recuperación (80 %)** y **vacío de unos 500 micrones**: prácticas habituales; el valor correcto lo fija el fabricante del equipo.
10. **Alta tensión > 60 V en continua**, color naranja y procedimiento (seccionador de servicio, espera de descarga, verificación de ausencia de tensión): práctica general de la industria; cada fabricante tiene su procedimiento y exige capacitación propia.
11. **Velocidad reducida de 250 mm/s en modo manual** de robots (ISO 10218) y **categorías de parada 0/1/2** (IEC 60204-1): de memoria; confirmar en las normas.
12. **Ley 19.587 / Decreto 351/79 / Decreto 911/96**: marco general conocido; no se leyeron los textos.
13. **Anclaje de arnés «miles de kilos»**: se redactó sin cifra (el criterio habitual, unos 2.268 kg/22 kN, no se citó). Confirmar con la norma que se adopte.
14. **Temperatura crítica de 727 °C** (acero eutectoide) y ejemplos de amperaje (3,25 mm ≈ 100–140 A): orientativos; se aclara que prevalece la caja del fabricante.
15. **Fuentes bibliográficas**: la carpeta `tareas_pendientes/libros/oficios/` que cita el plan no está en este repositorio; el contenido no se contrastó con esos libros (Danfoss, EEST Nº1, manual INATEC de motos, Bosch, UNLP, etc.).

## Decisiones tuyas
- **Temas compartidos no duplicados**: `maquinas-electricas-motores-y-transformadores` (plan, Electromecánico) y `mecanizado-torno-fresadora-cnc` (plan, Electromecánico) **no se crearon**: se enlazan desde `plc-y-automatismos` a `electricista/electricidad-trifasica-y-baja-tension-industrial/`, `electricista/instalaciones-especiales-motores-y-bombas/` y `tornero/`. ¿Alcanza o querés una lección propia en Electromecánico?
- **Rama de motos**: se resolvió en 5 lecciones (`motos-motor-2-y-4-tiempos`, `motos-carburacion-y-alimentacion`, `motos-encendido-y-sistema-electrico`, `motos-transmision-y-cadena`, `motos-frenos-y-suspension`) dentro de `oficios/mecanico/`. ¿Preferís `oficios/mecanico-de-motos/` como oficio aparte? (El plan decía «rama, 4–6 temas».)
- **PID**: vive en `tecnico-en-automatizacion-y-robotica/control-lazo-cerrado-y-pid-en-robotica/`; Electromecánico lo referencia desde `plc-y-automatismos`.
- **Soldadura estructural**: vive en `soldador/soldadura-estructural/`; el Montador lo referencia.
- **Cuestionarios**: las lecciones nuevas son solo `teoria.md` (regla vigente); la evaluación se amplió en los 7 `diagnostico-*`.
- **Nodos sin ID** en `troncos.md`: las 32 lecciones solo tienen fila en `oficios/dependencias.md`; las dependencias son deducidas.
