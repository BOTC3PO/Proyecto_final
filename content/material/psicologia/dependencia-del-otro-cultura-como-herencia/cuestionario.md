# Psicologia — Dependencia del otro cultura como herencia (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — La cultura como herencia

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "basico"
  tags: ["cultura", "socializacion", "identidad"]

respuesta: "socializacion"
tipo: "completar"
respuestas_validas:
  - "socializacion"

enunciado: "El proceso mediante el cual el individuo interioriza las normas, valores y costumbres de su grupo social, permitiéndole integrarse a la cultura heredada, se denomina ___."

explicacion: |
  La socialización es el proceso fundamental a través del cual la cultura se transmite de una generación a otra, permitiendo que el individuo construya su identidad en relación con los otros.
```

### 2 — La construcción del "Yo"

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "basico"
  tags: ["identidad", "otro", "sujeto"]

opciones_explicitas: ["El sujeto se forma de manera aislada e independiente de su entorno social.", "El sujeto se constituye a través de la interacción con los otros y la cultura.", "La identidad es un proceso puramente biológico sin influencia externa.", "La cultura es un conjunto de reglas que el sujeto ignora por completo."]

respuesta: "El sujeto se constituye a través de la interacción con los otros y la cultura."
tipo: "mc"

enunciado: "Desde la perspectiva de la psicología social, ¿cuál de las siguientes afirmaciones describe mejor la formación de la identidad?"

explicacion: |
  No existe un "yo" sin un "otro". La identidad es una construcción dialéctica que requiere de la alteridad (la existencia del otro) y del marco cultural para tener sentido.
```

