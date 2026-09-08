# Química — Número atómico y másico (cuestionario, 20 preguntas VBLang)

> Tema: `QD`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Definición de número atómico

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["atomos", "protones"]

respuesta: verdadero
tipo: vf

enunciado: "El número atómico (Z) representa la cantidad de protones presentes en el núcleo de un átomo."

explicacion: |
  Correcto. El número atómico define la identidad del elemento químico.
```

### 2 — Composición del número másico

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["masa", "nucleo"]

respuesta: falso
tipo: vf

enunciado: "El número másico (A) incluye la masa de los electrones en el cálculo total."

explicacion: |
  Falso. El número másico es la suma de protones y neutrones; la masa de los electrones es despreciable y no se cuenta.
```

### 3 — Relación de masa atómica

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["calculo", "neutrones"]

respuesta: "neutrones"
tipo: completar
respuestas_validas:
  - "neutrones"

enunciado: "El número másico es igual a la suma de protones más ___."

explicacion: |
  El número másico (A) se calcula sumando los protones (Z) y los neutrones (N).
```

### 4 — Símbolo del número atómico

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["simbolos", "teoria"]

respuesta: "Z"
tipo: mc
opciones_explicitas: ["Z", "A", "N", "M"]

enunciado: "¿Qué letra se utiliza convencionalmente para representar el número atómico?"

explicacion: |
  La letra "Z" representa el número atómico; "A" representa el número másico.
```

### 5 — Símbolo del número másico

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["simbolos", "teoria"]

respuesta: "A"
tipo: mc
opciones_explicitas: ["A", "Z", "N", "M"]

enunciado: "¿Qué letra se utiliza convencionalmente para representar el número másico?"

explicacion: |
  La letra "A" representa el número másico (protones + neutrones).
```

### 6 — Cálculo de neutrones

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "intermedio"
  tags: ["nucleos", "neutrones", "calculo"]

variables:
  protones: random(1, 30)
  neutrones: random(0, 20)
  masico: protones + neutrones

respuesta: neutrones
tipo: completar
tolerancia_abs: 0

enunciado: "Un átomo tiene un número atómico (Z) de {protones} y un número másico (A) de {masico}. ¿Cuántos neutrones tiene?"

explicacion: |
  N = A - Z = {masico} - {protones} = {neutrones}.
```

### 7 — Cálculo del número másico

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "intermedio"
  tags: ["nucleos", "masa_atomica", "calculo"]

variables:
  protones: random(1, 30)
  neutrones: random(0, 20)
  masico: protones + neutrones

respuesta: masico
tipo: completar
tolerancia_abs: 0

enunciado: "Un átomo tiene {protones} protones y {neutrones} neutrones. ¿Cuál es su número másico (A)?"

explicacion: |
  A = Z + N = {protones} + {neutrones} = {masico}.
```

### 8 — Cálculo del número atómico

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "intermedio"
  tags: ["nucleos", "numero_atomico", "calculo"]

variables:
  protones: random(1, 30)
  neutrones: random(0, 20)
  masico: protones + neutrones

respuesta: protones
tipo: completar
tolerancia_abs: 0

enunciado: "Un átomo tiene un número másico (A) de {masico} y contiene {neutrones} neutrones. ¿Cuál es su número atómico (Z)?"

explicacion: |
  Z = A - N = {masico} - {neutrones} = {protones}.
```

### 9 — Electrones en átomos neutros

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["electrones", "atomos_neutros"]

respuesta: verdadero
tipo: vf

enunciado: "En un átomo neutro, el número de electrones es igual al número atómico Z."

explicacion: |
  Correcto. En un átomo neutro, la carga de los protones se compensa exactamente con la de los electrones, así que Z = electrones.
```

### 10 — Fórmula de los neutrones

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["formula", "conceptos"]

respuesta: "Z"
tipo: completar
respuestas_validas:
  - "Z"
  - "el numero atomico"

enunciado: "La fórmula para calcular el número de neutrones (N) es N = A - ___."

explicacion: |
  La fórmula es N = A - Z, donde A es el número másico y Z el número atómico (cantidad de protones).
```

### 11 — Notación isotópica: posición del número másico

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["notacion", "simbolo_quimico"]

respuesta: "Arriba a la izquierda del símbolo"
tipo: mc
opciones_explicitas: ["Arriba a la izquierda del símbolo", "Abajo a la izquierda del símbolo", "Arriba a la derecha del símbolo", "Abajo a la derecha del símbolo"]

