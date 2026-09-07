# Historia Profunda — Recuperacion democratica memoria (cuestionario, 23 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El fin de la dictadura

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "dictadura", "argentina"]

respuesta: "democracia"
tipo: completar
respuestas_validas:
  - "democracia"

enunciado: "Tras el fin de la última dictadura militar en Argentina, las elecciones de 1983 marcaron el retorno a la ________."

explicacion: |
  Las elecciones de octubre de 1983 pusieron fin a la última dictadura cívico-militar, devolviendo el poder a los representantes elegidos por el pueblo.
```

### 2 — El primer presidente electo

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["alfonsin", "presidencia", "1983"]

opciones_explicitas: ["Raúl Alfonsín", "Carlos Menem", "Alfonsín", "Raúl Alfonsín"]
respuesta: "Raúl Alfonsín"
tipo: mc

enunciado: "El primer presidente elegido mediante el sufragio universal tras el fin de la dictadura fue:"

explicacion: |
  Raúl Alfonsín, de la Unión Cívica Radical, asumió la presidencia el 10 de diciembre de 1983.
```

### 3 — El juicio histórico

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["justicia", "derechos_humanos", "juicio_a_las_juntas"]

opciones_explicitas: ["Juicio a las Juntas", "Juicio a los Militares", "Juicio a las Dictaduras", "Juicio a las Juntas"]
respuesta: "Juicio a las Juntas"
tipo: mc

enunciado: "El proceso judicial de 1985 para juzgar a las cúpulas militares se conoce como el:"

explicacion: |
  El Juicio a las Juntas fue un hito histórico en la justicia argentina y un precedente mundial en el juzgamiento de crímenes de lesa humanidad.
```

### 4 — Secuencia de la transición

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["transicion", "procesos", "orden"]

opciones_explicitas: ["Fin de la dictadura", "Elecciones de 1983", "Asunción de Alfonsín"]
respuesta_orden: ["Fin de la dictadura", "Elecciones de 1983", "Asunción de Alfonsín"]
tipo: ordenar

enunciado: "Ordena cronológicamente los siguientes hitos del proceso de democratización:"

explicacion: |
  Primero terminó la dictadura, luego se realizaron las elecciones y finalmente el presidente electo asumió su cargo.
```

### 5 — El concepto de Memoria

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["derechos_humanos", "etica", "memoria"]

variables:
  escenario: uno_de([["reparación", "reparación"], ["olvido", "olvido"], ["justicia", "justicia"]])

respuesta: "justicia"
tipo: mc
opciones_explicitas: ["reparación", "olvido", "justicia"]

enunciado: "En el marco de los Derechos Humanos, la política de Estado para evitar la repetición de los crímenes de la dictadura se basa en el trípode: Memoria, Verdad y {escenario[0]}."

explicacion: |
  El lema "Memoria, Verdad y Justicia" es el pilar fundamental de los organismos de Derechos Humanos en Argentina para la reconstrucción del tejido social.
```

### 6 — El hito del Juicio a las Juntas

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["juicio_a_las_juntas", "derechos_humanos", "argentina"]

respuesta: "Juicio a las Juntas"
tipo: completar
respuestas_validas:
  - "Juicio a las Juntas"

enunciado: "El proceso judicial histórico llevado a cabo en 1985 para juzgar a los máximos responsables de la dictadura militar argentina se conoce como el ___."

explicacion: |
  El Juicio a las Juntas fue un hito mundial, siendo la primera vez que un tribunal civil juzgó a las cúpulas militares de su propio país por delitos de lesa humanidad.
```

### 7 — El rol del Poder Judicial

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "justicia"]

variables:
  tipo_tribunal: uno_de(["civil", "militar"])

respuesta: "civil"
tipo: mc
opciones_explicitas: ["civil", "militar"]

enunciado: "A diferencia de otros procesos de transición, el juicio de 1985 fue llevado a cabo por un tribunal de carácter {tipo_tribunal}."

explicacion: |
  La naturaleza civil del tribunal fue fundamental para consolidar la supremacía de la Constitución y el Estado de Derecho sobre el poder militar.
```

### 8 — Delitos juzgados

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["delitos", "terrorismo_de_estado"]

respuesta_orden: ["terrorismo de Estado", "secuestro", "tortura", "homicidio"]
tipo: ordenar
opciones_explicitas: ["terrorismo de Estado", "secuestro", "tortura", "homicidio"]

enunciado: "Ordene de lo más general a lo más específico los conceptos que definen la naturaleza de los crímenes juzgados:"

explicacion: |
  El juicio condenó a los responsables por la planificación y ejecución de un sistema de terrorismo de Estado que se manifestó a través de secuestros, torturas y homicidios.
```

### 9 — El Informe Nunca Más

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["conadep", "derechos_humanos"]

