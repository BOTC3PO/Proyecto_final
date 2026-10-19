# Electrónica — Lógica combinacional: sumadores y multiplexores (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Salida combinacional

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["combinacional"]

enunciado: "En un circuito combinacional, la salida depende..."
tipo: mc
opciones_explicitas:
  - "Solo de las entradas actuales"
  - "De las entradas actuales y pasadas"
  - "Solo del reloj"
respuesta: "Solo de las entradas actuales"

explicacion: |
  No tiene memoria.
```

### 2 — Semisumador: suma

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["sumador"]

enunciado: "En un semisumador, la salida de suma equivale a..."
tipo: mc
opciones_explicitas:
  - "Una compuerta XOR"
  - "Una compuerta AND"
  - "Una compuerta NOT"
respuesta: "Una compuerta XOR"

explicacion: |
  S = A ⊕ B.
```

### 3 — Semisumador: acarreo

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["sumador"]

enunciado: "En un semisumador, el acarreo equivale a..."
tipo: mc
opciones_explicitas:
  - "Una compuerta AND"
  - "Una compuerta XOR"
  - "Una compuerta NOR"
respuesta: "Una compuerta AND"

explicacion: |
  C = A · B.
```

### 4 — Semi

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["sumador"]

respuesta: falso
tipo: vf

enunciado: "Un semisumador admite un acarreo de entrada."

explicacion: |
  Eso lo hace el sumador completo.
```

### 5 — Entradas del sumador completo

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["sumador"]

enunciado: "El sumador completo suma..."
tipo: mc
opciones_explicitas:
  - "Tres bits: A, B y el acarreo de entrada"
  - "Dos bits únicamente"
  - "Cuatro bits"
respuesta: "Tres bits: A, B y el acarreo de entrada"

explicacion: |
  Tiene salidas de suma y acarreo.
```

### 6 — Suma de dos bits

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["sumador", "calculo"]

variables:
  a: uno_de([0, 1])
  b: uno_de([0, 1])
  s: abs(a - b)
  c: a * b

respuesta: s
tipo: input
tolerancia_abs: 0

enunciado: "En un semisumador con A = {a} y B = {b}, ¿cuánto vale la salida de suma S (0 o 1)?"

pasos:
  - "S = A XOR B"

explicacion: |
  La suma coincide con una XOR.
```

### 7 — Acarreo del semisumador

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["sumador", "calculo"]

variables:
  a: uno_de([0, 1])
  b: uno_de([0, 1])
  c: a * b

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "En un semisumador con A = {a} y B = {b}, ¿cuánto vale el acarreo C (0 o 1)?"

pasos:
  - "C = A AND B"

explicacion: |
  El acarreo es 1 solo si ambos son 1.
```

### 8 — Suma del sumador completo

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["sumador", "calculo"]

variables:
  a: uno_de([0, 1])
  b: uno_de([0, 1])
  cin: uno_de([0, 1])
  s: (a + b + cin) - 2 * floor((a + b + cin) / 2)

respuesta: s
tipo: input
tolerancia_abs: 0

enunciado: "En un sumador completo con A = {a}, B = {b} y Cin = {cin}, ¿cuánto vale la suma S (0 o 1)?"

pasos:
  - "S es el bit menos significativo de A + B + Cin"

explicacion: |
  Se suman los tres bits y se toma el bit menos significativo.
```

### 9 — Acarreo del sumador completo

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["sumador", "calculo"]

variables:
  a: uno_de([0, 1])
  b: uno_de([0, 1])
  cin: uno_de([0, 1])
  cout: floor((a + b + cin) / 2)

respuesta: cout
tipo: input
tolerancia_abs: 0

enunciado: "En un sumador completo con A = {a}, B = {b} y Cin = {cin}, ¿cuánto vale el acarreo de salida Cout (0 o 1)?"

pasos:
  - "Cout es 1 si la suma de los tres bits es 2 o más"

explicacion: |
  El acarreo es 1 cuando hay al menos dos unos.
```

### 10 — Suma binaria en decimal

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["sumador", "calculo"]

variables:
  a: random(0, 15)
  b: random(0, 15)
  s: a + b

respuesta: s
tipo: input
tolerancia_abs: 0

enunciado: "Un sumador de 4 bits suma {a} y {b}. ¿Cuánto vale el resultado, en decimal (incluyendo el acarreo final)?"

pasos:
  - "{a} + {b}"

explicacion: |
  El resultado puede necesitar un quinto bit.
```

### 11 — Cuantos bits el resultado

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["sumador"]

enunciado: "El resultado de sumar dos números de 4 bits puede necesitar hasta..."
tipo: mc
opciones_explicitas:
  - "5 bits"
  - "4 bits"
  - "8 bits"
respuesta: "5 bits"

explicacion: |
  15 + 15 = 30, que requiere 5 bits.
