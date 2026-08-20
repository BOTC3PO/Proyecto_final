### 1 — Desviación en el cronograma
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["cronograma", "desviacion", "control"]

variables:
  desviacion_planificada: 5
  desviacion_real: 8

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "En un proyecto de software, la tarea 'Desarrollo de API' tenía una duración planificada de {desviacion_planificada} días. Sin embargo, tras el control de seguimiento, se observa que la tarea ha tomado {desviacion_real} días. ¿Cuántos días de desviación (retraso) presenta la tarea respecto a lo planificado?"

pasos:
  - "Identificar la duración planificada."
  - "Identificar la duración real ejecutada."
  - "Calcular la diferencia: Real - Planificada."

explicacion: |
  El control de seguimiento permite identificar la desviación temporal. En este caso: 8 - 5 = 3 días de retraso.
```

### 2 — Acción correctiva inmediata
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["gestion", "acciones", "correctivas"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El presupuesto se ha excedido un 15% debido a costos imprevistos.", "reajustar_presupuesto"],
    ["El equipo técnico no está alcanzando los hitos semanales de entrega.", "reforzar_equipo"]
  ]

opciones_explicitas: ["reajustar_presupuesto", "reforzar_equipo", "ignorar_desviacion", "esperar_al_final"]

respuesta: escenarios[escenario_idx][1]
tipo: mc

enunciado: "Se realiza un control de seguimiento y se detecta el siguiente problema: {escenarios[escenario_idx][0]}. ¿Cuál es la acción correctiva más adecuada para mantener el control del proyecto?"

explicacion: |
  El seguimiento detecta el problema y el control debe aplicar la acción correctiva específica para la desviación encontrada.
```

### 3 — Veracidad del monitoreo
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "basico"
  tags: ["conceptos", "monitoreo"]

respuesta: falso
tipo: vf

enunciado: "Si el proceso de seguimiento y control se realiza únicamente al finalizar todas las fases del proyecto, se garantiza la capacidad de corregir desviaciones a tiempo."

explicacion: |
  Falso. El control debe ser continuo o periódico durante la ejecución para permitir acciones correctivas oportunas. Si se hace solo al final, la desviación ya es un fracaso del proyecto.
```

### 4 — Secuencia de control de gestión
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "intermedio"
  tags: ["procesos", "ciclo_control"]

opciones_explicitas: ["Establecer estándares", "Medir el desempeño real", "Comparar con el plan", "Tomar acciones correctivas"]

respuesta: ["Establecer estándares", "Medir el desempeño real", "Comparar con el plan", "Tomar acciones correctivas"]
tipo: ordenar

enunciado: "Ordene los pasos lógicos para ejecutar un ciclo de control de proyecto efectivo:"

explicacion: |
  El ciclo de control comienza con la definición de la línea base (estándares), sigue con la medición, la comparación para hallar desviaciones y finalmente la acción para corregir.
```

### 5 — Análisis de Variación de Costo (CV)
```
metadata:
  materia: "resolucion-problemas"
  tema: "seguimiento_y_control"
  nivel: "avanzado"
  tags: ["evm", "costos", "variacion"]

variables:
  valor_ganado: 1200
  valor_planificado: 1500

respuestas_validas: ["negativo"]

respuesta: "negativo"
tipo: completar

enunciado: "En la gestión del valor ganado, si el Valor Ganado (EV) es de ${valor_ganado} y el Valor Planificado (PV) es de ${valor_planificado}, la variación de costo (CV = EV - PV) es _________."

explicacion: |
  Como EV < PV, la variación es de -300, lo cual es un valor negativo, indicando que el proyecto está por encima del presupuesto (sobrecosto).
```