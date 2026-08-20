### 1 — El Principio de Cosmología
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["cosmologia", "hubble", "observacion"]

respuesta: "principio_cosmologico"
tipo: mc

opciones_explicitas: ["principio_cosmologico", "teoria_geocentrica", "teoria_estatica", "modelo_de_hubble"]

enunciado: "El hecho de que todas las galaxias parezcan alejarse de nosotros debido a la expansión del universo no significa que la Tierra sea el centro. Este concepto de que el universo se ve igual para cualquier observador está ligado al..."

explicacion: |
  El principio cosmológico establece que, a gran escala, el universo es homogéneo e isotrópico. La expansión es una propiedad del espacio mismo, por lo que cualquier observador en cualquier galaxia vería el mismo efecto de alejamiento.
```

### 2 — El Efecto de la Expansión
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "basico"
  tags: ["expansion", "observacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario_datos: [[0, "se alejan"], [1, "se alejan"]]

respuesta: escenario_datos[escenario_idx][1]
tipo: completar

respuestas_validas: ["se alejan", "se acercan", "estacionarias"]

enunciado: "Si un observador se situara en una galaxia muy lejana, en lugar de la Tierra, vería que las demás galaxias del universo {escenario_datos[escenario_idx][1]} de la misma forma que nosotros."

explicacion: |
  La expansión del universo no es una explosión que ocurre desde un punto central, sino una expansión del tejido mismo del espacio. Por lo tanto, desde cualquier punto, la observación es la misma.
```

### 3 — La ilusión del centro
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["geometria", "espacio"]

respuesta: "falso"
tipo: vf

enunciado: "La Ley de Hubble implica que existe un punto central en el universo desde el cual todas las galaxias se expanden en forma radial, situando a la Tierra en un lugar privilegiado."

explicacion: |
  Falso. La expansión es local en cada punto del espacio. Es similar a la superficie de un globo inflándose: todos los puntos se alejan de todos los demás, sin que haya un centro en la superficie.
```

### 4 — Perspectiva del observador
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "avanzado"
  tags: ["isotropia", "observador"]

variables:
  obs_idx: uno_de([0, 1])
  obs_tipo: ["un observador en la Vía Lemaître", "un observador en una galaxia lejana"]

respuesta: "isotropico"
tipo: completar

respuestas_validas: ["isotropico", "anisotropico", "central"]

enunciado: "Debido a la naturaleza de la expansión, el universo es {obs_tipo[obs_idx]} para {obs_tipo[obs_idx]}, lo que significa que las leyes físicas y la apariencia de la expansión no dependen de la posición del observador."

explicacion: |
  La isotropía significa que las propiedades del universo son las mismas en todas las direcciones. Esto garantiza que no haya un "centro" observable.
```

### 5 — Secuencia de la comprensión histórica
```
metadata:
  materia: "historia_profunda"
  tema: "ley_de_hubble"
  nivel: "intermedio"
  tags: ["logica", "historia"]

opciones_explicitas: ["observacion_galaxias", "conclusion_expansion", "implicacion_no_centro"]
respuesta: ["observacion_galaxias", "conclusion_expansion", "implicacion_no_centro"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que llevaron a la comprensión moderna del universo tras el descubrimiento de Hubble:"

pasos:
  - "Se observa el corrimiento al rojo en galaxias lejanas."
  - "Se concluye que el universo se está expandiendo."
  - "Se comprende que la expansión es una propiedad del espacio y no un alejamiento desde un centro."

explicacion: |
  Primero se detecta el fenómeno (redshift), luego se interpreta como expansión y finalmente se entiende que esto no requiere un centro geométrico.
```