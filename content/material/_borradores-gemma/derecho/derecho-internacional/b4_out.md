### 1 — Distinción por sujetos
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "basico"
  tags: ["sujetos", "soberania"]

variables:
  escenario: uno_de([
    ["Estado", "Derecho Internacional"],
    ["Individuo", "Derecho Interno"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Estado", "Individuo", "Empresa", "Organismo Internacional"]

enunciado: "A diferencia del derecho interno, donde el sujeto principal es la persona física o jurídica, el sujeto principal del {escenario[0]} es el {escenario[1]}."

explicacion: |
  El derecho internacional público regula las relaciones entre sujetos con capacidad de derecho internacional, siendo el Estado el actor principal y soberano.
```

### 2 — Naturaleza de la norma
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["fuentes", "soberania"]

respuesta: falso
tipo: vf

enunciado: "En el derecho internacional, la soberanía de los Estados permite que una norma contenida en un tratado sea inaplicable si contraviene la voluntad unilateral de un Estado en cualquier momento."

explicacion: |
  Falso. Una vez que un Estado manifiesta su consentimiento en un tratado, queda vinculado por el principio 'pacta sunt servanda', el cual es un pilar del derecho internacional.
```

### 3 — Jerarquía y aplicación
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "avanzado"
  tags: ["jerarquia", "normas"]

variables:
  caso: uno_de([
    ["Tratado", "Norma Imperativa (Jus Cogens)"],
    ["Tratado", "Tratado Bilateral"]
  ])

respuesta: caso[1]
tipo: completar
respuestas_validas: ["Norma Imperativa (Jus Cogens)", "Tratado Bilateral"]

enunciado: "Mientras que la mayoría de las normas internacionales derivan del consentimiento, existen normas de carácter superior denominadas ___ que no admiten acuerdo en contrario."

explicacion: |
  Las normas de 'jus cogens' son normas imperativas de derecho internacional general aceptadas y reconocidas por la comunidad internacional, que no admiten derogación por tratados.
```

### 4 — Resolución de conflictos
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["jurisdiccion", "soberania"]

respuesta: "La jurisdicción es voluntaria"
tipo: mc
opciones_explicitas: ["La jurisdicción es voluntaria", "La jurisdicción es obligatoria", "No existe la jurisdicción", "Es impuesta por la ONU"]

enunciado: "A diferencia del derecho interno, donde el Estado tiene el monopolio de la fuerza y la jurisdicción es obligatoria para los ciudadanos, en el derecho internacional la jurisdicción de un tribunal (como la CIJ) es ___."

explicacion: |
  En el ámbito internacional, la competencia de los tribunales internacionales suele depender del consentimiento de los Estados para someterse a su jurisdicción.
```

### 5 — Orden de fuentes
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["fuentes", "estatuto_cij"]

respuesta: ["Tratados", "Costumbre Internacional", "Principios Generales del Derecho"]
tipo: ordenar
opciones_explicitas: ["Tratados", "Costumbre Internacional", "Principios Generales del Derecho", "Opinio Juris"]

enunciado: "De acuerdo con el Artículo 38 del Estatuto de la Corte Internacional de Justicia, ordene las fuentes principales del derecho internacional de mayor a menor evidencia de voluntad expresa:"

explicacion: |
  El Estatuto de la CIJ establece como fuentes principales los tratados (conventions), la costumbre (international custom) y los principios generales del derecho.
```