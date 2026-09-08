# Economia — Cooperativismo y mutualismo (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Cooperativa

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["definicion", "organizacion"]

respuesta: "democráticamente"
tipo: completar
respuestas_validas:
  - "democráticamente"

enunciado: "Según los principios de la economía social, las cooperativas son organizaciones gestionadas ________ por sus miembros."

explicacion: |
  El principio de gestión democrática es fundamental: cada miembro tiene un voto, independientemente del capital aportado.
```

### 2 — Principio de la Cooperación

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["principios", "gestion"]

respuesta: falso
tipo: vf
enunciado: "En una cooperativa, el poder de decisión se distribuye de manera proporcional a la cantidad de acciones o capital aportado por cada socio."

pasos:
  - "Analizar el principio de 'una persona, un voto'."

explicacion: |
  Falso. En las cooperativas rige el principio de gestión democrática (un socio, un voto), a diferencia de las sociedades de capital donde el voto depende de las acciones.
```

### 3 — Diferencia entre Cooperativa y Mutualismo

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["diferencias", "objetivo"]

tipo: mc
opciones_explicitas: ["ayuda_mutua", "servicios_comunes", "prestamos_y_ayuda", "excedentes_y_servicios"]

respuesta: "ayuda_mutua"

enunciado: "Si nos enfocamos en el objetivo principal de una mutual, estamos hablando de la práctica de la ________."

explicacion: |
  Mientras las cooperativas buscan satisfacer necesidades de sus socios mediante la prestación de servicios, el mutualismo se centra en la ayuda mutua entre sus integrantes.
```

### 4 — Elementos de la Cooperativa

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["vocabulario"]

respuesta: "socios"
tipo: completar
respuestas_validas:
  - "socios"

enunciado: "Las cooperativas están compuestas por un grupo de ________ que se unen voluntariamente para satisfacer sus necesidades económicas, sociales y culturales."

explicacion: |
  Los socios son la base fundamental de cualquier organización de economía social.
```

### 5 — Orden de constitución (Proceso simplificado)

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["procedimiento"]

respuesta_orden: ["reunión_fundacional", "redacción_estatuto", "inscripción_registro"]
tipo: ordenar
opciones_explicitas: ["reunión_fundacional", "redacción_estatuto", "inscripción_registro"]

enunciado: "Ordene cronológicamente los pasos básicos para la formación legal de una cooperativa:"

explicacion: |
  Primero se debe realizar la reunión de fundadores, luego redactar los estatutos que regirán la entidad y finalmente inscribirse en el registro correspondiente para obtener la personería jurídica.
```

### 6 — Principio de gestión democrática

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["ley_26206", "gestion_democratica"]

respuesta: verdadero
tipo: vf
enunciado: "En una cooperativa de trabajo, según el principio de gestión democrática, cada asociado tiene un voto, independientemente del capital aportado."

explicacion: |
  Correcto. A diferencia de una sociedad anónima donde el poder depende de la cantidad de acciones, en las cooperativas rige el principio de 'un asociado, un voto', garantizando la gestión democrática.
```

