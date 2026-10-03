# Examen jefe — [PENDIENTE #895]

> Logro #895. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: derecho-internacional (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional_publico"
  nivel: "basico"
  tags: ["definicion", "sujetos"]

respuesta: "Derecho Internacional Público"
tipo: completar
respuestas_validas:
  - "Derecho Internacional Público"

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

tipo: mc
opciones_explicitas: ["Los Estados", "Las personas físicas únicamente", "Las empresas privadas únicamente", "Ninguna de las anteriores"]

respuesta: "Los Estados"

enunciado: "¿Cuál es el sujeto principal y soberano del Derecho Internacional?"

pasos:
  - "Identificar la naturaleza jurídica del sujeto mencionado."

explicacion: |
  Los Estados son los sujetos primarios y originarios del Derecho Internacional Público por poseer soberanía.
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

respuesta_orden: ["Tratado Internacional", "Reglamento Administrativo Nacional", "Decreto Presidencial"]
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

respuesta: verdadero
tipo: vf
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
  datos: [["Estado A", "Estado B", "Tratado de Límites"], ["Estado C", "Estado D", "Acuerdo de Fronteras"]]

enunciado: "El {datos[caso_idx][2]} es un instrumento jurídico mediante el cual el {datos[caso_idx][0]} y el {datos[caso_idx][1]} establecen normas de conducta mutua. ¿Es este un ejemplo de Derecho Internacional Público?"

respuesta: verdadero
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

enunciado: "Si un Estado firma un tratado para combatir el cambio climático, este compromiso se rige por el Derecho Internacional. La ONU es la entidad encargada de velar por la paz y seguridad internacional. ¿Cuál es su función principal?"

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
respuesta_orden: ["Negociación", "Firma", "Ratificación"]
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

respuestas_validas:
  - "Organismos Internacionales"
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

enunciado: "El principio de que 'lo pactado obliga' se conoce como Pacta sunt servanda. Si un Estado firma un tratado, ¿está obligado a cumplirlo de buena fe?"

respuesta: verdadero
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
respuestas_validas:
  - "Estados"
  - "Estado"

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

respuesta: verdadero
tipo: vf
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

tipo: mc
opciones_explicitas: ["Tratado", "Costumbre", "Ley Nacional", "Sentencia Judicial"]

respuesta: "Costumbre"

enunciado: "Si nos referimos a una práctica generalizada que los Estados consideran como obligatoria por el derecho (opinio iuris), estamos ante una: ___."

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
respuestas_validas:
  - "Jus Cogens"
  - "Norma Imperativa"

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

respuesta_orden: ["Negociación", "Firma", "Ratificación"]
tipo: ordenar
opciones_explicitas: ["Firma", "Negociación", "Ratificación"]

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

tipo: mc
opciones_explicitas: ["Estado", "Individuo", "Empresa", "Organismo Internacional"]

respuesta: "Estado"

enunciado: "A diferencia del derecho interno, donde el sujeto principal es la persona física o jurídica, el sujeto principal del Derecho Internacional es el ___."

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

respuesta: "Norma Imperativa (Jus Cogens)"
tipo: completar
respuestas_validas:
  - "Norma Imperativa (Jus Cogens)"

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

respuesta_orden: ["Tratados", "Costumbre Internacional", "Principios Generales del Derecho"]
tipo: ordenar
opciones_explicitas: ["Tratados", "Costumbre Internacional", "Principios Generales del Derecho"]

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
respuestas_validas:
  - "Tratado"
  - "Costumbre"

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
  tags: ["tratados", "procedimiento"]

tipo: ordenar
opciones_explicitas: ["Negociación", "Firma", "Ratificación"]
respuesta_orden: ["Negociación", "Firma", "Ratificación"]

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
respuestas_validas:
  - "regula la relación entre empleador y trabajador"

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

respuesta_orden: ["Constitución Nacional", "Ley de Contrato de Trabajo", "Convenio Colectivo de Trabajo", "Reglamento Interno"]
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
respuestas_validas:
  - "subordinación"
  - "subordinacion"

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

respuesta: falso
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
  escenarios: [["despido_sin_causa", "indemnización_total"], ["renuncia_voluntaria", "sin_indemnización"]]

respuesta: escenarios[escenario_idx][1]
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

respuesta_orden: ["Notificación de falta", "Derecho a defensa", "Aplicación de sanción"]
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
  casos: [["$500", "es_ilegal"], ["$1200", "es_legal"]]
  ley_minima: 1000

respuesta: casos[caso_idx][1]
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
respuestas_validas:
  - "subordinación"
  - "subordinacion"

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

respuesta: "Civil"
tipo: mc
opciones_explicitas: ["Civil", "Laboral"]

enunciado: "Si una persona es contratada para realizar una tarea específica, pero no está sujeta a horarios, no recibe órdenes directas y utiliza sus propios medios, ¿bajo qué rama del derecho se encuadra principalmente esta relación?"

explicacion: |
  La ausencia de subordinación y la autonomía técnica desplazan la relación al ámbito del Derecho Civil (contrato de locación de servicios), no al Derecho Laboral.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["principios", "proteccion"]

respuesta: "Principio Protector"
tipo: completar
respuestas_validas:
  - "Principio Protector"
  - "Principio de Protección"

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

respuesta_orden: orden_correcta
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

respuesta: "Civil"
tipo: mc
opciones_explicitas: ["Civil", "Laboral"]

enunciado: "Si una persona presta un servicio de manera autónoma, sin dependencia ni subordinación, bajo un contrato de locación de servicios, la relación se rige principalmente por el Derecho ___."

explicacion: |
  La subordinación técnica, jurídica y económica es el elemento distintivo que traslada la relación del ámbito Civil al ámbito Laboral.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["elementos", "subordinacion"]

respuestas_validas:
  - "subordinación"
  - "dependencia"
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

respuesta_orden: ["Constitución Nacional", "Tratados Internacionales", "Ley de Contrato de Trabajo", "Convenio Colectivo de Trabajo", "Contrato Individual"]
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
  idx: uno_de([0, 1])
  horas_trabajadas: [8, 10]
  hay_extra: [falso, verdadero]

