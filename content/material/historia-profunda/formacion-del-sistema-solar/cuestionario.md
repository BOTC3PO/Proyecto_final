# Historia Profunda — Formación del sistema solar (cuestionario, 25 preguntas VBLang)

> Tema: `U5`. Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido a mano. Bugs de esta tanda: varias preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`); un
> `enunciado` con un operador ternario (`escenario_idx == 0 ? "x" :
> "y"`) interpolado directamente en el texto — no existe en el DSL,
> reescrito con la tabla `[opción, respuesta]` indexada por `idx`;
> una `respuesta:` que referenciaba una variable `tabla` nunca
> declarada — corregida; varias preguntas con **dos** blancos en el
> `enunciado` pero una sola parte de la `respuesta:` — recortadas a
> un solo blanco; `tipo:` entrecomillado en varios bloques — sin
> comillas.

---

### 1 — El origen de la materia

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["nube_molecular", "estrellas_previas"]

enunciado: "Antes de la formación del Sol, el sistema solar se originó a partir de una ___ de gas y polvo que contenía elementos pesados fabricados por estrellas anteriores."
respuestas_validas:
  - "nube molecular"
respuesta: "nube molecular"
tipo: completar

explicacion: |
  La materia que nos compone no es sólo hidrógeno y helio; contiene elementos más pesados (metales en astronomía) que fueron sintetizados en el núcleo de estrellas que existieron antes que nuestro Sol.
```

### 2 — El detonador estelar

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["supernova", "colapso"]

enunciado: "El colapso de la nube molecular que dio origen al sistema solar fue provocado por la onda de choque de una cercana ___."
respuestas_validas:
  - "supernova"
respuesta: "supernova"
tipo: completar

explicacion: |
  Una supernova es la explosión cataclísmica de una estrella masiva al final de su vida. La energía liberada puede comprimir una nube de gas cercana, iniciando el proceso de formación estelar.
```

### 3 — La fuerza dominante

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["gravedad", "colapso"]

enunciado: "Una vez que la nube molecular se comprimió, la ___ fue la fuerza principal que causó el colapso continuo hacia un centro común."
respuestas_validas:
  - "gravedad"
respuesta: "gravedad"
tipo: completar

explicacion: |
  La gravedad es la fuerza de atracción que hace que la materia se agrupe. A medida que la nube se hacía más densa, la atracción gravitatoria aumentaba, acelerando el colapso.
```

### 4 — El proceso de acumulación

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["acrecion", "planetesimales"]

enunciado: "Durante el proceso de formación, las partículas de polvo y hielo comenzaron a chocar y pegarse entre sí mediante un proceso llamado ___."
respuestas_validas:
  - "acreción"
  - "acrecion"
respuesta: "acreción"
tipo: completar

explicacion: |
  La acreción es el proceso de crecimiento de cuerpos celestes mediante la acumulación de material circundante. Así se formaron desde granos de polvo hasta planetesimales y, finalmente, planetas.
```

### 5 — El orden de los factores

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "avanzado"
  tags: ["secuencia", "colapso"]

enunciado: "En la secuencia lógica del origen de nuestro sistema solar, el evento astronómico que perturbó la nube molecular con su onda de choque fue una ___."
respuestas_validas:
  - "supernova"
respuesta: "supernova"
tipo: completar

explicacion: |
  El proceso es una reacción en cadena: la explosión (supernova) genera la perturbación necesaria para que la gravedad venza la presión interna de la nube y provoque el colapso.
```

### 6 — El origen de la masa solar

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["disco_protoplanetario", "sol"]

respuesta: "Sol"
tipo: completar
respuestas_validas:
  - "Sol"

enunciado: "Durante la formación del sistema solar, aproximadamente el 99% de la masa del disco protoplanetario se concentró en el centro para formar el ___."

explicacion: |
  La gran mayoría de la masa de la nebulosa solar colapsó hacia el centro gravitatorio, dando origen al Sol, mientras que el resto formó el disco de polvo y gas donde nacieron los planetas.
```

### 7 — Distribución de la masa en el sistema

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["masa", "distribucion"]

respuesta: "Sol"
tipo: mc
opciones_explicitas: ["Sol", "Planetas"]

enunciado: "Si analizamos la distribución de la masa en el sistema solar recién formado, ¿en qué cuerpo se concentró la mayor parte de la materia?"

explicacion: |
  El Sol contiene casi toda la masa del sistema, lo que explica su enorme influencia gravitatoria sobre el resto de los cuerpos.
```

### 8 — El gradiente de temperatura

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["temperatura", "condensacion"]

respuesta: "rocosos"
tipo: completar
respuestas_validas:
  - "rocosos"

enunciado: "Debido a la alta temperatura cerca del Sol, sólo los materiales con alto punto de fusión pudieron condensarse allí, dando lugar a la formación de planetas ___."

