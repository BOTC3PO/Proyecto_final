# Civica — Sufragio restringido universal (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El sufragio censitario

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["historia", "derechos"]

respuesta: "varones"
tipo: "mc"
opciones_explicitas: ["varones", "mujeres", "todos los ciudadanos", "propietarios únicamente"]

enunciado: "En la etapa del sufragio restringido en Argentina, el derecho al voto estaba limitado únicamente a los ___."

explicacion: |
  Durante gran parte del siglo XIX y principios del XX, el sufragio era censitario, lo que significa que solo podían votar varones que cumplieran con ciertos requisitos de propiedad o renta.
```

### 2 — El sistema de elusión de la voluntad

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["fraude", "historia"]

variables:
  escenario: uno_de([["el fraude mediante la falsificación de actas", "el control de la población por parte de los caudillos"], ["la manipulación de los padrones", "el uso de la fuerza física en los centros de votación"], ["la compra de votos", "la coacción de los votantes analfabetos"]])

respuesta: escenario[0]
tipo: "mc"
opciones_explicitas: ["el fraude mediante la falsificación de actas", "la manipulación de los padrones", "la compra de votos"]

enunciado: "Antes de la Ley Sáenz Peña, el sistema electoral argentino se caracterizaba por la existencia de ___."

explicacion: |
  El sistema de fraude electoral era una práctica común donde el poder de turno manipulaba los resultados para asegurar la continuidad, impidiendo que la voluntad popular se expresara.
```

### 3 — La Ley Sáenz Peña

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["leyes", "democracia"]

respuesta: "1912"
tipo: "completar"
respuestas_validas:
  - "1912"

enunciado: "La Ley de Sufragio Universal, Masculino, Secreto y Obligatorio en Argentina fue sancionada en el año ___."

explicacion: |
  La Ley 8.871, sancionada en 1912, fue el hito que permitió el paso del fraude al voto secreto, sentando las bases de la democracia moderna en el país.
```

### 4 — Evolución del concepto de votante

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "avanzado"
  tags: ["derechos_mujeres", "evolución"]

respuesta: "universal"
tipo: "mc"
opciones_explicitas: ["restringido", "universal", "censitario", "indirecto"]

enunciado: "Cuando se eliminaron las restricciones de género y propiedad, el sufragio pasó de ser restringido a ser ___."

explicacion: |
  El sufragio universal implica que todos los ciudadanos adultos tienen el derecho de votar, sin distinción de sexo, riqueza o nivel de instrucción.
```

### 5 — El camino a la democracia

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["secuencia", "historia"]

tipo: "ordenar"
opciones_explicitas: ["voto censitario", "Ley Sáenz Peña", "voto femenino"]
respuesta_orden: ["voto censitario", "Ley Sáenz Peña", "voto femenino"]

enunciado: "Ordene cronológicamente los hitos del sistema electoral argentino:"

explicacion: |
  Primero existía el voto restringido (censitario), luego se instauró el voto universal masculino con la Ley Sáenz Peña (1912) y finalmente se consolidó la universalidad con la sanción de la Ley de Voto Femenino (1947/1951).
```

### 6 — La Ley Sáenz Peña

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["historia", "voto_masculino"]

respuesta: "1912"
tipo: completar
respuestas_validas:
  - "1912"

enunciado: "La Ley Sáenz Peña, que estableció el voto universal, secreto y obligatorio para los varones, fue sancionada en el año ___."

explicacion: |
  La Ley 8.871 de 1912 permitió que la ciudadanía masculina pudiera votar de manera efectiva, terminando con el fraude electoral de la época.
```

### 7 — El sufragio femenino en Argentina

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["derechos_mujeres", "historia"]

respuesta: "1947"
tipo: mc
opciones_explicitas: ["1947", "1951", "1972", "1991"]

enunciado: "La ley que garantizó el derecho de las mujeres argentinas a votar y ser elegidas fue sancionada en el año ___ mediante la Ley 13.010."

explicacion: |
  Aunque el debate venía de décadas atrás, fue en 1947 cuando se promulgó la ley que permitió el voto femenino en Argentina.
```

### 8 — Evolución del derecho al voto

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["cronologia", "hitos"]

respuesta_orden: ["Ley Sáenz Peña", "Sufragio Femenino", "Voto Joven"]
tipo: ordenar
opciones_explicitas: ["Ley Sáenz Peña", "Sufragio Femenino", "Voto Joven"]

enunciado: "Ordená cronológicamente los hitos de ampliación del sufragio en Argentina, desde el más antiguo al más reciente:"

explicacion: |
  1. Ley Sáenz Peña (1912) - Voto masculino.
  2. Sufragio Femenino (1947) - Voto de las mujeres.
  3. Voto Joven (2012) - Voto opcional de jóvenes de 16 a 17 años.
```

