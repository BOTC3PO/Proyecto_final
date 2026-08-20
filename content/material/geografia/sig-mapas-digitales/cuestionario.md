# Geografía — SIG: mapas digitales (cuestionario, 20 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es un SIG

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["sig", "vocabulario"]

enunciado: "¿Qué es un Sistema de Información Geográfica (SIG)?"
tipo: mc
opciones_explicitas:
  - "Una base de datos donde cada elemento del mapa tiene coordenadas y datos asociados"
  - "Una foto escaneada de un mapa de papel"
  - "Un tipo de brújula digital"
respuesta: "Una base de datos donde cada elemento del mapa tiene coordenadas y datos asociados"

explicacion: |
  Eso es lo que permite que el mapa responda preguntas (buscar,
  calcular rutas) en vez de sólo mostrarse.
```

### 2 — Diferencia con un mapa escaneado

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "intermedio"
  tags: ["sig"]

enunciado: "¿Por qué un mapa digital moderno no es simplemente un mapa de papel escaneado?"
tipo: mc
opciones_explicitas:
  - "Porque cada elemento tiene coordenadas y datos que se pueden consultar, no sólo una imagen fija"
  - "Porque los mapas escaneados no tienen colores"
  - "Porque un mapa digital no puede mostrar límites políticos"
respuesta: "Porque cada elemento tiene coordenadas y datos que se pueden consultar, no sólo una imagen fija"

explicacion: |
  Una imagen escaneada es sólo píxeles; un SIG sabe qué es cada cosa y
  dónde está en coordenadas reales.
```

### 3 — Qué es una capa

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["capas"]

enunciado: "En un SIG, ¿qué es una \"capa\"?"
tipo: mc
opciones_explicitas:
  - "Un conjunto de información independiente (calles, edificios, tránsito) que se puede mostrar u ocultar por separado"
  - "El color de fondo del mapa"
  - "La escala numérica del mapa"
respuesta: "Un conjunto de información independiente (calles, edificios, tránsito) que se puede mostrar u ocultar por separado"

explicacion: |
  Las capas permiten combinar sólo la información que se necesita en
  cada momento.
```

### 4 — Ejemplo de capa

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["capas"]

enunciado: "¿Cuál de estos es un ejemplo típico de capa en un mapa digital?"
tipo: mc
opciones_explicitas:
  - "Tránsito en tiempo real"
  - "El nombre de la empresa que hizo el mapa"
  - "La fecha de instalación de la app"
respuesta: "Tránsito en tiempo real"

explicacion: |
  Tránsito, imágenes satelitales, límites administrativos y calles son
  capas típicas que se pueden combinar o separar.
```

### 5 — Relación entre capas y mapas temáticos de papel

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "avanzado"
  tags: ["capas"]

enunciado: "¿En qué se parece el sistema de capas de un SIG a un mapa temático de papel?"
tipo: mc
opciones_explicitas:
  - "Ambos eligen qué información mostrar y cuál descartar, para no saturar la lectura"
  - "Ambos usan exactamente la misma escala numérica"
  - "No se parecen en nada"
respuesta: "Ambos eligen qué información mostrar y cuál descartar, para no saturar la lectura"

explicacion: |
  La diferencia es que el SIG permite cambiar esa selección al
  instante prendiendo o apagando capas, en vez de dibujar un mapa nuevo.
```

### 6 — Qué es geocodificar

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "intermedio"
  tags: ["geocodificacion"]

enunciado: "¿Qué hace un SIG cuando convierte el texto \"Av. Corrientes 1000\" en un par de coordenadas de latitud y longitud?"
tipo: mc
opciones_explicitas:
  - "Geocodificar la dirección"
  - "Calcular una ruta"
  - "Renderizar una capa satelital"
respuesta: "Geocodificar la dirección"

explicacion: |
  Geocodificar es traducir una dirección en texto a las coordenadas
  reales que la ubican en el mapa.
```

### 7 — Escala fija vs. zoom continuo

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "intermedio"
  tags: ["ventajas"]

