# Ed. Física — Alfabetización corporal: grupos musculares, sistemas energéticos, mitos (cuestionario, 25 preguntas VBLang)

> Tema: `EF5a/b/c`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: varias preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`); una
> pregunta con `tabla:` declarada fuera del bloque `variables:`
> (posición inválida) y un blank sin interpolar dentro de `pasos:` —
> reescrita moviendo la tabla a `variables:` y simplificando el
> enunciado; dos preguntas con `respuesta: "___"` (el placeholder
> literal, no la respuesta real) — corregidas con la palabra correcta;
> `tipo: vf` con `opciones_explicitas: ["Verdadero","Falso"]`
> innecesario — normalizado.

---

### 1 — El bíceps y el tríceps

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["musculos", "brazos"]

respuesta: "tríceps"
tipo: completar
respuestas_validas:
  - "tríceps"
  - "triceps"

enunciado: "Cuando realizamos un movimiento de flexión de codo (acercar la mano al hombro), el músculo principal que se contrae es el bíceps. Por el contrario, la acción de extensión del codo es realizada por el ___."

explicacion: |
  El bíceps es el flexor del brazo, mientras que el tríceps es el extensor, permitiendo estirar el brazo.
```

### 2 — El motor de la marcha

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["musculos", "piernas"]

respuesta: "cuádriceps"
tipo: completar
respuestas_validas:
  - "cuádriceps"
  - "cuadriceps"

enunciado: "El músculo situado en la parte anterior (delantera) del muslo es el ___."

explicacion: |
  El cuádriceps es el encargado de la extensión de la rodilla y la flexión de la cadera.
```

### 3 — Estabilidad del núcleo

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["musculos", "tronco"]

respuesta: "abdominales"
tipo: completar
respuestas_validas:
  - "abdominales"

enunciado: "Los músculos que se encuentran en la parte anterior del tronco y cuya función principal es la flexión de la columna vertebral y la estabilización del núcleo son los ___."

explicacion: |
  Los abdominales son fundamentales para la postura y la protección de los órganos internos.
```

### 4 — La cadena posterior

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["musculos", "piernas"]

variables:
  idx: uno_de([0, 1])
  tabla: [["isquiotibiales", "flexión de rodilla"], ["glúteos", "extensión de cadera"]]

respuesta: tabla[idx][1]
tipo: completar
respuestas_validas:
  - "flexión de rodilla"
  - "extensión de cadera"

enunciado: "El músculo {tabla[idx][0]}, en la parte posterior de la pierna, tiene como acción principal la ___."

explicacion: |
  Los isquiotibiales permiten flexionar la rodilla, mientras que los glúteos permiten la extensión de la cadera.
```

### 5 — El movimiento de la espalda

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["musculos", "espalda"]

respuesta: "dorsales"
tipo: completar
respuestas_validas:
  - "dorsales"

enunciado: "El músculo de la espalda que permite realizar la extensión del brazo hacia atrás y la aducción del hombro es el músculo ___."

explicacion: |
  Los dorsales (latissimus dorsi) son músculos grandes que permiten movimientos de tracción y extensión del brazo.
```

### 6 — Esfuerzo explosivo

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["sistemas_energeticos", "fosfagenos"]

tipo: mc
opciones_explicitas: ["Sistema Oxidativo", "Sistema Glucolítico", "Sistema de los Fosfágenos (ATP-PC)"]
respuesta: "Sistema de los Fosfágenos (ATP-PC)"

enunciado: "Un atleta realiza un sprint de 50 metros en máxima intensidad durante 6 segundos. ¿Qué sistema energético es el predominante en este esfuerzo corto y explosivo?"

explicacion: |
  Para esfuerzos de muy alta intensidad y duración muy breve (menos de 10 segundos), el cuerpo utiliza el sistema de los fosfágenos (ATP-PC), que proporciona energía inmediata pero de reserva limitada.
