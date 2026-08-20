# Biología — Especiación (cuestionario, 25 preguntas VBLang)

> Tema: `BN`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: varias preguntas `completar`
> (con blank `___`) etiquetadas como `tipo: vf` — reclasificadas;
> un bloque con `variables:` declarada dos veces dentro del mismo
> bloque (YAML inválido/ambiguo) — fusionada en una sola; dos
> preguntas que interpolaban `{mecanismo}` directo en el `enunciado`
> revelando la respuesta, con `respuestas_validas` pero sin
> `respuesta:` — reescritas como `completar` con blank real y
> `respuesta:` agregado; una pregunta con dos blancos en el
> `enunciado` pero una sola `respuesta` (y en el orden equivocado) —
> recortada a un solo blanco; `tipo: vf` con `opciones_explicitas`
> explícitas (`["Verdadero","Falso"]`) — innecesario, normalizado a
> `respuesta: verdadero` sin opciones.

---

### 1 — Concepto de especie: descendencia fértil

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

### 2 — Definición de especiación

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

### 3 — El concepto de aislamiento

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

### 4 — Resultado de la especiación

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

### 5 — Criterio de éxito reproductivo

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

### 6 — El concepto de aislamiento (alopátrica)

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

### 7 — Flujo génico y especiación

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

### 8 — Tipos de aislamiento reproductivo

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

### 9 — Consecuencia del aislamiento

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

### 10 — Aislamiento por hábitat

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

### 11 — El concepto de especiación

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

### 12 — Aislamiento geográfico

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

### 13 — El caso de las ardillas del Gran Cañón

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

### 14 — Aislamiento geográfico vs. reproductivo

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

### 15 — Consecuencias de la especiación alopátrica

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

### 16 — Concepto de especiación simpátrica

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

### 17 — Aislamiento temporal

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

### 18 — Diferenciación por nicho ecológico

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

### 19 — Aislamiento etológico

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

### 20 — Factores de especiación simpátrica

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

### 21 — El criterio de éxito reproductivo, otra vez

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

### 22 — Barreras al flujo génico

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

### 23 — Selección natural como motor de divergencia

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

### 24 — Consecuencias de la deriva genética

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

### 25 — El fin del flujo génico

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
