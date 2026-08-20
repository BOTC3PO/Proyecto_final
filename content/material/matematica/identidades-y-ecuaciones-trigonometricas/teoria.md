# Matemática — Identidades y ecuaciones trigonométricas (teoría)

> Tema del MAPA: `TRIG3` (Tronco 3.b — Geometría analítica, trigonometría
> y vectores). Depende de
> `../funciones-trigonometricas-seno-coseno/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (identidad vs. ecuación,
identidad pitagórica, ángulos complementarios, resolver ecuaciones)
mejor separadas en diapositivas.

---

## Identidad vs. ecuación: la diferencia clave

Una **identidad** trigonométrica es una igualdad que se cumple para
**todo** valor del ángulo, sin excepción — como `sen²θ + cos²θ = 1`. Una
**ecuación** trigonométrica, en cambio, es una igualdad que sólo se
cumple para **algunos** valores específicos del ángulo — como
`sen(θ) = 0,5`, que sólo es cierta para ciertos θ puntuales (30°, 150°,
y sus repeticiones cada vuelta). Confundir una identidad con una
ecuación es el error conceptual más común de este tema.

## La identidad pitagórica

Ya mencionada en `../razones-trigonometricas/`, ahora se puede escribir
como identidad válida para cualquier ángulo (gracias al círculo unitario
de `../funciones-trigonometricas-seno-coseno/`):

```
sen²θ + cos²θ = 1
```

De esta identidad se despeja cualquiera de los dos términos:

```
sen²θ = 1 − cos²θ         cos²θ = 1 − sen²θ
```

(Para hallar `senθ` o `cosθ`, no sólo su cuadrado, hace falta sacar raíz
cuadrada y elegir el signo correcto según el cuadrante — este módulo
trabaja sólo con el primer cuadrante, donde ambos son positivos.)

## Identidades de ángulos complementarios

Dos ángulos son complementarios si suman 90° (ver `../angulos/`). Para
ángulos complementarios, seno y coseno se **intercambian**:

```
sen(90° − θ) = cos(θ)
cos(90° − θ) = sen(θ)
```

Es la misma simetría ya vista en los valores notables de
`../razones-trigonometricas/` (`sen 30° = cos 60°`).

## Resolver una ecuación trigonométrica

Resolver `sen(θ) = k` significa encontrar **qué ángulo(s)** θ cumplen
esa igualdad. Para valores de `k` que coinciden con un valor notable
(0, 0.5, ≈0.71, ≈0.87, 1), se puede leer directo de la tabla de ángulos
notables — sin necesitar calculadora ni una función inversa.

## Más de una solución

Una ecuación trigonométrica casi siempre tiene **más de una solución**
dentro de una vuelta completa (0° a 360°). Por ejemplo, `sen(θ) = 0,5`
se cumple tanto en `θ = 30°` como en `θ = 150°` — ambos ángulos dan el
mismo valor de seno, por la simetría del círculo unitario (30° y 150°
son suplementarios, y el seno de un ángulo y su suplemento son
siempre iguales).

## Para qué sirve

Distinguir identidad de ecuación, y saber resolver una ecuación
trigonométrica simple, es la base para trabajar con cualquier fenómeno
que dependa de "en qué momento" ocurre algo dentro de un ciclo
periódico — por ejemplo, en qué punto de su órbita un satélite alcanza
cierta altura, o en qué instante una onda alcanza cierta amplitud.
