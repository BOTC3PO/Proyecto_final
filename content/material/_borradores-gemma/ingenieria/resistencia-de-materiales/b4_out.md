### 1 — Tensión vs Esfuerzo
```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["tension", "esfuerzo", "conceptos"]

variables:
  es_distinguido: verdadero

respuesta: es_distinguido
tipo: vf

enunciado: "En ingeniería, la tensión se define como la fuerza interna por unidad de área, mientras que el concepto de esfuerzo suele referirse a la carga aplicada externamente sobre una sección transversal. ¿Es esta distinción conceptualmente válida para diferenciar la respuesta interna del material de la carga externa?"

explicacion: |
  La tensión es una propiedad interna que surge como respuesta a una carga aplicada (esfuerzo externo). Aunque a menudo se usan como sinónimos, la distinción es fundamental para el análisis de estados de carga.
```

### 2 — Compresión vs Tracción
```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "basico"
  tags: ["compresion", "traccion", "esfuerzos"]

variables:
  caso: uno_de([[1, "acortar"], [2, "alargar"], [3, "cortar"]])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["acortar", "alargar", "cortar"]

enunciado: "Si sometemos un cilindro de acero a un esfuerzo de compresión pura, el efecto principal sobre su geometría longitudinal será ___."

pasos:
  - "Identificar el sentido de la fuerza aplicada."
  - "Determinar si la fuerza tiende a expandir o contraer el material."

explicacion: |
  La compresión es un esfuerzo que tiende a reducir las dimensiones de un cuerpo, mientras que la tracción busca incrementarlas.
```

### 3 — Rigidez del Triángulo
```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["geometria", "estructuras", "triangulo"]

variables:
  forma: uno_de([[0, "cuadrado"], [1, "triangulo"]])

respuesta: forma[idx][1]
tipo: mc
opciones_explicitas: ["cuadrado", "triangulo"]

enunciado: "Comparando un cuadrilátero con un triángulo, ¿cuál de estas formas es intrínsecamente rígida porque sus ángulos no pueden cambiar sin variar la longitud de sus lados?"

explicacion: |
  El triángulo es la única forma geométrica simple que es indeformable (rígida) por sí misma, ya que sus tres lados definen unívocamente su forma. Un cuadrilátero puede colapsar (deformarse) manteniendo sus lados constantes.
```

### 4 — Orden de formación de esfuerzos
```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "intermedio"
  tags: ["proceso", "carga"]

respuesta: ["Aplicación de carga externa", "Generación de esfuerzos internos", "Deformación del elemento"]
tipo: ordenar
opciones_explicitas: ["Aplicación de carga externa", "Generación de esfuerzos internos", "Deformación del elemento"]

enunciado: "Ordene cronológicamente los eventos que ocurren en un elemento estructural bajo carga:"

explicacion: |
  Primero se aplica la carga, esto genera tensiones internas en el material para resistirla, y finalmente, si el material no es infinitamente rígido, se produce la deformación.
```

### 5 — Tensión de Corte vs Normal
```
metadata:
  materia: "ingenieria"
  tema: "resistencia_de_materiales"
  nivel: "avanzado"
  tags: ["tensión_corte", "tensión_normal"]

variables:
  tipo_t: uno_de([[0, "paralela"], [1, "perpendicular"]])

respuesta: tipo_t[idx][1]
tipo: completar
opciones_explicitas: ["paralela", "perpendicular"]

enunciado: "Mientras que la tensión normal actúa de forma perpendicular a la sección transversal, la tensión de corte actúa de forma ___ a la misma."

explicacion: |
  La distinción fundamental radica en la orientación del vector de fuerza respecto al plano de la sección: perpendicular para la normal y paralela para la de corte (o tangencial).
```