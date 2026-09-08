# Ed. Física — Frecuencia cardíaca máxima: zonas de entrenamiento (cuestionario, 25 preguntas VBLang)

> Tema: `EF10`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Cálculo de FCM simple

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["fcm", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["15", "205"], ["20", "200"], ["35", "185"]]

tipo: completar
respuestas_validas:
  - "205"
  - "200"
  - "185"
respuesta: datos[idx][1]

enunciado: "Utilizando la fórmula de la frecuencia cardíaca máxima (FCM = 220 - edad), calcula la FCM para una persona de {datos[idx][0]} años."

explicacion: |
  La fórmula aplicada es 220 - {datos[idx][0]} = {datos[idx][1]} pulsaciones por minuto (ppm).
```

### 2 — Identificación de la fórmula

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["teoria", "fórmula"]

tipo: mc
opciones_explicitas: ["220 + edad", "220 - edad", "208 - (0.7 * edad)", "150 + edad"]
respuesta: "220 - edad"

enunciado: "¿Cuál es la fórmula simplificada más utilizada para estimar la frecuencia cardíaca máxima (FCM)?"

explicacion: |
  La fórmula estándar para estimación rápida es restar la edad a 220.
```

### 3 — Comparación de edades

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["fcm", "comparacion"]

variables:
  idx: uno_de([0, 1])
  datos: [["10", "Es mayor que la de una persona de 30 años"], ["40", "Es menor que la de una persona de 30 años"]]

tipo: mc
opciones_explicitas: ["Es mayor que la de una persona de 30 años", "Es menor que la de una persona de 30 años"]
respuesta: datos[idx][1]

enunciado: "Si comparamos la FCM estimada de una persona de {datos[idx][0]} años con la de una persona de 30 años, ¿qué podemos afirmar?"

explicacion: |
  A menor edad, la frecuencia cardíaca máxima estimada es mayor (y viceversa), porque la fórmula resta directamente la edad a 220.
```

### 4 — Cálculo de FCM (variante)

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["fcm", "calculo"]

variables:
  idx: uno_de([0, 1])
  datos: [["12", "208"], ["40", "180"]]

tipo: completar
respuestas_validas:
  - "208"
  - "180"
respuesta: datos[idx][1]

enunciado: "Calcula la frecuencia cardíaca máxima para una persona de {datos[idx][0]} años."

explicacion: |
  Restamos la edad a 220: 220 - {datos[idx][0]} = {datos[idx][1]}.
```

### 5 — Relación edad y frecuencia

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["teoria"]

tipo: mc
opciones_explicitas: ["Aumenta con la edad", "Disminuye con la edad", "Se mantiene constante", "Depende del clima"]
respuesta: "Disminuye con la edad"

enunciado: "Según la fórmula FCM = 220 - edad, ¿qué sucede con la frecuencia cardíaca máxima a medida que una persona envejece?"

explicacion: |
  Como la edad se está restando, cuanto mayor es el valor de la edad, menor es el resultado de la FCM.
```

### 6 — Identificación de zona de recuperación

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["fcm", "recuperacion"]

tipo: mc
opciones_explicitas: ["Zona 1", "Zona 2", "Zona 3", "Zona 4", "Zona 5"]

enunciado: "Si un estudiante realiza un ejercicio de intensidad muy baja, con un rango de intensidad entre el 50% y 60% de su FCM, ¿en qué zona de entrenamiento se encuentra?"

respuesta: "Zona 1"

explicacion: |
  La Zona 1 (50-60% FCM) es la zona de recuperación activa o calentamiento, ideal para preparar el cuerpo o recuperarse tras esfuerzos intensos.
```

### 7 — Objetivo de la Zona 2

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["quema_grasa", "aerobico"]

tipo: mc
opciones_explicitas: ["Recuperación", "Quema de grasa", "Capacidad aeróbica", "Umbral anaeróbico", "Potencia máxima"]

enunciado: "¿Cuál es el beneficio principal de entrenar en la Zona 2 (60-70% de la FCM)?"

respuesta: "Quema de grasa"

explicacion: |
  La Zona 2 es conocida como la zona de oxidación de grasas, donde el cuerpo utiliza preferentemente lípidos como fuente de energía principal.
```

### 8 — Rango de la zona aeróbica

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["fcm", "aerobico"]

tipo: completar
respuestas_validas:
  - "70-80"
respuesta: "70-80"

enunciado: "Completa el rango de la Zona 3 (Capacidad Aeróbica): el rango de intensidad es del ___% de la FCM (poné los dos números separados por guion, ej. 70-80)."

explicacion: |
  La Zona 3 (70-80% FCM) mejora la eficiencia del sistema cardiovascular y la capacidad aeróbica general.
```

### 9 — Identificación de la zona anaeróbica

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["anaerobico", "umbral"]

tipo: mc
opciones_explicitas: ["Zona 1", "Zona 2", "Zona 3", "Zona 4", "Zona 5"]

