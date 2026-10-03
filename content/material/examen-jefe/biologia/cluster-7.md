# Examen jefe — [PENDIENTE #867]

> Logro #867. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 7 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **183 preguntas totales** en 7/7 secciones.

---

## Sección: deriva-genetica-flujo-genico (25 preguntas)

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

## Sección: especiacion (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["definicion", "reproduccion"]

respuesta: "fértil"
tipo: completar
respuestas_validas:
  - "fértil"
  - "fertil"

enunciado: "Según el concepto biológico de especie, los individuos de una misma especie pueden reproducirse entre sí y producir descendencia ___."

explicacion: |
  El criterio biológico de especie establece que una especie es un grupo de poblaciones cuyos individuos pueden reproducirse entre sí y dejar descendencia fértil.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["definicion", "origen"]

respuesta: "dos o más"
tipo: completar
respuestas_validas:
  - "dos o más"
  - "dos o mas"

enunciado: "La especiación es el proceso mediante el cual una población original da origen a ___ especies distintas."

explicacion: |
  La especiación ocurre cuando la variabilidad genética y el aislamiento permiten que una población se divida en dos o más linajes separados.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["aislamiento", "reproduccion"]

respuesta: "barreras"
tipo: completar

enunciado: "Para que ocurra la especiación, deben existir ___ reproductivas que impidan el flujo de genes entre los grupos de individuos."

respuestas_validas:
  - "barreras"

explicacion: |
  Las barreras (ya sean geográficas, conductuales o mecánicas) son fundamentales para que los grupos dejen de intercambiar material genético y diverjan.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["diversidad", "evolucion"]

respuesta: "distintas"
tipo: completar
respuestas_validas:
  - "distintas"

enunciado: "Cuando un proceso de especiación se completa con éxito, los nuevos grupos de organismos se consideran especies ___."

explicacion: |
  Una vez que el aislamiento es total y no pueden producir descendencia fértil entre sí, se consideran especies distintas.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["reproduccion", "descendencia"]

respuesta: "fértil"
tipo: completar

enunciado: "Si dos poblaciones se cruzan pero su descendencia es estéril, no se ha cumplido el criterio de reproducción para formar una nueva especie, ya que no se produce descendencia ___."

respuestas_validas:
  - "fértil"
  - "fertil"

explicacion: |
  La clave del concepto biológico es que la descendencia sea capaz de seguir reproduciéndose (fértil) para mantener el linaje.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["aislamiento", "flujo_genico"]

tipo: mc
opciones_explicitas: ["Barrera geográfica", "Mutación espontánea", "Selección natural", "Deriva genética"]
respuesta: "Barrera geográfica"

enunciado: "Para que ocurra la especiación alopátrica, es fundamental que exista una ___ que impida el flujo génico entre dos poblaciones."

explicacion: |
  El aislamiento geográfico (como una montaña o un río) impide que los individuos se crucen, permitiendo que las poblaciones acumulen diferencias genéticas por separado.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["flujo_genico", "evolucion"]

tipo: vf
respuesta: falso

enunciado: "¿El flujo génico constante entre dos poblaciones puede favorecer la especiación al impedir que se diferencien genéticamente?"

explicacion: |
  Falso. El flujo génico actúa como una "fuerza homogeneizadora". Para que haya especiación, el flujo génico debe ser interrumpido o reducido drásticamente.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["aislamiento_reproductivo", "mecanismos"]

tipo: mc
opciones_explicitas: ["Aislamiento precigótico", "Aislamiento postcigótico", "Mutación puntual", "Selección sexual"]
respuesta: "Aislamiento precigótico"

enunciado: "Cuando los mecanismos que impiden la formación de un cigoto (como la diferencia en los periodos de celo o la incompatibilidad de órganos genitales) actúan, estamos ante un mecanismo de aislamiento ___."

explicacion: |
  Los mecanismos precigóticos impiden la fecundación, asegurando que no haya intercambio de material genético entre poblaciones que ya han comenzado a divergir.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["divergencia", "genetica"]

tipo: vf
respuesta: verdadero

enunciado: "Si dos poblaciones de una misma especie quedan aisladas reproductivamente de forma permanente, la acumulación de cambios genéticos puede dar lugar a la formación de nuevas especies."

explicacion: |
  Verdadero. La falta de intercambio genético permite que la selección natural y la deriva genética actúen de forma independiente en cada grupo.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["aislamiento_ecologico", "reproduccion"]

tipo: mc
opciones_explicitas: ["Aislamiento temporal", "Aislamiento por hábitat", "Aislamiento mecánico", "Aislamiento gamético"]
respuesta: "Aislamiento por hábitat"

enunciado: "Dos poblaciones de insectos que viven en la misma zona pero una habita en el dosel de los árboles y la otra en el suelo, presentan un tipo de aislamiento llamado ___."

explicacion: |
  Aunque ocupen el mismo espacio geográfico, al no encontrarse debido a sus preferencias de hábitat, se produce un aislamiento ecológico que corta el flujo génico.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["conceptos", "evolucion"]

tipo: mc
opciones_explicitas: ["El surgimiento de nuevas especies", "La extinción de una especie", "La mutación de un solo gen", "El cambio de hábitat de un individuo"]
respuesta: "El surgimiento de nuevas especies"

enunciado: "El proceso mediante el cual una población existente da lugar a una o más especies nuevas se denomina:"

explicacion: |
  La especiación es el proceso evolutivo que da lugar a la formación de especies distintas a partir de un ancestro común.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["especiacion_alopatrica", "aislamiento"]

tipo: vf
respuesta: verdadero

enunciado: "En la especiación alopátrica, una barrera física (como un río o una montaña) impide el flujo de genes entre dos poblaciones de la misma especie."

explicacion: |
  Exacto. La barrera física actúa como un mecanismo de aislamiento que impide que los individuos se reproduzcan entre sí, permitiendo que las poblaciones evolucionen de forma independiente.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["ejemplo", "gran_cañon"]

tipo: mc
opciones_explicitas: ["la formación de dos especies distintas", "la extinción inmediata de ambas", "la mezcla de las poblaciones", "ninguna de las anteriores"]
respuesta: "la formación de dos especies distintas"

enunciado: "En el Gran Cañón, la formación del cañón separó por millones de años a una población original de ardillas (Kaibab en un borde, Abert en el otro). ¿Cuál fue el resultado a largo plazo?"

explicacion: |
  Al quedar separadas por el cañón, las poblaciones de ardillas dejaron de reproducirse entre sí, acumulando diferencias genéticas hasta convertirse en especies diferentes.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["mecanismos", "reproduccion"]

tipo: completar
respuesta: "geográfico"
respuestas_validas:
  - "geográfico"
  - "geografico"

enunciado: "Cuando una barrera física separa a dos poblaciones, hablamos de un aislamiento ___ — el primer paso de la especiación alopátrica."

explicacion: |
  El aislamiento geográfico es el primer paso en la especiación alopátrica, pero el aislamiento reproductivo (que las poblaciones ya no puedan cruzarse incluso si se reencuentran) es lo que define finalmente la existencia de una nueva especie.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["flujo_genico", "genetica"]

tipo: mc
opciones_explicitas: ["Se detiene el flujo de genes", "Aumenta la variabilidad dentro de la población original", "Se produce la fusión de las dos poblaciones", "Las mutaciones dejan de ocurrir"]
respuesta: "Se detiene el flujo de genes"

enunciado: "Cuando ocurre una especiación alopátrica debido a una barrera física, ¿qué sucede con el flujo de genes entre las poblaciones separadas?"

explicacion: |
  El flujo de genes es el intercambio de material genético entre poblaciones. Al haber una barrera física, este intercambio se interrumpe, permitiendo la divergencia genética.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["conceptos", "evolucion"]

tipo: mc
opciones_explicitas: ["Ocurre cuando las poblaciones están separadas por una barrera geográfica como una montaña.", "Ocurre cuando nuevas especies surgen dentro de una misma área geográfica sin barreras físicas.", "Ocurre sólo cuando una población se divide en dos por un río.", "Ocurre por la migración de individuos a un nuevo continente."]
respuesta: "Ocurre cuando nuevas especies surgen dentro de una misma área geográfica sin barreras físicas."

enunciado: "La especiación simpátrica se define como el proceso en el cual..."

explicacion: |
  A diferencia de la especiación alopátrica (donde hay una barrera física), en la simpátrica el aislamiento reproductivo ocurre en el mismo territorio, por ejemplo, debido a cambios en el comportamiento o la dieta.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["mecanismos", "aislamiento"]

tipo: completar
respuesta: "temporal"
respuestas_validas:
  - "temporal"

enunciado: "Si dos poblaciones de la misma especie habitan en el mismo lugar, pero una se reproduce en primavera y la otra en otoño, el mecanismo de aislamiento se llama aislamiento ___."

explicacion: |
  Cuando las diferencias en los periodos de actividad o reproducción impiden que las poblaciones se crucen, estamos ante un mecanismo de aislamiento temporal, un tipo de aislamiento precigótico.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["nicho", "recursos"]

tipo: mc
opciones_explicitas: ["La especialización en un nuevo recurso alimenticio dentro del mismo hábitat.", "El desplazamiento de la población hacia un clima más frío.", "La mutación de un cromosoma que impide la fecundación.", "La formación de una montaña que divide el bosque."]
respuesta: "La especialización en un nuevo recurso alimenticio dentro del mismo hábitat."

