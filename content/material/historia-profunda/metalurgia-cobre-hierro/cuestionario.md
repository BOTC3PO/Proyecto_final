# Historia Profunda — Metalurgia cobre hierro (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El salto de la piedra al metal

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["tecnologia", "prehistoria"]

respuesta: "metalurgia"
tipo: completar
respuestas_validas:
  - "metalurgia"

enunciado: "El proceso de extracción y transformación de minerales para obtener metales se denomina ___."

explicacion: |
  La metalurgia permitió la creación de herramientas más duraderas y precisas que las de piedra, marcando el inicio de nuevas eras tecnológicas.
```

### 2 — Propiedades del cobre

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["cobre", "propiedades"]

variables:
  escenario: uno_de([["cobre", "blando", "color rojizo"], ["hierro", "duro", "color grisáceo"], ["bronce", "aleación", "color amarillento"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["cobre", "hierro", "bronce"]

enunciado: "En la Edad del Cobre, este metal se caracterizaba por ser un material ___ y de color ___."

explicacion: |
  El cobre fue uno de los primeros metales utilizados debido a su relativa abundancia y su capacidad para ser moldeado en frío o mediante fundición.
```

### 3 — El proceso de fundición

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "avanzado"
  tags: ["fundicion", "tecnologia"]

respuesta: 1850
tipo: completar
tolerancia_abs: 1

enunciado: "Si un fundidor necesita alcanzar una temperatura de 1000 grados para el cobre y requiere un incremento adicional de 850 grados para alcanzar el punto de fusión de una aleación específica, ¿a qué temperatura total debe llegar el horno?"

pasos:
  - "Identificar la temperatura inicial: 1000 grados."
  - "Sumar el incremento necesario: 850 grados."
  - "Calcular el total: 1000 + 850."

explicacion: |
  El control de la temperatura fue el desafío técnico más crítico para los antiguos metalúrgicos, requiriendo hornos cada vez más sofisticados.
```

### 4 — Secuencia de la Edad de los Metales

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["cronologia", "edades"]

respuesta_orden: ["cobre", "bronce", "hierro"]
tipo: ordenar
opciones_explicitas: ["cobre", "bronce", "hierro"]

enunciado: "Ordena cronológicamente las etapas de la Edad de los Metales según su uso predominante en la tecnología de transformación:"

explicacion: |
  La evolución tecnológica fue: primero metales nativos (cobre), luego aleaciones (bronce) y finalmente metales con mayor punto de fusión y dureza (hierro).
```

### 5 — El impacto del hierro

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["hierro", "impacto"]

variables:
  caso: uno_de([["más resistente", "mayor alcance de conquista"], ["más blando", "menor expansión territorial"], ["más caro", "menor uso en agricultura"]])

respuesta: caso[0]
tipo: mc
opciones_explicitas: ["más resistente", "más blando", "más caro"]

enunciado: "Debido a que el hierro es ___ que el cobre, su uso permitió un ___."

explicacion: |
  La disponibilidad y dureza del hierro permitieron una producción masiva de herramientas y armas, transformando la agricultura y la guerra.
```

### 6 — El auge del cobre

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["Edad_del_Cobre", "metalurgia"]

enunciado: "Durante la Edad del Cobre, los seres humanos comenzaron a utilizar este metal para fabricar objetos, siendo el cobre puro un material más ___ que el hierro."

respuestas_validas:
  - "blando"
tipo: completar

explicacion: |
  El cobre es un metal relativamente blando en comparación con el hierro, lo que limitaba su uso para herramientas de corte duraderas.
```

### 7 — La transición tecnológica

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["Edad_del_Bronce", "aleaciones"]

enunciado: "La Edad del Bronce se caracteriza por el uso de una aleación. ¿Cuál es la composición principal de este material?"

opciones_explicitas: ["Cobre y Hierro", "Cobre y Estaño", "Hierro y Carbono", "Estaño y Plomo"]
respuesta: "Cobre y Estaño"
tipo: mc

explicacion: |
  El bronce es una aleación de cobre y estaño que resultó ser mucho más resistente y dura que el cobre puro.
```

### 8 — Propiedades del bronce

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["Edad_del_Bronce", "tecnologia"]

enunciado: "El paso de la Edad del Cobre a la Edad del Bronce supuso una mejora tecnológica debido a la ___ de las herramientas y armas."

respuestas_validas:
  - "resistencia"
tipo: completar

explicacion: |
  Al añadir estaño al cobre, se obtenía bronce, un material con una dureza superior, ideal para la guerra y la agricultura.
```

### 9 — Evolución de la metalurgia

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["secuencia_temporal"]

opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]
respuesta_orden: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]
tipo: ordenar

enunciado: "Ordena cronológicamente las edades de la metalurgia según la evolución de la complejidad de los materiales utilizados:"

explicacion: |
  La secuencia lógica es primero el uso de metales nativos (Cobre), luego aleaciones (Bronce) y finalmente metales más duros (Hierro).
```

### 10 — Comparativa de dureza

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "avanzado"
  tags: ["propiedades_materiales"]

variables:
  idx: uno_de([0,1])
  datos: [["Cobre", "Blando"], ["Bronce", "Duro"]]

enunciado: "Si comparamos el material de la Edad del Cobre con el de la Edad del Bronce, el material de la Edad del {datos[idx][0]} es más {datos[idx][1]} que el de la Edad del Bronce."

respuestas_validas:
  - "Blando"
tipo: completar

explicacion: |
  Dependiendo del escenario sorteado, el enunciado evalúa la relación de dureza entre el cobre y el bronce.
```

### 11 — El desafío térmico del hierro

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["metalurgia", "temperatura", "edad_del_hierro"]

enunciado: "A diferencia del bronce, el hierro requiere temperaturas de fundición mucho más ___ que el cobre para ser procesado."

opciones_explicitas: ["bajas", "altas", "moderadas"]

respuesta: "altas"
tipo: mc

explicacion: |
  El hierro tiene un punto de fusión mucho más elevado que el cobre y el estaño, lo que exigió un desarrollo tecnológico mayor en los hornos de fundición para alcanzar las temperaturas necesarias.
```

### 12 — Abundancia y utilidad

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["recursos", "abundancia"]

variables:
  dato_enunciado: uno_de(["el hierro es más abundante que el bronce", "el hierro, aunque más difícil de fundir, resulta mucho más duro que el bronce una vez trabajado"])

enunciado: "En la Edad del Hierro, la ventaja principal sobre la Edad del Bronce es que {dato_enunciado} y, una vez dominada la técnica, produce herramientas más resistentes."

respuesta: "produce herramientas más resistentes"
tipo: mc
opciones_explicitas: ["produce herramientas más resistentes", "produce herramientas más frágiles", "es menos duradero"]

explicacion: |
  Aunque el hierro es más difícil de fundir, su abundancia en la corteza terrestre permitió una democratización de las herramientas, y su dureza revolucionó la agricultura y la guerra.
```

### 13 — Comparativa de dureza

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["resistencia", "herramientas"]

enunciado: "Si comparamos la durabilidad de las herramientas de la Edad del Bronce con las de la Edad del Hierro, las de hierro son notablemente más ___."

respuestas_validas:
  - "resistentes"
  - "frágiles"
  - "blandas"

respuesta: "resistentes"
tipo: completar

explicacion: |
  La capacidad de las herramientas de hierro para mantener el filo y resistir el impacto permitió una expansión de las actividades productivas.
```

### 14 — Secuencia de la transición tecnológica

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["orden", "tecnologia"]

enunciado: "Ordena los procesos tecnológicos según su complejidad térmica creciente (de menor a mayor temperatura de fundición):"

opciones_explicitas: ["Cobre", "Bronce", "Hierro"]

respuesta_orden: ["Cobre", "Bronce", "Hierro"]
tipo: ordenar

explicacion: |
  El cobre tiene el punto de fusión más bajo, seguido por la aleación de bronce, y finalmente el hierro, que requiere los hornos más avanzados.
```

### 15 — El factor de la abundancia

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "avanzado"
  tags: ["economía", "recursos"]

variables:
  caso: uno_de([[1, "más abundante"], [2, "menos abundante"]])
  desc: caso[0]
  resp: caso[1]

enunciado: "La transición a la Edad del Hierro se vio favorecida porque el hierro es {desc} que los componentes del bronce."

respuesta: "más abundante"
tipo: mc
opciones_explicitas: ["más abundante", "menos abundante", "igual de escaso"]

explicacion: |
  La disponibilidad casi universal de los minerales de hierro permitió que las sociedades no dependieran tanto de las rutas comerciales de estaño, que eran muy limitadas.
```

### 16 — La transición del cobre

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["prehistoria", "metales"]

respuesta: "Cobre"
tipo: completar
respuestas_validas:
  - "Cobre"

enunciado: "La primera etapa de la Edad de los Metales, caracterizada por el uso de metales nativos y la posterior fundición de aleaciones simples, es la Edad del ___."

explicacion: |
  La Edad del Cobre (Calcolítico) precede a la Edad del Bronce.
```

