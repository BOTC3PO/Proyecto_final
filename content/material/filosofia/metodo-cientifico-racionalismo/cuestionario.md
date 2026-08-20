# Filosofia — Metodo cientifico racionalismo (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El origen del conocimiento

```
metadata:
  materia: "filosofia"
  tema: "racionalismo_moderno"
  nivel: "basico"
  tags: ["epistemologia", "razon"]

respuesta: "razon"
tipo: "completar"
respuestas_validas:
  - "razon"

enunciado: "Para el racionalismo moderno, la vía principal para alcanzar la verdad y el conocimiento seguro es la ___."

explicacion: |
  El racionalismo sostiene que la capacidad de razonar es la fuente principal de conocimiento, desplazando la autoridad de la tradición o la fe.
```

### 2 — El método deductivo

```
metadata:
  materia: "filosofia"
  tema: "racionalismo_moderno"
  nivel: "intermedio"
  tags: ["metodo", "deduccion"]

respuesta: "El razonamiento parte de principios generales para llegar a conclusiones particulares"
tipo: "mc"
opciones_explicitas: ["El razonamiento parte de principios generales para llegar a conclusiones particulares", "El razonamiento parte de hechos particulares para llegar a leyes generales"]

enunciado: "En el contexto del racionalismo, ¿cuál es la forma de razonamiento que busca la certeza a partir de ideas innatas o principios evidentes?"

explicacion: |
  El racionalismo utiliza el método deductivo, que avanza de lo general (lo evidente) a lo particular.
```

### 3 — René Descartes y la duda

```
metadata:
  materia: "filosofia"
  tema: "racionalismo_moderno"
  nivel: "avanzado"
  tags: ["descartes", "cogito"]

respuesta: "pienso, luego existo"
tipo: "completar"
respuestas_validas:
  - "pienso, luego existo"

enunciado: "René Descartes, padre del racionalismo moderno, utilizó la duda metódica para llegar a su primera certeza fundamental: '___'."

explicacion: |
  El "Cogito, ergo sum" establece que el acto de dudar (pensar) es la prueba irrefutable de la existencia del sujeto que piensa.
```

### 4 — Oposición al empirismo

```
metadata:
  materia: "filosofia"
  tema: "racionalismo_moderno"
  nivel: "intermedio"
  tags: ["empirismo", "contraste"]

respuesta: "ideas_innatas"
tipo: "mc"
opciones_explicitas: ["ideas_innatas", "experiencia sensorial", "autoridad religiosa", "intuición mística"]

enunciado: "A diferencia del empirismo, que afirma que la mente es una 'tabula rasa', el racionalismo sostiene la existencia de:"

explicacion: |
  El racionalismo postula que el ser humano posee ideas innatas que no dependen de la experiencia para ser verdaderas.
```

### 5 — Orden lógico del conocimiento

```
metadata:
  materia: "filosofia"
  tema: "racionalismo_moderno"
  nivel: "intermedio"
  tags: ["logica", "metodo"]

respuesta_orden: ["Duda metódica", "Encuentro de una verdad evidente", "Deducción de nuevos conocimientos"]
tipo: "ordenar"
opciones_explicitas: ["Duda metódica", "Encuentro de una verdad evidente", "Deducción de nuevos conocimientos"]

enunciado: "Ordene los pasos del método cartesiano para alcanzar el conocimiento científico:"

explicacion: |
  El método comienza con la duda para limpiar prejuicios, encuentra una verdad indudable (el cogito) y de allí deduce el resto de la realidad.
```

### 6 — Etapas del método científico

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "basico"
  tags: ["metodo", "ciencia", "pasos"]

tipo: ordenar
opciones_explicitas: ["Observación", "Hipótesis", "Experimentación", "Conclusión"]
respuesta_orden: ["Observación", "Hipótesis", "Experimentación", "Conclusión"]

enunciado: "El método científico es un procedimiento sistemático que sigue un orden lógico para estudiar la naturaleza. Ordena las siguientes etapas desde la fase inicial hasta la resolución del problema:"

explicacion: |
  El método científico busca la objetividad mediante un ciclo que comienza con la observación de un fenómeno, la formulación de una hipótesis explicativa, la puesta a prueba mediante experimentación y, finalmente, la obtención de una conclusión.
```

### 7 — La transición de la especulación al método

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "intermedio"
  tags: ["historia", "epistemologia"]

tipo: mc

enunciado: "¿Cuál fue el cambio fundamental que permitió que la ciencia se diferenciara de la mera especulación filosófica en la modernidad?"

opciones_explicitas: ["El uso de la lógica pura sin contacto con la realidad", "La sustitución de la observación y experimentación sistemática por la intuición", "La adopción de un procedimiento sistemático basado en la evidencia empírica", "El abandono total de la razón en favor de los sentidos"]

respuesta: "La adopción de un procedimiento sistemático basado en la evidencia empírica"

explicacion: |
  Mientras que la especulación filosófica tradicional se basaba en la deducción lógica pura a partir de principios abstractos, el método científico introdujo la necesidad de contrastar dichas ideas con la realidad mediante la observación y la experimentación.
```

