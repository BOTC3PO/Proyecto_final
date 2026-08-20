# Examen jefe — Jurista Multidisciplinario

> Logro #203. Completaste el examen integrador de las principales ramas del derecho. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **125 preguntas totales** en 5/5 secciones.

---

## Sección: derecho-civil (25 preguntas)

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

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["sujetos", "personas"]

tipo: completar
respuestas_validas: ["persona física", "persona jurídica"]

respuesta: "persona jurídica"

enunciado: "En el derecho civil, además de la ___ (ser humano), existen las ___ (entidades como sociedades o fundaciones) que tienen capacidad para ser sujetos de derechos y obligaciones."

explicacion: |
  Existen dos tipos de sujetos de derecho: la persona física (el ser humano) y la persona jurídica (entes colectivos o instituciones con personalidad propia).
```

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

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["relaciones_juridicas"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El contrato de compraventa de un automóvil", "La herencia de un inmueble"],
    ["La celebración de un matrimonio", "La transferencia de propiedad de un bien"]
  ]

tipo: mc
opciones_explicitas: ["Relaciones de Derecho Público", "Relaciones de Derecho Privado"]

respuesta: "Relaciones de Derecho Privado"

enunciado: "Tanto {escenarios[escenario_idx][0]} como {escenarios[escenario_idx][1]} son ejemplos de relaciones reguladas por el Derecho Civil, por lo tanto, pertenecen al ámbito del:"

explicacion: |
  El Derecho Civil es la piedra angular del Derecho Privado, ya que regula los intereses de los particulares.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["capacidad", "orden_logico"]

tipo: ordenar
opciones_explicitas: ["Nacimiento de la persona", "Adquisición de la capacidad de goce", "Ejercicio de la capacidad de ejercicio"]

respuesta: ["Nacimiento de la persona", "Adquisición de la capacidad de goce", "Ejercicio de la capacidad de ejercicio"]

enunciado: "Ordene cronológicamente los hitos que permiten el desarrollo de la personalidad jurídica y su capacidad en un individuo:"

explicacion: |
  Primero nace la persona (existencia), lo que le otorga capacidad de goce (derechos), y con el tiempo y la madurez adquiere la capacidad de ejercicio (facultad de actuar por sí mismo).
```

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

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: "Verdadero"
tipo: "vf"

explicacion: |
  El contrato de compraventa es el acuerdo de voluntades donde una parte se obliga a entregar un bien y la otra a pagar un precio cierto. Al existir consentimiento sobre el objeto y el precio, el contrato es válido.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["capacidad", "personas"]

variables:
  datos: [[16, "Verdadero"], [25, "Verdadero"], [30, "Verdadero"]]
  idx: uno_de([0, 1, 2])
  edad: datos[idx][0]

enunciado: "Un individuo de {edad} años desea realizar un contrato de arrendamiento de forma autónoma. Según la normativa civil general, si la persona es mayor de edad, posee capacidad de ejercicio."

opciones_explicitas: ["Verdadero", "Falso"]
respuesta: datos[idx][1]
tipo: "vf"

explicacion: |
  La capacidad de ejercicio es la aptitud para ejercer derechos y contraer obligaciones por sí mismo. En la mayoría de las legislaciones, se adquiere con la mayoría de edad.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["sucesiones", "herencia"]

variables:
  causa: uno_de(["testamento", "falta de testamento"])

enunciado: "Ante el fallecimiento de una persona, si la causa de la transmisión de sus bienes es {causa}, nos encontramos ante una sucesión testamentaria o una sucesión legítima (ab intestato) respectivamente."

respuestas_validas: ["testamentaria", "legítima"]
respuesta: "testamentaria"
tipo: "completar"

explicacion: |
  La sucesión testamentaria es aquella que se rige por la voluntad del causante expresada en un testamento. La legítima (o ab intestato) ocurre cuando la ley determina a los herederos ante la ausencia de testamento.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "avanzado"
  tags: ["acton_juridico", "vicios"]

variables:
  vicio: uno_de(["error", "dolo", "violencia"])

enunciado: "Para que un acto jurídico sea válido, su voluntad debe ser libre. Si una persona es obligada mediante amenazas físicas para firmar un contrato, el vicio que afecta la validez es el ___."

respuestas_validas: ["vicio de violencia"]
respuesta: "vicio de violencia"
tipo: "completar"

explicacion: |
  La violencia es un vicio del consentimiento que consiste en la coacción física o moral que anula la libertad de la voluntad del sujeto.
```

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
respuesta: ["Escritura pública", "Pago del precio", "Inscripción registral"]
tipo: "ordenar"

explicacion: |
  En bienes inmuebles, el proceso requiere la formalidad de la escritura, el cumplimiento de la contraprestación (pago) y la inscripción en el Registro de la Propiedad para que el derecho sea oponible a terceros.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["conceptos_basicos", "relaciones_privadas"]

respuesta: "privadas"
tipo: completar
respuestas_validas: ["privadas", "privada"]

enunciado: "A diferencia del derecho público, el derecho civil regula las relaciones entre personas de carácter ___."

explicacion: |
  El derecho civil se encarga de las relaciones entre particulares (personas físicas o jurídicas) en un plano de igualdad, a diferencia del derecho público que regula la relación entre el Estado y los ciudadanos.
```

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

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["sujetos_derecho"]

