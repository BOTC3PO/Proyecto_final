# Examen jefe — Maestro del Lenguaje Artístico

> Logro #215. Completaste el examen jefe dominando desde el pentagrama hasta el montaje audiovisual. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **124 preguntas totales** en 5/5 secciones.

---

## Sección: lenguaje-musical-pentagrama-escalas-intervalos (25 preguntas)

```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["pentagrama", "lineas", "espacios"]

respuesta: 5
tipo: completar
tolerancia_abs: 0

enunciado: "El pentagrama está compuesto por ___ líneas horizontales y ___ espacios."

explicacion: |
  El pentagrama es el conjunto de 5 líneas y 4 espacios donde se escribe la música.
```

```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["notas", "orden"]

opciones_explicitas: ["Do, Re, Mi, Fa, Sol, La, Si", "Do, Mi, Sol, Si, Re", "Fa, Sol, La, Si, Do, Re, Mi"]
respuesta: "Do, Re, Mi, Fa, Sol, La, Si"
tipo: mc

enunciado: "¿Cuál es el orden ascendente natural de las notas musicales?"

explicacion: |
  El orden estándar de la escala diatónica es Do, Re, Mi, Fa, Sol, La, Si.
```

```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["claves", "sol"]

respuesta: "Sol"
tipo: completar
respuestas_validas: ["Sol"]

enunciado: "La clave que se utiliza para indicar que la nota situada en la segunda línea del pentagrama es la nota ___."

explicacion: |
  La clave de Sol se dibuja partiendo desde la segunda línea, asignándole ese nombre.
```

```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["lineas_adicionales"]

respuesta: verdadero
tipo: vf

enunciado: "¿Se utilizan líneas adicionales para representar notas que están por encima o por debajo del pentagrama?"

explicacion: |
  Correcto. Cuando las notas se salen del rango de las 5 líneas, se usan líneas adicionales.
```

```
metadata:
  materia: "arte"
  tema: "lenguaje_musical_pentagrama"
  nivel: "basico"
  tags: ["silencios"]

opciones_explicitas: ["Negra", "Corchea", "Fusa"]
respuesta: "Negra"
tipo: mc

enunciado: "En un pentagrama, el símbolo que representa un silencio de un tiempo (en compás de 4/4) es la ___."

explicacion: |
  El símbolo de la negra representa un tiempo de duración en la música occidental.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "intermedio"
  tags: ["escala_mayor", "tonos", "semitonos"]

respuesta: [1, 1, 0.5, 1, 1, 1, 0.5]
tipo: completar
respuestas_validas: [[1, 1, 0.5, 1, 1, 1, 0.5]]

enunciado: "La estructura de intervalos de una escala mayor es: Tono, Tono, ____, Tono, Tono, Tono, ____."

explicacion: |
  La escala mayor sigue el patrón: T-T-S-T-T-T-S (donde T=Tono y S=Semitono).
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "intermedio"
  tags: ["escala_mayor"]

variables:
  idx: uno_de([0, 1])
  datos: [["Do mayor", "Do"], ["Sol mayor", "Fa#"]]

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Do", "Fa#"]

enunciado: "Si una escala tiene un sostenido en la séptima nota, la escala es de ___."

explicacion: |
  La escala de Sol mayor tiene un Fa# para cumplir el patrón de la escala mayor.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "intermedio"
  tags: ["escala_menor"]

opciones_explicitas: ["Menor", "Mayor", "Aumentada"]
respuesta: "Menor"
tipo: mc

enunciado: "Si comparamos una escala mayor con una escala que tiene la tercera nota disminuida (un semitono más abajo), estamos ante una escala ___."

explicacion: |
  La diferencia fundamental entre escala mayor y menor es la tercera nota.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["armadura", "sostenidos"]

opciones_explicitas: ["Fa, Do, Sol, Re, La, Mi, Si"]
respuesta: "Fa, Do, Sol, Re, La, Mi, Si"
tipo: mc

enunciado: "¿Cuál es el orden estándar de aparición de las alteraciones sostenidos en una armadura?"

explicacion: |
  El orden de los sostenidos es siempre Fa, Do, Sol, Re, La, Mi, Si.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["ciclo_quintas"]

respuesta: 1
tipo: completar
tolerancia_abs: 0

enunciado: "Si subimos una quinta justa desde Do, llegamos a Sol. Si subimos otra quinta desde Sol, ¿cuántos sostenidos tiene la nueva escala (Re mayor)?"

explicacion: |
  La escala de Re mayor tiene un sostenido (Fa#).
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "basico"
  tags: ["unisono"]

respuesta: "Igual"
tipo: completar
respuestas_validas: ["Igual"]

enunciado: "Un intervalo de unísono ocurre cuando dos notas son ___."

explicacion: |
  El unísono es la distancia entre dos notas con la misma frecuencia.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "basico"
  tags: ["octava"]

opciones_explicitas: ["Do - Do", "Do - Re", "Do - Mi"]
respuesta: "Do - Do"
tipo: mc

enunciado: "¿Cuál de estos pares representa una octava?"

explicacion: |
  La octava es el intervalo entre dos notas con el mismo nombre pero diferente altura.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["semitonos", "segunda"]

respuesta: 2
tipo: completar
tolerancia_abs: 0

enunciado: "Una segunda mayor (por ejemplo de Do a Re) contiene ___ semitonos."

explicacion: |
  La segunda mayor está compuesta por dos semitonos.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["quinta_justa"]

respuesta: "5"
tipo: completar
tolerancia_abs: 0

enunciado: "Un intervalo de quinta justa abarca ___ grados de la escala."

explicacion: |
  Se cuenta la nota inicial como el primer grado (Do=1, Re=2, Mi=3, Fa=4, Sol=5).
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["tercera"]

opciones_explicitas: ["Mayor", "Menor"]
respuesta: "Mayor"
tipo: mc

enunciado: "Un intervalo de Do a Mi es una tercera ___, mientras que de Do a Mi bemol es una tercera ___."

explicacion: |
  La tercera mayor tiene 4 semitonos y la menor tiene 3.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "basico"
  tags: ["error_comun"]

respuesta: "falso"
tipo: completar
enunciado: "¿Es cierto que entre cualquier par de notas consecutivas en un piano siempre hay un semitono?"

explicacion: |
  Falso. Entre Mi y Fa, o entre Si y Do, hay un semitono, pero entre Do y Re hay un tono.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "avanzado"
  tags: ["tritono"]

opciones_explicitas: ["Aumentado", "Disminuido"]
respuesta: "Aumentado"
tipo: mc

enunciado: "Un intervalo de cuarta justa que se aumenta en un semitono se convierte en un tritono o cuarta ___."

explicacion: |
  El tritono es un intervalo inestable que puede ser cuarta aumentada o quinta disminuida.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "basico"
  tags: ["tono"]

respuesta: 2
tipo: completar
tolerancia_abs: 0

enunciado: "Un tono musical equivale a ___ semitonos."

explicacion: |
  La unidad básica de la escala cromática es el semitono; dos de ellos forman un tono.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["sexta"]

respuesta: 9
tipo: completar
tolerancia_abs: 0

enunciado: "Una sexta mayor contiene exactamente ___ semitonos."

explicacion: |
  La sexta mayor (ej. Do a La) tiene 9 semitonos.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "intermedio"
  tags: ["octava"]

opciones_explicitas: ["7", "8", "9"]
respuesta: "8"
tipo: mc

enunciado: "Si contamos los grados de una octava (incluyendo la nota inicial y la final), ¿cuántos grados hay?"

explicacion: |
  Aunque la distancia es de 7 tonos, el intervalo se llama octava porque abarca 8 notas de la escala.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["transposicion"]

variables:
  idx: uno_de([0, 1])
  datos: [["Do mayor", "Do"], ["Sol mayor", "Sol"]]

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["Do", "Sol"]

enunciado: "Si transponemos una escala de Do mayor una quinta justa hacia arriba, la nueva tónica será ___."

explicacion: |
  Una quinta justa desde Do es Sol.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["armadura"]

respuesta: 2
tipo: completar
tolerancia_abs: 0

enunciado: "Si una partitura tiene dos sostenidos en la armadura (Fa# y Do#), ¿en qué escala mayor nos encontramos?"

explicacion: |
  La escala de Re mayor tiene dos sostenidos: Fa# y Do#.
```

