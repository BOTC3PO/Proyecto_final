### 1 — El dilema de la asignación de tareas
```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "basico"
  tags: ["gestion", "equipo"]

enunciado: "Una empresa de desarrollo de software tiene dos programadores (A y B) y dos tareas (X e Y). El programador A es más eficiente en la tarea X, mientras que el programador B es más eficiente en la tarea Y. Para maximizar la productividad total, la asignación óptima es que el programador ___ realice la tarea ___."

pasos:
  - "Identificar la especialización de cada recurso."
  - "Asignar cada tarea al recurso con mayor ventaja comparativa."

opciones_explicitas: ["A, X", "A, Y", "B, X", "B, Y"]
respuesta: "A, X"
tipo: "mc"

explicacion: |
  La coordinación eficiente busca la especialización. Si asignamos a cada persona la tarea donde su productividad es mayor, la producción total del equipo será máxima.
```

### 2 — Costo de oportunidad en la gestión
```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "intermedio"
  tags: ["costo_oportunidad", "decision"]

variables:
  escenario: uno_de([["recurso_a", "recurso_b"], ["tiempo_dev", "tiempo_marketing"]])

enunciado: "Si una empresa decide utilizar todo su presupuesto disponible para contratar más personal de producción en lugar de invertir en publicidad, el costo de oportunidad es el ___ que se dejó de obtener."

respuestas_validas: ["beneficio de la publicidad", "incremento de ventas", "crecimiento de marca"]
respuesta: "beneficio de la publicidad"
tipo: "completar"

explicacion: |
  El costo de oportunidad no es solo el dinero gastado, sino el valor de la mejor alternativa sacrificada al tomar una decisión de asignación.
```

### 3 — Escalabilidad y coordinación
```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "intermedio"
  tags: ["rendimientos", "escala"]

enunciado: "Al duplicar la cantidad de trabajadores en una cocina pequeña sin aumentar el espacio físico ni el número de hornos, la producción total no se duplica, sino que aumenta de forma desproporcionada hacia abajo debido a la falta de coordinación y el exceso de gente en el mismo espacio. Este fenómeno se conoce como rendimientos decrecientes a escala."

respuesta: verdadero
tipo: "vf"

explicacion: |
  La coordinación de recursos físicos es tan importante como la de recursos humanos. Si los recursos físicos (capital) no crecen al mismo ritmo que el trabajo, la eficiencia cae.
```

### 4 — Proceso de producción de un mueble
```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "basico"
  tags: ["flujo_trabajo", "procesos"]

enunciado: "Para coordinar la producción de una silla de madera, se deben seguir los pasos lógicos de transformación de recursos. Ordena los siguientes pasos desde la adquisición de insumos hasta el producto final:"

opciones_explicitas: ["Compra de madera y clavos", "Corte y ensamblado de piezas", "Lijado y barnizado", "Control de calidad y empaque"]
respuesta: ["Compra de madera y clavos", "Corte y ensamblado de piezas", "Lijado y barnizado", "Control de calidad y empaque"]
tipo: "ordenar"

explicacion: |
  La coordinación de procesos requiere una secuencia lógica donde la salida de una etapa sea la entrada de la siguiente para evitar cuellos de botella.
```

### 5 — El impacto de la tecnología en la coordinación
```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos"
  nivel: "avanzado"
  tags: ["tecnologia", "productividad"]

variables:
  tecnologia: uno_de([["software_gestión", "maquinaria_automatica"]])

enunciado: "Una fábrica decide implementar {tecnologia} para coordinar mejor sus turnos de trabajo. Si esta implementación reduce el tiempo de inactividad de los trabajadores en un 15%, la productividad laboral total de la empresa ___."

respuestas_validas: ["aumentará", "disminuirá", "se mantendrá igual"]
respuesta: "aumentará"
tipo: "completar"

explicacion: |
  La tecnología actúa como un multiplicador de la coordinación. Al reducir los tiempos muertos (desperdicio de recursos), se produce más con la misma cantidad de insumos y horas hombre.
```