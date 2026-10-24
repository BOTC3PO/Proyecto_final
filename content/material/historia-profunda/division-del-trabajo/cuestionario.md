# Historia Profunda — Division del trabajo (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de división del trabajo

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["conceptos_basicos", "economia"]

respuesta: "especialización"
tipo: completar
respuestas_validas:
  - "especialización"

enunciado: "La división del trabajo consiste en la ___ de distintas personas o grupos en tareas específicas, en lugar de que todos realicen todas las actividades."

explicacion: |
  La división del trabajo permite que cada individuo se enfoque en una tarea concreta, aumentando la eficiencia y la destreza en la producción.
```

### 2 — Ventajas de la especialización

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["eficiencia", "produccion"]

opciones_explicitas: ["Aumento de la producción", "Reducción de la calidad", "Aumento del tiempo de trabajo", "Desperdicio de materiales"]

respuesta: "Aumento de la producción"
tipo: mc

enunciado: "De acuerdo con los principios de la división del trabajo, ¿cuál es uno de sus principales beneficios económicos?"

explicacion: |
  Al especializarse, el trabajador gana rapidez y precisión, lo que permite producir una mayor cantidad de bienes en el mismo tiempo.
```

### 3 — Evolución histórica de la producción

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["historia_economica", "procesos"]

enunciado: "En un escenario de fábrica moderna, donde cada operario realiza una sola tarea repetitiva en una línea de montaje, el modelo de producción se caracteriza por ser: ___"

pasos:
  - "Identificar el escenario seleccionado."
  - "Analizar si el trabajador realiza todo el proceso o solo una parte."

respuestas_validas:
  - "fragmentado"
respuesta: "fragmentado"
tipo: completar

explicacion: |
  En la industria moderna, el proceso se fragmenta en tareas mínimas para maximizar la velocidad, a diferencia del modelo artesanal integral.
```

### 4 — Ordenar etapas de producción especializada

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["logica_procesos"]

opciones_explicitas: ["Extracción de materia prima", "Transformación especializada", "Distribución del producto final"]

respuesta_orden: ["Extracción de materia prima", "Transformación especializada", "Distribución del producto final"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas de una cadena de producción altamente dividida:"

explicacion: |
  La división del trabajo permite que cada etapa de la cadena de suministro sea ejecutada por especialistas distintos.
```

### 5 — Impacto en el conocimiento

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["habilidades", "educacion"]

opciones_explicitas: ["Mayor versatilidad del trabajador", "Mayor destreza en tareas específicas", "Menor necesidad de entrenamiento", "Aumento de la autonomía técnica"]

respuesta: "Mayor destreza en tareas específicas"
tipo: mc

enunciado: "La especialización extrema derivada de la división del trabajo tiene como consecuencia directa en el trabajador:"

explicacion: |
  Si bien aumenta la destreza técnica en una tarea puntual, también puede llevar a la monotonía y a la pérdida de la visión global del proceso productivo.
```

### 6 — El origen de la especialización

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["agricultura", "excedente", "especializacion"]

respuesta: "excedente agrícola"
tipo: completar
respuestas_validas:
  - "excedente agrícola"
  - "excedente"

enunciado: "La división del trabajo surgió históricamente como una consecuencia directa de la aparición del ___."

explicacion: |
  Cuando las sociedades lograron producir más alimento del que necesitaban para su subsistencia inmediata (excedente), no todos los individuos tuvieron que dedicarse a la agricultura. Esto permitió que otros se especializaran en otras tareas.
```

### 7 — Nuevos roles sociales

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["roles", "sociedad", "especializacion"]

variables:
  rol_idx: uno_de([0, 1, 2])
  roles: [["artesanos", "comerciantes", "sacerdotes"], ["artesanos", "comerciantes", "sacerdotes"], ["artesanos", "comerciantes", "sacerdotes"]]

opciones_explicitas: ["artesanos", "comerciantes", "sacerdotes", "agricultores"]
respuesta: roles[rol_idx][2]
tipo: mc

enunciado: "Gracias al excedente de alimentos, algunas personas pudieron dedicarse a funciones no productoras de comida, como es el caso de los {roles[rol_idx][2]}."

explicacion: |
  La especialización permitió la aparición de roles como artesanos, comerciantes, sacerdotes o gobernantes, liberando a una parte de la población de la tarea de producir alimento.
```

### 8 — La lógica de la especialización

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["causalidad", "economia_antigua"]

respuesta: "verdadero"
tipo: completar
enunciado: "¿Es correcto afirmar que la división del trabajo es una consecuencia de la capacidad de producir excedentes agrícolas?"

explicacion: |
  Correcto. Sin un excedente que alimentar a quienes no cultivan, la especialización laboral sería imposible, ya que todos deberían dedicarse a la obtención de alimentos para sobrevivir.
```

### 9 — Evolución de la estructura social

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["jerarquia", "especializacion", "sociedad"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["artesanos, comerciantes y sacerdotes", "artesanos, comerciantes y sacerdotes"], ["artesanos, comerciantes y sacerdotes", "artesanos, comerciantes y sacerdotes"]]

