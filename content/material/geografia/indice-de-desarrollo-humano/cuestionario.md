# Geografia — indice de desarrollo humano (cuestionario, 23 preguntas VBLang)

> Tema: `geografia/indice-de-desarrollo-humano`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculo", "normalizacion"]

variables:
  esperanza: random(40, 80)

respuesta: redondear((esperanza - 20) / (85 - 20), 3)
tipo: input

enunciado: "Si la esperanza de vida es {esperanza} años, ¿cuál es el índice normalizado? (Rango min: 20, max: 85)."

explicacion: |
  Se resta el mínimo (20) al valor real y se divide por el rango (65).
```

### 2 — pregunta 2

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculo", "normalizacion"]

variables:
  esperanza: random(50, 84)

respuesta: redondear((esperanza - 20) / (85 - 20), 3)
tipo: input

enunciado: "Con una esperanza de vida de {esperanza} años, calcula el índice de salud."

explicacion: |
  Fórmula: (valor_real - minimo) / (maximo - minimo)."
```

### 3 — pregunta 3

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculo", "ejemplo"]

variables:
  val: uno_de([0.5, 0.6, 0.7, 0.8])

respuesta: redondear(val, 3)
tipo: input

enunciado: "Si los índices de salud, educación e ingreso son todos {val}, ¿cuál es el IDH?"

explicacion: |
  La media geométrica de tres valores iguales es el valor mismo: (val * val * val)^(1/3) = val.
```

### 4 — pregunta 4

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculo", "limite"]

variables:
  esperanza: 85

respuesta: 1.0
tipo: input

enunciado: "Si la esperanza de vida es 85 años, ¿cuál es el índice de salud? (min: 20, max: 85)."

explicacion: |
  (85 - 20) / (85 - 20) = 1.0. Es el valor máximo posible.
```

### 5 — pregunta 5

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculo", "limite"]

variables:
  esperanza: 20

respuesta: 0.0
tipo: input

enunciado: "Si la esperanza de vida es 20 años, ¿cuál es el índice de salud? (min: 20, max: 85)."

explicacion: |
  (20 - 20) / (85 - 20) = 0.0. Es el valor mínimo posible.
```

### 6 — pregunta 6

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["definicion", "concepto"]

variables:
  opcion_correcta: "medir el bienestar humano"
  opcion_a: "medir el crecimiento del PIB"
  opcion_b: "medir la producción industrial"
  opcion_c: "medir la superficie territorial"

respuesta: opcion_correcta
tipo: mc

enunciado: "El Índice de Desarrollo Humano (IDH) fue creado para evaluar el progreso de los países más allá del simple crecimiento económico. ¿Qué busca medir principalmente?"

opciones_explicitas: [opcion_a, opcion_b, opcion_correcta, opcion_c]

explicacion: |
  El IDH busca evaluar la capacidad de las personas para llevar una vida larga, saludable y creativa, yendo más allá del PIB.
```

### 7 — pregunta 7

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["dimensiones", "salud", "educacion"]

variables:
  dim1: "Salud"
  dim2: "Educación"
  dim3: "Estándar de vida digna"
  distractor: "Seguridad nacional"

respuesta: "Salud, Educación, Estándar de vida digna"
tipo: completar

enunciado: "El IDH se basa en tres dimensiones principales. Nombra las tres correctamente: {dim1}, {dim2} y {dim3}."

respuestas_validas:
  - "Salud, Educación, Estándar de vida digna"
  - "Salud, educación, estándar de vida digna"
  - "Salud, Educación, estándar de vida digna"

explicacion: |
  Las tres dimensiones son: Salud (esperanza de vida), Educación (años de escolaridad) y Estándar de vida digna (ingreso per cápita).
```

### 8 — pregunta 8

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["indicadores", "salud"]

variables:
  indicador: "esperanza de vida al nacer"

respuesta: indicador
tipo: completar

enunciado: "La dimensión de salud en el cálculo del IDH se mide a través del indicador: {indicador}."

respuestas_validas:
  - "esperanza de vida al nacer"
  - "Esperanza de vida al nacer"
  - "esperanza de vida"

explicacion: |
  La esperanza de vida al nacer refleja el acceso a servicios médicos y condiciones de higiene.
```

