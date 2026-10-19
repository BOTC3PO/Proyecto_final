# Examen jefe — Pensador Lógico y Epistemólogo

> Logro #951. Dominaste lógica proposicional, método científico y racionalismo, el gusto estético, epistemología y la ética como rama propia. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **105 preguntas totales** en 5/5 secciones.

---

## Sección: logica-proposicional (20 preguntas)

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "basico"
  tags: ["proposicion", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una proposición es un enunciado que puede ser verdadero o falso, sin ambigüedad."

pasos:
  - "\"Llueve\" es una proposición; \"¿Llueve?\" no lo es, porque una pregunta no tiene valor de verdad."

explicacion: |
  Verdadero: tener un valor de verdad definido es lo que distingue a
  una proposición de otros tipos de enunciado.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "basico"
  tags: ["proposicion", "reconocimiento"]

variables:
  frases: ["Llueve en Buenos Aires", "¿Llueve en Buenos Aires?", "¡Qué lluvia!"]
  tipos: ["proposición", "no es proposición", "no es proposición"]
  idx: uno_de([0, 1, 2])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["proposición", "no es proposición"]

enunciado: "\"{frases[idx]}\" es..."

pasos:
  - "Sólo un enunciado afirmativo con valor de verdad claro es proposición; preguntas y exclamaciones no lo son."

explicacion: |
  Preguntas y exclamaciones no tienen valor de verdad, por lo tanto
  no son proposiciones lógicas.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "basico"
  tags: ["negacion"]

variables:
  n: uno_de([1, 1])

respuesta: "¬p"
tipo: completar

enunciado: "Si p es \"llueve\", ¿cómo se representa \"no llueve\" en notación lógica?"

pasos:
  - "La negación invierte el valor de verdad de la proposición original."

explicacion: |
  ¬p es la notación estándar para \"no p\".
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "basico"
  tags: ["negacion", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Si p es verdadero, ¿cuál es el valor de verdad de ¬p (\"no p\")?"

pasos:
  - "La negación siempre invierte el valor de verdad de la proposición original."

explicacion: |
  Si p es verdadero, su negación ¬p es necesariamente falsa.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["conjuncion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La conjunción (p ∧ q, \"p y q\") es verdadera sólo si ambas proposiciones son verdaderas."

pasos:
  - "Si al menos una de las dos es falsa, la conjunción completa es falsa."

explicacion: |
  Verdadero: es la regla básica de la conjunción lógica.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["disyuncion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La disyunción (p ∨ q, \"p o q\") es verdadera si al menos una de las dos proposiciones es verdadera."

pasos:
  - "Sólo es falsa cuando AMBAS son falsas: es la disyunción inclusiva, la más común en lógica."

explicacion: |
  Verdadero: es la regla básica de la disyunción inclusiva.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["condicional"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El condicional (p → q, \"si p entonces q\") es falso sólo cuando p es verdadera y q es falsa."

pasos:
  - "En cualquier otro caso (incluido p falso), el condicional se considera verdadero."

explicacion: |
  Verdadero: es la única combinación que hace falso al condicional.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "avanzado"
  tags: ["condicional", "caso_sorprendente"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un condicional con antecedente falso (p falso) es siempre verdadero, sin importar el valor de verdad del consecuente q."

pasos:
  - "Es el caso que más sorprende al principio: \"si p entonces q\" con p falso no dice nada sobre q, y por convención lógica se considera verdadero."

explicacion: |
  Verdadero: esta convención (a veces llamada \"vacuidad\") es central
  para entender bien la tabla de verdad del condicional.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["bicondicional"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El bicondicional (p ↔ q, \"p si y sólo si q\") es verdadero cuando ambas proposiciones tienen el mismo valor de verdad (las dos verdaderas o las dos falsas)."

pasos:
  - "Es falso cuando los valores de verdad de p y q difieren entre sí."

explicacion: |
  Verdadero: el bicondicional exige coincidencia exacta de valor de
  verdad entre ambas proposiciones.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["tablas_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "4"
tipo: completar

enunciado: "Una tabla de verdad con 2 proposiciones (p y q) tiene cuántas filas (combinaciones posibles de verdad/falsedad)?"

pasos:
  - "Son 2² = 4 combinaciones posibles con 2 proposiciones."

explicacion: |
  Con n proposiciones, la tabla de verdad tiene 2^n filas.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["tablas_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "8"
tipo: completar

enunciado: "Una tabla de verdad con 3 proposiciones (p, q y r) tiene cuántas filas (combinaciones posibles de verdad/falsedad)?"

pasos:
  - "Son 2³ = 8 combinaciones posibles con 3 proposiciones."

explicacion: |
  Con n proposiciones, la tabla de verdad tiene 2^n filas — el mismo
  patrón que con 2 proposiciones, ahora con n=3.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["conjuncion", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "falso"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Si p es verdadero y q es falso, ¿cuál es el valor de verdad de p ∧ q (conjunción)?"

pasos:
  - "La conjunción exige que AMBAS proposiciones sean verdaderas."

explicacion: |
  Como q es falso, la conjunción completa es falsa, aunque p sea
  verdadero.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["disyuncion", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Si p es verdadero y q es falso, ¿cuál es el valor de verdad de p ∨ q (disyunción)?"

pasos:
  - "La disyunción sólo necesita que AL MENOS UNA sea verdadera."

explicacion: |
  Como p es verdadero, la disyunción completa es verdadera, sin
  importar el valor de q.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "avanzado"
  tags: ["condicional", "tabla_de_verdad"]

variables:
  n: uno_de([1, 1])

respuesta: "verdadero"
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Si p es falso y q es verdadero, ¿cuál es el valor de verdad de p → q (condicional)?"

pasos:
  - "El condicional sólo es falso cuando p es verdadero y q es falso; en cualquier otro caso es verdadero."

explicacion: |
  Con p falso, el condicional es verdadero sin importar q, siguiendo
  la regla del condicional.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "avanzado"
  tags: ["condicional", "falacias"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La falacia de pendiente resbaladiza (ver `../../lengua/detectar-falacias/`) puede pensarse como afirmar un condicional (\"si p entonces q\") sin justificar por qué p realmente lleva a q."

pasos:
  - "La lógica proposicional formaliza la estructura de \"si...entonces\" que esa falacia usa sin sustento real."

explicacion: |
  Verdadero: es la conexión directa entre el tema de Lengua y su
  formalización en Filosofía.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["conjuncion", "disyuncion", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La conjunción exige que ambas proposiciones sean verdaderas; la disyunción se conforma con que al menos una lo sea."

pasos:
  - "Es la diferencia central entre \"y\" (∧) y \"o\" (∨) en lógica."

explicacion: |
  Verdadero: conjunción es más exigente (ambas) que disyunción (al
  menos una).
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "basico"
  tags: ["notacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "En lógica proposicional, las proposiciones se representan con letras minúsculas como p, q, r."

pasos:
  - "Es la convención de notación estándar usada en las tablas de verdad."

explicacion: |
  Verdadero: es la notación básica que se usa a lo largo de todo el
  tema.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "intermedio"
  tags: ["tablas_de_verdad", "metodo"]

enunciado: "Ordená los pasos para construir la tabla de verdad de una expresión con dos proposiciones y un conector."
tipo: ordenar
opciones_explicitas:
  - "Identificar las proposiciones involucradas (p, q) y el conector usado"
  - "Listar todas las combinaciones posibles de verdad/falsedad (4 filas para 2 proposiciones)"
  - "Aplicar la regla del conector a cada combinación"
  - "Completar la columna de resultado para cada fila"
respuesta_orden: ["Identificar las proposiciones involucradas (p, q) y el conector usado", "Listar todas las combinaciones posibles de verdad/falsedad (4 filas para 2 proposiciones)", "Aplicar la regla del conector a cada combinación", "Completar la columna de resultado para cada fila"]
explicacion: |
  El proceso va de identificar los elementos a listar sistemáticamente
  todas las combinaciones y aplicar la regla correspondiente.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "avanzado"
  tags: ["logica_proposicional", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de evaluar si una cadena de proposiciones conectadas lógicamente es válida, hace falta dominar qué significa cada conector y cómo se comporta en una tabla de verdad."

pasos:
  - "Ver `../validez-de-un-razonamiento/`: es el tema siguiente de la cadena de Filosofía."

explicacion: |
  Verdadero: por eso lógica proposicional es prerrequisito directo de
  validez de un razonamiento.
```

```
metadata:
  materia: "filosofia"
  tema: "logica_proposicional"
  nivel: "avanzado"
  tags: ["logica_proposicional", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El argumento \"si estudio, apruebo; estudié; por lo tanto, apruebo\" se puede formalizar con lógica proposicional como: p → q, p, por lo tanto q."

pasos:
  - "Cada parte del argumento cotidiano corresponde a una proposición o conector lógico ya estudiado."

explicacion: |
  Verdadero: formalizar argumentos del lenguaje cotidiano en notación
  lógica es la aplicación práctica central de este tema.
```

## Sección: metodo-cientifico-racionalismo (25 preguntas)

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

```
metadata:
  materia: "filosofia"
  tema: "revolucion_cientifica"
  nivel: "avanzado"
  tags: ["newton", "mecanicismo"]

respuesta: "La ley de la gravitación universal y las leyes del movimiento"
tipo: mc
opciones_explicitas: ["La ley de la gravitación universal y las leyes del movimiento", "La ley de la conservación de la masa", "La ley de la relatividad especial", "La ley de la termodinámica"]

enunciado: "Isaac Newton integró la física terrestre y la celeste en un solo sistema matemático. ¿Cuál de las siguientes opciones representa el núcleo de su contribución científica?"

explicacion: |
  Newton unificó la mecánica celeste con la mecánica terrestre mediante la formulación matemática de la gravedad y las leyes del movimiento.
```

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

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "avanzado"
  tags: ["cosmologia", "ciencia_moderna", "paradigma"]

respuesta: "Heliocentrismo"
tipo: mc
opciones_explicitas: ["Geocentrismo", "Heliocentrismo", "Teocentrismo", "Fisiocracia"]

enunciado: "El modelo geocéntrico de Aristóteles y Ptolomeo fue reemplazado por el modelo copernicano. Este cambio de paradigma es un ejemplo de cómo el método científico desplazó la explicación teológica del cosmos mediante el ___."

explicacion: |
  El paso del modelo geocéntrico (basado en la física aristotélica y la teología) al heliocéntrico es el ejemplo clásico de cómo la evidencia matemática y la observación desplazaron la autoridad de la tradición.
```

```
metadata:
  materia: "filosofia"
  tema: "metodo_cientifico_racionalismo"
  nivel: "basico"
  tags: ["metodo", "ciencia", "logica"]

opciones_explicitas: ["Observación, Hipótesis, Experimentación, Conclusión", "Fe, Oración, Revelación, Dogma", "Tradición, Interpretación, Cita, Autoridad", "Intuición, Sentimiento, Imaginación, Creencia"]

respuesta: "Observación, Hipótesis, Experimentación, Conclusión"
tipo: mc

enunciado: "¿Cuál de las siguientes secuencias representa correctamente los pasos fundamentales del método científico moderno, el cual se opone al método de la autoridad dogmática?"

explicacion: |
  El método científico requiere un ciclo de observación y experimentación que permite validar o refutar hipótesis, alejándose de la aceptación pasiva de verdades preestablecidas por la tradición.
```

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

## Sección: el-gusto-estetico (20 preguntas)

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "intermedio"
  tags: ["gusto_estetico", "que_es_el_arte", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Mientras \"qué es el arte\" pregunta qué hace que algo cuente como arte, el gusto estético pregunta cómo se juzga si ese arte es bueno o malo."

pasos:
  - "Ver `../que-es-el-arte/`: son dos preguntas relacionadas pero distintas."

explicacion: |
  Verdadero: es la diferencia central entre estos dos temas hermanos.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "basico"
  tags: ["gusto_subjetivo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El dicho popular \"sobre gustos no hay nada escrito\" sugiere que el gusto estético es totalmente subjetivo, sin ningún criterio compartido posible."

pasos:
  - "La filosofía del gusto estético matiza esta idea, sin negarla del todo."

explicacion: |
  Verdadero: es el punto de partida popular que la filosofía del
  gusto pone en discusión.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "intermedio"
  tags: ["objetividad_del_gusto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Existe debate filosófico sobre si hay algún grado de objetividad en los juicios estéticos, más allá de la preferencia puramente personal."

pasos:
  - "Un amplio consenso histórico y cultural sobre qué obras son \"grandes\" es uno de los argumentos a favor de cierta objetividad."

explicacion: |
  Verdadero: no es un tema cerrado, hay argumentos en ambos sentidos.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["kant", "juicio_de_gusto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Kant propuso que el juicio estético (\"esto es bello\") se expresa como si fuera universal (esperamos que otros estén de acuerdo), aunque no se pueda demostrar con un argumento lógico como un teorema."

pasos:
  - "Es distinto de decir \"me gusta el chocolate\", donde no esperamos ese acuerdo universal."

explicacion: |
  Verdadero: es el argumento central de Kant sobre la peculiaridad
  del juicio estético.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["kant", "universalidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Según Kant, el juicio estético es subjetivo (nace de la reacción de cada persona) pero pretende validez universal — una tensión característica de lo estético."

pasos:
  - "Esa tensión entre origen subjetivo y pretensión universal es la idea central de Kant sobre el gusto."

explicacion: |
  Verdadero: es la formulación precisa de la propuesta kantiana sobre
  el juicio de gusto.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "intermedio"
  tags: ["kant", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cuando decimos \"esta pintura es bella\", normalmente no agregamos \"pero sólo para mí\", como sí haríamos con un gusto puramente personal (\"me gusta el chocolate, pero sólo a mí\")."

pasos:
  - "Es el ejemplo práctico que ilustra la pretensión de universalidad del juicio estético según Kant."

explicacion: |
  Verdadero: es la diferencia de lenguaje que Kant usó para ilustrar
  esta peculiaridad del juicio de gusto.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "intermedio"
  tags: ["gusto_personal", "juicio_de_valor"]

variables:
  afirmaciones: ["No me gusta esta pintura", "Esta pintura es técnicamente deficiente en su composición"]
  tipos: ["gusto personal", "juicio de valor artístico"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["gusto personal", "juicio de valor artístico"]

enunciado: "\"{afirmaciones[idx]}\" es un ejemplo de..."

pasos:
  - "El gusto personal no requiere justificación técnica; el juicio de valor sí admite argumentación sobre técnica, composición u originalidad."

explicacion: |
  Distinguir gusto personal de juicio de valor artístico es una
  herramienta central para analizar el arte con más precisión.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "intermedio"
  tags: ["gusto_personal", "juicio_de_valor"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una persona puede reconocer el valor artístico de una obra que, personalmente, no le gusta."

pasos:
  - "Gusto personal y juicio de valor técnico/artístico son evaluaciones distintas, que pueden no coincidir."

explicacion: |
  Verdadero: es la aplicación práctica de la distinción entre gusto
  personal y juicio de valor artístico.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "intermedio"
  tags: ["gusto_historico"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Lo que una época o cultura considera de \"buen gusto\" varía históricamente: hay estilos artísticos rechazados en su momento y luego consagrados, o al revés."

pasos:
  - "Es un argumento a favor de que el gusto tiene al menos un componente cultural e histórico, más allá de la reacción individual."

explicacion: |
  Verdadero: el carácter cambiante del gusto a lo largo de la
  historia es un dato relevante para este debate filosófico.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["gusto_historico", "cultura"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que el gusto varíe según la cultura o la época es un argumento a favor de que no es completamente individual ni completamente objetivo, sino que tiene también un componente social/cultural."

pasos:
  - "El gusto se sitúa entre la pura subjetividad individual y la objetividad total, con un componente cultural compartido."

explicacion: |
  Verdadero: es una tercera posición intermedia entre subjetividad
  pura y objetividad total.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["objetividad_del_gusto"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La filosofía del gusto estético concluye de forma unánime que el gusto es completamente arbitrario, sin ningún elemento compartido entre las personas."

pasos:
  - "Es justamente el punto que se matiza: hay debate sobre cuánto hay de objetivo/compartido y cuánto de individual, no una conclusión unánime de arbitrariedad total."

explicacion: |
  Falso: no hay consenso filosófico de que el gusto sea puramente
  arbitrario; el debate sigue abierto sobre su grado de objetividad.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["kant", "distincion"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Según Kant, el juicio estético se puede demostrar con un argumento lógico riguroso, igual que un teorema matemático."

pasos:
  - "Kant sostuvo lo contrario: el juicio estético no se puede demostrar así, aunque pretenda validez universal."

explicacion: |
  Falso: la peculiaridad kantiana es justamente que el juicio
  estético pretende universalidad SIN poder demostrarse
  lógicamente, a diferencia de un teorema.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["juicio_de_valor", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Decir \"esta obra tiene una composición desequilibrada y un uso pobre del color\" es un ejemplo de juicio de valor artístico, que admite argumentación técnica más allá del gusto personal."

pasos:
  - "A diferencia de \"no me gusta\", esta afirmación apela a criterios técnicos discutibles con argumentos."

explicacion: |
  Verdadero: es un ejemplo de juicio de valor que sí admite algún
  tipo de justificación técnica.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["el_gusto_estetico", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El gusto estético completa, junto con Qué es el arte y Lo bello, la subrama de estética de este mapa."

pasos:
  - "Ver `../que-es-el-arte/` y `../lo-bello/`: los tres son nodos hermanos con ángulos distintos de la experiencia estética."

explicacion: |
  Verdadero: es la relación entre los tres nodos hermanos de esta
  subrama.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["gusto_estetico", "que_es_el_arte"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "El debate sobre el gusto estético es completamente independiente de qué definición de arte se sostenga (imitación, expresión, institución, etc.)."

pasos:
  - "Cómo se juzga una obra puede depender de qué se considera relevante según cada definición (por ejemplo, la fidelidad de la imitación, o la originalidad institucional)."

explicacion: |
  Falso: la definición de arte que se sostenga puede influir en qué
  criterios se consideran relevantes al juzgar una obra.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["objetividad_del_gusto", "consenso"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Que ciertas obras (como algunas de Shakespeare o Miguel Ángel) gocen de un amplio consenso histórico y cultural sobre su calidad es uno de los argumentos usados a favor de cierto grado de objetividad en el gusto."

pasos:
  - "Si el gusto fuera completamente arbitrario, sería raro encontrar este tipo de consenso sostenido a través del tiempo y las culturas."

explicacion: |
  Verdadero: es uno de los argumentos filosóficos citados a favor de
  la objetividad parcial del gusto estético.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "intermedio"
  tags: ["juicio_de_valor", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Alguien puede decir \"reconozco que esta ópera es técnicamente extraordinaria, aunque personalmente no me gusta el género\", combinando un juicio de valor artístico con un gusto personal distinto."

pasos:
  - "Es exactamente la separación entre juicio de valor y gusto personal descrita en la teoría."

explicacion: |
  Verdadero: es un ejemplo cotidiano de cómo se pueden distinguir
  estas dos evaluaciones dentro de una misma persona.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "intermedio"
  tags: ["gusto_estetico", "metodo"]

enunciado: "Ordená los pasos para analizar si un comentario sobre una obra es gusto personal o juicio de valor artístico."
tipo: ordenar
opciones_explicitas:
  - "Identificar la afirmación concreta hecha sobre la obra"
  - "Revisar si se apela a una preferencia sin argumento (\"no me gusta\") o a un criterio técnico (\"la composición es débil\")"
  - "Si hay criterio técnico, evaluar si ese criterio es defendible con argumentos"
  - "Clasificar la afirmación como gusto personal o juicio de valor según esa evaluación"
respuesta_orden: ["Identificar la afirmación concreta hecha sobre la obra", "Revisar si se apela a una preferencia sin argumento (\"no me gusta\") o a un criterio técnico (\"la composición es débil\")", "Si hay criterio técnico, evaluar si ese criterio es defendible con argumentos", "Clasificar la afirmación como gusto personal o juicio de valor según esa evaluación"]
explicacion: |
  El análisis va de identificar la afirmación a distinguir si apela a
  preferencia sin fundamento o a un criterio técnico argumentable.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["gusto_estetico", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El gusto estético es un tema donde se cruzan la subjetividad individual, el componente cultural/histórico compartido, y la pregunta filosófica sobre si hay algún grado de objetividad posible."

pasos:
  - "Es un tema que no se resuelve con una sola respuesta simple, sino que integra varias perspectivas."

explicacion: |
  Verdadero: es la síntesis de las distintas dimensiones exploradas
  en este tema.
```

```
metadata:
  materia: "filosofia"
  tema: "el_gusto_estetico"
  nivel: "avanzado"
  tags: ["gusto_estetico", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al comentar una obra de arte, conviene distinguir entre \"no me gusta\" (gusto personal, válido sin justificación) y \"esto está mal hecho\" (juicio de valor, que exige argumentar por qué)."

pasos:
  - "Es la aplicación práctica de la distinción central de este tema al momento de hablar sobre arte."

explicacion: |
  Verdadero: es la aplicación concreta de este tema en cualquier
  conversación cotidiana sobre arte.
```

## Sección: epistemologia (20 preguntas)

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "basico"
  tags: ["epistemologia", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La epistemología es la rama de Filosofía que estudia qué es saber algo, cómo se justifica una creencia, y qué distingue el conocimiento de la opinión."

pasos:
  - "También se la llama \"teoría del conocimiento\"."

explicacion: |
  Verdadero: es la definición central de esta rama de la filosofía.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["definicion_clasica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Desde Platón, el conocimiento se definió como creencia verdadera justificada: hay que creerlo, tiene que ser verdad, y tiene que estar justificado."

pasos:
  - "Las tres condiciones deben cumplirse a la vez, ninguna alcanza por sí sola."

explicacion: |
  Verdadero: es la definición clásica de conocimiento en
  epistemología.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "basico"
  tags: ["definicion_clasica", "creencia"]

variables:
  n: uno_de([1, 1])

respuesta: "creencia"
tipo: mc
opciones_explicitas: ["creencia", "verdad", "justificación"]

enunciado: "La condición que exige que la persona realmente crea en la afirmación (no basta con que sea verdad si nadie la cree) se llama..."

pasos:
  - "Es una de las tres condiciones de la definición clásica de conocimiento."

explicacion: |
  La condición de creencia exige que el sujeto sostenga efectivamente
  la afirmación.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["definicion_clasica", "justificacion"]

variables:
  n: uno_de([1, 1])

respuesta: "justificación"
tipo: mc
opciones_explicitas: ["creencia", "verdad", "justificación"]

enunciado: "La condición que exige tener razones sólidas para creer algo, no basta con acertar por casualidad, se llama..."

pasos:
  - "Adivinar correctamente sin argumentos no cumple esta condición."

explicacion: |
  La justificación es lo que distingue un acierto casual de un
  conocimiento genuino.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["justificacion", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Adivinar correctamente el resultado de un partido de fútbol, sin ningún argumento, cuenta como conocimiento según la definición clásica, porque el resultado terminó siendo verdadero."

pasos:
  - "Falta la justificación: acertar por casualidad no es lo mismo que tener razones sólidas para creer algo."

explicacion: |
  Falso: sin justificación, no se cumple la definición clásica de
  conocimiento, aunque la creencia haya resultado verdadera.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["opinion", "conocimiento", "diferenciacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una opinión puede ser verdadera o falsa; lo que la distingue del conocimiento es la falta de justificación sólida detrás de ella."

pasos:
  - "\"Creo que va a llover\" (sin evidencia) es opinión; con el pronóstico meteorológico como respaldo, se acerca más al conocimiento."

explicacion: |
  Verdadero: la justificación (no sólo la verdad) es lo que separa
  opinión de conocimiento.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["racionalismo"]

variables:
  n: uno_de([1, 1])

respuesta: "racionalismo"
tipo: mc
opciones_explicitas: ["racionalismo", "empirismo"]

enunciado: "La corriente que sostiene que el conocimiento viene principalmente de la razón, independiente de la experiencia sensorial, se llama..."

pasos:
  - "Descartes es un referente clásico de esta corriente."

explicacion: |
  El racionalismo prioriza la razón por sobre la experiencia como
  fuente de conocimiento.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["empirismo"]

variables:
  n: uno_de([1, 1])

respuesta: "empirismo"
tipo: mc
opciones_explicitas: ["racionalismo", "empirismo"]

enunciado: "La corriente que sostiene que el conocimiento viene principalmente de la experiencia sensorial se llama..."

pasos:
  - "Locke y Hume son referentes clásicos de esta corriente."

explicacion: |
  El empirismo prioriza la experiencia sensorial por sobre la razón
  pura como fuente de conocimiento.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "avanzado"
  tags: ["racionalismo", "empirismo", "neutralidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Racionalismo y empirismo son dos tradiciones filosóficas con argumentos propios que responden a la misma pregunta, sin que ninguna de las dos sea \"la correcta\" de forma objetiva."

pasos:
  - "Ver `../historia-de-la-filosofia-y-corrientes/`: es el mismo criterio de neutralidad aplicado a corrientes de pensamiento."

explicacion: |
  Verdadero: el objetivo es describir qué sostiene cada corriente, no
  evaluar cuál tiene razón.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["racionalismo", "autores"]

variables:
  n: uno_de([1, 1])

respuesta: "Descartes"
tipo: completar

enunciado: "El filósofo francés considerado referente clásico del racionalismo se apellida..."

pasos:
  - "Descartes es el autor central de esta corriente epistemológica."

explicacion: |
  Descartes es autor representativo del racionalismo.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "avanzado"
  tags: ["empirismo", "autores"]

variables:
  autores: ["Locke", "Hume"]
  idx: uno_de([0, 1])

respuesta: verdadero
tipo: vf

enunciado: "{autores[idx]} es considerado un referente clásico del empirismo."

pasos:
  - "Ambos autores son referentes de esta corriente epistemológica."

explicacion: |
  Verdadero: Locke y Hume son los referentes clásicos más citados del
  empirismo.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "avanzado"
  tags: ["gettier"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El filósofo Edmund Gettier mostró casos donde alguien tiene una creencia verdadera y justificada, pero por una cadena de casualidades que hace dudoso llamarlo \"conocimiento\"."

pasos:
  - "Es un problema abierto de la filosofía contemporánea sobre los límites de la definición clásica."

explicacion: |
  Verdadero: el problema de Gettier muestra que la definición clásica
  (creencia verdadera justificada) no cierra completamente la
  pregunta de qué es el conocimiento.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "avanzado"
  tags: ["gettier", "definicion_clasica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Aunque la definición de \"creencia verdadera justificada\" es útil y clásica, el problema de Gettier muestra que no resuelve completamente qué es el conocimiento en todos los casos posibles."

pasos:
  - "Filósofos contemporáneos siguen debatiendo cómo ajustar o complementar esa definición."

explicacion: |
  Verdadero: es un tema abierto de la epistemología contemporánea,
  mencionado brevemente en este nivel.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["definicion_clasica", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "\"Sé que el agua hierve a 100°C al nivel del mar\" cumple las tres condiciones clásicas: lo creo, es verdad, y tengo justificación (evidencia científica repetida)."

pasos:
  - "Cumplir las tres condiciones a la vez es lo que la definición clásica exige para llamarlo conocimiento."

explicacion: |
  Verdadero: es un ejemplo típico donde las tres condiciones se
  cumplen simultáneamente.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["definicion_clasica", "verdad"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Según la definición clásica, se puede \"saber\" algo que resulta ser falso, siempre que se crea con firmeza y se tenga alguna justificación."

pasos:
  - "La condición de verdad es una de las tres exigidas: sin que la afirmación sea efectivamente verdadera, no puede llamarse conocimiento."

explicacion: |
  Falso: aunque haya creencia firme y algo de justificación, si el
  contenido es falso, no cumple la definición clásica de
  conocimiento.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "avanzado"
  tags: ["epistemologia", "ciudadania_digital"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La pregunta epistemológica de qué justifica una creencia es la misma que se aplica, en la práctica, al verificar si una noticia es confiable."

pasos:
  - "Ver `../../ciudadania-digital/verificacion-de-una-noticia/`: es la misma pregunta de fondo formalizada en Filosofía y aplicada en un contexto concreto."

explicacion: |
  Verdadero: la epistemología da el marco teórico detrás de una
  práctica muy concreta y cotidiana.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "avanzado"
  tags: ["racionalismo", "empirismo", "practica"]

variables:
  posturas: ["sostener que 2+2=4 se conoce por puro razonamiento, sin necesidad de experimentar", "sostener que sólo se puede saber que el fuego quema por haberlo experimentado"]
  corrientes: ["racionalismo", "empirismo"]
  idx: uno_de([0, 1])

respuesta: corrientes[idx]
tipo: mc
opciones_explicitas: ["racionalismo", "empirismo"]

enunciado: "La postura de \"{posturas[idx]}\" es más cercana al..."

pasos:
  - "Si la fuente del conocimiento es la razón pura, es racionalismo. Si es la experiencia sensorial, es empirismo."

explicacion: |
  Cada ejemplo ilustra una de las dos corrientes clásicas sobre el
  origen del conocimiento.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "intermedio"
  tags: ["epistemologia", "metodo"]

enunciado: "Ordená los pasos para evaluar, según la definición clásica, si una afirmación cuenta como conocimiento."
tipo: ordenar
opciones_explicitas:
  - "Verificar si la persona efectivamente cree la afirmación"
  - "Verificar si la afirmación es efectivamente verdadera"
  - "Verificar si hay razones sólidas (justificación) para creerla"
  - "Concluir que es conocimiento sólo si se cumplen las tres condiciones a la vez"
respuesta_orden: ["Verificar si la persona efectivamente cree la afirmación", "Verificar si la afirmación es efectivamente verdadera", "Verificar si hay razones sólidas (justificación) para creerla", "Concluir que es conocimiento sólo si se cumplen las tres condiciones a la vez"]
explicacion: |
  El proceso revisa cada una de las tres condiciones clásicas antes
  de concluir si algo cuenta como conocimiento genuino.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "avanzado"
  tags: ["epistemologia", "logica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La epistemología es una rama distinta de la lógica: depende de `../logica-proposicional/` como base formal general, pero estudia una pregunta distinta (qué es el conocimiento), no la validez de razonamientos."

pasos:
  - "Ver `../dependencias.md`: por eso epistemología cuelga de `FI1` como hermana de `FI2` (validez), no como continuación de esa cadena."

explicacion: |
  Verdadero: son ramas clásicas distintas de Filosofía, aunque
  compartan el mismo punto de partida lógico.
```

```
metadata:
  materia: "filosofia"
  tema: "epistemologia"
  nivel: "avanzado"
  tags: ["epistemologia", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes de aceptar una afirmación como cierta, conviene preguntarse qué justificación real la respalda, en vez de aceptarla sólo porque parece verdadera o la repite mucha gente."

pasos:
  - "Es la aplicación práctica directa del criterio de justificación epistemológica en la vida cotidiana."

explicacion: |
  Verdadero: exigir justificación antes de aceptar una afirmación es
  la aplicación concreta de este tema fuera del ámbito puramente
  filosófico.
```

## Sección: etica-como-rama-propia (20 preguntas)

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "basico"
  tags: ["etica", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ética es la rama de Filosofía que estudia qué hace que una acción sea correcta o incorrecta, qué es una vida buena, y cómo se justifican los juicios morales."

pasos:
  - "Es una de las 5 ramas clásicas de Filosofía."

explicacion: |
  Verdadero: es la definición central de esta rama filosófica.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["etica_normativa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ética normativa busca criterios generales para evaluar si una acción es correcta, preguntando cómo DEBERÍA actuarse, no cómo la gente de hecho actúa."

pasos:
  - "Es distinta de un estudio descriptivo sobre cómo se comporta la gente."

explicacion: |
  Verdadero: es la pregunta central de la ética normativa.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["etica_descriptiva", "etica_normativa", "diferenciacion"]

variables:
  afirmaciones: ["La mayoría de la gente en tal cultura considera aceptable X", "X es correcto porque respeta la dignidad de las personas"]
  tipos: ["ética descriptiva", "ética normativa"]
  idx: uno_de([0, 1])

respuesta: tipos[idx]
tipo: mc
opciones_explicitas: ["ética descriptiva", "ética normativa"]

enunciado: "\"{afirmaciones[idx]}\" es un ejemplo de..."

pasos:
  - "Describir qué cree la gente es descriptiva; argumentar qué debería considerarse correcto es normativa."

explicacion: |
  La ética descriptiva reporta creencias reales; la normativa
  argumenta sobre qué debería ser correcto.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["etica_descriptiva"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ética descriptiva es más cercana a un estudio empírico (sociológico o antropológico) que a la filosofía normativa, porque describe cómo actúa la gente de hecho."

pasos:
  - "No pregunta qué DEBERÍA ser correcto, sino qué SE CONSIDERA correcto en distintas culturas o momentos."

explicacion: |
  Verdadero: es la razón por la que se distingue claramente de la
  ética normativa, que sí es un análisis propiamente filosófico.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["preguntas_centrales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una de las tres preguntas centrales que organizan las corrientes normativas es \"¿qué hace que una acción sea correcta?\", con foco en la acción misma o sus consecuencias."

pasos:
  - "Esta pregunta da lugar a corrientes como el utilitarismo y la deontología."

explicacion: |
  Verdadero: es una de las tres preguntas centrales mencionadas en la
  teoría.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["preguntas_centrales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Otra de las tres preguntas centrales es \"¿qué hace que una persona sea buena?\", con foco en el carácter más que en acciones puntuales."

pasos:
  - "Esta pregunta da lugar específicamente a la ética de la virtud."

explicacion: |
  Verdadero: es la segunda pregunta central mencionada en la teoría.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["preguntas_centrales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La tercera pregunta central es \"¿cómo se llega a un acuerdo sobre reglas morales compartidas?\", con foco en el contrato social."

pasos:
  - "Esta pregunta da lugar específicamente al contractualismo."

explicacion: |
  Verdadero: es la tercera pregunta central mencionada en la teoría.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "basico"
  tags: ["ramas_clasicas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Las 5 ramas clásicas de Filosofía son: metafísica, epistemología, ética, lógica y estética."

pasos:
  - "Ver `../ser-ontologia/` y `../epistemologia/`: es la misma clasificación ya mencionada en esos temas."

explicacion: |
  Verdadero: es la clasificación clásica de las áreas centrales de la
  disciplina.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["metaetica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La metaética pregunta algo más abstracto todavía que la ética normativa: qué significa, en general, que algo sea \"moralmente correcto\", y si los juicios morales son objetivos o subjetivos."

pasos:
  - "Es un tercer nivel de análisis ético, junto a la normativa y la descriptiva, mencionado brevemente sin profundizar."

explicacion: |
  Verdadero: la metaética es el nivel más abstracto de los tres,
  cuestionando la naturaleza misma de los juicios morales.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["etica_descriptiva", "etica_normativa", "metaetica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Ética descriptiva, ética normativa y metaética son tres niveles distintos de análisis dentro de la rama de la ética."

pasos:
  - "Cada nivel responde una pregunta distinta: qué cree la gente, qué debería considerarse correcto, y qué significan en general los juicios morales."

explicacion: |
  Verdadero: es la clasificación completa de niveles dentro de la
  ética como rama filosófica.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["neutralidad"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al presentar las corrientes normativas (utilitarismo, deontología, etc.), el objetivo es describir qué sostiene cada una, no evaluar cuál es \"la correcta\"."

pasos:
  - "Mismo criterio de neutralidad ya aplicado en `../epistemologia/`, `../existencia/` y `../realidad/`."

explicacion: |
  Verdadero: son tradiciones filosóficas con argumentos sólidos
  propios, sin consenso definitivo entre filósofos.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["etica_como_rama_propia", "prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Este tema da el marco general de las tres preguntas centrales antes de que los cuatro temas siguientes (utilitarismo, deontología, ética de la virtud, contractualismo) bajen a corrientes normativas específicas."

pasos:
  - "Ver `../utilitarismo/`, `../deontologia/`, `../etica-de-la-virtud/`, `../contractualismo/`: los cuatro nodos hermanos dependen de éste."

explicacion: |
  Verdadero: es el prerrequisito directo de las cuatro corrientes
  normativas específicas de la subrama.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["preguntas_centrales", "practica"]

variables:
  preguntas: ["¿qué hace correcta a una acción?", "¿qué hace buena a una persona?", "¿cómo se acuerdan reglas compartidas?"]
  focos: ["la acción o sus consecuencias", "el carácter", "el contrato social"]
  idx: uno_de([0, 1, 2])

respuesta: focos[idx]
tipo: mc
opciones_explicitas: ["la acción o sus consecuencias", "el carácter", "el contrato social"]

enunciado: "La pregunta \"{preguntas[idx]}\" tiene como foco principal..."

pasos:
  - "Cada una de las tres preguntas centrales organiza un foco distinto de análisis ético."

explicacion: |
  Cada pregunta central corresponde a un foco de análisis distinto
  dentro de la ética normativa.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["etica_normativa", "metodo"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "La ética normativa se resuelve completamente con una encuesta sobre qué considera correcto la mayoría de la gente."

pasos:
  - "Eso sería ética descriptiva; la normativa argumenta filosóficamente sobre qué DEBERÍA considerarse correcto, más allá de lo que la mayoría opine."

explicacion: |
  Falso: la ética normativa no se resuelve con estadísticas de
  opinión, requiere argumentación filosófica propia.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["etica", "vida_buena"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Además de evaluar acciones puntuales, la ética también pregunta qué es una vida \"buena\" en un sentido más amplio."

pasos:
  - "Es una de las preguntas centrales mencionadas en la definición general de ética."

explicacion: |
  Verdadero: la ética no se limita a juzgar actos aislados, también
  aborda el sentido general de una vida bien vivida.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["corrientes_normativas"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cada corriente normativa específica (utilitarismo, deontología, ética de la virtud, contractualismo) responde de forma distinta a una o varias de las tres preguntas centrales de la ética normativa."

pasos:
  - "No todas responden exactamente la misma pregunta de la misma manera, aunque compartan el mismo objetivo general (evaluar qué es correcto)."

explicacion: |
  Verdadero: la diversidad de corrientes surge justamente de dar
  distintas respuestas a las mismas preguntas fundamentales.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["etica", "logica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ética es una rama distinta de la lógica: depende de `../logica-proposicional/` como base formal general del mapa, pero estudia una pregunta distinta (qué es correcto), no la validez de razonamientos."

pasos:
  - "Ver `../dependencias.md`: por eso cuelga de `FI1` como hermana de las otras ramas clásicas, no como continuación de la cadena de razonamiento."

explicacion: |
  Verdadero: cada rama clásica de Filosofía tiene su propio objeto de
  estudio, aunque compartan el mismo punto de partida lógico en el
  mapa.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "intermedio"
  tags: ["etica_como_rama_propia", "metodo"]

enunciado: "Ordená los pasos para analizar una acción usando el marco de la ética normativa."
tipo: ordenar
opciones_explicitas:
  - "Identificar la acción concreta a evaluar"
  - "Determinar cuál de las tres preguntas centrales aplica mejor al caso (consecuencias, carácter, o acuerdo social)"
  - "Aplicar el criterio correspondiente a esa pregunta"
  - "Concluir si la acción sería correcta o incorrecta según ese criterio"
respuesta_orden: ["Identificar la acción concreta a evaluar", "Determinar cuál de las tres preguntas centrales aplica mejor al caso (consecuencias, carácter, o acuerdo social)", "Aplicar el criterio correspondiente a esa pregunta", "Concluir si la acción sería correcta o incorrecta según ese criterio"]
explicacion: |
  El análisis va de identificar la acción concreta a elegir el marco
  de las tres preguntas centrales para evaluarla.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["etica_como_rama_propia", "contexto"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Antes del agregado v2.4 del MAPA, Filosofía sólo tenía nodos de lógica (`FI1`/`FI2`), sin ningún nodo dedicado específicamente a ética como rama propia."

pasos:
  - "Este tema cierra esa brecha, junto con metafísica y estética."

explicacion: |
  Verdadero: es el contexto histórico de por qué este nodo se agregó
  al mapa en esa versión.
```

```
metadata:
  materia: "filosofia"
  tema: "etica_como_rama_propia"
  nivel: "avanzado"
  tags: ["etica_como_rama_propia", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Distinguir ética descriptiva de normativa es útil para no confundir \"así se hacen las cosas habitualmente\" con \"así deberían hacerse las cosas\", dos afirmaciones muy distintas."

pasos:
  - "Es un error común confundir lo habitual (descriptivo) con lo correcto (normativo)."

explicacion: |
  Verdadero: es la aplicación práctica más directa de esta distinción
  fuera del ámbito puramente filosófico.
```

