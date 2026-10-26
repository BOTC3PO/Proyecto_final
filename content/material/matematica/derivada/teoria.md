# Matemática — Derivada (teoría)

> Tema del MAPA: `A13` (Tronco 2 — Algebraico). Depende de
> `../continuidad/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (definición, regla de la
potencia, reglas básicas, interpretación geométrica y física, errores
comunes).

---

## Qué es la derivada

La **derivada** de f en x=a, f'(a), es el límite:

```
f'(a) = lim(h→0) [f(a+h) − f(a)] / h
```

Ese límite en particular tiene dos interpretaciones, exactamente
equivalentes:

- **Geométrica**: la **pendiente de la recta tangente** al gráfico de f
  en el punto (a, f(a)).
- **Física**: la **tasa de cambio instantánea** de f en a — por ejemplo,
  si f(t) es posición, f'(t) es velocidad instantánea (el cruce clásico
  con Física, ver `../../fisica/`).

## Regla de la potencia

Para derivar f(x) = xⁿ:

```
f'(x) = n·x^(n−1)
```

Se multiplica por el exponente, y se le resta 1 al exponente. Ejemplo:
la derivada de x³ es 3x².

## Reglas básicas

- **Constante**: la derivada de un número solo (sin x) es **0** — una
  constante no cambia, así que su tasa de cambio es 0.
- **Constante por función**: la derivada de k·f(x) es k·f'(x) — la
  constante "sale" sin cambiar.
- **Suma**: la derivada de una suma es la suma de las derivadas de cada
  término, por separado.

## Ejemplo resuelto

**Derivar f(x) = 3x⁴ + 5x² − 7x + 2**

- Derivada de 3x⁴: 3×4×x³ = 12x³
- Derivada de 5x²: 5×2×x¹ = 10x
- Derivada de −7x: −7 (la x tiene exponente 1, queda sólo el
  coeficiente)
- Derivada de 2 (constante): 0

**f'(x) = 12x³ + 10x − 7**

## Evaluar la derivada en un punto

f'(a) es un número: la pendiente de la tangente (o la tasa de cambio)
justo en x=a. Se calcula derivando la función completa, y después
reemplazando x por a.

Ejemplo: con f'(x) = 12x³+10x−7, f'(1) = 12+10−7 = 15.

## Ejemplo resuelto: velocidad instantánea

Si la posición de un objeto es s(t) = 5t² (en metros, t en segundos), la
velocidad instantánea es s'(t) = 10t. En t=3, la velocidad es
s'(3) = 30 m/s.

## Errores comunes

- Olvidar restar 1 al exponente (derivar x³ como 3x³ en vez de 3x²).
- Derivar una constante como si no fuera 0 (confundir el término
  independiente con un término que sí tiene x).
- Derivar término por término sin arrastrar el coeficiente que ya tenía
  cada uno (derivar 5x² como 2x en vez de 10x).
- Confundir f(a) (el valor de la función) con f'(a) (la pendiente en
  ese punto) — son dos números distintos, con significados distintos.
