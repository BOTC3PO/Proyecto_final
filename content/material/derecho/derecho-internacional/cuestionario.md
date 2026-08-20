# Derecho — Derecho internacional (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Derecho Internacional Público

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

### 2 — Sujetos del Derecho Internacional

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

### 3 — Fuentes del Derecho Internacional

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

### 4 — Jerarquía de Normas (Ordenar)

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

### 5 — Concepto de Soberanía

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

### 6 — El tratado de límites

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "basico"
  tags: ["tratados", "soberania"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [["Estado A", "Estado B", "Tratado de Límites"], ["Estado C", "Estado D", "Acuerdo de Fronteras"]]

enunciado: "El {datos[caso_idx][0]} es un instrumento jurídico mediante el cual el {datos[caso_idx][1]} y el {datos[caso_idx][2]} establecen normas de conducta mutua. ¿Es este un ejemplo de Derecho Internacional Público?"

respuesta: verdadero
tipo: "vf"

explicacion: |
  El Derecho Internacional Público regula las relaciones entre sujetos de derecho internacional, principalmente Estados soberanos, mediante tratados y normas consuetudinarias.
```

### 7 — El rol de la ONU

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

### 8 — Proceso de creación de una norma

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

### 9 — Sujetos del Derecho Internacional

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

### 10 — Cumplimiento de obligaciones

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "intermedio"
  tags: ["pacta_sunt_servanda"]

variables:
  norma: uno_de(["Pacta sunt servanda", "Lex posterior"])

enunciado: "El principio de que 'lo pactado obliga' se conoce como {norma}. Si un Estado firma un tratado, ¿está obligado a cumplirlo de buena fe?"

respuesta: verdadero
tipo: "vf"

explicacion: |
  El principio 'Pacta sunt servanda' es la piedra angular del derecho de los tratados, estableciendo que todo tratado en vigor es obligatorio para las partes y debe ser cumplido por ellas de buena fe.
```

### 11 — Sujetos del Derecho Internacional

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

### 12 — Ámbito de aplicación

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

### 13 — Fuentes del Derecho Internacional

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

### 14 — Jerarquía de normas

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

### 15 — Proceso de creación de normas

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

### 16 — Distinción por sujetos

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

### 17 — Naturaleza de la norma

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

### 18 — Jerarquía y aplicación

```
metadata:
  materia: "derecho"
  tema: "derecho_internacional"
  nivel: "avanzado"
  tags: ["jerarquia", "normas"]

variables:
  caso: uno_de([["Tratado", "Norma Imperativa (Jus Cogens)"], ["Tratado", "Tratado Bilateral"]])

respuesta: caso[1]
tipo: completar
respuestas_validas:
  - "Norma Imperativa (Jus Cogens)"
  - "Tratado Bilateral"

enunciado: "Mientras que la mayoría de las normas internacionales derivan del consentimiento, existen normas de carácter superior denominadas ___ que no admiten acuerdo en contrario."

explicacion: |
  Las normas de 'jus cogens' son normas imperativas de derecho internacional general aceptadas y reconocidas por la comunidad internacional, que no admiten derogación por tratados.
```

### 19 — Resolución de conflictos

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

### 20 — Orden de fuentes

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

### 21 — Sujetos del Derecho Internacional

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

### 22 — Fuentes del Derecho Internacional

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

### 23 — Jerarquía de Normas (Ius Cogens)

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

### 24 — Resolución de Conflictos

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

### 25 — Secuencia de creación de un Tratado

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