enunciado: "Un ejemplo clásico de especiación simpátrica es cuando un grupo de individuos comienza a utilizar un nuevo recurso (como un fruto distinto) que los separa del resto de la población. Esto se conoce como..."

explicacion: |
  La explotación de un nuevo nicho ecológico permite que los individuos se especialicen, reduciendo la competencia y favoreciendo el aislamiento reproductivo sin necesidad de barreras físicas.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "avanzado"
  tags: ["comportamiento", "etologia"]

tipo: completar
respuesta: "etológico"
respuestas_validas:
  - "etológico"
  - "etologico"

enunciado: "Cuando las diferencias en los rituales de cortejo o en los cantos de apareamiento impiden que dos grupos se reproduzcan entre sí, estamos ante un aislamiento ___."

explicacion: |
  El aislamiento etológico (o de comportamiento) es un mecanismo precigótico donde las diferencias en el comportamiento impiden el reconocimiento entre parejas de diferentes grupos.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["factores", "evolucion"]

tipo: mc
opciones_explicitas: ["Barreras físicas como glaciares o desiertos.", "Cambios en los patrones de apareamiento o preferencias de hábitat.", "La fragmentación de un bosque por la actividad humana.", "La deriva genética por aislamiento geográfico."]
respuesta: "Cambios en los patrones de apareamiento o preferencias de hábitat."

enunciado: "¿Cuál de los siguientes factores es un motor principal de la especiación simpátrica?"

explicacion: |
  Dado que no hay una barrera física (como un glaciar o un desierto), la especiación debe ocurrir mediante mecanismos biológicos como cambios en el comportamiento, la dieta o la selección sexual.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "basico"
  tags: ["concepto", "reproduccion"]

respuesta: "reproductivo"
tipo: completar
respuestas_validas:
  - "reproductivo"

enunciado: "El criterio biológico más utilizado para definir si dos individuos pertenecen a la misma especie es su capacidad de tener descendencia con éxito ___."

explicacion: |
  El concepto biológico de especie se basa en la capacidad de los individuos para cruzarse y producir descendencia fértil. Si no pueden hacerlo, se consideran especies distintas.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["flujo_genico", "aislamiento"]

variables:
  escenario: uno_de([["una montaña que divide un bosque", "aislamiento geográfico"], ["un cambio en el comportamiento de apareamiento", "aislamiento etológico"], ["una diferencia en la época de celo", "aislamiento temporal"]])

respuesta: escenario[1]
tipo: completar
respuestas_validas:
  - "aislamiento geográfico"
  - "aislamiento etológico"
  - "aislamiento temporal"

enunciado: "Cuando una población queda dividida por {escenario[0]}, ocurre un tipo de barrera reproductiva llamada ___."

explicacion: |
  La ausencia de flujo génico es fundamental para la especiación. Cualquiera sea el mecanismo (geográfico, etológico, temporal), lo que importa es que impida el cruce entre las poblaciones.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "avanzado"
  tags: ["seleccion_natural", "deriva_genetica"]

respuesta: "selección natural"
tipo: completar
respuestas_validas:
  - "selección natural"
  - "seleccion natural"

enunciado: "Si una población, aislada de otra, cambia sus rasgos debido a la presión por sobrevivir en un ambiente específico, el proceso responsable de ese cambio se llama ___."

explicacion: |
  La selección natural actúa sobre la variabilidad existente, favoreciendo ciertos rasgos que aumentan la supervivencia y reproducción, lo que con el tiempo, sumado al aislamiento, puede llevar a la especiación.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["deriva_genetica", "azar"]

respuesta: "azar"
tipo: completar
respuestas_validas:
  - "azar"

enunciado: "A diferencia de la selección natural, la deriva genética provoca cambios en las frecuencias alélicas de una población debido al ___."

explicacion: |
  La deriva genética es un proceso estocástico (aleatorio) que afecta principalmente a poblaciones pequeñas, cambiando la composición genética sin que necesariamente haya una ventaja adaptativa.
```

```
metadata:
  materia: "biologia"
  tema: "especiacion"
  nivel: "intermedio"
  tags: ["flujo_genico", "especiacion"]

respuesta: "interrumpido"
tipo: completar
respuestas_validas:
  - "interrumpido"
  - "cortado"

enunciado: "Para que la especiación ocurra, el flujo génico entre dos poblaciones debe estar ___."

explicacion: |
  Si el flujo génico continúa, los genes se mezclan constantemente y las poblaciones se mantienen genéticamente similares. La especiación requiere que el intercambio de genes cese para que las diferencias se acumulen.
```

## Sección: presion-arterial (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "presion_arterial_conceptos"
  nivel: "basico"
  tags: ["definicion", "circulacion"]

respuesta: "fuerza"
tipo: completar
respuestas_validas:
  - "fuerza"

enunciado: "La presión arterial es la ___ que ejerce la sangre contra las paredes de las arterias."

explicacion: |
  La presión arterial es la fuerza ejercida por la sangre contra las paredes de las arterias mientras el corazón bombea sangre a través de ellas.
```

```
metadata:
  materia: "biologia"
  tema: "presion_arterial_conceptos"
  nivel: "basico"
  tags: ["sistolica", "corazon"]

respuesta: "sistólica"
tipo: mc
opciones_explicitas: ["sistólica", "diastólica", "media", "pulsátil"]

enunciado: "El valor de la presión arterial que representa la presión en las arterias cuando el corazón se contrae se denomina presión _______."

explicacion: |
  La presión sistólica ocurre durante la contracción del ventrículo izquierdo.
```

```
metadata:
  materia: "biologia"
  tema: "presion_arterial_conceptos"
  nivel: "basico"
  tags: ["diastolica", "corazon"]

respuesta: "diastólica"
tipo: mc
opciones_explicitas: ["sistólica", "diastólica", "capilar", "venosa"]

enunciado: "El valor de la presión arterial que representa la presión en las arterias cuando el corazón está en reposo entre latidos se denomina presión _______."

explicacion: |
  La presión diastólica es la presión mínima en las arterias durante el periodo de relajación cardíaca.
```

```
metadata:
  materia: "biologia"
  tema: "presion_arterial_unidades"
  nivel: "basico"
  tags: ["unidades", "medicion"]

respuesta: "mmHg"
tipo: completar
respuestas_validas:
  - "mmHg"
  - "mm Hg"
  - "milímetros de mercurio"

enunciado: "La presión arterial se mide comúnmente en unidades de _______."

explicacion: |
  La unidad estándar es el milímetro de mercurio (mmHg).
```

```
metadata:
  materia: "biologia"
  tema: "presion_arterial_conceptos"
  nivel: "basico"
  tags: ["lectura"]

respuesta: "120/80"
tipo: mc
opciones_explicitas: ["120/80", "80/120", "120/120", "80/80"]

enunciado: "Si una persona tiene una presión de 120/80 mmHg, ¿cuál es la forma correcta de expresar sus valores sistólico y diastólico?"

explicacion: |
  El primer valor es la sistólica y el segundo es la diastólica.
```

```
metadata:
  materia: "biologia"
  tema: "procedimiento_medicion"
  nivel: "intermedio"
  tags: ["pasos", "esfigmomanometro"]

respuesta_orden: ["inflar el manguito", "desinflar lentamente", "escuchar ruidos de Korotkoff"]
tipo: ordenar
opciones_explicitas: ["inflar el manguito", "desinflar lentamente", "escuchar ruidos de Korotkoff"]

enunciado: "Ordena los pasos lógicos para la toma de presión arterial manual:"

explicacion: |
  Primero se infla el manguito para ocluir la arteria, luego se desinfla para permitir el flujo y se escuchan los sonidos.
```

```
metadata:
  materia: "biologia"
  tema: "fisiologia_presion"
  nivel: "intermedio"
  tags: ["resistencia", "vasos"]

respuesta: "aumenta"
tipo: completar
respuestas_validas:
  - "aumenta"
  - "disminuye"

enunciado: "Si el diámetro de las arterias se reduce (vasoconstricción), la resistencia periférica _______ y, por lo tanto, la presión arterial aumenta."

explicacion: |
  A menor diámetro, mayor es la resistencia al flujo sanguíneo.
```

```
metadata:
  materia: "biologia"
  tema: "fisiologia_presion"
  nivel: "intermedio"
  tags: ["gasto_cardiaco"]

respuesta: verdadero
tipo: vf
enunciado: "Un aumento en el volumen de sangre expulsado por el corazón en cada latido (volumen sistólico) tiende a elevar la presión arterial."

explicacion: |
  Mayor volumen de sangre circulando bajo la misma resistencia eleva la presión.
```

```
metadata:
  materia: "biologia"
  tema: "factores_externos"
  nivel: "intermedio"
  tags: ["error", "medicion"]

respuesta: falso
tipo: vf
enunciado: "Realizar una toma de presión con el brazo por debajo del nivel del corazón no afecta el resultado de la lectura."

explicacion: |
  La posición del brazo respecto al corazón es crítica; si el brazo está bajo el nivel del corazón, la lectura será falsamente alta.
```

