# Examen jefe — [PENDIENTE #652]

> Logro #652. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **106 preguntas totales** en 5/5 secciones.

---

## Sección: comprension-idea-principal (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "explicita"]

variables:
  n: uno_de([1, 1])

respuesta: "Los perros son animales muy sociables"
tipo: mc
opciones_explicitas: ["Los perros son animales muy sociables", "Los perros viven en manada", "Los perros reconocen emociones"]

enunciado: "\"Los perros son animales muy sociables. Viven en manada en estado salvaje y reconocen las emociones de las personas.\" ¿Cuál es la idea principal?"

pasos:
  - "La primera oración suele anunciar la idea principal; el resto la desarrolla con ejemplos."

explicacion: |
  \"Viven en manada\" y \"reconocen emociones\" son ideas secundarias
  que apoyan la idea principal (que son sociables), no la reemplazan.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "tema"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El tema de un texto (\"los perros\") es lo mismo que su idea principal."

pasos:
  - "El tema es una palabra o frase corta; la idea principal es una oración completa con lo que se dice sobre ese tema."

explicacion: |
  Falso: el tema es de qué habla el texto; la idea principal es QUÉ
  dice sobre ese tema.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "ideas_secundarias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las ideas secundarias explican, ejemplifican o dan detalles sobre la idea principal, pero no son el mensaje central del párrafo."

pasos:
  - "Un párrafo tiene una sola idea principal y puede tener varias ideas secundarias."

explicacion: |
  Verdadero: las ideas secundarias apoyan, no reemplazan, la idea
  principal.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "ubicacion"]

variables:
  n: uno_de([1, 1])

respuesta: "El reciclaje es una práctica clave para cuidar el planeta"
tipo: mc
opciones_explicitas: ["El reciclaje es una práctica clave para cuidar el planeta", "El vidrio se recicla infinitas veces", "El papel tarda semanas en descomponerse"]

enunciado: "\"El vidrio se puede reciclar infinitas veces sin perder calidad. El papel, en cambio, sólo unas pocas veces. En definitiva, el reciclaje es una práctica clave para cuidar el planeta.\" ¿Cuál es la idea principal?"

pasos:
  - "Cuando el párrafo acumula datos y termina con una conclusión general, la idea principal suele estar al final."

explicacion: |
  Los datos sobre vidrio y papel son ejemplos que llevan a la
  conclusión final, que es la idea principal.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "avanzado"
  tags: ["idea_principal", "implicita"]

variables:
  n: uno_de([1, 1])

respuesta: "El personaje estaba muy nervioso"
tipo: mc
opciones_explicitas: ["El personaje estaba muy nervioso", "El personaje tenía las manos frías", "El personaje miraba el reloj"]

enunciado: "\"Le temblaban las manos. Miraba el reloj cada dos minutos. No podía quedarse sentado.\" Ninguna oración lo dice literalmente, pero ¿cuál es la idea principal implícita?"

pasos:
  - "Cuando ninguna oración resume el párrafo, hay que inferir la idea general a partir de todos los detalles juntos."

explicacion: |
  Los tres detalles (manos que tiemblan, mirar el reloj, no poder
  quedarse quieto) son síntomas de nerviosismo — la idea principal
  hay que deducirla, no está escrita literal.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "resumen"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si se tuviera que resumir un texto en una sola oración, esa oración sería (o se parecería mucho a) su idea principal."

pasos:
  - "Resumir obliga a distinguir lo esencial (idea principal) de los detalles (ideas secundarias)."

explicacion: |
  Verdadero: es la estrategia práctica más directa para verificar
  si se identificó bien la idea principal.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "estructura"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un párrafo suele tener varias ideas principales, una por cada oración."

pasos:
  - "Un párrafo bien construido gira en torno a una sola idea central, con oraciones secundarias que la apoyan."

explicacion: |
  Falso: lo habitual es una idea principal por párrafo, acompañada de
  varias ideas secundarias.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "detalles"]

variables:
  n: uno_de([1, 1])

respuesta: "El uso de energías renovables creció mucho en la última década"
tipo: mc
opciones_explicitas: ["El uso de energías renovables creció mucho en la última década", "La energía solar usa paneles fotovoltaicos", "La energía eólica usa turbinas de viento"]

enunciado: "\"La energía solar usa paneles fotovoltaicos. La eólica usa turbinas de viento. El uso de energías renovables creció mucho en la última década.\" ¿Cuál es la idea principal?"

pasos:
  - "Los detalles técnicos (paneles, turbinas) son ejemplos de energías renovables; la afirmación general sobre su crecimiento es la idea principal."

explicacion: |
  Los detalles sobre cómo funciona cada energía son ideas
  secundarias que ilustran la idea principal (el crecimiento del
  uso).
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "estrategia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Conviene leer el párrafo completo antes de decidir cuál es la idea principal, en vez de asumir que siempre es la primera oración."

pasos:
  - "La idea principal puede estar al final o ser implícita; asumir que siempre está al inicio lleva a errores."

