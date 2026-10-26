### 1 — El primer paso del diseño
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["metodologia", "definicion"]

respuesta: "definicion_problema"
tipo: "mc"
opciones_explicitas: ["definicion_problema", "seleccion_materiales", "prototipado_rapido", "analisis_de_costos"]

enunciado: "Antes de proponer una solución técnica detallada, es fundamental realizar la ___ para entender qué se debe resolver."

explicacion: |
  El diseño conceptual comienza con la definición clara del problema. Sin entender la necesidad real, cualquier solución técnica posterior corre el riesgo de ser irrelevante o ineficiente.
```

### 2 — Identificación de restricciones
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["restricciones", "requisitos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [
    ["Un dron de carga debe elevar 5kg", "5"],
    ["Un sensor de temperatura debe operar a -20°C", "-20"]
  ]

respuesta: escenarios[caso_idx][1]
tipo: "input"
tolerancia_abs: 0.1

enunciado: "En el diseño conceptual de un sistema de transporte de carga, si el requisito principal es que el dispositivo debe ser capaz de levantar una masa de {escenarios[caso_idx][0]}, ¿cuál es el valor numérico de la carga de diseño en kg?"

pasos:
  - "Identificar el requisito de carga útil en el enunciado."
  - "Extraer el valor numérico asociado a la capacidad de carga."

explicacion: |
  En la fase conceptual, los requisitos de rendimiento (como la carga útil) se establecen como parámetros de diseño que guiarán la selección de motores y estructuras en la fase técnica.
```

### 3 — Verdad o Falso: Alcance del diseño conceptual
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: falso

tipo: "vf"

enunciado: "El diseño conceptual se encarga de especificar las dimensiones exactas de cada tornillo y el código de programación final de los componentes."

explicacion: |
  Falso. El diseño conceptual se centra en la arquitectura general, la lógica de funcionamiento y la solución macro. La especificación de detalles como tornillos o líneas de código pertenece a la fase de diseño detallado o ingeniería de detalle.
```

### 4 — Secuencia de desarrollo
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "intermedio"
  tags: ["proceso", "flujo"]

respuesta: ["identificacion_necesidad", "brainstorming_soluciones", "seleccion_arquitectura", "analisis_viabilidad"]
tipo: "ordenar"
opciones_explicitas: ["identificacion_necesidad", "brainstorming_soluciones", "seleccion_arquitectura", "analisis_viabilidad", "fabricacion_final"]

enunciado: "Ordene las etapas del proceso de diseño desde la concepción inicial hasta la validación de la idea antes de la fabricación."

explicacion: |
  El flujo lógico comienza con la necesidad, sigue con la generación de ideas (brainstorming), se elige una arquitectura de solución y se valida su viabilidad. La fabricación es una etapa posterior al diseño.
```

### 5 — Selección de arquitectura
```
metadata:
  materia: "ingenieria"
  tema: "diseno_conceptual"
  nivel: "avanzado"
  tags: ["toma_de_decisiones", "arquitectura"]

variables:
  opcion_idx: uno_de([0, 1])
  casos: [
    ["un sistema de frenado mecánico", "hidraulico"],
    ["un sistema de transmisión de energía", "electrico"]
  ]

respuesta: casos[opcion_idx][1]
tipo: "completar"
respuestas_validas: ["hidraulico", "electrico"]

enunciado: "Si estamos en la fase conceptual de un vehículo de transporte pesado y decidimos que la transferencia de fuerza se hará mediante fluidos a presión, la arquitectura seleccionada es de tipo ___."

explicacion: |
  La elección de la arquitectura (mecánica, hidráulica, eléctrica) es la decisión principal del diseño conceptual. Una vez elegida, se procede a realizar los cálculos de ingeniería detallados para esa arquitectura específica.
```