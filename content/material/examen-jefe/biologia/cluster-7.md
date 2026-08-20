# Examen jefe — Maestro de la Vida Humana

> Logro #155. Completaste el examen integrador sobre los sistemas del cuerpo, la evolución y la bioética jefe. Pool agregado de los `cuestionario.md` ya validados de sus 7 temas. **172 preguntas totales** en 7/7 secciones.

---

## Sección: quimiosintesis (22 preguntas)

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["definicion", "organismos"]

respuesta: verdadero
tipo: vf

enunciado: "La quimiosíntesis es un proceso mediante el cual ciertos organismos producen materia orgánica utilizando la energía de reacciones químicas inorgánicas, en lugar de la luz solar."

explicacion: |
  La quimiosíntesis se define precisamente por el uso de energía química (oxidación de sustratos inorgánicos) para fijar carbono, a diferencia de la fotosíntesis que usa luz.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["bacterias", "arqueas"]

respuesta: verdadero
tipo: vf

enunciado: "Las bacterias y las arqueas son los principales organismos capaces de realizar quimiosíntesis."

explicacion: |
  Estos procariotas son los productores primarios en ecosistemas quimiosintéticos. Los eucariotas no realizan este proceso directamente.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["ecosistemas", "fuentes_hidrotermales"]

respuesta: verdadero
tipo: vf

enunciado: "Las fuentes hidrotermales del fondo oceánico son un ejemplo clásico de ecosistema donde predomina la quimiosíntesis."

