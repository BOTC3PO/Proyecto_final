### 1 — Origen de la escritura
```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["mesopotamia", "sumerios", "cuneiforme"]

respuesta: "Mesopotamia"
tipo: completar
respuestas_validas: ["Mesopotamia"]

enunciado: "La escritura surgió en la región de ___ hace aproximadamente 5000 años."

explicacion: |
  La escritura se desarrolló en Mesopotamia, en la región de Sumer, para satisfacer necesidades de registro.
```

### 2 — Propósito inicial
```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["contabilidad", "administracion"]

respuesta: "administrativos"
tipo: mc
opciones_explicitas: ["poéticos", "administrativos", "religiosos", "militares"]

enunciado: "Originalmente, la escritura no se inventó para la literatura, sino para llevar registros ___."

explicacion: |
  Las primeras tablillas se utilizaban principalmente para la contabilidad y la administración de recursos en las ciudades-estado.
```

### 3 — El sistema cuneiforme
```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["cuneiforme", "sumerios"]

variables:
  datos: [["sumerios", "cuneiforme"], ["egipcios", "jeroglíficos"], ["fenicios", "alfabeto"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["cuneiforme", "jeroglíficos", "alfabeto"]

enunciado: "El pueblo de {datos[idx][0]} desarrolló el sistema de escritura conocido como {datos[idx][1]}."

explicacion: |
  Los sumerios en Mesopotamia crearon la escritura cuneiforme, caracterizada por marcas en forma de cuña sobre arcilla.
```

### 4 — Evolución de la escritura
```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["proceso", "evolucion"]

respuesta: ["Pictogramas", "Ideogramas", "Fonogramas"]
tipo: ordenar
opciones_explicitas: ["Pictogramas", "Ideogramas", "Fonogramas"]

enunciado: "Ordena cronológicamente la evolución conceptual de los signos en la escritura antigua:"

explicacion: |
  La escritura evolucionó desde dibujos de objetos (pictogramas), pasando por conceptos (ideogramas), hasta representar sonidos (fonogramas).
```

### 5 — Cronología de la escritura
```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["tiempo", "mesopotamia"]

respuesta: 5000
tipo: input
tolerancia_abs: 100

enunciado: "Se estima que la escritura surgió hace aproximadamente ___ años."

explicacion: |
  La invención de la escritura en Mesopotamia se sitúa hace unos 5000 años, marcando el inicio de la Edad Antigua.
```