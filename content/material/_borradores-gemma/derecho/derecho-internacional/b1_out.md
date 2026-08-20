### 1 — Definición de Derecho Internacional Público
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional_publico"
  nivel: "basico"
  tags: ["definicion", "sujetos"]

respuesta: "Derecho Internacional Público"
tipo: completar
respuestas_validas: ["Derecho Internacional Público"]

enunciado: "El conjunto de normas que regulan las relaciones entre los Estados y otros sujetos de la comunidad internacional se denomina ___."

explicacion: |
  El Derecho Internacional Público es el sistema normativo que rige las relaciones entre sujetos soberanos (Estados) y organismos internacionales.
```

### 2 — Sujetos del Derecho Internacional
```
metadata:
  materia: "derecho"
  tema: "sujetos_internacionales"
  nivel: "basico"
  tags: ["sujetos", "estados"]

variables:
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Los Estados", "Las personas físicas únicamente", "Las empresas privadas únicamente", "Ninguna de las anteriores"]

enunciado: "De acuerdo con el escenario seleccionado, ¿cuál es el sujeto principal y soberano del Derecho Internacional?"

pasos:
  - "Identificar la naturaleza jurídica del sujeto mencionado."

explicacion: |
  Los Estados son los sujetos primarios y originarios del Derecho Internacional Público por poseer soberanía.
  
  datos: [["Los Estados", "Los Estados"], ["Las personas físicas", "Las personas físicas"]]
```

### 3 — Fuentes del Derecho Internacional
```
metadata:
  materia: "derecho"
  tema: "fuentes_derecho"
  nivel: "intermedio"
  tags: ["tratados", "costumbre"]

respuesta: verdadero
tipo: vf

enunciado: "Los tratados internacionales y la costumbre internacional son consideradas fuentes principales del Derecho Internacional Público."

explicacion: |
  Según el Estatuto de la Corte Internacional de Justicia, las fuentes principales son los tratados, la costumbre y los principios generales del derecho.
```

### 4 — Jerarquía de Normas (Ordenar)
```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["orden", "normas"]

respuesta: ["Tratado Internacional", "Reglamento Administrativo Nacional", "Decreto Presidencial"]
tipo: ordenar
opciones_explicitas: ["Tratado Internacional", "Reglamento Administrativo Nacional", "Decreto Presidencial"]

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía en el ordenamiento jurídico interno de un Estado que ha ratificado un tratado:"

explicacion: |
  En los sistemas jurídicos modernos, los tratados internacionales ratificados suelen tener una jerarquía superior a las leyes internas y reglamentos.
```

### 5 — Concepto de Soberanía
```
metadata:
  materia: "derecho"
  tema: "soberania_estatal"
  nivel: "basico"
  tags: ["soberania", "estado"]

variables:
  es_soberano: true

respuesta: true
tipo: vf

enunciado: "La soberanía es la facultad que tiene el Estado para ejercer su autoridad suprema dentro de su territorio y sin subordinación a otros Estados."

explicacion: |
  La soberanía es el elemento esencial que define al Estado como sujeto pleno del Derecho Internacional.
```