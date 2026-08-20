# Matemática — Cifras significativas y error (cuestionario, 26 preguntas VBLang)

> Tema: `M5`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué son las cifras significativas

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "vocabulario"]

enunciado: "¿Qué son las cifras significativas de un número medido?"
tipo: mc
opciones_explicitas:
  - "Los dígitos que aportan información real sobre la precisión de la medición"
  - "Todos los dígitos, incluidos los que sólo ubican la coma"
  - "Sólo el primer dígito del número"
respuesta: "Los dígitos que aportan información real sobre la precisión de la medición"

explicacion: |
  No incluyen los ceros que sólo sirven para ubicar la coma decimal.
```

### 2 — Para qué sirven las cifras significativas

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "vocabulario"]

enunciado: "¿Para qué sirve expresar un resultado con la cantidad correcta de cifras significativas?"
tipo: mc
opciones_explicitas:
  - "Para no inventar precisión que el instrumento no tiene, ni desperdiciar la que sí se logró"
  - "Para que el número se vea más largo"
  - "Para redondear siempre a números enteros"
respuesta: "Para no inventar precisión que el instrumento no tiene, ni desperdiciar la que sí se logró"

explicacion: |
  Es la forma de ser honesto sobre cuánto se sabe realmente.
```

### 3 — Contar cifras significativas: 305

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["cifras_significativas", "reglas"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 305?"

explicacion: |
  Los tres dígitos son significativos: el 0 está ENTRE dos dígitos
  distintos de cero.
```

### 4 — Contar cifras significativas: 0,0042

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["cifras_significativas", "reglas"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 0,0042?"

explicacion: |
  Los ceros a la izquierda del 4 no cuentan (sólo ubican la coma): las
  cifras significativas son 4 y 2.
```

### 5 — Contar cifras significativas: 3,40

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["cifras_significativas", "reglas"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 3,40?"

explicacion: |
  El cero final después de la coma SÍ es significativo: indica que se
  midió hasta el centésimo. Cifras: 3, 4 y 0.
```

### 6 — Contar cifras significativas: 0,00500

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["cifras_significativas", "reglas"]

respuesta: 3
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 0,00500?"

explicacion: |
  Los ceros a la izquierda del 5 no cuentan; los dos ceros a la derecha
  del 5 sí (después de la coma). Cifras: 5, 0 y 0.
```

### 7 — Contar cifras significativas: 100,0

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["cifras_significativas", "reglas"]

respuesta: 4
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 100,0?"

explicacion: |
  Con la coma decimal presente, todos los ceros cuentan: 1, 0, 0 y 0.
```

### 8 — Contar cifras significativas: 1200 (sin coma)

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["cifras_significativas", "reglas"]

respuesta: 2
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántas cifras significativas tiene el número 1200 (entero, sin coma decimal, sin ninguna aclaración extra)?"

explicacion: |
  Por convención escolar, los ceros finales de un entero sin coma se
  toman como no significativos (ambiguos): cuentan sólo el 1 y el 2.
```

### 9 — Los ceros a la izquierda NO son significativos

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Los ceros a la izquierda del primer dígito distinto de cero nunca son cifras significativas."

explicacion: |
  Sólo sirven para ubicar la coma decimal, como en 0,0042.
```

### 10 — Los ceros entre dígitos SÍ son significativos

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Los ceros ubicados entre dos dígitos distintos de cero siempre son cifras significativas."

explicacion: |
  Como el 0 en 305 o en 1004.
```

### 11 — Ceros finales después de la coma

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["cifras_significativas", "reglas"]

respuesta: verdadero
tipo: vf

enunciado: "Los ceros al final de un número, después de la coma decimal, sí son cifras significativas."

explicacion: |
  Indican que se logró medir con esa precisión (por ejemplo, el 0 en
  3,40).
```

### 12 — Qué es el error absoluto

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["error", "vocabulario"]

enunciado: "¿Cómo se calcula el error absoluto de una medición?"
tipo: mc
opciones_explicitas:
  - "El valor absoluto de la diferencia entre el valor medido y el valor real"
  - "El valor medido dividido el valor real"
  - "La suma del valor medido y el valor real"
respuesta: "El valor absoluto de la diferencia entre el valor medido y el valor real"

explicacion: |
  Error absoluto = |medido − real|.
```

### 13 — Calcular el error absoluto

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "calculo"]

variables:
  real: random(50, 200)
  diferencia: random(1, 10)
  medido: real + diferencia

respuesta: abs(medido - real)
tipo: input
tolerancia_abs: 0.01

enunciado: "Se mide un objeto y da {medido} cm. El valor real es {real} cm. ¿Cuál es el error absoluto?"

pasos:
  - "|{medido} − {real}| = {abs(medido - real)} cm"

explicacion: |
  Se resta y se toma el valor absoluto (el error no es negativo).
```

### 14 — Qué es el error relativo

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "vocabulario"]

enunciado: "¿Cómo se calcula el error relativo de una medición?"
tipo: mc
opciones_explicitas:
  - "Error absoluto dividido el valor real"
  - "Error absoluto multiplicado por el valor real"
  - "Valor real dividido el error absoluto"
respuesta: "Error absoluto dividido el valor real"

explicacion: |
  Error relativo = error absoluto ÷ valor real. Es un número sin unidad.
```

### 15 — Calcular el error relativo

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "calculo"]