```
metadata:
  materia: "arte"
  tema: "intervalos"
  nivel: "avanzado"
  tags: ["progresion"]

opciones_explicitas: ["Tono", "Semitono"]
respuesta: "Tono"
tipo: mc

enunciado: "Si una nota sube un semitono y luego vuelve a subir otro semitono, ¿qué intervalo ha recorrido en total?"

explicacion: |
  Dos semitonos equivalen a un tono.
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "avanzado"
  tags: ["escala_menor_armonica"]

respuesta: "La"
tipo: completar
respuestas_validas: ["La"]

enunciado: "En la escala de Do mayor, la nota que está a una sexta mayor es ___."

explicacion: |
  Do(1), Re(2), Mi(3), Fa(4), Sol(5), La(6).
```

```
metadata:
  materia: "arte"
  tema: "escalas_musicales"
  nivel: "intermedio"
  tags: ["escala_mayor"]

opciones_explicitas: ["Falso", "Verdadero"]
respuesta: "Falso"
tipo: completar
enunciado: "En una escala mayor, el intervalo entre el IV y el V grado es siempre un semitono."

explicacion: |
  Falso, el intervalo entre el IV y el V grado es un tono.
```

## Sección: narrativa-audiovisual/encuadre (24 preguntas)

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "basico"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es el encuadre, a diferencia del plano?"
tipo: mc
opciones_explicitas:
  - "Cómo se organiza lo que entra dentro de los límites del plano ya elegido"
  - "Qué tan cerca o lejos está la cámara del sujeto"
  - "El guion técnico completo de la escena"
respuesta: "Cómo se organiza lo que entra dentro de los límites del plano ya elegido"

explicacion: |
  El plano (ver `../plano/`) define la distancia; el encuadre define la
  organización dentro de esa distancia.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "basico"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es el ángulo de cámara 'a nivel' o 'normal'?"
tipo: mc
opciones_explicitas:
  - "La cámara a la altura de los ojos del sujeto"
  - "La cámara mirando desde muy arriba"
  - "La cámara inclinada, con el horizonte torcido"
respuesta: "La cámara a la altura de los ojos del sujeto"

explicacion: |
  Es el punto de vista más neutral, el que menos condiciona la lectura
  emocional.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es un ángulo picado?"
tipo: mc
opciones_explicitas:
  - "La cámara mira hacia abajo, desde arriba del sujeto"
  - "La cámara mira hacia arriba, desde abajo del sujeto"
  - "La cámara está inclinada de costado"
respuesta: "La cámara mira hacia abajo, desde arriba del sujeto"

explicacion: |
  Suele hacer que el sujeto se vea más pequeño o vulnerable.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué efecto suele transmitir un ángulo picado sobre el sujeto?"
tipo: mc
opciones_explicitas:
  - "Que se vea más pequeño, débil o vulnerable"
  - "Que se vea más grande y poderoso"
  - "No tiene ningún efecto sobre cómo se percibe el sujeto"
respuesta: "Que se vea más pequeño, débil o vulnerable"

explicacion: |
  Es el efecto opuesto al contrapicado.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es un ángulo contrapicado?"
tipo: mc
opciones_explicitas:
  - "La cámara mira hacia arriba, desde abajo del sujeto"
  - "La cámara mira hacia abajo, desde arriba del sujeto"
  - "La cámara filma en cámara lenta"
respuesta: "La cámara mira hacia arriba, desde abajo del sujeto"

explicacion: |
  Suele hacer que el sujeto se vea más grande, poderoso o imponente.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué efecto suele transmitir un ángulo contrapicado sobre el sujeto?"
tipo: mc
opciones_explicitas:
  - "Que se vea más grande, poderoso o imponente"
  - "Que se vea más pequeño y vulnerable"
  - "No cambia en nada la percepción del sujeto"
respuesta: "Que se vea más grande, poderoso o imponente"

explicacion: |
  Es un recurso típico para presentar a un personaje dominante o
  amenazante.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "avanzado"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es un ángulo aberrante (u 'holandés')?"
tipo: mc
opciones_explicitas:
  - "La cámara está inclinada, con el horizonte torcido"
  - "La cámara filmando desde un dron"
  - "La cámara a la altura exacta de los ojos"
respuesta: "La cámara está inclinada, con el horizonte torcido"

explicacion: |
  Genera una sensación de inestabilidad, desorientación o tensión.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre"]

respuesta: verdadero
tipo: vf

enunciado: "El ángulo aberrante (con el horizonte torcido) suele usarse para generar una sensación de inestabilidad o desorientación."

explicacion: |
  Rompe la referencia horizontal "normal" que el ojo espera ver.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es el 'espacio de mirada' (look room) en un encuadre?"
tipo: mc
opciones_explicitas:
  - "El espacio extra que se deja del lado hacia donde mira o se mueve el sujeto"
  - "El tiempo que dura un plano en pantalla"
  - "La distancia entre la cámara y el micrófono"
respuesta: "El espacio extra que se deja del lado hacia donde mira o se mueve el sujeto"

explicacion: |
  Sin ese espacio, la composición se siente apretada o incómoda.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre"]

respuesta: verdadero
tipo: vf

