# Derecho — Apelacion e instancias (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Apelación

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["proceso_civil", "recursos"]

respuesta: "recurso de apelación"
tipo: completar
respuestas_validas:
  - "recurso de apelación"
  - "apelación"

enunciado: "El medio de impugnación que permite a una parte solicitar que un tribunal superior revise la resolución dictada por un juez de primera instancia se denomina ___."

explicacion: |
  El recurso de apelación es la herramienta procesal mediante la cual la parte que se siente agraviada por una sentencia solicita su revisión ante un órgano jerárquicamente superior.
```

### 2 — Instancias Judiciales

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["jerarquia", "tribunales"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Juez de Primera Instancia", "Tribunal de Alzada"], ["Juez de Primera Instancia", "Corte Suprema"]]

opciones_explicitas: ["Juez de Primera Instancia", "Tribunal de Alzada", "Corte Suprema"]

respuesta: escenarios[escenario_idx][1]
tipo: mc

enunciado: "En un proceso judicial estándar, cuando se interpone un recurso contra la sentencia de un {escenarios[escenario_idx][0]}, el órgano que debe conocer la cuestión es el {escenarios[escenario_idx][1]}."

explicacion: |
  La estructura judicial se organiza en instancias; la revisión de una decisión de primera instancia corresponde al tribunal de alzada o segunda instancia.
```

### 3 — Efectos del Recurso

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["efectos", "suspensivo"]

respuesta: verdadero
tipo: vf

enunciado: "¿El efecto suspensivo en un recurso de apelación implica que la ejecución de la sentencia queda detenida hasta que el tribunal superior resuelva?"

explicacion: |
  Correcto. El efecto suspensivo impide que la sentencia se cumpla mientras el recurso de apelación está pendiente de resolución.
```

### 4 — El Agravio

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["requisitos", "agravio"]

respuesta: "agravio"
tipo: completar
respuestas_validas:
  - "agravio"
  - "perjuicio"

enunciado: "Para que un recurso de apelación sea admisible, la parte recurrente debe demostrar la existencia de un ___, es decir, un perjuicio real derivado de la decisión judicial."

explicacion: |
  Sin la existencia de un agravio (un daño o perjuicio jurídico o material causado por la resolución), el recurso carece de objeto y debe ser rechazado.
```

### 5 — Secuencia del Proceso de Apelación

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["procedimiento", "pasos"]

opciones_explicitas: ["Interposición del recurso", "Expresión de agravios", "Elevación a la segunda instancia", "Sentencia de Alzada"]

