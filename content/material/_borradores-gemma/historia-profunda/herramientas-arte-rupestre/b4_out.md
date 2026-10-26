### 1 — El salto cognitivo del arte
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["cognicion", "simbolismo", "hominidos"]

variables:
  escenario: uno_de([
    ["pintura de manos en negativo", "capacidad de representación simbólica"],
    ["herramientas de piedra tallada", "planificación técnica avanzada"],
    ["adornos con conchas marinas", "pensamiento abstracto y estético"]
  ])

respuesta: escenario[2][1]
tipo: mc
opciones_explicitas: ["capacidad de representación simbólica", "planificación técnica avanzada", "pensamiento abstracto y estético"]

enunciado: "La presencia de {escenario[0]} en cuevas prehistóricas es una evidencia fundamental de la {escenario[2][1]} del Homo sapiens."

explicacion: |
  El uso de pigmentos para dejar la huella de la mano indica que el individuo no solo interactuaba con el entorno, sino que proyectaba su identidad, un signo claro de pensamiento simbólico.
```

### 2 — Tecnología y evolución
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["tecnologia", "evolucion"]

respuesta: "Homo sapiens"
tipo: completar
respuestas_validas: ["Homo sapiens", "Homo sapiens sapiens"]

enunciado: "A diferencia de otros homínidos, el ___ desarrolló una capacidad de abstracción que le permitió crear herramientas complejas y arte rupestre."

explicacion: |
  Aunque otros homínidos usaron herramientas, la combinación de arte complejo y tecnología diversificada es característica del Homo sapiens.
```

### 3 — La secuencia de la creación pictórica
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["proceso", "arte_rupestre"]

opciones_explicitas: ["Preparación del soporte", "Preparación de pigmentos", "Aplicación del color", "Grabado de contornos"]

respuesta: ["Preparación del soporte", "Preparación de pigmentos", "Grabado de contornos", "Aplicación del color"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que un artista del Paleolítico Superior seguiría para realizar una pintura de gran formato en una pared de la cueva:"

explicacion: |
  Primero se debe elegir y limpiar la pared, luego fabricar la pintura con minerales, trazar la figura y finalmente aplicar el pigmento.
```

### 4 — El valor de la herramienta compleja
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["cognicion", "herramientas"]

variables:
  caso: uno_de([
    ["un bifaz perfectamente simétrico", "estética y precisión"],
    ["un propulsor de lanza", "ingeniería y cálculo de trayectoria"],
    ["un raspador de hueso", "especialización funcional"]
  ])

respuesta: caso[0][1]
tipo: mc
opciones_explicitas: ["estética y precisión", "ingeniería y cálculo de trayectoria", "especialización funcional"]

enunciado: "La fabricación de {caso[0]} sugiere que el homínido no solo buscaba utilidad, sino también {caso[0][1]}."

explicacion: |
  La simetría en herramientas de piedra que no es estrictamente necesaria para el corte indica una búsqueda de orden y belleza, propia de la mente moderna.
```

### 5 — Simbolismo y supervivencia
```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["simbolismo", "evolucion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que el arte rupestre representa un salto cualitativo en la cognición debido a su naturaleza no utilitaria inmediata?"

explicacion: |
  Correcto. El arte no tiene una función de supervivencia directa (como buscar comida), sino que cumple funciones sociales, rituales o de comunicación.
```