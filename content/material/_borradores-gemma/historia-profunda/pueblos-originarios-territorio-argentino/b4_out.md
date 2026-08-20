### 1 — Ubicación Mapuche
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["mapuches", "geografia"]

tipo: mc
opciones_explicitas: ["Norte", "Litoral", "Sur y Cordillera", "Cuyo"]

enunciado: "La región geográfica principal asociada históricamente al pueblo Mapuche en el territorio argentino es la zona de: ___"

respuesta: "Sur y Cordillera"

explicacion: |
  El pueblo Mapuche se asentó principalmente en las regiones del sur y la zona de la cordillera de los Andes.
```

### 2 — Territorio Guaraní
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["guaraníes", "litoral"]

tipo: completar
respuestas_validas: ["Litoral/Noreste"]

enunciado: "Los pueblos Guaraníes se desarrollaron predominantemente en la región del ___."

respuesta: "Litoral/Noreste"

explicacion: |
  Los guaraníes habitaban las zonas de selva y ríos, principalmente en el Litoral y el Noreste argentino.
```

### 3 — La zona de los Diaguitas
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["diaguitas", "noroeste"]

tipo: mc
opciones_explicitas: ["Patagonia", "Noroeste", "Pampa", "Mesopotamia"]

enunciado: "Si un historiador estudia las culturas de los Diaguitas, debe centrar su investigación en la región del: ___"

respuesta: "Noroeste"

explicacion: |
  Los diaguitas habitaron las zonas montañosas del Noroeste argentino.
```

### 4 — El territorio Patagónico
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["tehuelches", "patagonia"]

tipo: input
tolerancia_abs: 0

enunciado: "El pueblo Tehuelche habitaba históricamente la región de la ___."

respuesta: "Patagonia"

explicacion: |
  Los tehuelches eran pueblos nómadas que recorrían las estepas de la Patagonia.
```

### 5 — Relación Pueblo-Región
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["repaso", "geografia"]

variables:
  idx: uno_de([0, 1, 2, 3])
  datos: [["Mapuches", "Sur/Cordillera"], ["Guaraníes", "Litoral/Noreste"], ["Diaguitas", "Noroeste"], ["Tehuelches", "Patagonia"]]

tipo: mc
opciones_explicitas: ["Sur/Cordillera", "Litoral/Noreste", "Noroeste", "Patagonia"]

enunciado: "De acuerdo a la información histórica, el pueblo {datos[idx][0]} se asocia con la región de: ___"

respuesta: {datos[idx][1]}

explicacion: |
  La respuesta correcta corresponde a la región geográfica donde se asentó el pueblo seleccionado.
```