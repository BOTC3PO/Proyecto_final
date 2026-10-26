# Electrónica — Lógica secuencial: flip-flops y contadores (teoría)

> Tema del MAPA: `electronica/logica-secuencial-flip-flops-y-contadores` (nodo propuesto, ver `../dependencias.md`). Depende de `../logica-combinacional-sumadores-multiplexores/`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Circuitos digitales con memoria: latches, flip-flops, registros y contadores.

---

## 1. Combinacional versus secuencial

En un circuito combinacional, la salida depende solo de las entradas presentes. En un circuito secuencial, la salida depende también del estado anterior: el circuito tiene memoria. La base de esa memoria es un lazo de realimentación: la salida de una compuerta vuelve a la entrada de otra, de modo que el circuito puede mantener un valor aun cuando la entrada que lo provocó desaparezca.

## 2. El latch SR

El latch SR (de Set y Reset) se arma con dos compuertas NOR o NAND realimentadas. Tiene una salida Q y su complemento. Con la entrada S activa, la salida Q pasa a 1 (set); con la R activa, pasa a 0 (reset); con ambas inactivas, mantiene el valor anterior. La combinación en la que ambas están activas a la vez es inválida o prohibida, porque deja el estado indefinido al soltarlas. Es el elemento mínimo de memoria de un bit.

## 3. El reloj y los flip-flops

En los sistemas digitales, para que muchos elementos de memoria cambien de forma ordenada, se usa una señal de reloj, una onda cuadrada de frecuencia fija. Un flip-flop es un elemento de memoria que solo cambia de estado en un flanco del reloj. Es decir, en el instante en que la señal pasa de 0 a 1 (flanco de subida) o de 1 a 0 (flanco de bajada). Entre flancos, ignora los cambios de la entrada. Esta sincronización evita que los cambios se propaguen de forma desordenada.

## 4. Flip-flops D, JK y T

El flip-flop D (de dato) es el más simple: en cada flanco activo copia a la salida Q el valor que tiene la entrada D. Sirve para guardar un bit. El flip-flop JK extiende al SR y resuelve su caso prohibido: con J = K = 1, la salida invierte su valor en cada flanco (modo toggle). El flip-flop T es un JK con J y K unidos: cuando T = 1 cambia de estado en cada flanco, y cuando T = 0 mantiene su valor. Con T = 1, la salida alterna a la mitad de la frecuencia del reloj: divide la frecuencia por 2.

## 5. Registros

Un registro es un conjunto de flip-flops D con un mismo reloj, que guarda un número de varios bits. Un registro de 8 bits guarda un byte. Si los flip-flops se conectan en fila, de modo que la salida de uno entra al siguiente, se obtiene un registro de desplazamiento: en cada pulso de reloj, los bits avanzan una posición. Se usa para convertir datos entre serie y paralelo, y es la base de muchos protocolos de comunicación.

## 6. Contadores

Un contador es una cadena de flip-flops que cuenta pulsos de reloj. Con n flip-flops se puede contar hasta 2^n − 1, es decir, hay 2^n estados distintos: 4 flip-flops cuentan de 0 a 15. Cuando llega al máximo, vuelve a cero. En un contador asincrónico, cada flip-flop recibe como reloj la salida del anterior, lo que lo hace simple pero lento; en un contador sincrónico, todos comparten el mismo reloj, lo que es más rápido y confiable. Un contador de módulo N cuenta N estados y se reinicia, y se usa, por ejemplo, para dividir frecuencias, medir tiempos o armar relojes digitales.

## N. Conexión con lo que sigue

Este tema conecta con `../temporizador-555-y-osciladores/`, que genera la señal de reloj, y con `../microcontroladores-y-microprocesadores/`, cuya memoria y registros son flip-flops.
