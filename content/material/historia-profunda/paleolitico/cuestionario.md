# Historia Profunda — Paleolitico (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El concepto de Paleolítico

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["prehistoria", "etapas"]

respuesta: "Paleolítico"
tipo: completar
respuestas_validas:
  - "Paleolítico"

enunciado: "La etapa más larga de la prehistoria humana, caracterizada por el uso de herramientas de piedra tallada, se denomina ___."

explicacion: |
  El Paleolítico (del griego 'paleo', antiguo y 'lithos', piedra) es la primera etapa de la historia de la humanidad.
```

### 2 — Estilo de vida y economía

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["economia", "nomadismo"]

respuesta: "nómadas"
tipo: mc
opciones_explicitas: ["nómadas", "sedentarios", "urbanos"]

enunciado: "Durante el Paleolítico, las sociedades humanas basaban su economía en la caza y la recolección, lo que las obligaba a ser ___."

explicacion: |
  Al no producir su propio alimento (agricultura), los grupos humanos debían desplazarse constantemente en busca de recursos, adoptando un estilo de vida nómada.
```

### 3 — Evolución de la tecnología lítica

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["tecnologia", "piedra"]

respuesta: "piedra tallada"
tipo: completar
respuestas_validas:
  - "piedra tallada"

enunciado: "A diferencia del Neolítico donde la piedra se pulía, en el Paleolítico la principal técnica de fabricación consistía en la ___."

explicacion: |
  La tecnología paleolítica se define por la talla de la piedra (percusión) para crear bordes cortantes en herramientas como bifaces o lascas.
```

### 4 — Secuencia de la evolución humana

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["evolucion", "orden"]

respuesta_orden: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]
tipo: ordenar
opciones_explicitas: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]

enunciado: "Ordene cronológicamente los siguientes homínidos, desde el más antiguo al más reciente:"

explicacion: |
  La evolución humana no fue lineal, pero este orden representa una secuencia temporal de aparición de los géneros y especies principales.
```

### 5 — El descubrimiento del fuego

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "avanzado"
  tags: ["cultura", "fuego"]

tipo: mc
opciones_explicitas: ["socialización", "cocción", "iluminación"]
respuesta: "cocción"

enunciado: "El control del fuego fue un hito crucial. Además de la luz y el calor, su uso permitió principalmente la ___."

explicacion: |
  El control del fuego permitió cocinar los alimentos, lo que facilitó la digestión y la absorción de nutrientes, favoreciendo el desarrollo cerebral.
```

### 6 — El impacto del fuego

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["fuego", "evolucion", "supervivencia"]

respuesta: "cocinar"
tipo: completar
respuestas_validas:
  - "cocinar"
  - "la cocción"

enunciado: "El control del fuego permitió a los homínidos ___ los alimentos, lo que facilitó la digestión y aumentó la ingesta calórica."

explicacion: |
  La cocción de alimentos permitió que la energía fuera más fácil de absorber, favoreciendo el desarrollo cerebral.
```

### 7 — Funciones del fuego

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

### 8 — Beneficios del fuego

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["fuego", "adaptacion"]

variables:
  beneficio_idx: uno_de([0, 1, 2])
  escenario: [["iluminar", "permitió extender las horas de actividad social y exploración en cuevas"], ["calentar", "permitió la migración hacia climas más fríos"], ["cocinar", "permitió el desarrollo de mandíbulas más pequeñas y cerebros más grandes"]]

tipo: mc
opciones_explicitas: ["permitió extender las horas de actividad social y exploración en cuevas", "permitió la migración hacia climas más fríos", "permitió el desarrollo de mandíbulas más pequeñas y cerebros más grandes"]
respuesta: escenario[beneficio_idx][1]

enunciado: "El control del fuego sirvió, entre otras cosas, para {escenario[beneficio_idx][0]}. ¿Cuál fue la consecuencia principal de este uso?"

explicacion: |
  {escenario[beneficio_idx][1]}
```

### 9 — El fuego y la vida social

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["fuego", "social", "comunicacion"]

respuesta: "social"
tipo: completar
respuestas_validas:
  - "social"
  - "comunitaria"

enunciado: "El uso del fuego alrededor de la hoguera fomentó la cohesión ___ de los grupos de homínidos."

explicacion: |
  La hoguera se convirtió en el centro de la comunicación y el intercambio de información.
```

