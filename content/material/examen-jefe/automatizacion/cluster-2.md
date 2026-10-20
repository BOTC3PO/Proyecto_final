# Examen jefe — Maestro de la Instrumentación y los Accionamientos

> Logro #947. Completaste el parcial dominando el control on-off con histéresis, la instrumentación industrial y los lazos 4-20 mA, el modelado de sistemas dinámicos de primer orden y los motores eléctricos y variadores de frecuencia, y el mantenimiento y diagnóstico de sistemas automatizados. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **115 preguntas totales** en 5/5 secciones.

---

## Sección: control-on-off-con-histeresis (22 preguntas)

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

## Sección: instrumentacion-industrial-y-lazos-4-20-ma (23 preguntas)

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "basico"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "¿Qué es un transmisor?"
tipo: mc
opciones_explicitas:
  - "Un equipo que convierte una medición en una señal eléctrica normalizada"
  - "Un cable de potencia"
  - "Un tipo de motor"
  - "Un programa de PLC"
respuesta: "Un equipo que convierte una medición en una señal eléctrica normalizada"

explicacion: |
  Contiene el sensor y un circuito de conversión.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "basico"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "En un lazo de 4-20 mA, 4 mA representa..."
tipo: mc
opciones_explicitas:
  - "El 0 % del rango de medición"
  - "El 100 % del rango"
  - "La falla"
  - "El 50 % del rango"
respuesta: "El 0 % del rango de medición"

explicacion: |
  20 mA es el 100 %.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "¿Por qué el valor mínimo es 4 mA y no 0?"
tipo: mc
opciones_explicitas:
  - "Para poder detectar un cable cortado o un transmisor apagado"
  - "Por ahorro de energía"
  - "Por costumbre histórica sin razón técnica"
  - "Para que no pase corriente"
respuesta: "Para poder detectar un cable cortado o un transmisor apagado"

explicacion: |
  Es el 'cero vivo'.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "Una ventaja del lazo de corriente es..."
tipo: mc
opciones_explicitas:
  - "No lo afecta la caída de tensión por la longitud del cable"
  - "Necesita muchos cables"
  - "Es muy sensible al ruido"
  - "Solo mide temperaturas"
respuesta: "No lo afecta la caída de tensión por la longitud del cable"

explicacion: |
  La corriente es la misma en todo el lazo.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "¿Cuántos hilos usa un transmisor de lazo alimentado?"
tipo: mc
opciones_explicitas:
  - "Dos, por los que recibe energía y envía la señal"
  - "Cuatro siempre"
  - "Uno"
  - "Ninguno"
respuesta: "Dos, por los que recibe energía y envía la señal"

explicacion: |
  Se alimenta con una fuente típica de 24 V de continua.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "avanzado"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "Una resistencia de 250 ohm convierte 4-20 mA en..."
tipo: mc
opciones_explicitas:
  - "1-5 V"
  - "0-10 V"
  - "0-24 V"
  - "4-20 V"
respuesta: "1-5 V"

explicacion: |
  Por la ley de Ohm: 4 mA × 250 Ω = 1 V y 20 mA × 250 Ω = 5 V.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "¿Qué es el span de un transmisor?"
tipo: mc
opciones_explicitas:
  - "La diferencia entre el valor máximo y el mínimo del rango"
  - "El cero"
  - "La longitud del cable"
  - "La tensión de alimentación"
respuesta: "La diferencia entre el valor máximo y el mínimo del rango"

explicacion: |
  Fija el valor que corresponde a 20 mA.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "basico"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "Calibrar un transmisor es..."
tipo: mc
opciones_explicitas:
  - "Comprobar y ajustar que entregue la señal correcta con un patrón de referencia"
  - "Cambiarle el cable"
  - "Reiniciar el PLC"
  - "Pintarlo"
respuesta: "Comprobar y ajustar que entregue la señal correcta con un patrón de referencia"

explicacion: |
  Se ajustan cero y span.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "avanzado"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "¿Qué es HART?"
tipo: mc
opciones_explicitas:
  - "Una comunicación digital superpuesta al lazo de 4-20 mA"
  - "Un tipo de válvula"
  - "Un sensor de nivel"
  - "Un tablero"
respuesta: "Una comunicación digital superpuesta al lazo de 4-20 mA"

explicacion: |
  Permite configurar y diagnosticar el instrumento.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "basico"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "¿Qué es un P&ID?"
tipo: mc
opciones_explicitas:
  - "El plano del proceso con sus tuberías, equipos e instrumentos"
  - "Un programa de PLC"
  - "Un tipo de transmisor"
  - "Un manual de mantenimiento"
