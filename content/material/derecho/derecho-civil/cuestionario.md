# Derecho — Derecho civil (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Derecho Civil

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["definicion", "conceptos_basicos"]

tipo: mc
opciones_explicitas: ["El conjunto de normas que regula las relaciones entre particulares y las de estos con el Estado cuando actúa como particular.", "El conjunto de normas que regula la organización y funcionamiento del Estado y sus instituciones.", "El conjunto de normas que regula la conducta de los ciudadanos en sociedad para garantizar la convivencia pública.", "El conjunto de normas que regula la relación entre el Estado y los ciudadanos en el ámbito penal."]

respuesta: "El conjunto de normas que regula las relaciones entre particulares y las de estos con el Estado cuando actúa como particular."

enunciado: "El Derecho Civil se define fundamentalmente como:"

explicacion: |
  El Derecho Civil es la rama del derecho privado que regula las relaciones más comunes de la vida cotidiana (familia, contratos, propiedad, sucesiones), interviniendo el Estado solo cuando actúa como un particular más.
```

### 2 — Sujetos del Derecho

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["sujetos", "personas"]

tipo: completar
respuestas_validas:
  - "persona física"
  - "persona jurídica"

respuesta: "persona jurídica"

enunciado: "En el derecho civil, además de la ___ (ser humano), existen las ___ (entidades como sociedades o fundaciones) que tienen capacidad para ser sujetos de derechos y obligaciones."

explicacion: |
  Existen dos tipos de sujetos de derecho: la persona física (el ser humano) y la persona jurídica (entes colectivos o instituciones con personalidad propia).
```

### 3 — Verdad o Falso: Ámbito de aplicación

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["teoria_general"]

tipo: vf

enunciado: "¿Es correcto afirmar que el Derecho Civil regula las relaciones entre el Estado y los ciudadanos cuando el Estado ejerce su poder de imperio (como en el derecho penal o administrativo)?"

respuesta: falso

explicacion: |
  Falso. Cuando el Estado actúa con poder de imperio, se aplican el Derecho Público (Administrativo, Penal, etc.). El Derecho Civil se aplica cuando el Estado actúa como un particular (ej. alquilando un local).
```

### 4 — Clasificación de las Relaciones

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["relaciones_juridicas"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El contrato de compraventa de un automóvil", "La herencia de un inmueble"], ["La celebración de un matrimonio", "La transferencia de propiedad de un bien"]]

tipo: mc
opciones_explicitas: ["Relaciones de Derecho Público", "Relaciones de Derecho Privado"]

respuesta: "Relaciones de Derecho Privado"

enunciado: "Tanto {escenarios[escenario_idx][0]} como {escenarios[escenario_idx][1]} son ejemplos de relaciones reguladas por el Derecho Civil, por lo tanto, pertenecen al ámbito del:"

explicacion: |
  El Derecho Civil es la piedra angular del Derecho Privado, ya que regula los intereses de los particulares.
```

### 5 — Orden de la Capacidad Jurídica

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["capacidad", "orden_logico"]

tipo: ordenar
opciones_explicitas: ["Nacimiento de la persona", "Adquisición de la capacidad de goce", "Ejercicio de la capacidad de ejercicio"]

respuesta_orden: ["Nacimiento de la persona", "Adquisición de la capacidad de goce", "Ejercicio de la capacidad de ejercicio"]

enunciado: "Ordene cronológicamente los hitos que permiten el desarrollo de la personalidad jurídica y su capacidad en un individuo:"

explicacion: |
  Primero nace la persona (existencia), lo que le otorga capacidad de goce (derechos), y con el tiempo y la madurez adquiere la capacidad de ejercicio (facultad de actuar por sí mismo).
