### 1 — El sentido de la norma
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["interpretacion", "hermeneutica"]

respuesta: "gramatical"
tipo: completar
respuestas_validas: ["gramatical", "teleologica", "sistemática"]

enunciado: "Cuando un juez se limita a analizar el significado literal de las palabras utilizadas en un precepto legal para determinar su alcance, está aplicando un método de interpretación de tipo ___."

explicacion: |
  El método gramatical o literal es el primer paso de la interpretación; consiste en analizar la sintaxis y el semántica del texto normativo para hallar su sentido inmediato.
```

### 2 — Interpretación Teleológica
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["finalidad", "ratio_legis"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [[["El fin de la norma es proteger la vida", "falso"], ["El fin de la norma es la sanción", "falso"]], [["La norma busca la equidad", "verdadero"], ["La norma busca el castigo"], ["La norma busca la paz", "verdadero"]]]

respuesta: escenarios[caso_idx][0][1]
tipo: vf

enunciado: "En el escenario seleccionado, la interpretación teleológica busca determinar el significado de la norma basándose en su ___."

explicacion: |
  La interpretación teleológica (o finalista) busca el 'espíritu' de la ley, es decir, el fin o la finalidad (ratio legis) para la cual fue creada la norma.
```

### 3 — El método sistemático
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "intermedio"
  tags: ["sistema", "coherencia"]

respuesta: "sistemática"
tipo: mc
opciones_explicitas: ["gramatical", "sistemática", "histórica", "evolutiva"]

enunciado: "Un abogado sostiene que una norma no puede entenderse de forma aislada, sino que debe integrarse con el resto del ordenamiento jurídico para evitar contradicciones. ¿Qué método está utilizando?"

explicacion: |
  La interpretación sistemática considera que la norma es parte de un todo (el sistema jurídico) y que su sentido se completa al relacionarla con otras normas del mismo cuerpo legal.
```

### 4 — Pasos de la aplicación normativa
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "avanzado"
  tags: ["procedimiento", "subsunción"]

respuesta: ["Subsunción", "Interpretación", "Fijación del hecho"]
tipo: ordenar
opciones_explicitas: ["Subsunción", "Interpretación", "Fijación del hecho"]

enunciado: "Ordene correctamente los pasos lógicos para aplicar una norma a un caso concreto, desde la recepción del hecho hasta la decisión final."

explicacion: |
  Primero se deben fijar los hechos (fase fáctica), luego interpretar la norma para entender su alcance (fase normativa) y finalmente realizar la subsunción (encuadramiento del hecho en la norma).
```

### 5 — Interpretación Histórica
```
metadata:
  materia: "derecho"
  tema: "interpretacion_normativa"
  nivel: "basico"
  tags: ["historia", "legislador"]

respuesta: verdadero
tipo: vf

enunciado: "La interpretación histórica consiste en analizar los antecedentes de la norma, como los debates parlamentarios o la exposición de motivos, para comprender la voluntad del legislador original."

explicacion: |
  Correcto. Este método busca reconstruir la intención del legislador analizando el contexto y los documentos que dieron origen a la norma.
```