# Ed. Física — Reglamento y fundamentos del hockey (cuestionario, 24 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — Organismo

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "basico"
  tags: ["hockey", "reglamento"]

enunciado: "¿Qué organismo fija las reglas del hockey sobre césped?"
tipo: mc
opciones_explicitas:
  - "La FIH"
  - "La FIFA"
  - "La IHF"
  - "La FIBA"
respuesta: "La FIH"

explicacion: |
  La Federación Internacional de Hockey publica las reglas.
```

### 2 — Jugadores

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "basico"
  tags: ["hockey", "reglamento"]

enunciado: "¿Cuántos jugadores de cada equipo hay en cancha en el hockey de once?"
tipo: mc
opciones_explicitas:
  - "11: diez de campo y un arquero"
  - "7: seis de campo y un arquero"
  - "5: cuatro de campo y un arquero"
  - "15 en total"
respuesta: "11: diez de campo y un arquero"

explicacion: |
  Son once jugadores por equipo.
```

### 3 — Duración

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "basico"
  tags: ["hockey", "reglamento"]

enunciado: "¿Cómo se divide un partido de hockey de once?"
tipo: mc
opciones_explicitas:
  - "Cuatro cuartos de 15 minutos"
  - "Dos tiempos de 35 minutos"
  - "Dos tiempos de 40 minutos"
  - "Tres tercios de 20 minutos"
respuesta: "Cuatro cuartos de 15 minutos"

explicacion: |
  Son 60 minutos en cuatro cuartos.
```

### 4 — Duración total

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "basico"
  tags: ["hockey", "reglamento"]

variables:
  c: uno_de([4, 4, 4])

enunciado: "Un partido de hockey se juega en {c} cuartos de 15 minutos. ¿Cuántos minutos dura el tiempo reglamentario?"
tipo: input
respuesta: 15 * c
tolerancia_abs: 0

explicacion: |
  {c} cuartos de 15 minutos son {15 * c} minutos.
```

### 5 — Medidas de la cancha

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "intermedio"
  tags: ["hockey", "reglamento"]

enunciado: "¿Qué medidas tiene la cancha de hockey sobre césped?"
tipo: mc
opciones_explicitas:
  - "91,40 m por 55 m"
  - "100 m por 70 m"
  - "40 m por 20 m"
  - "105 m por 68 m"
respuesta: "91,40 m por 55 m"

explicacion: |
  La cancha mide 91,40 m por 55 m.
```

### 6 — Superficie

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "basico"
  tags: ["hockey", "reglamento"]

enunciado: "¿Sobre qué superficie se juega por lo general al hockey de alto nivel?"
tipo: mc
opciones_explicitas:
  - "Césped sintético"
  - "Madera"
  - "Hormigón"
  - "Arena"
respuesta: "Césped sintético"

explicacion: |
  Los partidos de alto nivel se juegan en césped sintético.
```

### 7 — Gol desde el círculo

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "intermedio"
  tags: ["hockey", "reglamento"]

enunciado: "Solo se puede convertir un gol con un tiro hecho desde dentro del círculo de tiro."
tipo: vf
respuesta: verdadero

explicacion: |
  El círculo mide 14,63 m desde el arco.
```

### 8 — Arco

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "intermedio"
  tags: ["hockey", "reglamento"]

enunciado: "¿Qué medidas tiene el arco de hockey?"
tipo: mc
opciones_explicitas:
  - "3,66 m de ancho y 2,14 m de alto"
  - "7,32 m de ancho y 2,44 m de alto"
  - "3 m de ancho y 2 m de alto"
  - "6 m de ancho y 2 m de alto"
respuesta: "3,66 m de ancho y 2,14 m de alto"

explicacion: |
  El arco tiene 3,66 m por 2,14 m.
```

### 9 — El palo

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "basico"
  tags: ["hockey", "reglamento"]

enunciado: "¿Con qué parte del palo se juega la pelota?"
tipo: mc
opciones_explicitas:
  - "Con la cara plana"
  - "Con la cara redondeada"
  - "Con cualquiera de las dos"
  - "Con el mango"
respuesta: "Con la cara plana"

explicacion: |
  Solo se juega con la cara plana del palo.
```

### 10 — Pie

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "basico"
  tags: ["hockey", "reglamento"]

enunciado: "Un jugador de campo puede patear la pelota con el pie."
tipo: vf
respuesta: falso

explicacion: |
  Jugar la pelota con el pie es falta.
```

### 11 — Córner corto

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "intermedio"
  tags: ["hockey", "reglamento"]

enunciado: "¿Qué es un córner corto (penalty corner)?"
tipo: mc
opciones_explicitas:
  - "Una jugada preparada con tiro desde dentro del círculo tras una falta de los defensores"
  - "Un tiro libre en el medio de la cancha"
  - "Un lateral"
  - "Un tiro desde el punto penal de 6,40 m"
respuesta: "Una jugada preparada con tiro desde dentro del círculo tras una falta de los defensores"

explicacion: |
  Es una de las jugadas más importantes del hockey.
