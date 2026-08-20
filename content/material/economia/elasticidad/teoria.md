# Economía — Elasticidad: cociente de variaciones relativas (teoría)

> Tema del MAPA: `E16B` (puente Álgebra → Economía). Depende de
> `../costo-marginal/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es la elasticidad,
fórmula, elástica vs. inelástica, elasticidad puntual con derivada,
errores comunes).

---

## Qué es la elasticidad

La **elasticidad precio de la demanda** mide cuánto **responde** la
cantidad demandada de un producto ante un cambio en su precio. No mide
el cambio en unidades absolutas — mide el cambio **relativo**
(porcentual):

```
E = (variación porcentual de la cantidad) / (variación porcentual del precio)
  = (%ΔQ) / (%ΔP)
```

Es la misma familia de "razón de cambio" que `../costo-marginal/`, pero
usando variaciones **relativas** (porcentajes) en vez de absolutas.

## Elástica, inelástica, unitaria

Se suele mirar el **valor absoluto** de E para clasificar:

- **|E| > 1**: demanda **elástica** — la cantidad responde más que
  proporcionalmente al cambio de precio (típico de bienes con
  sustitutos fáciles: si sube el precio de una marca, la gente cambia a
  otra).
- **|E| < 1**: demanda **inelástica** — la cantidad responde menos que
  proporcionalmente (típico de bienes esenciales, sin sustitutos
  cercanos: medicamentos, combustible).
- **|E| = 1**: elasticidad **unitaria** — la cantidad responde
  exactamente en la misma proporción que el precio.

## El signo

Por la ley de demanda (precio sube, cantidad baja), E suele dar
**negativo** — por eso se suele reportar en valor absoluto al
clasificar. El signo en sí no es el foco: lo es la magnitud.

## Elasticidad vs. pendiente: no son lo mismo

Es un error común confundir la elasticidad con la **pendiente** de la
curva de demanda (ΔP/ΔQ, en unidades absolutas). La pendiente depende de
las unidades en que se miden precio y cantidad; la elasticidad **no**
(porque usa porcentajes) — por eso la elasticidad permite comparar la
sensibilidad de productos completamente distintos entre sí (pan vs.
autos), cosa que la pendiente sola no permite.

## Elasticidad puntual (con derivada)

En un punto específico (P, Q), la elasticidad se puede calcular con la
derivada de la función de demanda:

```
E = (dQ/dP) × (P/Q)
```

Es la versión "instantánea" de la misma idea, con la misma relación que
existe entre pendiente promedio (cociente incremental) y derivada
(pendiente puntual) ya vista en `../../matematica/derivada/`.

## Ejemplo resuelto

**El precio de un producto sube 10%, y la cantidad demandada baja 20%.**

E = (−20%)/(10%) = −2 → |E|=2 > 1 → demanda **elástica**.

**Otro producto: el precio sube 10%, la cantidad baja sólo 2%.**

E = (−2%)/(10%) = −0.2 → |E|=0.2 < 1 → demanda **inelástica** (típico
de un bien esencial).

## Errores comunes

- Confundir elasticidad con pendiente — usan variaciones distintas
  (relativas vs. absolutas).
- Olvidar el valor absoluto al clasificar elástica/inelástica (el signo
  negativo no cambia la clasificación).
- Comparar mal: pensar que E=−3 es "menos elástico" que E=−2 porque es
  "más negativo" — en valor absoluto, 3>2, así que E=−3 es MÁS elástico.
- Aplicar la elasticidad de un producto a otro distinto, asumiendo que
  todos los bienes responden igual — cada producto tiene su propia
  elasticidad, según si tiene sustitutos o es esencial.
