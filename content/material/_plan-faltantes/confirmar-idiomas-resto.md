# Idiomas (resto): qué se hizo y qué hay que confirmar

> Lote de Esperanto (temas nuevos) y ampliación de teoría de árabe, ruso, hindi y coreano, según `idiomas.md`. Sin audios: lo de audio queda para el servidor local de Javier.

## Esperanto: 15 temas nuevos (`idiomas-extranjeros/esperanto/`)

Cada uno tiene `teoria.md` (3.500 a 4.400 caracteres; el cuarteto B2 queda entre 2.600 y 3.000) y `cuestionario.md` de 24 a 26 preguntas, todas escritas a mano, sin Markdown inline y sin llaves en los enunciados.

| Tema | Nivel | Preguntas |
|---|---|---:|
| `pronunciacion-acento-y-ortografia` | A2 | 24 |
| `transitividad-igi-igxi` | B1 | 24 |
| `comparacion-y-grados` | A2 | 24 |
| `numeros-fechas-y-horas` | A2 | 25 |
| `orden-de-palabras-y-enfasis` | B1 | 24 |
| `conectores-y-cohesion-textual` | B2 | 25 |
| `vocabulario-tematico-a2` | A2 | 25 |
| `vocabulario-tematico-b1-b2` | B2 | 26 |
| `literatura-original-y-traducida` | B2 | 26 |
| `cultura-y-movimiento-esperantista` | B2 | 26 |
| `reading-b2` | B2 | 24 |
| `writing-b2` | B2 | 25 |
| `listening-b2` | B2 | 24 |
| `speaking-b2` | B2 | 25 |
| `traduccion-y-mediacion` | C1 | 26 |

Validación con `_qa_tools/validar_cuestionario.py`: los 15 cuestionarios dieron OK, sin fallos de parseo, lint ni compilación.

### Decisiones mías, no pedidas
- **Niveles en `metadata`:** usé A2, B1, B2 y C1 (como los temas de destrezas existentes).
- **`listening-b2`** usa transcripciones con la etiqueta «Transcripción:» (no «Audio:») para no crear referencias de audio nuevas. Cuando generes los mp3 del servidor, hay que alinear los textos con esas transcripciones o reescribirlos.
- **No agregué fila de dependencias**: no existe `idiomas-extranjeros/<idioma>/dependencias.md` ni `idiomas-extranjeros/dependencias.md`. Los prerrequisitos del Esperanto hoy no se registran en ningún archivo.
- **No toqué el pool de `examen-jefe-idiomas/esperanto.md`**: los 15 temas nuevos todavía no alimentan el examen jefe de Esperanto (500 preguntas ya generadas).
- **`vocabulario-tematico-a2`** agrupa los 5 sub-temas del plan (familia, casa, comida, viajes, trabajo) en una sola carpeta.

### A confirmar con fuente o con un hablante de esperanto
- Pronunciación: la comparación de `ĝ` (j inglesa) y `ŝ` (sh inglesa; «parecida a la ll rioplatense»).
- Horas: la forma coloquial `la tria kaj duono` está confirmada por Omniglot; las demás formas (`kvarono`, `kaj dek kvin`) salen de memoria.
- Negación doble (`Mi vidis neniun`): la norma citada es la de evitar `ne ... neniu`; conviene verificar en PMEG.
- Literatura: años y obras (Zamenhof *Hamleto* 1894, *La Revizoro*, Kearney *Alico* 1910, Kalocsay *Streĉita kordo* 1931, *Parnasa gvidlibro* 1932, Baghy *Preter la vivo* 1923 y *Viktimoj* 1925, Auld *La infana raso* 1956 y su traducción de *El Señor de los Anillos* 1995, Piron *Gerda malaperis!* 1983). Quité a propósito la nominación de Auld al Nobel: las fuentes se contradicen.
- Cultura: UEA fundada en 1908 en Ginebra con sede actual en Róterdam; Pasporta Servo desde 1974; Vikipedio desde 2001; Duolingo desde 2014; 15 de diciembre como día de Zamenhof; manifiesto de Raŭmo en 1980; las siglas IJK, SES, TEJO, Monato, Radio Verda, Muzaiko.
- `traduccion-y-mediacion`: la lista de falsos amigos y los usos de `si/sia`, `oni`, `ge-`. Revisar con el *Plena Ilustrita Vortaro*.
- Frases de ejemplo del cuarteto B2 y de los vocabularios: las escribí yo; conviene una lectura de alguien que hable esperanto.

## Árabe, ruso, hindi y coreano: teoría ampliada (no se crearon temas)

Agregué una sección «Ampliación» antes de «Errores comunes» en cada `teoria.md`, con ejemplos, mini-diálogos y listas de control. Los cuestionarios no se tocaron. Longitud resultante: 2.100 a 3.000 caracteres (la meta del plan era 3.000 o más: **no se alcanzó en la mayoría**, solo se acercó).