```

### 7 — Fatiga y ácido láctico

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["glucolisis", "acido_lactico"]

tipo: vf
respuesta: verdadero

enunciado: "Durante un esfuerzo de intensidad media-alta que dura entre 30 y 90 segundos (como una carrera de 400 metros), la acumulación de subproductos metabólicos como el lactato está asociada a la sensación de fatiga muscular."

explicacion: |
  El sistema glucolítico anaeróbico descompone la glucosa rápidamente sin presencia de oxígeno, produciendo lactato como subproducto, lo cual se relaciona con la acidosis muscular en esfuerzos de duración media.
```

### 8 — Resistencia prolongada

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["aerobico", "resistencia"]

tipo: mc
opciones_explicitas: ["Sistema de los Fosfágenos", "Sistema Glucolítico", "Sistema Oxidativo (Aeróbico)"]
respuesta: "Sistema Oxidativo (Aeróbico)"

enunciado: "En una maratón de larga distancia, donde la intensidad es moderada y la duración es prolongada, el cuerpo utiliza principalmente el ___ para obtener energía a partir de carbohidratos y grasas."

explicacion: |
  El sistema oxidativo o aeróbico es el más eficiente para esfuerzos de larga duración, ya que utiliza oxígeno para metabolizar sustratos de manera continua.
```

### 9 — Intensidad y duración

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["sistemas_energeticos"]

tipo: vf
respuesta: falso

enunciado: "El sistema de los fosfágenos es el sistema principal para mantener el ritmo de una sesión de trote suave de 45 minutos."

explicacion: |
  Falso. El sistema de los fosfágenos es para esfuerzos explosivos de pocos segundos. Para un trote de 45 minutos, el sistema predominante es el oxidativo (aeróbico).
```

### 10 — Clasificación de sistemas

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "avanzado"
  tags: ["sistemas_energeticos", "metabolismo"]

tipo: mc
opciones_explicitas: ["Anaeróbico Aláctico", "Anaeróbico Láctico", "Aeróbico"]
respuesta: "Anaeróbico Láctico"

enunciado: "Si un estudiante realiza una serie de abdominales intensas durante 40 segundos sintiendo una quemazón en el abdomen, ¿qué vía metabólica está predominando?"

explicacion: |
  Al ser un esfuerzo de intensidad alta con duración media (40 segundos), el cuerpo recurre a la glucólisis anaeróbica (sistema láctico) para obtener energía rápida sin oxígeno.
```

### 11 — El mito de la grasa y el músculo

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["mitos", "entrenamiento", "composicion_corporal"]

respuesta: "músculo"
tipo: completar
respuestas_validas:
  - "músculo"
  - "musculo"

enunciado: "Es un error fisiológico pensar que el cuerpo puede transformar la grasa directamente en ___."

explicacion: |
  La grasa y el músculo son tejidos distintos. La grasa se oxida para obtener energía, mientras que el músculo se construye mediante la síntesis de proteínas. No hay transformación de uno en otro.
```

### 12 — Reducción localizada

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["mitos", "entrenamiento", "reduccion_localizada"]

respuesta: falso
tipo: vf

enunciado: "Es posible reducir la grasa de una zona específica del cuerpo (por ejemplo, sólo la cintura) haciendo ejercicios repetitivos de esa zona."

explicacion: |
  Falso. La pérdida de grasa es un proceso sistémico. El cuerpo decide de dónde oxidar grasa según la genética y el déficit calórico, no según el músculo que se esté trabajando.
```

### 13 — La falsa equivalencia del dolor

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["mitos", "entrenamiento", "dolor"]

respuesta: falso
tipo: vf

enunciado: "La frase 'sin dolor no hay progreso' es una verdad científica absoluta en el entrenamiento de fuerza."

explicacion: |
  Si bien el estímulo debe ser desafiante, el dolor agudo o punzante suele ser señal de lesión. El progreso se mide por la adaptación y mejora del rendimiento, no por la presencia de dolor muscular extremo.
```

