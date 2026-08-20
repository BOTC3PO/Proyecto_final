# Química — Tabla periódica y tendencias (cuestionario, 20 preguntas VBLang)

> Tema: `QF`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado por lotes con LM Studio (Gemma) y corregido a mano.
> Bug de esta tanda: `uno_de(...)` llamado dos veces por separado (de
> nuevo) en una pregunta que además no necesitaba ningún sorteo (la
> respuesta correcta es siempre la misma), e indexado `opciones[idx][0]`
> sobre un array de strings — eso agarra el primer *carácter* del
> string, no el string completo.

---

### 1 — Niveles de energía en periodos

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["tabla_periodica", "periodos"]

respuesta: verdadero
tipo: vf

enunciado: "Los periodos (filas) de la tabla periódica indican el número de niveles de energía ocupados por los electrones de un átomo."

explicacion: |
  Correcto. El número de fila (periodo) indica la cantidad de niveles de energía que tiene la configuración electrónica del elemento.
```

### 2 — Electrones de valencia y grupos

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["tabla_periodica", "grupos"]

respuesta: verdadero
tipo: vf

enunciado: "Los elementos que pertenecen al mismo grupo (columna) comparten la misma cantidad de electrones en su capa de valencia."

explicacion: |
  Correcto. Compartir la cantidad de electrones de valencia es lo que da propiedades químicas similares a los elementos de un mismo grupo.
```

### 3 — Criterio de ordenación moderno

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["tabla_periodica", "orden"]

respuesta: "número atómico creciente"
tipo: mc
opciones_explicitas: ["número atómico creciente", "masa atómica creciente", "orden alfabético", "año de descubrimiento"]

enunciado: "La tabla periódica moderna ordena los elementos según su..."

explicacion: |
  La tabla periódica moderna se organiza en orden creciente de número atómico (Z), la cantidad de protones — no por masa, como se ordenaba antes de conocerse el protón.
```

### 4 — Nomenclatura de las filas

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["tabla_periodica", "nombres"]

respuesta: "periodos"
tipo: completar
respuestas_validas:
  - "periodos"

enunciado: "Las filas horizontales de la tabla periódica se llaman ___."

explicacion: |
  Las filas horizontales se denominan periodos.
```

### 5 — Nomenclatura de las columnas

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["tabla_periodica", "nombres"]

respuesta: "grupos"
tipo: completar
respuestas_validas:
  - "grupos"

enunciado: "Las columnas verticales de la tabla periódica se llaman ___."

explicacion: |
  Las columnas verticales se denominan grupos o familias.
```

### 6 — Tendencia electrónica de metales y no metales

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["elementos", "electrones"]

variables:
  escenario: uno_de([["metal", "perder electrones (forma cationes)"], ["no metal", "ganar electrones (forma aniones)"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["perder electrones (forma cationes)", "ganar electrones (forma aniones)"]

enunciado: "Un elemento de tipo {escenario[0]} tiene la tendencia a..."

explicacion: |
  Los metales tienden a perder electrones y formar cationes. Los no metales tienden a ganar electrones y formar aniones.
```

### 7 — Propiedades de los metaloides

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["metaloides"]

respuesta: verdadero
tipo: vf

enunciado: "Los metaloides tienen propiedades intermedias entre metales y no metales."

explicacion: |
  Los metaloides (como el silicio o el germanio) comparten características físicas y químicas con metales y no metales.
```

### 8 — El grupo 18

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["gases_nobles"]

respuesta: "nobles"
tipo: completar
respuestas_validas:
  - "nobles"

enunciado: "El grupo 18 de la tabla periódica son los gases ___."

explicacion: |
  El grupo 18 está formado por los gases nobles (helio, neón, argón, etc.).
```

### 9 — Reactividad de los gases nobles

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["gases_nobles", "reactividad"]

respuesta: falso
tipo: vf

enunciado: "Los gases nobles son muy reactivos porque tienen la capa de valencia incompleta."

explicacion: |
  Falso. Los gases nobles son poco reactivos (inertes) justamente porque su capa de valencia está completa.
```

### 10 — Ubicación de los no metales

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["ubicacion", "tabla_periodica"]

respuesta: "arriba a la derecha"
tipo: mc
opciones_explicitas: ["arriba a la derecha", "a la izquierda", "en el centro", "abajo a la izquierda"]

enunciado: "¿Dónde están ubicados los no metales en la tabla periódica?"

explicacion: |
  Los metales ocupan la mayor parte de la tabla (izquierda y centro); los no metales se ubican en la parte superior derecha.
```

