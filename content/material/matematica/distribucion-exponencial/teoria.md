# Matemática — Distribución exponencial: tiempo entre eventos (teoria)

> Tema del MAPA: `D20` (Tronco 4.b). Depende de
> `../variable-aleatoria-discreta-continua/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola fórmula aplicada a un tipo de escenario, no
necesita varias diapositivas.

---

## Qué modela

La **distribución exponencial** describe **cuánto tiempo pasa hasta
que ocurre el próximo evento**, cuando los eventos suceden al azar
pero a una **tasa promedio constante**: cuánto se tarda en llegar el
próximo colectivo, cuánto dura una lamparita antes de quemarse, cuánto
pasa hasta la próxima llamada a un call center.

Es continua (`../variable-aleatoria-discreta-continua/`): el tiempo
puede tomar cualquier valor, no sólo minutos enteros.

## El parámetro λ (lambda): la tasa de eventos

Queda definida por un solo parámetro, **λ** (lambda): la **tasa
promedio de eventos por unidad de tiempo**. Si en promedio llegan 3
colectivos por hora, λ = 3/hora.

**Tiempo promedio de espera**: es, justamente, el inverso de la tasa:

```
E(T) = 1 / λ
```

Si λ = 3 colectivos por hora, el tiempo promedio entre colectivos es
`1/3` de hora = 20 minutos.

## La fórmula clave: P(T > t)

La pregunta que más se hace con esta distribución es "¿cuál es la
probabilidad de tener que esperar MÁS de `t` unidades de tiempo?":

```
P(T > t) = e^(−λt)
```

Donde `e` es la constante de Euler (≈ 2,71828, ya usada en otros
módulos). Cuanto más grande `t`, más chica esta probabilidad — tiene
sentido: es cada vez menos probable tener que esperar mucho tiempo.

Y como la probabilidad total siempre suma 1, la probabilidad de que el
evento **ya haya ocurrido** para el tiempo `t` es el complemento:

```
P(T ≤ t) = 1 − e^(−λt)
```

**Ejemplo**: con λ = 3 colectivos por hora, la probabilidad de esperar
más de 20 minutos (1/3 de hora) es `e^(−3×1/3) = e^(−1) ≈ 0,368` — a
pesar de que 20 minutos es el promedio, hay casi un 37% de chance de
esperar más que eso (la distribución no es simétrica como la normal).

## Relación con la distribución de Poisson

`../distribucion-de-poisson/` (el módulo hermano) cuenta **cuántos**
eventos ocurren en un intervalo fijo — la exponencial mide, en cambio,
**cuánto tiempo** pasa **entre** esos mismos eventos. Son dos caras de
la misma situación real: si la cantidad de eventos por hora sigue una
Poisson, el tiempo entre eventos consecutivos sigue una exponencial
con la misma tasa λ.

## Para qué sirve

Modela cualquier "tiempo de espera hasta que pase algo" cuando los
eventos son independientes entre sí y ocurren a una tasa constante:
tiempos de espera en sistemas de atención, vida útil de componentes
electrónicos, tiempo entre terremotos en una región. No sirve para
conteos de eventos (eso es Poisson) ni para magnitudes que no son
tiempos de espera (eso suele ser la normal).
