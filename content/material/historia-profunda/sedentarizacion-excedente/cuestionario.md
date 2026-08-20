# Historia Profunda — Sedentarizacion excedente (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El fin del nomadismo

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["sedentarizacion", "agricultura"]

respuesta: "sedentarios"
tipo: completar
respuestas_validas:
  - "sedentarios"

enunciado: "Al depender de la agricultura y la domesticación de plantas, los grupos humanos dejaron de ser nómadas para convertirse en ___."

explicacion: |
  La capacidad de producir alimento de forma controlada permitió que los grupos humanos se establecieran en un lugar fijo, dando inicio a la sedentarización.
```

### 2 — Causas de la sedentarización

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["causas", "agricultura"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["El cultivo de cereales permitió el asentamiento", "la agricultura"], ["La domesticación de plantas impulsó", "la agricultura"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["la caza", "la agricultura", "la recolección", "la migración"]

enunciado: "{escenarios[escenario_idx][0]} fue el motor principal de la sedentarización."

explicacion: |
  El paso de una economía de subsistencia basada en la recolección a una basada en la producción agrícola permitió la permanencia en un territorio.
```

### 3 — El impacto del excedente

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["excedente", "especializacion"]

respuesta: "especialización"
tipo: completar
respuestas_validas:
  - "especialización"
  - "especializacion"

enunciado: "La generación de un ___ agrícola permitió que no todos los individuos tuvieran que dedicarse a la producción de alimentos, dando lugar a la ___ del trabajo."

explicacion: |
  El excedente alimentario permitió que surgieran otros roles sociales (artesanos, guerreros, sacerdotes), rompiendo la igualdad de la economía de subsistencia.
```

### 4 — Secuencia del proceso neolítico

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["procesos", "ordenar"]

respuesta_orden: ["Domesticación de plantas", "Producción de excedentes", "Asentamientos permanentes", "Especialización social"]
tipo: ordenar
opciones_explicitas: ["Domesticación de plantas", "Producción de excedentes", "Asentamientos permanentes", "Especialización social"]

enunciado: "Ordena cronológicamente los procesos que permitieron el surgimiento de las primeras civilizaciones:"

explicacion: |
  Primero se domestican las especies, lo que genera comida de sobra (excedente), lo que permite quedarse en un lugar (sedentarismo) y finalmente permite que la sociedad se divida en clases o profesiones.
```

### 5 — Relación entre agricultura y territorio

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["territorio", "geografia_humana"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["El asentamiento cerca de ríos", "fueron"], ["La agricultura de riego", "fueron"]]

respuesta: "fueron"
tipo: mc
opciones_explicitas: ["fueron", "fueron"]

enunciado: "Los asentamientos permanentes {casos[caso_idx][0]} una consecuencia directa de la necesidad de cuidar los cultivos."

explicacion: |
  La agricultura requiere una inversión de tiempo y cuidado constante en el mismo terreno, lo que obliga a la población a permanecer en un radio cercano a sus campos.
```

### 6 — El concepto de excedente

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["agricultura", "conceptos"]

tipo: mc
opciones_explicitas: ["La producción total de alimentos de una comunidad", "La producción de alimento por encima de lo necesario para la subsistencia", "El proceso de transformar granos en harina", "El intercambio de semillas entre comunidades"]
respuesta: "La producción de alimento por encima de lo necesario para la subsistencia"

enunciado: "En el contexto de la Revolución Neolítica, ¿qué se define como excedente agrícola?"

explicacion: |
  El excedente es la cantidad de alimento que sobra después de haber cubierto las necesidades básicas de supervivencia de la población. Este sobrante es la base de la especialización del trabajo.
```

### 7 — Consecuencias del excedente

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["sociedad", "especializacion"]

variables:
  escenarios: [["comerciar con otros grupos", "alimentar a artesanos y sacerdotes"], ["almacenar para tiempos de sequía", "permitir la aparición de jerarquías sociales"]]
  escenario: uno_de(escenarios)

