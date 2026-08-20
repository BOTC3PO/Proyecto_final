### 1 — El límite de la deformación elástica
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["deformacion", "elasticidad", "limite_fluencia"]

respuesta: "elástica"
tipo: completar
respuestas_validas: ["elástica", "elástica", "elástica"]

enunciado: "Cuando un material se somete a una carga y, al retirarla, recupera su forma original sin presentar deformación permanente, se dice que ha ocurrido una deformación ___."

explicacion: |
  La deformación elástica es aquella en la que los enlaces atómicos se estiran pero vuelven a su posición original al retirar la carga. Si se supera el límite de fluencia, entramos en el régimen plástico.
```

### 2 — ¿Qué ocurre tras el punto de fluencia?
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["deformacion_permanente", "plasticidad"]

opciones_explicitas: ["El material vuelve a su forma original", "El material sufre una deformación permanente", "El material se rompe instantáneamente"]
respuesta: "El material sufre una deformación permanente"
tipo: mc

enunciado: "Si un material es sometido a un esfuerzo que supera su punto de fluencia (yield point), ¿cuál es la consecuencia principal al retirar la carga?"

explicacion: |
  El punto de fluencia marca la transición entre el comportamiento elástico (reversible) y el comportamiento plástico (irreversible). Una vez superado, el material queda con una deformación residual.
```

### 3 — Relación Esfuerzo-Deformación
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["diagrama_esfuerzo_deformacion", "curva"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["El material es un metal dúctil que presenta una meseta de fluencia clara.", "El material es un metal dúctil que presenta una meseta de fluencia clara."],
    ["El material es un polímero que muestra una transición suave sin meseta clara.", "El material es un polímero que muestra una transición suave sin meseta clara."]
  ]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["El material es un metal dúctil que presenta una meseta de fluencia clara.", "El material es un metal dúctil que presenta una meseta de fluencia clara.", "El material es un polímero que muestra una transición suave sin meseta clara.", "El material es un polímero que muestra una transición suave sin meseta clara."]

enunciado: "En un diagrama de esfuerzo-deformación, la presencia de una meseta horizontal donde la deformación aumenta sin aumento de carga es característica de: {escenario[idx][0]}"

explicacion: |
  Los metales con estructura FCC o BCC suelen mostrar una meseta de fluencia bien definida, mientras que otros materiales como polímeros o aleaciones específicas pueden tener una transición más gradual.
```

### 4 — Verdad o Falso: El límite de elasticidad
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: falso
tipo: vf

enunciado: "El punto de fluencia es el esfuerzo máximo que un material puede soportar antes de romperse definitivamente."

explicacion: |
  Falso. El punto de fluencia es el inicio de la deformación plástica. El esfuerzo máximo se denomina 'resistencia a la tracción' (UTS) y ocurre mucho después del punto de fluencia.
```

### 5 — Secuencia de deformación en un ensayo de tracción
```
metadata:
  materia: "materiales"
  tema: "plasticidad_y_punto_de_fluencia"
  nivel: "intermedio"
  tags: ["secuencia", "ensayo_traccion"]

opciones_explicitas: ["Deformación Elástica", "Punto de Fluencia", "Deformación Plástica", "Fractura"]
respuesta: ["Deformación Elástica", "Punto de Fluencia", "Deformación Plástica", "Fractura"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas que experimenta una probeta de acero dulce durante un ensayo de tracción desde que se aplica carga hasta la rotura:"

explicacion: |
  Primero ocurre la deformación elástica (reversible), luego se alcanza el punto de fluencia, seguido por la deformación plástica (permanente) y finalmente la rotura o fractura del material.
```