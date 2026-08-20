# Lengua — Signos de puntuación (cuestionario, 20 preguntas VBLang)

> Tema: `P4D`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — La puntuación cambia el sentido

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "basico"
  tags: ["puntuacion", "sentido"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Vamos a comer, niños\" (invitación) y \"vamos a comer niños\" (sin coma) tienen sentidos completamente distintos por la sola presencia o ausencia de una coma."

pasos:
  - "La coma de vocativo separa a quién se dirige la oración del resto."

explicacion: |
  Verdadero: es el ejemplo clásico de cómo la puntuación cambia el
  significado, no sólo el estilo.
```

### 2 — Coma de enumeración

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "basico"
  tags: ["coma", "enumeracion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En \"Compré pan, leche, huevos y manteca\", las comas separan los elementos de una enumeración, sin poner coma antes del \"y\" final."

pasos:
  - "La regla general del español no usa coma antes de \"y\" en una enumeración simple."

explicacion: |
  Verdadero: es el uso más común de la coma, para listar elementos.
```

### 3 — Coma de aclaración

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["coma", "aclaracion"]

variables:
  n: uno_de([1, 1])

respuesta: "coma de aclaración"
tipo: mc
opciones_explicitas: ["coma de aclaración", "coma de enumeración", "coma de vocativo"]

enunciado: "En \"Mi hermano, que vive en Rosario, viene este fin de semana\", las comas que encierran \"que vive en Rosario\" son de tipo..."

pasos:
  - "Encierran información adicional no esencial para el sentido básico de la oración."

explicacion: |
  La coma de aclaración encierra información adicional, que se podría
  quitar sin romper la oración.
```

### 4 — Coma de vocativo

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["coma", "vocativo"]

variables:
  n: uno_de([1, 1])

respuesta: "coma de vocativo"
tipo: mc
opciones_explicitas: ["coma de vocativo", "coma de enumeración", "coma de aclaración"]

enunciado: "En \"Juan, vení un segundo\", la coma que separa \"Juan\" del resto es de tipo..."

pasos:
  - "Separa a quién se dirige la oración (el vocativo) del resto del enunciado."

explicacion: |
  La coma de vocativo separa el nombre de la persona a la que se le
  habla directamente.
```

### 5 — Coma antes de conectores adversativos

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["coma", "conectores"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Se coloca coma antes de conectores adversativos como \"pero\", \"sino\" y \"aunque\": \"Estudió, pero no aprobó\"."

pasos:
  - "Ver `../oracion-compuesta-coordinacion-y-subordinacion/`: es la coma que antecede a la coordinación adversativa."

explicacion: |
  Verdadero: es una regla fija de puntuación para estos conectores.
```

### 6 — Punto y seguido vs. punto y aparte

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "basico"
  tags: ["punto"]

variables:
  usos: ["separar oraciones dentro del mismo párrafo", "separar párrafos, marcando cambio de idea principal"]
  tipos: ["punto y seguido", "punto y aparte"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["punto y seguido", "punto y aparte", "punto final"]

enunciado: "El uso de \"{usos[idx]}\" corresponde a..."

pasos:
  - "Punto y seguido queda dentro del mismo párrafo; punto y aparte inicia uno nuevo."

explicacion: |
  El tipo de punto usado depende de si se cambia de párrafo o se
  sigue en el mismo.
```

### 7 — Punto y aparte marca cambio de idea principal

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["punto", "idea_principal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El punto y aparte suele marcar que la idea principal del texto cambia, iniciando un nuevo párrafo."

pasos:
  - "Ver `../comprension-idea-principal/`: cada párrafo suele desarrollar una idea principal distinta."

explicacion: |
  Verdadero: la división en párrafos (marcada por punto y aparte)
  suele corresponder a un cambio de idea principal.
```

### 8 — Uso del punto y coma

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["punto_y_coma"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El punto y coma se usa para separar elementos de una enumeración que ya contienen comas internamente, o para unir dos oraciones muy relacionadas sin conector."

pasos:
  - "\"Juan estudia; María trabaja\" es un ejemplo de unión de dos oraciones relacionadas sin conector explícito."

explicacion: |
  Verdadero: son los dos usos principales del punto y coma en
  español.
```

### 9 — Uso de los dos puntos

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["dos_puntos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Los dos puntos anuncian lo que sigue: una enumeración, una cita textual, o una explicación/consecuencia de lo anterior."

pasos:
  - "\"Faltaban tres cosas: pan, leche y manteca\" anuncia la enumeración que sigue."

explicacion: |
  Verdadero: es la función central de los dos puntos en español.
```

### 10 — Signos de interrogación se abren y cierran

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "basico"
  tags: ["interrogacion", "exclamacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En español, los signos de interrogación y exclamación se abren y se cierran (¿...?, ¡...!), a diferencia del inglés, que sólo los cierra."

pasos:
  - "Ver `../oraciones-negativas-e-interrogativas/`: es una diferencia ortográfica propia del español."

explicacion: |
  Verdadero: el uso del signo de apertura es obligatorio en español,
  a diferencia de otros idiomas.
```

### 11 — Uso de las comillas

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["comillas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las comillas se usan para citas textuales o para señalar que una palabra se usa en sentido especial o irónico."

pasos:
  - "Ambos usos marcan que ese fragmento no es \"habla directa\" del propio autor en su sentido literal habitual."

explicacion: |
  Verdadero: son los dos usos principales de las comillas.
```

### 12 — Raya de diálogo en narrativa

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["raya", "genero_narrativo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La raya o guion largo se usa para introducir cada intervención de un diálogo en un texto narrativo."

pasos:
  - "Ver `../genero-narrativo/`: es distinto de las acotaciones entre paréntesis del género dramático."

explicacion: |
  Verdadero: la raya de diálogo es la marca típica de las
  intervenciones de personajes dentro de la prosa narrativa.
```

### 13 — Diferenciar raya de diálogo de acotación dramática

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "avanzado"
  tags: ["raya", "genero_dramatico", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La raya de diálogo narrativo y las acotaciones entre paréntesis del género dramático cumplen exactamente la misma función."

pasos:
  - "Ver `../genero-dramatico/`: la raya introduce lo que dice un personaje en prosa; la acotación indica gestos/tono, no es diálogo."

explicacion: |
  Falso: son marcas distintas para funciones distintas, propias de
  géneros distintos (narrativo vs. dramático).
```

### 14 — Coma que cambia el sentido: ejemplo clásico

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["coma", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "vamos a comer, abuela"
tipo: mc
opciones_explicitas: ["vamos a comer, abuela", "vamos a comer abuela"]

enunciado: "¿Cuál de estas dos versiones usa correctamente la coma de vocativo para invitar a la abuela a comer (sin comérsela)?"

pasos:
  - "La coma de vocativo separa el nombre de la persona a la que se dirige la oración."

explicacion: |
  Sin la coma, \"abuela\" pasa a leerse como objeto directo del
  verbo comer, cambiando radicalmente el sentido.
```

### 15 — El punto y coma no es intercambiable con la coma

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "avanzado"
  tags: ["punto_y_coma", "coma", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El punto y coma y la coma son intercambiables en cualquier contexto, sin diferencia real de uso."

pasos:
  - "El punto y coma marca una pausa mayor que la coma, y se usa en casos específicos (enumeraciones con comas internas, unión de oraciones relacionadas)."

explicacion: |
  Falso: cada signo tiene reglas de uso propias, no son
  intercambiables libremente.
```

### 16 — Reconocer el uso correcto de dos puntos

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["dos_puntos", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "Faltaban tres cosas: pan, leche y manteca"
tipo: mc
opciones_explicitas: ["Faltaban tres cosas: pan, leche y manteca", "Faltaban tres cosas, pan, leche y manteca"]

enunciado: "¿Cuál de estas dos versiones usa correctamente los dos puntos para anunciar la enumeración que sigue?"

pasos:
  - "Los dos puntos anuncian explícitamente que a continuación viene la enumeración prometida."

explicacion: |
  Los dos puntos son el signo correcto para anunciar una enumeración,
  no una coma.
```

### 17 — Puntuar una oración larga con varios recursos

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "avanzado"
  tags: ["puntuacion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "Juan, mi mejor amigo, estudió mucho, pero no aprobó el examen."
tipo: mc
opciones_explicitas: ["Juan, mi mejor amigo, estudió mucho, pero no aprobó el examen.", "Juan mi mejor amigo estudió mucho pero no aprobó el examen."]

enunciado: "¿Cuál versión puntúa correctamente combinando coma de aclaración (\"mi mejor amigo\") y coma antes de conector adversativo (\"pero\")?"

pasos:
  - "Ambas comas cumplen funciones distintas: aclaración y antes de \"pero\"."

explicacion: |
  La combinación correcta de ambos usos de coma hace que la oración
  larga se lea sin ambigüedad.
```

### 18 — Ordenar el proceso para puntuar un párrafo

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "intermedio"
  tags: ["puntuacion", "metodo"]

enunciado: "Ordená los pasos para revisar la puntuación de un párrafo propio."
tipo: ordenar
opciones_explicitas:
  - "Revisar si hay enumeraciones, aclaraciones o vocativos que necesiten coma"
  - "Revisar si hay conectores adversativos que necesiten coma antes"
  - "Decidir dónde termina cada oración (punto y seguido) y cada párrafo (punto y aparte)"
  - "Revisar si hace falta punto y coma o dos puntos en algún tramo específico"
respuesta_orden: ["Revisar si hay enumeraciones, aclaraciones o vocativos que necesiten coma", "Revisar si hay conectores adversativos que necesiten coma antes", "Decidir dónde termina cada oración (punto y seguido) y cada párrafo (punto y aparte)", "Revisar si hace falta punto y coma o dos puntos en algún tramo específico"]
explicacion: |
  El proceso va de los usos más frecuentes de la coma a la
  organización general en oraciones y párrafos, y termina con los
  signos más específicos.
```

### 19 — Puntuación como prerrequisito de producción escrita compleja

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "avanzado"
  tags: ["puntuacion", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Sin dominar coma, punto, punto y coma y dos puntos, combinar oraciones largas y complejas en un texto se vuelve ilegible, aunque la gramática de cada oración individual sea correcta."

pasos:
  - "Ver `../produccion-escrita-compleja/`: la puntuación es lo que hace legible un texto con oraciones compuestas y varias ideas encadenadas."

explicacion: |
  Verdadero: por eso signos de puntuación es prerrequisito directo de
  producción escrita compleja, el siguiente tema de la cadena.
```

### 20 — Aplicación: evitar ambigüedad con buena puntuación

```
metadata:
  materia: "lengua"
  tema: "signos_de_puntuacion"
  nivel: "avanzado"
  tags: ["puntuacion", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al escribir un mensaje importante (un mail formal, una consigna de examen), revisar la puntuación es tan necesario como revisar la ortografía, porque ambas pueden generar ambigüedad si están mal."

pasos:
  - "Una coma mal puesta puede cambiar completamente lo que se está pidiendo o afirmando."

explicacion: |
  Verdadero: la puntuación es una herramienta práctica de precisión
  comunicativa, no un detalle decorativo.
```
