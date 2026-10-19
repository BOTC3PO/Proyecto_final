# Automatizacion — Respuesta transitoria y régimen permanente (teoría)

> Tema del MAPA: `automatizacion/respuesta-transitoria-y-regimen-permanente`. Depende de `modelado-de-sistemas-dinamicos-primer-orden/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Parámetros que describen cómo responde un sistema de control a un escalón y cuánto error queda al final.

---

## 1. Dos fases en toda respuesta

Cuando a un sistema de control se le pide cambiar de valor, la salida no llega de inmediato. Pasa por dos etapas. La **respuesta transitoria** es el camino que recorre desde el valor anterior hasta acercarse al nuevo. El **régimen permanente** es lo que queda cuando ya pasó todo lo transitorio. Un buen diseño cuida las dos: que el camino sea razonable y que el punto de llegada sea el correcto.

## 2. Parámetros de la respuesta transitoria

Ante un cambio de referencia tipo escalón, la respuesta de un sistema de control se describe con unas pocas medidas:

- **Tiempo de subida**: lo que tarda la salida en ir del 10 % al 90 % del valor final (a veces del 0 % al 100 %). Mide la rapidez inicial.
- **Tiempo de pico**: instante en que la salida alcanza su valor máximo, cuando hay sobrepaso.
- **Sobreimpulso** (overshoot): cuánto se pasa la salida del valor final, expresado como porcentaje del valor final. Se calcula así: (valor máximo − valor final) / valor final × 100.
- **Tiempo de establecimiento**: lo que tarda la salida en entrar y quedarse dentro de una banda alrededor del valor final, habitualmente ±2 % o ±5 %.

Un sistema de primer orden no tiene sobreimpulso: se acerca sin pasarse. Los de segundo orden sí pueden oscilar antes de asentarse, y el grado de oscilación depende del **amortiguamiento**. Con poco amortiguamiento hay mucho sobreimpulso y varias oscilaciones; con amortiguamiento excesivo no oscila pero es lento; el punto intermedio ofrece una respuesta rápida con poco sobrepaso.

## 3. Un compromiso inevitable

Casi nunca se logra todo a la vez. Al volver más agresivo un controlador (más ganancia) el tiempo de subida baja, pero suele aumentar el sobreimpulso y puede alargarse el tiempo de establecimiento por las oscilaciones. Por eso se fijan especificaciones según la aplicación: en un horno cerámico importa no pasarse de la temperatura; en un posicionador rápido, llegar pronto. El diseñador negocia entre rapidez, sobrepaso y suavidad.

## 4. Régimen permanente y error

El **error en régimen permanente** es la diferencia entre la referencia y la salida una vez que todo se asentó: error = referencia − salida final. Idealmente es cero. No siempre lo es:

- Un controlador solo proporcional deja, en muchos procesos, un error residual. Para mantener la salida en su valor hace falta una señal de control, y esa señal solo existe si hay error.
- Agregar acción integral elimina el error en régimen ante un escalón, porque el integrador sigue acumulando mientras haya error.
- Las perturbaciones constantes (por ejemplo una carga distinta) también pueden dejar un error si el controlador no tiene acción integral.

El error se suele dar en porcentaje de la referencia o del rango de la variable.

## 5. Cómo se leen estos datos en la práctica

En un registrador o una gráfica de tendencia se marca la referencia, se identifica el valor máximo y se mide en el eje horizontal:

1. Se ubica el valor final al que se estabiliza.
2. Se calcula el sobreimpulso con la fórmula.
3. Se traza la banda de ±2 % y se anota el último instante en que la curva sale de ella.
4. Se compara el valor final con la referencia para obtener el error.

Ejemplo: se pide 100 °C. La temperatura sube hasta 112 °C y se estabiliza en 98 °C. El sobreimpulso, medido sobre el valor final, es (112 − 98) / 98, alrededor de 14,3 %. El error en régimen es 100 − 98 = 2 °C. Dos problemas distintos: el primero se corrige ajustando la agresividad; el segundo, agregando acción integral.

## 6. Qué se pide a un buen diseño

Respuesta rápida pero amortiguada, poco sobreimpulso, tiempo de establecimiento razonable y error en régimen nulo o dentro de tolerancia. Estas cuatro medidas son la base para evaluar y comparar controladores, incluido el PID.