### 14 — El proceso de pérdida de peso

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["mitos", "entrenamiento", "nutricion"]

respuesta: "déficit calórico"
tipo: completar
respuestas_validas:
  - "déficit calórico"
  - "deficit calorico"

enunciado: "Para perder grasa corporal, es necesario generar un ___."

explicacion: |
  La reducción de grasa corporal depende principalmente de un balance energético negativo, donde se consume menos energía de la que se gasta.
```

### 15 — Composición corporal

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "avanzado"
  tags: ["mitos", "entrenamiento", "composicion_corporal"]

respuesta: "recomposición"
tipo: completar
respuestas_validas:
  - "recomposición"
  - "recomposicion"

enunciado: "El proceso de perder grasa y ganar masa muscular simultáneamente se conoce como ___ corporal."

explicacion: |
  Aunque es difícil y requiere un control preciso de la nutrición y el entrenamiento, la recomposición corporal es el objetivo de optimizar la calidad de la composición corporal.
```

### 16 — Estiramiento estático previo

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["estiramiento", "mitos", "rendimiento"]

tipo: mc
opciones_explicitas: ["Mejora la potencia explosiva", "Puede reducir el rendimiento muscular", "No tiene ningún efecto", "Aumenta la coordinación"]
respuesta: "Puede reducir el rendimiento muscular"

enunciado: "Realizar estiramientos estáticos prolongados justo antes de una actividad de máxima potencia o velocidad puede causar que el músculo pierda capacidad de respuesta. ¿Cuál es el efecto principal de este mito en el rendimiento?"

explicacion: |
  El estiramiento estático prolongado antes del ejercicio puede reducir la capacidad de generación de fuerza explosiva. Para la preparación, es preferible el movimiento dinámico.
```

### 17 — Entrada en calor ideal

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["entrada_en_calor", "dinamismo"]

tipo: vf
respuesta: verdadero

enunciado: "Para optimizar la respuesta neuromuscular y preparar las articulaciones, una entrada en calor dinámica (con movimiento) es más efectiva que una serie de estiramientos estáticos sin movimiento."

explicacion: |
  Verdadero. La activación dinámica eleva la temperatura corporal y prepara al sistema nervioso y muscular para el esfuerzo específico que se va a realizar.
```

### 18 — Desmitificar para la salud

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["prevencion", "lesiones"]

tipo: mc
opciones_explicitas: ["Para ganar fuerza más rápido", "Para evitar lesiones y rutinas ineficientes", "Para descansar más tiempo", "Para no sudar tanto"]
respuesta: "Para evitar lesiones y rutinas ineficientes"

enunciado: "¿Cuál es el objetivo principal de desmentir mitos sobre el entrenamiento en la alfabetización corporal?"

explicacion: |
  Desmentir mitos permite que el estudiante construya una base de conocimiento científica, evitando prácticas que no sólo son ineficientes, sino que pueden aumentar el riesgo de lesiones.
```

### 19 — Estiramiento y prevención de lesiones

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["fisiologia", "mitos"]

tipo: vf
respuesta: falso

enunciado: "El mito dice que estirar estáticamente antes de entrenar es la mejor forma de prevenir lesiones en cualquier tipo de deporte de alta intensidad."

explicacion: |
  Falso. Si bien el estiramiento es importante, hacerlo de forma estática y prolongada antes de un esfuerzo explosivo puede ser contraproducente. La prevención depende de una activación progresiva (calentamiento dinámico).
```

### 20 — El costo de entrenar con mitos

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "avanzado"
  tags: ["eficiencia", "entrenamiento"]

tipo: mc
opciones_explicitas: ["La flexibilidad es la única clave del rendimiento", "El entrenamiento basado en mitos puede llevar a rutinas ineficientes", "El estiramiento estático siempre es obligatorio", "No importa cómo se entrene"]
respuesta: "El entrenamiento basado en mitos puede llevar a rutinas ineficientes"

