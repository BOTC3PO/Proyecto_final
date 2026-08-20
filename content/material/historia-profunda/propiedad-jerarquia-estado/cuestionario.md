# Historia Profunda — Propiedad jerarquia estado (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El origen de la propiedad

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["sedentarismo", "excedente", "propiedad_privada"]

respuesta: "excedente"
tipo: "completar"
respuestas_validas:
  - "excedente"

enunciado: "El paso de la vida nómada a la sedentaria permitió la acumulación de un ___ agrícola, lo cual fue el motor para el surgimiento de la propiedad privada sobre la tierra."

explicacion: |
  La capacidad de producir más alimento del que se consume inmediatamente (excedente) permitió que algunos individuos acumularan riqueza, diferenciándose de otros y dando origen a la propiedad privada.
```

### 2 — Transición económica

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["revolucion_neolitica", "acumulacion"]

variables:
  escenario: uno_de([["comunidad_tribal", "propiedad colectiva"], ["asentamiento_fijo", "propiedad privada"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["propiedad colectiva", "propiedad privada"]

enunciado: "En un sistema de asentamientos fijos con excedentes, la organización social tiende a transicionar de una {escenario[0]} hacia una {escenario[1]}."

explicacion: |
  El control sobre el excedente y la tierra delimita territorios y derechos de uso, consolidando la propiedad privada frente al modelo de uso común de las tribus nómadas.
```

### 3 — Jerarquías y control

```
metadata:
  materia: "historia_profucha"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["estado", "burocracia", "tributo"]

respuesta: "Estado"
tipo: "completar"
respuestas_validas:
  - "Estado"

enunciado: "Para gestionar la propiedad de la tierra y asegurar la recaudación de tributos sobre el excedente, surge una estructura de poder centralizada denominada ___."

explicacion: |
  El Estado surge como el ente encargado de codificar las leyes de propiedad y administrar la fuerza para garantizar la recaudación y la defensa de los bienes acumulados.
```

### 4 — Secuencia de la complejidad social

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["secuencia", "desarrollo_social"]

respuesta_orden: ["Sedentarismo", "Excedente", "Propiedad Privada", "Estratificación"]
tipo: "ordenar"
opciones_explicitas: ["Sedentarismo", "Excedente", "Propiedad Privada", "Estratificación"]

enunciado: "Ordena cronológicamente los procesos que permitieron el surgimiento de las sociedades de clases:"

pasos:
  - "Establecimiento de asentamientos permanentes."
  - "Producción de alimento más allá del consumo inmediato."
  - "Delimitación de derechos de posesión sobre la tierra y bienes."
  - "División de la sociedad en grupos con distintos niveles de riqueza."

explicacion: |
  La secuencia lógica parte de la estabilidad del asentamiento, que genera excedente, lo que permite la propiedad privada y, finalmente, la división social en clases (estratificación).
```

### 5 — El rol de la ley

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["derecho", "propiedad"]

variables:
  caso: uno_de([["robo_tierra", "delito"], ["tributo_no_pagado", "delito"]])

respuesta: "delito"
tipo: "mc"
opciones_explicitas: ["acto_social", "delito"]

enunciado: "En una sociedad con propiedad privada consolidada, el acto de apropiarse de la tierra de otro sin permiso es considerado un {caso[0]} bajo el código del Estado."

explicacion: |
  La creación de leyes penales es fundamental para proteger la propiedad privada, transformando la apropiación de bienes ajenos en un delito contra el orden establecido.
```

### 6 — Origen de la desigualdad

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["excedente", "jerarquia", "sociedad"]

respuesta: "excedente"
tipo: "completar"
respuestas_validas:
  - "excedente"

enunciado: "La transición de economías de subsistencia a sociedades complejas fue impulsada por la acumulación de ___ , lo que permitió que ciertos grupos controlaran recursos para sostener a otros."

explicacion: |
  Cuando una sociedad produce más de lo que consume inmediatamente (excedente), ese sobrante puede ser almacenado y controlado, permitiendo la aparición de élites que gestionan dicho recurso.