### 9 — El voto de los jóvenes

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["voto_joven", "derechos"]

respuesta: "opcional"
tipo: mc
opciones_explicitas: ["obligatorio", "opcional", "prohibido", "por sorteo"]

enunciado: "Según la ley vigente desde 2012, el voto para los ciudadanos que tienen entre 16 y 17 años es de carácter ___."

explicacion: |
  La Ley de Ciudadanía Argentina permite que los jóvenes de 16 y 17 años ejerzan su derecho de manera opcional, mientras que a partir de los 18 es obligatorio.
```

### 10 — Características del voto de 1912

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["ley_saenz_pena", "caracteristicas"]

respuesta: "secreto"
tipo: mc
opciones_explicitas: ["secreto", "público", "electivo", "limitado"]

enunciado: "Un pilar fundamental de la Ley Sáenz Peña para evitar la coacción y el fraude fue que el voto fuera ___."

explicacion: |
  El carácter secreto del voto fue la herramienta principal para garantizar la libertad de elección de los ciudadanos y evitar presiones de los patrones o caudillos locales.
```

### 11 — Concepto de sufragio universal

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["derechos", "voto"]

respuesta: "universal"
tipo: completar
respuestas_validas:
  - "universal"
  - "universalidad"

enunciado: "Cuando se establece que todos los ciudadanos adultos tienen derecho al voto sin distinción de raza, género o nivel socioeconómico, se está aplicando el sufragio _______."

explicacion: |
  El sufragio universal garantiza que el derecho al voto sea un derecho humano fundamental que no depende de condiciones materiales o características personales.
```

### 12 — Restricciones del sufragio

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["derechos", "voto"]

opciones_explicitas: ["Género", "Propiedad", "Nivel educativo", "Todas las anteriores"]
respuesta: "Todas las anteriores"
tipo: mc

enunciado: "En un sistema de sufragio universal, ¿cuál de estas características NO debe ser una restricción para votar?"

explicacion: |
  El sufragio universal elimina las barreras históricas como el género, la propiedad de tierras o el nivel de instrucción para asegurar la participación de toda la población adulta.
```

