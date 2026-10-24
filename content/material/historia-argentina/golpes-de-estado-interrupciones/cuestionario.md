# Historia Profunda — Golpes de estado interrupciones (cuestionario, 26 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Golpe de Estado

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["definicion", "politica"]

tipo: mc
opciones_explicitas: ["La toma del poder mediante procesos electorales y respeto a la constitución.", "La toma ilegítima e inconstitucional del poder político, generalmente por las fuerzas armadas.", "Un cambio de gobierno derivado de una crisis económica sin violencia.", "La renuncia voluntaria de un presidente por motivos de salud."]

enunciado: "Un golpe de Estado se define fundamentalmente como:"

respuesta: "La toma ilegítima e inconstitucional del poder político, generalmente por las fuerzas armadas."

explicacion: |
  Un golpe de Estado es una ruptura del orden constitucional donde se toma el poder de forma ilegítima, interrumpiendo el mandato de las autoridades electas.
```

### 2 — Elementos de un Golpe de Estado

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["caracteristicas", "instituciones"]

variables:
  escenarios: [["El uso de la fuerza militar para deponer al ejecutivo.", "La ocupación de edificios gubernamentales y la suspensión de la Constitución."], ["La movilización social masiva para exigir nuevas elecciones.", "La renuncia del gabinete ministerial ante una crisis parlamentaria."]]
  escenario: uno_de(escenarios)

tipo: mc
opciones_explicitas: ["Uso de mecanismos legales para cambiar al presidente.", "Uso de la fuerza o la ruptura de la legalidad para tomar el control estatal.", "Un proceso de transición democrática supervisado."]

enunciado: "En un escenario de {escenario[0]}, el elemento central que caracteriza al golpe es:"

respuesta: "Uso de la fuerza o la ruptura de la legalidad para tomar el control estatal."

explicacion: |
  La característica distintiva es la ruptura del marco legal preestablecido y el uso de medios no previstos por la norma constitucional.
```

### 3 — Secuencia de una Interrupción Institucional

```
metadata:
  materia: "historia_profucha"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["secuencia", "orden"]

tipo: ordenar
opciones_explicitas: ["Crisis política o social", "Acción de las fuerzas armadas o grupos de poder", "Suspensión de la Constitución", "Establecimiento de un gobierno de facto"]

enunciado: "Ordene cronológicamente los pasos típicos de una interrupción institucional clásica:"

explicacion: |
  Un golpe suele comenzar con una crisis que debilita al gobierno, seguido de la acción directa que rompe el orden legal y culmina con la instauración de un régimen no electo.
respuesta_orden: ["Crisis política o social", "Acción de las fuerzas armadas o grupos de poder", "Suspensión de la Constitución", "Establecimiento de un gobierno de facto"]
```

### 4 — Consecuencias de la Ruptura Constitucional

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["consecuencias", "derecho"]

tipo: completar
respuestas_validas:
  - "inconstitucional"
  - "ilegitima"

enunciado: "Un golpe de Estado es un acto ___ que rompe con la legitimidad ___ del mandato popular."

explicacion: |
  Al ignorar las reglas establecidas en la Carta Magna, la acción es inconstitucional y carece de legitimidad democrática.
```

### 5 — Diferencia entre Golpe y Cambio de Gobierno

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["comparacion"]

tipo: mc
opciones_explicitas: ["El cambio de gobierno es legal y sigue las leyes; el golpe es una ruptura de estas.", "Ambos son procesos de la misma naturaleza pero con distinta duración.", "El golpe siempre es pacífico y el cambio de gobierno es violento.", "No existe diferencia técnica entre ambos conceptos."]
respuesta: "El cambio de gobierno es legal y sigue las leyes; el golpe es una ruptura de estas."

enunciado: "¿Cuál es la diferencia fundamental entre un cambio de gobierno democrático y un golpe de Estado?"

explicacion: |
  La diferencia radica en el respeto a la legalidad: el primero ocurre dentro del marco de la ley, el segundo lo destruye.
```