explicacion: |
  Verdadero: aunque el inicio es el lugar más común, no es el único,
  así que hay que confirmar leyendo todo el párrafo.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "titulo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El título de un texto suele dar una pista sobre el tema, pero no reemplaza la necesidad de leer el párrafo para encontrar la idea principal completa."

pasos:
  - "El título anticipa el tema (una palabra/frase corta), pero la idea principal es una oración completa que hay que construir leyendo."

explicacion: |
  Verdadero: el título ayuda a ubicar el tema, pero la idea principal
  necesita leer el desarrollo del párrafo.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "narrativo"]

variables:
  n: uno_de([1, 1])

respuesta: "La ciudad se quedó sin luz durante toda la noche"
tipo: mc
opciones_explicitas: ["La ciudad se quedó sin luz durante toda la noche", "Los vecinos salieron con velas", "Se escuchó un ruido fuerte en el barrio"]

enunciado: "\"Se escuchó un ruido fuerte. Las luces se apagaron de golpe. Los vecinos salieron con velas a la calle. La ciudad se quedó sin luz durante toda la noche.\" ¿Cuál es la idea principal?"

pasos:
  - "El ruido, las velas y el apagón son los eventos que llevan a la idea central del corte de luz prolongado."

explicacion: |
  La idea principal resume el hecho central (el corte de luz); los
  demás detalles son la secuencia de eventos que lo acompañan.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "ejemplos"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Un ejemplo dado dentro de un párrafo (\"por ejemplo, las manzanas y las peras\") suele ser la idea principal del párrafo."

pasos:
  - "Los ejemplos ilustran una afirmación más general (la idea principal), no la constituyen."

explicacion: |
  Falso: los ejemplos son ideas secundarias que apoyan o ilustran la
  idea principal, casi nunca son la idea principal en sí.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "expositivo"]

variables:
  n: uno_de([1, 1])

respuesta: "El agua es esencial para la vida en la Tierra"
tipo: mc
opciones_explicitas: ["El agua es esencial para la vida en la Tierra", "El agua cubre el 70% de la superficie terrestre", "El agua se congela a 0°C"]

enunciado: "\"El agua es esencial para la vida en la Tierra. Cubre el 70% de la superficie terrestre y forma parte de todos los seres vivos.\" ¿Cuál es la idea principal?"

pasos:
  - "La primera oración anuncia la idea general; los datos que siguen la respaldan."

