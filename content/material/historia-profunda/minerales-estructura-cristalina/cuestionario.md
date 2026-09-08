# Historia Profunda — Minerales estructura cristalina (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de mineral

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["definicion", "geologia"]

tipo: mc
opciones_explicitas: ["Una sustancia sólida, inorgánica, de origen natural, con composición química definida y estructura cristalina ordenada.", "Una sustancia sólida, orgánica, de origen volcánico, con composición variable y estructura amorfa.", "Un compuesto químico formado exclusivamente por elementos metálicos en estado sólido.", "Cualquier material sólido encontrado en la corteza terrestre."]
respuesta: "Una sustancia sólida, inorgánica, de origen natural, con composición química definida y estructura cristalina ordenada."
enunciado: "Según la mineralogía clásica, ¿cuál es la definición científica de un mineral?"
explicacion: |
  Un mineral debe cumplir cinco condiciones: ser sólido, inorgánico, de origen natural, tener una fórmula química definida y una estructura atómica interna ordenada (cristalina).
```

### 2 — El carácter inorgánico

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["propiedades", "inorganico"]

variables:
  escenario: uno_de([["El carbón (formado por restos vegetales)", "falso"], ["El cuarzo (formado por silicatos de silicio y oxígeno)", "verdadero"]])

tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Considerando que un mineral debe ser inorgánico, ¿es la afirmación '{escenario[0]}' verdadera o falsa para la definición de mineral?"

respuesta: escenario[1]

explicacion: |
  Los materiales de origen orgánico (como el carbón derivado de plantas) no se consideran minerales, aunque sean sólidos y naturales.
```

### 3 — Estructura interna

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["estructura", "cristalografia"]

tipo: completar
respuestas_validas:
  - "cristalina"

enunciado: "Para que una sustancia sea considerada mineral, sus átomos deben estar dispuestos en una estructura ___."

respuesta: "cristalina"

explicacion: |
  La estructura cristalina es el ordenamiento tridimensional repetitivo de los átomos, lo que diferencia a un mineral de un vidrio (sólido amorfo).
```

### 4 — Composición química

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["quimica", "composicion"]

variables:
  caso: uno_de([["El diamante (C)", "C"], ["La sal común (NaCl)", "NaCl"], ["La calcita (CaCO3)", "CaCO3"]])

tipo: completar
respuestas_validas:
  - "C"
  - "NaCl"
  - "CaCO3"

enunciado: "Un mineral debe tener una composición química definida. Si tomamos el caso de {caso[0]}, su fórmula química es ___."

respuesta: caso[1]

explicacion: |
  Cada mineral tiene una proporción fija de elementos que determina su identidad química.
```

### 5 — Orden de propiedades

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["conceptos", "ordenamiento"]

tipo: ordenar
opciones_explicitas: ["Origen natural", "Sólido", "Estructura cristalina", "Composición química definida", "Inorgánico"]

enunciado: "Ordena los criterios fundamentales que definen a un mineral, desde el origen hasta su organización interna:"

respuesta_orden: ["Origen natural", "Sólido", "Inorgánico", "Composición química definida", "Estructura cristalina"]

explicacion: |
  La definición integral requiere la suma de estas cinco características esenciales para distinguir un mineral de otros materiales terrestres.
```

### 6 — ¿Qué es una estructura cristalina?

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["cristalografía", "átomos"]

respuesta: "arreglo geométrico repetitivo y ordenado de átomos/iones"
tipo: completar
respuestas_validas:
  - "arreglo geométrico repetitivo y ordenado de átomos/iones"
  - "un desorden total de partículas"
  - "una estructura sin simetría"

enunciado: "Una estructura cristalina se define como un ___."

explicacion: |
  Los cristales se caracterizan por tener un ordenamiento espacial de sus componentes (átomos, iones o moléculas) que se repite de forma periódica en las tres dimensiones del espacio.
```

### 7 — Sólidos cristalinos vs. amorfos

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["amorfo", "cristalino"]

