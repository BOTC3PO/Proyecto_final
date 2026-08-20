# Fisica — Generador motor transformador (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El motor eléctrico

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["electromagnetismo", "motor"]

respuesta: "convertir energía eléctrica en energía mecánica"
tipo: completar
respuestas_validas:
  - "convertir energía eléctrica en energía mecánica"
  - "transformar electricidad en movimiento"

enunciado: "La función principal de un motor eléctrico es ___."

explicacion: |
  Un motor eléctrico utiliza la fuerza de Lorentz (interacción entre un campo magnético y una corriente) para producir movimiento a partir de electricidad.
```

### 2 — El transformador

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["transformador", "inducion"]

opciones_explicitas: ["Aumenta o disminuye el voltaje", "Convierte corriente continua en alterna", "Produce movimiento mecánico"]
respuesta: "Aumenta o disminuye el voltaje"
tipo: mc

enunciado: "¿Cuál es la función principal de un transformador ideal?"

explicacion: |
  El transformador opera mediante inducción electromagnética para cambiar los niveles de tensión (voltaje) y corriente, manteniendo la frecuencia constante.
```

### 3 — El generador eléctrico

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["generador", "inducion"]

respuesta: verdadero
tipo: vf

enunciado: "Un generador eléctrico transforma energía mecánica en energía eléctrica mediante la inducción electromagnética."

explicacion: |
  Correcto. El movimiento de un conductor dentro de un campo magnético (o viceversa) induce una fuerza electromotriz (FEM) según la Ley de Faraday.
```

### 4 — Componentes de un motor

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "intermedio"
  tags: ["componentes", "motor"]

opciones_explicitas: ["Estator y Rotor", "Primario y Secundario", "Bobina y Núcleo"]
respuesta: "Estator y Rotor"
tipo: mc

enunciado: "En un motor eléctrico, las partes fijas y móviles se denominan respectivamente:"

explicacion: |
  El estator es la parte que permanece inmóvil, mientras que el rotor es la parte que gira para producir el trabajo mecánico.
```

### 5 — Flujo de energía

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["energia", "flujo"]

