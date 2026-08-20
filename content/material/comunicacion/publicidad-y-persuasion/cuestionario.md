# Comunicacion — Publicidad y persuasion (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Persuasión

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["definicion", "persuasion"]

respuesta: "persuasión"
tipo: completar
respuestas_validas:
  - "persuasión"
  - "persuasion"

enunciado: "La capacidad de un mensaje para modificar la actitud, la creencia o el comportamiento de un receptor mediante la comunicación se denomina ___."

explicacion: |
  La persuasión es el proceso de comunicación mediante el cual se intenta convencer a un individuo o grupo de adoptar una idea, actitud o conducta específica.
```

### 2 — El Modelo AIDA

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["modelo_aida", "secuencia"]

tipo: ordenar
opciones_explicitas: ["Atención", "Interés", "Deseo", "Acción"]
respuesta_orden: ["Atención", "Interés", "Deseo", "Acción"]

enunciado: "Ordena las etapas del modelo AIDA, una de las estructuras más clásicas en la publicidad, desde el primer contacto con el consumidor hasta la conversión:"

explicacion: |
  El modelo AIDA describe las etapas por las que pasa un consumidor: captar la **Atención**, despertar el **Interés**, generar el **Deseo** de adquisición y finalmente provocar la **Acción** (compra).
```

