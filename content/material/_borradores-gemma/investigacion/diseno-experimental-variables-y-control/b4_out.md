### 1 — Variable Independiente vs. Dependiente
```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables"
  nivel: "basico"
  tags: ["variables", "metodologia"]

respuesta: "dependiente"
tipo: completar
respuestas_validas: ["dependiente"]

enunciado: "En un experimento, la variable que el investigador manipula para observar sus efectos se denomina variable independiente, mientras que la variable que se mide para ver el efecto de dicha manipulación es la variable ___."

explicacion: |
  La variable independiente es la causa (lo que manipulas) y la variable dependiente es el efecto (lo que mides).
```

### 2 — El propósito del Grupo de Control
```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_control"
  nivel: "intermedio"
  tags: ["control", "grupos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un fármaco nuevo", "un placebo"], ["un nuevo fertilizante", "un fertilizante estándar"]]
  objetivo: "comparar el efecto del {dado} contra un grupo de control para aislar la causa del cambio observado."
  dado: uno_de([0, 1])[escenarios]

respuesta: "mc"
tipo: "mc"
opciones_explicitas: ["Observar el comportamiento natural sin intervención", "Asegurar que los cambios se deban a la variable independiente y no a factores externos", "Aumentar el tamaño de la muestra para mayor validez", "Eliminar la necesidad de una variable dependiente"]

enunciado: "En un experimento que utiliza {dado}, el grupo de control es fundamental porque su función principal es {objetivo}"

explicacion: |
  El grupo de control actúa como línea base. Sin él, no sabríamos si el cambio en la variable dependiente se debió a la manipulación o a factores ambientales/externos.
```

### 3 — Control de Variables Extrañas
```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_control"
  nivel: "intermedio"
  tags: ["variables_extrañas", "validez"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que controlar las variables extrañas (o de confusión) reduce la validez interna de un experimento al limitar la observación de fenómenos naturales?"

explicacion: |
  Falso. Al contrario, controlar las variables extrañas aumenta la validez interna, ya que permite asegurar que la relación observada entre la variable independiente y la dependiente sea real y no producto de una tercera variable no controlada.
```

### 4 — Diferencia entre Variable de Control y Variable Independiente
```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_variables"
  nivel: "avanzado"
  tags: ["distincion", "metodologia"]

respuesta: "mc"
tipo: "mc"
opciones_explicitas: ["La variable de control se mantiene constante para evitar sesgos, mientras que la independiente se varía deliberadamente.", "La variable de control es el efecto y la independiente es la causa.", "La variable de control es la que se mide y la independiente es la que se ignora.", "No hay diferencia, son sinónimos en el diseño experimental."]

enunciado: "¿Cuál es la distinción fundamental entre una variable de control y una variable independiente en un diseño experimental?"

explicacion: |
  La variable independiente es la que el investigador cambia para ver qué sucede. Las variables de control son aquellas que se mantienen constantes para que no interfieran en la relación entre la independiente y la dependiente.
```

### 5 — Secuencia de Implementación Experimental
```
metadata:
  materia: "investigacion"
  tema: "diseno_experimental_pasos"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

respuesta: ["Identificar variables", "Asignar grupos", "Manipular la independiente", "Medir la dependiente"]
tipo: "ordenar"
opciones_explicitas: ["Identificar variables", "Asignar grupos", "Manipular la independiente", "Medir la dependiente"]

enunciado: "Para garantizar un diseño experimental riguroso, ¿cuál es el orden lógico de las fases de ejecución?"

explicacion: |
  Primero se definen qué se va a medir y manipular (identificar), luego se dividen los sujetos (asignar), se aplica el tratamiento (manipular) y finalmente se recolectan los datos (medir).
```