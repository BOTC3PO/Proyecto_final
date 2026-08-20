### 1 — El ascenso del Nazismo
```
metadata:
  materia: "historia_profunda"
  tema: "ascenso_regimenes_totalitarios"
  nivel: "basico"
  tags: ["nazismo", "historia", "segunda_guerra"]

respuesta: "Alemania"
tipo: completar
respuestas_validas: ["Alemania"]

enunciado: "El régimen nazi, liderado por Adolf Hitler, tomó el poder político en ___ en 1933, consolidando un sistema totalitario."

explicacion: |
  El ascenso de Hitler al poder fue un proceso que culminó en 1933, transformando la República de Weimar en un Estado totalitario.
```

### 2 — Ideologías del Eje
```
metadata:
  materia: "historia_profunda"
  tema: "ascenso_regimenes_totalitarios"
  nivel: "basico"
  tags: ["fascismo", "nazismo", "ideologia"]

opciones_explicitas: ["Fascismo", "Comunismo", "Democracia Liberal", "Socialdemocracia"]
respuesta: "Fascismo"
tipo: mc

enunciado: "El régimen de Benito Mussolini en Italia es el ejemplo característico de la ideología conocida como:"

explicacion: |
  El fascismo italiano fue el precursor de otros regímenes totalitarios de derecha en Europa durante el periodo de entreguerras.
```

### 3 — El Holocausto
```
metadata:
  materia: "historia_profunda"
  tema: "holocausto"
  nivel: "intermedio"
  tags: ["holocausto", "genocidio", "segunda_guerra"]

variables:
  datos: [["genocidio", "Holocausto"], ["exterminio", "Holocausto"], ["persecución", "Holocausto"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["Holocausto"]

enunciado: "El asesinato sistemático y organizado de millones de judíos y otros grupos por parte del régimen nazi se conoce históricamente como el ___."

explicacion: |
  El Holocausto (Shoah) fue el genocidio sistemático llevado a cabo por la Alemania nazi durante la Segunda Guerra Mundial.
```

### 4 — El fin de la guerra en el Pacífico
```
metadata:
  materia: "historia_profunda"
  tema: "armas_nucleares"
  nivel: "intermedio"
  tags: ["atomica", "hiroshima", "nagasaki"]

variables:
  escenarios: [
    ["Hiroshima", "Little Boy"],
    ["Nagasaki", "Fat Man"]
  ]
  idx: uno_de([0, 1])

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["Little Boy", "Fat Man", "Enola Gay", "B-29"]

enunciado: "En el segundo ataque atómico de la historia, ocurrido en la ciudad de {escenarios[idx][0]}, se utilizó la bomba llamada ___."

explicacion: |
  El 9 de agosto de 1945, la bomba 'Fat Man' fue lanzada sobre Nagasaki, marcando el segundo uso de armas nucleares en combate.
```

### 5 — Cronología de la Segunda Guerra Mundial
```
metadata:
  materia: "historia_profunda"
  tema: "cronologia_guerra"
  nivel: "avanzado"
  tags: ["cronologia", "eventos_clave"]

opciones_explicitas: ["Invasión de Polonia", "Ataque a Pearl Harbor", "Desarme de Japón"]
respuesta: ["Invasión de Polonia", "Ataque a Pearl Harbor", "Desarme de Japón"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes eventos clave de la Segunda Guerra Mundial, desde el inicio hasta el fin:"

explicacion: |
  La guerra comenzó con la invasión de Polonia (1939), escaló con la entrada de EE.UU. tras Pearl Harbor (1941) y terminó con la rendición de Japón (1945).
```