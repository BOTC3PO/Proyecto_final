### 1 — Concepto de Asignación de Recursos
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["conceptos", "gestion_proyectos"]

respuesta: "asignación de recursos"
tipo: completar
respuestas_validas: ["asignación de recursos", "asignación de recursos"]

enunciado: "El proceso de distribuir el tiempo, el dinero, el personal y los materiales necesarios para completar las tareas de un proyecto se denomina ___."

explicacion: |
  La asignación de recursos es la base de la planificación, asegurando que cada tarea tenga lo necesario para ejecutarse sin sobrecargar el presupuesto o al equipo.
```

### 2 — Clasificación de Recursos
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "basico"
  tags: ["clasificacion", "recursos_humanos"]

variables:
  es_recurso_humano: uno_de([verdadero, falso])

respuesta: es_recurso_humano
tipo: vf

enunciado: "Si un proyecto requiere la contratación de un consultor externo para una tarea específica, este se clasifica como un recurso humano. ¿Es esto verdadero o falso? (Escenario: {es_recurso_humano})"

explicacion: |
  Los recursos humanos incluyen tanto al personal interno como a consultores o subcontratistas que aportan su trabajo al proyecto.
```

### 3 — Restricciones de Recursos
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["restricciones", "presupuesto"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[1000, "presupuesto"], [5, "personal"]]
  escenario_texto: uno_de(["El límite de dinero es de $1000", "El límite de personas es de 5"])
  escenario_tipo: uno_de(["dinero", "personas"])

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["dinero", "personas", "tiempo", "materiales"]

enunciado: "En un proyecto, cuando no se puede asignar más capital debido a un límite establecido, estamos ante una restricción de {escenario_texto}."

explicacion: |
  Las restricciones son límites impuestos (de tiempo, dinero, capacidad o materiales) que condicionan la planificación del proyecto.
```

### 4 — Ciclo de Gestión de Recursos
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

respuesta: ["Identificar", "Planificar", "Asignar", "Monitorear"]
tipo: ordenar
opciones_explicitas: ["Identificar", "Planificar", "Asignar", "Monitorear", "Ejecutar"]

enunciado: "Ordene las fases lógicas para una gestión de recursos efectiva en un proyecto:"

explicacion: |
  Primero se deben identificar los recursos necesarios, luego planificar su uso, asignar las cantidades y finalmente monitorear que se cumplan los límites.
```

### 5 — Sobreasignación de Recursos
```
metadata:
  materia: "resolucion-problemas"
  tema: "asignacion_de_recursos"
  nivel: "avanzado"
  tags: ["riesgos", "sobreasignacion"]

variables:
  es_sobreasignado: uno_de([verdadero, falso])

respuesta: es_sobreasignado
tipo: vf

enunciado: "La sobreasignación ocurre cuando un recurso (persona o máquina) tiene asignadas más horas de trabajo de las que puede cumplir en un periodo determinado. ¿Es esto verdadero o falso? (Estado: {es_sobreasignado})"

explicacion: |
  La sobreasignación es un error común en la planificación que puede llevar al agotamiento del equipo (burnout) o al retraso de las tareas.
```