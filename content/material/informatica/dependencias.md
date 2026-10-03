# Informática — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Quinta carpeta de materia (después de `geografia/`), creada en esta
sesión: los nodos `E11`/`E12` de `troncos.md` están tageados
explícitamente `(Informática)` en `lista-temas-plana.md` — mismo
criterio ya aplicado a `geografia/`.

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su
fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `unidades-almacenamiento/` | `../matematica/notacion-cientifica/` | Nodo `E11` de `troncos.md` (`N13 --> E11`, con `N13` = Notación científica). Investigado con búsqueda web agosto 2026 (Wikipedia ES, Geeknetic) — estándar IEC de diciembre 1998 (prefijos kibi/mebi/gibi para potencias de 1024, distintos de kilo/mega/giga del sistema decimal, potencias de 1000); explica por qué un disco anunciado en GB por el fabricante muestra menos capacidad en el sistema operativo. |
| `sistemas-numeracion/` | `../matematica/potencias/` | Nodo `E12` de `troncos.md` (`N12 --> E12`, con `N12` = Potencias). Es prerrequisito real, ya usado en otra parte del MAPA, de `IN2` (Informática, otro tronco) y de `CPU: unidad de control y ALU` (Arquitectura de Computadoras) — no se construyen acá, sólo se deja la base (binario/hexadecimal) que esos temas van a reusar. No hizo falta research web: es matemática de bases numéricas estable, no un dato regulado. |
| `complejidad-asintotica/` | `../matematica/familias-exponencial-logaritmica/` | Nodo `I1` de `troncos.md` (`A11 --> I1`, puente Álgebra→Informática). La jerarquía de crecimiento (O(1) < O(log n) < O(n) < O(n²) < O(2ⁿ)) reusa directo la comparación exponencial-vs-lineal-vs-logarítmica ya establecida en `A11` — no hace falta más matemática nueva, sólo el vocabulario y la notación de Big O. |
| `algebra-booleana/` | `../filosofia/validez-de-un-razonamiento/` | Nodo `I2` de `troncos.md` (`FI2 → I2`), cierre del "cruce inesperado" Lengua→Filosofía→Informática (v2.6): `Detectar falacias` (lenguaje natural) → `Lógica proposicional`+`Validez de un razonamiento` (formalización filosófica) → `Álgebra booleana` (implementación binaria: AND/OR/NOT como circuitos/código). Es la misma lógica de conectores y tablas de verdad ya vista en Filosofía, aplicada ahora a valores binarios (0/1, verdadero/falso) en vez de proposiciones en lenguaje natural. |

### Educación Tecnológica + Sistemas Operativos + Licencias (2026-08-13)

