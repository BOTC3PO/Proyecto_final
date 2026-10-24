# Electrónica — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Fuente: el Tronco 17 (Electrónica) en `../../troncos.md` (diagrama mermaid, flechas `A --> B`).
Las dependencias con `../` apuntan a otra materia (documentación; el
script de `examen-jefe` las ignora). Se usa para ordenar los temas por
conocimientos previos al armar los clusters de examen-jefe.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `componentes-resistencia-capacitor-diodo-transistor/` | `../fisica/circuitos-mixtos/` | Nodos `EL1a`-`EL1d` (resistencia, capacitor, diodo, transistor), fusionados en una carpeta: `FIS9 --> EL1x`. Raíz dentro de Electrónica. |
| `circuitos-y-leyes-de-kirchhoff/` | `componentes-resistencia-capacitor-diodo-transistor/` | Nodo `EL2` (`EL1a-d --> EL2`). |
| `logica-digital-puertas-and-or-not/` | `circuitos-y-leyes-de-kirchhoff/`, `../informatica/algebra-booleana/` | Nodo `EL3` (`EL2 --> EL3`, `I2 --> EL3`). |
| `microcontroladores-y-microprocesadores/` | `logica-digital-puertas-and-or-not/`, `../informatica/estructuras-de-control-bucles/` | Nodo `EL4` (`EL3 --> EL4`, `IN4 --> EL4`). |
| `sensores-y-actuadores/` | `microcontroladores-y-microprocesadores/` | Nodo `EL5` (`EL4 --> EL5`). |
| `divisor-de-tension-y-codigo-de-colores/` | `componentes-resistencia-capacitor-diodo-transistor/`, `../fisica/ley-de-ohm/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`, sin ID en `troncos.md`). Amplía `componentes-.../` (que describe la resistencia sin valores) con código de colores, series y divisor de tensión. |
| `capacitor-rc-carga-y-descarga/` | `componentes-resistencia-capacitor-diodo-transistor/`, `../matematica/ecuaciones-exponenciales-logaritmicas/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`, sin ID en `troncos.md`). La carga y descarga de un capacitor es una exponencial; se usa la constante de tiempo RC. |
| `inductores-y-bobinas/` | `../fisica/induccion-electromagnetica-faraday-lenz/`, `circuitos-y-leyes-de-kirchhoff/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`, sin ID en `troncos.md`). La autoinducción es la ley de Faraday-Lenz aplicada a un circuito. |
| `diodo-polarizacion-rectificacion-y-fuentes/` | `componentes-resistencia-capacitor-diodo-transistor/`, `capacitor-rc-carga-y-descarga/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`, sin ID en `troncos.md`). El filtro de una fuente es un capacitor que se descarga en una carga (decisión de Claude: se suma el prerrequisito de RC al del plan). |
| `transistor-como-interruptor-y-amplificador/` | `componentes-resistencia-capacitor-diodo-transistor/`, `divisor-de-tension-y-codigo-de-colores/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`, sin ID en `troncos.md`). La polarización del transistor usa divisores y resistencias de base. |
| `amplificador-operacional/` | `transistor-como-interruptor-y-amplificador/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`, sin ID en `troncos.md`). Los amplificadores operacionales se construyen con transistores; conceptos de ganancia. |
| `senales-analogicas-y-digitales-adc-dac/` | `sensores-y-actuadores/`, `logica-digital-puertas-and-or-not/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`, sin ID en `troncos.md`). Cierra el ciclo sensor → señal analógica → bits. |
| `compuertas-nand-nor-xor-y-universalidad/` | `logica-digital-puertas-and-or-not/`, `../informatica/algebra-booleana/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`, sin ID en `troncos.md`). Amplía AND/OR/NOT con las compuertas derivadas y De Morgan. |
| `logica-combinacional-sumadores-multiplexores/` | `compuertas-nand-nor-xor-y-universalidad/`, `../informatica/sistemas-numeracion/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`, sin ID en `troncos.md`). Los sumadores operan sobre números binarios. |
| `logica-secuencial-flip-flops-y-contadores/` | `logica-combinacional-sumadores-multiplexores/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`, sin ID en `troncos.md`). La lógica secuencial agrega memoria a las compuertas combinacionales. |
| `temporizador-555-y-osciladores/` | `capacitor-rc-carga-y-descarga/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`, sin ID en `troncos.md`). Los tiempos del 555 salen de la carga de un capacitor a través de resistencias. |
| `microcontrolador-entradas-y-salidas-digitales/` | `microcontroladores-y-microprocesadores/`, `../informatica/estructuras-de-control-bucles/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`, sin ID en `troncos.md`). Usar pines digitales requiere un programa con bucles y condiciones. |
| `comunicacion-serie-uart-i2c-spi/` | `microcontrolador-entradas-y-salidas-digitales/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`, sin ID en `troncos.md`). Los protocolos serie se implementan sobre pines digitales. |
| `instrumentos-de-medicion-multimetro-y-osciloscopio/` | `circuitos-y-leyes-de-kirchhoff/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`, sin ID en `troncos.md`). Medir tensión y corriente supone entender serie, paralelo y los nodos. |
| `prototipado-protoboard-soldadura-y-seguridad/` | `instrumentos-de-medicion-multimetro-y-osciloscopio/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`, sin ID en `troncos.md`). Se arma un circuito y se lo verifica con instrumentos. |
