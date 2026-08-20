# Examen jefe — Domina el Territorio Argentino

> Logro #133. Completaste el examen jefe sobre las regiones naturales, riesgos y herramientas geográficas. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **116 preguntas totales** en 5/5 secciones.

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

## Sección: relieve-clima-biomas (24 preguntas)

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "basico"
  tags: ["cadena_causal"]

enunciado: "¿Cuál es el orden causal correcto entre relieve, clima y bioma?"
tipo: mc
opciones_explicitas:
  - "Relieve y latitud determinan el clima; el clima determina el bioma"
  - "El bioma determina el clima; el clima determina el relieve"
  - "Son tres datos sin ninguna relación causal entre sí"
respuesta: "Relieve y latitud determinan el clima; el clima determina el bioma"

explicacion: |
  Son tres eslabones de una misma cadena, no tres datos sueltos.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "basico"
  tags: ["relieve", "vocabulario"]

enunciado: "¿Qué es el relieve de un territorio?"
tipo: mc
opciones_explicitas:
  - "La forma de la superficie terrestre: llanuras, mesetas, montañas, valles"
  - "El patrón de temperatura y lluvias a lo largo de los años"
  - "El tipo de vegetación dominante"
respuesta: "La forma de la superficie terrestre: llanuras, mesetas, montañas, valles"

explicacion: |
  El relieve es la forma del terreno; el clima y el bioma vienen
  después en la cadena causal.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "basico"
  tags: ["relieve"]

enunciado: "¿Qué caracteriza a una llanura?"
tipo: mc
opciones_explicitas:
  - "Terreno plano, con poca variación de altura"
  - "Terreno elevado con fuertes desniveles"
  - "Terreno bajo entre dos montañas"
respuesta: "Terreno plano, con poca variación de altura"

explicacion: |
  Se diferencia de la meseta en que ésta también es plana pero está
  elevada.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["relieve", "clima", "altitud"]

variables:
  metros_altura: random(1, 5) * 1000

respuesta: (metros_altura / 1000) * 6
tipo: input
tolerancia_abs: 0.5

enunciado: "La temperatura baja en promedio 6°C cada 1.000 metros de altura. Si un cerro tiene {metros_altura} metros de altura, ¿aproximadamente cuántos grados menos de temperatura hay en la cima respecto al nivel del mar?"

pasos:
  - "({metros_altura} / 1000) × 6°C"

explicacion: |
  Es la regla general que explica por qué hay nieve en la cima de
  montañas incluso cerca del ecuador.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["relieve", "altitud"]

enunciado: "¿Por qué puede haber nieve en la cima de una montaña muy alta cerca del ecuador, donde el clima general es cálido?"
tipo: mc
opciones_explicitas:
  - "Porque la temperatura baja con la altitud, sin importar la latitud"
  - "Porque cerca del ecuador siempre nieva a cualquier altura"
  - "Porque la nieve no depende de la temperatura"
respuesta: "Porque la temperatura baja con la altitud, sin importar la latitud"

explicacion: |
  La altitud puede compensar (o revertir) el efecto de una latitud
  cálida.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "avanzado"
  tags: ["relieve", "clima"]

enunciado: "¿Qué es el efecto de \"sombra de lluvia\" (o efecto de barrera) que genera una cordillera?"
tipo: mc
opciones_explicitas:
  - "El lado donde el viento choca con la montaña recibe mucha lluvia; el lado opuesto queda mucho más seco"
  - "Las montañas altas siempre reciben menos lluvia que las llanuras"
  - "Las cordilleras no afectan la distribución de lluvias"
respuesta: "El lado donde el viento choca con la montaña recibe mucha lluvia; el lado opuesto queda mucho más seco"

explicacion: |
  Una cordillera bloquea el paso de nubes cargadas de humedad,
  descargando la lluvia de un solo lado.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "avanzado"
  tags: ["relieve", "argentina"]

enunciado: "La Patagonia argentina es en gran parte árida a pesar de estar cerca del océano. ¿Por qué, según el efecto de sombra de lluvia?"
tipo: mc
opciones_explicitas:
  - "Porque la humedad del Pacífico se descarga del lado chileno de los Andes antes de llegar al lado argentino"
  - "Porque la Patagonia está muy cerca del ecuador"
  - "Porque no hay ninguna cordillera cerca de la Patagonia"
respuesta: "Porque la humedad del Pacífico se descarga del lado chileno de los Andes antes de llegar al lado argentino"

explicacion: |
  Los Andes actúan de barrera: el lado chileno recibe la lluvia, el
  lado argentino queda en la "sombra" seca.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["clima", "vocabulario"]

enunciado: "¿Cuál es la diferencia entre \"clima\" y \"tiempo\" (meteorológico)?"
tipo: mc
opciones_explicitas:
  - "El clima es el patrón promedio de muchos años; el tiempo es el estado puntual de la atmósfera en un momento dado"
  - "Son exactamente sinónimos"
  - "El tiempo es siempre más frío que el clima"
respuesta: "El clima es el patrón promedio de muchos años; el tiempo es el estado puntual de la atmósfera en un momento dado"

explicacion: |
  "Clima" es estadística de largo plazo; "tiempo" es el dato de hoy.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["clima", "latitud"]

enunciado: "¿Por qué la latitud es uno de los principales factores del clima de un lugar?"
tipo: mc
opciones_explicitas:
  - "Porque determina cuánta radiación solar directa recibe la zona a lo largo del año"
  - "Porque determina la altitud del terreno"
  - "Porque determina el tipo de suelo"
respuesta: "Porque determina cuánta radiación solar directa recibe la zona a lo largo del año"

