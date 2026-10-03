# Examen jefe — [PENDIENTE #799]

> Logro #799. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **154 preguntas totales** en 5/5 secciones.

---

## Sección: regiones-naturales-de-argentina (24 preguntas)

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

variables:
  n: random(1, 5)

respuesta: "regiones naturales"
tipo: completar

enunciado: "Los geógrafos dividen el territorio argentino en {n} grandes áreas basadas en características físicas similares como clima y relieve. ¿Cómo se llaman estas áreas?"

explicacion: |
  Estas áreas se denominan 'regiones naturales'. No son límites políticos, sino zonas con características físicas homogéneas (suelo, clima, flora, fauna).
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["clasificacion", "regiones"]

variables:
  n: random(1, 5)

respuesta: "cinco"
tipo: input

enunciado: "Tradicionalmente, se reconocen {n} grandes regiones naturales en Argentina."

explicacion: |
  Las cinco regiones tradicionales son: NOA, NEA, Región Pampeana, Cuyo y Patagonia.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["noa", "relieve", "clima"]

variables:
  p: uno_de(["Jujuy", "Salta", "Tucumán", "Catamarca"])

respuesta: verdadero
tipo: vf

enunciado: "La provincia de {p} se encuentra dentro de la región del Noroeste (NOA), caracterizada por grandes contrastes entre picos andinos y valles áridos."

explicacion: |
  El NOA abarca provincias como Jujuy, Salta, Tucumán y Catamarca. Presenta una gran diversidad climática y de relieve.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["nea", "clima", "humedad"]

variables:
  n: random(1, 2)

respuesta: "subtropical húmedo"
tipo: completar

enunciado: "El NEA (Noreste Argentino) tiene un clima predominantemente {n}."

explicacion: |
  El NEA es la región más húmeda y selvática del país, con un clima subtropical y lluvias abundantes durante todo el año.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["nea", "biodiversidad", "selva"]

variables:
  n: random(1, 3)

respuesta: "Misiones"
tipo: input

enunciado: "La Selva Paranaense, una gran reserva de biodiversidad, se extiende principalmente en la provincia de {n}."

explicacion: |
  La Selva Paranaense es característica del NEA, especialmente en la provincia de Misiones, aunque también se encuentra en partes de Corrientes y Entre Ríos.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["pampeana", "suelo", "agricultura"]

variables:
  n: random(1, 2)

respuesta: "fértil"
tipo: completar

enunciado: "La Región Pampeana se destaca por tener un suelo profundo y {n}."

explicacion: |
  La fertilidad del suelo pampeano es su principal ventaja para la agricultura intensiva y la ganadería.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["pampeana", "clima"]

variables:
  n: random(1, 2)

respuesta: "templado"
tipo: input

enunciado: "El clima de la Región Pampeana es de tipo {n}, con veranos calurosos e inviernos suaves."

explicacion: |
  La Región Pampeana tiene un clima templado, lo que favorece el cultivo de granos como trigo, maíz y soja.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["nea", "provincias"]

variables:
  p: uno_de(["Misiones", "Corrientes", "Entre Ríos", "Chaco"])

respuesta: verdadero
tipo: vf

enunciado: "La provincia de {p} forma parte de la región del Noreste (NEA)."

explicacion: |
  El NEA incluye Misiones, Corrientes, Entre Ríos y Chaco.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["cuyo", "relieve", "andino"]

variables:
  n: random(1, 2)

respuesta: "árido"
tipo: completar

enunciado: "Cuyo es una región de relieve montañoso y clima predominantemente {n}."

explicacion: |
  Cuyo se encuentra al oeste, con influencia de la Cordillera de los Andes. Es una zona árida donde la irrigación es clave para la agricultura (viñedos).
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["patagonia", "clima", "frío"]

variables:
  n: random(1, 2)

respuesta: "frío"
tipo: input

enunciado: "La Patagonia se caracteriza por un clima predominantemente {n} y seco."

explicacion: |
  La Patagonia es la región más extensa del sur, con climas fríos y secos, y paisajes que van desde estepas hasta glaciares.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["nea", "desafios", "inundaciones"]

variables:
  n: random(1, 2)

respuesta: "inundaciones"
tipo: input

enunciado: "En el NEA, la abundancia de agua y lluvias puede causar {n} estacionales que afectan a ciudades ribereñas."

explicacion: |
  Las inundaciones son un desafío común en el NEA debido al clima húmedo y la proximidad a grandes ríos como el Paraná y el Uruguay.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["pampeana", "ubicacion"]

variables:
  n: random(1, 2)

respuesta: "Buenos Aires"
tipo: input

enunciado: "La Región Pampeana se extiende desde el norte de la provincia de {n} hasta el sur de Santa Fe y Córdoba."

explicacion: |
  El corazón productivo de Argentina abarca el norte de Buenos Aires, el sur de Santa Fe y el norte de Córdoba.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["cuyo", "produccion", "vino"]

variables:
  n: random(1, 2)

respuesta: "viñedos"
tipo: completar

enunciado: "En Cuyo, el clima árido y la irrigación permiten el desarrollo de {n} de altura."

explicacion: |
  Cuyo es famoso mundialmente por sus viñedos, especialmente en provincias como Mendoza y San Juan.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["patagonia", "extencion"]

variables:
  n: random(1, 2)

respuesta: "extensa"
tipo: input

enunciado: "La Patagonia es la región más {n} de Argentina, ubicada en el sur del país."

explicacion: |
  La Patagonia ocupa una vasta porción del sur argentino, desde la cordillera hasta el océano Atlántico.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["noa", "contrastes"]

variables:
  n: random(1, 2)

respuesta: "contrastes"
tipo: completar

enunciado: "El NOA es conocido por sus grandes {n} entre los picos andinos y las llanuras chaqueñas."

explicacion: |
  La diversidad geográfica del NOA es extrema, pasando de nevados a valles cálidos y áridos.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["pampeana", "economia"]

variables:
  n: random(1, 2)

respuesta: "motor"
tipo: input

enunciado: "Históricamente, la Región Pampeana ha sido el {n} de la economía argentina."

explicacion: |
  Gracias a su suelo fértil, la Región Pampeana ha sido clave para la exportación de granos y carnes.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["cuyo", "provincias"]

variables:
  p: uno_de(["Mendoza", "San Juan", "San Luis"])

respuesta: verdadero
tipo: vf

enunciado: "La provincia de {p} pertenece a la región de Cuyo."

explicacion: |
  Cuyo está compuesto por Mendoza, San Juan y San Luis.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["patagonia", "fauna"]

variables:
  n: random(1, 2)

respuesta: "glaciares"
tipo: completar

enunciado: "Además de estepas, la Patagonia es famosa por sus paisajes de {n} y fiordos."

explicacion: |
  La Patagonia alberga glaciares importantes como el Perito Moreno, fruto de su clima frío y precipitaciones.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["noa", "clima", "altitud"]

variables:
  n: random(1, 2)

respuesta: "frío seco"
tipo: completar

enunciado: "En las cumbres del NOA, el clima es {n}."

explicacion: |
  A gran altitud en el NOA, las temperaturas bajan considerablemente y la humedad es escasa.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["nea", "lluvias"]

variables:
  n: random(1, 2)

respuesta: "abundantes"
tipo: input

enunciado: "En el NEA, las lluvias son {n} durante todo el año."

explicacion: |
  La humedad constante es una marca distintiva del NEA, diferenciándolo de las regiones áridas del oeste.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["pampeana", "clima", "invierno"]

variables:
  n: random(1, 2)

respuesta: "suaves"
tipo: completar

enunciado: "En la Región Pampeana, los inviernos son {n}."

explicacion: |
  El clima templado de la región implica inviernos no extremadamente fríos, a diferencia de la Patagonia.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["cuyo", "agricultura", "agua"]

variables:
  n: random(1, 2)

respuesta: "irrigación"
tipo: input

enunciado: "En Cuyo, debido al clima árido, la agricultura depende de la {n}."

