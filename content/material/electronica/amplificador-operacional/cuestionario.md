# Electrónica — Amplificador operacional (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Entradas

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp"]

enunciado: "Un amplificador operacional tiene..."
tipo: mc
opciones_explicitas:
  - "Una entrada inversora y una no inversora"
  - "Una sola entrada"
  - "Tres entradas iguales"
respuesta: "Una entrada inversora y una no inversora"

explicacion: |
  Amplifica la diferencia entre ambas.
```

### 2 — Ganancia ideal

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp"]

enunciado: "En el modelo ideal, la ganancia del operacional (sin realimentación) es..."
tipo: mc
opciones_explicitas:
  - "Muy grande, tendiendo a infinito"
  - "Igual a uno"
  - "Cero"
respuesta: "Muy grande, tendiendo a infinito"

explicacion: |
  Por eso se usa realimentación.
```

### 3 — Resistencia de entrada ideal

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp"]

enunciado: "En el modelo ideal, la resistencia de entrada es..."
tipo: mc
opciones_explicitas:
  - "Muy alta"
  - "Muy baja"
  - "Igual a la de salida"
respuesta: "Muy alta"

explicacion: |
  Casi no toma corriente de la señal.
```

### 4 — Resistencia de salida ideal

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp"]

enunciado: "En el modelo ideal, la resistencia de salida es..."
tipo: mc
opciones_explicitas:
  - "Muy baja"
  - "Muy alta"
  - "Infinita"
respuesta: "Muy baja"

explicacion: |
  Puede entregar su tensión sin que la carga la altere.
```

### 5 — Realimentación negativa

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp"]

enunciado: "La realimentación negativa conecta..."
tipo: mc
opciones_explicitas:
  - "Una parte de la salida a la entrada inversora"
  - "La salida a la alimentación"
  - "Las dos entradas a masa"
respuesta: "Una parte de la salida a la entrada inversora"

explicacion: |
  Así la ganancia depende de las resistencias externas.
```

### 6 — Cortocircuito virtual

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp"]

respuesta: verdadero
tipo: vf

enunciado: "Con realimentación negativa y operación lineal, las dos entradas del operacional ideal quedan al mismo potencial."

explicacion: |
  Es el llamado cortocircuito virtual.
```

### 7 — Ganancia inversora

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp", "calculo"]

variables:
  rf: uno_de([10000, 20000, 47000, 100000])
  rin: uno_de([1000, 2000, 10000])
  av: redondear(-rf / rin, 2)

respuesta: av
tipo: input
tolerancia_abs: 0.05

enunciado: "Un amplificador inversor tiene Rf = {rf} Ω y Rin = {rin} Ω. ¿Cuánto vale su ganancia? (con signo)"

pasos:
  - "Av = −Rf / Rin"

explicacion: |
  La ganancia es negativa porque invierte la señal.
```

### 8 — Salida inversora

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp", "calculo"]

variables:
  rf: uno_de([10000, 20000, 50000])
  rin: uno_de([1000, 2000, 5000, 10000])
  vin: uno_de([0.1, 0.2, 0.5])
  vo: redondear(-rf / rin * vin, 2)

respuesta: vo
tipo: input
tolerancia_abs: 0.02

enunciado: "Un amplificador inversor con Rf = {rf} Ω y Rin = {rin} Ω recibe {vin} V. ¿Cuánto vale la salida, en V? (con signo)"

pasos:
  - "Vo = −Rf / Rin × Vin"

explicacion: |
  Se multiplica la ganancia por la entrada.
```

### 9 — Ganancia no inversora

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp", "calculo"]

variables:
  rf: uno_de([9000, 10000, 20000, 47000])
  rg: uno_de([1000, 2000, 10000])
  av: redondear(1 + rf / rg, 2)

respuesta: av
tipo: input
tolerancia_abs: 0.05

enunciado: "Un amplificador no inversor tiene Rf = {rf} Ω y Rg = {rg} Ω. ¿Cuánto vale su ganancia?"

pasos:
  - "Av = 1 + Rf / Rg"

explicacion: |
  Siempre es mayor o igual que 1.
```

### 10 — Salida no inversora

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp", "calculo"]

variables:
  rf: uno_de([9000, 10000, 20000])
  rg: uno_de([1000, 2000, 10000])
  vin: uno_de([0.1, 0.2, 0.5])
  vo: redondear((1 + rf / rg) * vin, 2)

respuesta: vo
tipo: input
tolerancia_abs: 0.02

enunciado: "Un amplificador no inversor con Rf = {rf} Ω y Rg = {rg} Ω recibe {vin} V. ¿Cuánto vale la salida, en V?"

pasos:
  - "Vo = (1 + Rf / Rg) × Vin"

explicacion: |
  La salida está en fase con la entrada.
```

### 11 — Rf necesaria

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "avanzado"
  tags: ["opamp", "calculo"]

