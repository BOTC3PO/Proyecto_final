# Historia Profunda — Guerra fria descolonizacion (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El mundo bipolar

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["geopolitica", "orden_mundial"]

respuesta: "bipolar"
tipo: mc
opciones_explicitas: ["unipolar", "bipolar", "multipolar", "unilateral"]

enunciado: "Debido a la hegemonía de las dos superpotencias (EEUU y la URSS), el sistema internacional durante la Guerra Fría se caracterizó por ser un mundo de carácter ________."

explicacion: |
  El término 'bipolar' se refiere a la existencia de dos centros de poder político, económico y militar contrapuestos que dominaron la escena internacional.
```

### 2 — Doctrina Truman vs COMECON

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["economia", "doctrinas"]

respuesta: "Plan Marshall"
tipo: mc
opciones_explicitas: ["Plan Marshall", "COMECON", "Tratado de Varsovia", "Plan Molotov"]

enunciado: "En el marco de la contención del comunismo, la estrategia de Estados Unidos para reconstruir las economías de Europa Occidental fue el ___."

explicacion: |
  El Plan Marshall fue el programa de asistencia económica de EE.UU. para la reconstrucción de Europa tras la Segunda Guerra Mundial, diseñado para evitar el avance del comunismo.
```

### 3 — La crisis de los misiles

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["crisis", "nucleares"]

respuesta: 1962
tipo: completar
tolerancia_abs: 0

enunciado: "La crisis de los misiles en Cuba, el momento de mayor tensión nuclear entre las superpotencias, ocurrió en el año ________."

explicacion: |
  En octubre de 1962, la instalación de misiles soviéticos en Cuba llevó al mundo al borde de una guerra nuclear total.
```

### 4 — La división de Alemania

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["alemania", "fronteras"]

respuesta_orden: ["RFA (Alemania Occidental)", "RDA (Alemania Oriental)"]
tipo: ordenar
opciones_explicitas: ["RFA (Alemania Occidental)", "RDA (Alemania Oriental)"]

enunciado: "Ordena las entidades políticas resultantes de la división alemana, desde la capitalista hacia la socialista:"

explicacion: |
  La República Federal de Alemania (RFA), es decir Alemania Occidental, representaba al bloque capitalista, mientras que la República Democrática Alemana (RDA), es decir Alemania Oriental, representaba al bloque soviético.
```

### 5 — Descolonización y Tercer Mundo

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["descolonizacion", "asiatismo"]

variables:
  tabla: [["No alineados", "No alineados"], ["Aliados", "Aliados"]]

respuesta: tabla[0][1]
tipo: completar
opciones_explicitas: ["No alineados", "Aliados"]

enunciado: "Durante la Guerra Fría, los países que decidieron no sumarse ni al bloque de EE.UU. ni al de la URSS se conocieron como países ________."

explicacion: |
  El Movimiento de Países No Alineados surgió para buscar una vía neutral frente a la polarización de la Guerra Fría.
```

### 6 — El proceso de descolonización

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["descolonizacion", "postguerra"]

tipo: mc
opciones_explicitas: ["El fortalecimiento de las potencias europeas", "El debilitamiento de las potencias europeas tras la Segunda Guerra Mundial", "La unión de todas las colonias bajo un mando único", "El apoyo de las colonias a los regímenes coloniales"]
respuesta: "El debilitamiento de las potencias europeas tras la Segunda Guerra Mundial"
enunciado: "Tras la Segunda Guerra Mundial, ¿cuál fue el principal factor que impulsó los procesos de independencia en África y Asia?"
explicacion: |
  La Segunda Guerra Mundial dejó a las potencias coloniales tradicionales (como Reino Unido y Francia) agotadas económica y militarmente, lo que facilitó los movimientos de liberación nacional.
```

### 7 — Concepto de soberanía

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["conceptos", "soberania"]

tipo: completar
opciones_explicitas: ["soberanía", "colonialismo", "imperialismo"]
respuestas_validas:
  - "soberanía"

enunciado: "El proceso de descolonización permitió que las antiguas colonias recuperaran su ___________ política y económica."

explicacion: |
  La soberanía es el derecho de un Estado a autogobernarse sin la interferencia de potencias extranjeras.
