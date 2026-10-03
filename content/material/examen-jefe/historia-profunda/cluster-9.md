# Examen jefe — [PENDIENTE #689]

> Logro #689. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: seleccion-natural-evidencias-nivel2 (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["fosiles", "evolucion", "registro_fosil"]

variables:
  escenario: uno_de([["Archaeopteryx", "ave", "reptil"], ["Tiktaalik", "pez", "tetrápodo"], ["Ambulocetus", "mamífero", "anfibio"]])

enunciado: "El hallazgo de un fósil que presenta características de dos grupos distintos, como el caso de {escenario[0]}, es una evidencia clave de la evolución. Este tipo de organismo se denomina forma ___."

respuestas_validas:
  - "transicional"
tipo: completar

explicacion: |
  Las formas transicionales muestran características intermedias entre grupos de organismos, permitiendo reconstruir la historia evolutiva de linajes como el de las aves o los mamíferos acuáticos.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["caballos", "evidencia", "lineaje"]

variables:
  secuencia_correcta: ["Eohippus", "Mesohippus", "Merychippus", "Equus"]

enunciado: "El registro fósil de los équidos muestra una progresión clara en el tamaño y la morfología de los dientes y las extremidades. Ordene cronológicamente los siguientes géneros desde el más antiguo al más reciente:"

opciones_explicitas: ["Eohippus", "Mesohippus", "Merychippus", "Equus"]
respuesta_orden: ["Eohippus", "Mesohippus", "Merychippus", "Equus"]
tipo: ordenar

explicacion: |
  La evolución de los caballos muestra una transición desde animales pequeños de varios dedos hacia animales más grandes con un solo dedo (equino), adaptándose a cambios en el hábitat de bosque a pradera.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "avanzado"
  tags: ["tetrapodos", "transicion", "fofiles"]

variables:
  caso: uno_de([["Tiktaalik", "posee escamas y aletas lobuladas con estructuras óseas de extremidades"], ["Acanthostega", "presenta dedos pero mantiene una morfología muy acuática"], ["Ichthyostega", "muestra una columna vertebral más robusta para soportar peso"]])

enunciado: "Analice el siguiente caso fósil: {caso[0]}. Según la evidencia del registro fósil, este organismo representa una etapa de transición hacia la vida terrestre porque ___."

opciones_explicitas: ["posee escamas y aletas lobuladas con estructuras óseas de extremidades", "presenta dedos pero mantiene una morfología muy acuática", "muestra una columna vertebral más robusta para soportar peso"]
respuesta: "posee escamas y aletas lobuladas con estructuras óseas de extremidades"
tipo: mc

explicacion: |
  Los peces de aletas lobuladas como Tiktaalik poseen estructuras óseas en sus extremidades que son homólogas a los huesos de los miembros de los tetrápodos modernos.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "avanzado"
  tags: ["ballenas", "evolucion", "transicion"]

variables:
  etapa: uno_de([["Pakicetus", "un mamífero terrestre con oídos adaptados para el agua"], ["Ambulocetus", "un mamífero con extremidades adaptadas para la natación"], ["Basilosaurus", "un cetáceo con extremidades traseras vestigiales"]])

enunciado: "La transición de mamíferos terrestres a cetáceos está documentada por el registro fósil. Un ejemplo es {etapa[0]}, que se caracteriza por ser ___."

respuestas_validas:
  - "un mamífero terrestre con oídos adaptados para el agua"
  - "un mamífero con extremidades adaptadas para la natación"
  - "un cetáceo con extremidades traseras vestigiales"
tipo: completar

explicacion: |
  El registro fósil de las ballenas es uno de los más completos, mostrando la reducción de extremidades traseras y la modificación de los miembros anteriores en aletas.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "basico"
  tags: ["registro_fosil", "conceptos"]

enunciado: "Si el registro fósil muestra que una especie X aparece en estratos geológicos antiguos y una especie Y aparece en estratos más jóvenes con estructuras similares pero más complejas, esto sugiere que ___."

opciones_explicitas: ["ha ocurrido un proceso de cambio evolutivo a través del tiempo", "las especies se crearon de forma independiente sin relación", "el registro fósil es incompleto y no permite conclusiones"]
respuesta: "ha ocurrido un proceso de cambio evolutivo a través del tiempo"
tipo: mc

explicacion: |
  La sucesión de formas en el registro fósil permite observar la transformación de linajes biológicos a lo largo de la escala temporal geológica.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["evolucion", "especiacion", "adaptacion"]

respuesta: "radiacion_adaptativa"
tipo: mc

opciones_explicitas: ["extincion_masiva", "radiacion_adaptativa", "mutacion_espontanea", "deriva_genetica"]

enunciado: "Cuando un grupo de organismos coloniza un nuevo entorno con múltiples nichos ecológicos vacíos, se observa un proceso de diversificación rápida conocido como ___."

explicacion: |
  La radiación adaptativa ocurre cuando un linaje ancestral se diversifica rápidamente en una variedad de formas que permiten colonizar diferentes nichos ecológicos.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["fosiles", "tiempo_geologico"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[["Paleozoico", "explosión de vida"], ["Mesozoico", "dominio de reptiles"]], [["Paleozoico", "vida marina diversa"], ["Mesozoico", "aparición de aves"]]]

respuesta: datos[escenario_idx][0][0]
tipo: completar
respuestas_validas:
  - "Paleozoico"
  - "Mesozoico"

enunciado: "El registro fósil muestra que la selección natural ha moldeado la vida a través de eras geológicas. Un ejemplo es el ___, donde se observa una gran diversificación de formas de vida marinas."

explicacion: |
  El registro fósil es una evidencia clave que permite observar cómo la selección natural actúa sobre patrones de diversificación a lo largo de millones de años.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "avanzado"
  tags: ["homologia", "anatomia_comparada"]

respuesta: "estructuras_homologas"
tipo: mc

opciones_explicitas: ["estructuras_anlogas", "estructuras_homologas", "mutaciones_neutrales", "aislamiento_reproductivo"]

enunciado: "La selección natural actúa sobre estructuras que derivan de un ancestro común, aunque sus funciones hayan cambiado. Estas estructuras se denominan ___."

explicacion: |
  Las estructuras homólogas (como el brazo de un humano y la aleta de una ballena) son evidencia de que la selección natural ha adaptado un mismo plan corporal a diferentes funciones.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["procesos", "evolucion"]