variables:
  real: random(50, 200)
  diferencia: random(1, 10)
  medido: real + diferencia

respuesta: redondear(abs(medido - real) / real, 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Se mide un objeto y da {medido} cm. El valor real es {real} cm. ¿Cuál es el error relativo? Redondeá a 4 decimales."

pasos:
  - "Error absoluto: {abs(medido - real)} cm. Error relativo: {abs(medido - real)} ÷ {real} = {redondear(abs(medido - real) / real, 4)}"

explicacion: |
  Se divide el error absoluto por el valor real.
```

### 16 — Calcular el error porcentual

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["error", "calculo"]

variables:
  real: random(50, 200)
  diferencia: random(1, 10)
  medido: real + diferencia

respuesta: redondear((abs(medido - real) / real) * 100, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Se mide un objeto y da {medido} cm. El valor real es {real} cm. ¿Cuál es el error porcentual? Redondeá a 2 decimales."

pasos:
  - "Error relativo: {redondear(abs(medido - real) / real, 4)}. Error porcentual: {redondear(abs(medido - real) / real, 4)} × 100 = {redondear((abs(medido - real) / real) * 100, 2)}%"

explicacion: |
  El error porcentual es el error relativo expresado como porcentaje.
```

### 17 — El error relativo no tiene unidad

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El error relativo es un número sin unidad (una proporción), a diferencia del error absoluto."

explicacion: |
  Por eso permite comparar la calidad de mediciones de magnitudes
  distintas (por ejemplo, un error en una longitud contra un error en una
  masa).
```

### 18 — Comparar la precisión de dos mediciones con el error relativo

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["error", "comparacion"]

variables:
  real1: random(50, 200)
  error1: random(1, 5)
  real2: random(500, 2000)
  error2: random(5, 20)

restricciones:
  - (error1 / real1) != (error2 / real2)

respuesta: (error1 / real1) < (error2 / real2)
tipo: vf

enunciado: "Una medición de {real1} cm tuvo un error absoluto de {error1} cm; otra de {real2} cm tuvo un error absoluto de {error2} cm. ¿Es la primera medición más precisa (menor error relativo) que la segunda?"

pasos:
  - "Error relativo 1: {error1} ÷ {real1} = {redondear(error1 / real1, 4)}. Error relativo 2: {error2} ÷ {real2} = {redondear(error2 / real2, 4)}."

explicacion: |
  Aunque el error absoluto de la segunda sea mayor en números, hay que
  comparar el error RELATIVO (proporcional al tamaño de lo medido) para
  saber cuál midió con más precisión.
```

### 19 — El error absoluto está limitado por la precisión del instrumento

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["error", "instrumento"]

respuesta: verdadero
tipo: vf

enunciado: "El error absoluto de una medición nunca puede ser menor que la mitad de la división más chica del instrumento usado."

explicacion: |
  Es el límite físico de lo que el instrumento puede distinguir, ya
  adelantado en `../magnitud-unidad-instrumento/`.
```

### 20 — Un número contado (no medido) tiene infinitas cifras significativas

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["cifras_significativas", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Si se cuentan 24 alumnos en un aula (un conteo exacto, no una medición con instrumento), ese número no tiene incertidumbre: la idea de \"cifras significativas\" no le aplica de la misma forma que a una medida."

explicacion: |
  Las cifras significativas son un concepto de MEDICIÓN (con margen de
  error); un conteo exacto de unidades discretas no tiene ese margen.
```

### 21 — Elegir el número con más cifras significativas

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["cifras_significativas", "comparacion"]

enunciado: "¿Cuál de estos números tiene MÁS cifras significativas?"
tipo: mc
opciones_explicitas:
  - "20,50"
  - "0,02"
  - "2000"
respuesta: "20,50"

explicacion: |
  20,50 tiene 4 cifras significativas (2, 0, 5, 0 — con coma, los ceros
  cuentan); 0,02 tiene 1; 2000 se toma como 1 (ambiguo, sin coma).
```

### 22 — Completar: regla de los ceros a la izquierda

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "completar"]

tipo: completar
enunciado: "Completá: los ceros a la ___ del primer dígito distinto de cero NO son cifras significativas."
respuestas_validas:
  - "izquierda"

explicacion: |
  Sólo ubican la coma decimal, no aportan precisión.
```

### 23 — Completar: fórmula del error porcentual

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "completar"]

