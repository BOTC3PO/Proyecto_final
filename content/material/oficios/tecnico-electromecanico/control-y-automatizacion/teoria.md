# Oficios — Técnico Electromecánico — Control y automatización (teoria)

> Tema del MAPA: `OF11.control-y-automatizacion` (`troncos.md`).
> Depende de `maquinas-electricas-y-electronica/` (ver
> `../dependencias.md`). Comparte base con la rama de Sistemas de
> Control ya construida (`control-pid-proporcional-integral-
> derivativo/`, `lazo-abierto-vs-lazo-cerrado/`) y con
> `../../informatica/`. Lección informativa — la evaluación del
> oficio se concentra en `diagnostico-electromecanico-por-casos/`, al
> final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Relés, contactores y sensores industriales

Los **relés** y **contactores** ya presentados en Automatización
(interruptores accionados eléctricamente, para manejar potencia con
una señal de control de baja corriente) son la base de los sistemas de
control industrial clásicos, previos a la automatización programable.
Los **sensores industriales** —de proximidad, temperatura, presión,
nivel— convierten una condición física en una señal eléctrica que un
sistema de control puede leer e interpretar.

## Control PID en contexto industrial

El control **PID** (proporcional-integral-derivativo, ya presentado en
la rama de Sistemas de Control) es el algoritmo de control automático
más usado en la industria: ajusta continuamente una variable (por
ejemplo, la velocidad de un motor, o la temperatura de un horno)
comparándola con el valor deseado y corrigiendo el error de forma
proporcional, acumulada en el tiempo, y anticipando su tendencia de
cambio — las tres componentes que le dan nombre al PID.

## PLC: el cerebro de la automatización industrial

El **PLC** (controlador lógico programable) es una computadora
industrial robusta, diseñada para ejecutar de forma confiable la
lógica de control de una máquina o proceso, programada generalmente
en **lenguaje ladder** (una representación gráfica que imita los
antiguos diagramas de contactores y relés, pensada para que técnicos
formados en control eléctrico clásico pudieran programarla sin
aprender un lenguaje de programación tradicional desde cero).

## HMI y SCADA

La **HMI** (interfaz hombre-máquina) es la pantalla o panel que
permite a un operario ver el estado del proceso y dar órdenes al
sistema de control, sin necesidad de interactuar directamente con el
PLC. El **SCADA** (supervisión, control y adquisición de datos)
extiende ese concepto a la supervisión de una planta industrial
completa, integrando datos de múltiples máquinas y procesos en un
sistema centralizado.

## Redes industriales

Los PLC, sensores, HMI y otros dispositivos de una planta se
comunican entre sí a través de **redes industriales** específicas
(distintas de una red informática de oficina, diseñadas para
comunicación en tiempo real y en ambientes con interferencia
electromagnética) — es la infraestructura de comunicación que permite
que la automatización de una planta funcione como un sistema
integrado, no como máquinas aisladas.
