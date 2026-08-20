### 1 — Resistencia equivalente en serie
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["resistencia", "serie", "ley_de_ohm"]

variables:
  r1: 10
  r2: 20
  r3: 30

respuesta: r1 + r2 + r3
tipo: input
tolerancia_abs: 0.01

enunciado: "En un circuito en serie con tres resistencias de {r1} Ω, {r2} Ω y {r3} Ω, ¿cuál es el valor de la resistencia total (equivalente) del circuito?"

pasos:
  - "Identificar que en un circuito en serie, la resistencia total es la suma de las resistencias individuales."
  - "Sumar los valores: {r1} + {r2} + {r3}."

explicacion: |
  En una configuración en serie, la resistencia total es siempre la suma aritmética de todas las resistencias presentes en la rama.
```

### 2 — Comportamiento de la corriente
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "basico"
  tags: ["corriente", "intensidad"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito en serie, la intensidad de corriente que circula por cada uno de los componentes es la misma."

explicacion: |
  Verdadero. Al haber un solo camino para el flujo de electrones, la carga debe pasar por todos los componentes en la misma cantidad, por lo que la corriente es constante en todo el circuito.
```

### 3 — Distribución de la tensión
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["tension", "voltaje", "ley_de_kirchhoff"]

variables:
  v_total: 12
  r1: 5
  r2: 7

respuesta: ["V1", "V2"]
tipo: ordenar

opciones_explicitas: ["V1", "V2"]

enunciado: "Si tenemos dos resistencias en serie con una tensión total de {v_total}V, donde la primera resistencia consume {r1}V y la segunda consume {r2}V, ordena los componentes según el orden en que se reparte la tensión total (de mayor a menor consumo)."

explicacion: |
  En un circuito en serie, la tensión total se reparte entre los componentes. La suma de las caídas de tensión en cada resistencia debe ser igual a la tensión de la fuente.
```

### 4 — Error de la resistencia total
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "intermedio"
  tags: ["resistencia", "paralelo_vs_serie"]

variables:
  r1: 10
  r2: 10

respuesta: "La resistencia total disminuye"
tipo: mc

opciones_explicitas: ["La resistencia total aumenta", "La resistencia total disminuye", "La resistencia total permanece igual"]

enunciado: "Si añadimos una segunda resistencia de {r1} Ω en serie a una resistencia ya existente de {r1} Ω, ¿qué sucede con la resistencia total del circuito?"

explicacion: |
  Al añadir componentes en serie, se incrementa la oposición total al paso de la corriente, por lo tanto, la resistencia total aumenta.
```

### 5 — Cálculo de corriente en serie
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_serie"
  nivel: "avanzado"
  tags: ["corriente", "ley_de_ohm", "calculo"]

variables:
  v_fuente: 24
  r1: 4
  r2: 8

respuesta: 2
tipo: input
tolerancia_abs: 0.01

enunciado: "Un circuito tiene una fuente de {v_fuente}V conectada a dos resistencias en serie de {r1} Ω y {r2} Ω. ¿Cuál es la intensidad de corriente que circula por el circuito?"

pasos:
  - "Calcular la resistencia total: R_total = {r1} + {r2}."
  - "Usar la Ley de Ohm: I = V / R_total."

explicacion: |
  Primero sumamos las resistencias: 4 + 8 = 12 Ω. Luego aplicamos la Ley de Ohm: I = 24V / 12Ω = 2A.
```