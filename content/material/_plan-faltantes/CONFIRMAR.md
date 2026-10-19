# Lo que hay que confirmar (lista única)

Consolida los `confirmar-*.md` de cada tanda más lo pendiente de los lotes anteriores. Detalle fino en cada archivo. Todo lo que dice «de memoria» se escribió sin fuente oficial.

## A. Decisiones de producto (necesitan tu respuesta)

**Grafo, exámenes y libros**
1. Ninguno de los ~270 temas nuevos tiene ID en `troncos.md` (solo fila en `dependencias.md`). ¿Se agregan nodos al grafo?
2. ¿Los temas nuevos entran a los exámenes jefe? Hoy las materias con examen quedaron con clusters viejos (UX/Diseño y Dibujo técnico con 1 cluster; Esperanto con su pool de 500 preguntas sin los 15 temas nuevos). Habría que rehacer clusters con `gen_examen_jefe_prereq_clusters.py`.
3. Los 64 temas de las materias académicas no tienen libro de teoría extendida nuevo. Oficios no tiene libros ni exámenes (confirmado).

**Materias académicas** (`academicas.md`)
4. Historia del Arte quedó dentro de `arte/` y Filosofía con un tema por período o eje. ¿Está bien?
5. Turismo: se escribió el ángulo académico general, sin pisar `oficios/guia-turistico/`. ¿Está bien?
6. Diccionarios de lenguas indígenas siguen como decisión de producto pendiente.

**Técnicas**
7. Dibujo arquitectónico quedó dentro de Dibujo técnico. ¿Se separa?
8. ¿Se crea un tema de redes en Informática? `redes-industriales-y-scada` hoy depende de `protocolo-http-peticion-respuesta`.
9. Electrónica: ¿se menciona Arduino (`pinMode`, `digitalWrite`)? Prototipado y seguridad quedó limitado a baja tensión: confirmá el enfoque.
10. Los oficios técnicos (Electricista, Electromecánico, Robótica) todavía no apuntan a los temas nuevos de Electrónica/Automatización como prerrequisito.
11. Las preguntas de cálculo usan valores ilustrativos: conviene revisión de un docente.

**Idiomas**
12. Chino: ¿HSK 2.0 (6 niveles, como está) o HSK 3.0 (9 niveles, implantación prevista desde julio de 2026)?
13. Chino: simplificados (como está) o también tradicionales. ¿Listas de vocabulario completas (300/500/1.000+) en lugar de 60 a 90 palabras por tema? Pinyin del sandhi: ¿otra convención?
14. ¿Dependencias formales por idioma (`dependencias.md`) o alcanza con el plan de `idiomas-extranjeros-PLANIFICACION.md`?
15. ¿Seguimos ampliando teoría de árabe, ruso, hindi y coreano (quedó entre 2.100 y 3.000 caracteres, no 3.000+; listados en `confirmar-idiomas-resto.md`) y de chino (HSK reading/speaking/writing: 1.400–2.600)?
16. Audio: el `listening-b2` de Esperanto usa «Transcripción:» para no crear referencias de audio; alinealo cuando generes los mp3 en tu servidor.

**Oficios**
17. Cocina: ¿se mantienen los cuestionarios de los 8 temas nuevos (el diseño pedía solo el diagnóstico)? ¿Alguno (alérgenos, HACCP) pasa a requisito del logro «Cocinero Profesional»? ¿Se recortan las lecciones viejas que se solapan? ¿`haccp-basico` se comparte con Procesador? ¿Maridaje solo con bebidas sin alcohol está bien?
18. Cocina: las 16 recetas faltantes (Fondos 1, Parrilla 3, Pastas 1, Repostería 2, Regional 3, Internacional 3, Fiambres 1, Bebidas 1, Postres 1) esperan tu lista de platos o PDF oficiales. Fiambres/embutidos sin fuente institucional; matambre arrollado: ¿se retira o queda como experta?
19. Tornero: ¿fresadora y CNC como temas propios o solo en Electromecánico? ¿Cuestionarios para Aluminio, Modista y Tornero? ¿Los temas de Jardinero sin cuestionario (fisiología, identificación, motosierra, diseño, normativa, compostaje) deberían llevarlo? ¿Normativa de arbolado más allá de CABA?
20. Mecánico: la rama de motos son 5 lecciones dentro de `oficios/mecanico/`; ¿preferís `oficios/mecanico-de-motos/` aparte?
21. Gasista: ¿se agregan categorías y horas de matrícula cuando se confirmen en el ENARGAS? ¿La prueba de hermeticidad cita las presiones de la NAG-200 vigente? Plomero: ¿normativa por jurisdicción (AySA/CABA/PBA)? Electromecánico: ¿alcanza con referenciar a Electricista/Tornero o querés lección propia de motores y mecanizado?
22. Agricultor: ¿la lección `ganaderia-rumiantes-aves-y-cerdos` se parte en tres? Tapicero: ¿se citan normas de comportamiento al fuego (cuáles)?
23. Oficios digitales: `qwerty-portugues` y `escritura-en-celular-y-tablet` (prioridad baja) se escribieron igual; ¿los dejás?

## B. Datos sin verificar con fuente oficial (revisar antes de publicar)

