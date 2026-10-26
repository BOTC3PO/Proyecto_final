### 1 — Diferencia energética fundamental
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["energia", "masa", "relatividad"]

respuesta: "defecto de masa"
tipo: "completar"
respuestas_validas: ["defecto de masa", "defecto de masa"]

enunciado: "Tanto en la fisión como en la fusión nuclear, la energía liberada proviene de la conversión de una pequeña parte de la masa de los núcleos en energía, fenómeno conocido como ___."

explicacion: |
  La masa de los productos resultantes es menor que la masa de los reactivos originales. Esa diferencia de masa se convierte en energía según la ecuación de Einstein $E=mc^2$.
```

### 2 — Comparación de procesos
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["comparacion", "nucleos"]

variables:
  escenario: uno_de([0, 1])

respuesta: uno_de([0, 1])[1]
tipo: "mc"
opciones_explicitas: ["La fisión une núcleos ligeros para liberar energía", "La fusión divide núcleos pesados para liberar energía", "La fusión une núcleos ligeros para liberar energía", "La fisión divide núcleos pesados para liberar energía"]

enunciado: "Considerando los procesos nucleares, ¿cuál de las siguientes afirmaciones describe correctamente la diferencia entre ambos?"

explicacion: |
  La fisión consiste en la división de un núcleo pesado (como el Uranio-235) en fragmentos más pequeños, mientras que la fusión es la unión de núcleos ligeros (como el Hidrógeno) para formar uno más pesado.
```

### 3 — Verdad o Falso: El rol de la masa
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["relatividad", "e_mc2"]

respuesta: falso
tipo: "vf"

enunciado: "En un proceso de fusión nuclear, la suma de las masas de los núcleos finales es exactamente igual a la suma de las masas de los núcleos iniciales, ya que la energía no afecta la masa."

explicacion: |
  Falso. Si la masa se mantuviera constante, no habría liberación de energía. La energía liberada proviene precisamente de que la masa final es menor que la inicial (defecto de masa).
```

### 4 — Relación de escala de energía
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "avanzado"
  tags: ["magnitud", "energia"]

variables:
  caso: uno_de([0, 1])

respuesta: uno_de([0, 1])[1]
tipo: "mc"
opciones_explicitas: ["La fisión libera más energía por unidad de masa que la fusión", "La fusión libera más energía por unidad de masa que la fisión", "Ambos liberan la misma cantidad de energía por nucleón", "La fisión requiere temperaturas mucho más altas que la fusión"]

enunciado: "Analizando la eficiencia energética de ambos procesos, ¿cuál es la distinción principal respecto a la energía liberada por unidad de masa?"

explicacion: |
  Aunque la fisión es muy potente, la fusión nuclear (como la que ocurre en las estrellas) libera una cantidad significativamente mayor de energía por cada nucleón involucrado.
```

### 5 — Secuencia de la conversión de masa
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["pasos", "energia"]

respuesta: ["Reactivos con masa total mayor", "Transformación por interacción nuclear", "Productos con masa total menor", "Liberación de energía (E=mc²)"]
tipo: "ordenar"
opciones_explicitas: ["Reactivos con masa total mayor", "Transformación por interacción nuclear", "Productos con masa total menor", "Liberación de energía (E=mc²)"]

enunciado: "Ordena los pasos que explican la liberación de energía en un proceso de fusión o fisión nuclear:"

explicacion: |
  El proceso comienza con los reactivos, ocurre la interacción que rompe o une los núcleos, la masa resultante es menor debido al defecto de masa, y esa diferencia se manifiesta como energía liberada.
```