### 1 — El vacío ecológico
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["extincion", "nichos", "evolucion"]

respuesta: "radiación adaptativa"
tipo: completar
respuestas_validas: ["radiación adaptativa"]

enunciado: "Tras la extinción de los dinosaurios hace 66 millones de años, los mamíferos experimentaron un proceso de diversificación rápida para ocupar nuevos nichos, proceso conocido como ________."

explicacion: |
  La extinción de los dinosaurios eliminó a los grandes depredadores y herbívoros, permitiendo que los mamíferos, que antes eran mayormente pequeños, ocuparan esos roles ecológicos mediante la radiación adaptativa.
```

### 2 — Cronología de la transición
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["tiempo", "geologia", "paleontologia"]

variables:
  escenario: uno_de([
    ["66 millones de años", "Cenomaniense"],
    ["230 millones de años", "Triásico"],
    ["66 millones de años", "Cretácico-Paleógeno"]
  ])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["66 millones de años", "230 millones de años", "66 millones de años", "100 millones de años"]

enunciado: "La gran extinción que permitió la radiación de los mamíferos ocurrió hace aproximadamente {escenario[0]}."

explicacion: |
  El evento de extinción masiva del Cretácico-Paleógeno ocurrió hace unos 66 millones de años, marcando el inicio de la era de los mamíferos.
```

### 3 — El rol de los nichos
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["ecologia", "nichos"]

respuesta: "vacíos"
tipo: mc
opciones_explicitas: ["llenos", "vacíos", "estables", "competitivos"]

enunciado: "La disponibilidad de nichos ecológicos ________ fue el factor clave que permitió la rápida diversificación de los mamíferos tras la extinción masiva."

explicacion: |
  Al desaparecer los grandes reptiles, quedaron nichos (roles en el ecosistema) vacíos que fueron aprovechados por los mamíferos.
```

### 4 — Secuencia de la radiación
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["proceso", "evolucion"]

respuesta: ["Extinción masiva", "Ocupación de nichos", "Radiación adaptativa", "Diversificación moderna"]
tipo: ordenar
opciones_explicitas: ["Extinción masiva", "Ocupación de nichos", "Radiación adaptativa", "Diversificación moderna"]

enunciado: "Ordena cronológicamente los eventos que permitieron la dominancia de los mamíferos:"

explicacion: |
  Primero ocurre el evento de extinción, luego los supervivientes ocupan los espacios vacíos, lo que dispara la radiación adaptativa y finalmente resulta en la diversidad de formas que conocemos.
```

### 5 — El estado de los mamíferos pre-extinción
```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["comparativa", "evolucion"]

respuesta: "pequeños"
tipo: mc
opciones_explicitas: ["gigantes", "pequeños", "acuáticos", "voladores"]

enunciado: "Antes de la radiación post-extinción, la mayoría de los mamíferos se caracterizaban por ser animales de tamaño ________."

explicacion: |
  Durante el Mesozoico, los mamíferos coexistieron con los dinosaurios y, para evitar la competencia y la depredación, la mayoría mantuvo tamaños reducidos.
```