# Examen jefe — [PENDIENTE #863]

> Logro #863. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **111 preguntas totales** en 5/5 secciones.

---

## Sección: fotosintesis-respiracion-celular (24 preguntas)

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["cloroplasto"]

respuesta: verdadero
tipo: vf

enunciado: "La fotosíntesis ocurre en el cloroplasto."

explicacion: |
  Correcto, gracias a la clorofila que contiene.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["energia", "glucosa"]

respuesta: verdadero
tipo: vf

enunciado: "La fotosíntesis convierte energía luminosa en energía química almacenada en glucosa."

explicacion: |
  Correcto, captura la energía de la luz en moléculas orgánicas.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["autotrofos"]

respuesta: "autótrofos"
tipo: mc
opciones_explicitas: ["autótrofos", "heterótrofos", "consumidores", "descomponedores"]

enunciado: "Los organismos que fabrican su propio alimento se llaman..."

explicacion: |
  Autótrofos, como las plantas.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["seres_vivos"]

respuesta: falso
tipo: vf

enunciado: "Todos los seres vivos, incluidos los animales, pueden hacer fotosíntesis."

explicacion: |
  Falso, sólo plantas, algas y algunas bacterias con clorofila.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["reaccion", "oxigeno"]

respuesta: "oxigeno"
tipo: completar
respuestas_validas:
  - "oxigeno"
  - "oxígeno"

enunciado: "La fotosíntesis usa CO2, agua y luz para producir glucosa y ___."

explicacion: |
  Se libera oxígeno como subproducto.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["mitocondria"]

respuesta: verdadero
tipo: vf

enunciado: "La respiración celular ocurre principalmente en la mitocondria."

explicacion: |
  Correcto, es la central energética de la célula.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["energia", "glucosa"]

respuesta: verdadero
tipo: vf

enunciado: "La respiración celular libera la energía química guardada en la glucosa."

explicacion: |
  Correcto, extrae la energía y la convierte en ATP.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["organismos"]

respuesta: falso
tipo: vf

enunciado: "La respiración celular ocurre sólo en los animales, no en las plantas."

explicacion: |
  Falso, las plantas también respiran (y también fotosintetizan).
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["atp"]

respuesta: "ATP"
tipo: completar
respuestas_validas:
  - "ATP"
  - "energia"

enunciado: "La respiración celular usa glucosa y oxígeno para producir CO2, agua y ___."

