# Verificación contra páginas oficiales (2026-10-20, con navegador real)

Se abrió cada fuente en un Brave controlado por Playwright (depuración remota) y se comparó con el texto de los temas. Lo no listado acá sigue pendiente en `PAGINAS-A-VERIFICAR.md`.

## Corregido
| Dato | Fuente | Cambio |
|---|---|---|
| Línea de prevención del suicidio: además de 135 y (011) 5275-1135 existe el **0800 345 1435** (desde todo el país); atienden de **8:00 a 0:00** con voluntarios y puede dar ocupado | asistenciaalsuicida.org.ar/ayuda y /horarios-de-atencion | `salud/prevencion-del-suicidio` (teoría y explicación del cuestionario). El 0800 se había quitado por no poder confirmarlo: **sí es válido**. La fuente de «18 h/día» no coincide con la del propio centro. |
| Bolivia es **Estado Parte** del Mercosur (ratificación entregada en julio de 2024; hasta 4 años para incorporar la normativa); Venezuela sigue suspendida | mercosur.int/acerca-del-mercosur/paises | `geografia/brasil-geografia-economia-y-relacion-con-argentina` |

| **Res. ENARGAS 219/2022** (base unificada de instaladores) **fue derogada** por la Res. 21/2025 (enero de 2025) junto con la 220/2022 y la 644/2023. Además el ENARGAS se fusionó con el ENRE en el **ENReGE** (Decreto 452/2025; funciona desde mayo de 2026) | argentina.gob.ar/normativa (Res. 21/2025), enargas.gob.ar, argentina.gob.ar/enrege | `oficios/gasista/normativa-gasista-categorias-y-habilitacion` |

| **Alérgenos (art. 235 séptimo, Res. Conj. 11-E/2017):** la lista oficial es trigo, centeno, cebada y avena; crustáceos; huevos; pescado; maní; soja; leche; frutas secas; y dióxido de azufre/sulfitos desde 10 ppm. **Los moluscos no figuran.** El tema decía «crustáceos y moluscos» | argentina.gob.ar/normativa (texto de la resolución) | `oficios/cocina-gastronomia/alergenos-en-cocina` |
| Carnet de manipulador (art. 21 CAA, Res. Conj. 12/2019): único requisito, curso de **al menos 7 horas** aprobado; **vale 3 años** y se renueva con examen | argentina.gob.ar/normativa | `oficios/cocina-gastronomia/manipulacion-de-alimentos-y-cadena-de-frio` (se agregó) |
| «911/107 según el país» no es correcto: 107 es el SAME de la Ciudad de Buenos Aires y 911 rige en buena parte del país | buenosaires.gob.ar (SAME) | `ed-fisica/primeros-auxilios-rcp-dea` |
| HSK 2: «unos 300 caracteres» → **300 palabras** (lista acumulada HSK 2.0) | Wikipedia (HSK) | `idiomas-extranjeros/chino/writing-hsk2` |

## Confirmado sin cambios
- **141 (Sedronar):** gratuita, anónima, todo el país, 24 h todos los días (argentina.gob.ar/sedronar).
- **102:** servicio gratuito y confidencial de escucha y orientación para niñas, niños y adolescentes; **no es emergencia**, ante urgencia llamar al 911 o al número local (argentina.gob.ar/capital-humano/.../linea-102).
- **144:** violencia de género (no es de salud mental).
- **OMS:** 60 min/día (5–17 años) y 150–300 min/semana (adultos): coincide con `salud/actividad-fisica-y-salud`.
- **Resolución 549/2026 (Ministerio de Salud)** existe; deja atrás la prohibición de la Disp. ANMAT 3226/2011 y la Res. 565/2023; autoriza solo aroma a tabaco y prohíbe los de un solo uso. La Disposición ANMAT 2543/2026 no se abrió.
- **Resolución 242 (1967):** «Retiro de las fuerzas armadas israelíes de los territorios que ocuparon durante el reciente conflicto»; coincide con lo escrito.
- **Años de sanción/publicación (argentina.gob.ar/normativa, ninguna derogada):** 26.657 (25-11-2010; BO 3-12-2010), 27.130 (11-3-2015; BO 8-4-2015), 26.396 (2008), 26.378 (2008), 26.892 (2013), 26.934 (2014), 24.788 (1997), 27.714 (13-4-2023; BO 3-5-2023), 26.687 (2011), 26.388 (2008), 26.904 (2013), 27.590 (2020), 27.736 (2023), 25.326 (2000, sin ley que la reemplace), 27.275 (2016), 26.653 (2010), 11.723 (1933), 27.491 (BO 4-1-2019), 27.642 (sanción 26-10-2021; BO 12-11-2021; modificada o complementada por 7 normas, vigente).