explicacion: |
  Cerca del ecuador el Sol pega más directo todo el año; cerca de los
  polos, más oblicuo — es la base de las grandes zonas climáticas.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["clima"]

enunciado: "¿Por qué las zonas costeras suelen tener menos diferencia de temperatura entre verano e invierno que las zonas del interior de un continente?"
tipo: mc
opciones_explicitas:
  - "Porque el agua se calienta y enfría más lento que la tierra, moderando la temperatura cercana"
  - "Porque el mar siempre está más frío que la tierra"
  - "Porque las zonas costeras están siempre a mayor latitud"
respuesta: "Porque el agua se calienta y enfría más lento que la tierra, moderando la temperatura cercana"

explicacion: |
  Es el efecto moderador del mar; el interior de un continente, sin
  ese efecto, tiene clima continental con veranos e inviernos extremos.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "avanzado"
  tags: ["clima"]

enunciado: "¿Qué caracteriza a un clima continental (lejos del mar)?"
tipo: mc
opciones_explicitas:
  - "Veranos e inviernos con temperaturas extremas, por falta del efecto moderador del agua"
  - "Temperatura casi constante todo el año"
  - "Lluvias constantes todo el año"
respuesta: "Veranos e inviernos con temperaturas extremas, por falta del efecto moderador del agua"

explicacion: |
  Sin el mar cerca moderando, la temperatura varía mucho más entre
  estaciones.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "basico"
  tags: ["bioma", "vocabulario"]

enunciado: "¿Qué es un bioma?"
tipo: mc
opciones_explicitas:
  - "El tipo de ecosistema dominante de una región, definido principalmente por su clima"
  - "El tipo de gobierno de una región"
  - "La escala de un mapa físico"
respuesta: "El tipo de ecosistema dominante de una región, definido principalmente por su clima"

explicacion: |
  El clima determina qué vegetación y fauna puede sostenerse en una
  zona — eso es el bioma.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "basico"
  tags: ["biomas"]

enunciado: "¿Qué tipo de clima corresponde a una selva tropical?"
tipo: mc
opciones_explicitas:
  - "Cálido y muy lluvioso todo el año"
  - "Frío y seco"
  - "Templado con estaciones marcadas"
respuesta: "Cálido y muy lluvioso todo el año"

explicacion: |
  Ese clima es lo que permite la mayor biodiversidad del planeta, como
  en la Amazonía.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["biomas"]

enunciado: "¿Qué es lo que realmente define a un bioma como \"desierto\"?"
tipo: mc
opciones_explicitas:
  - "La falta de precipitaciones, sin importar si es cálido o frío"
  - "Que sea siempre muy cálido"
  - "Que esté siempre cerca del ecuador"
respuesta: "La falta de precipitaciones, sin importar si es cálido o frío"

explicacion: |
  Existen desiertos fríos (Gobi, Atacama) y cálidos (Sahara) — lo que
  los une es la escasez de agua, no la temperatura.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "avanzado"
  tags: ["biomas"]

enunciado: "¿Cuál de estos es un ejemplo de desierto FRÍO?"
tipo: mc
opciones_explicitas:
  - "El desierto de Atacama"
  - "El desierto del Sahara"
  - "Ningún desierto puede ser frío"
respuesta: "El desierto de Atacama"

explicacion: |
  El Atacama (y también el Gobi) son desiertos fríos: lo que los
  define es la falta de lluvia, no el calor.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["biomas", "argentina"]

enunciado: "La Pampa argentina es un ejemplo del bioma..."
tipo: mc
opciones_explicitas:
  - "Pastizal / pradera / estepa"
  - "Selva tropical"
  - "Tundra"
respuesta: "Pastizal / pradera / estepa"

explicacion: |
  Clima templado con lluvias moderadas: insuficientes para bosque,
  suficientes para pasto.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["biomas"]

enunciado: "¿Qué caracteriza al bioma de tundra?"
tipo: mc
opciones_explicitas:
  - "Clima muy frío, cerca de los polos o en gran altitud, con vegetación muy baja (musgos, líquenes)"
  - "Clima cálido con lluvias abundantes todo el año"
  - "Clima templado con estaciones marcadas y bosque denso"
respuesta: "Clima muy frío, cerca de los polos o en gran altitud, con vegetación muy baja (musgos, líquenes)"

explicacion: |
  El suelo permanentemente o casi siempre helado impide el crecimiento
  de vegetación más alta.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "basico"
  tags: ["cadena_causal"]

enunciado: "El bioma de una región es la CAUSA de su clima, no al revés."
tipo: vf
respuesta: falso

explicacion: |
  Es al revés: el clima (a su vez causado por relieve y latitud) es lo
  que determina qué bioma puede sostenerse ahí.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["cadena_causal"]

enunciado: "Relieve, clima y bioma son tres datos totalmente independientes de un territorio, sin relación causal entre ellos."
tipo: vf
respuesta: falso

explicacion: |
  Son tres eslabones de una misma cadena causal: relieve/latitud →
  clima → bioma.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Un bioma es un ejemplo de qué concepto ya visto en `../region/`?"
tipo: mc
opciones_explicitas:
  - "Región física, que agrupa territorio por un rasgo natural sin respetar límites políticos"
  - "Región formal, idéntica siempre a un país"
  - "División política"
respuesta: "Región física, que agrupa territorio por un rasgo natural sin respetar límites políticos"

explicacion: |
  Es la razón por la que `relieve-clima-biomas/` depende de
  `../region/` en `../dependencias.md`.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "basico"
  tags: ["relieve"]

