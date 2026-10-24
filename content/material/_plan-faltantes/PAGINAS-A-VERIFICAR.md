# Páginas oficiales a verificar (para revisar en otro entorno con acceso a internet)

Estas fuentes **no se pudieron abrir** desde el entorno donde se escribió el material (el proxy bloqueó argentina.gob.ar, Infoleg, Boletín Oficial, OMS, IRAM, ONU y otros). Todo lo de abajo se contrastó solo con resultados de buscadores o salió de memoria. Orden: de lo más sensible a lo menos. Cada fila indica **qué dato mirar** y **dónde está escrito** (`content/material/<ruta>`). Si una página confirma otra cosa, corregir `teoria.md` y `cuestionario.md` del tema y correr `validar_lote.ts` y `auditar_preguntas.ts`.

**Nota de Javier (2026-10-20):** la línea 135 y el (011) 5275-1135 son correctas, pero son una línea de **prevención del suicidio/crisis**; no está confirmado si atienden otros problemas. El SAME no es 107 en todo el país: en algunas zonas la emergencia es el 911 y en otras el SAME tiene su propio número u operativo. Ya se ajustó `salud/prevencion-del-suicidio`.

## 1. Salud y emergencias (prioridad máxima)
| Página | Qué verificar | Dónde |
|---|---|---|
| https://www.argentina.gob.ar (salud mental / línea 141 / línea 144 / 102) y https://www.casbuenosaires.com.ar | Qué atiende exactamente la 135 y el (011) 5275-1135 (¿solo suicidio y crisis?), horario real (una fuente decía 18 h/día), si siguen vigentes | `salud/prevencion-del-suicidio`, `salud/trastornos-alimentarios`, `ciudadania-digital/ciberacoso-y-convivencia-en-redes` |
| Página del SAME de cada jurisdicción (CABA 107, PBA, Córdoba, etc.) y https://www.argentina.gob.ar/seguridad (911) | Qué número rige en cada zona y si el SAME opera aparte del 911 | `salud/primeros-auxilios-basicos`, `oficios/guia-turistico/manejo-de-emergencias-en-excursion`, `oficios/guia-turistico/primeros-auxilios-basicos-en-grupo` |
| https://www.argentina.gob.ar/justicia/derechofacil y Línea 102 (niñez) | Que la 102 es orientación y no emergencia; en qué jurisdicciones funciona | `ciudadania-digital/ciberacoso-y-convivencia-en-redes` |
| https://www.argentina.gob.ar/sedronar (línea 141) | Vigencia de la 141 | `salud/consumos-problematicos` |
| https://www.boletinoficial.gob.ar y https://servicios.infoleg.gob.ar | Texto y año de: Ley 26.657 (Salud Mental), 27.130 (suicidio), 26.396 (trastornos alimentarios), 26.378 (discapacidad), 26.892 (convivencia escolar), 26.934 (consumos), 24.788 (alcohol), 27.714, 26.687, 26.388, 26.904 (grooming), 27.590, 27.736, 25.326 (datos personales; ¿hubo reforma?), 27.275 (acceso a la información), 26.653, 11.723 (propiedad intelectual: plazo de protección), 27.642 (etiquetado: cronograma, sellos, alcance a panificados; hay proyecto de derogación), 27.491 (vacunas) | `salud/*`, `ciudadania-digital/*` |
| Resolución/disposición de ANMAT y Ministerio de Salud (abril de 2026) sobre vapeadores | Régimen actual de registro y control; texto exacto | `salud/consumos-problematicos` |
| https://www.who.int (actividad física, sueño) y https://www.argentina.gob.ar/salud/alimentacion-saludable (GAPA) | Recomendaciones de la OMS (minutos de actividad por día, horas de sueño) y el gráfico de las guías alimentarias | `salud/actividad-fisica-y-salud`, `salud/sueno-y-descanso`, `salud/alimentacion-saludable-y-etiquetado` |
| Cruz Roja Argentina / https://www.argentina.gob.ar/salud (RCP) | Una fuente propia de RCP (hoy solo la guía de Presidencia: 100–120/min, 5–6 cm) | `salud/primeros-auxilios-basicos`, `ed-fisica/primeros-auxilios-rcp-dea` |