### 8 — El rol de la hipótesis

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "basico"
  tags: ["hipotesis", "metodologia"]

tipo: completar

enunciado: "En el proceso de investigación, una ___ es una explicación provisional que intenta dar respuesta a un fenómeno observado y que debe ser sometida a prueba."

respuestas_validas:
  - "hipótesis"

respuesta: "hipótesis"

explicacion: |
  La hipótesis no es una verdad absoluta, sino una conjetura educada que sirve como guía para la experimentación. Si la experimentación la contradice, la hipótesis debe ser modificada o descartada.
```

### 9 — Experimentación y validación

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "intermedio"
  tags: ["experimentacion", "verificacion"]

tipo: mc

enunciado: "Si un científico observa un fenómeno y formula una hipótesis, pero al realizar pruebas controladas los resultados no coinciden con su predicción, ¿qué debe ocurrir según el método científico?"

opciones_explicitas: ["Se debe ignorar el resultado para no invalidar la teoría", "Se debe descartar o reformular la hipótesis", "Se debe cambiar la observación inicial para que coincida con la hipótesis", "Se debe concluir que la naturaleza es irracional"]

respuesta: "Se debe descartar o reformular la hipótesis"

explicacion: |
  La experimentación tiene como fin último la validación o refutación. Un resultado contradictorio es una herramienta fundamental para el avance del conocimiento, obligando al científico a revisar sus premisas.
```

### 10 — El carácter sistemático

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "avanzado"
  tags: ["sistematicidad", "epistemologia"]

variables:
  idx: uno_de([0, 1])
  escenario: [["El método científico es ___ porque sigue una serie de pasos ordenados y repetibles.", "sistemático"], ["La observación científica es ___ porque requiere un examen atento y organizado de los hechos.", "metódica"]]

tipo: completar

enunciado: "Un aspecto crucial del método científico es que es {escenario[idx][0]}, lo que significa que es {escenario[idx][1]}."

respuestas_validas:
  - "sistemático"
  - "metódica"

respuesta: "sistemático"

explicacion: |
  La sistematicidad implica que el conocimiento no se adquiere de forma azarosa, sino a través de un conjunto de reglas y pasos interconectados que permiten que el proceso sea reproducible por otros investigadores.
```

### 11 — La duda metódica de Descartes

```
metadata:
  materia: "filosofia"
  tema: "racionalismo"
  nivel: "basico"
  tags: ["descartes", "epistemologia"]

respuesta: "cogito_ergo_sum"
tipo: completar
respuestas_validas:
  - "cogito_ergo_sum"

enunciado: "René Descartes utilizó la duda metódica para encontrar una verdad indudable. Tras dudar de todo, llegó a la conclusión de que, dado que piensa, existe. Esta famosa máxima se expresa como: '___'."

explicacion: |
  El 'Cogito, ergo sum' (Pienso, luego existo) es el punto de partida del racionalismo cartesiano, estableciendo la existencia del sujeto pensante como base del conocimiento.
```

### 12 — El método de Galileo

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico"
  nivel: "intermedio"
  tags: ["galileo", "metodo_experimental"]

respuesta: "Observación y experimentación matemática"
tipo: mc
opciones_explicitas: ["Deducción puramente lógica", "Observación y experimentación matemática", "Autoridad de los textos antiguos", "Intuición mística"]

enunciado: "Galileo Galilei es considerado el padre de la ciencia moderna por su enfoque basado en la observación y la matematización de la naturaleza. Su método se caracteriza principalmente por:"

explicacion: |
  A diferencia de la escolástica, Galileo insistió en que el libro de la naturaleza está escrito en lenguaje matemático y requiere la experimentación para validar las hipótesis.
```

### 13 — La síntesis de Newton

```
metadata:
  materia: "filosofia"
  tema: "revolucion_cientifica"
  nivel: "avanzado"
  tags: ["newton", "mecanicismo"]

variables:
  leyes: [["La ley de la gravitación universal y las leyes del movimiento", "La ley de la gravitación universal y las leyes del movimiento"], ["La ley de la conservación de la masa", "La ley de la conservación de la masa"], ["La ley de la relatividad especial", "La ley de la relatividad especial"]]
  ley_idx: uno_de([0,1,2])

respuesta: leyes[ley_idx][1]
tipo: mc
opciones_explicitas: ["La ley de la gravitación universal y las leyes del movimiento", "La ley de la conservación de la masa", "La ley de la relatividad especial", "La ley de la termodinámica"]

enunciado: "Isaac Newton integró la física terrestre y la celeste en un solo sistema matemático. ¿Cuál de las siguientes opciones representa el núcleo de su contribución científica?"

explicacion: |
  Newton unificó la mecánica celeste con la mecánica terrestre mediante la formulación matemática de la gravedad y las leyes del movimiento.
```

