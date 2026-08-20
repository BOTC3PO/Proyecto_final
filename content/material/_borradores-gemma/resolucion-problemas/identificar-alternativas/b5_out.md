### 1 — El dilema del transporte
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "basico"
  tags: ["decision", "alternativas"]

variables:
  escenarios: [["viajar en bus", "viajar en tren"], ["viajar en avión", "viajar en auto"]]
  idx: uno_de([0, 1])
  opcion_elegida: escenarios[idx][0]

respuesta: "viajar en tren"
tipo: mc
opciones_explicitas: ["viajar en bus", "viajar en tren", "quedarse en casa"]

enunciado: "Para ir de una ciudad a otra, tienes el factor tiempo y el factor costo. Si decides que el factor costo es la prioridad absoluta, podrías elegir {opcion_elegida} o podrías elegir una alternativa más rápida pero cara. ¿Cuál sería la otra alternativa lógica para optimizar el tiempo?"

explicacion: |
  En la resolución de problemas, identificar alternativas implica reconocer que si cambias la prioridad (de costo a tiempo), el camino elegido cambia.
```

### 2 — Gestión de proyectos
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "intermedio"
  tags: ["gestion", "estrategia"]

variables:
  casos: [["contratar más personal", "comprar maquinaria"], ["reducir el horario", "subcontratar"]]
  idx: uno_de([0, 1])
  problema: casos[idx][0]

respuesta: verdadero
tipo: vf

enunciado: "Ante un aumento inesperado en la demanda de producción, la empresa enfrenta el problema de: {problema}. ¿Es correcto afirmar que existen múltiples caminos para resolver este cuelloOTOP (como la subcontratación o la inversión en tecnología) en lugar de una única solución obligatoria?"

explicacion: |
  La flexibilidad estratégica permite que ante un mismo problema existan diversos caminos dependiendo de los recursos disponibles.
```

### 3 — El camino del estudiante
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "basico"
  tags: ["aprendizaje", "metodologia"]

variables:
  metodos: [["leer el libro", "ver un video", "hacer ejercicios"]]
  idx: uno_de([0, 1, 2])
  accion_actual: metodos[idx]

respuesta: ["leer el libro", "ver un video", "hacer ejercicios"]
tipo: ordenar

opciones_explicitas: ["leer el libro", "ver un video", "hacer ejercicios"]

enunciado: "Un estudiante decide estudiar para un examen. Actualmente ha decidido: {accion_actual}. Para asegurar un aprendizaje integral, debe organizar un plan que incluya la teoría, la práctica y el refuerzo visual. Ordena estas tres alternativas de estudio para crear un método completo:"

explicacion: |
  Identificar alternativas permite pasar de una acción aislada a un proceso estructurado de resolución de problemas.
```

### 4 — Optimización de rutas
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "intermedio"
  tags: ["logistica", "decision"]

variables:
  rutas: [["Ruta A (más corta)", "Ruta B (más rápida)"]]
  idx: uno_de([0, 1])
  ruta_actual: rutas[idx][0]

respuesta: "Ruta B (más rápida)"
tipo: completar
respuestas_validas: ["Ruta B (más rápida)"]

enunciado: "Un repartidor debe entregar un paquete. Si elige la {ruta_actual}, está optimizando la distancia. Si su objetivo cambia a optimizar el tiempo de entrega, la alternativa sería la ___."

explicacion: |
  Reconocer que el cambio de un objetivo (distancia vs tiempo) genera automáticamente una nueva lista de alternativas posibles.
```

### 5 — Presupuesto de emergencia
```
metadata:
  materia: "resolucion-problemas"
  tema: "identificar-alternativas"
  nivel: "avanzado"
  tags: ["finanzas", "decision"]

variables:
  opciones_financieras: [["pedir un préstamo", "usar ahorros", "vender un activo"]]
  idx: uno_de([0, 1, 2])
  situacion: opciones_financieras[idx][0]

respuesta: "usar ahorros"
tipo: mc
opciones_explicitas: ["pedir un préstamo", "usar ahorros", "vender un activo"]

enunciado: "Tienes una deuda urgente. Si decides que la prioridad es no generar intereses, tu primera opción sería: {situacion}. Si la prioridad es mantener liquidez inmediata, ¿cuál sería la alternativa más coherente?"

explicacion: |
  La identificación de alternativas depende directamente de la jerarquía de valores o prioridades que se le asigne al problema.
```