# Informática — Sistemas de numeración: binario y hexadecimal (cuestionario, 24 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta. Binario (base 2): 2 dígitos.
> Hexadecimal (base 16): 16 dígitos (0-9, A-F). 1 dígito hex = 4 bits.

---

### 1 — Qué es un sistema posicional

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "vocabulario"]

enunciado: "¿Qué caracteriza a un sistema de numeración posicional?"
tipo: mc
opciones_explicitas:
  - "El valor de cada dígito depende de la posición en la que está escrito, según una potencia de la base"
  - "Cada dígito vale siempre lo mismo, sin importar dónde esté escrito"
  - "Sólo existe en el sistema decimal"
respuesta: "El valor de cada dígito depende de la posición en la que está escrito, según una potencia de la base"

explicacion: |
  El decimal es sólo uno de los tantos sistemas posicionales posibles.
```

### 2 — Potencias de 10 en decimal

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el sistema decimal, cada posición de un número vale una potencia de 10."

explicacion: |
  Por eso se llama \"base 10\": decenas, centenas, etc. son potencias de
  10.
```

### 3 — Potencias de 2 en binario

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el sistema binario, cada posición de un número vale una potencia de 2."

explicacion: |
  Es la base que usan internamente las computadoras.
```

### 4 — Potencias de 16 en hexadecimal

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "En el sistema hexadecimal, cada posición de un número vale una potencia de 16."

explicacion: |
  \"Hexa\" (seis) + \"decimal\" (diez) = dieciséis, la base de este
  sistema.
```

### 5 — Cuántos dígitos tiene el binario

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "vocabulario"]

enunciado: "¿Cuántos dígitos posibles usa el sistema binario?"
tipo: mc
opciones_explicitas:
  - "2 (0 y 1)"
  - "10 (0 al 9)"
  - "16 (0 al 9 y A a F)"
respuesta: "2 (0 y 1)"

explicacion: |
  Corresponde a los dos estados naturales de un componente electrónico.
```

### 6 — Cuántos dígitos tiene el hexadecimal

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "vocabulario"]

enunciado: "¿Cuántos dígitos posibles usa el sistema hexadecimal?"
tipo: mc
opciones_explicitas:
  - "16 (0 al 9 y A a F)"
  - "2 (0 y 1)"
  - "10 (0 al 9)"
respuesta: "16 (0 al 9 y A a F)"

explicacion: |
  Los 10 dígitos decimales más 6 letras para los valores 10 a 15.
```

### 7 — Qué valor decimal es la letra A

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "vocabulario"]

enunciado: "En hexadecimal, ¿qué valor decimal representa la letra A?"
tipo: mc
opciones_explicitas:
  - "10"
  - "1"
  - "11"
respuesta: "10"

explicacion: |
  Las letras A a F representan los valores 10 a 15, en orden.
```

### 8 — Qué valor decimal es la letra F

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "vocabulario"]

enunciado: "En hexadecimal, ¿qué valor decimal representa la letra F?"
tipo: mc
opciones_explicitas:
  - "15"
  - "6"
  - "16"
respuesta: "15"

explicacion: |
  F es la última letra usada, y representa el valor más alto de un solo
  dígito hexadecimal.
```

### 9 — Convertir binario a decimal (4 bits)

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "calculo"]

variables:
  b3: uno_de([0, 1])
  b2: uno_de([0, 1])
  b1: uno_de([0, 1])
  b0: uno_de([0, 1])

respuesta: b3 * 8 + b2 * 4 + b1 * 2 + b0 * 1
tipo: input
tolerancia_abs: 0

enunciado: "El número binario {b3}{b2}{b1}{b0}, ¿a qué valor decimal equivale?"

pasos:
  - "{b3}×8 + {b2}×4 + {b1}×2 + {b0}×1"

explicacion: |
  Se suma el valor posicional de cada bit que esté en 1.
```

### 10 — Convertir binario a decimal (otro caso)

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "calculo"]

variables:
  b3: uno_de([0, 1])
  b2: uno_de([0, 1])
  b1: uno_de([0, 1])
  b0: uno_de([0, 1])

respuesta: b3 * 8 + b2 * 4 + b1 * 2 + b0 * 1
tipo: input
tolerancia_abs: 0

enunciado: "El número binario {b3}{b2}{b1}{b0}, ¿a qué valor decimal equivale?"

explicacion: |
  Mismo procedimiento: sumar 8, 4, 2 o 1 según qué bits estén en 1.
```

### 11 — El máximo con 4 bits

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Con 4 bits (1111 en binario), el valor máximo representable es 15 en decimal."

explicacion: |
  1111 = 8+4+2+1 = 15, y coincide con el dígito hexadecimal más alto (F).
```

### 12 — Por qué las computadoras usan binario

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Las computadoras usan binario internamente porque sus componentes electrónicos trabajan naturalmente con dos estados (encendido/apagado)."

explicacion: |
  Representar de forma confiable más de dos estados sería mucho más
  complejo electrónicamente.
```

### 13 — Un dígito hex representa 4 bits

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Cada dígito hexadecimal representa exactamente 4 bits, porque 16 es 2 elevado a la 4."

explicacion: |
  Es la razón matemática de por qué el hexadecimal es tan práctico para
  representar binario de forma compacta.
```

### 14 — Dos dígitos hex son un byte

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Dos dígitos hexadecimales representan exactamente 1 byte (8 bits)."

explicacion: |
  Cada dígito hex son 4 bits, así que dos dígitos son 4+4 = 8 bits.
```

