# Examen jefe — [PENDIENTE #742]

> Logro #742. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

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

## Sección: gravitacion-universal (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "basico"
  tags: ["gravitacion", "vocabulario"]

enunciado: "¿Qué establece la ley de gravitación universal de Newton?"
tipo: mc
opciones_explicitas:
  - "Que dos masas cualesquiera se atraen con una fuerza proporcional al producto de las masas e inversamente proporcional al cuadrado de la distancia entre ellas"
  - "Que sólo los planetas se atraen entre sí, no los objetos cotidianos"
  - "Que la fuerza gravitatoria es siempre la misma sin importar la distancia"
respuesta: "Que dos masas cualesquiera se atraen con una fuerza proporcional al producto de las masas e inversamente proporcional al cuadrado de la distancia entre ellas"

explicacion: |
  F = G × m₁ × m₂ / r², válida para cualquier par de masas, no sólo
  para cuerpos astronómicos.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["gravitacion", "completar"]

tipo: completar
enunciado: "Completá: la fuerza gravitatoria es directamente proporcional al producto de las ___."
respuestas_validas:
  - "masas"

explicacion: |
  A mayor masa de cualquiera de los dos cuerpos, mayor la fuerza.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["gravitacion", "completar"]

tipo: completar
enunciado: "Completá: la fuerza gravitatoria es inversamente proporcional al ___ de la distancia entre las masas."
respuestas_validas:
  - "cuadrado"

explicacion: |
  Es una ley de "cuadrado inverso" — al duplicar la distancia, la
  fuerza no se reduce a la mitad sino a un cuarto.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["gravitacion"]

respuesta: falso
tipo: vf

enunciado: "Si la distancia entre dos masas se duplica, la fuerza gravitatoria entre ellas se reduce a la mitad."

explicacion: |
  Se reduce a 1/2² = 1/4, no a la mitad — es inversamente proporcional
  al CUADRADO de la distancia.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["gravitacion", "problema"]

respuesta: redondear(1 / (3 ^ 2), 4)
tipo: input
tolerancia_abs: 0.001

enunciado: "Si la distancia entre dos masas se triplica (y las masas no cambian), ¿a qué fracción de la fuerza original queda reducida la fuerza gravitatoria?"

pasos:
  - "F_nueva / F_original = 1 / (3²) = 1 / {3 ^ 2} = {redondear(1 / (3 ^ 2), 4)}"

explicacion: |
  Triplicar r divide la fuerza por 3² = 9.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["gravitacion", "problema"]

respuesta: 2
tipo: input

enunciado: "Si una de las dos masas se duplica (la otra masa y la distancia no cambian), ¿cuántas veces mayor queda la fuerza gravitatoria?"

pasos:
  - "F es directamente proporcional a esa masa: duplicarla duplica F."

explicacion: |
  A diferencia de la distancia (que va al cuadrado), cada masa entra
  de forma lineal en la fórmula.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "basico"
  tags: ["gravitacion", "vocabulario"]

enunciado: "¿Qué es G en la fórmula F = G × m₁ × m₂ / r²?"
tipo: mc
opciones_explicitas:
  - "La constante de gravitación universal, un número fijo extremadamente pequeño"
  - "La aceleración de la gravedad en la superficie terrestre (9,8 m/s²)"
  - "El peso de uno de los dos cuerpos"
respuesta: "La constante de gravitación universal, un número fijo extremadamente pequeño"

explicacion: |
  G ≈ 6,674×10⁻¹¹ N·m²/kg² — no depende del planeta ni de los cuerpos,
  a diferencia de g.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["gravitacion"]

respuesta: verdadero
tipo: vf

enunciado: "La constante G tiene el mismo valor en cualquier parte del universo, a diferencia de g (que sí depende del planeta)."

explicacion: |
  Por eso se llama "universal": no depende de qué masas ni de dónde
  estén, siempre es el mismo número.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["gravitacion"]

enunciado: "¿Por qué dos personas paradas una cerca de la otra no notan ninguna atracción gravitatoria entre sí?"
tipo: mc
opciones_explicitas:
  - "Porque G es un número tan pequeño que, con masas de unos pocos kilos, la fuerza resultante es prácticamente cero"
  - "Porque los seres humanos no generan gravedad"
  - "Porque la gravedad sólo existe entre planetas"
respuesta: "Porque G es un número tan pequeño que, con masas de unos pocos kilos, la fuerza resultante es prácticamente cero"

explicacion: |
  La fuerza existe, pero es tan chica que ningún sentido humano puede
  detectarla — hace falta una masa del tamaño de un planeta para que
  se vuelva relevante.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["gravitacion", "problema"]

variables:
  m1: random(500, 2000)
  m2: random(500, 2000)
  r: random(1, 10)

respuesta: redondear(6.674e-11 * m1 * m2 / (r ^ 2) * 1e9, 2)
tipo: input
tolerancia_abs: 1

enunciado: "Dos objetos de {m1} kg y {m2} kg están a {r} m de distancia (G=6,674×10⁻¹¹ N·m²/kg²). ¿Cuál es la fuerza gravitatoria entre ellos, expresada en unidades de 10⁻⁹ N (es decir, el valor de F×10⁹)?"

pasos:
  - "F = G × m₁ × m₂ / r² = 6,674×10⁻¹¹ × {m1} × {m2} / {r}²"
  - "F × 10⁹ = {redondear(6.674e-11 * m1 * m2 / (r ^ 2) * 1e9, 2)}"

explicacion: |
  El resultado real (sin la escala ×10⁹) es un número con muchos ceros
  después de la coma — por eso se expresa multiplicado por 10⁹, para
  trabajar con un número más manejable.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["kepler", "vocabulario"]

enunciado: "¿Qué dice la primera ley de Kepler sobre la forma de las órbitas planetarias?"
tipo: mc
opciones_explicitas:
  - "Son elípticas, con el Sol en uno de los dos focos de la elipse"
  - "Son circulares perfectas, con el Sol en el centro"
  - "Son líneas rectas que el Sol desvía"
respuesta: "Son elípticas, con el Sol en uno de los dos focos de la elipse"

explicacion: |
  Antes de Kepler se asumía que eran círculos perfectos — fue una
  corrección real a partir de datos de observación.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["kepler"]

respuesta: falso
tipo: vf

enunciado: "Según Kepler, las órbitas de los planetas alrededor del Sol son círculos perfectos."

explicacion: |
  Son elipses (círculos "achatados"), aunque algunas sean casi
  circulares en la práctica.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["kepler", "vocabulario"]

enunciado: "¿Qué dice la segunda ley de Kepler (ley de las áreas)?"
tipo: mc
opciones_explicitas:
  - "El segmento que une al Sol con el planeta barre áreas iguales en tiempos iguales"
  - "Todos los planetas tienen exactamente el mismo período orbital"
  - "El planeta siempre se mueve a velocidad constante"
respuesta: "El segmento que une al Sol con el planeta barre áreas iguales en tiempos iguales"

explicacion: |
  Consecuencia: el planeta acelera cerca del Sol y se frena lejos de
  él, para que el área barrida en un mismo intervalo de tiempo sea
  siempre igual.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["kepler"]

respuesta: verdadero
tipo: vf

enunciado: "Un planeta se mueve más rápido cuando está más cerca del Sol (perihelio) que cuando está más lejos (afelio)."

