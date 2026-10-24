# Química — Carbono: tetravalencia y cadenas (cuestionario, 20 preguntas VBLang)

> Tema: `QR`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Tetravalencia del carbono

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["carbono", "enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "El átomo de carbono siempre forma 4 enlaces covalentes para alcanzar la estabilidad."

explicacion: |
  El carbono tiene 4 electrones de valencia y necesita formar 4 enlaces covalentes para completar su octeto.
```

### 2 — Propiedad de formación de cadenas

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["catenacion", "propiedades"]

respuesta: "catenacion"
tipo: completar
respuestas_validas:
  - "catenacion"

enunciado: "La propiedad del carbono de formar largas cadenas consigo mismo se llama ___."

explicacion: |
  La catenación permite formar cadenas lineales, ramificadas o anillos.
```

### 3 — Electrones de valencia

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["electrones", "valencia"]

respuesta: "4"
tipo: mc
opciones_explicitas: ["2", "4", "6", "8"]

enunciado: "El átomo de carbono posee en su capa de valencia:"

explicacion: |
  El carbono está en el grupo 14: tiene 4 electrones en su capa más externa.
```

### 4 — Regla del octeto

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["octeto", "electrones"]

respuesta: verdadero
tipo: vf

enunciado: "Al átomo de carbono le faltan 4 electrones para completar su octeto de valencia."

explicacion: |
  Con 4 electrones propios y 4 que le faltan, alcanza los 8 de la configuración de gas noble.
```

### 5 — Tipos de cadenas de carbono

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "intermedio"
  tags: ["quimica_organica", "carbono"]

variables:
  tipos: [["lineal", "sin ramificaciones, C-C-C-C"], ["ramificada", "con brazos laterales"], ["ciclica", "la cadena se cierra sobre si misma"]]
  idx: uno_de([0, 1, 2])

respuesta: tipos[idx][1]
tipo: mc
opciones_explicitas: ["sin ramificaciones, C-C-C-C", "con brazos laterales", "la cadena se cierra sobre si misma"]

enunciado: "Una cadena de carbono de tipo {tipos[idx][0]} se caracteriza porque..."

explicacion: |
  Una cadena {tipos[idx][0]} es: {tipos[idx][1]}.
```

### 6 — Estructura de cadenas cíclicas

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["quimica_organica", "carbono"]

respuesta: verdadero
tipo: vf

enunciado: "Una cadena de carbono cíclica es aquella que se cierra sobre sí misma formando un anillo."

explicacion: |
  Correcto, esa es la definición de cadena cíclica.
```

### 7 — Versatilidad de las cadenas de carbono

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["quimica_organica", "carbono"]

respuesta: falso
tipo: vf

enunciado: "El átomo de carbono tiene la capacidad de formar únicamente cadenas lineales, sin posibilidad de ramificaciones o ciclos."

explicacion: |
  Falso. El carbono forma lineales, ramificadas y cíclicas.
```

### 8 — Enlaces y pares compartidos

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "intermedio"
  tags: ["enlaces", "carbono"]

variables:
  escenario: [["simple (C-C)", 1], ["doble (C=C)", 2], ["triple (C-triple-C)", 3]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: [1, 2, 3]

enunciado: "Si un enlace entre dos átomos de carbono es de tipo {escenario[idx][0]}, ¿cuántos pares de electrones comparten?"

explicacion: |
  Un enlace simple comparte 1 par, uno doble 2 pares, y uno triple 3 pares.
```

### 9 — Enlace doble y valencia

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["enlaces", "carbono"]

respuesta: verdadero
tipo: vf

enunciado: "En un enlace doble (C=C), cada átomo de carbono usa 2 de sus 4 enlaces de valencia con el mismo vecino."

explicacion: |
  Correcto: comparten dos pares de electrones, consumiendo dos de los cuatro enlaces disponibles de cada carbono.
```

### 10 — Enlace triple y valencia

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["enlaces", "carbono"]

respuesta: falso
tipo: vf

enunciado: "En un enlace triple, cada átomo de carbono usa sólo 1 de sus 4 enlaces de valencia con el vecino."

explicacion: |
  Falso. En un enlace triple usa 3 de sus 4 enlaces con ese vecino.
```

### 11 — Clasificación de hidrocarburos

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["hidrocarburos"]

respuesta: "alcanos"
tipo: completar
respuestas_validas:
  - "alcanos"

enunciado: "La distinción entre enlace simple, doble y triple entre carbonos es lo que separa a los ___, alquenos y alquinos."

explicacion: |
  Alcanos (simple), alquenos (doble), alquinos (triple).
```

### 12 — Catenación del carbono

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["enlaces", "catenacion"]

respuesta: verdadero
tipo: vf

enunciado: "El enlace C-C es fuerte y estable, lo que permite la catenación (formar cadenas largas)."

explicacion: |
  Esa fuerza y estabilidad del enlace C-C es la base de la catenación.
```

### 13 — Definición de química orgánica

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["definicion", "quimica_organica"]

respuesta: verdadero
tipo: vf

enunciado: "La química orgánica es la rama de la química dedicada casi exclusivamente a los compuestos de carbono."

explicacion: |
  Correcto (con excepciones como carbonatos o CO2, que se estudian como química inorgánica).
```

### 14 — Diversidad de hidrocarburos

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["hidrocarburos", "diversidad"]

respuesta: "millones de moléculas distintas"
tipo: mc
opciones_explicitas: ["millones de moléculas distintas", "solo una molécula", "a lo sumo 10 moléculas", "ninguna molécula estable"]

enunciado: "Con sólo carbono e hidrógeno se pueden formar..."

explicacion: |
  Por la tetravalencia y los enlaces simples/dobles/triples, la variedad de hidrocarburos es enorme.
```

### 15 — Diversidad estructural

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["diversidad", "tabla_periodica"]

respuesta: verdadero
tipo: vf

enunciado: "Ningún otro elemento de la tabla periódica genera tanta diversidad estructural como el carbono."

explicacion: |
  La catenación con enlaces estables es una propiedad casi exclusiva del carbono en la práctica.
```

### 16 — Consecuencia de la tetravalencia en cadenas ramificadas

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "intermedio"
  tags: ["carbono", "ramificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Un átomo de carbono en el medio de una cadena ramificada puede estar unido a 3 o 4 átomos de carbono distintos al mismo tiempo, sin dejar de tener 4 enlaces en total."

explicacion: |
  Correcto: sus 4 enlaces se reparten entre varios vecinos de carbono (más eventualmente H u otros átomos), formando la ramificación.
```

### 17 — Comparación C-C con otros elementos

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "avanzado"
  tags: ["comparacion", "silicio"]

respuesta: falso
tipo: vf

enunciado: "El enlace Si-Si (silicio-silicio) es igual de fuerte y estable que el C-C, por eso el silicio también forma cadenas tan largas y variadas como el carbono."

explicacion: |
  Falso. El enlace Si-Si es más débil que el C-C, así que el silicio no cataniza tan bien — de ahí que la química orgánica sea "del carbono" y no "del silicio".
```

### 18 — Anillos y enlaces disponibles

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "intermedio"
  tags: ["carbono", "anillos"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando la cadena de carbono se cierra en un anillo, cada carbono del anillo sigue teniendo 4 enlaces en total, repartidos entre sus vecinos del anillo y (si sobra) átomos de hidrógeno."

explicacion: |
  Correcto, la tetravalencia se mantiene siempre, ya sea en cadena abierta o cerrada (anillo).
```

### 19 — Base de la química orgánica

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "la tetravalencia y la catenación del carbono"
tipo: mc
opciones_explicitas: ["la tetravalencia y la catenación del carbono", "la alta electronegatividad del carbono", "que el carbono es un metal", "que el carbono siempre forma enlaces iónicos"]

enunciado: "¿Qué propiedad del carbono explica por qué existe toda una rama de la química (orgánica) dedicada casi solo a sus compuestos?"

explicacion: |
  La combinación de 4 enlaces disponibles y la capacidad de encadenarse consigo mismo (catenación) genera la enorme diversidad de compuestos orgánicos.
```

### 20 — Carbono vs. otros elementos tetravalentes

```
metadata:
  materia: "quimica"
  tema: "carbono_tetravalencia_cadenas"
  nivel: "avanzado"
  tags: ["comparacion", "tetravalencia"]

respuesta: falso
tipo: vf

enunciado: "El carbono es el único elemento de la tabla periódica que puede formar 4 enlaces covalentes."

explicacion: |
  Falso. Otros elementos del grupo 14 (como el silicio) también son tetravalentes; lo distintivo del carbono no es sólo la tetravalencia, sino combinarla con enlaces C-C muy estables (catenación fuerte).
```
