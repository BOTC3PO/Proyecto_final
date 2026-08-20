# Biología — Sistema endocrino: hormonas y glándulas (cuestionario, 25 preguntas VBLang)

> Tema: `BKE`. Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma) en 5 lotes concurrentes.
> Corregido a mano. Bugs de esta tanda: varias preguntas de blank
> `___` etiquetadas `tipo: vf` (reclasificadas a `completar`); una
> pregunta con **dos** blancos en el `enunciado` pero uno de ellos sin
> interpolación real (quedaba como `___` literal, no calificable) —
> recortada a un solo blanco; `tipo: vf` con `respuestas_validas`
> conteniendo `["verdadero","falso"]` (innecesario, ya está `respuesta:`)
> — normalizado.

---

### 1 — El mensajero químico

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["hormonas", "glándulas"]

respuesta: "hormona"
tipo: completar
respuestas_validas:
  - "hormona"

enunciado: "Las sustancias químicas producidas por las glándulas endocrinas que viajan a través de la sangre para regular funciones corporales se denominan ___."

explicacion: |
  Las hormonas son mensajeros químicos que se liberan en el torrente sanguíneo para actuar sobre células u órganos específicos (células diana).
```

### 2 — Velocidad de respuesta

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["sistema_nervioso", "sistema_endocrino"]

respuesta: "lento"
tipo: completar
respuestas_validas:
  - "lento"

enunciado: "A diferencia del sistema nervioso, que utiliza impulsos eléctricos para una respuesta inmediata, el sistema endocrino se caracteriza por tener un efecto ___."

explicacion: |
  El sistema nervioso es rápido y de corta duración, mientras que el sistema endocrino es más lento pero sus efectos suelen ser más duraderos.
```

### 3 — Vía de transporte

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["transporte", "sangre"]

respuesta: "torrente sanguíneo"
tipo: completar
respuestas_validas:
  - "torrente sanguíneo"
  - "torrente sanguineo"
  - "sangre"

enunciado: "Mientras que las neuronas transmiten señales a través de axones, las glándulas endocrinas liberan sus mensajeros directamente al ___."

explicacion: |
  Las glándulas endocrinas son glándulas sin conductos que vierten su secreción directamente en la sangre.
```

### 4 — Comparación de señales

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["comparacion", "señales"]

variables:
  escenario: uno_de([["eléctricas", "rápidas"], ["químicas", "lentas"]])

respuesta: escenario[1]
tipo: completar
respuestas_validas:
  - "rápidas"
  - "lentas"

enunciado: "El sistema endocrino utiliza señales {escenario[0]} para transmitir su mensaje, lo que hace que la respuesta sea ___."

explicacion: |
  El sistema nervioso es como un mensaje de texto instantáneo (rápido/eléctrico), mientras que el endocrino es como una carta (lento/químico).
```

### 5 — El medio de transporte

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["transporte", "sangre"]

respuesta: "sangre"
tipo: completar
respuestas_validas:
  - "sangre"

enunciado: "El medio principal de transporte para las hormonas en el organismo es la ___."

explicacion: |
  La sangre actúa como la autopista que permite que las hormonas lleguen desde la glándula hasta los órganos distantes.
```

### 6 — La glándula tiroides

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["tiroides", "tiroxina"]

tipo: mc
opciones_explicitas: ["Insulina", "Tiroxina", "Adrenalina", "Estrógeno"]
respuesta: "Tiroxina"

enunciado: "La glándula tiroides es responsable de la secreción de una hormona fundamental para regular el metabolismo energético del organismo. ¿Cuál es dicha hormona?"

explicacion: |
  La tiroides produce tiroxina (T4) y triyodotironina (T3), las cuales regulan la velocidad con la que las células consumen energía.
```

### 7 — Regulación de la glucemia por el páncreas

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["pancreas", "insulina", "glucagon"]

tipo: completar
respuesta: "glucagón"
respuestas_validas:
  - "glucagón"
  - "glucagon"

