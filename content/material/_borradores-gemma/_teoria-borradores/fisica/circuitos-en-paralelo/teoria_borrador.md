# Física — Circuitos en paralelo (teoría)

> Tema del MAPA: `CIRCUITOS-PARALELO`. Depende de: `../circuitos-basicos/` (ver `../dependencias.md`).

## Tipo de teoría

**Presentación** — Estudio de cómo se comportan la tensión, la corriente y la resistencia en circuitos eléctricos con ramas múltiples.

---

## 1. Tensión constante en ramas paralelas

En un circuito en paralelo, todos los componentes conectados a las mismas ramas reciben la misma tensión que la fuente. Esto ocurre porque cada rama está directamente conectada entre los polos de la batería o generador, sin pasar por otros elementos intermedios. Por ejemplo, si una pila entrega 9 voltios, cada resistencia o dispositivo en paralelo recibirá esos mismos 9 V, independientemente de su valor.

Esta característica es clave para aplicaciones como iluminación doméstica: si una bombilla se quema, las demás siguen funcionando porque no dependen del flujo de corriente de ninguna rama específica. [IMAGEN: diagrama de circuito con 3 resistencias en paralelo conectadas a una batería].

---

## 2. Cálculo de la resistencia equivalente

La resistencia total (equivalente) de un circuito en paralelo no se calcula sumando los valores individuales, sino mediante el inverso de la suma de los inversos de cada resistencia. La fórmula general es:

$$
\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + ... + \frac{1}{R_n}
$$

Para dos resistencias como $ R_1 = 10 \, \Omega $ y $ R_2 = 20 \, \Omega $, se aplica:

$$
\frac{1}{R_{eq}} = \frac{1}{10} + \frac{1}{20} = \frac{3}{20} \quad \Rightarrow \quad R_{eq} = \frac{20}{3} \approx 6.67 \, \Omega
$$

Este valor es siempre menor que la resistencia más pequeña del circuito, ya que las ramas en paralelo ofrecen múltiples caminos para el flujo de corriente.

---

## 3. Distribución de la corriente total

La corriente total que entrega la fuente se divide entre las ramas según la resistencia de cada una. La Ley de Corrientes de Kirchhoff establece que **la suma de las corrientes en las ramas es igual a la corriente total** que sale del generador.

Por ejemplo, si una batería entrega $ I_{total} = 3 \, A $ y hay dos resistencias en paralelo (10 Ω y 20 Ω), cada rama recibe una parte de esa corriente. La rama con menor resistencia (10 Ω) lleva más corriente: $ I_1 = \frac{V}{R_1} $, mientras que la otra tiene $ I_2 = \frac{V}{R_2} $. Esto explica por qué, en circuitos domésticos, los electrodomésticos de alta potencia (como un horno) consumen más corriente que los de baja potencia (como una lámpara).

---

## 4. Ventajas y desafíos prácticos

Los circuitos en paralelo son comunes en sistemas eléctricos porque permiten que cada componente funcione independientemente. Sin embargo, su diseño requiere cuidado: si se agrega demasiadas ramas, la resistencia equivalente puede caer a valores peligrosamente bajos, aumentando el riesgo de sobrecarga del generador o cortocircuitos.

Además, en circuitos con múltiples componentes, es crucial calcular correctamente la corriente por rama para evitar que algún dispositivo reciba más potencia de lo que soporta. Esto se resuelve usando leyes como Ohm y Kirchhoff, combinadas con cálculos matemáticos precisos.

---

## N. Conexión con lo que sigue

Este tema es base para analizar circuitos mixtos (en serie y paralelo), donde se combinen ambas configuraciones, y para estudiar el comportamiento de componentes como condensadores o inductores en redes eléctricas complejas (`../circuitos-mixtos/`).