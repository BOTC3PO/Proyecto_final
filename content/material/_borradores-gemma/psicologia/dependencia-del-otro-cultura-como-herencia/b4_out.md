### 1 — Identidad y Herencia Cultural
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "intermedio"
  tags: ["identidad", "cultura", "herencia"]

respuesta: "interactividad"
tipo: completar
respuestas_validas: ["interactividad"]

enunciado: "A diferencia de la herencia biológica que se transmite por genes, la formación de la identidad a través de la cultura se da mediante la ___________ con los otros significativos."

explicacion: |
  La identidad no es un objeto dado, sino un proceso dinámico que surge en la interacción con el entorno cultural y los otros.
```

### 2 — Socialización vs. Identidad Individual
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "basico"
  tags: ["socializacion", "individuo"]

variables:
  escenario: uno_de([
    ["Proceso de aprendizaje de normas", "socialización"],
    ["Sentido de pertenencia y rasgos únicos", "identidad"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["socialización", "identidad", "instinto", "genética"]

enunciado: "Si la socialización es el proceso de internalización de la cultura, la identidad es el resultado de ese proceso donde el sujeto se distingue de la masa. ¿Qué concepto describe la construcción del 'yo' a partir de la herencia cultural?"

explicacion: |
  La identidad es la síntesis personal de los elementos culturales heredados y la subjetividad propia.
```

### 3 — El rol del 'Otro' en el desarrollo
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "intermedio"
  tags: ["otro", "subjetividad"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la subjetividad humana es dependiente de la cultura, ya que el lenguaje y las categorías de pensamiento son herencias sociales?"

explicacion: |
  Sin el lenguaje y los símbolos proporcionados por la cultura (el 'Otro'), la constitución del psiquismo humano sería imposible.
```

### 4 — Etapas de la formación cultural
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "avanzado"
  tags: ["procesos", "cultura"]

respuesta: ["Internalización de normas", "Identificación con modelos", "Construcción de la subjetividad"]
tipo: ordenar
opciones_explicitas: ["Internalización de normas", "Identificación con modelos", "Construcción de la subjetividad"]

enunciado: "Ordene cronológicamente los procesos mediante los cuales la cultura se transforma en parte de la estructura psíquica del individuo:"

explicacion: |
  Primero se absorben las normas (socialización), luego se asumen modelos de identidad y finalmente se consolida la subjetividad propia.
```

### 5 — Diferencia entre Cultura y Biología
```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "basico"
  tags: ["biologia", "cultura"]

variables:
  caso: uno_de([
    ["el color de ojos", "biológico"],
    ["el uso de utensilios", "cultural"]
  ])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["biológico", "cultural", "innato", "instintivo"]

enunciado: "Considerando la herencia que nos forma: si el color de ojos es un rasgo biológico, el uso de utensilios es un rasgo ___________."

explicacion: |
  La cultura se manifiesta en las herramientas, costumbres y significados que adquirimos del entorno social.
```