# Biología — ADN, gen y proteína (cuestionario, 20 preguntas VBLang)

> Tema: `BD`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Estructura del ADN

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["adn", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "La molécula de ADN tiene una estructura de doble hélice."

explicacion: |
  Correcto, dos hebras enrolladas entre sí.
```

### 2 — Composición química

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["nucleotidos"]

respuesta: verdadero
tipo: vf

enunciado: "El ADN está compuesto por unidades llamadas nucleótidos."

explicacion: |
  Cada nucleótido tiene un fosfato, un azúcar y una base nitrogenada.
```

### 3 — Complementariedad de bases

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "intermedio"
  tags: ["bases_nitrogenadas"]

variables:
  tabla: [["Adenina", "Timina"], ["Timina", "Adenina"], ["Guanina", "Citosina"], ["Citosina", "Guanina"]]
  idx: uno_de([0, 1, 2, 3])

respuesta: tabla[idx][1]
tipo: mc
opciones_explicitas: ["Adenina", "Timina", "Guanina", "Citosina"]

enunciado: "Si en una hebra de ADN hay {tabla[idx][0]}, ¿con qué base se empareja en la hebra complementaria?"

explicacion: |
  {tabla[idx][0]} se empareja con {tabla[idx][1]}.
```

### 4 — Reglas de apareamiento

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["bases"]

respuesta: falso
tipo: vf

enunciado: "Las bases del ADN se emparejan al azar, cualquiera con cualquiera."

explicacion: |
  Falso. Siempre A con T, y G con C.
```

### 5 — Definición de gen

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["gen"]

respuesta: verdadero
tipo: vf

enunciado: "Un gen es un fragmento de ADN que contiene la información para fabricar una proteína en particular."

explicacion: |
  Correcto, es la unidad funcional de la herencia.
```

### 6 — El conjunto del ADN

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["genoma"]

respuesta: "genoma"
tipo: completar
respuestas_validas:
  - "genoma"

enunciado: "El ADN completo de un organismo se llama ___."

explicacion: |
  Se llama genoma.
```

### 7 — Composición del genoma

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["genoma", "genes"]

respuesta: falso
tipo: vf

enunciado: "El genoma de un organismo contiene un solo gen."

explicacion: |
  Falso, contiene miles de genes.
```

### 8 — Especificidad del gen

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["gen", "proteina"]

respuesta: falso
tipo: vf

enunciado: "Cada gen contiene la información para todas las proteínas del organismo a la vez."

explicacion: |
  Falso. Cada gen es para una proteína en particular.
```

### 9 — Transcripción genética

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["transcripcion"]

respuesta: "transcripcion"
tipo: completar
respuestas_validas:
  - "transcripcion"

enunciado: "El proceso de copiar un gen de ADN a ARN mensajero se llama ___."

explicacion: |
  Es la transcripción, primer paso del dogma central.
```

### 10 — Traducción proteica

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["traduccion"]

respuesta: "traduccion"
tipo: completar
respuestas_validas:
  - "traduccion"

enunciado: "El proceso de leer el ARN mensajero y ensamblar aminoácidos se llama ___."

explicacion: |
  Es la traducción, segundo paso del dogma central.
```

### 11 — Localización de la traducción

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["ribosoma"]

respuesta: verdadero
tipo: vf

enunciado: "¿La traducción ocurre en el ribosoma?"

explicacion: |
  Correcto — ver ../celula-organelas/.
```

### 12 — El dogma central

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["dogma_central"]

respuesta: "ADN -> ARN -> proteina"
tipo: mc
opciones_explicitas: ["ADN -> ARN -> proteina", "ARN -> ADN -> proteina", "proteina -> ADN -> ARN", "ADN -> proteina -> ARN"]

enunciado: "¿Cuál es el orden correcto del flujo de información genética (dogma central)?"

explicacion: |
  ADN (almacenamiento) → ARN (mensaje) → proteína (función).
```

### 13 — Función de la transcripción

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "intermedio"
  tags: ["transcripcion"]

respuesta: verdadero
tipo: vf

enunciado: "¿La transcripción copia el gen para no arriesgar el ADN original al sacar la información fuera del núcleo?"

explicacion: |
  Correcto, la copia de ARN viaja al citoplasma sin exponer al ADN original.
```

### 14 — Flujo de información genética

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "intermedio"
  tags: ["genetica"]

respuesta: verdadero
tipo: vf

enunciado: "El gen determina qué proteína se fabrica, y la proteína determina en gran parte un rasgo observable del organismo."

explicacion: |
  Correcto — la base de ../genetica-mendeliana-punnett/.
```

### 15 — Definición de mutación

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["mutacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una mutación es un cambio en la secuencia de bases del ADN."

explicacion: |
  Correcto, es la definición de mutación.
```

### 16 — Efectos de las mutaciones

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "intermedio"
  tags: ["mutacion"]

respuesta: falso
tipo: vf

enunciado: "Todas las mutaciones son siempre dañinas para el organismo."

explicacion: |
  Falso. Pueden ser silenciosas, dañinas o beneficiosas.
```

### 17 — Origen de la variabilidad

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "intermedio"
  tags: ["evolucion"]

respuesta: verdadero
tipo: vf

enunciado: "Las mutaciones son la fuente última de la variación genética que alimenta la evolución."

explicacion: |
  Correcto — ver ../seleccion-natural/.
```

### 18 — Cantidad de bases nitrogenadas

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "basico"
  tags: ["bases"]

respuesta: 4
tipo: mc
opciones_explicitas: [2, 4, 6, 8]

enunciado: "¿Cuántas bases nitrogenadas distintas tiene el ADN?"

explicacion: |
  Cuatro: Adenina, Timina, Guanina, Citosina.
```

### 19 — Proteínas específicas para trabajos específicos

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "avanzado"
  tags: ["proteinas", "conceptos"]

respuesta: verdadero
tipo: vf

enunciado: "Cada proteína tiene una forma específica que le permite cumplir un trabajo específico en la célula (estructural, enzimático, etc.)."

explicacion: |
  Correcto, la forma de la proteína (determinada por el orden de aminoácidos) determina su función.
```

### 20 — Herencia de mutaciones

```
metadata:
  materia: "biologia"
  tema: "adn_gen_proteina"
  nivel: "avanzado"
  tags: ["mutacion", "herencia"]

respuesta: falso
tipo: vf

enunciado: "Todas las mutaciones que ocurren en el cuerpo de una persona se transmiten automáticamente a sus hijos."

explicacion: |
  Falso. Sólo las mutaciones que ocurren en las células reproductivas (gametos) pueden heredarse; las que ocurren en otras células del cuerpo (somáticas) no pasan a la descendencia.
```
