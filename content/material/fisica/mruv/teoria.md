# Física — MRUV (teoría)

> Tema del MAPA: `F3` (puente Álgebra → Física, primera mitad — split
> confirmado). Depende de `../mru/` y `../../matematica/ecuacion-cuadratica/`
> (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué cambia respecto al
MRU, las tres fórmulas, gráficos, errores comunes).

---

## Qué cambia respecto al MRU

En `../mru/`, la velocidad era constante. En el **movimiento rectilíneo
uniformemente variado** (MRUV), lo que es constante es la
**aceleración** — la velocidad sí cambia, siempre al mismo ritmo.

## Las tres fórmulas del MRUV

```
v(t) = v₀ + a·t                    (velocidad en función del tiempo)
x(t) = x₀ + v₀·t + ½·a·t²          (posición en función del tiempo)
v² = v₀² + 2·a·Δx                  (relación sin tiempo)
```

La tercera fórmula es útil cuando no se conoce (ni hace falta) el
tiempo — relaciona directamente velocidades y distancia recorrida.

## Gráficos

- **v-t**: una recta (no horizontal) — la pendiente de esa recta es la
  aceleración a.
- **x-t**: ya no es una recta, es una **parábola** (ver
  `../../matematica/funcion-cuadratica-parabola/`) — x(t) es una función
  cuadrática de t.

## El signo de la aceleración

a puede ser positiva (acelerando, la velocidad aumenta en valor
absoluto en el sentido del movimiento) o negativa (frenando, o
acelerando en sentido contrario). El signo de a respecto al signo de v
determina si el objeto acelera o frena.

## Ejemplo resuelto

**Un auto parte con v₀=10 m/s y acelera a 2 m/s² durante 5 s.**

- v(5) = 10 + 2×5 = 20 m/s.
- x(5) = 0 + 10×5 + ½×2×25 = 50 + 25 = 75 m.
- Verificación con la fórmula sin tiempo: v² = 10² + 2×2×75 = 100+300=400
  → v=20 m/s. ✓ (coincide)

## Errores comunes

- Usar v=d/t (fórmula de MRU) cuando la velocidad no es constante — en
  MRUV hace falta una de las tres fórmulas de arriba.
- Olvidar el ½ en la fórmula de posición (x=x₀+v₀t+at², sin el ½, es un
  error muy común).
- Confundir la velocidad INICIAL (v₀) con la velocidad en un instante
  cualquiera (v(t)) — son cosas distintas salvo en t=0.
- No prestar atención al signo de a: una aceleración "negativa" no
  siempre significa que el objeto frena, depende del signo de v.