```
metadata:
  materia: "biologia"
  tema: "fisiologia_presion"
  nivel: "intermedio"
  tags: ["componentes"]

respuesta: "corazón"
tipo: completar
respuestas_validas:
  - "corazón"
  - "pulmones"

enunciado: "La presión arterial depende principalmente del gasto del _______ y la resistencia de los vasos sanguíneos."

explicacion: |
  El corazón actúa como la bomba que genera el flujo y la presión.
```

```
metadata:
  materia: "biologia"
  tema: "valores_clinicos"
  nivel: "intermedio"
  tags: ["normalidad"]

respuesta: "120/80"
tipo: mc
opciones_explicitas: ["120/80", "140/90", "110/70", "130/85"]

enunciado: "Según las guías generales, un valor de presión arterial considerado óptimo o normal es aproximadamente:"

explicacion: |
  Aunque varía según la edad, 120/80 mmHg es el estándar de referencia para normalidad.
```

```
metadata:
  materia: "biologia"
  tema: "patologia_presion"
  nivel: "avanzado"
  tags: ["hipertension"]

respuesta: "hipertensión"
tipo: completar
respuestas_validas:
  - "hipertensión"

enunciado: "Cuando la presión sistólica es consistentemente mayor a 140 mmHg, se diagnostica _______."

explicacion: |
  La hipertensión se define por valores elevados de presión en el sistema arterial.
```

```
metadata:
  materia: "biologia"
  tema: "patologia_presion"
  nivel: "intermedio"
  tags: ["hipotension"]

respuesta: "baja"
tipo: mc
opciones_explicitas: ["baja", "alta", "estable", "irregular"]

enunciado: "La hipotensión se caracteriza por tener una presión arterial _______."

explicacion: |
  Hipotensión es la disminución de la presión arterial por debajo de los niveles normales.
```

```
metadata:
  materia: "biologia"
  tema: "calculo_presion"
  nivel: "avanzado"
  tags: ["calculo"]

respuesta: 40
tipo: completar
tolerancia_abs: 0

enunciado: "Si una persona tiene una presión de 120/80 mmHg, ¿cuál es su presión de pulso (diferencia entre sistólica y diastólica)?"

pasos:
  - "Restar la presión diastólica de la sistólica (120 - 80)."

explicacion: |
  La presión de pulso es la diferencia entre la presión sistólica y la diastólica.
```

```
metadata:
  materia: "biologia"
  tema: "factores_biologicos"
  nivel: "intermedio"
  tags: ["edad"]

respuesta: verdadero
tipo: vf
enunciado: "La rigidez de las arterias asociada al envejecimiento suele provocar un aumento en la presión sistólica."

explicacion: |
  Con la edad, las arterias pierden elasticidad, lo que incrementa la presión sistólica.
```

```
metadata:
  materia: "biologia"
  tema: "comparacion_vasos"
  nivel: "intermedio"
  tags: ["arterias", "venas"]

respuesta: "arterias"
tipo: completar
respuestas_validas:
  - "arterias"
  - "venas"

enunciado: "La presión arterial es significativamente más alta en las _______ que en las venas."

explicacion: |
  Las arterias transportan sangre a alta presión desde el corazón, mientras que las venas lo hacen a baja presión.
```

```
metadata:
  materia: "biologia"
  tema: "factores_estres"
  nivel: "intermedio"
  tags: ["estres", "adrenalina"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene", "desaparece"]

enunciado: "Durante una situación de estrés agudo, la liberación de adrenalina provoca que la presión arterial _______."

explicacion: |
  La adrenalina causa vasoconstricción y aumenta la frecuencia cardíaca, elevando la presión.
```

```
metadata:
  materia: "biologia"
  tema: "error_medicion"
  nivel: "avanzado"
  tags: ["manguito", "tamaño"]

respuesta: "falsamente alta"
tipo: completar
respuestas_validas:
  - "falsamente alta"
  - "falsamente baja"

enunciado: "Si el manguito es demasiado pequeño para el brazo del paciente, la lectura será _______."

explicacion: |
  Un manguito pequeño requiere más presión para ocluir la arteria, dando un valor erróneo superior al real.
```

```
metadata:
  materia: "biologia"
  tema: "comparacion"
  nivel: "intermedio"
  tags: ["comparacion"]

respuesta: verdadero
tipo: vf
enunciado: "La presión sistólica es siempre mayor que la presión diastólica."

explicacion: |
  Por definición, la sistólica es el pico de presión y la diastólica es el mínimo.
```

```
metadata:
  materia: "biologia"
  tema: "ejercicio_fisico"
  nivel: "intermedio"
  tags: ["ejercicio"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se estabiliza", "cae"]

enunciado: "Durante el ejercicio físico intenso, la presión arterial sistólica suele _______."

explicacion: |
  El aumento del gasto cardíaco durante el ejercicio eleva la presión sistólica.
```

```
metadata:
  materia: "biologia"
  tema: "escenario_clinico"
  nivel: "avanzado"
  tags: ["deshidratacion", "volumen"]

respuesta: "disminuye"
tipo: completar
respuestas_validas:
  - "disminuye"
  - "aumenta"

enunciado: "En un paciente con deshidratación severa, el volumen sanguíneo total disminuye, lo que causa que la presión arterial _______."

explicacion: |
  Menos volumen de fluido en el sistema circulatorio reduce la presión ejercida contra las paredes.
```

```
metadata:
  materia: "biologia"
  tema: "escenario_clinico"
  nivel: "avanzado"
  tags: ["vasodilatacion"]

respuesta: "baja"
tipo: mc
opciones_explicitas: ["baja", "sube", "se mantiene", "oscila"]

enunciado: "Si un fármaco produce una vasodilatación masiva en las arterias, la presión arterial _______."

explicacion: |
  La vasodilatación reduce la resistencia periférica, lo que disminuye la presión.
```

```
metadata:
  materia: "biologia"
  tema: "sustancias_estimulantes"
  nivel: "intermedio"
  tags: ["cafeina", "estimulante"]

respuesta: verdadero
tipo: vf
enunciado: "El consumo de grandes cantidades de cafeína puede provocar un aumento temporal de la presión arterial."

explicacion: |
  La cafeína es un estimulante que puede elevar la presión arterial y la frecuencia cardíaca.
```

```
metadata:
  materia: "biologia"
  tema: "escenario_clinico"
  nivel: "avanzado"
  tags: ["postura"]

respuesta: "incorrecta"
tipo: completar
respuestas_validas:
  - "incorrecta"
  - "correcta"

enunciado: "Si el paciente tiene las piernas cruzadas durante la toma de presión, la lectura obtenida será _______."

explicacion: |
  Cruzar las piernas aumenta la presión arterial sistólica en la medición.
```

```
metadata:
  materia: "biologia"
  tema: "nutricion_presion"
  nivel: "intermedio"
  tags: ["sodio", "dieta"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "no cambia", "baja"]

enunciado: "Una dieta con un contenido muy elevado de sodio (sal) tiende a _______ la presión arterial a largo plazo."

explicacion: |
  El sodio retiene agua en el torrente sanguíneo, aumentando el volumen y la presión.
```

## Sección: filogenia-arboles-evolutivos (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "basico"
  tags: ["filogenia", "evolucion", "cladograma"]

tipo: vf

enunciado: "Un árbol filogenético es una representación gráfica que muestra las relaciones de parentesco entre diferentes grupos de organismos basándose en sus ancestros comunes."

respuesta: verdadero

explicacion: |
  Correcto. Los árboles filogenéticos ilustran la historia evolutiva de las especies, mostrando cómo se han diversificado a partir de ancestros compartidos.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "basico"
  tags: ["nodos", "ancestro"]

tipo: completar

enunciado: "En un cladograma, los puntos donde las ramas se bifurcan se denominan ___."

respuestas_validas:
  - "nodos"
respuesta: "nodos"

explicacion: |
  Los nodos representan el momento en que una línea evolutiva se divide en dos o más linajes distintos, marcando el ancestro común más reciente de esos grupos.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "basico"
  tags: ["puntas", "taxones"]

tipo: vf

enunciado: "Las puntas o extremos de las ramas en un árbol filogenético representan siempre especies que ya se han extinguido."

respuesta: falso

explicacion: |
  Falso. Las puntas pueden representar especies actuales (taxones existentes) o especies extintas que se han identificado en el registro fósil.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "intermedio"
  tags: ["ramas", "linajes"]

tipo: completar

enunciado: "Las líneas que conectan los nodos en un árbol filogenético se llaman ___."

respuestas_validas:
  - "ramas"
respuesta: "ramas"

explicacion: |
  Las ramas representan el camino evolutivo o linaje que sigue un grupo de organismos a lo largo del tiempo desde un ancestro común.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "intermedio"
  tags: ["parentesco", "ancestros"]

tipo: vf

enunciado: "Dos especies están más estrechamente relacionadas entre sí si comparten un ancestro común más reciente."

respuesta: verdadero

explicacion: |
  Exacto. La cercanía en un árbol filogenético se mide por la proximidad del ancestro común más reciente; cuanto más reciente sea el nodo que las une, mayor es su parentesco.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "basico"
  tags: ["filogenia", "evolucion", "ancestros"]