13 nodos que sumó `troncos.md` v2.9.6/2026-08-13. `teoria.md` con qwen,
"revisión pendiente".

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `que-es-la-tecnica-y-la-tecnologia/` | *(ninguna — nodo raíz de 10.0)* | Nodo `TEC0a`. Fundamento de Educación Tecnológica, materia que no existía en absoluto (0 resultados en grep). Fuente: `TECNOLOGIA 1 DE SANTILLANA`. |
| `medios-tecnicos-extension-capacidades-humanas/` | `que-es-la-tecnica-y-la-tecnologia/` | Nodo `TEC0b` (`TEC0a --> TEC0b`). |
| `procesos-tecnicos-artesanales-e-industriales/` | `medios-tecnicos-extension-capacidades-humanas/` | Nodo `TEC0c` (`TEC0b --> TEC0c`), alimenta a `IN1`/`ING1`. |
| `historia-y-evolucion-de-los-sistemas-operativos/` | `revolucion-informatica/` | Nodo `SO0` (`I3P --> SO0`). *Corregido 2026-10-03*: la fila citaba `../historia-profunda/revolucion-informatica/`, que no existe; el tema `I3` vive en esta misma carpeta (`informatica/revolucion-informatica/`). Fuente: guía de Luis Castellanos basada en Tanenbaum. |
| `arranque-de-la-computadora-boot/` | `historia-y-evolucion-de-los-sistemas-operativos/` | Nodo `SO1B` (`SO0 --> SO1B --> SO1`). |
| `comunicacion-entre-procesos/` | `proceso-programa-en-ejecucion/` | Nodo `SO1C` (`SO1 --> SO1C`). |
| `subsistema-de-entrada-y-salida/` | `proceso-programa-en-ejecucion/` | Nodo `SOES1` (`SO1 --> SOES1`), hermano de `SO1C`. |
| `paginacion/` | `memoria-asignacion-memoria-virtual/` | Nodo `SO2a` (`SO2 --> SO2a`). `SO2` era nodo lumped, se abre en 2 esquemas reales. |
| `segmentacion/` | `memoria-asignacion-memoria-virtual/` | Nodo `SO2b` (`SO2 --> SO2b`), hermano de `SO2a`. |
| `interrupciones/` | `planificacion-de-procesos/` | Nodo `SO3B` (`SO3 --> SO3B`). Mecanismo real detrás del planificador. |
| `sistema-de-archivos-por-bitacora/` | `sistema-de-archivos/` | Nodo `SO4B` (`SO4 --> SO4B`). Journaling. |
| `tipos-de-so-por-dispositivo/` | `historia-y-evolucion-de-los-sistemas-operativos/` | Nodo `SO7` (`SO0 --> SO7`). Mainframe/servidor/PC/tiempo real/embebido. |
| `tipos-de-licencias-de-software/` | `control-de-versiones/` | *Corregido 2026-10-03*: la fila citaba `../ingenieria/control-de-versiones/`, que no existe; `ISW3` vive en esta carpeta. Nodo `LIC1` (`ISW3 --> LIC1`). Propietaria, libre/copyleft, permisiva, Creative Commons — separado de la ideología de "software libre" (ya evaluada y descartada en la ronda de neutralidad v2.9.4), es el dato práctico de qué licencia elegir al publicar código. |

### Completado de las filas faltantes (2026-10-03)

