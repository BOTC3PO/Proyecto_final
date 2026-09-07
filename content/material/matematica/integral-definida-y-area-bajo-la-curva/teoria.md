# Matemática — Integral definida y área bajo la curva (teoria)

> Tema del MAPA: `A14DEF` (`troncos.md`). Depende de del nodo `A14` de `troncos.md` (sin carpeta propia todavía) (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## ¿Qué es la integral definida y por qué nos importa?

Imaginá que tenés una función $f(x)$ representada en un gráfico cartesiano y querés saber exactamente cuánto espacio hay entre la curva de esa función y el eje horizontal, dentro de un intervalo específico $[a, b]$. A esa cantidad de espacio se la llama **integral definida**. No es solo un cálculo abstracto; es la herramienta matemática que nos permite medir áreas irregulares que la geometría básica (como cuadrados o triángulos) no puede resolver por sí sola.

La importancia de este concepto radica en su capacidad para pasar de lo discreto a lo continuo. Mientras que la suma simple nos ayuda a juntar cantidades finitas, la integral definida nos permite "sumar" infinitas cantidades infinitesimales. Esto es fundamental en física para calcular distancias recorridas cuando la velocidad cambia, en economía para determinar el excedente del consumidor, o en ingeniería para calcular volúmenes de objetos complejos. En resumen, la integral definida es el puente entre el cálculo diferencial (que estudia cambios instantáneos) y la medición de magnitudes acumuladas.

## La conexión con el área bajo la curva

Para entender la integral definida, debemos visualizarla geométricamente. Si graficamos la función $y = f(x)$ en un plano, el área bajo la curva entre los puntos $x=a$ y $x=b$ representa el valor de la integral. Sin embargo, hay un detalle crucial: si la curva está por encima del eje $x$, el área se considera positiva; si está por debajo, se considera negativa. Esto significa que la integral definida calcula el **área neta**, no el área total absoluta.

Matemáticamente, esto se expresa como:

$$
A = \int_{a}^{b} f(x) \, dx
$$

Aquí, el símbolo $\int$ es una "S" alargada que recuerda a "suma", $f(x)$ es la función que estamos integrando, y $dx$ indica que estamos sumando pequeños segmentos horizontales de ancho infinitesimal. Los límites $a$ y $b$ son los valores iniciales y finales del intervalo. Es importante notar que si $f(x)$ es continua en $[a, b]$, esta área siempre existe y es única.

## El Teorema Fundamental del Cálculo: La llave maestra

Calcular el área sumando rectángulos infinitos sería imposible en la práctica. Aquí entra en juego una de las ideas más poderosas de las matemáticas: el **Teorema Fundamental del Cálculo**. Este teorema establece una relación directa entre la derivada y la integral. Nos dice que para calcular la integral definida de una función, no necesitamos hacer aproximaciones complicadas, sino que basta con encontrar una **función primitiva** (o antiderivada) $F(x)$ de $f(x)$, es decir, una función cuya derivada sea $f(x)$.

La fórmula práctica es:

$$
\int_{a}^{b} f(x) \, dx = F(b) - F(a)
$$

Esto significa que el proceso se reduce a tres pasos sencillos: primero, encontrar la primitiva $F(x)$ de la función dada; segundo, evaluar esa primitiva en el límite superior ($b$); y tercero, restarle el valor de la primitiva evaluada en el límite inferior ($a$). Este método transforma un problema geométrico complejo en un álgebra simple.

## Aplicación práctica: Ejemplo argentino

Vamos a ver cómo funciona esto con un ejemplo concreto. Supongamos que queremos calcular el área bajo la curva de la función $f(x) = 2x$ entre $x=0$ y $x=3$. Geométricamente, esto es un triángulo rectángulo, pero usaremos la integral para practicar el método.

Primero, buscamos la primitiva de $2x$. Sabemos que la derivada de $x^2$ es $2x$, por lo tanto, $F(x) = x^2$. Ahora aplicamos el teorema:

1. Evaluamos en el límite superior: $F(3) = 3^2 = 9$.
2. Evaluamos en el límite inferior: $F(0) = 0^2 = 0$.
3. Restamos: $9 - 0 = 9$.

El área es 9 unidades cuadradas. Si verificamos con geometría básica (base 3, altura 6, área = $3 \times 6 / 2 = 9$), vemos que el resultado coincide. Este mismo método se usa para calcular áreas bajo curvas de parábolas o funciones trigonométricas, comunes en problemas de física sobre movimiento acelerado o ondas sonoras, temas recurrentes en el currículo de secundaria.
