### 1 — Tipos de bordes tectónicos
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["geologia", "placas_tectonicas"]

tipo: mc
opciones_explicitas: ["Divergente", "Convergente", "Transformante"]

enunciado: "Cuando dos placas tectónicas se mueven en direcciones opuestas alejándose una de la otra, el tipo de borde formado es un borde ________."

respuesta: "Divergente"

explicacion: |
  Los bordes divergentes ocurren cuando las placas se separan, permitiendo que el magma ascienda y cree nueva corteza oceánica (como en la dorsal mesoatlántica).
```

### 2 — Dinámica de subducción
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["subduccion", "convergencia"]

variables:
  escenario: uno_de([["Placa Oceánica", "Placa Continental"], ["Placa Oceánica", "Placa Oceánica"]])
  tipo_borde: uno_de(["convergente", "divergente", "transformante"])

tipo: mc
opciones_explicitas: ["Subducción", "Rifting", "Deslizamiento lateral"]

enunciado: "En un borde tipo {tipo_borde}, si una placa oceánica colisiona con una placa continental, el proceso por el cual la placa más densa se hunde hacia el manto se denomina ________."

respuesta: "Subducción"

explicacion: |
  En los bordes convergentes, la placa oceánica (más densa) se subduce bajo la continental, generando fosas marinas y actividad volcánica.
```

### 3 — El origen de los sismos transformantes
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "basico"
  tags: ["sismos", "transformante"]

tipo: mc
opciones_explicitas: ["Falla de San Andrés", "Dorsal Mesoatlántica", "Cordillera de los Andes"]

enunciado: "Los bordes transformantes se caracterizan por el deslizamiento lateral de las placas. Un ejemplo clásico de este tipo de movimiento es la ________."

respuesta: "Falla de San Andrés"

explicacion: |
  En los bordes transformantes las placas se deslizan lateralmente sin crear ni destruir corteza, acumulando tensión que se libera en forma de sismos.
```

### 4 — Procesos de formación de relieve
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "intermedio"
  tags: ["montañas", "convergencia"]

variables:
  evento: uno_de([["colisión continental", "subducción oceánica"]])

tipo: completar
respuestas_validas: ["montañas", "valles"]

enunciado: "La colisión entre dos masas continentales en un borde convergente da lugar principalmente a la formación de ________."

respuesta: "montañas"

explicacion: |
  Cuando dos placas continentales chocan, la corteza se pliega y se eleva, formando grandes cordilleras como el Himalaya.
```

### 5 — Secuencia de procesos tectónicos
```
metadata:
  materia: "historia_profunda"
  tema: "tectonica_placas_deriva_continental"
  nivel: "avanzado"
  tags: ["ciclo_tectonico", "procesos"]

tipo: ordenar
opciones_explicitas: ["Separación de placas", "Ascenso de magma", "Creación de nueva corteza", "Expansión del fondo oceánico"]

enunciado: "Ordene correctamente la secuencia de eventos que ocurre en un borde divergente oceánico:"

respuesta: ["Separación de placas", "Ascenso de magma", "Creación de nueva corteza", "Expansión del fondo oceánico"]

explicacion: |
  En los bordes divergentes, la separación de placas permite el ascenso de magma, el cual se solidifica creando nueva corteza y expandiendo el lecho marino.
```