```

### 8 — El papel de la ONU

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["onu", "diplomacia"]

tipo: mc
opciones_explicitas: ["La Carta de las Naciones Unidas", "El Pacto de Varsovia", "La Liga de las Naciones", "El Tratado de Versalles"]
respuesta: "La Carta de las Naciones Unidas"

enunciado: "En el contexto de la descolonización, ___ fue fundamental porque promovió el principio de autodeterminación de los pueblos."

explicacion: |
  La ONU, a través de su principio de autodeterminación de los pueblos, dio un marco jurídico internacional que legitimó los movimientos de independencia.
```

### 9 — Consecuencias de la descolonización

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["geopolitica", "guerra_fria"]

tipo: mc
opciones_explicitas: ["Se unificaron en un solo bloque", "Se convirtieron en escenarios de disputa entre las superpotencias", "Eliminaron el capitalismo de sus territorios", "Se volvieron potencias nucleares de inmediato"]
respuesta: "Se convirtieron en escenarios de disputa entre las superpotencias"

enunciado: "Debido a la Guerra Fría, la descolonización en Asia y África provocó que estos nuevos estados ___."

explicacion: |
  Muchos nuevos estados independientes se convirtieron en "campos de batalla" por delegación (proxy wars) debido a la polarización de la Guerra Fría.
```

### 10 — Secuencia de procesos

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["cronologia", "procesos"]

tipo: ordenar
opciones_explicitas: ["Agotamiento de potencias europeas", "Surgimiento de movimientos de liberación", "Declaración de independencia de las colonias", "Consolidación de nuevos Estados-Nación"]

enunciado: "Ordena cronológicamente las etapas típicas de un proceso de descolonización:"

explicacion: |
  Primero ocurre el debilitamiento de la metrópoli, luego la organización de movimientos locales, la ruptura formal y finalmente la formación del nuevo Estado.
respuesta_orden: ["Agotamiento de potencias europeas", "Surgimiento de movimientos de liberación", "Declaración de independencia de las colonias", "Consolidación de nuevos Estados-Nación"]
```

### 11 — El dilema de la neutralidad

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["guerra_fria", "descolonizacion", "no_alineados"]

variables:
  escenario: uno_de([["Egipto de Nasser", "movimiento de no alineación", "Egipto de Nasser", "Egipto de Nasser"], ["Yugoslavia de Tito", "movimiento de no alineación", "Yugoslavia de Tito", "Yugoslavia de Tito"], ["India de Nehru", "movimiento de no alineación", "India de Nehru", "India de Nehru"]])

enunciado: "Durante la descolonización, muchos países intentaron evitar la lógica de bloques mediante la creación del ___."

opciones_explicitas: ["movimiento de no alineación", "Pacto de Varsovia", "OTAN"]
respuesta: "movimiento de no alineación"
tipo: mc

explicacion: |
  Tras la Segunda Guerra Mundial, líderes de países recién independizados buscaron mantener su soberanía evitando alinearse con EE.UU. o la URSS, dando origen al Movimiento de Países No Alineados.
```

### 12 — Alineación por necesidad económica

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["geopolitica", "bloques"]

enunciado: "Un país recién independizado que decide aceptar ayuda financiera masiva de la URSS para su industrialización pesada, corre el riesgo de alinearse con el bloque ___."

respuestas_validas:
  - "comunista"
  - "capitalista"
  - "neutral"
respuesta: "comunista"
tipo: completar

explicacion: |
  La ayuda económica y técnica era una herramienta de influencia geopolítica; la dependencia de modelos de desarrollo soviéticos solía arrastrar a los nuevos estados al bloque socialista.
```

### 13 — El concepto de Tercer Mundo

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["terminologia", "geopolitica"]

enunciado: "En el contexto de la Guerra Fría, el término 'Tercer Mundo' se utilizaba para referirse a:"

opciones_explicitas: ["países alineados con EE.UU.", "países alineados con la URSS", "países no alineados o en vías de desarrollo"]
respuesta: "países no alineados o en vías de desarrollo"
tipo: mc

explicacion: |
  Mientras el Primer Mundo era el bloque capitalista y el Segundo el socialista, el término 'Tercer Mundo' designaba a las naciones que no pertenecían a ninguno de estos dos polos.