enunciado: "¿Qué es una meseta?"
tipo: mc
opciones_explicitas:
  - "Terreno elevado y plano"
  - "Terreno bajo entre montañas"
  - "Terreno plano al nivel del mar"
respuesta: "Terreno elevado y plano"

explicacion: |
  Se diferencia de la llanura en que la meseta está elevada; de la
  montaña, en que es plana en su parte superior.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["biomas"]

enunciado: "¿Qué clima corresponde al bioma de bosque templado?"
tipo: mc
opciones_explicitas:
  - "Templado, con lluvias moderadas a abundantes y estaciones marcadas"
  - "Muy cálido y seco todo el año"
  - "Extremadamente frío, sin vegetación posible"
respuesta: "Templado, con lluvias moderadas a abundantes y estaciones marcadas"

explicacion: |
  Es distinto del bosque tropical (siempre cálido) por tener
  estaciones bien diferenciadas.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "intermedio"
  tags: ["cadena_causal"]

enunciado: "Ordená correctamente la cadena de causas: Bioma, Relieve, Clima."
tipo: ordenar
opciones_explicitas:
  - "Relieve"
  - "Clima"
  - "Bioma"
respuesta: "Relieve"

explicacion: |
  Relieve (y latitud) → Clima → Bioma, en ese orden causal.
```

```
metadata:
  materia: "geografia"
  tema: "relieve_clima_biomas"
  nivel: "avanzado"
  tags: ["cadena_causal"]

enunciado: "¿Por qué relieve, clima y bioma se tratan como una sola unidad de estudio en vez de tres temas separados?"
tipo: mc
opciones_explicitas:
  - "Porque cada uno es la causa directa del siguiente: entender uno sin el anterior es quedarse a mitad de camino de la explicación"
  - "Porque son exactamente lo mismo con distinto nombre"
  - "Porque el MAPA los separó en 3 nodos distintos con IDs propios"
respuesta: "Porque cada uno es la causa directa del siguiente: entender uno sin el anterior es quedarse a mitad de camino de la explicación"

explicacion: |
  A diferencia de `G12` o `H2` (que sí tienen sub-IDs `a`/`b`/`c` en el
  MAPA), `G6` sigue siendo un solo nodo — señal de que se pensó como
  unidad.
