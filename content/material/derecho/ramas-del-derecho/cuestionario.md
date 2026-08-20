# Derecho — Ramas del derecho (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El Derecho Civil

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["civil", "regulación"]

respuesta: "personas y relaciones privadas"
tipo: completar
respuestas_validas:
  - "personas y relaciones privadas"
  - "delitos y penas"
  - "contratos laborales"

enunciado: "El Derecho Civil es la rama que regula las relaciones entre ___."

explicacion: |
  El Derecho Civil regula las relaciones de las personas (físicas o jurídicas) en su ámbito privado, como la familia, la propiedad y los contratos civiles.
```

### 2 — El Derecho Penal

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["penal", "delitos"]

respuesta: verdadero
tipo: vf

enunciado: "¿El objetivo principal del Derecho Penal es imponer sanciones o penas ante la comisión de delitos que afectan a la sociedad?"

explicacion: |
  Correcto. El Derecho Penal define las conductas consideradas delitos y establece las penas correspondientes para mantener el orden social.
```

### 3 — Clasificación de Ramas

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["comercial", "laboral", "administrativo"]

variables:
  escenario: uno_de([["relaciones de trabajo", "laboral"], ["actos de comercio", "comercial"], ["relación Estado-ciudadano", "administrativo"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["laboral", "comercial", "administrativo", "penal"]

enunciado: "Si una disputa surge a raíz de un contrato de compraventa entre dos empresas, ¿qué rama del derecho regula este conflicto?"

explicacion: |
  El escenario seleccionado fue: {escenario[0]}. Por lo tanto, la rama correspondiente es el Derecho {escenario[1]}.
```

### 4 — El Derecho Administrativo

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["administrativo", "estado"]

respuesta: "Estado"
tipo: completar
respuestas_validas:
  - "Estado"
  - "Empresas"
  - "Ciudadanos"

enunciado: "El Derecho Administrativo regula la organización y el funcionamiento del ___ y sus relaciones con los particulares."

explicacion: |
  El Derecho Administrativo es la rama que regula la actividad de la administración pública y el ejercicio de la función administrativa del Estado.
```

### 5 — Orden de jerarquía en una investigación

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["procedimiento", "orden"]

respuesta_orden: ["delito", "investigación", "juicio", "sentencia"]
tipo: ordenar
opciones_explicitas: ["delito", "investigación", "juicio", "sentencia"]

enunciado: "Ordene cronológicamente las etapas típicas de un proceso en el ámbito del Derecho Penal:"

explicacion: |
  El proceso penal comienza con la detección de un delito, seguido de la investigación, el juicio oral y finalmente la emisión de una sentencia.
```

### 6 — El contrato de alquiler

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["civil", "contratos"]

respuesta: "civil"
tipo: mc
opciones_explicitas: ["civil", "penal", "laboral", "comercial"]

enunciado: "Juan firma un contrato de alquiler para vivir en un departamento. Si surge un conflicto sobre el pago de las expensas o la entrega de las llaves, la rama del derecho que regula esta relación es el derecho ___."

explicacion: |
  El derecho civil regula las relaciones privadas entre particulares, como los contratos de locación (alquiler), sucesiones y propiedad.
```

### 7 — El despido injustificado

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["laboral", "trabajo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["despido sin indemnización", "reclamación de salarios"], ["renuncia sin aviso", "liquidación final"]]
  respuesta_correcta: ["laboral", "laboral"]

respuesta: datos[escenario_idx][1]
tipo: completar
enunciado: "Un empleado es despedido sin causa y sin recibir la indemnización que establece la ley. El trabajador decide demandar para reclamar sus derechos. ¿La rama del derecho que interviene en este caso es el derecho laboral? {datos[escenario_idx][0]}"

explicacion: |
  El derecho laboral regula el vínculo entre empleadores y empleados, protegiendo la parte más débil de la relación y regulando despidos y salarios.
```

### 8 — El robo en el supermercado

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["penal", "delitos"]

respuesta: "penal"
tipo: completar
respuestas_validas:
  - "penal"

enunciado: "Una persona entra a un supermercado y sustrae una mercadería sin pagar, siendo capturada por la seguridad. Dado que este acto constituye un delito contra la propiedad, la rama del derecho que debe intervenir es el derecho ___."

explicacion: |
  El derecho penal se encarga de definir las conductas que son consideradas delitos y de establecer las penas o sanciones correspondientes.
```

### 9 — El proceso de una sanción estatal

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["administrativo", "estado"]

respuesta: "administrativo"
tipo: mc
opciones_explicitas: ["civil", "administrativo", "comercial", "penal"]

enunciado: "El Estado decide multar a una empresa de transporte por incumplir las normas de seguridad vial. Para resolver la validez de esta multa, se debe recurrir al derecho ___."

explicacion: |
  El derecho administrativo regula la organización, funcionamiento y las facultades de la Administración Pública y sus relaciones con los ciudadanos.
```

### 10 — La secuencia de una compraventa mercantil

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["comercial", "ordenar"]

respuesta_orden: ["oferta", "aceptación", "entrega de mercadería", "pago"]
tipo: ordenar
opciones_explicitas: ["oferta", "aceptación", "entrega de mercadería", "pago"]

enunciado: "En una operación de compraventa entre dos empresas (acto de comercio), se deben seguir pasos lógicos para que la relación jurídica se consume. Ordena cronológicamente estos elementos:"

pasos:
  - "El vendedor propone el precio y el producto."
  - "El comprador manifiesta su conformidad con la propuesta."
  - "Se realiza la transferencia del bien."
  - "Se efectúa la contraprestación económica."

explicacion: |
  El derecho comercial regula los actos de comercio y las relaciones entre comerciantes; el proceso sigue una secuencia de oferta, aceptación y ejecución.
```

### 11 — ¿Qué regula el Derecho Civil?

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["civil", "regulacion"]

tipo: mc
opciones_explicitas: ["Las relaciones de trabajo entre empleador y empleado", "Las relaciones de familia, contratos y propiedad entre particulares", "Los delitos y las penas impuestas por el Estado", "Los conflictos entre el Estado y los ciudadanos"]

respuesta: "Las relaciones de familia, contratos y propiedad entre particulares"

enunciado: "Un error común es confundir el Derecho Civil con el Derecho Laboral. Mientras el segundo regula el trabajo, el Derecho Civil regula ___."

explicacion: |
  El Derecho Civil es el tronco común que regula las relaciones privadas entre personas (familia, contratos, sucesiones, propiedad), a diferencia del Laboral que es una rama especializada para el trabajo.
```

### 12 — ¿Verdadero o Falso: El Derecho Administrativo regula contratos entre empresas?

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["administrativo", "confusion"]

tipo: vf

respuesta: falso

enunciado: "Es un error pensar que el Derecho Administrativo regula los contratos entre dos empresas privadas; su función es regular la organización y el funcionamiento de la administración pública."

explicacion: |
  Falso. El Derecho Administrativo regula la actividad del Estado y sus relaciones con los particulares cuando el Estado actúa como poder público. Los contratos entre empresas privadas son materia del Derecho Comercial/Civil.
```

### 13 — Completar la rama del derecho

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["penal", "delitos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["robo", "delito"], ["incumplimiento de contrato", "civil"]]

respuesta: "penal"
tipo: completar
respuestas_validas:
  - "penal"

enunciado: "Si una persona comete un ___, el Estado interviene para imponer una sanción punitiva; esta materia es regulada por el Derecho ___."

explicacion: |
  El Derecho Penal se encarga de las conductas que son consideradas delitos y las sanciones que el Estado impone. No debe confundirse con el Derecho Civil, que busca la reparación de daños pero no la pena criminal.
```

### 14 — Clasificación de conflictos

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["comercial", "civil"]

tipo: mc
opciones_explicitas: ["Derecho Comercial", "Derecho Civil", "Derecho Administrativo", "Derecho Penal"]

respuesta: "Derecho Comercial"

enunciado: "Un comerciante tiene un conflicto por una transacción de mercaderías con un proveedor. Aunque el Derecho Civil es la base, la regulación específica de los actos de comercio corresponde al ___."

explicacion: |
  El Derecho Comercial es una rama especializada que regula los actos de comercio y a los sujetos que se dedican a ellos, desprendiéndose del marco general del Derecho Civil.
```

### 15 — Ordenar la jerarquía de aplicación en un caso de despido

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["laboral", "procedimiento"]

tipo: ordenar
opciones_explicitas: ["Identificar el vínculo laboral", "Determinar la normativa aplicable (Derecho Laboral)", "Calificar la sanción o indemnización"]

respuesta_orden: ["Identificar el vínculo laboral", "Determinar la normativa aplicable (Derecho Laboral)", "Calificar la sanción o indemnización"]

enunciado: "Ante un conflicto por un despido, el abogado debe seguir este orden lógico para aplicar correctamente el Derecho Laboral:"

explicacion: |
  Primero se debe verificar si existe una relación de dependencia (vínculo), luego aplicar las leyes específicas de trabajo (Laboral) y finalmente determinar la consecuencia jurídica (indemnización).
```

### 16 — Diferencia entre Derecho Civil y Comercial

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["civil", "comercial"]

respuesta: "comercial"
tipo: mc
opciones_explicitas: ["civil", "comercial", "penal", "laboral"]

enunciado: "Mientras que el Derecho Civil regula las relaciones privadas de las personas en general, el Derecho ___ se especializa en los actos de comercio y la actividad de los comerciantes."

explicacion: |
  El Derecho Civil es la rama general que regula relaciones como la familia o sucesiones, mientras que el Derecho Comercial es una rama especial que se aplica específicamente a los actos de comercio.
```

### 17 — Naturaleza del Derecho Penal

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["penal", "civil"]

respuesta: falso
tipo: vf

enunciado: "A diferencia del Derecho Civil, que busca la reparación de un daño, el Derecho Penal tiene como fin principal la imposición de una sanción o pena por la comisión de un delito."

explicacion: |
  Es verdadero. El Derecho Civil es eminentemente reparatorio (indemnizaciones), mientras que el Derecho Penal es punitivo (penas de prisión, multas estatales, etc.).
```

### 18 — El objeto del Derecho Laboral

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["laboral", "civil"]

respuesta: "subordinación"
tipo: completar
respuestas_validas:
  - "subordinación"

enunciado: "A diferencia de un contrato de locación de servicios (civil), donde prima la autonomía de la voluntad, el Derecho Laboral se distingue por la existencia de una relación de ___ entre las partes."

pasos:
  - "Identificar la relación jurídica: ¿hay dependencia o es un servicio independiente?"
  - "Comparar con el concepto de autonomía civil."

explicacion: |
  El elemento distintivo del Derecho Laboral es la subordinación (dependencia técnica, económica y jurídica) del trabajador respecto al empleador.
```

### 19 — Ámbito de aplicación del Derecho Administrativo

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["administrativo", "civil"]

respuesta: "Estado"
tipo: mc
opciones_explicitas: ["Estado", "Particulares", "Empresas", "Sociedades"]

enunciado: "El Derecho Administrativo se distingue del Derecho Civil porque su sujeto principal es el ___ en el ejercicio de sus funciones públicas."

explicacion: |
  El Derecho Administrativo regula la organización y el funcionamiento de la administración pública y sus relaciones con los ciudadanos.
```

### 20 — Jerarquía de normas en el control de legalidad

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "avanzado"
  tags: ["administrativo", "ordenamiento"]

respuesta_orden: ["Constitución", "Ley", "Reglamento"]
tipo: ordenar

opciones_explicitas: ["Constitución", "Ley", "Reglamento"]

enunciado: "En el Derecho Administrativo, para verificar la validez de un acto, se debe seguir el orden jerárquico de normas. Ordene de mayor a menor jerarquía:"

explicacion: |
  La jerarquía normativa establece que un Reglamento no puede contrariar una Ley, y una Ley no puede contrariar la Constitución.
```

### 21 — El contrato de alquiler

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["civil", "contratos"]

variables:
  datos: [["Juan firma un contrato de alquiler con un propietario para vivir en su casa.", "civil"], ["María es demandada por un accidente de tránsito.", "civil"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["civil", "penal", "laboral", "comercial"]

enunciado: "{datos[idx][0]} ¿Qué rama del derecho regula este vínculo contractual?"

explicacion: |
  El derecho civil regula las relaciones privadas entre personas, como los contratos de alquiler, el matrimonio o la propiedad.
```

### 22 — El robo en el supermercado

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["penal", "delitos"]

respuesta: verdadero
tipo: vf
enunciado: "Un individuo es detenido por sustraer mercadería de un comercio sin pagar. ¿Este hecho es regulado por el derecho penal?"

explicacion: |
  El derecho penal se encarga de las conductas que son consideradas delitos y las penas que el Estado impone a sus autores.
```

### 23 — Despido injustificado

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "basico"
  tags: ["laboral", "trabajo"]

variables:
  datos: [["Un empleado es despedido sin causa y reclama sus indemnizaciones.", "laboral"], ["Un comerciante tiene una disputa por una deuda de mercadería.", "comercial"]]
  idx: uno_de([0, 1])

respuesta: "___"
tipo: completar
respuestas_validas:
  - "laboral"

enunciado: "{datos[idx][0]} El conflicto se debe resolver ante el derecho ___."

explicacion: |
  El derecho laboral regula las relaciones entre empleadores y trabajadores, incluyendo despidos, salarios y condiciones de trabajo.
```

### 24 — La disputa entre socios

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["comercial", "sociedades"]

variables:
  datos: [["Dos socios de una sociedad anónima discuten sobre la distribución de dividendos.", "comercial"], ["Un ciudadano reclama una multa de tránsito impuesta por la municipalidad.", "administrativo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["civil", "penal", "comercial", "administrativo"]

enunciado: "{datos[idx][0]} ¿Qué rama del derecho regula esta actividad?"

explicacion: |
  El derecho comercial (o mercantil) regula los actos de comercio y las relaciones jurídicas derivadas de la actividad de los comerciantes y las sociedades.
```

### 25 — El orden de las ramas

```
metadata:
  materia: "derecho"
  tema: "ramas_del_derecho"
  nivel: "intermedio"
  tags: ["ordenar", "conceptos"]

respuesta_orden: ["Derecho Civil", "Derecho Comercial", "Derecho Administrativo", "Derecho Penal"]
tipo: ordenar

opciones_explicitas: ["Derecho Penal", "Derecho Civil", "Derecho Administrativo", "Derecho Comercial"]

enunciado: "Ordena las siguientes ramas del derecho de mayor a menor amplitud en cuanto a la regulación de la vida cotidiana (desde la relación entre particulares hasta la relación con el Estado y el control social):"

explicacion: |
  El orden lógico suele partir de la regulación de la vida privada (Civil), pasando por el comercio (Comercial), la relación con el Estado (Administrativo) y finalmente la sanción de conductas graves (Penal).
```
