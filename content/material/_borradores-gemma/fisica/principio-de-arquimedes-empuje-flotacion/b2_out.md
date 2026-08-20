### 1 — Concepto de Empuje
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["arquimedes", "empuje", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "Según el principio de Arquímedes, el empuje es una fuerza vertical hacia arriba que experimenta un cuerpo cuando se sumerge en un fluido."

explicacion: |
  El principio de Arquímedes establece que todo cuerpo sumergido en un fluido experimenta un empuje vertical hacia arriba igual al peso del fluido desalojado.
```

### 2 — Cálculo del Empuje
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["calculo", "empuje", "densidad"]

variables:
  idx: uno_de([0, 1])
  datos: [[1000, 0.5, 5], [1200, 0.8, 2]]

respuesta: datos[idx][2]
tipo: input
tolerancia_abs: 0.1

enunciado: "Un objeto con volumen de {datos[idx][0]} kg/m³ (densidad del fluido) desplaza un volumen de {datos[idx][1]} m³ de agua. Si la densidad del agua es 1000 kg/m³ y la gravedad es 9.8 m/s², ¿cuál es el valor del empuje en Newtons?"

pasos:
  - "Calcular el volumen desplazado: V = {datos[idx][1]} m³"
  - "Calcular el peso del fluido desalojado: E = ρ * g * V"
  - "E = 1000 * 9.8 * {datos[idx][1]}"

explicacion: |
  El empuje se calcula con la fórmula E = ρ_fluido * g * V_sumergido.
  Usando los datos: E = 1000 * 9.8 * {datos[idx][1]} = {datos[idx][2]} N.
```

### 3 — ¿Flota o se hunde?
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["flotacion", "densidad"]

variables:
  idx: uno_de([0, 1])
  escenario: [[800, "flota"], [1200, "se hunde"]]

respuesta: escenario[idx][1]
tipo: mc

opciones_explicitas: ["flota", "se hunde"]

enunciado: "Si un objeto tiene una densidad de {escenario[idx][0]} kg/m³ y se sumerge en agua (densidad 1000 kg/m³), el objeto ___."

explicacion: |
  Si la densidad del objeto es menor que la del fluido, el objeto flota. Si es mayor, se hunde.
  En este caso, {escenario[idx][0]} < 1000, por lo tanto, el objeto {escenario[idx][1]}.
```

### 4 — Relación de fuerzas en flotación
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["equilibrio", "flotacion"]

respuesta: "Peso del fluido desalojado"
tipo: completar

respuestas_validas: ["Peso del fluido desalojado", "Peso del objeto", "Fuerza de gravedad"]

enunciado: "Cuando un objeto flota en equilibrio en la superficie de un líquido, el empuje es exactamente igual al ___."

explicacion: |
  En equilibrio de flotación, la fuerza hacia arriba (empuje) debe compensar exactamente la fuerza hacia abajo (peso del objeto). Por el principio de Arquímedes, esto equivale al peso del fluido desalojado.
```

### 5 — Pasos para hallar el empuje
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["procedimiento", "ordenar"]

opciones_explicitas: ["Calcular volumen desplazado", "Multiplicar por la gravedad", "Multiplicar por la densidad del fluido"]
respuesta: ["Calcular volumen desplazado", "Multiplicar por la densidad del fluido", "Multiplicar por la gravedad"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para calcular el empuje (E = ρ * g * V) partiendo de conocer el volumen sumergido:"

explicacion: |
  El orden correcto es: 1. Determinar el volumen desplazado (V), 2. Multiplicar por la densidad del fluido (ρ * V) y 3. Finalmente, multiplicar por la aceleración de la gravedad (g).
```