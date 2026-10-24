# Derecho — Derecho comercial (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Derecho Comercial

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

### 2 — Sujetos del Derecho Comercial

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

### 3 — Elementos de la Empresa

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
respuestas_validas:
  - "capital"
  - "fuerza de trabajo"
respuesta: datos[idx][0]

enunciado: "En el ámbito del derecho comercial, un elemento esencial para la organización de la empresa es el ___."

pasos:
  - "Identificar los elementos que componen la unidad económica de la empresa."
  - "Seleccionar el concepto que completa la definición técnica."

explicacion: |
  La empresa requiere de elementos como el capital, la fuerza de trabajo, la tecnología y la organización para cumplir su fin lucrativo.
```

### 4 — Clasificación de Actos de Comercio

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

### 5 — Secuencia de la Crisis Empresarial

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "avanzado"
  tags: ["quiebra", "concurso_preventivo", "proceso"]

tipo: ordenar
opciones_explicitas: ["Estado de insolvencia", "Concurso preventivo", "Quiebra"]
respuesta_orden: ["Estado de insolvencia", "Concurso preventivo", "Quiebra"]

enunciado: "Ordene cronológicamente los estadios típicos de un proceso de crisis económica de un comerciante, desde la situación inicial hasta la liquidación forzosa."

explicacion: |
  El proceso suele comenzar con un estado de insolvencia, que puede derivar en un concurso preventivo (para renegociar deudas) o directamente en una quiebra (liquidación de activos).
```

### 6 — Naturaleza de la sociedad comercial

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

### 7 — El concepto de comerciante

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["comerciante", "acto_de_comercio"]

respuesta: verdadero
tipo: "vf"

enunciado: "Una persona que realiza actos de comercio de forma habitual y profesional es considerada comerciante por la ley."

explicacion: |
  Verdadero. La habitualidad y la profesionalidad en el ejercicio de actos de comercio definen la condición de comerciante.
```

### 8 — Pasos para la constitución de una SRL

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["sociedades", "pasos_legales"]

tipo: "ordenar"
opciones_explicitas: ["redacción del contrato", "publicación de edictos", "inscripción en el registro", "obtención de CUIT"]
respuesta_orden: ["redacción del contrato", "publicación de edictos", "inscripción en el registro", "obtención de CUIT"]

enunciado: "Ordene cronológicamente los pasos para la formalización de una sociedad comercial (Considere el orden estándar de constitución)."

explicacion: |
  El orden lógico comienza con la voluntad de las partes (contrato), sigue con la publicidad (edictos), la formalidad registral (inscripción) y finalmente la habilitación impositiva (CUIT).
```

### 9 — Concurso preventivo y quiebra

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "avanzado"
  tags: ["quiebras", "concurso_preventivo"]

respuesta: "reorganización"
tipo: "mc"
opciones_explicitas: ["reorganización", "liquidación", "extinción inmediata", "suspensión de pagos"]

enunciado: "Un comerciante con dificultades financieras solicita un concurso preventivo para evitar la quiebra. El objetivo principal de este proceso es la ___ de sus deudas."

explicacion: |
  El concurso preventivo busca la reorganización de la empresa mediante un acuerdo con los acreedores para evitar la quiebra.
```

### 10 — Elementos del contrato comercial

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["contratos", "comercio"]

respuesta: "precio"
tipo: "completar"
respuestas_validas:
  - "precio"

enunciado: "En un contrato de compraventa mercantil, el intercambio se centra en la entrega de una cosa a cambio de un ___ determinado."

explicacion: |
  El precio es el elemento esencial que distingue a la compraventa de otras figuras jurídicas en el ámbito comercial.
```

### 11 — Naturaleza del acto comercial

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

