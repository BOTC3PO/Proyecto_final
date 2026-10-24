# Oficios — Electricista — Fundamentos de electricidad (teoria)

> Tema del MAPA: `OF1.fundamentos-electricidad` (`troncos.md`). Depende
> de `../../fisica/ley-de-ohm/` (`FIS5`, ya construido) (ver
> `../dependencias.md`). Lección informativa — la evaluación del oficio
> se concentra en `diagnostico-electricidad-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Qué es la electricidad, en términos de oficio

Antes de tocar un cable, el electricista necesita manejar con soltura
un puñado de magnitudes que describen cómo se mueve la energía
eléctrica. La **carga eléctrica** es la propiedad básica de la materia
que hace que los electrones se atraigan o repelan; cuando esa carga se
mueve de forma ordenada por un conductor, se llama **corriente
eléctrica**, medida en amperios (A). La **tensión** (o voltaje),
medida en voltios (V), es la "fuerza" que empuja a esa corriente —
técnicamente, la diferencia de potencial entre dos puntos. La
**resistencia eléctrica**, medida en ohmios (Ω), es la oposición que
un material ofrece al paso de la corriente.

Estas tres magnitudes están relacionadas por la ley más citada del
oficio, la **Ley de Ohm**: V = I × R (tensión igual a corriente por
resistencia). De ahí se derivan la **potencia eléctrica** (P = V × I,
medida en vatios) y la **energía eléctrica** (la potencia consumida a
lo largo del tiempo, medida en kWh — lo que factura la distribuidora).

## Corriente continua y corriente alterna

La corriente puede fluir siempre en el mismo sentido (**corriente
continua**, CC — la de una batería) o cambiar de sentido
periódicamente (**corriente alterna**, CA — la que llega a los hogares
argentinos, a 220V y 50Hz). La CA es la que se usa en instalaciones
domiciliarias e industriales porque se puede transportar a grandes
distancias con menores pérdidas, elevando su tensión con
transformadores — algo que la CC no permite hacer de forma sencilla.

## Conductores, aislantes y el circuito

Los materiales que dejan pasar la corriente con facilidad (cobre,
aluminio) son **conductores**; los que la bloquean (plástico, goma,
vidrio) son **aislantes**, y protegen al electricista y a la
instalación evitando que la corriente circule por donde no debe. Un
**circuito** es el camino cerrado que recorre la corriente desde la
fuente hasta la carga y de vuelta; si ese camino está interrumpido, el
circuito está **abierto** y no circula corriente. Un **cortocircuito**
ocurre cuando la corriente encuentra un camino de muy baja resistencia
que no pasa por la carga prevista (por ejemplo, dos cables pelados que
se tocan entre sí) — la corriente se dispara a valores peligrosos en
fracciones de segundo, generando calor y, muchas veces, el disparo de
una protección o un incendio.

## Circuitos en serie y en paralelo

Cuando varios componentes se conectan uno detrás del otro formando un
único camino, están en **serie**: la misma corriente atraviesa a
todos, pero la tensión se reparte entre ellos. Cuando se conectan
formando varios caminos alternativos entre los mismos dos puntos,
están en **paralelo**: la tensión es la misma en todos, pero la
corriente se reparte según la resistencia de cada rama. Las
instalaciones domiciliarias reales usan mayormente conexiones en
paralelo: así, si se quema una lámpara, las demás siguen funcionando.

## Por qué importan las unidades y saber leerlas

Un electricista trabaja todo el día con un multímetro leyendo
voltios, amperios y ohmios — pero también necesita reconocer
magnitudes derivadas como el kilovatio-hora (kWh, energía) o el
kilovoltamperio (kVA, potencia aparente en instalaciones trifásicas).
Confundir una magnitud con otra —por ejemplo, leer amperios donde se
necesita potencia— es una de las causas más comunes de un cálculo de
instalación mal hecho, con consecuencias que van desde un disyuntor
que salta constantemente hasta un cableado subdimensionado que se
recalienta.