explicacion: |
  Es la consecuencia directa de la ley de las áreas: para barrer la
  misma área en el mismo tiempo estando más cerca, tiene que moverse
  más rápido.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["kepler", "completar"]

tipo: completar
enunciado: "Completá: el punto de la órbita más cercano al Sol se llama perihelio; el punto más lejano se llama ___."
respuestas_validas:
  - "afelio"

explicacion: |
  Perihelio (peri="cerca") y afelio (apo="lejos") son los dos extremos
  de la órbita elíptica.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["kepler", "vocabulario"]

enunciado: "¿Qué relación establece la tercera ley de Kepler (ley de los períodos)?"
tipo: mc
opciones_explicitas:
  - "El cuadrado del período orbital es proporcional al cubo del semieje mayor de la órbita (T² ∝ a³)"
  - "El período orbital es igual para todos los planetas"
  - "El período orbital es directamente proporcional a la distancia al Sol (sin exponentes)"
respuesta: "El cuadrado del período orbital es proporcional al cubo del semieje mayor de la órbita (T² ∝ a³)"

explicacion: |
  Con la misma constante de proporcionalidad para todos los planetas
  que orbitan el mismo Sol.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["kepler", "problema"]

variables:
  factor: uno_de([2, 3, 4])

respuesta: redondear(factor ^ 1.5, 2)
tipo: input
tolerancia_abs: 0.05

enunciado: "Un planeta tiene un semieje mayor {factor} veces más grande que el de otro planeta que orbita la misma estrella. Según T² ∝ a³, ¿cuántas veces más grande es su período orbital?"

pasos:
  - "T²_nuevo / T²_viejo = (a_nuevo/a_viejo)³ = {factor}³"
  - "T_nuevo / T_viejo = raíz cuadrada de {factor ^ 3} = {factor}^1,5 = {redondear(factor ^ 1.5, 2)}"

explicacion: |
  Si el semieje mayor se multiplica por k, el período se multiplica
  por k^1,5 (la raíz cuadrada de k³).
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["kepler", "newton"]

respuesta: verdadero
tipo: vf

enunciado: "Las tres leyes de Kepler son observacionales (describen un patrón), pero por sí solas no explican POR QUÉ los planetas se mueven así."

explicacion: |
  La explicación causal (una fuerza de atracción entre masas) la dio
  Newton después, con F = G×m₁×m₂/r².
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["newton"]

enunciado: "¿Qué aportó Newton a lo que ya había observado Kepler?"
tipo: mc
opciones_explicitas:
  - "Una causa física (la fuerza de gravedad) de la que las tres leyes de Kepler se derivan matemáticamente"
  - "Datos de observación más precisos de las órbitas"
  - "La forma elíptica de las órbitas, que Kepler no había notado"
respuesta: "Una causa física (la fuerza de gravedad) de la que las tres leyes de Kepler se derivan matemáticamente"

explicacion: |
  Newton no corrigió los datos de Kepler, les dio un mecanismo: por
  qué tenían que ser así.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["gravitacion", "completar"]

tipo: completar
enunciado: "Completá: el peso de un objeto en la superficie de un planeta es la fórmula de gravitación con m₁ = masa del planeta y r = el ___ del planeta."
respuestas_validas:
  - "radio"

explicacion: |
  peso = G × M_planeta × m / R_planeta², de ahí sale el valor de g de
  cada planeta.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["gravitacion"]

respuesta: verdadero
tipo: vf

enunciado: "La misma fórmula de gravitación explica tanto por qué la Luna orbita la Tierra como por qué los planetas orbitan el Sol."

explicacion: |
  Es "universal" precisamente porque aplica a cualquier par de masas,
  sin excepción.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "avanzado"
  tags: ["kepler", "newton", "ordenar"]

enunciado: "Ordená cronológica y lógicamente estos hechos, de la observación a la explicación."
tipo: ordenar
opciones_explicitas:
  - "Al combinar esa fuerza con la necesidad de una fuerza centrípeta para mantener una órbita, las tres leyes de Kepler quedan explicadas matemáticamente"
  - "Kepler observa los datos astronómicos y describe tres patrones (órbitas, áreas, períodos)"
  - "Newton propone que dos masas cualesquiera se atraen con F = G×m₁×m₂/r²"
respuesta_orden: ["Kepler observa los datos astronómicos y describe tres patrones (órbitas, áreas, períodos)", "Newton propone que dos masas cualesquiera se atraen con F = G×m₁×m₂/r²", "Al combinar esa fuerza con la necesidad de una fuerza centrípeta para mantener una órbita, las tres leyes de Kepler quedan explicadas matemáticamente"]
explicacion: |
  Primero el patrón, después la causa — un ejemplo clásico de cómo
  avanza la ciencia.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "basico"
  tags: ["gravitacion", "aplicacion"]

enunciado: "¿Qué mantiene a un satélite artificial en órbita alrededor de la Tierra?"
tipo: mc
opciones_explicitas:
  - "La fuerza gravitatoria de la Tierra, que actúa como fuerza centrípeta de su órbita"
  - "Los motores del satélite, que empujan constantemente hacia la Tierra"
  - "La ausencia total de fuerzas sobre el satélite"
respuesta: "La fuerza gravitatoria de la Tierra, que actúa como fuerza centrípeta de su órbita"

explicacion: |
  Es la misma gravedad que hace caer una manzana, sólo que el satélite
  tiene la velocidad horizontal justa para que esa "caída" se convierta
  en una órbita.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "intermedio"
  tags: ["kepler"]

respuesta: verdadero
tipo: vf

enunciado: "Cuanto más lejos esté un planeta del Sol, mayor es su período orbital (tarda más en completar una vuelta)."

explicacion: |
  Es consecuencia directa de T² ∝ a³: a mayor semieje mayor `a`, mayor
  período `T`. Por eso Neptuno tarda mucho más que Mercurio en dar una
  vuelta al Sol.
```

```
metadata:
  materia: "fisica"
  tema: "gravitacion_universal"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender la gravitación universal de Newton junto con las leyes de Kepler?"
tipo: mc
opciones_explicitas:
  - "Para entender no sólo QUÉ patrón siguen las órbitas, sino POR QUÉ tienen que seguirlo"
  - "Sólo sirve para calcular el peso en la Tierra"
  - "Sólo aplica a objetos que no tienen masa"
respuesta: "Para entender no sólo QUÉ patrón siguen las órbitas, sino POR QUÉ tienen que seguirlo"

explicacion: |
  Kepler dio el patrón; Newton, con una sola fórmula aplicable a
  cualquier par de masas, dio la causa.
