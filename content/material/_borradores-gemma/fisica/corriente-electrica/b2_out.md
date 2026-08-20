### 1 — Cálculo de la intensidad de corriente
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["intensidad", "carga", "amperios"]

variables:
  datos: [[0.005, "0.005"], [0.012, "0.012"], [0.025, "0.025"]]
  idx: uno_de([0,1,2])
  carga: datos[idx][0]
  respuesta_str: datos[idx][1]

respuesta: carga / 2.0
tipo: input
tolerancia_abs: 0.001

enunciado: "Una carga eléctrica de {carga} Coulombs atraviesa una sección transversal de un conductor en un intervalo de tiempo de 2 segundos. ¿Cuál es la intensidad de corriente eléctrica en Amperios?"

pasos:
  - "Identificar la carga (Q) = {carga} C"
  - "Identificar el tiempo (t) = 2 s"
  - "Aplicar la fórmula: I = Q / t"
  - "Calcular: {carga} / 2"

explicacion: |
  La intensidad de corriente (I) se define como la cantidad de carga que pasa por un punto en un tiempo determinado. La fórmula es I = Q / t. En este caso, {carga} / 2 = {respuesta_str} A.
```

### 2 — Concepto de corriente eléctrica
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["concepto", "flujo"]

respuesta: verdadero
tipo: vf

enunciado: "¿La corriente eléctrica se define como el flujo de carga eléctrica a través de un conductor por unidad de tiempo?"

explicacion: |
  Correcto. La corriente eléctrica es la rapidez con la que las cargas eléctricas atraviesan una sección de un conductor.
```

### 3 — Unidades de medida
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["unidades", "amperio"]

opciones_explicitas: ["Voltio", "Amperio", "Ohmio", "Coulomb"]
respuesta: "Amperio"
tipo: mc

enunciado: "¿Cuál es la unidad de medida de la intensidad de corriente eléctrica en el Sistema Internacional (SI)?"

explicacion: |
  La unidad de la intensidad de corriente es el Amperio (A), mientras que el Voltio es para potencial, el Ohmio para resistencia y el Coulomb para carga.
```

### 4 — Relación carga y tiempo
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["calculo", "corriente"]

variables:
  escenario: [[10, 2, "0.5"], [20, 5, "4.0"], [5, 1, "5.0"]]
  idx: uno_de([0,1,2])
  q: escenario[idx][0]
  t: escenario[idx][1]
  res: escenario[idx][2]

respuesta: res
tipo: completar
respuestas_validas: ["0.5", "4.0", "5.0"]

enunciado: "Si una corriente de ___ A fluye por un cable, la carga que atraviesa el conductor en ___ segundos es de ___ C."

explicacion: |
  Usando la relación despejada de la fórmula I = Q / t, tenemos que Q = I * t. Para este caso: {res} = {q} * {t}.
```

### 5 — Orden de magnitudes
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["procedimiento", "pasos"]

opciones_explicitas: ["Identificar valores de carga y tiempo", "Aplicar la fórmula I = Q / t", "Dividir la carga por el tiempo"]
respuesta: ["Identificar valores de carga y tiempo", "Aplicar la fórmula I = Q / t", "Dividir la carga por el tiempo"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un problema de cálculo de intensidad de corriente eléctrica:"

explicacion: |
  Para resolver correctamente, primero debemos extraer los datos del enunciado, luego seleccionar la fórmula matemática adecuada y finalmente realizar la operación aritmética.
```