# Historia Profunda — Guerras mundiales (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El estallido del conflicto

```
metadata:
  materia: "historia_profunda"
  tema: "causas_primera_guerra"
  nivel: "basico"
  tags: ["causas", "nacionalismo", "imperialismo"]

respuesta: "Francisco Fernando"
tipo: completar
respuestas_validas:
  - "Francisco Fernando"

enunciado: "El asesinato del archiduque ___ en Sarajevo fue el detonante que activó el sistema de alianzas en Europa en 1914."

explicacion: |
  El asesinato del heredero al trono austrohúngaro, Francisco Fernando, por un nacionalista serbio, desencadenó la crisis de julio que llevó a la guerra.
```

### 2 — El sistema de alianzas

```
metadata:
  materia: "historia_profunda"
  tema: "alianzas_guerra"
  nivel: "intermedio"
  tags: ["alianzas", "triple_entente"]

variables:
  idx: uno_de([0, 1])
  tabla: [["Triple Entente", "Triple Entente"], ["Triple Alianza", "Triple Alianza"]]

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["Triple Entente", "Triple Alianza"]

enunciado: "Si consideramos el bloque de potencias formado por Francia, Gran Bretaña y Rusia, estamos hablando de la {tabla[idx][0]}."

pasos:
  - "Identificar los miembros del bloque mencionado."
  - "Diferenciar entre la Triple Entente y la Triple Alianza."

explicacion: |
  La Triple Entente estaba compuesta por Francia, Reino Unido y Rusia, mientras que la Triple Alianza (Potencias Centrales) incluía a Alemania, Austria-Hungría e Italia (inicialmente).
```

### 3 — La guerra de posiciones

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_de_trincheras"
  nivel: "basico"
  tags: ["trench_warfare", "estancamiento"]

respuesta: "estancamiento"
tipo: mc
opciones_explicitas: ["movimiento", "estancamiento", "guerra_relampago"]

enunciado: "El predominio de la defensa sobre la ofensiva y el uso de redes de trincheras provocaron un ___ táctico en el frente occidental."

explicacion: |
  La guerra de trincheras impidió avances significativos durante años, convirtiendo el conflicto en una guerra de desgaste y posiciones estáticas.
```

### 4 — Evolución tecnológica

```
metadata:
  materia: "historia_profunda"
  tema: "tecnologia_militar"
  nivel: "intermedio"
  tags: ["tecnologia", "tanques", "guerra_quimica"]

respuesta: "tanques"
tipo: mc
opciones_explicitas: ["tanques", "aviones de combate", "submarinos", "guerra química"]

enunciado: "Para romper el estancamiento de las trincheras, los británicos introdujeron nuevos blindados conocidos como ___."

explicacion: |
  Aunque los tanques no ganaron la guerra por sí solos, fueron un intento tecnológico clave para cruzar el terreno devastado de las trincheras.
```

### 5 — Orden cronológico de causas

```
metadata:
  materia: "historia_profunda"
  tema: "causas_guerra"
  nivel: "avanzado"
  tags: ["ordenar", "causas"]

respuesta_orden: ["Imperialismo", "Nacionalismo", "Asesinato de Francisco Fernando"]
tipo: ordenar
opciones_explicitas: ["Nacionalismo", "Imperialismo", "Asesinato de Francisco Fernando"]

enunciado: "Ordena cronológicamente las tensiones que llevaron a la guerra, desde las causas estructurales de largo plazo hasta el evento detonante."

explicacion: |
  Primero existieron las tensiones imperialistas y nacionalistas (causas estructurales) y finalmente el asesinato en Sarajevo (causa inmediata).
```

### 6 — El ascenso del Nazismo

```
metadata:
  materia: "historia_profunda"
  tema: "ascenso_regimenes_totalitarios"
  nivel: "basico"
  tags: ["nazismo", "historia", "segunda_guerra"]

respuesta: "Alemania"
tipo: completar
respuestas_validas:
  - "Alemania"

enunciado: "El régimen nazi, liderado por Adolf Hitler, tomó el poder político en ___ en 1933, consolidando un sistema totalitario."

