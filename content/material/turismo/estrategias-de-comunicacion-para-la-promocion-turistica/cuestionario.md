# Turismo — Estrategias de comunicacion para la promocion turistica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Destino Turístico

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion_para_la_promocion_turistica"
  nivel: "basico"
  tags: ["definicion", "destino"]

respuesta: "destino"
tipo: completar
respuestas_validas:
  - "destino"

enunciado: "El espacio geográfico que se promociona para atraer visitantes, con una oferta de servicios y atractivos, se denomina ___ turístico."

explicacion: |
  Un destino turístico es el lugar físico y la experiencia que se intenta vender mediante las estrategias de comunicación.
```

### 2 — Canales de Comunicación

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion_para_la_promocion_turistica"
  nivel: "basico"
  tags: ["canales", "comunicacion"]

variables:
  datos: [["Canales tradicionales (medios masivos)", "Canales tradicionales (medios masivos)"], ["Canales digitales (redes sociales y web)", "Canales digitales (redes sociales y web)"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Canales tradicionales (medios masivos)", "Canales digitales (redes sociales y web)", "Canales de transporte"]

enunciado: "Si un destino decide utilizar Instagram y Facebook para mostrar sus paisajes, está apostando por un tipo de canal: {datos[idx][0]}."

pasos:
  - "Identificar la plataforma utilizada."
  - "Clasificar la plataforma según su naturaleza tecnológica."

explicacion: |
  Las redes sociales son canales digitales que permiten una segmentación precisa del público objetivo.
```

### 3 — Verdad o Falso: Segmentación

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion_para_la_promocion_turistica"
  nivel: "basico"
  tags: ["segmentacion", "estrategia"]

respuesta: verdadero

tipo: vf

enunciado: "La segmentación de mercado consiste en dividir el mercado total en grupos más pequeños con necesidades y características similares para personalizar la comunicación."

explicacion: |
  Efectivamente, segmentar permite que el mensaje llegue a la persona adecuada (ej. turismo de aventura vs. turismo de lujo).
```

### 4 — Elementos de la Marca Destino

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion_para_la_promocion_turistica"
  nivel: "intermedio"
  tags: ["branding", "marca"]

respuesta_orden: ["Identidad", "Imagen", "Posicionamiento"]
tipo: ordenar

opciones_explicitas: ["Identidad", "Imagen", "Posicionamiento"]

enunciado: "Ordene los conceptos según el proceso lógico de construcción de una marca de destino: desde lo que la marca es, pasando por la percepción del público, hasta el lugar que ocupa en la mente del consumidor."

explicacion: |
  Primero se crea la identidad (lo que la marca proyecta), luego se genera la imagen (lo que el turista percibe) y finalmente se logra el posicionamiento (el lugar mental que ocupa).
```

### 5 — El Mix de Comunicación

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion_para_la_promocion_turistica"
  nivel: "basico"
  tags: ["mix", "comunicacion"]

variables:
  mezcla: [["Publicidad", "Publicidad"], ["Relaciones Públicas", "Relaciones Públicas"], ["Promoción de Ventas", "Promoción de Ventas"]]
  idx: uno_de([0, 1, 2])

respuesta: mezcla[idx][1]
tipo: mc
opciones_explicitas: ["Publicidad", "Relaciones Públicas", "Promoción de Ventas"]

enunciado: "Si un destino lanza un sorteo de un paquete de viajes para atraer clientes de forma inmediata, está aplicando una estrategia de: {mezcla[idx][0]}."

explicacion: |
  La promoción de ventas busca incentivar la acción de compra mediante beneficios inmediatos o sorteos.
```

### 6 — El Mix de Medios en el Destino "Costa Azul"

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "intermedio"
  tags: ["mix_de_medios", "promocion"]

variables:
  escenario: uno_de([["Instagram", "Influencers", "Visual"], ["Radio local", "Pautas en radio", "Auditivo"], ["Email Marketing", "Newsletter", "Directo"]])

enunciado: "Un destino busca captar público joven mediante una estrategia de redes sociales utilizando {escenario[0]} a través de {escenario[1]} para lograr un impacto {escenario[2]}."

respuesta: escenario[2]
tipo: mc
opciones_explicitas: ["Visual", "Auditivo", "Directo"]

explicacion: |
  La elección del canal determina el tipo de estímulo: Instagram es visual, la radio es auditiva y el email es comunicación directa.
```

### 7 — Secuencia de una Campaña de Branding

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "avanzado"
  tags: ["branding", "fases"]

enunciado: "Para promocionar un nuevo destino emergente, se debe seguir un orden lógico de comunicación para construir el posicionamiento. Ordene las siguientes fases:"

