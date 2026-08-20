# Matemática — Redondeo (teoría)

> Tema del MAPA: `N8` (mitad) — separado de "Decimales", ya cubierto en
> `../decimales/`. Depende de `../decimales/` y `../valor-posicional/`
> (ver `../dependencias.md`). El redondeo de ENTEROS (a la decena, centena,
> millar) ya está cubierto en `../valor-posicional/`; acá el foco es
> redondear números DECIMALES a una cantidad de cifras decimales.

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** alcanza — es una sola regla aplicada a un nuevo contexto
(decimales en vez de enteros), no hacen falta muchas secciones.

---

## La regla (repaso, aplicada a decimales)

Redondear a una cierta cantidad de cifras decimales es mirar la cifra que
sigue justo después de la posición a la que se redondea: si es 5 o más,
la última cifra que queda sube en 1; si es menor a 5, queda igual — y se
descarta todo lo que sigue.

**Ejemplo**: redondear 3,14159 a 2 cifras decimales — se mira la tercera
cifra decimal (1, que es menor a 5) → 3,14. Redondear el mismo número a 4
cifras decimales — se mira la quinta cifra (9, que es ≥5) → 3,1416 (el
1416 sube desde 1415 porque el 9 empuja).

## Redondear al entero más cercano

Es el mismo criterio, mirando la primera cifra decimal: si es 5 o más, la
parte entera sube 1 y se descarta toda la parte decimal. Ejemplo: 7,62
redondeado al entero más cercano es 8 (la cifra de los décimos, 6, es
≥5).

## Truncar no es lo mismo que redondear

**Truncar** un decimal es cortarlo directamente en una cifra, sin mirar si
la siguiente es 5 o más (siempre "para abajo"). Truncar 3,489 a 2 cifras
decimales da 3,48 — mientras que redondear da 3,49 (porque la tercera
cifra, 9, es ≥5). No son lo mismo, aunque a veces coincidan.

## Para qué sirve en la práctica

El caso más común es el dinero: los precios y vueltos casi siempre se
redondean a 2 cifras decimales (los centavos), porque no existen fracciones
de centavo en la moneda física.
