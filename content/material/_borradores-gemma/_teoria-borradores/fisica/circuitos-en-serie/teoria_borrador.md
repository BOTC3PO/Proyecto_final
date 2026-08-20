# Física — Circuitos en serie (teoría)

> Tema del MAPA: `CIRCUITOS-01`. Depende de `../conceptos_basicos_electricidad/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Estudio de los circuitos eléctricos donde componentes están conectados en una única trayectoria.

---

## 1. Resistencia equivalente

En un circuito en serie, la resistencia total o equivalente es la suma directa de todas las resistencias individuales conectadas. Esto se debe a que cada resistor agrega una barrera adicional al flujo de corriente. Por ejemplo, si hay dos resistencias de 2 Ω y 4 Ω en serie, la resistencia total será 6 Ω. Esta característica contrasta con los circuitos en paralelo, donde las resistencias se combinan de forma inversa.

La fórmula general es:

$$
R_{eq} = R_1 + R_2 + R_3 + \ldots + R_n
$$

Esta relación permite predecir cómo cambia la corriente total del circuito, ya que según la Ley de Ohm ($V = I \cdot R$), una resistencia mayor reduce la intensidad de corriente para un mismo voltaje.

---

## 2. Comportamiento de la corriente

En un circuito en serie, la intensidad de corriente es idéntica en todos los puntos del circuito. Esto ocurre porque hay **un solo camino** para el flujo de electrones: si una resistencia se rompe o se desconecta, toda la circulación se detiene. Por ejemplo, si un LED en serie con una resistencia falla, no solo ese componente dejará de funcionar, sino que todo el circuito queda inactivo.

Esta uniformidad de corriente es clave para aplicaciones como luces navideñas, donde cada bombilla actúa como una etapa en la cadena. Si una se quema, el resto apaga automáticamente.

---

## 3. Distribución de tensión

La tensión (voltaje) aplicada al circuito se divide entre los componentes según sus resistencias individuales. Esto sigue la **Ley de Voltajes de Kirchhoff**, que establece que la suma de las caídas de voltaje en cada elemento debe igualar la tensión total del generador.

Por ejemplo, con una pila de 12 V y dos resistencias (R₁ = 2 Ω y R₂ = 4 Ω) conectadas en serie:
- La corriente total es $I = \frac{V}{R_{eq}} = \frac{12}{6} = 2$ A.
- La caída de tensión en R₁ será $V_1 = I \cdot R_1 = 4$ V.
- En R₂, la caída será $V_2 = I \cdot R_2 = 8$ V.

La suma $V_1 + V_2 = 12$ V confirma que se cumple el principio de conservación de energía en el circuito.

---

## 4. Aplicaciones y limitaciones

Los circuitos en serie son útiles cuando se necesita **controlar la corriente** o **proteger múltiples componentes** con una sola interrupción. Por ejemplo, en sistemas de iluminación donde un solo interruptor puede apagar todas las luces.

Sin embargo, presentan limitaciones prácticas: si un componente falla, el circuito se interrumpe por completo. Esto los hace menos comunes en redes eléctricas domésticas, donde se prefieren conexiones en paralelo para mantener el funcionamiento independiente de cada dispositivo.

---

## N. Conexión con lo que sigue

Este tema es base para entender cómo se comportan los circuitos en **paralelo** y las combinaciones mixtas de resistencias, desarrolladas en `../circuitos_en_paralelo/`.