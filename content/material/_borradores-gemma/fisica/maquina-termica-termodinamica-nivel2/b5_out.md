### 1 — Eficiencia de una máquina térmica
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "eficiencia"]

variables:
  escenario: [[150, "0.30"], [200, "0.40"], [250, "0.50"]]
  idx: uno_de([0, 1, 2])

enunciado: "Una máquina térmica absorbe un calor de {escenario[idx][0]} J del foco caliente y realiza un trabajo útil de {escenario[idx][0] * escenario[idx][1]} J. ¿Cuál es la eficiencia térmica de la máquina?"

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["0.20", "0.30", "0.40", "0.50", "0.60"]

explicacion: |
  La eficiencia térmica ($\eta$) se define como el cociente entre el trabajo útil realizado ($W$) y el calor absorbido ($Q_H$):
  $\eta = W / Q_H$.
  En este caso: $\eta = {escenario[idx][0] * escenario[idx][1]} / {escenario[idx][0]} = {escenario[idx][1]}$.
```

### 2 — Cálculo de eficiencia térmica
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "eficiencia"]

variables:
  datos: [[450, "0.25"], [600, "0.33"], [800, "0.45"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si una máquina térmica absorbe {datos[idx][0]} J de calor y su eficiencia es de {datos[idx][1]} (expresada en decimal), ¿cuánto trabajo útil realiza?"

respuesta: datos[idx][0] * datos[idx][1]
tipo: input
tolerancia_abs: 0.01

explicacion: |
  Usamos la fórmula de eficiencia: $\eta = W / Q_H \implies W = \eta \times Q_H$.
  Sustituyendo: $W = {datos[idx][1]} \times {datos[idx][0]} = {datos[idx][0] * datos[idx][1]} \text{ J}$.
```

### 3 — Relación calor y trabajo
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "intermedio"
  tags: ["termodinamica", "eficiencia"]

variables:
  caso: [[120, "0.2"], [150, "0.3"], [200, "0.5"]]
  idx: uno_de([0, 1, 2])

enunciado: "Dada una máquina térmica con una eficiencia de {caso[idx][1]}, si el trabajo realizado es de {caso[idx][0]} J, ¿cuál es el calor absorbido del foco caliente?"

respuesta: caso[idx][0] / caso[idx][1]
tipo: input
tolerancia_abs: 0.01

explicacion: |
  Partiendo de $\eta = W / Q_H$, despejamos el calor absorbido: $Q_H = W / \eta$.
  Calculamos: ${caso[idx][0]} / {caso[idx][1]} = {caso[idx][0] / caso[idx][1]} \text{ J}$.
```

### 4 — Completar la fórmula de eficiencia
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica"]

enunciado: "En una máquina térmica, la eficiencia térmica ($\eta$) se define como la relación entre el ___ realizado y el ___ absorbido del foco caliente."

respuesta: ["trabajo", "calor"]
tipo: completar
respuestas_validas: ["trabajo", "calor"]

explicacion: |
  La eficiencia ($\eta$) representa qué fracción de la energía térmica absorbida se convierte en trabajo útil.
  Fórmula: $\eta = W / Q_H$.
```

### 5 — Identificación de componentes
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica"
  nivel: "basico"
  tags: ["termodinamica"]

variables:
  valores: [[500, "0.25"], [1000, "0.50"], [2000, "0.75"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si una máquina térmica tiene una eficiencia de {valores[idx][1]} y absorbe {valores[idx][0]} J de calor, el trabajo realizado es de ___ J."

respuesta: valores[idx][0] * valores[idx][1]
tipo: completar
respuestas_validas: ["125", "500", "250", "750", "1500", "1000", "500", "1500", "1000", "500", "1500", "1500"]

explicacion: |
  El cálculo es $W = Q_H \times \eta$.
  Para el escenario seleccionado: ${valores[idx][0]} \times {valores[idx][1]} = {valores[idx][0] * valores[idx][1]} \text{ J}$.
```