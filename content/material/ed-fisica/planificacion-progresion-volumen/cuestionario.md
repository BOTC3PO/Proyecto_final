# Ed. Física — Planificación y progresión: volumen, regla del 10%, 150 min/semana OMS (cuestionario, 25 preguntas VBLang)

> Tema: `EF3a/b/c`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: varias preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`); un
> `tipo: input` (tipo no confirmado en el DSL) — normalizado a
> `completar`; una pregunta con `variables:`/`uno_de` sorteando 3
> escenarios de cálculo pero con `respuesta:` **fija** en `"600"` sin
> importar cuál salía (sólo coincidía con uno de los 3) — corregida
> incluyendo el resultado correcto en la propia tabla; una pregunta
> `tipo: vf` cuya `respuesta:` contradecía la propia `explicacion:`
> (`respuesta: "verdadero"` con `explicacion: "Falso..."`) —
> corregida a `falso`; una pregunta que referenciaba una variable
> `idx` nunca declarada (`escenario[idx][1]` sin `idx:` en
> `variables:`) — corregida a indexar directamente la variable
> sorteada.

---

### 1 — Concepto de volumen

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "basico"
  tags: ["entrenamiento", "volumen"]

respuesta: "cantidad"
tipo: completar
respuestas_validas:
  - "cantidad"
  - "cantidad total"

enunciado: "El volumen de entrenamiento se define como la ___ total de trabajo realizado en una sesión o periodo."

explicacion: |
  El volumen se refiere a la magnitud o cantidad de trabajo (como kilómetros, repeticiones o minutos) y no a la intensidad.
```

### 2 — Unidades de medida en carrera

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "basico"
  tags: ["running", "volumen"]

respuesta: "distancia"
tipo: completar
respuestas_validas:
  - "distancia"
  - "longitud"

enunciado: "En un entrenamiento de atletismo, si medimos el trabajo en metros o kilómetros, estamos midiendo el volumen a través de la ___."

explicacion: |
  La distancia es una de las formas más comunes de cuantificar el volumen en deportes de resistencia.
```

### 3 — Volumen y tiempo

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "basico"
  tags: ["tiempo", "duracion"]

respuesta: "tiempo"
tipo: completar
respuestas_validas:
  - "tiempo"
  - "duración"
  - "duracion"

enunciado: "Si un deportista registra que su sesión duró 60 minutos, está expresando su volumen de entrenamiento en términos de ___."

explicacion: |
  El tiempo o duración es la medida de volumen más sencilla, especialmente en actividades de intensidad constante.
```

### 4 — Relación volumen e intensidad

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "intermedio"
  tags: ["relacion", "intensidad"]

respuesta: "inversa"
tipo: completar
respuestas_validas:
  - "inversa"
  - "opuesta"

enunciado: "En la planificación deportiva, suele existir una relación ___ entre el volumen y la intensidad: si el volumen aumenta drásticamente, la intensidad suele disminuir para evitar la fatiga excesiva."

explicacion: |
  La relación inversa es un principio fundamental para la gestión de la carga y la prevención de lesiones.
```

### 5 — Cálculo de carga total

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "avanzado"
  tags: ["carga", "calculo"]

variables:
  escenario: uno_de([[10, 50, "500"], [12, 60, "720"], [15, 75, "1125"]])

respuesta: escenario[2]
tipo: completar
respuestas_validas:
  - "500"
  - "720"
  - "1125"

enunciado: "Si un atleta realiza {escenario[0]} series de {escenario[1]} repeticiones cada una, el volumen total de repeticiones es ___."

explicacion: |
  El volumen total se calcula multiplicando la cantidad de series por el número de repeticiones por serie.
```

### 6 — Concepto de la regla del 10%

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "basico"
  tags: ["entrenamiento", "seguridad"]

respuesta: "lesiones por sobreuso"
tipo: completar
respuestas_validas:
  - "lesiones por sobreuso"

enunciado: "La regla del 10% se utiliza en la planificación deportiva para evitar el riesgo de ___."

explicacion: |
  Aumentar el volumen de forma gradual ayuda a que los tejidos (músculos, tendones y huesos) se adapten al esfuerzo, previniendo lesiones por sobreuso.