```

## Sección: riesgos-ambientales-mundiales (24 preguntas)

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["componentes", "amenaza", "vulnerabilidad"]

variables:
  amenaza: random(1, 10)
  vulnerabilidad: random(1, 10)

respuesta: "{amenaza} + {vulnerabilidad}"
tipo: input

enunciado: "Si modelamos el riesgo como una función de la amenaza y la vulnerabilidad, y asignamos valores arbitrarios de {amenaza} y {vulnerabilidad}, ¿cuál es la suma conceptual de sus componentes principales?"

explicacion: |
  Aunque la fórmula real es compleja, conceptualmente el riesgo surge de la presencia simultánea de una amenaza y una vulnerabilidad. Esta pregunta verifica la comprensión de que ambos elementos son necesarios.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["ecosistemas", "humedales", "bosques"]

variables:
  ecosistema: uno_de(["humedales", "bosques"])

respuesta: "clave"
tipo: completar

enunciado: "Los {ecosistema} son considerados ecosistemas clave por su rol en la regulación hídrica y la biodiversidad."

explicacion: |
  Estos ecosistemas tienen una desproporción alta en su contribución a la estabilidad ambiental relativa a su tamaño o área.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["definicion", "riesgo"]

variables:
  a: random(10, 20)
  b: random(10, 20)

respuesta: "la combinacion de la amenaza y la vulnerabilidad"
tipo: completar

enunciado: "Segun la teoria, un riesgo ambiental no es solo el fenomeno en si, sino {a} + {b} (en palabras clave) entre la amenaza y la vulnerabilidad de la sociedad que lo recibe."

explicacion: |
  El concepto clave es que el riesgo surge de la interseccion entre un evento peligroso (amenaza) y la capacidad de la sociedad para enfrentarlo (vulnerabilidad).
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["escala", "alcance"]

variables:
  x: random(1, 5)

respuesta: falso
tipo: vf

enunciado: "Los riesgos ambientales mundiales son fenomenos que se limitan a las fronteras nacionales y no trascienden otros paises."

explicacion: |
  Falso. Los riesgos ambientales mundiales, por definicion, trascienden las fronteras nacionales y afectan a la estabilidad de los ecosistemas a escala planetaria.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["antropoceno", "impacto_humano"]

variables:
  a: random(100, 900)
  b: random(100, 900)

respuesta: "antropoceno"
tipo: completar

enunciado: "En la era actual, conocida como el {a} + {b} (nombre del periodo geologico), la huella humana es tan profunda que los riesgos tienen una fuerte componente tecnologica y politica."

explicacion: |
  El termino "Antropoceno" se utiliza para describir el periodo actual donde la actividad humana es la influencia dominante en el clima y el medio ambiente.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["clima", "eventos_extremos"]

variables:
  freq: random(2, 5)

respuesta: "mas frecuentes e intensos"
tipo: completar

enunciado: "El calentamiento global no solo implica mas calor, sino que los eventos climaticos extremos se vuelven {freq} veces mas frecuentes e intensos en su descripcion teorica."

explicacion: |
  La teoria establece que el cambio climático modifica los regímenes tradicionales, haciendo que los eventos extremos sean más frecuentes e intensos.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "avanzado"
  tags: ["argentina", "impacto_local"]

variables:
  a: random(1, 3)

respuesta: "sudestada"
tipo: completar

enunciado: "En Argentina, el cambio climático se vincula directamente con la mayor frecuencia de fenomenos como el {a} o las sequias en el centro del pais."

explicacion: |
  El fenomeno meteorologico citado en la teoria como ejemplo de impacto local del cambio global es la Sudestada.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["ecosistemas", "servicios"]

variables:
  n: random(1, 3)

respuesta: "amortiguadores"
tipo: completar

enunciado: "Los ecosistemas como los humedales actuan como {n} + {n} + {n} (palabra clave) naturales que protegen contra inundaciones."

explicacion: |
  La teoria describe a los ecosistemas clave como "amortiguadores" naturales que proveen servicios como la regulacion del agua y la proteccion contra inundaciones.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["biodiversidad", "suelos"]

variables:
  a: random(1, 2)

respuesta: "pérdida de biodiversidad"
tipo: completar

enunciado: "Junto con el cambio climático, la {a} y la degradacion de los suelos son pilares de la crisis ambiental actual."

explicacion: |
  Los tres pilares mencionados son el cambio climático, la pérdida de biodiversidad y la contaminación transfronteriza.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["contaminacion", "transfronterizo"]

variables:
  a: random(1, 3)

respuesta: "contaminacion transfronteriza"
tipo: completar

enunciado: "Entre los riesgos urgentes a nivel mundial destaca la {a} + {a} + {a} (termino clave)."

explicacion: |
  La contaminacion transfronteriza es uno de los riesgos globales principales junto con el cambio climático y la pérdida de biodiversidad.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["gei", "causa"]

variables:
  a: random(1, 2)

respuesta: "emision de gases de efecto invernadero"
tipo: completar

enunciado: "El calentamiento global esta impulsado principalmente por la {a} + {a} + {a} (causa principal)."

explicacion: |
  La causa principal del calentamiento global mencionada es la emision de gases de efecto invernadero.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["servicios_ecosistemicos", "polinizacion"]

variables:
  a: random(1, 3)

respuesta: "polinizacion"
tipo: completar

enunciado: "Al destruir bosques nativos, se pierden servicios como la regulacion del agua, la {a} + {a} + {a} y la proteccion contra inundaciones."

explicacion: |
  La polinizacion es uno de los servicios ecosistemicos vitales mencionados que se pierden con la degradacion ambiental.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["estrategias", "adaptacion"]

variables:
  a: random(1, 3)

respuesta: "adaptacion y mitigacion"
tipo: completar

enunciado: "Comprender la red de causas y efectos de los riesgos ambientales es vital para desarrollar estrategias de {a} + {a} + {a} (dos conceptos clave)."

explicacion: |
  La teoria menciona que el entendimiento de estas interacciones es clave para estrategias de adaptacion y mitigacion.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["humedales", "proteccion"]

variables:
  a: random(1, 2)

respuesta: "humedales"
tipo: completar

enunciado: "Cuando se destruyen ecosistemas clave, como los {a} + {a} + {a}, se pierden servicios de regulacion del agua."

explicacion: |
  Los humedales son citados como un ecosistema clave cuyo destruccion conlleva la perdida de regulacion hidrica.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "avanzado"
  tags: ["enfoque", "geografia"]

variables:
  a: random(1, 3)

respuesta: "relaciones entre la naturaleza y la organizacion humana"
tipo: completar

enunciado: "Esta perspectiva nos ayuda a ver que la geografia no estudia solo el terreno, sino las {a} + {a} + {a} (objetivo de estudio)."

explicacion: |
  La geografia, desde este enfoque, estudia las relaciones entre los sistemas naturales y la organizacion humana.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["sequias", "argentina"]

variables:
  a: random(1, 2)

respuesta: "centro"
tipo: completar

enunciado: "En Argentina, el cambio climático se vincula con la mayor frecuencia de fenomenos como la sudestada o las sequias en el {a} del pais."

explicacion: |
  La teoria especifica que las sequias en el centro del pais son un ejemplo de impacto local del cambio global.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["regimenes", "clima"]

variables:
  a: random(1, 3)

respuesta: "regimenes climaticos tradicionales"
tipo: completar

enunciado: "El calentamiento global esta modificando los {a} + {a} + {a} (objeto de modificacion)."

explicacion: |
  El calentamiento global altera los patrones y regimenes climaticos que existian previamente.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["impacto_social", "migracion"]

variables:
  a: random(1, 2)

respuesta: "migraciones masivas"
tipo: completar

enunciado: "Cuando el calor provoca sequias prolongadas que destruyen cosechas, puede generar {a} + {a} + {a} (consecuencia social)."

explicacion: |
  La destruccion de cosechas por sequias es un factor que puede generar migraciones masivas de poblacion.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["estabilidad", "ecosistemas"]

variables:
  a: random(1, 3)

respuesta: "estabilidad de los ecosistemas"
tipo: completar

enunciado: "Los riesgos ambientales mundiales amenazan la {a} + {a} + {a} y el bienestar de la humanidad."

explicacion: |
  La definicion inicial menciona que amenazan la estabilidad de los ecosistemas y el bienestar humano.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "basico"
  tags: ["suelos", "degradacion"]

variables:
  a: random(1, 2)

respuesta: "degradacion de los suelos"
tipo: completar

enunciado: "La perdida de biodiversidad y la {a} + {a} + {a} son pilares de la crisis ambiental."

explicacion: |
  La degradacion de los suelos es mencionada junto a la perdida de biodiversidad como pilar de la crisis.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["comprension", "integral"]

variables:
  a: random(1, 3)

respuesta: "comprension integral"
tipo: completar

enunciado: "Los riesgos ambientales requieren una {a} + {a} + {a} de como interactuan los sistemas terrestres."

explicacion: |
  Se requiere una comprension integral de las interacciones entre los diversos sistemas de la Tierra.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["inundaciones", "proteccion"]

variables:
  a: random(1, 3)

respuesta: "proteccion contra inundaciones"
tipo: completar

enunciado: "Sin los amortiguadores naturales, la sociedad queda expuesta a riesgos mayores, perdiendo la {a} + {a} + {a} (servicio perdido)."

explicacion: |
  La proteccion contra inundaciones es un servicio especifico que dejan de proveer los ecosistemas degradados.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "avanzado"
  tags: ["huella", "humana"]

variables:
  a: random(1, 2)

respuesta: "profunda"
tipo: completar

enunciado: "En el Antropoceno, la huella humana es tan {a} que los riesgos tienen componente politico."

explicacion: |
  La teoria describe la huella humana como "profunda" en esta era.
```

