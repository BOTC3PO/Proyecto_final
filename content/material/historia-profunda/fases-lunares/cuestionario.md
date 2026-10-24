# Historia Profunda — Fases lunares (cuestionario, 25 preguntas VBLang)

> Tema: `AS3`. Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido a mano. Bugs de esta tanda: `respuesta:`/`opciones_explicitas`
> con literales de texto tipo `"escenario[1]"` en vez de la expresión
> real `escenario[1]` (comillas de más rompían la referencia) —
> corregido, y como la pregunta de fondo no dependía de ningún sorteo
> real, reescrita fija; operador ternario `?:` dentro de un
> `enunciado` — inválido, reescrita fija (tampoco dependía de sorteo
> real); `tipo: input` (no confirmado en el DSL) usado dos veces —
> normalizado a `completar`; `variables:` declaradas y nunca usadas,
> con `respuesta: uno_de(["verdadero","falso"])` decidiendo la
> corrección por sorteo — inválido patrón, reescrita fija; pregunta
> `mc` cuyo enunciado ya venía con la descripción-respuesta
> interpolada dentro de una oración cerrada (no quedaba pregunta real
> que responder) — reescrita como blank real; pregunta que pedía
> identificar la fase a partir de un % de iluminación pero para 50%
> había DOS respuestas válidas indistinguibles (cuarto creciente y
> cuarto menguante dan el mismo 50%, no se puede diferenciar sin más
> datos) — acotada a los casos no ambiguos (0% y 100%); `completar`
> con dos blancos (`___%` y `___` de nombre) pero una sola
> `respuesta`/`respuestas_validas` — reducida a un solo blanco,
> el % se da directo en el enunciado; pregunta `vf` cuyo enunciado
> terminaba interpolando literalmente la palabra "Verdadero"/"Falso"
> (regalaba la respuesta) y además, en uno de los dos casos sorteados,
> afirmaba como "verdadera" una relación factualmente falsa (100% de
> iluminación es Luna Llena, no Luna Nueva) — reescrita fija y
> correcta.

---

### 1 — El mito de la sombra terrestre

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "mitos"]

respuesta: falso
tipo: vf

enunciado: "Un error común es pensar que las fases lunares ocurren porque la Tierra proyecta su sombra sobre la Luna."

explicacion: |
  Las fases lunares no son causadas por la sombra de la Tierra. La sombra de la Tierra sobre la Luna sólo ocurre durante un eclipse lunar, un evento mucho más raro y específico.
```

### 2 — La verdadera causa de las fases

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "geometria"]

opciones_explicitas: ["La sombra de la Tierra", "La posición de la Luna respecto al Sol y la Tierra", "La atmósfera terrestre", "La distancia de la Luna a la Tierra"]
respuesta: "La posición de la Luna respecto al Sol y la Tierra"
tipo: mc

enunciado: "¿Cuál es la causa real de que veamos diferentes fases lunares?"

explicacion: |
  Las fases dependen de la geometría entre el Sol, la Tierra y la Luna. Lo que vemos es la fracción de la cara iluminada de la Luna que es visible desde nuestra perspectiva en la Tierra.
```

### 3 — Completar la definición

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["astronomia", "terminologia"]

respuestas_validas:
  - "porción"
  - "parte"
  - "fracción"
respuesta: "porción"
tipo: completar

enunciado: "Las fases lunares representan la ___ de la cara iluminada de la Luna que podemos observar desde la Tierra, según su posición orbital."

explicacion: |
  Como la Luna siempre tiene una mitad iluminada por el Sol, lo que cambia es la porción de esa mitad que nuestro ángulo de visión nos permite ver.
```

### 4 — Eclipse vs fase

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["astronomia", "eventos"]

respuesta: "eclipse lunar"
tipo: completar
respuestas_validas:
  - "eclipse lunar"

enunciado: "Si la Luna entra en la sombra proyectada por la Tierra (un evento raro, no mensual), estamos ante un ___."

explicacion: |
  Cuando la Tierra interfiere en la luz solar hacia la Luna, se produce un eclipse lunar, no una fase lunar normal (las fases ocurren todos los meses, los eclipses no).
```

