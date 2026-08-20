# Examen jefe — Dominio de la Gramática

> Logro #98. Completaste el parcial integrando sujeto, voz y tipología textual con estilo. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **108 preguntas totales** en 5/5 secciones.

---

## Sección: tipos-de-sujeto (25 preguntas)

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_tacito", "elipsis"]

variables:
  pronombre: uno_de(["nosotros", "tú", "ellos", "yo"])
  verbo: uno_de(["estudiamos", "estudias", "estudian", "estudio"])

respuesta: falso
tipo: vf

enunciado: "En la oración '{verbo} mucho para el examen', el sujeto es expreso porque aparece escrito."

explicacion: |
  Falso. El sujeto es tácito (elíptico). Aunque no se escribe, se sobreentiende por la conjugación verbal ('{pronombre}'). En español, es común omitir el pronombre sujeto.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_unimembre", "composicion"]

variables:
  nombre_propio: uno_de(["Pedro", "Laura", "Martín", "Sofía", "Tomás"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{nombre_propio} juega al fútbol', el sujeto es unimembre porque está compuesto por un solo núcleo sin modificadores."

explicacion: |
  Verdadero. El sujeto '{nombre_propio}' es un sustantivo propio que funciona como núcleo único. No tiene determinantes ni adjetivos que lo acompañen dentro del grupo nominal sujeto.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_bimembre", "composicion"]

variables:
  adjetivo: uno_de(["grandes", "inteligentes", "divertidos", "serios", "alegres"])
  sustantivo: uno_de(["niños", "estudiantes", "amigos", "compañeros", "vecinos"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Los {sustantivo} {adjetivo} llegaron tarde', el sujeto es bimembre."

explicacion: |
  Verdadero. El sujeto 'Los {sustantivo} {adjetivo}' está compuesto por un núcleo ('{sustantivo}') y modificadores ('Los', '{adjetivo}'). Esta estructura de dos o más elementos lo clasifica como bimembre.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_compuesto", "bimembre"]

variables:
  nombre1: uno_de(["María", "Juan", "Ana", "Luis", "Pedro"])
  nombre2: uno_de(["Carlos", "Laura", "Sofía", "Martín", "Elena"])
  accion: uno_de(["llegaron", "vinieron", "estudiaron", "jugaron", "hablaron"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{nombre1} y {nombre2} {accion} tarde', el sujeto es bimembre."

explicacion: |
  Verdadero. El sujeto está compuesto por dos núcleos ('{nombre1}' y '{nombre2}') unidos por la conjunción 'y'. Al tener más de un núcleo, es un sujeto bimembre (específicamente, un sujeto compuesto).
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_unimembre", "pronombre"]

variables:
  pronombre: uno_de(["Yo", "Tú", "Él", "Nosotros", "Ellos"])
  accion: uno_de(["estudio", "estudias", "estudia", "estudiamos", "estudian"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{pronombre} {accion} mañana', el sujeto es unimembre."

explicacion: |
  Verdadero. El sujeto '{pronombre}' es un pronombre personal que funciona como núcleo único. No tiene modificadores adjetivos o determinantes adicionales que lo acompañen en el grupo nominal.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_bimembre", "modificador"]

variables:
  sustantivo: uno_de(["amigos", "compañeros", "vecinos", "colegas", "amantes"])
  complemento: uno_de(["de la escuela", "del trabajo", "del barrio", "de la clase", "de la oficina"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Los {sustantivo} {complemento} llegaron', el sujeto es bimembre."

explicacion: |
  Verdadero. El sujeto 'Los {sustantivo} {complemento}' tiene un núcleo ('{sustantivo}') y un modificador preposicional ('{complemento}'). Al tener núcleo y modificador, es bimembre.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_unimembre", "sustantivo_propio"]

variables:
  nombre: uno_de(["Buenos Aires", "España", "Argentina", "México", "Colombia"])
  accion: uno_de(["es", "tiene", "tiene", "tiene", "tiene"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{nombre} {accion} mucha historia', el sujeto es unimembre."

explicacion: |
  Verdadero. El sujeto '{nombre}' es un sustantivo propio que funciona como núcleo único. No tiene modificadores adjetivos o determinantes adicionales.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_unimembre", "pronombre_demostrativo"]

variables:
  pronombre: uno_de(["Este", "Ese", "Ese", "Esto", "Eso"])
  accion: uno_de(["es", "es", "es", "es", "es"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{pronombre} {accion} importante', el sujeto es unimembre."

explicacion: |
  Verdadero. El sujeto '{pronombre}' es un pronombre demostrativo que funciona como núcleo único. No tiene modificadores adjetivos o determinantes adicionales.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_unimembre", "sustantivo_comun"]

variables:
  sustantivo: uno_de(["El agua", "La luz", "El aire", "El fuego", "La tierra"])
  accion: uno_de(["es", "es", "es", "es", "es"])

respuesta: verdadero
tipo: vf

enunciado: "En la oración '{sustantivo} {accion} vital', el sujeto es unimembre."

explicacion: |
  Verdadero. El sujeto '{sustantivo}' es un sustantivo común que funciona como núcleo único. No tiene modificadores adjetivos o determinantes adicionales.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_tacito", "verdad_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'Estudiamos mucho', el sujeto 'nosotros' no aparece escrito pero se sobreentiende por la conjugación verbal. Esta afirmación es:"

explicacion: |
  Correcto. Es un sujeto tácito (o elíptico) porque la persona y número están indicados en el verbo 'estudiamos' (1ra persona del plural).
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_expreso", "verdad_falso"]

respuesta: verdadero
tipo: vf

enunciado: "En la oración 'María lee un libro', el sujeto 'María' es un sujeto expreso porque aparece claramente en la oración. Esta afirmación es:"

explicacion: |
  Correcto. El sujeto está presente explícitamente en la oración.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_bimembre", "definicion"]

respuesta: 2
tipo: mc
opciones: 4

enunciado: "¿Cuál de las siguientes opciones define correctamente a un sujeto bimembre?"

explicacion: |
  Un sujeto bimembre está formado por dos partes: el núcleo (sustantivo o pronombre) y al menos un modificador (adjetivo, determinante, etc.).
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["sujeto_unimembre", "definicion"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "Un sujeto unimembre se caracteriza por:"

explicacion: |
  Un sujeto unimembre está compuesto por un solo elemento, generalmente un sustantivo o pronombre, sin modificadores.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["identificacion", "sujeto_expreso"]

variables:
  sujeto: uno_de(["El perro", "La casa", "Mi hermano", "Tus amigos"])
  verbo: uno_de(["corre", "brilla", "trabaja", "juegan"])
  complemento: uno_de(["en el parque", "por la noche", "en la oficina", "con sus vecinos"])

respuesta: "{sujeto}"
tipo: input

enunciado: "Identificá el sujeto en la siguiente oración: '{sujeto} {verbo} {complemento}'"

explicacion: |
  El sujeto es quien realiza la acción o sobre quien recae el estado. En este caso, '{sujeto}' es el sujeto.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["concordancia", "sujeto"]

respuesta: 3
tipo: mc
opciones: 4

enunciado: "El sujeto concuerda con el verbo en:"

explicacion: |
  El sujeto y el verbo deben concordar en persona y número.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["nucleo", "sujeto"]

respuesta: 2
tipo: mc
opciones: 4

enunciado: "En un sujeto bimembre, el núcleo es:"

explicacion: |
  El núcleo es la palabra principal del sujeto, generalmente un sustantivo o pronombre.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["comparacion", "sujeto"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "La principal diferencia entre sujeto bimembre y unimembre es:"

explicacion: |
  La diferencia radica en la cantidad de elementos que componen al sujeto (núcleo + modificadores vs. solo núcleo).
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_agente", "verdad_falso"]

respuesta: verdadero
tipo: vf

enunciado: "El sujeto siempre es quien realiza la acción en una oración. Esta afirmación es:"

explicacion: |
  Falso. El sujeto puede ser agente (realiza la acción) o paciente (sobre quien recae la acción o estado).
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "avanzado"
  tags: ["impersonal", "sujeto"]

respuesta: 4
tipo: mc
opciones: 4

enunciado: "En las oraciones impersonales (ej: 'Llueve mucho'), el sujeto es:"

explicacion: |
  En las oraciones impersonales no hay sujeto.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["modificadores", "sujeto_bimembre"]

respuesta: 2
tipo: mc
opciones: 4

enunciado: "En un sujeto bimembre, ¿cuál de las siguientes palabras NO suele ser un modificador del núcleo?"

explicacion: |
  El núcleo es la palabra principal. Los modificadores acompañan al núcleo.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "avanzado"
  tags: ["comparacion", "sujeto_tacito"]

respuesta: verdadero
tipo: vf

enunciado: "A diferencia del español, el inglés generalmente requiere un sujeto explícito incluso cuando la persona está clara por la conjugación. Esta afirmación es:"

explicacion: |
  Correcto. El español permite la omisión del sujeto (tácito) con mayor frecuencia que el inglés.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_expreso", "pronombre"]

variables:
  pronombre: uno_de(["Ellos", "Ellas", "Nosotros", "Yo"])
  verbo: uno_de(["juegan", "cantan", "estudiamos", "leo"])
  complemento: uno_de(["fútbol", "canciones", "matemáticas", "un libro"])

respuesta: "{pronombre}"
tipo: input

enunciado: "Identificá el sujeto en la oración: '{pronombre} {verbo} {complemento}'"

explicacion: |
  El sujeto es el pronombre '{pronombre}'.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "intermedio"
  tags: ["uso", "sujeto"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "¿En qué tipo de texto es más común el uso de sujetos bimembres detallados?"

explicacion: |
  La escritura formal suele utilizar sujetos bimembres para mayor precisión y claridad.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["sujeto_bimembre", "adjetivo"]

variables:
  det: uno_de(["El", "La", "Los", "Las"])
  sust: uno_de(["perro", "gato", "niño", "mujer"])
  adj: uno_de(["grande", "pequeño", "alegre", "triste"])
  sujeto: "{det} {sust} {adj}"

respuesta: "{sujeto}"
tipo: input

enunciado: "Identificá el sujeto en la oración: '{sujeto} corre rápido.'"

explicacion: |
  El sujeto es '{sujeto}'.
```

```
metadata:
  materia: "Lengua"
  tema: "tipos_de_sujeto"
  nivel: "basico"
  tags: ["definicion", "sujeto"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "El sujeto es:"

explicacion: |
  El sujeto es el elemento de la oración que concuerda en persona y número con el verbo.
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
respuesta_orden:
  - "Leer el texto completo"
  - "Preguntarse cuál es el propósito principal (contar, describir, explicar, convencer, instruir)"
  - "Buscar marcas típicas (verbos, conectores) que confirmen esa respuesta"
  - "Clasificar según el tipo predominante, aunque haya partes de otro tipo"

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

respuesta: "tuteo"
tipo: completar

enunciado: "En un registro académico, el 'voseo' y el uso de 'che' deben ser sustituidos por el __________."

explicacion: |
  En contextos formales o académicos, se prefiere el tuteo y las formas de cortesía estándar.
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
  grupo: uno_de(["adolescentes en Buenos Aires", "adultos mayores en Córdoba", "trabajadores históricos porteños"])
  factor_determinante: uno_de(["edad", "región", "clase social"])

respuesta: "{grupo} se define principalmente por su {factor_determinante}."
tipo: completar

enunciado: "Completa la frase: Los {grupo} se definen principalmente por su {factor_determinante}."

respuestas_validas:
  - "adolescentes en Buenos Aires se definen principalmente por su edad."
  - "adultos mayores en Córdoba se definen principalmente por su región."
  - "trabajadores históricos porteños se definen principalmente por su clase social."
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
  situacion: uno_de(["usar registro informal en un examen", "usar registro formal con amigos"])
  consecuencia: uno_de(["error comunicativo", "generar distancia"])

respuesta: "{situacion} es un {consecuencia}."
tipo: completar

enunciado: "Completa: '{situacion}' es un '{consecuencia}'."

respuestas_validas:
  - "usar registro informal en un examen es un error comunicativo."
  - "usar registro formal con amigos es un generar distancia."
explicacion: |
  Usar el registro informal en un examen es un error comunicativo. Usar uno excesivamente formal con amigos puede generar distancia.
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

## Sección: vocabulario-y-familia-de-palabras (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "basico"
  tags: ["vocabulario", "definicion"]

enunciado: "¿Qué es el vocabulario de una persona?"
tipo: mc
opciones_explicitas:
  - "El conjunto de palabras que conoce y puede usar"
  - "La cantidad de libros que leyó en su vida"
  - "La velocidad con la que puede leer un texto"
respuesta: "El conjunto de palabras que conoce y puede usar"

explicacion: |
  Se distingue entre vocabulario receptivo (entender) y expresivo
  (usar activamente).
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "intermedio"
  tags: ["vocabulario", "definicion"]

enunciado: "¿Cuál es la diferencia entre vocabulario receptivo y vocabulario expresivo?"
tipo: mc
opciones_explicitas:
  - "El receptivo son las palabras que se entienden al escuchar o leer; el expresivo son las que efectivamente se usan al hablar o escribir"
  - "Son exactamente lo mismo, sólo cambia el nombre"
  - "El expresivo siempre es más amplio que el receptivo"
respuesta: "El receptivo son las palabras que se entienden al escuchar o leer; el expresivo son las que efectivamente se usan al hablar o escribir"

explicacion: |
  El vocabulario receptivo siempre es más amplio que el expresivo.
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "basico"
  tags: ["familia_palabras", "vocabulario"]

enunciado: "¿Qué es una familia de palabras?"
tipo: mc
opciones_explicitas:
  - "Un grupo de palabras que comparten la misma raíz (lexema) y varían por prefijos o sufijos"
  - "Un grupo de palabras que empiezan con la misma letra"
  - "Un grupo de palabras que tienen la misma cantidad de sílabas"
respuesta: "Un grupo de palabras que comparten la misma raíz (lexema) y varían por prefijos o sufijos"

explicacion: |
  Como 'tierra, terreno, terrestre, enterrar' — todas comparten la
  raíz relacionada con 'tierr-'.
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "intermedio"
  tags: ["familia_palabras", "problema"]

enunciado: "¿Cuál de estas palabras NO pertenece a la familia de 'tierra'?"
tipo: mc
opciones_explicitas:
  - "terraza (viene de una raíz distinta, relacionada con una construcción plana)"
  - "terreno"
  - "terrestre"
  - "enterrar"
respuesta: "terraza (viene de una raíz distinta, relacionada con una construcción plana)"

explicacion: |
  Aunque suene parecida, 'terraza' no comparte el significado de raíz
  con 'tierra' de la misma forma directa que las otras tres.
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "intermedio"
  tags: ["familia_palabras", "problema"]

enunciado: "¿Cuáles de estas palabras pertenecen a la misma familia que 'flor'?"
tipo: mc
opciones_explicitas:
  - "Florecer, florero, floral"
  - "Flotar, flojo, flauta"
respuesta: "Florecer, florero, floral"

explicacion: |
  Todas comparten la raíz 'flor-' y el significado relacionado con
  las flores.
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "intermedio"
  tags: ["morfema", "vocabulario"]

enunciado: "¿Qué es el lexema (raíz) de una palabra?"
tipo: mc
opciones_explicitas:
  - "La parte que lleva el significado base de la palabra, compartida por toda su familia"
  - "La última letra de la palabra"
  - "Un sinónimo de 'sufijo'"
respuesta: "La parte que lleva el significado base de la palabra, compartida por toda su familia"

explicacion: |
  Es la pieza fija alrededor de la cual se arman todas las palabras de
  una misma familia.
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "intermedio"
  tags: ["morfema", "vocabulario"]

enunciado: "¿Qué es un morfema derivativo (prefijo o sufijo)?"
tipo: mc
opciones_explicitas:
  - "Una pieza que se agrega a la raíz de una palabra para formar una palabra nueva relacionada"
  - "La raíz principal de una familia de palabras"
  - "Un morfema que sólo marca género y número, sin cambiar el significado"
respuesta: "Una pieza que se agrega a la raíz de una palabra para formar una palabra nueva relacionada"

explicacion: |
  Un prefijo va antes de la raíz; un sufijo va después.
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "avanzado"
  tags: ["prefijo", "problema"]

enunciado: "La palabra 'desarmar' tiene el prefijo 'des-'. ¿Qué significa este prefijo?"
tipo: mc
opciones_explicitas:
  - "Negación o lo contrario de la acción (desarmar = lo contrario de armar)"
  - "Volver a hacer la acción"
  - "Hacer la acción debajo de algo"
respuesta: "Negación o lo contrario de la acción (desarmar = lo contrario de armar)"

explicacion: |
  'Des-' es uno de los prefijos de negación más comunes en español.
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "avanzado"
  tags: ["sufijo", "problema"]

enunciado: "La palabra 'decoración' termina en el sufijo '-ción'. ¿Qué tipo de significado suele aportar este sufijo?"
tipo: mc
opciones_explicitas:
  - "Acción o efecto de algo (decoración = la acción/el resultado de decorar)"
  - "Posibilidad de que algo ocurra"
  - "Una cualidad negativa"
respuesta: "Acción o efecto de algo (decoración = la acción/el resultado de decorar)"

explicacion: |
  '-ción' es uno de los sufijos más productivos del español para
  formar sustantivos a partir de verbos.
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "intermedio"
  tags: ["familia_palabras"]

respuesta: verdadero
tipo: vf

enunciado: "Conocer el significado de una palabra ayuda a inferir el significado de otras palabras de su misma familia, aunque nunca se las haya visto antes."

explicacion: |
  Es la razón principal por la que trabajar familias de palabras
  amplía el vocabulario de forma eficiente.
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué aprender vocabulario por familias de palabras es más eficiente que memorizar cada palabra por separado?"
tipo: mc
opciones_explicitas:
  - "Porque una sola raíz conocida permite inferir el significado de muchas palabras relacionadas, en vez de tener que memorizar cada una desde cero"
  - "Porque las palabras de una misma familia siempre se escriben exactamente igual"
  - "No hay ninguna ventaja real, memorizar palabra por palabra es igual de eficiente"
respuesta: "Porque una sola raíz conocida permite inferir el significado de muchas palabras relacionadas, en vez de tener que memorizar cada una desde cero"

explicacion: |
  Es una estrategia que multiplica el vocabulario aprendido con
  relativamente poco esfuerzo extra.
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "intermedio"
  tags: ["prefijo", "problema"]

tipo: completar
enunciado: "Agregando el prefijo 're-' (volver a hacer) al verbo 'hacer', se forma la palabra ___."
respuestas_validas:
  - "rehacer"

explicacion: |
  'Re-' + 'hacer' = 'rehacer' (volver a hacer algo).
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "intermedio"
  tags: ["prefijo", "vocabulario"]

enunciado: "¿Qué significa, en general, el prefijo 'des-' en español?"
tipo: mc
opciones_explicitas:
  - "Negación o inversión de la acción (deshacer, desarmar, desordenar)"
  - "Repetición de la acción"
  - "Que la acción ocurre debajo de algo"
respuesta: "Negación o inversión de la acción (deshacer, desarmar, desordenar)"

explicacion: |
  Es uno de los prefijos de negación más productivos del español.
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "intermedio"
  tags: ["prefijo", "vocabulario"]

enunciado: "¿Qué significa, en general, el prefijo 're-' en español?"
tipo: mc
opciones_explicitas:
  - "Volver a hacer la acción, o intensificarla (releer, rehacer, recontento)"
  - "Negación de la acción"
  - "Que la acción ocurre en contra de algo"
respuesta: "Volver a hacer la acción, o intensificarla (releer, rehacer, recontento)"

explicacion: |
  'Releer' es 'volver a leer'; 'recontento' es 'muy contento'
  (intensificación).
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "avanzado"
  tags: ["contexto", "problema"]

enunciado: "'El perro estaba tan famélico que devoró su comida en segundos.' Sin conocer la palabra 'famélico', ¿qué sugiere el contexto de la oración sobre su significado?"
tipo: mc
opciones_explicitas:
  - "Que significa 'con mucha hambre' — porque 'devoró en segundos' sugiere hambre extrema"
  - "Que significa 'cansado', sin ninguna relación con la comida"
  - "El contexto no da ninguna pista sobre el significado"
respuesta: "Que significa 'con mucha hambre' — porque 'devoró en segundos' sugiere hambre extrema"

explicacion: |
  Es la estrategia de inferencia por contexto: usar el resto de la
  oración como pista del significado de una palabra desconocida.
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "avanzado"
  tags: ["contexto", "familia_palabras"]

respuesta: verdadero
tipo: vf

enunciado: "Inferir el significado de una palabra por el contexto de la oración es una estrategia distinta de reconocer su familia de palabras — ambas sirven para ampliar vocabulario, pero de formas diferentes."

explicacion: |
  El contexto usa pistas de la oración completa; la familia de
  palabras usa pistas de la estructura interna de la palabra misma.
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "Un alumno lee un texto con varias palabras desconocidas. ¿Qué estrategias puede usar, sin necesitar un diccionario, para entender esas palabras?"
tipo: mc
opciones_explicitas:
  - "Reconocer la familia de palabras (raíz conocida + prefijo/sufijo) y usar el contexto de la oración como pistas"
  - "Ninguna estrategia funciona sin un diccionario a mano"
  - "Sólo sirve adivinar al azar el significado"
respuesta: "Reconocer la familia de palabras (raíz conocida + prefijo/sufijo) y usar el contexto de la oración como pistas"

explicacion: |
  Son las dos estrategias centrales de este módulo.
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "intermedio"
  tags: ["familia_palabras", "problema"]

tipo: completar
enunciado: "'Panadero', 'panadería' y 'pan' comparten la misma raíz. Completá esa raíz: ___."
respuestas_validas:
  - "pan"

explicacion: |
  Todas las palabras de esa familia giran en torno al significado de
  'pan'.
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "avanzado"
  tags: ["morfema"]

respuesta: verdadero
tipo: vf

enunciado: "Un morfema flexivo (como la 's' de plural, o la terminación de tiempo verbal) no crea una palabra de otra familia — 'tierra' y 'tierras' siguen siendo la misma familia de palabras."

explicacion: |
  Sólo los morfemas DERIVATIVOS (prefijos, sufijos que cambian el
  significado o la categoría) generan nuevas palabras de la familia.
```

```
metadata:
  materia: "lengua"
  tema: "vocabulario_y_familia_de_palabras"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve ampliar el vocabulario a través de familias de palabras y contexto?"
tipo: mc
opciones_explicitas:
  - "Para poder entender e inferir el significado de muchas palabras nuevas de forma eficiente, lo que es uno de los predictores más fuertes de la comprensión lectora"
  - "Sólo sirve para ganar juegos de palabras"
  - "No tiene ninguna relación real con entender un texto"
respuesta: "Para poder entender e inferir el significado de muchas palabras nuevas de forma eficiente, lo que es uno de los predictores más fuertes de la comprensión lectora"

explicacion: |
  Es la base directa de `../clases-de-palabras/`, el módulo que
  sigue: antes de clasificar una palabra, hace falta reconocerla y
  entender qué significa.
```

## Sección: voz-activa-y-pasiva (20 preguntas)

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "basico"
  tags: ["voz_activa"]

variables:
  frases: ["Juan compró el pan", "María leyó el libro", "El pan fue comprado por Juan", "El libro fue leído por María"]
  voces: ["activa", "activa", "pasiva", "pasiva"]
  idx: uno_de([0, 1, 2, 3])

respuesta: voces[idx]
tipo: mc
opciones_explicitas: ["activa", "pasiva"]

enunciado: "La oración \"{frases[idx]}\" está en voz..."

pasos:
  - "Si el sujeto realiza la acción, es activa. Si el sujeto la recibe (ser + participio), es pasiva."

explicacion: |
  Voz activa: el sujeto hace la acción. Voz pasiva: el sujeto la
  recibe, con "ser + participio".
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["voz_pasiva", "sujeto"]

variables:
  frases: ["El pan fue comprado por Juan", "La ventana fue rota por el viento", "El examen fue corregido por la profesora"]
  sujetos: ["El pan", "La ventana", "El examen"]
  idx: uno_de([0, 1, 2])

respuesta: sujetos[idx]
tipo: completar

enunciado: "En la oración pasiva \"{frases[idx]}\", ¿cuál es el sujeto?"

pasos:
  - "El sujeto de la pasiva es lo que RECIBE la acción, no quien la realiza."

explicacion: |
  El sujeto de la pasiva es el que antes era el objeto directo de la
  activa correspondiente.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["voz_pasiva", "complemento_agente"]

variables:
  frases: ["El pan fue comprado por Juan", "La ventana fue rota por el viento", "El examen fue corregido por la profesora"]
  agentes: ["por Juan", "por el viento", "por la profesora"]
  idx: uno_de([0, 1, 2])

respuesta: agentes[idx]
tipo: completar

enunciado: "En \"{frases[idx]}\", ¿cuál es el complemento agente?"

pasos:
  - "El complemento agente indica quién realizó la acción y se introduce con \"por\"."

explicacion: |
  El complemento agente equivale al sujeto que tendría la misma
  oración en voz activa.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["transformacion", "activa_a_pasiva"]

variables:
  activas: ["Juan compró el pan", "María leyó el libro", "El chef preparó la cena"]
  pasivas: ["El pan fue comprado por Juan", "El libro fue leído por María", "La cena fue preparada por el chef"]
  idx: uno_de([0, 1, 2])

respuesta: pasivas[idx]
tipo: mc
opciones_explicitas: [pasivas[idx], "Juan fue comprado por el pan", "El pan compró a Juan"]

enunciado: "¿Cuál es la versión en voz pasiva de \"{activas[idx]}\"?"

pasos:
  - "El OD de la activa pasa a sujeto; el sujeto de la activa pasa a complemento agente."

explicacion: |
  El objeto directo de la activa se convierte en sujeto de la
  pasiva, y el sujeto original pasa a complemento agente con "por".
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["transformacion", "pasiva_a_activa"]

variables:
  pasivas: ["El pan fue comprado por Juan", "El libro fue leído por María"]
  activas: ["Juan compró el pan", "María leyó el libro"]
  idx: uno_de([0, 1])

respuesta: activas[idx]
tipo: completar

enunciado: "Reescribí en voz activa: \"{pasivas[idx]}\""

pasos:
  - "El complemento agente pasa a ser sujeto; el sujeto de la pasiva pasa a ser OD."

explicacion: |
  Se invierte la transformación: agente → sujeto, sujeto pasivo → OD.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "basico"
  tags: ["voz_pasiva", "estructura_verbal"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La voz pasiva se construye con el verbo \"ser\" conjugado más el participio del verbo principal."

pasos:
  - "\"fue comprado\": \"fue\" (ser) + \"comprado\" (participio de comprar)."

explicacion: |
  Verdadero: ser + participio es la estructura fija de la voz pasiva.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "intransitivos"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un verbo sin objeto directo (como \"dormir\" o \"llegar\") no se puede pasivizar."

pasos:
  - "Sin OD no hay nada que convertir en sujeto de la pasiva."

explicacion: |
  Verdadero: la pasiva necesita un OD en la activa para transformarlo
  en sujeto. Los intransitivos no tienen OD.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["voz_pasiva", "complemento_agente"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"El pan fue comprado\" es una oración pasiva válida, aunque no diga quién lo compró."

pasos:
  - "El complemento agente se puede omitir cuando no importa o no se sabe quién hizo la acción."

explicacion: |
  Verdadero: la pasiva sin agente es muy común (típica de noticias:
  \"el edificio fue inaugurado ayer\").
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "basico"
  tags: ["voz_pasiva", "participio"]

variables:
  infinitivos: ["comprar", "romper", "corregir", "escribir"]
  participios: ["comprado", "roto", "corregido", "escrito"]
  idx: uno_de([0, 1, 2, 3])

respuesta: participios[idx]
tipo: completar

enunciado: "El participio del verbo \"{infinitivos[idx]}\" es..."

pasos:
  - "La mayoría termina en -ado/-ido, pero hay participios irregulares (roto, escrito, visto, hecho...)."

explicacion: |
  Algunos participios son irregulares y no siguen la terminación
  regular -ado/-ido.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["voz_activa", "voz_pasiva", "diferenciacion"]

variables:
  frases: ["Ana pintó el cuadro", "El cuadro fue pintado por Ana"]
  voces: ["activa", "pasiva"]
  idx: uno_de([0, 1])

respuesta: voces[idx]
tipo: mc
opciones_explicitas: ["activa", "pasiva"]

enunciado: "\"{frases[idx]}\" está en voz..."

pasos:
  - "Un solo verbo conjugado normal → activa. \"Ser\" + participio → pasiva."

explicacion: |
  El indicio más rápido es la forma del verbo: un verbo simple es
  activa, ser+participio es pasiva.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "uso"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En textos periodísticos es común usar la voz pasiva para poner el foco en el hecho o en quien lo recibe, sin nombrar primero al responsable."

pasos:
  - "\"El puente fue inaugurado ayer\" pone el foco en el puente, no en la autoridad que lo inauguró."

explicacion: |
  Verdadero: la pasiva permite despersonalizar o postergar la
  mención del agente, muy usado en noticias e informes.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["transformacion", "metodo"]

enunciado: "Ordená los pasos para pasar una oración de voz activa a voz pasiva."
tipo: ordenar
opciones_explicitas:
  - "Identificar el objeto directo de la oración activa"
  - "Convertir ese objeto directo en el nuevo sujeto"
  - "Cambiar el verbo a \"ser\" (en el mismo tiempo) + participio"
  - "Convertir el sujeto original en complemento agente con \"por\""
respuesta_orden:
  - "Identificar el objeto directo de la oración activa"
  - "Convertir ese objeto directo en el nuevo sujeto"
  - "Cambiar el verbo a \"ser\" (en el mismo tiempo) + participio"
  - "Convertir el sujeto original en complemento agente con \"por\""

explicacion: |
  El orden lógico va del OD (lo que se transforma en sujeto) al
  verbo, y termina con el sujeto original convertido en agente.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "objeto_directo", "relacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El sujeto de una oración pasiva es siempre lo mismo que el objeto directo de la oración activa equivalente."

pasos:
  - "\"El pan\" es OD en \"Juan compró el pan\" y sujeto en \"El pan fue comprado por Juan\"."

explicacion: |
  Verdadero: es exactamente la misma transformación descrita en la
  teoría — OD activo se convierte en sujeto pasivo.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Cualquier oración que use el verbo \"ser\" está en voz pasiva."

pasos:
  - "\"Juan es alto\" usa \"ser\" pero no tiene participio ni describe una acción recibida: es un predicado nominal, no una pasiva."

explicacion: |
  Falso: la pasiva necesita específicamente \"ser + participio\" de
  un verbo de acción, no cualquier uso de \"ser\".
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "tiempo_verbal"]

variables:
  activas: ["Juan compra el pan", "Juan compró el pan"]
  pasivas: ["El pan es comprado por Juan", "El pan fue comprado por Juan"]
  idx: uno_de([0, 1])

respuesta: pasivas[idx]
tipo: completar

enunciado: "Pasá a voz pasiva manteniendo el mismo tiempo verbal: \"{activas[idx]}\""

pasos:
  - "Presente activa → \"es\" + participio. Pretérito activa → \"fue\" + participio."

explicacion: |
  El tiempo del verbo \"ser\" en la pasiva coincide con el tiempo del
  verbo original en la activa.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["complemento_agente", "circunstancial", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El complemento agente (\"por Juan\") es lo mismo que un circunstancial de causa."

pasos:
  - "El complemento agente sólo aparece en oraciones pasivas y equivale al sujeto de la activa, no responde \"¿por qué?\" como una causa."

explicacion: |
  Falso: aunque ambos usan \"por\", el complemento agente identifica
  quién REALIZA la acción en una pasiva; el CC de causa explica el
  motivo de la acción.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "intermedio"
  tags: ["transformacion", "practica"]

variables:
  activas: ["El profesor explicó la lección", "Los alumnos entregaron el trabajo", "La empresa contrató al ingeniero"]
  pasivas: ["La lección fue explicada por el profesor", "El trabajo fue entregado por los alumnos", "El ingeniero fue contratado por la empresa"]
  idx: uno_de([0, 1, 2])

respuesta: pasivas[idx]
tipo: completar

enunciado: "Pasá a voz pasiva: \"{activas[idx]}\""

pasos:
  - "OD → sujeto, verbo → ser+participio, sujeto → complemento agente."

explicacion: |
  Se aplica el mismo procedimiento sin importar el sujeto/OD
  concretos de la oración.
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_pasiva", "concordancia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuando el objeto directo de la activa es plural, el verbo \"ser\" de la pasiva también debe concordar en plural."

pasos:
  - "\"Compró los panes\" (OD plural) → \"Los panes fueron comprados\" (ser en plural)."

explicacion: |
  Verdadero: el verbo \"ser\" concuerda en número y persona con el
  nuevo sujeto (el antiguo OD).
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_activa", "voz_pasiva", "significado"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Juan compró el pan\" y \"El pan fue comprado por Juan\" describen el mismo hecho, sólo cambia qué elemento se destaca primero."

pasos:
  - "El sujeto/agente y el OD/sujeto pasivo son las mismas personas y cosas en ambas versiones."

explicacion: |
  Verdadero: activa y pasiva son formas alternativas de contar el
  mismo evento, con distinto foco (quién actúa vs. qué se recibe).
```

```
metadata:
  materia: "lengua"
  tema: "voz_activa_y_pasiva"
  nivel: "avanzado"
  tags: ["voz_activa", "voz_pasiva", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si se quiere poner el foco en el resultado (\"el puente\") y no en quién lo construyó, conviene usar la voz pasiva."

pasos:
  - "\"El puente fue construido en 1990\" destaca el puente; \"La empresa construyó el puente en 1990\" destaca a la empresa."

explicacion: |
  Verdadero: elegir activa o pasiva es una decisión de estilo según
  qué elemento se quiere destacar primero en la oración.
```