enunciado: "Si un sujeto mira hacia un lado y no se le deja espacio de ese lado en el cuadro, la composición suele sentirse apretada o incómoda."

explicacion: |
  Es como si el sujeto estuviera "chocando" contra el borde del
  encuadre.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es el headroom, en un encuadre?"
tipo: mc
opciones_explicitas:
  - "El espacio entre la parte superior de la cabeza del sujeto y el borde superior del cuadro"
  - "La altura total del sujeto en la escena"
  - "El espacio entre dos sujetos distintos en el mismo plano"
respuesta: "El espacio entre la parte superior de la cabeza del sujeto y el borde superior del cuadro"

explicacion: |
  Ni mucho (se ve "flotando" abajo) ni poco (se ve apretado o cortado).
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "avanzado"
  tags: ["encuadre"]

respuesta: verdadero
tipo: vf

enunciado: "Demasiado espacio entre la cabeza del sujeto y el borde superior del cuadro (headroom excesivo) hace que el sujeto se vea como flotando en la parte baja del encuadre."

explicacion: |
  Es uno de los dos extremos a evitar; el otro es muy poco headroom, que
  corta o aprieta la cabeza.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre"]

respuesta: verdadero
tipo: vf

enunciado: "La regla de tercios, ya vista en composición, también se aplica al encuadre cinematográfico: por ejemplo, ubicando los ojos del sujeto sobre una línea de tercios en vez de en el centro exacto."

explicacion: |
  Es la misma herramienta de `../../composicion-y-proporcion/`, aplicada
  a un fotograma en movimiento.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es un encuadre cerrado?"
tipo: mc
opciones_explicitas:
  - "Aquel que contiene dentro del cuadro todo lo que el espectador necesita para entender la escena"
  - "Aquel filmado con la cámara muy cerca del sujeto"
  - "Aquel que sólo se usa en primeros planos"
respuesta: "Aquel que contiene dentro del cuadro todo lo que el espectador necesita para entender la escena"

explicacion: |
  No deja nada relevante fuera de cuadro.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué es un encuadre abierto?"
tipo: mc
opciones_explicitas:
  - "Aquel que deja intuir que hay más espacio o acción fuera de cuadro (fuera de campo)"
  - "Aquel filmado siempre en plano general"
  - "Aquel sin ningún tipo de composición planificada"
respuesta: "Aquel que deja intuir que hay más espacio o acción fuera de cuadro (fuera de campo)"

explicacion: |
  Genera expectativa, o hace que el espectador complete mentalmente lo
  que no se ve.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "avanzado"
  tags: ["encuadre"]

respuesta: verdadero
tipo: vf

enunciado: "Sugerir que hay algo fuera de cuadro (fuera de campo), sin mostrarlo, es un recurso que puede generar expectativa en el espectador."

explicacion: |
  El espectador completa mentalmente lo que no se ve directamente.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "avanzado"
  tags: ["encuadre", "ordenar"]

enunciado: "Ordená estas decisiones típicas al encuadrar un plano ya elegido (el tamaño de plano ya está decidido de antemano)."
tipo: ordenar
opciones_explicitas:
  - "Ubicar el punto de interés sobre una línea de la regla de tercios"
  - "Elegir el ángulo de cámara (a nivel, picado, contrapicado)"
  - "Dejar el espacio de mirada y el headroom adecuados"
respuesta_orden:
  - "Elegir el ángulo de cámara (a nivel, picado, contrapicado)"
  - "Dejar el espacio de mirada y el headroom adecuados"
  - "Ubicar el punto de interés sobre una línea de la regla de tercios"

explicacion: |
  El ángulo es una decisión estructural; el espacio de mirada, el
  headroom y la regla de tercios son ajustes finos de esa composición.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre"]

respuesta: verdadero
tipo: vf

enunciado: "El ángulo de cámara 'a nivel' es el que menos condiciona la lectura emocional de una escena, en comparación con el picado o el contrapicado."

explicacion: |
  Por eso se usa como punto de vista "neutral" por defecto.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "avanzado"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué ángulo de cámara conviene usar para mostrar a un personaje como especialmente poderoso o amenazante?"
tipo: mc
opciones_explicitas:
  - "Contrapicado"
  - "Picado"
  - "A nivel"
respuesta: "Contrapicado"

explicacion: |
  Mirar hacia arriba, desde abajo del personaje, lo hace ver más grande
  e imponente.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "avanzado"
  tags: ["encuadre", "vocabulario"]

enunciado: "¿Qué ángulo de cámara conviene usar para mostrar a un personaje como especialmente pequeño o vulnerable?"
tipo: mc
opciones_explicitas:
  - "Picado"
  - "Contrapicado"
  - "Aberrante"
respuesta: "Picado"

explicacion: |
  Mirar hacia abajo, desde arriba del personaje, lo empequeñece.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "basico"
  tags: ["encuadre"]

respuesta: verdadero
tipo: vf

enunciado: "El encuadre es lo que convierte una simple elección de distancia (el plano) en una composición con intención narrativa."

explicacion: |
  El ángulo, el espacio de mirada y el headroom no son detalles
  técnicos menores: cambian cómo se interpreta la escena.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "avanzado"
  tags: ["encuadre"]

respuesta: verdadero
tipo: vf

enunciado: "El headroom 'correcto' no es un número fijo: depende del tamaño de plano que se esté usando (un primer plano y un plano entero no necesitan el mismo headroom)."

explicacion: |
  No es una regla matemática rígida, sino un balance visual a ojo.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "intermedio"
  tags: ["encuadre"]

respuesta: falso
tipo: vf

enunciado: "Un ángulo aberrante (u 'holandés') mantiene el horizonte perfectamente recto, sin ninguna inclinación."

explicacion: |
  Al contrario: la característica que define al ángulo aberrante es
  justamente la inclinación de la cámara, que tuerce el horizonte.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_encuadre"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve dominar las herramientas de encuadre (ángulo, espacio de mirada, headroom, regla de tercios)?"
tipo: mc
opciones_explicitas:
  - "Para tomar decisiones deliberadas sobre cómo el espectador va a interpretar cada escena, no dejarlo al azar"
  - "Sólo sirve para que la imagen se vea más prolija técnicamente"
  - "Sólo aplica en cine, nunca en fotografía o video"
respuesta: "Para tomar decisiones deliberadas sobre cómo el espectador va a interpretar cada escena, no dejarlo al azar"

explicacion: |
  El encuadre es lenguaje visual: comunica algo, aunque no haya
  diálogo.
