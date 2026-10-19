# Automatizacion — Control on-off con histéresis (cuestionario, 22 preguntas VBLang)

> Tema: `automatizacion/control-on-off-con-histeresis`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — ¿Cómo funciona un control on-off

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "basico"
  tags: ["on_off", "histeresis"]

enunciado: "¿Cómo funciona un control on-off?"
tipo: mc
opciones_explicitas:
  - "El actuador solo tiene dos estados: encendido o apagado"
  - "Modula el actuador de manera continua"
  - "No usa sensores"
  - "Siempre mantiene la variable fija"
respuesta: "El actuador solo tiene dos estados: encendido o apagado"

explicacion: |
  Es el control de todo o nada.
```

### 2 — ¿Qué es la histéresis en un control on-off

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "basico"
  tags: ["on_off", "histeresis"]

enunciado: "¿Qué es la histéresis en un control on-off?"
tipo: mc
opciones_explicitas:
  - "Usar dos umbrales distintos, uno para encender y otro para apagar"
  - "Un sensor más preciso"
  - "Un tipo de PLC"
  - "Un filtro de ruido digital"
respuesta: "Usar dos umbrales distintos, uno para encender y otro para apagar"

explicacion: |
  Evita conmutaciones rápidas.
```

### 3 — ¿Qué problema evita la banda de histéresis

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "basico"
  tags: ["on_off", "histeresis"]

enunciado: "¿Qué problema evita la banda de histéresis?"
tipo: mc
opciones_explicitas:
  - "Que el actuador conmute muy seguido alrededor del valor deseado"
  - "Que el sensor se rompa"
  - "Que falte tensión"
  - "Que el valor deseado cambie"
respuesta: "Que el actuador conmute muy seguido alrededor del valor deseado"

explicacion: |
  Reduce el desgaste y el consumo.
```

### 4 — Si se ensancha la banda de histéresis...

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "intermedio"
  tags: ["on_off", "histeresis"]

enunciado: "Si se ensancha la banda de histéresis..."
tipo: mc
opciones_explicitas:
  - "Hay menos conmutaciones pero más oscilación de la variable"
  - "Hay más conmutaciones"
  - "La variable queda fija"
  - "El actuador se apaga para siempre"
respuesta: "Hay menos conmutaciones pero más oscilación de la variable"

explicacion: |
  Es un compromiso.
```

### 5 — Con control on-off, ¿la variable queda quieta en el valor de

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "intermedio"
  tags: ["on_off", "histeresis"]

enunciado: "Con control on-off, ¿la variable queda quieta en el valor deseado?"
tipo: mc
opciones_explicitas:
  - "No, oscila en un ciclo"
  - "Sí, siempre"
  - "Solo con ruido"
  - "Solo con PLC"
respuesta: "No, oscila en un ciclo"

explicacion: |
  Sube con el actuador encendido y baja con el apagado.
```

### 6 — El ciclo de trabajo es...

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "intermedio"
  tags: ["on_off", "histeresis"]

enunciado: "El ciclo de trabajo es..."
tipo: mc
opciones_explicitas:
  - "El porcentaje del tiempo que el actuador está encendido en un ciclo"
  - "El número de sensores"
  - "La banda de histéresis"
  - "El valor máximo de la variable"
respuesta: "El porcentaje del tiempo que el actuador está encendido en un ciclo"

explicacion: |
  Es una medida del régimen de funcionamiento.
```

### 7 — ¿Cuál es un ejemplo de control on-off

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "basico"
  tags: ["on_off", "histeresis"]

enunciado: "¿Cuál es un ejemplo de control on-off?"
tipo: mc
opciones_explicitas:
  - "El termostato de una plancha"
  - "Un servomotor de posición"
  - "Un controlador PID de caudal"
  - "Un variador de frecuencia"
respuesta: "El termostato de una plancha"

explicacion: |
  Enciende y apaga según la temperatura.
```

### 8 — ¿Cuándo no alcanza el on-off

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "intermedio"
  tags: ["on_off", "histeresis"]

enunciado: "¿Cuándo no alcanza el on-off?"
tipo: mc
opciones_explicitas:
  - "Cuando hay que mantener la variable con poca variación"
  - "Cuando el proceso es lento"
  - "Cuando el costo importa"
  - "En una heladera"
respuesta: "Cuando hay que mantener la variable con poca variación"

explicacion: |
  Para eso se usan controladores continuos.
```

### 9 — La modulación por ancho de pulso (PWM) consiste en...

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "avanzado"
  tags: ["on_off", "histeresis"]

enunciado: "La modulación por ancho de pulso (PWM) consiste en..."
tipo: mc
opciones_explicitas:
  - "Encender y apagar muy rápido, variando la fracción de tiempo encendido"
  - "Usar solo un nivel fijo"
  - "Medir la temperatura"
  - "Eliminar el sensor"
respuesta: "Encender y apagar muy rápido, variando la fracción de tiempo encendido"

explicacion: |
  Permite una acción promedio continua.
```

### 10 — Un termostato ubicado muy cerca de la fuente de calor...

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "avanzado"
  tags: ["on_off", "histeresis"]

enunciado: "Un termostato ubicado muy cerca de la fuente de calor..."
tipo: mc
opciones_explicitas:
  - "Apaga antes de que la zona se caliente"
  - "Reacciona tarde"
  - "No funciona"
  - "Eleva la banda de histéresis"
respuesta: "Apaga antes de que la zona se caliente"

explicacion: |
  El sensor debe representar lo que se quiere controlar.
```

