# Historia Profunda — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Materia nueva, creada en esta sesión: el **Tronco 8 — "Historia
profunda: del Big Bang a hoy"** de `troncos.md` es explícitamente
distinto de `historia/` (que cubre Tronco 5/6, historiografía e
historia humana con nodos `H`/`T`) — Tronco 8 usa sus propios nodos
(`U`, `AS`, `MIN`, `COS`, `DAT`, `AM3`) y `troncos.md` lo presenta como
columna vertebral propia ("el único que da contexto a todos los
demás"). Mismo criterio que Salud, Ed. Física o ESI cuando aparecieron
por primera vez: un tronco propio con nodos propios implica carpeta
propia.

**Nota**: 5 nodos de este tronco están tageados con materia ajena
(`QF2` Química, `BF2`/`BJ2` Biología, `G9`/`G10` Geografía). En la
práctica tienen también carpeta propia acá (`tabla-periodica-nivel2-cosmologico`,
`fotosintesis-cambio-atmosfera-nivel2`, `seleccion-natural-evidencias-nivel2`,
`relieve-sismos-volcanes`, `distribucion-biomas`) y por eso figuran en esta
tabla; la adición "nivel 2" en la materia ajena se documenta además en su
propio `dependencias.md`.

**Formato de la columna "Depende de"** (la parsea
`_qa_tools/gen_examen_jefe_prereq_clusters.py`): carpetas de esta materia
con nombre pelado y barra final (`` `nombre/` ``), sin `./`; otras materias
con `` `../otra-materia/tema/` `` (se ignoran, son documentación); raíz sin
backticks.

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su
fila antes de escribir teoría/cuestionario.

## 8.a — Tierra y vida

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `escalas-de-tiempo-profundo/` | (ninguna — nodo raíz de Tronco 8) | Nodo `U1` de `troncos.md`, sin flecha entrante. Manejar millones/miles de millones de años es el prerrequisito de notación y escala antes de poder hablar de cualquier evento del tronco. Usa notación científica de `../matematica/` (nivel 2). |
| `origen-del-universo/` | `escalas-de-tiempo-profundo/` | Nodo `U2` de `troncos.md` (`U1 → U2`). |
| `formacion-de-estrellas/` | `origen-del-universo/` | Nodo `U3` de `troncos.md` (`U2 → U3`). |
| `nucleosintesis/` | `formacion-de-estrellas/` | Nodo `U4` de `troncos.md` (`U3 → U4`). Cruce citado como "el más potente del mapa": alimenta `tabla-periodica-nivel2-cosmologico` y `../quimica/tabla-periodica-tendencias/` (nivel 2). |
| `formacion-del-sistema-solar/` | `nucleosintesis/` | Nodo `U5` de `troncos.md` (`U4 → U5`). |
| `movimiento-rotacion-traslacion/` | `formacion-del-sistema-solar/` | Nodo `AS1` de `troncos.md` (`U5 → AS1`). |
| `estaciones-del-ano/` | `movimiento-rotacion-traslacion/`, `../matematica/circunferencia/` | Nodo `AS2` de `troncos.md` (`AS1 → AS2`, `GO6P → AS2`). |
| `fases-lunares/` | `movimiento-rotacion-traslacion/`, `../matematica/circunferencia/` | Nodo `AS3` de `troncos.md` (`AS1 → AS3`, `GO6P → AS3`). |
| `eclipses-sol-luna/` | `fases-lunares/`, `../matematica/circunferencia/` | Nodo `AS4` de `troncos.md` (`AS3 → AS4`, `GO6P → AS4`). |
| `movimiento-aparente-constelaciones/` | `movimiento-rotacion-traslacion/` | Nodo `AS5` de `troncos.md` (`AS1 → AS5`). |
| `tierra-primitiva-diferenciacion/` | `formacion-del-sistema-solar/` | Nodo `U6` de `troncos.md` (`U5 → U6`). |
| `tiempo-geologico-eones-eras-periodos/` | `tierra-primitiva-diferenciacion/` | Nodos `U7a/b/c` de `troncos.md` (`U6 → U7a → U7b → U7c`). Un solo módulo (eones, eras y períodos son la misma escala de anidamiento, no 3 habilidades distintas) — mismo criterio que otros "no se separa" del mapa. |
| `tectonica-placas-deriva-continental/` | `tiempo-geologico-eones-eras-periodos/` | Nodo `U8` de `troncos.md` (`U7c → U8`). Alimenta `relieve-sismos-volcanes`, `distribucion-biomas` y `ciclo-de-las-rocas`. |
| `atmosfera-primitiva/` | `tierra-primitiva-diferenciacion/` | Nodo `U9` de `troncos.md` (`U6 → U9`). |
| `origen-de-la-vida/` | `atmosfera-primitiva/` | Nodo `U10` de `troncos.md` (`U9 → U10`). |
| `procariotas/` | `origen-de-la-vida/` | Nodo `U11` de `troncos.md` (`U10 → U11`). |
| `gran-oxidacion/` | `procariotas/` | Nodo `U12` de `troncos.md` (`U11 → U12`). Alimenta `fotosintesis-cambio-atmosfera-nivel2` y `../biologia/fotosintesis-respiracion-celular/` (nivel 2). |
| `eucariotas/` | `gran-oxidacion/` | Nodo `U13` de `troncos.md` (`U12 → U13`). |
| `multicelularidad/` | `eucariotas/` | Nodo `U14` de `troncos.md` (`U13 → U14`). |
| `explosion-cambrica/` | `multicelularidad/` | Nodo `U15` de `troncos.md` (`U14 → U15`). |
| `conquista-tierra-firme/` | `explosion-cambrica/` | Nodo `U16` de `troncos.md` (`U15 → U16`). |
| `cinco-extinciones-masivas/` | `conquista-tierra-firme/` | Nodo `U17` de `troncos.md` (`U16 → U17`). Alimenta `seleccion-natural-evidencias-nivel2` y `../biologia/seleccion-natural/` (nivel 2, evidencia fósil). |
| `radiacion-mamiferos/` | `cinco-extinciones-masivas/` | Nodo `U18` de `troncos.md` (`U17 → U18`). |
| `paleoclima-glaciaciones/` | `tectonica-placas-deriva-continental/` | Nodo `U19` de `troncos.md` (`U8 → U19`). Alimenta `cambio-climatico-linea-base-historica`. |
| `datacion-radiometrica/` | `tiempo-geologico-eones-eras-periodos/`, `../matematica/logaritmos/` | Nodo `DAT` de `troncos.md` (`U7c → DAT`). Necesita decaimiento exponencial y logaritmos ya construidos en Matemática — sin logaritmos no se puede fechar un fósil. |
| `cambio-climatico-linea-base-historica/` | `paleoclima-glaciaciones/` | Nodo `AM3` de `troncos.md` (`U19 → AM3`). |
| `minerales-estructura-cristalina/` | `tierra-primitiva-diferenciacion/` | Nodo `MIN1` de `troncos.md` (`U6 → MIN1`). |
| `rocas-igneas-sedimentarias-metamorficas/` | `minerales-estructura-cristalina/` | Nodos `MIN2a/b/c` de `troncos.md` (`MIN1 → MIN2a/b/c`). Un solo módulo, los 3 tipos de roca se enseñan juntos por contraste. |
| `ciclo-de-las-rocas/` | `rocas-igneas-sedimentarias-metamorficas/`, `tectonica-placas-deriva-continental/` | Nodo `MIN3` de `troncos.md` (`MIN2a/b/c → MIN3`, `U8 → MIN3`). Alimenta `relieve-sismos-volcanes`. |
| `relieve-sismos-volcanes/` | `tectonica-placas-deriva-continental/`, `ciclo-de-las-rocas/` | Nodo `G9` de `troncos.md` (`U8 → G9`, `MIN3 → G9`), tageado Geografía pero con carpeta propia acá (versión "nivel 2" histórica del relieve). |
| `distribucion-biomas/` | `tectonica-placas-deriva-continental/` | Nodo `G10` de `troncos.md` (`U8 → G10`), tageado Geografía pero con carpeta propia acá. |
| `tabla-periodica-nivel2-cosmologico/` | `nucleosintesis/` | Nodo `QF2` de `troncos.md` (`U4 → QF2`), tageado Química; carpeta propia acá como lectura cosmológica de la tabla periódica. |
| `fotosintesis-cambio-atmosfera-nivel2/` | `gran-oxidacion/` | Nodo `BF2` de `troncos.md` (`U12 → BF2`), tageado Biología; carpeta propia acá. |
| `seleccion-natural-evidencias-nivel2/` | `cinco-extinciones-masivas/` | Nodo `BJ2` de `troncos.md` (`U17 → BJ2`), tageado Biología; carpeta propia acá. |
| `galaxias-tipos-escala/` | `formacion-de-estrellas/` | Nodo `COS1` de `troncos.md` (`U3 → COS1`). |
| `corrimiento-al-rojo-expansion-universo/` | `galaxias-tipos-escala/` | Nodo `COS2` de `troncos.md` (`COS1 → COS2`). |
| `ley-de-hubble/` | `corrimiento-al-rojo-expansion-universo/` | Nodo `COS3` de `troncos.md` (`COS2 → COS3`). |
| `materia-energia-oscura/` | `ley-de-hubble/` | Nodo `COS4` de `troncos.md` (`COS3 → COS4`). |
| `agujeros-negros/` | `formacion-de-estrellas/`, `nucleosintesis/` | Nodo `COS5` de `troncos.md` (`U3 → COS5`, `U4 → COS5`). |

## 8.b — Humanidad (continúa la misma línea de tiempo, ahora la parte humana)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `hominizacion/` | `radiacion-mamiferos/` | Nodo `H10` de `troncos.md`. Primer nodo de 8.b, continúa directamente 8.a (`U18` Radiación de mamíferos, de donde surgen los primates). |
| `paleolitico/` | `hominizacion/` | Nodos `H11a/b/c` de `troncos.md` (`H10 → H11a/b/c`), combinados en un solo módulo (caza, recolección y fuego). |
| `herramientas-arte-rupestre/` | `paleolitico/` | Nodo `H12` de `troncos.md` (`H11a/b/c → H12`). Alimenta `../arte/origen-del-arte/`. |
| `poblamiento-planeta-america/` | `herramientas-arte-rupestre/` | Nodo `H13` de `troncos.md` (`H12 → H13`). |
| `revolucion-neolitica/` | `poblamiento-planeta-america/` | Nodo `H14` de `troncos.md` (`H13 → H14`). Agricultura y ganadería. |
| `sedentarizacion-excedente/` | `revolucion-neolitica/` | Nodo `H15` de `troncos.md` (`H14 → H15`). Alimenta `../economia/origen-excedente-moneda-mercado/`. |
| `division-del-trabajo/` | `sedentarizacion-excedente/` | Nodo `H16` de `troncos.md` (`H15 → H16`). |
| `propiedad-jerarquia-estado/` | `division-del-trabajo/` | Nodo `H17` de `troncos.md` (`H16 → H17`). Alimenta `../civica/origen-estado-derecho/`. |
| `metalurgia-cobre-hierro/` | `division-del-trabajo/` | Nodo `TEC1` de `troncos.md` (`H16 → TEC1`), primer eslabón del "hilo de tecnología" que sigue con `TEC2`/`TEC3`. |
| `escritura-primeras-ciudades/` | `propiedad-jerarquia-estado/` | Nodo `H18` de `troncos.md` (`H17 → H18`). Alimenta `../lengua/la-escritura-como-tecnologia/`. |
| `mesopotamia/` | `escritura-primeras-ciudades/` | Nodo `H19a` de `troncos.md` (`H18 → H19a`). |
| `antiguo-egipto/` | `escritura-primeras-ciudades/` | Nodo `H19b` de `troncos.md` (`H18 → H19b`). |
| `antigua-grecia/` | `escritura-primeras-ciudades/` | Nodo `H19c` de `troncos.md` (`H18 → H19c`). |
| `antigua-roma/` | `escritura-primeras-ciudades/` | Nodo `H19d` de `troncos.md` (`H18 → H19d`). |
| `china-antigua/` | `escritura-primeras-ciudades/` | Nodo `H19e` de `troncos.md` (`H18 → H19e`). |
| `india-antigua/` | `escritura-primeras-ciudades/` | Nodo `H19f` de `troncos.md` (`H18 → H19f`). |
| `civilizaciones-de-america-precolombinas/` | `escritura-primeras-ciudades/` | Nodo `H19g` de `troncos.md` (`H18 → H19g`). |
| `civilizaciones-antiguas/` | `mesopotamia/`, `antiguo-egipto/`, `antigua-grecia/`, `antigua-roma/`, `china-antigua/`, `india-antigua/`, `civilizaciones-de-america-precolombinas/`, `metalurgia-cobre-hierro/` | Nodo `H19` de `troncos.md` (síntesis comparativa: `H19a-g → H19`, `TEC1 → H19`). Un solo módulo de repaso, depende de los 7 módulos de civilizaciones y de la metalurgia. |
| `imperio-persa/` | `civilizaciones-antiguas/` | Nodo `H20a` de `troncos.md` (`H19 → H20a`). |
| `imperio-de-alejandro-magno-helenistico/` | `civilizaciones-antiguas/` | Nodo `H20b` de `troncos.md` (`H19 → H20b`). |
| `expansion-del-imperio-romano/` | `civilizaciones-antiguas/` | Nodo `H20c` de `troncos.md` (`H19 → H20c`). |
| `imperio-han-china/` | `civilizaciones-antiguas/` | Nodo `H20d` de `troncos.md` (`H19 → H20d`). |
| `imperios-expansion/` | `imperio-persa/`, `imperio-de-alejandro-magno-helenistico/`, `expansion-del-imperio-romano/`, `imperio-han-china/` | Nodo `H20` de `troncos.md` (síntesis: `H20a-d → H20`). |
| `caida-de-roma-y-alta-edad-media/` | `imperios-expansion/` | Nodo `HM1` de `troncos.md` (`H20 → HM1`). |
| `edad-media-feudalismo/` | `caida-de-roma-y-alta-edad-media/` | Módulo previo a la división del Medioevo en `HM1`-`HM4`/`H21` (lumped): su `teoria.md` declara depender de la caída de Roma. *Deducido acá, no está en el MAPA* con este nombre: sin flecha propia, se cuelga de `HM1` y queda como hoja de síntesis del feudalismo. |
| `imperio-bizantino/` | `caida-de-roma-y-alta-edad-media/` | Nodo `HM2` de `troncos.md` (`HM1 → HM2`). |
| `islam-y-expansion-arabe/` | `caida-de-roma-y-alta-edad-media/` | Nodo `HM3` de `troncos.md` (`HM1 → HM3`). |
| `edad-media-plena/` | `imperio-bizantino/`, `islam-y-expansion-arabe/` | Nodo `HM4` de `troncos.md` (`HM2 → HM4`, `HM3 → HM4`). |
| `baja-edad-media-y-crisis/` | `edad-media-plena/` | Nodo `H21` de `troncos.md` (`HM4 → H21`). Baja Edad Media y Peste Negra. |
| `renacimiento-y-reforma/` | `baja-edad-media-y-crisis/` | Nodo `HM5` de `troncos.md` (`H21 → HM5`). |
| `imprenta/` | `renacimiento-y-reforma/` | Nodo `H22a` de `troncos.md` (`HM5 → H22a`). Eslabón del hilo de tecnología. |
| `navegacion/` | `renacimiento-y-reforma/` | Nodo `H22b` de `troncos.md` (`HM5 → H22b`). |
| `ciencia-revolucion-cientifica/` | `renacimiento-y-reforma/` | Nodo `H22c` de `troncos.md` (`HM5 → H22c`). Alimenta `../filosofia/metodo-cientifico-racionalismo/`. |
| `modernidad-imprenta-navegacion-ciencia/` | `imprenta/`, `navegacion/`, `ciencia-revolucion-cientifica/` | Módulo de síntesis que reúne `H22a/b/c` (mismo título que dio Javier). *Deducido acá, no está en el MAPA*: el MAPA no tiene nodo de síntesis, se lo cuelga de los tres módulos que resume. |
| `conquista-colonizacion-america/` | `navegacion/` | Nodo `H23` de `troncos.md` (`H22b → H23`, depende específicamente de la navegación). |
| `absolutismo-europeo/` | `conquista-colonizacion-america/` | Nodo `HM6` de `troncos.md` (`H23 → HM6`). |
| `ilustracion/` | `absolutismo-europeo/` | Nodo `HM7` de `troncos.md` (`HM6 → HM7`). |
| `revolucion-industrial/` | `ilustracion/` | Nodo `H24` de `troncos.md` (`HM7 → H24`). Alimenta `../fisica/maquina-termica-termodinamica/`, `../geografia/urbanizacion-migracion-ciudad/`, `../economia/capitalismo-industrial-trabajo-asalariado/` y `huella-humana-en-el-clima-inicio`. |
| `electrificacion-fabrica-hogar/` | `revolucion-industrial/`, `../fisica/maquina-termica-termodinamica-nivel2/`, `../fisica/potencia-electrica/` | Nodo `TEC2` de `troncos.md` (`H24 → TEC2`, `F8 → TEC2`, `FIS6P`/`FIS13P → TEC2`; segundo eslabón del hilo tecnológico). |
| `revoluciones-burguesas-liberalismo/` | `revolucion-industrial/` | Nodo `H25` de `troncos.md` (`H24 → H25`). |
| `estados-nacionales/` | `revoluciones-burguesas-liberalismo/` | Nodo `H26` de `troncos.md` (`H25 → H26`). |
| `imperialismo/` | `estados-nacionales/` | Nodo `H27` de `troncos.md` (`H26 → H27`). |
| `sociedad-de-masas-y-democracia-liberal/` | `imperialismo/` | Nodo `HM8` de `troncos.md` (`H27 → HM8`). |
| `primera-guerra-mundial-y-revolucion-rusa/` | `sociedad-de-masas-y-democracia-liberal/` | Nodo `HM9` de `troncos.md` (`HM8 → HM9`). |
| `entreguerras-y-crisis-de-1929/` | `primera-guerra-mundial-y-revolucion-rusa/` | Nodo `HM10` de `troncos.md` (`HM9 → HM10`). `HM10B` (Guerra Civil Española) no tiene carpeta propia, por eso `H28` cuelga directo de acá. |
| `segunda-guerra-mundial/` | `entreguerras-y-crisis-de-1929/` | Nodo `H28` de `troncos.md` (`HM10B → H28`; colapsado a `HM10` porque `HM10B` aún no tiene carpeta). |
| `guerras-mundiales/` | `primera-guerra-mundial-y-revolucion-rusa/`, `segunda-guerra-mundial/` | Módulo previo a la división de `H28` en dos guerras (lumped, ver `historia-profunda-huecos-PLANIFICACION.md`). *Deducido acá, no está en el MAPA*: queda como síntesis de ambas guerras. |
| `descolonizacion-de-africa-y-asia/` | `segunda-guerra-mundial/` | Nodo `HM11` de `troncos.md` (`H28 → HM11`). |
| `guerra-fria-descolonizacion/` | `descolonizacion-de-africa-y-asia/` | Nodo `H29` de `troncos.md` (`HM11 → H29`). |
| `historia-contemporanea-de-africa/` | `guerra-fria-descolonizacion/` | Nodo `HM12` de `troncos.md` (`H29 → HM12`). |
| `historia-contemporanea-de-medio-oriente/` | `guerra-fria-descolonizacion/` | Nodo `HM13` de `troncos.md` (`H29 → HM13`). |
| `historia-contemporanea-de-asia-y-pacifico/` | `guerra-fria-descolonizacion/` | Nodo `HM14` de `troncos.md` (`H29 → HM14`). |
| `globalizacion-era-digital/` | `historia-contemporanea-de-africa/`, `historia-contemporanea-de-medio-oriente/`, `historia-contemporanea-de-asia-y-pacifico/` | Nodo `H30` de `troncos.md` (`HM12/13/14 → H30`). Alimenta `../informatica/revolucion-informatica/` y `../ciudadania-digital/desinformacion-en-red/`. |
| `internet-redes-globalizacion-digital/` | `electrificacion-fabrica-hogar/`, `globalizacion-era-digital/`, `../informatica/revolucion-informatica/` | Nodo `TEC3` de `troncos.md` (`TEC2 → TEC3`, `H30 → TEC3`; cierra la cadena piedra→metal→imprenta→vapor/electricidad→cables submarinos). |
| `huella-humana-en-el-clima-inicio/` | `revolucion-industrial/` | Nodo `AM4` de `troncos.md` (`H24 → AM4`). Sin tag de materia ajena — queda en Historia Profunda junto a `cambio-climatico-linea-base-historica` (`AM3`), su antecedente directo. |

## 8.c — Argentina insertada en la línea

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `pueblos-originarios-territorio-argentino/` | `poblamiento-planeta-america/`, `civilizaciones-de-america-precolombinas/` | Nodo `AH1` de `troncos.md` (raíz de 8.c, sin flecha entrante dentro de 8.c). *Deducido acá, no está en el MAPA* (el MAPA sólo dice que 8.c está "colgada de 8.b"). Se apoya en el poblamiento de América y en las civilizaciones precolombinas. |
| `conquista-y-colonia-argentina/` | `pueblos-originarios-territorio-argentino/`, `conquista-colonizacion-america/` | Nodo `AH2` de `troncos.md` (`AH1 → AH2`). La segunda dependencia (`conquista-colonizacion-america`) está deducida acá, no en el MAPA. |
| `virreinato-y-comercio/` | `conquista-y-colonia-argentina/` | Nodo `AH3` de `troncos.md` (`AH2 → AH3`). |
| `revolucion-de-mayo/` | `virreinato-y-comercio/`, `ilustracion/` | Nodo `AH4` de `troncos.md` (`AH3 → AH4`). La dependencia de `ilustracion` está deducida acá, no en el MAPA. |
| `guerras-de-independencia-argentina/` | `revolucion-de-mayo/` | Nodo `AH5` de `troncos.md` (`AH4 → AH5`). |
| `guerras-civiles-unitarios-federales/` | `guerras-de-independencia-argentina/` | Nodo `AH6` de `troncos.md` (`AH5 → AH6`). |
| `organizacion-nacional-constitucion-1853/` | `guerras-civiles-unitarios-federales/` | Nodo `AH7` de `troncos.md` (`AH6 → AH6B → AH6C → AH7`). `AH6B`/`AH6C` aún no tienen carpeta, por eso se colapsa a `AH6`. |
| `modelo-agroexportador-inmigracion/` | `organizacion-nacional-constitucion-1853/` | Nodo `AH8` de `troncos.md` (`AH7 → AH7B → AH7C → AH8`). `AH7B`/`AH7C` aún no tienen carpeta, se colapsa a `AH7`. Alimenta `../economia/estructura-productiva-dependencia/`. |
| `ampliacion-democratica-ley-saenz-pena/` | `modelo-agroexportador-inmigracion/` | Nodo `AH9` de `troncos.md` (`AH8 → AH9`). Alimenta `../civica/sufragio-restringido-universal/`. |
| `golpes-de-estado-interrupciones/` | `ampliacion-democratica-ley-saenz-pena/`, `entreguerras-y-crisis-de-1929/` | Nodo `AH10` de `troncos.md` (`AH9 → AH9B/AH9C → AH10`). `AH9B`/`AH9C` aún no tienen carpeta, se colapsa a `AH9`. La dependencia de `entreguerras-y-crisis-de-1929` (contexto del golpe de 1930) está deducida acá, no en el MAPA. |
| `peronismo-derechos-sociales/` | `golpes-de-estado-interrupciones/` | Nodo `AH11` de `troncos.md` (`AH10 → ISI1 → AH11`). `ISI1` aún no tiene carpeta, se colapsa a `AH10`. |
| `terrorismo-de-estado-argentina/` | `peronismo-derechos-sociales/` | Nodo `AH12` de `troncos.md` (`AH11 → AH12`). Alimenta `../civica/estado-de-derecho-por-que-importa/`. |
| `guerra-de-malvinas/` | `terrorismo-de-estado-argentina/` | Nodo `AH13` de `troncos.md` (`AH12 → AH13`). |
| `recuperacion-democratica-memoria/` | `guerra-de-malvinas/` | Nodo `AH14` de `troncos.md` (`AH13 → AH14`). |
| `historia-reciente-argentina/` | `recuperacion-democratica-memoria/` | Nodo `AH15` de `troncos.md` (`AH14 → AH15`). |