```

## Sección: narrativa-audiovisual/montaje (26 preguntas)

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "basico"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué es el montaje (edición) en narrativa audiovisual?"
tipo: mc
opciones_explicitas:
  - "El proceso de seleccionar, ordenar y unir los planos ya filmados para construir la narración completa"
  - "El proceso de escribir el guion antes de filmar"
  - "La elección del tamaño de plano al momento de filmar"
respuesta: "El proceso de seleccionar, ordenar y unir los planos ya filmados para construir la narración completa"

explicacion: |
  Es la última gran decisión creativa, después de filmar todos los
  planos individuales.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "Dos películas filmadas con exactamente los mismos planos pueden contar historias completamente distintas, según cómo se los monte."

explicacion: |
  Es la idea central de por qué el montaje importa tanto como la
  filmación.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "basico"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué es un corte directo (o corte seco)?"
tipo: mc
opciones_explicitas:
  - "Un plano pasa al siguiente de forma instantánea, sin transición visible"
  - "Un plano se superpone gradualmente con el siguiente"
  - "La imagen se oscurece hasta el negro antes del siguiente plano"
respuesta: "Un plano pasa al siguiente de forma instantánea, sin transición visible"

explicacion: |
  Es el tipo de corte más común — bien hecho, casi no se nota.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "basico"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué es un fundido a negro?"
tipo: mc
opciones_explicitas:
  - "La imagen se oscurece gradualmente hasta el negro, antes de que aparezca el siguiente plano"
  - "Dos planos se combinan al mismo tiempo en pantalla dividida"
  - "El plano se congela sin cortar al siguiente"
respuesta: "La imagen se oscurece gradualmente hasta el negro, antes de que aparezca el siguiente plano"

explicacion: |
  Suele marcar el paso del tiempo, o el cierre de una escena o
  capítulo.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué es un encadenado (o disolvencia)?"
tipo: mc
opciones_explicitas:
  - "Un plano se superpone gradualmente con el siguiente, mezclándose por un momento"
  - "Un corte instantáneo, sin ninguna transición"
  - "Un plano que se repite exactamente igual dos veces seguidas"
respuesta: "Un plano se superpone gradualmente con el siguiente, mezclándose por un momento"

explicacion: |
  Sugiere una conexión entre ambas imágenes, o un paso de tiempo más
  suave que el corte directo.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué es un corte por movimiento (match cut)?"
tipo: mc
opciones_explicitas:
  - "Un corte que conecta dos planos que comparten una forma, movimiento o acción similar"
  - "Un corte que siempre implica cámara lenta"
  - "Un corte que sólo se usa al final de una película"
respuesta: "Un corte que conecta dos planos que comparten una forma, movimiento o acción similar"

explicacion: |
  Genera una transición fluida, y a veces un significado simbólico
  adicional.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "Un corte por movimiento (match cut) puede usarse para sugerir un significado simbólico, no sólo una transición fluida."

explicacion: |
  Como el ejemplo clásico de un hueso lanzado al aire cortando
  directamente a una nave espacial.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué es la continuidad, en el montaje audiovisual?"
tipo: mc
opciones_explicitas:
  - "Mantener la coherencia espacial y temporal entre planos consecutivos, para no confundir al espectador"
  - "Filmar todos los planos de una escena sin cortar la cámara"
  - "Usar siempre el mismo tipo de corte en toda la película"
respuesta: "Mantener la coherencia espacial y temporal entre planos consecutivos, para no confundir al espectador"

explicacion: |
  Sin continuidad, el espectador puede perder la orientación de dónde
  están los personajes o qué acaba de pasar.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje", "vocabulario"]

enunciado: "¿En qué consiste la regla de los 180° en continuidad de montaje?"
tipo: mc
opciones_explicitas:
  - "Se traza una línea imaginaria entre los sujetos de la escena, y la cámara no la cruza de un plano al siguiente"
  - "Cada plano debe durar exactamente 180 segundos"
  - "La cámara debe rotar 180° entre cada corte"
respuesta: "Se traza una línea imaginaria entre los sujetos de la escena, y la cámara no la cruza de un plano al siguiente"

explicacion: |
  Si la cruzara, los personajes parecerían "cambiar de lado" en
  pantalla, sin haberse movido realmente.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "Si la cámara cruza la línea imaginaria de la regla de los 180° entre un plano y el siguiente, los personajes pueden parecer haber cambiado de posición relativa, aunque no se hayan movido."

explicacion: |
  Es justamente el problema de continuidad que esa regla busca evitar.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué define el ritmo de una secuencia montada?"
tipo: mc
opciones_explicitas:
  - "La duración de cada plano y la frecuencia con la que ocurren los cortes"
  - "La cantidad de personajes que aparecen en la escena"
  - "El presupuesto total de la producción"
respuesta: "La duración de cada plano y la frecuencia con la que ocurren los cortes"

explicacion: |
  Planos cortos y cortes frecuentes dan un ritmo distinto que planos
  largos y pocos cortes.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué sensación suele transmitir un montaje rápido (planos cortos, cortes frecuentes)?"
tipo: mc
opciones_explicitas:
  - "Tensión, acción, urgencia"
  - "Calma y contemplación"
  - "Ninguna sensación distinta a un montaje lento"
respuesta: "Tensión, acción, urgencia"

explicacion: |
  Típico de una persecución o una pelea.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué sensación suele transmitir un montaje lento (planos largos, pocos cortes)?"
tipo: mc
opciones_explicitas:
  - "Contemplación, calma, peso dramático"
  - "Urgencia y adrenalina"
  - "Confusión total en el espectador"
respuesta: "Contemplación, calma, peso dramático"

explicacion: |
  Típico de un momento íntimo o reflexivo de la historia.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué demostró el experimento conocido como el 'efecto Kuleshov'?"
tipo: mc
opciones_explicitas:
  - "Que el significado que se le da a un plano depende del plano que lo precede o sigue, no sólo de su contenido aislado"
  - "Que el sonido no influye en cómo se percibe una escena"
  - "Que el montaje no cambia en nada la interpretación de una historia"
respuesta: "Que el significado que se le da a un plano depende del plano que lo precede o sigue, no sólo de su contenido aislado"

explicacion: |
  El mismo plano de una cara neutra se interpretó como hambre, tristeza
  o ternura, según qué plano se mostraba justo antes.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "En el experimento del efecto Kuleshov, se usó el mismo plano exacto de la cara de un actor, combinado con distintos planos previos, para ver cómo cambiaba la interpretación del espectador."

explicacion: |
  El plano del actor era idéntico en los tres casos; lo que cambiaba
  era el plano que lo precedía.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "El efecto Kuleshov muestra que el montaje no sólo organiza lo ya filmado: puede crear significado nuevo que no estaba en ningún plano individual."

explicacion: |
  Es la conclusión teórica central de ese experimento.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje", "ordenar"]

enunciado: "Ordená estos tipos de transición del más abrupto (instantáneo) al más gradual."
tipo: ordenar
opciones_explicitas:
  - "Fundido a negro"
  - "Corte directo"
  - "Encadenado (disolvencia)"
respuesta_orden:
  - "Corte directo"
  - "Encadenado (disolvencia)"
  - "Fundido a negro"

explicacion: |
  El corte directo es instantáneo; el encadenado mezcla dos imágenes
  por un momento; el fundido a negro pasa primero por el negro completo,
  la transición más marcada de las tres.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "El montaje no es sólo trabajo sobre la imagen: también incluye el sonido (diálogo, música, efectos) que acompaña cada corte."

explicacion: |
  El sonido puede reforzar o contradecir deliberadamente lo que se ve
  en pantalla.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "Es un recurso narrativo válido usar música o sonido que contradiga deliberadamente lo que se ve en pantalla (por ejemplo, música alegre sobre una escena triste)."

explicacion: |
  Genera un efecto de ironía o contraste emocional, en vez de reforzar
  lo obvio.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "basico"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "El corte directo (o corte seco) es el tipo de transición más común en el cine y el video."

explicacion: |
  Bien hecho, es casi invisible para el espectador.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje", "vocabulario"]

enunciado: "¿Qué tipo de transición se usa típicamente para marcar el cierre de una escena o el paso de un tiempo largo (por ejemplo, varios años)?"
tipo: mc
opciones_explicitas:
  - "El fundido a negro"
  - "El corte directo"
  - "El corte por movimiento"
respuesta: "El fundido a negro"

explicacion: |
  Su pausa visual marca un cierre más fuerte que un corte directo.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "basico"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "Una escena de persecución o pelea suele montarse con planos cortos y cortes frecuentes (montaje rápido), para transmitir tensión."

explicacion: |
  El ritmo del montaje acompaña la sensación de urgencia de la acción.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "intermedio"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "El montaje trabaja sobre los planos ya encuadrados y filmados: no puede cambiar la composición interna de un plano, sólo cómo se organiza y combina con los demás."

explicacion: |
  Por eso este módulo depende de `../encuadre/`.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "avanzado"
  tags: ["montaje"]

respuesta: falso
tipo: vf

enunciado: "El montaje siempre debe respetar la continuidad estricta (regla de los 180° incluida), sin ninguna excepción posible."

explicacion: |
  Es la norma general, pero algunos estilos narrativos rompen la
  continuidad deliberadamente para generar confusión, desorientación o
  un efecto artístico específico.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "basico"
  tags: ["montaje"]

respuesta: verdadero
tipo: vf

enunciado: "El montaje es, típicamente, la última gran etapa creativa antes de que la obra audiovisual esté terminada."

explicacion: |
  Viene después de filmar todos los planos con su encuadre ya decidido.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_montaje"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve entender el montaje?"
tipo: mc
opciones_explicitas:
  - "Para saber que una historia audiovisual no es la suma de sus planos, sino cómo se combinan, en qué orden, con qué transición y con qué ritmo"
  - "Sólo sirve para acortar el tiempo total de una película"
  - "No tiene ninguna influencia real en cómo se percibe una historia"
respuesta: "Para saber que una historia audiovisual no es la suma de sus planos, sino cómo se combinan, en qué orden, con qué transición y con qué ritmo"

explicacion: |
  Es la conclusión que conecta plano, encuadre y montaje en una sola
  cadena narrativa.
```

