# Examen jefe — [PENDIENTE #905]

> Logro #905. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **129 preguntas totales** en 5/5 secciones.

---

## Sección: lenguaje-musical-pentagrama-escalas-intervalos (25 preguntas)

```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["pentagrama", "lineas", "espacios"]

respuesta: 5
tipo: completar
tolerancia_abs: 0

enunciado: "El pentagrama está compuesto por ___ líneas horizontales (y 4 espacios entre ellas)."

explicacion: |
  El pentagrama es el conjunto de 5 líneas y 4 espacios donde se escribe la música.
```

```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["notas", "orden"]

opciones_explicitas: ["Do, Re, Mi, Fa, Sol, La, Si", "Do, Mi, Sol, Si, Re", "Fa, Sol, La, Si, Do, Re, Mi"]
respuesta: "Do, Re, Mi, Fa, Sol, La, Si"
tipo: mc

enunciado: "¿Cuál es el orden ascendente natural de las notas musicales?"

explicacion: |
  El orden estándar de la escala diatónica es Do, Re, Mi, Fa, Sol, La, Si.
```

```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["claves", "sol"]

respuesta: "Sol"
tipo: completar
respuestas_validas:
  - "Sol"

enunciado: "La clave que se utiliza para indicar que la nota situada en la segunda línea del pentagrama es la nota ___."

explicacion: |
  La clave de Sol se dibuja partiendo desde la segunda línea, asignándole ese nombre.
```

```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["lineas_adicionales"]

respuesta: verdadero
tipo: vf

enunciado: "¿Se utilizan líneas adicionales para representar notas que están por encima o por debajo del pentagrama?"

explicacion: |
  Correcto. Cuando las notas se salen del rango de las 5 líneas, se usan líneas adicionales.
```

```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["silencios"]

opciones_explicitas: ["Negra", "Corchea", "Fusa"]
respuesta: "Negra"
tipo: mc

enunciado: "En un pentagrama, el símbolo que representa un silencio de un tiempo (en compás de 4/4) es la ___."

explicacion: |
  El símbolo de la negra representa un tiempo de duración en la música occidental.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "intermedio"
  tags: ["escala_mayor", "tonos", "semitonos"]

respuesta: "Semitono"
tipo: completar
respuestas_validas:
  - "Semitono"

enunciado: "La estructura de intervalos de una escala mayor sigue el patrón Tono, Tono, Semitono, Tono, Tono, Tono, ____. ¿Cuál es el último intervalo?"

explicacion: |
  La escala mayor sigue el patrón: T-T-S-T-T-T-S (donde T=Tono y S=Semitono).
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "intermedio"
  tags: ["escala_mayor"]

respuesta: "Sol mayor"
tipo: mc
opciones_explicitas: ["Sol mayor", "Do mayor"]

enunciado: "Si una escala mayor tiene exactamente un sostenido, ubicado en su séptima nota (Fa#), esa escala es ___."

explicacion: |
  La escala de Sol mayor tiene un Fa# para cumplir el patrón de la escala mayor; Do mayor no tiene ningún sostenido.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "intermedio"
  tags: ["escala_menor"]

opciones_explicitas: ["Menor", "Mayor", "Aumentada"]
respuesta: "Menor"
tipo: mc

enunciado: "Si comparamos una escala mayor con una escala que tiene la tercera nota disminuida (un semitono más abajo), estamos ante una escala ___."

explicacion: |
  La diferencia fundamental entre escala mayor y menor es la tercera nota.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["armadura", "sostenidos"]

opciones_explicitas: ["Fa, Do, Sol, Re, La, Mi, Si", "Si, Mi, La, Re, Sol, Do, Fa", "Do, Re, Mi, Fa, Sol, La, Si"]
respuesta: "Fa, Do, Sol, Re, La, Mi, Si"
tipo: mc

enunciado: "¿Cuál es el orden estándar de aparición de las alteraciones sostenidos en una armadura?"

explicacion: |
  El orden de los sostenidos es siempre Fa, Do, Sol, Re, La, Mi, Si.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["ciclo_quintas"]

respuesta: 1
tipo: completar
tolerancia_abs: 0

enunciado: "Si subimos una quinta justa desde Do, llegamos a Sol. Si subimos otra quinta desde Sol, ¿cuántos sostenidos tiene la nueva escala (Re mayor)?"

explicacion: |
  La escala de Re mayor tiene un sostenido (Fa#).
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "basico"
  tags: ["unisono"]

respuesta: "Igual"
tipo: completar
respuestas_validas:
  - "Igual"

enunciado: "Un intervalo de unísono ocurre cuando dos notas son ___."

explicacion: |
  El unísono es la distancia entre dos notas con la misma frecuencia.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "basico"
  tags: ["octava"]

opciones_explicitas: ["Do - Do", "Do - Re", "Do - Mi"]
respuesta: "Do - Do"
tipo: mc

enunciado: "¿Cuál de estos pares representa una octava?"

explicacion: |
  La octava es el intervalo entre dos notas con el mismo nombre pero diferente altura.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["semitonos", "segunda"]

respuesta: 2
tipo: completar
tolerancia_abs: 0

enunciado: "Una segunda mayor (por ejemplo de Do a Re) contiene ___ semitonos."

explicacion: |
  La segunda mayor está compuesta por dos semitonos.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["quinta_justa"]

respuesta: "5"
tipo: completar
tolerancia_abs: 0

enunciado: "Un intervalo de quinta justa abarca ___ grados de la escala."

explicacion: |
  Se cuenta la nota inicial como el primer grado (Do=1, Re=2, Mi=3, Fa=4, Sol=5).
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["tercera"]

opciones_explicitas: ["Mayor", "Menor"]
respuesta: "Mayor"
tipo: mc

enunciado: "Un intervalo de Do a Mi es una tercera ___, mientras que de Do a Mi bemol es una tercera menor."

explicacion: |
  La tercera mayor tiene 4 semitonos y la menor tiene 3.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "basico"
  tags: ["error_comun"]

respuesta: falso
tipo: vf
enunciado: "¿Es cierto que entre cualquier par de notas consecutivas en un piano siempre hay un semitono?"

explicacion: |
  Falso. Entre Mi y Fa, o entre Si y Do, hay un semitono, pero entre Do y Re hay un tono.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "avanzado"
  tags: ["tritono"]

opciones_explicitas: ["Aumentado", "Disminuido"]
respuesta: "Aumentado"
tipo: mc

enunciado: "Un intervalo de cuarta justa que se aumenta en un semitono se convierte en un tritono o cuarta ___."

explicacion: |
  El tritono es un intervalo inestable que puede ser cuarta aumentada o quinta disminuida.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "basico"
  tags: ["tono"]

respuesta: 2
tipo: completar
tolerancia_abs: 0

enunciado: "Un tono musical equivale a ___ semitonos."

explicacion: |
  La unidad básica de la escala cromática es el semitono; dos de ellos forman un tono.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["sexta"]

respuesta: 9
tipo: completar
tolerancia_abs: 0

enunciado: "Una sexta mayor contiene exactamente ___ semitonos."

explicacion: |
  La sexta mayor (ej. Do a La) tiene 9 semitonos.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["octava"]

opciones_explicitas: ["7", "8", "9"]
respuesta: "8"
tipo: mc

enunciado: "Si contamos los grados de una octava (incluyendo la nota inicial y la final), ¿cuántos grados hay?"

explicacion: |
  Aunque la distancia es de 7 tonos, el intervalo se llama octava porque abarca 8 notas de la escala.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["transposicion"]

variables:
  idx: uno_de([0, 1])
  datos: [["Do mayor", "Do"], ["Sol mayor", "Sol"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Do", "Sol"]

enunciado: "Si transponemos una escala de Do mayor una quinta justa hacia arriba, la nueva tónica será ___."

explicacion: |
  Una quinta justa desde Do es Sol.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["armadura"]

respuesta: 2
tipo: completar
tolerancia_abs: 0

enunciado: "Si una partitura tiene dos sostenidos en la armadura (Fa# y Do#), ¿en qué escala mayor nos encontramos?"

explicacion: |
  La escala de Re mayor tiene dos sostenidos: Fa# y Do#.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "avanzado"
  tags: ["progresion"]

opciones_explicitas: ["Tono", "Semitono"]
respuesta: "Tono"
tipo: mc

enunciado: "Si una nota sube un semitono y luego vuelve a subir otro semitono, ¿qué intervalo ha recorrido en total?"

explicacion: |
  Dos semitonos equivalen a un tono.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["escala_menor_armonica"]

respuesta: "La"
tipo: completar
respuestas_validas:
  - "La"

enunciado: "En la escala de Do mayor, la nota que está a una sexta mayor es ___."

explicacion: |
  Do(1), Re(2), Mi(3), Fa(4), Sol(5), La(6).
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "intermedio"
  tags: ["escala_mayor"]

respuesta: falso
tipo: vf
enunciado: "En una escala mayor, el intervalo entre el IV y el V grado es siempre un semitono."

explicacion: |
  Falso, el intervalo entre el IV y el V grado es un tono.
```

