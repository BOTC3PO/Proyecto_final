### 1 — Concepto de Organización
```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["definicion", "organizacion"]

respuesta: "coordinacion"
tipo: completar
respuestas_validas: ["coordinacion"]

enunciado: "El proceso de integrar las actividades de diversos departamentos y asegurar que se dirijan hacia el cumplimiento de los objetivos organizacionales se denomina ___."

explicacion: |
  La coordinación es el proceso de asegurar que las actividades de los distintos miembros de una organización se realicen de manera armoniosa para alcanzar los objetivos comunes.
```

### 2 — Recursos de una Organización
```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["recursos", "factores_produccion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["capital", "recursos financieros y maquinaria"],
    ["humanos", "conocimientos y habilidades de las personas"]
  ]

respuesta: uno_de(["capital", "humanos"])
tipo: mc
opciones_explicitas: ["capital", "humanos", "tecnología", "materias primas"]

enunciado: "En el contexto de la coordinación de recursos, el factor representado por {datos[escenario_idx][0]} se refiere a {datos[escenario_idx][1]}."

explicacion: |
  Las organizaciones deben coordinar diversos recursos. El tipo seleccionado en este ejercicio es {datos[escenario_idx][0]}.
```

### 3 — División del Trabajo
```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["division_trabajo", "eficiencia"]

respuesta: verdadero
tipo: vf

enunciado: "La división del trabajo consiste en descomponer una tarea compleja en tareas más pequeñas y especializadas para aumentar la eficiencia."

explicacion: |
  Efectivamente, la especialización mediante la división del trabajo es una herramienta fundamental para optimizar la productividad en la coordinación de equipos.
```

### 4 — Jerarquía de la Organización
```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["estructura", "jerarquia"]

respuesta: ["Planificación", "Organización", "Dirección", "Control"]
tipo: ordenar
opciones_explicitas: ["Planificación", "Organización", "Dirección", "Control"]

enunciado: "Ordene las cuatro funciones administrativas del proceso de gestión en el orden lógico de su ciclo de ejecución:"

explicacion: |
  El proceso administrativo clásico sigue la secuencia: primero se establece lo que se quiere hacer (Planificación), luego se asignan recursos (Organización), se guía a las personas (Dirección) y finalmente se verifica el cumplimiento (Control).
```

### 5 — Coordinación vs. Control
```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["control", "supervision"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["se detecta una desviación en la producción", "corregir la desviación"],
    ["se comparan los resultados con los objetivos", "verificar el desempeño"]
  ]

respuesta: uno_de(["corregir la desviación", "verificar el desempeño"])
tipo: mc
opciones_explicitas: ["corregir la desviación", "verificar el desempeño", "asignar tareas", "contratar personal"]

enunciado: "Si en una empresa {casos[caso_idx][0]}, la acción inmediata que corresponde a la función de control es {casos[caso_idx][1]}."

explicacion: |
  El control implica comparar el desempeño real con los estándares planeados y, si hay diferencias, tomar medidas para corregirlas.
```