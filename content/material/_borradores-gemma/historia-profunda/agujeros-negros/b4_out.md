### 1 — El gigante central
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["galaxias", "centro_galactico"]

respuesta: "supermasivo"
tipo: completar
respuestas_validas: ["supermasivo"]

enunciado: "A diferencia de los agujeros negros estelares, aquellos que residen en el centro de la mayoría de las galaxias, incluida la nuestra, se denominan agujeros negros ___."

explicacion: |
  Los agujeros negros supermasivos se encuentran en el núcleo de casi todas las galaxias grandes y poseen masas de millones o miles de millones de soles.
```

### 2 — Comparativa de escala
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["masa", "comparacion"]

variables:
  escenario: uno_de([["estelar", "pequeño"], ["supermasivo", "gigante"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["pequeño", "gigante"]

enunciado: "Considerando la escala de masa, si comparamos un agujero negro estelar con uno situado en el centro de una galaxia, el segundo es un objeto de tamaño ___."

explicacion: |
  Los agujeros negros supermasivos son órdenes de magnitud más masivos que sus contrapartes estelares.
```

### 3 — Ubicación galáctica
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["via_lactea", "ubicacion"]

respuesta: "Sagitario A*"
tipo: mc
opciones_explicitas: ["Sagitario A*", "Sirio", "Betelgeuse", "Polaris"]

enunciado: "¿Cómo se denomina al agujero negro supermasivo situado en el centro de nuestra galaxia, la Vía Láctea?"

explicacion: |
  El objeto masivo en el centro de la Vía Láctea es conocido como Sagitario A*.
```

### 4 — Evolución de la masa
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["evolucion", "masa"]

variables:
  caso: uno_de([["estelar", "10"], ["supermasivo", "1000000"]])

respuesta: caso[1]
tipo: input
tolerancia_abs: 0

enunciado: "Si un agujero negro estelar típico tiene una masa de aproximadamente {caso[0]} veces la masa solar, un agujero negro supermasivo promedio en una galaxia espiral puede tener aproximadamente {caso[1]} de masas solares. Escribe el valor numérico de la segunda escala (sin unidades)."

explicacion: |
  Los agujeros negros supermasivos superan con creces las escalas estelares, alcanzando millones de masas solares.
```

### 5 — Clasificación de orígenes
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["clasificacion", "origen"]

respuesta: "supermasivo"
tipo: mc
opciones_explicitas: ["estelar", "supermasivo", "primordial"]

enunciado: "Los agujeros negros que se forman por el colapso de estrellas masivas se conocen como estelares. ¿Cuál es la clasificación de aquellos que habitan en el centro de las galaxias y poseen masas extremas?"

explicacion: |
  La distinción principal radica en su masa y su ubicación en el núcleo galáctico.
```