opciones_explicitas: ["Variabilidad", "Selección Natural", "Adaptación", "Especiación"]
respuesta_orden: ["Variabilidad", "Selección Natural", "Adaptación", "Especiación"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que explican cómo la selección natural conduce a la diversificación de nuevas especies a lo largo del tiempo:"

explicacion: |
  Primero debe existir variabilidad genética; luego la selección natural actúa sobre esas variaciones en un entorno dado, resultando en adaptaciones que, acumuladas, llevan a la especiación.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "avanzado"
  tags: ["extincion", "nichos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["extinciones_masivas", "liberan_nichos"], ["extinciones_masivas", "reducen_la_diversidad"]]

respuesta: escenarios[caso_idx][1]
tipo: completar
respuestas_validas:
  - "liberan_nichos"
  - "reducen_la_diversidad"

enunciado: "Un patrón observado en la historia de la vida es que las ___ suelen actuar como catalizadores para nuevas radiaciones adaptativas porque ___."

explicacion: |
  Las extinciones masivas eliminan competidores y ocupantes de nichos, permitiendo que los supervivientes se diversifiquen rápidamente mediante la selección natural en los espacios vacíos.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["extincion", "evolucion", "nichos"]

respuesta: "radiacion_adaptativa"
tipo: completar
respuestas_validas:
  - "radiacion_adaptativa"
  - "radiacion_adaptativa"

enunciado: "Cuando ocurre una extinción masiva, se eliminan la mayoría de los taxones dominantes, lo que permite que los supervivientes ocupen los nichos vacíos mediante un proceso conocido como ___."

explicacion: |
  Las extinciones masivas actúan como un 'reset' al eliminar la competencia de los grupos dominantes, permitiendo que los linajes supervivientes se diversifiquen rápidamente para ocupar los nuevos espacios ecológicos.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "avanzado"
  tags: ["permico", "trias", "evolucion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[ "la gran extinción", "el gran reset" ], [ "el fin de la vida", "la gran diversificación" ]]

opciones_explicitas:
  - "Aumentar la competencia"
  - "Reducir la diversidad y abrir nuevos nichos"
  - "Detener la selección natural"

respuesta: "Reducir la diversidad y abrir nuevos nichos"
tipo: mc

enunciado: "La extinción masiva del Pérmico-Triásico es considerada un evento de 'reset' evolutivo porque su principal efecto en la biodiversidad fue ___."

explicacion: |
  Al eliminar hasta el 95% de las especies, se eliminaron las barreras biológicas y la competencia de los grupos que dominaban el Paleozoico, permitiendo el surgimiento de los dinosaurios en el Mesozoico.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["nichos", "seleccion_natural"]

tipo: mc
opciones_explicitas:
  - "Los supervivientes se adaptan a los nuevos nichos vacíos"
  - "La selección natural se detiene por falta de especies"
  - "La diversidad aumenta instantáneamente sin cambios genéticos"

respuesta: "Los supervivientes se adaptan a los nuevos nichos vacíos"

enunciado: "Tras un evento de extinción masiva, ¿cuál es el papel de la selección natural en la reconstrucción de la biosfera?"

explicacion: |
  La selección natural no se detiene; de hecho, se acelera en términos de divergencia morfológica, ya que los supervivientes se adaptan rápidamente a las nuevas condiciones y nichos disponibles.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["secuencia", "evolucion"]

opciones_explicitas:
  - "Extinción masiva"
  - "Vaciamiento de nichos"
  - "Radiación adaptativa"

respuesta_orden: ["Extinción masiva", "Vaciamiento de nichos", "Radiación adaptativa"]
tipo: ordenar

enunciado: "Ordene cronológicamente los eventos que caracterizan un ciclo de 'reset' evolutivo tras una crisis biológica:"

explicacion: |
  Primero ocurre el evento de extinción, luego quedan nichos ecológicos sin ocupar (vaciamiento), y finalmente los supervivientes evolucionan para llenarlos (radiación).
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "basico"
  tags: ["diversidad", "extincion"]

variables:
  valor_diversidad: uno_de([0, 1])
  datos: [[0.1, "baja"], [0.9, "alta"]]

respuesta: "baja"
tipo: mc
opciones_explicitas:
  - "baja"
  - "alta"
  - "constante"

enunciado: "Inmediatamente después de una extinción masiva, la diversidad biológica global es ___ en comparación con el periodo anterior."

explicacion: |
  Las extinciones masivas se definen precisamente por una caída drástica y rápida en la riqueza de especies y la diversidad funcional del ecosistema.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["homologia", "evolucion", "anatomia_comparada"]

tipo: mc
opciones_explicitas: ["Estructuras con diferente origen embrionario y función similar", "Estructuras con mismo origen embrionario pero diferente función", "Estructuras que cumplen la misma función pero tienen distinto origen", "Estructuras que han surgido de forma independiente por presión ambiental"]
respuesta: "Estructuras con mismo origen embrionario pero diferente función"
enunciado: "La homología se define como la presencia de estructuras en diferentes especies que, aunque pueden tener funciones distintas, comparten un mismo origen evolutivo y embriológico. ¿Cuál de las siguientes opciones describe mejor este concepto?"
explicacion: |
  Las estructuras homólogas (como el brazo de un humano y el ala de un murciélago) tienen el mismo plan estructural básico debido a un ancestro común, aunque la selección natural las haya adaptado para funciones diferentes (manipular objetos vs. volar).
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["vertebrados", "homologia", "anatomia"]

variables:
  escenario: uno_de([["el ala de un ave", "el brazo de un humano", "la aleta de una ballena"], ["la pata de un gato", "el ala de un murciélago", "el brazo de un humano"], ["la aleta de un delfín", "el ala de un ave", "la pata de un caballo"]])

tipo: completar
respuestas_validas:
  - "huesos"
  - "músculos"
  - "tejido"
respuesta: "huesos"

enunciado: "Si comparamos {escenario[0]}, {escenario[1]} y {escenario[2]}, observamos que presentan una organización similar de ___ óseos, lo que evidencia un ancestro común para los tetrápodos."

explicacion: |
  La disposición de los huesos (húmero, radio, cúbito, carpos) es un ejemplo clásico de homología que demuestra que estas especies derivan de un mismo plan corporal ancestral.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "avanzado"
  tags: ["divergencia", "adaptacion", "homologia"]

tipo: completar
tolerancia_abs: 0

enunciado: "Cuando estructuras homólogas se adaptan a diferentes nichos ecológicos, el proceso se denomina divergencia evolutiva. Si la estructura es similar por origen pero muy distinta en función, estamos ante una homología. Si la estructura es similar en función pero de origen distinto, el término es ___."

respuestas_validas:
  - "analogía"
respuesta: "analogía"

explicacion: |
  Es vital no confundir homología (mismo origen, distinta función) con analogía (distinto origen, misma función, como el ala de un insecto y el ala de un ave).
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "basico"
  tags: ["metodologia", "evidencia"]

tipo: ordenar
opciones_explicitas: ["Observación de la morfología externa", "Identificación de estructuras homólogas", "Conclusión sobre el ancestro común"]

enunciado: "Para establecer la evidencia de la homología en un estudio comparativo, ¿cuál es el orden lógico de los pasos científicos?"

explicacion: |
  Primero se observa la morfología, luego se comparan las estructuras internas para hallar la homología y finalmente se infiere la relación filogenética.
respuesta_orden: ["Observación de la morfología externa", "Identificación de estructuras homólogas", "Conclusión sobre el ancestro común"]
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["anatomia", "evolucion"]

variables:
  caso: uno_de([["un brazo humano y una aleta de foca"], ["una pata de perro y una aleta de ballena"], ["un brazo humano y una pata de gato"]])

tipo: mc
opciones_explicitas: ["Son estructuras análogas", "Son estructuras homólogas", "Son estructuras vestigiales", "Son estructuras de origen independiente"]

enunciado: "Considerando el par de estructuras: {caso}. ¿Cuál es la conclusión correcta desde el punto de vista de la anatomía comparada?"

respuesta: "Son estructuras homólogas"

explicacion: |
  Al compartir el mismo patrón esquelético básico a pesar de sus funciones, se clasifican como homólogas.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["evidencias", "evolucion"]

variables:
  datos: [["Las alas de un murciélago y las aletas de una ballena tienen la misma estructura ósea básica pero funciones distintas.", "homologia"], ["Las alas de una mariposa y las alas de un ave cumplen la misma función pero tienen estructuras de origen distinto.", "analogia"], ["Se encuentran restos óseos de un animal extinto que muestra una transición entre reptiles y aves.", "fosil"]]
  idx: uno_de([0,1,2])

enunciado: "El ejemplo descrito: '{datos[idx][0]}' representa una evidencia de tipo: ___"

respuestas_validas:
  - "homologia"
  - "analogia"
  - "fosil"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La respuesta correcta es {datos[idx][1]}. 
  - Homología: estructuras con origen común pero distinta función.
  - Analogía: estructuras con función similar pero origen distinto (convergencia).
  - Fósiles: restos de organismos que vivieron en el pasado.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["homologia", "analogia"]

variables:
  datos: [["alas de insectos vs alas de aves", "analogia"], ["brazo humano vs pata de gato", "homologia"]]
  idx: uno_de([0,1])

enunciado: "Si comparamos {datos[idx][0]}, estamos ante un caso de: ___"

respuestas_validas:
  - "analogia"
  - "homologia"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La relación entre {datos[idx][0]} es de {datos[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "basico"
  tags: ["evidencias"]

variables:
  datos: [["Órganos vestigiales", "anatomia"], ["Pruebas moleculares (ADN)", "molecular"], ["Restos de impresiones en roca", "paleontologia"]]
  idx: uno_de([0,1,2])

enunciado: "El ejemplo '{datos[idx][0]}' pertenece a la categoría de evidencia: ___"

respuestas_validas:
  - "anatomia"
  - "molecular"
  - "paleontologia"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La clasificación para {datos[idx][0]} es {datos[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["analogia"]

variables:
  datos: [["Aletas de delfín y aletas de tiburón", "analogia"], ["Pata de caballo y ala de murciélago", "homologia"]]
  idx: uno_de([0,1])

enunciado: "Analizando {datos[idx][0]}, el concepto evolutivo es: ___"

opciones_explicitas: ["analogia", "homologia"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Se ha identificado el caso como {datos[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "avanzado"
  tags: ["procesos"]

variables:
  pasos_correctos: ["variacion", "presion_ambiental", "reproduccion_diferencial", "adaptacion"]

enunciado: "Ordena correctamente las etapas de un proceso de selección natural:"

opciones_explicitas: ["variacion", "presion_ambiental", "reproduccion_diferencial", "adaptacion"]
respuesta_orden: ["variacion", "presion_ambiental", "reproduccion_diferencial", "adaptacion"]
tipo: ordenar

explicacion: |
  El proceso sigue la secuencia: 1. {pasos_correctos[0]}, 2. {pasos_correctos[1]}, 3. {pasos_correctos[2]} y finalmente 4. {pasos_correctos[3]}.
```

## Sección: herramientas-arte-rupestre (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["paleolitico", "tecnologia"]

enunciado: "En la industria lítica, una lasca se define como un/a ___."

respuestas_validas:
  - "fragmento desprendido de un núcleo"
tipo: completar

explicacion: |
  En la tecnología de la talla, las lascas son los fragmentos que se desprenden de una piedra núcleo al ser golpeada, siendo fundamentales para la producción de herramientas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["paleolitico", "ordenar"]

opciones_explicitas: ["Olduvayense", "Achelense", "Musteriense"]

enunciado: "Ordene las siguientes tecnologías de la más antigua a la más reciente:"

tipo: ordenar
respuesta_orden: ["Olduvayense", "Achelense", "Musteriense"]

explicacion: |
  La secuencia evolutiva comienza con el Olduvayense (choppers simples), sigue con el Achelense (bifaces elaborados) y continúa con el Musteriense (técnicas de lasca más complejas).
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["tecnologia", "evolucion"]

enunciado: "El bifaz es una herramienta característica del Paleolítico Inferior que se diferencia de las lascas simples por su técnica de fabricación. ¿Cuál es su principal característica?"

opciones_explicitas: ["Es tallado por ambas caras para lograr simetría", "Es un fragmento accidental de una piedra", "Se fabrica únicamente mediante percusión blanda"]
tipo: mc
respuesta: "Es tallado por ambas caras para lograr simetría"

explicacion: |
  El bifaz representa un salto cognitivo importante, ya que el homínido debe prever la forma final de la herramienta en la piedra antes de empezar a tallar ambas caras.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["especializacion", "paleolitico"]

enunciado: "Un raspador es una herramienta especializada cuya función principal es ___."

respuestas_validas:
  - "usado para tratar pieles"
tipo: completar

explicacion: |
  La especialización de las herramientas (como el buril o el raspador) indica una mayor complejidad en la organización social y una explotación más eficiente de los recursos naturales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["tecnologia", "calculo"]

enunciado: "Si un arqueólogo encuentra un conjunto de 12 herramientas líticas con bulbos de percusión pronunciados y plataformas anchas, ¿qué técnica de talla se utilizó probablemente?"

tipo: mc
opciones_explicitas: ["percusión", "presión"]
respuesta: "percusión"

explicacion: |
  La técnica de presión permite obtener lascas muy finas y controladas, mientras que la percusión (especialmente con percutor duro) es la forma más primaria de obtener lascas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["arte_rupestre", "paleolitico"]

tipo: mc
opciones_explicitas: ["Paredes de piedra", "Lienzos de tela", "Pieles de animales", "Tablas de madera"]
respuesta: "Paredes de piedra"

enunciado: "En el arte rupestre de cuevas como Altamira o Lascaux, ¿cuál era el soporte principal utilizado para las pinturas?"

explicacion: |
  El arte rupestre se caracteriza por utilizar las paredes de las cuevas (soporte pétreo) como lienzo para sus representaciones.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["grabado", "tecnicas"]

tipo: completar
respuestas_validas:
  - "grabado"

enunciado: "Si un artista prehistórico utiliza una piedra afilada para realizar una incisión profunda en la roca, está realizando un ___."

pasos:
  - "Identificar la acción: incisión en la roca."
  - "Relacionar la acción con la técnica correspondiente."

explicacion: |
  El término técnico para la marca dejada por una incisión en una superficie sólida es el grabado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["pigmentos", "quimica_prehistorica"]

variables:
  par: uno_de([["ocre", "óxido de hierro"], ["negro", "carbón vegetal"]])

tipo: mc
opciones_explicitas: ["óxido de hierro", "carbón vegetal", "arcilla blanca", "sangre de animal"]

enunciado: "Para obtener el color {par[0]} muy común en las pinturas de la Cueva de las Manos, los humanos utilizaban:"

respuesta: par[1]

explicacion: |
  Los pigmentos se obtenían de minerales (como el óxido de hierro para rojos/ocres) o de materia orgánica quemada (carbón para el negro).
```

```
metadata:
  materia: "historia_profucha"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["simbolismo", "homo_sapiens"]

tipo: mc
opciones_explicitas: ["Capacidad de abstracción", "Necesidad de decorar", "Falta de herramientas", "Supervivencia alimentaria"]
respuesta: "Capacidad de abstracción"

enunciado: "La presencia de signos abstractos y manos en negativo en las cuevas sugiere que el Homo sapiens ya poseía ___."

explicacion: |
  La capacidad de representar conceptos no tangibles o símbolos es una prueba clave del desarrollo del pensamiento simbólico y el lenguaje complejo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["procesos", "arte"]

tipo: ordenar
opciones_explicitas: ["Preparación del soporte", "Preparación del pigmento", "Aplicación de la pintura", "Agotamiento de la luz"]

enunciado: "Ordena el proceso lógico que seguiría un artista en una cueva profunda para realizar una pintura rupestre:"

explicacion: |
  El artista primero debe asegurar la superficie, luego crear la mezcla de color y finalmente aplicarla, todo esto gestionando la limitada luz de la cueva.
respuesta_orden: ["Preparación del soporte", "Preparación del pigmento", "Aplicación de la pintura", "Agotamiento de la luz"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["prehistoria", "arte_rupestre"]

tipo: mc
opciones_explicitas: ["Animales de caza", "Paisajes urbanos", "Figuras geométricas abstractas", "Retratos de reyes"]
respuesta: "Animales de caza"

enunciado: "En el arte rupestre del Paleolítico, ¿qué tipo de figuras eran las representadas con mayor frecuencia en las paredes de las cuevas?"

explicacion: |
  Las pinturas rupestres más comunes representaban animales que formaban parte de la dieta o el entorno inmediato de los grupos humanos, como bisontes, caballos y ciervos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["simbolismo", "manos"]

tipo: mc
opciones_explicitas: ["Siluetas de manos", "Escenas de guerra", "Instrumentos musicales", "Mapas estelares"]
respuesta: "Siluetas de manos"

enunciado: "Además de animales, es muy común encontrar en las cuevas la técnica de la estarcido para representar ___."

explicacion: |
  Las siluetas de manos (ya sean en positivo o negativo) son uno de los elementos más icónicos y recurrentes del arte rupestre mundial.
```

```
metadata:
  materia: "historia_profucha"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["escenas", "caza"]

tipo: mc
opciones_explicitas: ["escenas de caza", "mapas de navegación", "diagramas matemáticos", "dibujos arquitectónicos"]
respuesta: "escenas de caza"

enunciado: "Cuando los artistas prehistóricos representaban la interacción entre humanos y animales, solían plasmar ___."

explicacion: |
  Las escenas de caza muestran la dinámica de la supervivencia, representando a los cazadores con lanzas o arcos frente a sus presas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["identificacion"]

tipo: completar
respuestas_validas:
  - "animales"
  - "manos"
  - "escenas"

enunciado: "El arte rupestre suele clasificarse en tres grandes categorías temáticas: ___, siluetas de ___ y ___."

explicacion: |
  Estas tres categorías cubren la mayoría de los hallazgos en el registro arqueológico de las pinturas rupestres.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["observacion", "estudio"]

tipo: ordenar
opciones_explicitas: ["Identificar el pigmento", "Observar la figura", "Analizar el contexto de la cueva", "Interpretar el significado"]

enunciado: "Un arqueólogo sigue un proceso lógico para estudiar una pintura rupestre. Ordena estos pasos de forma coherente:"

explicacion: |
  El método científico en arqueología comienza con la observación directa y el análisis material antes de pasar a la interpretación teórica.
respuesta_orden: ["Observar la figura", "Identificar el pigmento", "Analizar el contexto de la cueva", "Interpretar el significado"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["cognicion", "simbolismo", "hominidos"]

variables:
  escenario: uno_de([["pintura de manos en negativo", "capacidad de representación simbólica"], ["herramientas de piedra tallada", "planificación técnica avanzada"], ["adornos con conchas marinas", "pensamiento abstracto y estético"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["capacidad de representación simbólica", "planificación técnica avanzada", "pensamiento abstracto y estético"]

enunciado: "La presencia de {escenario[0]} en cuevas prehistóricas es una evidencia fundamental de la {escenario[1]} del Homo sapiens."

explicacion: |
  El uso de pigmentos para dejar la huella de la mano indica que el individuo no solo interactuaba con el entorno, sino que proyectaba su identidad, un signo claro de pensamiento simbólico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["tecnologia", "evolucion"]

respuesta: "Homo sapiens"
tipo: completar
respuestas_validas:
  - "Homo sapiens"
  - "Homo sapiens sapiens"

enunciado: "A diferencia de otros homínidos, el ___ desarrolló una capacidad de abstracción que le permitió crear herramientas complejas y arte rupestre."

explicacion: |
  Aunque otros homínidos usaron herramientas, la combinación de arte complejo y tecnología diversificada es característica del Homo sapiens.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["proceso", "arte_rupestre"]

opciones_explicitas: ["Preparación del soporte", "Preparación de pigmentos", "Aplicación del color", "Grabado de contornos"]

respuesta_orden: ["Preparación del soporte", "Preparación de pigmentos", "Grabado de contornos", "Aplicación del color"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que un artista del Paleolítico Superior seguiría para realizar una pintura de gran formato en una pared de la cueva:"

explicacion: |
  Primero se debe elegir y limpiar la pared, luego fabricar la pintura con minerales, trazar la figura y finalmente aplicar el pigmento.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["cognicion", "herramientas"]

variables:
  caso: uno_de([["un bifaz perfectamente simétrico", "estética y precisión"], ["un propulsor de lanza", "ingeniería y cálculo de trayectoria"], ["un raspador de hueso", "especialización funcional"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["estética y precisión", "ingeniería y cálculo de trayectoria", "especialización funcional"]

enunciado: "La fabricación de {caso[0]} sugiere que el homínido no solo buscaba utilidad, sino también {caso[1]}."

explicacion: |
  La simetría en herramientas de piedra que no es estrictamente necesaria para el corte indica una búsqueda de orden y belleza, propia de la mente moderna.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["simbolismo", "evolucion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que el arte rupestre representa un salto cualitativo en la cognición debido a su naturaleza no utilitaria inmediata?"

explicacion: |
  Correcto. El arte no tiene una función de supervivencia directa (como buscar comida), sino que cumple funciones sociales, rituales o de comunicación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["arte_rupestre", "tecnicas"]

variables:
  datos: [["pigmentos mezclados con grasa animal aplicados con los dedos", "Pintura con los dedos"], ["grabados realizados con piedras duras sobre la roca", "Petroglifos"], ["dibujos realizados con carbón vegetal sobre superficies claras", "Dibujo al carbón"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Pintura con los dedos", "Petroglifos", "Dibujo al carbón"]

enunciado: "Se ha descubierto una cueva con las siguientes características: {datos[idx][0]}. ¿A qué técnica pertenece?"

explicacion: |
  La descripción corresponde a {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["herramientas", "grabado"]

variables:
  datos: [["piedra de sílex", "percutor"], ["hueso endurecido", "estilete"], ["punta de madera", "incisores"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "percutor"
  - "estilete"
  - "incisores"

enunciado: "Para grabar la roca a partir de {datos[idx][0]}, el artista necesitó un/a ___."

explicacion: |
  El instrumento utilizado para la acción descrita es un/a {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profucha"
  tema: "herramientas_arte_rupestre"
  nivel: "avanzado"
  tags: ["quimica_antigua", "pigmentos"]

variables:
  datos: [["óxido de hierro", "rojo"], ["óxido de manganeso", "negro"], ["arcilla blanca", "blanco"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["rojo", "negro", "blanco"]

enunciado: "Un arqueólogo encuentra restos de coloración {datos[idx][0]} en una pared. ¿Cuál es el pigmento probable?"

explicacion: |
  El pigmento utilizado para obtener el color {datos[idx][1]} es el {datos[idx][0]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta_orden: ["Preparación de la superficie", "Aplicación del pigmento", "Sellado con grasa"]
tipo: ordenar
opciones_explicitas: ["Preparación de la superficie", "Aplicación del pigmento", "Sellado con grasa"]

enunciado: "Ordene los pasos lógicos para la creación de una pintura mural rupestre duradera:"

explicacion: |
  El proceso estándar requiere primero limpiar la roca, luego aplicar el color y finalmente protegerlo con un aglutinante como la grasa.
```

```
metadata:
  materia: "historia_profunda"
  tema: "herramientas_arte_rupestre"
  nivel: "basico"
  tags: ["soporte", "arqueologia"]

variables:
  datos: [["pared de piedra", "pared"], ["banco de roca", "pared"], ["techo de la cueva", "techo"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["pared", "techo", "suelo"]

enunciado: "La obra se encuentra plasmada sobre un/a {datos[idx][0]}. Por lo tanto, el soporte es un/a ___."

explicacion: |
  En arqueología, la ubicación física define el soporte: {datos[idx][1]}.
```

## Sección: poblamiento-planeta-america (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["origen", "africa", "homo_sapiens"]

respuesta: "África"
tipo: completar
respuestas_validas:
  - "África"

enunciado: "Según la teoría 'Out of Africa', el Homo sapiens se originó en el continente de ___."

explicacion: |
  La evidencia genética y fósil sostiene que los humanos modernos surgieron en África y luego migraron hacia el resto del mundo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["migracion", "teoria"]

variables:
  escenario: uno_de([["África", "Asia", "Europa", "América"], ["África", "Asia", "Europa", "Oceanía"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["África", "Asia", "Europa", "América"]

enunciado: "De acuerdo con la teoría del origen africano, ¿desde qué continente partieron las primeras migraciones de Homo sapiens para colonizar el resto del planeta?"

explicacion: |
  La migración comenzó desde África hacia Asia y luego se expandió hacia otros continentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["secuencia", "migracion"]

respuesta_orden: ["África", "Asia", "Europa", "América"]
tipo: ordenar
opciones_explicitas: ["África", "Asia", "Europa", "América"]

enunciado: "Ordena cronológicamente la expansión global del Homo sapiens según la teoría predominante:"

explicacion: |
  Primero se consolidó en África, luego migró hacia Asia/Europa y finalmente llegó al continente americano.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["america", "estrecho_de_bering"]

variables:
  datos: [["Bering", "Asia"], ["Magallanes", "América"]]

respuesta: datos[0][0]
tipo: completar
respuestas_validas:
  - "Bering"

enunciado: "La teoría más aceptada sugiere que el paso de los primeros humanos hacia América se realizó a través del estrecho de ___."

explicacion: |
  El Estrecho de Bering permitió el tránsito desde el noreste de Asia hacia Alaska durante las glaciaciones.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["teoria", "out_of_africa"]

respuesta: falso
tipo: vf

enunciado: "¿La teoría 'Out of Africa' propone que el Homo sapiens es originario de Europa y luego migró a África?"

explicacion: |
  Falso. La teoría postula exactamente lo contrario: el origen es africano y la migración fue hacia afuera.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["prehistoria", "migracion"]

respuesta: "Asia"
tipo: completar
respuestas_validas:
  - "Asia"

enunciado: "Se cree que los primeros grupos humanos llegaron al continente americano cruzando el puente terrestre de Beringia desde ________."

explicacion: |
  La teoría más aceptada sugiere que durante las glaciaciones, el descenso del nivel del mar permitió la formación de un puente de tierra entre Asia y América.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["geografia", "migracion"]

respuesta: "puente terrestre"
tipo: mc
opciones_explicitas: ["puente terrestre", "paso marítimo", "ruta costera"]

enunciado: "El corredor que permitió el paso de humanos y megafauna desde Asia hacia América se conoce como Beringia. ¿Qué tipo de corredor era?"

explicacion: |
  El puente de Beringia era una masa de tierra que conectaba los dos continentes durante los periodos de máximo glaciar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["cronologia", "teorias"]

respuesta: 15000
tipo: completar
tolerancia_abs: 5000

enunciado: "Aunque las fechas varían según la teoría, se estima que el poblamiento masivo comenzó hace aproximadamente ___ años."

pasos:
  - "Considerar el final de la última glaciación."
  - "Estimar el inicio de las migraciones hacia el sur del continente."

explicacion: |
  Si bien hay debates sobre teorías más antiguas (como la de Monte Verde), el consenso general sitúa las migraciones principales hace decenas de miles de años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["secuencia", "migracion"]

respuesta_orden: ["Asia", "Beringia", "América"]
tipo: ordenar
opciones_explicitas: ["Asia", "Beringia", "América"]

enunciado: "Ordena la secuencia lógica del poblamiento de América según la teoría del Estrecho de Bering:"

explicacion: |
  La secuencia implica el punto de origen (Asia), el medio de tránsito (Beringia) y el destino (América).
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["clima", "fauna"]

respuesta: "descenso del nivel del mar"
tipo: mc
opciones_explicitas: ["descenso del nivel del mar", "aumento de temperatura", "cambio en la vegetación"]

enunciado: "La formación del puente de Beringia fue posible gracias a la glaciación, lo que provocó un ___."

explicacion: |
  Durante las glaciaciones, el agua se acumulaba en los glaciares, haciendo que el nivel del mar bajara y expusiera el suelo marino.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["poblamiento", "geografia_humana"]

respuesta: "América"
tipo: completar
respuestas_validas:
  - "América"

enunciado: "Considerando la cronología del poblamiento humano global, ___ fue el último continente habitado por seres humanos (con excepción de la Antártida)."

explicacion: |
  Mientras que África fue la cuna de la humanidad y los otros continentes fueron alcanzados hace decenas de miles de años, América fue colonizada mucho más recientemente en la escala temporal evolutiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["cronologia", "comparativa"]

variables:
  escenario: uno_de([["África", "Asia", "Europa", "Oceanía"], ["América", "Antártida"]])
  es_america: escenario[0] == "América"

respuesta: "último"
tipo: mc
opciones_explicitas: ["primero", "segundo", "último"]

enunciado: "Comparado con África, Asia, Europa y Oceanía, el continente americano fue el ___ en ser poblado por humanos."

explicacion: |
  La evidencia arqueológica y genética indica que el poblamiento de América es un evento mucho más tardío en comparación con el resto de las masas continentales habitables.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["orden", "secuencia"]

respuesta_orden: ["África", "Asia", "Europa", "Oceanía", "América"]
tipo: ordenar
opciones_explicitas: ["África", "Asia", "Europa", "Oceanía", "América"]

enunciado: "Ordena cronológicamente los continentes (de mayor a menor antigüedad en su poblamiento humano) según el consenso científico actual:"

explicacion: |
  El patrón de expansión humana muestra una salida desde África hacia Asia, luego hacia Europa y Oceanía, dejando a América como el último gran territorio en ser integrado a la red de asentamientos humanos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["teoria", "verdad_falso"]

respuesta: falso
tipo: mc
opciones_explicitas: [verdadero, falso]

enunciado: "¿Es correcto afirmar que América fue uno de los primeros continentes en ser habitado por los primeros homínidos que salieron de África?"

explicacion: |
  Es falso. América fue el último continente en ser poblado, mucho después de que los humanos ya hubieran colonizado el resto de los continentes habitables.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["excepcion", "geografia"]

respuesta: 1
tipo: completar
tolerancia_abs: 0

enunciado: "Si América es el último continente poblado, y la Antártida es la única excepción que no fue poblada por humanos de forma permanente, ¿cuántos continentes de los 7 totales fueron poblados después de África, Europa, Asia y Oceanía?"

pasos:
  - "Identificar los continentes ya poblados: África, Asia, Europa, Oceanía (4)"
  - "Identificar los continentes restantes: América y Antártida (2)"
  - "Descontar la Antártida por no estar poblada: 2 - 1 = 1"

explicacion: |
  La respuesta es 1, refiriéndose únicamente a América. La Antártida no cuenta como continente poblado por humanos en la historia antigua/prehistórica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["arqueologia", "clovis", "tecnologia"]

respuesta: "puntas de lanza"
tipo: completar
respuestas_validas:
  - "puntas de lanza"

enunciado: "La cultura Clovis se caracteriza por la fabricación de ___ de piedra con una hendidura característica en la base."

explicacion: |
  La cultura Clovis (aprox. 13,000 años atrás) es conocida por sus herramientas de piedra altamente especializadas, especialmente sus puntas de lanza con una ranura basal.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["teoria", "geografia", "bering"]

respuesta: "Beringia"
tipo: mc
opciones_explicitas: ["Beringia", "Pacífico", "Atlántico"]

enunciado: "Según la teoría más aceptada, el primer gran corredor de poblamiento hacia América fue el puente terrestre llamado ___."

explicacion: |
  Durante la última glaciación, el descenso del nivel del mar permitió la existencia de Beringia, un puente terrestre que conectaba Siberia con Alaska.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["genetica", "adn", "migracion"]

respuesta: "Asia"
tipo: mc
opciones_explicitas: ["Asia", "Europa", "Oceanía", "África"]

enunciado: "Estudios de ADN mitocondrial en poblaciones indígenas americanas muestran una fuerte conexión genética con grupos provenientes de ___."

explicacion: |
  La evidencia genética actual confirma que las poblaciones originarias de América comparten ancestros comunes con poblaciones del este de Asia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["secuencia", "teorias", "migracion"]

respuesta_orden: ["Ruta de Bering", "Corredor libre de hielo", "Ruta costera"]
tipo: ordenar
opciones_explicitas: ["Ruta de Bering", "Corredor libre de hielo", "Ruta costera"]

enunciado: "Ordene las etapas probables de una migración terrestre desde el norte de Asia hacia el interior del continente americano:"

explicacion: |
  El modelo clásico sugiere primero el cruce por Beringia, luego el paso por un corredor libre de hielo entre las glaciaciones, y finalmente la dispersión hacia el sur.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["arqueologia", "chile", "monte_verde"]

respuesta: "anterior"
tipo: mc
opciones_explicitas: ["anterior", "posterior", "contemporánea"]

enunciado: "El hallazgo del sitio arqueológico Monte Verde en Chile desafió la teoría Clovis porque sus restos son ___ a la cultura Clovis."

explicacion: |
  Monte Verde presenta evidencia de asentamientos humanos que datan de hace más de 14,500 años, lo que sugiere que hubo migraciones antes de la expansión de la cultura Clovis.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["teorias", "migracion"]

respuesta: "Teoría de la Ruta Costera"
tipo: mc
opciones_explicitas: ["Teoría de Beringia", "Teoría de la Ruta Costera"]

enunciado: "Según la evidencia arqueológica más aceptada para el poblamiento temprano, ¿cuál de estas rutas sugiere que los humanos llegaron bordeando la costa del Pacífico?"

explicacion: |
  La teoría de la ruta costera propone que los primeros migrantes utilizaron embarcaciones para bordear el Pacífico, lo que explicaría la rápida llegada a Sudamérica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["cronologia", "continentes"]

tipo: ordenar
opciones_explicitas: ["Asia", "Oceanía", "Europa", "América"]
respuesta_orden: ["Asia", "Oceanía", "Europa", "América"]

enunciado: "Ordena los siguientes continentes desde el que fue poblado primero por el Homo sapiens hasta el último, basándote en las cronologías arqueológicas generales."

explicacion: |
  El orden general de poblamiento sugiere que la humanidad salió de África y se expandió primero por Asia y Oceanía, luego Europa y finalmente América.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "basico"
  tags: ["geografia", "migracion"]

respuesta: "el estrecho de Bering"
tipo: completar
respuestas_validas:
  - "el estrecho de Bering"

enunciado: "Para entrar al continente americano desde Asia durante la última glaciación, los grupos humanos debieron cruzar ___."

explicacion: |
  El puente de Beringia permitió el paso de grupos de cazadores-recolectores desde Siberia hacia Alaska.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "intermedio"
  tags: ["teorias", "rutas"]

respuesta: "La ruta marítima"
tipo: mc
opciones_explicitas: ["La ruta terrestre", "La ruta marítima"]

enunciado: "Si consideramos que los humanos no solo usaron puentes de tierra, sino también balsas para bordear continentes, ¿a qué tipo de migración nos referimos?"

explicacion: |
  La migración marítima o costera es una de las teorías fundamentales para explicar el poblamiento rápido de las costas americanas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "poblamiento_planeta_america"
  nivel: "avanzado"
  tags: ["secuencia", "poblamiento"]

tipo: ordenar
opciones_explicitas: ["África", "Asia", "Oceanía", "América"]
respuesta_orden: ["África", "Asia", "Oceanía", "América"]

enunciado: "Establece el orden cronológico correcto de la expansión global del Homo sapiens, considerando el poblamiento de América como el evento más reciente de la lista."

explicacion: |
  La expansión comenzó en África, siguió por Asia y Oceanía, y finalmente llegó a América hace aproximadamente 15,000-20,000 años.
```

## Sección: revolucion-neolitica (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "sedentarismo"]

tipo: mc
opciones_explicitas: ["Caza y recolección", "Agricultura y ganadería", "Comercio de especias", "Metalurgia del hierro"]

enunciado: "La Revolución Neolítica se define fundamentalmente por el paso de una economía de subsistencia basada en la caza y la recolección hacia una basada en la..."

respuesta: "Agricultura y ganadería"

explicacion: |
  El Neolítico marca la transición de la dependencia de los recursos naturales espontáneos al control de la producción de alimentos mediante la domesticación de plantas y animales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["estilo_de_vida", "asentamientos"]

variables:
  escenario: uno_de([["nómadas", "se desplazan constantemente"], ["sedentarios", "se establecen en un lugar fijo"]])

tipo: completar
respuestas_validas:
  - "nómadas"
  - "sedentarios"

enunciado: "Antes de la agricultura, los grupos humanos eran principalmente {escenario[0]}, pero con la domesticación de especies se volvieron {escenario[1]}."

respuesta: escenario[1]

explicacion: |
  Al tener cultivos y ganado que cuidar, los grupos humanos ya no necesitaban desplazarse constantemente, dando origen a los primeros asentamientos permanentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["sociedad", "excedente"]

tipo: mc
opciones_explicitas: ["Desigualdad social", "Igualdad absoluta", "Desaparición de la propiedad", "Retorno a la caza"]

enunciado: "La capacidad de producir un excedente de alimentos permitió la especialización del trabajo y, consecuentemente, el surgimiento de..."

respuesta: "Desigualdad social"

explicacion: |
  El excedente alimentario permitió que no todos tuvieran que producir comida, lo que llevó a la división del trabajo y a la aparición de estructuras de poder y jerarquías sociales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["tiempo", "cronologia"]

tipo: ordenar
opciones_explicitas: ["Paleolítico", "Revolución Neolítica", "Edad de los Metales"]

respuesta_orden: ["Paleolítico", "Revolución Neolítica", "Edad de los Metales"]

enunciado: "Ordena cronológicamente las etapas de la historia humana según el uso de herramientas y tecnología de subsistencia:"

explicacion: |
  La Revolución Neolítica es el puente entre el Paleolítico (piedra tallada/caza) y el desarrollo de las civilizaciones complejas que usarían metales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["demografia", "salud"]

tipo: completar
tolerancia_abs: 0

enunciado: "Se estima que hace aproximadamente 12000 años, la transición hacia la agricultura provocó que la población mundial ___ de forma drástica."

respuesta: "aumentó"

explicacion: |
  La agricultura permitió una mayor densidad de población por unidad de superficie, aunque también trajo nuevos desafíos como enfermedades zoonóticas y carencias nutricionales específicas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "cereales"]

variables:
  escenario: uno_de([["Creciente Fértil", "trigo y cebada"], ["Mesoamérica", "maíz"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["trigo y cebada", "maíz", "papa", "arroz"]

enunciado: "En la región del {escenario[0]}, los primeros agricultores se especializaron en el cultivo de {escenario[1]}."

explicacion: |
  En el Creciente Fértil (Mesopotamia y Levante), el trigo y la cebada fueron los pilares de la agricultura neolítica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["ganaderia", "animales"]

respuesta: "oveja"
tipo: mc
opciones_explicitas: ["oveja", "vaca", "cerdo", "caballo"]

enunciado: "Uno de los animales más importantes para la obtención de lana y carne en el Neolítico fue la ___."

explicacion: |
  La domesticación de la oveja permitió no solo alimento, sino también fibras textiles para la vestimenta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["america", "papa"]

respuesta: "papa"
respuestas_validas:
  - "papa"
tipo: completar

enunciado: "A diferencia de los cereales de Eurasia, en la región de los Andes el cultivo fundamental fue la ___."

explicacion: |
  La papa fue el cultivo base de las civilizaciones andinas, permitiendo el asentamiento en zonas de altura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["procesos", "orden"]

respuesta_orden: ["Recolección de granos silvestres", "Selección de semillas", "Cultivo de campos"]
tipo: ordenar
opciones_explicitas: ["Recolección de granos silvestres", "Selección de semillas", "Cultivo de campos"]

enunciado: "Ordena los pasos que permitieron la transición de la recolección a la agricultura intensiva:"

explicacion: |
  Primero se recolectaban granos, luego se seleccionaban las mejores semillas para la siguiente siembra, consolidando el cultivo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["consecuencias", "poblacion"]

respuesta: "aumento"
tipo: mc
opciones_explicitas: ["aumento", "disminución", "estancamiento", "variación"]

enunciado: "La capacidad de producir excedentes alimentarios provocó un ___ de la población humana."

explicacion: |
  La agricultura permitió alimentar a más personas en un mismo territorio, lo que derivó en un crecimiento demográfico sostenido.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "origen", "neolitico"]

tipo: mc
opciones_explicitas: ["En un único punto geográfico", "De forma independiente en diversas regiones", "Fue un proceso importado de Europa", "Ocurrió solo en el Creciente Fértil"]
respuesta: "De forma independiente en diversas regiones"
enunciado: "Sobre el surgimiento de la agricultura durante la Revolución Neolítica, es correcto afirmar que esta ocurrió ___."
explicacion: |
  La agricultura no fue un evento único y global, sino que surgió de manera independiente en múltiples focos como el Creciente Fértil, China, Mesoamérica y los Andes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["regiones", "centros_de_origen"]

variables:
  idx: uno_de([0, 1, 2, 3])
  datos: [["Creciente Fértil", "trigo y cebada"], ["China", "arroz y mijo"], ["Mesoamérica", "maíz y calabaza"], ["Andes", "papa y quinoa"]]

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "trigo y cebada"
  - "arroz y mijo"
  - "maíz y calabaza"
  - "papa y quinoa"

enunciado: "En la región de {datos[idx][0]}, los primeros cultivos domesticados fueron principalmente {datos[idx][1]}."

explicacion: |
  Cada región desarrolló sus propios cultivos base de forma autónoma: {datos[idx][0]} se centró en {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

tipo: ordenar
opciones_explicitas: ["Recolección de granos silvestres", "Domesticación de plantas", "Sedentarismo", "Aumento de la densidad poblacional"]

enunciado: "Ordena cronológicamente las etapas que generalmente preceden a la consolidación de las sociedades agrícolas:"

explicacion: |
  El proceso comienza con la recolección, seguido de la selección de semillas (domesticación), lo que permite asentarse (sedentarismo) y finalmente permite que la población crezca.
respuesta_orden: ["Recolección de granos silvestres", "Domesticación de plantas", "Sedentarismo", "Aumento de la densidad poblacional"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["geografia", "determinismo"]

tipo: vf

enunciado: "La existencia de múltiples centros de origen de la agricultura sugiere que el clima y la disponibilidad de especies silvestres fueron factores clave en diferentes partes del mundo."

respuesta: verdadero

explicacion: |
  Es verdadero. La diversidad de cultivos en distintas regiones demuestra que la transición neolítica fue una respuesta adaptativa a entornos locales específicos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["regiones", "identificacion"]

variables:
  idx: uno_de([0, 1])
  datos: [["Mesoamérica", "Maíz"], ["Andes", "Papa"]]

tipo: completar
tolerancia_abs: 0

enunciado: "Si estamos en la región de {datos[idx][0]}, el cultivo fundamental para el desarrollo de la agricultura fue la {datos[idx][1]}."

pasos:
  - "Identificar la región según el escenario."
  - "Relacionar la región con su cultivo principal."

explicacion: |
  En {datos[idx][0]}, la domesticación de la {datos[idx][1]} fue el motor del cambio neolítico.

respuesta: datos[idx][1]
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "excedente"]

respuesta: "excedente"
tipo: completar
respuestas_validas:
  - "excedente"

enunciado: "La capacidad de producir más alimento del que se consume inmediatamente se denomina ___."

explicacion: |
  Este fenómeno permitió que no todas las personas tuvieran que dedicarse a la recolección o caza, permitiendo la especialización del trabajo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["sedentarismo", "agricultura"]

respuesta: "sedentarismo"
tipo: mc
opciones_explicitas: ["sedentarismo", "desplazamiento constante", "nomadismo extremo", "migración estacional"]

enunciado: "La adopción de la agricultura estable permitió que los grupos humanos abandonaran el nomadismo, dando paso al ___."

explicacion: |
  Al tener una fuente de alimento constante y predecible, las poblaciones pudieron establecer asentamientos permanentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["demografia", "neolitico"]

respuesta: "aumento"
tipo: mc
opciones_explicitas: ["aumento", "disminución", "estancamiento", "inestabilidad"]

enunciado: "La disponibilidad de excedentes alimentarios provocó un ___ de la población humana."

explicacion: |
  La mayor disponibilidad de calorías y la estabilidad de los asentamientos permitieron un crecimiento demográfico sostenido.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["secuencia", "transicion"]

respuesta_orden: ["agricultura", "excedente", "sedentarismo", "especialización"]
tipo: ordenar
opciones_explicitas: ["agricultura", "excedente", "sedentarismo", "especialización"]

enunciado: "Ordena la siguiente secuencia lógica de la Revolución Neolítica:"

pasos:
  - "Primero, la domesticación de plantas y animales."
  - "Segundo, la acumulación de comida sobrante."
  - "Tercero, el establecimiento de asentamientos permanentes."
  - "Cuarto, la aparición de artesanos y guerreros."

explicacion: |
  La secuencia muestra cómo la producción de alimentos (agricultura) genera excedentes, lo que permite el sedentarismo y, finalmente, la división del trabajo (especialización).
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["causalidad", "sociedad"]

respuesta: "sedentarismo"
tipo: mc
opciones_explicitas: ["sedentarismo", "nomadismo", "migración", "recolección"]

enunciado: "Si la agricultura genera un excedente, la consecuencia social directa es el ___."

explicacion: |
  El excedente permite que la sociedad deje de moverse constantemente en busca de comida, fijando la población en un territorio.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "origen"]

respuesta: "Oriente Próximo"
tipo: mc
opciones_explicitas: ["Oriente Próximo", "Río Amarillo", "México"]

enunciado: "La domesticación de cereales como el trigo y la cebada ocurrió principalmente en la región del Creciente Fértil, también conocida como ___."

explicacion: |
  La región del Creciente Fértil fue el núcleo de la revolución neolítica, permitiendo el sedentarismo gracias al cultivo de cereales.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["america", "maiz"]

variables:
  datos: [["Mesoamérica", "maíz"], ["Andes", "papa"], ["China", "arroz"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["maíz", "papa", "arroz"]

enunciado: "En la región de {datos[idx][0]}, el cultivo fundamental que transformó la dieta humana fue el ___."

explicacion: |
  El maíz es el pilar de la agricultura en Mesoamérica, derivado del teosinte.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["nomadismo", "sedentarismo"]

respuesta: "agricultores"
tipo: completar
respuestas_validas:
  - "agricultores"

enunciado: "Antes de la revolución neolítica, los grupos humanos eran mayoritariamente nómadas y recolectores; tras la domesticación de plantas, se convirtieron en ___."

explicacion: |
  La capacidad de producir alimento permitió que los grupos humanos dejaran de desplazarse constantemente.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["geografia", "cultivos"]

respuesta: "papa"
tipo: mc
opciones_explicitas: ["arroz", "papa", "trigo"]

enunciado: "Si un arqueólogo encuentra restos de tubérculos domesticados en la zona de los Andes, lo más probable es que se trate de ___."

explicacion: |
  La domesticación de la papa es un proceso clave que ocurrió en la región andina.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta_orden: ["Recolección", "Domesticación", "Sedentarismo", "Excedente"]
tipo: ordenar
opciones_explicitas: ["Recolección", "Domesticación", "Sedentarismo", "Excedente"]

enunciado: "Ordena cronológicamente los procesos que definen la transición del Paleolítico al Neolítico:"

explicacion: |
  Primero se recolectaba, luego se domesticó la especie, lo que permitió el sedentarismo y finalmente la creación de excedentes que permitieron la especialización del trabajo.
```

## Sección: sedentarizacion-excedente (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["sedentarizacion", "agricultura"]

respuesta: "sedentarios"
tipo: completar
respuestas_validas:
  - "sedentarios"

enunciado: "Al depender de la agricultura y la domesticación de plantas, los grupos humanos dejaron de ser nómadas para convertirse en ___."

explicacion: |
  La capacidad de producir alimento de forma controlada permitió que los grupos humanos se establecieran en un lugar fijo, dando inicio a la sedentarización.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["causas", "agricultura"]

respuesta: "la agricultura"
tipo: mc
opciones_explicitas: ["la caza", "la agricultura", "la recolección", "la migración"]

enunciado: "La domesticación de plantas fue el motor principal de la sedentarización, un proceso conocido como ___."

explicacion: |
  El paso de una economía de subsistencia basada en la recolección a una basada en la producción agrícola permitió la permanencia en un territorio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["excedente", "especializacion"]

respuesta: "especialización"
tipo: completar
respuestas_validas:
  - "especialización"
  - "especializacion"

enunciado: "La generación de un excedente agrícola permitió que no todos los individuos tuvieran que dedicarse a la producción de alimentos, dando lugar a la ___ del trabajo."

explicacion: |
  El excedente alimentario permitió que surgieran otros roles sociales (artesanos, guerreros, sacerdotes), rompiendo la igualdad de la economía de subsistencia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["procesos", "ordenar"]

respuesta_orden: ["Domesticación de plantas", "Producción de excedentes", "Asentamientos permanentes", "Especialización social"]
tipo: ordenar
opciones_explicitas: ["Domesticación de plantas", "Producción de excedentes", "Asentamientos permanentes", "Especialización social"]

enunciado: "Ordena cronológicamente los procesos que permitieron el surgimiento de las primeras civilizaciones:"

explicacion: |
  Primero se domestican las especies, lo que genera comida de sobra (excedente), lo que permite quedarse en un lugar (sedentarismo) y finalmente permite que la sociedad se divida en clases o profesiones.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["territorio", "geografia_humana"]

respuesta: verdadero
tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "Los asentamientos permanentes fueron una consecuencia directa de la necesidad de cuidar los cultivos."

explicacion: |
  La agricultura requiere una inversión de tiempo y cuidado constante en el mismo terreno, lo que obliga a la población a permanecer en un radio cercano a sus campos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["agricultura", "conceptos"]

tipo: mc
opciones_explicitas: ["La producción total de alimentos de una comunidad", "La producción de alimento por encima de lo necesario para la subsistencia", "El proceso de transformar granos en harina", "El intercambio de semillas entre comunidades"]
respuesta: "La producción de alimento por encima de lo necesario para la subsistencia"

enunciado: "En el contexto de la Revolución Neolítica, ¿qué se define como excedente agrícola?"

explicacion: |
  El excedente es la cantidad de alimento que sobra después de haber cubierto las necesidades básicas de supervivencia de la población. Este sobrante es la base de la especialización del trabajo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["sociedad", "especializacion"]

variables:
  escenarios: [["comerciar con otros grupos", "alimentar a artesanos y sacerdotes"], ["almacenar para tiempos de sequía", "permitir la aparición de jerarquías sociales"]]
  escenario: uno_de(escenarios)

tipo: mc
opciones_explicitas: ["Reducir el tamaño de las poblaciones", "Fomentar la autosuficiencia absoluta", "Permitir la especialización del trabajo", "Eliminar la necesidad de agricultura"]

enunciado: "La existencia de un excedente agrícola permitió que parte de la población pudiera dedicarse a actividades distintas a la producción de alimentos, como {escenario[0]} o {escenario[1]}. ¿A qué proceso social dio lugar esto?"

respuesta: "Permitir la especialización del trabajo"

explicacion: |
  Al no tener que producir comida todos los días, surgieron especialistas (artesanos, guerreros, administradores) y se consolidaron las estructuras sociales complejas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["nomadismo", "sedentarismo"]

tipo: ordenar
opciones_explicitas: ["Domesticación de plantas y animales", "Producción de excedente agrícola", "Formación de asentamientos permanentes", "Aparición de la división social del trabajo"]

enunciado: "Ordena cronológicamente los procesos que permitieron la transición del nomadismo al sedentarismo complejo:"

explicacion: |
  Primero se domestican especies, lo que permite producir más de lo que se consume; esto permite quedarse en un lugar (sedentarismo) y finalmente permite que no todos trabajen en el campo.
respuesta_orden: ["Domesticación de plantas y animales", "Producción de excedente agrícola", "Formación de asentamientos permanentes", "Aparición de la división social del trabajo"]
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["economia_antigua"]

tipo: completar
respuestas_validas:
  - "comercio"
  - "intercambio"

enunciado: "El excedente agrícola no solo servía para el almacenamiento, sino que también facilitó el ________ con otros grupos humanos."

explicacion: |
  El sobrante de productos permite que una comunidad obtenga otros bienes que no produce, dando origen a las primeras redes de intercambio o comercio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["logica", "economia"]

variables:
  datos: [[100, 70], [250, 180], [50, 45]]
  idx: uno_de([0, 1, 2])
  produccion: datos[idx][0]
  consumo: datos[idx][1]
  excedente: produccion - consumo

tipo: completar
enunciado: "Si una comunidad agrícola produce {produccion} sacos de grano y el consumo necesario para su subsistencia es de {consumo} sacos, ¿cuántos sacos representan el excedente?"

respuesta: excedente

pasos:
  - "Identificar la producción total"
  - "Identificar el consumo de subsistencia"
  - "Restar el consumo de la producción para hallar el sobrante"

explicacion: |
  El excedente se calcula mediante la resta: Producción - Consumo. En este caso, el resultado es {excedente}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["sedentarizacion", "excedente", "division_del_trabajo"]

tipo: mc
opciones_explicitas: ["La agricultura de subsistencia", "La acumulación de excedente", "La caza y recolección", "El nomadismo"]
respuesta: "La acumulación de excedente"

enunciado: "El fenómeno que permitió, por primera vez, que ciertos grupos humanos se dedicaran a tareas distintas a la obtención de alimento fue..."

explicacion: |
  El excedente agrícola permitió que no toda la población tuviera que producir comida, dando lugar a la especialización del trabajo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["clases_sociales", "especializacion"]

variables:
  escenario: uno_de([["artesanos", "creadores de herramientas y objetos"], ["sacerdotes", "encargados de rituales y la cosmogonía"], ["gobernantes", "encargados de la administración y defensa"]])

tipo: completar
respuesta: escenario[0]

enunciado: "Gracias al excedente, surgieron roles sociales especializados. A quienes eran {escenario[1]} se los denominaba ___."

pasos:
  - "Identificar la función social descrita."
  - "Relacionar la función con el término correspondiente."

explicacion: |
  La división del trabajo permitió la aparición de especialistas en la producción, la religión y la política.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["division_del_trabajo", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Producción de excedente", "Sedentarismo", "División del trabajo", "Especialización social"]

enunciado: "Ordena cronológicamente los procesos que permitieron la aparición de las primeras civilizaciones complejas:"

explicacion: |
  Primero se establece el sedentarismo, lo que permite producir excedentes; esto a su vez permite la división del trabajo y finalmente la especialización de roles sociales.
respuesta_orden: ["Producción de excedente", "Sedentarismo", "División del trabajo", "Especialización social"]
```

```
metadata:
  materia: "historia_profucha"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["excedente", "base_social"]

tipo: mc
opciones_explicitas: ["La escasez de recursos", "La división del trabajo", "El excedente de producción", "La guerra constante"]
respuesta: "El excedente de producción"

enunciado: "La base fundamental que permitió la división del trabajo en las sociedades neolíticas fue..."

explicacion: |
  Sin un excedente de alimentos, cada individuo debe dedicar la mayor parte de su tiempo a asegurar la supervivencia alimentaria.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["especializacion", "clases_sociales"]

tipo: mc
opciones_explicitas: ["artesano", "sacerdote", "gobernante"]
respuesta: "gobernante"

enunciado: "Si una sociedad cuenta con excedentes y surge una clase dedicada exclusivamente a la gestión del orden y la defensa, estamos ante la figura del:"

explicacion: |
  La gestión del poder es una de las especializaciones más tempranas derivadas de la organización de sociedades con excedentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["sedentarizacion", "poblacion"]

respuesta: "crecimiento"
tipo: completar
respuestas_validas:
  - "crecimiento"

enunciado: "La transición de la vida nómada a la sedentarización favoreció el ___ poblacional debido a la estabilidad en el suministro de alimentos."

explicacion: |
  Al establecerse en un lugar fijo y cultivar alimentos, las comunidades pudieron asegurar un suministro constante, lo que permitió que la población creciera de forma sostenida.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["aldeas", "asentamientos"]

opciones_explicitas: ["Asentamientos temporales", "Aldeas permanentes", "Migraciones constantes"]
respuesta: "Aldeas permanentes"
tipo: mc

enunciado: "La capacidad de producir excedentes agrícolas permitió que los grupos humanos abandonaran el nomadismo y fundaran:"

explicacion: |
  El excedente de comida permitió que las personas no tuvieran que desplazarse constantemente en busca de alimento, dando origen a las primeras aldeas permanentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["nutrición", "recursos"]

variables:
  escenarios: [["estabilidad de recursos", "una mejor nutrición en cantidad"], ["excedente de granos", "la reducción de la mortalidad infantil"]]
  idx: uno_de([0, 1])
  factor: escenarios[idx][1]

enunciado: "Considerando el escenario de {escenarios[idx][0]}, el factor principal que impulsó el aumento de la población fue {factor}."

respuesta: factor
tipo: mc
opciones_explicitas: ["una mejor nutrición en cantidad", "la reducción de la mortalidad infantil"]

explicacion: |
  La estabilidad en el suministro de recursos y una nutrición más constante son pilares fundamentales para el crecimiento demográfico en la era neolítica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["proceso", "causa_efecto"]

opciones_explicitas: ["Agricultura", "Excedente de alimentos", "Aldeas permanentes"]
respuesta_orden: ["Agricultura", "Excedente de alimentos", "Aldeas permanentes"]
tipo: ordenar

enunciado: "Ordene cronológicamente los procesos que permitieron la transición hacia la vida sedentaria:"

explicacion: |
  Primero se desarrolla la agricultura, esto genera un excedente de comida, lo que finalmente permite que los asentamientos se vuelvan permanentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["excedente", "sociedad"]

respuesta: "verdadero"
tipo: completar
enunciado: "¿El excedente de alimentos permitió que no todos los miembros de la aldea tuvieran que dedicarse a la agricultura, dando paso a la especialización del trabajo?"

explicacion: |
  Exacto. Al haber comida de sobra (excedente), algunas personas pudieron dedicarse a otras tareas como la alfarería, la metalurgia o la administración.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["agricultura", "sedentarismo"]

variables:
  datos: [["el cultivo de cereales permitió almacenar comida", "la sedentarización"], ["la domesticación de animales generó excedentes", "el aumento de la población"], ["el control del riego aseguró cosechas", "la formación de los primeros asentamientos"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["la sedentarización", "el aumento de la población", "la formación de los primeros asentamientos"]

enunciado: "Si consideramos que {datos[idx][0]}, el efecto directo fue ___."

explicacion: |
  La capacidad de producir más alimento del que se consume inmediatamente (excedente) permitió que los grupos humanos dejaran de ser nómadas y se establecieran en lugares fijos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["excedente", "especializacion"]

variables:
  datos: [["excedente alimentario", "especialización del trabajo"], ["excedente alimentario", "aparición de jerarquías"], ["excedente alimentario", "desarrollo del comercio"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["especialización del trabajo", "aparición de jerarquías", "desarrollo del comercio"]

enunciado: "Cuando una sociedad logra un {datos[idx][0]}, surge como consecuencia la ___."

explicacion: |
  Al no tener que dedicar todo el tiempo a la búsqueda de alimento, algunos individuos pudieron dedicarse a otras tareas como la artesanía, la metalurgia o la administración.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["secuencia", "neolitico"]

respuesta_orden: ["Domesticación de plantas", "Producción de excedentes", "Sedentarización", "Estratificación social"]
tipo: ordenar
opciones_explicitas: ["Domesticación de plantas", "Producción de excedentes", "Sedentarización", "Estratificación social"]

enunciado: "Ordena cronológicamente los procesos que permitieron el surgimiento de las primeras civilizaciones:"

explicacion: |
  La secuencia lógica comienza con la transformación de la dieta (domesticación), que genera sobras de comida (excedente), lo que permite vivir en un sitio fijo (sedentarización) y finalmente la división de clases (estratificación).
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["sedentarismo", "poblacion"]

variables:
  datos: [["el sedentarismo", "aumento de la densidad poblacional"], ["la agricultura", "aumento de la densidad poblacional"], ["el excedente", "aumento de la densidad poblacional"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "aumento de la densidad poblacional"

enunciado: "La transición de la caza-recolección hacia {datos[idx][0]} provocó un ___."

explicacion: |
  La estabilidad de las fuentes de alimento permitió que las tasas de natalidad aumentaran y la mortalidad disminuyera, incrementando la densidad de habitantes en un mismo territorio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["economia_prehistorica", "causalidad"]

variables:
  datos: [["excedente", "comercio"], ["excedente", "burocracia"], ["excedente", "urbanismo"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["comercio", "burocracia", "urbanismo"]

enunciado: "El control y la gestión del {datos[idx][0]} fue el motor que impulsó el desarrollo de la ___."

explicacion: |
  La necesidad de contabilizar y distribuir el excedente obligó a las sociedades a crear sistemas de registro y administración, dando origen a las primeras estructuras burocráticas.
```

