# Historia Profunda — Seleccion natural evidencias nivel2 (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El registro fósil y la continuidad

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

### 2 — Evolución de los Equinos

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

### 3 — Transición de Peces a Tetrápodos

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

### 4 — El origen de la cetacea

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

### 5 — Interpretación del Registro Fósil

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

### 6 — Radiaciones Adaptativas

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

### 7 — El registro fósil y la escala temporal

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

### 8 — Homologías y ancestros comunes

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

### 9 — Secuencia de eventos evolutivos

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

### 10 — El papel de la extinción en la diversificación

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

### 11 — El efecto reset de las extinciones

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

### 12 — Consecuencias de la extinción del Pérmico

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

### 13 — Dinámica de nichos post-extinción

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

### 14 — Secuencia de un evento de 'reset'

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

### 15 — Impacto en la biodiversidad

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

### 16 — Homología y ancestros comunes

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

### 17 — El caso de los vertebrados

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
respuesta: escenario[0]

enunciado: "Si comparamos {escenario[0]}, {escenario[1]} y {escenario[2]}, observamos que presentan una organización similar de ___ óseos, lo que evidencia un ancestro común para los tetrápodos."

explicacion: |
  La disposición de los huesos (húmero, radio, cúbito, carpos) es un ejemplo clásico de homología que demuestra que estas especies derivan de un mismo plan corporal ancestral.
```

### 18 — Divergencia evolutiva

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

### 19 — Orden de la evidencia

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

### 20 — Análisis de estructuras

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural_evidencias_nivel2"
  nivel: "intermedio"
  tags: ["anatomia", "evolucion"]

variables:
  caso: uno_de([["un ala de murciélago y un ala de ave"], ["una pata de perro y una aleta de ballena"], ["un brazo humano y una pata de gato"]])

tipo: mc
opciones_explicitas: ["Son estructuras análogas", "Son estructuras homólogas", "Son estructuras vestigiales", "Son estructuras de origen independiente"]

enunciado: "Considerando el par de estructuras: {caso}. ¿Cuál es la conclusión correcta desde el punto de vista de la anatomía comparada?"

respuesta: "Son estructuras homólogas"

explicacion: |
  Al compartir el mismo patrón esquelético básico a pesar de sus funciones, se clasifican como homólogas.
```

### 21 — Evidencias de la evolución

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

### 22 — Comparación de estructuras

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

### 23 — Clasificación de evidencias

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

### 24 — Identificación de analogía

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

### 25 — Orden de procesos evolutivos

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