explicacion: |
  Sin sistemas de riego, la agricultura en Cuyo sería imposible debido a la baja precipitación.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "basico"
  tags: ["patagonia", "ubicacion"]

variables:
  n: random(1, 2)

respuesta: "sur"
tipo: input

enunciado: "La Patagonia se encuentra en el {n} de Argentina."

explicacion: |
  Es la región austral del país, extendiéndose hasta el fin del mundo.
```

```
metadata:
  materia: "geografia"
  tema: "regiones_naturales_de_argentina"
  nivel: "intermedio"
  tags: ["noa", "valles"]

variables:
  n: random(1, 2)

respuesta: "interandinos"
tipo: completar

enunciado: "El NOA incluye valles {n} áridos entre las montañas andinas."

explicacion: |
  Los valles interandinos son zonas de transición con climas cálidos pero secos, ideales para ciertos cultivos.
```

## Sección: geografia-economica-agricola-argentina (44 preguntas)

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["pampa_humeda", "suelos", "agricultura"]

variables:
  region: "pampa_humeda"
  caracteristica: "suelos_fertiles"

respuesta: "suelos_fertiles"
tipo: completar

enunciado: "La región pampeana, corazón de la agricultura argentina, se destaca principalmente por tener {caracteristica} que favorecen el cultivo extensivo."

explicacion: |
  La Pampa Húmeda posee suelos ricos en nutrientes (limos y arcillas) que, sumados al clima templado, la hacen ideal para cereales y oleaginosas.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["soja", "exportacion", "economia"]

variables:
  producto: "soja"
  rol: "principal"

respuesta: "soja"
tipo: input

enunciado: "Identificá el producto agrícola que se convirtió en el {rol} producto de exportación de Argentina tras la adopción de la siembra directa."

explicacion: |
  La soja, especialmente la transgénica, desplazó a otros cultivos tradicionales y se volvió el eje de la balanza comercial argentina.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["siembra_directa", "tecnologia"]

variables:
  tecnica: "siembra_directa"
  beneficio: "conservacion"

respuesta: "siembra_directa"
tipo: input

enunciado: "La {tecnica} es una práctica agrícola que permite cultivar sin arar el suelo, facilitando la expansión de la frontera agrícola."

explicacion: |
  La siembra directa reduce la erosión y permite trabajar tierras más rápidamente, clave para la expansión de la soja.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["frontera_agicola", "expansion"]

variables:
  direccion: "norte"
  provincias: ["santiago_del_estero", "chaco"]

respuesta: "norte"
tipo: input

enunciado: "Desde finales del siglo XX, la frontera agrícola argentina se expandió hacia el {direccion}, ingresando en provincias como Santiago del Estero y Chaco."

explicacion: |
  La expansión hacia el norte (Chaco, Santiago del Estero, Formosa) fue posible gracias a la adaptación de la soja a climas más cálidos y secos.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["noa", "vid", "olivo"]

variables:
  region: "noa"
  cultivos: ["vid", "olivo"]

respuesta: "noa"
tipo: input

enunciado: "En la región del {region}, los valles interandinos permiten el cultivo de vid y olivo gracias a la irrigación de ríos de deshielo."

explicacion: |
  El noroeste argentino (NOA) tiene un clima árido pero valles fértiles irrigados, ideales para la viticultura y el olivo.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["nea", "te", "citrinos"]

variables:
  region: "nea"
  producto: "te"

respuesta: "nea"
tipo: input

enunciado: "La provincia de Misiones, ubicada en el {region}, es la mayor productora nacional de {producto}."

explicacion: |
  El noreste argentino (NEA), especialmente Misiones, tiene el clima subtropical húmedo necesario para el cultivo del té.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["nea", "arroz", "agua"]

variables:
  region: "corrientes"
  cultivo: "arroz"

respuesta: "corrientes"
tipo: input

enunciado: "La provincia de {region} es un importante productor de arroz, aprovechando las abundantes lluvias y humedales del NEA."

explicacion: |
  Corrientes y Entre Ríos son los grandes productores de arroz, requiriendo grandes cantidades de agua para su cultivo.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "avanzado"
  tags: ["sojizacion", "controversia"]

variables:
  fenomeno: "sojizacion"
  efecto: "ambiental"

respuesta: "sojizacion"
tipo: input

enunciado: "El fenómeno de {fenomeno} ha generado debates sobre sustentabilidad ambiental y concentración de la tierra."

explicacion: |
  La "sojización" se refiere a la monocultura extendida de soja, criticada por la degradación de suelos y el uso de agroquímicos.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["trigo", "historia", "pampa"]

variables:
  cultivo: "trigo"
  rol: "historico"

respuesta: "trigo"
tipo: input

enunciado: "Antes de la expansión de la soja, el {cultivo} era uno de los pilares tradicionales de la agricultura pampeana."

explicacion: |
  El trigo y el maíz fueron los cultivos dominantes en la Pampa antes del boom de la soja en los años 90.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["noa", "frutales", "irrigacion"]

variables:
  frutal: "durazno"
  region: "salta"

respuesta: "durazno"
tipo: input

enunciado: "En la provincia de Salta, los valles del NOA producen {frutal} y ciruela gracias a la irrigación."

explicacion: |
  La variedad de microclimas en los valles del NOA permite cultivos de alta calidad como duraznos, peras y ciruelas.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["patagonia", "fruticultura", "seco"]

variables:
  region: "patagonia"
  cultivo: "frutales"

respuesta: "frutales"
tipo: input

enunciado: "En la {region}, la agricultura se concentra en el riego por goteo para producir {cultivo} de alta calidad."

explicacion: |
  La Patagonia argentina, aunque árida, produce manzanas, peras y uvas de exportación gracias a la irrigación de ríos andinos.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "avanzado"
  tags: ["sociedad", "tierra", "desigualdad"]

variables:
  problema: "concentracion"
  sector: "agrario"

respuesta: "concentracion"
tipo: input

enunciado: "Un desafío social del modelo agroexportador es la {problema} de la tierra en pocas manos."

explicacion: |
  El modelo de agronegocios tiende a la concentración de la propiedad rural, dejando a pequeños productores en situación precaria.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["misiones", "te", "produccion"]

variables:
  provincia: "misiones"
  producto: "te"

respuesta: "misiones"
tipo: input

enunciado: "La provincia de {provincia} lidera la producción nacional de {producto}."

explicacion: |
  Misiones es el principal productor de té de Argentina, con plantaciones en el norte de la provincia.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["santa_fe", "soja", "pampa"]

variables:
  provincia: "santa_fe"
  producto: "soja"

respuesta: "santa_fe"
tipo: input

enunciado: "Santa Fe es una provincia pampeana clave en la producción de {producto} y maíz."

explicacion: |
  Santa Fe, junto con Buenos Aires y Córdoba, es un núcleo fundamental de la producción de soja en la Pampa Húmeda.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["economia", "exportacion", "divisas"]

variables:
  rol: "clave"
  sector: "agropecuario"

respuesta: "clave"
tipo: completar

enunciado: "El sector {sector} sigue siendo {rol} para equilibrar la balanza comercial argentina."

explicacion: |
  Las exportaciones agropecuarias generan las divisas necesarias para importar insumos industriales y servicios.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["patagonia", "manzana", "pera"]

variables:
  cultivo: "manzana"
  region: "patagonia"

respuesta: "manzana"
tipo: completar

enunciado: "En la {region}, la fruticultura se especializa en {cultivo} y pera para exportación."

explicacion: |
  La Patagonia argentina es famosa por sus manzanas y peras de alta calidad, cultivadas con riego.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "avanzado"
  tags: ["ambiental", "agroquimicos", "soja"]

variables:
  problema: "contaminacion"
  causa: "agroquimicos"

respuesta: "contaminacion"
tipo: completar

enunciado: "La expansión de la soja ha generado preocupaciones por la {problema} por uso excesivo de {causa}."

explicacion: |
  El uso intensivo de glifosato y otros agroquímicos en la monocultura de soja es un tema de debate ambiental y de salud.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["arroz", "corrientes", "nea"]

variables:
  region: "corrientes"
  cultivo: "arroz"

respuesta: "corrientes"
tipo: completar

enunciado: "La provincia de {region} es líder nacional en la producción de {cultivo}."

explicacion: |
  Corrientes, con sus humedales y lluvias abundantes, es el principal productor de arroz de Argentina.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["pampa", "soja", "exportaciones"]

variables:
  producto_principal: uno_de(["soja", "trigo", "maíz"])

respuesta: "soja"
tipo: mc

enunciado: "Históricamente, la región pampeana ha sido el corazón de la agricultura argentina. En las últimas décadas, ¿qué cultivo se ha consolidado como el principal producto de exportación, desplazando a cereales tradicionales en muchas áreas?"

opciones_explicitas: ["soja", "trigo", "maíz", "algodón"]

explicacion: |
  La expansión de la frontera agrícola y la adopción de la soja transgénica con siembra directa han posicionado a la soja como el principal motor de exportaciones agrícolas de Argentina, fenómeno conocido como "sojización".
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["tecnologia", "siembra_directa", "frontera_agricola"]

variables:
  tecnica: uno_de(["siembra directa", "labranza convencional", "rotación de cultivos", "riego por goteo"])

respuesta: "siembra directa"
tipo: mc

enunciado: "Para cultivar en tierras antes consideradas marginales hacia el norte (Chaco, Santiago del Estero), fue fundamental la adopción de una técnica agrícola específica que reduce la erosión y permite trabajar suelos más secos. ¿Cuál es?"

opciones_explicitas: ["siembra directa", "labranza convencional", "rotación de cultivos", "riego por goteo"]

explicacion: |
  La siembra directa permite cultivar sin remover el suelo, lo que es crucial para mantener la humedad y evitar la erosión en las zonas septentrionales de la frontera agrícola argentina.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["nea", "misiones", "produccion_regional"]

variables:
  region: uno_de(["NOA", "NEA", "Cuyo", "Pampa"])

respuesta: "NEA"
tipo: mc

enunciado: "Provincias como Misiones y Corrientes se destacan por la producción de té, yerba mate y cítricos. ¿A qué región geográfica argentina pertenecen estas provincias?"

opciones_explicitas: ["NOA", "NEA", "Cuyo", "Pampa"]

explicacion: |
  El Noreste Argentino (NEA) tiene un clima subtropical con lluvias abundantes, ideal para cultivos como el té, los cítricos y el arroz, diferenciándose de la llanura pampeana.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["pampa", "suelo", "relieve"]

variables:
  caracteristica: uno_de(["llanuras fértiles", "montañas áridas", "selvas húmedas", "desiertos"])

respuesta: "llanuras fértiles"
tipo: mc

enunciado: "La región pampeana, corazón de la agricultura argentina, se define por una combinación específica de relieve y suelo. ¿Cuáles son sus características principales?"

opciones_explicitas: ["llanuras fértiles", "montañas áridas", "selvas húmedas", "desiertos"]

explicacion: |
  La Pampa se caracteriza por extensas llanuras con suelos ricos en nutrientes (pantanosos originalmente, hoy muy fértiles para granos) y un clima templado, ideales para la agricultura extensiva.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["noa", "irrigacion", "vid", "olivo"]

variables:
  fuente_agua: uno_de(["ríos de deshielo", "aguas subterráneas salinas", "lluvias torrenciales", "desalinización"])

respuesta: "ríos de deshielo"
tipo: mc

enunciado: "En los valles interandinos del Noroeste (NOA), el cultivo de vid, olivo y frutas de pepita depende críticamente de la irrigación. ¿De dónde proviene principalmente el agua utilizada?"

opciones_explicitas: ["ríos de deshielo", "aguas subterráneas salinas", "lluvias torrenciales", "desalinización"]

explicacion: |
  El NOA es una región árida o semiárida. La agricultura en sus valles depende del agua de deshielo de la Cordillera de los Andes, conducida a través de canales de riego.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "avanzado"
  tags: ["sojizacion", "debate", "sustentabilidad"]

variables:
  efecto: uno_de(["concentración de tierra", "aumento de biodiversidad", "disminución de exportaciones", "reforzamiento de comunidades rurales"])

respuesta: "concentración de tierra"
tipo: mc

enunciado: "El fenómeno de la 'sojización' ha generado grandes ganancias económicas, pero también ha planteado debates sociales y ambientales. ¿Cuál de los siguientes es un efecto crítico frecuentemente asociado a este modelo?"

opciones_explicitas: ["concentración de tierra", "aumento de biodiversidad", "disminución de exportaciones", "reforzamiento de comunidades rurales"]

explicacion: |
  La sojización está vinculada a la monopolización de la tierra por grandes productores y corporaciones, lo que ha llevado a la concentración de la tenencia de la tierra y al desplazamiento de pequeños agricultores.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["cuyo", "vid", "fruta"]

variables:
  cultivo_iconico: uno_de(["vid", "soja", "arroz", "té"])

respuesta: "vid"
tipo: mc

enunciado: "Aunque la Pampa domina en granos, la región de Cuyo es famosa mundialmente por un cultivo específico, aprovechando su clima seco y la irrigación andina. ¿Cuál es?"

opciones_explicitas: ["vid", "soja", "arroz", "té"]

explicacion: |
  Cuyo (principalmente Mendoza y San Juan) es el principal productor de uva de mesa y de vino de Argentina, gracias a la alta radiación solar y la irrigación controlada.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["economia", "exportaciones", "divisas"]

variables:
  rol: uno_de(["pilar de exportaciones", "sector marginal", "dependiente de importaciones", "exclusivo para consumo local"])

respuesta: "pilar de exportaciones"
tipo: mc

enunciado: "¿Cuál es el rol fundamental del sector agropecuario en la economía argentina actual, a pesar del desarrollo industrial del país?"

opciones_explicitas: ["pilar de exportaciones", "sector marginal", "dependiente de importaciones", "exclusivo para consumo local"]

explicacion: |
  El sector agropecuario sigue siendo clave para generar divisas (dólares) mediante la exportación de alimentos y materias primas, equilibrando la balanza comercial nacional.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["nea", "arroz", "corrientes"]

variables:
  provincia_lider: uno_de(["Corrientes", "Misiones", "Formosa", "Chaco"])

respuesta: "Corrientes"
tipo: mc

enunciado: "Entre las provincias del Noreste (NEA), ¿cuál se destaca históricamente como la principal productora de arroz, aprovechando las llanuras aluviales y el agua abundante?"

opciones_explicitas: ["Corrientes", "Misiones", "Formosa", "Chaco"]

explicacion: |
  Corrientes es el mayor productor de arroz de Argentina, utilizando técnicas de inundación en sus llanuras, un cultivo que requiere grandes cantidades de agua dulce.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["frontera_agricola", "expansion", "chaco", "santiago_del_estero"]

variables:
  direccion: uno_de(["hacia el norte", "hacia el sur", "hacia el este", "hacia el oeste"])

respuesta: "hacia el norte"
tipo: mc

enunciado: "Desde finales del siglo XX, la agricultura argentina no se limitó a la Pampa. ¿Hacia qué dirección se expandió la frontera agrícola, incorporando provincias como Santiago del Estero y Chaco?"

opciones_explicitas: ["hacia el norte", "hacia el sur", "hacia el este", "hacia el oeste"]

explicacion: |
  La frontera agrícola se expandió hacia el norte (Chaco, Santiago del Estero, Salta), donde antes predominaba la ganadería o el monte nativo, gracias a la soja transgénica y la siembra directa.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["clima", "pampa", "templado"]

variables:
  tipo_clima: uno_de(["templado", "subtropical", "árido", "polar"])

respuesta: "templado"
tipo: mc

enunciado: "La región pampeana goza de un clima favorable para los cereales. ¿Qué tipo de clima predomina en esta zona?"

opciones_explicitas: ["templado", "subtropical", "árido", "polar"]

explicacion: |
  El clima templado de la Pampa, con lluvias bien distribuidas y temperaturas moderadas, es ideal para el crecimiento de cultivos como el trigo, el maíz y la soja.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["noa", "vid", "valles_interandinos"]

variables:
  region_vid: uno_de(["Valles interandinos del NOA", "Llanura chaqueña", "Pampa Húmeda", "Patagonia"])

respuesta: "Valles interandinos del NOA"
tipo: mc

enunciado: "Además de Cuyo, en qué zona geográfica específica del noroeste argentino se cultiva vid, aprovechando los valles interandinos y la irrigación?"

opciones_explicitas: ["Valles interandinos del NOA", "Llanura chaqueña", "Pampa Húmeda", "Patagonia"]

explicacion: |
  Los valles interandinos del NOA (como en Salta y Catamarca) permiten el cultivo de vid y otras frutas de clima seco, irrigados por ríos de origen andino.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "avanzado"
  tags: ["sustentabilidad", "controversia", "deforestacion"]

variables:
  impacto: uno_de(["deforestación", "reforestación masiva", "purificación de acuíferos", "aumento de fauna nativa"])

respuesta: "deforestación"
tipo: mc

enunciado: "La expansión de la soja en la frontera agrícola ha generado controversia ambiental. ¿Cuál es uno de los principales impactos negativos asociados a esta expansión en el Chaco y Santiago del Estero?"

opciones_explicitas: ["deforestación", "reforestación masiva", "purificación de acuíferos", "aumento de fauna nativa"]

explicacion: |
  La conversión de bosques nativos en campos de soja ha provocado una importante tasa de deforestación, pérdida de biodiversidad y degradación de suelos en el norte argentino.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["patagonia", "frutales", "clima_frio"]

variables:
  cultivo_patagonia: uno_de(["manzana", "soja", "algodón", "caña de azúcar"])

respuesta: "manzana"
tipo: mc

enunciado: "Aunque la Patagonia es conocida por la ganadería ovina, en sus valles irrigados (como el Valle Inferior del Río Negro) se destaca la producción de frutales de clima frío. ¿Cuál es el principal ejemplo?"

opciones_explicitas: ["manzana", "soja", "algodón", "caña de azúcar"]

explicacion: |
  La Patagonia oriental, especialmente en Río Negro y Neuquén, es líder en la producción de manzanas y otras frutas de hueso y pepita, gracias a su clima frío que favorece la calidad del fruto.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["pampa", "trigo", "historico"]

variables:
  cultivo_tradicional: uno_de(["trigo", "té", "vid", "arroz"])

respuesta: "trigo"
tipo: mc

enunciado: "Antes de la hegemonía de la soja, la Pampa era sinónimo de ganadería y cultivo de cereales. ¿Cuál de los siguientes cereales fue históricamente un pilar de la exportación argentina junto al maíz?"

opciones_explicitas: ["trigo", "té", "vid", "arroz"]

explicacion: |
  El trigo y el maíz han sido los cereales tradicionales de la Pampa, fundamentales para la economía argentina durante gran parte del siglo XX, antes de la expansión de la soja.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["misiones", "citricos", "nea"]

variables:
  producto_misiones: uno_de(["naranja", "uva", "manzana", "trigo"])

respuesta: "naranja"
tipo: mc

enunciado: "Misiones, en el NEA, tiene un clima subtropical húmedo. Además del té, ¿qué otro cultivo es emblemático de la provincia, utilizado tanto para jugo como para exportación?"

opciones_explicitas: ["naranja", "uva", "manzana", "trigo"]

explicacion: |
  Misiones es uno de los principales productores de cítricos (naranjas, limones) de Argentina, aprovechando su clima húmedo y cálido, ideal para estos frutales.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["noa", "olivo", "aceite"]

variables:
  cultivo_olivo: uno_de(["olivo", "café", "cacao", "sésamo"])

respuesta: "olivo"
tipo: mc

enunciado: "En los valles secos del noroeste argentino, se ha desarrollado una industria oleícola. ¿Qué cultivo se adapta perfectamente al clima árido y a la irrigación de esta región?"

opciones_explicitas: ["olivo", "café", "cacao", "sésamo"]

explicacion: |
  El olivo es un cultivo mediterráneo que se adapta bien a los climas secos y calurosos del NOA, donde la irrigación permite una producción de aceite de oliva de alta calidad.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["relieve", "pampa", "llanura"]

variables:
  tipo_relieve: uno_de(["llanura", "meseta", "valle estrecho", "cordillera"])

respuesta: "llanura"
tipo: mc

enunciado: "La facilidad para el uso de maquinaria agrícola pesada en la Pampa se debe en gran parte a su relieve. ¿Qué característica del relieve define a esta región?"

opciones_explicitas: ["llanura", "meseta", "valle estrecho", "cordillera"]

explicacion: |
  La Pampa es una extensa llanura con relieve suave, lo que facilita enormemente la mecanización agrícola a gran escala, un factor clave de su productividad.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["tecnologia", "soja", "transgenico"]

variables:
  tecnologia_clave: uno_de(["soja resistente a herbicidas", "trigo mejorado genéticamente", "maíz con insecticida propio", "arroz dorado"])

respuesta: "soja resistente a herbicidas"
tipo: mc

enunciado: "La rápida expansión de la soja en Argentina estuvo ligada a una innovación biotecnológica específica. ¿Cuál fue?"

opciones_explicitas: ["soja resistente a herbicidas", "trigo mejorado genéticamente", "maíz con insecticida propio", "arroz dorado"]

explicacion: |
  La introducción de soja transgénica resistente a herbicidas (como el glifosato) permitió controlar malezas fácilmente y cultivar en suelos antes difíciles, acelerando la sojización.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["misiones", "yerba_mate", "exotico"]

variables:
  cultivo_exotico: uno_de(["yerba mate", "café", "cacao", "jengibre"])

respuesta: "yerba mate"
tipo: mc

enunciado: "Misiones es la única provincia argentina que produce comercialmente una planta nativa que es bebida nacional. ¿Cuál es?"

opciones_explicitas: ["yerba mate", "café", "cacao", "jengibre"]

explicacion: |
  La yerba mate es un cultivo nativo del noreste argentino y sureste de Brasil. Misiones es el principal productor mundial, aprovechando su clima subtropical húmedo.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["patagonia", "aridez", "limitantes"]

variables:
  limitante: uno_de(["aridez extrema", "inundaciones constantes", "suelos salinos", "heladas tardías"])

respuesta: "aridez extrema"
tipo: mc

enunciado: "Aunque la Patagonia tiene potencial frutícola en valles específicos, ¿cuál es la principal limitante natural para la agricultura extensiva en la mayor parte de la región?"

opciones_explicitas: ["aridez extrema", "inundaciones constantes", "suelos salinos", "heladas tardías"]

explicacion: |
  La Patagonia es una región árida y semiárida. La falta de precipitaciones naturales hace que la agricultura dependa totalmente de la irrigación desde ríos de deshielo o napas.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["pampa", "maiz", "granero"]

variables:
  cultivo_grano: uno_de(["maíz", "arroz", "trigo", "cebada"])

respuesta: "maíz"
tipo: mc

enunciado: "Junto con la soja y el trigo, ¿qué otro cereal es fundamental en la Pampa Húmeda, utilizado tanto para alimentación humana como para ganado?"

opciones_explicitas: ["maíz", "arroz", "trigo", "cebada"]

explicacion: |
  El maíz es uno de los tres grandes cultivos de la Pampa Húmeda, requiriendo mayor cantidad de agua y calor que el trigo, por lo que se cultiva en las zonas más húmedas.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["nea", "algodon", "chaco"]

variables:
  cultivo_fibra: uno_de(["algodón", "lino", "sorgo", "girasol"])

respuesta: "algodón"
tipo: mc

enunciado: "Históricamente, el norte argentino (Chaco y Santiago del Estero) fue el principal productor de una fibra textil. ¿Cuál es?"

opciones_explicitas: ["algodón", "lino", "sorgo", "girasol"]

explicacion: |
  El algodón ha sido un cultivo tradicional del NEA, aunque su producción ha fluctuado por plagas y competencia de la soja. Sigue siendo importante en la frontera agrícola norteña.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "basico"
  tags: ["pampa", "girasol", "aceites"]

variables:
  cultivo_oleaginoso: uno_de(["girasol", "soja", "maní", "nabo"])

respuesta: "girasol"
tipo: mc

enunciado: "En las zonas más secas de la Pampa (pampeón), se cultiva frecuentemente una oleaginosa de flor amarilla, resistente a la sequía. ¿Cuál es?"

opciones_explicitas: ["girasol", "soja", "maní", "nabo"]

explicacion: |
  El girasol es una oleaginosa que se adapta bien a las condiciones más secas del norte de la Pampa y el sur de Santa Fe, siendo importante para la producción de aceite.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "intermedio"
  tags: ["norte", "sorgo", "resistencia"]

variables:
  cultivo_resistente: uno_de(["sorgo", "arroz", "trigo", "soja"])

respuesta: "sorgo"
tipo: mc

enunciado: "En las zonas más áridas del norte argentino, donde el agua es escasa, se cultiva un cereal resistente a la sequía, utilizado para forraje y biocombustibles. ¿Cuál es?"

opciones_explicitas: ["sorgo", "arroz", "trigo", "soja"]

explicacion: |
  El sorgo es un cereal C4 muy resistente a la sequía y al calor, cultivado en el norte argentino (Chaco, Santiago del Estero) como alternativa a los granos que requieren más agua.
```