respuesta: "CONADEP"
tipo: completar
respuestas_validas:
  - "CONADEP"

enunciado: "El informe fundamental que recopiló testimonios sobre la represión sistemática durante la última dictadura militar fue elaborado por la ___."

explicacion: |
  La Comisión Nacional sobre la Desaparición de Personas (CONADEP) elaboró el informe 'Nunca Más', que fue clave para el posterior Juicio a las Juntas.
```

### 10 — Sitios de Memoria

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["sitios_de_memoria", "museos"]

variables:
  idx: uno_de([0, 1])
  datos: [["ESMA", "Ex Centro de Detención de la ESMA"], ["El Olimpo", "Ex Centro de Detención El Olimpo"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Ex Centro de Detención de la ESMA", "Ex Centro de Detención El Olimpo", "Ex Base Naval Puerto Belgrano", "Ex Escuela de Mecánica de la Armada"]

enunciado: "El sitio de memoria conocido como {datos[idx][0]} es un ejemplo de un espacio que funcionó como centro clandestino de detención y hoy es un museo dedicado a la memoria."

explicacion: |
  Los Sitios de Memoria son lugares que fueron utilizados para la represión y que han sido recuperados para la memoria colectiva, transformándose en museos o centros culturales.
```

### 11 — Conceptos de Derechos Humanos

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["verdad", "justicia", "derechos_humanos"]

respuesta: "Verdad"
tipo: mc
opciones_explicitas: ["Verdad", "Justicia", "Memoria", "Reparación"]

enunciado: "En el marco de las políticas de Derechos Humanos, el derecho a conocer la realidad de lo sucedido con las víctimas se denomina derecho a la ___."

explicacion: |
  El derecho a la Verdad, a la Justicia y a la Memoria son pilares fundamentales de la política de Derechos Humanos en Argentina tras la recuperación democrática.
```

### 12 — Orden cronológico de procesos

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["cronologia", "democracia"]

respuesta_orden: ["Fin de la dictadura", "Informe Nunca Más", "Juicio a las Juntas"]
tipo: ordenar
opciones_explicitas: ["Fin de la dictadura", "Informe Nunca Más", "Juicio a las Juntas"]

enunciado: "Ordene cronológicamente los hitos fundamentales del proceso de justicia y memoria tras el retorno a la democracia en Argentina:"

explicacion: |
  Primero se produjo la salida de la dictadura, luego la CONADEP presentó su informe y posteriormente se llevó a cabo el histórico Juicio a las Juntas en 1985.
```

### 13 — El rol de la justicia

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["justicia", "impunidad"]

respuesta: "imprescindible"
tipo: completar
respuestas_validas:
  - "imprescindible"
  - "fundamental"
  - "clave"

enunciado: "Para el proceso de reconstrucción del Estado de Derecho, la aplicación de la ___ para juzgar los crímenes de lesa humanidad fue considerada ___."

explicacion: |
  La justicia es un componente esencial para romper el ciclo de impunidad y garantizar que los crímenes contra la humanidad no queden sin castigo.
```

### 14 — El inicio de la democracia

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "argentina", "1983"]

respuesta: "1983"
tipo: completar
respuestas_validas:
  - "1983"

enunciado: "El año en que se produjo el retorno a la democracia y se inició el período democrático ininterrumpido más largo de la historia argentina fue en ___."

explicacion: |
  En 1983, tras la dictadura militar, se llevaron a cabo elecciones que marcaron el inicio de la era democrática más extensa del país.
```

### 15 — El primer presidente tras la dictadura

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["presidencia", "democracia", "alfonsin"]

variables:
  idx: uno_de([0, 1])
  datos: [["Raúl Alfonsín", "Presidente de la Nación"], ["Raúl Alfonsín", "Dictador militar"]]

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Raúl Alfonsín", "Dictador militar", "Juan Carlos Onganía", "Jorge Rafael Videla"]

enunciado: "El primer presidente elegido tras el fin de la dictadura militar fue {datos[idx][0]}."

explicacion: |
  {datos[idx][0]} asumió la presidencia en 1983, marcando el inicio del proceso de recuperación democrática.
```

### 16 — Hitos de la transición

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["procesos", "historia"]

respuesta_orden: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas"]
tipo: ordenar

opciones_explicitas: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas"]

enunciado: "Ordene cronológicamente los siguientes hitos de la historia argentina reciente:"

pasos:
  - "Identifique el período de gobierno de facto."
  - "Identifique el proceso electoral de retorno."
  - "Identifique el proceso judicial emblemático de la post-dictadura."

explicacion: |
  Primero fue la dictadura, luego las elecciones de 1983 y finalmente el histórico Juicio a las Juntas.
```

### 17 — Naturaleza del período democrático

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "continuidad"]

respuesta: "largo"
tipo: mc
opciones_explicitas: ["largo", "corto", "inestable", "interrumpido"]