## Sección: origen-del-arte (25 preguntas)

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["prehistoria", "paleolitico", "simbolismo"]

respuesta: "Paleolítico"
tipo: completar
respuestas_validas:
  - "Paleolítico"

enunciado: "El arte rupestre se asocia con la aparición del pensamiento simbólico durante el periodo ___."

explicacion: |
  El paso del pensamiento concreto al simbólico permitió al Homo sapiens representar su realidad en las paredes de las cuevas durante el Paleolítico.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["arte_rupestre", "pintura_cavernica"]

enunciado: "En las pinturas rupestres del Paleolítico, ¿cuál es uno de los motivos más frecuentes que se representa?"

respuesta: "animales"
tipo: mc
opciones_explicitas: ["animales", "paisajes urbanos", "deidades griegas", "geometría abstracta"]

explicacion: |
  Aunque existen otros elementos, la fauna (bisontes, caballos, ciervos) y las manos (en negativo o positivo) son los motivos predominantes.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["cronologia", "prehistoria"]

variables:
  orden_correcta: ["Paleolítico", "Mesolítico", "Neolítico"]

respuesta_orden: ["Paleolítico", "Mesolítico", "Neolítico"]
tipo: ordenar
opciones_explicitas: ["Paleolítico", "Mesolítico", "Neolítico"]

enunciado: "Ordena cronológicamente los periodos de la prehistoria, desde el surgimiento del arte rupestre más temprano hasta el desarrollo de la agricultura:"

explicacion: |
  El arte rupestre surge en el Paleolítico, se mantiene en el Mesolítico y adquiere nuevas formas en el Neolítico con el sedentarismo.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["simbolismo", "antropologia"]

respuesta: verdadero
tipo: vf
enunciado: "¿Es cierto que la capacidad de crear arte rupestre implica que el ser humano ya posee la capacidad de abstracción y pensamiento simbólico?"

explicacion: |
  El arte no es solo una copia de la realidad, sino una representación que requiere que el individuo pueda pensar en algo que no está presente físicamente.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["tecnologia_prehistorica", "pigmentos"]

enunciado: "Para realizar sus pinturas, los artistas del Paleolítico utilizaban pigmentos naturales como el óxido de hierro (ocre)."

respuesta: "óxido de hierro"
tipo: mc
opciones_explicitas: ["óxido de hierro", "azul de ultramar", "tinta china", "acrílico"]

explicacion: |
  El uso de minerales como el ocre (óxido de hierro) y el carbón permitió la fijación de colores rojos, negros y amarillos en las paredes de las cuevas.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["prehistoria", "ritual"]

tipo: mc
opciones_explicitas: ["Decoración estética", "Magia de caza", "Registro de eventos históricos", "Expresión de identidad"]

enunciado: "Se cree que muchas pinturas rupestres de animales no tenían un fin decorativo, sino que formaban parte de un ritual para asegurar el éxito en la obtención de alimento. ¿Qué función describe mejor esta creencia?"

respuesta: "Magia de caza"

explicacion: |
  La teoría de la 'magia simpática' sugiere que pintar al animal era un acto ritual para controlarlo y facilitar la caza real.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["registro", "comunicación"]

tipo: completar
respuestas_validas:
  - "registrar eventos sociales"

enunciado: "Si un grupo de homínidos utilizaba el arte para dejar constancia de lo ocurrido en su comunidad, el arte estaría cumpliendo la función de ___."

respuesta: "registrar eventos sociales"

explicacion: |
  El arte también funcionó como un sistema de registro para preservar la memoria de eventos o la identidad de quienes habitaban un lugar.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["identidad", "social"]

tipo: mc
opciones_explicitas: ["Identidad grupal", "Uso utilitario", "Ritual de fertilidad", "Decoración de refugio"]

enunciado: "El uso de símbolos o marcas específicas en las cuevas que permitían a diferentes bandas reconocer el territorio de otros sugiere una función de:"

respuesta: "Identidad grupal"