tipo: mc
opciones_explicitas: ["Tienen un ancestro común más reciente", "Tienen un ancestro común más antiguo", "Tienen más características físicas similares", "Tienen el mismo número de cromosomas"]

respuesta: "Tienen un ancestro común más reciente"

enunciado: "En un árbol filogenético, dos especies se consideran más estrechamente emparentadas si..."

explicacion: |
  El parentesco evolutivo se define por la proximidad temporal del ancestro común. Cuanto más reciente sea el nodo que une a dos taxones, mayor es su parentesco, independientemente de su apariencia física.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "intermedio"
  tags: ["filogenia", "evolucion", "morfologia"]

tipo: vf

enunciado: "Un tiburón (pez) y un delfín (mamífero) tienen cuerpos con forma similar debido a la adaptación al medio acuático, pero no están estrechamente emparentados porque su ancestro común más reciente es muy antiguo."

respuesta: verdadero

explicacion: |
  La similitud entre tiburones y delfines es un caso de evolución convergente. El parentesco se mide por la historia evolutiva (ancestro común), no por la apariencia externa.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "intermedio"
  tags: ["filogenia", "nodos", "lectura_arbol"]

tipo: mc
opciones_explicitas: ["El nodo más cercano a las puntas", "El nodo más cercano a la raíz", "El nodo que tiene más ramas", "El nodo que está en el centro del árbol"]

respuesta: "El nodo más cercano a las puntas"

enunciado: "Para determinar qué dos especies tienen un parentesco más cercano en un cladograma, debemos buscar..."

explicacion: |
  El nodo más cercano a las puntas (terminales) representa el ancestro común más reciente. A medida que retrocedemos hacia la raíz, los ancestros son más antiguos y los grupos menos relacionados.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "avanzado"
  tags: ["filogenia", "cladogramas", "relaciones"]

tipo: vf

enunciado: "Si en un árbol las especies A y B comparten un nodo exclusivo que no comparten con la especie C, entonces A y B están más emparentadas entre sí que con C."

respuesta: verdadero

explicacion: |
  La clave de la filogenia es la exclusividad del ancestro común. Si A y B comparten un nodo que no incluye a C, significa que A y B divergieron después de separarse de la línea que lleva a C.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "basico"
  tags: ["filogenia", "evolucion", "conceptos"]

tipo: vf

enunciado: "En un árbol filogenético, un nodo representa el momento en que un linaje se divide en dos o más linajes distintos."

respuesta: verdadero

explicacion: |
  Correcto. Cada nodo en un cladograma representa un evento de especiación o la existencia de un ancestro común que dio origen a los grupos que se ramifican de él.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "basico"
  tags: ["evolucion", "filogenia", "errores_conceptuales"]

tipo: completar

enunciado: "Un error común al interpretar árboles filogenéticos es verlos como una 'escalera de progreso' donde las especies más modernas son 'mejores' que las antiguas. En realidad, todas las especies actuales tienen la misma cantidad de tiempo transcurrido desde su ancestro común. Por lo tanto, la evolución no es una ___."

respuestas_validas:
  - "jerarquía"
  - "jerarquia"
respuesta: "jerarquía"

explicacion: |
  Los árboles filogenéticos representan relaciones de parentesco, no niveles de "perfección" o "progreso". Las especies actuales no son descendientes de otras especies actuales, sino que son ramas que coexisten tras haber divergido de un ancestro común.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "basico"
  tags: ["filogenia", "interpretacion", "ancestros"]

tipo: completar

enunciado: "En un árbol filogenético, si rotamos las ramas alrededor de un nodo, la relación de parentesco entre las especies no cambia. Esto significa que el orden en que aparecen las especies en las puntas del árbol es ___."

respuestas_validas:
  - "arbitrario"
respuesta: "arbitrario"

explicacion: |
  La rotación de nodos es una propiedad matemática de los árboles. El parentesco se define por la proximidad de los ancestros comunes, no por la posición visual de izquierda a derecha en el dibujo.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "intermedio"
  tags: ["evolucion", "tiempo", "ancestros"]

tipo: completar

enunciado: "Considerando un grupo de especies actuales, todas ellas han evolucionado desde su ancestro común durante el mismo período de tiempo. Si el ancestro común apareció hace 50 millones de años, todas las especies actuales del grupo tienen exactamente ___ millones de años de historia evolutiva desde ese punto."

respuestas_validas:
  - "50"
respuesta: "50"

explicacion: |
  Todas las puntas de un árbol filogenético representan organismos contemporáneos. Por lo tanto, la distancia temporal desde el ancestro común hasta la actualidad es la misma para todos los linajes que parten de ese punto.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "basico"
  tags: ["evolucion", "conceptos", "errores"]

tipo: completar

enunciado: "Es incorrecto afirmar que un ser humano es 'más evolucionado' que un hongo: ambos han acumulado cambios genéticos y adaptaciones desde sus respectivos ancestros comunes. La evolución no busca la ___ de una especie sobre otra, sino la adaptación al entorno."

respuestas_validas:
  - "superioridad"
  - "perfección"
  - "perfeccion"
respuesta: "superioridad"

explicacion: |
  La evolución no tiene un objetivo de perfección o de llegar a un estado de "máximo desarrollo". Es un proceso de cambio continuo donde la supervivencia depende de la adaptación al nicho ecológico, no de alcanzar un estándar de complejidad predeterminado.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "intermedio"
  tags: ["filogenia", "nodos", "parentesco"]

tipo: completar

enunciado: "En un árbol filogenético, un nodo representa el punto donde un linaje se divide en dos. Este punto simboliza un ___ común que ya no existe como una única población, sino que dio lugar a las especies actuales."

respuestas_validas:
  - "ancestro"
respuesta: "ancestro"

explicacion: |
  Los nodos son los puntos de divergencia. No representan a una especie actual, sino a un ancestro común hipotético del cual descendieron los linajes que se separan en ese punto.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "basico"
  tags: ["adn", "evolucion", "filogenia"]

variables:
  escenario: uno_de([["ATGC", "ATGG", "Muy emparentadas"], ["CCGA", "TTAG", "Poco emparentadas"], ["TTAA", "TTAG", "Muy emparentadas"]])

enunciado: "Se comparan las secuencias de ADN de dos especies: la especie A tiene la secuencia {escenario[0]} y la especie B tiene la secuencia {escenario[1]}. Contando las diferencias entre ambas secuencias, ¿qué tan emparentadas están?"

opciones_explicitas: ["Muy emparentadas", "Poco emparentadas"]
respuesta: escenario[2]
tipo: mc

explicacion: |
  En filogenia, cuantas más coincidencias existan en las secuencias de ADN entre dos especies, menor es el tiempo transcurrido desde su ancestro común, lo que indica un parentesco más cercano.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "basico"
  tags: ["ancestros", "cladogramas"]

enunciado: "En un árbol filogenético, el punto donde dos ramas se unen se denomina nodo, el cual representa el ___ común de las especies que de él derivan."

respuestas_validas:
  - "ancestro"
  - "antepasado"
respuesta: "ancestro"
tipo: completar

explicacion: |
  Un nodo en un cladograma representa un evento de especiación o el último ancestro común compartido por los linajes que se separan en ese punto.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "intermedio"
  tags: ["adn", "mutacion", "distancia"]

variables:
  idx: uno_de([0, 1])
  tabla: [["El primer par", "El primer par"], ["El segundo par", "El segundo par"]]

enunciado: "Comparando dos pares de especies por su distancia genética (cantidad de mutaciones acumuladas desde que se separaron): {tabla[idx][0]} tiene la menor cantidad de mutaciones. ¿Cuál de los dos pares tiene el ancestro común más reciente?"

opciones_explicitas: ["El primer par", "El segundo par"]
respuesta: tabla[idx][1]
tipo: mc

explicacion: |
  A menor número de mutaciones (distancia genética), menor es el tiempo transcurrido desde la divergencia, por lo tanto, el ancestro común es más reciente.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "intermedio"
  tags: ["homologia", "evolucion"]

enunciado: "Las estructuras que derivan de un mismo ancestro común, aunque tengan funciones distintas, se llaman estructuras ___."

respuestas_validas:
  - "homologas"
  - "homólogas"
respuesta: "homologas"
tipo: completar

explicacion: |
  La homología se refiere a rasgos compartidos por especies debido a su herencia común, como el brazo de un humano y la aleta de una ballena.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "avanzado"
  tags: ["cladogramas", "adn"]

variables:
  escenario: uno_de([["chimpancé", "1", "cerdo"], ["gorila", "2", "ratón"]])

enunciado: "El ser humano comparte más secuencia de ADN con el {escenario[0]} (diferencia de apenas {escenario[1]}% en algunas regiones comparadas) que con el {escenario[2]}. ¿Cuál de los dos animales comparte un ancestro común más reciente con el ser humano?"

respuesta: escenario[0]
tipo: completar
respuestas_validas:
  - escenario[0]

explicacion: |
  Cuanto menor es la diferencia porcentual entre secuencias de ADN, más reciente es el ancestro común compartido — por eso el árbol filogenético ubica a los primates mucho más cerca del ser humano que a otros mamíferos.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "basico"
  tags: ["filogenia", "evolucion", "especiacion"]