**Salud y emergencias (lo más sensible)**
- Línea 135 (Capital y GBA) y (011) 5275-1135 del Centro de Asistencia al Suicida de Buenos Aires: salen de buscadores/directorios, no de la fuente oficial. **No pude abrir asistenciaalsuicida.org.ar** (el entorno lo bloquea); una fuente da el sitio casbuenosaires.com.ar y un horario de 18 h por día, no 24. Confirmalos y ajustá el texto.
- El `0800 345 1435` que escribió el agente de Salud no lo pude confirmar: sugiero quitarlo.
- Líneas 102, 107 y 911: sin confirmar. La 141 (SEDRONAR) sí se confirmó.
- Leyes de Salud: 26.396 (trastornos alimentarios) confirmada; 26.378, 26.892, 27.130, 26.934, 24.788, 27.714, 26.687, 26.657, 26.388, 26.904, 27.590, 27.736, 25.326, 27.275, 26.653, 11.723 de memoria. 27.491 y 27.642 confirmadas (plazos de la 27.642 sin verificar). Recomendaciones de la OMS y prohibición de vapeadores (ANMAT) de memoria.
- Primeros auxilios (RCP según Cruz Roja/Ministerio): revisión de alguien del área.

**Académicas**
- Arte: fechas y obras de memoria (Niépce c. 1826–27, Cándido López/Curupaytí 1866, Pettoruti 1924, Manifiesto Blanco 1946, zigurat de Ur c. 2100 a. C.).
- Filosofía: fechas y doctrinas de memoria (Manuscritos 1844, Sartre 1945, Investigaciones 1953) y la «cita» de Maquiavelo.
- Psicología/Comunicación: radio argentina 1920 (Teatro Coliseo), televisión 1951, leyes 23.592 y 27.275, Asch/Milgram sin porcentaje, crítica a Mehrabian.
- Sociología/Aprendizaje: leyes 26.150, 26.485, 26.743, 27.412, 27.499, 13.010, 26.618; censo 2022; atribuciones (Doran, Cirillo, Robinson, Hattie y Timperley, Butterfield, Metcalfe).
- Antropología/Turismo: leyes 25.997, 26.160, 24.071, 23.302, 22.351; decreto del 12 de octubre; fechas UNESCO; seis regiones turísticas; Barth, Mauss, Sahlins, Service. (Censo 2022 sí verificado.)

**Técnicas**
- UX/Dibujo: números de las normas IRAM (de programas de cátedra), pasos de roscas métricas, ISO 2553, tamaño táctil WCAG, SUS ~68, ISO 21920 vs 1302.
- Electrónica: sin búsqueda web; código de colores y E12, 555, ADC, protocolos serie, 220 V/50 Hz.
- Automatización/Materiales: Modbus, GRAFCET, PL/SIL, coeficientes de dilatación y conductividades, Curie, solubilidades del carbono en hierro.

**Idiomas**
- Todo el contenido salió de memoria (salvo una búsqueda de HSK 3.0 y otra de horas del esperanto). Ningún hablante nativo revisó árabe, devanagari, cirílico, hangul ni chino. Detalle por idioma en `confirmar-idiomas-chino.md` y `confirmar-idiomas-resto.md`.
- Se omitió a propósito la nominación de Auld al Nobel (fuentes contradictorias).

**Oficios**
- Normas IRAM de aberturas (11507, 11523, 11590, 11591) tomadas de un pliego de licitación; declaración jurada textil: vigencia sin confirmar.
- Gas: vigencia de la NAG-200; matrícula (fuentes contradictorias). Eléctrico: colores de conductores, leyes 24.240 y 26.331. Carpintero: «sin matrícula nacional». Plomería: reglamento de AySA y pendientes.
- Taller: matrícula de refrigeración, definición de «trabajo en altura» (Res. SRT 61/2023 hallada; mi cita original 550/11 era errónea), ediciones AWS/ISO/CIRSOC, posiciones de soldadura, clasificación de refrigerantes, 250 mm/s en modo manual de robots.
- Agro/alimentos: alérgenos de declaración obligatoria, sello frontal en panificados, carnet de manipulador, traslado de colmenas, inflamabilidad en tapicería.
- Cocina: lista oficial de alérgenos del CAA no leída; temperaturas apoyadas en notas que citan ANMAT/SENASA.
- Digitales: teclas muertas/AltGr en términos generales; −14 LUFS aproximado.
- Las fuentes citadas en la planificación de oficios (`tareas_pendientes/libros/oficios/`) no están en este repo: ninguna se contrastó.

## C. Cosas de proceso
- Ninguna materia nueva se probó en la app: solo con el validador de VBLang.
- Las traducciones de logros de los exámenes jefe a 11 idiomas no las revisó una persona nativa.
- Teorías que quedaron algo por debajo de 500 palabras: Horticultura, Cosecha, Fruticultura, Ganadería, Oficio artesanal, algunas de Jardinero.
- Los libros viejos revisados (Economía, Geografía, Historia, Historia profunda, Informática, Lengua) se corrigieron por búsqueda de cifras/fechas/leyes; no se releyeron enteros ni se pasó `validateBook`.