respuesta: "El plano del proceso con sus tuberías, equipos e instrumentos"

explicacion: |
  Usa símbolos y códigos normalizados.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "En la nomenclatura ISA, TT significa..."
tipo: mc
opciones_explicitas:
  - "Transmisor de temperatura"
  - "Transformador térmico"
  - "Tablero de transferencia"
  - "Tubería de temperatura"
respuesta: "Transmisor de temperatura"

explicacion: |
  La T inicial es temperatura y la segunda T, transmisor.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "En la nomenclatura ISA, LT significa..."
tipo: mc
opciones_explicitas:
  - "Transmisor de nivel"
  - "Transmisor de luz"
  - "Línea de tubería"
  - "Lazo térmico"
respuesta: "Transmisor de nivel"

explicacion: |
  L es nivel (level).
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "En los códigos ISA, la letra C indica..."
tipo: mc
opciones_explicitas:
  - "Controlador"
  - "Corriente"
  - "Caudal"
  - "Calibrado"
respuesta: "Controlador"

explicacion: |
  Por ejemplo, TIC es un controlador indicador de temperatura.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "avanzado"
  tags: ["instrumentacion", "4_20_ma"]

enunciado: "Los cables de señal conviene tenderlos..."
tipo: mc
opciones_explicitas:
  - "Separados de los de potencia"
  - "Juntos con los de potencia"
  - "Sin malla"
  - "Mezclados al azar"
respuesta: "Separados de los de potencia"

explicacion: |
  Evita interferencias.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "basico"
  tags: ["instrumentacion", "4_20_ma"]

respuesta: verdadero
tipo: vf

enunciado: "Un transmisor calibrado de 0 a 200 °C entrega 12 mA cuando mide 100 °C."

explicacion: |
  100 °C es la mitad del rango y la mitad de 4-20 mA es 12.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "basico"
  tags: ["instrumentacion", "4_20_ma"]

respuesta: falso
tipo: vf

enunciado: "Una corriente de 0 mA en un lazo de 4-20 mA indica que la variable vale cero."

explicacion: |
  Indica falla de cable o de alimentación.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "basico"
  tags: ["instrumentacion", "4_20_ma"]

respuesta: verdadero
tipo: vf

enunciado: "La señal 4-20 mA es proporcional (lineal) a la variable medida."

explicacion: |
  Es la relación habitual.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "basico"
  tags: ["instrumentacion", "4_20_ma"]

respuesta: verdadero
tipo: vf

enunciado: "Un instrumento puede desviarse con el tiempo y seguir pareciendo normal."

explicacion: |
  Por eso se recalibra periódicamente.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

tipo: completar
enunciado: "En un lazo de 4-20 mA, el 100 % del rango corresponde a ___ mA."
respuestas_validas:
  - 20

explicacion: |
  Y el 0 % corresponde a 4 mA.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

tipo: completar
enunciado: "El plano que muestra el proceso con sus instrumentos se llama ___ (P&ID / ladder)."
respuestas_validas:
  - "P&ID"

explicacion: |
  Diagrama de tuberías e instrumentación.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

variables:
  mn: uno_de([0, 0, 0, 10])
  mx: uno_de([100, 200, 250])
  v: uno_de([25, 50, 75])

respuesta: redondear(4 + 16 * ((mn + (mx - mn) * v / 100) - mn) / (mx - mn), 1)
tipo: input
tolerancia_abs: 0.1

enunciado: "Un transmisor está calibrado de {mn} a {mx} y la variable está en el {v} % de su rango. ¿Cuántos mA entrega?"

pasos:
  - "mA = 4 + 16 × porcentaje del rango"

explicacion: |
  El 50 % del rango equivale a 12 mA.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "avanzado"
  tags: ["instrumentacion", "4_20_ma"]

variables:
  ma: random(5, 19)
  mx: uno_de([100, 200, 400])

