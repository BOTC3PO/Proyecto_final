### 1 — Flotación de un bloque de madera
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["flotacion", "empuje", "densidad"]

variables:
  escenario: uno_de([[1.2, "flota"], [0.8, "se hunde"], [1.0, "flota"]])
  densidad_objeto: escenario[0]
  densidad_fluido: 1.0

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["flota", "se hunde", "flota"]

enunciado: "Un objeto con una densidad de {densidad_objeto} g/cm³ se sumerge en un fluido cuya densidad es de {densidad_fluido} g/cm³. El objeto ___."

explicacion: |
  Un objeto flota si su densidad es menor que la del fluido. Si es mayor, se hunde.
```

### 2 — Cálculo del empuje hidrostático
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["empuje", "volumen", "arquimedes"]

variables:
  datos: [[0.5, 4.9, 5.0], [0.2, 1.96, 2.0], [1.0, 9.8, 10.0]]
  idx: uno_de([0, 1, 2])
  volumen: datos[idx][0]
  densidad_fluido: datos[idx][1]
  empuje_real: datos[idx][2]

respuesta: empuje_real
tipo: input
tolerancia_abs: 0.1

enunciado: "Un cuerpo con un volumen de {volumen} m³ está completamente sumergido en un fluido con densidad de {densidad_fluido} kg/m³. ¿Cuál es el valor del empuje (en Newtons) que experimenta el cuerpo? (Usa g = 10 m/s² para tus cálculos)."

pasos:
  - "Calcular el volumen desplazado (es igual al volumen del cuerpo sumergido)."
  - "Aplicar la fórmula del empuje: E = densidad_fluido * g * volumen_desplazado."

explicacion: |
  El empuje es igual al peso del volumen de fluido desplazado: E = ρ * g * V.
  Para el caso seleccionado: {densidad_fluido} * 10 * {volumen} = {empuje_real} N.
```

### 3 — La condición de equilibrio
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["equilibrio", "fuerzas"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando un objeto flota en equilibrio en la superficie de un líquido, la magnitud de la fuerza de empuje es igual a la magnitud de su peso."

explicacion: |
  Para que un objeto flote en equilibrio (sin aceleración vertical), la fuerza hacia arriba (empuje) debe compensar exactamente la fuerza hacia abajo (peso).
```

### 4 — Densidad y flotabilidad
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["densidad", "conceptos"]

respuesta: "densidad_objeto"
tipo: completar
respuestas_validas: ["densidad_objeto", "peso_objeto", "volumen_objeto"]

variables:
  escenario: [[1.5, "densidad_objeto"], [0.5, "peso_objeto"], [2.0, "volumen_objeto"]]
  idx: uno_de([0, 1, 2])
  densidad_objeto: escenario[idx][0]
  valor_comparar: escenario[idx][1]

enunciado: "Si un objeto tiene una ___ mayor que la del fluido, el objeto se hundirá."

explicacion: |
  La flotabilidad depende de la relación entre la densidad del objeto y la del fluido.
```

### 5 — Pasos para hallar el empuje
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["procedimiento", "metodologia"]

opciones_explicitas: ["Calcular volumen desplazado", "Multiplicar por densidad del fluido", "Multiplicar por gravedad"]
respuesta: ["Calcular volumen desplazado", "Multiplicar por densidad del fluido", "Multiplicar por gravedad"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para calcular la fuerza de empuje de un objeto sumergido:"

explicacion: |
  1. Identificar el volumen desplazado.
  2. Multiplicar por la densidad del fluido (obteniendo la masa del fluido desplazado).
  3. Multiplicar por la gravedad para obtener la fuerza (peso del fluido).
```