### 5 — Verdadero o falso: iluminación

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La Luna siempre tiene una mitad iluminada por el Sol, independientemente de la fase que veamos desde la Tierra."

explicacion: |
  Verdadero. La Luna siempre recibe luz solar (salvo en eclipses); lo que cambia es nuestra perspectiva de esa mitad iluminada según la posición orbital de la Luna.
```

### 6 — El inicio del ciclo

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "luna"]

respuesta: "luna nueva"
tipo: completar
respuestas_validas:
  - "luna nueva"

enunciado: "La fase en la que la Luna se encuentra entre la Tierra y el Sol, por lo que su cara iluminada no es visible desde nuestro planeta, se denomina ___."

explicacion: |
  En la luna nueva, el ángulo entre el Sol, la Luna y la Tierra es de 0°, lo que impide ver la parte iluminada.
```

### 7 — La fase de plenitud

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "luna"]

opciones_explicitas: ["luna llena", "cuarto creciente", "luna nueva", "cuarto menguante"]
respuesta: "luna llena"
tipo: mc

enunciado: "Cuando la Luna se encuentra opuesta al Sol con respecto a la Tierra, la vemos totalmente iluminada. ¿Cómo se llama esta fase?"

explicacion: |
  La luna llena ocurre cuando la Tierra está entre el Sol y la Luna.
```

### 8 — Secuencia de crecimiento

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["astronomia", "luna"]

opciones_explicitas: ["luna creciente iluminante", "cuarto creciente", "gibosa creciente", "luna llena"]
respuesta_orden: ["luna creciente iluminante", "cuarto creciente", "gibosa creciente", "luna llena"]
tipo: ordenar

enunciado: "Ordena las siguientes fases lunares según aparecen en el ciclo de crecimiento (de menor a mayor iluminación):"

explicacion: |
  Después de la luna nueva, la parte visible crece primero como una pequeña astilla (creciente iluminante), luego alcanza la mitad (cuarto creciente) y finalmente se ensancha antes de la luna llena (gibosa creciente).
```

### 9 — Identificación de la fase gibosa

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["astronomia", "luna"]

variables:
  idx: uno_de([0, 1])
  datos: [["gibosa creciente", "cuarto creciente"], ["gibosa menguante", "luna llena"]]

opciones_explicitas: ["gibosa creciente", "gibosa menguante", "cuarto creciente", "cuarto menguante"]
respuesta: datos[idx][0]
tipo: mc

enunciado: "Si una fase ocurre justo después de la {datos[idx][1]} (y antes de la luna llena/nueva siguiente), ¿cuál es el nombre de esa fase intermedia?"

explicacion: |
  La fase gibosa es aquella en la que la Luna se ve iluminada en más de la mitad pero todavía no llega a ser llena.
```

### 10 — El final del ciclo

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "luna"]

respuesta: "0.5"
tipo: completar
respuestas_validas:
  - "0.5"
  - "0,5"
  - "1/2"
  - "50%"

enunciado: "En las fases de 'cuarto creciente' y 'cuarto menguante', la fracción (en decimal) de la cara visible de la Luna que está iluminada es ___."

pasos:
  - "Identificar que en el cuarto, la Luna está exactamente a la mitad de su ciclo de iluminación."

explicacion: |
  En las fases de cuarto, la Luna presenta exactamente la mitad de su cara visible iluminada.
```

### 11 — El ciclo lunar

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "luna"]

respuesta: "29.5"
tipo: completar
respuestas_validas:
  - "29.5"
  - "29,5"
  - "29"

enunciado: "El ciclo completo de las fases de la Luna, conocido como mes sinódico o lunación, dura aproximadamente ___ días."

