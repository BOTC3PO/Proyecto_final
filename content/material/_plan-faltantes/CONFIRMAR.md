# Lo que hay que confirmar (lista única)

## Actualización 2026-10-20 (ronda de contenido sin escribir y neutralidad)

**Resuelto en esta ronda:** futsal, rugby y hockey (Ed. Física); sistemas excretor, óseo, muscular e inmunitario (Biología); Brasil, China, Sudáfrica y Rusia/Asia Central (Geografía); fresadora y CNC (en `oficios/tecnico-electromecanico`); las 71 teorías cortas de idiomas ampliadas (chino 28, hindi 18, ruso 14, árabe 9, coreano 2; ahora entre 2.400 y 3.300 caracteres); conflicto israelí-palestino y Guerra del Golfo reescritos de forma neutral y con ambos relatos (Geografía de Medio Oriente, Historia contemporánea de Medio Oriente y Asia-Pacífico). Chino: HSK 2.0 se mantiene, HSK 3.0 queda para votación; tradicionales/simplificados: no se agregan (el examen usa simplificados).

**Nuevas dudas de esta ronda** (detalle en `confirmar-huecos-ed-fisica-2.md`, `confirmar-huecos-biologia-2.md`, `confirmar-huecos-geografia-2.md`, `confirmar-neutralidad-medio-oriente.md`, `confirmar-oficios-5.md` e `confirmar-idiomas-resto.md`):
- Neutralidad: no se pudo abrir la ONU; el texto exacto de la resolución 242 se cita en resumen y los hechos de mayo de 1967 no se verificaron. Las cifras de víctimas se omitieron a propósito. Revisá el tono final.
- Mercosur: las fuentes se contradicen sobre Bolivia (el texto dice «en proceso de incorporación»).
- Ed. Física: medidas de canchas y arcos, penal de hockey a 6,40 m, tackle bajo los hombros y resultados deportivos de Argentina (futsal 2016, Pumas 2007, Los Leones Río 2016) de memoria; en futsal el tiro libre directo sin barrera es desde la 6.ª falta acumulada.
- Biología: huesos axiales/apendiculares, vértebras por región, un millón de nefronas, más de 600 músculos, VIH y linfocitos T colaboradores y la comparación músculo liso/cardíaco sin fuente. Siguen sin tema propio piel y sentidos.
- CNC: G54 como origen de pieza, sentido de G02/G03 según el control y artículos del Decreto 351/79.
- Idiomas: las 71 teorías ampliadas salen de gramáticas conocidas sin contraste fuente por fuente ni hablante nativo; revisar sobre todo vocalización árabe, acentos rusos, formularios formales y ejemplos de chino.

**Nada nuevo en los bloqueantes de la fase final:** siguen siendo los exámenes jefe/grafo (ahora ≈170 errores del verificador), las líneas de ayuda y leyes de Salud y la revisión nativa de idiomas.

---

## Estado final de la sesión (2026-10-19) — leer primero

**Hecho y subido a `tareas_de_reparación`:** 64 temas académicos, 73 técnicos, 35 de idiomas (Chino 20 y Esperanto 15) más ampliación de teoría, unos 160 de oficios, 41 temas de huecos (Geografía 7, Física 4, Química 5, Biología 6, Lengua 4, Informática 3, Ed. Física 6, y los 6 de Salud con los 4 de la ronda anterior), 13 exámenes jefe nuevos y 2 libros (UX/Diseño, Ingeniería). Auditoría general y corrección de ≈1.000 defectos de preguntas (ver `AUDITORIA-MATERIAL.md`). Todos los cuestionarios pasan `validar_lote.ts`; `auditar_preguntas.ts` no deja defectos reales (solo avisos tolerados). Nada se probó en la app.