enunciado: "El período democrático iniciado en 1983 es el más ___ de la historia argentina hasta la actualidad."

explicacion: |
  A diferencia de los quiebres institucionales previos, este período se caracteriza por su continuidad y duración.
```

### 18 — El concepto de Memoria, Verdad y Justicia

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["derechos_humanos", "memoria"]

variables:
  idx: uno_de([0, 1, 2])
  escenarios: [["El proceso de Memoria, Verdad y Justicia busca...", "reparar el tejido social y la verdad histórica"], ["El proceso de Memoria, Verdad y Justicia busca...", "la reconstrucción de la identidad democrática"], ["El proceso de Memoria, Verdad y Justicia busca...", "la aplicación de la justicia sobre los crímenes de lesa humanidad"]]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["reparar el tejido social y la verdad histórica", "la reconstrucción de la identidad democrática", "la aplicación de la justicia sobre los crímenes de lesa humanidad", "la restauración del orden militar"]

enunciado: "Dentro del marco de la recuperación democrática, el proceso de Memoria, Verdad y Justicia busca {escenarios[idx][1]}."

explicacion: |
  La reconstrucción de la identidad democrática es un pilar fundamental para consolidar el Estado de Derecho tras la dictadura.
```

### 19 — El retorno a la democracia

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["argentina", "democracia", "historia"]

variables:
  escenario: uno_de([["¿Qué presidente asumió en 1983 tras el fin de la dictadura?", "Raúl Alfonsín"], ["¿Qué presidente asumió en 1983 tras el fin de la dictadura?", "Raúl Alfonsín"], ["¿Qué presidente asumió en 1983 tras el fin de la dictadura?", "Raúl Alfonsín"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Raúl Alfonsín", "Carlos Menem", "Alfonsín", "Raúl Alfonsín"]

enunciado: "En el contexto de la recuperación democrática argentina, {escenario[0]}"

explicacion: |
  Raúl Alfonsín asumió la presidencia en 1983, marcando el inicio del periodo democrático tras la última dictadura militar.
```

### 20 — El Juicio a las Juntas

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["justicia", "derechos_humanos"]

variables:
  evento: uno_de([["El proceso de juzgar a las cúpulas militares se conoce como el...", "Juicio a las Juntas"], ["El proceso de juzgar a las cúpulas militares se conoce como el...", "Juicio a las Juntas"], ["El proceso de juzgar a las cúpulas militares se conoce como el...", "Juicio a las Juntas"]])

respuesta: evento[1]
tipo: completar
respuestas_validas:
  - "Juicio a las Juntas"

enunciado: "El proceso histórico fundamental para la memoria y la justicia en 1985 fue el ___."

explicacion: |
  El Juicio a las Juntas fue un hito mundial donde la justicia civil juzgó a los comandantes militares por crímenes de lesa humanidad.
```

### 21 — El concepto de Memoria

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["conceptos", "derechos_humanos"]

respuesta: "Derechos Humanos"
tipo: mc
opciones_explicitas: ["Derechos Humanos", "Derechos Civiles", "Derechos Sociales", "Derechos Políticos"]

enunciado: "La recuperación democrática puso en el centro del debate nacional la defensa de los ___."

explicacion: |
  La democracia argentina se construyó sobre el pilar fundamental de la vigencia y defensa de los Derechos Humanos.
```

### 22 — Secuencia de la transición

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["cronologia", "transicion"]

respuesta_orden: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas", "Ley de Obediencia Debida"]
tipo: ordenar
opciones_explicitas: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas", "Ley de Obediencia Debida"]

enunciado: "Ordene cronológicamente los siguientes hitos del proceso de transición y memoria:"

explicacion: |
  La secuencia parte del fin del régimen militar (1976-1983), pasando por el triunfo electoral de Alfonsín, el juicio histórico de 1985 y las posteriores leyes de impunidad que marcaron la etapa posterior.
```

### 23 — El rol de las Madres

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["movimientos_sociales", "memoria"]

variables:
  sujeto: uno_de([["¿Qué colectivo social luchó por la aparición con vida de los desaparecidos?", "Madres de Plaza de Mayo"], ["¿Qué colectivo social luchó por la aparición con vida de los desaparecidos?", "Madres de Plaza de Mayo"], ["¿Qué colectivo social luchó por la aparición con vida de los desaparecidos?", "Madres de Plaza de Mayo"]])

respuesta: sujeto[1]
tipo: completar
opciones_explicitas: [verdadero, falso]

enunciado: "Las {sujeto[0]} fueron actores fundamentales en la exigencia de justicia durante la transición democrática."

explicacion: |
  Las Madres de Plaza de Mayo fueron un símbolo global de la lucha por la verdad y la justicia durante y después de la dictadura.
```