### 13 — Comparación de sistemas

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["comparativa", "voto"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["En un modelo donde solo votan quienes poseen propiedades...", "restringido"], ["En un modelo donde votan todos los ciudadanos adultos...", "universal"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["restringido", "universal"]

enunciado: "Analiza el siguiente caso: {escenarios[escenario_idx][0]} ¿Qué tipo de sufragio se está aplicando?"

explicacion: |
  Si existen condiciones (como la propiedad) para ejercer el voto, el sufragio es restringido. Si no hay tales condiciones, es universal.
```

### 14 — Evolución histórica

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["historia", "derechos"]

respuesta: "democracia"
tipo: completar
respuestas_validas:
  - "democracia"

enunciado: "La transición del sufragio restringido al sufragio universal es un paso fundamental para la consolidación de una _______ plena."

explicacion: |
  La democracia moderna requiere que la soberanía popular se ejerza mediante el voto de toda la ciudadanía, no solo de una élite.
```

### 15 — Identificación de premisas

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "avanzado"
  tags: ["logica", "derechos"]

respuesta: falso
tipo: vf
enunciado: "El sufragio universal implica que el derecho al voto puede ser limitado por el nivel de instrucción o alfabetismo del ciudadano."

explicacion: |
  Falso. El sufragio universal, por definición, prohíbe cualquier distinción basada en capacidades intelectuales, nivel educativo o cualquier otra condición no legal/administrativa básica.
```

### 16 — El impacto de la inclusión

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["democracia", "sufragio"]

respuesta: "profundización"
tipo: completar
respuestas_validas:
  - "profundización"

enunciado: "La ampliación del sufragio, pasando de un modelo restringido a uno universal, se considera un indicador clave de la _______ democrática."

explicacion: |
  Al incluir a más ciudadanos en el proceso de decisión, el sistema deja de ser una oligarquía o una democracia censitaria para convertirse en una democracia más representativa y profunda.
```

### 17 — Representación política

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["representacion", "derechos"]

respuesta: "tener más personas con voz política formal en las decisiones colectivas"
tipo: mc
opciones_explicitas: ["reducir la participación ciudadana", "tener más personas con voz política formal en las decisiones colectivas", "centralizar el poder en una sola élite", "eliminar la necesidad de leyes"]

enunciado: "Si comparamos un sistema de sufragio restringido con uno universal, el principal cambio en la legitimidad del Estado es ___."

explicacion: |
  La democracia se profundiza cuando la voluntad popular no es un privilegio de una minoría económica o social, sino un derecho que integra la diversidad de la sociedad en la toma de decisiones.
```

### 18 — Elementos de la democracia moderna

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["conceptos", "sufragio"]

respuesta: "universal"
tipo: mc
opciones_explicitas: ["limitado", "universal", "censitario", "indirecto"]

enunciado: "Cuando el derecho al voto se extiende a todos los ciudadanos adultos sin distinción de sexo, renta o instrucción, hablamos de sufragio _______."

explicacion: |
  El sufragio universal es el pilar que permite que la soberanía popular sea real y no una ficción controlada por grupos de interés.
```

### 19 — Evolución histórica

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "avanzado"
  tags: ["historia", "derechos"]

respuesta_orden: ["Sufragio censitario", "Sufragio masculino", "Sufragio universal"]
tipo: ordenar
opciones_explicitas: ["Sufragio censitario", "Sufragio masculino", "Sufragio universal"]

enunciado: "Ordene cronológicamente los modelos de sufragio según la evolución histórica de la profundización democrática:"

explicacion: |
  La historia política muestra una expansión gradual: primero se limitó por propiedad (censitario), luego se excluyó a las mujeres (masculino) y finalmente se buscó la inclusión total (universal).
```

### 20 — Consecuencia de la exclusión

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["legitimidad", "participacion"]

respuesta: 9
tipo: completar
tolerancia_abs: 0

enunciado: "Si en un sistema de sufragio restringido solo puede votar el 10% de la población, y en uno universal vota el 90%, ¿cuántas veces más personas tienen voz política en el segundo modelo respecto al primero? (Indique el número entero)"

pasos:
  - "Identificar el porcentaje de participación en ambos modelos."
  - "Dividir el porcentaje del sufragio universal por el del sufragio restringido."

explicacion: |
  En este ejemplo hipotético, el sufragio universal permite que la participación sea 9 veces mayor (90/10 = 9), lo que demuestra una expansión masiva de la representatividad.
```

### 21 — El sufragio en la Constitución de 1853

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["historia", "derechos"]

variables:
  datos: [["Constitución de 1853", "restringido"], ["Ley de Ciudadanía (1892)", "restringido"]]
  idx: uno_de([0, 1])

enunciado: "En el contexto de la Constitución de 1853, el sufragio era de carácter ___."

opciones_explicitas: ["universal", "restringido", "proporcional"]
respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Durante la primera etapa de la organización nacional, el sufragio era indirecto y restringido, no cumpliendo con los estándares de universalidad modernos.
```

### 22 — Cronología de la ampliación del voto

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["historia", "ordenamiento"]

variables:
  hito: uno_de([["Ley Sáenz Peña", "1912"], ["Voto Femenino (Ley 14.243)", "1947"], ["Sufragio Universal (Ley 18.640)", "1972"]])
  idx: uno_de([0, 1, 2])

enunciado: "Ordena cronológicamente los hitos del sufragio en Argentina, partiendo desde el más antiguo al más reciente."

opciones_explicitas: ["Ley Sáenz Peña", "Voto Femenino (Ley 14.243)", "Sufragio Universal (Ley 18.640)"]
respuesta_orden: ["Ley Sáenz Peña", "Voto Femenino (Ley 14.243)", "Sufragio Universal (Ley 18.640)"]
tipo: ordenar

explicacion: |
  La evolución fue: 1912 (Ley Sáenz Peña - voto secreto y obligatorio), 1947 (Voto Femenino) y 1972 (Ampliación definitiva de la base electoral).
```

### 23 — El año de la Ley Sáenz Peña

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["fechas", "leyes"]

enunciado: "La implementación del voto universal, secreto y obligatorio en Argentina ocurrió en el año ___."

respuestas_validas:
  - "1912"
respuesta: "1912"
tipo: completar

explicacion: |
  La Ley 8.830, conocida como Ley Sáenz Peña, fue sancionada en 1912 para terminar con el fraude electoral.
```

### 24 — Carácter del voto en 1853

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "Si comparamos el sistema de 1853 con el de 1912, el primero era de tipo ___."

opciones_explicitas: ["restringido", "universal"]
respuesta: "restringido"
tipo: mc

explicacion: |
  El sistema de 1853 era restringido (por género, alfabetismo y propiedad en la práctica), mientras que 1912 introdujo el carácter universal/secreto.
```

### 25 — El hito de 1947

```
metadata:
  materia: "civica"
  tema: "sufragio_restringido_universal"
  nivel: "intermedio"
  tags: ["derechos_mujer", "historia"]

enunciado: "El hito histórico que permitió el ejercicio del voto por parte de las mujeres en Argentina fue el Voto Femenino, sancionado en el año ___."

respuesta: "1947"
tipo: completar

respuestas_validas:
  - "1947"
explicacion: |
  La Ley 14.243 sancionada en 1947 garantizó la participación política de las mujeres en el sufragio argentino.
```
