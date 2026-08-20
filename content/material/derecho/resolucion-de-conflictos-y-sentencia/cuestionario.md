# Derecho — Resolucion de conflictos y sentencia (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Sentencia

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["terminologia", "sentencia"]

tipo: mc
opciones_explicitas: ["El acto mediante el cual el juez resuelve el litigio", "Un acuerdo privado entre las partes", "Una consulta legal realizada a un experto", "El proceso de recolección de pruebas"]

respuesta: "El acto mediante el cual el juez resuelve el litigio"

enunciado: "En el ámbito jurídico, la sentencia se define como ___."

explicacion: |
  La sentencia es la resolución judicial que pone fin a un proceso, resolviendo la controversia planteada por las partes.
```

### 2 — El rol del Juez

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["juez", "imparcialidad"]

tipo: vf
respuesta: falso

enunciado: "El juez, al dictar sentencia, debe actuar con parcialidad para asegurar que el resultado favorezca a la parte que presentó más pruebas."

explicacion: |
  Falso. El principio de imparcialidad exige que el juez actúe con objetividad, sin favorecer a ninguna de las partes, basándose únicamente en la ley y las pruebas.
```

### 3 — Elementos de la Sentencia

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["estructura", "sentencia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["vistos", "considerando", "fallo"], ["pretensiones", "pruebas", "resolución"]]

tipo: completar
respuestas_validas:
  - "vistos"
  - "considerando"
  - "fallo"
respuesta: datos[escenario_idx][0]

enunciado: "La estructura clásica de una sentencia contiene los ___ (antecedentes), los ___ (fundamentos de derecho) y el ___ (la decisión final)."

explicacion: |
  La estructura lógica de una sentencia requiere la exposición de los hechos, el análisis jurídico y la decisión final.
```

### 4 — Tipos de Resolución

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["resolucion", "litigio"]

tipo: mc
opciones_explicitas: ["Sentencia definitiva", "Sentencia interlocutoria", "Ambas son formas de resolución judicial"]

respuesta: "Ambas son formas de resolución judicial"

enunciado: "Un juez puede resolver cuestiones procesales mediante una sentencia interlocutoria o resolver el fondo del asunto mediante una sentencia definitiva. ¿Qué representan ambas?"

explicacion: |
  Ambas son resoluciones judiciales, pero difieren en su objeto: una resuelve incidentes en el proceso y la otra resuelve la controversia principal.
```

### 5 — Etapas del Proceso Judicial

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["procedimiento", "orden"]

tipo: ordenar
opciones_explicitas: ["Demanda", "Práctica de pruebas", "Sentencia"]
respuesta_orden: ["Demanda", "Práctica de pruebas", "Sentencia"]

enunciado: "Ordene cronológicamente las etapas fundamentales para llegar a una sentencia en un proceso de conocimiento:"

explicacion: |
  Primero se presenta la demanda, luego se produce la etapa probatoria y finalmente el juez dicta la sentencia tras valorar los elementos presentados.
```

### 6 — El rol de la prueba en la sentencia

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["proceso_judicial", "pruebas"]

variables:
  caso_id: uno_de([0, 1])
  datos: [["prueba_insuficiente", "desestimada"], ["prueba_plena", "estimada"]]

enunciado: "En un juicio por incumplimiento de contrato, el juez analiza la evidencia. Si el juez determina que la evidencia presentada es {datos[caso_id][0]}, la conclusión lógica es que la demanda será ___."

respuestas_validas:
  - "desestimada"
  - "estimada"
respuesta: datos[caso_id][1]
tipo: completar

explicacion: |
  La sentencia depende directamente de la valoración de la prueba. Si la prueba es insuficiente, no se puede romper la presunción de inocencia o de veracidad de la contraparte, resultando en una desestimación.
```

### 7 — Etapas del proceso de decisión

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["procedimiento", "etapas"]

opciones_explicitas: ["Presentación de la demanda", "Producción de pruebas", "Dictado de la sentencia"]
respuesta_orden: ["Presentación de la demanda", "Producción de pruebas", "Dictado de la sentencia"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas fundamentales para que un juez llegue a una decisión definitiva en un proceso civil."

explicacion: |
  El proceso judicial sigue un orden lógico: primero se inicia con la demanda, luego se debate la evidencia (pruebas) y finalmente el juez emite su fallo (sentencia).
```

### 8 — La motivación de la sentencia

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "avanzado"
  tags: ["motivacion", "derecho_constitucional"]

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Verdadero"
tipo: completar
enunciado: "La 'motivación' de una sentencia es el deber del juez de explicar las razones fácticas y jurídicas que lo llevaron a tomar una decisión, evitando la arbitrariedad."

explicacion: |
  Una sentencia sin motivación es nula, ya que el derecho a la defensa exige conocer las razones por las cuales se ha decidido un caso.
```

### 9 — El principio de congruencia

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["congruencia", "sentencia"]

respuesta: "Incongruente"
tipo: mc
opciones_explicitas: ["Congruente", "Incongruente", "Nula"]

enunciado: "Si un juez dicta una sentencia otorgando una indemnización por daños morales cuando el actor solo demandó el pago de una deuda de dinero, la sentencia es ___ respecto a lo solicitado en la demanda."

explicacion: |
  El principio de congruencia exige que el juez debe decidir estrictamente sobre lo pedido por las partes. Si decide algo distinto a lo solicitado, incurre en incongruencia.
```

### 10 — El fallo en un caso de daños

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["fallo", "reparacion"]

variables:
  monto: uno_de([1000.0, 5000.0])

enunciado: "En un caso de responsabilidad civil, el juez determina que el demandado debe pagar una indemnización de ${monto}. Si el demandado apela y el tribunal superior confirma el monto sin modificarlo, ¿cuál es el monto de la resolución final?"

respuesta: monto
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  En este ejercicio de lógica de variables, el valor final depende de la confirmación del monto establecido en la sentencia de primera instancia.
```

### 11 — El rol de la motivación en la sentencia

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["sentencia", "motivacion", "debido_proceso"]

tipo: vf
respuesta: falso

enunciado: "Una sentencia judicial es válida y legalmente vinculante incluso si el juez omite la motivación (explicación de los fundamentos de hecho y de derecho) en su decisión."

explicacion: |
  La motivación es un elemento esencial de la sentencia. La falta de motivación vulnera el derecho de defensa y el debido proceso, tornando la sentencia arbitraria y susceptible de nulidad.
```

### 12 — El principio de congruencia

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "avanzado"
  tags: ["congruencia", "sentencia", "linderos_judiciales"]

tipo: mc
opciones_explicitas: ["Principio de Congruencia", "Principio de Preclusión", "Principio de Inmediación", "Principio de Oralidad"]

respuesta: "Principio de Congruencia"

enunciado: "Si un juez decide sobre una cuestión que no ha sido objeto de la controversia planteada por las partes, está incurriendo en una violación del: ___"

explicacion: |
  El principio de congruencia exige que la sentencia sea coherente con las pretensiones de las partes; el juez no puede otorgar más de lo pedido (ultra petita) ni algo distinto a lo pedido (extra petita).
```

### 13 — Estructura de la resolución judicial

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["estructura", "sentencia", "partes"]

tipo: ordenar
opciones_explicitas: ["Vistos", "Considerando", "Fallo"]
respuesta_orden: ["Vistos", "Considerando", "Fallo"]

enunciado: "Ordene cronológicamente las partes de una sentencia judicial estándar:"

explicacion: |
  La estructura clásica comprende: 1) Vistos (antecedentes), 2) Considerando (fundamentos de hecho y de derecho) y 3) Fallo (la decisión final o parte dispositiva).
