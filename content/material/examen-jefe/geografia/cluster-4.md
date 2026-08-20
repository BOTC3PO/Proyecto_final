# Examen jefe — Maestro de la Huella Global

> Logro #130. Completaste el parcial dominando la geografía industrial, los indicadores sociales y la huella ecológica. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **117 preguntas totales** en 5/5 secciones.

---

## Sección: geografia-industrial-mundial (26 preguntas)

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["causas", "mc"]

respuesta: 0
tipo: mc
opciones: 4

enunciado: "¿Cuál de las siguientes NO es una causa principal de la deslocalización industrial?"

explicacion: |
  Las causas son reducción de costos de transporte y revolución de la información. El aumento de aranceles o la escasez de recursos no son causas directas de este fenómeno específico.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["ejemplos", "mc"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "¿Cuál de estos países es un ejemplo típico de receptor de deslocalización industrial?"

explicacion: |
  China, India y Vietnam son ejemplos clásicos. Alemania, Japón y EE.UU. son emisores tradicionales.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["efectos", "mc"]

respuesta: 2
tipo: mc
opciones: 4

enunciado: "¿Qué efecto suele experimentar el sector manufacturero tradicional en los países emisores?"

explicacion: |
  Sufre desempleo y cierre de fábricas. No suele haber aumento de empleo ni mejora inmediata sin reconvertir la economía.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["tecnologia", "mc"]

respuesta: 0
tipo: mc
opciones: 4

enunciado: "¿Qué avance tecnológico ha permitido la 'geografía invisible' de la producción?"

explicacion: |
  Las telecomunicaciones y la digitalización permiten coordinar procesos a distancia. El vapor, la electricidad o la imprenta no tienen este efecto directo en la logística global moderna.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["deslocalizacion", "definicion"]

variables:
  motivo_principal: uno_de(["menores costos operativos", "maximizar ganancias", "eficiencia económica"])

respuesta: "menores costos operativos"
tipo: completar

enunciado: "La deslocalización industrial consiste en transferir actividades productivas a países con {motivo_principal}."

explicacion: |
  La deslocalización busca reducir costos de producción (mano de obra, impuestos, regulación) moviendo la actividad a otros territorios.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["globalizacion", "transporte", "telecomunicaciones"]

variables:
  factor: uno_de(["reducción de costos de transporte", "revolución de la información", "avances en telecomunicaciones"])

respuesta: "{factor}"
tipo: completar

enunciado: "Un factor clave que aceleró la deslocalización fue el {factor}."

explicacion: |
  La globalización permitió coordinar cadenas de valor globales gracias a mejoras en transporte y comunicación.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["desindustrializacion", "norte_global"]

variables:
  sector_afectado: uno_de(["manufactura tradicional", "servicios tecnológicos", "agricultura"])

respuesta: "manufactura tradicional"
tipo: completar

enunciado: "En los países emisores, la deslocalización suele generar desempleo en el sector de {sector_afectado}."

explicacion: |
  Al trasladar la producción, los países desarrollados pierden puestos de trabajo en la manufactura básica.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["regulacion", "medio_ambiente"]

variables:
  riesgo: uno_de(["falta de regulaciones estrictas", "exceso de burocracia", "alta tributación"])

respuesta: "falta de regulaciones estrictas"
tipo: completar

enunciado: "Un riesgo para los países receptores es la {riesgo} que permite a las corporaciones reducir costos."

explicacion: |
  A veces, la deslocalización se dirige a lugares con normas ambientales más laxas, generando contaminación.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["motivacion", "multinacionales"]

variables:
  objetivo: uno_de(["maximizar ganancias", "reducir impuestos", "crecer tecnológicamente"])

respuesta: "maximizar ganancias"
tipo: completar

enunciado: "La decisión de deslocalizar responde a la búsqueda de {objetivo} por parte de las multinacionales."

explicacion: |
  El motor principal es económico: producir más barato para ganar más.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["sur_global", "ejemplos"]

variables:
  pais: uno_de(["China", "India", "Vietnam"])

respuesta: "{pais}"
tipo: completar

enunciado: "Un ejemplo clásico de país receptor de deslocalización industrial es {pais}."

explicacion: |
  Estos países han atraído inversiones masivas por su gran fuerza laboral y bajos costos.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["desindustrializacion", "consecuencias"]

variables:
  fenomeno: uno_de(["desindustrialización", "reindustrialización", "industrialización tardía"])

respuesta: "desindustrialización"
tipo: completar

enunciado: "El debate político en países emisores a menudo gira en torno al riesgo de {fenomeno}."

explicacion: |
  La pérdida de capacidad manufactura interna es un tema sensible en países desarrollados.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["infraestructura", "compensacion"]

variables:
  ventaja_emisora: uno_de(["alta tecnología", "infraestructura sólida", "mercados ricos"])
  desventaja_receptora: uno_de(["infraestructura menos desarrollada", "falta de mano de obra", "costos altos"])

respuesta: "infraestructura menos desarrollada"
tipo: completar

enunciado: "Aunque los países receptores tienen bajos costos, a veces compensan con {ventaja_emisora} y sufren {desventaja_receptora}."

explicacion: |
  Existe un trade-off: los receptores ofrecen mano de obra barata pero a veces carecen de infraestructura avanzada.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["tecnologia", "causas"]

variables:
  causa: uno_de(["la revolución de la información", "el aumento de aranceles", "la crisis del petróleo"])

respuesta: "la revolución de la información"
tipo: completar

enunciado: "La {causa} ha permitido gestionar cadenas de producción globales en tiempo real."

explicacion: |
  Sin internet y sistemas de gestión, la coordinación de partes en distintos países sería inviable.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "avanzado"
  tags: ["globalizacion", "soberania"]

variables:
  importancia: uno_de(["importan menos", "son irrelevantes", "son más importantes que nunca"])

respuesta: "importan menos"
tipo: completar

enunciado: "En la 'geografía invisible' de la producción global, las fronteras políticas {importancia} que la eficiencia económica."

explicacion: |
  La lógica del mercado global trasciende las fronteras nacionales tradicionales.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["riesgos", "receptores"]

variables:
  riesgo: uno_de(["dependencia económica excesiva", "autonomía total", "crecimiento sostenible"])

respuesta: "dependencia económica excesiva"
tipo: completar

enunciado: "Un riesgo para los receptores es la {riesgo} de las decisiones de corporaciones extranjeras."

explicacion: |
  Si las multinacionales se van, la economía local puede colapsar por falta de diversificación.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["transporte", "logistica"]

variables:
  tendencia: uno_de(["reducción de costos", "aumento de costos", "estabilidad de precios"])

respuesta: "reducción de costos"
tipo: completar

enunciado: "La {tendencia} en el transporte ha hecho viable producir lejos del mercado consumidor."

explicacion: |
  Contenedores y logística eficiente abarataron el envío de productos terminados o partes.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["norte_global", "mercado"]

variables:
  caracteristica: uno_de(["mercados consumidores ricos", "mercados consumidores pobres", "mercados aislados"])

respuesta: "mercados consumidores ricos"
tipo: completar

enunciado: "Los países del Norte Global ofrecen {caracteristica} además de alta tecnología."

explicacion: |
  Aunque producen menos, siguen siendo los principales mercados de consumo final.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["mano_obra", "receptores"]

variables:
  caracteristica: uno_de(["fuerza laboral numerosa", "fuerza laboral escasa", "fuerza laboral muy costosa"])

respuesta: "fuerza laboral numerosa"
tipo: completar

enunciado: "Los países emergentes suelen atraer industria por tener {caracteristica}."

explicacion: |
  La disponibilidad de trabajadores es un factor clave para la manufactura intensiva en mano de obra.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["politica_economica", "emisoras"]

variables:
  necesidad: uno_de(["reconvertir la economía", "aumentar la producción agrícola", "cerrar industrias"])

respuesta: "reconvertir la economía"
tipo: completar

enunciado: "Los países emisores necesitan {necesidad} hacia servicios y tecnología tras la deslocalización."

explicacion: |
  La estrategia de desarrollo en países desarrollados se ha desplazado hacia la innovación y servicios.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["actores", "multinacionales"]

variables:
  actor: uno_de(["grandes multinacionales", "pequeñas cooperativas", "gobiernos locales"])

respuesta: "grandes multinacionales"
tipo: completar

enunciado: "Son las {actor} las que evalúan constantemente dónde es más rentativo producir."

explicacion: |
  Las grandes corporaciones tienen la capacidad logística y financiera para operar globalmente.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["desigualdad", "consecuencias"]

variables:
  naturaleza: uno_de(["complejos y desiguales", "uniformes y positivos", "negativos para todos"])

respuesta: "complejos y desiguales"
tipo: completar

enunciado: "Los efectos de la deslocalización son {naturaleza}."

explicacion: |
  Algunos ganan empleo, otros pierden; algunos crecen, otros se contaminan. No es uniforme.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["comercio", "receptores"]

variables:
  beneficio: uno_de(["mayor integración en el comercio mundial", "aislamiento comercial", "reducción de exportaciones"])

respuesta: "mayor integración en el comercio mundial"
tipo: completar

enunciado: "Para los receptores, la deslocalización puede significar {beneficio}."

explicacion: |
  Al insertarse en cadenas globales, los países receptores se vinculan más al comercio internacional.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["decision", "economia"]

variables:
  ecuacion: uno_de(["ecuación de costos versus beneficios", "ecuación de oferta y demanda", "ecuación de inflación"])

respuesta: "ecuación de costos versus beneficios"
tipo: completar

enunciado: "La decisión de deslocalizar es, en esencia, una {ecuacion}."

explicacion: |
  Las empresas comparan el ahorro generado con los riesgos y costos de mover la producción.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["tecnologia", "causas"]

variables:
  avance: uno_de(["avances en las telecomunicaciones", "retrocesos en la navegación", "estancamiento digital"])

respuesta: "avances en las telecomunicaciones"
tipo: completar

enunciado: "La deslocalización se aceleró gracias a la globalización y a los {avance}."

explicacion: |
  La comunicación instantánea es vital para gestionar operaciones distribuidas geográficamente.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "basico"
  tags: ["norte_global", "ventajas"]

variables:
  ventaja: uno_de(["infraestructura sólida", "infraestructura precaria", "infraestructura obsoleta"])

respuesta: "infraestructura sólida"
tipo: completar

enunciado: "Los países del Norte Global mantienen {ventaja} como ventaja competitiva."

explicacion: |
  Aunque la manufactura se fue, la infraestructura y la tecnología siguen siendo fuertes en el Norte.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_industrial_mundial"
  nivel: "intermedio"
  tags: ["historia", "tendencia"]

variables:
  estado: uno_de(["se ha acelerado drásticamente", "se ha detenido", "es una tendencia nueva"])

respuesta: "se ha acelerado drásticamente"
tipo: completar

enunciado: "Aunque no es una tendencia nueva, la deslocalización {estado} en las últimas décadas."

explicacion: |
  La globalización reciente intensificó un fenómeno que existía desde antes, pero a otra escala.
```

## Sección: huella-de-carbono-agua-virtual (25 preguntas)

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["conceptos", "gases_efecto_invernadero"]

respuesta: "gases de efecto invernadero"
tipo: completar
respuestas_validas: ["gases de efecto invernadero"]

enunciado: "La huella de carbono es la totalidad de ___ emitidos por un individuo, organización, evento o producto, expresados en toneladas de CO2 equivalente."

explicacion: |
  La huella de carbono mide la cantidad de gases de efecto invernadero (GEI) que liberamos a la atmósfera como consecuencia de nuestras actividades diarias o procesos productivos.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["ecologia", "niveles_troficos"]

respuesta: "10%"
tipo: completar
respuestas_validas: ["10%"]

enunciado: "En una cadena alimentaria, según la regla del diez por ciento, sólo aproximadamente el ___ de la energía de un nivel trófico se transfiere al siguiente nivel."

explicacion: |
  Debido a que la mayor parte de la energía se pierde en forma de calor y procesos metabólicos durante la transferencia entre niveles, se requiere mucha más biomasa vegetal para producir una cantidad pequeña de carne, lo que aumenta la huella de carbono de los productos animales.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["alimentacion", "impacto_ambiental"]

respuesta: "la carne"
tipo: completar
respuestas_validas: ["la carne"]

enunciado: "Debido a la pérdida de energía entre los niveles tróficos, la huella de carbono de ___ es significativamente mayor que la de las verduras."

explicacion: |
  Para producir un kilo de carne se necesita alimentar al animal con muchos kilos de plantas. Como la energía se reduce drásticamente en cada paso (regla del 10%), el proceso de producción de carne requiere más recursos y emite más gases que la producción directa de vegetales.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["gases_efecto_invernadero", "ganaderia"]

respuesta: "metano"
tipo: completar
respuestas_validas: ["metano"]

enunciado: "Además del dióxido de carbono, la ganadería intensiva contribuye significativamente a la huella de carbono mediante la emisión de ___ durante la digestión de los rumiantes."

explicacion: |
  El metano (CH4) es un gas de efecto invernadero muy potente. Las emisiones de metano provenientes del ganado son uno de los factores principales que elevan la huella de carbono de los productos de origen animal.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["consumo_responsable", "ecologia"]

respuesta: "reducir"
tipo: completar
respuestas_validas: ["reducir"]

enunciado: "Para disminuir nuestra huella de carbono personal, es recomendable ___ el consumo de productos de origen animal y aumentar el de alimentos de origen vegetal."

explicacion: |
  Al consumir más productos vegetales, aprovechamos la energía de los productores primarios de forma más directa, evitando las ineficiencias de la cadena trófica y reduciendo la emisión de gases asociados a la ganadería.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["conceptos", "recursos_naturales"]

tipo: mc
opciones_explicitas: ["El agua que contiene un producto y que podemos beber directamente.", "El volumen total de agua utilizada en todo el proceso de producción de un bien.", "La cantidad de agua que se evapora de los océanos debido al calentamiento global.", "El agua que se utiliza exclusivamente para la limpieza de las fábricas."]

respuesta: "El volumen total de agua utilizada en todo el proceso de producción de un bien."

enunciado: "El concepto de 'agua virtual' se refiere a..."

explicacion: |
  El agua virtual es el volumen total de agua dulce que se consume en todas las etapas de producción de un producto (desde la extracción de materia prima hasta el procesamiento), aunque el producto final no parezca contener agua líquida.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["comparacion", "consumo"]

tipo: mc
opciones_explicitas: ["El café consume mucha más agua que un kilo de carne.", "La carne vacuna requiere una cantidad de agua significativamente mayor que el café.", "Ambos consumen la misma cantidad de agua por unidad.", "El café es un producto con huella hídrica nula."]

respuesta: "La carne vacuna requiere una cantidad de agua significativamente mayor que el café."

enunciado: "Considerando los valores promedio (café: ~140 litros/taza, carne vacuna: ~15.000 litros/kg), ¿cuál es la diferencia principal entre ambas huellas hídricas?"

explicacion: |
  La producción de carne vacuna requiere aproximadamente 15.000 litros de agua por kilo, mientras que una taza de café requiere cerca de 140 litros. La diferencia es masiva debido a la cantidad de agua necesaria para cultivar el forraje y el mantenimiento del ganado.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["ejemplos", "consumo_masivo"]

tipo: mc
opciones_explicitas: ["hamburguesa", "arroz", "café", "carne vacuna"]

enunciado: "De la siguiente lista, ¿cuál es el producto que requiere aproximadamente 2.500 litros de agua por kilo?"

respuesta: "arroz"

explicacion: |
  El arroz es un cultivo que requiere una gran cantidad de agua para su crecimiento en campos inundados, lo que resulta en una huella hídrica de aproximadamente 2.500 litros por kilo.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "avanzado"
  tags: ["calculo", "impacto"]

tipo: mc
opciones_explicitas: ["Una hamburguesa tiene una huella hídrica menor que un kilo de arroz.", "La huella hídrica de una hamburguesa es de aproximadamente 2500 litros.", "El consumo de carne no afecta la huella hídrica global.", "El agua virtual sólo se mide en productos industriales, no en alimentos."]

respuesta: "La huella hídrica de una hamburguesa es de aproximadamente 2500 litros."

enunciado: "Si analizamos el impacto del consumo de alimentos procesados, ¿cuál de estas afirmaciones es correcta?"

explicacion: |
  Una hamburguesa representa un producto de alto impacto hídrico, con una huella de aproximadamente 2500 litros, debido a la suma de la producción de carne, cereales y otros ingredientes.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["conceptos"]

tipo: vf
respuesta: verdadero

enunciado: "El concepto de agua virtual implica que, aunque no veamos agua en un paquete de arroz, se han utilizado miles de litros para su producción."

explicacion: |
  Es verdadero. El agua virtual es el agua "oculta" que se utiliza en la agricultura y la industria para crear productos que consumimos habitualmente.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["conceptos", "recursos_naturales"]

respuesta: "virtual"
tipo: completar
respuestas_validas: ["virtual"]

enunciado: "El término ___ se utiliza para referirse al volumen de agua que no se ve directamente pero que se utilizó en el proceso de producción de un bien o servicio."

explicacion: |
  Se llama "virtual" porque el agua no se consume en el sentido de desaparecer del planeta, sino que se utiliza en un proceso productivo y luego vuelve a la naturaleza a través del ciclo hidrológico.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["ciclo_del_agua", "produccion"]

respuesta: "ciclo del agua"
tipo: completar
respuestas_validas: ["ciclo del agua", "ciclo hidrológico"]

enunciado: "El agua utilizada en la agricultura o la industria no deja de existir tras la producción; simplemente se integra nuevamente en el ___."

explicacion: |
  El concepto de agua virtual resalta que el agua sigue fluyendo en el ciclo natural, pero su uso en la producción "desplaza" o "compromete" ese recurso para otros usos.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["consumo", "recursos"]

variables:
  idx: uno_de([0, 1])
  tabla: [["carne de vaca", "alto"], ["trigo", "bajo"]]

respuesta: tabla[idx][1]
tipo: completar
respuestas_validas: ["alto", "bajo"]

enunciado: "En la producción de {tabla[idx][0]}, el nivel de agua comprometida (agua virtual) para ese producto es ___."

explicacion: |
  El término "virtual" enfatiza que el agua está comprometida en la cadena de valor: la carne de vaca compromete mucha más agua que el trigo.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["impacto", "recursos"]

respuesta: "comprometida"
tipo: completar
respuestas_validas: ["comprometida"]

enunciado: "En lugar de decir que el agua es 'consumida' por un producto, se prefiere decir que es agua ___ en su proceso de fabricación."

explicacion: |
  Decir "consumida" daría la falsa idea de que el agua desaparece del planeta, mientras que "comprometida" indica que se ha utilizado para un fin específico.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "avanzado"
  tags: ["comercio", "globalizacion"]

respuesta: "importar"
tipo: completar
respuestas_validas: ["importar"]

enunciado: "Cuando un país compra productos de una región con escasez hídrica, en realidad está realizando una acción de ___ agua virtual."

explicacion: |
  El comercio internacional permite a las naciones "importar" agua de forma indirecta a través de los productos que adquieren de otros países.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["consumo_responsable", "recursos_naturales"]

enunciado: "Un productor de aguacates en una zona con escasez de agua decide utilizar tecnología de riego por goteo muy eficiente para reducir el uso de agua. Sin embargo, para mantener la cadena de frío y el transporte internacional hacia Europa, utiliza barcos y camiones que queman grandes cantidades de combustibles fósiles. En este escenario, el producto presenta una ___ huella hídrica pero una ___ huella de carbono."

opciones_explicitas: ["baja / alta", "alta / baja", "alta / alta", "baja / baja"]

respuesta: "baja / alta"
tipo: mc

explicacion: |
  El uso de riego eficiente reduce la huella hídrica, pero el transporte de larga distancia y la refrigeración incrementan la huella de carbono. Mirar ambos indicadores permite ver que la eficiencia en un recurso no compensa el impacto en otro.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["consumo_responsable", "recursos_naturales"]

enunciado: "Si analizamos la producción de carne de res, observamos que el proceso requiere grandes extensiones de tierra para pasturas y una cantidad masiva de agua para el riego de forraje y el consumo animal, además de las emisiones de metano. Por lo tanto, la carne de res se caracteriza por tener:"

opciones_explicitas: ["Baja huella de carbono y baja huella hídrica", "Baja huella de carbono y alta huella hídrica", "Alta huella de carbono y baja huella hídrica", "Alta huella de carbono y alta huella hídrica"]

respuesta: "Alta huella de carbono y alta huella hídrica"
tipo: mc

explicacion: |
  La producción ganadera intensiva o extensiva suele impactar ambos indicadores: el agua necesaria para el ciclo de vida del animal y los gases de efecto invernadero producidos por el ganado y el cambio de uso de suelo.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["metodologia", "sustentabilidad"]

enunciado: "Al evaluar el impacto ambiental de un producto importado, ¿cuál es la razón principal por la que es necesario mirar la huella de carbono Y la huella de agua de forma conjunta?"

opciones_explicitas: ["Porque un producto puede ser eficiente en un recurso pero altamente costoso en otro.", "Porque la huella de carbono siempre es mayor que la huella hídrica.", "Porque sólo así se puede calcular el precio final del producto.", "Porque la huella hídrica sólo se aplica a productos agrícolas."]

respuesta: "Porque un producto puede ser eficiente en un recurso pero altamente costoso en otro."
tipo: mc

explicacion: |
  El análisis integral evita mostrar una imagen parcial: un producto puede parecer ecológico por su baja emisión de CO2, pero estar agotando acuíferos críticos (costo ambiental oculto).
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["conceptos_clave"]

enunciado: "Cuando consumimos un producto que ha sido producido en una región con estrés hídrico extremo, aunque su transporte sea local y emita poco CO2, estamos consumiendo un ___ costo ambiental relacionado con el agua."

respuestas_validas: ["alto", "elevado", "significativo"]

respuesta: "alto"
tipo: completar

explicacion: |
  El concepto de "agua virtual" se refiere al agua que no vemos pero que se utilizó para producir un bien. Si esa agua proviene de zonas con escasez, el costo ambiental es muy alto para esa región.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "avanzado"
  tags: ["industria", "impacto"]

enunciado: "Considerá dos productos textiles: A (algodón convencional con riego intensivo en zona seca) y B (poliéster derivado del petróleo con transporte transoceánico). Si comparamos sus impactos, es correcto afirmar que:"

opciones_explicitas: ["El producto A tiene mayor huella hídrica y el B mayor huella de carbono.", "El producto B tiene mayor huella hídrica y el A mayor huella de carbono.", "Ambos tienen la misma huella en ambos indicadores.", "Ninguno de los dos tiene impacto ambiental significativo."]

respuesta: "El producto A tiene mayor huella hídrica y el B mayor huella de carbono."
tipo: mc

explicacion: |
  El algodón requiere cantidades masivas de agua para su cultivo (huella hídrica), mientras que el poliéster es un plástico derivado de combustibles fósiles cuya producción y transporte global elevan su huella de carbono.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["transporte", "emisiones", "consumo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["10 kg CO2"], ["50 kg CO2"], ["100 kg CO2"]]

enunciado: "Un consumidor elige un producto importado cuyo transporte genera una huella de carbono de {datos[idx][0]}. Si decide cambiar a un producto local, la huella se reduce significativamente. ¿Cuál es la huella de carbono del producto importado según el escenario actual?"

opciones_explicitas: ["10 kg CO2", "50 kg CO2", "100 kg CO2"]
respuesta: datos[idx][0]
tipo: mc

explicacion: |
  La huella de carbono del transporte depende de la distancia y el medio de transporte. Los productos locales reducen estas emisiones.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["agua_virtual", "consumo_responsable", "recursos_naturales"]

variables:
  idx: uno_de([0, 1])
  datos: [["carne de vaca", "15000 litros"], ["carne de pollo", "4000 litros"]]

enunciado: "El concepto de agua virtual se refiere al agua utilizada para producir un bien. Para producir 1 kg de {datos[idx][0]} se requieren aproximadamente ___."

respuestas_validas: ["15000 litros", "4000 litros"]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La producción de carne roja requiere una cantidad significativamente mayor de agua (para riego de forraje y bebida del animal) que la carne blanca.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "intermedio"
  tags: ["dieta", "huella_hídrica", "impacto_ambiental"]

variables:
  idx: uno_de([0, 1])
  datos: [["alta en proteína animal", "Mayor huella de agua"], ["basada en vegetales", "Menor huella de agua"]]

enunciado: "Si una persona mantiene una dieta {datos[idx][0]}, su huella de agua virtual será ___ en comparación con una dieta equilibrada."

opciones_explicitas: ["Mayor huella de agua", "Menor huella de agua", "Igual", "Nula"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Las dietas con alto contenido de productos de origen animal suelen tener una huella de agua virtual mucho más elevada debido a los procesos de producción ganadera.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "avanzado"
  tags: ["procesados", "emisiones", "ciclo_de_vida"]

variables:
  idx: uno_de([0, 1])
  datos: [["muy procesado", "2.5 kg CO2"], ["mínimamente procesado", "0.8 kg CO2"]]

enunciado: "Un producto {datos[idx][0]} tiene una huella de carbono de ___ por unidad."

opciones_explicitas: ["2.5 kg CO2", "0.8 kg CO2", "5.0 kg CO2", "1.2 kg CO2"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Los productos altamente procesados suelen tener una huella de carbono más alta debido a las etapas de transformación industrial y empaquetado.
```

```
metadata:
  materia: "geografia"
  tema: "huella_de_carbono_agua_virtual"
  nivel: "basico"
  tags: ["definiciones", "agua_virtual"]

enunciado: "La cantidad de agua que se utiliza para producir un bien o servicio, incluyendo el agua utilizada en la extracción de materias primas y el procesamiento, se denomina ___."

respuestas_validas: ["agua virtual", "huella hídrica"]
respuesta: "agua virtual"
tipo: completar

explicacion: |
  El "agua virtual" es el volumen de agua que no vemos pero que se ha consumido para fabricar un producto (por ejemplo, para cultivar el algodón de una camiseta).
```

## Sección: indicadores-sociales-de-argentina (23 preguntas)

```
metadata:
  materia: "geografia"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["hacinamiento", "calculos", "critico"]

variables:
  habitantes: 12
  dormitorios: 3

respuesta: "si"
tipo: input

enunciado: "En un hogar con {habitantes} habitantes y {dormitorios} dormitorios, ¿hay hacinamiento? (escribe 'si' o 'no')."

explicacion: |
  El ratio es 12 / 3 = 4. Como 4 es mayor que 2, hay hacinamiento.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["NBI", "definicion", "carencias"]

variables:
  condicion1: falso
  condicion2: falso
  condicion3: falso

respuesta: "al menos una"
tipo: completar

enunciado: "Un hogar se considera con Necesidad Básica Insatisfecha (NBI) si cumple {condicion1} una de las condiciones de carencia (vivienda precaria, hacinamiento o niños sin escolaridad)."

explicacion: |
  El NBI es un indicador compuesto. No basta con tener un solo problema; la definición clásica establece que si el hogar presenta AL MENOS UNA de las carencias estructurales (vivienda precaria, hacinamiento o falta de escolaridad infantil), se clasifica como NBI.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["hacinamiento", "calculo", "densidad"]

variables:
  habitantes: random(5, 15)
  dormitorios: random(1, 4)

respuesta: "{redondear(habitantes / dormitorios, 1)}"
tipo: input

enunciado: "Si un hogar tiene {habitantes} habitantes y {dormitorios} dormitorios, ¿cuál es la relación de personas por dormitorio? (Redondear a 1 decimal)."

explicacion: |
  El hacinamiento se mide dividiendo el número de habitantes entre el número de dormitorios. Si esta relación es mayor a 2, se considera hacinamiento severo. En este caso, la relación es {redondear(habitantes / dormitorios, 1)}.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["pobreza", "ingreso", "canasta"]

variables:
  tipo_pobreza: uno_de(["indigente", "general"])

respuesta: "{tipo_pobreza}"
tipo: completar

enunciado: "Cuando los ingresos de un hogar no alcanzan para cubrir la canasta básica de ALIMENTOS, se denomina pobreza {tipo_pobreza}."

explicacion: |
  La pobreza indigente se define específicamente por la incapacidad de cubrir la canasta básica de alimentos. La pobreza general abarca la canasta básica total (alimentos + bienes y servicios no alimentarios).
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["hacinamiento", "umbral", "regla"]

variables:
  valor: 2

respuesta: "2"
tipo: input

enunciado: "Según los estándares utilizados en Argentina, se considera que hay hacinamiento cuando la relación habitantes/dormitorios es mayor a {valor}."

explicacion: |
  El umbral clásico para detectar hacinamiento es una relación superior a 2 personas por dormitorio. Esto indica que el espacio físico es insuficiente para garantizar la privacidad y el descanso adecuado.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["desigualdad", "territorio", "pobreza"]

variables:
  region: uno_de(["norte", "centro", "sur"])

respuesta: "{region}"
tipo: completar

enunciado: "En Argentina, las provincias de la región {region} suelen presentar tasas más altas de pobreza e indicadores de carencia estructural en comparación con otras zonas del país."

explicacion: |
  Históricamente, las provincias del norte argentino presentan mayores índices de pobreza y NBI debido a factores estructurales, menos industrialización y menor acceso a servicios públicos comparado con el centro del país.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["vivienda", "NBI", "materiales"]

variables:
  material: uno_de(["ladrillo", "quincha", "madera"])

respuesta: "{material}"
tipo: completar

enunciado: "Para ser considerada vivienda precaria en el cálculo del NBI, el techo o las paredes deben estar construidos con materiales como {material} o similares no dignos, en lugar de ladrillo o bloques sólidos."

explicacion: |
  La condición de vivienda precaria se refiere a la falta de materiales de construcción dignos. Materiales como quincha, cartón o madera en mal estado suelen ser indicadores de esta carencia en las encuestas.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "avanzado"
  tags: ["migracion", "urbanizacion", "hacinamiento"]

variables:
  causa: "crecimiento_urbano_desordenado"

respuesta: "{causa}"
tipo: completar

enunciado: "El fenómeno de migración interna y el {causa} generan asentamientos periféricos donde el hacinamiento se intensifica debido a la falta de planificación territorial."

explicacion: |
  El crecimiento urbano desordenado, impulsado a menudo por migraciones internas hacia grandes ciudades, conduce a la formación de barrios periféricos con infraestructura deficiente, lo que agrava el problema del hacinamiento.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["pobreza", "definicion", "diferencia"]

variables:
  diferencia: "canasta_basica_total"

respuesta: "{diferencia}"
tipo: completar

enunciado: "La pobreza general se diferencia de la indigente porque toma como referencia la canasta básica de {diferencia}, que incluye alimentos y servicios no alimentarios."

explicacion: |
  La pobreza indigente mide la incapacidad de comprar alimentos. La pobreza general mide la incapacidad de cubrir la canasta básica total, que es más amplia e incluye servicios como transporte, salud y vestimenta.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["NBI", "logica", "condicion"]

variables:
  tiene_vivienda_pobre: verdadero
  tiene_hacinamiento: falso
  ninos_sin_escuela: falso

respuesta: "si"
tipo: completar

enunciado: "Si un hogar tiene vivienda precaria ({tiene_vivienda_pobre}), no tiene hacinamiento ({tiene_hacinamiento}) y sus hijos asisten a la escuela ({ninos_sin_escuela}), ¿tiene NBI? (Responder 'si' o 'no')."

explicacion: |
  Si. El hogar tiene NBI porque cumple con al menos una de las condiciones: la vivienda precaria. No es necesario que cumpla todas las condiciones, solo una es suficiente para ser clasificado como tal.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["importancia", "calidad_vida", "estadistica"]

variables:
  funcion: "cuantificar"

respuesta: "{funcion}"
tipo: completar

enunciado: "Los indicadores sociales permiten {funcion} la calidad de vida de una población, transformando condiciones subjetivas en datos objetivos y medibles."

explicacion: |
  Los indicadores sociales son herramientas estadísticas fundamentales para cuantificar (medir numéricamente) aspectos como la salud, educación y vivienda, permitiendo comparar realidades y diseñar políticas públicas.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["hacinamiento", "severo", "definicion"]

variables:
  limite: 2

respuesta: "2"
tipo: input

enunciado: "Se considera hacinamiento severo cuando la relación de habitantes por dormitorio supera el límite de {limite}."

explicacion: |
  El umbral estándar para considerar hacinamiento es una relación mayor a 2 personas por dormitorio. Si la relación es mayor a este número, se considera que el espacio es insuficiente para el bienestar de los ocupantes.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "avanzado"
  tags: ["desigualdad", "territorio", "patrones"]

variables:
  patron: "geograficos"

respuesta: "{patron}"
tipo: completar

enunciado: "La distribución de la pobreza en Argentina revela patrones {patron} claros, concentrándose más en ciertas provincias y periferias urbanas que en otras."

explicacion: |
  La pobreza no se distribuye aleatoriamente; sigue patrones geográficos históricos y económicos, afectando desproporcionadamente a las regiones del norte y a los cinturones de pobreza alrededor de las grandes ciudades.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["NBI", "educacion", "escolaridad"]

variables:
  condicion: "asistir"

respuesta: "{condicion}"
tipo: completar

enunciado: "Una de las variables del NBI es la escolaridad: se considera carencia si hay niños en el hogar que no {condicion} a la escuela."

explicacion: |
  La falta de escolaridad infantil es un indicador clave de pobreza intergeneracional. Si un niño en edad escolar no asiste a la escuela, el hogar es marcado como con NBI por esta variable.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["pobreza", "calcula", "porcentaje"]

variables:
  total_poblacion: random(1000000, 5000000)
  poblacion_pobre: random(200000, 1500000)

respuesta: "{redondear(poblacion_pobre / total_poblacion * 100, 1)}"
tipo: input

enunciado: "Si en una provincia de {total_poblacion} habitantes, {poblacion_pobre} viven en situación de pobreza, ¿cuál es la tasa de pobreza? (Expresar como número entero o decimal, sin el símbolo %)."

explicacion: |
  La tasa de pobreza se calcula dividiendo la población pobre entre la población total y multiplicando por 100. En este caso: {poblacion_pobre} / {total_poblacion} * 100 = {redondear(poblacion_pobre / total_poblacion * 100, 1)}%.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["hacinamiento", "privacidad", "impacto"]

variables:
  impacto: "menores"

respuesta: "{impacto}"
tipo: completar

enunciado: "El hacinamiento se traduce en {impacto} oportunidades de desarrollo personal y comunitario debido a la falta de espacio físico y privacidad."

explicacion: |
  La falta de espacio adecuado afecta directamente la salud mental, el rendimiento escolar y la cohesión social, generando un ciclo de desventaja para las familias que viven en condiciones de hacinamiento.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["pobreza", "indigente", "alimentos"]

variables:
  referencia: "alimentos"

respuesta: "{referencia}"
tipo: completar

enunciado: "La pobreza indigente se define como la incapacidad de cubrir la canasta básica de {referencia}."

explicacion: |
  La pobreza indigente es la forma más extrema de exclusión, donde el hogar no puede comprar ni siquiera los alimentos mínimos necesarios para sobrevivir.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["NBI", "servicios", "acceso"]

variables:
  relacion: "acceso"

respuesta: "{relacion}"
tipo: completar

enunciado: "El NBI captura la falta de {relacion} a servicios básicos y educación, más allá de la situación económica del hogar."

explicacion: |
  El NBI es una medida de acceso a derechos básicos. Evalúa si la familia tiene acceso efectivo a una vivienda digna, un espacio habitable adecuado y la educación obligatoria para sus hijos.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["pobreza", "general", "servicios"]

variables:
  servicios: "no alimentarios"

respuesta: "{servicios}"
tipo: completar

enunciado: "La pobreza general incluye la incapacidad de cubrir la canasta básica de alimentos más los bienes y servicios {servicios}."

explicacion: |
  La pobreza general es un indicador más amplio que la indigente. Incluye la capacidad de cubrir no solo la alimentación, sino también gastos esenciales como transporte, salud, vestimenta y vivienda.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "avanzado"
  tags: ["hacinamiento", "distribucion", "urbano"]

variables:
  zona: "periferias"

respuesta: "{zona}"
tipo: completar

enunciado: "El hacinamiento en Argentina es más frecuente en las {zona} de las grandes ciudades y en asentamientos informales, debido al crecimiento demográfico no planificado."

explicacion: |
  El hacinamiento no es uniforme. Se concentra en las periferias urbanas donde la oferta de vivienda formal es escasa y los precios son prohibitivos, forzando a las familias a ocupar espacios insuficientes.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "avanzado"
  tags: ["hacinamiento", "salud", "impacto"]

variables:
  efecto: "mayor"

respuesta: "{efecto}"
tipo: completar

enunciado: "El hacinamiento está ligado a un {efecto} riesgo de enfermedades respiratorias y infecciosas debido a la falta de ventilación y higiene adecuada."

explicacion: |
  La densidad poblacional excesiva en espacios reducidos facilita la transmisión de enfermedades y dificulta el mantenimiento de condiciones higiénicas, impactando negativamente en la salud pública.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "intermedio"
  tags: ["pobreza", "economia", "fluctuacion"]

variables:
  variable: "economia"

respuesta: "{variable}"
tipo: completar

enunciado: "La tasa de pobreza en Argentina suele fluctuar con la {variable} nacional, aumentando en tiempos de crisis y disminuyendo en etapas de crecimiento."

explicacion: |
  A diferencia del NBI que es más estructural y cambia lentamente, la pobreza por ingreso es más sensible a los ciclos económicos, variando rápidamente con la inflación y el empleo.
```

```
metadata:
  materia: "Geografía"
  tema: "indicadores_sociales_de_argentina"
  nivel: "basico"
  tags: ["resumen", "indicadores", "importancia"]

variables:
  objetivo: "desigualdad"

respuesta: "{objetivo}"
tipo: completar

enunciado: "Los indicadores sociales como NBI, pobreza y hacinamiento son fundamentales para entender la {objetivo} territorial en Argentina."

explicacion: |
  Estos indicadores permiten objetivar la desigualdad territorial, mostrando que la calidad de vida no es uniforme en el territorio y ayudando a identificar las zonas que requieren intervención prioritaria.
```

## Sección: indice-de-desarrollo-humano (23 preguntas)

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculo", "normalizacion"]

variables:
  esperanza: random(40, 80)

respuesta: redondear((esperanza - 20) / (85 - 20), 3)
tipo: input

enunciado: "Si la esperanza de vida es {esperanza} años, ¿cuál es el índice normalizado? (Rango min: 20, max: 85)."

explicacion: |
  Se resta el mínimo (20) al valor real y se divide por el rango (65).
```

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculo", "normalizacion"]

variables:
  esperanza: random(50, 84)

respuesta: redondear((esperanza - 20) / (85 - 20), 3)
tipo: input

enunciado: "Con una esperanza de vida de {esperanza} años, calcula el índice de salud."

explicacion: |
  Fórmula: (valor_real - minimo) / (maximo - minimo)."
```

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculo", "ejemplo"]

variables:
  val: uno_de([0.5, 0.6, 0.7, 0.8])

respuesta: redondear(val, 3)
tipo: input

enunciado: "Si los índices de salud, educación e ingreso son todos {val}, ¿cuál es el IDH?"

explicacion: |
  La media geométrica de tres valores iguales es el valor mismo: (val * val * val)^(1/3) = val.
```

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculo", "limite"]

variables:
  esperanza: 85

respuesta: 1.0
tipo: input

enunciado: "Si la esperanza de vida es 85 años, ¿cuál es el índice de salud? (min: 20, max: 85)."

explicacion: |
  (85 - 20) / (85 - 20) = 1.0. Es el valor máximo posible.
```

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculo", "limite"]

variables:
  esperanza: 20

respuesta: 0.0
tipo: input

enunciado: "Si la esperanza de vida es 20 años, ¿cuál es el índice de salud? (min: 20, max: 85)."

explicacion: |
  (20 - 20) / (85 - 20) = 0.0. Es el valor mínimo posible.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["definicion", "concepto"]

variables:
  opcion_correcta: "medir el bienestar humano"
  opcion_a: "medir el crecimiento del PIB"
  opcion_b: "medir la producción industrial"
  opcion_c: "medir la superficie territorial"

respuesta: opcion_correcta
tipo: mc

enunciado: "El Índice de Desarrollo Humano (IDH) fue creado para evaluar el progreso de los países más allá del simple crecimiento económico. ¿Qué busca medir principalmente?"

opciones_explicitas: [opcion_a, opcion_b, opcion_correcta, opcion_c]

explicacion: |
  El IDH busca evaluar la capacidad de las personas para llevar una vida larga, saludable y creativa, yendo más allá del PIB.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["dimensiones", "salud", "educacion"]

variables:
  dim1: "Salud"
  dim2: "Educación"
  dim3: "Estándar de vida digna"
  distractor: "Seguridad nacional"

respuesta: "Salud, Educación, Estándar de vida digna"
tipo: completar

enunciado: "El IDH se basa en tres dimensiones principales. Nombra las tres correctamente: {dim1}, {dim2} y {dim3}."

respuestas_validas:
  - "Salud, Educación, Estándar de vida digna"
  - "Salud, educación, estándar de vida digna"
  - "Salud, Educación, estándar de vida digna"

explicacion: |
  Las tres dimensiones son: Salud (esperanza de vida), Educación (años de escolaridad) y Estándar de vida digna (ingreso per cápita).
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["indicadores", "salud"]

variables:
  indicador: "esperanza de vida al nacer"

respuesta: indicador
tipo: completar

enunciado: "La dimensión de salud en el cálculo del IDH se mide a través del indicador: {indicador}."

respuestas_validas:
  - "esperanza de vida al nacer"
  - "Esperanza de vida al nacer"
  - "esperanza de vida"

explicacion: |
  La esperanza de vida al nacer refleja el acceso a servicios médicos y condiciones de higiene.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["educacion", "indicadores"]

variables:
  comp1: "promedio de años de escolaridad"
  comp2: "años esperados de escolarización"

respuesta: "promedio de años de escolaridad y años esperados de escolarización"
tipo: completar

enunciado: "El índice de educación combina dos indicadores: el {comp1} para los adultos y los {comp2} para los niños."

respuestas_validas:
  - "promedio de años de escolaridad y años esperados de escolarización"
  - "promedio de años de escolaridad, años esperados de escolarización"

explicacion: |
  La educación se mide combinando la escolaridad actual de los adultos y la proyección para los niños.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["ingreso", "economia"]

variables:
  indicador_ingreso: "ingreso nacional bruto (INB) per cápita"

respuesta: indicador_ingreso
tipo: completar

enunciado: "El estándar de vida digna se evalúa mediante el {indicador_ingreso}, ajustado por el poder adquisitivo."

respuestas_validas:
  - "ingreso nacional bruto (INB) per cápita"
  - "ingreso nacional bruto per cápita"
  - "INB per cápita"

explicacion: |
  Se utiliza el INB per cápita ajustado por paridad de poder adquisitivo para comparar niveles de vida.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["escala", "valores"]

variables:
  min_val: "0"
  max_val: "1"

respuesta: "0 a 1"
tipo: completar

enunciado: "El puntaje único del IDH va de {min_val} a {max_val}, donde un valor más cercano a 1 indica mayor desarrollo."

respuestas_validas:
  - "0 a 1"
  - "de 0 a 1"
  - "0-1"

explicacion: |
  El índice está normalizado entre 0 (mínimo desarrollo) y 1 (máximo desarrollo).
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["historia", "instituciones"]

variables:
  organizacion: "PNUD"

respuesta: organizacion
tipo: completar

enunciado: "El Índice de Desarrollo Humano fue creado por el Programa de las Naciones Unidas para el Desarrollo, conocido como {organizacion}."

respuestas_validas:
  - "PNUD"
  - "pnud"
  - "Programa de las Naciones Unidas para el Desarrollo"

explicacion: |
  El PNUD (Programa de las Naciones Unidas para el Desarrollo) es la entidad creadora.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["interpretacion"]

variables:
  valor_idh: "0.45"

respuesta: "bajo desarrollo humano"
tipo: completar

enunciado: "Un país con un IDH de {valor_idh} se clasifica típicamente en:"

respuestas_validas:
  - "bajo desarrollo humano"
  - "Bajo desarrollo humano"
  - "desarrollo humano bajo"

explicacion: |
  Valores cercanos a 0 indican bajo desarrollo humano.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["exclusion"]

variables:
  no_incluida: "Tasa de alfabetización"
  incluida: "Esperanza de vida"

respuesta: no_incluida
tipo: mc

enunciado: "¿Cuál de estos NO es un indicador directo en las dimensiones principales del IDH tradicional?"

opciones_explicitas: [no_incluida, incluida, "Ingreso per cápita", "Años esperados de escolaridad"]

explicacion: |
  La tasa de alfabetización fue reemplazada por indicadores de años de escolaridad en versiones recientes.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculos", "normalizacion"]

variables:
  esperanza: "85"
  min_val: "20"
  max_val: "85"

respuesta: "1.0"
tipo: input

enunciado: "Si la esperanza de vida es {esperanza} años (máximo teórico {max_val}), ¿cuál es el índice normalizado?"

explicacion: |
  (85 - 20) / (85 - 20) = 1.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["calculos", "normalizacion"]

variables:
  esperanza: "20"
  min_val: "20"
  max_val: "85"

respuesta: "0.0"
tipo: input

enunciado: "Si la esperanza de vida es {esperanza} años (mínimo teórico {min_val}), ¿cuál es el índice normalizado?"

explicacion: |
  (20 - 20) / (85 - 20) = 0.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["clasificacion"]

variables:
  umbral: "0.80"

respuesta: "alto desarrollo humano"
tipo: completar

enunciado: "Un país con IDH superior a {umbral} se clasifica usualmente como:"

respuestas_validas:
  - "alto desarrollo humano"
  - "Alto desarrollo humano"
  - "desarrollo humano alto"

explicacion: |
  Tradicionalmente, >0.80 se considera alto desarrollo.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "basico"
  tags: ["educacion"]

variables:
  indicador: "años esperados de escolarización"

respuesta: indicador
tipo: completar

enunciado: "El indicador que proyecta el futuro educativo de los niños es el {indicador}."

respuestas_validas:
  - "años esperados de escolarización"
  - "Años esperados de escolarización"

explicacion: |
  Este indicador mira hacia el futuro, a diferencia del promedio de años ya completados.
```

```
metadata:
  materia: "Geografía"
  tema: "indice_de_desarrollo_humano"
  nivel: "avanzado"
  tags: ["calculos"]

variables:
  i1: "1.0"
  i2: "0.0"
  i3: "1.0"

respuesta: "0.0"
tipo: input

enunciado: "Si un país tiene índices de Salud: {i1}, Educación: {i2}, Ingreso: {i3}, ¿cuál es su IDH?"

explicacion: |
  (1.0 * 0.0 * 1.0)^(1/3) = 0. La media geométrica castiga fuertemente el cero.
```

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "avanzado"
  tags: ["idh", "calculo", "normalizacion"]

variables:
  esperanza_real: random(50, 80)

respuesta: redondear((esperanza_real - 20) / (85 - 20), 3)
tipo: input

enunciado: "Si un país tiene una esperanza de vida de {esperanza_real} años, ¿cuál es su índice de salud normalizado (min 20, max 85)?"

explicacion: |
  Se usa la fórmula: (valor real - min) / (max - min). Aquí: (esperanza_real - 20) / 65.
```

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "avanzado"
  tags: ["idh", "calculo", "educación"]

variables:
  años_esperados: random(10, 18)
  promedio_adultos: random(6, 15)

respuesta: redondear((años_esperados + promedio_adultos) / 2 / 25, 3)
tipo: input

enunciado: "Si los años esperados de escolarización son {años_esperados} y el promedio de años de adultos es {promedio_adultos}, y la meta máxima es 25, ¿cuál es el índice educativo aproximado (media de los dos indicadores dividida por 25)?"

explicacion: |
  El índice de educación combina ambos indicadores. Aquí se simplifica como la media de los dos valores dividida por el máximo teórico (25).
```

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "avanzado"
  tags: ["idh", "calculo", "ingreso"]

variables:
  inb_real: random(2000, 40000)

respuesta: redondear((log(inb_real) - log(100)) / (log(75000) - log(100)), 3)
tipo: input

enunciado: "Si el INB per cápita es {inb_real} dólares, y se usa la transformación logarítmica con min_log=100 y max_log=75000, ¿cuál es el índice de ingreso?"

explicacion: |
  El IDH usa logaritmo natural para el ingreso. Fórmula: (ln(valor) - ln(min)) / (ln(max) - ln(min)).
```

```
metadata:
  materia: "geografia"
  tema: "indice_de_desarrollo_humano"
  nivel: "intermedio"
  tags: ["idh", "normalización", "escala"]

respuesta: "0 a 1"
tipo: completar

enunciado: "Cada dimensión se normaliza a una escala de {0 a 1} antes de calcular el IDH final."

explicacion: |
  La normalización permite sumar o multiplicar indicadores con unidades diferentes (años, dólares, etc.).
```

## Sección: mapa-plano-escala (20 preguntas)

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["plano_vs_mapa"]

enunciado: "¿Cuál es la diferencia principal entre un plano y un mapa?"
tipo: mc
opciones_explicitas:
  - "El plano representa un espacio chico donde la curvatura terrestre no importa; el mapa representa un espacio grande donde sí"
  - "El plano usa colores y el mapa no"
  - "No hay diferencia, son sinónimos exactos"
respuesta: "El plano representa un espacio chico donde la curvatura terrestre no importa; el mapa representa un espacio grande donde sí"

explicacion: |
  Un plano de una casa o un barrio puede tratar la superficie como
  plana; un mapa de un país o el mundo tiene que lidiar con la
  curvatura real de la Tierra.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["plano_vs_mapa"]

enunciado: "¿Cuál de estos ejemplos es más probable que se represente con un plano en vez de un mapa?"
tipo: mc
opciones_explicitas:
  - "El interior de un shopping"
  - "Los países de Sudamérica"
  - "El mundo entero"
respuesta: "El interior de un shopping"

explicacion: |
  Un espacio chico y de detalle fino (un edificio, un barrio) se
  representa con un plano.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["tipos_de_mapa"]

enunciado: "¿Qué muestra principalmente un mapa político?"
tipo: mc
opciones_explicitas:
  - "Límites entre países o provincias y sus capitales"
  - "El relieve del terreno"
  - "La densidad de población"
respuesta: "Límites entre países o provincias y sus capitales"

explicacion: |
  El mapa político representa la división administrativa del espacio,
  no su forma natural ni datos estadísticos.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["tipos_de_mapa"]

enunciado: "¿Qué muestra principalmente un mapa físico?"
tipo: mc
opciones_explicitas:
  - "El relieve: montañas, llanuras, ríos y costas"
  - "Los límites entre países"
  - "El resultado de una elección por región"
respuesta: "El relieve: montañas, llanuras, ríos y costas"

explicacion: |
  El mapa físico muestra la forma natural del terreno, sin límites
  administrativos.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["tipos_de_mapa"]

enunciado: "Un mapa que muestra la densidad de población de cada provincia con distintos colores es un ejemplo de mapa..."
tipo: mc
opciones_explicitas:
  - "Temático"
  - "Físico"
  - "Político"
respuesta: "Temático"

explicacion: |
  Un mapa temático muestra un dato específico distribuido en el
  espacio — en este caso, densidad de población.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["tipos_de_mapa"]

enunciado: "Un buen mapa siempre muestra toda la información posible del territorio (relieve, límites políticos, población, clima) a la vez."
tipo: vf
respuesta: falso

explicacion: |
  Cada tipo de mapa elige qué información representar y descarta el
  resto — mostrar todo a la vez saturaría la lectura.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["escala", "vocabulario"]

enunciado: "¿Qué es la escala de un mapa?"
tipo: mc
opciones_explicitas:
  - "La relación entre el tamaño representado en el mapa y el tamaño real del territorio"
  - "La cantidad de colores usados en el mapa"
  - "El año en que se hizo el mapa"
respuesta: "La relación entre el tamaño representado en el mapa y el tamaño real del territorio"

explicacion: |
  Todo mapa reduce el territorio real para que entre en una hoja o
  pantalla; la escala indica en qué proporción.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["escala"]

enunciado: "Una escala escrita como 1:100.000 significa que..."
tipo: mc
opciones_explicitas:
  - "1 unidad en el mapa equivale a 100.000 de esas mismas unidades en la realidad"
  - "El mapa tiene 100.000 kilómetros de ancho"
  - "El mapa se hizo con 100.000 mediciones distintas"
respuesta: "1 unidad en el mapa equivale a 100.000 de esas mismas unidades en la realidad"

explicacion: |
  Es una razón: por cada unidad de longitud en el papel, hay 100.000
  unidades iguales en el territorio real.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["escala"]

enunciado: "¿Qué es una escala gráfica?"
tipo: mc
opciones_explicitas:
  - "Una barra dibujada en el mapa con marcas de distancias reales"
  - "Un número que indica cuántos colores tiene el mapa"
  - "La cantidad de países que aparecen en el mapa"
respuesta: "Una barra dibujada en el mapa con marcas de distancias reales"

explicacion: |
  Es una representación visual de la escala, útil porque se agranda o
  achica junto con el mapa si éste cambia de tamaño.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "avanzado"
  tags: ["escala"]

enunciado: "¿Por qué una escala gráfica sigue siendo correcta después de fotocopiar el mapa agrandado, mientras que la escala numérica deja de serlo?"
tipo: mc
opciones_explicitas:
  - "Porque la barra gráfica se agranda junto con el mapa; el número de la escala numérica no cambia solo"
  - "Porque la escala gráfica no depende del tamaño del mapa"
  - "Porque la escala numérica es siempre más precisa"
respuesta: "Porque la barra gráfica se agranda junto con el mapa; el número de la escala numérica no cambia solo"

explicacion: |
  Al fotocopiar agrandado, la barra dibujada crece en la misma
  proporción que todo el mapa y sigue midiendo lo correcto; el "1:100.000"
  escrito queda igual aunque el mapa ya no sea ese tamaño.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["proyecciones"]

enunciado: "Existe una forma de proyectar la superficie curva de la Tierra sobre un papel plano sin distorsionar nada."
tipo: vf
respuesta: falso

explicacion: |
  Es matemáticamente imposible: toda proyección distorsiona algo (forma,
  tamaño relativo, distancia o dirección) — no hay una perfecta.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "avanzado"
  tags: ["proyecciones"]

enunciado: "La proyección Mercator prioriza mantener las formas correctas (útil para navegación). ¿Qué distorsiona a cambio?"
tipo: mc
opciones_explicitas:
  - "El tamaño relativo de las áreas, agrandando mucho las zonas cercanas a los polos"
  - "Los límites políticos entre países"
  - "El nombre de los océanos"
respuesta: "El tamaño relativo de las áreas, agrandando mucho las zonas cercanas a los polos"

explicacion: |
  Por eso en un mapa Mercator Groenlandia se ve casi tan grande como
  África, cuando África es unas 14 veces más grande en la realidad.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "avanzado"
  tags: ["proyecciones"]

enunciado: "En la proyección Mercator, Groenlandia se ve casi del mismo tamaño que África. En la realidad, ¿cuál es más grande?"
tipo: mc
opciones_explicitas:
  - "África, ampliamente"
  - "Groenlandia, ampliamente"
  - "Son del mismo tamaño real"
respuesta: "África, ampliamente"

explicacion: |
  África es real unas 14 veces más grande que Groenlandia — la
  Mercator distorsiona el tamaño relativo para preservar las formas.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["plano_vs_mapa"]

enunciado: "¿Por qué el plano de un barrio no necesita ninguna proyección especial para la curvatura terrestre, pero un mapa del mundo sí?"
tipo: mc
opciones_explicitas:
  - "Porque en un área tan chica la curvatura de la Tierra es imperceptible"
  - "Porque los barrios no tienen curvatura"
  - "Porque los planos siempre son más precisos que los mapas"
respuesta: "Porque en un área tan chica la curvatura de la Tierra es imperceptible"

explicacion: |
  A escala de un barrio o ciudad, tratar la superficie como plana no
  genera un error perceptible; a escala de un continente, sí.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["lectura_de_mapas"]

enunciado: "¿Para qué sirve que un mapa incluya una rosa de los vientos o una flecha marcando el norte?"
tipo: mc
opciones_explicitas:
  - "Para poder relacionar lo dibujado con la orientación real del territorio"
  - "Para decorar el mapa"
  - "Para indicar la escala"
respuesta: "Para poder relacionar lo dibujado con la orientación real del territorio"

explicacion: |
  Sin esa referencia, un mapa girado respecto al terreno sería
  ilegible aunque tuviera toda la información correcta — por eso este
  tema depende de `../orientacion-puntos-cardinales/`.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["tipos_de_mapa"]

enunciado: "Para planificar una ruta de trekking por zonas montañosas, ¿qué tipo de mapa es más útil?"
tipo: mc
opciones_explicitas:
  - "Un mapa físico, que muestra el relieve"
  - "Un mapa político, que muestra límites de países"
  - "Un mapa temático de resultados electorales"
respuesta: "Un mapa físico, que muestra el relieve"

explicacion: |
  El relieve (montañas, pendientes, ríos) es justo lo que un mapa
  físico representa.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "intermedio"
  tags: ["tipos_de_mapa"]

enunciado: "Para saber a qué provincia pertenece una ciudad, ¿qué tipo de mapa es más útil?"
tipo: mc
opciones_explicitas:
  - "Un mapa político"
  - "Un mapa físico"
  - "Un mapa temático de clima"
respuesta: "Un mapa político"

explicacion: |
  Los límites administrativos (provincias, países) son lo que muestra
  un mapa político.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "avanzado"
  tags: ["escala"]

enunciado: "Si un mapa con escala numérica 1:50.000 se fotocopia agrandado al doble, ese \"1:50.000\" impreso sigue siendo la escala correcta de la fotocopia."
tipo: vf
respuesta: falso

explicacion: |
  Al agrandar el papel, la relación real entre lo dibujado y el
  territorio cambió, pero el número impreso quedó igual — por eso la
  escala numérica deja de ser confiable después de una ampliación o
  reducción, a diferencia de la gráfica.
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "avanzado"
  tags: ["proyecciones"]

enunciado: "¿Existe una proyección cartográfica objetivamente \"mejor\" que las demás?"
tipo: mc
opciones_explicitas:
  - "No: cada una es un compromiso distinto entre qué preservar (forma o tamaño relativo) y qué sacrificar"
  - "Sí, la Mercator es la mejor en todos los casos"
  - "Sí, cualquier proyección moderna elimina toda distorsión"
respuesta: "No: cada una es un compromiso distinto entre qué preservar (forma o tamaño relativo) y qué sacrificar"

explicacion: |
  No existe una proyección perfecta — la elección depende de para qué
  se va a usar el mapa (navegar, comparar superficies, etc.).
```

```
metadata:
  materia: "geografia"
  tema: "mapa_plano_escala"
  nivel: "basico"
  tags: ["plano_vs_mapa"]

enunciado: "Un dibujo que muestra las habitaciones de una casa con sus medidas es..."
tipo: mc
opciones_explicitas:
  - "Un plano"
  - "Un mapa físico"
  - "Un mapa temático"
respuesta: "Un plano"

explicacion: |
  Representa un espacio chico con nivel de detalle fino: es un plano,
  no un mapa.
```
