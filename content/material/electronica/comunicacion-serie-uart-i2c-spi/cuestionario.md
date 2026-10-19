# Electrónica — Comunicación serie: UART, I2C y SPI (cuestionario, 24 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Serie

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "basico"
  tags: ["serie"]

enunciado: "En la comunicación serie, los bits se envían..."
tipo: mc
opciones_explicitas:
  - "Uno tras otro por una línea"
  - "Todos a la vez por varias líneas"
  - "Solo en forma de pulsos largos"
respuesta: "Uno tras otro por una línea"

explicacion: |
  La paralela envía varios bits a la vez.
```

### 2 — Ventaja de serie

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "basico"
  tags: ["serie"]

enunciado: "Una ventaja de la comunicación serie frente a la paralela es..."
tipo: mc
opciones_explicitas:
  - "Usa pocos conductores"
  - "Es siempre más rápida"
  - "No necesita masa"
respuesta: "Usa pocos conductores"

explicacion: |
  Es lo que la hace práctica para distancias largas.
```

### 3 — Asíncrona

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "basico"
  tags: ["serie"]

enunciado: "En una comunicación asíncrona..."
tipo: mc
opciones_explicitas:
  - "No hay línea de reloj y ambos acuerdan la velocidad"
  - "Hay una línea de reloj compartida"
  - "No hay velocidad definida"
respuesta: "No hay línea de reloj y ambos acuerdan la velocidad"

explicacion: |
  La UART es asíncrona.
```

### 4 — Síncrona

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "basico"
  tags: ["serie"]

enunciado: "En una comunicación síncrona..."
tipo: mc
opciones_explicitas:
  - "Hay una línea de reloj compartida"
  - "No hay reloj"
  - "Solo hay un conductor"
respuesta: "Hay una línea de reloj compartida"

explicacion: |
  I2C y SPI son síncronos.
```

### 5 — Líneas de UART

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "basico"
  tags: ["uart"]

enunciado: "La UART usa las líneas..."
tipo: mc
opciones_explicitas:
  - "TX y RX"
  - "SDA y SCL"
  - "MOSI y MISO"
respuesta: "TX y RX"

explicacion: |
  SDA y SCL son de I2C; MOSI y MISO, de SPI.
```

### 6 — Cruzado

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["uart"]

respuesta: verdadero
tipo: vf

enunciado: "En una conexión UART, el TX de un dispositivo se conecta al RX del otro."

explicacion: |
  Lo que uno transmite, el otro lo recibe.
```

### 7 — Velocidad UART

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "basico"
  tags: ["uart"]

tipo: completar
enunciado: "La velocidad de una comunicación UART se mide en bits por segundo y se llama tasa de ___."
respuestas_validas:
  - "baudios"
  - "baud"

explicacion: |
  Por ejemplo, 9600 o 115200.
```

### 8 — Bits por byte

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["uart", "calculo"]

variables:
  b: 10

respuesta: b
tipo: input
tolerancia_abs: 0

enunciado: "En una trama 8N1 de UART (1 bit de inicio, 8 de datos, 0 de paridad y 1 de parada), ¿cuántos bits se transmiten por cada byte?"

pasos:
  - "1 + 8 + 0 + 1"

explicacion: |
  Cada byte lleva 10 bits en la línea.
```

### 9 — Tiempo por byte

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "avanzado"
  tags: ["uart", "calculo"]

variables:
  baud: uno_de([9600, 19200, 115200])
  t: redondear(10 / baud * 1000, 3)

respuesta: t
tipo: input
tolerancia_abs: 0.002

enunciado: "A {baud} baudios con trama 8N1 (10 bits por byte), ¿cuánto tarda en enviarse un byte, en milisegundos? (redondeá a tres decimales)"

pasos:
  - "Tiempo = 10 bits / baudios"
  - "Pasar s a ms"

explicacion: |
  Cada byte ocupa 10 bits.
```

### 10 — Bytes por segundo

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "avanzado"
  tags: ["uart", "calculo"]

variables:
  baud: uno_de([9600, 19200, 115200])
  bps: baud / 10

respuesta: bps
tipo: input
tolerancia_abs: 0.5

enunciado: "A {baud} baudios con trama 8N1, ¿cuántos bytes de datos se transmiten por segundo?"

pasos:
  - "baudios / 10"

explicacion: |
  Cada byte ocupa 10 bits.
```

### 11 — Tiempo para un mensaje

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "avanzado"
  tags: ["uart", "calculo"]

variables:
  baud: uno_de([9600, 115200])
  n: uno_de([10, 50, 100])
  t: redondear(n * 10 / baud * 1000, 2)

respuesta: t
tipo: input
tolerancia_abs: 0.02

enunciado: "A {baud} baudios con trama 8N1, ¿cuánto tarda en enviarse un mensaje de {n} bytes, en milisegundos? (redondeá a dos decimales)"

pasos:
  - "Bits = bytes × 10"
  - "Tiempo = bits / baudios"

explicacion: |
  Se multiplica por los 10 bits de cada byte.
