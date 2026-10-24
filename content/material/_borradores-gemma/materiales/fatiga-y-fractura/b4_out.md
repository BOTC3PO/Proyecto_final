### 1 — Fatiga vs. Deformación Plástica
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["fatiga", "esfuerzo", "fractura"]

respuesta: "fractura_frágil"
tipo: completar
respuestas_validas: ["fractura_frágil", "fractura_dúctil"]

enunciado: "A diferencia de la deformación plástica, donde el material sufre una deformación permanente visible antes de romperse, la fatiga suele conducir a una ___ que puede ocurrir sin deformación macroscópica previa."

explicacion: |
  La fatiga es un proceso de degradación progresiva que genera microgrietas. A menudo, el material falla de forma repentina (fractura frágil) sin mostrar el estiramiento o la deformación plástica característica de los materiales dúctiles bajo cargas estáticas.
```

### 2 — Criterio de falla por fatiga
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "avanzado"
  tags: ["limite_fatiga", "esfuerzo"]

variables:
  es_ciclo_critico: uno_de([verdadero, falso])

respuesta: es_ciclo_critico
tipo: vf

enunciado: "Si un material está sometido a un esfuerzo cíclico cuyo valor máximo es inferior al límite de fatiga del material, ¿se producirá la falla por fatiga tras un número infinito de ciclos? (Asumiendo un material con límite de fatiga definido)"

explicacion: |
  Por definición, el límite de fatiga es el nivel de esfuerzo por debajo del cual un material puede soportar un número infinito de ciclos de carga sin fallar por fatiga.
```

### 3 — Morfología de la superficie de fractura
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["fractografia", "superficie"]

respuesta: "Marcas de playa"
tipo: mc
opciones_explicitas: ["Marcas de playa", "Rugosidad granular", "Estriaciones de deslizamiento", "Rugosidad de copa y cono"]

enunciado: "En un análisis fractográfico, ¿qué característica visual distingue una superficie de fractura por fatiga de una fractura por impacto estático?"

explicacion: |
  Las 'marcas de playa' (beach marks) son líneas concéntricas que indican la progresión de la grieta de fatiga a través de la sección transversal, permitiendo identificar el origen de la falla.
```

### 4 — Etapas de la propagación de grieta
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "intermedio"
  tags: ["propagacion", "grieta"]

respuesta: ["Iniciación", "Propagación", "Fractura inminente"]
tipo: ordenar
opciones_explicitas: ["Iniciación", "Propagación", "Fractura inminente"]

enunciado: "Ordene cronológicamente las etapas que ocurren durante el proceso de falla por fatiga en un componente mecánico:"

explicacion: |
  El proceso comienza con la nucleación de una microgrieta (iniciación), seguida del crecimiento de la grieta bajo cargas cíclicas (propagación) y finaliza con la rotura súbita de la sección remanente (fractura inminente).
```

### 5 — Influencia del acabado superficial
```
metadata:
  materia: "materiales"
  tema: "fatiga_y_fractura"
  nivel: "basico"
  tags: ["acabado", "rugosidad"]

variables:
  es_superficie_lisa: uno_de([verdadero, falso])

respuesta: es_superficie_lisa
tipo: vf

enunciado: "Un acabado superficial rugoso o con muescas actúa como un concentrador de esfuerzos, lo que {es_superficie_lisa} aumenta la resistencia a la fatiga del material en comparación con una superficie pulida."

explicacion: |
  La rugosidad superficial crea micro-entalladuras que actúan como concentradores de tensión, facilitando la iniciación de grietas y, por lo tanto, reduciendo la vida útil a la fatiga.
```