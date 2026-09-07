# Plan de reparaciones del tronco principal

> Documento vivo, se va completando a medida que se revisa cada
> materia contra fuentes reales (bibliotecas agregadas 2026-08-12:
> `librosbibliotecadigitalcom15`, `biblioteca_san_pedro`, `CABA`, `NAP`
> en `tareas_pendientes/libros/`). Mismo criterio que
> `historia-profunda-huecos-PLANIFICACION.md` (ya cerrado y generado,
> 30/30 temas — ver ese doc para el precedente): **antes de proponer un
> nodo nuevo, verificar que no exista ya en `troncos.md` con otro
> nombre** (le pasó al primer intento de Historia, con 11 nodos que ya
> existían sin generar).

## Resumen ejecutivo (2026-08-13)

Total acumulado tras revisar `biblioteca_san_pedro`, `librosbibliotecadigitalcom15`,
`CABA` (parcial) y `NAP`: **~140 nodos nuevos identificados**, repartidos en
nodos "listos para generar" (grafo+fuente ya claros) y 6 sub-planes grandes
que necesitan una decisión de alcance antes de diseñarse (mismo tamaño que
la ronda de Historia profunda, 30 nodos).

### ✅ Aplicados a `troncos.md` (v2.9.6/v3.0, 2026-08-13) — falta sólo generar contenido

Los ~104 nodos de esta tabla ya están en el grafo mermaid de
`troncos.md` con prerrequisitos reales y su párrafo de changelog
correspondiente (ver `changelog.md`, parche v3.0). Lo que queda
pendiente por materia es exclusivamente **generación de contenido**
(teoría/cuestionario), no estructura de grafo.

> **✅ Auditoría 2026-09-07**: los ~104 nodos de esta tabla (excepto los
> 4 nodos de Economía-Gestión que dependen de una decisión de producto
> sin resolver) están generados y verificados carpeta por carpeta
> contra `content/material/`. ~15 con nombre de carpeta levemente
> distinto al de este documento (drift normal de autoría, anotado caso
> por caso en cada sección) — ninguno es un hueco real. 1 nodo
> (ácidos nucleicos) quedó en Biología en vez de Química. 1 materia
> completa (Educación Tecnológica) quedó dentro de Informática en vez
> de como materia propia. Ningún contenido perdido con la falla de
> disco del 2026-09-07 — a diferencia de Idiomas Extranjeros (Tronco
> 18), que si sufrió pérdida total de interfaz/currículum (ver memoria
> de Claude, sesión de esa fecha). Sí quedan genuinamente pendientes
> (no forman parte de los ~104): `como-se-calcula-el-ipc-argentina`
> (Economía) y los 4 nodos de "Salud y Adolescencia" (2 sensibles,
> requieren diseño cuidadoso antes de generar — ver esas secciones más
> abajo), más los sub-planes grandes que necesitan decisión de alcance
> (Arte, Filosofía, Lengua-Literatura, Derecho profundo, Economía-Gestión
> como Tronco nuevo).

| Materia | Nodos | Nota |
|---|---:|---|
| Geografía | 16 | ✅ **Generado y verificado 2026-09-07** (incluye `turismo-mundial`) |
| Lengua (sintaxis+comunicación) | 29 | ✅ **Generado y verificado 2026-09-07** |
| Historia Argentina | 8 | ✅ **Generado y verificado 2026-09-07** |
| Historia Mundial | 2 | ✅ **Generado y verificado 2026-09-07** |
| Cívica | 3 | ✅ **Generado y verificado 2026-09-07** |
| Economía-Gestión/SIC | 18 | ✅ **Generado y verificado 2026-09-07** — sigue pendiente sólo la decisión de producto (Tronco 13.a vs. Tronco nuevo), no bloquea nada ya escrito |
| Educación Física | 2-3 | ✅ **Generado y verificado 2026-09-07** (los 3, incluido el opcional) |
| Biología | 3 | ✅ **Generado y verificado 2026-09-07** |
| Física | 1 | ✅ **Generado y verificado 2026-09-07** |
| Física/Química | 6 | ✅ **5/6 generados y verificados 2026-09-07** — ácidos nucleicos quedó como `biologia/adn-gen-proteina`, no en Química (relocación, no hueco) |
| Matemática | 6 | ✅ **Generado y verificado 2026-09-07** |
| Derecho (chico) | 1 | ✅ **Generado y verificado 2026-09-07** |
| Antropología | 2 | ✅ **Generado y verificado 2026-09-07** |
| Educación Tecnológica | 3 | ✅ **Generado y verificado 2026-09-07** — quedó dentro de `informatica/`, no como materia nueva |
| Investigación | 3 | ✅ **Generado y verificado 2026-09-07** |
| Filosofía (chico) | 1 | ✅ **Generado y verificado 2026-09-07** |
| **Total listos** | **~104** | |

### Sensible — requiere diseño cuidadoso, no generar en piloto automático

| Nodo | Cuidado |
|---|---|
| `trastornos-alimentarios` | Enfocar señales de alerta/ayuda, nunca métodos |
| `prevencion-del-suicidio` | Guías de mensaje seguro OMS, línea 135, nunca detalles de método |

### Sub-planes grandes — necesitan decisión de alcance antes de diseñarse

Mismo tratamiento que recibió Historia profunda (30 nodos): confirmados,
bien sourceados, pero demasiado grandes para diseñar de pasada.

| Sub-plan | Tamaño estimado | Fuente principal | Pregunta abierta |
|---|---:|---|---|
| **Arte — Historia del Arte** | 13 nodos | Manual U. Extremadura, Gutiérrez Viñuales (arte argentino) | ¿"Arte" incluye su historia, o va aparte? |
| **Filosofía — Historia de la Filosofía** (`FI7`) | ~12 nodos (filósofo por filósofo) | Carpio, *Principios de Filosofía* (fuente definitiva) | Ninguna, sólo falta tiempo de diseño |
| **Lengua — Literatura Arg./Latam.** | 6 nodos | *Literatura argentina y latinoamericana 5* (Santillana) | ¿Entra en Lengua o es materia aparte ("Literatura")? |
| **Derecho — profundidad laboral/comercial** | ~15-20 nodos | Zajac + Apolinar García (tratado de 25 capítulos) | El más grande de todos — ¿vale la pena a este nivel de detalle para secundaria? |
| **Orientación Vocacional** | Materia completa (9 "claves") | Soria (UBA/DOE) + Rascovan (Min. Educación) | Ya estaba planificada en memoria del proyecto, nunca implementada |

### Pendiente de decisión de producto (no son huecos de contenido)

- `turismo-mundial` (Geografía) vs. `material/turismo/` (oficio Guía Turístico) — resolver antes de generar ese nodo puntual.
- Diccionarios de lenguas indígenas (Quechua/Mapudungún/Aymara/Rapa Nui) — categoría de contenido nueva, no track C1 de idioma extranjero.
- Mitos y leyendas de pueblos originarios — nodo chico, baja prioridad.
- Separar `AH10` ("Golpes de Estado") en golpes específicos — baja prioridad.
- Ordoliberalismo/Friedman ya resueltos con fuente (Röpke, Friedman) — falta sólo diseñar `E28g`/`E28h` con esas fuentes cuando se generen.

### Pendiente de revisar todavía

Matemática (556MB), Arte y cultura (443MB), Educación Física (171MB),
Inglés (confirmado bajo valor), Orientación Vocacional (32MB) de
`biblioteca_san_pedro`; 7 subcarpetas de `CABA` nunca abiertas.

---

## Cerrado

### Historia profunda (2026-08-12) — ✅ 30/30 generados
Ver `historia-profunda-huecos-PLANIFICACION.md`. Antigüedad (11 nodos
ya existentes en el grafo, nunca generados), Edad Media (Bizancio/Islam,
genuinamente ausentes), Modernidad temprana, Guerras Mundiales
separadas, 3 regiones ausentes (África/Medio Oriente/Asia-Pacífico).
Validado independientemente por NAP 7° año 2011 (confirma exactamente
Bizancio/Islam/feudalismo como contenido oficial esperado a esa edad).

