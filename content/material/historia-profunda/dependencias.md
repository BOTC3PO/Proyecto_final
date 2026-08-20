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
(`QF2` Química, `BF2`/`BJ2` Biología, `G9`/`G10` Geografía) — esos
**no** van en esta carpeta, van como adición "nivel 2" a un tema ya
existente de esa materia (mismo patrón usado con los 4 nodos legacy de
Química en la ronda anterior), o como carpeta nueva en esa materia si
no hay tema previo que los cubra. Quedan documentados en el
`dependencias.md` de la materia correspondiente, no acá.

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su
fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `escalas-de-tiempo-profundo/` | `(ninguna — nodo raíz de Tronco 8)` | Nodo `U1` de `troncos.md`, sin flecha entrante. Manejar millones/miles de millones de años es el prerrequisito de notación y escala antes de poder hablar de cualquier evento del tronco. |
| `origen-del-universo/` | `./escalas-de-tiempo-profundo/` | Nodo `U2` de `troncos.md` (`U1 → U2`). |
| `formacion-de-estrellas/` | `./origen-del-universo/` | Nodo `U3` de `troncos.md` (`U2 → U3`). |
| `nucleosintesis/` | `./formacion-de-estrellas/` | Nodo `U4` de `troncos.md` (`U3 → U4`). Cruce citado como "el más potente del mapa": alimenta `../quimica/tabla-periodica-tendencias/` (nivel 2). |
| `formacion-del-sistema-solar/` | `./nucleosintesis/` | Nodo `U5` de `troncos.md` (`U4 → U5`). |
| `movimiento-rotacion-traslacion/` | `./formacion-del-sistema-solar/` | Nodo `AS1` de `troncos.md` (`U5 → AS1`). |
| `estaciones-del-ano/` | `./movimiento-rotacion-traslacion/`, `../matematica/circunferencia/` | Nodo `AS2` de `troncos.md` (`AS1 → AS2`, `GO6P → AS2`). |
| `fases-lunares/` | `./movimiento-rotacion-traslacion/`, `../matematica/circunferencia/` | Nodo `AS3` de `troncos.md` (`AS1 → AS3`, `GO6P → AS3`). |
| `eclipses-sol-luna/` | `./fases-lunares/`, `../matematica/circunferencia/` | Nodo `AS4` de `troncos.md` (`AS3 → AS4`, `GO6P → AS4`). |
| `movimiento-aparente-constelaciones/` | `./movimiento-rotacion-traslacion/` | Nodo `AS5` de `troncos.md` (`AS1 → AS5`). |
| `tierra-primitiva-diferenciacion/` | `./formacion-del-sistema-solar/` | Nodo `U6` de `troncos.md` (`U5 → U6`). |
| `tiempo-geologico-eones-eras-periodos/` | `./tierra-primitiva-diferenciacion/` | Nodos `U7a/b/c` de `troncos.md` (`U6 → U7a → U7b → U7c`). Un solo módulo (eones, eras y períodos son la misma escala de anidamiento, no 3 habilidades distintas) — mismo criterio que otros "no se separa" del mapa. |
| `tectonica-de-placas-deriva-continental/` | `./tiempo-geologico-eones-eras-periodos/` | Nodo `U8` de `troncos.md` (`U7c → U8`). Alimenta `../geografia/relieve-sismos-volcanes/` y `./ciclo-de-las-rocas/`. |
| `atmosfera-primitiva/` | `./tierra-primitiva-diferenciacion/` | Nodo `U9` de `troncos.md` (`U6 → U9`). |
| `origen-de-la-vida/` | `./atmosfera-primitiva/` | Nodo `U10` de `troncos.md` (`U9 → U10`). |
| `procariotas/` | `./origen-de-la-vida/` | Nodo `U11` de `troncos.md` (`U10 → U11`). |
| `gran-oxidacion/` | `./procariotas/` | Nodo `U12` de `troncos.md` (`U11 → U12`). Alimenta `../biologia/fotosintesis-respiracion-celular/` (nivel 2). |
| `eucariotas/` | `./gran-oxidacion/` | Nodo `U13` de `troncos.md` (`U12 → U13`). |
| `multicelularidad/` | `./eucariotas/` | Nodo `U14` de `troncos.md` (`U13 → U14`). |
| `explosion-cambrica/` | `./multicelularidad/` | Nodo `U15` de `troncos.md` (`U14 → U15`). |
| `conquista-tierra-firme/` | `./explosion-cambrica/` | Nodo `U16` de `troncos.md` (`U15 → U16`). |
| `cinco-extinciones-masivas/` | `./conquista-tierra-firme/` | Nodo `U17` de `troncos.md` (`U16 → U17`). Alimenta `../biologia/seleccion-natural/` (nivel 2, evidencia fósil). |
| `radiacion-de-mamiferos/` | `./cinco-extinciones-masivas/` | Nodo `U18` de `troncos.md` (`U17 → U18`). |
| `paleoclima-y-glaciaciones/` | `./tectonica-de-placas-deriva-continental/` | Nodo `U19` de `troncos.md` (`U8 → U19`). Alimenta `./cambio-climatico-linea-de-base/`. |
| `datacion-radiometrica/` | `./tiempo-geologico-eones-eras-periodos/`, `../matematica/logaritmos/` | Nodo `DAT` de `troncos.md` (`U7c → DAT`). Necesita decaimiento exponencial y logaritmos ya construidos en Matemática — sin logaritmos no se puede fechar un fósil. |
| `cambio-climatico-linea-de-base/` | `./paleoclima-y-glaciaciones/` | Nodo `AM3` de `troncos.md` (`U19 → AM3`). |
| `minerales-estructura-cristalina/` | `./tierra-primitiva-diferenciacion/` | Nodo `MIN1` de `troncos.md` (`U6 → MIN1`). |
| `rocas-igneas-sedimentarias-metamorficas/` | `./minerales-estructura-cristalina/` | Nodos `MIN2a/b/c` de `troncos.md` (`MIN1 → MIN2a/b/c`). Un solo módulo, los 3 tipos de roca se enseñan juntos por contraste. |
| `ciclo-de-las-rocas/` | `./rocas-igneas-sedimentarias-metamorficas/`, `./tectonica-de-placas-deriva-continental/` | Nodo `MIN3` de `troncos.md` (`MIN2a/b/c → MIN3`, `U8 → MIN3`). Alimenta `../geografia/relieve-sismos-volcanes/`. |
| `galaxias-tipos-y-escala/` | `./formacion-de-estrellas/` | Nodo `COS1` de `troncos.md` (`U3 → COS1`). |
| `corrimiento-al-rojo-expansion-universo/` | `./galaxias-tipos-y-escala/` | Nodo `COS2` de `troncos.md` (`COS1 → COS2`). |
| `ley-de-hubble/` | `./corrimiento-al-rojo-expansion-universo/` | Nodo `COS3` de `troncos.md` (`COS2 → COS3`). |
| `materia-y-energia-oscura/` | `./ley-de-hubble/` | Nodo `COS4` de `troncos.md` (`COS3 → COS4`). |
| `agujeros-negros/` | `./formacion-de-estrellas/`, `./nucleosintesis/` | Nodo `COS5` de `troncos.md` (`U3 → COS5`, `U4 → COS5`). |

