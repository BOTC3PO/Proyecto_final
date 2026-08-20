### 1 — Composición de la atmósfera primitiva
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

### 2 — El papel del vapor de agua
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

### 3 — Ausencia de oxígeno
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

tipo: input
tolerancia_abs: 0.1

enunciado: "Si en un modelo de atmósfera primitiva de {cantidad_co2} unidades de gas, el 40% es Dióxido de carbono (CO2), ¿cuántas unidades de CO2 hay?"

pasos:
  - "Identificar el total de unidades de gas: {cantidad_co2}"
  - "Calcular el 40% de ese valor: {cantidad_co2} * 0.4"

explicacion: |
  El cálculo se realiza multiplicando el total de unidades por el porcentaje expresado en decimal (0.4).
```