explicacion: |
  Los datos sobre el porcentaje de superficie y los seres vivos
  apoyan la afirmación inicial, que es la idea principal.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "avanzado"
  tags: ["idea_principal", "ambiguedad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuando un párrafo no tiene una oración que resuma explícitamente la idea principal, igual se puede (y se debe) inferir una a partir del conjunto de oraciones."

pasos:
  - "La idea implícita se construye combinando todos los detalles del párrafo, no citando una sola oración."

explicacion: |
  Verdadero: la ausencia de una oración-resumen no significa que no
  haya idea principal, sólo que hay que inferirla.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "avanzado"
  tags: ["idea_principal", "objetividad"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La idea principal de un texto puede variar según lo que a cada lector le parezca más interesante del párrafo."

pasos:
  - "La idea principal es una propiedad del texto (lo que el autor quiso comunicar como central), no una preferencia subjetiva del lector."

explicacion: |
  Falso: aunque distintos lectores destaquen distintos detalles, la
  idea principal es la que el párrafo desarrolla como eje central,
  no una elección personal.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: "El ejercicio regular mejora la salud física y mental"
tipo: mc
opciones_explicitas: ["El ejercicio regular mejora la salud física y mental", "Correr 30 minutos quema calorías", "El yoga reduce el estrés"]

enunciado: "\"Correr 30 minutos quema calorías. El yoga reduce el estrés. En general, el ejercicio regular mejora la salud física y mental.\" ¿Cuál es la idea principal?"

pasos:
  - "Correr y el yoga son ejemplos concretos de ejercicio que respaldan la afirmación general."

explicacion: |
  La afirmación general que engloba a los dos ejemplos (correr, yoga)
  es la idea principal.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "texto_largo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En un texto de varios párrafos, cada párrafo puede tener su propia idea principal, distinta de las de los otros párrafos."

pasos:
  - "El texto completo tiene un tema general, pero cada párrafo suele desarrollar un aspecto distinto de ese tema."

explicacion: |
  Verdadero: identificar la idea principal de CADA párrafo es el
  primer paso para armar luego un resumen de todo el texto.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "basico"
  tags: ["idea_principal", "titulo"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El título de un texto siempre coincide exactamente con la idea principal del primer párrafo."

pasos:
  - "El título suele ser más corto y general que la idea principal, que es una oración completa desarrollada en el texto."

explicacion: |
  Falso: el título anticipa el tema, pero la idea principal es más
  específica y hay que construirla leyendo el párrafo.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "intermedio"
  tags: ["idea_principal", "metodo"]

enunciado: "Ordená los pasos de la estrategia para encontrar la idea principal de un párrafo."
tipo: ordenar
opciones_explicitas:
  - "Leer el párrafo completo"
  - "Preguntarse de qué trata principalmente"
  - "Distinguir esa respuesta de los detalles que sólo la apoyan"
  - "Si no está escrita literal, resumirla con las propias palabras"
respuesta_orden: ["Leer el párrafo completo", "Preguntarse de qué trata principalmente", "Distinguir esa respuesta de los detalles que sólo la apoyan", "Si no está escrita literal, resumirla con las propias palabras"]
explicacion: |
  El orden va de la lectura completa a la identificación, pasando por
  descartar detalles, hasta inferir cuando no está escrita literal.
```

```
metadata:
  materia: "lengua"
  tema: "comprension_idea_principal"
  nivel: "avanzado"
  tags: ["idea_principal", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Identificar bien la idea principal es la base para poder resumir un texto y también para clasificar de qué tipo textual se trata (narrativo, expositivo, argumentativo...)."

pasos:
  - "Sin saber de qué trata un texto, no se puede decidir cómo está organizado ni para qué fue escrito."

explicacion: |
  Verdadero: por eso este tema es prerrequisito directo de \"tipos
  textuales\", el siguiente módulo de la currícula.
```

## Sección: signos-de-puntuacion (20 preguntas)

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

## Sección: tecnicas-de-estudio-resumen-y-organizadores-graficos (23 preguntas)

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["resumen", "errores_comunes"]

respuesta: falso
tipo: vf

enunciado: "Un buen resumen se logra copiando y pegando las frases más importantes del libro original."

explicacion: |
  Falso. Un resumen efectivo requiere interpretar y parafrasear. Copiar y pegar no demuestra comprensión ni procesamiento cognitivo de la información.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "concision"]

variables:
  palabras_originales: random(200, 500)
  porcentaje_reduccion: uno_de([0.3, 0.4, 0.5])
  palabras_nuevas: redondear(palabras_originales * (1 - porcentaje_reduccion), 0)

respuesta: palabras_nuevas
tipo: input

enunciado: "Si un texto tiene {palabras_originales} palabras y quieres reducirlo en un {redondear(porcentaje_reduccion * 100, 0)}% manteniendo el sentido, ¿cuántas palabras aproximadamente debería tener el resumen?"

explicacion: |
  La claridad y la concisión son aliadas. Si reduces el texto en un X%, el nuevo tamaño es el original menos esa fracción. Esto ayuda a eliminar lo redundante.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["resumen", "fidelidad"]

respuesta: verdadero
tipo: vf

enunciado: "Es crucial mantener la fidelidad al significado original del texto, sin añadir opiniones personales ni alterar el sentido."

explicacion: |
  La fidelidad es crucial. Un resumen debe reflejar el contenido del autor, no la interpretación subjetiva ni opiniones ajenas al texto original.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "palabras_clave"]

variables:
  total_palabras: random(100, 300)
  porcentaje_clave: 0.05
  num_claves: redondear(total_palabras * porcentaje_clave, 0)

respuesta: num_claves
tipo: input

enunciado: "Si un texto tiene {total_palabras} palabras y decides subrayar solo el {redondear(porcentaje_clave * 100, 0)}% como palabras clave, ¿cuántas palabras clave seleccionarías?"

explicacion: |
  Subrayar solo las palabras clave ayuda a filtrar lo esencial. Calcular un porcentaje pequeño del total facilita la identificación de lo central.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "avanzado"
  tags: ["beneficios", "autonomia"]

respuesta: verdadero
tipo: vf

enunciado: "Dominar el resumen y los organizadores gráficos te da autonomía para estudiar cualquier contenido, no solo literatura."

explicacion: |
  Estas son estrategias cognitivas universales. Dominarlas permite procesar información densa y abstracta en cualquier área, desde gramática hasta lingüística.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["planificacion", "tiempo"]

variables:
  horas_lectura: random(2, 5)
  factor_procesamiento: 0.5
  horas_resumen: redondear(horas_lectura * factor_procesamiento, 1)

respuesta: horas_resumen
tipo: input

enunciado: "Si dedicas {horas_lectura} horas a leer y procesar un texto, y estimas que el resumen y la organización visual toman la mitad de ese tiempo, ¿cuántas horas invertirás en la técnica?"

explicacion: |
  Las técnicas de estudio requieren tiempo activo. Procesar, filtrar y organizar es una inversión que reduce el tiempo de memorización posterior.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "literatura"]

respuesta: verdadero
tipo: vf

enunciado: "Un buen resumen de un cuento debe captar la trama y el tema, pero no necesita describir cada personaje con detalle."

explicacion: |
  La fidelidad al significado original es crucial, pero la concisión permite omitir detalles secundarios como descripciones extensas de personajes menores.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "estructura"]

variables:
  parrafos: random(3, 6)
  ideas_por_parrafo: 1
  total_ideas: parrafos * ideas_por_parrafo

respuesta: total_ideas
tipo: input

enunciado: "Si un texto tiene {parrafos} párrafos y extraes una idea principal de cada uno, ¿cuántas ideas principales tendrás en total para tu resumen?"

explicacion: |
  Identificar la idea principal de cada sección es clave. Esto crea una estructura base para el resumen y el organizador gráfico.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "avanzado"
  tags: ["teoria", "cognicion"]

respuesta: verdadero
tipo: vf

enunciado: "El resumen y los organizadores gráficos son estrategias cognitivas que obligan a procesar la información, no simples atajos."

explicacion: |
  Estas herramientas fuerzan al estudiante a filtrar lo esencial y darle orden lógico, evitando perderse en detalles irrelevantes.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "compresion"]

variables:
  original: random(1000, 2000)
  ratio: 0.1
  comprimido: redondear(original * ratio, 0)

respuesta: comprimido
tipo: input

enunciado: "Si un ensayo tiene {original} palabras y lo comprimes a una décima parte (10%) de su tamaño, ¿cuántas palabras tendrá el resumen?"

explicacion: |
  La concisión es vital. Reducir significativamente el volumen de texto obliga a seleccionar solo lo esencial, mejorando la retención.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["organizadores_graficos", "visualizacion"]

respuesta: verdadero
tipo: vf

enunciado: "Los organizadores gráficos permiten visualizar las relaciones entre conceptos que en un texto lineal pueden ser difíciles de seguir."

explicacion: |
  Al mostrar jerarquías y conexiones, estos organizadores hacen explícitas las relaciones lógicas entre ideas, géneros o reglas gramaticales.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["estudio", "repeticion"]

variables:
  sesiones: random(3, 5)
  dias_entre: 2
  dias_totales: (sesiones - 1) * dias_entre

respuesta: dias_totales
tipo: input

enunciado: "Si estudias el resumen en {sesiones} sesiones separadas por {dias_entre} días, ¿cuántos días transcurren entre la primera y la última sesión?"

explicacion: |
  La repetición espaciada ayuda a consolidar la memoria. Organizar el estudio en sesiones separadas mejora la retención a largo plazo.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["resumen", "calidad"]

respuesta: verdadero
tipo: vf

enunciado: "La claridad y la concisión son las mejores aliadas al hacer un resumen; si puedes decir lo mismo con menos palabras, vas bien."

explicacion: |
  La claridad facilita la comprensión y la concisión ahorra tiempo de estudio. Ambos son indicadores de un resumen efectivo.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["resumen", "metacognicion"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Un buen resumen consiste en copiar y pegar las frases más importantes del libro original para asegurar la fidelidad textual."

explicacion: |
  Falso. Un resumen efectivo requiere interpretar y usar tu propio vocabulario. Copiar y pegar no demuestra comprensión ni procesamiento cognitivo.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["estudio", "estrategias"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Estudiar lengua se trata principalmente de memorizar fechas y definiciones de memoria, sin necesidad de comprender estructuras."

explicacion: |
  Falso. La lengua requiere comprender estructuras, analizar textos y conectar ideas. La memorización mecánica es insuficiente.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["beneficios", "aprendizaje"]

variables:
  afirmacion: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Dominar el resumen y los organizadores gráficos te da autonomía para estudiar cualquier contenido, incluso para exámenes de Comprensión Lectora."

explicacion: |
  Verdadero. Estas son estrategias cognitivas transferibles que permiten abordar cualquier texto con eficacia.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["mitos", "estudio"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Los organizadores gráficos son 'atajos' para evitar leer el texto completo."

explicacion: |
  Falso. Son estrategias cognitivas que obligan a procesar la información. No sustituyen la lectura, la complementan y profundizan.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "objetividad"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Es aceptable añadir opiniones personales al resumen si estas enriquecen la interpretación del texto."

explicacion: |
  Falso. El resumen debe mantener la fidelidad al significado original. Las opiniones personales pertenecen a un ensayo o crítica, no al resumen.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["contexto", "importancia"]

variables:
  afirmacion: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "En lengua, la información suele ser densa y abstracta, por lo que las técnicas de estudio son fundamentales."

explicacion: |
  Verdadero. Gramática, literatura y lingüística requieren estrategias para filtrar lo esencial y dar orden lógico.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["resumen", "miedo_comun"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Hacer un resumen implica perder los detalles importantes de la trama o el argumento."

explicacion: |
  Falso. Un buen resumen elimina lo redundante y secundario, pero conserva la estructura y el sentido esencial.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["organizadores_graficos", "estructura"]

variables:
  afirmacion: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Los organizadores gráficos dan un orden lógico a la información, ayudando a ver cómo se relacionan los conceptos."

explicacion: |
  Verdadero. La visualización jerárquica o relacional ayuda a comprender la estructura subyacente del conocimiento.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "intermedio"
  tags: ["resumen", "procesamiento"]

variables:
  afirmacion: "verdadero"

respuesta: verdadero
tipo: vf

enunciado: "Es recomendable usar tu propio vocabulario al redactar el resumen para demostrar comprensión."

explicacion: |
  Verdadero. Usar palabras propias obliga al cerebro a procesar y reformular la información, consolidando el aprendizaje.
```

```
metadata:
  materia: "Lengua"
  tema: "tecnicas_de_estudio_resumen_y_organizadores_graficos"
  nivel: "basico"
  tags: ["estudio", "enfoque"]

variables:
  afirmacion: "falso"

respuesta: falso
tipo: vf

enunciado: "Estudiar lengua se trata solo de memorizar definiciones, no de comprender estructuras."

explicacion: |
  Falso. La comprensión de estructuras y el análisis son clave. La memorización es solo una parte pequeña y menos efectiva por sí sola.
```

## Sección: tipos-textuales (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["narrativo"]

variables:
  n: uno_de([1, 1])

respuesta: "narrativo"
tipo: mc
opciones_explicitas: ["narrativo", "descriptivo", "expositivo", "argumentativo", "instructivo"]

enunciado: "\"Juan salió de su casa, caminó tres cuadras y se encontró con su amigo en la plaza.\" ¿Qué tipo textual es?"

pasos:
  - "Cuenta hechos que ocurren en el tiempo, con acciones y personajes: es narrativo."

explicacion: |
  El texto narrativo cuenta una secuencia de sucesos que le pasan a
  alguien.
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["descriptivo"]

variables:
  n: uno_de([1, 1])

respuesta: "descriptivo"
tipo: mc
opciones_explicitas: ["narrativo", "descriptivo", "expositivo", "argumentativo", "instructivo"]

enunciado: "\"La casa era grande, de paredes blancas y techo rojo. Tenía un jardín lleno de flores amarillas.\" ¿Qué tipo textual es?"

pasos:
  - "Presenta características sin que pase el tiempo, con adjetivos y verbos de estado: es descriptivo."

explicacion: |
  El texto descriptivo detalla cómo es algo (aspecto, cualidades),
  no cuenta una acción.
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["expositivo"]

variables:
  n: uno_de([1, 1])

respuesta: "expositivo"
tipo: mc
opciones_explicitas: ["narrativo", "descriptivo", "expositivo", "argumentativo", "instructivo"]

enunciado: "\"La fotosíntesis es el proceso por el cual las plantas transforman luz solar en energía química.\" ¿Qué tipo textual es?"

pasos:
  - "Explica un tema de forma objetiva, con definiciones: es expositivo."

explicacion: |
  El texto expositivo informa o explica sin dar la opinión del autor.
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["argumentativo"]

variables:
  n: uno_de([1, 1])

respuesta: "argumentativo"
tipo: mc
opciones_explicitas: ["narrativo", "descriptivo", "expositivo", "argumentativo", "instructivo"]

enunciado: "\"Deberíamos reducir el uso de plástico porque contamina los océanos y tarda siglos en degradarse.\" ¿Qué tipo textual es?"

pasos:
  - "Defiende una postura con razones para convencer: es argumentativo."

explicacion: |
  El texto argumentativo usa conectores causales (\"porque\") para
  respaldar una opinión.
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["instructivo"]

variables:
  n: uno_de([1, 1])

respuesta: "instructivo"
tipo: mc
opciones_explicitas: ["narrativo", "descriptivo", "expositivo", "argumentativo", "instructivo"]

enunciado: "\"Primero, batir los huevos. Segundo, agregar el azúcar. Tercero, mezclar con la harina.\" ¿Qué tipo textual es?"

pasos:
  - "Da pasos numerados con verbos en infinitivo/imperativo: es instructivo."

explicacion: |
  El texto instructivo indica los pasos para hacer algo, típico de
  recetas y manuales.
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["narrativo", "marcas"]

variables:
  n: uno_de([1, 1])

respuesta: "narrativo"
tipo: mc
opciones_explicitas: ["narrativo", "descriptivo", "expositivo"]

enunciado: "Un texto con muchos conectores temporales (\"luego\", \"después\", \"al día siguiente\") probablemente sea de tipo..."

pasos:
  - "Los conectores temporales marcan una secuencia de hechos en el tiempo, típica del narrativo."

explicacion: |
  Los conectores temporales son una marca característica del texto
  narrativo.
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["descriptivo", "marcas"]

variables:
  n: uno_de([1, 1])

respuesta: "descriptivo"
tipo: mc
opciones_explicitas: ["narrativo", "descriptivo", "instructivo"]

enunciado: "Un texto con muchos adjetivos y verbos como \"es\", \"tiene\", \"parece\" probablemente sea de tipo..."

pasos:
  - "Los adjetivos y verbos de estado detallan características, sin narrar una acción: marca del descriptivo."

explicacion: |
  Los adjetivos y verbos de estado son la marca típica del texto
  descriptivo.
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["expositivo", "marcas"]

variables:
  n: uno_de([1, 1])

respuesta: "expositivo"
tipo: mc
opciones_explicitas: ["expositivo", "narrativo", "argumentativo"]

enunciado: "Un texto con definiciones y vocabulario técnico, sin opiniones del autor, probablemente sea de tipo..."

pasos:
  - "Explicar un tema de forma objetiva, con definiciones, es la marca del expositivo."

explicacion: |
  El vocabulario técnico y las definiciones objetivas son típicas
  del texto expositivo.
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["argumentativo", "marcas"]

variables:
  n: uno_de([1, 1])

respuesta: "argumentativo"
tipo: mc
opciones_explicitas: ["argumentativo", "descriptivo", "instructivo"]

enunciado: "Un texto en primera persona que defiende una opinión con razones probablemente sea de tipo..."

pasos:
  - "Defender una postura con conectores de causa/consecuencia es la marca del argumentativo."

explicacion: |
  La opinión personal respaldada con razones es típica del texto
  argumentativo.
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["instructivo", "marcas"]

variables:
  n: uno_de([1, 1])

respuesta: "instructivo"
tipo: mc
opciones_explicitas: ["instructivo", "narrativo", "expositivo"]

enunciado: "Un texto con verbos en imperativo (\"agregue\", \"mezcle\") y pasos numerados probablemente sea de tipo..."

pasos:
  - "Indicar cómo hacer algo paso a paso es la marca del instructivo."

explicacion: |
  El imperativo/infinitivo y la numeración de pasos son típicos del
  texto instructivo.
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["tipos_textuales", "combinacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una noticia puede combinar partes narrativas (contar lo que pasó) con partes descriptivas (describir el lugar del hecho), y se clasifica por el tipo predominante."

pasos:
  - "No hace falta que un texto sea puro de un solo tipo para clasificarlo."

explicacion: |
  Verdadero: se clasifica según qué tipo predomina, no exige pureza
  absoluta.
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["tipos_textuales", "proposito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El tipo textual se define principalmente por el propósito comunicativo del texto (contar, describir, explicar, convencer o instruir)."

pasos:
  - "No se define por el tema del texto, sino por para qué fue escrito."

explicacion: |
  Verdadero: dos textos sobre el mismo tema pueden ser de tipos
  distintos según su propósito (contar una historia sobre un volcán
  vs. explicar cómo funciona un volcán).
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["expositivo", "argumentativo", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El texto expositivo, igual que el argumentativo, incluye la opinión personal del autor sobre el tema."

pasos:
  - "El expositivo busca informar de forma objetiva; el argumentativo, en cambio, sí defiende una postura."

explicacion: |
  Falso: la objetividad (sin opinión) es justamente lo que distingue
  al expositivo del argumentativo.
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["instructivo", "ejemplo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una receta de cocina es un ejemplo típico de texto instructivo."

pasos:
  - "Da pasos ordenados para lograr un resultado (el plato), con verbos en imperativo/infinitivo."

explicacion: |
  Verdadero: la receta es el ejemplo clásico de texto instructivo.
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["narrativo", "ejemplo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un cuento es un ejemplo típico de texto narrativo."

pasos:
  - "Cuenta hechos que le pasan a personajes en un orden temporal."

explicacion: |
  Verdadero: el cuento es el ejemplo clásico de texto narrativo, y es
  la puerta de entrada al género narrativo (tema siguiente).
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "basico"
  tags: ["expositivo", "ejemplo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un artículo de enciclopedia es un ejemplo típico de texto expositivo."

pasos:
  - "Explica un tema de forma objetiva, con definiciones y datos, sin opinión."

explicacion: |
  Verdadero: la enciclopedia es el ejemplo clásico de texto
  expositivo.
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["narrativo", "descriptivo", "diferenciacion"]

variables:
  frases: ["El río bajaba rápido, arrastrando ramas y piedras hacia el pueblo", "El río era ancho, de aguas turbias y orillas rocosas"]
  tipos: ["narrativo", "descriptivo"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["narrativo", "descriptivo"]

enunciado: "\"{frases[idx]}\" es un texto de tipo..."

pasos:
  - "Si hay una acción que avanza en el tiempo, es narrativo. Si sólo describe cómo es algo, es descriptivo."

explicacion: |
  \"Bajaba\", \"arrastrando\" son acciones en desarrollo (narrativo);
  \"era\", \"de aguas turbias\" son características fijas
  (descriptivo).
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "intermedio"
  tags: ["tipos_textuales", "metodo"]

enunciado: "Ordená los pasos para identificar el tipo textual predominante de un texto."
tipo: ordenar
opciones_explicitas:
  - "Leer el texto completo"
  - "Preguntarse cuál es el propósito principal (contar, describir, explicar, convencer, instruir)"
  - "Buscar marcas típicas (verbos, conectores) que confirmen esa respuesta"
  - "Clasificar según el tipo predominante, aunque haya partes de otro tipo"
respuesta_orden: ["Leer el texto completo", "Preguntarse cuál es el propósito principal (contar, describir, explicar, convencer, instruir)", "Buscar marcas típicas (verbos, conectores) que confirmen esa respuesta", "Clasificar según el tipo predominante, aunque haya partes de otro tipo"]
explicacion: |
  El método va del propósito general a las marcas concretas que lo
  confirman, permitiendo tipos mixtos.
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "avanzado"
  tags: ["tipos_textuales", "generos_literarios"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El tipo narrativo es la base de lo que después se estudia como género narrativo (uno de los tres géneros literarios)."

pasos:
  - "Reconocer que un texto cuenta hechos (narrativo) es el paso previo para estudiar sus convenciones específicas como género literario."

explicacion: |
  Verdadero: tipos textuales es prerrequisito directo de la rama de
  géneros literarios en la currícula.
```

```
metadata:
  materia: "lengua"
  tema: "tipos_textuales"
  nivel: "avanzado"
  tags: ["tipos_textuales", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si el objetivo es convencer a alguien de una idea, conviene escribir un texto de tipo argumentativo antes que uno puramente descriptivo."

pasos:
  - "El argumentativo está diseñado para defender una postura con razones; el descriptivo sólo detalla características."

explicacion: |
  Verdadero: elegir el tipo textual correcto según el objetivo de
  escritura es la aplicación práctica de este tema.
```

## Sección: variedades-de-la-lengua (23 preguntas)

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "basico"
  tags: ["registro", "formalidad"]

respuesta: "nivel de formalidad"
tipo: completar

enunciado: "Los __________ se refieren al nivel de formalidad o cercanía del lenguaje que utilizamos en un contexto dado."

explicacion: |
  Los registros determinan el grado de formalidad (formal, informal, técnico, etc.) con el que nos comunicamos, adaptándonos a la situación.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "basico"
  tags: ["lecto", "identidad"]

respuesta: "lectos"
tipo: completar

enunciado: "Los __________ aluden a las diferencias grupales determinadas por factores sociales como la edad, la clase social o la región geográfica."

explicacion: |
  Los lectos (o variedades sociolectales) funcionan como marcadores de identidad, vinculando al hablante con un grupo específico.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "avanzado"
  tags: ["competencia", "flexibilidad"]

respuesta: "flexibilidad"
tipo: completar

enunciado: "La competencia lingüística consiste en la capacidad de moverse con __________ entre distintos códigos y registros."

explicacion: |
  La competencia lingüística implica saber adaptar el lenguaje al contexto, no solo conocer las reglas gramaticales.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "intermedio"
  tags: ["voseo", "registro"]

respuesta: "ustedeo"
tipo: completar

enunciado: "En un registro académico o de máxima formalidad, el 'voseo' y el uso de 'che' suelen ser sustituidos por el __________."

explicacion: |
  En contextos formales o académicos, se prefiere el 'ustedeo' (la forma 'usted') — el tuteo (tú) prácticamente no se usa en ningún registro del español rioplatense.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "basico"
  tags: ["lecto", "identidad"]

respuesta: "identidad"
tipo: completar

enunciado: "Los lectos funcionan como marcadores de __________, indicando de dónde venimos y a qué grupo pertenecemos."

explicacion: |
  El lenguaje refleja nuestra pertenencia social, generacional o geográfica, construyendo nuestra identidad.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "intermedio"
  tags: ["lunfardo", "uso"]

respuesta: "autenticidad"
tipo: completar

enunciado: "Un músico puede usar el lunfardo en una canción para evocar __________ y conexión con la cultura popular."

explicacion: |
  El uso de lectos populares en el arte busca generar cercanía, emotividad y una sensación de autenticidad.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "intermedio"
  tags: ["lunfardo", "registro"]

respuesta: "evitarlo"
tipo: completar

enunciado: "Un abogado podría __________ el uso del lunfardo en un juicio para mantener la formalidad."

explicacion: |
  En contextos jurídicos formales, se evita el lunfardo para garantizar la claridad y la seriedad del discurso.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "avanzado"
  tags: ["diferencias", "conceptos"]

respuesta: "formalidad"
tipo: completar

enunciado: "A diferencia de los lectos, los registros se centran principalmente en el grado de __________ del discurso."

explicacion: |
  Los registros varían según la situación comunicativa (formalidad), mientras que los lectos varían según el grupo social.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "intermedio"
  tags: ["adaptación", "comunicación"]

respuesta: "inconscientemente"
tipo: completar

enunciado: "Ajustamos nuestro habla según quién nos escucha de manera __________."

explicacion: |
  La adaptación al contexto y al interlocutor es un proceso natural e inconsciente para la mayoría de los hablantes.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "intermedio"
  tags: ["registro", "vocabulario"]

respuesta: "preciso"
tipo: completar

enunciado: "El registro formal se caracteriza por un vocabulario __________ y estructuras gramaticales completas."

explicacion: |
  La precisión léxica es una marca distintiva del lenguaje formal y académico.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "intermedio"
  tags: ["registro", "informal"]

respuesta: "abreviaciones"
tipo: completar

enunciado: "El registro informal suele incluir __________, jerga y una sintaxis más libre."

explicacion: |
  La economía del lenguaje, como las abreviaciones, es típica de la comunicación informal y rápida.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "intermedio"
  tags: ["adecuación", "registro"]

respuesta: "adecuados"
tipo: completar

enunciado: "Los registros son __________ para contextos diferentes, no buenos o malos en sí mismos."

explicacion: |
  La clave está en la adecuación: usar el registro apropiado para la situación comunicativa.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "avanzado"
  tags: ["interacción", "análisis"]

respuesta: "entrelazan"
tipo: completar

enunciado: "La formalidad y la identidad a menudo se __________ en el uso real de la lengua."

explicacion: |
  Es difícil separar completamente el registro (formalidad) del lecto (identidad), ya que ambos operan simultáneamente.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "basico"
  tags: ["lecto", "origen"]

respuesta: "origen"
tipo: completar

enunciado: "Los lectos nos dicen de dónde venimos y a qué grupo __________ pertenecemos."

explicacion: |
  El lenguaje es un indicador clave de nuestra procedencia geográfica y social.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "avanzado"
  tags: ["competencia", "códigos"]

respuesta: "códigos"
tipo: completar

enunciado: "Un hablante competente sabe moverse entre distintos __________ según la necesidad."

explicacion: |
  La flexibilidad para cambiar de código (registro/lecto) es esencial para la competencia comunicativa.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "intermedio"
  tags: ["voseo", "rioplatense"]

respuesta: "válidos"
tipo: completar

enunciado: "El 'voseo' y el uso de 'che' son perfectamente __________ en un lecto informal rioplatense."

explicacion: |
  Dentro del lecto informal rioplatense, estas formas son gramaticalmente correctas y socialmente aceptadas.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "intermedio"
  tags: ["registro", "sustitución"]

respuesta: "sustituidos"
tipo: completar

enunciado: "En un registro académico, las formas informales deben ser __________ por otras de cortesía estándar."

explicacion: |
  La formalidad exige el reemplazo de marcas dialectales o coloquiales por formas estándar.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "basico"
  tags: ["lecto", "generacional"]

respuesta: "difieren"
tipo: completar

enunciado: "La forma de hablar de un grupo de adolescentes puede __________ significativamente de la de adultos mayores."

explicacion: |
  Las diferencias generacionales son una fuente importante de variación en los lectos.
```

```
metadata:
  materia: "lengua"
  tema: "variedades_de_la_lengua"
  nivel: "avanzado"
  tags: ["comprensión", "aplicación"]

respuesta: "comprensión"
tipo: completar

enunciado: "Este tema evalúa la __________ y aplicación de los conceptos, no la memoria textual."

explicacion: |
  El objetivo es entender cómo funcionan las variedades de la lengua, no repetir definiciones de memoria.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "variedades_de_la_lengua"
  nivel: "basico"
  tags: ["lecto", "identidad", "sociolecto"]

variables:
  pares: [["adolescentes en Buenos Aires", "edad"], ["adultos mayores en Córdoba", "región"], ["trabajadores históricos porteños", "clase social"]]
  idx: uno_de([0, 1, 2])
  grupo: pares[idx][0]
  factor_determinante: pares[idx][1]

respuesta: grupo + " se definen principalmente por su " + factor_determinante + "."
tipo: completar

enunciado: "Completa la frase: Los {grupo} se definen principalmente por su {factor_determinante}."

explicacion: |
  Los lectos son variedades sociolectales determinadas por factores como la edad, la región o la clase social, funcionando como marcadores de identidad.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "variedades_de_la_lengua"
  nivel: "intermedio"
  tags: ["competencia", "flexibilidad", "código"]

variables:
  habilidad: uno_de(["hablar siempre igual", "moverse entre códigos", "ignorar el contexto"])

respuesta: falso
tipo: vf

enunciado: "La competencia lingüística consiste en la capacidad de hablar siempre de la misma manera, independientemente del interlocutor."

explicacion: |
  Falso. La competencia lingüística es la capacidad de moverse entre diferentes códigos y registros según el contexto, no de ser rígido.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "variedades_de_la_lengua"
  nivel: "intermedio"
  tags: ["error", "inadecuacion"]

variables:
  pares: [["usar registro informal en un examen", "error comunicativo"], ["usar registro formal con amigos", "generador de distancia"]]
  idx: uno_de([0, 1])
  situacion: pares[idx][0]
  consecuencia: pares[idx][1]

respuesta: situacion + " es un " + consecuencia + "."
tipo: completar

enunciado: "Completa: '{situacion}' es un '{consecuencia}'."

explicacion: |
  Usar el registro informal en un examen es un error comunicativo. Usar uno excesivamente formal con amigos puede ser un generador de distancia.
```

```
metadata:
  materia: "Lengua y Literatura"
  tema: "variedades_de_la_lengua"
  nivel: "basico"
  tags: ["lecto", "region", "geografia"]

variables:
  region1: uno_de(["Buenos Aires", "Córdoba", "Rosario"])
  region2: uno_de(["Córdoba", "Buenos Aires", "Mendoza"])

respuesta: "La forma de hablar en {region1} puede diferir de la en {region2}."
tipo: completar

enunciado: "Completa: La forma de hablar en '{region1}' puede diferir de la en '{region2}'."

respuestas_validas:
  - "La forma de hablar en Buenos Aires puede diferir de la en Córdoba."
  - "La forma de hablar en Córdoba puede diferir de la en Buenos Aires."
  - "La forma de hablar en Rosario puede diferir de la en Mendoza."
explicacion: |
  La región geográfica es un factor clave que determina las diferencias entre lectos.
```

