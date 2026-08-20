# ESI — Cuidado del vínculo: grooming y violencia digital (cuestionario, 25 preguntas VBLang)

> Tema: `ES8`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: varias preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`); varias
> preguntas con `opciones_explicitas` (formato `mc`) etiquetadas
> `tipo: vf` — corregido; `tipo: vf` con `opciones_explicitas:
> ["Verdadero","Falso"]` innecesario — normalizado; una pregunta
> `tipo: vf` cuya `respuesta: verdadero` contradecía la propia
> `explicacion:` ("Falso...") sobre una afirmación en realidad falsa
> — corregida a `falso`; una pregunta con `variables:` sorteando entre
> dos filas donde sólo una tenía la respuesta correcta en la posición
> indexada (la mitad de las veces devolvía la opción **incorrecta**
> como "correcta") — corregida a respuesta fija; varios bloques sin
> campo `explicacion:` — agregado.

---

### 1 — Definición de grooming

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "basico"
  tags: ["prevencion", "seguridad_digital"]

respuesta: "grooming"
tipo: completar
respuestas_validas:
  - "grooming"

enunciado: "La acción mediante la cual un adulto establece un vínculo con un menor de edad a través de internet con el fin de obtener contenido sexual o encuentros físicos se denomina ___."

explicacion: |
  El grooming es un proceso de manipulación donde el adulto busca ganar la confianza del menor para fines de abuso.
```

### 2 — Naturaleza del proceso

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "intermedio"
  tags: ["dinamica", "prevencion"]

respuesta: "proceso gradual"
tipo: completar
respuestas_validas:
  - "proceso gradual"

enunciado: "Es falso que el grooming sea un hecho aislado y repentino; en realidad, se caracteriza por ser un ___."

explicacion: |
  El grooming no ocurre de un momento a otro; implica una etapa de conquista, creación de confianza y manipulación emocional que se desarrolla en el tiempo.
```

### 3 — El rol del adulto

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "basico"
  tags: ["identificacion", "prevencion"]

respuesta: "adulto"
tipo: completar
respuestas_validas:
  - "adulto"

enunciado: "En una situación de grooming, el perpetrador es siempre un ___ que utiliza la tecnología para contactar a un menor."

explicacion: |
  El grooming se define precisamente por la asimetría de edad y poder entre un adulto y un menor de edad.
```

### 4 — Identificación de conductas: el engaño

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "avanzado"
  tags: ["señales_alerta", "prevencion"]

respuesta: "engaño"
tipo: completar
respuestas_validas:
  - "engaño"
  - "engano"

enunciado: "Una de las tácticas principales del grooming es el ___ para lograr que la víctima sienta que el adulto es su único aliado o amigo."

explicacion: |
  El engaño es la herramienta fundamental para romper los límites de seguridad y la confianza de la víctima con su entorno cercano.
```

### 5 — El objetivo final

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "intermedio"
  tags: ["objetivo", "prevencion"]

respuesta: "abuso sexual"
tipo: completar
respuestas_validas:
  - "abuso sexual"

enunciado: "El objetivo final de un grooming es obtener material o contacto para cometer un ___."

explicacion: |
  El contacto digital es sólo el medio; el fin último de la manipulación es la explotación o el abuso sexual del menor.
```

### 6 — La primera fase del grooming

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "basico"
  tags: ["prevencion", "seguridad_digital"]

tipo: mc
opciones_explicitas: ["Aislamiento y secretos", "Contacto y generación de confianza", "Chantaje y amenazas", "Escalada de contenido sexual"]

respuesta: "Contacto y generación de confianza"

enunciado: "En la primera etapa del grooming, el agresor suele utilizar perfiles falsos o intereses comunes para establecer un vínculo con la víctima. ¿Cómo se denomina esta fase?"

explicacion: |
  La primera etapa consiste en el 'contacto y generación de confianza'. El agresor busca ganarse la atención de la persona mediante halagos o intereses compartidos para que se sienta cómoda hablando con un extraño.