respuesta: hay_extra[idx]
tipo: vf
enunciado: "Si la jornada legal es de 8 horas diarias y el trabajador realizó {horas_trabajadas[idx]} horas, ¿se han devengado horas extraordinarias?"

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
respuestas_validas:
  - "remuneración"

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

respuesta_orden: ["Notificación de la causa", "Entrega de preaviso", "Liquidación final"]
tipo: ordenar
opciones_explicitas: ["Notificación de la causa", "Entrega de preaviso", "Liquidación final"]

enunciado: "Ordene cronológicamente los pasos habituales en un proceso de despido con causa:"

explicacion: |
  Primero se debe comunicar la causa, luego se debe respetar el preaviso (si corresponde) y finalmente se procede al pago de la liquidación final.
```

## Sección: derecho-penal (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["definicion", "estado"]

respuesta: verdadero
tipo: vf

enunciado: "El Derecho Penal es la rama del derecho que regula la potestad punitiva del Estado, definiendo los delitos y las penas aplicables a quienes los cometen."

explicacion: |
  Correcto. El Derecho Penal establece el marco normativo para la imposición de sanciones por conductas que la sociedad considera delitos.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["terminologia", "delito"]

variables:
  escenario: uno_de([["cometer un acto prohibido por la ley con intención de causar daño", "doloso"], ["cometer un acto prohibido por la ley sin intención pero con negligencia", "culposo"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["doloso", "culposo", "imprudente", "accidental"]

enunciado: "Si una persona actúa con la intención de producir un resultado típico y antijurídico, se dice que su conducta es de carácter: ___"

pasos:
  - "Identificar la intención (ánimo) del sujeto."
  - "Relacionar la intención con la clasificación del tipo de delito."

explicacion: |
  La conducta es {escenario[0]}. En derecho penal, cuando hay intención, el delito es {escenario[1]}.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["pena", "finalidad"]

respuesta: "prevención y retribución"
tipo: completar
respuestas_validas:
  - "prevención y retribución"

enunciado: "Tradicionalmente, la pena tiene como fines principales la ___."

explicacion: |
  La pena busca prevenir nuevos delitos (prevención) y castigar la infracción cometida (retribución).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["principios", "legalidad"]

respuesta: verdadero
tipo: vf

enunciado: "El principio de legalidad establece que nadie puede ser condenado por una acción u omisión que no esté previamente establecida como delito por una ley escrita."

explicacion: |
  Es el principio fundamental 'nullum crimen, nulla poena sine lege'.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["procedimiento", "etapas"]

respuesta_orden: ["Investigación", "Juicio", "Sentencia", "Ejecución"]
tipo: ordenar
opciones_explicitas: ["Investigación", "Juicio", "Sentencia", "Ejecución"]

enunciado: "Ordene cronológicamente las etapas fundamentales de un proceso penal estándar:"

explicacion: |
  El proceso inicia con la investigación de los hechos, sigue con el juicio oral para valorar pruebas, se dicta la sentencia y finaliza con la ejecución de la pena.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["definicion", "estado"]

respuesta: verdadero
tipo: vf

enunciado: "En el derecho penal, el Estado es el único encargado de regular la relación entre el sujeto que comete un delito y la sanción impuesta, ejerciendo el ius puniendi."

explicacion: |
  El derecho penal es una rama del derecho público que regula la potestad punitiva del Estado (ius puniendi) para sancionar conductas que lesionan bienes jurídicos protegidos.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["conducta", "tipicidad"]

variables:
  escenario: uno_de([["Juan decide robar un banco pero es detenido antes de tocar el dinero", "tentativa"], ["María entra a una tienda y toma un objeto sin pagar", "consumado"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["tentativa", "consumado", "imputable", "exento"]

enunciado: "Analice el siguiente caso: {escenario[0]}. Según la doctrina penal, la conducta de Juan se clasifica como: ___"

pasos:
  - "Identificar si la acción llegó a completar el tipo penal."
  - "Determinar si hubo ejecución del acto ilícito."

explicacion: |
  En el primer caso ({escenario[0]}), al no haberse completado el resultado típico, estamos ante una tentativa. En el segundo, el delito se considera consumado.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["teoria_del_delito"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [["Un sujeto actúa bajo un error de prohibición invencible", "no_culpable"], ["Un sujeto actúa con dolo directo para causar daño", "culpable"]]

respuesta: datos[caso_idx][1]
tipo: completar
respuestas_validas:
  - "no_culpable"
  - "culpable"

enunciado: "Considerando el escenario: {datos[caso_idx][0]}. El resultado de la imputación penal para este sujeto es: ___"

explicacion: |
  La culpabilidad requiere que el sujeto sea capaz de comprender la ilicitud de su acción. Si el error es invencible, se excluye la culpabilidad.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "avanzado"
  tags: ["proceso", "pena"]

respuesta_orden: ["Tipicidad", "Antijuridicidad", "Culpabilidad", "Punibilidad"]
tipo: ordenar
opciones_explicitas: ["Tipicidad", "Antijuridicidad", "Culpabilidad", "Punibilidad"]

enunciado: "Para que una conducta sea considerada delito y se le aplique una pena, debe cumplir con la teoría estratificada del delito. Ordene los elementos en el orden lógico de análisis (de la conducta al castigo):"

pasos:
  - "Primero se verifica si la conducta está en la ley."
  - "Segundo, si la conducta es contraria al derecho."
  - "Tercero, si el autor es reprochable."
  - "Finalmente, si la conducta merece una sanción."

explicacion: |
  El análisis parte de la tipicidad (encuadre legal), sigue con la antijuridicidad (contrariedad al ordenamiento), la culpabilidad (reprochabilidad) y culmina en la punibilidad (posibilidad de imponer la pena).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["bien_juridico"]

variables:
  delito_tipo: uno_de([["Homicidio", "la vida"], ["Hurto", "la propiedad"]])

respuesta: delito_tipo[1]
tipo: mc
opciones_explicitas: ["la vida", "la propiedad", "la libertad", "la integridad física"]

enunciado: "Si se comete un delito de {delito_tipo[0]}, el bien jurídico que el Estado busca proteger mediante la pena es: ___"

explicacion: |
  Cada delito protege un valor fundamental llamado bien jurídico. En el caso del {delito_tipo[0]}, el bien es {delito_tipo[1]}.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["distincion", "civil_vs_penal"]

respuesta: "reparar el daño"
tipo: "completar"
respuestas_validas:
  - "reparar el daño"
  - "reparación del daño"
  - "reparación"

enunciado: "Mientras que el Derecho Civil busca principalmente ___ causado por un incumplimiento contractual o un ilícito civil, el Derecho Penal busca sancionar una conducta que atenta contra la sociedad."

explicacion: |
  El Derecho Civil tiene un fin resarcitorio (reparar el daño patrimonial o moral), mientras que el Derecho Penal tiene un fin punitivo y de prevención social.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["estado", "sujeto_activo"]

variables:
  escenario: uno_de([["robo", "un individuo"], ["homicidio", "una persona"]])

respuesta: verdadero
tipo: "vf"

enunciado: "En el marco del Derecho Penal, cuando se comete un {escenario[0]}, es el Estado quien ejerce el 'ius puniendi' para imponer la sanción, independientemente de la voluntad de la víctima."

explicacion: |
  El Estado tiene el monopolio del ejercicio de la fuerza y la potestad de sancionar (ius puniendi) para mantener el orden social.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["teoria_del_delito", "elementos"]

respuesta: "el elemento subjetivo"
tipo: "mc"
opciones_explicitas: ["el elemento subjetivo", "el elemento material", "el elemento procesal", "el elemento administrativo"]

enunciado: "Para que una conducta sea considerada delito, no basta con la acción física (tipicidad objetiva); también es fundamental determinar ___ (dolo o culpa), que define la intención del agente."

explicacion: |
  La distinción entre dolo (intención) y culpa (negligencia) es crucial para la aplicación de la pena en el Derecho Penal.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["proceso_penal", "orden"]

tipo: "ordenar"
opciones_explicitas: ["investigación", "imputación", "juicio", "sentencia"]
respuesta_orden: ["investigación", "imputación", "juicio", "sentencia"]

enunciado: "Ordene cronológicamente las etapas fundamentales de un proceso penal típico:"

explicacion: |
  El proceso penal sigue una secuencia lógica que va desde la recolección de evidencia hasta la decisión final del juez.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["penas", "sanciones"]

variables:
  tipo_sancion: uno_de([["multa", "económica"], ["prisión", "privativa de la libertad"]])

respuesta: "privativa de la libertad"
tipo: "mc"
opciones_explicitas: ["económica", "privativa de la libertad", "administrativa", "reparatoria"]

enunciado: "Si el delito cometido es un crimen grave, la sanción principal que busca la prevención especial es la pena {tipo_sancion[0]}, la cual es de naturaleza ___."

explicacion: |
  La pena privativa de la libertad es la sanción característica y más severa del Derecho Penal, diferenciándose de las multas administrativas o civiles.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["comparacion", "derecho_civil"]

respuesta: "sanción"
tipo: completar
respuestas_validas:
  - "sanción"
  - "pena"

enunciado: "Mientras que el Derecho Civil busca la reparación del daño mediante la indemnización, el Derecho Penal busca la imposición de una ___ al infractor."

explicacion: |
  El Derecho Civil tiene un fin resarcitorio (reparar el daño), mientras que el Derecho Penal tiene un fin punitivo (aplicar una pena).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["naturaleza", "derecho_civil"]

respuesta: verdadero
tipo: vf
enunciado: "A diferencia del Derecho Civil, donde el incumplimiento de una obligación suele derivar en una indemnización, en el Derecho Penal el incumplimiento de una norma puede derivar en la privación de la libertad."

explicacion: |
  Correcto. La privación de la libertad es una sanción propia del ámbito penal y no existe en el ámbito civil.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["comparacion", "derecho_administrativo"]

tipo: mc
opciones_explicitas: ["Sanción administrativa", "Pena privativa de la libertad", "Indemnización de daños y perjuicios", "Sanción disciplinaria interna"]

respuesta: "Pena privativa de la libertad"

enunciado: "Si un conductor excede los límites de velocidad, recibe una multa (Derecho Administrativo). Si un conductor causa un accidente por conducir en estado de ebriedad, puede recibir una ___ (Derecho Penal)."

explicacion: |
  El Derecho Penal regula conductas que afectan bienes jurídicos fundamentales y aplica penas, a diferencia del administrativo que aplica sanciones de carácter reglamentario.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["principios", "legalidad"]

respuesta_orden: ["Principio de legalidad", "Principio de culpabilidad", "Principio de lesividad"]
tipo: ordenar

opciones_explicitas: ["Principio de legalidad", "Principio de culpabilidad", "Principio de lesividad"]

enunciado: "Ordene los principios fundamentales del Derecho Penal que lo distinguen de otras ramas (como el Derecho Civil) para asegurar que no haya arbitrariedad estatal:"

pasos:
  - "Primero: No hay delito sin ley previa (Nullum crimen sine lege)."
  - "Segundo: Solo se puede reprochar la conducta al autor si hubo voluntad o negligencia (Culpabilidad)."
  - "Tercero: Debe existir una lesión o puesta en peligro de un bien jurídico (Lesividad)."

explicacion: |
  El orden lógico-sistemático para la aplicación de la ley penal requiere la existencia de una norma previa, la responsabilidad del autor y la afectación de un bien jurídico.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "avanzado"
  tags: ["sujeto", "estado"]

tipo: mc
opciones_explicitas: ["Un particular contra otro particular", "El Estado contra un particular", "Un Estado contra otro Estado", "Un particular contra una empresa"]

respuesta: "El Estado contra un particular"

enunciado: "En el Derecho Civil, el conflicto es típicamente entre particulares. En el Derecho Penal, el conflicto se caracteriza porque el sujeto activo es ___."

explicacion: |
  En el Derecho Penal, el Estado interviene como el sujeto que ejerce el 'ius puniendi' (derecho a castigar) frente al infractor.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["principios", "legalidad"]

variables:
  textos: ["Juan comete una acción que no está tipificada en el código penal", "Juan comete una acción que está tipificada en el código penal"]
  valores: [falso, verdadero]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf
enunciado: "De acuerdo al principio de legalidad, si {textos[idx]}, ¿es posible que el Estado imponga una pena a Juan?"

explicacion: |
  El principio de legalidad establece que no hay delito ni pena sin ley previa (*nullum crimen, nulla poena sine lege*). Si la conducta no está tipificada, no puede haber sanción.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["tipicidad", "escenario"]

variables:
  datos: [["Pedro toma un objeto ajeno con ánimo de lucro", "hurto"], ["Pedro rompe una ventana para entrar a una casa", "daño"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["hurto", "daño", "estafa", "robo"]

enunciado: "Analizando el comportamiento de Pedro: {datos[idx][0]}. ¿Cuál es la conducta principal descrita?"

explicacion: |
  El tipo penal se ajusta a la descripción de la conducta realizada por el sujeto.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "basico"
  tags: ["penas", "sanciones"]

variables:
  datos: [["privación de la libertad", "corporal"], ["multa económica", "pecuniaria"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar

respuestas_validas:
  - "corporal"
  - "pecuniaria"

enunciado: "Las penas se clasifican según su naturaleza. Si se impone una {datos[idx][0]}, la naturaleza de la sanción es ___________."

explicacion: |
  Las penas pueden ser privativas de la libertad (corporales) o multas (pecuniarias).
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "avanzado"
  tags: ["iter_criminis", "ordenar"]

tipo: ordenar
opciones_explicitas: ["ideación", "preparación", "ejecución", "consumación"]
respuesta_orden: ["ideación", "preparación", "ejecución", "consumación"]

enunciado: "Ordene cronológicamente las etapas del 'iter criminis' (camino del delito) desde la concepción de la idea hasta la culminación del acto."

explicacion: |
  El iter criminis comprende la fase interna (ideación), la fase externa (preparación, ejecución) y la consumación.
```