```
metadata:
  materia: "Geografía"
  tema: "geografia_economica_agricola_argicola_argentina"
  nivel: "avanzado"
  tags: ["cuyo", "noa", "vid", "comparacion"]

variables:
  region_principal_vid: uno_de(["Cuyo", "NOA", "NEA", "Pampa"])

respuesta: "Cuyo"
tipo: mc

enunciado: "Aunque el NOA también produce vid, ¿cuál es la región argentina indiscutiblemente líder en volumen y prestigio de la industria vitivinícola?"

opciones_explicitas: ["Cuyo", "NOA", "NEA", "Pampa"]

explicacion: |
  Cuyo (Mendoza, San Juan, San Luis) es el corazón de la vitivinicultura argentina, produciendo la mayoría del vino de exportación y de alta calidad, gracias a su clima seco y riego andino.
```

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

respuesta: factor
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

respuesta: pais
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

## Sección: mineria-e-hidrocarburos-en-argentina (25 preguntas)

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "basico"
  tags: ["litio", "recursos_minerales", "noroeste"]

variables:
  provincias_litio: uno_de(["Jujuy", "Salta", "Catamarca"])

respuesta: "Jujuy, Salta y Catamarca"
tipo: completar

enunciado: "El 'Triángulo del Litio' argentino abarca territorios de las provincias de Jujuy, {provincias_litio} y Catamarca. ¿Cuáles son las tres provincias que conforman este eje estratégico?"

