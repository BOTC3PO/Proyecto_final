# Matemática — Función inversa y composición (teoría)

> Tema del MAPA: `FUNC1c` (Tronco 2 — Algebraico). Depende de
> `../funcion-dominio/` y `../funcion-imagen/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (composición, inversa,
cómo se relacionan, errores comunes).

---

## Composición de funciones

**Componer** dos funciones significa aplicar una y, al resultado,
aplicarle la otra. Se escribe (f∘g)(x), y significa **f(g(x))**: primero
se calcula g(x), y ese resultado es lo que entra a f.

```
f(x) = 2x + 1, g(x) = x²
(f∘g)(x) = f(g(x)) = f(x²) = 2x² + 1
```

**El orden importa**: (f∘g)(x) casi nunca es igual a (g∘f)(x).

```
(g∘f)(x) = g(f(x)) = g(2x + 1) = (2x + 1)²
```

2x² + 1 y (2x+1)² son expresiones distintas — componer en el otro orden
da, en general, otro resultado.

## Función inversa

La inversa de f (se escribe f⁻¹) es la función que **deshace** lo que
hizo f: si f(a) = b, entonces f⁻¹(b) = a. Aplicar f y después f⁻¹ (o al
revés) devuelve el valor original:

```
f(f⁻¹(x)) = x
f⁻¹(f(x)) = x
```

**Importante**: f⁻¹ no significa "1/f" — es la función inversa (deshacer
la operación), no el recíproco numérico.

## Cómo hallar la inversa de una función simple

1. Escribir y = f(x).
2. Despejar x en función de y (el mismo procedimiento de
   `../despejar-formula/`).
3. Intercambiar los nombres x e y (la inversa se escribe en términos de
   x, como cualquier función).

## Ejemplo resuelto

**f(x) = 2x + 3**
1. y = 2x + 3
2. Despejar x: x = (y − 3) / 2
3. Intercambiar nombres: **f⁻¹(x) = (x − 3) / 2**

**Verificación**: f(f⁻¹(5)) tiene que dar 5.
f⁻¹(5) = (5−3)/2 = 1. f(1) = 2(1)+3 = 5. ✓

## No toda función tiene inversa

Para que f⁻¹ exista (como función), f tiene que ser **biyectiva**: cada
valor de entrada da un valor de salida distinto (inyectiva), y se
alcanzan todos los valores del conjunto de llegada (sobreyectiva). Una
función como f(x) = x² no es invertible en todo su dominio (f(2) y f(−2)
dan el mismo resultado, 4) — para invertirla hay que restringir el
dominio (por ejemplo, sólo x ≥ 0).

## Errores comunes

- Confundir f⁻¹(x) con 1/f(x) — son cosas completamente distintas.
- Cambiar el orden de composición sin darse cuenta de que el resultado
  cambia: (f∘g)(x) ≠ (g∘f)(x) en general.
- Al hallar la inversa, despejar mal el signo o el orden de las
  operaciones (mismo cuidado que en `../ecuacion-primer-grado/`).
- Olvidarse del paso final de intercambiar x e y, y dejar la respuesta
  escrita en términos de "y" en vez de "x".
