### 1 — Sistemas pictográficos
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["escritura", "pictografia"]

respuesta: "pictográfico"
tipo: mc

opciones_explicitas: ["silábico", "alfabético", "pictográfico", "logográfico"]

enunciado: "Un sistema de escritura que utiliza símbolos para representar objetos o ideas directamente, sin pasar necesariamente por el sonido de las palabras, se denomina sistema ___."

explicacion: |
  Los sistemas pictográficos utilizan dibujos que guardan una relación visual directa con el concepto representado.
```

### 2 — Evolución de la escritura
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["evolucion", "sistemas"]

variables:
  escenario: uno_de([["dibujo de un sol", "pictográfico"], ["signo para la sílaba 'ma'", "silábico"], ["letra 'A'", "alfabético"]])
  tipo_sistema: escenario[1]

respuesta: tipo_sistema

tipo: mc
opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Si un sistema de escritura utiliza un símbolo para representar el sonido de una sílaba completa, estamos ante un sistema ___."

explicacion: |
  En el sistema silábico, el signo no representa una letra (sonido individual) ni un objeto, sino una unidad de sonido llamada sílaba.
```

### 3 — El sistema alfabético
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "basico"
  tags: ["alfabeto", "fonemas"]

respuesta: "sonidos"
tipo: completar
respuestas_validas: ["sonidos", "fonemas"]

enunciado: "A diferencia de los sistemas pictográficos, el sistema alfabético se basa en la representación de los ___ que constituyen el habla."

explicacion: |
  El alfabeto es un sistema donde cada signo (letra) representa un fonema o sonido mínimo, permitiendo una combinación infinita de palabras.
```

### 4 — Clasificación de sistemas
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "avanzado"
  tags: ["clasificacion", "tecnologia"]

variables:
  caso: uno_de([["jeroglíficos egipcios (fase temprana)", "pictográfico"], ["katakana japonés", "silábico"], ["alfabeto latino", "alfabético"]])
  tipo_res: caso[1]

respuesta: tipo_res

tipo: mc
opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Considerando el caso de {caso[0]}, el sistema de escritura utilizado es de tipo ___."

explicacion: |
  Dependiendo de la etapa y la función, los sistemas pueden transicionar de lo pictográfico a lo logográfico o silábico.
```

### 5 — Orden de complejidad estructural
```
metadata:
  materia: "lengua"
  tema: "escritura_como_tecnologia"
  nivel: "intermedio"
  tags: ["secuencia", "sistemas"]

respuesta: ["pictográfico", "silábico", "alfabético"]
tipo: ordenar
opciones_explicitas: ["pictográfico", "silábico", "alfabético"]

enunciado: "Ordena estos sistemas de escritura desde el que representa la unidad de significado más compleja (el objeto) hasta el que representa la unidad de sonido más simple (el fonema):"

pasos:
  - "Representación de objetos/ideas"
  - "Representación de sílabas"
  - "Representación de sonidos individuales"

explicacion: |
  La evolución tecnológica de la escritura tiende hacia la abstracción: de la imagen (pictograma) a la sílaba y finalmente al fonema (alfabeto).
```