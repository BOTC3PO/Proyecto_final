# Lengua — Sujeto y predicado (cuestionario, 20 preguntas VBLang)

> Tema: `P5`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — Qué es una oración bimembre

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "basico"
  tags: ["oracion_bimembre", "vocabulario"]

enunciado: "¿En qué dos partes se divide una oración bimembre?"
tipo: mc
opciones_explicitas:
  - "Sujeto (de quién se habla) y predicado (qué se dice de él)"
  - "Sustantivo y verbo, únicamente"
  - "Principio y final, sin ninguna otra distinción"
respuesta: "Sujeto (de quién se habla) y predicado (qué se dice de él)"

explicacion: |
  Son dos mitades complementarias — no se puede tener una sin la
  otra.
```

### 2 — Qué es el sujeto

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "basico"
  tags: ["sujeto", "vocabulario"]

enunciado: "¿Qué es el sujeto de una oración?"
tipo: mc
opciones_explicitas:
  - "Un sintagma nominal, cuyo núcleo es un sustantivo o pronombre, que determina la concordancia del verbo"
  - "El verbo principal de la oración"
  - "Cualquier palabra que aparezca al final de la oración"
respuesta: "Un sintagma nominal, cuyo núcleo es un sustantivo o pronombre, que determina la concordancia del verbo"

explicacion: |
  El núcleo del sujeto es, justamente, lo que decide si el verbo va
  en singular o plural.
```

### 3 — Qué es el predicado

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "basico"
  tags: ["predicado", "vocabulario"]

enunciado: "¿Qué es el predicado de una oración?"
tipo: mc
opciones_explicitas:
  - "La parte que contiene el verbo (su núcleo) y todo lo que lo acompaña"
  - "La parte que nombra de quién se habla"
  - "Otro nombre para el sujeto tácito"
respuesta: "La parte que contiene el verbo (su núcleo) y todo lo que lo acompaña"

explicacion: |
  El núcleo del predicado es siempre el verbo conjugado.
```

### 4 — Problema: núcleo del sujeto

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["nucleo", "problema"]

enunciado: "En la oración 'Los estudiantes de la clase aprobaron el examen', ¿cuál es el núcleo del sujeto?"
tipo: mc
opciones_explicitas:
  - "estudiantes"
  - "los"
  - "clase"
  - "aprobaron"
respuesta: "estudiantes"

explicacion: |
  Es el sustantivo principal del sintagma nominal sujeto — el que
  determina la concordancia verbal ('aprobaron', no 'aprobó').
```

### 5 — Problema: marcar sujeto y predicado

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["problema"]

enunciado: "Marcá el sujeto y el predicado de esta oración."
tipo: analisis_spans
texto_analizar: "El perro grande corre por el parque"
spans_pedidos:
  - { desde: 0, hasta: 2, etiqueta: "sujeto" }
  - { desde: 3, hasta: 6, etiqueta: "predicado" }

explicacion: |
  'El perro grande' es el sujeto (de quién se habla); 'corre por el
  parque' es el predicado (qué se dice de él).
```

### 6 — Problema: marcar sujeto y predicado en otra oración

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["problema"]

enunciado: "Marcá el sujeto y el predicado de esta oración."
tipo: analisis_spans
texto_analizar: "Los estudiantes de la clase aprobaron el examen"
spans_pedidos:
  - { desde: 0, hasta: 4, etiqueta: "sujeto" }
  - { desde: 5, hasta: 7, etiqueta: "predicado" }

explicacion: |
  'Los estudiantes de la clase' (incluye el complemento del nombre)
  es el sujeto completo; 'aprobaron el examen' es el predicado.
```

### 7 — Problema: identificar el sujeto tácito

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["sujeto_tacito", "problema"]

tipo: completar
enunciado: "En la oración 'Comieron toda la pizza', el sujeto es ___ porque no aparece expresado en la oración."
respuestas_validas:
  - "tácito"
  - "tacito"
  - "elíptico"
  - "eliptico"
  - "omitido"

explicacion: |
  Se deduce por la desinencia verbal: '-ieron' indica tercera persona
  del plural (ellos/ellas).
