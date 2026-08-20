### 1 — Naturaleza del Derecho Comercial
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["caracteristicas", "comparacion"]

respuesta: "especial"
tipo: "completar"
respuestas_validas: ["especial", "especialidad"]

enunciado: "A diferencia del Derecho Civil, que es de carácter general, el Derecho Comercial se caracteriza por su naturaleza ___."

explicacion: |
  El Derecho Comercial es una rama especial del Derecho que regula actos de comercio y sujetos específicos, diferenciándose de la generalidad del Derecho Civil.
```

### 2 — Sujetos del Derecho Comercial
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["sujetos", "comerciante"]

opciones_explicitas: ["Persona física únicamente", "Persona física y persona jurídica", "Solo sociedades anónimas", "Solo personas físicas"]
respuesta: "Persona física y persona jurídica"
tipo: "mc"

enunciado: "En el ámbito del Derecho Comercial, ¿quiénes pueden ser considerados sujetos de derecho (comerciantes/empresarios)?"

explicacion: |
  El Derecho Comercial regula tanto a las personas humanas (físicas) como a las personas jurídicas (sociedades) que realizan actos de comercio.
```

### 3 — Ámbito de Aplicación
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["aplicacion", "contratos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["compraventa de un auto entre particulares", "compraventa de mercadería para reventa"],
    ["alquiler de una vivienda para uso familiar", "contrato de leasing de maquinaria industrial"]
  ]
  tipo_acto: ["civil", "comercial"]
  respuestas: [
    ["civil", "civil"],
    ["comercial", "comercial"]
  ]

respuesta: respuestas[escenario_idx][1]
tipo: "vf"

enunciado: "Analice el siguiente caso: '{escenarios[escenario_idx][0]}'. ¿El acto jurídico resultante es de naturaleza {tipo_acto[0]}?"

explicacion: |
  Si el acto tiene como fin el lucro o la intermediación en el mercado, se rige por el Derecho Comercial; de lo contrario, pertenece al Derecho Civil.
```

### 4 — Diferencia en la Responsabilidad
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "avanzado"
  tags: ["responsabilidad", "quiebra"]

respuesta: "quiebra"
tipo: "completar"
respuestas_validas: ["quiebra", "concurso preventivo"]

enunciado: "Mientras que en el Derecho Civil la insolvencia se resuelve mediante procesos de ejecución patrimonial, en el Derecho Comercial la insolvencía del comerciante se regula principalmente a través del proceso de ___."

explicacion: |
  El Derecho Comercial posee institutos específicos para la insolvencia, como el concurso preventivo y la quiebra, para proteger el crédito y la unidad de la masa.
```

### 5 — Evolución del Derecho Comercial
```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["historia", "evolucion"]

opciones_explicitas: ["Derecho de castas", "Derecho de clases", "Derecho de corporaciones", "Derecho de individuos"]
respuesta: "Derecho de corporaciones"
tipo: "mc"

enunciado: "Históricamente, el Derecho Comercial se originó como un derecho de ___, basado en los usos y costumbres de los gremios de mercaderes, diferenciándose del derecho romano-civilista."

explicacion: |
  El origen del derecho comercial es corporativo, nacido de las necesidades de los estamentos de comerciantes que requerían reglas rápidas y basadas en la costumbre.
```