# Derecho — Derecho constitucional (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Derecho Constitucional

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["definicion", "fundamentos"]

respuesta: "estudia la Constitución, la organización del Estado y los derechos fundamentales"
tipo: completar
respuestas_validas:
  - "estudia la Constitución, la organización del Estado y los derechos fundamentales"

enunciado: "El Derecho Constitucional es la rama del derecho público que ___."

explicacion: |
  El Derecho Constitucional se encarga de regular la estructura fundamental del Estado y la protección de los derechos de los ciudadanos frente al poder.
```

### 2 — El objeto de estudio

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["objeto_estudio"]

variables:
  escenario: uno_de([[ "Constitución", "leyes comunes" ], [ "Constitución", "normas de tránsito" ], [ "Constitución", "contratos privados" ]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Constitución", "leyes comunes", "normas de tránsito", "contratos privados"]

enunciado: "El objeto principal de estudio del Derecho Constitucional es la {escenario[0]}."

explicacion: |
  La Constitución es la norma suprema que rige la organización de un Estado.
```

### 3 — Jerarquía normativa

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

### 4 — Elementos de la Constitución

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["partes_constitucion"]

respuesta_orden: ["Parte Dogmática", "Parte Orgánica", "Cláusulas de Reforma"]
tipo: ordenar
opciones_explicitas: ["Parte Dogmática", "Parte Orgánica", "Cláusulas de Reforma"]

enunciado: "Ordene los componentes típicos de una Constitución moderna de mayor a menor jerarquía conceptual (desde la protección de derechos hasta el mecanismo de cambio):"

explicacion: |
  La Parte Dogmática contiene los derechos; la Orgánica la estructura del Estado; y las Cláusulas de Reforma regulan cómo cambiar la propia Constitución.
```

### 5 — Derechos Fundamentales

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

### 6 — El control de constitucionalidad

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["constitucion", "control_constitucional"]

tipo: mc
opciones_explicitas: ["constitucional", "inconstitucional", "nulo", "inaplicable"]

respuesta: "inconstitucional"

enunciado: "Si una ley sancionada por el Congreso contradice un principio fundamental establecido en la Constitución Nacional, un juez debe declarar que dicha ley es ___."

explicacion: |
  El control de constitucionalidad es la facultad de los jueces de asegurar que ninguna norma inferior (como una ley) contradiga la norma suprema (la Constitución). Si hay contradicción, la norma debe ser declarada inconstitucional.
```

### 7 — División de poderes

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

### 8 — Derechos fundamentales en un caso práctico

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["derechos_fundamentales", "libertad_expresion"]

respuesta: ["libertad de expresión", "derecho a la intimidad"]
tipo: completar
respuestas_validas:
  - "libertad de expresión"
  - "derecho a la intimidad"

enunciado: "Un periodista publica información veraz sobre un funcionario público para denunciar corrupción. En este conflicto de derechos, la jurisprudencia suele priorizar la ___ sobre el ___."

pasos:
  - "Identificar el derecho en juego: informar sobre asuntos de interés público."
  - "Contrastar con el derecho a la privacidad del funcionario en el ejercicio de su cargo."
  - "Determinar cuál prevalece según la doctrina constitucional."

explicacion: |
  En casos de interés público, el derecho a la información y la libertad de expresión suelen prevalecer sobre la privacidad de los funcionarios, siempre que la información sea veraz y de relevancia social.
```

### 9 — Jerarquía normativa

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["jerarquia", "kelsen"]

respuesta_orden: ["Constitución Nacional", "Tratados Internacionales de Derechos Humanos", "Leyes Nacionales", "Decretos"]
tipo: ordenar

opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales de Derechos Humanos", "Leyes Nacionales", "Decretos"]

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía, siguiendo el ordenamiento jurídico basado en la supremacía constitucional."

explicacion: |
  La Constitución y los Tratados de Derechos Humanos con jerarquía constitucional están en la cima. Por debajo se encuentran las leyes nacionales y, finalmente, los decretos del Poder Ejecutivo.
```

### 10 — El debido proceso

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

### 11 — ¿Qué estudia el Derecho Constitucional?

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

### 12 — ¿Es el Derecho Constitucional parte del Derecho Público?

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

### 13 — Diferencia con el Derecho Administrativo

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
respuestas_validas:
  - datos[idx][1]

enunciado: "Mientras que el Derecho Constitucional estudia {datos[idx][0]}, el Derecho Administrativo se ocupa de {datos[idx][1]}."

explicacion: |
  El Derecho Constitucional establece el marco general y la estructura (el "qué" y "quién"), mientras que el Derecho Administrativo regula la actividad y procedimientos de la administración pública (el "cómo" operativo).
