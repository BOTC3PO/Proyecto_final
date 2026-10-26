# Física — Precipitación (cuestionario, 22 preguntas VBLang)

> Tema: `MET4`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es la precipitación

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "basico"
  tags: ["precipitacion", "vocabulario"]

enunciado: "¿Qué es la precipitación, en el sentido meteorológico?"
tipo: mc
opciones_explicitas:
  - "Cualquier forma de agua, líquida o sólida, que cae de una nube hacia la superficie"
  - "El proceso por el cual el agua se evapora de los océanos"
  - "El movimiento de una masa de aire de un lugar a otro"
respuesta: "Cualquier forma de agua, líquida o sólida, que cae de una nube hacia la superficie"

explicacion: |
  Incluye lluvia, nieve, granizo y aguanieve.
```

### 2 — Por qué no cae toda gota dentro de una nube

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "mecanismo"]

enunciado: "¿Por qué las gotitas o cristales de una nube no caen todo el tiempo?"
tipo: mc
opciones_explicitas:
  - "Son demasiado pequeñas y livianas: flotan sostenidas por las corrientes de aire"
  - "Porque el aire dentro de una nube no tiene corrientes"
  - "Porque el agua dentro de una nube no pesa nada"
respuesta: "Son demasiado pequeñas y livianas: flotan sostenidas por las corrientes de aire"

explicacion: |
  Sólo caen cuando crecen lo suficiente al chocar y unirse con otras.
```

### 3 — Orden del ciclo del agua

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "basico"
  tags: ["precipitacion", "ciclo_del_agua"]

tipo: ordenar
opciones_explicitas:
  - "evaporación"
  - "condensación"
  - "precipitación"
respuesta_orden: ["evaporación", "condensación", "precipitación"]
enunciado: "Ordená estas tres etapas del ciclo del agua en el orden en que ocurren."

explicacion: |
  El agua se evapora, sube y condensa en nubes, y luego cae como
  precipitación.
```

### 4 — Qué cierra el ciclo del agua

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "ciclo_del_agua"]

enunciado: "¿Qué etapa del ciclo del agua cierra el ciclo después de la precipitación?"
tipo: mc
opciones_explicitas:
  - "Escurrimiento e infiltración, de vuelta a ríos, lagos, napas u océanos"
  - "Una nueva condensación inmediata"
  - "El ciclo del agua no se cierra nunca"
respuesta: "Escurrimiento e infiltración, de vuelta a ríos, lagos, napas u océanos"

explicacion: |
  El agua que cae vuelve al sistema, listo para evaporarse de nuevo.
```

### 5 — Cuándo cae lluvia

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "tipos"]

enunciado: "¿Bajo qué condición de temperatura cae lluvia (agua líquida)?"
tipo: mc
opciones_explicitas:
  - "Cuando la temperatura se mantiene por encima de 0°C desde la nube hasta el suelo"
  - "Cuando la temperatura está por debajo de 0°C en todo el trayecto"
  - "La temperatura no influye en si cae lluvia o nieve"
respuesta: "Cuando la temperatura se mantiene por encima de 0°C desde la nube hasta el suelo"

explicacion: |
  Los cristales de hielo formados en la nube se derriten antes de llegar
  al suelo.
```

### 6 — Cuándo cae nieve

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "tipos"]

enunciado: "¿Bajo qué condición de temperatura cae nieve?"
tipo: mc
opciones_explicitas:
  - "Cuando la temperatura se mantiene por debajo de 0°C en todo el trayecto hasta el suelo"
  - "Cuando la temperatura está por encima de 0°C en todo el trayecto"
  - "Sólo cuando hay granizo al mismo tiempo"
respuesta: "Cuando la temperatura se mantiene por debajo de 0°C en todo el trayecto hasta el suelo"

explicacion: |
  El cristal de hielo no llega a derretirse en ningún punto del camino.
```

### 7 — Qué es la aguanieve

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "tipos"]

enunciado: "¿Qué es la aguanieve?"
tipo: mc
opciones_explicitas:
  - "Una mezcla de lluvia y nieve, cuando la temperatura está justo en el límite de 0°C en parte del trayecto"
  - "Otro nombre para el granizo"
  - "Nieve que cayó hace muchos días y se derritió"