tipo: completar
enunciado: "Completá: el error porcentual es el error relativo multiplicado por ___."
respuestas_validas:
  - 100

explicacion: |
  Es la misma idea que pasar de decimal a porcentaje (ver
  `../porcentaje/`).
```

### 24 — Ordenar números por cantidad de cifras significativas

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "avanzado"
  tags: ["cifras_significativas", "orden"]

tipo: ordenar
enunciado: "Ordená estos números de MENOS a MÁS cifras significativas: 3,40; 0,002; 0,042; 100,0."
opciones_explicitas:
  - "0,042"
  - "100,0"
  - "0,002"
  - "3,40"
respuesta_orden: ["0,002", "0,042", "3,40", "100,0"]
pasos:
  - "0,002 tiene 1; 0,042 tiene 2; 3,40 tiene 3; 100,0 tiene 4."

explicacion: |
  Se cuentan las cifras significativas de cada uno aplicando las reglas
  antes de poder ordenarlos: 1 < 2 < 3 < 4.
```

### 25 — Verificar un cálculo de error (con error a veces)

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "intermedio"
  tags: ["error", "verificacion"]

variables:
  real: random(50, 200)
  diferencia: random(2, 10)
  medido: real + diferencia
  correcto: abs(medido - real)
  error_mostrado: uno_de([0, 0, 0, 1, -1])
  mostrado: correcto + error_mostrado

respuesta: (mostrado == correcto)
tipo: vf

enunciado: "¿Está bien calculado esto? Se midió {medido} cm, el valor real es {real} cm, y se dice que el error absoluto es {mostrado} cm."

explicacion: |
  Se recalcula |medido − real| y se compara con el valor mostrado.
```

### 26 — Cierre: cifras significativas y error van de la mano

```
metadata:
  materia: "matematicas"
  tema: "cifras_significativas_y_error"
  nivel: "basico"
  tags: ["cifras_significativas", "error", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las cifras significativas y el error de una medición son dos formas de expresar la misma idea: ningún instrumento mide con precisión infinita."

explicacion: |
  Es el hilo conductor de todo el módulo, que se retoma en
  `../error-sistematico-vs-aleatorio/`.
```
