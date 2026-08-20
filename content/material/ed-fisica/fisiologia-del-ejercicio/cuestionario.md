# Ed. Física — Fisiología del ejercicio (cuestionario, 25 preguntas VBLang)

> Tema: `EF2`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: varias preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`); `tipo:
> vf` con `opciones_explicitas: ["Verdadero","Falso"]` innecesario —
> normalizado a `respuesta: verdadero`/`falso` sin opciones; dos
> preguntas con `variables:` mal anidadas (`[[[...],[...]]]`, un
> nivel de más) donde `escenario_idx` indexaba fuera de rango y la
> `respuesta:` quedaba fija sin importar el escenario sorteado —
> reescritas con la lista plana correcta y `respuesta:` indexada;
> `opciones_explicitas` con un texto que no coincidía exactamente con
> `respuesta:` ("menos fuerza" vs "más fuerza") — corregido;
> `respuestas_validas` con más de una opción cuando sólo una era
> correcta — recortado.

---

### 1 — Frecuencia cardíaca y ejercicio

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["cardiovascular", "frecuencia_cardiaca"]

respuesta: "aumento"
tipo: completar
respuestas_validas:
  - "aumento"

enunciado: "Durante la práctica de actividad física intensa, se produce un ___ de la frecuencia cardíaca para transportar más oxígeno a los músculos."

explicacion: |
  Al realizar ejercicio, los músculos demandan más oxígeno y nutrientes. Para satisfacer esta demanda, el corazón debe latir más rápido, lo que conocemos como aumento de la frecuencia cardíaca.
```

### 2 — El gasto cardíaco

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["gasto_cardiaco", "volumen_sistolico"]

respuesta: "gasto cardíaco"
tipo: completar
respuestas_validas:
  - "gasto cardíaco"
  - "gasto cardiaco"

enunciado: "El producto de la frecuencia cardíaca por el volumen sistólico se denomina ___."

explicacion: |
  La fórmula del gasto cardíaco (Q) es: Q = Frecuencia Cardíaca × Volumen Sistólico. Durante el ejercicio, ambos valores aumentan para elevar el gasto total.
```

### 3 — Volumen sistólico

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["volumen_sistolico", "corazon"]

respuesta: "mayor"
tipo: completar
respuestas_validas:
  - "mayor"

enunciado: "Con el entrenamiento de resistencia, el corazón se vuelve más eficiente y logra un volumen sistólico ___ en cada latido."

explicacion: |
  El entrenamiento cardiovascular mejora la contractilidad del miocardio, permitiendo que el corazón expulse una mayor cantidad de sangre en cada contracción (mayor volumen sistólico).
```

### 4 — Transporte de oxígeno

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["oxigeno", "sangre"]

respuesta: "oxígeno"
tipo: completar
respuestas_validas:
  - "oxígeno"
  - "oxigeno"

enunciado: "El objetivo principal del aumento del flujo sanguíneo durante el ejercicio es optimizar la entrega de ___ a los tejidos musculares."

explicacion: |
  El sistema cardiovascular actúa como un sistema de transporte; al aumentar la velocidad de la sangre, se asegura que el oxígeno llegue rápidamente a las células que lo están consumiendo.
```

### 5 — Adaptación cardiovascular inmediata

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "avanzado"
  tags: ["adaptacion", "corazon"]

respuesta: "frecuencia cardíaca"
tipo: completar
respuestas_validas:
  - "frecuencia cardíaca"
  - "frecuencia cardiaca"

enunciado: "En un ejercicio de tipo aeróbico, la principal respuesta inmediata para mantener la homeostasis es el incremento de la ___."

explicacion: |
  La respuesta inmediata más notable ante el inicio del movimiento es el aumento de la frecuencia cardíaca para compensar la demanda metabólica.
```

### 6 — Respuesta inmediata al esfuerzo

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["respiracion", "oxigeno", "co2"]

tipo: mc
opciones_explicitas: ["Aumentar la frecuencia respiratoria y la profundidad de la inspiración", "Disminuir la frecuencia respiratoria para ahorrar energía", "Mantener la respiración constante independientemente del esfuerzo", "Aumentar la captación de CO2 y disminuir la de O2"]

respuesta: "Aumentar la frecuencia respiratoria y la profundidad de la inspiración"

enunciado: "Cuando una persona comienza a realizar un ejercicio físico intenso, ¿cuál es la respuesta inmediata del sistema respiratorio para satisfacer las demandas metabólicas?"