respuesta: redondear((ma - 4) / 16 * mx, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "Un transmisor calibrado de 0 a {mx} entrega {ma} mA. ¿Qué valor mide? (redondeá a un decimal)"

pasos:
  - "Valor = (mA − 4) / 16 × span"

explicacion: |
  Se invierte la relación lineal.
```

```
metadata:
  materia: "automatizacion"
  tema: "instrumentacion_industrial_y_lazos_4_20_ma"
  nivel: "intermedio"
  tags: ["instrumentacion", "4_20_ma"]

variables:
  ma: random(4, 20)

respuesta: redondear(ma * 250 / 1000, 2)
tipo: input
tolerancia_abs: 0.02

enunciado: "Un lazo de {ma} mA circula por una resistencia de 250 ohm. ¿Cuántos volts hay sobre ella? (redondeá a dos decimales)"

pasos:
  - "V = I · R, con I en amperes"

explicacion: |
  4 mA dan 1 V y 20 mA dan 5 V.
```

## Sección: modelado-de-sistemas-dinamicos-primer-orden (23 preguntas)

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Qué es un modelo de un sistema para control?"
tipo: mc
opciones_explicitas:
  - "Una descripción matemática de cómo responde la salida a cambios en la entrada"
  - "Una maqueta a escala del equipo físico"
  - "El plano eléctrico del tablero"
  - "El manual de operación del fabricante"
respuesta: "Una descripción matemática de cómo responde la salida a cambios en la entrada"

explicacion: |
  Permite predecir y simular antes de actuar sobre la planta.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Qué rasgo distingue la respuesta de un sistema de primer orden?"
tipo: mc
opciones_explicitas:
  - "La salida se acerca de a poco al valor final, cada vez más lento"
  - "La salida oscila alrededor del valor final"
  - "La salida salta al valor final de inmediato"
  - "La salida crece sin límite"
respuesta: "La salida se acerca de a poco al valor final, cada vez más lento"

explicacion: |
  No hay oscilación: es un acercamiento exponencial.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Qué mide la ganancia estática K?"
tipo: mc
opciones_explicitas:
  - "Cuánto cambia la salida final por cada unidad que cambia la entrada"
  - "Qué tan rápido responde el sistema"
  - "El tiempo hasta el 63 %"
  - "El error del sensor"
respuesta: "Cuánto cambia la salida final por cada unidad que cambia la entrada"

explicacion: |
  K relaciona valores finales; la rapidez la da la constante de tiempo.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Qué mide la constante de tiempo tau?"
tipo: mc
opciones_explicitas:
  - "Qué tan rápido responde el sistema"
  - "La ganancia en régimen permanente"
  - "El tamaño del escalón"
  - "El ruido de la medición"
respuesta: "Qué tan rápido responde el sistema"

explicacion: |
  Es el tiempo que la salida tarda en llegar a cerca del 63 % de su cambio final.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

enunciado: "Un sistema con tau chico es..."
tipo: mc
opciones_explicitas:
  - "Rápido"
  - "Lento"
  - "Inestable"
  - "Oscilante"
respuesta: "Rápido"

explicacion: |
  A menor constante de tiempo, más veloz la respuesta.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Qué porcentaje del valor final alcanza la salida en t = tau?"
tipo: mc
opciones_explicitas:
  - "Alrededor del 63 %"
  - "Alrededor del 50 %"
  - "Alrededor del 90 %"
  - "El 100 %"
respuesta: "Alrededor del 63 %"

explicacion: |
  1 − e^(−1) es aproximadamente 0,632.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Aproximadamente qué porcentaje alcanza en t = 3 tau?"
tipo: mc
opciones_explicitas:
  - "Alrededor del 95 %"
  - "Alrededor del 63 %"
  - "El 100 % exacto"
  - "Alrededor del 75 %"
respuesta: "Alrededor del 95 %"

explicacion: |
  1 − e^(−3) es aproximadamente 0,95.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Cuándo se suele considerar que el sistema se estabilizó?"
tipo: mc
opciones_explicitas:
  - "Después de unas 4 a 5 constantes de tiempo"
  - "Después de 1 constante de tiempo"
  - "Apenas empieza el escalón"
  - "Nunca, porque llega exactamente al valor final"
respuesta: "Después de unas 4 a 5 constantes de tiempo"

explicacion: |
  A los 4 tau la salida está cerca del 98 % del valor final.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

enunciado: "Se aplica un escalón y la salida termina variando 80 unidades. ¿En qué momento llega a 50,4?"
tipo: mc
opciones_explicitas:
  - "En t = tau"
  - "En t = 2 tau"
  - "En t = 0"
  - "Nunca"
respuesta: "En t = tau"

explicacion: |
  50,4 es el 63 % de 80, el valor que corresponde a t = tau.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Cómo se obtiene K de un ensayo al escalón?"
tipo: mc
opciones_explicitas:
  - "Dividiendo el cambio final de la salida por el tamaño del escalón"
  - "Midiendo la pendiente final"
  - "Multiplicando el tiempo por el valor inicial"
  - "Sumando entrada y salida"
respuesta: "Dividiendo el cambio final de la salida por el tamaño del escalón"

explicacion: |
  K es salida final dividida entrada final, ambas medidas como variación.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Cuál de estos procesos se aproxima a un sistema de primer orden?"
tipo: mc
opciones_explicitas:
  - "El calentamiento de agua en un termotanque con potencia fija"
  - "Un péndulo sin rozamiento"
  - "Una cuerda de guitarra vibrando"
  - "Una resonancia mecánica"
respuesta: "El calentamiento de agua en un termotanque con potencia fija"

explicacion: |
  El agua se acerca gradualmente a una temperatura final sin oscilar.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "avanzado"
  tags: ["modelado", "primer_orden"]

enunciado: "Si K es grande, una pequeña variación de entrada..."
tipo: mc
opciones_explicitas:
  - "Produce un cambio grande de salida"
  - "No produce cambio"
  - "Produce oscilaciones"
  - "Hace al sistema más lento"
respuesta: "Produce un cambio grande de salida"

explicacion: |
  K amplifica: conviene un controlador menos agresivo.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "avanzado"
  tags: ["modelado", "primer_orden"]

enunciado: "¿Qué límite tiene el modelo de primer orden?"
tipo: mc
opciones_explicitas:
  - "Es una aproximación válida alrededor de un punto de trabajo"
  - "Solo sirve en laboratorio"
  - "No admite escalones"
  - "Solo describe sistemas eléctricos"
respuesta: "Es una aproximación válida alrededor de un punto de trabajo"

explicacion: |
  Los procesos con inercia, oscilación o retardo largo necesitan modelos de mayor orden.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

respuesta: falso
tipo: vf

enunciado: "En un sistema de primer orden la salida llega exactamente al valor final en un tiempo finito."

explicacion: |
  Solo se acerca de manera asintótica; en la práctica se habla de 4 a 5 tau.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

respuesta: verdadero
tipo: vf

enunciado: "Un escalón consiste en cambiar la entrada de golpe de un valor a otro."

explicacion: |
  Es la prueba más usada para identificar un sistema.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

respuesta: falso
tipo: vf

enunciado: "Un sistema con constante de tiempo de 10 minutos responde más rápido que uno de 2 minutos."

explicacion: |
  Mayor constante de tiempo significa respuesta más lenta.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

respuesta: verdadero
tipo: vf

enunciado: "Modelar un proceso permite probar el controlador en simulación antes de usarlo en la planta."

explicacion: |
  Es una de las ventajas principales del modelo.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

tipo: completar
enunciado: "La respuesta de un sistema de primer orden a un escalón se aproxima al valor final de forma ___ (lineal / exponencial)."
respuestas_validas:
  - "exponencial"

explicacion: |
  La curva es y = K·U·(1 − e^(−t/τ)).
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

tipo: completar
enunciado: "La constante de tiempo se mide en unidades de ___ (tiempo / temperatura)."
respuestas_validas:
  - "tiempo"

explicacion: |
  Se expresa en segundos, minutos u horas según el proceso.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "basico"
  tags: ["modelado", "primer_orden"]

variables:
  K: random(2, 6)
  U: random(1, 10)

respuesta: K * U
tipo: input
tolerancia_abs: 0.1

enunciado: "Un proceso tiene ganancia K = {K} y recibe un escalón de {U} unidades. ¿Cuál es el valor final de la salida?"

pasos:
  - "Valor final = K · U"

explicacion: |
  En régimen permanente la salida vale K por el tamaño del escalón.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "avanzado"
  tags: ["modelado", "primer_orden"]

variables:
  K: random(2, 6)
  U: random(1, 10)
  n: uno_de([1, 2, 3])

respuesta: redondear(K * U * (1 - e^(-n)), 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "Un sistema de primer orden con K = {K} recibe un escalón de {U}. ¿Cuánto vale la salida cuando t = {n} tau? (redondeá a un decimal)"

pasos:
  - "y = K · U · (1 − e^(−t/τ)) con t/τ = {n}"

explicacion: |
  Se reemplaza el valor de t/tau en la fórmula de la respuesta al escalón.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

variables:
  dy: random(20, 90)
  du: random(2, 10)

respuesta: redondear(dy / du, 1)
tipo: input
tolerancia_abs: 0.1

enunciado: "Al aumentar la entrada en {du} unidades, la salida terminó subiendo {dy} unidades. ¿Cuánto vale la ganancia K? (redondeá a un decimal)"

pasos:
  - "K = cambio final de salida / cambio de entrada"

explicacion: |
  K es el cociente entre los cambios finales.
```

```
metadata:
  materia: "automatizacion"
  tema: "modelado_de_sistemas_dinamicos_primer_orden"
  nivel: "intermedio"
  tags: ["modelado", "primer_orden"]

variables:
  yf: random(40, 120)

respuesta: redondear(0.632 * yf, 1)
tipo: input
tolerancia_abs: 0.5

enunciado: "La salida de un sistema de primer orden cambia finalmente {yf} unidades. ¿Cuánto vale el cambio en t = tau? (usá 63,2 %, redondeá a un decimal)"

pasos:
  - "En t = tau la salida llega al 63,2 % del cambio final"

explicacion: |
  El 63,2 % es 1 − e^(−1).
```

## Sección: mantenimiento-y-diagnostico-de-sistemas-automatizados (23 preguntas)

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "basico"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "El mantenimiento correctivo se realiza..."
tipo: mc
opciones_explicitas:
  - "Cuando la falla ya ocurrió"
  - "Antes de cualquier falla"
  - "Según un calendario"
  - "Por análisis de vibraciones"
respuesta: "Cuando la falla ya ocurrió"

explicacion: |
  Es el menos previsible.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "basico"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "El mantenimiento preventivo se realiza..."
tipo: mc
opciones_explicitas:
  - "Según un calendario o horas de uso, aunque el equipo parezca estar bien"
  - "Solo tras una falla"
  - "Nunca"
  - "Cuando el cliente lo pide"
respuesta: "Según un calendario o horas de uso, aunque el equipo parezca estar bien"

explicacion: |
  Por ejemplo, lubricar o cambiar filtros.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "El mantenimiento predictivo se basa en..."
tipo: mc
opciones_explicitas:
  - "Medir el estado del equipo para intervenir cuando la falla se acerca"
  - "Adivinar"
  - "Esperar la falla"
  - "Cambiar todo por año"
respuesta: "Medir el estado del equipo para intervenir cuando la falla se acerca"

explicacion: |
  Usa vibraciones, temperatura, corriente o análisis de aceite.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "El mantenimiento proactivo busca..."
tipo: mc
opciones_explicitas:
  - "Eliminar las causas de raíz de las fallas"
  - "Reparar rápido"
  - "Reducir costos reemplazando todo"
  - "Ignorar fallas leves"
respuesta: "Eliminar las causas de raíz de las fallas"

explicacion: |
  Por ejemplo, corregir una mala alineación.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "¿Qué es el MTBF?"
tipo: mc
opciones_explicitas:
  - "El tiempo medio entre fallas"
  - "El tiempo medio de reparación"
  - "La disponibilidad"
  - "El costo medio"
respuesta: "El tiempo medio entre fallas"

explicacion: |
  Mide cuánto funciona en promedio entre una falla y otra.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "¿Qué es el MTTR?"
tipo: mc
opciones_explicitas:
  - "El tiempo medio de reparación"
  - "El tiempo medio entre fallas"
  - "La temperatura media"
  - "La tensión media"
respuesta: "El tiempo medio de reparación"

explicacion: |
  Cuánto tarda en volver a funcionar después de fallar.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "avanzado"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "La disponibilidad se calcula como..."
tipo: mc
opciones_explicitas:
  - "MTBF / (MTBF + MTTR)"
  - "MTBF · MTTR"
  - "MTTR / MTBF"
  - "MTBF − MTTR"
respuesta: "MTBF / (MTBF + MTTR)"

explicacion: |
  Aumenta con más MTBF o menos MTTR.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "Al diagnosticar un lazo de control, lo primero es..."
tipo: mc
opciones_explicitas:
  - "Observar el síntoma y verificar la medición"
  - "Cambiar la sintonía"
  - "Cambiar el PLC"
  - "Reiniciar la planta"
respuesta: "Observar el síntoma y verificar la medición"

explicacion: |
  Se revisa en orden: medición, actuador, controlador y recién después la sintonía.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "Una lectura de 0 mA en un lazo de 4-20 mA sugiere..."
tipo: mc
opciones_explicitas:
  - "Cable cortado o instrumento sin alimentación"
  - "Variable en cero"
  - "Lazo perfecto"
  - "Falla del software"
respuesta: "Cable cortado o instrumento sin alimentación"

explicacion: |
  El cero vivo permite detectar esta condición.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "avanzado"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "Muchos transmisores señalan una falla propia con una corriente..."
tipo: mc
opciones_explicitas:
  - "Por debajo de 3,6 mA o por encima de 21 mA"
  - "De exactamente 12 mA"
  - "De 4 mA fijos"
  - "De 20 mA fijos"
respuesta: "Por debajo de 3,6 mA o por encima de 21 mA"

explicacion: |
  Son valores fuera del rango normal de medición.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "Si el sensor está activo pero la entrada del PLC no lo refleja, el problema probablemente está en..."
tipo: mc
opciones_explicitas:
  - "El cableado o el módulo de entrada"
  - "El programa"
  - "El actuador"
  - "La salida"
respuesta: "El cableado o el módulo de entrada"

explicacion: |
  Se sigue la cadena desde el sensor.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "Si la entrada del PLC es correcta y la salida no responde, hay que revisar..."
tipo: mc
opciones_explicitas:
  - "El programa o el módulo de salida"
  - "El sensor"
  - "La alimentación del sensor"
  - "El cable de entrada"
respuesta: "El programa o el módulo de salida"

explicacion: |
  Se avanza en la cadena causa-efecto.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "avanzado"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "¿Por qué conviene guardar respaldos de los programas y parámetros?"
tipo: mc
opciones_explicitas:
  - "Para configurar un equipo reemplazado en minutos"
  - "Para ocupar espacio"
  - "Porque lo pide el sensor"
  - "Para evitar el mantenimiento"
respuesta: "Para configurar un equipo reemplazado en minutos"

explicacion: |
  También sirve ante una pérdida de memoria.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "basico"
  tags: ["mantenimiento", "diagnostico"]

enunciado: "Antes de intervenir un equipo hay que..."
tipo: mc
opciones_explicitas:
  - "Aplicar bloqueo y etiquetado y verificar la ausencia de energía"
  - "Trabajar con él encendido sin avisar"
  - "Desactivar todas las alarmas"
  - "Quitar las protecciones"
respuesta: "Aplicar bloqueo y etiquetado y verificar la ausencia de energía"

explicacion: |
  Es la regla de seguridad básica.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "basico"
  tags: ["mantenimiento", "diagnostico"]

respuesta: verdadero
tipo: vf

enunciado: "Muchos problemas atribuidos al control son en realidad del instrumento o del actuador."

explicacion: |
  Por eso se revisa primero la medición y el actuador.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "basico"
  tags: ["mantenimiento", "diagnostico"]

respuesta: falso
tipo: vf

enunciado: "Un equipo muy confiable siempre tiene mejor disponibilidad que uno fácil de reparar."

explicacion: |
  Depende de ambos tiempos.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "basico"
  tags: ["mantenimiento", "diagnostico"]

respuesta: verdadero
tipo: vf

enunciado: "Un buen historial de fallas ayuda a ajustar los intervalos de mantenimiento preventivo."

explicacion: |
  Se detectan fallas repetidas.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "basico"
  tags: ["mantenimiento", "diagnostico"]

respuesta: falso
tipo: vf

enunciado: "Cambiar parámetros del controlador al azar es una buena forma de diagnosticar."

explicacion: |
  Conviene revisar primero señal, actuador y modo.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

tipo: completar
enunciado: "El mantenimiento que usa mediciones de vibración y temperatura para decidir cuándo intervenir es el ___ (predictivo / correctivo)."
respuestas_validas:
  - "predictivo"

explicacion: |
  Interviene cuando los datos lo indican.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

tipo: completar
enunciado: "La disponibilidad aumenta si el MTTR ___ (aumenta / disminuye)."
respuestas_validas:
  - "disminuye"

explicacion: |
  Se repara más rápido.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

variables:
  mtbf: random(200, 1000)
  mttr: random(2, 20)

respuesta: redondear(mtbf / (mtbf + mttr) * 100, 1)
tipo: input
tolerancia_abs: 0.2

enunciado: "Un equipo tiene un MTBF de {mtbf} horas y un MTTR de {mttr} horas. ¿Cuál es su disponibilidad, en %? (redondeá a un decimal)"

pasos:
  - "Disponibilidad = MTBF / (MTBF + MTTR)"

explicacion: |
  Se expresa en porcentaje.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "intermedio"
  tags: ["mantenimiento", "diagnostico"]

variables:
  horas: random(2000, 8000)
  fallas: random(2, 10)

respuesta: redondear(horas / fallas, 0)
tipo: input
tolerancia_abs: 1

enunciado: "Un equipo funcionó {horas} horas y tuvo {fallas} fallas. ¿Cuál es su MTBF aproximado, en horas? (redondeá a la unidad)"

pasos:
  - "MTBF = horas de funcionamiento / número de fallas"

explicacion: |
  Promedio entre fallas.
```

```
metadata:
  materia: "automatizacion"
  tema: "mantenimiento_y_diagnostico_de_sistemas_automatizados"
  nivel: "basico"
  tags: ["mantenimiento", "diagnostico"]

variables:
  total: random(10, 100)
  fuera: random(1, 9)

respuesta: fuera
tipo: input
tolerancia_abs: 0

enunciado: "Un lazo registró {total} lecturas de las cuales {fuera} cayeron por debajo de 3,6 mA. ¿Cuántas lecturas indican posible falla del instrumento?"

pasos:
  - "Se cuentan las lecturas por debajo de 3,6 mA"

explicacion: |
  Ese valor está fuera del rango normal de medición.
```

## Sección: motores-electricos-y-variadores-de-frecuencia (24 preguntas)

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

enunciado: "Un motor eléctrico convierte..."
tipo: mc
opciones_explicitas:
  - "Energía eléctrica en energía mecánica de rotación"
  - "Energía mecánica en eléctrica"
  - "Calor en luz"
  - "Sonido en electricidad"
respuesta: "Energía eléctrica en energía mecánica de rotación"

explicacion: |
  La función inversa es la del generador.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

enunciado: "¿Cuál es el motor más usado en la industria?"
tipo: mc
opciones_explicitas:
  - "El asíncrono trifásico (de inducción)"
  - "El paso a paso"
  - "El servomotor"
  - "El motor de escobillas"
respuesta: "El asíncrono trifásico (de inducción)"

explicacion: |
  Es robusto, económico y casi no necesita mantenimiento.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

enunciado: "¿Qué hace un motor paso a paso?"
tipo: mc
opciones_explicitas:
  - "Gira un ángulo fijo por cada pulso"
  - "Gira continuo sin control"
  - "Solo se usa en la red"
  - "Siempre usa escobillas"
respuesta: "Gira un ángulo fijo por cada pulso"

explicacion: |
  Por ejemplo, 1,8° por paso da 200 pasos por vuelta.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

enunciado: "¿Qué agrega un servomotor a un motor común?"
tipo: mc
opciones_explicitas:
  - "Un sensor de posición y un controlador que cierra el lazo"
  - "Más polos"
  - "Un rotor mayor"
  - "Menos corriente"
respuesta: "Un sensor de posición y un controlador que cierra el lazo"

explicacion: |
  Permite seguir referencias con precisión.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

enunciado: "En un motor de CC, ¿cómo se regula bien la velocidad?"
tipo: mc
opciones_explicitas:
  - "Variando la tensión"
  - "Variando los polos"
  - "Cambiando el rotor"
  - "Cambiando la red de 50 a 60 Hz"
respuesta: "Variando la tensión"

explicacion: |
  Es una de sus ventajas históricas.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

enunciado: "La velocidad sincrónica de un motor asíncrono depende de..."
tipo: mc
opciones_explicitas:
  - "La frecuencia de red y el número de polos"
  - "El color del motor"
  - "La longitud del cable"
  - "La temperatura ambiente solamente"
respuesta: "La frecuencia de red y el número de polos"

explicacion: |
  ns = 120 · f / p.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

enunciado: "En una red de 50 Hz, un motor de 4 polos tiene velocidad sincrónica de..."
tipo: mc
opciones_explicitas:
  - "1500 rpm"
  - "3000 rpm"
  - "750 rpm"
  - "1800 rpm"
respuesta: "1500 rpm"

explicacion: |
  120 · 50 / 4 = 1500.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

enunciado: "El deslizamiento de un motor asíncrono es..."
tipo: mc
opciones_explicitas:
  - "La diferencia relativa entre la velocidad sincrónica y la del rotor"
  - "La pérdida de aceite"
  - "Un tipo de arranque"
  - "La caída de tensión en el cable"
respuesta: "La diferencia relativa entre la velocidad sincrónica y la del rotor"

explicacion: |
  s = (ns − n) / ns.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

enunciado: "El arranque estrella-triángulo sirve para..."
tipo: mc
opciones_explicitas:
  - "Reducir la corriente de arranque"
  - "Aumentar el par de arranque"
  - "Invertir el giro"
  - "Eliminar el motor"
respuesta: "Reducir la corriente de arranque"

explicacion: |
  La reduce a aproximadamente un tercio.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

enunciado: "¿Qué es un variador de frecuencia?"
tipo: mc
opciones_explicitas:
  - "Un equipo que entrega tensión y frecuencia ajustables al motor"
  - "Un sensor de velocidad"
  - "Un tipo de relé"
  - "Un freno mecánico"
respuesta: "Un equipo que entrega tensión y frecuencia ajustables al motor"

explicacion: |
  Al cambiar la frecuencia cambia la velocidad.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "avanzado"
  tags: ["motores", "variadores"]

enunciado: "¿Por qué el variador ajusta la tensión junto con la frecuencia?"
tipo: mc
opciones_explicitas:
  - "Para mantener el flujo magnético (control V/f)"
  - "Para ahorrar cables"
  - "Para cambiar el color"
  - "Porque lo exige la norma de embalaje"
respuesta: "Para mantener el flujo magnético (control V/f)"

explicacion: |
  Si no, el motor se saturaría o perdería par.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "avanzado"
  tags: ["motores", "variadores"]

enunciado: "¿Dónde el ahorro de energía con variador es más importante?"
tipo: mc
opciones_explicitas:
  - "En bombas y ventiladores"
  - "En cargas que no se mueven"
  - "En lámparas"
  - "En motores paso a paso"
respuesta: "En bombas y ventiladores"

explicacion: |
  La potencia baja mucho al reducir la velocidad.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

enunciado: "Un motor sobrecargado..."
tipo: mc
opciones_explicitas:
  - "Se calienta y puede dañarse"
  - "Gira más rápido"
  - "Consume menos"
  - "No cambia"
respuesta: "Se calienta y puede dañarse"

explicacion: |
  Se protege con relé térmico o con el variador.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "avanzado"
  tags: ["motores", "variadores"]

enunciado: "El código IP de un motor indica..."
tipo: mc
opciones_explicitas:
  - "El grado de protección de la carcasa contra polvo y agua"
  - "La potencia"
  - "La velocidad"
  - "El número de polos"
respuesta: "El grado de protección de la carcasa contra polvo y agua"

explicacion: |
  Aparece en la chapa de características.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

respuesta: verdadero
tipo: vf

enunciado: "En Argentina la red eléctrica es de 50 Hz."

explicacion: |
  Se usa para calcular la velocidad sincrónica.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

respuesta: falso
tipo: vf

enunciado: "El motor asíncrono gira exactamente a la velocidad sincrónica."

explicacion: |
  Gira algo más lento: esa diferencia es el deslizamiento.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

respuesta: verdadero
tipo: vf

enunciado: "Un variador permite arrancar y parar un motor con suavidad."

explicacion: |
  Alarga la vida útil de los equipos.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

respuesta: falso
tipo: vf

enunciado: "El arranque directo es el más indicado para motores muy grandes."

explicacion: |
  La corriente de arranque es muy alta.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

tipo: completar
enunciado: "La velocidad sincrónica se calcula como ns = 120 · f / ___ (p = número de polos)."
respuestas_validas:
  - "p"

explicacion: |
  f es la frecuencia en hertz.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

tipo: completar
enunciado: "Un motor que gira un ángulo fijo por pulso es un motor ___ (paso a paso / asíncrono)."
respuestas_validas:
  - "paso a paso"

explicacion: |
  Tiene pasos discretos.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

variables:
  p: uno_de([2, 4, 6, 8])

respuesta: 120 * 50 / p
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuál es la velocidad sincrónica (en rpm) de un motor de {p} polos conectado a una red de 50 Hz?"

pasos:
  - "ns = 120 · f / p"

explicacion: |
  Se aplica la fórmula con f = 50 Hz.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "intermedio"
  tags: ["motores", "variadores"]

variables:
  f: uno_de([30, 40, 50, 60])
  p: uno_de([2, 4])

respuesta: 120 * f / p
tipo: input
tolerancia_abs: 0

enunciado: "Un variador alimenta un motor de {p} polos a {f} Hz. ¿Cuál es la velocidad sincrónica, en rpm?"

pasos:
  - "ns = 120 · f / p"

explicacion: |
  Al cambiar la frecuencia cambia la velocidad.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "avanzado"
  tags: ["motores", "variadores"]

variables:
  ns: uno_de([1500, 3000, 1000])
  s: uno_de([2, 3, 4, 5])

respuesta: redondear(ns * (1 - s / 100), 0)
tipo: input
tolerancia_abs: 1

enunciado: "Un motor tiene velocidad sincrónica de {ns} rpm y un deslizamiento del {s} %. ¿A cuántas rpm gira el rotor? (redondeá a la unidad)"

pasos:
  - "n = ns · (1 − s)"

explicacion: |
  El rotor gira un poco más lento que el campo.
```

```
metadata:
  materia: "automatizacion"
  tema: "motores_electricos_y_variadores_de_frecuencia"
  nivel: "basico"
  tags: ["motores", "variadores"]

variables:
  np: uno_de([200, 400, 48, 96])

respuesta: 360 / np
tipo: input
tolerancia_abs: 0.01

enunciado: "Un motor paso a paso da {np} pasos por vuelta. ¿Cuántos grados avanza en cada paso? (si no es exacto, redondeá a dos decimales)"

pasos:
  - "Ángulo por paso = 360° / pasos por vuelta"

explicacion: |
  Un paso de 1,8° equivale a 200 pasos por vuelta.
```

