### 1 — El origen de la Tierra
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["acreción", "planetesimales"]

tipo: mc
opciones_explicitas: ["Acreción de planetesimales", "Colisión con un planeta gigante", "Condensación de gases estelares", "Fusión de un cometa"]

enunciado: "La Tierra primitiva se formó hace aproximadamente 4600 millones de años mediante un proceso llamado ___."

respuesta: "Acreción de planetesimales"

explicacion: |
  La Tierra se formó por la acumulación gravitatoria de cuerpos menores (planetesimales) en el disco protoplanetario.
```

### 2 — El estado térmico inicial
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["calor", "estado_fisico"]

tipo: input
tolerancia_abs: 100000000

enunciado: "Debido a los impactos constantes y el calor radiactivo, la Tierra primitiva se encontraba en un estado casi ___ (en millones de años, valor aproximado de la edad de formación)."

respuesta: 4600000000

explicacion: |
  El calor generado por el bombardeo de planetesimales y la desintegración de isótopos radiactivos mantuvo el manto y el núcleo en un estado fundido o casi fundido.
```

### 3 — Fuentes de calor
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["calor_radiactivo", "impactos"]

tipo: mc
opciones_explicitas: ["Calor por impactos y calor radiactivo", "Calor por mareas lunares", "Calor por actividad volcánica superficial", "Calor por radiación solar directa"]

enunciado: "¿Cuáles fueron las dos fuentes principales de calor que mantuvieron la Tierra primitiva en un estado fundido?"

respuesta: "Calor por impactos y calor radiactivo"

explicacion: |
  La energía cinética de los impactos de planetesimales se transformó en calor, sumado al calor liberado por la desintegración de elementos radiactivos como el Al-26 y el U-235.
```

### 4 — Procesos de diferenciación
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["diferenciación", "núcleo", "manto"]

tipo: ordenar
opciones_explicitas: ["Fusión de la roca", "Separación de elementos densos (hierro)", "Formación del núcleo y manto", "Estabilización de la corteza"]

enunciado: "Ordena cronológicamente los procesos que llevaron a la diferenciación planetaria:"

respuesta: ["Fusión de la roca", "Separación de elementos densos (hierro)", "Formación del núcleo y manto", "Estabilización de la corteza"]

explicacion: |
  Primero la roca debe fundirse; luego los elementos pesados como el hierro descienden al centro, formando el núcleo, mientras los ligeros forman el manto, culminando con la solidificación de la corteza.
```

### 5 — Composición y densidad
```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["elementos", "densidad"]

variables:
  idx: uno_de([0, 1])
  datos: [["hierro", "núcleo"], ["silicatos", "manto"]]

tipo: completar
respuestas_validas: ["hierro", "silicatos"]
respuesta: datos[idx][1]

enunciado: "Durante la diferenciación, los elementos más densos como el ___ migraron hacia el centro, mientras que los elementos más ligeros como los ___ formaron las capas superiores."

pasos:
  - "Identificar el elemento que baja por densidad"
  - "Identificar el material que queda en la superficie"

explicacion: |
  La gravedad separa los materiales por densidad: el hierro (denso) va al núcleo y los silicatos (menos densos) al manto y corteza.
```