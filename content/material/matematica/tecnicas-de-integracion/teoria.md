# Matemática — Técnicas de integración (teoria)

> Tema del MAPA: `A14TEC` (`troncos.md`). Depende de del nodo `A14` de `troncos.md` (sin carpeta propia todavía) (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## ¿Qué son las técnicas de integración y por qué son necesarias?

La integración es, fundamentalmente, el proceso inverso a la derivación. Si la derivada nos permite analizar cómo cambia una cantidad en un instante dado, la integral nos permite calcular acumulaciones, como el área bajo una curva, el volumen de un sólido o la distancia recorrida. Sin embargo, no todas las funciones se pueden integrar directamente aplicando la tabla básica de primitivas. Muchas expresiones matemáticas son demasiado complejas para ser resueltas de un solo paso, lo que requiere descomponerlas o transformarlas en formas más manejables.

Por esta razón, existen técnicas específicas que actúan como herramientas de simplificación. Imaginá que la integración es como desatar un nudo: a veces necesitás tirar de un extremo, otras veces girar la cuerda, y en otros casos, cortar un lazo específico. Las técnicas de sustitución, por partes y fracciones parciales son los métodos más comunes para "desatar" estas integrales difíciles. Dominarlas es esencial para cualquier estudiante de secundaria que quiera avanzar en cálculo, ya que son la base para resolver problemas de física, economía y ciencias naturales que involucran tasas de cambio y acumulaciones.

## La técnica de sustitución (cambio de variable)

La técnica de sustitución, también conocida como cambio de variable, se basa en la regla de la cadena de la derivación. Su objetivo es transformar una integral complicada en una más simple eligiendo una nueva variable $u$ que sea una función interna de la expresión original. Por ejemplo, si tenés una integral como $\int 2x \cdot e^{x^2} \, dx$, notás que $x^2$ está dentro de la exponencial y su derivada ($2x$) aparece multiplicando afuera.

Al hacer el cambio $u = x^2$, entonces $du = 2x \, dx$. La integral se transforma mágicamente en $\int e^u \, du$, que es trivial de resolver. El paso final crucial es volver a escribir el resultado en términos de la variable original $x$. Esta técnica es extremadamente útil cuando la integranda es una composición de funciones y la derivada de la función interna está presente (o puede ser ajustada mediante constantes) en el exterior.

## Integración por partes

La integración por partes es la contraparte de la regla del producto para derivadas. Se utiliza cuando la función a integrar es el producto de dos funciones diferentes, como un polinomio multiplicado por una exponencial o una trigonométrica. La fórmula general es $\int u \, dv = uv - \int v \, du$.

El arte de esta técnica reside en elegir correctamente qué parte será $u$ y cuál será $dv$. Una regla mnemotécnica común es elegir $u$ como la función que se simplifica al derivarse (como un polinomio) y $dv$ como la función que es fácil de integrar (como una exponencial o trigonométrica). Si elegís mal, la nueva integral $\int v \, du$ puede volverse más compleja que la original. Este método es indispensable para integrales donde la sustitución directa no funciona porque no hay una función compuesta clara.

## Fracciones parciales y ejemplos prácticos

Las fracciones parciales sirven para integrar funciones racionales, es decir, cocientes de polinomios $\frac{P(x)}{Q(x)}$. El objetivo es descomponer la fracción compleja en una suma de fracciones más simples que ya conocemos integrar, como $\frac{1}{x}$ o $\frac{1}{x+1}$. Esto se hace factorizando el denominador $Q(x)$ y determinando los coeficientes desconocidos.

Para ver cómo se aplican en la vida real, pensemos en un ejemplo de física argentina. Si calculás el trabajo realizado por un motor que varía su potencia según una función racional, deberás integrar esa función. O bien, en economía, si el ingreso marginal de una empresa local está dado por una fracción racional, para hallar el ingreso total acumulado durante un trimestre, deberás aplicar la técnica de fracciones parciales. Estas herramientas convierten problemas abstractos en cálculos precisos que permiten tomar decisiones reales, desde diseñar puentes hasta planificar presupuestos nacionales.