explicacion: |
  El ciclo sinódico es el tiempo que tarda la Luna en volver a la misma fase respecto al Sol y la Tierra, unos 29,5 días.
```

### 12 — La Luna Nueva

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["fases", "luna_nueva"]

respuesta: "la cara iluminada mira al Sol"
tipo: mc
opciones_explicitas: ["la cara iluminada mira a la Tierra", "la cara iluminada mira al Sol", "la Luna deja de recibir luz solar"]

enunciado: "Durante la fase de Luna Nueva, no podemos ver el disco lunar porque ___."

explicacion: |
  En la Luna Nueva, la Luna se encuentra entre la Tierra y el Sol: la cara que vemos desde nuestro planeta es la que está en sombra, mientras la cara iluminada mira hacia el Sol.
```

### 13 — La Luna Llena

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["fases", "luna_llena"]

respuesta: "la cara iluminada mira a la Tierra"
tipo: completar
respuestas_validas:
  - "la cara iluminada mira a la Tierra"

enunciado: "En la fase de Luna Llena, podemos ver el disco completo porque ___."

explicacion: |
  En la Luna Llena, la Tierra se encuentra entre el Sol y la Luna, así que la cara iluminada es la que observamos.
```

### 14 — Secuencia de fases principales

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["orden", "fases"]

opciones_explicitas: ["Luna Nueva", "Cuarto Creciente", "Luna Llena", "Cuarto Menguante"]
respuesta_orden: ["Luna Nueva", "Cuarto Creciente", "Luna Llena", "Cuarto Menguante"]
tipo: ordenar

enunciado: "Ordena cronológicamente las fases lunares desde la ausencia de luz visible hasta la plenitud del disco."

explicacion: |
  El ciclo comienza con la Luna Nueva (oscuridad), sigue con el crecimiento de la parte visible (creciente), llega al máximo (llena) y luego decrece (menguante).
```

### 15 — Verdadero o falso: visibilidad en Luna Llena

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["logica", "fases"]

respuesta: verdadero
tipo: vf

enunciado: "En fase de Luna Llena vemos el disco completo porque la parte iluminada de la Luna apunta hacia la Tierra."

explicacion: |
  Correcto. En Luna Llena, la Tierra queda entre el Sol y la Luna, así que la cara iluminada de la Luna mira de frente hacia nosotros.
```

### 16 — Rotación sincrónica

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["luna", "astronomia"]

respuesta: "sincrónica"
tipo: completar
respuestas_validas:
  - "sincrónica"
  - "sincronizada"

enunciado: "El fenómeno por el cual la Luna tarda el mismo tiempo en rotar sobre su propio eje que en completar su órbita alrededor de la Tierra se denomina rotación ___."

explicacion: |
  Debido a que los períodos de rotación y traslación son iguales, la misma cara de la Luna siempre está orientada hacia la Tierra.
```

### 17 — La cara visible

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["luna", "astronomia"]

respuesta: "cara visible"
tipo: completar
respuestas_validas:
  - "cara visible"

enunciado: "Gracias a la rotación sincrónica, la parte de la Luna que siempre está orientada hacia nosotros se conoce como la ___."

explicacion: |
  La rotación sincrónica impide que veamos la cara oculta desde la Tierra, manteniendo siempre la misma cara frente a nosotros: la cara visible.
```

### 18 — Percepción de la Luna

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["luna", "astronomia"]

respuesta: falso
tipo: vf

enunciado: "La existencia de una 'cara oculta' de la Luna depende de las fases lunares (luna llena, luna nueva, etc.)."

explicacion: |
  Falso. La cara oculta es consecuencia de la rotación sincrónica y es independiente de las fases lunares: es la parte que no vemos por la rotación, no por la iluminación.
```

### 19 — Factores de la cara oculta

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["luna", "astronomia"]

respuesta: "rotación y traslación"
tipo: mc
opciones_explicitas: ["rotación y traslación", "distancia y tamaño", "gravedad y magnetismo"]

