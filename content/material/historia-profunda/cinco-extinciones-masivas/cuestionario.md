# Historia Profunda — Cinco extinciones masivas (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — La primera gran extinción

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["geologia", "paleontologia"]

tipo: mc
opciones_explicitas: ["Ordovícico-Silúrico", "Devónico", "Pérmico-Triásico", "Cretácico-Paleógeno"]

enunciado: "La primera de las cinco grandes extinciones masivas de la historia de la Tierra ocurrió durante el periodo ___."

respuesta: "Ordovícico-Silúrico"

explicacion: |
  La extinción del Ordovícico-Silúrico (hace ~444 millones de años) fue causada principalmente por una glaciación intensa que redujo los niveles del mar y la oxigenación de los océanos.
```

### 2 — El Gran Evento de la Muerte

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["permico", "extincion"]

tipo: mc
opciones_explicitas: ["Pérmico-Triásico", "Triásico-Jurásico", "Cretácico-Paleógeno"]

enunciado: "El evento conocido como 'La Gran Mortandad' ocurrió durante la extinción ___."

respuesta: "Pérmico-Triásico"

explicacion: |
  La extinción del Pérmico-Triásico fue la más severa de la historia, eliminando aproximadamente el 96% de las especies marinas.
```

### 3 — El impacto de Chicxulub

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["asteroide", "dinosaurios"]

tipo: completar
tolerancia_abs: 0.1

enunciado: "La extinción del Cretácico-Paleógeno es frecuentemente asociada al impacto de un asteroide en la península de Yucatán. ¿Cuántos millones de años aproximadamente ocurrió este evento? (Escribe el número entero)"

respuesta: 66

explicacion: |
  Hace aproximadamente 66 millones de años, el impacto del asteroide Chicxulub marcó el fin de la era de los dinosaurios no avianos.
```

### 4 — Secuencia de extinción

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["cronologia", "orden"]

tipo: ordenar
opciones_explicitas: ["Ordovícico-Silúrico", "Devónico", "Pérmico-Triásico", "Triásico-Jurásico", "Cretácico-Paleógeno"]

enunciado: "Ordena cronológicamente las cinco grandes extinciones masivas, desde la más antigua a la más reciente."

respuesta_orden: ["Ordovícico-Silúrico", "Devónico", "Pérmico-Triásico", "Triásico-Jurásico", "Cretácico-Paleógeno"]

explicacion: |
  El orden correcto sigue la escala de tiempo geológico: Ordovícico (444 Ma), Devónico (375 Ma), Pérmico (252 Ma), Triásico (201 Ma) y Cretácico (66 Ma).
```

### 5 — El enigma del Devónico

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["devonico", "oceanos"]

tipo: completar
respuestas_validas:
  - "anoxia"

enunciado: "Se cree que la extinción del Devónico fue causada por cambios en los niveles de ___ en los océanos, debido a la proliferación de plantas terrestres que aumentaron la escorrentía de nutrientes."

respuesta: "anoxia"

explicacion: |
  La expansión de la vegetación terrestre aumentó el aporte de nutrientes a los mares, provocando eutrofización y la posterior anoxia (falta de oxígeno) en las aguas.
```

### 6 — La Gran Mortandad

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["permerico", "triasico", "extincion"]

respuesta: "96%"
tipo: completar
respuestas_validas:
  - "96%"
  - "95%"
  - "90%"

enunciado: "La extinción del Pérmico-Triásico es conocida como 'la Gran Mortandad' debido a que se estima que causó la desaparición de hasta un ___ de las especies marinas."

explicacion: |
  Fue el evento de extinción más severo de la historia de la Tierra, eliminando la gran mayoría de la vida marina.
```

### 7 — Magnitud del evento

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["permerico", "triasico", "magnitud"]

respuesta: "Pérmico-Triásico"
tipo: mc
opciones_explicitas: ["Pérmico-Triásico", "Cretácico-Paleógeno", "Ordovícico-Silúrico", "Devónico-Carbonífero"]

