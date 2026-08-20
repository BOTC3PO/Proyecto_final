# Cívica — Cómo se lee una encuesta electoral (teoria)

> Tema del MAPA: `C4` (Tronco 4.b). Depende de
> `../../matematica/muestreo-y-sesgo/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — margen de error, indecisos, metodología y fecha
son cuatro chequeos separables antes de confiar en un número.

---

## Qué es una encuesta electoral

Una encuesta electoral aplica exactamente lo visto en
`../../matematica/muestreo-y-sesgo/`: en vez de preguntarle a **todo**
el padrón electoral (un censo, carísimo e inviable antes de una
elección), se le pregunta a una **muestra** de votantes y se
**generaliza** el resultado al electorado completo — con toda la
incertidumbre que eso conlleva.

## El margen de error

Toda encuesta seria reporta un **margen de error** (por ejemplo,
"candidato A: 42% ± 3 puntos"): el resultado real de la población
probablemente está dentro de ese rango, no es un número exacto. Es la
misma lógica del intervalo de confianza — más muestra, margen más
chico; menos muestra, margen más grande.

**Empate técnico**: si la diferencia entre dos candidatos es **menor**
que el margen de error combinado de la encuesta, no se puede afirmar
con confianza quién va primero — es un "empate técnico", aunque los
números crudos muestren a uno arriba del otro.

## Los indecisos y el "no sabe / no contesta"

Una porción de los encuestados no revela su intención de voto (todavía
no decidió, o no quiere decirlo). Los medios pueden reportar los
porcentajes de dos formas distintas:

- **Sobre el total de encuestados** (incluyendo indecisos en el
  denominador): los porcentajes de cada candidato suman menos de 100%.
- **Sobre los que sí respondieron** (descontando indecisos): los
  porcentajes de cada candidato suman 100%, pero el número de cada uno
  sube respecto del cálculo anterior.

**Ambas formas son válidas** — el problema es cuando no se aclara cuál
de las dos se está usando, porque comparar un número calculado de una
forma con otro calculado de la otra da una impresión distorsionada.

## Encuesta vs. boca de urna (exit poll)

Una **encuesta** se hace **antes** de la elección, preguntando
intención de voto (que puede cambiar). Una **boca de urna** (exit
poll) se hace el mismo día, preguntando a quienes **ya votaron** qué
opción eligieron — es una medición distinta, generalmente más precisa
porque no depende de una intención futura, sino de un voto ya emitido.

## Por qué la fecha importa

La intención de voto **cambia con el tiempo** — una encuesta de dos
semanas antes de la elección puede no reflejar la situación del día de
la votación, sobre todo si hubo un evento relevante en el medio
(debate, escándalo, anuncio de gobierno). Comparar encuestas de fechas
muy distintas como si midieran lo mismo es un error común.

## Sesgos comunes en encuestas políticas

- **Voto oculto**: parte del electorado no revela su verdadera
  intención de voto por miedo al juicio social, torciendo el
  resultado de la encuesta respecto del voto real.
- **Sesgo de metodología**: una encuesta telefónica excluye a quien no
  tiene teléfono fijo/registrado; una encuesta online excluye a quien
  no tiene o no usa internet — cada método de contacto tiene su propio
  sesgo de selección (`../../matematica/muestreo-y-sesgo/`).

## Cómo leer una encuesta con criterio

1. ¿Cuál es el margen de error, y la diferencia entre candidatos lo
   supera?
2. ¿Los porcentajes incluyen o descuentan a los indecisos?
3. ¿Qué metodología usó (telefónica, presencial, online) y qué sesgo
   podría introducir?
4. ¿De qué fecha es, y pasó algo relevante desde entonces?
5. ¿Quién encargó o financió la encuesta? (no invalida el resultado
   por sí solo, pero es un dato relevante a considerar).

## Para qué sirve

Es la aplicación directa de `../../matematica/muestreo-y-sesgo/` al
contexto donde más se citan encuestas en público: leer con criterio
una cifra de intención de voto, sin tratarla como un resultado exacto
ni descartarla por sistema.