enunciado: "Cuando un atleta trabaja a una intensidad del 80-90% de su FCM, está entrando en la zona anaeróbica, también llamada de umbral. ¿Qué zona es?"

respuesta: "Zona 4"

explicacion: |
  La Zona 4 (80-90% FCM) es la zona anaeróbica, donde se mejora la tolerancia al lactato y el umbral de fatiga.
```

### 10 — Zona de esfuerzo máximo

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "avanzado"
  tags: ["fcm", "maximo"]

tipo: completar
respuestas_validas:
  - "90-100"
respuesta: "90-100"

enunciado: "La Zona 5, que se utiliza para entrenar la potencia máxima y la velocidad, corresponde al ___% de la FCM (poné los dos números separados por guion, ej. 90-100)."

explicacion: |
  La Zona 5 (90-100% FCM) es de intensidad máxima y se utiliza para entrenamientos de intervalos de alta intensidad (HIIT) para mejorar la potencia.
```

### 11 — Cálculo de rango de zona (60%-80%)

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["fcm", "entrenamiento", "pulsaciones"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["180", "108-144"], ["190", "114-152"], ["200", "120-160"]]

respuestas_validas:
  - "108-144"
  - "114-152"
  - "120-160"
respuesta: datos[idx][1]
tipo: completar

enunciado: "Si una persona tiene una Frecuencia Cardíaca Máxima (FCM) de {datos[idx][0]} lpm, ¿cuál es el rango de pulsaciones para una zona de intensidad del 60% al 80% (poné los dos números separados por guion)?"

explicacion: |
  Para calcular el rango, multiplicamos la FCM por el porcentaje deseado: {datos[idx][0]} × 0,60 y {datos[idx][0]} × 0,80.
```

### 12 — Intensidad de calentamiento

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["fcm", "calentamiento"]

variables:
  idx: uno_de([0, 1])
  datos: [["170", "102 lpm"], ["190", "114 lpm"]]

enunciado: "Un atleta con una FCM de {datos[idx][0]} lpm realiza un calentamiento en la zona del 60%. ¿A cuántas pulsaciones debe situarse?"

opciones_explicitas: ["102 lpm", "114 lpm", "120 lpm", "130 lpm"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El cálculo es FCM × 0,60. Para un valor de {datos[idx][0]}, el resultado es {datos[idx][1]}.
```

### 13 — Zona de umbral anaeróbico

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["fcm", "anaerobico"]

variables:
  idx: uno_de([0, 1])
  datos: [["180", "144"], ["200", "160"]]

enunciado: "Para entrenar en el umbral anaeróbico (80% de la FCM), una persona con FCM de {datos[idx][0]} lpm debería alcanzar las ___ pulsaciones."

respuestas_validas:
  - "144"
  - "160"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El umbral anaeróbico se calcula multiplicando la FCM por 0,80: {datos[idx][0]} × 0,80 = {datos[idx][1]}.
```

### 14 — Zona de máxima intensidad

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "avanzado"
  tags: ["fcm", "anaerobico", "esfuerzo_maximo"]

variables:
  idx: uno_de([0, 1])
  datos: [["180", "162 lpm"], ["190", "171 lpm"]]

enunciado: "Si un deportista está trabajando al 90% de su FCM de {datos[idx][0]} lpm, ¿cuál es su frecuencia cardíaca actual?"

opciones_explicitas: ["162 lpm", "171 lpm", "150 lpm", "180 lpm"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El 90% de {datos[idx][0]} es {datos[idx][1]}.
```

### 15 — Rango de recuperación

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["fcm", "recuperacion"]

variables:
  idx: uno_de([0, 1])
  datos: [["180", "90"], ["200", "100"]]

enunciado: "En una fase de recuperación activa (50% de la FCM), una persona con FCM de {datos[idx][0]} lpm debe mantener un ritmo de ___ pulsaciones."

respuestas_validas:
  - "90"
  - "100"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La zona de recuperación al 50% se obtiene multiplicando la FCM por 0,50: {datos[idx][0]} × 0,50 = {datos[idx][1]}.
```

### 16 — El riesgo del sobreentrenamiento

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["fatiga", "riesgo"]

respuesta: "fatiga acumulada"
tipo: completar
respuestas_validas:
  - "fatiga acumulada"

enunciado: "Entrenar siempre en la Zona 5 (intensidad máxima) sin períodos de recuperación adecuada provoca una excesiva ___ que impide la supercompensación."

explicacion: |
  El entrenamiento constante al límite no permite que el cuerpo se recupere. La fatiga acumulada impide que el organismo se adapte al estímulo, llevando al sobreentrenamiento.
```

### 17 — El propósito de las zonas bajas

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["adaptacion", "aerobico"]

variables:
  escenario: uno_de([["Zona 2", "base aeróbica"], ["Zona 4", "tolerancia al lactato"]])

respuesta: escenario[1]
tipo: completar
respuestas_validas:
  - "base aeróbica"
  - "tolerancia al lactato"

enunciado: "Si un atleta entrena en la {escenario[0]}, la capacidad que principalmente está construyendo es su ___."