enunciado: "¿Qué diferencia hay entre la escala de un mapa de papel y la de un mapa digital?"
tipo: mc
opciones_explicitas:
  - "El de papel tiene escala fija; el digital permite zoom continuo, recalculando qué detalle mostrar en cada nivel"
  - "El mapa digital siempre usa la misma escala que uno de papel"
  - "El mapa de papel siempre tiene más detalle"
respuesta: "El de papel tiene escala fija; el digital permite zoom continuo, recalculando qué detalle mostrar en cada nivel"

explicacion: |
  Al acercar el zoom en un mapa digital aparecen nombres de calles que
  no entrarían en un mapa impreso a escala de país.
```

### 8 — Cálculo automático de rutas

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["ventajas"]

enunciado: "¿Qué puede hacer un mapa digital que uno de papel no puede?"
tipo: mc
opciones_explicitas:
  - "Calcular automáticamente el camino más corto o más rápido entre dos puntos"
  - "Mostrar los límites entre países"
  - "Usar una rosa de los vientos"
respuesta: "Calcular automáticamente el camino más corto o más rápido entre dos puntos"

explicacion: |
  En papel, calcular una ruta óptima requeriría medir a mano; el
  sistema lo hace automáticamente.
```

### 9 — Datos en tiempo real

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["ventajas"]

enunciado: "¿Cuál de estas capas es imposible de tener en un mapa impreso?"
tipo: mc
opciones_explicitas:
  - "Tránsito en tiempo real, que se actualiza constantemente"
  - "Los límites de las provincias"
  - "El nombre de las ciudades"
respuesta: "Tránsito en tiempo real, que se actualiza constantemente"

explicacion: |
  Un mapa impreso queda fijo desde el momento en que se imprime; el
  tránsito en vivo necesita actualizarse todo el tiempo.
```

### 10 — Búsqueda por categoría

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "intermedio"
  tags: ["ventajas"]

enunciado: "Buscar \"farmacias cerca\" en un mapa digital sin saber de antemano dónde están es un ejemplo de..."
tipo: mc
opciones_explicitas:
  - "Búsqueda por categoría, posible gracias a que cada elemento tiene datos asociados"
  - "Geocodificación de una dirección"
  - "Una escala gráfica"
respuesta: "Búsqueda por categoría, posible gracias a que cada elemento tiene datos asociados"

explicacion: |
  El SIG sabe qué tipo de lugar es cada punto (farmacia, banco,
  restaurante) y puede filtrarlos.
```

### 11 — Verdadero o falso: un SIG sólo muestra imágenes

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["sig"]

enunciado: "Un SIG es simplemente una imagen que se muestra en pantalla, sin datos asociados a lo que dibuja."
tipo: vf
respuesta: falso

explicacion: |
  La característica que define a un SIG es justamente que cada
  elemento tiene datos asociados (coordenadas, nombre, tipo).
```

### 12 — Fuente de la posición del usuario

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["gps", "cruce"]

enunciado: "¿De qué tecnología viene la posición del usuario en un mapa digital (el puntito azul)?"
tipo: mc
opciones_explicitas:
  - "GPS"
  - "Escala gráfica"
  - "Rosa de los vientos"
respuesta: "GPS"

explicacion: |
  El GPS calcula la posición y el mapa digital la muestra sobre sus
  capas — ver `../sig-gps/`.
```

### 13 — Fuente de la vista "satélite"

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["imagenes_satelitales", "cruce"]

enunciado: "La capa de vista \"satélite\" de un mapa digital viene de..."
tipo: mc
opciones_explicitas:
  - "Imágenes satelitales"
  - "El sistema de posicionamiento GPS"
  - "Una brújula digital"
respuesta: "Imágenes satelitales"

explicacion: |
  Es otra tecnología distinta que se combina con el mapa digital — ver
  `../sig-imagenes-satelitales/`.
```

### 14 — Verdadero o falso: capas independientes

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "intermedio"
  tags: ["capas"]

enunciado: "Las capas de un SIG se pueden mostrar u ocultar de forma independiente unas de otras."
tipo: vf
respuesta: verdadero

explicacion: |
  Esa independencia es justamente lo que permite combinar sólo la
  información necesaria en cada momento.
```

