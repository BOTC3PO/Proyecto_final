# Historia Profunda — Atmosfera primitiva (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Composición de la atmósfera primitiva

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["geologia", "atmosfera"]

tipo: mc
opciones_explicitas: ["Oxígeno, Nitrógeno y Metano", "Vapor de agua, Dióxido de carbono y Metano", "Dióxido de azufre, Helio y Oxígeno", "Nitrógeno, Argón y Oxígeno"]
respuesta: "Vapor de agua, Dióxido de carbono y Metano"

enunciado: "Durante los inicios de la Tierra, la atmósfera primitiva estaba compuesta principalmente por una mezcla de gases de origen volcánico. ¿Cuál de las siguientes opciones describe mejor su composición?"

explicacion: |
  La atmósfera primitiva carecía de oxígeno libre (O2) y estaba dominada por gases de efecto invernadero y compuestos volcánicos como el CO2, el vapor de agua y el metano.
```

### 2 — El papel del vapor de agua

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["ciclo_del_agua", "geologia"]

variables:
  escenario: [["El vapor de agua se condensó para formar océanos", "La atmósfera era extremadamente seca"], ["El vapor de agua permitió la formación de los mares", "El vapor de agua era inexistente"]]

tipo: mc
opciones_explicitas: ["Escenario A", "Escenario B"]
respuesta: "Escenario A"

enunciado: "Considerando la presencia masiva de vapor de agua en la atmósfera primitiva, {escenario[0][0]}."

explicacion: |
  La condensación del vapor de agua a medida que la Tierra se enfriaba fue el proceso fundamental que dio origen a los océanos primordiales.
```

### 3 — Ausencia de oxígeno

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["quimica_antigua"]

tipo: completar
respuestas_validas:
  - "anóxica"

enunciado: "Debido a la ausencia de vida fotosintética en sus inicios, la atmósfera primitiva era una atmósfera ___________."

explicacion: |
  Se denomina atmósfera 'anóxica' a aquella que no posee oxígeno libre (O2), característica principal de la Tierra primitiva.
```

### 4 — Origen de los gases atmosféricos

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
respuesta_orden: ["Formación de la Tierra", "Actividad volcánica intensa", "Emisión de gases volcánicos", "Formación de la atmósfera primitiva"]
```

### 5 — Cálculo de gases (Simulación)

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
  respuesta_correcta: cantidad_co2 * 0.4

tipo: completar
tolerancia_abs: 0.1
respuesta: respuesta_correcta

enunciado: "Si en un modelo de atmósfera primitiva de {cantidad_co2} unidades de gas, el 40% es Dióxido de carbono (CO2), ¿cuántas unidades de CO2 hay?"

pasos:
  - "Identificar el total de unidades de gas: {cantidad_co2}"
  - "Calcular el 40% de ese valor: {cantidad_co2} * 0.4"

explicacion: |
  El cálculo se realiza multiplicando el total de unidades por el porcentaje expresado en decimal (0.4).
```

### 6 — La naturaleza de la vida temprana

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["biologia", "evolucion", "anaerobico"]

respuesta: "anaeróbica"
tipo: completar
respuestas_validas:
  - "anaeróbica"
  - "anaerobia"

enunciado: "Debido a la ausencia de oxígeno libre en la atmósfera primitiva, la vida temprana era de tipo ___."

explicacion: |
  La atmósfera primitiva era un ambiente reductor. Al no haber O2, los primeros organismos no podían realizar la respiración aeróbica y debían obtener energía mediante procesos anaeróbicos.
```

### 7 — El impacto del oxígeno

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["oxigeno", "metabolismo"]

