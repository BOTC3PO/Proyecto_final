# Biología — Nicho ecológico (cuestionario, 25 preguntas VBLang)

> Tema: `BQ`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: varias preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`); una
> pregunta con `variables:`/`uno_de` cuya `respuesta:` no dependía del
> escenario sorteado (quedaba fija sin importar qué opción salía) y
> además tenía **notas internas para el motor filtradas dentro de
> `explicacion:`** — reescrita con respuesta indexada correctamente y
> sin las notas; `tipo: vf` con `respuestas_validas` conteniendo
> `["Verdadero","Falso"]` u oraciones completas en vez de
> `verdadero`/`falso` — normalizado; dos preguntas `tipo: vf` que en
> realidad comparaban 4 frases largas como si fueran opciones de
> `vf` — reclasificadas a `completar` con una sola respuesta correcta.

---

### 1 — El concepto de nicho

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["conceptos_clave", "ecologia"]

tipo: completar

enunciado: "El conjunto de condiciones ambientales y recursos que utiliza una especie para sobrevivir y reproducirse se denomina ___."

respuestas_validas:
  - "nicho ecológico"
  - "nicho ecologico"
respuesta: "nicho ecológico"

explicacion: |
  El nicho ecológico no es un lugar, sino la "profesión" o el rol que desempeña una especie en su ecosistema (qué come, a qué hora sale, etc.).
```

### 2 — Hábitat vs. nicho

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["diferencias"]

tipo: completar

enunciado: "Si el hábitat es la 'dirección' de un organismo, el nicho ecológico es su ___."

respuestas_validas:
  - "profesión"
  - "profesion"
respuesta: "profesión"

explicacion: |
  Es una analogía común: el hábitat es el lugar físico donde vive (la casa), mientras que el nicho es su función o modo de vida (su trabajo).
```

### 3 — Competencia por recursos

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["competencia", "recursos"]

tipo: completar

enunciado: "Cuando dos especies tienen exactamente el mismo nicho ecológico en un mismo hábitat, ocurre una ___ que suele llevar a la exclusión de una de ellas."

respuestas_validas:
  - "competencia"
respuesta: "competencia"

explicacion: |
  El principio de exclusión competitiva establece que dos especies no pueden ocupar el mismo nicho de forma indefinida; una terminará desplazando a la otra.
```

### 4 — Factores del nicho

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["factores_abioticos"]

tipo: completar

enunciado: "El nicho ecológico incluye tanto factores bióticos (como la alimentación) como factores ___ (como la temperatura o la humedad)."

respuestas_validas:
  - "abióticos"
  - "abioticos"
respuesta: "abióticos"

explicacion: |
  El nicho es multidimensional: incluye las interacciones con otros seres vivos (bióticos) y las condiciones físicas del entorno (abióticos).
```

### 5 — Ejemplo de nicho: el búho

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["ejemplos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un león en la sabana africana", "depredador de grandes herbívoros"], ["un búho en un bosque", "depredador nocturno de pequeños roedores"]]

opciones_explicitas: ["depredador de grandes herbívoros", "depredador nocturno de pequeños roedores"]
respuesta: escenarios[escenario_idx][1]
tipo: mc

enunciado: "En el caso de {escenarios[escenario_idx][0]}, ¿cuál de estas opciones describe mejor su nicho ecológico?"

explicacion: |
  El nicho ecológico combina qué come una especie, cuándo está activa y qué rol cumple en la cadena trófica — no sólo "dónde vive".
```

### 6 — Concepto de nicho (síntesis)

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "ecologia"]

tipo: mc
opciones_explicitas: ["El lugar físico donde vive una especie", "La función o rol que desempeña una especie en su ecosistema", "El número total de individuos de una población", "La cantidad de comida disponible en un ambiente"]
respuesta: "La función o rol que desempeña una especie en su ecosistema"

enunciado: "En ecología, el término 'nicho ecológico' se refiere a: ___"

explicacion: |
  El nicho ecológico no es solo el lugar (eso es el hábitat), sino el conjunto de condiciones y recursos que permiten que una especie sobreviva y se reproduzca (su "profesión" en el ecosistema).
