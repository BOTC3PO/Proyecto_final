# ESI — Diversidad e identidad de género (Ley 26.743) (cuestionario, 25 preguntas VBLang)

> Tema: `ES7`. Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido a mano. Bugs de esta tanda: varias preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`); un
> bloque entero (5 preguntas) usaba la clave `explicación:` (con
> tilde) en vez de `explicacion:` — corregido en las 5; **un error
> de contenido real**: una pregunta describía a una persona con
> identidad femenina que siente atracción por mujeres y la etiquetaba
> como orientación "heterosexual" (debería ser homosexual/lesbiana)
> — corregida; varias preguntas con `variables:`/`conceptos` indexadas
> incorrectamente (`conceptos[idx][1]` sobre una lista plana de
> strings, no una lista de listas) — simplificadas a respuesta fija
> donde la variabilidad no aportaba nada real; dos preguntas `tipo: vf`
> sin campo `respuesta:` (sólo `respuestas_validas`) — agregado.

---

### 1 — Conceptos básicos: identidad de género

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "basico"
  tags: ["conceptos", "identidad"]

enunciado: "La vivencia interna e individual del género tal como cada persona la siente, que puede o no corresponder con el sexo asignado al nacer, se denomina ___."

respuestas_validas:
  - "identidad de género"
  - "identidad de genero"

respuesta: "identidad de género"
tipo: completar

explicacion: |
  La identidad de género es la vivencia interna del género, la cual puede o no coincidir con el sexo biológico.
```

### 2 — Diferencia entre sexo e identidad

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "basico"
  tags: ["sexo", "identidad"]

enunciado: "Si una persona nace con características biológicas que la sitúan en un sexo determinado, pero su vivencia interna es la de una persona no binaria, estamos hablando de su ___."

respuestas_validas:
  - "identidad de género"
  - "identidad de genero"

respuesta: "identidad de género"
tipo: completar

explicacion: |
  El sexo biológico se refiere a las características físicas y fisiológicas, mientras que la identidad es la vivencia interna.
```

### 3 — La orientación sexual

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "intermedio"
  tags: ["orientacion_sexual"]

enunciado: "La atracción física, afectiva y emocional que una persona siente hacia otras personas se conoce como ___."

respuestas_validas:
  - "orientación sexual"
  - "orientacion sexual"

respuesta: "orientación sexual"
tipo: completar

explicacion: |
  Es fundamental no confundir la identidad (quién soy) con la orientación (quién me atrae).
```

### 4 — Relación entre conceptos

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "intermedio"
  tags: ["distincion"]

enunciado: "Una persona puede tener una identidad de género, una orientación sexual y un sexo biológico que no coincidan necesariamente entre sí. Por ejemplo, una persona cuya identidad es femenina, y que siente atracción por otras mujeres, tiene una orientación ___."

respuestas_validas:
  - "homosexual"
  - "lésbica"
  - "lesbica"

respuesta: "homosexual"
tipo: completar

explicacion: |
  Al ser mujer (identidad) y sentir atracción por mujeres, su orientación es homosexual (lésbica) — la identidad femenina no determina automáticamente la orientación.
```

### 5 — Completar la definición de sexo

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "basico"
  tags: ["sexo_biologico"]

enunciado: "El ___ se refiere a las características biológicas, anatómicas y fisiológicas (como cromosomas o genitales) con las que nace una persona."

respuestas_validas:
  - "sexo biológico"
  - "sexo biologico"

respuesta: "sexo biológico"
tipo: completar

explicacion: |
  El sexo biológico es una categoría basada en rasgos físicos y biológicos.
```

### 6 — Año de sanción

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "basico"
  tags: ["ley", "historia", "argentina"]

tipo: mc
opciones_explicitas: ["2008", "2012", "2015", "2018"]
respuesta: "2012"

enunciado: "La Ley de Identidad de Género en Argentina fue sancionada en el año ___."

explicacion: |
  La Ley 26.743 fue sancionada en el año 2012, marcando un hito en la protección de los derechos de las personas trans.
```

### 7 — El derecho a la identidad

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "basico"
  tags: ["derechos", "identidad"]

tipo: vf
respuesta: verdadero

enunciado: "La Ley 26.743 garantiza el derecho de las personas a ser tratadas de acuerdo con su identidad de género auto-percibida."

explicacion: |
  Correcto. El principio de autodeterminación es la base de esta ley: la identidad es una vivencia interna e individual.
```

### 8 — Requisitos para el DNI

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "intermedio"
  tags: ["dni", "rectificacion", "derechos"]

tipo: mc
opciones_explicitas: ["Diagnóstico médico previo", "Cirugía de reasignación", "Tratamiento hormonal", "Sin necesidad de diagnósticos ni cirugías"]
respuesta: "Sin necesidad de diagnósticos ni cirugías"

enunciado: "Para la rectificación registral de nombre y sexo en el DNI, la ley establece que..."

explicacion: |
  La ley asegura que la identidad de género sea un derecho basado en la auto-percepción, eliminando la obligación de realizar tratamientos médicos o cirugías para cambiar el registro.