## Cerrado — Geografía (✅ verificado 2026-09-07, 16/16 generados)

> Los 16 nodos de abajo (5 Argentina + 11 Mundial, incluido el
> mini-cluster América Latina/Anglosajona expandido a 4) tienen carpeta
> real en `material/geografia/` y fila en `dependencias.md`. 4 con
> nombre levemente distinto al de este plan (drift normal de autoría,
> no huecos): `indicadores-sociales-argentina` → carpeta real
> `indicadores-sociales-de-argentina`; `migraciones-en-argentina` →
> `migraciones-internas-en-argentina`;
> `america-latina-formacion-de-la-poblacion` → `america-latina-formacion-poblacion`;
> `america-anglosajona-poblamiento-y-territorio` → `america-anglosajona`.
> `turismo-mundial` también generado (la duda de solapamiento con
> `material/turismo/` se resolvió generando ambos, ángulos distintos).

Nuestros 21 temas actuales (`material/geografia/`, nodos `G1-G12`,
`AM1`, `AM5a-d` en `troncos.md` Tronco 6) son **puramente
herramienta/concepto**: orientación, mapas, escalas, coordenadas, SIG
(mapas digitales/GPS/imágenes satelitales), división política,
relieve-clima-biomas genérico, recursos económicos genérico,
población genérica, corrientes de pensamiento ambiental. **Cero
contenido regional o temático específico** — confirmado contra 2
fuentes reales (`biblioteca_san_pedro/Geografía Argentina/`,
`biblioteca_san_pedro/Geografía Mundial/`).

### Bloque Argentina (5 nodos nuevos, cuelgan de `G6`/`G7`/`G8`)
Fuente: *La Argentina. Geografía económica y humana* (Isidro/Carlevari,
587 pág., univ.).
1. `regiones-naturales-de-argentina` (NOA, NEA, Cuyo, Pampeana,
   Patagonia)
2. `riesgos-naturales-argentinos` (tornados, granizo, inundaciones,
   sequías — consecuencias sociales y respuesta del Estado)
3. `indicadores-sociales-argentina` (NBI — necesidades básicas
   insatisfechas —, pobreza, hacinamiento, déficit habitacional)
4. `migraciones-en-argentina` (tipos: golondrina, fronteriza, interna
   — **distinto** del ángulo histórico-económico que ya cubre
   `modelo-agroexportador-inmigracion` en Historia profunda, acá es
   el patrón geográfico/demográfico, no el modelo de país)
5. `geografia-economica-agricola-argentina` (regiones productoras,
   cereales, yerba mate, tabaco, frutícola)
