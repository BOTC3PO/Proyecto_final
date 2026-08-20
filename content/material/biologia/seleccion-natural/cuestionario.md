# Biología — Selección natural: mecanismo y evidencias (cuestionario, 25 preguntas VBLang)

> Tema: `BL`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: una interpolación `{uno_de(...)}`
> llamada inline dentro del `enunciado` (no permitido, debe declararse
> en `variables:`); `tipo: "vf"` mal aplicado a 5 preguntas que en
> realidad eran `completar` (usaban `respuestas_validas` y un blank
> `___`, no una afirmación V/F) — reclasificadas; `respuestas_validas`
> con el mismo valor duplicado dos veces; un `tipo: ordenar` con 4
> opciones en `opciones_explicitas` pero sólo 3 en la respuesta —
> recortado a 3; una `variables:` sorteando una pareja
> [evento, etiqueta] donde la etiqueta no encajaba como texto de blank
> — simplificada a respuesta fija; `tipo: "vf"` y `respuesta: "falso"`
> entrecomillados (deben ir sin comillas) — normalizado.

---

### 1 — Concepto de selección natural

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "darwinismo"]

respuesta: "proceso mediante el cual los organismos mejor adaptados a su entorno tienen mayores probabilidades de sobrevivir y reproducirse"
tipo: completar
respuestas_validas:
  - "proceso mediante el cual los organismos mejor adaptados a su entorno tienen mayores probabilidades de sobrevivir y reproducirse"

enunciado: "La selección natural es el ___ que permite la evolución de las poblaciones."

explicacion: |
  La selección natural no es un proceso consciente, sino un mecanismo donde las variaciones que favorecen la supervivencia se vuelven más comunes en las siguientes generaciones.
```

### 2 — El ingrediente de la variación

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["variacion", "herencia"]

respuesta: "variación heredable"
tipo: completar
respuestas_validas:
  - "variación heredable"
  - "variación genética"

enunciado: "Para que la selección natural actúe, debe existir una ___ entre los individuos de una misma población, la cual debe poder transmitirse a la descendencia."

explicacion: |
  Si los rasgos adquiridos durante la vida (como el músculo de un atleta) no son heredables, no pueden ser seleccionados por la evolución.
```

### 3 — La presión ambiental

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["presion_ambiental", "adaptacion"]

variables:
  escenario: uno_de([["un cambio brusco en la temperatura del clima", "el calor extremo"], ["la presencia de un nuevo depredador en el bosque", "la depredación"], ["la escasez de un tipo específico de alimento", "la falta de alimento"]])

respuesta: "presión ambiental"
tipo: completar
respuestas_validas:
  - "presión ambiental"

enunciado: "Cuando ocurre {escenario[0]}, se genera una ___ que actúa como filtro sobre las características de los individuos."

explicacion: |
  La presión ambiental es el factor externo (clima, depredadores, comida) que determina qué rasgos son ventajosos y cuáles no.
```

### 4 — Reproducción diferencial

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["reproduccion", "fitness"]

respuesta: "reproducción diferencial"
tipo: completar
respuestas_validas:
  - "reproducción diferencial"

enunciado: "El éxito de la selección natural depende de la ___: la capacidad de ciertos individuos para dejar más descendencia que otros."

explicacion: |
  No basta con sobrevivir; el objetivo biológico es pasar los genes a la siguiente generación. Si un individuo vive mucho pero no tiene hijos, su ventaja evolutiva es nula.
```

### 5 — Los tres pilares del mecanismo

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "avanzado"
  tags: ["mecanismo", "resumen"]

respuesta: verdadero
tipo: vf

enunciado: "El mecanismo de la selección natural requiere de tres condiciones fundamentales: variación heredable, presión ambiental y reproducción diferencial."

explicacion: |
  Sin estos tres elementos, el proceso evolutivo por selección natural no puede ocurrir. La combinación de estos factores es lo que impulsa la adaptación.
