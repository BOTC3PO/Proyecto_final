# Historia Profunda — Tierra primitiva diferenciacion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

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

tipo: completar
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

respuesta_orden: ["Fusión de la roca", "Separación de elementos densos (hierro)", "Formación del núcleo y manto", "Estabilización de la corteza"]

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
respuestas_validas:
  - "hierro"
  - "silicatos"
respuesta: datos[idx][1]

enunciado: "Durante la diferenciación, los elementos más densos como el ___ migraron hacia el centro, mientras que los elementos más ligeros como los ___ formaron las capas superiores."

pasos:
  - "Identificar el elemento que baja por densidad"
  - "Identificar el material que queda en la superficie"

explicacion: |
  La gravedad separa los materiales por densidad: el hierro (denso) va al núcleo y los silicatos (menos densos) al manto y corteza.
```

### 6 — El núcleo planetario

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["diferenciacion", "nucleo", "densidad"]

respuesta: "hierro y níquel"
tipo: completar
respuestas_validas:
  - "hierro y níquel"
  - "hierro, níquel"

enunciado: "Durante la etapa de océano de magma, los elementos más densos como el ___ se hundieron hacia el centro para formar el núcleo."

explicacion: |
  Debido a la gravedad, los materiales con mayor densidad (metales pesados) migraron hacia el centro del planeta, proceso conocido como diferenciación por gravedad.
```

### 7 — Capas de la Tierra

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["capas", "silicatos", "manto"]

respuesta: "silicatos"
tipo: mc
opciones_explicitas: ["silicatos", "hierro", "níquel", "magnesio"]

enunciado: "¿Qué tipo de materiales predominan en las capas externas (manto y corteza) debido a su baja densidad en comparación con los metales?"

explicacion: |
  Los silicatos son minerales menos densos que los metales, por lo que flotaron hacia la superficie durante la diferenciación planetaria.
```

### 8 — Proceso de diferenciación

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["proceso", "magma", "gravedad"]

respuesta_orden: ["Estado fundido", "Diferenciación por densidad", "Formación de capas"]
tipo: ordenar
opciones_explicitas: ["Estado fundido", "Diferenciación por densidad", "Formación de capas"]

enunciado: "Ordena cronológicamente los eventos que permitieron la estructura actual de la Tierra:"

explicacion: |
  Primero la Tierra debe estar fundida (oceano de magma), luego la gravedad actúa separando materiales por peso, resultando en la estructura de capas.
```

