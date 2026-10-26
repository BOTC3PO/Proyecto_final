### 1 — Concepto de Definición del Problema
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

tipo: mc
opciones_explicitas: ["El síntoma o la consecuencia de un error", "La causa raíz que genera una desviación", "La solución propuesta para un conflicto", "La descripción de un estado ideal"]

enunciado: "En el proceso de resolución de problemas, identificar el problema real implica distinguir entre el síntoma (la manifestación visible) y la ___."

respuesta: "La causa raíz que genera una desviación"

explicacion: |
  Un error común es intentar resolver el síntoma (ej. una fuga de agua) sin atacar la causa raíz (ej. una tubería corroída). Si no identificas la causa, el problema persistirá.
```

### 2 — Verdadero o Falso: El Enfoque en la Solución
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["metodologia", "errores"]

tipo: vf

enunciado: "Saltar directamente a proponer soluciones sin haber definido el problema con precisión es una práctica recomendada para ahorrar tiempo en la resolución de conflictos."

respuesta: falso

explicacion: |
  Saltar a la solución sin entender el problema suele llevar a soluciones ineficaces o que incluso agravan la situación original.
```

### 3 — Identificación de la Brecha
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["brecha", "estado_actual"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El estado actual es un proceso manual lento", "El estado deseado es un proceso automatizado rápido"],
    ["La temperatura actual es de 20°C", "La temperatura requerida es de 50°C"]
  ]

tipo: completar
respuestas_validas: ["brecha"]

enunciado: "Definir un problema implica identificar la ___ entre el estado actual y el estado deseado."

respuesta: "brecha"

explicacion: |
  El problema se define técnicamente como la diferencia o 'brecha' entre la situación presente y la situación objetivo.
```

### 4 — Fases de la Detección
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "intermedio"
  tags: ["proceso", "orden"]

tipo: ordenar
opciones_explicitas: ["Observar el síntoma", "Analizar las causas posibles", "Definir el problema central", "Validar la definición con los involucrados"]

respuesta: ["Observar el síntoma", "Analizar las causas posibles", "Definir el problema central", "Validar la definición con los involucrados"]

enunciado: "Ordena las etapas lógicas para una detección efectiva del problema:"

explicacion: |
  Primero se nota que algo anda mal (síntoma), luego se investiga por qué ocurre (análisis), se establece la definición clara y finalmente se confirma con quienes viven el problema.
```

### 5 — El Problema vs. La Solución
```
metadata:
  materia: "resolucion-problemas"
  tema: "detectar_el_problema"
  nivel: "basico"
  tags: ["vocabulario"]

tipo: mc
opciones_explicitas: ["Problema", "Hipótesis", "Solución", "Obstáculo"]

enunciado: "Cuando una persona dice 'Necesitamos comprar un software nuevo para mejorar la comunicación', está planteando una ___ en lugar de un ___."

respuesta: "Solución"

explicacion: |
  Confundir la solución con el problema es un error clásico. El problema es 'la mala comunicación'; el software es solo una posible solución para ese problema.
```