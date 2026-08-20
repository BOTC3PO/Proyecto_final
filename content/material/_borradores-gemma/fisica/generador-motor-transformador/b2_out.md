### 1 — Fuerza electromotriz inducida
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
tipo: input
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

### 2 — Transformador ideal
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

### 3 — Motor eléctrico y torque
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

### 4 — Componentes de un motor
```
metadata:
  materia: "fisica"
  tema: "motor_electrico"
  nivel: "basico"
  tags: ["componentes", "motor"]

respuesta: ["Armadura", "Colector", "Escobillas"]
tipo: ordenar

opciones_explicitas: ["Escobillas", "Colector", "Armadura"]

enunciado: "Ordene los componentes de un motor de corriente continua (DC) desde la parte que recibe la corriente de la fuente externa hasta la parte que interactúa directamente con el campo magnético para generar movimiento."

explicacion: |
  El flujo de energía/movimiento sigue este orden:
  1. Escobillas (reciben la corriente).
  2. Colector (conecta las escobillas con las espiras).
  3. Armadura (las espiras donde ocurre la fuerza).
```

### 5 — Relación de potencias en transformadores
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
respuestas_validas: ["600"]

enunciado: "En un transformador ideal, la potencia de entrada es igual a la potencia de salida (Pin = Pout). Si el voltaje primario es de {Vp} V con una corriente de {Ip} A, y el voltaje secundario es de {Ns} V, ¿cuál es el valor de la corriente secundaria Is en Amperios?"

explicacion: |
  P_primaria = Vp * Ip = 120 * 5 = 600 W.
  Como es ideal, P_secundaria = 600 W.
  Is = P_secundaria / Vs = 600 / 12 = 50 A.
```