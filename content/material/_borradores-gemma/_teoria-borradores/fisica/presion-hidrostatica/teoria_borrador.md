# Física — Presión hidrostática (teoría)

> Tema del MAPA: `presion_hidrostatica`. Depende de `../fluidos_y_presion/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación de cómo los fluidos en reposo ejercen presión según su profundidad y características.

---

## 1. ¿Qué es la presión hidrostática?

La **presión hidrostática** es el valor de la fuerza por unidad de área que un fluido ejerce sobre las paredes del recipiente que lo contiene o sobre cualquier cuerpo sumergido en él, debido exclusivamente al peso de la columna de fluido que está encima. A diferencia de la presión atmosférica (que actúa desde arriba), esta se genera internamente por el propio peso del líquido.

Un ejemplo claro es bucear en una piscina: cuanto más profundo estás, mayor es la sensación de oído "tapado", lo que indica un aumento de presión. Esto ocurre porque hay más agua encima tuyo a medida que te hundes.

[IMAGEN: Diagrama de un recipiente con fluido, mostrando flechas que indican la dirección de la presión hidrostática en diferentes puntos del líquido.]

---

## 2. ¿Cómo varía con la profundidad?

La presión hidrostática **aumenta a medida que aumenta la profundidad**. Esto se debe a que, al bajar en un fluido, hay una mayor cantidad de masa de líquido sobre tu posición, lo cual incrementa el peso total actuando sobre cada punto del volumen.

Por ejemplo: si estás a 1 metro de profundidad en agua, la presión hidrostática es menor que si estás a 5 metros. La relación entre profundidad y presión no es lineal, sino proporcional al valor de $ h $ (altura de la columna de fluido encima del punto considerado).

---

## 3. Factores que influyen en la presión hidrostática

La fórmula básica para calcular la presión hidrostática es:

$$
P = \rho \cdot g \cdot h
$$

Donde:
- $ P $: presión hidrostática (en pascales, Pa).
- $ \rho $: densidad del fluido (kg/m³).
- $ g $: aceleración de la gravedad (m/s²), que vale aproximadamente 9,81 en la Tierra.
- $ h $: profundidad a la que se mide la presión (en metros).

Es clave entender que **la forma del recipiente no afecta el valor de esta presión**. Dos recipientes con distintas geometrías pero con la misma altura de fluido ejercerán la misma presión hidrostática en un punto a la misma profundidad.

---

## 4. Presión total y efectos de la atmósfera

La presión que siente un cuerpo sumergido es **la suma de la presión atmosférica** (que actúa sobre la superficie del fluido) y la presión hidrostática generada por el peso del líquido. Por eso, en la superficie de un lago, la presión total es solo la atmosférica, pero a medida que te sumerges, se agrega más presión hidrostática.

En situaciones extremas, como en los océanos profundos, esta combinación puede alcanzar valores muy altos. Por ejemplo, a 10 metros de profundidad en agua dulce, la presión total es aproximadamente el doble que la atmosférica normal (1 atm + 1 atm hidrostática).

---

## N. Conexión con lo que sigue

Este concepto es fundamental para entender fenómenos como la **transmisión de presiones en fluidos** (principio de Pascal) y el funcionamiento de dispositivos como manómetros o barriles de agua, temas desarrollados en `../presion_en_fluidos_y_pascal/`.