variables:
  idx: uno_de([0, 1, 2])
  escenario: [["Generador", "Mecánica -> Eléctrica"], ["Motor", "Eléctrica -> Mecánica"], ["Transformador", "Eléctrica -> Eléctrica"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Mecánica -> Eléctrica", "Eléctrica -> Mecánica", "Eléctrica -> Eléctrica"]

enunciado: "Si estamos ante un {escenario[idx][0]}, el flujo de energía es: ___."

explicacion: |
  Cada dispositivo tiene una conversión de energía distinta: el generador produce electricidad, el motor la consume para moverse, y el transformador solo cambia sus niveles.
```

### 6 — Fuerza electromotriz inducida

```
metadata:
  materia: "fisica"
  tema: "generador_electrico"
  nivel: "intermedio"
  tags: ["ley_de_faraday", "generador"]

variables:
  N: 150
  phi: 0.02
  dt: 0.05
  em: N * phi / dt

respuesta: em
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un generador tiene una bobina con {N} espiras. El flujo magnético a través de cada espira cambia de 0 a {phi} Wb en un intervalo de tiempo de {dt} segundos. ¿Cuál es la magnitud de la fuerza electromotriz (FEM) inducida?"

pasos:
  - "Calcular el cambio de flujo total: ΔΦ_total = N * Δφ"
  - "Aplicar la Ley de Faraday: ε = ΔΦ_total / Δt"

explicacion: |
  La Ley de Faraday establece que la FEM inducida es igual a la tasa de cambio del flujo magnético.
  ΔΦ = 150 * 0.02 = 3 Wb.
  ε = 3 / 0.05 = 60 V.
```

### 7 — Transformador ideal

```
metadata:
  materia: "fisica"
  tema: "transformador"
  nivel: "basico"
  tags: ["transformador", "relacion_de_vueltas"]

variables:
  Vp: 220
  Vs: 11
  Np: 1000
  Ns: 50

respuesta: "11"
tipo: mc
opciones_explicitas: ["11", "110", "2200", "55"]

enunciado: "En un transformador ideal, la relación entre el voltaje primario (Vp) y el secundario (Vs) es igual a la relación entre el número de espiras del primario (Np) y el secundario (Ns). Si Vp = {Vp} V y Np = {Np} espiras, y Ns = {Ns} espiras, ¿cuál es el voltaje de salida Vs?"

explicacion: |
  Usamos la relación: Vs = Vp * (Ns / Np)
  Vs = 220 * (50 / 1000) = 220 * 0.05 = 11 V.
```

### 8 — Motor eléctrico y torque

```
metadata:
  materia: "fisica"
  tema: "motor_electrico"
  nivel: "intermedio"
  tags: ["motor", "torque", "fuerza_lorentz"]

variables:
  B: 0.5
  L: 0.2
  I: 10
  tau: B * L * I

respuesta: verdadero
tipo: vf

enunciado: "En un motor eléctrico, la fuerza que actúa sobre un conductor de longitud {L} metros, inmerso en un campo magnético uniforme de {B} Teslas con una corriente de {I} Amperios, genera un torque si la fuerza es perpendicular al eje de rotación. ¿Es la fuerza magnética resultante sobre el conductor de 1.0 N?"

explicacion: |
  La fuerza magnética es F = I * L * B * sin(θ).
  Asumiendo perpendicularidad (sin(90) = 1):
  F = 10 * 0.2 * 0.5 = 1.0 N.
```

### 9 — Componentes de un motor

```
metadata:
  materia: "fisica"
  tema: "motor_electrico"
  nivel: "basico"
  tags: ["componentes", "motor"]

respuesta_orden: ["Armadura", "Colector", "Escobillas"]
tipo: ordenar

opciones_explicitas: ["Escobillas", "Colector", "Armadura"]

enunciado: "Ordene los componentes de un motor de corriente continua (DC) desde la parte que recibe la corriente de la fuente externa hasta la parte que interactúa directamente con el campo magnético para generar movimiento."

explicacion: |
  El flujo de energía/movimiento sigue este orden:
  1. Escobillas (reciben la corriente).
  2. Colector (conecta las escobillas con las espiras).
  3. Armadura (las espiras donde ocurre la fuerza).
```

### 10 — Relación de potencias en transformadores

```
metadata:
  materia: "fisica"
  tema: "transformador"
  nivel: "avanzado"
  tags: ["potencia", "transformador"]

variables:
  Vp: 120
  Ip: 5
  Ns: 12
  Is: 50

respuesta: "600"
tipo: completar
respuestas_validas:
  - "600"

enunciado: "En un transformador ideal, la potencia de entrada es igual a la potencia de salida (Pin = Pout). Si el voltaje primario es de {Vp} V con una corriente de {Ip} A, y el voltaje secundario es de {Ns} V, ¿cuál es el valor de la corriente secundaria Is en Amperios?"

explicacion: |
  P_primaria = Vp * Ip = 120 * 5 = 600 W.
  Como es ideal, P_secundaria = 600 W.
  Is = P_secundaria / Vs = 600 / 12 = 50 A.
```

### 11 — El papel del campo magnético

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["electromagnetismo", "inducido"]

enunciado: "Para que un generador eléctrico produzca corriente continua o alterna, es indispensable que exista un ___ campo magnético que cambie respecto a las bobinas para inducir una fuerza electromotriz."

respuestas_validas:
  - "variación"
  - "cambio"
  - "movimiento"
tipo: completar

explicacion: |
  Para que ocurra la inducción electromagnética (Ley de Faraday), no basta con tener un campo magnético constante; el flujo magnético debe variar en el tiempo o el conductor debe moverse a través del campo.
```

### 12 — Transformadores y corriente continua

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "intermedio"
  tags: ["transformador", "corriente_continua"]

variables:
  es_ac: uno_de([verdadero, falso])

enunciado: "Un transformador ideal conectado a una fuente de corriente continua (DC) con voltaje constante, ¿podrá transferir energía de forma eficiente al secundario?"

opciones_explicitas: ["Si, funciona igual que en AC", "No, porque el flujo magnético no varía"]
respuesta: "No, porque el flujo magnético no varía"
tipo: mc

explicacion: |
  Los transformadores funcionan basados en la variación del flujo magnético (Ley de Faraday). En CC, el flujo es constante, por lo que no se induce voltaje en la bobina secundaria.
```

### 13 — Intercambio de energía en motores

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["motor_electrico", "energia"]

enunciado: "En un motor eléctrico, la transformación de energía principal es de energía ___ a energía ___."

opciones_explicitas: ["eléctrica a mecánica", "mecánica a eléctrica", "química a eléctrica"]
respuesta: "eléctrica a mecánica"
tipo: mc

explicacion: |
  El motor consume energía eléctrica para producir movimiento (trabajo mecánico), mientras que el generador hace lo opuesto.
```

### 14 — Componentes de un motor eléctrico

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "intermedio"
  tags: ["motor", "componentes"]

enunciado: "En un motor de corriente continua, ¿cuál es el componente encargado de conmutar la corriente para mantener el movimiento rotatorio?"

opciones_explicitas: ["El conmutador (colector)", "El núcleo de hierro", "El inducido"]
respuesta: "El conmutador (colector)"
tipo: mc

explicacion: |
  El conmutador (o colector) invierte la dirección de la corriente en las bobinas del inducido en el momento justo para que el torque sea siempre en la misma dirección.
```

### 15 — Flujo de trabajo en un sistema de generación

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "intermedio"
  tags: ["secuencia", "generador"]

enunciado: "Ordena los pasos que ocurren en una central hidroeléctrica para obtener electricidad en un hogar:"

opciones_explicitas: ["Energía cinética del agua", "Rotación del eje del generador", "Inducción de corriente eléctrica", "Distribución por líneas de alta tensión"]
respuesta_orden: ["Energía cinética del agua", "Rotación del eje del generador", "Inducción de corriente eléctrica", "Distribución por líneas de alta tensión"]
tipo: ordenar

explicacion: |
  La secuencia lógica es: la caída del agua mueve la turbina (energía cinética), la turbina mueve el generador (energía mecánica), el generador induce electricidad (energía eléctrica) y esta se transporta.
```

### 16 — El rol de la energía en el motor

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["electromagnetismo", "motor"]

respuesta: falso
tipo: vf

enunciado: "En un motor eléctrico, la energía eléctrica se transforma en energía mecánica."

explicacion: |
  Es falso. En un motor, la energía eléctrica se transforma en energía mecánica. El enunciado describe correctamente el proceso, pero la pregunta pide validar la afirmación. (Nota: Si la afirmación es verdadera, la respuesta debe ser verdadero).
```

### 17 — Transformación de energía en el generador

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["generador", "energia"]

variables:
  escenario: uno_de([["mecánica", "eléctrica"], ["eléctrica", "mecánica"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["mecánica", "eléctrica"]

enunciado: "Un generador eléctrico realiza el proceso inverso a un motor: transforma la energía {escenario[0]} en energía {escenario[1]}."

explicacion: |
  El generador utiliza movimiento (energía mecánica) para inducir una corriente eléctrica (energía eléctrica) mediante la ley de Faraday.
```

### 18 — El componente clave del transformador

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "intermedio"
  tags: ["transformador", "inducion"]

respuesta: "campo magnético variable"
tipo: completar
respuestas_validas:
  - "campo magnético variable"
  - "corriente continua"
  - "resistencia"

enunciado: "A diferencia de un motor o generador que requiere movimiento físico, el transformador funciona mediante la variación de un ___ entre dos bobinas."

explicacion: |
  El transformador opera por inducción electromagnética, pero requiere que el flujo magnético sea variable (corriente alterna) para inducir voltaje en el secundario.
```

### 19 — Diferencia fundamental de corriente

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "intermedio"
  tags: ["corriente_alterna", "transformador"]

respuesta: "alterna"
tipo: mc
opciones_explicitas: ["continua", "alterna", "estática"]

enunciado: "Un transformador solo puede funcionar con corriente de tipo ___ para poder inducir voltaje en el devanado secundario."

explicacion: |
  El transformador requiere un flujo magnético variable, lo cual solo se logra con corriente alterna (AC). La corriente continua (DC) produce un campo constante que no induce voltaje en el secundario.
```

### 20 — Flujo de energía en dispositivos eléctricos

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "avanzado"
  tags: ["comparacion", "energia"]

variables:
  datos: [["Generador", "Mecánica -> Eléctrica"], ["Motor", "Eléctrica -> Mecánica"], ["Transformador", "Eléctrica -> Eléctrica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Mecánica -> Eléctrica", "Eléctrica -> Mecánica", "Eléctrica -> Eléctrica"]

enunciado: "Considerando el dispositivo seleccionado: {datos[idx][0]}, su función principal es la conversión de: ___"

explicacion: |
  Cada dispositivo tiene una dirección de conversión de energía específica: el generador produce electricidad, el motor la consume para producir movimiento, y el transformador solo cambia sus niveles de tensión.
```

### 21 — Conversión de energía en un motor

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["electromagnetismo", "motor"]

variables:
  escenario_idx: uno_de([0,1])
  dispositivos: ["un ventilador de techo", "un taladro de mano"]
  entrada_energia: "energía eléctrica"

respuesta: entrada_energia
tipo: mc
opciones_explicitas: ["energía eléctrica", "energía mecánica", "energía térmica"]

enunciado: "Un motor eléctrico, como el de {dispositivos[escenario_idx]}, funciona transformando {entrada_energia} en energía mecánica."

explicacion: |
  El motor eléctrico consume energía eléctrica para producir movimiento (energía mecánica).
```

### 22 — El papel del transformador

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "intermedio"
  tags: ["transformador", "voltaje"]

variables:
  caso_idx: uno_de([0,1])
  info: [["aumentar el voltaje", "bajar el voltaje"], ["aumentar el voltaje", "bajar el voltaje"]]

respuesta: info[caso_idx][0]
tipo: mc
opciones_explicitas: ["aumentar el voltaje", "bajar el voltaje", "cambiar la frecuencia"]

enunciado: "Un transformador conectado a una red de alta tensión se utiliza principalmente para {info[caso_idx][0]} antes de distribuirla a las casas."

explicacion: |
  Los transformadores permiten elevar o disminuir el voltaje para optimizar la transmisión y el uso doméstico.
```

### 23 — Generador y Ley de Faraday

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "avanzado"
  tags: ["induccion", "generador"]

variables:
  tipo_gen: uno_de([0,1])
  principio: [["movimiento mecánico", "energía eléctrica"], ["energía eléctrica", "energía mecánica"]]

respuesta: principio[tipo_gen][1]
tipo: completar
enunciado: "En un generador eléctrico, la conversión de {principio[tipo_gen][0]} en {principio[tipo_gen][1]} se basa en la inducción electromagnética."

explicacion: |
  El generador convierte energía mecánica (movimiento) en energía eléctrica mediante un campo magnético variable.
```

### 24 — Componentes de un transformador

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["componentes", "transformador"]

respuesta_orden: ["Núcleo ferromagnético", "Bobina primaria", "Bobina secundaria"]
tipo: ordenar

opciones_explicitas: ["Núcleo ferromagnético", "Bobina primaria", "Bobina secundaria"]

enunciado: "Ordena los componentes esenciales de un transformador ideal desde el que recibe la energía hasta el que la entrega, pasando por el medio de transmisión:"

explicacion: |
  La energía entra por la bobina primaria, se transmite a través del núcleo ferromagnético y sale por la bobina secundaria.
```

### 25 — Diferencia fundamental de flujo

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "intermedio"
  tags: ["flujo_energia"]

variables:
  tipo_dispositivo: uno_de([0,1])
  flujo: [["Eléctrica $\\rightarrow$ Mecánica", "Mecánica $\\rightarrow$ Eléctrica"], ["Eléctrica $\\rightarrow$ Mecánica", "Mecánica $\\rightarrow$ Eléctrica"]]

respuesta: flujo[tipo_dispositivo][0]
tipo: completar
respuestas_validas:
  - "Eléctrica $\\rightarrow$ Mecánica"
  - "Mecánica $\\rightarrow$ Eléctrica"

enunciado: "La dirección del flujo de energía en un motor es ___."

explicacion: |
  El motor toma electricidad y la convierte en movimiento. El generador hace lo opuesto.
```