variables:
  rin: uno_de([1000, 2000, 5000])
  g: uno_de([5, 10, 20])
  rf: rin * g

respuesta: rf
tipo: input
tolerancia_abs: 1

enunciado: "Se quiere un amplificador inversor de ganancia −{g} con Rin = {rin} Ω. ¿Qué Rf hace falta, en Ω?"

pasos:
  - "Rf = |Av| × Rin"

explicacion: |
  Se despeja Rf de la fórmula de ganancia.
```

### 12 — Seguidor

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp"]

enunciado: "El seguidor de tensión tiene una ganancia de..."
tipo: mc
opciones_explicitas:
  - "1"
  - "10"
  - "0"
respuesta: "1"

explicacion: |
  Copia la entrada y aísla etapas.
```

### 13 — Seguidor y corriente

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp"]

respuesta: verdadero
tipo: vf

enunciado: "El seguidor de tensión sirve para aislar etapas porque toma muy poca corriente de la fuente de señal."

explicacion: |
  Tiene una resistencia de entrada muy alta.
```

### 14 — Inversor

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp"]

respuesta: falso
tipo: vf

enunciado: "La salida de un amplificador inversor está en fase con la entrada."

explicacion: |
  Está invertida respecto de la entrada.
```

### 15 — Ganancia no inversora menor a uno

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp"]

respuesta: falso
tipo: vf

enunciado: "Un amplificador no inversor puede tener una ganancia menor que 1."

explicacion: |
  Av = 1 + Rf / Rg es siempre mayor o igual que 1.
```

### 16 — Comparador

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp", "comparador"]

enunciado: "Un operacional sin realimentación que compara dos tensiones se llama..."
tipo: mc
opciones_explicitas:
  - "Comparador"
  - "Seguidor"
  - "Integrador"
respuesta: "Comparador"

explicacion: |
  Su salida satura en uno u otro extremo.
```

### 17 — Salida del comparador

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp", "comparador"]

enunciado: "En un comparador, si la entrada no inversora es mayor que la inversora, la salida..."
tipo: mc
opciones_explicitas:
  - "Satura hacia la tensión positiva"
  - "Satura hacia la negativa"
  - "Vale cero"
respuesta: "Satura hacia la tensión positiva"

explicacion: |
  Por la ganancia enorme sin realimentación.
```

### 18 — Saturación de salida

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp"]

enunciado: "Si el cálculo da una salida mayor que la alimentación, en la práctica..."
tipo: mc
opciones_explicitas:
  - "La señal se recorta"
  - "El operacional amplifica más"
  - "La alimentación aumenta"
respuesta: "La señal se recorta"

explicacion: |
  La salida no puede superar las tensiones de alimentación.
```

### 19 — Recorte

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "avanzado"
  tags: ["opamp", "calculo"]

variables:
  vcc: uno_de([5, 9, 12])
  vo: vcc

respuesta: vo
tipo: input
tolerancia_abs: 0.1

enunciado: "Un amplificador con ganancia alta recibe una señal que calcularía una salida de 20 V, pero se alimenta con {vcc} V (salida positiva máxima aproximada igual a la alimentación). ¿Cuánto vale la salida, en V?"

pasos:
  - "La salida no supera la alimentación"

explicacion: |
  El operacional real satura cerca de la tensión de alimentación.
```

### 20 — Sumador

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "avanzado"
  tags: ["opamp"]

enunciado: "Con varias entradas conectadas a través de resistencias a la entrada inversora, se obtiene un..."
tipo: mc
opciones_explicitas:
  - "Sumador inversor"
  - "Seguidor"
  - "Comparador"
respuesta: "Sumador inversor"

explicacion: |
  Suma las entradas con sus ganancias.
```

### 21 — Realimentación

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "basico"
  tags: ["opamp"]

tipo: completar
enunciado: "Para que la ganancia dependa de los componentes externos se usa realimentación ___."
respuestas_validas:
  - "negativa"

explicacion: |
  Estabiliza y fija la ganancia.
```

### 22 — Alta frecuencia

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "avanzado"
  tags: ["opamp"]

respuesta: falso
tipo: vf

enunciado: "La ganancia de un operacional real se mantiene igual en todas las frecuencias."

explicacion: |
  Se reduce a frecuencias altas.
```

### 23 — Dónde se usa

```
metadata:
  materia: "electronica"
  tema: "amplificador_operacional"
  nivel: "intermedio"
  tags: ["opamp", "aplicaciones"]

enunciado: "Un uso típico del operacional es..."
tipo: mc
opciones_explicitas:
  - "Acondicionar la señal de un sensor"
  - "Rectificar la red"
  - "Almacenar datos"
respuesta: "Acondicionar la señal de un sensor"

explicacion: |
  Amplifica y adapta señales pequeñas.
```