```

## Sección: iman-polos-atraccion-repulsion (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "imanes_y_polos"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

tipo: mc
opciones_explicitas: ["Norte y Sur", "Norte y Norte", "Este y Oeste", "Positivo y Negativo"]
respuesta: "Norte y Sur"

enunciado: "Todo imán posee dos zonas de máxima intensidad de campo magnético denominadas polos ___."

explicacion: |
  Los polos de un imán son las regiones donde el campo magnético es más intenso. Los nombres convencionales son polo Norte y polo Sur.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_polos"
  nivel: "basico"
  tags: ["atracción", "repulsión"]

tipo: vf
respuesta: falso

enunciado: "Si acercamos un polo Norte de un imán a un polo Norte de otro imán, estos experimentarán una fuerza de atracción."

explicacion: |
  La regla fundamental del magnetismo establece que polos iguales se repelen y polos opuestos se atraen.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_polos"
  nivel: "basico"
  tags: ["atracción", "repulsión"]

variables:
  idx: uno_de([0, 1, 2, 3])
  polo_a: ["Norte", "Sur", "Norte", "Sur"]
  polo_b: ["Sur", "Norte", "Norte", "Sur"]
  resultados_texto: ["atracción", "atracción", "repulsión", "repulsión"]

tipo: completar
respuestas_validas:
  - "atracción"
  - "repulsión"
respuesta: resultados_texto[idx]

enunciado: "Cuando se aproximan dos polos magnéticos (un polo {polo_a[idx]} y un polo {polo_b[idx]}), la fuerza resultante es de ___."

explicacion: |
  Si los polos son opuestos (Norte-Sur), la fuerza es de atracción. Si los polos son iguales (Norte-Norte o Sur-Sur), la fuerza es de repulsión.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_polos"
  nivel: "basico"
  tags: ["magnetismo"]

tipo: mc
opciones_explicitas: ["imán", "conductor", "aislante", "superconductor"]
respuesta: "imán"

enunciado: "Un objeto que presenta la propiedad de atraer metales ferrosos debido a su campo magnético se denomina ___."

explicacion: |
  La capacidad de atraer materiales ferromagnéticos es la característica principal de un imán.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_polos"
  nivel: "basico"
  tags: ["repulsión"]

tipo: mc
opciones_explicitas: ["atracción", "repulsión", "ninguna", "estática"]
respuesta: "repulsión"

enunciado: "Si dos imanes se presentan con sus polos iguales enfrentados (Norte con Norte o Sur con Sur), se observa una fuerza de ___."

explicacion: |
  La repulsión es la respuesta característica cuando los polos magnéticos son idénticos.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

respuesta: "atracción"
tipo: mc
opciones_explicitas: ["atracción", "repulsión"]

enunciado: "Cuando se acercan dos polos magnéticos de distinta naturaleza (uno Norte y uno Sur), la fuerza resultante es de ___."

explicacion: |
  Los polos opuestos (Norte y Sur) se atraen, mientras que los polos iguales (Norte con Norte o Sur con Sur) se repelen.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos"
  nivel: "basico"
  tags: ["magnetismo", "identificacion"]

respuesta: falso
tipo: vf

enunciado: "¿Es posible separar un imán en dos partes, de modo que una parte tenga solo un polo Norte y la otra solo un polo Sur?"

explicacion: |
  Falso. Los imanes son dipolos; al romper un imán, cada fragmento resultante se convierte en un nuevo imán con su propio polo Norte y Sur.
```

```
metadata:
  materia: "fisica"
  tema: "fuerza_magnetica"
  nivel: "intermedio"
  tags: ["calculo", "fuerza"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [2.5, 4.0, 1.2]

respuesta: 10 / (datos[idx] * datos[idx])
tipo: completar
tolerancia_abs: 0.01

enunciado: "La fuerza de atracción entre dos imanes se puede modelar simplificadamente como F = k / d^2. Si la constante k es 10 y la distancia d es {datos[idx]} cm, ¿cuál es la fuerza F en unidades arbitrarias?"

pasos:
  - "Identificar la constante k = 10"
  - "Identificar la distancia d = {datos[idx]}"
  - "Calcular el cuadrado de la distancia: {datos[idx]} * {datos[idx]} = {datos[idx] * datos[idx]}"
  - "Dividir la constante por el resultado: 10 / {datos[idx] * datos[idx]}"

explicacion: |
  Usando la fórmula F = k / d^2 con k = 10.
```

```
metadata:
  materia: "fisica"
  tema: "campos_magneticos"
  nivel: "basico"
  tags: ["polos", "direccion"]

respuesta_orden: ["Norte", "Sur"]
tipo: ordenar

opciones_explicitas: ["Sur", "Norte"]

enunciado: "En un imán de barra, las líneas de campo magnético en su exterior viajan desde el polo ___ hacia el polo ___."

explicacion: |
  Por convención, las líneas de campo magnético salen del polo Norte y entran al polo Sur en el espacio exterior al imán.
```

