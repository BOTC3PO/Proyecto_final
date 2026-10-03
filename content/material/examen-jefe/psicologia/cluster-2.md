# Examen jefe — [PENDIENTE #925]

> Logro #925. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: lenguaje-pensamiento-y-creatividad (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["simbolismo", "semiotica"]

respuesta: "simbólico"
tipo: completar
respuestas_validas:
  - "simbólico"
  - "simbolico"

enunciado: "El lenguaje es un sistema de signos cuya función principal es representar la realidad de manera ___, permitiendo que el pensamiento se desprenda de la inmediatez de los objetos físicos."

explicacion: |
  El carácter simbólico permite que una palabra (significante) represente un concepto (significado) sin que exista una conexión física necesaria, permitiendo la abstracción.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["relativismo_linguistico", "determinismo"]

respuesta: "el lenguaje determina el pensamiento"
tipo: mc
opciones_explicitas: ["el lenguaje determina el pensamiento", "el lenguaje influye en el pensamiento", "el lenguaje es un producto secundario del pensamiento", "no existe relación entre ambos"]

enunciado: "Según la versión fuerte del relativismo lingüístico (determinismo), la idea principal es que ___."

explicacion: |
  El determinismo lingüístico sostiene que la estructura de la lengua que hablamos determina y limita las categorías de nuestro pensamiento.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["relacion_cognitiva"]

respuesta: verdadero
tipo: vf

enunciado: "El pensamiento puede ocurrir de forma independiente al lenguaje (por ejemplo, en la actividad mental de un recién nacido o en el pensamiento visual), aunque el lenguaje facilita su estructuración y complejidad."

explicacion: |
  Aunque están íntimamente ligados, existen procesos cognitivos (como la inteligencia espacial o el pensamiento pre-verbal) que operan sin necesidad de estructuras lingüísticas complejas.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["semiotica", "signo"]

respuesta: "significante"
tipo: completar
respuestas_validas:
  - "significante"
  - "significado"

enunciado: "En la teoría del signo lingüístico, la forma física o acústica de la palabra se denomina ___, mientras que el concepto mental que evoca se denomina significado."

explicacion: |
  Saussure define el signo como la unión de un significante (la imagen acústica/escrita) y un significado (el concepto).
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["creatividad", "pensamiento_divergente"]

respuesta_orden: ["Pensamiento Divergente", "Pensamiento Convergente", "Producción Creativa"]
tipo: ordenar

opciones_explicitas: ["Pensamiento Divergente", "Pensamiento Convergente", "Producción Creativa"]

enunciado: "Ordene los procesos cognitivos según una secuencia lógica en un proceso de resolución creativa de problemas: primero se exploran múltiples soluciones posibles, luego se evalúa la mejor opción y finalmente se ejecuta la idea."

explicacion: |
  La creatividad suele implicar un movimiento desde la divergencia (generación de ideas) hacia la convergencia (selección y refinamiento) para llegar a un producto final.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["hipotesis_relativismo_linguistico", "categorizacion"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["Un hablante de un idioma que tiene una sola palabra para 'azul' y 'verde'", "restringe"], ["Un hablante de un idioma que distingue claramente entre 'azul' y 'celeste'", "potencia"]]

enunciado: "Según la hipótesis de Sapir-Whorf, si una persona pertenece al escenario '{escenarios[caso_idx][0]}', su capacidad para categorizar y recordar matices cromáticos estará influenciada por su estructura lingüística. Esto sugiere que el lenguaje ___ el pensamiento."

pasos:
  - "Analizar cómo la falta de términos específicos afecta la percepción de los límites de color."
  - "Relacionar la estructura gramatical con la organización mental de los estímulos."

opciones_explicitas: ["restringe", "no tiene", "potencia", "ignora"]
respuesta: escenarios[caso_idx][1]
tipo: "mc"

explicacion: |
  El relativismo lingüístico sugiere que las categorías lingüísticas actúan como filtros que estructuran la percepción y la memoria de los estímulos sensoriales.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["determinismo_linguistico", "teoria"]

enunciado: "El determinismo lingüístico fuerte sostiene que el lenguaje determina absolutamente la forma en que pensamos, haciendo imposible pensar conceptos para los cuales no existen palabras."

respuesta: falso
tipo: "vf"

explicacion: |
  La psicología moderna distingue entre el determinismo (fuerte y hoy mayormente descartado) y el relativismo (débil), que postula que el lenguaje influye o facilita ciertos patrones de pensamiento, pero no los limita de forma absoluta.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["creatividad", "pensamiento_divergente"]

enunciado: "Para resolver un problema de pensamiento divergente, como encontrar usos alternativos para un ladrillo, el sujeto debe seguir una secuencia lógica de procesamiento creativo. Ordene los pasos desde el inicio hasta la producción de la idea original:"

opciones_explicitas: ["Preparación del problema", "Fluidez de ideas", "Incubación", "Evaluación de la respuesta"]
respuesta_orden: ["Preparación del problema", "Fluidez de ideas", "Incubación", "Evaluación de la respuesta"]
tipo: "ordenar"

explicacion: |
  El proceso creativo implica primero entender el reto (preparación), generar múltiples opciones sin juzgar (fluidez/divergencia), permitir un periodo de descanso mental (incubación) y finalmente seleccionar la mejor opción (evaluación).
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "avanzado"
  tags: ["simbolismo", "representacion_mental"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["La palabra 'perro' representa al animal sin necesidad de verlo", "simbolo_abstracto"], ["El gesto de señalar un objeto para identificarlo", "gesto_referencial"]]

enunciado: "En el desarrollo cognitivo, el paso hacia el pensamiento simbólico permite que el sujeto utilice un ___ para representar objetos ausentes. En el caso de '{ejemplos[ejemplo_idx][0]}', estamos ante una representación mental de alto nivel."

respuesta: "símbolo"
respuestas_validas:
  - "símbolo"
  - "signo"
tipo: "completar"

explicacion: |
  El pensamiento simbólico permite la representación mental de objetos, personas o eventos que no están presentes en el entorno inmediato, permitiendo el pensamiento abstracto y el lenguaje.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["interaccion_lenguaje_pensamiento"]

variables:
  caso_tipo: uno_de([0, 1])
  casos: [["El lenguaje es una herramienta que expresa pensamientos ya formados", "reflejo"], ["El lenguaje es un proceso que moldea la estructura del pensamiento", "moldeador"]]

enunciado: "Si adoptamos la postura de que el lenguaje es un ___ de la cognición, entonces el pensamiento es previo al lenguaje. Si adoptamos la postura de que el lenguaje es un ___ de la cognición, entonces el lenguaje estructura el pensamiento."

pasos:
  - "Identificar la postura de 'reflejo' (el lenguaje solo comunica)."
  - "Identificar la postura de 'moldeador' (el lenguaje estructura)."

opciones_explicitas: ["reflejo, moldeador", "moldeador, reflejo", "reflejo, reflejo", "moldeador, moldeador"]
respuesta: "reflejo, moldeador"
tipo: "mc"

explicacion: |
  Existen dos corrientes principales: la que ve al lenguaje como un mero vehículo de comunicación de procesos mentales preexistentes (reflejo), y la que sostiene que la estructura del lenguaje condiciona la organización de esos procesos (moldeador).
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["determinismo_linguistico", "hipotesis_sapir_whorf"]

respuesta: falso
tipo: vf

enunciado: "Según la versión fuerte de la hipótesis de Sapir-Whorf (determinismo lingüístico), el lenguaje determina de manera absoluta y restrictiva los límites del pensamiento humano."

explicacion: |
  Aunque el lenguaje influye en la percepción y la categorización (relativismo lingüístico), la psicología cognitiva moderna sostiene que el pensamiento puede ocurrir sin lenguaje (como en bebés o animales) y que el determinismo absoluto es una postura descartada.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["simbolos", "representacion_mental"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["el color rojo", "una señal de pare"], ["el concepto de justicia", "una balanza"]]

opciones_explicitas: ["Representación simbólica", "Percepción sensorial pura", "Reflejo instintivo"]

respuesta: "Representación simbólica"
tipo: mc

enunciado: "Cuando un individuo asocia {escenarios[escenario_idx][0]} con {escenarios[escenario_idx][1]}, ¿mediante qué proceso cognitivo está operando?"

pasos:
  - "Identificar el estímulo sensorial."
  - "Reconocer el significado arbitrario asignado por la cultura."
  - "Conectar el símbolo con el concepto mental."

explicacion: |
  El pensamiento simbólico permite que un estímulo (sonido, imagen, objeto) represente algo que no está presente, permitiendo la abstracción.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["procesos_cognitivos", "estructuracion"]

opciones_explicitas: ["El lenguaje es una consecuencia del pensamiento", "El lenguaje es el único motor del pensamiento", "El pensamiento y el lenguaje son procesos independientes que no se influyen"]

respuesta: "El lenguaje es una consecuencia del pensamiento"
tipo: mc

enunciado: "Desde una perspectiva constructivista, se argumenta que el lenguaje es una herramienta que ayuda a estructurar y dar forma a procesos de pensamiento que ya existen de manera pre-verbal."

explicacion: |
  Si bien el lenguaje estructura el pensamiento (facilitando la complejidad), el pensamiento precede al lenguaje en el desarrollo cognitivo temprano.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["semiotica", "signo"]

respuestas_validas:
  - "significante"

respuesta: "significante"
tipo: completar

enunciado: "En la estructura del signo lingüístico, la forma física o acústica (el sonido de la palabra) se denomina ___ y el concepto mental que esta evoca se denomina significado."

explicacion: |
  Saussure definió el signo como la unión de una parte material (significante) y una parte conceptual (significado).
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "avanzado"
  tags: ["creatividad", "modelo_wallas"]

opciones_explicitas: ["Preparación", "Incubación", "Iluminación", "Verificación"]

respuesta_orden: ["Preparación", "Incubación", "Iluminación", "Verificación"]
tipo: ordenar

enunciado: "Ordene las fases del proceso creativo propuestas por Graham Wallas:"