explicacion: |
  El ascenso de Hitler al poder fue un proceso que culminó en 1933, transformando la República de Weimar en un Estado totalitario.
```

### 7 — Ideologías del Eje

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

### 8 — El Holocausto

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
respuestas_validas:
  - "Holocausto"

enunciado: "El asesinato sistemático y organizado de millones de judíos y otros grupos por parte del régimen nazi se conoce históricamente como el ___."

explicacion: |
  El Holocausto (Shoah) fue el genocidio sistemático llevado a cabo por la Alemania nazi durante la Segunda Guerra Mundial.
```

### 9 — El fin de la guerra en el Pacífico

```
metadata:
  materia: "historia_profunda"
  tema: "armas_nucleares"
  nivel: "intermedio"
  tags: ["atomica", "hiroshima", "nagasaki"]

respuesta: "Fat Man"
tipo: mc
opciones_explicitas: ["Little Boy", "Fat Man", "Enola Gay", "B-29"]

enunciado: "En el segundo ataque atómico de la historia, ocurrido en la ciudad de Nagasaki, se utilizó la bomba llamada ___."

explicacion: |
  El 9 de agosto de 1945, la bomba 'Fat Man' fue lanzada sobre Nagasaki, marcando el segundo uso de armas nucleares en combate.
```

### 10 — Cronología de la Segunda Guerra Mundial

```
metadata:
  materia: "historia_profunda"
  tema: "cronologia_guerra"
  nivel: "avanzado"
  tags: ["cronologia", "eventos_clave"]

opciones_explicitas: ["Invasión de Polonia", "Ataque a Pearl Harbor", "Desarme de Japón"]
respuesta_orden: ["Invasión de Polonia", "Ataque a Pearl Harbor", "Desarme de Japón"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes eventos clave de la Segunda Guerra Mundial, desde el inicio hasta el fin:"

explicacion: |
  La guerra comenzó con la invasión de Polonia (1939), escaló con la entrada de EE.UU. tras Pearl Harbor (1941) y terminó con la rendición de Japón (1945).
```

### 11 — Consecuencias del Tratado de Versalles

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["versalles", "alemania", "causas"]

tipo: mc
opciones_explicitas: ["La pérdida de territorios y reparaciones económicas", "La creación de la Sociedad de Naciones", "El ascenso del comunismo en Europa", "La firma del Pacto Molotov-Ribbentrop"]
respuesta: "La pérdida de territorios y reparaciones económicas"

enunciado: "Uno de los factores principales que generó un profundo resentimiento en la población alemana tras la Primera Guerra Mundial fue ___."

explicacion: |
  El Tratado de Versalles impuso a Alemania la "cláusula de culpa de guerra", obligándola a pagar reparaciones astronómicas y ceder territorios estratégicos, lo que desestabilizó su economía y política.
```

### 12 — El impacto de las reparaciones

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["economia", "reparaciones", "inflacion"]

variables:
  escenario: uno_de([["reparaciones económicas", "hiperinflación"], ["pérdida de territorio", "expansionismo"], ["cláusula de culpa", "revanchismo"]])

tipo: completar
respuestas_validas:
  - "reparaciones económicas"
  - "pérdida de territorio"
  - "cláusula de culpa"

enunciado: "Las duras condiciones impuestas por el tratado de Versalles, específicamente las ___ , provocaron una crisis económica sin precedentes en la República de Weimar."

pasos:
  - "Analizar cómo la deuda externa afectó la estabilidad de la moneda alemana."
  - "Relacionar la crisis económica con el ascenso de movimientos extremistas."

explicacion: |
  La imposición de reparaciones económicas masivas impidió la recuperación de Alemania, facilitando el ascenso de ideologías radicales que prometían restaurar la gloria nacional.
```

### 13 — El orden mundial post-1919

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "basico"
  tags: ["sociedad_naciones", "diplomacia"]

