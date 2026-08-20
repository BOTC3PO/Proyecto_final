# Matemática — Sistemas de dos ecuaciones (teoría)

> Tema del MAPA: `A5` (Tronco 2 — Algebraico). Depende de
> `../ecuacion-primer-grado/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es un sistema, los
tres métodos, casos especiales, errores comunes).

---

## Qué es un sistema de dos ecuaciones

Hasta acá, una ecuación tenía una sola incógnita (x). Un **sistema de dos
ecuaciones con dos incógnitas** son dos ecuaciones que comparten las
mismas dos letras (x e y), y la solución es el **par de valores** (x, y)
que cumple **las dos ecuaciones al mismo tiempo** — no alcanza con que
cumpla una sola.

Ejemplo:
```
x + y = 10
x − y = 2
```
La solución es x = 6, y = 4: reemplazando en las dos, ambas dan verdadero
(6+4=10, 6−4=2). Cualquier otro par que cumpla sólo una de las dos no es
solución del sistema.

Hay tres métodos para encontrar ese par. Los tres terminan reduciendo el
sistema a una sola ecuación de una sola incógnita — el mismo problema ya
resuelto en `../ecuacion-primer-grado/`.

## Método 1: Sustitución

Si una de las ecuaciones ya tiene una variable despejada (o es fácil de
despejar), se reemplaza esa expresión en la **otra** ecuación.

```
y = 2x + 1
3x + y = 16
```
1. Reemplazar y por (2x + 1) en la segunda ecuación:
   3x + (2x + 1) = 16
2. Resolver esa ecuación de una incógnita: 5x + 1 = 16 → x = 3
3. Volver a la primera para hallar y: y = 2(3) + 1 = 7

## Método 2: Igualación

Si las **dos** ecuaciones ya tienen la misma variable despejada, se
igualan directamente las dos expresiones.

```
y = 3x − 2
y = x + 6
```
1. Como las dos valen y, se igualan entre sí: 3x − 2 = x + 6
2. Resolver: 2x = 8 → x = 4
3. Reemplazar en cualquiera de las dos: y = 4 + 6 = 10

## Método 3: Suma y resta (eliminación)

Se suman o restan las dos ecuaciones completas, de manera que una de las
letras se cancele. A veces hace falta multiplicar una (o las dos)
ecuaciones antes, para que los coeficientes de esa letra queden iguales
(o iguales y opuestos).

```
2x + y = 11
x − y = 1
```
1. Los coeficientes de y ya son opuestos (+1 y −1): sumar las dos
   ecuaciones término a término hace que la y se cancele:
   (2x + x) + (y − y) = 11 + 1 → 3x = 12 → x = 4
2. Reemplazar en cualquiera: 4 − y = 1 → y = 3

Si los coeficientes no se cancelan directamente, se multiplica una
ecuación (o las dos) por el número que haga falta antes de sumar o restar
— siempre a la ecuación **completa**, los dos lados.

## Verificar la solución

Igual que con una ecuación simple, pero ahora hay que comprobar en **las
dos** ecuaciones originales, no sólo en una.

## Casos especiales

- **Sin solución**: las dos ecuaciones representan rectas paralelas (mismo
  "crecimiento" pero distinto punto de partida) — nunca se cruzan, no hay
  ningún par que cumpla las dos a la vez.
- **Infinitas soluciones**: las dos ecuaciones son, en el fondo, la misma
  recta escrita distinto (una es múltiplo de la otra) — cualquier punto de
  esa recta es solución.

Estos dos casos son la excepción, no la regla: la mayoría de los sistemas
tienen **una única solución**.

## Errores comunes

- En sustitución, reemplazar la expresión despejada en la **misma**
  ecuación de la que se despejó, en vez de en la otra — eso no aporta
  ninguna información nueva.
- En eliminación, sumar cuando había que restar (o al revés) — hay que
  fijarse si los coeficientes que se quieren cancelar tienen el mismo
  signo o signos opuestos.
- Multiplicar sólo una parte de una ecuación (no los dos lados completos)
  al preparar la eliminación.
- Encontrar x y olvidarse de calcular y — la solución de un sistema es
  siempre el **par** completo, no un solo número.
