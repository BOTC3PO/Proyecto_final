# Matemática — Hora y reloj: lectura y duración entre horas (teoría)

> Tema del MAPA: `N17` (Tronco 1 — Numérico). Depende de `../conteo/`,
> `../suma/` y `../resta/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Texto`** alcanza para la parte numérica. Si se carga al sistema, la
lectura del reloj ANALÓGICO en sí (las agujas) es un caso donde un bloque
**Imagen** o un futuro widget de reloj interactivo (Herramienta
interactiva) ayudaría mucho más que el texto — acá se cubre sólo la parte
de cálculo horario, no la lectura visual de agujas.

---

## Sistema sexagesimal

El tiempo se mide en base 60, no en base 10: **1 hora = 60 minutos**, **1
minuto = 60 segundos**. Es un sistema distinto al decimal que se usa para
casi todo lo demás — heredado de los babilonios, hace miles de años.

## Formato 12 horas y formato 24 horas

- **Formato 12 horas** (con AM/PM): las horas van de 1 a 12, dos veces por
  día (AM = antes del mediodía, PM = después). Ejemplo: 3:00 PM.
- **Formato 24 horas**: las horas van de 0 a 23, una sola vuelta por día.
  Ejemplo: 15:00 (lo mismo que 3:00 PM). Para pasar de PM a 24 horas, se
  suma 12 (salvo el 12:00 PM del mediodía, que ya es 12:00).

## Calcular la duración entre dos horarios

Conviene convertir todo a minutos (o a segundos), restar, y volver a
convertir. Ejemplo: de 9:20 a 11:05 → 9:20 = 560 minutos desde la
medianoche, 11:05 = 665 minutos → 665 − 560 = 105 minutos = 1 hora 45
minutos.

## Sumar una duración a un horario (hora de llegada)

Al revés: se suma la duración al horario de inicio, y si los minutos se
pasan de 60, se "llevan" a la hora (igual que llevar en una suma decimal,
pero acá se lleva de a 60, no de a 10). Ejemplo: 8:45 + 40 minutos → 45+40
= 85 minutos = 1 hora y 25 minutos → 8:45 + 1:25 = 10:10.

## Restar horarios "pidiendo prestado" en base 60

Si al restar los minutos, el minuendo tiene menos minutos que el
sustraendo, se pide prestada 1 hora (=60 minutos) a la columna de las
horas, igual que pedir prestada una decena en la resta común (ver
`../resta/teoria.md`) — sólo que acá se presta de a 60, no de a 10.