explicacion: |
  El proceso creativo comienza con la inmersión en el problema (preparación), seguido de un periodo de procesamiento inconsciente (incubación), la aparición de la idea (iluminación) y finalmente la validación de la misma (verificación).
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["lenguaje", "pensamiento", "hipotesis_linguistica"]

respuesta: "hipotesis_linguistica"
tipo: completar
respuestas_validas:
  - "hipotesis_linguistica"
  - "determinismo_linguistico"

enunciado: "La teoría que sostiene que la estructura del lenguaje que hablamos determina o limita las categorías de nuestro pensamiento se conoce como ___."

explicacion: |
  La hipótesis de Sapir-Whorf (o determinismo lingüístico) sugiere que el lenguaje no solo comunica el pensamiento, sino que lo estructura y limita.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["comunicacion", "lenguaje", "simbolismo"]

respuesta: verdadero
tipo: vf
enunciado: "Si una persona emite un grito de dolor para pedir ayuda, está realizando un acto de comunicación, pero no necesariamente un acto de lenguaje simbólico. ¿Es correcta esta afirmación?"

explicacion: |
  La comunicación es el intercambio de información (puede ser instintiva o gestual), mientras que el lenguaje implica el uso de sistemas de signos arbitrarios y simbólicos con reglas gramaticales.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["simbolismo", "signo", "semiotica"]

