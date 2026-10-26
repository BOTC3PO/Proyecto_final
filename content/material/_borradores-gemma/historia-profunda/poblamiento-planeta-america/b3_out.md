### 1 — El último continente
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["poblamiento", "geografia_humana"]

respuesta: "América"
tipo: completar
respuestas_validas: ["América"]

enunciado: "Considerando la cronología del poblamiento humano global, ___ fue el último continente habitado por seres humanos (con excepción de la Antártida)."

explicacion: |
  Mientras que África fue la cuna de la humanidad y los otros continentes fueron alcanzados hace decenas de miles de años, América fue colonizada mucho más recientemente en la escala temporal evolutiva.
```

### 2 — Cronología de poblamiento
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["cronologia", "comparativa"]

variables:
  escenario: uno_de([["África", "Asia", "Europa", "Oceanía"], ["América", "Antártida"]])
  es_america: escenario[0] == "América"

respuesta: "último"
tipo: mc
opciones_explicitas: ["primero", "segundo", "último"]

enunciado: "Comparado con África, Asia, Europa y Oceanía, el continente americano fue el ___ en ser poblado por humanos."

explicacion: |
  La evidencia arqueológica y genética indica que el poblamiento de América es un evento mucho más tardío en comparación con el resto de las masas continentales habitables.
```

### 3 — Secuencia de ocupación
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["orden", "secuencia"]

respuesta: ["África", "Asia", "Europa", "Oceanía", "América"]
tipo: ordenar
opciones_explicitas: ["África", "Asia", "Europa", "Oceanía", "América"]

enunciado: "Ordena cronológicamente los continentes (de mayor a menor antigüedad en su poblamiento humano) según el consenso científico actual:"

explicacion: |
  El patrón de expansión humana muestra una salida desde África hacia Asia, luego hacia Europa y Oceanía, dejando a América como el último gran territorio en ser integrado a la red de asentamientos humanos.
```

### 4 — Verdad o Falso: El gran retraso
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["teoria", "verdad_falso"]

respuesta: falso
tipo: mc
opciones_explicitas: [verdadero, falso]

enunciado: "¿Es correcto afirmar que América fue uno de los primeros continentes en ser habitado por los primeros homínidos que salieron de África?"

explicacion: |
  Es falso. América fue el último continente en ser poblado, mucho después de que los humanos ya hubieran colonizado el resto de los continentes habitables.
```

### 5 — El caso de la Antártida
```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["excepcion", "geografia"]

respuesta: 1
tipo: input
tolerancia_abs: 0

enunciado: "Si América es el último continente poblado, y la Antártida es la única excepción que no fue poblada por humanos de forma permanente, ¿cuántos continentes de los 7 totales fueron poblados después de África, Europa, Asia y Oceanía?"

pasos:
  - "Identificar los continentes ya poblados: África, Asia, Europa, Oceanía (4)"
  - "Identificar los continentes restantes: América y Antártida (2)"
  - "Descontar la Antártida por no estar poblada: 2 - 1 = 1"

explicacion: |
  La respuesta es 1, refiriéndose únicamente a América. La Antártida no cuenta como continente poblado por humanos en la historia antigua/prehistórica.
```