respuesta_orden: ["Interposición del recurso", "Expresión de agravios", "Elevación a la segunda instancia", "Sentencia de Alzada"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas típicas de un proceso de apelación:"

explicacion: |
  Primero se interpone el recurso, luego se fundamentan los agravios, el expediente se eleva al tribunal superior y finalmente este dicta la sentencia de segunda instancia (Alzada).
```

### 6 — El recurso de apelación

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["recurso", "sentencia", "segunda_instancia"]

variables:
  idx: uno_de([0, 1])
  datos: [["El demandante perdió el juicio", "El demandante"], ["El juez dictó una sentencia injusta", "El demandante"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["El demandante", "El demandado", "El juez", "El fiscal"]

enunciado: "En un proceso civil, si {datos[idx][0]}, la parte afectada puede interponer un recurso de apelación para que un tribunal superior revise la resolución. ¿Quién es el sujeto que tiene legitimación para apelar en este caso?"

explicacion: |
  El recurso de apelación es un medio de impugnación que permite a la parte que se siente agraviada por una resolución judicial solicitar que un tribunal de jerarquía superior la revise, modifique o anule.
```

### 7 — Requisitos de la apelación

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["requisitos", "agravio", "proceso"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es obligatorio que el apelante manifieste expresamente los agravios (los errores que considera que cometió el juez) para que el recurso de apelación sea admitido?"

explicacion: |
  Para que la apelación sea válida, no basta con la disconformidad; es indispensable la fundamentación del agravio, es decir, explicar por qué la sentencia es errónea en su aplicación de la ley o en la valoración de los hechos.
```

### 8 — El proceso de revisión

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["secuencia", "proceso_judicial"]

opciones_explicitas: ["Dictado de la sentencia de primera instancia", "Interposición del recurso de apelación", "Expresión de agravios", "Resolución de la Cámara/Tribal Superior"]

respuesta_orden: ["Dictado de la sentencia de primera instancia", "Interposición del recurso de apelación", "Expresión de agravios", "Resolución de la Cámara/Tribal Superior"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas de un proceso judicial que incluye la revisión por una segunda instancia:"

explicacion: |
  El proceso comienza con la resolución del juez de grado, seguido por la voluntad de la parte de apelar, la fundamentación técnica de sus quejas y, finalmente, el fallo del tribunal superior.
```

### 9 — Efectos de la apelación

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "avanzado"
  tags: ["efectos", "suspension", "ejecucion"]

respuesta: "suspensivo"
tipo: mc
opciones_explicitas: ["suspensivo", "devolutivo"]

enunciado: "Si un recurso de apelación se admite con un efecto tal que la ejecución de la sentencia queda paralizada hasta que el superior resuelva, ¿cómo se denomina técnicamente a ese efecto?"

explicacion: |
  El efecto suspensivo detiene la ejecución de la resolución recurrida, mientras que el efecto devolutivo permite que la sentencia se cumpla a pesar de la apelación.
```

### 10 — La resolución de segunda instancia

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["sentencia", "terminacion"]

respuesta: "confirmar"
tipo: completar
respuestas_validas:
  - "confirmar"
  - "revocar"
  - "anular"

enunciado: "Si el tribunal de alzada (segunda instancia) coincide con el criterio del juez de primera instancia y considera que la sentencia es correcta, su decisión será ___ la sentencia original."

explicacion: |
  Cuando el tribunal superior ratifica la decisión del inferior, se dice que la sentencia ha sido 'confirmada'. Si la cambia, la 'revoca'; si la deja sin efecto por errores de forma, la 'anula'.
```

### 11 — El efecto de la apelación

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["proceso_civil", "recursos"]

enunciado: "En un proceso civil, si se interpone un recurso de apelación con efecto suspensivo, la ejecución de la sentencia ___."

respuesta: "se suspende"
tipo: completar
respuestas_validas:
  - "se suspende"
  - "queda suspendida"

explicacion: |
  El efecto suspensivo detiene la ejecución de la sentencia hasta que el tribunal superior resuelva el recurso.
```

### 12 — El principio de congruencia

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "avanzado"
  tags: ["principios_procesales", "limitacion_tribunal"]

respuesta: "El tribunal no puede resolver sobre temas no apelados"
tipo: mc
opciones_explicitas: ["El tribunal puede resolver sobre temas no apelados", "El tribunal no puede resolver sobre temas no apelados"]

enunciado: "De acuerdo al principio de congruencia, en segunda instancia, ___."

explicacion: |
  El tribunal de alzada está limitado por la materia de la apelación (principio de congrucia), no pudiendo extender su conocimiento a cuestiones que no hayan sido objeto de impugnación.
```

### 13 — La doble instancia

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["garantias", "derechos_fundamentales"]

enunciado: "El derecho a la doble instancia es considerado una garantía fundamental en los sistemas procesales modernos. ¿Es esto correcto?"

respuesta: verdadero
tipo: vf
explicacion: |
  La doble instancia permite que un órgano superior revise la aplicación de la ley o la valoración de la prueba realizada por el juez de primera instancia.
```

### 14 — Etapas del recurso

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["procedimiento", "etapas"]

variables:
  pasos_ordenados: ["Interposición del recurso", "Expresión de agravios", "Resolución de la Alzada"]

enunciado: "Ordene cronológicamente las etapas típicas de un recurso de apelación:"

pasos:
  - "Interposición del recurso"
  - "Expresión de agravios"
  - "Resolución de la Alzada"

respuesta_orden: ["Interposición del recurso", "Expresión de agravios", "Resolución de la Alzada"]
tipo: ordenar
opciones_explicitas: ["Interposición del recurso", "Expresión de agravios", "Resolución de la Alzada"]

explicacion: |
  Primero se presenta el recurso, luego se fundamentan los errores (agravios) y finalmente el tribunal superior decide.
```

### 15 — Error en la fundamentación

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["agravios", "errores_comunes"]

variables:
  errores: ["reiterar los argumentos de la demanda sin criticar la sentencia", "presentar argumentos nuevos que no fueron debatidos en primera instancia"]
  idx: uno_de([0, 1])

enunciado: "Un error común que puede llevar a la improcedencia de un recurso de apelación es ___."

respuesta: errores[idx]
tipo: completar
respuestas_validas:
  - "reiterar los argumentos de la demanda sin criticar la sentencia"
  - "presentar argumentos nuevos que no fueron debatidos en primera instancia"

explicacion: |
  La apelación requiere la crítica concreta y concreta de los fundamentos de la sentencia. Simplemente repetir lo dicho en la demanda no constituye un agravio jurídico.
```

### 16 — El recurso de apelación

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["recursos", "instancias", "proceso_civil"]

respuesta: "revisión"
tipo: completar
respuestas_validas:
  - "revisión"
  - "revisar"
  - "revisar la sentencia"

enunciado: "A diferencia de la reposición, que busca que el mismo juez corrija su decisión, la apelación tiene como finalidad la ___ de la sentencia por un tribunal de jerarquía superior."

explicacion: |
  La apelación busca que un tribunal superior (segunda instancia) revise la resolución del juez de primera instancia para corregir posibles errores de hecho o de derecho.
```

### 17 — Diferencia entre Instancia y Recurso

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["instancia", "recurso", "jerarquia"]

variables:
  escenario: uno_de([["apelación", "recurso", "instancia"], ["reposición", "recurso", "instancia"], ["casación", "recurso", "instancia"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["recurso", "instancia", "sentencia"]

enunciado: "En el sistema judicial, la apelación es un ___ que permite pasar de la primera a la segunda instancia."

explicacion: |
  La apelación es el medio o recurso procesal que habilita el ejercicio de la segunda instancia, permitiendo que un órgano superior revise lo decidido.
```

### 18 — Efectos de la apelación

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "avanzado"
  tags: ["efectos", "suspensivo", "devolutivo"]

respuesta: falso
tipo: vf

enunciado: "Si un recurso de apelación se concede con efecto suspensivo, la ejecución de la sentencia queda paralizada hasta que el tribunal superior resuelva."

explicacion: |
  Es verdadero. El efecto suspensivo impide que la sentencia se cumpla mientras el recurso está pendiente, a diferencia del efecto devolutivo, que permite la ejecución pero deja la posibilidad de reparación posterior.
```

### 19 — Orden jerárquico de revisión

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["jerarquia", "tribunales"]

respuesta_orden: ["Sentencia de Primera Instancia", "Sentencia de Segunda Instancia", "Sentencia de Casación"]
tipo: ordenar
opciones_explicitas: ["Sentencia de Primera Instancia", "Sentencia de Segunda Instancia", "Sentencia de Casación"]

enunciado: "Ordene los niveles de revisión jerárquica de una controversia jurídica, desde el tribunal que dicta la resolución inicial hasta el tribunal de máxima instancia."

explicacion: |
  El proceso sigue un orden ascendente: primero el juez de grado (1ra instancia), luego el tribunal de alzada (2da instancia) y finalmente la Corte Suprema o Tribunal de Casación.
```

### 20 — El rol de la segunda instancia

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["revisión", "hechos", "derecho"]

respuesta: "derecho"
tipo: completar
respuestas_validas:
  - "derecho"
  - "norma"

enunciado: "Mientras que la apelación en sede ordinaria permite revisar tanto los hechos como el ___ aplicado, la casación suele limitarse estrictamente a la correcta aplicación de la ley."

explicacion: |
  La apelación es un recurso amplio que permite la revisión de la valoración de la prueba (hechos) y de la aplicación de la norma (derecho), mientras que la casación es un recurso extraordinario de estricto derecho.
```

### 21 — El recurso de apelación

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["recurso", "instancia", "proceso"]

variables:
  datos: [["La sentencia de primera instancia fue desfavorables para el demandante", "apelacion"], ["El juez cometió un error de procedimiento en el juicio", "apelacion"], ["La contraparte presentó pruebas nuevas que no fueron valoradas", "apelacion"]]
  idx: uno_de([0, 1, 2])

enunciado: "En el caso planteado, donde {datos[idx][0]}, la parte afectada decide interponer un recurso de {datos[idx][1]} para que un tribunal superior revise la resolución."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "apelacion"

explicacion: |
  El recurso de apelación es el medio de impugnación que permite que un tribunal de jerarquía superior (segunda instancia) revise la resolución dictada por un juez de primera instancia, con el fin de que la modifique, revoque o anule.
```

### 22 — Efectos de la apelación

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["efectos", "suspensivo", "devolutivo"]

variables:
  datos: [["suspensivo", "La ejecución de la sentencia se detiene hasta que el superior resuelva."], ["devolutivo", "La sentencia se puede ejecutar aunque se haya apelado."]]
  idx: uno_de([0, 1])

enunciado: "Si el recurso de apelación se admite con efecto {datos[idx][0]}, significa que {datos[idx][1]}"

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["suspensivo", "devolutivo"]

explicacion: |
  El efecto suspensivo impide la ejecución de la sentencia mientras el tribunal superior decide. El efecto devolutivo permite que la sentencia se cumpla a pesar de la impugnación.
```

### 23 — Estructura de las instancias

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["instancias", "jerarquia"]

variables:
  orden_instancias: [["Juzgado de Primera Instancia", "Tribunal de Alzada (Segunda Instancia)", "Corte Suprema"]]

enunciado: "Ordene correctamente el flujo jerárquico de la revisión judicial desde el inicio del conflicto hasta la máxima autoridad."

respuesta_orden: ["Juzgado de Primera Instancia", "Tribunal de Alzada (Segunda Instancia)", "Corte Suprema"]
tipo: ordenar
opciones_explicitas: ["Juzgado de Primera Instancia", "Tribunal de Alzada (Segunda Instancia)", "Corte Suprema"]

explicacion: |
  El sistema judicial se organiza en instancias: la primera instancia es donde se inicia el juicio y se dicta la primera sentencia; la segunda instancia (o alzada) es la revisión por un tribunal superior.
```

### 24 — ¿Es posible la revisión?

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "basico"
  tags: ["impugnacion", "derecho_defensa"]

enunciado: "Si una sentencia ha sido dictada con violación al debido proceso, ¿es jurídicamente posible impugnarla mediante un recurso de apelación?"

respuestas_validas:
  - "se puede apelar"
respuesta: "se puede apelar"
tipo: completar
explicacion: |
  La apelación es un derecho fundamental derivado del principio de la doble instancia, que permite corregir errores de hecho o de derecho cometidos por el juez de primera instancia.
```

### 25 — El Tribunal de Alzada

```
metadata:
  materia: "derecho"
  tema: "apelacion_e_instancias"
  nivel: "intermedio"
  tags: ["tribunal", "alzada", "revisión"]

variables:
  datos: [["Tribunal de Alzada", "Tribunal de Segunda Instancia"], ["Tribunal de Alzada", "Corte de Apelaciones"]]
  idx: uno_de([0, 1])

enunciado: "El órgano encargado de revisar la sentencia dictada por el juez de primera instancia es conocido comúnmente como {datos[idx][0]}."

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Tribunal de Alzada", "Corte de Apelaciones", "Juzgado de Letras"]

explicacion: |
  El tribunal de alzada es el órgano colegiado que tiene la competencia para revisar lo actuado en la primera instancia, garantizando el derecho a la revisión judicial.
```
