# Matemática — Divisores (teoría)

> Tema del MAPA: `N4` (parte) — depende de `../multiplos/`. Ver
> `../../../lista-temas-plana.md`, `../../../troncos.md` y
> `../../dependencias.md`.

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** alcanza, mismo criterio que `../multiplos/`.

---

## Qué es un divisor

B es **divisor** de A si A dividido B da resto 0 (ver
`../../division/teoria.md`, división exacta). Es la misma relación de
`../multiplos/teoria.md`, mirada al revés: si A es múltiplo de B, entonces
B es divisor de A, y viceversa. 12 es múltiplo de 3, y 3 es divisor de 12
— son la misma afirmación contada desde los dos lados.

## Cómo encontrar todos los divisores de un número

Se prueba, uno por uno, si cada número desde 1 hasta el propio número lo
divide exactamente. En la práctica alcanza con probar hasta la mitad (o
hasta la raíz cuadrada, para quien ya vio raíces): ningún número mayor a
la mitad del que se está analizando puede ser divisor, salvo el número
mismo.

## Casos especiales

- El 1 es divisor de todos los números.
- Todo número es divisor de sí mismo.
- Un divisor nunca puede ser mayor que el número que divide (salvo dividir
  al 0, que no se trabaja en la escuela).

## Para qué sirve

Encontrar todos los divisores de dos números y ver cuáles tienen en común
es el primer paso para calcular el MCD (Máximo Común Divisor), tema que
viene después de las reglas de divisibilidad y los números primos en el
mapa.
