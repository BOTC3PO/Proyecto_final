# Electrónica — Circuitos y leyes de Kirchhoff (teoría)

> Tema del MAPA: `CIRCUITOS_KIRCHHOFF`. Depende de `../conceptos-basicos-de-circuitos/` (ver `../dependencias.md`).

## Tipo de teoría

**Presentación** — Análisis de circuitos eléctricos mediante las leyes fundamentales de Kirchhoff.

---

## 1. Nodos: puntos de conexión y su relevancia en circuitos

Un **nodo** es el punto físico donde se unen dos o más componentes eléctricos, como resistencias, fuentes de voltaje o cables conductores. En términos prácticos, cualquier intersección de alambres en un circuito representa un nodo. Cuando tres o más elementos convergen en un mismo punto, se lo denomina **nodo principal**, ya que es un punto crítico para el análisis de corrientes.

Los nodos son la base para aplicar las leyes de Kirchhoff, ya que permiten identificar los caminos por donde fluye la electricidad. Por ejemplo, en un circuito con una batería y tres resistencias conectadas en paralelo, cada punto de conexión entre la batería y las resistencias es un nodo.

[IMAGEN: Diagrama de circuito simple con nodos etiquetados]

---

## 2. Ley de Corrientes de Kirchhoff (KCL): conservación de carga

La **Ley de Corrientes de Kirchhoff** (KCL) establece que en cualquier nodo eléctrico, la suma algebraica de las corrientes que entran es igual a la suma de las corrientes que salen. Esto se debe al principio de conservación de la carga: no hay acumulación de electricidad en un punto ideal.

Por ejemplo, si en un nodo llegan 3 A de corriente desde dos ramas y una tercera rama lleva 1 A hacia otro componente, la corriente restante (2 A) debe salir por otra rama del circuito. Esta relación se expresa matemáticamente como:

$$
\sum I_{\text{entrantes}} = \sum I_{\text{salientes}}
$$

La KCL es fundamental para resolver circuitos complejos, especialmente cuando hay múltiples caminos de corriente.

---

## 3. Ley de Tensiones de Kirchhoff (KVL): conservación de energía

La **Ley de Tensiones de Kirchhoff** (KVL) se aplica a un **lazo cerrado**, es decir, un camino que comienza y termina en el mismo punto sin repetir componentes. Esta ley afirma que la suma algebraica de todas las tensiones en un lazo debe ser cero:

$$
\sum V = 0
$$

En términos prácticos, si recorres un circuito cerrado (como una malla con resistencias y una batería), el voltaje suministrado por la fuente debe equilibrarse con las caídas de tensión en los componentes. Por ejemplo, si una batería proporciona 12 V y hay dos resistencias en serie que generan cada una 4 V y 8 V, al sumarlas (4 + 8 = 12), se cumple la KVL.

[IMAGEN: Circuito cerrado con tensiones etiquetadas]

---

## 4. Aplicación práctica de las leyes en circuitos reales

Las leyes de Kirchhoff son herramientas indispensables para analizar circuitos que no pueden resolverse solo con la Ley de Ohm, especialmente cuando hay múltiples fuentes o caminos de corriente. Por ejemplo, en un circuito con dos baterías y tres resistencias conectadas en una red compleja, se combina KCL y KVL para establecer ecuaciones que permiten calcular valores desconocidos de corriente o tensión.

Para aplicar estas leyes, es necesario identificar primero los nodos y los lazos del circuito. Luego, asignar variables a las incógnitas (como corrientes en ramas) y plantear ecuaciones basadas en KCL y KVL. Este método se conoce como **análisis de mallas** o **análisis nodal**, dependiendo de la estrategia elegida.

---

## N. Conexión con lo que sigue

Este tema es fundamental para entender cómo resolver circuitos más complejos, como los abordados en `../analisis-de-mallas/` y `../teoremas-de-thevenin-y-norton/`.