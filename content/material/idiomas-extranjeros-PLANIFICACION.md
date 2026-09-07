# Tronco 18 — Idiomas Extranjeros: planificación por idioma

> Documento de planificación, NO generar nada hasta confirmar. Reemplaza
> el esquema genérico de 6 temas por idioma (`LE1`-`LE6` en `troncos.md`)
> por un currículum real, adaptado a cómo se enseña cada idioma en la
> práctica. Español queda afuera (tiene su propia materia).
>
> **Objetivo de dificultad: parejo entre los 10 idiomas, apuntando al
> equivalente de C1** (Marco Común Europeo para los que lo usan;
> hito equivalente — JLPT N1/N2, TOPIK 5/6, HSK 5/6 — para los que no).
> No tiene sentido que inglés llegue a C1 y otro idioma se quede en B1:
> la profundidad final debe ser comparable en todos.
>
> **Las 4 destrezas** (Reading, Writing, Listening, Speaking) se repiten
> **por nivel** en vez de ser 1 módulo genérico — un ejercicio de
> comprensión lectora en nivel inicial y uno en nivel avanzado son
> consignas completamente distintas, como hacen los exámenes
> certificados reales (Cambridge, JLPT, TOPIK, HSK, etc.).
>
> Para el armado de los `cuestionario.md`, inspirarse en el formato de
> Use of English / gramática de exámenes certificados reales (no
> inventar formatos de pregunta nuevos).
>
> **Criterio de distancia lingüística respecto del español**: el punto de
> partida de cada rama NO es "cero" parejo — depende de cuánto ya trae
> gratis un hispanohablante. Italiano, francés, portugués (BR/PT) y
> esperanto comparten con el español género gramatical, sistema de
> conjugación verbal y buena parte del léxico (cognados) — el alumno no
> necesita que le expliquen que existe el concepto, sólo la forma
> específica del idioma nuevo. Por eso esas ramas arrancan con MENOS
> temas de A1-A2 que inglés/alemán (que sí requieren construir esos
> conceptos desde cero) y en cambio dedican un tema temprano explícito a
> **falsos amigos con español** (donde el parecido engaña en vez de
> ayudar). Japonés/coreano/chino no tienen ningún atajo por parecido —
> arrancan de cero en escritura y estructura, de ahí que su rama sea la
> más larga en la base. El total de temas por idioma en la tabla final
> ya refleja esto: no es que unos idiomas "lleguen menos lejos", es que
> parten de un lugar distinto y convergen en la misma profundidad final.

## Audio para Listening: generación offline, no infraestructura nueva

El TTS que ya existe (`apps/web/src/pages/modulos/ModuloDetail.tsx`,
`window.speechSynthesis`) lee en voz alta contenido que el alumno **ve**
en pantalla — sirve como accesibilidad, no como ejercicio de Listening
real (ahí el alumno escucha sin ver la transcripción). No sirve para esto.

La plataforma **ya soporta** lo que hace falta: el editor de bloques
tiene un bloque `Audio` (ver `apps/web/src/blocks/types.ts`) que permite
subir un mp3 igual que cualquier otro material — nada que construir del
lado de la app ni de cada escuela (no autohostean ningún modelo, sólo
sirven el mp3 como asset estático, igual que una imagen).

Lo único que falta es generar los mp3 **una vez, offline**, durante la
autoría de contenido (mismo lugar donde se generan `teoria.md`/
`cuestionario.md`), con motores locales elegidos por licencia (100%
permisiva, uso comercial libre) y por no depender de GPU (producción no
tiene placa de video, y de todos modos el audio no se genera en vivo):

| Idioma | Motor | Voz | Licencia |
|---|---|---|---|
| en | Piper | `en_US-lessac-medium` | MIT |
| de | Piper | `de_DE-thorsten-medium` | MIT |
| fr | Piper | `fr_FR-siwis-medium` | MIT |
| it | Piper | `it_IT-riccardo-medium` | MIT |
| pt-BR | Piper | `pt_BR-faber-medium` | MIT |
| pt-PT | Piper | `pt_PT-tugão` (única disponible, calidad low) | MIT |
| ko | Piper | `ko_KR-kss` | MIT |
| ja | Kokoro | `jf_alpha` / `jm_kumo` | Apache-2.0 |
| zh | Kokoro | `zf_xiaoxiao` / `zm_yunxi` | Apache-2.0 |
| eo | eSpeak-NG | `eo` | GPL-3.0 (uso comercial permitido) |