```
metadata:
  materia: "geografia"
  tema: "riesgos_ambientales_mundiales"
  nivel: "intermedio"
  tags: ["interaccion", "sistemas"]

variables:
  a: random(1, 3)

respuesta: "sistemas terrestres"
tipo: completar

enunciado: "Es fundamental entender como interactuan los {a} + {a} + {a} para comprender los riesgos ambientales."

explicacion: |
  La comprension de la interaccion entre los sistemas terrestres es clave para abordar estos riesgos.
```

## Sección: riesgos-naturales-argentinos (24 preguntas)

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["sequia", "clima"]

variables:
  region1: uno_de(["NOA", "Cuyo"])
  region2: uno_de(["NOA", "Cuyo"])

respuesta: "NOA y Cuyo"
tipo: input

enunciado: "Identifica las dos grandes regiones de Argentina donde la aridez es una característica estructural y la sequía afecta principalmente a la producción agropecuaria."

explicacion: |
  El NOA y Cuyo son regiones áridas por naturaleza, donde la sequía es un riesgo constante vinculado también a cambios climáticos globales.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["granizo", "economia"]

variables:
  sector: uno_de(["agricultura", "ganadería"])

respuesta: "agricultura"
tipo: input

enunciado: "El granizo, asociado a las tormentas severas del norte, causa daños significativos principalmente al sector de {sector}."

explicacion: |
  El texto indica que el granizo puede causar daños significativos en la agricultura, sector vital para la economía nacional.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["ciclones", "patagonia"]

variables:
  zona: uno_de(["Patagonia", "costa atlántica"])

respuesta: "Patagonia"
tipo: input

enunciado: "Los ciclones extratropicales generan lluvias torrenciales y vientos fuertes en el sur del país, especialmente en {zona} y la costa atlántica."

explicacion: |
  Los ciclones extratropicales influyen fuertemente en la Patagonia y la costa atlántica, afectando la navegación y la vida costera.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["dinamica", "territorio"]

variables:
  estado: falso

respuesta: falso
tipo: vf

enunciado: "La geografía argentina es estática y no está sujeta a fuerzas tectónicas, atmosféricas o hidrológicas que interactúen con el espacio habitado."

explicacion: |
  Falso. La geografía argentina no es estática; está sujeta constantemente a fuerzas tectónicas, atmosféricas y hidrológicas.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["planificacion", "gestion"]

variables:
  objetivo: uno_de(["reducir vulnerabilidad", "aumentar densidad"])

respuesta: "reducir vulnerabilidad"
tipo: input

enunciado: "El estudio de los riesgos naturales permite tomar decisiones informadas para {objetivo} social y económica, transformando el conocimiento geográfico en protección civil."

explicacion: |
  Comprender los riesgos permite reducir la vulnerabilidad social y económica mediante la planificación del territorio.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "avanzado"
  tags: ["sismos", "magnitud"]

variables:
  factor1: "profundidad del hipocentro"
  factor2: "distancia al epicentro"

respuesta: "profundidad del hipocentro"
tipo: input

enunciado: "La magnitud de los efectos de un sismo depende de la {factor1} y de la distancia al epicentro, exigiendo normas antisísmicas estrictas."

explicacion: |
  La magnitud y los efectos dependen de factores como la profundidad del hipocentro y la distancia al epicentro.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["ciclones", "comparacion"]

variables:
  intensidad: "menos intensos"

respuesta: "menos intensos"
tipo: input

enunciado: "Los ciclones extratropicales son {intensidad} que los huracanes tropicales, pero aún así generan lluvias torrenciales en el sur."

explicacion: |
  A diferencia de los huracanes, los ciclones extratropicales son menos intensos, pero peligrosos por sus lluvias y vientos en el sur.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["vulnerabilidad", "gestion"]

variables:
  riesgo: uno_de(["tornados", "inundaciones"])

respuesta: "inundaciones"
tipo: input

enunciado: "Conocer dónde ocurren fenómenos como los tornados o las {riesgo} es fundamental para reducir la vulnerabilidad social y económica."

explicacion: |
  El conocimiento de la ubicación y causa de riesgos como inundaciones y tornados es clave para la reducción de vulnerabilidad.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["sequia", "cambio_climatico"]

variables:
  causa: "cambios en los patrones climáticos globales"

respuesta: "cambios en los patrones climáticos globales"
tipo: completar

enunciado: "La intensificación de las sequías recientes se vincula a {causa}, poniendo en riesgo el acceso al agua."

explicacion: |
  La intensificación de la sequía no es solo natural, sino que está vinculada a cambios en los patrones climáticos globales.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["tectonica", "placas"]

variables:
  placa: "Nazca"

respuesta: "Nazca"
tipo: input

