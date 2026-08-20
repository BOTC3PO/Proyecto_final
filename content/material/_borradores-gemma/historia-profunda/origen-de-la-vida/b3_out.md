### 1 — El concepto de LUCA
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "basico"
  tags: ["biologia", "evolucion", "luca"]

tipo: mc
opciones_explicitas: ["Un organismo pluricelular complejo", "El último ancestro común de todos los organismos actuales", "Un organismo que vivió solo en la atmósfera", "La primera célula que apareció en la Tierra"]

enunciado: "El término LUCA hace referencia a un concepto fundamental en la biología evolutiva. ¿Qué significa exactamente?"

explicacion: |
  LUCA (Last Universal Common Ancestor) no fue el primer ser vivo, sino el ancestro común más reciente del cual descendieron todas las formas de vida actuales (Arqueas, Bacterias y Eucariotas).
```

### 2 — Características de LUCA
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["biologia", "bioquimica"]

variables:
  escenario: uno_de([["metabolismo_quimiosintetico", "quimiosíntesis"], ["fotosintesis", "fotosíntesis"]])

tipo: completar
respuestas_validas: ["quimiosíntesis", "fotosíntesis"]
respuesta: escenario[0][1]

enunciado: "Se postula que LUCA habitaba en entornos extremos, como fuentes hidrotermales, y que su principal fuente de energía era la ___."

explicacion: |
  Debido a la ausencia de oxígeno en la Tierra primitiva, se cree que LUCA dependía de procesos químicos inorgánicos (quimiosíntesis) para obtener energía, antes de la aparición de la fotosíntesis.
```

### 3 — El árbol de la vida
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "intermedio"
  tags: ["filogenia", "evolucion"]

tipo: ordenar
opciones_explicitas: ["LUCA", "Primeras células procariotas", "Células eucariotas", "Organismos pluricelulares"]

enunciado: "Ordena cronológicamente estos hitos evolutivos, desde el ancestro común hasta la complejidad actual:"

explicacion: |
  La evolución biológica siguió una progresión desde un ancestro común unicelular, pasando por la especialización procariota y eucariota, hasta la complejidad de la pluricelularidad.
```

### 4 — Evidencia genética
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["genetica", "adn"]

variables:
  mol_idx: uno_de([0, 1])
  mol_datos: [["ATP", "energía celular"], ["ADN", "información genética"]]

tipo: mc
opciones_explicitas: ["El uso de " + "ATP" + " como moneda energética", "La presencia de " + "ADN" + " como almacén de información", "La capacidad de realizar " + "fotosíntesis" + " en la superficie", "La existencia de " + "núcleo" + " celular"]

enunciado: "La existencia de {mol_datos[mol_idx][0]} en todos los dominios de la vida es una evidencia clave de que todos los seres vivos comparten un ancestro común."

explicacion: |
  El hecho de que todos los seres vivos utilicen la misma molécula para almacenar información genética (ADN/ARN) y la misma para transferir energía (ATP) es la prueba más fuerte de un origen común.
```

### 5 --- ¿LUCA era un organismo vivo?
```
metadata:
  materia: "historia_profunda"
  tema: "origen_de_la_vida"
  nivel: "avanzado"
  tags: ["filosofia_biologica", "teoria"]

tipo: input
tolerancia_abs: 0

enunciado: "Si un organismo tiene un metabolismo básico y material genético, pero no puede reproducirse de forma independiente sin otros elementos químicos, ¿es un ser vivo o una pre-célula? Responde con la palabra 'precelula' si crees que es un precursor."

respuestas_validas: ["precelula"]
respuesta: "precelula"

explicacion: |
  Existe un debate científico sobre si LUCA era ya una célula completa o un sistema químico complejo (pre-célula) que ya poseía las características de la vida.
```