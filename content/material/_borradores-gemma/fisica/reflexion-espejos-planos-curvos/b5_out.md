### 1 — Espejo de seguridad en supermercado
```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_planos"
  nivel: "basico"
  tags: ["optica", "reflexion"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [["espejo plano", "la imagen es del mismo tamaño que el objeto"], ["espejo plano", "la imagen es invertida lateralmente"]]
  tipo_espejo: uno_de([0,1])
  escenario: uno_de([["un pasillo de supermercado", "espejo plano"], ["un baño", "espejo plano"]])

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["la imagen es del mismo tamaño que el objeto", "la imagen es invertida lateralmente", "la imagen es siempre mayor", "la imagen es siempre menor"]

enunciado: "En {escenario[0]}, el uso de un {escenario[1]} permite ver el entorno. En este caso, la característica de la imagen es que ___."

explicacion: |
  En un espejo plano, la imagen es virtual, derecha y de igual tamaño que el objeto, aunque presenta inversión lateral.
```

### 2 — El reflejo en una cuchara
```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "intermedio"
  tags: ["espejos_curvos", "concavo"]

variables:
  tipo_lado: uno_de([0,1])
  lados: [["la parte interna (cóncava)", "se ve invertida"], ["la parte externa (convexa)", "se ve derecha"]]

respuesta: lados[tipo_lado][1]
tipo: mc
opciones_explicitas: ["se ve invertida", "se ve derecha", "se ve aumentada", "se ve reducida"]

enunciado: "Si observas tu rostro en una cuchara de metal, el efecto dependerá de qué parte uses. Si miras por {lados[tipo_lado][0]}, la imagen que percibes ___."

explicacion: |
  La parte interna de la cuchara actúa como un espejo cóncavo. Dependiendo de la distancia, la imagen puede ser real e invertida o virtual y aumentada.
```

### 3 — Espejos de seguridad en curvas
```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "intermedio"
  tags: ["espejos_convexos", "seguridad"]

variables:
  es_convexo: verdadero

respuesta: es_convexo
tipo: vf

enunciado: "Los espejos situados en las salidas de los estacionamientos o en curvas peligrosas suelen ser convexos para ampliar el campo visual. ¿Es cierto que un espejo convexo siempre produce imágenes virtuales y menores que el objeto?"

explicacion: |
  Verdadero. Los espejos convexos divergen los rayos de luz, lo que resulta en imágenes siempre virtuales, derechas y de menor tamaño, permitiendo un campo visual más amplio.
```

### 4 — Construcción de un sistema óptico
```
metadata:
  materia: "fisica"
  tema: "reflexion_espejos_curvos"
  nivel: "avanzado"
  tags: ["espejos_curvos", "ordenar"]

respuesta: ["Luz incidente", "Reflexión en la superficie curva", "Formación de la imagen"]
tipo: ordenar

enunciado: "Para entender cómo se forma una imagen en un espejo curvo, debemos seguir el camino de la luz. Ordena los siguientes eventos:"

pasos:
  - "La luz viaja hacia el espejo"
  - "Los rayos rebotan en el espejo"
  - "Los rayos convergen o divergen para crear la imagen"

opciones_explicitas: ["Luz incidente", "Reflexión en la superficie curva", "Formación de la imagen"]

explicacion: |
  El proceso óptico comienza con la incidencia de la luz, sigue con el fenómeno de la reflexión (segunda ley) y culmina con la percepción de la imagen.
```

### 5 — El efecto de la distancia en espejos cóncavos
```
metadata:
  materia: "fisica"
  tema: "espejos_curvos"
  nivel: "avanzado"
  tags: ["espejos_concavos", "distancia"]

variables:
  distancia_tipo: uno_de([0,1])
  casos: [["muy cerca (dentro del foco)", "aumentada"], ["muy lejos (fuera del foco)", "invertida"]]

respuesta: casos[distancia_tipo][1]
tipo: completar

enunciado: "En un espejo cóncavo, si el objeto se coloca ___ , la imagen resultante será ___."

pasos:
  - "Identificar la posición del objeto respecto al foco"
  - "Determinar si la imagen es real o virtual"

respuestas_validas: ["aumentada", "invertida"]

explicacion: |
  Si el objeto está entre el foco y el espejo, la imagen es virtual, derecha y aumentada. Si el objeto está más allá del foco, la imagen es real e invertida.
```