enunciado: "La extinción que ocurrió hace aproximadamente 252 millones de años y fue la más devastadora de la historia es la del periodo ___."

explicacion: |
  El evento Pérmico-Triásico es el punto de extinción más grande registrado en el registro fósil.
```

### 8 — Causas de la extinción

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["causas", "volcanismo", "permico"]

respuesta: "Siberian Traps"
tipo: completar
tolerancia_abs: 0

enunciado: "Se cree que la causa principal de la extinción del Pérmico-Triásico fue el vulcanismo masivo asociado a los llamados ___."

explicacion: |
  Las erupciones de los Traps de Siberia liberaron enormes cantidades de gases de efecto invernadero, provocando un calentamiento global extremo y acidificación de los océanos.
```

### 9 — Secuencia de eventos

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["secuencia", "procesos"]

respuesta_orden: ["Erupción masiva", "Calentamiento global", "Acidificación oceánica", "Extinción masiva"]
tipo: ordenar
opciones_explicitas: ["Erupción masiva", "Calentamiento global", "Acidificación oceánica", "Extinción masiva"]

enunciado: "Ordena la secuencia probable de eventos que desencadenaron la Gran Mortandad:"

pasos:
  - "Inicio del vulcanismo masivo"
  - "Aumento de la temperatura global"
  - "Cambio químico en los océanos"
  - "Colapso de la biodiversidad"

explicacion: |
  El ciclo comenzó con el vulcanismo extremo, que alteró la atmósfera y los océanos, llevando al colapso de los ecosistemas.
```

### 10 — Impacto en la vida marina

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["oceanos", "biodiversidad"]

respuesta: "96%"
tipo: mc
opciones_explicitas: ["96%", "50%", "75%", "10%"]

enunciado: "El impacto en la biodiversidad marina durante el evento del Pérmico-Triásico fue de aproximadamente un ___ de especies extinguidas."

explicacion: |
  La acidificación y la anoxia (falta de oxígeno) en los océanos fueron fatales para la mayoría de los organismos marinos de la época.
```

### 11 — El impacto de Chicxulub

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["cretacico", "asteroide", "chicxulub"]

tipo: mc
opciones_explicitas: ["Impacto de un asteroide", "Erupción volcánica masiva", "Cambio climático gradual", "Fragmentación de un planeta"]
respuesta: "Impacto de un asteroide"

enunciado: "La extinción del Cretácico-Paleógeno, que ocurrió hace aproximadamente 66 millones de años, fue causada principalmente por ___."

explicacion: |
  El impacto de un asteroide en la península de Yucatán (cráter de Chicxulub) desencadenó cambios climáticos catastróficos que finalizaron el reinado de los dinosaurios no aviares.
```

### 12 — El destino de los dinosaurios

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["dinosaurios", "extincion"]

tipo: completar
respuestas_validas:
  - "no aviares"
  - "no-aviares"

enunciado: "La extinción masiva del Cretácico-Paleógeno acabó con la mayoría de los dinosaurios, con la excepción de los dinosaurios ___."

explicacion: |
  Los dinosaurios aviares (ancestros de las aves actuales) lograron sobrevivir a la catástrofe, mientras que los dinosaurios no aviares se extinguieron.
```

### 13 — Secuencia de eventos catastróficos

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["secuencia", "causa_efecto"]

tipo: ordenar
opciones_explicitas: ["Impacto del asteroide", "Nube de escombros global", "Bloqueo de la luz solar", "Colapso de la fotosíntesis"]

enunciado: "Ordena cronológicamente los eventos que desencadenaron la extinción tras el impacto de Chicxulub:"

explicacion: |
  El impacto lanzó material al espacio que luego regresó a la atmósfera, bloqueando la luz solar y deteniendo la fotosíntesis, lo que colapsó las redes tróficas.
