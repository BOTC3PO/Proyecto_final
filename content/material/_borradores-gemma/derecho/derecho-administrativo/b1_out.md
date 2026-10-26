### 1 — Definición de Derecho Administrativo
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["definicion", "estado"]

respuesta: "regula la organización y actividad del Estado y su relación con los ciudadanos"
tipo: completar
respuestas_validas: ["regula la organización y actividad del Estado y su relación con los ciudadanos"]

enunciado: "El Derecho Administrativo es la rama del derecho público que ___."

explicacion: |
  El Derecho Administrativo se encarga de regular la estructura, el funcionamiento y las facultades de la Administración Pública, así como sus vínculos con los particulares.
```

### 2 — Sujeto de la relación administrativa
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["sujeto", "administracion"]

variables:
  escenario: uno_de([
    ["Administración Pública", "Estado"],
    ["Ciudadano", "Particular"],
    ["Administración Pública", "Estado"]
  ])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Administración Pública", "Poder Judicial", "Legislativo", "Empresa Privada"]

enunciado: "En una relación administrativa típica, el sujeto que actúa en nombre del Estado es la {escenario[1]}."

explicacion: |
  La Administración Pública es el brazo ejecutor del Estado que interactúa con los ciudadanos.
```

### 3 — Carácter del Derecho Administrativo
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "basico"
  tags: ["caracter", "derecho_publico"]

respuesta: verdadero
tipo: vf

enunciado: "El Derecho Administrativo pertenece al ámbito del Derecho Público, ya que regula intereses generales de la comunidad."

explicacion: |
  Es correcto. Al regular la función estatal, se sitúa en el Derecho Público, a diferencia del Derecho Privado que regula relaciones entre particulares en igualdad de condiciones.
```

### 4 — Elementos de la Actividad Administrativa
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["elementos", "acto_administrativo"]

respuesta: ["Sujeto", "Objeto", "Motivo", "Finalidad"]
tipo: ordenar
opciones_explicitas: ["Sujeto", "Objeto", "Motivo", "Finalidad"]

enunciado: "Ordene los elementos constitutivos de un acto administrativo según su estructura lógica de validez:"

explicacion: |
  Para que un acto sea válido, debe tener un sujeto con competencia, un objeto lícito, un motivo (antecedentes) y una finalidad de interés público.
```

### 5 — Principio de Legalidad
```
metadata:
  materia: "derecho"
  tema: "derecho_administrativo"
  nivel: "intermedio"
  tags: ["principios", "legalidad"]

variables:
  caso: uno_de([
    ["La Administración puede actuar solo si una norma la autoriza.", "verdadero"],
    ["La Administración puede actuar incluso sin norma previa si es urgente.", "falso"]
  ])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Según el Principio de Legalidad, la afirmación siguiente es {caso[0]}: 'La Administración puede actuar incluso sin norma previa si es urgente'."

explicacion: |
  El Principio de Legalidad establece que la Administración solo puede realizar aquello que la ley le permite expresamente.
```