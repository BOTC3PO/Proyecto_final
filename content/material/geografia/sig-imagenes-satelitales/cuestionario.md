# Geografía — SIG: imágenes satelitales (cuestionario, 20 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una imagen satelital

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "basico"
  tags: ["teledeteccion", "vocabulario"]

enunciado: "¿Qué es una imagen satelital?"
tipo: mc
opciones_explicitas:
  - "Una medición de energía reflejada o emitida por la superficie terrestre, captada por un satélite en órbita"
  - "Una foto tomada por un avión a baja altura"
  - "Un mapa dibujado a mano por un cartógrafo"
respuesta: "Una medición de energía reflejada o emitida por la superficie terrestre, captada por un satélite en órbita"

explicacion: |
  La disciplina que estudia esto se llama teledetección: percibir algo
  a distancia, sin tocarlo.
```

### 2 — Nombre técnico de la disciplina

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "intermedio"
  tags: ["teledeteccion"]

enunciado: "¿Cómo se llama la disciplina que estudia cómo captar información de la superficie terrestre a distancia, sin contacto directo?"
tipo: mc
opciones_explicitas:
  - "Teledetección"
  - "Trilateración"
  - "Geocodificación"
respuesta: "Teledetección"

explicacion: |
  Es el nombre técnico de "percibir algo a distancia" — cubre tanto
  imágenes satelitales como aéreas.
```

### 3 — Qué capta una cámara común vs. un satélite

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "intermedio"
  tags: ["bandas_espectrales"]

enunciado: "¿En qué se diferencia un sensor satelital de una cámara de fotos común?"
tipo: mc
opciones_explicitas:
  - "El sensor satelital suele captar además bandas de luz invisibles al ojo humano, como el infrarrojo"
  - "El sensor satelital sólo capta blanco y negro"
  - "No hay ninguna diferencia real"
respuesta: "El sensor satelital suele captar además bandas de luz invisibles al ojo humano, como el infrarrojo"

explicacion: |
  Una cámara común capta sólo luz visible (rojo, verde, azul); los
  satélites suelen sumar infrarrojo, térmico y microondas.
```

### 4 — Infrarrojo cercano y vegetación

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "avanzado"
  tags: ["bandas_espectrales", "agricultura"]

enunciado: "¿Por qué la banda de infrarrojo cercano es clave para medir la salud de un cultivo?"
tipo: mc
opciones_explicitas:
  - "Porque la vegetación sana la refleja mucho más que la vegetación enferma o el suelo desnudo"
  - "Porque el infrarrojo cercano muestra el color real de las plantas"
  - "Porque sólo detecta agua, no plantas"
respuesta: "Porque la vegetación sana la refleja mucho más que la vegetación enferma o el suelo desnudo"

explicacion: |
  Esa diferencia de reflectancia entre vegetación sana y enferma es la
  base de los índices de vegetación usados en agricultura de precisión.
```

### 5 — Infrarrojo térmico

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "intermedio"
  tags: ["bandas_espectrales"]

enunciado: "¿Qué mide la banda de infrarrojo térmico de un satélite?"
tipo: mc
opciones_explicitas:
  - "La temperatura de la superficie"
  - "El color visible del terreno"
  - "La altitud del satélite"
respuesta: "La temperatura de la superficie"

explicacion: |
  Es útil para detectar incendios activos, islas de calor urbano o
  temperatura del mar.
```

### 6 — Microondas / radar

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "avanzado"
  tags: ["bandas_espectrales"]

enunciado: "¿Qué ventaja tiene la banda de microondas (radar) frente a la luz visible o el infrarrojo?"
tipo: mc
opciones_explicitas:
  - "Puede atravesar nubes y funcionar de noche"
  - "Muestra colores más realistas"
  - "Sólo funciona sobre el océano"
respuesta: "Puede atravesar nubes y funcionar de noche"

explicacion: |
  Es clave para monitorear zonas con clima muy nublado (como la selva
  amazónica) o hacer seguimiento constante sin depender de luz solar.
```

### 7 — Imagen falso color

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "avanzado"
  tags: ["bandas_espectrales"]