explicacion: |
  Los símbolos compartidos ayudan a fortalecer la cohesión del grupo y a diferenciar la identidad de una comunidad frente a otra.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["teoria", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Ritual/Magia", "Registro de eventos", "Expresión de identidad", "Estética pura"]

respuesta_orden: ["Ritual/Magia", "Registro de eventos", "Expresión de identidad", "Estética pura"]

enunciado: "Ordena las siguientes teorías sobre la evolución de la función del arte, desde la más ligada a la supervivencia inmediata hasta la más abstracta/contemplativa:"

explicacion: |
  Históricamente, se debate si el arte comenzó con propósitos mágicos-supervivencia, pasó a ser un registro social y finalmente se convirtió en un objeto de contemplación estética.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["magia", "supervivencia"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si el arte rupestre se utilizaba para realizar un ritual de fertilidad de la fauna, su función principal era asegurar la ___."

respuesta: "supervivencia"

explicacion: |
  Al intentar influir en la naturaleza mediante el arte, el ser humano primitivo buscaba asegurar la continuidad de su propia subsistencia.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["escultura", "prehistoria"]

respuesta: "Venus de Willendorf"
tipo: completar
respuestas_validas:
  - "Venus de Willendorf"

enunciado: "Una de las esculturas más famosas del Paleolítico Superior, que destaca por enfatizar la fertilidad, es la ___."

explicacion: |
  Las Venus paleolíticas son pequeñas estatuillas femeninas que suelen presentar rasgos sexuales muy exagerados, lo que sugiere un simbolismo relacionado con la fertilidad o la maternidad.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["musica", "prehistoria"]

variables:
  escenario: uno_de([["una flauta de hueso de ave", "hueso"], ["un ritmo de percusión con piedras", "piedra"], ["un silbato de concha marina", "concha"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["hueso", "piedra", "concha", "madera"]

enunciado: "En el registro arqueológico, se han encontrado restos que sugieren el uso de {escenario[0]} como primer instrumento musical."

explicacion: |
  Se han hallado flautas hechas de hueso de animales (como buitres o ciervos) en yacimientos como la cueva de Hohle Fels, lo que demuestra que la música es una expresión artística muy temprana.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["ornamento", "joyeria"]

respuesta: "collares"
tipo: mc
opciones_explicitas: ["collares", "cuadros", "estatuas", "murales"]

enunciado: "El uso de conchas, dientes de animales o piedras perforadas para crear ___ es una de las formas más antiguas de expresión estética personal."

explicacion: |
  La ornamentación personal indica no solo una función estética, sino también la construcción de identidad y estatus dentro de los grupos humanos primitivos.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["secuencia", "prehistoria"]

respuesta_orden: ["pintura rupestre", "escultura pequeña", "instrumentos musicales"]
tipo: ordenar
opciones_explicitas: ["pintura rupestre", "escultura pequeña", "instrumentos musicales"]

enunciado: "Ordena las siguientes manifestaciones artísticas según su aparición o prevalencia en el registro arqueológico temprano (de la más antigua/difusa a la más compleja):"

pasos:
  - "Identifica la manifestación más primitiva"
  - "Ubica la escultura de pequeña escala"
  - "Considera la especialización de instrumentos"

explicacion: |
  Aunque el arte es un proceso complejo, la arqueología muestra una transición desde la expresión simbólica en paredes (pintura), pasando por objetos portátiles (escultura/Venus), hasta la especialización de herramientas sonoras.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["escultura", "materiales"]

respuesta: 12.5
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si una pequeña estatuilla de piedra pesa 12.5 gramos y se encuentra en un yacimiento donde el 50% de los objetos son de este material, ¿cuántos gramos de piedra representan el total de la muestra analizada de 25 gramos?"

pasos:
  - "Identificar el peso del objeto (12.5g)"
  - "Calcular el peso total de la muestra (25g)"
  - "Determinar la parte proporcional de la piedra"

explicacion: |
  El estudio del peso y la densidad de los materiales es crucial para que los arqueólogos determinen el origen de las piezas escultóricas.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["evolucion", "cognicion", "simbolismo"]

respuesta: "simbólico"
tipo: completar
respuestas_validas:
  - "simbólico"

enunciado: "El arte requiere la capacidad de realizar un salto ___ para representar algo que no está presente físicamente en el entorno inmediato."

explicacion: |
  Representar un objeto ausente (como un animal en una cueva) requiere que el cerebro humano procese conceptos abstractos y símbolos, marcando un hito en la evolución cognitiva.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["cognicion", "evolucion"]

tipo: vf
respuesta: verdadero

enunciado: "La aparición de representaciones pictóricas en el registro arqueológico es evidencia de una capacidad cognitiva avanzada. ¿Es esto cierto?"

explicacion: |
  La capacidad de proyectar una imagen mental sobre una superficie física demuestra que el Homo sapiens ya poseía pensamiento simbólico.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["abstraccion", "evolucion"]

variables:
  escenario: uno_de(["un bisonte", "un paisaje", "una herramienta de piedra"])

respuesta: "ausente"
tipo: mc
opciones_explicitas: ["ausente", "presente", "en movimiento"]

enunciado: "Si un artista prehistórico pinta {escenario}, está demostrando la capacidad de representar algo que está ___ en el momento de crear la obra."

explicacion: |
  El arte no es solo imitación, es la capacidad de traer a la mente un objeto ausente para darle un significado nuevo.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["procesos_mentales", "abstraccion"]

respuesta_orden: ["Percepción del objeto real", "Procesamiento mental/abstracción", "Representación simbólica en soporte"]
tipo: ordenar
opciones_explicitas: ["Percepción del objeto real", "Procesamiento mental/abstracción", "Representación simbólica en soporte"]

enunciado: "Ordena cronológicamente los procesos cognitivos necesarios para que un humano primitivo cree una pintura rupestre:"

explicacion: |
  Primero se percibe el mundo, luego el cerebro abstrae la esencia del objeto y finalmente se ejecuta la acción de representar ese concepto.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["simbolismo", "evolucion"]

respuesta: "representar ideas o entidades ausentes"
tipo: completar
respuestas_validas:
  - "representar ideas o entidades ausentes"

enunciado: "El objetivo principal del arte como fenómeno cognitivo es ___."

explicacion: |
  El arte permite que la mente humana trascienda el "aquí y ahora", permitiendo la comunicación de ideas, mitos y conceptos abstractos a través del tiempo.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["prehistoria", "pintura"]

respuesta: "pintura rupestre"
tipo: mc
opciones_explicitas: ["pintura rupestre", "escultura megalitica", "grabado"]

enunciado: "Se han encontrado restos de pigmentos rojos y negros aplicados sobre las paredes de una cueva profunda. ¿A qué forma de arte corresponde esta descripción?"

explicacion: |
  La descripción corresponde a la pintura rupestre: pigmentos aplicados directamente sobre la roca de una cueva.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["escultura", "paleolitico"]

respuesta: "Venus"
tipo: mc
opciones_explicitas: ["Venus", "Zoomorfos", "Manos"]

enunciado: "Se descubre una pequeña estatuilla de piedra que enfatiza la fertilidad mediante formas redondeadas. Se trata de una ___."

explicacion: |
  Las pequeñas figuras femeninas con rasgos sexuales muy acentuados se denominan Venus paleolíticas.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["cronologia", "periodos"]

variables:
  orden_correcto: ["Paleolítico", "Mesolítico", "Neolítico"]

respuesta_orden: ["Paleolítico", "Mesolítico", "Neolítico"]
tipo: ordenar
opciones_explicitas: ["Paleolítico", "Mesolítico", "Neolítico"]

enunciado: "Ordena cronológicamente los periodos de la prehistoria, desde el más antiguo al más reciente:"

explicacion: |
  El orden correcto es: {orden_correcto[0]}, luego {orden_correcto[1]} y finalmente {orden_correcto[2]}.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["tecnica", "materiales"]

respuesta: "grabado"
tipo: completar
respuestas_validas:
  - "grabado"

enunciado: "En arqueología, cuando la decoración consiste en incidir líneas o diseños sobre un soporte duro (piedra, hueso o madera), la técnica se denomina genéricamente ___."

explicacion: |
  El término genérico es "grabado", sin importar si el soporte es piedra, hueso o madera.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["teoria", "prehistoria"]

variables:
  datos: [["magia", "ritual"], ["comunicación", "lenguaje"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ritual", "estética", "lenguaje"]

enunciado: "Muchos arqueólogos sostienen que el arte en el Paleolítico no era decorativo, sino que tenía una función de ___."

explicacion: |
  Se cree que su función principal era el {datos[idx][1]}.
```

## Sección: principios-de-diseno (30 preguntas)

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["principios", "vocabulario"]

enunciado: "¿Qué son los principios de diseño, a diferencia de los elementos del arte?"
tipo: mc
opciones_explicitas:
  - "Las reglas de organización que indican CÓMO combinar los elementos del arte dentro de una obra"
  - "Los materiales físicos con los que se hace una obra"
  - "Otro nombre para los mismos 7 elementos del arte"
respuesta: "Las reglas de organización que indican CÓMO combinar los elementos del arte dentro de una obra"

explicacion: |
  Los elementos (`../elementos-del-arte/`) son el vocabulario; los
  principios son las reglas de uso de ese vocabulario.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["contraste", "vocabulario"]

enunciado: "¿Qué es el contraste, como principio de diseño?"
tipo: mc
opciones_explicitas:
  - "Una diferencia marcada entre elementos (color, tamaño, forma, textura) que genera interés visual"
  - "El uso de un solo color en toda la obra"
  - "La repetición exacta de un mismo elemento"
respuesta: "Una diferencia marcada entre elementos (color, tamaño, forma, textura) que genera interés visual"

explicacion: |
  Puede ser de color, tamaño, forma o textura.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["contraste"]

respuesta: verdadero
tipo: vf

enunciado: "Sin ningún contraste entre sus elementos, una obra tiende a verse plana o monótona."

explicacion: |
  El contraste es lo que genera puntos de interés dentro de la
  composición.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["equilibrio", "vocabulario"]

enunciado: "¿Qué es el equilibrio, como principio de diseño?"
tipo: mc
opciones_explicitas:
  - "La distribución del 'peso visual' de los elementos dentro de la obra"
  - "El uso de la misma cantidad de cada color"
  - "Que la obra tenga exactamente el mismo tamaño que su marco"
respuesta: "La distribución del 'peso visual' de los elementos dentro de la obra"

explicacion: |
  Puede lograrse de varias formas, no sólo con simetría exacta.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["equilibrio", "vocabulario"]

enunciado: "¿Cuáles son los tres tipos de equilibrio en una composición?"
tipo: mc
opciones_explicitas:
  - "Simétrico, asimétrico y radial"
  - "Cálido, frío y neutro"
  - "Primario, secundario y terciario"
respuesta: "Simétrico, asimétrico y radial"

explicacion: |
  Cada uno logra el balance visual de una forma distinta.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["equilibrio", "vocabulario"]

enunciado: "¿Cuál de estos es un ejemplo típico de equilibrio radial?"
tipo: mc
opciones_explicitas:
  - "Un rosetón, organizado alrededor de un centro"
  - "Un retrato con la cara exactamente en el medio, mirando de frente"
  - "Una foto con un objeto grande a la izquierda y varios chicos a la derecha"
respuesta: "Un rosetón, organizado alrededor de un centro"

explicacion: |
  El equilibrio radial se organiza alrededor de un punto central, como
  en `../rosetones-y-simetria/`.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["proporcion", "vocabulario"]

enunciado: "¿Qué es la proporción, como principio de diseño?"
tipo: mc
opciones_explicitas:
  - "La relación de tamaño entre las partes de la obra, ajustada para que se vea coherente"
  - "La cantidad total de elementos usados"
  - "El costo relativo de los materiales usados"
respuesta: "La relación de tamaño entre las partes de la obra, ajustada para que se vea coherente"

explicacion: |
  Ya se presentó en `../composicion-y-proporcion/`; acá se retoma como
  herramienta activa de diseño.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["ritmo", "vocabulario"]

enunciado: "¿Qué es el ritmo, como principio de diseño visual?"
tipo: mc
opciones_explicitas:
  - "La repetición de elementos de forma que crea una sensación de movimiento organizado"
  - "La velocidad a la que se hizo la obra"
  - "El uso exclusivo de líneas curvas"
respuesta: "La repetición de elementos de forma que crea una sensación de movimiento organizado"

explicacion: |
  Es la misma idea del ritmo musical, trasladada al espacio visual.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["ritmo"]

respuesta: verdadero
tipo: vf

enunciado: "El ritmo visual se logra repitiendo una línea, forma o color con cierta regularidad."

explicacion: |
  Sin repetición no hay ritmo, de la misma forma que no hay ritmo
  musical sin patrón temporal.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["unidad", "vocabulario"]

enunciado: "¿Qué es la unidad, como principio de diseño?"
tipo: mc
opciones_explicitas:
  - "La sensación de que todos los elementos de la obra pertenecen juntos, formando un todo coherente"
  - "El uso de un único elemento en toda la obra"
  - "Que la obra mida exactamente 1 metro por lado"
respuesta: "La sensación de que todos los elementos de la obra pertenecen juntos, formando un todo coherente"

explicacion: |
  Sin unidad, la obra se ve como piezas sueltas sin relación entre sí.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["enfasis", "vocabulario"]

enunciado: "¿Qué es el énfasis, como principio de diseño?"
tipo: mc
opciones_explicitas:
  - "Destacar una parte de la obra como la más importante"
  - "Repetir el mismo elemento varias veces"
  - "Usar sólo colores oscuros"
respuesta: "Destacar una parte de la obra como la más importante"

explicacion: |
  Se logra con contraste, posición o tamaño.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["enfasis"]

respuesta: verdadero
tipo: vf

enunciado: "El énfasis, como principio de diseño, está directamente relacionado con el concepto de punto focal."

explicacion: |
  Ambos apuntan a lo mismo: qué parte de la obra capta primero la
  atención.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["movimiento", "vocabulario"]

enunciado: "¿Qué es el movimiento, como principio de diseño en una obra estática (como una pintura)?"
tipo: mc
opciones_explicitas:
  - "La sensación de acción, o la forma en que la composición guía la mirada a través de la obra"
  - "Un movimiento físico real de la obra"
  - "El desplazamiento del artista mientras trabaja"
respuesta: "La sensación de acción, o la forma en que la composición guía la mirada a través de la obra"

explicacion: |
  En una obra estática, el movimiento es sugerido, no real.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["movimiento"]

respuesta: falso
tipo: vf

enunciado: "El movimiento, como principio de diseño, siempre implica que la obra tenga animación real (como un video)."

explicacion: |
  En una pintura o foto estática, el movimiento es sugerido por líneas,
  disposición de elementos o dirección de las miradas.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["patron", "vocabulario"]

enunciado: "¿Qué es un patrón, como principio de diseño?"
tipo: mc
opciones_explicitas:
  - "La repetición regular de un elemento o motivo"
  - "Un solo elemento único, sin repetir"
  - "La mezcla de todos los colores primarios"
respuesta: "La repetición regular de un elemento o motivo"

explicacion: |
  Como un empapelado, un mosaico o un estampado de tela.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "avanzado"
  tags: ["patron"]

respuesta: verdadero
tipo: vf

enunciado: "Un patrón visual es el mismo concepto que la traslación repetida (ver `../../matematica/transformaciones-geometricas/traslacion/`), aplicado como recurso de diseño."

explicacion: |
  El mismo motivo se repite deslizándose siempre el mismo vector.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["variedad", "vocabulario"]

enunciado: "¿Qué es la variedad, como principio de diseño?"
tipo: mc
opciones_explicitas:
  - "El uso de elementos diferentes entre sí, para evitar la monotonía"
  - "La cantidad total de colores disponibles en una paleta"
  - "Otro nombre para el contraste"
respuesta: "El uso de elementos diferentes entre sí, para evitar la monotonía"

explicacion: |
  Funciona en tensión directa con la unidad.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "avanzado"
  tags: ["unidad", "variedad"]

respuesta: verdadero
tipo: vf

enunciado: "La unidad y la variedad están en tensión: un diseño efectivo tiene que balancear ambas, no maximizar una a costa de la otra."

explicacion: |
  Demasiada unidad sin variedad aburre; demasiada variedad sin unidad
  se ve caótico.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["escala", "vocabulario"]

enunciado: "¿Qué es la escala, como principio de diseño?"
tipo: mc
opciones_explicitas:
  - "El tamaño de un elemento en relación con otros elementos o con el espectador"
  - "La cantidad de veces que se repite un elemento"
  - "El tamaño físico total de la obra, sin comparar con nada más"
respuesta: "El tamaño de un elemento en relación con otros elementos o con el espectador"

explicacion: |
  Es siempre una comparación, no un tamaño absoluto.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["escala", "vocabulario"]

enunciado: "¿Cuál de estos es un ejemplo de usar la escala deliberadamente para llamar la atención?"
tipo: mc
opciones_explicitas:
  - "Dibujar un objeto cotidiano (como una taza) mucho más grande de lo esperado"
  - "Usar siempre el mismo tamaño para todos los elementos"
  - "Elegir un formato de obra cuadrado"
respuesta: "Dibujar un objeto cotidiano (como una taza) mucho más grande de lo esperado"

explicacion: |
  Romper la escala esperada de algo genera un efecto visual fuerte.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "avanzado"
  tags: ["equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "El equilibrio simétrico se basa en el mismo concepto de reflexión (eje de simetría) ya visto en geometría."

explicacion: |
  Los elementos de un lado del eje son, en esencia, el reflejo de los
  del otro lado.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "avanzado"
  tags: ["equilibrio", "ordenar"]

enunciado: "Ordená los pasos para lograr un equilibrio asimétrico (sin usar simetría exacta) en una composición."
tipo: ordenar
opciones_explicitas:
  - "Revisar que ningún lado 'pese' visualmente mucho más que el otro"
  - "Ubicar un elemento grande o de mucho contraste de un lado de la composición"
  - "Compensarlo con varios elementos más chicos, o con espacio negativo, del otro lado"
respuesta_orden: ["Ubicar un elemento grande o de mucho contraste de un lado de la composición", "Compensarlo con varios elementos más chicos, o con espacio negativo, del otro lado", "Revisar que ningún lado 'pese' visualmente mucho más que el otro"]
explicacion: |
  El equilibrio no exige espejo exacto: exige que el peso visual total
  quede balanceado.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["unidad", "variedad"]

respuesta: verdadero
tipo: vf

enunciado: "Una obra con mucha unidad pero sin nada de variedad tiende a verse aburrida o monótona."

explicacion: |
  Es el extremo opuesto de una obra caótica por exceso de variedad sin
  unidad.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["unidad", "variedad"]

respuesta: verdadero
tipo: vf

enunciado: "Una obra con mucha variedad pero sin ninguna unidad tiende a verse caótica o desordenada."

explicacion: |
  El diseño efectivo busca el balance entre ambos extremos.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["patron", "completar"]

tipo: completar
enunciado: "Completá: la repetición regular de un elemento o motivo se llama ___."
respuestas_validas:
  - "patrón"
  - "patron"

explicacion: |
  Es distinto del ritmo, que es la sensación de movimiento que genera
  esa repetición.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "avanzado"
  tags: ["ritmo", "patron", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre ritmo y patrón?"
tipo: mc
opciones_explicitas:
  - "El patrón es la repetición en sí; el ritmo es la sensación de movimiento que esa repetición genera"
  - "Son exactamente lo mismo, dos nombres para un solo concepto"
  - "El ritmo sólo aplica a la música, nunca a las artes visuales"
respuesta: "El patrón es la repetición en sí; el ritmo es la sensación de movimiento que esa repetición genera"

explicacion: |
  Están relacionados, pero no son lo mismo: uno es la estructura, el
  otro es el efecto que produce.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "intermedio"
  tags: ["enfasis", "contraste"]

respuesta: verdadero
tipo: vf

enunciado: "Uno de los recursos para lograr énfasis en una composición es usar contraste (de color, tamaño o forma) en la zona que se quiere destacar."

explicacion: |
  Contraste y énfasis suelen trabajar juntos.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["principios"]

respuesta: verdadero
tipo: vf

enunciado: "Los 10 principios de diseño se pueden aplicar tanto a una pintura como a un afiche, una interfaz digital o un video."

explicacion: |
  Son principios generales de organización visual, no exclusivos de
  ninguna técnica.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["principios"]

respuesta: 10
tipo: input
tolerancia_abs: 0

enunciado: "¿Cuántos principios de diseño distintos se presentan en este módulo?"

explicacion: |
  Contraste, equilibrio, proporción, ritmo, unidad, énfasis, movimiento,
  patrón, variedad y escala.
```

```
metadata:
  materia: "arte"
  tema: "principios_de_diseno"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve conocer los principios de diseño?"
tipo: mc
opciones_explicitas:
  - "Para tener herramientas concretas con las que describir, evaluar y aplicar la composición en cualquier obra visual"
  - "Sólo sirven para criticar el trabajo de otros artistas"
  - "Sólo aplican si la obra ya tiene los 7 elementos del arte presentes"
respuesta: "Para tener herramientas concretas con las que describir, evaluar y aplicar la composición en cualquier obra visual"

explicacion: |
  Cualquier decisión de diseño se puede analizar en términos de estos
  10 principios.
```

## Sección: ritmo-compas-pulso-figuras-musicales (25 preguntas)

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["ritmo", "pulso", "musica"]

respuesta: verdadero
tipo: vf

enunciado: "El pulso es la unidad básica de tiempo en la música, similar al latido del corazón, que nos permite sentir el ritmo de una obra."

explicacion: |
  Efectivamente, el pulso es la sensación constante de regularidad que percibimos en la música.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["figuras_musicales", "duracion"]

variables:
  escenario: uno_de([["blanca", "redonda"], ["negra", "blanca"], ["corchea", "negra"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]

enunciado: "Si comparamos la duración de una {escenario[0]} con la de una {escenario[1]}, ¿cuál de las dos es la que tiene el doble de duración?"

explicacion: |
  En la jerarquía de las figuras, la {escenario[1]} equivale a dos {escenario[0]}.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["figuras_musicales", "calculo"]

respuesta: 2
tipo: completar
tolerancia_abs: 0

enunciado: "Si una nota negra equivale a 1 tiempo, ¿cuántas corcheas caben en el espacio de una sola nota negra?"

pasos:
  - "Identificar que una negra es igual a dos corcheas."

explicacion: |
  Una negra contiene 2 corcheas. Por lo tanto, en una negra caben 2 corcheas.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["orden", "figuras_musicales"]

respuesta_orden: ["redonda", "blanca", "negra", "corchea"]
tipo: ordenar
opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]

enunciado: "Ordena las siguientes figuras musicales de mayor a menor duración (de la más larga a la más corta):"

explicacion: |
  El orden correcto de mayor a menor es: Redonda (4 tiempos), Blanca (2 tiempos), Negra (1 tiempo) y Corchea (1/2 tiempo).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["compas", "terminologia"]

respuesta: "compás"
tipo: completar
respuestas_validas:
  - "compás"
  - "compas"

enunciado: "La división de un tiempo musical en partes iguales, que agrupa pulsos, se denomina ___."

explicacion: |
  El compás es la unidad que organiza los pulsos en grupos regulares.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["musica", "figuras_musicales"]

variables:
  valor_blanca: 2
  valor_negra: 1

respuesta: valor_negra * 2
tipo: completar
tolerancia_abs: 0

enunciado: "Si una blanca equivale a {valor_blanca} pulsos, ¿cuántos pulsos equivalen a una negra?"

pasos:
  - "Identificamos que una blanca tiene 2 pulsos."
  - "Sabemos que una negra es la mitad de una blanca."
  - "Calculamos: 2 / 2 = 1."

explicacion: |
  En la música, la relación entre figuras es constante. La negra es la mitad de la blanca, por lo tanto, si la blanca vale 2, la negra vale 1.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["musica", "figuras_musicales"]

variables:
  idx: uno_de([0, 1])
  escenario: [[4, "4"], [8, "8"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["2", "4", "8", "16"]

enunciado: "En un compás de 4/4, ¿cuántas corcheas caben en una blanca?"

pasos:
  - "Una blanca equivale a 2 pulsos (negras)."
  - "Cada pulso (negra) se divide en 2 corcheas."
  - "Entonces, 2 negras * 2 corcheas/negra = 4 corcheas."

explicacion: |
  La relación es: 1 blanca = 2 negras = 4 corcheas.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["musica", "figuras_musicales"]

respuesta: falso
tipo: vf

enunciado: "¿Una redonda equivale a la duración de 3 negras?"

explicacion: |
  Falso. Una redonda equivale a 4 negras (o 2 blancas).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["musica", "figuras_musicales"]

respuesta: "2"
respuestas_validas:
  - "2"
tipo: completar

enunciado: "En términos de duración de pulsos, una blanca equivale a ___ negras (y una negra equivale a 2 corcheas)."

explicacion: |
  La jerarquía es: Redonda (4) -> Blanca (2) -> Negra (1) -> Corchea (0.5).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["musica", "figuras_musicales"]

respuesta_orden: ["redonda", "blanca", "negra", "corchea"]
tipo: ordenar
opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]

enunciado: "Ordena las siguientes figuras musicales de mayor a menor duración:"

explicacion: |
  La redonda es la más larga (4 pulsos), seguida de la blanca (2), la negra (1) y finalmente la corchea (0.5).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["figuras_musicales", "duracion"]

enunciado: "Si una negra tiene una duración de 1 unidad de tiempo, ¿cuántas unidades de tiempo dura una blanca?"

respuesta: 2
tipo: completar
tolerancia_abs: 0

explicacion: |
  La blanca es el doble de una negra. Si la negra es 1, la blanca es 2.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["figuras_musicales", "equivalencias"]

variables:
  escenario: uno_de([["blanca", "2"], ["negra", "4"]])

enunciado: "Considerando que una negra equivale a 1 tiempo, ¿cuántas {escenario[0]}s caben en una redonda?"

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["2", "4", "8", "16"]

explicacion: |
  Una redonda equivale a 4 negras y a 2 blancas.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["figuras_musicales", "corchea"]

enunciado: "¿Es verdadero que una corchea dura la mitad que una negra?"

respuesta: verdadero
tipo: vf

explicacion: |
  Correcto. En la subdivisión binaria estándar, la corchea es la mitad de la negra.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["figuras_musicales", "orden"]

enunciado: "Ordena las siguientes figuras musicales de mayor a menor duración:"

opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]
respuesta_orden: ["redonda", "blanca", "negra", "corchea"]
tipo: ordenar

explicacion: |
  La jerarquía de duración es: Redonda (4) > Blanca (2) > Negra (1) > Corchea (0.5).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["figuras_musicales", "calculo"]

enunciado: "Si tenemos una blanca y una negra, nos falta una ___ para completar un compás de 4/4."

respuestas_validas:
  - "negra"
respuesta: "negra"
tipo: completar

explicacion: |
  Una blanca (2) + una negra (1) = 3 tiempos. Para llegar a 4, falta una negra (1).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_pulso"
  nivel: "basico"
  tags: ["musica", "teoria_musical"]

respuesta: "ritmo"
tipo: mc
opciones_explicitas: ["pulso", "ritmo", "acento", "tempo"]

enunciado: "Mientras que el pulso es la unidad de medida constante que sentimos al aplaudir de forma regular, el ___ es la combinación de duraciones de los sonidos que crea una estructura variada."

explicacion: |
  El pulso es la pulsación constante (como el latido del corazón), mientras que el ritmo es la sucesión de duraciones (largas y cortas) que se asientan sobre ese pulso.
```

```
metadata:
  materia: "arte"
  tema: "figuras_musicales"
  nivel: "basico"
  tags: ["figuras_musicales", "duracion"]

respuesta: verdadero
tipo: vf
enunciado: "Si comparamos la duración de una negra con la de una corchea, ¿es cierto que la negra dura el doble de tiempo que una corchea?"

explicacion: |
  En la música estándar, una negra equivale a dos corcheas. Por lo tanto, la relación es de 2 a 1.
```

```
metadata:
  materia: "arte"
  tema: "figuras_musicales"
  nivel: "basico"
  tags: ["figuras_musicales", "redonda"]

respuesta: "4"
tipo: completar
respuestas_validas:
  - "4"

enunciado: "En un compás de 4/4, si una blanca tiene un valor de 2 pulsos (negras), una redonda tendrá un valor de ___ pulsos."

pasos:
  - "Identificar el valor de la blanca en pulsos."
  - "Multiplicar el valor de la blanca por 2 para obtener el valor de la redonda."

explicacion: |
  La redonda es la figura más larga; equivale a dos blancas o cuatro negras.
```

```
metadata:
  materia: "arte"
  tema: "figuras_musicales"
  nivel: "basico"
  tags: ["ordenar", "figuras_musicales"]

respuesta_orden: ["redonda", "blanca", "negra", "corchea"]
tipo: ordenar
opciones_explicitas: ["redonda", "blanca", "negra", "corchea"]

enunciado: "Ordena las siguientes figuras musicales de mayor a menor duración (de la más larga a la más corta):"

explicacion: |
  La jerarquía de duración es: Redonda (4) > Blanca (2) > Negra (1) > Corchea (0.5).
```

```
metadata:
  materia: "arte"
  tema: "compas_musical"
  nivel: "intermedio"
  tags: ["compas", "pulsos"]

variables:
  compas_idx: uno_de([0, 1, 2])
  tipo_compas: ["3/4", "4/4", "2/4"][compas_idx]
  total_pulsos: [3, 4, 2][compas_idx]

respuesta: total_pulsos
tipo: completar
tolerancia_abs: 0

enunciado: "Si estamos en un compás de {tipo_compas}, ¿cuántos pulsos (negras) contiene cada compás?"

explicacion: |
  El número superior del compás indica cuántos pulsos (en la figura de la base, normalmente la negra) caben en cada unidad de compás.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["pulso", "figuras_musicales"]

variables:
  datos: [["negra", "1"], ["blanca", "2"], ["redonda", "4"], ["corchea", "0.5"]]
  idx: uno_de([0, 1, 2, 3])

enunciado: "Un baterista marca el pulso de una canción. Si la figura musical que está tocando es una {datos[idx][0]}, ¿cuántos pulsos (negras) dura dicha figura?"

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["0.5", "1", "2", "4"]

explicacion: |
  En la música, la duración de las figuras es relativa: la negra equivale a 1 pulso, la blanca a 2 y la redonda a 4. La corchea es la mitad de una negra (0.5).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["compas", "conteo"]

variables:
  idx: uno_de([0, 1])
  datos: [["4/4", "4"], ["3/4", "3"]]

enunciado: "Estamos en un compás de {datos[idx][0]}. ¿Cuántos pulsos (negras) caben en cada compás?"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

explicacion: |
  El número superior del compás indica cuántos pulsos de la unidad de medida (generalmente la negra) caben en cada compás.
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["comparacion", "figuras"]

variables:
  datos: [["blanca", "negra", "verdadero"], ["corchea", "blanca", "falso"]]
  idx: uno_de([0, 1])

enunciado: "Si comparamos la duración de una {datos[idx][0]} con una {datos[idx][1]}, ¿es la primera figura más larga que la segunda?"

respuestas_validas:
  - datos[idx][2]
respuesta: datos[idx][2]
tipo: completar
explicacion: |
  La blanca dura 2 pulsos y la negra 1 (Verdadero). La corchea dura 0.5 y la blanca 2 (Falso).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "basico"
  tags: ["orden", "figuras"]

variables:
  orden_correcta: ["corchea", "negra", "blanca", "redonda"]

enunciado: "Ordena las siguientes figuras musicales de la más corta a la más larga:"

opciones_explicitas: ["corchea", "negra", "blanca", "redonda"]
respuesta_orden: ["corchea", "negra", "blanca", "redonda"]
tipo: ordenar

explicacion: |
  La duración aumenta así: Corchea (1/2 negra) < Negra (1) < Blanca (2) < Redonda (4).
```

```
metadata:
  materia: "arte"
  tema: "ritmo_y_compas"
  nivel: "intermedio"
  tags: ["calculo", "compas"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["blanca", "2"], ["negra", "4"], ["corchea", "8"]]

enunciado: "En un compás de 4/4, ¿cuántas {datos[idx][0]} caben exactamente para completar el compás?"

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

explicacion: |
  En un compás de 4/4 hay 4 pulsos. Si la figura es blanca (2 pulsos), caben 2. Si es negra (1 pulso), caben 4. Si es corchea (0.5), caben 8.
```

## Sección: narrativa-audiovisual/plano (24 preguntas)

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué es un plano, en narrativa audiovisual?"
tipo: mc
opciones_explicitas:
  - "La porción continua de imagen filmada entre un corte de edición y el siguiente"
  - "El guion completo de una película"
  - "El lugar físico donde se filma una escena"
respuesta: "La porción continua de imagen filmada entre un corte de edición y el siguiente"

explicacion: |
  Es la unidad básica con la que se construye cualquier escena.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué muestra un plano general (PG)?"
tipo: mc
opciones_explicitas:
  - "El escenario completo, con el sujeto pequeño dentro del espacio"
  - "Sólo la cara del sujeto"
  - "Un objeto muy específico, sin el sujeto"
respuesta: "El escenario completo, con el sujeto pequeño dentro del espacio"

explicacion: |
  Es el plano más abierto: ubica al espectador en el lugar de la
  escena.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué muestra un plano entero?"
tipo: mc
opciones_explicitas:
  - "Al sujeto de cuerpo completo, de la cabeza a los pies"
  - "Sólo el rostro del sujeto"
  - "El escenario, sin ningún sujeto visible"
respuesta: "Al sujeto de cuerpo completo, de la cabeza a los pies"

explicacion: |
  Muestra todo el cuerpo, pero ya centrado en el sujeto, no tanto en el
  escenario.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano", "vocabulario"]

enunciado: "¿A qué altura corta al sujeto el plano americano, y de dónde viene su nombre?"
tipo: mc
opciones_explicitas:
  - "A la altura del muslo; el nombre viene del western clásico, que así dejaba ver el arma en el cinturón"
  - "A la altura de la cabeza; el nombre viene del cine independiente estadounidense"
  - "A la altura del tobillo; el nombre no tiene relación con el cine"
respuesta: "A la altura del muslo; el nombre viene del western clásico, que así dejaba ver el arma en el cinturón"

explicacion: |
  Es un ejemplo de cómo la historia del cine dejó nombres específicos
  para ciertos encuadres.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿A qué altura corta al sujeto el plano medio?"
tipo: mc
opciones_explicitas:
  - "A la altura de la cintura"
  - "A la altura de la rodilla"
  - "Justo en el cuello"
respuesta: "A la altura de la cintura"

explicacion: |
  Es uno de los planos más usados en diálogos.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué muestra un primer plano?"
tipo: mc
opciones_explicitas:
  - "La cara del sujeto, con foco en la expresión"
  - "El escenario completo"
  - "El cuerpo entero del sujeto"
respuesta: "La cara del sujeto, con foco en la expresión"

explicacion: |
  Es de los planos más cerrados, usado para mostrar emoción.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué muestra un primerísimo primer plano?"
tipo: mc
opciones_explicitas:
  - "Un detalle muy cercano de la cara, como los ojos o la boca"
  - "Todo el cuerpo del sujeto, sin recortar nada"
  - "Un objeto sin relación con el sujeto"
respuesta: "Un detalle muy cercano de la cara, como los ojos o la boca"

explicacion: |
  Es el plano más cerrado de la escala, usado para máxima intimidad o
  tensión emocional.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué muestra un plano detalle?"
tipo: mc
opciones_explicitas:
  - "Un objeto o una parte muy específica, sin necesariamente mostrar al sujeto completo"
  - "El escenario completo desde muy lejos"
  - "Sólo se usa para mostrar paisajes"
respuesta: "Un objeto o una parte muy específica, sin necesariamente mostrar al sujeto completo"

explicacion: |
  Por ejemplo, una mano, un reloj o un arma.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Los planos abiertos (general, entero) dan contexto: ubican al espectador en dónde y en qué situación transcurre la escena."

explicacion: |
  Es su función narrativa principal.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Los planos cerrados (primer plano, primerísimo primer plano) suelen usarse para transmitir la emoción o intimidad del personaje."

explicacion: |
  Al acercarse al rostro, la expresión se vuelve el foco central.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano", "vocabulario"]

enunciado: "¿Cuál es la función narrativa típica de un plano general al abrir una escena?"
tipo: mc
opciones_explicitas:
  - "Ubicar al espectador: mostrar dónde pasa la acción antes de acercarse a los personajes"
  - "Mostrar la reacción emocional de un personaje"
  - "Ocultar información sobre el lugar de la escena"
respuesta: "Ubicar al espectador: mostrar dónde pasa la acción antes de acercarse a los personajes"

explicacion: |
  Por eso muchas escenas arrancan con un plano general.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano", "vocabulario"]

enunciado: "¿Cuál es la función narrativa típica de un primer plano en un momento clave de la trama?"
tipo: mc
opciones_explicitas:
  - "Mostrar con claridad la expresión y la emoción del personaje en ese momento"
  - "Mostrar el escenario completo donde transcurre la escena"
  - "Distraer al espectador del personaje principal"
respuesta: "Mostrar con claridad la expresión y la emoción del personaje en ese momento"

explicacion: |
  Es el plano cerrado por excelencia para momentos emocionalmente
  intensos.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "avanzado"
  tags: ["plano", "ordenar"]

enunciado: "Ordená estos planos de MÁS abierto a MÁS cerrado."
tipo: ordenar
opciones_explicitas:
  - "Plano medio"
  - "Primer plano"
  - "Plano general"
  - "Plano entero"
respuesta_orden: ["Plano general", "Plano entero", "Plano medio", "Primer plano"]
explicacion: |
  Son cuatro paradas de la escala completa (que además incluye, entre
  medio, el plano americano, y como cierre más cerrado el primerísimo
  primer plano y el plano detalle).
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "avanzado"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué es un plano secuencia?"
tipo: mc
opciones_explicitas:
  - "Un plano único, sin ningún corte de edición, que se extiende durante una escena entera o más"
  - "Una secuencia de varios planos muy cortos, editados rápido"
  - "El primer plano que se filma de una película, en orden cronológico"
respuesta: "Un plano único, sin ningún corte de edición, que se extiende durante una escena entera o más"

explicacion: |
  Exige una coreografía muy precisa de cámara y actores, porque no hay
  forma de "arreglar" un error con edición después.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Un plano secuencia, por definición, no tiene ningún corte de edición en su interior."

explicacion: |
  Si tuviera un corte, dejaría de ser un solo plano.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Filmar un plano no es sólo encender la cámara: ya implica decisiones de composición, como equilibrio y regla de tercios."

explicacion: |
  Por eso este módulo depende de `../../principios-de-diseno/`.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "El plano medio es de los más usados en escenas de diálogo, porque muestra expresión facial y algo de lenguaje corporal a la vez."

explicacion: |
  Es un punto intermedio entre mostrar demasiado contexto y perder el
  lenguaje corporal.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿A qué altura del cuerpo corta el plano medio?"
tipo: mc
opciones_explicitas:
  - "A la altura de la cintura"
  - "A la altura del tobillo"
  - "Justo debajo de los ojos"
respuesta: "A la altura de la cintura"

explicacion: |
  Es distinto del plano americano (a la altura del muslo).
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿A qué altura del cuerpo corta el plano americano?"
tipo: mc
opciones_explicitas:
  - "A la altura del muslo"
  - "A la altura del pecho"
  - "A la altura de los pies"
respuesta: "A la altura del muslo"

explicacion: |
  Distinto del plano medio (a la altura de la cintura).
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Un plano detalle puede mostrar sólo un objeto (como un reloj o un arma), sin necesidad de que el sujeto completo esté en cuadro."

explicacion: |
  Es el plano más específico de todos, enfocado en un elemento puntual.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "avanzado"
  tags: ["plano", "vocabulario"]

enunciado: "¿Cómo se relaciona un plano con el montaje (edición)?"
tipo: mc
opciones_explicitas:
  - "Un plano es la unidad que queda delimitada entre dos cortes de edición sucesivos"
  - "El montaje ocurre antes de filmar cualquier plano"
  - "No tienen ninguna relación entre sí"
respuesta: "Un plano es la unidad que queda delimitada entre dos cortes de edición sucesivos"

explicacion: |
  Es la conexión directa con `../montaje/`, el módulo siguiente.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: falso
tipo: vf

enunciado: "Elegir el tamaño de un plano (general, medio, primer plano...) es una elección estética completamente al azar, sin relación con lo que se quiere narrar."

explicacion: |
  Al contrario: cada tamaño cumple una función narrativa distinta
  (contexto vs. emoción).
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Una escena bien filmada suele alternar entre planos abiertos y cerrados, según lo que necesite contar en cada momento."

explicacion: |
  Por ejemplo: plano general para ubicar, después primeros planos para
  la emoción del diálogo.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve elegir bien el tamaño de un plano al filmar una escena?"
tipo: mc
opciones_explicitas:
  - "Es la primera decisión narrativa: define cuánto contexto o cuánta emoción se muestra en ese momento de la historia"
  - "Sólo afecta el tiempo que tarda en filmarse la escena"
  - "No tiene ningún efecto real sobre cómo se percibe la escena"
respuesta: "Es la primera decisión narrativa: define cuánto contexto o cuánta emoción se muestra en ese momento de la historia"

explicacion: |
  Antes de pensar en el encuadre concreto o en el montaje, hay que
  decidir qué tan cerca o lejos va a estar la cámara.
```

