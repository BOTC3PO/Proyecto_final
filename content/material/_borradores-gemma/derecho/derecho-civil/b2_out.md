### 1 — El contrato de compraventa
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["contratos", "compraventa"]

variables:
  objeto: uno_de(["un automóvil", "una casa", "un terreno"])
  precio: uno_de([15000, 250000, 50000])

enunciado: "Juan celebra un contrato de compraventa con Pedro donde se acuerda la transferencia de {objeto} por un valor de ${precio}. En este acto, se perfecciona el consentimiento entre las partes sobre el objeto y el precio."

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Verdadero"
tipo: "vf"

explicacion: |
  El contrato de compraventa es el acuerdo de voluntades donde una parte se obliga a entregar un bien y la otra a pagar un precio cierto. Al existir consentimiento sobre el objeto y el precio, el contrato es válido.
```

### 2 — Capacidad de ejercicio
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["capacidad", "personas"]

variables:
  edad: uno_de([16, 25, 30])

enunciado: "Un individuo de {edad} años desea realizar un contrato de arrendamiento de forma autónoma. Según la normativa civil general, si la persona es mayor de edad, posee capacidad de ejercicio."

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Verdadero"
tipo: "vf"

explicacion: |
  La capacidad de ejercicio es la aptitud para ejercer derechos y contraer obligaciones por sí mismo. En la mayoría de las legislaciones, se adquiere con la mayoría de edad.
```

### 3 — Elementos de la sucesión
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["sucesiones", "herencia"]

variables:
  causa: uno_de(["testamento", "falta de testamento"])

enunciado: "Ante el fallecimiento de una persona, si la causa de la transmisión de sus bienes es {causa}, nos encontramos ante una sucesión testamentaria o una sucesión legítima (ab intestato) respectivamente."

respuestas_validas: ["testamentaria", "legítima"]
respuesta: "testamentaria"
tipo: "completar"

explicacion: |
  La sucesión testamentaria es aquella que se rige por la voluntad del causante expresada en un testamento. La legítima (o ab intestato) ocurre cuando la ley determina a los herederos ante la ausencia de testamento.
```

### 4 — Requisitos de validez
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "avanzado"
  tags: ["acton_juridico", "vicios"]

variables:
  vicio: uno_de(["error", "dolo", "violencia"])

enunciado: "Para que un acto jurídico sea válido, su voluntad debe ser libre. Si una persona es obligada mediante amenazas físicas para firmar un contrato, el vicio que afecta la validez es el ___."

respuestas_validas: ["vicio de violencia"]
respuesta: "vicio de violencia"
tipo: "completar"

explicacion: |
  La violencia es un vicio del consentimiento que consiste en la coacción física o moral que anula la libertad de la voluntad del sujeto.
```

### 5 — El proceso de transferencia de propiedad
```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["propiedad", "derechos_reales"]

variables:
  bien: uno_de(["inmueble", "mueble"])

enunciado: "Para que la transferencia de un {bien} sea oponible a terceros y perfeccione el derecho real de propiedad, se deben seguir ciertos pasos legales. Ordene el proceso típico de una compraventa de este tipo:"

opciones_explicitas: ["Escritura pública", "Pago del precio", "Inscripción registral"]
respuesta: ["Escritura pública", "Pago del precio", "Inscripción registral"]
tipo: "ordenar"

explicacion: |
  En bienes inmuebles, el proceso requiere la formalidad de la escritura, el cumplimiento de la contraprestación (pago) y la inscripción en el Registro de la Propiedad para que el derecho sea oponible a terceros.
```