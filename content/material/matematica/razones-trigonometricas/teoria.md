# Matemática — Razones trigonométricas (teoría)

> Tema del MAPA: `M7` (Tronco 3.b — Geometría analítica, trigonometría y
> vectores). Depende de `../semejanza-y-teorema-de-thales/` y
> `../teorema-de-pitagoras/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (catetos según el ángulo,
las tres razones, por qué no dependen del tamaño, ángulos notables)
mejor separadas en diapositivas.

---

## Cateto opuesto y cateto adyacente

En un triángulo rectángulo, además de la hipotenusa (el lado más largo,
ver `../teorema-de-pitagoras/`), los otros dos lados se nombran según su
posición respecto de uno de los ángulos agudos elegido:

- El **cateto opuesto**: el lado que NO toca a ese ángulo (está
  "enfrente" de él).
- El **cateto adyacente**: el lado que sí toca a ese ángulo (además de
  la hipotenusa, que también lo toca).

Estos nombres dependen de **qué ángulo** se elija: el cateto opuesto de
un ángulo es el cateto adyacente del otro ángulo agudo, y viceversa.

## Las tres razones trigonométricas

Para un ángulo agudo dado, las **razones trigonométricas** son
cocientes entre dos lados del triángulo:

```
seno (sen)     = cateto opuesto / hipotenusa
coseno (cos)   = cateto adyacente / hipotenusa
tangente (tan) = cateto opuesto / cateto adyacente
```

Una regla mnemotécnica clásica para recordarlas: **SOH-CAH-TOA** — Seno
= Opuesto/Hipotenusa, Coseno = Adyacente/Hipotenusa, Tangente =
Opuesto/Adyacente.

## Por qué da siempre el mismo valor, sin importar el tamaño

Esta es la razón por la que este módulo depende de
`../semejanza-y-teorema-de-thales/`: dos triángulos rectángulos que
comparten un mismo ángulo agudo son **semejantes** (por el criterio AA —
el ángulo recto es igual en ambos, y el ángulo agudo elegido también).
En triángulos semejantes, los lados correspondientes son
**proporcionales**: por eso el cociente entre dos lados (la razón
trigonométrica) da exactamente el mismo número, sea un triángulo chico o
uno grande, mientras el ángulo sea el mismo.

## La tangente como cociente de seno y coseno

```
tan = sen / cos
```

Tiene sentido: `(opuesto/hipotenusa) / (adyacente/hipotenusa)` simplifica
la hipotenusa y deja `opuesto/adyacente`, la definición de tangente.

## La identidad pitagórica (mención)

Como los catetos y la hipotenusa cumplen el teorema de Pitágoras, seno y
coseno de un mismo ángulo cumplen siempre `sen² + cos² = 1`. Este
módulo sólo la menciona como consecuencia lógica; resolver ecuaciones
con esta identidad es un tema aparte (identidades trigonométricas, fuera
de este módulo).

## Ángulos notables

Para tres ángulos particulares, las razones dan valores exactos
conocidos, sin necesidad de calculadora — conviene memorizarlos:

| Ángulo | seno | coseno | tangente |
|---|---|---|---|
| 30° | 0,5 | ≈0,87 | ≈0,58 |
| 45° | ≈0,71 | ≈0,71 | 1 |
| 60° | ≈0,87 | 0,5 | ≈1,73 |

Nótese la simetría: `sen(30°) = cos(60°)`, y `sen(60°) = cos(30°)` — los
ángulos que suman 90° "intercambian" seno y coseno.

## Para qué sirve

Conociendo un ángulo agudo y un lado de un triángulo rectángulo, las
razones trigonométricas permiten calcular los otros dos lados sin
medirlos — la base para el módulo siguiente en el mapa (funciones
trigonométricas y vectores), y para cualquier problema real de
triangulación: la altura de un edificio a partir del ángulo de
elevación, o la distancia que recorre una rampa a un ángulo dado.
