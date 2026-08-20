# Biología — Filogenia y árboles evolutivos (cuestionario, 25 preguntas VBLang)

> Tema: `BO`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: dos preguntas `completar` con
> **dos** blancos y una `respuesta:` en forma de array (no confirmado
> que el DSL soporte multi-blank) — recortadas a un solo blanco;
> un `tipo: mc` con `enunciado` terminado en "(verdadero/falso)" pero
> `opciones_explicitas` de un par de especies (mezcla de dos formatos)
> — reescrita como `vf` limpio; un operador ternario `? :` usado en
> `respuesta:` (no existe en el DSL) en dos preguntas distintas —
> reescritas con tabla `[opción, veredicto]` indexada por `idx`;
> una pregunta `mc` cuya `respuesta:` apuntaba a una secuencia de ADN
> que no aparecía en `opciones_explicitas` — reescrita con datos
> consistentes; una comparación de arrays (`== secuencia`) en
> `respuesta:` (tampoco existe en el DSL) en una pregunta `tipo:
> ordenar` con placeholders sin interpolar en `opciones_explicitas` —
> descartada y reemplazada por una versión funcional; una `variables:`
> con clave `tabla` declarada fuera del bloque `variables:` — corregida
> y simplificada (la respuesta no dependía realmente de la variable).

---

### 1 — Concepto de árbol filogenético

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

### 2 — El significado de los nodos

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

### 3 — Las puntas del árbol

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

### 4 — Las ramas y el linaje

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

### 5 — Relación de parentesco

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

### 6 — Parentesco y ancestros comunes

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

### 7 — El error de la similitud morfológica

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

### 8 — Lectura de nodos en el árbol

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

### 9 — Interpretación de la ramificación exclusiva

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

### 10 — Concepto de ancestro común

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

### 11 — La escalera evolutiva

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

### 12 — El orden de las puntas

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

### 13 — Tiempo evolutivo compartido

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

### 14 — El mito del "más evolucionado"

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

### 15 — Interpretación de nodos (síntesis)

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

### 16 — Similitud de secuencias de ADN

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

### 17 — El concepto de ancestro común (nodo)

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

### 18 — Interpretación de distancias genéticas

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

### 19 — Homología vs. analogía

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

### 20 — Comparación de linajes con ADN

```
metadata:
  materia: "biologia"
  tema: "filogenia_arboles_evolutivos"
  nivel: "avanzado"
  tags: ["cladogramas", "adn"]

variables:
  escenario: uno_de([["chimpancé", "1", "cerdo"], ["gorila", "2", "ratón"]])

enunciado: "El ser humano comparte más secuencia de ADN con el {escenario[0]} (diferencia de apenas {escenario[1]}% en algunas regiones comparadas) que con el {escenario[2]}. ¿Cuál de los dos animales comparte un ancestro común más reciente con el ser humano?"

opciones_explicitas: ["{escenario[0]}", "{escenario[2]}"]
respuesta: escenario[0]
tipo: completar
respuestas_validas:
  - "chimpancé"
  - "chimpance"
  - "gorila"

explicacion: |
  Cuanto menor es la diferencia porcentual entre secuencias de ADN, más reciente es el ancestro común compartido — por eso el árbol filogenético ubica a los primates mucho más cerca del ser humano que a otros mamíferos.
```

### 21 — El significado de los nodos (repaso)

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

### 22 — Identificación de especies en las puntas

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

### 23 — Completar conceptos clave

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

### 24 — Relaciones de parentesco por nodo exclusivo

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

### 25 — Análisis de linajes extintos

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
