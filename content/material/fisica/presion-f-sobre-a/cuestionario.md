# Fisica — Presion f sobre a (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Presión

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["La fuerza aplicada por unidad de área", "La fuerza total aplicada sobre un objeto", "La aceleración producida por una fuerza", "La energía transferida por unidad de superficie"]

enunciado: "La presión se define físicamente como la ___ aplicada sobre una superficie."

respuesta: "La fuerza aplicada por unidad de área"

explicacion: |
  La presión (P) es una magnitud escalar que mide la razón entre la fuerza perpendicular aplicada (F) y el área (A) sobre la que actúa: P = F/A.
```

### 2 — Unidades de Medida

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

tipo: mc
opciones_explicitas: ["Newton (N)", "Pascal (Pa)", "Joule (J)", "Watt (W)"]

enunciado: "En el Sistema Internacional de Unidades, la unidad de presión es el ___."

respuesta: "Pascal (Pa)"

explicacion: |
  Un Pascal (Pa) equivale a un Newton por metro cuadrado (1 N/m²).
```

### 3 — Relación Inversa Área-Presión

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["relacion_proporcional", "analisis"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["2", "4"], ["5", "10"]] # [fuerza, area]

tipo: vf
enunciado: "Si mantenemos la fuerza constante, al aumentar el área de contacto, la presión ___."

respuesta: falso

explicacion: |
  Dado que la fórmula es P = F/A, la presión es inversamente proporcional al área. Si el área aumenta, la presión disminuye.
```

### 4 — Cálculo de Presión Simple

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["calculo", "aplicacion"]

variables:
  caso_idx: uno_de([0, 1, 2])
  escenario: [["100", "2"], ["50", "5"], ["200", "4"]]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Se aplica una fuerza de {escenario[caso_idx][0]} N sobre una superficie de {escenario[caso_idx][1]} m². ¿Cuál es la presión resultante en Pa?"

pasos:
  - "Identificar la fuerza (F) y el área (A)."
  - "Aplicar la fórmula P = F/A."

respuesta: uno_de([50, 10, 50])

explicacion: |
  Utilizando la fórmula P = F/A, dividimos la fuerza entre el área proporcionada.
```

### 5 — Componentes de la Presión

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["completar", "terminologia"]

tipo: completar
respuestas_validas:
  - "fuerza"
  - "área"

enunciado: "Para calcular la presión, es necesario conocer la ___ aplicada y el ___ sobre el cual actúa."

respuesta: ["fuerza", "área"]

explicacion: |
  La presión depende directamente de la magnitud de la fuerza y de la extensión de la superficie (área) donde se distribuye dicha fuerza.
```

### 6 — Concepto de Presión

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "basico"
  tags: ["definicion", "presion"]

tipo: mc
opciones_explicitas: ["La presión es la fuerza aplicada por unidad de área", "La presión es la fuerza multiplicada por el área", "La presión es la masa dividida por el volumen", "La presión es la aceleración de un cuerpo"]
respuesta: "La presión es la fuerza aplicada por unidad de área"

enunciado: "Si aplicamos una fuerza sobre una superficie, la magnitud de la presión resultante depende de la fuerza y del área. ¿Cuál es la definición física de presión?"

explicacion: |
  La presión se define como la magnitud de la fuerza aplicada perpendicularmente sobre una superficie, dividida por el área de dicha superficie ($P = F/A$).
```

### 7 — Cálculo de Presión

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "intermedio"
  tags: ["calculo", "numerico"]

variables:
  escenario: uno_de([[100, 2], [50, 5], [200, 10]])

tipo: completar
tolerancia_abs: 0.01

enunciado: "Se aplica una fuerza de {escenario[0]} N sobre una superficie de {escenario[1]} m². ¿Cuál es la presión ejercida en Pascales (Pa)?"

pasos:
  - "Identificar la fuerza: F = {escenario[0]} N"
  - "Identificar el área: A = {escenario[1]} m²"
  - "Aplicar la fórmula: P = F / A"

respuesta: escenario[0] / escenario[1]

explicacion: |
  Usando la fórmula P = F/A:
  P = {escenario[0]} / {escenario[1]} = {escenario[0] / escenario[1]} Pa.
```

### 8 — Relación Inversa (Área y Presión)

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "intermedio"
  tags: ["relacion", "conceptual"]

tipo: vf

enunciado: "Si mantenemos la fuerza constante pero aumentamos el área de la superficie sobre la que se aplica, la presión resultante será mayor."

respuesta: falso

explicacion: |
  Como la presión es inversamente proporcional al área ($P \propto 1/A$), si el área aumenta, la presión disminuye.
```