## 2. Normas de oficios
| Página | Qué verificar | Dónde |
|---|---|---|
| https://www.enargas.gob.ar | Categorías y horas de matrícula de gasista (las fuentes se contradicen), vigencia de la NAG-200 y presiones de la prueba de hermeticidad, Res. 219/2022 (registro unificado) | `oficios/gasista/*` |
| https://www.aea.org.ar | AEA 90364 (edición vigente), categorías de instalador por jurisdicción, colores de conductores | `oficios/electricista/*` |
| https://www.iram.org.ar | Normas de aberturas 11523, 11591, 11590, 11507 (hoy solo de un pliego municipal); normas IRAM de dibujo técnico, de seguridad y de roscas | `oficios/carpintero-de-aluminio/*`, `dibujo-tecnico/*` |
| https://www.argentina.gob.ar/srt y Infoleg | Res. SRT 61/2023 (trabajo en altura), 231/96, 550/11 (es demolición), 3641/15 (no apareció), Decreto 911/96, Decreto 351/79, Ley 19.587 | `oficios/albanil-constructor/*`, `oficios/montador-de-estructuras/*` |
| https://www.argentina.gob.ar/anmat y https://www.argentina.gob.ar/senasa | Lista de alérgenos del Código Alimentario (art. 235 séptimo y RC 11-E/2017), carnet de manipulador (RC 12/2019), RNE/RNPA, RENSPA/RENAPA, traslado de colmenas, Ley 27.279 (envases fitosanitarios) | `oficios/cocina-gastronomia/*`, `oficios/panadero/*`, `oficios/procesador-de-alimentos/*`, `oficios/agricultor/*` |
| Matrícula de refrigeración (ENARGAS/Ministerio) y Ley 24.040, Enmienda de Kigali | Habilitación requerida | `oficios/tecnico-en-refrigeracion/*` |
| Carpintero: ordenanzas de habilitación de taller; Tapicería: normas de comportamiento al fuego; Textil: declaración jurada de composición (la «453/2010» no aparece) | Si existen y su vigencia | `oficios/carpintero/*`, `oficios/tapicero/*`, `oficios/modista-corte-y-confeccion/*` |
| Reglamento de AySA y pendientes mínimas de cañería | Valores vigentes | `oficios/plomero/*` |

## 3. Datos históricos, culturales y sociales
| Página | Qué verificar | Dónde |
|---|---|---|
| https://www.un.org (resoluciones 181, 242, 338, 660, 661, 678, 687) y UNSCO/UNESCO | Texto exacto de la 242 («territorios» / «los territorios»), mandato de la 678 («todos los medios necesarios»), hechos de mayo de 1967; fechas de inscripción UNESCO | `geografia/medio-oriente-petroleo-agua-y-conflictos`, `historia-profunda/historia-contemporanea-de-medio-oriente`, `turismo/*` |
| https://servicios.infoleg.gob.ar | Leyes 24.071 (Convenio 169 OIT), 26.150, 26.485, 26.743, 27.412, 27.499, 13.010, 26.618, 23.592, 25.997, 22.351, 26.160, 23.302 | `antropologia/*`, `sociologia/*`, `turismo/*`, `psicologia/*`, `comunicacion/*` |
| https://www.indec.gob.ar | Encuesta de gastos vigente para el IPC (¿ENGHo 2004/05 o 2017/18?), censo 2022 | `economia/como-se-calcula-el-ipc-argentina`, `antropologia/pueblos-originarios-de-argentina` |
| https://www.mercosur.int | Estado de Bolivia (asociada / en proceso / incorporada), Venezuela suspendida desde 2016, UE-Mercosur | `geografia/brasil-*`, `geografia/europa-y-union-europea` |
| https://www.ipcc.ch, https://unfccc.int | Año de creación del IPCC, Kioto, Acuerdo de París | `geografia/cambio-climatico-causas-efectos-y-acuerdos` |
| https://www.worldrugby.org, https://www.fifa.com (Laws of the Game Futsal), https://www.fih.hockey, https://www.fiba.basketball, https://www.fivb.com, https://www.ihf.info, https://www.theifab.com | Reglamentos vigentes: 17 leyes del fútbol, fuera de juego, sets y alturas de red del vóley, juego pasivo y tarjetas del handball, tiro libre directo en futsal (6.ª falta), penal de hockey (6,40 m), tackle en rugby; resultados de Argentina (futsal 2016, Pumas 2007, Los Leones Río 2016) | `ed-fisica/reglamento-y-fundamentos-*` |
| Literatura: Biblioteca Nacional / catálogo, Fundación Internacional Jorge Luis Borges | Fechas y obras: Lugones (Lunario sentimental 1909, El payador), Storni, Gelman (Cervantes 2007), Pizarnik, Cortázar | `lengua/literatura-gauchesca-*`, `lengua/borges-*`, `lengua/cortazar-*`, `lengua/poesia-argentina-del-siglo-xx` |
| Wikipedia/enciclopedias y libros de texto | Fechas de ciencia: Bernoulli, Lavoisier, Proust, Dalton, Richter, Arrhenius, Brønsted-Lowry; Mauss 1925, Barth 1969, van Gennep 1909, Malinowski/kula; Doran 1981, Cirillo, Dweck; zigurat de Ur (c. 2100 a. C.); atribución a Maquiavelo | `fisica/*`, `quimica/*`, `antropologia/*`, `aprendizaje/*`, `arte/*`, `filosofia/*` |
| Tratados/dependencias de historia (Saint-Germain, Wei Qing, etc.) | Revisión por un historiador | `historia-profunda/*` |

