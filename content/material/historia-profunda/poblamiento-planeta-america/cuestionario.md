# Historia Profunda — Poblamiento planeta america (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El origen de la humanidad

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["origen", "africa", "homo_sapiens"]

respuesta: "África"
tipo: completar
respuestas_validas:
  - "África"

enunciado: "Según la teoría 'Out of Africa', el Homo sapiens se originó en el continente de ___."

explicacion: |
  La evidencia genética y fósil sostiene que los humanos modernos surgieron en África y luego migraron hacia el resto del mundo.
```

### 2 — Rutas de migración

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["migracion", "teoria"]

variables:
  escenario: uno_de([["África", "Asia", "Europa", "América"], ["África", "Asia", "Europa", "Oceanía"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["África", "Asia", "Europa", "América"]

enunciado: "De acuerdo con la teoría del origen africano, ¿desde qué continente partieron las primeras migraciones de Homo sapiens para colonizar el resto del planeta?"

explicacion: |
  La migración comenzó desde África hacia Asia y luego se expandió hacia otros continentes.
```

### 3 — Cronología del poblamiento

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["secuencia", "migracion"]

respuesta_orden: ["África", "Asia", "Europa", "América"]
tipo: ordenar
opciones_explicitas: ["África", "Asia", "Europa", "América"]

enunciado: "Ordena cronológicamente la expansión global del Homo sapiens según la teoría predominante:"

explicacion: |
  Primero se consolidó en África, luego migró hacia Asia/Europa y finalmente llegó al continente americano.
```

### 4 — El paso hacia América

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["america", "estrecho_de_bering"]

variables:
  datos: [["Bering", "Asia"], ["Magallanes", "América"]]

respuesta: datos[0][0]
tipo: completar
respuestas_validas:
  - "Bering"

enunciado: "La teoría más aceptada sugiere que el paso de los primeros humanos hacia América se realizó a través del estrecho de ___."

explicacion: |
  El Estrecho de Bering permitió el tránsito desde el noreste de Asia hacia Alaska durante las glaciaciones.
```

### 5 — Teorías de poblamiento

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["teoria", "out_of_africa"]

respuesta: falso
tipo: vf

enunciado: "¿La teoría 'Out of Africa' propone que el Homo sapiens es originario de Europa y luego migró a África?"

explicacion: |
  Falso. La teoría postula exactamente lo contrario: el origen es africano y la migración fue hacia afuera.
```

### 6 — La ruta de Bering

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["prehistoria", "migracion"]

respuesta: "Asia"
tipo: completar
respuestas_validas:
  - "Asia"

enunciado: "Se cree que los primeros grupos humanos llegaron al continente americano cruzando el puente terrestre de Beringia desde ________."

explicacion: |
  La teoría más aceptada sugiere que durante las glaciaciones, el descenso del nivel del mar permitió la formación de un puente de tierra entre Asia y América.
```

### 7 — El puente de Beringia

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["geografia", "migracion"]