Instalado y probado en este entorno (CPU, sin GPU, confirmado que corre
con los 6 núcleos disponibles):
- `espeak-ng` (paquete del sistema) — probado en esperanto, genera mp3 OK.
- `piper-tts` (pip, venv en `~/tts-venv`) — instalado; coreano confirmado
  disponible en el catálogo (`ko/ko_KR/kss`).
- `kokoro-onnx` (pip, venv en `~/tts-venv`, modelo `kokoro-v1.0.onnx` +
  `voices-v1.0.bin` bajados a `~/tts-venv/models/`, ~340MB total, sin
  torch/CUDA) — probado en japonés y chino, calidad aprobada.

(Se descartaron Coqui/XTTS v2 y Meta MMS-TTS por licencia no-comercial
CC-BY-NC/CPML; Bark por peso —~22GB no entra en memoria—; y MeloTTS por
paquete roto en PyPI + dependencia innecesaria de torch+CUDA completo
para un uso 100% CPU offline.)

El resultado (mp3 + guion en texto, este último NUNCA visible para el
alumno, sólo usado para armar las preguntas de comprensión) se sube como
cualquier otro material. Bloquea únicamente los módulos `listening-*`; el
resto de gramática/vocabulario/reading/writing/speaking no depende de
esto.

---

## Inglés (`en`) — objetivo C1

### A1-A2 — gramática (12 temas)
`to-be`, `present-simple`, `present-continuous`, `articulos`,
`plurales`, `posesivos`, `there-is-there-are`, `preposiciones-lugar-tiempo`,
`past-simple-regular-irregular`, `can-cant`, `comparativos-superlativos`,
`imperativos`

### B1 — gramática (8 temas)
`past-continuous`, `present-perfect`, `futuro-going-to-will`,
`primer-condicional`, `modales-should-must-have-to`,
`voz-pasiva-basica`, `discurso-indirecto-basico`, `oraciones-de-relativo`

### B2 — gramática (7 temas)
`segundo-tercer-condicional`, `voz-pasiva-avanzada`,
`discurso-indirecto-avanzado`, `modales-de-deduccion`, `phrasal-verbs`,
`gerundio-vs-infinitivo`, `collocations`

### C1 — gramática (6 temas)
`condicionales-mixtos`, `inversion`, `cleft-sentences`,
`modales-matizados`, `idioms-avanzados`, `registro-formal-informal`

### Destrezas por nivel (4 niveles × 4 destrezas = 16 temas)
`reading-a2`, `writing-a2`, `listening-a2`, `speaking-a2`,
`reading-b1`, `writing-b1`, `listening-b1`, `speaking-b1`,
`reading-b2`, `writing-b2`, `listening-b2`, `speaking-b2`,
`reading-c1`, `writing-c1`, `listening-c1`, `speaking-c1`

**Total inglés: 49 temas**

---

## Alemán (`de`) — objetivo C1

### A1-A2 — gramática (10 temas)
`conjugacion-presente`, `casos-nominativ-akkusativ`,
`articulos-der-die-das`, `preguntas-w`, `negacion-nicht-kein`,
`plurales`, `preposiciones-con-casos`,
`verbos-modales-koennen-muessen-wollen`, `perfekt`,
`orden-verbo-segunda-posicion`

### B1 — gramática (8 temas)
`caso-dativ`, `caso-genitiv`, `oraciones-subordinadas-weil-dass-wenn`,
`voz-pasiva`, `declinacion-adjetivos`, `comparativos`,
`oraciones-de-relativo`, `konjunktiv-ii-basico`

### B2 — gramática (6 temas)
`konjunktiv-ii-completo`, `voz-pasiva-con-modales`, `nominalizacion`,
`conectores-avanzados-obwohl-trotzdem-indem`, `atributos-extendidos`,
`futur-ii`

### C1 — gramática (5 temas)
`konjunktiv-i-discurso-indirecto`, `subjuntivo-en-escritura-formal`,
`particulas-modales`, `estructuras-nominales-complejas`, `registro-formal-informal`

### Destrezas por nivel (4 niveles × 4 = 16 temas)
`reading-a2`, `writing-a2`, `listening-a2`, `speaking-a2`,
`reading-b1`, `writing-b1`, `listening-b1`, `speaking-b1`,
`reading-b2`, `writing-b2`, `listening-b2`, `speaking-b2`,
`reading-c1`, `writing-c1`, `listening-c1`, `speaking-c1`

**Total alemán: 45 temas**

---

## Francés (`fr`) — objetivo C1

