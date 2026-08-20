### 1 — La cima de la pirámide feudal
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["sociedad", "feudalismo"]

respuesta: "Rey"
tipo: mc
opciones_explicitas: ["Rey", "Señor Feudal", "Caballero", "Siervo"]

enunciado: "En la estructura social del feudalismo, la máxima autoridad política y la cúspide de la pirámide era el ___."

explicacion: |
  El Rey era la autoridad suprema, aunque en la práctica su poder estaba limitado por los grandes señores feudales.
```

### 2 — El estamento de la guerra
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["clases_sociales", "caballeros"]

respuesta: "Caballeros"
tipo: mc
opciones_explicitas: ["Campesinos", "Clero", "Caballeros", "Nobles"]

enunciado: "Los ___ eran la clase guerrera encargada de la protección militar de los señoríos."

explicacion: |
  Los caballeros formaban la base de la nobleza militar, subordinados a los grandes señores.
```

### 3 — Jerarquía de poder feudal
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "intermedio"
  tags: ["ordenar", "jerarquia"]

respuesta: ["Rey", "Señores Feudales", "Caballeros", "Siervos"]
tipo: ordenar
opciones_explicitas: ["Rey", "Señores Feudales", "Caballeros", "Siervos"]

enunciado: "Ordene los siguientes estamentos de mayor a menor poder político y militar en el sistema feudal."

explicacion: |
  La jerarquía feudal era piramidal: el Rey en la cima, seguido por la alta nobleza, luego la caballería y finalmente el campesinado/siervos.
```

### 4 — La base de la economía feudal
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "basico"
  tags: ["campesinado", "siervos"]

variables:
  escenario: uno_de([["Siervos", "estaban ligados a la tierra"], ["Campesinos libres", "tenían mayor movilidad"]])

respuesta: escenario[0]
tipo: completar
respuestas_validas: ["Siervos", "Campesinos libres"]

enunciado: "En el sistema feudal, los ___ eran aquellos que no tenían libertad de movimiento y estaban ___."

explicacion: |
  A diferencia de los campesinos libres, los siervos estaban legalmente vinculados a la tierra que trabajaban.
```

### 5 — El contrato de vasallaje
```
metadata:
  materia: "historia_profunda"
  tema: "edad_media_feudalismo"
  nivel: "avanzado"
  tags: ["vasallaje", "nobleza"]

variables:
  caso: uno_de([[0, "Señor Feudal"], [1, "Rey"]])

respuesta: caso[0]

tipo: input
tolerancia_abs: 0

enunciado: "Si un noble recibe tierras a cambio de lealtad y apoyo militar, su posición es la de un ___."

explicacion: |
  El intercambio de tierras (feudo) por servicios militares y lealtad definía la relación entre el señor y su vasallo.
```