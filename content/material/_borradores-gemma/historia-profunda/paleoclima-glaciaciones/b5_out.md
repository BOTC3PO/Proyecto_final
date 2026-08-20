### 1 — Ciclos de Milankovitch
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["milankovitch", "astronomia"]

variables:
  escenario: [[ "excentricidad", "cambios en la órbita terrestre" ], [ "oblicuidad", "inclinación del eje terrestre" ], [ "precesión", "balanceo del eje terrestre" ]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["cambios en la órbita terrestre", "inclinación del eje terrestre", "balanceo del eje terrestre"]

enunciado: "La variación en la forma de la órbita terrestre alrededor del Sol, conocida como ciclo de {escenario[idx][0]}, es un factor clave en las glaciaciones."

explicacion: |
  La excentricidad describe qué tan elíptica es la órbita, afectando la distancia promedio al Sol.
```

### 2 — Forzamientos Volcánicos
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["volcanes", "clima"]

variables:
  caso: [[ "ceniza y aerosoles", "enfriamiento" ], [ "gases de efecto invernadero", "calentamiento" ]]
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["enfriamiento", "calentamiento"]

enunciado: "Una erupción volcánica masiva inyecta partículas en la estratosfera. Dependiendo de la composición predominante, el efecto inmediato sobre la temperatura global puede ser de ___."

explicacion: |
  Las erupciones grandes suelen causar enfriamiento temporal debido al efecto albedo de los aerosoles.
```

### 3 — El Ciclo del Carbono
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["carbono", "geoquimica"]

variables:
  evento: [[ "aumento", "liberación de CO2" ], [ "disminución", "secuestro de CO2" ]]
  idx: uno_de([0, 1])

respuesta: evento[idx][1]
tipo: completar
respuestas_validas: ["liberación de CO2", "secuestro de CO2"]

enunciado: "Durante un periodo de glaciación, la actividad biológica y la sedimentación oceánica provocan una ___ de carbono atmosférico."

explicacion: |
  El secuestro de carbono en el fondo marino reduce el efecto invernadero, favoreciendo el enfriamiento.
```

### 4 — Secuencia de Eventos Climáticos
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["secuencia", "procesos"]

respuesta: ["Aumento de radiación solar", "Derretimiento de glaciares", "Aumento del nivel del mar"]
tipo: ordenar
opciones_explicitas: ["Aumento de radiación solar", "Derretimiento de glaciares", "Aumento del nivel del mar"]

enunciado: "Ordene cronológicamente la reacción en cadena ante un aumento en la insolación solar:"

explicacion: |
  El aumento de radiación calienta la superficie, lo que derrite el hielo y finalmente eleva el nivel del mar.
```

### 5 — Escala de Tiempo Geológica
```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["escalas", "tiempo"]

variables:
  escala: [[ "Milankovitch", "Ciclos orbitales" ], [ "Ciclos de hielo", "Variaciones milenarias" ]]
  idx: uno_de([0, 1])

respuesta: escala[idx][1]
tipo: mc
opciones_explicitas: ["Ciclos orbitales", "Variaciones milenarias"]

enunciado: "Las variaciones climáticas de escala geológica, como las glaciaciones, están impulsadas principalmente por los ciclos de ___."

explicacion: |
  Los ciclos de Milankovitch operan en escalas de decenas de miles de años.
```