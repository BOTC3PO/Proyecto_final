### 1 — Presión de un zapato
```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["presion", "fuerza", "area"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [[400, 0.02], [600, 0.05]]
  fuerza: datos[escenario_idx][0]
  area: datos[escenario_idx][1]

respuesta: fuerza / area
tipo: input
tolerancia_abs: 0.1

enunciado: "Una persona de {fuerza} N de peso se apoya sobre una superficie con un área de contacto de {area} m². ¿Cuál es la presión ejercida en Pascales (Pa)?"

explicacion: |
  La presión se define como la fuerza aplicada por unidad de área: P = F / A.
  En este caso: {fuerza} / {area} = {respuesta} Pa.
```

### 2 — El efecto de la superficie
```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["conceptos", "presion"]

respuesta: "menor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "Si una misma fuerza se aplica sobre una superficie con un área de contacto más grande, la presión resultante será ___."

explicacion: |
  Como la presión es inversamente proporcional al área (P = F/A), al aumentar el área, la presión disminuye.
```

### 3 — El caso del clavo
```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["presion", "area"]

variables:
  caso: uno_de([0,1])
  fuerza: uno_de([10, 20])
  area_punta: 0.0001
  area_cabeza: 0.01

respuesta: tabla[caso][1]
tipo: completar
tabla: [["mayor", "mayor"], ["menor", "menor"]]
respuestas_validas: ["mayor", "menor"]

enunciado: "Considerando un clavo con una punta muy fina y una cabeza ancha. Si aplicamos una fuerza constante, la presión en la punta es ___ que la presión en la cabeza."

explicacion: |
  A menor área (la punta), la presión es mucho más alta, lo que permite que el clavo penetre la madera.
```

### 4 — Verdad o Falso: Unidades
```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que la unidad de presión en el Sistema Internacional es el Newton (N)?"

explicacion: |
  Falso. El Newton (N) es unidad de fuerza. La presión es Newton por metro cuadrado (N/m²), también llamado Pascal (Pa).
```

### 5 — Pasos para calcular la presión
```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["procedimiento", "calculo"]

opciones_explicitas: ["Identificar la fuerza y el área", "Dividir la fuerza por el área", "Verificar las unidades de medida"]
respuesta: ["Identificar la fuerza y el área", "Dividir la fuerza por el área", "Verificar las unidades de medida"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un problema de presión donde te dan la fuerza en Newtons y el área en centímetros cuadrados:"

explicacion: |
  1. Identificar los datos (F y A).
  2. Convertir unidades si es necesario (cm² a m²).
  3. Aplicar la fórmula P = F/A.
```