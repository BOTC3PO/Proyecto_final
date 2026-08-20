# Matemática — Muestreo y sesgo (teoria)

> Tema del MAPA: `D12` (Tronco 4.b). Depende de
> `../distribucion-normal/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — tipos de muestreo y tipos de sesgo son dos listas
distintas que conviene mostrar por separado, aunque sean dos caras del
mismo problema.

---

## Población y muestra

La **población** es el grupo completo que interesa estudiar (todos los
alumnos de un país, todos los tornillos que fabrica una máquina). La
**muestra** es el subconjunto más chico que realmente se mide, porque
censar a toda la población casi siempre es demasiado caro, lento o
directamente imposible.

El objetivo del **muestreo** es elegir esa muestra de forma que sea
**representativa**: que sus características (promedios, proporciones,
dispersión) se parezcan a las de la población completa, para poder
sacar conclusiones sobre toda la población a partir de lo medido en la
muestra.

## Formas de armar una muestra

- **Muestreo aleatorio simple**: cada elemento de la población tiene
  exactamente la misma probabilidad de ser elegido (como sacar
  nombres de un bolillero). Es el ideal teórico, aunque en la
  práctica no siempre es posible armar la lista completa de la
  población para sortear.
- **Muestreo estratificado**: se divide la población en subgrupos
  (estratos) según alguna característica relevante (edad, provincia,
  curso), y se muestrea de cada estrato en proporción a su tamaño —
  garantiza que ningún subgrupo quede sub- o sobre-representado por
  puro azar.
- **Muestreo sistemático**: se elige un elemento cada `k` posiciones
  de una lista ordenada (por ejemplo, cada 10° cliente que entra a un
  local).
- **Muestreo por conveniencia**: se toma lo que está más a mano
  (encuestar a los primeros que responden, a los que pasan por la
  puerta). Es el más fácil y barato de armar — y también el que más
  riesgo tiene de terminar sesgado.

## Qué es el sesgo

Una muestra está **sesgada** cuando el método usado para elegirla
favorece sistemáticamente a cierto tipo de casos sobre otros, de forma
que la muestra NO representa a la población real — no por mala suerte
puntual, sino por cómo se construyó.

- **Sesgo de selección**: el método de elegir la muestra ya excluye a
  ciertos grupos de entrada (encuestar sólo en la calle en horario
  laboral excluye sistemáticamente a quien trabaja en ese horario).
- **Sesgo de no respuesta**: quienes eligen NO responder una encuesta
  suelen ser sistemáticamente distintos de quienes sí responden.
- **Sesgo del voluntario**: quienes se ofrecen espontáneamente a
  participar de un estudio suelen tener características distintas del
  resto de la población (más motivación, más tiempo libre, opiniones
  más extremas).

**Caso histórico clásico**: en 1936, una encuesta estadounidense muy
grande (más de 2 millones de respuestas) predijo mal el resultado de
una elección presidencial, porque armó su lista de encuestados a
partir de guías telefónicas y registros de autos — en plena
Depresión, eso sesgaba la muestra hacia la clase media-alta, un grupo
que no representaba al electorado completo. El ejemplo quedó como caso
de estudio estándar: **una muestra gigante sigue estando sesgada si el
método de selección está sesgado** — el tamaño no arregla el sesgo.

## Muestreo, sesgo y la distribución normal

Cuando se repite el muestreo muchas veces (tomar muchas muestras
distintas de la misma población y calcular el promedio de cada una),
esos promedios tienden a distribuirse en forma de campana —
exactamente la razón por la que `../distribucion-normal/` es
prerrequisito de este módulo. Ese comportamiento se formaliza en
`../teorema-central-del-limite/`, el módulo que sigue.

## Para qué sirve

Es la base de cualquier encuesta, estudio científico o control de
calidad: sin un método de muestreo cuidado, no importa cuántos datos
se recolecten — si el método está sesgado, las conclusiones sobre la
población van a estar torcidas en la misma dirección que el sesgo.
