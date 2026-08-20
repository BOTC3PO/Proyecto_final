# Geografía — Sistemas de Información Geográfica: imágenes satelitales (teoria)

> Tema del MAPA: `G12c` (Tronco 6, `G4 --> G12c`). Depende de
> `../sig-mapas-digitales/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`** — cómo se captan imágenes satelitales (teledetección)
y sus usos reales, distintos del GPS.

---

## Qué es una imagen satelital

Es una fotografía (o, más precisamente, una **medición de energía
reflejada o emitida**) de la superficie terrestre, tomada por un
satélite en órbita en vez de por una cámara en el suelo o en un avión.
El nombre técnico de esta disciplina es **teledetección** (percibir algo
a distancia, sin tocarlo).

## Cómo "ve" un satélite: bandas espectrales

Una cámara común capta sólo luz visible (rojo, verde, azul). Los
sensores satelitales, en cambio, suelen captar además **bandas** de luz
que el ojo humano no ve: infrarrojo cercano, infrarrojo térmico,
microondas. Cada banda revela algo distinto:

- **Luz visible**: lo que se vería a simple vista desde el espacio
  (color real del terreno, agua, nubes).
- **Infrarrojo cercano**: la vegetación sana lo refleja mucho más que
  la vegetación enferma o el suelo desnudo — por eso es la banda clave
  para medir salud de cultivos y detectar deforestación.
- **Infrarrojo térmico**: mide temperatura de la superficie (útil para
  incendios activos, islas de calor urbano, temperatura del mar).
- **Microondas (radar)**: puede atravesar nubes y funcionar de noche,
  útil para monitorear zonas con clima muy nublado (selva amazónica) o
  hacer seguimiento constante sin depender de la luz del día.

Combinar bandas que el ojo no ve en una imagen "falso color" es una
técnica estándar para resaltar justo lo que se quiere estudiar (ej.:
vegetación en rojo intenso para verla mejor).

## Usos reales de las imágenes satelitales

- **Deforestación**: comparar imágenes del mismo lugar en dos fechas
  distintas para medir cuánto bosque desapareció.
- **Agricultura de precisión**: detectar qué zonas de un campo tienen
  estrés hídrico o plagas antes de que sean visibles a simple vista
  desde el suelo.
- **Meteorología**: las imágenes de satélites meteorológicos (nubes,
  ciclones, frentes) son la base de buena parte del pronóstico del
  tiempo.
- **Respuesta a desastres**: medir el área afectada por una inundación,
  incendio o terremoto comparando imágenes de antes y después.
- **Urbanización**: medir cuánto creció una ciudad a lo largo de los
  años observando el cambio en la superficie construida.

## Resolución: qué tan chico se puede distinguir

La **resolución espacial** de una imagen satelital indica el tamaño
real del área que representa cada píxel — un satélite de "10 metros de
resolución" no puede distinguir nada más chico que un cuadrado de 10 m
de lado (dos autos estacionados uno al lado del otro se ven como un solo
punto). Hay un compromiso real entre resolución, cobertura y frecuencia
de paso: un satélite que fotografía todo el planeta todos los días
(alta frecuencia) suele tener menor resolución que uno especializado
que pasa cada varias semanas por el mismo punto con mucho más detalle.

## Diferencia con el GPS

El GPS (ver `../sig-gps/`) sólo da una posición (un punto); las
imágenes satelitales dan una **imagen completa de una zona entera**,
sin necesitar receptor alguno en tierra — son dos tecnologías satelitales
con propósitos completamente distintos que conviven en un mismo mapa
digital (ver `../sig-mapas-digitales/`) como capas separadas.