explicacion: |
  El Triángulo del Litio es una región geográfica que incluye partes de las provincias nordestinas de Jujuy, Salta y Catamarca, ricas en yacimientos de litio esenciales para la industria de baterías.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["hidrocarburos", "vaca_muerta", "neuquen"]

variables:
  formacion: "Vaca Muerta"

respuesta: "Vaca Muerta"
tipo: completar

enunciado: "Aunque históricamente el Golfo San Jorge fue clave, hoy el epicentro de la extracción de petróleo y gas natural en Argentina es la formación geológica conocida como {formacion}."

explicacion: |
  Vaca Muerta, ubicada principalmente en Neuquén, se ha convertido en el principal polo de producción de hidrocarburos no convencionales del país.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "basico"
  tags: ["santa_cruz", "carbón", "sur"]

variables:
  recurso_sc: "carbón"

respuesta: "carbón"
tipo: completar

enunciado: "En la provincia de Santa Cruz, ubicada en el sur del país, destaca una larga tradición en la extracción de {recurso_sc}, aunque su producción ha fluctuado con el tiempo."

explicacion: |
  Santa Cruz es conocida por sus yacimientos de carbón térmico y metalúrgico, especialmente en la zona de Río Turbio.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["economia", "matriz_productiva"]

variables:
  sector_tradicional: "agro"

