### 1 — El modelo de la caída libre
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["modelo", "representacion", "fisica"]

variables:
  escenario: uno_de([
    ["un objeto cae desde una torre", "caída libre"],
    ["una pelota es lanzada hacia arriba", "lanzamiento vertical"],
    ["una gota de lluvia cae al suelo", "caída de gota"]
  ])

enunciado: "Para estudiar el movimiento de {escenario[0]}, los científicos utilizan un modelo de 'caída libre'. Este modelo es una representación que:"

opciones_explicitas: ["Simplifica la realidad ignorando la resistencia del aire", "Es una copia exacta y perfecta de la realidad", "Es un fenómeno que no se puede representar"]

respuesta: "Simplifica la realidad ignorando la resistencia del aire"
tipo: mc

explicacion: |
  Un modelo científico no es la realidad misma, sino una simplificación que permite aislar las variables más importantes (en este caso, la gravedad) para realizar predicciones precisas.
```

### 2 — Componentes de un modelo
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["elementos", "modelo"]

variables:
  caso: uno_de([
    ["el clima de una ciudad", "clima"],
    ["el crecimiento de una población de bacterias", "población"],
    ["el flujo de agua en un río", "río"]
  ])

enunciado: "Al construir un modelo para representar {caso[0]}, es necesario definir variables. Si queremos predecir el comportamiento del sistema, la capacidad de un modelo para decirnos qué pasará en el futuro se denomina:"

opciones_explicitas: ["Capacidad predictiva", "Capacidad descriptiva", "Capacidad de observación"]

respuesta: "Capacidad predictiva"
tipo: mc

explicacion: |
  La utilidad principal de un modelo científico es su poder predictivo: si el modelo es válido, los resultados que arroja deben coincidir con lo que ocurre en la realidad bajo las mismas condiciones.
```

### 3 — Pasos del método de modelado
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

enunciado: "Para desarrollar un modelo científico sobre el efecto de un fertilizante en el crecimiento de una planta, se deben seguir estos pasos en orden lógico:"

opciones_explicitas: [
  "Observar el fenómeno y plantear una pregunta",
  "Construir el modelo matemático o conceptual",
  "Realar experimentos para validar el modelo",
  "Ajustar el modelo según los resultados obtenidos"
]

respuesta: ["Observar el fenómeno y plantear una pregunta", "Construir el modelo matemático o conceptual", "Realar experimentos para validar el modelo", "Ajustar el modelo según los resultados obtenidos"]
tipo: ordenar

explicacion: |
  El proceso de modelado es iterativo. Comienza con la observación, sigue con la creación de una representación, se pone a prueba mediante la experimentación y se refina si los datos no coinciden.
```

### 4 — Veracidad de un modelo
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "basico"
  tags: ["validación", "verdad"]

enunciado: "Si un modelo científico predice que la temperatura subirá 2 grados mañana, pero la temperatura sube 10 grados, ¿el modelo ha sido validado?"

respuesta: falso
tipo: vf

explicacion: |
  Un modelo se valida cuando sus predicciones coinciden con las observaciones empíricas. Si hay una discrepancia significativa, el modelo debe ser revisado o descartado.
```

### 5 — El modelo de la estructura atómica
```
metadata:
  materia: "investigacion"
  tema: "construir_y_usar_un_modelo_cientifico"
  nivel: "avanzado"
  tags: ["historia", "modelos"]

enunciado: "El modelo atómico de Bohr representa al átomo como un sistema solar en miniatura, donde los electrones orbitan el núcleo en trayectorias circulares fijas. En este modelo, la variable que determina el nivel de energía del electrón es la ___."

respuestas_validas: ["distancia al núcleo", "carga del núcleo", "velocidad orbital"]

respuesta: "distancia al núcleo"
tipo: completar

explicacion: |
  En el modelo de Bohr, la posición (distancia) de los electrones respecto al núcleo está cuantizada y define los niveles de energía permitidos.
```