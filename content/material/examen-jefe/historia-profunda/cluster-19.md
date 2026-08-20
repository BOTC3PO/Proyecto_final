# Examen jefe — Explorador de la Historia Profunda

> Logro #117. Dominaste los temas clave del examen jefe con maestría. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **123 preguntas totales** en 5/5 secciones.

---

## Sección: radiacion-mamiferos (26 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["extincion", "nichos", "evolucion"]

respuesta: "radiación adaptativa"
tipo: completar
respuestas_validas: ["radiación adaptativa"]

enunciado: "Tras la extinción de los dinosaurios hace 66 millones de años, los mamíferos experimentaron un proceso de diversificación rápida para ocupar nuevos nichos, proceso conocido como ________."

explicacion: |
  La extinción de los dinosaurios eliminó a los grandes depredadores y herbívoros, permitiendo que los mamíferos, que antes eran mayormente pequeños, ocuparan esos roles ecológicos mediante la radiación adaptativa.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["tiempo", "geologia", "paleontologia"]

variables:
  escenario: uno_de([
    ["66 millones de años", "Cenomaniense"],
    ["230 millones de años", "Triásico"],
    ["66 millones de años", "Cretácico-Paleógeno"]
  ])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["66 millones de años", "230 millones de años", "66 millones de años", "100 millones de años"]

enunciado: "La gran extinción que permitió la radiación de los mamíferos ocurrió hace aproximadamente {escenario[0]}."

explicacion: |
  El evento de extinción masiva del Cretácico-Paleógeno ocurrió hace unos 66 millones de años, marcando el inicio de la era de los mamíferos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["ecologia", "nichos"]

respuesta: "vacíos"
tipo: mc
opciones_explicitas: ["llenos", "vacíos", "estables", "competitivos"]

enunciado: "La disponibilidad de nichos ecológicos ________ fue el factor clave que permitió la rápida diversificación de los mamíferos tras la extinción masiva."

explicacion: |
  Al desaparecer los grandes reptiles, quedaron nichos (roles en el ecosistema) vacíos que fueron aprovechados por los mamíferos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["proceso", "evolucion"]

respuesta: ["Extinción masiva", "Ocupación de nichos", "Radiación adaptativa", "Diversificación moderna"]
tipo: ordenar
opciones_explicitas: ["Extinción masiva", "Ocupación de nichos", "Radiación adaptativa", "Diversificación moderna"]

enunciado: "Ordena cronológicamente los eventos que permitieron la dominancia de los mamíferos:"

explicacion: |
  Primero ocurre el evento de extinción, luego los supervivientes ocupan los espacios vacíos, lo que dispara la radiación adaptativa y finalmente resulta en la diversidad de formas que conocemos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["comparativa", "evolucion"]

respuesta: "pequeños"
tipo: mc
opciones_explicitas: ["gigantes", "pequeños", "acuáticos", "voladores"]

enunciado: "Antes de la radiación post-extinción, la mayoría de los mamíferos se caracterizaban por ser animales de tamaño ________."

explicacion: |
  Durante el Mesozoico, los mamíferos coexistieron con los dinosaurios y, para evitar la competencia y la depredación, la mayoría mantuvo tamaños reducidos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["evolucion", "dinosaurios"]

tipo: mc
opciones_explicitas: ["Eran grandes y dominantes", "Eran pequeños y nocturnos", "Eran reptiles gigantes", "Eran exclusivamente acuáticos"]

enunciado: "Durante la era de los dinosaurios, los ancestros de los mamíferos se caracterizaban por ser ___."

explicacion: |
  Hace aproximadamente 200 millones de años, los mamíferos coexistieron con los dinosaurios, pero ocupaban nichos ecológicos pequeños y evitaban la luz del día para no ser depredados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["extincion_kp", "adaptacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Extinción K-Pg", "Diversificación"], ["Evento de extinción", "Radiación"]]

tipo: completar
respuestas_validas: ["Diversificación", "Radiación"]

enunciado: "Tras la extinción masiva del Cretácico-Paleógeno (K-Pg), los mamíferos experimentaron una gran ___ en tamaño y forma."

pasos:
  - "Identificar el evento geológico mencionado."
  - "Relacionar la desaparición de los dinosaurios con la apertura de nichos vacíos."

explicacion: |
  La desaparición de los dinosaurios no solo eliminó competidores, sino que permitió que los mamíferos ocuparan nuevos roles ecológicos, llevando a una rápida evolución.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["cronologia", "geologia"]

tipo: ordenar
opciones_explicitas: ["Aparición de mamíferos pequeños", "Dominio de los dinosaurios", "Extinción K-Pg", "Diversificación de mamíferos modernos"]

enunciado: "Ordene cronológicamente los siguientes eventos históricos:"

explicacion: |
  Primero aparecieron los mamíferos (coexistiendo con dinosaurios), luego ocurrió la extinción masiva, lo que finalmente permitió la radiación de los mamíferos actuales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["ecologia", "evolucion"]

tipo: mc
opciones_explicitas: ["Diurno", "Nocturno", "Subterráneo", "Acuático"]

enunciado: "Para evitar la competencia y la depredación por parte de los dinosaurios, la mayoría de los mamíferos primitivos adoptaron un estilo de vida ___."

explicacion: |
  La vida nocturna fue una estrategia adaptativa clave que permitió a los mamíferos sobrevivir y prosperar en un mundo dominado por grandes reptiles.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["ecologia", "evolucion"]

variables:
  caso_idx: uno_de([0, 1])
  info: [["K-Pg", "liberó nichos"], ["Extinción", "permitió la radiación"]]

tipo: completar
tolerancia_abs: 0

enunciado: "El evento de extinción ___ fue el catalizador que permitió la expansión de los mamíferos."

explicacion: |
  La extinción K-Pg eliminó a los grandes depredadores y herbívoros dominantes, dejando el camino libre para que los mamíferos evolucionaran hacia formas más grandes y diversas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["evolucion", "adaptacion"]

tipo: mc
opciones_explicitas: ["Un cambio lento y gradual de una especie", "La diversificación rápida de un linaje al ocupar nuevos nichos", "La extinción masiva de un grupo de especies", "La mutación de un solo gen en un individuo"]

enunciado: "En biología evolutiva, ¿qué describe mejor el proceso de una radiación adaptativa?"

explicacion: |
  La radiación adaptativa ocurre cuando un linaje ancestral se diversifica rápidamente en una gran variedad de formas para aprovechar diferentes recursos o nichos ecológicos disponibles.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["ecologia", "nichos"]

variables:
  escenario: uno_de([
    ["aparición de nuevas islas volcánicas", "colonización de hábitats vacíos"],
    ["extinción masiva de competidores", "disponibilidad de nuevos nichos ecológicos"],
    ["cambio climático global", "apertura de nuevos espacios adaptativos"]
  ])

