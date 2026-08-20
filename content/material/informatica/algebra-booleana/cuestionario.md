# Informática — Álgebra booleana (cuestionario, 20 preguntas VBLang)

> Tema: `I2`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Valores binarios básicos

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["algebra_booleana", "binario"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El álgebra booleana usa sólo dos valores: 1 (verdadero/encendido) y 0 (falso/apagado)."

pasos:
  - "Es la misma lógica de verdadero/falso vista en Filosofía, aplicada a valores binarios."

explicacion: |
  Verdadero: 1 y 0 son los únicos valores del álgebra booleana.
```

### 2 — AND equivale a la conjunción

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["and"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La operación AND da resultado 1 sólo si AMBAS entradas son 1, igual que la conjunción lógica (∧) vista en Filosofía."

pasos:
  - "Ver `../../filosofia/logica-proposicional/`: AND es la versión binaria exacta de la conjunción."

explicacion: |
  Verdadero: AND requiere que las dos entradas sean verdaderas
  (1), igual que la conjunción.
```

### 3 — OR equivale a la disyunción

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["or"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La operación OR da resultado 1 si AL MENOS UNA entrada es 1, igual que la disyunción lógica (∨) vista en Filosofía."

pasos:
  - "Ver `../../filosofia/logica-proposicional/`: OR es la versión binaria exacta de la disyunción."

explicacion: |
  Verdadero: OR sólo da 0 cuando ambas entradas son 0.
```

### 4 — NOT equivale a la negación

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["not"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La operación NOT invierte el valor de entrada: 1 se convierte en 0, y 0 se convierte en 1."

pasos:
  - "Es la versión binaria exacta de la negación (¬) vista en Filosofía."

explicacion: |
  Verdadero: NOT siempre invierte el valor recibido.
```

### 5 — Resultado de AND con ambas entradas en 1

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["and", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "1"
tipo: completar

enunciado: "Si A=1 y B=1, ¿cuál es el resultado de A AND B?"

pasos:
  - "AND da 1 sólo cuando ambas entradas son 1."

explicacion: |
  Con ambas entradas en 1, AND produce 1.
```

### 6 — Resultado de AND con una entrada en 0

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["and", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "0"
tipo: completar

enunciado: "Si A=1 y B=0, ¿cuál es el resultado de A AND B?"

pasos:
  - "Basta con que UNA entrada sea 0 para que AND dé 0."

explicacion: |
  Con una entrada en 0, AND produce 0, sin importar el valor de la
  otra.
```

### 7 — Resultado de OR con una entrada en 1

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["or", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "1"
tipo: completar

enunciado: "Si A=1 y B=0, ¿cuál es el resultado de A OR B?"

pasos:
  - "OR da 1 si al menos una entrada es 1."

explicacion: |
  Con al menos una entrada en 1, OR produce 1.
```

### 8 — Resultado de OR con ambas entradas en 0

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["or", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "0"
tipo: completar

enunciado: "Si A=0 y B=0, ¿cuál es el resultado de A OR B?"

pasos:
  - "OR sólo da 0 cuando AMBAS entradas son 0."

explicacion: |
  Con ambas entradas en 0, OR produce 0.
```

### 9 — Resultado de NOT

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "basico"
  tags: ["not", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "0"
tipo: completar

enunciado: "Si A=1, ¿cuál es el resultado de NOT A?"

pasos:
  - "NOT siempre invierte el valor de entrada."

explicacion: |
  NOT de 1 es 0.
```

### 10 — Qué es XOR

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["xor"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "XOR (\"o exclusivo\") da resultado 1 sólo cuando las dos entradas son DISTINTAS entre sí (una es 1 y la otra 0)."

pasos:
  - "A diferencia de OR, XOR da 0 cuando ambas entradas son iguales (las dos 1 o las dos 0)."

explicacion: |
  Verdadero: XOR exige diferencia entre las entradas, no basta con
  que al menos una sea 1.
```

### 11 — XOR con entradas iguales

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["xor", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "0"
tipo: completar

enunciado: "Si A=1 y B=1, ¿cuál es el resultado de A XOR B?"

pasos:
  - "XOR da 0 cuando las dos entradas son iguales, aunque ambas sean 1."

explicacion: |
  Con entradas iguales, XOR siempre da 0, a diferencia de OR (que
  daría 1).
```

### 12 — Diferenciar OR de XOR

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "avanzado"
  tags: ["or", "xor", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La diferencia entre OR y XOR es que OR da 1 cuando ambas entradas son 1, y XOR da 0 en ese mismo caso."

pasos:
  - "Con A=1 y B=1: OR da 1, XOR da 0. Es la única fila donde difieren en su tabla de verdad."

explicacion: |
  Verdadero: es la diferencia clave entre disyunción inclusiva (OR) y
  disyunción exclusiva (XOR).
```

### 13 — Compuertas lógicas en circuitos

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["compuertas_logicas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada operación booleana (AND, OR, NOT) corresponde a una compuerta lógica, un componente físico real de un circuito electrónico dentro de un chip."

pasos:
  - "Millones de estas compuertas combinadas forman el procesador de cualquier computadora."

explicacion: |
  Verdadero: el álgebra booleana no es sólo teoría abstracta, tiene
  una implementación física directa en hardware.
```

### 14 — Operadores lógicos en código

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["algebra_booleana", "programacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En casi cualquier lenguaje de programación, `&&` (AND), `||` (OR) y `!` (NOT) son los operadores lógicos usados en condicionales (\"if\")."

pasos:
  - "Es la misma álgebra booleana aplicada al código, en vez de a un circuito o una tabla de verdad abstracta."

explicacion: |
  Verdadero: estos operadores implementan directamente las
  operaciones booleanas en la mayoría de los lenguajes.
```

### 15 — AND en código: condición doble

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["and", "programacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un condicional como \"si (edad >= 18) AND (tiene_permiso)\" sólo se cumple si AMBAS condiciones son verdaderas al mismo tiempo."

pasos:
  - "Es el mismo comportamiento de AND aplicado a condiciones de programación en vez de a valores 1/0 sueltos."

explicacion: |
  Verdadero: AND en un condicional exige que todas las partes
  conectadas por AND sean verdaderas.
```

### 16 — El cruce completo: falacias → lógica → álgebra booleana

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "avanzado"
  tags: ["algebra_booleana", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La misma estructura lógica que empezó como error de razonamiento en lenguaje cotidiano (falacias, Lengua) y se formalizó con proposiciones (Filosofía) termina siendo la base física y de código de una computadora (álgebra booleana, Informática)."

pasos:
  - "Es el \"cruce inesperado\" señalado en `troncos.md` (v2.6), la misma lógica vista en tres materias distintas."

explicacion: |
  Verdadero: es la síntesis completa de la cadena de tres temas en
  tres materias distintas.
```

### 17 — Completar una tabla de verdad de AND

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["and", "tabla_de_verdad"]

variables:
  valores_a: [1, 1, 0, 0]
  valores_b: [1, 0, 1, 0]
  resultados: [1, 0, 0, 0]
  idx: uno_de([0, 1, 2, 3])

respuesta: resultados[idx]
tipo: mc
opciones_explicitas: [0, 1]

enunciado: "Si A={valores_a[idx]} y B={valores_b[idx]}, ¿cuál es el resultado de A AND B?"

pasos:
  - "Sólo la combinación 1 y 1 da como resultado 1; el resto da 0."

explicacion: |
  Aplicando la regla de AND a cada combinación de entradas se obtiene
  el resultado correspondiente de la tabla de verdad.
```

### 18 — Completar una tabla de verdad de XOR

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "avanzado"
  tags: ["xor", "tabla_de_verdad"]

variables:
  valores_a: [1, 1, 0, 0]
  valores_b: [1, 0, 1, 0]
  resultados: [0, 1, 1, 0]
  idx: uno_de([0, 1, 2, 3])

respuesta: resultados[idx]
tipo: mc
opciones_explicitas: [0, 1]

enunciado: "Si A={valores_a[idx]} y B={valores_b[idx]}, ¿cuál es el resultado de A XOR B?"

pasos:
  - "XOR da 1 sólo cuando las entradas son distintas entre sí."

explicacion: |
  Aplicando la regla de XOR (distinto=1, igual=0) a cada combinación
  se obtiene el resultado correspondiente.
```

### 19 — Ordenar el proceso para diseñar una condición con operadores booleanos

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "intermedio"
  tags: ["algebra_booleana", "metodo"]

enunciado: "Ordená los pasos para construir una condición de programación que combine varias reglas con operadores booleanos."
tipo: ordenar
opciones_explicitas:
  - "Identificar cada regla individual que debe cumplirse (o no)"
  - "Decidir si TODAS las reglas deben cumplirse a la vez (AND) o si basta con UNA (OR)"
  - "Agregar NOT donde haga falta invertir una condición"
  - "Verificar el resultado con al menos una combinación de valores de prueba"
respuesta_orden: ["Identificar cada regla individual que debe cumplirse (o no)", "Decidir si TODAS las reglas deben cumplirse a la vez (AND) o si basta con UNA (OR)", "Agregar NOT donde haga falta invertir una condición", "Verificar el resultado con al menos una combinación de valores de prueba"]
explicacion: |
  El proceso va de identificar las reglas individuales a combinarlas
  correctamente con los operadores booleanos adecuados.
```

### 20 — Aplicación: diseñar una condición de acceso

```
metadata:
  materia: "informatica"
  tema: "algebra_booleana"
  nivel: "avanzado"
  tags: ["algebra_booleana", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Para permitir el acceso a un sistema sólo si el usuario tiene contraseña correcta Y no está bloqueado, conviene usar AND (ambas condiciones deben cumplirse), no OR."

pasos:
  - "OR permitiría el acceso con que se cumpla sólo una de las dos condiciones, lo cual sería un error de seguridad grave."

explicacion: |
  Verdadero: elegir el operador booleano correcto (AND vs. OR) tiene
  consecuencias prácticas reales, como en este caso de seguridad de
  acceso.
```