### 9 — pregunta 9

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["educacion", "indicadores"]

variables:
  comp1: "promedio de años de escolaridad"
  comp2: "años esperados de escolarización"

respuesta: "promedio de años de escolaridad y años esperados de escolarización"
tipo: completar

enunciado: "El índice de educación combina dos indicadores: el {comp1} para los adultos y los {comp2} para los niños."

respuestas_validas:
  - "promedio de años de escolaridad y años esperados de escolarización"
  - "promedio de años de escolaridad, años esperados de escolarización"

explicacion: |
  La educación se mide combinando la escolaridad actual de los adultos y la proyección para los niños.
```

### 10 — pregunta 10

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["ingreso", "economia"]

variables:
  indicador_ingreso: "ingreso nacional bruto (INB) per cápita"

respuesta: indicador_ingreso
tipo: completar

enunciado: "El estándar de vida digna se evalúa mediante el {indicador_ingreso}, ajustado por el poder adquisitivo."

respuestas_validas:
  - "ingreso nacional bruto (INB) per cápita"
  - "ingreso nacional bruto per cápita"
  - "INB per cápita"

explicacion: |
  Se utiliza el INB per cápita ajustado por paridad de poder adquisitivo para comparar niveles de vida.
```

### 11 — pregunta 11

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["escala", "valores"]

variables:
  min_val: "0"
  max_val: "1"

respuesta: "0 a 1"
tipo: completar

enunciado: "El puntaje único del IDH va de {min_val} a {max_val}, donde un valor más cercano a 1 indica mayor desarrollo."

respuestas_validas:
  - "0 a 1"
  - "de 0 a 1"
  - "0-1"

explicacion: |
  El índice está normalizado entre 0 (mínimo desarrollo) y 1 (máximo desarrollo).
```

### 12 — pregunta 12

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["historia", "instituciones"]

variables:
  organizacion: "PNUD"

respuesta: organizacion
tipo: completar

enunciado: "El Índice de Desarrollo Humano fue creado por el Programa de las Naciones Unidas para el Desarrollo, conocido como {organizacion}."

respuestas_validas:
  - "PNUD"
  - "pnud"
  - "Programa de las Naciones Unidas para el Desarrollo"

explicacion: |
  El PNUD (Programa de las Naciones Unidas para el Desarrollo) es la entidad creadora.
```

### 13 — pregunta 13

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["interpretacion"]

variables:
  valor_idh: "0.45"

respuesta: "bajo desarrollo humano"
tipo: completar

enunciado: "Un país con un IDH de {valor_idh} se clasifica típicamente en:"

respuestas_validas:
  - "bajo desarrollo humano"
  - "Bajo desarrollo humano"
  - "desarrollo humano bajo"

explicacion: |
  Valores cercanos a 0 indican bajo desarrollo humano.
```

### 14 — pregunta 14

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["exclusion"]

variables:
  no_incluida: "Tasa de alfabetización"
  incluida: "Esperanza de vida"

respuesta: no_incluida
tipo: mc

enunciado: "¿Cuál de estos NO es un indicador directo en las dimensiones principales del IDH tradicional?"

opciones_explicitas: [no_incluida, incluida, "Ingreso per cápita", "Años esperados de escolaridad"]

explicacion: |
  La tasa de alfabetización fue reemplazada por indicadores de años de escolaridad en versiones recientes.
```

### 15 — pregunta 15

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculos", "normalizacion"]

variables:
  esperanza: "85"
  min_val: "20"
  max_val: "85"

respuesta: "1.0"
tipo: input

enunciado: "Si la esperanza de vida es {esperanza} años (máximo teórico {max_val}), ¿cuál es el índice normalizado?"

explicacion: |
  (85 - 20) / (85 - 20) = 1.
