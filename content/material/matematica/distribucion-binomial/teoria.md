# Matemática — Distribución binomial: P(X=k) (teoria)

> Tema del MAPA: `D16` (Tronco 4.b). Depende de `../combinaciones/` y
> `../probabilidad-compuesta/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** — una sola fórmula que combina dos ideas ya vistas
(combinatoria y probabilidad compuesta), no necesita varias
diapositivas.

---

## Cuándo se aplica

La **distribución binomial** cuenta cuántos **éxitos** se obtienen en
`n` intentos **independientes**, todos con la **misma** probabilidad
`p` de éxito, y sólo **dos resultados posibles** por intento (éxito o
fracaso): cuántas caras salen en varios tiros de moneda, cuántos
tiros de penal convierte un jugador, cuántos productos de un lote
salen defectuosos.

## La fórmula

```
P(X=k) = C(n,k) × pᵏ × (1−p)ⁿ⁻ᵏ
```

Es, literalmente, la combinación de dos piezas ya construidas:

- **`C(n,k)`** (`../combinaciones/`): de cuántas **formas distintas**
  pueden caer exactamente `k` éxitos entre los `n` intentos (no
  importa el orden en que salgan).
- **`pᵏ × (1−p)ⁿ⁻ᵏ`** (`../probabilidad-compuesta/`): la probabilidad
  de **una secuencia particular** con exactamente `k` éxitos y
  `n−k` fracasos (multiplicando, porque los intentos son
  independientes).

**Ejemplo**: se tira una moneda 5 veces (`n=5`, `p=0,5`). La
probabilidad de que salgan exactamente 3 caras (`k=3`):

```
P(X=3) = C(5,3) × 0,5³ × 0,5² = 10 × 0,125 × 0,25 = 0,3125
```

## Los tres requisitos, en una lista

1. Una cantidad fija de intentos (`n`).
2. Cada intento es independiente de los demás.
3. La probabilidad de éxito (`p`) es la **misma** en todos los
   intentos, y sólo hay dos resultados posibles por intento.

Si falta alguno de los tres (por ejemplo, `p` cambia de un intento a
otro, o hay más de dos resultados posibles), no corresponde usar la
fórmula binomial directo.

## El valor esperado

Sin necesitar el desarrollo completo (eso es
`../esperanza-matematica-valor-esperado/`, el módulo siguiente), vale
adelantar el resultado: el valor esperado de una binomial es
simplemente:

```
E(X) = n × p
```

Con `n=5` y `p=0,5`, se esperan en promedio `5×0,5 = 2,5` caras — ni
siquiera hace falta que sea un valor entero, es un promedio a largo
plazo.

## Para qué sirve

Modela cualquier situación de "conteo de éxitos en intentos repetidos
con la misma probabilidad": control de calidad (cuántas piezas
defectuosas en un lote), encuestas (cuántas personas responden "sí" en
una muestra), genética (cuántos hijos heredan un alelo particular,
retomando `../probabilidad-compuesta/`).