```
metadata:
  materia: "derecho"
  tema: "derecho_penal"
  nivel: "intermedio"
  tags: ["imputabilidad", "responsabilidad"]

variables:
  textos: ["Un menor de edad con plena capacidad de comprensión", "Un adulto con plena capacidad de comprensión"]
  valores: [falso, verdadero]
  idx: uno_de([0, 1])

respuesta: valores[idx]
tipo: vf
enunciado: "Considerando el caso de {textos[idx]}, ¿se le puede atribuir responsabilidad penal bajo el concepto de imputabilidad?"

explicacion: |
  La imputabilidad es la capacidad de comprender la ilicitud del hecho. Si el sujeto carece de ella (como en menores según la legislación), no hay responsabilidad penal en el sentido estricto.
```

## Sección: denuncia-y-etapa-de-instruccion (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["procedimiento", "denuncia"]

tipo: mc
opciones_explicitas: ["Denuncia", "Sentencia", "Fallo", "Recurso"]

enunciado: "El acto mediante el cual se pone en conocimiento de la autoridad judicial la existencia de un hecho presuntamente delictivo se denomina:"

respuesta: "Denuncia"

explicacion: |
  La denuncia es el acto procesal que da inicio a la investigación penal al informar un posible delito.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["instruccion", "investigacion"]

