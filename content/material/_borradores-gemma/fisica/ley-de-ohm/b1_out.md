### 1 — Concepto de Corriente Eléctrica
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["conceptos", "corriente"]

respuesta: "intensidad_de_corriente"
tipo: completar

enunciado: "La magnitud física que mide la cantidad de carga eléctrica que fluye por unidad de tiempo a través de una sección de un conductor se denomina ___."

respuestas_validas: ["intensidad_de_corriente", "corriente_electrica"]

explicacion: |
  La intensidad de corriente eléctrica ($I$) se define como el flujo de carga eléctrica por unidad de tiempo ($I = dQ/dt$).
```

### 2 — Relación de Proporcionalidad
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["proporcionalidad", "teoria"]

opciones_explicitas: ["Directamente proporcional", "Inversamente proporcional", "No tiene relación"]
respuesta: "Directamente proporcional"
tipo: mc

enunciado: "Según la Ley de Ohm, manteniendo la resistencia constante, la diferencia de potencial (voltaje) es ___ a la intensidad de la corriente."

explicacion: |
  La Ley de Ohm establece que $V = I \cdot R$. Si $R$ es constante, si aumentamos $V$, aumenta $I$ en la misma proporción.
```

### 3 — Identificación de Unidades
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["unidades", "ohm"]

variables:
  idx: uno_de([0, 1])
  datos: [["Voltaje", "Voltios"], ["Resistencia", "Ohmios"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Voltios", "Amperios", "Ohmios", "Watts"]

enunciado: "La unidad de medida en el Sistema Internacional para la {datos[idx][0]} es ___."

explicacion: |
  La unidad de la {datos[idx][0]} es el {datos[idx][1]}.
```

### 4 — Verdad o Falso: Resistencia
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "basico"
  tags: ["teoria"]

respuesta: falso
tipo: vf

enunciado: "Si la resistencia de un circuito aumenta y el voltaje se mantiene constante, la intensidad de la corriente también aumentará."

explicacion: |
  Falso. De la fórmula $I = V/R$, se observa que la corriente es inversamente proporcional a la resistencia. Si $R$ sube, $I$ baja.
```

### 5 — Despeje de la Ley de Ohm
```
metadata:
  materia: "fisica"
  tema: "ley_de_ohm"
  nivel: "intermedio"
  tags: ["calculo", "despeje"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["V = I * R", "I = V / R"],
    ["I = V / R", "R = V / I"]
  ]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["I = V / R", "R = V / I", "V = I / R", "R = I / V"]

enunciado: "Para hallar la resistencia ($R$) en un circuito donde conocemos el voltaje ($V$) y la intensidad ($I$), la expresión correcta es ___."

explicacion: |
  Partiendo de $V = I \cdot R$, despejamos $R$ pasando la $I$ dividiendo al otro lado: $R = V / I$.
```