Las filas que faltaban para que el orden por conocimientos previos (clusters de examen-jefe) no caiga en orden alfabético. Nodos sacados de los diagramas de `troncos.md` (Tronco 10, 10.a-10.f); sólo prerrequisitos directos. Cuando un nodo intermedio del MAPA no tiene carpeta propia (`IN10` Redes, `IN5C` Punteros), la fila se cuelga del prerrequisito del nodo ausente (marcado en "Por qué").

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `revolucion-informatica/` | (ninguna — nodo raíz dentro de la materia) | Nodo `I3` (`H30 --> I3`): cuelga de Historia, no de otro tema de Informática. |
| `algoritmo-secuencia-de-pasos/` | `procesos-tecnicos-artesanales-e-industriales/`, `ciclo-de-instruccion-fetch-decode-execute/` | Nodo `IN1`: `TEC0c --> IN1P` y `ARQ4c --> IN1P` (el ciclo buscar-decodificar-ejecutar es el modelo físico de "secuencia de pasos"). |
| `variables-y-tipos-de-dato/` | `algoritmo-secuencia-de-pasos/`, `sistemas-numeracion/` | Nodo `IN2` (`IN1 --> IN2`, `E12P --> IN2`: cómo se guarda un dato en binario). |
| `estructuras-de-control-condicionales/` | `variables-y-tipos-de-dato/`, `algebra-booleana/` | Nodo `IN3` (`IN2 --> IN3`, `I2P --> IN3`: un `if` es álgebra booleana). |
| `estructuras-de-control-bucles/` | `estructuras-de-control-condicionales/` | Nodo `IN4` (`IN3 --> IN4`). |
| `funciones-y-modularidad/` | `estructuras-de-control-bucles/` | Nodo `IN5` (`IN4 --> IN5`). |
| `poo-clases-y-objetos/` | `funciones-y-modularidad/` | Nodo `IN5B` (`IN5 --> IN5B`). |
| `estructuras-de-datos-listas-pilas-colas/` | `funciones-y-modularidad/`, `complejidad-asintotica/` | Nodo `IN6` (`IN5 --> IN6a/b/c --> IN6`, `I1P --> IN6`). Una carpeta cubre `IN6a`, `IN6b`, `IN6c` y la síntesis `IN6`. |
| `recursividad/` | `estructuras-de-datos-listas-pilas-colas/` | Nodo `IN7` (`IN6 --> IN7`). |
| `algoritmos-busqueda-ordenamiento/` | `estructuras-de-datos-listas-pilas-colas/`, `complejidad-asintotica/` | Nodo `IN6B` (`IN6 --> IN6B`, `I1P --> IN6B`). |
| `ofimatica-planilla-de-calculo/` | `../matematica/leer-una-tabla/`, `../economia/presupuesto-administrativo/` | Nodo `OFIM1` (`D1P --> OFIM1`, `ADM3P --> OFIM1`). Sólo prerrequisitos de otras materias; sin dependencia dentro de Informática. |
| `archivos-y-persistencia/` | `estructuras-de-datos-listas-pilas-colas/` | Nodo `IN8` (`IN6 --> IN8`). |
| `modelo-relacional-tabla-registro-clave-primaria/` | `archivos-y-persistencia/`, `../matematica/conjuntos-pertenencia-e-inclusion/` | Nodos `IN9` + `BD2a-c` (`IN8 --> IN9`, `CJ2P --> IN9`; tabla, registro y clave primaria viven en una sola carpeta). |
| `relaciones-y-claves-foraneas/` | `modelo-relacional-tabla-registro-clave-primaria/` | Nodo `BD3` (`BD2c --> BD3`). |
| `normalizacion-bases-datos/` | `relaciones-y-claves-foraneas/` | Nodo `BD4` (`BD3 --> BD4`). |
| `sql-consultas-joins-agregaciones/` | `modelo-relacional-tabla-registro-clave-primaria/` | Nodos `BD5a-c` (`BD2c --> BD5a --> BD5b --> BD5c`, una sola carpeta). El MAPA lo cuelga de clave primaria, no de claves foráneas, aunque los joins las usan; se respeta el MAPA. |
| `transacciones-acid/` | `sql-consultas-joins-agregaciones/` | Nodo `BD6` (`BD5c --> BD6`). |
| `direccionamiento-ip-dns/` | `modelo-relacional-tabla-registro-clave-primaria/` | Nodo `RED1` (`IN10 --> RED1`). *Deducido acá, no está en el MAPA como carpeta*: `IN10` (Redes: protocolos y cliente-servidor) no tiene carpeta propia; se cuelga de su prerrequisito `IN9` (`IN9 --> IN10`). |
| `protocolo-http-peticion-respuesta/` | `direccionamiento-ip-dns/` | Nodo `RED2` (`RED1 --> RED2`). |
| `tcp-ip-capas-enrutamiento/` | `protocolo-http-peticion-respuesta/` | Nodo `RED3` (`RED2 --> RED3`). |
| `seguridad-de-red-firewall-vpn-cifrado/` | `tcp-ip-capas-enrutamiento/` | Nodos `RED4a-c` (`RED3 --> RED4a/b/c`; firewall, VPN y cifrado en tránsito en una sola carpeta). |
| `criptografia-clave-simetrica-asimetrica-hash/` | `modelo-relacional-tabla-registro-clave-primaria/` | Nodo `CRIPTO1` (`IN10 --> CRIPTO1`). *Colapsado*: `IN10` no tiene carpeta, se usa su prerrequisito `IN9`, igual que en `RED1`. |
| `seguridad-informatica/` | `criptografia-clave-simetrica-asimetrica-hash/`, `seguridad-de-red-firewall-vpn-cifrado/` | Nodo `IN11` (`CRIPTO1 --> IN11`, `RED4a-c --> IN11P`). |
| `inteligencia-artificial-reglas-a-aprendizaje/` | `estructuras-de-datos-listas-pilas-colas/`, `../matematica/regresion-lineal/`, `../matematica/matrices/` | Nodo `IN12` (`IN6 --> IN12`, `D15P --> IN12`, `AL1P --> IN12`). |
| `etica-de-la-ia-sesgo-privacidad/` | `inteligencia-artificial-reglas-a-aprendizaje/` | Nodo `IN12B` (`IN12 --> IN12B`). |
| `proceso-programa-en-ejecucion/` | `arranque-de-la-computadora-boot/`, `estructuras-de-datos-listas-pilas-colas/` | Nodo `SO1` (`SO1B --> SO1`, `IN6P --> SO1`). |
| `memoria-asignacion-memoria-virtual/` | `proceso-programa-en-ejecucion/`, `memoria-ram-cache-jerarquia/` | Nodo `SO2` (`SO1 --> SO2`, `ARQ2c --> SO2P`). |
| `planificacion-de-procesos/` | `proceso-programa-en-ejecucion/` | Nodo `SO3` (`SO1 --> SO3`). |
| `sistema-de-archivos/` | `archivos-y-persistencia/` | Nodo `SO4` (`IN8P --> SO4`). |
| `permisos-y-usuarios/` | `sistema-de-archivos/` | Nodo `SO5` (`SO4 --> SO5`). |
| `virtualizacion-maquina-virtual-contenedor/` | `planificacion-de-procesos/` | Nodo `SO6` (`SO3 --> SO6`). |
| `requisitos-funcionales-no-funcionales/` | `funciones-y-modularidad/`, `../resolucion-problemas/detectar-el-problema/` | Nodo `ISW1` (`IN5P --> ISW1`, `RP1P --> ISW1`). |
| `diseno-y-arquitectura-de-software/` | `requisitos-funcionales-no-funcionales/`, `poo-clases-y-objetos/` | Nodo `ISW2` (`ISW1 --> ISW2`, `IN5BP --> ISW2`). |
| `control-de-versiones/` | `diseno-y-arquitectura-de-software/` | Nodo `ISW3` (`ISW2 --> ISW3`). |
| `pruebas-unitarias-integracion/` | `control-de-versiones/` | Nodo `ISW4` (`ISW3 --> ISW4`). |
| `mantenimiento-y-deuda-tecnica/` | `pruebas-unitarias-integracion/` | Nodo `ISW5` (`ISW4 --> ISW5`). |
| `patrones-y-buenas-practicas/` | `diseno-y-arquitectura-de-software/` | Nodo `ISW6` (`ISW2 --> ISW6`). |
| `cpu-unidad-de-control-y-alu/` | `sistemas-numeracion/` | Nodo `ARQ1` (`E12P --> ARQ1`). |
| `memoria-ram-cache-jerarquia/` | `cpu-unidad-de-control-y-alu/` | Nodos `ARQ2a-c` (`ARQ1 --> ARQ2a/b --> ARQ2c`, RAM, caché y jerarquía en una sola carpeta). |
| `buses-y-entrada-salida/` | `memoria-ram-cache-jerarquia/` | Nodo `ARQ3` (`ARQ2c --> ARQ3`). |
| `ciclo-de-instruccion-fetch-decode-execute/` | `cpu-unidad-de-control-y-alu/` | Nodos `ARQ4a-c` (`ARQ1 --> ARQ4a --> ARQ4b --> ARQ4c`, una sola carpeta). |
| `almacenamiento-volatil-vs-no-volatil/` | `memoria-ram-cache-jerarquia/` | Nodo `ARQ5` (`ARQ2c --> ARQ5`). |
