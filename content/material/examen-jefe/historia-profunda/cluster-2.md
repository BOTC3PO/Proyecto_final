# Examen jefe — Viaje temporal histórico

> Logro #100. Completaste el examen jefe sobre la historia profunda. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **123 preguntas totales** en 5/5 secciones.

---

## Sección: antiguo-egipto (24 preguntas)

```
### 2 — Capital del Imperio Nuevo
```

```
### 3 — El Edicto de la Tolerancia
```

```
### 4 — La Piedra de Rosetta
```

```
### 5 — Batalla de Kadesh
```

```
### 6 — Material para papiros
```

```
### 7 — La Gran Esfinge
```

```
### 8 — El periodo de los Hicsos
```

```
### 9 — Dios de la muerte
```

```
### 10 — Expulsión de los Hicsos
```

```
### 11 — La Reina Hatshepsut
```

```
### 12 — Tinta para escritura
```

```
### 13 — El Templo de Abu Simbel
```

```
### 14 — El Libro de los Muertos
```

```
### 15 — La Dinastía Ptolemaica
```

```
### 16 — El juicio de Osiris
```

```
### 17 — La Tumba de Tutankamón
```

```
### 18 — El dios Ra
```

```
### 19 — La Batalla del Mar
```

```
### 20 — La escritura Demótica
```

```
### 21 — El Valle de los Reyes
```

```
### 22 — Imhotep
```

```
### 23 — El cierre de los templos
```

```
### 24 — La estatua de Nefertiti
```

```
### 25 — La invasión persa
```

## Sección: atmosfera-primitiva (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["geologia", "atmosfera"]

tipo: mc
opciones_explicitas: ["Oxígeno, Nitrógeno y Metano", "Vapor de agua, Dióxido de carbono y Metano", "Dióxido de azufre, Helio y Oxígeno", "Nitrógeno, Argón y Oxígeno"]

enunciado: "Durante los inicios de la Tierra, la atmósfera primitiva estaba compuesta principalmente por una mezcla de gases de origen volcánico. ¿Cuál de las siguientes opciones describe mejor su composición?"

explicacion: |
  La atmósfera primitiva carecía de oxígeno libre (O2) y estaba dominada por gases de efecto invernadero y compuestos volcánicos como el CO2, el vapor de agua y el metano.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["ciclo_del_agua", "geologia"]

variables:
  idx: uno_de([0, 1])
  escenario: [[["El vapor de agua se condensó para formar océanos", "La atmósfera era extremadamente seca"], ["El vapor de agua permitió la formación de los mares", "El vapor de agua era inexistente"]]]

tipo: mc
opciones_explicitas: ["Escenario A", "Escenario B"]

enunciado: "Considerando la presencia masiva de vapor de agua en la atmósfera primitiva, {escenario[idx][0]}."

explicacion: |
  La condensación del vapor de agua a medida que la Tierra se enfriaba fue el proceso fundamental que dio origen a los océanos primordiales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["quimica_antigua"]

tipo: completar
respuestas_validas: ["anóxica"]

enunciado: "Debido a la ausencia de vida fotosintética en sus inicios, la atmósfera primitiva era una atmósfera ___________."

explicacion: |
  Se denomina atmósfera 'anóxica' a aquella que no posee oxígeno libre (O2), característica principal de la Tierra primitiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["volcanismo"]

tipo: ordenar
opciones_explicitas: ["Formación de la Tierra", "Actividad volcánica intensa", "Emisión de gases volcánicos", "Formación de la atmósfera primitiva"]

enunciado: "Ordena cronológicamente los eventos que llevaron a la configuración de la atmósfera primitiva:"

explicacion: |
  La formación de la Tierra permitió la diferenciación de capas, seguida de un vulcanismo intenso que liberó los gases necesarios para crear la atmósfera original.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "avanzado"
  tags: ["quimica", "calculo"]

variables:
  datos: [[100, 50, 50], [80, 10, 10]]
  idx: uno_de([0, 1])
  cantidad_co2: datos[idx][0]

tipo: completar
tolerancia_abs: 0.1

enunciado: "Si en un modelo de atmósfera primitiva de {cantidad_co2} unidades de gas, el 40% es Dióxido de carbono (CO2), ¿cuántas unidades de CO2 hay?"

pasos:
  - "Identificar el total de unidades de gas: {cantidad_co2}"
  - "Calcular el 40% de ese valor: {cantidad_co2} * 0.4"

explicacion: |
  El cálculo se realiza multiplicando el total de unidades por el porcentaje expresado en decimal (0.4).
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["biologia", "evolucion", "anaerobico"]

respuesta: "anaeróbica"
tipo: completar
respuestas_validas: ["anaeróbica", "anaerobia"]

enunciado: "Debido a la ausencia de oxígeno libre en la atmósfera primitiva, la vida temprana era de tipo ___."

explicacion: |
  La atmósfera primitiva era un ambiente reductor. Al no haber O2, los primeros organismos no podían realizar la respiración aeróbica y debían obtener energía mediante procesos anaeróbicos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["oxigeno", "metabolismo"]

variables:
  escenario: uno_de([["presencia de O2", "aeróbica"], ["ausencia de O2", "anaeróbica"]])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["aeróbica", "anaeróbica"]

enunciado: "Si la atmósfera primitiva carecía de oxígeno libre, ¿qué tipo de metabolismo predominaba en los organismos de esa época?"

pasos:
  - "Identificar la condición atmosférica: ausencia de O2."
  - "Relacionar la condición con el tipo de respiración celular."

explicacion: |
  La falta de oxígeno obligaba a los organismos a utilizar otras moléculas como aceptores de electrones, caracterizando un metabolismo anaeróbico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "avanzado"
  tags: ["evolucion", "oxigeno"]

