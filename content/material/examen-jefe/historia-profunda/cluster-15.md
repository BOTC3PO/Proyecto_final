# Examen jefe — Maestro de Metales y Constelaciones

> Logro #113. Completaste el examen jefe sobre la metalurgia, la estructura mineral, el modelo agroexportador, la modernidad y el movimiento aparente de las estrellas. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **125 preguntas totales** en 5/5 secciones.

---

## Sección: metalurgia-cobre-hierro (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["tecnologia", "prehistoria"]

respuesta: "metalurgia"
tipo: completar
respuestas_validas: ["metalurgia"]

enunciado: "El proceso de extracción y transformación de minerales para obtener metales se denomina ___."

explicacion: |
  La metalurgia permitió la creación de herramientas más duraderas y precisas que las de piedra, marcando el inicio de nuevas eras tecnológicas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["cobre", "propiedades"]

variables:
  escenario: uno_de([
    ["cobre", "blando", "color rojizo"],
    ["hierro", "duro", "color grisáceo"],
    ["bronce", "aleación", "color amarillento"]
  ])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["cobre", "hierro", "bronce"]

enunciado: "En la Edad del Cobre, este metal se caracterizaba por ser un material ___ y de color ___."

explicacion: |
  El cobre fue uno de los primeros metales utilizados debido a su relativa abundancia y su capacidad para ser moldeado en frío o mediante fundición.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["cronologia", "edades"]

respuesta: ["cobre", "bronce", "hierro"]
tipo: ordenar
opciones_explicitas: ["cobre", "bronce", "hierro"]

enunciado: "Ordena cronológicamente las etapas de la Edad de los Metales según su uso predominante en la tecnología de transformación:"

explicacion: |
  La evolución tecnológica fue: primero metales nativos (cobre), luego aleaciones (bronce) y finalmente metales con mayor punto de fusión y dureza (hierro).
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["hierro", "impacto"]

variables:
  caso: uno_de([
    ["más resistente", "mayor alcance de conquista"],
    ["más blando", "menor expansión territorial"],
    ["más caro", "menor uso en agricultura"]
  ])

respuesta: caso[0
tipo: mc
opciones_explicitas: ["más resistente", "más blando", "más caro"]

enunciado: "Debido a que el hierro es ___ que el cobre, su uso permitió un ___."

explicacion: |
  La disponibilidad y dureza del hierro permitieron una producción masiva de herramientas y armas, transformando la agricultura y la guerra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["Edad_del_Cobre", "metalurgia"]

enunciado: "Durante la Edad del Cobre, los seres humanos comenzaron a utilizar este metal para fabricar objetos, siendo el cobre puro un material más ___ que el hierro."

respuestas_validas: ["blando"]
tipo: completar

explicacion: |
  El cobre es un metal relativamente blando en comparación con el hierro, lo que limitaba su uso para herramientas de corte duraderas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["Edad_del_Bronce", "aleaciones"]

variables:
  es_aleacion: true

enunciado: "La Edad del Bronce se caracteriza por el uso de una aleación. ¿Cuál es la composición principal de este material?"

opciones_explicitas: ["Cobre y Hierro", "Cobre y Estaño", "Hierro y Carbono", "Estaño y Plomo"]
respuesta: "Cobre y Estaño"
tipo: mc

explicacion: |
  El bronce es una aleación de cobre y estaño que resultó ser mucho más resistente y dura que el cobre puro.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["Edad_del_Bronce", "tecnologia"]

enunciado: "El paso de la Edad del Cobre a la Edad del Bronce supuso una mejora tecnológica debido a la ___ de las herramientas y armas."

respuestas_validas: ["resistencia"]
tipo: completar

explicacion: |
  Al añadir estaño al cobre, se obtenía bronce, un material con una dureza superior, ideal para la guerra y la agricultura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["secuencia_temporal"]

opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]
respuesta: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]
tipo: ordenar

enunciado: "Ordena cronológicamente las edades de la metalurgia según la evolución de la complejidad de los materiales utilizados:"

explicacion: |
  La secuencia lógica es primero el uso de metales nativos (Cobre), luego aleaciones (Bronce) y finalmente metales más duros (Hierro).
```

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

respuestas_validas: ["Blando"]
tipo: completar

explicacion: |
  Dependiendo del escenario sorteado, el enunciado evalúa la relación de dureza entre el cobre y el bronce.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["recursos", "abundancia"]

variables:
  escenario: uno_de([["el hierro es más abundante que el bronce", "el hierro es más escaso que el bronce"], ["produce herramientas más resistentes", "produce herramientas más frágiles"]])
  dato_enunciado: escenario[0]
  dato_respuesta: escenario[1

enunciado: "En la Edad del Hierro, la ventaja principal sobre la Edad del Bronce es que {dato_enunciado} y, una vez dominada la técnica, {dato_respuesta}."

respuesta: "produce herramientas más resistentes"
tipo: mc
opciones_explicitas: ["produce herramientas más resistentes", "produce herramientas más frágiles", "es menos duradero"]

explicacion: |
  Aunque el hierro es más difícil de fundir, su abundancia en la corteza terrestre permitió una democratización de las herramientas, y su dureza revolucionó la agricultura y la guerra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["resistencia", "herramientas"]

enunciado: "Si comparamos la durabilidad de las herramientas de la Edad del Bronce con las de la Edad del Hierro, las de hierro son notablemente más ___."

respuestas_validas: ["resistentes", "frágiles", "blandas"]

respuesta: "resistentes"
tipo: completar

explicacion: |
  La capacidad de las herramientas de hierro para mantener el filo y resistir el impacto permitió una expansión de las actividades productivas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["orden", "tecnologia"]

enunciado: "Ordena los procesos tecnológicos según su complejidad térmica creciente (de menor a mayor temperatura de fundición):"

opciones_explicitas: ["Cobre", "Bronce", "Hierro"]

respuesta: ["Cobre", "Bronce", "Hierro"]
tipo: ordenar

explicacion: |
  El cobre tiene el punto de fusión más bajo, seguido por la aleación de bronce, y finalmente el hierro, que requiere los hornos más avanzados.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["prehistoria", "metales"]

respuesta: "Cobre"
tipo: completar
respuestas_validas: ["Cobre"]

enunciado: "La primera etapa de la Edad de los Metales, caracterizada por el uso de metales nativos y la posterior fundición de aleaciones simples, es la Edad del ___."

explicacion: |
  La Edad del Cobre (Calcolítico) precede a la Edad del Bronce.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["cronologia", "edades"]

opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]
respuesta: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]
tipo: ordenar

enunciado: "Ordena cronológicamente las edades de los metales, desde la más antigua hasta la más reciente."

explicacion: |
  El orden correcto es Cobre (Calcolítico), Bronce (Aleación) e Hierro (Metal más duro y abundante).
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["tecnologia", "hierro"]

variables:
  es_hierro: uno_de([verdadero, falso])

respuesta: "Edad del Hierro"
tipo: mc
opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

enunciado: "La etapa que se caracteriza por la aparición de herramientas y armas mucho más resistentes y duraderas debido a la alta temperatura necesaria para su fundición es la {era}."

variables:
  era: "if(es_hierro, 'Edad del Hierro', 'Edad del Cobre')"

explicacion: |
  El hierro requiere temperaturas de fundición mucho más elevadas que el cobre o el bronce, marcando un salto tecnológico importante.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["metalurgia"]

respuesta: 2
tipo: mc
opciones_explicitas: ["Cobre puro", "Bronce", "Acero"]

enunciado: "Si un metaloide es una mezcla de cobre y estaño, estamos hablando de la Edad del ___."

explicacion: |
  La aleación de cobre y estaño define la Edad del Bronce.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["transicion", "tecnologia"]

variables:
  datos: [["Cobre", "Edad del Cobre"], ["Bronce", "Edad del Bronce"], ["Hierro", "Edad del Hierro"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

enunciado: "Si un yacimiento presenta una abundancia de herramientas hechas de {datos[idx][0]}, estamos ante la ___."

explicacion: |
  El uso de {datos[idx][0]} es el indicador clave de la {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["cronologia", "edades"]

variables:
  orden_correcto: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

respuesta: orden_correcto
tipo: ordenar
opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

enunciado: "Ordena cronológicamente las edades de los metales, desde la más antigua a la más reciente:"

explicacion: |
  El orden correcto es: {orden_correcto}.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["impacto_social", "hierro"]

variables:
  datos: [["La democratización de las herramientas debido a la abundancia del metal.", "Edad del Hierro"], ["El auge del comercio de estaño para la aleación.", "Edad del Bronce"], ["El inicio de la metalurgia con metales nativos.", "Edad del Cobre"]]
  idx: uno_de([0, 1, 2])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "El fenómeno de {datos[idx][0]} es característico de la ___."

explicacion: |
  La descripción corresponde a la {datos[idx][1]}.
```