variables:
  escenario: uno_de([["presencia de O2", "aeróbica"], ["ausencia de O2", "anaeróbica"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["aeróbica", "anaeróbica"]

enunciado: "Si la atmósfera primitiva carecía de oxígeno libre, ¿qué tipo de metabolismo predominaba en los organismos de esa época?"

pasos:
  - "Identificar la condición atmosférica: ausencia de O2."
  - "Relacionar la condición con el tipo de respiración celular."

explicacion: |
  La falta de oxígeno obligaba a los organismos a utilizar otras moléculas como aceptores de electrones, caracterizando un metabolismo anaeróbico.
```

### 8 — Evolución de la respiración

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "avanzado"
  tags: ["evolucion", "oxigeno"]

respuesta_orden: ["Anaerobiosis", "Fotosíntesis oxigénica", "Acumulación de O2", "Respiración aeróbica"]
tipo: ordenar
opciones_explicitas: ["Anaerobiosis", "Fotosíntesis oxigénica", "Acumulación de O2", "Respiración aeróbica"]

enunciado: "Ordena cronológicamente los eventos relacionados con la transición de una atmósfera sin oxígeno a una con oxígeno:"

explicacion: |
  Primero existía la vida anaerobia. Luego, la aparición de organismos fotosintéticos (cianobacterias) comenzó a liberar O2, el cual se acumuló hasta permitir la evolución de la respiración aeróbica.
```

### 9 — Verdadero o Falso: Oxígeno y Vida

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

### 10 — El papel del oxígeno

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

### 11 — Composición de la atmósfera primitiva

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["atmosfera", "oxigeno", "evolucion"]

tipo: mc
opciones_explicitas: ["Reductora (sin O2)", "Oxidante (rica en O2)", "Nitrogenada pura", "Ácida y gaseosa"]
respuesta: "Reductora (sin O2)"

enunciado: "La atmósfera de la Tierra en sus inicios era de naturaleza ___________, debido a la ausencia de oxígeno libre."

explicacion: |
  La atmósfera primitiva era un ambiente reductor porque no existía el oxígeno molecular (O2) para oxidar los gases presentes.
```

### 12 — El gran cambio oxidativo

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["fotosintesis", "oxigeno", "biologia"]

enunciado: "El factor principal que transformó la atmósfera primitiva hacia una atmósfera con oxígeno fue ___."

tipo: completar
respuestas_validas:
  - "la aparición de la fotosíntesis"

explicacion: |
  La fotosíntesis realizada por organismos antiguos (cianobacterias) liberó oxígeno como subproducto, cambiando la química global del planeta.
```

### 13 — Porcentajes de oxígeno

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

### 14 — Secuencia de evolución atmosférica

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "avanzado"
  tags: ["secuencia", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Atmósfera primitiva reductora", "Aparición de fotosíntesis", "Acumulación de O2", "Atmósfera oxidante actual"]

enunciado: "Ordena cronológicamente los procesos que definieron la evolución de la atmósfera terrestre:"

respuesta_orden: ["Atmósfera primitiva reductora", "Aparición de fotosíntesis", "Acumulación de O2", "Atmósfera oxidante actual"]

explicacion: |
  Primero existió una atmósfera sin O2, luego la vida fotosintética comenzó a producirlo, el O2 se acumuló y finalmente estableció la atmósfera oxidante que conocemos.
```

### 15 — Comparación de estados químicos

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["quimica", "oxigeno"]

enunciado: "Si la atmósfera es la actual, su estado es ___. Si es la primitiva, su estado es reductora."

tipo: mc
opciones_explicitas: ["oxidante", "reductora"]

respuesta: "oxidante"

explicacion: |
  La atmósfera actual es oxidante debido a la presencia masiva de O2, mientras que la primitiva era reductora por la falta de este gas.
```

### 16 — El origen de los océanos

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["condensacion", "oceanos", "agua"]

respuesta: "condensación"
tipo: completar
respuestas_validas:
  - "condensación"
  - "condensacion"

enunciado: "A medida que la Tierra se enfriaba, el vapor de agua presente en la atmósfera primitiva sufrió un proceso de ___ que dio lugar a las primeras lluvias y la formación de los océanos."

explicacion: |
  Cuando la superficie terrestre bajó de la temperatura crítica, el vapor de agua se transformó en líquido, llenando las cuencas oceánicas.
```

### 17 — El estado de la materia

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

### 18 — Secuencia de eventos geológicos

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["secuencia", "enfriamiento"]

enunciado: "Ordená cronológicamente los eventos que llevaron a la formación de los océanos primitivos:"
respuesta_orden: ["Enfriamiento de la corteza", "Condensación del vapor", "Lluvias torrenciales", "Formación de océanos"]
tipo: ordenar
opciones_explicitas: ["Enfriamiento de la corteza", "Condensación del vapor", "Lluvias torrenciales", "Formación de océanos"]

explicacion: |
  El orden lógico es: primero la Tierra debe enfriarse lo suficiente para que el vapor no vuelva a evaporarse, luego ocurre la condensación, las lluvias y finalmente se estabilizan los océanos.
```

### 19 — El papel del vapor de agua

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

### 20 — Cálculo de temperatura crítica (Simulación)

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

### 21 — Composición gaseosa inicial

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["geologia", "atmosfera"]

enunciado: "En la atmósfera primitiva, un componente dominante era el dióxido de carbono (CO2), mientras que en la atmósfera actual el componente predominante es el ___."

respuesta: "Nitrógeno (N2)"
tipo: mc
opciones_explicitas: ["Dióxido de carbono (CO2)", "Metano (CH4)", "Oxígeno (O2)", "Nitrógeno (N2)"]

explicacion: |
  La atmósfera primitiva era una atmósfera reductora, rica en gases como CO2, CH4 y N2, pero carecía de oxígeno libre (O2) hasta la aparición de la fotosíntesis oxigénica.
```

### 22 — El gran cambio oxidativo

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["evolucion", "oxigeno"]

variables:
  evento: [["Oxígeno (O2)", "Dióxido de carbono (CO2)"], ["Oxígeno (O2)", "Metano (CH4)"]]
  idx: uno_de([0,1])
  gas_liberado: evento[idx][0]
  gas_abundante: evento[idx][1]

enunciado: "La aparición de organismos fotosintéticos transformó la atmósfera al liberar {gas_liberado} en grandes cantidades, reemplazando la abundancia de {gas_abundante}."

respuesta: gas_liberado
tipo: completar
respuestas_validas:
  - "Oxígeno (O2)"
  - "Dióxido de carbono (CO2)"
  - "Metano (CH4)"
  - "Nitrógeno (N2)"

pasos:
  - "Identificar el gas producido por la fotosíntesis."
  - "Identificar el gas que era abundante antes de la fotosíntesis."

explicacion: |
  La Gran Oxidación fue un evento biológico que cambió la química planetaria, pasando de una atmósfera reductora a una oxidante.
```

### 23 — Comparación de gases traza

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

respuesta: comparativa[idx][0]
tipo: mc
opciones_explicitas: ["Metano (CH4)", "Dióxido de carbono (CO2)", "Vapor de agua (H2O)", "Oxígeno (O2)"]

explicacion: |
  Muchos gases que hoy son trazas (como el metano) eran componentes mayoritarios en la Tierra primitiva debido a la intensa actividad volcánica y la falta de sumideros oxidantes.
```

### 24 — Secuencia de evolución atmosférica

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "intermedio"
  tags: ["cronologia", "procesos"]

enunciado: "Ordena la evolución de la composición atmosférica desde la Tierra primitiva hasta la actualidad:"

opciones_explicitas: ["Atmósfera reductora (CH4, NH3, H2O)", "Atmósfera con presencia de O2 (Gran Oxidación)", "Atmósfera moderna (N2, O2, Ar)"]
respuesta_orden: ["Atmósfera reductora (CH4, NH3, H2O)", "Atmósfera con presencia de O2 (Gran Oxidación)", "Atmósfera moderna (N2, O2, Ar)"]
tipo: ordenar

explicacion: |
  La secuencia lógica comienza con gases volcánicos y de origen primordial, sigue con la revolución biológica del oxígeno y culmina con la composición actual.
```

### 25 — El rol del Oxígeno

```
metadata:
  materia: "historia_profunda"
  tema: "atmosfera_primitiva"
  nivel: "basico"
  tags: ["biologia", "oxigeno"]

enunciado: "En la atmósfera actual, el porcentaje de oxígeno es aproximadamente del 0.21 (valor decimal), lo que equivale al ___ de la mezcla total."

respuesta: "21%"
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El oxígeno es el segundo gas más abundante hoy en día, con una concentración cercana al 21%.
```
