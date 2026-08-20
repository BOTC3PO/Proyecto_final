### 1 — La transición del cobre
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["prehistoria", "metales"]

respuesta: "Cobre"
tipo: completar
respuestas_validas: ["Cobre"]

enunciado: "La primera etapa de la Edad de los Metales, caracterizada por el uso de metales nativos y la posterior fundición de aleaciones simples, es la Edad del ___."

explicacion: |
  La Edad del Cobre (Calcolítico) precede a la Edad del Bronce.
```

### 2 — El componente del bronce
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["metalurgia", "aleaciones"]

opciones_explicitas: ["Estaño", "Zinc", "Níquel", "Plomo"]
respuesta: "Estaño"
tipo: mc

enunciado: "El bronce es una aleación metálica compuesta principalmente por cobre y un segundo elemento clave, que es el {elemento}."

variables:
  elemento: "uno_de(['Estaño', 'Zinc', 'Níquel', 'Plomo'])"

explicacion: |
  El bronce se obtiene al fundir cobre con estaño, lo que permite obtener un metal más duro y resistente.
```

### 3 — Cronología de las edades
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["cronologia", "edades"]

opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]
respuesta: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]
tipo: ordenar

enunciado: "Ordena cronológicamente las edades de los metales, desde la más antigua hasta la más reciente."

explicacion: |
  El orden correcto es Cobre (Calcolítico), Bronce (Aleación) e Hierro (Metal más duro y abundante).
```

### 4 — El predominio del hierro
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["tecnologia", "hierro"]

variables:
  es_hierro: uno_de([verdadero, falso])

respuesta: "Edad del Hierro"
tipo: mc
opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

enunciado: "La etapa que se caracteriza por la aparición de herramientas y armas mucho más resistentes y duraderas debido a la alta temperatura necesaria para su fundición es la {era}."

variables:
  era: "if(es_hierro, 'Edad del Hierro', 'Edad del Cobre')"

explicacion: |
  El hierro requiere temperaturas de fundición mucho más elevadas que el cobre o el bronce, marcando un salto tecnológico importante.
```

### 5 — Identificación de la aleación
```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["metalurgia"]

respuesta: 2
tipo: mc
opciones_explicitas: ["Cobre puro", "Bronce", "Acero"]

enunciado: "Si un metaloide es una mezcla de cobre y estaño, estamos hablando de la Edad del ___."

explicacion: |
  La aleación de cobre y estaño define la Edad del Bronce.
```