# Matemática — Ecuaciones exponenciales y logarítmicas (teoría)

> Tema del MAPA: `A11B` (Tronco 2 — Algebraico). Depende de
> `../familias-exponencial-logaritmica/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (ecuaciones exponenciales,
ecuaciones logarítmicas, soluciones extrañas, propiedades útiles,
errores comunes).

---

## Ecuaciones exponenciales: la incógnita en el exponente

**Caso con bases iguales**: si a^x = a^k (misma base a los dos lados),
entonces necesariamente x = k — una función exponencial es inyectiva
(nunca repite un valor), así que si los resultados coinciden, los
exponentes también.

```
3^x = 3^5  →  x = 5
```

**Caso general**: cuando no se puede igualar la base a simple vista, se
aplica logaritmo a los dos lados (deshaciendo la exponencial):

```
10^x = 500
log₁₀(10^x) = log₁₀(500)
x = log₁₀(500)
```

## Ecuaciones logarítmicas: la incógnita dentro del logaritmo

Se aplica la exponencial de la misma base a los dos lados, para deshacer
el logaritmo:

```
log₁₀(x) = 3
10^(log₁₀ x) = 10³
x = 1000
```

## Soluciones extrañas: verificar el dominio

Al resolver una ecuación logarítmica, siempre hay que comprobar que la
solución encontrada haga que el argumento del logaritmo sea **positivo**
(el dominio del logaritmo, ver `../funcion-dominio/`). A veces el
procedimiento algebraico da una solución que, al reemplazarla, deja un
logaritmo de un número negativo o cero — esa solución **no es válida**,
aunque el álgebra "diera bien".

## Propiedades útiles de los logaritmos

- log(a×b) = log(a) + log(b)
- log(a/b) = log(a) − log(b)
- log(aⁿ) = n×log(a)

Sirven para simplificar una ecuación logarítmica antes de resolverla,
combinando varios logaritmos en uno solo.

## Ejemplo resuelto: exponencial

**2^x = 32**
1. 32 = 2⁵, así que 2^x = 2⁵.
2. Bases iguales → x = 5.

## Ejemplo resuelto: logarítmica, con verificación

**log₁₀(x − 3) = 1**
1. 10^(log₁₀(x−3)) = 10¹ → x − 3 = 10 → x = 13.
2. Verificar dominio: x−3 = 13−3 = 10 > 0. ✓ Válida.

## Ejemplo con solución extraña

**log₁₀(x) + log₁₀(x+3) = log₁₀(4)**
1. Usando la propiedad del producto: log₁₀(x(x+3)) = log₁₀(4)
2. x(x+3) = 4 → x² + 3x − 4 = 0 → (x+4)(x−1) = 0 → x = −4 o x = 1.
3. Verificar dominio: con x=−4, log₁₀(−4) no está definido — se descarta.
   Con x=1, log₁₀(1)=0 y log₁₀(4) están definidos. ✓ Única solución: x=1.

## Errores comunes

- Aplicar el logaritmo (o la exponencial) sólo a un lado de la ecuación,
  rompiendo la igualdad.
- No verificar el dominio al final, y dar por válida una solución que en
  realidad hace negativo o cero el argumento de un logaritmo.
- Mezclar logaritmos de distinta base en la misma ecuación sin convertir
  primero.
- Olvidar aplicar las propiedades de logaritmos para combinar términos
  antes de despejar, cuando la ecuación tiene varios logaritmos sueltos.
