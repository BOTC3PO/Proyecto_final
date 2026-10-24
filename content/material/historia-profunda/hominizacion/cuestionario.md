# Historia Profunda — Hominizacion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El primer gran cambio

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["evolucion", "bipedismo"]

respuesta: "bipedestación"
tipo: completar
respuestas_validas:
  - "bipedestación"
  - "bipedismo"

enunciado: "El cambio anatómico fundamental que permitió a los primeros homínidos liberar las manos para el transporte de alimentos y el uso de herramientas fue la ___."

explicacion: |
  La bipedestación (caminar sobre dos extremidades) fue el rasgo clave que definió la transición hacia los homínidos, permitiendo una mayor eficiencia energética y la liberación de las manos.
```

### 2 — Cronología de la evolución

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["cronologia", "especies"]

variables:
  escenario: uno_de([["Australopithecus", "hace 4 millones de años"], ["Homo habilis", "hace 2 millones de años"], ["Homo sapiens", "hace 300.000 años"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Australopithecus", "Homo habilis", "Homo sapiens", "Homo erectus"]

enunciado: "De acuerdo al escenario seleccionado, ¿qué especie vivió aproximadamente {escenario[1]}?"

explicacion: |
  El escenario seleccionado fue {escenario[0]}, que se sitúa cronológicamente en {escenario[1]}.
```

### 3 — Capacidad craneal y cerebro

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "avanzado"
  tags: ["cerebro", "antropometria"]

variables:
  datos: [["Australopithecus", 450], ["Homo habilis", 650], ["Homo erectus", 900], ["Homo sapiens", 1400]]
  idx: uno_de([0, 1, 2, 3])

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "El {datos[idx][0]} tenía un volumen craneal promedio de aproximadamente ___ cc."

pasos:
  - "Identificar la especie según el escenario."
  - "Asociar el volumen craneal promedio característico de dicha especie."

explicacion: |
  El volumen craneal es un indicador clave de la encefalización en el proceso de hominización. Para {datos[idx][0]}, el valor es de {datos[idx][1]} cc.
```

### 4 — Tecnología lítica

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["herramientas", "tecnologia"]

respuesta: "Homo habilis"
tipo: mc
opciones_explicitas: ["Australopithecus", "Homo habilis", "Homo sapiens"]

enunciado: "¿Qué especie es reconocida tradicionalmente por ser la primera en fabricar sistemáticamente herramientas de piedra (industria Olduvayense)?"

explicacion: |
  Aunque hubo usos previos, el género Homo (específicamente Homo habilis) marca el inicio de la cultura material mediante la fabricación de herramientas de piedra tallada.
```

### 5 — Secuencia evolutiva

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "avanzado"
  tags: ["orden", "lineaje"]

respuesta_orden: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]
tipo: ordenar
opciones_explicitas: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]

enunciado: "Ordena cronológicamente, de la especie más antigua a la más reciente, los siguientes homínidos:"

explicacion: |
  La secuencia correcta refleja el aumento progresivo de la capacidad craneal y la complejidad tecnológica a lo largo de millones de años.
```

### 6 — El origen de la bipedestación

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["evolucion", "bipedismo"]

tipo: completar
enunciado: "Uno de los primeros rasgos evolutivos que distinguieron a los homínidos de otros primates, permitiendo la liberación de las manos, fue la ___."
respuesta: "bipedestación"
explicacion: |
  La bipedestación ocurrió mucho antes del aumento significativo del tamaño cerebral. Al caminar erguidos, los homínidos liberaron sus extremidades superiores para transportar alimentos y, eventualmente, fabricar herramientas.
```

