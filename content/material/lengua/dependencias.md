# Lengua — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Primera carpeta de Tronco 5 completo (no una excepción de tag dentro de
otro tronco, como Biología/ESI/Cívica/Ed. Física): Lengua es la materia
primaria de este tronco, igual rol que `matematica/` para los Troncos
1-4. Fuente: `../../troncos.md`, sección "Tronco 5 — Lengua: de leer a
argumentar (y a comunicar)".

**Precedente real en el repo**: `archive/api/generadores/lengua_espanola/`
tiene generadores V1 completos para varios de estos temas (categorías
gramaticales, indicativo, subjuntivo, concordancia, sujeto y
predicado) — contenido ya vetted, reusado acá en vez de reinventarlo
(`troncos.md`, "Agregado v2.4": "P4B/P4C/P7B/P7C ya tenían generador
escrito hace tiempo (V1) sin que el mapa les diera nodo").

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su
fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `conciencia-fonologica/` | *(ninguna — nodo raíz de la rama)* | Nodo `P1` de `troncos.md`, sin flecha entrante — primer nodo de Tronco 5. Reconocer y manipular los sonidos de una lengua (rimas, sílabas, sonidos iniciales) es el prerrequisito de cualquier lectura, antes incluso de reconocer letras. |
| `decodificacion-y-fluidez/` | `conciencia-fonologica/` | El MAPA marca `P1 → P2`. Sin split aunque el título tenga dos partes: decodificar (convertir letra en sonido) y leer con fluidez (hacerlo rápido y automático) son dos etapas del MISMO proceso madurando, no dos habilidades independientes — mismo criterio que `../matematica/dispersion-rango-y-desvio/`. |
| `vocabulario-y-familia-de-palabras/` | `decodificacion-y-fluidez/` | El MAPA marca `P2 → P3`. Sin split: familia de palabras (raíz + prefijos/sufijos) es, en la práctica, una técnica para construir vocabulario, no una habilidad aparte. |
| `clases-de-palabras/` | `vocabulario-y-familia-de-palabras/` | El MAPA marca `P3 → P4`. Contenido reusado de `archive/api/generadores/lengua_espanola/01_categorias_gramaticales/enunciado.json` (ya vetted). Sin split pese a cubrir 8+ categorías (sustantivo, verbo, adjetivo...): es la lección clásica única de "clases de palabras", igual criterio que `../matematica/operaciones-enteros/`. |
| `conjugacion-verbal-indicativo/` | `clases-de-palabras/` | Nodo `P4B` de `troncos.md` (`P4 → P4B`), *split de Claude*: el título agrupa "indicativo y subjuntivo", pero son dos modos verbales que la escuela real enseña en momentos distintos (subjuntivo es notablemente más tardío y más difícil) — mismo criterio que la separación de `../biologia/herencia-ligada-al-sexo/` y `../biologia/grupos-sanguineos/`. Confirmado por el propio repo: `archive/api/generadores/lengua_espanola/` ya tenía `02_morfologia_verbal_indicativo/` y `03_morfologia_verbal_subjuntivo/` como carpetas separadas antes de que existiera este mapa. |
| `conjugacion-verbal-subjuntivo/` | `conjugacion-verbal-indicativo/` | Nodo `P4B` de `troncos.md`, segunda mitad del split. *Decisión de Claude, no marcada en el MAPA*: el subjuntivo presupone que el indicativo ya está dominado (comparte irregularidades de raíz y buena parte del vocabulario de tiempos), así que se lo hizo depender del indicativo en vez de ser hermano independiente de `clases-de-palabras/`. |
| `concordancia-nominal-y-verbal/` | `clases-de-palabras/` | Nodo `P4C` de `troncos.md` (`P4 → P4C`), hermano de `P4B`/`P5` (no depende de ellos). Sin split pese al título "X y Y": concordancia nominal (género/número dentro del sintagma nominal) y concordancia verbal (persona/número sujeto-verbo) son la misma regla general (hacer coincidir rasgos gramaticales) aplicada a dos partes de la oración — se enseñan juntas como "concordancia" en cualquier currícula real. Contenido reusado de `archive/api/generadores/lengua_espanola/04_concordancia/enunciado.json`. |
| `sujeto-y-predicado/` | `clases-de-palabras/` | Nodo `P5` de `troncos.md` (`P4 → P5`), hermano de `P4B`/`P4C`. Sin split: sujeto y predicado son las dos mitades COMPLEMENTARIAS de toda oración bimembre — no se puede enseñar una sin la otra, es una única lección sobre cómo se divide una oración. Contenido reusado de `archive/api/generadores/lengua_espanola/05_sujeto_predicado/enunciado.json`. |
| `nucleos-y-modificadores/` | `sujeto-y-predicado/` | Nodo `P6` de `troncos.md` (`P5 → P6`). Sin split: núcleo y modificador son dos conceptos complementarios del mismo análisis (todo sintagma tiene un núcleo, y los modificadores son justamente lo que se define EN RELACIÓN a ese núcleo) — no son dos habilidades independientes. Retoma directo el vocabulario de `sujeto-y-predicado/` (el núcleo del sujeto ya identificado ahí, ahora con nombre para lo que lo acompaña). |
| `objetos-y-circunstanciales/` | `nucleos-y-modificadores/` | Nodo `P7` de `troncos.md` (`P6 → P7`). Sin split: objeto directo, objeto indirecto y circunstanciales son los tres "modificadores del núcleo del predicado" que `nucleos-y-modificadores/` ya anunció como próximo tema — se enseñan juntos como una sola lección (los complementos verbales), no por separado. Depende directo de `nucleos-y-modificadores/` porque reutiliza el mismo patrón núcleo+modificador, aplicado ahora al predicado en vez del sujeto. |
| `voz-activa-y-pasiva/` | `objetos-y-circunstanciales/` | Nodo `P7B` de `troncos.md` (`P7 → P7B`). Sin split: activa y pasiva son las dos caras de la misma transformación (el OD de una pasa a ser sujeto de la otra), no dos habilidades independientes. Depende de `objetos-y-circunstanciales/` porque la transformación requiere identificar primero el OD de la oración activa (ya explicado ahí). |
| `oraciones-negativas-e-interrogativas/` | `objetos-y-circunstanciales/` | Nodo `P7C` de `troncos.md` (`P7 → P7C`), hermano de `P7B` (no depende de él). Sin split pese al título "X e Y": negativas e interrogativas son dos transformaciones de la misma oración base (afirmativa) que se enseñan en la misma lección de "modalidades oracionales" — *decisión de Claude, no marcada en el MAPA*, el MAPA ya las agrupa en un solo nodo. Depende de `objetos-y-circunstanciales/` (mismo padre que `P7B`) porque reconocer sujeto/predicado/complementos es la base para transformar la oración sin perder su estructura. |
| `oracion-compuesta-coordinacion-y-subordinacion/` | `objetos-y-circunstanciales/` | Nodo `P8` de `troncos.md` (`P7 → P8`). Sin split pese al título "X y Y": coordinación y subordinación son las dos formas de combinar oraciones simples en una compuesta, contenido de una misma lección clásica ("oración compuesta"), igual criterio que `clases-de-palabras/` agrupando 8+ categorías. Depende de `objetos-y-circunstanciales/` porque una oración compuesta se arma combinando oraciones simples ya analizables con sujeto/predicado/complementos. |
| `comprension-idea-principal/` | `decodificacion-y-fluidez/` | Nodo `P9` de `troncos.md` (`P2 → P9`) — **no** cuelga de la rama gramatical (`P7`/`P8`), cuelga directo de `P2` en el MAPA: comprensión lectora requiere fluidez de lectura, no análisis sintáctico. Primer nodo de la rama de comprensión/producción de Tronco 5, en paralelo a la rama gramatical ya cubierta (`P4`→`P8`). |
| `tipos-textuales/` | `comprension-idea-principal/` | Nodo `P10` de `troncos.md` (`P9 → P10`). Reconocer tipos de texto (narrativo, descriptivo, expositivo, argumentativo, instructivo) presupone poder identificar de qué trata un texto (idea principal), el prerrequisito directo marcado en el MAPA. |
| `genero-narrativo/` | `tipos-textuales/` | Nodo `P10Ba` de `troncos.md` (`P10 → P10Ba`), split real del MAPA: narrativo, lírico y dramático son tres nodos separados (`P10Ba`/`P10Bb`/`P10Bc`), cada uno un género literario con convenciones propias — no una sola lección. Primero de los tres por ser el que abre la subrama de análisis narrativo (`P10Ca`→`P10Cc`). |
| `genero-lirico/` | `tipos-textuales/` | Nodo `P10Bb` de `troncos.md` (`P10 → P10Bb`), hermano de `P10Ba`/`P10Bc` (no depende de ellos). Split real del MAPA — ver `genero-narrativo/`. |
| `genero-dramatico/` | `tipos-textuales/` | Nodo `P10Bc` de `troncos.md` (`P10 → P10Bc`), hermano de `P10Ba`/`P10Bb` (no depende de ellos). Split real del MAPA — ver `genero-narrativo/`. |
| `narrador/` | `genero-narrativo/` | Nodo `P10Ca` de `troncos.md` (`P10Ba → P10Ca`). Primer eslabón de la subrama de análisis narrativo: no se puede identificar tipo de narrador sin haber reconocido antes que el texto es narrativo. |
| `punto-de-vista/` | `narrador/` | Nodo `P10Cb` de `troncos.md` (`P10Ca → P10Cb`). El punto de vista se define en relación directa al narrador ya identificado (quién narra determina desde dónde se narra). |
| `estructura-narrativa/` | `punto-de-vista/` | Nodo `P10Cc` de `troncos.md` (`P10Cb → P10Cc`), cierre de la subrama narrador→punto de vista→estructura marcada en el MAPA. |
| `recursos-literarios/` | `tipos-textuales/` | Nodo `P11` de `troncos.md` (`P10 → P11`), hermano de `P10Ba`/`P12a` (no depende de ellos). Los recursos literarios (metáfora, hipérbole, etc.) aplican a cualquier género, por eso cuelga directo de `tipos-textuales/` y no de un género particular. Único de sus 40 preguntas: es "gigatema" (Javier), sube al techo de 40 en vez del piso de 20 porque hay más de una decena de recursos distintos con prueba de reconocimiento propia. |
| `romanticismo/` | `recursos-literarios/` | Nodo `P11Ba` de `troncos.md` (`P11 → P11Ba`), primero de la cadena de 5 movimientos literarios (`P11Ba→P11Bb→P11Bc→P11Bd→P11Be`), cada uno nodo separado del MAPA — split real, no de Claude. Depende de `recursos-literarios/` porque cada movimiento se caracteriza en parte por qué recursos privilegia (el Romanticismo, la hipérbole y la personificación emocional). |
| `realismo/` | `romanticismo/` | Nodo `P11Bb` de `troncos.md` (`P11Ba → P11Bb`). El Realismo se define en gran parte COMO REACCIÓN al Romanticismo (objetividad vs. subjetividad exaltada), no se puede explicar sin la referencia directa al movimiento anterior. |
| `modernismo/` | `realismo/` | Nodo `P11Bc` de `troncos.md` (`P11Bb → P11Bc`). Cadena histórica: el Modernismo (fin del s. XIX) sucede cronológicamente al Realismo y retoma parte de su preocupación estética como reacción. |
| `generacion-del-98/` | `modernismo/` | Nodo `P11Bd` de `troncos.md` (`P11Bc → P11Bd`). Contemporáneo y a menudo confundido con el Modernismo (ambos de fin de s. XIX/principios XX) — depende de él para poder marcar la diferencia explícita (esteticismo modernista vs. crisis de identidad nacional de la Gen. del 98). |
| `boom-latinoamericano/` | `generacion-del-98/` | Nodo `P11Be` de `troncos.md` (`P11Bd → P11Be`), cierre de la cadena de movimientos. Salto temporal grande (mediados s. XX) respecto a los anteriores, pero el MAPA lo encadena igual como último eslabón de "movimientos literarios en español" — se explicita esa distancia temporal en la teoría en vez de ocultarla. |
| `tesis/` | `tipos-textuales/` | Nodo `P12a` de `troncos.md` (`P10 → P12a`), hermano de `P10Ba`/`P11` (no depende de ellos). Primer eslabón del texto argumentativo: hay que poder identificar una postura antes de analizar cómo se defiende (argumentos) o se anticipa su contrario (contraargumentos). |
| `argumentos/` | `tesis/` | Nodo `P12b` de `troncos.md` (`P12a → P12b`). Los argumentos son las razones que sostienen una tesis ya identificada — no tienen sentido de analizar sin la tesis que defienden. |
| `contraargumentos/` | `argumentos/` | Nodo `P12c` de `troncos.md` (`P12b → P12c`), cierre de la cadena de texto argumentativo. Anticipar y refutar la postura contraria presupone ya saber construir los propios argumentos. |
| `detectar-falacias/` | `contraargumentos/` | Nodo `P13` de `troncos.md` (`P12c → P13`). Reconocer un argumento inválido (falacia) presupone ya saber cómo se ve un argumento válido que sostiene una tesis — lo que enseñó la cadena `tesis→argumentos→contraargumentos`. Es el inicio del "cruce inesperado" que señala `troncos.md` (v2.6): `Detectar falacias → Lógica proposicional (Filosofía) → Álgebra booleana (Informática)`, la misma estructura lógica vista en tres materias. |
| `ortografia-y-tildacion/` | `../clases-de-palabras/` | Nodo `ORT` de `troncos.md` (`P4 → ORT`), rama independiente de la gramatical/narrativa/argumentativa ya cubiertas (cuelga directo de `P4`, no de `P13`). Depende de `clases-de-palabras/` porque las reglas de tildación (agudas/graves/esdrújulas, diacríticas) presuponen saber identificar sílabas y categorías de palabra. |
| `signos-de-puntuacion/` | `ortografia-y-tildacion/` | Nodo `P4D` de `troncos.md` (`ORT → P4D`). Agregado v2.9 del MAPA: hueco estructural señalado por Opus 5 — existía ortografía de palabras sueltas pero no puntuación de oraciones, pese a que `Producción escrita compleja` la necesita. Depende de `ortografia-y-tildacion/` por ser la siguiente capa de corrección formal del texto (palabra → oración). |
| `produccion-escrita-compleja/` | `signos-de-puntuacion/` (y `oracion-compuesta-coordinacion-y-subordinacion/`) | Nodo `P14` de `troncos.md`, con DOS padres (`P8 → P14` y `P4D → P14`): necesita saber combinar oraciones (coordinación/subordinación) Y puntuarlas correctamente para producir un texto largo coherente. En `dependencias.md` se referencia sólo la dependencia directa más fuerte (`signos-de-puntuacion/`); la de `oracion-compuesta-coordinacion-y-subordinacion/` ya estaba cubierta antes en la cadena gramatical y se cita en la teoría. |
| `conectores-textuales/` | `produccion-escrita-compleja/` | Nodo `P14Ba` de `troncos.md` (`P14 → P14Ba`), uno de 3 nodos hermanos (`P14Ba`/`P14Bb`/`P14Bc`) agrupados por Javier bajo "Cohesión y coherencia" — split real del MAPA, no de Claude (agregado v2.8: Z señaló que cohesión/coherencia era lo que `Producción escrita compleja` daba por sabido sin enseñarlo explícito). |
| `referencia-anafora-y-catafora/` | `produccion-escrita-compleja/` | Nodo `P14Bb` de `troncos.md` (`P14 → P14Bb`), hermano de `P14Ba`/`P14Bc` (no depende de ellos). Split real del MAPA — ver `conectores-textuales/`. |
| `progresion-tematica/` | `produccion-escrita-compleja/` | Nodo `P14Bc` de `troncos.md` (`P14 → P14Bc`), hermano de `P14Ba`/`P14Bb` (no depende de ellos). Split real del MAPA — ver `conectores-textuales/`. |
| `exposicion-oral/` | `contraargumentos/` | Nodo `COM1` de `troncos.md` (`P12c → COM1`). Agregado v2.7: "comunicación en vivo" que Lengua enseñaba a medias — no es contenido nuevo, es el mismo contenido de texto argumentativo (`tesis/`→`argumentos/`→`contraargumentos/`) puesto de pie frente a otra persona en tiempo real. |
| `debate-refutar-en-vivo/` | `detectar-falacias/` | Nodo `COM2` de `troncos.md` (`P13 → COM2`), hermano de `COM1` (no depende de él). Refutar en vivo reusa directo el vocabulario de falacias para señalar en tiempo real errores de razonamiento del rival, con la presión adicional de hacerlo sin poder revisar y corregir como en un texto escrito. |
| `negociacion/` | `debate-refutar-en-vivo/` | Nodo `COM3` de `troncos.md` (`COM2 → COM3`). Negociar presupone ya poder debatir y refutar en vivo — agrega el objetivo de llegar a un acuerdo mutuamente aceptable, en vez de "ganar" el debate. |
| `presentacion-con-apoyo-visual/` | `exposicion-oral/` | Nodo `COM4` de `troncos.md` (`COM1 → COM4`), hermano de `COM2` (no depende de él). Agrega la capa de apoyo visual (diapositivas, gráficos) a la exposición oral ya dominada, sin ese apoyo. |
| `persuasion-etica-vs-manipulacion/` | `debate-refutar-en-vivo/` (y `detectar-falacias/`) | Nodo `COM5` de `troncos.md`, con DOS padres (`COM2 → COM5` y `P13 → COM5`): distinguir persuasión legítima de manipulación reusa tanto las técnicas de debate en vivo como el vocabulario de falacias (una manipulación suele ser, en el fondo, una falacia usada a sabiendas). En `dependencias.md` se referencia la dependencia de `debate-refutar-en-vivo/`; la de `detectar-falacias/` se cita en la teoría. |
| `cv/` | `produccion-escrita-compleja/` | Nodo `COM6a` de `troncos.md` (`P14 → COM6a`), primero de 3 nodos hermanos (`COM6a`/`COM6b`/`COM6c`) agrupados por Javier bajo "Escritura profesional" — split real del MAPA (agregado v2.7: el género concreto que un egresado usa primero en la vida real, mismo criterio que `../vida-cotidiana/` con contenido práctico de alta demanda). |
| `correo-formal/` | `produccion-escrita-compleja/` | Nodo `COM6b` de `troncos.md` (`P14 → COM6b`), hermano de `COM6a`/`COM6c` (no depende de ellos). Split real del MAPA — ver `cv/`. |
| `informe-tecnico/` | `produccion-escrita-compleja/` | Nodo `COM6c` de `troncos.md` (`P14 → COM6c`), hermano de `COM6a`/`COM6b` (no depende de ellos). Split real del MAPA — ver `cv/`. |

### Bloque comunicación/pragmática + atomización de sintaxis (2026-08-13, `LC1-LC7`, `SX1-SX19`, `ESTU1`, `TT1`, `TS1`)

29 nodos que sumó `troncos.md` v2.9.6 (ver su changelog para fuentes:
"Prácticas del Lenguaje 1" Ed. Estrada, "Sintaxis.pdf", "Prácticas del
lenguaje 5"). `teoria.md` generado con qwen/qwen3.6-35b-a3b, "revisión
pendiente" en el header.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `circuito-de-la-comunicacion/` | `decodificacion-y-fluidez/` | Nodo `LC1` (`P2 → LC1`). |
| `variedades-de-la-lengua/` | `circuito-de-la-comunicacion/` | Nodo `LC2` (`LC1 → LC2`). |
| `discurso-referido/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `LC3` (`P8 → LC3`). |
| `generos-discursivos/` | `tipos-textuales/` | Nodo `LC4` (`P10 → LC4`). |
| `paratextos/` | `tipos-textuales/` | Nodo `LC5` (`P10 → LC5`), hermano de `LC4`. |
| `subjetivemas-y-modalizadores/` | `tesis/` | Nodo `LC6` (`P12a → LC6`). |
| `generos-periodisticos/` | `generos-discursivos/`, `tipos-textuales/` | Nodo `LC7`, dos padres (`LC4 → LC7`, `P10 → LC7`). |
| `coordinadas-copulativas/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX1` (`P8 → SX1`), primero de la atomización de `P8` (lumped node que aplastaba ~18 conceptos). |
| `coordinadas-disyuntivas/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX2` (`P8 → SX2`), hermano de `SX1`. |
| `coordinadas-adversativas/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX3` (`P8 → SX3`), hermano de `SX1`/`SX2`. |
| `coordinadas-distributivas/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX4` (`P8 → SX4`), último de coordinación. |
| `subordinada-sustantiva-de-sujeto/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX5` (`P8 → SX5`), primero de subordinación sustantiva. |
| `subordinada-sustantiva-de-complemento-directo/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX6` (`P8 → SX6`), hermano de `SX5`. |
| `subordinada-sustantiva-de-complemento-de-regimen/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX7` (`P8 → SX7`), hermano de `SX5`. |
| `subordinada-sustantiva-de-complemento-circunstancial/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX8` (`P8 → SX8`), hermano de `SX5`. |
| `subordinada-sustantiva-de-complemento-del-nombre/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX9` (`P8 → SX9`), hermano de `SX5`. |
| `subordinada-sustantiva-de-complemento-de-un-adjetivo/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX10` (`P8 → SX10`), último de subordinación sustantiva. |
| `subordinada-adjetiva-o-de-relativo/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX11` (`P8 → SX11`), primero de subordinación adjetiva/adverbial. |
| `subordinada-adverbial-de-tiempo/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX12` (`P8 → SX12`), hermano de `SX11`. |
| `subordinada-adverbial-de-lugar/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX13` (`P8 → SX13`), hermano de `SX11`. |
| `subordinada-adverbial-de-modo/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX14` (`P8 → SX14`), hermano de `SX11`. |
| `subordinada-causal/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX15` (`P8 → SX15`), hermano de `SX11`. |
| `subordinada-consecutiva/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX16` (`P8 → SX16`), hermano de `SX11`. |
| `subordinada-condicional/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX17` (`P8 → SX17`), hermano de `SX11`. |
| `subordinada-concesiva-y-final/` | `oracion-compuesta-coordinacion-y-subordinacion/` | Nodo `SX18` (`P8 → SX18`), último de la atomización de `P8`. |
| `sintagmas-nominal-adjetivo-preposicional-adverbial-verbal/` | `nucleos-y-modificadores/` | Nodo `SX19` (`P6 → SX19`), versión formal de lo que `P6` ya cubría informal — no repite, complementa. |
| `tecnicas-de-estudio-resumen-y-organizadores-graficos/` | `comprension-idea-principal/` | Nodo `ESTU1` (`P9 → ESTU1`). **Nota de ID**: se renombró de `ES1` a `ESTU1` para no chocar con el `ES1` ya existente de ESI (Eficacia de un método anticonceptivo). |
| `texto-teatral/` | `tipos-textuales/` | Nodo `TT1` (`P10 → TT1`), distinto del género dramático literario (`P10Bc`) — acá es tipo textual, no género literario. |
| `tipos-de-sujeto/` | `sujeto-y-predicado/` | Nodo `TS1` (`P5 → TS1`), elaboración de lo que `P5` da genérico. |
