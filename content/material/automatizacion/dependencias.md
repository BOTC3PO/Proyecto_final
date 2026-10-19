# Automatización — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Fuente: el Tronco 20 — Sistemas de Control y Automatización en `../../troncos.md` (diagrama mermaid, flechas `A --> B`).

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su
fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `lazo-abierto-vs-lazo-cerrado/` | `../electronica/sensores-y-actuadores/` | `EL5P --> CTRL1`. |
| `realimentacion-feedback/` | `lazo-abierto-vs-lazo-cerrado/` | `CTRL1 --> CTRL2`. |
| `control-pid-proporcional-integral-derivativo/` | `realimentacion-feedback/` | `CTRL2 --> CTRL3a --> CTRL3b --> CTRL3c`: P, I y D en un solo módulo. |
| `plc-logica-de-control-industrial/` | `../informatica/estructuras-de-control-condicionales/`, `../informatica/estructuras-de-control-bucles/` | `IN3P/IN4P --> CTRL4`. |
| `servomecanismos/` | `control-pid-proporcional-integral-derivativo/` | `CTRL3c --> CTRL5`. |
| `modelado-de-sistemas-dinamicos-primer-orden/` | `lazo-abierto-vs-lazo-cerrado/`, `../matematica/derivada/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Modelo de primer orden y respuesta al escalón; primer tema cuantitativo de la materia. |
| `respuesta-transitoria-y-regimen-permanente/` | `modelado-de-sistemas-dinamicos-primer-orden/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Parámetros de la respuesta (subida, sobreimpulso, establecimiento) y error en régimen. |
| `estabilidad-de-sistemas-de-control/` | `respuesta-transitoria-y-regimen-permanente/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Estabilidad a nivel introductorio, polos y criterio de Routh. |
| `sintonia-de-pid-metodos-practicos/` | `control-pid-proporcional-integral-derivativo/`, `respuesta-transitoria-y-regimen-permanente/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Ziegler-Nichols, ajuste por prueba y error y windup. |
| `control-on-off-con-histeresis/` | `lazo-abierto-vs-lazo-cerrado/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Control todo-nada con banda de histéresis (termostato). |
| `plc-lenguaje-ladder-contactos-y-bobinas/` | `plc-logica-de-control-industrial/`, `../electronica/logica-digital-puertas-and-or-not/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Ladder a nivel académico; los oficios deberían apuntar acá en vez de repetir teoría. |
| `plc-temporizadores-contadores-y-secuencias/` | `plc-lenguaje-ladder-contactos-y-bobinas/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). TON, TOF, contadores y secuencias simples. |
| `grafcet-y-automatismos-secuenciales/` | `plc-lenguaje-ladder-contactos-y-bobinas/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). GRAFCET (IEC 60848) como descripción previa al programa. |
| `neumatica-e-hidraulica-basica/` | `../fisica/presion-f-sobre-a/`, `plc-logica-de-control-industrial/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Actuadores y válvulas; diferencias entre aire y aceite. |
| `motores-electricos-y-variadores-de-frecuencia/` | `../fisica/induccion-electromagnetica-faraday-lenz/`, `servomecanismos/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Tipos de motor y para qué sirve un variador. |
| `instrumentacion-industrial-y-lazos-4-20-ma/` | `../electronica/sensores-y-actuadores/`, `realimentacion-feedback/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Transmisores y lazo 4-20 mA; cruza con `../oficios/tecnico-electromecanico/mantenimiento-e-instrumentacion/`. |
| `redes-industriales-y-scada/` | `plc-logica-de-control-industrial/`, `../informatica/protocolo-http-peticion-respuesta/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Modbus, buses de campo, HMI y SCADA a nivel conceptual. No existe un tema de redes industriales previo; la dependencia con HTTP es la más cercana disponible. |
| `seguridad-funcional-y-paradas-de-emergencia/` | `plc-logica-de-control-industrial/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Parada de emergencia y enclavamientos, conceptual (ISO 13849). |
| `mantenimiento-y-diagnostico-de-sistemas-automatizados/` | `instrumentacion-industrial-y-lazos-4-20-ma/` | Decisión de Claude, no pedida (nodo propuesto en `../_plan-faltantes/tecnicas.md`). Fallas en lazos y PLC; mantenimiento predictivo vs. preventivo. |
