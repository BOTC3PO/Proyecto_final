# Economía — Interés compuesto como función (teoría)

> Tema del MAPA: `E15` (puente Álgebra → Economía). Depende de
> `../interes-compuesto/` y
> `../../matematica/familias-exponencial-logaritmica/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (M(t) como función
exponencial, comparación con interés simple, tiempo de duplicación,
errores comunes).

---

## La misma fórmula, mirada como función

En `../interes-compuesto/` ya se vio la fórmula M = C×(1+r)^t. Ahora que
existe el concepto de función exponencial (ver
`../../matematica/familias-exponencial-logaritmica/`), se puede mirar
esa misma fórmula como una **función de t**:

```
M(t) = C·(1+r)^t
```

Es exactamente f(x)=a·bˣ, con a=C (el coeficiente, capital inicial) y
b=(1+r) (la base, que determina qué tan rápido crece). Como r>0, la
base (1+r) es mayor que 1 — la función siempre es **creciente**.

## Dominio y comportamiento

- **Dominio**: t≥0 en el contexto financiero (no tiene sentido un
  período de tiempo negativo hacia atrás de cuándo se depositó).
- **Ordenada al origen**: M(0) = C×(1+r)⁰ = C — el monto en t=0 es,
  lógicamente, el capital inicial.
- **Crecimiento**: cada vez más rápido a medida que pasa el tiempo (es
  la característica central de cualquier función exponencial).

## Comparar interés simple (lineal) con compuesto (exponencial)

- **Interés simple**: M(t) = C + C·r·t = C(1+rt) — es una función
  **lineal** de t (pendiente C·r, ordenada al origen C).
- **Interés compuesto**: M(t) = C·(1+r)^t — es una función
  **exponencial** de t.

Para t=0 y t=1, las dos dan el mismo resultado (todavía no tuvieron
tiempo de diferenciarse). A partir de t>1, la exponencial siempre supera
a la lineal, y la diferencia se agranda cada vez más rápido — el mismo
principio general ya visto en
`../../matematica/familias-exponencial-logaritmica/teoria.md`
("cualquier exponencial con base>1 termina superando a cualquier
lineal").

## Tiempo de duplicación

¿Cuánto tarda un capital en duplicarse a interés compuesto? Se plantea
como una ecuación exponencial (ver
`../../matematica/ecuaciones-exponenciales-logaritmicas/`):

```
2C = C·(1+r)^t  →  2 = (1+r)^t  →  t = log_(1+r)(2)
```

## Ejemplo resuelto

**¿Cuánto tarda en duplicarse un capital a una tasa del 100% anual
(r=1, o sea, se duplica cada período por definición)?**

2 = (1+1)^t = 2^t → t=1 (un período, trivial porque la tasa ya es del
100%).

**Con una tasa más chica, digamos que (1+r)=1.5 (r=50%)**: 2=1.5^t —
hace falta más de un período; se resuelve con logaritmo, igual que en
`../../matematica/ecuaciones-exponenciales-logaritmicas/`.

## Errores comunes

- Tratar el interés compuesto como si también fuera una función lineal
  (mismo error que confundir cualquier exponencial con una recta).
- Pensar que interés simple y compuesto siempre dan resultados muy
  distintos — para t chico (0 o 1 período) coinciden exactamente.
- Calcular el tiempo de duplicación sumando en vez de usar una ecuación
  exponencial (el tiempo para duplicar no es "la mitad de nada", se
  despeja de la ecuación real).
- Olvidar que la base de esta función exponencial es (1+r), no r solo —
  un error común es escribir M(t)=C·r^t en vez de C·(1+r)^t.