### 17 — El componente del bronce

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["metalurgia", "aleaciones"]

opciones_explicitas: ["Estaño", "Zinc", "Níquel", "Plomo"]
respuesta: "Estaño"
tipo: mc

enunciado: "El bronce es una aleación metálica compuesta principalmente por cobre y un segundo elemento clave, que es el {elemento}."

variables:
  elemento: "uno_de(['Estaño', 'Zinc', 'Níquel', 'Plomo'])"

explicacion: |
  El bronce se obtiene al fundir cobre con estaño, lo que permite obtener un metal más duro y resistente.
```

### 18 — Cronología de las edades

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["cronologia", "edades"]

opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]
respuesta_orden: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]
tipo: ordenar

enunciado: "Ordena cronológicamente las edades de los metales, desde la más antigua hasta la más reciente."

explicacion: |
  El orden correcto es Cobre (Calcolítico), Bronce (Aleación) e Hierro (Metal más duro y abundante).
```

### 19 — El predominio del hierro

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["tecnologia", "hierro"]

respuesta: "Edad del Hierro"
tipo: mc
opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

enunciado: "La etapa que se caracteriza por la aparición de herramientas y armas mucho más resistentes y duraderas debido a la alta temperatura necesaria para su fundición es la ___."

explicacion: |
  El hierro requiere temperaturas de fundición mucho más elevadas que el cobre o el bronce, marcando un salto tecnológico importante.
```

### 20 — Identificación de la aleación

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["metalurgia"]

respuesta: "Bronce"
tipo: mc
opciones_explicitas: ["Cobre puro", "Bronce", "Acero"]

enunciado: "Si mezclamos (aleamos) cobre y estaño, ¿qué material obtenemos, el que da nombre a la edad tecnológica posterior a la del cobre?"

explicacion: |
  La aleación de cobre y estaño define la Edad del Bronce.
```

### 21 — Identificación de la Edad del Cobre

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["prehistoria", "metalurgia"]

variables:
  datos: [["El descubrimiento de la fundición de cobre permitió la creación de las primeras herramientas duraderas.", "Edad del Cobre"], ["El uso de aleaciones de cobre con estaño dio origen a objetos más resistentes.", "Edad del Bronce"], ["La metalurgia de este metal permitió la creación de armas y herramientas de gran dureza.", "Edad del Hierro"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

enunciado: "Un arqueólogo encuentra una pieza cuya característica principal es: {datos[idx][0]}"

explicacion: |
  La respuesta correcta es {datos[idx][1]}. La transición entre edades se define por el metal predominante en la tecnología de la época.
```

### 22 — La transición tecnológica

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["transicion", "tecnologia"]

variables:
  datos: [["Cobre", "Edad del Cobre"], ["Bronce", "Edad del Bronce"], ["Hierro", "Edad del Hierro"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Edad del Cobre"
  - "Edad del Bronce"
  - "Edad del Hierro"

enunciado: "Si un yacimiento presenta una abundancia de herramientas hechas de {datos[idx][0]}, estamos ante la ___."

explicacion: |
  El uso de {datos[idx][0]} es el indicador clave de la {datos[idx][1]}.
```

### 23 — Orden cronológico de la metalurgia

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["cronologia", "edades"]

variables:
  orden_correcto: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

respuesta_orden: orden_correcto
tipo: ordenar
opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

enunciado: "Ordena cronológicamente las edades de los metales, desde la más antigua a la más reciente:"

explicacion: |
  El orden correcto es: {orden_correcto}.
```

### 24 — Propiedades de los metales

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "avanzado"
  tags: ["propiedades", "quimica_antigua"]

variables:
  datos: [["La baja temperatura de fusión del cobre facilitó su primer uso.", "Cobre"], ["La necesidad de alear estaño con cobre para obtener mayor dureza.", "Bronce"], ["La abundancia de este metal y su gran dureza tras la fundición.", "Hierro"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Cobre", "Bronce", "Hierro"]

enunciado: "Identifica el metal asociado al siguiente proceso: {datos[idx][0]}"

explicacion: |
  El proceso descrito corresponde al uso de {datos[idx][1]}.
```

### 25 — El impacto del Hierro

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["impacto_social", "hierro"]

variables:
  datos: [["La democratización de las herramientas debido a la abundancia del metal.", "Edad del Hierro"], ["El auge del comercio de estaño para la aleación.", "Edad del Bronce"], ["El inicio de la metalurgia con metales nativos.", "Edad del Cobre"]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "El fenómeno de {datos[idx][0]} es característico de la ___."

explicacion: |
  La descripción corresponde a la {datos[idx][1]}.
```