```

### 6 — El contrato de compraventa

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["contratos", "compraventa"]

variables:
  objeto: uno_de(["un automóvil", "una casa", "un terreno"])
  precio: uno_de([15000, 250000, 50000])

enunciado: "Juan celebra un contrato de compraventa con Pedro donde se acuerda la transferencia de {objeto} por un valor de ${precio}. En este acto, se perfecciona el consentimiento entre las partes sobre el objeto y el precio."

respuesta: verdadero
tipo: "vf"

explicacion: |
  El contrato de compraventa es el acuerdo de voluntades donde una parte se obliga a entregar un bien y la otra a pagar un precio cierto. Al existir consentimiento sobre el objeto y el precio, el contrato es válido.
```

### 7 — Capacidad de ejercicio

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["capacidad", "personas"]

variables:
  edades: [16, 25, 30]
  idx: uno_de([0, 1, 2])
  edad: edades[idx]

enunciado: "Un individuo de {edad} años desea realizar un contrato de arrendamiento de forma autónoma. Según la normativa civil general, si la persona es mayor de edad, posee capacidad de ejercicio."

respuesta: verdadero
tipo: "vf"

explicacion: |
  La capacidad de ejercicio es la aptitud para ejercer derechos y contraer obligaciones por sí mismo. En la mayoría de las legislaciones, se adquiere con la mayoría de edad.
```

### 8 — Elementos de la sucesión

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["sucesiones", "herencia"]

variables:
  causa: uno_de(["testamento", "falta de testamento"])

enunciado: "Ante el fallecimiento de una persona, si la causa de la transmisión de sus bienes es {causa}, nos encontramos ante una sucesión testamentaria o una sucesión legítima (ab intestato) respectivamente."

respuestas_validas:
  - "testamentaria"
  - "legítima"
respuesta: "testamentaria"
tipo: "completar"

explicacion: |
  La sucesión testamentaria es aquella que se rige por la voluntad del causante expresada en un testamento. La legítima (o ab intestato) ocurre cuando la ley determina a los herederos ante la ausencia de testamento.
```

### 9 — Requisitos de validez

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "avanzado"
  tags: ["acton_juridico", "vicios"]

variables:
  vicio: uno_de(["error", "dolo", "violencia"])

enunciado: "Para que un acto jurídico sea válido, su voluntad debe ser libre. Si una persona es obligada mediante amenazas físicas para firmar un contrato, el vicio que afecta la validez es el ___."

respuestas_validas:
  - "vicio de violencia"
respuesta: "vicio de violencia"
tipo: "completar"

explicacion: |
  La violencia es un vicio del consentimiento que consiste en la coacción física o moral que anula la libertad de la voluntad del sujeto.
```

### 10 — El proceso de transferencia de propiedad

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["propiedad", "derechos_reales"]

variables:
  bien: uno_de(["inmueble", "mueble"])

enunciado: "Para que la transferencia de un {bien} sea oponible a terceros y perfeccione el derecho real de propiedad, se deben seguir ciertos pasos legales. Ordene el proceso típico de una compraventa de este tipo:"

opciones_explicitas: ["Escritura pública", "Pago del precio", "Inscripción registral"]
respuesta_orden: ["Escritura pública", "Pago del precio", "Inscripción registral"]
tipo: "ordenar"

explicacion: |
  En bienes inmuebles, el proceso requiere la formalidad de la escritura, el cumplimiento de la contraprestación (pago) y la inscripción en el Registro de la Propiedad para que el derecho sea oponible a terceros.
```

### 11 — Ámbito de aplicación del Derecho Civil

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["conceptos_basicos", "relaciones_privadas"]

respuesta: "privadas"
tipo: completar
respuestas_validas:
  - "privadas"
  - "privada"

enunciado: "A diferencia del derecho público, el derecho civil regula las relaciones entre personas de carácter ___."

explicacion: |
  El derecho civil se encarga de las relaciones entre particulares (personas físicas o jurídicas) en un plano de igualdad, a diferencia del derecho público que regula la relación entre el Estado y los ciudadanos.
```

### 12 — Confusión entre Derecho Civil y Penal

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["distincion_ramas"]

respuesta: falso
tipo: vf

enunciado: "Si una persona incumple un contrato de alquiler, la sanción principal que impone el derecho civil es la pena de prisión."

explicacion: |
  Falso. El derecho civil busca la reparación del daño o el cumplimiento de la obligación (indemnizaciones, rescisión de contrato, etc.). La pena de prisión es una sanción propia del derecho penal.
```