### A1-A2 — gramática (11 temas)
`etre-avoir`, `presente-verbos-er-ir-re`, `articulos-le-la-les-un-une`,
`negacion-ne-pas`, `genero-y-concordancia`, `adjetivos-posesivos`,
`preposiciones`, `passe-compose`, `futur-proche-aller-infinitif`,
`interrogativos`, `falsos-amigos-con-espanol`

### B1 — gramática (6 temas)
`imparfait`, `conditionnel`, `subjonctif-basico`,
`pronombres-relativos-qui-que-ou`, `pronombres-complemento`,
`comparativos-superlativos`

### B2 — gramática (6 temas)
`subjonctif-completo`, `conditionnel-passe`, `discours-indirect`,
`gerondif`, `concordance-des-temps`, `pronombres-relativos-compuestos`

### C1 — gramática (5 temas)
`registre-soutenu-vs-familier`, `inversion-du-sujet`,
`subordonnees-concessives-et-oppositives`, `nominalisation`,
`connecteurs-logiques-avances`

### Destrezas por nivel (4 niveles × 4 = 16 temas)
`reading-a2`, `writing-a2`, `listening-a2`, `speaking-a2`,
`reading-b1`, `writing-b1`, `listening-b1`, `speaking-b1`,
`reading-b2`, `writing-b2`, `listening-b2`, `speaking-b2`,
`reading-c1`, `writing-c1`, `listening-c1`, `speaking-c1`

**Total francés: 44 temas**

---

## Italiano (`it`) — objetivo C1

### A1-A2 — gramática (8 temas)
`essere-avere`, `presente-indicativo`, `articulos`, `plurales`,
`posesivos`, `passato-prossimo`, `preposiciones`,
`falsos-amigos-con-espanol`

### B1 — gramática (4 temas)
`imperfetto`, `futuro`, `condizionale`, `congiuntivo-basico`

### B2 — gramática (5 temas)
`congiuntivo-completo`, `condizionale-passato`, `periodo-ipotetico`,
`discorso-indiretto`, `pronombres-combinados`

### C1 — gramática (4 temas)
`registro-formale-vs-informale`, `costruzioni-passive-avanzate`,
`nominalizzazione`, `connettivi-testuali-avanzati`

### Destrezas por nivel (4 niveles × 4 = 16 temas)
`reading-a2`, `writing-a2`, `listening-a2`, `speaking-a2`,
`reading-b1`, `writing-b1`, `listening-b1`, `speaking-b1`,
`reading-b2`, `writing-b2`, `listening-b2`, `speaking-b2`,
`reading-c1`, `writing-c1`, `listening-c1`, `speaking-c1`

**Total italiano: 37 temas**

---

## Portugués Brasil (`pt-BR`) — objetivo C1

### A1-A2 — gramática (5 temas)
`ser-estar`, `presente-indicativo`, `falsos-amigos-con-espanol`,
`genero-articulos-diferencias-con-espanol`, `preterito-perfeito`

### B1 — gramática (4 temas)
`preterito-imperfeito`, `futuro`, `subjuntivo-basico`, `uso-del-gerundio`

### B2 — gramática (4 temas)
`subjuntivo-completo`, `voz-passiva-avancada`, `discurso-indireto`,
`pronomes-combinados`

### C1 — gramática (4 temas)
`registro-formal-vs-informal`, `concordancia-verbal-avancada`,
`nominalizacao`, `conectores-argumentativos-avancados`

### Destrezas por nivel (4 niveles × 4 = 16 temas)
`reading-a2`, `writing-a2`, `listening-a2`, `speaking-a2`,
`reading-b1`, `writing-b1`, `listening-b1`, `speaking-b1`,
`reading-b2`, `writing-b2`, `listening-b2`, `speaking-b2`,
`reading-c1`, `writing-c1`, `listening-c1`, `speaking-c1`

**Total portugués Brasil: 33 temas**

---

## Portugués Portugal (`pt-PT`) — objetivo C1

Misma base gramatical que `pt-BR` (comparten idioma), pero con las
diferencias reales de pronunciación, colocación pronominal y léxico
marcadas explícitamente en cada tema — **no duplicar contenido
idéntico**, cada teoría debe señalar en qué difiere de `pt-BR`.

### A1-A2 — gramática (5 temas)
`ser-estar`, `presente-indicativo`, `colocacion-pronominal-proclise`,
`genero-articulos-diferencias-con-espanol`, `preterito-perfeito`

### B1 — gramática (4 temas)
`preterito-imperfeito`, `futuro`, `subjuntivo-basico`,
`diferencias-lexicas-con-pt-br`

