# Electrónica — Inductores y bobinas (teoría)

> Tema del MAPA: `electronica/inductores-y-bobinas` (nodo propuesto, ver `../dependencias.md`). Depende de `../../fisica/induccion-electromagnetica-faraday-lenz/` y de `../circuitos-y-leyes-de-kirchhoff/`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Qué es un inductor, por qué se opone a los cambios de corriente y dónde se usa.

---

## 1. Qué es un inductor

Un inductor, también llamado bobina, es un componente formado por un alambre enrollado, a veces alrededor de un núcleo de material magnético como hierro o ferrita. Cuando circula corriente por el alambre se genera un campo magnético. Mientras la corriente es constante, ese campo es constante y el inductor casi no hace nada; pero si la corriente cambia, el campo cambia, y por la ley de Faraday-Lenz aparece una tensión inducida que se opone a ese cambio.

## 2. La inductancia

La capacidad de un inductor para oponerse a los cambios de corriente se llama inductancia y se mide en henrios (H). En electrónica se usan sobre todo el milihenrio (mH) y el microhenrio (µH). La relación entre la tensión en el inductor y la rapidez con que cambia la corriente es:

V = L × (ΔI / Δt)

A mayor inductancia o a mayor rapidez de cambio, mayor es la tensión inducida. Si la corriente no cambia, la tensión es cero y el inductor se comporta como un simple cable.

## 3. El inductor en corriente continua

Cuando se conecta un inductor a una fuente de continua a través de una resistencia, la corriente no salta de golpe a su valor final: crece gradualmente, de modo parecido a la tensión de un capacitor que se carga. La constante de tiempo de este circuito RL es:

τ = L / R

Con L en henrios y R en ohmios, τ queda en segundos. Después de unos 5τ la corriente llegó prácticamente a su valor final, que es V / R. En régimen permanente de continua, el inductor ideal se comporta como un cortocircuito.

## 4. El inductor en corriente alterna

Con una señal alterna, la corriente cambia todo el tiempo y el inductor se opone continuamente. Esa oposición se llama reactancia inductiva:

XL = 2π × f × L

crece con la frecuencia: a frecuencias altas el inductor se opone mucho al paso de la corriente, y a frecuencias bajas casi no se opone. Es lo contrario del capacitor. Por eso un inductor deja pasar la continua y bloquea las altas frecuencias.

## 5. Usos habituales

Los inductores se usan en filtros, combinados con capacitores para separar frecuencias. Se usan en fuentes conmutadas, donde almacenan energía en cada ciclo. Se usan en circuitos de radio, para sintonizar frecuencias. Y se usan como bobinas de choque, para impedir que el ruido de alta frecuencia circule por una línea. Los transformadores son dos bobinas acopladas por un mismo núcleo y se estudian aparte.

## 6. Una precaución importante

Si se interrumpe bruscamente la corriente de un inductor, como al abrir un interruptor que alimenta un relé o un motor, la tensión inducida puede ser muy alta y dañar componentes. Por eso se coloca un diodo en paralelo con la bobina, llamado diodo de rueda libre, para dar un camino a esa corriente.

## N. Conexión con lo que sigue

Este tema complementa a `../capacitor-rc-carga-y-descarga/` y es la base de los transformadores de `../diodo-polarizacion-rectificacion-y-fuentes/` y de las máquinas eléctricas del oficio Técnico electromecánico.
