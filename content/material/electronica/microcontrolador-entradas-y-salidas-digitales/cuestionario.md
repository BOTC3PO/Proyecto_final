# Electrónica — Microcontrolador: entradas y salidas digitales (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Dos usos

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io"]

enunciado: "Un pin digital de un microcontrolador puede configurarse como..."
tipo: mc
opciones_explicitas:
  - "Entrada o salida"
  - "Solo entrada"
  - "Solo salida"
respuesta: "Entrada o salida"

explicacion: |
  Se define en la configuración.
```

### 2 — Nivel alto

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io"]

enunciado: "Un pin digital de salida en nivel alto entrega aproximadamente..."
tipo: mc
opciones_explicitas:
  - "La tensión de alimentación"
  - "0 V"
  - "Una tensión negativa"
respuesta: "La tensión de alimentación"

explicacion: |
  Por ejemplo 5 V o 3,3 V.
```

### 3 — Funciones Arduino

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io"]

enunciado: "En Arduino, la función que lee un pin digital es..."
tipo: mc
opciones_explicitas:
  - "digitalRead"
  - "digitalWrite"
  - "pinMode"
respuesta: "digitalRead"

explicacion: |
  digitalWrite escribe y pinMode configura.
```

### 4 — Corriente del pin

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "limites"]

enunciado: "Los pines de un microcontrolador entregan..."
tipo: mc
opciones_explicitas:
  - "Corrientes pequeñas"
  - "Corrientes de varios amperios"
  - "Corriente ilimitada"
respuesta: "Corrientes pequeñas"

explicacion: |
  Por eso las cargas exigentes se manejan con un transistor.
```

### 5 — Motor directo

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io", "limites"]

respuesta: falso
tipo: vf

enunciado: "Es correcto conectar un motor de potencia directamente a un pin del microcontrolador."

explicacion: |
  Se usa un transistor o un driver.
```

### 6 — Resistencia de un LED

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "calculo"]

variables:
  vcc: uno_de([3.3, 5])
  vled: uno_de([1.8, 2, 2.2])
  i: uno_de([5, 10, 15])
  r: redondear((vcc - vled) / (i / 1000), 0)

respuesta: r
tipo: input
tolerancia_abs: 1

enunciado: "Un pin de {vcc} V maneja un LED de {vled} V con {i} mA. ¿Qué resistencia en serie corresponde, en Ω?"

pasos:
  - "R = (V − Vled) / I"

explicacion: |
  Se divide la tensión sobrante por la corriente.
```

### 7 — Entrada flotante

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io", "pullup"]

enunciado: "Un pin de entrada sin conexión definida, al aire, se llama..."
tipo: mc
opciones_explicitas:
  - "Flotante"
  - "Saturado"
  - "Cortado"
respuesta: "Flotante"

explicacion: |
  Puede leer valores aleatorios por ruido.
```

### 8 — Entrada flotante

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io", "pullup"]

respuesta: falso
tipo: vf

enunciado: "Un pin de entrada flotante lee siempre 0."

explicacion: |
  Su lectura es indeterminada y puede variar con el ruido.
```

### 9 — Pull-up

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io", "pullup"]

enunciado: "Con una resistencia pull-up y un pulsador a masa, en reposo el pin lee..."
tipo: mc
opciones_explicitas:
  - "1"
  - "0"
  - "Un valor aleatorio"
respuesta: "1"

explicacion: |
  Al presionar, el pin va a masa y lee 0.
```

### 10 — Pull-down

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io", "pullup"]

enunciado: "Con una resistencia pull-down, en reposo el pin lee..."
tipo: mc
opciones_explicitas:
  - "0"
  - "1"
  - "Un valor aleatorio"
respuesta: "0"

explicacion: |
  Al presionar el pulsador a la alimentación, lee 1.
```

### 11 — Pull-up interna

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "pullup"]

respuesta: verdadero
tipo: vf

enunciado: "Muchos microcontroladores tienen resistencias pull-up internas activables por software."

explicacion: |
  Así no hace falta agregar una externa.
```

### 12 — Pull-up y pulsador a masa

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "pullup"]

enunciado: "En un pulsador con pull-up, el nivel que indica 'presionado' es..."
tipo: mc
opciones_explicitas:
  - "0"
  - "1"
  - "Indefinido"
respuesta: "0"

explicacion: |
  El pulsador conecta el pin a masa.
```

### 13 — Qué es el rebote

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io", "rebote"]

enunciado: "El rebote de un pulsador consiste en que..."
tipo: mc
opciones_explicitas:
  - "Los contactos generan varios cambios rápidos antes de estabilizarse"
  - "El pulsador se rompe"
  - "El pin se quema"
