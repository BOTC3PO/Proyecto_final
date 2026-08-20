### 1 — El concepto de Nación
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["nacionalismo", "identidad"]

respuesta: "Estado"
tipo: "completar"
respuestas_validas: ["Estado"]

enunciado: "El nacionalismo sostiene que una nación, entendida como un grupo con identidad cultural, lengua o historia común, debe tener su propio ___."

explicacion: |
  El nacionalismo es la ideología que vincula la identidad de un grupo cultural (nación) con la estructura política de un territorio soberano (Estado).
```

### 2 — Requisitos del Nacionalismo
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["ideologia", "componentes"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [
    ["lengua común", "historia compartida", "territorio definido"],
    ["religión única", "monarquía absoluta", "sistema feudal"],
    ["clase obrera", "lucha de clases", "plusvalía"]
  ]
  correctos: [
    ["lengua común", "historia compartida", "territorio definido"],
    ["religión única", "monarquía absoluta", "sistema feudal"],
    ["clase obrera", "lucha de clases", "plusvalía"]
  ]

respuesta: datos[escenario_idx][0]
tipo: "ordenar"
opciones_explicitas: ["lengua común", "historia compartida", "territorio definido", "religión única", "monarquía absoluta", "sistema feudal", "clase obrera", "lucha de clases", "plusvalía"]

enunciado: "Seleccione los elementos que históricamente han servido como pilares para la construcción de una identidad nacional según el nacionalismo romántico:"

explicacion: |
  Para que un grupo se reconozca como nación, suele requerir elementos de cohesión como la lengua, la historia y un territorio.
```

### 3 — Consecuencia de la identidad nacional
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "basico"
  tags: ["geopolitica"]

respuesta: "fragmentación"
tipo: "mc"
opciones_explicitas: ["unificación", "fragmentación", "globalización", "feudalización"]

enunciado: "El auge de los nacionalismos en el siglo XIX provocó la ___ de imperios multiétnicos que contenían diversas naciones sin identidad propia."

explicacion: |
  Al buscar cada grupo su propio Estado, los grandes imperios (como el Austriaco o el Otomano) sufrieron procesos de fragmentación territorial.
```

### 4 — El rol del Estado-Nación
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "intermedio"
  tags: ["soberania"]

respuesta: "soberanía"
tipo: "completar"
respuestas_validas: ["soberanía"]

enunciado: "El proyecto del Estado-Nación busca que el poder político sea ejercido por una nación que posee ___ sobre su territorio."

explicacion: |
  La soberanía es el derecho de un Estado a autogobernarse sin interferencias externas, un concepto clave para la legitimidad nacionalista.
```

### 5 — Identidad vs. Soberanía
```
metadata:
  materia: "historia_profunda"
  tema: "estados_nacionales"
  nivel: "avanzado"
  tags: ["teoria_politica"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["Un grupo con cultura propia pero sin fronteras claras.", "Un Estado con fronteras claras pero con múltiples etnias sin cohesión."],
    ["Un grupo con cultura propia pero sin fronteras claras.", "Un Estado con fronteras claras pero con múltiples etnias sin cohesión."]
  ]
  respuestas: [
    "Nación sin Estado",
    "Estado sin Nación"
  ]

respuesta: respuestas[caso_idx]
tipo: "mc"
opciones_explicitas: ["Nación sin Estado", "Estado sin Nación"]

enunciado: "Analice el siguiente escenario: {casos[caso_idx][0]} ¿Qué situación describe mejor la tensión nacionalista?"

explicacion: |
  La tensión surge precisamente cuando la delimitación de la 'nación' (identidad) no coincide con la delimitación del 'Estado' (fronteras políticas).
```