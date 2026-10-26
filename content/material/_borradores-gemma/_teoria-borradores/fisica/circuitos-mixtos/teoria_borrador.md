# Física — Circuitos mixtos (teoría)

> Tema del MAPA: `circuitos-mixtos`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Análisis de circuitos con combinaciones de resistencias en serie y paralelo.

---

## 1. Resistencia equivalente

En un circuito mixto, la **resistencia equivalente** es el valor único que reemplaza a todas las resistencias del circuito sin alterar la corriente total ni el voltaje aplicado. Su cálculo permite simplificar redes complejas en una sola resistencia, facilitando el análisis de tensiones y corrientes. Por ejemplo, si un circuito tiene tres resistencias en paralelo seguidas por otra en serie, se calcula primero la equivalente del paralelo, luego se suma con la serie para obtener el valor total.

---

## 2. Comportamiento en serie

Cuando las resistencias están conectadas en serie, **la corriente es igual en todos los componentes**, ya que hay un único camino para su paso. Sin embargo, el voltaje aplicado se divide entre ellas según sus valores: una resistencia mayor recibe más tensión. Si dos resistencias de 2 Ω y 4 Ω están en serie con una batería de 6 V, la corriente total será $ I = \frac{V}{R_{eq}} = \frac{6}{6} = 1\,A $, y el voltaje en cada resistencia será $ V_1 = I \cdot R_1 = 2\,V $, $ V_2 = 4\,V $.

---

## 3. Comportamiento en paralelo

En un tramo en paralelo, **el voltaje es el mismo para todas las resistencias**, pero la corriente se divide inversamente proporcional a su valor. Si dos resistencias de 2 Ω y 4 Ω están conectadas al mismo punto (nodos), la resistencia equivalente será $ R_{eq} = \frac{1}{\frac{1}{2} + \frac{1}{4}} = 1,33\,\Omega $. La corriente total se calcula con $ I = \frac{V}{R_{eq}} $, y luego se distribuye entre las ramas: $ I_1 = \frac{V}{2} $, $ I_2 = \frac{V}{4} $.

---

## 4. Análisis de circuitos mixtos

Para resolver un circuito mixto, se debe identificar primero los tramos en serie y paralelo, reemplazándolos progresivamente por su resistencia equivalente. Por ejemplo: si hay dos resistencias en paralelo (R1 y R2) conectadas en serie con una tercera (R3), el proceso sería:
1. Calcular $ R_{eq\_paralelo} = \frac{R_1 \cdot R_2}{R_1 + R_2} $.
2. Sumar $ R_{eq\_total} = R_{eq\_paralelo} + R_3 $.
3. Usar la resistencia total para hallar corriente y voltajes en cada parte del circuito.

---

## 5. Aplicaciones prácticas

Los circuitos mixtos son comunes en dispositivos electrónicos, como reguladores de voltaje o sistemas de iluminación. Por ejemplo, en una lámpara con control de brillo (resistencia variable en serie) y un led (resistencia fija en paralelo), la resistencia equivalente permite calcular el consumo energético total sin necesidad de medir cada componente por separado.

---

## N. Conexión con lo que sigue

Este tema es base para entender cómo se calcula la **potencia eléctrica** en circuitos complejos, y cómo se aplican las leyes de Kirchhoff en redes no lineales (ver `../potencia-en-circuitos/`).