explicacion: |
  Durante el ejercicio, los músculos demandan más energía, lo que requiere más oxígeno (O2) y genera más dióxido de carbono (CO2). Para compensar, el cerebro ordena aumentar tanto la frecuencia (respiraciones por minuto) como la profundidad (volumen de aire por respiración) de la ventilación.
```

### 7 — El rol del dióxido de carbono

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["co2", "gas_sangre", "homeostasis"]

tipo: vf
respuesta: verdadero

enunciado: "Uno de los objetivos principales de la hiperventilación durante el ejercicio es la eliminación rápida de CO2 para evitar la acidificación de la sangre."

explicacion: |
  El aumento de la intensidad del ejercicio produce un exceso de CO2 en la sangre. Al respirar más rápido y profundo, el cuerpo logra expulsar este exceso de CO2 a través de los pulmones, ayudando a mantener el equilibrio del pH sanguíneo.
```

### 8 — Intercambio gaseoso en los alvéolos

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["alveolos", "intercambio_gaseoso"]

tipo: mc
opciones_explicitas: ["El O2 pasa de los alvéolos a la sangre y el CO2 pasa de la sangre a los alvéolos", "El O2 pasa de la sangre a los alvéolos y el CO2 pasa de los alvéolos a la sangre", "Tanto el O2 como el CO2 pasan de los alvéolos a la sangre", "El intercambio se detiene para priorizar el flujo sanguíneo"]

respuesta: "El O2 pasa de los alvéolos a la sangre y el CO2 pasa de la sangre a los alvéolos"

enunciado: "Durante el ejercicio, la captación de oxígeno se produce en los alvéolos pulmonares mediante un proceso de difusión. ¿Cómo ocurre este intercambio gaseoso?"

explicacion: |
  En los alvéolos, la presión parcial de oxígeno es mayor que en la sangre capilar, lo que permite que el O2 entre a la sangre. Simultáneamente, la presión de CO2 es mayor en la sangre que en el aire alveolar, permitiendo que el CO2 pase a los pulmones para ser expulsado.
```

### 9 — Factores que estimulan la respiración

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["estimulo", "quimiorreceptores", "sangre"]

tipo: vf
respuesta: verdadero

enunciado: "El principal estímulo químico que activa el aumento de la frecuencia respiratoria durante el ejercicio es el incremento de los niveles de CO2 en la sangre."

explicacion: |
  Aunque el cuerpo necesita oxígeno, el principal motor que le dice al centro respiratorio en el cerebro que debe respirar más rápido es la acumulación de dióxido de carbono (CO2) y la consecuente caída del pH sanguíneo.
```

### 10 — Adaptación ventilatoria

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["ventilacion", "ejercicio"]

tipo: mc
opciones_explicitas: ["La ventilación pulmonar aumenta para facilitar el transporte de gases", "La ventilación pulmonar disminuye para evitar la pérdida de calor", "La ventilación pulmonar se mantiene igual pero la frecuencia cardíaca sube", "La ventilación pulmonar depende sólo de la temperatura ambiental"]

respuesta: "La ventilación pulmonar aumenta para facilitar el transporte de gases"

enunciado: "En el contexto de la fisiología del ejercicio, se define la 'ventilación pulmonar' como la suma de la frecuencia respiratoria por el volumen corriente. ¿Qué ocurre con esta variable durante una carrera de velocidad?"

explicacion: |
  Al aumentar la intensidad del ejercicio, tanto la frecuencia como el volumen de aire por respiración (volumen corriente) aumentan, lo que resulta en un incremento significativo de la ventilación pulmonar total para asegurar el suministro de O2 y la eliminación de CO2.
```

### 11 — El ATP y la energía inmediata

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["atp", "energia"]

enunciado: "La molécula que funciona como la principal moneda energética de la célula, proporcionando energía inmediata para la contracción muscular, es el ___."

respuestas_validas:
  - "ATP"
respuesta: "ATP"
tipo: completar

explicacion: |
  El ATP (Adenosín Trifosfato) es la molécula que almacena y transporta energía química dentro de las células para permitir el trabajo muscular.
```

### 12 — Sistemas energéticos según duración del esfuerzo

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["sistemas_energeticos", "esfuerzo"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["100 metros llanos", "sistema de los fosfágenos"], ["maratón de 42km", "sistema oxidativo"]]

enunciado: "Para un esfuerzo de tipo {escenarios[escenario_idx][0]}, el cuerpo utiliza predominantemente el ___."

respuestas_validas:
  - "sistema de los fosfágenos"
  - "sistema oxidativo"
respuesta: escenarios[escenario_idx][1]
tipo: completar

