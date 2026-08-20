# Geografía — Sistemas de Información Geográfica: mapas digitales (teoria)

> Tema del MAPA: `G12a` (Tronco 6, `G4 --> G12a`). Depende de
> `../mapa-plano-escala/` y `../coordenadas-y-husos-horarios/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — qué es un Sistema de Información Geográfica (SIG) y
por qué un mapa digital es distinto de escanear un mapa de papel.

---

## Qué es un mapa digital (y por qué no es sólo "un mapa escaneado")

Un mapa digital no es simplemente una foto de un mapa de papel puesta
en una pantalla. Es un **Sistema de Información Geográfica (SIG)**: una
base de datos donde cada elemento (una calle, un edificio, un río) está
asociado a sus coordenadas reales y a información adicional (nombre,
tipo, horario de un comercio, sentido de una calle). Eso permite que el
mapa **responda preguntas**, no sólo se muestre.

## La idea de capas

Un SIG organiza la información en **capas** independientes que se
pueden mostrar u ocultar por separado: una capa de calles, una de
edificios, una de tránsito en vivo, una de imágenes satelitales de
fondo, una de límites administrativos. El usuario puede combinar sólo
las capas que necesita — es la misma idea de un mapa temático de papel
(elegir qué mostrar y qué no) pero con la posibilidad de prender y
apagar capas al instante, en vez de tener que dibujar un mapa nuevo por
cada combinación.

## Por qué "coordenadas con una capa de datos encima"

Cada objeto del mapa digital tiene coordenadas de latitud/longitud
reales — el mismo sistema que ya explica `../coordenadas-y-husos-horarios/`
— y sobre esa base se cuelga toda la información adicional. Buscar una
dirección, por ejemplo, es convertir un texto ("Av. Corrientes 1000") en
un par de coordenadas (geocodificación) para poder ubicarlo en el mapa y
calcular distancias o rutas desde y hacia ahí.

## Qué hace posible un mapa digital que uno de papel no

- **Zoom continuo**: en papel, la escala es fija; en digital, se puede
  acercar o alejar y el sistema recalcula qué nivel de detalle mostrar
  en cada nivel de zoom (a mucho zoom aparecen nombres de calles chicas
  que no entrarían en un mapa impreso de todo un país).
- **Rutas y cálculo de distancias**: el sistema puede calcular
  automáticamente el camino más corto o más rápido entre dos puntos,
  algo que en papel requeriría medir a mano.
- **Datos en tiempo real**: tránsito, clima, ubicación de transporte
  público — capas que se actualizan constantemente, imposibles en un
  mapa impreso.
- **Búsqueda**: encontrar un lugar por nombre o categoría ("farmacias
  cerca") en vez de tener que conocer dónde está de antemano.

## Relación con GPS e imágenes satelitales

Un mapa digital suele combinar dos fuentes de datos que se explican por
separado: la posición del usuario viene del **GPS** (ver
`../sig-gps/`), y muchas de las capas visuales (la vista "satélite")
vienen de **imágenes satelitales** (ver `../sig-imagenes-satelitales/`).
Los tres —mapas digitales, GPS e imágenes satelitales— son tecnologías
distintas que trabajan juntas en cualquier app de mapas moderna.