enunciado: "La actividad sísmica en el occidente argentino se debe a la subducción de la placa {placa} bajo la placa Sudamericana."

explicacion: |
  La placa de Nazca se subduce bajo la placa Sudamericana, generando la actividad sísmica en el oeste argentino.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["sismos", "ubicacion"]

variables:
  zona: uno_de(["occidente", "este"])

respuesta: "occidente"
tipo: input

enunciado: "La actividad sísmica es un riesgo permanente en el {zona} del país, debido a la dinámica de placas."

explicacion: |
  El occidente argentino es la zona de mayor riesgo sísmico debido a la subducción de la placa de Nazca.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["tornados", "agricultura"]

variables:
  efecto: "daños significativos"

respuesta: "daños significativos"
tipo: input

enunciado: "El granizo asociado a tormentas severas puede causar {efecto} en la agricultura, un sector vital para la economía nacional."

explicacion: |
  Las tormentas severas en el norte generan granizo que causa daños significativos a los cultivos agrícolas.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["tormentas", "atmosferica"]

variables:
  condicion: "inestabilidad atmosférica violenta"

respuesta: "inestabilidad atmosférica violenta"
tipo: completar

enunciado: "El choque de masas de aire genera una {condicion} que da lugar a tornados en el NEA."

explicacion: |
  El choque de masas de aire cálido y húmedo con frentes fríos crea inestabilidad atmosférica violenta.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["inundaciones", "hidrologia"]

variables:
  riesgo: "inundaciones"

respuesta: "inundaciones"
tipo: input

enunciado: "Además de los sismos, las {riesgo} son un riesgo hidrológico importante que debe ser gestionado mediante la planificación territorial."

explicacion: |
  Las inundaciones son un riesgo hidrológico clave, junto con los sismos, que requiere planificación para su gestión.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "avanzado"
  tags: ["sismos", "propagacion"]

variables:
  caracteristica: "no respetan fronteras"

respuesta: "no respetan fronteras"
tipo: input

enunciado: "Los sismos {caracteristica} provinciales, por lo que la gestión del riesgo debe ser interjurisdiccional."

explicacion: |
  Los sismos no respetan las fronteras provinciales, afectando áreas amplias independientemente de los límites administrativos.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["sequia", "regiones"]

variables:
  region: uno_de(["NOA", "Cuyo"])

respuesta: "NOA"
tipo: input

enunciado: "La región del {region} presenta una aridez como característica estructural del clima, lo que la hace propensa a sequías."

explicacion: |
  El NOA y Cuyo son regiones con aridez estructural, lo que las hace vulnerables a la sequía.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["gestion", "emergencias"]

variables:
  accion: "prepararse"

respuesta: "prepararse"
tipo: input

enunciado: "Al conocer dónde y por qué ocurren los fenómenos naturales, podemos tomar decisiones para {accion} ante emergencias."

explicacion: |
  El conocimiento geográfico permite tomar decisiones informadas para prepararse ante emergencias y reducir riesgos.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["ciclones", "navegacion"]

variables:
  sector: "navegación"

respuesta: "navegación"
tipo: input

enunciado: "Los ciclones extratropicales influyen en la {sector} y la vida costera del sur del país."

explicacion: |
  Los ciclones en el sur afectan la navegación y la vida costera debido a sus lluvias y vientos fuertes.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "avanzado"
  tags: ["tectonica", "subduccion"]

variables:
  placa_superior: "Sudamericana"
  placa_inferior: "Nazca"

respuesta: "Nazca"
tipo: input

enunciado: "La placa {placa_inferior} se subduce bajo la placa {placa_superior}, generando la sismicidad en el occidente."

explicacion: |
  La placa de Nazca se subduce bajo la placa Sudamericana, causando la actividad sísmica en el oeste argentino.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["dimensiones", "clima"]

variables:
  dimension: "continentales"

respuesta: "continentales"
tipo: input

enunciado: "Argentina es un país de dimensiones {dimension} que atraviesa diversas zonas climáticas y geológicas."

explicacion: |
  Las dimensiones continentales de Argentina implican una gran variedad de zonas climáticas y geológicas expuestas a riesgos.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["sostenibilidad", "planificacion"]

variables:
  objetivo: "desarrollo sostenible"

respuesta: "desarrollo sostenible"
tipo: input

enunciado: "Transformar el conocimiento geográfico en protección civil es fundamental para el {objetivo}."

explicacion: |
  La gestión de riesgos contribuye al desarrollo sostenible al proteger la población y el territorio.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["sismos", "provincias"]

variables:
  prov1: uno_de(["Mendoza", "San Juan", "Catamarca"])
  prov2: uno_de(["Mendoza", "San Juan", "Catamarca"])

respuesta: "Mendoza"
tipo: input

enunciado: "Entre las provincias del NOA y Cuyo, {prov1} se encuentra en una zona de alta sismicidad."

explicacion: |
  Mendoza, San Juan y Catamarca son provincias del occidente con alta sismicidad por la subducción de la placa de Nazca.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "basico"
  tags: ["tormentas", "NEA"]

variables:
  region: "NEA"

respuesta: "NEA"
tipo: input

enunciado: "En el {region}, los tornados y tormentas severas son frecuentes debido a la inestabilidad atmosférica."

explicacion: |
  El NEA y el norte de la Pampa son regiones con frecuente actividad de tornados y tormentas severas.
```

```
metadata:
  materia: "Geografía"
  tema: "riesgos_naturales_argentinos"
  nivel: "intermedio"
  tags: ["sequia", "agua"]

variables:
  recurso: "acceso al agua"

respuesta: "acceso al agua"
tipo: input