### Ampliados (42 temas)
- **Árabe (11):** `dual-el-mutanna`, `pronombres-personales`, `genero-masculino-femenino`, `oraciones-condicionales-basicas`, `listening-a2`, `listening-b1`, `listening-b2`, `listening-c1`, `reading-b2`, `writing-a2`, `speaking-b1`.
- **Ruso (10):** `caso-acusativo`, `caso-nominativo`, `pasado-de-verbos-y-genero`, `listening-a2`, `listening-b1`, `listening-b2`, `listening-c1`, `reading-b2`, `speaking-a2`, `writing-a2`.
- **Hindi (9):** `matras-y-conjuntas`, `genero-masculino-femenino`, `adjetivos-y-concordancia`, `listening-a2`, `listening-b1`, `listening-b2`, `listening-c1`, `reading-a2`, `reading-b2`.
- **Coreano (12):** `negacion`, `particulas-eun-neun-i-ga-eul-reul`, `reading-basico`, `reading-intermedio-bajo`, `listening-basico`, `listening-intermedio-bajo`, `writing-basico`, `writing-intermedio-bajo`, `writing-intermedio-alto`, `writing-avanzado`, `speaking-basico`, `speaking-intermedio-bajo`.

### No alcanzados
- **Árabe:** `reading-a2`, `reading-c1`, `writing-b1`, `speaking-a2`, `speaking-c1`.
- **Ruso:** `reading-a2`, `reading-b1`, `reading-c1`, `speaking-b1`, `writing-b1`.
- **Hindi:** `reading-b1`, `reading-c1`, `writing-a2`, `writing-b1`, `speaking-a2`, `speaking-b1`.
- **Coreano:** `reading-intermedio-alto`, `listening-intermedio-alto`, `speaking-intermedio-alto`, y las destrezas avanzadas.
- **Temas nuevos que el plan ya anticipaba como lagunas** (ninguno creado): árabe (`negacion`), ruso (`caso-genitivo` ampliado, `verbos-con-prefijo-direccional`, `particulas-ли-же-бы`), hindi (`verbos-causativos`, compuestos con kā/ke/kī), coreano (`numeros-sino-coreanos-y-nativos`, `contadores`, `pronunciacion-y-reglas-fonologicas`, `verbos-descriptivos-vs-activos`).

### A confirmar
- Todo el texto en escritura no latina (árabe con vocales, devanagari, cirílico, hangul) lo escribí de memoria, sin revisión de hablantes nativos. Lo más sensible: las oraciones modelo árabes vocalizadas, las condicionales (`لو`, `لولا`, `مَن` + yusivo), los plurales irregulares rusos, los matras y conjuntas del hindi, y las terminaciones formales del coreano.
- Árabe: `لَدَيَّ`, los usos de `كِلا/كِلْتا`, el verbo en singular cuando el sujeto dual va después, y el uso de `إذ` frente a `إذا`.
- Ruso: los pares perfectivo/imperfectivo citados y las expresiones de tiempo con `в`, `на`, `через`, `за`.
- Hindi: las formas de hora (`सवा`, `ढाई`, `पौने`) y los giros sanscritizados del nivel C1.
- Coreano: la ortografía de las muestras de correo formal (`다름이 아니라`, `문의드리다`, `회신해 주시다`) y las asimilaciones fonéticas citadas.

## Para Javier
1. ¿Querés dependencias formales por idioma (un `dependencias.md`) o el orden lo da el plan de `idiomas-extranjeros-PLANIFICACION.md`?
2. ¿Los 15 temas nuevos de Esperanto entran en el pool del examen jefe de Esperanto? Hoy no entran.
3. El audio de `listening-b2` y `speaking-b2` de Esperanto lo generás vos en el servidor; las transcripciones están dentro de los enunciados.
4. ¿Seguimos ampliando los temas no alcanzados de árabe, ruso, hindi y coreano para acercarlos a 3.000 caracteres?

## Segunda tanda de ampliaciones (33 temas)

Se agregó una sección «Ampliación» (antes de «Errores comunes») a los temas que habían quedado cortos. No se tocaron cuestionarios ni se creó ninguna referencia de audio.

- **Árabe (5):** `reading-a2`, `reading-c1`, `writing-b1`, `speaking-a2`, `speaking-c1`.
- **Ruso (5):** `reading-a2`, `reading-b1`, `reading-c1`, `speaking-b1`, `writing-b1`.
- **Hindi (6):** `reading-b1`, `reading-c1`, `writing-a2`, `writing-b1`, `speaking-a2`, `speaking-b1`.
- **Coreano (6):** `reading-intermedio-alto`, `listening-intermedio-alto`, `speaking-intermedio-alto`, `reading-avanzado`, `speaking-avanzado`, `listening-avanzado`.
- **Chino (11):** `reading-hsk2`, `reading-hsk34`, `reading-hsk56`, `speaking-hsk1` a `speaking-hsk56`, `writing-hsk1` a `writing-hsk56`.