```

### 8 — Problema: oración impersonal sin sujeto

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["impersonal", "problema"]

enunciado: "¿Qué tipo de sujeto tiene la oración 'Llueve mucho en otoño'?"
tipo: mc
opciones_explicitas:
  - "No tiene sujeto: es una oración impersonal (verbo meteorológico)"
  - "Sujeto tácito: 'el cielo', deducido por el contexto"
  - "Sujeto explícito: 'otoño'"
respuesta: "No tiene sujeto: es una oración impersonal (verbo meteorológico)"

explicacion: |
  Los verbos meteorológicos ('llover', 'nevar', 'amanecer') no tienen
  ningún sujeto gramatical, ni explícito ni tácito.
```

### 9 — Problema: sujeto explícito

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "intermedio"
  tags: ["sujeto_explicito", "problema"]

enunciado: "¿Qué tipo de sujeto tiene la oración 'María lee novelas'?"
tipo: mc
opciones_explicitas:
  - "Sujeto explícito (nombre propio): 'María'"
  - "Sujeto tácito, deducido por la desinencia"
  - "No tiene sujeto: es una oración impersonal"
respuesta: "Sujeto explícito (nombre propio): 'María'"

explicacion: |
  El sujeto aparece escrito directamente en la oración.
```

### 10 — Problema: sujeto tácito con 'somos'

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["sujeto_tacito", "problema"]

enunciado: "¿Qué tipo de sujeto tiene la oración 'Somos estudiantes'?"
tipo: mc
opciones_explicitas:
  - "Sujeto tácito (nosotros, deducido por la desinencia '-mos')"
  - "Sujeto explícito: 'estudiantes'"
  - "No tiene sujeto: es una oración impersonal"
respuesta: "Sujeto tácito (nosotros, deducido por la desinencia '-mos')"

explicacion: |
  'Estudiantes' es parte del predicado (atributo), no el sujeto —
  'nosotros' es el sujeto, tácito.
```

### 11 — Problema: sujeto paciente en pasiva refleja

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["pasiva_refleja", "problema"]

enunciado: "¿Qué tipo de sujeto tiene la oración 'Se venden casas'?"
tipo: mc
opciones_explicitas:
  - "Sujeto paciente (pasiva refleja): 'casas'"
  - "Sujeto tácito: 'alguien'"
  - "No tiene sujeto: es una oración impersonal"
respuesta: "Sujeto paciente (pasiva refleja): 'casas'"

explicacion: |
  Es el mismo caso visto en `../concordancia-nominal-y-verbal/`: el
  verbo concuerda con 'casas' porque es su sujeto gramatical.
```

### 12 — El sujeto tácito se deduce por la desinencia

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "intermedio"
  tags: ["sujeto_tacito"]

respuesta: verdadero
tipo: vf

enunciado: "El sujeto tácito no aparece escrito en la oración, pero se puede deducir por la desinencia (terminación) del verbo conjugado."

explicacion: |
  Por ejemplo, '-amos' siempre indica primera persona del plural
  (nosotros).
```

### 13 — Los verbos meteorológicos no tienen sujeto

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["impersonal"]

respuesta: verdadero
tipo: vf

enunciado: "Los verbos meteorológicos ('llover', 'nevar', 'amanecer') forman oraciones impersonales, sin ningún sujeto gramatical, ni explícito ni tácito."

explicacion: |
  No hay ningún 'algo' o 'alguien' que realice la acción de llover o
  nevar.
```

### 14 — Problema: identificar el núcleo del predicado

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "intermedio"
  tags: ["nucleo", "problema"]

enunciado: "En la oración 'El perro grande corre por el parque', ¿cuál es el núcleo del predicado?"
tipo: mc
opciones_explicitas:
  - "corre"
  - "perro"
  - "parque"
respuesta: "corre"

explicacion: |
  El núcleo del predicado siempre es el verbo conjugado de la
  oración.
```

### 15 — Aplicación: sujeto y concordancia verbal

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "intermedio"
  tags: ["aplicacion"]

