### 1 — Conservación en choques
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["mecanica", "conservacion"]

respuesta: "momento_lineal"
tipo: completar
respuestas_validas: ["momento_lineal"]

enunciado: "En cualquier tipo de choque (elástico o inelástico) entre dos cuerpos que interactúan, la propiedad que siempre se conserva es el ___."

explicacion: |
  En un sistema aislado, la cantidad de movimiento (o momento lineal) se conserva siempre, independientemente de si el choque es elástico o inelástico.
```

### 2 — Diferencia energética
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["energia", "choques"]

variables:
  caso: uno_de([0, 1])

respuesta: uno_de([0, 1])
tipo: mc
opciones_explicitas: ["El choque es elástico", "El choque es inelástico"]

enunciado: "Si en un sistema de dos partículas se observa que la energía cinética total se mantiene constante antes y después del impacto, podemos afirmar que el choque es: {caso == 0 ? 'elástico' : 'inelástico'}."

explicacion: |
  La característica distintiva del choque elástico es que la energía cinética se conserva. En el inelástico, parte de esa energía se transforma en calor o deformación.
```

### 3 — Verdad o Falso: Energía en choques inelásticos
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["energia", "conceptos"]

respuesta: falso

tipo: vf

enunciado: "¿Es posible que en un choque perfectamente inelástico la energía cinética total del sistema se mantenga constante?"

explicacion: |
  Falso. En un choque inelástico, la energía cinética se pierde (se transforma en otras formas de energía), aunque el momento lineal se siga conservando.
```

### 4 — Comparación de propiedades
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["propiedades", "comparacion"]

variables:
  tipo_choque: uno_de([0, 1])

respuesta: tipo_choque == 0

tipo: vf

enunciado: "Si comparamos un choque elástico con uno inelástico, el choque elástico se distingue porque la energía cinética se conserva. (Verdadero/Falso)"

explicacion: |
  Efectivamente, la conservación de la energía cinética es el criterio que define la elasticidad de un choque.
```

### 5 — Secuencia de análisis de un choque
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["metodologia", "analisis"]

opciones_explicitas: ["Calcular momento lineal inicial", "Determinar si hay pérdida de energía cinética", "Calcular momento lineal final", "Verificar si el choque fue elástico"]

respuesta: ["Calcular momento lineal inicial", "Calcular momento lineal final", "Determinar si hay pérdida de energía cinética", "Verificar si el choque fue elástico"]
tipo: ordenar

enunciado: "Para analizar un choque y determinar su naturaleza, se deben seguir estos pasos lógicos:"

explicacion: |
  Primero se aplican las leyes de conservación (momento) para hallar las velocidades finales, luego se compara la energía cinética inicial con la final para clasificar el choque.
```