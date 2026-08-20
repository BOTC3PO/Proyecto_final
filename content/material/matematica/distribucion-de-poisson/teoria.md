# Matemática — Distribución de Poisson: conteo de eventos raros (teoria)

> Tema del MAPA: `D21` (Tronco 4.b). Depende de
> `../variable-aleatoria-discreta-continua/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola fórmula aplicada a un tipo de escenario, no
necesita varias diapositivas.

---

## Qué modela

La **distribución de Poisson** cuenta **cuántos eventos ocurren en un
intervalo fijo** (de tiempo o de espacio), cuando esos eventos pasan
al azar, de forma independiente entre sí, a una tasa promedio
constante: cuántas llamadas recibe un call center en una hora, cuántos
autos cruzan un semáforo poco transitado en un minuto, cuántos errores
de tipeo hay en una página.

Es discreta (`../variable-aleatoria-discreta-continua/`): siempre
cuenta una cantidad entera de eventos (0, 1, 2, 3...).

## El parámetro λ (lambda): la cantidad promedio esperada

Queda definida por un solo parámetro, **λ** (lambda): la **cantidad
promedio de eventos que ocurren en el intervalo**. Si un call center
recibe en promedio 4 llamadas por hora, λ = 4.

A diferencia de la exponencial (donde λ era una tasa por unidad de
tiempo), acá λ **ya es directamente el promedio de eventos del
intervalo que interesa** — y también es, sin ningún cálculo extra, el
**valor esperado** de la distribución: `E(X) = λ`.

## La fórmula: P(X=k)

La probabilidad de que ocurran exactamente `k` eventos en el
intervalo:

```
P(X=k) = (λᵏ × e^(−λ)) / k!
```

Donde `k!` es el factorial de `k` (ya usado en
`../combinaciones/`/`../permutaciones/`) y `e` es la constante de
Euler.

**Ejemplo**: con λ = 4 llamadas por hora, la probabilidad de recibir
exactamente 2 llamadas en una hora es:

```
P(X=2) = (4² × e^(−4)) / 2! = (16 × 0,0183) / 2 ≈ 0,147
```

## Por qué "eventos raros"

El nombre clásico de esta distribución es "ley de los sucesos raros":
se aplica cuando hay **muchísimas oportunidades** de que algo pase,
pero la probabilidad de que pase **en cada oportunidad puntual** es
muy baja (por ejemplo: en cada segundo del día, la probabilidad de que
suene el teléfono es minúscula, pero sumada a lo largo de una hora
entera da un promedio de 4 llamadas). Es, de hecho, el caso límite de
la distribución binomial cuando `n` (la cantidad de oportunidades) es
muy grande y `p` (la probabilidad de cada una) es muy chica, con
`n×p = λ` constante.

## Relación con la distribución exponencial

`../distribucion-exponencial/` (el módulo hermano) mide el **tiempo**
entre eventos consecutivos — la Poisson cuenta, en cambio, **cuántos**
eventos caen dentro de un intervalo fijo. Son la versión discreta y la
versión continua de la misma situación real, con la misma tasa
subyacente.

## Para qué sirve

Modela cualquier conteo de eventos raros e independientes dentro de un
intervalo: llamadas a un call center, defectos de fabricación por
lote, accidentes por día en una ruta, mutaciones genéticas por
generación. No sirve para el tiempo hasta que pase algo (eso es
exponencial) ni para una cantidad fija de intentos con probabilidad
de éxito conocida por intento (eso es binomial).