```

### 7 — Competencia por nichos idénticos

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["competencia", "recursos"]

tipo: vf
respuesta: verdadero

enunciado: "Si dos especies tienen nichos ecológicos idénticos en un mismo ambiente, la competencia por los recursos será intensa y eventualmente una de ellas será desplazada."

explicacion: |
  Según el principio de exclusión competitiva, dos especies no pueden ocupar exactamente el mismo nicho en un mismo hábitat por tiempo indefinido; una terminará desplazando a la otra o ambas deberán evolucionar para diferenciar sus nichos.
```

### 8 — Variación de la capacidad de carga por especie

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "avanzado"
  tags: ["capacidad_de_carga", "recursos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["leones", "carnívoros", "grandes"], ["insectos", "herbívoros", "pequeños"]]

tipo: mc
opciones_explicitas: ["Porque todas las especies consumen exactamente la misma cantidad de biomasa", "Porque cada especie utiliza los recursos de manera distinta, afectando la capacidad de soporte", "Porque el ambiente siempre tiene recursos infinitos para todos", "Porque la capacidad de carga solo depende del clima y no de la especie"]
respuesta: "Porque cada especie utiliza los recursos de manera distinta, afectando la capacidad de soporte"

enunciado: "Considerando que los {datos[escenario_idx][0]} tienen un nicho de tipo {datos[escenario_idx][2]}, ¿por qué la capacidad de carga varía entre especies en un mismo ambiente?"

explicacion: |
  La capacidad de carga es el número máximo de individuos que un ambiente puede sostener. Como cada especie tiene un nicho diferente (usa distintos recursos, a diferentes ritmos y de distintas formas), el impacto sobre el ambiente y el límite de población varía para cada una.
```

### 9 — Nicho vs. hábitat

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["diferenciacion", "conceptos"]

tipo: mc
opciones_explicitas: ["El hábitat es la función y el nicho es el lugar", "El hábitat es el lugar físico y el nicho es la función/rol", "Son términos sinónimos en ecología", "El nicho se refiere al clima y el hábitat a la dieta"]
respuesta: "El hábitat es el lugar físico y el nicho es la función/rol"

enunciado: "Diferencia correctamente entre hábitat y nicho: ___"

explicacion: |
  Un ejemplo clásico: el hábitat es el bosque (donde vive el oso), mientras que el nicho es su dieta, sus hábitos de actividad (diurno/nocturno) y su papel en la cadena trófica.
```

### 10 — Especialización de nicho

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["especializacion", "supervivencia"]

tipo: vf
respuesta: verdadero

enunciado: "La especialización de un nicho (por ejemplo, un ave que sólo come un tipo de semilla) reduce la competencia directa con otras especies pero hace a la especie más vulnerable si ese recurso específico desaparece."

explicacion: |
  Es verdadero. Al especializar el nicho, la especie evita la competencia (lo cual es una ventaja), pero pierde la flexibilidad de usar otros recursos si su nicho particular se ve alterado.
```

### 11 — El principio de exclusión (Regla de Gause)

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["ecologia", "competencia"]

enunciado: "Según el principio de exclusión competitiva, si dos especies compiten por exactamente el mismo recurso limitado, una de ellas será desplazada o se extinguirá. Este proceso se conoce como la ___ de Gause."

respuestas_validas:
  - "regla"
respuesta: "regla"
tipo: completar

explicacion: |
  El principio de exclusión competitiva, también conocido como la Regla de Gause, establece que dos especies con nichos ecológicos idénticos no pueden coexistir en un entorno estable.
```

### 12 — Competencia por recursos (escenario)

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["competencia", "nicho"]

variables:
  escenario: uno_de([["especie A", "especie B"], ["leones", "hienas"], ["plantas A", "plantas B"]])

enunciado: "En un ecosistema, la {escenario[0]} y la {escenario[1]} compiten por la misma fuente de alimento y el mismo espacio de caza. Si la {escenario[0]} es más eficiente capturando presas, a largo plazo la {escenario[1]} sufrirá una ___ de su nicho o desaparecerá del área."

respuestas_validas:
  - "exclusión"
  - "exclusion"
respuesta: "exclusión"
tipo: completar

explicacion: |
  Cuando la competencia es intensa y los recursos son limitados, la especie con la ventaja competitiva termina excluyendo a la otra de su nicho ecológico.
```

### 13 — Coexistencia y partición de nicho

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["coexistencia", "particion"]

enunciado: "Para evitar la exclusión competitiva y permitir la coexistencia de especies similares, las poblaciones suelen recurrir a la ___ de nicho, donde utilizan diferentes partes del recurso o diferentes horarios de actividad."

respuestas_validas:
  - "partición"
  - "particion"
respuesta: "partición"
tipo: completar

explicacion: |
  La partición de nicho permite que especies con necesidades similares coexistan al especializarse en diferentes aspectos de su entorno (por ejemplo, diferentes alturas en un árbol o diferentes horas de alimentación).
```

### 14 — El concepto de nicho (repaso)

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["definicion", "nicho"]

enunciado: "El nicho ecológico no es sólo el lugar donde vive una especie (hábitat), sino también la ___ de funciones y recursos que desempeña en ese ecosistema."

respuestas_validas:
  - "función"
  - "funcion"
respuesta: "función"
tipo: completar

explicacion: |
  Mientras que el hábitat es la "dirección" de una especie, el nicho ecológico es su "profesión" o el rol que cumple en la comunidad.
```

### 15 — Factores de exclusión

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "avanzado"
  tags: ["competencia", "evolucion"]

enunciado: "Si dos especies compiten por el mismo nicho, la especie que logre obtener más energía con menos gasto metabólico tendrá una ventaja ___ que le permitirá dominar el recurso."

respuestas_validas:
  - "adaptativa"
respuesta: "adaptativa"
tipo: completar

explicacion: |
  La ventaja adaptativa permite que la especie dominante se reproduzca más y mantenga su población, mientras que la otra especie disminuye su fitness hasta ser excluida.
```

### 16 — Definición de nicho fundamental

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["ecologia", "nicho_fundamental"]

tipo: mc
opciones_explicitas: ["El rango de condiciones ambientales y recursos que una especie puede utilizar sin la presencia de competidores", "El conjunto de condiciones que una especie ocupa debido a la presencia de depredadores", "La suma de todos los recursos que una especie consume en un ecosistema", "El lugar físico donde vive una especie"]

respuesta: "El rango de condiciones ambientales y recursos que una especie puede utilizar sin la presencia de competidores"

enunciado: "El concepto de nicho fundamental se refiere a..."

explicacion: |
  El nicho fundamental representa el potencial máximo de una especie, es decir, todas las condiciones ambientales y recursos que podría aprovechar si no tuviera competencia ni depredación.
```

### 17 — Nicho realizado

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["nicho_fundamental", "nicho_realizado"]

tipo: completar
respuestas_validas:
  - "nicho realizado"
respuesta: "nicho realizado"

enunciado: "Cuando una especie se enfrenta a la competencia con otras especies por el mismo recurso, el espacio de recursos que efectivamente logra utilizar se denomina ___."

explicacion: |
  La presencia de competencia interespecífica restringe el uso de recursos, reduciendo el nicho fundamental al nicho realizado.
```

### 18 — El efecto de la competencia sobre el nicho

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["competencia", "nicho_realizado"]

tipo: mc
opciones_explicitas: ["El nicho realizado es siempre igual al nicho fundamental", "El nicho realizado suele ser más pequeño que el nicho fundamental", "El nicho fundamental es más pequeño que el nicho realizado", "No existe relación entre ambos conceptos"]

respuesta: "El nicho realizado suele ser más pequeño que el nicho fundamental"

enunciado: "En un ecosistema con alta competencia por alimento, se espera que..."

explicacion: |
  La competencia actúa como una limitación que impide que la especie ocupe todo su nicho potencial (fundamental), obligándola a adaptarse a un nicho más restringido (realizado).
```

### 19 — Relación de inclusión entre nichos

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "avanzado"
  tags: ["relacion_nichos"]

tipo: completar
respuestas_validas:
  - "un subconjunto"
respuesta: "un subconjunto"

enunciado: "Desde un punto de vista teórico, el nicho realizado es ___ del nicho fundamental."

explicacion: |
  El nicho realizado está contenido dentro de los límites del nicho fundamental, pero con menos dimensiones de recursos efectivamente aprovechados.
```

### 20 — Escenario de competencia por semillas

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["competencia", "nicho_realizado"]

tipo: mc
opciones_explicitas: ["La especie se extingue", "El nicho realizado se expande", "El nicho realizado se contrae", "El nicho fundamental desaparece"]

respuesta: "El nicho realizado se contrae"

enunciado: "Si una especie de aves tiene un nicho fundamental que incluye semillas grandes y pequeñas, pero una especie competidora consume todas las semillas pequeñas, el nicho realizado de la primera especie será..."

explicacion: |
  La competencia por las semillas pequeñas restringe la dieta de la primera especie, haciendo que su nicho realizado se limite principalmente a las semillas grandes.
```

### 21 — Coexistencia por horario de actividad

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["ecologia", "competencia", "nicho"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El búho y el ratón", "nocturno", "diurno"], ["El águila y el halcón", "diurno", "nocturno"]]

opciones_explicitas: ["nocturno", "diurno"]

respuesta: escenarios[escenario_idx][1]
tipo: mc

enunciado: "En un mismo bosque, un {escenarios[escenario_idx][0]} es predominantemente ___, mientras que su competidor potencial es {escenarios[escenario_idx][2]}. Esta diferencia de horario permite la coexistencia mediante la partición temporal del nicho."

explicacion: |
  La partición temporal es una estrategia donde especies con recursos similares se dividen el tiempo de uso del hábitat para evitar la competencia directa.
```

### 22 — Diferenciación por altura de forrajeo

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["estratificación", "nicho", "aves"]

opciones_explicitas: ["troncos de los árboles", "el suelo del bosque", "las copas de los árboles", "el aire"]

respuesta: "el suelo del bosque"
tipo: mc

enunciado: "Dos especies de aves pueden compartir el mismo bosque sin competir por alimento si el carpintero busca larvas en los troncos, mientras que el picamontes de suelo busca su alimento en ___."

explicacion: |
  La estratificación vertical en el hábitat permite que diferentes especies ocupen distintos niveles de altura, reduciendo la competencia por el mismo recurso en el mismo espacio.
```

### 23 — Especialización en tipo de presa

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["dieta", "nicho", "especialista"]

variables:
  par_de_aves: [["un colibrí y un carpintero", "néctar", "insectos"], ["un zorro y un conejo", "carne", "vegetales"], ["un oso y un pez", "frutas", "proteína animal"]]
  idx: uno_de([0, 1, 2])

opciones_explicitas: ["néctar", "insectos", "carne", "vegetales", "frutas", "proteína animal"]

respuesta: par_de_aves[idx][1]
tipo: mc

enunciado: "Dos especies pueden coexistir si tienen dietas distintas. Si analizamos a {par_de_aves[idx][0]}, la primera especie se especializa en consumir ___."

explicacion: |
  La especialización en el tipo de presa (recurso alimentario) es una forma de partición del nicho que evita que dos especies compitan por la misma fuente de energía.
```

### 24 — Concepto de nicho ecológico (repaso final)

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "basico"
  tags: ["definicion", "conceptos"]

opciones_explicitas: ["el lugar físico donde vive", "la función y rol de la especie", "el grupo de animales similares", "el clima de una región"]

respuesta: "la función y rol de la especie"
tipo: mc

enunciado: "Mientras que el hábitat es el lugar donde vive una especie, el nicho ecológico se define como ___."

explicacion: |
  El nicho ecológico incluye no sólo el lugar, sino también el comportamiento, la dieta, el periodo de actividad y cómo la especie interactúa con su entorno.
```

### 25 — Partición de recursos

```
metadata:
  materia: "biologia"
  tema: "nicho_ecologico"
  nivel: "intermedio"
  tags: ["competencia", "coexistencia"]

opciones_explicitas: ["competencia", "exclusión", "coexistencia", "adaptación"]

respuesta: "coexistencia"
tipo: mc

enunciado: "Cuando dos especies en un mismo ecosistema desarrollan características que les permiten utilizar recursos de manera diferente (por ejemplo, comiendo a distintas horas o en distintas alturas), logran la ___."

explicacion: |
  La partición de recursos es el mecanismo que permite la coexistencia, evitando que la competencia sea tan intensa que una especie termine desplazando a la otra (Principio de Exclusión Competitiva).
```