### B2 — gramática (4 temas)
`subjuntivo-completo`, `voz-passiva-avancada`, `discurso-indireto`,
`mesoclise`

### C1 — gramática (4 temas)
`registro-formal-vs-informal`, `concordancia-verbal-avancada`,
`nominalizacao`, `conectores-argumentativos-avancados`

### Destrezas por nivel (4 niveles × 4 = 16 temas)
`reading-a2`, `writing-a2`, `listening-a2`, `speaking-a2`,
`reading-b1`, `writing-b1`, `listening-b1`, `speaking-b1`,
`reading-b2`, `writing-b2`, `listening-b2`, `speaking-b2`,
`reading-c1`, `writing-c1`, `listening-c1`, `speaking-c1`

**Total portugués Portugal: 33 temas**

---

## Japonés (`ja`) — objetivo equivalente a JLPT N1

### Sistemas de escritura (3 temas, prerrequisito de todo lo demás)
`hiragana`, `katakana`, `kanji-basicos`

### Gramática nivel N5 (5 temas)
`particulas-wa-ga-wo-ni-de`, `formas-verbales-diccionario-masu`,
`adjetivos-i-na`, `formacion-de-preguntas`, `contadores`

### Gramática nivel N4 (4 temas)
`forma-te`, `forma-potencial`, `formas-condicionales`, `comparacion`

### Gramática nivel N3 (5 temas)
`forma-pasiva`, `forma-causativa`, `keigo-basico-teineigo`,
`expresiones-de-deduccion`, `oraciones-compuestas`

### Gramática nivel N2 (4 temas)
`keigo-sonkeigo-kenjougo`, `forma-causativa-pasiva`,
`estilo-formal-de-aru`, `conectores-formales-de-escritura`

### Gramática nivel N1 (4 temas)
`expresiones-idiomaticas-avanzadas`, `matices-de-registro`,
`estructuras-clasicas-remanentes`, `lectura-de-textos-especializados`

### Destrezas por nivel (5 niveles × 4 = 20 temas)
`reading-n5`, `writing-n5`, `listening-n5`, `speaking-n5`,
`reading-n4`, `writing-n4`, `listening-n4`, `speaking-n4`,
`reading-n3`, `writing-n3`, `listening-n3`, `speaking-n3`,
`reading-n2`, `writing-n2`, `listening-n2`, `speaking-n2`,
`reading-n1`, `writing-n1`, `listening-n1`, `speaking-n1`

**Total japonés: 45 temas**

---

## Coreano (`ko`) — objetivo equivalente a TOPIK II (nivel 5-6)

### Sistema de escritura (1 tema)
`hangul`

### Gramática nivel básico — TOPIK I (5 temas)
`particulas-eun-neun-i-ga-eul-reul`, `conjugacion-formal-informal`,
`tiempos-presente-pasado-futuro`, `honorificos-basicos`, `negacion`

### Gramática nivel intermedio-bajo (4 temas)
`conectores`, `formas-de-conexion-oracional`,
`expresiones-de-deseo-e-intencion`, `discurso-indirecto-basico`

### Gramática nivel intermedio-alto (4 temas)
`honorificos-completos`, `voz-pasiva-y-causativa`,
`expresiones-de-conjetura`, `estilo-de-escritura-formal`

### Gramática nivel avanzado (4 temas)
`matices-de-registro`, `expresiones-idiomaticas`,
`conectores-argumentativos-avanzados`, `lectura-de-textos-especializados`

### Destrezas por nivel (4 niveles × 4 = 16 temas)
`reading-basico`, `writing-basico`, `listening-basico`, `speaking-basico`,
`reading-intermedio-bajo`, `writing-intermedio-bajo`, `listening-intermedio-bajo`, `speaking-intermedio-bajo`,
`reading-intermedio-alto`, `writing-intermedio-alto`, `listening-intermedio-alto`, `speaking-intermedio-alto`,
`reading-avanzado`, `writing-avanzado`, `listening-avanzado`, `speaking-avanzado`

**Total coreano: 34 temas**

---

## Chino mandarín (`zh`) — objetivo equivalente a HSK 5-6

### Sistema de escritura (2 temas)
`pinyin-y-tonos`, `caracteres-y-radicales-basicos`

### Gramática nivel HSK1 (5 temas)
`clasificadores-medidores`, `orden-de-la-oracion`,
`negacion-bu-mei`, `particulas-interrogativas-ma-ne`,
`particula-aspectual-le`

