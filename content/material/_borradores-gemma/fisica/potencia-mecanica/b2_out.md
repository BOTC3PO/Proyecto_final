### 1 — Concepto de Potencia Mecánica
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["definicion", "trabajo", "tiempo"]

respuesta: "trabajo / tiempo"
tipo: completar
respuestas_validas: ["trabajo / tiempo", "W / t", "trabajo dividido tiempo"]

enunciado: "La potencia mecánica se define matemáticamente como el ___ realizado por un objeto por unidad de tiempo."

explicacion: |
  La potencia (P) mide la rapidez con la que se realiza un trabajo (W). Su fórmula es P = W / t.
```

### 2 — Cálculo de Potencia
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["calculo", "unidades"]

variables:
  escenario: uno_de([[100, 10, 10], [500, 5, 100], [1200, 20, 60]])

respuesta: escenario[0][0] / escenario[0][1]

tipo: mc
opciones_explicitas: ["10.0", "10.0", "10.0"]

enunciado: "Un motor realiza un trabajo de {escenario[0][0]} Joules en un tiempo de {escenario[0][1]} segundos. ¿Cuál es su potencia mecánica?"

pasos:
  - "Identificar el trabajo (W): {escenario[0][0]} J"
  - "Identificar el tiempo (t): {escenario[0][1]} s"
  - "Aplicar la fórmula: P = W / t"
  - "Calcular: {escenario[0][0]} / {escenario[0][1]} = {escenario[0][0] / escenario[0][1]}"

explicacion: |
  La potencia se calcula dividiendo el trabajo total por el tiempo empleado. En este caso: 100J / 10s = 10 W.
```

### 3 — Unidades de Medida
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["unidades", "si_sistema"]

respuesta: verdadero

tipo: vf

enunciado: "¿La unidad de potencia en el Sistema Internacional (SI) es el Vatio (Watt), que equivale a 1 Julio por segundo?"

explicacion: |
  Correcto. 1 W = 1 J/s.
```

### 4 — Relación Trabajo y Potencia
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["relacion", "tiempo"]

variables:
  caso: uno_de([[10, 2], [20, 5], [30, 3]])

respuesta: caso[0][0] / caso[0][1]

tipo: input
tolerancia_abs: 0.01

enunciado: "Si un sistema realiza un trabajo de {caso[0][0]} J en {caso[0][1]} segundos, ¿cuántos Watts de potencia está desarrollando?"

pasos:
  - "Datos: W = {caso[0][0]} J, t = {caso[0][1]} s"
  - "Fórmula: P = W / t"
  - "Cálculo: {caso[0][0]} / {caso[0][1]}"

explicacion: |
  Dividiendo el trabajo entre el tiempo obtenemos la potencia: {caso[0][0]} / {caso[0][1]} = {caso[0][0] / caso[0][1]} W.
```

### 5 — Desglose de la Potencia (Ordenar)
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["procedimiento", "pasos"]

respuesta: ["Identificar el trabajo realizado (W) en Joules", "Identificar el tiempo transcurrido (t) en segundos", "Dividir el trabajo por el tiempo (W/t) para obtener Watts"]
tipo: ordenar
opciones_explicitas: ["Dividir el trabajo por el tiempo (W/t) para obtener Watts", "Identificar el trabajo realizado (W) en Joules", "Identificar el tiempo transcurrido (t) en segundos"]

enunciado: "Ordena los pasos lógicos para calcular la potencia mecánica de un objeto dado un trabajo y un tiempo."

explicacion: |
  Para resolver problemas de potencia, primero debemos asegurar que tenemos las magnitudes de trabajo y tiempo en unidades SI, y luego aplicar la división.
```