## 4. Técnicas y ciencias
| Página | Qué verificar | Dónde |
|---|---|---|
| https://www.iso.org, https://www.iec.ch, https://www.w3.org/WAI | ISO 2553 (sistemas A y B de lado de flecha), ISO 21920-1 (reemplaza a ISO 1302), ISO 286, ISO 261/724 (roscas), IEC 61508 (SIL 1–4), IEC 61131-3 (ladder), ISO 13849 (PL), WCAG 2.2 (tamaño táctil mínimo, niveles A/AA/AAA), Disposición ONTI 6/2019 | `dibujo-tecnico/*`, `automatizacion/*`, `diseño/*` |
| Datasheets/manuales (555, ADC, UART/I²C/SPI, Modbus 1.200 m, GRAFCET) y NIST/ASM Handbook | Fórmulas y valores del 555, serie E12, resoluciones ADC; datos de materiales (conductividades, Curie del hierro 770 °C, eutectoide, solubilidad del carbono en hierro, coeficientes de dilatación, Hall-Petch) | `electronica/*`, `automatizacion/*`, `materiales/*` |
| Manuales médicos de divulgación (Gray's, MSD manual) | Huesos axiales/apendiculares, vértebras por región, nefronas, número de músculos, VIH y linfocitos T colaboradores, valores fisiológicos (37 °C, pH 7,4, frecuencias) | `biologia/*` |
| CNC: manuales de Fanuc/Siemens/Heidenhain | G54 como origen, sentido de G02/G03 por control | `oficios/tecnico-electromecanico/mecanizado-fresadora-y-cnc` |

## 5. Idiomas (requiere hablantes nativos, no páginas)
- Revisión nativa de **todo** el material de alemán, francés, inglés, italiano, portugués (BR/PT), japonés, coreano, chino, árabe, ruso, hindi y esperanto. Prioridad: vocalización árabe, acentos rusos, devanagari, hangul, ejemplos chinos y los cuestionarios `listening-*`, `writing-*`, `reading-*` no reescritos.
- Páginas útiles para el control: https://www.hskhsk.com / https://www.chinesetest.cn (HSK 2.0 vs 3.0), https://www.topik.go.kr, https://www.jlpt.jp, https://www.cambridgeenglish.org, https://www.goethe.de, https://www.dele.org, https://uea.org y https://www.pmeg.org (esperanto), https://en.wiktionary.org.

## Cómo seguir en el otro entorno
1. Abrir cada página, anotar el dato real y corregir el archivo indicado.
2. Cada tema tiene su detalle en `_plan-faltantes/verificado-*.md` y `confirmar-*.md`.
3. Después de corregir: `tsx content/material/_qa_tools/validar_lote.ts <archivo>` y `tsx content/material/_qa_tools/auditar_preguntas.ts <archivo>`.