### 12 — Diferencia con el derecho civil

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["distincion_civil_comercial", "sujeto"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Compraventa de un bien mueble para reventa", "Comercial"], ["Préstamo de dinero entre amigos sin interés", "Civil"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["Comercial", "Civil"]

enunciado: "Determine la naturaleza jurídica del siguiente caso: {escenarios[escenario_idx][0]}"

explicacion: |
  La distinción radica en la finalidad de lucro y la intermediación en el cambio. En el primer caso hay intención de reventa (lucro), en el segundo es un acto de mera administración o ayuda mutua.
```

### 13 — Elementos de la sociedad comercial

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["sociedades", "elementos"]

respuesta_orden: ["Aportes", "Affectio Societatis", "Fin de lucro"]
tipo: ordenar

opciones_explicitas: ["Affectio Societatis", "Aportes", "Fin de lucro"]

enunciado: "Ordene los elementos esenciales de un contrato de sociedad desde su constitución hasta su objetivo final:"

explicacion: |
  Para que exista sociedad se requiere primero el aporte de bienes, luego la voluntad de asociación (affectio societatis) y finalmente el objetivo de obtener una ganancia (fin de lucro).
```

### 14 — El concepto de quiebra

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "avanzado"
  tags: ["concursos_y_quiebras", "insolvencia"]

variables:
  idx: uno_de([0, 1])
  casos: ["El sujeto mantiene su patrimonio pero no puede pagar sus deudas vencidas.", "El sujeto tiene activos que superan sus deudas pero tiene problemas de liquidez."]
  valores: [verdadero, falso]

respuesta: valores[idx]

tipo: vf
enunciado: "En el marco del derecho comercial, ¿el siguiente estado constituye insolvencia (cesación de pagos) para que se dicte la quiebra? '{casos[idx]}'"

explicacion: |
  La quiebra es un proceso de ejecución colectiva que requiere la existencia de un estado de cesación de pagos (insolvencia), no solo una dificultad temporal de caja.
```

### 15 — Sujetos del derecho comercial

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["comerciante", "sujeto_derecho"]

respuesta: "comerciante"
tipo: completar
respuestas_validas:
  - "comerciante"

enunciado: "La persona que se encuentra legalmente inscrita en el registro correspondiente y realiza actos de comercio de forma habitual es denominada _________."

explicacion: |
  La habitualidad y la inscripción en el registro mercantil son requisitos que definen la condición de comerciante en la mayoría de las legislaciones comerciales.
```

### 16 — Naturaleza del Derecho Comercial

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "basico"
  tags: ["caracteristicas", "comparacion"]

respuesta: "especial"
tipo: "completar"
respuestas_validas:
  - "especial"
  - "especialidad"

enunciado: "A diferencia del Derecho Civil, que es de carácter general, el Derecho Comercial se caracteriza por su naturaleza ___."

explicacion: |
  El Derecho Comercial es una rama especial del Derecho que regula actos de comercio y sujetos específicos, diferenciándose de la generalidad del Derecho Civil.
```

### 17 — Sujetos del Derecho Comercial

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

### 18 — Ámbito de Aplicación

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["aplicacion", "contratos"]

variables:
  idx: uno_de([0, 1, 2, 3])
  casos: ["una compraventa de un auto entre particulares", "una compraventa de mercadería para reventa", "un alquiler de una vivienda para uso familiar", "un contrato de leasing de maquinaria industrial"]
  valores: [falso, verdadero, falso, verdadero]

respuesta: valores[idx]
tipo: "vf"

enunciado: "Analice el siguiente caso: '{casos[idx]}'. ¿El acto jurídico resultante es de naturaleza comercial?"

explicacion: |
  Si el acto tiene como fin el lucro o la intermediación en el mercado, se rige por el Derecho Comercial; de lo contrario, pertenece al Derecho Civil.
```

### 19 — Diferencia en la Responsabilidad

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "avanzado"
  tags: ["responsabilidad", "quiebra"]

respuesta: "quiebra"
tipo: "completar"
respuestas_validas:
  - "quiebra"
  - "concurso preventivo"

enunciado: "Mientras que en el Derecho Civil la insolvencia se resuelve mediante procesos de ejecución patrimonial, en el Derecho Comercial la insolvencía del comerciante se regula principalmente a través del proceso de ___."

explicacion: |
  El Derecho Comercial posee institutos específicos para la insolvencia, como el concurso preventivo y la quiebra, para proteger el crédito y la unidad de la masa.
```

### 20 — Evolución del Derecho Comercial

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

### 21 — Naturaleza de la sociedad comercial

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

respuestas_validas:
  - "sociedad"
  - "persona_fisica"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Si hay un acuerdo de voluntades para un fin común y aportes, se constituye una sociedad. Si actúa un individuo, es persona física/humana.
```

### 22 — Clasificación de contratos

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

### 23 — El proceso de quiebra

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "avanzado"
  tags: ["quiebra", "concurso"]

variables:
  datos: [["El comerciante tiene insolvencia pero busca un acuerdo con acreedores", "concurso preventivo"], ["El comerciante es insolvente y no tiene posibilidad de acuerdo", "quiebra directa"]]
  idx: uno_de([0, 1])

enunciado: "Si la situación es {datos[idx][0]}, el proceso legal correspondiente es un ___."

opciones_explicitas: ["concurso preventivo", "quiebra directa", "liquidación"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El concurso preventivo busca la protección del deudor mediante un acuerdo; la quiebra busca la liquidación de activos ante la insolvencia total.
```

### 24 — Requisitos de la sociedad

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

### 25 — Etapas del proceso concursal

```
metadata:
  materia: "derecho"
  tema: "derecho_comercial"
  nivel: "intermedio"
  tags: ["concurso", "pasos"]

enunciado: "Ordene cronológicamente las etapas típicas de un proceso de concurso preventivo exitoso:"

opciones_explicitas: ["Presentación del pedido de concurso", "Verificación de créditos", "Acuerdo preventivo", "Homologación judicial"]
respuesta_orden: ["Presentación del pedido de concurso", "Verificación de créditos", "Acuerdo preventivo", "Homologación judicial"]
tipo: ordenar

explicacion: |
  El proceso inicia con la presentación, sigue con la acreditación de los derechos de los acreedores (verificación), la negociación del acuerdo y finalmente el control judicial (homologación).
```