```

### 14 — La diferencia entre hecho y derecho

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["hechos", "derecho", "subsuncion"]

tipo: completar
respuestas_validas:
  - "subsunción"
respuesta: "subsunción"

enunciado: "El proceso de razonamiento mediante el cual el juez encuadra los hechos probados dentro de la norma jurídica aplicable se denomina ___."

explicacion: |
  La subsunción es la operación lógica de verificar si un hecho real coincide con los elementos descriptivos de una norma jurídica para aplicar sus consecuencias.
```

### 15 — La cosa juzgada

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "avanzado"
  tags: ["cosa_juzgada", "seguridad_juridica"]

tipo: mc
opciones_explicitas: ["Cosa juzgada material", "Cosa juzgada formal", "Sentencia interlocutoria", "Recurso de apelación"]
respuesta: "Cosa juzgada material"

enunciado: "Cuando una sentencia firme impide que se vuelva a litigar sobre el mismo objeto y entre las mismas partes, estamos ante la: ___"

explicacion: |
  La cosa juzgada material es la autoridad de la cosa juzgada que impide la reapertura del debate sobre lo ya decidido, garantizando la seguridad jurídica.
```

### 16 — Sentencia vs. Auto

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["proceso_judicial", "resolucion"]

respuesta: "sentencia"
tipo: mc
opciones_explicitas: ["sentencia", "auto", "providencia", "decreto"]

enunciado: "Mientras que el auto resuelve cuestiones de mero trámite o incidentes dentro del proceso, la decisión que pone fin a la instancia o resuelve la cuestión principal de fondo se denomina ___."

explicacion: |
  La sentencia es la resolución judicial que decide el fondo del asunto litigioso, marcando el fin de la etapa de conocimiento en primera instancia.
```

