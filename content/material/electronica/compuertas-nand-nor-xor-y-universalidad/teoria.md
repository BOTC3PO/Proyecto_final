# Electrónica — Compuertas NAND, NOR, XOR y universalidad (teoría)

> Tema del MAPA: `electronica/compuertas-nand-nor-xor-y-universalidad` (nodo propuesto, ver `../dependencias.md`). Depende de `../logica-digital-puertas-and-or-not/` y de `../../informatica/algebra-booleana/`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Las compuertas derivadas, por qué NAND y NOR alcanzan para construir cualquier circuito lógico, y cómo se usan las leyes de De Morgan.

---

## 1. Repaso de las compuertas básicas

En el tema anterior se vieron AND (la salida es 1 solo si ambas entradas son 1), OR (la salida es 1 si al menos una entrada es 1) y NOT (invierte la entrada). Con ellas se puede armar cualquier función lógica, pero en la práctica se usan también otras compuertas que combinan o modifican esos comportamientos.

## 2. NAND y NOR

La compuerta NAND es un AND seguido de un NOT: da 0 solo cuando ambas entradas son 1, y 1 en todos los demás casos. Su nombre viene de "NOT AND". La compuerta NOR es un OR seguido de un NOT: da 1 solo cuando ambas entradas son 0, y 0 en los demás casos. Sus tablas de verdad son simplemente las de AND y OR con la salida invertida.

| A | B | NAND | NOR |
|---|---|---|---|
| 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |

## 3. XOR y XNOR

La compuerta XOR, o "OR exclusivo", da 1 cuando las dos entradas son diferentes y 0 cuando son iguales. Es decir, es 1 si exactamente una de las dos entradas es 1. Su negación es la XNOR, que da 1 cuando las entradas son iguales y por eso se usa como comparador de igualdad. La XOR aparece en la suma binaria (la suma de dos bits, sin acarreo, es una XOR), en la detección de errores y en la criptografía.

## 4. Universalidad de NAND y NOR

Un conjunto de compuertas es universal si con él se puede construir cualquier función lógica. NAND y NOR lo son por sí solas. Con NAND se obtienen las demás: un NOT se logra uniendo las dos entradas de una NAND; un AND es una NAND seguida de un NOT; y un OR se consigue invirtiendo cada entrada antes de pasarlas por una NAND. Lo mismo vale, de forma simétrica, para la NOR.

Esto tiene una consecuencia práctica: un fabricante puede producir un solo tipo de compuerta, en grandes cantidades, y construir con ella cualquier circuito, lo que simplifica la fabricación y baja los costos. Los circuitos integrados de la familia 7400, por ejemplo, contienen cuatro compuertas NAND de dos entradas cada una.

## 5. Las leyes de De Morgan

Las leyes de De Morgan relacionan AND y OR mediante la negación. La primera dice que la negación de un producto es la suma de las negaciones: NOT (A·B) = NOT A + NOT B. La segunda dice que la negación de una suma es el producto de las negaciones: NOT (A + B) = NOT A · NOT B. En términos de circuitos, una NAND equivale a un OR con las entradas invertidas, y una NOR equivale a un AND con las entradas invertidas. Estas leyes sirven para reescribir expresiones y para pasar un diseño de un tipo de compuerta a otro.

## 6. Simplificar para ahorrar compuertas

Usar el álgebra booleana para simplificar una expresión permite implementarla con menos compuertas, lo que baja el costo, el consumo y los retardos. Por ejemplo, A + A·B = A. Los resultados se verifican con la tabla de verdad: dos expresiones son equivalentes si dan la misma salida para todas las combinaciones de entrada.

## N. Conexión con lo que sigue

Este tema es la base de `../logica-combinacional-sumadores-multiplexores/`, donde se combinan compuertas para sumar números y seleccionar datos.