5b. `mineria-e-hidrocarburos-argentina` (confirmado 2026-08-12 vía
    `geografía santillana argentina.pdf` — "La encrucijada del
    petróleo", cuencas y provincias petroleras — y `Ciencias Sociales
    ES.3` DGCyE 2007, oficial — yacimientos de oro/cobre/hierro/
    carbón. Distinto del ángulo agro de `geografia-economica-agricola-
    argentina` y del `petroleo-como-recurso-energetico` de Física/
    Química — acá es específicamente territorial argentino: qué
    provincia produce qué)

### Bloque Mundial (8 nodos nuevos, cuelgan de `G7`/`G8`)
Fuente: *Geografía Mundial y los desafíos del Siglo XXI* (Santillana,
Serie Perspectivas).
6. `estados-y-globalizacion` (geopolítica, soberanía, un mundo de
   Estados)
7. `migraciones-internacionales` (fenómeno mundial — distinto del
   nodo 4, que es específico Argentina)
8. `trabajo-y-desempleo-mundial`
9. `geografia-industrial-mundial` (dispersión geográfica, deslocalización
   de empresas, áreas industriales)
10. `produccion-agraria-mundial-y-biotecnologia`
11. `turismo-mundial` — **⚠️ riesgo de solapamiento** con
    `material/turismo/` (4 temas ya generados para el oficio Guía
    Turístico: circuitos, planificación de destino, comunicación,
    patrimonio). Ángulo distinto (acá es el fenómeno geográfico-
    económico mundial: flujos turísticos, impacto económico/ambiental;
    allá es la práctica profesional de guiar) pero **revisar con
    cuidado antes de generar** para no duplicar contenido.
12. `recursos-hidricos-y-gestion`
13. `riesgos-ambientales-mundiales` (sequías, huracanes, inundaciones
    — versión mundial de `riesgos-naturales-argentinos`)
14. **`america-latina-y-anglosajona`, expandido a mini-cluster
    2026-08-13** vía Gambuzzi/López, *Una geografía de América para
    pensar* (Kapelusz-Norma, real, 321pp — confirma y multiplica el
    hallazgo original de `Santillana - Conocer - Espacios Geográficos
    de América`). Demasiado sustancial para 1 nodo — el libro entero
    está organizado en 4 bloques reales:
    - `america-latina-formacion-de-la-poblacion` (herencia de la
      conquista, inmigraciones transatlánticas, estructura
      demográfica latinoamericana)
    - `america-latina-industria-y-energia` (espacios industriales,
      petróleo en América Latina, energías alternativas)
    - `paises-de-america-latina` (México, América Central, Caribe,
      Paraguay — casos nacionales concretos, distinto de la Argentina
      que ya cubrimos aparte)
    - `america-anglosajona-poblamiento-y-territorio` (conquista y
      expansión del Lejano Oeste, metrópolis y megalópolis, riesgos
      naturales: terremotos/tsunamis/tornados/huracanes)
15. `indice-de-desarrollo-humano` (IDH — concepto muy estándar de
    medición de pobreza/calidad de vida, usado en Geografía/Economía/
    Cívica, 0 resultados en grep — sorprendentemente ausente)

**Total Geografía: 16 nodos nuevos.** Ninguno pisa nodos existentes en
`troncos.md` (verificado: `G1-G12`/`AM1`/`AM5a-d` son sólo herramienta/
concepto, no tocan contenido regional).

**Pendiente antes de generar**: agregar los 13 nodos al grafo mermaid
del Tronco 6 con prerrequisitos reales (probablemente todos cuelgan de
`G6`/`G7`/`G8` según corresponda), y resolver el punto de `turismo-mundial`.

## Cerrado — Lengua (✅ verificado 2026-09-07, 29/29 generados)

> Los 29 nodos de abajo (7 comunicación/pragmática + 19 sintaxis + 3
> técnicas de estudio/género teatral) tienen carpeta real en
> `material/lengua/` y fila en `dependencias.md`, sin excepciones.

### Bloque comunicación/pragmática (7 nodos, fuente: "Prácticas del
Lenguaje 1" Ed. Estrada, colección Huellas, vía OCR)
Cuelgan de `P1`/`P2`/`P9`/`P10`/`P14` (Tronco 6/5).
1. `circuito-de-la-comunicacion` (emisor/receptor/mensaje/código/
   canal/referente)
2. `variedades-de-la-lengua` (registros + lectos: dialecto/sociolecto/
   cronolecto/idiolecto)
3. `discurso-referido` (estilo directo vs. indirecto)
4. `generos-discursivos` (primarios vs. secundarios)
5. `paratextos`
6. `subjetivemas-y-modalizadores`
7. `generos-periodisticos` (noticia y crónica como tipos textuales
   propios, hoy sólo `tipos-textuales` genérico)

### Bloque sintaxis (¡grande!, fuente: "Sintaxis.pdf" — manual de 125
páginas, **mal categorizado** en la carpeta "Nivel inicial" de
`biblioteca_san_pedro` cuando en realidad es contenido de secundaria/
nivel universitario básico — ver nota abajo sobre confiabilidad de esa
carpeta)

Hoy `oracion-compuesta-coordinacion-y-subordinacion` es **un solo
tema** aplastando ~18 conceptos reales — mismo anti-patrón que se
corrigió en oficios al principio de la sesión, acá en Lengua. Cuelga
de `P8` (Oración compuesta: coordinación y subordinación).

**Coordinación** (4 nodos, reemplazan la mitad del tema actual):
8. `coordinadas-copulativas`
9. `coordinadas-distributivas`
10. `coordinadas-disyuntivas`
11. `coordinadas-adversativas`

**Subordinación sustantiva** (6 nodos):
12. `subordinada-sustantiva-de-sujeto`
13. `subordinada-sustantiva-de-complemento-directo`
14. `subordinada-sustantiva-de-complemento-de-regimen`
15. `subordinada-sustantiva-de-complemento-circunstancial`
16. `subordinada-sustantiva-de-complemento-del-nombre`
17. `subordinada-sustantiva-de-complemento-de-un-adjetivo`

**Subordinación adjetiva y adverbial** (8 nodos):
18. `subordinada-adjetiva-o-de-relativo`
19. `subordinada-adverbial-de-tiempo`
20. `subordinada-adverbial-de-lugar`
21. `subordinada-adverbial-de-modo`
22. `subordinada-causal`
23. `subordinada-consecutiva`
24. `subordinada-condicional`
25. `subordinada-concesiva-y-final` (concesivas y finales, agrupadas
    por ser las de menor peso relativo — revisar si conviene separar)

**Sintagmas como estructura formal** (1 nodo, complementa
`nucleos-y-modificadores` que ya existe con enfoque más informal):
26. `sintagmas-nominal-adjetivo-preposicional-adverbial-verbal`

**Total Lengua: 26 nodos nuevos** (7 comunicación/pragmática + 19
sintaxis). El bloque de sintaxis es más grande que Geografía completa
— vale la pena tratarlo como su propio sub-plan antes de generar.

### Bloque técnicas de estudio + género teatral (3 nodos nuevos,
confirmado 2026-08-12 vía `Prácticas del lenguaje 5.pdf`, Nivel
inicial/quinto grado — libro real, currículum argentino)
27. `tecnicas-de-estudio-resumen-y-organizadores-graficos` (resumen,
    cuadro de doble entrada/comparativo, red conceptual — hoy sin
    nodo propio; `paratextos` ya estaba en la lista de arriba, este es
    el resto del bloque de técnicas de estudio del mismo capítulo)
28. `texto-teatral` (género aparte de `tipos-textuales`: parlamentos,
    acotaciones, dramaturgo — no está cubierto por ningún nodo
    existente)
29. `tipos-de-sujeto` (bimembre/unimembre, tácito/expreso — hoy
    `Sujeto y predicado` (`P5`) es un solo nodo genérico que no baja a
    este nivel)

**Total Lengua actualizado: 29 nodos nuevos.**

### ⚠️ Nota sobre la carpeta "Nivel inicial" de `biblioteca_san_pedro`
Confirmado por Javier: la carpeta está mal etiquetada — dice "nivel
inicial" (preescolar) pero contiene mezclado material de 6° grado y,
como en este caso, de secundaria/nivel universitario básico. **No se
puede descartar en bloque** (como se había decidido antes) ni asumir
por el nombre de la carpeta — hay que revisar archivo por archivo por
su contenido real, no por dónde está guardado.

## Cerrado — Historia Argentina (Rosas/economías regionales) (✅ verificado 2026-09-07, 2/2 — parte de los 8 totales del resumen ejecutivo)

Confirmado 2026-08-12 vía `Ciencias Sociales 5 Bonaerense` (Estación
Mandioca, 2019 — currículum real, provincia de Buenos Aires):
`historia-profunda/guerras-civiles-unitarios-federales` (`AH6`) es un
único nodo genérico sobre el conflicto unitarios/federales que sólo
menciona a Rosas de pasada ("conflictos con Rosas en la década de
1840"), sin desarrollar su gobernación, la Confederación, ni las
economías regionales tempranas. Grep en todo `material/historia-profunda/`
confirma: "Rosas"/"Caseros"/"Urquiza" no aparecen en ningún
teoria.md/cuestionario.md dedicado — sólo pasadas menciones en otros
temas. Candidato: 1-2 nodos nuevos entre `AH6` y `AH7`
(`rosas-y-la-confederacion` — suma del poder público, Vuelta de
Obligado, bloqueos anglo-francés, batalla de Caseros;
`economias-regionales-tempranas` — auge de Buenos Aires post-
independencia, Ley de Aduanas, economías del Litoral). Mismo patrón
que Lengua: un nodo lumped tapando conceptos reales con nombre propio.
Pendiente de decisión de alcance antes de sumar a `troncos.md`.

## Cerrado (contenido) — Economía/Administración/Contabilidad (biblioteca "Economía-Gestión, Proyecto, Teoría Organizacional, SIC")

> ✅ Verificado 2026-09-07: los 18 nodos de abajo (A-D, incluidos `9b`/`9c`
> agregados después del recuento original) tienen carpeta
> real en `material/economia/` y fila en `dependencias.md`. 1 con
> nombre levemente distinto: `ambiente-interno-y-externo-de-la-organizacion`
> → carpeta real `ambiente-interno-y-externo-organizacion` (sin
> "-de-la-"). **La generación de contenido está resuelta — lo que
> sigue pendiente es sólo la decisión de producto** marcada más abajo
> ("Pendiente de decidir": si esto cuelga de Tronco 13.a o es un
> Tronco nuevo propio), que no bloquea nada ya generado.

Confirmado 2026-08-12 vía ~15 libros reales (algunos universitarios,
otros de bachillerato técnico argentino: Eggers, Angrisani, MAIPUE,
Gallardo, Apol García, Casani/Llorente/Pérez, Cameron & Neal). Nuestro
Tronco 13.a (`ADM1-11`) sólo cubre la **práctica** de gestionar con
plata (presupuesto, márgenes, punto de equilibrio) — nunca la
**teoría** de qué es una organización, ni contabilidad formal más
allá de partida doble, ni economía como materia con división
micro/macro explícita. Grep confirma 0 resultados en `troncos.md`
para todos los términos de abajo. Cuatro sub-ramas, cada una un tema
de escuela técnica real:

### A. Teoría de las Organizaciones (nueva rama, hermana de `ADM1`)
Fuente: Eggers (Maximiliano), MICROEMPRENDIMIENTOS, MAIPUE, SIC1/2
(las 4 comparten casi la misma introducción estándar — señal de que
es contenido curricular fijo, no idiosincrasia de un autor). Sumado
2026-08-13 desde `librosbibliotecadigitalcom15/organizaciones/`:
Fainstein (avanzado, ya visto antes) + *Introducción a la Gestión y
Administración en las Organizaciones* (Marcó/Loguzzo/Fedi, UNAJ 2016,
real y oficial, 2 partes × 4 capítulos) — confirman el hallazgo, no
agregan nodos nuevos, buena fuente para cuando se generen.
1. `tipos-de-organizaciones` (empresa, ONG, administración pública,
   club — distinto de `ADM11` que ya cubre cooperativismo/mutualismo
   específicamente por mandato legal; este es el árbol general del
   que `ADM11` es una rama)
2. `elementos-de-las-organizaciones` (recursos humanos, materiales,
   naturales y energéticos, conocimiento)
3. `cultura-organizacional` (símbolos, prestigio — hoy ausente pese a
   que es de las nociones más citadas en gestión moderna)
4. `ambiente-interno-y-externo-de-la-organizacion` (contexto)
5. `estructura-organizacional` (organigrama, división operativa vs.
   administrativa)

### B. Sistemas de Información Contable (extiende `E20B-D`, que hoy
sólo tiene partida doble/libro diario-mayor/estados contables sin la
base que los precede)
Fuente: Angrisani, MAIPUE, SIC1/2, Educación a Distancia SIC.
6. `estructura-del-patrimonio` (activo/pasivo/patrimonio neto —
   prerrequisito real de `E20B`, hoy `E20B` arranca in-media-res)
7. `ecuacion-contable-fundamental` (activo = pasivo + capital +
   ganancias − pérdidas)
8. `tipos-de-sociedades` (unipersonal, S.R.L., S.A., cooperativa —
   formas jurídicas de empresa, distinto del derecho societario)
9. `contabilidad-como-sistema-de-informacion` (subsistemas, ciclo
   operativo: empresa comercial vs. industrial)
9b. `indices-financieros` (confirmado 2026-08-13 vía *Sistemas de
    Información Contable 2* — liquidez, rotación de cuentas a cobrar/
    pagar/mercaderías, rentabilidad económica/financiera, efecto
    palanca — análisis financiero estándar, 0 resultados en grep)
9c. `contabilidad-ambiental` (mismo libro, capítulo propio, tema
    moderno/emergente, 0 resultados)

### C. Proyectos Organizacionales (extiende el meta-tronco genérico
`GP1-5`, que ya existe pero es agnóstico de organización)
Fuente: Gallardo, Apol García.
10. `vision-y-mision-organizacional`
11. `estudio-de-contexto-para-un-proyecto` (local/regional)
12. `tipos-de-proyecto` (social vs. productivo)

### D. Economía formal como materia (distinta de la Economía =
finanzas personales de `E1-E37`, Tronco 1)
Fuente: Eggers (Francisco), Casani/Llorente/Pérez.
13. `division-formal-microeconomia-macroeconomia` (hoy sólo existe
    de forma implícita, nunca como concepto propio)
14. `costo-de-oportunidad` (0 resultados en grep — sorprendente,
    dado que es de los conceptos más básicos de cualquier curso)
15. `sectores-economicos` (primario/industrial/servicios/cuaternario)
16. `economia-positiva-y-normativa`

**Total: 18 nodos nuevos** (16 del recuento original A-D + `9b`/`9c`
agregados 2026-08-13, ver arriba — total corregido 2026-09-07 para
coincidir con el resumen ejecutivo). Deliberadamente dejé afuera Nicholson
(microeconomía universitaria pura: teoría del consumidor, estructuras
de mercado formales) y Cameron & Neal (historia económica de cátedra)
— ambos de nivel más alto que lo que se enseña hoy en la materia
equivalente de escuela técnica; candidatos a nivel "avanzado" si en
algún momento se quiere una capa extra, no urgentes.

**Pendiente de decidir**: si esto se cuelga todo de Tronco 13.a
(Administración) como sub-secciones nuevas, o si Teoría de las
Organizaciones + SIC + Proyectos Organizacionales merecen su propio
Tronco nuevo (son 3 materias con nombre propio en escuelas técnicas
con orientación en Economía y Gestión de las Organizaciones,
distintas de "Administración" a secas). Fuentes con precaución
(no usar sin filtrar): `economia-politica.pdf` (sesgado en parte,
según Javier) y `ecopolitica...Jungle.pdf` (postura política
desconocida) — sirven para triangular, no para citar directo.

## Hallazgo grande — Arte: Historia del Arte no existe (0 nodos)

Confirmado 2026-08-12 vía `biblioteca_san_pedro/arte y cultura/` (los
videos que ya había revisado Javier no aportaban, pero los PDFs sí):
los 13 temas de `material/arte/` (composición, ritmo, teatro, música,
diseño, narrativa audiovisual) son **todo técnica/lenguaje del arte**,
nunca su historia. Grep de Renacimiento/Barroco/Impresionismo/
Vanguardias/artistas en `troncos.md` da 0 resultados — mismo vacío que
tenía Historia profunda antes de la ronda de 30 nodos, pero acá nunca
hubo ni un primer intento.

Fuentes reales: `Historia del arte.pdf` (manual universitario, 200pp,
Univ. de Extremadura), `Síntesis histórica del arte en Argentina.pdf`
(Rodrigo Gutiérrez Viñuales, académico, 246pp, 1776-1930, con
artistas y movimientos concretos), `ARTE UNIDAD I RENACIMIENTO.pdf`,
`Vanguardias(apunte).pdf`. Más monografías puntuales (Lola Mora,
Molina Campos, Quinquela Martín, Frida Kahlo) — de menor prioridad
como nodo propio, mejor como ejemplo dentro de un nodo de período.

### Propuesta de spine (nivel período/movimiento, sin bajar a
artista-por-artista — mismo criterio de granularidad que Historia
profunda)

**Historia del arte general** (cuelga de `H12`/`AR2` "Origen del
arte", que ya existe):
1. `arte-antiguo-egipto-y-mesopotamia` (podría reusar contexto de
   `antiguo-egipto`/`mesopotamia` en Historia profunda en vez de
   duplicar — ángulo distinto: obra y técnica, no política/economía)
2. `arte-clasico-grecia-y-roma`
3. `arte-medieval-romanico-y-gotico`
4. `renacimiento-y-manierismo` (¡ojo! no confundir con
   `renacimiento-y-reforma` de Historia profunda — ese es política/
   religión, este es pintura/escultura/arquitectura)
5. `barroco`
6. `neoclasicismo-y-romanticismo`
7. `impresionismo-y-postimpresionismo`
8. `vanguardias-del-siglo-xx` (cubismo, expresionismo, surrealismo —
   agrupados; separar si se quiere más detalle)
9. `arte-contemporaneo`

**Arte argentino** (rama propia, cuelga de `AH8`/`AH-línea` en
paralelo a la historia política):
10. `arte-colonial-y-de-la-independencia-argentina`
11. `generacion-del-80-y-bellas-artes-argentina` (Sociedad Estímulo
    de Bellas Artes, El Ateneo)
12. `modernismo-y-pintores-argentinos` (Fader, Quirós, Della Valle,
    Quinquela Martín — ejemplos concretos dentro del nodo)
13. `vanguardias-argentinas-siglo-xx` (Lola Mora, Molina Campos como
    ejemplos)

**Total: 13 nodos candidatos.** Es una rama grande (comparable a
Geografía) — antes de tocar `troncos.md` conviene que confirmes si
la escuela realmente separa "Historia del Arte" como su propia
materia (como en la mayoría de bachilleratos con orientación Arte) o
si en la plataforma esto entra dentro de "Arte" a secas ampliándolo.

## Cerrado — Educación Física: Juegos Olímpicos + El Pato (✅ verificado 2026-09-07, 3/3; `juegos-olimpicos-historia`→`juegos-olimpicos`, `el-pato-deporte-nacional-argentino`→`el-pato`, ambos sin el sufijo largo)

Confirmado 2026-08-12: la carpeta tiene el mismo patrón que Arte
(varios videos que Javier ya revisó sin nada útil + PDFs reales que
sí aportan). A diferencia de Arte, acá **no es una pared** — el
tronco `ed-fisica/` ya es sólido (13 temas: fisiología, planificación,
FC, IMC, prevención, primeros auxilios, adicciones, deportes
genéricos) — sólo 3 huecos puntuales:

1. `juegos-olimpicos-historia` (`BREVE-HISTORIA-DE-LOS-JUEGOS-OLMPICOS.pdf`,
   real: Grecia antigua 776 a.C. → supresión por Teodosio I → Coubertin
   y el renacimiento moderno en 1896). Hoy `deportes-origen-historico`
   (`EF8`) sólo cubre quién inventó cada deporte (fútbol/básquet/vóley/
   handball/tenis), nunca la institución olímpica en sí — genuinamente
   ausente, grep confirma 0 resultados de "juegos olímpicos" en todo
   `troncos.md`.
2. `el-pato-deporte-nacional-argentino` — dato real y concreto: el pato
   es el deporte nacional argentino por decreto desde 1953, con origen
   documentado en crónicas de 1610. Nodo chico, buen fit con el patrón
   ya establecido del proyecto de sumar siempre el ángulo argentino
   específico.
3. `deporte-como-fenomeno-cultural-argentino` (opcional, menor
   prioridad) — `El deporte en Argentina 1914-1983.pdf` (Archetti,
   Universidad de Oslo, académico real) y `futbol_cultura_y_sociedad.pdf`
   (seminario GCBA/UBA) dan buen material sobre el deporte como
   construcción de identidad nacional — distinto ángulo del histórico-
   fáctico de arriba, más sociológico. Se puede omitir sin culpa si no
   se quiere abrir ese ángulo.

El resto de la carpeta (balonmano, baloncesto, jabalina, personal
trainer científico) son manuales técnicos que ya caen dentro de los
nodos genéricos existentes (`deportes-medidas-cancha-superficies`,
`deportes-jugadores-posiciones-puntaje`, `fisiologia-del-ejercicio`) —
no piden nodo nuevo.

## Cerrado — Historia Argentina, segundo tramo (Guerra del Paraguay / Conquista del Desierto) (✅ verificado 2026-09-07, 4/4 — completa los 8 del resumen ejecutivo junto con el tramo de arriba)

Confirmado 2026-08-12 vía `ACTIVA 6.pdf` (Ciencias Sociales 6
Bonaerense, real, currículum actual): dos hechos centrales y siempre
enseñados de la historia argentina post-1853 no tienen nodo propio en
`troncos.md` ni mención en ningún `material/historia-profunda/*/`:
**Guerra del Paraguay / Triple Alianza** y **Conquista del Desierto**
(sólo aparecen de pasada dentro de `modelo-agroexportador-inmigracion`,
nunca desarrolladas). Además `AH10` ("Golpes de Estado e
interrupciones") es un nodo genérico que no distingue los golpes de
1930/1943/1955/1962/1966 — mismo patrón lumped ya visto varias veces.
Candidatos (colgarían de `AH7`/`AH8`, antes de `AH9`):
`guerra-del-paraguay`, `conquista-del-desierto-y-campaña-al-chaco`.
Menor prioridad para separar `AH10`: anotado, no urge.

**Fuente confirmada 2026-08-13** para `rosas-y-la-confederacion`/
`economias-regionales-tempranas` (arriba): `Historia Argentina
1806-1852.pdf` (444pp, académico, colección "Nueva Historia
Argentina" — Noemí Goldman, Jorge Gelman, Roberto Schmit), capítulo
III "Los orígenes del federalismo porteño" + capítulo IV "El comercio
y las finanzas públicas en los Estados provinciales" cubren
exactamente este hueco.

**2 nodos más confirmados** vía `Historia Argentina 1916-1930.pdf`
(académico, Ansaldi/Falcón/Persello/Palacio) e `Historia Argentina
1976-2013.pdf`:
- `reforma-universitaria-1918` (Manifiesto Liminar, autonomía y
  cogobierno — tema siempre enseñado, 0 resultados en grep, hoy sin
  desarrollo propio colgado de `AH9`)
- `crisis-de-2001` (De la Rúa, corralito, "que se vayan todos", los 5
  presidentes en 11 días — de los hechos más enseñados de historia
  reciente argentina, hoy `AH15` "Historia reciente" es un cajón
  genérico sin esto desarrollado)

## Cerrado (parcial) — Derecho: fuentes del derecho (✅ verificado 2026-09-07, `fuentes-del-derecho` generado) + oportunidad grande sin diseñar (sigue pendiente de decisión de alcance, no bloquea lo demás)

Confirmado 2026-08-13 vía Zajac, *Derecho 5: bases jurídicas de las
organizaciones* (real, profesional):

- `fuentes-del-derecho` (ley, costumbre, jurisprudencia, doctrina,
  equidad) — 0 resultados en grep, estándar de cualquier intro al
  derecho, siempre junto a `DER0` (ramas). Cuelga de `DER1`/`DER2`.
- **Oportunidad grande, sin diseñar todavía**: `derecho-laboral` y
  `derecho-comercial` (nuestros nodos actuales) son intros genéricas
  cortas, funcionando como fueron diseñadas (`DER0` es a propósito
  sólo panorama). Zajac trae mucha profundidad real hoy ausente:
  derecho laboral concreto (despido, preaviso, vacaciones y licencias,
  extinción del contrato), derecho comercial concreto (tipos de
  sociedades, cooperativas, y **fábricas y empresas recuperadas**
  post-crisis 2001 — fenómeno genuinamente argentino con estructura
  jurídica propia). Comparable en tamaño a la atomización pendiente
  de `FI7` — sub-plan propio, no diseñado acá todavía.

**Actualización 2026-08-13 — Javier pasó el índice completo de
"Derecho Apolinar García" (Alfaomega, real, tratado profesional
completo: 25 capítulos, 5 unidades)**. Confirma y multiplica la
"oportunidad grande" de arriba — mucho más grande de lo estimado.
Hallazgos limpios y autónomos (no sólo más profundidad de lo
existente, sino conceptos genuinamente nuevos, 0 resultados en grep):

- `propiedad-intelectual-marcas-patentes-derechos-de-autor` —
  confirma y expande mucho el hallazgo menor que ya estaba anotado
  desde NAP (antes sólo "licencias digitales"; acá: marcas, patentes,
  derechos de autor, piratería, el paquete completo).
- `derechos-del-consumidor` (Ley 24.240, asimetría de poder/
  información, obligaciones de proveedores) — muy cotidiano.
- `mobbing-y-acoso-laboral` — distinto de `violencia-de-genero`
  (ESI), es acoso laboral específico con marco legal propio.
- `presupuesto-publico-y-potestad-impositiva` (coparticipación
  federal, tipos de impuestos, deuda pública) — mucho más profundo
  que el `C14` genérico actual ("Impuestos: quién cobra qué").
- Confirma con mucho detalle real el `fabricas-y-empresas-recuperadas`
  ya anotado (capítulo propio en Apolinar García, con antecedentes de
  los 90 y estructura jurídica).

El resto del libro (contratos comerciales, cheques/pagarés/letra de
cambio, garantías, actividad agropecuaria, derecho ambiental,
personas jurídicas públicas) es la profundidad real de
`derecho-laboral`/`derecho-comercial` ya señalada arriba — confirma
que el sub-plan de Derecho es del tamaño de un tronco casi completo
en sí mismo. Pendiente de decisión de alcance con Javier antes de
diseñarlo entero.

## Cerrado — Antropología (✅ verificado 2026-09-07, 2/2 generados)

Confirmado 2026-08-13 vía materia real "Antropología" (GCBA, 2021).
Expande la cadena existente `ANTRO1a-c` (Cultura → Diversidad
cultural → Etnocentrismo, colgando de Hominización en Historia
profunda):
- `subcampos-de-la-antropologia` (física, arqueología, lingüística
  antropológica, social y cultural) — clasificación de la disciplina.
- `relaciones-de-parentesco` — sistemas de parentesco como categoría
  antropológica clásica.

*Introducción a la Antropología Biológica* (679pp) es tratado
universitario/posgrado (primatología, antropología forense, ADN) —
mismo nivel que Nicholson, demasiado avanzado, no se usa como fuente.

## Cerrado (con cambio de criterio) — Educación Tecnológica

> ✅ Verificado 2026-09-07: los 3 nodos de abajo están generados, pero
> **no como materia nueva** — quedaron dentro de `material/informatica/`
> (`que-es-la-tecnica-y-la-tecnologia`, `medios-tecnicos-extension-capacidades-humanas`
> —nombre sin "-como-", `procesos-tecnicos-artesanales-e-industriales`),
> sin materia "Educación Tecnológica" propia en `troncos.md`/`examen-jefe/`.
> Contenido no es un hueco; la decisión de producto de este hallazgo
> (crear materia nueva vs. no) terminó resuelta como "no", implícita —
> no hay registro explícito de por qué, marcar si hace falta revisar.

Confirmado 2026-08-13 vía `TECNOLOGIA 1 DE SANTILLANA` (real,
currículum NAP). "Educación Tecnológica" — distinta de Informática
(programación) y de Ingeniería (diseño de producto) — **no existe en
absoluto** en `material/`, ni un solo tema. Es el fundamento
conceptual que en teoría precede a esas dos: qué es la técnica
(distinta de la tecnología), la técnica como práctica sociocultural e
histórica, medios técnicos como extensión de capacidades humanas,
procesos técnicos artesanales vs. industriales. 0 resultados en grep.
Candidatos (3, chicos, no requieren sub-plan):
- `que-es-la-tecnica-y-la-tecnologia`
- `medios-tecnicos-como-extension-de-capacidades-humanas`
- `procesos-tecnicos-artesanales-e-industriales`

## Cerrado — Investigación: metodología cualitativa (✅ verificado 2026-09-07, 3/3 generados; `trabajo-de-campo-y-enfoque-socioantropologico` → carpeta real sin "-y-")

Confirmado 2026-08-13 vía *Proyectos de Investigación en Ciencias
Sociales 6to* (Maipue, real — materia de un programa antiguo, pero
como anota Javier, el contenido sigue siendo válido). El Tronco 12
(`INV1`-`INV9`) es puramente cuantitativo/experimental (hipótesis,
diseño experimental, análisis estadístico — modelo de ciencias
naturales). La metodología **cualitativa** es una rama completamente
distinta y ausente: enfoque socioantropológico, trabajo de campo,
registro de campo, "la perspectiva del actor", construcción del
objeto de estudio — 0 resultados en grep. Candidatos (cuelgan de
`INV1`, hermanos de `INV3` que es la rama cuantitativa):
- `metodologia-cualitativa-vs-cuantitativa` (cuándo usar cada una)
- `trabajo-de-campo-y-enfoque-socioantropologico` (observación
  participante, registro de campo, perspectiva del actor)
- `tecnicas-de-investigacion-social` (entrevista, encuesta, historia
  de vida)

## Cerrado — Física: aplicaciones médicas (✅ verificado 2026-09-07; carpeta real `fisica-medica`, sin "-aplicaciones")

Confirmado 2026-08-13 vía `Física contenidos nivel adultos.pdf` (real,
argentino, época Kirchner, educación de adultos). `fisica-medica-
aplicaciones` (rayos X, diagnóstico por imágenes PET, radioterapia) —
grep confirma que esto **ya está mencionado en el changelog de
`troncos.md`** (línea ~2331) como motivación real de `NUC1`-`NUC4`,
pero nunca se convirtió en nodo propio, quedó como frase de contexto.
Cuelga de `NUC4`/`FISM1`. Chico pero real — es la aplicación práctica
concreta que le falta a la física nuclear, que por lo demás ya es
sólida (73 temas). El resto de la carpeta son libros chilenos
("2º/3º/4º Medio", Ediciones SM/Zig-Zag) y uno mexicano (Telebachillerato
Comunitario) — no argentinos, revisados sólo de pasada, sin hallazgos
nuevos más allá de lo ya confirmado en la ronda anterior de Física/Química.

## Hallazgo — Economía: cómo se calcula el IPC (INDEC)

Confirmado 2026-08-13 vía `Qué es el Índice de Precios al Consumidor
— INDEC` (oficial, real, muy claro): `como-se-calcula-el-ipc-argentina`
— metodología real (canasta de bienes, Encuesta Nacional de Gastos de
los Hogares, relevamiento mensual de precios), distinto de `E27` (PBI
e inflación), que trata la inflación como número/concepto sin
explicar cómo se mide en la práctica argentina. 0 resultados en grep,
chico y de alto valor por lo central que es el IPC en la conversación
económica cotidiana del país. Cuelga de `E27`.

Samuelson (Macro) y Microeconomía Pearson confirman el mismo techo
"avanzado, no urgente" ya decidido con Nicholson — buenas fuentes
para `division-formal-microeconomia-macroeconomia` cuando se genere,
no revelan hueco nuevo.

## Hallazgo — Salud y Adolescencia (2 seguros, 2 sensibles)

Confirmado 2026-08-13 vía *Adolescencia y salud* (Maipue) y *Salud y
Adolescencia* (Mosso) — el tercero (Mandioca) está escaneado y se
solapa tanto con los otros dos (mismo patrón que ya notó Javier) que
no se forzó OCR. 4 nodos reales, 0 resultados en grep:

- `bullying-y-acoso-escolar` — seguro, generar directo.
- `discapacidad-y-educacion-inclusiva` (tipos, síndrome de Down,
  integración escolar) — seguro, con mandato legal (Ley 26.378).
- `trastornos-alimentarios` (anorexia/bulimia) — real e importante,
  **requiere diseño cuidadoso**: enfocar en señales de alerta y
  búsqueda de ayuda, nunca en detalles de métodos.
- `prevencion-del-suicidio` — el más sensible de los 4, real y
  recomendado por la OMS en salud escolar, pero **debe seguir las
  guías de mensaje seguro de la OMS** (señales de alerta y recursos
  de ayuda —línea 135 en Argentina—, nunca detalles de método). No
  generar sin ese cuidado específico.

**Descartado como fuente**: Maipue mete contenido psicoanalítico de
sexualidad (complejo de Edipo, zonas erógenas, masturbación) — no se
usa, mismo criterio ya establecido de que el ESI ya vetado del
proyecto es la única fuente de verdad para sexualidad.

**Confirma cruzado**: "espacios de participación juvenil"/aprendizaje-
servicio en Mosso refuerza el hallazgo de `proyecto-ciudadano-
participativo` ya logueado en Cívica.

## Cerrado — Matemática: Análisis Matemático nivel 2 (✅ verificado 2026-09-07, 6/6 generados)

Confirmado 2026-08-13 vía *Análisis 1* y *Análisis 2* (Polimodal,
Longseller, reales — Altman/Comparatore/Kurzrok). El árbol ya tiene el
esqueleto completo (`Límite → Continuidad → Derivada → Optimización →
Integral → Ecuaciones diferenciales`, `A12`-`A17`), pero le faltan las
técnicas específicas de nivel universitario-puente, todas 0 resultados
en grep: `asintotas` (horizontal/vertical/oblicua, cuelga de `A12`),
`teorema-de-bolzano` (cuelga de `A12B`), `concavidad-y-puntos-de-
inflexion` y `regla-de-lhopital` (cuelgan de `A13`), `tecnicas-de-
integracion` (sustitución/por partes/fracciones simples) e `integral-
definida-y-area-bajo-la-curva` (cuelgan de `A14`). Mismo tratamiento
"nivel 2" que ya se usó en Química — no rompen el diseño, son la
vuelta de tuerca que ya estaba prevista (el `A17` "Ecuaciones
diferenciales" no tendría sentido pedagógico sin `tecnicas-de-
integracion` antes). *Matemáticas 4 ES* (Estrada) confirmó cobertura
existente sin hallazgos nuevos.

## Cerrado — Cívica: teoría del poder + "Construcción de Ciudadanía" (✅ verificado 2026-09-07, 2/2; `poder-politico-y-teorias-del-poder` → carpeta real `teoria-del-poder`)

Confirmado 2026-08-13 vía 5 libros reales de "Construcción de
Ciudadanía" (Eggers-Brass/Maipue/Kapelusz, currículum de la provincia
de Buenos Aires):

1. `poder-politico-y-teorias-del-poder` — `Política y ciudadanía 5to`
   (Eggers-Brass, avanzado) trae teoría política propia: Aristóteles/
   polis/bien común, Locke/derechos naturales, Habermas/comunicación y
   entendimiento, pluralismo político. Distinto de `C6` (División de
   poderes = estructura de 3 poderes) — esto es teoría del poder en
   sí. 0 resultados en grep. **Reforzado 2026-08-13** vía De Luca,
   *Política y ciudadanía* (Santillana, real): agrega **tipos de
   Estado** (liberal, de bienestar, neoliberal, en tiempos de
   globalización) fundamentados en contractualismo y marxismo —
   conecta directo con las corrientes económicas ya atomizadas
   (`E28c` liberalismo → Estado liberal/neoliberal, `E28f`
   keynesianismo → Estado de bienestar). También trae una sección
   real de "El Estado argentino" (formación, período poscolonial,
   Estado liberal oligárquico, Estado social, reforma neoliberal) que
   da contexto para `AH7`-`AH10`.
2. `proyecto-ciudadano-participativo` — las 3 ediciones de
   "Construcción de Ciudadanía" (I/II/III) comparten el mismo
   Capítulo 1 con estructura idéntica: "Ser ciudadano" → "Del tema al
   problema" → "Desarrollo del proyecto" — es la metodología
   definitoria de la materia (detectar un problema comunitario, armar
   un proyecto, participar en Centros de Estudiantes/Consejos de
   Escuela — conecta con el hallazgo de Centro de Estudiantes ya
   anotado en Orientación Vocacional). No es el `GP1-5` genérico sino
   su instancia cívica específica, mismo patrón que Proyectos
   Organizacionales en Economía-Gestión. 0 resultados en grep.

## Cerrado — Biología: sistema nervioso + quimiosíntesis + Mal de Chagas (✅ verificado 2026-09-07, 3/3; `sistema-nervioso-neurona-y-sinapsis` → carpeta real sin "-y-")

Confirmado 2026-08-13 vía `Biología sec.pdf` y `Biologia IV - Díaz,
Martín.pdf` (avanzado, real):

- `sistema-nervioso-neurona-y-sinapsis` — 0 resultados en grep para
  "neurona"/"sistema nervioso"/"sinapsis" en todo `troncos.md`. De los
  sistemas del cuerpo más enseñados, sin nodo propio pese a que
  "Sistemas del cuerpo humano" existe como genérico. El hallazgo más
  significativo de esta ronda de Biología.
- `quimiosintesis` — la otra vía de obtener energía además de
  fotosíntesis (bacterias quimiosintéticas), 0 resultados, buen
  complemento para `origen-de-la-vida`/`procariotas` (tronco de
  tiempo profundo).
- `mal-de-chagas` — confirmado 2026-08-13 vía *Biología Polimodal*
  (Santillana, real, 454pp). Enfermedad parasitaria (Trypanosoma
  cruzi, transmitida por vinchuca), salud pública históricamente muy
  relevante en el norte argentino, 0 resultados en grep. El resto del
  libro (sistemas del cuerpo, herencia mendeliana, embriología)
  confirma cobertura existente, sin más hallazgos.

`6.Biología 6.DGCyE` y `Copia de 5.Biología V. Evolución y cambio.
Maipue.` quedaron sin abrir — escaneos muy pesados que agotaron la
cuota de disco del scratchpad al intentar OCR, pendiente de reintentar
con lotes más chicos si se confirma que vale la pena.

## Hallazgo grande — Filosofía: historia de la filosofía lumped +
bioética general ausente

Confirmado 2026-08-13 vía `FILOSOFIA Maipue.pdf` (real, argentino) y
`filosofía es 5.pdf` (Estrada). El tronco de Filosofía (17 temas) es
sólido en lógica/epistemología/ontología/ética/estética, pero:

1. **`FI7` ("Historia de la filosofía y corrientes") es un solo nodo
   cubriendo presocráticos → existencialismo + corrientes político-
   económicas** — Maipue confirma en su propio índice que esto se
   divide en 4 períodos reales (antiguo, medieval, moderno,
   contemporáneo). Mismo anti-patrón lumped que ya se corrigió en
   Historia profunda (30 nodos) y Lengua (sintaxis). **Atomización
   grande, comparable a la de Historia** — queda marcada para un
   sub-plan propio, no diseñada acá todavía. Fuentes disponibles para
   ese sub-plan: Marías y Savater (*Historia de la Filosofía*, ambos
   clásicos reales), más primarios (Platón, Aristóteles, Kant,
   Descartes, Maquiavelo, Santo Tomás de Aquino) para citar por
   corriente, mismo patrón que ya usa el proyecto.

   **Fuente definitiva confirmada 2026-08-13**: Adolfo Carpio,
   *Principios de Filosofía: una introducción a su problemática* — EL
   clásico argentino de intro a la filosofía (UBA), cubre exactamente
   presocráticos→existencialismo con la granularidad ideal (filósofo
   por filósofo, no sólo período): Heráclito/Parménides, Sócrates,
   Platón, Aristóteles, Santo Tomás, Descartes (racionalismo), Hume/
   empirismo/Wittgenstein, Kant, Hegel (idealismo absoluto), Marx
   (materialismo histórico), Husserl (fenomenología), Heidegger
   (existencialismo). Con esto el sub-plan de `FI7` queda con fuente
   primaria de punta a punta, listo para diseñarse cuando se decida
   el alcance.
2. **`bioetica-general`** — hoy bioética sólo existe recortada a
   transgénicos (`BIOTEC2`, Biología), nunca como rama general de
   ética aplicada (eutanasia, experimentación animal, ingeniería
   genética humana) colgando de `FI5`/`FI8`. 1 nodo nuevo, chico y
   bien definido, no requiere sub-plan.

## Hallazgo grande — Lengua: Historia de la Literatura Argentina y
Latinoamericana casi ausente

Confirmado 2026-08-13 vía *Literatura argentina y latinoamericana 5*
(Santillana, real, Polimodal). Mismo patrón y tamaño que el hallazgo
de Historia del Arte en `Arte`: hay un dimensión completa —la
historia literaria real, autores/obras en su contexto histórico— que
no está cubierta por lo que ya existe:

- `P9`-`P13` mencionan Martín Fierro/El Matadero/Facundo/Don Segundo
  Sombra, pero sólo como **textos sugeridos** para practicar
  comprensión/argumentación — no como objeto de estudio histórico-
  literario.
- `P11B` (Romanticismo→Realismo→Modernismo→Generación del 98→Boom
  latinoamericano) es la cadena de movimientos en abstracto, sin
  bajar a autores/obras argentinos concretos.

Lo que falta, con 0 resultados en grep cada uno: el Romanticismo
rioplatense (Echeverría/Sarmiento, con Rosas y unitarios/federales de
fondo — cruce directo con `AH6`), la gauchesca (José Hernández,
Martín Fierro como objeto literario), Florida y Boedo (la vanguardia
argentina real, distinta de la europea genérica que ya cubre `P11B`),
Borges y Cortázar (literatura fantástica), Manuel Puig
(posmodernidad), Alejo Carpentier (real maravilloso latinoamericano).

**Propuesta de spine** (nivel época/autor, sin diseñar entero —
comparable en tamaño a `FI7` y al sub-plan de Derecho, pendiente de
decisión de alcance):
1. `romanticismo-rioplatense` (Echeverría, Sarmiento, contexto Rosas)
2. `gauchesca-y-martin-fierro`
3. `vanguardias-argentinas-florida-y-boedo`
4. `borges-cortazar-y-lo-fantastico`
5. `literatura-latinoamericana-realismo-magico` (Carpentier, real
   maravilloso — distinto del `Boom latinoamericano` ya nombrado en
   `P11B`, que es panorama, no autor/obra)
6. `narrativa-argentina-posdictadura` (Manuel Puig, posmodernidad)

## Cerrado (parcial) — Historia Argentina/Latinoamericana, tercer tramo (✅ verificado 2026-09-07: semana-tragica-1919 e ISI generados, completan los 8 del resumen ejecutivo; el hueco regional de Latinoamérica —imperio-de-maximiliano-mexico, brasil-monarquico— sigue sin diseñar, no forma parte del conteo de 8)

Confirmado 2026-08-13 vía *Historia Argentina y Latinoamericana.
Siglo XIX* (Puerto de Palos) e *Historia: la Argentina y el resto del
mundo — Primera mitad del siglo XX* (SM), ambos reales y densos. El
segundo confirma **por cuarta vez independiente** el hueco de Reforma
Universitaria ya sourceado. Nuevo:

- `semana-tragica-1919` (huelga general y represión en Buenos Aires,
  uno de los eventos más enseñados de historia obrera argentina) +
  Liga Patriótica — 0 resultados en grep.
- `industrializacion-por-sustitucion-de-importaciones` (ISI) — modelo
  económico que define buena parte del siglo XX argentino
  (peronismo, Estado empresario), término siempre enseñado, ausente.
- **Hueco regional más amplio confirmado**: la historia de América
  Latina más allá de Argentina en el siglo XIX está prácticamente
  ausente. Ejemplos concretos: `imperio-de-maximiliano-mexico`
  (1864-1867, intervención francesa) y `brasil-monarquico` (único
  país latinoamericano que fue monarquía tras la independencia,
  Pedro I/Pedro II). Conecta con el hueco de "América Latina como
  región propia" ya encontrado en Geografía — mismo patrón, ahora
  confirmado también en Historia. No diseñado entero, sólo marcado
  con estos 2 ejemplos.

## Cerrado — Historia Mundial: Guerra Civil Española + Revolución Mexicana (✅ verificado 2026-09-07, 2/2; ambos con año agregado en el nombre real de carpeta)

Confirmado 2026-08-13 vía `Historia 4 - Serie Huellas (2013).pdf`
(que de paso confirma, independiente, el hallazgo de Reforma
Universitaria de arriba — buena señal cruzada):

- `guerra-civil-espanola` (1936-1939, franquismo) — 0 resultados en
  grep y en `material/historia-profunda/`. Cuelga entre `HM10`
  (Entreguerras) y `H28` (Segunda Guerra Mundial) — suele enseñarse
  como antesala directa de la Segunda Guerra.
- `revolucion-mexicana` (1910-1920) — también 0 resultados. Gran
  proceso latinoamericano del siglo XX, paralelo cronológicamente a
  la Primera Guerra Mundial pero un proceso propio — cuelga cerca de
  `HM9`.

## Cerrado — Cívica: discriminación e INADI (✅ verificado 2026-09-07)

Confirmado 2026-08-12 vía `pdp_feyc_voces_alumnos_1.pdf` (GCBA,
Formación Ética y Ciudadana 6°, real): la Convención de Derechos del
Niño ya está cubierta (`C9a`), pero **discriminación** como concepto
propio (tipos, INADI, Ley 26.370 control de acceso a boliches,
discriminación como expresión de poder, responsabilidad del Estado)
no tiene nodo dedicado — grep de "INADI"/"discriminaci" en todo
`troncos.md` da 0 resultados. Candidato: 1 nodo
`discriminacion-y-organismos-de-proteccion` colgando cerca de `C9a`.

## Hallazgo menor — carrera espacial (Historia/Física, baja prioridad)

`pd__ciencias_naturales_alunizaje_alumnos.pdf` (GCBA, real): Galileo y
telescopio ya conceptualmente cubierto por `ciencia-revolucion-cientifica`,
pero la carrera espacial (Sputnik, Apolo 11, contexto de Guerra Fría)
no se menciona en `guerra-fria-y-descolonizacion` ni en ningún lado.
Baja prioridad — se puede sumar como sub-sección del nodo existente en
vez de nodo nuevo.

## Hallazgo menor (NAP, no bloquea nada)

`propiedad-intelectual-y-licencias-digitales` — confirmado ausente en
todo `troncos.md`, pedido explícitamente por el NAP de Educación
Digital/Programación/Robótica (Res. CFE 343/18) para Ciclo Básico y
Orientado de secundaria. 1 nodo nuevo, colgaría de Informática (cerca
de Ciudadanía Digital) o de Derecho. Baja prioridad, se puede sumar
en cualquier momento sin dependencias.

## Hallazgo de assets (no es contenido, es visualizador)

El tema `dinero` (Matemática, `N18`) ya existe generado — lo que falta
es el **asset visual** (imágenes reales de billetes/monedas argentinos)
para acompañarlo. Anotado también en
`herramientas-interactivas-PLANIFICACION.md`.

## Confirmado sin huecos, con 3 hallazgos chicos (Física y Química)

Revisado 2026-08-12 contra Santillana Saber es Clave, Tinta Fresca y
SM Nodos (Física y Química). Confirma que **no hay pared** — 73/37
temas siguen sólidos — pero 3 nodos puntuales con 0 resultados en
grep, todos de cierre de unidad (materiales/energía), baja prioridad:
`nanotecnologia`, `superconductividad`, `petroleo-como-recurso-
energetico` (distinto del ángulo químico ya cubierto en `QUd`
hidrocarburos — acá es recurso/reservas, no la molécula). "Naturaleza
de la ciencia/epistemología" que traen estos libros **ya está más
completo** en `Tronco 12` (falsacionismo/Popper, paradigmas/Kuhn,
anarquismo epistemológico/Feyerabend) — no suma nada ahí.

- **Física** (73 temas): muy completa, incluye física nuclear. Libros
  nuevos (Física I/II, SM Nodos, etc.) mayormente escaneados sin OCR
  aplicado todavía — no se encontró señal de hueco grande.
- **Química** (37 temas): sana, confirmado a fondo 2026-08-13 contra
  Chang (McGraw-Hill, el clásico universitario, 1173pp — coincide
  capítulo por capítulo con lo que ya está generado). Hallazgos
  menores: `ácidos nucleicos` (`QUd` en el grafo) nunca generado
  individual; `química analítica` (titulación/espectroscopía/
  cromatografía — confirmado por los capítulos de valoraciones
  ácido-base/redox de Chang); `quimica-de-la-atmosfera` (ozono
  estratosférico, lluvia ácida, esmog fotoquímico — capítulo 17 de
  Chang, distinto del "cambio climático" genérico ya cubierto). Los 3
  de prioridad baja, sin documento propio todavía. Química 1/2
  (Gutiérrez Franco/López Cuevas, Pearson México) confirman cobertura
  del nivel básico-intermedio, sin hallazgos nuevos.
- **Cívica/Formación Ética y Ciudadana** (27 temas): bien cubierta
  contra CABA Contenidos Priorizados 2021. Sin hueco fuerte.
- **NAP Primaria (1er/2do ciclo) y Nivel Inicial**: revisado, contenido
  muy elemental — según confirma Javier, ya está cubierto o es
  demasiado básico para aportar (excepto el hallazgo de assets de
  dinero, arriba).

## Revisado — Pueblos originarios, leyendas (85MB/11 archivos)

Carpeta atípica de `biblioteca_san_pedro`, dos contenidos distintos:

1. **Mitos y leyendas** (Cuentos de la Pachamama, Cuentos Mapuches del
   Lago Escondido, Leyendas Argentinas, Mitos y leyendas de la Arg.)
   — hueco chico y real: `pueblos-originarios-territorio-argentino`
   (Historia profunda, ya generado) cubre el ángulo histórico/
   antropológico (Diaguitas, Tehuelches, Guaraníes: ubicación, modo de
   vida) pero **no** mitología/tradición oral/cosmovisión. Candidato:
   1 nodo nuevo en Lengua o Historia, baja prioridad.
2. **Diccionarios de lenguas indígenas reales** (Aymara, Rapa Nui,
   Mapudungun, Quechua) — **hallazgo de alcance, no hueco a rellenar
   automático**. Ninguna lengua originaria está en Tronco 18 (10
   idiomas extranjeros "grandes", track C1). Quechua y Mapudungún
   tienen peso cultural real en Argentina (NOA y Patagonia). Sumarlas
   sería una categoría de contenido nueva (patrimonio cultural, no
   track C1 de idioma extranjero) — **requiere decisión de producto
   de Javier**, no se asume.

## Pendiente de revisar (biblioteca_san_pedro, no tocado todavía)

Matemática (556MB/21), Arte y cultura (443MB/26), Educación Física
(171MB/25), Inglés (39MB/11), Orientación Vocacional (32MB/16).

Biología y Ciencias Naturales y Constitución de la Nación Argentina
ya tuvieron una pasada liviana (ver más abajo, "Confirmado sin
huecos") pero Javier las reorganizó después (carpetas con mtime más
nuevo) — vale la pena una segunda pasada si aparecen libros nuevos
ahí. Economía-Gestión/Proyecto/Teoría Organizacional/SIC ya se hizo
(ver arriba, 16 nodos). Filosofía y NTICX/Tecnología también con
pasada liviana ya hecha.

Más `CABA` (7 subcarpetas sin tocar: astronomía, Enlace Ciencias,
Prácticas Profesionalizantes, Educación Digital/Programación/
Robótica, Colecciones Educación y Trabajo, Educación de Adultos y
Adolescentes).

## Pendiente de decidir

- Confirmar el punto de `turismo-mundial` vs. `material/turismo/`
  antes de generar ese nodo puntual.
- Orden de generación: ¿Geografía primero (ya con nodos definidos), o
  seguir revisando más materias antes de generar nada más?