```

### 7 — Cálculo de aumento semanal (kilómetros)

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "intermedio"
  tags: ["calculo", "progresion"]

respuesta: "44"
tipo: completar
respuestas_validas:
  - "44"

enunciado: "Si un atleta corre actualmente 40 km por semana y decide aplicar la regla del 10% para la siguiente semana, ¿cuántos kilómetros debería correr como máximo?"

explicacion: |
  Para calcular el incremento, multiplicamos el volumen actual por 1,10 (100% original más 10% adicional). En este caso: 40 × 1,10 = 44.
```

### 8 — Objetivo de la progresión gradual

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "basico"
  tags: ["adaptacion"]

respuesta: "adaptación fisiológica"
tipo: completar
respuestas_validas:
  - "adaptación fisiológica"
  - "adaptacion fisiologica"

enunciado: "El propósito principal de aumentar la carga de entrenamiento de manera progresiva es permitir la ___ del organismo al nuevo estímulo."

explicacion: |
  La progresión gradual asegura que el cuerpo tenga tiempo de realizar las adaptaciones fisiológicas necesarias (mejora de capacidad cardiovascular, resistencia muscular, etc.) sin colapsar.
```

### 9 — Aplicación de la regla en minutos

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "intermedio"
  tags: ["calculo", "tiempo"]

respuesta: "165"
tipo: completar
respuestas_validas:
  - "165"

enunciado: "Un estudiante entrena 150 minutos semanales. Si la próxima semana decide aumentar su tiempo de entrenamiento siguiendo la regla del 10%, ¿cuántos minutos entrenará en total?"

explicacion: |
  El 10% de 150 es 15. Al sumar 15 a los 150 minutos originales, obtenemos un total de 165 minutos para la siguiente semana.
```

### 10 — Riesgos del aumento súbito

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "basico"
  tags: ["riesgos"]

respuesta: "sobreentrenamiento"
tipo: completar
respuestas_validas:
  - "sobreentrenamiento"

enunciado: "Ignorar la progresión gradual y aumentar drásticamente el volumen de entrenamiento puede conducir al ___."

explicacion: |
  El aumento desmedido de la carga de trabajo sin periodos de recuperación o incrementos controlados es la causa principal del síndrome de sobreentrenamiento.
```

### 11 — Recomendación semanal OMS

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "basico"
  tags: ["oms", "salud", "frecuencia"]

tipo: mc
opciones_explicitas: ["150 minutos de actividad moderada", "300 minutos de actividad moderada", "60 minutos de actividad vigorosa", "Ninguna de las anteriores"]
respuesta: "150 minutos de actividad moderada"

enunciado: "Según las recomendaciones de la OMS para la salud, ¿cuál es el tiempo mínimo de actividad física moderada recomendado para adultos por semana?"

explicacion: |
  La OMS recomienda al menos 150 a 300 minutos de actividad física moderada a la semana para obtener beneficios significativos para la salud.
```

### 12 — Intensidad y tiempo

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "basico"
  tags: ["intensidad", "oms"]

tipo: mc
opciones_explicitas: ["75 minutos de actividad vigorosa", "150 minutos de actividad vigorosa", "300 minutos de actividad vigorosa", "45 minutos de actividad vigorosa"]
respuesta: "75 minutos de actividad vigorosa"

enunciado: "Si una persona realiza actividad física de intensidad vigorosa en lugar de moderada, ¿cuál es el tiempo mínimo recomendado por la OMS a la semana?"

explicacion: |
  La recomendación para actividad vigorosa es de aproximadamente 75 minutos semanales, lo cual equivale a la mitad de tiempo que la actividad moderada debido a la mayor intensidad.
```

### 13 — Distribución del entrenamiento

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "intermedio"
  tags: ["distribucion", "sesiones"]

tipo: vf
respuesta: falso

enunciado: "El tiempo recomendado por la OMS (150 min moderados o 75 min vigorosos) debe cumplirse obligatoriamente en una única sesión diaria de entrenamiento."

explicacion: |
  Falso. El tiempo puede distribuirse en varias sesiones a lo largo de la semana (por ejemplo, 30 minutos durante 5 días).
```

### 14 — Naturaleza de la recomendación

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "basico"
  tags: ["objetivo", "salud"]

tipo: mc
opciones_explicitas: ["Es un piso mínimo para la salud", "Es un objetivo para deportistas de élite", "Es una carga máxima de entrenamiento", "Es una meta de pérdida de peso rápida"]
respuesta: "Es un piso mínimo para la salud"