tipo: mc
opciones_explicitas: ["Un ancestro común que se dividió en dos linajes", "Una especie que ha evolucionado mucho", "Un cambio climático que afectó a todos", "El fin de una línea evolutiva"]
respuesta: "Un ancestro común que se dividió en dos linajes"

enunciado: "En un árbol filogenético, un nodo (punto de ramificación) representa principalmente:"

explicacion: |
  Un nodo representa el último ancestro común entre los grupos que se desprenden de él. Es el momento en que una población ancestral se divide en dos linajes distintos, proceso conocido como especiación.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "basico"
  tags: ["filogenia", "terminologia"]

tipo: mc
opciones_explicitas: ["Un evento de especiación", "Un ancestro común", "Una especie actual o extinta", "Un cambio genético"]
respuesta: "Una especie actual o extinta"

enunciado: "Las puntas de las ramas (llamadas taxones o terminales) en un árbol filogenético representan:"

explicacion: |
  Las puntas representan los grupos que se están comparando, que pueden ser especies actuales (si el árbol es actual) o especies extintas (si se incluyen fósiles).
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "intermedio"
  tags: ["filogenia", "conceptos"]

tipo: completar
respuestas_validas:
  - "especiación"
  - "especiacion"
respuesta: "especiación"

enunciado: "Cuando un nodo se bifurca, se está representando un evento de ___ que da origen a nuevos linajes."

explicacion: |
  La ramificación en un árbol es la representación visual de la especiación, donde una única línea ancestral se divide en dos o más ramas independientes.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "intermedio"
  tags: ["filogenia", "parentesco"]

tipo: mc
opciones_explicitas: ["más cercano", "más lejano", "idéntico", "no relacionado"]
respuesta: "más cercano"

enunciado: "Si dos especies comparten un nodo que no comparten con otras, se dice que están emparentadas de forma ___ entre sí en comparación con el resto."

explicacion: |
  La proximidad de un nodo compartido indica un parentesco más reciente. Cuanto más reciente sea el ancestro común (más cerca de las puntas), más estrecho es el parentesco.
```

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "avanzado"
  tags: ["filogenia", "interpretacion"]

tipo: completar
respuestas_validas:
  - "extinta"
respuesta: "extinta"

enunciado: "Si una rama del árbol termina antes de llegar al presente (no es una punta terminal de un árbol de especies actuales), esa rama representa una especie ___."

explicacion: |
  En los árboles filogenéticos, las ramas que no terminan en el presente suelen representar linajes que se extinguieron antes de la diversificación actual.
```

## Sección: sistema-endocrino-hormonas-glandulas (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["hormonas", "glándulas"]

respuesta: "hormona"
tipo: completar
respuestas_validas:
  - "hormona"

enunciado: "Las sustancias químicas producidas por las glándulas endocrinas que viajan a través de la sangre para regular funciones corporales se denominan ___."

explicacion: |
  Las hormonas son mensajeros químicos que se liberan en el torrente sanguíneo para actuar sobre células u órganos específicos (células diana).
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["sistema_nervioso", "sistema_endocrino"]

respuesta: "lento"
tipo: completar
respuestas_validas:
  - "lento"

enunciado: "A diferencia del sistema nervioso, que utiliza impulsos eléctricos para una respuesta inmediata, el sistema endocrino se caracteriza por tener un efecto ___."

explicacion: |
  El sistema nervioso es rápido y de corta duración, mientras que el sistema endocrino es más lento pero sus efectos suelen ser más duraderos.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["transporte", "sangre"]

respuesta: "torrente sanguíneo"
tipo: completar
respuestas_validas:
  - "torrente sanguíneo"
  - "torrente sanguineo"
  - "sangre"

enunciado: "Mientras que las neuronas transmiten señales a través de axones, las glándulas endocrinas liberan sus mensajeros directamente al ___."

explicacion: |
  Las glándulas endocrinas son glándulas sin conductos que vierten su secreción directamente en la sangre.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["comparacion", "señales"]

respuesta: "lentas"
tipo: completar
respuestas_validas:
  - "lentas"

enunciado: "El sistema endocrino utiliza señales químicas para transmitir su mensaje, lo que hace que la respuesta sea ___."

explicacion: |
  El sistema nervioso es como un mensaje de texto instantáneo (rápido/eléctrico), mientras que el endocrino es como una carta (lento/químico).
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["transporte", "sangre"]

respuesta: "sangre"
tipo: completar
respuestas_validas:
  - "sangre"

enunciado: "El medio principal de transporte para las hormonas en el organismo es la ___."

explicacion: |
  La sangre actúa como la autopista que permite que las hormonas lleguen desde la glándula hasta los órganos distantes.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["tiroides", "tiroxina"]

tipo: mc
opciones_explicitas: ["Insulina", "Tiroxina", "Adrenalina", "Estrógeno"]
respuesta: "Tiroxina"

enunciado: "La glándula tiroides es responsable de la secreción de una hormona fundamental para regular el metabolismo energético del organismo. ¿Cuál es dicha hormona?"

explicacion: |
  La tiroides produce tiroxina (T4) y triyodotironina (T3), las cuales regulan la velocidad con la que las células consumen energía.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["pancreas", "insulina", "glucagon"]

tipo: completar
respuesta: "glucagón"
respuestas_validas:
  - "glucagón"
  - "glucagon"

enunciado: "Cuando los niveles de glucosa en sangre disminuyen, el páncreas secreta la hormona ___ para provocar que los niveles de azúcar suban."

explicacion: |
  El páncreas actúa de forma dual: la insulina baja la glucosa y el glucagón la sube. Ante la baja de glucosa, se libera glucagón.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["suprarrenales", "adrenalina"]

tipo: mc
opciones_explicitas: ["Cortisol", "Adrenalina", "Testosterona", "Tiroxina"]
respuesta: "Adrenalina"

enunciado: "Ante una situación de peligro o estrés repentino, las glándulas suprarrenales liberan una hormona que aumenta la frecuencia cardíaca y prepara al cuerpo para la acción. ¿Qué hormona es?"

explicacion: |
  La adrenalina (epinefrina) es la hormona de respuesta inmediata ante situaciones de lucha o huida.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["gonadas", "estrogeno", "testosterona"]

tipo: completar
respuesta: "estrógeno"
respuestas_validas:
  - "estrógeno"
  - "estrogeno"

enunciado: "En el sistema reproductor femenino, las gónadas (ovarios) producen principalmente la hormona ___."

explicacion: |
  Los ovarios producen estrógenos y progesterona, encargados de los caracteres sexuales secundarios femeninos y el ciclo menstrual.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["pancreas", "insulina"]

tipo: mc
opciones_explicitas: ["Cortisol", "Insulina", "Adrenalina", "Tiroxina"]
respuesta: "Insulina"

enunciado: "La diabetes mellitus tipo 1 se caracteriza por la deficiencia en la producción de una hormona pancreática que permite la entrada de glucosa a las células. ¿Cuál es?"

explicacion: |
  La insulina es la hormona encargada de permitir que la glucosa pase de la sangre a las células para ser utilizada como energía.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["hipofisis", "glandula_maestra"]

respuesta: "hipofisis"
tipo: completar
respuestas_validas:
  - "hipofisis"
  - "hipófisis"

enunciado: "La glándula situada en la base del cerebro que coordina y regula el funcionamiento de otras glándulas endocrinas se denomina ___."

explicacion: |
  La hipófisis es conocida como la glándula maestra porque secreta hormonas que estimulan o inhiben la actividad de otras glándulas como la tiroides, las suprarrenales y las gónadas.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["receptor", "especificidad"]

respuesta: "receptor"
tipo: completar
respuestas_validas:
  - "receptor"

enunciado: "Aunque las hormonas viajan a través de toda la sangre circulando por el organismo, sólo pueden ejercer su efecto sobre las células que poseen un ___ específico."

explicacion: |
  Este mecanismo se llama especificidad celular. La hormona actúa como una 'llave' y el receptor como una 'cerradura'; si la célula no tiene la cerradura adecuada, la hormona pasa de largo sin producir cambios.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["transporte", "sangre"]

respuesta: "sangre"
tipo: completar
respuestas_validas:
  - "sangre"

enunciado: "A diferencia del sistema nervioso que usa impulsos eléctricos, el sistema endocrino transporta sus mensajeros químicos (hormonas) a través de la ___."

explicacion: |
  Las hormonas son mensajeros químicos que se liberan al torrente sanguíneo para ser distribuidos por todo el cuerpo.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["eje_hormonal", "tiroides"]

respuesta: "tiroides"
tipo: completar
respuestas_validas:
  - "tiroides"

enunciado: "La hipófisis secreta la hormona tirotropina (TSH), cuya función principal es regular el funcionamiento de la glándula ___."

explicacion: |
  La TSH (hormona estimulante de la tiroides) viaja por la sangre hasta la glándula tiroides para estimular la producción de sus hormonas (T3 y T4).
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "avanzado"
  tags: ["celula_diana", "receptor"]

respuesta: "célula diana"
tipo: completar
respuestas_validas:
  - "célula diana"
  - "celula diana"

enunciado: "El término utilizado para designar a la célula sobre la cual actúa una hormona específica se conoce como ___."

explicacion: |
  La célula diana es aquella que tiene los receptores proteicos necesarios para reconocer la señal de la hormona y desencadenar una respuesta biológica.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["hormonas", "glucosa", "insulina"]

