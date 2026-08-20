# Física — Máquina térmica y termodinámica (nivel 2) (teoría)

> Tema del MAPA: `maquina_termica_nivel2`. Depende de `../termodinamica_basico/` (ver `../dependencias.md`).

## Tipo de teoría

**Presentación** — Análisis de ciclos termodinámicos y eficiencia en máquinas térmicas.

---

## 1. El ciclo de Carnot: límite teórico de la eficiencia

El ciclo de Carnot es un modelo idealizado que describe el funcionamiento de una máquina térmica con la máxima eficiencia posible, según las leyes de la termodinámica. Está compuesto por dos procesos isotermos y dos adiabáticos, realizados en un fluido de trabajo (como vapor o gas) entre una fuente de calor a alta temperatura (T_caliente) y otra a baja temperatura (T_fría). La eficiencia teórica máxima se calcula con la fórmula:

**η = 1 - T_fría / T_caliente**

Donde las temperaturas deben expresarse en Kelvin. Por ejemplo, si una máquina opera entre 800 K y 300 K, su eficiencia sería del **62,5%** (1 - 300/800 = 0,625). Esta ecuación muestra que cuanto mayor sea la diferencia de temperatura entre las fuentes, más trabajo puede extraerse del calor. Sin embargo, en la práctica, ningún motor alcanza esta eficiencia ideal debido a pérdidas por fricción, conducción térmica o irreversibilidades.

## 2. Primera ley de la termodinámica: conservación de energía

En una máquina térmica que funciona en un ciclo cerrado (como los motores de combustión interna), la energía interna del sistema no cambia, ya que el estado inicial y final son iguales. Por eso, según la primera ley:

**W = Q_H - Q_C**

Donde:
- **W** es el trabajo neto producido.
- **Q_H** es el calor absorbido de la fuente caliente.
- **Q_C** es el calor cedido a la fuente fría.

Esta relación implica que no todo el calor tomado del ambiente se convierte en trabajo útil: una parte siempre se disipa como calor residual. Por ejemplo, si un motor absorbe 1000 J de calor y cede 600 J al entorno, genera **400 J** de trabajo. Esta ley es clave para entender por qué las máquinas térmicas no son 100% eficientes.

## 3. Conversión entre calor y trabajo: límites y realidades

Las máquinas térmicas convierten energía térmica en trabajo mecánico, pero su rendimiento depende de la relación entre las temperaturas de las fuentes y el tipo de proceso termodinámico. En teoría, un ciclo de Carnot es reversible, lo que significa que podría funcionar al revés como refrigerador o bomba térmica. Sin embargo, en la práctica, los procesos reales (como la combustión en motores) son irreversibles y generan pérdidas.

Además, el calor cedido a la fuente fría (Q_C) no se desperdicia: es un componente necesario para mantener el ciclo. En sistemas como las centrales térmicas o los motores de automóviles, este calor residual se disipa al ambiente, lo que limita su eficiencia y requiere soluciones técnicas para mitigar impactos ambientales.

## 4. Entropía y la segunda ley: por qué no todo el calor es útil

La segunda ley de la termodinámica establece que en cualquier proceso natural, la entropía total del universo (sistema + entorno) siempre aumenta o se mantiene constante. En una máquina térmica, al ceder calor a la fuente fría (Q_C), el sistema genera un aumento de entropía en el entorno que no puede compensarse completamente con el trabajo producido. Esto explica por qué es imposible construir una máquina que convierta todo el calor absorbido en trabajo útil: siempre hay una "pérdida" inevitable asociada al desorden termodinámico.

## N. Conexión con lo que sigue

Este tema se relaciona directamente con el análisis de motores reales (como los de combustión interna o las turbinas) en `../motores_termicos/`, donde se aplican estos principios para evaluar su rendimiento y limitaciones.