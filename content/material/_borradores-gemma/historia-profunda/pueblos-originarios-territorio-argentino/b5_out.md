### 1 — Regiones y pueblos
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["geografia", "etnias"]

variables:
  escenario: [[ "Los Selk'nam habitaban la región de la Tierra del Fuego", "Tierra del Fuego" ], [ "Los Guaraníes se asentaban principalmente en el noreste", "Noreste" ], [ "Los Mapuches ocupaban gran parte de la zona andina y central", "Zona Andina" ]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Tierra del Fuego", "Noreste", "Zona Andina", "Pampa"]

enunciado: "Identificá la región geográfica correspondiente al pueblo mencionado: {escenario[idx][0]}."

explicacion: |
  El pueblo mencionado se caracteriza por habitar la región de {escenario[idx][1]}.
```

### 2 — Nomadismo y sedentarismo
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["estilos_de_vida", "antropologia"]

variables:
  caso: [[ "Los Tehuelches eran principalmente...", "nómadas" ], [ "Los Diaguitas eran principalmente...", "sedentarios" ]]
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["nómadas", "sedentarios"]

enunciado: "Considerando el modo de vida de los {if(idx == 0, "Tehuelches", "Diaguitas")}, su organización social era de tipo ___."

explicacion: |
  Los {if(idx == 0, "Tehuelches", "Diaguitas")} se definían por ser {caso[idx][1]}.
```

### 3 — Relación con el entorno
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["cultura"]

respuesta: "agricultura"
tipo: mc
opciones_explicitas: ["caza", "agricultura", "pesca", "recolección"]

enunciado: "Los pueblos de la región de los Andes Centrales, como los Diaguitas, basaban su economía principalmente en la ___."

explicacion: |
  La agricultura fue la base de la economía de los pueblos sedentarios de la zona andina.
```

### 4 — Orden de expansión/presencia
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "avanzado"
  tags: ["cronologia", "territorio"]

respuesta: ["Selk'nam", "Tehuelches", "Guaraníes"]
tipo: ordenar
opciones_explicitas: ["Selk'nam", "Tehuelches", "Guaraníes"]

enunciado: "Ordená estos pueblos de Sur a Norte según su ubicación geográfica predominante en el territorio argentino."

explicacion: |
  El orden correcto de Sur a Norte es: Selk'nam (Tierra del Fuego), Tehuelches (Patagonia) y Guaraníes (Noreste).
```

### 5 — Identificación de territorio
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["geografia"]

variables:
  pueblo_datos: [[ "Qom", "Chaco" ], [ "Mapuche", "Patagonia/Andes" ], [ "Selk'nam", "Tierra del Fuego" ]]
  idx: uno_de([0, 1, 2])

respuesta: pueblo_datos[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "Escribí el nombre de la región donde habita el pueblo {pueblo_datos[idx][0]}."

explicacion: |
  El pueblo {pueblo_datos[idx][0]} se asocia con la región de {pueblo_datos[idx][1]}.
```