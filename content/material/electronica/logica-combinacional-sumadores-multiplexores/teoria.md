# Electrónica — Lógica combinacional: sumadores y multiplexores (teoría)

> Tema del MAPA: `electronica/logica-combinacional-sumadores-multiplexores` (nodo propuesto, ver `../dependencias.md`). Depende de `../compuertas-nand-nor-xor-y-universalidad/` y de `../../informatica/sistemas-numeracion/`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Circuitos digitales cuya salida depende solo de las entradas del momento: sumadores, comparadores, multiplexores y decodificadores.

---

## 1. Qué es la lógica combinacional

Un circuito combinacional es aquel cuya salida depende únicamente de la combinación de entradas presentes en ese instante, sin memoria de lo que ocurrió antes. Se construye con compuertas lógicas, sin realimentación, y se describe completamente con una tabla de verdad o una expresión booleana. Es la base de los bloques aritméticos y de selección de datos de cualquier procesador.

## 2. El semisumador

Para sumar dos bits A y B hay cuatro casos: 0+0 = 0, 0+1 = 1, 1+0 = 1 y 1+1 = 10 en binario (es decir, resultado 0 y acarreo 1). Un semisumador (half adder) tiene dos salidas: la suma S y el acarreo C. La suma coincide con una XOR (S = A ⊕ B) y el acarreo con una AND (C = A · B). Se llama semi porque no admite un acarreo de entrada, así que sirve únicamente para el bit menos significativo.

## 3. El sumador completo

El sumador completo (full adder) suma tres bits: A, B y el acarreo de entrada Cin. Sus salidas son la suma S = A ⊕ B ⊕ Cin y el acarreo de salida Cout = A·B + Cin·(A ⊕ B). Se arma con dos semisumadores y una compuerta OR. Por ejemplo, 1 + 1 + 1 da suma 1 y acarreo 1, porque 1 + 1 + 1 = 11 en binario.

## 4. Sumador de varios bits

Para sumar números de varios bits se conectan varios sumadores completos en cadena: el acarreo de salida de cada uno entra al siguiente. Esto se llama sumador de acarreo en cascada (ripple carry). Un sumador de 4 bits suma dos números de 0 a 15; el resultado puede necesitar un quinto bit (el acarreo final). La desventaja es que el acarreo debe propagarse por toda la cadena, lo que limita la velocidad; para sumadores rápidos se usan estructuras de acarreo anticipado. La resta se obtiene sumando el complemento a dos del segundo número.

## 5. El multiplexor

Un multiplexor (MUX) elige una entre varias entradas de datos y la envía a la salida, según el valor de las líneas de selección. Con n líneas de selección se pueden elegir 2^n entradas: un MUX de 2 a 1 usa una línea de selección; uno de 4 a 1, dos; uno de 8 a 1, tres. Funciona como un conmutador controlado digitalmente y se usa para elegir de qué fuente tomar un dato. El demultiplexor hace lo contrario: lleva una entrada a una de varias salidas.

## 6. Decodificador y comparador

Un decodificador activa una sola salida entre 2^n posibles, según el código binario de n bits que reciba; por ejemplo, un decodificador de 2 a 4 activa una de cuatro salidas. Se usa para seleccionar memorias, dispositivos o los segmentos de un display. El comparador, por su parte, indica si un número es mayor, menor o igual que otro; el caso de igualdad se arma con compuertas XNOR.

## N. Conexión con lo que sigue

Este tema pasa a `../logica-secuencial-flip-flops-y-contadores/`, donde se agrega memoria a las compuertas, y se vincula con `../../informatica/cpu-unidad-de-control-y-alu/`, que usa sumadores y multiplexores internamente.