### 15 — Agrupar 1010 en hexadecimal

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "avanzado"
  tags: ["sistemas_numeracion", "problema"]

enunciado: "El grupo de 4 bits \"1010\", ¿a qué dígito hexadecimal corresponde?"
tipo: mc
opciones_explicitas:
  - "A"
  - "8"
  - "5"
respuesta: "A"

explicacion: |
  1010 en binario es 8+0+2+0 = 10 en decimal, que en hexadecimal es la
  letra A.
```

### 16 — Agrupar 0110 en hexadecimal

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "avanzado"
  tags: ["sistemas_numeracion", "problema"]

enunciado: "El grupo de 4 bits \"0110\", ¿a qué dígito hexadecimal corresponde?"
tipo: mc
opciones_explicitas:
  - "6"
  - "B"
  - "9"
respuesta: "6"

explicacion: |
  0110 en binario es 0+4+2+0 = 6 en decimal, que en hexadecimal se
  escribe igual (6), porque es menor a 10.
```

### 17 — Calcular un valor en base 16 (sin letras)

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "avanzado"
  tags: ["sistemas_numeracion", "calculo"]

variables:
  digito_alto: random(1, 9)
  digito_bajo: random(0, 9)

respuesta: digito_alto * 16 + digito_bajo
tipo: input
tolerancia_abs: 0

enunciado: "Un número hexadecimal de dos dígitos es \"{digito_alto}{digito_bajo}\" (los dos dígitos son números, sin letras). ¿A qué valor decimal equivale?"

pasos:
  - "{digito_alto} × 16 + {digito_bajo}"

explicacion: |
  El dígito de la izquierda vale por la posición de las \"dieciseises\";
  el de la derecha, por las unidades.
```

### 18 — Despejar un dígito hexadecimal

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "avanzado"
  tags: ["sistemas_numeracion", "calculo"]

variables:
  digito_alto: random(1, 9)
  digito_bajo: random(0, 9)
  valor_decimal: digito_alto * 16 + digito_bajo

respuesta: digito_alto
tipo: input
tolerancia_abs: 0.1

enunciado: "Un número hexadecimal de dos dígitos (ambos sin letras) vale {valor_decimal} en decimal, y su dígito de la derecha es {digito_bajo}. ¿Cuál es su dígito de la izquierda?"

explicacion: |
  Se despeja restando el dígito de la derecha y dividiendo por 16.
```

### 19 — El hexadecimal no es un sistema totalmente distinto

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El hexadecimal es, en la práctica, una forma compacta de escribir binario: cada dígito hex corresponde exactamente a un grupo de 4 bits, sin ninguna conversión aproximada de por medio."

explicacion: |
  Por eso pasar de binario a hexadecimal (y viceversa) es directo,
  agrupando de a 4 bits.
```

### 20 — Dos dígitos hex representan más que dos bits

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "avanzado"
  tags: ["sistemas_numeracion", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "Con la misma cantidad de dígitos (dos), el sistema hexadecimal puede representar muchos más valores distintos que el sistema binario."

explicacion: |
  Dos dígitos hex representan hasta 256 valores (16×16); dos dígitos
  binarios sólo representan hasta 4 (2×2).
```

### 21 — Ordenar sistemas por cuántos valores representa un dígito

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "orden"]

tipo: ordenar
enunciado: "Ordená estos sistemas de numeración de menor a mayor cantidad de valores distintos que puede representar un solo dígito."
opciones_explicitas:
  - "Decimal"
  - "Binario"
  - "Hexadecimal"
respuesta_orden: ["Binario", "Decimal", "Hexadecimal"]

explicacion: |
  Binario tiene 2 dígitos posibles, decimal 10, hexadecimal 16.
```

### 22 — Verificar una conversión binario-decimal (con error a veces)

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion", "verificacion"]

variables:
  b3: uno_de([0, 1])
  b2: uno_de([0, 1])
  b1: uno_de([0, 1])
  b0: uno_de([0, 1])
  correcto: b3 * 8 + b2 * 4 + b1 * 2 + b0 * 1
  error: uno_de([0, 0, 0, 3, -3])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "¿Está bien calculado esto? Binario {b3}{b2}{b1}{b0}, valor decimal informado: {mostrado}."

explicacion: |
  Se vuelve a sumar el valor posicional de cada bit y se compara.
```

### 23 — Completar el valor de un bit

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "intermedio"
  tags: ["sistemas_numeracion"]

variables:
  b3: uno_de([0, 1])
  b2: uno_de([0, 1])
  b1: uno_de([0, 1])
  b0: uno_de([0, 1])
  decimal: b3 * 8 + b2 * 4 + b1 * 2 + b0 * 1

tipo: completar
enunciado: "El binario {b3}{b2}{b1}{b0} vale {decimal} en decimal. Completá: ___ (el bit más a la izquierda) = {b3}."
respuestas_validas:
  - b3

explicacion: |
  Es sólo identificar el bit ya dado en el enunciado.
```

### 24 — Sistemas de numeración (cierre)

```
metadata:
  materia: "informatica"
  tema: "sistemas_numeracion"
  nivel: "basico"
  tags: ["sistemas_numeracion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El binario (base 2) es el sistema que usan las computadoras internamente; el hexadecimal (base 16) es una forma compacta de escribir ese mismo binario, agrupando de a 4 bits por cada dígito."

explicacion: |
  Es la idea central de todo el tema.
```