```

### 9 — La base de la ley

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "basico"
  tags: ["conceptos", "identidad"]

tipo: vf
respuesta: verdadero

enunciado: "La identidad de género es una vivencia interna e individual de género que puede o no corresponder con el sexo asignado al momento del nacimiento."

explicacion: |
  Verdadero. La ley reconoce que la identidad es una construcción subjetiva y no depende de factores biológicos o médicos.
```

### 10 — Alcance de la rectificación

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "intermedio"
  tags: ["derechos", "registro"]

tipo: mc
opciones_explicitas: ["Sólo el nombre", "Sólo el sexo", "Nombre y sexo en el DNI", "Nombre, sexo y apariencia física"]
respuesta: "Nombre y sexo en el DNI"

enunciado: "La rectificación registral que permite la Ley 26.743 se aplica sobre..."

explicacion: |
  La ley permite la modificación de los datos de nombre y sexo en el documento de identidad (DNI) de manera administrativa.
```

### 11 — El principio de la autopercepción

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "basico"
  tags: ["ley_26743", "identidad"]

respuesta: "autopercepción"
tipo: completar
respuestas_validas:
  - "autopercepción"
  - "autopercepcion"

enunciado: "Según la Ley 26.743, la identidad de género es una vivencia interna e individual del género tal como cada persona la siente. A esta vivencia (y al derecho de definirla una misma sin diagnóstico previo) se la denomina el principio de ___."

explicacion: |
  La ley establece que la identidad de género es una vivencia interna y la autopercepción es el derecho fundamental de cada persona a definirse a sí misma sin necesidad de diagnósticos médicos o psicológicos.
```

### 12 — Diagnósticos médicos y género

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "intermedio"
  tags: ["derechos", "salud"]

respuesta: falso
tipo: vf

enunciado: "De acuerdo con la legislación vigente en Argentina, para que una persona pueda acceder a la rectificación de su identidad de género en el DNI, es obligatorio presentar un diagnóstico médico o psicológico que certifique una patología."

explicacion: |
  Es falso. La ley garantiza que la identidad de género se basa en la autopercepción, eliminando la necesidad de diagnósticos médicos o intervenciones quirúrgicas para el reconocimiento legal.
```

### 13 — Acceso a tratamientos de adecuación corporal

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "intermedio"
  tags: ["salud", "derechos"]

respuesta: "tratamientos"
tipo: completar
respuestas_validas:
  - "tratamientos"

enunciado: "La ley garantiza el acceso a los ___ de adecuación a la identidad de género tanto en el sistema de salud público como en el privado."

explicacion: |
  La Ley 26.743 asegura que el Estado debe garantizar el acceso a los tratamientos de adecuación corporal (hormonales, quirúrgicos, etc.) en todas las obras sociales, prepagas y hospitales públicos.
```

### 14 — El rol de la voluntad en la salud

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "avanzado"
  tags: ["autonomía", "salud"]

respuesta: "deseo"
tipo: completar
respuestas_validas:
  - "deseo"

enunciado: "El acceso a las prestaciones de salud para la adecuación de la identidad de género se basa en el ___ de la persona y no en la imposición de un modelo médico tradicional."

explicacion: |
  La autonomía de la voluntad es el eje central: la persona es quien decide sobre su propio cuerpo y su proceso de transición.
```

### 15 — Obligación de las obras sociales

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "intermedio"
  tags: ["seguridad_social", "derechos"]

respuesta: "cobertura"
tipo: completar
respuestas_validas:
  - "cobertura"

enunciado: "Las obras sociales y las entidades de medicina prepaga deben brindar la ___ integral de los tratamientos de adecuación a la identidad de género que la persona requiera."

explicacion: |
  La ley obliga a las entidades de salud a cubrir los tratamientos necesarios para que la persona pueda vivir conforme a su identidad de género.
```

### 16 — El uso del nombre social

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "basico"
  tags: ["respeto", "identidad"]

tipo: mc
opciones_explicitas: ["El nombre que figura en el DNI", "El nombre con el que la persona se identifica", "El nombre que eligen sus padres", "El nombre que usa la escuela por defecto"]
respuesta: "El nombre con el que la persona se identifica"

enunciado: "Cuando una persona trans o no binaria asiste a la escuela, el respeto a su identidad implica utilizar su..."

explicacion: |
  El respeto a la identidad de género incluye el uso del nombre social, que es el nombre con el que la persona se identifica y con el cual desea ser llamada, independientemente de lo que diga su documento de identidad.
```

### 17 — Pronombres y trato cotidiano

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "basico"
  tags: ["pronombres", "respeto"]

tipo: vf
respuesta: verdadero

enunciado: "Si una persona te indica que sus pronombres son 'elle/elles', lo correcto es seguir usando los pronombres con los que se identifica la persona para respetar su identidad."

explicacion: |
  Es correcto. El uso de los pronombres indicados por la persona es una forma fundamental de reconocimiento y respeto a su identidad de género en la convivencia cotidiana.
```