```
metadata:
  materia: "fisica"
  tema: "fuerza_magnetica"
  nivel: "intermedio"
  tags: ["comparacion", "distancia"]

variables:
  distancia_inicial: uno_de([0.1, 0.2])

respuesta: "se reduce"
tipo: mc
opciones_explicitas: ["aumenta", "se reduce", "se mantiene"]

enunciado: "Si mantenemos constante la fuerza de los imanes y duplicamos la distancia entre ellos (de {distancia_inicial} m a {distancia_inicial * 2} m), la fuerza de atracción ___."

explicacion: |
  Según la ley de la inversa del cuadrado, si la distancia se duplica, la fuerza se reduce a la cuarta parte (1/2^2 = 1/4).
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

tipo: mc
opciones_explicitas: ["Atracción", "Repulsión", "No hay interacción", "Atracción débil"]

enunciado: "Si intentas acercar dos imanes de modo que el polo norte de uno esté frente al polo norte del otro, la fuerza resultante será de:"

respuesta: "Repulsión"

explicacion: |
  Los polos iguales (Norte-Norte o Sur-Sur) se repelen entre sí. Esta es la base de la interacción magnética.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos"
  nivel: "basico"
  tags: ["magnetismo"]

tipo: vf

enunciado: "Si un imán se acerca a otro y experimenta una fuerza de atracción, se puede afirmar que los polos enfrentados son de distinta naturaleza (uno es Norte y el otro Sur)."

respuesta: verdadero

explicacion: |
  La atracción magnética ocurre exclusivamente entre polos opuestos (Norte con Sur).
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos"
  nivel: "intermedio"
  tags: ["magnetismo", "monopolos"]

tipo: completar
respuestas_validas:
  - "monopolo"
  - "un solo polo"
  - "polo único"

enunciado: "Si cortas un imán por la mitad para intentar separar su polo norte del polo sur, obtendrás dos imanes nuevos, cada uno con su propio polo norte y sur; en ningún caso lograrás aislar un imán de un solo polo, es decir, un ___."

respuesta: "monopolo"

explicacion: |
  En la naturaleza no existen los monopolos magnéticos; al dividir un imán, se crean dos nuevos dipolos con sus propios polos norte y sur.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos"
  nivel: "basico"
  tags: ["magnetismo", "campo_magnetico"]

tipo: mc
opciones_explicitas: ["Norte magnético", "Sur magnético", "Polo de atracción", "Polo de repulsión"]

enunciado: "Un imán suspendido libremente por un hilo tiende a alinearse con el campo magnético terrestre. El extremo que apunta hacia el polo norte geográfico de la Tierra es el:"

respuesta: "Norte magnético"

explicacion: |
  El polo norte magnético de la Tierra es, por definición, el punto donde el polo sur magnético terrestre atrae al polo norte de una brújula.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos"
  nivel: "basico"
  tags: ["magnetismo", "orden"]

tipo: ordenar
opciones_explicitas: ["Norte-Norte (Repulsión)", "Norte-Sur (Atracción)", "Sur-Sur (Repulsión)"]

enunciado: "Ordena las siguientes interacciones magnéticas de la que presenta mayor fuerza de atracción a la que presenta mayor fuerza de repulsión (considerando imanes de igual intensidad):"

respuesta_orden: ["Norte-Sur (Atracción)", "Norte-Norte (Repulsión)", "Sur-Sur (Repulsión)"]

explicacion: |
  La atracción ocurre entre polos opuestos. La repulsión ocurre entre polos iguales. En términos de magnitud, la interacción es simétrica para polos iguales.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_cargas"
  nivel: "basico"
  tags: ["magnetismo", "electricidad"]

respuesta: "repulsión"
tipo: completar
respuestas_validas:
  - "repulsión"
  - "atracción"

enunciado: "Mientras que las cargas eléctricas de igual signo se repelen, los polos magnéticos del mismo nombre (ej. Norte y Norte) también experimentan una ___."

explicacion: |
  Tanto en la electrostática como en el magnetismo, la interacción entre entidades de la misma naturaleza (cargas iguales o polos iguales) es siempre de repulsión.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_cargas"
  nivel: "intermedio"
  tags: ["magnetismo", "electricidad"]

respuesta: falso
tipo: vf
enunciado: "Si un objeto tiene una carga eléctrica neta, se puede separar en un polo positivo y un polo negativo de forma independiente. ¿Es esto también una propiedad de los imanes magnéticos?"

explicacion: |
  Falso. Los imanes son dipolos; si cortas un imán por la mitad, obtendrás dos imanes más pequeños, cada uno con su propio polo norte y sur. No existen los "monopolos magnéticos" en la naturaleza.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_cargas"
  nivel: "basico"
  tags: ["magnetismo"]

variables:
  escenario: uno_de([["Norte", "Sur", "atracción"], ["Sur", "Norte", "atracción"], ["Norte", "Norte", "repulsión"], ["Sur", "Sur", "repulsión"]])

respuesta: escenario[2]
tipo: mc
opciones_explicitas: ["atracción", "repulsión"]

enunciado: "Considerando el escenario donde se aproximan un polo {escenario[0]} y un polo {escenario[1]}, la fuerza resultante es de ___."

explicacion: |
  Los polos opuestos (Norte-Sur) se atraen, mientras que los polos iguales (Norte-Norte o Sur-Sur) se repelen.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_cargas"
  nivel: "basico"
  tags: ["magnetismo", "brújula"]

respuesta: "Polo Eléctrico Positivo"
tipo: mc

opciones_explicitas: ["Norte Magnético", "Sur Magnético", "Polo Eléctrico Positivo"]

enunciado: "¿Cuál de los siguientes términos NO corresponde a un concepto del magnetismo?"

explicacion: |
  La brújula es un imán que se alinea con el campo magnético terrestre. El polo norte de la aguja apunta al polo sur magnético de la Tierra (que está cerca del polo norte geográfico). Los conceptos de "positivo" y "negativo" pertenecen a la electricidad, no al magnetismo.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_y_cargas"
  nivel: "intermedio"
  tags: ["magnetismo", "electricidad"]

variables:
  tipo_interaccion: uno_de([["iguales", "repulsión"], ["opuestos", "atracción"]])

respuesta: tipo_interaccion[1]
tipo: mc
opciones_explicitas: ["atracción", "repulsión"]

enunciado: "En un sistema de dos imanes, si los polos presentados son {tipo_interaccion[0]}, la interacción resultante es de ___."

explicacion: |
  La regla fundamental es: polos iguales se repelen, polos opuestos se atraen.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos_atraccion_repulsion"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

variables:
  datos: [["Norte-Sur", "atracción"], ["Norte-Norte", "repulsión"], ["Sur-Sur", "repulsión"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["atracción", "repulsión"]

enunciado: "Si acercamos dos polos de un imán que son {datos[idx][0]}, la fuerza resultante entre ellos será de ___."

explicacion: |
  Los polos opuestos (Norte y Sur) se atraen, mientras que los polos iguales (Norte-Norte o Sur-Sur) se repelen.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos_atraccion_repulsion"
  nivel: "basico"
  tags: ["magnetismo", "brújula"]

variables:
  situacion: uno_de([["un polo norte cerca de la aguja norte", "repulsión"], ["un polo sur cerca de la aguja norte", "atracción"]])

respuesta: verdadero
tipo: vf
enunciado: "Si colocamos un polo norte de un imán frente al polo norte de una aguja de brújula, la aguja experimentará una fuerza de repulsión. ¿Es esto verdadero o falso?"

explicacion: |
  Verdadero. Polos iguales se repelen.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos_atraccion_repulsion"
  nivel: "basico"
  tags: ["magnetismo", "polos"]

variables:
  par_polos: uno_de([["Norte y Sur", "atracción"], ["Norte y Norte", "repulsión"], ["Sur y Sur", "repulsión"]])

respuesta: par_polos[1]
tipo: completar
opciones_explicitas: ["atracción", "repulsión"]
respuestas_validas:
  - "atracción"
  - "repulsión"

enunciado: "En un experimento de laboratorio, se observa que un par de polos {par_polos[0]} genera una fuerza de ___."

explicacion: |
  La regla fundamental del magnetismo establece que polos opuestos se atraen y polos iguales se repelen.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos_atraccion_repulsion"
  nivel: "intermedio"
  tags: ["magnetismo", "secuencia"]

respuesta_orden: ["Polos iguales", "Repulsión", "Polos opuestos", "Atracción"]
tipo: ordenar
opciones_explicitas: ["Repulsión", "Polos opuestos", "Polos iguales", "Atracción"]

enunciado: "Ordena la lógica de interacción magnética de la siguiente manera: primero la relación de polos iguales y su efecto, y luego la de polos opuestos y su efecto."

explicacion: |
  La secuencia correcta describe la naturaleza de las fuerzas magnéticas: iguales se repelen, opuestos se atraen.
```

```
metadata:
  materia: "fisica"
  tema: "imanes_polos_atraccion_repulsion"
  nivel: "basico"
  tags: ["magnetismo", "vida_diaria"]

variables:
  caso: ["el imán tiene polo sur y la puerta polo norte", "atracción"]

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["atracción", "repulsión"]

enunciado: "Un imán de puerta se pega fuertemente porque {caso[0]}. Esto se debe a una fuerza de ___."

explicacion: |
  Para que un imán se pegue (atraiga), los polos deben ser de distinta naturaleza.
```

## Sección: impulso-cambio-momento (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["impulso", "fuerza", "tiempo"]

respuesta: "J"
tipo: "completar"
respuestas_validas:
  - "J"
  - "impulso"

enunciado: "El producto de la fuerza aplicada sobre un objeto por el intervalo de tiempo durante el cual actúa se denomina ___."

explicacion: |
  El impulso (J) se define como el producto de la fuerza constante por el tiempo de aplicación: J = F · Δt.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["teorema_impulso_momento"]

tipo: vf
respuesta: verdadero

enunciado: "Según el teorema del impulso y la cantidad de movimiento, el impulso aplicado a un objeto es igual al cambio en su momento lineal (Δp)."

explicacion: |
  El teorema establece que J = Δp, lo que significa que el impulso aplicado es igual a la variación de la cantidad de movimiento.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["unidades", "SI"]

variables:
  opciones_correctas: ["N·s", "kg·m/s"]
  opciones_incorrectas: ["N/s"]
  opciones_validas: ["N·s", "kg·m/s", "N/s"]

