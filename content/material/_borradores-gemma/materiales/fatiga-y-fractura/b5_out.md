### 1 — Límite de fatiga en un eje
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["fatiga", "resistencia"]

variables:
  escenario: uno_de([[120, "120 MPa"], [150, "150 MPa"], [180, "180 MPa"]])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["120 MPa", "150 MPa", "180 MPa", "200 MPa"]

enunciado: "Un componente de acero está sometido a un ciclo de carga alternante. Si el límite de fatiga del material es de {escenario[idx][0]} MPa, ¿cuál es el valor máximo de esfuerzo que puede soportar indefinidamente sin fallar por fatiga?"

explicacion: |
  El límite de fatiga es el valor de esfuerzo por debajo del cual un material puede soportar ciclos de carga infinitos sin que se inicie una fractura por fatiga.
```

### 2 — Mecanismo de propagación de grietas
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["fractura", "grieta"]

respuesta: "propagación"
tipo: completar
respuestas_validas: ["propagación", "iniciación", "nucleación"]

enunciado: "En un proceso de fatiga, una vez que se ha formado una microgrieta en la superficie, la etapa siguiente es la de ___ de la grieta hacia el interior del material."

explicacion: |
  La fatiga ocurre en tres etapas: 1) Iniciación de la grieta, 2) Propagación de la grieta (donde se observa la estriación) y 3) Fractura catastrófica final.
```

### 3 — Relación entre esfuerzos y vida útil
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "avanzado"
  tags: ["curva_s_n", "fatiga"]

variables:
  caso: uno_de([[200, "alta"], [350, "baja"]])

respuesta: caso[idx][1]
tipo: vf

enunciado: "Si aumentamos la amplitud del esfuerzo aplicado en un componente, la vida útil a la fatiga (número de ciclos hasta la rotura) será: {caso[idx][0] == 200 ? 'alta' : 'baja'}."

explicacion: |
  Existe una relación inversa entre la amplitud del esfuerzo y la vida útil: a mayor esfuerzo, menor es el número de ciclos que el material puede resistir antes de fallar.
```

### 4 — Secuencia de falla por fatiga
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["secuencia", "fractura"]

respuesta: ["iniciación", "propagación", "fractura final"]
tipo: ordenar
opciones_explicitas: ["iniciación", "propagación", "fractura final"]

enunciado: "Ordene cronológicamente las etapas de un proceso de falla por fatiga en un material dúctil:"

explicacion: |
  El proceso comienza con la iniciación de una grieta (usualmente en superficie), continúa con la propagación de la misma mediante estriaciones y termina con una fractura rápida cuando la sección remanente es insuficiente.
```

### 5 — Superficie de fractura por fatiga
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["morfología", "fractura"]

variables:
  tipo_falla: uno_de([[1, "rugosa"], [2, "dúctil"], [3, "frágil"]])

respuesta: tipo_falla[idx][1]
tipo: mc
opciones_explicitas: ["rugosa", "dúctil", "frágil"]

enunciado: "La superficie de una fractura por fatiga se caracteriza visualmente por ser de apariencia {tipo_falla[idx][1]} debido a la progresión de la grieta, a diferencia de una fractura súbita."

explicacion: |
  Las fracturas por fatiga suelen presentar una zona de progresión con apariencia rugosa o con marcas de estriaciones, mientras que las fracturas frágiles suelen ser granulares o brillantes.
```