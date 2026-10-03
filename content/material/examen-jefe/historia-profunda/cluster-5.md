# Examen jefe — [PENDIENTE #685]

> Logro #685. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **123 preguntas totales** en 5/5 secciones.

---

## Sección: rocas-igneas-sedimentarias-metamorficas (23 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "basico"
  tags: ["geologia", "magma"]

tipo: mc
opciones_explicitas: ["Enfriamiento de magma o lava", "Acumulación de sedimentos", "Presión y temperatura extrema", "Evaporación de agua salada"]
respuesta: "Enfriamiento de magma o lava"

enunciado: "Las rocas ígneas se originan principalmente por el proceso de ___."

explicacion: |
  Las rocas ígneas se forman cuando el material fundido (magma si es intrusivo o lava si es extrusivo) se enfría y se solidifica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "basico"
  tags: ["granito", "basalto"]

variables:
  escenario: uno_de([["granito", "intrusiva"], ["basalto", "extrusiva"]])

tipo: completar
respuestas_validas:
  - "intrusiva"
  - "extrusiva"

enunciado: "Si el magma se enfría lentamente bajo la superficie terrestre, forma una roca de tipo {escenario[0]} y su clasificación es ___."

explicacion: |
  El {escenario[0]} es una roca ígnea {escenario[1]} porque se formó en el interior de la corteza.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "intermedio"
  tags: ["clasificacion"]

tipo: mc
opciones_explicitas: ["Granito y Basalto", "Caliza y Arenisca", "Mármol y Pizarra", "Granito y Caliza"]
respuesta: "Granito y Basalto"

enunciado: "¿Cuál de los siguientes pares de rocas son ejemplos de rocas ígneas?"

explicacion: |
  El granito es una roca ígnea intrusiva y el basalto es una roca ígnea extrusiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "basico"
  tags: ["magma", "lava"]

tipo: completar
enunciado: "Cuando el material fundido sale a la superficie terrestre, se denomina ___."
respuesta: "Lava"
explicacion: |
  El término magma se usa para el material fundido bajo la superficie, mientras que lava es el término para el material que ya ha emergido.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "avanzado"
  tags: ["textura", "enfriamiento"]

variables:
  caso: uno_de([["lento", "cristales grandes"], ["rápido", "cristales pequeños"]])

tipo: completar
respuestas_validas:
  - "cristales grandes"
  - "cristales pequeños"

enunciado: "Un enfriamiento de tipo {caso[0]} en el interior de la corteza produce rocas con ___."

