### 1 — El café que se enfría
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["calor", "entropia", "termodinamica"]

variables:
  escenario: uno_de([["una taza de café caliente en una habitación fría", "aumenta"], ["un cubo de hielo en un vaso de agua tibia", "aumenta"]])
  idx: uno_de([0, 1])

enunciado: "Si dejamos reposar {escenario[idx][0]}, la entropía total del sistema y su entorno tiende a {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: vf
```

### 2 — Dirección del flujo de calor
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["calor", "segunda_ley"]

enunciado: "De acuerdo con la segunda ley de la termodinámica, en un proceso espontáneo, el calor fluye de forma natural desde un cuerpo de mayor temperatura hacia uno de menor temperatura. ¿Es esto cierto?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc
```

### 3 — El desorden de las moléculas
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["orden", "desorden", "entropia"]

variables:
  estado: uno_de([["gas", "alta"], ["sólido", "baja"], ["líquido", "media"]])
  idx: uno_de([0, 1, 2])

enunciado: "Considerando la estructura molecular, un estado de la materia en forma de {estado[idx][0]} presenta una entropía de magnitud {estado[idx][1]}."

respuesta: estado[idx][1]
tipo: completar
respuestas_validas: ["alta", "baja", "media"]
```

### 4 — El ciclo de una máquina térmica
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "avanzado"
  tags: ["maquinas_termicas", "eficiencia"]

enunciado: "Para que una máquina térmica funcione de forma cíclica, debe transferir parte del calor de la fuente caliente a la fuente fría. Ordena los pasos de un ciclo de Carnot ideal:"

opciones_explicitas: ["Expansión isotérmica", "Expansión adiabática", "Compresión isotérmica", "Compresión adiabática"]
respuesta: ["Expansión isotérmica", "Expansión adiabática", "Compresión isotérmica", "Compresión adiabática"]
tipo: ordenar
```

### 5 — El destino del Universo
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["cosmologia", "entropia"]

enunciado: "Si la entropía de un sistema aislado siempre aumenta o permanece constante, ¿qué sucede con la entropía del universo según la segunda ley?"

opciones_explicitas: ["disminuye", "se mantiene constante", "aumenta"]
respuesta: "aumenta"
tipo: mc
```