### 1 — Concepto de tensión en paralelo
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["electricidad", "voltaje"]

respuesta: verdadero
tipo: vf

enunciado: "En un circuito en paralelo, todos los componentes conectados a las mismas ramas mantienen la misma ___."

explicacion: |
  En un circuito en paralelo, la diferencia de potencial (tensión o voltaje) es la misma para todas las ramas que están conectadas directamente a los terminales de la fuente.
```

### 2 — Resistencia equivalente
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["resistencia", "equivalente"]

variables:
  r1: 10
  r2: 20
  r_eq: 1 / (1/r1 + 1/r2)

respuesta: r_eq
tipo: input
tolerancia_abs: 0.01

enunciado: "Si tenemos dos resistencias en paralelo con valores de {r1} Ω y {r2} Ω, ¿cuál es el valor de la resistencia equivalente (en Ω)?"

pasos:
  - "Calcular la conductancia de la primera rama: 1/r1"
  - "Calcular la conductancia de la segunda rama: 1/r2"
  - "Sumar las conductancias: G_total = 1/r1 + 1/r2"
  - "La resistencia equivalente es el inverso de la conductancia total: R_eq = 1/G_total"

explicacion: |
  La fórmula para dos resistencias en paralelo es: 1/R_eq = 1/R1 + 1/R2. En este caso: 1/10 + 1/20 = 3/20, por lo tanto R_eq = 20/3 ≈ 6.67 Ω.
```

### 3 — Distribución de corriente
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["corriente", "ley_de_kochl"]

opciones_explicitas: ["se divide", "se suma", "se mantiene igual"]

respuesta: "se divide"
tipo: mc

enunciado: "En un circuito en paralelo, la corriente total que sale de la fuente ___ entre las distintas ramas del circuito."

explicacion: |
  De acuerdo con la Ley de Corrientes de Kirchhoff, la corriente total es la suma de las corrientes que pasan por cada rama. Por lo tanto, la corriente se reparte o divide entre ellas.
```

### 4 — Componentes de un circuito
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "basico"
  tags: ["componentes", "nodos"]

respuestas_validas: ["fuente", "cables", "cargas"]

respuesta: ["fuente", "cables", "cargas"]
tipo: completar

enunciado: "Para armar un circuito básico en paralelo se requiere una ___ de energía, ___ de conexión y las ___ que queremos alimentar."

explicacion: |
  Un circuito requiere una fuente para proporcionar la diferencia de potencial, cables para permitir el flujo de electrones y cargas (resistencias, bombillas, etc.) para consumir la energía.
```

### 5 — Comparación de resistencia total
```
metadata:
  materia: "fisica"
  tema: "circuitos_en_paralelo"
  nivel: "intermedio"
  tags: ["resistencia", "comparacion"]

variables:
  r_base: 100
  r_paralelo: 50

respuesta: "menor"
tipo: mc

opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "Si añadimos una resistencia adicional en paralelo a una resistencia ya existente, la resistencia total del circuito será ___ que la original."

explicacion: |
  Al añadir una rama en paralelo, se ofrecen más caminos para que fluyan los electrones, lo que reduce la oposición total al paso de la corriente. Por lo tanto, la resistencia equivalente siempre disminuye al agregar resistencias en paralelo.
```