respuesta: "agro"
tipo: completar

enunciado: "Históricamente, la economía argentina ha dependido mucho del sector {sector_tradicional}, pero los recursos del subsuelo representan una oportunidad para diversificar la matriz productiva."

explicacion: |
  La minería y los hidrocarburos buscan reducir la dependencia histórica del agro y generar nuevas cadenas de valor industriales y exportadoras.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "basico"
  tags: ["distribucion", "noroeste", "sur"]

variables:
  region_minera: "noroeste"

respuesta: "noroeste"
tipo: completar

enunciado: "La actividad minera en Argentina se distribuye de manera desigual, concentrándose principalmente en las provincias del {region_minera} y del sur."

explicacion: |
  El noroeste (Jujuy, Salta, Catamarca, etc.) y el sur (Santa Cruz) son los polos mineros principales, junto con Mendoza y San Juan.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "basico"
  tags: ["oro", "plata", "noroeste"]

variables:
  metal1: "oro"
  metal2: "plata"

respuesta: "oro y plata"
tipo: completar

enunciado: "En el noroeste argentino, destaca la producción de metales preciosos como el {metal1} y el {metal2}."

explicacion: |
  Las provincias del NOA son históricamente productoras de oro y plata, además de litio y otros minerales.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["golfo_san_jorge", "historia"]

variables:
  region_historica: "Golfo San Jorge"

respuesta: "Golfo San Jorge"
tipo: completar

enunciado: "Antes del auge de Vaca Muerta, la producción de hidrocarburos se concentraba tradicionalmente en el {region_historica} y en el norte antiguo."

explicacion: |
  El Golfo San Jorge, en Chubut y Santa Cruz, fue el centro histórico de la industria petrolera argentina.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["minería_no_metálica", "impacto_ambiental"]

variables:
  impacto: "menor"

respuesta: "menor"
tipo: completar

enunciado: "La minería no metálica o industrial, que extrae materiales como sal o yeso, suele tener un impacto ambiental relativo {impacto} comparada con la minería metálica, aunque requiere gestión cuidadosa."

explicacion: |
  La teoría indica que la minería no metálica suele tener un menor impacto ambiental relativo, pero aún así exige cuidado con el agua y el suelo.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["vaca_muerta", "neuquen"]

variables:
  provincia_vm: "Neuquén"

respuesta: "Neuquén"
tipo: completar

enunciado: "La formación de Vaca Muerta está ubicada principalmente en el noroeste de la provincia de {provincia_vm}."

explicacion: |
  Vaca Muerta se extiende principalmente por el noroeste de Neuquén, con extensiones en Río Negro.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["litio", "baterías", "transición_energética"]

variables:
  uso_litio: "baterías"

respuesta: "baterías"
tipo: completar

enunciado: "El litio es vital a nivel mundial debido a la demanda de este metal para la fabricación de {uso_litio} y la transición energética global."

explicacion: |
  El litio es un componente clave en las baterías recargables para vehículos eléctricos y almacenamiento de energía.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["economía", "empleo"]

variables:
  sector_vinculado: "transporte"

respuesta: "transporte"
tipo: completar

enunciado: "La minería no solo genera empleo directo, sino que también impulsa cadenas de valor vinculadas al {sector_vinculado}, la manufactura y la exportación."

explicacion: |
  La extracción de recursos requiere logística, transporte de carga y servicios conexos.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["clasificación", "metálica", "no_metálica"]

variables:
  tipo1: "metálica"
  tipo2: "no metálica"

respuesta: "metálica"
tipo: completar

enunciado: "La minería en Argentina se divide en dos tipos: la minería {tipo1}, que busca obtener metales como cobre o zinc, y la minería no metálica."

explicacion: |
  La distinción fundamental es entre la obtención de metales (metálica) y materiales industriales/construcción (no metálica).
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "avanzado"
  tags: ["estrategia", "inserción_global"]

variables:
  objetivo: "inserción"

respuesta: "inserción"
tipo: completar