explicacion: |
  Los esfuerzos explosivos y muy cortos (menos de 10-15 segundos) dependen de la ruptura inmediata del ATP y la fosfocreatina (sistema de los fosfágenos); los esfuerzos largos usan el sistema oxidativo (con oxígeno).
```

### 13 — El metabolismo anaeróbico láctico

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["lactato", "glucolisis"]

enunciado: "Cuando realizamos un esfuerzo de alta intensidad que dura entre 30 y 90 segundos, se produce una acumulación de ___ en los músculos debido a la glucólisis anaeróbica."

respuestas_validas:
  - "lactato"
respuesta: "lactato"
tipo: completar

explicacion: |
  En esfuerzos intensos de duración media, la glucosa se descompone sin la presencia suficiente de oxígeno, generando lactato como subproducto.
```

### 14 — El sistema aeróbico

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["oxigeno", "aerobico"]

enunciado: "El sistema que utiliza el oxígeno para quemar carbohidratos y grasas para producir energía en esfuerzos de larga duración se denomina sistema ___."

respuestas_validas:
  - "aeróbico"
  - "aerobico"
respuesta: "aeróbico"
tipo: completar

explicacion: |
  El sistema aeróbico es el más eficiente para producir energía a largo plazo, permitiendo mantener el ejercicio durante mucho tiempo si hay suministro de oxígeno.
```

### 15 — Sustratos energéticos en ejercicio prolongado

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "avanzado"
  tags: ["sustratos", "metabolismo"]

variables:
  tipo_sustrato_idx: uno_de([0, 1])
  sustratos: [["carbohidratos", "glucosa"], ["grasas", "ácidos grasos"]]

enunciado: "En un ejercicio de resistencia prolongada, una de las fuentes principales de energía son las ___, que se transforman en {sustratos[tipo_sustrato_idx][1]} para su uso celular."

respuestas_validas:
  - "carbohidratos"
  - "grasas"
respuesta: sustratos[tipo_sustrato_idx][0]
tipo: completar

explicacion: |
  Las grasas son una fuente de energía casi ilimitada para ejercicios de muy larga duración, aunque su proceso de oxidación es más lento que el de los carbohidratos, que se usan más al inicio del esfuerzo.
```

### 16 — Frecuencia cardíaca en reposo (entrenamiento)

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["corazon", "entrenamiento", "reposo"]

respuesta: "menor"
tipo: completar
respuestas_validas:
  - "menor"

enunciado: "Una persona que realiza entrenamiento cardiovascular de forma regular suele presentar una frecuencia cardíaca en reposo ___ que una persona sedentaria."

explicacion: |
  El entrenamiento regular fortalece el músculo cardíaco, permitiendo que el corazón bombee más sangre en cada latido (mayor volumen sistólico). Como resultado, necesita latir menos veces por minuto para mantener el cuerpo en reposo.
```

### 17 — Adaptación del corazón

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["corazon", "eficiencia", "adaptacion"]

opciones_explicitas: ["El corazón late más lento y con más fuerza", "El corazón late más rápido para compensar", "El corazón cambia su forma de ser triangular", "No hay cambios en el músculo cardíaco"]
respuesta: "El corazón late más lento y con más fuerza"
tipo: mc

enunciado: "Al entrenar de manera constante, ¿qué adaptación principal experimenta el corazón para volverse más eficiente?"

explicacion: |
  La adaptación principal es el aumento del volumen sistólico: el corazón se vuelve más fuerte y eficiente, bombeando más sangre con menos esfuerzo, lo que reduce la frecuencia cardíaca.
```

### 18 — Proceso de adaptación gradual

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["tiempo", "progreso", "adaptacion"]

respuesta: "gradual"
tipo: completar
respuestas_validas:
  - "gradual"

enunciado: "Las adaptaciones fisiológicas del cuerpo al entrenamiento no son instantáneas; se producen de forma ___ a medida que el organismo se ajusta al estímulo."

explicacion: |
  El cuerpo necesita tiempo para realizar cambios estructurales y funcionales (como la angiogénesis o el aumento del volumen plasmático). Por eso, el progreso es un proceso gradual y no inmediato.
```

### 19 — Beneficios del entrenamiento cardíaco

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["eficiencia", "rendimiento", "corazon"]

opciones_explicitas: ["Aumento de la frecuencia cardíaca en reposo", "Disminución de la capacidad de bombeo", "Mayor eficiencia en el transporte de oxígeno", "Aumento de la fatiga inmediata"]
respuesta: "Mayor eficiencia en el transporte de oxígeno"
tipo: mc

enunciado: "¿Cuál de las siguientes es una consecuencia directa de una mejora en la eficiencia cardíaca debido al entrenamiento regular?"

explicacion: |
  Un corazón más eficiente y una mejor red de capilares permiten que el oxígeno llegue de manera más efectiva a los músculos durante el esfuerzo.
```

