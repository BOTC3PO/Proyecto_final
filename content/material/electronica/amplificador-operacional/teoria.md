# Electrónica — Amplificador operacional (teoría)

> Tema del MAPA: `electronica/amplificador-operacional` (nodo propuesto, ver `../dependencias.md`). Depende de `../transistor-como-interruptor-y-amplificador/`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Qué es un amplificador operacional y cómo se calculan sus configuraciones básicas.

---

## 1. Qué es un amplificador operacional

Un amplificador operacional (u operacional, u "op-amp") es un circuito integrado que amplifica la diferencia entre dos tensiones. Tiene dos entradas, la inversora (marcada con un signo menos) y la no inversora (con un signo más), una salida y dos terminales de alimentación. Dentro hay muchos transistores, pero se lo usa como un bloque único con propiedades muy convenientes.

El modelo ideal tiene tres características: ganancia muy grande (tendiendo a infinito), resistencia de entrada muy alta (casi no toma corriente de las entradas) y resistencia de salida muy baja (puede entregar su tensión a distintas cargas sin que esta cambie). Los componentes reales se parecen bastante a este modelo, con límites que hay que tener en cuenta.

## 2. La realimentación negativa

Por sí solo, con esa ganancia enorme, el operacional satura con cualquier diferencia mínima entre entradas. Lo normal es conectar una parte de la salida a la entrada inversora mediante una resistencia: la realimentación negativa. Con ella la ganancia queda determinada por los componentes externos y no por el operacional. Con realimentación negativa se aplican dos reglas muy útiles para el análisis ideal: no entra corriente por las entradas, y las dos entradas quedan prácticamente al mismo potencial (el llamado cortocircuito virtual).

## 3. Amplificador inversor

La señal se aplica a la entrada inversora a través de una resistencia Rin, y una resistencia de realimentación Rf une la salida con esa entrada, mientras que la no inversora va a masa. La ganancia es:

Av = − Rf / Rin

El signo negativo indica que la salida está invertida respecto de la entrada. Con Rf = 10 kΩ y Rin = 1 kΩ, por ejemplo, la ganancia es −10: una entrada de 0,2 V produce una salida de −2 V.

## 4. Amplificador no inversor

La señal entra por la entrada no inversora y se realimenta mediante un divisor formado por Rf y Rg (la resistencia a masa). La ganancia es:

Av = 1 + Rf / Rg

Siempre es mayor o igual que 1, y la salida está en fase con la entrada. Si se elimina Rf (queda un cortocircuito) y no hay Rg, la ganancia es 1: es el seguidor de tensión, que copia la entrada y sirve para aislar etapas porque toma muy poca corriente de la fuente de señal.

## 5. Sumador y comparador

Si se conectan varias entradas a través de resistencias a la entrada inversora, el operacional las suma con sus respectivas ganancias: es el sumador inversor. Y sin realimentación, comparando dos tensiones, se obtiene un comparador: la salida satura hacia la tensión positiva si la entrada no inversora supera a la inversora, y hacia la negativa en el caso contrario. Es el principio de muchos detectores de umbral.

## 6. Límites reales

La salida no puede superar las tensiones de alimentación: si el cálculo da una salida mayor, la señal se recorta (satura). Además, la ganancia se reduce a frecuencias altas, y las entradas tienen pequeñas corrientes y desbalances que importan en aplicaciones de precisión.

## N. Conexión con lo que sigue

Este tema prepara `../senales-analogicas-y-digitales-adc-dac/`, donde los operacionales acondicionan las señales de los sensores antes de convertirlas a bits.