### 9 — Completar unidades

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

tipo: completar
respuesta: "Pa"

enunciado: "En el Sistema Internacional de Unidades, la unidad de medida de la presión es el ___."

explicacion: |
  El Pascal (Pa) es la unidad derivada del Newton (N) y el metro cuadrado (m²), definida como 1 Pa = 1 N/m².
```

### 10 — Análisis de variables (Ordenar)

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza_superficie"
  nivel: "basico"
  tags: ["ordenar", "componentes"]

tipo: ordenar
opciones_explicitas: ["Fuerza (N)", "Área (m²)", "Presión (Pa)"]
respuesta_orden: ["Fuerza (N)", "Área (m²)", "Presión (Pa)"]

enunciado: "Para resolver un problema de presión mediante la fórmula $P = F/A$, ¿cuál es el orden lógico de los datos que debemos identificar para realizar la división?"

explicacion: |
  Primero identificamos la fuerza (numerador), luego el área (denominador) y finalmente calculamos el cociente que es la presión.
```

### 11 — Presión y área constante

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["presion", "area", "fuerza"]

enunciado: "Si se mantiene la misma fuerza aplicada sobre una superficie, pero el área de contacto se reduce a la mitad, la presión resultante será ___ veces la presión original."

respuestas_validas:
  - "2"
  - "0.5"
  - "1"
  - "4"
respuesta: "2"
tipo: completar

explicacion: |
  La presión es inversamente proporcional al área ($P = F/A$). Si el área disminuye ($A/2$), la presión se duplica ($2P$).
```

### 12 — El error de la unidad de área

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["unidades", "error_comun"]

variables:
  datos: [[100, 2, 50], [200, 4, 50], [50, 0.5, 100]]
  idx: uno_de([0, 1, 2])

enunciado: "Se aplica una fuerza de {datos[idx][0]} N sobre una superficie de {datos[idx][1]} m². ¿Cuál es la presión en Pascales (Pa)?"

pasos:
  - "Identificar la fórmula: P = F / A"
  - "Sustituir: P = {datos[idx][0]} / {datos[idx][1]}"

respuesta: datos[idx][2]
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  La presión se calcula como P = F / A. Un Pascal (Pa) equivale a un Newton por metro cuadrado (N/m²).
```

### 13 — Relación entre presión y área

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "Un clavo tiene una punta muy afilada. Esto se hace para que, al aplicar una fuerza, la presión sobre la superficie sea:"

opciones_explicitas: ["mayor", "menor", "igual"]
respuesta: "mayor"
tipo: mc

explicacion: |
  Al reducir el área de contacto (punta afilada), la presión aumenta significativamente para una misma fuerza aplicada.
```

### 14 — ¿Presión o Fuerza?

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["conceptos", "distincion"]

enunciado: "Si un objeto se sumerge en un fluido y la presión sobre él aumenta debido a la profundidad, ¿la fuerza total ejercida por el fluido sobre el objeto cambia necesariamente?"

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Verdadero"
tipo: completar
explicacion: |
  La presión es una magnitud intensiva (no depende de la cantidad de materia), pero la fuerza es la presión multiplicada por el área ($F = P \cdot A$). Si la presión aumenta y el área es constante, la fuerza también aumenta.
```

### 15 — Orden de magnitudes de presión

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "avanzado"
  tags: ["ordenar", "conceptos"]

enunciado: "Ordene las siguientes situaciones de MAYOR a MENOR presión aplicada, asumiendo que la fuerza aplicada es siempre la misma en todos los casos:"

opciones_explicitas: ["Persona sobre tacones finos", "Persona sobre pies descalzos", "Persona sobre raquetas de nieve"]
respuesta_orden: ["Persona sobre tacones finos", "Persona sobre pies descalzos", "Persona sobre raquetas de nieve"]
tipo: ordenar

explicacion: |
  A menor área, mayor presión. Los tacones concentran la fuerza en un área muy pequeña (máxima presión), mientras que las raquetas de nieve distribuyen la fuerza en un área grande (mínima presión).
```

### 16 — Presión vs Fuerza

```
metadata:
  materia: "fisica"
  tema: "presion_fuerza"
  nivel: "basico"
  tags: ["presion", "fuerza", "conceptos"]

respuesta: "fuerza"
tipo: "mc"
opciones_explicitas: ["fuerza", "presion", "area", "densidad"]

enunciado: "Mientras que la presión es la magnitud que describe la intensidad de una interacción por unidad de superficie, la ___ es la magnitud escalar que mide la intensidad de una interacción sin considerar el área de aplicación."

