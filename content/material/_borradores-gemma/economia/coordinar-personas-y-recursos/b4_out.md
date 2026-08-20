### 1 — Coordinación vs. División del Trabajo
```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "basico"
  tags: ["coordinacion", "division_trabajo"]

respuesta: "coordinacion"
tipo: "completar"
respuestas_validas: ["coordinacion"]

enunciado: "Mientras que la división del trabajo se encarga de fragmentar una tarea compleja en actividades simples, la ___ es el proceso de asegurar que estas tareas fragmentadas se integren de manera coherente para alcanzar el objetivo común."

explicacion: |
  La división del trabajo aumenta la eficiencia mediante la especialización, pero genera la necesidad de la coordinación para evitar que los esfuerzos individuales se desvíen o choquen entre sí.
```

### 2 — El rol del Administrador
```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "intermedio"
  tags: ["administracion", "recursos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["un equipo de producción de automóviles", "gestionar la cadena de suministros"],
    ["una clínica médica", "coordinar turnos de especialistas"]
  ]

respuesta: uno_de(["gestionar la cadena de suministros", "coordinar turnos de especialistas"])
tipo: "mc"
opciones_explicitas: ["gestionar la cadena de suministros", "coordinar turnos de especialistas", "eliminar la necesidad de supervisión", "maximizar la autonomía individual sin control"]

enunciado: "En el escenario de {escenarios[escenario_idx][0]}, la función principal de la coordinación de recursos es {escenarios[escenario_idx][1]}."

explicacion: |
  La coordinación busca sincronizar los recursos (humanos o materiales) con la demanda o el flujo de trabajo para evitar cuellos de botella.
```

### 3 — Eficiencia vs. Eficacia en la Coordinación
```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "intermedio"
  tags: ["eficiencia", "eficacia"]

respuesta: verdadero

tipo: "vf"

enunciado: "Si un equipo logra alcanzar la meta de producción establecida (eficacia) pero utiliza el doble de la materia prima presupuestada debido a una mala organización de los recursos, se ha fallado en la eficiencia de la coordinación."

explicacion: |
  La eficacia se refiere al cumplimiento del objetivo, mientras que la eficiencia se refiere al uso óptimo de los recursos para alcanzar dicho objetivo.
```

### 4 — Fases de la Organización de un Equipo
```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "avanzado"
  tags: ["procesos", "organizacion"]

respuesta: ["identificar tareas", "asignar responsabilidades", "establecer mecanismos de control"]
tipo: "ordenar"
opciones_explicitas: ["identificar tareas", "asignar responsabilidades", "establecer mecanismos de control"]

enunciado: "Para coordinar eficazmente un equipo de trabajo, un gestor debe seguir este orden lógico de organización de recursos:"

explicacion: |
  Primero se descompone el trabajo (identificación), luego se distribuyen los roles (asignación) y finalmente se verifica el cumplimiento (control).
```

### 5 — Centralización vs. Descentralización
```
metadata:
  materia: "economia"
  tema: "coordinacion_recursos_humanos"
  nivel: "intermedio"
  tags: ["estructura", "decision"]

variables:
  tipo_estructura: uno_de(["centralizada", "descentralizada"])

respuesta: tipo_estructura
tipo: "mc"
opciones_explicitas: ["centralizada", "descentralizada"]

enunciado: "En una estructura organizacional {tipo_estructura}, la coordinación se logra mediante la jerarquía y la toma de decisiones concentrada en la parte superior, a diferencia de la estructura opuesta."

explicacion: |
  La centralización busca uniformidad y control estricto, mientras que la descentralización busca agilidad y empoderamiento en los niveles operativos.
```