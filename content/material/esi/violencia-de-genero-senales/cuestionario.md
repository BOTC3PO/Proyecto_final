# ESI — Violencia de género: identificar señales en un relato (cuestionario, 25 preguntas VBLang)

> Tema: `ES5`. Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido a mano. Bugs de esta tanda: varias preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`);
> `metadata.tema` inconsistente (`violencia_genero_senales` sin "de")
> — normalizado a `violencia_de_genero_senales`; en el lote de
> identificación de escenarios, la tabla `variables:` estaba
> **transpuesta** (`[[textoA, textoB], [respuestaA, respuestaB]]` en
> vez de `[[textoA, respuestaA], [textoB, respuestaB]]`), lo que hacía
> que la `respuesta:` fuera el texto del OTRO escenario, no la
> respuesta correcta — reescrita con la estructura correcta en las 5
> preguntas afectadas; dos bloques `mc`/`vf` sin campo `explicacion:`
> — agregado.

---

### 1 — La importancia de la integridad física

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "basico"
  tags: ["tipos_de_violencia", "fisica"]

tipo: completar
respuestas_validas:
  - "física"
  - "fisica"

enunciado: "La violencia que se manifiesta a través de golpes, empujones, tirones de pelo o cualquier contacto físico que cause daño o dolor se denomina violencia ___."

respuesta: "física"

explicacion: |
  La violencia física es una de las formas más visibles de agresión, pero es fundamental entender que no es la única forma de violencia que existe.
```

### 2 — El control como forma de maltrato

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "basico"
  tags: ["psicologica", "control"]

tipo: completar
respuestas_validas:
  - "psicológica"
  - "psicologica"

enunciado: "Cuando una persona insulta, humilla, controla las amistades o manipula emocionalmente a otra para disminuir su autoestima, está ejerciendo violencia ___."

respuesta: "psicológica"

explicacion: |
  La violencia psicológica es muy dañina porque ataca la salud mental y la autonomía de la persona, y muchas veces es invisible para el entorno.
```

### 3 — La autonomía económica

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "intermedio"
  tags: ["economica", "control_recursos"]

tipo: completar
respuestas_validas:
  - "económica"
  - "economica"

enunciado: "Limitar el acceso al dinero, ocultar ingresos o impedir que una persona trabaje para generar dependencia económica es un ejemplo de violencia ___."

respuesta: "económica"

explicacion: |
  La violencia económica busca que la persona no tenga medios propios para subsistir o tomar decisiones, dejándola en una situación de vulnerabilidad.
```

### 4 — Mensajes y estereotipos

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "intermedio"
  tags: ["simbolica", "estereotipos"]

tipo: completar
respuestas_validas:
  - "simbólica"
  - "simbolica"

enunciado: "Los mensajes en medios de comunicación o publicidad que reproducen roles de género estereotipados o que denigran a la mujer se conocen como violencia ___."

respuesta: "simbólica"

explicacion: |
  La violencia simbólica es aquella que se transmite a través de signos, imágenes o palabras que naturalizan la desigualdad o la subordinación.
```

### 5 — El derecho a decidir

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "avanzado"
  tags: ["sexual", "consentimiento"]

tipo: completar
respuestas_validas:
  - "sexual"

enunciado: "Cualquier acto que implique la realización de actividades sexuales sin consentimiento, o la presión para realizarlas, constituye violencia ___."

respuesta: "sexual"

explicacion: |
  La violencia sexual incluye desde el acoso hasta la violación, y se basa en la falta de consentimiento y el uso de la fuerza o el poder.
```

### 6 — El mito del control

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "basico"
  tags: ["celos", "control", "amor"]

tipo: mc
opciones_explicitas: ["Cuidado y protección", "Demostración de amor intenso", "Control y violencia psicológica"]

enunciado: "Si una persona le exige a su pareja las contraseñas de sus redes sociales para 'demostrar que no hay secretos', esto es una señal de:"