tipo: completar
enunciado: "El organismo internacional creado tras la Primera Guerra Mundial para mantener la paz, pero que demostró ser incapaz de evitar la Segunda Guerra Mundial, fue la ___."
respuesta: "Sociedad de Naciones"
explicacion: |
  La Sociedad de Naciones carecía de fuerza militar y de la participación de potencias clave como EE.UU., lo que la hizo ineficaz para frenar el expansionismo de Alemania, Italia y Japón.
```

### 14 — Secuencia de tensiones geopolíticas

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "avanzado"
  tags: ["causas", "geopolitica", "orden"]

tipo: ordenar
opciones_explicitas: ["Firma del Tratado de Versalles", "Crisis económica de 1929", "Ascenso del Partido Nazi al poder", "Invasión de Polonia"]

enunciado: "Ordene cronológicamente los eventos que contribuyeron al estallido de la Segunda Guerra Mundial, partiendo de las consecuencias de la Gran Guerra."

explicacion: |
  La secuencia muestra cómo el orden impuesto en 1919 se desmoronó debido a la crisis económica, permitiendo el ascenso de regímenes totalitarios que finalmente desafiaron el orden internacional con la invasión de Polonia.
respuesta_orden: ["Firma del Tratado de Versalles", "Crisis económica de 1929", "Ascenso del Partido Nazi al poder", "Invasión de Polonia"]
```

### 15 — El concepto de 'Diktat'

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["terminologia", "alemania"]

tipo: completar
tolerancia_abs: 0

enunciado: "En Alemania, el Tratado de Versalles fue visto por muchos sectores políticos no como un acuerdo de paz, sino como un ___ (término alemán que significa 'imposición')."

respuesta: "Diktat"

explicacion: |
  El término 'Diktat' fue utilizado por los políticos alemanes para denunciar que el tratado no fue negociado, sino impuesto por las potencias vencedoras, alimentando el sentimiento nacionalista.
```

### 16 — El estallido de la Gran Guerra

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "basico"
  tags: ["primera_guerra", "cronologia"]

tipo: mc
opciones_explicitas: ["1914", "1918", "1939", "1945"]

enunciado: "El asesinato del archiduque Francisco Fernando en Sarajevo desencadenó la Primera Guerra Mundial en el año ___."

respuesta: "1914"

explicacion: |
  El atentado de Sarajevo ocurrió el 28 de junio de 1914, activando el sistema de alianzas que llevó a Europa a la guerra.
```

### 17 — Consecuencias del conflicto

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "basico"
  tags: ["tratado_versalles", "geopolitica"]

tipo: mc
opciones_explicitas: ["El Tratado de Versalles", "El Pacto Molotov-Ribbentrop", "El Plan Marshall", "La Conferencia de Yalta"]

enunciado: "¿Qué evento marcó el fin formal de la Primera Guerra Mundial y redefinió el mapa de Europa?"

respuesta: "El Tratado de Versalles"

explicacion: |
  El Tratado de Versalles (1919) impuso duras condiciones a Alemania y estableció un nuevo orden mundial que influiría en el periodo de entreguerras.
```

### 18 — El periodo de entreguerras

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["crisis_economica", "entreguerras"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["La Gran Depresión", "El ascenso de los regímenes totalitarios"], ["La crisis económica de 1929", "La inestabilidad política europea"]]

tipo: completar
respuestas_validas:
  - "La Gran Depresión"
  - "La crisis económica de 1929"

enunciado: "Durante el periodo de entreguerras, el mundo sufrió un colapso financiero conocido como ___."

respuesta: escenarios[escenario_idx][0]

explicacion: |
  El crack de 1929 y la posterior Gran Depresión generaron un clima de inestabilidad que facilitó el ascenso de ideologías extremistas.
```

### 19 — Cronología de los grandes conflictos

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["orden_cronologico", "historia"]

tipo: ordenar
opciones_explicitas: ["Primera Guerra Mundial", "Crisis de 1929", "Segunda Guerra Mundial"]

respuesta_orden: ["Primera Guerra Mundial", "Crisis de 1929", "Segunda Guerra Mundial"]

