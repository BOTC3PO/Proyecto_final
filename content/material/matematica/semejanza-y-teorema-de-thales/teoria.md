# Matemática — Semejanza y Teorema de Thales (teoría)

> Tema del MAPA: `GO4` (Tronco 3.a — Geometría: de la forma a la medida).
> Depende de `../triangulos/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — varias ideas encadenadas (qué es la semejanza, sus
criterios, el teorema de Thales, su corolario en el triángulo, y las
aplicaciones prácticas) mejor separadas en diapositivas.

---

## Qué es la semejanza

Dos figuras son **semejantes** si tienen exactamente la misma forma, aunque
no necesariamente el mismo tamaño: una es una versión ampliada o reducida
de la otra (como una foto y su ampliación, o un plano y el edificio real).
En triángulos semejantes, los tres ángulos correspondientes son iguales, y
los tres lados correspondientes son **proporcionales** (guardan siempre la
misma razón entre sí), aunque no midan lo mismo.

Esa razón fija entre lados correspondientes se llama **razón de
semejanza** (o escala): si un triángulo tiene razón de semejanza 3 respecto
de otro, cada lado del primero mide 3 veces el lado correspondiente del
segundo.

## Semejanza vs. congruencia

En `../congruencia-de-triangulos/` se vio que dos triángulos congruentes
tienen la misma forma Y el mismo tamaño. La semejanza es una versión más
amplia de esa idea: exige la misma forma (mismos ángulos, lados
proporcionales), pero **no** exige el mismo tamaño. Toda pareja de
triángulos congruentes es también semejante (con razón de semejanza 1),
pero no toda pareja de triángulos semejantes es congruente.

## Criterios de semejanza de triángulos

Igual que con la congruencia, no hace falta verificar los 3 ángulos y los 3
lados para confirmar que dos triángulos son semejantes — alcanza con
alguno de estos criterios:

- **AA (Ángulo-Ángulo)**: si dos ángulos de un triángulo son iguales a dos
  ángulos de otro, los triángulos son semejantes. (No hace falta verificar
  el tercer ángulo: como la suma de los ángulos internos siempre da 180° —
  ver `../triangulos/` —, el tercero queda determinado solo.)
- **LLL proporcional**: si los tres lados de un triángulo son
  proporcionales a los tres lados de otro (misma razón en los tres casos),
  los triángulos son semejantes.
- **LAL proporcional**: si dos lados de un triángulo son proporcionales a
  dos lados de otro, Y el ángulo comprendido entre esos lados es igual en
  ambos, los triángulos son semejantes.

## El Teorema de Thales

Si dos o más rectas paralelas cortan a dos rectas transversales, los
segmentos que quedan determinados sobre una transversal son proporcionales
a los segmentos correspondientes sobre la otra transversal.

En otras palabras: la razón entre dos segmentos de una transversal es
igual a la razón entre los dos segmentos correspondientes de la otra
transversal.

## El corolario de Thales en el triángulo

Un caso particular, muy usado: si se traza una recta paralela a uno de los
lados de un triángulo, y esa paralela corta a los otros dos lados, los
divide en segmentos proporcionales — y además, el triángulo chico que
queda formado (entre el vértice y la paralela) es **semejante** al
triángulo original completo.

¿Por qué son semejantes? Porque la paralela genera, con cada lado que
corta, un ángulo igual al que ya existía en ese vértice del triángulo
grande (ángulos correspondientes entre paralelas) — y el triángulo chico
comparte además el ángulo del vértice de arriba con el triángulo grande.
Dos ángulos iguales alcanzan (criterio AA) para garantizar la semejanza.

## Cómo escalan el perímetro y el área

Si dos triángulos son semejantes con razón de semejanza `k` (todos los
lados del segundo son `k` veces los del primero):

- El **perímetro** también escala por `k` (es una suma de longitudes).
- El **área** escala por `k²` (es un producto de dos longitudes). Duplicar
  el tamaño de un triángulo (k = 2) no duplica su área: la multiplica por
  4.

## Para qué sirve

La semejanza y el Teorema de Thales permiten calcular medidas que serían
imposibles de tomar directamente:

- **Alturas indirectas**: medir la altura de un poste o un árbol comparando
  la sombra que proyecta con la sombra de un objeto de altura conocida (un
  bastón, una persona) en el mismo momento del día — ambos triángulos
  (objeto-sombra) son semejantes porque el sol forma el mismo ángulo con
  el piso para los dos.
- **Mapas y planos**: toda escala (1:500, 1:100.000) es una razón de
  semejanza entre el dibujo y la realidad.
- **División de un segmento en partes iguales** con regla y compás, usando
  rectas paralelas auxiliares.