respuesta: ["Anaerobiosis", "Fotosíntesis oxigénica", "Acumulación de O2", "Respiración aeróbica"]
tipo: ordenar
opciones_explicitas: ["Anaerobiosis", "Fotosíntesis oxigénica", "Acumulación de O2", "Respiración aeróbica"]

enunciado: "Ordena cronológicamente los eventos relacionados con la transición de una atmósfera sin oxígeno a una con oxígeno:"

explicacion: |
  Primero existía la vida anaerobia. Luego, la aparición de organismos fotosintéticos (cianobacterias) comenzó a liberar O2, el cual se acumuló hasta permitir la evolución de la respiración aeróbica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["oxigeno", "logica"]

respuesta: falso
tipo: vf

enunciado: "La presencia de oxígeno libre en la atmósfera primitiva era un requisito indispensable para los primeros organismos vivos."

explicacion: |
  Falso. Los primeros organismos eran anaeróbicos, lo que significa que podían vivir y prosperar en un ambiente sin oxígeno.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["metabolismo", "oxigeno"]

variables:
  datos: [["presencia", "aeróbica"], ["ausencia", "anaeróbica"]]
  idx: uno_de([0,1])
  estado: datos[idx][0]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["aeróbica", "anaeróbica"]

enunciado: "Si la atmósfera primitiva se caracterizaba por la {estado} de oxígeno, el metabolismo de la vida temprana era ___."

explicacion: |
  La ausencia de oxígeno (estado falso) define un ambiente donde solo la vida anaeróbica puede prosperar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["atmosfera", "oxigeno", "evolucion"]

tipo: mc
opciones_explicitas: ["Reductora (sin O2)", "Oxidante (rica en O2)", "Nitrogenada pura", "Ácida y gaseosa"]

enunciado: "La atmósfera de la Tierra en sus inicios era de naturaleza ___________, debido a la ausencia de oxígeno libre."

explicacion: |
  La atmósfera primitiva era un ambiente reductor porque no existía el oxígeno molecular (O2) para oxidar los gases presentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["fotosintesis", "oxigeno", "biologia"]

variables:
  escenario_idx: uno_de([0, 1])

enunciado: "En el escenario {escenario_datos[escenario_idx][0]}, el factor principal que transformó la atmósfera fue {escenario_datos[escenario_idx][1]}."

variables:
  escenario_datos: [["la atmósfera primitiva", "la aparición de la fotosíntesis"], ["la atmósfera actual", "la acumulación de gases volcánicos"]]

tipo: completar
respuestas_validas: ["la aparición de la fotosíntesis", "la acumulación de gases volcánicos"]

explicacion: |
  La fotosíntesis realizada por organismos antiguos (cianobacterias) liberó oxígeno como subproducto, cambiando la química global del planeta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["oxigeno", "porcentaje"]

tipo: completar
tolerancia_abs: 0.1

enunciado: "Mientras que la atmósfera primitiva carecía de oxígeno, la atmósfera actual contiene aproximadamente un ___% de este gas."

pasos:
  - "Identificar el porcentaje de O2 en la atmósfera actual."
  - "Ingresar el valor numérico."

respuesta: 21

explicacion: |
  La composición actual de la atmósfera se mantiene estable cerca del 21% de oxígeno.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "avanzado"
  tags: ["secuencia", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Atmósfera primitiva reductora", "Aparición de fotosíntesis", "Acumulación de O2", "Atmósfera oxidante actual"]

enunciado: "Ordena cronológicamente los procesos que definieron la evolución de la atmósfera terrestre:"

respuesta: ["Atmósfera primitiva reductora", "Aparición de fotosíntesis", "Acumulación de O2", "Atmósfera oxidante actual"]

explicacion: |
  Primero existió una atmósfera sin O2, luego la vida fotosintética comenzó a producirlo, el O2 se acumuló y finalmente estableció la atmósfera oxidante que conocemos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["quimica", "oxigeno"]

variables:
  datos: [["oxidante", "reductora"], ["reductora", "oxidante"]]
  idx: uno_de([0, 1])

enunciado: "Si la atmósfera es la actual, su estado es {datos[idx][0]}. Si es la primitiva, su estado es {datos[idx][1]}."

tipo: mc
opciones_explicitas: ["oxidante", "reductora"]

respuesta: datos[idx][0]

explicacion: |
  La atmósfera actual es oxidante debido a la presencia masiva de O2, mientras que la primitiva era reductora por la falta de este gas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["condensacion", "oceanos", "agua"]

respuesta: "condensación"
tipo: completar
respuestas_validas: ["condensación", "condensacion"]

enunciado: "A medida que la Tierra se enfriaba, el vapor de agua presente en la atmósfera primitiva sufrió un proceso de ___ que dio lugar a las primeras lluvias y la formación de los océanos."

explicacion: |
  Cuando la superficie terrestre bajó de la temperatura crítica, el vapor de agua se transformó en líquido, llenando las cuencas oceánicas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["estado_materia", "vapor"]

respuesta: "líquido"
tipo: mc
opciones_explicitas: ["sólido", "líquido", "gaseoso", "plasma"]

enunciado: "Antes de la formación de los océanos, el agua se encontraba mayoritariamente en estado {estado_inicial}. Tras el enfriamiento, pasó a estado {estado_final}."

variables:
  estado_inicial: "gaseoso"
  estado_final: "líquido"

explicacion: |
  El paso de gas a líquido es la transición clave que permitió la existencia de agua líquida en la superficie.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["secuencia", "enfriamiento"]

respuesta: ["Enfriamiento de la corteza", "Condensación del vapor", "Lluvias torrenciales", "Formación de océanos"]
tipo: ordenar
opciones_explicitas: ["Enfriamiento de la corteza", "Condensación del vapor", "Lluvias torrenciales", "Formación de océanos"]

explicacion: |
  El orden lógico es: primero la Tierra debe enfriarse lo suficiente para que el vapor no vuelva a evaporarse, luego ocurre la condensación, las lluvias y finalmente se estabilizan los océanos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["componente", "atmosfera"]

respuesta: "verdadero"
tipo: completar
enunciado: "El vapor de agua fue uno de los componentes principales de la atmósfera primitiva que, al condensarse, permitió la aparición de los primeros mares."

explicacion: |
  La atmósfera primitiva era rica en gases de la actividad volcánica, incluyendo grandes cantidades de vapor de agua.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "avanzado"
  tags: ["fisica", "condensacion"]

variables:
  temp_inicial: 1500
  temp_final: 100
  delta_t: temp_inicial - temp_final

respuesta: 1400
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si la temperatura de la atmósfera primitiva era de {temp_inicial}°C y se enfrió hasta los {temp_final}°C para permitir la condensación, ¿cuál fue el descenso térmico (ΔT) en grados Celsius?"

pasos:
  - "Identificar la temperatura inicial: 1500"
  - "Identificar la temperatura final: 100"
  - "Restar la temperatura final de la inicial: 1500 - 100"

explicacion: |
  El enfriamiento fue un proceso masivo que redujo la temperatura de la atmósfera en miles de grados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["geologia", "atmosfera"]

variables:
  escenario: [[["Metano (CH4)", "Dióxido de carbono (CO2)"], ["Nitrógeno (N2)", "Dióxido de carbono (CO2)"], ["Vapor de agua (H2O)", "Metano (CH4)"]], ["Nitrógeno (N2)", "Metano (CH4)"], ["Dióxido de carbono (CO2)", "Oxígeno (O2)"], ["Nitrógeno (N2)", "Oxígeno (O2)"]]]
  idx: uno_de([0,1,2,3])