### 11 — Radio atómico al bajar en un grupo

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["radio_atomico", "grupos"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene igual"]

enunciado: "Al bajar en un grupo de la tabla periódica, el radio atómico..."

explicacion: |
  Al bajar en un grupo se agrega un nuevo nivel de energía por cada fila, lo que aumenta el tamaño del átomo.
```

### 12 — Radio atómico al avanzar en un periodo

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["radio_atomico", "periodos"]

respuesta: "disminuye"
tipo: mc
opciones_explicitas: ["disminuye", "aumenta", "se mantiene igual"]

enunciado: "Al avanzar en un periodo de izquierda a derecha, el radio atómico..."

explicacion: |
  Al aumentar el número atómico en el mismo periodo, la carga nuclear efectiva aumenta y atrae los electrones con más fuerza, reduciendo el radio.
```

### 13 — Energía de ionización al bajar en un grupo

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "intermedio"
  tags: ["energia_ionizacion", "grupos"]

respuesta: "disminuye"
tipo: mc
opciones_explicitas: ["disminuye", "aumenta", "se mantiene igual"]

enunciado: "Al bajar en un grupo de la tabla periódica, la energía de ionización..."

explicacion: |
  Al bajar en un grupo, el electrón externo está en un nivel más lejano y menos atraído por el núcleo, así que cuesta menos energía sacarlo.
```

### 14 — Electronegatividad al avanzar en un periodo

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "intermedio"
  tags: ["electronegatividad", "periodos"]

respuesta: "aumenta"
tipo: mc
opciones_explicitas: ["aumenta", "disminuye", "se mantiene igual"]

enunciado: "Al avanzar en un periodo de izquierda a derecha, la electronegatividad..."

explicacion: |
  La mayor carga nuclear efectiva en el mismo nivel de energía aumenta la capacidad del núcleo de atraer electrones de un enlace.
```

### 15 — El elemento más electronegativo

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["electronegatividad", "fluor"]

respuesta: verdadero
tipo: vf

enunciado: "El flúor (F) es el elemento con mayor electronegatividad de toda la tabla periódica."

explicacion: |
  El flúor es el más electronegativo de la tabla por su alta carga nuclear efectiva combinada con su radio atómico chico.
```

### 16 — Por qué disminuye el radio en un periodo

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "intermedio"
  tags: ["radio_atomico", "periodo"]

respuesta: "El radio disminuye porque el núcleo tiene más protones y atrae con más fuerza a los electrones de valencia"
tipo: mc
opciones_explicitas: ["El radio aumenta porque hay menos electrones", "El radio disminuye porque el núcleo tiene más protones y atrae con más fuerza a los electrones de valencia", "El radio disminuye porque los electrones se alejan del núcleo", "El radio aumenta porque aumenta el número de niveles de energía"]

enunciado: "¿Por qué el radio atómico disminuye al avanzar de izquierda a derecha en un mismo periodo?"

explicacion: |
  El número atómico aumenta (más protones) sin sumar niveles de energía nuevos: la carga nuclear efectiva sube y atrae a los electrones con más fuerza, achicando el átomo.
```

### 17 — Por qué aumenta el radio en un grupo

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["radio_atomico", "grupo"]

respuesta: "nuevo"
tipo: completar
respuestas_validas:
  - "nuevo"

enunciado: "Al bajar en un grupo de la tabla periódica se agrega un nivel de energía ___, lo que hace que el radio atómico aumente."

explicacion: |
  Cada vez que se baja un grupo se completa una capa electrónica más, agregando un nuevo nivel de energía y aumentando el tamaño del átomo.
```

### 18 — Electrones de valencia dentro de un grupo

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["electrones_valencia", "grupo"]

respuesta: verdadero
tipo: vf

enunciado: "Dos elementos situados en el mismo grupo de la tabla periódica tienen la misma cantidad de electrones de valencia."

explicacion: |
  Los elementos de un mismo grupo comparten la misma configuración en su capa más externa, así que tienen el mismo número de electrones de valencia.
```

### 19 — Definición de energía de ionización

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "intermedio"
  tags: ["energia_ionizacion", "propiedades"]

respuesta: "Energía de ionización"
tipo: mc
opciones_explicitas: ["Electronegatividad", "Energía de ionización", "Radio atómico", "Afinidad electrónica"]

enunciado: "¿Cuál es la propiedad que mide la energía necesaria para arrancarle un electrón a un átomo en estado gaseoso?"

explicacion: |
  La energía de ionización mide el costo de remover un electrón. La electronegatividad mide la tendencia a atraer electrones en un enlace; la afinidad electrónica, la energía liberada al captar uno.
```

### 20 — Metales vs. no metales: conductividad

```
metadata:
  materia: "quimica"
  tema: "tabla_periodica_tendencias"
  nivel: "basico"
  tags: ["metales", "conductividad"]

respuesta: verdadero
tipo: vf

enunciado: "Los metales son en general buenos conductores eléctricos, mientras que los no metales suelen ser malos conductores."

explicacion: |
  Los electrones de valencia de los metales están débilmente unidos y se mueven con facilidad, lo que permite la conducción eléctrica. En los no metales, los electrones están más fuertemente retenidos.
```