```

### 12 — Ripple carry

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["sumador"]

respuesta: verdadero
tipo: vf

enunciado: "En un sumador de acarreo en cascada, el acarreo de salida de cada etapa entra a la siguiente."

explicacion: |
  Por eso se propaga por toda la cadena.
```

### 13 — Desventaja del ripple

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "avanzado"
  tags: ["sumador"]

enunciado: "La principal desventaja del sumador de acarreo en cascada es..."
tipo: mc
opciones_explicitas:
  - "La velocidad limitada por la propagación del acarreo"
  - "El consumo nulo"
  - "La imposibilidad de sumar"
respuesta: "La velocidad limitada por la propagación del acarreo"

explicacion: |
  Para ser más rápido se usa acarreo anticipado.
```

### 14 — Resta

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "avanzado"
  tags: ["sumador"]

enunciado: "La resta con circuitos sumadores se obtiene sumando..."
tipo: mc
opciones_explicitas:
  - "El complemento a dos del segundo número"
  - "El número negado dos veces"
  - "Un cero adicional"
respuesta: "El complemento a dos del segundo número"

explicacion: |
  Es la forma habitual en procesadores.
```

### 15 — MUX

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["mux"]

enunciado: "Un multiplexor..."
tipo: mc
opciones_explicitas:
  - "Elige una entre varias entradas según las líneas de selección"
  - "Suma dos números"
  - "Activa varias salidas a la vez"
respuesta: "Elige una entre varias entradas según las líneas de selección"

explicacion: |
  Es un conmutador digital.
```

### 16 — Líneas de selección

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["mux", "calculo"]

variables:
  n: uno_de([2, 3, 4, 5])
  entradas: 2 ^ n

respuesta: entradas
tipo: input
tolerancia_abs: 0

enunciado: "Un multiplexor tiene {n} líneas de selección. ¿Cuántas entradas de datos puede elegir?"

pasos:
  - "Entradas = 2^n"

explicacion: |
  Cada línea duplica las posibilidades.
```

### 17 — Selección necesaria

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["mux", "calculo"]

variables:
  n: uno_de([2, 3, 4, 5])
  entradas: 2 ^ n

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Se quiere un multiplexor de {entradas} entradas. ¿Cuántas líneas de selección necesita?"

pasos:
  - "n = log2(entradas)"

explicacion: |
  2 elevado a n da la cantidad de entradas.
```

### 18 — MUX 4 a 1

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["mux"]

enunciado: "Un multiplexor de 4 a 1 necesita..."
tipo: mc
opciones_explicitas:
  - "2 líneas de selección"
  - "1 línea de selección"
  - "4 líneas de selección"
respuesta: "2 líneas de selección"

explicacion: |
  2^2 = 4.
```

### 19 — Demultiplexor

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["mux"]

enunciado: "Un demultiplexor..."
tipo: mc
opciones_explicitas:
  - "Lleva una entrada a una de varias salidas"
  - "Elige una de varias entradas"
  - "Suma bits"
respuesta: "Lleva una entrada a una de varias salidas"

explicacion: |
  Es lo opuesto del multiplexor.
```

### 20 — Decodificador

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "intermedio"
  tags: ["decodificador"]

enunciado: "Un decodificador de 2 a 4 activa..."
tipo: mc
opciones_explicitas:
  - "Una de cuatro salidas según un código de 2 bits"
  - "Cuatro salidas a la vez"
  - "Una entrada de cuatro"
respuesta: "Una de cuatro salidas según un código de 2 bits"

explicacion: |
  Selecciona una salida entre 2^n.
```

### 21 — Uso del decodificador

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "avanzado"
  tags: ["decodificador"]

enunciado: "Un uso típico de un decodificador es..."
tipo: mc
opciones_explicitas:
  - "Seleccionar una memoria o un dispositivo"
  - "Amplificar una señal"
  - "Rectificar"
respuesta: "Seleccionar una memoria o un dispositivo"

explicacion: |
  También manejar displays.
```

### 22 — Comparador

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "avanzado"
  tags: ["comparador"]

enunciado: "La igualdad de dos bits se detecta con una compuerta..."
tipo: mc
opciones_explicitas:
  - "XNOR"
  - "NAND de una entrada"
  - "NOT"
respuesta: "XNOR"

explicacion: |
  La XNOR da 1 cuando son iguales.
```

### 23 — Acarreo en inglés

```
metadata:
  materia: "electronica"
  tema: "logica_combinacional_sumadores_multiplexores"
  nivel: "basico"
  tags: ["sumador"]

tipo: completar
enunciado: "El bit que se traslada a la posición siguiente al sumar 1 + 1 se llama ___."
respuestas_validas:
  - "acarreo"
  - "carry"

explicacion: |
  En inglés, carry.
```