```

### 14 — Causas de la intervención externa

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["intervencionismo", "soberania"]

enunciado: "Ordena los factores que explican la intervención de las superpotencias en procesos de descolonización de menor a mayor impacto en la soberanía de los nuevos estados:"

opciones_explicitas: ["Intereses económicos por recursos naturales", "Propagación de ideologías políticas", "Control de puntos estratégicos militares"]
respuesta_orden: ["Intereses económicos por recursos naturales", "Propagación de ideologías políticas", "Control de puntos estratégicos militares"]
tipo: ordenar

explicacion: |
  Aunque los tres factores interactuaban, la lucha por el control de bases militares y puntos estratégicos (como el Canal de Suez) era el factor determinante para la soberanía nacional.
```

### 15 — El caso de Vietnam

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["vietnam", "conflicto_proxy"]

variables:
  caso: uno_de([["Vietnam del Sur", "apoyado por EE.UU.", "Vietnam del Sur", "Vietnam del Sur"], ["Vietnam del Norte", "apoyado por la URSS", "Vietnam del Norte", "Vietnam del Norte"]])

enunciado: "En el conflicto de Vietnam, el país que era {caso[1]} fue el principal escenario de la lucha entre las ideologías de la Guerra Fría."

opciones_explicitas: ["apoyado por EE.UU.", "apoyado por la URSS", "neutral"]
respuesta: caso[1]
tipo: mc

explicacion: |
  Vietnam se convirtió en un conflicto de proxy war, donde la descolonización se vio truncada por la lucha de las superpotencias por expandir sus esferas de influencia.
```

### 16 — El fin de un muro

```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["berlin", "simbolo"]

tipo: mc
opciones_explicitas: ["La caída del Muro de Berlín", "La Revolución Rusa", "La Crisis de los Misiles", "La Guerra de Vietnam"]
respuesta: "La caída del Muro de Berlín"

enunciado: "El evento ocurrido en 1989 que simbolizó el fin de la división de Europa y el colapso del bloque socialista fue ___."

explicacion: |
  La caída del Muro de Berlín en noviembre de 1989 marcó el inicio del fin de la Guerra Fría, permitiendo la reunificación de Alemania y el colapso de los regímenes comunistas en Europa del Este.
```

### 17 — El fin de la Unión Soviética

```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["urss", "geopolitica"]

respuesta: "1991"
tipo: completar
respuestas_validas:
  - "1991"

enunciado: "La disolución formal de la URSS ocurrió en el año ___."

explicacion: |
  La desintegración de la Unión Soviética en 1991 puso fin a la existencia de la superpotencia que lideraba el bloque socialista, consolidando el orden mundial unipolar liderado por EE.UU.
```

### 18 — Causas del colapso

```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["gorbachev", "reformas"]

tipo: mc
opciones_explicitas: ["Glasnost y Perestroika", "El Plan Marshall", "La Doctrina Monroe", "La Doctrina Truman"]
respuesta: "Glasnost y Perestroika"

enunciado: "Las reformas políticas y económicas implementadas por Mijaíl Gorbachachev que aceleraron el fin de la URSS fueron la ___."

explicacion: |
  La Perestroika (reestructuración económica) y la Glasnost (apertura política) fueron los motores de cambio que, aunque buscaban modernizar el sistema, terminaron por desestabilizar el control centralizado de la URSS.
```

### 19 — Cronología del fin de la Guerra Fría

```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["cronologia", "eventos"]

tipo: ordenar
opciones_explicitas: ["Caída del Muro de Berlín", "Tratado de Malta", "Reunificación de Alemania", "Disolución de la URSS"]

enunciado: "Ordena cronológicamente los siguientes eventos que marcaron el fin de la Guerra Fría:"

explicacion: |
  La secuencia correcta es: caída del muro (noviembre de 1989), Cumbre de Malta (diciembre de 1989, donde EE.UU. y la URSS declararon el fin simbólico de la Guerra Fría), reunificación alemana (octubre de 1990) y, finalmente, la disolución total de la URSS (diciembre de 1991).
respuesta_orden: ["Caída del Muro de Berlín", "Tratado de Malta", "Reunificación de Alemania", "Disolución de la URSS"]
```

### 20 — El nuevo orden mundial

```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["geopolitica", "superpotencias"]

tipo: completar
tolerancia_abs: 0

enunciado: "Tras la caída de la URSS, el mundo dejó de ser bipolar para convertirse en un sistema ___."

respuesta: "unipolar"

