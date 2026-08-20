# Biología — Deriva genética y flujo génico (cuestionario, 25 preguntas VBLang)

> Tema: `BM`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Esta tanda tuvo más bugs que el promedio: varios
> bloques `mc`/`vf` sin campo `respuesta:` en absoluto (agregado);
> `tipo: vf`/`tipo: completar` mal aplicados entre sí en varias
> preguntas (una pregunta con blank `___` no es `vf`, y viceversa);
> un `enunciado` que revelaba la respuesta interpolándola directo en
> el texto (`{escenario[idx][1]}` con el resultado correcto, no un
> dato de la pregunta) — reescrito sin la fuga; un `uno_de(...)`
> envolviendo una lista que después se indexaba con un `idx`
> independiente (doble sorteo desincronizado) — corregido a un solo
> sorteo; `respuestas_validas` aceptando más de una respuesta correcta
> cuando sólo una lo era; un bloque literalmente duplicado y comentado
> a medio terminar por Gemma (pregunta 5 del primer lote) — descartado
> y reemplazado por una versión limpia; `tipo:`/comillas inconsistentes
> normalizadas sin comillas.

---

### 1 — El efecto del azar

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["genetica", "evolucion", "azar"]

respuesta: "azar"
tipo: completar
respuestas_validas:
  - "azar"

enunciado: "La deriva genética se define como el cambio en las frecuencias alélicas de una población debido a eventos de ___."

explicacion: |
  A diferencia de la selección natural, donde los rasgos se heredan por su ventaja adaptativa, la deriva genética es un proceso estocástico (al azar) que afecta la composición genética de la población sin importar si el rasgo es beneficioso o perjudicial.
```

### 2 — Tamaño de la población

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["poblacion", "tamaño", "deriva"]

variables:
  escenario: uno_de([["una isla pequeña con pocos individuos", "pequeña"], ["un continente con millones de individuos", "grande"]])

respuesta: escenario[1]
tipo: completar
respuestas_validas:
  - "pequeña"
  - "grande"

enunciado: "La deriva genética tiene un impacto mucho más significativo y es más notoria en una población de tamaño ___."

explicacion: |
  En poblaciones grandes, el azar tiende a compensarse y las frecuencias se mantienen estables. En poblaciones pequeñas, un evento aleatorio (como la muerte accidental de un individuo) puede cambiar drásticamente el porcentaje de un alelo en la siguiente generación.
```

### 3 — Pérdida de variabilidad

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["variabilidad", "polimorfismo", "extincion"]

respuesta: "disminuye"
tipo: completar
respuestas_validas:
  - "disminuye"

enunciado: "Debido a que los alelos pueden desaparecer de la población por puro azar, la deriva genética generalmente hace que la variabilidad genética ___."

explicacion: |
  Al perderse alelos de forma aleatoria (especialmente en poblaciones pequeñas), la diversidad genética de la población se reduce, lo que puede limitar la capacidad de adaptación de la especie a cambios ambientales futuros.
```

### 4 — El efecto fundador (definición)

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["efecto_fundador", "colonizacion"]

respuesta: "fundador"
tipo: completar
respuestas_validas:
  - "fundador"

enunciado: "Cuando un grupo muy pequeño de individuos coloniza un nuevo hábitat, se produce un fenómeno de deriva genética conocido como efecto ___."

explicacion: |
  El efecto fundador ocurre cuando una nueva población se establece a partir de un número reducido de individuos. La composición genética de los nuevos colonizadores puede ser muy distinta a la de la población original debido al azar.
```

### 5 — Selección vs. azar

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["comparacion", "seleccion_natural"]

respuesta: verdadero
tipo: vf

enunciado: "Si un alelo aumenta su frecuencia en una población porque otorga una ventaja de supervivencia, ese cambio es producto de la selección natural, no de la deriva genética."

explicacion: |
  Correcto. La deriva genética es, por definición, un proceso que ocurre independientemente de la ventaja o desventaja del rasgo — si hay una ventaja de por medio, el mecanismo en juego es la selección natural.