## Sección: narrativa-audiovisual/plano (24 preguntas)

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué es un plano, en narrativa audiovisual?"
tipo: mc
opciones_explicitas:
  - "La porción continua de imagen filmada entre un corte de edición y el siguiente"
  - "El guion completo de una película"
  - "El lugar físico donde se filma una escena"
respuesta: "La porción continua de imagen filmada entre un corte de edición y el siguiente"

explicacion: |
  Es la unidad básica con la que se construye cualquier escena.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué muestra un plano general (PG)?"
tipo: mc
opciones_explicitas:
  - "El escenario completo, con el sujeto pequeño dentro del espacio"
  - "Sólo la cara del sujeto"
  - "Un objeto muy específico, sin el sujeto"
respuesta: "El escenario completo, con el sujeto pequeño dentro del espacio"

explicacion: |
  Es el plano más abierto: ubica al espectador en el lugar de la
  escena.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué muestra un plano entero?"
tipo: mc
opciones_explicitas:
  - "Al sujeto de cuerpo completo, de la cabeza a los pies"
  - "Sólo el rostro del sujeto"
  - "El escenario, sin ningún sujeto visible"
respuesta: "Al sujeto de cuerpo completo, de la cabeza a los pies"

explicacion: |
  Muestra todo el cuerpo, pero ya centrado en el sujeto, no tanto en el
  escenario.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano", "vocabulario"]

enunciado: "¿A qué altura corta al sujeto el plano americano, y de dónde viene su nombre?"
tipo: mc
opciones_explicitas:
  - "A la altura del muslo; el nombre viene del western clásico, que así dejaba ver el arma en el cinturón"
  - "A la altura de la cabeza; el nombre viene del cine independiente estadounidense"
  - "A la altura del tobillo; el nombre no tiene relación con el cine"
respuesta: "A la altura del muslo; el nombre viene del western clásico, que así dejaba ver el arma en el cinturón"

explicacion: |
  Es un ejemplo de cómo la historia del cine dejó nombres específicos
  para ciertos encuadres.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿A qué altura corta al sujeto el plano medio?"
tipo: mc
opciones_explicitas:
  - "A la altura de la cintura"
  - "A la altura de la rodilla"
  - "Justo en el cuello"
respuesta: "A la altura de la cintura"

explicacion: |
  Es uno de los planos más usados en diálogos.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué muestra un primer plano?"
tipo: mc
opciones_explicitas:
  - "La cara del sujeto, con foco en la expresión"
  - "El escenario completo"
  - "El cuerpo entero del sujeto"
respuesta: "La cara del sujeto, con foco en la expresión"

explicacion: |
  Es de los planos más cerrados, usado para mostrar emoción.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué muestra un primerísimo primer plano?"
tipo: mc
opciones_explicitas:
  - "Un detalle muy cercano de la cara, como los ojos o la boca"
  - "Todo el cuerpo del sujeto, sin recortar nada"
  - "Un objeto sin relación con el sujeto"
respuesta: "Un detalle muy cercano de la cara, como los ojos o la boca"

explicacion: |
  Es el plano más cerrado de la escala, usado para máxima intimidad o
  tensión emocional.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué muestra un plano detalle?"
tipo: mc
opciones_explicitas:
  - "Un objeto o una parte muy específica, sin necesariamente mostrar al sujeto completo"
  - "El escenario completo desde muy lejos"
  - "Sólo se usa para mostrar paisajes"