tipo: vf

enunciado: "El objetivo principal de la etapa de instrucción es determinar si existe mérito para llevar a juicio a una persona."

respuesta: verdadero

explicacion: |
  La instrucción tiene como fin la investigación de la verdad real y la recolección de pruebas para determinar si hay elementos suficientes para el juicio.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["pruebas", "instruccion"]

enunciado: "Durante la etapa de instrucción, si el fiscal o el juez necesitan la opinión técnica de un experto para analizar una evidencia física, ordenan un ___."

pasos:
  - "Se identifica el hecho delictivo."
  - "Se recolectan las evidencias mediante medidas de prueba."

respuesta: "pericia"

tipo: completar
respuestas_validas:
  - "pericia"

explicacion: |
  La pericia es un medio de prueba técnico fundamental en la etapa de instrucción para esclarecer hechos complejos.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["etapas", "orden_procesal"]

tipo: ordenar
opciones_explicitas: ["Denuncia", "Instrucción", "Juicio Oral", "Sentencia"]

enunciado: "Ordene cronológicamente las etapas del proceso penal desde el inicio hasta la resolución final:"

respuesta_orden: ["Denuncia", "Instrucción", "Juicio Oral", "Sentencia"]

explicacion: |
  El proceso comienza con la denuncia, sigue con la investigación (instrucción), la etapa de debate (juicio) y finaliza con la sentencia.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["sujeto_procesal", "imputado"]

tipo: mc
opciones_explicitas: ["Imputado", "Querellante", "Testigo", "Juez"]

enunciado: "La persona sobre la cual recae la sospecha de haber cometido un delito durante la etapa de instrucción es el:"

respuesta: "Imputado"

explicacion: |
  El imputado es el sujeto pasivo de la acción penal en la fase de investigación.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["procedimiento", "denuncia"]

respuesta: "denuncia"
tipo: mc
opciones_explicitas: ["denuncia", "sentencia", "apelación", "querella"]

enunciado: "Un ciudadano presencia un robo en una plaza y acude a la comisaría para poner en conocimiento el hecho. Este acto formal de poner en conocimiento un presunto delito se denomina ___."

explicacion: |
  La denuncia es el acto mediante el cual cualquier persona comunica a la autoridad judicial o policial la comisión de un hecho que podría ser un delito.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["fiscalia", "investigacion"]

respuesta: verdadero
tipo: vf
enunciado: "En la etapa de instrucción, el Fiscal tiene la función de dirigir la investigación y recolectar elementos de convicción para determinar si existe un caso para ir a juicio. ¿Es esto correcto en el sistema acusatorio?"

explicacion: |
  En el sistema acusatorio, el Fiscal dirige la investigación (etapa de instrucción/investigación preparatoria), pero la decisión de culpabilidad o inocencia es competencia exclusiva de un Juez de Oración o Tribunal de Juicio.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["procedimiento", "orden_cronologico"]

