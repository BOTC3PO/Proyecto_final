# Arte — Origen del arte (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El arte rupestre y el pensamiento simbólico

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

### 2 — Manifestaciones del arte rupestre

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["arte_rupestre", "pintura_cavernica"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["animales", "manos"], ["figuras humanas", "herramientas"]]
  respuestas: [["animales", "manos"], ["figuras humanas", "herramientas"]]

enunciado: "En las pinturas rupestres más comunes del Paleolítico, es frecuente encontrar representaciones de {escenarios[escenario_idx][0]} y {escenarios[escenario_idx][1]}."

respuesta: "animales"
tipo: mc
opciones_explicitas: ["animales", "paisajes urbanos", "deidades griegas", "geometría abstracta"]

explicacion: |
  Aunque existen otros elementos, la fauna (bisontes, caballos, ciervos) y las manos (en negativo o positivo) son los motivos predominantes.
```

### 3 — Cronología de la expresión artística

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

### 4 — El valor del símbolo

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["simbolismo", "antropologia"]

respuesta: "verdadero"
tipo: completar
enunciado: "La capacidad de crear arte rupestre implica que el ser humano ya posee la capacidad de abstracción y pensamiento simbólico."

explicacion: |
  El arte no es solo una copia de la realidad, sino una representación que requiere que el individuo pueda pensar en algo que no está presente físicamente.
```

### 5 — Materiales en la prehistoria

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["tecnologia_prehistorica", "pigmentos"]

variables:
  pigmento_idx: uno_de([0, 1])
  pigmentos: [["óxido de hierro", "azul de ultramar"], ["carbón vegetal", "tinta china"]]
  respuestas: [["óxido de hierro", "azul de ultramar"], ["carbón vegetal", "tinta china"]]

enunciado: "Para realizar sus pinturas, los artistas del Paleolítico utilizaban pigmentos naturales como el {pigmentos[pigmento_idx][0]}."

respuesta: "óxido de hierro"
tipo: mc
opciones_explicitas: ["óxido de hierro", "azul de ultramar", "tinta china", "acrílico"]

explicacion: |
  El uso de minerales como el ocre (óxido de hierro) y el carbón permitió la fijación de colores rojos, negros y amarillos en las paredes de las cuevas.
```

### 6 — Función ritual del arte rupestre

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

### 7 — El arte como registro

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["registro", "comunicación"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario_datos: [["pinturas de escenas de danza", "registrar eventos sociales"], ["grabados de manos", "marcar la presencia de individuos"]]

tipo: completar
respuestas_validas:
  - "registrar eventos sociales"
  - "marcar la presencia de individuos"

enunciado: "Si un grupo de homínidos utilizaba el arte para dejar constancia de lo ocurrido en su comunidad, el arte estaría cumpliendo la función de ___."

respuesta: escenario_datos[escenario_idx][1]

explicacion: |
  El arte también funcionó como un sistema de registro para preservar la memoria de eventos o la identidad de quienes habitaban un lugar.
```

### 8 — Identidad y pertenencia

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

### 9 — Secuencia de funciones del arte

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

### 10 — El arte como herramienta mágica

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

### 11 — Venus paleolíticas

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
  - "Venus de Willendorf"

enunciado: "Una de las esculturas más famosas del Paleolítico Superior, que destaca por enfatizar la fertilidad, es la ___."

explicacion: |
  Las Venus paleolíticas son pequeñas estatuillas femeninas que suelen presentar rasgos sexuales muy exagerados, lo que sugiere un simbolismo relacionado con la fertilidad o la maternidad.
```

### 12 — Música en la Prehistoria

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

### 13 — Ornamentación personal

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

### 14 — Evolución de la expresión artística

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

### 15 — Materiales en la escultura primitiva

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

### 16 — El salto simbólico

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

### 17 — Evidencia cognitiva

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

### 18 — Representación de lo ausente

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["abstraccion", "evolucion"]

variables:
  escenario: uno_de([[0, "un bisonte en una cueva"], [1, "un paisaje estático"], [2, "una herramienta de piedra"]])
  respuesta_texto: uno_de(["un bisonte en una cueva", "un paisaje estático", "una herramienta de piedra"])

respuesta: respuesta_texto
tipo: mc
opciones_explicitas: ["un bisonte en una cueva", "un paisaje estático", "una herramienta de piedra"]

enunciado: "Si un artista prehistórico pinta {escenario[0]}, está demostrando la capacidad de representar lo que está ___."

explicacion: |
  El arte no es solo imitación, es la capacidad de traer a la mente un objeto ausente para darle un significado nuevo.
```

### 19 — El proceso de abstracción

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

### 20 — Función del arte temprano

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

### 21 — Arte Rupestre

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["prehistoria", "pintura"]

variables:
  datos: [["pinturas sobre paredes de cuevas usando pigmentos naturales", "pintura rupestre"], ["esculturas de piedra en el exterior", "escultura megalitica"], ["grabados sobre hueso o madera", "grabado"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["pintura rupestre", "escultura megalitica", "grabado"]

enunciado: "Se han encontrado restos de pigmentos rojos y negros aplicados sobre las paredes de una cueva profunda. ¿A qué forma de arte corresponde esta descripción? ___"

explicacion: |
  La descripción corresponde a la {datos[idx][0]}.
```

### 22 — El Venus Paleolítico

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["escultura", "paleolitico"]

variables:
  datos: [["pequeñas figuras femeninas con rasgos sexuales muy acentuados", "Venus"], ["figuras de animales realistas", "Zoomorfos"], ["manos grabadas en piedra", "Manos"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Venus", "Zoomorfos", "Manos"]

enunciado: "Se descubre una pequeña estatuilla de piedra que enfatiza la fertilidad mediante formas redondeadas. Se trata de una ___."

explicacion: |
  Las figuras con estas características se denominan {datos[idx][1]}.
```

### 23 — Cronología del Arte Prehistórico

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

### 24 — Materiales de Grabado

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["tecnica", "materiales"]

variables:
  datos: [["piedra", "litografía"], ["hueso", "osteografía"], ["madera", "xilografía"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "litografía"
  - "osteografía"
  - "xilografía"

enunciado: "Si el soporte utilizado para realizar un grabado es un ___, la técnica se denomina ___."

explicacion: |
  Al usar {datos[idx][0]}, la técnica es la {datos[idx][1]}.
```

### 25 — El Concepto de Arte

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["teoria", "prehistoria"]

variables:
  datos: [["magia", "ritual"], ["decoración", "estética"], ["comunicación", "lenguaje"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ritual", "estética", "lenguaje"]

enunciado: "Muchos arqueólogos sostienen que el arte en el Paleolítico no era decorativo, sino que tenía una función de ___."

explicacion: |
  Se cree que su función principal era el {datos[idx][1]}.
```