```

### 6 — Concepto de efecto fundador

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["genetica", "evolucion", "deriva_genetica"]

tipo: mc
opciones_explicitas: ["Un grupo pequeño coloniza una nueva zona, llevando sólo una parte de la variabilidad", "Un grupo grande se mezcla con una población residente", "La selección natural favorece a los individuos más fuertes", "Un evento catastrófico mata a la mayoría de los individuos de una población"]
respuesta: "Un grupo pequeño coloniza una nueva zona, llevando sólo una parte de la variabilidad"

enunciado: "El efecto fundador ocurre cuando ___."

explicacion: |
  El efecto fundador es un tipo de deriva genética que sucede cuando un pequeño número de individuos se separa de una población original para establecer una nueva colonia. La nueva población tendrá una composición genética muy distinta a la original porque el grupo fundador no representa la diversidad total de la población madre.
```

### 7 — Consecuencia en la variabilidad

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["variabilidad", "polimorfismo"]

variables:
  escenario: [["un grupo de 5 mariposas", "Disminución de la variabilidad genética"], ["un grupo de 10 mariposas", "Disminución de la variabilidad genética"]]
  idx: uno_de([0, 1])

tipo: mc
opciones_explicitas: ["Aumento de la variabilidad genética", "Disminución de la variabilidad genética", "No hay cambios en la frecuencia alélica", "Aumento del tamaño poblacional"]
respuesta: escenario[idx][1]

enunciado: "Si {escenario[idx][0]} coloniza una isla desierta, ¿cuál es la consecuencia más probable para la variabilidad genética de la nueva población?"

explicacion: |
  Al ser un grupo tan reducido, muchos alelos presentes en la población original pueden no estar presentes en los fundadores, lo que reduce la riqueza genética de la nueva población.
```

### 8 — Frecuencia de un alelo raro tras el efecto fundador

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["frecuencia_alelica", "deriva_genetica"]

tipo: completar
respuesta: "alta"
respuestas_validas:
  - "alta"

enunciado: "Si por azar uno de los pocos individuos fundadores porta un alelo que era raro en la población original, ese alelo puede terminar con una frecuencia ___ en la nueva población, muy distinta a su frecuencia original."

explicacion: |
  Debido al azar del muestreo con tan pocos individuos, un alelo raro puede volverse desproporcionadamente común (o directamente desaparecer) en la población fundadora.
```

### 9 — Identificación de escenario

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "avanzado"
  tags: ["analisis", "deriva_genetica"]

variables:
  datos: [["Un grupo de 10 escarabajos llega a una isla y se establece", "Efecto fundador"], ["Un incendio mata al 90% de los leones de una población ya establecida", "Cuello de botella"]]
  idx: uno_de([0, 1])

tipo: mc
opciones_explicitas: ["Efecto fundador", "Cuello de botella", "Selección natural", "Mutación"]
respuesta: datos[idx][1]

enunciado: "{datos[idx][0]}. ¿Cómo se llama este fenómeno?"

explicacion: |
  La clave es distinguir colonización de un espacio nuevo por un grupo reducido (efecto fundador) de una mortalidad masiva sobre una población ya establecida (cuello de botella).
```

### 10 — Relación entre tamaño e impacto

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["tamaño_poblacional", "deriva_genetica"]

tipo: vf
respuesta: verdadero

enunciado: "El efecto fundador tiene un impacto mucho mayor en la composición genética de una población si el tamaño del grupo colonizador es muy pequeño."

explicacion: |
  Verdadero. Cuanto más pequeño sea el número de individuos fundadores, mayor es el error de muestreo y, por lo tanto, mayor es la deriva genética respecto a la población original.
```

### 11 — Efecto cuello de botella

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["evolucion", "deriva_genetica"]

tipo: mc
opciones_explicitas: ["Aumento de la variabilidad genética", "Reducción de la diversidad genética", "Aumento del tamaño de la población", "Selección natural dirigida"]
respuesta: "Reducción de la diversidad genética"

enunciado: "Un incendio forestal destruye la mayor parte de una población de escarabajos, dejando vivos sólo a unos pocos individuos al azar. Este evento de 'cuello de botella' provoca principalmente una ___."

explicacion: |
  El cuello de botella reduce drásticamente el tamaño de la población. Como los sobrevivientes son una muestra aleatoria, la diversidad de alelos disminuye, lo que limita la capacidad de la población para adaptarse en el futuro.