### 17 — Cosa Juzgada vs. Cosa Decidida

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "avanzado"
  tags: ["cosa_juzgada", "derecho_procesal"]

respuesta: verdadero
tipo: vf
enunciado: "La 'cosa juzgada' se distingue de la 'cosa decidida' porque la primera implica una inmutabilidad absoluta de la decisión debido a que no admite más recursos, mientras que la segunda se refiere a una decisión que aún es susceptible de ser revisada mediante un recurso."

explicacion: |
  Efectivamente, la cosa juzgada (autoridad de la cosa juzgada) es la calidad de la sentencia cuando ya no puede ser impugnada, adquiriendo firmeza definitiva.
```

### 18 — Mediación vs. Conciliación

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["mecanismos_alternativos", "resolucion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["En la mediación, un tercero neutral facilita la comunicación para que las partes encuentren su propia solución.", "mediación"], ["En la conciliación, el tercero tiene una función más activa y puede proponer fórmulas de solución que las partes pueden aceptar.", "conciliación"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["mediación", "conciliación"]

enunciado: "Considerando la distinción técnica: {escenarios[escenario_idx][0]}"

explicacion: |
  La diferencia fundamental radica en el grado de proactividad del tercero: el mediador es un facilitador de la comunicación, mientras que el conciliador puede proponer soluciones.
```

### 19 — Etapas de la Sentencia

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["estructura_sentencia", "proceso"]

respuesta_orden: ["encabezamiento", "vistos", "considerandos", "fallo"]
tipo: ordenar
opciones_explicitas: ["encabezamiento", "vistos", "considerandos", "fallo"]

enunciado: "Ordene cronológicamente los elementos que componen la estructura lógica de una sentencia judicial estándar:"

explicacion: |
  La sentencia comienza con la identificación de las partes (encabezamiento), la exposición de los antecedentes (vistos), el razonamiento jurídico (considerandos) y la decisión final (fallo).
```

### 20 — Arbitraje vs. Juicio Ordinario

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["arbitraje", "jurisdiccion"]

respuesta: "laudo"
tipo: completar
respuestas_validas:
  - "sentencia"
  - "laudo"

enunciado: "En un proceso de arbitraje, la decisión final que resuelve la controversia se denomina ___."

explicacion: |
  El término correcto para la decisión de un árbitro es 'laudo', mientras que el término para la decisión de un juez estatal es 'sentencia'.
```

