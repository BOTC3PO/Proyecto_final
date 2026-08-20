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
| `historia-y-evolucion-de-los-sistemas-operativos/` | `../historia-profunda/revolucion-informatica/` (si existe; si no, referenciar nodo `I3` de `troncos.md`) | Nodo `SO0` (`I3P --> SO0`). Fuente: guía de Luis Castellanos basada en Tanenbaum. |
| `arranque-de-la-computadora-boot/` | `historia-y-evolucion-de-los-sistemas-operativos/` | Nodo `SO1B` (`SO0 --> SO1B --> SO1`). |
| `comunicacion-entre-procesos/` | `proceso-programa-en-ejecucion/` | Nodo `SO1C` (`SO1 --> SO1C`). |
| `subsistema-de-entrada-y-salida/` | `proceso-programa-en-ejecucion/` | Nodo `SOES1` (`SO1 --> SOES1`), hermano de `SO1C`. |
| `paginacion/` | `memoria-asignacion-memoria-virtual/` | Nodo `SO2a` (`SO2 --> SO2a`). `SO2` era nodo lumped, se abre en 2 esquemas reales. |
| `segmentacion/` | `memoria-asignacion-memoria-virtual/` | Nodo `SO2b` (`SO2 --> SO2b`), hermano de `SO2a`. |
| `interrupciones/` | `planificacion-de-procesos/` | Nodo `SO3B` (`SO3 --> SO3B`). Mecanismo real detrás del planificador. |
| `sistema-de-archivos-por-bitacora/` | `sistema-de-archivos/` | Nodo `SO4B` (`SO4 --> SO4B`). Journaling. |
| `tipos-de-so-por-dispositivo/` | `historia-y-evolucion-de-los-sistemas-operativos/` | Nodo `SO7` (`SO0 --> SO7`). Mainframe/servidor/PC/tiempo real/embebido. |
| `tipos-de-licencias-de-software/` | `../ingenieria/control-de-versiones/` (si existe; si no, referenciar `ISW3`) | Nodo `LIC1` (`ISW3 --> LIC1`). Propietaria, libre/copyleft, permisiva, Creative Commons — separado de la ideología de "software libre" (ya evaluada y descartada en la ronda de neutralidad v2.9.4), es el dato práctico de qué licencia elegir al publicar código. |
