# Química — Configuración electrónica (cuestionario, 20 preguntas VBLang)

> Tema: `QE`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma) y corregido a mano.
> Bug de esta tanda: `respuesta` numérica (`6`) contra
> `opciones_explicitas` con los mismos valores entre comillas (`"6"`)
> — dos tipos distintos que no matchean como iguales. Homogeneizado a
> numérico sin comillas en ambos lados.

---

### 1 — Capacidad del subnivel

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["subniveles", "electrones"]

variables:
  escenario: [["s", 2], ["p", 6], ["d", 10], ["f", 14]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: [2, 6, 10, 14]

enunciado: "El subnivel {escenario[idx][0]} tiene una capacidad máxima de ___ electrones."

explicacion: |
  La capacidad depende de la cantidad de orbitales del subnivel: s (1 orbital, 2e⁻), p (3 orbitales, 6e⁻), d (5 orbitales, 10e⁻) y f (7 orbitales, 14e⁻).
```

### 2 — Capacidad del subnivel p

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["subniveles"]

respuesta: verdadero
tipo: vf

enunciado: "El subnivel p puede tener un máximo de 6 electrones."

explicacion: |
  El subnivel p tiene 3 orbitales, y cada orbital admite hasta 2 electrones: 3 × 2 = 6.
```

### 3 — Identificación de subnivel

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["subniveles"]

respuesta: "d"
tipo: completar
respuestas_validas:
  - "d"

enunciado: "El subnivel con capacidad máxima de 10 electrones es el ___."

explicacion: |
  El subnivel d tiene 5 orbitales, lo que permite un máximo de 10 electrones (5 × 2).
```

### 4 — Regla de las diagonales

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["regla_madelung", "orden_llenado"]

respuesta: verdadero
tipo: vf

enunciado: "El subnivel 4s se llena antes que el 3d según la regla de las diagonales (principio de Aufbau)."

explicacion: |
  Según la regla de las diagonales, el 4s tiene menor energía que el 3d, así que se llena primero — aunque el 3 sea menor que el 4.
```

### 5 — Orden de llenado

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["orden_llenado", "principio_aufbau"]

respuesta: "1s, 2s, 2p, 3s"
tipo: mc
opciones_explicitas: ["1s, 2s, 2p, 3s", "1s, 2p, 2s, 3s", "2s, 1s, 3s, 2p"]

enunciado: "¿Cuál es el orden correcto de llenado para estos subniveles: 1s, 2s, 2p y 3s?"

explicacion: |
  Siguiendo el principio de Aufbau, los subniveles se llenan en orden creciente de energía: 1s → 2s → 2p → 3s.
```

### 6 — Electrones en un átomo neutro

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["atomos", "electrones"]

variables:
  pares: [[3, 3], [6, 6], [8, 8], [11, 11], [17, 17]]
  idx: uno_de([0, 1, 2, 3, 4])

respuesta: pares[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "Dado un átomo neutro con número atómico Z = {pares[idx][0]}, ¿cuántos electrones tiene en total?"

explicacion: |
  Un átomo neutro tiene tantos electrones como su número atómico (Z). Aquí Z = {pares[idx][0]}, entonces tiene {pares[idx][1]} electrones.
```

### 7 — Identificación de elemento por configuración

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["configuracion", "elementos"]

variables:
  datos: [["1s2 2s2 2p6 3s1", "Sodio (Z=11)"], ["1s2 2s2 2p4", "Oxígeno (Z=8)"], ["1s2 2s2 2p6 3s2 3p5", "Cloro (Z=17)"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Sodio (Z=11)", "Oxígeno (Z=8)", "Cloro (Z=17)"]

enunciado: "La configuración electrónica {datos[idx][0]} corresponde a:"

explicacion: |
  Esa configuración electrónica corresponde a {datos[idx][1]}.
```

### 8 — Completar subnivel

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["cloro", "subniveles"]

respuesta: "5"
tipo: completar
respuestas_validas:
  - "5"

enunciado: "La configuración electrónica del cloro (Z=17) es 1s² 2s² 2p⁶ 3s² 3p___."

explicacion: |
  El cloro tiene 17 electrones. 2 (1s) + 2 (2s) + 6 (2p) + 2 (3s) = 12; faltan 5 electrones para el subnivel 3p.
```

### 9 — Suma de electrones

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["teoria"]

respuesta: verdadero
tipo: vf

enunciado: "La suma de los superíndices de una configuración electrónica correcta debe ser igual al número de electrones del átomo."

explicacion: |
  Verdadero. Cada superíndice indica cuántos electrones hay en ese subnivel; la suma total tiene que coincidir con Z en un átomo neutro.
```

### 10 — Electrones en un subnivel específico

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["subniveles", "conteo"]

respuesta: 6
tipo: mc
opciones_explicitas: [2, 4, 6, 8]

enunciado: "¿Cuántos electrones tiene el subnivel 2p en la configuración completa 1s² 2s² 2p⁶ 3s²?"

explicacion: |
  El superíndice del subnivel 2p en esa configuración es 6.
```

### 11 — Electrones de valencia

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["electrones_valencia", "tabla_periodica"]

variables:
  datos: [["Sodio", "1s2 2s2 2p6 3s1", 1], ["Cloro", "1s2 2s2 2p6 3s2 3p5", 7], ["Oxígeno", "1s2 2s2 2p4", 6]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][2]
tipo: mc
opciones_explicitas: [1, 2, 3, 4, 5, 6, 7, 8]

enunciado: "Dado el elemento {datos[idx][0]} con la configuración electrónica {datos[idx][1]}, ¿cuántos electrones de valencia tiene?"

explicacion: |
  {datos[idx][0]} tiene {datos[idx][2]} electrones en su nivel más externo.
```

### 12 — Definición de electrones de valencia

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: "más alto"
tipo: completar
respuestas_validas:
  - "más alto"
  - "ultimo"
  - "último"

enunciado: "Los electrones de valencia son los que están en el nivel ___ de la configuración electrónica."

explicacion: |
  Los electrones de valencia son los que ocupan el nivel de energía más alto (el último) de un átomo.
```

### 13 — Función de los electrones de valencia

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["enlaces"]

respuesta: verdadero
tipo: vf

enunciado: "¿Los electrones de valencia son los que participan en los enlaces químicos?"

explicacion: |
  Verdadero. La reactividad química de un átomo depende de cómo interactúan sus electrones de valencia con otros átomos.
```

### 14 — Relación con el grupo de la tabla periódica

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["tabla_periodica", "grupos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Dos elementos con la misma cantidad de electrones de valencia están, en general, en el mismo grupo de la tabla periódica?"

explicacion: |
  Verdadero (para elementos representativos): comparten propiedades químicas similares porque tienen la misma cantidad de electrones de valencia.
```

### 15 — Nivel de energía más alto

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["niveles_energia"]

variables:
  datos: [[11, 3], [17, 3], [8, 2], [3, 2]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: [1, 2, 3, 4, 5, 6, 7]

enunciado: "Para un átomo con número atómico Z = {datos[idx][0]}, ¿cuál es el número del nivel de energía más alto ocupado?"

explicacion: |
  El nivel de energía más alto ocupado corresponde al número cuántico principal más grande de su configuración. Para Z = {datos[idx][0]}, es el nivel {datos[idx][1]}.
```

### 16 — Excepciones en el orden de llenado

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["orbitales", "aufbau"]

respuesta: falso
tipo: vf

enunciado: "Los subniveles de energía se llenan siempre en orden estricto de menor a mayor número de nivel (1, 2, 3...), sin excepciones."

explicacion: |
  Falso. Por el principio de Aufbau, se llenan según su energía real, no según el número de nivel — el 4s tiene menor energía que el 3d y se llena primero.
```

### 17 — Capacidad del segundo nivel

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["capacidad", "orbitales"]

respuesta: 8
tipo: mc
opciones_explicitas: [2, 6, 8, 18]

enunciado: "¿Cuál es la capacidad total de electrones que pueden albergar los subniveles del segundo nivel de energía (2s y 2p)?"

explicacion: |
  El nivel 2 tiene el subnivel 2s (capacidad 2) y el subnivel 2p (capacidad 6): 2 + 6 = 8 electrones.
```

### 18 — Conteo de electrones

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["conteo", "electrones"]

respuesta: "10"
tipo: completar
respuestas_validas:
  - "10"

enunciado: "En la configuración electrónica 1s² 2s² 2p⁶, el total de electrones es ___."

explicacion: |
  Sumando los superíndices: 2 (1s) + 2 (2s) + 6 (2p) = 10 electrones.
```

### 19 — Átomos neutros y número atómico

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "basico"
  tags: ["atomos", "neutros"]

respuesta: verdadero
tipo: vf

enunciado: "La configuración electrónica de un átomo neutro tiene tantos electrones como su número atómico Z."

explicacion: |
  Verdadero. En un átomo neutro, la carga de los electrones cancela exactamente la de los protones (Z), así que su cantidad coincide.
```

### 20 — Capacidad total del nivel 3

```
metadata:
  materia: "quimica"
  tema: "configuracion_electronica"
  nivel: "intermedio"
  tags: ["capacidad", "nivel_3"]

respuesta: 18
tipo: mc
opciones_explicitas: [8, 10, 18, 32]

enunciado: "¿Cuál es la capacidad total de electrones del nivel 3 completo (3s + 3p + 3d)?"

explicacion: |
  3s (2) + 3p (6) + 3d (10) = 18 electrones — aunque en la práctica el 3d se llena después del 4s por la regla de las diagonales.
```
