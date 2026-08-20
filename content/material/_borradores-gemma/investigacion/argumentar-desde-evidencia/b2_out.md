### 1 — Defensa de hipótesis por datos
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["evidencia", "argumentacion", "metodologia"]

variables:
  escenario: uno_de([
    ["El aumento de la temperatura global coincide con el incremento de CO2", "El aumento de la temperatura global es causado por el CO2"],
    ["El fármaco X reduce la presión arterial en el grupo de prueba", "El fármaco X es efectivo para tratar la hipertensión"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["La correlación no implica causalidad", escenario[1], "La muestra es demasiado pequeña", "Los datos son insuficientes"]

enunciado: "Ante la objeción de que los datos solo muestran una relación estadística, la defensa científica más sólida basada en la evidencia es: ___"

explicacion: |
  Para defender una conclusión, no basta con señalar la correlación; se debe argumentar que la evidencia respalda el mecanismo causal propuesto.
```

### 2 — Identificación de falacia por falta de evidencia
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "basico"
  tags: ["falacia", "evidencia", "logica"]

respuesta: falso
tipo: vf

enunciado: "Si un investigador afirma que 'una teoría es verdadera solo porque ha funcionado en experimentos previos, sin presentar los datos crudos de dichos experimentos', está utilizando una evidencia sólida para su defensa."

explicacion: |
  Afirmar que algo es cierto basándose solo en éxitos pasados sin mostrar los datos que sustentan esos éxitos es una apelación a la autoridad o una generalización apresurada, no una argumentación basada en evidencia científica.
```

### 3 — Estructura del argumento científico
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["estructura", "argumento", "evidencia"]

respuesta: ["Observación/Dato", "Inferencia/Análisis", "Conclusión"]
tipo: ordenar
opciones_explicitas: ["Inferencia/Análisis", "Conclusión", "Observación/Dato", "Hipótesis sin datos", "Opinión personal"]

enunciado: "Para construir un argumento científico robusto que responda a una objeción, se debe seguir este orden lógico de presentación de la evidencia:"

explicacion: |
  Un argumento científico debe partir de los hechos observados (datos), pasar por el análisis de esos datos (inferencia) y culminar en la conclusión que se defiende.
```

### 4 — Respuesta ante la objeción de variables extrañas
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "avanzado"
  tags: ["variables", "control", "evidencia"]

variables:
  caso: uno_de([
    ["Aumento de ventas de helados y aumento de ataques de tiburones", "El calor causa ambos"],
    ["Uso de fertilizante y crecimiento de plantas", "El fertilizante causa el crecimiento"]
  ])
  solucion: ["Controlar variables externas", "Ignorar la objeción", "Cambiar la conclusión", "Aceptar la correlación"]

respuesta: solucion[0]
tipo: mc
opciones_explicitas: ["Controlar variables externas", "Ignorar la objeción", "Cambiar la conclusión", "Aceptar la correlación"]

enunciado: "En el caso de {caso}, si un revisor objeta que existe una variable de confusión (como el clima), la defensa científica correcta para mantener la validez de la conclusión es: ___"

explicacion: |
  La defensa ante una variable de confusión consiste en demostrar, mediante el control de variables o análisis estadísticos adicionales, que el efecto observado persiste independientemente de la variable externa.
```

### 5 — Completar el proceso de refutación
```
metadata:
  materia: "investigacion"
  tema: "argumentar_desde_evidencia"
  nivel: "intermedio"
  tags: ["refutacion", "evidencia", "metodologia"]

respuesta: ["datos", "conclusión"]
tipo: completar
respuestas_validas: ["datos", "conclusión"]

enunciado: "Para refutar una objeción científica, el investigador debe presentar ___ que contradiga la crítica y así validar su ___ original."

explicacion: |
  La ciencia se basa en la evidencia; sin datos que respalden la posición frente a una crítica, la conclusión pierde validez científica.
```