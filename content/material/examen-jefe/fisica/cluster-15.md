# Examen jefe — [PENDIENTE #750]

> Logro #750. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 7 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **178 preguntas totales** en 7/7 secciones.

---

## Sección: generador-motor-transformador (25 preguntas)

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

```
metadata:
  materia: "fisica"
  tema: "motor_electrico"
  nivel: "basico"
  tags: ["componentes", "motor"]

respuesta_orden: ["Escobillas", "Colector", "Armadura"]
tipo: ordenar

opciones_explicitas: ["Escobillas", "Colector", "Armadura"]

enunciado: "Ordene los componentes de un motor de corriente continua (DC) desde la parte que recibe la corriente de la fuente externa hasta la parte que interactúa directamente con el campo magnético para generar movimiento."

explicacion: |
  El flujo de energía/movimiento sigue este orden:
  1. Escobillas (reciben la corriente).
  2. Colector (conecta las escobillas con las espiras).
  3. Armadura (las espiras donde ocurre la fuerza).
```

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

respuesta: "50"
tipo: completar
respuestas_validas:
  - "50"

enunciado: "En un transformador ideal, la potencia de entrada es igual a la potencia de salida (Pin = Pout). Si el voltaje primario es de {Vp} V con una corriente de {Ip} A, y el voltaje secundario es de {Ns} V, ¿cuál es el valor de la corriente secundaria Is en Amperios?"

explicacion: |
  P_primaria = Vp * Ip = 120 * 5 = 600 W.
  Como es ideal, P_secundaria = 600 W.
  Is = P_secundaria / Vs = 600 / 12 = 50 A.
```

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

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["electromagnetismo", "motor"]

respuesta: verdadero
tipo: vf

enunciado: "En un motor eléctrico, la energía eléctrica se transforma en energía mecánica."

explicacion: |
  Es verdadero. En un motor, la energía eléctrica se transforma en energía mecánica mediante la fuerza de Lorentz sobre los conductores con corriente dentro de un campo magnético.
```

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["generador", "energia"]

variables:
  escenario: ["mecánica", "eléctrica"]

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["mecánica", "eléctrica"]

enunciado: "Un generador eléctrico realiza el proceso inverso a un motor: transforma la energía {escenario[0]} en energía {escenario[1]}."

explicacion: |
  El generador utiliza movimiento (energía mecánica) para inducir una corriente eléctrica (energía eléctrica) mediante la ley de Faraday.
```

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

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "intermedio"
  tags: ["transformador", "voltaje"]

variables:
  caso_idx: uno_de([0,1])
  info: [["bajar el voltaje", "aumentar el voltaje"], ["bajar el voltaje", "aumentar el voltaje"]]

respuesta: info[caso_idx][0]
tipo: mc
opciones_explicitas: ["aumentar el voltaje", "bajar el voltaje", "cambiar la frecuencia"]

enunciado: "Un transformador conectado a una red de alta tensión se utiliza principalmente para {info[caso_idx][0]} antes de distribuirla a las casas."

explicacion: |
  Los transformadores permiten elevar o disminuir el voltaje para optimizar la transmisión y el uso doméstico.
```

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "avanzado"
  tags: ["induccion", "generador"]

variables:
  tipo_gen: 0
  principio: [["movimiento mecánico", "energía eléctrica"]]

respuesta: principio[tipo_gen][1]
tipo: completar
enunciado: "En un generador eléctrico, la conversión de {principio[tipo_gen][0]} en {principio[tipo_gen][1]} se basa en la inducción electromagnética."

explicacion: |
  El generador convierte energía mecánica (movimiento) en energía eléctrica mediante un campo magnético variable.
```

```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["componentes", "transformador"]

respuesta_orden: ["Bobina primaria", "Núcleo ferromagnético", "Bobina secundaria"]
tipo: ordenar

opciones_explicitas: ["Núcleo ferromagnético", "Bobina primaria", "Bobina secundaria"]

enunciado: "Ordena los componentes esenciales de un transformador ideal desde el que recibe la energía hasta el que la entrega, pasando por el medio de transmisión:"

explicacion: |
  La energía entra por la bobina primaria, se transmite a través del núcleo ferromagnético y sale por la bobina secundaria.
```

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

## Sección: choques-elasticos-inelasticos (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["conservacion", "momento", "energia"]

respuesta: "momento"
tipo: completar
respuestas_validas:
  - "momento"
  - "cantidad_de_movimiento"

enunciado: "En cualquier tipo de choque (elástico o inelástico), la _______ lineal del sistema se conserva siempre, siempre que no actúen fuerzas externas netas."

explicacion: |
  La cantidad de movimiento (o momento lineal) se conserva en todos los choques si la suma de fuerzas externas es cero.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["energia_cinetica", "elastico"]

respuesta: verdadero
tipo: vf

enunciado: "En un choque perfectamente elástico, la energía cinética total del sistema antes del impacto es igual a la energía cinética total después del impacto."

explicacion: |
  Por definición, un choque es elástico si no hay pérdida de energía cinética (la energía se transforma en otras formas, pero la suma de las cinéticas se mantiene).
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["clasificacion", "choque_inelastico"]

respuesta: "Inelástico"
tipo: mc
opciones_explicitas: ["Elástico", "Inelástico"]

enunciado: "Si tras un choque dos objetos quedan pegados y se mueven con la misma velocidad, ¿qué tipo de choque ha ocurrido según la descripción del escenario?"

pasos:
  - "Identificar si hubo deformación permanente o pérdida de energía."
  - "Observar si los objetos permanecen unidos."

explicacion: |
  Cuando los objetos quedan unidos tras el impacto, el choque es perfectamente inelástico, ya que se ha perdido la mayor parte de la energía cinética en la deformación.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["energia", "inelastico"]

respuesta: falso
tipo: vf

enunciado: "En un choque perfectamente inelástico, la energía cinética del sistema se conserva íntegramente."

explicacion: |
  Falso. En los choques inelásticos, parte de la energía cinética se transforma en calor, sonido o energía de deformación.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: "Inelástico"
tipo: mc
opciones_explicitas: ["Elástico", "Inelástico", "Superelástico"]

enunciado: "Se denomina choque _______ aquel en el cual la energía cinética del sistema no se conserva, transformándose en otras formas de energía."

explicacion: |
  El término correcto es choque inelástico. En este proceso, la energía cinética se disipa.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["conservacion", "energia", "impulso"]

tipo: vf
respuesta: falso
enunciado: "En un choque perfectamente inelástico, la energía cinética total del sistema se conserva."

explicacion: |
  En un choque inelástico, la energía cinética no se conserva porque parte de ella se transforma en calor o deformación. Lo que siempre se conserva es el momento lineal (cantidad de movimiento).
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "Elástico"
tipo: mc
opciones_explicitas: ["Elástico", "Inelástico"]

enunciado: "Si tras una colisión la energía cinética total es igual a la energía cinética inicial, el choque es: ___"

explicacion: |
  Si la energía cinética se mantiene constante (sin pérdidas por calor o deformación), el choque es clasificado como elástico.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["calculo", "momento_lineal"]

variables:
  m1: uno_de([2.0, 5.0])
  v1: uno_de([10.0, 4.0])
  m2: uno_de([3.0, 2.0])
  v2: 0.0

respuesta: m1 * v1 + m2 * v2
tipo: completar
tolerancia_abs: 0.01

enunciado: "Un objeto de masa {m1} kg se mueve a {v1} m/s y colisiona con otro objeto de masa {m2} kg que está en reposo ({v2} m/s). ¿Cuál es el momento lineal total del sistema antes del choque?"

pasos:
  - "Calcular el momento del primer objeto: p1 = m1 * v1"
  - "Calcular el momento del segundo objeto: p2 = m2 * v2"
  - "Sumar ambos momentos para obtener el momento total del sistema."

explicacion: |
  El momento lineal total es la suma de los momentos individuales: p_total = {m1}*{v1} + {m2}*{v2} = {m1 * v1 + m2 * v2} kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular momentos iniciales", "Aplicar conservación de energía", "Calcular momentos finales", "Resolver sistema de ecuaciones"]

respuesta_orden: ["Calcular momentos iniciales", "Aplicar conservación de energía", "Calcular momentos finales", "Resolver sistema de ecuaciones"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un choque elástico donde se busca la velocidad final de dos cuerpos:"

explicacion: |
  Para resolver choques elásticos se requiere usar la conservación del momento lineal y la conservación de la energía cinética, lo que genera un sistema de ecuaciones para hallar las incógnitas.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "avanzado"
  tags: ["energia_cinetica", "calculo"]

variables:
  m1: 2.0
  v1: 4.0
  m2: 2.0
  v2: 6.0

respuesta: 52.0
tipo: completar
tolerancia_abs: 0.01

enunciado: "Dos masas de {m1} kg cada una se mueven en la misma dirección. La primera a {v1} m/s y la segunda a {v2} m/s. ¿Cuál es la energía cinética total inicial del sistema?"

pasos:
  - "Calcular la energía cinética de la primera masa: Ek1 = 0.5 * m1 * v1^2"
  - "Calcular la energía cinética de la segunda masa: Ek2 = 0.5 * m2 * v2^2"
  - "Sumar ambas energías: Ek_total = Ek1 + Ek2"

explicacion: |
  Ek1 = 0.5 * 2 * 4^2 = 16 J.
  Ek2 = 0.5 * 2 * 6^2 = 36 J.
  Ek_total = 16 + 36 = 52 J.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["conservacion", "energia", "momento"]

respuesta: "momento_lineal"
tipo: "mc"
opciones_explicitas: ["energia_cinetica", "momento_lineal", "energia_potencial", "impulso"]

enunciado: "En un choque perfectamente inelástico, donde los objetos quedan pegados tras la colisión, ¿qué magnitud física se conserva siempre?"

explicacion: |
  En cualquier sistema donde no actúen fuerzas externas netas, el momento lineal (p = m * v) se conserva. Sin embargo, en choques inelásticos, parte de la energía cinética se transforma en calor o deformación, por lo que la energía cinética NO se conserva.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["energia_cinetica", "choque_elastico"]

respuesta: verdadero
tipo: "vf"

enunciado: "En un choque perfectamente elástico entre dos partículas, la energía cinética total del sistema se conserva."

explicacion: |
  Por definición, un choque es elástico si la energía cinética del sistema antes del choque es igual a la energía cinética después del choque. Por lo tanto, la afirmación es verdadera.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["clasificacion", "energia"]

respuesta: "inelástico"
tipo: "completar"

enunciado: "Si en una colisión la energía cinética total se reduce tras el impacto, el choque es de tipo ___."

respuestas_validas:
  - "inelástico"

explicacion: |
  Si hay pérdida de energía cinética (que se transforma en otra forma de energía), el choque es inelástico. Si la energía cinética se mantiene constante, es elástico.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "avanzado"
  tags: ["conservacion", "leyes"]

respuesta_orden: ["momento_lineal", "energia_cinetica"]
tipo: "ordenar"
opciones_explicitas: ["momento_lineal", "energia_cinetica"]

enunciado: "Al plantear las ecuaciones de un choque perfectamente elástico, ordena estas dos magnitudes conservadas según el orden habitual en que se escriben sus ecuaciones de conservación:"

explicacion: |
  En un choque elástico se conservan tanto el momento lineal como la energía cinética. La masa total es una propiedad de la materia y no es una magnitud que se "conserve" mediante una ecuación de colisión como las otras dos.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["energia", "calor"]

respuesta: "se_pierde"
tipo: "mc"
opciones_explicitas: ["se_pierde", "se_conserva", "se_duplica", "no_cambia"]

enunciado: "En un choque inelástico, la energía cinética que no se conserva se transforma principalmente en:"

explicacion: |
  En los choques inelásticos, la energía cinética "perdida" no desaparece, sino que se transforma en energía térmica (calor), energía sonora o trabajo para deformar los cuerpos.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["mecanica", "conservacion"]

respuesta: "momento_lineal"
tipo: completar
respuestas_validas:
  - "momento_lineal"

enunciado: "En cualquier tipo de choque (elástico o inelástico) entre dos cuerpos que interactúan, la propiedad que siempre se conserva es el ___."

explicacion: |
  En un sistema aislado, la cantidad de movimiento (o momento lineal) se conserva siempre, independientemente de si el choque es elástico o inelástico.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["energia", "choques"]

respuesta: "elástico"
tipo: mc
opciones_explicitas: ["elástico", "inelástico"]

enunciado: "Si en un sistema de dos partículas se observa que la energía cinética total se mantiene constante antes y después del impacto, podemos afirmar que el choque es: ___"

explicacion: |
  La característica distintiva del choque elástico es que la energía cinética se conserva. En el inelástico, parte de esa energía se transforma en calor o deformación.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["energia", "conceptos"]

respuesta: falso

tipo: vf

enunciado: "¿Es posible que en un choque perfectamente inelástico la energía cinética total del sistema se mantenga constante?"

explicacion: |
  Falso. En un choque inelástico, la energía cinética se pierde (se transforma en otras formas de energía), aunque el momento lineal se siga conservando.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["propiedades", "comparacion"]

respuesta: verdadero

tipo: vf
enunciado: "Si comparamos un choque elástico con uno inelástico, el choque elástico se distingue porque la energía cinética se conserva."

explicacion: |
  Efectivamente, la conservación de la energía cinética es el criterio que define la elasticidad de un choque.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["metodologia", "analisis"]

opciones_explicitas: ["Calcular momento lineal inicial", "Determinar si hay pérdida de energía cinética", "Calcular momento lineal final", "Verificar si el choque fue elástico"]

respuesta_orden: ["Calcular momento lineal inicial", "Calcular momento lineal final", "Determinar si hay pérdida de energía cinética", "Verificar si el choque fue elástico"]
tipo: ordenar

enunciado: "Para analizar un choque y determinar su naturaleza, se deben seguir estos pasos lógicos:"

explicacion: |
  Primero se aplican las leyes de conservación (momento) para hallar las velocidades finales, luego se compara la energía cinética inicial con la final para clasificar el choque.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["conservacion", "momento", "energia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["colision_elástica", "se conserva"], ["colision_inelástica", "no se conserva"]]

enunciado: "En una {datos[escenario_idx][0]}, la energía cinética total del sistema ___."

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "se conserva"
  - "no se conserva"

explicacion: |
  En un choque elástico la energía cinética se conserva. En un choque inelástico parte de la energía se transforma en calor o deformación, por lo que no se conserva.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["energia_cinetica"]

enunciado: "¿Qué sucede con la energía cinética total en un choque perfectamente inelástico donde los objetos quedan pegados?"

opciones_explicitas: ["Se mantiene constante", "Se conserva parcialmente", "Se pierde (se transforma en otra forma de energía)", "Aumenta debido a la fricción"]

respuesta: "Se pierde (se transforma en otra forma de energía)"
tipo: mc

explicacion: |
  En los choques inelásticos, la energía cinética no se conserva; se transforma en energía térmica, sonido o energía de deformación.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["momento_lineal"]

enunciado: "Si dos bolas de billar chocan, independientemente de si el choque es elástico o inelástico, la cantidad de movimiento (momento lineal) total del sistema se ___."

opciones_explicitas: ["conserva", "pierde", "transforma en energía"]

respuesta: "conserva"
tipo: mc

explicacion: |
  La cantidad de movimiento lineal se conserva en todos los choques (siempre que no actúen fuerzas externas netas), ya sea elástico o inelástico.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "intermedio"
  tags: ["energia", "momento"]

enunciado: "Un accidente de tránsito donde los vehículos quedan trabados tras el impacto es un ejemplo de choque inelástico. En este caso, la energía cinética ___."

respuesta: "no se conserva la energía cinética"
tipo: completar
respuestas_validas:
  - "no se conserva la energía cinética"

explicacion: |
  Al quedar los cuerpos unidos, se trata de un choque inelástico, donde la energía cinética no se conserva.
```

