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

Validación con `_qa_tools/validar_cuestionario.py`: ver el reporte del agente (el estado de cada archivo se confirmó al final de la corrida).

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