### 6 — Cronología de interrupciones

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["argentina", "siglo_xx", "democracia"]

tipo: ordenar
opciones_explicitas: ["1930", "1943", "1955", "1966", "1976"]
respuesta_orden: ["1930", "1943", "1955", "1966", "1976"]

enunciado: "Ordená cronológicamente los siguientes golpes de Estado que afectaron la institucionalidad argentina en el siglo XX:"

explicacion: |
  La secuencia cronológica de las interrupciones al orden constitucional fue: 1930, 1943, 1955, 1966 y 1976.
```

### 7 — El primer quiebre

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["historia", "argentina"]

tipo: mc
opciones_explicitas: ["1930", "1945", "1955", "1976"]
respuesta: "1930"

enunciado: "¿En qué año se produjo el primer golpe de Estado que interrumpió el orden constitucional en la Argentina del siglo XX?"

explicacion: |
  El golpe de Estado de 1930 derrocó al presidente Hipólito Yrigoyen, marcando el inicio de una era de inestabilidad institucional.
```

### 8 — Identificación de periodos

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["historia", "argentina"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["1955", "la Revolución Libertadora"], ["1966", "la Revolución Argentina"]]

tipo: mc
opciones_explicitas: ["1955", "1962", "1966", "1976"]
respuesta: escenarios[escenario_idx][0]

enunciado: "Identificá el año correspondiente al golpe conocido como {escenarios[escenario_idx][1]}."

explicacion: |
  El escenario seleccionado fue el de {escenarios[escenario_idx][1]}, que ocurrió en el año {escenarios[escenario_idx][0]}.
```

### 9 — Completar términos

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["historia", "argentina"]

tipo: completar
respuestas_validas:
  - "1976"
respuesta: "1976"

enunciado: "El golpe de Estado más violento y de mayor duración en términos de represión sistemática ocurrió en el año ___."

explicacion: |
  El golpe de Estado de 1976 dio inicio al proceso de dictadura militar más sangriento de la historia argentina.
```

### 10 — Análisis de frecuencia

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["historia", "argentina", "estadistica"]

variables:
  lista_golpes: ["1930", "1943", "1955", "1962", "1966", "1976"]

tipo: completar
respuesta: 6

enunciado: "Considerando la lista de golpes mencionados en el texto: {lista_golpes}, ¿cuántas interrupciones al orden democrático se enumeran en total?"

pasos:
  - "Identificar cada año mencionado en el enunciado."
  - "Contar la cantidad de elementos en la lista proporcionada."

explicacion: |
  Se enumeran 6 golpes de Estado en la lista: 1930, 1943, 1955, 1962, 1966 y 1976.
```

### 11 — El fin de la primera presidencia radical

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["argentina", "democracia", "irrigoyen"]

respuesta: "1930"
tipo: "completar"
respuestas_validas:
  - "1930"

enunciado: "El primer golpe de Estado del siglo XX en Argentina, que derrocó al presidente Hipólito Yrigoyen, ocurrió en el año ___."

explicacion: |
  El golpe de 1930 marcó el inicio de un ciclo de interrupciones al orden constitucional en Argentina, rompiendo la estabilidad de la Ley Sáenz Peña.
```

### 12 — El patrón de las intervenciones

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["patrones", "militarismo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El golpe de 1930 inició un ___ de intervenciones militares recurrentes.", "patrón"], ["El derrocamiento de Yrigoyen inauguró un ___ de inestabilidad política.", "ciclo"]]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["patrón", "ciclo", "acuerdo", "proceso"]

enunciado: "{escenarios[escenario_idx][0]}"

explicacion: |
  El golpe de 1930 no fue un evento aislado, sino que inauguró un patrón de intervenciones militares que se repetiría durante gran parte del siglo XX.
```

### 13 — El contexto del derrocamiento

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["contexto", "crisis"]

respuesta: "crisis económica mundial"
tipo: "mc"
opciones_explicitas: ["crisis económica mundial", "guerra civil", "revolución industrial", "independencia"]

enunciado: "El golpe de Estado de 1930 se produjo en un contexto de profunda ___ que afectó la estabilidad del gobierno de Yrigoyen."

explicacion: |
  La crisis económica de 1929 (Gran Depresión) debilitó la estructura política y social, facilitando el levantamiento militar contra el radicalismo.
```

