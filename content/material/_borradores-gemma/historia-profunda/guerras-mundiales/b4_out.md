### 1 — El estallido de la Gran Guerra
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

### 2 — Consecuencias del conflicto
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

### 3 — El periodo de entreguerras
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
respuestas_validas: ["La Gran Depresión", "La crisis económica de 1929"]

enunciado: "Durante el periodo de entreguerras, el mundo sufrió un colapso financiero conocido como ___."

respuesta: escenarios[escenario_idx][0]

explicacion: |
  El crack de 1929 y la posterior Gran Depresión generaron un clima de inestabilidad que facilitó el ascenso de ideologías extremistas.
```

### 4 — Cronología de los grandes conflictos
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["orden_cronologico", "historia"]

tipo: ordenar
opciones_explicitas: ["Primera Guerra Mundial", "Crisis de 1929", "Segunda Guerra Mundial"]

respuesta: ["Primera Guerra Mundial", "Crisis de 1929", "Segunda Guerra Mundial"]

enunciado: "Ordena cronológicamente los siguientes eventos históricos, desde el más antiguo al más reciente."

explicacion: |
  La secuencia correcta es: Gran Guerra (1914-1918), Crisis económica (1929) y Segunda Guerra Mundial (1939-1945).
```

### 5 — El fin de la Segunda Guerra Mundial
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