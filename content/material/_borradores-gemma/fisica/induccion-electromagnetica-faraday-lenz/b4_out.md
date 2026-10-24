### 1 — Diferencia entre Flujo y Campo Magnético
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica"
  nivel: "basico"
  tags: ["faraday", "flujo_magnetico"]

variables:
  es_variable: verdadero

respuesta: "flujo_magnetico"
tipo: completar
respuestas_validas: ["flujo_magnetico"]

enunciado: "Mientras que el campo magnético $\\vec{B}$ describe la intensidad del campo en un punto, la magnitud que describe la cantidad de líneas de campo que atraviesan una superficie dada es el ___."

explicacion: |
  El flujo magnético ($\Phi$) depende tanto de la intensidad del campo ($B$) como del área ($A$) y del ángulo de incidencia ($\theta$), según la fórmula $\Phi = B \cdot A \cdot \cos(\theta)$.
```

### 2 — Ley de Lenz vs. Conservación de la Energía
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

### 3 — Comparación entre FEM inducida y Corriente inducida
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica"
  nivel: "intermedio"
  tags: ["faraday", "fem"]

variables:
  caso: uno_de([0, 1])
  datos: [
    ["La FEM es una diferencia de potencial inducida", "voltaje"],
    ["La corriente es el flujo de carga resultante", "corriente"]
  ]

respuesta: datos[caso][1]
tipo: mc
opciones_explicitas: ["voltaje", "corriente"]

enunciado: "En un proceso de inducción, la Ley de Faraday describe la magnitud de la ___ que surge debido al cambio en el flujo, mientras que la Ley de Ohm describe la ___ que circula por el circuito."

explicacion: |
  La Ley de Faraday se centra en la Fuerza Electromotriz (FEM), que tiene unidades de voltios, mientras que la corriente es el movimiento de carga resultante.
```

### 4 — Orden de los procesos en inducción
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica"
  nivel: "basico"
  tags: ["faraday", "proceso"]

variables:
  es_orden_correcto: verdadero

respuesta: ["cambio_campo", "cambio_flujo", "fem_inducida", "corriente"]
tipo: ordenar
opciones_explicitas: ["cambio_campo", "cambio_flujo", "fem_inducida", "corriente"]

enunciado: "Ordena cronológicamente los eventos que ocurren cuando movemos un imán cerca de una bobina de cobre:"

pasos:
  - "Se altera la intensidad del campo magnético en la zona."
  - "El número de líneas de campo que atraviesan la bobina cambia."
  - "Se genera una diferencia de potencial (voltaje)."
  - "Se establece un movimiento de electrones en el conductor."

explicacion: |
  El proceso es causal: el cambio en el campo magnético provoca un cambio en el flujo, lo que induce una FEM, la cual finalmente impulsa la corriente.
```

### 5 — Naturaleza de la inducción: Magnética vs. Eléctrica
```
metadata:
  materia: "fisica"
  tema: "induccion_electromagnetica"
  nivel: "avanzado"
  tags: ["electromagnetismo", "faraday"]

variables:
  es_falso: falso

respuesta: falso
tipo: vf

enunciado: "A diferencia de la electrostática donde las cargas se mueven por diferencias de potencial estáticas, en la inducción electromagnética la corriente surge únicamente debido a un campo eléctrico inducido por un flujo magnético variable."

explicacion: |
  Es verdadero: la inducción requiere un campo magnético *variable* en el tiempo para generar el campo eléctrico que mueve las cargas.
```