### 14 — Secuencia de la ruptura institucional

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["secuencia", "orden"]

respuesta_orden: ["Ley Sáenz Peña", "Derrocamiento de Yrigoyen", "Intervención militar"]
tipo: "ordenar"
opciones_explicitas: ["Ley Sáenz Peña", "Derrocamiento de Yrigoyen", "Intervención militar"]

enunciado: "Ordene cronológicamente los siguientes hitos relacionados con la estabilidad democrática argentina del siglo XX:"

explicacion: |
  Primero se establece la democracia con la Ley Sáenz Peña (1912), luego ocurre el primer golpe (1930) y esto deriva en la práctica de intervenciones militares.
```

### 15 — Consecuencia política inmediata

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["consecuencias", "democracia"]

respuesta: falso
tipo: "vf"

enunciado: "¿El golpe de 1930 fue un evento aislado que no influyó en la política argentina posterior?"

explicacion: |
  Falso. El golpe de 1930 fue el primer eslabón de una serie de interrupciones que marcaron la historia política argentina durante décadas.
```

### 16 — El inicio de la dictadura

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["argentina", "dictadura", "1976"]

respuesta: "24 de marzo de 1976"
tipo: completar
respuestas_validas:
  - "24 de marzo de 1976"

enunciado: "El golpe de Estado que dio inicio a la última dictadura militar en Argentina ocurrió el día ___."

explicacion: |
  El 24 de marzo de 1976 se produjo el golpe de Estado que instauró un proceso de autodenominado 'Reorganización Nacional', marcando el inicio del período dictatorial más prolongado y violento de la historia argentina reciente.
```

### 17 — Características del proceso

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["derechos_humanos", "terrorismo_de_estado"]

opciones_explicitas: ["Violación sistemática de derechos humanos", "Retorno inmediato a la democracia", "Estabilidad económica sostenida", "Pluralismo político"]

respuesta: "Violación sistemática de derechos humanos"
tipo: mc

enunciado: "Una de las características centrales y más graves del proceso de la última dictadura militar (1976-1983) fue la:"

explicacion: |
  El Estado implementó un plan sistemático de represión que incluyó la desaparición forzada de personas, la tortura y el robo de bebés, constituyendo un crimen de lesa humanidad.
```

### 18 — Cronología de la dictadura

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["fechas", "periodo"]

respuesta_orden: ["Inicio del golpe de Estado", "Guerra de Malvinas", "Fin de la dictadura militar", "Retorno a la democracia"]
tipo: ordenar
opciones_explicitas: ["Inicio del golpe de Estado", "Fin de la dictadura militar", "Guerra de Malvinas", "Retorno a la democracia"]

enunciado: "Ordená cronológicamente los siguientes hitos relacionados con el período 1976-1983:"

pasos:
  - "Identificar el año de inicio del golpe."
  - "Identificar el año del fin del proceso dictatorial."

explicacion: |
  El proceso comenzó en 1976 y finalizó en 1983, tras la derrota en la Guerra de Malvinas y la crisis del régimen.
```

### 19 — Cronología de la dictadura (Corregida)

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["fechas", "periodo"]

respuesta_orden: ["Inicio del golpe de Estado", "Guerra de Malvinas", "Fin de la dictadura militar"]
tipo: ordenar
opciones_explicitas: ["Inicio del golpe de Estado", "Guerra de Malvinas", "Fin de la dictadura militar"]

enunciado: "Ordená cronológicamente los eventos del período dictatorial:"

explicacion: |
  El orden correcto es: Inicio del golpe (1976), Guerra de Malvinas (1982) y Fin de la dictadura (1983).
```

### 20 — El concepto de terrorismo de Estado

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["conceptos", "derechos_humanos"]

