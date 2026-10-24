# Automatizacion — Redes industriales y SCADA (cuestionario, 23 preguntas VBLang)

> Tema: `automatizacion/redes-industriales-y-scada`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Para qué sirven las redes industriales

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

enunciado: "¿Para qué sirven las redes industriales?"
tipo: mc
opciones_explicitas:
  - "Para intercambiar datos entre PLC, variadores, sensores y computadoras con pocos cables"
  - "Para ver televisión"
  - "Para medir temperatura"
  - "Para reemplazar los motores"
respuesta: "Para intercambiar datos entre PLC, variadores, sensores y computadoras con pocos cables"

explicacion: |
  Reducen el cableado y facilitan el diagnóstico.
```

### 2 — ¿Qué significa determinismo en una red industrial

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

enunciado: "¿Qué significa determinismo en una red industrial?"
tipo: mc
opciones_explicitas:
  - "Que los mensajes llegan en un tiempo acotado y previsible"
  - "Que nunca falla"
  - "Que es gratuita"
  - "Que usa fibra óptica"
respuesta: "Que los mensajes llegan en un tiempo acotado y previsible"

explicacion: |
  Un retraso puede significar un daño o una parada.
```

### 3 — Modbus se desarrolló en la empresa...

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "avanzado"
  tags: ["redes_industriales", "scada"]

enunciado: "Modbus se desarrolló en la empresa..."
tipo: mc
opciones_explicitas:
  - "Modicon"
  - "Microsoft"
  - "Apple"
  - "Siemens"
respuesta: "Modicon"

explicacion: |
  En 1979, para comunicar PLC.
```

### 4 — Modbus funciona con el modelo...

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

enunciado: "Modbus funciona con el modelo..."
tipo: mc
opciones_explicitas:
  - "Maestro-esclavo (cliente-servidor)"
  - "Entre pares sin jerarquía"
  - "Solo broadcast"
  - "Por correo electrónico"
respuesta: "Maestro-esclavo (cliente-servidor)"

explicacion: |
  El maestro pregunta y el esclavo responde.
```

### 5 — Modbus RTU suele usar una línea serie...

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

enunciado: "Modbus RTU suele usar una línea serie..."
tipo: mc
opciones_explicitas:
  - "RS-485"
  - "USB"
  - "HDMI"
  - "Wi-Fi"
respuesta: "RS-485"

explicacion: |
  Permite largas distancias y varios dispositivos.
```

### 6 — Modbus TCP funciona sobre...

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

enunciado: "Modbus TCP funciona sobre..."
tipo: mc
opciones_explicitas:
  - "Ethernet"
  - "Una línea de 4-20 mA"
  - "Radio solamente"
  - "Un bus serie obligatoriamente"
respuesta: "Ethernet"

explicacion: |
  Aprovecha las redes de datos.
```

### 7 — ¿Qué rango de direcciones tiene un esclavo en Modbus RTU

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "avanzado"
  tags: ["redes_industriales", "scada"]

enunciado: "¿Qué rango de direcciones tiene un esclavo en Modbus RTU?"
tipo: mc
opciones_explicitas:
  - "De 1 a 247"
  - "De 0 a 9"
  - "De 1 a 10"
  - "De 100 a 200"
respuesta: "De 1 a 247"

explicacion: |
  Cada esclavo tiene una dirección única.
```

### 8 — ¿Qué es una HMI

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

enunciado: "¿Qué es una HMI?"
tipo: mc
opciones_explicitas:
  - "La pantalla donde el operador ve el estado de una máquina y da órdenes"
  - "Un tipo de cable"
  - "Un transmisor"
  - "Un motor"
respuesta: "La pantalla donde el operador ve el estado de una máquina y da órdenes"

explicacion: |
  Interfaz humano-máquina.
```

### 9 — ¿Qué es un SCADA

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

enunciado: "¿Qué es un SCADA?"
tipo: mc
opciones_explicitas:
  - "Un sistema de supervisión, control y adquisición de datos de una planta o red"
  - "Un lenguaje de PLC"
  - "Un sensor"
  - "Un tipo de motor"
respuesta: "Un sistema de supervisión, control y adquisición de datos de una planta o red"

explicacion: |
  Recoge datos de muchos PLC.
```

### 10 — ¿Qué suele registrar un SCADA

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

enunciado: "¿Qué suele registrar un SCADA?"
tipo: mc
opciones_explicitas:
  - "Históricos, tendencias y alarmas"
  - "Solo el color de las luces"
  - "Nada"
  - "Únicamente el consumo de un hogar"
respuesta: "Históricos, tendencias y alarmas"

explicacion: |
  Además muestra diagramas del proceso.
```

### 11 — ¿Para qué se usa OPC UA

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "avanzado"
  tags: ["redes_industriales", "scada"]

