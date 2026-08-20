### 1 — Percepción vs Sensación
```
metadata:
  materia: "psicologia"
  tema: "percepcion_sensacion"
  nivel: "basico"
  tags: ["percepcion", "procesos_mentales"]

respuesta: falso
tipo: vf

enunciado: "La percepción es un proceso puramente fisiológico que ocurre exclusivamente en los órganos sensoriales, sin intervención de los procesos mentales superiores."

explicacion: |
  La sensación es el proceso fisiológico de captar estímulos, mientras que la percepción es el proceso psicológico de organizar e interpretar dicha información sensorialmente captada.
```

### 2 — El mito de la memoria fotográfica
```
metadata:
  materia: "psicologia"
  tema: "memoria_procesos"
  nivel: "intermedio"
  tags: ["memoria", "errores_comunes"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[0, "memoria_sensorial"], [1, "memoria_de_trabajo"]]

opciones_explicitas: ["memoria_sensorial", "memoria_de_trabajo", "memoria_a_largo_plazo", "memoria_episodica"]

respuesta: datos[escenario_idx][1]
tipo: mc

enunciado: "Si una persona es capaz de retener una imagen visual por apenas unos milisegundos antes de que se desvanezca, está utilizando la {datos[escenario_idx][0]}."

explicacion: |
  La memoria sensorial es el sistema que retiene la información sensorial por un periodo muy breve (milisegundos) antes de que sea procesada o perdida.
```

### 3 — Atencion Selectiva y el efecto de filtro
```
metadata:
  materia: "psicologia"
  tema: "atencion_selectiva"
  nivel: "intermedio"
  tags: ["atencion", "filtro"]

respuesta: "El filtro atencional"
tipo: completar
respuestas_validas: ["El filtro atencional", "Filtro atencional", "filtro atencional"]

enunciado: "En el modelo de atención de Broadbent, la capacidad de procesar solo una parte de la información sensorial mientras se ignoran otros estímulos se debe a la existencia de ___."

explicacion: |
  El modelo de filtro sugiere que existe un mecanismo que selecciona la información relevante y bloquea el resto para evitar la sobrecarga cognitiva.
```

### 4 — Fases del aprendizaje según el modelo de procesamiento de información
```
metadata:
  materia: "psicologia"
  tema: "aprendizaje_procesamiento"
  nivel: "avanzado"
  tags: ["aprendizaje", "memoria"]

opciones_explicitas: ["Codificación", "Almacenamiento", "Recuperación"]
respuesta: ["Codificación", "Almacenamiento", "Recuperación"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas necesarias para que un proceso de aprendizaje sea efectivo en el sistema de memoria:"

explicacion: |
  El aprendizaje requiere primero codificar la información, luego almacenarla en la memoria y, finalmente, ser capaz de recuperarla cuando sea necesario.
```

### 5 — Memoria y la distorsión de recuerdos
```
metadata:
  materia: "psicologia"
  tema: "memoria_reconstruccion"
  nivel: "intermedio"
  tags: ["memoria", "errores"]

respuesta: "falso"
tipo: vf

enunciado: "La memoria humana funciona como una grabación de video exacta que permite reproducir los eventos pasados sin alteraciones ni distorsiones."

explicacion: |
  La memoria es un proceso reconstructivo, no reproductivo. Esto significa que cada vez que recordamos, reconstruimos la información, lo que la hace susceptible a errores, sesgos y falsos recuerdos.
```