- **Normas de oficios (existen y coinciden con lo escrito):** Res. SRT 231/96, Res. SRT 61/2023 («Medidas de seguridad en altura», BO 6-12-2023), Decreto 911/96 y 351/79, Res. Conjunta 12/2019 (sustituye el art. 21 del CAA: carnet de manipulador), Res. Conjunta 11-E/2017 (alérgenos), Decreto 151/2022 (reglamenta la 27.642), Leyes 27.279, 26.331, 24.051, 24.040, 24.240 y NAG-200 (1982, vigente según enargas.gob.ar). AEA 90364 se titula «Reglamentación para la ejecución de instalaciones eléctricas en inmuebles».
- **Leyes sociales y ambientales (años coinciden):** 24.071, 26.150, 26.485, 26.743, 27.412, 27.499, 13.010, 26.618, 23.592, 25.997, 22.351, 26.160, 23.302, 26.061, 26.206, 24.449, 24.295, 25.438, 27.270 y 27.520.
- **IPC:** el INDEC sigue publicando con base dic-2016 = 100 hasta septiembre de 2026; el tema ya está redactado con cautela.

- **Reglamentos deportivos:** hockey sobre césped: tarjeta verde 2 min y amarilla mínimo 5 min (FIH, Tournament Regulations enero 2025, Rule 14.1); futsal: 2×20 min, cancha 40×20, arcos 3×2, doble penal desde la 6.ª falta acumulada; vóley: red 2,43/2,24 m, sets a 25 con diferencia de 2; rugby: 5/2/3/3 puntos; handball: 7 vs 7, 2×30, exclusión de 2 min. Fútbol, básquet FIBA y los resultados de Argentina (futsal 2016, Pumas 2007, Leones Río 2016) se contrastaron con conocimiento general, no con la página oficial.
- **Normas técnicas:** WCAG 2.2 (24×24 px nivel AA, criterio 2.5.8; 44×44 px AAA, 2.5.5; w3.org); Disposición ONTI 6/2019 = «Pautas de accesibilidad de contenido web 2.0» (WCAG 2.0); ISO 21920-1:2021 reemplaza a ISO 1302:2002 (iso.org); IRAM 11523 (infiltración de aire), 11591 (estanquidad), 11590 (viento), 11507 (requisitos y clasificación), 4502/4504/4508/4511 (dibujo técnico) y 2183/2206 (electricidad) existen con el contenido citado.
- **Fórmulas y datos de textos técnicos y de biología** (555, ADC, serie E12, ferrita 0,022 %, 206 huesos = 80 + 126, nefronas, pH 7,4, VIH y linfocitos T colaboradores): coinciden con lo estándar.
- **Fechas de ciencia, antropología y literatura** (Bernoulli 1738, Lavoisier 1789, Richter 1792, Dalton 1803, Arrhenius 1884-87, Brønsted-Lowry 1923, Mauss 1925, Barth 1969, van Gennep 1909, Doran 1981, Ur-Nammu c. 2100 a. C.; Cortázar, Pizarnik, Storni, Gelman, Lugones, Borges, Hernández): coinciden; «Casa tomada» (1946, Los Anales de Buenos Aires) y Storni se contrastaron en Wikipedia.
- **Ley 11.723:** el tema no cita plazo de protección (la versión original del texto dice 30 años; hoy son 70 por la Ley 24.870).

## Con los enlaces que pasó Javier (2026-10-20)
- **Disposición ANMAT 3226/2011** (argentina.gob.ar/normativa/nacional/norma-181907): prohíbe la comercialización y el uso del cigarrillo electrónico; sanción 6-5-2011, BO 9-5-2011. Coincide con «desde 2011».
- **Resultados deportivos confirmados:** futsal, Mundial 2016, final del 1-10-2016: Argentina 5 – Rusia 4 (campeón; Flashscore). Rugby 2007: los Pumas, **tercer puesto** (Wikipedia). Hockey: Los Leones, **oro en Río 2016**, final 4-2 a Bélgica (Wikipedia).
- **HSK 2.0:** 150 / 300 / 600 / 1.200 / 2.500 / 5.000 palabras acumuladas por nivel (HSK 1 = 150, HSK 2 = 300), como figura en los temas. **HSK 3.0:** 9 niveles (300 / 500 / 1.000 / 2.000 / 3.600 / 5.400 y 11.000 combinadas para 7-9); un sitio de preparación (hsk1.org, no oficial) indica **lanzamiento mundial el 13-12-2026** y que no hay cronograma de retiro del HSK 2.0. Conviene confirmarlo en chinesetest.cn antes de decidir la votación.
- No sirvieron para verificar reglas: el manual de CONMEBOL es un manual de entrenamiento (no las Leyes del Juego) y el de baloncesto de archive.org es de entrenamiento infantil, solo para préstamo.

