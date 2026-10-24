# Geografía — Sistemas de Información Geográfica: GPS (teoria)

> Tema del MAPA: `G12b` (Tronco 6, `G4 --> G12b`). Depende de
> `../sig-mapas-digitales/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — cómo funciona el GPS (trilateración) y sus límites
reales.

---

## Qué es el GPS

**GPS** (*Global Positioning System*) es una red de satélites que permite
calcular la posición exacta de un receptor (un celular, un auto) en
cualquier punto de la superficie terrestre. La opera Estados Unidos y es la
primera y más conocida. Hoy existen sistemas equivalentes de otros países:
GLONASS ruso, Galileo europeo, BeiDou chino.

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
4. Con la distancia a **tres** satélites, las tres esferas se cruzan en un
   único punto. A veces son dos, pero uno de ellos casi siempre es imposible
   por estar fuera de la Tierra o a una altura absurda. Ahí está la posición
   en 3D (latitud, longitud y altitud).
5. En la práctica se necesita un **cuarto satélite**. El reloj del receptor (un
   celular común) no es tan preciso como los relojes atómicos de los
   satélites. La cuarta señal sirve para corregir ese pequeño error de
   sincronización de tiempo.

## Por qué hacen falta al menos 4 satélites

Este es el punto que más se presta a confusión. Con 3 satélites alcanzaría
matemáticamente si el reloj del receptor fuera perfecto. Como no lo es, la
cuarta medición permite resolver al mismo tiempo la posición (3 incógnitas:
latitud, longitud, altitud) Y el error de reloj del receptor (1 incógnita
más). Son 4 incógnitas y 4 ecuaciones (una por satélite).

## Límites reales del GPS

- **Necesita cielo despejado**: la señal de los satélites es débil y
  se bloquea fácilmente — dentro de edificios, túneles o entre
  rascacielos muy altos (el "cañón urbano") la precisión baja mucho o
  se pierde la señal.
- **Precisión típica**: unos pocos metros en condiciones normales al aire
  libre. No es exacto al centímetro sin equipamiento especial. El GPS
  diferencial o RTK, usado en agricultura de precisión o topografía, sí
  llega a esa precisión, pero no es el GPS de un celular común.
- **No transmite datos, sólo recibe**: el receptor no le "avisa" nada al
  satélite — sólo escucha las señales y calcula. Que una app comparta
  la ubicación con otras personas es una función aparte (de internet),
  no del GPS en sí.

## Relación con mapas digitales

El GPS resuelve el problema de "dónde estoy" (una posición). El mapa digital
(ver `../sig-mapas-digitales/`) resuelve "qué hay alrededor de esa posición"
(calles, comercios, rutas). Son dos tecnologías distintas que un celular
combina para mostrar el puntito azul moviéndose sobre el mapa.
