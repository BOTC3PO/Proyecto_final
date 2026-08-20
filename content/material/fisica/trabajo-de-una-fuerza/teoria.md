# Física — Trabajo de una fuerza (teoría)

> Tema del MAPA: `F7` (Tronco 3.b — puente Geometría
> analítica/vectores → Física). Depende de
> `../../matematica/producto-escalar/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (qué es, unidad, signo,
casos de trabajo nulo, energía) mejor separadas en diapositivas.

---

## La fórmula ya está resuelta, ahora la física

`../../matematica/producto-escalar/` ya dedujo que el trabajo de una
fuerza es un producto escalar entre el vector fuerza y el vector
desplazamiento:

```
W = F × d × cos(θ)
```

Este módulo no repite esa deducción — se enfoca en **qué significa
físicamente** el trabajo, y en los casos donde la intuición cotidiana de
"trabajo" (esfuerzo, cansancio) no coincide con la definición física.

## Qué es el trabajo

El **trabajo** es la transferencia de energía que ocurre cuando una
fuerza actúa sobre un objeto que se **desplaza**. Sin desplazamiento, no
hay trabajo — sin importar cuánta fuerza se aplique.

## La unidad: el Joule

El trabajo se mide en **Joule (J)**, definido como `1 J = 1 N × 1 m`: el
trabajo que hace una fuerza de 1 Newton al desplazar un objeto 1 metro
en su misma dirección.

## El signo del trabajo

El signo de `cos(θ)` en la fórmula determina el signo del trabajo:

- **Positivo**: la fuerza tiene una componente en la **misma** dirección
  que el desplazamiento (`θ < 90°`) — la fuerza "ayuda" al movimiento.
- **Negativo**: la fuerza se opone al desplazamiento (`θ > 90°`) — como
  el rozamiento, que siempre hace trabajo negativo sobre un objeto que
  se desliza.
- **Nulo**: la fuerza es perpendicular al desplazamiento (`θ = 90°`), o
  no hay desplazamiento en absoluto.

## Casos de trabajo nulo (donde la intuición cotidiana falla)

- **Sostener algo quieto**: cargar una bolsa pesada parado, sin
  moverse, no hace ningún trabajo físico (`d = 0`), aunque los músculos
  se cansen. El cansancio es gasto de energía biológica, no trabajo
  mecánico sobre la bolsa.
- **Caminar cargando algo, a velocidad constante horizontal**: la
  fuerza que se ejerce para sostener el peso es **vertical**, pero el
  desplazamiento es **horizontal** — son perpendiculares, así que esa
  fuerza no hace trabajo (aunque otras fuerzas, como la que impulsa el
  caminar, sí lo hagan).
- **Movimiento circular uniforme**: la fuerza centrípeta (la que
  mantiene un objeto girando en círculo) es siempre perpendicular a la
  velocidad en cada instante — por eso no cambia la rapidez del objeto,
  sólo su dirección, y no realiza trabajo.

## El trabajo total de varias fuerzas

Si varias fuerzas actúan sobre un objeto que se desplaza, se puede
calcular el trabajo de **cada una por separado** y sumarlos, o calcular
directamente el trabajo de la **fuerza neta** (ver
`../dinamica-fuerzas-concurrentes/`) — ambos caminos dan el mismo
resultado.

## El teorema trabajo-energía (mención)

El **trabajo neto** realizado sobre un objeto es igual al **cambio en su
energía cinética**:

```
W_neto = Ec_final − Ec_inicial
```

Con `Ec = ½mv²` (ya listada en `../formulas-con-literales/`). Esta
conexión entre trabajo y energía se retoma con más profundidad en
módulos futuros sobre energía; acá sólo se menciona como el "para qué"
real del concepto de trabajo.

## Para qué sirve

El trabajo es la magnitud que conecta fuerza, movimiento y energía: es
lo que permite calcular cuánta energía hace falta (o se libera) para
mover algo una cierta distancia, y explica por qué algunas fuerzas
(como la normal o la fuerza centrípeta) nunca "gastan" ni "aportan"
energía, sin importar cuán grandes sean.