respuesta_orden: ["Impacto del asteroide", "Nube de escombros global", "Bloqueo de la luz solar", "Colapso de la fotosíntesis"]
```

### 14 — Geología del impacto

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["geologia", "crater"]

tipo: completar

enunciado: "El cráter formado por el impacto que causó la extinción del Cretácico-Paleógeno se localiza en Yucatán, México y se conoce como cráter de ___."

respuesta: "Chicxulub"

explicacion: |
  El cráter de Chicxulub en México es la evidencia geológica principal de este evento de extinción masiva.
```

### 15 — El efecto invernadero post-impacto

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["clima", "quimica_atmosferica"]

tipo: completar
tolerancia_abs: 0.1

enunciado: "Tras el impacto inicial y el invierno de impacto, la liberación de gases como el CO2 provocó un efecto de calentamiento global. Si un registro geológico muestra un aumento drástico de carbono, ¿cuántos millones de años aproximadamente ocurrió este evento de extinción? (Responde con el número entero)"

pasos:
  - "Identificar el periodo de la extinción (66 Ma)."
  - "Escribir el valor numérico sin texto."

explicacion: |
  La extinción ocurrió hace 66 millones de años, marcando el límite entre el período Cretácico y el Paleógeno.

respuesta: 66
```

### 16 — El impacto de un asteroide

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["asteroides", "impacto", "dinodinos"]

enunciado: "Se cree que la extinción masiva del Cretácico-Paleógeno, que eliminó a los dinosaurios no avianos, fue causada principalmente por el impacto de un asteroide en la península de Yucatán. ¿Cuál fue la consecuencia inmediata más devastadora para la fotosíntesis?"

opciones_explicitas: ["Aumento de la temperatura global", "Bloqueo de la luz solar por polvo y cenizas", "Aumento del nivel del mar", "Acidificación extrema de los océanos"]

respuesta: "Bloqueo de la luz solar por polvo y cenizas"
tipo: "mc"

explicacion: |
  El impacto lanzó enormes cantidades de material en la atmósfera, bloqueando la luz solar durante meses o años, lo que detuvo la fotosíntesis y colapsó las cadenas alimentarias.
```

### 17 — El Gran Evento de las Provincias Magmáticas

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["volcanismo", "trapp", "extincion"]

enunciado: "Durante la extinción del Pérmico-Triásico, la actividad de los Siberian Traps liberó enormes cantidades de gases de efecto invernadero, provocando un cambio climático abrupto. ¿Qué fenómeno climático fue el principal responsable de la anoxia oceánica?"

opciones_explicitas: ["Enfriamiento global", "Calentamiento global extremo", "Glaciación masiva", "Ciclo de hielo y deshielo"]

respuesta: "Calentamiento global extremo"
tipo: "mc"

explicacion: |
  El aumento masivo de CO2 causó un calentamiento global extremo, lo que redujo la solubilidad del oxígeno en los océanos, provocando condiciones de anoxia (falta de oxígeno) que mataron la vida marina.
```

### 18 — El efecto de la variación del nivel del mar

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["nivel_del_mar", "plataformas_continentales"]

enunciado: "En varios eventos de extinción masiva, la variación del nivel del mar afectó la biodiversidad. Cuando el nivel del mar desciende drásticamente, las plataformas continentales quedan expuestas. Esto reduce el área de hábitat para los organismos que viven en aguas poco profundas.\n\nEl descenso del nivel del mar provoca la pérdida de hábitats en las plataformas continentales, lo que resulta en una disminución de la ___________ marina."

respuestas_validas:
  - "biodiversidad"

respuesta: "biodiversidad"
tipo: "completar"

explicacion: |
  La reducción del área de las plataformas continentales elimina los hábitats más productivos y diversos del océano, afectando directamente la biodiversidad marina.
```

### 19 — Causas de la extinción del Ordovícico-Devónico

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["glaciación", "ordovícico"]

enunciado: "La extinción del Ordovícico-Devónico está fuertemente asociada con una glaciación intensa. Ordena las consecuencias climáticas de este evento de mayor a menor impacto en la extinción de especies marinas:"

opciones_explicitas: ["Glaciación global masiva", "Expansión de los polos de hielo", "Caída drástica del nivel del mar", "Reducción de hábitats costeros"]

