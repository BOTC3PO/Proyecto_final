# Historia Profunda — Civilizaciones antiguas (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Ríos de Mesopotamia

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["mesopotamia", "rios"]

respuesta: "Tigris y Éufrates"
tipo: completar
respuestas_validas:
  - "Tigris y Éufrates"

enunciado: "La civilización de Mesopotamia se desarrolló entre los ríos ___."

explicacion: |
  Mesopotamia significa 'tierra entre ríos', refiriéndose específicamente al Tigris y al Éufrates.
```

### 2 — El don del Nilo

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["egipto", "nilo"]

variables:
  escenario: uno_de([["Nilo", "Egipto"], ["Indo", "India"], ["Huang He", "China"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Egipto", "India", "China"]

enunciado: "El río {escenario[1]} fue fundamental para el desarrollo de la civilización de {escenario[0]}."

explicacion: |
  Heródoto llamó a Egipto 'el don del Nilo' debido a sus inundaciones predecibles que permitían la agricultura.
```

### 3 — El río Amarillo

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["china", "huang_he"]

respuesta: "Huang He"
tipo: mc
opciones_explicitas: ["Yangtsé", "Huang He", "Indo", "Ganges"]

enunciado: "La civilización china antigua se asentó principalmente a lo largo del río ___."

explicacion: |
  El Huang He (Río Amarillo) es conocido por sus sedimentos de loess que fertilizaban las tierras.
```

### 4 — Orden Cronológico de Civilizaciones

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "avanzado"
  tags: ["cronologia", "civilizaciones"]

respuesta_orden: ["Mesopotamia", "Egipto", "Indo", "China"]
tipo: ordenar
opciones_explicitas: ["Mesopotamia", "Egipto", "Indo", "China"]

enunciado: "Ordena cronológicamente el surgimiento de estas civilizaciones fluviales (de la más antigua a la más reciente):"

explicacion: |
  Aunque los periodos se solapan, el registro arqueológico sitúa el surgimiento de las ciudades-estado en Mesopotamia y el valle del Nilo como los más tempranos.
```

### 5 — Identificación de Ríos

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["india", "indo"]

