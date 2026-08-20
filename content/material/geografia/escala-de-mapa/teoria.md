# Geografía — Escala de un mapa (teoria)

> Tema del MAPA: `E9` (Tronco 1 — Numérico), tag `(Geografía)`. Depende
> de `../../matematica/regla-de-tres-directa/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — qué es la escala, cómo calcular con ella, y el
matiz contraintuitivo de "escala grande" vs. "escala chica".

---

## Qué es la escala de un mapa

La **escala** de un mapa es la razón entre una distancia medida **en el
mapa** y la distancia **real** que esa medida representa en el terreno.
Todo mapa es una reducción de la realidad; la escala dice, exactamente,
cuánto se redujo.

## La escala numérica

Se escribe como una razón, por ejemplo **1:100.000** (se lee "uno en
cien mil"): significa que **1 unidad de medida en el mapa equivale a
100.000 de esas mismas unidades en la realidad**. Si la unidad es el
centímetro, 1 cm en el mapa representa 100.000 cm reales — que,
convertido, son 1.000 metros, o sea, **1 kilómetro**.

## La fórmula

```
distancia_real = distancia_en_el_mapa × denominador_de_la_escala
```

(en la misma unidad de medida; después se convierte a la unidad que
haga falta, como pasar de centímetros a kilómetros dividiendo por
100.000).

**Ejemplo**: en un mapa a escala 1:50.000, una distancia de 3 cm entre
dos pueblos representa `3 × 50.000 = 150.000 cm` reales, que son
`150.000 ÷ 100.000 = 1,5 km`.

## La escala gráfica

Además de la escala numérica, muchos mapas incluyen una **escala
gráfica**: una barra dibujada directamente sobre el mapa, marcada con
las distancias reales que representa cada tramo. Su ventaja: si el mapa
se agranda o se achica (por ejemplo, al fotocopiarlo o al hacer zoom en
una imagen), la escala gráfica **se agranda o achica junto con el
dibujo**, y sigue siendo correcta — mientras que la escala numérica
(el "1:50.000" escrito) deja de ser válida apenas el mapa cambia de
tamaño, porque ese número asumía el tamaño original.

## Escala "grande" no es la que tiene el número más grande

El matiz más contraintuitivo del tema: una escala **1:1.000** (con un
denominador **chico**) se llama escala **grande**, porque representa
**más detalle** en una zona **más chica** (por ejemplo, el plano de un
barrio). Una escala **1:1.000.000** (con un denominador **grande**) se
llama escala **chica**, porque representa **menos detalle** en una zona
mucho más **grande** (por ejemplo, un mapa de un país entero). El
nombre "grande/chica" se refiere a qué tan grande es la fracción en sí
(1/1.000 es una fracción más grande que 1/1.000.000), no al número del
denominador escrito.

## Dónde aparece en la vida real

- **Calcular la distancia real entre dos ciudades** midiendo con una
  regla sobre un mapa y aplicando su escala.
- **Elegir qué tipo de mapa usar**: uno de escala grande (mucho detalle,
  poca área) para moverse dentro de una ciudad, uno de escala chica
  (poco detalle, mucha área) para ver un país entero.
- **Reconocer que una escala numérica deja de servir** si el mapa se
  imprimió o se mostró en un tamaño distinto al original, a menos que
  tenga también una escala gráfica.