enunciado: "¿Por qué es necesario identificar bien el sujeto de una oración antes de conjugar el verbo?"
tipo: mc
opciones_explicitas:
  - "Porque el núcleo del sujeto es lo que determina la persona y el número correctos del verbo (concordancia verbal)"
  - "Porque el sujeto siempre determina el tiempo verbal (pasado, presente o futuro)"
  - "No hay ninguna relación real entre sujeto y verbo"
respuesta: "Porque el núcleo del sujeto es lo que determina la persona y el número correctos del verbo (concordancia verbal)"

explicacion: |
  Es la conexión directa con `../concordancia-nominal-y-verbal/`.
```

### 16 — Problema: etiquetar núcleos con análisis sintáctico

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["nucleo", "problema"]

enunciado: "Etiquetá el núcleo del sujeto y el núcleo del predicado de esta oración."
tipo: analisis_sintactico
texto_analizar: "Los estudiantes de la clase aprobaron el examen"
etiquetas_pedidas:
  - { palabra: "estudiantes", etiqueta: "núcleo del sujeto" }
  - { palabra: "aprobaron", etiqueta: "núcleo del predicado" }

explicacion: |
  'Estudiantes' concentra el significado del sujeto; 'aprobaron' es
  el verbo, núcleo del predicado.
```

### 17 — Problema: distinguir sujeto de complemento del nombre

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "avanzado"
  tags: ["nucleo", "problema"]

enunciado: "En 'Los estudiantes de la clase aprobaron el examen', ¿qué función cumple 'de la clase'?"
tipo: mc
opciones_explicitas:
  - "Es un complemento del nombre 'estudiantes' — precisa de qué estudiantes se habla, pero no es el núcleo del sujeto"
  - "Es el núcleo del sujeto"
  - "Es parte del predicado"
respuesta: "Es un complemento del nombre 'estudiantes' — precisa de qué estudiantes se habla, pero no es el núcleo del sujeto"

explicacion: |
  Acompaña al núcleo sin reemplazarlo — el núcleo sigue siendo
  'estudiantes'.
```

### 18 — Toda oración bimembre tiene sujeto y predicado

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "intermedio"
  tags: ["oracion_bimembre"]

respuesta: verdadero
tipo: vf

enunciado: "Por definición, toda oración BIMEMBRE tiene sujeto y predicado — las oraciones impersonales (sin sujeto) se llaman, en cambio, unimembres."

explicacion: |
  'Llueve' es una oración unimembre: no tiene la división en dos
  mitades complementarias.
```

### 19 — Aplicación: base del análisis sintáctico completo

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "basico"
  tags: ["aplicacion"]

enunciado: "¿Por qué distinguir sujeto y predicado es la base de un análisis sintáctico más completo (núcleos, modificadores, objetos)?"
tipo: mc
opciones_explicitas:
  - "Porque es la primera división de cualquier oración bimembre — sin saber qué parte es sujeto y cuál predicado, no se puede seguir analizando núcleos ni complementos dentro de cada una"
  - "No tiene ninguna relación con análisis sintácticos más complejos"
  - "Sólo se usa para contar palabras de una oración"
respuesta: "Porque es la primera división de cualquier oración bimembre — sin saber qué parte es sujeto y cuál predicado, no se puede seguir analizando núcleos ni complementos dentro de cada una"

explicacion: |
  Es el punto de partida de cualquier análisis sintáctico más
  detallado.
```

### 20 — Cierre: para qué sirve identificar sujeto y predicado

```
metadata:
  materia: "lengua"
  tema: "sujeto_y_predicado"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve identificar el sujeto y el predicado de una oración?"
tipo: mc
opciones_explicitas:
  - "Para aplicar correctamente la concordancia verbal y para poder analizar la estructura completa de cualquier oración"
  - "Sólo sirve para completar ejercicios de gramática, sin ninguna utilidad al hablar o escribir"
  - "Sólo se aplica a oraciones muy largas y complejas"
respuesta: "Para aplicar correctamente la concordancia verbal y para poder analizar la estructura completa de cualquier oración"

explicacion: |
  Cierra la cadena de `../clases-de-palabras/` →
  `../concordancia-nominal-y-verbal/` → sujeto y predicado: de
  reconocer palabras sueltas a poder analizar una oración completa.
```
