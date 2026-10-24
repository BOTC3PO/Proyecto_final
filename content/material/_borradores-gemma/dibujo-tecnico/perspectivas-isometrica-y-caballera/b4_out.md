### 1 — Diferencia de ejes en isométrica
```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_isometricas"
  nivel: "basico"
  tags: ["isométrica", "ejes"]

enunciado: "En una perspectiva isométrica, los tres ejes principales (X, Y, Z) forman ángulos de ___ grados entre sí, lo que permite una representación proporcional de las tres dimensiones."

respuestas_validas: ["120"]
tipo: completar

explicacion: |
  En la perspectiva isométrica, los ejes están separados por 120°, lo que garantiza que la escala sea la misma en las tres direcciones principales.
```

### 2 — Profundidad en perspectiva caballera
```
metadata:
  materia: "dibujo-tecnico"
  tema: "perspectivas_caballeras"
  nivel: "basico"
  tags: ["caballera", "profundidad"]

variables:
  es_proporcional: false

enunciado: "En la perspectiva caballera, la profundidad se representa mediante un eje inclinado. ¿Es la escala de este eje de profundidad igual a 1:1 en un dibujo técnico estándar?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: mc

explicacion: |
  En la perspectiva caballera, para evitar la distorsión visual, se suele aplicar un coeficiente de reducción (como 0.5) al eje de profundidad.
```

### 3 — Comparación de ejes: Isométrica vs Caballera
```
metadata:
  materia: "dibujo-tecnico"
  tema: "comparativa_perspectivas"
  nivel: "intermedio"
  tags: ["isométrica", "caballera"]

enunciado: "Selecciona la afirmación que describe correctamente la diferencia principal entre la perspectiva isométrica y la caballera respecto a sus ejes de profundidad."

opciones_explicitas: ["La isométrica usa ejes a 120° y la caballera usa ejes a 45° o 60°.", "La isométrica es una perspectiva oblicua y la caballera es axonométrica.", "La isométrica no tiene profundidad y la caballera sí.", "Ambas usan ejes a 90° pero con diferentes escalas."]
respuesta: "La isométrica usa ejes a 120° y la caballera usa ejes a 45° o 60°."
tipo: mc

explicacion: |
  La isométrica es una perspectiva axonométrica donde todos los ejes tienen la misma importancia y ángulos iguales, mientras que la caballera es oblicua y utiliza un eje de profundidad inclinado.
```

### 4 — Proyección de caras en isométrica
```
metadata:
  materia: "dibujo-tecnico"
  tema: "isométrica"
  nivel: "intermedio"
  tags: ["isométrica", "caras"]

enunciado: "En una perspectiva isométrica, las caras de un cubo que son paralelas a los planos de proyección se ven como:"

opciones_explicitas: ["Trapecios", "Paralelogramos", "Rectángulos", "Triángulos"]
respuesta: "Paralelogramos"
tipo: mc

explicacion: |
  Debido a la inclinación de los ejes a 30° respecto a la horizontal, las caras de los objetos se proyectan como paralelogramos en el plano.
```

### 5 — Orden de construcción de un objeto en caballera
```
metadata:
  materia: "dibujo-tecnico"
  tema: "procedimiento_caballera"
  nivel: "intermedio"
  tags: ["pasos", "caballera"]

enunciado: "Ordena los pasos lógicos para dibujar un prisma rectangular en perspectiva caballera:"

opciones_explicitas: ["Dibujar la cara frontal", "Dibujar las líneas de profundidad inclinadas", "Dibujar las líneas de cierre de la cara posterior", "Unir los puntos para completar el objeto"]
respuesta: ["Dibujar la cara frontal", "Dibujar las líneas de profundidad inclinadas", "Dibujar las líneas de cierre de la cara posterior", "Unir los puntos para completar el objeto"]
tipo: ordenar

explicacion: |
  Primero se establece la base (cara frontal), luego se proyecta la profundidad (eje inclinado) y finalmente se cierran las caras laterales y posteriores.
```