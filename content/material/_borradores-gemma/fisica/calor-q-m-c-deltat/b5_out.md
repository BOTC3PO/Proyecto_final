### 1 — Calor necesario para calentar agua
```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["calorimetria", "calor_especifico"]

variables:
  escenario: uno_de([[500, 1500], [250, 400], [1000, 2500]])
  idx: uno_de([0,1,2])
  m: escenario[idx][0]
  dT: escenario[idx][1]
  c_agua: 4186

respuesta: m * c_agua * dT

tipo: input
tolerancia_abs: 0.1

enunciado: "Se desea calentar una masa de {m} g de agua desde una temperatura inicial hasta una temperatura final tal que la diferencia de temperatura sea de {dT} °C. ¿Cuántos Joules de calor se requieren? (Use c_agua = 4186 J/kg·K)"

pasos:
  - "Identificar la masa (m) en kg: m/1000"
  - "Calcular el cambio de temperatura (ΔT)"
  - "Aplicar la fórmula Q = m * c * ΔT"

explicacion: |
  La fórmula utilizada es Q = m · c · ΔT. 
  Para el caso seleccionado: Q = {m}/1000 * 4186 * {dT} = {m * 4186 * dT / 1000} J.
```

### 2 — Comparación de capacidad térmica
```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["calorimetria", "comparacion"]

variables:
  materiales: [["hierro", 450], ["aluminio", 900]]
  idx: uno_de([0,1])
  nombre: materiales[idx][0]
  ce: materiales[idx][1]

respuesta: ce > 500

tipo: vf

enunciado: "Si tenemos una muestra de {nombre} con un calor específico de {ce} J/kg·K, ¿es su calor específico mayor a 500 J/kg·K?"

explicacion: |
  El calor específico del {nombre} es {ce} J/kg·K. Por lo tanto, la afirmación es {ce > 500}.
```

### 3 — Identificación de sustancia
```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "intermedio"
  tags: ["calorimetria", "identificacion"]

variables:
  datos: [["oro", 129], ["cobre", 385], ["plomo", 128]]
  idx: uno_de([0,1,2])
  ce_medido: datos[idx][1]
  nombre_real: datos[idx][0]

respuesta: "___"
opciones_explicitas: ["oro", "cobre", "plomo"]
respuestas_validas: [datos[idx][0]]
tipo: completar

enunciado: "En un experimento, se suministra calor a una muestra desconocida y se observa que su calor específico es de {ce_medido} J/kg·K. La sustancia es ___."

explicacion: |
  Al comparar el valor medido de {ce_medido} J/kg·K con las tablas de materiales, identificamos que es {nombre_real}.
```

### 4 — Proceso de transferencia de calor
```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["conceptos", "transferencia"]

respuesta: "absorbe calor"
opciones_explicitas: ["absorbe calor", "libera calor", "no cambia su temperatura"]
respuestas_validas: ["absorbe calor"]
tipo: mc

enunciado: "Si una sustancia aumenta su temperatura de 20 °C a 50 °C, significa que la sustancia ___."

explicacion: |
  Un aumento en la temperatura implica que la sustancia ha ganado energía térmica, es decir, ha absorbido calor.
```

### 5 — Pasos para calcular el calor específico
```
metadata:
  materia: "fisica"
  tema: "calor_especifico"
  nivel: "basico"
  tags: ["metodologia", "procedimiento"]

respuesta: ["Medir la masa", "Medir el cambio de temperatura", "Calcular la energía térmica"]
opciones_explicitas: ["Medir la masa", "Medir el cambio de temperatura", "Calcular la energía térmica"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para determinar el calor específico de una sustancia mediante calorimetría, partiendo de que ya conocemos la energía Q suministrada:"

explicacion: |
  Para hallar 'c' en la fórmula Q = m·c·ΔT, primero necesitamos conocer la masa (m) y la variación de temperatura (ΔT).
```