# Matemática — Variable aleatoria: discreta vs. continua (teoria)

> Tema del MAPA: `D19` (Tronco 4.b). Depende de
> `../dispersion-rango-y-desvio/` y `../distribucion-normal/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola idea (una clasificación en dos casos), no
necesita varias diapositivas.

---

## Qué es una variable aleatoria

Una **variable aleatoria** es, en el fondo, un número que depende del
resultado de algo azaroso: "cuántas caras salen en 3 tiros de moneda",
"cuánto tarda en llegar el próximo colectivo", "cuánto mide una
persona elegida al azar". Antes de conocer el resultado, no se sabe
qué valor va a tomar — pero sí se puede describir **cómo se reparten
las probabilidades** entre los valores posibles.

Esa descripción cambia por completo según el tipo de variable.

## Variable aleatoria discreta

Es **discreta** cuando sus valores posibles se pueden **enumerar**
(contar uno por uno, aunque sean infinitos): 0, 1, 2, 3... Ejemplos:
cantidad de caras en varios tiros de moneda, cantidad de llamadas a un
call center en una hora, cantidad de hijos de una familia.

Para una variable discreta, tiene sentido preguntar directamente
`P(X = k)` — "¿cuál es la probabilidad de que salgan exactamente 2
caras?" — y se puede armar una tabla completa con la probabilidad de
cada valor posible. La suma de todas esas probabilidades siempre da 1.

`../distribucion-binomial/` (ya vista) es el ejemplo central: cuenta
un número entero de éxitos.

## Variable aleatoria continua

Es **continua** cuando puede tomar **cualquier valor** dentro de un
intervalo, no sólo valores enteros contables: la altura de una
persona (1,73 m, 1,734 m, 1,7341 m... siempre hay un valor más preciso
posible), el tiempo de espera de un colectivo, la temperatura.

Acá `P(X = valor exacto)` **siempre da (esencialmente) cero** — hay
infinitos valores posibles entre dos números cualesquiera, así que la
probabilidad de acertar uno exacto es nula. Lo que sí tiene sentido es
preguntar por **intervalos**: `P(a ≤ X ≤ b)` ("¿cuál es la
probabilidad de que el colectivo tarde entre 5 y 10 minutos?").

`../distribucion-normal/` (ya vista) es el ejemplo central: describe
magnitudes continuas como altura, notas, errores de medición.

## Por qué esta clasificación importa

Antes de elegir qué distribución usar para modelar un problema, la
primera pregunta es siempre: **¿los resultados se pueden contar
(discreta) o forman un continuo (continua)?** La respuesta determina
qué herramienta corresponde:

| Tipo de variable | Ejemplo | Distribución típica |
|---|---|---|
| Discreta | Cantidad de éxitos en n intentos | `../distribucion-binomial/` |
| Discreta | Cantidad de eventos raros por intervalo | `../distribucion-de-poisson/` |
| Continua | Magnitud física (altura, error, nota) | `../distribucion-normal/` |
| Continua | Tiempo hasta que pase algo | `../distribucion-exponencial/` |

## Para qué sirve

Antes de esta clasificación, binomial, normal, exponencial y Poisson
eran cuatro fórmulas sueltas sin conexión visible entre ellas. Con
esta distinción, son cuatro respuestas a la misma pregunta ("¿qué tipo
de azar es este?"): dos discretas (contar eventos) y dos continuas
(medir una magnitud o un tiempo).