enunciado: "En la atmósfera primitiva, un componente dominante era el {escenario[idx][0]}, mientras que en la atmósfera actual el componente predominante es el {escenario[idx][1]}."

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["Dióxido de carbono (CO2)", "Metano (CH4)", "Oxígeno (O2)", "Nitrógeno (N2)"]

explicacion: |
  La atmósfera primitiva era una atmósfera reductora, rica en gases como CO2, CH4 y N2, pero carecía de oxígeno libre (O2) hasta la aparición de la fotosíntesis oxigénica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["evolucion", "oxigeno"]

variables:
  evento: [["Oxígeno (O2)", "Dióxido de carbono (CO2)"], ["Oxígeno (O2)", "Metano (CH4)"], ["Nitrógeno (N2)", "Dióxido de carbono (CO2)"]]
  idx: uno_de([0,1,2])

enunciado: "La aparición de organismos fotosintéticos transformó la atmósfera al liberar ___ en grandes cantidades, reemplazando la abundancia de ___."

respuesta: tabla[idx][1
tipo: completar
respuestas_validas: ["Oxígeno (O2)", "Dióxido de carbono (CO2)", "Metano (CH4)", "Nitrógeno (N2)"]

pasos:
  - "Identificar el gas producido por la fotosíntesis."
  - "Identificar el gas que era abundante antes de la fotosíntesis."

explicacion: |
  La Gran Oxidación fue un evento biológico que cambió la química planetaria, pasando de una atmósfera reductora a una oxidante.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "avanzado"
  tags: ["quimica_atmosferica", "evolucion"]

variables:
  comparativa: [["Metano (CH4)", "Oxígeno (O2)"], ["Dióxido de carbono (CO2)", "Nitrógeno (N2)"], ["Vapor de agua (H2O)", "Argón (Ar)"]]
  idx: uno_de([0,1,2])

enunciado: "Si comparamos la concentración de gases, un gas que era muy abundante en la atmósfera primitiva pero es hoy un gas traza es el {comparativa[idx][0]}, mientras que el {comparativa[idx][1]} es mayormente estable en la actualidad."

respuesta: comparativa[idx][0
tipo: mc
opciones_explicitas: ["Metano (CH4)", "Dióxido de carbono (CO2)", "Vapor de agua (H2O)", "Oxígeno (O2)"]

explicacion: |
  Muchos gases que hoy son trazas (como el metano) eran componentes mayoritarios en la Tierra primitiva debido a la intensa actividad volcánica y la falta de sumideros oxidantes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["cronologia", "procesos"]

enunciado: "Ordena la evolución de la composición atmosférica desde la Tierra primitiva hasta la actualidad:"

opciones_explicitas: ["Atmósfera reductora (CH4, NH3, H2O)", "Atmósfera con presencia de O2 (Gran Oxidación)", "Atmósfera moderna (N2, O2, Ar)"]
respuesta: ["Atmósfera reductora (CH4, NH3, H2O)", "Atmósfera con presencia de O2 (Gran Oxidación)", "Atmósfera moderna (N2, O2, Ar)"]
tipo: ordenar

explicacion: |
  La secuencia lógica comienza con gases volcánicos y de origen primordial, sigue con la revolución biológica del oxígeno y culmina con la composición actual.
```

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["biologia", "oxigeno"]

variables:
  caso: [[0.21, "21%"], [0.0004, "0.04%"], [0.0001, "0.0001%"]]
  idx: uno_de([0,1,2])

enunciado: "En la atmósfera actual, el porcentaje de oxígeno es aproximadamente del {caso[idx][0]} (valor decimal), lo que equivale al {caso[idx][1]} de la mezcla total."

respuesta: caso[idx][1
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El oxígeno es el segundo gas más abundante hoy en día, con una concentración cercana al 21%.
```

## Sección: baja-edad-media-y-crisis (24 preguntas)

```
### 2 — Tratado de Brétigny
```

```
### 3 — Revuelta de los Pastores
```

```
### 4 — Reforma de Wycliffe
```

```
### 5 — Peste de Justiniano
```

```
### 6 — Batalla de Crécy
```

```
### 7 — Guerra de las Camisetas
```

```
### 8 — Edicto de Nantes
```

```
### 9 — Sacudida de 1315-1317
```

```
### 10 — Juan de Gerson
```

```
### 11 — Batalla de Aljubarrota
```

```
### 12 — Peste de 1348
```

```
### 13 — Jacquerie
```

```
### 14 — Concilio de Constanza
```

```
### 15 — Tratado de Tordesillas
```

```
### 16 — Guerra de los Cien Años (Fases)
```

```
### 17 — Caída de Constantinopla
```

```
### 18 — Lollardos
```

```
### 19 — Peste de 1361
```

```
### 20 — Juan de Medina del Campo
```

```
### 21 — Batalla de Nicópolis
```

```
### 22 — Estatuto de los Trabajadores (1351)
```

```
### 23 — Carlos VI de Francia
```

```
### 24 — Peste de 1400
```

```
### 25 — Juan de Gerson y la Mística
```

## Sección: caida-de-roma-y-alta-edad-media (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["imperio-romano", "caida", "fecha-clave"]
tipo: vf
enunciado: El año 476 d.C. marca tradicionalmente el fin del Imperio Romano de Occidente con la deposición del último emperador.
respuesta: verdadero
explicacion: En el 476 d.C., el general germánico Odoacro depuso a Rómulo Augústulo, el último emperador romano de Occidente, poniendo fin de facto al imperio en esa mitad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["odocaro", "germanos", "roma"]
tipo: completar
enunciado: El líder de los hérulos que depuso a Rómulo Augústulo en 476 fue ______.
respuesta: Odoacro
respuestas_validas:
  - Odoacro
  - Odoacri
  - Odovacri
  - Odacri
explicacion: Odoacro (o Odovacri) fue el caudillo herulo que tomó el control de Italia tras la caída de Roma, gobernando como rey sin reconocer la autoridad imperial de Oriente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["economia", "inflacion", "romana"]
tipo: mc
enunciado: ¿Cuál fue una grave consecuencia de la devaluación de la moneda romana en los siglos III y IV?
opciones_explicitas:
  - Aumento del comercio transcontinental
  - Desaceleración de la actividad económica y el comercio
  - Fortalecimiento de la clase media urbana
  - Estabilidad en los precios de los granos
respuesta: B
explicacion: La devaluación de la moneda (reducción del contenido de plata) generó inflación, desconfianza en el dinero y una desaceleración general del comercio y la economía monetaria.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["carolingios", "verdun", "particion"]
tipo: completar
enunciado: El Tratado de Verdún de 843 dividió el Imperio Carolingio en tres reinos, uno de los cuales fue ______.
respuesta: Francia
respuestas_validas:
  - Francia
  - francia
  - Francia Occidental
  - francia occidental
explicacion: El tratado dividió el imperio entre los nietos de Carlomagno: Luis el Germánico (Este), Lotario I (Centro) y Carlos el Calvo (Occidente, futura Francia).
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["visigodos", "alarico", "saqueo"]
tipo: mc
enunciado: ¿Qué pueblo germánico saqueó Roma en el año 410 d.C.?
opciones_explicitas:
  - Vándalos
  - Ostrogodos
  - Visigodos
  - Francos
respuesta: C
explicacion: Bajo el mando de Alarico I, los visigodos saquearon Roma en el 410, un evento shock para la mentalidad romana que simbolizó la vulnerabilidad del imperio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["feudalismo", "vasallaje", "estructura-social"]
tipo: completar
enunciado: En el sistema feudal, el lazo jurídico y militar entre un señor y un noble se llamaba ______.
respuesta: vasallaje
respuestas_validas:
  - vasallaje
  - vasallage
  - lazo de vasallaje
  - vinculo de vasallaje
explicacion: El vasallaje era el contrato personal donde el vasallo juraba fidelidad y servicio militar a cambio de protección y un feudo (tierras).
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["carlomagno", "papa", "coronacion"]
tipo: mc
enunciado: ¿Qué Papa coronó a Carlomagno como Emperador en Navidad del año 800?
opciones_explicitas:
  - Papa Gregorio I
  - Papa León III
  - Papa Urbano II
  - Papa Adriano I
respuesta: B
explicacion: El Papa León III coronó a Carlomagno en el año 800, restableciendo el título imperial en Occidente y estrechando los lazos entre la corona franca y la Iglesia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["vikingos", "invasiones", "navegacion"]
tipo: vf
enunciado: Los vikingos se distinguían por atacar principalmente por tierra, evitando los ríos.
respuesta: falso
explicacion: Los vikingos eran expertos navegantes que utilizaban sus barcos de fondo plano para remontar ríos y atacar monasterios y ciudades del interior, evitando el combate terrestre directo cuando era posible.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["cisma", "iglesia", "roma", "constantinopla"]
tipo: completar
enunciado: El Cisma de 1054 provocó la ruptura definitiva entre la Iglesia de Roma y la Iglesia de ______.
respuesta: Constantinopla
respuestas_validas:
  - Constantinopla
  - constantinopla
  - Bizancio
  - bizancio
  - iglesia ortodoxa
  - Iglesia Ortodoxa
explicacion: El cisma separó el cristianismo en dos ramas: la católica romana (Occidente) y la ortodoxa oriental (con sede en Constantinopla).
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["bizancio", "turcos", "otomanos", "final"]
tipo: mc
enunciado: ¿Qué poder conquistó Constantinopla en 1453, poniendo fin al Imperio Romano de Oriente?
opciones_explicitas:
  - Los Francos
  - Los Otomanos
  - Los Mongoles
  - Los Venedicos
respuesta: B
explicacion: El sultán Mehmed II conquistó Constantinopla en 1453, marcando el fin oficial del Imperio Bizantino y el fin simbólico de la Edad Media.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["agricultura", "tecnologia", "arado"]
tipo: completar
enunciado: La invención del ______ de vertedera permitió arar los suelos pesados y húmedos del norte de Europa.
respuesta: arado
respuestas_validas:
  - arado
  - arado de vertedera
  - arado pesado
  - arado de ruedas
explicacion: El arado de vertedera (con ruedas y cuchilla de hierro) revoluciona la agricultura medieval, permitiendo cultivar tierras fértiles pero pesadas del norte.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["iglesia", "cultura", "manuscritos"]
tipo: vf
enunciado: Durante los primeros siglos de la Alta Edad Media, los monasterios fueron los principales centros de copia y conservación de textos clásicos.
respuesta: verdadero
explicacion: Con el colapso de las estructuras civiles, los monasterios se convirtieron en refugios de saber, donde los monjes copiaban manuscritos latinos y cristianos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["francos", "musulmanes", "poitiers", "cartujo"]
tipo: mc
enunciado: ¿Quién lideró a los francos en la victoria contra los musulmanes en la Batalla de Poitiers en 732?
opciones_explicitas:
  - Carlomagno
  - Carlos Martel
  - Pipino el Breve
  - Clodoveo
respuesta: B
explicacion: Carlos Martel detuvo la expansión musulmana hacia el norte de Europa en Poitiers, consolidando el poder de los Carolingios y su alianza con la Iglesia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["feudalismo", "poder", "fragmentacion"]
tipo: completar
enunciado: La debilidad de los reyes carolingios llevó a una fragmentación del poder político en favor de la nobleza local, fenómeno conocido como ______.
respuesta: feudalismo
respuestas_validas:
  - feudalismo
  - sistema feudal
  - regimen feudal
  - orden feudal
explicacion: La incapacidad de los reyes para mantener el orden público generó que los señores locales asumieran funciones judiciales y militares, consolidando el feudalismo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["reconquista", "covadonga", "asturias"]
tipo: vf
enunciado: La batalla de Covadonga, tradicionalmente datada en 722, marca el inicio simbólico de la Reconquista en la península ibérica.
respuesta: verdadero
explicacion: Pelayo lideró a los astures contra los omeyas en Covadonga, estableciendo el Reino de Asturias y marcando el comienzo de la lenta expansión cristiana hacia el sur.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["cruzadas", "jerusalen", "urbe"]
tipo: mc
enunciado: ¿Qué Papa convocó la Primera Cruzada en 1095 en el Concilio de Clermont?
opciones_explicitas:
  - Papa Urbano II
  - Papa Inocencio III
  - Papa Gregorio VII
  - Papa León X
respuesta: A
explicacion: Urbano II llamó a la cruzada para liberar Tierra Santa del control seléucida y ayudar al Imperio Bizantino, movilizando a la nobleza europea.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["peste", "bubonica", "muerte"]
tipo: completar
enunciado: La Peste Negra del siglo XIV fue causada por la bacteria ______, transmitida principalmente por pulgas de ratas.
respuesta: Yersinia pestis
respuestas_validas:
  - Yersinia pestis
  - yersinia pestis
  - Yersinia
  - pestis
explicacion: La bacteria Yersinia pestis fue el agente causal de la peste bubónica, que diezmó la población europea entre 1347 y 1351.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["francia", "capetos", "centralizacion"]
tipo: mc
enunciado: ¿Qué dinastía comenzó a consolidar el poder real en Francia a partir del siglo X, reduciendo el poder de los señores feudales?
opciones_explicitas:
  - Carolingios
  - Capetos
  - Valois
  - Plantagenets
respuesta: B
explicacion: Los Capetos, empezando con Hugo Capet, lograron una lenta pero constante centralización del poder en Francia, sentando las bases del Estado nacional.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["siervos", "trabajo", "diferencia"]
tipo: completar
enunciado: A diferencia de los esclavos romanos, los siervos medievales tenían derecho a ______ y a poseer herramientas propias.
respuesta: matrimonio
respuestas_validas:
  - matrimonio
  - casamiento
  - familia
  - herencia
  - tierra
explicacion: Los siervos estaban ligados a la tierra pero no eran propiedad del señor; podían tener familia, heredar bienes y usar sus propias herramientas, aunque debían trabajo al señor.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["sacro-império", "germania", "otón"]
tipo: mc
enunciado: ¿Qué rey alemán fue coronado emperador en 962, fundando el Sacro Imperio Romano Germánico?
opciones_explicitas:
  - Federico I Barbarroja
  - Otón I
  - Enrique IV
  - Carlomagno
respuesta: B
explicacion: Otón I fue coronado emperador en 962, reviviendo el título imperial en Germania y estableciendo el Sacro Imperio Romano Germánico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["cisma", "avignon", "papado"]
tipo: vf
enunciado: Durante el Gran Cisma de Occidente (1378-1417), hubo dos papas rivales, uno en Roma y otro en Aviñón.
respuesta: verdadero
explicacion: Este cisma dividió la cristiandad occidental con dos papas simultáneos, debilitando la autoridad moral y política del papado hasta su resolución en el Concilio de Constanza.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["mongoles", "genghis", "invasión"]
tipo: completar
enunciado: El líder que unificó a las tribus mongolas y comenzó la mayor expansión terrestre de la historia fue ______.
respuesta: Genghis Khan
respuestas_validas:
  - Genghis Khan
  - Gengis Khan
  - Chingis Khan
  - Temujin
explicacion: Temujin, conocido como Genghis Khan, unificó a los mongoles en 1206 y lanzó campañas que extendieron el imperio desde Asia Central hasta Europa del Este.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["japon", "shogun", "samurai"]
tipo: mc
enunciado: En el feudalismo japonés, ¿quién era el líder militar que ejercía el poder real mientras el emperador era una figura ceremonial?
opciones_explicitas:
  - Daimyo
  - Shogun
  - Samurai
  - Kami
respuesta: B
explicacion: El Shogun era el dictador militar, mientras el emperador permanecía en Kyoto como símbolo sagrado pero sin poder político efectivo durante gran parte del periodo feudal japonés.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["cultura", "carlomagno", "educación"]
tipo: completar
enunciado: El intento de Carlomagno de revivir la cultura y el aprendizaje clásico se conoce como el ______.
respuesta: Renacimiento Carolingio
respuestas_validas:
  - Renacimiento Carolingio
  - renacimiento carolingio
  - Renacimiento de Carlomagno
  - renacimiento de carlomagno
explicacion: Fue un período de renovación cultural y educativa en la corte de Carlomagno, promoviendo el uso correcto del latín y la copia de textos antiguos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "caida-de-roma-y-alta-edad-media"
  nivel: "intermedio"
  tags: ["tordesillas", "colonización", "mundo-nuevo"]
tipo: mc
enunciado: ¿Qué potencia europea perdió la disputa de zonas de influencia en el Tratado de Tordesillas frente a Portugal?
opciones_explicitas:
  - Francia
  - España
  - Inglaterra
  - Italia
respuesta: B
explicacion: España y Portugal firmaron el tratado para dividir el mundo no europeo por un meridiano, otorgando a Portugal las rutas hacia la India y África, y a España las Américas (aunque inicialmente hubo disputas sobre la longitud exacta).
```

## Sección: cambio-climatico-linea-base-historica (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["metodologia", "climatologia"]

tipo: mc
opciones_explicitas: ["Establecer un punto de comparación para distinguir variaciones naturales de antropogénicas", "Determinar la temperatura exacta del núcleo de la Tierra", "Calcular la velocidad de la rotación terrestre", "Predecir el fin de la vida en el planeta"]

enunciado: "Para determinar si el calentamiento actual es una anomalía, los científicos necesitan establecer una ___ que permita comparar el clima presente con los registros del pasado."

respuesta: "Establecer un punto de comparación para distinguir variaciones naturales de antropogénicas"

explicacion: |
  Sin una línea de base histórica (paleoclimatología), no podríamos saber si las fluctuaciones actuales están dentro de los rangos de variabilidad natural o si representan una desviación estadística significativa.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["milankovitch", "astronomia"]

variables:
  idx: uno_de([0, 1])
  escenario: [["excentricidad", "cambios en la forma de la órbita terrestre"], ["oblicuidad", "cambios en la inclinación del eje terrestre"]]

tipo: completar
respuestas_validas: ["excentricidad", "oblicuidad"]

enunciado: "Los ciclos de Milankovitch explican las glaciaciones a través de variaciones en la órbita. El primer factor es la {escenario[idx][0]}, que se refiere a los {escenario[idx][1]}."

respuesta: escenario[idx][0

explicacion: |
  Los ciclos de Milankovitch incluyen la excentricidad (órbita), la oblicuidad (inclinación) y la precesión (balanceo). Estos procesos naturales operan en escalas de decenas de miles de años.
```

```
metadata:
  materia: "historia_profucha"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["ritmos", "velocidad"]

tipo: ordenar
opciones_explicitas: ["Ciclos de Milankovitch (escala de milenios)", "Variaciones volcánicas menores (escala de años/décadas)", "Emisiones de gases de efecto invernadero actuales (escala de décadas)"]

enunciado: "Ordena los procesos de abajo hacia arriba según la escala temporal en la que influyen en el sistema climático (de mayor duración a menor duración):"

respuesta: ["Ciclos de Milankovitch (escala de milenios)", "Variaciones volcánicas menores (escala de años/décadas)", "Emisiones de gases de efecto invernadero actuales (escala de décadas)"]

explicacion: |
  La diferencia fundamental entre el cambio climático natural histórico y el actual no es solo la dirección del cambio, sino la velocidad (ritmo) a la que ocurre el forzamiento radiativo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["paleoclimatologia", "hielo"]

variables:
  datos: [["isótopos de oxígeno", "concentración de CO2"], ["isótopos de carbono", "presión atmosférica"]]
  idx: uno_de([0, 1])

tipo: mc
opciones_explicitas: ["isótopos de oxígeno", "isótopos de carbono", "niveles de salinidad", "densidad del aire"]

enunciado: "Para reconstruir la temperatura de hace miles de años, los científicos analizan los {datos[idx][0]} atrapados en las burbujas de aire de los núcleos de hielo."

respuesta: datos[idx][0

explicacion: |
  Los isótopos de oxígeno (especialmente la relación entre 18O y 16O) en el hielo actúan como un termómetro paleoclimático muy preciso.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["anomalia", "datos"]

tipo: completar
tolerancia_abs: 0.1

enunciado: "Si la temperatura media global histórica (línea de base) fuera de 14.0°C y la actual es de 15.5°C, ¿cuál es la magnitud de la anomalía térmica en grados Celsius?"

respuesta: 1.5

explicacion: |
  La anomalía se calcula restando el valor de la línea de base al valor actual: 15.5 - 14.0 = 1.5.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["velocidad", "comparacion"]

tipo: mc
opciones_explicitas: ["El ritmo de cambio es similar en ambos casos", "El cambio actual es mucho más rápido que los naturales", "El cambio actual es más lento debido a la tecnología", "No hay diferencia medible en la velocidad"]

enunciado: "Al comparar el cambio climático actual con los ciclos naturales del pasado, la diferencia fundamental radica en la ____."

explicacion: |
  Mientras que los cambios climáticos naturales (como las glaciaciones) suelen ocurrir a lo largo de miles de años, el cambio climático antropogénico actual está ocurriendo en cuestión de décadas, una velocidad sin precedentes en la historia geológica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["escala_temporal", "comparacion"]

variables:
  datos: [["Natural", "milenios"], ["Actual", "décadas"]]
  idx: uno_de([0, 1])

tipo: completar
respuestas_validas: ["milenios", "décadas"]
respuesta: datos[idx][1]

enunciado: "Si un cambio climático natural suele manifestarse en un periodo de {datos[idx][0]}, el cambio climático actual se manifiesta en un periodo de ___."

explicacion: |
  La escala temporal es la clave: pasar de escalas de milenios a escalas de décadas es lo que impide que los ecosistemas se adapten naturalmente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["ritmo", "comparacion"]

tipo: ordenar
opciones_explicitas: ["Ciclos climáticos naturales (lentos)", "Cambio climático antropogénico (rápido)"]
respuesta: ["Ciclos climáticos naturales (lentos)", "Cambio climático antropogénico (rápido)"]

enunciado: "Ordena los procesos de menor a mayor velocidad de cambio climático:"

explicacion: |
  El orden correcto refleja la aceleración del proceso: desde los cambios geológicos lentos hasta la aceleración actual causada por la actividad humana.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["geologia", "velocidad"]

variables:
  datos: [["10000", "10"], ["5000", "50"], ["2000", "100"]]
  idx: uno_de([0, 1, 2])

tipo: completar
tolerancia_abs: 0
respuesta: datos[idx][1

enunciado: "En un escenario donde un cambio natural tarda {datos[idx][0]} años, el cambio actual se estima que ocurre en aproximadamente ___ años."

pasos:
  - "Identificar la escala de tiempo natural proporcionada."
  - "Comparar con la escala de tiempo del cambio actual (décadas)."

explicacion: |
  El valor ingresado representa la escala de décadas que caracteriza la crisis climática actual frente a la escala de milenios de los procesos naturales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["velocidad", "veracidad"]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Verdadero"

enunciado: "La característica distintiva del cambio climático actual frente a los eventos naturales del pasado es que su velocidad de ejecución es órdenes de magnitud mayor. ¿Es esto verdadero o falso?"

explicacion: |
  Es verdadero. La rapidez del calentamiento actual es el factor que genera la mayor preocupación para la biodiversidad y la estabilidad de la civilización.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["paleoclimatologia", "nucleos_de_hielo"]

variables:
  gas_atrapado: uno_de(["CO2", "O2", "N2"])

respuesta: gas_atrapado
tipo: mc
opciones_explicitas: ["CO2", "O2", "N2"]

enunciado: "Al analizar núcleos de hielo extraídos de la Antártida, los científicos analizan las burbujas de aire atrapadas en las capas de nieve para determinar la concentración histórica de ___ en la atmósfera."

explicacion: |
  Las burbujas de aire atrapadas en el hielo actúan como cápsulas del tiempo, permitiendo medir la composición química de la atmósfera de hace cientos de miles de años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["dendrocronologia", "anillos_de_arboles"]

respuesta: "ancho del anillo"
tipo: completar
respuestas_validas: ["ancho del anillo", "color del anillo", "textura de la corteza"]

enunciado: "En la dendrocronología, la variabilidad climática (como la temperatura o la precipitación) se refleja principalmente en el ___ de cada anillo anual."

explicacion: |
  Un anillo más ancho suele indicar condiciones de crecimiento favorables (más lluvia o temperaturas óptimas), mientras que uno estrecho indica condiciones de estrés ambiental.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["sedimentos", "oceanografia"]

variables:
  isocapa: uno_de([0, 1])

respuesta: isocapa
tipo: ordenar
opciones_explicitas: ["Sedimentación de materia orgánica", "Acumulación de conchas de foraminíferos", "Deposición de partículas terrígenas"]

enunciado: "Para reconstruir un perfil climático en un núcleo de sedimentos oceánicos, se deben analizar los eventos en orden cronológico. Ordena los procesos de formación de un estrato típico (de lo más antiguo a lo más reciente):"

explicacion: |
  El proceso implica la caída de partículas, la acumulación de restos biológicos y la sedimentación continua que forma las capas que luego se estudian.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["isótopos", "oxigeno"]

respuesta: "18O"
tipo: mc
opciones_explicitas: ["12C", "14C", "18O", "16O"]

enunciado: "En paleoclimatología, la relación entre los isótopos de oxígeno de las conchas de foraminíferos en el fondo marino es un indicador clave de la temperatura global. El isótopo más pesado utilizado es el ___."

explicacion: |
  La proporción entre el oxígeno-18 (pesado) y el oxígeno-16 (ligero) en los sedimentos marinos permite calcular las temperaturas de los antiguos océanos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["proxies", "metodologia"]

respuesta: "proxy"
tipo: completar
respuestas_validas: ["proxy", "sensor", "registro"]

enunciado: "Dado que no existían termómetros en el pasado remoto, los científicos utilizan indicadores indirectos como los anillos de los árboles o los núcleos de hielo, denominados técnicamente como ___."

explicacion: |
  Un 'proxy' es una variable física, química o biológica que actúa como un sustituto de una variable climática que no se puede medir directamente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["paleoclimatologia", "co2"]

respuesta: "800000"
tipo: completar
respuestas_validas: ["800000"]

enunciado: "Los registros obtenidos de núcleos de hielo indican que los niveles actuales de CO2 atmosférico son más altos que en cualquier momento de los últimos ___ años."

explicacion: |
  Los núcleos de hielo de la Antártida permiten reconstruir la composición atmosférica de eras pasadas. Los datos muestran que las concentraciones actuales superan los máximos de los últimos 800.000 años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["co2", "comparacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[420, "Superior"], [280, "Inferior"]]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["Superior", "Inferior"]

enunciado: "Considerando que los niveles de CO2 actuales son de aproximadamente {datos[escenario_idx][0]} ppm y que los niveles históricos preindustriales eran de ~280 ppm, la situación actual es ________ respecto al pasado geológico reciente."

explicacion: |
  La concentración actual de CO2 es significativamente más alta que los niveles estables de los últimos milenios, rompiendo el ciclo natural de los últimos 800.000 años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["metodologia", "paleoclimatologia"]

respuesta: "núcleos de hielo"
tipo: completar
respuestas_validas: ["núcleos de hielo"]

enunciado: "Para determinar la concentración de gases atmosféricos en el pasado remoto, los científicos analizan las burbujas de aire atrapadas en los ___."

explicacion: |
  Los núcleos de hielo actúan como cápsulas del tiempo que preservan muestras directas de la atmósfera de hace cientos de miles de años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["secuencia", "co2"]

respuesta: ["Preindustrial", "Máximo glacial", "Actualidad"]
tipo: ordenar
opciones_explicitas: ["Preindustrial", "Máximo glacial", "Actualidad"]

enunciado: "Ordene cronológicamente (de lo más antiguo a lo más reciente) los estados de la concentración de CO2 según el registro de los últimos 800.000 años, considerando que el nivel actual es el más alto."

explicacion: |
  La secuencia refleja el aumento drástico desde los niveles preindustriales, pasando por las fluctuaciones de los periodos glaciares, hasta el pico antropogénico actual.
```

```
metadata:
  materia: "historia_profucha"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["co2", "verdad_falso"]

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Es verdadero o falso que los niveles de CO2 actuales se encuentran dentro de los rangos naturales observados en los últimos 800.000 años registrados en los núcleos de hielo."

explicacion: |
  Es falso. Los niveles actuales han sobrepasado los límites naturales establecidos por los ciclos de hielo y deshielo de los últimos 800.000 años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["paleoclimatologia", "velocidad"]

variables:
  escenario: uno_de([
    ["un aumento de 2°C en 10,000 años", "0.0002"],
    ["un aumento de 2°C en 5,000 años", "0.0004"],
    ["un aumento de 2°C en 2,000 años", "0.001"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "Considerando el escenario de un aumento de temperatura de {escenario[0]}, ¿cuál es la tasa de cambio anual aproximada en grados Celsius por año (expresada como decimal)?"

pasos:
  - "Identificar el cambio total de temperatura (2°C)."
  - "Dividir el cambio total por la cantidad de años para obtener la tasa anual."

respuesta: escenario[idx][1
tipo: completar
tolerancia_abs: 0.00001

explicacion: |
  La tasa se calcula dividiendo el cambio de temperatura entre el tiempo transcurrido. En el escenario actual, la velocidad es órdenes de magnitud superior a los cambios naturales de los periodos interglaciares.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "basico"
  tags: ["magnitud", "comparacion"]

variables:
  datos: [
    ["Ciclos de Milankovitch", "natural"],
    ["Erupciones volcánicas masivas", "natural"],
    ["Actividad antropogénica actual", "antropogénico"]
  ]
  idx: uno_de([0, 1, 2])

enunciado: "El fenómeno de {datos[idx][0]} se clasifica históricamente como un cambio de tipo ___________."

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["natural", "antropogénico"]

explicacion: |
  Los ciclos orbitales (Milankovitch) y el vulcanismo son procesos naturales que han moldeado el clima por millones de años, a diferencia del forzamiento actual.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["co2", "geologia"]

variables:
  caso: uno_de([
    ["Paleoceno-Eoceno (PETM)", "máximo"],
    ["Glaciaciones del Pleistoceno", "mínimo"],
    ["Periodo Cretácico", "moderado"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "En el contexto del {caso[0]}, el aumento de CO2 provocó un cambio de magnitud ___________ en comparación con la variabilidad climática estándar del Holoceno."

respuesta: caso[idx][1
tipo: mc
opciones_explicitas: ["máximo", "mínimo", "moderado"]

explicacion: |
  Eventos como el PETM muestran cambios rápidos de carbono, pero la velocidad actual de emisión de CO2 es excepcionalmente alta comparada con esos registros geológicos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "avanzado"
  tags: ["causalidad", "procesos"]

enunciado: "Ordene cronológicamente los factores que han dominado la variabilidad climática de la Tierra, desde el más lento al más rápido en su impacto actual:"

pasos:
  - "Identificar el ciclo de mayor duración (orbital)."
  - "Identificar el ciclo de duración media (tectónica/volcánica)."
  - "Identificar el factor de cambio instantáneo/decadal (antropogénico)."

opciones_explicitas: ["Ciclos de Milankovitch", "Actividad Volcánica", "Emisiones de GEI"]
respuesta: ["Ciclos de Milankovitch", "Actividad Volcánica", "Emisiones de GEI"]
tipo: ordenar

explicacion: |
  Los ciclos orbitales actúan en escalas de miles de años, el vulcanismo en años/décadas, y las emisiones actuales en escalas de décadas, superando la velocidad de ajuste natural.
```

```
metadata:
  materia: "historia_profunda"
  tema: "cambio_climatico_linea_base_historica"
  nivel: "intermedio"
  tags: ["co2", "concentracion"]

variables:
  escenario_co2: uno_de([
    ["420 ppm", "280"],
    ["300 ppm", "280"],
    ["280 ppm", "280"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "Si la concentración actual de CO2 es de {escenario_co2[0]} ppm, ¿cuál era la concentración promedio aproximada durante el periodo preindustrial (base de comparación histórica)?"

respuesta: escenario_co2[idx][1
tipo: mc
opciones_explicitas: ["280 ppm", "350 ppm", "400 ppm"]

explicacion: |
  El nivel de 280 ppm es el estándar utilizado para representar el estado de equilibrio preindustrial antes de la era de la industrialización masiva.
```
