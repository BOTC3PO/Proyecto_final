# Electrónica — Capacitor RC: carga y descarga (teoría)

> Tema del MAPA: `electronica/capacitor-rc-carga-y-descarga` (nodo propuesto, ver `../dependencias.md`). Depende de `../componentes-resistencia-capacitor-diodo-transistor/` y de `../../matematica/ecuaciones-exponenciales-logaritmicas/`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Qué pasa en el tiempo cuando un capacitor se carga o se descarga a través de una resistencia.

---

## 1. Un capacitor no se carga de golpe

Un capacitor almacena carga eléctrica entre dos placas. Su capacidad se mide en faradios (F), aunque en la práctica se usan submúltiplos: microfaradios (µF), nanofaradios (nF) y picofaradios (pF). Si se lo conecta a una fuente a través de una resistencia, no se carga instantáneamente: la tensión en sus bornes sube de a poco. La resistencia limita la corriente, y a medida que el capacitor se llena la corriente disminuye.

## 2. La constante de tiempo

La rapidez del proceso depende de dos cosas: cuánta resistencia hay (a más resistencia, menos corriente y más lentitud) y cuánta capacidad hay que llenar (a más capacidad, más tiempo). Ambas se resumen en la constante de tiempo:

τ = R × C

Con R en ohmios y C en faradios, τ queda en segundos. Con R = 10 kΩ y C = 100 µF, por ejemplo, τ = 10 000 × 0,0001 = 1 s.

## 3. La curva de carga

Cuando el capacitor parte descargado y se conecta a una fuente de tensión V, la tensión en el capacitor sigue una curva exponencial:

Vc(t) = V × (1 − e^(−t/τ))

Después de un tiempo igual a τ, el capacitor alcanzó aproximadamente el 63 % de la tensión final. A los 2τ llegó a cerca del 86 %, a los 3τ cerca del 95 %, y a los 5τ más del 99 %. En la práctica se considera que el capacitor está cargado después de unos 5τ. Nunca llega exactamente al 100 % en un tiempo finito, pero se acerca tanto que la diferencia es despreciable.

## 4. La curva de descarga

Si un capacitor cargado a V0 se descarga a través de una resistencia, la tensión baja siguiendo:

Vc(t) = V0 × e^(−t/τ)

A los τ segundos queda cerca del 37 % de la tensión inicial, y a los 5τ queda menos del 1 %. La descarga es rápida al principio y se hace cada vez más lenta, igual que la carga.

## 5. Filtros RC simples

Como la tensión de un capacitor no puede cambiar bruscamente, un circuito RC se comporta distinto según la rapidez de la señal. Un filtro pasa bajos, con la resistencia en serie y la salida tomada en el capacitor, deja pasar las señales lentas y atenúa las rápidas. Se usa para suavizar ruido. Invirtiendo las posiciones, el filtro pasa altos deja pasar las variaciones rápidas y bloquea la continua. La frecuencia a la que la señal baja a cerca del 70 % de su valor se llama frecuencia de corte y vale fc = 1 / (2π R C).

## 6. Dónde se usan

Los circuitos RC aparecen en temporizadores, en el antirrebote de pulsadores, en los filtros de las fuentes de alimentación y en el acople de señales entre etapas. Entender la constante de tiempo permite anticipar cuánto tarda un circuito en responder.

## N. Conexión con lo que sigue

Este tema es la base de `../temporizador-555-y-osciladores/` y de `../diodo-polarizacion-rectificacion-y-fuentes/`, donde un capacitor filtra la tensión rectificada.
