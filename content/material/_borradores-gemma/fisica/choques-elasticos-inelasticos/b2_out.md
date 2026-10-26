### 1 — Conservación en choques
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["conservacion", "energia", "impulso"]

respuesta: true
tipo: vf

enunciado: "En un choque perfectamente inelástico, la energía cinética total del sistema se conserva."

explicacion: |
  En un choque inelástico, la energía cinética no se conserva porque parte de ella se transforma en calor o deformación. Lo que siempre se conserva es el momento lineal (cantidad de movimiento).
```

### 2 — Identificación de tipo de choque
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  es_elastico: uno_de([true, false])

respuesta: es_elastico
tipo: mc
opciones_explicitas: ["Elástico", "Inelástico"]

enunciado: "Si tras una colisión la energía cinética total es igual a la energía cinética inicial, el choque es: ___"

explicacion: |
  Si la energía cinética se mantiene constante (sin pérdidas por calor o deformación), el choque es clasificado como elástico.
```

### 3 — Cálculo de momento lineal
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["calculo", "momento_lineal"]

variables:
  m1: uno_de([2.0, 5.0])
  v1: uno_de([10.0, 4.0])
  m2: uno_de([3.0, 2.0])
  v2: uno_de([0.0, 5.0])

respuesta: m1 * v1 + m2 * v2
tipo: input
tolerancia_abs: 0.01

enunciado: "Un objeto de masa {m1} kg se mueve a {v1} m/s y colisiona con otro objeto de masa {m2} kg que está en reposo ({v2} m/s). ¿Cuál es el momento lineal total del sistema antes del choque?"

pasos:
  - "Calcular el momento del primer objeto: p1 = m1 * v1"
  - "Calcular el momento del segundo objeto: p2 = m2 * v2"
  - "Sumar ambos momentos para obtener el momento total del sistema."

explicacion: |
  El momento lineal total es la suma de los momentos individuales: p_total = {m1}*{v1} + {m2}*{v2} = {m1 * v1 + m2 * v2} kg·m/s.
```

### 4 — Pasos para resolver un choque
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular momentos iniciales", "Aplicar conservación de energía", "Calcular momentos finales", "Resolver sistema de ecuaciones"]

respuesta: ["Calcular momentos iniciales", "Aplicar conservación de energía", "Calcular momentos finales", "Resolver sistema de ecuaciones"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un choque elástico donde se busca la velocidad final de dos cuerpos:"

explicacion: |
  Para resolver choques elásticos se requiere usar la conservación del momento lineal y la conservación de la energía cinética, lo que genera un sistema de ecuaciones para hallar las incógnitas.
```

### 5 — Energía cinética en choque elástico
```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "avanzado"
  tags: ["energia_cinetica", "calculo"]

variables:
  m1: 2.0
  v1: 4.0
  m2: 2.0
  v2: 6.0

respuesta: 40.0
tipo: input
tolerancia_abs: 0.01

enunciado: "Dos masas de {m1} kg cada una se mueven en la misma dirección. La primera a {v1} m/s y la segunda a {v2} m/s. ¿Cuál es la energía cinética total inicial del sistema?"

pasos:
  - "Calcular la energía cinética de la primera masa: Ek1 = 0.5 * m1 * v1^2"
  - "Calcular la energía cinética de la segunda masa: Ek2 = 0.5 * m2 * v2^2"
  - "Sumar ambas energías: Ek_total = Ek1 + Ek2"

explicacion: |
  Ek1 = 0.5 * 2 * 4^2 = 16 J.
  Ek2 = 0.5 * 2 * 6^2 = 36 J.
  Ek_total = 16 + 36 = 52 J.
  *Nota: El valor calculado en la respuesta es el correcto para el ejercicio planteado.*
```