variables:
  datos: [[ "Indo", "India" ], [ "Nilo", "Egipto" ], [ "Tigris", "Mesopotamia" ]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["India", "Egipto", "Mesopotamia"]

enunciado: "El río {datos[idx][0]} fue el eje central de la civilización de {datos[idx][1]}."

explicacion: |
  La civilización del Valle del Indo (actual Pakistán/Noroeste de India) fue una de las más avanzadas de la antigüedad.
```

### 6 — El papel del agua

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["geografia", "rios"]

respuesta: "riego"
tipo: completar
respuestas_validas:
  - "riego"

enunciado: "El asentamiento de las primeras civilizaciones cerca de grandes ríos permitió el desarrollo de la agricultura gracias al sistema de ___."

explicacion: |
  El acceso constante al agua permitió crear sistemas de riego para cultivar en zonas que de otro modo serían áridas.
```

### 7 — Factores de asentamiento

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["geografia", "causas"]

variables:
  idx: uno_de([0, 1, 2])
  civilizaciones: ["Mesopotamia", "Egipto", "India"]
  rios: ["Tigris y Éufrates", "Nilo", "Indo y Ganges"]

respuesta: rios[idx]
tipo: mc
opciones_explicitas: ["Tigris y Éufrates", "Nilo", "Indo y Ganges", "Amazonas"]

enunciado: "La civilización de {civilizaciones[idx]} se desarrolló principalmente a orillas de los ríos ___."

explicacion: |
  Cada gran civilización antigua estuvo ligada a un sistema fluvial específico que proporcionaba sustento.
```

### 8 — El ciclo de las crecidas

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["agricultura", "suelo"]

respuesta: "fértiles"
tipo: completar
respuestas_validas:
  - "fértiles"

enunciado: "Las inundaciones periódicas de los ríos depositaban sedimentos que hacían que las tierras fueran muy ___."

explicacion: |
  El limo o sedimento depositado por las crecidas enriquecía el suelo, permitiendo excedentes de producción.
```

### 9 — Ventajas de los ríos

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["transporte", "comercio"]

respuesta: "transporte"
tipo: completar
respuestas_validas:
  - "transporte"

enunciado: "Además de la agricultura, los ríos servían como una vía de ___ para el comercio entre diferentes asentamientos."

explicacion: |
  Los ríos funcionaban como las primeras "autopistas", facilitando el movimiento de personas y mercancías.
```

### 10 — Causas del surgimiento

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "avanzado"
  tags: ["causas", "multicausalidad"]

respuesta_orden: ["Agua para riego", "Tierras fértiles", "Transporte fluvial"]
tipo: ordenar
opciones_explicitas: ["Agua para riego", "Tierras fértiles", "Transporte fluvial"]

enunciado: "Ordena los tres factores principales que explican por qué las civilizaciones se asentaron junto a los ríos, desde el más vital para la supervivencia hasta el que facilita la expansión:"

pasos:
  - "1. Necesidad básica de supervivencia (agua para cultivos)."
  - "2. Calidad del suelo tras las crecidas."
  - "3. Facilidad de movimiento y comercio."

explicacion: |
  El surgimiento fue un proceso multicausal: el agua permite la vida, el suelo fértil permite el excedente y el río permite la conexión.
```

### 11 — Elementos de la civilización

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["civilizacion", "rasgos_comunes"]

tipo: mc
opciones_explicitas: ["Nómadas sin escritura", "Ciudades, escritura y gobierno centralizado", "Pequeños grupos de caza", "Sociedades sin división del trabajo"]
respuesta: "Ciudades, escritura y gobierno centralizado"

enunciado: "Para que un asentamiento sea considerado una 'civilización' en términos históricos, debe presentar rasgos como la vida urbana, la capacidad de registro y una estructura de poder. ¿Cuál de las siguientes opciones describe mejor estos rasgos?"

explicacion: |
  Las civilizaciones se distinguen de las bandas de cazadores-recolectores por la complejidad de su organización: ciudades permanentes, sistemas de escritura para la administración, un gobierno centralizado y una estructura social con división del trabajo.
```

### 12 — El rol de la escritura

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["escritura", "administracion"]

tipo: completar
respuestas_validas:
  - "administración"
  - "comunicación"

enunciado: "La invención de la escritura en las civilizaciones antiguas tuvo como función primordial la __________, permitiendo llevar el control de excedentes agrícolas, tributos y leyes por parte del Estado."

explicacion: |
  La escritura surgió principalmente como una herramienta contable y administrativa para gestionar la complejidad de las sociedades urbanas y el excedente de producción.
```

### 13 — Organización social y económica

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["division_del_trabajo", "economia"]

tipo: mc
opciones_explicitas: ["Todos realizan las mismas tareas", "Especialización de funciones y división del trabajo", "Dependencia total de la caza", "Ausencia de jerarquías"]
respuesta: "Especialización de funciones y división del trabajo"

enunciado: "El aumento de la producción agrícola permitió que no todos los miembros de la sociedad tuvieran que dedicarse a la obtención de alimentos. Este fenómeno se conoce como:"

explicacion: |
  La división del trabajo permite que aparezcan especialistas (artesanos, sacerdotes, guerreros, escribas), lo cual es un pilar fundamental de las civilizaciones complejas.
```

### 14 — Estructura del poder

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["gobierno", "centralizacion"]

tipo: completar
respuestas_validas:
  - "centralizado"

enunciado: "A diferencia de las tribus igualitarias, las civilizaciones antiguas se caracterizan por poseer un gobierno __________, donde el poder político se concentra en una autoridad que coordina la sociedad."

explicacion: |
  El gobierno centralizado permite la coordinación de grandes obras públicas (como canales de riego) y la gestión de ejércitos y leyes a gran escala.
```

### 15 — El orden de la complejidad social

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "avanzado"
  tags: ["secuencia", "desarrollo"]

tipo: ordenar
opciones_explicitas: ["Agricultura excedente", "Sedentarismo y ciudades", "Especialización del trabajo", "Escritura y administración"]

enunciado: "Ordena cronológicamente los procesos que permiten el surgimiento de una civilización compleja, desde la base económica hasta la institucionalización:"

explicacion: |
  Primero el excedente agrícola permite el sedentarismo; esto genera ciudades, lo que a su vez requiere especialistas y, finalmente, un sistema de registro (escritura) para gestionar la complejidad.
respuesta_orden: ["Agricultura excedente", "Sedentarismo y ciudades", "Especialización del trabajo", "Escritura y administración"]
```

### 16 — Origen de las civilizaciones americanas

```
metadata:
  materia: "historia"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["america", "origen"]

respuesta: "independiente"
tipo: "completar"
respuestas_validas:
  - "independiente"

enunciado: "Las civilizaciones de América, como Caral y los Olmecas, se desarrollaron de forma ___ a las civilizaciones de Eurasia y África."

explicacion: |
  Las civilizaciones americanas surgieron de manera autónoma, sin contacto con el Viejo Mundo en sus etapas formativas.
```

### 17 — La cultura Caral

```
metadata:
  materia: "historia"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["andes", "caral"]

variables:
  datos: [["Caral", "Perú", "la civilización más antigua"], ["Chavín", "Perú", "una cultura formadora clave"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][2]
tipo: "completar"
respuestas_validas:
  - "la civilización más antigua"
  - "una cultura formadora clave"

enunciado: "La civilización de {datos[idx][0]} se encuentra ubicada en el actual territorio de {datos[idx][1]} y es considerada ___ del continente americano."

explicacion: |
  Caral es la civilización más antigua de América, situada en la costa central de Perú.
```

### 18 — Los Olmecas y su legado

```
metadata:
  materia: "historia"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["mesoamerica", "olmecas"]

respuesta: "cabezas colosales"
tipo: "mc"
opciones_explicitas: ["pirámides escalonadas", "cabezas colosales", "códices de papel", "calendario solar"]

enunciado: "La cultura Olmeca, considerada la 'cultura madre' de Mesoamérica, es famosa por la escultura de sus ___."

explicacion: |
  Los Olmecas dejaron grandes monumentos de piedra conocidos como cabezas colosales.
```

### 19 — Cronología de Mesoamérica

```
metadata:
  materia: "historia"
  tema: "civilizaciones_antiguas"
  nivel: "avanzado"
  tags: ["mesoamerica", "ordenar"]

tipo: ordenar
opciones_explicitas: ["Olmecas", "Mayas", "Aztecas"]
respuesta_orden: ["Olmecas", "Mayas", "Aztecas"]

enunciado: "Ordena cronológicamente las siguientes culturas de Mesoamérica, de la más antigua a la más reciente:"

pasos:
  - "Identifica la cultura madre."
  - "Ubica el periodo de esplendor clásico."
  - "Ubica el periodo de expansión imperialista."

explicacion: |
  El orden correcto es: Olmecas (Preclásico), Mayas (Clásico/Postclásico) y Aztecas (Posclásico).
```

### 20 — El sistema de escritura Maya

```
metadata:
  materia: "historia"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["mayas", "escritura"]

respuesta: "glifos"
tipo: "completar"
respuestas_validas:
  - "glifos"

enunciado: "Los mayas desarrollaron un complejo sistema de escritura basado en ___."

explicacion: |
  El sistema de escritura maya era logosilábico, compuesto por glifos que representaban palabras o sonidos.
```

### 21 — El origen de Mesopotamia

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["mesopotamia", "rios"]

variables:
  datos: [["Mesopotamia", "Tigris y Éufrates"], ["Egipto", "Nilo"], ["Indo", "Indo"]]
  idx: uno_de([0,1,2])

enunciado: "La civilización de {datos[idx][0]} se desarrolló a orillas del río {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Tigris y Éufrates", "Nilo", "Indo", "Río Amarillo"]
explicacion: |
  La civilización de Mesopotamia se desarrolló a orillas del río Tigris y Éufrates, la de Egipto junto al Nilo, y la de Indo cerca del río Indo. El Río Amarillo no está asociado con ninguna de estas tres civilizaciones antiguas mencionadas.
```

### 22 — Geografía sagrada

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["egipto", "nilo"]

enunciado: "El río que fue considerado una deidad y motor de la civilización egipcia es el ___."

respuestas_validas:
  - "Nilo"
respuesta: "Nilo"
tipo: completar
```

### 23 — Identificación de regiones

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["china", "civilizaciones"]

variables:
  datos: [["China", "Río Amarillo"], ["Mesopotamia", "Tigris"], ["Egipto", "Nilo"]]
  idx: uno_de([0,1,2])

enunciado: "Asocia la civilización con su río correspondiente: {datos[idx][0]} -> ___"

respuestas_validas:
  - "Río Amarillo"
  - "Tigris"
  - "Nilo"
respuesta: datos[idx][1]
tipo: completar
```

### 24 — Civilizaciones y sus ríos

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["ordenar", "geografia"]

enunciado: "Ordena las siguientes civilizaciones según el orden de su ubicación geográfica de norte a sur (considerando sus ríos principales):"

opciones_explicitas: ["Mesopotamia", "Egipto", "Indo"]
respuesta_orden: ["Mesopotamia", "Egipto", "Indo"]
tipo: ordenar
```

### 25 — El gran desafío de los ríos

```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["identificacion"]

variables:
  pares: [["Egipto", "Nilo"], ["China", "Huang He"], ["Mesopotamia", "Tigris"]]
  idx: uno_de([0,1,2])

enunciado: "Si estamos analizando la región de {pares[idx][0]}, el río principal es el ___."

respuestas_validas:
  - "Nilo"
  - "Huang He"
  - "Tigris"
respuesta: pares[idx][1]
tipo: completar
```
