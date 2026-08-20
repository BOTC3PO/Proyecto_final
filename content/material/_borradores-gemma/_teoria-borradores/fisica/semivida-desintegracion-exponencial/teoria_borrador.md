# Física — Semivida y Desintegración Exponencial (teoría)

> Tema del MAPA: `semivida_desintegracion_exponencial`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación de la relación entre el tiempo de desintegración y la cantidad de material radiactivo restante.

---

## 1. ¿Qué es la semivida?

La **semivida**, también llamada *vida media*, es el tiempo que tarda una muestra radiactiva en reducir a la mitad su actividad o cantidad original de núcleos inestables. Es un concepto clave para entender cómo se comportan los materiales radiactivos con el paso del tiempo. Por ejemplo, si una muestra tiene una semivida de 10 años, al cabo de ese periodo quedarán solo la mitad de los núcleos que estaban presentes inicialmente.

No es un valor fijo para todos los elementos: depende del isótopo radiactivo y está determinado por su naturaleza nuclear. La semivida se usa en distintas aplicaciones, como el diagnóstico médico o la datación de fósiles, porque permite predecir cuánto tiempo tomará que una sustancia pierda su radioactividad.

---

## 2. Semivida y constante de desintegración

La semivida está relacionada con un parámetro fundamental llamado **constante de desintegración** (λ). Esta constante indica la probabilidad de que un núcleo se desintegre en un segundo dado, y su valor depende del isótopo. La fórmula que los vincula es:

$$
\lambda = \frac{\ln(2)}{T_{1/2}}
$$

Donde $ T_{1/2} $ es la semivida. Por ejemplo, si un isótopo tiene una semivida de 10 años, su λ sería aproximadamente $ 0.693 / 10 = 0.0693 \, \text{años}^{-1} $. Esta relación permite calcular uno de los valores si se conoce el otro.

---

## 3. Cómo cambia la cantidad de material radiactivo

La desintegración no ocurre en pasos fijos: es un proceso **exponencial**, lo que significa que la cantidad restante disminuye cada vez más lentamente. Por ejemplo, si una muestra tiene una semivida de 10 años:

- Al cabo de 10 años, queda el 50%.
- Al cabo de 20 años (dos semividas), queda el 25%.
- Al cabo de 30 años, el 12.5%, y así sucesivamente.

Esto se debe a que cada intervalo de semivida afecta solo la cantidad restante en ese momento, no la original. Este comportamiento exponencial es clave para modelar fenómenos como la radiactividad o la decaimiento de sustancias químicas.

---

## 4. ¿Por qué importa la desintegración exponencial?

La desintegración exponencial tiene aplicaciones prácticas en varios campos:

- **Medicina**: En terapias con radioterapia, se eligen isótopos con semividas adecuadas para que actúen durante un tiempo útil sin causar daño prolongado.
- **Arqueología**: La datación por carbono-14 utiliza la semivida de este isótopo (aproximadamente 5730 años) para estimar la edad de restos orgánicos.
- **Industria nuclear**: Los reactores y residuos radiactivos se manejan considerando las semividas de los materiales involucrados.

Entender esta relación permite predecir el comportamiento de sustancias radiactivas con precisión, lo que es vital para su uso seguro y eficiente.

---

## N. Conexión con lo que sigue

Este tema conecta directamente con el estudio del **modelo matemático de la desintegración** (ver `../desintegracion_modelo_matematico/`), donde se profundizará en las ecuaciones diferenciales que describen este fenómeno.