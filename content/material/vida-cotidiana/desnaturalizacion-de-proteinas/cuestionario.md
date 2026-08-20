# Vida Cotidiana — desnaturalizacion de proteinas (cuestionario, 22 preguntas VBLang)

> Tema: `vida-cotidiana/desnaturalizacion-de-proteinas`. Ver `teoria.md` en esta misma carpeta. Generado con qwen/qwen3.6-35b-a3b, cada pregunta validada con parse+lint+compile+generate real de packages/vblang antes de guardarse (revisión pedagógica/semántica manual pendiente).

---

### 1 — pregunta 1

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "basico"
  tags: ["proteinas", "calor", "musculo"]

variables:
  temp_inicial: random(20, 25)
  temp_final: random(70, 85)

respuesta: "desnaturalización"
tipo: completar

enunciado: "Al cocinar carne, las proteínas de las fibras musculares pierden su estructura plegada original al pasar de {temp_inicial}°C a {temp_final}°C. Este proceso se llama ___."

explicacion: |
  La desnaturalización es el despliegue de la cadena proteica por acción del calor, lo que permite que se entrelacen y endurezcan.
```

### 2 — pregunta 2

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "intermedio"
  tags: ["temperatura", "colageno", "rango"]

variables:
  min_temp: random(60, 65)
  max_temp: random(80, 85)

respuesta: "{min_temp}-{max_temp}°C"
tipo: input

enunciado: "El colágeno necesita un rango de temperatura aproximado para gelificar. Si el rango estándar es entre 65°C y 80°C, ¿cuáles son los límites inferior y superior? Escribe el rango."

explicacion: |
  La gelificación del colágeno ocurre eficazmente entre 65°C y 80°C. Fuera de este rango, el proceso es ineficiente o las fibras musculares se endurecen demasiado.
```

### 3 — pregunta 3

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "basico"
  tags: ["cortes", "tecnicas", "lomo"]

variables:
  corte_bajo_colageno: "lomo"
  corte_alto_colageno: "osobuco"

respuesta: "{corte_bajo_colageno}"
tipo: input

enunciado: "Si tenés un corte con poco tejido conectivo como el {corte_bajo_colageno}, ¿qué técnica de cocción es más adecuada: rápida o lenta?"

explicacion: |
  Los cortes con poco colágeno (como el lomo) se benefician de cocción rápida y alta temperatura para evitar que las fibras musculares se endurezcan excesivamente.
```

### 4 — pregunta 4

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "basico"
  tags: ["resultado", "textura", "sequedad"]

variables:
  efecto: "seca y dura"

respuesta: "{efecto}"
tipo: input

enunciado: "Cuanto más tiempo y temperatura se aplica a las fibras musculares, más agua expulsan. Esto hace que la carne quede ___."

explicacion: |
  La coagulación prolongada expulsa la humedad retenida en las fibras, resultando en una textura seca y dura.
```

### 5 — pregunta 5

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "basico"
  tags: ["analogia", "huevo", "proteina"]

variables:
  estado_crudo: "transparente y líquida"
  estado_cocido: "blanca y sólida"

respuesta: "desnaturalización"
tipo: completar

enunciado: "El cambio de la clara de huevo de {estado_crudo} a {estado_cocido} es análogo a la ___ de las proteínas de la carne."

explicacion: |
  Ambos casos ilustran la desnaturalización: las proteínas se despliegan y forman una red sólida al recibir calor.
```

### 6 — pregunta 6

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "intermedio"
  tags: ["cortes", "tecnicas", "osobuco"]

variables:
  corte_alto_colageno: "osobuco"

respuesta: "{corte_alto_colageno}"
tipo: input

enunciado: "Para un corte rico en tejido conectivo como el {corte_alto_colageno}, se requiere cocción lenta y prolongada. ¿Verdadero o Falso?"

explicacion: |
  Verdadero. Se necesita tiempo para que el colágeno se convierta en gelatina, lo cual no ocurre en cocciones rápidas.
```

### 7 — pregunta 7

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "basico"
  tags: ["colageno", "gelatina", "producto"]

respuesta: "gelatina"
tipo: input

enunciado: "El colágeno, al romperse en fragmentos más chicos y disolverse en agua, forma literalmente la misma sustancia que se usa en postres: ___."

explicacion: |
  La gelatina es el resultado de la hidrólisis térmica del colágeno.
```

### 8 — pregunta 8

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "basico"
  tags: ["tejido", "estructura", "colageno"]

respuesta: "colágeno"
tipo: input

enunciado: "El tejido conectivo que rodea y sostiene las fibras musculares está hecho principalmente de ___."

explicacion: |
  El colágeno es el componente principal del tejido conectivo en la carne.
```

### 9 — pregunta 9

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "basico"
  tags: ["musculo", "estructura", "miosina"]

respuesta: "miosina y actina"
tipo: input

enunciado: "Las fibras musculares están hechas de proteínas como la miosina y la ___."

explicacion: |
  La actina y la miosina son las proteínas contráctiles principales en las fibras musculares.
```

### 10 — pregunta 10

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "intermedio"
  tags: ["mecanismo", "colageno", "proceso"]

variables:
  accion: "romper"

respuesta: "romper"
tipo: input

enunciado: "Para que el colágeno se transforme en gelatina, sus cadenas largas deben ser ___ de a poco en fragmentos más chicos."

explicacion: |
  La gelificación implica la ruptura de las cadenas de colágeno, no su coagulación.
```

