### 1 — Origen del oxígeno
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["fotosintesis", "oxigeno", "evolucion"]

variables:
  escenario: uno_de([["cianobacterias", "oxigeno"], ["plantas", "oxigeno"], ["algas", "oxigeno"]])
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["oxigeno", "metano", "dióxido de carbono", "nitrógeno"]

enunciado: "Durante el Gran Evento de Oxidación, la actividad de las {escenario[idx][0]} liberó un gas que transformó la atmósfera primitiva. ¿Qué gas fue?"

explicacion: |
  La aparición de organismos fotosintéticos como las {escenario[idx][0]} permitió la liberación masiva de oxígeno como subproducto, cambiando la química atmosférica.
```

### 2 — El cambio redox
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["redox", "fotosintesis", "oxigeno"]

variables:
  reaccion: uno_de([["CO2 + H2O", "O2"], ["CH4 + O2", "CO2"], ["H2O + CO2", "H2"]])
  idx: uno_de([0,1,2])

respuesta: reaccion[idx][1]
tipo: mc
opciones_explicitas: ["O2", "CO2", "H2", "CH4"]

enunciado: "En la fase luminosa de la fotosíntesis, la fotólisis del agua produce el gas que permitió la vida aeróbica. El balance simplificado es: CO2 + H2O -> ___ + glucosa."

explicacion: |
  La fotólisis del agua libera {reaccion[idx][1]}, el cual es fundamental para la respiración celular aeróbica posterior.
```

### 3 — Impacto en la vida aeróbica
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["respiracion", "oxigeno", "metabolismo"]

variables:
  caso: uno_de([["presencia de O2", "respiracion aerobia"], ["ausencia de O2", "fermentacion"], ["exceso de O2", "respiracion aerobia"]])
  idx: uno_de([0,1,2])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["respiracion aerobia", "fermentacion"]

enunciado: "La acumulación de oxígeno en la atmósfera permitió que los organismos pasaran de la ___ a la utilización de aceptores de electrones más eficientes."

explicacion: |
  La disponibilidad de O2 permitió la evolución de la respiración aeróbica, un proceso mucho más eficiente energéticamente que la fermentación.
```

### 4 — Secuencia de eventos geológicos
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["secuencia", "evolucion", "oxigeno"]

respuesta: ["Fotosíntesis oxigénica", "Oxidación de metano", "Acumulación de O2 atmosférico", "Explosión de la vida aeróbica"]
tipo: ordenar
opciones_explicitas: ["Fotosíntesis oxigénica", "Oxidación de metano", "Acumulación de O2 atmosférico", "Explosión de la vida aeróbica"]

enunciado: "Ordena cronológicamente los eventos que permitieron la transición de una atmósfera reductora a una oxidante:"

explicacion: |
  Primero ocurre la fotosíntesis, luego el oxígeno reacciona con gases reductores (como el metano), luego se acumula en la atmósfera y finalmente permite la vida aeróbica.
```

### 5 — Relación causa-efecto
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["causa", "efecto", "oxigeno"]

variables:
  relacion: uno_de([["aumento de O2", "vida aerobia"], ["disminución de O2", "extinciones masivas"], ["aumento de CO2", "calentamiento global"]])
  idx: uno_de([0,1,2])

respuesta: relacion[idx][1]
tipo: mc
opciones_explicitas: ["vida aerobia", "extinciones masivas", "calentamiento global"]

enunciado: "Considerando el impacto biológico: Un {relacion[idx][0]} en la atmósfera fue la causa directa de la aparición de la ___."

explicacion: |
  El {relacion[idx][0]} permitió la evolución de procesos metabólicos que utilizan oxígeno como aceptor final de electrones.
```