### 13 — El rol del Estado en el Derecho Civil

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["sujetos_derecho"]

variables:
  escenario: uno_de([["Un contrato de compraventa entre dos vecinos", "civil"], ["Una multa por exceso de velocidad", "administrativo"], ["Un juicio por un delito de robo", "penal"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["civil", "administrativo", "penal"]

enunciado: "Identifique la naturaleza jurídica del siguiente caso: {escenario[0]}."

explicacion: |
  El caso planteado involucra a dos particulares en una relación de igualdad, lo cual es el núcleo del derecho civil.
```

### 14 — Orden de la sucesión hereditaria

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["sucesiones", "orden_legal"]

respuesta_orden: ["1. Testamento", "2. Sucesión Intestada", "3. Sucesión Abintestato"]
tipo: ordenar
opciones_explicitas: ["1. Testamento", "2. Sucesión Intestada", "3. Sucesión Abintestato"]

enunciado: "Ordene los criterios de prelación para determinar la transmisión de bienes tras el fallecimiento de una persona:"

explicacion: |
  En derecho civil, el orden de prioridad comienza por la voluntad del causante (testamento) y, en su defecto, se aplica la ley (sucesión intestada/abintestato).
```

### 15 — Capacidad Jurídica

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["capacidad_juridica"]

respuesta: "capacidad_de_goce"
tipo: mc
opciones_explicitas: ["capacidad_de_goce", "capacidad_de_ejercicio", "capacidad_de_disposición"]

enunciado: "La aptitud que tiene toda persona para ser titular de derechos y obligaciones se denomina ___."

explicacion: |
  La capacidad de goce es la aptitud inherente a la persona por el solo hecho de serlo, mientras que la capacidad de ejercicio es la facultad para ejercer esos derechos por sí mismo.
```

### 16 — Diferencia fundamental

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["definicion", "comparacion"]

respuesta: "derecho_privado"
tipo: completar
respuestas_validas:
  - "derecho_privado"

enunciado: "Mientras que el derecho público regula la organización del Estado y sus relaciones con los particulares, el derecho civil pertenece al ámbito del ________."

explicacion: |
  El derecho civil se encarga de regular las relaciones entre particulares (personas físicas o jurídicas) en condiciones de igualdad, situándose dentro de la rama del derecho privado.
```

### 17 — El objeto del Derecho Civil

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["comparacion", "derecho_penal"]

opciones_explicitas: ["La sanción de penas privativas de la libertad", "La regulación de las relaciones privadas y el patrimonio", "La organización de la administración pública"]
respuesta: "La regulación de las relaciones privadas y el patrimonio"
tipo: mc

enunciado: "A diferencia del derecho penal, cuyo fin es imponer sanciones por delitos, el objeto principal del derecho civil es:"

explicacion: |
  El derecho civil se centra en la regulación de la vida privada, los contratos, la familia, la propiedad y las sucesiones, no en la persecución de delitos.
```

### 18 — Naturaleza de la norma

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["normas", "derecho_publico"]

respuesta: falso
tipo: vf

enunciado: "¿Es el derecho civil una rama del derecho público, dado que regula las normas de convivencia entre ciudadanos?"

explicacion: |
  Falso. El derecho civil es la columna vertebral del derecho privado. El derecho público es el que regula la estructura del Estado y el ejercicio de la soberanía.
```

### 19 — Jerarquía de las normas en contratos

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "avanzado"
  tags: ["contratos", "ordenar"]

opciones_explicitas: ["Normas de orden público", "Autonomía de la voluntad (acuerdo de partes)", "Cumplimiento de la prestación"]
respuesta_orden: ["Normas de orden público", "Autonomía de la voluntad (acuerdo de partes)", "Cumplimiento de la prestación"]
tipo: ordenar

enunciado: "En la validez de un contrato civil, ordene cronológicamente la jerarquía de aplicación: primero las normas que no pueden ser alteradas por las partes, luego la voluntad de los contratantes y finalmente la ejecución del acto."

explicacion: |
  El orden jurídico establece que las normas de orden público son la base infranqueable; sobre ellas opera la autonomía de la voluntad para crear reglas particulares, las cuales culminan en el cumplimiento de lo pactado.
```

### 20 — Relación con el Derecho Administrativo

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["contratos", "derecho_administrativo"]

tipo: mc
opciones_explicitas: ["se rige por el derecho privado", "se rige por el derecho público"]

respuesta: "se rige por el derecho privado"

enunciado: "Si un particular celebra un contrato de compraventa con otro particular, la naturaleza de la relación es que ___."

explicacion: |
  En un contrato entre particulares, la relación es de derecho privado. Si una de las partes fuera el Estado actuando con prerrogativas de poder público, entraríamos en el ámbito del derecho administrativo.
```

### 21 — Capacidad de ejercicio

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["capacidad", "personas"]

variables:
  datos: [["Juan (16 años) quiere vender su bicicleta", "incapaz"], ["Marta (25 años) firma un contrato de alquiler", "capaz"], ["Luis (80 años, con pleno uso de facultades) compra un auto", "capaz"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["incapaz", "capaz"]

enunciado: "Considerando el siguiente caso: {datos[idx][0]}. ¿Cuál es la situación jurídica de la persona respecto a la capacidad de ejercicio?"

explicacion: |
  La capacidad de ejercicio es la aptitud para ejercer derechos y contraer obligaciones por sí mismo. Los menores de edad (sin excepción de edad en este contexto simplificado) suelen ser sujetos con capacidad de derecho pero con restricciones en la de ejercicio.
```

### 22 — Elementos del contrato

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["contratos", "elementos"]

variables:
  datos: [["Un vendedor ofrece un reloj por $100 y un comprador acepta", "consentimiento"], ["Un terreno que no existe legalmente", "objeto"], ["Un contrato firmado bajo amenaza de muerte", "vicio"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "consentimiento"
  - "objeto"
  - "vicio"

enunciado: "En el siguiente supuesto: {datos[idx][0]}. El elemento esencial del contrato que se está describiendo o afectando es el ___."

explicacion: |
  Para que un contrato sea válido, requiere objeto lícito, causa lícita y consentimiento de las partes.
```

### 23 — Propiedad y posesión

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["derechos_reales", "propiedad"]

respuestas_validas:
  - "Es poseedor"
respuesta: "Es poseedor"
tipo: completar
enunciado: "Si una persona tiene el control de un bien pero no tiene el título de propiedad que la acredite legalmente, la afirmación de que 'tiene el dominio pleno sobre el bien' es ___."

explicacion: |
  La posesión es el poder de hecho sobre una cosa, mientras que el dominio es el derecho real de propiedad. No son sinónimos.
```

### 24 — Sucesiones: Orden de prelación

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "avanzado"
  tags: ["sucesiones", "herencia"]

variables:
  orden: ["Descendientes", "Ascendientes", "Cónyuge", "Colaterales"]

respuesta_orden: orden
tipo: ordenar

enunciado: "Ordene los siguientes órdenes hereditarios según la prelación legal típica en el derecho civil (de mayor a menor prioridad):"

explicacion: |
  La ley establece un orden de vocación hereditaria para asegurar la transmisión de bienes, priorizando generalmente a los descendientes y luego a los ascendientes y cónyuge.
opciones_explicitas: orden
```

### 25 — Responsabilidad Civil

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["responsabilidad", "daños"]

variables:
  datos: [["El daño fue causado por negligencia", "subjetiva"], ["El daño fue causado por un animal de la persona", "objetiva"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["subjetiva", "objetiva"]

enunciado: "Analice el siguiente evento: {datos[idx][0]}. ¿Qué tipo de responsabilidad civil se está analizando principalmente?"

explicacion: |
  La responsabilidad subjetiva se basa en la culpa o dolo, mientras que la objetiva se basa en el riesgo creado o la guarda de una cosa.
```
