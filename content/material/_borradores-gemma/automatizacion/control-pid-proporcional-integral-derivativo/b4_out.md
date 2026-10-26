### 1 — Función del término Proporcional
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_proporcional"
  nivel: "basico"
  tags: ["pid", "proporcional", "control"]

respuesta: "error_actual"
tipo: completar
respuestas_validas: ["error_actual", "error_pasado", "error_futuro"]

enunciado: "En un controlador PID, el término proporcional actúa basándose principalmente en el {error_actual}."

explicacion: |
  El término proporcional (P) genera una acción de control que es directamente proporcional a la magnitud del error presente en el instante actual.
```

### 2 — Diferencia entre Integral y Proporcional
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_integral"
  nivel: "intermedio"
  tags: ["pid", "integral", "error_offset"]

variables:
  es_integral_mejor: verdadero

respuesta: es_integral_mejor
tipo: vf

enunciado: "A diferencia del término proporcional, el término integral tiene la capacidad de eliminar el error de estado estacionario (offset) en el sistema."

explicacion: |
  El término integral suma los errores pasados, lo que permite que incluso un error pequeño acumulado genere una acción de control suficiente para llevar el error a cero.
```

### 3 — El rol del término Derivativo
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_derivativo"
  nivel: "intermedio"
  tags: ["pid", "derivativo", "prediccion"]

respuesta: "prediccion"
tipo: mc
opciones_explicitas: ["reaccion", "prediccion", "acumulacion"]

enunciado: "Mientras que el término Proporcional reacciona al error presente, el término Derivativo se distingue porque actúa como un elemento de ___ al evaluar la velocidad de cambio del error."

explicacion: |
  El término derivativo (D) analiza la pendiente (derivada) del error, permitiendo anticipar la tendencia del sistema y amortiguar la respuesta para evitar sobrepasos.
```

### 4 — Comportamiento ante cambios bruscos
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_comparacion"
  nivel: "avanzado"
  tags: ["pid", "estabilidad", "transitorio"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Aumento brusco de la carga", "el_derivativo_suaviza"],
    ["Error constante pequeño", "el_integral_corrige"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["el_derivativo_suaviza", "el_integral_corrige", "el_proporcional_estabiliza"]

enunciado: "Si el sistema experimenta un {escenarios[escenario_idx][0]}, la acción principal del término derivativo es que {escenarios[escenario_idx][1]}."

explicacion: |
  El término derivativo es sensible a la velocidad de cambio; ante un cambio brusco (alta derivada), reacciona rápidamente para contrarrestar la tendencia.
```

### 5 — Secuencia de acción temporal
```
metadata:
  materia: "automatizacion"
  tema: "control_pid_secuencia"
  nivel: "intermedio"
  tags: ["pid", "tiempo", "historia"]

respuesta: ["proporcional", "integral", "derivativo"]
tipo: ordenar
opciones_explicitas: ["proporcional", "integral", "derivativo"]

enunciado: "Ordene los términos del controlador PID según el horizonte temporal en el que se basan: desde el presente inmediato hasta la tendencia futura."

explicacion: |
  1. Proporcional: Mira el error actual (presente).
   2. Integral: Mira la suma de errores pasados (pasado).
   3. Derivativo: Mira la velocidad de cambio (futuro/tendencia).
```