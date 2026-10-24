### 1 — Identificación de la Observación
```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "basico"
  tags: ["metodo_cientifico", "observacion"]

variables:
  escenario: uno_de([
    ["Un científico nota que las plantas en la sombra crecen menos que las que están al sol.", "Observación"],
    ["Un biólogo detecta que el color de las hojas cambia según la temperatura.", "Observación"],
    ["Un botánico nota que la humedad del suelo afecta la altura de los tallos.", "Observación"]
  ])
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["Observación", "Hipótesis", "Experimentación", "Conclusión"]
respuesta: escenario[idx][1]

enunciado: "En el siguiente escenario: '{escenario[idx][0]}', ¿qué etapa del método científico se está llevando a cabo?"

explicacion: |
  La etapa inicial consiste en percibir un fenómeno mediante los sentidos o instrumentos, lo cual constituye la observación.
```

### 2 — Formulación de Hipótesis
```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "intermedio"
  tags: ["metodo_cientifico", "hipotesis"]

variables:
  escenario: uno_de([
    ["Si aumento la temperatura, entonces la reacción será más rápida.", "Hipótesis"],
    ["La luz solar es el factor determinante para el crecimiento.", "Hipótesis"],
    ["El pH del suelo influye en la absorción de nutrientes.", "Hipótesis"]
  ])
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["Observación", "Hipótesis", "Experimentación", "Teoría"]
respuesta: escenario[idx][1]

enunciado: "Ante el fenómeno descrito: '{escenario[idx][0]}', el científico propone una explicación provisional. ¿Cómo se llama esta propuesta?"

explicacion: |
  Una hipótesis es una explicación tentativa y provisional que debe ser sometida a prueba para ser validada o refutada.
```

### 3 — La Experimentación
```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "intermedio"
  tags: ["metodo_cientifico", "experimentacion"]

variables:
  escenario: uno_de([
    ["Se colocan dos plantas en condiciones controladas para medir la luz.", "Experimentación"],
    ["Se varía la cantidad de agua en diferentes macetas para ver el efecto.", "Experimentación"],
    ["Se mantiene constante la temperatura mientras se cambia la presión.", "Experimentación"]
  ])
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas: ["Experimentación"]
respuesta: escenario[idx][1]

enunciado: "Para verificar su idea, el investigador realiza el siguiente proceso: '{escenario[idx][0]}'. Este paso se denomina: ___."

explicacion: |
  La experimentación consiste en manipular variables de forma controlada para observar los efectos y validar la hipótesis.
```

### 4 — Análisis de Resultados
```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "avanzado"
  tags: ["metodo_cientifico", "analisis"]

variables:
  escenario: uno_de([
    ["Se comparan los datos obtenidos con la hipótesis inicial.", "Análisis"],
    ["Se calculan los promedios de crecimiento de los grupos.", "Análisis"],
    ["Se interpretan las variaciones estadísticas de la muestra.", "Análisis"]
  ])
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["Observación", "Análisis", "Conclusión", "Publicación"]
respuesta: escenario[idx][1]

enunciado: "Tras recolectar los datos, el científico procede a: '{escenario[idx][0]}'. ¿Qué fase está ejecutando?"

explicacion: |
  El análisis implica procesar, organizar e interpretar los datos recolectados para entender su significado en relación con la hipótesis.
```

### 5 — El Orden del Método
```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "intermedio"
  tags: ["metodo_cientifico", "orden"]

tipo: ordenar
opciones_explicitas: ["Observación", "Hipótesis", "Experimentación", "Conclusión"]
respuesta: ["Observación", "Hipótesis", "Experimentación", "Conclusión"]

enunciado: "Ordena lógicamente las etapas del método científico desde el inicio hasta el final:"

explicacion: |
  El método científico sigue una secuencia lógica: primero se observa, luego se propone una hipótesis, se experimenta para probarla y finalmente se llega a una conclusión.
```