# Oficios — Técnico en Automatización y Robótica — Microcontroladores y programación embebida (teoria)

> Tema del MAPA: `OF16.microcontroladores-y-programacion-embebida`
> (`troncos.md`). Depende de `../fundamentos-robotica/` (ver
> `../dependencias.md`). Lección informativa — la evaluación del
> oficio se concentra en `diagnostico-robotica-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Qué es un microcontrolador

Un **microcontrolador** es una computadora completa (procesador,
memoria, entradas y salidas) integrada en un solo chip, diseñada para
ejecutar un único programa dedicado a controlar algo físico — a
diferencia de una computadora de uso general, no corre un sistema
operativo complejo ni multitarea: lee sensores, toma decisiones simples
y controla actuadores, en un bucle continuo.

## Entradas y salidas

El microcontrolador se comunica con el mundo físico a través de pines:
**GPIO digital** (entrada/salida que sólo distingue dos estados,
encendido o apagado — como leer si un botón está presionado), **entrada
analógica (ADC)** (convierte una señal continua, como la de un sensor
de temperatura, en un número que el programa puede procesar) y
**salida PWM** (una señal digital que se enciende y apaga muy rápido,
en una proporción de tiempo específica, usada para controlar la
velocidad de un motor o la posición de un servomotor sin necesitar una
salida analógica real).

## Comunicación entre componentes

Un robot rara vez tiene un único chip: distintos componentes
(sensores, otros microcontroladores, pantallas) se comunican entre sí
mediante protocolos estándar — **UART** (comunicación simple entre dos
dispositivos, un cable para cada dirección), **I2C** (varios
dispositivos comparten los mismos dos cables, cada uno identificado
por una dirección) y **SPI** (más rápido que I2C, usado quiando la
velocidad de comunicación importa más que la cantidad de cables
necesarios).

## Programación para sistemas embebidos

Programar un microcontrolador combina **algoritmos** (la lógica de
decisión, ya vista en Informática) con particularidades propias de un
**sistema embebido**: memoria muy limitada respecto de una
computadora de escritorio, la necesidad de responder en tiempos
predecibles (un robot no puede "tardar lo que tarde" en reaccionar a
un sensor) y, frecuentemente, el uso de **programación orientada a
objetos** aplicada para organizar el código de un robot con varios
sensores y actuadores en estructuras reutilizables en vez de un único
bloque de código lineal.