### 14 — Orden de la revolución científica

```
metadata:
  materia: "filosofia"
  tema: "revolucion_cientifica"
  nivel: "intermedio"
  tags: ["historia_ciencia", "ordenar"]

respuesta_orden: ["Galileo", "Descartes", "Newton"]
tipo: ordenar
opciones_explicitas: ["Galileo", "Descartes", "Newton"]

enunciado: "Ordena cronológicamente a estos pensadores fundamentales de la Revolución Científica y el Racionalismo, desde el primero en su desarrollo hasta el último:"

explicacion: |
  Galileo (1564-1642), Descartes (1596-1650) y Newton (1643-1727) representan la transición desde la observación experimental hacia la sistematización racional y la síntesis mecánica.
```

### 15 — El papel de la matemática

```
metadata:
  materia: "filosofia"
  tema: "racionalismo"
  nivel: "basico"
  tags: ["matematica", "descartes"]

respuesta: "deductivo"
tipo: completar
respuestas_validas:
  - "deductivo"

enunciado: "Para los racionalistas como Descartes, el conocimiento se construye mediante un método ___ que parte de verdades evidentes para llegar a conclusiones complejas."

explicacion: |
  El método deductivo parte de principios generales (ideas innatas o verdades evidentes) para derivar conclusiones particulares mediante la lógica.
```

### 16 — El giro epistemológico racionalista

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "intermedio"
  tags: ["racionalismo", "epistemologia", "modernidad"]

respuesta: "razon"
tipo: completar
respuestas_validas:
  - "razon"
  - "la razón"

enunciado: "Frente al principio de autoridad de la Iglesia, el racionalismo moderno sostiene que la fuente primordial y segura de conocimiento es la ___."

explicacion: |
  El racionalismo, con figuras como Descartes, desplazó la fe y la tradición como criterios de verdad, situando a la razón humana como la facultad capaz de alcanzar certezas mediante la deducción.
```

### 17 — El método deductivo vs. Autoridad

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "intermedio"
  tags: ["metodo_cientifico", "deduccion", "autoridad"]

opciones_explicitas: ["La observación de los textos sagrados", "La deducción lógica a partir de principios evidentes", "El consenso de los sabios antiguos", "La revelación divina"]

respuesta: "La deducción lógica a partir de principios evidentes"
tipo: mc

enunciado: "En el contexto del surgimiento de la ciencia moderna, ¿cuál de estas metodologías permitió desafiar la validez de los dogmas establecidos por la autoridad religiosa?"

explicacion: |
  El método científico y el racionalismo introdujeron la necesidad de que las verdades fueran demostrables mediante la lógica o la experimentación, en lugar de ser aceptadas simplemente porque una autoridad (como la Iglesia) lo dictara.
```

### 18 — Desplazamiento de la cosmología aristotélica

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "avanzado"
  tags: ["cosmologia", "ciencia_moderna", "paradigma"]

