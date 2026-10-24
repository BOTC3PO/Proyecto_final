### 1 — Características de una hipótesis
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["metodologia", "hipotesis"]

tipo: mc
opciones_explicitas: ["Es vaga y difícil de medir", "Es específica y comprobable", "Es una opinión personal sin sustento", "Es una verdad absoluta e incuestionable"]

enunciado: "Una hipótesis científica se considera 'buena' cuando su estructura permite que sea ___ y ___."

explicacion: |
  Para que una hipótesis sea válida en el método científico, debe ser específica (delimitar qué se va a observar) y comprobable (permitir la experimentación para aceptar o rechazar la proposición).
```

### 2 — El concepto de falsabilidad
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["falsabilidad", "metodologia"]

tipo: vf

enunciado: "Si una hipótesis está formulada de tal manera que no existe ningún experimento posible para demostrar que es falsa, entonces se dice que la hipótesis es falsable."

respuesta: falso

explicacion: |
  Es una contradicción. Para que una hipótesis sea científica, debe ser falsable; es decir, debe ser posible imaginar un experimento o una observación que pueda contradecirla. Si no puede ser refutada, no es científica.
```

### 3 — Identificación de hipótesis malas
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["hipotesis_mala", "vaguedad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["La temperatura afecta el crecimiento de las plantas.", "La temperatura influye en el crecimiento de las plantas de tomate bajo luz roja."],
    ["El clima es malo hoy.", "El clima influye en el estado de ánimo de las personas."]
  ]

tipo: mc
opciones_explicitas: ["Es demasiado específica", "Es vaga o ambigua", "Es una ley universal", "Es una variable dependiente"]

enunciado: "Analiza el siguiente enunciado: '{escenarios[escenario_idx][0]}'. Esta hipótesis se considera 'mala' porque es ___."

explicacion: |
  Una hipótesis vaga (como la del primer escenario) no define qué tipo de temperatura, qué tipo de planta o cómo se mide el crecimiento, lo que impide una prueba experimental rigurosa.
```

### 4 — Componentes de la hipótesis
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "intermedio"
  tags: ["variables", "estructura"]

tipo: completar
opciones_explicitas: ["variable", "causa", "efecto"]
respuestas_validas: ["variable", "causa", "efecto"]

enunciado: "En una hipótesis bien formulada, se debe establecer la relación entre una ___ independiente y una ___ dependiente."

respuesta: "variable"

explicacion: |
  La estructura básica de una hipótesis científica busca relacionar cómo el cambio en una variable (independiente) afecta a otra (dependiente).
```

### 5 — Secuencia del proceso de validación
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_buena_o_mala"
  nivel: "basico"
  tags: ["proceso", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Observación del fenómeno", "Formulación de la hipótesis", "Diseño de la experimentación", "Análisis de resultados"]

enunciado: "Ordena los pasos lógicos para validar una hipótesis científica:"

explicacion: |
  El proceso científico sigue un orden lógico: primero se observa un fenómeno, luego se propone una explicación provisional (hipótesis), se diseña un experimento para probarla y finalmente se analizan los datos obtenidos.
```