### 9 — Densidad y posición

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["densidad", "correlacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["núcleo", "alta densidad", "hierro"], ["corteza", "baja densidad", "silicatos"]]

respuesta: datos[escenario_idx][2]
tipo: mc
opciones_explicitas: ["hierro", "silicatos", "magnesio", "aluminio"]

enunciado: "Si analizamos la {datos[escenario_idx][0]}, que se caracteriza por tener una {datos[escenario_idx][1]}, el elemento principal que la compone es el ___."

explicacion: |
  La posición de un material en la Tierra primitiva dependía directamente de su densidad: lo más denso abajo, lo menos denso arriba.
```

### 10 — El océano de magma

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["estado_fisico", "condicion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es verdadero o falso que la diferenciación planetaria requiere que la Tierra se encuentre en un estado fundido o parcialmente fundido para que los materiales se muevan por gravedad?"

explicacion: |
  Sin un estado líquido o viscoso (magma), los materiales sólidos no podrían migrar a través de la masa planetaria para separarse por densidad.
```

### 11 — Capas de la Tierra por densidad

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["geologia", "densidad"]

tipo: mc
opciones_explicitas: ["Núcleo", "Manto", "Corteza"]

enunciado: "Durante la diferenciación planetaria, los materiales más densos se hundieron hacia el centro de la Tierra, formando la capa más interna conocida como la ___."

respuesta: "Núcleo"

explicacion: |
  La gravedad hizo que los elementos más pesados (como el hierro y el níquel) migraran hacia el centro, formando el núcleo.
```

### 12 — Orden de densidad

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["densidad", "orden"]

tipo: ordenar
opciones_explicitas: ["Corteza", "Manto", "Núcleo"]

enunciado: "Ordena las capas de la Tierra desde la menos densa (superficie) hasta la más densa (centro):"

respuesta_orden: ["Corteza", "Manto", "Núcleo"]

explicacion: |
  La diferenciación por densidad organiza la Tierra en capas: la corteza es la más ligera, seguida por el manto y finalmente el núcleo en el centro.
```

### 13 — Comparación de densidades

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["densidad", "manto"]

variables:
  datos: [["manto", "mayor"], ["núcleo", "mayor"]]
  idx: uno_de([0, 1])

enunciado: "Considerando la estructura terrestre, la densidad del {datos[idx][0]} es {datos[idx][1]} que la densidad de la corteza."

tipo: mc
opciones_explicitas: ["mayor", "menor", "igual"]

respuesta: datos[idx][1]

explicacion: |
  El {datos[idx][0]} se encuentra debajo de la corteza y posee una densidad {datos[idx][1]}.
```

### 14 — Completar la estructura

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["geologia", "capas"]

tipo: completar
respuestas_validas:
  - "manto"

respuesta: "manto"

enunciado: "La capa intermedia de la Tierra, situada entre la corteza y el núcleo, se denomina ___."

explicacion: |
  El manto es la capa intermedia que separa la corteza externa del núcleo central.
```

### 15 — Cálculo de densidad relativa

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["calculo", "densidad"]

variables:
  datos: [[5.5, 13.0], [3.3, 5.5], [2.7, 3.3]]
  idx: uno_de([0, 1, 2])

enunciado: "Si la densidad de la capa A es {datos[idx][0]} g/cm³ y la densidad de la capa B es {datos[idx][1]} g/cm³, la diferencia de densidad entre la capa más densa y la menos densa de este par es de ___ g/cm³."

tipo: completar
respuesta: abs(datos[idx][1] - datos[idx][0])
tolerancia_abs: 0.01

explicacion: |
  La diferencia se calcula restando la densidad menor de la mayor. En este caso, el resultado es {abs(datos[idx][1] - datos[idx][0])}.
```

### 16 — El origen de la Luna

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["astronomia", "teoria", "luna"]

respuesta: "Theia"
tipo: mc
opciones_explicitas: ["Theia", "Gaia", "Venus", "Mars"]

enunciado: "Según la hipótesis del Gran Impacto, la Luna se formó tras la colisión de la Tierra primitiva con un protoplaneta llamado _______."

explicacion: |
  La hipótesis del Gran Impacto sugiere que un objeto del tamaño de Marte, denominado Theia, colisionó con la Tierra, dejando un anillo de escombros que eventualmente se consolidó para formar la Luna.
```

### 17 — Dinámica de la colisión

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["fisica", "colision", "teoria"]

variables:
  escenario: uno_de([["un objeto masivo", "aumentó la rotación", "creó un disco de escombros"], ["un objeto pequeño", "no alteró la órbita", "no generó escombros"], ["un objeto gaseoso", "enfrió el núcleo", "disipó la atmósfera"]])
  respuesta_correcta: escenario[1]

tipo: completar
respuesta: respuesta_correcta

enunciado: "En el escenario de una colisión con un objeto de gran masa, la energía cinética transferida _______."

explicacion: |
  Una colisión de tal magnitud no solo habría aportado masa, sino que habría transferido una cantidad enorme de energía angular, afectando la velocidad de rotación de la Tierra primitiva.
```

### 18 — Composición de la Luna

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["quimica", "isótopos", "luna"]

respuesta: "muy similar"
tipo: mc
opciones_explicitas: ["muy similar", "completamente distinta", "mucho más densa", "sin hierro"]

enunciado: "Una de las pruebas de la hipótesis del Gran Impacto es que la composición isotópica de los silicatos lunares es _______ a la de la Tierra."

explicacion: |
  La similitud isotópica entre la Tierra y la Luna es un desafío para algunas versiones de la teoría, pero sugiere que la Luna se formó a partir de material que ya estaba mezclado con el manto terrestre.
```

### 19 — Secuencia de eventos

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["procesos", "secuencia", "formacion"]

respuesta_orden: ["Colisión de Theia", "Formación de disco de escombros", "Acreción de la Luna"]
tipo: ordenar
opciones_explicitas: ["Colisión de Theia", "Formación de disco de escombros", "Acreción de la Luna"]

enunciado: "Ordena cronológicamente los eventos que llevaron a la formación del sistema Tierra-Luna según la hipótesis del Gran Impacto:"

explicacion: |
  Primero ocurre el impacto, luego el material expulsado forma un anillo o disco alrededor de la Tierra, y finalmente la gravedad hace que ese material se agrupe para formar la Luna.
```

### 20 — Consecuencias térmicas

```
metadata:
  materia: "historia_profunda"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["termica", "magma", "oceano"]

respuesta: 1200.0
tipo: completar
tolerancia_abs: 100.0

enunciado: "Si la energía del impacto fue suficiente para fundir gran parte del manto, la Tierra habría estado cubierta por un océano de magma. Si estimamos que la temperatura de fusión media fue de 1200 °C, ¿cuántos Kelvin (K) representa esto aproximadamente? (Usa la fórmula K = C + 273.15)"

pasos:
  - "Identificar la temperatura en Celsius: 1200"
  - "Sumar la constante de conversión: 1200 + 273.15"

explicacion: |
  La colisión habría generado temperaturas extremas, transformando la superficie terrestre en un océano de roca fundida (magma) durante un periodo prolongado.
```

### 21 — Capas por densidad

```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["diferenciacion", "densidad"]

variables:
  escenario: uno_de([["hierro", "núcleo"], ["silicatos", "manto"], ["granito", "corteza"]])
  dato: escenario[0]
  resp: escenario[1]

tipo: mc
opciones_explicitas: ["núcleo", "manto", "corteza"]

enunciado: "Durante la diferenciación planetaria, los elementos más densos como el {dato} se hundieron hacia el centro, formando la capa conocida como ___."

respuesta: resp

explicacion: |
  Los elementos más pesados (densos) como el hierro y el níquel migraron al centro debido a la gravedad, formando el núcleo.
```

### 22 — Composición de la corteza

```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["composicion", "corteza"]

variables:
  escenario: [["silicatos ligeros", "corteza"], ["metales pesados", "núcleo"], ["magma denso", "manto"]]
  idx: uno_de([0,1,2])
  dato: escenario[idx][0]
  resp: escenario[idx][1]

tipo: completar
respuestas_validas:
  - "corteza"
  - "núcleo"
  - "manto"

enunciado: "La capa más externa de la Tierra está compuesta principalmente por ___."

respuesta: resp

explicacion: |
  La corteza es la capa más superficial y está formada por materiales menos densos (silicatos) que flotaron sobre el manto.
```

### 23 — Orden de las capas

```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "intermedio"
  tags: ["estructura", "orden"]

tipo: ordenar
opciones_explicitas: ["Corteza", "Manto", "Núcleo"]
respuesta_orden: ["Corteza", "Manto", "Núcleo"]

enunciado: "Ordena las capas de la Tierra desde la superficie hacia el centro del planeta:"

explicacion: |
  La estructura terrestre se organiza por densidad: la corteza es la más externa, seguida por el manto y finalmente el núcleo en el centro.
```

### 24 — El manto terrestre

```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "basico"
  tags: ["manto", "densidad"]

variables:
  escenario: [["materiales de densidad intermedia", "manto"], ["hierro puro", "núcleo"], ["rocas ligeras", "corteza"]]
  idx: uno_de([0,1,2])
  dato: escenario[idx][0]
  resp: escenario[idx][1]

tipo: mc
opciones_explicitas: ["manto", "núcleo", "corteza"]

enunciado: "La capa situada entre la corteza y el núcleo, compuesta por ___ , se denomina ___."

respuesta: resp

explicacion: |
  El manto está compuesto por materiales con una densidad intermedia, situándose debajo de la corteza.
```

### 25 — Densidad del núcleo

```
metadata:
  materia: "geologia"
  tema: "tierra_primitiva_diferenciacion"
  nivel: "avanzado"
  tags: ["nucleo", "densidad"]

variables:
  escenario: [["muy alta", "núcleo"], ["media", "manto"], ["baja", "corteza"]]
  idx: uno_de([0,1,2])
  dato: escenario[idx][0]
  resp: escenario[idx][1]

tipo: completar
tolerancia_abs: 0

enunciado: "Si la densidad de la corteza es baja y la del manto es media, la densidad del núcleo es ___."

respuesta: "muy alta"

explicacion: |
  Debido a la gravedad, los materiales con densidad muy alta (como el hierro) se acumularon en el centro del planeta.
```
