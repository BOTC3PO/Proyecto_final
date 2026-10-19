# Electrónica — Divisor de tensión y código de colores (teoría)

> Tema del MAPA: `electronica/divisor-de-tension-y-codigo-de-colores` (nodo propuesto, ver `../dependencias.md`). Depende de `../componentes-resistencia-capacitor-diodo-transistor/` y de `../../fisica/ley-de-ohm/`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo leer el valor de una resistencia real y cómo usar dos resistencias para obtener una fracción de una tensión.

---

## 1. Leer el valor de una resistencia: el código de colores

Las resistencias pequeñas son demasiado chicas para imprimirles el número, así que su valor se indica con bandas de colores. Cada color representa un dígito: negro 0, marrón 1, rojo 2, naranja 3, amarillo 4, verde 5, azul 6, violeta 7, gris 8 y blanco 9.

En una resistencia de cuatro bandas, las dos primeras son los dígitos, la tercera es el multiplicador (la potencia de diez por la que se multiplica el número formado) y la cuarta es la tolerancia. El dorado indica una tolerancia de 5 % y el plateado de 10 %. Por ejemplo, marrón, negro, rojo, dorado significa 1, 0 y multiplicador 10 al cuadrado: 10 × 100 = 1000 Ω, es decir 1 kΩ con tolerancia de 5 %. Las de cinco bandas usan tres dígitos, un multiplicador y la tolerancia, y se emplean cuando hace falta más precisión.

La tolerancia indica cuánto puede apartarse el valor real del nominal. Una resistencia de 1 kΩ al 5 % puede medir entre 950 Ω y 1050 Ω. Por eso, si un diseño necesita un valor exacto, hay que medir la resistencia o elegir una de tolerancia más fina.

## 2. Valores normalizados

Los fabricantes no producen todos los valores posibles, sino series normalizadas. La serie E12, de uso común con tolerancia del 10 %, tiene doce valores por década: 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68 y 82, que luego se multiplican por 1, 10, 100, etc. Series más finas, como la E24 o la E96, existen para tolerancias menores. Si el cálculo da 4,3 kΩ, se elige el valor normalizado más cercano disponible.

## 3. Potencia disipada

Toda resistencia convierte energía eléctrica en calor. La potencia que disipa se calcula con P = V × I, o bien con P = I² × R, o con P = V² / R. Cada resistencia tiene una potencia máxima que soporta; las más comunes son de 1/4 W. Si la potencia calculada supera ese límite, la resistencia se calienta en exceso y puede dañarse, por lo que hay que elegir una de mayor potencia, con un margen de seguridad.

## 4. El divisor de tensión

Un divisor de tensión son dos resistencias en serie, R1 y R2, conectadas a una fuente Vin. Como la corriente es la misma en ambas, la tensión se reparte en proporción a cada resistencia. La tensión en R2, que es la que se toma como salida, vale:

Vout = Vin × R2 / (R1 + R2)

Si R1 = R2, la salida es la mitad de la entrada. Si R2 es mucho mayor que R1, la salida se acerca a Vin; si es mucho menor, se acerca a cero. Es la forma más simple de obtener una tensión menor a partir de una mayor, y se usa por ejemplo para adaptar la salida de un sensor o medir una tensión alta con un instrumento de rango chico.

## 5. La carga cambia el divisor

La fórmula vale cuando a la salida no se conecta nada, o se conecta algo de resistencia muy alta. Si se conecta una carga RL en paralelo con R2, la resistencia equivalente de esa parte baja y la tensión de salida cae. Por eso el divisor sirve para señales de poca corriente y no para alimentar equipos que consumen mucho: para eso se usa un regulador. Una regla práctica es que la carga tenga una resistencia al menos diez veces mayor que R2.

## N. Conexión con lo que sigue

Este tema es la base de `../transistor-como-interruptor-y-amplificador/` (donde se polariza un transistor con resistencias) y de `../capacitor-rc-carga-y-descarga/`.
