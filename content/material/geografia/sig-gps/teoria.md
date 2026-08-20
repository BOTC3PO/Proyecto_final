# Geografía — Sistemas de Información Geográfica: GPS (teoria)

> Tema del MAPA: `G12b` (Tronco 6, `G4 --> G12b`). Depende de
> `../sig-mapas-digitales/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — cómo funciona el GPS (trilateración) y sus límites
reales.

---

## Qué es el GPS

**GPS** (*Global Positioning System*) es una red de satélites (operada
por Estados Unidos, la primera y más conocida, aunque hoy existen
sistemas equivalentes de otros países: GLONASS ruso, Galileo europeo,
BeiDou chino) que permite calcular la posición exacta de un receptor
(un celular, un auto) en cualquier punto de la superficie terrestre.

## Cómo calcula la posición: trilateración

El GPS no "ve" al receptor — lo ubica por matemática pura, con un
método llamado **trilateración**:

1. Cada satélite emite constantemente una señal con la hora exacta en
   que fue enviada (los satélites llevan relojes atómicos, extremadamente
   precisos).
2. El receptor recibe esa señal y mide cuánto tiempo tardó en llegar.
   Como la señal viaja a la velocidad de la luz, ese tiempo se puede
   convertir directo en distancia (`distancia = velocidad × tiempo`).
3. Con la distancia a **un solo** satélite, el receptor sólo sabe que
   está en algún punto de una esfera alrededor de ese satélite — no
   alcanza para ubicarlo.
4. Con la distancia a **tres** satélites, las tres esferas se cruzan en
   un único punto (o dos, y uno de ellos casi siempre es imposible por
   estar fuera de la Tierra o a una altura absurda) — ahí está la
   posición en 3D (latitud, longitud y altitud).
5. En la práctica se necesita un **cuarto satélite**: el reloj del
   receptor (un celular común) no es tan preciso como los relojes
   atómicos de los satélites, así que la cuarta señal sirve para
   corregir ese pequeño error de sincronización de tiempo.

## Por qué hacen falta al menos 4 satélites

Este es el punto que más se presta a confusión: con 3 satélites
alcanzaría matemáticamente si el reloj del receptor fuera perfecto, pero
como no lo es, la cuarta medición es la que permite resolver
simultáneamente la posición (3 incógnitas: latitud, longitud, altitud) Y
el error de reloj del receptor (1 incógnita más) — 4 incógnitas, 4
ecuaciones (una por satélite).

## Límites reales del GPS

- **Necesita cielo despejado**: la señal de los satélites es débil y
  se bloquea fácilmente — dentro de edificios, túneles o entre
  rascacielos muy altos (el "cañón urbano") la precisión baja mucho o
  se pierde la señal.
- **Precisión típica**: unos pocos metros en condiciones normales al
  aire libre — no es exacto al centímetro sin equipamiento especial
  (el GPS diferencial o RTK, usado en agricultura de precisión o
  topografía, sí llega a esa precisión, pero no es el GPS de un celular
  común).
- **No transmite datos, sólo recibe**: el receptor no le "avisa" nada al
  satélite — sólo escucha las señales y calcula. Que una app comparta
  la ubicación con otras personas es una función aparte (de internet),
  no del GPS en sí.

## Relación con mapas digitales

El GPS resuelve el problema de "dónde estoy" (una posición); el mapa
digital (ver `../sig-mapas-digitales/`) resuelve "qué hay alrededor de
esa posición" (calles, comercios, rutas) — son dos tecnologías
distintas que un celular combina para mostrar el puntito azul moviéndose
sobre el mapa.