### 3 — Publicidad vs. Propaganda

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["publicidad", "propaganda"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que la 'propaganda' tiene como objetivo principal la venta de bienes o servicios comerciales?"

explicacion: |
  Falso. Mientras que la publicidad busca promover el consumo de productos o servicios, la propaganda busca difundir ideas, doctrinas o valores para influir en la opinión política o social.
```

### 4 — El Argumento de Autoridad

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["tecnicas", "autoridad"]

variables:
  caso: [["Un anuncio de pasta dental que utiliza a un dentista con bata blanca para validar el producto.", "autoridad"], ["Un anuncio de refresco que muestra a personas felices en una fiesta.", "emocional"], ["Un anuncio de un coche que destaca que es el más vendido del mundo.", "lógica"]]
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["autoridad", "emocional", "lógica"]

enunciado: "Si un anuncio utiliza la figura de un experto (como un médico o un científico) para validar las propiedades de un producto, ¿qué técnica de persuasión está utilizando?"

explicacion: |
  La técnica de autoridad utiliza la credibilidad de una persona o institución para transferir confianza al producto o mensaje.
```

### 5 — El Sesgo de Escasez

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["sesgos", "escasez"]

variables:
  escenario: [["'¡Solo quedan 2 unidades en stock!'", "escasez"], ["'¡Aprovecha esta oferta por tiempo limitado!'", "escasez"], ["'El producto más recomendado por expertos.'", "autoridad"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["escasez", "autoridad", "reciprocidad"]

enunciado: "Analiza el siguiente mensaje publicitario: \"{escenario[idx][0]}\". ¿Qué disparador psicológico está intentando activar el anunciante?"

explicacion: |
  La escasez (ya sea de tiempo o de stock) crea un sentido de urgencia en el consumidor, reduciendo su tiempo de reflexión y empujándolo a la compra inmediata por miedo a perder la oportunidad.
```

### 6 — El efecto de la escasez

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["escasez", "persuasion"]

enunciado: "Una tienda de calzado lanza una promoción que dice: '¡Solo quedan 3 pares de este modelo en stock!'. Esta técnica busca influir en el consumidor mediante la sensación de ____."

respuestas_validas:
  - "escasez"
  - "urgencia"
tipo: completar

explicacion: |
  La técnica de escasez funciona bajo la premisa de que los consumidores valoran más aquello que es difícil de conseguir o que está a punto de agotarse, lo que acelera la decisión de compra.
```

### 7 — Autoridad en la publicidad

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["autoridad", "credibilidad"]

variables:
  escenario: uno_de([["Un dentista con bata blanca recomienda una pasta dental.", "autoridad"], ["Un chef profesional recomienda una marca de sartenes.", "autoridad"], ["Un deportista famoso usa una bebida energética.", "aspiracional"]])

enunciado: "En el siguiente caso: '{escenario[0]}', la técnica de persuasión predominante es la de:"

opciones_explicitas: ["autoridad", "aspiracional", "escasez", "reciprocidad"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  Cuando se utiliza a un experto en una materia para validar un producto, se está apelando al principio de autoridad para aumentar la credibilidad del mensaje.
```

### 8 — Prueba social en redes sociales

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["prueba_social", "validacion"]

enunciado: "Si una aplicación de delivery muestra un mensaje que dice 'Más de 10.000 personas pidieron esto hoy', ¿está utilizando el principio de prueba social?"

respuesta: verdadero
tipo: vf

explicacion: |
  La prueba social (social proof) se basa en la idea de que las personas tienden a seguir las acciones de un grupo mayor para validar su propia conducta.
```

### 9 — El proceso de persuasión de la persuasión

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "avanzado"
  tags: ["modelo_elaboration", "procesamiento"]

enunciado: "Ordena los pasos del modelo de probabilidad de elaboración (ELM) cuando un consumidor procesa un anuncio de alta implicación (ej. un auto nuevo):"

opciones_explicitas: ["Atención al mensaje", "Procesamiento detallado", "Evaluación de argumentos", "Cambio de actitud"]
respuesta_orden: ["Atención al mensaje", "Procesamiento detallado", "Evaluación de argumentos", "Cambio de actitud"]
tipo: ordenar

explicacion: |
  En la ruta central del modelo ELM, el consumidor realiza un esfuerzo cognitivo significativo, analizando la calidad de los argumentos para formar una opinión duradera.
```

### 10 — Reciprocidad en el marketing

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["reciprocidad", "marketing"]

variables:
  caso: uno_de([["Un supermercado te da una muestra gratis de queso.", "comprar"], ["Un spa te ofrece una sesión de prueba de 5 minutos.", "comprar"], ["Un restaurante te regala un dulce al finalizar la comida.", "comprar"]])

enunciado: "Caso: '{caso[0]}'. Tras recibir el beneficio gratuito, el cliente siente la obligación psicológica de devolver el favor. Esto se traduce en la acción de: ___."

respuestas_validas:
  - "comprar"
  - "pagar"
  - "devolver"
tipo: completar

explicacion: |
  El principio de reciprocidad establece que las personas se sienten obligadas a devolver un favor o un gesto amable, lo cual es una herramienta poderosa en el marketing de muestras gratuitas.
```

### 11 — Persuasión vs Manipulación

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["etica", "definiciones"]

respuesta: falso
tipo: vf

enunciado: "La persuasión se define como el intento de cambiar la actitud o comportamiento de alguien mediante la libertad de elección, mientras que la manipulación implica ocultar información o coaccionar para anular la voluntad del receptor."

explicacion: |
  Es correcto. La diferencia fundamental radica en la transparencia y la libertad de elección. En la persuasión se presentan argumentos para que el sujeto decida; en la manipulación se utiliza el engaño para que no pueda decidir libremente.
```

### 12 — El sesgo de autoridad en la publicidad

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["sesgos", "psicologia_consumo"]

variables:
  escenario: uno_de([["Un actor vestido de médico recomienda una marca de vitaminas", "autoridad_falsa"], ["Un científico real avala la eficacia de un nuevo detergente", "autoridad_real"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["autoridad_falsa", "autoridad_real"]

enunciado: "En el siguiente caso, identifica si se está utilizando un argumento de autoridad legítimo o un sesgo de autoridad:"

pasos:
  - "Observa al personaje en el anuncio."
  - "Analiza si su conocimiento está directamente relacionado con el producto."

explicacion: |
  El uso de figuras de autoridad (como médicos o expertos) es una técnica de persuasión. Se vuelve un error de comunicación o manipulación cuando el experto no tiene competencia real en el área del producto (ej. un actor disfrazado).
```

### 13 — El efecto de la escasez

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["gatillos_mentales", "escasez"]

respuesta: "¡Solo quedan 3 unidades!"
tipo: completar
respuestas_validas:
  - "¡Solo quedan 3 unidades!"
  - "Última oportunidad"

enunciado: "Cuando una marca utiliza frases como '___' para generar una sensación de urgencia y forzar la decisión de compra, está aplicando la técnica de la escasez."

explicacion: |
  La escasez (real o percibida) activa un mecanismo de aversión a la pérdida, lo que impulsa al consumidor a actuar rápidamente para no perder la oportunidad.
```

### 14 — Secuencia de un mensaje persuasivo

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "avanzado"
  tags: ["estructura", "modelo_aida"]

respuesta_orden: ["Atención", "Interés", "Deseo", "Acción"]
tipo: ordenar
opciones_explicitas: ["Deseo", "Acción", "Atención", "Interés"]

enunciado: "Ordena correctamente las etapas del modelo AIDA, el esquema clásico de comunicación publicitaria para guiar al consumidor:"

explicacion: |
  El modelo AIDA sigue una progresión lógica: primero se capta la _Atención_, luego se genera _Interés_ por el beneficio, se crea el _Deseo_ de posesión y finalmente se provoca la _Acción_ (compra).
```

### 15 — El error de la sobrecarga informativa

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["ruido", "efectividad"]

respuesta: "paradoja de la elección"
tipo: completar
respuestas_validas:
  - "paradoja de la elección"
  - "sobrecarga cognitiva"

enunciado: "Un error común en la publicidad es presentar demasiadas opciones de un mismo producto; esto puede causar que el consumidor se sienta abrumado, fenómeno conocido como la ___."

explicacion: |
  La 'paradoja de la elección' sugiere que, aunque tener opciones parece bueno, un exceso de ellas aumenta la ansiedad y la probabilidad de que el cliente no compre nada por miedo a equivocarse.
```

### 16 — Publicidad vs. Propaganda

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["conceptos_basicos", "publicidad"]

respuesta: "comercial"
tipo: completar
respuestas_validas:
  - "comercial"

enunciado: "Mientras que la propaganda busca influir en la actitud y valores de una audiencia hacia una causa social o política, la publicidad tiene como objetivo principal el sentido ___."

explicacion: |
  La publicidad es una forma de comunicación que busca promover la venta de un producto o servicio (fin comercial), mientras que la propaganda busca la adhesión a una ideología o causa.
```

### 17 — Persuasión vs. Manipulación

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["etica", "persuasion"]

variables:
  es_etica: uno_de([verdadero, falso])

respuesta: es_etica
tipo: completar
enunciado: "En el contexto de la comunicación persuasiva, si el emisor oculta información relevante para inducir un error en el receptor y forzar una decisión, ¿se considera una práctica ética?"

explicacion: |
  La persuasión ética respeta la libertad de elección y la veracidad; la manipulación utiliza el engaño o la omisión para anular la capacidad de juicio del receptor.
```

### 18 — Publicidad Informativa vs. Publicidad Emocional

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["estrategias", "emociones"]

tipo: mc
opciones_explicitas: ["Racional/Informativa", "Emocional/Aspiracional", "Miedo/Intimidación", "Autoridad/Celebridad"]

respuesta: "Emocional/Aspiracional"

enunciado: "Un anuncio de un reloj de alta gama que muestra imágenes de paisajes épicos y personas logrando sus sueños, sin mencionar las especificaciones técnicas del mecanismo, utiliza una técnica de tipo: ___"

pasos:
  - "Identificar el objetivo del anuncio: ¿vende características o sentimientos?"
  - "Analizar si el mensaje se apoya en datos lógicos o en la conexión afectiva."

explicacion: |
  El anuncio utiliza el modelo aspiracional, donde el producto se vincula con una emoción o un estilo de vida, característico de la publicidad emocional.
```

### 19 — El proceso de persuasión

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "avanzado"
  tags: ["modelos", "secuencia"]

respuesta_orden: ["Atención", "Interés", "Deseo", "Acción"]
tipo: ordenar
opciones_explicitas: ["Atención", "Interés", "Deseo", "Acción"]

enunciado: "Ordene correctamente las etapas del modelo AIDA, una estructura clásica en la publicidad para guiar al consumidor a través del proceso de persuasión:"

explicacion: |
  El modelo AIDA establece una secuencia lógica: primero se capta la atención, luego se genera interés, se despierta el deseo por el producto y finalmente se provoca la acción de compra.
```

### 20 — Persuasión vs. Coacción

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["etica", "psicologia"]

respuesta: "coaccion"
tipo: completar
respuestas_validas:
  - "coaccion"

enunciado: "La principal diferencia entre la persuasión y la ___ es que la primera apela a la voluntad y el razonamiento del individuo, mientras que la segunda utiliza la fuerza o la amenaza para obligar a una acción."

explicacion: |
  La persuasión es un proceso de influencia que respeta la autonomía del sujeto, mientras que la coacción anula la libertad del individuo mediante la presión o la fuerza.
```

### 21 — El efecto de la escasez

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["escasez", "persuasion"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [["Solo quedan 2 unidades de este perfume", "¡Últimas 3 plazas para el curso de verano!", "Oferta válida solo por los próximos 15 minutos"], ["crea una sensación de urgencia", "genera miedo a perder la oportunidad", "estimula la compra impulsiva"]]

enunciado: "Un anuncio que indica que '{escenarios[0][escenario_idx]}' utiliza la técnica de escasez para {escenarios[1][escenario_idx]}."

respuesta: escenarios[1][escenario_idx]
tipo: completar
respuestas_validas:
  - "crea una sensación de urgencia"
  - "genera miedo a perder la oportunidad"
  - "estimula la compra impulsiva"

explicacion: |
  La escasez funciona limitando la disponibilidad (tiempo o cantidad), lo que activa un sesgo cognitivo que nos empuja a actuar rápido para evitar la pérdida.
```

### 22 — Testimonio de autoridad

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["autoridad", "sesgos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: ["Un actor famoso promocionando un reloj de lujo", "Un dentista con bata blanca recomendando una pasta dental"]

enunciado: "Si un anuncio utiliza a {casos[caso_idx]} para vender un producto, está aplicando la técnica de persuasión por autoridad."

respuesta: verdadero
tipo: vf

explicacion: |
  La autoridad (ya sea por estatus social o por conocimiento experto) es un disparador de persuasión que reduce la resistencia del consumidor hacia el mensaje.
```

### 23 — El principio de reciprocidad

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["reciprocidad", "marketing"]

opciones_explicitas: ["Reciprocidad", "Simpatía", "Consistencia", "Autoridad"]

enunciado: "Una marca de cosméticos regala una muestra gratuita de una crema en tu compra de un labial. Al recibir algo 'gratis', el cliente siente la necesidad de devolver el favor comprando el producto completo. ¿Qué técnica se está usando?"

respuesta: "Reciprocidad"
tipo: mc

explicacion: |
  La reciprocidad es la tendencia humana de responder a una concesión o regalo con otra acción positiva, en este caso, una compra.
```

### 24 — Secuencia de un anuncio persuasivo

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "avanzado"
  tags: ["estructura", "copywriting"]

opciones_explicitas: ["Atención", "Interés", "Deseo", "Acción"]

enunciado: "Ordena los pasos del modelo AIDA, una estructura clásica en publicidad persuasiva, desde el primer contacto hasta la conversión:"

respuesta_orden: ["Atención", "Interés", "Deseo", "Acción"]
tipo: ordenar

explicacion: |
  El modelo AIDA guía al consumidor a través de un embudo: primero capta su atención, luego despierta su interés, genera el deseo por el beneficio y finalmente lo empuja a la acción (compra).
```

### 25 — El sesgo de familiaridad

```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["familiaridad", "reiteracion"]

variables:
  campaña_idx: uno_de([0, 1])
  campañas: [["Una marca de gaseosas que aparece en todos los eventos deportivos", "Una marca de zapatillas que usa siempre los mismos colores y música"], "reiteracion_visual", "reiteracion_auditiva"]

enunciado: "Un anuncio que utiliza la repetición constante de un jingle musical para que el consumidor lo reconozca al instante, está apelando a la _________."

respuesta: "familiaridad"
tipo: completar
respuestas_validas:
  - "familiaridad"

explicacion: |
  La familiaridad (o efecto de mera exposición) sugiere que las personas desarrollan una preferencia por las cosas simplemente porque están familiarizadas con ellas.
```