explicacion: |
  En estas profundidades no llega la luz solar, por lo que la vida depende completamente de la energía química liberada por las bacterias quimiosintéticas.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["ciclo_nitrogeno", "fertilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Las bacterias quimiosintéticas nitrificantes transforman el nitrógeno en formas que las plantas pueden absorber, contribuyendo a la fertilidad del suelo."

explicacion: |
  Al convertir amoníaco en nitrato, hacen el nitrógeno disponible para la absorción radicular por parte de las plantas.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["calvin", "fijacion"]

respuesta: verdadero
tipo: vf

enunciado: "La fijación de carbono en la quimiosíntesis ocurre mediante un proceso similar al ciclo de Calvin utilizado en la fotosíntesis."

explicacion: |
  Ambas usan el ciclo de Calvin para incorporar CO2 en moléculas orgánicas, diferenciándose solo en la fuente de energía (ATP/NADPH de luz vs. de química).
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["ambientes", "oscuridad"]

respuesta: verdadero
tipo: vf

enunciado: "La quimiosíntesis permite la vida en ambientes donde la luz solar no llega."

explicacion: |
  Es fundamental en cuevas profundas, fondos oceánicos y subsuelo, demostrando la independencia del sol para la biosfera.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["ciclos", "regulacion"]

respuesta: verdadero
tipo: vf

enunciado: "Las bacterias quimiosintéticas juegan un papel vital en la regulación de elementos como el nitrógeno, el azufre y el hierro."

explicacion: |
  Al oxidar estos elementos, los transforman entre sus diferentes estados de oxidación, manteniendo los ciclos biogeoquímicos en movimiento.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["autotrofo", "independencia"]

respuesta: verdadero
tipo: vf

enunciado: "La quimiosíntesis demuestra que la energía química puede sostener ecosistemas completos de manera independiente del sol."

explicacion: |
  Es la prueba biológica de que la vida no requiere necesariamente la fotosíntesis para existir.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["biodiversidad", "habitats"]

respuesta: verdadero
tipo: vf

enunciado: "Sin las bacterias quimiosintéticas, muchos hábitats profundos y aislados serían incapaces de sostener vida compleja."

explicacion: |
  Son la base trófica exclusiva en estos ambientes, permitiendo la existencia de gusanos tubícolas, crustáceos y otros organismos.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["calvin", "mecanismo"]

respuesta: verdadero
tipo: vf

enunciado: "La fijación de carbono en la quimiosíntesis utiliza un mecanismo bioquímicamente similar al ciclo de Calvin de la fotosíntesis."

explicacion: |
  La enzima RuBisCO y el camino metabólico son esencialmente los mismos; la diferencia radica en la fuente de poder (ATP/NADPH).
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["global", "significado"]

respuesta: verdadero
tipo: vf

enunciado: "La quimiosíntesis es fundamental para la comprensión de la biodiversidad y los ciclos biogeoquímicos globales."

explicacion: |
  Contribuye a la fertilidad del suelo, la calidad del agua y la existencia de vida en condiciones extremas, impactando el planeta entero.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["definicion", "organismos"]

variables:
  organismos: uno_de(["bacterias", "arqueas"])

respuesta: "bacterias y arqueas"
tipo: completar

enunciado: "La quimiosíntesis es un proceso llevado a cabo principalmente por {organismos} que producen su propio alimento."

explicacion: |
  A diferencia de los organismos fotosintéticos, las bacterias y arqueas quimiosintéticas utilizan energía química inorgánica para sintetizar materia orgánica.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["energia", "comparacion"]

variables:
  fuente: uno_de(["luz solar", "reacciones químicas inorgánicas"])

respuesta: "reacciones químicas inorgánicas"
tipo: completar

enunciado: "Mientras la fotosíntesis usa luz solar, la quimiosíntesis obtiene energía de {fuente}."

explicacion: |
  La clave de la quimiosíntesis es la oxidación de compuestos inorgánicos (como sulfuro de hidrógeno o amoníaco) para obtener la energía necesaria para fijar el carbono.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["ecologia", "productores"]

variables:
  rol: uno_de(["productores primarios", "descomponedores", "consumidores secundarios"])

respuesta: "productores primarios"
tipo: completar

enunciado: "En ecosistemas extremos sin luz, las bacterias quimiosintéticas actúan como {rol}."

explicacion: |
  Estas bacterias forman la base de la cadena alimentaria en hábitats como las fuentes hidrotermales, al igual que las plantas en ecosistemas terrestres.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["sustratos", "azufre"]

variables:
  sustrato: uno_de(["sulfuro de hidrógeno", "amoníaco", "hierro ferroso"])

respuesta: "sulfuro de hidrógeno"
tipo: input

enunciado: "¿Qué compuesto oxidan las bacterias sulfurosas para obtener energía? (Escribe el nombre químico)"

explicacion: |
  Las bacterias sulfurosas oxidan el sulfuro de hidrógeno ($H_2S$) produciendo ácido sulfúrico como subproducto.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["nitrificacion", "nitrogeno"]

variables:
  paso: random(1,2)

respuesta: "nitrito"
tipo: input

enunciado: "En la nitrificación, las bacterias oxidan amoníaco ($NH_3$) a {paso}. Si el paso es 2, responde 'nitrato'."

explicacion: |
  El primer paso de la nitrificación convierte amoníaco en nitrito ($NO_2^-$). El segundo paso convierte nitrito en nitrato ($NO_3^-$).
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["habitat", "hidrotermal"]

variables:
  ambiente: uno_de(["fuentes hidrotermales", "superficie del océano", "bosques tropicales"])

respuesta: "fuentes hidrotermales"
tipo: input

enunciado: "¿En qué tipo de ambiente se encuentra comúnmente la quimiosíntesis? (Escribe el nombre del ambiente)"

explicacion: |
  Las fuentes hidrotermales del fondo oceánico son el ejemplo clásico donde la luz solar no llega y la quimiosíntesis sostiene la vida.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["ATP", "bioquimica"]

variables:
  mol: "ATP"

respuesta: "ATP"
tipo: input

enunciado: "La energía liberada en la oxidación inorgánica se almacena temporalmente en moléculas de {mol}."

explicacion: |
  Similar a la fotosíntesis, la energía química se convierte en ATP para ser utilizada en la fijación de carbono.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["carbono", "comparacion"]

variables:
  sustrato_c: "dióxido de carbono"

respuesta: "dióxido de carbono"
tipo: input

enunciado: "Tanto la fotosíntesis como la quimiosíntesis utilizan {sustrato_c} como fuente de carbono."

explicacion: |
  Ambas procesos fijan el carbono inorgánico ($CO_2$) para producir materia orgánica, pero difieren en la fuente de energía.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "avanzado"
  tags: ["ciclo", "calvin"]

variables:
  ciclo: "Calvin"

respuesta: "Calvin"
tipo: input

enunciado: "La fijación de carbono en bacterias quimiosintéticas ocurre mediante un mecanismo similar al {ciclo} de las plantas."

explicacion: |
  El ciclo de Calvin es utilizado para convertir $CO_2$ en glucosa, utilizando el ATP y NADPH generados por la oxidación inorgánica.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "intermedio"
  tags: ["crecimiento", "comparacion"]

variables:
  tasa: uno_de(["rápida", "lenta"])

respuesta: "lenta"
tipo: input

enunciado: "Las comunidades quimiosintéticas suelen tener tasas de crecimiento {tasa} comparadas con las fotosintéticas."

explicacion: |
  La energía obtenida de la oxidación de compuestos inorgánicos es menor que la de la fotosíntesis, lo que resulta en crecimiento más lento.
```

```
metadata:
  materia: "biologia"
  tema: "quimiosintesis"
  nivel: "basico"
  tags: ["ecologia", "base"]

variables:
  base: 1

respuesta: 1
tipo: input

enunciado: "En un ecosistema quimiosintético, ¿cuántos tipos de productores primarios existen típicamente (solo bacterias/quimiosíntesis)?"

explicacion: |
  En estos ecosistemas extremos, las bacterias quimiosintéticas son los únicos productores primarios (1 tipo principal).
```

## Sección: seleccion-natural (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "darwinismo"]

respuesta: "proceso mediante el cual los organismos mejor adaptados a su entorno tienen mayores probabilidades de sobrevivir y reproducirse"
tipo: completar
respuestas_validas: ["proceso mediante el cual los organismos mejor adaptados a su entorno tienen mayores probabilidades de sobrevivir y reproducirse"]

enunciado: "La selección natural es el ___ que permite la evolución de las poblaciones."

explicacion: |
  La selección natural no es un proceso consciente, sino un mecanismo donde las variaciones que favorecen la supervivencia se vuelven más comunes en las siguientes generaciones.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["variacion", "herencia"]

respuesta: "variación heredable"
tipo: completar
respuestas_validas: ["variación heredable", "variación genética"]

enunciado: "Para que la selección natural actúe, debe existir una ___ entre los individuos de una misma población, la cual debe poder transmitirse a la descendencia."

explicacion: |
  Si los rasgos adquiridos durante la vida (como el músculo de un atleta) no son heredables, no pueden ser seleccionados por la evolución.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["presion_ambiental", "adaptacion"]

variables:
  escenario: uno_de([
    ["un cambio brusco en la temperatura del clima", "el calor extremo"],
    ["la presencia de un nuevo depredador en el bosque", "la depredación"],
    ["la escasez de un tipo específico de alimento", "la falta de alimento"]
  ])

respuesta: "presión ambiental"
tipo: completar
respuestas_validas: ["presión ambiental"]

enunciado: "Cuando ocurre {escenario[0]}, se genera una ___ que actúa como filtro sobre las características de los individuos."

explicacion: |
  La presión ambiental es el factor externo (clima, depredadores, comida) que determina qué rasgos son ventajosos y cuáles no.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["reproduccion", "fitness"]

respuesta: "reproducción diferencial"
tipo: completar
respuestas_validas: ["reproducción diferencial"]

enunciado: "El éxito de la selección natural depende de la ___: la capacidad de ciertos individuos para dejar más descendencia que otros."

explicacion: |
  No basta con sobrevivir; el objetivo biológico es pasar los genes a la siguiente generación. Si un individuo vive mucho pero no tiene hijos, su ventaja evolutiva es nula.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "avanzado"
  tags: ["mecanismo", "resumen"]

respuesta: verdadero
tipo: vf

enunciado: "El mecanismo de la selección natural requiere de tres condiciones fundamentales: variación heredable, presión ambiental y reproducción diferencial."

explicacion: |
  Sin estos tres elementos, el proceso evolutivo por selección natural no puede ocurrir. La combinación de estos factores es lo que impulsa la adaptación.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "variacion"]

respuesta: falso
tipo: vf

enunciado: "¿La selección natural es el mecanismo que crea nuevas variaciones genéticas en una población para que los individuos se adapten?"

explicacion: |
  Falso. La selección natural actúa sobre la variación ya existente (causada por mutaciones y recombinación). La selección no "crea" rasgos nuevos, solo "filtra" los que ya están presentes.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "adaptacion"]

respuesta: falso
tipo: vf

enunciado: "¿Los individuos cambian sus características físicas de forma voluntaria o por esfuerzo para adaptarse mejor a su entorno?"

explicacion: |
  Falso. La adaptación no es un proceso consciente ni voluntario. Los individuos nacen con ciertas características; aquellos que tienen rasgos favorables para su ambiente tienen más éxito reproductivo, pero no "deciden" cambiar.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["evolucion", "fitness"]

respuesta: falso
tipo: vf

enunciado: "¿En el contexto de la selección natural, ser 'el más apto' significa necesariamente ser el individuo más fuerte y agresivo del grupo?"

explicacion: |
  Falso. El concepto biológico de "fitness" o aptitud se refiere a la capacidad de un organismo para sobrevivir y, fundamentalmente, dejar descendencia con éxito. A veces, ser el más pequeño o el más discreto es lo que permite sobrevivir y reproducirse.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["evolucion", "teleologia"]

respuesta: falso
tipo: vf

enunciado: "¿La selección natural tiene como objetivo final alcanzar la perfección biológica de una especie?"

explicacion: |
  Falso. La evolución no tiene un objetivo ni busca la "perfección". Es un proceso reactivo a las condiciones ambientales actuales. Lo que es "bueno" hoy puede dejar de serlo si el clima o los depredadores cambian mañana.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "herencia"]

respuesta: falso
tipo: vf

enunciado: "¿La selección natural actúa directamente sobre los genes de un individuo para modificarlos durante su vida?"

explicacion: |
  Falso. La selección natural actúa sobre el fenotipo (la expresión de los rasgos) de los individuos. Los cambios en la frecuencia de los genes ocurren a través de las generaciones, no mediante la modificación de los genes de un individuo que ya ha nacido.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["darwin", "pinzones", "evolucion"]

opciones_explicitas: ["picos más grandes y fuertes", "picos más largos y finos", "picos más cortos y planos", "picos de colores brillantes"]
respuesta: "picos más grandes y fuertes"
tipo: mc

enunciado: "En una isla donde la principal fuente de alimento son las semillas grandes y duras, ¿qué característica de los pinzones presentará una ventaja adaptativa para la supervivencia?"

explicacion: |
  Los individuos con picos más grandes y fuertes pueden romper las semillas duras, obteniendo energía de una fuente que otros no pueden aprovechar. Esto aumenta su probabilidad de sobrevivir y reproducirse.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["mecanismos", "evolucion"]

opciones_explicitas: ["Variabilidad", "Selección natural", "Herencia"]
respuesta: ["Variabilidad", "Selección natural", "Herencia"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que permiten que la selección natural actúe sobre una población de pinzones para que aparezca una nueva adaptación:"

explicacion: |
  Primero debe existir variabilidad (diferentes picos), luego la selección natural actúa sobre esa variabilidad según el ambiente, y finalmente la herencia permite que los rasgos exitosos pasen a la siguiente generación.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["ambiente", "supervivencia"]

opciones_explicitas: ["determina", "causa", "crea", "provoca"]
respuesta: "determina"
tipo: mc

enunciado: "El tipo de alimento disponible en una isla de Galápagos ___ la presión selectiva sobre la forma del pico de los pinzones."

explicacion: |
  El ambiente no "crea" la mutación, sino que "determina" qué rasgos existentes son ventajosos o desfavorables para la supervivencia en ese contexto específico.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["terminologia", "adaptacion"]

respuesta: "adaptación"
tipo: completar
respuestas_validas: ["adaptación", "adaptacion"]

enunciado: "Cuando un grupo de pinzones desarrolla un pico especializado para un tipo de semilla predominante en su isla, se dice que la población ha desarrollado una ___."

explicacion: |
  Una adaptación es un rasgo heredado que aumenta la capacidad de un organismo para sobrevivir y reproducirse en un ambiente determinado.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "avanzado"
  tags: ["conceptos_clave", "reproduccion"]

variables:
  caso: uno_de([["picos finos", "semillas pequeñas"], ["picos gruesos", "semillas grandes"]])

opciones_explicitas: ["falla", "éxito", "mutación", "estancamiento"]
respuesta: "éxito"
tipo: mc

enunciado: "Si en una isla predominan las {caso[1]}, los pinzones con picos tipo {caso[0]} tendrán un ___ reproductivo mayor debido a la disponibilidad de alimento."

explicacion: |
  El éxito reproductivo (fitness) se define por la capacidad de un individuo para sobrevivir y dejar descendencia con las características ventajosas en su entorno.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "adaptacion", "biston_betularia"]

respuesta: "claro"
tipo: completar
respuestas_validas: ["claro"]

enunciado: "En las poblaciones de la polilla Biston betularia antes de la Revolución Industrial, la mayoría de los individuos presentaban un color ___ debido a que los troncos de los árboles estaban cubiertos de líquenes claros."

explicacion: |
  Antes de la industrialización, los líquenes claros en los árboles proporcionaban un camuflaje ideal para las polillas de color claro, permitiéndoles evitar a los depredadores.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["seleccion_natural", "camuflaje", "biston_betularia"]

opciones_explicitas: ["El aumento de la temperatura", "La mayor visibilidad de las polillas claras ante los depredadores", "La desaparición de los depredadores", "La mutación espontánea por el hollín"]
respuesta: "La mayor visibilidad de las polillas claras ante los depredadores"
tipo: mc

enunciado: "Durante la Revolución Industrial, la contaminación por hollín oscureció los troncos de los árboles. ¿Cuál fue el principal factor de cambio en la población de polillas?"

explicacion: |
  El hollín eliminó el camuflaje de las polillas claras, haciendo que los pájaros las detectaran y devoraran con mayor facilidad. Esto es un ejemplo de presión de selección ambiental.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["supervivencia", "reproduccion", "biston_betularia"]

respuesta: "oscuro"
tipo: completar
respuestas_validas: ["oscuro"]

enunciado: "En un ambiente con troncos oscurecidos por el hollín, las polillas de color ___ tienen una mayor probabilidad de sobrevivir y reproducirse."

explicacion: |
  La supervivencia diferencial es clave: los individuos con el fenotipo que mejor se camufla en el nuevo ambiente tienen más éxito reproductivo.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "avanzado"
  tags: ["frecuencia_alelica", "evolucion"]

opciones_explicitas: ["Disminuye", "Se mantiene constante", "Aumenta", "Desaparece"]
respuesta: "Aumenta"
tipo: mc

enunciado: "Si la supervivencia de las polillas oscuras aumenta debido al camuflaje en árboles contaminados, ¿qué sucede con la frecuencia de sus genes en la siguiente generación?"

explicacion: |
  La evolución se define como el cambio en las frecuencias alélicas de una población a lo largo del tiempo. Al sobrevivir más, las polillas oscuras pasan más genes a su descendencia.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["conceptos_clave"]

respuesta: "fenotipos"
tipo: completar
respuestas_validas: ["fenotipos", "fenotipo"]

enunciado: "La selección natural actúa sobre los ___ de los individuos, permitiendo que aquellos con rasgos ventajosos sobrevivan mejor en un ambiente determinado."

explicacion: |
  La selección natural no actúa directamente sobre los genes, sino sobre el fenotipo (la expresión física de los rasgos), que es lo que los depredadores ven y lo que determina la supervivencia.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["evolucion", "antibioticos"]

respuesta: "selección"
tipo: completar
respuestas_validas: ["selección", "seleccion"]

enunciado: "La resistencia a los antibióticos es un ejemplo de ___ natural, donde el fármaco actúa como un factor de presión ambiental."

explicacion: |
  La selección natural no crea la resistencia, sino que actúa sobre variaciones preexistentes. Los individuos que ya poseen mutaciones que les permiten sobrevivir al antibiótico son los que logran reproducirse, transmitiendo esa característica a la siguiente generación.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["mutacion", "genetica"]

respuesta: "mutación previa"
tipo: completar
respuestas_validas: ["mutación previa", "mutacion previa"]

enunciado: "En un entorno con presencia de antibióticos, la supervivencia de una población bacteriana depende de una ___ que ocurrió antes del contacto con el fármaco."

pasos:
  - "Identificar si la mutación ocurre por necesidad o por azar."
  - "Relacionar la mutación con la capacidad de supervivencia en el entorno actual."

explicacion: |
  Es un error común pensar que las bacterias "se adaptan" para sobrevivir al antibiótico. La mutación es un evento aleatorio que ocurre antes de la presión selectiva. El antibiótico solo "selecciona" a los que ya eran resistentes.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "intermedio"
  tags: ["poblacion", "supervivencia"]

respuesta: "aumenta"
tipo: completar
respuestas_validas: ["aumenta"]

enunciado: "Si un pesticida elimina a todos los insectos sensibles pero no a los que poseen una mutación de resistencia, la frecuencia de genes de resistencia en la siguiente generación ___."

explicacion: |
  Al morir los individuos no resistentes, los sobrevivientes (que portan el gen de resistencia) son los únicos que dejan descendencia. Por lo tanto, la proporción de individuos con esa característica aumenta en la población.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "basico"
  tags: ["pesticidas", "presion_selectiva"]

respuesta: "agente"
tipo: completar
respuestas_validas: ["agente", "causa"]

enunciado: "En el proceso de evolución por selección natural, el antibiótico actúa como un ___ de selección que determina qué individuos logran reproducirse."

explicacion: |
  El antibiótico no es la causa de la mutación, sino el agente que ejerce la presión ambiental, filtrando a los individuos menos aptos para ese entorno específico.
```

```
metadata:
  materia: "biologia"
  tema: "seleccion_natural"
  nivel: "avanzado"
  tags: ["mitos_evolutivos", "resistencia"]

respuesta: falso
tipo: vf

enunciado: "El uso excesivo de antibióticos provoca que las bacterias muten específicamente para volverse resistentes."

explicacion: |
  Es falso. Las mutaciones son eventos aleatorios. El antibiótico no "induce" la mutación hacia la resistencia; simplemente elimina a los que no la tienen, permitiendo que la población cambie su composición genética hacia la resistencia.
```

## Sección: ser-vivo-caracteristicas (20 preguntas)

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["caracteristicas", "vida"]

variables:
  tabla: [["organizacion", "esta formado por una o mas celulas"], ["nutricion", "obtiene y procesa materia y energia"], ["reproduccion", "genera nuevos individuos de su misma especie"], ["homeostasis", "mantiene su ambiente interno estable"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["esta formado por una o mas celulas", "obtiene y procesa materia y energia", "genera nuevos individuos de su misma especie", "mantiene su ambiente interno estable"]

enunciado: "¿Qué significa la característica {tabla[idx][0]}?"

explicacion: |
  {tabla[idx][0]} significa: {tabla[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["irritabilidad", "estimulos"]

respuesta: verdadero
tipo: vf

enunciado: "La irritabilidad es la capacidad de reaccionar a cambios del ambiente, como luz, calor o contacto."

explicacion: |
  Correcto. Permite responder a estímulos para sobrevivir.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["crecimiento"]

respuesta: verdadero
tipo: vf

enunciado: "El crecimiento significa aumentar de tamaño o cantidad de células a lo largo del tiempo."

explicacion: |
  Correcto, ocurre por aumento de tamaño celular o por división celular.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["metabolismo", "respiracion"]

respuesta: "respiracion"
tipo: completar
respuestas_validas: ["respiracion"]

enunciado: "Liberar la energía guardada en el alimento se llama ___."

explicacion: |
  La respiración celular transforma la energía de los nutrientes en energía utilizable.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["evolucion", "adaptacion"]

respuesta: verdadero
tipo: vf

enunciado: "La adaptación es que la especie cambia con el tiempo para ajustarse mejor al ambiente."

explicacion: |
  Correcto — ver ../seleccion-natural/.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["reproduccion", "mula"]

respuesta: verdadero
tipo: vf

enunciado: "La mula (cruza de caballo y burro) es considerada un ser vivo, aunque no pueda reproducirse."

explicacion: |
  Cumple el resto de las funciones vitales — la esterilidad no la excluye de ser un ser vivo.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "intermedio"
  tags: ["definicion", "excepciones"]

respuesta: falso
tipo: vf

enunciado: "Si un individuo no cumple una característica general (como reproducirse), deja de ser considerado ser vivo automáticamente."

explicacion: |
  Falso. La lista describe el patrón general, no una regla sin excepción para cada individuo — hay híbridos estériles que igual son seres vivos.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["reproduccion", "genetica"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque la mula sea estéril, sus especies de origen (caballo y burro) sí pueden reproducirse."

explicacion: |
  Correcto. La esterilidad es del híbrido, no de las especies parentales.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["virus", "celula"]

respuesta: verdadero
tipo: vf

enunciado: "Los virus carecen de organización celular propia (no tienen membrana, citoplasma ni organelos)."

explicacion: |
  Correcto. Son agentes acelulares, no células.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["virus", "metabolismo"]

respuesta: falso
tipo: vf

enunciado: "Los virus se alimentan por sí mismos, con procesos metabólicos independientes, como una célula normal."

explicacion: |
  Falso. No tienen metabolismo propio.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "intermedio"
  tags: ["virus", "reproduccion"]

respuesta: verdadero
tipo: vf

enunciado: "Los virus sólo pueden reproducirse usando la maquinaria de una célula que infectan."

explicacion: |
  Correcto — ver ../microbiologia-virus-inmunitario/.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "intermedio"
  tags: ["virus", "debate"]

respuesta: verdadero
tipo: vf

enunciado: "Existe debate científico sobre si los virus deben clasificarse como seres vivos o no."

explicacion: |
  Correcto, por su falta de metabolismo y reproducción autónoma.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["conceptos_basicos"]

respuesta: verdadero
tipo: vf

enunciado: "Para ser considerado ser vivo, un organismo debe cumplir un conjunto de características (nutrición, reproducción, respuesta a estímulos, etc.)."

explicacion: |
  Correcto, esa es la base de la definición biológica de vida.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["caracteristicas"]

respuesta: "Tener siempre color verde"
tipo: mc
opciones_explicitas: ["Nutrición", "Reproducción", "Tener siempre color verde", "Crecimiento"]

enunciado: "¿Cuál de estas NO es una característica esencial de todos los seres vivos?"

explicacion: |
  El color verde no es universal (sólo aparece en organismos fotosintéticos con clorofila); nutrición, reproducción y crecimiento sí lo son.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["ejemplos"]

respuesta: verdadero
tipo: vf

enunciado: "Las plantas, la célula y los ciclos de vida son ejemplos concretos que ilustran estas mismas características generales."

explicacion: |
  Correcto, son "instancias" de las características de todo ser vivo.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "basico"
  tags: ["comparacion"]

respuesta: falso
tipo: vf

enunciado: "Un objeto inerte, como una piedra, puede realizar procesos de nutrición y reproducción."

explicacion: |
  Falso, esos procesos son exclusivos de los sistemas biológicos.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "intermedio"
  tags: ["homeostasis"]

respuesta: verdadero
tipo: vf

enunciado: "La homeostasis permite que el ambiente interno de un ser vivo se mantenga relativamente estable, aunque el ambiente externo cambie mucho."

explicacion: |
  Correcto, por ejemplo mantener la temperatura corporal aunque haga frío o calor afuera.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "avanzado"
  tags: ["conceptos", "casos_limite"]

respuesta: falso
tipo: vf

enunciado: "El fuego, que crece, se reproduce (propaga) y consume 'alimento' (combustible), es considerado un ser vivo porque cumple algunas de estas características."

explicacion: |
  Falso. Aunque comparte alguna característica superficial, el fuego no tiene organización celular, no responde a estímulos de forma coordinada ni tiene material genético — cumplir una o dos características sueltas no alcanza para ser considerado ser vivo.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "intermedio"
  tags: ["organizacion", "celula"]

respuesta: verdadero
tipo: vf

enunciado: "Todo ser vivo conocido (con la excepción discutida de los virus) está formado por al menos una célula."

explicacion: |
  Correcto — desde organismos unicelulares (una sola célula) hasta pluricelulares (muchas), la célula es la unidad básica.
```

```
metadata:
  materia: "biologia"
  tema: "ser_vivo_caracteristicas"
  nivel: "avanzado"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "Todas las características de los seres vivos tienen la misma importancia y ninguna depende de las otras."

explicacion: |
  Falso. Por ejemplo, sin nutrición (obtener energía) no hay crecimiento posible, y sin organización celular no hay ninguna de las demás funciones — hay dependencias entre ellas, no son totalmente independientes.
```

## Sección: sistema-endocrino-hormonas-glandulas (25 preguntas)

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["hormonas", "glándulas"]

respuesta: "hormona"
tipo: completar
respuestas_validas: ["hormona"]

enunciado: "Las sustancias químicas producidas por las glándulas endocrinas que viajan a través de la sangre para regular funciones corporales se denominan ___."

explicacion: |
  Las hormonas son mensajeros químicos que se liberan en el torrente sanguíneo para actuar sobre células u órganos específicos (células diana).
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["sistema_nervioso", "sistema_endocrino"]

respuesta: "lento"
tipo: completar
respuestas_validas: ["lento"]

enunciado: "A diferencia del sistema nervioso, que utiliza impulsos eléctricos para una respuesta inmediata, el sistema endocrino se caracteriza por tener un efecto ___."

explicacion: |
  El sistema nervioso es rápido y de corta duración, mientras que el sistema endocrino es más lento pero sus efectos suelen ser más duraderos.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["transporte", "sangre"]

respuesta: "torrente sanguíneo"
tipo: completar
respuestas_validas: ["torrente sanguíneo", "torrente sanguineo", "sangre"]

enunciado: "Mientras que las neuronas transmiten señales a través de axones, las glándulas endocrinas liberan sus mensajeros directamente al ___."

explicacion: |
  Las glándulas endocrinas son glándulas sin conductos que vierten su secreción directamente en la sangre.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["comparacion", "señales"]

variables:
  escenario: uno_de([["eléctricas", "rápidas"], ["químicas", "lentas"]])

respuesta: escenario[1]
tipo: completar
respuestas_validas: ["rápidas", "lentas"]

enunciado: "El sistema endocrino utiliza señales {escenario[0]} para transmitir su mensaje, lo que hace que la respuesta sea ___."

explicacion: |
  El sistema nervioso es como un mensaje de texto instantáneo (rápido/eléctrico), mientras que el endocrino es como una carta (lento/químico).
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["transporte", "sangre"]

respuesta: "sangre"
tipo: completar
respuestas_validas: ["sangre"]

enunciado: "El medio principal de transporte para las hormonas en el organismo es la ___."

explicacion: |
  La sangre actúa como la autopista que permite que las hormonas lleguen desde la glándula hasta los órganos distantes.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["tiroides", "tiroxina"]

tipo: mc
opciones_explicitas: ["Insulina", "Tiroxina", "Adrenalina", "Estrógeno"]
respuesta: "Tiroxina"

enunciado: "La glándula tiroides es responsable de la secreción de una hormona fundamental para regular el metabolismo energético del organismo. ¿Cuál es dicha hormona?"

explicacion: |
  La tiroides produce tiroxina (T4) y triyodotironina (T3), las cuales regulan la velocidad con la que las células consumen energía.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["pancreas", "insulina", "glucagon"]

tipo: completar
respuesta: "glucagón"
respuestas_validas: ["glucagón", "glucagon"]

enunciado: "Cuando los niveles de glucosa en sangre disminuyen, el páncreas secreta la hormona ___ para provocar que los niveles de azúcar suban."

explicacion: |
  El páncreas actúa de forma dual: la insulina baja la glucosa y el glucagón la sube. Ante la baja de glucosa, se libera glucagón.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["suprarrenales", "adrenalina"]

tipo: mc
opciones_explicitas: ["Cortisol", "Adrenalina", "Testosterona", "Tiroxina"]
respuesta: "Adrenalina"

enunciado: "Ante una situación de peligro o estrés repentino, las glándulas suprarrenales liberan una hormona que aumenta la frecuencia cardíaca y prepara al cuerpo para la acción. ¿Qué hormona es?"

explicacion: |
  La adrenalina (epinefrina) es la hormona de respuesta inmediata ante situaciones de lucha o huida.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["gonadas", "estrogeno", "testosterona"]

tipo: completar
respuesta: "estrógeno"
respuestas_validas: ["estrógeno", "estrogeno"]

enunciado: "En el sistema reproductor femenino, las gónadas (ovarios) producen principalmente la hormona ___."

explicacion: |
  Los ovarios producen estrógenos y progesterona, encargados de los caracteres sexuales secundarios femeninos y el ciclo menstrual.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["pancreas", "insulina"]

tipo: mc
opciones_explicitas: ["Cortisol", "Insulina", "Adrenalina", "Tiroxina"]
respuesta: "Insulina"

enunciado: "La diabetes mellitus tipo 1 se caracteriza por la deficiencia en la producción de una hormona pancreática que permite la entrada de glucosa a las células. ¿Cuál es?"

explicacion: |
  La insulina es la hormona encargada de permitir que la glucosa pase de la sangre a las células para ser utilizada como energía.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["hipofisis", "glandula_maestra"]

respuesta: "hipofisis"
tipo: completar
respuestas_validas: ["hipofisis", "hipófisis"]

enunciado: "La glándula situada en la base del cerebro que coordina y regula el funcionamiento de otras glándulas endocrinas se denomina ___."

explicacion: |
  La hipófisis es conocida como la glándula maestra porque secreta hormonas que estimulan o inhiben la actividad de otras glándulas como la tiroides, las suprarrenales y las gónadas.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["receptor", "especificidad"]

respuesta: "receptor"
tipo: completar
respuestas_validas: ["receptor"]

enunciado: "Aunque las hormonas viajan a través de toda la sangre circulando por el organismo, sólo pueden ejercer su efecto sobre las células que poseen un ___ específico."

explicacion: |
  Este mecanismo se llama especificidad celular. La hormona actúa como una 'llave' y el receptor como una 'cerradura'; si la célula no tiene la cerradura adecuada, la hormona pasa de largo sin producir cambios.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["transporte", "sangre"]

respuesta: "sangre"
tipo: completar
respuestas_validas: ["sangre"]

enunciado: "A diferencia del sistema nervioso que usa impulsos eléctricos, el sistema endocrino transporta sus mensajeros químicos (hormonas) a través de la ___."

explicacion: |
  Las hormonas son mensajeros químicos que se liberan al torrente sanguíneo para ser distribuidos por todo el cuerpo.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["eje_hormonal", "tiroides"]

respuesta: "tiroides"
tipo: completar
respuestas_validas: ["tiroides"]

enunciado: "La hipófisis secreta la hormona tirotropina (TSH), cuya función principal es regular el funcionamiento de la glándula ___."

explicacion: |
  La TSH (hormona estimulante de la tiroides) viaja por la sangre hasta la glándula tiroides para estimular la producción de sus hormonas (T3 y T4).
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "avanzado"
  tags: ["celula_diana", "receptor"]

respuesta: "célula diana"
tipo: completar
respuestas_validas: ["célula diana", "celula diana"]

enunciado: "El término utilizado para designar a la célula sobre la cual actúa una hormona específica se conoce como ___."

explicacion: |
  La célula diana es aquella que tiene los receptores proteicos necesarios para reconocer la señal de la hormona y desencadenar una respuesta biológica.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["hormonas", "glucosa", "insulina"]

tipo: mc
opciones_explicitas: ["Aumentar la glucosa en sangre", "Disminuir la glucosa en sangre", "Aumentar el ritmo cardiaco", "Regular la temperatura corporal"]
respuesta: "Disminuir la glucosa en sangre"

enunciado: "Cuando los niveles de glucosa en sangre aumentan después de una comida, el páncreas secreta insulina para realizar una acción de retroalimentación negativa. ¿Cuál es el efecto principal de la insulina?"

explicacion: |
  La insulina permite que la glucosa entre en las células, reduciendo así su concentración en el torrente sanguíneo y manteniendo la homeostasis.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["homeostasis", "mecanismo", "control"]

tipo: vf
respuesta: verdadero

enunciado: "En un sistema de retroalimentación negativa, la respuesta producida por el cuerpo actúa para contrarrestar o reducir el estímulo inicial para mantener el equilibrio."

explicacion: |
  Correcto. El objetivo de la retroalimentación negativa es la homeostasis: si un parámetro se desvía de su punto de ajuste, el sistema activa mecanismos para devolverlo a la normalidad.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["glucagon", "glucosa", "ayuno"]

tipo: mc
opciones_explicitas: ["Estimular la absorción de glucosa", "Inhibir la producción de insulina", "Aumentar la glucosa en sangre", "Reducir la glucosa en sangre"]
respuesta: "Aumentar la glucosa en sangre"

enunciado: "Durante un periodo de ayuno, los niveles de glucosa en sangre descienden. Para compensar esto, el páncreas libera glucagón. ¿Cuál es la función de esta hormona?"

explicacion: |
  El glucagón estimula la degradación del glucógeno en el hígado para liberar glucosa a la sangre, elevando así sus niveles.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["termorregulacion", "homeostasis", "analogia"]

tipo: vf
respuesta: verdadero

enunciado: "La analogía del termostato de un aire acondicionado es útil para entender la retroalimentación negativa, ya que cuando la temperatura sube, el sistema se activa para apagar el calor y estabilizar la temperatura."

explicacion: |
  Exacto. Al igual que el termostato detecta el cambio y activa una acción para revertirlo, el sistema endocrino detecta cambios químicos y activa hormonas para revertirlos.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "avanzado"
  tags: ["control", "eje_hormonal", "regulacion"]

tipo: mc
opciones_explicitas: ["El estímulo aumenta la producción de la hormona", "El estímulo disminuye la producción de la hormona", "La hormona no tiene relación con el estímulo", "La hormona siempre aumenta el estímulo"]
respuesta: "El estímulo aumenta la producción de la hormona"

enunciado: "En un ciclo de retroalimentación negativa clásica, si el nivel de un producto final (como una hormona) es muy bajo, ¿qué sucede con la señal de estimulación?"

explicacion: |
  Cuando el nivel de la sustancia es bajo, se elimina la inhibición sobre la glándula, permitiendo que se produzca más hormona para restaurar el nivel normal.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["hormonas", "estres", "adrenalina"]

variables:
  escenarios: [["Ante una situación de peligro inminente, el cuerpo libera una sustancia para preparar la respuesta de lucha o huida. ¿Cuál es esa sustancia?", "adrenalina"], ["Ante un susto repentino, el organismo aumenta la frecuencia cardíaca debido a la liberación de... ¿qué hormona?", "adrenalina"]]
  idx: uno_de([0, 1])

enunciado: "{escenarios[idx][0]}"

opciones_explicitas: ["insulina", "adrenalina", "tiroxina", "melatonina"]
respuesta: "adrenalina"
tipo: mc

explicacion: |
  Las glándulas suprarrenales liberan adrenalina (epinefrina) para preparar al cuerpo para una respuesta rápida ante el estrés.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["glucosa", "insulina", "pancreas"]

variables:
  escenarios: [["Después de una comida rica en carbohidratos, los niveles de azúcar en sangre aumentan. ¿Qué hormona secreta el páncreas para regular esto?", "insulina"], ["Cuando la glucosa en sangre sube tras ingerir alimentos, ¿cuál es la hormona responsable de transportarla a las células?", "insulina"]]
  idx: uno_de([0, 1])

enunciado: "{escenarios[idx][0]}"

opciones_explicitas: ["glucagón", "insulina", "tiroxina", "cortisol"]
respuesta: "insulina"
tipo: mc

explicacion: |
  La insulina es la hormona encargada de reducir los niveles de glucosa en sangre facilitando su entrada en las células.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["metabolismo", "tiroides", "tiroxina"]

variables:
  escenarios: [["Si una persona presenta un metabolismo extremadamente lento y se siente cansada, es probable que su glándula tiroides esté produciendo poca...", "tiroxina"], ["Una deficiencia en la producción de ___ por parte de la glándula tiroides puede ralentizar el metabolismo.", "tiroxina"]]
  idx: uno_de([0, 1])

enunciado: "{escenarios[idx][0]}"

respuestas_validas: ["tiroxina"]
respuesta: "tiroxina"
tipo: completar

explicacion: |
  La glándula tiroides produce tiroxina, la cual es la principal responsable de regular la velocidad del metabolismo en el cuerpo.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["sueño", "melatonina", "pineal"]

variables:
  escenarios: [["Durante la noche, la glándula pineal secreta una hormona que regula los ciclos de sueño y vigilia llamada...", "melatonina"], ["¿Cuál es la hormona responsable de inducir el sueño y regular los ritmos circadianos?", "melatonina"]]
  idx: uno_de([0, 1])

enunciado: "{escenarios[idx][0]}"

opciones_explicitas: ["melatonina", "oxitocina", "estrógenos", "progesterona"]
respuesta: "melatonina"
tipo: mc

explicacion: |
  La melatonina es producida por la glándula pineal y su secreción aumenta en la oscuridad para regular el ciclo del sueño.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["glucagon", "pancreas", "glucosa"]

variables:
  escenarios: [["En un estado de ayuno prolongado, los niveles de glucosa en sangre descienden. ¿Qué hormona secreta el páncreas para compensar esto?", "glucagón"], ["Cuando el azúcar en sangre es muy baja, ¿cuál es la hormona que actúa para elevarla?", "glucagón"]]
  idx: uno_de([0, 1])

enunciado: "{escenarios[idx][0]}"

opciones_explicitas: ["insulina", "glucagón", "adrenalina", "cortisol"]
respuesta: "glucagón"
tipo: mc

explicacion: |
  El glucagón actúa de forma opuesta a la insulina; su función es elevar los niveles de glucosa en sangre cuando estos son bajos.
```

## Sección: sistema-nervioso-neurona-sinapsis (35 preguntas)

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["neurona", "mielina", "velocidad"]

variables:
  velocidad_sin_miélina: random(1, 5)
  velocidad_con_miélina: random(50, 120)

respuesta: "{velocidad_con_miélina} m/s"
tipo: input

enunciado: "Si una neurona amielínica transmite a {velocidad_sin_miélina} m/s, ¿cuál es la velocidad aproximada de una neurona mielinizada en el mismo contexto? (Valor entero entre {velocidad_con_miélina} y {velocidad_con_miélina + 10})"

explicacion: |
  La vaina de mielina permite la conducción saltatoria, acelerando drásticamente la velocidad del impulso nervioso comparado con neuronas sin mielina.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["sinapsis", "neurotransmisor"]

variables:
  neurotransmisores: random(10, 100)
  porcentaje_liberacion: uno_de([10, 20, 50])
  resultado: floor(neurotransmisores * porcentaje_liberacion / 100)

respuesta: "{resultado}"
tipo: input

enunciado: "Si un terminal sináptico contiene {neurotransmisores} vesículas y se libera un {porcentaje_liberacion}% durante el estímulo, ¿cuántas vesículas se liberan aproximadamente?"

explicacion: |
  En la sinapsis química, la llegada del potencial de acción provoca la liberación de neurotransmisores desde las vesículas hacia la hendidura sináptica.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["soma", "cuerpo celular"]

variables:
  nombre: uno_de(["soma", "cuerpo celular", "pericario"])

respuesta: "soma"
tipo: completar

enunciado: "El cuerpo celular de la neurona, donde se encuentra el núcleo y se realizan las funciones metabólicas, se denomina {nombre}."
respuestas_validas:
  - "soma"
  - "cuerpo celular"

explicacion: |
  El soma o cuerpo celular contiene el núcleo y es el centro metabólico de la neurona.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["sinapsis", "conversión"]

variables:
  tipo1: "eléctrica"
  tipo2: "química"

respuesta: "eléctrica a química"
tipo: completar

enunciado: "En la sinapsis, el impulso {tipo1} se convierte en señal {tipo2} para cruzar la hendidura."
respuestas_validas:
  - "eléctrica a química"
  - "electrica a quimica"

explicacion: |
  El impulso eléctrico no puede saltar el espacio físico de la hendidura sináptica, por lo que se convierte en señal química mediante neurotransmisores.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["potencial", "refractario"]

variables:
  tiempo_refractario_absoluto: random(1, 2)
  tiempo_refractario_relativo: random(3, 5)
  total: tiempo_refractario_absoluto + tiempo_refractario_relativo

respuesta: "{total}"
tipo: input

enunciado: "Si el período refractario absoluto dura {tiempo_refractario_absoluto} ms y el relativo dura {tiempo_refractario_relativo} ms, ¿cuál es el tiempo total mínimo para que la neurona pueda generar otro potencial de acción?"

explicacion: |
  El período refractario total incluye el tiempo absoluto (cuando no se puede generar ningún impulso) y el relativo (cuando se requiere un estímulo mayor).
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["potencial", "membrana"]

variables:
  potencial_reposo: -70
  despolarizacion: random(20, 40)
  umbral: -55
  potencial_accion: 30
  valor_final: potencial_reposo + despolarizacion

respuesta: "{valor_final}"
tipo: input

enunciado: "Si el potencial de reposo es {potencial_reposo} mV y una excitación causa una despolarización de {despolarizacion} mV, ¿cuál es el nuevo potencial de membrana antes de alcanzar el umbral?"

explicacion: |
  La despolarización reduce la diferencia de carga negativa interna, acercando el potencial al umbral de disparo.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["sinapsis", "concentración"]

variables:
  moléculas: random(100, 500)
  volumen: random(10, 20)
  concentracion: floor(moléculas / volumen)

respuesta: "{concentracion}"
tipo: input

enunciado: "Si se liberan {moléculas} moléculas de neurotransmisor en una hendidura de volumen {volumen} µm³, ¿cuál es la concentración aproximada (moléculas/µm³)?"

explicacion: |
  La concentración de neurotransmisores en la hendidura determina la fuerza de la señal postsináptica.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["sinapsis", "espacio"]

variables:
  nombre: "hendidura sináptica"

respuesta: "hendidura sináptica"
tipo: completar

enunciado: "El pequeño espacio físico entre dos neuronas donde ocurre la transmisión química se llama {nombre}."
respuestas_validas:
  - "hendidura sináptica"
  - "hendidura sinaptica"

explicacion: |
  La hendidura sináptica separa la neurona presináptica de la postsináptica, requiriendo la difusión de neurotransmisores.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["velocidad", "tiempo"]

variables:
  distancia: random(10, 100)
  velocidad: 50
  tiempo: distancia / velocidad

respuesta: "{redondear(tiempo, 2)}"
tipo: input

enunciado: "Si un impulso viaja {distancia} mm a una velocidad de {velocidad} m/s (convertido a mm/ms: {velocidad}/1000), ¿cuánto tarda en llegar? (Resultado en ms)"

explicacion: |
  El tiempo de transmisión depende de la distancia y la velocidad de conducción, que se ve afectada por la mielina.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["morfología", "relación"]

variables:
  largo_axon: random(10, 100)
  largo_dendrita: random(1, 5)
  ratio: floor(largo_axon / largo_dendrita)

respuesta: "{ratio}"
tipo: input

enunciado: "Si el axón mide {largo_axon} µm y las dendritas {largo_dendrita} µm, ¿cuántas veces es más largo el axón que las dendritas?"

explicacion: |
  Las neuronas suelen tener axones mucho más largos que las dendritas para transmitir señales a distancia.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["terminal", "liberación"]

variables:
  nombre: "terminal sináptica"

respuesta: "terminal sináptica"
tipo: completar

enunciado: "Las estructuras al final del axón que contienen vesículas con neurotransmisores se llaman {nombre}."
respuestas_validas:
  - "terminal sináptica"
  - "terminal sinaptica"
  - "botón terminal"

explicacion: |
  Las terminales sinápticas son los sitios de liberación de neurotransmisores hacia la hendidura.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["mielina", "eficiencia"]

variables:
  velocidad_mielinizada: random(50, 120)
  velocidad_amielinizada: random(1, 5)
  factor: floor(velocidad_mielinizada / velocidad_amielinizada)

respuesta: "{factor}"
tipo: input

enunciado: "Si la neurona mielinizada viaja a {velocidad_mielinizada} m/s y la amielínica a {velocidad_amielinizada} m/s, ¿cuántas veces más rápida es la primera?"

explicacion: |
  La mielina aumenta la velocidad de conducción entre 10 y 100 veces dependiendo del contexto fisiológico.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["mielina", "nodo"]

variables:
  nombre: "nodo de Ranvier"

respuesta: "nodo de Ranvier"
tipo: completar

enunciado: "Los espacios sin mielina a lo largo del axón se denominan {nombre}."
respuestas_validas:
  - "nodo de Ranvier"
  - "nodo de ranvier"

explicacion: |
  Los nodos de Ranvier son los puntos donde se regenera el potencial de acción en la conducción saltatoria.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["neurona", "unidad_funcional"]

variables:
  pregunta_clave: "unidad"

respuesta: "neurona"
tipo: completar

enunciado: "¿Cuál es la unidad básica de funcionamiento del sistema nervioso?"

explicacion: |
  La neurona es la célula especializada en transmitir impulsos nerviosos. No se divide para formar más neuronas, sino que se especializa en esta función.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["dendritas", "estructura"]

variables:
  funcion: "recepcion"

respuesta: "reciben"
tipo: completar

enunciado: "Las {funcion} son prolongaciones cortas y ramificadas que {funcion} mensajes de otras neuronas."

explicacion: |
  Las dendritas tienen la función de recibir señales de otras neuronas y transmitirlas hacia el cuerpo celular.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["axon", "impulso"]

variables:
  direccion: "salida"

respuesta: "lleva"
tipo: completar

enunciado: "El axón es una prolongación larga que {direccion} el impulso nervioso desde el cuerpo celular hacia las terminales."

explicacion: |
  El axón conduce el impulso eléctrico desde el soma (cuerpo celular) hacia las terminales sinápticas para enviarlo a otras células.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["mielina", "celulas_gliales"]

variables:
  origen: "celulas_gliales"

respuesta: "celulas gliales"
tipo: completar

enunciado: "La vaina de mielina está formada por células llamadas {origen}."

explicacion: |
  Las células gliales (como los oligodendrocitos en el SNC y las células de Schwann en el SNP) forman la vaina de mielina alrededor de los axones.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["mielina", "patologia"]

variables:
  consecuencia: "lenta"

respuesta: "lenta"
tipo: completar

enunciado: "Si la mielina se daña, la comunicación entre el cerebro y el cuerpo se vuelve {consecuencia} o falla."

explicacion: |
  El daño a la mielina (desmielinización) interrumpe o ralentiza la conducción del impulso nervioso, afectando la función motora y sensorial.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["sinapsis", "comunicacion"]

variables:
  concepto: "puente"

respuesta: "sinapsis"
tipo: completar

enunciado: "La {concepto} es el proceso mediante el cual la señal eléctrica se convierte en química y luego vuelve a ser eléctrica."

explicacion: |
  La sinapsis es el punto de comunicación entre dos neuronas (o entre una neurona y una efectora) donde se produce el relevo de la señal.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["hendidura", "espacio"]

variables:
  espacio: "hendidura"

respuesta: "hendidura sináptica"
tipo: completar

enunciado: "Existe un pequeño espacio físico entre las neuronas llamado {espacio}."

explicacion: |
  La hendidura sináptica es el espacio extracelular por donde difunden los neurotransmisores para llegar a la neurona postsináptica.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["señal", "conversion"]

variables:
  tipo1: "electrica"
  tipo2: "quimica"

respuesta: "química"
tipo: completar

enunciado: "En la sinapsis, la señal {tipo1} se convierte en {tipo2} y luego vuelve a ser eléctrica."

explicacion: |
  El impulso eléctrico llega a la terminal, libera neurotransmisores (señal química) que cruzan la hendidura y generan un nuevo impulso eléctrico en la siguiente neurona.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["soma", "cuerpo_celular"]

variables:
  contenido: "nucleo"

respuesta: "núcleo"
tipo: completar

enunciado: "En el cuerpo celular (soma) se encuentra el {contenido} y se realizan funciones metabólicas."

explicacion: |
  El soma contiene el núcleo con el material genético y es el centro metabólico de la neurona.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["ranvier", "impulso"]

variables:
  funcion: "salto"

respuesta: "nodos de Ranvier"
tipo: completar

enunciado: "El impulso 'salta' de un {funcion} a otro en los axones mielinizados."

explicacion: |
  Los nodos de Ranvier son los espacios sin mielina entre los segmentos de vaina, donde se regenera el potencial de acción.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["funcion", "comando"]

variables:
  rol: "centro_de_comando"

respuesta: "centro de comando"
tipo: completar

enunciado: "El sistema nervioso funciona como el {rol} y la red de comunicación del cuerpo."

explicacion: |
  Su rol principal es integrar información, procesarla y generar respuestas coordinadas para mantener la homeostasis y la interacción con el entorno.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["neurotransmisor", "quimico"]

variables:
  sustancia: "neurotransmisor"

respuesta: "neurotransmisores"
tipo: completar

enunciado: "Los {sustancia} son las moléculas que cruzan la hendidura sináptica."

explicacion: |
  Los neurotransmisores son mensajeros químicos liberados por la neurona presináptica que se unen a receptores en la postsináptica.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["direccion", "flujo"]

variables:
  flujo: "dendritas_a_axon"

respuesta: "dendritas"
tipo: completar

enunciado: "La información llega a la neurona principalmente a través de las {flujo}."

explicacion: |
  El flujo típico de información es: Dendritas -> Soma -> Axón -> Terminales sinápticas.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["mielina", "aislante"]

variables:
  propiedad: "aislante"

respuesta: "aislante"
tipo: completar

enunciado: "La vaina de mielina actúa como una capa {propiedad} alrededor del axón."

explicacion: |
  La mielina es rica en lípidos y actúa como aislante eléctrico, impidiendo que la carga se escape y forzando el salto entre nodos.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["respuesta", "estimulo"]

variables:
  accion: "reaccion"

respuesta: "respuesta"
tipo: completar

enunciado: "El sistema nervioso procesa datos para generar una {accion} adecuada."

explicacion: |
  La función integradora del sistema nervioso es generar una respuesta motora o secretora apropiada ante un estímulo.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["sinapsis", "tipos"]

variables:
  tipo_comun: "quimica"

respuesta: "química"
tipo: completar

enunciado: "La mayoría de las sinapsis en el sistema nervioso humano son de tipo {tipo_comun}."

explicacion: |
  Aunque existen sinapsis eléctricas, la gran mayoría de la comunicación neuronal en humanos es química, mediada por neurotransmisores.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["funcion", "vital"]

variables:
  tarea: "mantener"

respuesta: "mantener"
tipo: completar

enunciado: "El sistema nervioso ayuda a {tarea} funciones vitales como la respiración."

explicacion: |
  El sistema nervioso autónomo regula funciones involuntarias como la respiración, el ritmo cardíaco y la digestión.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["terminal", "emision"]

variables:
  destino: "otras_celulas"

respuesta: "terminales"
tipo: completar

enunciado: "El axón termina en {destino} para enviar el mensaje."

explicacion: |
  Las terminales sinápticas (botones terminales) son las puntas del axón donde se almacenan y liberan los neurotransmisores.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["plasticidad", "sinapsis"]

variables:
  proceso: "aprender"

respuesta: "sinapsis"
tipo: completar

enunciado: "Entender cómo trabajan juntas las neuronas y su {proceso} es clave para comprender el aprendizaje."

explicacion: |
  La plasticidad sináptica (cambio en la fuerza de la sinapsis) es la base celular del aprendizaje y la memoria.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "basico"
  tags: ["dendrita", "forma"]

variables:
  forma: "ramificada"

respuesta: "dendritas"
tipo: completar

enunciado: "Las {forma} son prolongaciones cortas y ramificadas."

explicacion: |
  La ramificación de las dendritas aumenta la superficie de contacto para recibir más señales de otras neuronas.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "avanzado"
  tags: ["impulso", "electrico"]

variables:
  nombre: "potencial"

respuesta: "potencial de acción"
tipo: completar

enunciado: "El impulso nervioso es también conocido como {nombre}."

explicacion: |
  El potencial de acción es la onda de despolarización que viaja por el axón, permitiendo la transmisión rápida de la señal.
```

```
metadata:
  materia: "biologia"
  tema: "sistema_nervioso_neurona_sinapsis"
  nivel: "intermedio"
  tags: ["receptor", "uniones"]

variables:
  objetivo: "receptores"

respuesta: "receptores"
tipo: completar

enunciado: "Los neurotransmisores se unen a {objetivo} en la membrana de la siguiente neurona."

explicacion: |
  Los receptores específicos en la membrana postsináptica detectan los neurotransmisores y generan la respuesta celular correspondiente.
```

## Sección: sistemas-cuerpo-humano (22 preguntas)

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["organizacion", "biologia_celular"]

respuesta: verdadero
tipo: vf

enunciado: "El orden de los niveles de organización biológica, desde lo más pequeño a lo más grande, es: célula, tejido, órgano, sistema y organismo."

explicacion: |
  Correcto. La jerarquía biológica comienza con la unidad básica de la vida (célula) y se va complejizando mediante la agrupación de sus componentes.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["tejido", "celulas"]

respuesta: verdadero
tipo: vf

enunciado: "Un tejido se define como un grupo de células similares que trabajan juntas para cumplir una misma función."

explicacion: |
  Exacto. La especialización de las células permite que se agrupen en tejidos con funciones específicas (epitelial, muscular, nervioso, conectivo).
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["organo", "celula"]

respuesta: falso
tipo: vf

enunciado: "Un órgano es una estructura biológica compuesta por una sola célula altamente especializada."

explicacion: |
  Falso. Un órgano es una estructura compleja formada por la integración de diversos tejidos que colaboran para una función determinada.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "intermedio"
  tags: ["corazon", "tejidos"]

respuesta: verdadero
tipo: vf

enunciado: "El corazón es un órgano que combina tejidos muscular, nervioso y conectivo para cumplir su función de bombeo."

explicacion: |
  Verdadero. Para funcionar, el corazón requiere tejido muscular (miocardio), tejido nervioso (para la conducción eléctrica) y tejido conectivo (válvulas y estructura).
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "intermedio"
  tags: ["organizacion", "definiciones"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["tejido", "grupo de celulas similares con la misma funcion"], ["organo", "combinacion de distintos tejidos con un proposito"], ["sistema", "conjunto de organos que colaboran en una funcion general"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["grupo de celulas similares con la misma funcion", "combinacion de distintos tejidos con un proposito", "conjunto de organos que colaboran en una funcion general"]

enunciado: "Identifica la definición correcta para el nivel de organización: {datos[idx][0]}"

explicacion: |
  La respuesta correcta corresponde a la definición del nivel seleccionado en este intento.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistemas", "fisiologia"]

variables:
  idx: uno_de([0, 1, 2, 3])
  escenario: [["digestivo", "descomponer alimento y absorber nutrientes"], ["respiratorio", "intercambio de gases oxigeno y dioxido de carbono"], ["circulatorio", "transportar sangre, nutrientes y gases"], ["nervioso", "recibir y procesar informacion, controlar el cuerpo"]]

opciones_explicitas: ["descomponer alimento y absorber nutrientes", "intercambio de gases oxigeno y dioxido de carbono", "transportar sangre, nutrientes y gases", "recibir y procesar informacion, controlar el cuerpo"]

respuesta: escenario[idx][1]
tipo: mc

enunciado: "La función principal del sistema {escenario[idx][0]} es: ___"

explicacion: |
  El sistema seleccionado es el {escenario[idx][0]}, cuya función es {escenario[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["respiratorio", "gases"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema respiratorio se encarga del intercambio de gases entre el cuerpo y el aire."

explicacion: |
  Verdadero. El sistema respiratorio permite la entrada de oxígeno y la eliminación de dióxido de carbono.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["circulatorio", "sangre"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema circulatorio transporta sangre por todo el cuerpo."

explicacion: |
  Verdadero. A través de la sangre, el sistema circulatorio distribuye nutrientes y oxígeno a todas las células.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["digestivo", "nervioso"]

respuesta: falso
tipo: vf

enunciado: "El sistema digestivo se encarga de procesar información nerviosa."

explicacion: |
  Falso. El procesamiento de la información nerviosa es función del sistema nervioso; el digestivo se encarga de la nutrición.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistemas", "anatomia"]

variables:
  escenario: [["oseo", "huesos"], ["muscular", "musculos"], ["excretor", "riñones"], ["endocrino", "tiroides o pancreas"]]
  idx: uno_de([0, 1, 2, 3])
  sistema_actual: escenario[idx][0]
  organo_correcto: escenario[idx][1]

tipo: mc
opciones_explicitas: ["huesos", "musculos", "riñones", "tiroides o pancreas"]

enunciado: "El sistema {sistema_actual} tiene como órgano clave a los ___."

respuesta: organo_correcto
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistema_oseo", "funciones"]

tipo: vf

enunciado: "El sistema óseo cumple la función de sostén y protección."

respuesta: verdadero
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistema_muscular", "movimiento"]

tipo: vf

enunciado: "El sistema muscular es responsable del movimiento del cuerpo."

respuesta: verdadero
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistema_excretor", "riñones"]

tipo: vf

enunciado: "El sistema excretor filtra y elimina desechos, teniendo a los riñones como órgano clave."

respuesta: verdadero
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["integracion", "sistemas"]

respuesta: verdadero
tipo: vf

enunciado: "Ningún sistema del cuerpo humano trabaja de forma completamente aislada; todos funcionan de manera coordinada."

explicacion: |
  El cuerpo humano es un sistema complejo donde la interacción entre órganos y sistemas es fundamental para mantener la homeostasis.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "intermedio"
  tags: ["musculo", "nervioso", "circulatorio"]

respuesta: verdadero
tipo: vf

enunciado: "Para que un músculo realice un movimiento, es necesaria la señal eléctrica proveniente del sistema nervioso y el suministro de oxígeno transportado por el sistema circulatorio."

explicacion: |
  El sistema nervioso envía el impulso para la contracción, mientras que el sistema circulatorio provee el oxígeno necesario para el metabolismo celular muscular.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["especializacion", "integracion"]

respuesta: falso
tipo: vf

enunciado: "La especialización de cada sistema (digestivo, excretor, nervioso, etc.) significa que sus funciones son completamente independientes entre sí."

explicacion: |
  Aunque cada sistema tiene funciones especializadas, todos están integrados. La especialización permite la eficiencia, pero la interdependencia es necesaria para la vida.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["respiratorio", "circulatorio"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema respiratorio es el encargado de capturar el oxígeno del medio externo, el cual es posteriormente transportado por la sangre a través del sistema circulatorio."

explicacion: |
  Existe una dependencia directa: el sistema respiratorio realiza el intercambio gaseoso en los alvéolos y el sistema circulatorio actúa como el vehículo de distribución.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["homeostasis", "equilibrio"]

respuesta: verdadero
tipo: vf

enunciado: "La homeostasis es el equilibrio interno del cuerpo (temperatura, pH, azúcar en sangre), aunque el ambiente externo cambie."

explicacion: |
  La homeostasis es el proceso mediante el cual los organismos mantienen un ambiente interno estable a pesar de las variaciones en el entorno.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["homeostasis", "sistemas"]

respuesta: verdadero
tipo: vf

enunciado: "Todos los sistemas del cuerpo, en conjunto, trabajan para mantener la homeostasis."

explicacion: |
  La homeostasis no depende de un solo órgano, sino de la interacción coordinada de múltiples sistemas (nervioso, endocrino, excretor, etc.).
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistema_inmunitario", "defensa"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema inmunitario se encarga de la defensa del organismo contra patógenos."

explicacion: |
  El sistema inmunitario identifica y destruye agentes extraños como bacterias, virus y parásitos para proteger al cuerpo.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["sistema_reproductor", "reproduccion"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema reproductor tiene como función principal la producción de descendencia para asegurar la supervivencia de la especie."

explicacion: |
  A diferencia de otros sistemas que mantienen la vida del individuo, el sistema reproductor permite la continuidad de la vida a nivel poblacional.
```

```
metadata:
  materia: "biologia"
  tema: "sistemas_cuerpo_humano"
  nivel: "basico"
  tags: ["homeostasis", "completar"]

respuesta: "homeostasis"
tipo: completar
respuestas_validas: ["homeostasis"]

enunciado: "El equilibrio interno del cuerpo que se mantiene aunque el ambiente externo cambie se llama ___."

explicacion: |
  El término correcto es homeostasis, que proviene del griego 'homoios' (similar) y 'stasis' (estabilidad).
```

## Sección: transgenicos-bioetica (23 preguntas)

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["genetica", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "Un organismo transgénico tiene en su ADN un gen de otra especie, insertado artificialmente."

explicacion: |
  Correcto, mediante ingeniería genética.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["siglas"]

respuesta: verdadero
tipo: vf

enunciado: "La sigla OGM significa Organismo Genéticamente Modificado."

explicacion: |
  Correcto, es el término técnico general.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["genetica"]

respuesta: falso
tipo: vf

enunciado: "La transferencia de genes entre especies muy distintas ocurre naturalmente todo el tiempo, sin intervención humana."

explicacion: |
  Falso. Es extremadamente rara entre especies complejas muy distintas, aunque existen mecanismos naturales de transferencia horizontal en bacterias.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["terminologia"]

respuesta: "transgenico"
tipo: completar
respuestas_validas: ["transgenico"]

enunciado: "Un organismo con un gen de otra especie insertado se llama organismo ___."

explicacion: |
  Se llama transgénico.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["biotecnologia", "ejemplos"]

variables:
  datos: [["soja resistente a herbicidas", "tiene un gen bacteriano que la hace tolerante a un herbicida"], ["maiz Bt", "tiene un gen bacteriano que fabrica una proteina toxica para ciertos insectos"], ["arroz dorado", "modificado para producir betacaroteno, precursor de vitamina A"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["tiene un gen bacteriano que la hace tolerante a un herbicida", "tiene un gen bacteriano que fabrica una proteina toxica para ciertos insectos", "modificado para producir betacaroteno, precursor de vitamina A"]

enunciado: "¿Cuál es la característica principal de: {datos[idx][0]}?"

explicacion: |
  {datos[idx][0]}: {datos[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["maiz_bt"]

respuesta: verdadero
tipo: vf

enunciado: "El maíz Bt reduce la necesidad de fumigar con insecticida, porque el mismo maíz fabrica una toxina contra ciertas plagas."

explicacion: |
  Correcto.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["arroz_dorado"]

respuesta: verdadero
tipo: vf

enunciado: "El arroz dorado busca reducir la deficiencia de vitamina A en zonas donde el arroz es alimento base."

explicacion: |
  Correcto.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["argumentos_favor"]

respuesta: verdadero
tipo: vf

enunciado: "Un argumento a favor de los transgénicos es el mayor rendimiento de cultivo, con menos pérdida por plagas o malezas."

explicacion: |
  Correcto, ese es uno de los argumentos técnico-económicos.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["argumentos_favor"]

respuesta: verdadero
tipo: vf

enunciado: "El maíz Bt es un ejemplo de menos uso de insecticidas gracias a la modificación genética."

explicacion: |
  Correcto.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["argumentos_favor"]

respuesta: verdadero
tipo: vf

enunciado: "El arroz dorado es un ejemplo de fortificar alimentos contra una deficiencia nutricional específica."

explicacion: |
  Correcto.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["debate"]

respuesta: falso
tipo: vf

enunciado: "No existe ningún argumento a favor de los transgénicos, sólo argumentos en contra."

explicacion: |
  Falso, hay argumentos de ambos lados.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["argumentos_contra"]

respuesta: verdadero
tipo: vf

enunciado: "Una preocupación sobre los transgénicos es el posible impacto en la biodiversidad (cruzamiento con especies silvestres)."

explicacion: |
  Correcto, es una preocupación ecológica real.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["argumentos_contra"]

respuesta: verdadero
tipo: vf

enunciado: "Otra preocupación es la concentración del mercado de semillas en pocas empresas."

explicacion: |
  Correcto, por patentes y propiedad intelectual.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["argumentos_contra"]

respuesta: verdadero
tipo: vf

enunciado: "Hay incertidumbre sobre efectos de largo plazo de algunos transgénicos, todavía en discusión científica."

explicacion: |
  Correcto, requiere monitoreo continuo.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["debate"]

respuesta: falso
tipo: vf

enunciado: "Todos los científicos están completamente de acuerdo en todos los aspectos de los transgénicos, sin ningún debate."

explicacion: |
  Falso, hay debate científico y social real sobre regulación e impactos.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "La pregunta 'se puede hacer un transgénico' técnicamente ya está resuelta hace décadas."

explicacion: |
  Correcto, la capacidad técnica es una realidad consolidada.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["bioetica"]

respuesta: verdadero
tipo: vf

enunciado: "La pregunta bioética es distinta de la técnica: 'se debería, y bajo qué condiciones'."

explicacion: |
  Correcto, va del "poder" técnico al "deber" moral.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["etica"]

respuesta: "utilitarismo"
tipo: mc
opciones_explicitas: ["utilitarismo", "deontologia", "etica de la virtud", "contractualismo"]

enunciado: "¿Qué corriente ética pregunta si el resultado neto es positivo?"

explicacion: |
  El utilitarismo evalúa el resultado neto de bienestar.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "avanzado"
  tags: ["etica"]

respuesta: verdadero
tipo: vf

enunciado: "La deontología pregunta si hay un deber o derecho que se viola, independientemente del resultado."

explicacion: |
  Correcto, se centra en la acción, no en el resultado.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["etica"]

variables:
  escenario: [["utilitarismo", "el resultado neto es positivo?"], ["deontologia", "hay un deber o derecho que se viola?"], ["etica de la virtud", "que haria una persona virtuosa?"], ["contractualismo", "a que acordarian personas racionales en un contrato justo?"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["el resultado neto es positivo?", "hay un deber o derecho que se viola?", "que haria una persona virtuosa?", "a que acordarian personas racionales en un contrato justo?"]

enunciado: "¿Cuál es la pregunta central de la corriente {escenario[idx][0]}?"

explicacion: |
  {escenario[idx][0]} pregunta: {escenario[idx][1]}.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["genetica"]

respuesta: verdadero
tipo: vf

enunciado: "Los transgénicos son la aplicación práctica del ADN recombinante y la tecnología CRISPR."

explicacion: |
  Correcto — ver ../biotecnologia-pcr-crispr/.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "intermedio"
  tags: ["bioetica"]

respuesta: falso
tipo: vf

enunciado: "El debate bioético sobre transgénicos se resuelve completamente con datos técnicos, sin necesitar ninguna corriente filosófica."

explicacion: |
  Falso. Involucra juicios de valor, no sólo ciencia.
```

```
metadata:
  materia: "biologia"
  tema: "transgenicos_bioetica"
  nivel: "basico"
  tags: ["bioetica"]

respuesta: verdadero
tipo: vf

enunciado: "Distintas personas pueden llegar a distintas conclusiones sobre los transgénicos según qué corriente ética prioricen."

explicacion: |
  Correcto, distintos criterios de "bueno" o "justo" dan conclusiones distintas.
```
