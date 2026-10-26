### 1 — Diferencia entre elasticidad y plasticidad
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["deformacion", "elasticidad"]

respuesta: "deformación permanente"
tipo: completar
respuestas_validas: ["deformación permanente", "deformación irreversible"]

enunciado: "Mientras que la deformación elástica es reversible al retirar la carga, la deformación que ocurre tras superar el punto de fluencia se conoce como ___."

explicacion: |
  El punto de fluencia marca la transición entre el comportamiento elástico (donde el material vuelve a su forma original) y el plástico (donde el cambio es permanente).
```

### 2 — El límite de la elasticidad
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["punto_de_fluencia", "esfuerzo"]

variables:
  escenario: uno_de([
    ["el material se deforma y vuelve a su forma original", "elástico"],
    ["el material se deforma y no recupera su forma", "plástico"],
    ["el material se rompe inmediatamente", "frágil"]
  ])

opciones_explicitas: ["elástico", "plástico", "frágil"]
respuesta: escenario[1]
tipo: mc

enunciado: "Si sometemos un material a un esfuerzo que es inferior al punto de fluencia, su comportamiento es ___."

explicacion: |
  Por debajo del punto de fluencia, las fuerzas interatómicas son capaces de mantener la estructura original, permitiendo que el material recupere su forma (comportamiento elástico).
```

### 3 — ¿Es la deformación plástica reversible?
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["booleano", "plasticidad"]

respuesta: falso
tipo: vf

enunciado: "La deformación plástica es aquella que puede ser recuperada totalmente al retirar la carga aplicada."

explicacion: |
  Falso. La característica definitoria de la plasticidad es precisamente la irreversibilidad de la deformación.
```

### 4 — Secuencia de la curva esfuerzo-deformación
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["curva_esfuerzo", "secuencia"]

opciones_explicitas: ["Región elástica", "Punto de fluencia", "Región plástica"]
respuesta: ["Región elástica", "Punto de fluencia", "Región plástica"]
tipo: ordenar

enunciado: "Ordene las etapas de un material dúctil según aumenta la carga aplicada:"

explicacion: |
  Primero el material sigue la ley de Hooke (elástica), luego alcanza el límite donde la deformación aumenta sin aumentar proporcionalmente el esfuerzo (fluencia) y finalmente entra en la zona de deformación permanente (plástica).
```

### 5 — El rol del punto de fluencia
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["límite", "esfuerzo"]

variables:
  valor: uno_de([
    ["el límite de proporcionalidad", "límite"],
    ["el límite de rotura", "límite"],
    ["el límite elástico", "límite"]
  ])

opciones_explicitas: ["el límite de proporcionalidad", "el límite de rotura", "el límite elástico"]
respuesta: valor[0]
tipo: mc

enunciado: "En un diagrama de esfuerzo-deformación, el punto de fluencia se distingue de ___ porque marca el inicio de la deformación no reversible."

explicacion: |
  El punto de fluencia es el umbral crítico que separa la zona donde el material es elástico de la zona donde comienza la deformación plástica.
```