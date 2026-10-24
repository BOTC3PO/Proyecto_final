### 1 — El efecto de la escasez
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "basico"
  tags: ["escasez", "persuasion"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [["Solo quedan 2 unidades de este perfume", "¡Últimas 3 plazas para el curso de verano!", "Oferta válida solo por los próximos 15 minutos"], ["crea una sensación de urgencia", "genera miedo a perder la oportunidad", "estimula la compra impulsiva"]]

enunciado: "Un anuncio que indica que '{escenarios[escenario_idx][0]}' utiliza la técnica de escasez para {escenarios[escenario_idx][1]}."

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas: ["crea una sensación de urgencia", "genera miedo a perder la oportunidad", "estimula la compra impulsiva"]

explicacion: |
  La escasez funciona limitando la disponibilidad (tiempo o cantidad), lo que activa un sesgo cognitivo que nos empuja a actuar rápido para evitar la pérdida.
```

### 2 — Testimonio de autoridad
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "intermedio"
  tags: ["autoridad", "sesgos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un actor famoso promocionando un reloj de lujo", "Un dentista con bata blanca recomendando una pasta dental"], "testimonio_famoso", "testimonio_experto"]

enunciado: "Si un anuncio utiliza a {casos[caso_idx][0]} para vender un producto, está aplicando la técnica de persuasión por autoridad."

respuesta: verdadero
tipo: vf

explicacion: |
  La autoridad (ya sea por estatus social o por conocimiento experto) es un disparador de persuasión que reduce la resistencia del consumidor hacia el mensaje.
```

### 3 — El principio de reciprocidad
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

### 4 — Secuencia de un anuncio persuasivo
```
metadata:
  materia: "comunicacion"
  tema: "publicidad_y_persuasion"
  nivel: "avanzado"
  tags: ["estructura", "copywriting"]

opciones_explicitas: ["Atención", "Interés", "Deseo", "Acción"]

enunciado: "Ordena los pasos del modelo AIDA, una estructura clásica en publicidad persuasiva, desde el primer contacto hasta la conversión:"

respuesta: ["Atención", "Interés", "Deseo", "Acción"]
tipo: ordenar

explicacion: |
  El modelo AIDA guía al consumidor a través de un embudo: primero capta su atención, luego despierta su interés, genera el deseo por el beneficio y finalmente lo empuja a la acción (compra).
```

### 5 — El sesgo de familiaridad
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
respuestas_validas: ["familiaridad"]

explicacion: |
  La familiaridad (o efecto de mera exposición) sugiere que las personas desarrollan una preferencia por las cosas simplemente porque están familiarizadas con ellas.
```