### 1 — El alcance de la App de Delivery
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["gestion_proyectos", "alcance"]

variables:
  escenario: uno_de([
    ["App de delivery de comida", "incluye la gestión de pedidos y pagos", "no incluye la preparación de los alimentos"],
    ["Sistema de gestión de biblioteca", "incluye el préstamo de libros", "no incluye la compra de nuevos ejemplares"],
    ["Software de turnos médicos", "incluye la reserva de citas", "no incluye la gestión de salarios del personal"]
  ])

enunciado: "Se está diseñando un proyecto para una {escenario[0]}. Según la definición de alcance establecida, el proyecto {escenario[1]} pero {escenario[2]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["incluye la gestión de pedidos y pagos", "incluye la preparación de los alimentos", "no incluye la gestión de pedidos y pagos", "no incluye la preparación de los alimentos"]

explicacion: |
  El alcance define los límites del proyecto. En este caso, la gestión de pedidos es parte del software (incluido), mientras que la preparación de la comida es una tarea operativa externa al software (no incluido).
```

### 2 — ¿Es un objetivo SMART?
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["objetivos", "smart"]

enunciado: "Un equipo de desarrollo establece el siguiente objetivo: 'Aumentar el número de usuarios activos en un 20% en los próximos 3 meses mediante una campaña de marketing'. ¿Este objetivo cumple con el criterio de ser 'Medible' (Measurable)?"

respuesta: verdadero
tipo: vf

explicacion: |
  Sí, es medible porque establece un porcentaje específico (20%) que permite verificar si se cumplió o no el objetivo al finalizar el periodo.
```

### 3 — Componentes de un objetivo
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "basico"
  tags: ["objetivos", "estructura"]

enunciado: "Para que un objetivo esté bien definido, debe responder a qué se quiere lograr y ___. El primer componente es el 'qué' y el segundo es el 'cuánto' o 'cuándo'."

respuesta_validas: ["cuándo", "en qué tiempo", "el plazo"]
respuesta: "cuándo"
tipo: completar

explicacion: |
  Un objetivo debe ser concreto. Decir "mejorar las ventas" es vago; decir "mejorar las ventas un 10% en diciembre" define el qué y el cuándo.
```

### 4 — Pasos para definir el alcance
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

enunciado: "Ordena los pasos lógicos para definir el alcance de un nuevo proyecto de software:"

opciones_explicitas: ["Identificar las necesidades del cliente", "Definir los límites (qué incluye y qué no)", "Validar el alcance con los stakeholders", "Crear el cronograma de trabajo"]
respuesta: ["Identificar las necesidades del cliente", "Definir los límites (qué incluye y qué no)", "Validar el alcance con los stakeholders", "Crear el cronograma de trabajo"]
tipo: ordenar

explicacion: |
  Primero se entiende la necesidad, luego se delimita el trabajo, se busca la aprobación de los interesados y finalmente se planifica el tiempo.
```

### 5 — El límite del proyecto
```
metadata:
  materia: "resolucion-problemas"
  tema: "definir_alcance_y_objetivos"
  nivel: "avanzado"
  tags: ["exclusiones", "riesgos"]

variables:
  caso: uno_de([
    ["desarrollar una web de e-commerce", "el soporte técnico post-venta", "el diseño de la marca"],
    ["crear un sistema de riego automático", "la instalación de los caños", "la compra de las plantas"],
    ["diseñar un mueble de oficina", "el transporte a domicilio", "la materia prima"]
  ])

enunciado: "Si el objetivo principal es {caso[0]}, definir que {caso[1]} queda fuera del proyecto es una acción de..."

respuesta: "definición de exclusiones"
tipo: mc
opciones_explicitas: ["definición de exclusiones", "definición de objetivos", "gestión de riesgos", "planificación de recursos"]

explicacion: |
  Definir qué NO incluye el proyecto (exclusiones) es fundamental para evitar el 'scope creep' o corrupción del alcance, que ocurre cuando el proyecto crece sin control.
```