```

### 7 — Dinámicas de poder

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["excedente", "poder", "clases_sociales"]

variables:
  escenario: uno_de([["el control de la tierra", "el control de la fuerza"], ["el control de la tierra", "el control de la religión"], ["el control de la tierra", "el control de la tecnología"]])
  respuesta_correcta: ["el control de la tierra", "el control de la fuerza", "el control de la tierra", "el control de la religión", "el control de la tierra", "el control de la tecnología"]

opciones_explicitas: ["el control de la tierra", "el control de la fuerza", "el control de la religión", "el control de la tecnología"]

respuesta: escenario[1]
tipo: "mc"

enunciado: "En las primeras sociedades con excedente agrícola, la jerarquía social se consolidó principalmente a través de ___."

explicacion: |
  La propiedad de la tierra (medio de producción) permitió a unas familias acumular riqueza, mientras que la capacidad de ejercer fuerza o autoridad religiosa legitimaba ese control sobre el resto de la población.
```

### 8 — El proceso de estratificación

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["proceso", "estratificacion", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Producción de excedente", "Acumulación de propiedad", "Estratificación social", "Formación del Estado"]
respuesta_orden: ["Producción de excedente", "Acumulación de propiedad", "Estratificación social", "Formación del Estado"]

enunciado: "Ordene cronológicamente los procesos que explican la aparición de las jerarquías estatales:"

explicacion: |
  Primero se genera el excedente, luego ese excedente se convierte en propiedad privada/acumulada, lo que crea divisiones de clase (estratificación) y finalmente requiere un aparato institucional (Estado) para regular la propiedad y la fuerza.
```

### 9 — Consecuencia de la propiedad privada

```
metadata:
  materia: "historia_profucha"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["propiedad", "desigualdad"]

variables:
  caso: uno_de([["A", "B"], ["C", "D"]])
  datos: [["Familia A posee tierras y herramientas", "Familia B posee solo su fuerza de trabajo"], ["Familia C posee excedentes almacenados", "Familia D posee tierras comunales"]]
  respuestas: [["dominante", "subordinada"], ["dominante", "subordinada"]]

enunciado: "Considerando el caso de la {caso[0]}, la relación social resultante es de carácter ___."

respuesta: respuestas[0][0]
tipo: "mc"

opciones_explicitas: ["dominante", "subordinada"]

explicacion: |
  La posesión de los medios de producción (tierra, herramientas, excedente) establece una relación asimétrica de poder entre quienes poseen y quienes solo pueden ofrecer su trabajo.
```

### 10 — El papel del Estado

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["estado", "legitimacion", "jerarquia"]

respuesta: "protección"
tipo: "completar"
respuestas_validas:
  - "protección"
  - "legitimación"

enunciado: "El Estado temprano surge para garantizar la ___ de la propiedad acumulada y la gestión del excedente mediante la institucionalización de la fuerza."

explicacion: |
  El Estado actúa como el garante de las reglas de propiedad, asegurando que el excedente acumulado por las élites sea respetado y gestionado de manera centralizada.
```

### 11 — Origen del Estado

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["sociologia", "estado", "organizacion"]

respuesta: "recaudar excedente"
tipo: completar
respuestas_validas:
  - "recaudar excedente"

enunciado: "Uno de los propósitos fundamentales de la formación de las estructuras estatales fue la capacidad de ___ para financiar la administración y la burocracia."

explicacion: |
  El surgimiento de sociedades complejas permitió la acumulación de excedentes agrícolas, lo que permitió la creación de una clase administrativa y militar que no producía sus propios alimentos.
```

### 12 — Funciones del Estado

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["funciones", "justicia", "defensa"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [["gestión de conflictos entre ciudadanos", "administrar justicia"], ["protección de las fronteras ante invasores", "organizar defensa"], ["construcción de canales y caminos", "obras públicas"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["administrar justicia", "organizar defensa", "obras públicas", "todas las anteriores"]

enunciado: "Si el Estado se enfoca en '{escenarios[escenario_idx][0]}', está ejerciendo la función de: ___"

explicacion: |
  El Estado centraliza funciones que las comunidades pequeñas resolvían de forma tribal para permitir la convivencia en sociedades de gran escala.
```

### 13 — La complejidad social

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["complejidad", "sociedad"]

respuesta: "complejas"
tipo: completar
respuestas_validas:
  - "complejas"

enunciado: "El Estado surge como una respuesta institucional a la transición de sociedades tribales hacia sociedades más ___."

explicacion: |
  A medida que la población crece y la división del trabajo se especializa, la coordinación requiere una autoridad centralizada.
```

### 14 — Elementos de la estructura estatal

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["jerarquia", "orden"]

respuesta_orden: ["imposición de normas", "recaudación de tributos", "mantenimiento del orden"]
tipo: ordenar
opciones_explicitas: ["imposición de normas", "recaudación de tributos", "mantenimiento del orden"]

enunciado: "Ordene los procesos que consolidan la autoridad de un Estado centralizado, desde la base económica hasta la cohesión social:"

explicacion: |
  Primero se extrae el excedente (tributos), luego se establecen reglas (normas) y finalmente se asegura la estabilidad (orden).
```

### 15 — El rol de la infraestructura

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["obras", "infraestructura"]

respuesta: "obras públicas"
tipo: mc
opciones_explicitas: ["recaudación de tributos", "obras públicas", "defensa militar", "administración de justicia"]

enunciado: "La organización de grandes proyectos como sistemas de riego o calzadas es una función característica de la administración de: ___"

explicacion: |
  Las obras públicas requieren una coordinación de mano de obra masiva y recursos que solo una estructura estatal puede movilizar.
```

### 16 — El motor del cambio

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["agricultura", "excedente"]

enunciado: "El paso fundamental que permitió la acumulación de riqueza y el fin del nomadismo fue la generación de un ___."

respuestas_validas:
  - "excedente agrícola"
tipo: completar

explicacion: |
  La capacidad de producir más alimento del que se consume inmediatamente (excedente) permitió que algunos individuos dejaran de producir comida para dedicarse a otras tareas.
```

### 17 — La consecuencia de la acumulación

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["propiedad_privada", "desigualdad"]

variables:
  escenario: uno_de([["La acumulación de excedentes permitió que la tierra y los bienes pasaran de ser de uso común a ser de uso individual.", "propiedad privada"], ["La gestión de los graneros llevó a la creación de leyes para proteger el acaparamiento de recursos.", "propiedad privada"]])

enunciado: "Según el proceso de transición histórica, la aparición de la {escenario[0]} es la consecuencia directa de la acumulación de excedentes."

opciones_explicitas: ["propiedad común", "propiedad privada", "propiedad estatal"]
respuesta: "propiedad privada"
tipo: mc

explicacion: |
  Al existir un exceso de producción, surge la necesidad de delimitar quién es dueño de qué, transformando el acceso a los recursos en un derecho de propiedad privada.
```

### 18 — La estructura social

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["jerarquia", "clases_sociales"]

enunciado: "Cuando la propiedad privada genera disparidades en la riqueza, surge una estructura de ___ para organizar a la población según su estatus y funciones."

respuestas_validas:
  - "jerarquía social"
tipo: completar

explicacion: |
  La división del trabajo y la diferencia de riqueza crean estratos sociales: quienes controlan el excedente y quienes lo producen.
```

### 19 — El orden de la civilización

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["secuencia", "procesos"]

enunciado: "Ordena la secuencia lógica de la transición hacia las sociedades complejas:"

opciones_explicitas: ["Excedente agrícola", "Propiedad privada", "Jerarquía social", "Estado organizado"]
respuesta_orden: ["Excedente agrícola", "Propiedad privada", "Jerarquía social", "Estado organizado"]
tipo: ordenar

explicacion: |
  La secuencia lógica parte de la producción (excedente), que permite la apropiación (propiedad), que genera desigualdad (jerarquía) y finalmente requiere una autoridad que regule todo (Estado).
```

### 20 — El rol del Estado

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["estado", "poder"]

variables:
  caso: uno_de([["El Estado surge para proteger la propiedad y administrar la fuerza.", "Estado organizado"], ["El Estado aparece como un mecanismo de control de la jerarquía establecida.", "Estado organizado"]])

enunciado: "En el proceso histórico estudiado, la fase final de la organización social compleja es la aparición del {caso[0]}."

opciones_explicitas: ["comunidad tribal", "Estado organizado", "anarquía"]
respuesta: "Estado organizado"
tipo: mc

explicacion: |
  El Estado surge como la institución que institucionaliza la jerarquía, establece leyes para la propiedad y administra el excedente y la defensa.
```

### 21 — La propiedad privada y el Estado

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["sociologia", "estado", "propiedad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["La consolidación de la propiedad privada", "la necesidad de un aparato estatal para protegerla"], ["El fin de las estructuras comunales", "la emergencia de la jerarquía de clases"]]

enunciado: "En el proceso de transición hacia la sociedad de clases, {datos[escenario_idx][0]} fue el motor de {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["la necesidad de un aparato estatal para protegerla", "la emergencia de la jerarquía de clases", "la desaparición de la división del trabajo", "el retorno al estado de naturaleza"]

explicacion: |
  La propiedad privada requiere de una fuerza coercitiva (el Estado) que garantice los límites de la posesión y sancione su transgresión.
```

### 22 — Estructura de la jerarquía social

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["jerarquia", "clases", "poder"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["La acumulación de excedentes en manos de una élite", "la estratificación social"], ["El control de los medios de producción", "la consolidación de la jerarquía"]]

enunciado: "Históricamente, {datos[escenario_idx][0]} ha conducido directamente a {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["la estratificación social", "la consolidación de la jerarquía", "la igualdad de derechos", "la disolución del poder central"]

explicacion: |
  La desigualdad en la distribución de recursos permite que ciertos grupos ejerzan un poder de mando sobre otros, creando jerarquías.
```

### 23 — Elementos del Estado moderno

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["estado", "soberania", "orden"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["El monopolio de la violencia legítima", "el control del territorio"], ["La delimitación de fronteras claras", "la soberanía territorial"]]

enunciado: "Según la teoría clásica, {datos[escenario_idx][0]} es la característica que define {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "el control del territorio"
  - "la soberanía territorial"

explicacion: |
  El Estado se define por su capacidad de ejercer autoridad sobre un territorio y una población mediante el uso de la fuerza institucionalizada.
```

### 24 — Orden cronológico de la complejidad social

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["evolucion", "sociedad", "orden"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Comunidades igualitarias", "Propiedad privada", "Estado centralizado"], ["Sociedades tribales", "Desigualdad de estatus", "Sistemas de castas"]]

enunciado: "Ordene la secuencia lógica de la evolución de la complejidad política y económica:"

pasos:
  - "Paso 1: Surgimiento de la propiedad"
  - "Paso 2: Formación de jerarquías"
  - "Paso 3: Institucionalización del Estado"

respuesta_orden: ["Comunidades igualitarias", "Propiedad privada", "Estado centralizado"]
tipo: ordenar
opciones_explicitas: ["Comunidades igualitarias", "Propiedad privada", "Estado centralizado"]

explicacion: |
  La secuencia clásica sugiere que la propiedad genera excedentes, los excedentes generan jerarquías y las jerarquías requieren un Estado para su mantenimiento.
```

### 25 — Causa de la jerarquía política

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["causa", "efecto", "poder"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["La especialización del trabajo", "la división de funciones"], ["La gestión de recursos excedentes", "la creación de burocracias"]]

enunciado: "La aparición de la ___ fue una consecuencia directa de la gestión de recursos excedentes."

respuesta: "la creación de burocracias"
tipo: completar
respuestas_validas:
  - "la creación de burocracias"

explicacion: |
  La necesidad de administrar el excedente y la propiedad requiere de un cuerpo administrativo (burocracia) que es la base del aparato estatal.
```
