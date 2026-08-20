### 1 — El origen de la industria lítica
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["tecnologia", "piedra"]

respuesta: "Olduvayense"
tipo: completar
respuestas_validas: ["Olduvayense"]

enunciado: "La industria lítica más antigua conocida, caracterizada por el uso de percutores para obtener filos rudimentarios, se denomina industria ___."

explicacion: |
  La industria Olduvayense (o Oldowaense) representa las primeras formas de tecnología lítica, donde los homínidos golpeaban una piedra contra otra para crear bordes cortantes.
```

### 2 — Funcionalidad de las herramientas
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["uso", "herramientas"]

opciones_explicitas: ["Cazar grandes mamíferos", "Procesar carne y pieles", "Recolectar frutos y raíces", "Fabricar ropa"]
respuesta: "Procesar carne y pieles"
tipo: mc

enunciado: "Aunque las herramientas de piedra tenían múltiples usos, una de las funciones principales de los filos de las lascas en el Paleolítico era ___."

explicacion: |
  Las lascas de piedra proporcionaban bordes extremadamente afilados, ideales para el desollado de animales y el corte de tejidos orgánicos.
```

### 3 — Evolución tecnológica
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["evolucion", "tecnologia"]

variables:
  escenario: uno_de([
    ["Olduvayense", "Choppers"],
    ["Acheulense", "Bifaces"],
    ["Musteriense", "Láminas"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Choppers", "Bifaces", "Láminas"]

enunciado: "En la cultura Acheulense, la herramienta característica que presenta una forma simétrica y ha sido trabajada por ambas caras se conoce como ___."

explicacion: |
  El bifaz es la herramienta emblemática del Paleolítico inferior, mostrando una planificación cognitiva superior al simple percutaje de lascas.
```

### 4 — Secuencia de fabricación
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "avanzado"
  tags: ["proceso", "fabricacion"]

opciones_explicitas: ["Selección de materia prima", "Percutaje/Talla", "Afilado/Retoque final"]
respuesta: ["Selección de materia prima", "Percutaje/Talla", "Afilado/Retoque final"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que un homínido debía seguir para fabricar una herramienta de piedra tallada:"

explicacion: |
  La fabricación lítica requiere primero identificar la piedra adecuada (sílex, cuarcita), luego darle forma mediante golpes y finalmente refinar el filo.
```

### 5 — El impacto del filo
```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["impacto", "alimentacion"]

respuesta: 10
tipo: input
tolerancia_abs: 0.1

enunciado: "Si un grupo de homínidos utilizaba una técnica de percutaje que permitía obtener un 10% más de filo útil por cada kilogramo de piedra, y tenían 50kg de sílex, ¿cuántos kg de material efectivo de corte obtendrían en total?"

pasos:
  - "Calcular el 10% de 50kg"
  - "Sumar el material base y el excedente de filo"

explicacion: |
  El cálculo es: 50 + (50 * 0.10) = 55. Sin embargo, la pregunta pide el material efectivo de corte basado en la eficiencia añadida (50 * 1.1 = 55). Nota: El usuario debe calcular el valor total resultante.
```