explicacion: |
  Con la desaparición de la URSS como superpotencia, el equilibrio de poder se desplazó hacia un modelo donde una sola nación (EE.UU.) dominaba la escena internacional, conocido como unipolaridad.
```

### 21 — El nuevo orden mundial

```
metadata:
  materia: "historia"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["geopolitica", "superpotencias"]

tipo: mc
opciones_explicitas: ["unipolar", "bipolar", "tripolar", "multipolar"]
respuesta: "unipolar"

enunciado: "Tras la caída de la URSS, el mundo dejó de ser bipolar para convertirse en un sistema ___."

explicacion: |
  Con la desaparición de la URSS como superpotencia, el equilibrio de poder se desplazó hacia un modelo donde una sola nación (EE.UU.) dominaba la escena internacional, conocido como unipolaridad.
```

### 22 — Identificación de Bloque

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["geopolitica", "guerra_fria"]

variables:
  datos: [["Un país con un sistema de partido único y economía centralizada bajo la influencia de la URSS", "Bloque del Este"], ["Un país con una economía de mercado y alianzas militares como la OTAN", "Bloque Occidental"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Bloque del Este", "Bloque Occidental", "Países No Alineados"]

enunciado: "En el contexto de la Guerra Fría, se describe a un país con las siguientes características: {datos[idx][0]}. ¿A qué bloque pertenecía?"

explicacion: |
  La división del mundo en dos grandes bloques ideológicos y económicos definió la Guerra Fría: el Bloque del Este (comunista) y el Bloque Occidental (capitalista).
```

### 23 — El Movimiento de los No Alineados

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["descolonizacion", "no_alineados"]

variables:
  datos: [["India", "Jawaharlal Nehru"], ["Egipto", "Gamal Abdel Nasser"], ["Yugoslavia", "Josip Broz Tito"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Jawaharlal Nehru"
  - "Gamal Abdel Nasser"
  - "Josip Broz Tito"

enunciado: "Durante la descolonización, algunos líderes buscaron la neutralidad frente a las superpotencias. El líder que representó a {datos[idx][0]} en el Movimiento de Países No Alineados fue ___."

explicacion: |
  Líderes como Nehru (India), Nasser (Egipto) y Tito (Yugoslavia) fueron piezas clave para establecer una 'tercera vía' que no se alineara ni con EE.UU. ni con la URSS.
```

### 24 — Crisis de los Misiles

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["crisis", "misiles"]

respuesta: "1962"
tipo: mc
opciones_explicitas: ["1953", "1962", "1961", "1979"]

enunciado: "La crisis de los misiles en Cuba llevó al mundo al borde de una guerra nuclear en el año ___."

explicacion: |
  La Crisis de los Misiles de Cuba (octubre de 1962) representó el momento de mayor tensión nuclear de la Guerra Fría. (No confundir con la Crisis de Berlín de 1961, que no fue una 'crisis de misiles' sino el episodio de la construcción del Muro de Berlín.)
```

### 25 — Procesos de Descolonización

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["independencia", "africa"]

variables:
  eventos: [["La independencia de Argelia de Francia", "Guerra de Argelia"], ["La independencia de Ghana del Reino Unido", "Movimiento independentista liderado por Nkrumah"]]
  idx: uno_de([0, 1])
  evento_actual: eventos[idx]

respuesta_orden: [evento_actual[1], evento_actual[0]]
tipo: ordenar
opciones_explicitas: [evento_actual[1], evento_actual[0]]

enunciado: "Identifica el orden cronológico de los procesos de descolonización mencionados: {evento_actual[0]} y {evento_actual[1]}."

explicacion: |
  La descolonización fue un proceso heterogéneo: en África subsahariana fue mayormente política (Ghana, 1957) y en el norte de África fue frecuentemente violenta (Argelia, 1954-1962).
```

### 26 — Doctrina de Contención

```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["doctrina", "contencion"]

variables:
  datos: [["Contención del comunismo", "Truman"], ["Contención del comunismo", "Eisenhower"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Truman"
  - "Eisenhower"

enunciado: "La política estadounidense de frenar la expansión del comunismo durante la Guerra Fría se conoció como la doctrina de ___."

explicacion: |
  La Doctrina Truman (1947) estableció el principio de apoyo a los pueblos libres que se resistían al intento de sometimiento por minorías armadas o presiones externas.
```