tipo: mc
opciones_explicitas: ["Reducir el tamaño de las poblaciones", "Fomentar la autosuficiencia absoluta", "Permitir la especialización del trabajo", "Eliminar la necesidad de agricultura"]

enunciado: "La existencia de un excedente agrícola permitió que parte de la población pudiera dedicarse a actividades distintas a la producción de alimentos, como {escenario[0]} o {escenario[1]}. ¿A qué proceso social dio lugar esto?"

respuesta: "Permitir la especialización del trabajo"

explicacion: |
  Al no tener que producir comida todos los días, surgieron especialistas (artesanos, guerreros, administradores) y se consolidaron las estructuras sociales complejas.
```

### 8 — El proceso de sedentarización

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["nomadismo", "sedentarismo"]

tipo: ordenar
opciones_explicitas: ["Domesticación de plantas y animales", "Producción de excedente agrícola", "Formación de asentamientos permanentes", "Aparición de la división social del trabajo"]

enunciado: "Ordena cronológicamente los procesos que permitieron la transición del nomadismo al sedentarismo complejo:"

explicacion: |
  Primero se domestican especies, lo que permite producir más de lo que se consume; esto permite quedarse en un lugar (sedentarismo) y finalmente permite que no todos trabajen en el campo.
respuesta_orden: ["Domesticación de plantas y animales", "Producción de excedente agrícola", "Formación de asentamientos permanentes", "Aparición de la división social del trabajo"]
```

### 9 — Relación entre excedente y comercio

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["economia_antigua"]

tipo: completar
respuestas_validas:
  - "comercio"
  - "intercambio"

enunciado: "El excedente agrícola no solo servía para el almacenamiento, sino que también facilitó el ________ con otros grupos humanos."

explicacion: |
  El sobrante de productos permite que una comunidad obtenga otros bienes que no produce, dando origen a las primeras redes de intercambio o comercio.
```

### 10 — Cálculo de excedente (Simulación)

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["logica", "economia"]

variables:
  datos: [[100, 70], [250, 180], [50, 45]]
  idx: uno_de([0, 1, 2])
  produccion: datos[idx][0]
  consumo: datos[idx][1]
  excedente: produccion - consumo

tipo: completar
enunciado: "Si una comunidad agrícola produce {produccion} sacos de grano y el consumo necesario para su subsistencia es de {consumo} sacos, ¿cuántos sacos representan el excedente?"

respuesta: excedente

pasos:
  - "Identificar la producción total"
  - "Identificar el consumo de subsistencia"
  - "Restar el consumo de la producción para hallar el sobrante"

explicacion: |
  El excedente se calcula mediante la resta: Producción - Consumo. En este caso, el resultado es {excedente}.
```

### 11 — El origen de la especialización

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["sedentarizacion", "excedente", "division_del_trabajo"]

tipo: mc
opciones_explicitas: ["La agricultura de subsistencia", "La acumulación de excedente", "La caza y recolección", "El nomadismo"]
respuesta: "La acumulación de excedente"

enunciado: "El fenómeno que permitió, por primera vez, que ciertos grupos humanos se dedicaran a tareas distintas a la obtención de alimento fue..."

explicacion: |
  El excedente agrícola permitió que no toda la población tuviera que producir comida, dando lugar a la especialización del trabajo.
```

### 12 — La nueva estructura social

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["clases_sociales", "especializacion"]

variables:
  escenario: uno_de([["artesanos", "creadores de herramientas y objetos"], ["sacerdotes", "encargados de rituales y la cosmogonía"], ["gobernantes", "encargados de la administración y defensa"]])

tipo: completar
respuesta: escenario[0]

enunciado: "Gracias al excedente, surgieron roles sociales especializados. A quienes eran {escenario[1]} se los denominaba ___."

pasos:
  - "Identificar la función social descrita."
  - "Relacionar la función con el término correspondiente."

explicacion: |
  La división del trabajo permitió la aparición de especialistas en la producción, la religión y la política.
```