variables:
  escenario: uno_de([["vidrio", "amorfo"], ["cuarzo", "cristalino"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["cristalino", "amorfo"]

enunciado: "Si un material como el {escenario[0]} carece de un ordenamiento de largo alcance en su estructura, se clasifica como un sólido ___."

explicacion: |
  Los sólidos amorfos, como el vidrio, carecen de la periodicidad característica de los cristales, presentando un desorden estructural a escala atómica.
```

### 8 — Componentes de la red

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["átomos", "red_cristalina"]

respuesta: "átomos, iones o moléculas"
tipo: completar
respuestas_validas:
  - "átomos, iones o moléculas"

enunciado: "La unidad básica que se repite para formar la red de un cristal está compuesta por ___."

explicacion: |
  Dependiendo de la naturaleza del mineral, los puntos de la red pueden ser átomos elementales, iones en compuestos iónicos o moléculas en sólidos moleculares.
```

### 9 — Diferencia fundamental

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

### 10 — Clasificación de materiales

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["clasificación", "estructura"]

variables:
  ejemplo: uno_de([["diamante", "cristalino"], ["plástico", "amorfo"]])

respuesta: ejemplo[1]
tipo: mc
opciones_explicitas: ["cristalino", "amorfo"]

enunciado: "Considerando el caso del {ejemplo[0]}, su estructura interna es de tipo ___."

explicacion: |
  El diamante es el ejemplo clásico de un sólido con una estructura cristalina altamente ordenada de átomos de carbono.
```

### 11 — Concepto de Mineral

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["definiciones", "geologia"]

tipo: mc
opciones_explicitas: ["Un agregado de varios minerales", "Una sustancia pura con estructura cristalina definida", "Una mezcla de materia orgánica e inorgánica", "Un fragmento de corteza terrestre sin estructura"]
respuesta: "Una sustancia pura con estructura cristalina definida"
enunciado: "Desde una perspectiva geológica, ¿cuál es la definición fundamental de un mineral?"

explicacion: |
  Un mineral es una sustancia sólida, inorgánica, con una composición química definida y una estructura atómica ordenada (cristalina).
```

### 12 — Identificación de Rocas

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["clasificacion", "rocas"]

variables:
  escenario: uno_de([["Granito", "cuarzo", "feldespato", "mica"], ["Basalto", "olivino", "piroxeno", "plagioclasa"], ["Caliza", "calcita", "dolomita", "aragonito"]])

tipo: completar
respuesta: escenario[3]

enunciado: "Si observamos una muestra de {escenario[0]}, estamos ante una roca compuesta por varios minerales, entre ellos {escenario[1]} y {escenario[2]}. Otro mineral típico de esta roca es ___."

pasos:
  - "Identifica si el material es una sustancia única o un agregado."
  - "Observa los componentes individuales que forman el conjunto."

explicacion: |
  El {escenario[0]} es una roca porque es un agregado de los minerales listados.
```

### 13 — Relación Mineral-Roca

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["relaciones", "estructuras"]

tipo: completar
respuestas_validas:
  - "mineral"
  - "roca"

enunciado: "Un ejemplar de cuarzo puro se clasifica como un ________, mientras que una masa de granito se clasifica como una ________."

explicacion: |
  El cuarzo es una sustancia individual (mineral), mientras que el granito es un agregado de varios minerales (roca).
```

### 14 — Clasificación de Componentes

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
respuesta_orden: ["Átomos", "Cristales (Minerales)", "Rocas"]
```

### 15 — Análisis de Composición

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["analisis", "composicion"]

variables:
  caso: uno_de([["feldespato", "mineral"], ["granito", "roca"]])

tipo: mc
opciones_explicitas: ["mineral", "roca"]
respuesta: caso[1]

enunciado: "Considerando el elemento {caso[0]}, su clasificación técnica es: ________."

explicacion: |
  Según el caso seleccionado, {caso[0]} es un/a {caso[1]}.
```

### 16 — La escala de Mohs

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

respuestas_validas:
  - "1"
  - "2"
  - "3"
  - "4"
  - "5"
respuesta: mineral_datos[idx][1]
tipo: completar

explicacion: |
  La escala de Mohs es una escala de dureza relativa. El {mineral_datos[idx][0]} tiene un valor de {mineral_datos[idx][1]}.
```

### 17 — El brillo mineral

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

### 18 — Identificación por raya

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["raya", "color"]

variables:
  escenario: [["Hematita", "Rojo"], ["Pirita", "Negro"], ["Calcopirita", "Negro verdoso"], ["Malaquita", "Verde"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Al realizar la prueba de la raya sobre una placa de porcelana sin esmaltar con el mineral {escenario[idx][0]}, el color resultante es ___."

respuestas_validas:
  - "Rojo"
  - "Negro"
  - "Negro verdoso"
  - "Verde"
respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  La raya es el color del polvo del mineral y es una propiedad más constante que el color externo del espécimen.
```

### 19 — Fractura vs Clivaje

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

### 20 — Secuencia de dureza

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["mohs", "ordenar"]

enunciado: "Ordene los siguientes minerales de menor a mayor dureza según la escala de Mohs:"

opciones_explicitas: ["Talco", "Calcita", "Cuarzo", "Diamante"]
respuesta_orden: ["Talco", "Calcita", "Cuarzo", "Diamante"]
tipo: ordenar

explicacion: |
  La secuencia correcta es: Talco (1), Calcita (3), Cuarzo (7) y Diamante (10).
```

### 21 — Identificación por dureza

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["dureza", "mohs"]

variables:
  escenario: [[4, "Fluorita"], [7, "Cuarzo"], [10, "Diamante"]]
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

### 22 — El color de la luz

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
respuestas_validas:
  - "Rubí"
  - "Lapislázuli"
  - "Azufre"

enunciado: "Se observa un cristal de color ___ que presenta una estructura hexagonal característica."

pasos:
  - "Identificar el color mencionado en el registro."
  - "Asociar el color con el mineral correspondiente."

respuesta: mineral_nombre

explicacion: |
  El color {color_descrito} corresponde al mineral {mineral_nombre}.
```

### 23 — El brillo mineral

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["brillo", "propiedades"]

variables:
  escenario: uno_de([["metálico", "Pirita"], ["vítreo", "Cuarzo"], ["nacarado", "Mica"]])
  tipo_brillo: escenario[0]
  mineral_id: escenario[1]

tipo: mc
opciones_explicitas: ["Pirita", "Cuarzo", "Mica", "Feldespato"]

enunciado: "Un espécimen presenta un brillo de tipo {tipo_brillo}. ¿Cuál de estos minerales es el más probable?"

respuesta: mineral_id

explicacion: |
  El brillo {tipo_brillo} es característico de la {mineral_id}.
```

### 24 — Secuencia de formación

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["cristalización", "geología"]

tipo: ordenar
opciones_explicitas: ["Nucleación", "Crecimiento", "Terminación"]

enunciado: "Ordene las etapas típicas de la formación de un cristal perfecto en una solución saturada:"

respuesta_orden: ["Nucleación", "Crecimiento", "Terminación"]

explicacion: |
  El proceso de cristalización requiere primero la nucleación, luego el crecimiento de la red y finalmente la terminación de los bordes.
```

### 25 — Densidad relativa

```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["densidad", "propiedades_fisicas"]

variables:
  escenario: [[5.0, "Hematita"], [2.6, "Cuarzo"], [7.5, "Galena"]]
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