respuesta: "Control y violencia psicológica"

explicacion: |
  El control sobre la privacidad del otro no es una prueba de confianza, sino una forma de violencia psicológica que busca anular la autonomía de la persona.
```

### 7 — Celos y libertad

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "basico"
  tags: ["celos", "libertad", "limites"]

tipo: vf
respuesta: verdadero

enunciado: "Los celos extremos y la prohibición de ver a amigos o familiares son manifestaciones de violencia de género."

explicacion: |
  Los celos no son una medida de amor. Limitar la libertad de movimiento y las relaciones sociales de la pareja es una forma de aislamiento y control.
```

### 8 — La privacidad digital

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "intermedio"
  tags: ["celular", "privacidad", "redes_sociales"]

tipo: mc
opciones_explicitas: ["Respeto a la intimidad", "Seguridad en la relación", "Violencia psicológica"]

enunciado: "Revisar el celular de la pareja sin su consentimiento, bajo la excusa de 'querer estar tranquilos', se clasifica como:"

respuesta: "Violencia psicológica"

explicacion: |
  La privacidad es un derecho fundamental. El acceso no consentido a la información privada es una vulneración de los límites individuales.
```

### 9 — El lenguaje del control

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "basico"
  tags: ["comunicacion", "manipulacion", "senales"]

tipo: vf
respuesta: verdadero

enunciado: "Frases como 'Si me amaras, me dejarías el celular desbloqueado' son ejemplos de manipulación emocional."

explicacion: |
  Este tipo de frases utilizan la culpa para forzar a la persona a ceder sus derechos y privacidad, estableciendo una dinámica de poder desigual.
```

### 10 — ¿Amor o control?

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "intermedio"
  tags: ["relaciones_sanas", "limites", "autonomia"]

tipo: mc
opciones_explicitas: ["Relación sana", "Relación de control", "Relación de confianza"]

enunciado: "Una persona que decide qué ropa debe usar su pareja para 'evitar problemas' está ejerciendo una forma de:"

respuesta: "Relación de control"

explicacion: |
  El control sobre la apariencia y la autonomía corporal es una de las primeras señales de una relación violenta que busca la subordinación de la otra persona.
```

### 11 — Fases del ciclo de la violencia

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "basico"
  tags: ["ciclo_de_violencia", "prevencion"]

respuesta: "acumulación de tensión"
tipo: completar
respuestas_validas:
  - "acumulación de tensión"
  - "acumulacion de tension"

enunciado: "En el ciclo de la violencia, la fase donde aparecen los maltratos psicológicos, los controles excesivos y los silencios hostiles se denomina fase de ___."

explicacion: |
  La fase de acumulación de tensión es el período donde la violencia psicológica y el control se intensifican, preparando el terreno para una explosión de violencia física o verbal.
```

### 12 — La fase de la explosión

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "basico"
  tags: ["ciclo_de_violencia"]

respuesta: "episodio de violencia"
tipo: completar
respuestas_validas:
  - "episodio de violencia"

enunciado: "Cuando la tensión acumulada estalla en agresiones físicas, verbales o sexuales, nos encontramos en el ___."

explicacion: |
  El episodio de violencia es el momento de la explosión donde se manifiesta la agresión de forma directa y evidente.
```

### 13 — La falsa calma

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "basico"
  tags: ["ciclo_de_violencia"]

respuesta: "luna de miel"
tipo: completar
respuestas_validas:
  - "luna de miel"

enunciado: "Después de la agresión, suele aparecer una fase de arrepentimiento, regalos y promesas de cambio que se conoce como ___."

explicacion: |
  La fase de 'luna de miel' es la más peligrosa para la víctima, ya que las promesas de cambio y el afecto intensificado generan una falsa sensación de seguridad que dificulta la salida del ciclo.
```

### 14 — Factores que dificultan la salida

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "intermedio"
  tags: ["factores_riesgo"]

