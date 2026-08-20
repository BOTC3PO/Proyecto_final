# Examen jefe — De Big Bang a Perón

> Logro #115. Completaste este examen jefe abarcando desde el origen del universo hasta la historia social argentina. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **124 preguntas totales** en 5/5 secciones.

---

## Sección: origen-de-la-vida (24 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["abiogenesis", "hipotesis_oparin"]

enunciado: "Según la hipótesis de Oparin y Haldane, la atmósfera primitiva de la Tierra carecía de ciertos gases que hoy son comunes. ¿Cuál de los siguientes gases NO formaba parte de esa atmósfera reductora?"

opciones_explicitas: ["Metano", "Amoníaco", "Oxígeno", "Hidrógeno"]
respuesta: "Oxígeno"
tipo: "mc"

explicacion: |
  La atmósfera primitiva era reductora y carecía de oxígeno libre (O2), ya que este solo apareció masivamente después de la fotosíntesis oxigénica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["miller_urey", "aminoacidos"]

variables:
  idx: uno_de([0,1])

enunciado: "En el famoso experimento de Miller y Urey, se simularon las condiciones de la Tierra primitiva mediante descargas eléctricas. El resultado principal fue la formación de {datos[idx][0]} a partir de sustancias inorgánicas."

variables:
  datos: [["aminoácidos", "aminoácidos"], ["nucleótidos", "nucleótidos"]]
  idx: uno_de([0,1])

respuesta: "aminoácidos"
tipo: "mc"
opciones_explicitas: ["aminoácidos", "nucleótidos"]

explicacion: |
  El experimento demostró que la síntesis de moléculas orgánicas simples como los aminoácidos es posible a partir de gases inorgánicos y energía.
```

```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["rna_world", "genetica"]

enunciado: "La hipótesis del 'Mundo del ARN' sugiere que antes de la aparición del ADN y las proteínas, el ___ cumplía la función de almacenar información genética y catalizar reacciones químicas."

respuestas_validas: ["ARN"]
respuesta: "ARN"
tipo: "completar"

explicacion: |
  Se cree que el ARN fue la primera molécula autorreplicante debido a su capacidad de actuar tanto como material genético como enzima (ribozimas).
```

```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["evolucion_quimica", "orden"]

enunciado: "Ordena correctamente los procesos de la evolución química, desde la materia más simple hasta la vida:"

opciones_explicitas: ["Moléculas inorgánicas", "Monómeros orgánicos", "Polímeros complejos", "Protobiontes"]
respuesta: ["Moléculas inorgánicas", "Monómeros orgánicos", "Polímeros complejos", "Protobiontes"]
tipo: "ordenar"

explicacion: |
  La evolución química implica un aumento gradual de la complejidad: de átomos y gases a moléculas pequeñas, luego cadenas largas y finalmente estructuras con membrana.
```

```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["quimiosintesis", "metabolismo"]

variables:
  escenario: uno_de([0,1])

enunciado: "En las fuentes hidrotermales del fondo oceánico, la vida pudo haber comenzado mediante un proceso de ___ que utilizaba la energía química de los minerales."

variables:
  escenario: uno_de([0,1])
  opciones: [["quimiosíntesis", "fotosíntesis"], ["quimiosíntesis", "fotosíntesis"]]

respuestas_validas: ["quimiosíntesis"]
respuesta: "quimiosíntesis"
tipo: "completar"

explicacion: |
  Antes de la fotosíntesis, los primeros organismos probablemente obtenían energía de las reacciones redox de compuestos inorgánicos en las chimeneas hidrotermales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["miller_urey", "sopa_primordial"]

respuesta: "Miller-Urey"
tipo: completar
respuestas_validas: ["Miller-Urey", "Miller-Urey"]

enunciado: "El experimento diseñado para probar la hipótesis de la 'sopa primordial' en charcos superficiales fue el de ___."