**Bloqueantes de la fase final (necesitan tu decisión):**
1. **`verificar_examen_jefe.py` da 162 errores:** ≈250 temas nuevos no están en ningún examen jefe ni en `troncos.md`. Hay que rehacer clusters/pools/logros (`gen_examen_jefe_prereq_clusters.py`) y decidir si se agregan nodos al grafo. Las materias con examen que quedaron con temas fuera: Física, Química, Biología, Geografía, Lengua, Informática, Ed. Física, Arte, Filosofía, Psicología, Comunicación, Sociología, Antropología, Aprendizaje, Ciudadanía digital, Electrónica, Automatización, Dibujo técnico, Ciencia de Materiales, UX/Diseño, Economía (IPC). Dos avisos menores: Antropología cita el nodo `H10`.
2. **Líneas de ayuda de prevención del suicidio** (135 y (011) 5275-1135) y **leyes de Salud**: confirmar en fuentes oficiales (no se pudieron abrir desde el entorno). El `0800 345 1435` se quitó por no poder confirmarlo.
3. **Idiomas sin revisión nativa** (alemán, francés, inglés, italiano, portugués, japonés, coreano, chino, árabe, ruso, hindi, esperanto): todo salió de conocimiento del modelo; además, los `listening-*`, `writing-*` y `reading-*` que no se reescribieron tienen preguntas genéricas y errores de gramática posibles. 71 teorías de idiomas siguen por debajo de 2.000 caracteres.
4. **Chino:** decidido (2026-10-20): **se deja HSK 2.0** (niveles HSK1, 2, 3-4 y 5-6) y **HSK 3.0 queda para votación**; si se aprueba, hay que reetiquetar los temas y revisar las listas de vocabulario. Escritura: sigue en simplificados (los tradicionales no están decididos; hoy solo se mencionan en un tema).

**Decisiones nuevas de los 41 temas de huecos** (detalle en `confirmar-huecos-*.md`):
- Física/Química: ¿se agregan al grafo y a los exámenes?; solape `quimica-del-agua` ↔ `geografia/recursos-hidricos-y-gestion`; ¿unificar g = 9,8 m/s² (nuevos) con g = 10 (otros módulos)?; enlace de renovables con `vida-cotidiana/eficiencia-energetica-domestica` y Cívica/Economía.
- Geografía: revisar el tono sobre el conflicto israelí-palestino y la Guerra del Golfo; UE-Mercosur quedó sin estado actual; ¿se suman países concretos (Brasil, China, Sudáfrica, Rusia/Asia Central)?
- Biología: faltan sistemas excretor, óseo, muscular e inmunitario ampliado; los enlaces a Salud, Ed. Física y ESI dependen de que no se renombren esas carpetas.
- Ed. Física: reglamentos «según el reglamento vigente» (¿fijar edición?); faltan futsal, rugby y hockey; ¿enlace a un tema de suplementos en Salud?
- Lengua/Informática: «HTML y CSS básico» se reemplazó por una visión conceptual (ya existe en `oficios/frontend`); sin versos ni pasajes largos transcriptos.
- Datos de memoria a contrastar: fechas de Bernoulli, Lavoisier, Proust, Dalton, Richter, Arrhenius, Brønsted-Lowry; límite de Betz; Lugones, Storni, Gelman; metáfora del knock-out de Cortázar; datos de redes/NoSQL (100 m UTP, bandas Wi-Fi, CAP); 17 leyes del fútbol, alturas de red de vóley, juego pasivo del handball; valores fisiológicos de Biología (37 °C, pH 7,4, frecuencias); AfCFTA, ASEAN, reformas chinas, contenedor de McLean.

**Pendientes de proceso que quedaron abiertos:**
- Solapes de nombre/tema (ver `HUECOS-POR-TITULOS.md`): `generos-periodisticos` en Lengua y Comunicación, tres temas de adicciones entre Salud y Ed. Física, `numeros-enteros`/`operaciones-enteros`, `coordenadas-*`, `escala-de-mapa`/`mapa-plano-escala`.
- `diseño/` es la única carpeta de materia con «ñ».
- Metadatos `materia:`/`tema:` inconsistentes dentro de ~150 cuestionarios (importa solo si la app los usa).
- Futsal, rugby, hockey y los sistemas excretor/óseo/muscular sin escribir.

