### 1 — La distinción entre niñez y pubertad
```
metadata:
  materia: "psicologia"
  tema: "desarrollo_infantil"
  nivel: "basico"
  tags: ["niñez", "pubertad", "desarrollo"]

respuesta: "pubertad"
tipo: mc
opciones_explicitas: ["niñez", "pubertad", "adolescencia", "vejez"]

enunciado: "Mientras que la niñez se caracteriza por un crecimiento físico y cognitivo constante, la etapa que se distingue principalmente por la maduración de los órganos reproductivos es la ___."

explicacion: |
  La pubertad es el proceso biológico de cambios físicos y hormonales que marca el inicio de la capacidad reproductiva, diferenciándose de la niñez en su enfoque en la maduración sexual.
```

### 2 — Cambios en la identidad durante la adolescencia
```
metadata:
  materia: "psicologia"
  tema: "identidad_adolescente"
  nivel: "intermedio"
  tags: ["identidad", "psicologia_evolutiva"]

variables:
  es_identidad_estable: uno_de([verdadero, falso])

respuesta: es_identidad_estable
tipo: vf

enunciado: "Durante la transición de la pubertad a la adolescencia, la identidad del individuo suele ser un proceso dinámico y en constante búsqueda, por lo tanto, ¿es la identidad un constructo estático e inmutable durante este periodo? {es_identidad_estable}"

explicacion: |
  La identidad en la adolescencia es un proceso de exploración. No es un estado fijo, sino una construcción que se moldea a través de la interacción social y la introspección.
```

### 3 — Secuencia de hitos del desarrollo
```
metadata:
  materia: "psicologia"
  tema: "etapas_del_desarrollo"
  nivel: "basico"
  tags: ["secuencia", "etapas"]

opciones_explicitas: ["Infancia", "Pubertad", "Adultez"]
respuesta: ["Infancia", "Pubertad", "Adultez"]
tipo: ordenar

enunciado: "Ordene cronológicamente las siguientes etapas del desarrollo humano, desde la más temprana a la más tardía:"

pasos:
  - "Identificar la etapa de dependencia y aprendizaje motor."
  - "Identificar la etapa de cambios hormonales y búsqueda de autonomía."
  - "Identificar la etapa de consolidación de la identidad y roles sociales."

explicacion: |
  El desarrollo humano sigue una secuencia biológica y psicológica predecible: primero la infancia (crecimiento), luego la pubertad (maduración sexual) y finalmente la adultez (estabilidad).
```

### 4 — El concepto de maduración vs. crecimiento
```
metadata:
  materia: "psicologia"
  tema: "maduracion_biologica"
  nivel: "intermedio"
  tags: ["maduracion", "crecimiento"]

variables:
  caso_estudio: uno_de([0, 1])

respuesta: tabla[caso_estudio][1]
tipo: completar

enunciado: "En el contexto del desarrollo, el crecimiento se refiere al aumento de tamaño físico, mientras que la ___ se refiere a la adquisición de funciones complejas a través de la maduración del sistema nervioso. El caso analizado es: {caso_estudio}."

pasos:
  - "Diferenciar entre aumento cuantitativo (crecimiento) y aumento cualitativo (maduración)."

variables_contexto:
  tabla: [
    ["maduración", "maduración"]
  ]

explicacion: |
  La maduración es un proceso cualitativo que permite la aparición de nuevas capacidades (como el lenguaje o el razonamiento abstracto), mientras que el crecimiento es cuantitativo.
```

### 5 — Características de la identidad en la pubertad
```
metadata:
  materia: "psicologia"
  tema: "identidad_y_cuerpo"
  nivel: "avanzado"
  tags: ["identidad", "cambios_fisicos"]

variables:
  es_centrado_en_el_otro: uno_de([verdadero, falso])

respuesta: es_centrado_en_el_otro
tipo: vf

enunciado: "Durante la pubertad, el egocentrismo adolescente suele aumentar, lo que lleva al individuo a sentir que es el centro de atención de los demás (el 'público imaginario'). ¿Es este fenómeno una característica distintiva de la identidad en esta etapa? {es_centrado_en_el_otro}"

explicacion: |
  El egocentrismo adolescente es un fenómeno psicológico donde el joven siente que sus experiencias y su apariencia son observadas constantemente por los demás, marcando un cambio en su autoconcepto.
```