explicacion: |
  El enfriamiento {caso[0]} permite que los minerales tengan tiempo de crecer, resultando en {caso[1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["sedimentarias", "procesos"]

tipo: mc
opciones_explicitas: ["Fragmentación de rocas ígneas", "Enfriamiento de magma", "Presión y calor extremo", "Sublimación de gases"]
respuesta: "Fragmentación de rocas ígneas"

enunciado: "Las rocas sedimentarias se forman principalmente a través del proceso de acumulación y compactación de ___."

explicacion: |
  Las rocas sedimentarias se originan por la acumulación de sedimentos (fragmentos de otras rocas, restos orgánicos o sales) que se depositan en capas y se compactan con el tiempo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["ejemplos", "sedimentarias"]

tipo: mc
opciones_explicitas: ["Arenisca y caliza", "Granito y basalto", "Mármol y pizarra", "Obsidiana y pumita"]
respuesta: "Arenisca y caliza"

enunciado: "Un ejemplo clásico de rocas que se forman por la acumulación de sedimentos es el par:"

explicacion: |
  La arenisca (formada por granos de arena) y la caliza (frecuentemente de origen orgánico o químico) son ejemplos fundamentales de rocas sedimentarias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["procesos", "compactacion"]

tipo: ordenar
opciones_explicitas: ["Meteorización y erosión", "Transporte de sedimentos", "Deposición en capas", "Litificación (compactación y cementación)"]

enunciado: "Ordena cronológicamente los pasos necesarios para la formación de una roca sedimentaria:"

explicacion: |
  Primero la roca madre se rompe (meteorización), los restos viajan (transporte), se asientan (deposición) y finalmente se transforman en roca sólida (litificación).
respuesta_orden: ["Meteorización y erosión", "Transporte de sedimentos", "Deposición en capas", "Litificación (compactación y cementación)"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["sedimentos", "composición"]

tipo: completar
respuestas_validas:
  - "restos orgánicos"

enunciado: "Además de fragmentos de otras rocas, las rocas sedimentarias pueden formarse por la acumulación de ___."

explicacion: |
  Los restos orgánicos (como conchas de animales o materia vegetal) son componentes esenciales que, al acumularse, dan lugar a rocas como la caliza.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["estratigrafia", "calculo"]

variables:
  espesor_capa: random_float(1.5, 5.5)
  cantidad_capas: 12
  espesor_total: espesor_capa * cantidad_capas

tipo: completar
tolerancia_abs: 0.1
respuesta: espesor_total

enunciado: "Si un afloramiento sedimentario presenta {cantidad_capas} capas, y cada capa tiene un espesor promedio de {espesor_capa} metros, ¿cuál es el espesor total del afloramiento en metros?"

pasos:
  - "Determinar el espesor de una capa: {espesor_capa}"
  - "Multiplicar el espesor por el número de capas: {espesor_capa} * {cantidad_capas}"

explicacion: |
  El espesor total se obtiene multiplicando el espesor de una capa individual por la cantidad total de capas depositadas.
```

```
metadata:
  materia: "geologia"
  tema: "rocas_metamorficas"
  nivel: "basico"
  tags: ["procesos", "calor", "presion"]

tipo: mc
opciones_explicitas: ["fundición completa de la roca", "transformación por calor y/o presión sin fundirse", "acumulación de sedimentos en el lecho marino", "enfriamiento de magma expuesto"]

enunciado: "Las rocas metamórficas se forman cuando una roca preexistente es sometida a condiciones de ___ sin llegar a fundirse."

respuesta: "transformación por calor y/o presión sin fundirse"

explicacion: |
  El metamorfismo es un proceso de transformación en estado sólido. Si la roca se fundiera, se convertiría en magma y daría lugar a una roca ígnea.
```

```
metadata:
  materia: "geologia"
  tema: "rocas_metamorficas"
  nivel: "basico"
  tags: ["marmol", "caliza", "transformacion"]

variables:
  datos: [["caliza", "mármol"], ["granito", "gneis"], ["arenisca", "cuarcita"]]
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas:
  - "mármol"
  - "gneis"
  - "cuarcita"

enunciado: "Cuando la roca ___ se somete a procesos metamórficos, se transforma en ___."

pasos:
  - "Identificar la roca sedimentaria original."
  - "Asociar su producto metamórfico correspondiente."

respuesta: datos[idx][1]

explicacion: |
  La caliza es una roca sedimentaria que, bajo presión y temperatura, se recristaliza para formar mármol.
```

```
metadata:
  materia: "geologia"
  tema: "rocas_metamorficas"
  nivel: "intermedio"
  tags: ["clasificacion", "origen"]

tipo: ordenar
opciones_explicitas: ["Magma", "Roca Ígnea", "Roca Sedimentaria", "Roca Metamórfica"]

enunciado: "Ordena el ciclo de formación de las rocas según su origen, desde el material fundido hasta la roca transformada por presión:"

respuesta_orden: ["Magma", "Roca Ígnea", "Roca Sedimentaria", "Roca Metamórfica"]

explicacion: |
  El ciclo comienza con el magma que al enfriarse crea rocas ígneas; estas pueden erosionarse en sedimentos (sedimentarias) y finalmente transformarse por presión en metamórficas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["fósiles", "sedimentarias"]

tipo: completar
enunciado: "Los fósiles se encuentran casi exclusivamente en un tipo de roca llamado ___."
respuesta: "Rocas sedimentarias"
explicacion: |
  Los fósiles requieren la acumulación de sedimentos que entierren la materia orgánica rápidamente. Las rocas ígneas y metamórficas implican procesos de calor y presión que destruyen los restos orgánicos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["procesos", "fósiles"]

tipo: mc
opciones_explicitas: ["Calor y presión", "Erosión y sedimentación", "Cristalización y enfriamiento"]
respuesta: "Calor y presión"

enunciado: "Las rocas ígneas y metamórficas suelen destruir la materia orgánica debido a la acción de:"

explicacion: |
  El calor extremo de la formación de rocas ígneas y la presión de las metamórficas descomponen o funden cualquier resto orgánico que pudiera existir.
```

```
metadata:
  materia: "historia_profucha"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "avanzado"
  tags: ["geologia", "fósiles"]

respuesta: "ígneas"
tipo: completar
respuestas_validas:
  - "ígneas"

enunciado: "Si un paleontólogo busca restos de un trilobita, lo hará en rocas de tipo sedimentarias. Si busca magma solidificado, lo hará en rocas ___."

pasos:
  - "Identificar el tipo de roca donde se preserva la vida."
  - "Identificar el origen de las rocas ígneas."

explicacion: |
  Los fósiles son indicadores de ambientes sedimentarios. Las rocas ígneas resultan de magma y las metamórficas de transformación por calor/presión.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["clasificacion"]

tipo: ordenar
opciones_explicitas: ["Sedimentación", "Litificación", "Fosilización"]

enunciado: "Ordena los pasos típicos para la formación de un fósil en una roca sedimentaria:"

explicacion: |
  Primero los restos se cubren con sedimentos (sedimentación), luego esos sedimentos se compactan (litificación) y finalmente se preservan los restos (fosilización).
respuesta_orden: ["Sedimentación", "Litificación", "Fosilización"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: falso

enunciado: "¿Es posible encontrar fósiles de plantas en una corriente de lava fresca?"

explicacion: |
  No, el calor extremo de la lava (roca ígnea) incineraría instantáneamente la materia orgánica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["clasificacion", "rocas"]

variables:
  datos: [["Magma enfriado lentamente bajo la superficie", "ignea"], ["Sedimentos compactados por presión", "sedimentaria"], ["Roca transformada por calor y presión", "metamorfica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ignea", "sedimentaria", "metamorfica"]

enunciado: "Se observa una roca cuya formación se describe como: {datos[idx][0]}. ¿A qué tipo de roca pertenece?"

explicacion: |
  Las rocas se clasifican según su origen: las ígneas vienen de magma, las sedimentarias de sedimentos y las metamórficas de transformación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["procesos", "geologia"]

variables:
  datos: [["Litificación de sedimentos", "sedimentaria"], ["Cristalización de lava", "ignea"], ["Recristalización mineral", "metamorfica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "sedimentaria"
  - "ignea"
  - "metamorfica"

enunciado: "El proceso observado es la {datos[idx][0]}. Por lo tanto, la roca es de tipo ___."

explicacion: |
  Cada proceso geológico es característico de un grupo de rocas específico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "avanzado"
  tags: ["textura", "clasificacion"]

variables:
  datos: [["presencia de fósiles", "sedimentaria"], ["textura afanítica", "ignea"], ["foliación marcada", "metamorfica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["sedimentaria", "ignea", "metamorfica"]

enunciado: "Una muestra presenta {datos[idx][0]}. Esto indica que es una roca ___."

explicacion: |
  La textura y la presencia de fósiles son indicadores clave del origen de la roca.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["ciclo_rocoso", "orden"]

tipo: ordenar
opciones_explicitas: ["Roca Ígnea", "Sedimento", "Roca Sedimentaria"]
respuesta_orden: ["Roca Ígnea", "Sedimento", "Roca Sedimentaria"]

enunciado: "Ordena los elementos según el proceso de formación de una roca sedimentaria a partir de material ígneo erosionado:"

explicacion: |
  El ciclo de las rocas implica la transformación constante de un tipo en otro: una roca ígnea expuesta en la superficie se erosiona en sedimentos, que luego se compactan y cementan para formar una roca sedimentaria.
```

```
metadata:
  materia: "historia_profucha"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["calor", "presion"]

variables:
  datos: [["fusión parcial", "ignea"], ["compactación", "sedimentaria"], ["reordenamiento atómico", "metamorfica"]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si una roca se forma por {datos[idx][0]}, su clasificación es ___."

explicacion: |
  La fusión produce magma (ígnea), la compactación produce sedimentaria y el reordenamiento por calor/presión produce metamórfica.
```

## Sección: procariotas (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "procariotas"
  nivel: "basico"
  tags: ["origen", "evolucion"]

respuesta: 3800000000
tipo: completar
tolerancia_abs: 100000000

enunciado: "Se estima que las primeras formas de vida procariota aparecieron hace aproximadamente ___ años."

explicacion: |
  Los registros fósiles y evidencia química sugieren que la vida procariota surgió hace unos 3800 millones de años.
```

```
metadata:
  materia: "biologia"
  tema: "procariotas"
  nivel: "basico"
  tags: ["estructura", "celula"]

opciones_explicitas: ["con núcleo definido y organelas", "sin núcleo definido ni organelas membranosas", "con núcleo definido pero sin organelas", "sin núcleo definido pero con organelas"]

respuesta: "sin núcleo definido ni organelas membranosas"
tipo: mc

enunciado: "Una característica fundamental que define a las células procariotas es que carecen de:"

explicacion: |
  A diferencia de las eucariotas, los procariotas no poseen un núcleo delimitado por una membrana ni organelas complejas como mitocondrias o cloroplastos.
```

```
metadata:
  materia: "biologia"
  tema: "procariotas"
  nivel: "intermedio"
  tags: ["clasificacion", "eucariotas"]

respuesta: "procariota"
tipo: completar
respuestas_validas:
  - "procariota"

enunciado: "Si observamos una célula que no posee un núcleo definido, estamos ante una célula de tipo ___."

explicacion: |
  La presencia o ausencia de un núcleo definido es el criterio principal para distinguir entre células procariotas y eucariotas.
```

```
metadata:
  materia: "biologia"
  tema: "procariotas"
  nivel: "basico"
  tags: ["evolucion", "orden"]

opciones_explicitas: ["Procariotas", "Eucariotas", "Multicelulares"]

respuesta_orden: ["Procariotas", "Eucariotas", "Multicelulares"]
tipo: ordenar

enunciado: "Ordena cronológicamente la aparición de las siguientes formas de vida, de la más antigua a la más reciente:"

explicacion: |
  La evolución biológica comenzó con organismos procariotas unicelulares, seguidos por células eucariotas más complejas y, finalmente, la vida multicelular.
```

```
metadata:
  materia: "biologia"
  tema: "procariotas"
  nivel: "basico"
  tags: ["estructura", "membranas"]

opciones_explicitas: ["Verdadero", "Falso"]

respuesta: "Verdadero"
tipo: mc

enunciado: "¿Es correcto afirmar que las células procariotas poseen organelas membranosas como el retículo endoplasmático?"

explicacion: |
  Es falso. Las organelas membranosas son una característica exclusiva de las células eucariotas.
```

```
metadata:
  materia: "biologia"
  tema: "dominios_procariotas"
  nivel: "basico"
  tags: ["biologia", "taxonomia", "procariotas"]

tipo: mc
opciones_explicitas: ["Bacterias y Arqueas", "Bacterias y Eucariotas", "Arqueas y Eucariotas", "Procariotas y Eucariotas"]
respuesta: "Bacterias y Arqueas"

enunciado: "Aunque ambos son organismos procariotas, la vida se divide en tres dominios. Los dos dominios que agrupan a los procariotas son ___ y ___."

explicacion: |
  Los procariotas se dividen en dos dominios distintos: Bacteria y Archaea. Aunque comparten la ausencia de núcleo, sus composiciones químicas y genéticas son muy diferentes.
```

```
metadata:
  materia: "biologia"
  tema: "bioquimica_celular"
  nivel: "intermedio"
  tags: ["membrana", "arqueas", "bacterias"]

variables:
  escenario: uno_de([["enlaces éter", "enlaces éster"], ["enlaces éster", "enlaces éter"]])

tipo: completar
respuestas_validas:
  - "enlaces éter"
  - "enlaces éster"

enunciado: "Una diferencia fundamental en la composición de la membrana plasmática es que las Arqueas poseen lípidos unidos por ___ , mientras que las Bacterias utilizan ___ ."

pasos:
  - "Identificar el tipo de enlace en Arqueas"
  - "Identificar el tipo de enlace en Bacterias"

explicacion: |
  Las Arqueas presentan enlaces éter en sus lípidos de membrana, lo que les otorga mayor estabilidad (especialmente en ambientes extremos), mientras que las Bacterias poseen enlaces éster.
```

```
metadata:
  materia: "biologia"
  tema: "genetica_procariota"
  nivel: "intermedio"
  tags: ["adn", "transcripcion", "arqueas"]

tipo: mc
opciones_explicitas: ["Más similar a las Eucariotas", "Más similar a las Bacterias", "No tiene similitudes con ningún dominio"]
respuesta: "Más similar a las Eucariotas"
enunciado: "A pesar de su morfología procariota, el proceso de transcripción y replicación del ADN en las Arqueas es molecularmente ___ ."
explicacion: |
  Aunque son procariotas, las Arqueas comparten maquinaria de replicación y transcripción mucho más cercana a la de las Eucariotas que a la de las Bacterias.
```

```
metadata:
  materia: "biologia"
  tema: "taxonomia_procariota"
  nivel: "basico"
  tags: ["clasificacion", "taxonomia"]

tipo: ordenar
opciones_explicitas: ["Dominio Bacteria", "Dominio Archaea", "Dominio Eukarya"]

enunciado: "Ordena los tres dominios de la vida de menor a mayor complejidad estructural (considerando la presencia de núcleo y organelos):"

explicacion: |
  El orden correcto es Bacteria y Archaea (ambos procariotas, sin núcleo) seguidos por Eukarya (eucariotas, con núcleo complejo).
respuesta_orden: ["Dominio Bacteria", "Dominio Archaea", "Dominio Eukarya"]
```

```
metadata:
  materia: "biologia"
  tema: "ecologia_microbiana"
  nivel: "avanzado"
  tags: ["arqueas", "extremofilos"]

variables:
  caso: uno_de([["un ambiente con pH extremo", "temperaturas de ebullición"], ["temperaturas de ebullición", "un ambiente con pH extremo"]])

tipo: completar
tolerancia_abs: 0

enunciado: "Si un organismo procariota es capaz de sobrevivir en {caso[0]}, es muy probable que pertenezca al dominio ___ ."

respuestas_validas:
  - "Archaea"
  - "Arqueas"

explicacion: |
  Las Arqueas son famosas por ser extremófilas, capaces de habitar en condiciones de salinidad, temperatura o pH que serían letales para la mayoría de las Bacterias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "procariotas"
  nivel: "basico"
  tags: ["estromatolitos", "cianobacterias", "fósiles"]

tipo: mc
opciones_explicitas: ["Estructuras minerales formadas por la actividad de colonias de microorganismos", "Restos fósiles de animales marinos del periodo Cámbrico", "Células procariotas individuales preservadas en ámbar", "Depósitos de azufre volcánico de origen abiótico"]
respuesta: "Estructuras minerales formadas por la actividad de colonias de microorganismos"

enunciado: "Los estromatolitos se definen como ___."

explicacion: |
  Los estromatolitos son estructuras sedimentarias compuestas por capas de carbonato de calcio, formadas por la actividad de comunidades de microorganismos, principalmente cianobacterias, que atrapan sedimentos y precipitan minerales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "procariotas"
  nivel: "intermedio"
  tags: ["evidencia", "fósiles", "precámbrico"]

respuesta: "Estructuras laminares de carbonato"
tipo: mc
opciones_explicitas: ["Estructuras laminares de carbonato", "Huellas de trilobites", "Fósiles de plantas vasculares", "Células con núcleo definido"]

enunciado: "En el registro fósil, ¿cuál es una de las principales evidencias de la existencia de vida procariota en la Tierra primitiva?"

pasos:
  - "Identificar el tipo de estructura fósil mencionada."
  - "Relacionar la estructura con el tipo de organismo que la originó."

explicacion: |
  Las estructuras laminares de carbonato (estromatolitos) son la evidencia más antigua de actividad biológica, indicando la presencia de organismos fotosintéticos en el Precámbrico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "procariotas"
  nivel: "intermedio"
  tags: ["fotosíntesis", "oxígeno", "atmósfera"]

tipo: completar
respuestas_validas:
  - "oxígeno"
  - "CO2"
  - "nitrógeno"

enunciado: "La actividad fotosintética de las cianobacterias en los estromatolitos fue responsable de la acumulación de ___ en la atmósfera primitiva."

explicacion: |
  La fotosíntesis oxigénica realizada por las cianobacterias permitió la Gran Oxidación, cambiando la composición química de la atmósfera terrestre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "procariotas"
  nivel: "avanzado"
  tags: ["cronología", "evolución", "estromatolitos"]

tipo: ordenar
opciones_explicitas: ["Aparición de vida procariota", "Formación de los primeros estromatolitos", "Gran Oxidación atmosférica", "Aparición de células eucariotas"]

enunciado: "Ordene cronológicamente los siguientes eventos en la historia de la vida procariota y la atmósfera:"

explicacion: |
  La secuencia correcta comienza con la vida procariota simple, seguida de la formación de estromatolitos que permitieron la fotosíntesis masiva, lo que llevó a la Gran Oxidación, permitiendo finalmente la evolución de células más complejas.
respuesta_orden: ["Aparición de vida procariota", "Formación de los primeros estromatolitos", "Gran Oxidación atmosférica", "Aparición de células eucariotas"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "procariotas"
  nivel: "intermedio"
  tags: ["composición", "biología", "geología"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si un estromatolito está compuesto por una matriz de carbonato de calcio y una capa de sedimentos, ¿cuántos componentes principales se mencionan en esta descripción simple? (Responda con el número entero)"

explicacion: |
  En la descripción se mencionan dos componentes: carbonato de calcio y sedimentos.

respuesta: 2
```

```
metadata:
  materia: "biologia"
  tema: "organización_celular"
  nivel: "basico"
  tags: ["procariota", "eucariota", "nucleo"]

respuesta: "sin núcleo"
tipo: completar
respuestas_validas:
  - "sin núcleo"
  - "sin nucleo"

enunciado: "La principal diferencia estructural es que una célula procariota se caracteriza por no poseer ___."

explicacion: |
  Las células procariotas carecen de una envoltura nuclear, por lo que su material genético se encuentra libre en el citoplasma (en una región llamada nucleoide).
```

```
metadata:
  materia: "biologia"
  tema: "organización_celular"
  nivel: "basico"
  tags: ["clasificacion", "eucariota", "procariota"]

respuesta: "eucariota"
tipo: mc
opciones_explicitas: ["procariota", "eucariota"]

enunciado: "Si observamos una célula con un núcleo definido y organelos membranosos, estamos ante una célula de tipo:"

explicacion: |
  Las células eucariotas (como las animales o vegetales) poseen un núcleo que contiene el ADN, a diferencia de las procariotas.
```

```
metadata:
  materia: "biologia"
  tema: "organización_celular"
  nivel: "intermedio"
  tags: ["organelos", "membranas", "procariota"]

respuesta: "menor complejidad"
tipo: mc
opciones_explicitas: ["mayor complejidad", "menor complejidad", "igual complejidad"]

enunciado: "En términos de organización interna y presencia de organelos membranosos, la célula procariota presenta una ___ en comparación con la eucariota."

explicacion: |
  Las procariotas son mucho más simples y no poseen organelos rodeados por membranas como mitocondrias o cloroplastos.
```

```
metadata:
  materia: "biologia"
  tema: "organización_celular"
  nivel: "intermedio"
  tags: ["evolucion", "orden", "estructuras"]

respuesta_orden: ["nucleoide", "citoplasma", "membrana"]
tipo: ordenar
opciones_explicitas: ["nucleoide", "citoplasma", "membrana"]

enunciado: "Ordena las estructuras de una célula procariota desde el área donde se encuentra el material genético hacia el límite externo de la célula:"

explicacion: |
  En una procariota, el ADN está en el nucleoide, rodeado por el citoplasma, y todo está contenido por la membrana plasmática.
```

```
metadata:
  materia: "biologia"
  tema: "organización_celular"
  nivel: "avanzado"
  tags: ["diagnostico", "nucleo", "organelos"]

variables:
  caso: uno_de([["tiene núcleo", "eucariota"], ["no tiene núcleo", "procariota"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

enunciado: "Si al analizar una muestra celular se determina que la célula {caso[0]}, su clasificación es:"

explicacion: |
  La presencia o ausencia de un núcleo definido es el criterio fundamental para distinguir entre procariotas y eucariotas.
```

```
metadata:
  materia: "biologia"
  tema: "clasificacion_celular"
  nivel: "basico"
  tags: ["procariotas", "eucariotas"]

variables:
  datos: [["Bacillus subtilis", "procariota"], ["Saccharomyces cerevisiae", "eucariota"], ["Escherichia coli", "procariota"]]
  idx: uno_de([0, 1, 2])

enunciado: "El organismo {datos[idx][0]} presenta una organización celular caracterizada por ser {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["procariota", "eucariota"]

explicacion: |
  Los organismos procariotas carecen de un núcleo definido, mientras que los eucariotas poseen un núcleo rodeado por una membrana.
```

```
metadata:
  materia: "biologia"
  tema: "estructura_celular"
  nivel: "intermedio"
  tags: ["adn", "nucleo"]

variables:
  datos: [["ADN circular libre en el citoplasma", "procariota"], ["ADN lineal dentro de un núcleo", "eucariota"]]
  idx: uno_de([0, 1])

enunciado: "Si observamos un organismo cuyo material genético es {datos[idx][0]}, podemos clasificarlo como un organismo ___."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "procariota"
  - "eucariota"

explicacion: |
  La presencia de un núcleo con ADN lineal es la característica distintiva de las células eucariotas.
```

```
metadata:
  materia: "biologia"
  tema: "organelos"
  nivel: "basico"
  tags: ["organelos", "mitocondria"]

variables:
  datos: [["presencia de mitocondrias", "eucariota"], ["ausencia de organelos membranosos", "procariota"]]
  idx: uno_de([0, 1])

enunciado: "La {datos[idx][0]} es un indicador de que la célula es de tipo ___."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

explicacion: |
  Las células procariotas no poseen organelos rodeados por membranas como las mitocondrias o el retículo endoplasmático.
```

```
metadata:
  materia: "biologia"
  tema: "morfologia_celular"
  nivel: "basico"
  tags: ["tamaño", "complejidad"]

variables:
  datos: [["1.0 micrometros", "procariota"], ["100 micrometros", "eucariota"]]
  idx: uno_de([0, 1])

enunciado: "Un organismo con un diámetro de {datos[idx][0]} suele ser un organismo ___."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "procariota"
  - "eucariota"

explicacion: |
  Las células procariotas son generalmente mucho más pequeñas (1-5 µm) que las eucariotas (10-100 µm).
```

```
metadata:
  materia: "biologia"
  tema: "evolucion_celular"
  nivel: "avanzado"
  tags: ["evolucion", "linajes"]

enunciado: "Ordena los niveles de complejidad biológica desde el más simple al más complejo según la escala evolutiva:"

respuesta_orden: ["Procariota", "Eucariota", "Multicelularidad"]
tipo: ordenar
opciones_explicitas: ["Procariota", "Eucariota", "Multicelularidad"]

explicacion: |
  La evolución biológica muestra una progresión desde células simples sin núcleo (procariotas) hacia células complejas (eucariotas) y finalmente organismos multicelulares.
```

## Sección: tiempo-geologico-eones-eras-periodos (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["jerarquia", "escala_temporal"]

tipo: mc
opciones_explicitas: ["Eón > Era > Período > Época", "Época > Período > Era > Eón", "Eón > Período > Era > Época", "Era > Eón > Época > Período"]
respuesta: "Eón > Era > Período > Época"

enunciado: "La escala de tiempo geológico es una estructura jerárquica. ¿Cuál de las siguientes secuencias representa correctamente el orden de mayor a menor duración?"

explicacion: |
  La escala geológica se organiza de lo macro a lo micro: los Eones son los bloques más grandes, que se dividen en Eras, estas en Períodos y estos en Épocas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["orden", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Eón", "Era", "Período", "Época"]
respuesta_orden: ["Eón", "Era", "Período", "Época"]

enunciado: "Ordena las siguientes unidades de tiempo geológico de la más extensa (mayor duración) a la más breve (menor duración)."

explicacion: |
  La jerarquía correcta es: Eón (la unidad más grande), seguido de la Era, el Período y finalmente la Época.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["jerarquia", "terminologia"]

tipo: mc
opciones_explicitas: ["Período", "Época", "Eón", "Era"]
respuesta: "Período"

enunciado: "Si nos encontramos dentro de una Era geológica, la unidad de tiempo inmediatamente más pequeña que ella es un ___."

explicacion: |
  La estructura es: Eón $\rightarrow$ Era $\rightarrow$ Período $\rightarrow$ Época. Por lo tanto, después de una Era sigue un Período.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["completar", "jerarquia"]

tipo: completar
respuestas_validas:
  - "Período"
  - "Época"
respuesta: "Período"

enunciado: "En la jerarquía temporal, un Eón se divide en Eras, y una Era se divide en ___."

explicacion: |
  La división directa de una Era es el Período.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "avanzado"
  tags: ["logica", "jerarquia"]

tipo: vf

enunciado: "Considerando la jerarquía geológica, un Período es una subdivisión de una Época. ¿Es esto correcto?"

respuesta: falso

explicacion: |
  Es falso. Es al revés: una Época es una subdivisión de un Período. El Período es la unidad mayor.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["precambrico", "eones", "geologia"]

respuesta: "88%"
tipo: completar
respuestas_validas:
  - "88%"
  - "ochenta y ocho por ciento"

enunciado: "El Precámbrico, que abarca desde la formación de la Tierra hasta la aparición de organismos complejos, representa aproximadamente el ___ de la historia geológica del planeta."

explicacion: |
  El Precámbrico es un término que agrupa los eones Hadeico, Arcaico y Proterozoico. Aunque constituye la gran mayoría del tiempo terrestre, su registro es escaso debido a la falta de fósiles de partes duras (conchas, huesos) en esa época.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["eones", "precambrico"]

variables:
  escenario: uno_de([["Hadeico", "formación de la Tierra y bombardeo intenso"], ["Arcaico", "aparición de las primeras células procariontes"], ["Proterozoico", "oxigenación de la atmósfera y células eucariotas"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["formación de la Tierra y bombardeo intenso", "aparición de las primeras células procariontes", "oxigenación de la atmósfera y células eucariotas"]

enunciado: "Si nos situamos en el eón {escenario[0]}, ¿cuál fue el evento característico de ese periodo?"

explicacion: |
  El eón {escenario[0]} se caracteriza por {escenario[1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["orden_cronologico", "eones"]

respuesta_orden: ["Hadeico", "Arcaico", "Proterozoico"]
tipo: ordenar
opciones_explicitas: ["Hadeico", "Arcaico", "Proterozoico"]

enunciado: "Ordena cronológicamente, desde el más antiguo al más reciente, los tres eones que conforman el Precámbrico:"

explicacion: |
  La secuencia correcta es Hadeico (formación), seguido del Arcaico (vida unicelular) y finalmente el Proterozoico (mayor complejidad y oxígeno).
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["paleontologia", "precambrico"]

respuesta: "fósiles complejos"
tipo: completar
respuestas_validas:
  - "fósiles complejos"
  - "restos de organismos complejos"

enunciado: "Una de las razones por las cuales el Precámbrico suele ser menos detallado en los libros de texto es la escasez de ___."

explicacion: |
  Durante la mayor parte del Precámbrico, la vida estaba compuesta por organismos microscópicos o blandos que no dejaban huellas fósiles fácilmente preservables, a diferencia de la era Paleozoica en adelante.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "avanzado"
  tags: ["oxigeno", "proterozoico"]

respuesta: "Oxigenación de la atmósfera"
tipo: mc
opciones_explicitas: ["Oxigenación de la atmósfera", "Aparición de la fotosíntesis oxigénica", "Condensación de la corteza terrestre"]

enunciado: "¿Cuál es el evento que constituye el hito fundamental que define al eón Proterozoico?"

explicacion: |
  Aunque la fotosíntesis comenzó antes, la acumulación masiva de oxígeno (Gran Evento de Oxidación) es el rasgo distintivo del Proterozoico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["extincion", "permo_trias"]

respuesta: "extincion_masiva"
tipo: "mc"
opciones_explicitas: ["cambio_climatico", "extincion_masiva", "formacion_continentes", "tectonica_de_placas"]

enunciado: "Los límites entre eras y periodos geológicos suelen estar marcados por eventos de ___ que provocan cambios drásticos en el registro fósil."

explicacion: |
  La mayoría de los límites geológicos importantes (como el del Pérmico-Triásico) se definen por la desaparición repentina de grandes grupos de organismos en el registro fósil.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["cretacico_paleogeno", "asteroide"]

variables:
  escenario: uno_de([["Cretácico-Paleógeno", "impacto de asteroide"], ["Pérmico-Triásico", "erupciones masivas"]])

respuesta: escenario[1]
tipo: "completar"
respuestas_validas:
  - "impacto de asteroide"
  - "erupciones masivas"

enunciado: "El límite entre el periodo {escenario[0]} y el Paleógeno se asocia comúnmente con un ___."

explicacion: |
  El impacto del asteroide Chicxulub causó la extinción masiva que terminó con la era de los dinosaurios al final del Cretácico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "avanzado"
  tags: ["ordenar", "era_mesozoica"]

tipo: ordenar
opciones_explicitas: ["Triásico", "Jurásico", "Cretácico"]
respuesta_orden: ["Triásico", "Jurásico", "Cretácico"]

enunciado: "Ordena cronológicamente los periodos que conforman la Era Mesozoica, desde el más antiguo al más reciente."

explicacion: |
  La Era Mesozoica se divide en los periodos Triásico, Jurásico y Cretácico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["permo_trias", "extincion"]

respuesta: "Triásico"
tipo: "completar"
respuestas_validas:
  - "Triásico"
  - "Jurásico"
  - "Cretácico"

enunciado: "La mayor extinción masiva de la historia de la Tierra ocurrió al final del periodo Pérmico, marcando el inicio del periodo ___."

explicacion: |
  La extinción del Pérmico-Triásico es conocida como 'La Gran Mortandad' y dio inicio a la era de los dinosaurios.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["geologia", "fosil"]

respuesta: verdadero
tipo: vf

enunciado: "Un cambio abrupto en la abundancia de fósiles en un estrato suele indicar que se está cruzando un límite de un periodo o era geológica. ¿Es esto correcto?"

explicacion: |
  Los límites de las unidades geológicas se definen precisamente por estos cambios abruptos en la fauna y flora fósil, muchas veces asociados a eventos de extinción masiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["paleozoico", "fanerozoico"]

tipo: mc
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "El eón Fanerozoico se divide en tres eras principales. ¿Cuál es la primera era de este eón, caracterizada por la 'explosión de vida' en los mares?"

respuesta: "Paleozoico"

explicacion: |
  El Fanerozoico comenzó hace unos 541 millones de años con la era Paleozoica, donde la vida diversificó su complejidad de forma masiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["mesozoico", "dinosaurios"]

tipo: mc
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "La era conocida como la 'Edad de los Reptiles' o de los dinosaurios es el ________."

respuesta: "Mesozoico"

explicacion: |
  El Mesozoico es la era intermedia del Fanerozoico, donde predominaron los dinosaurios y los primeros mamíferos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["orden_cronologico", "fanerozoico"]

tipo: ordenar
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "Ordena cronológicamente las tres eras del eón Fanerozoico, desde la más antigua a la más reciente:"

respuesta_orden: ["Paleozoico", "Mesozoico", "Cenozoico"]

explicacion: |
  La secuencia correcta es Paleozoico (vida antigua), Mesozoico (vida media) y Cenozoico (vida reciente).
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["cenozoico", "actualidad"]

tipo: completar
respuestas_validas:
  - "Cenozoico"

enunciado: "La era geológica en la que vivimos actualmente, marcada por la dominancia de los mamíferos, es el ________."

respuesta: "Cenozoico"

explicacion: |
  El Cenozoico comenzó tras la extinción masiva al final del Mesozoico y es la era actual.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["fanerozoico", "clasificacion"]

tipo: mc
opciones_explicitas: ["Mesozoico", "Paleozoico", "Cenozoico"]

enunciado: "Si estamos hablando de la era que precede al Cenozoico, ¿a qué era nos referimos?"

respuesta: "Mesozoico"

explicacion: |
  El Cenozoico es la era actual; la era inmediatamente anterior fue el Mesozoico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["paleontologia", "cambrian"]

variables:
  datos: [["Explosión Cámbrica", "Paleozoico"], ["Extinción masiva del Permo-Triásico", "Mesozoico"], ["Aparición de los mamíferos", "Cenozoico"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "El evento conocido como la {datos[idx][0]} marcó un hito evolutivo fundamental. ¿A qué era geológica pertenece este evento?"

explicacion: |
  El evento {datos[idx][0]} ocurrió durante la era {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["dinosaurios", "mesozoico"]

variables:
  datos: [["dominio de los dinosaurios", "Mesozoico"], ["aparición de las plantas terrestres", "Paleozoico"], ["formación de la Luna", "Hadeano"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Mesozoico"
  - "Paleozoico"
  - "Hadeano"

enunciado: "El periodo caracterizado por el {datos[idx][0]} se sitúa en la era ___."

explicacion: |
  La era correspondiente al {datos[idx][0]} es la era {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "avanzado"
  tags: ["cronologia", "geologia"]

tipo: ordenar
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]
respuesta_orden: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "Ordena las siguientes eras desde la más antigua a la más reciente según la cronología geológica estándar."

explicacion: |
  El orden correcto de las eras es: Paleozoico, Mesozoico y Cenozoico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["precambrico", "vida"]

variables:
  datos: [["aparición de las primeras células procariotas", "Precámbrico"], ["aparición de los primeros animales complejos", "Paleozoico"], ["extinción de los dinosaurios", "Mesozoico"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Precámbrico", "Paleozoico", "Mesozoico"]

enunciado: "La {datos[idx][0]} tuvo lugar durante el eón ___."

explicacion: |
  La {datos[idx][0]} es un evento característico del eón {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["mamiferos", "cenozoico"]

variables:
  datos: [["dominio de los mamíferos", "Cenozoico"], ["dominio de los reptiles", "Mesozoico"], ["dominio de los peces", "Paleozoico"]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar

enunciado: "El {datos[idx][0]} es un evento que define la era ___."

explicacion: |
  La era correcta es la {datos[idx][1]}.
```

## Sección: gran-oxidacion (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["biologia", "atmosfera"]

tipo: mc
opciones_explicitas: ["Cianobacterias", "Dinosaurios", "Volcanes", "Asteroides"]
respuesta: "Cianobacterias"

enunciado: "La Gran Oxidación fue causada por la actividad de un grupo de organismos fotosintéticos conocidos como ___."

explicacion: |
  Las cianobacterias fueron los primeros organismos capaces de realizar la fotosíntesis oxigénica, liberando oxígeno como subproducto.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["geologia", "quimica"]

tipo: mc
opciones_explicitas: ["reaccionó con el hierro disuelto en los océanos", "se acumuló rápidamente en la atmósfera"]

enunciado: "Durante el inicio de la Gran Oxidación, el oxígeno liberado no fue a la atmósfera inmediatamente. ¿Qué sucedió primero con él?"

respuesta: "reaccionó con el hierro disuelto en los océanos"

explicacion: |
  Antes de que el oxígeno se acumulara en la atmósfera, reaccionó con el hierro disuelto en los océanos, depositándolo en el fondo marino como hierro bandeado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["clima", "extincion"]

tipo: completar
respuestas_validas:
  - "Glaciación"
  - "calentamiento"

enunciado: "La acumulación de oxígeno en la atmósfera provocó la oxidación del metano (un potente gas de efecto invernadero), lo que derivó en una de las mayores ___ de la historia de la Tierra."

explicacion: |
  La reducción de gases de efecto invernadero como el metano provocó un enfriamiento global extremo, conocido como la Glaciación Huronesiana.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["cronologia"]

tipo: ordenar
opciones_explicitas: ["Fotosíntesis oxigénica", "Oxidación de hierro disuelto", "Acumulación de O2 atmosférico", "Glaciación global"]

enunciado: "Ordena cronológicamente los eventos que caracterizaron el periodo de la Gran Oxidación:"

explicacion: |
  Primero surge la fotosíntesis, luego el oxígeno reacciona con el hierro (BIF), luego el oxígeno llega a la atmósfera y finalmente causa el enfriamiento global.
respuesta_orden: ["Fotosíntesis oxigénica", "Oxidación de hierro disuelto", "Acumulación de O2 atmosférico", "Glaciación global"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["atmosfera"]

tipo: completar
tolerancia_abs: 0

enunciado: "Antes de la Gran Oxidación, la atmósfera terrestre era predominantemente ________ (escribe 'anóxica' o 'rica' según corresponda)."

respuesta: "anóxica"

explicacion: |
  La atmósfera primordial era anóxica, es decir, carecía de niveles significativos de oxígeno libre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["extincion", "oxigeno", "anaerobico"]

respuesta: "extinción masiva"
tipo: completar
respuestas_validas:
  - "extinción masiva"

enunciado: "El aumento repentino de oxígeno en la atmósfera terrestre durante la Gran Oxidación es considerado la primera ___ de la historia."

explicacion: |
  La acumulación de oxígeno, producto de la fotosíntesis oxigénica, fue letal para la mayoría de los organismos anaeróbicos que dominaban la Tierra primitiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["anaerobico", "oxigeno"]

tipo: mc
opciones_explicitas: ["anaeróbicos", "aeróbicos", "fotosintéticos", "eucariotas"]
respuesta: "anaeróbicos"

enunciado: "Antes de la Gran Oxidación, la atmósfera era rica en gases reductores. ¿Qué tipo de organismos dominaba la vida en ese entonces?"

explicacion: |
  Los organismos anaeróbicos no poseen mecanismos para neutralizar el oxígeno, por lo que este actuó como un veneno oxidante para ellos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["fotosintesis", "cianobacterias"]

respuesta: "cianobacterias"
tipo: mc
opciones_explicitas: ["cianobacterias", "volcanes", "asteroides", "metano"]

enunciado: "La principal causa biológica del aumento de oxígeno atmosférico fue la aparición de las:"

explicacion: |
  Las cianobacterias desarrollaron la fotosíntesis oxigénica, liberando oxígeno como subproducto, lo que alteró la química global del planeta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["secuencia", "oxigeno", "vida"]

tipo: ordenar
respuesta_orden: ["producción de oxígeno", "acumulación de oxígeno", "extinción de anaerobios", "aparición de la vida aeróbica"]
opciones_explicitas: ["producción de oxígeno", "acumulación de oxígeno", "extinción de anaerobios", "aparición de la vida aeróbica"]

enunciado: "Ordena cronológicamente los eventos que caracterizaron la Gran Oxidación:"

explicacion: |
  Primero se produjo el oxígeno, luego se acumuló en la atmósfera tras saturar los sumideros químicos, provocando la muerte masiva de anaerobios y permitiendo finalmente la evolución de la respiración aeróbica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["quimica_atmosferica", "oxigeno"]

respuesta: "tóxico"
tipo: mc
opciones_explicitas: ["tóxico", "vital", "neutro", "incoloro"]

enunciado: "Para la vida predominante en el Arcaico, el oxígeno atmosférico no era un elemento vital, sino un agente ___."

explicacion: |
  Debido a la ausencia de enzimas antioxidantes en los organismos de la época, el oxígeno libre causaba daños oxidativos letales en sus estructuras celulares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["evolucion", "oxigeno"]

respuesta: "aeróbicos"
tipo: completar
respuestas_validas:
  - "aeróbicos"

enunciado: "La acumulación de oxígeno en la atmósfera tras la Gran Oxidación permitió la evolución de organismos de tipo ___."

explicacion: |
  La presencia de oxígeno libre permitió que los organismos desarrollaran la respiración aeróbica, un proceso mucho más eficiente para obtener energía que la fermentación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["complejidad", "oxigeno"]

opciones_explicitas: ["Organismos unicelulares simples", "Formas de vida más complejas y de mayor tamaño", "Vida basada exclusivamente en el metano", "Ausencia total de vida orgánica"]

respuesta: "Formas de vida más complejas y de mayor tamaño"
tipo: mc

enunciado: "El oxígeno liberado durante la Gran Oxidación sentó las bases para el surgimiento de:"

explicacion: |
  Al ser la respiración aeróbica mucho más eficiente energéticamente, permitió que los organismos tuvieran el excedente de energía necesario para mantener estructuras corporales más grandes y complejas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["metabolismo", "oxigeno"]

respuesta: "Aumento de la eficiencia energética"
tipo: mc
opciones_explicitas: ["Limitación energética", "Aumento de la eficiencia energética", "Reducción del tamaño celular", "Extinción de la vida multicelular"]

enunciado: "Considerando el impacto metabólico de la Gran Oxidación, ¿qué efecto tuvo el oxígeno sobre el metabolismo de los organismos que pudieron utilizarlo?"

pasos:
  - "Analizar la diferencia entre metabolismo anaeróbico y aeróbico."
  - "Relacionar la eficiencia energética con el tamaño del organismo."

explicacion: |
  La oxidación de la glucosa en presencia de oxígeno produce muchísima más energía (ATP) que los procesos anaeróbicos, permitiendo la multicelularidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

opciones_explicitas: ["Producción de oxígeno", "Acumulación de oxígeno en la atmósfera", "Evolución de organismos aeróbicos", "Aparición de vida compleja"]

respuesta_orden: ["Producción de oxígeno", "Acumulación de oxígeno en la atmósfera", "Evolución de organismos aeróbicos", "Aparición de vida compleja"]
tipo: ordenar

enunciado: "Ordena cronológicamente los eventos derivados de la actividad de los cianobacterias:"

explicacion: |
  Primero se produce el oxígeno por fotosíntesis, luego este se acumula en la atmósfera al saturarse los sumideros químicos, lo que permite la respiración aeróbica y finalmente la complejidad biológica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["atmosfera", "oxigeno"]

respuesta: "oxígeno"
tipo: completar
respuestas_validas:
  - "oxígeno"

enunciado: "El gas liberado masivamente que transformó la química de la Tierra fue el ___."

explicacion: |
  La liberación de oxígeno por parte de los organismos fotosintéticos cambió la composición química de la atmósfera primitiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["geologia", "oxigeno"]

tipo: mc
opciones_explicitas: ["Formaciones de hierro bandeado (BIF)", "Capas de esquisto negro", "Depósitos de carbón", "Calizas de magnesio"]
respuesta: "Formaciones de hierro bandeado (BIF)"

enunciado: "¿En qué evidencias geológicas se manifiestan principalmente los efectos de la Gran Oxidación?"

explicacion: |
  Las Formaciones de Hierro Bandeado (BIF, por sus siglas en inglés) son capas de roca ricas en óxidos de hierro que se depositaron cuando el oxígeno liberado por la fotosíntesis reaccionó con el hierro disuelto en los océanos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["quimica_prebiotica", "oceanos"]

tipo: completar
respuestas_validas:
  - "hierro disuelto"

enunciado: "Durante la Gran Oxidación, el ___ en los océanos reaccionó con el oxígeno molecular, provocando su precipitación en el fondo marino."

explicacion: |
  El hierro estaba disuelto en los océanos en forma de Fe(II). Al aparecer el oxígeno (O2), este oxidó el hierro a Fe(III), el cual es insoluble y precipitó como óxido de hierro.
```

```
metadata:
  materia: "historia_profucha"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["secuencia", "geologia"]

tipo: ordenar
opciones_explicitas: ["Producción de O2 por cianobacterias", "Oxidación de hierro disuelto en el océano", "Precipitación de óxidos de hierro (BIF)", "Aumento de la oxigenación atmosférica"]

enunciado: "Ordena cronológicamente los eventos que llevaron a la formación de los depósitos de hierro bandeado y la oxigenación atmosférica:"

explicacion: |
  Primero la vida fotosintética produce oxígeno; luego este oxida el hierro disponible en el agua; esto genera los depósitos BIF; finalmente, una vez saturado el sumidero de hierro, el oxígeno comienza a acumularse en la atmósfera.
respuesta_orden: ["Producción de O2 por cianobacterias", "Oxidación de hierro disuelto en el océano", "Precipitación de óxidos de hierro (BIF)", "Aumento de la oxigenación atmosférica"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["sumideros", "oxigeno"]

tipo: vf

enunciado: "La formación de las BIF actuó como un 'sumidero' que retrasó la acumulación masiva de oxígeno en la atmósfera durante millones de años."

respuesta: verdadero

explicacion: |
  Verdadero. El oxígeno producido se consumía rápidamente oxidando el hierro y otros compuestos en el océano antes de poder escapar a la atmósfera.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["geoquimica", "oxigeno"]

tipo: completar
tolerancia_abs: 0.001

enunciado: "Si la concentración de oxígeno en el océano es de 0.02 moles/m³ y el umbral de saturación de los sumideros de hierro es de 0.05 moles/m³, ¿cuál es la diferencia respecto al umbral?"

pasos:
  - "Calcular la diferencia absoluta entre el umbral y la concentración actual."

explicacion: |
  La diferencia es el margen que faltaba para que el oxígeno comenzara a acumularse en la atmósfera tras saturar los sumideros químicos: 0.05 - 0.02 = 0.03 moles/m³.

respuesta: 0.03
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["biologia", "atmosfera"]

enunciado: "El evento conocido como la Gran Oxidación fue impulsado por la aparición de organismos capaces de realizar la fotosíntesis."

respuesta: "fotosíntesis"
tipo: mc
opciones_explicitas: ["fotosíntesis", "quimiosíntesis", "respiración", "fermentación"]

explicacion: |
  Las cianobacterias fueron los primeros organismos en desarrollar la fotosíntesis oxigénica, liberando oxígeno como subproducto.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["quimica", "oxigeno"]

enunciado: "La acumulación de oxígeno en la atmósfera provocó la ___ de gases reductores como el metano."

respuesta: "oxidación de metano"
tipo: completar
respuestas_validas:
  - "oxidación de metano"

explicacion: |
  El oxígeno atmosférico reaccionó con el metano (un gas de efecto invernadero), alterando la química global.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["extincion", "biologia"]

enunciado: "Para los organismos anaerobios de la época, el aumento de oxígeno en la atmósfera representó una ___."

respuesta: "extinción masiva"
tipo: mc
opciones_explicitas: ["extinción masiva", "explosión de vida", "estabilidad climática", "mutación acelerada"]

explicacion: |
  El oxígeno era tóxico para la mayoría de las formas de vida predominantes en ese entonces, causando una extinción masiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["secuencia", "procesos"]

variables:
  pasos_correctos: ["Fotosíntesis oxigénica", "Saturación de sumideros de hierro", "Liberación de O2 a la atmósfera"]

enunciado: "Ordene los eventos que llevaron a la Gran Oxidación:"

respuesta_orden: ["Fotosíntesis oxigénica", "Saturación de sumideros de hierro", "Liberación de O2 a la atmósfera"]
tipo: ordenar
opciones_explicitas: ["Fotosíntesis oxigénica", "Saturación de sumideros de hierro", "Liberación de O2 a la atmósfera"]

explicacion: |
  Primero se produjo el oxígeno, luego este fue absorbido por minerales (hierro) y finalmente se acumuló en la atmósfera.
```

```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["quimica", "atmosfera"]

enunciado: "La transición de una atmósfera reductora a una oxidante fue causada por la liberación de oxígeno, que actuó como un potente ___."

respuesta: "oxidante"
tipo: completar
respuestas_validas:
  - "oxidante"

explicacion: |
  El oxígeno es un agente oxidante fuerte que cambió radicalmente el potencial redox de la atmósfera terrestre.
```

## Sección: datacion-radiometrica (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["isótopos", "desintegración", "conceptos"]

respuesta: "vida media"
tipo: completar

enunciado: "El tiempo necesario para que la mitad de los núcleos de un isótopo radiactivo se desintegren se denomina ___."

respuestas_validas:
  - "vida media"

explicacion: |
  La vida media (o periodo de semidesintegración) es el tiempo constante en el que la cantidad de un isótopo radiactivo se reduce a la mitad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["calculo", "isótopos", "tiempo"]

variables:
  idx: uno_de([0, 1])
  datos: [["Carbono-14", 5730], ["Potasio-40", 1250000000]]

respuesta: "0.5"
tipo: mc
opciones_explicitas: ["0.5", "0.25", "0.125", "0.0625"]

enunciado: "Si un isótopo tiene una vida media de {datos[idx][1]} años, ¿qué fracción de la muestra original de {datos[idx][0]} restará exactamente después de una vida media?"

explicacion: |
  Por definición, tras transcurrir un periodo de vida media, la cantidad de la sustancia original se reduce exactamente a la mitad (0.5) de su valor inicial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["calculo", "logaritmos", "geocronologia"]

variables:
  idx: uno_de([0, 1])
  escenario: [["200", "0.25", 2], ["400", "0.0625", 4]]

respuesta: escenario[idx][0]
tipo: completar
tolerancia_abs: 0.1

enunciado: "Se analiza una muestra donde la fracción del isótopo original remanente es de {escenario[idx][1]}. Si se sabe que han pasado {escenario[idx][2]} vidas medias, ¿cuál es la edad de la muestra en años (asumiendo una vida media de 100 años para este ejemplo hipotético)?"

pasos:
  - "Identificar la fracción remanente."
  - "Determinar cuántos periodos de vida media han pasado."
  - "Multiplicar el número de periodos por la duración de la vida media."

explicacion: |
  Si la fracción es 0.25 y han pasado 2 periodos (en el caso 1), la edad es 2 * 100 = 200. En el caso 2, con fracción 0.0625 y 4 periodos, la edad es 4 * 100 = 400.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["secuencia", "isótopos"]

respuesta_orden: ["Isótopo de vida larga", "Isótopo de vida media", "Isótopo de vida corta"]
tipo: ordenar
opciones_explicitas: ["Isótopo de vida larga", "Isótopo de vida media", "Isótopo de vida corta"]

enunciado: "Ordene los siguientes isótopos de mayor a menor estabilidad (de mayor a menor vida media):"

explicacion: |
  Los isótopos con vidas medias más largas son más estables y se utilizan para datar eventos geológicos muy antiguos, mientras que los de vida corta sirven para eventos recientes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["teoria", "constante"]

tipo: vf
respuesta: verdadero

enunciado: "¿Es la tasa de desintegración de un isótopo radiactivo una constante que no depende del tiempo ni de la cantidad de muestra presente?"

explicacion: |
  La probabilidad de desintegración de un núcleo individual es constante, lo que da lugar a una tasa de desintegración constante para una muestra dada, permitiendo la datación precisa.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["carbono-14", "datacion"]

enunciado: "El método de datación por Carbono-14 es útil para datar materia orgánica con una antigüedad máxima de aproximadamente ___ años."

respuestas_validas:
  - "50000"
tipo: completar

explicacion: |
  El Carbono-14 tiene una vida media de aproximadamente 5730 años. Después de unos 50,000 años, la cantidad de isótopo remanente es tan pequeña que no puede medirse con precisión, marcando el límite de este método.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["carbono-14", "vida_media"]

variables:
  idx: uno_de([0, 1])
  datos: [["5730", "5730"], ["5730", "5730"]]

enunciado: "La vida media del isótopo Carbono-14 es de aproximadamente {datos[idx][0]} años."

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 10

explicacion: |
  La vida media es el tiempo necesario para que la mitad de los núcleos de un isótopo radiactivo se desintegren. Para el C-14 es de ~5730 años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["uranio", "potasio", "rocas"]

enunciado: "¿Qué método es preferible para datar rocas de una antigüedad muy superior a los 50,000 años?"

opciones_explicitas: ["Carbono-14", "Uranio-Plomo", "Oxígeno-16"]
respuesta: "Uranio-Plomo"
tipo: mc

explicacion: |
  Para materiales muy antiguos como rocas, se requieren isótopos con vidas medias mucho más largas, como el sistema Uranio-Plomo o Potasio-Argón.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["isótopos", "datacion"]

enunciado: "Relaciona el isótopo con el tipo de material que se puede datar:"

pasos:
  - "Carbono-14 -> Materia orgánica"
  - "Uranio-Plomo -> Rocas antiguas"
  - "Potasio-Argón -> Rocas antiguas"

opciones_explicitas: ["Carbono-14 -> Materia orgánica", "Uranio-Plomo -> Rocas antiguas", "Potasio-Argón -> Rocas antiguas"]
respuesta_orden: ["Carbono-14 -> Materia orgánica", "Uranio-Plomo -> Rocas antiguas", "Potasio-Argón -> Rocas antiguas"]
tipo: ordenar

explicacion: |
  La elección del isótopo depende de la escala de tiempo: el C-14 para arqueología (orgánicos) y otros isótopos para geocronología (rocas).
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["metodologia", "geologia"]

variables:
  idx: uno_de([0, 1])
  escenario: [["fósil de madera de 40,000 años", "carbono-14"], ["cristal de circón en roca de 1,000 millones de años", "uranio-plomo"]]

enunciado: "Si un arqueólogo encuentra {escenario[idx][0]}, el método más adecuado de datación sería el de {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: mc

opciones_explicitas: ["uranio-plomo", "potasio-argón", "carbono-14"]

explicacion: |
  El escenario determina la escala temporal. Si el objeto es muy antiguo (roca), el C-14 no sirve; si es madera (orgánico) dentro del rango, el C-14 es ideal.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["conceptos", "radioactividad"]

tipo: mc
opciones_explicitas: ["El tiempo que tarda una muestra en perder la mitad de sus átomos radiactivos.", "El tiempo que tarda una muestra en duplicar su masa total.", "El tiempo que tarda un átomo en transformarse en un átomo de oro.", "El tiempo que tarda la radiación en viajar una unidad de distancia."]
respuesta: "El tiempo que tarda una muestra en perder la mitad de sus átomos radiactivos."
enunciado: "En el contexto de la datación radiométrica, ¿qué se entiende por 'vida media'?"
explicacion: |
  La vida media es el intervalo de tiempo necesario para que la cantidad de un radioisótopo en una muestra se reduzca exactamente a la mitad de su valor inicial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["porcentajes", "decaimiento"]

tipo: mc
opciones_explicitas: ["50%", "75%", "25%", "0%"]
respuesta: "50%"

enunciado: "Si una muestra de un isótopo radiactivo ha transcurrido exactamente una vida media, ¿qué porcentaje de los átomos originales permanece en la muestra?"

explicacion: |
  Por definición, tras una vida media, la mitad (50%) de los átomos originales se ha desintegrado, dejando el otro 50% restante.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["calculo", "exponencial"]

variables:
  idx: uno_de([0, 1])
  escenarios: [["dos", "25%"], ["tres", "12.5%"]]

tipo: completar
respuestas_validas:
  - "25%"
  - "12.5%"
respuesta: escenarios[idx][1]

enunciado: "Si una muestra ha transcurrido {escenarios[idx][0]} vidas medias, el porcentaje de átomos originales que queda es ___."

explicacion: |
  La cantidad de material sigue una progresión geométrica: 100% -> 50% (1 vida media) -> 25% (2 vidas medias) -> 12.5% (3 vidas medias).
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["calculo", "tiempo"]

variables:
  datos: [[100, 50, 50], [80, 40, 40], [60, 30, 30]]
  idx: uno_de([0, 1, 2])

tipo: completar
tolerancia_abs: 0.1

enunciado: "Una muestra contiene {datos[idx][0]} unidades de un isótopo con una vida media de {datos[idx][1]} años. Si actualmente quedan {datos[idx][2]} unidades, ¿cuántos años han transcurrido?"

pasos:
  - "Identificar cuántas vidas medias han pasado comparando la cantidad inicial y la final."
  - "Multiplicar el número de vidas medias por el valor de la vida media en años."

explicacion: |
  En el caso seleccionado, la muestra pasó de {datos[idx][0]} a {datos[idx][2]}, lo que representa exactamente una vida media. Por lo tanto, han pasado {datos[idx][1]} años.

respuesta: datos[idx][1]
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["secuencia", "progresion"]

tipo: ordenar
opciones_explicitas: ["100%", "50%", "25%", "12.5%", "6.25%"]
respuesta_orden: ["100%", "50%", "25%", "12.5%", "6.25%"]

enunciado: "Ordene las siguientes cantidades de material radiactivo restante, desde la muestra original (sin decaimiento) hasta después de cuatro vidas medias:"

explicacion: |
  El decaimiento radiactivo reduce la muestra a la mitad en cada paso: 100% $\rightarrow$ 50% $\rightarrow$ 25% $\rightarrow$ 12.5% $\rightarrow$ 6.25%.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["carbono-14", "vida_media", "geocronologia"]

respuesta: "vida media"
tipo: completar
respuestas_validas:
  - "vida media"
  - "vida-media"

enunciado: "El método de datación por Carbono-14 no es útil para datar fósiles de dinosaurios de hace millones de años debido a que su ___ es demasiado corta."

explicacion: |
  El Carbono-14 tiene una vida media de aproximadamente 5730 años. Después de unos 50,000 años, la cantidad de isótopo remanente es tan pequeña que es imposible de medir con precisión, por lo que no sirve para escalas de tiempo geológicas profundas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["carbono-14", "isótopos", "geocronologia"]

opciones_explicitas: ["La cantidad de C-14 es demasiado pequeña para ser medida", "La cantidad de C-14 es demasiado grande", "El C-14 es un isótopo muy estable", "El C-14 solo se encuentra en rocas"]

respuesta: "La cantidad de C-14 es demasiado pequeña para ser medida"
tipo: mc

enunciado: "Si intentamos datar una roca de 100 millones de años usando el método del Carbono-14, ¿cuál es el problema principal?"

explicacion: |
  Debido a su vida media de 5730 años, tras millones de años, prácticamente todos los átomos de C-14 se han desintegrado. No queda señal detectable para realizar el cálculo.
```

```
metadata:
  materia: "historia_profucha"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["isótopos", "vida_media", "comparacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Carbono-14", "5730 años", "Fósiles orgánicos recientes"], ["Uranio-238", "4468 millones de años", "Rocas muy antiguas"]]

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "5730 años"
  - "4468 millones de años"

enunciado: "Para datar el escenario de {datos[escenario_idx][0]}, se utiliza un isótopo con una vida media de {datos[escenario_idx][1]}. Sin embargo, para {datos[escenario_idx][2]}, se requiere un isótopo con una vida media mucho mayor."

explicacion: |
  La elección del isótopo depende de la escala de tiempo: el C-14 es para arqueología (reciente) y el Uranio-238 para geocronología (antigua).
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["proceso", "datacion", "isótopos"]

opciones_explicitas: ["La muestra se vuelve demasiado vieja", "El isótopo se vuelve demasiado estable", "La muestra se vuelve demasiado joven", "El isótopo se vuelve demasiado radiactivo"]

respuesta: "La muestra se vuelve demasiado vieja"
tipo: mc

enunciado: "En el contexto de la datación radiométrica, cuando el tiempo transcurrido supera con creces la vida media de un isótopo como el C-14, la muestra se vuelve:"

explicacion: |
  Al no quedar isótopos detectables, la muestra es "demasiado vieja" para el método, perdiendo su utilidad analítica para ese isótopo específico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["conceptos", "tiempo"]

respuesta: "corto"
tipo: completar
respuestas_validas:
  - "corto"
  - "breve"

enunciado: "El Carbono-14 tiene un tiempo de vida media muy ___ comparado con los procesos geológicos que forman las rocas de la corteza terrestre."

explicacion: |
  El contraste entre la escala de miles de años (C-14) y la de millones/billones de años (geología) es la razón por la cual el C-14 es inaplicable en la datación de rocas antiguas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["isotopos", "carbono-14"]

variables:
  idx: uno_de([0, 1, 2])
  masas_iniciales: [100, 200, 400]

respuesta: "25%"
tipo: mc
opciones_explicitas: ["25%", "50%", "75%", "100%"]

enunciado: "Una muestra orgánica contiene {masas_iniciales[idx]} g de Carbono-14. Si han transcurrido exactamente 2 vidas medias, ¿qué porcentaje de la masa inicial de este isótopo permanece en la muestra?"

explicacion: |
  Tras una vida media, queda el 50%. Tras dos vidas medias, queda el 50% del 50%, es decir, el 25%.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["uranio", "geocronologia"]

variables:
  datos: [[80, "10"], [160, "20"], [320, "40"]]
  idx: uno_de([0, 1, 2])
  m_i: datos[idx][0]
  m_f: datos[idx][1]

tipo: completar
respuestas_validas:
  - "3"

enunciado: "Se analiza una roca con una masa inicial de {m_i} g de un isótopo radiactivo. Si tras el paso del tiempo la masa remanente es de {m_f} g, ¿cuántas vidas medias han transcurrido?"

pasos:
  - "Identificar la fracción remanente: m_f / m_i"
  - "Determinar cuántas veces se debe dividir la masa inicial por 2 para llegar a la masa final"

explicacion: |
  La relación es m_f = m_i * (1/2)^n. En todos los casos presentados, la masa se redujo a una octava parte, lo que equivale a 3 vidas medias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["potasio-40", "calculo"]

variables:
  caso: [[1000, "125"], [500, "62.5"], [800, "100"]]
  idx: uno_de([0, 1, 2])
  m_ini: caso[idx][0]
  m_res: caso[idx][1]

tipo: completar
tolerancia_abs: 0.1

enunciado: "Un fósil contiene {m_ini} mg de Potasio-40. Si han transcurrido 3 vidas medias, ¿cuántos mg de este isótopo quedan en el fósil?"

respuesta: m_res

explicacion: |
  La fórmula es masa_final = masa_inicial / (2^n). Para n=3, dividimos por 8.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["conceptos"]

tipo: mc
opciones_explicitas: ["se reduce a la mitad", "se duplica", "se mantiene constante", "desaparece por completo"]
respuesta: "se reduce a la mitad"

enunciado: "En un proceso de datación radiométrica, ¿qué sucede con la cantidad de un isótopo radiactivo tras transcurrir exactamente una vida media?"

explicacion: |
  Por definición, la vida media es el tiempo necesario para que la mitad de los núcleos de un isótopo se desintegren.
```

```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["orden", "conceptos"]

tipo: ordenar
opciones_explicitas: ["100%", "50%", "25%", "12.5%", "6.25%"]

enunciado: "Ordene de mayor a menor la cantidad de isótopo remanente tras 0, 1, 2, 3 y 4 vidas medias respectivamente."

explicacion: |
  Cada vida media reduce la cantidad a la mitad de la anterior: 100% -> 50% -> 25% -> 12.5% -> 6.25%.
respuesta_orden: ["100%", "50%", "25%", "12.5%", "6.25%"]
```

