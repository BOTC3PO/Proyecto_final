### 1 — Diferencia entre Branding y Publicidad
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

### 2 — Marketing de Destinos vs. Marketing de Producto
```
metadata:
  materia: "turismo"
  tema: "marketing_de_destinos_vs_producto"
  nivel: "avanzado"
  tags: ["estrategia", "marketing_de_destinos"]

variables:
  es_destino_completo: true

respuesta: es_destino_completo
tipo: "vf"

enunciado: "A diferencia del marketing de un producto individual (como un hotel), el marketing de un destino debe gestionar la percepción de un territorio complejo que incluye factores sociales, ambientales y culturales que la marca no controla totalmente."

explicacion: |
  Correcto. El marketing de destinos es mucho más complejo porque el "producto" es un territorio con múltiples stakeholders (gobierno, residentes, empresas) que no siempre actúan de forma coordinada.
```

### 3 — Canales de Comunicación: Tradicional vs. Digital
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

### 4 — El proceso de posicionamiento
```
metadata:
  materia: "turismo"
  tema: "posicionamiento_en_la_mente"
  nivel: "intermedio"
  tags: ["posicionamiento", "mente_consumidor"]

respuesta: ["Identificación del público", "Definición de la ventaja competitiva", "Diseño de la mezcla de comunicación", "Ejecución de la campaña"]
tipo: "ordenar"
opciones_explicitas: ["Identificación del público", "Definición de la ventaja competitiva", "Diseño de la mezcla de comunicación", "Ejecución de la campaña"]

enunciado: "Para que una estrategia de comunicación sea efectiva, se deben seguir estos pasos lógicos para posicionar un destino:"

explicacion: |
  No se puede comunicar un mensaje sin antes saber a quién se le habla (público) y qué nos hace únicos (ventaja competitiva).
```

### 5 — Comunicación de Crisis vs. Promoción
```
metadata:
  materia: "turismo"
  tema: "gestion_de_crisis"
  nivel: "avanzado"
  tags: ["crisis", "comunicacion_turistica"]

respuesta: "gestión de crisis"
tipo: "completar"
respuestas_validas: ["gestión de crisis", "gestión de crisis"]

enunciado: "Mientras que la promoción turística busca atraer flujo de visitantes, la ___ busca mitigar los efectos negativos de un evento inesperado (desastre natural, inseguridad) sobre la imagen del destino."

explicacion: |
  La comunicación de crisis es reactiva y orientada a la reputación y la seguridad, mientras que la promoción es proactiva y orientada a la demanda.
```