enunciado: "La intensificación de las sequías pone en riesgo el {recurso} y la producción agropecuaria en el NOA y Cuyo."

explicacion: |
  Las sequías intensificadas amenazan el acceso al agua y la producción agrícola en las regiones áridas del país.
```

## Sección: sig-gps (20 preguntas)

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "basico"
  tags: ["gps", "vocabulario"]

enunciado: "¿Qué significa la sigla GPS?"
tipo: mc
opciones_explicitas:
  - "Global Positioning System (Sistema de Posicionamiento Global)"
  - "Geographic Position Sensor"
  - "General Public Satellite"
respuesta: "Global Positioning System (Sistema de Posicionamiento Global)"

explicacion: |
  Es una red de satélites que permite calcular la posición exacta de
  un receptor en la superficie terrestre.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "trilateracion"]

enunciado: "¿Cómo se llama el método matemático con el que el GPS calcula la posición de un receptor?"
tipo: mc
opciones_explicitas:
  - "Trilateración"
  - "Proyección Mercator"
  - "Regla de tres"
respuesta: "Trilateración"

explicacion: |
  Se basa en calcular la distancia a varios satélites y encontrar el
  punto donde esas distancias se cruzan.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "trilateracion"]

enunciado: "¿Qué mide el receptor GPS a partir de la señal que recibe de cada satélite?"
tipo: mc
opciones_explicitas:
  - "Cuánto tiempo tardó en llegar la señal, para convertirlo en distancia"
  - "El color de la señal"
  - "La cantidad de satélites visibles"
respuesta: "Cuánto tiempo tardó en llegar la señal, para convertirlo en distancia"

explicacion: |
  Como la señal viaja a la velocidad de la luz, ese tiempo se convierte
  directo en distancia: distancia = velocidad × tiempo.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "trilateracion"]

enunciado: "Si el receptor sólo conoce la distancia a UN satélite, ¿qué puede determinar sobre su posición?"
tipo: mc
opciones_explicitas:
  - "Que está en algún punto de una esfera alrededor de ese satélite, no un punto único"
  - "Su posición exacta en 3D"
  - "Nada, ni siquiera una esfera de posibles ubicaciones"
respuesta: "Que está en algún punto de una esfera alrededor de ese satélite, no un punto único"

explicacion: |
  Con una sola distancia conocida, el conjunto de puntos posibles es
  toda una esfera, no un punto.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "trilateracion"]

enunciado: "Con la distancia a TRES satélites, ¿qué logra el receptor?"
tipo: mc
opciones_explicitas:
  - "Reducir las posibilidades a un único punto real posible, cruzando las tres esferas"
  - "Calcular su velocidad de desplazamiento"
  - "Nada distinto que con un solo satélite"
respuesta: "Reducir las posibilidades a un único punto real posible, cruzando las tres esferas"

explicacion: |
  Las tres esferas se cruzan en un único punto realista (el otro punto
  matemático suele quedar fuera de la Tierra o a una altura absurda).
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "trilateracion"]

enunciado: "¿Cuántos satélites hacen falta en la práctica para que un GPS de celular calcule una posición precisa?"
tipo: input
respuesta: 4

explicacion: |
  El cuarto satélite corrige el error del reloj (no atómico) del
  receptor, que si no distorsionaría el cálculo de distancia de los
  otros tres.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["gps", "trilateracion"]

enunciado: "¿Por qué el GPS de un celular necesita un cuarto satélite además de los tres que alcanzarían con un reloj perfecto?"
tipo: mc
opciones_explicitas:
  - "Porque el reloj del receptor no es tan preciso como los relojes atómicos de los satélites, y la cuarta señal corrige ese error"
  - "Porque un satélite siempre falla y hay que tener uno de repuesto"
  - "Porque cada satélite sólo puede calcular una coordenada (latitud, longitud o altitud)"
respuesta: "Porque el reloj del receptor no es tan preciso como los relojes atómicos de los satélites, y la cuarta señal corrige ese error"

explicacion: |
  Son 4 incógnitas a resolver (latitud, longitud, altitud y error de
  reloj) y 4 ecuaciones — una por cada satélite.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps"]

enunciado: "¿Por qué los satélites GPS llevan relojes atómicos extremadamente precisos?"
tipo: mc
opciones_explicitas:
  - "Porque el cálculo de distancia depende de medir el tiempo de viaje de la señal con muchísima precisión"
  - "Porque necesitan mostrar la hora a los usuarios"
  - "Porque los satélites viajan más rápido que la luz"
respuesta: "Porque el cálculo de distancia depende de medir el tiempo de viaje de la señal con muchísima precisión"

explicacion: |
  Un pequeño error de tiempo, multiplicado por la velocidad de la luz,
  se traduce en un error de distancia grande.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["gps"]

enunciado: "Además del GPS estadounidense, ¿cuál de estos es otro sistema satelital de posicionamiento real?"
tipo: mc
opciones_explicitas:
  - "GLONASS (Rusia)"
  - "Wi-Fi 6"
  - "Bluetooth Low Energy"
respuesta: "GLONASS (Rusia)"

explicacion: |
  Existen varios sistemas equivalentes: GLONASS (Rusia), Galileo
  (Unión Europea) y BeiDou (China).
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps"]

enunciado: "El receptor GPS de un celular le envía información de vuelta al satélite para que sepa dónde está."
tipo: vf
respuesta: falso

explicacion: |
  El receptor sólo ESCUCHA las señales de los satélites y calcula; no
  transmite nada de vuelta. Compartir la ubicación con otras personas
  es una función aparte, de internet, no del GPS en sí.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "limites"]

enunciado: "El GPS de un celular común ubica la posición con precisión de centímetros."
tipo: vf
respuesta: falso

explicacion: |
  La precisión típica de un GPS de celular es de unos pocos metros;
  llegar a centímetros requiere equipamiento especial (GPS diferencial
  o RTK).
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "basico"
  tags: ["gps", "limites"]

enunciado: "¿Por qué el GPS suele funcionar mal o directamente no funcionar dentro de un edificio?"
tipo: mc
opciones_explicitas:
  - "Porque la señal de los satélites es débil y se bloquea fácilmente con techos y paredes"
  - "Porque los satélites no pasan sobre las ciudades"
  - "Porque el GPS necesita conexión a Wi-Fi para funcionar"
respuesta: "Porque la señal de los satélites es débil y se bloquea fácilmente con techos y paredes"

explicacion: |
  Necesita línea de vista relativamente despejada hacia el cielo;
  interiores, túneles y "cañones urbanos" (entre rascacielos) degradan
  mucho la señal.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["gps", "limites"]

enunciado: "¿Qué es el \"cañón urbano\" que afecta la precisión del GPS?"
tipo: mc
opciones_explicitas:
  - "El efecto de rascacielos muy altos que bloquean o rebotan la señal satelital"
  - "Un tipo de satélite GPS más moderno"
  - "El nombre de una calle con GPS de alta precisión"
respuesta: "El efecto de rascacielos muy altos que bloquean o rebotan la señal satelital"

explicacion: |
  Entre edificios muy altos, la señal puede rebotar (multipath) o
  bloquearse directamente, degradando la posición calculada.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["gps", "aplicaciones"]

enunciado: "¿En qué contexto se usa el GPS diferencial o RTK, que llega a precisión de centímetros?"
tipo: mc
opciones_explicitas:
  - "Agricultura de precisión y topografía"
  - "Cualquier celular de gama media"
  - "Sólo en satélites militares"
respuesta: "Agricultura de precisión y topografía"

explicacion: |
  Requiere equipamiento y estaciones de referencia adicionales que un
  celular común no tiene.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["gps", "cruce"]

enunciado: "¿Qué problema resuelve específicamente el GPS, distinto del que resuelve un mapa digital?"
tipo: mc
opciones_explicitas:
  - "El GPS resuelve \"dónde estoy\"; el mapa digital resuelve \"qué hay alrededor de esa posición\""
  - "Son exactamente el mismo problema"
  - "El GPS muestra las calles; el mapa digital calcula la posición"
respuesta: "El GPS resuelve \"dónde estoy\"; el mapa digital resuelve \"qué hay alrededor de esa posición\""

explicacion: |
  Son dos tecnologías distintas combinadas: el GPS da la posición, el
  SIG del mapa digital la interpreta contra sus capas de datos.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["trilateracion", "calculo"]

variables:
  velocidad_luz: 300000
  tiempo_segundos: random_float(0.02, 0.1)

respuesta: redondear(velocidad_luz * tiempo_segundos, 0)
tipo: input
tolerancia_abs: 50

enunciado: "Una señal GPS viaja a {velocidad_luz} km/s (velocidad de la luz, redondeada) y tarda {tiempo_segundos} segundos en llegar al receptor. ¿Aproximadamente cuántos km hay entre el satélite y el receptor?"

pasos:
  - "distancia = velocidad × tiempo = {velocidad_luz} × {tiempo_segundos}"

explicacion: |
  Es el mismo principio que usa el GPS real: convertir tiempo de viaje
  de la señal en distancia, conociendo la velocidad de la luz.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["trilateracion"]

enunciado: "Contando latitud, longitud, altitud y el error de reloj del receptor, ¿cuántas incógnitas resuelve el sistema con 4 satélites?"
tipo: input
respuesta: 4

explicacion: |
  3 incógnitas de posición (latitud, longitud, altitud) + 1 de error
  de reloj = 4, resueltas con 4 ecuaciones (una por satélite).
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "basico"
  tags: ["limites"]

enunciado: "Dentro de un túnel largo, el GPS de un auto sigue recibiendo señal satelital normalmente."
tipo: vf
respuesta: falso

explicacion: |
  Un túnel bloquea la señal satelital casi por completo; muchos
  sistemas navegan "a ciegas" estimando posición por velocidad y
  dirección hasta recuperar señal.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "intermedio"
  tags: ["cruce"]

enunciado: "¿Cuál de estas tareas NO hace el GPS por sí mismo, sino que depende de otra tecnología (mapas digitales)?"
tipo: mc
opciones_explicitas:
  - "Mostrar el nombre de la calle en la que se está parado"
  - "Calcular la distancia a un satélite a partir del tiempo de viaje de la señal"
  - "Determinar latitud, longitud y altitud del receptor"
respuesta: "Mostrar el nombre de la calle en la que se está parado"

explicacion: |
  El GPS sólo da coordenadas; asociar esas coordenadas a un nombre de
  calle es trabajo del SIG del mapa digital.
```

```
metadata:
  materia: "geografia"
  tema: "sig_gps"
  nivel: "avanzado"
  tags: ["trilateracion"]

enunciado: "¿Qué determina, en última instancia, la posición 3D final que calcula un receptor GPS?"
tipo: mc
opciones_explicitas:
  - "La intersección de las esferas de distancia a al menos 4 satélites"
  - "La dirección hacia donde apunta la brújula del celular"
  - "El mapa digital que la app tenga descargado"
respuesta: "La intersección de las esferas de distancia a al menos 4 satélites"

explicacion: |
  Es pura trilateración matemática — el mapa digital y la brújula son
  capas de información aparte que se agregan después.
```