respuesta: "dependencia económica"
tipo: completar
respuestas_validas:
  - "dependencia económica"
  - "dependencia economica"

enunciado: "Uno de los principales obstáculos que impiden que una persona abandone una relación violenta es la ___."

explicacion: |
  La falta de recursos propios y la dependencia económica respecto al agresor es una de las barreras estructurales más comunes para salir de un círculo de violencia.
```

### 15 — El impacto psicológico

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "intermedio"
  tags: ["impacto_psicologico"]

respuesta: "baja autoestima"
tipo: completar
respuestas_validas:
  - "baja autoestima"

enunciado: "El maltrato psicológico constante suele provocar en la víctima una ___ que la hace sentir incapaz de valerse por sí misma."

explicacion: |
  La violencia psicológica erosiona la autopercepción de la víctima, debilitando su confianza y su capacidad de tomar decisiones, lo cual es una estrategia de control del agresor.
```

### 16 — El aislamiento social

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "basico"
  tags: ["aislamiento", "relaciones_sanas"]

tipo: mc
opciones_explicitas: ["Que la pareja te pida que dejes de ver a tus amigos para estar más tiempo juntos", "Que tu pareja te acompañe a las reuniones con tus amigos", "Que tu pareja te pregunte cómo te fue en el día", "Que tu pareja respete tus espacios individuales"]

respuesta: "Que la pareja te pida que dejes de ver a tus amigos para estar más tiempo juntos"

enunciado: "¿Cuál de las siguientes es una señal de aislamiento propia de una relación violenta?"

explicacion: |
  El aislamiento progresivo de amigos y familia es una señal de alerta clásica: reduce la red de apoyo de la persona y la vuelve más dependiente del vínculo de control.
```

### 17 — La justificación del control

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "intermedio"
  tags: ["control", "justificacion"]

tipo: completar
respuestas_validas:
  - "señal de alerta"
  - "senal de alerta"

enunciado: "Decir 'me revisa el celular porque me importa mucho y tiene miedo de perderme' es, en realidad, una ___."

respuesta: "señal de alerta"

explicacion: |
  Justificar conductas de control bajo la excusa del "amor" o el "cuidado" es una de las primeras señales de violencia psicológica.
```

### 18 — Cambios en la autoestima

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "intermedio"
  tags: ["autoestima", "identidad"]

tipo: mc
opciones_explicitas: ["Sentirse segura de las propias capacidades", "Sentir que uno no vale nada sin la pareja", "Sentir alegría al compartir actividades", "Sentir que se puede expresar la opinión sin miedo"]

respuesta: "Sentir que uno no vale nada sin la pareja"

enunciado: "Un cambio en la autoestima que indica una relación violenta es:"

explicacion: |
  La violencia psicológica sostenida erosiona la autoestima hasta el punto de que la persona siente que depende enteramente del vínculo para tener valor.
```

### 19 — El miedo como termómetro

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "avanzado"
  tags: ["miedo", "reaccion"]

tipo: vf
respuesta: verdadero

enunciado: "Si una persona empieza a medir sus palabras o a cambiar su forma de vestir para evitar que su pareja se enoje, esto es una señal de alerta."

explicacion: |
  El miedo a la reacción del otro es un indicador crítico de que la dinámica de la relación ha pasado de la convivencia al control y la violencia.
```

### 20 — La disculpa injustificada

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "intermedio"
  tags: ["culpa", "disculpas"]

tipo: mc
opciones_explicitas: ["Pedir perdón por algo que uno mismo causó", "Pedir disculpas por cosas que uno no hizo para evitar un conflicto", "Pedir perdón cuando se cometió un error real", "No pedir disculpas nunca"]

respuesta: "Pedir disculpas por cosas que uno no hizo para evitar un conflicto"

enunciado: "En una relación con violencia, es común que la víctima termine..."