opciones_explicitas: ["agricultores y guerreros", "artesanos, comerciantes y sacerdotes", "cazadores y recolectores", "nómadas y pastores"]
respuesta: escenarios[escenario_idx][0]
tipo: mc

enunciado: "Al producirse un excedente agrícola, la estructura social se vuelve más compleja, pasando de ser mayoritariamente agricultores a incluir roles como ___."

explicacion: |
  La complejidad social aumenta cuando la población se diversifica en funciones que no están ligadas directamente a la extracción de recursos primarios.
```

### 10 — Secuencia de la complejidad social

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["proceso", "causalidad"]

opciones_explicitas: ["Agricultura de subsistencia", "Producción de excedentes", "División del trabajo"]
respuesta_orden: ["Agricultura de subsistencia", "Producción de excedentes", "División del trabajo"]
tipo: ordenar

enunciado: "Ordena los siguientes procesos históricos que permitieron la aparición de la especialización laboral:"

pasos:
  - "Se desarrolla la agricultura para el autoconsumo."
  - "Se produce más comida de la necesaria (excedente)."
  - "Surgen artesanos, sacerdotes y gobernantes."

explicacion: |
  El proceso es causal: primero la agricultura permite el excedente, y el excedente permite que la sociedad se divida en diferentes profesiones.
```

### 11 — Eficiencia y especialización

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["economia", "productividad"]

respuesta: "eficiencia"
tipo: completar
respuestas_validas:
  - "eficiencia"
  - "productividad"

enunciado: "Cuando un proceso se divide en tareas simples y cada trabajador se especializa en una de ellas, se logra una mayor ___ en la producción total."

explicacion: |
  La especialización permite que el trabajador perfeccione su técnica en una tarea específica, reduciendo el tiempo de transición entre actividades y aumentando la eficiencia general.
```

### 12 — El impacto en la producción

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["productividad", "especializacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["taller de costura", "un sastre"], ["fábrica de clavos", "un operario"]]
  resultado: [["mayor rapidez", "un sastre"], ["mayor volumen", "un operario"]]

respuesta: resultado[escenario_idx][0]
tipo: mc
opciones_explicitas: ["mayor rapidez", "mayor volumen", "menor calidad", "más costos"]

enunciado: "En un {datos[escenario_idx][0]}, la especialización de {datos[escenario_idx][1]} permite obtener un {resultado[escenario_idx][0]} en la producción."

explicacion: |
  La división del trabajo transforma la producción artesanal en procesos masivos, aumentando drásticamente el volumen de bienes disponibles.
```

### 13 — Ventajas de la especialización

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["productividad", "habilidad"]

respuesta: "perfeccionamiento de la destreza"
tipo: mc
opciones_explicitas: ["perfeccionamiento de la destreza", "pérdida de autonomía", "aumento de la fatiga mental", "reducción de la velocidad"]

enunciado: "Una de las principales ventajas teóricas de la división del trabajo es el ___ del trabajador en su tarea asignada."

explicacion: |
  Al repetir una acción específica, el trabajador adquiere una destreza mecánica y técnica que no podría lograr si realizara todo el proceso de principio a fin.
```

### 14 — El proceso de producción industrial

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["orden", "proceso"]

respuesta_orden: ["materias primas", "tareas especializadas", "producto terminado"]
tipo: ordenar
opciones_explicitas: ["materias primas", "tareas especializadas", "producto terminado"]

enunciado: "Ordena la secuencia lógica de un proceso basado en la división del trabajo industrial:"

pasos:
  - "Se recolectan los insumos básicos."
  - "Cada trabajador realiza una parte específica del ensamblaje."
  - "Se obtiene el bien final listo para el mercado."

explicacion: |
  La división del trabajo requiere un flujo ordenado: primero la entrada de materiales, luego la ejecución fragmentada y finalmente la salida del producto.
```

### 15 — Relación entre especialización y productividad

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["productividad", "economia"]

variables:
  caso_idx: uno_de([0, 1])
  valores: [[10, 50], [5, 100]]
  total: [500, 1000]

respuesta: total[caso_idx]
tipo: completar
tolerancia_abs: 0

enunciado: "Si en un escenario de división del trabajo, un trabajador produce {valores[caso_idx][0]} unidades en una hora sin especializar, pero con la especialización produce {valores[caso_idx][1]} unidades, ¿cuál es la producción total en 10 horas si solo contamos la producción especializada?"

pasos:
  - "Identificar la producción por hora con especialización: {valores[caso_idx][1]}"
  - "Multiplicar por el número de horas: {valores[caso_idx][1]} * 10"

explicacion: |
  La especialización actúa como un multiplicador de la productividad, permitiendo que la producción total crezca exponencialmente respecto al trabajo no especializado.
