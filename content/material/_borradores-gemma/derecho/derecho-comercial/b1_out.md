### 1 — Definición de Derecho Comercial
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["Es el conjunto de normas que regulan la actividad de los comerciantes y los actos de comercio.", "Es el conjunto de normas que regulan exclusivamente las relaciones entre personas físicas.", "Es la rama que regula únicamente los contratos de alquiler.", "Es el conjunto de normas que regulan la actividad de las empresas y los actos de comercio."]

respuesta: "Es el conjunto de normas que regulan la actividad de los comerciantes y los actos de comercio."

enunciado: "El Derecho Comercial se define fundamentalmente como el conjunto de normas que regulan ___."

explicacion: |
  El Derecho Comercial es la rama del derecho privado que regula la actividad de los comerciantes, la organización de las empresas y los actos de comercio.
```

### 2 — Sujetos del Derecho Comercial
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["sujetos", "comerciante"]

tipo: vf
respuesta: falso

enunciado: "¿Es verdadero o falso que el Derecho Comercial regula únicamente a las personas jurídicas (sociedades), excluyendo a las personas humanas que actúan como comerciantes?"

explicacion: |
  Falso. El Derecho Comercial regula tanto a las personas humanas que realizan actos de comercio como a las personas jurídicas (sociedades comerciales).
```

### 3 — Elementos de la Empresa
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["empresa", "elementos"]

variables:
  idx: uno_de([0, 1])
  datos: [["capital", "el aporte económico"], ["fuerza de trabajo", "el esfuerzo humano"]]

tipo: completar
respuestas_validas: ["capital", "fuerza de trabajo"]
respuesta: datos[idx][0]

enunciado: "En el ámbito del derecho comercial, un elemento esencial para la organización de la empresa es el ___."

pasos:
  - "Identificar los elementos que componen la unidad económica de la empresa."
  - "Seleccionar el concepto que completa la definición técnica."

explicacion: |
  La empresa requiere de elementos como el capital, la fuerza de trabajo, la tecnología y la organización para cumplir su fin lucrativo.
```

### 4 — Clasificación de Actos de Comercio
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["actos_de_comercio", "clasificacion"]

tipo: mc
opciones_explicitas: ["Actos de comercio por su naturaleza (objetivos)", "Actos de comercio por la voluntad de las partes (subjetivos)", "Actos de comercio por su cuantía", "Actos de comercio por su duración"]

respuesta: "Actos de comercio por su naturaleza (objetivos)"

enunciado: "Cuando un acto es considerado comercial por la ley, independientemente de quién lo realice, estamos ante actos de comercio ___."

explicacion: |
  Los actos de comercio pueden ser objetivos (por su naturaleza, como la compraventa de bienes muebles para revender) o subjetivos (dependiendo de la calidad de la persona que lo realiza).
```

### 5 — Secuencia de la Crisis Empresarial
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "avanzado"
  tags: ["quiebra", "concurso_preventivo", "proceso"]

tipo: ordenar
opciones_explicitas: ["Estado de insolvencia", "Concurso preventivo", "Quiebra"]
respuesta: ["Estado de insolvencia", "Concurso preventivo", "Quiebra"]

enunciado: "Ordene cronológicamente los estadios típicos de un proceso de crisis económica de un comerciante, desde la situación inicial hasta la liquidación forzosa."

explicacion: |
  El proceso suele comenzar con un estado de insolvencia, que puede derivar en un concurso preventivo (para renegociar deudas) o directamente en una quiebra (liquidación de activos).
```