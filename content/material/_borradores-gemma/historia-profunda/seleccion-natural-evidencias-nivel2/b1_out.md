### 1 — El registro fósil y la continuidad
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["fosiles", "evolucion", "registro_fosil"]

variables:
  escenario: uno_de([
    ["Archaeopteryx", "ave", "reptil"],
    ["Tiktaalik", "pez", "tetrápodo"],
    ["Ambulocetus", "mamífero", "anfibio"]
  ])

enunciado: "El hallazgo de un fósil que presenta características de dos grupos distintos, como el caso de {escenario[0]}, es una evidencia clave de la evolución. Este tipo de organismo se denomina forma ___."

respuestas_validas: ["transicional"]
tipo: completar

explicacion: |
  Las formas transicionales muestran características intermedias entre grupos de organismos, permitiendo reconstruir la historia evolutiva de linajes como el de las aves o los mamíferos acuáticos.
```

### 2 — Evolución de los Equinos
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["caballos", "evidencia", "lineaje"]

variables:
  secuencia_correcta: ["Eohippus", "Mesohippus", "Merychippus", "Equus"]

enunciado: "El registro fósil de los équidos muestra una progresión clara en el tamaño y la morfología de los dientes y las extremidades. Ordene cronológicamente los siguientes géneros desde el más antiguo al más reciente:"

opciones_explicitas: ["Eohippus", "Mesohippus", "Merychippus", "Equus"]
respuesta: ["Eohippus", "Mesohippus", "Merychippus", "Equus"]
tipo: ordenar

explicacion: |
  La evolución de los caballos muestra una transición desde animales pequeños de varios dedos hacia animales más grandes con un solo dedo (equino), adaptándose a cambios en el hábitat de bosque a pradera.
```

### 3 — Transición de Peces a Tetrápodos
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "avanzado"
  tags: ["tetrapodos", "transicion", "fofiles"]

variables:
  caso: uno_de([
    ["Tiktaalik", "posee escamas y aletas lobuladas con estructuras óseas de extremidades"],
    ["Acanthostega", "presenta dedos pero mantiene una morfología muy acuática"],
    ["Ichthyostega", "muestra una columna vertebral más robusta para soportar peso"]
  ])

enunciado: "Analice el siguiente caso fósil: {caso[0]}. Según la evidencia del registro fósil, este organismo representa una etapa de transición hacia la vida terrestre porque ___."

opciones_explicitas: [
  "posee escamas y aletas lobuladas con estructuras óseas de extremidades",
  "presenta dedos pero mantiene una morfología muy acuática",
  "muestra una columna vertebral más robusta para soportar peso"
]
respuesta: "posee escamas y aletas lobuladas con estructuras óseas de extremidades"
tipo: mc

explicacion: |
  Los peces de aletas lobuladas como Tiktaalik poseen estructuras óseas en sus extremidades que son homólogas a los huesos de los miembros de los tetrápodos modernos.
```

### 4 — El origen de la cetacea
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "avanzado"
  tags: ["ballenas", "evolucion", "transicion"]

variables:
  etapa: uno_de([
    ["Pakicetus", "un mamífero terrestre con oídos adaptados para el agua"],
    ["Ambulocetus", "un mamífero con extremidades adaptadas para la natación"],
    ["Basilosaurus", "un cetáceo con extremidades traseras vestigiales"]
  ])

enunciado: "La transición de mamíferos terrestres a cetáceos está documentada por el registro fósil. Un ejemplo es {etapa[0]}, que se caracteriza por ser ___."

respuestas_validas: ["un mamífero terrestre con oídos adaptados para el agua", "un mamífero con extremidades adaptadas para la natación", "un cetáceo con extremidades traseras vestigiales"]
tipo: completar

explicacion: |
  El registro fósil de las ballenas es uno de los más completos, mostrando la reducción de extremidades traseras y la modificación de los miembros anteriores en aletas.
```

### 5 — Interpretación del Registro Fósil
```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "basico"
  tags: ["registro_fosil", "conceptos"]

enunciado: "Si el registro fósil muestra que una especie X aparece en estratos geológicos antiguos y una especie Y aparece en estratos más jóvenes con estructuras similares pero más complejas, esto sugiere que ___."

opciones_explicitas: [
  "ha ocurrido un proceso de cambio evolutivo a través del tiempo",
  "las especies se crearon de forma independiente sin relación",
  "el registro fósil es incompleto y no permite conclusiones"
]
respuesta: "ha ocurrido un proceso de cambio evolutivo a través del tiempo"
tipo: mc

explicacion: |
  La sucesión de formas en el registro fósil permite observar la transformación de linajes biológicos a lo largo de la escala temporal geológica.
```