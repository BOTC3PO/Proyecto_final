# Electrónica — Señales analógicas y digitales: ADC y DAC (cuestionario, 22 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Señal analógica

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "basico"
  tags: ["adc"]

enunciado: "Una señal analógica es aquella que..."
tipo: mc
opciones_explicitas:
  - "Puede tomar cualquier valor en un rango y varía continuamente"
  - "Solo toma dos valores"
  - "Solo existe en computadoras"
respuesta: "Puede tomar cualquier valor en un rango y varía continuamente"

explicacion: |
  Una digital toma un conjunto finito de valores.
```

### 2 — Señal digital binaria

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "basico"
  tags: ["adc"]

enunciado: "Una señal digital binaria toma..."
tipo: mc
opciones_explicitas:
  - "Dos valores"
  - "Infinitos valores"
  - "Tres valores"
respuesta: "Dos valores"

explicacion: |
  Alto y bajo, 1 y 0.
```

### 3 — Función del ADC

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "basico"
  tags: ["adc"]

enunciado: "Un conversor ADC..."
tipo: mc
opciones_explicitas:
  - "Convierte una tensión en un número"
  - "Convierte un número en tensión"
  - "Amplifica una señal"
respuesta: "Convierte una tensión en un número"

explicacion: |
  El DAC hace lo contrario.
```

### 4 — Función del DAC

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "basico"
  tags: ["adc"]

enunciado: "Un conversor DAC..."
tipo: mc
opciones_explicitas:
  - "Convierte un número en una tensión"
  - "Mide temperatura"
  - "Elimina el ruido"
respuesta: "Convierte un número en una tensión"

explicacion: |
  Hace el camino inverso al ADC.
```

### 5 — Operaciones del ADC

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc"]

enunciado: "Las dos operaciones básicas de un ADC son..."
tipo: mc
opciones_explicitas:
  - "Muestreo y cuantización"
  - "Rectificación y filtrado"
  - "Amplificación y atenuación"
respuesta: "Muestreo y cuantización"

explicacion: |
  Primero se toman valores en el tiempo y después se redondean a niveles.
```

### 6 — Niveles

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "basico"
  tags: ["adc", "calculo"]

variables:
  n: uno_de([4, 6, 8, 10, 12])
  niveles: 2 ^ n

respuesta: niveles
tipo: input
tolerancia_abs: 0.5

enunciado: "Un ADC tiene {n} bits. ¿Cuántos niveles distintos puede distinguir?"

pasos:
  - "Niveles = 2^n"

explicacion: |
  Cada bit duplica la cantidad de niveles.
```

### 7 — Resolución del ADC

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc", "calculo"]

variables:
  n: uno_de([8, 10, 12])
  vref: uno_de([3.3, 5])
  res: redondear(vref / 2 ^ n * 1000, 2)

respuesta: res
tipo: input
tolerancia_abs: 0.02

enunciado: "Un ADC de {n} bits tiene una referencia de {vref} V. ¿Cuál es su resolución, en mV? (redondeá a dos decimales)"

pasos:
  - "Resolución = Vref / 2^n"
  - "Pasar V a mV"

explicacion: |
  Es el escalón de tensión más pequeño que distingue.
```

### 8 — Código medido

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc", "calculo"]

variables:
  n: uno_de([8, 10])
  vref: 5
  vin: uno_de([1, 2, 2.5, 4])
  cod: floor(vin / vref * 2 ^ n)

respuesta: cod
tipo: input
tolerancia_abs: 1

enunciado: "Un ADC de {n} bits con referencia de 5 V mide una entrada de {vin} V. ¿Qué código entrega (entero, sin redondear hacia arriba)?"

pasos:
  - "Código = Vin / Vref × 2^n"
  - "Truncar al entero"

explicacion: |
  El código es proporcional a la fracción del rango.
```

### 9 — Tensión del DAC

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc", "calculo"]

variables:
  n: 8
  cod: uno_de([64, 128, 192, 255])
  vref: 5
  vout: redondear(cod / 2 ^ n * vref, 2)

respuesta: vout
tipo: input
tolerancia_abs: 0.03

enunciado: "Un DAC de {n} bits con referencia de 5 V recibe el código {cod}. ¿Qué tensión entrega, en V? (redondeá a dos decimales)"

pasos:
  - "Vout = código / 2^n × Vref"

explicacion: |
  La salida es proporcional al código.
```

### 10 — Bits necesarios

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "avanzado"
  tags: ["adc", "calculo"]

variables:
  niv: uno_de([16, 64, 256, 1024])
  n: log10(niv) / log10(2)

respuesta: n
tipo: input
tolerancia_abs: 0.1

enunciado: "Se necesitan distinguir {niv} niveles. ¿Cuántos bits debe tener, como mínimo, el ADC?"

pasos:
  - "n = log2(niveles)"

explicacion: |
  2 elevado al número de bits da la cantidad de niveles.
```

