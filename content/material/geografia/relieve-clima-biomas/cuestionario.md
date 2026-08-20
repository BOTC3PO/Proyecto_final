# Geografía — Relieve, clima y biomas (cuestionario, 24 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.

---

### 1 — La cadena causal

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

### 2 — Qué es el relieve

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

### 3 — Llanura

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

### 4 — Temperatura y altitud

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

### 5 — Por qué hay nieve cerca del ecuador

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

### 6 — Efecto de sombra de lluvia

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

### 7 — Patagonia y los Andes

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

### 8 — Clima vs. tiempo meteorológico

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

### 9 — Latitud y radiación solar

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

### 10 — Cercanía al mar y clima

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

### 11 — Clima continental

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

### 12 — Qué es un bioma

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

### 13 — Selva tropical

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

### 14 — Qué define a un desierto

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

### 15 — Desierto frío

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

### 16 — Pastizal / pradera

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

### 17 — Tundra

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

### 18 — Verdadero o falso: el bioma determina el clima

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

### 19 — Verdadero o falso: relieve, clima y bioma son independientes

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

### 20 — Región y bioma

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

### 21 — Meseta

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

### 22 — Bosque templado

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

### 23 — Ordenar la cadena causal

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
respuesta_orden: ["Relieve", "Clima", "Bioma"]

explicacion: |
  Relieve (y latitud) → Clima → Bioma, en ese orden causal.
```

### 24 — Por qué no se separa en 3 módulos

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