tipo: mc
opciones_explicitas: ["Aumentar la glucosa en sangre", "Disminuir la glucosa en sangre", "Aumentar el ritmo cardiaco", "Regular la temperatura corporal"]
respuesta: "Disminuir la glucosa en sangre"

enunciado: "Cuando los niveles de glucosa en sangre aumentan después de una comida, el páncreas secreta insulina para realizar una acción de retroalimentación negativa. ¿Cuál es el efecto principal de la insulina?"

explicacion: |
  La insulina permite que la glucosa entre en las células, reduciendo así su concentración en el torrente sanguíneo y manteniendo la homeostasis.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["homeostasis", "mecanismo", "control"]

tipo: vf
respuesta: verdadero

enunciado: "En un sistema de retroalimentación negativa, la respuesta producida por el cuerpo actúa para contrarrestar o reducir el estímulo inicial para mantener el equilibrio."

explicacion: |
  Correcto. El objetivo de la retroalimentación negativa es la homeostasis: si un parámetro se desvía de su punto de ajuste, el sistema activa mecanismos para devolverlo a la normalidad.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["glucagon", "glucosa", "ayuno"]

tipo: mc
opciones_explicitas: ["Estimular la absorción de glucosa", "Inhibir la producción de insulina", "Aumentar la glucosa en sangre", "Reducir la glucosa en sangre"]
respuesta: "Aumentar la glucosa en sangre"

enunciado: "Durante un periodo de ayuno, los niveles de glucosa en sangre descienden. Para compensar esto, el páncreas libera glucagón. ¿Cuál es la función de esta hormona?"

explicacion: |
  El glucagón estimula la degradación del glucógeno en el hígado para liberar glucosa a la sangre, elevando así sus niveles.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["termorregulacion", "homeostasis", "analogia"]

tipo: vf
respuesta: verdadero

enunciado: "La analogía del termostato de un aire acondicionado es útil para entender la retroalimentación negativa, ya que cuando la temperatura sube, el sistema se activa para apagar el calor y estabilizar la temperatura."

explicacion: |
  Exacto. Al igual que el termostato detecta el cambio y activa una acción para revertirlo, el sistema endocrino detecta cambios químicos y activa hormonas para revertirlos.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "avanzado"
  tags: ["control", "eje_hormonal", "regulacion"]

tipo: mc
opciones_explicitas: ["El estímulo aumenta la producción de la hormona", "El estímulo disminuye la producción de la hormona", "La hormona no tiene relación con el estímulo", "La hormona siempre aumenta el estímulo"]
respuesta: "El estímulo aumenta la producción de la hormona"

enunciado: "En un ciclo de retroalimentación negativa clásica, si el nivel de un producto final (como una hormona) es muy bajo, ¿qué sucede con la señal de estimulación?"

explicacion: |
  Cuando el nivel de la sustancia es bajo, se elimina la inhibición sobre la glándula, permitiendo que se produzca más hormona para restaurar el nivel normal.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["hormonas", "estres", "adrenalina"]

variables:
  escenarios: [["Ante una situación de peligro inminente, el cuerpo libera una sustancia para preparar la respuesta de lucha o huida. ¿Cuál es esa sustancia?", "adrenalina"], ["Ante un susto repentino, el organismo aumenta la frecuencia cardíaca debido a la liberación de... ¿qué hormona?", "adrenalina"]]
  idx: uno_de([0, 1])

enunciado: "{escenarios[idx][0]}"

opciones_explicitas: ["insulina", "adrenalina", "tiroxina", "melatonina"]
respuesta: "adrenalina"
tipo: mc

explicacion: |
  Las glándulas suprarrenales liberan adrenalina (epinefrina) para preparar al cuerpo para una respuesta rápida ante el estrés.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["glucosa", "insulina", "pancreas"]

variables:
  escenarios: [["Después de una comida rica en carbohidratos, los niveles de azúcar en sangre aumentan. ¿Qué hormona secreta el páncreas para regular esto?", "insulina"], ["Cuando la glucosa en sangre sube tras ingerir alimentos, ¿cuál es la hormona responsable de transportarla a las células?", "insulina"]]
  idx: uno_de([0, 1])

enunciado: "{escenarios[idx][0]}"

opciones_explicitas: ["glucagón", "insulina", "tiroxina", "cortisol"]
respuesta: "insulina"
tipo: mc

explicacion: |
  La insulina es la hormona encargada de reducir los niveles de glucosa en sangre facilitando su entrada en las células.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["metabolismo", "tiroides", "tiroxina"]

variables:
  escenarios: [["Si una persona presenta un metabolismo extremadamente lento y se siente cansada, es probable que su glándula tiroides esté produciendo poca...", "tiroxina"], ["Una deficiencia en la producción de ___ por parte de la glándula tiroides puede ralentizar el metabolismo.", "tiroxina"]]
  idx: uno_de([0, 1])

enunciado: "{escenarios[idx][0]}"

respuestas_validas:
  - "tiroxina"
respuesta: "tiroxina"
tipo: completar

explicacion: |
  La glándula tiroides produce tiroxina, la cual es la principal responsable de regular la velocidad del metabolismo en el cuerpo.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["sueño", "melatonina", "pineal"]

variables:
  escenarios: [["Durante la noche, la glándula pineal secreta una hormona que regula los ciclos de sueño y vigilia llamada...", "melatonina"], ["¿Cuál es la hormona responsable de inducir el sueño y regular los ritmos circadianos?", "melatonina"]]
  idx: uno_de([0, 1])

enunciado: "{escenarios[idx][0]}"

opciones_explicitas: ["melatonina", "oxitocina", "estrógenos", "progesterona"]
respuesta: "melatonina"
tipo: mc

explicacion: |
  La melatonina es producida por la glándula pineal y su secreción aumenta en la oscuridad para regular el ciclo del sueño.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["glucagon", "pancreas", "glucosa"]

variables:
  escenarios: [["En un estado de ayuno prolongado, los niveles de glucosa en sangre descienden. ¿Qué hormona secreta el páncreas para compensar esto?", "glucagón"], ["Cuando el azúcar en sangre es muy baja, ¿cuál es la hormona que actúa para elevarla?", "glucagón"]]
  idx: uno_de([0, 1])

enunciado: "{escenarios[idx][0]}"

opciones_explicitas: ["insulina", "glucagón", "adrenalina", "cortisol"]
respuesta: "glucagón"
tipo: mc

explicacion: |
  El glucagón actúa de forma opuesta a la insulina; su función es elevar los niveles de glucosa en sangre cuando estos son bajos.
