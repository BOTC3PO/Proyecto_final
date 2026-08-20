# Examen jefe — De procariotas a guerras mundiales

> Logro #116. Completaste el examen sobre la evolución biológica, el poblamiento americano y los conflictos globales que marcaron la historia. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **124 preguntas totales** en 5/5 secciones.

---

## Sección: poblamiento-planeta-america (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["origen", "africa", "homo_sapiens"]

respuesta: "África"
tipo: completar
respuestas_validas: ["África"]

enunciado: "Según la teoría 'Out of Africa', el Homo sapiens se originó en el continente de ___."

explicacion: |
  La evidencia genética y fósil sostiene que los humanos modernos surgieron en África y luego migraron hacia el resto del mundo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["migracion", "teoria"]

variables:
  escenario: uno_de([["África", "Asia", "Europa", "América"], ["África", "Asia", "Europa", "Oceanía"]])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["África", "Asia", "Europa", "América"]

enunciado: "De acuerdo con la teoría del origen africano, ¿desde qué continente partieron las primeras migraciones de Homo sapiens para colonizar el resto del planeta?"

explicacion: |
  La migración comenzó desde África hacia Asia y luego se expandió hacia otros continentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["secuencia", "migracion"]

respuesta: ["África", "Asia", "Europa", "América"]
tipo: ordenar
opciones_explicitas: ["África", "Asia", "Europa", "América"]

enunciado: "Ordena cronológicamente la expansión global del Homo sapiens según la teoría predominante:"

explicacion: |
  Primero se consolidó en África, luego migró hacia Asia/Europa y finalmente llegó al continente americano.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["america", "estrecho_de_bering"]

variables:
  datos: [["Bering", "Asia"], ["Magallanes", "América"]]

