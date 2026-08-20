# Matemática — Ecuación de primer grado (teoría)

> Tema del MAPA: `A3` (Tronco 2 — Algebraico). Depende de
> `../expresiones-equivalentes/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es una ecuación, la
metáfora de la balanza, los casos progresivos, verificación, errores
comunes).

---

## Expresión vs. ecuación

Una **expresión** (2x + 3) no tiene signo igual — es una receta, no
plantea ninguna pregunta. Una **ecuación** (2x + 3 = 11) sí tiene un signo
igual, y plantea una pregunta concreta: ¿qué valor de x hace que los dos
lados valgan lo mismo? Ese valor es la **solución** de la ecuación.
"Resolver" una ecuación de primer grado significa despejar la variable:
dejarla sola de un lado, con su valor del otro.

## La balanza: la idea central

Una ecuación es como una balanza en equilibrio: los dos lados pesan lo
mismo. Si se le suma, resta, multiplica o divide algo a **un solo** lado,
la balanza se desequilibra. Pero si se le hace **lo mismo a los dos
lados**, el equilibrio se mantiene — y ese es el único movimiento
permitido para despejar x.

## Caso 1: x + a = c (deshacer una suma)

Para dejar la x sola, se resta a a los dos lados:

x + a = c → x + a − a = c − a → **x = c − a**

Ejemplo: x + 5 = 12 → x = 12 − 5 = 7.

## Caso 2: a·x = c (deshacer una multiplicación)

Para dejar la x sola, se divide por a a los dos lados (a ≠ 0):

a·x = c → (a·x)/a = c/a → **x = c/a**

Ejemplo: 4x = 20 → x = 20/4 = 5.

## Caso 3: a·x + b = c (los dos juntos)

Primero se deshace la suma, después la multiplicación — en orden
**inverso** a como está construida la expresión (que primero multiplica y
después suma):

a·x + b = c → a·x = c − b → **x = (c − b) / a**

Ejemplo: 3x + 4 = 19 → 3x = 15 → x = 5.

## Caso 4: variable en los dos lados

Cuando x aparece en ambos lados (a·x + b = d·x + e), primero hay que
juntar todos los términos con x de un mismo lado, restando d·x (o a·x) a
los dos lados:

a·x + b = d·x + e → a·x − d·x = e − b → (a − d)·x = e − b →
**x = (e − b) / (a − d)**

Ejemplo: 5x + 2 = 2x + 11 → 5x − 2x = 11 − 2 → 3x = 9 → x = 3.

## Caso 5: con paréntesis

Antes de despejar, hay que distribuir (ver
`../expresiones-equivalentes/teoria.md`) para que la ecuación quede en la
forma de los casos anteriores:

a·(x + b) = c → a·x + a·b = c → a·x = c − a·b → **x = (c − a·b) / a**

Ejemplo: 2(x + 3) = 16 → 2x + 6 = 16 → 2x = 10 → x = 5.

## Verificar la solución

Encontrar x no es el final — hay que comprobar que funciona,
reemplazando x por el valor encontrado en la ecuación **original** (no en
un paso intermedio) y viendo si los dos lados dan el mismo número. Si no
coinciden, hay un error en algún paso.

## Ejemplo resuelto paso a paso

**5x − 3 = 2x + 12**
1. Juntar las x de un lado: 5x − 2x − 3 = 12 → 3x − 3 = 12
2. Juntar los números del otro: 3x = 12 + 3 → 3x = 15
3. Despejar: x = 15 / 3 = 5
4. Verificar: 5(5) − 3 = 22; 2(5) + 12 = 22. Coincide. ✓

## Errores comunes

- Olvidar cambiar el signo al mover un término al otro lado (mover +3
  como +3 en vez de −3): moverlo es, en el fondo, restar (o sumar) a los
  dos lados, así que el término cruza el signo cambiado.
- Hacer una operación de un solo lado (sumar algo sólo a la izquierda, sin
  hacerlo también a la derecha) — rompe el equilibrio de la balanza.
- Dividir mal cuando el coeficiente de x es negativo: −3x = 12 da
  x = 12/(−3) = −4, no x = −12/3 leído con el signo perdido en el camino.
- No distribuir antes de despejar cuando hay un paréntesis, e intentar
  "despejar" con el paréntesis todavía cerrado.
