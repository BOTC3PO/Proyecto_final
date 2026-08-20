### 1 — El fin del proceso de dictadura
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["politica", "dictadura", "democracia"]

respuesta: "aceleró"
tipo: completar
respuestas_validas: ["aceleró", "acelerar", "aceleración"]

enunciado: "La derrota militar argentina en la guerra de Malvinas en junio de 1982 ___ el proceso de deslegitimación de la Junta Militar y ___ el retorno a la democracia en 1983."

explicacion: |
  La derrota bélica destruyó el prestigio de la Junta Militar, que había iniciado el conflicto para consolidar su poder, acelerando la crisis del régimen y la transición democrática.
```

### 2 — Consecuencias políticas inmediatas
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["consecuencias", "dictadura"]

opciones_explicitas: ["Consolidación de la dictadura", "Crisis del régimen militar", "Guerra civil inmediata", "Alianza con el Reino Unido"]
respuesta: "Crisis del régimen militar"
tipo: mc

enunciado: "¿Cuál fue la principal consecuencia política interna de la derrota en Malvinas para el gobierno de facto?"

explicacion: |
  La pérdida de la guerra expuso la incapacidad de gestión de la dictadura, provocando una crisis de autoridad que hizo insostenible la continuidad del mando militar.
```

### 3 — El camino a la democracia
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["democracia", "elecciones"]

variables:
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Dictadura", "Democracia"]

enunciado: "Tras la derrota en Malvinas, el proceso político argentino se desplazó desde el mando de una {datos[idx][0]} hacia la restauración de la {datos[idx][1]} en 1983."

pasos:
  - "Analizar el cambio de régimen tras la crisis de junio de 1982."
  - "Identificar el sistema de gobierno que se restauró en 1983."

explicacion: |
  La transición democrática fue impulsada por el vacío de poder y la presión social surgida tras el fracaso bélico.
```
*(Nota: Para que el ejemplo anterior funcione correctamente en VBLang, se define el array de datos en variables)*
```
variables:
  idx: uno_de([0, 1])
  datos: [["Dictadura", "Democracia"], ["Dictadura", "Democracia"]]
```

### 4 — Cronología del fin del régimen
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["orden", "cronologia"]

opciones_explicitas: ["Conflicto bélico", "Retorno a la democracia", "Inicio de la dictadura"]
respuesta: ["Inicio de la dictadura", "Conflicto bélico", "Retorno a la democracia"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes hitos de la historia argentina reciente:"

explicacion: |
  La secuencia correcta es: Golpe de Estado (1976), Guerra de Malvinas (1982) y Elecciones de 1983.
```

### 5 — El impacto en la legitimidad
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["legitimidad", "juicio"]

respuesta: 0
tipo: input
tolerancia_abs: 0

enunciado: "En una escala del 0 al 10, donde 0 es 'nula' y 10 es 'total', ¿cómo se podría calificar la legitimidad política que la Junta Militar intentó recuperar tras la derrota? (Responda con el número 0 para indicar que fue nula)"

explicacion: |
  La derrota eliminó cualquier base de apoyo social para la Junta, dejando su legitimidad en un nivel prácticamente nulo (0).
```