```

### 12 — Líneas de I2C

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "basico"
  tags: ["i2c"]

enunciado: "El bus I2C usa las líneas..."
tipo: mc
opciones_explicitas:
  - "SDA y SCL"
  - "TX y RX"
  - "MOSI y MISO"
respuesta: "SDA y SCL"

explicacion: |
  Datos y reloj.
```

### 13 — Direcciones I2C

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["i2c"]

enunciado: "En I2C, el maestro elige con qué esclavo hablar mediante..."
tipo: mc
opciones_explicitas:
  - "Su dirección"
  - "Una línea CS"
  - "La velocidad"
respuesta: "Su dirección"

explicacion: |
  Cada esclavo tiene una dirección de 7 bits.
```

### 14 — Direcciones posibles

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "avanzado"
  tags: ["i2c", "calculo"]

variables:
  d: 7
  n: 2 ^ d

respuesta: n
tipo: input
tolerancia_abs: 0

enunciado: "Con direcciones de {d} bits, ¿cuántas direcciones distintas existen en teoría en un bus I2C?"

pasos:
  - "2^7"

explicacion: |
  Algunas están reservadas, pero en teoría son 128.
```

### 15 — Pull-ups en I2C

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["i2c"]

respuesta: verdadero
tipo: vf

enunciado: "El bus I2C necesita resistencias pull-up en SDA y SCL."

explicacion: |
  Las líneas son de colector abierto.
```

### 16 — Ventaja I2C

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["i2c"]

enunciado: "La ventaja principal del I2C es..."
tipo: mc
opciones_explicitas:
  - "Conectar muchos dispositivos con solo dos líneas"
  - "Ser el más veloz"
  - "No necesitar masa"
respuesta: "Conectar muchos dispositivos con solo dos líneas"

explicacion: |
  Agrega dispositivos sin sumar pines.
```

### 17 — Líneas de SPI

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "basico"
  tags: ["spi"]

enunciado: "El SPI usa las líneas..."
tipo: mc
opciones_explicitas:
  - "SCLK, MOSI, MISO y CS"
  - "SDA y SCL"
  - "TX y RX"
respuesta: "SCLK, MOSI, MISO y CS"

explicacion: |
  Cuatro líneas.
```

### 18 — Full dúplex

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["spi"]

respuesta: verdadero
tipo: vf

enunciado: "En SPI se puede enviar y recibir datos al mismo tiempo."

explicacion: |
  Hay una línea de datos en cada sentido (full dúplex).
```

### 19 — Selección SPI

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["spi"]

enunciado: "En SPI, el maestro elige a qué esclavo hablar mediante..."
tipo: mc
opciones_explicitas:
  - "Una línea CS por cada esclavo"
  - "Una dirección de 7 bits"
  - "La tasa de baudios"
respuesta: "Una línea CS por cada esclavo"

explicacion: |
  No hay direcciones.
```

### 20 — Pines SPI

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "avanzado"
  tags: ["spi", "calculo"]

variables:
  n: uno_de([2, 3, 4, 5])
  p: 3 + n

respuesta: p
tipo: input
tolerancia_abs: 0

enunciado: "Un maestro SPI maneja {n} esclavos, cada uno con su propia línea CS (SCLK, MOSI y MISO son compartidas). ¿Cuántos pines usa en total?"

pasos:
  - "3 líneas compartidas + n líneas CS"

explicacion: |
  Cada esclavo suma un pin.
```

### 21 — Pines I2C

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["i2c", "calculo"]

variables:
  n: uno_de([2, 5, 8, 12])
  p: 2

respuesta: p
tipo: input
tolerancia_abs: 0

enunciado: "Un maestro I2C maneja {n} esclavos. ¿Cuántos pines usa para el bus?"

pasos:
  - "SDA y SCL, sin importar la cantidad"

explicacion: |
  El bus siempre ocupa dos pines.
```

### 22 — Elección

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "intermedio"
  tags: ["serie", "comparacion"]

enunciado: "Para una tarjeta SD, donde importa la velocidad, suele elegirse..."
tipo: mc
opciones_explicitas:
  - "SPI"
  - "UART"
  - "I2C"
respuesta: "SPI"

explicacion: |
  Es más rápido que el I2C.
```

### 23 — Niveles de tensión

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "avanzado"
  tags: ["serie"]

respuesta: verdadero
tipo: vf

enunciado: "Conectar un dispositivo de 5 V directamente a otro de 3,3 V puede dañarlo."

explicacion: |
  Hay que respetar los niveles de tensión.
```

### 24 — Configuración común

```
metadata:
  materia: "electronica"
  tema: "comunicacion_serie_uart_i2c_spi"
  nivel: "avanzado"
  tags: ["serie"]

enunciado: "Para que dos dispositivos se entiendan, ambos deben..."
tipo: mc
opciones_explicitas:
  - "Usar el mismo protocolo y la misma configuración"
  - "Tener la misma marca"
  - "Estar a menos de un metro"
respuesta: "Usar el mismo protocolo y la misma configuración"

explicacion: |
  Velocidad, formato de trama y niveles.
```