enunciado: "Cuando los niveles de glucosa en sangre disminuyen, el páncreas secreta la hormona ___ para provocar que los niveles de azúcar suban."

explicacion: |
  El páncreas actúa de forma dual: la insulina baja la glucosa y el glucagón la sube. Ante la baja de glucosa, se libera glucagón.
```

### 8 — Respuesta ante el estrés

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["suprarrenales", "adrenalina"]

tipo: mc
opciones_explicitas: ["Cortisol", "Adrenalina", "Testosterona", "Tiroxina"]
respuesta: "Adrenalina"

enunciado: "Ante una situación de peligro o estrés repentino, las glándulas suprarrenales liberan una hormona que aumenta la frecuencia cardíaca y prepara al cuerpo para la acción. ¿Qué hormona es?"

explicacion: |
  La adrenalina (epinefrina) es la hormona de respuesta inmediata ante situaciones de lucha o huida.
```

### 9 — Hormonas sexuales femeninas

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["gonadas", "estrogeno", "testosterona"]

tipo: completar
respuesta: "estrógeno"
respuestas_validas:
  - "estrógeno"
  - "estrogeno"

enunciado: "En el sistema reproductor femenino, las gónadas (ovarios) producen principalmente la hormona ___."

explicacion: |
  Los ovarios producen estrógenos y progesterona, encargados de los caracteres sexuales secundarios femeninos y el ciclo menstrual.
```

### 10 — El páncreas y la glucosa

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["pancreas", "insulina"]

tipo: mc
opciones_explicitas: ["Cortisol", "Insulina", "Adrenalina", "Tiroxina"]
respuesta: "Insulina"

enunciado: "La diabetes mellitus tipo 1 se caracteriza por la deficiencia en la producción de una hormona pancreática que permite la entrada de glucosa a las células. ¿Cuál es?"

explicacion: |
  La insulina es la hormona encargada de permitir que la glucosa pase de la sangre a las células para ser utilizada como energía.
```

### 11 — La glándula maestra

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["hipofisis", "glandula_maestra"]

respuesta: "hipofisis"
tipo: completar
respuestas_validas:
  - "hipofisis"
  - "hipófisis"

enunciado: "La glándula situada en la base del cerebro que coordina y regula el funcionamiento de otras glándulas endocrinas se denomina ___."

explicacion: |
  La hipófisis es conocida como la glándula maestra porque secreta hormonas que estimulan o inhiben la actividad de otras glándulas como la tiroides, las suprarrenales y las gónadas.
```

### 12 — Especificidad de la acción hormonal

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["receptor", "especificidad"]

respuesta: "receptor"
tipo: completar
respuestas_validas:
  - "receptor"

enunciado: "Aunque las hormonas viajan a través de toda la sangre circulando por el organismo, sólo pueden ejercer su efecto sobre las células que poseen un ___ específico."

explicacion: |
  Este mecanismo se llama especificidad celular. La hormona actúa como una 'llave' y el receptor como una 'cerradura'; si la célula no tiene la cerradura adecuada, la hormona pasa de largo sin producir cambios.
```

### 13 — El mecanismo de comunicación

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["transporte", "sangre"]

respuesta: "sangre"
tipo: completar
respuestas_validas:
  - "sangre"

enunciado: "A diferencia del sistema nervioso que usa impulsos eléctricos, el sistema endocrino transporta sus mensajeros químicos (hormonas) a través de la ___."

explicacion: |
  Las hormonas son mensajeros químicos que se liberan al torrente sanguíneo para ser distribuidos por todo el cuerpo.
```

### 14 — Relación hipófisis-tiroides

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["eje_hormonal", "tiroides"]

respuesta: "tiroides"
tipo: completar
respuestas_validas:
  - "tiroides"

enunciado: "La hipófisis secreta la hormona tirotropina (TSH), cuya función principal es regular el funcionamiento de la glándula ___."

explicacion: |
  La TSH (hormona estimulante de la tiroides) viaja por la sangre hasta la glándula tiroides para estimular la producción de sus hormonas (T3 y T4).
```

