# Física — Plano inclinado y rozamiento (teoría)

> Tema del MAPA: `F6` (Tronco 3.b — puente Geometría
> analítica/vectores → Física). Depende de
> `../dinamica-fuerzas-concurrentes/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — dos ideas relacionadas (descomponer el peso en un
plano inclinado, y la fuerza de rozamiento) mejor separadas en
diapositivas.

---

## El plano inclinado: descomponer el peso

Un **plano inclinado** es una superficie que forma un ángulo `θ` con la
horizontal (una rampa). Un objeto apoyado sobre ese plano tiene su peso
apuntando siempre hacia abajo (vertical), pero para analizar su
movimiento **sobre el plano** conviene descomponer ese peso en dos
componentes, usando el mismo procedimiento de
`../../matematica/suma-de-vectores-y-descomposicion/`:

- **Componente paralela al plano** (a lo largo de la rampa, la que tira
  al objeto hacia abajo por la pendiente): `P∥ = peso × sen(θ)`.
- **Componente perpendicular al plano** (la que presiona al objeto
  contra la superficie): `P⊥ = peso × cos(θ)`.

## La normal en el plano inclinado

A diferencia de una superficie horizontal (donde la normal es igual al
peso completo), en un plano inclinado la **normal** sólo tiene que
equilibrar la componente perpendicular del peso:

```
N = peso × cos(θ)
```

Cuanto más inclinado el plano (mayor `θ`), **menor** es la normal, y
**mayor** la componente que empuja al objeto a deslizar.

## Qué es el rozamiento

El **rozamiento** (o fricción) es la fuerza que se opone al deslizamiento
entre dos superficies en contacto. Siempre actúa **paralela** a la
superficie de contacto, y en sentido **contrario** al movimiento (o al
movimiento que "tendería" a ocurrir).

## Rozamiento estático vs. cinético

- **Rozamiento estático**: actúa mientras el objeto está **quieto**,
  impidiendo que empiece a moverse. Tiene un valor **máximo**:
  `f_estático_máx = μ_e × N`.
- **Rozamiento cinético** (o dinámico): actúa mientras el objeto **ya se
  está moviendo**. Su valor es prácticamente constante:
  `f_cinético = μ_c × N`.

En general, `μ_e` (coeficiente estático) es **mayor** que `μ_c`
(coeficiente cinético) — cuesta más iniciar el movimiento que
mantenerlo, la misma idea que ya apareció con la inercia en
`../leyes-de-newton/primera-inercia/`.

## El coeficiente de rozamiento (μ)

El **coeficiente de rozamiento** `μ` es un número (sin unidades) que
depende de **qué materiales** están en contacto (madera con madera,
goma con asfalto, hielo con metal...) — no depende del área de contacto
ni, en la mayoría de los casos simples, de la velocidad.

## Combinando ambas ideas: plano inclinado con rozamiento

Cuando un objeto está en un plano inclinado con rozamiento, la fuerza
neta a lo largo del plano es la diferencia entre la componente del peso
que lo empuja a deslizar, y la fuerza de rozamiento que se le opone:

```
F_neta (a lo largo del plano) = P∥ − f_rozamiento = peso×sen(θ) − μ×N
```

Si esa diferencia es positiva, el objeto acelera deslizando hacia abajo;
si el rozamiento estático máximo ya alcanza para igualar a `P∥`, el
objeto se queda quieto.

## Para qué sirve

Este bloque explica situaciones muy concretas: por qué cuesta más
empujar algo cuesta arriba que en plano; por qué una rampa muy inclinada
hace que los objetos se deslicen solos; y por qué el rozamiento, aunque
suele tratarse como una "molestia", es lo que permite caminar, frenar un
auto o que algo se quede quieto sobre una rampa en primer lugar.