### 10 — Secuencia de ventajas

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "avanzado"
  tags: ["fuego", "causa_efecto"]

opciones_explicitas: ["Fuego", "Cocción", "Mejor nutrición", "Cerebro más grande"]
respuesta_orden: ["Fuego", "Cocción", "Mejor nutrición", "Cerebro más grande"]
tipo: ordenar

enunciado: "Ordena la secuencia lógica de causa y efecto iniciada por el control del fuego:"

explicacion: |
  El control del fuego permitió la cocción, lo que mejoró la nutrición y, a largo plazo, el desarrollo cerebral.
```

### 11 — El nomadismo y el alimento

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["nomadismo", "supervivencia"]

variables:
  escenario: uno_de([["el movimiento de las manadas de renos", "el movimiento de las manadas de renos"], ["la maduración de frutos silvestres", "la maduración de frutos silvestres"], ["el ciclo de vida de los grandes mamíferos", "el ciclo de vida de los grandes mamíferos"]])

enunciado: "En el Paleolítico, los grupos humanos se desplazaban siguiendo {escenario[0]} para asegurar su subsistencia."

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["el movimiento de las manadas de renos", "la maduración de frutos silvestres", "el ciclo de vida de los grandes mamíferos"]

explicacion: |
  El nomadismo era una estrategia de supervivencia basada en el seguimiento de los ciclos naturales de los recursos disponibles.
```

### 12 — Asentamientos en el Paleolítico

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["asentamientos", "nomadismo"]

enunciado: "A diferencia de los grupos nómadas, los asentamientos fijos no existían en el Paleolítico; los grupos humanos se movían constantemente de un lugar a otro."

respuesta: "no existían"
tipo: completar
respuestas_validas:
  - "no existían"
  - "no existían"
  - "no existían"

explicacion: |
  La falta de agricultura obligaba a los grupos humanos a desplazarse constantemente para no agotar los recursos de una zona.
```

### 13 — Estrategias de subsistencia

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["recoleccion", "caza"]

enunciado: "La economía del Paleolítico se basaba principalmente en la caza de animales y la recolección de plantas. Ordena estas actividades:"

respuesta_orden: ["la caza", "la recolección"]
tipo: ordenar
opciones_explicitas: ["la caza", "la recolección"]

explicacion: |
  La subsistencia dependía de una combinación de actividades de caza y recolección para garantizar una dieta variada.
```

### 14 — El factor estacional

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["estacionalidad", "clima"]

enunciado: "Los cambios estacionales asociados al invierno afectaban la disponibilidad de alimento, obligando a los grupos a migrar hacia zonas más favorables debido al ___."

respuesta: "el frío"
tipo: mc
opciones_explicitas: ["el frío", "el calor"]

explicacion: |
  Las variaciones climáticas estacionales determinaban el movimiento de los animales y el crecimiento de las plantas, dictando la ruta de los nómadas.
```

### 15 — Estructura social y movilidad

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "avanzado"
  tags: ["sociedad", "movilidad"]

variables:
  grupo: uno_de([["pequeños grupos familiares", "pequeños grupos familiares"], ["grandes tribus sedentarias", "grandes tribus sedentarias"]])

enunciado: "La vida nómada era compatible con la organización en ___ debido a la necesidad de movilidad constante."

respuesta: "pequeños grupos familiares"
tipo: completar
respuestas_validas:
  - "pequeños grupos familiares"
  - "pequeños grupos familiares"

explicacion: |
  Los grupos eran pequeños para facilitar el desplazamiento rápido y evitar el agotamiento de los recursos en un mismo territorio.
```

### 16 — El origen de la industria lítica

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["tecnologia", "piedra"]

respuesta: "Olduvayense"
tipo: completar
respuestas_validas:
  - "Olduvayense"

enunciado: "La industria lítica más antigua conocida, caracterizada por el uso de percutores para obtener filos rudimentarios, se denomina industria ___."

explicacion: |
  La industria Olduvayense (o Oldowaense) representa las primeras formas de tecnología lítica, donde los homínidos golpeaban una piedra contra otra para crear bordes cortantes.