respuesta: "Los contactos generan varios cambios rápidos antes de estabilizarse"

explicacion: |
  Dura unos pocos milisegundos.
```

### 14 — Consecuencia del rebote

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "rebote"]

enunciado: "Si el programa no filtra el rebote, un solo toque puede interpretarse como..."
tipo: mc
opciones_explicitas:
  - "Varias pulsaciones"
  - "Ninguna pulsación"
  - "Una pulsación larga"
respuesta: "Varias pulsaciones"

explicacion: |
  El programa cuenta cada cambio.
```

### 15 — Solución por hardware

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "rebote"]

enunciado: "Una solución por hardware contra el rebote es..."
tipo: mc
opciones_explicitas:
  - "Un capacitor que filtre los cambios rápidos"
  - "Un transformador"
  - "Un diodo en serie"
respuesta: "Un capacitor que filtre los cambios rápidos"

explicacion: |
  Es un filtro RC.
```

### 16 — Solución por software

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "rebote"]

enunciado: "Una solución por software contra el rebote es..."
tipo: mc
opciones_explicitas:
  - "Ignorar los cambios durante unos milisegundos tras detectar uno"
  - "Leer el pin más rápido"
  - "Apagar el microcontrolador"
respuesta: "Ignorar los cambios durante unos milisegundos tras detectar uno"

explicacion: |
  Es el antirrebote o debounce.
```

### 17 — Estructura

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io", "programa"]

enunciado: "Un programa típico de microcontrolador tiene..."
tipo: mc
opciones_explicitas:
  - "Una configuración inicial y un bucle que se repite"
  - "Solo una línea"
  - "Una instrucción por pin"
respuesta: "Una configuración inicial y un bucle que se repite"

explicacion: |
  Leer, decidir y escribir.
```

### 18 — Pausas

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "avanzado"
  tags: ["io", "programa"]

enunciado: "Para temporizar acciones sin que el resto del programa se detenga conviene..."
tipo: mc
opciones_explicitas:
  - "Medir el tiempo transcurrido"
  - "Usar una pausa larga"
  - "Apagar las salidas"
respuesta: "Medir el tiempo transcurrido"

explicacion: |
  Una pausa bloquea todo.
```

### 19 — Sigla

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "basico"
  tags: ["io", "pwm"]

tipo: completar
enunciado: "La modulación por ancho de pulso se conoce por la sigla ___."
respuestas_validas:
  - "PWM"
  - "pwm"

explicacion: |
  Pulse Width Modulation.
```

### 20 — Valor medio con PWM

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "pwm", "calculo"]

variables:
  vcc: uno_de([3.3, 5])
  d: uno_de([10, 25, 50, 75])
  v: redondear(vcc * d / 100, 2)

respuesta: v
tipo: input
tolerancia_abs: 0.03

enunciado: "Un pin PWM con {vcc} V de alimentación tiene un ciclo de trabajo de {d} %. ¿Cuál es el valor medio de la tensión, en V? (redondeá a dos decimales)"

pasos:
  - "Vmedio = Vcc × ciclo de trabajo"

explicacion: |
  El valor medio es proporcional al ciclo.
```

### 21 — Ciclo para una tensión

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "avanzado"
  tags: ["io", "pwm", "calculo"]

variables:
  vcc: 5
  v: uno_de([1, 2, 2.5, 4])
  d: redondear(v / vcc * 100, 1)

respuesta: d
tipo: input
tolerancia_abs: 0.3

enunciado: "Con una alimentación de 5 V se quiere un valor medio de {v} V con PWM. ¿Qué ciclo de trabajo hace falta, en %?"

pasos:
  - "D = Vmedio / Vcc × 100"

explicacion: |
  Se despeja el ciclo de trabajo.
```

### 22 — Uso de PWM

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "intermedio"
  tags: ["io", "pwm"]

enunciado: "Una aplicación típica del PWM es..."
tipo: mc
opciones_explicitas:
  - "Regular el brillo de un LED"
  - "Rectificar la red"
  - "Almacenar datos"
respuesta: "Regular el brillo de un LED"

explicacion: |
  También controlar la velocidad de un motor.
```

### 23 — PWM y pin digital

```
metadata:
  materia: "electronica"
  tema: "microcontrolador_entradas_y_salidas_digitales"
  nivel: "avanzado"
  tags: ["io", "pwm"]

respuesta: verdadero
tipo: vf

enunciado: "Un pin con PWM sigue siendo digital, aunque el efecto sobre muchas cargas sea el de una tensión analógica."

explicacion: |
  Solo alterna entre nivel alto y bajo.
```
