### 1 — La naturaleza del autoconocimiento
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["proceso", "identidad", "evolucion"]

respuesta: falso
tipo: vf

enunciado: "El autoconocimiento es un estado estático que se alcanza una vez que hemos identificado todos nuestros rasgos de personalidad."

explicacion: |
  El autoconocimiento es un proceso dinámico y continuo. A medida que vivimos nuevas experiencias y atravesamos diferentes etapas vitales, nuestra percepción de nosotros mismos se transforma.
```

### 2 — El caso de Julián: El cambio de valores
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["valores", "evolucion", "identidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[["Julián valoraba el éxito profesional por el estatus.", "estatus"], ["Julián valoraba la estabilidad para su familia.", "familia"]]]

enunciado: "Consideremos el caso de una persona cuyas prioridades cambian con el tiempo. Si Julián hoy siente que su motivación principal es {datos[escenario_idx][0]}, su autoconocimiento es un proceso que refleja su evolución actual."

pasos:
  - "Identificar el valor predominante en la etapa actual."
  - "Reconocer que este valor puede haber sido distinto en el pasado."

opciones_explicitas: ["es un dato fijo", "es un proceso dinámico"]
respuesta: "es un proceso dinámico"
tipo: mc

explicacion: |
  El cambio en los valores de Julián demuestra que el 'yo' no es una entidad inmutable, sino una construcción que se renegocia constantemente con el entorno.
```

### 3 — Etapas de la introspección
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "avanzado"
  tags: ["metodologia", "introspeccion", "pasos"]

opciones_explicitas: ["Observar una emoción", "Analizar el origen de la emoción", "Integrar el aprendizaje en la conducta"]
respuesta: ["Observar una emoción", "Analizar el origen de la emoción", "Integrar el aprendizaje en la conducta"]
tipo: ordenar

enunciado: "Para que el autoconocimiento sea efectivo en un proceso terapéutico o de crecimiento, se suele seguir una secuencia lógica de profundización. Ordena estos pasos de lo más superficial a lo más profundo:"

explicacion: |
  El autoconocimiento requiere pasar de la mera percepción sensorial de un estado (observación) a la comprensión de su causa (análisis) y, finalmente, a la transformación personal (integración).
```

### 4 — La sombra y el descubrimiento
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "intermedio"
  tags: ["sombra", "inconsciente", "descubrimiento"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["reaccionar con ira ante un compañero", "ira"], ["sentir envidia ante un logro ajeno", "envidia"]]

enunciado: "Al analizar el caso donde una persona experimenta {casos[caso_idx][0]}, descubre un aspecto de su personalidad que no había integrado previamente. Este descubrimiento es un ejemplo de que conocerse implica:"

opciones_explicitas: ["Solo reconocer lo que nos gusta", "Descubrir aspectos ocultos o no integrados"]
respuesta: "Descubrir aspectos ocultos o no integrados"
tipo: mc

explicacion: |
  El autoconocimiento no es solo una lista de virtudes; implica el proceso de traer a la consciencia aquellos aspectos (la 'sombra') que mantenemos ocultos o negados.
```

### 5 — El factor de la experiencia
```
metadata:
  materia: "psicologia"
  tema: "autoconocimiento_como_busqueda_humana"
  nivel: "basico"
  tags: ["experiencia", "aprendizaje", "identidad"]

respuesta: "un proceso"
tipo: completar
respuestas_validas: ["un proceso", "un camino", "una búsqueda"]

enunciado: "Dado que el ser humano está en constante interacción con un entorno cambiante, el autoconocimiento no puede ser considerado un dato, sino que debe entenderse como ___."

explicacion: |
  La interacción constante con lo nuevo impide que el autoconocimiento sea una meta final; siempre hay nuevos matices de nuestra identidad por descubrir.
```