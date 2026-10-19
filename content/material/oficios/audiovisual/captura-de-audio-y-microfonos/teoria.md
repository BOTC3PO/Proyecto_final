# Audiovisual — Captura de audio y micrófonos (teoria)

> Tema de los finales de ruta de `oficios-orientacion-vocacional-PLANIFICACION.md`. Depende de `../../informatica/unidades-almacenamiento/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Grabar bien vale más que arreglar después

En audio vale una regla simple: lo que no se graba bien es muy difícil de arreglar. La edición puede atenuar un ruido o equilibrar un volumen, pero no devuelve claridad a una voz grabada lejos del micrófono, en una habitación con eco o con el nivel recortado. Por eso el trabajo de captura pesa más que cualquier procesamiento posterior. Una grabación limpia ahorra horas de edición.

La cadena de captura tiene cuatro eslabones: la fuente de sonido, el lugar donde se graba, el micrófono y el equipo que lo convierte a digital. Un problema en cualquiera de ellos se arrastra hasta el resultado final.

## 2. Tipos de micrófono

Los micrófonos dinámicos son robustos, no necesitan alimentación y captan menos el ruido ambiente. Son una buena elección para voz en lugares ruidosos o sin tratamiento acústico. Los micrófonos de condensador son más sensibles y captan más detalle, pero también más ruido de la habitación. Necesitan alimentación, que suele ser phantom de 48 voltios provista por una interfaz de audio o una consola, o un puerto USB si son de tipo USB.

Los micrófonos de solapa (lavalier) son pequeños y se prenden a la ropa; mantienen una distancia constante a la boca y son comunes en entrevistas y videos. Los micrófonos de cañón (shotgun) son muy direccionales y se montan sobre la cámara o en una caña (boom) fuera de plano. Los micrófonos del celular o de la cámara sirven para registro informal, pero suelen quedar lejos de la fuente.

## 3. Patrón polar y distancia

El patrón polar indica desde qué direcciones capta el sonido. El cardioide capta sobre todo lo que está adelante y rechaza lo que viene de atrás, por lo que es el más usado para voz. El omnidireccional capta todo alrededor, y el bidireccional capta adelante y atrás, útil para una entrevista cara a cara con un solo micrófono.

La distancia a la fuente cambia todo. Cuanto más cerca está el micrófono, más fuerte es la voz respecto del ruido y del eco de la habitación. En voz hablada, una distancia de pocos centímetros hasta unos 20 o 30 es habitual según el micrófono, con un efecto de refuerzo de graves al acercarse, llamado efecto de proximidad. Un filtro antipop evita los golpes de aire de las letras p y b, y la posición ligeramente de costado también ayuda.

## 4. El entorno y los niveles

Antes de grabar se apagan fuentes de ruido: ventiladores, aire acondicionado, heladera, notificaciones del teléfono. Las superficies duras y desnudas generan eco; una habitación con cortinas, alfombras, sillones y estanterías suena mejor. Grabar en un placard con ropa o armar un improvisado tratamiento con mantas puede mejorar mucho una voz hogareña. Conviene hacer una prueba corta y escucharla con auriculares.

La ganancia de entrada se ajusta para que los picos lleguen aproximadamente entre menos 12 y menos 6 dBFS, sin llegar nunca al máximo, porque más allá se produce recorte (clipping) y la distorsión no se puede reparar. En digital no hace falta grabar al límite: el nivel bajo se sube después, el recortado no se arregla. Grabar a 24 bits da más margen que a 16.

## 5. Buenas prácticas de grabación

Se monitorea con auriculares cerrados para escuchar lo que realmente se graba. Se graba unos segundos de silencio de la sala, el llamado tono de ambiente (room tone), que sirve después para rellenar huecos o aplicar reducción de ruido. Se hace una prueba de nivel con el volumen más alto que se prevé, como una risa o un énfasis.

Se nombran los archivos con claridad, se hacen copias de respaldo inmediatamente y se mantiene siempre un mismo ajuste de muestreo, por ejemplo 48 kHz si el audio acompañará un video. Cuando hay varias personas, lo ideal es un micrófono por persona, o al menos mantener a todas a una distancia similar. Con estos hábitos la edición posterior se vuelve simple.