enunciado: "¿Qué es una imagen \"falso color\" en teledetección?"
tipo: mc
opciones_explicitas:
  - "Combinar bandas invisibles al ojo humano en una imagen para resaltar lo que se quiere estudiar"
  - "Una imagen tomada de noche sin luz"
  - "Un error de calibración del sensor"
respuesta: "Combinar bandas invisibles al ojo humano en una imagen para resaltar lo que se quiere estudiar"

explicacion: |
  Ej.: mostrar vegetación en rojo intenso combinando bandas de
  infrarrojo, para verla mejor que en color natural.
```

### 8 — Uso: deforestación

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "basico"
  tags: ["usos"]

enunciado: "¿Cómo se mide deforestación con imágenes satelitales?"
tipo: mc
opciones_explicitas:
  - "Comparando imágenes del mismo lugar en dos fechas distintas"
  - "Contando la cantidad de satélites que pasan por la zona"
  - "Midiendo la temperatura del aire"
respuesta: "Comparando imágenes del mismo lugar en dos fechas distintas"

explicacion: |
  La diferencia entre las dos imágenes muestra cuánto bosque
  desapareció en ese período.
```

### 9 — Uso: meteorología

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "basico"
  tags: ["usos"]

enunciado: "¿Qué información usan los satélites meteorológicos como base del pronóstico del tiempo?"
tipo: mc
opciones_explicitas:
  - "Imágenes de nubes, ciclones y frentes"
  - "Sólo la posición GPS de las ciudades"
  - "El color del cielo visto desde el suelo"
respuesta: "Imágenes de nubes, ciclones y frentes"

explicacion: |
  Buena parte del pronóstico del tiempo depende de imágenes satelitales
  actualizadas constantemente.
```

### 10 — Uso: respuesta a desastres

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "intermedio"
  tags: ["usos"]

enunciado: "¿Para qué se usan las imágenes satelitales después de una inundación?"
tipo: mc
opciones_explicitas:
  - "Para medir el área afectada comparando imágenes de antes y después"
  - "Para calcular la posición GPS de las víctimas"
  - "Para predecir el próximo terremoto"
respuesta: "Para medir el área afectada comparando imágenes de antes y después"

explicacion: |
  Es el mismo principio que la detección de deforestación: comparar
  el mismo lugar en dos momentos distintos.
```

### 11 — Uso: urbanización

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "intermedio"
  tags: ["usos"]

enunciado: "¿Cómo se mide el crecimiento de una ciudad a lo largo de los años con imágenes satelitales?"
tipo: mc
opciones_explicitas:
  - "Observando el cambio en la superficie construida entre imágenes de distintos años"
  - "Contando la cantidad de satélites en órbita"
  - "Midiendo sólo la temperatura del asfalto"
respuesta: "Observando el cambio en la superficie construida entre imágenes de distintos años"

explicacion: |
  Es otro caso del mismo método de comparación temporal de imágenes.
```

### 12 — Resolución espacial

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "intermedio"
  tags: ["resolucion"]

enunciado: "¿Qué indica la \"resolución espacial\" de una imagen satelital?"
tipo: mc
opciones_explicitas:
  - "El tamaño real del área que representa cada píxel de la imagen"
  - "La cantidad de colores que puede mostrar"
  - "La velocidad del satélite en su órbita"
respuesta: "El tamaño real del área que representa cada píxel de la imagen"

explicacion: |
  Un satélite de 10 metros de resolución no distingue nada más chico
  que un cuadrado de 10 m de lado.
```

### 13 — Qué no se distingue con baja resolución

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "avanzado"
  tags: ["resolucion"]

enunciado: "Con un satélite de 10 metros de resolución, ¿qué pasa con dos autos estacionados uno al lado del otro?"
tipo: mc
opciones_explicitas:
  - "Se ven como un solo punto, sin poder distinguirlos"
  - "Se ven perfectamente separados y con detalle"
  - "El satélite no puede fotografiar autos en absoluto"
respuesta: "Se ven como un solo punto, sin poder distinguirlos"

explicacion: |
  Cada píxel de esa imagen representa un área de 10x10 m; dos autos
  chicos caen dentro del mismo píxel.
