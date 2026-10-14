# Audiovisual — Edición de audio (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../../../informatica/unidades-almacenamiento/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/audiovisual/edicion-de-audio/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Cómo es el sonido digital

El sonido es una **vibración** del aire. Para guardarlo, un micrófono lo convierte en **señal eléctrica** y una placa de sonido lo **mide muchas veces por segundo** (**muestreo**).

- **Frecuencia de muestreo:** cuántas **muestras por segundo** se toman. **44,1 kHz** (música, CD) y **48 kHz** (video y cine) son las más comunes.
- **Profundidad de bits:** cuántos valores distintos puede tomar cada muestra. **16 bits** (calidad CD) y **24 bits** (grabación y edición, más margen).
- **Canales:** **mono** (1) y **estéreo** (2).
- **Duración × calidad = tamaño:** un audio **sin compresión** pesa mucho (un minuto de estéreo 44,1 kHz/16 bits son unos 10 MB).

**Formatos:**

| Formato | Compresión | Para qué |
|:--|:--|:--|
| **WAV** | **sin compresión** | grabación y edición |
| **FLAC** | **sin pérdida** (comprimido) | archivo de calidad |
| **MP3 / AAC / OGG** | **con pérdida** | distribución, web, celulares |

La edición se hace sobre **WAV**; el **MP3** se genera **al final** (una sola vez).

---

## 2. Qué se mide: niveles

- La unidad es el **decibel (dB)**.
- En audio digital, el **máximo** es **0 dBFS**: **más allá se recorta** la señal (**clipping**), con **distorsión** que **no se puede reparar**.
- **Se graba con margen** (picos alrededor de **−12 a −6 dBFS**).
- **Pico (peak):** el valor máximo instantáneo. **Volumen percibido (loudness):** cuánto "suena" fuerte, medido en **LUFS**.
- Referencias habituales: **−23 LUFS** (TV, norma EBU R128), **−16 a −14 LUFS** (podcasts y plataformas de streaming). **Hay que verificar** la norma del destino. Los **picos** se dejan por debajo de **−1 dB**.

---

## 3. Flujo de trabajo

1. **Importar** y **guardar una copia** del original.
2. **Recortar** silencios, errores y ruidos.
3. **Reducir el ruido** de fondo.
4. **Ecualizar** (EQ).
5. **Comprimir** (reducir la diferencia entre fuerte y suave).
6. **Normalizar** o ajustar el volumen final.
7. **Fundidos** de entrada y salida.
8. **Exportar** y **escuchar** en distintos equipos.

---

## 4. Herramientas básicas

- **Reducción de ruido:** se toma una **muestra del ruido** solo (por ejemplo, el zumbido de fondo) para que el programa lo **reste**. **Con moderación**: demasiada reducción da un sonido **metálico** o "debajo del agua".
- **Ecualizador (EQ):** sube o baja **zonas de frecuencia**. Un **filtro pasa-altos** (alrededor de **80–100 Hz**) quita los **graves** molestos (soplidos, golpes) de una **voz**.
- **Compresor:** **reduce los picos** y **sube lo débil**: la voz se oye más **pareja**.
- **Normalizar:** sube o baja **todo** el audio hasta un valor objetivo. No cambia la **dinámica**.
- **Limitador:** **evita que se pase** de un nivel máximo.
- **Fundido** (*fade*): sube o baja el volumen gradualmente; evita los **cortes bruscos** y los **clics**.
- **Cortes en el cruce por cero:** reducen los clics.

Programas: **Audacity** (libre y gratuito), **Ardour**, **Reaper**, **Adobe Audition**.

---

## 5. Edición de voz

- **Grabar en un lugar silencioso**, cerca del micrófono (unos **10 a 20 cm**) y con un **antipop** (filtro) para las "p" y "b".
- **No hablar directo al micrófono** si genera soplidos.
- **Eliminar respiraciones fuertes, muletillas y silencios largos** (pero **dejando respiración natural**).
- **Volumen parejo** entre las voces de un diálogo.
- **Música de fondo** más baja que la voz (unos **−15 a −20 dB**).

---

## 6. Buenas prácticas

- **Trabajar sobre una copia** y **guardar versiones**.
- **Escuchar con auriculares y con parlantes** y en el **celular**.
- **Descansar los oídos** y **no escuchar a alto volumen**: la **fatiga** engaña.
- **Respetar los derechos de autor**: música y sonidos **propios, con licencia o con permiso**.
- **Pedir autorización** para grabar la voz de otras personas.
