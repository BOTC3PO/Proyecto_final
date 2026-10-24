### 1 — Sujetos del Derecho Internacional
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "basico"
  tags: ["sujetos", "estados", "organismos"]

respuesta: "Estados"
tipo: completar
respuestas_validas: ["Estados", "Estado"]

enunciado: "En el Derecho Internacional Público, los principales sujetos con capacidad para contraer obligaciones y ejercer derechos son los ___."

explicacion: |
  El Derecho Internacional Público regula las relaciones entre sujetos de derecho internacional, siendo los Estados soberanos los sujetos primarios y más importantes.
```

### 2 — Ámbito de aplicación
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["distincion", "derecho_privado"]

variables:
  es_privado: falso

respuesta: es_privado
tipo: vf

enunciado: "El Derecho Internacional Privado se encarga de regular las relaciones entre particulares (individuos o empresas) cuando existe un elemento extranjero en la relación jurídica."

explicacion: |
  Es un error común confundirlos: el Derecho Internacional Público regula la relación entre sujetos soberanos (Estados/Organismos), mientras que el Privado regula relaciones entre particulares con elementos transfronterizos.
```

### 3 — Fuentes del Derecho Internacional
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["fuentes", "tratados"]

variables:
  escenario: uno_de([0, 1])
  datos: [
    ["Tratado", "Acuerdo escrito entre sujetos de derecho internacional"],
    ["Costumbre", "Práctica generalizada y aceptada como obligatoria"]
  ]

respuesta: datos[escenario][1]
tipo: mc
opciones_explicitas: ["Tratado", "Costumbre", "Ley Nacional", "Sentencia Judicial"]

enunciado: "Si nos referimos a una práctica generalizada que los Estados consideran como obligatoria por el derecho (opinio iuris), estamos ante una: {datos[escenario][0]}."

explicacion: |
  La costumbre internacional es una de las fuentes principales del Derecho Internacional, junto con los tratados.
```

### 4 — Jerarquía de normas
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "avanzado"
  tags: ["jus_cogens", "jerarquia"]

respuesta: "Jus Cogens"
tipo: completar
respuestas_validas: ["Jus Cogens", "Norma Imperativa"]

enunciado: "Las normas de carácter imperativo de derecho internacional general, que no admiten acuerdo en contrario y que protegen valores fundamentales de la comunidad internacional, se denominan ___."

explicacion: |
  El Jus Cogens representa el nivel más alto de la jerarquía en el derecho internacional, siendo normas que no pueden ser derogadas por tratados bilaterales.
```

### 5 — Proceso de creación de normas
```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["orden", "tratados"]

respuesta: ["Negociación", "Firma", "Ratificación"]
tipo: ordenar
opciones_explicitas: ["Firma", "Negociación", "Ratificación", "Publicación"]

enunciado: "Ordene cronológicamente las etapas típicas de la formación de un tratado internacional, desde el contacto inicial hasta la obligatoriedad definitiva del Estado:"

explicacion: |
  El proceso estándar comienza con la negociación de los términos, sigue con la firma (que expresa la intención de obligarse) y culmina con la ratificación (acto soberano por el cual el Estado confirma su consentimiento).
```