### Gramática nivel HSK2 (3 temas)
`estructuras-comparativas`, `complementos-de-resultado`, `particula-guo`

### Gramática nivel HSK3-4 (5 temas)
`complementos-de-grado`, `construccion-ba`, `construccion-bei-pasiva`,
`oraciones-condicionales`, `conectores-de-parrafo`

### Gramática nivel HSK5-6 (4 temas)
`chengyu-modismos-de-cuatro-caracteres`, `registro-formal-escrito`,
`estructuras-retoricas-avanzadas`, `matices-de-particulas-aspectuales`

### Destrezas por nivel (4 niveles × 4 = 16 temas)
`reading-hsk1`, `writing-hsk1`, `listening-hsk1`, `speaking-hsk1`,
`reading-hsk2`, `writing-hsk2`, `listening-hsk2`, `speaking-hsk2`,
`reading-hsk34`, `writing-hsk34`, `listening-hsk34`, `speaking-hsk34`,
`reading-hsk56`, `writing-hsk56`, `listening-hsk56`, `speaking-hsk56`

**Total chino: 35 temas**

---

## Árabe estándar moderno (`ar`) — objetivo C1

> Nota de alcance: se enseña **fusha** (árabe estándar moderno, el
> registro académico/de medios, sin variante dialectal) — mismo criterio
> que ya usa la plataforma para separar registro formal de coloquial en
> otros idiomas. No hay un test único dominante como JLPT/TOPIK/HSK para
> árabe; el objetivo se mide en CEFR igual que inglés/alemán/francés.
> Sin atajo léxico con español (como ja/ko/zh) — arranca de cero en
> escritura y estructura.

### Escritura (prerrequisito de todo lo demás, 3 temas)
`alfabeto-arabe-y-conexion-de-letras`, `vocalizacion-tashkil`,
`sistema-de-raices-trilateras`

### A1-A2 — gramática (10 temas)
`pronombres-personales`, `genero-masculino-femenino`,
`articulo-determinado-al`, `oraciones-nominales-mubtada-khabar`,
`plural-regular-masculino-femenino`, `plural-quebrado`,
`presente-verbal-mudari`, `pasado-verbal-madi`,
`numeros-cardinales-y-concordancia-inversa`, `preposiciones-e-interrogativos`

### B1 — gramática (7 temas)
`caso-nominativo-acusativo-genitivo-irab`, `verbos-huecos-y-defectivos`,
`formas-verbales-derivadas-wazn`, `dual-el-mutanna`,
`comparativo-y-superlativo`, `adjetivos-relativos-nisba`,
`oraciones-condicionales-basicas`

### B2 — gramática (6 temas)
`voz-pasiva`, `modo-subjuntivo-y-yusivo`, `oraciones-de-relativo`,
`concordancia-plural-no-humano-como-femenino-singular`,
`discurso-indirecto`, `conectores-avanzados`

### C1 — gramática (5 temas)
`diglosia-fusha-vs-dialectos-hablados`, `estilo-retorico-balagha`,
`estructura-nominal-idafa-compleja`, `matices-de-particulas`,
`prosa-periodistica-y-formal`

### Destrezas por nivel (4 niveles × 4 destrezas = 16 temas)
`reading-a2`, `writing-a2`, `listening-a2`, `speaking-a2`,
`reading-b1`, `writing-b1`, `listening-b1`, `speaking-b1`,
`reading-b2`, `writing-b2`, `listening-b2`, `speaking-b2`,
`reading-c1`, `writing-c1`, `listening-c1`, `speaking-c1`

**Total árabe: 47 temas**

---

## Ruso (`ru`) — objetivo equivalente a ТРКИ-3 / TORFL (nivel C1)

> Sin atajo léxico con español — arranca de cero en escritura (cirílico)
> y estructura. ТРКИ (Test of Russian as a Foreign Language) es el
> estándar internacional real, mismo tipo de anclaje que JLPT/TOPIK/HSK.

### Escritura (prerrequisito, 1 tema)
`alfabeto-cirilico-y-pronunciacion`

### A1-A2 — gramática (10 temas)
`genero-de-sustantivos`, `caso-nominativo`, `caso-acusativo`,
`caso-genitivo`, `pronombres-personales-y-posesivos`,
`presente-de-verbos`, `pasado-de-verbos-y-genero`,
`numeros-cardinales-y-concordancia`, `adjetivos-y-concordancia`,
`interrogativos-y-negacion`