enunciado: "En el contexto de la salud general, las recomendaciones de la OMS se consideran:"

explicacion: |
  Estas recomendaciones actúan como un "piso" o base mínima para mantener la salud y prevenir enfermedades, no representan un límite máximo ni un plan de entrenamiento deportivo de alto rendimiento.
```

### 15 — Distribución semanal (cálculo)

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "intermedio"
  tags: ["calculo", "distribucion"]

tipo: mc
opciones_explicitas: ["3 sesiones de 50 minutos", "5 sesiones de 30 minutos", "2 sesiones de 75 minutos", "Todas las anteriores son válidas"]
respuesta: "Todas las anteriores son válidas"

enunciado: "Si un estudiante decide cumplir con los 150 minutos de actividad moderada semanal recomendados, ¿cuál de las siguientes distribuciones es válida?"

explicacion: |
  La recomendación es flexible. Se puede cumplir mediante sesiones cortas repartidas en muchos días o sesiones más largas en menos días, siempre que se alcance el volumen total.
```

### 16 — Incremento de distancia semanal

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "intermedio"
  tags: ["running", "regla_10_porciento"]

variables:
  idx: uno_de([0, 1, 2])
  datos: [["12", "13.2 km"], ["20", "22.0 km"], ["35", "38.5 km"]]

opciones_explicitas: ["13.2 km", "14.0 km", "15.2 km", "13.5 km", "22.0 km", "38.5 km"]

respuesta: datos[idx][1]
tipo: mc

enunciado: "Un corredor ha completado una carga semanal de {datos[idx][0]} km. Aplicando la regla del 10% para evitar lesiones, ¿cuál debería ser su volumen total para la siguiente semana?"

explicacion: |
  La regla del 10% sugiere no aumentar el volumen semanal más de un 10% respecto a la semana anterior: {datos[idx][0]} × 1,10 = {datos[idx][1]}.
```

### 17 — Aumento de tiempo de entrenamiento

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "basico"
  tags: ["tiempo", "entrenamiento"]

variables:
  idx: uno_de([0, 1])
  datos: [["40", "44 min"], ["60", "66 min"]]

opciones_explicitas: ["44 min", "45 min", "46 min", "50 min", "66 min"]

respuesta: datos[idx][1]
tipo: mc

enunciado: "Si un estudiante entrena durante {datos[idx][0]} minutos semanales, ¿cuánto tiempo debería entrenar la próxima semana siguiendo la progresión del 10%?"

explicacion: |
  Para progresar de forma segura, sumamos el 10% al tiempo actual: {datos[idx][0]} × 1,10 = {datos[idx][1]}.
```

### 18 — Cálculo de volumen total

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "intermedio"
  tags: ["calculo", "progresion"]

variables:
  idx: uno_de([0, 1])
  datos: [["15", "16.5"], ["40", "44.0"]]

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "16.5"
  - "44.0"
  - "44"

enunciado: "Un atleta corre actualmente {datos[idx][0]} km por semana. Si aplica la regla del 10% para su progresión, el nuevo volumen será de ___ km."

explicacion: |
  El aumento es del 10%: {datos[idx][0]} + ({datos[idx][0]} × 0,10) = {datos[idx][1]}.
```

### 19 — Progresión en minutos de carrera

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "basico"
  tags: ["tiempo", "progresion"]

variables:
  idx: uno_de([0, 1])
  datos: [["90", "99 min"], ["120", "132 min"]]

opciones_explicitas: ["99 min", "100 min", "105 min", "110 min", "132 min"]

respuesta: datos[idx][1]
tipo: mc

enunciado: "Un grupo de entrenamiento realiza {datos[idx][0]} minutos de actividad continua. Para la siguiente sesión, se decide aumentar el volumen un 10%. ¿Cuál es el nuevo tiempo objetivo?"

explicacion: |
  Aumentar un 10% a {datos[idx][0]} resulta en {datos[idx][1]}.
```

### 20 — El límite de la regla del 10%

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "intermedio"
  tags: ["distancia", "seguridad"]

variables:
  idx: uno_de([0, 1])
  datos: [["50", "55 km"], ["80", "88 km"]]

opciones_explicitas: ["55 km", "56 km", "60 km", "55.5 km", "88 km"]