### 7 — Secuencia de la evolución homínida

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["secuencia", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Bipedestación", "Uso de herramientas", "Aumento de la capacidad craneal"]

enunciado: "Ordena cronológicamente los hitos evolutivos según el consenso actual de la hominización:"

explicacion: |
  La evolución no fue lineal, pero la bipedestación precedió al desarrollo de herramientas complejas y al gran crecimiento cerebral (encefalización).
respuesta_orden: ["Bipedestación", "Uso de herramientas", "Aumento de la capacidad craneal"]
```

### 8 — Consecuencia de la bipedestación

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["herramientas", "manos"]

tipo: completar
respuestas_validas:
  - "uso de herramientas"

enunciado: "La liberación de las manos gracias a la bipedestación facilitó el ___."

explicacion: |
  Al no tener que usar las manos para la locomoción, los homínidos pudieron manipular objetos, lo que llevó al desarrollo de la tecnología lítica.
```

### 9 — Relación rasgos y cerebro

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "avanzado"
  tags: ["cerebro", "bipedismo"]

tipo: mc
opciones_explicitas: ["antes", "después"]

enunciado: "De acuerdo a la evidencia paleoantropológica, la bipedestación ocurrió ___ del gran aumento de la capacidad craneal."

respuesta: "antes"

explicacion: |
  La bipedestación es un rasgo basal de los homínidos. El cerebro creció significativamente mucho después, impulsado en parte por la dieta obtenida gracias a la tecnología de herramientas.
```

### 10 — El cambio anatómico

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["anatomia", "evolucion"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si un homínido camina erguido, sus manos están libres para la manipulación. ¿Cuál es el término técnico para este modo de locomoción? (Escribe la palabra en minúsculas)"

respuesta: "bipedismo"

explicacion: |
  El bipedismo es la capacidad de desplazarse sobre dos extremidades posteriores, un cambio fundamental en la anatomía homínida.
```

### 11 — El primer ancestro

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["evolucion", "australopithecus"]

respuesta: "Australopithecus"
tipo: completar
respuestas_validas:
  - "Australopithecus"

enunciado: "El género ___ es considerado uno de los primeros homininos en la línea evolutiva, caracterizado por la bipedestación."

explicacion: |
  El Australopithecus vivió hace aproximadamente entre 4 y 2 millones de años y fue un paso clave hacia la bipedestación definitiva.
```

### 12 — La revolución de las herramientas

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["habilis", "tecnologia"]

variables:
  datos: [["Homo habilis", "fabricación de herramientas de piedra"], ["Homo erectus", "control del fuego"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["fabricación de herramientas de piedra", "control del fuego", "dominio del lenguaje complejo", "agricultura"]

enunciado: "Se asocia principalmente a la especie {datos[idx][0]} la {datos[idx][1]}."

explicacion: |
  El Homo habilis es reconocido por su capacidad para fabricar herramientas de piedra (cultura Olduvayense).
```

### 13 — La gran migración

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["erectus", "migracion"]

respuesta: "Homo erectus"
tipo: mc
opciones_explicitas: ["Homo habilis", "Homo erectus", "Homo sapiens", "Australopithecus"]

enunciado: "¿Qué especie fue la primera en realizar migraciones significativas fuera de África hacia Eurasia?"

explicacion: |
  Homo erectus fue el primer hominino con una morfología corporal adaptada para caminar largas distancias y colonizar nuevos continentes.
```

### 14 — Secuencia evolutiva

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["orden", "linea_evolutiva"]

respuesta_orden: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]
tipo: ordenar
opciones_explicitas: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]

enunciado: "Ordene cronológicamente las siguientes especies de la línea evolutiva humana, de la más antigua a la más reciente:"

explicacion: |
  La secuencia correcta sigue el aumento de la capacidad craneal y la complejidad tecnológica a lo largo de millones de años.
```

### 15 — El humano moderno

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["sapiens", "modernidad"]

respuesta: 300000
tipo: completar
tolerancia_abs: 50000

enunciado: "Se estima que el Homo sapiens apareció en África hace aproximadamente ___ años (expresado en número entero)."

explicacion: |
  El Homo sapiens moderno tiene una antigüedad estimada de unos 300,000 años.
```

### 16 — Supervivencia del Homo sapiens

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["evolucion", "especies"]

respuesta: "Homo sapiens"
tipo: completar
respuestas_validas:
  - "Homo sapiens"
  - "sapiens"

enunciado: "De todas las especies del género Homo que existieron en el pasado, la única que sobrevive hoy en día es el ___."

explicacion: |
  A pesar de la coexistencia con otras especies como los Neandertales, el Homo sapiens es la única especie humana actual.
```

### 17 — Coexistencia de especies

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["coexistencia", "neandertal"]

variables:
  escenario: uno_de([["Neandertales", "Homo sapiens"], ["Denisovanos", "Homo sapiens"]])
  especie_extinta: escenario[0]
  especie_actual: escenario[1]

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Durante gran parte de su historia, el {especie_actual} convivió en el mismo territorio y tiempo con otras especies humanas como los {especie_extinta}."

explicacion: |
  La evidencia arqueológica y genética confirma que distintas especies humanas compartieron el planeta antes de la extinción de las demás.
```

### 18 — El destino de los Neandertales

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["extincion", "neandertales"]

respuesta: "extinguirse"
tipo: completar
respuestas_validas:
  - "extinguirse"
  - "extinción"

enunciado: "A diferencia de nuestra especie, los Neandertales no sobrevivieron hasta la actualidad; ellos llegaron a ___ hace miles de años."

explicacion: |
  La extinción de los Neandertales es un proceso complejo que ocurrió durante el Pleistoceno tardío.
```

### 19 — Relación entre especies

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "avanzado"
  tags: ["genetica", "evidencia"]

variables:
  caso: uno_de([["Neandertales", "Denisovanos"]])
  especie_mencionada: caso[0]

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "La existencia de ADN de {especie_mencionada} en poblaciones humanas actuales demuestra que hubo contacto y convivencia con otras especies humanas."

explicacion: |
  El análisis del genoma humano ha revelado rastros genéticos de especies con las que convivieron, como Neandertales y Denisovanos.
```

### 20 — Cronología de la hominización

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["secuencia", "evolucion"]

respuesta_orden: ["Homo habilis", "Homo erectus", "Homo sapiens"]
tipo: ordenar
opciones_explicitas: ["Homo habilis", "Homo erectus", "Homo sapiens"]

enunciado: "Ordena cronológicamente estas especies humanas desde la más antigua a la más reciente:"

explicacion: |
  La evolución humana presenta una secuencia de especies donde el Homo sapiens es el representante más reciente y el único actual.
```

### 21 — El origen del bipedismo

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "basico"
  tags: ["evolucion", "hominidos"]

enunciado: "Se analiza un fósil que presenta una pelvis ancha y adaptaciones para la marcha vertical. Se trata de un Australopithecus afarensis cuyo rasgo distintivo es el ___."

respuesta: "bipedismo temprano"
tipo: mc
opciones_explicitas: ["bipedismo temprano", "uso de herramientas de piedra", "control del fuego", "desarrollo del lenguaje"]

explicacion: |
  El Australopithecus afarensis es reconocido principalmente por su capacidad de caminar erguido, lo cual es un paso clave en la hominización.
```

### 22 — La revolución tecnológica

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["tecnologia", "hominidos"]

variables:
  datos: [["Homo habilis", "industria Olduvayense"], ["Homo erectus", "industria Acheulense"], ["Homo neanderthalensis", "industria Musteriense"]]
  idx: uno_de([0, 1, 2])

enunciado: "Un arqueólogo encuentra restos de la industria {datos[idx][1]} asociados a los restos de {datos[idx][0]}."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "industria Olduvayense"
  - "industria Acheulense"
  - "industria Musteriense"

explicacion: |
  {datos[idx][0]} es asociado con la creación de las primeras herramientas de piedra tallada conocidas como {datos[idx][1]}.
```

### 23 — Migraciones y fuego

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "intermedio"
  tags: ["migracion", "fuego"]

variables:
  datos: [["Homo erectus", "dominio del fuego"], ["Homo sapiens", "pensamiento simbólico"]]
  idx: uno_de([0, 1])

enunciado: "El hito evolutivo que permitió a {datos[idx][0]} colonizar nuevos entornos fue el {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["dominio del fuego", "pensamiento simbólico", "creación de arte rupestre"]

explicacion: |
  El control del fuego permitió a {datos[idx][0]} cocinar alimentos y protegerse, facilitando su expansión fuera de África.
```

### 24 — Secuencia de evolución

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "avanzado"
  tags: ["secuencia", "hominidos"]

variables:
  orden: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]

enunciado: "Ordena cronológicamente las especies de homínidos desde la más antigua hasta la más reciente."

respuesta_orden: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]
tipo: ordenar
opciones_explicitas: ["Australopithecus", "Homo habilis", "Homo erectus", "Homo sapiens"]

explicacion: |
  La línea evolutiva muestra una tendencia hacia el aumento de la capacidad craneal y la complejidad tecnológica a través de estas especies.
```

### 25 — Pensamiento simbólico

```
metadata:
  materia: "historia_profunda"
  tema: "hominizacion"
  nivel: "avanzado"
  tags: ["cultura", "simbolismo"]

variables:
  datos: [["Homo neanderthalensis", "enterramientos rituales"], ["Homo sapiens", "arte rupestre complejo"]]
  idx: uno_de([0, 1])

enunciado: "El hallazgo de restos con evidencias de ___ es característico de {datos[idx][0]}."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

explicacion: |
  La presencia de ___ sugiere una estructura de pensamiento espiritual o ritual en {datos[idx][0]}.
```
