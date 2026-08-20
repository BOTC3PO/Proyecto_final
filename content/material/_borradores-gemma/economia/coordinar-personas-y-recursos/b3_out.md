### 1 — El mito de la asignación perfecta
```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["gestion", "recursos", "eficiencia"]

respuesta: "ineficiencia"
tipo: mc
opciones_explicitas: ["eficiencia", "ineficiencia", "especializacion", "productividad"]

enunciado: "Cuando un gestor asigna a un trabajador altamente capacitado a una tarea que requiere habilidades mínimas, ignorando el costo de oportunidad de su talento, está provocando una ___ en la organización."

explicacion: |
  La asignación ineficiente de recursos humanos (especialmente el talento especializado) genera un costo de oportunidad elevado, reduciendo la productividad global del equipo.
```

### 2 — Coordinación vs. Control
```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "basico"
  tags: ["gestion", "procesos"]

respuesta: falso
tipo: vf

enunciado: "En la gestión de equipos, la coordinación se limita exclusivamente a la supervisión directa y el control de horarios de los empleados."

explicacion: |
  Falso. La coordinación implica también la sincronización de flujos de información, la alineación de objetivos y la gestión de la interdependencia entre tareas y recursos.
```

### 3 — Secuencia de organización de recursos
```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "avanzado"
  tags: ["planificacion", "logistica"]

variables:
  pasos_orden: [0, 1, 2]

respuesta: ["Identificar necesidades", "Asignar recursos", "Monitorear ejecución"]
tipo: ordenar
opciones_explicitas: ["Monitorear ejecución", "Identificar necesidades", "Asignar recursos"]

enunciado: "Para coordinar eficazmente un proyecto, se debe seguir un orden lógico de gestión de recursos. Ordene los siguientes pasos:"

pasos:
  - "Determinar qué materiales y personas se requieren para el objetivo."
  - "Distribuir los insumos y el personal a las tareas específicas."
  - "Verificar que el uso de los recursos coincida con lo planificado."

explicacion: |
  La planificación requiere primero el diagnóstico de necesidades, luego la distribución (asignación) y finalmente el control para corregir desviaciones.
```

### 4 — El dilema de la especialización
```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["especializacion", "costos"]

variables:
  escenario: uno_de([[10, "exceso"], [5, "escasez"]])

respuesta: "____"
tipo: completar
respuestas_validas: ["exceso", "escasez"]

enunciado: "Si una empresa asigna demasiados trabajadores a una misma tarea de modo que se estorben entre sí, se produce un ____ de recursos humanos."

explicacion: |
  El exceso de recursos en una tarea específica genera rendimientos marginales decrecientes y aumenta los costos de coordinación.
```

### 5 — El rol de la información en la coordinación
```
metadata:
  materia: "economia"
  tema: "coordinar_personas_y_recursos"
  nivel: "intermedio"
  tags: ["informacion", "asimetria"]

respuesta: 25.5
tipo: input
tolerancia_abs: 0.1

enunciado: "Un equipo de 10 personas debe completar 200 unidades. Si la capacidad actual es de 7 unidades por persona al día, pero la coordinación falla y la productividad cae un 20% por falta de comunicación, ¿cuántas unidades producirá el equipo en un día?"

pasos:
  - "Calcular la producción teórica: 10 personas * 7 unidades = 70 unidades."
  - "Aplicar la reducción por falta de coordinación: 70 * (1 - 0.20) = 56."
  - "Nota: El enunciado pide la producción final tras la caída."

explicacion: |
  La falta de coordinación actúa como una fricción que reduce la productividad real por debajo de la capacidad teórica de los recursos individuales.
```