explicacion: |
  Disculparse preventivamente por cosas que no se hicieron es una estrategia de supervivencia frente al miedo a la reacción de la otra persona.
```

### 21 — Identificación de control digital

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "basico"
  tags: ["control", "privacidad"]

variables:
  idx: uno_de([0, 1])
  datos: [["Le exige la contraseña de sus redes sociales para 'demostrar que no oculta nada'", "psicológica"], ["Le revisa los mensajes de WhatsApp cada vez que ella sale con sus amigas", "psicológica"]]

enunciado: "Analizá el siguiente caso: '{datos[idx][0]}'. ¿Qué tipo de violencia se está ejerciendo?"

opciones_explicitas: ["psicológica", "física", "económica", "sexual"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  El control de la privacidad mediante la exigencia de contraseñas o la revisión de dispositivos es una forma de violencia psicológica, ya que busca el control de la autonomía y la desvalorización de la intimidad de la persona.
```

### 22 — Restricción de autonomía laboral

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "basico"
  tags: ["economica", "autonomia"]

variables:
  idx: uno_de([0, 1])
  datos: [["Le prohíbe tener un empleo para que dependa totalmente de él", "económica"], ["Le quita el sueldo que ella gana para 'administrarlo mejor'", "económica"]]

enunciado: "Se presenta la siguiente situación: '{datos[idx][0]}'. ¿A qué tipo de violencia corresponde?"

opciones_explicitas: ["psicológica", "económica", "física", "simbólica"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  La violencia económica se manifiesta cuando se controla, retiene o se impide la capacidad de la persona para generar ingresos propios o administrar sus recursos, afectando su autonomía.
```

### 23 — El control como forma de violencia (frases)

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "intermedio"
  tags: ["psicologica", "control"]

variables:
  idx: uno_de([0, 1])
  datos: [["'Si me amaras, dejarías de ver a tus amigas para estar conmigo'", "psicológica"], ["Le dice constantemente que 'no sirve para nada' y que 'sin él no es nadie'", "psicológica"]]

enunciado: "Leé el fragmento: {datos[idx][0]}. El tipo de violencia identificado es ___."

respuestas_validas:
  - "psicológica"
  - "psicologica"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  Las frases que buscan generar culpa, inseguridad o dependencia emocional son herramientas de la violencia psicológica, destinadas a socavar la autoestima de la víctima.
```

### 24 — Violencia en el ámbito de la intimidad

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "intermedio"
  tags: ["sexual", "consentimiento"]

variables:
  idx: uno_de([0, 1])
  datos: [["La obliga a tener relaciones sexuales aunque ella ya le haya dicho que no quiere", "sexual"], ["Le presiona para que use ropa que a él le gusta, ignorando sus preferencias, como condición para tener intimidad", "sexual"]]

enunciado: "Analizá el relato: '{datos[idx][0]}'. ¿Qué tipo de violencia se está ejerciendo?"

opciones_explicitas: ["psicológica", "sexual", "física", "económica"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  La violencia sexual incluye cualquier acto de naturaleza sexual no consentido o condicionado por presión, incluso dentro de una pareja.
```

### 25 — El impacto del lenguaje

```
metadata:
  materia: "esi"
  tema: "violencia_de_genero_senales"
  nivel: "avanzado"
  tags: ["simbolica", "cultura"]

variables:
  idx: uno_de([0, 1])
  datos: [["El uso de chistes que denigran a las mujeres como parte de la 'normalidad'", "simbólica"], ["La idea de que 'el hombre manda en la casa' presentada como algo natural", "simbólica"]]

enunciado: "{datos[idx][0]}. El uso de este tipo de mensajes o estereotipos que refuerzan la desigualdad se denomina violencia ___."

respuestas_validas:
  - "simbólica"
  - "simbolica"
respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La violencia simbólica es aquella que se transmite a través de mensajes, íconos o signos que imponen un modelo de subordinación y desigualdad de género, naturalizando la opresión.
```
