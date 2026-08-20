# Física — Dilatación térmica lineal (teoría)

> Tema del MAPA: `dilatacion_termica_lineal`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explica cómo los sólidos cambian de longitud al variar su temperatura.

---

## 1. ¿Qué es la dilatación térmica lineal?

Cuando un sólido se calienta, sus átomos vibran con mayor intensidad y necesitan más espacio para moverse. Esto provoca que el material aumente su tamaño en una dirección: su longitud. La **dilatación térmica lineal** es el fenómeno por el cual un objeto sólido se alarga o encoge según suba o baje su temperatura, siempre que no haya cambios estructurales (como fundirse). Es un efecto directo de la energía térmica: más calor, más vibración, más espacio entre los átomos.

Ejemplo clásico: si calientas una varilla metálica fija en un extremo, verás que su otro extremo se aleja. Esto no ocurre en todos los materiales con la misma intensidad; depende de qué sustancia sea.

---

## 2. El coeficiente de dilatación lineal

Cada material tiene una **propiedad intrínseca** llamada *coeficiente de dilatación lineal* ($\alpha$), que indica cuánto se expande por grado Celsius. Se mide en unidades de $1/^\circ C$ o $^\circ C^{-1}$, y representa la fracción de su longitud original que cambia por cada unidad de temperatura.

Por ejemplo:  
- El **acero** tiene un $\alpha \approx 0,000012\, ^\circ C^{-1}$.  
- El **aluminio**, más expansivo, tiene $\alpha \approx 0,000024\, ^\circ C^{-1}$.

Estos valores no se inventan: provienen de experimentos donde se miden los cambios en longitud ante variaciones controladas de temperatura. Es fundamental para ingeniería y diseño industrial, ya que permite predecir comportamientos como grietas o deformaciones.

---

## 3. La fórmula que la describe

La relación entre el cambio en la longitud ($\Delta L$) y el cambio de temperatura ($\Delta T$) se escribe con la ecuación:  
$$
\Delta L = \alpha \cdot L_0 \cdot \Delta T
$$  
donde $L_0$ es la longitud inicial del objeto.

Esta fórmula muestra que $\Delta L$ es **directamente proporcional** a $\Delta T$: si la temperatura sube el doble, la expansión también se duplica. Pero solo vale para **pequeños cambios de temperatura**, ya que en grandes variaciones las leyes lineales dejan de aplicarse (efectos no lineales).

---

## 4. Aplicaciones y desafíos prácticos

La dilatación térmica es un factor crítico en construcción, transporte y tecnología. Por ejemplo:  
- **Vías del ferrocarril**: se dejan brechas entre los rieles para evitar que se doblen al calentarse.  
- **Puentes**: incluyen juntas de expansión que absorben el crecimiento térmico.  
- **Materiales en ingeniería**: al elegir materiales con $\alpha$ bajo (como el acero inoxidable), se minimiza la deformación.

Si no se considera, puede haber consecuencias graves: grietas en edificios, fallas en circuitos eléctricos o incluso rupturas en estructuras. Por eso, los ingenieros usan tablas de $\alpha$ para diseñar sistemas que soporten cambios térmicos.

---

## N. Conexión con lo que sigue

Este tema conecta directamente con la **dilatación superficial y volumétrica**, donde se estudia cómo cambian el área y el volumen de los cuerpos ante variaciones de temperatura, usando coeficientes similares pero distintos. Ver: `../dilatacion_termica_superficial/`.