respuesta_orden: ["Glaciación global masiva", "Expansión de los polos de hielo", "Caída drástica del nivel del mar", "Reducción de hábitats costeros"]
tipo: "ordenar"

explicacion: |
  La formación de grandes capas de hielo atrapó agua, haciendo que el nivel del mar bajara drásticamente y eliminara los hábitats de las plataformas continentales.
```

### 20 — El ciclo de la extinción masiva

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["causas", "resumen"]

enunciado: "Las extinciones masivas suelen ser el resultado de cambios ambientales rápidos. Si un evento volcánico masivo libera grandes cantidades de CO2, el efecto inmediato en la temperatura es el ___________."

respuestas_validas:
  - "calentamiento"

respuesta: "calentamiento"
tipo: "completar"

explicacion: |
  El CO2 es un gas de efecto invernadero; su liberación masiva atrapa más calor en la atmósfera, elevando la temperatura global.
```

### 21 — La Gran Oxidación

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["precambrico", "oxigeno"]

respuesta: "oxigenación"
tipo: mc
opciones_explicitas: ["oxigenación", "impacto", "vulcanismo"]

enunciado: "La extinción del evento del Gran Oxígeno fue causada principalmente por la acumulación de oxígeno atmosférico tras la fotosíntesis de cianobacterias, un proceso de ___."

explicacion: |
  El aumento de oxígeno libre en la atmósfera fue tóxico para la mayoría de los organismos anaerobios de la época.
```

### 22 — El Ordovícico-Devónico

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["paleozoico", "clima"]

respuesta: "enfriamiento"
tipo: completar
respuestas_validas:
  - "enfriamiento"
  - "nivel del mar"

enunciado: "Durante la extinción del Ordovícico-Devónico, el factor determinante fue el ___ climático que provocó la glaciación."

explicacion: |
  Cambios climáticos y fluctuaciones en el nivel del mar afectaron drásticamente la vida marina.
```

### 23 — El Pérmico-Triásico

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "avanzado"
  tags: ["la_gran_muerte", "trapp"]

variables:
  idx: uno_de([0,1,2])
  escenarios: [["La gran muerte del Pérmico-Triásico fue causada por...", "vulcanismo"], ["El grupo que sufrió la mayor pérdida fue el de los...", "insectos"], ["El efecto invernadero fue provocado por...", "metano"]]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["vulcanismo", "insectos", "metano"]

enunciado: "En el evento del Pérmico-Triásico, {escenarios[idx][0]}."

explicacion: |
  Conocida como "La Gran Muerte", fue la extinción más severa de la historia de la Tierra.
```

### 24 — El Triásico-Jurásico

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "intermedio"
  tags: ["dinosaurios", "pangea"]

variables:
  idx: uno_de([0,1,2])
  datos: [["La fragmentación de Pangea liberó gases que causaron...", "calentamiento"], ["El grupo que comenzó a dominar tras la extinción fue el de los...", "dinosaurios"], ["La causa principal fue un aumento en el...", "CO2"]]
  respuestas: [["calentamiento", "dinosaurios", "CO2"]]

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "calentamiento"
  - "dinosaurios"
  - "CO2"

enunciado: "Tras la extinción del Triásico-Jurásico, el mundo cambió debido al {datos[idx][1]}."

explicacion: |
  La ruptura del supercontinente Pangea alteró el clima global y permitió la expansión de los dinosaurios.
```

### 25 — El Cretácico-Paleógeno

```
metadata:
  materia: "historia_profunda"
  tema: "cinco_extinciones_masivas"
  nivel: "basico"
  tags: ["asteroide", "dinosaurios"]

respuesta: "luz solar"
tipo: mc
opciones_explicitas: ["dinosaurios", "luz solar", "reptiles"]

enunciado: "El evento del Cretácico-Paleógeno se caracteriza por la reducción drástica de la ___, causada por el polvo y las cenizas liberadas tras el impacto del asteroide."

explicacion: |
  El impacto de un asteroide bloqueó la luz solar, colapsando la fotosíntesis y las cadenas alimentarias.
```