```

### 16 — Origen de la desigualdad

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["sociologia", "desigualdad"]

respuesta: "prestigio"
tipo: mc
opciones_explicitas: ["prestigio", "esfuerzo", "tiempo", "herramientas"]

enunciado: "Con la especialización de tareas, no todas las labores adquirieron el mismo nivel de ______, lo que permitió la jerarquización social."

explicacion: |
  La especialización permitió que algunas tareas fueran valoradas socialmente por encima de otras, otorgando a quienes las realizaban mayor estatus y control sobre los recursos.
```

### 17 — El impacto en la distribución

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["economia", "recursos"]

respuesta: "excedente"
tipo: completar
respuestas_validas:
  - "excedente"

enunciado: "En los primeros asentamientos sedentarios, la división del trabajo permitió que ciertos grupos controlaran el excedente, consolidando la desigualdad."

explicacion: |
  El control sobre el excedente de producción (como el grano) o sobre procesos técnicos específicos permitió que ciertos individuos acumularan poder sobre el resto de la comunidad.
```

### 18 — Jerarquías de valor

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["estructura_social", "clases"]

respuesta_orden: ["Especialización técnica", "Producción de subsistencia", "Servicio doméstico"]
tipo: ordenar

opciones_explicitas: ["Especialización técnica", "Producción de subsistencia", "Servicio doméstico"]

enunciado: "Ordene las actividades desde la que históricamente ha generado mayor acumulación de recursos y estatus hasta la de menor estatus en una sociedad estratificada:"

explicacion: |
  La jerarquización social se basa en la complejidad de la tarea y el control de los medios de producción; las tareas de especialización técnica suelen estar en la cima de la pirámide de prestigio.
```

### 19 — Relación de poder

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["poder", "sociedad"]

respuesta: "desigualdad"
tipo: completar
tolerancia_abs: 0

enunciado: "La asignación desigual de tareas y el acceso diferenciado a los bienes producidos sentaron las bases de la _______ social."

explicacion: |
  Al no ser todas las tareas equivalentes en términos de acceso a la riqueza, se crearon estratos sociales permanentes.
```

### 20 — El rol de la propiedad

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["recursos", "propiedad"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["tierras", "dueños"], ["herramientas", "maestros"]]

respuesta: casos[caso_idx][1]

tipo: mc
opciones_explicitas: ["dueños", "maestros", "trabajadores", "esclavos"]

enunciado: "Cuando la división del trabajo se vinculó con la propiedad de los medios de producción (como {casos[caso_idx][0]}), surgieron grupos de ___ que controlaban a los demás."

explicacion: |
  La combinación de la especialización con la propiedad privada de los recursos (tierra o herramientas) es el motor fundamental de la estratificación de clases.
```

### 21 — El rol del artesano

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["especializacion", "prehistoria"]

respuesta: "alfarero"
tipo: mc
opciones_explicitas: ["cazador", "curtidor", "alfarero", "agricultor"]

enunciado: "En las sociedades con división del trabajo incipiente, un individuo que se dedica exclusivamente a la fabricación de vasijas de arcilla es un: ___"

explicacion: |
  La especialización ocurre cuando un individuo se dedica a una tarea específica, permitiendo un aumento en la calidad y cantidad de la producción.
```

### 22 — La jerarquía de la producción

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["jerarquia", "especializacion"]

respuesta: "registrador"
tipo: completar
respuestas_validas:
  - "registrador"

enunciado: "Si en una civilización antigua la función principal de un escriba es llevar el control de los granos, su rol especializado es el de ___."

explicacion: |
  El escriba es un ejemplo de especialización administrativa necesaria en sociedades complejas con excedentes.
```

### 23 — Secuencia de la producción textil

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "intermedio"
  tags: ["procesos", "especializacion"]

respuesta_orden: ["pastoreo", "hilado", "tejido", "confección"]
tipo: ordenar
opciones_explicitas: ["pastoreo", "hilado", "tejido", "confección"]

enunciado: "Ordena los pasos de la cadena de producción textil en una sociedad con división del trabajo técnica:"

explicacion: |
  La división del trabajo permite que cada etapa de la producción sea realizada por un especialista distinto, optimizando el proceso.
```

### 24 — El excedente y el nuevo rol

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "avanzado"
  tags: ["excedente", "sociedad"]

respuesta: "religioso"
tipo: mc
opciones_explicitas: ["religioso", "militar", "herrero", "comerciante"]

enunciado: "Cuando la agricultura genera excedentes, surge la especialización no productiva. Si el excedente se usa para sostener a un grupo dedicado al ritual, el rol es: ___"

explicacion: |
  El excedente agrícola es la condición necesaria para que existan profesiones que no producen alimento directamente.
```

### 25 — Identificación de la especialización

```
metadata:
  materia: "historia_profunda"
  tema: "division_del_trabajo"
  nivel: "basico"
  tags: ["oficios", "identificacion"]

respuesta: "agrimensor"
tipo: completar
respuestas_validas:
  - "agrimensor"

enunciado: "Un individuo cuya tarea principal es medir los límites de las tierras para la distribución de impuestos es un ___."

explicacion: |
  La especialización técnica (como la agrimensura) es fundamental para la gestión de los recursos en estados organizados.
```