```

### 12 — Sobrevivencia al azar

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["deriva_genetica", "cuello_de_botella"]

tipo: vf
respuesta: falso

enunciado: "En un evento de cuello de botella, los individuos que sobreviven lo hacen porque poseen características físicamente superiores que les permiten adaptarse mejor al desastre."

explicacion: |
  Falso. En la deriva genética (como el cuello de botella), la supervivencia es producto del azar y no de la adaptación. Los sobrevivientes no son necesariamente los "más aptos", sino los que tuvieron suerte.
```

### 13 — Consecuencias genéticas

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["genetica_de_poblaciones", "cuello_de_botella"]

tipo: mc
opciones_explicitas: ["Aumento de la endogamia", "Aumento de la tasa de mutación", "Eliminación de la selección natural", "Aumento de la frecuencia de alelos raros"]
respuesta: "Aumento de la endogamia"

enunciado: "Cuando una población pasa por un cuello de botella, la reducción drástica del número de individuos suele llevar a un aumento de la ___ debido a la reproducción entre parientes cercanos."

explicacion: |
  Al haber pocos individuos, la probabilidad de que se crucen parientes aumenta, lo que incrementa la endogamia y puede manifestar rasgos recesivos perjudiciales.
```

### 14 — El factor azar

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["deriva_genetica"]

tipo: vf
respuesta: verdadero

enunciado: "La deriva genética por cuello de botella es un mecanismo de la evolución que actúa de forma aleatoria, independientemente de si los rasgos son beneficiosos o no."

explicacion: |
  Verdadero. A diferencia de la selección natural, la deriva genética se basa en eventos aleatorios (catástrofes, desastres) que cambian las frecuencias alélicas sin considerar la adaptación.
```

### 15 — Diversidad post-evento

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["biodiversidad", "cuello_de_botella"]

tipo: mc
opciones_explicitas: ["La población recupera su diversidad original inmediatamente", "La diversidad genética se mantiene igual", "La diversidad genética se reduce significativamente", "La población se vuelve inmune a cambios ambientales"]
respuesta: "La diversidad genética se reduce significativamente"

enunciado: "Si una población de 1000 individuos es reducida a sólo 10 sobrevivientes por un desastre natural, ¿qué ocurre con la diversidad genética de la nueva población?"

explicacion: |
  La diversidad se reduce significativamente porque los 10 sobrevivientes sólo llevan consigo una pequeña fracción de la información genética que existía en la población original.
```

### 16 — Concepto de flujo génico

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["genetica", "poblaciones"]

respuesta: "migración"
tipo: completar
respuestas_validas:
  - "migración"
  - "migracion"

enunciado: "El movimiento de genes entre poblaciones, causado por la ___ de individuos que se reproducen en un nuevo grupo, se conoce como flujo génico."

explicacion: |
  El flujo génico ocurre cuando individuos de una población se desplazan a otra y se reproducen, introduciendo nuevos alelos o cambiando las frecuencias existentes.
```

### 17 — Efecto de homogeneización

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["homogeneizacion", "frecuencias"]

respuesta: "homogeneizar"
tipo: completar
respuestas_validas:
  - "homogeneizar"
  - "homogeneizacion"
  - "homogeneización"

enunciado: "Uno de los efectos principales del flujo génico constante entre dos poblaciones es que tiende a ___ sus frecuencias alélicas, haciéndolas más similares entre sí."

explicacion: |
  Al intercambiar individuos, las diferencias genéticas entre las poblaciones disminuyen, lo que reduce la divergencia genética y las hace más parecidas (homogéneas).
```

### 18 — Diferencia con la deriva genética

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["comparacion", "deriva"]

respuesta: "reducir"
tipo: completar
respuestas_validas:
  - "reducir"
  - "disminuir"

enunciado: "Mientras que la deriva genética tiende a aumentar la diferenciación entre poblaciones, el flujo génico tiende a ___ esa diferenciación entre ellas."

explicacion: |
  La deriva genética es un proceso aleatorio que aumenta la diferencia entre poblaciones, mientras que el flujo génico actúa como una fuerza cohesiva que las iguala.
```

### 19 — Variabilidad genética interna

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["variabilidad", "alelos"]

respuesta: "aumentar"
tipo: completar
respuestas_validas:
  - "aumentar"
  - "incrementar"

