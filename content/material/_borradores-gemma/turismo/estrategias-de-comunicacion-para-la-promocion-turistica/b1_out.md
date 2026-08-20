### 1 — Concepto de Destino Turístico
```
metadata:
  materia: "turismo"
  tema: "estrategias_de_comunicacion_para_la_promocion_turistica"
  nivel: "basico"
  tags: ["definicion", "destino"]

respuesta: "destino"
tipo: completar
respuestas_validas: ["destino"]

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
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Canales tradicionales (medios masivos)", "Canales digitales (redes sociales y web)", "Canales de transporte"]

enunciado: "Si un destino decide utilizar Instagram y Facebook para mostrar sus paisajes, está apostando por un tipo de canal: {datos[idx][0]}."

pasos:
  - "Identificar la plataforma utilizada."
  - "Clasificar la plataforma según su naturaleza tecnológica."

explicacion: |
  Las redes sociales son canales digitales que permiten una segmentación precisa del público objetivo.

variables:
  datos: [["Canales tradicionales (medios masivos)", "Canales tradicionales (medios masivos)"], ["Canales digitales (redes sociales y web)", "Canales digitales (redes sociales y web)"]]
  idx: uno_de([0, 1])
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

respuesta: ["Identidad", "Imagen", "Posicionamiento"]
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
  idx: uno_de([0, 1, 2])

respuesta: mezcla[idx][1]
tipo: mc
opciones_explicitas: ["Publicidad", "Relaciones Públicas", "Promoción de Ventas"]

enunciado: "Si un destino lanza un sorteo de un paquete de viajes para atraer clientes de forma inmediata, está aplicando una estrategia de: {mezcla[idx][0]}."

explicacion: |
  La promoción de ventas busca incentivar la acción de compra mediante beneficios inmediatos o sorteos.

variables:
  mezcla: [["Publicidad", "Publicidad"], ["Relaciones Públicas", "Relaciones Públicas"], ["Promoción de Ventas", "Promoción de Ventas"]]
  idx: uno_de([0, 1, 2])
```