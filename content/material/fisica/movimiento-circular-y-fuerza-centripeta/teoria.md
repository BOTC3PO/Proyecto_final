# Física — Movimiento circular y fuerza centrípeta (teoría)

> Tema del MAPA: `F13` (Tronco 3.b). Depende de
> `../dinamica-fuerzas-concurrentes/` y
> `../../matematica/circunferencia-y-circulo/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — la descripción del movimiento y la fuerza que lo
causa son varias ideas encadenadas, mejor separadas en diapositivas.

---

## Moverse en círculo a rapidez constante

En el **movimiento circular uniforme (MCU)**, un objeto recorre una
circunferencia manteniendo su **rapidez** (la magnitud de la
velocidad) constante. Pero atención: la **velocidad**, como vector,
**no es constante** — cambia de dirección todo el tiempo (siempre
tangente a la circunferencia). Cambiar de dirección, aunque no cambie
la magnitud, **es** una aceleración.

## Período y frecuencia

- **Período (`T`)**: el tiempo que tarda en dar una vuelta completa.
- **Frecuencia (`f`)**: cuántas vueltas da por segundo, `f = 1/T`
  (unidad: Hz, hertz).

## Velocidad angular y velocidad tangencial

- **Velocidad angular (`ω`)**: qué tan rápido cambia el ángulo
  recorrido, en radianes por segundo: `ω = 2π/T = 2π×f`.
- **Velocidad tangencial (`v`)**: la rapidez "de siempre" (m/s), la
  distancia recorrida (el perímetro de la circunferencia, `2π×r`)
  dividida el tiempo de una vuelta: `v = 2π×r/T = ω×r`.

## La aceleración centrípeta

Como la dirección de `v` cambia constantemente **hacia el centro** del
círculo, hay una aceleración que también apunta siempre hacia el
centro: la **aceleración centrípeta**.

```
a_c = v² / r = ω² × r
```

## La fuerza centrípeta: no es un tipo nuevo de fuerza

Por la segunda ley de Newton (`F = m×a`), si hay una aceleración
centrípeta, tiene que haber una fuerza neta que la produzca:

```
F_c = m × v² / r = m × ω² × r
```

**Punto clave, fácil de confundir**: la fuerza centrípeta **no es una
fuerza nueva** que se suma a las demás — es el **nombre que se le da**
a la fuerza neta (la resultante de las fuerzas reales que sí actúan:
tensión de una cuerda, gravedad, normal, rozamiento) cuando esa
resultante apunta hacia el centro de una trayectoria circular. En un
auto tomando una curva, es el rozamiento entre las ruedas y el asfalto.
En un satélite orbitando, es la gravedad. En una piedra atada a una
cuerda girando, es la tensión de la cuerda.

## Para qué sirve

Explica por qué hace falta peralte (inclinación) en una ruta con
curvas, por qué una centrifugadora de lavarropas separa el agua de la
ropa, por qué un satélite no necesita motores para mantenerse en
órbita, y por qué, si la cuerda de una piedra girando se corta, la
piedra sale disparada en línea recta (tangente), no hacia afuera en
línea curva — sin la fuerza centrípeta, no hay nada que la mantenga en
el círculo.