```
metadata:
  materia: "fisica"
  tema: "choques_elasticos_inelasticos"
  nivel: "basico"
  tags: ["teoria"]

enunciado: "¿Es posible que en un choque inelástico la energía cinética total del sistema sea mayor que la energía cinética inicial?"

opciones_explicitas: [falso, verdadero]

respuesta: falso
tipo: vf

explicacion: |
  La energía cinética no puede aumentar espontáneamente en un choque; en los choques inelásticos, la energía cinética siempre disminuye o se mantiene (si fuera elástico).
```

## Sección: energia-potencial-gravitatoria (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["definicion", "energia"]

respuesta: "energia_potencial_gravitatoria"
tipo: completar
respuestas_validas:
  - "energia_potencial_gravitatoria"

enunciado: "La capacidad de un cuerpo de realizar un trabajo debido a su posición en un campo gravitatorio se denomina ___."

explicacion: |
  La energía potencial gravitatoria depende de la masa, la aceleración de la gravedad y la altura respecto a un nivel de referencia.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["relacion", "masa"]

variables:
  caso: uno_de([[10, "10 kg"], [25, "25 kg"], [50, "50 kg"]])

respuesta: "Se duplica"
tipo: mc
opciones_explicitas: ["Se duplica", "Se cuadruplica", "Se reduce a la mitad", "No cambia"]

enunciado: "Si duplicamos la masa de un objeto manteniendo su altura y la gravedad constantes, la energía potencial gravitatoria de un objeto de {caso[1]} se..."

pasos:
  - "Identificar la masa inicial: {caso[1]}"
  - "Aplicar la relación de proporcionalidad directa con la masa (Ep ∝ m)"

explicacion: |
  Como la fórmula es Ep = m · g · h, la energía es directamente proporcional a la masa. Si la masa se duplica, la energía se duplica.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["gravedad", "verdadero_falso"]

respuesta: falso
tipo: vf

enunciado: "La energía potencial gravitatoria de un objeto es la misma en la Tierra y en la Luna si el objeto se encuentra a la misma altura sobre su respectivo suelo."

explicacion: |
  Falso. La energía potencial depende de la aceleración de la gravedad (g). Como la gravedad en la Luna es menor que en la Tierra, la energía potencial también será menor.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["formula", "variables"]

respuesta: "altura"
tipo: completar
respuestas_validas:
  - "altura"

enunciado: "En la expresión matemática Ep = m · g · h, la variable 'h' representa la ___."

explicacion: |
  En física, 'h' proviene del término 'height' (altura) y representa la distancia vertical respecto a un punto de referencia.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["calculo", "ejercicio"]

variables:
  escenario: uno_de([[2, 5, 9.8], [5, 2, 9.8], [10, 3, 9.8]])

respuesta: escenario[0] * escenario[1] * escenario[2]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Calcula la energía potencial gravitatoria de un objeto con masa de {escenario[0]} kg, situado a una altura de {escenario[1]} m, considerando una gravedad de {escenario[2]} m/s²."

pasos:
  - "Multiplicar la masa por la gravedad: {escenario[0]} * {escenario[2]}"
  - "Multiplicar el resultado por la altura: ({escenario[0]} * {escenario[2]}) * {escenario[1]}"

explicacion: |
  El resultado se obtiene multiplicando directamente los tres valores: m · g · h.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["conceptos", "definicion"]

tipo: vf
respuesta: verdadero

enunciado: "Si un objeto con masa positiva se encuentra a una altura positiva sobre el nivel de referencia, su energía potencial gravitatoria será positiva."

explicacion: |
  La fórmula es Ep = m · g · h. Si la masa (m), la gravedad (g) y la altura (h) son todas positivas, el resultado es necesariamente positivo.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["calculo", "numerico"]

variables:
  escenario: uno_de([[2, "15", "5", 150], [3, "10", "4", 120], [4, "5", "10", 200]])
  m: escenario[0]
  h: escenario[1]
  g: escenario[2]
  resultado_esperado: escenario[3]

respuesta: resultado_esperado
tipo: "input"
tolerancia_abs: 0.1

enunciado: "Un objeto de {m} kg se encuentra a una altura de {h} metros. Calcula su energía potencial gravitatoria (usa g = {g} m/s²)."

pasos:
  - "Identificar los datos: masa (m) = {m} kg, altura (h) = {h} m, gravedad (g) = {g} m/s²."
  - "Aplicar la fórmula: Ep = m · g · h."
  - "Sustituir: Ep = {m} * {g} * {h} = {resultado_esperado} J."

explicacion: |
  La energía potencial se calcula multiplicando la masa por la gravedad por la altura. En este caso: {m} * {g} * {h} = {resultado_esperado} Joules.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["proporcionalidad", "analisis"]

respuesta: "se duplica"
tipo: "mc"
opciones_explicitas: ["se mantiene igual", "se reduce a la mitad", "se duplica", "se cuadruplica"]