```

### 7 — El uso del secreto

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "intermedio"
  tags: ["prevencion", "identificacion"]

tipo: vf
respuesta: verdadero

enunciado: "Una señal de alerta importante en el grooming es cuando el agresor pide a la víctima que mantenga su relación o sus conversaciones en secreto, bajo la premisa de que 'es un vínculo especial' que nadie más entendería."

explicacion: |
  El aislamiento mediante el secreto es una táctica fundamental para evitar que la víctima reciba ayuda de adultos o amigos, permitiendo que el agresor manipule la situación sin interferencias.
```

### 8 — La progresión del contenido

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "intermedio"
  tags: ["prevencion", "identificacion"]

tipo: mc
opciones_explicitas: ["Chantaje por fotos", "Escalada sexual gradual", "Regalos materiales", "Aislamiento social"]

respuesta: "Escalada sexual gradual"

enunciado: "Después de haber establecido confianza, el agresor comienza a pedir fotos, videos o conversaciones de contenido sexual, aumentando la intensidad de las peticiones poco a poco. ¿A qué etapa corresponde esto?"

explicacion: |
  Esta etapa se conoce como 'escalada sexual gradual'. El agresor busca normalizar el contenido sexual para que la víctima se sienta comprometida o con la sensación de que 'ya pasó demasiado lejos como para detenerse'.
```

### 9 — La fase de la amenaza

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "avanzado"
  tags: ["prevencion", "ayuda"]

tipo: vf
respuesta: verdadero

enunciado: "Cuando el agresor ya posee material íntimo de la víctima, puede pasar a la etapa de control mediante chantaje, amenazando con difundir las imágenes si no se cumplen sus demandas."

explicacion: |
  El chantaje o sextorsión es la fase de control donde el agresor utiliza el miedo y la vergüenza para mantener a la víctima sometida y bajo su dominio.
```

### 10 — El objetivo del aislamiento

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "basico"
  tags: ["prevencion", "seguridad_digital"]

tipo: mc
opciones_explicitas: ["Crear un vínculo de confianza", "Aislamiento pidiendo secretos", "Pedir ayuda a los padres", "Fomentar la amistad real"]

respuesta: "Aislamiento pidiendo secretos"

enunciado: "Dentro de las etapas del grooming, ¿cuál es la finalidad principal de pedirle a la víctima que no le cuente nada de lo que hablan a nadie?"

explicacion: |
  El objetivo es el aislamiento: al crear un secreto compartido, el agresor rompe la red de contención de la víctima (familia, amigos, docentes), dejándola vulnerable y sin apoyo para denunciar el abuso.
```

### 11 — El secreto como herramienta de control

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "basico"
  tags: ["prevencion", "secretos"]

tipo: mc

enunciado: "Si una persona con la que interactuás por redes sociales te dice que 'lo que pasa entre nosotros es nuestro secreto y no se lo podemos contar a tus padres o amigos', esto es una..."

opciones_explicitas: ["señal de cuidado", "señal de alerta", "una prueba de confianza"]

respuesta: "señal de alerta"

explicacion: |
  El pedido de mantener secretos es una técnica clásica de manipulación para aislar a la víctima de su red de contención (familia y amigos) y evitar que los adultos detecten la situación de riesgo.
```

### 12 — Desafíos visuales y fotos

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "intermedio"
  tags: ["privacidad", "fotos"]

tipo: mc

enunciado: "Cuando alguien que conocés por internet te pide que le envíes fotos de tu cuerpo, o te pide que vayas 'de menos a más' (fotos de tus pies, luego tus piernas, luego otras partes), estás ante una..."

opciones_explicitas: ["una dinámica de juego", "una señal de respeto", "una señal de alerta"]

respuesta: "una señal de alerta"

explicacion: |
  La progresión en el pedido de contenido sexual o íntimo es una táctica para normalizar la vulneración de la privacidad y ejercer presión psicológica.
```

### 13 — El uso de incentivos materiales

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "basico"
  tags: ["regalos", "dinero"]

tipo: mc

enunciado: "Si una persona que no conocés en persona te ofrece dinero, tarjetas de regalo o regalos caros a cambio de que mantengas contacto o hagas ciertas cosas, esto es una..."

opciones_explicitas: ["señal de alerta", "una muestra de generosidad", "una amistad sana"]

respuesta: "señal de alerta"

explicacion: |
  El uso de regalos o dinero busca crear una sensación de deuda o compromiso en la víctima, dificultando que pueda poner límites o decir que no.
```