enunciado: "Ordena cronológicamente los siguientes eventos históricos, desde el más antiguo al más reciente."

explicacion: |
  La secuencia correcta es: Gran Guerra (1914-1918), Crisis económica (1929) y Segunda Guerra Mundial (1939-1945).
```

### 20 — El fin de la Segunda Guerra Mundial

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "basico"
  tags: ["segunda_guerra", "consecuencias"]

tipo: mc
opciones_explicitas: ["La creación de la ONU", "La caída del Muro de Berlín", "La Revolución Rusa", "El Tratado de Versalles"]

enunciado: "Como consecuencia directa del fin de la Segunda Guerra Mundial, se fundó para mantener la paz internacional la ___."

respuesta: "La creación de la ONU"

explicacion: |
  La Organización de las Naciones Unidas (ONU) fue establecida en 1945 para reemplazar a la fallida Sociedad de Naciones.
```

### 21 — El estallido del conflicto

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "basico"
  tags: ["historia", "conflictos"]

variables:
  datos: [["El asesinato del archiduque Francisco Fernando en Sarajevo desencadenó el conflicto.", "Primera Guerra Mundial"], ["La invasión de Polonia por parte de la Alemania nazi fue el detonante.", "Segunda Guerra Mundial"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Primera Guerra Mundial", "Segunda Guerra Mundial"]

enunciado: "Identifica a qué conflicto histórico corresponde el siguiente evento: {datos[idx][0]}"

explicacion: |
  El evento descrito marca el inicio de la {datos[idx][1]}.
```

### 22 — Tecnología de guerra

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["tecnologia", "armamento"]

variables:
  datos: [["El uso masivo de gases venenosos en las trincheras.", "Primera Guerra Mundial"], ["El desarrollo y uso de la bomba atómica en Hiroshima y Nagasaki.", "Segunda Guerra Mundial"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Primera Guerra Mundial", "Segunda Guerra Mundial"]

enunciado: "Analiza la característica tecnológica: {datos[idx][0]}. ¿A qué guerra pertenece?"

explicacion: |
  La característica mencionada es propia de la {datos[idx][1]}.
```

### 23 — El orden mundial

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "avanzado"
  tags: ["geopolitica", "tratados"]

variables:
  datos: [["La firma del Tratado de Versalles para redefinir fronteras europeas.", "Primera Guerra Mundial"], ["La creación de la Organización de las Naciones Unidas (ONU) para mantener la paz.", "Segunda Guerra Mundial"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar

enunciado: "El evento '{datos[idx][0]}' es un hito fundamental de la ___."
respuestas_validas:
  - "Primera Guerra Mundial"
  - "Segunda Guerra Mundial"

explicacion: |
  El hito mencionado ocurrió durante la {datos[idx][1]}.
```

### 24 — Alianzas militares

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["alianzas", "bloques"]

variables:
  datos: [["La Triple Entente (Francia, Gran Bretaña y Rusia) contra las Potencias Centrales.", "Primera Guerra Mundial"], ["El Eje (Alemania, Italia y Japón) contra los Aliados.", "Segunda Guerra Mundial"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Primera Guerra Mundial", "Segunda Guerra Mundial"]

enunciado: "Dada la formación de bloques: {datos[idx][0]}. ¿A qué guerra corresponde?"

explicacion: |
  Corresponde a la {datos[idx][1]}.
```

### 25 — Secuencia de eventos

```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "avanzado"
  tags: ["cronologia", "eventos"]

respuesta_orden: ["La guerra de movimientos", "El Tratado de Versalles", "La creación de la Sociedad de Naciones"]
tipo: ordenar
opciones_explicitas: ["La guerra de movimientos", "El Tratado de Versalles", "La creación de la Sociedad de Naciones"]

enunciado: "Ordena cronológicamente los siguientes hitos de la Primera Guerra Mundial y su posguerra:"

explicacion: |
  La secuencia correcta representa la cronología: primero la guerra de movimientos (1914), luego el Tratado de Versalles (1919) que puso fin al conflicto, y finalmente la creación de la Sociedad de Naciones (1920).
```