respuesta_orden: ["Denuncia", "Investigación preliminar", "Requerimiento de acusación", "Juicio Oral"]
tipo: ordenar
opciones_explicitas: ["Denuncia", "Investigación preliminar", "Requerimiento de acusación", "Juicio Oral"]

enunciado: "Ordene cronológicamente las etapas de un proceso penal estándar, desde el conocimiento del hecho hasta la resolución del conflicto."

explicacion: |
  El proceso comienza con la denuncia o querella, sigue la investigación para reunir pruebas (instrucción), el fiscal presenta su acusación si hay pruebas, y finalmente se celebra el juicio para dictar sentencia.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["pruebas", "instruccion"]

respuesta: "pericia"
tipo: mc
opciones_explicitas: ["testimonio", "pericia", "sentencia", "recurso"]

enunciado: "Durante la etapa de instrucción, para determinar la veracidad de un hecho, el instructor puede ordenar un examen realizado por un experto en una materia técnica (por ejemplo, un perito médico). Este elemento se conoce como una ___."

explicacion: |
  La pericia es el medio de prueba técnico-científico fundamental en la etapa de instrucción para aportar conocimientos especializados al proceso.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["resolucion", "instruccion"]

respuesta: "sobreseimiento"
tipo: completar
respuestas_validas:
  - "sobreseimiento"

enunciado: "Si durante la etapa de instrucción se demuestra que el hecho denunciado no existió o que el imputado no participó en él, el juez debe dictar el ___ para finalizar el proceso sin llegar a juicio."

explicacion: |
  El sobreseimiento es la resolución que pone fin al proceso de manera definitiva cuando no hay elementos para sostener una acusación, evitando que una persona sea sometida innecesariamente a un juicio.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["proceso_penal", "denuncia"]

respuesta: "denuncia"
tipo: completar
respuestas_validas:
  - "denuncia"

enunciado: "El proceso penal puede iniciarse de diversas formas; cuando un ciudadano comunica un hecho presuntamente delictivo ante la autoridad, el acto formal se denomina ___."

explicacion: |
  La denuncia es el acto mediante el cual se pone en conocimiento de la autoridad la comisión de un hecho presuntamente delictivo. La querella, en cambio, requiere la constitución de la parte como querellante en el proceso.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["instruccion", "investigacion"]

respuesta: falso
tipo: vf

enunciado: "¿Es la etapa de instrucción una fase de debate y juicio donde se determina la culpabilidad o inocencia del imputado?"

explicacion: |
  Falso. La etapa de instrucción es una fase de investigación preparatoria donde el objetivo es reunir elementos de convicción para determinar si existe causa para abrir un juicio, pero no es la etapa de debate oral y público.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["querella", "denuncia"]

tipo: mc
opciones_explicitas: ["La denuncia requiere la participación activa de la víctima como parte procesal, mientras que la querella es un mero aviso.", "La querella implica la constitución de la víctima como parte en el proceso, mientras que la denuncia es un deber ciudadano de informar."]

respuesta: "La querella implica la constitución de la víctima como parte en el proceso, mientras que la denuncia es un deber ciudadano de informar."

enunciado: "Según la doctrina procesal, ¿cuál es la diferencia fundamental entre la denuncia y la querella?"

explicacion: |
  La diferencia radica en la legitimación y la participación: el querellante es parte activa en el proceso y puede proponer medidas, mientras que el denunciante simplemente informa el hecho.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["etapas_procesales", "orden"]

respuesta_orden: ["Notitia criminis", "Instrucción", "Juicio Oral"]
tipo: ordenar
opciones_explicitas: ["Juicio Oral", "Instrucción", "Notitia criminis"]

enunciado: "Ordene cronológicamente las etapas del proceso penal, partiendo desde la noticia del delito:"

explicacion: |
  El orden correcto es: 1. Notitia criminis (noticia del delito), 2. Instrucción (investigación), 3. Juicio Oral (debate y sentencia).
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["fiscalia", "investigacion"]

tipo: mc
opciones_explicitas: ["El Fiscal tiene la carga de la prueba y dirige la investigación para esclarecer los hechos.", "El Fiscal es el encargado de dictar la sentencia definitiva tras la etapa de instrucción."]

respuesta: "El Fiscal tiene la carga de la prueba y dirige la investigación para esclarecer los hechos."

enunciado: "En el sistema acusatorio moderno, ¿cuál es la función principal del Ministerio Público durante la etapa de instrucción?"

explicacion: |
  El Fiscal dirige la investigación y recolecta pruebas para determinar si hay elementos suficientes para acusar, pero la sentencia es competencia exclusiva de un Juez.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["proceso_penal", "denuncia"]

respuesta: "denuncia"
tipo: mc
opciones_explicitas: ["denuncia", "querella", "sentencia", "resolución"]

enunciado: "A diferencia de la querella, donde la víctima interviene activamente con abogado, la ___ es el acto mediante el cual se pone en conocimiento de la autoridad la comisión de un delito."

