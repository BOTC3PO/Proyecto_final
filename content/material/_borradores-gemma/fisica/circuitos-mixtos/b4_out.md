### 1 — Diferencia fundamental: Serie vs Paralelo
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["resistencia", "corriente", "voltaje"]

tipo: mc
opciones_explicitas: ["La corriente es la misma en todos los componentes", "El voltaje es el mismo en todos los componentes", "La resistencia total disminuye al añadir componentes", "La corriente se divide entre las ramas"]

enunciado: "En un circuito en serie, a diferencia de un circuito en paralelo, la característica principal que se mantiene constante en todos los componentes es la ___."

respuesta: "La corriente es la misma en todos los componentes"

explicacion: |
  En un circuito en serie, solo existe un camino para la corriente, por lo que la intensidad es igual en todos los puntos. En paralelo, lo que se mantiene constante es el voltaje.
```

### 2 — Comportamiento de la resistencia equivalente
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["resistencia_equivalente", "paralelo"]

tipo: vf
enunciado: "En un circuito mixto que contiene una sección en paralelo, la resistencia equivalente de esa sección siempre será menor que la resistencia de cada uno de los componentes individuales en dicha sección."

respuesta: falso

explicacion: |
  Verdadero. En una configuración en paralelo, la resistencia equivalente siempre es menor que la menor de las resistencias individuales, ya que se ofrecen más caminos para el flujo de carga.
```

### 3 — Cálculo de resistencia en tramos
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["calculo", "resistencia"]

variables:
  idx: uno_de([0, 1])
  datos: [[10, 20], [30, 60]]

tipo: completar
opciones_explicitas: ["10", "20", "30", "60", "40", "90"]
respuestas_validas: [datos[idx][0], datos[idx][1]]

enunciado: "Si tenemos un circuito compuesto por una resistencia de {datos[idx][0]} $\Omega$ en serie con un bloque en paralelo formado por dos resistencias de {datos[idx][1]} $\Omega$ cada una, la resistencia equivalente total es de ___ $\Omega$."

pasos:
  - "Calcular la resistencia equivalente de la sección en paralelo: $R_p = (R_2 * R_3) / (R_2 + R_3)$"
  - "Sumar la resistencia en serie a la resistencia equivalente obtenida: $R_{total} = R_1 + R_p$"

respuesta: "40" if datos[idx][0] == 10 else "90"

explicacion: |
  Para el caso 1: $R_p = (20*20)/(20+20) = 10$. Total: $10 + 10 = 20$ (Nota: El prompt pide completar con el valor exacto, corregido según lógica de datos: si datos[0]=10 y datos[1]=20, $R_p=10$, Total=20. Si datos[1]=60, $R_p=30$, Total=60. Ajustando lógica de respuesta para el DSL).
```
*(Nota: Corregí la lógica de la respuesta en el bloque anterior para que coincida con el cálculo real: si R1=10 y R2=20, $R_p=10$, Total=20. Si R1=30 y R2=60, $R_p=30$, Total=60. Re-generando la respuesta correcta en el bloque de abajo para evitar errores de lógica en el ejemplo)*

### 3 — (Re-generada) Cálculo de resistencia en tramos
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "intermedio"
  tags: ["calculo", "resistencia"]

variables:
  idx: uno_de([0, 1])
  datos: [[10, 20], [30, 60]]

tipo: completar
respuestas_validas: [20, 60]

enunciado: "Si tenemos un circuito compuesto por una resistencia de {datos[idx][0]} $\Omega$ en serie con un bloque en paralelo formado por dos resistencias de {datos[idx][1]} $\Omega$ cada una, la resistencia equivalente total es de ___ $\Omega$."

pasos:
  - "Calcular la resistencia equivalente de la sección en paralelo: $R_p = (R_2 * R_3) / (R_2 + R_3)$"
  - "Sumar la resistencia en serie a la resistencia equivalente obtenida: $R_{total} = R_1 + R_p$"

respuesta: datos[idx][0] + (datos[idx][1] / 2)

explicacion: |
  La resistencia en paralelo de dos iguales es la mitad de una. Luego se suma la serie.
```

### 4 — Orden de resolución de circuitos
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "basico"
  tags: ["metodologia", "resolucion"]

tipo: ordenar
opciones_explicitas: ["Identificar tramos en paralelo", "Calcular resistencias equivalentes de cada tramo", "Sumar las resistencias en serie para el total"]

enunciado: "Para resolver un circuito mixto, ¿cuál es el orden lógico de simplificación?"

respuesta: ["Identificar tramos en paralelo", "Calcular resistencias equivalentes de cada tramo", "Sumar las resistencias en serie para el total"]

explicacion: |
  Primero se deben simplificar las partes más complejas (paralelos) para convertir el circuito en una cadena de componentes en serie, facilitando el cálculo final.
```

### 5 — Análisis de corriente en ramas
```
metadata:
  materia: "fisica"
  tema: "circuitos_mixtos"
  nivel: "avanzado"
  tags: ["corriente", "ley_de_kirchhoff"]

tipo: mc
opciones_explicitas: ["La corriente se divide en las ramas en paralelo", "La corriente es la misma en todas las ramas", "La corriente aumenta en las ramas en paralelo", "La corriente es cero en las ramas en paralelo"]

enunciado: "Al pasar de un tramo en serie a un tramo en paralelo dentro de un circuito mixto, la corriente total del circuito ___."

respuesta: "La corriente se divide en las ramas en paralelo"

explicacion: |
  En un tramo en paralelo, la corriente total se bifurca, repartiéndose entre las distintas ramas según la resistencia de cada una (Ley de Corrientes de Kirchhoff).
```