```

### 16 — pregunta 16

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculos", "normalizacion"]

variables:
  esperanza: "20"
  min_val: "20"
  max_val: "85"

respuesta: "0.0"
tipo: input

enunciado: "Si la esperanza de vida es {esperanza} años (mínimo teórico {min_val}), ¿cuál es el índice normalizado?"

explicacion: |
  (20 - 20) / (85 - 20) = 0.
```

### 17 — pregunta 17

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  umbral: "0.80"

respuesta: "alto desarrollo humano"
tipo: completar

enunciado: "Un país con IDH superior a {umbral} se clasifica usualmente como:"

respuestas_validas:
  - "alto desarrollo humano"
  - "Alto desarrollo humano"
  - "desarrollo humano alto"

explicacion: |
  Tradicionalmente, >0.80 se considera alto desarrollo.
```

### 18 — pregunta 18

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["educacion"]

variables:
  indicador: "años esperados de escolarización"

respuesta: indicador
tipo: completar

enunciado: "El indicador que proyecta el futuro educativo de los niños es el {indicador}."

respuestas_validas:
  - "años esperados de escolarización"
  - "Años esperados de escolarización"

explicacion: |
  Este indicador mira hacia el futuro, a diferencia del promedio de años ya completados.
```

### 19 — pregunta 19

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "avanzado"
  tags: ["calculos"]

variables:
  i1: "1.0"
  i2: "0.0"
  i3: "1.0"

respuesta: "0.0"
tipo: input

enunciado: "Si un país tiene índices de Salud: {i1}, Educación: {i2}, Ingreso: {i3}, ¿cuál es su IDH?"

explicacion: |
  (1.0 * 0.0 * 1.0)^(1/3) = 0. La media geométrica castiga fuertemente el cero.
```

### 20 — pregunta 20

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "avanzado"
  tags: ["idh", "calculo", "normalizacion"]

variables:
  esperanza_real: random(50, 80)

respuesta: redondear((esperanza_real - 20) / (85 - 20), 3)
tipo: input

enunciado: "Si un país tiene una esperanza de vida de {esperanza_real} años, ¿cuál es su índice de salud normalizado (min 20, max 85)?"

explicacion: |
  Se usa la fórmula: (valor real - min) / (max - min). Aquí: (esperanza_real - 20) / 65.
```

### 21 — pregunta 21

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "avanzado"
  tags: ["idh", "calculo", "educación"]

variables:
  años_esperados: random(10, 18)
  promedio_adultos: random(6, 15)

respuesta: redondear((años_esperados + promedio_adultos) / 2 / 25, 3)
tipo: input

enunciado: "Si los años esperados de escolarización son {años_esperados} y el promedio de años de adultos es {promedio_adultos}, y la meta máxima es 25, ¿cuál es el índice educativo aproximado (media de los dos indicadores dividida por 25)?"

explicacion: |
  El índice de educación combina ambos indicadores. Aquí se simplifica como la media de los dos valores dividida por el máximo teórico (25).
```

### 22 — pregunta 22

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "avanzado"
  tags: ["idh", "calculo", "ingreso"]

variables:
  inb_real: random(2000, 40000)

respuesta: redondear((log(inb_real) - log(100)) / (log(75000) - log(100)), 3)
tipo: input

enunciado: "Si el INB per cápita es {inb_real} dólares, y se usa la transformación logarítmica con min_log=100 y max_log=75000, ¿cuál es el índice de ingreso?"

explicacion: |
  El IDH usa logaritmo natural para el ingreso. Fórmula: (ln(valor) - ln(min)) / (ln(max) - ln(min)).
```

### 23 — pregunta 23

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["idh", "normalización", "escala"]

respuesta: "0 a 1"
tipo: completar

enunciado: "Cada dimensión se normaliza a una escala de {0 a 1} antes de calcular el IDH final."

explicacion: |
  La normalización permite sumar o multiplicar indicadores con unidades diferentes (años, dólares, etc.).
```