### B1 — gramática (8 temas)
`caso-dativo`, `caso-instrumental`, `caso-preposicional`,
`aspecto-verbal-perfectivo-imperfectivo`, `verbos-de-movimiento`,
`imperativo`, `comparativo-y-superlativo`, `oraciones-condicionales-basicas`

### B2 — gramática (6 temas)
`participios-activos-y-pasivos`, `gerundio-deeprichastie`,
`voz-pasiva-con-participios`, `discurso-indirecto`,
`declinacion-completa-de-numerales`, `conectores-argumentativos`

### C1 — gramática (5 temas)
`registro-formal-vs-coloquial`, `estilo-periodistico-y-burocratico`,
`matices-aspectuales-avanzados`, `prefijos-verbales-y-cambio-de-significado`,
`estructuras-nominales-complejas`

### Destrezas por nivel (4 niveles × 4 destrezas = 16 temas)
`reading-a2`, `writing-a2`, `listening-a2`, `speaking-a2`,
`reading-b1`, `writing-b1`, `listening-b1`, `speaking-b1`,
`reading-b2`, `writing-b2`, `listening-b2`, `speaking-b2`,
`reading-c1`, `writing-c1`, `listening-c1`, `speaking-c1`

**Total ruso: 46 temas**

---

## Hindi (`hi`) — objetivo C1

> Sin atajo léxico con español — arranca de cero en escritura
> (devanagari) y estructura. No hay test internacional tan establecido
> como JLPT/TOPIK/HSK/ТРКИ para hindi; el objetivo se mide en CEFR,
> mismo criterio que inglés/alemán/francés/árabe.

### Escritura (prerrequisito, 2 temas)
`devanagari-consonantes-y-vocales`, `matras-y-conjuntas`

### A1-A2 — gramática (10 temas)
`genero-masculino-femenino`, `pronombres-personales`,
`presente-habitual`, `posposiciones-basicas-ka-ko-se`,
`plural-de-sustantivos`, `adjetivos-y-concordancia`,
`numeros-cardinales`, `interrogativos`, `negacion`, `presente-continuo`

### B1 — gramática (8 temas)
`pasado-y-construccion-ergativa-ne`, `futuro`,
`posposiciones-compuestas`, `imperativo-y-cortesia`,
`oraciones-condicionales-basicas`, `comparativo-y-superlativo`,
`verbos-compuestos-halka-kriya`, `discurso-directo-basico`

### B2 — gramática (6 temas)
`voz-pasiva`, `participios-y-oraciones-participiales`,
`discurso-indirecto`, `subjuntivo-y-modo-optativo`,
`registro-sanscritizado-vs-persa-urdu`, `conectores-argumentativos`

### C1 — gramática (5 temas)
`registro-formal-vs-coloquial`, `estilo-literario-y-periodistico`,
`estructuras-nominales-complejas`, `matices-de-posposiciones`,
`prosa-formal-y-oficial`

### Destrezas por nivel (4 niveles × 4 destrezas = 16 temas)
`reading-a2`, `writing-a2`, `listening-a2`, `speaking-a2`,
`reading-b1`, `writing-b1`, `listening-b1`, `speaking-b1`,
`reading-b2`, `writing-b2`, `listening-b2`, `speaking-b2`,
`reading-c1`, `writing-c1`, `listening-c1`, `speaking-c1`

**Total hindi: 47 temas**

---

## Esperanto (`eo`) — objetivo C1 (aprendizaje más rápido por regularidad,
pero igual profundidad final)

### Gramática básica (5 temas)
`sistema-de-terminaciones-o-a-e-i`, `tiempos-verbales-regulares`,
`acusativo-n`, `correlativos-tabelvortoj`, `afijos-y-formacion-de-palabras`

### Gramática intermedia (4 temas)
`participios-activos-y-pasivos`, `modo-condicional-y-volitivo`,
`preposiciones-y-su-uso-libre`, `subordinadas-con-ke-kiu-kiam`

### Gramática avanzada (4 temas)
`neologismos-y-prestamos`, `estilo-literario-vs-tecnico`,
`ambiguedades-y-como-resolverlas`, `variacion-dialectal-minima`

### Destrezas por nivel (3 niveles × 4 = 12 temas)
`reading-a2`, `writing-a2`, `listening-a2`, `speaking-a2`,
`reading-b1`, `writing-b1`, `listening-b1`, `speaking-b1`,
`reading-c1`, `writing-c1`, `listening-c1`, `speaking-c1`

**Total esperanto: 25 temas**

---

## Español rioplatense (`es-AR`) — 11º idioma, planificación pendiente

