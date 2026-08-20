# Química — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Sexta carpeta de materia, creada en esta sesión: el nodo `E13` de
`troncos.md` está tageado explícitamente `(Química)` en
`lista-temas-plana.md` — mismo criterio ya aplicado a `geografia/` e
`informatica/`. Distinta de la `reaccion-maillard/` de Vida Cotidiana
(esa quedó ahí por colgar de un nodo de Vida Cotidiana, `cruce Química`
sin tag propio — ver `../vida-cotidiana/dependencias.md`); acá el nodo
sí tiene tag `(Química)` puro, y no cuelga de ningún nodo de otra
materia.

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su
fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `ph-poh/` | `../matematica/logaritmos/` | Nodo `E13` de `troncos.md` (`N15 --> E13`, con `N15` = Logaritmos). Confirmado también por la tabla de cruces de `troncos.md` ("pH y pOH | Logaritmos | Matemáticas"). Contenido estable de currícula (fórmulas y escala 0-14), no hizo falta research web. |
| `balanceo-ecuaciones/` | `../matematica/sistemas-dos-ecuaciones/` | Nodo `Q1` de `troncos.md` (`A5 --> Q1`, puente Álgebra→Química). El método algebraico de balanceo (asignar una variable a cada coeficiente y plantear un sistema, una ecuación por elemento) es literalmente aplicar `sistemas-dos-ecuaciones/` a química. Reacciones usadas son de currícula estable (síntesis de agua, amoníaco, combustión de metano, óxido de hierro, etc.), no hizo falta research web. |
| `densidad/` | `../matematica/volumen-y-capacidad/` | Nodo `Q2` de `troncos.md` (`M4 --> Q2`). Tag doble en `lista-temas-plana.md`, `"Densidad (Química / Física)"` (y en otra parte del diagrama, `"(Geometría / Química)"`) — *decisión de Claude*: se armó en `quimica/` y no en `fisica/`, siguiendo el prefijo `Q` del propio ID del nodo (igual criterio que agrupa `Q3`/`Q4`/`QKP`). La densidad = masa/volumen depende directo de `volumen-y-capacidad/` (ya construido); la continuación hacia presión hidrostática y flotación (Tronco 9.f de `troncos.md`, `Q2 → FLU1`) es Física pura, pero esa rama todavía no está construida en `fisica/` — queda pendiente para cuando se aborde ese tronco. |
| `concentracion-de-una-solucion/` | `../matematica/volumen-y-capacidad/` | Nodo `Q3` de `troncos.md` (`M4 --> Q3`). La concentración (soluto por volumen de solución) es la misma idea de "cantidad por unidad de volumen" que la densidad, reusando directo el concepto de volumen ya construido. |
| `medicion-de-laboratorio/` | `../matematica/cifras-significativas-y-error/` | Nodo `Q4` de `troncos.md` (`M5 --> Q4`, sin tag de materia explícito en `lista-temas-plana.md`; se agrupó en `quimica/` por el prefijo `Q` del ID). Aplica cifras significativas y error de medición al contexto concreto de instrumentos de laboratorio (probeta, balanza, bureta) — no repite el cálculo de `cifras-significativas-y-error/`, explica el POR QUÉ y CÓMO se usa en instrumentos reales. |
| `estequiometria/` | `../matematica/analisis-dimensional/` | Nodo `QKP` de `troncos.md` (`M11 --> QKP`). El método de conversión de unidades encadenadas (factor-label / análisis dimensional) es exactamente la técnica que usa la estequiometría para pasar de gramos a moles a moléculas. |
| `estados-y-cambios/` | (ninguna) | Nodo `QA` de `troncos.md`, raíz del Tronco 7 ("Materia, energía y vida") — no tiene flecha entrante en el grafo, es el punto de partida de toda la química. "Estados" y "cambios de estado" no se separan en dos carpetas (Paso 2 del `PROCEDIMIENTO.md`): son dos caras de la misma cosa, no habilidades independientes. |
| `mezclas-metodos-separacion/` | `./estados-y-cambios/` | Nodo `QB` de `troncos.md` (`QA --> QB`). Distinguir mezcla (homogénea/heterogénea) de sustancia pura requiere ya tener claro qué es un estado de la materia. |
| `modelos-atomicos/` | `./mezclas-metodos-separacion/` | Nodos `QCMa→QCMb→QCMc→QCMd→QCM` de `troncos.md` (`QB --> QCMa`). Un solo módulo (no 4 carpetas): es la misma secuencia histórica enseñada como una unidad narrativa (Dalton→Thomson→Rutherford→Bohr→síntesis), con `tipo: ordenar` para la secuencia — *decisión de Claude*, el propio `troncos.md` ya la describe como "el mejor caso de estudio... un modelo científico real que se corrigió cuatro veces". |
| `atomo-particulas-subatomicas/` | `./modelos-atomicos/` | Nodo `QC` de `troncos.md` (`QCM --> QC`). El átomo con protón/neutrón/electrón ya resuelto es el resultado final de la síntesis de modelos atómicos — hace falta esa síntesis antes de nombrar las partículas sin volver a explicar de dónde salen. |
| `numero-atomico-masico/` | `./atomo-particulas-subatomicas/` | Nodo `QD` de `troncos.md` (`QC --> QD`). Z y A son directamente conteos de protones/neutrones/electrones — no tienen sentido sin ya saber qué es cada partícula. |
| `configuracion-electronica/` | `./numero-atomico-masico/` | Nodo `QE` de `troncos.md` (`QD --> QE`). Distribuir electrones en niveles/subniveles requiere saber cuántos electrones tiene el átomo, que sale directo de Z. |
| `tabla-periodica-tendencias/` | `./configuracion-electronica/` | Nodo `QF` de `troncos.md` (`QE --> QF`). Los grupos de la tabla son directamente los elementos con la misma cantidad de electrones de valencia — sin configuración electrónica, la tabla es sólo una lista para memorizar sin explicación. |
| `enlace-quimico-polaridad/` | `./tabla-periodica-tendencias/` | Nodo `QG` de `troncos.md` (`QF --> QG`). Si un enlace es iónico o covalente (y qué tan polar) se decide comparando la electronegatividad de los dos átomos — dato que sale directo de la tendencia periódica. |
| `geometria-molecular-vsepr/` | `./enlace-quimico-polaridad/` | Nodo `QG2` de `troncos.md` (`QG --> QG2`). La geometría (y si la molécula termina siendo polar en conjunto, no sólo el enlace) es el paso siguiente a saber que un enlace individual es polar. |
| `nomenclatura-compuestos/` | `./enlace-quimico-polaridad/` | Nodo `QH` de `troncos.md` (`QG --> QH`, rama paralela a `QG2`, no depende de geometría). Nombrar un compuesto según reglas fijas requiere ya saber si el enlace es iónico o covalente (cambia el sistema de nomenclatura que aplica). |
| `mol-masa-molar/` | `./nomenclatura-compuestos/`, `../balanceo-ecuaciones/` | Nodo `QJ` de `troncos.md` (`QH --> QI --> QJ`; `QI` = `../balanceo-ecuaciones/`, ya construido). Para calcular masa molar hace falta poder nombrar y escribir la fórmula de un compuesto (nomenclatura) y saber leer una ecuación balanceada. |
| `reactivo-limitante-rendimiento/` | `../estequiometria/` | Nodo `QL` de `troncos.md` (`QK --> QL`; `QK` = `../estequiometria/`, ya construido). Encontrar qué reactivo "se termina primero" y calcular rendimiento son la aplicación siguiente a ya saber convertir gramos↔moles↔moles de otra sustancia vía la ecuación balanceada. |
| `dilucion-soluciones/` | `../concentracion-de-una-solucion/` | Nodo `QDIL` de `troncos.md` (`QM --> QDIL`; `QM` = `../concentracion-de-una-solucion/`, ya construido). C₁V₁=C₂V₂ es una aplicación directa del concepto de concentración ya visto — diluir es sólo agregar solvente sin agregar soluto. |
| `propiedades-coligativas/` | `../concentracion-de-una-solucion/` | Nodos `QCOLIGa/b/c` de `troncos.md` (`QM --> QCOLIGa/b/c`). Un solo módulo (no 3 carpetas): descenso crioscópico, ascenso ebulloscópico y presión osmótica son la misma idea (dependen sólo de la CANTIDAD de partículas de soluto disueltas, no de qué soluto es) aplicada a 3 propiedades físicas distintas — *decisión de Claude*, mismo criterio que agrupó los modelos atómicos. |
| `gases-ideales/` | `./mol-masa-molar/`, `../estados-y-cambios/` | Nodo `QZ1` de `troncos.md` (`QJ --> QZ1`, `QA --> QZ1`). `PV=nRT` usa `n` (moles) directo, y un gas es antes que nada un estado de la materia (ver `../estados-y-cambios/`). |
| `presiones-parciales/` | `./gases-ideales/` | Nodo `QDALTON` de `troncos.md` (`QZ1 --> QDALTON`). La ley de Dalton de presiones parciales es `PV=nRT` aplicado a una mezcla de gases, componente por componente. |
| `termoquimica/` | `../balanceo-ecuaciones/`, `./gases-ideales/` | Nodo `QO` de `troncos.md` (`QI --> QO`, `QZ1 --> QO`; `QI` = `../balanceo-ecuaciones/`, ya construido). No hay transferencia de calor real de una reacción sin poder leer la ecuación balanceada, ni sin la noción de volumen/presión de gases si hay gases involucrados. |
| `equilibrio-quimico-kc/` | `../balanceo-ecuaciones/` | Nodo `QP` de `troncos.md` (`QI --> QP`). Kc se calcula directo de los coeficientes de la ecuación balanceada — sin eso no hay exponentes que poner. |
| `cinetica-reaccion/` | `./equilibrio-quimico-kc/` | Nodo `QQ` de `troncos.md` (`QP --> QQ`). La energía de activación y la velocidad de reacción se entienden mejor ya sabiendo que una reacción es reversible y llega a un equilibrio — la cinética explica QUÉ TAN RÁPIDO se llega ahí. |
| `equilibrio-solubilidad-ksp/` | `./equilibrio-quimico-kc/` | Nodo `QKSP` de `troncos.md` (`QP --> QKSP`). Ksp es literalmente un Kc particular (el de una sal disolviéndose) — mismo concepto de constante de equilibrio, aplicado a un caso especial. |
| `energia-libre-gibbs/` | `./termoquimica/`, `./equilibrio-quimico-kc/` | Nodo `QGIBBS` de `troncos.md` (`QO --> QGIBBS`, `QP --> QGIBBS`). ΔG combina directo el ΔH de termoquímica con la entropía, y se conecta con Kc (ΔG=0 en el equilibrio) — no se entiende ninguna de las dos piezas sin haber visto antes esos dos temas. |
| `tipos-reacciones-quimicas/` | `../balanceo-ecuaciones/` | Nodos `QTIPOSa/b/c` de `troncos.md` (`QI --> QTIPOSa/b/c`: síntesis, descomposición, desplazamiento). Un solo módulo (no 3 carpetas): son 3 patrones de reconocimiento sobre la misma habilidad ya construida (leer y balancear ecuaciones), no 3 temas independientes — mismo criterio que agrupó los modelos atómicos y las propiedades coligativas. |
| `carbono-tetravalencia-cadenas/` | `./enlace-quimico-polaridad/` | Nodo `QR` de `troncos.md` (`QG --> QR`). Por qué el carbono forma cadenas largas es directamente una consecuencia de su tipo de enlace (covalente, tetravalente) — ya construido. |
| `hidrocarburos-alcanos-alquenos-alquinos/` | `./carbono-tetravalencia-cadenas/` | Nodos `QSa/b/c` de `troncos.md` (`QR --> QSa/b/c`). Un solo módulo (no 3 carpetas): son la misma clasificación (según tipo de enlace C-C) aplicada 3 veces, mismo criterio que agrupó modelos atómicos y tipos de reacción. |
| `grupos-funcionales/` | `./hidrocarburos-alcanos-alquenos-alquinos/` | Nodo `QT` de `troncos.md` (`QSa/b/c --> QT`). Los grupos funcionales son sustituciones sobre el esqueleto de hidrocarburo ya conocido — hace falta saber leer esa cadena antes de identificar qué grupo "cuelga" de ella. |
| `biomoleculas-glucidos-lipidos-proteinas/` | `./grupos-funcionales/` | Nodos `QUa/b/c` de `troncos.md` (`QT --> QUa/b/c`: glúcidos, lípidos, proteínas). Un solo módulo (no 3 carpetas), mismo criterio que agrupó hidrocarburos. Se reconocen por sus grupos funcionales (glúcidos=hidroxilo+carbonilo, proteínas=amino+carboxilo) — no tiene sentido sin ese tema. **No incluye ácidos nucleicos** (`QUd`, existe en el grafo pero no fue pedido) — se puede agregar aparte si hace falta. |
| `polimeros-naturales-sinteticos/` | `./grupos-funcionales/` | Nodo `QV` de `troncos.md` (`QT --> QV`). Un polímero es una cadena repetida de un grupo funcional (monómero) — mismo prerrequisito directo que biomoléculas, rama paralela (no depende de `biomoleculas-glucidos-lipidos-proteinas/`, aunque los cita como ejemplos de polímero natural). |
| `oxidacion-reduccion/` | `./enlace-quimico-polaridad/` | Nodo `QW` de `troncos.md` (`QG --> QW`). El número de oxidación (ya usado en `../nomenclatura-compuestos/`) se define a partir de la electronegatividad — mismo prerrequisito directo que carbono y biomoléculas. |
| `pilas-celdas-galvanicas/` | `./oxidacion-reduccion/` | Nodo `QX` de `troncos.md` (`QW --> QX`). Una pila ES una redox espontánea aprovechada — no tiene sentido sin saber qué es oxidarse/reducirse. |
| `electrolisis/` | `./oxidacion-reduccion/` | Nodo `QY` de `troncos.md` (`QW --> QY`, rama paralela a `QX`, no depende de pilas). Es el proceso "espejo": redox forzada con corriente en vez de redox espontánea generando corriente. |
| `seguridad-laboratorio/` | `../estados-y-cambios/`, `../medicion-de-laboratorio/` | Nodo `QSAFE` de `troncos.md` (`QA --> QSAFE`, `M5P --> QSAFE`; `M5P` = `../medicion-de-laboratorio/`, ya construido). Tiene sentido recién cuando ya se manipulan sustancias (estados de la materia) e instrumentos de laboratorio reales. |