respuesta: "Una mezcla de lluvia y nieve, cuando la temperatura está justo en el límite de 0°C en parte del trayecto"

explicacion: |
  El cristal ni termina de derretirse ni de mantenerse completamente
  sólido.
```

### 8 — Cómo se forma el granizo

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "avanzado"
  tags: ["precipitacion", "granizo"]

enunciado: "¿Cómo se forma el granizo dentro de una nube de desarrollo vertical muy intensa?"
tipo: mc
opciones_explicitas:
  - "Una gotita es arrastrada varias veces hacia arriba y abajo por corrientes fuertes, congelándose en capas sucesivas"
  - "Cae directo desde una nube estrato, sin ningún proceso previo"
  - "Se forma por la unión de dos gotas de lluvia comunes a nivel del suelo"
respuesta: "Una gotita es arrastrada varias veces hacia arriba y abajo por corrientes fuertes, congelándose en capas sucesivas"

explicacion: |
  Cae cuando pesa demasiado para que la corriente de aire la siga
  sosteniendo.
```

### 9 — Granizo y capas de hielo

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "avanzado"
  tags: ["precipitacion", "granizo"]

respuesta: verdadero
tipo: vf

enunciado: "El granizo se forma en capas sucesivas de hielo, cada vez que la gotita sube a la parte más fría de la nube."

explicacion: |
  Por eso una piedra de granizo grande, cortada al medio, muestra anillos
  como una cebolla.
```

### 10 — Nubes que no llueven

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "mecanismo"]

respuesta: verdadero
tipo: vf

enunciado: "Hay nubes, como los cúmulos chicos de buen tiempo o los cirros, que nunca producen precipitación."

explicacion: |
  Sus gotitas o cristales nunca crecen lo suficiente como para vencer la
  corriente de aire que las sostiene.
```

### 11 — Frente cálido: tipo de lluvia

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "frentes"]

enunciado: "¿Qué tipo de precipitación es típica de un frente cálido (nubes tipo estrato/nimboestrato)?"
tipo: mc
opciones_explicitas:
  - "Llovizna sostenida y suave, de gotas chicas y caída lenta"
  - "Lluvia intensa de corta duración"
  - "Granizo severo únicamente"
respuesta: "Llovizna sostenida y suave, de gotas chicas y caída lenta"

explicacion: |
  El ascenso lento y uniforme del aire genera nubes en capas, con
  precipitación pareja.
```

### 12 — Frente frío: tipo de lluvia

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "frentes"]

enunciado: "¿Qué tipo de precipitación es típica de un frente frío muy activo (cumulonimbos)?"
tipo: mc
opciones_explicitas:
  - "Lluvia intensa de corta duración, y en los casos más fuertes, granizo"
  - "Llovizna suave durante varios días seguidos"
  - "Nunca produce ningún tipo de precipitación"
respuesta: "Lluvia intensa de corta duración, y en los casos más fuertes, granizo"

explicacion: |
  Las corrientes internas fuertes de estas nubes son justamente lo que
  arma las capas de hielo del granizo.
```

### 13 — Unidad para medir la precipitación

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "basico"
  tags: ["precipitacion", "medicion"]

enunciado: "¿En qué unidad se mide la cantidad de lluvia caída?"
tipo: mc
opciones_explicitas:
  - "Milímetros (mm)"
  - "Kilogramos (kg)"
  - "Grados Celsius (°C)"
respuesta: "Milímetros (mm)"

explicacion: |
  1 mm de lluvia equivale a 1 litro de agua por cada metro cuadrado.
```

### 14 — Equivalencia de 1 mm de lluvia

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "medicion"]

respuesta: verdadero
tipo: vf

enunciado: "1 mm de lluvia equivale a 1 litro de agua caída por cada metro cuadrado de superficie."

explicacion: |
  Es la definición práctica que usan los pluviómetros.
```

### 15 — Calcular litros totales de lluvia

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "calculo"]

variables:
  mm_llovidos: random(5, 60)
  area_m2: random(10, 200)

respuesta: mm_llovidos * area_m2
tipo: input
tolerancia_abs: 0

enunciado: "Cayeron {mm_llovidos} mm de lluvia sobre un terreno de {area_m2} m². ¿Cuántos litros de agua cayeron en total?"

