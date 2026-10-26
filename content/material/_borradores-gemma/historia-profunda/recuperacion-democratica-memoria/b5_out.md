### 1 — El retorno a la democracia
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["argentina", "democracia", "historia"]

variables:
  escenario: uno_de([
    ["¿Qué presidente asumió en 1983 tras el fin de la dictadura?", "Raúl Alfonsín"],
    ["¿Qué presidente asumió en 1983 tras el fin de la dictadura?", "Raúl Alfonsín"],
    ["¿Qué presidente asumió en 1983 tras el fin de la dictadura?", "Raúl Alfonsín"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Raúl Alfonsín", "Carlos Menem", "Alfonsín", "Raúl Alfonsín"]

enunciado: "En el contexto de la recuperación democrática argentina, {escenario[idx][0]}"

explicacion: |
  Raúl Alfonsín asumió la presidencia en 1983, marcando el inicio del periodo democrático tras la última dictadura militar.
```

### 2 — El Juicio a las Juntas
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["justicia", "derechos_humanos"]

variables:
  evento: uno_de([
    ["El proceso de juzgar a las cúpulas militares se conoce como el...", "Juicio a las Juntas"],
    ["El proceso de juzgar a las cúpulas militares se conoce como el...", "Juicio a las Juntas"],
    ["El proceso de juzgar a las cúpulas militares se conoce como el...", "Juicio a las Juntas"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: evento[idx][1]
tipo: completar
respuestas_validas: ["Juicio a las Juntas"]

enunciado: "El proceso histórico fundamental para la memoria y la justicia en 1985 fue el ___."

explicacion: |
  El Juicio a las Juntas fue un hito mundial donde la justicia civil juzgó a los comandantes militares por crímenes de lesa humanidad.
```

### 3 — El concepto de Memoria
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

### 4 — Secuencia de la transición
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["cronologia", "transicion"]

respuesta: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas", "Ley de Obediencia Debida"]
tipo: ordenar
opciones_explicitas: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas", "Ley de Obediencia Debida"]

enunciado: "Ordene cronológicamente los siguientes hitos del proceso de transición y memoria:"

explicacion: |
  La secuencia parte del fin del régimen militar (1976-1983), pasando por el triunfo electoral de Alfonsín, el juicio histórico de 1985 y las posteriores leyes de impunidad que marcaron la etapa posterior.
```

### 5 — El rol de las Madres
```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["movimientos_sociales", "memoria"]

variables:
  sujeto: uno_de([
    ["¿Qué colectivo social luchó por la aparición con vida de los desaparecidos?", "Madres de Plaza de Mayo"],
    ["¿Qué colectivo social luchó por la aparición con vida de los desaparecidos?", "Madres de Plaza de Mayo"],
    ["¿Qué colectivo social luchó por la aparición con vida de los desaparecidos?", "Madres de Plaza de Mayo"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: sujeto[idx][1]
tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "Las {sujeto[idx][0]} fueron actores fundamentales en la exigencia de justicia durante la transición democrática."

explicacion: |
  Las Madres de Plaza de Mayo fueron un símbolo global de la lucha por la verdad y la justicia durante y después de la dictadura.
```