## 8.b — Humanidad (continúa la misma línea de tiempo, ahora la parte humana)

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `hominizacion/` | `./radiacion-de-mamiferos/` | Nodo `H10` de `troncos.md`. Primer nodo de 8.b, continúa directamente 8.a (`U18` Radiación de mamíferos, de donde surgen los primates). |
| `paleolitico-caza-recoleccion-fuego/` | `./hominizacion/` | Nodos `H11a/b/c` de `troncos.md` (`H10 → H11a/b/c`), combinados en un solo módulo (mismo título que dio Javier). |
| `herramientas-arte-rupestre/` | `./paleolitico-caza-recoleccion-fuego/` | Nodo `H12` de `troncos.md`. Alimenta `../arte/origen-del-arte/`. |
| `poblamiento-planeta-america/` | `./herramientas-arte-rupestre/` | Nodo `H13` de `troncos.md`. |
| `revolucion-neolitica-agricultura-ganaderia/` | `./poblamiento-planeta-america/` | Nodo `H14` de `troncos.md`. |
| `sedentarizacion-y-excedente/` | `./revolucion-neolitica-agricultura-ganaderia/` | Nodo `H15` de `troncos.md`. Alimenta `../economia/origen-excedente-moneda-mercado/`. |
| `division-del-trabajo/` | `./sedentarizacion-y-excedente/` | Nodo `H16` de `troncos.md`. |
| `propiedad-jerarquia-estado/` | `./division-del-trabajo/` | Nodo `H17` de `troncos.md`. Alimenta `../civica/origen-estado-derecho/`. |
| `metalurgia-cobre-hierro/` | `./division-del-trabajo/` | Nodo `TEC1` de `troncos.md` (`H16 → TEC1`), primer eslabón del "hilo de tecnología" que sigue con `TEC2`/`TEC3`. |
| `escritura-primeras-ciudades/` | `./propiedad-jerarquia-estado/` | Nodo `H18` de `troncos.md`. Alimenta `../lengua/la-escritura-como-tecnologia/`. |
| `civilizaciones-antiguas/` | `./escritura-primeras-ciudades/` | Nodo `H19` de `troncos.md` (síntesis de `H19a-g`: Mesopotamia, Egipto, Grecia, Roma, China, India, América precolombina — un solo módulo de repaso comparativo, no 7 carpetas). |
| `imperios-y-expansion/` | `./civilizaciones-antiguas/` | Nodo `H20` de `troncos.md` (síntesis de `H20a-d`: Persia, helenístico, Roma, Han — un solo módulo). |
| `edad-media-feudalismo/` | `./imperios-y-expansion/` | Nodo `H21` de `troncos.md`. |
| `modernidad-imprenta-navegacion-ciencia/` | `./edad-media-feudalismo/` | Nodos `H22a/b/c` de `troncos.md`, combinados (mismo título que dio Javier). Alimenta `../filosofia/metodo-cientifico-racionalismo/`. |
| `conquista-colonizacion-america/` | `./modernidad-imprenta-navegacion-ciencia/` | Nodo `H23` de `troncos.md` (`H22b → H23`, depende específicamente de la navegación). |
| `revolucion-industrial/` | `./conquista-colonizacion-america/` | Nodo `H24` de `troncos.md`. Alimenta `../fisica/maquina-termica-termodinamica/`, `../geografia/urbanizacion-migracion-ciudad/`, `../economia/capitalismo-industrial-trabajo-asalariado/` y `./huella-humana-en-el-clima/`. |
| `electrificacion-fabrica-hogar/` | `./revolucion-industrial/` | Nodo `TEC2` de `troncos.md` (segundo eslabón del hilo tecnológico). |
| `revoluciones-burguesas-liberalismo/` | `./revolucion-industrial/` | Nodo `H25` de `troncos.md`. |
| `estados-nacionales/` | `./revoluciones-burguesas-liberalismo/` | Nodo `H26` de `troncos.md`. |
| `imperialismo/` | `./estados-nacionales/` | Nodo `H27` de `troncos.md`. |
| `guerras-mundiales/` | `./imperialismo/` | Nodo `H28` de `troncos.md`. |
| `guerra-fria-descolonizacion/` | `./guerras-mundiales/` | Nodo `H29` de `troncos.md`. |
| `globalizacion-era-digital/` | `./guerra-fria-descolonizacion/` | Nodo `H30` de `troncos.md`. Alimenta `../informatica/revolucion-informatica/` y `../ciudadania-digital/desinformacion-en-red/`. |
| `internet-redes-globalizacion-digital/` | `./electrificacion-fabrica-hogar/`, `./globalizacion-era-digital/` | Nodo `TEC3` de `troncos.md` (tercer eslabón del hilo tecnológico, cierra la cadena piedra→metal→imprenta→vapor/electricidad→cables submarinos). |
| `huella-humana-en-el-clima/` | `./revolucion-industrial/` | Nodo `AM4` de `troncos.md` (`H24 → AM4`). Sin tag de materia ajena — queda en Historia Profunda junto a `./cambio-climatico-linea-de-base/` (`AM3`), su antecedente directo. |