explicacion: |
  La fuerza es la causa (medida en Newtons), mientras que la presión es la distribución de esa fuerza sobre una superficie (medida en Pascales).
```

### 17 — Relación área-presión

```
metadata:
  materia: "fisica"
  tema: "presion_area"
  nivel: "intermedio"
  tags: ["presion", "area", "relacion_inversa"]

variables:
  escenario: uno_de([[100, 2], [50, 5], [200, 4]])

respuesta: verdadero
tipo: vf

enunciado: "Si aplicamos una fuerza constante de 100 N sobre una superficie, y la superficie se reduce a la mitad de su tamaño original, ¿la presión resultante será mayor que la inicial? (verdadero/falso)"

explicacion: |
  Dado que P = F/A, si el área (A) disminuye, la presión (P) aumenta. En este caso, al reducir el área a la mitad, la presión se duplica.
```

### 18 — Unidades de medida

```
metadata:
  materia: "fisica"
  tema: "unidades_presion"
  nivel: "basico"
  tags: ["unidades", "pascal", "newton"]

respuestas_validas:
  - "Pascal"
  - "Pa"
tipo: "completar"

enunciado: "La unidad de medida de la presión en el Sistema Internacional de Unidades es el ___."

explicacion: |
  El Pascal (Pa) se define como un Newton por metro cuadrado (1 N/m²).
```

### 19 — Comparación de escenarios

```
metadata:
  materia: "fisica"
  tema: "presion_comparacion"
  nivel: "intermedio"
  tags: ["presion", "comparacion"]

variables:
  caso: uno_de([[10, 5], [20, 2], [5, 10]])

respuesta: "El caso con menor área"
tipo: "mc"
opciones_explicitas: ["El caso con mayor área", "El caso con menor área", "Ambos casos tienen la misma presión"]

enunciado: "Se tienen dos objetos con la misma fuerza aplicada. El objeto A tiene un área de {caso[0]} m² y el objeto B tiene un área de {caso[1]} m². ¿Cuál de los dos presenta una mayor presión?"

explicacion: |
  A menor área, mayor presión. El objeto con el área más pequeña ({caso[1]} m²) tendrá la presión más alta.
```

### 20 — Conceptos de presión hidrostática

```
metadata:
  materia: "fisica"
  tema: "presion_hidrostatica"
  nivel: "avanzado"
  tags: ["presion", "densidad", "profundidad"]

respuesta: "densidad"
tipo: "completar"

enunciado: "En un fluido en reposo, la presión hidrostática depende de la profundidad y de la ___ del fluido, pero es independiente de la forma del recipiente."

explicacion: |
  La fórmula de la presión hidrostática es P = rho * g * h, donde rho es la densidad del fluido.
```

### 21 — Presión de un zapato

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
  respuesta_correcta: fuerza / area

respuesta: respuesta_correcta
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una persona de {fuerza} N de peso se apoya sobre una superficie con un área de contacto de {area} m². ¿Cuál es la presión ejercida en Pascales (Pa)?"

explicacion: |
  La presión se define como la fuerza aplicada por unidad de área: P = F / A.
  En este caso: {fuerza} / {area} = {respuesta_correcta} Pa.
```

### 22 — El efecto de la superficie

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

### 23 — El caso del clavo

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "basico"
  tags: ["presion", "area"]

variables:
  fuerza: uno_de([10, 20])
  area_punta: 0.0001
  area_cabeza: 0.01

respuesta: "mayor"
tipo: completar

enunciado: "Considerando un clavo con una punta muy fina y una cabeza ancha. Si aplicamos una fuerza constante, la presión en la punta es ___ que la presión en la cabeza."

explicacion: |
  A menor área (la punta), la presión es mucho más alta, lo que permite que el clavo penetre la madera.
```

### 24 — Verdad o Falso: Unidades

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

### 25 — Pasos para calcular la presión

```
metadata:
  materia: "fisica"
  tema: "presion_f_sobre_a"
  nivel: "intermedio"
  tags: ["procedimiento", "calculo"]

opciones_explicitas: ["Identificar la fuerza y el área", "Dividir la fuerza por el área", "Verificar las unidades de medida"]
respuesta_orden: ["Identificar la fuerza y el área", "Dividir la fuerza por el área", "Verificar las unidades de medida"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un problema de presión donde te dan la fuerza en Newtons y el área en centímetros cuadrados:"

explicacion: |
  1. Identificar los datos (F y A).
  2. Convertir unidades si es necesario (cm² a m²).
  3. Aplicar la fórmula P = F/A.
```