### 15 — Coordenadas detrás de cada punto

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "intermedio"
  tags: ["coordenadas", "cruce"]

enunciado: "¿Qué tiene asociado cada elemento (calle, edificio, comercio) dentro de un mapa digital, además de sus datos?"
tipo: mc
opciones_explicitas:
  - "Coordenadas de latitud y longitud reales"
  - "Un número de escala numérica propio"
  - "Un huso horario propio distinto al del resto del mapa"
respuesta: "Coordenadas de latitud y longitud reales"

explicacion: |
  Es el mismo sistema de coordenadas que ya explica
  `../coordenadas-y-husos-horarios/` — el SIG cuelga sus datos sobre esa
  base.
```

### 16 — Frase resumen del tema

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "avanzado"
  tags: ["sig"]

enunciado: "¿Cuál de estas frases resume mejor qué es, en esencia, un Sistema de Información Geográfica?"
tipo: mc
opciones_explicitas:
  - "Coordenadas con una capa de datos encima"
  - "Un mapa dibujado a mano con más colores"
  - "Una brújula conectada a internet"
respuesta: "Coordenadas con una capa de datos encima"

explicacion: |
  Es la síntesis que usa `troncos.md` para explicar por qué mapas
  digitales, GPS e imágenes satelitales cuelgan del mismo nodo de
  coordenadas.
```

### 17 — Combinar capas según necesidad

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "intermedio"
  tags: ["capas"]

enunciado: "Para planificar un viaje en auto evitando el tránsito, ¿qué capas conviene combinar?"
tipo: mc
opciones_explicitas:
  - "Calles y tránsito en tiempo real"
  - "Sólo la capa de límites políticos"
  - "Sólo la capa de imágenes satelitales"
respuesta: "Calles y tránsito en tiempo real"

explicacion: |
  Un SIG permite elegir exactamente esas dos capas sin cargar las
  demás.
```

### 18 — Verdadero o falso: un mapa de papel se puede actualizar solo

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "basico"
  tags: ["ventajas"]

enunciado: "Un mapa de papel puede actualizar el tránsito o el clima automáticamente sin volver a imprimirse."
tipo: vf
respuesta: falso

explicacion: |
  Un mapa impreso queda fijo desde su impresión; sólo un SIG con datos
  en vivo puede actualizarse solo.
```

### 19 — Qué necesita saber el sistema para calcular una ruta

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "avanzado"
  tags: ["geocodificacion"]

enunciado: "Para calcular una ruta desde \"mi ubicación\" hasta \"Av. Corrientes 1000\", ¿qué paso previo tiene que hacer el sistema con la dirección de texto?"
tipo: mc
opciones_explicitas:
  - "Geocodificarla, convirtiéndola en coordenadas"
  - "Traducirla a otro idioma"
  - "Calcular su escala numérica"
respuesta: "Geocodificarla, convirtiéndola en coordenadas"

explicacion: |
  Sin coordenadas no hay forma de ubicar el destino en el mapa ni de
  calcular la distancia o el camino hacia él.
```

### 20 — Distinción con GPS e imágenes satelitales

```
metadata:
  materia: "geografia"
  tema: "sig_mapas_digitales"
  nivel: "intermedio"
  tags: ["sig", "cruce"]

enunciado: "¿Mapas digitales, GPS e imágenes satelitales son la misma tecnología o tecnologías distintas que se combinan?"
tipo: mc
opciones_explicitas:
  - "Son tres tecnologías distintas que se combinan en una app de mapas moderna"
  - "Son exactamente la misma tecnología con distinto nombre"
  - "El GPS es sólo un tipo de mapa digital"
respuesta: "Son tres tecnologías distintas que se combinan en una app de mapas moderna"

explicacion: |
  Por eso el MAPA las separó en 3 nodos hermanos (`G12a`/`G12b`/`G12c`)
  en vez de tratarlas como una sola habilidad.
```