### 15 — La célula diana

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "avanzado"
  tags: ["celula_diana", "receptor"]

respuesta: "célula diana"
tipo: completar
respuestas_validas:
  - "célula diana"
  - "celula diana"

enunciado: "El término utilizado para designar a la célula sobre la cual actúa una hormona específica se conoce como ___."

explicacion: |
  La célula diana es aquella que tiene los receptores proteicos necesarios para reconocer la señal de la hormona y desencadenar una respuesta biológica.
```

### 16 — El papel de la insulina

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["hormonas", "glucosa", "insulina"]

tipo: mc
opciones_explicitas: ["Aumentar la glucosa en sangre", "Disminuir la glucosa en sangre", "Aumentar el ritmo cardiaco", "Regular la temperatura corporal"]
respuesta: "Disminuir la glucosa en sangre"

enunciado: "Cuando los niveles de glucosa en sangre aumentan después de una comida, el páncreas secreta insulina para realizar una acción de retroalimentación negativa. ¿Cuál es el efecto principal de la insulina?"

explicacion: |
  La insulina permite que la glucosa entre en las células, reduciendo así su concentración en el torrente sanguíneo y manteniendo la homeostasis.
```

### 17 — El mecanismo de retroalimentación negativa

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["homeostasis", "mecanismo", "control"]

tipo: vf
respuesta: verdadero

enunciado: "En un sistema de retroalimentación negativa, la respuesta producida por el cuerpo actúa para contrarrestar o reducir el estímulo inicial para mantener el equilibrio."

explicacion: |
  Correcto. El objetivo de la retroalimentación negativa es la homeostasis: si un parámetro se desvía de su punto de ajuste, el sistema activa mecanismos para devolverlo a la normalidad.
```

### 18 — Glucagón y el estado de ayuno

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["glucagon", "glucosa", "ayuno"]

tipo: mc
opciones_explicitas: ["Estimular la absorción de glucosa", "Inhibir la producción de insulina", "Aumentar la glucosa en sangre", "Reducir la glucosa en sangre"]
respuesta: "Aumentar la glucosa en sangre"

enunciado: "Durante un periodo de ayuno, los niveles de glucosa en sangre descienden. Para compensar esto, el páncreas libera glucagón. ¿Cuál es la función de esta hormona?"

explicacion: |
  El glucagón estimula la degradación del glucógeno en el hígado para liberar glucosa a la sangre, elevando así sus niveles.
```

### 19 — El termostato biológico

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["termorregulacion", "homeostasis", "analogia"]

tipo: vf
respuesta: verdadero

enunciado: "La analogía del termostato de un aire acondicionado es útil para entender la retroalimentación negativa, ya que cuando la temperatura sube, el sistema se activa para apagar el calor y estabilizar la temperatura."

explicacion: |
  Exacto. Al igual que el termostato detecta el cambio y activa una acción para revertirlo, el sistema endocrino detecta cambios químicos y activa hormonas para revertirlos.
```

### 20 — Relación hormona-estímulo

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "avanzado"
  tags: ["control", "eje_hormonal", "regulacion"]

tipo: mc
opciones_explicitas: ["El estímulo aumenta la producción de la hormona", "El estímulo disminuye la producción de la hormona", "La hormona no tiene relación con el estímulo", "La hormona siempre aumenta el estímulo"]
respuesta: "El estímulo aumenta la producción de la hormona"

enunciado: "En un ciclo de retroalimentación negativa clásica, si el nivel de un producto final (como una hormona) es muy bajo, ¿qué sucede con la señal de estimulación?"

explicacion: |
  Cuando el nivel de la sustancia es bajo, se elimina la inhibición sobre la glándula, permitiendo que se produzca más hormona para restaurar el nivel normal.
```

### 21 — Respuesta al estrés (escenarios)

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["hormonas", "estres", "adrenalina"]

