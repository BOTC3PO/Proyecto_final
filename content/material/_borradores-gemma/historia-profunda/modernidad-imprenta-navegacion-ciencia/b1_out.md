### 1 — El impacto de la imprenta
```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["gutenberg", "imprenta", "difusion"]

tipo: mc
opciones_explicitas: ["Producción manual de monjes", "Difusión masiva de ideas y textos", "Limitación del conocimiento a la élite", "Desaparición del uso de la escritura"]

enunciado: "Antes de la invención de la imprenta de tipos móviles por Johannes Gutenberg hacia 1450, la difusión de conocimientos estaba limitada principalmente por la ___."

respuesta: "Producción manual de monjes"

explicacion: |
  La imprenta permitió la producción en serie de libros, rompiendo el monopolio de los escribas y monjes que copiaban manuscritos a mano, lo que aceleró la difusión de ideas durante el Renacimiento.
```

### 2 — La revolución de la información
```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["revolucion_cientifica", "imprenta"]

variables:
  escenario: uno_de([["La imprenta permitió la estandarización de textos y mapas.", "La imprenta fomentó el análisis crítico y la alfabetización."], ["La imprenta dificultó la comunicación científica.", "La imprenta centralizó el conocimiento en la Iglesia."]])
  idx: uno_de([0, 1])

tipo: mc
opciones_explicitas: ["Estandarización y alfabetización", "Centralización del saber", "Aislamiento de las ideas"]

enunciado: "{escenario[idx]}"

respuesta: "Estandarización y alfabetización"

explicacion: |
  Al poder imprimir múltiples copias idénticas, se eliminaron los errores de transcripción manual, permitiendo que científicos de distintos lugares trabajaran sobre los mismos datos y diagramas.
```

### 3 — Evolución de la producción de libros
```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "intermedio"
  tags: ["procesos", "historia"]

tipo: ordenar
opciones_explicitas: ["Manuscritos copiados a mano", "Imprenta de tipos móviles", "Producción industrial de libros"]

enunciado: "Ordena cronológicamente los métodos de producción de libros desde la Edad Media hasta la era moderna:"

respuesta: ["Manuscritos copiados a mano", "Imprenta de tipos móviles", "Producción industrial de libros"]

explicacion: |
  La secuencia muestra la transición desde el trabajo manual intensivo (monjes), pasando por la revolución de Gutenberg, hasta la producción mecánica masiva.
```

### 4 — Consecuencias sociales
```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "avanzado"
  tags: ["reforma_protestante", "imprenta"]

tipo: completar
respuestas_validas: ["Protestante", "Católica"]

enunciado: "La capacidad de imprimir la Biblia en lenguas vernáculas (como el alemán) fue un factor clave para el éxito de la Reforma ___."

respuesta: "Protestante"

explicacion: |
  La imprenta permitió que las ideas de Lutero y la traducción de las escrituras llegaran a un público mucho más amplio, desafiando la autoridad de la Iglesia Católica.
```

### 5 — El costo de la información
```
metadata:
  materia: "historia"
  tema: "modernidad_imprenta_navegacion_ciencia"
  nivel: "basico"
  tags: ["economia_del_libro"]

tipo: input
tolerancia_abs: 0

enunciado: "Si un monje tardaba meses en copiar un libro y la imprenta permitía producir 100 ejemplares en el mismo tiempo, la producción aumentó en un factor de ___ (indica el número)."

respuesta: 100

explicacion: |
  La eficiencia de la imprenta de tipos móviles fue exponencial comparada con la copia manual, reduciendo drásticamente el costo y el tiempo de obtención de información.
```