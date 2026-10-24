### 1 — Diferencia entre Enteros y Flotantes
```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_numericos"
  nivel: "basico"
  tags: ["tipos_de_dato", "numeros"]

respuesta: "flotante"
tipo: completar
respuestas_validas: ["flotante", "decimal", "real"]

enunciado: "Mientras que un tipo de dato entero representa números sin parte decimal, un tipo de dato ___ representa números que requieren precisión decimal."

explicacion: |
  En programación, los enteros (int) se usan para conteos exactos, mientras que los flotantes (float) se usan para mediciones con decimales.
```

### 2 — Naturaleza de los Booleanos
```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_logicos"
  nivel: "basico"
  tags: ["booleanos", "logica"]

opciones_explicitas: ["falso", "verdadero", "texto", "entero"]
respuesta: "verdadero"
tipo: mc

enunciado: "Un tipo de dato booleano se distingue de otros tipos porque su valor solo puede representar uno de dos estados lógicos. ¿Cuáles son esos estados?"

explicacion: |
  Los booleanos son la base de la lógica computacional y solo pueden ser 'verdadero' o 'falso'.
```

### 3 — Representación de Cadenas de Texto
```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_texto"
  nivel: "basico"
  tags: ["strings", "texto"]

respuestas_validas: ["comillas"]
respuesta: "comillas"
tipo: completar

enunciado: "A diferencia de los tipos numéricos, el tipo de dato texto (string) se distingue de un número por estar delimitado por ___ en el código fuente."

explicacion: |
  El uso de comillas (simples o dobles) le indica al compilador que el contenido debe tratarse como una secuencia de caracteres y no como una variable o un número.
```

### 4 — Orden de complejidad de tipos de datos
```
metadata:
  materia: "informatica"
  tema: "almacenamiento_memoria"
  nivel: "intermedio"
  tags: ["memoria", "orden"]

opciones_explicitas: ["Booleano", "Entero", "Flotante", "String"]
respuesta: ["Booleano", "Entero", "Flotante", "String"]
tipo: ordenar

enunciado: "Ordena los siguientes tipos de datos de menor a mayor complejidad de almacenamiento y procesamiento en la memoria de una computadora típica:"

explicacion: |
  Los booleanos ocupan menos espacio, seguidos por enteros, luego números decimales (que requieren más bits para la mantisa) y finalmente las cadenas de texto, cuyo tamaño depende de su longitud.
```

### 5 — Verdad vs Falsedad en lógica
```
metadata:
  materia: "informatica"
  tema: "tipos_de_dato_logicos"
  nivel: "basico"
  tags: ["booleanos", "logica"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que el tipo de dato booleano puede almacenar el valor numérico 5.5?"

explicacion: |
  Falso. El tipo booleano es estrictamente binario (verdadero/falso) y no puede contener valores decimales o enteros distintos a su lógica.
```