explicacion: |
  La denuncia es el acto de informar un hecho delictivo, mientras que la querella es una acción formal donde la víctima se constituye como parte en el proceso.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["instruccion", "investigacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿El objetivo principal de la etapa de instrucción es la recolección de elementos de convicción para determinar si existe probabilidad de llevar a juicio a un imputado?"

explicacion: |
  Correcto. La instrucción busca reunir pruebas para decidir si se procede al juicio oral o se dicta el sobreseimiento.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["querella", "denuncia"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["denuncia", "noticia criminal"], ["querella", "acción penal privada/pública con legitimación"]]

respuesta: datos[escenario_idx][0]
tipo: completar
respuestas_validas:
  - "denuncia"
  - "querella"

enunciado: "En el escenario seleccionado, se caracteriza por ser una {datos[escenario_idx][1]}. Esta figura procesal se denomina ___."

explicacion: |
  La distinción radica en la legitimación y la participación procesal de la víctima.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["secuencia", "etapas"]

respuesta_orden: ["Noticia criminis", "Etapa de Instrucción", "Etapa de Juicio"]
tipo: ordenar
opciones_explicitas: ["Noticia criminis", "Etapa de Instrucción", "Etapa de Juicio"]

enunciado: "Ordene cronológicamente las etapas del proceso penal desde el hecho hasta la decisión final:"

explicacion: |
  Primero se recibe la noticia (denuncia/oficio), luego se investiga (instrucción) y finalmente se decide en juicio.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["juez", "instrucción"]

respuesta: "investigar"
tipo: completar
respuestas_validas:
  - "investigar"

enunciado: "Mientras que el Tribunal de Juicio tiene la función de dictar sentencia, el Juez de Instrucción tiene la función primordial de ___ los hechos."

explicacion: |
  La instrucción es una fase preparatoria de investigación, no de decisión de culpabilidad o inocencia definitiva.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["procedimiento", "denuncia"]

variables:
  datos: [["Juan presencia un robo y lo reporta ante la policía", "denuncia"], ["María es víctima de una estafa y presenta el escrito", "denuncia"], ["Un policía encuentra un arma sin dueño y lo comunica", "noticia criminal"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["denuncia", "noticia criminal", "querella", "denuncia anónima"]

enunciado: "En el caso de que {datos[idx][0]}, el acto formal que da inicio al proceso se denomina ___."

explicacion: |
  Cuando una persona con capacidad legal comunica un hecho delictivo, se inicia mediante una denuncia. Si el origen es un funcionario público en ejercicio, se denomina noticia criminal.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["instruccion", "investigacion"]

variables:
  datos: [["presunto homicidio", "investigar la autoría y las pruebas"], ["presunto hurto", "recaudar elementos de convicción"]]
  idx: uno_de([0,1])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
enunciado: "Ante un caso de {datos[idx][0]}, el objetivo principal del fiscal en la etapa de instrucción es ___."

explicacion: |
  La etapa de instrucción tiene como fin la recolección de elementos de convicción para determinar si existe mérito para llevar a juicio a una persona.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "intermedio"
  tags: ["procedimiento", "ordenar"]

respuesta_orden: ["Presentación de la denuncia", "Apertura de la investigación", "Recolección de pruebas", "Elevación a juicio"]
tipo: ordenar
opciones_explicitas: ["Presentación de la denuncia", "Apertura de la investigación", "Recolección de pruebas", "Elevación a juicio"]

enunciado: "Ordene cronológicamente las etapas desde que se conoce el hecho hasta que se cierra la instrucción:"

explicacion: |
  El proceso penal sigue un orden lógico: primero se recibe la noticia, se abre la investigación, se recolectan las pruebas y finalmente se decide si se va a juicio.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "avanzado"
  tags: ["instruccion", "fiscal"]

variables:
  datos: [["El fiscal encuentra pruebas suficientes", "imputación"], ["El fiscal no tiene pruebas suficientes", "archivo"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "imputación"
  - "archivo"

enunciado: "Si tras la investigación el fiscal determina que {datos[idx][0]}, la consecuencia procesal es la ___."

explicacion: |
  La formalización de la imputación es el acto que marca el inicio de la persecución penal efectiva sobre una persona determinada.
```

```
metadata:
  materia: "derecho"
  tema: "denuncia_y_etapa_de_instruccion"
  nivel: "basico"
  tags: ["juez", "control"]

respuesta: falso
tipo: vf

enunciado: "En el sistema acusatorio moderno, el Juez de Instrucción es quien dirige la recolección de pruebas durante la etapa de investigación."

explicacion: |
  Falso. En el sistema acusatorio, la investigación y recolección de pruebas es responsabilidad exclusiva del Ministerio Público (Fiscalía); el Juez cumple un rol de control de garantías.
```

## Sección: hecho-juridicamente-relevante (25 preguntas)

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["conceptos_basicos", "teoria_del_derecho"]

respuesta: "hecho jurídicamente relevante"
tipo: completar
respuestas_validas:
  - "hecho jurídicamente relevante"

enunciado: "Aquel suceso de la naturaleza o del mundo material que, al producirse, tiene la capacidad de producir consecuencias jurídicas se denomina ___."

explicacion: |
  Un hecho es jurídicamente relevante cuando el ordenamiento jurídico le atribuye efectos, como la creación, modificación o extinción de derechos y obligaciones.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["clasificacion", "hechos_juridicos"]

tipo: mc
opciones_explicitas: ["hecho puro", "acto jurídico"]

respuesta: "hecho puro"

enunciado: "Analice el siguiente caso: un rayo que incendia un bosque. Si este suceso ocurre sin la intervención de la voluntad humana con el fin de producir efectos legales, estamos ante un ___."

explicacion: |
  El hecho puro es aquel suceso de la naturaleza que no es producto de la voluntad humana, pero que aun así tiene relevancia para el derecho (ej: un desastre natural).
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["elementos", "norma"]

respuesta: verdadero
tipo: vf

enunciado: "Para que un hecho sea considerado jurídicamente relevante, debe existir una norma jurídica previa que le asigne consecuencias legales."

explicacion: |
  La relevancia jurídica no es una propiedad intrínseca del hecho, sino una atribución de la norma. Si la norma no prevé consecuencias para ese hecho, este es irrelevante para el derecho.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["proceso", "logica_juridica"]

respuesta_orden: ["suceso fáctico", "subsunción", "consecuencia jurídica"]
tipo: ordenar
opciones_explicitas: ["suceso fáctico", "subsunción", "consecuencia jurídica"]

enunciado: "Ordene los pasos lógicos que permiten pasar de un evento de la realidad a una sentencia judicial:"

explicacion: |
  Primero ocurre el hecho (suceso), luego se encuadra ese hecho en la norma (subsunción) y finalmente se produce el efecto legal (consecuencia).
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["clasificacion", "voluntad"]

tipo: mc
opciones_explicitas: ["hecho voluntario", "hecho involuntario"]

respuesta: "hecho voluntario"

enunciado: "Si un hecho es producido por la voluntad del sujeto, pero este no busca las consecuencias jurídicas, se clasifica como un ___."

explicacion: |
  En el derecho, distinguimos entre hechos voluntarios (donde hay voluntad pero no intención de producir efectos legales, como un accidente por negligencia) y actos jurídicos (donde la voluntad busca el efecto legal).
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["teoria_del_derecho", "hechos"]

respuesta: "hecho_juridicamente_relevante"
tipo: completar
respuestas_validas:
  - "hecho_juridicamente_relevante"

enunciado: "Un evento de la naturaleza o de la conducta humana que produce efectos en el ordenamiento jurídico se denomina ___."

explicacion: |
  Un hecho es jurídicamente relevante cuando la norma jurídica le atribuye consecuencias (crear, modificar o extinguir derechos u obligaciones).
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["clasificacion", "hechos_naturales"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["un rayo que destruye una casa asegurada", "hecho de la naturaleza"], ["un contrato de compraventa firmado", "acto jurídico"]]

respuesta: escenarios[escenario_idx][0]
tipo: mc
opciones_explicitas: ["un rayo que destruye una casa asegurada", "un contrato de compraventa firmado"]

enunciado: "Identifique el ejemplo que corresponde a la categoría de: {escenarios[escenario_idx][1]}."

explicacion: |
  En el primer caso, el evento es un hecho de la naturaleza (caso fortuito) que activa una cláusula de seguro. En el segundo, es un acto jurídico porque hay voluntad dirigida a crear efectos legales.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["elementos", "norma"]

respuesta: verdadero
tipo: vf

enunciado: "¿Para que un hecho sea jurídicamente relevante, debe existir una norma previa que le asigne una consecuencia jurídica?"

explicacion: |
  Correcto. Sin una norma que vincule el hecho con una consecuencia (sanción, derecho, obligación), el hecho es irrelevante para el Derecho, aunque sea relevante para la vida cotidiana.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "avanzado"
  tags: ["metodologia", "subsuncion"]

respuesta_orden: ["1. Observación del hecho", "2. Calificación jurídica", "3. Aplicación de la consecuencia"]
tipo: ordenar
opciones_explicitas: ["1. Observación del hecho", "2. Calificación jurídica", "3. Aplicación de la consecuencia"]

enunciado: "Ordene los pasos lógicos para determinar la relevancia de un suceso en un proceso legal:"

explicacion: |
  Primero se observa la realidad (hecho), luego se encuadra en una norma (calificación) y finalmente se determina el efecto legal (consecuencia).
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["caso_practico", "causalidad"]

variables:
  caso_idx: uno_de([0, 1])
  irrelevante: "Juan camina por la calle y ve una nube negra"
  relevantes: ["Juan choca su auto contra un muro por negligencia", "Juan firma un testamento"]

respuesta: relevantes[caso_idx]
tipo: mc
opciones_explicitas: [irrelevante, relevantes[caso_idx]]

enunciado: "Analice los dos eventos: (1) {irrelevante}. (2) {relevantes[caso_idx]}. ¿Cuál de los dos posee relevancia jurídica?"

explicacion: |
  El primer evento es un hecho simple/natural sin consecuencias legales inmediatas. El segundo es un hecho/acto que genera responsabilidad civil (consecuencia jurídica).
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["conceptos_basicos", "teoria_del_derecho"]

tipo: mc
opciones_explicitas: ["Un accidente de tránsito sin culpa", "El nacimiento de una persona", "El paso de una nube por el cielo", "El deseo de comprar un auto"]

respuesta: "El nacimiento de una persona"

enunciado: "Un hecho es jurídicamente relevante cuando su ocurrencia produce una transformación en el ordenamiento jurídico (crea, modifica o extingue derechos). ¿Cuál de los siguientes es un ejemplo de hecho jurídico relevante?"

explicacion: |
  El nacimiento es un hecho jurídico relevante porque genera la capacidad de derecho y la personalidad jurídica. Un accidente sin culpa es un hecho natural, y el deseo es una mera intención sin manifestación externa.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["distincion_fundamental"]

tipo: vf
respuesta: falso

enunciado: "Todo hecho de la naturaleza, como la lluvia o el paso del tiempo, es automáticamente un hecho jurídicamente relevante."

explicacion: |
  Falso. Para que un hecho sea jurídicamente relevante, debe tener una consecuencia legal prevista por la norma. La lluvia es un hecho natural; la lluvia que destruye una cosecha asegurada es un hecho jurídicamente relevante por el contrato de seguro.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["causalidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["La muerte de una persona", "La extinción de la personalidad jurídica y de los derechos patrimoniales"], ["El cumplimiento de la mayoría de edad", "El adquiremiento de la capacidad de ejercicio"]]

tipo: completar
respuestas_validas:
  - "La extinción de la personalidad jurídica y de los derechos patrimoniales"
  - "El adquiremiento de la capacidad de ejercicio"
respuesta: datos[escenario_idx][1]

enunciado: "Si ocurre {datos[escenario_idx][0]}, la consecuencia jurídica es ___."

pasos:
  - "Identificar el hecho natural o social planteado."
  - "Relacionar el hecho con la consecuencia legal correspondiente según la normativa vigente."

explicacion: |
  El hecho jurídico es el suceso, y la consecuencia es el efecto legal que la norma asigna a ese suceso.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["acto_juridico"]

tipo: mc
opciones_explicitas: ["El hecho es involuntario, el acto es una manifestación de voluntad destinada a producir efectos", "El hecho es siempre legal, el acto es siempre ilegal", "No hay diferencia, son sinónimos en derecho", "El acto es un hecho de la naturaleza y el hecho es un contrato"]

respuesta: "El hecho es involuntario, el acto es una manifestación de voluntad destinada a producir efectos"

enunciado: "¿Cuál es la distinción fundamental entre un hecho jurídico y un acto jurídico?"

explicacion: |
  La voluntad es el factor clave. En el acto jurídico, la persona busca deliberadamente producir efectos legales; en el hecho jurídico, la consecuencia se produce por la ley, independientemente de la voluntad del sujeto.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "avanzado"
  tags: ["proceso_juridico"]

tipo: ordenar
opciones_explicitas: ["Ocurrencia de un suceso (hecho)", "Previsión de la norma (hipótesis)", "Producción de consecuencias jurídicas"]
respuesta_orden: ["Ocurrencia de un suceso (hecho)", "Previsión de la norma (hipótesis)", "Producción de consecuencias jurídicas"]

enunciado: "Ordene cronológicamente los elementos necesarios para que un suceso se transforme en un hecho con relevancia jurídica:"

explicacion: |
  Primero debe ocurrir el suceso; segundo, debe existir una norma que haya previsto ese suceso (hipótesis normativa); y finalmente, se produce el efecto legal.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["conceptos_basicos", "hecho_juridico"]

respuesta: "acto jurídico"
tipo: completar
respuestas_validas:
  - "acto jurídico"

enunciado: "Mientras que un hecho jurídico es un evento que produce consecuencias legales sin que medie la voluntad de las partes para producir dichas consecuencias, el ___ es aquel donde la voluntad está dirigida específicamente a crear, modificar o extinguir derechos."

explicacion: |
  El hecho jurídico es un acontecimiento natural o humano que el derecho vincula a una consecuencia, mientras que en el acto jurídico existe la intención deliberada de producir ese efecto legal.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["relevancia", "consecuencia"]

variables:
  datos: [["Un rayo cae sobre un bosque y causa un incendio que destruye una propiedad asegurada.", "es"], ["Una persona camina por la calle y ve un atardecer hermoso.", "no es"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["es", "no es"]

enunciado: "Analice el siguiente escenario: {datos[idx][0]} ¿Este evento es un hecho jurídicamente relevante?"

explicacion: |
  En el primer caso, el rayo (hecho natural) activa una consecuencia legal (el contrato de seguro). En el segundo, el atardecer es un hecho de la naturaleza pero no altera ninguna relación jurídica ni crea derechos u obligaciones.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["clasificacion", "hechos_naturales"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que todos los hechos de la naturaleza (como un terremoto) son hechos jurídicamente relevantes por el solo hecho de ocurrir?"

explicacion: |
  Falso. Solo son hechos jurídicamente relevantes aquellos que el ordenamiento jurídico decide vincular a una consecuencia legal (por ejemplo, un terremoto que activa un seguro o una eximente de responsabilidad).
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["elementos", "causalidad"]

respuesta_orden: ["Presencia de un hecho", "Norma jurídica", "Consecuencia legal"]
tipo: ordenar

opciones_explicitas: ["Presencia de un hecho", "Norma jurídica", "Consecuencia legal"]

enunciado: "Ordene la secuencia lógica de la estructura de la relevancia jurídica, desde el suceso inicial hasta su efecto en el derecho:"

explicacion: |
  Para que exista relevancia, debe ocurrir un hecho, debe existir una norma que lo prevea y, finalmente, se produce la consecuencia legal prevista por dicha norma.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "avanzado"
  tags: ["voluntad", "causalidad"]

respuesta: "acto jurídico"
tipo: mc
opciones_explicitas: ["hecho jurídico", "acto jurídico"]

enunciado: "Si un individuo firma un contrato de compraventa con la intención de transferir la propiedad de un bien, ¿ante qué figura estamos?"

explicacion: |
  La voluntad de transferir la propiedad es el elemento distintivo que convierte al evento en un acto jurídico, a diferencia del hecho jurídico donde la consecuencia se impone independientemente de la voluntad de los sujetos.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "basico"
  tags: ["hecho_juridico", "derecho_civil"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El nacimiento de un niño", "persona"], ["El nacimiento de un feto no viable", "no persona"]]

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["persona", "no persona", "objeto", "sujeto pasivo"]

enunciado: "En el derecho, el hecho de que {datos[escenario_idx][0]} es considerado un hecho jurídicamente relevante porque da origen a la condición de ___."

explicacion: |
  Un hecho es jurídicamente relevante cuando la norma le atribuye consecuencias jurídicas. El nacimiento con vida es el hecho que genera la personalidad jurídica.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["responsabilidad_civil", "hecho_juridico"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Juan choca su auto por descuido y rompe un muro", "responsabilidad"], ["Juan camina por la vereda y ve una nube", "no relevante"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["responsabilidad", "no relevante"]
enunciado: "Analice el siguiente caso: {casos[caso_idx][0]}. ¿Cuál es la calificación jurídica de este evento para el derecho de daños?"

explicacion: |
  El segundo caso es un hecho natural sin consecuencias legales, mientras que el primero es un hecho humano que activa la responsabilidad civil.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["teoria_del_hecho", "norma"]

respuesta: "norma"
tipo: completar
respuestas_validas:
  - "norma"
  - "ley"
  - "decreto"

enunciado: "Para que un hecho sea jurídicamente relevante, debe existir una ___ que le asigne una consecuencia jurídica específica."

explicacion: |
  La relevancia jurídica no es una propiedad intrínseca del hecho, sino una consecuencia de la existencia de una norma que lo regula.
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "avanzado"
  tags: ["contrato", "hecho_juridico"]

variables:
  pasos_correctos: ["Acuerdo de voluntades", "Nacimiento de la obligación", "Cumplimiento o incumplimiento"]

respuesta_orden: pasos_correctos
tipo: ordenar
opciones_explicitas: ["Acuerdo de voluntades", "Nacimiento de la obligación", "Cumplimiento o incumplimiento"]

enunciado: "Ordene cronológicamente los hechos que convierten un simple acuerdo de voluntades en una relación jurídica contractual:"

explicacion: |
  Primero ocurre el acuerdo (hecho jurídico), esto crea la obligación (consecuencia) y finalmente el cumplimiento o incumplimiento (hecho que extingue o modifica la relación).
```

```
metadata:
  materia: "derecho"
  tema: "hecho_juridicamente_relevante"
  nivel: "intermedio"
  tags: ["hecho_juridico", "acto_juridico"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["Un rayo que destruye una casa", "hecho natural"], ["Un testamento", "acto jurídico"]]

respuesta: ejemplos[ejemplo_idx][1]
tipo: mc
opciones_explicitas: ["hecho natural", "acto jurídico", "acto administrativo", "hecho social"]

enunciado: "Si el hecho es {ejemplos[ejemplo_idx][0]}, estamos ante un ___."

explicacion: |
  Los hechos naturales son sucesos de la naturaleza que tienen relevancia legal (como un desastre que activa un seguro) sin que medie la voluntad humana.
```

