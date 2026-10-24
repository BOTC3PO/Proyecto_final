### 1 — Identificación de Bloque
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "basico"
  tags: ["geopolitica", "guerra_fria"]

variables:
  escenario: uno_de([["Un país con un sistema de partido único y economía centralizada bajo la influencia de la URSS", "Bloque del Este"], ["Un país con una economía de mercado y alianzas militares como la OTAN", "Bloque Occidental"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Bloque del Este", "Bloque Occidental", "Países No Alineados"]

enunciado: "En el contexto de la Guerra Fría, se describe a un país con las siguientes características: {escenario[idx][0]}. ¿A qué bloque pertenecía?"

explicacion: |
  La división del mundo en dos grandes bloques ideológicos y económicos definió la Guerra Fría: el Bloque del Este (comunista) y el Bloque Occidental (capitalista).
```

### 2 — El Movimiento de los No Alineados
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["descolonizacion", "no_alineados"]

variables:
  caso: uno_de([["India", "Jawaharlal Nehru"], ["Egipto", "Gamal Abdel Nasser"], ["Yugoslavia", "Josip Broz Tito"]])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["Jawaharlal Nehru", "Gamal Abdel Nasser", "Josip Broz Tito"]

enunciado: "Durante la descolonización, algunos líderes buscaron la neutralidad frente a las superpotencias. El líder que representó a {caso[idx][0]} en el Movimiento de Países No Alineados fue ___."

explicacion: |
  Líderes como Nehru (India), Nasser (Egipto) y Tito (Yugoslavia) fueron piezas clave para establecer una 'tercera vía' que no se alineara ni con EE.UU. ni con la URSS.
```

### 3 — Crisis de los Misiles
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["crisis", "misiles"]

variables:
  crisis: uno_de([["Cuba", "1962"], ["Berlín", "1961"]])
  idx: uno_de([0, 1])

respuesta: crisis[idx][1]
tipo: mc
opciones_explicitas: ["1953", "1962", "1961", "1979"]

enunciado: "La crisis de los misiles en {crisis[idx][0]} llevó al mundo al borde de una guerra nuclear en el año ___."

explicacion: |
  La Crisis de los Misiles (en Cuba en 1962 o la construcción del muro en Berlín en 1961) representó los momentos de mayor tensión de la Guerra Fría.
```

### 4 — Procesos de Descolonización
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "intermedio"
  tags: ["independencia", "africa"]

variables:
  evento: uno_de([["La independencia de Argelia de Francia", "Guerra de Argelia"], ["La independencia de Ghana del Reino Unido", "Independencia de Ghana"]])
  idx: uno_de([0, 1])

respuesta: evento[idx][1]
tipo: ordenar
opciones_explicitas: ["Guerra de Argelia", "Independencia de Ghana"]

enunciado: "Identifica el orden cronológico de los procesos de descolonización mencionados: {evento[idx][0]} y {evento[idx][1]}."

explicacion: |
  La descolonización fue un proceso heterogéneo: en África subsahariana fue mayormente política (Ghana, 1957) y en el norte de África fue frecuentemente violenta (Argelia, 1954-1962).
```

### 5 — Doctrina de Contención
```
metadata:
  materia: "historia_profunda"
  tema: "guerra_fria_descolonizacion"
  nivel: "avanzado"
  tags: ["doctrina", "contencion"]

variables:
  doctrina: uno_de([["Contención del comunismo", "Truman"], ["Contención del comunismo", "Eisenhower"]])
  idx: uno_de([0, 1])

respuesta: doctrina[idx][1]
tipo: completar
respuestas_validas: ["Truman", "Eisenhower"]

enunciado: "La política estadounidense de frenar la expansión del comunismo durante la Guerra Fría se conoció como la doctrina de ___."

explicacion: |
  La Doctrina Truman (1947) estableció el principio de apoyo a los pueblos libres que se resistían al intento de sometimiento por minorías armadas o presiones externas.
```