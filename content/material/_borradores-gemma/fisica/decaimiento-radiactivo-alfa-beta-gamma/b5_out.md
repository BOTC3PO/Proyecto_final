### 1 — Identificación de radiación alfa
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["alfa", "particulas", "radiactividad"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["un detector de humo detecta una partícula con carga +2 y masa de 4 unidades de masa atómica", "particula_alfa"], ["un emisor de partículas emite un núcleo de helio", "particula_alfa"]]

enunciado: "En el siguiente escenario: {escenarios[escenario_idx][0]}, la radiación emitida es una ___."

respuestas_validas: ["particula_alfa"]

respuesta: escenarios[escenario_idx][1]
tipo: completar

explicacion: |
  La radiación alfa consiste en núcleos de helio (2 protones y 2 neutrones), por lo que tienen carga +2.
```

### 2 — Comparación de poder de penetración
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["penetracion", "gamma", "alfa"]

variables:
  tipo_rad: uno_de([0,1,2])
  datos: [["alfa", "papel"], ["beta", "aluminio"], ["gamma", "plomo"]]

enunciado: "Si nos enfrentamos a una radiación tipo {datos[tipo_rad][0]}, el material necesario para detenerla es aproximadamente una lámina de {datos[tipo_rad][1]}."

opciones_explicitas: ["papel", "aluminio", "plomo"]

respuesta: datos[tipo_rad][1]
tipo: mc

explicacion: |
  Las partículas alfa son detenidas por una hoja de papel; las beta por aluminio delgado y los rayos gamma requieren materiales densos como el plomo.
```

### 3 — Naturaleza de la radiación beta
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "basico"
  tags: ["beta", "electrones"]

enunciado: "¿Es correcto afirmar que la radiación beta consiste en la emisión de un electrón de alta energía?"

respuesta: verdadero
tipo: vf

explicacion: |
  La radiación beta negativa es la emisión de un electrón, mientras que la beta positiva es la emisión de un positrón.
```

### 4 — Secuencia de decaimiento
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "avanzado"
  tags: ["secuencia", "nucleidos"]

enunciado: "Ordene los pasos de un decaimiento alfa para un núcleo de Uranio-238 (U-238) hacia su descendiente inmediato:"

opciones_explicitas: ["Emisión de 2 protones", "Emisión de 2 neutrones", "Transformación en Torio-234"]

respuesta: ["Emisión de 2 protones", "Emisión de 2 neutrones", "Transformación en Torio-234"]
tipo: ordenar

explicacion: |
  En el decaimiento alfa, el núcleo pierde 2 protones y 2 neutrones, reduciendo su número atómico en 2.
```

### 5 — Diferencia entre partícula y radiación
```
metadata:
  materia: "fisica"
  tema: "decaimiento_radiactivo"
  nivel: "intermedio"
  tags: ["gamma", "fotones"]

variables:
  caso_idx: uno_de([0,1])
  casos: [["un núcleo excitado libera energía sin cambiar su número atómico", "fotones"], ["la emisión de energía electromagnética pura", "fotones"]]

enunciado: "En el caso de {casos[caso_idx][0]}, lo que se emite es radiación gamma, la cual está compuesta por ___."

respuestas_validas: ["fotones"]

respuesta: casos[caso_idx][1]
tipo: completar

explicacion: |
  A diferencia de las partículas alfa o beta, la radiación gamma no tiene masa ni carga, es energía electromagnética (fotones).
```