enunciado: "Cuando un grupo de individuos llega a una población que es genéticamente muy similar, el flujo génico puede servir para ___ la variabilidad genética dentro de esa población receptora."

explicacion: |
  Al introducir nuevos alelos que no estaban presentes o que eran raros, la diversidad genética dentro de la población local aumenta.
```

### 20 — Escenario de aislamiento

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "avanzado"
  tags: ["aislamiento", "reproduccion"]

respuesta: falso
tipo: vf

enunciado: "El flujo génico es posible si las poblaciones están completamente aisladas reproductivamente (por ejemplo, por una barrera geográfica infranqueable)."

explicacion: |
  Falso. Para que exista flujo génico debe haber transferencia de genes, lo cual requiere que los individuos se desplacen y logren reproducirse exitosamente en la nueva población.
```

### 21 — Mecanismo de cambio genético

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "basico"
  tags: ["evolucion", "mecanismos"]

tipo: mc
opciones_explicitas: ["Selección natural", "Deriva genética", "Flujo génico"]
respuesta: "Deriva genética"

enunciado: "Un incendio accidental elimina a la mayoría de los individuos de una pequeña población de escarabajos, cambiando la frecuencia de un alelo por puro azar. Este proceso se denomina:"

explicacion: |
  La deriva genética es un cambio aleatorio en las frecuencias alélicas de una población, generalmente más impactante en poblaciones pequeñas, donde el azar determina qué individuos sobreviven o se reproducen, independientemente de su adaptación.
```

### 22 — El papel de la migración

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["flujo_genico", "especies"]

tipo: completar
respuesta: "homogeneización"
respuestas_validas:
  - "homogeneización"
  - "homogeneizacion"

enunciado: "El flujo génico (migración) actúa como un agente de ___, ya que introduce nuevos alelos en una población pero tiende a hacer que las poblaciones sean más similares entre sí."

explicacion: |
  El flujo génico es el movimiento de genes entre poblaciones. Al intercambiar individuos, las diferencias genéticas entre poblaciones disminuyen, lo que impide la especiación al mantener el acervo genético conectado.
```

### 23 — Diferencia de mecanismos

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["comparacion", "seleccion"]

tipo: mc
opciones_explicitas: ["La selección natural es dirigida por el ambiente y la deriva es azarosa.", "La selección natural es azarosa y la deriva es dirigida por el ambiente.", "Ambas son procesos puramente azarosos.", "Ambas dependen de la migración de individuos."]
respuesta: "La selección natural es dirigida por el ambiente y la deriva es azarosa."

enunciado: "¿Cuál es la diferencia fundamental entre la selección natural y la deriva genética?"

explicacion: |
  La selección natural favorece rasgos que aumentan la supervivencia y reproducción en un ambiente específico (no es azarosa), mientras que la deriva genética cambia las frecuencias de alelos por eventos fortuitos (azar).
```

### 24 — Barreras y especiación

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "avanzado"
  tags: ["especiacion", "flujo_genico"]

tipo: completar
respuesta: "baja"
respuestas_validas:
  - "baja"
  - "menor"

enunciado: "Si el flujo génico entre dos poblaciones de plantas es muy alto y constante, la probabilidad de que estas poblaciones se conviertan en especies distintas es ___, debido a que el intercambio de genes mantiene la similitud genética."

explicacion: |
  Para que ocurra la especiación, suele ser necesario el aislamiento (reproductivo o geográfico). El flujo génico constante actúa como un "pegamento" genético que contrarresta la divergencia que podrían causar la selección o la deriva.
```

### 25 — Efecto de la población en la deriva

```
metadata:
  materia: "biologia"
  tema: "deriva_genetica_flujo_genico"
  nivel: "intermedio"
  tags: ["poblacion", "deriva"]

tipo: mc
opciones_explicitas: ["En poblaciones grandes", "En poblaciones pequeñas", "En poblaciones con mucho flujo génico", "En poblaciones con alta selección natural"]
respuesta: "En poblaciones pequeñas"

enunciado: "El efecto de la deriva genética sobre las frecuencias alélicas es significativamente mayor en:"

explicacion: |
  En poblaciones grandes, los cambios azarosos en un individuo tienen poco impacto en la frecuencia total. En poblaciones pequeñas, la pérdida o ganancia de un solo individuo puede alterar drásticamente la composición genética del grupo.
```