```

### 14 — Jerarquía de las normas

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional_jerarquia"
  nivel: "intermedio"
  tags: ["kelsen", "jerarquia", "normas"]

opciones_explicitas: ["Constitución Nacional", "Tratados Internacionales de Derechos Humanos", "Leyes Nacionales", "Decretos del Poder Ejecutivo"]

respuesta_orden: ["Constitución Nacional", "Tratados Internacionales de Derechos Humanos", "Leyes Nacionales", "Decretos del Poder Ejecutivo"]
tipo: "ordenar"

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía según la supremacía constitucional (considerando el bloque de constitucionalidad):"

explicacion: |
  La Constitución y los Tratados de Derechos Humanos con jerarquía constitucional encabezan el ordenamiento, seguidos por las leyes y finalmente los decretos.
```

### 15 — ¿El Derecho Constitucional regula contratos entre particulares?

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

### 16 — Distinción fundamental

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["definicion", "jerarquia"]

respuesta: "derecho_público"
tipo: completar
respuestas_validas:
  - "derecho_público"

enunciado: "A diferencia del derecho privado, que regula las relaciones entre particulares, el derecho constitucional pertenece al ámbito del ___________."

explicacion: |
  El derecho constitucional es la base del derecho público, ya que regula la estructura del Estado y la relación entre este y los ciudadanos.
```

### 17 — Jerarquía normativa

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["jerarquia", "normativa"]

variables:
  escenario: uno_de([["Constitución", "Tratado Internacional", "Ley Común"], ["Constitución", "Decreto", "Resolución"]])

opciones_explicitas: ["Constitución", "Tratado Internacional", "Ley Común", "Decreto", "Resolución"]

respuesta: escenario[0]
tipo: mc

enunciado: "En la pirámide de Kelsen, ¿cuál de los siguientes elementos tiene mayor jerarquía que una {escenario[1]}?"

pasos:
  - "Identificar la posición de la norma mencionada en la jerarquía normativa."
  - "Comparar con la supremacía constitucional."

explicacion: |
  La Constitución es la norma suprema; ninguna norma de menor rango (como leyes o decretos) puede contradecirla.
```

### 18 — Relación con el Derecho Administrativo

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

### 19 — El control de constitucionalidad

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "avanzado"
  tags: ["control", "jurisdiccion"]

opciones_explicitas: ["anular", "validar", "modificar", "derogar"]

respuesta: "anular"
tipo: mc

enunciado: "Cuando un tribunal ejerce el control de constitucionalidad sobre una ley que contradice la Carta Magna, su función es ___________ dicha norma."

explicacion: |
  El control de constitucionalidad busca asegurar la supremacía de la Constitución, permitiendo la anulación de normas inferiores que la vulneren.
```

### 20 — Secuencia de aplicación de derechos

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["derechos", "jerarquia"]

opciones_explicitas: ["Reconocimiento de derechos fundamentales", "Promulgación de la Constitución", "Aplicación de la norma por el juez", "Creación de leyes orgánicas"]

respuesta_orden: ["Promulgación de la Constitución", "Reconocimiento de derechos fundamentales", "Creación de leyes orgánicas", "Aplicación de la norma por el juez"]
tipo: ordenar

enunciado: "Ordene cronológicamente el proceso lógico de la vigencia de un derecho constitucional: desde la existencia del texto hasta su aplicación efectiva."

explicacion: |
  Primero se promulga la norma suprema, luego se reconocen los derechos en ella, se desarrollan mediante leyes y finalmente el juez los aplica en casos concretos.
```

### 21 — El control de constitucionalidad

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

### 22 — División de Poderes

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

### 23 — Jerarquía de Normas

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "intermedio"
  tags: ["jerarquia_normativa", "piramide_de_kelsen"]

variables:
  orden_jerarquico: [["Constitución Nacional y Tratados de DDHH", "Ley Nacional", "Decreto Reglamentario", "Resolución Ministerial"]]

respuesta_orden: orden_jerarquico[0]

tipo: ordenar
opciones_explicitas: ["Constitución Nacional y Tratados de DDHH", "Ley Nacional", "Decreto Reglamentario", "Resolución Ministerial"]

enunciado: "Ordene las siguientes normas de mayor a menor jerarquía según el bloque de constitucionalidad:"

explicacion: |
  La Constitución y los Tratados de Derechos Humanos con jerarquía constitucional ocupan la cúspide, seguidos por las leyes, decretos y finalmente las resoluciones.
```

### 24 — Derechos Fundamentales

```
metadata:
  materia: "derecho"
  tema: "derecho_constitucional"
  nivel: "basico"
  tags: ["derechos_fundamentales", "libertades"]

variables:
  datos: [["El Estado prohíbe toda manifestación pública sin permiso previo.", "es_falso"], ["Se garantiza la libertad de expresión, pero con responsabilidad.", "es_verdadero"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "es_falso"
  - "es_verdadero"

enunciado: "En un Estado de Derecho, la afirmación: '{datos[idx][0]}' ___."

explicacion: |
  Los derechos fundamentales son inherentes a la persona y el Estado debe garantizarlos, permitiendo solo restricciones legales y proporcionales.
```

### 25 — Órgano de Control

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