respuesta: datos[0][0
tipo: completar
respuestas_validas: ["Bering"]

enunciado: "La teoría más aceptada sugiere que el paso de los primeros humanos hacia América se realizó a través del estrecho de ___."

explicacion: |
  El Estrecho de Bering permitió el tránsito desde el noreste de Asia hacia Alaska durante las glaciaciones.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["teoria", "out_of_africa"]

respuesta: falso
tipo: vf

enunciado: "¿La teoría 'Out of Africa' propone que el Homo sapiens es originario de Europa y luego migró a África?"

explicacion: |
  Falso. La teoría postula exactamente lo contrario: el origen es africano y la migración fue hacia afuera.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["prehistoria", "migracion"]

respuesta: "Asia"
tipo: completar
respuestas_validas: ["Asia"]

enunciado: "Se cree que los primeros grupos humanos llegaron al continente americano cruzando el puente terrestre de Beringia desde ________."

explicacion: |
  La teoría más aceptada sugiere que durante las glaciaciones, el descenso del nivel del mar permitió la formación de un puente de tierra entre Asia y América.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["geografia", "migracion"]

variables:
  escenario: uno_de([["puente terrestre", "Beringia"], ["paso marítimo", "Estrecho de Magallanes"], ["ruta costera", "Pacífico"]])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["puente terrestre", "paso marítimo", "ruta costera"]

enunciado: "El corredor que permitió el paso de humanos y megafauna desde Asia hacia América se conoce como {escenario[1]}."

explicacion: |
  El puente de Beringia era una masa de tierra que conectaba los dos continentes durante los periodos de máximo glaciar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["cronologia", "teorias"]

respuesta: 15000
tipo: completar
tolerancia_abs: 5000

enunciado: "Aunque las fechas varían según la teoría, se estima que el poblamiento masivo comenzó hace aproximadamente ___ años."

pasos:
  - "Considerar el final de la última glaciación."
  - "Estimar el inicio de las migraciones hacia el sur del continente."

explicacion: |
  Si bien hay debates sobre teorías más antiguas (como la de Monte Verde), el consenso general sitúa las migraciones principales hace decenas de miles de años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["secuencia", "migracion"]

respuesta: ["Asia", "Beringia", "América"]
tipo: ordenar
opciones_explicitas: ["Asia", "Beringia", "América"]

enunciado: "Ordena la secuencia lógica del poblamiento de América según la teoría del Estrecho de Bering:"

explicacion: |
  La secuencia implica el punto de origen (Asia), el medio de tránsito (Beringia) y el destino (América).
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["clima", "fauna"]

variables:
  caso: uno_de([["glaciación", "descenso del nivel del mar"], ["desierto", "aumento de temperatura"], ["inundación", "descenso del nivel del mar"]])

respuesta: caso[1
tipo: mc
opciones_explicitas: ["descenso del nivel del mar", "aumento de temperatura", "cambio en la vegetación"]

enunciado: "La formación del puente de Beringia fue posible gracias a la {caso[0]}, lo que provocó un {caso[1]}."

explicacion: |
  Durante las glaciaciones, el agua se acumulaba en los glaciares, haciendo que el nivel del mar bajara y expusiera el suelo marino.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["poblamiento", "geografia_humana"]

respuesta: "América"
tipo: completar
respuestas_validas: ["América"]

enunciado: "Considerando la cronología del poblamiento humano global, ___ fue el último continente habitado por seres humanos (con excepción de la Antártida)."

explicacion: |
  Mientras que África fue la cuna de la humanidad y los otros continentes fueron alcanzados hace decenas de miles de años, América fue colonizada mucho más recientemente en la escala temporal evolutiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["cronologia", "comparativa"]

variables:
  escenario: uno_de([["África", "Asia", "Europa", "Oceanía"], ["América", "Antártida"]])
  es_america: escenario[0] == "América"

respuesta: "último"
tipo: mc
opciones_explicitas: ["primero", "segundo", "último"]

enunciado: "Comparado con África, Asia, Europa y Oceanía, el continente americano fue el ___ en ser poblado por humanos."

explicacion: |
  La evidencia arqueológica y genética indica que el poblamiento de América es un evento mucho más tardío en comparación con el resto de las masas continentales habitables.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["orden", "secuencia"]

respuesta: ["África", "Asia", "Europa", "Oceanía", "América"]
tipo: ordenar
opciones_explicitas: ["África", "Asia", "Europa", "Oceanía", "América"]

enunciado: "Ordena cronológicamente los continentes (de mayor a menor antigüedad en su poblamiento humano) según el consenso científico actual:"

explicacion: |
  El patrón de expansión humana muestra una salida desde África hacia Asia, luego hacia Europa y Oceanía, dejando a América como el último gran territorio en ser integrado a la red de asentamientos humanos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["teoria", "verdad_falso"]

respuesta: falso
tipo: mc
opciones_explicitas: [verdadero, falso]

enunciado: "¿Es correcto afirmar que América fue uno de los primeros continentes en ser habitado por los primeros homínidos que salieron de África?"

explicacion: |
  Es falso. América fue el último continente en ser poblado, mucho después de que los humanos ya hubieran colonizado el resto de los continentes habitables.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["excepcion", "geografia"]

respuesta: 1
tipo: completar
tolerancia_abs: 0

enunciado: "Si América es el último continente poblado, y la Antártida es la única excepción que no fue poblada por humanos de forma permanente, ¿cuántos continentes de los 7 totales fueron poblados después de África, Europa, Asia y Oceanía?"

pasos:
  - "Identificar los continentes ya poblados: África, Asia, Europa, Oceanía (4)"
  - "Identificar los continentes restantes: América y Antártida (2)"
  - "Descontar la Antártida por no estar poblada: 2 - 1 = 1"

explicacion: |
  La respuesta es 1, refiriéndose únicamente a América. La Antártida no cuenta como continente poblado por humanos en la historia antigua/prehistórica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["arqueologia", "clovis", "tecnologia"]

respuesta: "puntas de lanza"
tipo: completar
respuestas_validas: ["puntas de lanza", "hachas de piedra", "cerámica"]

enunciado: "La cultura Clovis se caracteriza por la fabricación de ___ de piedra con una hendidura característica en la base."

explicacion: |
  La cultura Clovis (aprox. 13,000 años atrás) es conocida por sus herramientas de piedra altamente especializadas, especialmente sus puntas de lanza con una ranura basal.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["teoria", "geografia", "bering"]

variables:
  escenario: uno_de([["Beringia", "puente terrestre"], ["Pacífico", "ruta marítima"], ["Atlántico", "ruta marítima"]])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["Beringia", "Pacífico", "Atlántico"]

enunciado: "Según la teoría más aceptada, el primer gran corredor de poblamiento hacia América fue el puente terrestre llamado ___."

explicacion: |
  Durante la última glaciación, el descenso del nivel del mar permitió la existencia de Beringia, un puente terrestre que conectaba Siberia con Alaska.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["genetica", "adn", "migracion"]

respuesta: "Asia"
tipo: mc
opciones_explicitas: ["Asia", "Europa", "Oceanía", "África"]

enunciado: "Estudios de ADN mitocondrial en poblaciones indígenas americanas muestran una fuerte conexión genética con grupos provenientes de ___."

explicacion: |
  La evidencia genética actual confirma que las poblaciones originarias de América comparten ancestros comunes con poblaciones del este de Asia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["secuencia", "teorias", "migracion"]

respuesta: ["Ruta de Bering", "Corredor libre de hielo", "Ruta costera"]
tipo: ordenar
opciones_explicitas: ["Ruta de Bering", "Corredor libre de hielo", "Ruta costera"]

enunciado: "Ordene las etapas probables de una migración terrestre desde el norte de Asia hacia el interior del continente americano:"

explicacion: |
  El modelo clásico sugiere primero el cruce por Beringia, luego el paso por un corredor libre de hielo entre las glaciaciones, y finalmente la dispersión hacia el sur.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["arqueologia", "chile", "monte_verde"]

respuesta: "anterior"
tipo: mc
opciones_explicitas: ["anterior", "posterior", "contemporánea"]

enunciado: "El hallazgo del sitio arqueológico Monte Verde en Chile desafió la teoría Clovis porque sus restos son ___ a la cultura Clovis."

explicacion: |
  Monte Verde presenta evidencia de asentamientos humanos que datan de hace más de 14,500 años, lo que sugiere que hubo migraciones antes de la expansión de la cultura Clovis.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["teorias", "migracion"]

variables:
  datos: [["Teoría de Beringia", "Teoría de la Ruta Costera"], ["Teoría de la Ruta Costera", "Teoría de Beringia"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Teoría de Beringia", "Teoría de la Ruta Costera"]

enunciado: "Según la evidencia arqueológica más aceptada para el poblamiento temprano, ¿cuál de estas rutas sugiere que los humanos llegaron bordeando la costa del Pacífico?"

explicacion: |
  La teoría de la ruta costera propone que los primeros migrantes utilizaron embarcaciones para bordear el Pacífico, lo que explicaría la rápida llegada a Sudamérica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["cronologia", "continentes"]

variables:
  datos: [["Asia", "Oceanía", "Europa", "América"], ["Oceanía", "Asia", "Europa", "América"], ["América", "Europa", "Asia", "Oceanía"], ["Europa", "América", "Oceanía", "Asia"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx
tipo: ordenar
opciones_explicitas: ["Asia", "Oceanía", "Europa", "América"]

enunciado: "Ordena los siguientes continentes desde el que fue poblado primero por el Homo sapiens hasta el último, basándote en las cronologías arqueológicas generales."

explicacion: |
  El orden general de poblamiento sugiere que la humanidad salió de África y se expandió primero por Asia y Oceanía, luego Europa y finalmente América.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["geografia", "migracion"]

variables:
  datos: [["el estrecho de Bering", "el estrecho de Magallanes"], ["el estrecho de Magallanes", "el estrecho de Bering"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: completar
respuestas_validas: ["el estrecho de Bering", "el estrecho de Magallanes"]

enunciado: "Para entrar al continente americano desde Asia durante la última glaciación, los grupos humanos debieron cruzar ___."

explicacion: |
  El puente de Beringia permitió el paso de grupos de cazadores-recolectores desde Siberia hacia Alaska.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["teorias", "rutas"]

variables:
  datos: [["La ruta terrestre", "La ruta marítima"], ["La ruta marítima", "La ruta terrestre"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["La ruta terrestre", "La ruta marítima"]

enunciado: "Si consideramos que los humanos no solo usaron puentes de tierra, sino también balsas para bordear continentes, ¿a qué tipo de migración nos referimos?"

explicacion: |
  La migración marítima o costera es una de las teorías fundamentales para explicar el poblamiento rápido de las costas americanas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["secuencia", "poblamiento"]

variables:
  secuencia: [["África", "Asia", "Oceanía", "América"], ["América", "Oceanía", "Asia", "África"], ["Oceanía", "África", "América", "Asia"]]
  idx: uno_de([0, 1, 2])

respuesta: secuencia[idx
tipo: ordenar
opciones_explicitas: ["África", "Asia", "Oceanía", "América"]

enunciado: "Establece el orden cronológico correcto de la expansión global del Homo sapiens, considerando el poblamiento de América como el evento más reciente de la lista."

explicacion: |
  La expansión comenzó en África, siguió por Asia y Oceanía, y finalmente llegó a América hace aproximadamente 15,000-20,000 años.
```

## Sección: primera-guerra-mundial-y-revolucion-rusa (24 preguntas)

```
### 2 — Tratado de Versalles
```

```
### 3 — Revolución de Febrero (Rusia)
```

```
### 4 — Bloqueo Naval
```

```
### 5 — Tratado de Brest-Litovsk
```

```
### 6 — Armisticio de 1918
```

```
### 7 — Lenin y Octubre
```

```
### 8 — Frente Oriental
```

```
### 9 — Submarinos U-Boat
```

```
### 10 — Masacre de Armenia
```

```
### 11 — Batalla de Verdún
```

```
### 12 — Trotsky y el Ejército Rojo
```

```
### 13 — Guerra de Trincheras
```

```
### 14 — Revolución de Octubre (Fecha)
```

```
### 15 — Wilson y los Catorce Puntos
```

```
### 16 — Cañón Big Bertha
```

```
### 17 — Tratado de Saint-Germain
```

```
### 18 — Guerra Química
```

```
### 19 — Kolchak y los Blancos
```

```
### 20 — Armada de Alto Mar
```

```
### 21 — Constitución de Weimar
```

```
### 22 — Lev Trotski y la Internacional
```

```
### 23 — Batalla del Mar de Jutlandia
```

```
### 24 — Masacre de la Plaza del Palacio
```

```
### 25 — Tratado de Trianón
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

variables:
  datos: [["procariota", "sin núcleo"], ["eucariota", "con núcleo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["sin núcleo", "con núcleo"]

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

respuesta: ["Procariotas", "Eucariotas", "Multicelulares"]
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
  escenario: uno_de([
    ["enlaces éter", "enlaces éster"],
    ["enlaces éster", "enlaces éter"]
  ])

tipo: completar
respuestas_validas: ["enlaces éter", "enlaces éster"]

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
```

```
metadata:
  materia: "biologia"
  tema: "ecologia_microbiana"
  nivel: "avanzado"
  tags: ["arqueas", "extremofilos"]

variables:
  caso: uno_de([
    ["un ambiente con pH extremo", "temperaturas de ebullición"],
    ["temperaturas de ebullición", "un ambiente con pH extremo"]
  ])

tipo: completar
tolerancia_abs: 0

enunciado: "Si un organismo procariota es capaz de sobrevivir en {caso[0]}, es muy probable que pertenezca al dominio ___ ."

respuestas_validas: ["Archaea", "Arqueas"]

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

variables:
  escenario_idx: uno_de([0, 1])

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["Estructuras laminares de carbonato", "Huellas de trilobites", "Fósiles de plantas vasculares", "Células con núcleo definido"]

enunciado: "En el registro fósil, la presencia de {datos[escenario_idx][0]} es una de las principales evidencias de la existencia de vida procariota en la Tierra primitiva."

pasos:
  - "Identificar el tipo de estructura fósil mencionada."
  - "Relacionar la estructura con el tipo de organismo que la originó."

explicacion: |
  Las estructuras laminares de carbonato (estromatolitos) son la evidencia más antigua de actividad biológica, indicando la presencia de organismos fotosintéticos en el Precámbrico.

variables:
  datos: [["Estructuras laminares de carbonato", "Estructuras laminares de carbonato"], ["Microfósiles de algas", "Microfósiles de algas"]]
```

```
metadata:
  materia: "historia_profunda"
  tema: "procariotas"
  nivel: "intermedio"
  tags: ["fotosíntesis", "oxígeno", "atmósfera"]

tipo: completar
respuestas_validas: ["oxígeno", "CO2", "nitrógeno"]

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
respuestas_validas: ["sin núcleo", "sin nucleo"]

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

variables:
  idx: uno_de([0, 1])
  escenario: [[0, "procariota", "bacteria"], [1, "eucariota", "animal"]]

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["procariota", "eucariota"]

enunciado: "Si observamos una célula con un núcleo definido y organelos membranosos, estamos ante una célula de tipo {escenario[idx][2]}."

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

respuesta: ["nucleoide", "citoplasma", "membrana"]
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
  idx: uno_de([0, 1])
  caso: [[0, "tiene núcleo", "eucariota"], [1, "no tiene núcleo", "procariota"]]

respuesta: caso[idx][1
tipo: mc
opciones_explicitas: ["eucariota", "procariota"]

enunciado: "Si al analizar una muestra celular se determina que la célula {caso[idx][0]}, su clasificación es:"

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
  datos: [["Bacteria subtilis", "procariota"], ["Saccharomyces cerevisiae", "eucariota"], ["Escherichia coli", "procariota"]]
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
respuestas_validas: ["procariota", "eucariota"]

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
respuestas_validas: ["procariota", "eucariota"]

explicacion: |
  Las células procariotas son generalmente mucho más pequeñas (1-5 µm) que las eucariotas (10-100 µm).
```

```
metadata:
  materia: "biologia"
  tema: "evolucion_celular"
  nivel: "avanzado"
  tags: ["evolucion", "linajes"]

variables:
  secuencia: [["Procariota", "Eucariota", "Multicelularidad"]]
  idx: uno_de([0, 1, 2])

enunciado: "Ordena los niveles de complejidad biológica desde el más simple al más complejo según la escala evolutiva:"

respuesta: ["Procariota", "Eucariota", "Multicelularidad"]
tipo: ordenar
opciones_explicitas: ["Procariota", "Eucariota", "Multicelularidad"]

explicacion: |
  La evolución biológica muestra una progresión desde células simples sin núcleo (procariotas) hacia células complejas (eucariotas) y finalmente organismos multicelulares.
```

## Sección: propiedad-jerarquia-estado (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["sedentarismo", "excedente", "propiedad_privada"]

respuesta: "excedente"
tipo: "completar"
respuestas_validas: ["excedente"]

enunciado: "El paso de la vida nómada a la sedentaria permitió la acumulación de un ___ agrícola, lo cual fue el motor para el surgimiento de la propiedad privada sobre la tierra."

explicacion: |
  La capacidad de producir más alimento del que se consume inmediatamente (excedente) permitió que algunos individuos acumularan riqueza, diferenciándose de otros y dando origen a la propiedad privada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["revolucion_neolitica", "acumulacion"]

variables:
  escenario: uno_de([["comunidad_tribal", "propiedad colectiva"], ["asentamiento_fijo", "propiedad privada"]])

respuesta: escenario[1
tipo: "mc"
opciones_explicitas: ["propiedad colectiva", "propiedad privada"]

enunciado: "En un sistema de asentamientos fijos con excedentes, la organización social tiende a transicionar de una {escenario[0]} hacia una {escenario[1]}."

explicacion: |
  El control sobre el excedente y la tierra delimita territorios y derechos de uso, consolidando la propiedad privada frente al modelo de uso común de las tribus nómadas.
```

```
metadata:
  materia: "historia_profucha"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["estado", "burocracia", "tributo"]

respuesta: "Estado"
tipo: "completar"
respuestas_validas: ["Estado"]

enunciado: "Para gestionar la propiedad de la tierra y asegurar la recaudación de tributos sobre el excedente, surge una estructura de poder centralizada denominada ___."

explicacion: |
  El Estado surge como el ente encargado de codificar las leyes de propiedad y administrar la fuerza para garantizar la recaudación y la defensa de los bienes acumulados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["secuencia", "desarrollo_social"]

respuesta: ["Sedentarismo", "Excedente", "Propiedad Privada", "Estratificación"]
tipo: "ordenar"
opciones_explicitas: ["Sedentarismo", "Excedente", "Propiedad Privada", "Estratificación"]

enunciado: "Ordena cronológicamente los procesos que permitieron el surgimiento de las sociedades de clases:"

pasos:
  - "Establecimiento de asentamientos permanentes."
  - "Producción de alimento más allá del consumo inmediato."
  - "Delimitación de derechos de posesión sobre la tierra y bienes."
  - "División de la sociedad en grupos con distintos niveles de riqueza."

explicacion: |
  La secuencia lógica parte de la estabilidad del asentamiento, que genera excedente, lo que permite la propiedad privada y, finalmente, la división social en clases (estratificación).
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["derecho", "propiedad"]

variables:
  caso: uno_de([["robo_tierra", "delito"], ["tributo_no_pagado", "delito"]])

respuesta: "delito"
tipo: "mc"
opciones_explicitas: ["acto_social", "delito"]

enunciado: "En una sociedad con propiedad privada consolidada, el acto de apropiarse de la tierra de otro sin permiso es considerado un {caso[0]} bajo el código del Estado."

explicacion: |
  La creación de leyes penales es fundamental para proteger la propiedad privada, transformando la apropiación de bienes ajenos en un delito contra el orden establecido.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["excedente", "jerarquia", "sociedad"]

respuesta: "excedente"
tipo: "completar"
respuestas_validas: ["excedente"]

enunciado: "La transición de economías de subsistencia a sociedades complejas fue impulsada por la acumulación de ___ , lo que permitió que ciertos grupos controlaran recursos para sostener a otros."

explicacion: |
  Cuando una sociedad produce más de lo que consume inmediatamente (excedente), ese sobrante puede ser almacenado y controlado, permitiendo la aparición de élites que gestionan dicho recurso.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["excedente", "poder", "clases_sociales"]

variables:
  escenario: uno_de([["el control de la tierra", "el control de la fuerza"], ["el control de la tierra", "el control de la religión"], ["el control de la tierra", "el control de la tecnología"]])
  respuesta_correcta: ["el control de la tierra", "el control de la fuerza", "el control de la tierra", "el control de la religión", "el control de la tierra", "el control de la tecnología"]

opciones_explicitas: ["el control de la tierra", "el control de la fuerza", "el control de la religión", "el control de la tecnología"]

respuesta: escenario[1
tipo: "mc"

enunciado: "En las primeras sociedades con excedente agrícola, la jerarquía social se consolidó principalmente a través de ___."

explicacion: |
  La propiedad de la tierra (medio de producción) permitió a unas familias acumular riqueza, mientras que la capacidad de ejercer fuerza o autoridad religiosa legitimaba ese control sobre el resto de la población.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["proceso", "estratificacion", "jerarquia"]

opciones_explicitas: ["Producción de excedente", "Acumulación de propiedad", "Estratificación social", "Formación del Estado"]

respuesta: ["Producción de excedente", "Acumulación de propiedad", "Estratificación social", "Formación del Estado"]
tipo: "ordenar"

enunciado: "Ordene cronológicamente los procesos que explican la aparición de las jerarquías estatales:"

explicacion: |
  Primero se genera el excedente, luego ese excedente se convierte en propiedad privada/acumulada, lo que crea divisiones de clase (estratificación) y finalmente requiere un aparato institucional (Estado) para regular la propiedad y la fuerza.
```

```
metadata:
  materia: "historia_profucha"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["propiedad", "desigualdad"]

variables:
  caso: uno_de([["A", "B"], ["C", "D"]])
  datos: [["Familia A posee tierras y herramientas", "Familia B posee solo su fuerza de trabajo"], ["Familia C posee excedentes almacenados", "Familia D posee tierras comunales"]]
  respuestas: [["dominante", "subordinada"], ["dominante", "subordinada"]]

enunciado: "Considerando el caso de la {caso[0]}, la relación social resultante es de carácter ___."

respuesta: caso[1
tipo: "mc"

opciones_explicitas: ["dominante", "subordinada"]

explicacion: |
  La posesión de los medios de producción (tierra, herramientas, excedente) establece una relación asimétrica de poder entre quienes poseen y quienes solo pueden ofrecer su trabajo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["estado", "legitimacion", "jerarquia"]

respuesta: "protección"
tipo: "completar"
respuestas_validas: ["protección", "legitimación"]

enunciado: "El Estado temprano surge para garantizar la ___ de la propiedad acumulada y la gestión del excedente mediante la institucionalización de la fuerza."

explicacion: |
  El Estado actúa como el garante de las reglas de propiedad, asegurando que el excedente acumulado por las élites sea respetado y gestionado de manera centralizada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["sociologia", "estado", "organizacion"]

respuesta: "recaudar excedente"
tipo: completar
respuestas_validas: ["recaudar excedente"]

enunciado: "Uno de los propósitos fundamentales de la formación de las estructuras estatales fue la capacidad de ___ para financiar la administración y la burocracia."

explicacion: |
  El surgimiento de sociedades complejas permitió la acumulación de excedentes agrícolas, lo que permitió la creación de una clase administrativa y militar que no producía sus propios alimentos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["funciones", "justicia", "defensa"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [
    ["gestión de conflictos entre ciudadanos", "administrar justicia"],
    ["protección de las fronteras ante invasores", "organizar defensa"],
    ["construcción de canales y caminos", "obras públicas"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["administrar justicia", "organizar defensa", "obras públicas", "todas las anteriores"]

enunciado: "Si el Estado se enfoca en '{escenarios[escenario_idx][0]}', está ejerciendo la función de: ___"

explicacion: |
  El Estado centraliza funciones que las comunidades pequeñas resolvían de forma tribal para permitir la convivencia en sociedades de gran escala.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["complejidad", "sociedad"]

respuesta: "complejas"
tipo: completar
respuestas_validas: ["complejas"]

enunciado: "El Estado surge como una respuesta institucional a la transición de sociedades tribales hacia sociedades más ___."

explicacion: |
  A medida que la población crece y la división del trabajo se especializa, la coordinación requiere una autoridad centralizada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["jerarquia", "orden"]

respuesta: ["imposición de normas", "recaudación de tributos", "mantenimiento del orden"]
tipo: ordenar
opciones_explicitas: ["imposición de normas", "recaudación de tributos", "mantenimiento del orden"]

enunciado: "Ordene los procesos que consolidan la autoridad de un Estado centralizado, desde la base económica hasta la cohesión social:"

explicacion: |
  Primero se extrae el excedente (tributos), luego se establecen reglas (normas) y finalmente se asegura la estabilidad (orden).
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["obras", "infraestructura"]

respuesta: "obras públicas"
tipo: mc
opciones_explicitas: ["recaudación de tributos", "obras públicas", "defensa militar", "administración de justicia"]

enunciado: "La organización de grandes proyectos como sistemas de riego o calzadas es una función característica de la administración de: ___"

explicacion: |
  Las obras públicas requieren una coordinación de mano de obra masiva y recursos que solo una estructura estatal puede movilizar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["agricultura", "excedente"]

enunciado: "El paso fundamental que permitió la acumulación de riqueza y el fin del nomadismo fue la generación de un ___."

respuestas_validas: ["excedente agrícola"]
tipo: completar

explicacion: |
  La capacidad de producir más alimento del que se consume inmediatamente (excedente) permitió que algunos individuos dejaran de producir comida para dedicarse a otras tareas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["propiedad_privada", "desigualdad"]

variables:
  escenario: uno_de([
    ["La acumulación de excedentes permitió que la tierra y los bienes pasaran de ser de uso común a ser de uso individual.", "propiedad privada"],
    ["La gestión de los graneros llevó a la creación de leyes para proteger el acaparamiento de recursos.", "propiedad privada"]
  ])

enunciado: "Según el proceso de transición histórica, la aparición de la {escenario[0]} es la consecuencia directa de la acumulación de excedentes."

opciones_explicitas: ["propiedad común", "propiedad privada", "propiedad estatal"]
respuesta: "propiedad privada"
tipo: mc

explicacion: |
  Al existir un exceso de producción, surge la necesidad de delimitar quién es dueño de qué, transformando el acceso a los recursos en un derecho de propiedad privada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["jerarquia", "clases_sociales"]

enunciado: "Cuando la propiedad privada genera disparidades en la riqueza, surge una estructura de ___ para organizar a la población según su estatus y funciones."

respuestas_validas: ["jerarquía social"]
tipo: completar

explicacion: |
  La división del trabajo y la diferencia de riqueza crean estratos sociales: quienes controlan el excedente y quienes lo producen.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["secuencia", "procesos"]

enunciado: "Ordena la secuencia lógica de la transición hacia las sociedades complejas:"

opciones_explicitas: ["Excedente agrícola", "Propiedad privada", "Jerarquía social", "Estado organizado"]
respuesta: ["Excedente agrícola", "Propiedad privada", "Jerarquía social", "Estado organizado"]
tipo: ordenar

explicacion: |
  La secuencia lógica parte de la producción (excedente), que permite la apropiación (propiedad), que genera desigualdad (jerarquía) y finalmente requiere una autoridad que regule todo (Estado).
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["estado", "poder"]

variables:
  caso: uno_de([
    ["El Estado surge para proteger la propiedad y administrar la fuerza.", "Estado organizado"],
    ["El Estado aparece como un mecanismo de control de la jerarquía establecida.", "Estado organizado"]
  ])

enunciado: "En el proceso histórico estudiado, la fase final de la organización social compleja es la aparición del {caso[0]}."

opciones_explicitas: ["comunidad tribal", "Estado organizado", "anarquía"]
respuesta: "Estado organizado"
tipo: mc

explicacion: |
  El Estado surge como la institución que institucionaliza la jerarquía, establece leyes para la propiedad y administra el excedente y la defensa.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["sociologia", "estado", "propiedad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["La consolidación de la propiedad privada", "la necesidad de un aparato estatal para protegerla"], ["El fin de las estructuras comunales", "la emergencia de la jerarquía de clases"]]

enunciado: "En el proceso de transición hacia la sociedad de clases, {datos[escenario_idx][0]} fue el motor de {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["la necesidad de un aparato estatal para protegerla", "la emergencia de la jerarquía de clases", "la desaparición de la división del trabajo", "el retorno al estado de naturaleza"]

explicacion: |
  La propiedad privada requiere de una fuerza coercitiva (el Estado) que garantice los límites de la posesión y sancione su transgresión.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["jerarquia", "clases", "poder"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["La acumulación de excedentes en manos de una élite", "la estratificación social"], ["El control de los medios de producción", "la consolidación de la jerarquía"]]

enunciado: "Históricamente, {datos[escenario_idx][0]} ha conducido directamente a {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["la estratificación social", "la consolidación de la jerarquía", "la igualdad de derechos", "la disolución del poder central"]

explicacion: |
  La desigualdad en la distribución de recursos permite que ciertos grupos ejerzan un poder de mando sobre otros, creando jerarquías.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["estado", "soberania", "orden"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El monopolio de la violencia legítima", "el control del territorio"], ["La delimitación de fronteras claras", "la soberanía territorial"]]

enunciado: "Según la teoría clásica, {datos[escenario_idx][0]} es la característica que define {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1
tipo: completar
respuestas_validas: ["el control del territorio", "la soberanía territorial"]

explicacion: |
  El Estado se define por su capacidad de ejercer autoridad sobre un territorio y una población mediante el uso de la fuerza institucionalizada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["evolucion", "sociedad", "orden"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["Comunidades igualitarias", "Propiedad privada", "Estado centralizado"],
    ["Sociedades tribales", "Desigualdad de estatus", "Sistemas de castas"]
  ]

enunciado: "Ordene la secuencia lógica de la evolución de la complejidad política y económica:"

pasos:
  - "Paso 1: Surgimiento de la propiedad"
  - "Paso 2: Formación de jerarquías"
  - "Paso 3: Institucionalización del Estado"

respuesta: ["Comunidades igualitarias", "Propiedad privada", "Estado centralizado"]
tipo: ordenar
opciones_explicitas: ["Comunidades igualitarias", "Propiedad privada", "Estado centralizado", "Sociedades tribales", "Desigualdad de estatus", "Sistemas de castas"]

explicacion: |
  La secuencia clásica sugiere que la propiedad genera excedentes, los excedentes generan jerarquías y las jerarquías requieren un Estado para su mantenimiento.
```

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["causa", "efecto", "poder"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["La especialización del trabajo", "la división de funciones"],
    ["La gestión de recursos excedentes", "la creación de burocracias"]
  ]

enunciado: "La aparición de la ___ fue una consecuencia directa de la gestión de recursos excedentes."

respuesta: "la creación de burocracias"
tipo: completar
respuestas_validas: ["la creación de burocracias"]

explicacion: |
  La necesidad de administrar el excedente y la propiedad requiere de un cuerpo administrativo (burocracia) que es la base del aparato estatal.
```

## Sección: pueblos-originarios-territorio-argentino (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["diaguitas", "norte", "geografia"]

tipo: mc
opciones_explicitas: ["Noroeste (valles y montañas)", "Litoral (ríos)", "Patagonia (estepa)", "Pampa (llanura)"]
respuesta: "Noroeste (valles y montañas)"

enunciado: "Los pueblos de cultura Diaguita se asentaban principalmente en la zona del ______."

explicacion: |
  Los diaguitas habitaban los valles calchaquíes y zonas montañosas del actual Noroeste Argentino, desarrollando una agricultura avanzada en terrazas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["tehuelches", "patagonia", "nómadas"]

tipo: mc
opciones_explicitas: ["Agricultores sedentarios", "Cazadores-recolectores nómadas", "Pescadores de gran escala", "Comerciantes de seda"]
respuesta: "Cazadores-recolectores nómadas"

enunciado: "Los Tehuelches, habitantes de la Patagonia, se caracterizaban por su estilo de vida de:"

explicacion: |
  Eran grupos nómadas que se desplazaban siguiendo los ciclos de caza de guanacos y choiques, además de la recolección de frutos silvestres.
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["guaraníes", "litoral", "agricultura"]

variables:
  escenario: uno_de([
    ["Guaraníes", "agricultura de roza y quema", "selva/ríos"],
    ["Mapuches", "pastoreo y agricultura", "zonas templadas"],
    ["Selk'nam", "caza de focas", "Tierra del Fuego"]
  ])

tipo: completar
respuestas_validas: ["agricultura de roza y quema", "pastoreo y agricultura", "caza de focas"]
respuesta: escenario[0][1

enunciado: "Los pueblos {escenario[0][2]} se destacaban por su técnica de {escenario[0][1]}."

explicacion: |
  Los guaraníes utilizaban la técnica de roza y quema para la agricultura en las zonas de selva y ríos del Litoral.
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "avanzado"
  tags: ["ordenar", "geografia"]

tipo: ordenar
opciones_explicitas: ["Diaguitas", "Guaraníes", "Mapuches", "Tehuelches"]
respuesta: ["Diaguitas", "Guaraníes", "Mapuches", "Tehuelches"]

enunciado: "Ordene los siguientes pueblos de Norte a Sur (desde el Noroeste hacia la Patagonia):"

explicacion: |
  El orden geográfico de norte a sur es: Diaguitas (Noroeste), Guaraníes (Litoral/Noreste), Mapuches (Zona Centro/Sur) y Tehuelches (Patagonia).
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["mapuches", "sur", "territorio"]

tipo: completar
tolerancia_abs: 0

variables:
  datos: uno_de([
    ["mapuches", "sur", "Pampa"],
    ["diaguitas", "noroeste", "Noroeste"],
    ["tehuelches", "patagonia", "Patagonia"]
  ])

enunciado: "Los pueblos ______ habitaban principalmente en la zona ______ de Argentina."

respuesta: "mapuches"

explicacion: |
  Los mapuches ocupaban territorios que se extendían desde el centro-sur de la actual Argentina hacia el oeste (Chile).
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["diaguitas", "agricultura", "sedentarismo"]

respuesta: "sedentaria"
tipo: completar
respuestas_validas: ["sedentaria"]

enunciado: "A diferencia de los grupos nómadas, los pueblos como los diaguitas desarrollaron una organización social ___ basada en la agricultura y el control de terrazas de cultivo."

explicacion: |
  Los diaguitas, al establecerse en valles y zonas montañosas, desarrollaron una agricultura avanzada que requería asentamientos permanentes, lo que define a una sociedad sedentaria.
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["tehuelches", "nómadas", "caza"]

variables:
  escenario: uno_de([["Tehuelches", "Patagonia"], ["Guaraníes", "Litoral"]])
  tipo_sociedad: uno_de(["nómada", "sedentaria"])

respuesta: "nómada"
tipo: mc
opciones_explicitas: ["nómada", "sedentaria"]

enunciado: "Los {escenario[0]} se caracterizaban por un estilo de vida {tipo_sociedad}, desplazándose constantemente para la caza y la recolección."

explicacion: |
  Los pueblos de la Patagonia, como los tehuelches, dependían de la migración estacional de la fauna para su subsistencia, lo que impedía el sedentarismo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["diaguitas", "inca", "influencia"]

respuesta: "incaica"
tipo: mc
opciones_explicitas: ["incaica", "maya", "azteca", "guaraní"]

enunciado: "La organización política y técnica de muchos pueblos del Noroeste Argentino, como los diaguitas, estuvo fuertemente influenciada por la expansión del imperio ___."

explicacion: |
  La expansión del Tahuantinsuyo (Imperio Inca) dejó una huella profunda en la organización social, el uso de terrazas y la administración de recursos en el actual territorio argentino.
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "avanzado"
  tags: ["organización", "social", "secuencia"]

respuesta: ["Cazadores-recolectores", "Pastores seminómadas", "Sociedades agrícolas complejas"]
tipo: ordenar
opciones_explicitas: ["Cazadores-recolectores", "Pastores seminómadas", "Sociedades agrícolas complejas"]

enunciado: "Ordene de menor a mayor complejidad en la organización social y permanencia en el territorio:"

explicacion: |
  La complejidad social suele estar ligada a la capacidad de producir excedentes alimentarios: desde la recolección (nómadas) hasta la agricultura intensiva (sedentarios con jerarquías).
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["nómadas", "sedentarios", "comparación"]

variables:
  caso: uno_de([["nómadas", "caza y recolección"], ["sedentarios", "agricultura y excedente"]])

respuesta: "caza y recolección"
tipo: mc
opciones_explicitas: ["caza y recolección", "agricultura y excedente"]

enunciado: "Las sociedades con un modo de vida {caso[0]} se basaban principalmente en la {caso[1]}."

explicacion: |
  Los grupos nómadas dependen de los ciclos naturales de los recursos disponibles en el entorno, moviéndose según la disponibilidad de presas o frutos.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["incas", "collasuyo", "noroeste_argentino"]

respuesta: "Collasuyo"
tipo: completar
respuestas_validas: ["Collasuyo"]

enunciado: "La región del noroeste argentino, que incluía partes de las actuales Salta y Jujuy, formaba parte de la división territorial del Imperio Inca conocida como ___."

explicacion: |
  El Imperio Inca se dividía en cuatro regiones o 'suyos'. La región sur, que comprendía gran parte del actual territorio argentino, se denominaba Collasuyo.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["incas", "administracion", "territorio"]

variables:
  escenario: uno_de([["control_administrativo", "el control de los recursos mediante el sistema de mitas"], ["control_mita", "el control de los recursos mediante el sistema de mitas"]])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["el control de los recursos mediante el sistema de mitas", "la construcción de grandes pirámides de piedra", "la navegación de los ríos de montaña", "el uso exclusivo del idioma quechua en todos los pueblos"]

enunciado: "Para consolidar su dominio en el noroeste argentino, el Imperio Inca implementó una estrategia de {escenario[1]} para asegurar la lealtad de los pueblos locales y la producción de excedentes."

explicacion: |
  El sistema de la 'mita' era un trabajo por turnos que permitía al Estado Inca movilizar grandes cantidades de mano de obra para obras públicas y agricultura, asegurando el control sobre los territorios conquistados.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["caminos", "qhapaq_ñan", "incas"]

respuesta: "Qhapaq Ñan"
tipo: completar
respuestas_validas: ["Qhapaq Ñan"]

enunciado: "La red de caminos que conectaba los centros administrativos del imperio, permitiendo el tránsito de ejércitos y mensajeros por el noroeste argentino, se denominaba ___."

explicacion: |
  El Qhapaq Ñan (Camino del Inca) era una red vial altamente sofisticada que conectaba todo el imperio, facilitando la comunicación y el control territorial.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["agricultura", "terrazas", "tecnologia"]

respuesta: "terrazas"
tipo: mc
opciones_explicitas: ["terrazas", "canales de riego por inundación", "campos de cultivo de llanura", "sistemas de rotación de cultivos"]

enunciado: "Debido a la geografía montañosa de Jujuy y Salta, los Incas perfeccionaron una técnica agrícola de escalonamiento de las laderas para maximizar la superficie cultivable y evitar la erosión. Esta técnica se conoce como ___."

explicacion: |
  Las terrazas de cultivo permitían aprovechar las pendientes de los cerros, optimizando el uso del agua y evitando que la lluvia lavara los nutrientes del suelo.
```

```
metadata:
  materia: "historia"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "avanzado"
  tags: ["expansion", "etapas", "incas"]

respuesta: ["Diplomacia/Alianzas", "Conquista militar", "Asentamiento administrativo"]
tipo: ordenar
opciones_explicitas: ["Diplomacia/Alianzas", "Conquista militar", "Asentamiento administrativo"]

enunciado: "El proceso de expansión del Imperio Inca sobre los pueblos del noroeste argentino seguía generalmente un orden lógico de integración. Ordena las etapas de este proceso:"

pasos:
  - "Primero se buscaba la integración mediante regalos o alianzas."
  - "Si la diplomacia fallaba, se procedía a la acción militar."
  - "Finalmente, se establecían centros para la administración y el control."

explicacion: |
  La expansión incaica no era puramente militar; preferían la diplomacia y el intercambio de bienes de prestigio. Si los pueblos locales se resistían, utilizaban la fuerza, para luego establecer una estructura administrativa (como los mitimaes) para asegurar el control.
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["mapuches", "geografia"]

tipo: mc
opciones_explicitas: ["Norte", "Litoral", "Sur y Cordillera", "Cuyo"]

enunciado: "La región geográfica principal asociada históricamente al pueblo Mapuche en el territorio argentino es la zona de: ___"

respuesta: "Sur y Cordillera"

explicacion: |
  El pueblo Mapuche se asentó principalmente en las regiones del sur y la zona de la cordillera de los Andes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["guaraníes", "litoral"]

tipo: completar
respuestas_validas: ["Litoral/Noreste"]

enunciado: "Los pueblos Guaraníes se desarrollaron predominantemente en la región del ___."

respuesta: "Litoral/Noreste"

explicacion: |
  Los guaraníes habitaban las zonas de selva y ríos, principalmente en el Litoral y el Noreste argentino.
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["diaguitas", "noroeste"]

tipo: mc
opciones_explicitas: ["Patagonia", "Noroeste", "Pampa", "Mesopotamia"]

enunciado: "Si un historiador estudia las culturas de los Diaguitas, debe centrar su investigación en la región del: ___"

respuesta: "Noroeste"

explicacion: |
  Los diaguitas habitaron las zonas montañosas del Noroeste argentino.
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["tehuelches", "patagonia"]

tipo: completar
tolerancia_abs: 0

enunciado: "El pueblo Tehuelche habitaba históricamente la región de la ___."

respuesta: "Patagonia"

explicacion: |
  Los tehuelches eran pueblos nómadas que recorrían las estepas de la Patagonia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["repaso", "geografia"]

variables:
  idx: uno_de([0, 1, 2, 3])
  datos: [["Mapuches", "Sur/Cordillera"], ["Guaraníes", "Litoral/Noreste"], ["Diaguitas", "Noroeste"], ["Tehuelches", "Patagonia"]]

tipo: mc
opciones_explicitas: ["Sur/Cordillera", "Litoral/Noreste", "Noroeste", "Patagonia"]

enunciado: "De acuerdo a la información histórica, el pueblo {datos[idx][0]} se asocia con la región de: ___"

respuesta: {datos[idx][1]}

explicacion: |
  La respuesta correcta corresponde a la región geográfica donde se asentó el pueblo seleccionado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["geografia", "etnias"]

variables:
  escenario: [[ "Los Selk'nam habitaban la región de la Tierra del Fuego", "Tierra del Fuego" ], [ "Los Guaraníes se asentaban principalmente en el noreste", "Noreste" ], [ "Los Mapuches ocupaban gran parte de la zona andina y central", "Zona Andina" ]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["Tierra del Fuego", "Noreste", "Zona Andina", "Pampa"]

enunciado: "Identificá la región geográfica correspondiente al pueblo mencionado: {escenario[idx][0]}."

explicacion: |
  El pueblo mencionado se caracteriza por habitar la región de {escenario[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["estilos_de_vida", "antropologia"]

variables:
  caso: [[ "Los Tehuelches eran principalmente...", "nómadas" ], [ "Los Diaguitas eran principalmente...", "sedentarios" ]]
  idx: uno_de([0, 1])

respuesta: caso[idx][1
tipo: completar
respuestas_validas: ["nómadas", "sedentarios"]

enunciado: "Considerando el modo de vida de los {if(idx == 0, "Tehuelches", "Diaguitas")}, su organización social era de tipo ___."

explicacion: |
  Los {if(idx == 0, "Tehuelches", "Diaguitas")} se definían por ser {caso[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["cultura"]

respuesta: "agricultura"
tipo: mc
opciones_explicitas: ["caza", "agricultura", "pesca", "recolección"]

enunciado: "Los pueblos de la región de los Andes Centrales, como los Diaguitas, basaban su economía principalmente en la ___."

explicacion: |
  La agricultura fue la base de la economía de los pueblos sedentarios de la zona andina.
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "avanzado"
  tags: ["cronologia", "territorio"]

respuesta: ["Selk'nam", "Tehuelches", "Guaraníes"]
tipo: ordenar
opciones_explicitas: ["Selk'nam", "Tehuelches", "Guaraníes"]

enunciado: "Ordená estos pueblos de Sur a Norte según su ubicación geográfica predominante en el territorio argentino."

explicacion: |
  El orden correcto de Sur a Norte es: Selk'nam (Tierra del Fuego), Tehuelches (Patagonia) y Guaraníes (Noreste).
```

```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["geografia"]

variables:
  pueblo_datos: [[ "Qom", "Chaco" ], [ "Mapuche", "Patagonia/Andes" ], [ "Selk'nam", "Tierra del Fuego" ]]
  idx: uno_de([0, 1, 2])

respuesta: pueblo_datos[idx][1
tipo: completar
tolerancia_abs: 0

enunciado: "Escribí el nombre de la región donde habita el pueblo {pueblo_datos[idx][0]}."

explicacion: |
  El pueblo {pueblo_datos[idx][0]} se asocia con la región de {pueblo_datos[idx][1]}.
```
