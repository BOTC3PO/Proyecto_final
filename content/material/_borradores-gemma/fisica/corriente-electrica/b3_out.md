### 1 — El sentido de la corriente
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["carga", "sentido_convencional", "electrones"]

respuesta: "convencional"
tipo: mc
opciones_explicitas: ["real", "convencional"]

enunciado: "En un circuito físico, los electrones se desplazan del polo negativo al positivo. Sin embargo, por convención histórica, el sentido de la corriente eléctrica se define de forma ___."

explicacion: |
  El sentido convencional de la corriente es del polo positivo al negativo, siguiendo el movimiento de cargas positivas imaginarias, aunque en los metales sean los electrones (cargas negativas) los que se mueven en sentido opuesto.
```

### 2 — Intensidad y carga eléctrica
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "intermedio"
  tags: ["intensidad", "carga", "tiempo"]

variables:
  escenario: uno_de([[1.2, 2.0], [3.5, 5.0], [0.8, 1.5]])

respuesta: escenario[0][1]
tipo: input
tolerancia_abs: 0.01

enunciado: "Una carga eléctrica de {escenario[0][0]} Coulombs atraviesa una sección transversal de un conductor en un intervalo de tiempo de {escenario[0][1]} segundos. ¿Cuál es la intensidad de corriente eléctrica (en Amperios)?"

pasos:
  - "Identificar la fórmula de intensidad: I = ΔQ / Δt"
  - "Dividir la carga total por el tiempo transcurrido"

explicacion: |
  La intensidad de corriente se define como la cantidad de carga que pasa por un punto en un tiempo determinado: I = Q/t. En este caso, {escenario[0][0]} / {escenario[0][1]} = {escenario[0][1]}.
```

### 3 — ¿Es la corriente un flujo de materia?
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["concepto", "flujo"]

respuesta: falso
tipo: vf

enunciado: "La corriente eléctrica es, por definición, un flujo de materia (átomos) que se desplaza a través de un conductor."

explicacion: |
  Falso. La corriente eléctrica es el flujo de **cargas eléctricas** (como electrones o iones), no necesariamente de la materia completa (átomos). En los metales, los átomos permanecen en una red fija mientras los electrones se desplazan.
```

### 4 — Relación carga y electrones
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "avanzado"
  tags: ["electrones", "carga_elemental"]

variables:
  caso: uno_de([[2, 2.0e-19], [5, 1.6e-19], [10, 1.6e-19]])

respuesta: caso[0][0]
tipo: completar
respuestas_validas: ["1", "2", "5", "10"]

enunciado: "Si por un conductor circula una corriente tal que en un segundo pasan {caso[0][1]} Coulombs de carga, ¿cuántos electrones han atravesado la sección en ese tiempo? (Considere la carga del electrón como {caso[0][1]} C)"

explicacion: |
  Para hallar el número de electrones (n), usamos la relación Q = n * e, donde e es la carga elemental. Despejando: n = Q / e. En este caso: {caso[0][0]} / {caso[0][1]} = {caso[0][0]}.
```

### 5 — Pasos para calcular la intensidad
```
metadata:
  materia: "fisica"
  tema: "corriente_electrica"
  nivel: "basico"
  tags: ["procedimiento", "calculo"]

respuesta: ["identificar_carga", "identificar_tiempo", "dividir_valores"]
tipo: ordenar
opciones_explicitas: ["identificar_carga", "identificar_tiempo", "dividir_valores", "multiplicar_valores"]

enunciado: "Ordena los pasos lógicos para calcular la intensidad de corriente eléctrica si se conoce la carga total y el tiempo transcurrido."

explicacion: |
  Para aplicar la fórmula I = Q/t, primero debemos conocer los valores de la carga (Q) y el tiempo (t), y finalmente realizar la división correspondiente.
```