```

### 6 — El origen de la variación

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "variacion"]

respuesta: falso
tipo: vf

enunciado: "¿La selección natural es el mecanismo que crea nuevas variaciones genéticas en una población para que los individuos se adapten?"

explicacion: |
  Falso. La selección natural actúa sobre la variación ya existente (causada por mutaciones y recombinación). La selección no "crea" rasgos nuevos, solo "filtra" los que ya están presentes.
```

### 7 — La intención del individuo

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "adaptacion"]

respuesta: falso
tipo: vf

enunciado: "¿Los individuos cambian sus características físicas de forma voluntaria o por esfuerzo para adaptarse mejor a su entorno?"

explicacion: |
  Falso. La adaptación no es un proceso consciente ni voluntario. Los individuos nacen con ciertas características; aquellos que tienen rasgos favorables para su ambiente tienen más éxito reproductivo, pero no "deciden" cambiar.
```

### 8 — El concepto de "el más fuerte"

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["evolucion", "fitness"]

respuesta: falso
tipo: vf

enunciado: "¿En el contexto de la selección natural, ser 'el más apto' significa necesariamente ser el individuo más fuerte y agresivo del grupo?"

explicacion: |
  Falso. El concepto biológico de "fitness" o aptitud se refiere a la capacidad de un organismo para sobrevivir y, fundamentalmente, dejar descendencia con éxito. A veces, ser el más pequeño o el más discreto es lo que permite sobrevivir y reproducirse.
```

### 9 — El objetivo de la evolución

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["evolucion", "teleologia"]

respuesta: falso
tipo: vf

enunciado: "¿La selección natural tiene como objetivo final alcanzar la perfección biológica de una especie?"

explicacion: |
  Falso. La evolución no tiene un objetivo ni busca la "perfección". Es un proceso reactivo a las condiciones ambientales actuales. Lo que es "bueno" hoy puede dejar de serlo si el clima o los depredadores cambian mañana.
```

### 10 — La causa de la supervivencia

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "herencia"]

respuesta: falso
tipo: vf

enunciado: "¿La selección natural actúa directamente sobre los genes de un individuo para modificarlos durante su vida?"

explicacion: |
  Falso. La selección natural actúa sobre el fenotipo (la expresión de los rasgos) de los individuos. Los cambios en la frecuencia de los genes ocurren a través de las generaciones, no mediante la modificación de los genes de un individuo que ya ha nacido.
```

### 11 — Adaptación del pico

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["darwin", "pinzones", "evolucion"]

opciones_explicitas: ["picos más grandes y fuertes", "picos más largos y finos", "picos más cortos y planos", "picos de colores brillantes"]
respuesta: "picos más grandes y fuertes"
tipo: mc

enunciado: "En una isla donde la principal fuente de alimento son las semillas grandes y duras, ¿qué característica de los pinzones presentará una ventaja adaptativa para la supervivencia?"

explicacion: |
  Los individuos con picos más grandes y fuertes pueden romper las semillas duras, obteniendo energía de una fuente que otros no pueden aprovechar. Esto aumenta su probabilidad de sobrevivir y reproducirse.
```

### 12 — El proceso evolutivo, en orden

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["mecanismos", "evolucion"]

opciones_explicitas: ["Variabilidad", "Selección natural", "Herencia"]
respuesta_orden: ["Variabilidad", "Selección natural", "Herencia"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que permiten que la selección natural actúe sobre una población de pinzones para que aparezca una nueva adaptación:"

explicacion: |
  Primero debe existir variabilidad (diferentes picos), luego la selección natural actúa sobre esa variabilidad según el ambiente, y finalmente la herencia permite que los rasgos exitosos pasen a la siguiente generación.
```

### 13 — El papel del ambiente

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["ambiente", "supervivencia"]