enunciado: "En la notación isotópica ᴬ_Z X (A arriba, Z abajo, junto al símbolo del elemento), ¿en qué posición se ubica el número másico (A)?"

explicacion: |
  El número másico (A) se escribe como superíndice a la izquierda del símbolo; el número atómico (Z) va como subíndice, también a la izquierda.
```

### 12 — Cálculo del número másico (variante)

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "intermedio"
  tags: ["calculo", "protones", "neutrones"]

variables:
  Z: random(1, 20)
  N: random(0, 20)

respuesta: Z + N
tipo: completar
tolerancia_abs: 0

enunciado: "Un átomo tiene {Z} protones y {N} neutrones. ¿Cuál es su número másico (A)?"

explicacion: |
  El número másico (A) es la suma de protones y neutrones: A = {Z} + {N} = {Z + N}.
```

### 13 — Identidad del elemento

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["identidad", "numero_atomico"]

respuesta: verdadero
tipo: vf

enunciado: "Si un átomo cambia su número atómico (Z), ¿se convierte en un elemento químico distinto?"

explicacion: |
  Verdadero. El número atómico (Z) define la identidad del elemento; cambiar la cantidad de protones cambia de qué elemento se trata.
```

### 14 — Isóbaros

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "avanzado"
  tags: ["isobaros", "masa"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es posible que dos átomos de elementos distintos tengan el mismo número másico (A) pero distinto número atómico (Z)?"

explicacion: |
  Verdadero. Esos átomos se llaman isóbaros: tienen la misma masa total pero son elementos diferentes (a diferencia de los isótopos, que son el mismo elemento con distinta masa).
```

### 15 — Notación de isótopos

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["notacion", "isotopos"]

respuesta: "masico"
tipo: completar
respuestas_validas:
  - "masico"
  - "másico"

enunciado: "En la notación abreviada, una expresión como 'Carbono-14' indica el nombre del elemento seguido de su número ___."

explicacion: |
  El número que acompaña al nombre del elemento en esta notación hace referencia al número másico (protones + neutrones).
```

### 16 — Átomo neutro y electrones

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["atomos", "electrones", "protones"]

variables:
  protones: random(1, 30)

respuesta: protones
tipo: completar
tolerancia_abs: 0

enunciado: "Dado un átomo neutro con {protones} protones, ¿cuántos electrones tiene?"

explicacion: |
  En un átomo neutro la carga total es cero, así que la cantidad de electrones es igual a la de protones.
```

### 17 — Información del número atómico

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "intermedio"
  tags: ["numero_atomico", "teoria"]

respuesta: "cantidad de neutrones"
tipo: mc
opciones_explicitas: ["identidad del elemento", "cantidad de protones", "cantidad de electrones (si es neutro)", "cantidad de neutrones"]

enunciado: "Dado sólo el número atómico Z de un elemento, ¿qué información NO se puede obtener directamente?"

explicacion: |
  Z define la identidad, los protones, y (si es neutro) los electrones. Para los neutrones hace falta además el número másico A, ya que N = A - Z.
```

### 18 — Relación Z y A

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["neutrones", "formula"]

respuesta: verdadero
tipo: vf

enunciado: "Para saber cuántos neutrones tiene un átomo hace falta conocer tanto el número atómico (Z) como el número másico (A)."

explicacion: |
  Correcto. La relación es N = A - Z; sin ambos valores no se puede determinar la cantidad de neutrones.
```

### 19 — Cálculo de neutrones (ejemplo fijo)

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "basico"
  tags: ["calculo", "neutrones"]

variables:
  z: 17
  a: 35

respuesta: a - z
tipo: completar
respuestas_validas:
  - 18

enunciado: "Si Z = {z} y A = {a}, el átomo tiene ___ neutrones."

explicacion: |
  El número de neutrones se calcula restando el número atómico al número másico: 35 - 17 = 18.
```

### 20 — Isótopos vs. isóbaros

```
metadata:
  materia: "quimica"
  tema: "numero_atomico_masico"
  nivel: "avanzado"
  tags: ["isotopos", "isobaros"]

respuesta: "mismo Z, distinto A"
tipo: mc
opciones_explicitas: ["mismo Z, distinto A", "distinto Z, mismo A", "mismo Z, mismo A", "distinto Z, distinto A"]

enunciado: "Dos isótopos del mismo elemento tienen..."

explicacion: |
  Los isótopos comparten el número atómico Z (son el mismo elemento) pero difieren en el número másico A (distinta cantidad de neutrones).
```