## Sección: minerales-estructura-cristalina (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["definicion", "geologia"]

tipo: mc
opciones_explicitas: ["Una sustancia sólida, inorgánica, de origen natural, con composición química definida y estructura cristalina ordenada.", "Una sustancia sólida, orgánica, de origen volcánico, con composición variable y estructura amorfa.", "Un compuesto químico formado exclusivamente por elementos metálicos en estado sólido.", "Cualquier material sólido encontrado en la corteza terrestre."]

enunciado: "Según la mineralogía clásica, ¿cuál es la definición científica de un mineral?"

explicacion: |
  Un mineral debe cumplir cinco condiciones: ser sólido, inorgánico, de origen natural, tener una fórmula química definida y una estructura atómica interna ordenada (cristalina).
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["propiedades", "inorganico"]

variables:
  escenario: uno_de([
    ["El carbón (formado por restos vegetales)", "falso"],
    ["El cuarzo (formado por silicatos de silicio y oxígeno)", "verdadero"]
  ])

tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Considerando que un mineral debe ser inorgánico, ¿es la afirmación '{escenario[0]}' verdadera o falsa para la definición de mineral?"

respuesta: escenario[1

explicacion: |
  Los materiales de origen orgánico (como el carbón derivado de plantas) no se consideran minerales, aunque sean sólidos y naturales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["estructura", "cristalografia"]

tipo: completar
respuestas_validas: ["cristalina"]

enunciado: "Para que una sustancia sea considerada mineral, sus átomos deben estar dispuestos en una estructura ___."

respuesta: "cristalina"

explicacion: |
  La estructura cristalina es el ordenamiento tridimensional repetitivo de los átomos, lo que diferencia a un mineral de un vidrio (sólido amorfo).
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["quimica", "composicion"]

variables:
  caso: uno_de([
    ["El diamante (C)", "C"],
    ["La sal común (NaCl)", "NaCl"],
    ["La calcita (CaCO3)", "CaCO3"]
  ])

tipo: completar
respuestas_validas: ["C", "NaCl", "CaCO3"]

enunciado: "Un mineral debe tener una composición química definida. Si tomamos el caso de {caso[0]}, su fórmula química es ___."

respuesta: caso[1

explicacion: |
  Cada mineral tiene una proporción fija de elementos que determina su identidad química.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["conceptos", "ordenamiento"]

tipo: ordenar
opciones_explicitas: ["Origen natural", "Sólido", "Estructura cristalina", "Composición química definida", "Inorgánico"]

enunciado: "Ordena los criterios fundamentales que definen a un mineral, desde el origen hasta su organización interna:"

respuesta: ["Origen natural", "Sólido", "Inorgánico", "Composición química definida", "Estructura cristalina"]

explicacion: |
  La definición integral requiere la suma de estas cinco características esenciales para distinguir un mineral de otros materiales terrestres.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["cristalografía", "átomos"]

respuesta: "arreglo geométrico repetitivo y ordenado de átomos/iones"
tipo: completar
respuestas_validas: ["arreglo geométrico repetitivo y ordenado de átomos/iones", "un desorden total de partículas", "una estructura sin simetría"]

enunciado: "Una estructura cristalina se define como un ___."

explicacion: |
  Los cristales se caracterizan por tener un ordenamiento espacial de sus componentes (átomos, iones o moléculas) que se repite de forma periódica en las tres dimensiones del espacio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["amorfo", "cristalino"]

variables:
  escenario: uno_de([["vidrio", "amorfo"], ["cuarzo", "cristalino"]])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["cristalino", "amorfo"]

enunciado: "Si un material como el {escenario[0]} carece de un ordenamiento de largo alcance en su estructura, se clasifica como un sólido ___."

explicacion: |
  Los sólidos amorfos, como el vidrio, carecen de la periodicidad característica de los cristales, presentando un desorden estructural a escala atómica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["átomos", "red_cristalina"]

respuesta: "átomos, iones o moléculas"
tipo: completar
respuestas_validas: ["átomos, iones o moléculas"]

enunciado: "La unidad básica que se repite para formar la red de un cristal está compuesta por ___."

explicacion: |
  Dependiendo de la naturaleza del mineral, los puntos de la red pueden ser átomos elementales, iones en compuestos iónicos o moléculas en sólidos moleculares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["orden", "desorden"]

respuesta: "orden"
tipo: mc
opciones_explicitas: ["orden", "desorden", "densidad", "color"]

enunciado: "La diferencia fundamental entre un cristal y un sólido amorfo radica en la presencia de:"

explicacion: |
  El orden es la clave: los cristales tienen un patrón repetitivo (orden), mientras que los amorfos tienen un desorden estructural.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["clasificación", "estructura"]

variables:
  ejemplo: uno_de([["diamante", "cristalino"], ["plástico", "amorfo"]])

respuesta: ejemplo[1
tipo: mc
opciones_explicitas: ["cristalino", "amorfo"]

enunciado: "Considerando el caso del {ejemplo[0]}, su estructura interna es de tipo ___."

explicacion: |
  El diamante es el ejemplo clásico de un sólido con una estructura cristalina altamente ordenada de átomos de carbono.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["definiciones", "geologia"]

tipo: mc
opciones_explicitas: ["Un agregado de varios minerales", "Una sustancia pura con estructura cristalina definida", "Una mezcla de materia orgánica e inorgánica", "Un fragmento de corteza terrestre sin estructura"]

enunciado: "Desde una perspectiva geológica, ¿cuál es la definición fundamental de un mineral?"

explicacion: |
  Un mineral es una sustancia sólida, inorgánica, con una composición química definida y una estructura atómica ordenada (cristalina).
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["clasificacion", "rocas"]

variables:
  escenario: uno_de([
    ["Granito", ["cuarzo", "feldespato", "mica"]],
    ["Basalto", ["olivino", "piroxeno", "plagioclasa"]],
    ["Caliza", ["calcita"]]
  ])

tipo: completar
respuestas_validas: ["cuarzo", "feldespato", "mica", "olivino", "piroxeno", "plagioclasa", "calcita"]

enunciado: "Si observamos una muestra de {escenario[0]}, estamos ante una roca compuesta por diversos minerales, como por ejemplo {escenario[1][0]}, {escenario[1][1]} y {escenario[1][2]}."

pasos:
  - "Identifica si el material es una sustancia única o un agregado."
  - "Observa los componentes individuales que forman el conjunto."

explicacion: |
  El {escenario[0]} es una roca porque es un agregado de los minerales listados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["relaciones", "estructuras"]

tipo: completar
respuestas_validas: ["mineral", "roca"]

enunciado: "Un ejemplar de cuarzo puro se clasifica como un ________, mientras que una masa de granito se clasifica como una ________."

explicacion: |
  El cuarzo es una sustancia individual (mineral), mientras que el granito es un agregado de varios minerales (roca).
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["ordenar", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Átomos", "Cristales (Minerales)", "Rocas"]

enunciado: "Ordena los siguientes elementos de menor a mayor complejidad estructural en la formación de la corteza terrestre:"

explicacion: |
  Los átomos se organizan en redes cristalinas para formar minerales, y los minerales se agrupan para formar rocas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["analisis", "composicion"]

variables:
  caso: uno_de([
    ["feldespato", "mineral"],
    ["granito", "roca"]
  ])

tipo: mc
opciones_explicitas: ["mineral", "roca"]

enunciado: "Considerando el elemento {caso[0]}, su clasificación técnica es: ________."

explicacion: |
  Según el caso seleccionado, {caso[0]} es un/a {caso[1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["dureza", "mohs"]

variables:
  mineral_datos: [["talco", "1"], ["yeso", "2"], ["calcita", "3"], ["fluorita", "4"], ["apatita", "5"]]
  idx: uno_de([0,1,2,3,4])

enunciado: "Si tenemos un mineral cuya dureza es la que corresponde al elemento {mineral_datos[idx][0]}, su valor en la escala de Mohs es ___."

respuestas_validas: ["1", "2", "3", "4", "5"]
respuesta: mineral_datos[idx][1
tipo: completar

explicacion: |
  La escala de Mohs es una escala de dureza relativa. El {mineral_datos[idx][0]} tiene un valor de {mineral_datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["brillo"]

enunciado: "¿Cómo se denomina a la propiedad que describe la forma en que la luz se refleja en la superficie de un mineral?"

opciones_explicitas: ["Transparencia", "Brillo", "Clivaje", "Dureza"]
respuesta: "Brillo"
tipo: mc

explicacion: |
  El brillo es la propiedad que indica la calidad de la reflexión de la luz en la superficie del mineral.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["raya", "color"]

variables:
  escenario: [["Hematita", "Rojo"], ["Pirita", "Negro"], "Calcopirita", "Malaquita"]
  idx: uno_de([0,1,2])

enunciado: "Al realizar la prueba de la raya sobre una placa de porcelana sin esmaltar con el mineral {escenario[idx][0]}, el color resultante es ___."

respuestas_validas: ["Rojo", "Negro", "Verde", "Amarillo"]
respuesta: escenario[idx][1
tipo: completar

explicacion: |
  La raya es el color del polvo del mineral y es una propiedad más constante que el color externo del espécimen.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["fractura", "clivaje"]

enunciado: "Un mineral que se rompe siguiendo planos de debilidad cristalográfica bien definidos presenta ___."

opciones_explicitas: ["Fractura concoidea", "Clivaje", "Dureza", "Brillo metálico"]
respuesta: "Clivaje"
tipo: mc

explicacion: |
  El clivaje ocurre cuando el mineral se rompe a lo largo de planos de debilidad en su estructura atómica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["mohs", "ordenar"]

enunciado: "Ordene los siguientes minerales de menor a mayor dureza según la escala de Mohs:"

opciones_explicitas: ["Talco", "Calcita", "Cuarzo", "Diamante"]
respuesta: ["Talco", "Calcita", "Cuarzo", "Diamante"]
tipo: ordenar

explicacion: |
  La secuencia correcta es: Talco (1), Calcita (3), Cuarzo (7) y Diamante (10).
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["dureza", "mohs"]

variables:
  escenario: [[4, "Fluorita"], [7, "Cuarzo"], [9, "Diamante"]]
  idx: uno_de([0, 1, 2])
  dureza_dada: escenario[idx][0]
  nombre_mineral: escenario[idx][1]

tipo: mc
opciones_explicitas: ["Fluorita", "Cuarzo", "Diamante", "Talco"]

enunciado: "Un geólogo encuentra un mineral cuya dureza en la escala de Mohs es de {dureza_dada}. ¿Qué mineral es?"

respuesta: nombre_mineral

explicacion: |
  El mineral identificado es el {nombre_mineral}, que tiene una dureza de {dureza_dada} en la escala de Mohs.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["color", "espectro"]

variables:
  escenario: [["rojo", "Rubí"], ["azul", "Lapislázuli"], ["amarillo", "Azufre"]]
  idx: uno_de([0, 1, 2])
  color_descrito: escenario[idx][0]
  mineral_nombre: escenario[idx][1]

tipo: completar
respuestas_validas: ["Rubí", "Lapislázuli", "Azufre"]

enunciado: "Se observa un cristal de color ___ que presenta una estructura hexagonal característica."

pasos:
  - "Identificar el color mencionado en el registro."
  - "Asociar el color con el mineral correspondiente."

respuesta: mineral_nombre

explicacion: |
  El color {color_descrito} corresponde al mineral {mineral_nombre}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["brillo", "propiedades"]

variables:
  escenario: [["metálico", "Pirita"], ["vítreo", "Cuarzo"], ["nacarado", "Mica"]]
  idx: uno_de([0, 1, 2])
  tipo_brillo: escenario[idx][0]
  mineral_id: escenario[idx][1]

tipo: mc
opciones_explicitas: ["Metálico", "Vítreo", "Nacarado", "Mate"]

enunciado: "Un espécimen presenta un brillo de tipo {tipo_brillo}. ¿Cuál de estos minerales es el más probable?"

respuesta: mineral_id

explicacion: |
  El brillo {tipo_brillo} es característico de la {mineral_id}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["cristalización", "geología"]

variables:
  proceso: [["Nucleación", "Crecimiento", "Terminación"], ["Nucleación", "Crecimiento", "Erosión"]]
  idx: uno_de([0, 1])
  etapas: proceso[idx]

tipo: ordenar
opciones_explicitas: ["Nucleación", "Crecimiento", "Terminación", "Erosión"]

enunciado: "Ordene las etapas típicas de la formación de un cristal perfecto en una solución saturada:"

respuesta: etapas

explicacion: |
  El proceso de cristalización requiere primero la nucleación, luego el crecimiento de la red y finalmente la terminación de los bordes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["densidad", "propiedades_fisicas"]

variables:
  escenario: [[5.0, "Hematita"], [2.6, "Cuarzo"], [11.3, "Galena"]]
  idx: uno_de([0, 1, 2])
  valor_densidad: escenario[idx][0]
  mineral_ref: escenario[idx][1]

tipo: completar
tolerancia_abs: 0.01

enunciado: "Un mineral tiene una densidad relativa de {valor_densidad}. ¿Cuál es su valor numérico exacto?"

respuesta: valor_densidad

explicacion: |
  La densidad es una propiedad intrínseca; en este caso, el valor es {valor_densidad} g/cm³.
```

## Sección: modelo-agroexportador-inmigracion (25 preguntas)

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador"
  nivel: "basico"
  tags: ["economia", "exportacion"]

tipo: mc
opciones_explicitas: ["Manufacturas industriales", "Materias primas agropecuarias", "Productos tecnológicos", "Servicios financieros"]

enunciado: "El modelo agroexportador argentino, consolidado a fines del siglo XIX, se basaba fundamentalmente en la exportación de ___."

explicacion: |
  El modelo agroexportador consistía en la exportación de productos de la naturaleza (carne, cereales, lana) e importación de productos manufacturados de Europa.
```

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador"
  nivel: "intermedio"
  tags: ["capital", "infraestructura"]

variables:
  tipo_inversion_idx: uno_de([0, 1])
  inversion_tipo: uno_de(["Inversión extranjera en infraestructura", "Inversión nacional en industria"])

tipo: mc
opciones_explicitas: ["Inversión extranjera en infraestructura", "Inversión nacional en industria", "Préstamos de organismos internacionales", "Donaciones estatales"]

enunciado: "Para sostener el modelo agroexportador, fue fundamental la llegada de {inversion_tipo}."

explicacion: |
  La gran inversión extranjera (principalmente británica) se destinó a la construcción de ferrocarriles y puertos para facilitar la salida de productos.
```

```
metadata:
  materia: "historia"
  tema: "inmigracion_masiva"
  nivel: "basico"
  tags: ["demografia", "inmigracion"]

tipo: completar
respuestas_validas: ["Europa", "Asia", "África", "Oceanía"]

enunciado: "Durante el periodo agroexportador, la mayoría de la corriente migratoria hacia la Argentina provenía de ___."

explicacion: |
  El flujo migratorio masivo de finales del siglo XIX y principios del XX estuvo compuesto mayoritariamente por inmigrantes europeos (italianos y españoles principalmente).
```

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador"
  nivel: "intermedio"
  tags: ["causalidad", "procesos"]

tipo: ordenar
opciones_explicitas: ["Expansión de la frontera agrícola", "Llegada de ferrocarriles", "Aumento de la demanda europea", "Consolidación del modelo agroexportador"]

enunciado: "Ordene cronológicamente los procesos que permitieron la consolidación del modelo agroexportador:"

explicacion: |
  Primero se expandió la frontera (con la conquista del desierto), luego se conectó con trenes, lo que permitió responder a la demanda europea y consolidar el modelo.
```

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador"
  nivel: "avanzado"
  tags: ["estado", "politica"]

variables:
  caso_idx: uno_de([0, 1])
  escenario: uno_de(["La exportación de granos fue ___", "La exportación de carne fue ___"])
  resultado: uno_de(["el motor principal de la balanza comercial", "un proceso que requirió la expansión de frigoríficos"])

tipo: mc
opciones_explicitas: ["Un proceso de autosuficiencia", "Un motor de dependencia externa", "Un sistema de comercio cerrado", "Una economía de subsistencia"])

enunciado: "En el contexto del modelo agroexportador, la dinámica comercial se caracterizó por ser {resultado}."

explicacion: |
  El modelo generó una fuerte dependencia de los mercados externos (Europa) y de la tecnología/capital extranjero, integrando a Argentina al mercado mundial como proveedor de materias primas.
```

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["inmigracion", "economia", "modelo_agroexportador"]

respuesta: "modelo agroexportador"
tipo: completar
tolerancia_abs: 0

enunciado: "La expansión del _______ fue el principal factor que impulsó la llegada masiva de inmigrantes europeos a la Argentina durante las últimas décadas del siglo XIX."

explicacion: |
  El modelo agroexportador, basado en la exportación de materias primas (carnes y cereales) hacia Europa, demandó una gran cantidad de mano de obra que fue provista por la inmigración masiva.
```

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["nacionalidades", "europa"]

variables:
  escenario: uno_de([["italianos", "españoles"], ["españoles", "italianos"]])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["italianos", "españoles", "alemanes", "franceses"]

enunciado: "Si bien hubo diversas corrientes, los dos grupos de nacionalidades más representativos en la inmigración masiva a la Argentina fueron los _______ y los _______."

explicacion: |
  La gran mayoría de los inmigrantes que llegaron entre 1880 y 1914 provenían de Italia y España, aunque también hubo presencia de otras nacionalidades europeas.
```

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["causas", "europa"]

respuesta: "crisis económica y demográfica"
tipo: completar
respuestas_validas: ["crisis económica y demográfica", "guerras mundiales", "revolución industrial"]

enunciado: "Los inmigrantes europeos huían de Europa debido a la _______ que afectaba sus países de origen."

explicacion: |
  Las crisis económicas, las guerras de unificación y el crecimiento demográfico en Europa generaron un excedente de población que buscaba nuevas oportunidades en el continente americano.
```

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["politica_migratoria", "leyes"]

respuesta: "Ley Avellaneda"
tipo: mc
opciones_explicitas: ["Ley Avellaneda", "Ley de Residencia", "Constitución de 1853", "Ley de Educación"]

enunciado: "Para fomentar la llegada de trabajadores, el Estado argentino sancionó un marco legal conocido como la _______."

explicacion: |
  La Ley Avellaneda (1876) facilitó el ingreso de inmigrantes, garantizando sus derechos y promoviendo su asentamiento en el territorio nacional.
```

```
metadata:
  materia: "historia"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "avanzado"
  tags: ["causalidad", "procesos"]

respuesta: ["Demanda de mano de obra", "Expansión de la frontera agrícola", "Llegada masiva de inmigrantes"]
tipo: ordenar
opciones_explicitas: ["Demanda de mano de obra", "Expansión de la frontera agrícola", "Llegada masiva de inmigrantes"]

enunciado: "Ordene cronológicamente la lógica de causalidad que permitió el proceso migratorio:"

pasos:
  - "El modelo agroexportador requiere más trabajadores."
  - "Se expanden las tierras para la agricultura y ganadería."
  - "Se produce el flujo migratorio masivo hacia el país."

explicacion: |
  La lógica fue circular: la demanda de trabajo impulsó la expansión de la frontera, lo que a su vez atrajo a la población europea que buscaba empleo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["economia", "demanda"]

opciones_explicitas: ["Europa", "Asia", "Estados Unidos", "África"]

respuesta: "Europa"
tipo: "mc"

enunciado: "El modelo agroexportador argentino se consolidó gracias a la creciente demanda de materias primas y alimentos provenientes de ________."

explicacion: |
  La Revolución Industrial en Europa generó una necesidad masiva de alimentos (carne, cereales) que Argentina satisfizo mediante su modelo exportador.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["transporte", "ferrocarriles"]

opciones_explicitas: ["Navegación a vapor", "Ferrocarriles", "Carretas", "Ferrocarriles de montaña"]

respuesta: "Ferrocarriles"
tipo: "mc"

enunciado: "Para conectar las zonas de producción con los puertos de exportación, se realizó una gran inversión en la construcción de ________."

explicacion: |
  El ferrocarril fue la columna vertebral del modelo, permitiendo el traslado rápido y masivo de granos y carne hacia el puerto de Buenos Aires.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "avanzado"
  tags: ["frontera", "territorio"]

variables:
  escenario_idx: uno_de([0, 1])

variables:
  datos: [
    ["Conquista del Desierto", "expansión de la frontera agrícola"],
    ["Guerra de la Triple Alianza", "consolidación de fronteras norteñas"]
  ]

respuesta: datos[escenario_idx][1
tipo: "completar"
respuestas_validas: ["expansión de la frontera agrícola"]

enunciado: "La denominada {datos[escenario_idx][0]} permitió la {datos[escenario_idx][1]} para el modelo agroexportador."

explicacion: |
  La ocupación de territorios indígenas fue fundamental para incorporar nuevas tierras al circuito productivo de exportación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["inversion", "britania"]

opciones_explicitas: ["Francia", "Alemania", "Reino Unido", "España"]

respuesta: "Reino Unido"
tipo: "mc"

enunciado: "La mayor parte de la inversión extranjera destinada a infraestructura y servicios en este periodo fue de origen ________."

explicacion: |
  El capital británico fue el principal motor de la inversión en ferrocarriles, bancos y servicios públicos durante la segunda mitad del siglo XIX y principios del XX.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "avanzado"
  tags: ["logica", "procesos"]

opciones_explicitas: ["Demanda europea", "Expansión de frontera", "Ferrocarriles", "Inversión británica"]

respuesta: ["Demanda europea", "Expansión de frontera", "Ferrocarriles", "Inversión británica"]
tipo: "ordenar"

enunciado: "Ordene cronológicamente los factores que permitieron la consolidación del modelo (desde el estímulo externo hasta la infraestructura de transporte):"

explicacion: |
  El proceso comenzó con la necesidad de alimentos en Europa, seguida por la ocupación de tierras, la llegada de capitales para infraestructura y finalmente la red ferroviaria que integró el sistema.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["demografia", "inmigracion"]

variables:
  escenario: uno_de(["el flujo masivo de inmigrantes europeos", "la llegada de colonias agrícolas"])

respuesta: "el flujo masivo de inmigrantes europeos"
tipo: mc
opciones_explicitas: ["el flujo masivo de inmigrantes europeos", "la llegada de colonias agrícolas", "el crecimiento de la población nativa", "la migración interna desde el interior"]

enunciado: "Durante el modelo agroexportador, la principal causa de la transformación demográfica en el litoral argentino fue {escenario}."

explicacion: |
  La gran escala de la inmigración europea (principalmente italianos y españoles) alteró radicalmente la proporción de población extranjera en las zonas portuarias y de exportación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["cultura", "lenguaje"]

respuesta: "lunfardo"
tipo: completar
respuestas_validas: ["lunfardo"]

enunciado: "La convivencia de diversas lenguas y modismos de los inmigrantes en los conventillos de Buenos Aires dio origen a un léxico popular conocido como ___."

explicacion: |
  El lunfardo surgió como una mezcla de términos de varios idiomas (italiano, español, francés, etc.) que los inmigrantes utilizaban en el ámbito urbano.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["urbanismo", "geografia"]

respuesta: ["Buenos Aires", "Rosario", "Santa Fe"]
tipo: ordenar
opciones_explicitas: ["Buenos Aires", "Rosario", "Santa Fe"]

enunciado: "Ordene de mayor a menor importancia en términos de volumen de asentamiento inmigrante y actividad portuaria durante el auge agroexportador:"

explicacion: |
  El eje Buenos Aires-Rosario-Santa Fe concentró la mayor densidad demográfica debido a su conexión directa con el comercio mundial de granos y carnes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "avanzado"
  tags: ["clases_sociales", "urbanismo"]

variables:
  perfil: uno_de(["la clase media urbana", "la oligarquía terrateniente"])

respuesta: "la clase media urbana"
tipo: mc
opciones_explicitas: ["la clase media urbana", "la oligarquía terrateniente", "el campesinado indígena", "la aristocracia colonial"]

enunciado: "A diferencia de la estructura de la oligarquía, la inmigración masiva favoreció el surgimiento de {perfil} en los centros urbanos."

explicacion: |
  La llegada de inmigrantes con oficios diversos permitió la consolidación de una clase media compuesta por pequeños comerciantes, empleados y profesionales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["vivienda", "cultura"]

respuesta: 100
tipo: completar
tolerancia_abs: 0

enunciado: "En el contexto de la inmigración, si un conventillo tiene 4 habitaciones y cada una alberga a 25 personas, ¿cuántas personas viven en total en el conventillo?"

pasos:
  - "Multiplicar el número de habitaciones por la cantidad de personas por habitación."

explicacion: |
  Los conventillos eran viviendas colectivas con alta densidad poblacional, típicas de los barrios de inmigrantes en Buenos Aires.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["economia", "exportacion"]

variables:
  datos: [["trigo", "cereales"], ["carne", "ganadería"], ["lana", "ovinos"]]
  idx: uno_de([0, 1, 2])
  producto: datos[idx][0]

respuesta: producto
tipo: mc
opciones_explicitas: ["trigo", "carne", "lana", "maíz"]

enunciado: "Durante el modelo agroexportador, la economía argentina se centró en la exportación de productos primarios. Si el principal producto de exportación en el escenario dado es {producto}, ¿cuál es el rubro correspondiente?"

explicacion: |
  El modelo agroexportador se basó en la exportación de materias primas hacia Europa, siendo el {producto} uno de los pilares fundamentales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "basico"
  tags: ["inmigracion", "demografia"]

variables:
  datos_migratorios: [["italianos", "Europa"], ["españoles", "Europa"], ["alemanes", "Europa"]]
  idx: uno_de([0, 1, 2])
  nacionalidad: datos_migratorios[idx][0]

respuesta: nacionalidad
tipo: mc
opciones_explicitas: ["italianos", "españoles", "alemanes", "británicos"]

enunciado: "La gran inmigración europea fue clave para la mano de obra en el campo. Si el grupo mencionado es de {nacionalidad}, ¿de qué nacionalidad se trata?"

explicacion: |
  La llegada masiva de inmigrantes de Europa (principalmente italianos y españoles) fue esencial para la expansión de la frontera agrícola.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["transporte", "infraestructura"]

variables:
  infraestructura: [["ferrocarril", "transporte"], ["puerto", "comercio"], ["telégrafo", "comunicación"]]
  idx: uno_de([0, 1, 2])
  elemento: infraestructura[idx][0]

respuesta: elemento
tipo: completar
respuestas_validas: ["ferrocarril", "puerto", "telégrafo"]

enunciado: "Para integrar los centros de producción con los puertos, se construyó una red de ___ fundamental para el modelo."

explicacion: |
  El ___ permitió el traslado masivo de cargas desde el interior hacia los puertos de exportación de manera eficiente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "intermedio"
  tags: ["puertos", "comercio"]

variables:
  puerto_clave: ["Buenos Aires", "Rosario", "Bahía Blanca"]
  idx: uno_de([0, 1, 2])
  ciudad: puerto_clave[idx]

respuesta: ciudad
tipo: mc
opciones_explicitas: ["Buenos Aires", "Rosario", "Bahía Blanca", "Córdoba"]

enunciado: "El sistema agroexportador dependía de la salida hacia el mundo a través de puertos específicos. Si el puerto central es {ciudad}, ¿cuál es?"

explicacion: |
  Los puertos eran el punto de conexión vital entre la producción interna y el mercado mundial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modelo_agroexportador_inmigracion"
  nivel: "avanzado"
  tags: ["proceso", "logistica"]

respuesta: ["Producción", "Transporte", "Exportación"]
tipo: ordenar
opciones_explicitas: ["Producción", "Transporte", "Exportación"]

enunciado: "Ordene el proceso lógico de una mercancía en el modelo agroexportador: desde la cosecha hasta la salida del país."

explicacion: |
  El ciclo comenzaba con la ___ en el campo, seguía con el ___ ferroviario y terminaba con la ___ en el puerto.
```

## Sección: modernidad-imprenta-navegacion-ciencia (25 preguntas)

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["gutenberg", "imprenta", "difusion"]

tipo: mc
opciones_explicitas: ["Producción manual de monjes", "Difusión masiva de ideas y textos", "Limitación del conocimiento a la élite", "Desaparición del uso de la escritura"]

enunciado: "Antes de la invención de la imprenta de tipos móviles por Johannes Gutenberg hacia 1450, la difusión de conocimientos estaba limitada principalmente por la ___."

respuesta: "Producción manual de monjes"

explicacion: |
  La imprenta permitió la producción en serie de libros, rompiendo el monopolio de los escribas y monjes que copiaban manuscritos a mano, lo que aceleró la difusión de ideas durante el Renacimiento.
```

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["revolucion_cientifica", "imprenta"]

variables:
  datos: [["La imprenta permitió la estandarización de textos y mapas.", "La imprenta fomentó el análisis crítico y la alfabetización."], ["La imprenta dificultó la comunicación científica.", "La imprenta centralizó el conocimiento en la Iglesia."]]
  idx: uno_de([0, 1])

tipo: mc
opciones_explicitas: ["Estandarización y alfabetización", "Centralización del saber", "Aislamiento de las ideas"]

enunciado: "{datos[idx][0]}"

respuesta: "Estandarización y alfabetización"

explicacion: |
  Al poder imprimir múltiples copias idénticas, se eliminaron los errores de transcripción manual, permitiendo que científicos de distintos lugares trabajaran sobre los mismos datos y diagramas.
```

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["procesos", "historia"]

tipo: ordenar
opciones_explicitas: ["Manuscritos copiados a mano", "Imprenta de tipos móviles", "Producción industrial de libros"]

enunciado: "Ordena cronológicamente los métodos de producción de libros desde la Edad Media hasta la era moderna:"

respuesta: ["Manuscritos copiados a mano", "Imprenta de tipos móviles", "Producción industrial de libros"]

explicacion: |
  La secuencia muestra la transición desde el trabajo manual intensivo (monjes), pasando por la revolución de Gutenberg, hasta la producción mecánica masiva.
```

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "avanzado"
  tags: ["reforma_protestante", "imprenta"]

tipo: completar
respuestas_validas: ["Protestante", "Católica"]

enunciado: "La capacidad de imprimir la Biblia en lenguas vernáculas (como el alemán) fue un factor clave para el éxito de la Reforma ___."

respuesta: "Protestante"

explicacion: |
  La imprenta permitió que las ideas de Lutero y la traducción de las escrituras llegaran a un público mucho más amplio, desafiando la autoridad de la Iglesia Católica.
```

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["economia_del_libro"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si un monje tardaba meses en copiar un libro y la imprenta permitía producir 100 ejemplares en el mismo tiempo, la producción aumentó en un factor de ___ (indica el número)."

respuesta: 100

explicacion: |
  La eficiencia de la imprenta de tipos móviles fue exponencial comparada con la copia manual, reduciendo drásticamente el costo y el tiempo de obtención de información.
```

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["navegacion", "tecnologia"]

variables:
  punto_cardinal: uno_de(["Norte", "Sur", "Este", "Oeste"])

respuesta: punto_cardinal
tipo: mc
opciones_explicitas: ["Norte", "Sur", "Este", "Oeste"]

enunciado: "La brújula, perfeccionada por los navegantes, permitía a los exploradores mantener un rumbo constante hacia el {punto_cardinal}, evitando perderse en mar abierto."

explicacion: |
  La brújula permitía identificar el polo magnético de la Tierra, facilitando la navegación en condiciones de baja visibilidad o en alta mar.
```

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["astrolabio", "astronomia"]

variables:
  instrumento: uno_de(["Astrolabio", "Sextante", "Cronómetro"])

respuesta: instrumento
tipo: completar
respuestas_validas: ["Astrolabio", "Sextante", "Cronómetro"]

enunciado: "Para determinar la latitud mediante la observación de los astros, los navegantes de la Era de los Descubrimientos utilizaban principalmente el ___."

explicacion: |
  El astrolabio permitía medir la altura de los cuerpos celestes sobre el horizonte, esencial para calcular la posición latitudinal.
```

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["carabela", "barcos"]

variables:
  caracteristica: uno_de(["velas cuadradas", "velas latinas", "remos de madera"])

respuesta: caracteristica
tipo: mc
opciones_explicitas: ["velas cuadradas", "velas latinas", "remos de madera"]

enunciado: "La carabela fue un barco clave en la expansión europea debido a su capacidad de navegar contra el viento, gracias al uso de ___."

explicacion: |
  Las velas latinas (triangulares) permitían la maniobra de 'bolina', es decir, navegar en ángulos más agudos respecto al viento, algo vital para las exploraciones atlánticas.
```

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "avanzado"
  tags: ["tecnologia", "secuencia"]

respuesta: ["Brújula", "Astrolabio", "Carabela"]
tipo: ordenar
opciones_explicitas: ["Brújula", "Astrolabio", "Carabela"]

enunciado: "Ordena cronológicamente el desarrollo de las tecnologías que permitieron la expansión oceánica, desde la orientación básica hasta la navegación de altura:"

explicacion: |
  La brújula permitió la orientación, el astrolabio la posición astronómica y la carabela la capacidad de maniobra en alta mar.
```

```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["imprenta", "conocimiento"]

variables:
  efecto: uno_de(["difusión", "recolección", "eliminación"])

respuesta: efecto
tipo: mc
opciones_explicitas: ["difusión", "recolección", "eliminación"]

enunciado: "La invención de la imprenta de tipos móviles facilitó la ___ de mapas y conocimientos geográficos, acelerando la era de los descubrimientos."

explicacion: |
  La imprenta permitió que los mapas y las crónicas de viajes se replicaran de forma rápida y barata, democratizando el conocimiento geográfico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_cientifica"
  nivel: "basico"
  tags: ["copernico", "astronomia"]

respuesta: "Copérnico"
tipo: completar
respuestas_validas: ["Copérnico"]

enunciado: "El modelo que propuso que el Sol, y no la Tierra, es el centro del sistema planetario fue formulado por ___."

explicacion: |
  Nicolás Copérnico fue el pionero de la teoría heliocéntrica, desafiando el modelo geocéntrico de Ptolomeo que había predominado durante siglos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_cientifica"
  nivel: "intermedio"
  tags: ["galileo", "telescopio"]

variables:
  escenario: uno_de([
    ["observó las fases de Venus", "confirmó la teoría heliocéntrica"],
    ["descubrió los satélites de Júpiter", "demostró que no todo giraba en torno a la Tierra"],
    ["observó las manchas solares", "refutó la idea de la perfección de los cielos"]
  ])

respuesta: "confirmó la teoría heliocéntrica"
tipo: mc
opciones_explicitas: ["confirmó la teoría heliocéntrica", "demostró que no todo giraba en torno a la Tierra", "refutó la idea de la perfección de los cielos"]

enunciado: "Al usar el telescopio, Galileo Galilei realizó observaciones que ___."

explicacion: |
  Las observaciones de Galileo, como las fases de Venus o los satélites de Júpiter, proporcionaron la evidencia empírica necesaria para respaldar el modelo heliocéntrico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_cientifica"
  nivel: "avanzado"
  tags: ["newton", "fisica"]

variables:
  caso: uno_de([
    ["la fuerza con la que la Tierra atrae a una manzana", "la fuerza que mantiene a la Luna en órbita"],
    ["la fuerza con la que la Tierra atrae a una manzana", "la fuerza que mantiene a los planetas en órbita"],
    ["la fuerza con la que la Tierra atrae a una manzana", "la fuerza que rige el movimiento de los astros"]
  ])

respuesta: "la fuerza que rige el movimiento de los astros"
tipo: mc
opciones_explicitas: ["la fuerza que rige el movimiento de los astros", "la fuerza que mantiene a la Luna en órbita", "la fuerza que mantiene a los planetas en órbita"]

enunciado: "Isaac Newton unificó la física terrestre y la celeste al proponer que la gravedad es ___."

explicacion: |
  Newton demostró que las mismas leyes físicas que rigen el movimiento de los objetos en la Tierra se aplican también a los cuerpos celestes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metodo_cientifico"
  nivel: "intermedio"
  tags: ["metodologia", "ciencia"]

respuesta: "observación"
tipo: completar
respuestas_validas: ["observación"]

enunciado: "A diferencia de la escolástica, la nueva ciencia moderna se basa en la ___ y la experimentación para validar hipótesis."

explicacion: |
  El método científico moderno sustituyó la deducción puramente lógica basada en textos antiguos por la inducción basada en la observación directa de la naturaleza.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metodo_cientifico"
  nivel: "intermedio"
  tags: ["pasos", "metodologia"]

respuesta: ["Observación", "Hipótesis", "Experimentación", "Conclusión"]
tipo: ordenar
opciones_explicitas: ["Observación", "Hipótesis", "Experimentación", "Conclusión"]

enunciado: "Ordena los pasos lógicos que definen el proceso de investigación científica moderna:"

explicacion: |
  El proceso científico comienza con la observación de un fenómeno, la formulación de una explicación provisional (hipótesis), la realización de pruebas (experimentación) y la obtención de una conclusión.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["renacimiento", "imprenta", "difusion"]

tipo: mc
opciones_explicitas: ["La estandarización de textos y diagramas", "La prohibición de la lectura en latín", "El aumento del costo de los libros", "La creación de bibliotecas privadas"]

enunciado: "Antes de la imprenta de tipos móviles, los libros se copiaban a mano, lo que generaba errores constantes. ¿Cuál fue el principal impacto de la imprenta en la difusión del conocimiento científico durante el Renacimiento?"

explicacion: |
  La imprenta permitió la producción masiva de textos idénticos. Esto garantizó que científicos en diferentes partes de Europa pudieran estudiar los mismos diagramas y datos astronómicos sin las variaciones de los copistas manuales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["navegacion", "cartografia", "imprenta"]

variables:
  escenario: uno_de([
    ["mapa_preciso", "cartografía náutica detallada"],
    ["mapa_vago", "esquemas de navegación imprecisos"]
  ])

tipo: mc
opciones_explicitas: ["Permitió la creación de mapas más precisos y repetibles", "Hizo que la navegación fuera más peligrosa", "Eliminó la necesidad de usar la brújula", "Limitó el conocimiento a los capitanes de flota"]

enunciado: "La imprenta facilitó la reproducción de {escenario[0]}. ¿Cómo ayudó esto directamente a la era de las grandes navegaciones?"

explicacion: |
  La capacidad de imprimir mapas y tablas de navegación (como las efemérides) permitió que los navegantes contaran con herramientas de orientación estandarizadas, reduciendo el margen de error en las rutas transoceánicas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "avanzado"
  tags: ["metodologia", "ciencia", "orden"]

tipo: ordenar
opciones_explicitas: ["Invención de la imprenta", "Difusión de textos clásicos y nuevos hallazgos", "Revolución Científica y debates académicos"]

enunciado: "Ordena cronológicamente la cadena de causalidad que conectó la tecnología con el cambio de paradigma científico:"

explicacion: |
  La tecnología de la imprenta (1) permitió la circulación masiva de ideas (2), lo que alimentó el debate constante y la validación de experimentos que caracterizan la Revolución Científica (3).
```

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["autoridad", "ciencia", "humanismo"]

tipo: completar
respuestas_validas: ["observación", "autoridad"]

enunciado: "El Renacimiento promovió el paso de un conocimiento basado en la ___ de los textos antiguos a uno basado en la ___ directa de la naturaleza."

explicacion: |
  La imprenta permitió que los textos antiguos fueran comparados entre sí, revelando contradicciones y fomentando que los científicos confiaran más en sus propios experimentos y observaciones que en la tradición dogmática.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["lenguaje", "ciencia", "comunicacion"]

tipo: mc
opciones_explicitas: ["El ascenso de las lenguas vernáculas", "El dominio exclusivo del latín", "La desaparición de la escritura", "El uso de jeroglíficos científicos"]

enunciado: "Al imprimir libros en idiomas locales (español, francés, alemán) y no solo en latín, ¿qué efecto tuvo la imprenta en la democratización del saber científico?"

explicacion: |
  La impresión en lenguas vernáculas permitió que artesanos, navegantes y técnicos (que no sabían latín pero aplicaban la ciencia práctica) accedieran al conocimiento, uniendo la teoría científica con la práctica técnica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["imprenta", "reforma", "comunicacion"]

variables:
  datos: [[ "La imprenta de tipos móviles de Gutenberg", "La difusión masiva de las ideas de la Reforma Protestante"], ["El desarrollo de la brújula magnética", "La expansión de las rutas comerciales transoceánicas"], ["El perfeccionamiento del telescopio", "El inicio de la Revolución Científica"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["La difusión masiva de las ideas de la Reforma Protestante", "La expansión de las rutas comerciales transoceánicas", "El inicio de la Revolución Científica"]

enunciado: "Asocia el siguiente avance tecnológico con su consecuencia histórica principal: {datos[idx][0]}"

explicacion: |
  La imprenta permitió que las ideas de autores como Lutero se propagaran rápidamente por Europa, rompiendo el monopolio del conocimiento de la Iglesia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["navegacion", "exploracion", "mapas"]

variables:
  datos: [["El uso del astrolabio en alta mar", "La navegación astronómica precisa"], ["La cartografía de Mercator", "La representación de rutas oceánicas"] ]
  idx: uno_de([0,1])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["La navegación astronómica precisa", "La representación de rutas oceánicas"]

enunciado: "El avance tecnológico de {datos[idx][0]} permitió fundamentalmente: ___"

explicacion: |
  Los instrumentos de navegación permitieron a los exploradores determinar su posición, facilitando viajes de larga distancia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "avanzado"
  tags: ["ciencia", "metodo_cientifico", "observacion"]

variables:
  casos: [["La observación sistemática de los cielos", "El cuestionamiento del modelo geocéntrico"], ["El uso del microscopio", "El descubrimiento del mundo microscópico"]]
  idx: uno_de([0,1])

respuesta: casos[idx][1
tipo: mc
opciones_explicitas: ["El cuestionamiento del modelo geocéntrico", "El descubrimiento del mundo microscópico"]

enunciado: "Si consideramos el impacto de {casos[idx][0]}, su consecuencia directa fue: ___"

explicacion: |
  La observación empírica desafió las verdades establecidas por la tradición y la autoridad religiosa.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["secuencia", "procesos"]

respuesta: ["Imprenta", "Navegación", "Revolución Científica"]
tipo: ordenar
opciones_explicitas: ["Imprenta", "Navegación", "Revolución Científica"]

enunciado: "Ordena cronológicamente estos procesos que definieron la Modernidad temprana:"

pasos:
  - "Primero, la democratización del saber escrito."
  - "Segundo, la expansión de los horizontes geográficos."
  - "Tercero, la consolidación del método experimental."

explicacion: |
  La imprenta preparó el terreno intelectual, la navegación expandió el mundo conocido y la ciencia revolucionó la comprensión de la naturaleza.
```

```
metadata:
  materia: "historia_profunda"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["telescopio", "galileo", "astronomia"]

respuesta: "Copernicanismo"
tipo: completar
respuestas_validas: ["Copernicanismo", "Geocentrismo"]

enunciado: "El perfeccionamiento del telescopio por parte de Galileo Galilei fue clave para validar el ___."

explicacion: |
  Al observar las fases de Venus y los satélites de Júpiter, Galileo aportó evidencia empírica al modelo heliocéntrico.
```

## Sección: movimiento-aparente-constelaciones (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "rotacion_terrestre"]

respuesta: "rotación terrestre"
tipo: completar
respuestas_validas: ["rotación terrestre"]

enunciado: "El movimiento aparente de las estrellas durante la noche, donde parecen desplazarse de este a oeste, es causado en realidad por la ___ de la Tierra."

explicacion: |
  Aunque parece que el cielo gira alrededor de nosotros, es la Tierra la que gira sobre su propio eje de oeste a este, lo que genera la ilusión de movimiento estelar en sentido contrario.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["observacion", "astronomia"]

variables:
  dir_estrellas: uno_de(["Este-Oeste", "Oeste-Este"])
  sentido_estrellas: uno_de(["Este-Oeste", "Este-Oeste"])

respuesta: dir_estrellas
tipo: mc
opciones_explicitas: ["Este-Oeste", "Oeste-Este", "Norte-Sur", "Sur-Norte"]

enunciado: "Debido a la rotación terrestre, ¿en qué dirección aparente vemos que se desplazan las estrellas durante la noche?"

explicacion: |
  Como la Tierra rota hacia el Este, los objetos celestes parecen moverse hacia el Oeste.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["geocentrismo", "heliocentrismo"]

respuesta: falso
tipo: vf

enunciado: "¿Es el movimiento de las constelaciones causado por el desplazamiento físico de las estrellas alrededor de la Tierra?"

explicacion: |
  Falso. Las estrellas tienen sus propios movimientos propios (muy lentos), pero el movimiento diario que vemos es un efecto óptico de nuestra rotación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "avanzado"
  tags: ["eje_terrestre", "estrellas_fijas"]

variables:
  punto_fijo: uno_de(["Polo Norte Celeste", "Ecuador Celeste", "Polo Sur Celeste"])
  nombre_fijo: uno_de(["Polo Norte Celeste", "Polo Sur Celeste"])

respuesta: punto_fijo
tipo: mc
opciones_explicitas: ["Polo Norte Celeste", "Ecuador Celeste", "Polo Sur Celeste"]

enunciado: "En el hemisferio norte, las estrellas parecen girar alrededor de un punto fijo en el cielo llamado ___."

explicacion: |
  El eje de rotación de la Tierra apunta hacia las estrellas que parecen estar en el centro del movimiento circular, como la Estrella Polar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["observacion", "secuencia"]

respuesta: ["Aparición por el Este", "Paso por el Meridiano", "Ocultación por el Oeste"]
tipo: ordenar
opciones_explicitas: ["Aparición por el Este", "Paso por el Meridiano", "Ocultación por el Oeste"]

enunciado: "Ordena el ciclo de movimiento aparente de una estrella desde que sale hasta que se pone:"

pasos:
  - "La estrella aparece en el horizonte."
  - "La estrella alcanza su punto más alto."
  - "La estrella desaparece bajo el horizonte."

explicacion: |
  Debido a la rotación de la Tierra, el ciclo sigue siempre este orden: sale por el este, cruza el cielo (meridiano) y se pone por el oeste.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "tierra", "sol"]

respuesta: "traslación"
tipo: completar
respuestas_validas: ["traslación", "traslación de la Tierra"]

enunciado: "El cambio en las constelaciones visibles a lo largo de los meses ocurre debido al movimiento de ___ de la Tierra alrededor del Sol."

explicacion: |
  La Tierra se desplaza en su órbita alrededor del Sol. Esto hace que, según nuestra posición en la órbita, la parte del cielo que queda en la oscuridad (noche) cambie, permitiéndonos ver diferentes estrellas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["estaciones", "cielo_nocturno"]

variables:
  escenario: uno_de([["Orión", "invierno"], ["Escorpio", "verano"]])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["invierno", "verano", "primavera", "otoño"]

enunciado: "Si en una fecha determinada observamos con claridad la constelación de {escenario[0]}, esto indica que estamos en la estación de {escenario[1]}."

explicacion: |
  Las constelaciones estacionales dependen de la posición de la Tierra respecto al Sol. Por ejemplo, la constelación de Orión es típica del cielo de invierno en el hemisferio norte.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["perspectiva", "sol"]

respuesta: "Sol"
tipo: completar
respuestas_validas: ["Sol", "Sol"]

enunciado: "Las constelaciones que vemos en el cielo nocturno cambian porque, al movernos en nuestra órbita, el ___ queda situado entre la Tierra y las estrellas que antes veíamos, ocultándolas durante la noche."

explicacion: |
  Durante el día, el Sol "tapa" la luz de las estrellas que se encuentran en la misma dirección. Al cambiar nuestra posición orbital, las estrellas que antes eran visibles de noche ahora están en la dirección del Sol.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "avanzado"
  tags: ["orden", "ciclo_anual"]

respuesta: ["Eje terrestre", "Traslación", "Cambio de constelaciones"]
tipo: ordenar
opciones_explicitas: ["Eje terrestre", "Traslación", "Cambio de constelaciones"]

enunciado: "Ordena la secuencia lógica de causas que explica por qué vemos diferentes estrellas cada mes:"

pasos:
  - "La Tierra tiene un eje de rotación."
  - "La Tierra realiza un movimiento de traslación alrededor del Sol."
  - "La perspectiva de las estrellas cambia, mostrando nuevas constelaciones."

explicacion: |
  El ciclo es una consecuencia directa del movimiento orbital de la Tierra alrededor del Sol.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es el movimiento de rotación (sobre su propio eje) la causa principal por la que las constelaciones cambian de una estación a otra?"

explicacion: |
  Falso. La rotación causa el ciclo día/noche, pero es la traslación la que causa el cambio de las constelaciones visibles a lo largo de los meses.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constratelaciones"
  nivel: "basico"
  tags: ["astronomia", "orientacion"]

respuesta: "eje de rotación"
tipo: completar
respuestas_validas: ["eje de rotación"]

enunciado: "La estrella Polaris parece permanecer casi fija en el cielo debido a que se encuentra alineada con el ___ de la Tierra."

explicacion: |
  Debido a que la Tierra gira alrededor de su eje, las estrellas parecen moverse en círculos. Como Polaris está casi sobre el eje, su movimiento aparente es mínimo, manteniéndola como punto de referencia constante.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constratelaciones"
  nivel: "basico"
  tags: ["orientacion", "navegacion"]

opciones_explicitas: ["Determinar la hora exacta", "Orientarse en el hemisferio norte", "Predecir eclipses lunares", "Calcular la distancia a la Luna"]

respuesta: "Orientarse en el hemisferio norte"
tipo: mc

enunciado: "¿Cuál es la principal utilidad histórica de la estrella Polar para los navegantes?"

explicacion: |
  Al estar situada cerca del polo norte celeste, su posición permite identificar rápidamente el norte geográfico, siendo vital para la navegación en el hemisferio norte.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constratelaciones"
  nivel: "intermedio"
  tags: ["movimiento_aparente", "rotacion"]

variables:
  caso: uno_de([0, 1])

respuesta: tabla[caso][1
tipo: mc
tabla: [
  ["se mueven en líneas rectas", "se mueven en arcos circulares"],
  ["se mueven en líneas rectas", "se mueven en arcos circulares"]
]
opciones_explicitas: ["se mueven en líneas rectas", "se mueven en arcos circulares"]

enunciado: "Debido a la rotación terrestre, las estrellas que no son Polaris parecen moverse en el cielo siguiendo un patrón de ___."

explicacion: |
  La rotación de la Tierra sobre su eje provoca que las estrellas tracen trayectorias curvas o arcos en la bóveda celeste durante la noche.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constratelaciones"
  nivel: "intermedio"
  tags: ["geometria_celeste"]

respuesta: "norte"
tipo: completar
respuestas_validas: ["norte"]

enunciado: "Si observamos el cielo nocturno en el hemisferio norte, la estrella que marca el punto cardinal ___ es la Polaris."

explicacion: |
  Polaris es la estrella que indica la dirección del norte celeste, sirviendo como brújula natural.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constratelaciones"
  nivel: "avanzado"
  tags: ["observacion", "secuencia"]

opciones_explicitas: ["Localizar la Osa Mayor", "Identificar la estrella Polaris", "Determinar el Norte"]

respuesta: ["Localizar la Osa Mayor", "Identificar la estrella Polaris", "Determinar el Norte"]
tipo: ordenar

enunciado: "Un navegante antiguo sigue este proceso para orientarse usando las estrellas. Ordena los pasos correctamente:"

explicacion: |
  Para encontrar el norte de forma fiable, primero se busca una constelación conocida (como la Osa Mayor), luego se localiza la estrella guía (Polaris) y finalmente se establece el punto cardinal.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "conceptos_basicos"]

respuesta: "patrón aparente"
tipo: completar
respuestas_validas: ["patrón aparente"]

enunciado: "Una constelación no es un grupo de estrellas unidas físicamente, sino un ___ formado por estrellas que parecen estar juntas desde nuestra perspectiva."

explicacion: |
  Las estrellas de una constelación pueden estar a cientos o miles de años luz de distancia unas de otras; solo parecen estar cerca debido a nuestra perspectiva desde la Tierra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["distancia", "perspectiva"]

opciones_explicitas: ["Están físicamente unidas por la gravedad", "Están a distancias muy distintas de la Tierra", "Tienen la misma edad y composición", "Se mueven siempre en la misma dirección"]

respuesta: "Están a distancias muy distintas de la Tierra"
tipo: mc

enunciado: "Sobre la distancia real de las estrellas que forman una constelación, es correcto afirmar que:"

explicacion: |
  Aunque en el cielo nocturno parezcan formar un dibujo coherente, la mayoría de las veces las estrellas de una constelación no tienen ninguna relación física de distancia entre sí.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["perspectiva", "geometria_espacial"]

variables:
  idx: uno_de([0, 1])

datos:
  - ["Desde la Tierra, las estrellas parecen formar un dibujo", "La perspectiva visual crea la ilusión de proximidad"]
  - ["Las estrellas están en un plano bidimensional", "La profundidad espacial es engañosa para el ojo humano"]

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Desde la Tierra, las estrellas parecen formar un dibujo", "La perspectiva visual crea la ilusión de proximidad", "Las estrellas están en un plano bidimensional", "La profundidad espacial es engañosa para el ojo humano"]

enunciado: "Si observamos una constelación, el fenómeno que explica por qué vemos estrellas que están a miles de años luz como si estuvieran juntas es: {datos[idx][0]}"

explicacion: |
  {datos[idx][1]}
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["estrellas", "patrones"]

respuesta: "no están relacionadas físicamente entre sí"
tipo: completar
respuestas_validas: ["no están relacionadas físicamente entre sí"]

enunciado: "A diferencia de un sistema estelar como el Sol y sus planetas, las estrellas que componen una constelación ___."

explicacion: |
  La agrupación es una ilusión óptica causada por la línea de visión. Físicamente, son objetos independientes que navegan por el espacio en direcciones distintas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["orden_logico", "perspectiva"]

opciones_explicitas: ["Luz de la estrella", "Distancia real de la estrella", "Posición aparente en el cielo", "Formación de la constelación"]

respuesta: ["Luz de la estrella", "Distancia real de la estrella", "Posición aparente en el cielo", "Formación de la constelación"]
tipo: ordenar

enunciado: "Ordena los conceptos según el proceso que explica la creación de una constelación (desde el origen físico hasta la percepción humana):"

explicacion: |
  Primero la luz viaja desde la estrella (1), la estrella tiene una distancia real (2), esa luz llega con una posición específica (3) y el ojo humano percibe el patrón (4).
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "estaciones"]

variables:
  datos: [["Orión", "Leo"], ["Sirio", "Tauro"], ["Spica", "Cáncer"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Leo", "Tauro", "Cáncer", "Orión"]

enunciado: "Durante la primavera en el hemisferio norte, la constelación que se encuentra en su punto más alto en el cielo es {datos[idx][0]}."

explicacion: |
  Debido al movimiento de traslación de la Tierra, diferentes constelaciones son visibles en diferentes épocas del año. En primavera, la constelación de {datos[idx][0]} es prominente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["zodiaco", "estaciones"]

variables:
  datos: [["verano", "Escorpio"], ["invierno", "Géminis"], ["otoño", "Libra"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["Escorpio", "Géminis", "Libra"]

enunciado: "Si estamos en la estación de {datos[idx][0]}, la constelación del zodiaco que es más visible hacia el mediodía es ___."

explicacion: |
  La posición del Sol en el zodiaco determina qué constelaciones son visibles durante el día y cuáles durante la noche en una estación específica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["estrellas", "noche"]

variables:
  estrellas: [["Sirio", "Canis Mayor"], ["Betelgeuse", "Orión"], ["Arcturus", "Boote"]]
  idx: uno_de([0, 1, 2])

respuesta: estrellas[idx][1
tipo: mc
opciones_explicitas: ["Canis Mayor", "Orión", "Boote"]

enunciado: "La estrella {estrellas[idx][0]} es la estrella principal de la constelación de ___."

explicacion: |
  {estrellas[idx][0]} es una de las estrellas más brillantes y es el componente central de la constelación de {estrellas[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "avanzado"
  tags: ["secuencia", "ecliptic"]

variables:
  secuencia: [["Aries", "Tauro", "Géminis"], ["Cáncer", "Leo", "Virgo"], ["Libra", "Escorpio", "Sagitario"]]
  idx: uno_de([0, 1, 2])

respuesta: secuencia[idx
tipo: ordenar
opciones_explicitas: ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario"]

enunciado: "Ordene las siguientes constelaciones según su orden de aparición en el zodíaco (eclíptica) para el grupo seleccionado:"

explicacion: |
  El orden de las constelaciones zodiacales sigue la trayectoria aparente del Sol a través del cielo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["sol", "ecliptic"]

variables:
  par: [["Junio", "Géminis"], ["Diciembre", "Sagitario"], ["Septiembre", "Virgo"]]
  idx: uno_de([0, 1, 2])

respuesta: par[idx][1
tipo: completar
tolerancia_abs: 0

enunciado: "Si el Sol se encuentra en la constelación de {par[idx][0]}, la constelación opuesta en el cielo nocturno será ___."

explicacion: |
  Cuando el Sol está en una constelación, esa constelación es invisible de noche. La constelación opuesta es la que se observa en su punto más alto durante la medianoche.
```
