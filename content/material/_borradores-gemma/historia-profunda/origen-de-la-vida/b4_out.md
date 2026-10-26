### 1 — El papel del ARN
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["bioquimica", "evolucion"]

tipo: mc
opciones_explicitas: ["Almacenar información genética y actuar como catalizador", "Solo almacenar información genética", "Solo actuar como catalizador enzimático", "Transportar aminoácidos a los ribosomas"]

enunciado: "La hipótesis del 'mundo de ARN' sugiere que esta molécula fue clave en el origen de la vida debido a que puede ___."

explicacion: |
  El ARN es una molécula versátil que puede realizar dos funciones críticas: almacenar la información genética (como el ADN) y actuar como una enzima (ribozima) para catalizar reacciones químicas.
```

### 2 — Comparación de funciones
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["adn", "arn", "proteinas"]

tipo: completar
respuestas_validas: ["ADN", "proteínas"]

enunciado: "En la hipótesis del mundo de ARN, se postula que el ARN precedió tanto al ___ como a las ___ en la evolución biológica."

explicacion: |
  Se cree que el ARN fue la molécula central antes de que el ADN se especializara en el almacenamiento de información a largo plazo y las proteínas en la catálisis estructural y funcional.
```

### 3 — El concepto de ribozima
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["ribozima", "catalisis"]

tipo: mc
opciones_explicitas: ["Capacidad de catalizar reacciones químicas", "Capacidad de replicarse sin proteínas", "Capacidad de formar dobles hélices estables", "Capacidad de almacenar aminoácidos"]

enunciado: "Una de las propiedades fundamentales que permite al ARN ser el protagonista del 'mundo de ARN' es su capacidad de actuar como una ___."

explicacion: |
  Las ribozimas son moléculas de ARN con actividad catalítica, lo que permite que el ARN pueda acelerar reacciones químicas sin necesidad de proteínas.
```

### 4 — Orden cronológico hipotético
```
metadata:
  materia: "historia_profucha"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["evolucion", "secuencia"]

tipo: ordenar
opciones_explicitas: ["ARN", "ADN", "Proteínas"]

enunciado: "Según la hipótesis del mundo de ARN, ¿cuál sería el orden evolutivo más probable de las macromoléculas funcionales?"

explicacion: |
  El ARN habría servido como la molécula 'todo en uno' que permitió la aparición de la autorreplicación, antes de la especialización funcional del ADN y las proteínas.
```

### 5 — El dilema de la autorreplicación
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["paradoja", "evolucion"]

variables:
  escenario: uno_de([[1, "necesidad de una plantilla"], [2, "necesidad de un catalizador"]])

tipo: mc
opciones_explicitas: ["La estabilidad del ADN", "La velocidad de la proteína", "La dualidad funcional del ARN", "La complejidad del núcleo"]

enunciado: "El 'dilema de la replicación' se resuelve con el ARN porque este puede resolver la {escenario} mediante su estructura química."

explicacion: |
  Si el escenario es la necesidad de una plantilla, el ARN sirve como molde. Si es la necesidad de un catalizador, el ARN actúa como enzima. Esto permite que la vida comience sin depender de un sistema complejo de tres moléculas distintas.
```