opciones_explicitas: ["determina", "causa", "crea", "provoca"]
respuesta: "determina"
tipo: mc

enunciado: "El tipo de alimento disponible en una isla de Galápagos ___ la presión selectiva sobre la forma del pico de los pinzones."

explicacion: |
  El ambiente no "crea" la mutación, sino que "determina" qué rasgos existentes son ventajosos o desfavorables para la supervivencia en ese contexto específico.
```

### 14 — Concepto de adaptación

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["terminologia", "adaptacion"]

respuesta: "adaptación"
tipo: completar
respuestas_validas:
  - "adaptación"
  - "adaptacion"

enunciado: "Cuando un grupo de pinzones desarrolla un pico especializado para un tipo de semilla predominante en su isla, se dice que la población ha desarrollado una ___."

explicacion: |
  Una adaptación es un rasgo heredado que aumenta la capacidad de un organismo para sobrevivir y reproducirse en un ambiente determinado.
```

### 15 — Supervivencia del más apto

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "avanzado"
  tags: ["conceptos_clave", "reproduccion"]

variables:
  caso: uno_de([["picos finos", "semillas pequeñas"], ["picos gruesos", "semillas grandes"]])

opciones_explicitas: ["falla", "éxito", "mutación", "estancamiento"]
respuesta: "éxito"
tipo: mc

enunciado: "Si en una isla predominan las {caso[1]}, los pinzones con picos tipo {caso[0]} tendrán un ___ reproductivo mayor debido a la disponibilidad de alimento."

explicacion: |
  El éxito reproductivo (fitness) se define por la capacidad de un individuo para sobrevivir y dejar descendencia con las características ventajosas en su entorno.
```

### 16 — Variación fenotípica antes de la contaminación

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "adaptacion", "biston_betularia"]

respuesta: "claro"
tipo: completar
respuestas_validas:
  - "claro"

enunciado: "En las poblaciones de la polilla Biston betularia antes de la Revolución Industrial, la mayoría de los individuos presentaban un color ___ debido a que los troncos de los árboles estaban cubiertos de líquenes claros."

explicacion: |
  Antes de la industrialización, los líquenes claros en los árboles proporcionaban un camuflaje ideal para las polillas de color claro, permitiéndoles evitar a los depredadores.
```

### 17 — Presión de selección en la Revolución Industrial

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["seleccion_natural", "camuflaje", "biston_betularia"]

opciones_explicitas: ["El aumento de la temperatura", "La mayor visibilidad de las polillas claras ante los depredadores", "La desaparición de los depredadores", "La mutación espontánea por el hollín"]
respuesta: "La mayor visibilidad de las polillas claras ante los depredadores"
tipo: mc

enunciado: "Durante la Revolución Industrial, la contaminación por hollín oscureció los troncos de los árboles. ¿Cuál fue el principal factor de cambio en la población de polillas?"

explicacion: |
  El hollín eliminó el camuflaje de las polillas claras, haciendo que los pájaros las detectaran y devoraran con mayor facilidad. Esto es un ejemplo de presión de selección ambiental.
```

### 18 — Adaptación y supervivencia en ambiente contaminado

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["supervivencia", "reproduccion", "biston_betularia"]

respuesta: "oscuro"
tipo: completar
respuestas_validas:
  - "oscuro"

enunciado: "En un ambiente con troncos oscurecidos por el hollín, las polillas de color ___ tienen una mayor probabilidad de sobrevivir y reproducirse."

explicacion: |
  La supervivencia diferencial es clave: los individuos con el fenotipo que mejor se camufla en el nuevo ambiente tienen más éxito reproductivo.
```

### 19 — Evolución poblacional

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "avanzado"
  tags: ["frecuencia_alelica", "evolucion"]

opciones_explicitas: ["Disminuye", "Se mantiene constante", "Aumenta", "Desaparece"]
respuesta: "Aumenta"
tipo: mc