explicacion: |
  El ATP es la molécula que transporta esa energía.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["bioquimica"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación de la respiración celular es la ecuación de la fotosíntesis pero en sentido inverso."

explicacion: |
  Correcto, lo que una produce, la otra lo consume.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["sustancias"]

respuesta: verdadero
tipo: vf

enunciado: "Los productos de la fotosíntesis (glucosa y oxígeno) son los reactivos que se consumen en la respiración celular."

explicacion: |
  Correcto, hay un ciclo entre ambos procesos.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "intermedio"
  tags: ["organelas"]

variables:
  datos: [["cloroplasto", "fotosintesis"], ["mitocondria", "respiracion celular"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["fotosintesis", "respiracion celular"]

enunciado: "¿Qué proceso ocurre principalmente en el {datos[idx][0]}?"

explicacion: |
  En el {datos[idx][0]}: {datos[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "intermedio"
  tags: ["clasificacion"]

respuesta: falso
tipo: vf

enunciado: "La fotosíntesis la realizan casi todos los seres vivos, mientras que la respiración celular es exclusiva de los autótrofos."

explicacion: |
  Falso, es al revés: respiración casi todos, fotosíntesis sólo autótrofos.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["plantas"]

respuesta: falso
tipo: vf

enunciado: "Las plantas sólo realizan fotosíntesis y nunca respiración celular."

explicacion: |
  Falso, hacen ambos procesos.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["dia"]

respuesta: verdadero
tipo: vf

enunciado: "Durante el día, con luz, las plantas hacen fotosíntesis y respiración celular al mismo tiempo."

explicacion: |
  Correcto, la respiración es continua, ocurra o no la fotosíntesis.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["noche"]

respuesta: verdadero
tipo: vf

enunciado: "Durante la noche, sin luz, las plantas sólo respiran."

explicacion: |
  Correcto, sin luz no hay fotosíntesis.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "intermedio"
  tags: ["oxigeno"]

respuesta: verdadero
tipo: vf

enunciado: "Durante el día, las plantas normalmente producen más oxígeno del que consumen, liberando oxígeno neto."

explicacion: |
  Correcto, la tasa de fotosíntesis suele superar a la de respiración con luz.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["ecosistemas"]

respuesta: verdadero
tipo: vf

enunciado: "La fotosíntesis es el punto de entrada de la energía solar a casi todos los ecosistemas."

explicacion: |
  Correcto — ver ../flujo-materia-energia/.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["autotrofos"]

respuesta: verdadero
tipo: vf

enunciado: "Sin autótrofos capturando energía solar en forma de glucosa, no habría alimento para el resto de la cadena trófica."

explicacion: |
  Correcto, son la base de las cadenas alimenticias.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "intermedio"
  tags: ["flujo_energia"]

respuesta: falso
tipo: vf

enunciado: "La energía que fluye por un ecosistema no tiene relación con la fotosíntesis."

explicacion: |
  Falso, la fotosíntesis es la puerta de entrada de esa energía.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "intermedio"
  tags: ["estequiometria"]

variables:
  co2_consumido: uno_de([6, 12, 18])

respuesta: co2_consumido
tipo: completar
tolerancia_abs: 0.01

enunciado: "En la fotosíntesis, la proporción CO2 consumido : O2 producido es 1:1. Si se consumen {co2_consumido} moléculas de CO2, ¿cuántas de O2 se producen?"

explicacion: |
  Con relación 1:1, se producen {co2_consumido} moléculas de O2.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["ecuacion"]

respuesta: verdadero
tipo: vf

enunciado: "La ecuación balanceada de la fotosíntesis usa 6 CO2 y 6 H2O para producir 1 glucosa y 6 O2."

explicacion: |
  Correcto: 6CO2 + 6H2O + luz → C6H12O6 + 6O2.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "basico"
  tags: ["glucosa"]

respuesta: verdadero
tipo: vf

enunciado: "La fórmula molecular de la glucosa es C6H12O6."

explicacion: |
  Correcto, es un monosacárido con esa fórmula.
```

```
metadata:
  materia: "biologia"
  tema: "fotosintesis_respiracion_celular"
  nivel: "intermedio"
  tags: ["gases", "ciclos"]

respuesta: "CO2"
tipo: mc
opciones_explicitas: ["CO2", "O2", "Ambos son reactivos en ambos procesos", "Ninguno"]

enunciado: "¿Qué gas es reactivo en la fotosíntesis y producto en la respiración celular?"

explicacion: |
  El CO2 se fija en la fotosíntesis y se libera en la respiración.
```

## Sección: habitats-adaptacion (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["concepto", "habitat"]

respuesta: verdadero
tipo: vf

enunciado: "El hábitat es el lugar donde vive naturalmente una especie, con las condiciones que necesita para sobrevivir."

explicacion: |
  Correcto. Provee las condiciones ambientales que la especie necesita.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["concepto", "ecosistema"]

respuesta: falso
tipo: vf

enunciado: "Los términos 'hábitat' y 'ecosistema' son sinónimos y significan exactamente lo mismo."

explicacion: |
  Falso. El ecosistema incluye todos los seres vivos y el ambiente de una zona; el hábitat es la "dirección" de una especie puntual.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["condiciones"]

respuesta: verdadero
tipo: vf

enunciado: "Un hábitat incluye condiciones como temperatura, agua, alimento y refugio."

explicacion: |
  Correcto, son los recursos y condiciones esenciales para el ciclo vital.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["adaptacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una adaptación es una característica que ayuda a un ser vivo a sobrevivir y reproducirse mejor en su hábitat."

explicacion: |
  Correcto, son rasgos que aumentan las chances de supervivencia y reproducción.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["evolucion"]

respuesta: falso
tipo: vf

enunciado: "Una adaptación aparece de un día para el otro en un solo individuo, a propósito."

explicacion: |
  Falso. Se desarrolla a lo largo de muchas generaciones, no es un cambio voluntario individual.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["seleccion_natural"]

respuesta: verdadero
tipo: vf

enunciado: "Las adaptaciones están directamente relacionadas con el proceso de selección natural."

explicacion: |
  Correcto — ver ../seleccion-natural/.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["adaptacion"]

variables:
  tabla: [["estructural", "pico curvo de un aguila"], ["fisiologica", "hibernacion"], ["de comportamiento", "migracion de aves"]]
  idx: uno_de([0, 1, 2])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["pico curvo de un aguila", "hibernacion", "migracion de aves"]

enunciado: "¿Cuál es un ejemplo de adaptación de tipo {tabla[idx][0]}?"

explicacion: |
  Un ejemplo de adaptación {tabla[idx][0]} es: {tabla[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["camuflaje", "estructural"]

respuesta: verdadero
tipo: vf

enunciado: "El pelaje blanco de un oso polar (camuflaje) es una adaptación estructural."

explicacion: |
  Correcto, es una característica física del cuerpo.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["fisiologia"]

respuesta: falso
tipo: vf

enunciado: "La hibernación (bajar el metabolismo) es una adaptación de comportamiento, no fisiológica."

explicacion: |
  Falso. Es fisiológica, porque implica cambios en procesos internos del cuerpo.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["comportamiento"]

respuesta: verdadero
tipo: vf

enunciado: "Vivir en manada para protegerse de depredadores es una adaptación de comportamiento."

explicacion: |
  Correcto, es una conducta que aumenta las chances de supervivencia.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "estructurales"
tipo: completar
respuestas_validas:
  - "estructurales"

enunciado: "Las adaptaciones físicas se llaman adaptaciones ___."

explicacion: |
  Las adaptaciones anatómicas se denominan estructurales.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["adaptacion", "evolucion"]

respuesta: verdadero
tipo: vf

enunciado: "Una adaptación beneficiosa en un hábitat puede resultar inútil o perjudicial en un hábitat distinto."

explicacion: |
  Correcto, las adaptaciones son específicas del entorno donde surgieron.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["evolucion"]

respuesta: falso
tipo: vf

enunciado: "Existe 'la adaptación perfecta', un conjunto de rasgos que sirven para sobrevivir en cualquier hábitat por igual."

explicacion: |
  Falso, no existe la adaptación universal — siempre son específicas a un hábitat.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "basico"
  tags: ["cactus", "desierto"]

respuesta: "almacenar agua"
tipo: mc
opciones_explicitas: ["almacenar agua", "atraer polinizadores", "defenderse de depredadores", "realizar fotosíntesis extra"]

enunciado: "En el cactus del desierto, ¿para qué sirve principalmente su tallo grueso?"

explicacion: |
  El tallo suculento almacena agua para las temporadas de sequía.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["cactus", "desierto"]

respuesta: "perder menos agua y defenderse"
tipo: mc
opciones_explicitas: ["perder menos agua y defenderse", "atraer más agua de lluvia", "producir más flores", "nada en particular"]

enunciado: "En el cactus, las hojas transformadas en espinas sirven principalmente para..."

explicacion: |
  Menos superficie foliar reduce la pérdida de agua por transpiración, y además funciona como defensa contra herbívoros.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["cactus", "desierto"]

respuesta: verdadero
tipo: vf

enunciado: "Las raíces extendidas y poco profundas del cactus le permiten aprovechar rápido las lluvias esporádicas del desierto."

explicacion: |
  Correcto, al ser tan extendidas cerca de la superficie, absorben agua de lluvia antes de que se evapore o se filtre profundo.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["aplicacion", "ejemplos"]

respuesta: "estructural"
tipo: mc
opciones_explicitas: ["estructural", "fisiologica", "de comportamiento"]

enunciado: "Las aletas de un pez, que le permiten nadar eficientemente, son un ejemplo de adaptación de tipo..."

explicacion: |
  Es una característica física del cuerpo: adaptación estructural.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "avanzado"
  tags: ["aplicacion", "ejemplos"]

respuesta: verdadero
tipo: vf

enunciado: "La capacidad del camaleón de cambiar de color según el entorno es una adaptación que combina lo estructural (piel con células especiales) y lo conductual (elige cuándo activarlo)."

explicacion: |
  Correcto, muchas adaptaciones no encajan en una sola categoría pura, sino que combinan varios tipos.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "intermedio"
  tags: ["comportamiento", "migracion"]

respuesta: verdadero
tipo: vf

enunciado: "La migración de las aves es una adaptación de comportamiento que responde a cambios estacionales del hábitat (disponibilidad de comida, temperatura)."

explicacion: |
  Correcto, viajan a zonas con mejores condiciones según la época del año.
```

```
metadata:
  materia: "biologia"
  tema: "habitats_adaptacion"
  nivel: "avanzado"
  tags: ["conceptos", "conservacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si el hábitat de una especie cambia muy rápido (por ejemplo, por acción humana), sus adaptaciones (desarrolladas para el hábitat anterior) pueden dejar de ser útiles, poniendo en riesgo a la especie."

explicacion: |
  Correcto. Las adaptaciones evolucionan lentamente, a lo largo de generaciones — un cambio de hábitat muy rápido no les da tiempo de "ponerse al día".
```

## Sección: enzimas-proteina-sustrato-ph (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["catalizador", "velocidad"]

respuesta: "acelerar"
tipo: completar
respuestas_validas:
  - "acelerar"

enunciado: "Las enzimas son biomoléculas que permiten ___ las reacciones químicas en los seres vivos."

explicacion: |
  Las enzimas actúan como catalizadores biológicos, lo que significa que aumentan la velocidad de las reacciones químicas sin consumirse en el proceso.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["proteinas", "composición"]

respuesta: "proteínas"
tipo: completar
respuestas_validas:
  - "proteínas"
  - "proteinas"

enunciado: "Desde el punto de vista químico, la gran mayoría de las enzimas son ___."

explicacion: |
  Las enzimas son macromoléculas compuestas por cadenas de aminoácidos, es decir, son proteínas especializadas en la catálisis.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["sustrato", "sitio_activo"]

respuesta: "sustrato"
tipo: completar
respuestas_validas:
  - "sustrato"

enunciado: "La molécula sobre la cual actúa una enzima para transformarla en un producto se denomina ___."

explicacion: |
  El sustrato es la molécula que se une al sitio activo de la enzima para llevar a cabo la reacción química.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["ph", "desnaturalización"]

respuesta: "óptimo"
tipo: completar
respuestas_validas:
  - "óptimo"
  - "optimo"

enunciado: "Cada enzima tiene un pH ___ en el cual su actividad es máxima; si el pH cambia drásticamente, la enzima puede desnaturalizarse."

explicacion: |
  Las enzimas son muy sensibles a los cambios de pH. Cada una tiene un rango ideal; fuera de este rango, su estructura tridimensional se pierde (desnaturalización) y pierde su función.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["resultado", "velocidad"]

respuesta: "igual"
tipo: completar
respuestas_validas:
  - "igual"
  - "el mismo"

enunciado: "Aunque las enzimas aumentan la velocidad de una reacción, el resultado final de la reacción química (los productos obtenidos) será ___ que si la reacción ocurriera sin la enzima."

explicacion: |
  La enzima sólo cambia la velocidad de la reacción (la hace más rápida), pero no altera el equilibrio químico ni cambia los productos finales.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["enzimas", "sitio_activo", "proteinas"]

tipo: mc
opciones_explicitas: ["El lugar de la enzima donde se une el sustrato", "El centro de energía de la proteína", "La parte de la enzima que se descompone", "El medio donde ocurre la reacción"]
respuesta: "El lugar de la enzima donde se une el sustrato"

enunciado: "En el modelo de llave-cerradura, ¿qué es el sitio activo de una enzima?"

explicacion: |
  El sitio activo es una región específica de la enzima con una forma tridimensional complementaria al sustrato, permitiendo que la reacción química ocurra de manera eficiente.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["especificidad", "sustrato"]

tipo: completar
respuestas_validas:
  - "especificidad"
respuesta: "especificidad"

enunciado: "La propiedad por la cual una enzima sólo puede actuar sobre un sustrato determinado debido a su forma geométrica se denomina ___."

explicacion: |
  La especificidad es la característica fundamental que permite que las enzimas no reaccionen con cualquier molécula, sino sólo con aquellas que encajan en su sitio activo.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["modelo", "llave_cerradura"]

tipo: mc
opciones_explicitas: ["El sustrato cambia su forma para adaptarse a la enzima", "La enzima y el sustrato tienen formas complementarias", "La enzima se destruye tras un solo uso", "El sustrato debe ser siempre más grande que la enzima"]
respuesta: "La enzima y el sustrato tienen formas complementarias"

enunciado: "Según el modelo de 'llave-cerradura', ¿cuál es la relación entre la enzima y el sustrato?"

explicacion: |
  Este modelo clásico postula que la enzima tiene una forma rígida y el sustrato debe encajar perfectamente en ella, tal como una llave en su cerradura.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["complejo", "reaccion"]

tipo: completar
respuestas_validas:
  - "complejo enzima-sustrato"
respuesta: "complejo enzima-sustrato"

enunciado: "Cuando el sustrato se une al sitio activo de la enzima, se forma un ___."

explicacion: |
  La unión física y temporal entre la enzima y el sustrato se conoce como complejo enzima-sustrato, paso previo a la formación de los productos.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["ph", "desnaturalizacion"]

tipo: mc
opciones_explicitas: ["No afecta la función de la enzima", "Puede cambiar la forma del sitio activo y anular la función", "Aumenta la velocidad de reacción de forma infinita", "Sólo afecta a las enzimas que no son proteínas"]
respuesta: "Puede cambiar la forma del sitio activo y anular la función"

enunciado: "Si una enzima se encuentra en un pH muy alejado de su valor óptimo, ¿qué sucede con su capacidad catalítica?"

explicacion: |
  Los cambios extremos de pH alteran las cargas eléctricas y la estructura de la proteína (desnaturalización), lo que modifica el sitio activo y evita que el sustrato pueda unirse.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["enzimas", "homeostasis", "temperatura"]

enunciado: "Las enzimas humanas funcionan de manera óptima a una temperatura corporal aproximada de ___ °C."

respuestas_validas:
  - "37"
respuesta: "37"
tipo: completar

explicacion: |
  La temperatura corporal humana estándar es de 37°C, donde las enzimas metabólicas mantienen su estructura y actividad máxima.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["desnaturalizacion", "proteinas"]

enunciado: "Cuando una enzima se somete a un calor excesivo, su estructura tridimensional se altera, proceso conocido como ___."

respuestas_validas:
  - "desnaturalización"
  - "desnaturalizacion"
respuesta: "desnaturalización"
tipo: completar

explicacion: |
  La desnaturalización es la pérdida de la conformación espacial de la proteína, lo que impide que el sustrato se una al sitio activo.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["desnaturalizacion", "irreversible"]

enunciado: "Si una enzima se desnaturaliza por exceso de calor, este cambio en su forma es generalmente ___."

respuestas_validas:
  - "irreversible"
respuesta: "irreversible"
tipo: completar

explicacion: |
  Al romperse los enlaces que mantienen la forma tridimensional de la enzima, la proteína pierde su función de manera permanente.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["sitio_activo", "forma"]

enunciado: "La función de una enzima depende estrictamente de su ___."

respuestas_validas:
  - "forma tridimensional"
respuesta: "forma tridimensional"
tipo: completar

explicacion: |
  La especificidad de una enzima radica en que su sitio activo tiene una forma complementaria al sustrato; si la forma cambia, la función se pierde.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "avanzado"
  tags: ["curva_actividad", "optimo"]

enunciado: "En un gráfico de actividad enzimática vs. temperatura, el punto más alto de la curva representa la temperatura ___."

respuestas_validas:
  - "óptima"
  - "optima"
respuesta: "óptima"
tipo: completar

explicacion: |
  La temperatura óptima es aquella donde la velocidad de la reacción enzimática es máxima antes de que comience la desnaturalización.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["enzimas", "digestión", "ph"]

tipo: mc
opciones_explicitas: ["pH 2 (muy ácido)", "pH 7 (neutro)", "pH 9 (básico)"]
respuesta: "pH 2 (muy ácido)"

enunciado: "La pepsina es una enzima presente en el estómago humano encargada de la digestión de proteínas. ¿En qué rango de pH presenta su actividad máxima?"

explicacion: |
  La pepsina actúa en el estómago, donde el ácido clorhídrico mantiene un ambiente muy ácido para facilitar la digestión.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["desnaturalizacion", "estructura"]

tipo: vf
respuesta: verdadero

enunciado: "Si una enzima se encuentra en un entorno con un pH extremadamente alejado de su punto óptimo, su estructura tridimensional se altera, perdiendo su función biológica. Este proceso se conoce como desnaturalización."

explicacion: |
  Las enzimas son proteínas y su forma tridimensional es crucial para que el sustrato encaje en el sitio activo. Cambios bruscos de pH rompen los enlaces que mantienen esa forma.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["amilasa", "saliva", "ph"]

tipo: mc
opciones_explicitas: ["pH 2", "pH 7", "pH 12"]
respuesta: "pH 7"

enunciado: "La amilasa salival actúa en la boca para degradar el almidón. Dado que la saliva tiene un pH cercano a la neutralidad, ¿cuál es el pH óptimo aproximado para esta enzima?"

explicacion: |
  La boca mantiene un ambiente neutro, por lo que las enzimas que allí actúan, como la amilasa, están adaptadas a ese nivel de acidez.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["actividad_enzimatica", "grafico"]

tipo: vf
respuesta: falso

enunciado: "Si una enzima tiene un pH óptimo de 8, su actividad enzimática será la misma si se encuentra en un pH de 2 que si se encuentra en un pH de 8."

explicacion: |
  Falso. La actividad enzimática es máxima en el pH óptimo y disminuye drásticamente a medida que el pH se aleja de ese valor debido a la desnaturalización.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["comparacion", "enzimas"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["estómago", "ácido"], ["intestino delgado", "básico"]]

tipo: mc
opciones_explicitas: ["ácido", "básico", "neutro"]
respuesta: datos[escenario_idx][1]

enunciado: "Considerando que las enzimas del {datos[escenario_idx][0]} funcionan en el ambiente propio de ese órgano, ¿cuál es la naturaleza de su pH óptimo?"

explicacion: |
  Cada enzima ha evolucionado para funcionar en el compartimento específico donde se encuentra, adaptando su pH óptimo a las condiciones de ese órgano.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["temperatura", "homeostasis"]

respuesta: "desnaturalización"
tipo: mc

opciones_explicitas: ["activación", "desnaturalización", "saturación", "hidrólisis"]

enunciado: "Cuando una persona tiene una fiebre alta de 39,5°C (por encima de los 37°C normales), las enzimas del cuerpo pueden sufrir un proceso de ___ debido al exceso de calor, lo que impide que cumplan su función biológica."

explicacion: |
  Las enzimas son proteínas cuya forma tridimensional es crítica para su función. Temperaturas muy elevadas rompen los enlaces que mantienen su estructura, causando la desnaturalización.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["ph", "digestión", "pepsina", "tripsina"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["estómago", "2", "pepsina"], ["intestino delgado", "8", "tripsina"]]

respuesta: datos[escenario_idx][2]
tipo: completar
respuestas_validas:
  - "pepsina"
  - "tripsina"

enunciado: "En el {datos[escenario_idx][0]}, donde el pH ronda {datos[escenario_idx][1]}, la enzima digestiva que actúa predominantemente es la ___."

explicacion: |
  La pepsina requiere un ambiente altamente ácido (pH bajo) como el del estómago para funcionar, mientras que la tripsina requiere un ambiente básico como el del intestino delgado.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "intermedio"
  tags: ["actividad_enzimatica", "temperatura"]

respuesta: "40°C"
tipo: mc
opciones_explicitas: ["20°C", "40°C", "70°C"]

enunciado: "Si comparamos una reacción enzimática humana a 20°C, a 40°C y a 70°C, ¿a cuál de esas temperaturas se espera la mayor actividad enzimática?"

explicacion: |
  La actividad enzimática aumenta con la temperatura hasta alcanzar un punto óptimo cercano a los 37-40°C. A partir de ahí, el calor excesivo (como 70°C) desnaturaliza la enzima y la actividad cae a cero.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "basico"
  tags: ["sustrato", "especificidad"]

respuesta: "sustrato"
tipo: completar
respuestas_validas:
  - "sustrato"

enunciado: "El modelo de 'llave-cerradura' sugiere que la enzima tiene una forma única que sólo encaja con una molécula específica llamada ___."

explicacion: |
  La especificidad enzimática es la capacidad de una enzima para reconocer y unirse sólo a un sustrato determinado debido a la complementariedad de sus formas.
```

```
metadata:
  materia: "biologia"
  tema: "enzimas_proteina_sustrato_ph"
  nivel: "avanzado"
  tags: ["ph", "optimo"]

respuesta: "7.5"
tipo: completar
respuestas_validas:
  - "7.5"
  - "7,5"

enunciado: "Una enzima intestinal tiene su pH óptimo de trabajo en ___ (valor numérico aproximado)."

explicacion: |
  Cada enzima tiene un rango de pH donde su actividad es máxima. Para las enzimas del intestino delgado, este valor suele ser cercano a la neutralidad o ligeramente básico.
```

## Sección: flujo-materia-energia (22 preguntas)

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "basico"
  tags: ["ecosistemas", "ciclos"]

respuesta: verdadero
tipo: vf

enunciado: "En un ecosistema, la materia circula en un ciclo cerrado: se recicla y reutiliza continuamente."

explicacion: |
  Los descomponedores devuelven nutrientes al sistema, disponibles de nuevo para los productores.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "basico"
  tags: ["ecosistemas", "energia"]

respuesta: falso
tipo: vf

enunciado: "La energía en un ecosistema circula en un ciclo cerrado, recuperándose íntegramente tras cada nivel trófico."

explicacion: |
  Falso, fluye en una sola dirección y se disipa como calor.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "intermedio"
  tags: ["comparativa"]

respuesta: "La materia se recicla y la energía no"
tipo: mc
opciones_explicitas: ["La materia se recicla y la energía no", "La energía se recicla y la materia no", "Ambas se reciclan en ciclos cerrados", "Ninguna de las dos se recicla"]

enunciado: "¿Cuál de estas afirmaciones es correcta sobre materia y energía en un ecosistema?"

explicacion: |
  La materia se recicla por ciclos biogeoquímicos; la energía entra como luz solar y sale como calor.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "basico"
  tags: ["termodinamica"]

respuesta: falso
tipo: vf

enunciado: "Una vez que la energía se disipa como calor, se puede recapturar fácilmente para volver a usarla."

explicacion: |
  Falso. El calor disipado es de baja calidad y no puede reusarse para trabajo biológico.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "basico"
  tags: ["fotosintesis"]

respuesta: verdadero
tipo: vf

enunciado: "Casi toda la energía que fluye por un ecosistema entra por la fotosíntesis."

explicacion: |
  Correcto, es la base de la mayoría de los ecosistemas.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "basico"
  tags: ["autotrofos"]

respuesta: verdadero
tipo: vf

enunciado: "Los productores (autótrofos) capturan energía solar y la transforman en energía química."

explicacion: |
  Correcto, convierten luz en enlaces químicos.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "intermedio"
  tags: ["fotosintesis"]

respuesta: verdadero
tipo: vf

enunciado: "La fotosíntesis es la principal puerta de entrada de energía nueva a un ecosistema."

explicacion: |
  Correcto, sin ella el flujo de energía se agotaría.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "basico"
  tags: ["consumidores"]

respuesta: falso
tipo: vf

enunciado: "Los consumidores representan la principal fuente de energía nueva para un ecosistema."

explicacion: |
  Falso, sólo transfieren energía ya existente; la fuente nueva son los productores.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "basico"
  tags: ["calor", "metabolismo"]

respuesta: verdadero
tipo: vf

enunciado: "Cada vez que un organismo usa energía, una parte se transforma en calor y se disipa al ambiente."

explicacion: |
  Correcto, se pierde parte en cada transformación.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "basico"
  tags: ["termodinamica", "entropia"]

respuesta: falso
tipo: vf

enunciado: "El calor disipado por los organismos se puede recapturar para usarse de nuevo como energía útil."

explicacion: |
  Falso, por la segunda ley de la termodinámica.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "intermedio"
  tags: ["cadenas_troficas"]

respuesta: falso
tipo: vf

enunciado: "Cuando la energía pasa de un nivel trófico a otro, el 100% pasa sin pérdidas."

explicacion: |
  Falso, sólo una fracción (típicamente ~10%) se transfiere.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "intermedio"
  tags: ["termodinamica"]

respuesta: "termodinamica"
tipo: completar
respuestas_validas:
  - "termodinamica"

enunciado: "La ley que explica por qué el calor no se puede recapturar como energía útil es la segunda ley de la ___."

explicacion: |
  Segunda ley de la termodinámica.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "basico"
  tags: ["sol"]

respuesta: verdadero
tipo: vf

enunciado: "Como la energía no se recicla, un ecosistema necesita una entrada constante de energía nueva (el sol) para seguir funcionando."

explicacion: |
  Correcto, es la fuente indispensable.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "intermedio"
  tags: ["materia", "sol"]

respuesta: falso
tipo: vf

enunciado: "Si el sol dejara de brillar, la materia de un ecosistema desaparecería inmediatamente, aunque la energía siguiera disponible."

explicacion: |
  Falso, es al revés: la materia (átomos) seguiría estando, pero el ecosistema colapsaría por falta de energía.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "basico"
  tags: ["atomos"]

respuesta: verdadero
tipo: vf

enunciado: "Los átomos de un ecosistema no desaparecen, sólo cambian de forma y de ubicación."

explicacion: |
  Correcto, se reciclan a través de los ciclos biogeoquímicos.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "basico"
  tags: ["analogia"]

respuesta: "el agua de una pileta con filtro, que circula y se reutiliza"
tipo: mc
opciones_explicitas: ["el agua de una pileta con filtro, que circula y se reutiliza", "el agua de una ducha que se va por el desague", "el aire", "ninguna analogia"]

enunciado: "En la analogía, la materia se compara con..."

explicacion: |
  La materia circula, se filtra y se reutiliza.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "basico"
  tags: ["analogia"]

respuesta: "el agua de una ducha que entra, pasa una vez y se va"
tipo: mc
opciones_explicitas: ["el agua de una ducha que entra, pasa una vez y se va", "el agua de una pileta con filtro que se reutiliza", "el aire", "ninguna analogia"]

enunciado: "En la analogía, la energía se compara con..."

explicacion: |
  Entra, se usa y se disipa, sin volver.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: verdadero
tipo: vf

enunciado: "La analogía de la pileta y la ducha ayuda a recordar que la materia se recicla y la energía no."

explicacion: |
  Correcto, materia circula, energía fluye en un sentido.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "intermedio"
  tags: ["calculo"]

variables:
  energia_nivel1: uno_de([1000, 2000, 10000])
  porcentaje_transferido: 10

respuesta: energia_nivel1 * porcentaje_transferido / 100
tipo: completar
tolerancia_abs: 0.1

enunciado: "Un productor tiene {energia_nivel1} kJ. Con la regla del 10%, ¿cuánta energía llega al consumidor de segundo nivel?"

pasos:
  - "{energia_nivel1} × 10 / 100"

explicacion: |
  {energia_nivel1} × 0,1 kJ.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "basico"
  tags: ["ecologia"]

respuesta: verdadero
tipo: vf

enunciado: "La regla del 10% dice que aproximadamente sólo el 10% de la energía de un nivel trófico pasa al siguiente."

explicacion: |
  Correcto, el resto se pierde en el camino.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "basico"
  tags: ["termodinamica"]

respuesta: verdadero
tipo: vf

enunciado: "El 90% de la energía que no se transfiere se pierde principalmente como calor en la respiración y otros procesos metabólicos."

explicacion: |
  Correcto, consistente con la segunda ley de la termodinámica.
```

```
metadata:
  materia: "biologia"
  tema: "flujo_materia_energia"
  nivel: "basico"
  tags: ["ecologia"]

respuesta: verdadero
tipo: vf

enunciado: "La pérdida de energía en cada nivel trófico es la razón por la que las cadenas tróficas no pueden tener infinitos niveles."

explicacion: |
  Correcto, la energía disponible se agota rápido con cada nivel.
```

## Sección: microbiologia-virus-inmunitario (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["bacterias", "celulas"]

respuesta: verdadero
tipo: vf

enunciado: "Las bacterias son células procariotas."

explicacion: |
  Son organismos unicelulares sin núcleo definido: procariotas.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["bacterias", "salud"]

respuesta: falso
tipo: vf

enunciado: "Todas las bacterias son patógenas y causan enfermedades."

explicacion: |
  Falso. La mayoría son inofensivas o beneficiosas, como la microbiota intestinal.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["hongos"]

respuesta: verdadero
tipo: vf

enunciado: "Los hongos son células eucariotas."

explicacion: |
  Correcto, tienen núcleo definido.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["hongos", "cloroplastos"]

respuesta: falso
tipo: vf

enunciado: "Los hongos tienen cloroplastos, igual que las plantas."

explicacion: |
  Falso. No hacen fotosíntesis: no tienen cloroplastos.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["virus", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "Un virus está compuesto únicamente por material genético envuelto en una cápsula de proteína (cápside)."

explicacion: |
  Correcto, esa es la estructura básica de un virus.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["virus", "metabolismo"]

respuesta: falso
tipo: vf

enunciado: "Un virus posee organelas y metabolismo propio, igual que una célula."

explicacion: |
  Falso. No tiene ninguna de las dos cosas.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["virus", "reproduccion"]

respuesta: falso
tipo: vf

enunciado: "Un virus puede reproducirse por sí solo, sin necesitar una célula huésped."

explicacion: |
  Falso, es un parásito intracelular obligado.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["virus", "estructura"]

respuesta: "capside"
tipo: completar
respuestas_validas:
  - "capside"

enunciado: "La cápsula de proteína que envuelve el material genético del virus se llama ___."

explicacion: |
  Se llama cápside.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "intermedio"
  tags: ["virus", "ciclo_viral"]

variables:
  etapas: [["adhesion", "el virus se pega a la celula huesped"], ["inyeccion", "el virus inyecta el material genetico dentro de la celula"], ["secuestro", "el virus usa la maquinaria de la celula para fabricar copias"], ["lisis", "la celula se rompe liberando los virus nuevos"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: etapas[idx][1]
tipo: mc
opciones_explicitas: ["el virus se pega a la celula huesped", "el virus inyecta el material genetico dentro de la celula", "el virus usa la maquinaria de la celula para fabricar copias", "la celula se rompe liberando los virus nuevos"]

enunciado: "¿Qué ocurre en la etapa de {etapas[idx][0]}?"

explicacion: |
  En {etapas[idx][0]}: {etapas[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["lisis"]

respuesta: verdadero
tipo: vf

enunciado: "En la etapa de lisis, la célula infectada se rompe y libera los virus nuevos."

explicacion: |
  Correcto, es la fase final de liberación de nuevos viriones.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "intermedio"
  tags: ["ribosomas"]

respuesta: falso
tipo: vf

enunciado: "El virus fabrica copias de sí mismo utilizando sus propios ribosomas."

explicacion: |
  Falso. Usa los ribosomas de la célula huésped que secuestró.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["orden", "ciclo_viral"]

respuesta: "adhesion, inyeccion, secuestro, lisis"
tipo: mc
opciones_explicitas: ["adhesion, inyeccion, secuestro, lisis", "inyeccion, adhesion, secuestro, lisis", "adhesion, secuestro, inyeccion, lisis"]

enunciado: "¿Cuál es el orden cronológico correcto del ciclo de infección viral?"

explicacion: |
  Adhesión → inyección → secuestro (replicación) → lisis (liberación).
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["sistema_inmunitario"]

respuesta: "inespecifica/innata"
tipo: mc
opciones_explicitas: ["inespecifica/innata", "especifica/adaptativa", "ninguna", "ambas por igual"]

enunciado: "La defensa que actúa contra cualquier invasor, sin importar cuál sea, se llama..."

explicacion: |
  Es la inmunidad innata: responde igual ante cualquier agente extraño.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["anticuerpos"]

respuesta: verdadero
tipo: vf

enunciado: "La defensa específica produce anticuerpos hechos a medida para un invasor particular."

explicacion: |
  Correcto, la inmunidad adaptativa genera anticuerpos específicos.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["barreras"]

respuesta: verdadero
tipo: vf

enunciado: "La piel y las mucosas son ejemplos de defensa inespecífica."

explicacion: |
  Correcto, son barreras físicas generales.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["memoria_inmunitaria"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema inmunitario 'recuerda' a un invasor después de una infección, respondiendo más rápido la segunda vez."

explicacion: |
  Correcto, es la base de la inmunidad adaptativa.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "basico"
  tags: ["vacunas"]

respuesta: verdadero
tipo: vf

enunciado: "Una vacuna expone al cuerpo a una versión debilitada o fragmento del patógeno, para que el sistema inmunitario aprenda a reconocerlo."

explicacion: |
  Correcto, sin causar la enfermedad real.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "intermedio"
  tags: ["defensa_inespecifica"]

respuesta: verdadero
tipo: vf

enunciado: "La fiebre es una respuesta de defensa inespecífica: el cuerpo sube su temperatura para dificultar la reproducción de muchos patógenos."

explicacion: |
  Correcto, es parte de la inmunidad innata.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "intermedio"
  tags: ["fagocitosis", "defensa_inespecifica"]

respuesta: "engullen y destruyen invasores, sin importar cuáles sean"
tipo: mc
opciones_explicitas: ["engullen y destruyen invasores, sin importar cuáles sean", "sólo atacan a un invasor específico ya conocido", "producen anticuerpos a medida", "sólo actúan en la piel"]

enunciado: "¿Qué hacen los glóbulos blancos que realizan fagocitosis, como parte de la defensa inespecífica?"

explicacion: |
  "Comen" (engullen) cualquier invasor que encuentren, sin distinguir cuál es específicamente.
```

```
metadata:
  materia: "biologia"
  tema: "microbiologia_virus_inmunitario"
  nivel: "avanzado"
  tags: ["vacunas", "aplicacion"]

respuesta: falso
tipo: vf

enunciado: "Las vacunas siempre usan el patógeno completo y activo, exactamente igual al que causa la enfermedad real."

explicacion: |
  Falso. Usan una versión debilitada, inactivada, o sólo un fragmento (como una proteína de la superficie) — suficiente para que el sistema inmunitario aprenda, sin causar la enfermedad.
```