enunciado: "Si un objeto mantiene su masa constante pero se coloca a una altura que es el doble de la original, su energía potencial gravitatoria ____."

explicacion: |
  Como la energía potencial es directamente proporcional a la altura (Ep ∝ h), si la altura se multiplica por 2, la energía también se multiplica por 2.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

respuesta: "Joules"
tipo: "completar"
respuestas_validas:
  - "Joules"
  - "J"
  - "joules"

enunciado: "En el Sistema Internacional de Unidades, la unidad para medir la energía potencial gravitatoria es el _________."

explicacion: |
  La unidad de energía (trabajo) es el Joule (J), que equivale a kg·m²/s².
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["metodologia", "ordenar"]

tipo: ordenar
opciones_explicitas: ["identificar_datos", "aplicar_formula", "realizar_multiplicacion"]
respuesta_orden: ["identificar_datos", "aplicar_formula", "realizar_multiplicacion"]

enunciado: "Ordena los pasos lógicos para resolver un problema de cálculo de energía potencial gravitatoria:"

explicacion: |
  Para resolver problemas físicos de forma sistemática, primero debemos extraer los datos, luego plantear la ecuación y finalmente operar.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["conceptos", "energia"]

respuesta: "h"
tipo: completar
respuestas_validas:
  - "h"
  - "la altura"
  - "la posición vertical"

enunciado: "En la fórmula de la energía potencial gravitatoria $E_p = m \\cdot g \\cdot h$, la variable $h$ representa la ___ respecto a un nivel de referencia."

explicacion: |
  La energía potencial gravitatoria depende de la posición vertical (altura) del objeto respecto a un punto de referencia elegido. Si cambias el nivel de referencia, la energía potencial cambia, aunque el objeto sea el mismo.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["conceptos", "relacion_variables"]

variables:
  escenario: uno_de([["un objeto de 2 kg", 2, "2 kg"], ["un objeto de 5 kg", 5, "5 kg"], ["un objeto de 10 kg", 10, "10 kg"]])

tipo: mc
opciones_explicitas: ["La energía es mayor", "La energía es menor", "La energía es igual"]
respuesta: "La energía es mayor"

enunciado: "Si duplicamos la masa de {escenario[0]} manteniendo su altura y la gravedad constantes, la energía potencial gravitatoria será: ___"

explicacion: |
  Como la energía potencial es directamente proporcional a la masa ($E_p \propto m$), si la masa se duplica, la energía potencial también se duplica (es mayor).
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["conceptos", "trayectoria"]

respuesta: falso
tipo: vf

enunciado: "La energía potencial gravitatoria de un objeto depende de la trayectoria seguida para alcanzar su altura actual (por ejemplo, si subió en línea recta o en zigzag)."

explicacion: |
  La energía potencial es una función de estado, lo que significa que solo depende de la posición inicial y la posición final (la altura), no del camino recorrido.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["calculo", "despeje"]

variables:
  datos: uno_de([[100, 9.8, 50], [50, 9.8, 20], [200, 9.8, 100]])

respuesta: redondear(datos[2]/(datos[0]*datos[1]), 2)
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un objeto de {datos[0]} kg tiene una energía potencial de {datos[2]} J. Si la aceleración de la gravedad es de {datos[1]} m/s², ¿a qué altura se encuentra?"

pasos:
  - "Identificar los valores: m = {datos[0]}, Ep = {datos[2]}, g = {datos[1]}"
  - "Despejar la altura de la fórmula: h = Ep / (m * g)"
  - "Calcular el resultado final."

explicacion: |
  Usando la fórmula $h = E_p / (m \cdot g)$, obtenemos: $h = {datos[2]} / ({datos[0]} \cdot {datos[1]}) = {redondear(datos[2]/(datos[0]*datos[1]), 2)}$ m.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["conceptos", "orden"]

respuesta_orden: ["m", "g", "h"]
tipo: ordenar

opciones_explicitas: ["h", "g", "m"]

enunciado: "Para calcular la energía potencial gravitatoria siguiendo la estructura de la fórmula $E_p = m \\cdot g \\cdot h$, el orden de los factores es:"

explicacion: |
  Aunque el orden de los factores no altera el producto, la fórmula estándar se presenta como Masa $\cdot$ Gravedad $\cdot$ Altura.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["energia", "conceptos"]

respuesta: "cinetica"
tipo: mc
opciones_explicitas: ["potencial", "cinetica", "termica", "electromagnetica"]

enunciado: "Mientras que la energía potencial gravitatoria depende de la posición de un objeto respecto a un campo gravitatorio, la energía ___ depende del estado de movimiento del objeto."

explicacion: |
  La energía cinética está asociada al movimiento (m · v²/2), mientras que la energía potencial gravitatoria está asociada a la posición en un campo gravitatorio (m · g · h).
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["propiedades", "relaciones"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10, 9.8, 2, 196.0], [5, 9.8, 5, 245.0]]

respuesta: datos[escenario_idx][3]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Considera un objeto con masa de {datos[escenario_idx][0]} kg a una altura de {datos[escenario_idx][2]} m. Si la gravedad es {datos[escenario_idx][1]} m/s², la energía potencial gravitatoria es ___ J."

pasos:
  - "Multiplicar la masa por la aceleración de la gravedad (m · g)."
  - "Multiplicar el resultado por la altura (h)."