### 13 — Consecuencias de la especialización

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["division_del_trabajo", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Producción de excedente", "Sedentarismo", "División del trabajo", "Especialización social"]

enunciado: "Ordena cronológicamente los procesos que permitieron la aparición de las primeras civilizaciones complejas:"

explicacion: |
  Primero se establece el sedentarismo, lo que permite producir excedentes; esto a su vez permite la división del trabajo y finalmente la especialización de roles sociales.
respuesta_orden: ["Producción de excedente", "Sedentarismo", "División del trabajo", "Especialización social"]
```

### 14 — La base de la división del trabajo

```
metadata:
  materia: "historia_profucha"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["excedente", "base_social"]

tipo: mc
opciones_explicitas: ["La escasez de recursos", "La división del trabajo", "El excedente de producción", "La guerra constante"]
respuesta: "El excedente de producción"

enunciado: "La base fundamental que permitió la división del trabajo en las sociedades neolíticas fue..."

explicacion: |
  Sin un excedente de alimentos, cada individuo debe dedicar la mayor parte de su tiempo a asegurar la supervivencia alimentaria.
```

### 15 — Identificación de roles

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["especializacion", "clases_sociales"]

tipo: mc
opciones_explicitas: ["artesano", "sacerdote", "gobernante"]
respuesta: "gobernante"

enunciado: "Si una sociedad cuenta con excedentes y surge una clase dedicada exclusivamente a la gestión del orden y la defensa, estamos ante la figura del:"

explicacion: |
  La gestión del poder es una de las especializaciones más tempranas derivadas de la organización de sociedades con excedentes.
```

### 16 — El impacto de la sedentarización

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["sedentarizacion", "poblacion"]

respuesta: "crecimiento"
tipo: completar
respuestas_validas:
  - "crecimiento"

enunciado: "La transición de la vida nómada a la sedentarización favoreció el ___ poblacional debido a la estabilidad en el suministro de alimentos."

explicacion: |
  Al establecerse en un lugar fijo y cultivar alimentos, las comunidades pudieron asegurar un suministro constante, lo que permitió que la población creciera de forma sostenida.
```

### 17 — Consecuencia de la agricultura

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["aldeas", "asentamientos"]

opciones_explicitas: ["Asentamientos temporales", "Aldeas permanentes", "Migraciones constantes"]
respuesta: "Aldeas permanentes"
tipo: mc

enunciado: "La capacidad de producir excedentes agrícolas permitió que los grupos humanos abandonaran el nomadismo y fundaran:"

explicacion: |
  El excedente de comida permitió que las personas no tuvieran que desplazarse constantemente en busca de alimento, dando origen a las primeras aldeas permanentes.
```

### 18 — Factores del crecimiento demográfico

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["nutrición", "recursos"]

variables:
  escenarios: [["estabilidad de recursos", "una mejor nutrición en cantidad"], ["excedente de granos", "la reducción de la mortalidad infantil"]]
  idx: uno_de([0, 1])
  factor: escenarios[idx][1]

enunciado: "Considerando el escenario de {escenarios[idx][0]}, el factor principal que impulsó el aumento de la población fue {factor}."

respuesta: factor
tipo: mc
opciones_explicitas: ["una mejor nutrición en cantidad", "la reducción de la mortalidad infantil"]

explicacion: |
  La estabilidad en el suministro de recursos y una nutrición más constante son pilares fundamentales para el crecimiento demográfico en la era neolítica.
```

### 19 — Secuencia de la Revolución Neolítica

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["proceso", "causa_efecto"]

opciones_explicitas: ["Agricultura", "Excedente de alimentos", "Aldeas permanentes"]
respuesta_orden: ["Agricultura", "Excedente de alimentos", "Aldeas permanentes"]
tipo: ordenar

enunciado: "Ordene cronológicamente los procesos que permitieron la transición hacia la vida sedentaria:"

explicacion: |
  Primero se desarrolla la agricultura, esto genera un excedente de comida, lo que finalmente permite que los asentamientos se vuelvan permanentes.
```

### 20 — El excedente y la especialización

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["excedente", "sociedad"]

respuesta: "verdadero"
tipo: completar
enunciado: "¿El excedente de alimentos permitió que no todos los miembros de la aldea tuvieran que dedicarse a la agricultura, dando paso a la especialización del trabajo?"

explicacion: |
  Exacto. Al haber comida de sobra (excedente), algunas personas pudieron dedicarse a otras tareas como la alfarería, la metalurgia o la administración.
```

### 21 — Causa y efecto de la agricultura

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["agricultura", "sedentarismo"]

variables:
  datos: [["el cultivo de cereales permitió almacenar comida", "la sedentarización"], ["la domesticación de animales generó excedentes", "el aumento de la población"], ["el control del riego aseguró cosechas", "la formación de los primeros asentamientos"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["la sedentarización", "el aumento de la población", "la formación de los primeros asentamientos"]

enunciado: "Si consideramos que {datos[idx][0]}, el efecto directo fue ___."

explicacion: |
  La capacidad de producir más alimento del que se consume inmediatamente (excedente) permitió que los grupos humanos dejaran de ser nómadas y se establecieran en lugares fijos.
```

### 22 — El excedente y la especialización

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["excedente", "especializacion"]

variables:
  datos: [["excedente alimentario", "especialización del trabajo"], ["excedente alimentario", "aparición de jerarquías"], ["excedente alimentario", "desarrollo del comercio"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["especialización del trabajo", "aparición de jerarquías", "desarrollo del comercio"]

enunciado: "Cuando una sociedad logra un {datos[idx][0]}, surge como consecuencia la ___."

explicacion: |
  Al no tener que dedicar todo el tiempo a la búsqueda de alimento, algunos individuos pudieron dedicarse a otras tareas como la artesanía, la metalurgia o la administración.
```

### 23 — Secuencia de la revolución neolítica

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["secuencia", "neolitico"]

respuesta_orden: ["Domesticación de plantas", "Producción de excedentes", "Sedentarización", "Estratificación social"]
tipo: ordenar
opciones_explicitas: ["Domesticación de plantas", "Producción de excedentes", "Sedentarización", "Estratificación social"]

enunciado: "Ordena cronológicamente los procesos que permitieron el surgimiento de las primeras civilizaciones:"

explicacion: |
  La secuencia lógica comienza con la transformación de la dieta (domesticación), que genera sobras de comida (excedente), lo que permite vivir en un sitio fijo (sedentarización) y finalmente la división de clases (estratificación).
```

### 24 — Consecuencias de la vida sedentaria

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["sedentarismo", "poblacion"]

variables:
  datos: [["el sedentarismo", "aumento de la densidad poblacional"], ["la agricultura", "aumento de la densidad poblacional"], ["el excedente", "aumento de la densidad poblacional"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "aumento de la densidad poblacional"

enunciado: "La transición de la caza-recolección hacia {datos[idx][0]} provocó un ___."

explicacion: |
  La estabilidad de las fuentes de alimento permitió que las tasas de natalidad aumentaran y la mortalidad disminuyera, incrementando la densidad de habitantes en un mismo territorio.
```

### 25 — Relación de causalidad económica

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["economia_prehistorica", "causalidad"]

variables:
  datos: [["excedente", "comercio"], ["excedente", "burocracia"], ["excedente", "urbanismo"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["comercio", "burocracia", "urbanismo"]

enunciado: "El control y la gestión del {datos[idx][0]} fue el motor que impulsó el desarrollo de la ___."

explicacion: |
  La necesidad de contabilizar y distribuir el excedente obligó a las sociedades a crear sistemas de registro y administración, dando origen a las primeras estructuras burocráticas.
```
