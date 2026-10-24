# Matemática — Conteo (teoría)

> Tema del MAPA: `N1` (Tronco 1 — Numérico), mitad "Conteo" — separado de
> "Valor posicional", que tiene su propia teoría y cuestionario en
> `../valor-posicional/`. Ver `../../lista-temas-plana.md` y `../../troncos.md`.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** (`TheoryItem.type`), no `Texto`. Con 6 secciones
(principio de conteo, sucesor/antecesor, conteo salteado, ascendente/
descendente, comparar y ordenar, cardinalidad) el bloque de prosa queda
largo para leer de corrido — dividido en diapositivas (una idea por
diapositiva, con el ejemplo al lado) se sigue mejor. Mismo criterio para
`../valor-posicional/`, `../suma/` y `../resta/` — actualizado ahí también.

Contar es asignar, uno por uno, los números naturales a los elementos de un
conjunto, sin saltear ninguno y sin repetir. Es la habilidad numérica más
temprana y la base de todo lo demás: sin conteo no hay suma (que es contar
hacia adelante) ni resta (contar hacia atrás), ni multiplicación (contar
salteado).

## El principio de conteo (correspondencia biunívoca)

Contar un conjunto de objetos es hacer corresponder cada objeto con **un y
sólo un** número de la secuencia 1, 2, 3, ..., en orden, sin saltear ni
repetir ningún objeto. El último número dicho es la **cantidad total** de
elementos del conjunto (su cardinal). Dos errores típicos de quien está
aprendiendo a contar: contar el mismo objeto dos veces, o saltear un objeto
sin nombrarlo — ambos rompen la correspondencia uno a uno.

## Secuencia numérica: sucesor y antecesor

Cada número natural n tiene un **sucesor** (el que sigue: n + 1) y, si n no es
el primero, un **antecesor** (el que viene antes: n − 1). La secuencia
numérica es la cadena de sucesores: 1 → 2 → 3 → 4 → ... Saber el sucesor y el
antecesor de cualquier número, incluso cruzando una decena o una centena
(99 → 100, 999 → 1000), es lo que permite recitar o reconstruir la secuencia
sin memorizarla entera.

## Conteo salteado (de a 2, de a 5, de a 10...)

En vez de contar de uno en uno, se puede contar sumando siempre el mismo
salto: de 2 en 2 (2, 4, 6, 8...), de 5 en 5 (5, 10, 15, 20...), de 10 en 10
(10, 20, 30...). El conteo salteado es más rápido para cantidades grandes y
es, además, la puerta de entrada a la multiplicación: contar de 5 en 5 seis
veces (5, 10, 15, 20, 25, 30) es lo mismo que calcular 5 × 6.

## Conteo ascendente y descendente

Contar puede ir hacia adelante (ascendente, sumando) o hacia atrás
(descendente o "cuenta regresiva", restando). Contar hacia atrás es más
difícil que hacia adelante porque no se apoya tanto en la memoria repetida
(la secuencia ascendente se recita de memoria desde chicos; la descendente
hay que reconstruirla restando en cada paso).

## Comparar y ordenar cantidades

Dadas dos cantidades, se puede establecer si una es **mayor**, **menor** o
**igual** que la otra. Comparar de a dos números permite después **ordenar**
un conjunto de varios: de menor a mayor (orden ascendente) o de mayor a
menor (orden descendente). Es distinto de leer el valor posicional de un
número (eso decide *cuánto vale* una cifra según su lugar); acá sólo importa
poner las cantidades en fila.

## Contar los elementos de un rango (cardinalidad)

Una pregunta de conteo frecuente es "¿cuántos números hay entre A y B?". Si
A y B se cuentan ambos (inclusive), la cantidad es B − A + 1 (no B − A: hay
que sumar 1 porque el propio A también se cuenta). La misma lógica sirve
para contar cuántos pares o impares hay en un rango, o cuántos elementos
tiene una lista dada.