### 14 — La presión y el derecho a decir que no

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "intermedio"
  tags: ["limites", "consentimiento"]

tipo: completar

enunciado: "Si alguien te presiona, te hace sentir culpable o te insiste mucho después de que ya dijiste que no querés hacer algo, está vulnerando tu derecho al ___."

respuestas_validas:
  - "consentimiento"

respuesta: "consentimiento"

explicacion: |
  El consentimiento debe ser libre, entusiasta y reversible. Si hay presión, insistencia o manipulación, el consentimiento no es válido y es una señal clara de abuso.
```

### 15 — El encuentro físico

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "avanzado"
  tags: ["encuentros", "seguridad"]

tipo: completar

enunciado: "Una señal de alerta crítica es cuando una persona con la que hablás por redes sociales te insiste constantemente para tener un ___ sin que vos lo hayas propuesto."

respuestas_validas:
  - "encuentro presencial"

respuesta: "encuentro presencial"

explicacion: |
  La insistencia para pasar del mundo virtual al contacto físico es un paso fundamental en el proceso de grooming para concretar el abuso. Nunca debes aceptar encuentros con desconocidos de internet sin supervisión de un adulto de confianza.
```

### 16 — La difusión de imágenes íntimas

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "basico"
  tags: ["sexting", "consentimiento", "derechos"]

tipo: mc
opciones_explicitas: ["Si la foto fue enviada con consentimiento, su difusión no es un delito.", "Si la foto fue enviada con consentimiento, difundirla sin permiso es un delito.", "La responsabilidad de la difusión es siempre de quien recibe la foto.", "No es delito si se hace en un grupo privado de amigos."]

respuesta: "Si la foto fue enviada con consentimiento, difundirla sin permiso es un delito."

enunciado: "Si una persona envía una foto íntima a otra en un ámbito de confianza, ¿qué ocurre si esa segunda persona la comparte en redes sociales sin el consentimiento de la primera?"

explicacion: |
  El consentimiento para el intercambio de material íntimo (sexting) es específico para ese acto. El hecho de que alguien te haya confiado una imagen no le da derecho a difundirla. La difusión no consentida es un delito y una forma de violencia digital.
```

### 17 — Responsabilidad en la violencia digital

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "basico"
  tags: ["responsabilidad", "victimización"]

tipo: vf
respuesta: falso

enunciado: "La persona que sufre el acoso o la difusión de sus imágenes íntimas es la principal responsable de lo que sucede en el entorno digital."

explicacion: |
  La responsabilidad de la violencia recae siempre en quien ejerce la acción (quien acosa, quien difunde o quien chantajea), nunca en la persona que sufre la vulneración de su privacidad.
```

### 18 — Sextorsión y chantaje

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "intermedio"
  tags: ["sextorsion", "chantaje", "seguridad"]

tipo: mc
opciones_explicitas: ["Es una práctica común de juego entre amigos.", "Es una forma de violencia donde se amenaza con difundir material íntimo para obtener dinero o más contenido.", "Sólo es sextorsión si el agresor es un desconocido.", "Si hay consentimiento previo para la foto, ya no puede haber sextorsión."]

respuesta: "Es una forma de violencia donde se amenaza con difundir material íntimo para obtener dinero o más contenido."

enunciado: "Cuando alguien amenaza a otra persona con publicar imágenes íntimas de ella a cambio de dinero, favores o más contenido sexual, estamos ante un caso de:"

explicacion: |
  La sextorsión es una forma de chantaje que utiliza el material íntimo como herramienta de coacción para manipular a la víctima.
```

### 19 — Ciberacoso (cyberbullying)

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "basico"
  tags: ["ciberacoso", "acoso_digital"]

tipo: mc
opciones_explicitas: ["El ciberacoso es sólo una broma pesada entre compañeros.", "El ciberacoso es el uso de medios digitales para hostigar, humillar o amenazar a una persona de forma repetida.", "El ciberacoso sólo ocurre si se usan redes sociales.", "El ciberacoso no es violencia si se hace de forma anónima."]

respuesta: "El ciberacoso es el uso de medios digitales para hostigar, humillar o amenazar a una persona de forma repetida."

enunciado: "¿Cuál es la definición correcta de ciberacoso?"

explicacion: |
  El ciberacoso se caracteriza por la intención de dañar, la repetición de las acciones y el uso de la tecnología para amplificar el hostigamiento.
```