variables:
  escenario: uno_de([0,1])
  datos: [["El uso de la estructura estatal para la represión ilegal", "terrorismo de Estado"], ["La participación en elecciones libres", "democracia representativa"]]

respuesta: datos[escenario][1]
tipo: mc
opciones_explicitas: ["terrorismo de Estado", "democracia representativa"]

enunciado: "Cuando el Estado utiliza sus instituciones y fuerzas de seguridad para cometer delitos contra la población, como la desaparición de personas, se denomina:"

explicacion: |
  El término 'terrorismo de Estado' describe la acción de los gobiernos de facto para sembrar terror en la sociedad mediante la represión sistemática.
```

### 21 — Duración del proceso

```
metadata:
  materia: "historia"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["duracion", "fechas"]

respuesta: 7
tipo: completar
tolerancia_abs: 0

enunciado: "Si la última dictadura militar en Argentina duró desde 1976 hasta 1983, ¿cuántos años duró aproximadamente este proceso de interrupción democrática?"

explicacion: |
  El proceso duró 7 años, desde el golpe de 1976 hasta la asunción de la presidencia de Raúl Alfonsín en 1983.
```

### 22 — El golpe de 1930

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["argentina", "siglo_xx", "dictadura"]

variables:
  datos: [["José Félix Uriburu", "1930"], ["Agustín P. Justo", "1932"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["José Félix Uriburu", "Agustín P. Justo", "Juan Perón", "Arturo Illia"]

enunciado: "El primer golpe de Estado que interrumpió el orden constitucional en Argentina durante el siglo XX fue liderado por {datos[idx][0]} en el año {datos[idx][1]}."

explicacion: |
  El golpe de 1930 derrocó a Hipólito Yrigoyen, marcando el inicio de la denominada "Década Infame".
```

### 23 — Secuencia de dictaduras (1955-1966)

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "avanzado"
  tags: ["ordenar", "cronologia"]

respuesta_orden: ["Revolución Libertadora", "Revolución Argentina", "Onganía"]
tipo: ordenar
opciones_explicitas: ["Revolución Libertadora", "Revolución Argentina", "Onganía"]

enunciado: "Ordene cronológicamente los siguientes procesos/dictaduras que interrumpieron la democracia argentina entre 1955 y 1976:"

pasos:
  - "Identifique el golpe que derrocó a Perón en 1955."
  - "Identifique el proceso iniciado por Onganía en 1966."

explicacion: |
  La secuencia cronológica correcta es: Revolución Libertadora (1955), Revolución Argentina (1966) y el gobierno de facto de Onganía.
```

### 24 — La interrupción de 1976

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["dictadura", "proceso"]

respuesta: "Proceso de Reorganización Nacional"
tipo: completar
respuestas_validas:
  - "Proceso de Reorganización Nacional"

enunciado: "El golpe de Estado iniciado el 24 de marzo de 1976 fue autodenominado por la junta militar como el ___."

explicacion: |
  El Proceso de Reorganización Nacional fue la dictadura más sangrienta de la historia argentina.
```

### 25 — Identificación de líderes

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "intermedio"
  tags: ["liderazgo", "militar"]

variables:
  datos: [["Videla", "1976"], ["Anaya", "1981"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Videla", "Anaya", "Galtieri", "Borda"]

enunciado: "El líder de la junta militar durante el inicio del golpe de {datos[idx][1]} fue {datos[idx][0]}."

explicacion: |
  Jorge Rafael Videla encabezó la dictadura que comenzó en 1976.
```

### 26 — El fin de la dictadura

```
metadata:
  materia: "historia_profunda"
  tema: "golpes_de_estado_interrupciones"
  nivel: "basico"
  tags: ["democracia", "retorno"]

respuesta: "Alfonsín"
tipo: mc
opciones_explicitas: ["Alfonsín", "Menem", "Duhalde", "De la Rúa"]

enunciado: "Tras la caída de la dictadura militar en 1983, el primer presidente elegido fue ___."

explicacion: |
  Raúl Alfonsín asumió la presidencia en 1983, marcando el retorno a la democracia tras la dictadura.
```