enunciado: "¿Para qué se usa OPC UA?"
tipo: mc
opciones_explicitas:
  - "Para intercambiar datos entre sistemas de distintos fabricantes de forma segura"
  - "Para alimentar sensores"
  - "Para regular un motor"
  - "Para medir presión"
respuesta: "Para intercambiar datos entre sistemas de distintos fabricantes de forma segura"

explicacion: |
  Es un estándar de interoperabilidad.
```

### 12 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

enunciado: "En los niveles de automatización, los sensores y actuadores están en..."
tipo: mc
opciones_explicitas:
  - "La base (nivel de campo)"
  - "La cima"
  - "El nivel de gestión"
  - "El nivel de ventas"
respuesta: "La base (nivel de campo)"

explicacion: |
  Arriba están el control, la supervisión y la gestión.
```

### 13 — ¿Qué se recomienda para proteger una red industrial

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

enunciado: "¿Qué se recomienda para proteger una red industrial?"
tipo: mc
opciones_explicitas:
  - "Separarla de la red de oficinas con cortafuegos"
  - "Conectarla directo a internet sin protección"
  - "Usar contraseñas por defecto"
  - "No actualizar nunca nada"
respuesta: "Separarla de la red de oficinas con cortafuegos"

explicacion: |
  Es una de las medidas básicas.
```

### 14 — Un ataque a un sistema de control puede afectar...

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "avanzado"
  tags: ["redes_industriales", "scada"]

enunciado: "Un ataque a un sistema de control puede afectar..."
tipo: mc
opciones_explicitas:
  - "Procesos físicos y no solo datos"
  - "Solo el correo"
  - "Nada"
  - "Únicamente la pantalla"
respuesta: "Procesos físicos y no solo datos"

explicacion: |
  Por eso la seguridad informática en planta es crítica.
```

### 15 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

respuesta: verdadero
tipo: vf

enunciado: "Una red industrial debe soportar ruido eléctrico, vibraciones y polvo."

explicacion: |
  Es parte de su robustez.
```

### 16 — Los equipos industriales suelen cambiarse todos los años.

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

respuesta: falso
tipo: vf

enunciado: "Los equipos industriales suelen cambiarse todos los años."

explicacion: |
  Duran décadas, y también sus protocolos.
```

### 17 — Modbus es un protocolo abierto y simple.

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

respuesta: verdadero
tipo: vf

enunciado: "Modbus es un protocolo abierto y simple."

explicacion: |
  Por eso sigue muy difundido.
```

### 18 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

respuesta: falso
tipo: vf

enunciado: "Una planta aislada de toda red no tiene ningún riesgo informático al conectarla a internet."

explicacion: |
  Conectarla abre la puerta a ataques.
```

### 19 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

tipo: completar
enunciado: "La línea serie más usada para Modbus RTU es la ___ (RS-485 / USB)."
respuestas_validas:
  - "RS-485"

explicacion: |
  Permite largas distancias.
```

### 20 — Pregunta

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

tipo: completar
enunciado: "La pantalla local de una máquina para el operador es la ___ (HMI / SCADA)."
respuestas_validas:
  - "HMI"

explicacion: |
  El SCADA abarca toda la planta.
```

### 21 — Cálculo

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "basico"
  tags: ["redes_industriales", "scada"]

variables:
  n: random(3, 20)
  p: random(2, 6)

respuesta: n * p
tipo: input
tolerancia_abs: 0

enunciado: "Una planta tiene {n} esclavos Modbus y se leen {p} registros de cada uno. ¿Cuántos registros se leen por barrido?"

pasos:
  - "Total = esclavos · registros por esclavo"

explicacion: |
  Producto de ambos valores.
```

### 22 — Cálculo

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "intermedio"
  tags: ["redes_industriales", "scada"]

variables:
  n: random(3, 20)
  t: random(20, 80)

respuesta: n * t
tipo: input
tolerancia_abs: 0

enunciado: "Cada consulta Modbus a un esclavo tarda {t} ms. Si el maestro consulta uno por uno a {n} esclavos, ¿cuánto tarda un barrido completo, en milisegundos?"

pasos:
  - "Tiempo = esclavos · tiempo por consulta"

explicacion: |
  El maestro pregunta de a uno.
```

### 23 — Cálculo

```
metadata:
  materia: "automatizacion"
  tema: "redes_industriales_y_scada"
  nivel: "avanzado"
  tags: ["redes_industriales", "scada"]

variables:
  barridos: random(1, 5)
  n: random(4, 20)
  t: random(20, 60)

respuesta: barridos * n * t / 1000
tipo: input
tolerancia_abs: 0.01

enunciado: "Con {n} esclavos y {t} ms por consulta, ¿cuántos segundos tardan {barridos} barridos completos? (redondeá a dos decimales)"

pasos:
  - "Tiempo total = barridos · esclavos · tiempo por consulta"

explicacion: |
  Se convierte de milisegundos a segundos.
```