enunciado: "Los recursos del subsuelo son una oportunidad clave para el desarrollo industrial y la {objetivo} en los mercados globales."

explicacion: |
  La teoría destaca que estos recursos permiten a Argentina insertarse mejor en la economía global.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["hidrocarburos", "salta", "historia"]

variables:
  region_norte: "norte"

respuesta: "norte"
tipo: completar

enunciado: "Históricamente, la producción de hidrocarburos se concentraba en el Golfo San Jorge y en el {region_norte} (Salta y la cuenca Neuquina convencional)."

explicacion: |
  Antes de Vaca Muerta, el norte argentino (Salta/Jujuy, cuenca del Noroeste — Aguaray, Campo Durán) tenía actividad petrolera significativa. (Tucumán, en cambio, no tiene historia petrolera relevante — su economía se asocia al azúcar, no a hidrocarburos.)
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "avanzado"
  tags: ["ambiental", "agua", "gestión"]

variables:
  recurso_clave: "agua"

respuesta: "agua"
tipo: completar

enunciado: "Tanto la minería metálica como la no metálica requieren una gestión cuidadosa del {recurso_clave} y del suelo."

explicacion: |
  El uso y contaminación del agua es un desafío ambiental central en la actividad minera.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "basico"
  tags: ["carbón", "santa_cruz"]

variables:
  combustible: "carbón"

respuesta: "carbón"
tipo: completar

enunciado: "En el sur de Argentina, la provincia de Santa Cruz tiene tradición en la extracción de {combustible}."

explicacion: |
  El carbón es el principal recurso minero histórico de Santa Cruz.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["economía", "diversificación"]

variables:
  matriz: "productiva"

respuesta: "productiva"
tipo: completar

enunciado: "La importancia de la minería y los hidrocarburos radica en su capacidad para diversificar la matriz {matriz} del país."

explicacion: |
  La teoría enfatiza la diversificación de la matriz productiva como un beneficio estratégico.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "basico"
  tags: ["mendoza", "yacimientos"]

variables:
  metal_mz: "oro"

respuesta: "oro"
tipo: completar

enunciado: "Mendoza cuenta con yacimientos de {metal_mz} y plata de importancia histórica."

explicacion: |
  Mendoza tiene una larga historia de minería de oro y plata.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["vaca_muerta", "ri Negro"]

variables:
  provincia_vm2: "Río Negro"

respuesta: "Río Negro"
tipo: completar

enunciado: "La formación de Vaca Muerta se extiende ha {provincia_vm2}, además de Neuquén."

explicacion: |
  Vaca Muerta es una formación geológica transfronteriza entre Neuquén y Río Negro.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "basico"
  tags: ["litio", "jujuy"]

variables:
  provincia_litio1: "Jujuy"

respuesta: "Jujuy"
tipo: completar

enunciado: "El 'Triángulo del Litio' incluye partes de {provincia_litio1}, Salta y Catamarca."

explicacion: |
  Jujuy es una de las tres provincias fundamentales del Triángulo del Litio.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["ambiental", "minería_no_metálica"]

variables:
  impacto: "menor"

respuesta: "menor"
tipo: completar

enunciado: "La minería no metálica suele tener un impacto ambiental relativo {impacto} que la metálica."

explicacion: |
  Según la teoría, la minería no metálica tiene un impacto relativo menor, aunque no nulo.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "basico"
  tags: ["hidrocarburos", "chubut"]

variables:
  provincia_gs: "Chubut"

respuesta: "Chubut"
tipo: completar

enunciado: "Históricamente, el Golfo San Jorge abarcaba la producción de hidrocarburos en Chubut y {provincia_gs}."

explicacion: |
  El Golfo San Jorge incluye áreas de Chubut y Santa Cruz.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["minerales", "industriales"]

variables:
  mineral: "litio"

respuesta: "litio"
tipo: completar

enunciado: "En el noroeste, destaca la producción de minerales industriales como el {mineral}."

explicacion: |
  El texto clasifica al litio como mineral industrial en el contexto de los salares nordestinos.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "intermedio"
  tags: ["desarrollo", "industria"]

variables:
  sector: "industrial"

respuesta: "industrial"
tipo: completar

enunciado: "Los recursos del subsuelo representan una oportunidad clave para el desarrollo {sector} del país."

explicacion: |
  La teoría vincula los recursos del subsuelo con el desarrollo industrial.
```

```
metadata:
  materia: "Geografía"
  tema: "mineria_e_hidrocarburos_en_argentina"
  nivel: "avanzado"
  tags: ["espacio_geográfico", "organización"]

variables:
  espacio: "geográfico"

respuesta: "geográfico"
tipo: completar

enunciado: "Comprender dónde se encuentran los recursos es esencial para entender la organización del espacio {espacio} nacional."

explicacion: |
  La distribución de la minería y hidrocarburos moldea la organización del espacio geográfico argentino.