### 11 — Mínima frecuencia de muestreo

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc", "calculo"]

variables:
  f: uno_de([500, 1000, 5000, 20000])
  fs: 2 * f

respuesta: fs
tipo: input
tolerancia_abs: 1

enunciado: "Una señal contiene componentes hasta {f} Hz. ¿Cuál es el valor mínimo (límite) que debe superar la frecuencia de muestreo, en Hz, según Nyquist?"

pasos:
  - "fs > 2 × fmax"

explicacion: |
  La frecuencia de muestreo debe superar el doble de la máxima.
```

### 12 — Teorema de muestreo

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc", "nyquist"]

enunciado: "Para poder reconstruir una señal, la frecuencia de muestreo debe ser..."
tipo: mc
opciones_explicitas:
  - "Mayor que el doble de su frecuencia máxima"
  - "Igual a su frecuencia máxima"
  - "Menor que su frecuencia mínima"
respuesta: "Mayor que el doble de su frecuencia máxima"

explicacion: |
  Es el teorema de Nyquist-Shannon.
```

### 13 — Efecto por muestrear lento

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc", "nyquist"]

tipo: completar
enunciado: "El efecto que aparece al muestrear demasiado lento, donde las altas frecuencias se confunden con bajas, se llama ___."
respuestas_validas:
  - "aliasing"
  - "alias"

explicacion: |
  Se evita con un filtro pasa bajos antes del ADC.
```

### 14 — Antialiasing

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc", "nyquist"]

enunciado: "Para evitar el aliasing se coloca antes del ADC un filtro..."
tipo: mc
opciones_explicitas:
  - "Pasa bajos"
  - "Pasa altos"
  - "Rectificador"
respuesta: "Pasa bajos"

explicacion: |
  Elimina las componentes de frecuencia demasiado alta.
```

### 15 — Más bits

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "basico"
  tags: ["adc"]

respuesta: verdadero
tipo: vf

enunciado: "Agregar un bit a un ADC duplica la cantidad de niveles."

explicacion: |
  Niveles = 2^n.
```

### 16 — Resolución y bits

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "basico"
  tags: ["adc"]

respuesta: verdadero
tipo: vf

enunciado: "A mayor cantidad de bits, la resolución del ADC mejora (el escalón es más chico)."

explicacion: |
  Resolución = Vref / 2^n.
```

### 17 — Error de cuantización

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc"]

respuesta: falso
tipo: vf

enunciado: "El error de cuantización se puede eliminar completamente aumentando la frecuencia de muestreo."

explicacion: |
  Depende de la resolución en bits, no del muestreo.
```

### 18 — Mundo físico

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "basico"
  tags: ["adc"]

respuesta: verdadero
tipo: vf

enunciado: "Las magnitudes del mundo físico, como la temperatura, son por naturaleza analógicas."

explicacion: |
  Por eso se necesitan conversores.
```

### 19 — Audio de CD

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "avanzado"
  tags: ["adc", "nyquist"]

enunciado: "El audio de un CD se muestrea a 44,1 kHz porque..."
tipo: mc
opciones_explicitas:
  - "Hay que superar el doble de los 20 kHz que oye una persona"
  - "Es la frecuencia de la red"
  - "Es la que usa un teléfono"
respuesta: "Hay que superar el doble de los 20 kHz que oye una persona"

explicacion: |
  20 kHz × 2 = 40 kHz.
```

### 20 — Ciclo del sistema

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "intermedio"
  tags: ["adc", "aplicaciones"]

enunciado: "En un sistema típico de control, el orden es..."
tipo: mc
opciones_explicitas:
  - "Sensor, acondicionamiento, ADC, microcontrolador, actuador"
  - "Actuador, ADC, sensor, microcontrolador"
  - "Microcontrolador, sensor, actuador, ADC"
respuesta: "Sensor, acondicionamiento, ADC, microcontrolador, actuador"

explicacion: |
  El sensor mide, el ADC convierte, el micro decide, el actuador actúa.
```

### 21 — DAC con PWM

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "avanzado"
  tags: ["adc"]

enunciado: "Muchos microcontroladores sin DAC producen una tensión variable usando..."
tipo: mc
opciones_explicitas:
  - "PWM más un filtro"
  - "Un transformador"
  - "Un diodo Zener"
respuesta: "PWM más un filtro"

explicacion: |
  El filtro promedia el ancho de los pulsos.
```

### 22 — Código máximo

```
metadata:
  materia: "electronica"
  tema: "senales_analogicas_y_digitales_adc_dac"
  nivel: "avanzado"
  tags: ["adc"]

respuesta: verdadero
tipo: vf

enunciado: "Un ADC de 10 bits entrega códigos de 0 a 1023."

explicacion: |
  2^10 = 1024 niveles; el código máximo es 2^n − 1.
```
