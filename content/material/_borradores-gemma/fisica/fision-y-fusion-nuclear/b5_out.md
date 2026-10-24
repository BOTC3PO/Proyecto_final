### 1 — El secreto de la energía nuclear
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["energia", "relatividad", "masa"]

variables:
  escenario: uno_de([["Uranio-235", "fision"], ["Hidrogeno", "fusion"]])
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["fision", "fusion", "combustion", "desintegracion"]

enunciado: "En una central nuclear convencional, se utiliza el proceso de {escenario[idx][0]} para liberar energía. Este proceso se denomina:"

explicacion: |
  El proceso de {escenario[idx][0]} en reactores nucleares se basa en la fisión, donde un núcleo pesado se divide.
```

### 2 — El defecto de masa
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "avanzado"
  tags: ["defecto_de_masa", "einstein"]

variables:
  datos: [["1.005", "0.005"], ["1.010", "0.010"], ["0.998", "0.002"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["0.005", "0.010", "0.002"]

enunciado: "Si la masa de los fragmentos resultantes tras un proceso nuclear es de ___ unidades de masa atómica menos que la masa de los núcleos originales, ese valor se conoce como defecto de masa."

pasos:
  - "Identificar la masa inicial de los reactivos."
  - "Identificar la masa final de los productos."
  - "Calcular la diferencia para hallar el defecto de masa."

explicacion: |
  La diferencia de masa (defecto de masa) se convierte en energía según la ecuación de Einstein.
```

### 3 — ¿Es la fusión una realidad?
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["verdad_falso", "estrellas"]

respuesta: verdadero
tipo: vf
enunciado: "La fusión nuclear es el proceso que alimenta a las estrellas, como el Sol, donde núcleos ligeros se unen para formar uno más pesado."

explicacion: |
  Es verdadero. En el Sol, la fusión de núcleos de hidrógeno libera la energía que percibimos como luz y calor.
```

### 4 — La ecuación de Einstein
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "intermedio"
  tags: ["e_mc2", "calculo"]

variables:
  valores: [["1.0e-30", "2.7e-13"], ["2.0e-30", "5.4e-13"], ["5.0e-30", "4.5e-13"]]
  idx: uno_de([0,1,2])

respuesta: valores[idx][1]
tipo: input
tolerancia_abs: 0.00001e-13

enunciado: "Si un proceso nuclear libera una cantidad de masa $\\Delta m$ de {valores[idx][0]} kg, ¿cuánta energía $E$ se libera en Joules (usando $c = 3 \\times 10^8$ m/s)? (Expresa el resultado en notación científica, ej: 1.5e-10)"

pasos:
  - "Utilizar la fórmula $E = \\Delta m \\cdot c^2$."
  - "Sustituir $\\Delta m$ por el valor dado."
  - "Elevar la velocidad de la luz al cuadrado ($9 \\times 10^{16}$)."

explicacion: |
  Aplicando $E = mc^2$, la energía liberada es {valores[idx][1]} J.
```

### 5 — El ciclo de la energía nuclear
```
metadata:
  materia: "fisica"
  tema: "fision_y_fusion_nuclear"
  nivel: "basico"
  tags: ["ordenar", "proceso"]

respuesta: ["Masa de reactivos", "Defecto de masa", "Energía liberada"]
tipo: ordenar
opciones_explicitas: ["Masa de reactivos", "Defecto de masa", "Energía liberada", "Masa de productos"]

enunciado: "Ordena los conceptos según el orden lógico en el que ocurren para explicar la liberación de energía en un proceso nuclear:"

explicacion: |
  Primero tenemos la masa inicial, luego la diferencia (defecto) que se convierte en energía.
```