### 7 — Identificación de la entidad

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["caracteristicas", "economia_social"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Una agrupación de productores de leche que se unen para procesar su materia prima y distribuir sus productos bajo una marca común, compartiendo excedentes según el uso de servicios.", "cooperativa"], ["Un grupo de vecinos que crean un fondo común para prestarse dinero entre ellos con tasas sociales, sin fines de lucro.", "mutual"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["cooperativa", "mutual", "sociedad_anónima", "s.r.l."]

enunciado: "Analice el siguiente caso: {escenarios[escenario_idx][0]}"

explicacion: |
  La respuesta es {escenarios[escenario_idx][1]}. Las cooperativas buscan satisfacer necesidades de sus miembros mediante la producción o comercialización de bienes/servicios, mientras que las mutuales se centran en la prestación de servicios sociales y ayuda recíproca.
```

### 8 — El proceso de excedentes

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["excedentes", "distribucion"]

variables:
  excedente_total: 1000
  porcentaje_reserva_legal: 0.05
  porcentaje_fondo_educacion: 0.05
  porcentaje_reparto_asociados: 0.90

respuesta: redondear(excedente_total * porcentaje_reparto_asociados, 2)
tipo: completar
tolerancia_abs: 0.01

enunciado: "Una cooperativa de consumo al cierre de su ejercicio obtiene un excedente neto de ${excedente_total}. Tras destinar el 5% a la reserva legal y el 5% al fondo de educación, el resto se distribuye entre los asociados proporcionalmente al consumo realizado. ¿Cuánto dinero se reparte entre los asociados?"

pasos:
  - "Calcular el monto para reserva legal: ${excedente_total} * {porcentaje_reserva_legal}"
  - "Calcular el monto para el fondo de educación: ${excedente_total} * {porcentaje_fondo_educacion}"
  - "Restar ambos montos al excedente total para obtener el remanente a repartir."

explicacion: |
  El cálculo es: ${excedente_total} - (${excedente_total} * 0.05) - (${excedente_total} * 0.05) = ${excedente_total} * 0.90 = ${redondear(excedente_total * porcentaje_reparto_asociados, 2)}.
```

### 9 — Orden de constitución

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "avanzado"
  tags: ["procedimiento", "constitucion"]

respuesta_orden: ["Reunión de fundadores", "Redacción de Estatuto", "Asamblea de constitución", "Inscripción en el INAES"]
tipo: ordenar
opciones_explicitas: ["Reunión de fundadores", "Redacción de Estatuto", "Asamblea de constitución", "Inscripción en el INAES"]

enunciado: "Ordene cronológicamente los pasos para la constitución legal de una cooperativa de trabajo en Argentina:"

explicacion: |
  Primero se reúnen los interesados, luego se redacta el estatuto que regirá la entidad, se celebra la asamblea donde se aprueba dicho estatuto y finalmente se inscribe ante el ente regulador (INAES).
```

### 10 — Concepto de capital

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["capital", "asociados"]

respuesta: "variable"
tipo: completar
respuestas_validas:
  - "variable"

enunciado: "En el cooperativismo, el capital social es de naturaleza ___, ya que su monto cambia con la entrada y salida de nuevos asociados."

explicacion: |
  El capital es variable porque no está representado por acciones de libre negociación en bolsa, sino que depende de la integración de los asociados a la entidad.
```

### 11 — Diferencia entre cooperativa y sociedad comercial

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["cooperativas", "diferencias"]

respuesta: "sin fines de lucro"
tipo: completar
respuestas_validas:
  - "sin fines de lucro"
  - "no lucrativa"

enunciado: "A diferencia de las sociedades comerciales tradicionales, las cooperativas se rigen por el principio de que su actividad es ___."

explicacion: |
  Las cooperativas son entidades de economía social cuyo objetivo principal es satisfacer las necesidades de sus asociados y no la maximización de beneficios para terceros. Aunque pueden generar excedentes, estos se reinvierten o distribuyen según el uso de servicios, no como lucro comercial puro.
```

### 12 — El principio de la gestión democrática

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["gestion", "democracia"]

respuesta: falso
tipo: vf
enunciado: "En una cooperativa, el poder de decisión se distribuye según el capital aportado por cada socio (a más capital, más votos)."

explicacion: |
  Falso. El principio de democracia cooperativa establece que cada socio tiene un voto, independientemente de la cantidad de capital que haya aportado. Esto es lo que las distingue de las sociedades anónimas.
```

### 13 — Objeto de las mutualidades

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["mutualismo", "ayuda_mutua"]

respuesta: "ayuda mutua"
tipo: mc
opciones_explicitas: ["ayuda mutua", "maximización de dividendos", "especulación financiera", "competencia de mercado"]

enunciado: "El principio fundamental que distingue al mutualismo de otras formas de asociación es la ___ entre sus miembros para satisfacer necesidades comunes."

explicacion: |
  El mutualismo se basa en el principio de ayuda mutua, donde los asociados se asocian para prestarse servicios de previsión, asistencia o ayuda recíproca.
```

### 14 — Característica de la Ley 26.206

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "avanzado"
  tags: ["ley_26206", "marco_legal"]

respuesta: "sociedad de personas"
tipo: mc
opciones_explicitas: ["sociedad de personas", "sociedad de capitales"]

enunciado: "Según el marco legal de las cooperativas, estas se definen esencialmente como una ___."

explicacion: |
  Las cooperativas son sociedades de personas, ya que lo fundamental es la calidad de los asociados y su voluntad de cooperación, no la cuantía de su capital.
```

### 15 — Orden de los principios cooperativos

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["principios", "valores"]

respuesta_orden: ["Ingreso voluntario y abierto de socios", "Control democrático de los socios", "Participación económica de los socios"]
tipo: ordenar
opciones_explicitas: ["Ingreso voluntario y abierto de socios", "Control democrático de los socios", "Participación económica de los socios"]

enunciado: "Ordene los siguientes principios cooperativos según la lógica de constitución de una organización: primero la apertura, luego la gestión y finalmente la distribución."

explicacion: |
  Para que exista una cooperativa, primero deben ingresar los socios libremente (apertura), luego deben decidir cómo gestionarse (democracia) y finalmente cómo gestionar sus recursos (participación económica).
```

### 16 — Diferencia fundamental de gestión

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["gestion", "democracia"]

tipo: mc
opciones_explicitas: ["La búsqueda de lucro máximo para accionistas externos", "La gestión democrática por parte de sus miembros", "La propiedad estatal de los medios de producción", "La primacía del capital sobre el trabajo"]

respuesta: "La gestión democrática por parte de sus miembros"

enunciado: "A diferencia de las sociedades de capital tradicionales, donde el poder de voto depende de la cantidad de acciones, las cooperativas se distinguen por un modelo de gestión donde cada miembro tiene un voto, independientemente de su aporte. Esto se conoce como:"

explicacion: |
  En el cooperativismo, rige el principio de 'un hombre, un voto', asegurando que el control sea democrático y no dependa de la riqueza de los socios.
```

### 17 — El objeto de la mutualidad

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["mutualismo", "ayuda_mutua"]

tipo: vf

enunciado: "El mutualismo se distingue del cooperativismo principalmente en que su fin primordial es la ayuda mutua para satisfacer necesidades comunes, sin tener como objetivo principal la distribución de excedentes entre sus miembros."

respuesta: verdadero

explicacion: |
  Correcto. Las cooperativas suelen distribuir excedentes entre sus socios según el uso de servicios, mientras que las mutuales no distribuyen ganancias: su propósito es cubrir gastos comunes o brindar asistencia recíproca.
```

### 18 — Principios de la Ley 26.206

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["ley_26206", "principios"]

tipo: completar
respuestas_validas:
  - "ayuda mutua"

enunciado: "Según el espíritu de la Ley 26.206, una organización que se distingue de una empresa comercial por su fin social debe basarse en el principio de ___."

pasos:
  - "Identificar el principio fundamental de la economía social."

explicacion: |
  La ayuda mutua es el pilar que diferencia a estas organizaciones de las empresas de capital, donde el fin es el lucro.

respuesta: "ayuda mutua"
```

### 19 — Orden de principios cooperativos

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "avanzado"
  tags: ["principios", "orden"]

tipo: ordenar
opciones_explicitas: ["Ingreso libre y voluntario", "Gestión democrática", "Participación económica"]

respuesta_orden: ["Ingreso libre y voluntario", "Gestión democrática", "Participación económica"]

enunciado: "Para que una organización sea considerada cooperativa bajo los estándares de la economía social, debe seguir una secuencia lógica de principios. Ordene los siguientes principios según la estructura clásica de la identidad cooperativa (desde la pertenencia hasta la gestión):"

explicacion: |
  Primero se define quién puede entrar (Ingreso libre), luego cómo se decide (Gestión democrática) y finalmente cómo se gestionan los recursos (Participación económica).
```

### 20 — El excedente vs. El lucro

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["excedente", "lucro"]

tipo: mc
opciones_explicitas: ["El excedente es igual al lucro de una empresa comercial", "El excedente se distribuye según el capital aportado", "El excedente se distribuye según el uso de los servicios", "El excedente se reinvierte íntegramente en el Estado"]

respuesta: "El excedente se distribuye según el uso de los servicios"

enunciado: "Una diferencia clave entre el 'lucro' de una sociedad comercial y el 'excedente' de una cooperativa es que el segundo se distribuye en función de la ___ realizada por los socios."

explicacion: |
  En las cooperativas, el retorno de excedentes no depende de cuánto capital puso cada uno, sino de cuánto utilizó los servicios de la cooperativa (retorno cooperativo).
```

### 21 — Identificación de la naturaleza jurídica

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["ley_26206", "organizacion"]

variables:
  datos: [["Un grupo de agricultores se une para comprar insumos por menor precio y vender su cosecha sin intermediarios", "cooperativa"], ["Un grupo de vecinos se une para prestar servicios de asistencia sanitaria y farmacia con fines de ayuda mutua", "mutual"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["cooperativa", "mutual"]

enunciado: "Un grupo de personas se organiza bajo el modelo de economía social. Si el objetivo principal es la gestión de servicios de ayuda mutua y asistencia, estamos ante una: ___"

explicacion: |
  Según la normativa, las cooperativas buscan satisfacer necesidades de sus socios mediante la explotación de una actividad económica, mientras que las mutuales se centran en la ayuda mutua y servicios de asistencia.
```

### 22 — Principios de gestión democrática

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["gestion", "democracia"]

respuesta: falso
tipo: vf

enunciado: "En una organización cooperativa, el principio de 'una persona, un voto' implica que el poder de decisión es proporcional al capital aportado por cada socio."

explicacion: |
  Falso. El principio fundamental de las cooperativas es la gestión democrática: cada socio tiene un voto, independientemente de la cantidad de capital que haya aportado.
```

### 23 — Elementos de la estructura asociativa

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["estructura", "socios"]

variables:
  datos: [["Asamblea de Socios", "Máximo órgano de decisión"], ["Consejo de Administración", "Órgano de gobierno y dirección"], ["Sindicatura", "Control de legalidad"]]

respuesta: "Asamblea de Socios"
tipo: completar
respuestas_validas:
  - "Asamblea de Socios"
  - "Consejo de Administración"
  - "Sindicatura"

enunciado: "En la estructura de una cooperativa, el ___ es el órgano máximo de gobierno donde se toman las decisiones fundamentales por parte de los asociados."

explicacion: |
  La Asamblea de Socios es el órgano supremo donde se ejerce la soberanía de los miembros.
```

### 24 — Diferencia en el fin de lucro

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["fin_lucro", "economia_social"]

respuesta: falso
tipo: vf

enunciado: "Las entidades de la economía social, como cooperativas y mutuales, tienen como objetivo primordial la maximización de beneficios económicos para sus accionistas externos."

explicacion: |
  Falso. El fin es satisfacer necesidades de los asociados y promover el bienestar de la comunidad; no buscan el lucro para terceros, sino el beneficio de sus propios miembros.
```

### 25 — Proceso de formación de una cooperativa

```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "avanzado"
  tags: ["procedimiento", "pasos"]

respuesta_orden: ["Reunión de interesados y definición de objeto social", "Redacción del contrato social y estatutos", "Inscripción en el registro de cooperativas"]
tipo: ordenar
opciones_explicitas: ["Redacción del contrato social y estatutos", "Reunión de interesados y definición de objeto social", "Inscripción en el registro de cooperativas"]

enunciado: "Ordene cronológicamente los pasos para la constitución legal de una cooperativa:"

explicacion: |
  Primero se define el objeto y los socios, luego se formaliza en un estatuto y finalmente se inscribe ante la autoridad de aplicación para obtener personería jurídica.
```
