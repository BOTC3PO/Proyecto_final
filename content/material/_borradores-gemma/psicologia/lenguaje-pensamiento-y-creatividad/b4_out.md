### 1 — El lenguaje como estructura
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["lenguaje", "pensamiento", "hipotesis_linguistica"]

respuesta: "hipotesis_linguistica"
tipo: completar
respuestas_validas: ["hipotesis_linguistica", "determinismo_linguistico"]

enunciado: "La teoría que sostiene que la estructura del lenguaje que hablamos determina o limita las categorías de nuestro pensamiento se conoce como ___."

explicacion: |
  La hipótesis de Sapir-Whorf (o determinismo lingüístico) sugiere que el lenguaje no solo comunica el pensamiento, sino que lo estructura y limita.
```

### 2 — Diferencia entre lenguaje y comunicación
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "basico"
  tags: ["comunicacion", "lenguaje", "simbolismo"]

variables:
  es_comunicacion_solo: uno_de([verdadero, falso])

respuesta: es_comunicacion_solo
tipo: vf

enunciado: "Si una persona emite un grito de dolor para pedir ayuda, está realizando un acto de comunicación, pero no necesariamente un acto de lenguaje simbólico."

explicacion: |
  La comunicación es el intercambio de información (puede ser instintiva o gestual), mientras que el lenguaje implica el uso de sistemas de signos arbitrarios y simbólicos con reglas gramaticales.
```

### 3 — Componentes del pensamiento simbólico
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["simbolismo", "signo", "semiotica"]

variables:
  escenario: uno_de([
    ["la palabra 'perro'", "significante"],
    ["la imagen mental de un perro", "significado"],
    ["el concepto abstracto de canino", "concepto"]
  ])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["significante", "significado", "concepto"]

enunciado: "En el proceso de representación mental, la parte del signo que es la forma física (sonidos o letras) se denomina ___."

explicacion: |
  Según la semiótica, el signo se divide en significante (la forma material) y significado (el concepto mental).
```

### 4 — Procesos de la creatividad
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "avanzado"
  tags: ["creatividad", "pensamiento_divergente", "pensamiento_convergente"]

respuesta: ["pensamiento_divergente", "pensamiento_convergente"]
tipo: ordenar

opciones_explicitas: ["pensamiento_divergente", "pensamiento_convergente"]

enunciado: "Ordene los siguientes procesos según la secuencia lógica de la resolución creativa de problemas: primero se generan múltiples ideas sin restricciones y luego se selecciona la mejor solución."

explicacion: |
  La creatividad suele seguir un flujo que va desde la divergencia (generación de opciones) hacia la convergencia (evaluación y selección).
```

### 5 — Relación lenguaje-pensamiento
```
metadata:
  materia: "psicologia"
  tema: "lenguaje_pensamiento_y_creatividad"
  nivel: "intermedio"
  tags: ["cognicion", "lenguaje"]

variables:
  caso: uno_de([
    ["el pensamiento puede existir sin lenguaje", "verdadero"],
    ["el lenguaje es una herramienta del pensamiento", "falso"]
  ])

respuesta: caso[idx][0]
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "De acuerdo con las teorías cognitivas modernas, ¿es posible que existan procesos de pensamiento (como la rotación mental) que no dependan del lenguaje verbal?"

explicacion: |
  La evidencia sugiere que el pensamiento no es dependiente exclusivamente del lenguaje; existen procesos cognitivos no verbales, como la inteligencia visoespacial.
```