### 11 — Un calefactor on-off sin histéresis y con ruido de medición

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "avanzado"
  tags: ["on_off", "histeresis"]

enunciado: "Un calefactor on-off sin histéresis y con ruido de medición podría..."
tipo: mc
opciones_explicitas:
  - "Conmutar decenas de veces por segundo"
  - "No encender nunca"
  - "Mantener la temperatura exacta"
  - "Consumir menos"
respuesta: "Conmutar decenas de veces por segundo"

explicacion: |
  Eso desgasta contactores y relés.
```

### 12 — ¿Qué determina el período del ciclo de oscilación

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "avanzado"
  tags: ["on_off", "histeresis"]

enunciado: "¿Qué determina el período del ciclo de oscilación?"
tipo: mc
opciones_explicitas:
  - "La velocidad del proceso y la banda"
  - "El color del sensor"
  - "El tamaño del PLC"
  - "El voltaje de la red solamente"
respuesta: "La velocidad del proceso y la banda"

explicacion: |
  Procesos más lentos tienen ciclos más largos.
```

### 13 — El control on-off es barato y robusto.

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "basico"
  tags: ["on_off", "histeresis"]

respuesta: verdadero
tipo: vf

enunciado: "El control on-off es barato y robusto."

explicacion: |
  Por eso se usa en muchos aparatos domésticos.
```

### 14 — Un termostato con histéresis enciende y apaga en el mismo va

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "basico"
  tags: ["on_off", "histeresis"]

respuesta: falso
tipo: vf

enunciado: "Un termostato con histéresis enciende y apaga en el mismo valor exacto."

explicacion: |
  Usa dos umbrales distintos.
```

### 15 — En una heladera, una banda de unos pocos grados es aceptable

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "basico"
  tags: ["on_off", "histeresis"]

respuesta: verdadero
tipo: vf

enunciado: "En una heladera, una banda de unos pocos grados es aceptable."

explicacion: |
  La tolerancia es amplia.
```

### 16 — El PID es una alternativa al on-off cuando se necesita menor

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "basico"
  tags: ["on_off", "histeresis"]

respuesta: verdadero
tipo: vf

enunciado: "El PID es una alternativa al on-off cuando se necesita menor variación."

explicacion: |
  Modula el actuador de forma continua.
```

### 17 — Un presostato que arranca y para una bomba es un ejemplo de

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "intermedio"
  tags: ["on_off", "histeresis"]

tipo: completar
enunciado: "Un presostato que arranca y para una bomba es un ejemplo de control ___ (on-off / PID)."
respuestas_validas:
  - "on-off"

explicacion: |
  Tiene solo dos estados.
```

### 18 — La banda de ___ (histéresis / ganancia) separa los umbrales

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "intermedio"
  tags: ["on_off", "histeresis"]

tipo: completar
enunciado: "La banda de ___ (histéresis / ganancia) separa los umbrales de encendido y apagado."
respuestas_validas:
  - "histéresis"

explicacion: |
  Evita conmutaciones rápidas.
```

### 19 — Un calefactor tiene valor deseado de {sp} °C y banda de hist

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "intermedio"
  tags: ["on_off", "histeresis"]

variables:
  sp: random(18, 30)
  banda: uno_de([2, 4, 6])

respuesta: sp - banda / 2
tipo: input
tolerancia_abs: 0.1

enunciado: "Un calefactor tiene valor deseado de {sp} °C y banda de histéresis de {banda} °C, centrada en el valor deseado. ¿A qué temperatura se enciende? (°C)"

pasos:
  - "Umbral de encendido = valor deseado − banda / 2"

explicacion: |
  El umbral inferior es el valor deseado menos la mitad de la banda.
```

### 20 — Con el mismo calefactor (valor deseado {sp} °C, banda {banda

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "intermedio"
  tags: ["on_off", "histeresis"]

variables:
  sp: random(18, 30)
  banda: uno_de([2, 4, 6])

respuesta: sp + banda / 2
tipo: input
tolerancia_abs: 0.1

enunciado: "Con el mismo calefactor (valor deseado {sp} °C, banda {banda} °C), ¿a qué temperatura se apaga? (°C)"

pasos:
  - "Umbral de apagado = valor deseado + banda / 2"

explicacion: |
  El umbral superior es el valor deseado más la mitad de la banda.
```

### 21 — Un compresor está encendido {on} min y apagado {off} min en

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "intermedio"
  tags: ["on_off", "histeresis"]

variables:
  on: random(3, 12)
  off: random(3, 12)

respuesta: redondear(on / (on + off) * 100, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "Un compresor está encendido {on} min y apagado {off} min en cada ciclo. ¿Cuál es el ciclo de trabajo, en %? (redondeá a un decimal)"

pasos:
  - "Ciclo de trabajo = tiempo encendido / duración del ciclo × 100"

explicacion: |
  El ciclo dura on + off.
```

### 22 — Un compresor tiene un ciclo con {on} min encendido y {off} m

```
metadata:
  materia: "automatizacion"
  tema: "control_on_off_con_histeresis"
  nivel: "avanzado"
  tags: ["on_off", "histeresis"]

variables:
  on: random(3, 12)
  off: random(3, 12)

respuesta: redondear(60 / (on + off), 1)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un compresor tiene un ciclo con {on} min encendido y {off} min apagado. ¿Cuántos ciclos completos por hora hace? (redondeá a un decimal)"

pasos:
  - "Ciclos por hora = 60 / duración del ciclo en minutos"

explicacion: |
  Cada ciclo incluye un encendido.
```