### Bloque 2026-08-13 (`QNANO`, `QSUPERCOND`, `QPETROLEO`, `QANALIT`, `QATMOS`)

5 nodos de cierre de unidad que sumó `troncos.md` v2.9.6 (confirmado sin
pared contra Chang McGraw-Hill). `teoria.md` con qwen, "revisión
pendiente".

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `nanotecnologia/` | `./geometria-molecular-vsepr/` | Nodo `QNANO` (`QG2 --> QNANO`). Misma estructura molecular a escala nanométrica. |
| `superconductividad/` | `./pilas-y-celdas-galvanicas/` | Nodo `QSUPERCOND` (`QX --> QSUPERCOND`). Nodo más cercano de conductividad eléctrica ya existente. |
| `petroleo-como-recurso-energetico/` | `./carbono-tetravalencia-cadenas/` | Nodo `QPETROLEO` (`QR --> QPETROLEO`). Distinto del ángulo molecular de los hidrocarburos y del territorial de `../geografia/mineria-e-hidrocarburos-en-argentina/`. |
| `quimica-analitica/` | `./acido-base-ph/` | Nodo `QANALIT` (`QN --> QANALIT`). Titulación, espectroscopía, cromatografía. |
| `quimica-de-la-atmosfera/` | `./acido-base-ph/`, `../fisica/presion-atmosferica/` | Nodo `QATMOS` (`QN --> QATMOS`, `MET1P --> QATMOS`). Ozono, lluvia ácida, esmog — distinto del cambio climático genérico. |

**Nota sobre nodos legacy duplicados**: 4 temas de esta lista ya estaban
construidos con IDs de nodo *distintos* (creados antes de que existiera
el Tronco 7 completo, colgando de Matemática): `balanceo-ecuaciones/`
(`Q1`) = mismo contenido que `QI` "Ecuación química y balanceo";
`concentracion-de-una-solucion/` (`Q3`) = mismo contenido que `QM`
"Soluciones y concentración"; `estequiometria/` (`QKP`) = mismo
contenido que `QK` "Estequiometría"; `ph-poh/` (`E13`) = mismo contenido
que `QN` "Ácido-base y pH". No se duplican — se reusan tal cual para
esos 4 nodos del Tronco 7.
