### 1 — El límite de fatiga
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["fatiga", "esfuerzo", "resistencia"]

respuesta: "verdadero"
tipo: "vf"

enunciado: "Un material sometido a ciclos de carga repetitivos puede fallar por fatiga incluso si el esfuerzo máximo aplicado es significativamente menor que su límite elástico."

explicacion: |
  La fatiga es un fenómeno de degradación progresiva. Las microfisuras se propagan con cada ciclo de carga, reduciendo la sección efectiva del material hasta que la fractura ocurre, incluso bajo cargas que no causarían deformación plástica en una sola aplicación.
```

### 2 — El efecto de la superficie
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "avanzado"
  tags: ["superficie", "fisuras", "acabado"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["rugoso", "menor"], ["pulido", "mayor"]]

respuesta: datos[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["menor", "mayor", "igual", "nulo"]

enunciado: "Considerando el estado de la superficie de una pieza, un acabado {datos[escenario_idx][0]} tiende a resultar en una vida a la fatiga {datos[escenario_idx][1]} que un acabado pulido."

explicacion: |
  Las irregularidades superficiales (rugosidad) actúan como concentradores de esfuerzos (notch effect), facilitando la nucleación de grietas de fatiga. Un acabado pulido retarda este proceso.
```

### 3 — Etapas de la fractura por fatiga
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["mecanismo", "fractura", "secuencia"]

respuesta: ["Nucleación de grieta", "Propagación de la grieta", "Fractura súbita"]
tipo: "ordenar"
opciones_explicitas: ["Nucleación de grieta", "Propagación de la grieta", "Fractura súbita"]

enunciado: "Ordene cronológicamente las etapas que ocurren durante el fallo de un componente por fatiga mecánica."

explicacion: |
  El proceso comienza con la nucleación de una microgrieta (generalmente en la superficie), seguida por la propagación de la grieta a través de la sección transversal, y finaliza con una fractura súbita cuando la sección restante ya no puede soportar la carga.
```

### 4 — Relación carga-vida (Curva S-N)
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["curva_sn", "esfuerzo", "ciclos"]

respuesta: "inversamente"
tipo: "completar"
respuestas_validas: ["inversamente", "directamente"]

enunciado: "En una curva de Wöhler (S-N), la relación entre el esfuerzo de la carga aplicada y el número de ciclos hasta la falla es de tipo ___."

explicacion: |
  La curva S-N muestra que a medida que el nivel de esfuerzo (S) disminuye, el número de ciclos hasta la falla (N) aumenta. Es una relación inversa.
```

### 5 — Fractura Dúctil vs Frágil
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["fractura", "deformacion", "superficie"]

respuesta: "frágil"
tipo: "mc"
opciones_explicitas: ["dúctil", "frágil", "elástica", "plástica"]

enunciado: "La fractura por fatiga suele presentar una superficie de fractura que, en su fase de propagación, muestra marcas de playa (beach marks), lo cual es característico de un comportamiento de tipo ___."

explicacion: |
  Aunque el material original sea dúctil, la fractura por fatiga se comporta de manera predominantemente frágil (poca deformación macroscópica antes de la rotura) debido a la propagación localizada de la grieta.
```