Javier: se agrega como idioma propio dentro de Tronco 18 (no reemplaza
la materia `lengua/` en español estándar que ya existe — es un track
aparte). **Difícil de planificar por una razón concreta, no genérica**:
la brecha entre el registro rioplatense real (voseo, yeísmo/sheísmo,
lunfardo, y sobre todo léxico que el diccionario no recoge o que
documenta con un uso distinto al real) no tiene el mismo tipo de fuente
autoritativa clara que sí tienen los otros 9 (un CEFR, un JLPT, un
manual escolar estándar). No arranca hasta armar un criterio propio de
qué contar como "nivel" acá — **no generar nada de es-AR todavía**,
queda pendiente de una sesión de planificación dedicada.

Nota técnica de TTS para este caso: Piper ya trae un mecanismo de
lexicón/pronunciación custom para palabras que no están en su
diccionario por defecto o que se pronuncian distinto al estándar — sirve
justo para lunfardo/voseo cuando llegue el momento de generar audio acá.

---

## Totales

| Idioma | Temas | Objetivo |
|---|---|---|
| Inglés | 49 | C1 |
| Alemán | 45 | C1 |
| Japonés | 45 | JLPT N1 |
| Hindi | 47 | C1 |
| Árabe | 47 | C1 |
| Francés | 44 | C1 |
| Ruso | 46 | ТРКИ-3 |
| Chino | 35 | HSK 5-6 |
| Italiano | 37 | C1 |
| Coreano | 34 | TOPIK II |
| Portugués BR | 33 | C1 |
| Portugués PT | 33 | C1 |
| Esperanto | 25 | C1 |
| **TOTAL** | **520** | 13 idiomas (sin contar es-AR, pendiente) |

**Árabe/Ruso/Hindi agregados 2026-09-07** — planificación de temas recién
armada (currículum arriba). Antes de esta fecha sólo existían a nivel de
interfaz (selector de idioma), sin currículum ni contenido — confirmado
con Javier, no es que se haya perdido nada con la falla de disco.
**No generar nada de estos 3 todavía**, mismo criterio "NO generar hasta
confirmar" del resto del documento.

### Conflicto a resolver antes de generar: numeración de logros

`troncos.md` (sección "Logros: diseño unificado") ya reservó ids
**41-51 para Idiomas (10 certificaciones + 1 meta)** y **52+ para
examen-jefe** (hoy 165 clusters). Agregar 3 idiomas más rompe ese rango
cerrado — hacen falta ids nuevos para 3 certificaciones más (y el logro
"meta" pasa de "completar los 10" a "completar los 13"), pero 52+ ya
está tomado por examen-jefe. **Pendiente de decidir con Javier**: ¿se
corre el rango de examen-jefe (52+ → 55+) para insertar 52-54 en
Idiomas, o los 3 nuevos van al final después de todo examen-jefe (ids
más altos, fuera de la tabla original)? No es una decisión de contenido,
es de numeración — no bloquea escribir el currículum, sólo bloquea
generar los `logros-idiomas.ar/ru/hi.json` finales.

## Examen de certificación como logro (pendiente de diseño, NO bloquea el resto)

Además de los `cuestionario.md` normales por tema (20-40 preguntas, límite
de todo el proyecto), Javier planteó un segundo producto: un examen de
certificación tipo First Certificate/DELF/Goethe-Zertifikat/etc., mucho
más largo (excepción explícita al límite: **hasta 500 preguntas, separadas
por tipo/sección** — Reading, Use of English, Listening, Writing, según
el formato real del examen que corresponda a cada idioma), que se
"esconde" como **logro a desbloquear** al alcanzar el nivel B2 (o el hito
equivalente) en ese idioma — no aparece como un tema más del árbol de
prerrequisitos.

**No implementado todavía.** No existe ningún sistema de logros/achievements
en el schema de Prisma — hay que diseñar dónde vive un cuestionario de
esa escala, cómo se dispara el desbloqueo al llegar a B2, y cómo se
referencia sin ensuciar el árbol de temas normal. Se retoma después de
cerrar la generación de contenido por tema de los 10 idiomas; no bloquea
nada de lo que ya está en marcha.

**Diseño de logro corregido 2026-08-14** (ver `troncos.md`, sección
"Logros: diseño unificado", justo después de la tabla de Profesiones):
mismo registro plano numerado + booleano de desbloqueo por usuario que
ya usan Oficios/Profesiones, compatible con el `Logro { id, obtenido:
boolean }` que ya existe en `Perfil.tsx`. Ids reservados **41-51** (10
certificaciones por idioma + 1 meta por completar los 10) — no una
estructura nueva para idiomas en particular.