variables:
  escenario: uno_de([["la palabra 'perro'", "significante"], ["la imagen mental de un perro", "significado"], ["el concepto abstracto de canino", "concepto"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["significante", "significado", "concepto"]

enunciado: "En el proceso de representación mental, la parte del signo que es la forma física (sonidos o letras) se denomina ___."

explicacion: |
  Según la semiótica, el signo se divide en significante (la forma material) y significado (el concepto mental).
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "avanzado"
  tags: ["creatividad", "pensamiento_divergente", "pensamiento_convergente"]

respuesta_orden: ["pensamiento_divergente", "pensamiento_convergente"]
tipo: ordenar

opciones_explicitas: ["pensamiento_divergente", "pensamiento_convergente"]

enunciado: "Ordene los siguientes procesos según la secuencia lógica de la resolución creativa de problemas: primero se generan múltiples ideas sin restricciones y luego se selecciona la mejor solución."

explicacion: |
  La creatividad suele seguir un flujo que va desde la divergencia (generación de opciones) hacia la convergencia (evaluación y selección).
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["cognicion", "lenguaje"]

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "De acuerdo con las teorías cognitivas modernas, ¿es posible que existan procesos de pensamiento (como la rotación mental) que no dependan del lenguaje verbal?"

explicacion: |
  La evidencia sugiere que el pensamiento no es dependiente exclusivamente del lenguaje; existen procesos cognitivos no verbales, como la inteligencia visoespacial.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["hipotesis_relativismo", "linguistica", "cognicion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Un hablante de una lengua que tiene múltiples términos para distintos tipos de 'nieve', percibe diferencias sutiles en la textura del hielo de forma más rápida.", "percepción"], ["Un hablante de una lengua que solo usa la palabra 'nieve' para todo, requiere más tiempo de procesamiento para distinguir texturas de hielo.", "percepción"]]

enunciado: "Según la hipótesis del relativismo lingüístico, la estructura del lenguaje de una persona puede influir en su {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["percepción", "memoria", "emoción", "motricidad"]

explicacion: |
  El relativismo lingüístico sugiere que las categorías lingüísticas que utilizamos actúan como marcos que facilitan o dificultan la distinción de ciertos aspectos del mundo físico.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["conceptos", "categorizacion"]

enunciado: "Cuando una persona utiliza una palabra para agrupar diversos objetos con características comunes, está utilizando un ___ para organizar su pensamiento."

respuesta: "concepto"
tipo: completar
respuestas_validas:
  - "concepto"
  - "símbolo"
  - "etiqueta"

explicacion: |
  Los conceptos son representaciones mentales que nos permiten categorizar el mundo, ahorrando energía cognitiva al no tener que procesar cada objeto como algo totalmente nuevo.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["simbolismo", "representacion_mental"]

enunciado: "El lenguaje es una forma de representación simbólica porque los sonidos o grafemas utilizados no tienen una relación física directa con el objeto que representan."

respuesta: verdadero
tipo: vf

explicacion: |
  La arbitrariedad del signo lingüístico es una característica fundamental: la palabra "mesa" no se parece a una mesa; es una convención simbólica.
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "avanzado"
  tags: ["creatividad", "procesos_cognitivos"]

enunciado: "Ordene las etapas del proceso creativo según el modelo tradicional de Wallas:"

opciones_explicitas: ["Preparación", "Incubación", "Iluminación", "Verificación"]
respuesta_orden: ["Preparación", "Incubación", "Iluminación", "Verificación"]
tipo: ordenar

explicacion: |
  El proceso creativo suele seguir una secuencia que va desde la inmersión en el problema (preparación), el procesamiento inconsciente (incubación), el momento del 'eureka' (iluminación) y la validación del resultado (verificación).
```

```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["resolucion_problemas", "heuristicos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un arquitecto que usa planos para visualizar una estructura antes de construirla.", "representacion"], ["Un matemático que utiliza fórmulas para resolver una ecuación compleja.", "representacion"]]

enunciado: "En el caso de {casos[caso_idx][0]}, el uso de símbolos y lenguaje técnico sirve como una herramienta de ___ mental para resolver problemas."

respuesta: "representacion"
tipo: mc
opciones_explicitas: ["representacion", "inhibicion", "impresion", "reaccion"]

explicacion: |
  El lenguaje permite la representación mental, lo que nos permite manipular ideas y objetos en nuestra mente sin necesidad de tenerlos presentes físicamente.
```

## Sección: corrientes-psicologicas-psicoanalisis-conductismo-humanismo-cognitivismo (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["psicoanalisis", "inconsciente"]

respuesta: "psicoanalisis"
tipo: completar
respuestas_validas:
  - "psicoanalisis"

enunciado: "La corriente psicológica que postula la existencia de procesos mentales inconscientes que determinan la conducta humana se denomina ___."

explicacion: |
  El psicoanálisis, fundado por Sigmund Freud, sostiene que gran parte de nuestra conducta está impulsada por deseos, recuerdos y conflictos alojados en el inconsciente.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["conductismo", "estímulo", "respuesta"]

respuesta: "estímulo"
tipo: mc
opciones_explicitas: ["estímulo", "respuesta", "pensamiento", "emoción"]

enunciado: "En el conductismo radical, la unidad básica de análisis es la relación entre un ___ y una respuesta observada."

explicacion: |
  El conductismo se centra en la conducta observable y la relación entre un estímulo (E) y una respuesta (R), dejando de lado los procesos mentales internos por no ser medibles.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["humanismo", "autorrealizacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿El humanismo psicológico se caracteriza por centrarse en el potencial de crecimiento personal y la autorrealización del individuo?"

explicacion: |
  A diferencia de otras corrientes, el humanismo (Maslow, Rogers) tiene una visión positiva del ser humano, enfocándose en su capacidad de alcanzar su máximo potencial.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["cognitivismo", "metáfora", "computación"]

respuesta: "metáfora del ordenador"
tipo: completar
respuestas_validas:
  - "metáfora del ordenador"
  - "metáfora de la máquina"
enunciado: "El cognitivismo utiliza la ___ para explicar cómo la mente recibe, codifica, almacena y recupera la información."

explicacion: |
  La psicología cognitiva surge con la idea de que la mente funciona de manera análoga a un procesador de información, utilizando la metáfora del ordenador.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["historia", "orden"]

respuesta_orden: ["conductismo", "humanismo", "cognitivismo"]
tipo: ordenar
opciones_explicitas: ["conductismo", "humanismo", "cognitivismo"]

enunciado: "Ordena cronológicamente estas corrientes según su predominio o surgimiento principal en la historia de la psicología moderna (del más antiguo al más reciente):"

pasos:
  - "Identifica el predominio del conductismo en la primera mitad del siglo XX."
  - "Considera el auge del enfoque humanista como la 'tercera fuerza' a mediados de siglo."
  - "Ubica la revolución cognitiva consolidándose en los años 60."

explicacion: |
  El conductismo dominó la primera mitad del siglo XX; el humanismo se consolidó a mediados de siglo como la 'tercera fuerza' alternativa al psicoanálisis y al conductismo; y el cognitivismo tomó el relevo con la revolución cognitiva de los años 60.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["conductismo", "condicionamiento"]

variables:
  escenario: uno_de([["Un niño asocia el sonido de un timbre con un pinchazo en el brazo.", "condicionamiento_clasico"], ["Un estudiante estudia solo cuando hay silencio absoluto para evitar distracciones.", "condicionamiento_operante"], ["Un perro saliva al escuchar una campana porque la asocia con la comida que recibirá después.", "condicionamiento_clasico"]])

enunciado: "En el caso de que {escenario[0]}, estamos ante un ejemplo de {escenario[1]}."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["condicionamiento_clasico", "condicionamiento_operante", "procesos_inconscientes"]

explicacion: |
  El conductismo clásico (Pavlov) se centra en la asociación de estímulos, mientras que el operante (Skinner) se centra en la consecuencia de la conducta.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["psicoanalisis", "inconsciente"]

respuesta: verdadero
tipo: vf

enunciado: "Desde la perspectiva del psicoanálisis, un síntoma como un olvido repentino de un nombre importante puede ser interpretado como una manifestación de un deseo o conflicto reprimido en el inconsciente."

explicacion: |
  El psicoanálisis postula que gran parte de la conducta humana está determinada por procesos inconscientes y conflictos no resueltos.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["cognitivismo", "metáfora_computacional"]

variables:
  ejemplo_cognitivo: uno_de([["La forma en que una persona interpreta un gesto de un amigo como un insulto.", "interpretacion"], ["La forma en que un conductor procesa señales de tráfico para evitar un choque.", "procesamiento"]])

enunciado: "En el modelo del cognitivismo, la mente es comparada con una computadora. Si analizamos {ejemplo_cognitivo[0]}, nos centramos en el ___ de la información."

respuesta: "procesamiento"
tipo: completar
respuestas_validas:
  - "procesamiento"

explicacion: |
  El cognitivismo estudia los procesos mentales internos (percepción, memoria, lenguaje) como flujos de información similares al procesamiento de datos.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["humanismo", "maslow"]

variables:
  caso_humanista: uno_de([["Un paciente busca terapia para alcanzar su máximo potencial personal.", "autorrealizacion"], ["Un paciente busca terapia para sentirse aceptado y formar vínculos significativos con otros.", "pertenencia"]])

enunciado: "Según el enfoque humanista, si el objetivo principal de una persona es {caso_humanista[0]}, está buscando la ___."

respuesta: caso_humanista[1]
tipo: completar
respuestas_validas:
  - "autorrealizacion"
  - "pertenencia"

explicacion: |
  El humanismo se enfoca en la autorrealización y el crecimiento personal, viendo al individuo como alguien con tendencia innata hacia la plenitud.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "avanzado"
  tags: ["metodologia", "comparativa"]

enunciado: "Para realizar un estudio clínico, un psicólogo debe seguir una secuencia lógica de pasos. Ordena los siguientes elementos según el enfoque conductista: 1. Estímulo, 2. Respuesta, 3. Consecuencia."

respuesta_orden: ["Estímulo", "Respuesta", "Consecuencia"]
tipo: ordenar
opciones_explicitas: ["Estímulo", "Respuesta", "Consecuencia"]

explicacion: |
  El modelo conductista se basa en la secuencia E-R-C (Estímulo-Respuesta-Consecuencia).
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["psicoanalisis", "concepto"]

respuesta: "inconsciente"
tipo: completar
respuestas_validas:
  - "inconsciente"

enunciado: "A diferencia de otras corrientes que se centran en la conducta observable, el psicoanálisis postula que el motor principal de la conducta humana son los procesos del ___."

explicacion: |
  El psicoanálisis, fundado por Freud, sostiene que la mayor parte de nuestra vida mental ocurre en el inconsciente, influyendo en nuestras decisiones y emociones sin que nos demos cuenta.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["conductismo", "cognitivismo"]

respuesta: falso
tipo: vf
enunciado: "Un psicólogo conductista clásico se centraría exclusivamente en los procesos mentales internos (como el pensamiento o la memoria) para explicar la conducta, ignorando el estímulo y la respuesta. ¿Es correcta esta afirmación?"

explicacion: |
  Falso. El conductismo se centra en la conducta observable y la relación entre estímulo y respuesta, rechazando (en sus versiones más estrictas) el estudio de los procesos mentales internos por no ser medibles objetivamente.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["humanismo", "enfoque"]

opciones_explicitas: ["Determinismo biológico/ambiental", "Autorrealización y potencial humano", "Procesamiento de información"]

respuesta: "Autorrealización y potencial humano"
tipo: mc

enunciado: "El humanismo se distingue de otras corrientes por su visión optimista del ser humano, centrándose en la capacidad de ___."

explicacion: |
  A diferencia del psicoanálisis (motivado por impulsos inconscientes) o el conductismo (motivado por el entorno), el humanismo pone el foco en la capacidad de crecimiento y autorrealización del individuo.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["cognitivismo", "metáfora"]

respuesta: "procesamiento de información"
tipo: completar
respuestas_validas:
  - "procesamiento de información"

enunciado: "La revolución cognitiva introdujo la metáfora del ordenador para entender la mente, comparando la actividad mental con el ___."

explicacion: |
  El cognitivismo estudia cómo la mente codifica, almacena y recupera la información, de manera análoga a como un ordenador procesa datos.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["historia", "cronologia"]

opciones_explicitas: ["Psicoanálisis", "Conductismo", "Humanismo", "Cognitivismo"]

respuesta_orden: ["Psicoanálisis", "Conductismo", "Humanismo", "Cognitivismo"]
tipo: ordenar

enunciado: "Ordene cronológicamente las corrientes psicológicas según su surgimiento y predominio en la historia de la psicología:"

explicacion: |
  El Psicoanálisis surgió a finales del siglo XIX; el Conductismo dominó la primera mitad del XX; el Humanismo emergió a mediados del XX como reacción al determinismo; y el Cognitivismo se consolidó en la segunda mitad del siglo XX.
```

```
metadata:
  materia: "psicologia"
  tema: "psicoanalisis"
  nivel: "basico"
  tags: ["psicoanalisis", "inconsciente"]

respuesta: "inconsciente"
tipo: completar
respuestas_validas:
  - "inconsciente"

enunciado: "A diferencia de la psicología de la conciencia, el psicoanálisis postula que la mayor parte de la actividad mental ocurre en el ___."

explicacion: |
  El psicoanálisis, fundado por Freud, se centra en los procesos mentales que no son accesibles a la conciencia inmediata, denominándolos procesos inconscientes.
```

```
metadata:
  materia: "psicologia"
  tema: "conductismo"
  nivel: "basico"
  tags: ["conductismo", "conducta"]

respuesta: verdadero
tipo: vf
enunciado: "El conductismo radical se distingue de otras corrientes por centrarse exclusivamente en la conducta observable, rechazando el estudio de los procesos mentales internos como objeto de la psicología científica. ¿Es correcta esta afirmación?"

explicacion: |
  El conductismo (especialmente el de Watson) sostiene que para que la psicología sea una ciencia objetiva, debe limitarse al estudio de la conducta observable y su relación con el entorno, evitando la introspección.
```

```
metadata:
  materia: "psicologia"
  tema: "humanismo"
  nivel: "intermedio"
  tags: ["humanismo", "psicoanalisis", "comparacion"]

variables:
  escenario: uno_de([["una visión determinista del pasado", "una visión optimista del potencial humano"], ["un énfasis en la patología", "un énfasis en el crecimiento personal"], ["un foco en los impulsos reprimidos", "un foco en la autorrealización"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: [escenario[0], escenario[1]]

enunciado: "Mientras que el psicoanálisis suele tener una visión determinista basada en los conflictos del pasado, el humanismo se distingue por ___."

explicacion: |
  El humanismo (Rogers, Maslow) se enfoca en la capacidad del individuo para el crecimiento y la autorrealización, contrastando con el enfoque clínico-patológico del psicoanálisis.
```

```
metadata:
  materia: "psicologia"
  tema: "cognitivismo"
  nivel: "intermedio"
  tags: ["cognitivismo", "metáfora-computacional"]

respuesta: "procesamiento de información"
tipo: completar
respuestas_validas:
  - "procesamiento de información"

enunciado: "El cognitivismo se diferencia del conductismo al proponer que entre el estímulo y la respuesta existen procesos mentales complejos, utilizando la metáfora del ___."

explicacion: |
  La psicología cognitiva utiliza la analogía de la computadora para explicar cómo la mente recibe, codifica, almacena y recupera información.
```

```
metadata:
  materia: "psicologia"
  tema: "evolucion_corrientes"
  nivel: "avanzado"
  tags: ["historia", "conductismo", "cognitivismo"]

respuesta_orden: ["Conductismo", "Cognitivismo", "Neurociencia Cognitiva"]
tipo: ordenar
opciones_explicitas: ["Conductismo", "Cognitivismo", "Neurociencia Cognitiva"]

enunciado: "Ordene cronológicamente el predominio de estas corrientes/enfoques en la psicología científica, desde el inicio del siglo XX hasta la actualidad:"

explicacion: |
  El conductismo dominó la primera mitad del siglo XX; la revolución cognitiva surgió en los años 50-60; y la neurociencia cognitiva es el enfoque contemporáneo que integra procesos mentales con bases biológicas.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["conductismo", "aprendizaje"]

variables:
  datos: [["Un niño recibe un dulce cada vez que recoge sus juguetes.", "refuerzo positivo"], ["Un estudiante deja de jugar videojuegos tras recibir un regaño constante.", "castigo"]]
  idx: uno_de([0, 1])

enunciado: "En el escenario donde {datos[idx][0]}, estamos ante un proceso de {datos[idx][1]} según el conductismo."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "refuerzo positivo"
  - "castigo"

explicacion: |
  El conductismo se enfoca en la relación entre estímulos y respuestas. En este caso, la consecuencia aumenta la probabilidad de la conducta (refuerzo) o la disminuye (castigo).
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["psicoanalisis", "inconsciente"]

enunciado: "Un terapeuta que busca interpretar los sueños de un paciente y analizar los lapsus linguae para acceder a contenidos reprimidos está aplicando el método de:"

opciones_explicitas: ["Conductismo", "Psicoanálisis", "Humanismo", "Cognitivismo"]
respuesta: "Psicoanálisis"
tipo: mc

explicacion: |
  El psicoanálisis, fundado por Freud, sostiene que la conducta humana está determinada por impulsos y deseos inconscientes.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "basico"
  tags: ["humanismo", "maslow"]

enunciado: "¿Es el enfoque humanista una corriente que se centra en la capacidad de crecimiento personal y la autorrealización del individuo?"

respuesta: verdadero
tipo: vf

explicacion: |
  El humanismo (Rogers, Maslow) se diferencia por su visión optimista del ser humano y su enfoque en la autorrealización.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "intermedio"
  tags: ["cognitivismo", "procesos_mentales"]

variables:
  datos: [["Cómo la memoria almacena datos", "procesamiento"], ["Cómo el lenguaje decodifica símbolos", "procesamiento"]]
  idx: uno_de([0, 1])

enunciado: "Si un psicólogo estudia {datos[idx][0]}, su enfoque principal es el {datos[idx][1]} de la información."

respuesta: "procesamiento"
tipo: completar
respuestas_validas:
  - "procesamiento"

explicacion: |
  El cognitivismo utiliza la metáfora del ordenador para entender cómo la mente codifica, almacena y recupera la información.
```

```
metadata:
  materia: "psicologia"
  tema: "corrientes_psicologicas"
  nivel: "avanzado"
  tags: ["historia", "orden_cronologico"]

enunciado: "Ordena cronológicamente estas corrientes desde su surgimiento histórico (del más antiguo al más reciente):"

opciones_explicitas: ["Psicoanálisis", "Conductismo", "Humanismo", "Cognitivismo"]
respuesta_orden: ["Psicoanálisis", "Conductismo", "Humanismo", "Cognitivismo"]
tipo: ordenar

explicacion: |
  El Psicoanálisis (finales XIX), el Conductismo (principios XX), el Humanismo (mediados XX) y el Cognitivismo (revolución cognitiva años 50-60).
```

## Sección: edades-del-ser-humano-ninez-pubertad-identidad (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "edades_del_ser_humano"
  nivel: "basico"
  tags: ["desarrollo", "etapas"]

tipo: mc
opciones_explicitas: ["Niñez", "Pubertad", "Adultez", "Senectud"]

enunciado: "La etapa caracterizada por el crecimiento físico acelerado y la maduración de los órganos reproductores se denomina ________."

respuesta: "Pubertad"

explicacion: |
  La pubertad es el periodo de transición entre la niñez y la edad adulta, marcado por cambios hormonales y físicos significativos.
```

```
metadata:
  materia: "psicologia"
  tema: "cambios_fisicos"
  nivel: "basico"
  tags: ["biologia", "pubertad"]

tipo: vf

enunciado: "Durante la pubertad, los cambios físicos son exclusivamente externos y no afectan el sistema endocrino."

respuesta: falso

explicacion: |
  Falso. La pubertad es impulsada precisamente por cambios en el sistema endocrino (hormonas) que provocan cambios tanto internos como externos.
```

```
metadata:
  materia: "psicologia"
  tema: "identidad_adolescente"
  nivel: "intermedio"
  tags: ["identidad", "psicologia_evolutiva"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Búsqueda de pertenencia a grupos", "Construcción de la autonomía personal"], ["Dependencia de la opinión parental", "Definición de valores propios"]]
  claves: ["autonomía", "valores"]

tipo: completar
respuestas_validas:
  - "autonomía"
  - "valores"

enunciado: "En la etapa de la adolescencia, el individuo suele transitar desde una etapa de {escenarios[escenario_idx][0]} hacia una fase de {escenarios[escenario_idx][1]}."

respuesta: claves[escenario_idx]

explicacion: |
  La identidad se construye mediante el proceso de diferenciación de las figuras de autoridad y la búsqueda de un sentido de autonomía.
```

```
metadata:
  materia: "psicologia"
  tema: "secuencia_desarrollo"
  nivel: "basico"
  tags: ["orden", "etapas"]

tipo: ordenar
opciones_explicitas: ["Infancia", "Niñez", "Pubertad", "Adultez"]

enunciado: "Ordene cronológicamente las etapas del desarrollo humano desde el nacimiento hasta la madurez."

respuesta_orden: ["Infancia", "Niñez", "Pubertad", "Adultez"]

explicacion: |
  El desarrollo humano sigue una secuencia biológica y psicológica predecible de etapas sucesivas.
```

```
metadata:
  materia: "psicologia"
  tema: "identidad_personal"
  nivel: "intermedio"
  tags: ["identidad", "autoconcepto"]

tipo: mc
opciones_explicitas: ["Autoconcepto", "Identidad", "Personalidad", "Temperamento"]

enunciado: "El proceso mediante el cual una persona reconoce sus propios rasgos, valores y la continuidad de su 'yo' a través del tiempo se conoce como ________."

respuesta: "Identidad"

explicacion: |
  La identidad es la conciencia de ser uno mismo y la integración de los cambios experimentados durante el desarrollo.
```

```
metadata:
  materia: "psicologia"
  tema: "niñez"
  nivel: "basico"
  tags: ["desarrollo", "niñez"]

enunciado: "Durante la niñez, el desarrollo se caracteriza por un crecimiento físico constante y el perfeccionamiento de habilidades motoras. Si un niño de 7 años desarrolla la capacidad de seguir reglas complejas en un juego, estamos observando un avance en su desarrollo ___."

respuestas_validas:
  - "cognitivo"
  - "motor"
  - "emocional"

respuesta: "cognitivo"
tipo: completar

explicacion: |
  El desarrollo cognitivo se refiere a la evolución de los procesos mentales como el pensamiento, la lógica y la comprensión de reglas.
```

```
metadata:
  materia: "psicologia"
  tema: "pubertad"
  nivel: "intermedio"
  tags: ["cambios_fisicos", "hormonas"]

variables:
  escenario: uno_de([["Aumento de estatura y vello corporal", "cambios físicos"], ["Cambios en el tono de voz y estructura ósea", "cambios físicos"], ["Desarrollo de caracteres sexuales secundarios", "cambios físicos"]])

enunciado: "En la pubertad, el sistema endocrino libera hormonas que provocan el proceso descrito como: {escenario[0]}."

opciones_explicitas: ["cambios físicos", "cambios psicológicos", "cambios sociales"]

respuesta: escenario[1]
tipo: mc

explicacion: |
  La pubertad es la etapa de transición biológica donde las hormonas activan los caracteres sexuales secundarios.
```

```
metadata:
  materia: "psicologia"
  tema: "identidad"
  nivel: "avanzado"
  tags: ["identidad", "adolescencia"]

variables:
  caso: uno_de([["Un adolescente que busca activamente sus valores y metas", "identidad_estable"], ["Un adolescente que experimenta crisis de roles constantes", "identidad_en_crisis"], ["Un adolescente que adopta la identidad de sus padres sin cuestionar", "identidad_difusa"]])

enunciado: "Analizamos el caso de un individuo que se encuentra en la etapa de formación de la identidad. Según el modelo de desarrollo, el perfil de: {caso[0]} se clasifica como ___."

opciones_explicitas: ["identidad_estable", "identidad_en_crisis", "identidad_difusa"]

respuesta: caso[1]
tipo: mc

explicacion: |
  La formación de la identidad implica la integración de la personalidad y la exploración de valores propios frente a los sociales.
```

```
metadata:
  materia: "psicologia"
  tema: "etapas_desarrollo"
  nivel: "basico"
  tags: ["secuencia", "etapas"]

opciones_explicitas: ["Infancia", "Niñez", "Pubertad", "Adultez"]

respuesta_orden: ["Infancia", "Niñez", "Pubertad", "Adultez"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas del desarrollo humano según la psicología evolutiva:"

explicacion: |
  El desarrollo humano sigue una secuencia biológica y psicológica predecible desde el nacimiento hasta la madurez.
```

```
metadata:
  materia: "psicologia"
  tema: "identidad"
  nivel: "basico"
  tags: ["identidad", "falso"]

enunciado: "La identidad es un concepto estático que se define completamente al finalizar la niñez y no sufre cambios durante la adolescencia."

respuesta: falso
tipo: vf

explicacion: |
  La identidad es un proceso dinámico y continuo que se reconfigura constantemente, especialmente durante la transición de la pubertad a la adolescencia.
```

```
metadata:
  materia: "psicologia"
  tema: "desarrollo_identidad"
  nivel: "basico"
  tags: ["pubertad", "identidad", "desarrollo"]

respuesta: falso
tipo: vf

enunciado: "Es correcto afirmar que la identidad personal se consolida completamente durante la pubertad debido a los cambios hormonales, sin necesidad de procesos cognitivos posteriores."

explicacion: |
  La identidad es un proceso continuo que se extiende durante la adolescencia y la adultez joven. Si bien la pubertad aporta cambios biológicos que influyen en la autopercepción, la consolidación de la identidad requiere procesos psicológicos y sociales complejos que trascienden lo hormonal.
```

```
metadata:
  materia: "psicologia"
  tema: "etapas_desarrollo"
  nivel: "intermedio"
  tags: ["niñez", "pubertad", "secuencia"]

variables:
  etapas: ["Niñez", "Pubertad", "Adolescencia"]

opciones_explicitas: ["Niñez", "Pubertad", "Adolescencia"]

respuesta_orden: ["Niñez", "Pubertad", "Adolescencia"]

tipo: ordenar

enunciado: "Ordena las siguientes etapas del desarrollo humano de acuerdo a su aparición cronológica típica, considerando los cambios biológicos y la maduración de la identidad."

explicacion: |
  El desarrollo sigue una secuencia biológica y psicológica: primero la niñez (desarrollo motor y cognitivo básico), luego la pubertad (estirón y maduración sexual) y finalmente la adolescencia (reorganización de la identidad y pensamiento abstracto).
```

```
metadata:
  materia: "psicologia"
  tema: "pubertad_cambios"
  nivel: "basico"
  tags: ["pubertad", "cambios_fisicos"]

variables:
  escenario: [["el aumento de la estatura y vello corporal", "cambios físicos"], ["la búsqueda de autonomía y pertenencia grupal", "cambios psicosociales"]]
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc

opciones_explicitas:
  - "cambios físicos"
  - "cambios psicosociales"
  - "cambios cognitivos"

enunciado: "Un error común es confundir los procesos biológicos con los procesos de identidad. Si un individuo experimenta {escenario[idx][0]}, está atravesando principalmente ___."

explicacion: |
  Es fundamental distinguir entre la maduración biológica (pubertad/cambios físicos) y la maduración de la identidad y el rol social (adolescencia/cambios psicosociales).
```

```
metadata:
  materia: "psicologia"
  tema: "niñez_identidad"
  nivel: "intermedio"
  tags: ["niñez", "identidad", "autoestima"]

respuesta: "en construcción"
tipo: completar

respuestas_validas:
  - "en construcción"
  - "en desarrollo"

enunciado: "A diferencia de la identidad consolidada del adulto, la identidad en la etapa de la niñez se encuentra ___."

explicacion: |
  En la niñez, la identidad es fluida y se construye principalmente a través de la interacción con los cuidadores primarios y el juego, siendo una base que se transformará profundamente en la pubertad.
```

```
metadata:
  materia: "psicologia"
  tema: "pubertad_percepcion"
  nivel: "avanzado"
  tags: ["pubertad", "autoimagen", "psicologia"]

respuesta: verdadero
tipo: vf
enunciado: "Durante la pubertad, debido a los cambios en la imagen corporal, es común que la percepción de la autopercepción se vuelva más crítica y sensible. ¿Es esto cierto?"

explicacion: |
  La combinación de cambios físicos rápidos y el desarrollo de la capacidad de pensamiento abstracto (metacognición) hace que el individuo sea mucho más consciente de su apariencia y de cómo es visto por los demás.
```

```
metadata:
  materia: "psicologia"
  tema: "desarrollo_infantil"
  nivel: "basico"
  tags: ["niñez", "pubertad", "desarrollo"]

respuesta: "pubertad"
tipo: mc
opciones_explicitas: ["niñez", "pubertad", "adolescencia", "vejez"]

enunciado: "Mientras que la niñez se caracteriza por un crecimiento físico y cognitivo constante, la etapa que se distingue principalmente por la maduración de los órganos reproductivos es la ___."

explicacion: |
  La pubertad es el proceso biológico de cambios físicos y hormonales que marca el inicio de la capacidad reproductiva, diferenciándose de la niñez en su enfoque en la maduración sexual.
```

```
metadata:
  materia: "psicologia"
  tema: "identidad_adolescente"
  nivel: "intermedio"
  tags: ["identidad", "psicologia_evolutiva"]

respuesta: falso
tipo: vf
enunciado: "Durante la transición de la pubertad a la adolescencia, la identidad del individuo suele ser un proceso dinámico y en constante búsqueda. ¿Es la identidad un constructo estático e inmutable durante este periodo?"

explicacion: |
  La identidad en la adolescencia es un proceso de exploración. No es un estado fijo, sino una construcción que se moldea a través de la interacción social y la introspección.
```

```
metadata:
  materia: "psicologia"
  tema: "etapas_del_desarrollo"
  nivel: "basico"
  tags: ["secuencia", "etapas"]

opciones_explicitas: ["Infancia", "Pubertad", "Adultez"]
respuesta_orden: ["Infancia", "Pubertad", "Adultez"]
tipo: ordenar

enunciado: "Ordene cronológicamente las siguientes etapas del desarrollo humano, desde la más temprana a la más tardía:"

pasos:
  - "Identificar la etapa de dependencia y aprendizaje motor."
  - "Identificar la etapa de cambios hormonales y búsqueda de autonomía."
  - "Identificar la etapa de consolidación de la identidad y roles sociales."

explicacion: |
  El desarrollo humano sigue una secuencia biológica y psicológica predecible: primero la infancia (crecimiento), luego la pubertad (maduración sexual) y finalmente la adultez (estabilidad).
```

```
metadata:
  materia: "psicologia"
  tema: "maduracion_biologica"
  nivel: "intermedio"
  tags: ["maduracion", "crecimiento"]

respuesta: "maduración"
tipo: completar

enunciado: "En el contexto del desarrollo, el crecimiento se refiere al aumento de tamaño físico, mientras que la ___ se refiere a la adquisición de funciones complejas a través de la maduración del sistema nervioso."

pasos:
  - "Diferenciar entre aumento cuantitativo (crecimiento) y aumento cualitativo (maduración)."

explicacion: |
  La maduración es un proceso cualitativo que permite la aparición de nuevas capacidades (como el lenguaje o el razonamiento abstracto), mientras que el crecimiento es cuantitativo.
```

```
metadata:
  materia: "psicologia"
  tema: "identidad_y_cuerpo"
  nivel: "avanzado"
  tags: ["identidad", "cambios_fisicos"]

respuesta: verdadero
tipo: vf
enunciado: "Durante la pubertad, el egocentrismo adolescente suele aumentar, lo que lleva al individuo a sentir que es el centro de atención de los demás (el 'público imaginario'). ¿Es este fenómeno una característica distintiva de la identidad en esta etapa?"

explicacion: |
  El egocentrismo adolescente es un fenómeno psicológico donde el joven siente que sus experiencias y su apariencia son observadas constantemente por los demás, marcando un cambio en su autoconcepto.
```

```
metadata:
  materia: "psicologia"
  tema: "cambios_fisicos_pubertad"
  nivel: "basico"
  tags: ["desarrollo", "pubertad"]

variables:
  datos: [["Mateo experimenta un cambio en su voz y un aumento de estatura repentino", "pubertad"], ["Lucía siente una mayor sensibilidad emocional y cambios en su ciclo menstrual", "pubertad"], ["Santi nota un crecimiento acelerado y la aparición de acné", "pubertad"]]
  idx: uno_de([0,1,2])

enunciado: "Un adolescente presenta el siguiente caso: {datos[idx][0]}. Este conjunto de cambios biológicos caracteriza la etapa de la {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "pubertad"

explicacion: |
  La pubertad es la etapa de transición donde ocurren cambios hormonales significativos que derivan en el desarrollo de caracteres sexuales secundarios.
```

```
metadata:
  materia: "psicologia"
  tema: "identidad_adolescencia"
  nivel: "intermedio"
  tags: ["identidad", "psicologia_evolutiva"]

variables:
  datos: [["Busca grupos sociales con intereses similares para reafirmar quién es", "identidad"], ["Se siente confundido sobre su rol en el mundo y sus valores", "identidad"], ["Experimenta crisis de pertenencia y prueba diferentes estilos de vestimenta", "identidad"]]
  idx: uno_de([0,1,2])

enunciado: "En el desarrollo de la personalidad, cuando un individuo se encuentra en el proceso de {datos[idx][0]}, está trabajando activamente en la formación de su ________."

respuesta: "identidad"
tipo: completar
respuestas_validas:
  - "identidad"

explicacion: |
  Según Erikson, la búsqueda de identidad es la tarea central de la adolescencia, donde el individuo integra sus experiencias para formar un sentido del 'yo'.
```

```
metadata:
  materia: "psicologia"
  tema: "etapas_desarrollo_infantil"
  nivel: "basico"
  tags: ["niñez", "hitos"]

enunciado: "¿Es correcto afirmar que durante la niñez temprana el pensamiento es predominantemente egocéntrico y centrado en el 'aquí y ahora'?"

respuesta: verdadero
tipo: vf

explicacion: |
  En la etapa de la niñez temprana (según Piaget), el niño tiene dificultades para ver las perspectivas de los demás, centrando su percepción en su propia experiencia.
```

```
metadata:
  materia: "psicologia"
  tema: "secuencia_crecimiento"
  nivel: "intermedio"
  tags: ["crecimiento", "desarrollo"]

opciones_explicitas: ["Crecimiento cefalocaudal", "Crecimiento proximodistal", "Maduración de la identidad"]

enunciado: "Ordena los procesos de desarrollo físico y psicológico en el orden cronológico/direccional correcto para un ser humano en desarrollo:"

pasos:
  - "El desarrollo ocurre de la cabeza hacia los pies."
  - "El desarrollo ocurre del centro del cuerpo hacia las extremidades."
  - "La consolidación de la personalidad adulta."

respuesta_orden: ["Crecimiento cefalocaudal", "Crecimiento proximodistal", "Maduración de la identidad"]
tipo: ordenar

explicacion: |
  El desarrollo humano sigue patrones biológicos (cefalocaudal y proximodistal) antes de llegar a la maduración psicológica compleja.
```

```
metadata:
  materia: "psicologia"
  tema: "socializacion_adolescencia"
  nivel: "intermedio"
  tags: ["socializacion", "grupo_pares"]

variables:
  datos: [["El grupo de amigos se vuelve el referente principal de normas", "amigos"], ["La familia sigue siendo el núcleo de valores absolutos", "familia"], ["El individuo se aísla de toda influencia externa", "aislamiento"]]
  idx: uno_de([0,1,2])

enunciado: "En la transición de la niñez a la adolescencia, el foco de influencia social suele cambiar. Si observamos que {datos[idx][0]}, esto indica un desplazamiento hacia el grupo de ________."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "amigos"
  - "familia"
  - "aislamiento"

explicacion: |
  Durante la adolescencia, el grupo de pares (amigos) adquiere una relevancia crucial para la socialización, compitiendo con la autoridad familiar en la formación de la identidad.
```

## Sección: salud-mental-ansiedad-depresion-pedir-ayuda (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["ansiedad", "conceptos"]

respuesta: "estado_de_alerta"
tipo: completar
respuestas_validas:
  - "estado_de_alerta"
  - "reaccion_de_miedo"

enunciado: "La ansiedad se caracteriza por ser un ___ constante ante situaciones que no representan un peligro real."

explicacion: |
  La ansiedad es una respuesta natural de supervivencia, pero cuando se vuelve desproporcionada o persistente, se convierte en un trastorno que interfiere con la vida cotidiana.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["sintomas", "depresion"]

respuesta: verdadero
tipo: vf
enunciado: "La pérdida de interés en actividades que antes resultaban placenteras, conocida como anhedonia, es un síntoma central de la depresión."

explicacion: |
  La anhedonia es la incapacidad para sentir placer o interés, un indicador clave en los cuadros depresivos.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ayuda_profesional", "criterios"]

respuesta: "interferencia_vida_diaria"
tipo: mc
opciones_explicitas: ["cambio_de_humor_temporal", "interferencia_vida_diaria", "estres_laboral_comun"]

enunciado: "El criterio principal para considerar que un malestar emocional requiere ayuda profesional es la ___."

explicacion: |
  Aunque el estrés es normal, cuando las emociones impiden realizar tareas básicas (comer, dormir, trabajar, socializar), es momento de consultar a un profesional.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ciclo_ansiedad", "comportamiento"]

respuesta_orden: ["pensamiento_catastrofico", "reaccion_fisica", "conducta_de_evitacion"]
tipo: ordenar

opciones_explicitas: ["pensamiento_catastrofico", "reaccion_fisica", "conducta_de_evitacion"]

enunciado: "Ordena la secuencia típica de un episodio de crisis de ansiedad:"

pasos:
  - "Se identifica una amenaza percibida."
  - "Se manifiestan taquicardia o falta de aire."
  - "Se evita el lugar o la situación para reducir el malestar."

explicacion: |
  El ciclo suele comenzar con un pensamiento intrusivo, seguido de una respuesta fisiológica y culminando en la evitación, lo cual refuerza el trastorno a largo plazo.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["mitos", "salud_mental"]

respuesta: falso
tipo: vf

enunciado: "La depresión es simplemente una tristeza profunda que se cura con 'echarle ganas' o voluntad propia."

explicacion: |
  La depresión es una condición clínica que involucra desequilibrios neuroquímicos y factores psicológicos; no se resuelve únicamente con voluntad.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad"
  nivel: "basico"
  tags: ["ansiedad", "señales_alerta"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Ana siente una preocupación constante por eventos futuros que no han ocurrido.", "ansiedad"], ["Luis experimenta palpitaciones y falta de aire ante situaciones sociales mínimas.", "ansiedad"]]

enunciado: "En el caso de {casos[caso_idx][0]}, el síntoma principal es un cuadro de {casos[caso_idx][1]}."

respuesta: "ansiedad"
tipo: completar
respuestas_validas:
  - "ansiedad"

explicacion: |
  La ansiedad se caracteriza por una preocupación excesiva, persistente y desproporcionada ante situaciones que no representan un peligro real o inmediato.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_depresion"
  nivel: "intermedio"
  tags: ["depresion", "sintomas"]

enunciado: "Si una persona pierde la capacidad de sentir placer por actividades que antes disfrutaba, este síntoma se denomina ___."

respuesta: "anhedonia"
tipo: completar
respuestas_validas:
  - "anhedonia"

explicacion: |
  La anhedonia es uno de los síntomas nucleares de la depresión mayor y se refiere a la incapacidad para experimentar placer o interés en actividades previamente gratificantes.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_pedir_ayuda"
  nivel: "basico"
  tags: ["ayuda_profesional", "bienestar"]

enunciado: "Si los síntomas de tristeza o ansiedad interfieren significativamente con la vida laboral, social o académica de una persona, ¿es recomendable buscar ayuda profesional?"

respuesta: verdadero
tipo: vf

explicacion: |
  La funcionalidad es un criterio clave. Cuando el malestar emocional impide el desarrollo normal de las actividades cotidianas, la intervención profesional es necesaria.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_proceso_ayuda"
  nivel: "intermedio"
  tags: ["proceso", "terapia"]

enunciado: "Ordena los pasos típicos para iniciar un proceso de acompañamiento profesional:"

opciones_explicitas: ["Identificar el malestar", "Buscar un profesional especializado", "Asistir a la primera sesión de evaluación"]

respuesta_orden: ["Identificar el malestar", "Buscar un profesional especializado", "Asistir a la primera sesión de evaluación"]
tipo: ordenar

explicacion: |
  El proceso comienza con la autopercepción del malestar, seguido de la búsqueda activa de un especialista y finalmente el encuentro clínico para el diagnóstico y plan de tratamiento.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_sintomas_fisicos"
  nivel: "basico"
  tags: ["somatización", "ansiedad"]

variables:
  sintoma_idx: uno_de([0, 1])
  sintomas: ["taquicardia", "dolor de estómago"]

enunciado: "Una persona con un trastorno de ansiedad generalizada puede presentar, por ejemplo, ___."

opciones_explicitas: ["taquicardia", "dolor de estómago"]

respuesta: sintomas[sintoma_idx]
tipo: mc

explicacion: |
  La ansiedad activa el sistema nervioso simpático, lo que puede provocar manifestaciones físicas como taquicardia, sudoración o tensión muscular.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["depresion", "emociones", "salud_mental"]

respuesta: "patologia"
tipo: "mc"
opciones_explicitas: ["emocion_natural", "patologia"]

enunciado: "Sentir tristeza profunda ante una pérdida significativa es una respuesta emocional normal, pero cuando esta persistencia interfiere con la vida cotidiana, deja de ser una emoción natural para convertirse en una ___."

explicacion: |
  Es fundamental distinguir entre el duelo o la tristeza situacional y un trastorno depresivo. La diferencia radica en la intensidad, la duración y, sobre todo, la capacidad de la persona para retomar sus actividades normales.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["ansiedad", "mitos"]

respuesta: falso
tipo: "vf"

enunciado: "La ansiedad es simplemente un exceso de preocupación que se puede controlar únicamente con 'echarle ganas' o voluntad propia."

explicacion: |
  Falso. Los trastornos de ansiedad involucran respuestas neurobiológicas y fisiológicas que no se resuelven solo con voluntad. Requieren herramientas terapéuticas y, en ocasiones, abordaje farmacológico.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ayuda_profesional", "señales_alerta"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [["perder el interés en hobbies que antes disfrutaba", "anhedonia"], ["sentir un cansancio extremo sin causa física", "fatiga"], ["alteraciones constantes en el patrón de sueño", "insomnio"]]

respuesta: escenarios[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["perder el interés en hobbies que antes disfrutaba", "anhedonia", "sentir un cansancio extremo sin causa física", "fatiga", "alteraciones constantes en el patrón de sueño", "insomnio"]

enunciado: "Uno de los indicadores de que es momento de buscar ayuda profesional es cuando se presenta: ___."

explicacion: |
  La pérdida de placer o interés (anhedonia), la fatiga persistente o los cambios en el sueño son señales de alerta que indican que el malestar ha pasado de ser transitorio a ser un síntoma clínico.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["ayuda_profesional", "pasos"]

respuesta_orden: ["identificar_malestar", "buscar_profesional", "iniciar_terapia"]
tipo: "ordenar"
opciones_explicitas: ["identificar_malestar", "buscar_profesional", "iniciar_terapia"]

enunciado: "Ordena los pasos lógicos para abordar un problema de salud mental de forma efectiva:"

pasos:
  - "Reconocer que algo en nuestro estado de ánimo no es habitual."
  - "Contactar a un psicólogo o psiquiatra capacitado."
  - "Asistir a las sesiones y trabajar en el proceso terapéutico."

explicacion: |
  El primer paso es la autopercepción (conciencia del problema), seguido de la acción externa (búsqueda de ayuda) y finalmente el compromiso con el tratamiento.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ayuda_profesional", "criterios"]

respuesta: "interferir"
tipo: "completar"
respuestas_validas:
  - "interferir"
  - "afectar"
  - "obstaculizar"

enunciado: "El criterio clínico principal para determinar si un malestar emocional requiere intervención profesional es cuando los síntomas comienzan a ___ significativamente en las áreas de funcionamiento diario (social, laboral o académico)."

explicacion: |
  No es necesario esperar a estar en una crisis extrema para pedir ayuda. Si el malestar impide que la persona cumpla con sus responsabilidades o disfrute de su vida, la intervención es recomendada.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["emociones", "diagnostico"]

tipo: mc
opciones_explicitas: ["La tristeza es una emoción pasajera ante un evento, mientras que la depresión es un trastorno persistente que afecta la funcionalidad.", "La tristeza es un trastorno clínico y la depresión es una reacción normal.", "No existe diferencia entre ambas, son sinónimos.", "La tristeza es crónica y la depresión es aguda."]
respuesta: "La tristeza es una emoción pasajera ante un evento, mientras que la depresión es un trastorno persistente que afecta la funcionalidad."
enunciado: "¿Cuál es la principal distinción clínica entre experimentar tristeza y padecer un cuadro depresivo?"
explicacion: |
  La tristeza es una respuesta emocional natural y transitoria ante la pérdida o el desengaño. La depresión es un trastorno que se caracteriza por la persistencia de síntomas (como anhedonia o apatía) y una interferencia significativa en la vida cotidiana del individuo.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["ansiedad", "miedo"]

tipo: vf

enunciado: "El miedo es una respuesta ante una amenaza real e inmediata, mientras que la ansiedad es una respuesta ante una amenaza futura o imaginaria."

respuesta: verdadero

explicacion: |
  El miedo es una respuesta biológica de supervivencia ante un peligro presente. La ansiedad, en cambio, implica una anticipación de un peligro que aún no ha ocurrido o que es incierto, caracterizándose por la preocupación excesiva.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "basico"
  tags: ["prevencion", "ayuda_profesional"]

variables:
  escenario_idx: uno_de([0, 1])
  casos: [["Dificultad para dormir y pérdida de interés en hobbies por más de dos semanas", "Buscar ayuda profesional"], ["Sentir nerviosismo antes de un examen importante", "Observar la evolución sin intervención inmediata"]]

tipo: completar

enunciado: "Si una persona experimenta {casos[escenario_idx][0]}, la acción recomendada es ___."

respuestas_validas:
  - "Buscar ayuda profesional"
  - "Observar la evolución sin intervención inmediata"
respuesta: casos[escenario_idx][1]

explicacion: |
  Cuando los síntomas interfieren con la capacidad de la persona para realizar sus actividades diarias (trabajo, estudio, relaciones) de forma sostenida en el tiempo, es fundamental consultar con un profesional de la salud mental.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["crisis", "ansiedad"]

tipo: ordenar

opciones_explicitas: ["Disparador o estresor", "Pensamientos catastróficos", "Síntomas físicos (taquicardia, sudoración)", "Conductas de evitación"]

enunciado: "Ordena la secuencia típica de un ciclo de respuesta ante la ansiedad ante un estresor:"

respuesta_orden: ["Disparador o estresor", "Pensamientos catastróficos", "Síntomas físicos (taquicardia, sudoración)", "Conductas de evitación"]

explicacion: |
  El ciclo suele comenzar con un estímulo (estresor), seguido de una interpretación cognitiva distorsionada (pensamiento catastrófico), que desencadena la respuesta fisiológica (síntomas físicos) y finalmente una estrategia de afrontamiento mal adaptativa (evitación).
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad_depresion_pedir_ayuda"
  nivel: "intermedio"
  tags: ["sintomatologia", "depresion"]

tipo: mc
opciones_explicitas: ["Anhedonia (incapacidad de sentir placer)", "Hiperventilación", "Aumento de la energía física", "Foco excesivo en el presente"]
respuesta: "Anhedonia (incapacidad de sentir placer)"

enunciado: "¿Qué síntoma es característico de la depresión y ayuda a distinguirla de otros estados de ánimo bajos?"

explicacion: |
  La anhedonia, definida como la pérdida de la capacidad de experimentar placer en actividades que antes eran gratificantes, es uno de los criterios diagnósticos centrales para los trastornos depresivos.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ansiedad"
  nivel: "basico"
  tags: ["ansiedad", "sintomas"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Ana siente palpitaciones, falta de aire y un miedo constante a que algo malo suceda sin razón aparente.", "ansiedad"], ["Luis evita ir a reuniones sociales porque siente que todos lo están juzgando y tiene sudoración excesiva.", "ansiedad"]]

enunciado: "En el caso de {escenarios[escenario_idx][0]}, la persona está experimentando síntomas característicos de: ___"

respuestas_validas:
  - "ansiedad"
respuesta: escenarios[escenario_idx][1]
tipo: completar

explicacion: |
  Los síntomas físicos (palpitaciones) y cognitivos (miedo constante) descritos son indicadores comunes de un cuadro de ansiedad.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_depresion"
  nivel: "intermedio"
  tags: ["depresion", "anhedonia"]

variables:
  caso_idx: uno_de([0, 1, 2])
  casos: [["Pedro ya no disfruta jugar al fútbol, algo que antes le apasionaba.", "anhedonia"], ["María siente una tristeza profunda y falta de energía que dura más de dos semanas.", "depresion"], ["Juan tiene alteraciones constantes en el sueño y pérdida de apetito.", "depresion"]]

enunciado: "Si una persona presenta {casos[caso_idx][0]}, es un indicador clínico que requiere atención profesional."

respuestas_validas:
  - "anhedonia"
  - "depresion"
respuesta: casos[caso_idx][1]
tipo: completar

explicacion: |
  La incapacidad para sentir placer en actividades que antes eran gratificantes se conoce como anhedonia, un síntoma clave en la depresión.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ayuda"
  nivel: "intermedio"
  tags: ["ayuda_profesional", "bienestar"]

enunciado: "¿Es correcto buscar ayuda profesional si los problemas emocionales interfieren con la vida cotidiana (trabajo, estudios, relaciones)?"

respuestas_validas:
  - "verdadero"
  - "falso"
respuesta: verdadero
tipo: vf

explicacion: |
  La funcionalidad es un criterio clave. Si el malestar impide el desarrollo normal de las actividades diarias, es momento de consultar a un profesional.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ayuda"
  nivel: "avanzado"
  tags: ["riesgo", "prevencion"]

variables:
  alerta_idx: uno_de([0, 1])
  alertas: [["Pensamientos de autolesión o ideas de muerte.", "riesgo_critico"], ["Aislamiento social extremo y abandono del autocuidado.", "riesgo_critico"]]

enunciado: "Identifica la gravedad de la siguiente señal de alerta: {alertas[alerta_idx][0]}"

opciones_explicitas: ["riesgo_critico", "malestar_leve", "estrés_común"]
respuesta: alertas[alerta_idx][1]
tipo: mc

explicacion: |
  Tanto los pensamientos de autolesión como el abandono total del autocuidado son señales de alerta crítica que requieren intervención inmediata.
```

```
metadata:
  materia: "psicologia"
  tema: "salud_mental_ayuda"
  nivel: "basico"
  tags: ["proceso", "ayuda"]

enunciado: "Ordena los pasos lógicos para abordar un problema de salud mental detectado:"

opciones_explicitas: ["Reconocer el malestar", "Buscar apoyo profesional", "Iniciar tratamiento y seguimiento"]
respuesta_orden: ["Reconocer el malestar", "Buscar apoyo profesional", "Iniciar tratamiento y seguimiento"]
tipo: ordenar

explicacion: |
  El proceso saludable comienza con la autopercepción del malestar, seguido de la búsqueda de un experto y, finalmente, el compromiso con un proceso terapéutico.
```

## Sección: sesgos-cognitivos-heuristicas-error-sistematico (25 preguntas)

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["heuristica", "procesamiento_mental"]

respuesta: "atajo mental"
tipo: completar
respuestas_validas:
  - "atajo mental"
  - "proceso rápido"
  - "regla empírica"

enunciado: "En psicología cognitiva, una heurística se define comúnmente como un ___ que permite simplificar la toma de decisiones."

explicacion: |
  Las heurísticas son estrategias mentales que simplifican el procesamiento de la información, permitiendo tomar decisiones rápidas, aunque no siempre óptimas.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["disponibilidad", "sesgo"]

opciones_explicitas: ["La facilidad con la que ejemplos vienen a la mente", "La similitud entre dos objetos", "La memoria a largo plazo", "La velocidad de reacción"]
respuesta: "La facilidad con la que ejemplos vienen a la mente"
tipo: mc

enunciado: "La heurística de disponibilidad se basa en ___ para estimar la probabilidad de un evento."

explicacion: |
  Si un evento es fácil de recordar (por ser impactante o reciente), tendemos a creer que es más frecuente de lo que realmente es.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: verdadero
tipo: vf

enunciado: "Un sesgo cognitivo es el error sistemático de juicio que surge como consecuencia de la aplicación de una heurística."

explicacion: |
  Correcto. Mientras que la heurística es el mecanismo (el atajo), el sesgo es el error o desviación sistemática que dicho mecanismo puede producir.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["proceso_cognitivo"]

opciones_explicitas: ["Información ambiental", "Heurística aplicada", "Sesgo cognitivo (error)"]
respuesta_orden: ["Información ambiental", "Heurística aplicada", "Sesgo cognitivo (error)"]
tipo: ordenar

enunciado: "Ordene los elementos según el flujo lógico que explica la producción de un error de juicio sistemático:"

explicacion: |
  El proceso comienza con la información disponible, se procesa mediante un atajo mental (heurística) y, si este es inadecuado para el contexto, resulta en un sesgo.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "avanzado"
  tags: ["representatividad", "estereotipos"]

variables:
  escenario: uno_de([["Un profesor que parece tímido y le gusta leer", "es probable que sea bibliotecario"], ["Un hombre que viste formal y es muy metódico", "es probable que sea contador"], ["Una persona que ama el arte y los museos", "es probable que sea artista"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: [escenario[0], escenario[1], "Es imposible determinar", "Depende de la estadística real"]

enunciado: "La heurística de representatividad nos lleva a juzgar la probabilidad de un evento basándonos en cuánto se parece a nuestro prototipo mental. Por ejemplo, si {escenario[0]}..."

explicacion: |
  Este sesgo nos hace ignorar las probabilidades base (estadística real) para centrarnos en la similitud con un estereotipo o prototipo.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_heuristica_disponibilidad"
  nivel: "basico"
  tags: ["heuristica", "disponibilidad", "juicio"]

enunciado: "Juan cree que es mucho más probable morir en un accidente de avión que en uno de coche porque ha visto muchas noticias sobre accidentes aéreos recientemente. Este error de juicio se debe a la heurística de ___."

respuestas_validas:
  - "disponibilidad"
tipo: completar

explicacion: |
  La heurística de disponibilidad consiste en juzgar la probabilidad de un evento basándose en la facilidad con la que ejemplos vienen a la mente. Como los accidentes de avión son muy mediáticos, son más 'disponibles' en la memoria, lo que lleva a una sobreestimación de su frecuencia.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_representatividad"
  nivel: "intermedio"
  tags: ["representatividad", "estereotipos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["Ana es muy tímida, organizada y le gusta leer en soledad. ¿Es más probable que sea bibliotecaria o agente de seguros?", "bibliotecaria"], ["Pedro es muy extrovertido, le gusta el deporte y las fiestas. ¿Es más probable que sea agente de seguros o contable?", "agente de seguros"]]

enunciado: "Considera el siguiente caso: {escenarios[caso_idx][0]} ¿Cuál es la opción más probable según el juicio intuitivo de la heurística de representatividad?"

opciones_explicitas: ["bibliotecaria", "agente de seguros", "contable", "no se puede determinar"]
respuesta: escenarios[caso_idx][1]
tipo: mc

explicacion: |
  La heurística de representatividad nos hace juzgar la probabilidad de un evento basándonos en cuánto se parece a un estereotipo, ignorando la probabilidad base (la frecuencia real de esas profesiones en la población).
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_confirmacion"
  nivel: "basico"
  tags: ["confirmacion", "evidencia"]

enunciado: "Un investigador que cree que una nueva terapia es efectiva solo busca estudios que demuestren su éxito y descarta aquellos que muestran que no funciona. ¿Es este un ejemplo de sesgo de confirmación?"

respuesta: verdadero
tipo: vf

explicacion: |
  El sesgo de confirmación es la tendencia a buscar, interpretar y recordar información que confirma nuestras creencias previas, ignorando la evidencia que las contradice.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_anclaje"
  nivel: "intermedio"
  tags: ["anclaje", "negociacion"]

pasos:
  - "Un vendedor dice que el precio original de un reloj es de $1.000."
  - "Inmediatamente ofrece un 'descuento especial' de $600."
  - "El comprador siente que está haciendo un gran negocio por $400, aunque el valor real sea menor."

enunciado: "En el ejemplo anterior, el primer número mencionado ($1.000) actúa como un ___ que condiciona la percepción del valor final."

respuestas_validas:
  - "ancla"
tipo: completar

explicacion: |
  El efecto anclaje ocurre cuando la mente humana se apoya demasiado en la primera pieza de información ofrecida (el 'ancla') para tomar decisiones posteriores, incluso si esa información es irrelevante.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos_proceso"
  nivel: "avanzado"
  tags: ["heuristica", "error"]

enunciado: "Ordena las etapas de cómo un error sistemático de juicio (sesgo) afecta la toma de decisiones:"

opciones_explicitas: ["Percepción de información incompleta", "Uso de una heurística (atajo mental)", "Error en la estimación de probabilidad", "Toma de una decisión errónea"]
respuesta_orden: ["Percepción de información incompleta", "Uso de una heurística (atajo mental)", "Error en la estimación de probabilidad", "Toma de una decisión errónea"]
tipo: ordenar

explicacion: |
  El proceso comienza con la entrada de información, la cual es procesada rápidamente mediante atajos (heurísticas). Si la heurística no es adecuada para el contexto, produce un error sistemático en la probabilidad estimada, derivando en una decisión sesgada.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["heuristica", "disponibilidad", "juicio"]

enunciado: "Cuando una persona sobreestima la probabilidad de que ocurra un evento basándose únicamente en lo reciente o impactante que le resulta el recuerdo de eventos similares, está utilizando la heurística de ___."

respuestas_validas:
  - "disponibilidad"
tipo: completar

explicacion: |
  La heurística de disponibilidad es un atajo mental que consiste en juzgar la frecuencia o probabilidad de un evento en función de la facilidad con la que ejemplos vienen a la mente.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["representatividad", "probabilidad", "error"]

enunciado: "Si una persona asume que un individuo es un bibliotecario solo porque encaja perfectamente en el estereotipo de un bibliotecario, ignorando que estadísticamente es más probable que sea un trabajador general de un sector más grande, está cometiendo el error de la heurística de ___."

opciones_explicitas: ["Representatividad", "Disponibilidad", "Anclaje", "Confirmación"]
respuesta: "Representatividad"
tipo: mc

explicacion: |
  La heurística de representatividad nos lleva a juzgar la probabilidad de una categoría basándonos en cuánto se parece un objeto a un prototipo, ignorando la probabilidad base (base rate fallacy).
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["confirmacion", "verdadera_falsa"]

enunciado: "¿Es el sesgo de confirmación una heurística (un atajo mental) o es un error sistemático de juicio?"

opciones_explicitas: ["Es una heurística", "Es un error sistemático"]
respuesta: "Es un error sistemático"
tipo: mc

explicacion: |
  Aunque están relacionados, las heurísticas son procesos de simplificación para la toma de decisiones rápida, mientras que el sesgo de confirmación es el error sistemático de buscar solo información que respalde nuestras creencias previas.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "avanzado"
  tags: ["proceso", "sesgo", "ordenar"]

enunciado: "Ordene los pasos que describen cómo el sesgo de anclaje afecta una negociación:"

opciones_explicitas: ["Se recibe un primer dato o cifra (ancla)", "Se ajusta la opinión basándose en ese dato inicial", "Se llega a una conclusión influenciada por el ancla"]
respuesta_orden: ["Se recibe un primer dato o cifra (ancla)", "Se ajusta la opinión basándose en ese dato inicial", "Se llega a una conclusión influenciada por el ancla"]
tipo: ordenar

explicacion: |
  El anclaje ocurre cuando la primera información recibida actúa como un punto de referencia mental, limitando el rango de los ajustes posteriores.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["anclaje", "percepcion"]

variables:
  idx: uno_de([0,1])
  datos: [["$100", "alto"], ["$10", "bajo"]]

enunciado: "Si en una subasta el primer precio que se menciona es de {datos[idx][0]}, la percepción del valor de los objetos siguientes se verá afectada hacia un nivel ___ debido al efecto de anclaje."

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El anclaje establece un punto de partida mental que condiciona todo el juicio posterior, incluso si el ancla es arbitraria o irrelevante.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["heuristica", "algoritmo", "procesamiento"]

enunciado: "Mientras que un algoritmo es un procedimiento paso a paso que garantiza encontrar la solución correcta, una heurística es un ___ que permite tomar decisiones rápidas pero no garantiza la exactitud."

respuestas_validas:
  - "atajo mental"
  - "atajo"

respuesta: "atajo mental"
tipo: completar

explicacion: |
  Las heurísticas son reglas mentales simplificadas (atajos) que facilitan la resolución de problemas de forma rápida, pero al no ser procesos exhaustivos como los algoritmos, pueden conducir a errores sistemáticos o sesgos.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["disponibilidad", "representatividad"]

enunciado: "Si una persona juzga la probabilidad de un evento basándose en qué tan fácilmente le vienen ejemplos a la mente (memoria), está usando la heurística de disponibilidad. Si juzga basándose en cuánto se parece el evento a un prototipo mental, está usando la heurística de ___."

pasos:
  - "Identificar el criterio de juicio: ¿es facilidad de recuerdo o similitud con un modelo?"
  - "Relacionar el criterio con el sesgo correspondiente."

opciones_explicitas: ["disponibilidad", "representatividad"]

respuesta: "representatividad"
tipo: mc

explicacion: |
  La disponibilidad se basa en la facilidad de recuperación de información (memoria), mientras que la representatividad se basa en la comparación con un estereotipo o prototipo.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["sesgo", "heuristica"]

enunciado: "¿Es correcto afirmar que todas las heurísticas producen necesariamente un sesgo cognitivo?"

respuesta: falso
tipo: vf

explicacion: |
  Falso. La heurística es el mecanismo (el atajo), mientras que el sesgo es el error sistemático resultante. Una heurística es útil y eficiente en la mayoría de los casos; el sesgo es la desviación que ocurre cuando el atajo falla.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["procesamiento", "cognicion"]

enunciado: "Ordene el proceso que lleva desde la percepción de un estímulo hasta la aparición de un error sistemático de juicio:"

opciones_explicitas: ["Percepción del estímulo", "Aplicación de una heurística", "Producción de un sesgo cognitivo"]

respuesta_orden: ["Percepción del estímulo", "Aplicación de una heurística", "Producción de un sesgo cognitivo"]
tipo: ordenar

explicacion: |
  El proceso comienza con la entrada de información, sigue con el uso de un atajo mental para procesarla rápidamente (heurística) y puede culminar en un error de juicio si el atajo no es adecuado para la situación (sesgo).
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "avanzado"
  tags: ["anclaje", "ajuste"]

enunciado: "En el efecto de anclaje, el primer dato recibido actúa como un ___ sobre el cual se realiza un ___ insuficiente para llegar a la respuesta correcta."

opciones_explicitas: ["ancla | ajuste", "base | cálculo", "punto | movimiento"]

respuesta: "ancla | ajuste"
tipo: mc

explicacion: |
  El efecto de anclaje ocurre cuando la mente se queda 'pegada' a un valor inicial (ancla) y, aunque intenta moverse hacia una cifra más realista, el ajuste que realiza es demasiado pequeño, dejando la respuesta final sesgada hacia el ancla.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["heuristica", "disponibilidad"]

variables:
  datos: [["Se lee una noticia sobre un accidente aéreo", "miedo a volar"], ["Se ve un reporte sobre ataques de tiburón", "miedo a nadar"], ["Se escucha sobre un accidente de coche", "miedo a conducir"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["miedo a volar", "miedo a nadar", "miedo a conducir", "miedo a los terremotos"]

enunciado: "Una persona cree que es muy probable que ocurra un evento catastrófico porque acaba de leer una noticia impactante sobre ello. Este es un ejemplo del sesgo de disponibilidad, donde la persona estima la probabilidad basándose en la facilidad con la que los ejemplos vienen a la mente. En este caso, el miedo es a {datos[idx][0]}."

explicacion: |
  El sesgo de disponibilidad ocurre cuando estimamos la probabilidad de un evento basándonos en qué tan fácilmente recordamos ejemplos similares. La noticia reciente hace que el evento sea más "disponible" en la memoria, distorsionando la percepción del riesgo real.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "intermedio"
  tags: ["representatividad", "estereotipos"]

variables:
  datos: [["Juan es muy ordenado y le gusta leer poesía", "es un bibliotecario"], ["Ana es muy sociable y le gusta bailar", "es una animadora"], ["Luis es muy metódico y usa lentes", "es un profesor"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["es un bibliotecario", "es una animadora", "es un profesor", "es un médico"]

enunciado: "Si se nos dice que {datos[idx][0]}, tendemos a juzgar que la persona pertenece a una profesión específica basándonos en un prototipo mental, ignorando las probabilidades estadísticas. Este error se llama heurística de representatividad."

explicacion: |
  La heurística de representatividad nos lleva a juzgar la probabilidad de un evento basándonos en cuánto se parece a un estereotipo, ignorando la frecuencia base (probabilidad real) de que ese evento ocurra.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["anclaje", "decision"]

variables:
  datos: [["1000", "500"], ["5000", "2500"], ["100", "40"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar

enunciado: "En una negociación, si el vendedor comienza diciendo que el precio es de ${datos[idx][0]}, la primera cifra actúa como un 'ancla' que condiciona la negociación, haciendo que la contraparte termine aceptando un precio cercano a ${datos[idx][1]}."

explicacion: |
  El efecto anclaje es la tendencia humana a confiar demasiado en la primera pieza de información ofrecida (el ancla) al tomar decisiones, incluso si esa información es irrelevante para el valor real.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "basico"
  tags: ["confirmacion", "creencias"]

respuesta: verdadero
tipo: vf

enunciado: "El sesgo de confirmación es la tendencia a buscar, interpretar y recordar información que confirma nuestras creencias preexistentes, mientras ignoramos la evidencia que las contradice."

explicacion: |
  Correcto. Este sesgo es uno de los más comunes y refuerza nuestras convicciones, dificultando el pensamiento crítico y la objetividad.
```

```
metadata:
  materia: "psicologia"
  tema: "sesgos_cognitivos"
  nivel: "avanzado"
  tags: ["heuristica", "proceso_mental"]

opciones_explicitas: ["Percepción de un estímulo impactante", "Recuperación rápida en la memoria", "Estimación de probabilidad distorsionada", "Error de juicio sistemático"]

respuesta_orden: ["Percepción de un estímulo impactante", "Recuperación rápida en la memoria", "Estimación de probabilidad distorsionada", "Error de juicio sistemático"]
tipo: ordenar

enunciado: "Ordena los pasos que describen cómo una heurística puede derivar en un error de juicio sistemático (como el sesgo de disponibilidad):"

explicacion: |
  El proceso comienza con la percepción de un estímulo (frecuentemente emocional o reciente), seguido de su fácil recuperación en la memoria, lo que lleva a una estimación errónea de la frecuencia y finalmente al error sistemático en el juicio.
```

