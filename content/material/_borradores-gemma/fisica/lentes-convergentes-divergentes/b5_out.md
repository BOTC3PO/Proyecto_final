### 1 — Lentes en la visión
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["optica", "salud", "lentes"]

variables:
  escenario: uno_de([["un paciente con miopía", "divergente"], ["un paciente con hipermetropía", "convergente"]])
  idx: uno_de([0, 1])

enunciado: "Para corregir la visión de {escenario[0]}, se requiere el uso de una lente de tipo {escenario[1]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

explicacion: |
  La miopía ocurre cuando la imagen se forma antes de la retina; una lente divergente ayuda a alejar el punto focal hacia la retina.
```

### 2 — El efecto de la luz
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["luz", "refraccion"]

respuesta: "convergen"
tipo: completar
respuestas_validas: ["convergen", "divergen"]

enunciado: "Cuando los rayos de luz paralelos atraviesan una lente convergente, estos ___ en un punto llamado foco."

explicacion: |
  Las lentes convergentes (o convexas) hacen que los rayos de luz se junten en un punto focal.
```

### 3 — Distancia focal y enfoque
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "avanzado"
  tags: ["calculo", "foco"]

variables:
  caso: uno_de([[10, 20], [15, 30], [20, 40]])
  focal: caso[1]

enunciado: "Si un objeto se coloca a una distancia de {caso[0]} cm de una lente convergente y la distancia focal es de {focal} cm, la imagen se formará en una posición que es ___ a la distancia del objeto."

respuesta: falso
tipo: vf

explicacion: |
  Si el objeto está entre el foco y la lente (distancia objeto < f), la imagen es virtual, derecha y aumenta su tamaño, pero la posición depende de la ecuación de Gauss. En este caso, la imagen es virtual.
```

### 4 — Construcción de la imagen
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "intermedio"
  tags: ["proceso", "optica"]

respuesta: ["Luz incidente", "Refracción en la lente", "Formación de la imagen"]
tipo: ordenar

opciones_explicitas: ["Luz incidente", "Refracción en la lente", "Formación de la imagen"]

enunciado: "Ordena el proceso físico que ocurre cuando un rayo de luz atraviesa una lente para formar una imagen:"

explicacion: |
  Primero llega la luz, luego cambia de dirección al entrar/salir de la lente (refracción) y finalmente se proyecta la imagen.
```

### 5 — Característica de la lente
```
metadata:
  materia: "fisica"
  tema: "lentes_convergentes_divergentes"
  nivel: "basico"
  tags: ["geometria", "lentes"]

variables:
  tipo_lente: uno_de(["convergente", "divergente"])
  forma: uno_de(["más gruesa en el centro", "más delgada en el centro"])

enunciado: "Una lente es de tipo {tipo_lente} si es {forma}."

respuesta: tipo_lente
tipo: mc
opciones_explicitas: ["convergente", "divergente"]

explicacion: |
  Las lentes convergentes son más gruesas en el centro (convexas), mientras que las divergentes son más delgadas en el centro (cóncavas).
```