### 18 — Respeto en el aula

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "intermedio"
  tags: ["convivencia", "derechos"]

tipo: mc
opciones_explicitas: ["Es una cuestión de opinión personal", "Es una obligación legal y un derecho de la persona", "Sólo es necesario si la persona lo pide formalmente", "Es opcional según el clima escolar"]
respuesta: "Es una obligación legal y un derecho de la persona"

enunciado: "El respeto por el nombre y la identidad de género de los estudiantes en el ámbito escolar es:"

explicacion: |
  Más allá de las normas de convivencia, el respeto a la identidad de género es un derecho humano y una obligación legal para las instituciones educativas para garantizar un entorno libre de discriminación.
```

### 19 — Identidad no binaria

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "intermedio"
  tags: ["no_binario", "pronombres"]

tipo: vf
respuesta: verdadero

enunciado: "Las personas no binarias pueden identificarse con pronombres que no sean exclusivamente masculinos o femeninos."

explicacion: |
  Verdadero. La identidad no binaria es una identidad que no se ajusta a las categorías tradicionales de hombre o mujer, y muchas personas utilizan pronombres neutros para reflejar su vivencia.
```

### 20 — Acciones de trato respetuoso

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "basico"
  tags: ["respeto", "cotidiano"]

tipo: mc
opciones_explicitas: ["Ignorar el tema para no incomodar", "Preguntar con respeto cómo prefiere ser llamada", "Usar el nombre del DNI para evitar confusiones", "Esperar a que un profesor intervenga"]
respuesta: "Preguntar con respeto cómo prefiere ser llamada"

enunciado: "Ante la duda sobre cómo referirse a un compañero o compañera, la acción más respetuosa es:"

explicacion: |
  La comunicación asertiva y el respeto implican preguntar de manera amable y natural cómo la persona desea ser llamada, validando así su identidad sin estigmatizarla.
```

### 21 — Identidad de género (escenario)

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "basico"
  tags: ["identidad", "conceptos"]

variables:
  idx: uno_de([0, 1])
  escenarios: ["se siente mujer aunque le asignaron varón al nacer", "se siente hombre aunque le asignaron mujer al nacer"]

respuesta: "identidad de género"
tipo: mc
opciones_explicitas: ["identidad de género", "orientación sexual", "sexo biológico"]

enunciado: "Un/a estudiante dice: '{escenarios[idx]}'. ¿A qué concepto nos referimos?"

explicacion: |
  La identidad de género es la vivencia interna e individual del género tal como cada persona la siente, la cual puede o no corresponder con el sexo asignado al nacer.
```

### 22 — Orientación sexual (escenario)

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "basico"
  tags: ["orientacion", "atracción"]

variables:
  idx: uno_de([0, 1])
  escenarios: ["siente atracción física y afectiva por personas de su mismo género", "siente atracción por personas de un género distinto al suyo"]

respuesta: "orientación sexual"
tipo: mc
opciones_explicitas: ["identidad de género", "orientación sexual", "sexo biológico"]

enunciado: "Si una persona manifiesta que '{escenarios[idx]}', estamos hablando de su:"

explicacion: |
  La orientación sexual se refiere a la capacidad de atracción afectiva, emocional y sexual de una persona hacia otras.
```

### 23 — Sexo biológico (escenario)

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "basico"
  tags: ["sexo", "biologia"]

respuesta: "sexo biológico"
tipo: mc
opciones_explicitas: ["sexo biológico", "identidad de género", "orientación sexual"]

enunciado: "Cuando hablamos de las características anatómicas y cromosómicas con las que se nace, nos referimos al:"

explicacion: |
  El sexo biológico se basa en los aspectos físicos y fisiológicos (genitales, hormonas, cromosomas) que distinguen a los seres vivos.
```

### 24 — Completar conceptos: orientación e identidad

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "intermedio"
  tags: ["identidad", "orientacion"]

respuesta: "orientación sexual"
tipo: completar
respuestas_validas:
  - "orientación sexual"
  - "orientacion sexual"

enunciado: "Si hablamos de quién nos atrae, hablamos de la ___ (y si hablamos de quiénes somos, hablamos de la identidad de género)."

explicacion: |
  Es fundamental distinguir entre la atracción (orientación) y la vivencia del propio género (identidad).
```

### 25 — Diferencia entre identidad y orientación

```
metadata:
  materia: "esi"
  tema: "diversidad_identidad_genero"
  nivel: "intermedio"
  tags: ["conceptos", "diferencia"]

respuesta: "orientación sexual"
tipo: mc
opciones_explicitas: ["identidad de género", "orientación sexual"]

enunciado: "En el caso de una persona trans que siente atracción por personas de su mismo género (una vez ya asumida su identidad), el hecho de sentir esa atracción se refiere a su:"

explicacion: |
  La identidad (quién soy) es un eje distinto a la orientación (quién me atrae). Una persona trans puede tener cualquier orientación sexual.
```