### 11 — pregunta 11

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "intermedio"
  tags: ["tecnicas", "plancha", "parrilla"]

variables:
  tecnica: "rápida"

respuesta: "{tecnica}"
tipo: input

enunciado: "Para cortes con poco tejido conectivo, la técnica recomendada es de cocción ___ y alta temperatura."

explicacion: |
  La cocción rápida dora la superficie (Maillard) sin dar tiempo a que las fibras internas se endurezcan demasiado.
```

### 12 — pregunta 12

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "intermedio"
  tags: ["tecnicas", "guiso", "lenta"]

variables:
  tecnica: "lenta"

respuesta: "{tecnica}"
tipo: input

enunciado: "Para cortes con mucho tejido conectivo, la técnica recomendada es de cocción ___ y prolongada."

explicacion: |
  La cocción lenta permite que el colágeno se transforme en gelatina antes de que las fibras musculares se vuelvan indigestas.
```

### 13 — pregunta 13

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "intermedio"
  tags: ["textura", "comparacion", "gelatina"]

variables:
  textura_gelatina: "suave"
  textura_colageno: "fibroso y duro"

respuesta: "suave"
tipo: input

enunciado: "El colágeno convertido en gelatina aporta una textura ___ y jugosa, muy distinta de lo fibroso y duro del colágeno crudo."

explicacion: |
  La gelatina da cuerpo y suavidad, mientras que el colágeno crudo es resistente y fibroso.
```

### 14 — pregunta 14

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "basico"
  tags: ["huevo", "proceso", "analogia"]

respuesta: "desnaturalización"
tipo: input

enunciado: "El proceso que hace que la clara de huevo pase de líquida a sólida se llama ___."

explicacion: |
  Es el mismo principio físico-químico que afecta a las proteínas de la carne.
```

### 15 — pregunta 15

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "intermedio"
  tags: ["error", "tecnicas", "consecuencia"]

variables:
  consecuencia: "dura"

respuesta: "{consecuencia}"
tipo: input

enunciado: "Si se cocina rápido y fuerte un corte con mucho colágeno, las fibras musculares se endurecen mucho antes de que el colágeno se ablande, dejando la carne muy ___."

explicacion: |
  La cocción rápida no da tiempo a la gelificación, resultando en una textura dura e indeseable.
```

### 16 — pregunta 16

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "basico"
  tags: ["quimica", "gelatina", "colageno"]

respuesta: "colágeno"
tipo: input

enunciado: "La gelatina que se usa en postres proviene de la transformación del ___."

explicacion: |
  La gelatina es colágeno hidrolizado.
```

### 17 — pregunta 17

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "basico"
  tags: ["estructura", "proteinas", "plegada"]

respuesta: "plegada y enrollada"
tipo: input

enunciado: "En crudo, las proteínas de las fibras musculares tienen una forma ___."

explicacion: |
  La estructura nativa de las proteínas musculares es compacta y enrollada.
```

### 18 — pregunta 18

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "basico"
  tags: ["estructura", "proteinas", "entrelazada"]

respuesta: "rígida"
tipo: input

enunciado: "Al desnaturalizarse, las cadenas de proteínas musculares se entrelazan formando una estructura nueva y ___."

explicacion: |
  El entrelazamiento crea una red rígida que expulsa agua.
```

### 19 — pregunta 19

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "basico"
  tags: ["ejemplos", "cortes", "lomo"]

respuesta: "lomo"
tipo: input

enunciado: "Un ejemplo clásico de corte con poco tejido conectivo es el ___."

explicacion: |
  El lomo es una zona de poco uso muscular y bajo contenido de colágeno.
```

### 20 — pregunta 20

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "basico"
  tags: ["ejemplos", "cortes", "osobuco"]

respuesta: "osobuco"
tipo: input

enunciado: "Un ejemplo clásico de corte con mucho tejido conectivo es el ___."

explicacion: |
  El osobuco (o rabo, paleta) tiene mucho tejido conectivo que requiere cocción lenta.
```

### 21 — pregunta 21

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "basico"
  tags: ["relacion", "tiempo", "dureza"]

variables:
  relacion: "positiva"

respuesta: "positiva"
tipo: input

enunciado: "Existe una relación ___ entre el tiempo de cocción a alta temperatura y la dureza de las fibras musculares."

explicacion: |
  Más tiempo implica más endurecimiento y pérdida de jugosidad en las fibras.
```

### 22 — pregunta 22

```
metadata:
  materia: "vida-cotidiana"
  tema: "desnaturalizacion_de_proteinas"
  nivel: "avanzado"
  tags: ["resumen", "procesos", "dualidad"]

variables:
  proceso1: "coagulación"
  proceso2: "gelificación"

respuesta: "coagulación y gelificación"
tipo: input

enunciado: "Al cocinar carne, ocurren simultáneamente dos procesos principales: la ___ de las fibras musculares y la ___ del colágeno."

explicacion: |
  Ambos procesos ocurren al mismo tiempo, pero tienen requisitos de tiempo y temperatura diferentes.
```