tipo: completar
respuestas_validas: ["disponibilidad de nuevos nichos ecológicos", "disponibilidad de nuevos nichos ecológicos", "disponibilidad de nuevos nichos ecológicos"]
respuesta: escenario[0][1

enunciado: "La radiación adaptativa suele ser desencadenada por la {escenario[0][0]}, lo que permite la ___."

explicacion: |
  Cuando aparecen nuevos entornos o se liberan nichos (por ejemplo, tras una extinción masiva), los linajes sobrevivientes pueden diversificarse rápidamente para ocupar esos espacios.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["paleontologia", "k-pg"]

tipo: mc
opciones_explicitas: ["Los dinosaurios no pudieron adaptarse", "La extinción de los dinosaurios permitió la radiación de los mamíferos", "Los mamíferos ya eran gigantes antes de la extinción", "La radiación ocurrió por la aparición de las plantas"]

enunciado: "Tras la extinción masiva del Cretácico-Paleógeno, ¿por qué los mamíferos experimentaron una radiación adaptativa tan marcada?"

explicacion: |
  La desaparición de los dinosaurios no avianos liberó una enorme cantidad de nichos ecológicos, permitiendo que los mamíferos, que antes eran mayormente pequeños, se diversificaran en una multitud de formas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["proceso", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Aparición de nuevos nichos o hábitats", "Colonización de los nuevos entornos", "Diversificación en múltiples especies con rasgos distintos"]

enunciado: "Ordena cronológicamente los pasos típicos de una radiación adaptativa:"

explicacion: |
  Primero debe existir una oportunidad ecológica (nicho), luego el linaje debe colonizar ese espacio y finalmente la selección natural debe favorecer la especialización en diferentes formas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["matematica", "especiacion"]

variables:
  datos: uno_de([
    [10, 5],
    [100, 20],
    [1000, 50]
  ])

tipo: completar
respuesta: datos[0][1
tolerancia_abs: 0

enunciado: "Si un linaje de mamíferos experimenta una radiación adaptativa donde se crean {datos[0][0]} especies nuevas en un periodo de tiempo determinado, y la tasa de especiación efectiva es de la mitad del total de especies nuevas, ¿cuántas especies nuevas se crearon en este escenario de diversificación rápida?"

pasos:
  - "Identificar el número total de especies nuevas en el escenario: {datos[0][0]}"
  - "Calcular la mitad de ese valor para obtener la respuesta."

explicacion: |
  En este ejercicio hipotético, si el total de nuevas especies es {datos[0][0]}, la respuesta es la mitad de ese valor según el enunciado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["cenozoico", "evolucion", "placentarios"]

respuesta: "Cenozoico"
tipo: completar
respuestas_validas: ["Cenozoico"]

enunciado: "La gran radiación de los mamíferos placentarios, que dio lugar a los órdenes actuales como primates y carnívoros, ocurrió principalmente durante la era ___."

explicacion: |
  Tras la extinción de los dinosaurios al final del Cretácico, el Cenozoico permitió que los mamíferos ocuparan nichos ecológicos vacantes, diversificándose rápidamente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["taxonomia", "ordenes"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["Primates", "Primates"], ["Carnivora", "Carnívoros"], ["Cetacea", "Cetáceos"]]

respuesta: datos[idx][0
tipo: mc
opciones_explicitas: ["Primates", "Carnivora", "Cetacea", "Ungulata"]

enunciado: "Si consideramos al orden de los {datos[idx][1]}, ¿cuál es su nombre científico correcto?"

explicacion: |
  El orden mencionado es {datos[idx][1]}, cuya nomenclatura taxonómica es {datos[idx][0]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["ungulados", "adaptacion"]

respuesta: "puntas"
tipo: completar
respuestas_validas: ["puntas", "puntas"]

enunciado: "Durante la expansión de las praderas en el Cenozoico, muchos ungulados desarrollaron ___ extremidades para una carrera más eficiente."

explicacion: |
  La transición de bosques a pastizales favoreció la selección de extremidades alargadas y dedos especializados para la locomoción rápida.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["filogenia", "ordenar"]

respuesta: ["Euteria", "Primates", "Carnivora", "Cetacea"]
tipo: ordenar
opciones_explicitas: ["Euteria", "Primates", "Carnivora", "Cetacea"]

enunciado: "Ordene de mayor a menor nivel taxonómico (de lo más general a lo más específico) la siguiente jerarquía de un humano: [Primates, Euteria, Carnivora, Cetacea] (Nota: El usuario debe identificar la jerarquía correcta de un orden específico dentro de los Euterios, pero para este ejercicio de ordenamiento use la secuencia de niveles de un ancestro común a los órdenes)."

# Nota: El prompt pide ordenar una secuencia real. Reajustando para evitar ambigüedad:
# El usuario debe ordenar la jerarquía de un grupo específico.
# Como "ordenar" requiere la lista completa, usaré la jerarquía de un Cetáceo.

# Re-haciendo pregunta 4 para cumplir estrictamente con el tipo "ordenar" (secuencia real):
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["taxonomia", "ordenar"]

respuesta: ["Mammalia", "Eutheria", "Cetartiodactyla", "Cetacea"]
tipo: ordenar
opciones_explicitas: ["Mammalia", "Eutheria", "Cetartiodactyla", "Cetacea"]

enunciado: "Ordene la jerarquía taxonómica de una ballena desde la Clase hasta el Orden:"

explicacion: |
  La secuencia correcta es Clase Mammalia, Subclase Eutheria, Orden Cetartiodactyla y finalmente el Orden Cetacea.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["relaciones", "evolucion"]

variables:
  idx: uno_de([0, 1])
  escenarios: [["Cetáceos", "acuáticos"], ["Primates", "arbóreos"]]

respuesta: escenarios[idx][1
tipo: mc
opciones_explicitas: ["acuáticos", "arbóreos", "terrestres", "voladores"]

enunciado: "La radiación de los {escenarios[idx][0]} durante el Cenozoico permitió la especialización en nichos {escenarios[idx][1]}."

explicacion: |
  Los {escenarios[idx][0]} son ejemplos clave de la diversificación de nichos durante el Cenozoico, adaptándose a entornos {escenarios[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["extincion", "nichos", "evolucion"]

variables:
  datos: [["La extinción masiva del Cretácico-Paleógeno eliminó a los grandes reptiles...", "liberó nichos ecológicos"], ["La desaparición de los dinosaurios no avianos...", "permitió la diversificación de los mamíferos"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["liberó nichos ecológicos", "permitió la diversificación de los mamíferos", "causó la extinción de insectos", "no tuvo impacto"]

enunciado: "Según el escenario planteado: {datos[idx][0]}"

explicacion: |
  La extinción de los dinosaurios eliminó a los principales depredadores y herbívoros dominantes, dejando nichos ecológicos vacíos que los mamíferos, anteriormente pequeños y nocturnos, pudieron ocupar rápidamente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["morfologia", "evolucion"]

variables:
  datos: [["Antes de la extinción, la mayoría de los mamíferos eran...", "pequeños"], ["Tras la radiación, los mamíferos pudieron alcanzar...", "grandes tamaños"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["pequeños", "grandes tamaños", "tamaño medio", "tamaño insectívoro"]

enunciado: "Considerando el proceso evolutivo: {datos[idx][0]}"

explicacion: |
  La ausencia de competencia con grandes reptiles permitió que los mamíferos experimentaran una rápida diversificación morfológica, incluyendo un aumento significativo en el tamaño corporal promedio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "basico"
  tags: ["causa_efecto"]

variables:
  datos: [["La extinción de los dinosaurios fue la ___ de la radiación de los mamíferos.", "causa"], ["La radiación de los mamíferos fue la ___ de la extinción de los dinosaurios.", "consecuencia"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["causa", "consecuencia"]

enunciado: "Analizando la relación temporal: {datos[idx][0]}"

explicacion: |
  La extinción de los dinosaurios actuó como el evento desencadenante (causa) que permitió la expansión de los mamíferos (consecuencia).
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "avanzado"
  tags: ["cronologia"]

variables:
  secuencia: ["Impacto del asteroide", "Extinción de dinosaurios", "Ocupación de nichos por mamíferos", "Diversificación de órdenes modernos"]

respuesta: secuencia
tipo: ordenar
opciones_explicitas: ["Impacto del asteroide", "Extinción de dinosaurios", "Ocupación de nichos por mamíferos", "Diversificación de órdenes modernos"]

enunciado: "Ordene cronológicamente los eventos que llevaron a la actual biodiversidad de mamíferos:"

explicacion: |
  El proceso comienza con el evento catastrófico, seguido de la extinción de los grupos dominantes, la colonización de los espacios vacíos y, finalmente, la especiación y diversificación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "radiacion_mamiferos"
  nivel: "intermedio"
  tags: ["competencia", "ecologia"]

variables:
  datos: [["Sin la presión de los dinosaurios, los mamíferos habrían sido...", "menos diversos"], ["La radiación ocurrió porque los mamíferos eran...", "menos diversos"]]
  idx: uno_de([0, 1])

respuesta: "menos diversos"
tipo: completar
respuestas_validas: ["menos diversos", "más grandes"]

enunciado: "{datos[idx][0]} ___"

explicacion: |
  La competencia por recursos y la depredación por parte de los dinosaurios habrían limitado la diversificación y el tamaño de los mamíferos durante el Mesozoico.
```

## Sección: recuperacion-democratica-memoria (23 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "dictadura", "argentina"]

respuesta: "democracia"
tipo: completar
respuestas_validas: ["democracia"]

enunciado: "Tras el fin de la última dictadura militar en Argentina, las elecciones de 1983 marcaron el retorno a la ________."

explicacion: |
  Las elecciones de octubre de 1983 pusieron fin a la última dictadura cívico-militar, devolviendo el poder a los representantes elegidos por el pueblo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["alfonsin", "presidencia", "1983"]

opciones_explicitas: ["Raúl Alfonsín", "Carlos Menem", "Alfonsín", "Raúl Alfonsín"]
respuesta: "Raúl Alfonsín"
tipo: mc

enunciado: "El primer presidente elegido mediante el sufragio universal tras el fin de la dictadura fue:"

explicacion: |
  Raúl Alfonsín, de la Unión Cívica Radical, asumió la presidencia el 10 de diciembre de 1983.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["justicia", "derechos_humanos", "juicio_a_las_juntas"]

opciones_explicitas: ["Juicio a las Juntas", "Juicio a los Militares", "Juicio a las Dictaduras", "Juicio a las Juntas"]
respuesta: "Juicio a las Juntas"
tipo: mc

enunciado: "El proceso judicial de 1985 para juzgar a las cúpulas militares se conoce como el:"

explicacion: |
  El Juicio a las Juntas fue un hito histórico en la justicia argentina y un precedente mundial en el juzgamiento de crímenes de lesa humanidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["transicion", "procesos", "orden"]

opciones_explicitas: ["Fin de la dictadura", "Elecciones de 1983", "Asunción de Alfonsín", "Fin de la dictadura", "Elecciones de 1983", "Asunción de Alfonsín"]
respuesta: ["Fin de la dictadura", "Elecciones de 1983", "Asunción de Alfonsín"]
tipo: ordenar

enunciado: "Ordena cronológicamente los siguientes hitos del proceso de democratización:"

explicacion: |
  Primero terminó la dictadura, luego se realizaron las elecciones y finalmente el presidente electo asumió su cargo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["derechos_humanos", "etica", "memoria"]

variables:
  escenario: uno_de([
    ["reparación", "reparación"],
    ["olvido", "olvido"],
    ["justicia", "justicia"]
  ])

respuesta: "justicia"
tipo: mc
opciones_explicitas: ["reparación", "olvido", "justicia"]

enunciado: "En el marco de los Derechos Humanos, la política de Estado para evitar la repetición de los crímenes de la dictadura se basa en el trípode: Memoria, Verdad y {escenario[0]}."

explicacion: |
  El lema "Memoria, Verdad y Justicia" es el pilar fundamental de los organismos de Derechos Humanos en Argentina para la reconstrucción del tejido social.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["juicio_a_las_juntas", "derechos_humanos", "argentina"]

respuesta: "Juicio a las Juntas"
tipo: completar
respuestas_validas: ["Juicio a las Juntas"]

enunciado: "El proceso judicial histórico llevado a cabo en 1985 para juzgar a los máximos responsables de la dictadura militar argentina se conoce como el ___."

explicacion: |
  El Juicio a las Juntas fue un hito mundial, siendo la primera vez que un tribunal civil juzgó a las cúpulas militares de su propio país por delitos de lesa humanidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "justicia"]

variables:
  tipo_tribunal: uno_de(["civil", "militar"])

respuesta: "civil"
tipo: mc
opciones_explicitas: ["civil", "militar"]

enunciado: "A diferencia de otros procesos de transición, el juicio de 1985 fue llevado a cabo por un tribunal de carácter {tipo_tribunal}."

explicacion: |
  La naturaleza civil del tribunal fue fundamental para consolidar la supremacía de la Constitución y el Estado de Derecho sobre el poder militar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["delitos", "terrorismo_de_estado"]

respuesta: ["terrorismo de Estado", "secuestro", "tortura", "homicidio"]
tipo: ordenar
opciones_explicitas: ["terrorismo de Estado", "secuestro", "tortura", "homicidio"]

enunciado: "Ordene de lo más general a lo más específico los conceptos que definen la naturaleza de los crímenes juzgados:"

explicacion: |
  El juicio condenó a los responsables por la planificación y ejecución de un sistema de terrorismo de Estado que se manifestó a través de secuestros, torturas y homicidios.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["conadep", "derechos_humanos"]

respuesta: "CONADEP"
tipo: completar
respuestas_validas: ["CONADEP"]

enunciado: "El informe fundamental que recopiló testimonios sobre la represión sistemática durante la última dictadura militar fue elaborado por la ___."

explicacion: |
  La Comisión Nacional sobre la Desaparición de Personas (CONADEP) elaboró el informe 'Nunca Más', que fue clave para el posterior Juicio a las Juntas.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["sitios_de_memoria", "museos"]

variables:
  idx: uno_de([0, 1])
  datos: [["ESMA", "Ex Centro de Detención de la ESMA"], ["El Olimpo", "Ex Centro de Detención El Olimpo"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Ex Centro de Detención de la ESMA", "Ex Centro de Detención El Olimpo", "Ex Base Naval Puerto Belgrano", "Ex Escuela de Mecánica de la Armada"]

enunciado: "El sitio de memoria conocido como {datos[idx][0]} es un ejemplo de un espacio que funcionó como centro clandestino de detención y hoy es un museo dedicado a la memoria."

explicacion: |
  Los Sitios de Memoria son lugares que fueron utilizados para la represión y que han sido recuperados para la memoria colectiva, transformándose en museos o centros culturales.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["verdad", "justicia", "derechos_humanos"]

respuesta: "Verdad"
tipo: mc
opciones_explicitas: ["Verdad", "Justicia", "Memoria", "Reparación"]

enunciado: "En el marco de las políticas de Derechos Humanos, el derecho a conocer la realidad de lo sucedido con las víctimas se denomina derecho a la ___."

explicacion: |
  El derecho a la Verdad, a la Justicia y a la Memoria son pilares fundamentales de la política de Derechos Humanos en Argentina tras la recuperación democrática.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["cronologia", "democracia"]

respuesta: ["Fin de la dictadura", "Informe Nunca Más", "Juicio a las Juntas"]
tipo: ordenar
opciones_explicitas: ["Fin de la dictadura", "Informe Nunca Más", "Juicio a las Juntas", "Ley de Amnistía"]

enunciado: "Ordene cronológicamente los hitos fundamentales del proceso de justicia y memoria tras el retorno a la democracia en Argentina:"

explicacion: |
  Primero se produjo la salida de la dictadura, luego la CONADEP presentó su informe y posteriormente se llevó a cabo el histórico Juicio a las Juntas en 1985.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["justicia", "impunidad"]

respuesta: "imprescindible"
tipo: completar
respuestas_validas: ["imprescindible", "fundamental", "clave"]

enunciado: "Para el proceso de reconstrucción del Estado de Derecho, la aplicación de la ___ para juzgar los crímenes de lesa humanidad fue considerada ___."

explicacion: |
  La justicia es un componente esencial para romper el ciclo de impunidad y garantizar que los crímenes contra la humanidad no queden sin castigo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "argentina", "1983"]

respuesta: "1983"
tipo: completar
respuestas_validas: ["1983"]

enunciado: "El año en que se produjo el retorno a la democracia y se inició el período democrático ininterrumpido más largo de la historia argentina fue en ___."

explicacion: |
  En 1983, tras la dictadura militar, se llevaron a cabo elecciones que marcaron el inicio de la era democrática más extensa del país.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["presidencia", "democracia", "alfonsin"]

variables:
  idx: uno_de([0, 1])
  datos: [["Raúl Alfonsín", "Presidente de la Nación"], ["Raúl Alfonsín", "Dictador militar"]]

respuesta: datos[idx][0
tipo: mc
opciones_explicitas: ["Raúl Alfonsín", "Dictador militar", "Juan Carlos Onganía", "Jorge Rafael Videla"]

enunciado: "El primer presidente elegido tras el fin de la dictadura militar fue {datos[idx][0]}."

explicacion: |
  {datos[idx][0]} asumió la presidencia en 1983, marcando el inicio del proceso de recuperación democrática.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["procesos", "historia"]

respuesta: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas"]
tipo: ordenar

opciones_explicitas: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas"]

enunciado: "Ordene cronológicamente los siguientes hitos de la historia argentina reciente:"

pasos:
  - "Identifique el período de gobierno de facto."
  - "Identifique el proceso electoral de retorno."
  - "Identifique el proceso judicial emblemático de la post-dictadura."

explicacion: |
  Primero fue la dictadura, luego las elecciones de 1983 y finalmente el histórico Juicio a las Juntas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "continuidad"]

respuesta: "largo"
tipo: mc
opciones_explicitas: ["largo", "corto", "inestable", "interrumpido"]

enunciado: "El período democrático iniciado en 1983 es el más ___ de la historia argentina hasta la actualidad."

explicacion: |
  A diferencia de los quiebres institucionales previos, este período se caracteriza por su continuidad y duración.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["derechos_humanos", "memoria"]

variables:
  idx: uno_de([0, 1, 2])
  escenarios: [
    ["El proceso de Memoria, Verdad y Justicia busca...", "reparar el tejido social y la verdad histórica"],
    ["El proceso de Memoria, Verdad y Justicia busca...", "la reconstrucción de la identidad democrática"],
    ["El proceso de Memoria, Verdad y Justicia busca...", "la aplicación de la justicia sobre los crímenes de lesa humanidad"]
  ]

respuesta: escenarios[idx][1
tipo: mc
opciones_explicitas: [
  "reparar el tejido social y la verdad histórica",
  "la reconstrucción de la identidad democrática",
  "la aplicación de la justicia sobre los crímenes de lesa humanidad",
  "la restauración del orden militar"
]

enunciado: "Dentro del marco de la recuperación democrática, el proceso de Memoria, Verdad y Justicia busca {escenarios[idx][1]}."

explicacion: |
  La reconstrucción de la identidad democrática es un pilar fundamental para consolidar el Estado de Derecho tras la dictadura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["argentina", "democracia", "historia"]

variables:
  escenario: uno_de([
    ["¿Qué presidente asumió en 1983 tras el fin de la dictadura?", "Raúl Alfonsín"],
    ["¿Qué presidente asumió en 1983 tras el fin de la dictadura?", "Raúl Alfonsín"],
    ["¿Qué presidente asumió en 1983 tras el fin de la dictadura?", "Raúl Alfonsín"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["Raúl Alfonsín", "Carlos Menem", "Alfonsín", "Raúl Alfonsín"]

enunciado: "En el contexto de la recuperación democrática argentina, {escenario[idx][0]}"

explicacion: |
  Raúl Alfonsín asumió la presidencia en 1983, marcando el inicio del periodo democrático tras la última dictadura militar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["justicia", "derechos_humanos"]

variables:
  evento: uno_de([
    ["El proceso de juzgar a las cúpulas militares se conoce como el...", "Juicio a las Juntas"],
    ["El proceso de juzgar a las cúpulas militares se conoce como el...", "Juicio a las Juntas"],
    ["El proceso de juzgar a las cúpulas militares se conoce como el...", "Juicio a las Juntas"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: evento[idx][1
tipo: completar
respuestas_validas: ["Juicio a las Juntas"]

enunciado: "El proceso histórico fundamental para la memoria y la justicia en 1985 fue el ___."

explicacion: |
  El Juicio a las Juntas fue un hito mundial donde la justicia civil juzgó a los comandantes militares por crímenes de lesa humanidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["conceptos", "derechos_humanos"]

respuesta: "Derechos Humanos"
tipo: mc
opciones_explicitas: ["Derechos Humanos", "Derechos Civiles", "Derechos Sociales", "Derechos Políticos"]

enunciado: "La recuperación democrática puso en el centro del debate nacional la defensa de los ___."

explicacion: |
  La democracia argentina se construyó sobre el pilar fundamental de la vigencia y defensa de los Derechos Humanos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["cronologia", "transicion"]

respuesta: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas", "Ley de Obediencia Debida"]
tipo: ordenar
opciones_explicitas: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas", "Ley de Obediencia Debida"]

enunciado: "Ordene cronológicamente los siguientes hitos del proceso de transición y memoria:"

explicacion: |
  La secuencia parte del fin del régimen militar (1976-1983), pasando por el triunfo electoral de Alfonsín, el juicio histórico de 1985 y las posteriores leyes de impunidad que marcaron la etapa posterior.
```

```
metadata:
  materia: "historia_profunda"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["movimientos_sociales", "memoria"]

variables:
  sujeto: uno_de([
    ["¿Qué colectivo social luchó por la aparición con vida de los desaparecidos?", "Madres de Plaza de Mayo"],
    ["¿Qué colectivo social luchó por la aparición con vida de los desaparecidos?", "Madres de Plaza de Mayo"],
    ["¿Qué colectivo social luchó por la aparición con vida de los desaparecidos?", "Madres de Plaza de Mayo"]
  ])
  idx: uno_de([0, 1, 2])

respuesta: sujeto[idx][1
tipo: completar
opciones_explicitas: [verdadero, falso]

enunciado: "Las {sujeto[idx][0]} fueron actores fundamentales en la exigencia de justicia durante la transición democrática."

explicacion: |
  Las Madres de Plaza de Mayo fueron un símbolo global de la lucha por la verdad y la justicia durante y después de la dictadura.
```

## Sección: relieve-sismos-volcanes (25 preguntas)

```
metadata:
  materia: "geografia"
  tema: "tectonica_de_placas"
  nivel: "basico"
  tags: ["tectonica", "relieve"]

respuesta: "bordes"
tipo: completar
respuestas_validas: ["bordes"]

enunciado: "El relieve terrestre, como la formación de montañas y fosas, es una consecuencia directa de la tectónica de placas y se produce principalmente en los ___ de las placas tectónicas."

explicacion: |
  El movimiento de las placas tectónicas genera tensiones y fricciones que se manifiestan principalmente en sus límites o bordes, dando lugar a la formación de nuevas estructuras geológicas.
```

```
metadata:
  materia: "geografia"
  tema: "tectonica_de_placas"
  nivel: "intermedio"
  tags: ["placas", "limites"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [[
    ["divergente", "se separan las placas", "creación de dorsales oceánicas"],
    ["convergente", "chocan las placas", "formación de cordilleras o fosas"],
    ["transformante", "se deslizan lateralmente", "fallas como la de San Andrés"]
  ]]

respuesta: escenarios[escenario_idx][0
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "Si observamos un movimiento donde las placas tectónicas ___ , estamos ante un límite de tipo {escenarios[escenario_idx][1]}."

explicacion: |
  En el escenario seleccionado ({escenarios[escenario_idx][0]}), el movimiento principal es {escenarios[escenario_idx][2]}.
```

```
metadata:
  materia: "geografia"
  tema: "tectonica_de_placas"
  nivel: "basico"
  tags: ["cordilleras", "convergencia"]

respuesta: "convergente"
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "¿Qué tipo de interacción entre placas es la responsable de la formación de grandes cordilleras como los Andes debido al choque de placas?"

explicacion: |
  Las cordilleras se forman en los límites convergentes, donde la compresión de las placas eleva la corteza terrestre.
```

```
metadata:
  materia: "geografia"
  tema: "tectonica_de_placas"
  nivel: "avanzado"
  tags: ["procesos", "relieve"]

respuesta: ["choque de placas", "subducción de la placa", "formación de fosa oceánica", "erupción volcánica"]
tipo: ordenar
opciones_explicitas: ["choque de placas", "subducción de la placa", "formación de fosa oceánica", "erupción volcánica"]

enunciado: "Ordena los eventos que ocurren típicamente en un límite convergente de subducción:"

explicacion: |
  El proceso comienza con el choque, seguido por la placa más densa se hunde (subducción), creando una fosa, y finalmente el magma asciende provocando volcanismo.
```

```
metadata:
  materia: "geografia"
  tema: "tectonica_de_placas"
  nivel: "intermedio"
  tags: ["fosas", "oceanos"]

variables:
  dato_fosa: [
    ["Fosa de las Marianas", "subducción", "más profunda"],
    ["Fosa de Atacama", "subducción", "muy profunda"]
  ]
  idx: uno_de([0, 1])

respuesta: dato_fosa[idx][1
tipo: mc
opciones_explicitas: ["subducción", "divergencia", "transformación"]

enunciado: "La {dato_fosa[idx][0]} es una estructura extremadamente {dato_fosa[idx][2]} que se origina por un proceso de {dato_fosa[idx][1]}."

explicacion: |
  Las fosas oceánicas son zonas de subducción donde una placa se introduce bajo otra, creando depresiones profundas en el lecho marino.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["placas_tectonicas", "sismos"]

tipo: mc
opciones_explicitas: ["Fricción entre placas", "Erosión eólica", "Movimiento de las mareas", "Ciclos solares"]

enunciado: "Los sismos se producen principalmente debido a la acumulación y posterior liberación repentina de energía causada por la ________ entre las placas tectónicas."

explicacion: |
  Los sismos ocurren cuando las fuerzas de fricción entre las placas tectónicas impiden su movimiento, acumulando energía elástica que se libera súbitamente en forma de ondas sísmicas.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["placas_tectonicas", "bordes_de_placas"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["el Cinturón de Fuego del Pacífico", "bordes de placas tectónicas"],
    ["la zona central de una placa continental", "zonas de estabilidad tectónica"]
  ]

tipo: mc
opciones_explicitas: ["Bordes de placas tectónicas", "Zonas de estabilidad tectónica", "Cimas de las montañas", "Fondos oceánicos estables"]

enunciado: "Los terremotos ocurren mayormente en los {escenarios[escenario_idx][1]}."

explicacion: |
  La mayor actividad sísmica se concentra en los límites o bordes de las placas tectónicas, donde la interacción entre ellas es constante.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "intermedio"
  tags: ["energia", "friccion"]

tipo: completar
respuestas_validas: ["energía", "fuerza"]

enunciado: "Durante un sismo, la energía acumulada por la fricción se libera de forma repentina en forma de ________ sísmica."

explicacion: |
  La liberación de la energía elástica acumulada es lo que genera las ondas que viajan a través de la litosfera.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "intermedio"
  tags: ["placas_tectonicas", "friccion"]

tipo: ordenar
opciones_explicitas: ["Movimiento de las placas", "Acumulación de tensión por fricción", "Liberación repentina de energía", "Ondas sísmicas"]

enunciado: "Ordena el proceso físico que da lugar a un terremoto, desde el movimiento inicial hasta la propagación de las ondas:"

explicacion: |
  El proceso comienza con el movimiento de las placas, seguido de la fricción que acumula tensión, la ruptura que libera energía y finalmente la propagación de ondas.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "avanzado"
  tags: ["placas_tectonicas", "friccion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["fricción", "movimiento constante"],
    ["presión", "estabilidad absoluta"]
  ]

tipo: completar
tolerancia_abs: 0

enunciado: "Si las placas tectónicas se encuentran en un estado de {casos[caso_idx][0]}, la acumulación de tensión es mayor que en un estado de {casos[caso_idx][1]}."

explicacion: |
  A mayor fricción o resistencia al movimiento entre placas, mayor es la acumulación de energía elástica que, al liberarse, provoca sismos de mayor magnitud.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["volcanes", "tectonica"]

tipo: mc
opciones_explicitas: ["Zonas de subducción", "Zonas de divergencia", "Zonas de transformación", "Zonas de estabilidad"]
respuesta: "Zonas de subducción"

enunciado: "Los volcanes se forman típicamente en las zonas de ___ donde una placa tectónica se desplaza debajo de otra."

explicacion: |
  En las zonas de subducción (bordes convergentes), la placa que se hunde se funde y genera magma que asciende a la superficie.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["dorsales", "magma"]

tipo: mc
opciones_explicitas: ["Dorsales oceánicas", "Fallas transformantes", "Cinturones orogénicos", "Escudos continentales"]
respuesta: "Dorsales oceánicas"

enunciado: "El magma puede llegar a la superficie en los bordes divergentes, como ocurre en las ___."

explicacion: |
  Las dorsales oceánicas son bordes divergentes donde las placas se separan, permitiendo la salida de magma y la creación de nueva corteza.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "intermedio"
  tags: ["bordes", "convergencia"]

variables:
  escenario: uno_de([["convergente", "subducción"], ["divergente", "separación"]])
  tipo_borde: escenario[0]
  proceso: escenario[1]

tipo: completar
respuestas_validas: ["subducción", "separación"]
respuesta: proceso

enunciado: "Si nos encontramos en un borde de tipo {tipo_borde}, el proceso geológico predominante es la ___."

explicacion: |
  En un borde convergente, el proceso es la subducción; en un borde divergente, es la separación de placas.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["magma", "superficie"]

tipo: mc
opciones_explicitas: ["Llega a la superficie", "Se mantiene en el manto", "Se solidifica inmediatamente", "Se transforma en roca sólida"]
respuesta: "Llega a la superficie"

enunciado: "Tanto en zonas de subducción como en dorsales, el magma tiene la capacidad de ___."

explicacion: |
  La actividad volcánica ocurre precisamente porque el magma logra ascender desde el manto hasta la superficie terrestre.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "avanzado"
  tags: ["procesos", "tectonica"]

tipo: ordenar
opciones_explicitas: ["Movimiento de placas", "Fusión de material", "Ascenso de magma", "Erupción volcánica"]
respuesta: ["Movimiento de placas", "Fusión de material", "Ascenso de magma", "Erupción volcánica"]

enunciado: "Ordena los pasos que ocurren típicamente en una zona de subducción hasta la erupción:"

explicacion: |
  Primero ocurre el movimiento de las placas, lo que provoca la fusión del material en el manto, luego el magma asciende y finalmente ocurre la erupción.
```

```
metadata:
  materia: "geografia"
  tema: "cinturon_de_fuego"
  nivel: "basico"
  tags: ["tectonica_de_placas", "geologia"]

tipo: mc
opciones_explicitas: ["El océano Índico", "El océano Atlántico", "El océano Pacífico", "El océano Ártico"]

enunciado: "El Cinturón de Fuego es una zona de intensa actividad sísmica y volcánica que rodea el océano ________."

explicacion: |
  El Cinturón de Fuego del Pacífico es una zona de aproximadamente 40,000 km de longitud donde ocurre la mayor parte de la actividad sísmica y volcánica del mundo debido a la interacción de los bordes de las placas tectónicas.
```

```
metadata:
  materia: "geografia"
  tema: "cinturon_de_fuego"
  nivel: "intermedio"
  tags: ["tectonica_de_placas", "sismos"]

variables:
  escenario: uno_de([
    ["subducción", "una placa se desliza debajo de otra", "se produce un arco volcánico y fosas marinas"],
    ["divergencia", "las placas se separan", "se crea nueva corteza oceánica en dorsales"],
    ["transformación", "las placas se deslizan lateralmente", "se generan grandes fallas como la de San Andrés"]
  ])

tipo: completar
respuestas_validas: ["subducción", "divergencia", "transformación"]
respuesta: escenario[0][0

enunciado: "En el Cinturón de Fuego, el proceso de {escenario[0][1]} es el principal responsable de la formación de fosas oceánicas profundas y la actividad volcánica intensa."

explicacion: |
  La subducción ocurre cuando una placa tectónica (generalmente más densa, la oceánica) se hunde bajo otra placa, fundiéndose en el manto y generando magma que alimenta los volcanes.
```

```
metadata:
  materia: "geografia"
  tema: "cinturon_de_fuego"
  nivel: "basico"
  tags: ["volcanes", "geografia_fisica"]

tipo: mc
opciones_explicitas: ["Baja", "Moderada", "Muy alta"]

enunciado: "Debido a la constante interacción de los bordes de placas, la densidad de volcanes activos en el Cinturón de Fuego es ________."

explicacion: |
  La mayoría de los volcanes activos del mundo se encuentran en esta zona debido a la actividad tectónica constante.
```

```
metadata:
  materia: "geografia"
  tema: "cinturon_de_fuego"
  nivel: "avanzado"
  tags: ["procesos_geologicos", "tectonica"]

tipo: ordenar
opciones_explicitas: ["Acumulación de tensión elástica", "Ruptura de la falla", "Liberación de energía (sismo)", "Movimiento de la placa"]
respuesta: ["Acumulación de tensión elástica", "Ruptura de la falla", "Liberación de energía (sismo)", "Movimiento de la placa"]

enunciado: "Ordena cronológicamente los eventos que ocurren durante un terremoto causado por la interacción de placas en el Cinturón de Fuego:"

explicacion: |
  La tensión se acumula por el movimiento de las placas, llega un punto crítico donde la roca se rompe (ruptura), liberando energía en forma de ondas sísmicas.
```

```
metadata:
  materia: "geografia"
  tema: "cinturon_de_fuego"
  nivel: "intermedio"
  tags: ["sismos", "calculo"]

variables:
  datos: uno_de([
    [3000, 15.0],
    [5000, 25.0],
    [8000, 40.0]
  ])

tipo: completar
respuesta: datos[0][1
tolerancia_abs: 0.1

enunciado: "Si una onda sísmica detectada en el Cinturón de Fuego viaja a una velocidad constante de 200 km/min, ¿a cuántos minutos llegará al observador si el epicentro está a {datos[0][0]} km de distancia?"

pasos:
  - "Identificar la distancia: {datos[0][0]} km"
  - "Identificar la velocidad: 200 km/min"
  - "Dividir distancia / velocidad: {datos[0][0]} / 200"

explicacion: |
  El tiempo se calcula dividiendo la distancia recorrida por la velocidad: 3000 km / 200 km/min = 15 minutos.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["tectonica", "placas"]

variables:
  datos: [["dorsal oceánica", "divergente"], ["valle de rift", "divergente"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "El fenómeno de la formación de una {datos[idx][0]} es característico de un límite de placas de tipo ________."

explicacion: |
  En los límites divergentes, las placas se separan, permitiendo la salida de magma que crea nuevo relieve, como las dorsales o los rifts.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "intermedio"
  tags: ["tectonica", "subduccion"]

variables:
  datos: [["trinchera oceánica", "convergente"], ["arco volcánico", "convergente"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "La presencia de una {datos[idx][0]} indica que las placas se encuentran en un límite de tipo ________."

explicacion: |
  Los límites convergentes ocurren cuando las placas colisionan, pudiendo subducir una debajo de otra (creando trincheras) o elevar cordilleras.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["tectonica", "fallas"]

variables:
  datos: [["falla de San Andrés", "transformante"], ["desplazamiento lateral", "transformante"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "El movimiento de {datos[idx][0]} es un ejemplo clásico de un límite de placas ________."

explicacion: |
  En los límites transformantes, las placas se deslizan lateralmente una respecto a la otra sin crear ni destruir litosfera.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "avanzado"
  tags: ["tectonica", "orogenesis"]

variables:
  datos: [["cordillera del Himalaya", "convergente"], ["doblamiento de corteza", "convergente"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "La formación de {datos[idx][0]} es el resultado de un proceso de colisión en un límite ________."

explicacion: |
  La colisión entre placas continentales (convergencia) produce el acortamiento y elevación de la corteza, formando grandes cordilleras.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_sismos_volcanes"
  nivel: "basico"
  tags: ["tectonica", "oceanos"]

variables:
  datos: [["crecimiento de la dorsal", "divergente"], ["separación de placas", "divergente"]]
  idx: uno_de([0, 1])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
opciones_explicitas: ["divergente", "convergente", "transformante"]

enunciado: "El proceso de {datos[idx][0]} se asocia directamente con un borde de tipo ________."

explicacion: |
  La expansión del fondo marino ocurre en los límites divergentes donde el magma asciende para rellenar el espacio entre placas.
```

## Sección: renacimiento-y-reforma (24 preguntas)

```
### 2 — Obra clave de la Reforma
```

```
### 3 — Concepto humanista
```

```
### 4 — Técnica pictórica
```

```
### 5 — Concilio de Trento
```

```
### 6 — Imprenta de Gutenberg
```

```
### 7 — Arte del Norte
```

```
### 8 — Maquiavelo y el poder
```

```
### 9 — Calvinismo y economía
```

```
### 10 — Escultura de Miguel Ángel
```

```
### 11 — Paz de Augsburgo
```

```
### 12 — Literatura humanista
```

```
### 13 — Reforma en Suiza
```

```
### 14 — Arquitectura renacentista
```

```
### 15 — Guerra de los Treinta Años
```

```
### 16 — Retrato de El Cortesano
```

```
### 17 — Iconoclastia
```

```
### 18 — Erasmo de Rotterdam
```

```
### 19 — Perspectiva lineal
```

```
### 20 — Reforma Anglicana
```

```
### 21 — Humanismo septentrional
```

```
### 22 — Pintura veneciana
```

```
### 23 — Edicto de Nantes
```

```
### 24 — Arte manierista
```

```
### 25 — Contra-Reforma y Jesuitas
```

## Sección: revolucion-de-mayo (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["mayo_1810", "virrey", "independencia"]

respuesta: "Baltasar Hidalgo de Cisneros"
tipo: completar
respuestas_validas: ["Baltasar Hidalgo de Cisneros"]

enunciado: "El virrey que fue depuesto tras la Revolución de Mayo fue ___."

explicacion: |
  La Junta de Gobierno de 1810 decidió que el poder español ya no era legítimo ante la captura del Rey Fernando VII por Napoleón, lo que llevó a la destitución de Cisneros.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["primera_junta", "gobierno"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [
    ["Cornelio Saavedra", "Presidente"],
    ["Mariano Moreno", "Secretario"],
    ["Juan José Paso", "Secretario"]
  ]

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Presidente", "Secretario", "Vocal"]

enunciado: "En la Primera Junta de Gobierno, el rol de {datos[idx][0]} era el de ___."

explicacion: |
  La Primera Junta estaba integrada por un presidente y varios secretarios y vocales. {datos[idx][0]} ocupaba el cargo de {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["causas", "contexto"]

respuesta: "Napoleón Bonaparte"
tipo: completar
respuestas_validas: ["Napoleón Bonaparte"]

enunciado: "Un factor externo crucial que aceleró la crisis de legitimidad en el Virreinato fue la invasión de ___ a España."

explicacion: |
  La invasión napoleónica a la península ibérica y la captura del Rey Fernando VII crearon un vacío de poder que las colonias utilizaron para reclamar autonomía.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["cronologia", "eventos"]

respuesta: ["Cabildo Abierto", "Junta de Gobierno", "Primera Junta"]
tipo: ordenar
opciones_explicitas: ["Cabildo Abierto", "Junta de Gobierno", "Primera Junta"]

enunciado: "Ordene cronológicamente los hitos de la semana de mayo de 1810:"

explicacion: |
  Primero se debatió en el Cabildo Abierto, luego se conformó la Junta de Gobierno y finalmente se consolidó la Primera Junta con sus miembros.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["caracter", "gobierno"]

respuesta: "fiel"
tipo: mc
opciones_explicitas: ["fiel", "rebelde", "monárquico"]

enunciado: "Inicialmente, la Primera Junta proclamó su autoridad como ___ a la soberanía de Fernando VII (la llamada 'máscara de Fernando')."

explicacion: |
  Se utilizó la estrategia de la "máscara de Fernando VII", donde se gobernaba en nombre del rey cautivo para evitar represalias directas de España mientras se ganaba autonomía.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["contexto", "napoleon", "monarquia"]

respuesta: "Napoleón Bonaparte"
tipo: completar
respuestas_validas: ["Napoleón Bonaparte", "Napoleón"]

enunciado: "La invasión de ___ a España en 1808 provocó una crisis de legitimidad que debilitó el control sobre las colonias americanas."

explicacion: |
  La invasión napoleónica a España y la captura del rey Fernando VII crearon un vacío de poder que las élites criollas utilizaron para cuestionar la autoridad colonial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["causas", "autoridad", "colonia"]

opciones_explicitas: ["Se fortaleció el control absoluto de la metrópoli", "Se produjo un debilitamiento de la autoridad real sobre las colonias", "Se unificaron los ejércitos de España y América"]
respuesta: "Se produjo un debilitamiento de la autoridad real sobre las colonias"
tipo: mc

enunciado: "¿Cuál fue la consecuencia directa de la crisis de la monarquía española en 1808 respecto a sus territorios en América?"

explicacion: |
  Al no haber un rey legítimo en el trono, las autoridades coloniales perdieron su fuente de legitimidad, lo que permitió que los cabildos empezaran a reclamar autonomía.
```

```
metadata:
  materia: "historia_profucha"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["cronologia", "causas"]

opciones_explicitas: ["Invasión napoleónica", "Crisis de la monarquía española", "Revolución de Mayo"]
respuesta: ["Invasión napoleónica", "Crisis de la monarquía española", "Revolución de Mayo"]
tipo: ordenar

enunciado: "Ordena cronológicamente los sucesos que desencadenaron el proceso revolucionario:"

explicacion: |
  Primero ocurrió la invasión de Napoleón, esto generó la crisis de legitimidad en España y finalmente ese vacío de poder facilitó la Revolución de Mayo en el Virreinato.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["soberania", "derecho"]

variables:
  escenario: uno_de([0, 1])

respuesta: tabla[escenario][1
tabla:
  - ["La autoridad reside en el Rey", "La soberanía recae en el pueblo"]
tipo: mc

opciones_explicitas: ["La autoridad reside en el Rey", "La soberanía recae en el pueblo"]

enunciado: "Ante la ausencia del rey, los criollos aplicaron la idea de que la soberanía debe volver al ___."

explicacion: |
  El concepto de 'retroversión de la soberanía' sostenía que, ante la falta del monarca, el poder volvía al pueblo, lo que justificó la formación de juntas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["causas", "impacto"]

respuesta: 1
tipo: completar
tolerancia_abs: 0

enunciado: "Si la invasión napoleónica debilitó la autoridad de España, la probabilidad de una revolución en América fue (0: nula / 1: alta). Indica el número de la opción correcta."

explicacion: |
  La debilidad de la metrópoli fue el catalizador fundamental que permitió que las aspiraciones de autonomía se transformaran en una revolución política.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["primera_junta", "saavedra", "mayo"]

respuesta: "Cornelio Saavedra"
tipo: completar
respuestas_validas: ["Cornelio Saavedra"]

enunciado: "La Primera Junta, conformada tras la Revolución de Mayo, fue presidida por ___."

explicacion: |
  La Primera Junta fue el primer gobierno patrio, presidido por Cornelio Saavedra, quien representaba el ala más conservadora del cabildo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["moreno", "secretario"]

opciones_explicitas: ["Mariano Moreno", "Juan José Paso", "Manuel Belgrano", "Fidencio de la Riva"]
respuesta: "Mariano Moreno"
tipo: mc

enunciado: "En la Primera Junta, ¿quién ocupaba el cargo de secretario?"

explicacion: |
  Mariano Moreno fue el secretario de la Primera Junta, conocido por su pensamiento radical y su influencia en la redacción de documentos políticos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["mascara_de_fecundidad", "fernando_vii"]

respuesta: "Fernando VII"
tipo: completar
respuestas_validas: ["Fernando VII"]

enunciado: "Debido a la estrategia política de la época, la Primera Junta gobernaba en nombre del rey depuesto, un fenómeno conocido como la 'máscara de ___'."

explicacion: |
  La 'máscara de Fernando VII' era una maniobra política para reconocer la autoridad del rey cautivo ante las potencias europeas, mientras se ejercía el autogobierno local.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["integrantes", "primera_junta"]

variables:
  idx: uno_de([0, 1])

respuesta: tabla[idx][1
tipo: mc
opciones_explicitas: ["Cornelio Saavedra", "Mariano Moreno", "Juan José Paso", "Domingo Saavedra"]

enunciado: "Seleccione el nombre del integrante de la Primera Junta que corresponde al escenario actual."

pasos:
  - "Identifique el nombre del presidente o secretario según el caso sorteado."

explicacion: |
  La Primera Junta estaba integrada por miembros del cabildo y militares; Saavedra era el presidente y Moreno el secretario.

variables:
  tabla: [["Cornelio Saavedra", "Cornelio Saavedra"], ["Mariano Moreno", "Mariano Moreno"]]
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["orden_gobiernos", "etapas"]

opciones_explicitas: ["Primera Junta", "Junta Grande", "Directorio"]
respuesta: ["Primera Junta", "Junta Grande", "Directorio"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas de los gobiernos patrios tras la Revolución de Mayo, desde el primero hasta el último de esta lista."

explicacion: |
  El proceso comenzó con la Primera Junta (1810), siguió con la Junta Grande (tras la incorporación de diputados del interior) y culminó con el Directorio (poder ejecutivo unipersonal).
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["revolucion_de_mayo", "independencia", "procesos_historicos"]

respuesta: "1810"
tipo: "input"
tolerancia_abs: 0

enunciado: "Aunque la independencia se declaró formalmente en 1816, la Revolución de Mayo ocurrió en el año ____."

explicacion: |
  La Revolución de Mayo de 1810 marcó el inicio del proceso de ruptura con el poder colonial, pero no fue el fin del camino hacia la soberanía.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["cabildo_abierto", "soberania"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["La Primera Junta", "el gobierno de la Junta"],
    ["El Primer Congreso", "la autoridad del Congreso"]
  ]

opciones_explicitas: ["gobernanza local", "soberanía absoluta", "restitución de la monarquía española", "subordinación a la corona británica"]
respuesta: "gobernanza local"
tipo: "mc"

enunciado: "Tras la Revolución de Mayo, el objetivo inmediato de las autoridades locales era establecer la {escenarios[escenario_idx][0]} para gestionar los asuntos de la región, pero esto no significaba una independencia total inmediata."

explicacion: |
  En 1810 se buscaba la autonomía para gobernarse a sí mismos (frente a la crisis de la corona), pero legalmente se mantenía una ambigüedad respecto a la soberanía absoluta que se alcanzaría en 1816.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["cronologia", "procesos"]

opciones_explicitas: ["Revolución de Mayo", "Congreso de Tucumán", "Declaración de la Independencia"]
respuesta: ["Revolución de Mayo", "Congreso de Tucumán", "Declaración de la Independencia"]
tipo: "ordenar"

enunciado: "Ordena cronológicamente los hitos del proceso de emancipación argentina:"

explicacion: |
  El proceso fue gradual: primero la ruptura del vínculo con España (1810), luego la organización política en el Congreso (1816) y finalmente la declaración formal de la independencia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["causas", "consecuencias"]

respuesta: "proceso"
tipo: "completar"
respuestas_validas: ["proceso", "etapa", "punto de partida"]

enunciado: "La Revolución de Mayo no debe entenderse como el fin de la lucha, sino como el ___ que dio inicio a una compleja serie de conflictos y debates políticos."

explicacion: |
  Es un error histórico considerar a mayo de 1810 como la independencia definitiva; fue el motor que desencadenó un proceso de décadas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["soberania", "debate"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["la legitimidad del Rey", "la autoridad de las juntas"],
    ["la soberanía popular", "la voluntad de los pueblos"]
  ]
  respuestas: [
    ["la legitimidad del Rey", "la autoridad de las juntas"],
    ["la soberanía popular", "la voluntad de los pueblos"]
  ]

opciones_explicitas: ["la legitimidad del Rey", "la autoridad de las juntas", "la soberanía popular", "la voluntad de los pueblos"]
respuesta: "la autoridad de las juntas"
tipo: "mc"

enunciado: "En el debate post-revolucionario, la gran incógnita era si la soberanía residía en {casos[caso_idx][0]} o si, ante la ausencia del monarca, la autoridad pasaba a ser de {casos[caso_idx][1]}."

explicacion: |
  El debate entre la 'retroversión de la soberanía' (el poder vuelve al pueblo) y la lealtad a la corona fue el eje central de las discusiones iniciadas en mayo de 1810.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["cabildo", "mayo_1816"]

variables:
  escenario: [[ "El 22 de mayo de 1816, se debatió la legitimidad del virrey en el Cabildo Abierto.", "Juan José Castelli"], ["El 22 de mayo de 1816, se debatió la legitimidad del virrey en el Cabildo Abierto.", "Cornelio Saavedra"]]
  idx: uno_de([0,1])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["Juan José Castelli", "Cornelio Saavedra", "Mariano Moreno", "Manuel Belgrano"]

enunciado: "En el Cabildo Abierto del 22 de mayo, ¿qué figura fue uno de los principales oradores defendiendo la soberanía del pueblo frente al virreinato? {escenario[idx][0]}"

explicacion: |
  Juan José Castelli fue conocido como 'el orador de la Revolución', defendiendo la postura de que el poder volvía al pueblo ante la caída de la Junta de Sevilla.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["primera_junta", "gobierno"]

variables:
  datos: [["Presidente", "Cornelio Saavedra"], ["Secretario", "Mariano Moreno"], ["Secretario", "Juan José Castelli"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Cornelio Saavedra", "Mariano Moreno", "Juan José Castelli", "Baltasar Hidalgo de Cisneros"]

enunciado: "La Primera Junta de Gobierno, establecida tras la Revolución de Mayo, tenía una estructura con un Presidente y dos Secretarios. Si el rol seleccionado es {datos[idx][0]}, ¿quién ocupaba dicho cargo? {datos[idx][1]}"

explicacion: |
  La Primera Junta estaba integrada por Saavedra (Presidente), Moreno y Castelli (Secretarios), junto a otros miembros vocales.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "basico"
  tags: ["virrey", "cisneros"]

variables:
  caso: [["El último virrey del Río de la Plata fue...", "Baltasar Hidalgo de Cisneros"], ["El último virrey del Río de Plata fue...", "Cisneros"]]
  idx: uno_de([0,1])

respuesta: caso[idx][1
tipo: completar
respuestas_validas: ["Baltasar Hidalgo de Cisneros", "Cisneros"]

enunciado: "El proceso revolucionario de mayo de 1816 culminó con la destitución de ___. "

explicacion: |
  Baltasar Hidalgo de Cisneros fue el último virrey enviado por la corona española que gobernó el territorio antes de la formación de la Primera Junta.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "intermedio"
  tags: ["cronologia", "mayo"]

respuesta: ["Llegada de la Primera Junta", "Establecimiento de la Junta de Gobierno", "Cabildo Abierto del 22 de mayo", "Junta de los 25 de mayo"]
tipo: ordenar
opciones_explicitas: ["Llegada de la Primera Junta", "Establecimiento de la Junta de Gobierno", "Cabildo Abierto del 22 de mayo", "Junta de los 25 de mayo"]

enunciado: "Ordena cronológicamente los hitos clave de la Semana de Mayo de 1816:"

explicacion: |
  La secuencia comenzó con la crisis de legitimidad, el debate en el Cabildo, la formación de la Junta de Gobierno y finalmente la instauración de la Primera Junta.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_de_mayo"
  nivel: "avanzado"
  tags: ["prensa", "ideologia"]

variables:
  rol: [["La principal publicación de ideas revolucionarias fue la...", "La Gazeta de Buenos Ayres"], ["La principal publicación de ideas revolucionarias fue la...", "El Correo de la Patria"]]
  idx: uno_de([0,1])

respuesta: rol[idx][1
tipo: completar
respuestas_validas: ["La Gazeta de Buenos Ayres", "El Correo de la Patria"]

enunciado: "Durante el proceso revolucionario, la difusión de ideas fue vital. Se destaca que la principal publicación de ideas revolucionarias fue la ___. "

explicacion: |
  La Gazeta de Buenos Ayres fue el primer periódico de la ciudad, utilizado para difundir los ideales de la revolución.
```