explicacion: |
  El experimento de Miller-Urey (1953) demostró que se podían formar moléculas orgánicas simples (aminoácidos) a partir de gases inorgánicos mediante descargas eléctricas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["fuentes_hidrotermales", "quimiosintesis"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [["charcos superficiales", "exposición a radiación UV"], ["fuentes hidrotermales", "protección de la radiación UV"]]

respuesta: escenario[escenario_idx][1
tipo: mc
opciones_explicitas: ["exposición a radiación UV", "protección de la radiación UV", "alta radiación solar", "ausencia de calor"]

enunciado: "A diferencia de la hipótesis de la sopa primordial, la teoría de las fuentes hidrotermales sugiere que la vida pudo originarse en el fondo oceánico debido a la {escenario[escenario_idx][0]}."

explicacion: |
  Las fuentes hidrotermales ofrecen un ambiente protegido de la radiación UV superficial y proporcionan gradientes térmicos y químicos esenciales para la síntesis de moléculas complejas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["hipotesis", "comparacion"]

respuesta: "quimiosintesis"
tipo: completar
respuestas_validas: ["quimiosintesis", "quimiosintesis"]

enunciado: "Mientras que la sopa primordial se basa en la energía solar y descargas, las fuentes hidrotermales proponen un metabolismo basado en la ___."

explicacion: |
  En las fuentes hidrotermales, la energía proviene de las reacciones químicas entre los fluidos alcalinos y el agua de mar, un proceso conocido como quimiosíntesis.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["miller_urey", "moléculas"]

respuesta: ["Metano", "Amoníaco", "Hidrógeno", "Agua"]
tipo: ordenar
opciones_explicitas: ["Metano", "Amoníaco", "Hidrógeno", "Agua"]

enunciado: "Ordene los componentes gaseosos y líquidos que se utilizaron en el aparato de Miller-Urey para simular la atmósfera y el océano primitivo:"

explicacion: |
  El experimento utilizó una mezcla de metano (CH4), amoníaco (NH3), hidrógeno (H2) y vapor de agua (H2O) para simular las condiciones de la Tierra primitiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["energia", "hipotesis"]

variables:
  tipo_energia_idx: uno_de([0, 1])
  tipo_energia: [["descargas eléctricas"], ["gradientes térmicos"]]

respuesta: tipo_energia[tipo_energia_idx][0
tipo: mc
opciones_explicitas: ["descargas eléctricas", "gradientes térmicos", "radiación gamma", "energía cinética"]

enunciado: "En el modelo de la sopa primordial, el motor energético para la síntesis de moléculas orgánicas es la {tipo_energia[tipo_energia_idx][0]}."

explicacion: |
  En el modelo de Miller-Urey, las descargas eléctricas (simulando rayos) proporcionan la energía necesaria para romper los enlaces de los gases y formar nuevas moléculas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["biologia", "evolucion", "luca"]

tipo: mc
opciones_explicitas: ["Un organismo pluricelular complejo", "El último ancestro común de todos los organismos actuales", "Un organismo que vivió solo en la atmósfera", "La primera célula que apareció en la Tierra"]

enunciado: "El término LUCA hace referencia a un concepto fundamental en la biología evolutiva. ¿Qué significa exactamente?"

explicacion: |
  LUCA (Last Universal Common Ancestor) no fue el primer ser vivo, sino el ancestro común más reciente del cual descendieron todas las formas de vida actuales (Arqueas, Bacterias y Eucariotas).
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["biologia", "bioquimica"]

variables:
  escenario: uno_de([["metabolismo_quimiosintetico", "quimiosíntesis"], ["fotosintesis", "fotosíntesis"]])

tipo: completar
respuestas_validas: ["quimiosíntesis", "fotosíntesis"]
respuesta: escenario[0][1

enunciado: "Se postula que LUCA habitaba en entornos extremos, como fuentes hidrotermales, y que su principal fuente de energía era la ___."

explicacion: |
  Debido a la ausencia de oxígeno en la Tierra primitiva, se cree que LUCA dependía de procesos químicos inorgánicos (quimiosíntesis) para obtener energía, antes de la aparición de la fotosíntesis.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["filogenia", "evolucion"]

tipo: ordenar
opciones_explicitas: ["LUCA", "Primeras células procariotas", "Células eucariotas", "Organismos pluricelulares"]

enunciado: "Ordena cronológicamente estos hitos evolutivos, desde el ancestro común hasta la complejidad actual:"

explicacion: |
  La evolución biológica siguió una progresión desde un ancestro común unicelular, pasando por la especialización procariota y eucariota, hasta la complejidad de la pluricelularidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["genetica", "adn"]

variables:
  mol_idx: uno_de([0, 1])
  mol_datos: [["ATP", "energía celular"], ["ADN", "información genética"]]

tipo: mc
opciones_explicitas: ["El uso de " + "ATP" + " como moneda energética", "La presencia de " + "ADN" + " como almacén de información", "La capacidad de realizar " + "fotosíntesis" + " en la superficie", "La existencia de " + "núcleo" + " celular"]

enunciado: "La existencia de {mol_datos[mol_idx][0]} en todos los dominios de la vida es una evidencia clave de que todos los seres vivos comparten un ancestro común."

explicacion: |
  El hecho de que todos los seres vivos utilicen la misma molécula para almacenar información genética (ADN/ARN) y la misma para transferir energía (ATP) es la prueba más fuerte de un origen común.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["bioquimica", "evolucion"]

tipo: mc
opciones_explicitas: ["Almacenar información genética y actuar como catalizador", "Solo almacenar información genética", "Solo actuar como catalizador enzimático", "Transportar aminoácidos a los ribosomas"]

enunciado: "La hipótesis del 'mundo de ARN' sugiere que esta molécula fue clave en el origen de la vida debido a que puede ___."

explicacion: |
  El ARN es una molécula versátil que puede realizar dos funciones críticas: almacenar la información genética (como el ADN) y actuar como una enzima (ribozima) para catalizar reacciones químicas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["adn", "arn", "proteinas"]

tipo: completar
respuestas_validas: ["ADN", "proteínas"]

enunciado: "En la hipótesis del mundo de ARN, se postula que el ARN precedió tanto al ___ como a las ___ en la evolución biológica."

explicacion: |
  Se cree que el ARN fue la molécula central antes de que el ADN se especializara en el almacenamiento de información a largo plazo y las proteínas en la catálisis estructural y funcional.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["ribozima", "catalisis"]

tipo: mc
opciones_explicitas: ["Capacidad de catalizar reacciones químicas", "Capacidad de replicarse sin proteínas", "Capacidad de formar dobles hélices estables", "Capacidad de almacenar aminoácidos"]

enunciado: "Una de las propiedades fundamentales que permite al ARN ser el protagonista del 'mundo de ARN' es su capacidad de actuar como una ___."

explicacion: |
  Las ribozimas son moléculas de ARN con actividad catalítica, lo que permite que el ARN pueda acelerar reacciones químicas sin necesidad de proteínas.
```

```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["evolucion", "secuencia"]

tipo: ordenar
opciones_explicitas: ["ARN", "ADN", "Proteínas"]

enunciado: "Según la hipótesis del mundo de ARN, ¿cuál sería el orden evolutivo más probable de las macromoléculas funcionales?"

explicacion: |
  El ARN habría servido como la molécula 'todo en uno' que permitió la aparición de la autorreplicación, antes de la especialización funcional del ADN y las proteínas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["paradoja", "evolucion"]

variables:
  escenario: uno_de([[1, "necesidad de una plantilla"], [2, "necesidad de un catalizador"]])

tipo: mc
opciones_explicitas: ["La estabilidad del ADN", "La velocidad de la proteína", "La dualidad funcional del ARN", "La complejidad del núcleo"]

enunciado: "El 'dilema de la replicación' se resuelve con el ARN porque este puede resolver la {escenario} mediante su estructura química."

explicacion: |
  Si el escenario es la necesidad de una plantilla, el ARN sirve como molde. Si es la necesidad de un catalizador, el ARN actúa como enzima. Esto permite que la vida comience sin depender de un sistema complejo de tres moléculas distintas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["quimica_prebiotica", "experimento", "miller_urey"]

variables:
  escenario: [[["metano", "amoniaco", "hidrogeno", "vapor de agua"], "aminoácidos"], [["metano", "amoniaco", "hidrogeno", "vapor de agua"], "azúcares"], [["metano", "amoniaco", "hidrogeno", "vapor de agua"], "lípidos"]]
  idx: uno_de([0,1,2])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["aminoácidos", "azúcares", "lípidos"]

enunciado: "En el experimento de Miller-Urey, al aplicar descargas eléctricas a una mezcla de gases que simulaba la atmósfera primitiva, se obtuvo como producto principal la formación de ___."

explicacion: |
  El experimento demostró que la síntesis abiótica de moléculas orgánicas (como los aminoácidos) era posible bajo las condiciones atmosféricas propuestas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["atmosfera", "gases"]

variables:
  gas_principal: ["metano", "oxígeno", "nitrógeno"]
  idx: uno_de([0,1,2])

respuesta: gas_principal[idx
tipo: mc
opciones_explicitas: ["metano", "oxígeno", "nitrógeno"]

enunciado: "Según el modelo de Miller-Urey, la atmósfera primitiva era rica en gases reductores. ¿Cuál de estos gases era uno de los componentes fundamentales en su montaje experimental?"

explicacion: |
  Miller utilizó metano (CH4), amoníaco (NH3), hidrógeno (H2) y vapor de agua (H2O) para simular la atmósfera reductora.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["energia", "descarga"]

variables:
  fuente: ["descargas eléctricas", "radiación solar", "calor volcánico"]
  idx: uno_de([0,1,2])

respuesta: fuente[idx
tipo: completar
respuestas_validas: ["descargas eléctricas", "radiación solar", "calor volcánico"]

enunciado: "Para simular la energía disponible en la atmósfera primitiva, el aparato de Miller utilizó ___ entre los gases."

explicacion: |
  Las descargas eléctricas simulaban la actividad de los rayos durante las tormentas en la Tierra primitiva.
```

```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["ciclo_del_agua", "condensación"]

variables:
  proceso: [["condensación", "evaporación"], ["condensación", "sublimación"], ["condensación", "fusión"]]
  idx: uno_de([0,1,2])

respuesta: proceso[idx][0
tipo: mc
opciones_explicitas: ["condensación", "evaporación", "sublimación", "fusión"]

enunciado: "En el montaje, el vapor de agua se enfriaba para que los compuestos orgánicos formados se disolvieran en el líquido. Este proceso físico es la ___."

explicacion: |
  El enfriamiento del vapor permite la condensación, permitiendo que las moléculas orgánicas se concentren en la fase líquida.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["montaje", "componentes"]

variables:
  orden: [["gases", "descargas", "condensación"], ["gases", "condensación", "descargas"], ["condensación", "gases", "descargas"]]
  idx: uno_de([0,1,2])

respuesta: orden[idx
tipo: ordenar
opciones_explicitas: ["gases", "descargas", "condensación"]

enunciado: "Ordena los elementos o procesos según el flujo lógico de la síntesis química en el experimento de Miller: primero los ___; luego las ___; y finalmente la ___ de los productos."

explicacion: |
  El experimento requiere primero la mezcla de gases, luego la aplicación de energía (descargas) y finalmente la recuperación de productos mediante condensación.
```

## Sección: origen-del-universo (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "basico"
  tags: ["conceptos_clave", "espacio_tiempo"]

tipo: completar

enunciado: "Una idea errónea común es que el Big Bang fue una explosión de materia en un espacio vacío preexistente. Sin embargo, la teoría científica actual establece que el Big Bang fue la expansión del propio ___."

respuestas_validas: ["espacio-tiempo", "espacio y tiempo"]

respuesta: "espacio-tiempo"

explicacion: |
  El Big Bang no fue una explosión de materia en un lugar, sino el estiramiento del tejido mismo del espacio y el tiempo. No hubo un "punto" en el espacio que explotara, sino que el espacio mismo comenzó a expandirse.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "intermedio"
  tags: ["geometria_universo", "expansion"]

tipo: completar

enunciado: "Dado que el Big Bang fue una expansión del espacio-tiempo en todos los puntos simultáneamente, el universo ___ tiene un centro único o un punto de origen espacial."

respuestas_validas: ["no", "no posee"]

respuesta: "no"

explicacion: |
  Como el espacio se expande en todas direcciones al mismo tiempo, no hay un punto central desde donde todo se aleja. Cualquier punto en el universo puede considerarse un centro de expansión, pero no existe un "centro absoluto".
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "avanzado"
  tags: ["cosmologia", "dimensiones"]

tipo: completar

enunciado: "Si el Big Bang creó el espacio-tiempo, esto implica que el universo no se está expandiendo hacia un espacio vacío que ya existía, por lo tanto, no existe un ___ que el universo esté ocupando."

respuestas_validas: ["afuera", "exterior"]

respuesta: "afuera"

explicacion: |
  Al ser el espacio-tiempo algo que surge y se expande, no hay un "contenedor" externo. El concepto de "afuera" requiere una dimensión espacial preexistente que la teoría del Big Bang no contempla.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "basico"
  tags: ["analogias", "expansion"]

tipo: completar

enunciado: "Para entender que el espacio se estira, se suele usar la analogía de la superficie de un globo que se infla. En este modelo, las galaxias se alejan entre sí porque el ___ entre ellas aumenta, no porque se desplacen por un espacio vacío."

respuestas_validas: ["espacio", "distancia"]

respuesta: "espacio"

explicacion: |
  En la analogía del globo, la superficie representa el espacio-tiempo. Al inflar el globo, la superficie se estira, aumentando la distancia entre puntos, tal como sucede con el universo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "intermedio"
  tags: ["tiempo", "causalidad"]

tipo: completar

enunciado: "Si el Big Bang marca el inicio del espacio-tiempo, esto significa que el ___ no existía antes de este evento, invalidando la idea de un 'antes' en términos temporales clásicos."

respuestas_validas: ["tiempo"]

respuesta: "tiempo"

explicacion: |
  Si el tiempo es una dimensión que surgió con el Big Bang, preguntar qué hubo "antes" es como preguntar qué hay al norte del Polo Norte; la pregunta carece de sentido físico porque la dimensión temporal no existía.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "basico"
  tags: ["big_bang", "expansion"]

tipo: mc
opciones_explicitas: ["Una contracción inmediata", "Una expansión extremadamente rápida", "Un estado estático sin cambios", "Un enfriamiento instantáneo sin movimiento"]
respuesta: "Una expansión extremadamente rápida"

enunciado: "Inmediatamente después del Big Bang, el universo experimentó un proceso conocido como inflación, que consistió en una ___."

explicacion: |
  La inflación es el período de expansión exponencial que ocurrió en las fracciones de segundo iniciales, permitiendo que el universo se volviera homogéneo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "basico"
  tags: ["particulas", "temperatura"]

tipo: completar
respuestas_validas: ["enfriamiento"]
respuesta: "enfriamiento"

enunciado: "A medida que el universo se expandía tras el Big Bang, la temperatura descendía, permitiendo el ___ del cosmos y la formación de estructuras."

explicacion: |
  La expansión del espacio provoca que la densidad de energía disminuya, lo que se traduce en un descenso de la temperatura cósmica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "intermedio"
  tags: ["particulas", "subatomicas"]

tipo: mc
opciones_explicitas: ["Átomos de carbono", "Partículas subatómicas como protones y neutrones", "Moléculas de agua", "Planetas rocosos"]
respuesta: "Partículas subatómicas como protones y neutrones"

enunciado: "Antes de que existieran los átomos, el universo estaba compuesto por un plasma de partículas elementales. ¿Cuál de estas apareció tras el enfriamiento inicial?"

explicacion: |
  Antes de la formación de átomos neutros, el universo era una "sopa" de partículas subatómicas como protones, neutrones y electrones.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "intermedio"
  tags: ["elementos", "hidrogeno"]

tipo: mc
opciones_explicitas: ["Sólo Helio", "Sólo Oxígeno", "Hidrógeno y Helio", "Hierro y Carbono"]
respuesta: "Hidrógeno y Helio"

enunciado: "Durante los primeros minutos del universo, la nucleosíntesis primordial permitió la formación de los primeros elementos químicos. ¿Cuáles fueron los principales?"

explicacion: |
  La abundancia de elementos en el universo temprano estaba compuesta mayoritariamente por hidrógeno (aprox. 75%) y helio (aprox. 25%).
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "basico"
  tags: ["estrellas", "galaxias"]

tipo: completar
respuestas_validas: ["estrellas"]
respuesta: "estrellas"

enunciado: "Mucho tiempo después de la formación de los primeros átomos, la gravedad agrupó las nubes de gas para dar origen a las primeras ___."

explicacion: |
  La gravedad actuó sobre las densidades de gas (hidrógeno y helio) para colapsar las nubes y encender la fusión nuclear, creando las primeras estrellas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "basico"
  tags: ["big_bang", "expansión", "redshift"]

respuesta: "corrimiento al rojo"
tipo: completar
respuestas_validas: ["corrimiento al rojo"]

enunciado: "El fenómeno observado en la luz de galaxias lejanas que indica que el universo se está expandiendo se conoce como ___."

explicacion: |
  El corrimiento al rojo (redshift) ocurre cuando la luz de un objeto se desplaza hacia longitudes de onda más largas (el rojo) debido a que el espacio entre nosotros y la fuente se está expandiendo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "intermedio"
  tags: ["cmb", "radiación_fondo", "evidencia"]

respuesta: "380000"
tipo: completar
respuestas_validas: ["380000", "380.000"]

enunciado: "La Radiación Cósmica de Fondo de Microondas (CMB) se originó aproximadamente ___ años después del Big Bang, cuando el universo se volvió transparente."

explicacion: |
  Antes de este momento, el universo era un plasma opaco. Al enfriarse hasta los 380.000 años, los electrones y protones formaron átomos neutros, permitiendo que los fotones viajaran libremente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "intermedio"
  tags: ["elementos", "hidrógeno", "helio"]

respuesta: "hidrógeno"
tipo: completar
respuestas_validas: ["hidrógeno", "hidrogeno"]

enunciado: "Según el modelo del Big Bang, el elemento más abundante creado en las primeras etapas del universo (junto con el helio) fue el ___."

explicacion: |
  La nucleosíntesis primordial predice una abundancia de aproximadamente 75% de hidrógeno y 25% de helio, lo cual coincide con las observaciones astronómicas actuales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "basico"
  tags: ["redshift", "luz"]

respuesta: "rojo"
tipo: completar
respuestas_validas: ["rojo"]

enunciado: "Cuando una galaxia se aleja de un observador, la luz que emite se desplaza hacia el extremo ___ del espectro electromagnético."

explicacion: |
  Este desplazamiento hacia longitudes de onda mayores es la base para medir la velocidad de recesión de las galaxias y confirmar la expansión cósmica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "avanzado"
  tags: ["cmb", "evidencia", "microondas"]

respuesta: "radiación cósmica de fondo de microondas"
tipo: completar
respuestas_validas: ["radiación cósmica de fondo de microondas", "radiación de fondo"]

enunciado: "La evidencia que consiste en un resplandor térmico que llena todo el universo y es un 'eco' del Big Bang se denomina ___."

explicacion: |
  La radiación cósmica de fondo de microondas es la prueba más sólida del estado caliente y denso que tuvo el universo en sus inicios.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "basico"
  tags: ["fred_hoyle", "terminologia"]

opciones_explicitas: ["Un término descriptivo científico", "Un término despectivo usado para burlarse", "Un nombre propuesto por Einstein", "Un nombre acuñado por la NASA"]

respuesta: "Un término despectivo usado para burlarse"
tipo: mc

enunciado: "El término 'Big Bang' no fue acuñado para describir el evento de forma neutral, sino que fue propuesto por el astrónomo Fred Hoyle con una intención de burlarse de la teoría de la expansión. ¿Cuál era la intención de la expresión?"

explicacion: |
  Fred Hoyle, defensor de la teoría del Estado Estacionario, utilizó el término 'Big Bang' durante una transmisión de radio en 1949 para ridiculizar la idea de una singularidad inicial, considerándola poco científica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "intermedio"
  tags: ["acustica", "vacio"]

opciones_explicitas: ["Sí, fue una explosión sonora masiva", "No, porque en el vacío no se propaga el sonido", "Sí, debido a la liberación de energía", "No, porque el universo era demasiado grande"]

respuesta: "No, porque en el vacío no se propaga el sonido"
tipo: mc

enunciado: "Desde un punto de vista físico, el nombre 'Big Bang' es engañoso respecto a la acústica del evento. ¿Por qué no hubo un sonido como el de una explosión convencional?"

explicacion: |
  El sonido requiere un medio material (como aire o agua) para propagarse a través de ondas de presión. La idea de una "explosión" implica una onda expansiva en un medio preexistente, algo que no aplica al origen del espacio-tiempo mismo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "avanzado"
  tags: ["expansion", "explosion"]

opciones_explicitas: ["Una explosión de materia en un espacio vacío", "Una expansión acelerada del propio espacio-tiempo", "Una detonación química de gases", "Un choque de galaxias"]

respuesta: "Una expansión acelerada del propio espacio-tiempo"
tipo: mc

enunciado: "El concepto de 'explosión' sugiere que algo explota 'dentro' de un espacio ya existente. Sin embargo, la cosmología moderna describe el Big Bang como una ___ del espacio mismo."

explicacion: |
  A diferencia de una bomba que expande materia en un lugar vacío, el Big Bang fue la expansión del tejido mismo del espacio-tiempo, creando el espacio y el tiempo a medida que se expandía.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "basico"
  tags: ["luz", "radiacion"]

respuesta: falso
tipo: vf

enunciado: "Es correcto afirmar que el Big Bang fue un evento visible como una explosión de luz brillante que iluminó el universo instantáneamente."

explicacion: |
  Falso. Durante los primeros instantes, el universo era un plasma opaco para la luz. La luz no pudo viajar libremente hasta que ocurrió la "recombinación" (unos 380.000 años después), liberando la radiación de fondo de microondas que detectamos hoy.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "intermedio"
  tags: ["terminologia", "historia_ciencia"]

respuesta: verdadero
tipo: vf

enunciado: "Se considera que el nombre 'Big Bang' es semánticamente engañoso para describir el proceso de expansión del universo."

explicacion: |
  Verdadero. El término sugiere un evento puntual y violento de materia en un espacio vacío, mientras que la realidad física es una expansión métrica del espacio-tiempo que no requiere un centro ni un medio de propagación para el sonido.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "basico"
  tags: ["astronomia", "evidencia"]

variables:
  idx: uno_de([0, 1])
  escenarios: [
    ["Observamos que la luz de las galaxias lejanas se desplaza hacia longitudes de onda más largas (rojas).", "corrimiento al rojo"],
    ["Observamos que las galaxias se alejan de nosotros a velocidades proporcionales a su distancia.", "corrimiento al rojo"]
  ]

opciones_explicitas: ["corrimiento al rojo", "corrimiento al azul", "estacionarismo galáctico"]

respuesta: escenarios[idx][1]
tipo: mc

enunciado: "Si un astrónomo detecta que {escenarios[idx][0]}, ¿a qué fenómeno se refiere este hallazgo?"

explicacion: |
  El corrimiento al rojo (redshift) es la evidencia fundamental de que el universo se está expandiendo, tal como predijo la Relatividad General y observó Hubble.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "intermedio"
  tags: ["cosmologia", "radiacion"]

variables:
  idx: uno_de([0, 1])
  evidencias: [
    ["un resplandor de microondas que llena todo el cielo de forma casi uniforme", "radiación de fondo de microondas"],
    ["una temperatura residual de aproximadamente 2.7 Kelvin presente en todo el espacio", "radiación de fondo de microondas"]
  ]

opciones_explicitas: ["radiación de fondo de microondas", "luz visible de estrellas", "nebulosas de gas"]

respuesta: evidencias[idx][1]
tipo: mc

enunciado: "La detección de {evidencias[idx][0]} es considerada la 'prueba reina' de que el universo tuvo un inicio caliente y denso. ¿Cómo se llama este fenómeno?"

explicacion: |
  La Radiación Cósmica de Fondo de Microondas (CMB) es la luz remanente del Big Bang, liberada cuando el universo se volvió transparente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "avanzado"
  tags: ["nucleosintesis", "elementos"]

variables:
  idx: uno_de([0, 1])
  datos: [
    ["la proporción observada de helio y deuterio en el universo temprano", "nucleosíntesis primordial"],
    ["la cantidad de helio-4 presente en las nubes de gas más antiguas", "nucleosíntesis primordial"]
  ]

opciones_explicitas: ["nucleosíntesis estelar", "nucleosíntesis primordial", "fusión de agujeros negros"]

respuesta: datos[idx][1]
tipo: mc

enunciado: "El hecho de que los niveles de {datos[idx][0]} coincidan con los modelos teóricos apoya la teoría del Big Bang. ¿Qué proceso explica esto?"

explicacion: |
  La nucleosíntesis primordial ocurrió en los primeros minutos del universo, creando los núcleos de los elementos más ligeros antes de que existieran las estrellas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "basico"
  tags: ["expansion", "espacio"]

respuesta: "expansión"
tipo: completar
respuestas_validas: ["expansión", "expansion"]

enunciado: "Según la evidencia del corrimiento al rojo, el universo no es estático, sino que se encuentra en un proceso de ___ constante."

explicacion: |
  La expansión del espacio-tiempo implica que las galaxias se separan entre sí, aumentando el volumen del universo observable.
```

```
metadata:
  materia: "historia_profunda"
  tema: "origen_del_universo"
  nivel: "intermedio"
  tags: ["big_bang", "singularidad"]

respuesta: "singularidad"
tipo: completar
respuestas_validas: ["singularidad"]

enunciado: "La teoría del Big Bang postula que el universo comenzó a partir de un estado de densidad y temperatura infinitas llamado ___."

explicacion: |
  La singularidad es el punto teórico donde las leyes de la física actual no pueden describir el estado del universo en el tiempo t=0.
```

## Sección: paleoclima-glaciaciones (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["definicion", "introduccion"]

respuesta: "paleoclima"
tipo: completar
respuestas_validas: ["paleoclima"]

enunciado: "El estudio de los climas de la Tierra en el pasado geológico se denomina ___."

explicacion: |
  El paleoclima es la ciencia que reconstruye las condiciones climáticas de épocas pasadas utilizando diversos indicadores naturales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["metodos", "reconstruccion"]

variables:
  metodo_idx: uno_de([0, 1, 2])
  metodos: [["núcleos de hielo", "sedimentos marinos", "anillos de árboles"]]

respuesta: metodos[metodo_idx
tipo: mc
opciones_explicitas: ["núcleos de hielo", "sedimentos marinos", "anillos de árboles", "fósiles de insectos"]

enunciado: "Un método común para reconstruir el paleoclima mediante el análisis de capas de precipitación congelada es el uso de {metodos[metodo_idx]}."

explicacion: |
  Los núcleos de hielo almacenan burbujas de aire y partículas que permiten conocer la composición atmosférica de hace miles de años.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["indicadores", "fósiles"]

respuesta: "fósiles"
tipo: mc
opciones_explicitas: ["fósiles", "satélites", "termómetros", "instrumentos de medición"]

enunciado: "Cuando no hay hielo o sedimentos disponibles, los científicos utilizan ___ de especies extintas para inferir temperaturas antiguas."

explicacion: |
  Los fósiles (como corales o plantas) actúan como indicadores biológicos de las condiciones ambientales en las que vivieron.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["metodologia", "proceso"]

respuesta: ["extracción", "datación", "análisis químico"]
tipo: ordenar
opciones_explicitas: ["extracción", "datación", "análisis químico"]

enunciado: "Ordena los pasos típicos para reconstruir un clima antiguo a partir de una muestra de sedimento:"

pasos:
  - "Obtención de la muestra del terreno."
  - "Determinación de la edad de la capa sedimentaria."
  - "Estudio de la composición de la muestra en laboratorio."

explicacion: |
  Primero se extrae el material, luego se determina su edad (datación) y finalmente se analizan sus componentes químicos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["dendrocronologia", "anillos"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["ancho", "estrecho"]]
  resultado: ["clima favorable", "clima adverso"]

respuesta: resultado[caso_idx
tipo: mc
opciones_explicitas: ["clima favorable", "clima adverso"]

enunciado: "En dendrocronología, si un anillo de crecimiento es {escenarios[caso_idx]}, esto suele indicar un {resultado[caso_idx]} durante ese año."

explicacion: |
  Anillos anchos sugieren condiciones óptimas de temperatura y humedad, mientras que anillos estrechos indican estrés ambiental.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["astronomia", "clima", "milankovitch"]

respuesta: "excentricidad"
tipo: mc

enunciado: "La variación en la forma de la órbita terrestre alrededor del Sol, que oscila entre una forma casi circular y una elíptica, se denomina:"

opciones_explicitas: ["oblicuidad", "precesión", "excentricidad", "nutación"]

explicacion: |
  La excentricidad describe qué tan "achatada" es la órbita terrestre. Este ciclo tiene periodos de aproximadamente 100,000 y 400,000 años y afecta la cantidad de radiación solar que llega a la Tierra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["oblicuidad", "inclinacion", "clima"]

variables:
  idx: uno_de([0, 1])
  escenario: [[15, 23.5], [24.5, 22.1]]

respuesta: escenario[idx][1
tipo: completar
tolerancia_abs: 0.1

enunciado: "La inclinación del eje terrestre (oblicuidad) varía periódicamente. Si la inclinación aumenta hacia el valor de {escenario[idx][0]} grados, ¿cuál es el valor aproximado de la inclinación mínima que alcanza en el ciclo?"

pasos:
  - "Identificar el valor máximo de inclinación proporcionado."
  - "Identificar el valor mínimo de inclinación proporcionado en el escenario."

explicacion: |
  La oblicuidad influye en la estacionalidad. Una mayor inclinación genera estaciones más marcadas, mientras que una menor inclinación (como el valor de {escenario[idx][1]} grados) tiende a favorecer la glaciación al hacer los veranos menos intensos en las altas latitudes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["precesion", "eje_terrestre"]

respuesta: "el eje de rotación"
tipo: completar
respuestas_validas: ["el eje de rotación", "la órbita", "el sol"]

enunciado: "La precesión es el movimiento de bamboleo de ___ terrestre, similar al de un trompo, que cambia la orientación de los polos respecto a la eclíptica."

explicacion: |
  La precesión afecta la dirección en la que apunta la Tierra respecto a las estrellas y determina en qué época del año ocurre el solsticio o el equinoccio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["causas", "glaciaciones"]

respuesta: ["excentricidad", "oblicuidad", "precesión"]
tipo: ordenar

opciones_explicitas: ["excentricidad", "oblicuidad", "precesión"]

enunciado: "Ordene los tres ciclos de Milankovitch desde el que tiene el periodo de duración más largo al más corto:"

explicacion: |
  El orden correcto de duración es: Excentricidad (~100k-400k años), Oblicuidad (~41k años) y Precesión (~21k-26k años).
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["radiacion", "insolacion"]

variables:
  idx: uno_de([0, 1])
  datos: [["disminuye", "glaciación"], ["aumenta", "interglaciar"]]

respuesta: datos[idx][1
tipo: mc

enunciado: "Si los ciclos de Milankovitch provocan que la insolación estival en las altas latitudes sea significativamente menor, el efecto resultante en el clima global es una: {datos[idx][0]}"

opciones_explicitas: ["glaciación", "interglaciar", "estabilidad térmica"]

explicacion: |
  Para que se formen grandes capas de hielo, los veranos deben ser lo suficientemente frescos como para que la nieve del invierno no se derrita completamente, permitiendo la acumulación de hielo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["precambrico", "glaciacion", "teoria"]

respuesta: "Tierra bola de nieve"
tipo: completar
respuestas_validas: ["Tierra bola de nieve", "Snowball Earth"]

enunciado: "La hipótesis que propone que, durante el Precámbrico, la Tierra estuvo casi totalmente cubierta por capas de hielo se denomina ___."

explicacion: |
  La hipótesis de la 'Tierra bola de nieve' sugiere que el planeta experimentó periodos de glaciación global donde incluso el ecuador estaba cubierto de hielo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["evidencia", "sedimentos"]

variables:
  escenario_idx: uno_de([0, 1])
  evidencias: [["diamictitas", "depósitos de tilita"], ["capas de carbonatos", "depósitos de hierro bandeado"]]

respuesta: escenario_idx_datos[1
tipo: mc
opciones_explicitas: ["diamictitas", "capas de carbonatos", "depósitos de hierro bandeado", "depósitos de tilita"]

enunciado: "En el registro geológico, la presencia de ___ es una evidencia clave que sugiere la existencia de glaciaciones intensas en latitudes bajas durante el Precámbrico."

pasos:
  - "Identificar el tipo de sedimento glacial."
  - "Relacionar el sedimento con la hipótesis de congelamiento global."

explicacion: |
  Las diamictitas (o tilitas) son rocas sedimentarias con matriz de grano fino que contiene clastos de diversos tamaños, características de la erosión glacial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["albedo", "retroalimentacion", "clima"]

respuesta: "albedo"
tipo: completar
respuestas_validas: ["albedo", "efecto invernadero"]

enunciado: "El principal mecanismo de retroalimentación positiva que acelera el enfriamiento en la hipótesis de la Tierra bola de nieve es el aumento del ___ terrestre."

explicacion: |
  Al extenderse el hielo, la superficie refleja más radiación solar (mayor albedo) en lugar de absorberla, lo que reduce la temperatura y permite que el hielo crezca aún más.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["volcanismo", "co2", "deshielo"]

respuesta: "volcanismo"
tipo: mc
opciones_explicitas: ["tectónica de placas", "volcanismo", "actividad solar", "cambios en la órbita"]

enunciado: "¿Qué proceso geológico se considera el principal responsable de liberar grandes cantidades de CO2 para romper el estado de 'bola de nieve' y provocar un efecto invernadero extremo?"

explicacion: |
  El vulcanismo continuo durante el periodo de congelación acumula gases de efecto invernadero en la atmósfera, ya que el ciclo de carbonato-silicato (que normalmente consume CO2) se detiene por la falta de meteorización líquida.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["secuencia", "clima", "precambrico"]

respuesta: ["Glaciación global", "Acumulación de gases volcánicos", "Efecto invernadero extremo", "Deshielo masivo"]
tipo: ordenar
opciones_explicitas: ["Glaciación global", "Acumulación de gases volcánicos", "Efecto invernadero extremo", "Deshielo masivo"]

enunciado: "Ordena cronológicamente los eventos que llevan a la transición de una Tierra bola de nieve a un estado de clima cálido."

pasos:
  - "Establecer el estado inicial de congelamiento."
  - "Identificar la fuente de gases en la atmósfera."
  - "Determinar la consecuencia térmica."
  - "Indicar el resultado final del proceso."

explicacion: |
  La secuencia comienza con la glaciación, sigue con la acumulación de CO2 por vulcanismo (al no haber meteorización), lo que genera un efecto invernadero que finalmente provoca el deshielo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["cuaternario", "glaciaciones"]

respuesta: "Pleistoceno"
tipo: completar
respuestas_validas: ["Pleistoceno"]

enunciado: "El periodo geológico que comprende la mayor parte del Cuaternario y que se caracteriza por ciclos de glaciaciones es el ___________."

explicacion: |
  El Pleistoceno abarca desde hace aproximadamente 2.58 millones de años hasta hace 11,700 años, marcando la era de las grandes glaciaciones.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["glaciacion", "tiempo"]

respuesta: 11700
tipo: completar
tolerancia_abs: 500

enunciado: "La última glaciación (LGM - Last Glacial Maximum) terminó hace aproximadamente ________ años, dando inicio al Holoceno."

explicacion: |
  Hace unos 11,700 años el clima se estabilizó, permitiendo el florecimiento de las civilizaciones humanas actuales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["milankovitch", "ciclos"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["Excentricidad", "Cambio en la forma de la órbita terrestre"],
    ["Precesión", "Cambio en la orientación del eje terrestre"]
  ]

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["Excentricidad", "Precesión", "Oblicuidad", "Efecto Coriolis"]

enunciado: "Si nos referimos al ciclo que altera la forma de la órbita terrestre de circular a elíptica, estamos hablando de la: {escenario[idx][0]}."

explicacion: |
  La {escenario[idx][0]} es uno de los tres ciclos astronómicos principales que modulan la insolación terrestre.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["secuencia", "clima"]

respuesta: ["Glaciación", "Interglaciar", "Glaciación", "Interglaciar"]
tipo: ordenar
opciones_explicitas: ["Glaciación", "Interglaciar", "Glaciación", "Interglaciar"]

enunciado: "Ordena la secuencia típica de los ciclos climáticos que han definido el Cuaternario (de mayor a menor cobertura de hielo):"

explicacion: |
  El Cuaternario se caracteriza por la alternancia entre periodos fríos (glaciaciones) y periodos cálidos (interglaciares).
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["holoceno", "clima"]

respuesta: "Holoceno"
tipo: mc
opciones_explicitas: ["Pleistoceno", "Holoceno", "Eoceno", "Mioceno"]

enunciado: "El periodo interglaciar actual, en el que nos encontramos y que comenzó tras la última gran glaciación, se denomina:"

explicacion: |
  El Holoceno es el periodo de clima estable y cálido que ha permitido el desarrollo de la agricultura y la civilización humana.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["milankovitch", "astronomia"]

variables:
  escenario: [[ "excentricidad", "cambios en la órbita terrestre" ], [ "oblicuidad", "inclinación del eje terrestre" ], [ "precesión", "balanceo del eje terrestre" ]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["cambios en la órbita terrestre", "inclinación del eje terrestre", "balanceo del eje terrestre"]

enunciado: "La variación en la forma de la órbita terrestre alrededor del Sol, conocida como ciclo de {escenario[idx][0]}, es un factor clave en las glaciaciones."

explicacion: |
  La excentricidad describe qué tan elíptica es la órbita, afectando la distancia promedio al Sol.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["volcanes", "clima"]

variables:
  caso: [[ "ceniza y aerosoles", "enfriamiento" ], [ "gases de efecto invernadero", "calentamiento" ]]
  idx: uno_de([0, 1])

respuesta: caso[idx][1
tipo: mc
opciones_explicitas: ["enfriamiento", "calentamiento"]

enunciado: "Una erupción volcánica masiva inyecta partículas en la estratosfera. Dependiendo de la composición predominante, el efecto inmediato sobre la temperatura global puede ser de ___."

explicacion: |
  Las erupciones grandes suelen causar enfriamiento temporal debido al efecto albedo de los aerosoles.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "avanzado"
  tags: ["carbono", "geoquimica"]

variables:
  evento: [[ "aumento", "liberación de CO2" ], [ "disminución", "secuestro de CO2" ]]
  idx: uno_de([0, 1])

respuesta: evento[idx][1
tipo: completar
respuestas_validas: ["liberación de CO2", "secuestro de CO2"]

enunciado: "Durante un periodo de glaciación, la actividad biológica y la sedimentación oceánica provocan una ___ de carbono atmosférico."

explicacion: |
  El secuestro de carbono en el fondo marino reduce el efecto invernadero, favoreciendo el enfriamiento.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "intermedio"
  tags: ["secuencia", "procesos"]

respuesta: ["Aumento de radiación solar", "Derretimiento de glaciares", "Aumento del nivel del mar"]
tipo: ordenar
opciones_explicitas: ["Aumento de radiación solar", "Derretimiento de glaciares", "Aumento del nivel del mar"]

enunciado: "Ordene cronológicamente la reacción en cadena ante un aumento en la insolación solar:"

explicacion: |
  El aumento de radiación calienta la superficie, lo que derrite el hielo y finalmente eleva el nivel del mar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleoclima_glaciaciones"
  nivel: "basico"
  tags: ["escalas", "tiempo"]

variables:
  escala: [[ "Milankovitch", "Ciclos orbitales" ], [ "Ciclos de hielo", "Variaciones milenarias" ]]
  idx: uno_de([0, 1])

respuesta: escala[idx][1
tipo: mc
opciones_explicitas: ["Ciclos orbitales", "Variaciones milenarias"]

enunciado: "Las variaciones climáticas de escala geológica, como las glaciaciones, están impulsadas principalmente por los ciclos de ___."

explicacion: |
  Los ciclos de Milankovitch operan en escalas de decenas de miles de años.
```

## Sección: paleolitico (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["prehistoria", "etapas"]

respuesta: "Paleolítico"
tipo: completar
respuestas_validas: ["Paleolítico"]

enunciado: "La etapa más larga de la prehistoria humana, caracterizada por el uso de herramientas de piedra tallada, se denomina ___."

explicacion: |
  El Paleolítico (del griego 'paleo', antiguo y 'lithos', piedra) es la primera etapa de la historia de la humanidad.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["economia", "nomadismo"]

variables:
  escenario: uno_de([
    ["caza y recolección", "nómadas"],
    ["agricultura y ganadería", "sedentarios"],
    ["comercio de metales", "urbanos"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["nómadas", "sedentarios", "urbanos"]

enunciado: "Durante el Paleolítico, las sociedades humanas basaban su economía en la caza y la recolección, lo que las obligaba a ser ___."

explicacion: |
  Al no producir su propio alimento (agricultura), los grupos humanos debían desplazarse constantemente en busca de recursos, adoptando un estilo de vida nómada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["tecnologia", "piedra"]

respuesta: "piedra tallada"
tipo: completar
respuestas_validas: ["piedra tallada"]

enunciado: "A diferencia del Neolítico donde la piedra se pulía, en el Paleolítico la principal técnica de fabricación consistía en la ___."

explicacion: |
  La tecnología paleolítica se define por la talla de la piedra (percusión) para crear bordes cortantes en herramientas como bifaces o lascas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["evolucion", "orden"]

respuesta: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]
tipo: ordenar
opciones_explicitas: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]

enunciado: "Ordene cronológicamente los siguientes homínidos, desde el más antiguo al más reciente:"

explicacion: |
  La evolución humana no fue lineal, pero este orden representa una secuencia temporal de aparición de los géneros y especies principales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "avanzado"
  tags: ["cultura", "fuego"]

variables:
  caso: uno_de([
    ["cocinar alimentos", "socialización"],
    ["protección de depredadores", "luz"],
    ["calor en climas fríos", "cocción"]
  ])

respuesta: caso[0
tipo: mc
opciones_explicitas: ["socialización", "cocción", "iluminación"]

enunciado: "El control del fuego fue un hito crucial. Además de la luz y el calor, su uso permitió principalmente la ___."

explicacion: |
  El control del fuego permitió cocinar los alimentos, lo que facilitó la digestión y la absorción de nutrientes, favoreciendo el desarrollo cerebral.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["fuego", "evolucion", "supervivencia"]

respuesta: "cocinar"
tipo: completar
respuestas_validas: ["cocinar", "la cocción"]

enunciado: "El control del fuego permitió a los homínidos ___ los alimentos, lo que facilitó la digestión y aumentó la ingesta calórica."

explicacion: |
  La cocción de alimentos permitió que la energía fuera más fácil de absorber, favoreciendo el desarrollo cerebral.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["fuego", "supervivencia"]

opciones_explicitas: ["Ahuyentar depredadores", "Fabricar herramientas de piedra", "Navegación marítima"]
respuesta: "Ahuyentar depredadores"
tipo: mc

enunciado: "Además de calentar y cocinar, una función vital del fuego para la seguridad de los grupos de homínidos era:"

explicacion: |
  El fuego actuaba como una barrera protectora contra los grandes depredadores durante la noche.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["fuego", "adaptacion"]

variables:
  beneficio_idx: uno_de([0, 1, 2])
  escenario: [
    ["iluminar", "permitió extender las horas de actividad social y exploración en cuevas"],
    ["calentar", "permitió la migración hacia climas más fríos"],
    ["cocinar", "permitió el desarrollo de mandíbulas más pequeñas y cerebros más grandes"]
  ]

respuesta: escenario[beneficio_idx][1
tipo: mc
opciones_explicitas: ["iluminar", "calentar", "cocinar"]

enunciado: "Si el control del fuego sirvió para {escenario[beneficio_idx][0]}, esto significó que: ___"

explicacion: |
  {escenario[beneficio_idx][1]}
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["fuego", "social", "comunicacion"]

respuesta: "social"
tipo: completar
respuestas_validas: ["social", "comunitaria"]

enunciado: "El uso del fuego alrededor de la hoguera fomentó la cohesión ___ de los grupos de homínidos."

explicacion: |
  La hoguera se convirtió en el centro de la comunicación y el intercambio de información.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "avanzado"
  tags: ["fuego", "causa_efecto"]

opciones_explicitas: ["Fuego", "Cocción", "Mejor nutrición", "Cerebro más grande"]
respuesta: ["Fuego", "Cocción", "Mejor nutrición", "Cerebro más grande"]
tipo: ordenar

enunciado: "Ordena la secuencia lógica de causa y efecto iniciada por el control del fuego:"

explicacion: |
  El control del fuego permitió la cocción, lo que mejoró la nutrición y, a largo plazo, el desarrollo cerebral.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["nomadismo", "supervivencia"]

variables:
  escenario: uno_de([
    ["el movimiento de las manadas de renos", "el renos"],
    ["la maduración de frutos silvestres", "los frutos"],
    ["el ciclo de vida de los grandes mamíferos", "los mamíferos"]
  ])

enunciado: "En el Paleolítico, los grupos humanos se desplazaban siguiendo {escenario[0]} para asegurar su subsistencia."

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["el movimiento de las manadas de renos", "la maduración de frutos silvestres", "el ciclo de vida de los grandes mamíferos"]

explicacion: |
  El nomadismo era una estrategia de supervivencia basada en el seguimiento de los ciclos naturales de los recursos disponibles.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["asentamientos", "nomadismo"]

enunciado: "A diferencia de los grupos nómadas, los asentamientos fijos no existían en el Paleolítico; los grupos humanos se movían constantemente de un lugar a otro."

respuesta: "no existían"
tipo: completar
respuestas_validas: ["no existían", "no existían", "no existían"]

explicacion: |
  La falta de agricultura obligaba a los grupos humanos a desplazarse constantemente para no agotar los recursos de una zona.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["recoleccion", "caza"]

variables:
  tipo_recurso: uno_de([
    ["caza de animales", "la caza"],
    ["recolección de plantas", "la recolección"]
  ])

enunciado: "La economía del Paleolítico se basaba principalmente en {tipo_recurso[0]} y {tipo_recurso[1]}."

respuesta: ["la caza", "la recolección"]
tipo: ordenar
opciones_explicitas: ["la caza", "la recolección"]

explicacion: |
  La subsistencia dependía de una combinación de actividades de caza y recolección para garantizar una dieta variada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["estacionalidad", "clima"]

variables:
  clima: uno_de([
    ["el invierno", "el frío"],
    ["el verano", "el calor"]
  ])

enunciado: "Los cambios en {clima[0]} afectaban la disponibilidad de alimento, obligando a los grupos a migrar hacia zonas más favorables."

respuesta: "el frío"
tipo: mc
opciones_explicitas: ["el frío", "el calor"]

explicacion: |
  Las variaciones climáticas estacionales determinaban el movimiento de los animales y el crecimiento de las plantas, dictando la ruta de los nómadas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "avanzado"
  tags: ["sociedad", "movilidad"]

variables:
  grupo: uno_de([
    ["pequeños grupos familiares", "pequeños grupos familiares"],
    ["grandes tribus sedentarias", "grandes tribus sedentarias"]
  ])

enunciado: "La vida nómada era compatible con la organización en ___ debido a la necesidad de movilidad constante."

respuesta: "pequeños grupos familiares"
tipo: completar
respuestas_validas: ["pequeños grupos familiares", "pequeños grupos familiares"]

explicacion: |
  Los grupos eran pequeños para facilitar el desplazamiento rápido y evitar el agotamiento de los recursos en un mismo territorio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["tecnologia", "piedra"]

respuesta: "Olduvayense"
tipo: completar
respuestas_validas: ["Olduvayense"]

enunciado: "La industria lítica más antigua conocida, caracterizada por el uso de percutores para obtener filos rudimentarios, se denomina industria ___."

explicacion: |
  La industria Olduvayense (o Oldowaense) representa las primeras formas de tecnología lítica, donde los homínidos golpeaban una piedra contra otra para crear bordes cortantes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["uso", "herramientas"]

opciones_explicitas: ["Cazar grandes mamíferos", "Procesar carne y pieles", "Recolectar frutos y raíces", "Fabricar ropa"]
respuesta: "Procesar carne y pieles"
tipo: mc

enunciado: "Aunque las herramientas de piedra tenían múltiples usos, una de las funciones principales de los filos de las lascas en el Paleolítico era ___."

explicacion: |
  Las lascas de piedra proporcionaban bordes extremadamente afilados, ideales para el desollado de animales y el corte de tejidos orgánicos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["evolucion", "tecnologia"]

variables:
  escenario: uno_de([
    ["Olduvayense", "Choppers"],
    ["Acheulense", "Bifaces"],
    ["Musteriense", "Láminas"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["Choppers", "Bifaces", "Láminas"]

enunciado: "En la cultura Acheulense, la herramienta característica que presenta una forma simétrica y ha sido trabajada por ambas caras se conoce como ___."

explicacion: |
  El bifaz es la herramienta emblemática del Paleolítico inferior, mostrando una planificación cognitiva superior al simple percutaje de lascas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "avanzado"
  tags: ["proceso", "fabricacion"]

opciones_explicitas: ["Selección de materia prima", "Percutaje/Talla", "Afilado/Retoque final"]
respuesta: ["Selección de materia prima", "Percutaje/Talla", "Afilado/Retoque final"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que un homínido debía seguir para fabricar una herramienta de piedra tallada:"

explicacion: |
  La fabricación lítica requiere primero identificar la piedra adecuada (sílex, cuarcita), luego darle forma mediante golpes y finalmente refinar el filo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["impacto", "alimentacion"]

respuesta: 10
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si un grupo de homínidos utilizaba una técnica de percutaje que permitía obtener un 10% más de filo útil por cada kilogramo de piedra, y tenían 50kg de sílex, ¿cuántos kg de material efectivo de corte obtendrían en total?"

pasos:
  - "Calcular el 10% de 50kg"
  - "Sumar el material base y el excedente de filo"

explicacion: |
  El cálculo es: 50 + (50 * 0.10) = 55. Sin embargo, la pregunta pide el material efectivo de corte basado en la eficiencia añadida (50 * 1.1 = 55). Nota: El usuario debe calcular el valor total resultante.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["tecnologia", "herramientas"]

variables:
  idx: uno_de([0,1,2])
  datos: [["hacha de mano de piedra tallada", "bifaz"], ["lanzas de piedra", "punta de proyectil"], ["hachas de piedra pulida", "hacha de piedra"]]

enunciado: "Durante el Paleolítico, los homínidos utilizaban diversas herramientas de piedra. Si encontramos un objeto con la forma de un {datos[idx][0]}, estamos ante un/a ___."

respuestas_validas: ["bifaz", "punta de proyectil", "hacha de piedra"]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El {datos[idx][0]} es una herramienta característica del Paleolítico, fabricada mediante la técnica de percusión para obtener un filo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["subsistencia", "nómada"]

variables:
  idx: uno_de([0,1,2])
  datos: [["recolección de frutos y caza", "nómada"], ["agricultura de cereales", "sedentario"], ["pastoreo de ganado", "sedentario"]]

enunciado: "La principal actividad económica en el Paleolítico era la {datos[idx][0]}, lo que obligaba a los grupos humanos a tener un estilo de vida ___."

opciones_explicitas: ["nómada", "sedentario"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Al depender de los ciclos naturales y la migración de animales, los grupos debían desplazarse constantemente, siendo nómadas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["arte", "rupestre"]

variables:
  idx: uno_de([0,1,2])
  datos: [["pinturas en el interior de cuevas", "arte rupestre"], ["esculturas de mármol", "arte clásico"], ["mosaicos de piedra", "arte romano"]]

enunciado: "El estilo artístico característico del Paleolítico, que consistía en {datos[idx][0]}, se denomina ___."

opciones_explicitas: ["arte rupestre", "arte clásico", "arte romano"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El {datos[idx][0]} es la expresión máxima del arte rupestre, utilizada para representar animales y escenas de caza.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["tecnologia", "evolucion"]

variables:
  idx: uno_de([0,1,2])
  datos: [["piedra tallada", "Paleolítico"], ["piedra pulida", "Neolítico"], ["metal", "Edad de los Metales"]]

enunciado: "Ordena las siguientes etapas de la evolución tecnológica humana de la más antigua a la más reciente:"

opciones_explicitas: ["Paleolítico", "Neolítico", "Edad de los Metales"]
respuesta: ["Paleolítico", "Neolítico", "Edad de los Metales"]
tipo: ordenar

explicacion: |
  La secuencia correcta es: Paleolítico (piedra tallada), Neolítico (piedra pulida) y Edad de los Metales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["fuego", "supervivencia"]

variables:
  idx: uno_de([0,1,2])
  datos: [["dominio del fuego", "protección y calor"], ["domesticación de plantas", "agricultura"], ["uso de la rueda", "transporte"]]

enunciado: "El {datos[idx][0]} fue un hito fundamental en el Paleolítico que proporcionó ___."

respuestas_validas: ["protección y calor", "agricultura", "transporte"]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El {datos[idx][0]} permitió a los homínidos cocinar alimentos, calentarse y ahuyentar depredadores.
```

## Sección: peronismo-derechos-sociales (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["peronismo", "politica", "argentina"]

respuesta: "Juan Domingo Perón"
tipo: completar
respuestas_validas: ["Juan Domingo Perón"]

enunciado: "El líder que encabezó el movimiento que transformó la estructura política y social de Argentina a partir de 1946 fue ___."

explicacion: |
  Juan Domingo Perón consolidó su poder mediante una fuerte alianza con los sectores obreros, transformando la relación entre el Estado y la clase trabajadora.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["clase_obrera", "movimiento_sustitutivo"]

opciones_explicitas: ["La oligarquía terrateniente", "La clase trabajadora", "La burguesía industrial", "La clase media profesional"]
respuesta: "La clase trabajadora"
tipo: mc

enunciado: "¿Cuál fue el principal sector social que brindó el sustento político y electoral al peronismo en sus inicios?"

explicacion: |
  El peronismo se caracterizó por la integración política de la clase trabajadora, que hasta entonces había sido marginada de los procesos de decisión estatal.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["justicia_social", "derechos_laborales"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["vacaciones pagas", "la implementación de las vacaciones pagas"],
    ["aguinaldo", "la instauración del aguinaldo"]
  ]
  respuestas: [
    ["vacaciones pagas", "la implementación de las vacaciones pagas"],
    ["aguinaldo", "la instauración del aguinaldo"]
  ]

respuesta: "la implementación de las vacaciones pagas"
tipo: completar
respuestas_validas: ["la implementación de las vacaciones pagas", "la instauración del aguinaldo"]

enunciado: "Uno de los grandes hitos de la justicia social peronista fue {escenarios[escenario_idx][1]}."

explicacion: |
  La extensión de derechos como las vacaciones pagas o el aguinaldo permitió una redistribución de la riqueza hacia el consumo interno.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["doctrina", "peronismo"]

opciones_explicitas: ["Justicia Social, Independencia Económica y Soberanía Política", "Libertad de mercado, Propiedad privada y Globalización", "Estado ausente, Libre comercio y Individualismo", "Autoritarismo, Centralismo y Proteccionismo"]
respuesta: "Justicia Social, Independencia Económica y Soberanía Política"
tipo: mc

enunciado: "¿Cuáles son las tres columnas fundamentales de la doctrina peronista?"

explicacion: |
  Estas tres consignas definieron el programa político de Perón durante sus mandatos, buscando un equilibrio entre el capital y el trabajo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "avanzado"
  tags: ["proceso_historico", "ordenar"]

opciones_explicitas: ["Surgimiento del movimiento obrero", "Llegada al poder en 1946", "Consolidación de derechos sociales", "Expansión de la industria nacional"]
respuesta: ["Surgimiento del movimiento obrero", "Llegada al poder en 1946", "Consolidación de derechos sociales", "Expansión de la industria nacional"]
tipo: ordenar

enunciado: "Ordene cronológicamente los procesos que permitieron el ascenso y consolidación del peronismo:"

explicacion: |
  El proceso comenzó con la organización de los sindicatos, seguido por la victoria electoral, la implementación de medidas de bienestar y el fomento de la industria para sostener dicho modelo.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["derechos_laborales", "peronismo"]

respuesta: "Sueldo Anual Complementario"
tipo: completar
respuestas_validas: ["Sueldo Anual Complementario", "sueldo anual complementario", "Aguinaldo"]

enunciado: "El beneficio laboral que consiste en la percepción de una parte del sueldo en dos cuotas durante el año se conoce formalmente como ___."

explicacion: |
  El aguinaldo, o Sueldo Anual Complementario (SAC), fue consolidado como un derecho adquirido para asegurar una compensación extra al trabajador.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["derechos_laborales", "vacaciones"]

opciones_explicitas: ["Vacaciones pagas", "Licencia por enfermedad", "Día de la familia", "Feriado religioso"]
respuesta: "Vacaciones pagas"
tipo: mc

enunciado: "Durante los primeros gobiernos peronistas, se garantizó el derecho al descanso mediante la implementación de las:"

explicacion: |
  Las vacaciones pagas permitieron que el trabajador disfrutara de su tiempo libre sin perder su remuneración, un pilar de la justicia social.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["sindicatos", "derechos_laborales"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["fortalecimiento de la negociación colectiva", "mayor poder de presión sindical"], ["protección de la actividad gremial", "reconocimiento de la personería gremial"]]

respuesta: uno_de(datos[escenario_idx][0])
tipo: mc
opciones_explicitas: ["Debilitamiento de la negociación colectiva", "Pérdida de autonomía sindical", "Debilitamiento de la actividad gremial", "Fragmentación de los sectores obreros"]

enunciado: "Uno de los pilares de la reforma laboral peronista fue el ___."

explicacion: |
  El fortalecimiento de los sindicatos permitió que los trabajadores tuvieran una voz institucionalizada en la negociación de sus condiciones de vida.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["jubilaciones", "seguridad_social"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["jubilaciones", "pensiones"], ["ancianos", "retirados"]]

respuesta: uno_de(casos[caso_idx][0])
tipo: mc
opciones_explicitas: ["seguros de vida", "jubilaciones", "créditos hipotecarios", "asistencia escolar"]

enunciado: "La ampliación de la cobertura de la seguridad social se manifestó principalmente en la expansión de las ___ para la clase trabajadora."

explicacion: |
  La universalización de las jubilaciones permitió que una gran parte de la población pudiera acceder a una vejez digna y protegida por el Estado.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "avanzado"
  tags: ["ordenar", "derechos_laborales"]

opciones_explicitas: ["Preexistencia de leyes", "Promulgación de leyes de protección", "Consolidación de derechos sociales"]
respuesta: ["Preexistencia de leyes", "Promulgación de leyes de protección", "Consolidación de derechos sociales"]
tipo: ordenar

enunciado: "Ordene cronológicamente la evolución de la situación de los derechos laborales en Argentina durante el proceso de transformación social de mediados del siglo XX:"

explicacion: |
  El proceso comenzó con la existencia de leyes previas, continuó con una intensa actividad legislativa de protección y culminó con la consolidación de un sistema de derechos sociales robusto.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["derechos", "voto_femenino", "eva_peron"]

respuesta: "1947"
tipo: "completar"
respuestas_validas: ["1947"]

enunciado: "La Ley de Sufragio Femenino en Argentina, que garantizó el derecho político de las mujeres, fue sancionada en el año ___."

explicacion: |
  La Ley 13.510 fue sancionada el 9 de septiembre de 1947, marcando un hito en la democracia argentina.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["eva_peron", "liderazgo"]

respuesta: "Eva Perón"
tipo: "mc"
opciones_explicitas: ["Eva Perón", "Isabel Perón", "Alicia Moreau de Justo", "Victoria Ocampo"]

enunciado: "¿Qué figura política fue la principal impulsora y referente del reclamo por el voto femenino durante el primer peronismo?"

explicacion: |
  Eva Perón (Evita) fue la líder indiscutida del movimiento sufragista, logrando que el proyecto fuera una política de Estado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["elecciones", "hitos"]

variables:
  escenario: uno_de([["1951", "primeras elecciones con voto femenino"]])

respuesta: "1951"
tipo: "input"
tolerancia_abs: 0

enunciado: "Si bien la ley se sancionó en 1947, las mujeres argentinas ejercieron el derecho al voto por primera vez en las elecciones de el año {escenario[0]}."

explicacion: |
  En 1951, las mujeres votaron por primera vez en elecciones nacionales, incluyendo a las candidatas a diputadas y senadoras.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["derechos_civiles", "ciudadania"]

respuesta: ["Ley 13.510", "Sufragio Femenino", "Ciudadanía Plena"]
tipo: "ordenar"
opciones_explicitas: ["Ley 13.510", "Sufragio Femenino", "Ciudadanía Plena"]

enunciado: "Ordena cronológicamente los procesos que permitieron la integración política de la mujer en Argentina:"

explicacion: |
  Primero se sanciona la ley, luego se implementa el sufragio y finalmente se consolida la ciudadanía plena de la mujer.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "avanzado"
  tags: ["democracia", "participacion"]

variables:
  caso: uno_de([[true, "se amplió la base electoral"], [false, "se redujo la participación"]])

respuesta: "se amplió la base electoral"
tipo: "mc"
opciones_explicitas: ["se amplió la base electoral", "se redujo la participación"]

enunciado: "Considerando el impacto del voto femenino en la democracia argentina, ¿qué ocurrió con la participación política? {caso[0]}"

explicacion: |
  La incorporación de las mujeres como electoras amplió significativamente la base de representatividad del sistema democrático.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["polarizacion", "sociedad"]

variables:
  idx: uno_de([0,1])
  escenario: [
    ["El peronismo generó una división entre sectores que lo veían como una herramienta de justicia social y sectores que lo veían como una amenaza a las instituciones.", "La polarización fue un rasgo distintivo del periodo."],
    ["El apoyo masivo de los trabajadores consolidó una nueva base política, mientras que la oposición se concentró en las clases medias y élites.", "La base social del movimiento fue transformadora."]
  ]

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["La polarización fue un rasgo distintivo del periodo.", "La base social del movimiento fue transformadora."]

enunciado: "{escenario[idx][0]}"

explicacion: |
  El peronismo introdujo una nueva dinámica de participación política que fracturó la estructura social tradicional argentina, creando una división que ha persistido en la cultura política del país.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["clases_sociales", "trabajadores"]

respuesta: "clase_obrera"
tipo: completar
respuestas_validas: ["clase_obrera", "clases_medias", "élite_terrateniente"]

enunciado: "El principal sector social que brindó el apoyo masivo y sostenido al movimiento peronista fue la ___."

explicacion: |
  La incorporación de la clase obrera a la vida política activa fue el pilar fundamental del movimiento, otorgándole un poder de movilización sin precedentes en la historia argentina.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["oposición", "sectores_sociales"]

variables:
  opcion_correcta: uno_de(["clases_medias_urbanas", "sectores_rurales_oligárquicos", "sindicatos_tradicionales"])
  opcion_incorrecta_1: "sectores_rurales_oligárquicos"
  opcion_incorrecta_2: "sindicatos_tradicionales"

respuesta: opcion_correcta
tipo: mc
opciones_explicitas: ["clases_medias_urbanas", "sectores_rurales_oligárquicos", "sindicatos_tradicionales"]

enunciado: "Históricamente, uno de los sectores que manifestó una oposición más estructurada y constante a la hegemonía peronista fue el de las ___."

explicacion: |
  La oposición peronista fue heterogénea, pero las clases medias urbanas y la élite tradicional conformaron los núcleos de resistencia más significativos durante el periodo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "avanzado"
  tags: ["legado", "politica_argentina"]

respuesta: "identidad_politica"
tipo: completar
respuestas_validas: ["identidad_politica", "estabilidad_institucional", "sistema_partidario_unicos"]

enunciado: "El peronismo no solo fue un gobierno, sino que configuró una nueva ___ que sigue siendo un eje central en la política argentina contemporánea."

explicacion: |
  La capacidad de la identidad peronista para reorganizarse y permanecer como un actor central demuestra la profundidad de su impacto en la estructura política nacional.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["proceso_historico", "derechos"]

respuesta: ["Reivindicación de derechos laborales", "Fortalecimiento del rol sindical", "Polarización de la estructura social"]
tipo: ordenar
opciones_explicitas: ["Reivindicación de derechos laborales", "Fortalecimiento del rol sindical", "Polarización de la estructura social"]

enunciado: "Ordene cronológicamente los efectos sociales derivados del ascenso del peronismo en la Argentina:"

explicacion: |
  El proceso comenzó con la conquista de derechos, continuó con la institucionalización de la fuerza sindical y culminó en una división social profunda entre partidarios y detractores.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["derechos_laborales", "peronismo"]

variables:
  datos: [["implementacion_vacaciones", "descanso_pago"], ["seguro_vida", "proteccion_familia"], ["estatuto_obrero", "estabilidad_laboral"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["descanso_pago", "proteccion_familia", "estabilidad_laboral"]

enunciado: "Durante el primer peronismo, la legislación laboral garantizó que los trabajadores tuvieran derecho a un periodo de ___."

explicacion: |
  La Ley de Vacaciones Pagas fue uno de los pilares de la justicia social, permitiendo el descanso remunerado de la clase obrera.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["voto_femenino", "derechos_civiles"]

variables:
  datos: [["Ley_1420", "educacion_comun"], ["Ley_13.001", "voto_femenino"], ["Ley_Estatuto", "derechos_sociales"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["descanso_pago", "voto_femenino", "estabilidad_laboral"]

enunciado: "La promulgación de la Ley 14.240 en 1947 permitió que las mujeres ejercieran su derecho al ___ en Argentina."

explicacion: |
  La Ley de Sufragio Femenino fue fundamental para la integración de la mujer a la vida política y ciudadana del país.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["justicia_social", "distribucion_riqueza"]

variables:
  datos: [["reparto_ganancias", "justicia_social"], ["salario_minimo", "poder_pobres"], ["seguridad_social", "bienestar_general"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["justicia_social", "poder_pobres", "bienestar_general"]

enunciado: "El objetivo central de la política de redistribución de la riqueza durante este periodo era alcanzar la ___."

explicacion: |
  El peronismo promovió la idea de que la riqueza debe ser distribuida para garantizar una vida digna a los sectores trabajadores.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "avanzado"
  tags: ["secuencia_historica", "derechos"]

variables:
  orden_correcta: ["Estatuto del Peón", "Ley de Vacaciones", "Voto Femenino", "Seguros de Vida"]

respuesta: orden_correcta
tipo: ordenar
opciones_explicitas: ["Estatuto del Peón", "Ley de Vacaciones", "Voto Femenino", "Seguros de Vida"]

enunciado: "Ordene cronológicamente las siguientes conquistas sociales del ámbito de los derechos laborales y civiles durante el primer peronismo:"

explicacion: |
  La secuencia refleja la expansión de derechos desde el ámbito rural y laboral hacia la plena ciudadanía política.
```

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["trabajo", "dignidad"]

variables:
  datos: [["salario_justo", "dignidad"], ["jornada_8h", "salud"], ["afiliacion_sindicato", "poder"]]
  idx: uno_de([0, 1, 2])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Para el peronismo, el trabajo no era solo una mercancía, sino un medio para alcanzar la ___ del trabajador."

explicacion: |
  La noción de 'dignidad' fue el eje transversal de todas las reformas laborales impulsadas por el Estado.
```
