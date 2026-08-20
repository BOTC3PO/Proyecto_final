# Física — Refracción: Índice y Ley de Snell (teoría)

> Tema del MAPA: `refraccion_ley_snell`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Estudio de cómo la luz cambia de dirección al pasar entre medios distintes, usando el índice de refracción y la ley que rige este fenómeno.

---

## 1. Índice de refracción: definición y significado

El **índice de refracción (n)** es un valor adimensional que compara la velocidad de la luz en un medio con su velocidad en el vacío. Se calcula mediante la fórmula $ n = \frac{c}{v} $, donde $ c $ es la velocidad de la luz en el vacío ($ 3 \times 10^8 \, \text{m/s} $) y $ v $ es su velocidad en el medio. Este índice no tiene unidades porque es una relación entre velocidades.

El valor del índice depende del material: por ejemplo, el agua tiene un índice de aproximadamente 1.33, el vidrio varía entre 1.5 y 1.7 según su composición, y el aire tiene un valor cercano a 1.0003. Cuanto mayor es el índice, más lenta se mueve la luz en ese medio.

---

## 2. Velocidad de la luz y relación con el índice

Un medio con **índice de refracción mayor que 1** (como el agua o el vidrio) hace que la luz viaje a menor velocidad que en el vacío. Esto se debe a que $ v = \frac{c}{n} $: si $ n > 1 $, $ v < c $. Por ejemplo, en agua ($ n = 1.33 $), la luz se mueve a unos $ 2.26 \times 10^8 \, \text{m/s} $.

Este comportamiento explica por qué, al pasar de un medio menos denso (como el aire) a uno más denso (como el agua), los rayos de luz **se desvían hacia la normal**. La relación entre velocidades y refractive indices es clave para entender fenómenos como la formación de imágenes en lentes o la distorsión visual al mirar un objeto sumergido.

---

## 3. Ley de Snell: cómo se relacionan los ángulos

La **ley de Snell** describe matemáticamente cómo cambia la dirección de un rayo de luz al pasar entre dos medios con distintos índices de refracción. Su fórmula es:

$$
n_1 \cdot \sin(\theta_1) = n_2 \cdot \sin(\theta_2)
$$

Donde:
- $ n_1 $ e $ n_2 $ son los índices de refracción de los dos medios.
- $ \theta_1 $ es el ángulo de incidencia (con respecto a la normal).
- $ \theta_2 $ es el ángulo de refracción.

Esta ecuación permite calcular, por ejemplo, el ángulo de salida si se conoce el índice del medio objetivo y el ángulo de entrada. Si el segundo medio tiene mayor índice ($ n_2 > n_1 $), el rayo se acerca a la normal; si es menor, se aleja.

---

## 4. Aplicaciones prácticas: desde prismas hasta fibra óptica

La ley de Snell no solo explica fenómenos naturales (como el arcoíris o la apariencia de objetos en agua), sino que también sustenta tecnologías modernas. Por ejemplo:
- **Lentes**: Se diseñan para enfocar luz según los ángulos y índices calculados.
- **Fibras ópticas**: Usan reflexión total interna, un caso extremo de la ley de Snell, para transmitir señales de luz a grandes distancias.
- **Prismas**: Redirigen la luz mediante refracción controlada (como en gafas de visión nocturna o telescopios).

[IMAGEN: Diagrama de un rayo incidente que pasa de aire a agua, mostrando ángulos de incidencia y refracción con la normal]

---

## 5. Casos límite: reflexión total interna

Cuando un rayo viaja **desde un medio de mayor índice hacia uno de menor**, hay un ángulo crítico ($ \theta_c $) más allá del cual no se produce refracción, sino **reflexión total**. Este fenómeno ocurre cuando:

$$
\sin(\theta_c) = \frac{n_2}{n_1}
$$

Donde $ n_1 > n_2 $. Por ejemplo, en el caso del agua ($ n_1 = 1.33 $) y el aire ($ n_2 = 1.00 $), el ángulo crítico es de aproximadamente $ 48.6^\circ $. Si el rayo incide con un ángulo mayor, se refleja completamente en la interfaz.

---

## N. Conexión con lo que sigue

Este tema conecta directamente con el estudio del **comportamiento de lentes y espejos** (ver `../optica_geometrica/`), donde los índices de refracción y la ley de Snell se usan para determinar la formación de imágenes.