enunciado: "Si un atleta sigue rutinas basadas en mitos (como estiramiento estático antes de un sprint), ¿qué consecuencia principal enfrenta en su proceso de entrenamiento?"

explicacion: |
  Seguir mitos lleva a una pérdida de tiempo y energía en métodos que no optimizan el rendimiento, lo que se traduce en una planificación ineficiente.
```

### 21 — El sprint explosivo

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["sistemas_energeticos", "esfuerzo_maximo"]

variables:
  idx: uno_de([0, 1])
  escenario: [["un sprint de 100 metros planos", "sistema de los fosfágenos"], ["un levantamiento de peso máximo", "sistema de los fosfágenos"]]

enunciado: "Durante {escenario[idx][0]}, el cuerpo utiliza principalmente el ___."

opciones_explicitas: ["sistema de los fosfágenos", "sistema oxidativo", "sistema glucolítico"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  En esfuerzos de máxima intensidad y muy corta duración (como un sprint o un levantamiento de peso), el cuerpo depende de la vía anaeróbica aláctica (fosfágenos) para obtener energía inmediata.
```

### 22 — Potencia en la sentadilla

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["musculos", "tren_inferior"]

variables:
  idx: uno_de([0, 1])
  ejercicio: [["sentadilla", "cuádriceps"], ["estocada", "cuádriceps"]]

enunciado: "Al realizar un ejercicio de {ejercicio[idx][0]}, el grupo muscular que actúa predominantemente es el ___."

respuestas_validas:
  - "cuádriceps"
  - "cuadriceps"
respuesta: ejercicio[idx][1]
tipo: completar

explicacion: |
  La sentadilla y la estocada son movimientos multiarticulares donde el cuádriceps es el motor principal para la extensión de rodilla.
```

### 23 — Resistencia en maratón

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["sistemas_energeticos", "aerobico"]

variables:
  idx: uno_de([0, 1])
  escenario: [["un maratón de 42 km", "sistema oxidativo"], ["una caminata de 2 horas", "sistema oxidativo"]]

enunciado: "En el caso de {escenario[idx][0]}, la vía predominante para la obtención de ATP es el ___."

opciones_explicitas: ["sistema oxidativo", "sistema de los fosfágenos", "sistema glucolítico"]
respuesta: escenario[idx][1]
tipo: mc

explicacion: |
  Las actividades de larga duración y baja-moderada intensidad dependen del metabolismo aeróbico o sistema oxidativo, que utiliza oxígeno para quemar carbohidratos y grasas.
```

### 24 — El sprint de 400 metros

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "intermedio"
  tags: ["sistemas_energeticos", "anaerobico_lactico"]

variables:
  idx: uno_de([0, 1])
  prueba: [["una carrera de 400 metros", "sistema glucolítico"], ["una serie de 15 repeticiones de 200m", "sistema glucolítico"]]

enunciado: "En {prueba[idx][0]}, el sistema energético predominante es el ___."

opciones_explicitas: ["sistema glucolítico", "sistema de los fosfágenos", "sistema oxidativo"]
respuesta: prueba[idx][1]
tipo: mc

explicacion: |
  Estos esfuerzos requieren intensidad alta con duración media, lo que activa la glucólisis anaeróbica (sistema glucolítico), produciendo lactato.
```

### 25 — Flexión de brazos

```
metadata:
  materia: "ed_fisica"
  tema: "alfabetizacion_corporal"
  nivel: "basico"
  tags: ["musculos", "tren_superior"]

variables:
  idx: uno_de([0, 1])
  movimiento: [["flexiones de brazos", "tríceps"], ["press de banca", "tríceps"]]

enunciado: "Al ejecutar {movimiento[idx][0]}, el músculo que realiza la extensión del codo es el ___."

respuestas_validas:
  - "tríceps"
  - "triceps"
respuesta: movimiento[idx][1]
tipo: completar

explicacion: |
  El tríceps braquial es el músculo encargado de la extensión del antebrazo respecto al brazo, acción principal en las flexiones y el press de banca.
```