```

## Sección: sistema-nervioso-neurona-sinapsis (35 preguntas)

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["neurona", "mielina", "velocidad"]

variables:
  velocidad_sin_mielina: random(1, 5)
  factor_mielina: uno_de([20, 30, 50])
  velocidad_con_mielina: velocidad_sin_mielina * factor_mielina

respuesta: velocidad_con_mielina
tipo: input

enunciado: "Una neurona amielínica transmite a {velocidad_sin_mielina} m/s. Si la mielinización multiplica la velocidad de conducción por un factor de {factor_mielina}, ¿a qué velocidad (en m/s) transmite la neurona mielinizada?"

explicacion: |
  La vaina de mielina permite la conducción saltatoria, acelerando drásticamente la velocidad del impulso nervioso comparado con neuronas sin mielina.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["sinapsis", "neurotransmisor"]

variables:
  neurotransmisores: random(10, 100)
  porcentaje_liberacion: uno_de([10, 20, 50])
  resultado: floor(neurotransmisores * porcentaje_liberacion / 100)

respuesta: resultado
tipo: input

enunciado: "Si un terminal sináptico contiene {neurotransmisores} vesículas y se libera un {porcentaje_liberacion}% durante el estímulo, ¿cuántas vesículas se liberan aproximadamente?"

explicacion: |
  En la sinapsis química, la llegada del potencial de acción provoca la liberación de neurotransmisores desde las vesículas hacia la hendidura sináptica.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["soma", "cuerpo celular"]

respuesta: "soma"
tipo: completar

enunciado: "El cuerpo celular de la neurona, donde se encuentra el núcleo y se realizan las funciones metabólicas, se denomina ___."
respuestas_validas:
  - "soma"
  - "cuerpo celular"
  - "pericarion"

explicacion: |
  El soma o cuerpo celular contiene el núcleo y es el centro metabólico de la neurona.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["sinapsis", "conversión"]

respuesta: "eléctrica"
tipo: completar

enunciado: "En la sinapsis, el impulso ___ se convierte en señal química para cruzar la hendidura."
respuestas_validas:
  - "eléctrica"
  - "electrica"

explicacion: |
  El impulso eléctrico no puede saltar el espacio físico de la hendidura sináptica, por lo que se convierte en señal química mediante neurotransmisores.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["potencial", "refractario"]

variables:
  tiempo_refractario_absoluto: random(1, 2)
  tiempo_refractario_relativo: random(3, 5)
  total: tiempo_refractario_absoluto + tiempo_refractario_relativo

respuesta: total
tipo: input

enunciado: "Si el período refractario absoluto dura {tiempo_refractario_absoluto} ms y el relativo dura {tiempo_refractario_relativo} ms, ¿cuál es el tiempo total mínimo para que la neurona pueda generar otro potencial de acción?"

explicacion: |
  El período refractario total incluye el tiempo absoluto (cuando no se puede generar ningún impulso) y el relativo (cuando se requiere un estímulo mayor).
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["potencial", "membrana"]

variables:
  potencial_reposo: -70
  despolarizacion: random(20, 40)
  umbral: -55
  potencial_accion: 30
  valor_final: potencial_reposo + despolarizacion

respuesta: valor_final
tipo: input

enunciado: "Si el potencial de reposo es {potencial_reposo} mV y una excitación causa una despolarización de {despolarizacion} mV, ¿cuál es el nuevo potencial de membrana antes de alcanzar el umbral?"

explicacion: |
  La despolarización reduce la diferencia de carga negativa interna, acercando el potencial al umbral de disparo.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["sinapsis", "concentración"]

variables:
  moléculas: random(100, 500)
  volumen: random(10, 20)
  concentracion: floor(moléculas / volumen)

respuesta: concentracion
tipo: input

enunciado: "Si se liberan {moléculas} moléculas de neurotransmisor en una hendidura de volumen {volumen} µm³, ¿cuál es la concentración aproximada (moléculas/µm³)?"

explicacion: |
  La concentración de neurotransmisores en la hendidura determina la fuerza de la señal postsináptica.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["sinapsis", "espacio"]

respuesta: "hendidura sináptica"
tipo: completar

enunciado: "El pequeño espacio físico entre dos neuronas donde ocurre la transmisión química se llama ___."
respuestas_validas:
  - "hendidura sináptica"
  - "hendidura sinaptica"

explicacion: |
  La hendidura sináptica separa la neurona presináptica de la postsináptica, requiriendo la difusión de neurotransmisores.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["velocidad", "tiempo"]

variables:
  distancia: random(10, 100)
  velocidad: 50
  tiempo: distancia / velocidad

respuesta: redondear(tiempo, 2)
tipo: input

enunciado: "Si un impulso viaja {distancia} mm a una velocidad de conducción de {velocidad} mm/ms (equivalente a {velocidad} m/s), ¿cuánto tarda en llegar? (Resultado en ms, con dos decimales)"

explicacion: |
  El tiempo de transmisión depende de la distancia y la velocidad de conducción, que se ve afectada por la mielina.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["morfología", "relación"]

variables:
  largo_axon: random(10, 100)
  largo_dendrita: random(1, 5)
  ratio: floor(largo_axon / largo_dendrita)

respuesta: ratio
tipo: input

enunciado: "Si el axón mide {largo_axon} µm y las dendritas {largo_dendrita} µm, ¿cuántas veces es más largo el axón que las dendritas?"

explicacion: |
  Las neuronas suelen tener axones mucho más largos que las dendritas para transmitir señales a distancia.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["terminal", "liberación"]

respuesta: "terminal sináptica"
tipo: completar

enunciado: "Las estructuras al final del axón que contienen vesículas con neurotransmisores se llaman ___."
respuestas_validas:
  - "terminal sináptica"
  - "terminal sinaptica"
  - "botón terminal"

explicacion: |
  Las terminales sinápticas son los sitios de liberación de neurotransmisores hacia la hendidura.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["mielina", "eficiencia"]

variables:
  velocidad_mielinizada: random(50, 120)
  velocidad_amielinizada: random(1, 5)
  factor: floor(velocidad_mielinizada / velocidad_amielinizada)

respuesta: factor
tipo: input

enunciado: "Si la neurona mielinizada viaja a {velocidad_mielinizada} m/s y la amielínica a {velocidad_amielinizada} m/s, ¿cuántas veces más rápida es la primera?"

explicacion: |
  La mielina aumenta la velocidad de conducción entre 10 y 100 veces dependiendo del contexto fisiológico.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["mielina", "nodo"]

respuesta: "nodo de Ranvier"
tipo: completar

enunciado: "Los espacios sin mielina a lo largo del axón se denominan ___."
respuestas_validas:
  - "nodo de Ranvier"
  - "nodo de ranvier"

explicacion: |
  Los nodos de Ranvier son los puntos donde se regenera el potencial de acción en la conducción saltatoria.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["neurona", "unidad_funcional"]

variables:
  pregunta_clave: "unidad"

respuesta: "neurona"
tipo: completar

enunciado: "¿Cuál es la unidad básica de funcionamiento del sistema nervioso?"

explicacion: |
  La neurona es la célula especializada en transmitir impulsos nerviosos. No se divide para formar más neuronas, sino que se especializa en esta función.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["dendritas", "estructura"]

respuesta: "reciben"
tipo: completar

enunciado: "Las dendritas son prolongaciones cortas y ramificadas que ___ mensajes de otras neuronas."
respuestas_validas:
  - "reciben"
  - "captan"

explicacion: |
  Las dendritas tienen la función de recibir señales de otras neuronas y transmitirlas hacia el cuerpo celular.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["axon", "impulso"]

respuesta: "lleva"
tipo: completar

enunciado: "El axón es una prolongación larga que ___ el impulso nervioso desde el cuerpo celular hacia las terminales."
respuestas_validas:
  - "lleva"
  - "conduce"
  - "transmite"

explicacion: |
  El axón conduce el impulso eléctrico desde el soma (cuerpo celular) hacia las terminales sinápticas para enviarlo a otras células.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["mielina", "celulas_gliales"]

respuesta: "células gliales"
tipo: completar

enunciado: "La vaina de mielina está formada por células llamadas ___."
respuestas_validas:
  - "células gliales"
  - "celulas gliales"

explicacion: |
  Las células gliales (como los oligodendrocitos en el SNC y las células de Schwann en el SNP) forman la vaina de mielina alrededor de los axones.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["mielina", "patologia"]

respuesta: "lenta"
tipo: completar

enunciado: "Si la mielina se daña, la comunicación entre el cerebro y el cuerpo se vuelve ___ o falla."

explicacion: |
  El daño a la mielina (desmielinización) interrumpe o ralentiza la conducción del impulso nervioso, afectando la función motora y sensorial.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["sinapsis", "comunicacion"]

respuesta: "sinapsis"
tipo: completar

enunciado: "La ___ es el proceso mediante el cual la señal eléctrica se convierte en química y luego vuelve a ser eléctrica."

explicacion: |
  La sinapsis es el punto de comunicación entre dos neuronas (o entre una neurona y una efectora) donde se produce el relevo de la señal.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["hendidura", "espacio"]

respuesta: "hendidura sináptica"
tipo: completar

enunciado: "Existe un pequeño espacio físico entre las neuronas llamado ___."
respuestas_validas:
  - "hendidura sináptica"
  - "hendidura sinaptica"
  - "hendidura"

explicacion: |
  La hendidura sináptica es el espacio extracelular por donde difunden los neurotransmisores para llegar a la neurona postsináptica.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["señal", "conversion"]

respuesta: "química"
tipo: completar

enunciado: "En la sinapsis, la señal eléctrica se convierte en señal ___ y luego vuelve a ser eléctrica."
respuestas_validas:
  - "química"
  - "quimica"

explicacion: |
  El impulso eléctrico llega a la terminal, libera neurotransmisores (señal química) que cruzan la hendidura y generan un nuevo impulso eléctrico en la siguiente neurona.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["soma", "cuerpo_celular"]

respuesta: "núcleo"
tipo: completar

enunciado: "En el cuerpo celular (soma) se encuentra el ___ y se realizan funciones metabólicas."
respuestas_validas:
  - "núcleo"
  - "nucleo"

explicacion: |
  El soma contiene el núcleo con el material genético y es el centro metabólico de la neurona.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["ranvier", "impulso"]

respuesta: "nodo de Ranvier"
tipo: completar

enunciado: "El impulso 'salta' de un ___ a otro en los axones mielinizados."
respuestas_validas:
  - "nodo de Ranvier"
  - "nodo de ranvier"
  - "nodos de Ranvier"

explicacion: |
  Los nodos de Ranvier son los espacios sin mielina entre los segmentos de vaina, donde se regenera el potencial de acción.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["funcion", "comando"]

respuesta: "centro de comando"
tipo: completar

enunciado: "El sistema nervioso funciona como el ___ y la red de comunicación del cuerpo."

explicacion: |
  Su rol principal es integrar información, procesarla y generar respuestas coordinadas para mantener la homeostasis y la interacción con el entorno.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["neurotransmisor", "quimico"]

respuesta: "neurotransmisores"
tipo: completar

enunciado: "Los ___ son las moléculas que cruzan la hendidura sináptica."

explicacion: |
  Los neurotransmisores son mensajeros químicos liberados por la neurona presináptica que se unen a receptores en la postsináptica.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["direccion", "flujo"]

respuesta: "dendritas"
tipo: completar

enunciado: "La información llega a la neurona principalmente a través de las ___."

explicacion: |
  El flujo típico de información es: Dendritas -> Soma -> Axón -> Terminales sinápticas.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["mielina", "aislante"]

respuesta: "aislante"
tipo: completar

enunciado: "La vaina de mielina actúa como una capa ___ alrededor del axón."

explicacion: |
  La mielina es rica en lípidos y actúa como aislante eléctrico, impidiendo que la carga se escape y forzando el salto entre nodos.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["respuesta", "estimulo"]

respuesta: "respuesta"
tipo: completar

enunciado: "El sistema nervioso procesa datos para generar una ___ adecuada."
respuestas_validas:
  - "respuesta"
  - "reacción"
  - "reaccion"

explicacion: |
  La función integradora del sistema nervioso es generar una respuesta motora o secretora apropiada ante un estímulo.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["sinapsis", "tipos"]

respuesta: "química"
tipo: completar

enunciado: "La mayoría de las sinapsis en el sistema nervioso humano son de tipo ___."
respuestas_validas:
  - "química"
  - "quimica"

explicacion: |
  Aunque existen sinapsis eléctricas, la gran mayoría de la comunicación neuronal en humanos es química, mediada por neurotransmisores.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["funcion", "vital"]

respuesta: "mantener"
tipo: completar

enunciado: "El sistema nervioso ayuda a ___ funciones vitales como la respiración."

explicacion: |
  El sistema nervioso autónomo regula funciones involuntarias como la respiración, el ritmo cardíaco y la digestión.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["terminal", "emision"]

respuesta: "terminales"
tipo: completar

enunciado: "El axón termina en ___ para enviar el mensaje a otras células."
respuestas_validas:
  - "terminales"
  - "terminales sinápticas"
  - "terminales sinapticas"

explicacion: |
  Las terminales sinápticas (botones terminales) son las puntas del axón donde se almacenan y liberan los neurotransmisores.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["plasticidad", "sinapsis"]

respuesta: "sinapsis"
tipo: completar

enunciado: "Entender cómo trabajan juntas las neuronas y cómo se comunican a través de la ___ es clave para comprender el aprendizaje."

explicacion: |
  La plasticidad sináptica (cambio en la fuerza de la sinapsis) es la base celular del aprendizaje y la memoria.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["dendrita", "forma"]

respuesta: "dendritas"
tipo: completar

enunciado: "Las ___ son prolongaciones cortas y ramificadas."

explicacion: |
  La ramificación de las dendritas aumenta la superficie de contacto para recibir más señales de otras neuronas.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["impulso", "electrico"]

respuesta: "potencial de acción"
tipo: completar

enunciado: "El impulso nervioso es también conocido como ___."
respuestas_validas:
  - "potencial de acción"
  - "potencial de accion"

explicacion: |
  El potencial de acción es la onda de despolarización que viaja por el axón, permitiendo la transmisión rápida de la señal.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["receptor", "uniones"]

respuesta: "receptores"
tipo: completar

enunciado: "Los neurotransmisores se unen a ___ en la membrana de la siguiente neurona."

explicacion: |
  Los receptores específicos en la membrana postsináptica detectan los neurotransmisores y generan la respuesta celular correspondiente.
```