### 20 — Frecuencia cardíaca de reposo vs. máxima

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["frecuencia_cardiaca", "entrenamiento"]

respuesta: "baja"
tipo: completar
respuestas_validas:
  - "baja"

enunciado: "A medida que una persona mejora su condición física, su frecuencia cardíaca máxima durante un esfuerzo intenso tiende a mantenerse igual, pero su frecuencia cardíaca en reposo se vuelve más ___."

explicacion: |
  La frecuencia cardíaca de reposo disminuye (bradicardia deportiva) debido a que el corazón es más eficiente y el sistema nervioso parasimpático tiene mayor tono.
```

### 21 — Frecuencia cardíaca en reposo (atleta vs. sedentario)

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["frecuencia_cardiaca", "reposo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["atleta entrenado", 45], ["persona sedentaria", 75]]

enunciado: "Un {datos[escenario_idx][0]} presenta una frecuencia cardíaca en reposo de {datos[escenario_idx][1]} lpm. ¿Cuál es la principal ventaja fisiológica de una frecuencia de reposo baja?"

opciones_explicitas: ["Mayor gasto cardíaco con menos latidos", "Mayor necesidad de oxígeno en reposo", "Menor eficiencia del ventrículo izquierdo", "Mayor frecuencia respiratoria"]

respuesta: "Mayor gasto cardíaco con menos latidos"
tipo: mc

explicacion: |
  Un corazón más eficiente (frecuencia baja) bombea más sangre por cada latido, permitiendo que el organismo trabaje con menos esfuerzo en reposo.
```

### 22 — Sistemas energéticos en el levantamiento de pesas

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["sistemas_energeticos", "fuerza"]

enunciado: "Durante un levantamiento de pesas de máxima intensidad que dura apenas 3 segundos, el cuerpo utiliza principalmente el sistema ___."

respuestas_validas:
  - "ATP-PC"
respuesta: "ATP-PC"
tipo: completar

explicacion: |
  Para esfuerzos explosivos y de muy corta duración, el cuerpo utiliza los depósitos inmediatos de ATP y Fosfocreatina (ATP-PC).
```

### 23 — Respuesta de la frecuencia cardíaca según el ejercicio

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "basico"
  tags: ["frecuencia_cardiaca", "ejercicio"]

variables:
  tipo_ejercicio: uno_de([0, 1])
  escenario: [["maratón (resistencia)", "baja"], ["sprint (potencia)", "alta"]]

enunciado: "En una prueba de {escenario[tipo_ejercicio][0]}, la frecuencia cardíaca sostenida durante el esfuerzo tiende a un nivel relativamente ___ en comparación con un sprint máximo."

opciones_explicitas: ["baja", "alta", "moderada", "nula"]

respuesta: escenario[tipo_ejercicio][1]
tipo: mc

explicacion: |
  Los ejercicios de resistencia aeróbica mantienen una intensidad constante y sostenible, mientras que los esfuerzos explosivos disparan la frecuencia cardíaca hacia sus niveles máximos.
```

### 24 — El lactato y la fatiga

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "intermedio"
  tags: ["lactato", "fatiga", "metabolismo"]

enunciado: "Cuando realizamos un ejercicio de alta intensidad que excede el umbral de lactato, la acumulación de ___ en el músculo contribuye a la sensación de fatiga."

respuestas_validas:
  - "lactato"
respuesta: "lactato"
tipo: completar

explicacion: |
  La acumulación de lactato y la consecuente acidificación del medio muscular es un factor clave en la fatiga durante el ejercicio anaeróbico.
```

### 25 — Adaptaciones al entrenamiento de resistencia

```
metadata:
  materia: "ed_fisica"
  tema: "fisiologia_del_ejercicio"
  nivel: "avanzado"
  tags: ["adaptaciones", "resistencia"]

enunciado: "El entrenamiento de larga duración (resistencia) produce un ___ de la capacidad de transporte de oxígeno debido a la angiogénesis."

opciones_explicitas: ["aumento", "disminución", "estabilización", "anulación"]

respuesta: "aumento"
tipo: mc

explicacion: |
  El entrenamiento aeróbico estimula la creación de nuevos capilares (angiogénesis), mejorando la entrega de oxígeno a los músculos.
```