```

### 17 — Funcionalidad de las herramientas

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

### 18 — Evolución tecnológica

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["evolucion", "tecnologia"]

respuesta: "Bifaces"
tipo: mc
opciones_explicitas: ["Choppers", "Bifaces", "Láminas"]

enunciado: "En la cultura Acheulense, la herramienta característica que presenta una forma simétrica y ha sido trabajada por ambas caras se conoce como ___."

explicacion: |
  El bifaz es la herramienta emblemática del Paleolítico inferior, mostrando una planificación cognitiva superior al simple percutaje de lascas.
```

### 19 — Secuencia de fabricación

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "avanzado"
  tags: ["proceso", "fabricacion"]

opciones_explicitas: ["Selección de materia prima", "Percutaje/Talla", "Afilado/Retoque final"]
respuesta_orden: ["Selección de materia prima", "Percutaje/Talla", "Afilado/Retoque final"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos que un homínido debía seguir para fabricar una herramienta de piedra tallada:"

explicacion: |
  La fabricación lítica requiere primero identificar la piedra adecuada (sílex, cuarcita), luego darle forma mediante golpes y finalmente refinar el filo.
```

### 20 — El impacto del filo

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["impacto", "alimentacion"]

respuesta: 55
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si un grupo de homínidos utilizaba una técnica de percutaje que permitía obtener un 10% más de filo útil por cada kilogramo de piedra, y tenían 50kg de sílex, ¿cuántos kg de material efectivo de corte obtendrían en total?"

pasos:
  - "Calcular el 10% de 50kg"
  - "Sumar el material base y el excedente de filo"

explicacion: |
  El cálculo es: 50 kg + (50 kg * 0.10) = 55 kg de material efectivo de corte.
```

### 21 — Identificación de tecnología

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["tecnologia", "herramientas"]

variables:
  idx: uno_de([0,1,2])
  datos: [["hacha de mano de piedra tallada", "bifaz"], ["lanzas de piedra", "punta de proyectil"], ["raspadores de piedra tallada", "raspador"]]

enunciado: "Durante el Paleolítico, los homínidos utilizaban diversas herramientas de piedra. Si encontramos un objeto con la forma de un {datos[idx][0]}, estamos ante un/a ___."

respuestas_validas:
  - "bifaz"
  - "punta de proyectil"
  - "raspador"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El {datos[idx][0]} es una herramienta característica del Paleolítico, fabricada mediante la técnica de percusión para obtener un filo.
```

### 22 — Modo de vida

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["subsistencia", "nómada"]

enunciado: "La principal actividad económica en el Paleolítico era la recolección de frutos y la caza, lo que obligaba a los grupos humanos a tener un estilo de vida ___."

opciones_explicitas: ["nómada", "sedentario"]
respuesta: "nómada"
tipo: mc

explicacion: |
  Al depender de los ciclos naturales y la migración de animales, los grupos debían desplazarse constantemente, siendo nómadas.
```

### 23 — Arte Rupestre

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "intermedio"
  tags: ["arte", "rupestre"]

enunciado: "El estilo artístico característico del Paleolítico, que consistía en pinturas en el interior de cuevas, se denomina ___."

opciones_explicitas: ["arte rupestre", "arte clásico", "arte romano"]
respuesta: "arte rupestre"
tipo: mc

explicacion: |
  Las pinturas en el interior de cuevas son la expresión máxima del arte rupestre, utilizada para representar animales y escenas de caza.
```

### 24 — Evolución de herramientas

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
respuesta_orden: ["Paleolítico", "Neolítico", "Edad de los Metales"]
tipo: ordenar

explicacion: |
  La secuencia correcta es: Paleolítico (piedra tallada), Neolítico (piedra pulida) y Edad de los Metales.
```

### 25 — El control del fuego

```
metadata:
  materia: "historia_profunda"
  tema: "paleolitico"
  nivel: "basico"
  tags: ["fuego", "supervivencia"]

enunciado: "El dominio del fuego fue un hito fundamental en el Paleolítico que proporcionó ___."

respuestas_validas:
  - "protección y calor"
respuesta: "protección y calor"
tipo: completar

explicacion: |
  El dominio del fuego permitió a los homínidos cocinar alimentos, calentarse y ahuyentar depredadores.
```