explicacion: |
  Las zonas de baja intensidad (como la Zona 2) desarrollan la base aeróbica; las zonas altas (como la Zona 4) mejoran la tolerancia al lactato — cada zona construye algo distinto.
```

### 18 — La especificidad del estímulo

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["planificacion", "estímulo"]

respuesta: "distinto"
tipo: completar
respuestas_validas:
  - "distinto"

enunciado: "En una planificación deportiva, cada zona de frecuencia cardíaca tiene un objetivo fisiológico ___."

explicacion: |
  Cada zona entrena un sistema diferente: las zonas bajas mejoran la resistencia aeróbica, mientras que las zonas altas mejoran la potencia y la tolerancia al lactato. Entrenar siempre igual limita el progreso.
```

### 19 — Prevención de lesiones por intensidad constante

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["lesiones", "seguridad"]

respuesta: "lesión"
tipo: completar
respuestas_validas:
  - "lesión"
  - "lesion"

enunciado: "El uso constante de intensidades máximas (Zona 5) aumenta significativamente el riesgo de ___ debido al impacto mecánico y el estrés sistémico."

explicacion: |
  La intensidad máxima genera una carga muy alta en articulaciones, tendones y el sistema nervioso central, lo que eleva el riesgo de sufrir una lesión si no hay variabilidad.
```

### 20 — La importancia de la variabilidad

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "avanzado"
  tags: ["periodizacion", "eficiencia"]

respuesta: "variedad"
tipo: completar
respuestas_validas:
  - "variedad"

enunciado: "Para evitar el estancamiento y mejorar el rendimiento, la clave de un entrenamiento efectivo es la ___ de intensidades (alternar zonas altas y bajas, no entrenar siempre igual)."

explicacion: |
  La periodización implica alternar cargas altas con cargas bajas. Esta variedad de estímulos permite que el cuerpo se adapte sin llegar al agotamiento crónico.
```

### 21 — Cálculo de la FCM (aplicado)

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["fcm", "calculo"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["15", "205"], ["17", "203"], ["14", "206"]]

enunciado: "Si una persona tiene {datos[idx][0]} años, ¿cuál es su Frecuencia Cardíaca Máxima (FCM) aproximada, usando la fórmula 220 - edad?"

opciones_explicitas: ["205", "203", "206", "200"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  La fórmula básica es 220 - edad. Para una persona de {datos[idx][0]} años: 220 - {datos[idx][0]} = {datos[idx][1]} ppm.
```

### 22 — Zona de entrenamiento aeróbica (límite inferior)

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["zonas", "aerobico"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["180", "108"], ["190", "114"], ["200", "120"]]

enunciado: "Una persona tiene una FCM de {datos[idx][0]} lpm. Si su zona de entrenamiento aeróbica (Zona 2) es el 60% al 70% de su FCM, ¿cuál es el límite inferior (60%) de su zona?"

opciones_explicitas: ["108", "114", "120", "100"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El límite inferior se calcula multiplicando la FCM por 0,60: {datos[idx][0]} × 0,60 = {datos[idx][1]}.
```

### 23 — Identificación de zona de intensidad

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "intermedio"
  tags: ["zonas", "intensidad"]

enunciado: "Una persona con FCM de 200 lpm realiza un ejercicio donde su frecuencia cardíaca es de 170 ppm. ¿A qué porcentaje aproximado de su FCM corresponde?"

opciones_explicitas: ["80%", "85%", "90%", "75%"]
respuesta: "85%"
tipo: mc

explicacion: |
  Porcentaje = (170 / 200) × 100 = 85%.
```

### 24 — Rango de zona anaeróbica (límite superior)

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "avanzado"
  tags: ["zonas", "anaerobico"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["180", "162"], ["190", "171"], ["200", "180"]]

enunciado: "Una persona tiene una FCM de {datos[idx][0]} lpm. La Zona 4 (Anaeróbica) es el 80% al 90% de la FCM. ¿Cuál es el límite superior (90%) de su zona?"

respuestas_validas:
  - "162"
  - "171"
  - "180"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  El 90% de {datos[idx][0]} es {datos[idx][1]}.
```

### 25 — Relación edad y pulsaciones máximas

```
metadata:
  materia: "ed_fisica"
  tema: "frecuencia_cardiaca_maxima_zonas"
  nivel: "basico"
  tags: ["fcm", "edad"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["12", "208", "28"], ["18", "202", "22"], ["15", "205", "25"]]

enunciado: "Si comparamos a una persona de {datos[idx][0]} años (FCM {datos[idx][1]} lpm) con una de 40 años (FCM 180 lpm), ¿cuál es la diferencia de pulsaciones máximas?"

opciones_explicitas: ["28", "22", "25", "30"]
respuesta: datos[idx][2]
tipo: mc

explicacion: |
  FCM de la persona más joven: {datos[idx][1]}. FCM de la persona de 40 años: 180. Diferencia: {datos[idx][1]} - 180 = {datos[idx][2]}.
```