respuesta: "Un objeto o una parte muy específica, sin necesariamente mostrar al sujeto completo"

explicacion: |
  Por ejemplo, una mano, un reloj o un arma.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Los planos abiertos (general, entero) dan contexto: ubican al espectador en dónde y en qué situación transcurre la escena."

explicacion: |
  Es su función narrativa principal.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Los planos cerrados (primer plano, primerísimo primer plano) suelen usarse para transmitir la emoción o intimidad del personaje."

explicacion: |
  Al acercarse al rostro, la expresión se vuelve el foco central.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano", "vocabulario"]

enunciado: "¿Cuál es la función narrativa típica de un plano general al abrir una escena?"
tipo: mc
opciones_explicitas:
  - "Ubicar al espectador: mostrar dónde pasa la acción antes de acercarse a los personajes"
  - "Mostrar la reacción emocional de un personaje"
  - "Ocultar información sobre el lugar de la escena"
respuesta: "Ubicar al espectador: mostrar dónde pasa la acción antes de acercarse a los personajes"

explicacion: |
  Por eso muchas escenas arrancan con un plano general.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano", "vocabulario"]

enunciado: "¿Cuál es la función narrativa típica de un primer plano en un momento clave de la trama?"
tipo: mc
opciones_explicitas:
  - "Mostrar con claridad la expresión y la emoción del personaje en ese momento"
  - "Mostrar el escenario completo donde transcurre la escena"
  - "Distraer al espectador del personaje principal"
respuesta: "Mostrar con claridad la expresión y la emoción del personaje en ese momento"

explicacion: |
  Es el plano cerrado por excelencia para momentos emocionalmente
  intensos.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "avanzado"
  tags: ["plano", "ordenar"]

enunciado: "Ordená estos planos de MÁS abierto a MÁS cerrado."
tipo: ordenar
opciones_explicitas:
  - "Plano medio"
  - "Primer plano"
  - "Plano general"
  - "Plano entero"
respuesta_orden:
  - "Plano general"
  - "Plano entero"
  - "Plano medio"
  - "Primer plano"

explicacion: |
  Son cuatro paradas de la escala completa (que además incluye, entre
  medio, el plano americano, y como cierre más cerrado el primerísimo
  primer plano y el plano detalle).
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "avanzado"
  tags: ["plano", "vocabulario"]

enunciado: "¿Qué es un plano secuencia?"
tipo: mc
opciones_explicitas:
  - "Un plano único, sin ningún corte de edición, que se extiende durante una escena entera o más"
  - "Una secuencia de varios planos muy cortos, editados rápido"
  - "El primer plano que se filma de una película, en orden cronológico"
respuesta: "Un plano único, sin ningún corte de edición, que se extiende durante una escena entera o más"

explicacion: |
  Exige una coreografía muy precisa de cámara y actores, porque no hay
  forma de "arreglar" un error con edición después.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Un plano secuencia, por definición, no tiene ningún corte de edición en su interior."

explicacion: |
  Si tuviera un corte, dejaría de ser un solo plano.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Filmar un plano no es sólo encender la cámara: ya implica decisiones de composición, como equilibrio y regla de tercios."

explicacion: |
  Por eso este módulo depende de `../../principios-de-diseno/`.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "El plano medio es de los más usados en escenas de diálogo, porque muestra expresión facial y algo de lenguaje corporal a la vez."

explicacion: |
  Es un punto intermedio entre mostrar demasiado contexto y perder el
  lenguaje corporal.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿A qué altura del cuerpo corta el plano medio?"
tipo: mc
opciones_explicitas:
  - "A la altura de la cintura"
  - "A la altura del tobillo"
  - "Justo debajo de los ojos"
respuesta: "A la altura de la cintura"

explicacion: |
  Es distinto del plano americano (a la altura del muslo).
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["plano", "vocabulario"]

enunciado: "¿A qué altura del cuerpo corta el plano americano?"
tipo: mc
opciones_explicitas:
  - "A la altura del muslo"
  - "A la altura del pecho"
  - "A la altura de los pies"
respuesta: "A la altura del muslo"

explicacion: |
  Distinto del plano medio (a la altura de la cintura).
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Un plano detalle puede mostrar sólo un objeto (como un reloj o un arma), sin necesidad de que el sujeto completo esté en cuadro."

explicacion: |
  Es el plano más específico de todos, enfocado en un elemento puntual.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "avanzado"
  tags: ["plano", "vocabulario"]

enunciado: "¿Cómo se relaciona un plano con el montaje (edición)?"
tipo: mc
opciones_explicitas:
  - "Un plano es la unidad que queda delimitada entre dos cortes de edición sucesivos"
  - "El montaje ocurre antes de filmar cualquier plano"
  - "No tienen ninguna relación entre sí"
respuesta: "Un plano es la unidad que queda delimitada entre dos cortes de edición sucesivos"

explicacion: |
  Es la conexión directa con `../montaje/`, el módulo siguiente.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: falso
tipo: vf

enunciado: "Elegir el tamaño de un plano (general, medio, primer plano...) es una elección estética completamente al azar, sin relación con lo que se quiere narrar."

explicacion: |
  Al contrario: cada tamaño cumple una función narrativa distinta
  (contexto vs. emoción).
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "intermedio"
  tags: ["plano"]

respuesta: verdadero
tipo: vf

enunciado: "Una escena bien filmada suele alternar entre planos abiertos y cerrados, según lo que necesite contar en cada momento."

explicacion: |
  Por ejemplo: plano general para ubicar, después primeros planos para
  la emoción del diálogo.
```

```
metadata:
  materia: "arte"
  tema: "narrativa_audiovisual_plano"
  nivel: "basico"
  tags: ["cierre"]

enunciado: "¿Para qué sirve elegir bien el tamaño de un plano al filmar una escena?"
tipo: mc
opciones_explicitas:
  - "Es la primera decisión narrativa: define cuánto contexto o cuánta emoción se muestra en ese momento de la historia"
  - "Sólo afecta el tiempo que tarda en filmarse la escena"
  - "No tiene ningún efecto real sobre cómo se percibe la escena"
respuesta: "Es la primera decisión narrativa: define cuánto contexto o cuánta emoción se muestra en ese momento de la historia"

explicacion: |
  Antes de pensar en el encuadre concreto o en el montaje, hay que
  decidir qué tan cerca o lejos va a estar la cámara.