```

### 14 — Compromiso resolución vs. frecuencia

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "avanzado"
  tags: ["resolucion"]

enunciado: "¿Qué compromiso suele existir entre resolución y frecuencia de paso de un satélite?"
tipo: mc
opciones_explicitas:
  - "Un satélite que fotografía todo el planeta a diario suele tener menor resolución que uno especializado que pasa cada varias semanas"
  - "No existe ningún compromiso, ambas cosas son independientes"
  - "A mayor frecuencia de paso, siempre mayor resolución"
respuesta: "Un satélite que fotografía todo el planeta a diario suele tener menor resolución que uno especializado que pasa cada varias semanas"

explicacion: |
  Es un trade-off real de ingeniería: cobertura amplia y frecuente vs.
  detalle fino en un punto específico.
```

### 15 — Diferencia con el GPS

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿En qué se diferencia una imagen satelital del GPS?"
tipo: mc
opciones_explicitas:
  - "La imagen satelital muestra una zona entera; el GPS sólo da una posición puntual"
  - "Son exactamente la misma tecnología"
  - "El GPS necesita cámaras y la imagen satelital no"
respuesta: "La imagen satelital muestra una zona entera; el GPS sólo da una posición puntual"

explicacion: |
  Son dos usos distintos de satélites: uno da un punto (posición), el
  otro da una imagen completa de una superficie.
```

### 16 — Verdadero o falso: necesitan un receptor en tierra

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "intermedio"
  tags: ["teledeteccion"]

enunciado: "Para tomar una imagen satelital de una zona hace falta un receptor especial instalado en esa zona."
tipo: vf
respuesta: falso

explicacion: |
  A diferencia del GPS (que necesita un receptor calculando su
  posición), la imagen satelital se capta desde el satélite sin
  necesitar nada en tierra.
```

### 17 — Verdadero o falso: sólo capta luz visible

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "basico"
  tags: ["bandas_espectrales"]

enunciado: "Un satélite de observación terrestre sólo puede captar luz visible, igual que el ojo humano."
tipo: vf
respuesta: falso

explicacion: |
  La mayoría de los satélites de observación captan además bandas
  invisibles (infrarrojo, térmico, microondas), cada una útil para
  medir algo distinto.
```

### 18 — Capa de mapa digital que usa esto

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "basico"
  tags: ["cruce"]

enunciado: "En una app de mapas, ¿qué capa se construye directamente a partir de imágenes satelitales?"
tipo: mc
opciones_explicitas:
  - "La vista \"satélite\""
  - "La capa de tránsito en tiempo real"
  - "La capa de límites políticos"
respuesta: "La vista \"satélite\""

explicacion: |
  Es la capa que muestra el terreno tal como se ve desde el espacio,
  distinta de la capa vectorial de calles.
```

### 19 — Selva amazónica y radar

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "avanzado"
  tags: ["bandas_espectrales"]

enunciado: "Para monitorear deforestación en la selva amazónica, con nubosidad casi constante, ¿qué banda es especialmente útil?"
tipo: mc
opciones_explicitas:
  - "Microondas (radar), que atraviesa las nubes"
  - "Luz visible únicamente"
  - "Sólo infrarrojo térmico"
respuesta: "Microondas (radar), que atraviesa las nubes"

explicacion: |
  El radar permite captar imágenes útiles incluso con cobertura de
  nubes casi permanente, donde la luz visible o el infrarrojo cercano
  quedarían bloqueados.
```

### 20 — Resumen: teledetección vs. GPS vs. mapas digitales

```
metadata:
  materia: "geografia"
  tema: "sig_imagenes_satelitales"
  nivel: "avanzado"
  tags: ["cruce"]

enunciado: "De las 3 tecnologías del Sistema de Información Geográfica (mapas digitales, GPS, imágenes satelitales), ¿cuál da una imagen completa de una zona en vez de un punto o una capa de datos vectoriales?"
tipo: mc
opciones_explicitas:
  - "Imágenes satelitales"
  - "GPS"
  - "Mapas digitales"
respuesta: "Imágenes satelitales"

explicacion: |
  El GPS da un punto; el mapa digital organiza datos en capas
  vectoriales (calles, edificios); la imagen satelital capta una
  fotografía/medición completa de la superficie.
```