### 21 — El rol de la sentencia

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["sentencia", "juez", "derecho_procesal"]

variables:
  datos: ["Juan demanda a Pedro por una deuda de $1000", "María demanda a Luis por daños en un auto", "Un vecino demanda a otro por ruido excesivo"]
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["La decisión del juez", "El contrato entre las partes", "La demanda inicial", "La mediación previa"]

respuesta: "La decisión del juez"

enunciado: "En el caso donde {datos[idx]}, ¿cómo se denomina la decisión final del juez que pone fin al conflicto?"

explicacion: |
  La sentencia es el acto procesal mediante el cual el juez resuelve la cuestión sometida a su decisión, poniendo fin al proceso.
```

### 22 — La estructura de la sentencia

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["estructura", "sentencia", "vistos", "fallo"]

variables:
  orden_partes: ["Vistos", "Considerandos", "Fallo"]
  idx: 0

respuesta_orden: ["Vistos", "Considerandos", "Fallo"]
tipo: ordenar
opciones_explicitas: ["Vistos", "Considerandos", "Fallo"]

enunciado: "Ordene cronológicamente las partes de una sentencia judicial estándar:"

pasos:
  - "Identificación de los antecedentes y partes (Vistos)."
  - "Análisis de los hechos y aplicación de la norma (Considerandos)."
  - "La decisión final y resolución del conflicto (Fallo)."

explicacion: |
  Una sentencia bien estructurada comienza con los 'Vistos' (antecedentes), sigue con los 'Considerandos' (razonamiento jurídico) y culmina con el 'Fallo' (la decisión).
```

### 23 — El principio de congruencia

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "avanzado"
  tags: ["congruencia", "principio_legal", "juez"]

variables:
  datos: [["El actor pide daños y perjuicios", "El juez otorga solo daños y perjuicios"], ["La actora pide el desalojo", "El juez ordena el desalojo"], ["Se reclama una deuda de $500", "El juez condena al pago de $500"]]
  idx: uno_de([0, 1, 2])

respuesta: verdadero

tipo: vf

enunciado: "Si en el caso donde {datos[idx][0]}, el juez dicta una sentencia que coincide exactamente con lo pedido por las partes, se ha respetado el principio de congruencia."

explicacion: |
  El principio de congruencia exige que el juez debe resolver conforme a las pretensiones de las partes, no pudiendo dar más ni menos de lo solicitado (ultra o extra petita).
```

### 24 — Elementos de la sentencia

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "basico"
  tags: ["elementos", "sentencia", "fundamentación"]

respuesta: ["fundamentación", "resolución"]
tipo: completar
respuestas_validas:
  - "fundamentación"
  - "resolución"

enunciado: "Toda sentencia debe contener una ___ (donde se explica el porqué de la decisión) y una ___ (donde se dicta el mandato final)."

explicacion: |
  La fundamentación es la parte donde el juez aplica la ley a los hechos, y la resolución es la parte dispositiva donde se decide el conflicto.
```

### 25 — El carácter de la sentencia

```
metadata:
  materia: "derecho"
  tema: "resolucion_de_conflictos_y_sentencia"
  nivel: "intermedio"
  tags: ["cosa_juzgada", "sentencia", "derecho"]

variables:
  datos: [["definitiva", "pasa a cosa juzgada"], ["interlocutoria", "resuelve una cuestión accesoria"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["pasa a cosa juzgada", "resuelve una cuestión accesoria", "es solo una opinión", "no tiene validez"]

enunciado: "Si la sentencia es de carácter {datos[idx][0]}, entonces se dice que ___."

explicacion: |
  La sentencia definitiva es la que tiene autoridad de cosa juzgada, impidiendo que el mismo conflicto sea juzgado nuevamente.
```
