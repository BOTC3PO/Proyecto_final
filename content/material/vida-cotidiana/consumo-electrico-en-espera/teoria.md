# Vida Cotidiana — Consumo eléctrico en espera (phantom loads) (teoria)

> Tema del MAPA: `E8O` (Tronco 1 — Numérico). Depende de
> `../consumo-electrico-lectura-factura/` (ver `../dependencias.md`).
> **No duplica** ese módulo: aquél es lectura de medidor/factura/kWh;
> éste es específicamente por qué un aparato "apagado" sigue consumiendo.
> No hizo falta búsqueda web: la Ley de Joule y el consumo en standby son
> física estable.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — por qué un aparato "apagado" con el enchufe puesto
sigue gastando electricidad, y la física detrás de por qué un cable en
mal estado calienta.

---

## Qué es un "consumo fantasma" (phantom load)

Muchos aparatos electrónicos modernos (televisores, consolas, cargadores,
routers, microondas con reloj) nunca están realmente "apagados" del todo
mientras sigan enchufados: quedan en un estado de **espera (standby)**
para poder prenderse al instante con el control remoto, mantener el reloj
funcionando, o seguir conectados a la red. Ese estado de espera consigue
consumir una pequeña cantidad de energía de forma continua, aunque el
aparato "no esté haciendo nada" — un consumo silencioso que, sumado en
muchos aparatos y durante todo el día, puede representar una parte real
de la factura mensual.

## Cómo medirlo en la práctica

Con un **multímetro** o, más directo, un **vatímetro** (un enchufe
intermedio que mide cuánto consume lo que se conecta a él), se puede
medir el consumo real de un aparato en modo standby — típicamente unos
pocos vatios por aparato, pero constantes las 24 horas, todos los días
del año.

## La física detrás: Ley de Joule

Cualquier corriente eléctrica que atraviesa un componente con resistencia
disipa energía en forma de calor — es la **Ley de Joule**:

$$P = I^2 \cdot R$$

donde $P$ es la potencia disipada (en vatios), $I$ es la corriente (en
amperios) y $R$ es la resistencia del conductor (en ohms). Un transformador
o fuente interna que se queda "esperando" sigue teniendo corriente
circulando por sus componentes internos, así que sigue disipando (y
consumiendo) energía, aunque el aparato en apariencia esté apagado.

## La misma fórmula explica un problema distinto: la caída de tensión en cables largos

La Ley de Joule también explica por qué una **extensión eléctrica** muy
larga, o de sección (grosor) inadecuada para la corriente que tiene que
llevar, calienta y produce una **caída de tensión** notable bajo carga
alta: el propio cable tiene una resistencia (mayor cuanto más largo y más
fino), y esa resistencia disipa parte de la energía en forma de calor en
el camino, antes de que llegue al aparato — por eso un cable muy largo o
delgado puede sentirse tibio al tacto, y por eso hay que elegir la
sección del cable según cuánta corriente va a llevar, no sólo según la
longitud.

## Aplicaciones prácticas

- Desenchufar cargadores, televisores y otros aparatos que no se van a
  usar por un tiempo largo (o usar una zapatilla con interruptor para
  cortar el standby de varios aparatos a la vez).
- Elegir cables de sección adecuada para cargas altas (por ejemplo,
  herramientas eléctricas de alta potencia), para evitar tanto la
  pérdida de energía como el riesgo de sobrecalentamiento.