```

## Sección: america-latina-industria-y-energia (35 preguntas)

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["hidroelectricidad", "energia", "industria"]

variables:
  caudal: random(2000, 5000)
  altura: random(50, 150)
  eficiencia: random_float(0.7, 0.9)
  potencia_watts: caudal * altura * 9.8 * eficiencia
  potencia_mw: redondear(potencia_watts / 1000000, 2)

respuesta: potencia_mw
tipo: input

enunciado: "Una represa hipotética en la región tiene un caudal de {caudal} m³/s y un salto de agua de {altura} metros. Si la eficiencia de los generadores es del {redondear(eficiencia*100, 0)}%, ¿cuál es la potencia instalada aproximada en MW? (Fórmula: P = caudal * gravedad * altura * eficiencia, con g=9.8)"

explicacion: |
  La potencia hidroeléctrica depende del caudal, la altura del salto y la eficiencia. El cálculo muestra cómo la geografía física (caudal y desnivel) determina el potencial industrial energético.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["matriz_energetica", "renovable"]

variables:
  afirmacion_correcta: uno_de([verdadero, falso])

respuesta: verdadero
tipo: vf

enunciado: "La matriz energética de América Latina es predominantemente renovable en comparación con otras regiones del mundo."

explicacion: |
  Verdadero. Gracias a la abundancia de recursos hídricos, solares y eólicos, la región tiene una de las matrices más limpias del planeta, lo que ofrece ventajas competitivas para industrias que buscan descarbonizar sus procesos.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["hidrocarburos", "petroquimica", "reservas"]

variables:
  pais1: "Venezuela"
  pais2: "Argentina"
  pais3: "Brasil"
  respuesta_correcta: pais1

respuesta: respuesta_correcta
tipo: completar

enunciado: "Entre los países con grandes reservas de hidrocarburos que moldearon la industria petroquímica regional se encuentran {pais2}, {pais3} y {pais1}."

respuestas_validas:
  - "Venezuela"
  - "venezuela"

explicacion: |
  Venezuela posee las mayores reservas probadas de petróleo convencional en la región, lo que históricamente impulsó su industria petroquímica, aunque con fluctuaciones en su producción.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["costos", "competitividad", "energia"]

variables:
  costo_base: random_float(0.05, 0.15)
  incremento_solar: random_float(0.01, 0.03)
  costo_final: costo_base + incremento_solar
  costo_formateado: redondear(costo_final, 3)

respuesta: costo_formateado
tipo: input

enunciado: "Si una industria paga $0.12 por kWh de energía hidroeléctrica y decide instalar paneles solares para diversificar, aumentando el costo marginal en $0.025 por kWh, ¿cuál es el nuevo costo por kWh? (Redondear a 3 decimales)"

explicacion: |
  La transición energética implica costos iniciales. La diversificación hacia renovables como la solar busca competitividad a largo plazo, aunque pueda implicar ajustes en la estructura de costos inmediata.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["riesgo", "sequia", "hidroelectricidad"]

variables:
  afirmacion: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La dependencia excesiva de la hidroelectricidad expone a la industria latinoamericana a la vulnerabilidad climática, como racionamientos por sequías."

explicacion: |
  Verdadero. Episdios recientes han demostrado que la falta de lluvia reduce la generación hidroeléctrica, poniendo en riesgo la continuidad operativa de industrias energívores.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["eolica", "potencial", "renovable"]

variables:
  velocidad_viento: random_float(8, 15)
  area_turbina: random_float(100, 200)
  factor_capacidad: 0.35
  potencia_kw: velocidad_viento * area_turbina * factor_capacidad
  potencia_mw: redondear(potencia_kw / 1000, 2)

respuesta: potencia_mw
tipo: input

enunciado: "Un parque eólico en la Patagonia tiene turbinas con un área de barrido de {area_turbina} m² y una velocidad media de viento de {velocidad_viento} m/s. Si el factor de capacidad es 0.35, ¿cuál es la potencia estimada en MW? (Fórmula simplificada: P = v * A * factor)"

explicacion: |
  La energía eólica es una fuente renovable clave para complementar la matriz hidroeléctrica, especialmente en regiones con vientos constantes como el sur de Argentina y Chile.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["heterogeneidad", "desarrollo", "industria"]

variables:
  afirmacion: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La industria latinoamericana es homogénea; todos los países tienen el mismo nivel de desarrollo tecnológico y de servicios."

explicacion: |
  Falso. La región es heterogénea. Mientras algunos países desarrollan sectores tecnológicos avanzados, otros mantienen estructuras basadas en agroindustria y minería.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "avanzado"
  tags: ["eficiencia", "industria", "energia"]

variables:
  energia_total: random_float(100, 500)
  energia_util: random_float(60, 90)
  eficiencia: energia_util / energia_total
  eficiencia_pct: redondear(eficiencia * 100, 1)

respuesta: eficiencia_pct
tipo: input

enunciado: "Si una planta industrial consume {energia_total} GWh de energía total y de ella solo {energia_util} GWh son efectivamente útiles para el proceso productivo, ¿cuál es el porcentaje de eficiencia energética? (Redondear a 1 decimal)"

explicacion: |
  La eficiencia energética es crucial para la competitividad. Mejorarla reduce costos y dependencia de insumos energéticos externos.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["descarbonizacion", "sostenibilidad", "industria"]

variables:
  afirmacion: verdadero

respuesta: verdadero
tipo: vf

enunciado: "La matriz energética renovable de América Latina constituye una oportunidad estratégica para descarbonizar la economía global."

explicacion: |
  Verdadero. En un mundo que busca reducir emisiones, la capacidad de la región para proveer energía limpia es una ventaja comparativa clave para la industria.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "avanzado"
  tags: ["carbono", "huella", "renovable"]

variables:
  energia_renovable: random_float(1000, 5000)
  factor_emision_carbono: 0.5
  co2_evitado: energia_renovable * factor_emision_carbono
  co2_formateado: redondear(co2_evitado, 0)

respuesta: co2_formateado
tipo: input

enunciado: "Si una industria utiliza {energia_renovable} MWh de energía solar en lugar de carbón, y el factor de emisión del carbón es 0.5 kg CO2/MWh, ¿cuántos kg de CO2 evita emitir? (Redondear a entero)"

explicacion: |
  La transición a renovables no solo es ambiental, sino también económica, al reducir costos de carbono y mejorar la imagen corporativa global.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["agroindustria", "estructura", "productiva"]

variables:
  afirmacion: verdadero

respuesta: verdadero
tipo: vf

enunciado: "Algunos países latinoamericanos mantienen una estructura productiva basada en la agroindustria y la minería."

explicacion: |
  Verdadero. A pesar de los avances, la heterogeneidad regional hace que la agroindustria y la minería sigan siendo pilares importantes en varias economías.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "avanzado"
  tags: ["industria", "aluminio", "electricidad"]

variables:
  industria: "siderúrgica y de aluminio"
  requisito: "grandes cantidades de electricidad"

respuesta: requisito
tipo: completar

enunciado: "La instalación de industrias {industria} en países como Brasil y Paraguay ha sido posible gracias al acceso a grandes saltos de agua que permiten generar {requisito}."

explicacion: |
  La industria del aluminio y la siderurgia son intensivas en energía. La disponibilidad de hidroelectricidad barata en la región ha sido un factor clave para atraer este tipo de inversiones industriales.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["hidrocarburos", "petroquímica", "Venezuela"]

variables:
  pais: uno_de(["Venezuela", "Argentina", "Brasil"])
  industria: "petroquímica"

respuesta: industria
tipo: completar

enunciado: "La presencia de grandes reservas de hidrocarburos en {pais} ha moldeado el desarrollo de la industria {industria} regional, permitiendo la producción de derivados del petróleo."

explicacion: |
  Países con grandes reservas de hidrocarburos han desarrollado industrias petroquímicas locales. Esto permite transformar la materia prima en productos de mayor valor agregado, aunque la dependencia de estos recursos también presenta desafíos económicos.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["valor_agregado", "transformación", "materias_primas"]

variables:
  proceso: "transformar recursos en valor agregado"
  factor: "procesos industriales intensivos en energía"

respuesta: factor
tipo: completar

enunciado: "El desafío actual de América Latina es {proceso} mediante {factor}, pasando de ser un proveedor exclusivo de materias primas a un actor industrial relevante."

explicacion: |
  La región busca dejar atrás el modelo de exportación de materias primas sin procesar. La clave está en utilizar su energía y recursos para crear procesos industriales que generen mayor valor agregado.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["matriz", "renovable", "descarbonización"]

variables:
  tendencia: "descarbonizar"
  oportunidad: "estratégica"

respuesta: "oportunidad"
tipo: completar

enunciado: "La matriz energética predominantemente renovable de América Latina constituye una {oportunidad} estratégica en un mundo que busca {tendencia} su economía."

explicacion: |
  La transición energética global favorece a regiones con matrices limpias. América Latina puede posicionarse como un proveedor de energía verde y productos manufacturados con baja huella de carbono.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["competitividad", "precios", "inversión"]

variables:
  requisito: "precios competitivos"
  resultado: "atraer inversiones"

respuesta: resultado
tipo: completar

enunciado: "Sin acceso a fuentes de energía confiables y a {requisito}, es imposible {resultado} industriales que compitan en el mercado mundial."

explicacion: |
  La energía es un costo crítico para la industria. Si los precios son altos o el suministro es inestable, las inversiones industriales se dirigen a otras regiones con mejores condiciones energéticas.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["zonas_franca", "comercio", "exportación"]

variables:
  fenomeno: "deslocalización"
  consecuencia: "zonas francas"

respuesta: consecuencia
tipo: completar

enunciado: "La {fenomeno} de empresas ha tenido un impacto dual, fomentando la instalación de maquiladoras y {consecuencia} en la región."

explicacion: |
  Las zonas francas son áreas designadas para incentivar la inversión extranjera y la exportación. Han surgido como respuesta a la deslocalización, permitiendo a las empresas operar con beneficios fiscales y aduaneros.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["renovables", "solar", "eólica"]

variables:
  tipo1: "solar"
  tipo2: "eólica"

respuesta: tipo1 + " y " + tipo2
tipo: completar

enunciado: "Más recientemente, los centros de desarrollo industrial se han concentrado en áreas con potencial para energías renovables como la {tipo1} y la {tipo2}."

explicacion: |
  Además de la hidroelectricidad, la región está aprovechando su potencial para energías limpias alternativas. El noroeste de Argentina, Chile y Brasil tienen gran potencial para estas fuentes.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "avanzado"
  tags: ["dependencia", "cadenas_suministro", "externas"]

variables:
  condicion: "dependencia de cadenas de suministro externas"
  requisito: "matriz energética robusta"

respuesta: requisito
tipo: completar

enunciado: "La deslocalización genera {condicion} que requiere una {requisito} y competitiva para ser sostenible."

explicacion: |
  Aunque las maquiladoras reducen costos laborales, su viabilidad depende de una logística y energía eficientes. Una matriz energética débil aumenta los costos logísticos y de producción, haciendo inviable la dependencia externa.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["siderurgia", "hidroelectricidad", "localización"]

variables:
  industria: "siderúrgica"
  recurso: "grandes saltos de agua"

respuesta: recurso
tipo: completar

enunciado: "La generación hidroeléctrica ha sido fundamental para el desarrollo industrial de países como Brasil y Paraguay, permitiendo la instalación de industrias {industria} gracias al acceso a {recurso}."

explicacion: |
  La siderurgia requiere grandes volúmenes de energía. Los grandes ríos y saltos de agua en la región han permitido instalar plantas siderúrgicas cerca de la fuente de energía, reduciendo costos.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "avanzado"
  tags: ["racionamiento", "vulnerabilidad", "hidroelectricidad"]

variables:
  evento: "sequías prolongadas"
  consecuencia: "racionamiento eléctrico"

respuesta: consecuencia
tipo: completar

enunciado: "La dependencia de la hidroelectricidad expone a la región a la vulnerabilidad climática; {evento} pueden paralizar la producción industrial, como se ha observado en episodios recientes de {consecuencia}."

explicacion: |
  Los episodios de sequía en la Cuenca del Plata o en Brasil han demostrado que la falta de agua reduce la generación eléctrica, obligando a racionamientos que afectan gravemente a la industria.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["transformación", "productiva", "historia"]

variables:
  pasado: "proveedor exclusivo de materias primas"
  presente: "actor industrial relevante"

respuesta: presente
tipo: completar

enunciado: "América Latina ha transitado un camino complejo, pasando de ser un {pasado} a intentar posicionarse como un {presente}."

explicacion: |
  El cambio estructural busca diversificar la economía. Ya no basta con exportar recursos naturales; se busca participar en la cadena de valor industrial global.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["energía", "habilitante", "industria"]

variables:
  rol: "factor habilitante crítico"
  condición: "acceso a fuentes confiables"

respuesta: rol
tipo: completar

enunciado: "En este contexto, la energía actúa como el {rol}. Sin {condición} y a precios competitivos, es imposible atraer inversiones industriales."

explicacion: |
  La energía no es solo un insumo, es un requisito previo para la industrialización. Sin ella, no hay producción manufacturada competitiva.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["geografía_industrial", "disparidad", "localización"]

variables:
  fenómeno: "desarrollo industrial"
  concentración: "zonas con acceso a hidrocarburos"

respuesta: "{concentración}"
tipo: completar

enunciado: "La geografía industrial de la región refleja esta disparidad: los centros de {fenómeno} se concentran en {concentración}, grandes saltos de agua o áreas con potencial renovable."

explicacion: |
  La industria no se distribuye uniformemente. Se localiza donde hay acceso a recursos energéticos clave, ya sean fósiles, hidráulicos o renovables.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["impacto", "deslocalización", "dual"]

variables:
  positivo: "fomentado la instalación de maquiladoras"
  negativo: "dependencia de cadenas externas"

respuesta: negativo
tipo: completar

enunciado: "El impacto de la deslocalización ha sido dual: por un lado, {positivo}; por otro, ha generado {negativo}."

explicacion: |
  La deslocalización trae beneficios (empleo, inversión) pero también riesgos (dependencia tecnológica y logística). Es un equilibrio delicado para la soberanía industrial.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["recursos", "valor_agregado", "comparativa"]

variables:
  ventaja: "ventaja comparativa histórica"
  recurso: "recursos naturales"

respuesta: recurso
tipo: completar

enunciado: "La región posee una {ventaja} en {recurso}, pero su desafío actual radica en cómo transformarlos en valor agregado."

explicacion: |
  Tener recursos no es suficiente. La clave está en la capacidad de transformarlos industrialmente. Sin industria, el valor se queda en la extracción.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["hidrocarburos", "reservas", "Venezuela"]

variables:
  país1: "Venezuela"
  país2: "Argentina"
  país3: "Brasil"

respuesta: "{país1}, {país2} y {país3}"
tipo: completar

enunciado: "Grandes reservas de hidrocarburos se encuentran en {país1}, {país2} y {país3}, moldeando la industria petroquímica regional."

explicacion: |
  Estos países tienen la capacidad de extraer y refinar petróleo. Esto les permite desarrollar una industria petroquímica propia, reduciendo la dependencia de importaciones de derivados.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["matriz", "energética", "renovable"]

variables:
  característica: "predominantemente renovable"
  oportunidad: "oportunidad estratégica"

respuesta: oportunidad
tipo: completar

enunciado: "La matriz energética de América Latina es {característica}, lo que constituye una {oportunidad} en un mundo que busca descarbonizar su economía."

explicacion: |
  La transición energética global es una oportunidad para la región. Sus fuentes limpias pueden ser exportadas o utilizadas para producir bienes con baja huella de carbono.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["deslocalización", "corporaciones", "costos"]

variables:
  sujeto: "corporaciones"
  acción: "trasladan su producción"
  motivo: "menores costos operativos"

respuesta: motivo
tipo: completar

enunciado: "La {sujeto} {acción} a países con {motivo}, fenómeno conocido como deslocalización."

explicacion: |
  La búsqueda de eficiencia impulsa a las multinacionales a moverse. América Latina compite ofreciendo costos laborales y energéticos atractivos.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "avanzado"
  tags: ["aluminio", "industria", "electricidad"]

variables:
  industria: "aluminio"
  requisito: "grandes cantidades de electricidad"

respuesta: requisito
tipo: completar

enunciado: "La generación hidroeléctrica ha permitido la instalación de industrias de {industria} que requieren {requisito}."

explicacion: |
  El aluminio es uno de los productos más intensivos en energía. La hidroelectricidad barata de Brasil y Paraguay ha sido clave para su desarrollo en la región.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["vulnerabilidad", "clima", "hidroelectricidad"]

variables:
  causa: "dependencia de la hidroelectricidad"
  efecto: "vulnerabilidad climática"

respuesta: efecto
tipo: completar

enunciado: "La {causa} expone a la región a la {efecto}; sequías prolongadas pueden paralizar la producción industrial."

explicacion: |
  El cambio climático es un riesgo real. Si los patrones de lluvia cambian, la generación hidroeléctrica se ve afectada, impactando directamente a la industria.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["tecnología", "servicios", "desarrollo"]

variables:
  sector: "tecnológicos y de servicios avanzados"
  estructura: "agroindustria y minería"

respuesta: estructura
tipo: completar

enunciado: "Mientras algunos países han logrado desarrollar sectores {sector}, otros mantienen una estructura productiva basada en {estructura}."

explicacion: |
  La heterogeneidad es la norma. Algunos países han logrado saltar la trampa de la renta media diversificando su economía, mientras otros siguen atrapados en la extracción.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "intermedio"
  tags: ["precios", "competitividad", "energía"]

variables:
  requisito: "precios competitivos"
  resultado: "atraer inversiones industriales"

respuesta: resultado
tipo: completar

enunciado: "Sin acceso a fuentes de energía confiables y a {requisito}, es imposible {resultado} que compitan en el mercado mundial."

explicacion: |
  La energía es un costo fijo. Si es caro, el producto final es caro. Para competir globalmente, se necesita energía barata y confiable.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "basico"
  tags: ["zonas_franca", "maquiladora", "exportación"]

variables:
  tipo1: "maquiladoras"
  tipo2: "zonas francas"

respuesta: tipo2
tipo: completar

enunciado: "La deslocalización ha fomentado la instalación de {tipo1} y {tipo2} en la región."

explicacion: |
  Las zonas francas son instrumentos de política económica para atraer inversión. Ofrecen beneficios fiscales y aduaneros para facilitar la exportación.
```

```
metadata:
  materia: "Geografía"
  tema: "america_latina_industria_y_energia"
  nivel: "avanzado"
  tags: ["transformación", "recursos", "valor"]

variables:
  acción: "transformar recursos en valor agregado"
  medio: "procesos industriales intensivos en energía"

respuesta: medio
tipo: completar

enunciado: "El desafío actual radica en {acción} mediante {medio}."

explicacion: |
  La clave del desarrollo industrial es la transformación. Sin procesos industriales que usen energía para agregar valor, los recursos naturales se exportan baratos y se importan caros.
```