respuesta: "N·s"
tipo: "mc"
opciones_explicitas: ["N·s", "kg·m/s", "N/s"]

enunciado: "En el Sistema Internacional, la unidad del impulso es ___ (nota: ambas son equivalentes, elige la que representa la definición directa de F·Δt)."

explicacion: |
  Tanto N·s como kg·m/s son unidades válidas para el impulso debido a la equivalencia dimensional.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["momento_lineal", "definicion"]

respuesta: "m * v"
tipo: "completar"
respuestas_validas:
  - "m * v"
  - "m*v"
  - "p = m*v"

enunciado: "La cantidad de movimiento o momento lineal de un objeto se define matemáticamente como el producto de su masa por su ___."

explicacion: |
  El momento lineal (p) es una magnitud vectorial definida como p = m · v.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["relacion_variables"]

respuesta: falso
tipo: vf

enunciado: "Si se mantiene constante la fuerza aplicada sobre un objeto, aumentar el tiempo de aplicación reducirá el cambio en el momento lineal."

explicacion: |
  Como J = Δp y J = F · Δt, si la fuerza es constante, el cambio en el momento es directamente proporcional al tiempo. A mayor tiempo, mayor cambio de momento.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["impulso", "teoria"]

tipo: mc
opciones_explicitas: ["El cambio en el momento lineal", "La velocidad instantánea", "La masa del objeto", "La aceleración gravitatoria"]
respuesta: "El cambio en el momento lineal"

enunciado: "Según el teorema del impulso y la cantidad de movimiento, el impulso aplicado a un objeto es igual a ___."

explicacion: |
  El teorema del impulso establece que el impulso (J = F·Δt) es igual a la variación de la cantidad de movimiento (Δp).
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["calculo", "fuerza", "tiempo"]

variables:
  fuerza: 15.0
  tiempo: 2.5

tipo: completar
tolerancia_abs: 0.01

enunciado: "Una fuerza constante de {fuerza} N se aplica sobre un cuerpo durante un intervalo de tiempo de {tiempo} s. ¿Cuál es el módulo del impulso aplicado?"

pasos:
  - "Identificar la fuerza aplicada: F = {fuerza} N"
  - "Identificar el intervalo de tiempo: Δt = {tiempo} s"
  - "Calcular el producto: J = F * Δt"

explicacion: |
  El impulso se calcula multiplicando la fuerza por el tiempo: J = 15.0 * 2.5 = 37.5 kg·m/s.

respuesta: 37.5
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["momento_lineal", "velocidad"]

variables:
  masa: 5.0
  v_inicial: 2.0
  v_final: 8.0

tipo: completar
respuestas_validas:
  - "30.0"

enunciado: "Un objeto de {masa} kg pasa de una velocidad de {v_inicial} m/s a una de {v_final} m/s. El cambio en su momento lineal (Δp) es de ___ kg·m/s."

explicacion: |
  El cambio de momento es Δp = m * (v_final - v_inicial).
  Δp = 5.0 * (8.0 - 2.0) = 5.0 * 6.0 = 30.0 kg·m/s.

respuesta: "30.0"
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["teoria", "conceptos"]

tipo: vf

enunciado: "¿Si un objeto recibe el mismo impulso (J), pero su masa es el doble, su cambio en la velocidad será la mitad que si la masa fuera la original?"

explicacion: |
  Verdadero. Como J = Δp = m * Δv, entonces Δv = J / m. Si la masa (m) se duplica, la variación de velocidad (Δv) se reduce a la mitad.

