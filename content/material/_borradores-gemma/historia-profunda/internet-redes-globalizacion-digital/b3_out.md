### 1 — El impacto de la comunicación instantánea
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "basico"
  tags: ["comunicacion", "globalizacion"]

respuesta: "instantánea"
tipo: completar
respuestas_validas: ["instantánea", "inmediata"]

enunciado: "La transición de la comunicación analógica a la digital permitió que la transmisión de información entre continentes fuera de carácter ___________."

explicacion: |
  Internet eliminó las barreras temporales, permitiendo la comunicación en tiempo real, lo que es un pilar de la globalización moderna.
```

### 2 — El auge del comercio electrónico
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["comercio", "economia"]

variables:
  escenario: uno_de([
    ["Amazon", "gigante del retail"],
    ["Alibaba", "líder en B2B"],
    ["eBay", "pionero de subastas"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Amazon", "Alibaba", "eBay"]

enunciado: "El comercio electrónico permitió que empresas como {escenario[1]} facilitaran el acceso a mercados globales, transformando la economía mundial."

explicacion: |
  El e-commerce permitió que pequeñas y grandes empresas vendieran productos sin fronteras físicas, acelerando la integración de mercados.
```

### 3 — Redes sociales y tejido social global
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["redes_sociales", "sociedad"]

respuesta: "social"
tipo: mc
opciones_explicitas: ["social", "política", "económica"]

enunciado: "Más allá de lo comercial, las redes sociales crearon una nueva dimensión de interconexión de tipo ___________, permitiendo movimientos culturales transnacionales."

explicacion: |
  Las redes sociales permitieron que la cultura y las ideas se difundieran globalmente de forma orgánica, creando una identidad digital compartida.
```

### 4 — Etapas de la digitalización económica
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "avanzado"
  tags: ["procesos", "digitalizacion"]

respuesta: ["Conectividad", "Plataformas", "Ecosistemas"]
tipo: ordenar
opciones_explicitas: ["Conectividad", "Plataformas", "Ecosistemas"]

enunciado: "Ordena cronológicamente la evolución de la digitalización en la globalización: primero la infraestructura, luego los servicios y finalmente la integración total."

explicacion: |
  La globalización digital siguió un orden: primero cables y satélites (conectividad), luego sitios web y apps (plataformas) y finalmente la integración de la vida cotidiana en la red (ecosistemas).
```

### 5 — El efecto de la reducción de costos de información
```
metadata:
  materia: "historia_profunda"
  tema: "internet_redes_globalizacion_digital"
  nivel: "intermedio"
  tags: ["economia", "costos"]

respuesta: "cero"
tipo: input
tolerancia_abs: 0

enunciado: "En términos teóricos de economía digital, la capacidad de replicar y transmitir información a través de internet ha tendido hacia un costo marginal de ___________."

explicacion: |
  La digitalización reduce drásticamente el costo de distribución de información, lo que permite que la globalización sea extremadamente eficiente.
```