variables:
  escenarios: [["Ante una situación de peligro inminente, el cuerpo libera una sustancia para preparar la respuesta de lucha o huida. ¿Cuál es esa sustancia?", "adrenalina"], ["Ante un susto repentino, el organismo aumenta la frecuencia cardíaca debido a la liberación de... ¿qué hormona?", "adrenalina"]]
  idx: uno_de([0, 1])

enunciado: "{escenarios[idx][0]}"

opciones_explicitas: ["insulina", "adrenalina", "tiroxina", "melatonina"]
respuesta: "adrenalina"
tipo: mc

explicacion: |
  Las glándulas suprarrenales liberan adrenalina (epinefrina) para preparar al cuerpo para una respuesta rápida ante el estrés.
```

### 22 — Regulación de la glucosa (escenarios)

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["glucosa", "insulina", "pancreas"]

variables:
  escenarios: [["Después de una comida rica en carbohidratos, los niveles de azúcar en sangre aumentan. ¿Qué hormona secreta el páncreas para regular esto?", "insulina"], ["Cuando la glucosa en sangre sube tras ingerir alimentos, ¿cuál es la hormona responsable de transportarla a las células?", "insulina"]]
  idx: uno_de([0, 1])

enunciado: "{escenarios[idx][0]}"

opciones_explicitas: ["glucagón", "insulina", "tiroxina", "cortisol"]
respuesta: "insulina"
tipo: mc

explicacion: |
  La insulina es la hormona encargada de reducir los niveles de glucosa en sangre facilitando su entrada en las células.
```

### 23 — Metabolismo basal (escenarios)

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["metabolismo", "tiroides", "tiroxina"]

variables:
  escenarios: [["Si una persona presenta un metabolismo extremadamente lento y se siente cansada, es probable que su glándula tiroides esté produciendo poca...", "tiroxina"], ["Una deficiencia en la producción de ___ por parte de la glándula tiroides puede ralentizar el metabolismo.", "tiroxina"]]
  idx: uno_de([0, 1])

enunciado: "{escenarios[idx][0]}"

respuestas_validas:
  - "tiroxina"
respuesta: "tiroxina"
tipo: completar

explicacion: |
  La glándula tiroides produce tiroxina, la cual es la principal responsable de regular la velocidad del metabolismo en el cuerpo.
```

### 24 — Ciclo del sueño

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "basico"
  tags: ["sueño", "melatonina", "pineal"]

variables:
  escenarios: [["Durante la noche, la glándula pineal secreta una hormona que regula los ciclos de sueño y vigilia llamada...", "melatonina"], ["¿Cuál es la hormona responsable de inducir el sueño y regular los ritmos circadianos?", "melatonina"]]
  idx: uno_de([0, 1])

enunciado: "{escenarios[idx][0]}"

opciones_explicitas: ["melatonina", "oxitocina", "estrógenos", "progesterona"]
respuesta: "melatonina"
tipo: mc

explicacion: |
  La melatonina es producida por la glándula pineal y su secreción aumenta en la oscuridad para regular el ciclo del sueño.
```

### 25 — Control de la glucosa: contrarregulación

```
metadata:
  materia: "biologia"
  tema: "sistema_endocrino_hormonas_glandulas"
  nivel: "intermedio"
  tags: ["glucagon", "pancreas", "glucosa"]

variables:
  escenarios: [["En un estado de ayuno prolongado, los niveles de glucosa en sangre descienden. ¿Qué hormona secreta el páncreas para compensar esto?", "glucagón"], ["Cuando el azúcar en sangre es muy baja, ¿cuál es la hormona que actúa para elevarla?", "glucagón"]]
  idx: uno_de([0, 1])

enunciado: "{escenarios[idx][0]}"

opciones_explicitas: ["insulina", "glucagón", "adrenalina", "cortisol"]
respuesta: "glucagón"
tipo: mc

explicacion: |
  El glucagón actúa de forma opuesta a la insulina; su función es elevar los niveles de glucosa en sangre cuando estos son bajos.
```
