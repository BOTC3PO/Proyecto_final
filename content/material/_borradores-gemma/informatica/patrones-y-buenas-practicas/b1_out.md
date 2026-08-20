### 1 — Concepto de Patrón de Diseño
```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "basico"
  tags: ["conceptos", "patrones"]

respuesta: "solucion"
tipo: "completar"
respuestas_validas: ["solucion", "soluciones"]

enunciado: "Un patrón de diseño es una ________ reutilizable que sirve para resolver un problema común dentro de un contexto de diseño de software."

explicacion: |
  Los patrones de diseño no son fragmentos de código, sino descripciones de soluciones a problemas recurrentes en el desarrollo de software.
```

### 2 — Clasificación de Patrones
```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "basico"
  tags: ["clasificacion", "categorias"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [
    ["Creacionales", "se enfocan en la creación de objetos."],
    ["Estructurales", "se enfocan en cómo se componen las clases y objetos."],
    ["De Comportamiento", "se enfocan en la comunicación entre objetos."]
  ]

respuesta: escenario[idx][1]
tipo: "mc"
opciones_explicitas: ["creacionales", "estructurales", "de comportamiento"]

enunciado: "Si un programador utiliza el patrón 'Singleton' para asegurar que una clase tenga una única instancia, está utilizando un patrón de tipo: {escenario[idx][0]}."

explicacion: |
  Los patrones se dividen en tres categorías principales según su propósito: Creacionales, Estructurales y de Comportamiento.
```

### 3 — Principios SOLID: Responsabilidad Única
```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "intermedio"
  tags: ["solid", "buenas_practicas"]

respuesta: verdadero
tipo: "vf"

enunciado: "El principio de Responsabilidad Única (SRP) establece que una clase debe tener una, y solo una, razón para cambiar."

explicacion: |
  Correcto. El SRP busca que cada módulo o clase sea responsable de una única parte de la funcionalidad, facilitando el mantenimiento y la testabilidad.
```

### 4 — Ciclo de Vida de un Patrón
```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "basico"
  tags: ["proceso", "desarrollo"]

respuesta: ["Identificar el problema", "Analizar la solución existente", "Implementar el patrón", "Refactorizar el código"]
tipo: "ordenar"
opciones_explicitas: ["Identificar el problema", "Analizar la solución existente", "Implementar el patrón", "Refactorizar el código"]

enunciado: "Ordena los pasos lógicos para la aplicación correcta de un patrón de diseño en un sistema existente:"

explicacion: |
  Primero se debe entender el problema, luego evaluar si un patrón conocido aplica, se implementa y finalmente se refactoriza para asegurar la calidad.
```

### 5 — El concepto de Reutilización
```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practices"
  nivel: "basico"
  tags: ["reutilizacion", "eficiencia"]

variables:
  idx: uno_de([0, 1])
  ejemplo: [
    ["reutilizar", "reutilizar"],
    ["copiar", "copiar"]
  ]

respuesta: ejemplo[idx][0]
tipo: "mc"
opciones_explicitas: ["reutilizar", "copiar"]

enunciado: "El objetivo principal de aplicar buenas prácticas y patrones es poder ________ la lógica de solución en diferentes partes del sistema sin duplicar código innecesariamente."

explicacion: |
  La reutilización es un pilar de la ingeniería de software que permite aumentar la productividad y reducir la probabilidad de errores.
```