**Nota técnica para cuando se diseñe**: no hace falta escribir 500 bloques
únicos a mano — es el mismo patrón que VBLang ya usa en el resto del
proyecto (`variables:`/`uno_de([...])`/tablas de `datos:`). Pocas
plantillas paramétricas combinadas con un dataset (vocabulario, pares
pregunta-respuesta, banco de frases por sección) generan cientos de
instancias válidas por combinación, en vez de contenido estático
repetido uno por uno.

**Especificación confirmada (2026-08-09)**: certifica **C1** (techo ya
planificado — C2 NO existe en este plan, era errata). Formato: **pool de
500 preguntas por idioma**, separadas por tipo/sección real del examen
(Reading/Use of English/Listening/Writing/Speaking en inglés, y el
equivalente real por idioma — DELF/DALF, Goethe-Zertifikat, DELE, JLPT,
TOPIK, HSK, etc.); **cada intento sortea 100 de esas 500**, respetando
la proporción por sección. Logros a diseñar junto con esto: uno por
idioma (al aprobar su examen) y uno meta por completar los 10.

**Sin `teoria.md`** — el pool de 500 es sólo cuestionario, un idioma =
un pool = 500 preguntas. El módulo de evaluación de la plataforma no
empareja teoría como los temas normales, así que no aplica generarla acá.
Alcance total confirmado: **371 temas** (teoria+cuestionario, Tronco 18
sin contar es-AR todavía) **+ 10 pools de 500** (sólo cuestionario, uno
por idioma, para el examen de certificación C1).

**Modo "prueba jefe" opcional + gamificación con la economía existente
(2026-08-09)**: el pool de 500 no es sólo el gate final — también sirve
como **placement test** opcional (alguien que ya sabe el idioma puede
saltar directo al nivel que corresponda en vez de arrancar desde A1).
Es exclusivo de idiomas — para oficios NO aplica (ya se decidió que el
sistema no certifica profesionalmente, un tier "Platino" ahí sonaría a
habilitación real).

**Tiers de logro por nota**: Común 60-79%, Dorado 80-94%, Platino
95-100%. **Monedas ganadas = respuestas correctas × multiplicador de
tier** (Común ×1.0, Dorado ×1.2, Platino ×1.5). No hace falta
infraestructura nueva — ya existe una economía real en el schema
(`SaldoUsuario`/`EconomiaSaldo`, `LedgerMovimiento`/
`EconomiaTransaccion`, y `EconomiaRecompensa` como catálogo de
recompensas por `referenciaId`) — el examen se conecta ahí como una
fuente más de recompensa, no un sistema aparte.

## Falta cablear audio/imagen en preguntas VBLang (no en Módulos)

Imágenes en preguntas VBLang ya están completas: DSL (`visual: { kind:
"static-image" }`) + editor con upload real (`VisualField.tsx` →
`/api/media/upload`). Nada que hacer ahí.

Audio en preguntas VBLang (para listening embebido en una pregunta, no
sólo el bloque Audio de Módulos que ya existe): el backend YA soporta
subir audio de punta a punta (`api/src/routes/media.ts`, `MediaKind:
"audio"`, mp3/wav/ogg/m4a/aac, 20MB máx — documentado como WO-12).
Falta sólo:
1. Agregar `AudioSpec { kind: "audio", src }` a `VisualSpec`
   (`packages/vblang/src/types/visual.ts`, hoy tiene 6 variantes sin audio).
2. Un `uploadAudio` en `mediaApi.ts` (mismo endpoint, header
   `X-Media-Kind: audio`) + widget de carga en el editor, análogo al de
   imagen en `VisualField.tsx`.

Es un agregado chico (el trabajo pesado del backend ya está hecho), no
bloquea la generación de contenido — se resuelve cuando se llegue a
implementar Listening.

## Pendiente de confirmación con Javier

1. ¿La estructura de niveles y sub-temas por idioma está bien así, o
   hay algo puntual que corregir por idioma?
2. ¿Qué hacemos con el bloqueo de Listening (herramienta de audio con
   voces reales) — lo resolvemos ahora antes de generar, o generamos
   todo lo demás (grámatica/vocab/reading/writing/speaking) y dejamos
   los módulos `listening-*` pendientes hasta resolver la herramienta?
3. ¿Empezamos a generar por inglés (ya el más detallado) apenas
   confirmes, o esperamos a validar los 10 antes de generar cualquiera?