explicacion: |
  Cerca de la protoestrella, el calor era tan intenso que los elementos volátiles (gases y hielos) no podían permanecer en estado sólido, permitiendo sólo la acumulación de silicatos y metales.
```

### 9 — La línea de nieve y los gigantes gaseosos

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["gaseosos", "temperatura"]

respuesta: "lejos"
tipo: mc
opciones_explicitas: ["cerca", "lejos"]

enunciado: "Los planetas gaseosos (gigantes) se formaron en las regiones ___ del disco protoplanetario, donde las temperaturas eran lo suficientemente bajas para que los gases y el hielo se condensaran."

explicacion: |
  Más allá de la "línea de nieve", los materiales volátiles se volvieron sólidos, permitiendo que los núcleos planetarios crecieran lo suficiente como para capturar grandes cantidades de gas.
```

### 10 — Composición de los planetas

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["materiales", "condensacion"]

respuesta: "gaseosos"
tipo: completar
respuestas_validas:
  - "gaseosos"

enunciado: "Los planetas que pudieron retener grandes capas de hidrógeno y helio en su atmósfera debido a la baja temperatura en su zona de formación son los planetas ___."

explicacion: |
  La baja temperatura en el sistema solar externo permitió la condensación de hielos y la retención de gases ligeros, resultando en planetas de gran tamaño y composición gaseosa.
```

### 11 — El inicio de la acreción

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["acreción", "polvo_cósmico"]

respuesta: "polvo"
tipo: completar
respuestas_validas:
  - "polvo"

enunciado: "En las etapas iniciales de la formación del sistema solar, pequeñas partículas de ___ cósmico comenzaron a colisionar entre sí debido a la gravedad."

explicacion: |
  El proceso comenzó con partículas microscópicas de polvo y hielo que, al chocar, se adherían mediante fuerzas electrostáticas y luego gravitatorias.
```

### 12 — Formación de planetesimales

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["planetesimales", "gravedad"]

respuesta: "planetesimales"
tipo: completar
respuestas_validas:
  - "planetesimales"

enunciado: "Cuando las partículas de polvo crecen lo suficiente por acreción, forman objetos de mayor tamaño llamados ___."

explicacion: |
  Los planetesimales son los bloques de construcción fundamentales que, al agruparse, dan origen a los protoplanetas.
```

### 13 — La escala temporal

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["tiempo", "escala"]

respuesta: "millones"
tipo: completar
respuestas_validas:
  - "millones"

enunciado: "El proceso de acreción que transformó el disco protoplanetario en el sistema solar actual duró decenas de ___ de años."

explicacion: |
  La formación planetaria no es un evento instantáneo, sino un proceso que toma escalas de tiempo vastas.
```

### 14 — El orden de la acreción

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "avanzado"
  tags: ["secuencia", "acreción"]

respuesta_orden: ["polvo", "planetesimales", "protoplanetas", "planetas"]
tipo: ordenar
opciones_explicitas: ["polvo", "planetesimales", "protoplanetas", "planetas"]

enunciado: "Ordená cronológicamente las etapas de la formación de un planeta mediante el proceso de acreción:"

explicacion: |
  La jerarquía de la acreción va desde lo microscópico (polvo) hasta la consolidación de cuerpos masivos (planetas).
```

### 15 — El papel de la gravedad

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["gravedad", "colisión"]

respuesta: "acreción"
tipo: completar
respuestas_validas:
  - "acreción"
  - "acrecion"

enunciado: "El proceso físico mediante el cual la gravedad atrae materia para formar cuerpos cada vez más grandes se denomina ___."

explicacion: |
  La acreción es el mecanismo principal por el cual la materia se aglutina para formar estructuras planetarias.
```

### 16 — El cinturón de asteroides

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["asteroides", "marte", "jupiter"]

tipo: mc
opciones_explicitas: ["Entre la Tierra y Marte", "Entre Marte y Júpiter", "Más allá de Neptuno", "En el centro del Sol"]
respuesta: "Entre Marte y Júpiter"

enunciado: "¿Dónde se localiza principalmente el cinturón de asteroides, compuesto por restos rocosos que nunca llegaron a formar un planeta?"

explicacion: |
  El cinturón de asteroides se encuentra en el espacio situado entre las órbitas de Marte y Júpiter. Su presencia se debe a la enorme gravedad de Júpiter que impidió la formación de un planeta en esa zona.
```

### 17 — El origen de los cometas

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["cometas", "kuiper", "oort"]

respuesta: "Cinturón de Kuiper y Nube de Oort"
tipo: mc
opciones_explicitas: ["Cinturón de asteroides", "Cinturón de Kuiper y Nube de Oort", "El Sol", "La Luna"]

enunciado: "Los cometas que visitan el sistema solar interno provienen mayoritariamente de las regiones más externas, específicamente del ___."

explicacion: |
  Los cometas son cuerpos compuestos de hielo y polvo que provienen del cinturón de Kuiper (más allá de Neptuno) y de la nube de Oort (la región más externa y difusa del sistema solar).
```

