# Matemática — Inecuaciones: identidad, ecuación e inecuación (teoría)

> Tema del MAPA: `A16` (Tronco 2 — Algebraico). Depende de
> `../ecuacion-primer-grado/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (los tres tipos de
igualdad, cómo se resuelve una inecuación, la regla del signo que da
vuelta, errores comunes).

---

## Tres formas de comparar dos expresiones

Hasta acá, todo lo que se escribió con un signo "=" se trató igual. En
realidad hay tres casos bien distintos, según **para qué valores de x** es
verdadera la igualdad (o desigualdad):

- **Identidad**: es verdadera para **cualquier** valor de x. Ejemplo:
  2(x + 3) = 2x + 6 — probá con el x que quieras, siempre coincide. No
  aporta información sobre x, porque los dos lados son la misma expresión
  escrita distinto (ver `../expresiones-equivalentes/teoria.md`).
- **Ecuación**: es verdadera sólo para **un valor puntual** (o un conjunto
  finito de valores) de x. Ejemplo: x + 3 = 5 — sólo x = 2 la cumple.
- **Inecuación**: usa una desigualdad (<, >, ≤, ≥) en vez de "=", y es
  verdadera para un **rango infinito** de valores. Ejemplo: x + 3 < 5 —
  la cumple cualquier x menor que 2 (x = 1, x = 0, x = −5, x = 1.9...),
  no un único número.

La diferencia central: una ecuación tiene una solución (un punto); una
inecuación tiene un **conjunto solución** (una región de la recta
numérica); una identidad no restringe nada (todos los reales son
solución).

## Resolver una inecuación: mismas reglas, con una excepción

Se resuelve exactamente igual que una ecuación (ver
`../ecuacion-primer-grado/teoria.md`): sumar, restar, multiplicar o
dividir lo mismo a los dos lados, hasta dejar la x sola. **Con una regla
nueva**: si se multiplica o divide a los dos lados por un número
**negativo**, la desigualdad se **da vuelta** (< pasa a ser >, y
viceversa).

Por qué: 2 < 5 es verdadero. Si se multiplican los dos lados por −1 sin
dar vuelta la desigualdad, quedaría −2 < −5, que es falso (−2 es mayor que
−5). Para que la comparación siga siendo verdadera, hay que invertirla:
−2 > −5.

## Ejemplo resuelto (sin dar vuelta)

**3x + 2 < 11**
1. Restar 2: 3x < 9
2. Dividir por 3 (positivo, no cambia el sentido): **x < 3**

## Ejemplo resuelto (con vuelta)

**−2x + 4 > 10**
1. Restar 4: −2x > 6
2. Dividir por −2 (negativo → se da vuelta la desigualdad): **x < −3**

Si acá no se diera vuelta la desigualdad, el resultado (x > −3) incluiría
valores que no cumplen la inecuación original — por ejemplo x = 0 daría
−2(0)+4 = 4, que NO es mayor que 10.

## Verificar una solución

Para una ecuación, se reemplaza y se comprueba que los dos lados dan el
mismo número. Para una inecuación, se reemplaza un valor **dentro** del
rango encontrado y se comprueba que la desigualdad se cumple — y,
para estar seguro del límite, un valor **justo afuera** del rango no debe
cumplirla.

## Clasificar: identidad, ecuación o inecuación

Ante una igualdad o desigualdad nueva, para clasificarla:

1. ¿Tiene un símbolo de desigualdad (<, >, ≤, ≥)? → **Inecuación**.
2. Si tiene "=": ¿simplificando los dos lados quedan exactamente iguales
   (mismos coeficientes, misma parte literal)? → **Identidad**.
3. Si no: → **Ecuación** (tiene una solución puntual, no todos los
   valores la cumplen).

## Errores comunes

- Olvidarse de dar vuelta la desigualdad al multiplicar o dividir por un
  número negativo.
- Tratar una inecuación como si tuviera una única solución (dar "x = 3"
  en vez de "x < 3").
- Confundir una identidad con una ecuación de infinitas soluciones "por
  casualidad" — no es casualidad, es que los dos lados son la misma
  expresión.
- Verificar sólo un valor dentro del rango y no chequear que uno afuera
  no cumple — puede haber un error de signo que dé un rango invertido
  aunque el número límite esté bien calculado.