### 20 — El consentimiento en la era digital

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "intermedio"
  tags: ["consentimiento", "privacidad"]

tipo: vf
respuesta: falso

enunciado: "El consentimiento para realizar una acción en el mundo físico (como un abrazo) es equivalente al consentimiento para compartir una imagen íntima en el mundo digital."

explicacion: |
  Falso. El consentimiento es específico. Dar permiso para algo en un contexto no implica dar permiso para todo lo demás ni para que esa información sea pública. Cada acto requiere un consentimiento nuevo y específico.
```

### 21 — Identificación de conductas de grooming

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "basico"
  tags: ["grooming", "prevencion"]

variables:
  idx: uno_de([0, 1, 2])
  escenarios: [["Un desconocido te pide fotos íntimas a cambio de dinero o regalos", "Grooming"], ["Un amigo te dice que no le gusta la ropa que usaste hoy", "No es grooming"], ["Alguien que conociste en un juego te pide encontrarse a solas sin avisar a tus padres", "Grooming"]]

enunciado: "Analizá la siguiente situación: {escenarios[idx][0]}. ¿Qué tipo de conducta es?"

opciones_explicitas: ["Grooming", "No es grooming"]

respuesta: escenarios[idx][1]
tipo: mc

explicacion: |
  El pedido de contenido íntimo a cambio de algo, y la insistencia en un encuentro presencial secreto, son señales típicas de grooming; una crítica sobre la ropa entre amigos no lo es.
```

### 22 — Acción ante el chantaje

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "basico"
  tags: ["prevencion", "seguridad"]

variables:
  idx: uno_de([0, 1])
  situaciones: ["Alguien te amenaza con difundir una foto tuya si no le das más información", "Te están extorsionando con contenido privado que enviaste"]

enunciado: "Si te encontrás en la siguiente situación: {situaciones[idx]}, ¿cuál es la acción más segura?"

opciones_explicitas: ["Borrar la cuenta y no decir nada", "Bloquear, guardar evidencia y contar a un adulto"]

respuesta: "Bloquear, guardar evidencia y contar a un adulto"
tipo: mc

explicacion: |
  Borrar la cuenta sin decir nada elimina evidencia y deja a la persona sola con el problema. Lo seguro es bloquear al agresor, guardar capturas de pantalla como evidencia, y contarle a un adulto de confianza.
```

### 23 — Preservación de evidencia

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "intermedio"
  tags: ["evidencia", "digital"]

enunciado: "Ante una situación de violencia digital, es fundamental realizar una acción para asegurar la ___ de los mensajes o imágenes recibidas."

respuestas_validas:
  - "captura de pantalla"
  - "evidencia"

respuesta: "captura de pantalla"
tipo: completar

explicacion: |
  Guardar capturas de pantalla de la conversación es clave para poder mostrarle la situación a un adulto de confianza o hacer una denuncia formal.
```

### 24 — Recursos de ayuda

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "basico"
  tags: ["ayuda", "lineas_de_atencion"]

enunciado: "En Argentina, la línea nacional para recibir asistencia ante situaciones de violencia de género es la línea ___."

respuestas_validas:
  - "144"

respuesta: "144"
tipo: completar

explicacion: |
  La línea 144 es gratuita, confidencial y está disponible las 24 horas para brindar contención y orientación.
```

### 25 — Redes de contención

```
metadata:
  materia: "esi"
  tema: "cuidado_vinculo_grooming"
  nivel: "basico"
  tags: ["adultos", "confianza"]

enunciado: "Si estás siendo víctima de acoso digital, lo más importante es buscar ayuda de un ___."

opciones_explicitas: ["desconocido", "adulto de confianza", "amigo de la escuela"]

respuesta: "adulto de confianza"
tipo: mc

explicacion: |
  Un adulto de confianza (padre, madre, docente) puede acompañar el proceso de denuncia y ayudar a cortar el contacto con el agresor de forma segura.
```