variables:
  escenario: uno_de([["puente terrestre", "Beringia"], ["paso marítimo", "Estrecho de Magallanes"], ["ruta costera", "Pacífico"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["puente terrestre", "paso marítimo", "ruta costera"]

enunciado: "El corredor que permitió el paso de humanos y megafauna desde Asia hacia América se conoce como {escenario[1]}."

explicacion: |
  El puente de Beringia era una masa de tierra que conectaba los dos continentes durante los periodos de máximo glaciar.
```

### 8 — Cronología del poblamiento

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["cronologia", "teorias"]

respuesta: 15000
tipo: completar
tolerancia_abs: 5000

enunciado: "Aunque las fechas varían según la teoría, se estima que el poblamiento masivo comenzó hace aproximadamente ___ años."

pasos:
  - "Considerar el final de la última glaciación."
  - "Estimar el inicio de las migraciones hacia el sur del continente."

explicacion: |
  Si bien hay debates sobre teorías más antiguas (como la de Monte Verde), el consenso general sitúa las migraciones principales hace decenas de miles de años.
```

### 9 — El proceso migratorio

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["secuencia", "migracion"]

respuesta_orden: ["Asia", "Beringia", "América"]
tipo: ordenar
opciones_explicitas: ["Asia", "Beringia", "América"]

enunciado: "Ordena la secuencia lógica del poblamiento de América según la teoría del Estrecho de Bering:"

explicacion: |
  La secuencia implica el punto de origen (Asia), el medio de tránsito (Beringia) y el destino (América).
```

### 10 — Factores del poblamiento

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["clima", "fauna"]

variables:
  caso: uno_de([["glaciación", "descenso del nivel del mar"], ["desierto", "aumento de temperatura"], ["inundación", "descenso del nivel del mar"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["descenso del nivel del mar", "aumento de temperatura", "cambio en la vegetación"]

enunciado: "La formación del puente de Beringia fue posible gracias a la {caso[0]}, lo que provocó un {caso[1]}."

explicacion: |
  Durante las glaciaciones, el agua se acumulaba en los glaciares, haciendo que el nivel del mar bajara y expusiera el suelo marino.
```

### 11 — El último continente

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["poblamiento", "geografia_humana"]

respuesta: "América"
tipo: completar
respuestas_validas:
  - "América"

enunciado: "Considerando la cronología del poblamiento humano global, ___ fue el último continente habitado por seres humanos (con excepción de la Antártida)."

explicacion: |
  Mientras que África fue la cuna de la humanidad y los otros continentes fueron alcanzados hace decenas de miles de años, América fue colonizada mucho más recientemente en la escala temporal evolutiva.
```

### 12 — Cronología de poblamiento

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

### 13 — Secuencia de ocupación

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["orden", "secuencia"]

respuesta_orden: ["África", "Asia", "Europa", "Oceanía", "América"]
tipo: ordenar
opciones_explicitas: ["África", "Asia", "Europa", "Oceanía", "América"]

enunciado: "Ordena cronológicamente los continentes (de mayor a menor antigüedad en su poblamiento humano) según el consenso científico actual:"

explicacion: |
  El patrón de expansión humana muestra una salida desde África hacia Asia, luego hacia Europa y Oceanía, dejando a América como el último gran territorio en ser integrado a la red de asentamientos humanos.
```

### 14 — Verdad o Falso: El gran retraso

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

### 15 — El caso de la Antártida

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["excepcion", "geografia"]

respuesta: 1
tipo: completar
tolerancia_abs: 0

enunciado: "Si América es el último continente poblado, y la Antártida es la única excepción que no fue poblada por humanos de forma permanente, ¿cuántos continentes de los 7 totales fueron poblados después de África, Europa, Asia y Oceanía?"

pasos:
  - "Identificar los continentes ya poblados: África, Asia, Europa, Oceanía (4)"
  - "Identificar los continentes restantes: América y Antártida (2)"
  - "Descontar la Antártida por no estar poblada: 2 - 1 = 1"

explicacion: |
  La respuesta es 1, refiriéndose únicamente a América. La Antártida no cuenta como continente poblado por humanos en la historia antigua/prehistórica.
```

### 16 — La cultura Clovis y la tecnología lítica

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["arqueologia", "clovis", "tecnologia"]

respuesta: "puntas de lanza"
tipo: completar
respuestas_validas:
  - "puntas de lanza"
  - "hachas de piedra"
  - "cerámica"

enunciado: "La cultura Clovis se caracteriza por la fabricación de ___ de piedra con una hendidura característica en la base."

explicacion: |
  La cultura Clovis (aprox. 13,000 años atrás) es conocida por sus herramientas de piedra altamente especializadas, especialmente sus puntas de lanza con una ranura basal.
```

### 17 — Teoría del Estrecho de Bering

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["teoria", "geografia", "bering"]

variables:
  escenario: uno_de([["Beringia", "puente terrestre"], ["Pacífico", "ruta marítima"], ["Atlántico", "ruta marítima"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Beringia", "Pacífico", "Atlántico"]

enunciado: "Según la teoría más aceptada, el primer gran corredor de poblamiento hacia América fue el puente terrestre llamado ___."

explicacion: |
  Durante la última glaciación, el descenso del nivel del mar permitió la existencia de Beringia, un puente terrestre que conectaba Siberia con Alaska.
```

### 18 — Evidencia Genética y Migración

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["genetica", "adn", "migracion"]

respuesta: "Asia"
tipo: mc
opciones_explicitas: ["Asia", "Europa", "Oceanía", "África"]

enunciado: "Estudios de ADN mitocondrial en poblaciones indígenas americanas muestran una fuerte conexión genética con grupos provenientes de ___."

explicacion: |
  La evidencia genética actual confirma que las poblaciones originarias de América comparten ancestros comunes con poblaciones del este de Asia.
```

### 19 — Secuencia de poblamiento (Hipótesis)

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["secuencia", "teorias", "migracion"]

respuesta_orden: ["Ruta de Bering", "Corredor libre de hielo", "Ruta costera"]
tipo: ordenar
opciones_explicitas: ["Ruta de Bering", "Corredor libre de hielo", "Ruta costera"]

enunciado: "Ordene las etapas probables de una migración terrestre desde el norte de Asia hacia el interior del continente americano:"

explicacion: |
  El modelo clásico sugiere primero el cruce por Beringia, luego el paso por un corredor libre de hielo entre las glaciaciones, y finalmente la dispersión hacia el sur.
```

### 20 — El misterio de Monte Verde

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["arqueologia", "chile", "monte_verde"]

respuesta: "anterior"
tipo: mc
opciones_explicitas: ["anterior", "posterior", "contemporánea"]

enunciado: "El hallazgo del sitio arqueológico Monte Verde en Chile desafió la teoría Clovis porque sus restos son ___ a la cultura Clovis."

explicacion: |
  Monte Verde presenta evidencia de asentamientos humanos que datan de hace más de 14,500 años, lo que sugiere que hubo migraciones antes de la expansión de la cultura Clovis.
```

### 21 — Teorías de poblamiento

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["teorias", "migracion"]

variables:
  datos: [["Teoría de Beringia", "Teoría de la Ruta Costera"], ["Teoría de la Ruta Costera", "Teoría de Beringia"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Teoría de Beringia", "Teoría de la Ruta Costera"]

enunciado: "Según la evidencia arqueológica más aceptada para el poblamiento temprano, ¿cuál de estas rutas sugiere que los humanos llegaron bordeando la costa del Pacífico?"

explicacion: |
  La teoría de la ruta costera propone que los primeros migrantes utilizaron embarcaciones para bordear el Pacífico, lo que explicaría la rápida llegada a Sudamérica.
```

### 22 — Cronología de continentes

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["cronologia", "continentes"]

tipo: ordenar
opciones_explicitas: ["Asia", "Oceanía", "Europa", "América"]
respuesta_orden: ["Asia", "Oceanía", "Europa", "América"]

enunciado: "Ordena los siguientes continentes desde el que fue poblado primero por el Homo sapiens hasta el último, basándote en las cronologías arqueológicas generales."

explicacion: |
  El orden general de poblamiento sugiere que la humanidad salió de África y se expandió primero por Asia y Oceanía, luego Europa y finalmente América.
```

### 23 — El paso por el estrecho

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["geografia", "migracion"]

variables:
  datos: [["el estrecho de Bering", "el estrecho de Magallanes"], ["el estrecho de Magallanes", "el estrecho de Bering"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: completar
respuestas_validas:
  - "el estrecho de Bering"
  - "el estrecho de Magallanes"

enunciado: "Para entrar al continente americano desde Asia durante la última glaciación, los grupos humanos debieron cruzar ___."

explicacion: |
  El puente de Beringia permitió el paso de grupos de cazadores-recolectores desde Siberia hacia Alaska.
```

### 24 — Identificación de rutas

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["teorias", "rutas"]

variables:
  datos: [["La ruta terrestre", "La ruta marítima"], ["La ruta marítima", "La ruta terrestre"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["La ruta terrestre", "La ruta marítima"]

enunciado: "Si consideramos que los humanos no solo usaron puentes de tierra, sino también balsas para bordear continentes, ¿a qué tipo de migración nos referimos?"

explicacion: |
  La migración marítima o costera es una de las teorías fundamentales para explicar el poblamiento rápido de las costas americanas.
```

### 25 — Secuencia de expansión

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["secuencia", "poblamiento"]

tipo: ordenar
opciones_explicitas: ["África", "Asia", "Oceanía", "América"]
respuesta_orden: ["África", "Asia", "Oceanía", "América"]

enunciado: "Establece el orden cronológico correcto de la expansión global del Homo sapiens, considerando el poblamiento de América como el evento más reciente de la lista."

explicacion: |
  La expansión comenzó en África, siguió por Asia y Oceanía, y finalmente llegó a América hace aproximadamente 15,000-20,000 años.
```