---

## Actualización tras la pasada de verificación con fuentes

Se verificó con búsquedas web (detalle y URLs en `verificado-salud-ciudadania.md`, `verificado-academicas.md`, `verificado-oficios.md`, `verificado-tecnicas.md`). **Límite general: argentina.gob.ar, Infoleg, Boletín Oficial, OMS, IRAM y asistenciaalsuicida.org.ar no se pueden abrir desde este entorno; todo se contrastó con resultados de búsqueda que citan esas fuentes, no con el texto oficial.**

**Corregido en el contenido**
- Salud: se quitó el `0800 345 1435` (sin confirmar) y el «24 horas» de la 135 (una fuente da 18 h/día); se agregó el (011) 5275-1135; vapeadores (ya no rige la prohibición de ANMAT de 2011, hay un régimen nuevo de abril de 2026 que no se leyó en el Boletín Oficial); Ley 27.491 publicada en enero de 2019; líneas 102 y 107 aclaradas.
- Académicas: Asch (dos cifras distintas), SQ3R (década de 1940), regiones turísticas (La Rioja y La Pampa).
- Oficios: Res. SRT 62/2023 era de salud mental → altura es la 61/2023 (y la 231/96 para obras); registro unificado de matriculados de gas (Res. ENARGAS 219/2022); RENAPA desde 5 colmenas; 10 teorías ampliadas.
- Técnicas: convención de lado de flecha de ISO 2553 (sistemas A y B), ISO 1302 reemplazada por ISO 21920-1, Modbus 1.200 m solo a baja velocidad, ONTI 6/2019 (WCAG 2.0, sin afirmar AA), «dark patterns» sin año preciso; 3 preguntas de cálculo con datos incoherentes rehechas.

**Confirmado con fuente (sin cambios):** las 20 leyes de Salud listadas, línea 141, RCP (100–120/min, 5–6 cm); leyes 13.010, 26.160, 23.302, 25.997, 22.351, 27.499, 27.412; radio 1920 y TV 1951; Milgram, Mehrabian, Hattie y Timperley, Butterfield y Metcalfe; Niépce, Cándido López, Pettoruti, Manifiesto Blanco; fechas de Marx, Sartre, Wittgenstein; fechas UNESCO; carnet de manipulador (RC 12/2019) y alérgenos (art. 235 séptimo, RC 11-E/2017); Ley 24.040 y Kigali; Ley 26.331; roscas M6–M20, WCAG 2.2, SUS 68, E12, 555, GRAFCET, PL a–e, Curie del hierro 770 °C.

**Sigue SIN verificar (antes de publicar)**
- Salud: Ley 26.657; cronograma y sellos de la 27.642; si la 25.326 tuvo reforma; plazo de la 11.723; una fuente propia de Cruz Roja para RCP; recomendaciones de la OMS (sueño, actividad) y GAPA.
- Académicas: leyes 24.071, 26.150, 26.485, 26.743, 27.275, 23.592; Doran, Cirillo, Dweck; zigurat de Ur; atribución a Maquiavelo; Mauss, Barth, van Gennep, Service, Malinowski.
- Oficios: IRAM de aberturas (11523, 11591, 11590; solo de un pliego municipal); categorías y horas de matrícula de gas; si la 27.642 alcanza a panificados (hay proyecto para derogarla); vigencia de la declaración jurada textil; matrícula del carpintero.
- Técnicas: textos de normas y catálogo IRAM no abiertos; SIL 1–4 de IEC 61508; valores de manual que difieren entre fuentes (eutectoide, austenita, conductividades).
- Idiomas: todo de memoria salvo contados datos; ningún hablante nativo revisó árabe, hindi, ruso, coreano ni chino. **71 teorías siguen por debajo de 2.000 caracteres** (chino 28, hindi 18, ruso 14, árabe 9, coreano 2).

---

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
12. Chino: **resuelto: HSK 2.0 se mantiene; HSK 3.0 queda para votación.**
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
