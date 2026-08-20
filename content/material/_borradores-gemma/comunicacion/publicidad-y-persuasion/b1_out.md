### 1 — Concepto de Persuasión
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["definicion", "persuasion"]

respuesta: "persuasión"
tipo: completar
respuestas_validas: ["persuasión", "persuasion"]

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

variables:
  secuencia_correcta: ["Atención", "Interés", "Deseo", "Acción"]

respuesta: ["Atención", "Interés", "Deseo", "Acción"]
tipo: ordenar

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
  caso: [
    ["Un anuncio de pasta dental que utiliza a un dentista con bata blanca para validar el producto.", "autoridad"],
    ["Un anuncio de refresco que muestra a personas felices en una fiesta.", "emocional"],
    ["Un anuncio de un coche que destaca que es el más vendido del mundo.", "lógica"]
  ]
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
  escenario: [
    ["'¡Solo quedan 2 unidades en stock!'", "escasez"],
    ["'¡Aprovecha esta oferta por tiempo limitado!'", "escasez"],
    ["'El producto más recomendado por expertos.'", "autoridad"]
  ]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["escasez", "autoridad", "reciprocidad"]

enunciado: "Analiza el siguiente mensaje publicitario: \"{escenario[idx][0]}\". ¿Qué disparador psicológico está intentando activar el anunciante?"

explicacion: |
  La escasez (ya sea de tiempo o de stock) crea un sentido de urgencia en el consumidor, reduciendo su tiempo de reflexión y empujándolo a la compra inmediata por miedo a perder la oportunidad.
```