opciones_explicitas: ["Reconocimiento", "Consideración", "Conversión"]
respuesta_orden: ["Reconocimiento", "Consideración", "Conversión"]
tipo: ordenar

explicacion: |
  Primero se debe crear conciencia (Reconocimiento), luego el turista evalúa la opción (Consideración) y finalmente realiza la reserva (Conversión).
```

### 8 — Verdad o Falso: Segmentación de Audiencias

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "basico"
  tags: ["segmentacion", "audiencia"]

variables:
  caso_segmentacion: uno_de([["turismo_de_aventura", "jovenes"], ["turismo_gastronomico", "adultos"], ["turismo_religioso", "seniors"]])

enunciado: "Si aplicamos una estrategia de comunicación para {caso_segmentacion[0]}, el público objetivo principal será compuesto por {caso_segmentacion[1]}. ¿Es esto correcto?"

respuesta: verdadero
tipo: vf

explicacion: |
  La segmentación permite dirigir el mensaje al perfil demográfico o psicográfico que tiene mayor probabilidad de interés en el producto turístico.
```

### 9 — El Concepto de USP (Unique Selling Proposition)

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "intermedio"
  tags: ["propuesta_valor", "marketing"]

enunciado: "Un destino que se promociona destacando que es 'el único lugar con playas de arena negra en la región' está utilizando una estrategia basada en su ___."

respuestas_validas:
  - "Propuesta Única de Venta"
tipo: completar

explicacion: |
  La Propuesta Única de Venta (USP) se enfoca en un atributo diferenciador que la competencia no posee, facilitando la decisión de compra.
```

### 10 — Presupuesto de Pauta Digital

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "avanzado"
  tags: ["presupuesto", "roi"]

variables:
  datos: [[1000, 50], [2500, 120], [5000, 300]]
  idx: uno_de([0, 1, 2])

enunciado: "Si un destino invierte {datos[idx][0]} USD en una campaña de Google Ads y obtiene {datos[idx][1]} reservas directas, el costo por reserva (CPA) es de ___ USD."

pasos:
  - "Dividir el presupuesto total invertido por la cantidad de reservas obtenidas."

respuesta: redondear(datos[idx][0] / datos[idx][1], 2)
tipo: completar
tolerancia_abs: 0.01

explicacion: |
  El cálculo del Costo por Adquisición (CPA) es vital para medir la eficiencia de la inversión publicitaria en el sector turístico.
```

### 11 — El mito del alcance masivo

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion_para_la_promocion_turistica"
  nivel: "basico"
  tags: ["marketing_turistico", "segmentacion"]

respuesta: "segmentacion"
tipo: "completar"
respuestas_validas:
  - "segmentacion"

enunciado: "Un error común en la promoción de un destino es creer que la comunicación debe dirigirse a todo el mundo. Para que una estrategia sea efectiva, se debe realizar una correcta _________ para llegar al público objetivo."

explicacion: |
  Promover un destino para 'todo el mundo' suele desperdiciar presupuesto. La segmentación permite dirigir mensajes específicos a nichos con intereses afines (ej. turismo de aventura vs. turismo de lujo).
```

### 12 — Comunicación vs. Promoción

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion_para_la_promocion_turistica"
  nivel: "intermedio"
  tags: ["conceptos_clave", "marketing"]

opciones_explicitas: ["La comunicación es solo publicidad pagada", "La comunicación incluye la gestión de la imagen y reputación", "La comunicación es solo el uso de redes sociales", "La comunicación no tiene relación con el destino"]

respuesta: "La comunicación incluye la gestión de la imagen y reputación"
tipo: "mc"

enunciado: "En el marketing de destinos, existe la confusión de que la comunicación se limita únicamente a la publicidad pagada (anuncios). ¿Cuál es la premisa correcta?"

explicacion: |
  La comunicación turística es integral: abarca desde la identidad visual y el storytelling hasta la gestión de crisis y la experiencia del visitante en el destino.
```

### 13 — El orden de la estrategia

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comocacion_para_la_promocion_turistica"
  nivel: "intermedio"
  tags: ["planificacion", "metodologia"]

tipo: ordenar

opciones_explicitas: ["Definir el público objetivo", "Elegir los canales de difusión", "Crear el mensaje creativo", "Lanzar la campaña"]

respuesta_orden: ["Definir el público objetivo", "Elegir los canales de difusión", "Crear el mensaje creativo", "Lanzar la campaña"]

enunciado: "Para evitar errores de inversión en la promoción de un destino, se debe seguir un orden lógico en la planificación estratégica. Ordene los siguientes pasos:"