### 3 — Verdad o Falso: Dependencia Cultural

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "basico"
  tags: ["dependencia", "herencia"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es correcto afirmar que la cultura actúa como una 'herencia social' que condiciona la percepción que tenemos de la realidad?"

explicacion: |
  Verdadero. La cultura actúa como una herencia social que transmite valores, normas y marcos de referencia que condicionan cómo percibimos e interpretamos la realidad.
```

### 4 — Elementos de la herencia cultural

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["simbolos", "lenguaje", "normas"]

opciones_explicitas: ["El lenguaje", "La biología", "La herencia genética", "El instinto"]

respuesta: "El lenguaje"
tipo: "mc"

enunciado: "De los siguientes elementos, ¿cuál es el principal vehículo de la herencia cultural que permite la comunicación de significados entre generaciones?"

explicacion: |
  El lenguaje es el sistema de signos que permite la transmisión de la cultura, permitiendo que el conocimiento sea compartido y acumulativo.
```

### 5 — Etapas de la socialización

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["socializacion", "primaria", "secundaria"]

opciones_explicitas: ["Socialización secundaria", "Socialización primaria"]

respuesta_orden: ["Socialización primaria", "Socialización secundaria"]
tipo: "ordenar"

enunciado: "Ordene cronológicamente las etapas de la socialización en la vida de un individuo:"

explicacion: |
  La socialización primaria ocurre en la infancia (familia) y es la base de la identidad; la secundaria ocurre en instituciones posteriores (escuela, trabajo) y especializa al sujeto en roles sociales.
```

### 6 — La herencia cultural en la identidad

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "basico"
  tags: ["identidad", "cultura", "socializacion"]

variables:
  escenario: uno_de([["Juan creció en una cultura donde el éxito se mide por la riqueza individual.", "individualismo"], ["Ana creció en una cultura donde el éxito se mide por la armonía del grupo.", "colectivismo"]])

enunciado: "Si una persona es formada bajo los valores de {escenario[0]}, su construcción de identidad estará marcada por el {escenario[1]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["individualismo", "colectivismo"]

explicacion: |
  La cultura actúa como una herencia que proporciona los marcos de referencia (valores, normas, símbolos) a través de los cuales el individuo construye su identidad. No somos seres aislados, sino el resultado de la internalización de la cultura heredada.
```

### 7 — El proceso de socialización

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["socializacion", "agentes_socializadores"]

enunciado: "El proceso mediante el cual un individuo internaliza las normas y valores de su entorno se denomina socialización. Si el primer contacto con estas normas ocurre en la familia, estamos ante la socialización primaria."

respuesta: verdadero
tipo: vf

explicacion: |
  La socialización primaria es la base de la estructura de la personalidad y ocurre principalmente en el núcleo familiar, donde el niño depende totalmente del otro para su formación psíquica y cultural.
```

### 8 — Construcción del Yo social

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["yo", "otro", "identidad"]

enunciado: "Para que un individuo desarrolle un sentido del 'Yo', necesita la interacción con un 'Otro' que le devuelva una imagen de sí mismo. Completa la secuencia de la formación de la identidad:"

pasos:
  - "1. El individuo nace en un contexto cultural determinado."
  - "2. El entorno social interactúa con el individuo."
  - "3. El individuo internaliza estas interacciones para formar su ___."

respuestas_validas:
  - "identidad"
  - "self"
  - "yo"
respuesta: "identidad"
tipo: completar

explicacion: |
  La identidad no es algo que surge de la nada; es un proceso dialéctico entre el individuo y la cultura. La cultura nos 'ofrece' un lenguaje y un rol, y nosotros lo habitamos.
```

### 9 — El peso de la herencia cultural

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "avanzado"
  tags: ["determinismo", "cultura", "herencia"]

variables:
  caso: uno_de([["Un individuo intenta vivir de forma totalmente aislada de cualquier norma cultural.", "aislamiento"], ["Un individuo adopta las tradiciones de sus padres sin cuestionarlas.", "implantacion"]])

enunciado: "En el caso de {caso[0]}, el individuo sigue operando bajo estructuras lingüísticas y cognitivas heredadas de la cultura, lo que demuestra que la dependencia cultural es:"

respuesta: "inevitable"
tipo: completar
respuestas_validas:
  - "inevitable"

explicacion: |
  Incluso en el intento de aislamiento, el pensamiento está mediado por el lenguaje y las categorías conceptuales que la cultura nos ha proporcionado. No existe un 'yo' puro sin la mediación cultural.
```

### 10 — Etapas de la formación de la identidad cultural

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["secuencia", "desarrollo", "cultura"]

enunciado: "Ordena las etapas del desarrollo de la identidad en relación con la herencia cultural, desde la recepción pasiva hasta la autonomía crítica:"

opciones_explicitas: ["Internalización de normas culturales", "Interacción con grupos sociales diversos", "Reevaluación crítica de la herencia cultural"]
respuesta_orden: ["Internalización de normas culturales", "Interacción con grupos sociales diversos", "Reevaluación crítica de la herencia cultural"]
tipo: ordenar

explicacion: |
  El desarrollo de la identidad comienza con la absorción de la cultura (socialización primaria), continúa con la exploración de la diversidad en la sociedad (socialización secundaria) y puede culminar en una síntesis personal donde el sujeto elige qué elementos de su herencia mantener o transformar.
```

### 11 — El mito de la autonomía absoluta

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "basico"
  tags: ["subjetividad", "cultura", "socializacion"]

respuesta: falso
tipo: vf

enunciado: "El desarrollo de la identidad es un proceso puramente biológico e individual, donde la cultura y los otros no intervienen en la formación del yo."

explicacion: |
  La subjetividad se construye en la trama de los vínculos. No existe un "yo" previo a la interacción con el otro y con la cultura que nos constituye.
```

### 12 — La herencia cultural como proceso

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["herencia", "socializacion", "identidad"]

respuesta: "el lenguaje"
tipo: completar
respuestas_validas:
  - "el lenguaje"

enunciado: "La cultura se transmite a través de la socialización; por ejemplo, mediante ___ es como el sujeto internaliza la estructura del lenguaje de su comunidad."

explicacion: |
  La cultura no es solo un conjunto de datos, sino que se encarna en herramientas simbólicas como el lenguaje, que preexisten al sujeto y lo moldean.
```

### 13 — Confusión sobre la "influencia" vs "constitución"

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "avanzado"
  tags: ["subjetividad", "ontogenia", "cultura"]

respuesta: "Constitución de la subjetividad"
tipo: mc
opciones_explicitas: ["Influencia externa sobre un yo preexistente", "Constitución de la subjetividad", "Adaptación biológica al medio", "Imitación de conductas"]

enunciado: "Desde la perspectiva psicosocial, la relación entre el individuo y la cultura no es una simple 'influencia' de afuera hacia adentro, sino que se define como la:"

explicacion: |
  No somos un envase vacío que recibe información; la cultura nos constituye, es decir, nos da las herramientas para que el "yo" pueda existir.
```

### 14 — El proceso de socialización

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "intermedio"
  tags: ["socializacion", "etapas", "identidad"]

respuesta_orden: ["Internalización de normas", "Interacción con agentes sociales", "Formación de la identidad"]
tipo: ordenar
opciones_explicitas: ["Internalización de normas", "Interacción con agentes sociales", "Formación de la identidad"]

enunciado: "Ordene cronológicamente los procesos que permiten la formación del sujeto a través de la herencia cultural:"

explicacion: |
  Primero se interactúa con los otros (familia, escuela), luego se internalizan las normas de esa cultura y, finalmente, se consolida una identidad propia dentro de ese marco.
```

### 15 — La paradoja de la identidad

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro_cultura_como_herencia"
  nivel: "avanzado"
  tags: ["identidad", "otredad", "cultura"]

respuesta: "cultura"
tipo: completar
respuestas_validas:
  - "cultura"

enunciado: "Para que un individuo pueda desarrollar una identidad única, paradójicamente, debe primero estar profundamente arraigado en una ___ que le provea símbolos y significados."

explicacion: |
  La paradoja de la identidad radica en que para ser "único" necesitamos un marco común (cultura) que nos permita distinguirnos de los demás.
```

### 16 — Identidad y Herencia Cultural

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "intermedio"
  tags: ["identidad", "cultura", "herencia"]

respuesta: "interactividad"
tipo: completar
respuestas_validas:
  - "interactividad"

enunciado: "A diferencia de la herencia biológica que se transmite por genes, la formación de la identidad a través de la cultura se da mediante la ___________ con los otros significativos."

explicacion: |
  La identidad no es un objeto dado, sino un proceso dinámico que surge en la interacción con el entorno cultural y los otros.
```

### 17 — Socialización vs. Identidad Individual

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "basico"
  tags: ["socializacion", "individuo"]

variables:
  escenario: uno_de([["Proceso de aprendizaje de normas", "socialización"], ["Sentido de pertenencia y rasgos únicos", "identidad"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["socialización", "identidad", "instinto", "genética"]

enunciado: "Si la socialización es el proceso de internalización de la cultura, la identidad es el resultado de ese proceso donde el sujeto se distingue de la masa. ¿Qué concepto describe la construcción del 'yo' a partir de la herencia cultural?"

explicacion: |
  La identidad es la síntesis personal de los elementos culturales heredados y la subjetividad propia.
```

### 18 — El rol del 'Otro' en el desarrollo

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "intermedio"
  tags: ["otro", "subjetividad"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la subjetividad humana es dependiente de la cultura, ya que el lenguaje y las categorías de pensamiento son herencias sociales?"

explicacion: |
  Sin el lenguaje y los símbolos proporcionados por la cultura (el 'Otro'), la constitución del psiquismo humano sería imposible.
```

### 19 — Etapas de la formación cultural

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "avanzado"
  tags: ["procesos", "cultura"]

respuesta_orden: ["Internalización de normas", "Identificación con modelos", "Construcción de la subjetividad"]
tipo: ordenar
opciones_explicitas: ["Internalización de normas", "Identificación con modelos", "Construcción de la subjetividad"]

enunciado: "Ordene cronológicamente los procesos mediante los cuales la cultura se transforma en parte de la estructura psíquica del individuo:"

explicacion: |
  Primero se absorben las normas (socialización), luego se asumen modelos de identidad y finalmente se consolida la subjetividad propia.
```

### 20 — Diferencia entre Cultura y Biología

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "basico"
  tags: ["biologia", "cultura"]

respuesta: "cultural"
tipo: mc
opciones_explicitas: ["biológico", "cultural", "innato", "instintivo"]

enunciado: "Considerando la herencia que nos forma: si el color de ojos es un rasgo biológico, el uso de utensilios es un rasgo ___________."

explicacion: |
  La cultura se manifiesta en las herramientas, costumbres y significados que adquirimos del entorno social.
```

### 21 — Identidad y herencia cultural

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "intermedio"
  tags: ["identidad", "cultura", "socializacion"]

variables:
  datos: [["Un individuo que rechaza todas las tradiciones de su familia para buscar una identidad propia.", "autonomia"], ["Un individuo que adopta ciegamente los valores de su grupo sin cuestionarlos.", "conformismo"], ["Un individuo que integra elementos de su cultura con experiencias nuevas.", "integracion"]]
  idx: uno_de([0, 1, 2])

enunciado: "Según el concepto de socialización, el caso donde el sujeto adopta sin cuestionamiento los valores de su grupo se define como: {datos[idx][0]}"

opciones_explicitas: ["autonomia", "conformismo", "integracion"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  La identidad se construye en la tensión entre la herencia cultural (lo dado) y la subjetivación (lo que el sujeto hace con eso). El conformismo representa la dependencia absoluta de la herencia sin proceso de individuación.
```

### 22 — El proceso de subjetivación

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "avanzado"
  tags: ["subjetivacion", "herencia", "otro"]

variables:
  idx: uno_de([0, 1])
  afirmaciones: ["La cultura nos proporciona el lenguaje y las normas para pensar, constituyendo al individuo como sujeto.", "El individuo es una entidad totalmente independiente de la estructura cultural que lo rodea."]
  es_correcta: [verdadero, falso]

enunciado: "{afirmaciones[idx]}"

respuesta: es_correcta[idx]
tipo: vf
explicacion: |
  No es posible una subjetivación sin el "Otro". La cultura es la matriz que nos permite, paradójicamente, ser sujetos; nos da las herramientas (lenguaje, símbolos) para construir nuestra propia identidad.
```

### 23 — Componentes de la identidad cultural

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "basico"
  tags: ["herencia", "socializacion", "elementos"]

variables:
  orden_correcta: ["Lenguaje", "Normas sociales", "Valores morales", "Costumbres religiosas"]

enunciado: "Ordene los siguientes elementos de la herencia cultural desde el más estructural (base del pensamiento) hasta el más específico (práctica cotidiana):"

opciones_explicitas: ["Lenguaje", "Normas sociales", "Valores morales", "Costumbres religiosas"]
respuesta_orden: ["Lenguaje", "Normas sociales", "Valores morales", "Costumbres religiosas"]
tipo: ordenar

explicacion: |
  El lenguaje es la base que estructura la psique; las normas y valores guían la conducta social, y las costumbres son las manifestaciones externas y específicas de esa herencia.
```

### 24 — El papel del lenguaje en la formación del Yo

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "intermedio"
  tags: ["lenguaje", "simbolico", "herencia"]

enunciado: "En el proceso de formación de la persona, el lenguaje como herencia cultural es aquello que ___ la distinción entre el sujeto y el mundo externo."

respuestas_validas:
  - "permite"
respuesta: "permite"
tipo: completar

explicacion: |
  El lenguaje es la herramienta simbólica que nos permite nombrar nuestra propia existencia y diferenciar nuestra interioridad de la alteridad.
```

### 25 — Dependencia vs. Autonomía

```
metadata:
  materia: "psicologia"
  tema: "dependencia_del_otro"
  nivel: "avanzado"
  tags: ["identidad", "cultura", "subjetividad"]

respuesta: "condicion"
tipo: mc
opciones_explicitas: ["limitacion", "condicion"]

enunciado: "Desde una perspectiva psicológica, la relación entre cultura y sujeto se comprende mejor si entendemos que la cultura es la:"

explicacion: |
  Aunque la cultura impone marcos de referencia, también es la "condición de posibilidad": sin la herencia cultural (símbolos, lenguaje, otros), no habría un sujeto con quien procesar la realidad.
```