### 18 — El cinturón de Kuiper

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["kuiper", "neptuno"]

tipo: vf
respuesta: verdadero

enunciado: "El cinturón de Kuiper se encuentra situado más allá de la órbita de Neptuno."

explicacion: |
  Correcto. El cinturón de Kuiper es una región de objetos helados que se extiende desde la órbita de Neptuno hacia el espacio exterior.
```

### 19 — La nube de Oort

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "avanzado"
  tags: ["oort", "cometas"]

tipo: mc
opciones_explicitas: ["Cinturón de asteroides", "Cinturón de Kuiper", "Nube de Oort", "Disco protoplanetario"]
respuesta: "Nube de Oort"

enunciado: "La región esférica y extremadamente lejana que rodea al sistema solar y que contiene una enorme cantidad de cometas de largo período se denomina:"

explicacion: |
  La nube de Oort es la frontera más externa del sistema solar, una zona teórica de objetos helados que orbitan muy lejos del Sol.
```

### 20 — Restos de la formación

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["planetas", "restos"]

tipo: vf
respuesta: falso

enunciado: "Los asteroides del cinturón principal son restos de gases que no pudieron condensarse debido al calor del Sol."

explicacion: |
  Falso. Los asteroides son restos de materiales rocosos y metálicos que no pudieron agruparse para formar un planeta debido a la perturbación gravitatoria de Júpiter.
```

### 21 — Clasificación por zona de formación

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "basico"
  tags: ["planetas", "distancia", "sol"]

variables:
  idx: uno_de([0, 1])
  escenario: [["zona interna", "rocoso"], ["zona externa", "gaseoso"]]

tipo: mc
opciones_explicitas: ["rocoso", "gaseoso"]
respuesta: escenario[idx][1]

enunciado: "En la fase de acreción del disco protoplanetario, los materiales en la {escenario[idx][0]} tienden a formar un planeta de tipo ___."

explicacion: |
  Cerca del Sol, el calor impide la condensación de gases y hielos, dejando sólo materiales con alto punto de fusión como silicatos y metales, formando planetas rocosos; lejos, ocurre lo contrario.
```

### 22 — Composición de los gigantes

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["gas", "hielo", "distancia"]

variables:
  idx: uno_de([0, 1])
  caso: [["Júpiter", "hidrógeno y helio"], ["Urano", "hielos y gases ligeros"]]

tipo: mc
opciones_explicitas: ["hidrógeno y helio", "hielos y gases ligeros", "roca y metal"]
respuesta: caso[idx][1]

enunciado: "Considerando la línea de congelación, un planeta como {caso[idx][0]} habrá acumulado principalmente ___."

explicacion: |
  Más allá de la línea de congelación, los volátiles (hielos) pueden condensarse, permitiendo que los núcleos crezcan lo suficiente para capturar grandes cantidades de gas.
```

### 23 — El límite de los materiales

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "avanzado"
  tags: ["materiales", "condensación"]

respuesta: "hielos volátiles"
tipo: completar
respuestas_validas:
  - "hielos volátiles"
  - "hielos volatiles"

enunciado: "Si la temperatura del disco protoplanetario permite la condensación de ___ en grandes cantidades, el planeta resultante será un gigante gaseoso."

explicacion: |
  La disponibilidad de materiales (hielos vs. silicatos) determina si el planeta será un mundo pequeño y denso o un gigante masivo.
```

### 24 — La línea de nieve

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "intermedio"
  tags: ["linea_nieve", "condensación"]

respuesta: "gaseoso"
tipo: mc
opciones_explicitas: ["rocoso", "gaseoso"]

enunciado: "Un objeto que se forma por encima de la línea de nieve tendrá una composición predominantemente ___."

explicacion: |
  La línea de nieve marca el punto donde los compuestos volátiles se congelan, cambiando drásticamente la masa disponible para la acreción.
```

### 25 — Determinante de masa

```
metadata:
  materia: "historia_profunda"
  tema: "formacion_del_sistema_solar"
  nivel: "avanzado"
  tags: ["acreción", "masa", "gas"]

respuesta: "gaseoso"
tipo: completar
respuestas_validas:
  - "gaseoso"

enunciado: "Si la acreción resulta en un núcleo de unas 10 masas terrestres, el planeta podrá capturar rápidamente la atmósfera del disco, resultando en un planeta ___."

explicacion: |
  Existe un umbral crítico de masa (aprox. 10 masas terrestres) que permite que la gravedad retenga el hidrógeno y el helio antes de que el viento solar los disperse.
```