explicacion: |
  No se puede elegir un canal (Instagram, radio, folletos) ni un mensaje sin saber primero a quién nos dirigimos (segmentación).
```

### 14 — Veracidad en la promoción

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comocacion_para_la_promocion_turistica"
  nivel: "basico"
  tags: ["etica", "reputacion"]

respuesta: falso
tipo: "vf"

enunciado: "Una estrategia de comunicación basada en exagerar las cualidades de un destino (sobrepromoción) es sostenible a largo plazo porque garantiza la satisfacción del turista."

explicacion: |
  La sobrepromoción genera una brecha entre la expectativa y la realidad, lo que resulta en malas reseñas y daño a la reputación del destino.
```

### 15 — El rol de los influencers

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comocacion_para_la_promocion_turistica"
  nivel: "avanzado"
  tags: ["canales_digitales", "influencer_marketing"]

variables:
  datos: [["alcance masivo pero poco engagement", "engagement alto pero nicho muy pequeño"], ["poca conversión", "alta conversión"]]
  idx: uno_de([0, 1])
  opcion_correcta: datos[idx][0]

respuesta: "engagement alto pero nicho muy pequeño"
tipo: "mc"

opciones_explicitas: ["alcance masivo pero poco engagement", "engagement alto pero nicho muy pequeño"]

enunciado: "Al contratar influencers para promocionar un destino, un error común es elegir solo por el número de seguidores. Si un destino busca un impacto real en un nicho específico, el riesgo de elegir un perfil con {opcion_correcta} es alto."

explicacion: |
  El éxito de la comunicación turística digital no reside solo en el alcance (cantidad de personas), sino en la relevancia y la interacción (engagement) con el público que realmente puede viajar al destino.
```

### 16 — Diferencia entre Branding y Publicidad

```
metadata:
  materia: "turismo"
  tema: "branding_vs_publicidad"
  nivel: "intermedio"
  tags: ["comunicacion", "branding", "marketing_turistico"]

respuesta: "branding"
tipo: "mc"
opciones_explicitas: ["branding", "publicidad", "relaciones_publicas", "promocion_de_ventas"]

enunciado: "Mientras que la publicidad busca generar una respuesta inmediata de compra o visita, el proceso de construcción de la identidad, valores y la promesa de valor de un destino se conoce como ___."

explicacion: |
  El branding es una estrategia a largo plazo centrada en la percepción y la identidad del destino, mientras que la publicidad es una herramienta táctica para comunicar mensajes específicos en un momento dado.
```

### 17 — Marketing de Destinos vs. Marketing de Producto

```
metadata:
  materia: "turismo"
  tema: "marketing_de_destinos_vs_producto"
  nivel: "avanzado"
  tags: ["estrategia", "marketing_de_destinos"]

variables:
  es_destino_completo: verdadero

respuesta: es_destino_completo
tipo: "vf"

enunciado: "A diferencia del marketing de un producto individual (como un hotel), el marketing de un destino debe gestionar la percepción de un territorio complejo que incluye factores sociales, ambientales y culturales que la marca no controla totalmente."

explicacion: |
  Correcto. El marketing de destinos es mucho más complejo porque el "producto" es un territorio con múltiples stakeholders (gobierno, residentes, empresas) que no siempre actúan de forma coordinada.
```

### 18 — Canales de Comunicación: Tradicional vs. Digital

```
metadata:
  materia: "turismo"
  tema: "canales_comunicacion"
  nivel: "basico"
  tags: ["canales", "digital", "tradicional"]

