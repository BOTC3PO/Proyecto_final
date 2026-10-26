### 1 — Concepto de campo eléctrico
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "El campo eléctrico es una perturbación en el espacio que rodea a una carga eléctrica y que ejerce una fuerza sobre otras cargas colocadas en su vicinity."

explicacion: |
  El campo eléctrico es una magnitud vectorial que describe la influencia que una carga ejerce sobre el espacio circundante.
```

### 2 — Representación de líneas de campo
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "basico"
  tags: ["representacion", "lineas_de_campo"]

opciones_explicitas: ["Desde la carga hacia afuera", "Hacia la carga", "En círculos concéntricos"]
respuesta: "Desde la carga hacia afuera"
tipo: mc

enunciado: "Las líneas de campo eléctrico de una carga puntual positiva se representan siempre..."

explicacion: |
  Por convención, las líneas de campo salen de las cargas positivas y entran en las cargas negativas.
```

### 3 — Cálculo de la magnitud del campo
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["calculo", "punto_carga"]

variables:
  distancia: 0.05
  carga: 2.0e-6
  k: 8.99e9

pasos:
  - "Identificar la constante de Coulomb k ≈ 8.99e9 N·m²/C²."
  - "Aplicar la fórmula E = k * |q| / r²."
  - "Sustituir los valores: E = (8.99e9 * 2.0e-6) / (0.05)²."

respuesta: 7192000.0
tipo: input
tolerancia_abs: 100.0

enunciado: "Calcular la magnitud del campo eléctrico producido por una carga puntual de {carga} C a una distancia de {distancia} m."

explicacion: |
  Usando la fórmula E = k * q / r², obtenemos:
  E = (8.99e9 * 2.0e-6) / (0.05)^2 = 17980 / 0.0025 = 7192000 N/C.
```

### 4 — Relación entre fuerza y campo
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["fuerza", "carga_de_prueba"]

variables:
  idx: uno_de([0, 1])
  datos: [["1.5e-6", "3.0e-3"], ["2.0e-6", "4.0e-3"]]
  campo: uno_de(["1.5e-6", "2.0e-6"])
  fuerza: uno_de(["3.0e-3", "4.0e-3"])

respuesta: tabla[idx][1]
tipo: completar
tablas:
  - ["1.5e-6", "3.0e-3"]
  - ["2.0e-6", "4.0e-3"]

enunciado: "Si una carga de ___ C se coloca en un campo eléctrico de ___ N/C, la fuerza resultante sobre ella es de ___ N."

explicacion: |
  La relación es F = q * E. 
  Caso 1: 1.5e-6 * 3.0e-3 = 4.5e-9 (Nota: El ejemplo en el enunciado usa valores simplificados para el ejercicio).
  Para el ejercicio planteado: F = q * E.
```

### 5 — Orden de pasos para resolver un problema
```
metadata:
  materia: "fisica"
  tema: "campo_electrico"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular la distancia r", "Identificar la carga q y la constante k", "Aplicar la fórmula E = k*q/r²", "Calcular el valor de E"]
respuesta: ["Identificar la carga q y la constante k", "Calcular la distancia r", "Aplicar la fórmula E = k*q/r²", "Calcular el valor de E"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para calcular la intensidad del campo eléctrico producido por una carga puntual en un punto determinado."

explicacion: |
  Primero se deben conocer los datos (carga y constante), luego asegurar la distancia, aplicar la fórmula matemática y finalmente obtener el resultado.
```