respuesta: verdadero
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "avanzado"
  tags: ["ordenar", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Calcular el cambio de momento lineal (Δp)", "Determinar la fuerza aplicada (F)", "Identificar los datos del problema"]

enunciado: "Ordena los pasos lógicos para resolver un problema donde se pide hallar la fuerza aplicada durante un tiempo determinado, conociendo la masa y el cambio de velocidad."

explicacion: |
  Para resolver problemas de este tipo, primero se extraen los datos, luego se calcula la variación de la cantidad de movimiento y finalmente se despeja la fuerza de la fórmula J = Δp.

respuesta_orden: ["Identificar los datos del problema", "Calcular el cambio de momento lineal (Δp)", "Determinar la fuerza aplicada (F)"]
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["impulso", "momento_lineal"]

respuesta: "mismo"
tipo: mc
opciones_explicitas: ["mismo", "mayor", "menor", "inverso"]

enunciado: "Si una fuerza constante se aplica sobre un objeto durante un intervalo de tiempo determinado, el cambio en el momento lineal del objeto es ___ que el impulso aplicado."

explicacion: |
  Por el teorema del impulso y la cantidad de movimiento, el impulso aplicado a un objeto es exactamente igual al cambio en su momento lineal.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["fuerza_media", "impulso"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[10.0, 2.0, 20.0], [5.0, 4.0, 20.0]]

respuesta: datos[escenario_idx][2]
tipo: completar
tolerancia_abs: 0.01

enunciado: "Se aplica una fuerza media de {datos[escenario_idx][0]} N sobre un objeto durante un intervalo de tiempo de {datos[escenario_idx][1]} s. ¿Cuál es el cambio en el momento lineal (___) del objeto?"

pasos:
  - "Identificar la fuerza aplicada."
  - "Identificar el intervalo de tiempo."
  - "Calcular el impulso usando J = F * Delta t."

explicacion: |
  El cambio en el momento lineal es igual al impulso. 
  En el caso 1: 10 N * 2 s = 20 kg*m/s.
  En el caso 2: 5 N * 4 s = 20 kg*m/s.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["vector", "direccion"]

respuesta: verdadero
tipo: vf

enunciado: "Si el cambio en el momento lineal de un objeto es un vector, ¿el impulso aplicado debe tener la misma dirección y sentido que el cambio de momento?"

explicacion: |
  Correcto. El impulso es una magnitud vectorial definida como J = Delta p, por lo tanto, ambos vectores son idénticos en magnitud, dirección y sentido.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "avanzado"
  tags: ["fuerza_media", "integral"]

respuesta: "fuerza"
tipo: completar

enunciado: "Cuando una fuerza no es constante en el tiempo, el impulso total se calcula como la integral de la ___ en el intervalo de tiempo dado."

respuestas_validas:
  - "fuerza"

explicacion: |
  Para fuerzas variables, el impulso es la integral temporal de la fuerza: J = integral de F(t) dt. El resultado de esa integral es el impulso (en N·s), no una fuerza; si se conoce el impulso J y la duración Δt, puede definirse una fuerza media equivalente como F_media = J / Δt.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["masa", "velocidad", "momento"]

respuesta: "Masa y velocidad"
tipo: mc

opciones_explicitas: ["Masa y velocidad", "Masa y temperatura", "Velocidad y color", "Temperatura y color"]

enunciado: "Para determinar el momento lineal (p = m · v) de un objeto, ¿qué dos magnitudes físicas son necesarias para realizar el cálculo?"

explicacion: |
  El momento lineal depende directamente de la masa del objeto y de su velocidad instantánea. La temperatura y el color no afectan el momento lineal.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["impulso", "fuerza", "teoria"]

respuesta: "fuerza"
tipo: "mc"
opciones_explicitas: ["fuerza", "momento", "aceleracion", "velocidad"]

enunciado: "El impulso se define como el producto de una ___ aplicada sobre un objeto por el intervalo de tiempo durante el cual actúa."

explicacion: |
  El impulso (J) es el producto de la fuerza por el tiempo (J = F * Δt). Mientras que la fuerza es la causa inmediata del cambio de movimiento, el impulso describe el efecto acumulado de esa fuerza en un intervalo de tiempo determinado.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["teorema", "momento", "impulso"]

variables:
  escenario: uno_de([["un objeto gana velocidad", "aumenta"], ["un objeto frena", "disminuye"], ["un objeto mantiene velocidad", "es_cero"]])

respuesta: verdadero
tipo: "vf"

enunciado: "Si el impulso aplicado a un objeto es positivo (J > 0), el cambio en el momento lineal del objeto es positivo."

explicacion: |
  Según el teorema del impulso y la cantidad de movimiento, el impulso es igual al cambio en el momento lineal (J = Δp). Si el impulso es positivo, el momento final es mayor que el inicial, por lo tanto, el cambio es positivo (aumenta).
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["unidades", "dimensiones"]

respuesta: "kg·m/s"
tipo: "completar"
respuestas_validas:
  - "kg·m/s"

enunciado: "El impulso puede expresarse en unidades de Newton-segundo (N·s) o en unidades de momento lineal, que son ___."

explicacion: |
  Ambas unidades son dimensionalmente equivalentes. Como F = kg·m/s² y t = s, entonces F·t = (kg·m/s²)·s = kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "avanzado"
  tags: ["vector", "direccion"]

respuesta_orden: ["Fuerza", "Tiempo", "Cambio de momento"]
tipo: "ordenar"
opciones_explicitas: ["Fuerza", "Tiempo", "Cambio de momento"]

enunciado: "Ordene los conceptos de izquierda a derecha según la relación causal: la ___ aplicada durante un ___ produce un ___."

explicacion: |
  La secuencia lógica es: la fuerza (causa) actúa durante un intervalo de tiempo (duración) y esto resulta en un cambio en el momento lineal (efecto).
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["grafico", "fuerza_tiempo"]

respuesta: "aumenta"
tipo: "mc"
opciones_explicitas: ["aumenta", "disminuye", "se_mantiene"]

enunciado: "Si una fuerza constante actúa sobre un objeto durante cierto tiempo, produciendo un impulso (cambio en el momento lineal), y el tiempo de aplicación se duplica manteniendo la fuerza constante, el cambio en el momento lineal..."

explicacion: |
  Dado que J = F * Δt, el impulso es directamente proporcional al tiempo. Si el tiempo se duplica manteniendo la fuerza constante, el cambio en el momento lineal también se duplica (aumenta).
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["impulso", "momento", "dinamica"]

variables:
  escenario: uno_de([[10.0, 5.0, 2.0], [20.0, 10.0, 4.0], [5.0, 2.5, 1.0]])
  fuerza: escenario[0]
  delta_t: escenario[1]
  masa: escenario[2]

respuesta: fuerza * delta_t
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un jugador de fútbol patea un balón de masa {masa} kg aplicando una fuerza constante de {fuerza} N durante un intervalo de tiempo de {delta_t} s. ¿Cuál es el módulo del impulso aplicado?"

pasos:
  - "Identificar la fuerza aplicada: F = {fuerza} N"
  - "Identificar el intervalo de tiempo: Δt = {delta_t} s"
  - "Calcular el impulso usando la fórmula J = F * Δt"

explicacion: |
  El impulso (J) se define como el producto de la fuerza aplicada por el tiempo durante el cual actúa. 
  J = {fuerza} N * {delta_t} s = {fuerza * delta_t} kg·m/s.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["momento_lineal", "velocidad"]

variables:
  caso: uno_de([[1, 10.0, 5.0], [2, 20.0, 10.0], [3, 5.0, 2.0]])
  m: caso[1]
  v_i: caso[2]
  v_f: 0.0

respuesta: m * (v_f - v_i)
tipo: mc
opciones_explicitas: [0.0, -50.0, -200.0, -10.0]

enunciado: "Un objeto de masa {m} kg se desplaza con una velocidad inicial de {v_i} m/s y se detiene por completo tras un choque. ¿Cuál es el cambio en su momento lineal (Δp)?"

explicacion: |
  El cambio en el momento lineal es Δp = m * (v_f - v_i).
  En este caso: {m} * (0.0 - {v_i}) = {m * (0.0 - v_i)}.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "basico"
  tags: ["teoria", "impulso"]

respuesta: verdadero
tipo: vf

enunciado: "Si el impulso aplicado a un objeto es nulo (J = 0), entonces el cambio en su momento lineal (Δp) también es nulo."

explicacion: |
  Según el teorema del impulso y la cantidad de movimiento, J = Δp. Si el impulso es cero, el cambio en el momento también lo es, lo que significa que el objeto mantiene su estado de movimiento original.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "avanzado"
  tags: ["impulso", "tiempo", "fuerza"]

variables:
  datos: [[100.0, 2.0], [50.0, 5.0], [200.0, 1.0]]
  idx: uno_de([0, 1, 2])
  impulse: datos[idx][0]
  tiempo: datos[idx][1]

respuesta: impulse / tiempo
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un astronauta de masa constante recibe un impulso de {impulse} kg·m/s durante un tiempo de {tiempo} s. ¿Cuál es la fuerza media aplicada, en N?"

pasos:
  - "Recordar que J = F_media * Δt"
  - "Despejar la fuerza: F_media = J / Δt"

explicacion: |
  Para hallar la fuerza media, dividimos el impulso por el tiempo: {impulse} / {tiempo} = {impulse / tiempo} N.
```

```
metadata:
  materia: "fisica"
  tema: "impulso_cambio_momento"
  nivel: "intermedio"
  tags: ["metodologia"]

opciones_explicitas: ["Calcular Δp = m(v_f - v_i)", "Identificar datos (m, v_i, v_f)", "Igualar J = Δp", "Calcular J = F * Δt"]
respuesta_orden: ["Identificar datos (m, v_i, v_f)", "Calcular Δp = m(v_f - v_i)", "Igualar J = Δp", "Calcular J = F * Δt"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para resolver un problema donde se pide hallar la fuerza media aplicada durante un choque, conociendo la masa y las velocidades inicial y final."

explicacion: |
  Para resolver problemas de dinámica de colisiones, primero se extraen los datos, luego se calcula el cambio de movimiento (Δp), se aplica la equivalencia con el impulso y finalmente se despeja la incógnita (fuerza).
```

## Sección: induccion-electromagnetica-faraday-lenz (25 preguntas)

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["flujo_magnetico", "definicion"]

enunciado: "El producto escalar entre el vector campo magnético B y el vector área A se define como el ___ magnético."

respuestas_validas:
  - "flujo"
tipo: completar

explicacion: |
  El flujo magnético ($\Phi$) mide la cantidad de campo magnético que atraviesa una superficie determinada.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["ley_faraday", "fem"]

opciones_explicitas: ["La variación del flujo magnético en el tiempo", "La intensidad del campo magnético constante", "La resistencia del conductor", "La carga eléctrica total"]
respuesta: "La variación del flujo magnético en el tiempo"
tipo: mc

enunciado: "¿Qué magnitud es proporcional a la fuerza electromotriz (FEM) inducida según la Ley de Faraday?"

explicacion: |
  La Ley de Faraday establece que la FEM inducida es igual a la rapidez con la que cambia el flujo magnético a través de un circuito.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["ley_lenz", "polaridad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario_data: [["aumento", "se oponga"], ["disminución", "se oponga"]]

enunciado: "Considerando el escenario {escenario_data[escenario_idx][0]}, la corriente inducida tendrá una dirección tal que el campo magnético creado por ella ___ el cambio en el flujo original."

respuesta: "se oponga"
tipo: mc

opciones_explicitas: ["se oponga", "favorezca", "no tiene efecto"]

explicacion: |
  La Ley de Lenz es una consecuencia del principio de conservación de la energía y establece que el sentido de la corriente inducida es tal que el campo magnético que genera se opone a la variación del flujo que la produjo.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["conceptos_clave"]

enunciado: "¿Es necesario que exista un movimiento relativo entre un imán y una espira para que se induzca una corriente eléctrica?"

respuesta: falso
tipo: vf

explicacion: |
  No necesariamente. La inducción ocurre siempre que haya una variación del flujo magnético. Esto puede lograrse moviendo el imán, moviendo la espira, o incluso variando la intensidad del campo magnético con el imán en reposo.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["componentes", "formula"]

enunciado: "Para calcular la magnitud de la FEM inducida (epsilon) en un circuito de N espiras, se requiere conocer el número de vueltas, la variación del flujo (Delta Phi) y el ___ (Delta t)."

respuestas_validas:
  - "tiempo"
tipo: completar

explicacion: |
  La fórmula de la Ley de Faraday es epsilon = -N * (Delta Phi / Delta t), donde el denominador representa el intervalo de tiempo en el que ocurre la variación.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["ley_de_faraday", "flujo_magnetico"]

respuesta: verdadero
tipo: vf

enunciado: "Según la Ley de Faraday, la magnitud de la fuerza electromotriz (FEM) inducida en un circuito es proporcional a la rapidez con la que cambia el flujo magnético a través de él."

explicacion: |
  La ley de Faraday establece que la magnitud de la FEM inducida es proporcional a la tasa de cambio del flujo magnético. El signo negativo representa la Ley de Lenz, indicando que la corriente inducida crea un campo magnético que se opone al cambio del flujo original.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["calculo_fem", "flujo_magnetico"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [[4.0, 5.0], [10.0, 5.0]]
  tiempo: 2.0
  flujo_inicial: datos[escenario_idx][0]
  flujo_final: datos[escenario_idx][1]
  fem: abs((flujo_final - flujo_inicial) / tiempo)

respuesta: fem

tipo: completar
tolerancia_abs: 0.01

enunciado: "Un circuito experimenta un cambio en su flujo magnético de {flujo_inicial} Wb a {flujo_final} Wb en un intervalo de tiempo de {tiempo} segundos. ¿Cuál es la magnitud de la FEM inducida (en Voltios)?"

pasos:
  - "Calcular la variación del flujo: DeltaPhi = Phi_final - Phi_inicial"
  - "Dividir la variación por el tiempo: epsilon = DeltaPhi / Delta t"

explicacion: |
  La magnitud de la FEM se calcula como el cambio de flujo dividido por el tiempo.
  Para el caso 1: |(5.0 - 4.0) / 2.0| = 0.5 V.
  Para el caso 2: |(10.0 - 5.0) / 2.0| = 2.5 V.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["ley_de_lenz", "campo_magnetico"]

opciones_explicitas: ["Aumenta el flujo magnético", "Disminuye el flujo magnético", "No afecta el flujo"]

respuesta: "Disminuye el flujo magnético"
tipo: mc

enunciado: "Si un imán se acerca a una espira conductorista, la corriente inducida en la espira creará un campo magnético con la intención de:"

explicacion: |
  La Ley de Lenz establece que el efecto inducido siempre se opone a la causa que lo produce. Si el flujo aumenta (acercar imán), la espira crea un campo opuesto para intentar disminuirlo.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["formula", "flujo_magnetico"]

respuestas_validas:
  - "coseno"
  - "cos"

respuesta: "coseno"
tipo: completar

enunciado: "La expresión del flujo magnético $\\Phi$ a través de una superficie es el producto del campo magnético $B$ por el área $A$ por el ___ del ángulo entre el vector campo y la normal a la superficie."

explicacion: |
  La fórmula es $\Phi = B \cdot A \cdot \cos(\theta)$.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["metodologia", "problema_fisica"]

opciones_explicitas: ["Calcular el flujo magnético $\\Phi$", "Determinar la variación $\\Delta\\Phi$", "Dividir por el tiempo $\\Delta t$"]

respuesta_orden: ["Calcular el flujo magnético $\\Phi$", "Determinar la variación $\\Delta\\Phi$", "Dividir por el tiempo $\\Delta t$"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para hallar la magnitud de la FEM inducida cuando el flujo magnético cambia en un intervalo de tiempo determinado:"

explicacion: |
  Para aplicar la Ley de Faraday, primero debemos conocer el estado inicial y final del flujo para hallar la diferencia ($\Delta\Phi$) y luego aplicar la derivada temporal (división por el tiempo en casos discretos).
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["faraday", "lenz", "flujo_magnetico"]

variables:
  idx: uno_de([0, 1])
  datos: [["aumenta", "-"], ["disminuye", "+"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["-", "+"]

enunciado: "Si el flujo magnético a través de una espira cerrada está {datos[idx][0]} (en valor absoluto), la corriente inducida generará un campo magnético que se opone a ese cambio. El signo de la FEM inducida según la Ley de Lenz para contrarrestar dicho cambio es ___."

explicacion: |
  La Ley de Lenz establece que el sentido de la corriente inducida es tal que el campo magnético creado por ella se opone a la variación del flujo que la produjo. Si el flujo aumenta, la espira intenta disminuirlo (signo opuesto); si el flujo disminuye, intenta aumentarlo.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["faraday", "lenz"]

respuesta: falso
tipo: vf

enunciado: "Para que se produzca una corriente inducida en un conductor, es estrictamente necesario que el campo magnético sea constante en el tiempo, pero su intensidad debe variar de forma no lineal."

explicacion: |
  Falso. La condición fundamental para la inducción es la variación del flujo magnético ($\Phi = B \cdot A \cdot \cos\theta$). Un campo magnético puede ser constante en intensidad pero producir corriente si la espira se mueve (cambia el ángulo o el área), o un campo variable puede no producir corriente si el área de la espira es cero.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["flujo_magnetico", "geometria"]

variables:
  idx: uno_de([0, 1])
  angulos: [0, 90]
  senos: [0.0, 1.0]

respuesta: senos[idx]
tipo: completar
respuestas_validas:
  - 1.0
  - 0.0

enunciado: "El flujo magnético depende del ángulo entre el vector campo magnético y la normal a la superficie. Si dicho ángulo es de {angulos[idx]} grados, el valor del seno de ese ángulo es ___."

explicacion: |
  El flujo magnético es $\Phi = B \cdot A \cdot \cos(\theta)$. Sin embargo, la pregunta pide el seno del ángulo para evaluar la comprensión trigonométrica de la orientación. Si el ángulo es 90°, el seno es 1; si el ángulo es 0°, el seno es 0.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["faraday", "movimiento"]

respuesta: "se produce una corriente inducida"
tipo: completar
respuestas_validas:
  - "se produce una corriente inducida"

enunciado: "Si un imán se mueve lentamente hacia una espira de cobre colocada sobre una superficie no conductora, la variación del flujo magnético provoca que ___."

explicacion: |
  La variación del flujo magnético $\Delta\Phi/\Delta t$ es la causa de la fuerza electromotriz inducida según la Ley de Faraday. Al acercar el imán, el flujo cambia y se induce corriente.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["faraday", "calculo"]

respuesta: "mayor"
tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

enunciado: "Considerando la Ley de Faraday (E = -dPhi/dt), si la rapidez con la que cambia el flujo magnético a través de una espira aumenta, la magnitud de la fuerza electromotriz inducida será ___."

explicacion: |
  La magnitud de la FEM inducida es directamente proporcional a la rapidez de la variación del flujo magnético. A mayor velocidad de cambio, mayor es la tensión inducida.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica"
  nivel: "basico"
  tags: ["faraday", "flujo_magnetico"]

variables:
  es_variable: verdadero

respuesta: "flujo magnético"
tipo: completar
respuestas_validas:
  - "flujo magnético"
  - "flujo"

enunciado: "Mientras que el campo magnético B describe la intensidad del campo en un punto, la magnitud que describe la cantidad de líneas de campo que atraviesan una superficie dada es el ___."

explicacion: |
  El flujo magnético (Phi) depende tanto de la intensidad del campo (B) como del area (A) y del angulo de incidencia (theta), segun la formula Phi = B * A * cos(theta).
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica"
  nivel: "intermedio"
  tags: ["lenz", "energia"]

variables:
  es_correcta: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La Ley de Lenz, que establece que la corriente inducida se opone a la variación del flujo que la produce, es una manifestación de la Ley de Conservación de la Energía."

explicacion: |
  Si la corriente inducida ayudara a aumentar el flujo en lugar de oponerse, se crearía un sistema de retroalimentación positiva que generaría energía de la nada, violando la primera ley de la termodinámica.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica"
  nivel: "intermedio"
  tags: ["faraday", "fem"]

respuesta: "voltaje"
tipo: mc
opciones_explicitas: ["voltaje", "corriente"]

enunciado: "En un proceso de inducción, la Ley de Faraday describe la magnitud de la FEM (una diferencia de potencial) que surge debido al cambio en el flujo magnético; esta magnitud se mide en unidades de ___."

explicacion: |
  La Ley de Faraday se centra en la Fuerza Electromotriz (FEM), que tiene unidades de voltios, mientras que la corriente es el movimiento de carga resultante.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica"
  nivel: "basico"
  tags: ["faraday", "proceso"]

respuesta_orden: ["Cambio en el campo magnético", "Cambio en el flujo magnético", "FEM inducida", "Corriente inducida"]
tipo: ordenar
opciones_explicitas: ["Cambio en el campo magnético", "Cambio en el flujo magnético", "FEM inducida", "Corriente inducida"]

enunciado: "Ordena cronológicamente los eventos que ocurren cuando movemos un imán cerca de una bobina de cobre:"

pasos:
  - "Se altera la intensidad del campo magnético en la zona."
  - "El número de líneas de campo que atraviesan la bobina cambia."
  - "Se genera una diferencia de potencial (voltaje)."
  - "Se establece un movimiento de electrones en el conductor."

explicacion: |
  El proceso es causal: el cambio en el campo magnético provoca un cambio en el flujo, lo que induce una FEM, la cual finalmente impulsa la corriente.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica"
  nivel: "avanzado"
  tags: ["electromagnetismo", "faraday"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia de la electrostática donde las cargas se mueven por diferencias de potencial estáticas, en la inducción electromagnética la corriente surge únicamente debido a un campo eléctrico inducido por un flujo magnético variable."

explicacion: |
  Es verdadero: la inducción requiere un campo magnético *variable* en el tiempo para generar el campo eléctrico que mueve las cargas.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["faraday", "lenz", "aplicacion"]

variables:
  datos: [["un disco de cobre que gira entre imanes", "frenado"], ["una barra de aluminio que se mueve en un tubo de cobre", "frenado"]]
  idx: uno_de([0, 1])

enunciado: "En un sistema de frenado electromagnético, si el flujo magnético a través de una bobina cambia, se induce una corriente. Según la Ley de Lenz, la dirección de la corriente inducida será tal que el campo magnético creado por ella se oponga al ___ del flujo magnético que la produjo."

respuestas_validas:
  - "cambio"
tipo: completar

explicacion: |
  La Ley de Lenz es una consecuencia de la conservación de la energía. La corriente inducida crea un campo magnético que se opone al cambio de flujo que la originó.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["faraday", "generador"]

variables:
  casos: [[15, 2], [25, 5], [40, 8]]
  idx: uno_de([0, 1, 2])
  N: casos[idx][0]
  phi: casos[idx][1]
  fem: N * phi / 2

enunciado: "Un generador eléctrico tiene {N} espiras. Si el flujo magnético a través de cada espira cambia de 0 a {phi} Wb en un intervalo de 2 segundos, la magnitud de la fuerza electromotriz (FEM) inducida es de ___ V."

pasos:
  - "Calcular el cambio de flujo total: ΔΦ_total = N * Δφ"
  - "Aplicar la Ley de Faraday: ε = ΔΦ_total / Δt"

respuesta: fem
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  Usando la Ley de Faraday: ε = (N * Δφ) / Δt. 
  Para el caso seleccionado: ε = ({N} * {phi}) / 2 = {fem} V.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "basico"
  tags: ["lenz", "teoria"]

enunciado: "Si acercamos el polo norte de un imán hacia una bobina, la bobina experimentará una fuerza de repulsión porque la corriente inducida creará un campo magnético con el mismo polo (norte) hacia el imán. ¿Es esto verdadero o falso?"

respuesta: verdadero
tipo: vf

explicacion: |
  Verdadero. Según la Ley de Lenz, la corriente inducida crea un campo que se opone al aumento de flujo causado por el imán que se acerca; ese campo opuesto presenta un polo norte hacia el imán entrante, lo que produce una fuerza de repulsión.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "intermedio"
  tags: ["faraday", "formula"]

enunciado: "En la expresión de la magnitud de la FEM inducida, ε = -N * (dΦ/dt), el signo negativo representa la dirección de la corriente según la Ley de ___."

opciones_explicitas: ["Faraday", "Lenz", "Ohm", "Coulomb"]
respuesta: "Lenz"
tipo: mc

explicacion: |
  El signo negativo es la expresión matemática de la Ley de Lenz, indicando la oposición al cambio de flujo.
```

```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica_faraday_lenz"
  nivel: "avanzado"
  tags: ["procedimiento", "faraday"]

enunciado: "Para determinar la magnitud de la fuerza electromotriz inducida en un conductor en movimiento dentro de un campo magnético uniforme, ¿cuál es el orden correcto de los pasos?"

opciones_explicitas: ["Determinar el cambio de flujo magnético", "Calcular la derivada del flujo respecto al tiempo", "Multiplicar por el número de espiras"]
respuesta_orden: ["Determinar el cambio de flujo magnético", "Calcular la derivada del flujo respecto al tiempo", "Multiplicar por el número de espiras"]
tipo: ordenar

explicacion: |
  Primero se identifica cuánto cambia el flujo (ΔΦ), luego la tasa de cambio (dΦ/dt) y finalmente se escala por el número de vueltas (N) de la bobina.
```

