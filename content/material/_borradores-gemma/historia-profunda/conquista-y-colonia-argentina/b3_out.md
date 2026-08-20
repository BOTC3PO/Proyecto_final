### 1 — Las dos fundaciones de Buenos Aires
```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["fundacion", "buenos_aires", "conquista"]

tipo: mc
opciones_explicitas: ["Pedro de Mendoza", "Juan de Garay", "Juan de Cabral", "Hernán de Magallanes"]

enunciado: "La primera fundación de la ciudad de Buenos Aires, realizada en 1536, fue liderada por el cual de los siguientes exploradores?"

respuesta: "Pedro de Mendoza"

explicacion: |
  La primera fundación fue un intento fallido liderado por Pedro de Mendoza en 1536, que terminó siendo abandonado debido a las condiciones extremas y los conflictos con los nativos.
```

### 2 — El destino de la primera fundación
```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "basico"
  tags: ["fundacion", "buenos_aires", "fracaso"]

tipo: completar
respuestas_validas: ["fracasó", "prosperó", "fue destruida"]

enunciado: "A diferencia de la segunda fundación, la expedición de Pedro de Mendoza en 1536 ___ y la ciudad fue posteriormente abandonada."

respuesta: "fracasó"

explicacion: |
  La primera fundación de Buenos Aires fracasó debido a la hambruna y los ataques de los pueblos originarios, lo que obligó a los sobrevivientes a retirarse.
```

### 3 — El éxito de la segunda fundación
```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["fundacion", "buenos_aires", "juan_de_garay"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Juan de Garay", "Pedro de Mendoza"]

enunciado: "En el año 1580, la segunda fundación de Buenos Aires, que finalmente logró consolidarse y prosperar, fue llevada a cabo por: ___"

datos: [["Juan de Garay", "Juan de Garay"], ["Pedro de Mendoza", "Pedro de Mendoza"]]

explicacion: |
  Juan de Garay lideró la segunda fundación en 1580, estableciendo un asentamiento que sí logró perdurar en el tiempo, a diferencia del intento de 1536.
```

### 4 — Cronología de fundaciones
```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "intermedio"
  tags: ["cronologia", "fundaciones"]

tipo: ordenar
opciones_explicitas: ["Fundación de Mendoza (1536)", "Fundación de Garay (1580)", "Consolidación de la ciudad"]

respuesta: ["Fundación de Mendoza (1536)", "Fundación de Garay (1580)", "Consolidación de la ciudad"]

enunciado: "Ordene cronológicamente los hitos de la fundación de Buenos Aires:"

explicacion: |
  El proceso comenzó con el intento fallido de Mendoza en 1536, seguido por el intento exitoso de Garay en 1580, lo que permitió la posterior consolidación de la ciudad.
```

### 5 — Comparativa de fundadores
```
metadata:
  materia: "historia"
  tema: "conquista_y_colonia_argentina"
  nivel: "avanzado"
  tags: ["fundadores", "comparativa"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Garay", "Mendoza"]

enunciado: "Si comparamos los dos intentos de fundación de Buenos Aires, el líder que logró establecer un asentamiento próspero fue ___."

datos: [["Garay", "Garay"], ["Mendoza", "Mendoza"]]

explicacion: |
  Mientras que Mendoza (1536) no logró establecer un asentamiento permanente, Juan de Garay (1580) fue el responsable de la fundación que prosperó.
```