variables:
  escenario: uno_de([["Aristóteles", "Geocentrismo"], ["Copérnico", "Heliocentrismo"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Geocentrismo", "Heliocentrismo", "Teocentrismo", "Fisiocracia"]

enunciado: "Si consideramos el cambio de paradigma donde el modelo de {escenario[0]} fue reemplazado por el de {escenario[1]}, estamos ante un ejemplo de cómo el método científico desplazó la explicación teológica del cosmos."

explicacion: |
  El paso del modelo geocéntrico (basado en la física aristotélica y la teología) al heliocéntrico es el ejemplo clásico de cómo la evidencia matemática y la observación desplazaron la autoridad de la tradición.
```

### 19 — Elementos del método científico moderno

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "basico"
  tags: ["metodo", "ciencia", "logica"]

opciones_explicitas: ["Observación, Hipótesis, Experimentación, Conclusión", "Fe, Oración, Revelación, Dogma", "Tradición, Interpretación, Cita, Autoridad", "Intuición, Sentimiento, Imaginación, Creencia"]

respuesta: "Observación, Hipótesis, Experimentación, Conclusión"
tipo: mc

enunciado: "Ordene los pasos fundamentales que caracterizan el método científico moderno, el cual se opone al método de la autoridad dogmática:"

explicacion: |
  El método científico requiere un ciclo de observación y experimentación que permite validar o refutar hipótesis, alejándose de la aceptación pasiva de verdades preestablecidas por la tradición.
```

### 20 — La autonomía del sujeto

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "intermedio"
  tags: ["sujeto", "modernidad", "epistemologia"]

respuesta: "autonomía"
tipo: completar
respuestas_validas:
  - "autonomía"
  - "la autonomía"

enunciado: "El paso de la Edad Media a la Modernidad implica que el sujeto adquiere ___ frente a la verdad, dejando de ser un receptor pasivo de la doctrina para convertirse en un juez de la realidad mediante su intelecto."

explicacion: |
  La autonomía del sujeto es el pilar de la modernidad: el individuo ya no necesita la mediación de una institución para validar lo que es real o verdadero; usa su propia razón.
```

### 21 — Identificación de la Observación

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "basico"
  tags: ["metodo_cientifico", "observacion"]

variables:
  escenario: uno_de([["Un científico nota que las plantas en la sombra crecen menos que las que están al sol.", "Observación"], ["Un biólogo detecta que el color de las hojas cambia según la temperatura.", "Observación"], ["Un botánico nota que la humedad del suelo afecta la altura de los tallos.", "Observación"]])

tipo: mc
opciones_explicitas: ["Observación", "Hipótesis", "Experimentación", "Conclusión"]
respuesta: escenario[1]
enunciado: "En el siguiente escenario: '{escenario[0]}', ¿qué etapa del método científico se está llevando a cabo?"

explicacion: |
  La etapa inicial consiste en percibir un fenómeno mediante los sentidos o instrumentos, lo cual constituye la observación.
```

### 22 — Formulación de Hipótesis

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "intermedio"
  tags: ["metodo_cientifico", "hipotesis"]

variables:
  escenario: uno_de([["Si aumento la temperatura, entonces la reacción será más rápida.", "Hipótesis"], ["La luz solar es el factor determinante para el crecimiento.", "Hipótesis"], ["El pH del suelo influye en la absorción de nutrientes.", "Hipótesis"]])

tipo: mc
opciones_explicitas: ["Observación", "Hipótesis", "Experimentación", "Teoría"]
respuesta: escenario[1]

enunciado: "Ante el fenómeno descrito: '{escenario[0]}', el científico propone una explicación provisional. ¿Cómo se llama esta propuesta?"

explicacion: |
  Una hipótesis es una explicación tentativa y provisional que debe ser sometida a prueba para ser validada o refutada.
```

### 23 — La Experimentación

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "intermedio"
  tags: ["metodo_cientifico", "experimentacion"]

variables:
  escenario: uno_de([["Se colocan dos plantas en condiciones controladas para medir la luz.", "Experimentación"], ["Se varía la cantidad de agua en diferentes macetas para ver el efecto.", "Experimentación"], ["Se mantiene constante la temperatura mientras se cambia la presión.", "Experimentación"]])

tipo: completar
respuestas_validas:
  - "Experimentación"
respuesta: escenario[1]

enunciado: "Para verificar su idea, el investigador realiza el siguiente proceso: '{escenario[0]}'. Este paso se denomina: ___."

explicacion: |
  La experimentación consiste en manipular variables de forma controlada para observar los efectos y validar la hipótesis.
```

### 24 — Análisis de Resultados

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "avanzado"
  tags: ["metodo_cientifico", "analisis"]

variables:
  escenario: uno_de([["Se comparan los datos obtenidos con la hipótesis inicial.", "Análisis"], ["Se calculan los promedios de crecimiento de los grupos.", "Análisis"], ["Se interpretan las variaciones estadísticas de la muestra.", "Análisis"]])

tipo: mc
opciones_explicitas: ["Observación", "Análisis", "Conclusión", "Publicación"]
respuesta: escenario[1]

enunciado: "Tras recolectar los datos, el científico procede a: '{escenario[0]}'. ¿Qué fase está ejecutando?"

explicacion: |
  El análisis implica procesar, organizar e interpretar los datos recolectados para entender su significado en relación con la hipótesis.
```

### 25 — El Orden del Método

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "intermedio"
  tags: ["metodo_cientifico", "orden"]

tipo: ordenar
opciones_explicitas: ["Observación", "Hipótesis", "Experimentación", "Conclusión"]
respuesta_orden: ["Observación", "Hipótesis", "Experimentación", "Conclusión"]

enunciado: "Ordena lógicamente las etapas del método científico desde el inicio hasta el final:"

explicacion: |
  El método científico sigue una secuencia lógica: primero se observa, luego se propone una hipótesis, se experimenta para probarla y finalmente se llega a una conclusión.
```