## Con los PDF de Drive que pasó Javier (2026-10-20)
- **Manual de entrenamiento de Futsal (UEFA):** 5 jugadores (4 + arquero) y 7 suplentes; cambios ilimitados; 2 períodos de 20 min de juego efectivo; sin fuera de juego; cancha de 25 a 42 m por 16 a 25 m; arcos de 3 × 2 m; punto penal a 6 m y segundo punto a 10 m; pelota con poco pique (50–65 cm soltada desde 2 m); saque lateral con el pie en 4 s; a partir de la sexta falta acumulada, tiro libre directo sin barrera. Todo coincide con `ed-fisica/reglamento-y-fundamentos-del-futsal`. Se agregó el rango de medidas de la cancha.
- **Laws of the Game 2015/16 (FIFA):** hay 17 leyes (la 17 es el saque de esquina); un partido no empieza ni continúa con menos de 7 jugadores en un equipo; dos tiempos de 45 min; el entretiempo no supera los 15 min. Coincide con `ed-fisica/reglamento-y-fundamentos-del-futbol`. Es una edición vieja: las Leyes se revisan todos los años (el tema ya lo aclara).
- **Básquet (manual de baloncesto):** FIBA 4 cuartos de 10 min (NBA 12), prórrogas de 5 min, 5 faltas personales en FIBA (6 en NBA), aro a 10 pies. Coincide con `ed-fisica/reglamento-y-fundamentos-del-basquet`.
- Los otros tres PDF (revista FIFA 2018, guía de fútbol de Olimpiadas Especiales y un manual de estructuración de baloncesto) no traen reglas contrastables con los temas.

## Normas ISO/IEC (iso.org, iec.ch e isotools.org; 2026-10-20)
- **Vigentes y bien citadas:** ISO 2553:2019 (símbolos de soldadura), ISO 286-1:2010 (tolerancias ISO), ISO 129-1:2018 (acotación), ISO 13849-1:2023 (nivel de desempeño PL), ISO 12100:2010, ISO 1219-1:2012 (símbolos hidráulicos/neumáticos), ISO 3758:2023 (etiquetas de cuidado textil), ISO 8601-1:2019 (fechas), ISO 9241-210:2019 (diseño centrado en el usuario), ISO 6947:2019 (posiciones de soldadura), IEC 62061:2021, IEC 60204-1:2016, IEC 60848:2013 (GRAFCET), **IEC 61131-3:2025** (nueva edición).
- **ISO 1302 → ISO 21920-1:2021** (ya estaba bien). **ISO 10218-1 y -2:** las ediciones de 2011 están retiradas y rige la de **2025** (el tema ya lo decía).
- **ISO 9001:2026** (publicada el 16-9-2026, sexta edición; las certificaciones con la de 2015 valen hasta el 30-9-2029): se agregó a `oficios/metalurgico/normas-de-calidad-de-proceso-metalurgico`. isotools.org solo cubre normas de gestión (9001, 14001, 27001...), así que fue útil solo para esta; el resto se contrastó en iso.org e iec.ch.

## Sigue sin verificar
- Categorías y horas de matrícula del gasista y de otros oficios (el material es genérico a propósito y remite a ENARGAS/ENReGE).
- Disposición ANMAT 2543/2026 (vapeadores) y trabajo de colmenas/traslado (SENASA).
- Idiomas: **todo** lo lingüístico necesita hablantes nativos (alemán, francés, inglés, italiano, portugués, japonés, coreano, chino, árabe, ruso, hindi, esperanto). Dato nuevo: existe ya el **HSK 3.0 (sílabo 2025)**; sigue la decisión de Javier de mantener HSK 2.0 hasta la votación.
- Leyes del Juego de la **edición vigente** de la IFAB (se contrastó la de 2015/16) y reglas FIBA oficiales (se contrastó un manual); todo lo que dependa de documentos pagos (IRAM, ISO completos).
