### 1 — La herencia cultural en la identidad
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "basico"
  tags: ["identidad", "cultura", "socializacion"]

variables:
  escenario: uno_de([
    ["Juan creció en una cultura donde el éxito se mide por la riqueza individual.", "individualismo"],
    ["Ana creció en una cultura donde el éxito se mide por la armonía del grupo.", "colectivismo"]
  ])

enunciado: "Si una persona es formada bajo los valores de {escenario[0]}, su construcción de identidad estará marcada por el {escenario[1]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["individualismo", "colectivismo"]

explicacion: |
  La cultura actúa como una herencia que proporciona los marcos de referencia (valores, normas, símbolos) a través de los cuales el individuo construye su identidad. No somos seres aislados, sino el resultado de la internalización de la cultura heredada.
```

### 2 — El proceso de socialización
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["socializacion", "agentes_socializadores"]

variables:
  agente: uno_de(["la familia", "la escuela", "el grupo de pares"])

enunciado: "El proceso mediante el cual un individuo internaliza las normas y valores de su entorno se denomina socialización. Si el primer contacto con estas normas ocurre en {agente}, estamos ante la socialización primaria."

respuesta: verdadero
tipo: vf

explicacion: |
  La socialización primaria es la base de la estructura de la personalidad y ocurre principalmente en el núcleo familiar, donde el niño depende totalmente del otro para su formación psíquica y cultural.
```

### 3 — Construcción del Yo social
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["yo", "otro", "identidad"]

enunciado: "Para que un individuo desarrolle un sentido del 'Yo', necesita la interacción con un 'Otro' que le devuelva una imagen de sí mismo. Completa la secuencia de la formación de la identidad:"

pasos:
  - "1. El individuo nace en un contexto cultural determinado."
  - "2. El entorno social interactúa con el individuo."
  - "3. El individuo internaliza estas interacciones para formar su ___."

respuesta_validas: ["identidad", "self", "yo"]
respuesta: "identidad"
tipo: completar

explicacion: |
  La identidad no es algo que surge de la nada; es un proceso dialéctico entre el individuo y la cultura. La cultura nos 'ofrece' un lenguaje y un rol, y nosotros lo habitamos.
```

### 4 — El peso de la herencia cultural
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "avanzado"
  tags: ["determinismo", "cultura", "herencia"]

variables:
  caso: uno_de([
    ["Un individuo intenta vivir de forma totalmente aislada de cualquier norma cultural.", "aislamiento"],
    ["Un individuo adopta las tradiciones de sus padres sin cuestionarlas.", "implantacion"]
  ])

enunciado: "En el caso de {caso[0]}, el individuo sigue operando bajo estructuras lingüísticas y cognitivas heredadas de la cultura, lo que demuestra que la dependencia cultural es:"

respuesta: "inevitables"
tipo: completar
respuestas_validas: ["inevitables", "nulas", "mínimas"]

explicacion: |
  Incluso en el intento de aislamiento, el pensamiento está mediado por el lenguaje y las categorías conceptuales que la cultura nos ha proporcionado. No existe un 'yo' puro sin la mediación cultural.
```

### 5 — Etapas de la formación de la identidad cultural
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["secuencia", "desarrollo", "cultura"]

enunciado: "Ordena las etapas del desarrollo de la identidad en relación con la herencia cultural, desde la recepción pasiva hasta la autonomía crítica:"

opciones_explicitas: [
  "Internalización de normas culturales",
  "Interacción con grupos sociales diversos",
  "Reevaluación crítica de la herencia cultural"
]
respuesta: ["Internalización de normas culturales", "Interacción con grupos sociales diversos", "Reevaluación crítica de la herencia cultural"]
tipo: ordenar

explicacion: |
  El desarrollo de la identidad comienza con la absorción de la cultura (socialización primaria), continúa con la exploración de la diversidad en la sociedad (socialización secundaria) y puede culminar en una síntesis personal donde el sujeto elige qué elementos de su herencia mantener o transformar.
```