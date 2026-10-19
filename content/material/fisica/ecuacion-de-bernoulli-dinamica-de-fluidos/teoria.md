# Física — Ecuación de Bernoulli y dinámica de fluidos (teoría)

> Tema propuesto en `../../_plan-faltantes/HUECOS-POR-TITULOS.md` (sin ID en `troncos.md`). Dependencias: ver `../dependencias.md`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Fluidos en movimiento: continuidad, presión dinámica, Torricelli y aplicaciones.

---

## 1. De los fluidos quietos a los fluidos en movimiento

Hasta ahora estudiaste la presión de un líquido en reposo (`../presion-hidrostatica/`), el principio de Pascal (`../principio-de-pascal-prensa-hidraulica/`) y el caudal (`../caudal-q-a-v/`). Falta responder qué pasa con la presión cuando el fluido **se mueve**. La respuesta la dio Daniel Bernoulli en su obra *Hydrodynamica*, publicada en 1738: en un fluido que fluye, la velocidad, la presión y la altura están conectadas.

## 2. Las hipótesis del modelo

La ecuación de Bernoulli describe un fluido ideal. Eso significa cuatro cosas: es **incompresible** (la densidad no cambia), no tiene **viscosidad** (no hay rozamiento interno), el flujo es **estacionario** (en cada punto la velocidad no varía con el tiempo) y el análisis se hace **a lo largo de una línea de corriente**. Ningún fluido real cumple todo esto, pero el agua en una tubería lisa o el aire a velocidades moderadas se acercan lo suficiente para que el modelo sirva.

## 3. Continuidad: más angosto, más rápido

Si el fluido es incompresible, el caudal que entra a un tramo es el que sale: `A1·v1 = A2·v2`. Cuando la tubería se estrecha, la velocidad aumenta. Es lo que hacés al tapar parcialmente con el dedo la salida de una manguera: el agua sale más rápido porque pasa por una sección menor.

## 4. La ecuación de Bernoulli

Es la conservación de la energía aplicada a una porción de fluido, expresada por unidad de volumen:

`p + ½·ρ·v² + ρ·g·h = constante`

Cada término tiene unidades de presión (pascales): `p` es la presión estática, `½·ρ·v²` es la **presión dinámica** (asociada al movimiento) y `ρ·g·h` es la presión debida a la altura. Si el fluido sube, gana energía potencial y tiene que perder presión o velocidad; si se acelera, pierde presión. En una tubería horizontal (`h` constante) queda lo esencial: **donde la velocidad es mayor, la presión es menor**.

## 5. Aplicaciones

- **Teorema de Torricelli.** Un líquido que sale por un orificio a una profundidad `h` bajo la superficie libre lo hace con velocidad `v = √(2·g·h)`, la misma que adquiriría un cuerpo en caída libre desde esa altura.
- **Sustentación de un ala.** El aire recorre más rápido la cara superior del ala; allí la presión es menor que abajo, y la diferencia de presión multiplicada por el área da una fuerza hacia arriba. Es una de las explicaciones parciales de la sustentación; en un tratamiento completo intervienen también el ángulo de ataque y la deflexión del aire.
- **Tubo de Venturi.** Un estrechamiento mide caudales: se compara la presión antes y en la garganta y, con Bernoulli y continuidad, se calcula la velocidad.
- **Atomizadores y pulverizadores.** El aire rápido sobre un tubito baja la presión y el líquido sube y se dispersa.

## 6. Errores frecuentes

La ecuación **no** dice que la presión baja siempre que algo se mueve: compara dos puntos de la **misma línea de corriente**. Tampoco vale si hay mucha viscosidad, turbulencia o compresibilidad (aire cerca de la velocidad del sonido). Y la presión dinámica no es una presión que "se siente" en las paredes: es la parte de la energía por volumen que está en forma de movimiento.

## 7. Conexión con lo que sigue

Este tema cierra el bloque de fluidos y se retoma en `../maquina-termica-termodinamica-nivel2/` cuando el fluido de trabajo es un gas.