```

### 12 — Penal

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "intermedio"
  tags: ["hockey", "reglamento"]

enunciado: "¿Desde qué distancia se ejecuta un penal (penalty stroke)?"
tipo: mc
opciones_explicitas:
  - "6,40 m"
  - "11 m"
  - "7 m"
  - "9 m"
respuesta: "6,40 m"

explicacion: |
  El penal es un duelo uno a uno contra el arquero desde 6,40 m.
```

### 13 — Tarjeta verde

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "intermedio"
  tags: ["hockey", "reglamento"]

enunciado: "¿Cuánto dura la suspensión con tarjeta verde en el hockey de once?"
tipo: mc
opciones_explicitas:
  - "2 minutos"
  - "5 minutos"
  - "10 minutos"
  - "1 minuto"
respuesta: "2 minutos"

explicacion: |
  La verde suspende al jugador dos minutos.
```

### 14 — Tarjeta amarilla

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "intermedio"
  tags: ["hockey", "reglamento"]

enunciado: "¿Cuánto dura como mínimo la suspensión con tarjeta amarilla?"
tipo: mc
opciones_explicitas:
  - "5 minutos"
  - "2 minutos"
  - "10 minutos"
  - "15 minutos"
respuesta: "5 minutos"

explicacion: |
  La amarilla suspende al jugador al menos cinco minutos.
```

### 15 — Tarjeta roja

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "basico"
  tags: ["hockey", "reglamento"]

enunciado: "La tarjeta roja implica la expulsión definitiva del jugador."
tipo: vf
respuesta: verdadero

explicacion: |
  La roja es la sanción más grave.
```

### 16 — Las Leonas

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "intermedio"
  tags: ["hockey", "reglamento"]

enunciado: "¿En qué años Las Leonas ganaron la Copa del Mundo?"
tipo: mc
opciones_explicitas:
  - "2002 y 2010"
  - "1994 y 1998"
  - "2000 y 2004"
  - "2014 y 2018"
respuesta: "2002 y 2010"

explicacion: |
  Las Leonas fueron campeonas mundiales en 2002 y 2010.
```

### 17 — Los Leones

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "intermedio"
  tags: ["hockey", "reglamento"]

enunciado: "¿Qué logró la selección masculina Los Leones en Río 2016?"
tipo: mc
opciones_explicitas:
  - "La medalla de oro olímpica"
  - "La medalla de plata"
  - "La medalla de bronce"
  - "El cuarto puesto"
respuesta: "La medalla de oro olímpica"

explicacion: |
  Los Leones ganaron el oro olímpico en Río 2016.
```

### 18 — Sídney 2000

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "intermedio"
  tags: ["hockey", "reglamento"]

enunciado: "¿Qué medalla ganaron Las Leonas en los Juegos Olímpicos de Sídney 2000?"
tipo: mc
opciones_explicitas:
  - "Plata"
  - "Oro"
  - "Bronce"
  - "Ninguna"
respuesta: "Plata"

explicacion: |
  Fue la primera medalla olímpica del hockey argentino.
```

### 19 — Beijing 2008

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "avanzado"
  tags: ["hockey", "reglamento"]

enunciado: "¿Qué medalla ganaron Las Leonas en Beijing 2008?"
tipo: mc
opciones_explicitas:
  - "Bronce"
  - "Plata"
  - "Oro"
  - "Ninguna"
respuesta: "Bronce"

explicacion: |
  Ganaron el bronce en 2008.
```

### 20 — Arquero

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "avanzado"
  tags: ["hockey", "reglamento"]

enunciado: "En el hockey de once el arquero puede ser reemplazado por un jugador de campo."
tipo: vf
respuesta: verdadero

explicacion: |
  Un equipo puede jugar con un jugador de campo en lugar del arquero.
```

### 21 — Otras modalidades

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "basico"
  tags: ["hockey", "reglamento"]

enunciado: "El hockey sala y el Hockey5s tienen las mismas reglas que el hockey de once."
tipo: vf
respuesta: falso

explicacion: |
  Tienen reglas propias.
```

### 22 — Cara del palo

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "basico"
  tags: ["hockey", "reglamento"]

enunciado: "Solo se juega la pelota con la cara ___ del palo."
tipo: completar
respuestas_validas:
  - "plana"

explicacion: |
  La cara redondeada no se puede usar.
```

### 23 — Círculo

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "intermedio"
  tags: ["hockey", "reglamento"]

enunciado: "Un gol solo es válido si el tiro se hace desde dentro del ___ de tiro."
tipo: completar
respuestas_validas:
  - "círculo"
  - "circulo"

explicacion: |
  El círculo de tiro mide 14,63 m.
```

### 24 — Obstrucción

```
metadata:
  materia: "ed_fisica"
  tema: "reglamento_y_fundamentos_del_hockey"
  nivel: "avanzado"
  tags: ["hockey", "reglamento"]

enunciado: "¿Qué es la obstrucción en el hockey?"
tipo: mc
opciones_explicitas:
  - "Interponer el cuerpo entre el rival y la pelota"
  - "Golpear el palo del rival"
  - "Patear la pelota"
  - "Saltar sobre el rival"
respuesta: "Interponer el cuerpo entre el rival y la pelota"

explicacion: |
  Es una falta que se sanciona con tiro libre.
```