respuesta: datos[idx][1]
tipo: mc

enunciado: "Si un corredor mantiene un volumen de {datos[idx][0]} km semanales, ¿cuál es el límite máximo de kilómetros que debería correr la semana siguiente para no exceder la regla del 10%?"

explicacion: |
  El límite máximo es el valor actual más el 10%: {datos[idx][0]} × 1,10 = {datos[idx][1]}.
```

### 21 — El punto de partida

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "basico"
  tags: ["oms", "base", "entrenamiento"]

tipo: mc
opciones_explicitas: ["Aumentar la intensidad de inmediato", "Establecer una base sólida según la OMS", "Entrenar al máximo cada día", "No realizar ningún tipo de planificación"]

respuesta: "Establecer una base sólida según la OMS"

enunciado: "Antes de aplicar cualquier carga de entrenamiento avanzada, ¿cuál debe ser la prioridad según las recomendaciones de la OMS para la salud?"

explicacion: |
  Para una planificación segura, primero se debe asegurar una base de actividad física que cumpla con los estándares de la OMS para establecer un nivel de condición física previo.
```

### 22 — La regla del 10% (comparación de unidades)

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "intermedio"
  tags: ["progresion", "regla_10", "volumen"]

variables:
  escenario: uno_de([["40 km", "44 km"], ["20 min", "22 min"], ["1000 m", "1100 m"]])

opciones_explicitas: ["44 km", "22 min", "1100 m"]
respuesta: escenario[1]
tipo: mc

enunciado: "Si un atleta registra {escenario[0]} por semana y decide aplicar la regla del 10% para progresar de forma segura, ¿cuál debería ser su nuevo volumen semanal?"

explicacion: |
  La regla del 10% es un principio de progresión que sugiere no aumentar el volumen total (distancia, tiempo o carga) más de un 10% respecto a la semana anterior para permitir la adaptación fisiológica.
```

### 23 — Riesgos del aumento brusco

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "intermedio"
  tags: ["lesiones", "sobreuso", "volumen"]

tipo: mc
opciones_explicitas: ["Mejora inmediata de la capacidad aeróbica", "Lesiones por sobreuso y fatiga crónica", "Aumento de la flexibilidad muscular", "Reducción del riesgo de calambres"]

respuesta: "Lesiones por sobreuso y fatiga crónica"

enunciado: "¿Cuál es la consecuencia principal de aumentar el volumen de entrenamiento de manera desproporcionada y demasiado rápida?"

explicacion: |
  Un aumento excesivo del volumen sin la progresión adecuada somete a los tejidos (tendones, ligamentos, huesos) a un estrés superior al que pueden reparar, derivando en lesiones por sobreuso.
```

### 24 — Lesiones óseas por estrés

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "avanzado"
  tags: ["fractura_estres", "lesion", "sobrecarga"]

tipo: completar
respuesta: "fractura por estrés"
respuestas_validas:
  - "fractura por estrés"
  - "fractura por estres"

enunciado: "Cuando el aumento del volumen es excesivo y no hay una progresión gradual, el impacto repetitivo puede causar una lesión ósea específica denominada ___."

explicacion: |
  Las fracturas por estrés son pequeñas grietas en el hueso causadas por la carga repetitiva excesiva, típicas de una mala planificación del volumen de entrenamiento.
```

### 25 — Relación de conceptos

```
metadata:
  materia: "ed_fisica"
  tema: "planificacion_progresion_volumen"
  nivel: "intermedio"
  tags: ["planificacion", "progresion", "volumen"]

tipo: mc
opciones_explicitas: ["La planificación dicta el volumen, la progresión lo ajusta y el exceso causa lesiones.", "El volumen es constante, la progresión es aleatoria y la planificación es opcional.", "La OMS prohíbe la progresión y el volumen debe ser siempre máximo.", "La progresión ignora el volumen y la planificación sólo sirve para la dieta."]

respuesta: "La planificación dicta el volumen, la progresión lo ajusta y el exceso causa lesiones."

enunciado: "¿Cuál es la relación correcta entre planificación, progresión y volumen de entrenamiento?"

explicacion: |
  Una planificación adecuada establece un volumen inicial basado en la base física (OMS), la progresión (regla del 10%) permite aumentar ese volumen gradualmente, y el control de ambos evita lesiones por sobreuso.
```
