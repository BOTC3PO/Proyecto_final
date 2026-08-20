### 1 — Diferencia entre Hipótesis y Teoría
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_vs_teoria"
  nivel: "basico"
  tags: ["metodologia", "conceptos_basicos"]

respuesta: "teoria"
tipo: mc
opciones_explicitas: ["hipotesis", "teoria", "ley", "variable"]

enunciado: "Mientras que una hipótesis es una explicación tentativa para un fenómeno observado, una _______ es una explicación amplia y bien sustentada que ha sido confirmada repetidamente mediante la observación y la experimentación."

explicacion: |
  La hipótesis es el punto de partida (una suposición), mientras que la teoría es un marco explicativo robusto y validado.
```

### 2 — Falsabilidad de una hipótesis
```
metadata:
  materia: "investigacion"
  tema: "falsabilidad"
  nivel: "intermedio"
  tags: ["metodologia", "criterio_falsabilidad"]

variables:
  es_falsable: uno_de([verdadero, falso])

respuesta: es_falsable
tipo: vf

enunciado: "Una hipótesis científica se considera 'buena' si es falsa, es decir, si existe la posibilidad de que un experimento pueda demostrar que es incorrecta. ¿Es esto cierto? {es_falsable}"

explicacion: |
  Si una afirmación no puede ser refutada por ningún experimento imaginable (es vaga o metafísica), no es científica. La falsabilidad es el criterio de demarcación de Popper.
```

### 3 — Especificidad vs. Vaguedad
```
metadata:
  materia: "investigacion"
  tema: "especificidad_hipotesis"
  nivel: "basico"
  tags: ["calidad_hipotesis"]

variables:
  escenario: uno_de([0, 1])

respuesta: tabla[escenario][1]
tipo: completar

enunciado: "Analice el siguiente caso: {escenario == 0 ? "La medicina mejora la salud" : "El fármaco X reduce el tiempo de recuperación en un 20% en pacientes con gripe en 5 días"} es una hipótesis ___."

tablas:
  - ["vaga", falso]
  - ["especifica", verdadero]

explicacion: |
  Una hipótesis buena debe ser específica para que los resultados puedan ser medidos y comparados con la predicción inicial.
```

### 4 — Componentes de una hipótesis científica
```
metadata:
  materia: "investigacion"
  tema: "estructura_hipotesis"
  nivel: "intermedio"
  tags: ["metodologia", "estructura"]

respuesta: ["variable_independiente", "variable_dependiente"]
tipo: ordenar

opciones_explicitas: ["variable_dependiente", "variable_independiente", "variable_extraña", "variable_control"]

enunciado: "Para que una hipótesis sea comprobable, debe establecer una relación lógica entre dos elementos. Ordene los componentes según el flujo causal: Primero la causa (___) y luego el efecto (___)."

explicacion: |
  La estructura lógica estándar es: Si cambio la variable independiente, entonces observaré un cambio en la variable dependiente.
```

### 5 — Hipótesis Nula vs. Alternativa
```
metadata:
  materia: "investigacion"
  tema: "hipotesis_nula_vs_alternativa"
  nivel: "avanzado"
  tags: ["estadistica", "metodologia"]

variables:
  tipo_h: uno_de(["nula", "alternativa"])

respuesta: tabla[tipo_h][1]
tipo: mc

opciones_explicitas: ["hipotesis_nula", "hipotesis_alternativa"]

enunciado: "En un experimento, la hipótesis que postula que 'no existe una relación o diferencia significativa entre las variables' se conoce como: {tipo_h == 'nula' ? 'hipotesis_nula' : 'hipotesis_alternativa'}"

tablas:
  - ["hipotesis_nula", "hipotesis_nula"]
  - ["hipotesis_alternativa", "hipotesis_alternativa"]

explicacion: |
  La hipótesis nula (H0) es la que se busca rechazar mediante la estadística, mientras que la alternativa (H1) es la que el investigador realmente propone.
```