```

## Sección: origen-del-arte (25 preguntas)

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["prehistoria", "paleolitico", "simbolismo"]

respuesta: "Paleolítico"
tipo: completar
respuestas_validas: ["Paleolítico"]

enunciado: "El arte rupestre se asocia con la aparición del pensamiento simbólico durante el periodo ___."

explicacion: |
  El paso del pensamiento concreto al simbólico permitió al Homo sapiens representar su realidad en las paredes de las cuevas durante el Paleolítico.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["arte_rupestre", "pintura_cavernica"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["animales", "manos"], ["figuras humanas", "herramientas"]]
  respuestas: [["animales", "manos"], ["figuras humanas", "herramientas"]]

enunciado: "En las pinturas rupestres más comunes del Paleolítico, es frecuente encontrar representaciones de {escenarios[escenario_idx][0]} y {escenarios[escenario_idx][1]}."

respuesta: "animales"
tipo: mc
opciones_explicitas: ["animales", "paisajes urbanos", "deidades griegas", "geometría abstracta"]

explicacion: |
  Aunque existen otros elementos, la fauna (bisontes, caballos, ciervos) y las manos (en negativo o positivo) son los motivos predominantes.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["cronologia", "prehistoria"]

variables:
  orden_correcta: ["Paleolítico", "Mesolítico", "Neolítico"]

respuesta: ["Paleolítico", "Mesolítico", "Neolítico"]
tipo: ordenar
opciones_explicitas: ["Paleolítico", "Mesolítico", "Neolítico"]

enunciado: "Ordena cronológicamente los periodos de la prehistoria, desde el surgimiento del arte rupestre más temprano hasta el desarrollo de la agricultura:"

explicacion: |
  El arte rupestre surge en el Paleolítico, se mantiene en el Mesolítico y adquiere nuevas formas en el Neolítico con el sedentarismo.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["simbolismo", "antropologia"]

respuesta: "verdadero"
tipo: completar
enunciado: "La capacidad de crear arte rupestre implica que el ser humano ya posee la capacidad de abstracción y pensamiento simbólico."

explicacion: |
  El arte no es solo una copia de la realidad, sino una representación que requiere que el individuo pueda pensar en algo que no está presente físicamente.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["tecnologia_prehistorica", "pigmentos"]

variables:
  pigmento_idx: uno_de([0, 1])
  pigmentos: [["óxido de hierro", "azul de ultramar"], ["carbón vegetal", "tinta china"]]
  respuestas: [["óxido de hierro", "azul de ultramar"], ["carbón vegetal", "tinta china"]]

enunciado: "Para realizar sus pinturas, los artistas del Paleolítico utilizaban pigmentos naturales como el {pigmentos[pigmento_idx][0]}."

respuesta: "óxido de hierro"
tipo: mc
opciones_explicitas: ["óxido de hierro", "azul de ultramar", "tinta china", "acrílico"]

explicacion: |
  El uso de minerales como el ocre (óxido de hierro) y el carbón permitió la fijación de colores rojos, negros y amarillos en las paredes de las cuevas.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["prehistoria", "ritual"]

tipo: mc
opciones_explicitas: ["Decoración estética", "Magia de caza", "Registro de eventos históricos", "Expresión de identidad"]

enunciado: "Se cree que muchas pinturas rupestres de animales no tenían un fin decorativo, sino que formaban parte de un ritual para asegurar el éxito en la obtención de alimento. ¿Qué función describe mejor esta creencia?"

respuesta: "Magia de caza"

explicacion: |
  La teoría de la 'magia simpática' sugiere que pintar al animal era un acto ritual para controlarlo y facilitar la caza real.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["registro", "comunicación"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario_datos: [["pinturas de escenas de danza", "registrar eventos sociales"], ["grabados de manos", "marcar la presencia de individuos"]]

tipo: completar
respuestas_validas: ["registrar eventos sociales", "marcar la presencia de individuos"]

enunciado: "Si un grupo de homínidos utilizaba el arte para dejar constancia de lo ocurrido en su comunidad, el arte estaría cumpliendo la función de ___."

respuesta: escenario_datos[escenario_idx][1

explicacion: |
  El arte también funcionó como un sistema de registro para preservar la memoria de eventos o la identidad de quienes habitaban un lugar.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["identidad", "social"]

tipo: mc
opciones_explicitas: ["Identidad grupal", "Uso utilitario", "Ritual de fertilidad", "Decoración de refugio"]

enunciado: "El uso de símbolos o marcas específicas en las cuevas que permitían a diferentes bandas reconocer el territorio de otros sugiere una función de:"

respuesta: "Identidad grupal"

explicacion: |
  Los símbolos compartidos ayudan a fortalecer la cohesión del grupo y a diferenciar la identidad de una comunidad frente a otra.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["teoria", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Ritual/Magia", "Registro de eventos", "Expresión de identidad", "Estética pura"]

respuesta: ["Ritual/Magia", "Registro de eventos", "Expresión de identidad", "Estética pura"]

enunciado: "Ordena las siguientes teorías sobre la evolución de la función del arte, desde la más ligada a la supervivencia inmediata hasta la más abstracta/contemplativa:"

explicacion: |
  Históricamente, se debate si el arte comenzó con propósitos mágicos-supervivencia, pasó a ser un registro social y finalmente se convirtió en un objeto de contemplación estética.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["magia", "supervivencia"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si el arte rupestre se utilizaba para realizar un ritual de fertilidad de la fauna, su función principal era asegurar la ___."

respuesta: "supervivencia"

explicacion: |
  Al intentar influir en la naturaleza mediante el arte, el ser humano primitivo buscaba asegurar la continuidad de su propia subsistencia.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["escultura", "prehistoria"]

respuesta: "Venus de Willendorf"
tipo: completar
respuestas_validas: ["Venus de Willendorf", "Venus de Willendorf"]

enunciado: "Una de las esculturas más famosas del Paleolítico Superior, que destaca por enfatizar la fertilidad, es la ___."

explicacion: |
  Las Venus paleolíticas son pequeñas estatuillas femeninas que suelen presentar rasgos sexuales muy exagerados, lo que sugiere un simbolismo relacionado con la fertilidad o la maternidad.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["musica", "prehistoria"]

variables:
  escenario: uno_de([
    ["una flauta de hueso de ave", "hueso"],
    ["un ritmo de percusión con piedras", "piedra"],
    ["un silbato de concha marina", "concha"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["hueso", "piedra", "concha", "madera"]

enunciado: "En el registro arqueológico, se han encontrado restos que sugieren el uso de {escenario[0]} como primer instrumento musical."

explicacion: |
  Se han hallado flautas hechas de hueso de animales (como buitres o ciervos) en yacimientos como la cueva de Hohle Fels, lo que demuestra que la música es una expresión artística muy temprana.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["ornamento", "joyeria"]

respuesta: "collares"
tipo: mc
opciones_explicitas: ["collares", "cuadros", "estatuas", "murales"]

enunciado: "El uso de conchas, dientes de animales o piedras perforadas para crear ___ es una de las formas más antiguas de expresión estética personal."

explicacion: |
  La ornamentación personal indica no solo una función estética, sino también la construcción de identidad y estatus dentro de los grupos humanos primitivos.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["secuencia", "prehistoria"]

respuesta: ["pintura rupestre", "escultura pequeña", "instrumentos musicales"]
tipo: ordenar
opciones_explicitas: ["pintura rupestre", "escultura pequeña", "instrumentos musicales"]

enunciado: "Ordena las siguientes manifestaciones artísticas según su aparición o prevalencia en el registro arqueológico temprano (de la más antigua/difusa a la más compleja):"

pasos:
  - "Identifica la manifestación más primitiva"
  - "Ubica la escultura de pequeña escala"
  - "Considera la especialización de instrumentos"

explicacion: |
  Aunque el arte es un proceso complejo, la arqueología muestra una transición desde la expresión simbólica en paredes (pintura), pasando por objetos portátiles (escultura/Venus), hasta la especialización de herramientas sonoras.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["escultura", "materiales"]

respuesta: 12.5
tipo: completar
tolerancia_abs: 0.1

enunciado: "Si una pequeña estatuilla de piedra pesa 12.5 gramos y se encuentra en un yacimiento donde el 50% de los objetos son de este material, ¿cuántos gramos de piedra representan el total de la muestra analizada de 25 gramos?"

pasos:
  - "Identificar el peso del objeto (12.5g)"
  - "Calcular el peso total de la muestra (25g)"
  - "Determinar la parte proporcional de la piedra"

explicacion: |
  El estudio del peso y la densidad de los materiales es crucial para que los arqueólogos determinen el origen de las piezas escultóricas.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["evolucion", "cognicion", "simbolismo"]

respuesta: "simbólico"
tipo: completar
respuestas_validas: ["simbólico"]

enunciado: "El arte requiere la capacidad de realizar un salto ___ para representar algo que no está presente físicamente en el entorno inmediato."

explicacion: |
  Representar un objeto ausente (como un animal en una cueva) requiere que el cerebro humano procese conceptos abstractos y símbolos, marcando un hito en la evolución cognitiva.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["cognicion", "evolucion"]

variables:
  es_evidencia: verdadero

respuesta: es_evidencia
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "La aparición de representaciones pictóricas en el registro arqueológico es evidencia de una capacidad cognitiva avanzada. ¿Es esto cierto?"

explicacion: |
  La capacidad de proyectar una imagen mental sobre una superficie física demuestra que el Homo sapiens ya poseía pensamiento simbólico.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["abstraccion", "evolucion"]

variables:
  escenario: uno_de([[0, "un bisonte en una cueva"], [1, "un paisaje estático"], [2, "una herramienta de piedra"]])
  respuesta_texto: uno_de(["un bisonte en una cueva", "un paisaje estático", "una herramienta de piedra"])

respuesta: respuesta_texto
tipo: mc
opciones_explicitas: ["un bisonte en una cueva", "un paisaje estático", "una herramienta de piedra"]

enunciado: "Si un artista prehistórico pinta {escenario[0]}, está demostrando la capacidad de representar lo que está ___."

explicacion: |
  El arte no es solo imitación, es la capacidad de traer a la mente un objeto ausente para darle un significado nuevo.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["procesos_mentales", "abstraccion"]

respuesta: 2
tipo: ordenar
opciones_explicitas: ["Percepción del objeto real", "Procesamiento mental/abstracción", "Representación simbólica en soporte"]

enunciado: "Ordena cronológicamente los procesos cognitivos necesarios para que un humano primitivo cree una pintura rupestre:"

explicacion: |
  Primero se percibe el mundo, luego el cerebro abstrae la esencia del objeto y finalmente se ejecuta la acción de representar ese concepto.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["simbolismo", "evolucion"]

respuesta: "representar ideas o entidades ausentes"
tipo: completar
respuestas_validas: ["representar ideas o entidades ausentes"]

enunciado: "El objetivo principal del arte como fenómeno cognitivo es ___."

explicacion: |
  El arte permite que la mente humana trascienda el "aquí y ahora", permitiendo la comunicación de ideas, mitos y conceptos abstractos a través del tiempo.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["prehistoria", "pintura"]

variables:
  datos: [["pinturas sobre paredes de cuevas usando pigmentos naturales", "pintura rupestre"], ["esculturas de piedra en el exterior", "escultura megalitica"], ["grabados sobre hueso o madera", "grabado"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["pintura rupestre", "escultura megalitica", "grabado"]

enunciado: "Se han encontrado restos de pigmentos rojos y negros aplicados sobre las paredes de una cueva profunda. ¿A qué forma de arte corresponde esta descripción? ___"

explicacion: |
  La descripción corresponde a la {datos[idx][0]}.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["escultura", "paleolitico"]

variables:
  datos: [["pequeñas figuras femeninas con rasgos sexuales muy acentuados", "Venus"], ["figuras de animales realistas", "Zoomorfos"], ["manos grabadas en piedra", "Manos"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Venus", "Zoomorfos", "Manos"]

enunciado: "Se descubre una pequeña estatuilla de piedra que enfatiza la fertilidad mediante formas redondeadas. Se trata de una ___."

explicacion: |
  Las figuras con estas características se denominan {datos[idx][1]}.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "avanzado"
  tags: ["cronologia", "periodos"]

variables:
  orden_correcto: ["Paleolítico", "Mesolítico", "Neolítico"]

respuesta: ["Paleolítico", "Mesolítico", "Neolítico"]
tipo: ordenar
opciones_explicitas: ["Paleolítico", "Mesolítico", "Neolítico"]

enunciado: "Ordena cronológicamente los periodos de la prehistoria, desde el más antiguo al más reciente:"

explicacion: |
  El orden correcto es: {orden_correcto[0]}, luego {orden_correcto[1]} y finalmente {orden_correcto[2]}.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "basico"
  tags: ["tecnica", "materiales"]

variables:
  datos: [["piedra", "litografía"], ["hueso", "osteografía"], ["madera", "xilografía"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["litografía", "osteografía", "xilografía"]

enunciado: "Si el soporte utilizado para realizar un grabado es un ___, la técnica se denomina ___."

explicacion: |
  Al usar {datos[idx][0]}, la técnica es la {datos[idx][1]}.
```

```
metadata:
  materia: "arte"
  tema: "origen_del_arte"
  nivel: "intermedio"
  tags: ["teoria", "prehistoria"]

variables:
  datos: [["magia", "ritual"], ["decoración", "estética"], ["comunicación", "lenguaje"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ritual", "estética", "lenguaje"]

enunciado: "Muchos arqueólogos sostienen que el arte en el Paleolítico no era decorativo, sino que tenía una función de ___."

explicacion: |
  Se cree que su función principal era el {datos[idx][1]}.
```