enunciado: "La razón por la cual no podemos ver la cara oculta de la Luna se debe a la igualdad entre sus períodos de ___."

explicacion: |
  Como la Luna tarda lo mismo en rotar que en orbitar, la cara que mira a la Tierra siempre es la misma.
```

### 20 — Conceptos clave (causalidad)

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "avanzado"
  tags: ["luna", "astronomia"]

respuesta_orden: ["rotación sincrónica", "cara visible", "cara oculta"]
tipo: ordenar

opciones_explicitas: ["rotación sincrónica", "cara visible", "cara oculta"]

enunciado: "Ordena estos conceptos según la relación de causa y efecto: primero la causa física, después sus dos consecuencias."

explicacion: |
  La rotación sincrónica es la causa física; de ella se derivan la existencia de una cara visible y una cara oculta.
```

### 21 — Identificación de fase por iluminación (casos no ambiguos)

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "luna"]

variables:
  idx: uno_de([0, 1])
  porcentajes: [0.0, 1.0]
  fases: ["Luna Nueva", "Luna Llena"]

respuesta: fases[idx]
tipo: mc
opciones_explicitas: ["Luna Nueva", "Cuarto Creciente", "Cuarto Menguante", "Luna Llena"]

enunciado: "Si la iluminación visible de la Luna es del {redondear(porcentajes[idx] * 100, 0)}%, ¿qué fase lunar estamos observando?"

explicacion: |
  0% de iluminación visible es Luna Nueva; 100% es Luna Llena. (El 50% no alcanza para distinguir por sí solo entre cuarto creciente y cuarto menguante — hace falta saber si la iluminación está aumentando o disminuyendo.)
```

### 22 — Porcentaje de iluminación

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "luna"]

variables:
  idx: uno_de([0, 1])
  datos: [[100, "Luna Llena"], [0, "Luna Nueva"]]

respuesta: datos[idx][0]
tipo: completar
respuestas_validas:
  - datos[idx][0]

enunciado: "Si la Luna se encuentra en fase {datos[idx][1]}, el porcentaje de su cara visible que está iluminado es ___%."

explicacion: |
  En la fase {datos[idx][1]}, la iluminación visible es del {datos[idx][0]}%.
```

### 23 — Completar fase por descripción

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["astronomia", "luna"]

variables:
  idx: uno_de([0, 1])
  datos: [["Luna Nueva", 0], ["Luna Llena", 100]]

respuesta: datos[idx][0]
tipo: completar
respuestas_validas:
  - "Luna Nueva"
  - "Luna Llena"

enunciado: "Cuando la Luna presenta una iluminación visible del {datos[idx][1]}%, la fase se llama ___."

explicacion: |
  La fase con {datos[idx][1]}% de iluminación visible es la {datos[idx][0]}.
```

### 24 — Secuencia de fases (repaso)

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "intermedio"
  tags: ["astronomia", "luna"]

respuesta_orden: ["Luna Nueva", "Cuarto Creciente", "Luna Llena", "Cuarto Menguante"]
tipo: ordenar
opciones_explicitas: ["Luna Nueva", "Cuarto Creciente", "Luna Llena", "Cuarto Menguante"]

enunciado: "Ordena cronológicamente las fases lunares desde la ausencia de luz visible hasta la plenitud."

explicacion: |
  El ciclo lunar comienza con la Luna Nueva, sigue con el cuarto creciente, luego la Luna Llena y finalmente el cuarto menguante.
```

### 25 — Identificación de fase (verdadero/falso)

```
metadata:
  materia: "historia_profunda"
  tema: "fases_lunares"
  nivel: "basico"
  tags: ["astronomia", "luna"]

respuesta: falso
tipo: vf

enunciado: "Si la Luna tiene un 100% de iluminación visible, se trata de una Luna Nueva."

explicacion: |
  Falso: 100% de iluminación visible corresponde a la Luna Llena, no a la Luna Nueva (que es 0%).
```