variables:
  escenario: uno_de([
    ["Un contrato de compraventa entre dos vecinos", "civil"],
    ["Una multa por exceso de velocidad", "administrativo"],
    ["Un juicio por un delito de robo", "penal"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["civil", "administrativo", "penal"]

enunciado: "Identifique la naturaleza jurídica del siguiente caso: {escenario[0]}."

explicacion: |
  El caso planteado involucra a dos particulares en una relación de igualdad, lo cual es el núcleo del derecho civil.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["sucesiones", "orden_legal"]

respuesta: ["1. Testamento", "2. Sucesión Intestada", "3. Sucesión Abintestato"]
tipo: ordenar
opciones_explicitas: ["1. Testamento", "2. Sucesión Intestada", "3. Sucesión Abintestato"]

enunciado: "Ordene los criterios de prelación para determinar la transmisión de bienes tras el fallecimiento de una persona:"

explicacion: |
  En derecho civil, el orden de prioridad comienza por la voluntad del causante (testamento) y, en su defecto, se aplica la ley (sucesión intestada/abintestato).
```

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

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "basico"
  tags: ["definicion", "comparacion"]

respuesta: "derecho_privado"
tipo: completar
respuestas_validas: ["derecho_privado"]

enunciado: "Mientras que el derecho público regula la organización del Estado y sus relaciones con los particulares, el derecho civil pertenece al ámbito del ________."

explicacion: |
  El derecho civil se encarga de regular las relaciones entre particulares (personas físicas o jurídicas) en condiciones de igualdad, situándose dentro de la rama del derecho privado.
```

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

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "avanzado"
  tags: ["contratos", "ordenar"]

opciones_explicitas: ["Normas de orden público", "Autonomía de la voluntad (acuerdo de partes)", "Cumplimiento de la prestación"]
respuesta: ["Normas de orden público", "Autonomía de la voluntad (acuerdo de partes)", "Cumplimiento de la prestación"]
tipo: ordenar

enunciado: "En la validez de un contrato civil, ordene cronológicamente la jerarquía de aplicación: primero las normas que no pueden ser alteradas por las partes, luego la voluntad de los contratantes y finalmente la ejecución del acto."

explicacion: |
  El orden jurídico establece que las normas de orden público son la base infranqueable; sobre ellas opera la autonomía de la voluntad para crear reglas particulares, las cuales culminan en el cumplimiento de lo pactado.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["contratos", "derecho_administrativo"]

variables:
  datos: [[true, "se rige por el derecho privado"], [false, "se rige por el derecho público"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["se rige por el derecho privado", "se rige por derecho público"]

enunciado: "Si un particular celebra un contrato de compraventa con otro particular, la naturaleza de la relación es que {datos[idx][0]}."

explicacion: |
  En un contrato entre particulares, la relación es de derecho privado. Si una de las partes fuera el Estado actuando con prerrogativas de poder público, entraríamos en el ámbito del derecho administrativo.
```

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
respuestas_validas: ["consentimiento", "objeto", "vicio"]

enunciado: "En el siguiente supuesto: {datos[idx][0]}. El elemento esencial del contrato que se está describiendo o afectando es el ___."

explicacion: |
  Para que un contrato sea válido, requiere objeto lícito, causa lícita y consentimiento de las partes.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "intermedio"
  tags: ["derechos_reales", "propiedad"]

variables:
  datos: [[true, "Es propietario"], [false, "Es poseedor"]]
  idx: uno_de([0, 1])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Si una persona tiene el control de un bien pero no tiene el título de propiedad que la acredite legalmente, la afirmación de que 'tiene el dominio pleno sobre el bien' es ___."

explicacion: |
  La posesión es el poder de hecho sobre una cosa, mientras que el dominio es el derecho real de propiedad. No son sinónimos.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_civil"
  nivel: "avanzado"
  tags: ["sucesiones", "herencia"]

variables:
  orden: ["Descendientes", "Ascendientes", "Cónyuge", "Colaterales"]

respuesta: orden
tipo: ordenar

enunciado: "Ordene los siguientes órdenes hereditarios según la prelación legal típica en el derecho civil (de mayor a menor prioridad):"

explicacion: |
  La ley establece un orden de vocación hereditaria para asegurar la transmisión de bienes, priorizando generalmente a los descendientes y luego a los ascendientes y cónyuge.
```

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

## Sección: derecho-comercial (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

tipo: mc
opciones_explicitas: ["Es el conjunto de normas que regulan la actividad de los comerciantes y los actos de comercio.", "Es el conjunto de normas que regulan exclusivamente las relaciones entre personas físicas.", "Es la rama que regula únicamente los contratos de alquiler.", "Es el conjunto de normas que regulan la actividad de las empresas y los actos de comercio."]

respuesta: "Es el conjunto de normas que regulan la actividad de los comerciantes y los actos de comercio."

enunciado: "El Derecho Comercial se define fundamentalmente como el conjunto de normas que regulan ___."

explicacion: |
  El Derecho Comercial es la rama del derecho privado que regula la actividad de los comerciantes, la organización de las empresas y los actos de comercio.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["sujetos", "comerciante"]

tipo: vf
respuesta: falso

enunciado: "¿Es verdadero o falso que el Derecho Comercial regula únicamente a las personas jurídicas (sociedades), excluyendo a las personas humanas que actúan como comerciantes?"

explicacion: |
  Falso. El Derecho Comercial regula tanto a las personas humanas que realizan actos de comercio como a las personas jurídicas (sociedades comerciales).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["empresa", "elementos"]

variables:
  idx: uno_de([0, 1])
  datos: [["capital", "el aporte económico"], ["fuerza de trabajo", "el esfuerzo humano"]]

tipo: completar
respuestas_validas: ["capital", "fuerza de trabajo"]
respuesta: datos[idx][0

enunciado: "En el ámbito del derecho comercial, un elemento esencial para la organización de la empresa es el ___."

pasos:
  - "Identificar los elementos que componen la unidad económica de la empresa."
  - "Seleccionar el concepto que completa la definición técnica."

explicacion: |
  La empresa requiere de elementos como el capital, la fuerza de trabajo, la tecnología y la organización para cumplir su fin lucrativo.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["actos_de_comercio", "clasificacion"]

tipo: mc
opciones_explicitas: ["Actos de comercio por su naturaleza (objetivos)", "Actos de comercio por la voluntad de las partes (subjetivos)", "Actos de comercio por su cuantía", "Actos de comercio por su duración"]

respuesta: "Actos de comercio por su naturaleza (objetivos)"

enunciado: "Cuando un acto es considerado comercial por la ley, independientemente de quién lo realice, estamos ante actos de comercio ___."

explicacion: |
  Los actos de comercio pueden ser objetivos (por su naturaleza, como la compraventa de bienes muebles para revender) o subjetivos (dependiendo de la calidad de la persona que lo realiza).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "avanzado"
  tags: ["quiebra", "concurso_preventivo", "proceso"]

tipo: ordenar
opciones_explicitas: ["Estado de insolvencia", "Concurso preventivo", "Quiebra"]
respuesta: ["Estado de insolvencia", "Concurso preventivo", "Quiebra"]

enunciado: "Ordene cronológicamente los estadios típicos de un proceso de crisis económica de un comerciante, desde la situación inicial hasta la liquidación forzosa."

explicacion: |
  El proceso suele comenzar con un estado de insolvencia, que puede derivar en un concurso preventivo (para renegociar deudas) o directamente en una quiebra (liquidación de activos).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["sociedades", "comerciantes"]

variables:
  datos: [["sociedad", "sociedad"], ["contrato civil", "contrato civil"], ["asociación sin fines de lucro", "asociación sin fines de lucro"], ["persona física", "persona física"]]
  idx: uno_de([0,1,2,3])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: [datos[0][0], datos[1][0], datos[2][0], datos[3][0]]

enunciado: "Cuando dos o más personas se obligan a realizar aportes para un fin común y repartirse las ganancias, constituyen una ___."

explicacion: |
  En el derecho comercial, la unión de voluntades para un fin lucrativo y mediante aportes constituye una sociedad comercial.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["comerciante", "acto_de_comercio"]

respuesta: falso
tipo: "vf"

enunciado: "Una persona que realiza actos de comercio de forma habitual y profesional es considerada comerciante por la ley."

explicacion: |
  Verdadero. La habitualidad y la profesionalidad en el ejercicio de actos de comercio definen la condición de comerciante.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["sociedades", "pasos_legales"]

variables:
  idx: uno_de([0, 1])

respuesta: ["redacción del contrato", "inscripción en el registro", "publicación de edictos", "obtención de CUIT"]
tipo: "ordenar"
opciones_explicitas: ["redacción del contrato", "inscripción en el registro", "publicación de edictos", "obtención de CUIT"]

enunciado: "Ordene cronológicamente los pasos para la formalización de una sociedad comercial (Considere el orden estándar de constitución)."

explicacion: |
  El orden lógico comienza con la voluntad de las partes (contrato), sigue con la publicidad (edictos), la formalidad registral (inscripción) y finalmente la habilitación impositiva (CUIT).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "avanzado"
  tags: ["quiebras", "concurso_preventivo"]

variables:
  caso: uno_de([[1000, "reorganización"], [2000, "liquidación"]])

respuesta: "reorganización"
tipo: "mc"
opciones_explicitas: ["reorganización", "liquidación", "extinción inmediata", "suspensión de pagos"]

enunciado: "Un comerciante con dificultades financieras solicita un concurso preventivo para evitar la quiebra. El objetivo principal de este proceso es la {caso[1]} de sus deudas."

explicacion: |
  El concurso preventivo busca la reorganización de la empresa mediante un acuerdo con los acreedores para evitar la quiebra.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["contratos", "comercio"]

respuesta: "precio"
tipo: "completar"
respuestas_validas: ["precio"]

enunciado: "En un contrato de compraventa mercantil, el intercambio se centra en la entrega de una cosa a cambio de un ___ determinado."

explicacion: |
  El precio es el elemento esencial que distingue a la compraventa de otras figuras jurídicas en el ámbito comercial.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "acto_de_comercio"]

respuesta: falso
tipo: vf

enunciado: "El derecho comercial regula únicamente los actos realizados por personas con la condición de 'comerciante', dejando de lado la naturaleza del acto en sí mismo."

explicacion: |
  El derecho comercial moderno se basa tanto en el sujeto (comerciante) como en el objeto (acto de comercio). Un acto puede ser comercial por su naturaleza, aunque el sujeto no esté matriculado.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["distincion_civil_comercial", "sujeto"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [[["Compraventa de un bien mueble para reventa", "Comercial"], ["Préstamo de dinero entre amigos sin interés", "Civil"]]]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["Comercial", "Civil"]

enunciado: "Determine la naturaleza jurídica del siguiente caso: {escenarios[escenario_idx][0]}"

explicacion: |
  La distinción radica en la finalidad de lucro y la intermediación en el cambio. En el primer caso hay intención de reventa (lucro), en el segundo es un acto de mera administración o ayuda mutua.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["sociedades", "elementos"]

respuesta: ["Aportes", "Affectio Societatis", "Fin de lucro"]
tipo: ordenar

opciones_explicitas: ["Affectio Societatis", "Aportes", "Fin de lucro"]

enunciado: "Ordene los elementos esenciales de un contrato de sociedad desde su constitución hasta su objetivo final:"

explicacion: |
  Para que exista sociedad se requiere primero el aporte de bienes, luego la voluntad de asociación (affectio societatis) y finalmente el objetivo de obtener una ganancia (fin de lucro).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "avanzado"
  tags: ["concursos_y_quiebras", "insolvencia"]

variables:
  es_insolvente: uno_de([verdadero, falso])
  caso_texto: uno_de(["El sujeto mantiene su patrimonio pero no puede pagar sus deudas vencidas.", "El sujeto tiene activos que superan sus deudas pero tiene problemas de liquidez."])

respuesta: es_insolvente

tipo: completar
enunciado: "En el marco del derecho comercial, la quiebra se dicta cuando el sujeto presenta un estado de {caso_texto} que constituye insolvencia."

explicacion: |
  La quiebra es un proceso de ejecución colectiva que requiere la existencia de un estado de cesación de pagos (insolvencia), no solo una dificultad temporal de caja.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["comerciante", "sujeto_derecho"]

respuesta: "comerciante"
tipo: completar
respuestas_validas: ["comerciante"]

enunciado: "La persona que se encuentra legalmente inscrita en el registro correspondiente y realiza actos de comercio de forma habitual es denominada _________."

explicacion: |
  La habitualidad y la inscripción en el registro mercantil son requisitos que definen la condición de comerciante en la mayoría de las legislaciones comerciales.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["caracteristicas", "comparacion"]

respuesta: "especial"
tipo: "completar"
respuestas_validas: ["especial", "especialidad"]

enunciado: "A diferencia del Derecho Civil, que es de carácter general, el Derecho Comercial se caracteriza por su naturaleza ___."

explicacion: |
  El Derecho Comercial es una rama especial del Derecho que regula actos de comercio y sujetos específicos, diferenciándose de la generalidad del Derecho Civil.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["sujetos", "comerciante"]

opciones_explicitas: ["Persona física únicamente", "Persona física y persona jurídica", "Solo sociedades anónimas", "Solo personas físicas"]
respuesta: "Persona física y persona jurídica"
tipo: "mc"

enunciado: "En el ámbito del Derecho Comercial, ¿quiénes pueden ser considerados sujetos de derecho (comerciantes/empresarios)?"

explicacion: |
  El Derecho Comercial regula tanto a las personas humanas (físicas) como a las personas jurídicas (sociedades) que realizan actos de comercio.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["aplicacion", "contratos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["compraventa de un auto entre particulares", "compraventa de mercadería para reventa"],
    ["alquiler de una vivienda para uso familiar", "contrato de leasing de maquinaria industrial"]
  ]
  tipo_acto: ["civil", "comercial"]
  respuestas: [
    ["civil", "civil"],
    ["comercial", "comercial"]
  ]

respuesta: respuestas[escenario_idx][1
tipo: "vf"

enunciado: "Analice el siguiente caso: '{escenarios[escenario_idx][0]}'. ¿El acto jurídico resultante es de naturaleza {tipo_acto[0]}?"

explicacion: |
  Si el acto tiene como fin el lucro o la intermediación en el mercado, se rige por el Derecho Comercial; de lo contrario, pertenece al Derecho Civil.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "avanzado"
  tags: ["responsabilidad", "quiebra"]

respuesta: "quiebra"
tipo: "completar"
respuestas_validas: ["quiebra", "concurso preventivo"]

enunciado: "Mientras que en el Derecho Civil la insolvencia se resuelve mediante procesos de ejecución patrimonial, en el Derecho Comercial la insolvencía del comerciante se regula principalmente a través del proceso de ___."

explicacion: |
  El Derecho Comercial posee institutos específicos para la insolvencia, como el concurso preventivo y la quiebra, para proteger el crédito y la unidad de la masa.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["historia", "evolucion"]

opciones_explicitas: ["Derecho de castas", "Derecho de clases", "Derecho de corporaciones", "Derecho de individuos"]
respuesta: "Derecho de corporaciones"
tipo: "mc"

enunciado: "Históricamente, el Derecho Comercial se originó como un derecho de ___, basado en los usos y costumbres de los gremios de mercaderes, diferenciándose del derecho romano-civilista."

explicacion: |
  El origen del derecho comercial es corporativo, nacido de las necesidades de los estamentos de comerciantes que requerían reglas rápidas y basadas en la costumbre.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["sociedades", "comerciantes"]

variables:
  datos: [["Juan y Pedro deciden formar una sociedad para vender muebles", "sociedad"], ["Ana decide abrir una tienda de ropa como persona física", "persona_fisica"]]
  idx: uno_de([0, 1])

enunciado: "En el caso de que {datos[idx][0]}, la entidad constituida se denomina una ___."

respuestas_validas: ["sociedad", "persona_fisica"]
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Si hay un acuerdo de voluntades para un fin común y aportes, se constituye una sociedad. Si actúa un individuo, es persona física/humana.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["contratos", "comercio"]

variables:
  datos: [["Compraventa de mercadería para reventa", "comercial"], ["Alquiler de una vivienda para uso familiar", "civil"]]
  idx: uno_de([0, 1])

enunciado: "Considerando que el acto es {datos[idx][0]}, el contrato resultante es de naturaleza ___."

opciones_explicitas: ["comercial", "civil", "administrativo"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Los contratos comerciales son aquellos que tienen por objeto actos de comercio o son realizados por comerciantes en el ejercicio de su profesión.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "avanzado"
  tags: ["quiebra", "concurso"]

variables:
  datos: [["El comerciante tiene insolvencia pero busca un acuerdo con acreedores", "concurso"], ["El comerciante es insolvente y no tiene posibilidad de acuerdo", "quiebra"]]
  idx: uno_de([0, 1])

enunciado: "Si la situación es {datos[idx][0]}, el proceso legal correspondiente es un ___."

opciones_explicitas: ["concurso preventivo", "quiebra directa", "liquidación"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El concurso preventivo busca la protección del deudor mediante un acuerdo; la quiebra busca la liquidación de activos ante la insolvencia total.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["sociedades", "requisitos"]

enunciado: "¿Es verdadero o falso que para la existencia de una sociedad comercial es indispensable la existencia de un fin de lucro?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc

explicacion: |
  El ánimo de lucro (o fin de lucro) es el elemento esencial que distingue a las sociedades de las asociaciones civiles sin fines de lucro.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["concurso", "pasos"]

variables:
  orden_correcta: ["Presentación del pedido de concurso", "Verificación de créditos", "Acuerdo preventivo", "Homologación judicial"]

enunciado: "Ordene cronológicamente las etapas típicas de un proceso de concurso preventivo exitoso:"

opciones_explicitas: ["Presentación del pedido de concurso", "Verificación de créditos", "Acuerdo preventivo", "Homologación judicial"]
respuesta: ["Presentación del pedido de concurso", "Verificación de créditos", "Acuerdo preventivo", "Homologación judicial"]
tipo: ordenar

explicacion: |
  El proceso inicia con la presentación, sigue con la acreditación de los derechos de los acreedores (verificación), la negociación del acuerdo y finalmente el control judicial (homologación).
```

## Sección: derecho-constitucional (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["definicion", "fundamentos"]

respuesta: "estudia la Constitución, la organización del Estado y los derechos fundamentales"
tipo: completar
respuestas_validas: ["estudia la Constitución, la organización del Estado y los derechos fundamentales"]

enunciado: "El Derecho Constitucional es la rama del derecho público que ___."

explicacion: |
  El Derecho Constitucional se encarga de regular la estructura fundamental del Estado y la protección de los derechos de los ciudadanos frente al poder.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["objeto_estudio"]

variables:
  escenario: uno_de([[ "Constitución", "leyes comunes" ], [ "Constitución", "normas de tránsito" ], [ "Constitución", "contratos privados" ]])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["Constitución", "leyes comunes", "normas de tránsito", "contratos privados"]

enunciado: "El objeto principal de estudio del Derecho Constitucional es la {escenario[0]}."

explicacion: |
  La Constitución es la norma suprema que rige la organización de un Estado.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["jerarquia", "normas"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema jurídico democrático, la Constitución se encuentra en la cúspide de la jerarquía normativa, por encima de las leyes ordinarias."

explicacion: |
  Efectivamente, el principio de supremacía constitucional establece que ninguna norma inferior puede contradecir la Constitución.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["partes_constitucion"]

respuesta: ["Parte Dogmática", "Parte Orgánica", "Cláusulas de Reforma"]
tipo: ordenar
opciones_explicitas: ["Parte Dogmática", "Parte Orgánica", "Cláusulas de Reforma"]

enunciado: "Ordene los componentes típicos de una Constitución moderna de mayor a menor jerarquía conceptual (desde la protección de derechos hasta el mecanismo de cambio):"

explicacion: |
  La Parte Dogmática contiene los derechos; la Orgánica la estructura del Estado; y las Cláusulas de Reforma regulan cómo cambiar la propia Constitución.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["derechos_fundamentales"]

variables:
  datos: [[ "libertad de expresión", "derecho a la vida" ], [ "libertad de culto", "derecho a la vida" ], [ "derecho a la propiedad", "derecho a la vida" ]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["libertad de expresión", "derecho a la vida", "derecho a la propiedad", "derecho al voto"]

enunciado: "De la siguiente lista, identifique cuál de estos es un derecho fundamental clásico protegido por la Constitución: {datos[idx][0]}."

explicacion: |
  Aunque todos pueden ser derechos, el derecho a la vida es considerado el pilar fundamental sobre el cual se asientan los demás derechos humanos y constitucionales.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["constitucion", "control_constitucional"]

variables:
  datos: [["constitucional", "inconstitucional", "nulo", "inaplicable"], ["inconstitucional"]]
  idx: uno_de([0])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: datos[idx][0]

enunciado: "Si una ley sancionada por el Congreso contradice un principio fundamental establecido en la Constitución Nacional, un juez debe declarar que dicha ley es ___."

explicacion: |
  El control de constitucionalidad es la facultad de los jueces de asegurar que ninguna norma inferior (como una ley) contradiga la norma suprema (la Constitución). Si hay contradicción, la norma debe ser declarada inconstitucional.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["poderes", "estado"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [[0, "Poder Ejecutivo"], [1, "Poder Legislativo"]]

respuesta: "falso"
tipo: completar
enunciado: "En un sistema republicano, el {escenario[escenario_idx]} tiene la función principal de dictar leyes que rigen a toda la sociedad."

explicacion: |
  La función de dictar leyes corresponde al Poder Legislativo. El Poder Ejecutivo (escenario[0]) tiene la función de administrar y ejecutar las leyes.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["derechos_fundamentales", "libertad_expresion"]

respuesta: ["libertad de expresión", "derecho a la intimidad"]
tipo: completar
respuestas_validas: ["libertad de expresión", "derecho a la intimidad"]

enunciado: "Un periodista publica información veraz sobre un funcionario público para denunciar corrupción. En este conflicto de derechos, la jurisprudencia suele priorizar la ___ sobre el ___."

pasos:
  - "Identificar el derecho en juego: informar sobre asuntos de interés público."
  - "Contrastar con el derecho a la privacidad del funcionario en el ejercicio de su cargo."
  - "Determinar cuál prevalece según la doctrina constitucional."

explicacion: |
  En casos de interés público, el derecho a la información y la libertad de expresión suelen prevalecer sobre la privacidad de los funcionarios, siempre que la información sea veraz y de relevancia social.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["jerarquia", "kelsen"]

respuesta: ["Constitución Nacional", "Tratados Internacionales de Derechos Humanos", "Leyes Nacionales", "Decretos"]
tipo: ordenar

opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales de Derechos Humanos", "Leyes Nacionales", "Decretos"]

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía, siguiendo el ordenamiento jurídico basado en la supremacía constitucional."

explicacion: |
  La Constitución y los Tratados de Derechos Humanos con jerarquía constitucional están en la cima. Por debajo se encuentran las leyes nacionales y, finalmente, los decretos del Poder Ejecutivo.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "avanzado"
  tags: ["debido_proceso", "garantias"]

respuesta: 1
tipo: mc
opciones_explicitas: [0, 1, 2]

enunciado: "Un ciudadano es detenido y se le impide el acceso a un abogado y a ser escuchado por un juez antes de ser procesado. ¿Se ha vulnerado el derecho al debido proceso? (0: No, 1: Sí, 2: Solo si la prueba es falsa)"

explicacion: |
  El debido proceso es un derecho fundamental que garantiza que toda persona sea escuchada y tenga defensa técnica antes de que se dicte una resolución en su contra. La falta de defensa técnica y de intervención judicial viola este principio.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional_definicion"
  nivel: "basico"
  tags: ["definicion", "fundamentos"]

opciones_explicitas: ["La regulación de las relaciones entre privados", "La estructura del Estado y los derechos fundamentales", "La organización de las empresas y el comercio", "El estudio de los delitos y las penas"]

respuesta: "La estructura del Estado y los derechos fundamentales"
tipo: "mc"

enunciado: "El objeto de estudio principal del Derecho Constitucional es ___."

explicacion: |
  El Derecho Constitucional se centra en la norma suprema, la organización de los poderes del Estado y la garantía de los derechos fundamentales de los ciudadanos.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional_clasificacion"
  nivel: "basico"
  tags: ["clasificacion", "derecho_publico"]

respuesta: verdadero
tipo: "vf"

enunciado: "El Derecho Constitucional pertenece a la rama del Derecho Público, ya que regula la organización del Estado y las relaciones entre el Estado y los individuos."

explicacion: |
  Correcto. Al regular la estructura del poder estatal y las garantías frente al mismo, se clasifica dentro del Derecho Público.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional_vs_administrativo"
  nivel: "intermedio"
  tags: ["distincion", "derecho_administrativo"]

variables:
  datos: [["La norma suprema que establece la división de poderes", "La regulación de los procedimientos de los trámites en una oficina pública"], ["La base de la jerarquía normativa", "El funcionamiento operativo de la administración"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: "completar"
respuestas_validas: [datos[idx][1]]

enunciado: "Mientras que el Derecho Constitucional estudia {datos[idx][0]}, el Derecho Administrativo se ocupa de {datos[idx][1]}."

explicacion: |
  El Derecho Constitucional establece el marco general y la estructura (el "qué" y "quién"), mientras que el Derecho Administrativo regula la actividad y procedimientos de la administración pública (el "cómo" operativo).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional_jerarquia"
  nivel: "intermedio"
  tags: ["kelsen", "jerarquia", "normas"]

opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales de Derechos Humanos", "Leyes Nacionales", "Decretos del Poder Ejecutivo"]

respuesta: ["Constitución Nacional", "Tratados Internacionales de Derechos Humanos", "Leyes Nacionales", "Decretos del Poder Ejecutivo"]
tipo: "ordenar"

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía según la supremacía constitucional (considerando el bloque de constitucionalidad):"

explicacion: |
  La Constitución y los Tratados de Derechos Humanos con jerarquía constitucional encabezan el ordenamiento, seguidos por las leyes y finalmente los decretos.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional_vs_privado"
  nivel: "basico"
  tags: ["distincion", "derecho_privado"]

respuesta: falso
tipo: "vf"

enunciado: "El estudio de la validez de un contrato de compraventa entre dos ciudadanos particulares es una materia propia del Derecho Constitucional."

explicacion: |
  Falso. La regulación de los contratos entre particulares pertenece al Derecho Privado (como el Derecho Civil), no al Derecho Constitucional.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["definicion", "jerarquia"]

respuesta: "derecho_público"
tipo: completar
respuestas_validas: ["derecho_público"]

enunciado: "A diferencia del derecho privado, que regula las relaciones entre particulares, el derecho constitucional pertenece al ámbito del ___________."

explicacion: |
  El derecho constitucional es la base del derecho público, ya que regula la estructura del Estado y la relación entre este y los ciudadanos.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["jerarquia", "normativa"]

variables:
  escenario: uno_de([["Constitución", "Tratado Internacional", "Ley Común"], ["Constitución", "Decreto", "Resolución"]])
  nivel_norma: uno_de([0, 1])

opciones_explicitas: ["Constitución", "Tratado Internacional", "Ley Común", "Decreto", "Resolución"]

respuesta: escenario[nivel_norma
tipo: mc

enunciado: "En la pirámide de Kelsen, ¿cuál de los siguientes elementos tiene mayor jerarquía que una {escenario[nivel_norma == 0 ? 1 : 2]}?"

pasos:
  - "Identificar la posición de la norma mencionada en la jerarquía normativa."
  - "Comparar con la supremacía constitucional."

explicacion: |
  La Constitución es la norma suprema; ninguna norma de menor rango (como leyes o decretos) puede contradecirla.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["relacion", "administracion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que el Derecho Administrativo es una rama especializada que surge de la aplicación de los principios establecidos en el Derecho Constitucional?"

explicacion: |
  Verdadero. El Derecho Administrativo regula la función administrativa del Estado, la cual está subordinada a los principios constitucionales.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "avanzado"
  tags: ["control", "jurisdiccion"]

variables:
  caso: uno_de([["anular", "validar"], ["invalidar", "confirmar"]])

opciones_explicitas: ["anular", "validar", "modificar", "derogar"]

respuesta: caso[0
tipo: mc

enunciado: "Cuando un tribunal ejerce el control de constitucionalidad sobre una ley que contradice la Carta Magna, su función es ___________ dicha norma."

explicacion: |
  El control de constitucionalidad busca asegurar la supremacía de la Constitución, permitiendo la anulación de normas inferiores que la vulneren.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["derechos", "jerarquia"]

opciones_explicitas: ["Reconocimiento de derechos fundamentales", "Promulgación de la Constitución", "Aplicación de la norma por el juez", "Creación de leyes orgánicas"]

respuesta: ["Promulgación de la Constitución", "Reconocimiento de derechos fundamentales", "Creación de leyes orgánicas", "Aplicación de la norma por el juez"]
tipo: ordenar

enunciado: "Ordene cronológicamente el proceso lógico de la vigencia de un derecho constitucional: desde la existencia del texto hasta su aplicación efectiva."

explicacion: |
  Primero se promulga la norma suprema, luego se reconocen los derechos en ella, se desarrollan mediante leyes y finalmente el juez los aplica en casos concretos.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["constitucion", "control_constitucional"]

variables:
  datos: [["Una ley sancionada por el Congreso contradice un artículo de la Constitución.", "inconstitucional"], ["Un decreto presidencial respeta plenamente la Constitución.", "constitucional"], ["Una norma provincial es superior a la Constitución Nacional.", "inconstitucional"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["inconstitucional", "constitucional", "nula"]

enunciado: "Analice el siguiente caso: {datos[idx][0]}. ¿Cuál es la calificación jurídica de la norma respecto a la Constitución?"

explicacion: |
  El control de constitucionalidad asegura la supremacía de la Constitución sobre cualquier otra norma del ordenamiento jurídico.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["poderes", "division_de_poderes"]

respuesta: verdadero
tipo: vf

enunciado: "El principio de división de poderes busca evitar la concentración de la autoridad en un solo órgano, estableciendo un sistema de frenos y contrapesos."

explicacion: |
  La división de poderes es un pilar del Estado de Derecho para garantizar la libertad individual y evitar la tiranía.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["jerarquia_normativa", "piramide_de_kelsen"]

variables:
  orden_jerarquico: [["Constitución Nacional y Tratados de DDHH", "Ley Nacional", "Decreto Reglamentario", "Resolución Ministerial"]]

respuesta: orden_jerarquico

tipo: ordenar
opciones_explicitas: ["Constitución Nacional y Tratados de DDHH", "Ley Nacional", "Decreto Reglamentario", "Resolución Ministerial"]

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía según el bloque de constitucionalidad:"

explicacion: |
  La Constitución y los Tratados de Derechos Humanos con jerarquía constitucional ocupan la cúspide, seguidos por las leyes, decretos y finalmente las resoluciones.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["derechos_fundamentales", "libertades"]

variables:
  datos: [["El Estado prohíbe toda manifestación pública sin permiso previo.", "es_falso"], ["Se garantiza la libertad de expresión, pero con responsabilidad."], "es_verdadero"]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["es_falso", "es_verdadero"]

enunciado: "En un Estado de Derecho, la afirmación: '{datos[idx][0]}' ___."

explicacion: |
  Los derechos fundamentales son inherentes a la persona y el Estado debe garantizarlos, permitiendo solo restricciones legales y proporcionales.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "avanzado"
  tags: ["poder_judicial", "control_represivo"]

variables:
  datos: [["El Poder Judicial debe realizar un control ___ sobre la constitucionalidad de las leyes.", "represivo"], ["El Poder Judicial realiza un control ___ sobre la constitucionalidad de las leyes.", "preventivo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["represivo", "preventivo", "legislativo"]

enunciado: "En el sistema de control judicial de constitucionalidad, cuando el órgano actúa una vez que la norma ya ha sido dictada y está produciendo efectos, realiza un control ___."

explicacion: |
  El control repressivo actúa sobre leyes ya vigentes, mientras que el preventivo busca evitar que la norma entre en vigor (ej. control de un proyecto de ley).
```

## Sección: derecho-internacional (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional_publico"
  nivel: "basico"
  tags: ["definicion", "sujetos"]

respuesta: "Derecho Internacional Público"
tipo: completar
respuestas_validas: ["Derecho Internacional Público"]

enunciado: "El conjunto de normas que regulan las relaciones entre los Estados y otros sujetos de la comunidad internacional se denomina ___."

explicacion: |
  El Derecho Internacional Público es el sistema normativo que rige las relaciones entre sujetos soberanos (Estados) y organismos internacionales.
```

```
metadata:
  materia: "derecho"
  tema: "sujetos_internacionales"
  nivel: "basico"
  tags: ["sujetos", "estados"]

variables:
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Los Estados", "Las personas físicas únicamente", "Las empresas privadas únicamente", "Ninguna de las anteriores"]

enunciado: "De acuerdo con el escenario seleccionado, ¿cuál es el sujeto principal y soberano del Derecho Internacional?"

pasos:
  - "Identificar la naturaleza jurídica del sujeto mencionado."

explicacion: |
  Los Estados son los sujetos primarios y originarios del Derecho Internacional Público por poseer soberanía.
  
  datos: [["Los Estados", "Los Estados"], ["Las personas físicas", "Las personas físicas"]]
```

```
metadata:
  materia: "derecho"
  tema: "fuentes_derecho"
  nivel: "intermedio"
  tags: ["tratados", "costumbre"]

respuesta: verdadero
tipo: vf

enunciado: "Los tratados internacionales y la costumbre internacional son consideradas fuentes principales del Derecho Internacional Público."

explicacion: |
  Según el Estatuto de la Corte Internacional de Justicia, las fuentes principales son los tratados, la costumbre y los principios generales del derecho.
```

```
metadata:
  materia: "derecho"
  tema: "jerarquia_normativa"
  nivel: "intermedio"
  tags: ["orden", "normas"]

respuesta: ["Tratado Internacional", "Reglamento Administrativo Nacional", "Decreto Presidencial"]
tipo: ordenar
opciones_explicitas: ["Tratado Internacional", "Reglamento Administrativo Nacional", "Decreto Presidencial"]

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía en el ordenamiento jurídico interno de un Estado que ha ratificado un tratado:"

explicacion: |
  En los sistemas jurídicos modernos, los tratados internacionales ratificados suelen tener una jerarquía superior a las leyes internas y reglamentos.
```

```
metadata:
  materia: "derecho"
  tema: "soberania_estatal"
  nivel: "basico"
  tags: ["soberania", "estado"]

variables:
  es_soberano: true

respuesta: true
tipo: completar
enunciado: "La soberanía es la facultad que tiene el Estado para ejercer su autoridad suprema dentro de su territorio y sin subordinación a otros Estados."

explicacion: |
  La soberanía es el elemento esencial que define al Estado como sujeto pleno del Derecho Internacional.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "basico"
  tags: ["tratados", "soberania"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [[["Estado A", "Estado B", "Tratado de Límites"], ["Estado C", "Estado D", "Acuerdo de Fronteras"]]]

enunciado: "El {datos[caso_idx][0]} es un instrumento jurídico mediante el cual el {datos[caso_idx][1]} y el {datos[caso_idx][2]} establecen normas de conducta mutua. ¿Es este un ejemplo de Derecho Internacional Público?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: "vf"

explicacion: |
  El Derecho Internacional Público regula las relaciones entre sujetos de derecho internacional, principalmente Estados soberanos, mediante tratados y normas consuetudinarias.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["organismos_internacionales", "onu"]

variables:
  organismo: uno_de(["ONU", "Corte Penal Internacional"])

enunciado: "Si un Estado firma un tratado para combatir el cambio climático, este compromiso se rige por el Derecho Internacional. Si la entidad encargada de velar por la paz y seguridad internacional es la {organismo}, ¿cuál es su función principal?"

opciones_explicitas: ["Mantener la paz y seguridad internacional", "Regular el comercio entre empresas privadas", "Dictar leyes internas de los países"]
respuesta: "Mantener la paz y seguridad internacional"
tipo: "mc"

explicacion: |
  Las organizaciones internacionales como la ONU son sujetos de derecho internacional que actúan para cumplir fines comunes entre los Estados miembros.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "avanzado"
  tags: ["tratados", "procedimiento"]

enunciado: "Para que un tratado internacional sea plenamente vinculante para un Estado, se debe seguir un orden lógico de pasos. Ordene el proceso de formación de un tratado:"

opciones_explicitas: ["Negociación", "Firma", "Ratificación"]
respuesta: ["Negociación", "Firma", "Ratificación"]
tipo: "ordenar"

explicacion: |
  El proceso estándar comienza con la negociación del texto, sigue con la firma (que expresa la intención) y culmina con la ratificación (que vincula legalmente al Estado según su derecho interno).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "basico"
  tags: ["sujetos", "estados"]

enunciado: "En el marco del Derecho Internacional Público, los sujetos que poseen capacidad jurídica para adquirir derechos y contraer obligaciones internacionales son los Estados y los ___."

respuestas_validas: ["Organismos Internacionales"]
respuesta: "Organismos Internacionales"
tipo: "completar"

explicacion: |
  Además de los Estados, los organismos internacionales (como la OEA o la ONU) son sujetos con capacidad jurídica propia, distinta a la de los Estados que los componen.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["pacta_sunt_servanda"]

variables:
  norma: uno_de(["Pacta sunt servanda", "Lex posterior"])

enunciado: "El principio de que 'lo pactado obliga' se conoce como {norma}. Si un Estado firma un tratado, ¿está obligado a cumplirlo de buena fe?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: "vf"

explicacion: |
  El principio 'Pacta sunt servanda' es la piedra angular del derecho de los tratados, estableciendo que todo tratado en vigor es obligatorio para las partes y debe ser cumplido por ellas de buena fe.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "basico"
  tags: ["sujetos", "estados", "organismos"]

respuesta: "Estados"
tipo: completar
respuestas_validas: ["Estados", "Estado"]

enunciado: "En el Derecho Internacional Público, los principales sujetos con capacidad para contraer obligaciones y ejercer derechos son los ___."

explicacion: |
  El Derecho Internacional Público regula las relaciones entre sujetos de derecho internacional, siendo los Estados soberanos los sujetos primarios y más importantes.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["distincion", "derecho_privado"]

variables:
  es_privado: falso

respuesta: es_privado
tipo: completar
enunciado: "El Derecho Internacional Privado se encarga de regular las relaciones entre particulares (individuos o empresas) cuando existe un elemento extranjero en la relación jurídica."

explicacion: |
  Es un error común confundirlos: el Derecho Internacional Público regula la relación entre sujetos soberanos (Estados/Organismos), mientras que el Privado regula relaciones entre particulares con elementos transfronterizos.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["fuentes", "tratados"]

variables:
  escenario: uno_de([0, 1])
  datos: [
    ["Tratado", "Acuerdo escrito entre sujetos de derecho internacional"],
    ["Costumbre", "Práctica generalizada y aceptada como obligatoria"]
  ]

respuesta: datos[escenario][1
tipo: mc
opciones_explicitas: ["Tratado", "Costumbre", "Ley Nacional", "Sentencia Judicial"]

enunciado: "Si nos referimos a una práctica generalizada que los Estados consideran como obligatoria por el derecho (opinio iuris), estamos ante una: {datos[escenario][0]}."

explicacion: |
  La costumbre internacional es una de las fuentes principales del Derecho Internacional, junto con los tratados.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "avanzado"
  tags: ["jus_cogens", "jerarquia"]

respuesta: "Jus Cogens"
tipo: completar
respuestas_validas: ["Jus Cogens", "Norma Imperativa"]

enunciado: "Las normas de carácter imperativo de derecho internacional general, que no admiten acuerdo en contrario y que protegen valores fundamentales de la comunidad internacional, se denominan ___."

explicacion: |
  El Jus Cogens representa el nivel más alto de la jerarquía en el derecho internacional, siendo normas que no pueden ser derogadas por tratados bilaterales.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["orden", "tratados"]

respuesta: ["Negociación", "Firma", "Ratificación"]
tipo: ordenar
opciones_explicitas: ["Firma", "Negociación", "Ratificación", "Publicación"]

enunciado: "Ordene cronológicamente las etapas típicas de la formación de un tratado internacional, desde el contacto inicial hasta la obligatoriedad definitiva del Estado:"

explicacion: |
  El proceso estándar comienza con la negociación de los términos, sigue con la firma (que expresa la intención de obligarse) y culmina con la ratificación (acto soberano por el cual el Estado confirma su consentimiento).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "basico"
  tags: ["sujetos", "soberania"]

variables:
  escenario: uno_de([
    ["Estado", "Derecho Internacional"],
    ["Individuo", "Derecho Interno"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["Estado", "Individuo", "Empresa", "Organismo Internacional"]

enunciado: "A diferencia del derecho interno, donde el sujeto principal es la persona física o jurídica, el sujeto principal del {escenario[0]} es el {escenario[1]}."

explicacion: |
  El derecho internacional público regula las relaciones entre sujetos con capacidad de derecho internacional, siendo el Estado el actor principal y soberano.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["fuentes", "soberania"]

respuesta: falso
tipo: vf

enunciado: "En el derecho internacional, la soberanía de los Estados permite que una norma contenida en un tratado sea inaplicable si contraviene la voluntad unilateral de un Estado en cualquier momento."

explicacion: |
  Falso. Una vez que un Estado manifiesta su consentimiento en un tratado, queda vinculado por el principio 'pacta sunt servanda', el cual es un pilar del derecho internacional.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "avanzado"
  tags: ["jerarquia", "normas"]

variables:
  caso: uno_de([
    ["Tratado", "Norma Imperativa (Jus Cogens)"],
    ["Tratado", "Tratado Bilateral"]
  ])

respuesta: caso[1
tipo: completar
respuestas_validas: ["Norma Imperativa (Jus Cogens)", "Tratado Bilateral"]

enunciado: "Mientras que la mayoría de las normas internacionales derivan del consentimiento, existen normas de carácter superior denominadas ___ que no admiten acuerdo en contrario."

explicacion: |
  Las normas de 'jus cogens' son normas imperativas de derecho internacional general aceptadas y reconocidas por la comunidad internacional, que no admiten derogación por tratados.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["jurisdiccion", "soberania"]

respuesta: "La jurisdicción es voluntaria"
tipo: mc
opciones_explicitas: ["La jurisdicción es voluntaria", "La jurisdicción es obligatoria", "No existe la jurisdicción", "Es impuesta por la ONU"]

enunciado: "A diferencia del derecho interno, donde el Estado tiene el monopolio de la fuerza y la jurisdicción es obligatoria para los ciudadanos, en el derecho internacional la jurisdicción de un tribunal (como la CIJ) es ___."

explicacion: |
  En el ámbito internacional, la competencia de los tribunales internacionales suele depender del consentimiento de los Estados para someterse a su jurisdicción.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["fuentes", "estatuto_cij"]

respuesta: ["Tratados", "Costumbre Internacional", "Principios Generales del Derecho"]
tipo: ordenar
opciones_explicitas: ["Tratados", "Costumbre Internacional", "Principios Generales del Derecho", "Opinio Juris"]

enunciado: "De acuerdo con el Artículo 38 del Estatuto de la Corte Internacional de Justicia, ordene las fuentes principales del derecho internacional de mayor a menor evidencia de voluntad expresa:"

explicacion: |
  El Estatuto de la CIJ establece como fuentes principales los tratados (conventions), la costumbre (international custom) y los principios generales del derecho.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "basico"
  tags: ["sujetos", "estados"]

variables:
  datos: [["El Estado A firma un tratado de límites con el Estado B", "Estado"], ["La ONU emite una resolución de la Asamblea General", "Organismo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Estado", "Organismo", "Persona Física", "Empresa"]

enunciado: "En el siguiente escenario, se identifica un sujeto del derecho internacional: {datos[idx][0]}. ¿Qué tipo de sujeto es?"

explicacion: |
  Los Estados y las Organizaciones Internacionales son los sujetos primarios del derecho internacional público, capaces de ejercer derechos y contraer obligaciones en la comunidad internacional.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["fuentes", "tratados"]

variables:
  datos: [["Un acuerdo escrito entre dos países para regular el comercio", "Tratado"], ["Una norma que surge de la práctica constante y general de los Estados", "Costumbre"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["Tratado", "Costumbre"]

enunciado: "Analice el caso: {datos[idx][0]}. Según la Convención de Viena, esta fuente del derecho se denomina: ___"

explicacion: |
  Las fuentes principales son los tratados (acuerdos escritos) y la costumbre internacional (práctica generalizada con convicción de obligatoriedad).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "avanzado"
  tags: ["ius_cogens", "normas_imperativas"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es posible que un tratado internacional sea nulo si su contenido contraviene una norma de 'ius cogens' (norma imperativa de derecho internacional general)?"

explicacion: |
  Correcto. Según el derecho internacional, las normas de ius cogens son imperativas y no admiten acuerdo en contrario; cualquier tratado que las contradiga es nulo.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["solucion_pacifica", "metodos"]

variables:
  datos: [["Un tercero imparcial que propone una solución no vinculante", "Mediación"], ["Un tribunal con autoridad para dictar una sentencia obligatoria", "Arbitraje"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Mediación", "Arbitraje", "Negociación", "Conciliación"]

enunciado: "Se presenta el siguiente escenario de resolución de controversias: {datos[idx][0]}. El método aplicado es:"

explicacion: |
  La mediación implica la intervención de un tercero para facilitar el diálogo, mientras que el arbitraje implica una decisión vinculante dictada por un tribunal.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["tratados", "procedimiento"]]

respuesta: ["Negociación", "Firma", "Ratificación"]
tipo: ordenar
opciones_explicitas: ["Negociación", "Firma", "Ratificación", "Publicación"]

enunciado: "Ordene cronológicamente las etapas típicas para que un Estado se obligue formalmente mediante un tratado internacional:"

explicacion: |
  El proceso estándar comienza con la negociación del texto, sigue con la firma (que manifiesta la voluntad de seguir adelante) y culmina con la ratificación (el consentimiento formal del Estado para quedar vinculado).
```

## Sección: derecho-laboral (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["definicion", "conceptos_clave"]

respuesta: "regula la relación entre empleador y trabajador"
tipo: completar
respuestas_validas: ["regula la relación entre empleador y trabajador", "regula la relación entre empleador y trabajador"]

enunciado: "El Derecho Laboral es la rama del derecho que ___."

explicacion: |
  El derecho laboral tiene como objeto principal regular las relaciones jurídicas que surgen entre el empleador y el trabajador.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["contrato", "elementos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["prestación de servicios", "subordinación", "remuneración"], ["prestación de servicios", "autonomía", "remuneración"]]

opciones_explicitas: ["prestación de servicios, subordinación y remuneración", "prestación de servicios, autonomía y remuneración", "solo prestación de servicios"]

respuesta: "prestación de servicios, subordinación y remuneración"
tipo: mc

enunciado: "Para que exista un contrato de trabajo, deben concurrir tres elementos esenciales. Según el escenario planteado, estos son: {datos[escenario_idx][0]}, {datos[escenario_idx][1]} y {datos[escenario_idx][2]}."

explicacion: |
  La subordinación es el elemento distintivo que diferencia un contrato de trabajo de un contrato de servicios profesionales.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["subordinacion", "derechos"]

respuesta: verdadero
tipo: vf

enunciado: "En una relación laboral, el trabajador está sujeto a la dirección y mando del empleador (subordinación)."

explicacion: |
  La subordinación jurídica es la facultad del empleador de dar órdenes y la obligación del trabajador de acatarlas.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["sujetos", "terminologia"]

respuesta: "Trabajador"
tipo: mc
opciones_explicitas: ["Trabajador", "Sindicato", "Estado", "Proveedor"]

enunciado: "La persona física que presta un servicio personal bajo dependencia es el ___."

explicacion: |
  El trabajador es el sujeto que aporta su fuerza de trabajo a cambio de una contraprestación económica.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["jerarquia", "normativa"]

opciones_explicitas: ["Constitución Nacional", "Ley de Contrato de Trabajo", "Convenio Colectivo de Trabajo", "Reglamento Interno"]

respuesta: ["Constitución Nacional", "Ley de Contrato de Trabajo", "Convenio Colectivo de Trabajo", "Reglamento Interno"]
tipo: ordenar

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía en el ámbito laboral:"

explicacion: |
  En el derecho laboral rige el principio de norma más favorable, pero la jerarquía normativa establece el orden de validez de las fuentes.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["contrato", "relacion_laboral"]

respuesta: "subordinación"
tipo: completar
respuestas_validas: ["subordinación", "subordinacion"]

enunciado: "Para que exista un contrato de trabajo, debe existir una prestación de servicios personales por parte del trabajador, una remuneración y un elemento esencial llamado ___."

explicacion: |
  La subordinación es el elemento que distingue la relación laboral de la prestación de servicios profesionales independientes. Implica la facultad del empleador de dar órdenes y la obligación del trabajador de cumplirlas.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["elementos_esenciales", "verificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si una persona presta servicios de forma autónoma, con sus propios medios, sin cumplir un horario impuesto y sin recibir órdenes directas, ¿se configura un contrato de trabajo?"

explicacion: |
  Falso. Al no existir subordinación ni dependencia jerárquica, se trata de una relación de carácter civil o comercial (prestación de servicios), no laboral.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["despido", "indemnizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["despido_sin_causa", "indemnización_total"],
    ["renuncia_voluntaria", "sin_indemnización"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["indemnización_total", "sin_indemnización", "pago_de_salarios_pendientes", "solo_vacaciones"]

enunciado: "Un trabajador es despedido de forma arbitraria (sin causa justificada) tras 2 años de servicio. Según el escenario seleccionado, ¿qué derecho le corresponde principalmente?"

pasos:
  - "Determinar si el despido fue con o sin causa."
  - "Verificar la antigüedad del trabajador."
  - "Aplicar la normativa sobre indemnizaciones por despido injustificado."

explicacion: |
  En el caso de despido sin causa, el trabajador tiene derecho a una indemnización por los daños causados por la ruptura unilateral del vínculo.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "avanzado"
  tags: ["procedimiento", "disciplina"]

respuesta: ["Notificación de falta", "Derecho a defensa", "Aplicación de sanción"]
tipo: ordenar
opciones_explicitas: ["Notificación de falta", "Derecho a defensa", "Aplicación de sanción"]

enunciado: "Ordene cronológicamente los pasos que debe seguir un empleador para aplicar una sanción disciplinaria válida sin vulnerar el debido proceso:"

explicacion: |
  El empleador primero debe comunicar la falta, permitir que el trabajador dé su versión (derecho a defensa) y, finalmente, decidir la sanción proporcional.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["salario", "remuneracion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["$500", "es_ilegal"],
    ["$1200", "es_legal"]
  ]
  ley_minima: 1000

respuesta: "es_ilegal"
tipo: mc
opciones_explicitas: ["es_ilegal", "es_legal"]

enunciado: "Si el salario mínimo legal vigente es de {ley_minima}, un empleador ofrece un sueldo de {casos[caso_idx][0]} por una jornada completa. ¿Cuál es la situación jurídica de este salario?"

explicacion: |
  El salario no puede ser inferior al mínimo establecido por la ley para la jornada completa. Si la oferta es menor, se considera una violación a los derechos laborales.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["definicion", "relacion_laboral"]

respuesta: "subordinación"
tipo: completar
respuestas_validas: ["subordinación", "subordinacion"]

enunciado: "A diferencia del derecho civil, donde prima la autonomía de la voluntad, el derecho laboral se caracteriza por la existencia de un vínculo de ___ entre el trabajador y el empleador."

explicacion: |
  El elemento esencial que distingue la relación laboral de un contrato de servicios profesionales es la subordinación (o dependencia), donde el trabajador está sujeto a las órdenes y dirección del empleador.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["naturaleza_juridica"]

respuesta: verdadero
tipo: vf

enunciado: "¿El Derecho Laboral es una rama autónoma del Derecho, con sus propios principios y normas, o es simplemente una extensión del Derecho Civil?"

explicacion: |
  El Derecho Laboral es autónomo porque posee principios propios (como el principio protector) y un objeto de estudio específico que busca equilibrar la desigualdad natural entre empleador y trabajador.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["distinciones", "contratos"]

variables:
  escenario: uno_de([
    ["Contrato de Locación de Servicios (Civil)", "Civil"],
    ["Contrato de Trabajo (Laboral)", "Laboral"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["Civil", "Laboral"]

enunciado: "Si una persona es contratada para realizar una tarea específica, pero no está sujeta a horarios, no recibe órdenes directas y utiliza sus propios medios, ¿bajo qué rama del derecho se encuadra principalmente esta relación?"

explicacion: |
  En el escenario seleccionado ({escenario[0]}), la ausencia de subordinación y la autonomía técnica desplazan la relación al ámbito del Derecho Civil.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["principios", "proteccion"]

respuesta: "Principio Protector"
tipo: completar
respuestas_validas: ["Principio Protector", "Principio de Protección"]

enunciado: "El principio que busca compensar la desigualdad económica y de poder entre el trabajador y el empleador se denomina ___."

explicacion: |
  El principio protector es la columna vertebral del derecho laboral y se manifiesta en reglas como 'in dubio pro operario'.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "avanzado"
  tags: ["elementos", "requisitos"]

variables:
  orden_correcta: ["Prestación personal", "Subordinación", "Remuneración"]

respuesta: orden_correcta
tipo: ordenar
opciones_explicitas: ["Prestación personal", "Subordinación", "Remuneración"]

enunciado: "Para que exista un contrato de trabajo, deben concurrir tres elementos esenciales. Ordénalos según la lógica de la existencia de la prestación, la dependencia y la contraprestación:"

explicacion: |
  Para que se configure el contrato de trabajo, primero debe haber una prestación personal (el trabajador), que debe ser bajo subordinación (el control del empleador) y siempre a cambio de una remuneración.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["caracteristicas", "naturaleza_juridica"]

respuesta: falso
tipo: vf

enunciado: "El Derecho Laboral se caracteriza por ser una rama del Derecho Privado, similar al Derecho Civil, donde las partes actúan en igualdad de condiciones."

explicacion: |
  El Derecho Laboral es una rama del Derecho Social/Público que busca compensar la desigualdad económica entre empleador y trabajador mediante normas de orden público e irrenunciables.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["contratos", "derecho_civil"]

variables:
  escenario: uno_de([
    ["Contrato de locación de servicios (Civil)", "Civil"],
    ["Contrato de trabajo (Laboral)", "Laboral"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["Civil", "Laboral"]

enunciado: "Si una persona presta un servicio de manera autónoma, sin dependencia ni subordinación, bajo un contrato de locación de servicios, la relación se rige principalmente por el Derecho {escenario[1]}."

explicacion: |
  La subordinación técnica, jurídica y económica es el elemento distintivo que traslada la relación del ámbito Civil al ámbito Laboral.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["elementos", "subordinacion"]

respuestas_validas: ["subordinación", "dependencia"]
respuesta: "subordinación"
tipo: completar

enunciado: "A diferencia de los contratos de naturaleza civil, el contrato de trabajo requiere la existencia de una relación de dependencia y, fundamentalmente, la ___ del trabajador hacia el empleador."

explicacion: |
  La subordinación es el eje central que distingue al trabajador de un contratista independiente.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "avanzado"
  tags: ["principios", "proteccion"]

respuesta: "Principio Protector"
tipo: mc
opciones_explicitas: ["Principio de Autonomía de la Voluntad", "Principio Protector", "Principio de Congruencia", "Principio de Legalidad"]

enunciado: "En el Derecho Civil rige la autonomía de la voluntad; sin embargo, en el Derecho Laboral, para equilibrar la desigualdad de las partes, rige el:"

explicacion: |
  El Principio Protector (en sus variantes in dubio pro operario, de la norma más favorable y de la condición más beneficiosa) es la piedra angular del Derecho Laboral.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["normativa", "jerarquia"]

respuesta: ["Constitución Nacional", "Tratados Internacionales", "Ley de Contrato de Trabajo", "Convenio Colectivo de Trabajo", "Contrato Individual"]
tipo: ordenar
opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales", "Ley de Contrato de Trabajo", "Convenio Colectivo de Trabajo", "Contrato Individual"]

enunciado: "Ordene las normas de mayor a menor jerarquía en el ordenamiento jurídico laboral, considerando el principio de la norma más favorable:"

pasos:
  - "Identificar la norma de máxima jerarquía (Constitución)."
  - "Ubicar los tratados con jerarquía constitucional."
  - "Colocar la ley general de fondo."
  - "Incluir la norma negociada por sindicatos."
  - "Finalizar con el acuerdo particular entre partes."

explicacion: |
  Aunque el principio de la norma más favorable permite aplicar la norma más beneficiosa al trabajador incluso si es de menor jerarquía formal, la estructura jerárquica sigue este orden descendente.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["contrato", "elementos"]

variables:
  datos: [["Juan trabaja como cajero en un súper con un sueldo fijo y bajo dependencia", "contrato"], ["Ana presta servicios profesionales de consultoría sin horario fijo", "no_contrato"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["contrato", "no_contrato"]

enunciado: "Analice el siguiente caso: {datos[idx][0]}. ¿Se ha configurado una relación de dependencia laboral que dé lugar a un contrato de trabajo?"

explicacion: |
  Para que exista un contrato de trabajo, debe haber subordinación técnica, jurídica y económica. En el primer caso, la dependencia y la remuneración fija lo confirman.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["jornada", "horas_extra"]

variables:
  datos: [["8 horas", "8"], ["9 horas", "9"]]
  idx: uno_de([0, 1])

respuestas_validas: [2]
respuesta: 2
tipo: completar
enunciado: "Si la jornada legal es de {datos[idx][0]} horas diarias y el trabajador realiza {datos[idx][0]} horas, ¿se han devengado horas extraordinarias?"

explicacion: |
  Si la jornada trabajada excede el límite legal establecido, el excedente debe pagarse como hora extraordinaria según la legislación vigente.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["elementos", "completar"]

respuesta: "remuneración"
tipo: completar
respuestas_validas: ["remuneración"]

enunciado: "En un contrato de trabajo, la contraprestación económica que recibe el trabajador por sus servicios se denomina ___."

explicacion: |
  La remuneración es el elemento esencial que distingue al contrato de trabajo de otras formas de servicios, como la voluntariedad.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "avanzado"
  tags: ["principios", "irrenunciabilidad"]

respuesta: "irrenunciabilidad"
tipo: mc
opciones_explicitas: ["irrenunciabilidad", "continuidad", "primacía", "prooperidad"]

enunciado: "El principio que establece que el trabajador no puede privarse voluntariamente de las garantías y derechos mínimos establecidos en la ley se denomina principio de ___."

explicacion: |
  El principio de irrenunciabilidad protege al trabajador frente a posibles presiones del empleador para aceptar condiciones inferiores a las legales.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["despido", "procedimiento"]

respuesta: ["Notificación de la causa", "Entrega de preaviso", "Liquidación final"]
tipo: ordenar
opciones_explicitas: ["Notificación de la causa", "Entrega de preaviso", "Liquidación final"]

enunciado: "Ordene cronológicamente los pasos habituales en un proceso de despido con causa:"

explicacion: |
  Primero se debe comunicar la causa, luego se debe respetar el preaviso (si corresponde) y finalmente se procede al pago de la liquidación final.
```