enunciado: "Si la supervivencia de las polillas oscuras aumenta debido al camuflaje en árboles contaminados, ¿qué sucede con la frecuencia de sus genes en la siguiente generación?"

explicacion: |
  La evolución se define como el cambio en las frecuencias alélicas de una población a lo largo del tiempo. Al sobrevivir más, las polillas oscuras pasan más genes a su descendencia.
```

### 20 — Sobre qué actúa la selección natural

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: "fenotipos"
tipo: completar
respuestas_validas:
  - "fenotipos"
  - "fenotipo"

enunciado: "La selección natural actúa sobre los ___ de los individuos, permitiendo que aquellos con rasgos ventajosos sobrevivan mejor en un ambiente determinado."

explicacion: |
  La selección natural no actúa directamente sobre los genes, sino sobre el fenotipo (la expresión física de los rasgos), que es lo que los depredadores ven y lo que determina la supervivencia.
```

### 21 — Concepto de resistencia a antibióticos

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "antibioticos"]

respuesta: "selección"
tipo: completar
respuestas_validas:
  - "selección"
  - "seleccion"

enunciado: "La resistencia a los antibióticos es un ejemplo de ___ natural, donde el fármaco actúa como un factor de presión ambiental."

explicacion: |
  La selección natural no crea la resistencia, sino que actúa sobre variaciones preexistentes. Los individuos que ya poseen mutaciones que les permiten sobrevivir al antibiótico son los que logran reproducirse, transmitiendo esa característica a la siguiente generación.
```

### 22 — El rol de las mutaciones previas

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["mutacion", "genetica"]

respuesta: "mutación previa"
tipo: completar
respuestas_validas:
  - "mutación previa"
  - "mutacion previa"

enunciado: "En un entorno con presencia de antibióticos, la supervivencia de una población bacteriana depende de una ___ que ocurrió antes del contacto con el fármaco."

pasos:
  - "Identificar si la mutación ocurre por necesidad o por azar."
  - "Relacionar la mutación con la capacidad de supervivencia en el entorno actual."

explicacion: |
  Es un error común pensar que las bacterias "se adaptan" para sobrevivir al antibiótico. La mutación es un evento aleatorio que ocurre antes de la presión selectiva. El antibiótico solo "selecciona" a los que ya eran resistentes.
```

### 23 — Dinámica poblacional bajo presión selectiva

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["poblacion", "supervivencia"]

respuesta: "aumenta"
tipo: completar
respuestas_validas:
  - "aumenta"

enunciado: "Si un pesticida elimina a todos los insectos sensibles pero no a los que poseen una mutación de resistencia, la frecuencia de genes de resistencia en la siguiente generación ___."

explicacion: |
  Al morir los individuos no resistentes, los sobrevivientes (que portan el gen de resistencia) son los únicos que dejan descendencia. Por lo tanto, la proporción de individuos con esa característica aumenta en la población.
```

### 24 — El antibiótico como agente de selección

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["pesticidas", "presion_selectiva"]

respuesta: "agente"
tipo: completar
respuestas_validas:
  - "agente"
  - "causa"

enunciado: "En el proceso de evolución por selección natural, el antibiótico actúa como un ___ de selección que determina qué individuos logran reproducirse."

explicacion: |
  El antibiótico no es la causa de la mutación, sino el agente que ejerce la presión ambiental, filtrando a los individuos menos aptos para ese entorno específico.
```

### 25 — Error conceptual común

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "avanzado"
  tags: ["mitos_evolutivos", "resistencia"]

respuesta: falso
tipo: vf

enunciado: "El uso excesivo de antibióticos provoca que las bacterias muten específicamente para volverse resistentes."

explicacion: |
  Es falso. Las mutaciones son eventos aleatorios. El antibiótico no "induce" la mutación hacia la resistencia; simplemente elimina a los que no la tienen, permitiendo que la población cambie su composición genética hacia la resistencia.
```