variables:
  escenario: uno_de([["Instagram", "Redes Sociales"], ["Folletos", "Medios Impresos"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["Redes Sociales", "Medios Impresos"]

enunciado: "Si un destino busca interactuar directamente con el turista mediante contenido generado por el usuario (UGC) y segmentación algorítmica, está priorizando las ___ sobre los medios tradicionales."

explicacion: |
  Las redes sociales permiten una bidireccionalidad y una segmentación que los medios impresos tradicionales no pueden ofrecer con la misma precisión.
```

### 19 — El proceso de posicionamiento

```
metadata:
  materia: "turismo"
  tema: "posicionamiento_en_la_mente"
  nivel: "intermedio"
  tags: ["posicionamiento", "mente_consumidor"]

tipo: ordenar
opciones_explicitas: ["Identificación del público", "Definición de la ventaja competitiva", "Diseño de la mezcla de comunicación", "Ejecución de la campaña"]
respuesta_orden: ["Identificación del público", "Definición de la ventaja competitiva", "Diseño de la mezcla de comunicación", "Ejecución de la campaña"]

enunciado: "Para que una estrategia de comunicación sea efectiva, se deben seguir estos pasos lógicos para posicionar un destino:"

explicacion: |
  No se puede comunicar un mensaje sin antes saber a quién se le habla (público) y qué nos hace únicos (ventaja competitiva).
```

### 20 — Comunicación de Crisis vs. Promoción

```
metadata:
  materia: "turismo"
  tema: "gestion_de_crisis"
  nivel: "avanzado"
  tags: ["crisis", "comunicacion_turistica"]

respuesta: "gestión de crisis"
tipo: "completar"
respuestas_validas:
  - "gestión de crisis"
  - "gestión de crisis"

enunciado: "Mientras que la promoción turística busca atraer flujo de visitantes, la ___ busca mitigar los efectos negativos de un evento inesperado (desastre natural, inseguridad) sobre la imagen del destino."

explicacion: |
  La comunicación de crisis es reactiva y orientada a la reputación y la seguridad, mientras que la promoción es proactiva y orientada a la demanda.
```

### 21 — El canal de difusión ideal

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "basico"
  tags: ["canales", "promocion"]

variables:
  datos: [["un destino de lujo para parejas", "Instagram"], ["un parque nacional para mochileros", "TikTok"], ["un centro cultural para adultos mayores", "Facebook"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Instagram", "TikTok", "Facebook"]

enunciado: "Un destino turístico busca atraer a un perfil de viajero específico. Si el objetivo es promocionar {datos[idx][0]}, ¿cuál es la red social más adecuada para su estrategia de comunicación?"

explicacion: |
  La elección del canal depende del segmento de mercado. Instagram es visual y estético (ideal para lujo/parejas), TikTok es dinámico y rápido (ideal para jóvenes/mochileros) y Facebook permite segmentación detallada para públicos de mayor edad.
```

### 22 — El concepto de Branding Destino

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "intermedio"
  tags: ["branding", "identidad"]

variables:
  datos: [["un eslogan que resalta la gastronomía local", "Identidad"], ["un logo con colores de la naturaleza", "Identidad"], ["una campaña de influencers", "Promoción"]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "En el caso de {datos[idx][0]}, estamos trabajando principalmente sobre la ________ del marca-destino."

pasos:
  - "Identificar si el elemento pertenece al núcleo de identidad o a la acción de difusión."

explicacion: |
  La identidad define 'quién es' el destino (valores, símbolos, eslogan), mientras que la promoción es el acto de comunicarlo para atraer visitantes.
```

### 23 — El proceso de una campaña integral

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "avanzado"
  tags: ["planificacion", "pasos"]

respuesta_orden: ["Investigación de mercado", "Definición de objetivos", "Selección de canales", "Ejecución de la campaña"]
tipo: ordenar
opciones_explicitas: ["Investigación de mercado", "Definición de objetivos", "Selección de canales", "Ejecución de la campaña"]

enunciado: "Para lanzar una estrategia de promoción turística exitosa, se deben seguir las fases del proceso de comunicación en el orden correcto."

explicacion: |
  No se pueden elegir canales sin conocer el mercado ni tener objetivos claros. El orden lógico es: 1. Diagnóstico/Investigación, 2. Planificación/Objetivos, 3. Mix de medios/Canales y 4. Implementación/Ejecución.
```

### 24 — El impacto de la comunicación digital

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "basico"
  tags: ["digital", "engagement"]

variables:
  datos: [["un destino que recibe comentarios positivos en TripAdvisor", verdadero], ["un destino con fotos de baja calidad en su web", falso]]
  idx: uno_de([0, 1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Si un destino cuenta con una gestión activa de la reputación online y recibe comentarios positivos en plataformas de reseñas como TripAdvisor, ¿se considera que su estrategia de comunicación digital está funcionando positivamente? ___"

explicacion: |
  La reputación online es un pilar de la comunicación moderna. El feedback positivo de los usuarios actúa como validación social para futuros turistas.
```

### 25 — El mensaje de marca

```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion"
  nivel: "intermedio"
  tags: ["mensaje", "segmentacion"]

variables:
  datos: [["'Aventura extrema y adrenalina'", "Aventureros"], ["'Relajación y paz absoluta'", "Wellness"], ["'Cultura y tradición viva'", "Cultural"]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar

enunciado: "Si el mensaje principal de una campaña es: \"{datos[idx][0]}\", el segmento de mercado objetivo es el de tipo ________."

pasos:
  - "Analizar el concepto clave del mensaje."
  - "Relacionar el concepto con el perfil de viajero correspondiente."

explicacion: |
  La segmentación requiere que el mensaje sea coherente con las necesidades del público objetivo. Un mensaje de adrenalina busca perfiles activos, mientras que uno de paz busca perfiles de descanso o bienestar.
```
