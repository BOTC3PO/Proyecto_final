### 1 — El inicio de la Revolución
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["revolucion_de_mayo", "cabildo_abierto"]

respuesta: "25 de mayo de 1810"
tipo: completar
respuestas_validas: ["25 de mayo de 1810"]

enunciado: "La Primera Junta de Gobierno fue establecida el ___ tras el Cabildo Abierto."

explicacion: |
  La Revolución de Mayo de 1810 marcó el inicio del proceso de independencia, desplazando al Virrey Cisneros.
```

### 2 — El proceso de independencia
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["declaracion_independencia", "congreso_tucuman"]

respuesta: "Congreso de Tucumán"
tipo: mc
opciones_explicitas: ["Congreso de Buenos Aires", "Congreso de Tucumán", "Consejo de Regencia", "Junta de San Martín"]

enunciado: "La Declaración de la Independencia de las Provincias Unidas del Río de la Plata se realizó en el ___."

explicacion: |
  El Congreso de Tucumán de 1816 formalizó la ruptura definitiva con la monarquía española.
```

### 3 — Secuencia de eventos históricos
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "intermedio"
  tags: ["cronologia", "procesos_historicos"]

respuesta: ["Revolución de Mayo", "Guerras de Independencia", "Declaración de la Independencia", "Cruce de los Andes"]
tipo: ordenar
opciones_explicitas: ["Revolución de Mayo", "Guerras de Independencia", "Declaración de la Independencia", "Cruce de los Andes"]

enunciado: "Ordene cronológicamente los siguientes hitos del proceso emancipador:"

explicacion: |
  La secuencia correcta comienza con la formación del primer gobierno patrio (1810), sigue con la lucha armada, la formalización política (1816) y la campaña libertadora de San Martín (1817).
```

### 4 — El rol de San Martín
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "avanzado"
  tags: ["san_martin", "cruce_de_los_andes"]

variables:
  escenario: uno_de([["Cruce de los Andes", "1817"], ["Batalla de San Lorenzo", "1813"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["1810", "1813", "1817", "1824"]

enunciado: "El año en que se llevó a cabo el ___ fue el año {escenario[idx][0]}."

explicacion: |
  El Cruce de los Andes fue la gesta militar liderada por San Martín para liberar Chile y posteriormente Perú.
```

### 5 — Consecuencia de la independencia
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_de_independencia_argentina"
  nivel: "basico"
  tags: ["soberania", "consecuencias"]

respuesta: "soberana"
tipo: completar
respuestas_validas: ["soberana", "autónoma"]

enunciado: "Tras la declaración de 1816, las Provincias Unidas buscaron consolidar su condición de nación ___."

explicacion: |
  La independencia política era el paso necesario para la soberanía territorial frente a las potencias europeas.
```