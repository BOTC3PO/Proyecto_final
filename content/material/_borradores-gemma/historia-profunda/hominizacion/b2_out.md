### 1 — El origen de la bipedestación
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["evolucion", "bipedismo"]

tipo: mc
opciones_explicitas: ["aumento de la capacidad craneal", "bipedestación", "uso de fuego", "lenguaje complejo"]

enunciado: "Uno de los primeros rasgos evolutivos que distinguieron a los homínidos de otros primates, permitiendo la liberación de las manos, fue la ___."

explicacion: |
  La bipedestación ocurrió mucho antes del aumento significativo del tamaño cerebral. Al caminar erguidos, los homínidos liberaron sus extremidades superiores para transportar alimentos y, eventualmente, fabricar herramientas.
```

### 2 — Secuencia de la evolución homínida
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["secuencia", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Bipedestación", "Uso de herramientas", "Aumento de la capacidad craneal"]

enunciado: "Ordena cronológicamente los hitos evolutivos según el consenso actual de la hominización:"

explicacion: |
  La evolución no fue lineal, pero la bipedestación precedió al desarrollo de herramientas complejas y al gran crecimiento cerebral (encefalización).
```

### 3 — Consecuencia de la bipedestación
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["herramientas", "manos"]

tipo: completar
respuestas_validas: ["uso de herramientas"]

enunciado: "La liberación de las manos gracias a la bipedestación facilitó el ___."

explicacion: |
  Al no tener que usar las manos para la locomoción, los homínidos pudieron manipular objetos, lo que llevó al desarrollo de la tecnología lítica.
```

### 4 — Relación rasgos y cerebro
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "avanzado"
  tags: ["cerebro", "bipedismo"]

variables:
  caso: uno_de([[true, "antes"], [false, "después"]])

tipo: mc
opciones_explicitas: ["antes", "después"]

enunciado: "De acuerdo a la evidencia paleoantropológica, la bipedestación ocurrió ___ del gran aumento de la capacidad craneal."

respuesta: caso[1]

explicacion: |
  La bipedestación es un rasgo basal de los homínidos. El cerebro creció significativamente mucho después, impulsado en parte por la dieta obtenida gracias a la tecnología de herramientas.
```

### 5 — El cambio anatómico
```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["anatomia", "evolucion"]

tipo: input
tolerancia_abs: 0

enunciado: "Si un homínido camina erguido, sus manos están libres para la manipulación. ¿Cuál es el término técnico para este modo de locomoción? (Escribe la palabra en minúsculas)"

respuesta: "bipedismo"

explicacion: |
  El bipedismo es la capacidad de desplazarse sobre dos extremidades posteriores, un cambio fundamental en la anatomía homínida.
```