## Sección: transgenicos-bioetica (23 preguntas)

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["genetica", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "Un organismo transgénico tiene en su ADN un gen de otra especie, insertado artificialmente."

explicacion: |
  Correcto, mediante ingeniería genética.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["siglas"]

respuesta: verdadero
tipo: vf

enunciado: "La sigla OGM significa Organismo Genéticamente Modificado."

explicacion: |
  Correcto, es el término técnico general.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["genetica"]

respuesta: falso
tipo: vf

enunciado: "La transferencia de genes entre especies muy distintas ocurre naturalmente todo el tiempo, sin intervención humana."

explicacion: |
  Falso. Es extremadamente rara entre especies complejas muy distintas, aunque existen mecanismos naturales de transferencia horizontal en bacterias.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "transgenico"
tipo: completar
respuestas_validas:
  - "transgenico"

enunciado: "Un organismo con un gen de otra especie insertado se llama organismo ___."

explicacion: |
  Se llama transgénico.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["biotecnologia", "ejemplos"]

variables:
  datos: [["soja resistente a herbicidas", "tiene un gen bacteriano que la hace tolerante a un herbicida"], ["maiz Bt", "tiene un gen bacteriano que fabrica una proteina toxica para ciertos insectos"], ["arroz dorado", "modificado para producir betacaroteno, precursor de vitamina A"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["tiene un gen bacteriano que la hace tolerante a un herbicida", "tiene un gen bacteriano que fabrica una proteina toxica para ciertos insectos", "modificado para producir betacaroteno, precursor de vitamina A"]

enunciado: "¿Cuál es la característica principal de: {datos[idx][0]}?"

explicacion: |
  {datos[idx][0]}: {datos[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["maiz_bt"]

respuesta: verdadero
tipo: vf

enunciado: "El maíz Bt reduce la necesidad de fumigar con insecticida, porque el mismo maíz fabrica una toxina contra ciertas plagas."

explicacion: |
  Correcto.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["arroz_dorado"]

respuesta: verdadero
tipo: vf

enunciado: "El arroz dorado busca reducir la deficiencia de vitamina A en zonas donde el arroz es alimento base."

explicacion: |
  Correcto.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["argumentos_favor"]

respuesta: verdadero
tipo: vf

enunciado: "Un argumento a favor de los transgénicos es el mayor rendimiento de cultivo, con menos pérdida por plagas o malezas."

explicacion: |
  Correcto, ese es uno de los argumentos técnico-económicos.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["argumentos_favor"]

respuesta: verdadero
tipo: vf

enunciado: "El maíz Bt es un ejemplo de menos uso de insecticidas gracias a la modificación genética."

explicacion: |
  Correcto.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["argumentos_favor"]

respuesta: verdadero
tipo: vf

enunciado: "El arroz dorado es un ejemplo de fortificar alimentos contra una deficiencia nutricional específica."

explicacion: |
  Correcto.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["debate"]

respuesta: falso
tipo: vf

enunciado: "No existe ningún argumento a favor de los transgénicos, sólo argumentos en contra."

explicacion: |
  Falso, hay argumentos de ambos lados.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["argumentos_contra"]

respuesta: verdadero
tipo: vf

enunciado: "Una preocupación sobre los transgénicos es el posible impacto en la biodiversidad (cruzamiento con especies silvestres)."

explicacion: |
  Correcto, es una preocupación ecológica real.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["argumentos_contra"]

respuesta: verdadero
tipo: vf

enunciado: "Otra preocupación es la concentración del mercado de semillas en pocas empresas."

explicacion: |
  Correcto, por patentes y propiedad intelectual.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["argumentos_contra"]

respuesta: verdadero
tipo: vf

enunciado: "Hay incertidumbre sobre efectos de largo plazo de algunos transgénicos, todavía en discusión científica."

explicacion: |
  Correcto, requiere monitoreo continuo.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["debate"]

respuesta: falso
tipo: vf

enunciado: "Todos los científicos están completamente de acuerdo en todos los aspectos de los transgénicos, sin ningún debate."

explicacion: |
  Falso, hay debate científico y social real sobre regulación e impactos.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La pregunta 'se puede hacer un transgénico' técnicamente ya está resuelta hace décadas."

explicacion: |
  Correcto, la capacidad técnica es una realidad consolidada.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["bioetica"]

respuesta: verdadero
tipo: vf

enunciado: "La pregunta bioética es distinta de la técnica: 'se debería, y bajo qué condiciones'."

explicacion: |
  Correcto, va del "poder" técnico al "deber" moral.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["etica"]

respuesta: "utilitarismo"
tipo: mc
opciones_explicitas: ["utilitarismo", "deontologia", "etica de la virtud", "contractualismo"]

enunciado: "¿Qué corriente ética pregunta si el resultado neto es positivo?"

explicacion: |
  El utilitarismo evalúa el resultado neto de bienestar.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "avanzado"
  tags: ["etica"]

respuesta: verdadero
tipo: vf

enunciado: "La deontología pregunta si hay un deber o derecho que se viola, independientemente del resultado."

explicacion: |
  Correcto, se centra en la acción, no en el resultado.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["etica"]

variables:
  escenario: [["utilitarismo", "el resultado neto es positivo?"], ["deontologia", "hay un deber o derecho que se viola?"], ["etica de la virtud", "que haria una persona virtuosa?"], ["contractualismo", "a que acordarian personas racionales en un contrato justo?"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["el resultado neto es positivo?", "hay un deber o derecho que se viola?", "que haria una persona virtuosa?", "a que acordarian personas racionales en un contrato justo?"]

enunciado: "¿Cuál es la pregunta central de la corriente {escenario[idx][0]}?"

explicacion: |
  {escenario[idx][0]} pregunta: {escenario[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["genetica"]

respuesta: verdadero
tipo: vf

enunciado: "Los transgénicos son la aplicación práctica del ADN recombinante y la tecnología CRISPR."

explicacion: |
  Correcto — ver ../biotecnologia-pcr-crispr/.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["bioetica"]

respuesta: falso
tipo: vf

enunciado: "El debate bioético sobre transgénicos se resuelve completamente con datos técnicos, sin necesitar ninguna corriente filosófica."

explicacion: |
  Falso. Involucra juicios de valor, no sólo ciencia.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["bioetica"]

respuesta: verdadero
tipo: vf

enunciado: "Distintas personas pueden llegar a distintas conclusiones sobre los transgénicos según qué corriente ética prioricen."

explicacion: |
  Correcto, distintos criterios de "bueno" o "justo" dan conclusiones distintas.
```

