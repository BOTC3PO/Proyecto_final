# Lengua — Negociación (cuestionario, 20 preguntas VBLang)

> Tema: `COM3`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Objetivo de la negociación

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "basico"
  tags: ["negociacion", "objetivo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El objetivo de la negociación es llegar a un acuerdo que ambas partes puedan aceptar, no que una parte \"gane\" y la otra \"pierda\"."

pasos:
  - "Ver `../debate-refutar-en-vivo/`: es un cambio de objetivo respecto de ese tema anterior."

explicacion: |
  Verdadero: es la diferencia central entre negociación y debate.
```

### 2 — Identificar la posición

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["posicion"]

variables:
  n: uno_de([1, 1])

respuesta: "posición"
tipo: mc
opciones_explicitas: ["posición", "interés"]

enunciado: "\"Quiero que el precio sea 100\" (lo que cada parte dice que quiere) es un ejemplo de..."

pasos:
  - "Es la afirmación explícita que se declara al inicio de una negociación."

explicacion: |
  La posición es lo que cada parte dice explícitamente que quiere.
```

### 3 — Identificar el interés

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["interes"]

variables:
  n: uno_de([1, 1])

respuesta: "interés"
tipo: mc
opciones_explicitas: ["posición", "interés"]

enunciado: "\"Necesito cubrir mis costos y tener algo de ganancia\" (la razón real detrás de pedir 100) es un ejemplo de..."

pasos:
  - "Es la motivación de fondo detrás de la posición declarada."

explicacion: |
  El interés es la razón real que motiva la posición declarada.
```

### 4 — Distinguir posición de interés es la clave de la negociación

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["posicion", "interes", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Negociar bien significa indagar los intereses reales detrás de las posiciones declaradas, no sólo pelear por las posiciones en sí."

pasos:
  - "Dos posiciones pueden parecer irreconciliables mientras que los intereses de fondo podrían resolverse de otra forma."

explicacion: |
  Verdadero: es la distinción central que organiza todo el tema de
  negociación.
```

### 5 — El ejemplo de la naranja

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["ejemplo_de_la_naranja"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En el ejemplo clásico de la naranja, si dos personas quieren la misma naranja entera pero una necesita sólo el jugo y la otra sólo la cáscara, ambas pueden obtener el 100% de lo que realmente necesitaban al indagar sus intereses."

pasos:
  - "Negociar sólo por posición (partir la naranja a la mitad) da un resultado peor que indagar los intereses de fondo."

explicacion: |
  Verdadero: es el ejemplo clásico que ilustra por qué distinguir
  posición de interés puede mejorar mucho el resultado de un acuerdo.
```

### 6 — Escuchar antes de proponer

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["estrategias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una estrategia central de negociación es entender el interés real de la otra parte antes de ofrecer una solución, en vez de asumir que ya se sabe qué quiere."

pasos:
  - "Es una de las estrategias centrales descritas en la teoría."

explicacion: |
  Verdadero: escuchar antes de proponer evita ofrecer soluciones que
  no responden al interés real del otro.
```

### 7 — Buscar opciones de beneficio mutuo

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["estrategias", "beneficio_mutuo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Otra estrategia central es explorar formas de \"agrandar la torta\" (agregar variables al trato) antes de simplemente dividir un recurso fijo entre las partes."

pasos:
  - "Es otra de las estrategias centrales descritas en la teoría."

explicacion: |
  Verdadero: buscar beneficio mutuo suele dar mejores resultados que
  dividir un recurso fijo sin más.
```

### 8 — Definir el límite propio de antemano

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["estrategias", "limite_propio"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Saber hasta dónde se está dispuesto a ceder, antes de sentarse a negociar, evita ceder de más bajo presión del momento."

pasos:
  - "Es otra de las estrategias centrales descritas en la teoría."

explicacion: |
  Verdadero: definir el propio límite con anticipación protege de
  decisiones apresuradas durante la negociación.
```

### 9 — Mantener la relación, no sólo el resultado puntual

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["estrategias", "relacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En negociaciones donde las partes van a seguir interactuando (compañeros de trabajo, familia), un acuerdo logrado a costa de dañar la relación puede salir caro a largo plazo."

pasos:
  - "Es otra de las estrategias centrales descritas en la teoría, sobre todo relevante en relaciones continuas."

explicacion: |
  Verdadero: la calidad de la relación es un factor a considerar,
  además del resultado puntual del acuerdo.
```

### 10 — No toda diferencia se resuelve negociando

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "avanzado"
  tags: ["limites_de_la_negociacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Hay principios o decisiones que no admiten un \"punto medio\" razonable, como la seguridad de alguien: no toda diferencia se resuelve negociando."

pasos:
  - "Reconocer esta diferencia es parte de saber cuándo aplicar la herramienta de negociación y cuándo no corresponde."

explicacion: |
  Verdadero: es un matiz importante sobre los límites de aplicación
  de esta herramienta.
```

### 11 — Negociar no significa ceder en todo

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["negociacion", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Negociar bien significa siempre ceder en la mayor cantidad posible de puntos para llegar rápido a un acuerdo, sin importar el propio límite."

pasos:
  - "Definir el límite propio de antemano es justamente la estrategia para evitar ceder de más sin criterio."

explicacion: |
  Falso: negociar bien implica encontrar un acuerdo sostenible para
  ambas partes, no ceder sin límite.
```

### 12 — Clasificar posición vs. interés en un ejemplo

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["posicion", "interes", "practica"]

variables:
  afirmaciones: ["Quiero trabajar desde casa todos los días", "Necesito tener flexibilidad para cuidar a mi familia"]
  tipos: ["posición", "interés"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["posición", "interés"]

enunciado: "\"{afirmaciones[idx]}\" es un ejemplo de..."

pasos:
  - "La posición es lo que se pide explícitamente; el interés es la razón de fondo detrás de ese pedido."

explicacion: |
  Distinguir posición de interés en un caso concreto es la aplicación
  central de este tema.
```

### 13 — Indagar el interés puede abrir opciones nuevas

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "avanzado"
  tags: ["posicion", "interes", "beneficio_mutuo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Si alguien pide \"trabajar desde casa todos los días\" por el interés real de \"tener flexibilidad para cuidar a la familia\", podría satisfacerse ese interés con opciones distintas a la posición original, como horarios flexibles algunos días."

pasos:
  - "Indagar el interés real puede abrir soluciones que la posición original no contemplaba."

explicacion: |
  Verdadero: es la aplicación práctica de por qué indagar intereses
  amplía las opciones de acuerdo posibles.
```

### 14 — Negociación como cambio de objetivo respecto del debate

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "avanzado"
  tags: ["negociacion", "debate_refutar_en_vivo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La negociación reutiliza las habilidades de debatir en vivo, pero con un objetivo distinto: encontrar un acuerdo compartido en vez de refutar al rival."

pasos:
  - "Ver `../debate-refutar-en-vivo/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito.
```

### 15 — Escuchar activamente también es relevante en la negociación

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["escucha_activa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Escuchar activamente, ya visto como habilidad de debate, también es central en la negociación: sin escuchar bien, es difícil identificar el interés real de la otra parte."

pasos:
  - "Es una habilidad compartida entre ambos temas de la subrama."

explicacion: |
  Verdadero: la escucha activa se reutiliza en distintos contextos de
  comunicación en vivo.
```

### 16 — El límite propio no debería ser secreto de forma absoluta

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "avanzado"
  tags: ["limite_propio", "matiz"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Definir el límite propio antes de negociar es una estrategia para uno mismo, pero no implica necesariamente revelárselo a la otra parte durante el proceso — es información estratégica, no un tema de honestidad obligatoria."

pasos:
  - "Conocer el propio límite ayuda a no ceder de más, independientemente de si se comparte o no con la contraparte."

explicacion: |
  Verdadero: es un matiz sobre el uso estratégico del límite propio
  durante una negociación.
```

### 17 — Agrandar la torta antes de dividir

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "avanzado"
  tags: ["beneficio_mutuo", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de negociar cómo dividir un presupuesto fijo entre dos áreas de un proyecto, conviene explorar si se puede conseguir presupuesto adicional (agrandar la torta) en vez de pelear directamente por la división del monto original."

pasos:
  - "Es la aplicación práctica de la estrategia de buscar opciones de beneficio mutuo antes de dividir un recurso fijo."

explicacion: |
  Verdadero: es un ejemplo concreto de la estrategia de \"agrandar la
  torta\" aplicada a un caso de recursos limitados.
```

### 18 — Ordenar el proceso de una negociación

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "intermedio"
  tags: ["negociacion", "metodo"]

enunciado: "Ordená los pasos de un proceso de negociación bien llevado."
tipo: ordenar
opciones_explicitas:
  - "Definir el propio límite antes de empezar a negociar"
  - "Escuchar la posición de la otra parte e indagar su interés real"
  - "Buscar opciones de beneficio mutuo antes de dividir un recurso fijo"
  - "Llegar a un acuerdo que ambas partes puedan sostener, cuidando también la relación"
respuesta_orden: ["Definir el propio límite antes de empezar a negociar", "Escuchar la posición de la otra parte e indagar su interés real", "Buscar opciones de beneficio mutuo antes de dividir un recurso fijo", "Llegar a un acuerdo que ambas partes puedan sostener, cuidando también la relación"]
explicacion: |
  El proceso combina las estrategias centrales descritas en la teoría
  en un orden lógico de preparación, indagación y cierre del acuerdo.
```

### 19 — Negociación completa la subrama de resolución de diferencias

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "avanzado"
  tags: ["negociacion", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La negociación completa la subrama de comunicación oral orientada a resolver diferencias, aplicando el debate ya dominado con un objetivo de acuerdo compartido en vez de victoria."

pasos:
  - "Ver `../debate-refutar-en-vivo/`: es el cierre de esa línea de aplicación práctica."

explicacion: |
  Verdadero: es la síntesis de la relación entre debate y
  negociación en esta subrama.
```

### 20 — Aplicación: negociar un conflicto cotidiano

```
metadata:
  materia: "lengua"
  tema: "negociacion"
  nivel: "avanzado"
  tags: ["negociacion", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ante un conflicto con un compañero de trabajo o estudio, conviene indagar el interés real detrás de su posición y buscar opciones de beneficio mutuo, en vez de pelear directamente por las posiciones declaradas."

pasos:
  - "Es la aplicación práctica directa de las estrategias de negociación en un conflicto cotidiano real."

explicacion: |
  Verdadero: es la aplicación concreta de este tema en situaciones de
  la vida diaria.
```