explicacion: |
  La fórmula es Ep = m · g · h. Para el caso {datos[escenario_idx][0]} kg: {datos[escenario_idx][0]} * {datos[escenario_idx][1]} * {datos[escenario_idx][2]} = {datos[escenario_idx][3]} J.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["conceptos", "conservacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es la energía potencial gravitatoria una forma de energía mecánica que puede transformarse en energía cinética en un sistema sin fricción?"

explicacion: |
  Verdadero. En un sistema ideal, la energía potencial se transforma íntegramente en cinética a medida que el objeto cae, conservando la energía mecánica total.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["comparacion", "proporcionalidad"]

variables:
  caso_idx: uno_de([0, 1])
  objetos: [[10, 20], [5, 15]]

respuesta: "El segundo objeto tiene más energía"
tipo: mc
opciones_explicitas: ["El primer objeto tiene más energía", "El segundo objeto tiene más energía", "Ambos tienen la misma energía", "No se puede determinar"]

enunciado: "Si dos objetos están a la misma altura, pero el primero tiene {objetos[caso_idx][0]} kg y el segundo tiene {objetos[caso_idx][1]} kg, ¿cuál posee mayor energía potencial gravitatoria?"

explicacion: |
  Como la energía potencial es directamente proporcional a la masa (Ep ∝ m), el objeto con mayor masa tendrá mayor energía potencial si la altura y la gravedad son las mismas.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["formula", "variables"]

respuesta_orden: ["masa", "gravedad", "altura"]
tipo: ordenar

opciones_explicitas: ["altura", "gravedad", "masa"]

enunciado: "Ordena de menor a mayor las variables que determinan la magnitud de la energía potencial gravitatoria (Ep = m · g · h):"

explicacion: |
  La fórmula requiere tres componentes fundamentales: la masa (m), la aceleración de la gravedad (g) y la altura (h).
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["energia", "gravitacion"]

variables:
  escenario: uno_de([[0.5, 50], [1.5, 150], [2.0, 200]])
  m: escenario[0]
  h: escenario[1]
  g: 9.8
  ep: m * g * h

respuesta: ep
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un escalador de masa de {m} kg se encuentra a una altura de {h} metros sobre el suelo. ¿Cuál es su energía potencial gravitatoria en Joules?"

pasos:
  - "Identificar la masa (m = {m} kg)"
  - "Identificar la altura (h = {h} m)"
  - "Identificar la aceleración de la gravedad (g = {g} m/s²)"
  - "Aplicar la fórmula Ep = m * g * h"

explicacion: |
  La energía potencial se calcula multiplicando la masa por la gravedad por la altura:
  Ep = {m} kg * {g} m/s² * {h} m = {ep} J.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["energia", "logistica"]

variables:
  datos: [[10, 980], [20, 1960], [5, 490]]
  idx: uno_de([0, 1, 2])
  m: datos[idx][0]
  ep: datos[idx][1]

respuesta: verdadero
tipo: vf
enunciado: "Un paquete de {m} kg se encuentra en un estante a 10 metros de altura. Si la energía potencial es de {ep} J, ¿es correcto afirmar que la gravedad aplicada fue de 9.8 m/s²?"

explicacion: |
  Para verificar: Ep = m * g * h => 9.8 = Ep / (m * h).
  En este caso: {ep} / ({m} * 10) = {ep / (m * 10)}.
  El resultado es {ep / (m * 10)} m/s².
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "basico"
  tags: ["energia", "mecanica"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene igual"]

enunciado: "Si un elevador de carga sube desde el primer piso hasta el quinto piso, su energía potencial gravitatoria respecto al suelo: ___"

explicacion: |
  Al aumentar la altura (h) en la fórmula Ep = m * g * h, la energía potencial también aumenta.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["energia", "calculo"]

variables:
  caso: uno_de([[2, 5, 98.0], [5, 2, 98.0], [10, 5, 490.0]])
  m: caso[0]
  h: caso[1]
  ep: caso[2]

respuesta_orden: ["m * g / h", "m / (g * h)", "g * h / m", "m * g * h"]
tipo: ordenar

opciones_explicitas: ["m * g * h", "m * g / h", "m / (g * h)", "g * h / m"]

enunciado: "Para un objeto de {m} kg a una altura de {h} m, ordena las expresiones de modo que la última sea la fórmula correcta para calcular su energía potencial (Ep = {ep} J):"

explicacion: |
  La fórmula correcta es el producto de la masa, la gravedad y la altura: m * g * h.
```

```
metadata:
  materia: "fisica"
  tema: "energia_potencial_gravitatoria"
  nivel: "intermedio"
  tags: ["energia", "drones"]

variables:
  escenario: uno_de([[2, 50], [5, 100], [1, 20]])
  m: escenario[0]
  h: escenario[1]

respuesta: m * 10 * h
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un dron de {m} kg vuela a una altura de {h} metros. Su energía potencial gravitatoria es de ___ Joules (usa g = 10 m/s²)."

explicacion: |
  Usando la fórmula Ep = m * g * h:
  Ep = {m} kg * 10 m/s² * {h} m = {m * 10 * h} J.
```

## Sección: transmision-calor-conduccion-conveccion-radiacion (27 preguntas)

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

tipo: mc
opciones_explicitas: ["Conducción", "Convección", "Radiación", "Las tres son correctas"]

enunciado: "El mecanismo de transferencia de calor que ocurre a través del contacto directo entre partículas de un material sin que haya desplazamiento de la materia es la ___."

respuesta: "Conducción"

explicacion: |
  La conducción es la transferencia de energía térmica mediante colisiones moleculares en un medio material (generalmente sólidos).
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["radiacion", "vacio"]

tipo: vf

enunciado: "La radiación térmica es el único mecanismo de transferencia de calor que puede ocurrir en el vacío, ya que no requiere de un medio material para propagarse."

respuesta: verdadero

explicacion: |
  La radiación se propaga mediante ondas electromagnéticas, por lo que puede viajar por el vacío (como la luz del Sol).
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conveccion", "fluidos"]

tipo: completar
respuestas_validas:
  - "convección"

enunciado: "La transferencia de calor por ___ ocurre mediante el movimiento macroscópico de corrientes de un fluido (líquido o gas) debido a diferencias de densidad."

respuesta: "convección"

explicacion: |
  En la convección, el fluido caliente (menos denso) sube y el fluido frío (más denso) baja, creando una corriente.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conduccion", "conveccion", "radiacion"]

tipo: mc
opciones_explicitas: ["Conducción", "Convección", "Radiación"]

enunciado: "Si el calor se transmite mediante el movimiento de un fluido, estamos ante la ___."

respuesta: "Convección"
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion"]

variables:
  datos: [["Convección", "movimiento de fluidos"], ["Conducción", "contacto sólido"]]
  idx: uno_de([0, 1])
  proceso: datos[idx][0]
  caracteristica: datos[idx][1]

enunciado: "El proceso que se caracteriza por el {caracteristica} es la {proceso}."

respuesta: proceso

explicacion: |
  La respuesta depende del sorteo realizado en la variable 'idx'.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion"]

tipo: mc
opciones_explicitas: ["Conducción", "Convección", "Radiación"]

enunciado: "El mecanismo que implica el transporte de masa debido a gradientes de temperatura en un fluido es:"

respuesta: "Convección"

explicacion: |
  La convección requiere el movimiento físico de las partículas del fluido.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "avanzado"
  tags: ["orden", "mecanismos"]

tipo: ordenar
opciones_explicitas: ["Conducción", "Convección", "Radiación"]
respuesta_orden: ["Conducción", "Convección", "Radiación"]

enunciado: "Ordene los mecanismos de transferencia de calor según su dependencia de un medio material, desde el que requiere contacto sólido (más restrictivo) hasta el que no requiere medio (más general):"

explicacion: |
  La conducción requiere contacto/medio sólido; la convección requiere fluido; la radiación no requiere nada.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor_conduccion"
  nivel: "intermedio"
  tags: ["conduccion", "ley_de_fourier", "calculo"]

variables:
  area: 0.5
  espesor: 0.02
  k: 400
  dT: 30
  calor_flujo: (k * area * dT) / espesor

respuesta: calor_flujo
tipo: completar
tolerancia_abs: 0.1

enunciado: "Una barra de cobre tiene una sección transversal de {area} m² y un espesor de {espesor} m. Si la diferencia de temperatura entre sus extremos es de {dT} °C y la conductividad térmica del cobre es de {k} W/(m·K), ¿cuál es el flujo de calor (W) que atraviesa la barra?"

pasos:
  - "Identificar los datos: Área (A) = 0.5 m², Espesor (L) = 0.02 m, Conductividad (k) = 400 W/(m·K), Diferencia de temperatura (ΔT) = 30 °C."
  - "Aplicar la Ley de Fourier: Q = (k * A * ΔT) / L"
  - "Calcular: Q = (400 * 0.5 * 30) / 0.02 = 6000 / 0.02 = 300000 W."

explicacion: |
  El flujo de calor por conducción se calcula con la Ley de Fourier. En este caso, el resultado es 300,000 W.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor_radiacion"
  nivel: "basico"
  tags: ["radiacion", "vacuo"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible que el calor se transmita por conducción a través del vacío absoluto?"

explicacion: |
  Falso. La conducción y la convección requieren un medio material (átomos o moléculas) para transferir energía mediante colisiones o movimiento de fluidos. La radiación es el único mecanismo que puede ocurrir en el vacío mediante ondas electromagnéticas.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor_conveccion"
  nivel: "basico"
  tags: ["conveccion", "fluidos"]

respuesta: "convección"
tipo: mc
opciones_explicitas: ["conducción", "convección"]

enunciado: "El movimiento de las partículas de un fluido (líquido o gas) debido a diferencias de densidad causadas por cambios de temperatura es el mecanismo de: ___"

explicacion: |
  La convección implica el transporte de materia (fluido) para transferir energía térmica.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor_radiacion"
  nivel: "avanzado"
  tags: ["radiacion", "stefan_boltzmann"]

variables:
  emision: 0.8
  area: 2.0
  temp_k: 300
  sigma: 5.67e-8
  potencia: emision * sigma * area * (temp_k^4)

respuesta: potencia
tipo: completar
tolerancia_abs: 1.0

enunciado: "Un objeto negro ideal con una emisividad de {emision} tiene una superficie de {area} m². Si su temperatura es de {temp_k} K, ¿cuánta potencia radiada (W) emite? (Usa σ = 5.67e-8 W/m²K⁴)"

pasos:
  - "La fórmula de la potencia radiada es: P = ε * σ * A * T⁴"
  - "Sustituir valores: P = 0.8 * 5.67e-8 * 2.0 * (300^4)"
  - "Calcular: P = 0.8 * 5.67e-8 * 2.0 * 8100000000 = 734.88 W"

explicacion: |
  Utilizando la Ley de Stefan-Boltzmann, la potencia radiada es aproximadamente 734.88 W.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor_conceptos"
  nivel: "basico"
  tags: ["conceptos", "ordenar"]

opciones_explicitas: ["Conducción", "Convección", "Radiación"]
respuesta_orden: ["Conducción", "Convección", "Radiación"]
tipo: ordenar

enunciado: "Ordena los mecanismos de transferencia de calor según el medio necesario, de mayor dependencia de la materia (contacto directo) a menor dependencia (no requiere materia):"

explicacion: |
  1. Conducción: Requiere contacto directo entre partículas sólidas o fluidos.
  2. Convección: Requiere el movimiento de un fluido.
  3. Radiación: No requiere medio material.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["radiacion", "vacuo"]

tipo: mc
opciones_explicitas: ["conduccion", "conveccion", "radiacion", "conduccion y conveccion"]

enunciado: "A diferencia de la conducción y la convección, la radiación térmica puede transferir energía a través del vacío porque no requiere un medio material. ¿Cuál es este mecanismo?"

respuesta: "radiacion"

explicacion: |
  La radiación térmica ocurre mediante ondas electromagnéticas y no necesita partículas para propagarse, lo que permite que el calor viaje por el vacío (como la radiación solar).
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion", "conduccion"]

variables:
  es_fluido: falso

tipo: vf

enunciado: "En un fluido (como el aire o el agua) en reposo, el mecanismo predominante de transferencia de calor es la conducción térmica. ¿Es esto verdadero o falso?"

respuesta: falso

explicacion: |
  Aunque la conducción ocurre en fluidos, la transferencia de calor en fluidos suele estar dominada por la convección, que involucra el movimiento macroscópico de las masas de fluido.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion", "conduccion", "radiacion"]

tipo: ordenar

opciones_explicitas: ["Convección del líquido", "Conducción a través de las paredes", "Radiación hacia el ambiente"]

enunciado: "Ordena los mecanismos de transferencia de calor de una taza de café caliente, desde el que ocurre principalmente en el cuerpo del líquido hasta el que ocurre hacia el espacio exterior."

respuesta_orden: ["Convección del líquido", "Conducción a través de las paredes", "Radiación hacia el ambiente"]

explicacion: |
  1. La convección mueve el líquido caliente hacia arriba dentro de la taza. 
  2. La conducción transporta calor a través de las paredes sólidas. 
  3. La radiación emite energía electromagnética hacia el entorno.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [["El calor que viaja por una barra de metal", "conduccion"], ["El aire caliente que sube al calentarse", "conveccion"], ["El calor que sentimos del sol", "radiacion"]]

tipo: completar

enunciado: "En el escenario seleccionado: {escenarios[escenario_idx][0]}, el mecanismo principal es la ___."

respuestas_validas:
  - "conduccion"
  - "conveccion"
  - "radiacion"
respuesta: escenarios[escenario_idx][1]

explicacion: |
  Cada mecanismo tiene una naturaleza distinta: la conducción requiere contacto directo en sólidos, la convección requiere movimiento de fluidos, y la radiación requiere ondas electromagnéticas.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "avanzado"
  tags: ["radiacion", "ley_stefan"]

variables:
  temp_k: 300

tipo: completar

enunciado: "Si un objeto emite radiación térmica, la cantidad de energía emitida por unidad de área es proporcional a la temperatura elevada a la cuarta potencia (T^4). Si la temperatura absoluta es de {temp_k} K, ¿cuál es el valor de la temperatura elevada a la cuarta potencia?"

pasos:
  - "Elevar la temperatura absoluta al exponente 4."

respuesta: 8100000000.0
tolerancia_abs: 0.1

explicacion: |
  Según la ley de Stefan-Boltzmann, la potencia irradiada es proporcional a T^4. Para 300 K, el cálculo es 300^4 = 8,100,000,000 (coherente con el cálculo de la pregunta 11, que usa este mismo valor de 300^4).
```

```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

tipo: mc
opciones_explicitas: ["La conducción requiere un medio material para transferir energía", "La radiación depende de la densidad del medio para ocurrir", "La convección es la transferencia de energía mediante contacto directo", "La radiación requiere contacto físico entre cuerpos"]
respuesta: "La conducción requiere un medio material para transferir energía"

enunciado: "La principal diferencia entre la radiación y los otros dos mecanismos de transferencia de calor es que..."

explicacion: |
  La conducción y la convección requieren un medio material (sólido, líquido o gas) para propagar el calor. La radiación, en cambio, se produce mediante ondas electromagnéticas y puede ocurrir en el vacío.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "basico"
  tags: ["conduccion", "mecanismos"]

tipo: completar
respuestas_validas:
  - "vibraciones"
  - "colisiones"

enunciado: "En un sólido, la conducción térmica ocurre principalmente debido a las ___ de las partículas y las colisiones entre electrones libres."

explicacion: |
  La conducción en sólidos se debe al movimiento de los electrones libres y a las vibraciones de la red cristalina (fonones) que transmiten la energía cinética de las zonas calientes a las frías.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "intermedio"
  tags: ["conveccion", "fluidos"]

variables:
  escenario: uno_de([["agua hirviendo en una olla", "convección"], ["aire caliente subiendo en una habitación", "convección"], ["el movimiento de magma en el manto terrestre", "convección"]])

tipo: mc
opciones_explicitas: ["conduccion", "conveccion", "radiacion"]

enunciado: "El fenómeno descrito en el escenario de {escenario[0]} es un ejemplo de..."

respuesta: "conveccion"

explicacion: |
  La convección es la transferencia de calor en fluidos (líquidos o gases) causada por la diferencia de densidad en las corrientes de fluido provocadas por cambios de temperatura.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "basico"
  tags: ["radiacion", "vacio"]

tipo: vf

enunciado: "La transferencia de calor por radiación puede ocurrir en el vacío absoluto, como ocurre con la energía que llega del Sol a la Tierra."

respuesta: verdadero

explicacion: |
  A diferencia de la conducción y la convección, la radiación no necesita un medio material, ya que se transporta mediante ondas electromagnéticas.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_de_calor"
  nivel: "intermedio"
  tags: ["ordenar", "mecanismos"]

tipo: ordenar
opciones_explicitas: ["Radiación", "Convección", "Conducción"]

enunciado: "Ordene los mecanismos de transferencia de calor de menor a mayor dependencia de la presencia de un medio material (desde el que no requiere medio hasta el que requiere contacto directo):"

respuesta_orden: ["Radiación", "Convección", "Conducción"]

explicacion: |
  1. Radiación: No requiere medio (puede ser en vacío).
  2. Convección: Requiere un fluido (líquido o gas).
  3. Conducción: Es el mecanismo predominante en sólidos (contacto directo entre partículas).
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Un termo de café con doble pared de vacío", "radiacion"], ["Una cuchara de metal en el café caliente", "conduccion"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["conduccion", "conveccion", "radiacion"]

enunciado: "En el escenario seleccionado: {datos[escenario_idx][0]}, el mecanismo de transferencia de calor predominante que se intenta evitar o que ocurre es la {datos[escenario_idx][1]}."

explicacion: |
  La conducción requiere contacto directo entre partículas, la convección requiere un fluido en movimiento y la radiación se transmite mediante ondas electromagnéticas (como en el vacío de un termo).
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["conveccion"]

respuesta: verdadero
tipo: vf

enunciado: "En la convección, el calor se transfiere mediante el movimiento macroscópico de un fluido (líquido o gas) debido a diferencias de densidad."

explicacion: |
  Correcto. Las corrientes de convección se originan porque el fluido caliente es menos denso y sube, mientras que el frío es más denso y baja.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "basico"
  tags: ["conduccion", "conveccion", "radiacion"]

variables:
  caso_idx: uno_de([0, 1, 2])
  casos: [["El sol calentando la Tierra", "radiacion"], ["El calor de una estufa calentando el aire de una habitación", "conveccion"], ["El mango de una sartén que se calienta al fuego", "conduccion"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["conduccion", "conveccion", "radiacion"]

enunciado: "Analiza el caso: {casos[caso_idx][0]}. ¿Qué mecanismo de transferencia de calor es el principal?"

explicacion: |
  Cada caso representa un mecanismo distinto: contacto (conducción), movimiento de fluido (convección) u ondas electromagnéticas (radiación).
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "avanzado"
  tags: ["secuencia", "transferencia"]

respuesta_orden: ["radiacion", "conveccion", "conduccion"]
tipo: ordenar

opciones_explicitas: ["radiacion", "conveccion", "conduccion"]

enunciado: "Ordena los mecanismos de transferencia de calor según su capacidad para propagarse en el vacío, desde el que puede hacerlo sin necesidad de materia hasta el que requiere contacto sólido directo."

explicacion: |
  La radiación no requiere medio (puede viajar en el vacío), la convección requiere un fluido y la conducción requiere contacto entre sólidos o fluidos.
```

```
metadata:
  materia: "fisica"
  tema: "transmision_calor"
  nivel: "intermedio"
  tags: ["radiacion", "emision"]

variables:
  propiedad_idx: uno_de([0, 1])
  propiedades: [["superficie negra y rugosa", "mayor"], ["superficie blanca y pulida", "menor"]]

respuesta: propiedades[propiedad_idx][1]
tipo: completar
respuestas_validas:
  - "mayor"
  - "menor"

enunciado: "Una superficie con una propiedad de absorción/emisión de tipo {propiedades[propiedad_idx][0]} presentará una tasa de transferencia por radiación ___ que una superficie reflectante."

explicacion: |
  Los cuerpos negros son los mejores emisores y absorbedores de radiación térmica. Las superficies blancas o brillantes reflejan la mayor parte de la energía.
```

## Sección: conservacion-energia-mecanica (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["definicion", "energia_cinetica", "energia_potencial"]

respuesta: "energia_mecanica"
tipo: mc
opciones_explicitas: ["energia_cinetica", "energia_potencial", "energia_mecanica", "energia_termica"]

enunciado: "La suma de la energía cinética y la energía potencial de un sistema se denomina ___."

explicacion: |
  La energía mecánica es la suma de las energías de movimiento (cinética) y de posición (potencial).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["leyes_de_conservacion"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema donde no actúan fuerzas no conservativas (como la fricción), la energía mecánica total permanece constante durante el movimiento."

explicacion: |
  Si no hay fricción ni resistencia del aire, la energía mecánica se conserva.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["componentes"]

respuesta: ["energia_cinetica", "energia_potencial"]
tipo: completar
respuestas_validas:
  - "energia_cinetica"
  - "energia_potencial"

enunciado: "La energía mecánica de un objeto en movimiento se compone de la ___ y la ___."

explicacion: |
  La energía mecánica es la suma de la cinética (movimiento) y la potencial (posición/configuración).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["energia_potencial"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene igual", "es cero"]

enunciado: "Si un objeto aumenta su altura respecto a un nivel de referencia sin cambiar su masa, su energía potencial ___."

explicacion: |
  La energía potencial gravitatoria es $E_p = m \cdot g \cdot h$. A mayor $h$, mayor $E_p$.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["energia_cinetica"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene igual", "es cero"]

enunciado: "Si la velocidad de un objeto aumenta, su energía cinética ___."

explicacion: |
  La energía cinética depende del cuadrado de la velocidad ($E_c = \frac{1}{2} m \cdot v^2$).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["calculo", "energia_cinetica"]

variables:
  m: 10
  v: 5

respuesta: 125
tipo: completar
tolerancia_abs: 0.1

enunciado: "Calcula la energía cinética de un objeto de {m} kg que se desplaza a una velocidad de {v} m/s."

pasos:
  - "Identificar la masa (m = 10 kg) y la velocidad (v = 5 m/s)."
  - "Aplicar la fórmula $E_c = \\frac{1}{2} \\cdot m \\cdot v^2$."

explicacion: |
  $E_c = 0.5 \cdot 10 \cdot 5^2 = 0.5 \cdot 10 \cdot 25 = 125$ Joules.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["calculo", "energia_potencial"]

variables:
  m: 2
  h: 10
  g: 9.8

respuesta: 196
tipo: completar
tolerancia_abs: 0.1

enunciado: "Calcula la energía potencial gravitatoria de un objeto de {m} kg situado a una altura de {h} metros. (usa g = {g})"

pasos:
  - "Identificar masa (m=2) y altura (h=10)."
  - "Usar la fórmula $E_p = m \\cdot g \\cdot h$."

explicacion: |
  $E_p = 2 \cdot 9.8 \cdot 10 = 196$ Joules.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["calculo", "energia_total"]

variables:
  m: 5
  v: 4
  h: 10
  g: 9.8

respuesta: 530
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un objeto de {m} kg se encuentra a una altura de {h} metros con una velocidad de {v} m/s. ¿Cuál es su energía mecánica total?"

pasos:
  - "Calcular Ec = 0.5 * {m} * {v}^2 = 40 J."
  - "Calcular Ep = {m} * {g} * {h} = 490 J."
  - "Sumar Ec + Ep = 40 + 490 = 530."

explicacion: |
  La energía mecánica total es la suma de la energía cinética y la potencial.
  Ec = 0.5 * m * v^2 = 0.5 * 5 * 16 = 40 J
  Ep = m * g * h = 5 * 9.8 * 10 = 490 J
  Et = 40 + 490 = 530 J
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["friccion", "error"]

respuesta: falso
tipo: vf

enunciado: "Si un objeto desliza por un plano inclinado con mucha fricción, la energía mecánica total se mantiene constante."

explicacion: |
  Falso. La fricción convierte la energía mecánica en energía térmica (calor).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["transformacion"]

respuesta: "cinetica"
tipo: mc
opciones_explicitas: ["cinetica", "potencial", "termica", "nuclear"]

enunciado: "Cuando un objeto que estaba en reposo a una altura $h$ cae libremente, la energía potencial se transforma principalmente en energía ___."

explicacion: |
  A medida que baja, la altura disminuye (menor $E_p$) y la velocidad aumenta (mayor $E_c$).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["error", "relacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si duplicamos la masa de un objeto, su energía cinética se duplica para una misma velocidad."

explicacion: |
  Verdadero. $E_c = 0.5 \cdot m \cdot v^2$, por lo tanto es directamente proporcional a la masa.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "avanzado"
  tags: ["comparacion"]

variables:
  idx: uno_de([0,1])
  escenario: [[10, 5], [5, 10]]

respuesta: "el_objeto_con_mas_energia"
tipo: mc
opciones_explicitas: ["el_objeto_con_mas_energia", "ambos_tienen_la_misma"]

enunciado: "Si comparamos un objeto A con datos {escenario[idx][0]} kg y 5 m/s, contra un objeto B con 5 kg y 10 m/s, ¿cuál tiene mayor energía cinética?"

explicacion: |
  Se debe calcular $0.5 \cdot m \cdot v^2$ para ambos.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "avanzado"
  tags: ["aplicacion", "montaña_rusa"]

variables:
  h_inicial: 50
  v_inicial: 0
  m: 100
  g: 9.8

respuesta: 49000
tipo: completar
tolerancia_abs: 1

enunciado: "En una montaña rusa, un carrito de {m} kg parte del reposo desde una altura de {h_inicial} m. ¿Cuál es su energía mecánica total en ese punto?"

pasos:
  - "Como está en reposo, E_c = 0."
  - "Calcular E_p = m * g * h = 100 * 9.8 * 50."

explicacion: "E_total = 49000 J."
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["energia_mecanica", "conservacion"]

respuesta: verdadero
tipo: vf

enunciado: "La energía mecánica total (Ec + Ep) se conserva en ausencia de fuerzas no conservativas como la fricción."

explicacion: |
  La energía mecánica total se conserva cuando sólo actúan fuerzas conservativas (como la gravedad o un resorte ideal), sin pérdidas de calor, sonido u otras formas de disipación.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["pendulo", "transformacion_energia"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[1.5, "5.42"], [2.0, "6.26"], [3.0, "7.67"]]

enunciado: "Un péndulo se suelta desde una altura de {datos[idx][0]} metros. ¿Cuál es la velocidad (en m/s) al pasar por el punto más bajo? (g = 9.8 m/s²)"

pasos:
  - "Usar conservación de energía mecánica: Ep_inicial = Ec_final"
  - "m·g·h = (1/2)·m·v² → v = sqrt(2·g·h)"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]
tolerancia_abs: 0.1

explicacion: |
  La energía potencial gravitatoria se transforma íntegramente en cinética al pasar por el punto más bajo: v = sqrt(2·g·h).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["friccion", "comparacion"]

opciones_explicitas: ["sí se conserva", "no se conserva", "depende de la masa"]
respuesta: "no se conserva"
tipo: mc

enunciado: "En un sistema donde actúa fricción, ¿se conserva la energía mecánica total?"

explicacion: |
  La fricción es una fuerza no conservativa que disipa energía en forma de calor. Por lo tanto, la energía mecánica total no se conserva en presencia de fricción.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "avanzado"
  tags: ["caida_libre", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[17, "14.74"], [20, "20.41"], [23, "26.99"]]

enunciado: "Una pelota se lanza hacia arriba con velocidad inicial {datos[idx][0]} m/s. ¿A qué altura máxima (en metros) alcanzará? (g = 9.8 m/s²)"

pasos:
  - "Usar conservación de energía mecánica: Ec_inicial = Ep_final"
  - "m·v²/2 = m·g·h → h = v²/(2·g)"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]
tolerancia_abs: 0.1

explicacion: |
  La energía cinética inicial se transforma completamente en potencial gravitatoria: h = v²/(2g).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["fuerzas_conservativas", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "La gravedad es una fuerza conservativa."

explicacion: |
  Las fuerzas conservativas son aquellas donde el trabajo realizado no depende de la trayectoria seguida (como la gravedad o la fuerza elástica). La gravedad sí es conservativa.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["montana_rusa", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[30, "24.25"], [45, "29.70"], [60, "34.29"]]

enunciado: "Una montaña rusa parte desde una altura de {datos[idx][0]} metros con velocidad inicial cero. ¿Cuál es su velocidad (en m/s) en el punto más bajo? (g = 9.8 m/s²)"

pasos:
  - "Usar conservación de energía mecánica: Ep_inicial = Ec_final"
  - "m·g·h = (1/2)·m·v² → v = sqrt(2·g·h)"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]
tolerancia_abs: 0.1

explicacion: |
  La energía potencial inicial se transforma en cinética: v = sqrt(2·g·h). La masa del vehículo no afecta el resultado.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["comparacion", "resorte"]

opciones_explicitas: ["sí se conserva", "no se conserva"]
respuesta: "sí se conserva"
tipo: mc

enunciado: "En un resorte ideal sin fricción, ¿se conserva la energía mecánica total?"

explicacion: |
  Un resorte ideal es un sistema conservativo. La energía se transforma entre cinética y potencial elástica, pero no hay pérdidas.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["friccion", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[150, "7.25"], [200, "8.37"], [250, "9.35"]]
  m: 4

enunciado: "Un bloque de {m} kg se desliza por una superficie con fricción, perdiendo el 30% de su energía mecánica. Si inicialmente tiene {datos[idx][0]} J de energía cinética, ¿cuál es su velocidad final (en m/s)?"

pasos:
  - "Energía restante = 70% de la energía cinética inicial"
  - "Ec_final = (m·v²)/2 → v = sqrt(2·0.7·Ec_inicial/m)"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]
tolerancia_abs: 0.1

explicacion: |
  La fricción disipa el 30% de la energía, dejando el 70% disponible como energía cinética final.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "avanzado"
  tags: ["comparacion", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema con fricción, la energía mecánica total disminuye con el tiempo."

explicacion: |
  La fricción convierte parte de la energía mecánica en calor, reduciendo la suma total (Ec + Ep) con el tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "intermedio"
  tags: ["pendulo", "completar"]

respuestas_validas:
  - "máximo"
  - "maximo"
respuesta: "máximo"
tipo: completar

enunciado: "En un péndulo, la energía cinética es ___ cuando pasa por el punto más bajo."

explicacion: |
  El punto más bajo corresponde a la máxima velocidad y, por lo tanto, a la máxima energía cinética. La energía potencial es mínima allí.
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "avanzado"
  tags: ["calculo", "caida_libre"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [[15, "17.15"], [20, "19.80"], [25, "22.14"]]

enunciado: "¿Con qué velocidad inicial (en m/s) debe lanzarse un objeto hacia arriba para alcanzar una altura de {datos[idx][0]} metros? (g = 9.8 m/s²)"

pasos:
  - "Usar conservación de energía mecánica: Ec_inicial = Ep_final"
  - "m·v²/2 = m·g·h → v = sqrt(2·g·h)"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]
tolerancia_abs: 0.1

explicacion: |
  Toda la energía cinética inicial debe transformarse en potencial gravitatoria: v = sqrt(2·g·h).
```

```
metadata:
  materia: "fisica"
  tema: "conservacion_energia_mecanica"
  nivel: "basico"
  tags: ["sistema_conservativo", "vf"]

respuesta: verdadero
tipo: vf

enunciado: "Un sistema donde sólo actúan fuerzas conservativas (como la gravedad) es un ejemplo de conservación de la energía mecánica."

explicacion: |
  En sistemas ideales donde sólo actúan fuerzas conservativas, la energía mecánica total (Ec + Ep) se mantiene constante.
```

## Sección: velocidad-aceleracion-instantaneas (26 preguntas)

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["velocidad"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  c: random(-10, 10)
  t: random(1, 6)

respuesta: 2 * a * t + b
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t² + {b}t + {c} (posición, metros). ¿Cuál es la velocidad instantánea en t={t}?"

pasos:
  - "v(t) = x'(t) = {2 * a}t + {b}"
  - "v({t}) = {2 * a}×{t} + {b} = {2 * a * t + b}"

explicacion: |
  La velocidad instantánea es la derivada de la posición.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["velocidad"]

variables:
  a: random(1, 3)
  b: random(1, 6)
  c: random(-10, 10)
  t: random(1, 4)

respuesta: 3 * a * t ^ 2 + 2 * b * t + c
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t³ + {b}t² + {c}t (posición, metros). ¿Cuál es la velocidad instantánea en t={t}?"

pasos:
  - "v(t) = x'(t) = {3 * a}t² + {2 * b}t + {c}"

explicacion: |
  Con posición cúbica, la velocidad ya no es constante ni lineal — es
  cuadrática.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["aceleracion"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  c: random(-10, 10)

respuesta: 2 * a
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t² + {b}t + {c}. ¿Cuál es la aceleración instantánea (constante, en este caso)?"

pasos:
  - "v(t) = {2 * a}t + {b}. a(t) = v'(t) = {2 * a}"

explicacion: |
  Con posición cuadrática, la aceleración es constante (mismo caso que
  MRUV).
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["aceleracion"]

variables:
  a: random(1, 3)
  b: random(1, 6)
  t: random(1, 5)

respuesta: 6 * a * t + 2 * b
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t³ + {b}t² (posición). ¿Cuál es la aceleración instantánea en t={t}?"

pasos:
  - "v(t) = {3 * a}t² + {2 * b}t. a(t) = v'(t) = {6 * a}t + {2 * b}"
  - "a({t}) = {6 * a}×{t} + {2 * b} = {6 * a * t + 2 * b}"

explicacion: |
  Con posición cúbica, la aceleración cambia con el tiempo — hay que
  evaluarla en el instante pedido, no asumirla constante.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["punto_critico"]

variables:
  a: random(1, 8)
  t_sol: random(1, 10)
  b: -2 * a * t_sol

respuesta: t_sol
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t² + {b}t. ¿En qué instante t la velocidad instantánea es 0?"

pasos:
  - "v(t) = {2 * a}t + {b} = 0 → t = {t_sol}"

explicacion: |
  Es el mismo procedimiento que hallar un punto crítico en
  `../../matematica/optimizacion/`.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 3)
  b: random(1, 6)
  t_sol: random(1, 5)
  c: -(3 * a * t_sol ^ 2) - (2 * b * t_sol)

respuesta: ((6 * a * t_sol + 2 * b) != 0)
tipo: vf

enunciado: "x(t) = {a}t³ + {b}t² + {c}t tiene v({t_sol})=0. ¿Es también 0 la aceleración en ese mismo instante?"

explicacion: |
  En general, v=0 no implica a=0 — son valores independientes, salvo en
  casos particulares como el reposo total.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["velocidad_media"]

variables:
  a: random(1, 5)
  t1: random(1, 4)
  t2: random(5, 10)

respuesta: a * (t1 + t2)
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t² (posición). ¿Cuál es la velocidad MEDIA entre t={t1} y t={t2}?"

pasos:
  - "v_media = (x({t2})−x({t1}))/({t2}−{t1}) = ({a}×{t2}²−{a}×{t1}²)/({t2}−{t1}) = {a}×({t1}+{t2})"

explicacion: |
  La velocidad media usa el cociente incremental completo, no la
  derivada puntual.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 5)
  t1: random(1, 4)
  t2: random(5, 10)

respuesta: ((a * (t1 + t2)) != (2 * a * t1))
tipo: vf

enunciado: "x(t) = {a}t². ¿Es la velocidad media entre t={t1} y t={t2} igual a la velocidad instantánea en t={t1}?"

explicacion: |
  En general son distintas — sólo coinciden en el caso especial de
  velocidad constante (MRU).
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La velocidad instantánea es la derivada de la posición respecto del tiempo."

explicacion: |
  v(t) = x'(t) — la definición central del tema.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La aceleración instantánea es la derivada de la velocidad respecto del tiempo (o la derivada segunda de la posición)."

explicacion: |
  a(t) = v'(t) = x''(t).
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un MRU (x(t) lineal en t), la aceleración instantánea es 0 en todo momento."

explicacion: |
  La derivada de una función lineal es constante, y la derivada de esa
  constante es 0.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En un MRUV (x(t) cuadrática en t), la aceleración instantánea es constante (pero distinta de 0)."

explicacion: |
  La derivada segunda de una función cuadrática es siempre la misma
  constante — mismo resultado ya visto en
  `../../matematica/optimizacion/`.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Si x(t) es un polinomio de grado 3 (o mayor), la aceleración instantánea ya no es constante — cambia con el tiempo."

explicacion: |
  La derivada segunda de un cúbico es lineal en t, no una constante.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Calcular (x(t₂)−x(t₁))/(t₂−t₁) da directamente la velocidad instantánea en cualquiera de los dos instantes."

explicacion: |
  Eso da la velocidad MEDIA en el intervalo — la instantánea es un
  límite (la derivada), no ese cociente directo.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["error_comun", "verdadero_falso"]

respuesta: falso

tipo: vf

enunciado: "Si la velocidad instantánea es 0 en un instante, la aceleración también tiene que ser 0 en ese mismo instante."

explicacion: |
  No, son cantidades independientes — en el punto más alto de un tiro
  vertical, v=0 pero a=−g, distinto de 0.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["aplicacion"]

variables:
  v0: random(10, 50)
  t: random(1, 5)

respuesta: v0 - 10 * t
tipo: input
tolerancia_abs: 0

enunciado: "y(t) = {v0}t − 5t² (tiro vertical, g=10). ¿Cuál es la velocidad instantánea en t={t}?"

pasos:
  - "v(t) = y'(t) = {v0} − 10t"

explicacion: |
  Es la misma fórmula v(t)=v₀−gt de `../tiro-vertical/`, obtenida ahora
  derivando la posición en vez de plantearla directo.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  t: random(1, 6)
  real: 2 * a * t + b
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "x(t) = {a}t² + {b}t. ¿Es correcto que la velocidad en t={t} sea {propuesto}?"

explicacion: |
  El valor correcto es v({t}) = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La rapidez es el valor absoluto de la velocidad — dos objetos con velocidades +10 m/s y −10 m/s tienen la misma rapidez, pero direcciones opuestas."

explicacion: |
  Velocidad incluye dirección (signo); rapidez es sólo la magnitud.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["velocidad"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  c: random(-10, 10)

respuesta: c
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t³ + {b}t² + {c}t. ¿Cuál es la velocidad instantánea en t=0?"

explicacion: |
  v(0) = 3{a}(0)² + 2{b}(0) + {c} = {c} — el coeficiente del término
  lineal es directamente la velocidad inicial.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Para llegar de la posición a la aceleración, hay que derivar DOS veces (posición→velocidad→aceleración), no una sola."

explicacion: |
  Derivar una sola vez desde la posición da la velocidad, no la
  aceleración.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["aceleracion"]

variables:
  a: random(1, 5)
  b: random(1, 8)

respuesta: 2 * b
tipo: input
tolerancia_abs: 0

enunciado: "x(t) = {a}t³ + {b}t². ¿Cuál es la aceleración instantánea en t=0?"

explicacion: |
  a(t) = {6 * a}t + {2 * b} → a(0) = {2 * b}.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El instante donde a(t) cambia de signo marca un cambio en cómo actúa la aceleración (de frenar a acelerar en el sentido del movimiento, o viceversa), no necesariamente un cambio en la dirección del movimiento en sí (eso lo marca el signo de v)."

explicacion: |
  v y a son señales independientes — cada una responde una pregunta
  distinta sobre el movimiento.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["verificacion", "verdadero_falso"]

variables:
  a: random(1, 3)
  b: random(1, 6)
  t: random(1, 5)
  real: 6 * a * t + 2 * b
  error: uno_de([0, 0, 1, -1])
  propuesto: real + error

respuesta: (propuesto == real)
tipo: vf

enunciado: "x(t) = {a}t³ + {b}t². ¿Es correcto que la aceleración en t={t} sea {propuesto}?"

explicacion: |
  El valor correcto es a({t}) = {real}.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "intermedio"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "La velocidad instantánea puede dar negativa — significa que, en ese instante, el objeto se mueve en el sentido negativo elegido como referencia."

explicacion: |
  El signo de v(t) indica dirección, no un error de cálculo.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "avanzado"
  tags: ["verdadero_falso"]

variables:
  a: random(1, 5)
  b: random(1, 8)
  t1: random(1, 4)
  t2: random(5, 10)

respuesta: ((2 * a * t2 + b) > (2 * a * t1 + b))
tipo: vf

enunciado: "x(t) = {a}t² + {b}t (con a positivo). ¿Es mayor la velocidad instantánea en t={t2} que en t={t1}?"

explicacion: |
  Con aceleración constante positiva, la velocidad crece con el tiempo
  — el instante posterior siempre tiene mayor velocidad.
```

```
metadata:
  materia: "matematicas"
  tema: "velocidad_aceleracion_instantaneas"
  nivel: "basico"
  tags: ["concepto", "verdadero_falso"]

respuesta: verdadero
tipo: vf

enunciado: "Posición, velocidad y aceleración forman una cadena de derivadas: cada una es la derivada de la anterior respecto del tiempo."

explicacion: |
  x(t) → (derivar) → v(t) → (derivar) → a(t).
```

## Sección: potencia-mecanica (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["definicion", "trabajo", "tiempo"]

tipo: mc
opciones_explicitas: ["El trabajo realizado por unidad de tiempo", "La energía almacenada en un sistema", "La fuerza aplicada sobre un objeto", "El cambio en la velocidad de un cuerpo"]
respuesta: "El trabajo realizado por unidad de tiempo"
enunciado: "La potencia mecánica se define físicamente como ___."

explicacion: |
  La potencia mide la rapidez con la que se realiza un trabajo o se transfiere energía. Su fórmula es P = W/t.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

tipo: vf
respuesta: falso

enunciado: "¿La unidad de potencia en el Sistema Internacional de Unidades (SI) es el Joule (J)?"

explicacion: |
  Falso. El Joule (J) es la unidad de trabajo o energía. La unidad de potencia es el Vatio (W), que equivale a 1 Joule por segundo (1 J/s).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

variables:
  escenario: uno_de([[100, 10], [200, 20], [50, 5]])

tipo: completar
respuestas_validas:
  - 10.0
  - 10.0
  - 10.0
respuesta: escenario[0] / escenario[1]

enunciado: "Si un motor realiza un trabajo de {escenario[0]} J en un tiempo de {escenario[1]} s, la potencia mecánica resultante es de ___ W."

pasos:
  - "Identificar el trabajo (W): {escenario[0]} J"
  - "Identificar el tiempo (t): {escenario[1]} s"
  - "Aplicar la fórmula P = W / t"

explicacion: |
  Dividiendo el trabajo entre el tiempo obtenemos: {escenario[0]} / {escenario[1]} = {escenario[0]/escenario[1]} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["proporcionalidad", "conceptos"]

tipo: mc
opciones_explicitas: ["Directamente proporcional al trabajo realizado", "Inversamente proporcional al tiempo", "Inversamente proporcional al trabajo realizado", "Directamente proporcional al tiempo"]
respuesta: "Directamente proporcional al trabajo realizado"

enunciado: "Si mantenemos el tiempo constante, la relación entre la potencia y el trabajo realizado es: ___."

explicacion: |
  Según la fórmula P = W/t: si W aumenta, P aumenta (directamente proporcional). Si t aumenta, P disminuye (inversamente proporcional).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["procesos", "conceptos"]

tipo: ordenar
opciones_explicitas: ["Aplicar una fuerza", "Desplazar un objeto", "Realizar un trabajo", "Calcular la potencia"]

enunciado: "Ordene lógicamente los pasos para determinar la potencia mecánica en un proceso físico:"

explicacion: |
  Primero debe existir una fuerza que cause un desplazamiento, lo cual genera un trabajo (W). Una vez obtenido el trabajo y el tiempo, se puede calcular la potencia (P).
respuesta_orden: ["Aplicar una fuerza", "Desplazar un objeto", "Realizar un trabajo", "Calcular la potencia"]
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["definicion", "trabajo", "tiempo"]

respuesta: "trabajo / tiempo"
tipo: completar
respuestas_validas:
  - "trabajo / tiempo"
  - "W / t"
  - "trabajo dividido tiempo"

enunciado: "La potencia mecánica se define matemáticamente como el ___ realizado por un objeto por unidad de tiempo."

explicacion: |
  La potencia (P) mide la rapidez con la que se realiza un trabajo (W). Su fórmula es P = W / t.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["calculo", "unidades"]

variables:
  escenario: uno_de([[100, 10, 10], [500, 5, 100], [1200, 20, 60]])

respuesta: escenario[2]

tipo: mc
opciones_explicitas: [10, 100, 60, 50]

enunciado: "Un motor realiza un trabajo de {escenario[0]} Joules en un tiempo de {escenario[1]} segundos. ¿Cuál es su potencia mecánica (en watts)?"

pasos:
  - "Identificar el trabajo (W): {escenario[0]} J"
  - "Identificar el tiempo (t): {escenario[1]} s"
  - "Aplicar la fórmula: P = W / t"
  - "Calcular: {escenario[0]} / {escenario[1]} = {escenario[2]}"

explicacion: |
  La potencia se calcula dividiendo el trabajo total por el tiempo empleado. En este caso: 100J / 10s = 10 W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["unidades", "si_sistema"]

respuesta: verdadero

tipo: vf

enunciado: "¿La unidad de potencia en el Sistema Internacional (SI) es el Vatio (Watt), que equivale a 1 Julio por segundo?"

explicacion: |
  Correcto. 1 W = 1 J/s.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["relacion", "tiempo"]

variables:
  caso: uno_de([[10, 2], [20, 5], [30, 3]])

respuesta: caso[0] / caso[1]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Si un sistema realiza un trabajo de {caso[0]} J en {caso[1]} segundos, ¿cuántos Watts de potencia está desarrollando?"

pasos:
  - "Datos: W = {caso[0]} J, t = {caso[1]} s"
  - "Fórmula: P = W / t"
  - "Cálculo: {caso[0]} / {caso[1]}"

explicacion: |
  Dividiendo el trabajo entre el tiempo obtenemos la potencia: {caso[0]} / {caso[1]} = {caso[0] / caso[1]} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["procedimiento", "pasos"]

respuesta_orden: ["Identificar el trabajo realizado (W) en Joules", "Identificar el tiempo transcurrido (t) en segundos", "Dividir el trabajo por el tiempo (W/t) para obtener Watts"]
tipo: ordenar
opciones_explicitas: ["Dividir el trabajo por el tiempo (W/t) para obtener Watts", "Identificar el trabajo realizado (W) en Joules", "Identificar el tiempo transcurrido (t) en segundos"]

enunciado: "Ordena los pasos lógicos para calcular la potencia mecánica de un objeto dado un trabajo y un tiempo."

explicacion: |
  Para resolver problemas de potencia, primero debemos asegurar que tenemos las magnitudes de trabajo y tiempo en unidades SI, y luego aplicar la división.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "trabajo"]

respuesta: falso
tipo: vf

enunciado: "Si un objeto realiza el mismo trabajo que otro, pero lo hace en la mitad del tiempo, ambos han desarrollado la misma potencia mecánica."

explicacion: |
  La potencia se define como $P = W/t$. Si el tiempo disminuye, la potencia aumenta. Por lo tanto, quien realiza el mismo trabajo en menos tiempo es más potente.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

variables:
  idx: uno_de([0, 1, 2])
  trabajos: [100, 50, 10]
  tiempos: [5, 2, 10]

respuesta: trabajos[idx] / tiempos[idx]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Calcula la potencia mecánica realizada por un motor que efectúa un trabajo de {trabajos[idx]} J en un tiempo de {tiempos[idx]} s."

pasos:
  - "Identifica el trabajo realizado (W): {trabajos[idx]} J"
  - "Identifica el tiempo empleado (t): {tiempos[idx]} s"
  - "Aplica la fórmula P = W / t"

explicacion: |
  La potencia se calcula dividiendo el trabajo (Joules) por el tiempo (segundos), resultando en Watts (W).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["dinamica", "conceptos"]

respuesta: "La potencia mecánica depende de la fuerza aplicada y la velocidad."
tipo: mc
opciones_explicitas: ["La potencia mecánica depende únicamente de la fuerza aplicada.", "La potencia mecánica depende únicamente de la velocidad del objeto.", "La potencia mecánica depende de la fuerza aplicada y la velocidad.", "La potencia mecánica no depende de la fuerza si la velocidad es constante."]

enunciado: "Un error común es pensar que si un objeto se mueve a velocidad constante, la potencia es cero. ¿Cuál es la relación correcta entre potencia, fuerza y velocidad?"

explicacion: |
  Para un objeto en movimiento, la potencia instantánea se puede expresar como $P = F \cdot v$. Aunque el trabajo neto sea cero en un ciclo cerrado, la potencia mecánica de la fuerza aplicada puede ser distinta de cero.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["analisis_dimensional"]

respuesta: verdadero
tipo: vf
enunciado: "Si duplicamos la fuerza aplicada a un objeto y también duplicamos su velocidad, la potencia mecánica resultante se cuadruplica."

explicacion: |
  Dado que $P = F \cdot v$, si $F' = 2F$ y $v' = 2v$, entonces $P' = (2F) \cdot (2v) = 4(F \cdot v)$, es decir, $4P$.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "avanzado"
  tags: ["procedimiento", "calculo"]

variables:
  datos: uno_de([["1000 N", "5 m/s", "2 s"], ["500 N", "10 m/s", "5 s"], ["200 N", "2 m/s", "10 s"]])

respuesta_orden: ["Calcular el trabajo realizado (W = F * d)", "Identificar el tiempo total (t)", "Dividir el trabajo por el tiempo (P = W / t)"]
tipo: ordenar
opciones_explicitas: ["Calcular el trabajo realizado (W = F * d)", "Identificar el tiempo total (t)", "Dividir el trabajo por el tiempo (P = W / t)"]

enunciado: "Para calcular la potencia mecánica de un motor que levanta una carga de {datos[0]} con una velocidad de {datos[1]} durante {datos[2]}, ¿cuál es el orden lógico de resolución?"

explicacion: |
  Primero debemos obtener la energía transferida (Trabajo) o usar la relación directa de potencia instantánea, y finalmente dividir por el intervalo de tiempo.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["conceptos", "definiciones"]

respuesta: "velocidad"
tipo: completar
respuestas_validas:
  - "velocidad"
  - "rapidez"
  - "aceleracion"

enunciado: "Mientras que el trabajo describe la transferencia de energía en un proceso, la potencia describe la ___ con la que se realiza dicho trabajo."

explicacion: |
  La potencia es la rapidez con la que se realiza un trabajo o se transfiere energía. Se define matemáticamente como el trabajo realizado dividido por el tiempo empleado ($P = W/t$).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

variables:
  escenario: uno_de([[100, 2, 50], [100, 5, 20], [100, 10, 10]])
  valor_w: escenario[0]
  valor_t: escenario[1]
  valor_p: escenario[2]

respuesta: valor_p
tipo: mc
opciones_explicitas: [20, 50, 10, 100]

enunciado: "Si un sistema realiza un trabajo de {valor_w} Joules en un tiempo de {valor_t} segundos, su potencia mecánica es de ___ Watts."

explicacion: |
  Aplicando la fórmula $P = W/t$, tenemos que $P = {valor_w} / {valor_t} = {valor_p}$ W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["conceptos", "tiempo"]

respuesta: falso
tipo: vf

enunciado: "Si se realiza el mismo trabajo en el doble de tiempo, la potencia mecánica resultante será el doble de la potencia original."

explicacion: |
  Falso. Como la potencia es inversamente proporcional al tiempo ($P \propto 1/t$), si el tiempo se duplica, la potencia se reduce a la mitad.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

respuesta: "W"
tipo: mc
opciones_explicitas: ["J", "W", "N", "m/s"]

enunciado: "En el Sistema Internacional (SI), la unidad de potencia mecánica es el ___ (Watt), que equivale a un Joule por segundo."

explicacion: |
  El Watt (W) es la unidad derivada que combina la unidad de trabajo (Joule) y la de tiempo (segundo).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["comparacion", "calculo"]

variables:
  caso: uno_de([[100, 2, 50], [200, 5, 40], [50, 10, 5]])
  w: caso[0]
  t: caso[1]
  p: caso[2]

respuesta: p
tipo: completar
tolerancia_abs: 0

enunciado: "Un motor realiza un trabajo de {w} J en un intervalo de tiempo de {t} s. ¿Cuál es su potencia en Watts?"

pasos:
  - "Identificar el trabajo (W) y el tiempo (t)."
  - "Dividir el trabajo por el tiempo: P = W / t."

explicacion: |
  El cálculo realizado es $P = {w} / {t} = {p}$ W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["trabajo", "tiempo", "potencia"]

variables:
  escenario: uno_de([[1000, 500, 2000], [2500, 1000, 400], [1500, 800, 600]])
  w: escenario[0]
  t: escenario[1]
  p: escenario[2]

respuesta: w / t
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un motor realiza un trabajo de {w} J para elevar una carga durante un tiempo de {t} s. ¿Cuál es la potencia mecánica desarrollada por el motor en Watts?"

pasos:
  - "Identificar el trabajo realizado (W = {w} J)"
  - "Identificar el tiempo transcurrido (t = {t} s)"
  - "Aplicar la fórmula de potencia: P = W / t"

explicacion: |
  La potencia mecánica se define como la rapidez con la que se realiza un trabajo. 
  En este caso: P = {w} J / {t} s = {redondear(w/t, 2)} W.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["conceptos", "unidades"]

respuesta: "W"
tipo: mc
opciones_explicitas: ["J", "W", "N", "m/s"]

enunciado: "Si un objeto realiza un trabajo de 500 Joules en 10 segundos, la unidad de medida de la potencia resultante es la unidad de..."

explicacion: |
  La potencia es la relación entre trabajo (J) y tiempo (s). 
  J/s es equivalente a la unidad de potencia, el Watt (W).
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["comparacion", "calculo"]

variables:
  datos: [[100, 5, 1000, 20], [50, 2, 500, 50], [200, 10, 100, 5]]
  idx: uno_de([0, 1, 2])
  w1: datos[idx][0]
  t1: datos[idx][1]
  w2: datos[idx][2]
  t2: datos[idx][3]
  p1: w1 / t1
  p2: w2 / t2

respuesta: p1 > p2
tipo: vf
enunciado: "Se comparan dos máquinas. La máquina A realiza {w1} J en {t1} s. La máquina B realiza {w2} J en {t2} s. ¿Es la potencia de la máquina A mayor que la de la máquina B?"

explicacion: |
  Calculamos las potencias:
  P_A = {w1} / {t1} = {redondear(p1, 2)} W
  P_B = {w2} / {t2} = {redondear(p2, 2)} W
  La afirmación es {p1 > p2}.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["despeje", "tiempo"]

variables:
  escenario: uno_de([[500, 100], [1200, 300], [400, 50]])
  w: escenario[0]
  p: escenario[1]
  t: w / p

respuesta: t
tipo: completar
respuestas_validas:
  - 5
  - 4
  - 8

enunciado: "Una máquina tiene una potencia constante de {p} W. ¿Cuántos segundos tardará en realizar un trabajo de {w} J? La respuesta es ___ s."

explicacion: |
  Para hallar el tiempo, despejamos la fórmula de potencia:
  P = W / t  =>  t = W / P
  t = {w} / {p} = {t} s.
```

```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular el trabajo realizado", "Dividir el trabajo por el tiempo", "Identificar los datos de trabajo y tiempo"]
respuesta_orden: ["Identificar los datos de trabajo y tiempo", "Calcular el trabajo realizado", "Dividir el trabajo por el tiempo"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un problema donde se pide la potencia, pero solo se conocen la fuerza, la distancia y el tiempo."

pasos:
  - "Paso 1: Identificar los datos de trabajo y tiempo"
  - "Paso 2: Calcular el trabajo realizado (W = F * d)"
  - "Paso 3: Dividir el trabajo por el tiempo (P = W / t)"

explicacion: |
  Primero debemos obtener el trabajo (W) usando la fuerza y la distancia, y luego aplicar la definición de potencia dividiendo por el tiempo.
```

