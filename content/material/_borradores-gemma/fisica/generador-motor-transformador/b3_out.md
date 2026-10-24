### 1 — El papel del campo magnético
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "basico"
  tags: ["electromagnetismo", "inducido"]

enunciado: "Para que un generador eléctrico produzca corriente continua o alterna, es indispensable que exista un ___ campo magnético que cambie respecto a las bobinas para inducir una fuerza electromotriz."

respuestas_validas: ["variación", "cambio", "movimiento"]
tipo: completar

explicacion: |
  Para que ocurra la inducción electromagnética (Ley de Faraday), no basta con tener un campo magnético constante; el flujo magnético debe variar en el tiempo o el conductor debe moverse a través del campo.
```

### 2 — Transformadores y corriente continua
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

### 3 — Intercambio de energía en motores
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

### 4 — Componentes de un motor eléctrico
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

### 5 — Flujo de trabajo en un sistema de generación
```
metadata:
  materia: "fisica"
  tema: "generador_motor_transformador"
  nivel: "intermedio"
  tags: ["secuencia", "generador"]

enunciado: "Ordena los pasos que ocurren en una central hidroeléctrica para obtener electricidad en un hogar:"

opciones_explicitas: ["Energía cinética del agua", "Rotación del eje del generador", "Inducción de corriente eléctrica", "Distribución por líneas de alta tensión"]
respuesta: ["Energía cinética del agua", "Rotación del eje del generador", "Inducción de corriente eléctrica", "Distribución por líneas de alta tensión"]
tipo: ordenar

explicacion: |
  La secuencia lógica es: la caída del agua mueve la turbina (energía cinética), la turbina mueve el generador (energía mecánica), el generador induce electricidad (energía eléctrica) y esta se transporta.
```