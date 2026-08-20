### 1 — Confusión de ámbitos: Civil vs. Mecánica
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["civil", "mecanica", "estructuras"]

respuesta: "mecanica"
tipo: mc
opciones_explicitas: ["civil", "mecanica", "electrica", "quimica"]

enunciado: "Un error común es pensar que el diseño de maquinaria con partes móviles y sistemas de combustión es competencia de la ingeniería {idx_disciplina[1]}, cuando en realidad pertenece a la ingeniería _________."

variables:
  idx_disciplina: uno_de([[0, "civil"], [1, "mecanica"], [2, "electrica"], [3, "quimica"]])

explicacion: |
  La ingeniería civil se enfoca principalmente en infraestructuras estáticas (puentes, carreteras, edificios), mientras que la ingeniería mecánica se especializa en sistemas con movimiento y transformación de energía.
```

### 2 — El rol de la Ingeniería Química
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["quimica", "procesos"]

respuesta: falso
tipo: vf

enunciado: "Es correcto afirmar que el objetivo principal de la ingeniería química es la síntesis de nuevos elementos en un laboratorio, tal como lo hace un químico puro."

explicacion: |
  Falso. La ingeniería química se enfoca en el diseño de procesos industriales para transformar materias primas en productos a gran escala, no en la síntesis de elementos químicos básicos.
```

### 3 — Ingeniería Industrial vs. Gestión
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "intermedio"
  tags: ["industrial", "procesos", "optimizacion"]

variables:
  escenario: uno_de([[0, "optimizar la cadena de suministro", "optimizar la cadena de suministro"], [1, "diseñar circuitos integrados", "diseñar circuitos integrados"], [2, "diseñar motores de reacción", "diseñar motores de reacción"]])

respuesta: "optimizar la cadena de suministro"
tipo: completar
respuestas_validas: ["optimizar la cadena de suministro", "diseñar circuitos integrados", "diseñar motores de reacción"]

enunciado: "A menudo se confunde la ingeniería industrial con la administración pura; sin embargo, la ingeniería industrial busca _________ para mejorar la productividad de un sistema."

explicacion: |
  La ingeniería industrial utiliza métodos matemáticos y estadísticos para optimizar procesos, logística y recursos, diferenciándose de la gestión administrativa en su enfoque técnico-operativo.
```

### 4 — El alcance de la Ingeniería Biomédica
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "basico"
  tags: ["biomedica", "medicina"]

respuesta: "biomédica"
tipo: mc
opciones_explicitas: ["biomédica", "química", "aeroespacial", "industrial"]

enunciado: "Si un profesional se dedica al diseño de prótesis inteligentes y equipos de soporte vital para hospitales, su especialidad es la ingeniería _________."

explicacion: |
  La ingeniería biomédica aplica los principios de la ingeniería (electrónica, mecánica, materiales) al ámbito de la medicina y la biología para mejorar la salud humana.
```

### 5 — Secuencia de desarrollo aeroespacial
```
metadata:
  materia: "ingenieria"
  tema: "disciplinas_de_la_ingenieria"
  nivel: "avanzado"
  tags: ["aeroespacial", "secuencia", "desarrollo"]

respuesta: ["diseño de la aerodinámica", "construcción de la estructura", "integración de sistemas de propulsión"]
tipo: ordenar
opciones_explicitas: ["diseño de la aerodinámica", "construcción de la estructura", "integración de sistemas de propulsión"]

enunciado: "En el desarrollo de un vehículo de transporte espacial, ordene lógicamente estas etapas de ingeniería:"

pasos:
  - "Primero se define la forma para vencer la resistencia del aire."
  - "Luego se construye el esqueleto que soporte las cargas."
  - "Finalmente se instalan los motores para generar empuje."

explicacion: |
  El desarrollo aeroespacial sigue una jerarquía lógica: primero la aerodinámica (forma), luego la estructura (soporte) y finalmente la propulsión (movimiento).
```