Longitud resultante: 2.500 a 3.200 caracteres; quedan algo por debajo de 3.000 `hindi/speaking-a2` y `speaking-b1`, `coreano/speaking-intermedio-alto` y `speaking-avanzado`, y las destrezas de chino (HSK1 a HSK5-6), que son más densas por carácter.

**Verificado por búsqueda web:** las cifras indo-arábigas orientales en el Oriente árabe frente a las occidentales en el Magreb. **No se pudo verificar** el texto literal de los anuncios del subte coreano (`listening-intermedio-alto`; quedó redactado como «fórmulas parecidas»). Todo lo demás (formas árabes, rusas, hindi, coreanas y chinas, 成语, horarios hindi `सवा/साढ़े/पौने`, vocabulario) salió de conocimiento del modelo sin hablante nativo.

**Sin ampliar todavía** (siguen por debajo de 2.000 caracteres): 71 temas en total, a saber, chino 28 (entre ellos todos los `listening-*`, `negacion-bu-mei`, `particula-guo`, `matices-de-particulas-aspectuales`, `pinyin-y-tonos`), hindi 18, ruso 14, árabe 9 y coreano 2.

## Teorías de ruso y árabe ampliadas (2026-10-20)

Se agregó una sección «Ampliación» (declinaciones completas, reglas de uso, ejemplos, estrategias de lectura y habla, conectores y registro) a las **23 teorías** que estaban por debajo de 2.000 caracteres: 14 de ruso (números cardinales, caso preposicional, instrumental, genitivo y dativo, condicionales, adjetivos, gerundio, presente, pronombres, género, verbos de movimiento, comparativo y speaking-c1) y 9 de árabe (nisba, artículo, comparativo, oraciones nominales, concordancia del plural no humano, reading-b1, speaking-b2, writing-b2 y writing-c1). Ahora miden entre 2.400 y 2.960 caracteres (media ≈ 2.700): **no llegan a 3.000 en todos**.

- Verificado por búsqueda: la regla de formación del gerundio imperfectivo (base del presente + -а/-я) y que de verbos de raíz muy corta suena forzado (*пиша*). Lo demás sale de gramáticas de referencia conocidas, sin contrastar fuente por fuente.
- A revisar por un hablante nativo: acentos y ejemplos rusos; la vocalización mínima y las fórmulas formales árabes (تحية طيبة وبعد، وتفضلوا بقبول فائق الاحترام والتقدير، هل لي أن أضيف نقطة؟، ثغرات); los nisba de ciudades y países (قاهري، بغدادي، دمشقي، سعودي، مغربي، جزائري).
- Sin referencias a audio. No se tocaron cuestionarios.


## Teorías de hindi y coreano ampliadas (2026-10-20)

Se agregó una sección «Ampliación» (antes de «Errores comunes») a **20 teorías** que tenían menos de 2.000 caracteres; ahora tienen entre 2.700 y 3.150 caracteres (Python `len`). No se tocaron los cuestionarios (se revalidaron los 20: 0 FAIL). Sin audio ni referencias a audio.

- **Hindi (18):** presente-continuo, futuro, plural-de-sustantivos, negacion, imperativo-y-cortesia, discurso-directo-basico, comparativo-y-superlativo, interrogativos, subjuntivo-y-modo-optativo, pronombres-personales, numeros-cardinales, presente-habitual, speaking-b2, posposiciones-basicas-ka-ko-se, posposiciones-compuestas, writing-b2, estilo-literario-y-periodistico, voz-pasiva.
- **Coreano (2):** honorificos-basicos, voz-pasiva-y-causativa.

**Verificado por búsqueda web:** los numerales hindi 21–29 (इक्कीस … उनतीस), el formato de la carta formal hindi (सेवा में / विषय / महोदय / भवदीय) y que los sufijos causativos coreanos incluyen -우- (재우다, 태우다) con selección verbo por verbo.

**De conocimiento propio, sin fuente primaria (revisar con hablante nativo):**
- Hindi: pasado continuo y futuro de conjetura; futuro inmediato con -ने वाला; vocativo plural (लड़को, भाइयो); plurales de femeninos en vocal (माताएँ, बहुएँ); pasado habitual con था; fracciones सवा/डेढ़/ढाई/पौना; ordinales; construcciones con चाहे, जब तक… न y कहीं ऐसा न हो कि; el contraste de pares transitivo–intransitivo para evitar la pasiva; la clasificación शब्दालंकार / अर्थालंकार y los datos de छायावाद y Premchand; la «pirámide invertida» periodística; posposiciones compuestas (के बावजूद, के ज़रिए, के यहाँ).
- Coreano: los niveles 합쇼체 / 해요체 / 해체 / 하게체; 뵙다; la hipercorrección *커피 나오셨습니다*; los causativos con -우- (깨우다, 세우다, 비우다) y -게 되다.
- El verso de aliteración «चारु चंद्र की चंचल किरणें» se cita sin autor a propósito (no se confirmó la atribución).

**No ampliados en esta tanda:** el resto de los temas de hindi y coreano ya superaban los 2.000 caracteres.