pasos:
  - "Litros = mm × área (m²) = {mm_llovidos} × {area_m2}"

explicacion: |
  Cada mm de lluvia equivale a 1 litro por m², así que se multiplica
  directo.
```

### 16 — Comparar dos precipitaciones

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "calculo"]

variables:
  mm_ciudad_a: random(10, 40)
  mm_ciudad_b: random(41, 90)

respuesta: mm_ciudad_b - mm_ciudad_a
tipo: input
tolerancia_abs: 0

enunciado: "La ciudad A registró {mm_ciudad_a} mm de lluvia y la ciudad B registró {mm_ciudad_b} mm. ¿Cuántos mm más llovió en la ciudad B?"

explicacion: |
  Se resta la menor cantidad de la mayor.
```

### 17 — Equivalencia nieve-agua

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "avanzado"
  tags: ["precipitacion", "medicion"]

respuesta: verdadero
tipo: vf

enunciado: "1 cm de nieve fresca equivale aproximadamente a 1 mm de agua líquida, aunque esto varía según qué tan compacta caiga la nieve."

explicacion: |
  Es una equivalencia aproximada, no exacta, porque la nieve puede caer
  más o menos compacta.
```

### 18 — Completar: qué produce el granizo

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "basico"
  tags: ["precipitacion", "vocabulario"]

tipo: completar
respuestas_validas:
  - "cumulonimbos"
  - "cumulonimbo"

enunciado: "El granizo se forma en nubes de desarrollo vertical muy intensas, llamadas ____."

explicacion: |
  Son cúmulos que crecieron mucho y produjeron tormenta.
```

### 19 — Ordenar de menos a más intensa

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "intermedio"
  tags: ["precipitacion", "tipos"]

tipo: ordenar
opciones_explicitas:
  - "llovizna de un frente cálido"
  - "lluvia de un cúmulo mediano"
  - "granizo de un cumulonimbo intenso"
respuesta_orden: ["llovizna de un frente cálido", "lluvia de un cúmulo mediano", "granizo de un cumulonimbo intenso"]
enunciado: "Ordená estos tipos de precipitación de menor a mayor intensidad típica."

explicacion: |
  A mayor desarrollo vertical de la nube, más intensa (y potencialmente
  más severa) la precipitación.
```

### 20 — Por qué depende del tipo de nube

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "avanzado"
  tags: ["precipitacion", "sintesis"]

respuesta: verdadero
tipo: vf

enunciado: "El tipo de precipitación que cae depende directamente del tipo de nube (su desarrollo vertical) y de la temperatura del aire debajo de ella."

explicacion: |
  Es la conexión con el módulo de Formación de nubes: el tipo de nube ya
  formado determina qué precipitación cae.
```

### 21 — Verificar un cálculo de litros de lluvia (con error a veces)

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "avanzado"
  tags: ["precipitacion", "calculo"]

variables:
  mm: random(5, 40)
  area: random(10, 100)
  correcto: mm * area
  error: uno_de([0, 0, 0, 50, -50])
  mostrado: correcto + error

respuesta: (abs(mostrado - correcto) < 1)
tipo: vf

enunciado: "Cayeron {mm} mm de lluvia sobre {area} m². Según un cálculo, cayeron {mostrado} litros en total. ¿Es correcto ese resultado?"

explicacion: |
  Litros = mm × área = {correcto}.
```

### 22 — Precipitación (cierre)

```
metadata:
  materia: "fisica"
  tema: "precipitacion"
  nivel: "avanzado"
  tags: ["precipitacion", "sintesis"]

enunciado: "¿Cuál resume mejor por qué cae la precipitación?"
tipo: mc
opciones_explicitas:
  - "Las gotitas o cristales de una nube crecen al chocar entre sí hasta que su peso vence a la corriente de aire que los sostiene"
  - "Toda nube, sin excepción, llueve apenas se forma"
  - "La precipitación no tiene relación con el tamaño de las gotas dentro de la nube"
respuesta: "Las gotitas o cristales de una nube crecen al chocar entre sí hasta que su peso vence a la corriente de aire que los sostiene"

explicacion: |
  Es el mecanismo físico central detrás de cualquier tipo de
  precipitación.
```
