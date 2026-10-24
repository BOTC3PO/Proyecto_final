# Matemática — Asíntotas (teoria)

> Tema del MAPA: `A12ASIN` (`troncos.md`). Depende de del nodo `A12` de `troncos.md` (sin carpeta propia todavía) (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## ¿Qué son las asíntotas y por qué importan?

Imaginate que estás observando el comportamiento de una función cuando los valores de $x$ crecen o decrecen enormemente, o cuando se acercan a un número que la función no puede tomar. Las asíntotas son líneas rectas imaginarias que la gráfica de la función se acerca cada vez más, pero que, en la mayoría de los casos, nunca llega a tocar. Son como un horizonte: cuanto más avanzás hacia él, más cerca pareces estar, pero nunca lo alcanzás del todo.

Comprender las asíntotas es fundamental en matemática porque nos permite anticipar cómo se comportará una curva en los extremos o en puntos críticos, sin necesidad de graficar cada punto posible. Esto simplifica enormemente el análisis de funciones complejas, como las racionales, y nos ayuda a identificar discontinuidades o límites infinitos. En términos prácticos, saber dónde están las asíntotas nos da una "estructura ósea" sobre la cual dibujar la gráfica con precisión y entender si la función tiende a crecer sin límite o a estabilizarse en un valor fijo.

## Asíntota vertical: el límite que no se puede cruzar

La asíntota vertical aparece generalmente en funciones donde el denominador se vuelve cero, provocando que la función tienda a infinito. Ocurre cuando $x$ se acerca a un valor específico $a$, pero la función no está definida en ese punto. Matemáticamente, decimos que existe una asíntota vertical en $x = a$ si el límite de la función cuando $x$ tiende a $a$ (por la derecha o por la izquierda) es positivo o negativo infinito.

Por ejemplo, en la función $f(x) = \frac{1}{x-2}$, cuando $x$ se acerca a $2$, el denominador se hace cada vez más pequeño, haciendo que el resultado crezca enormemente. Por eso, la recta vertical $x = 2$ es una asíntota. Es importante notar que la gráfica puede acercarse por arriba o por abajo, dependiendo de si $x$ llega a $2$ desde valores mayores o menores, pero la línea vertical actúa como una barrera invisible que la curva respeta.

## Asíntota horizontal y oblicua: el comportamiento en el infinito

Mientras que la asíntota vertical nos dice qué pasa en un punto específico, las asíntotas horizontales y oblicuas describen el comportamiento de la función cuando $x$ se vuelve extremadamente grande (positivo o negativamente).

La **asíntota horizontal** es una recta $y = k$ a la que la función se acerca cuando $x$ tiende a infinito. Esto ocurre comúnmente en funciones racionales donde el grado del numerador es menor o igual al grado del denominador. Por ejemplo, si la función es $f(x) = \frac{3x+1}{x^2+1}$, al hacer $x$ muy grande, el valor de la función se acerca a $0$. Por lo tanto, el eje $X$ ($y=0$) es una asíntota horizontal.

Por otro lado, la **asíntota oblicua** aparece cuando el grado del numerador es exactamente uno mayor que el grado del denominador. En este caso, la función no se estabiliza en un número, sino que crece (o decrece) siguiendo una recta inclinada de la forma $y = mx + n$. Para encontrarla, se realiza la división entera del polinomio del numerador entre el del denominador; el cociente (sin el resto) nos da la ecuación de esa recta oblicua. Es decir, cuando $x$ es muy grande, la función se comporta casi como esa línea recta.
