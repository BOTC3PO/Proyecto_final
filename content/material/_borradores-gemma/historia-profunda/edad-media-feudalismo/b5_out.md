### 1 — El estamento guerrero
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["feudalismo", "estamentos"]

variables:
  escenario: uno_de([["Se dedica a la defensa militar y la protección de sus tierras mediante el uso de las armas.", "Caballero"], ["Es el señor que otorga tierras a cambio de lealtad y servicio militar.", "Señor feudal"]])
  idx: uno_de([0, 1])

enunciado: "En el sistema feudal, una persona que {escenario[idx][0]} pertenece al grupo de los: ___"

opciones_explicitas: ["Campesinos", "Clero", "Nobleza"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  En la estructura estamental, la nobleza (incluyendo caballeros y señores) tenía la función de la defensa y la administración de la tierra.
```

### 2 — La labor espiritual
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["clero", "feudalismo"]

variables:
  escenario: uno_de([["Su función principal es la oración y la administración de los sacramentos.", "Clérigo"], ["Se encarga de la enseñanza y la preservación de la cultura.", "Clérigo"]])
  idx: uno_de([0, 1])

enunciado: "El individuo cuya tarea es {escenario[idx][0]} es un: ___"

respuestas_validas: ["Clérigo", "Noble", "Siervo"]
respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  El primer estado o estamento de la sociedad medieval era el clero, encargado de la vida espiritual.
```

### 3 — El orden social feudal
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["jerarquia", "ordenar"]

enunciado: "Ordena la jerarquía social feudal desde el estamento con mayor poder político hasta el que tiene menos derechos:"

opciones_explicitas: ["Clero/Nobleza", "Nobleza/Clero", "Campesinado/Siervos"]
respuesta: ["Clero/Nobleza", "Nobleza/Clero", "Campesinado/Siervos"]
tipo: ordenar

explicacion: |
  Aunque el orden exacto podía variar según la región, la jerarquía se basaba en la posesión de tierras y el estatus espiritual/militar.
```

### 4 — El vínculo de vasallaje
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "avanzado"
  tags: ["vasallaje", "feudo"]

variables:
  escenario: uno_de([["Recibe un feudo para su sustento y servicio.", "Vasallo"], ["Ofrece su espada y lealtad a un señor.", "Vasallo"]])
  idx: uno_de([0, 1])

enunciado: "En un contrato de vasallaje, la persona que {escenario[idx][0]} es el: ___"

opciones_explicitas: ["Señor", "Vasallo", "Siervo"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  El vasallo es el hombre libre que se pone bajo la protección de un señor a cambio de un beneficio (el feudo) y servicios.
```

### 5 — La base de la producción
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["campesinado", "servidumbre"]

variables:
  escenario: uno_de([["Está vinculado a la tierra y no puede abandonarla sin permiso.", "Siervo"], ["Trabaja la tierra para el señor a cambio de protección.", "Siervo"]])
  idx: uno_de([0, 1])

enunciado: "Aquella persona que {escenario[idx][0]} es un: ___"

respuestas_validas: ["Siervo", "Caballero", "Obispo"]
respuesta: escenario[idx][1]
tipo: completar

explicacion: |
  A diferencia de los campesinos libres, los siervos estaban legalmente ligados a la gleba (la tierra).
```