# Examen jefe — [PENDIENTE #690]

> Logro #690. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **125 preguntas totales** en 5/5 secciones.

---

## Sección: division-del-trabajo (25 preguntas)

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

## Sección: metalurgia-cobre-hierro (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["tecnologia", "prehistoria"]

respuesta: "metalurgia"
tipo: completar
respuestas_validas:
  - "metalurgia"

enunciado: "El proceso de extracción y transformación de minerales para obtener metales se denomina ___."

explicacion: |
  La metalurgia permitió la creación de herramientas más duraderas y precisas que las de piedra, marcando el inicio de nuevas eras tecnológicas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["cobre", "propiedades"]

respuesta: "cobre"
tipo: mc
opciones_explicitas: ["cobre", "hierro", "bronce"]

enunciado: "Un material blando y de color rojizo, ampliamente usado antes de alearse con estaño, es el ___."

explicacion: |
  El cobre fue uno de los primeros metales utilizados debido a su relativa abundancia y su capacidad para ser moldeado en frío o mediante fundición.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "avanzado"
  tags: ["fundicion", "tecnologia"]

respuesta: 1850
tipo: completar
tolerancia_abs: 1

enunciado: "Si un fundidor necesita alcanzar una temperatura de 1000 grados para el cobre y requiere un incremento adicional de 850 grados para alcanzar el punto de fusión de una aleación específica, ¿a qué temperatura total debe llegar el horno?"

pasos:
  - "Identificar la temperatura inicial: 1000 grados."
  - "Sumar el incremento necesario: 850 grados."
  - "Calcular el total: 1000 + 850."

explicacion: |
  El control de la temperatura fue el desafío técnico más crítico para los antiguos metalúrgicos, requiriendo hornos cada vez más sofisticados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["cronologia", "edades"]

respuesta_orden: ["cobre", "bronce", "hierro"]
tipo: ordenar
opciones_explicitas: ["cobre", "bronce", "hierro"]

enunciado: "Ordena cronológicamente las etapas de la Edad de los Metales según su uso predominante en la tecnología de transformación:"

explicacion: |
  La evolución tecnológica fue: primero metales nativos (cobre), luego aleaciones (bronce) y finalmente metales con mayor punto de fusión y dureza (hierro).
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["hierro", "impacto"]

respuesta: "más resistente"
tipo: mc
opciones_explicitas: ["más resistente", "más blando", "más caro"]

enunciado: "Debido a que el hierro es ___ que el cobre, su uso permitió un mayor alcance de conquista."

explicacion: |
  La disponibilidad y dureza del hierro permitieron una producción masiva de herramientas y armas, transformando la agricultura y la guerra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["Edad_del_Cobre", "metalurgia"]

enunciado: "Durante la Edad del Cobre, los seres humanos comenzaron a utilizar este metal para fabricar objetos, siendo el cobre puro un material más ___ que el hierro."

respuestas_validas:
  - "blando"
tipo: completar

explicacion: |
  El cobre es un metal relativamente blando en comparación con el hierro, lo que limitaba su uso para herramientas de corte duraderas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["Edad_del_Bronce", "aleaciones"]

enunciado: "La Edad del Bronce se caracteriza por el uso de una aleación. ¿Cuál es la composición principal de este material?"

opciones_explicitas: ["Cobre y Hierro", "Cobre y Estaño", "Hierro y Carbono", "Estaño y Plomo"]
respuesta: "Cobre y Estaño"
tipo: mc

explicacion: |
  El bronce es una aleación de cobre y estaño que resultó ser mucho más resistente y dura que el cobre puro.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["Edad_del_Bronce", "tecnologia"]

enunciado: "El paso de la Edad del Cobre a la Edad del Bronce supuso una mejora tecnológica debido a la ___ de las herramientas y armas."

respuestas_validas:
  - "resistencia"
tipo: completar

explicacion: |
  Al añadir estaño al cobre, se obtenía bronce, un material con una dureza superior, ideal para la guerra y la agricultura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["secuencia_temporal"]

opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]
respuesta_orden: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]
tipo: ordenar

enunciado: "Ordena cronológicamente las edades de la metalurgia según la evolución de la complejidad de los materiales utilizados:"

explicacion: |
  La secuencia lógica es primero el uso de metales nativos (Cobre), luego aleaciones (Bronce) y finalmente metales más duros (Hierro).
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "avanzado"
  tags: ["propiedades_materiales"]

enunciado: "Si comparamos el cobre puro con el bronce, el cobre es notablemente más ___."

respuesta: "Blando"
respuestas_validas:
  - "Blando"
tipo: completar

explicacion: |
  El cobre puro es más blando que el bronce, que gana dureza gracias a la aleación con estaño.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["metalurgia", "temperatura", "edad_del_hierro"]

enunciado: "A diferencia del bronce, el hierro requiere temperaturas de fundición mucho más ___ que el cobre para ser procesado."

opciones_explicitas: ["bajas", "altas", "moderadas"]

respuesta: "altas"
tipo: mc

explicacion: |
  El hierro tiene un punto de fusión mucho más elevado que el cobre y el estaño, lo que exigió un desarrollo tecnológico mayor en los hornos de fundición para alcanzar las temperaturas necesarias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["recursos", "abundancia"]

variables:
  dato_enunciado: uno_de(["el hierro es más abundante que el bronce", "el hierro, aunque más difícil de fundir, resulta mucho más duro que el bronce una vez trabajado"])

enunciado: "En la Edad del Hierro, la ventaja principal sobre la Edad del Bronce es que {dato_enunciado} y, una vez dominada la técnica, produce herramientas más resistentes."

respuesta: "produce herramientas más resistentes"
tipo: mc
opciones_explicitas: ["produce herramientas más resistentes", "produce herramientas más frágiles", "es menos duradero"]

explicacion: |
  Aunque el hierro es más difícil de fundir, su abundancia en la corteza terrestre permitió una democratización de las herramientas, y su dureza revolucionó la agricultura y la guerra.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["resistencia", "herramientas"]

enunciado: "Si comparamos la durabilidad de las herramientas de la Edad del Bronce con las de la Edad del Hierro, las de hierro son notablemente más ___."

respuestas_validas:
  - "resistentes"

respuesta: "resistentes"
tipo: completar

explicacion: |
  La capacidad de las herramientas de hierro para mantener el filo y resistir el impacto permitió una expansión de las actividades productivas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["orden", "tecnologia"]

enunciado: "Ordena los procesos tecnológicos según su complejidad térmica creciente (de menor a mayor temperatura de fundición):"

opciones_explicitas: ["Cobre", "Bronce", "Hierro"]

respuesta_orden: ["Cobre", "Bronce", "Hierro"]
tipo: ordenar

explicacion: |
  El cobre tiene el punto de fusión más bajo, seguido por la aleación de bronce, y finalmente el hierro, que requiere los hornos más avanzados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "avanzado"
  tags: ["economía", "recursos"]

enunciado: "La transición a la Edad del Hierro se vio favorecida porque el hierro es más abundante que los componentes del bronce."

respuesta: "más abundante"
tipo: mc
opciones_explicitas: ["más abundante", "menos abundante", "igual de escaso"]

explicacion: |
  La disponibilidad casi universal de los minerales de hierro permitió que las sociedades no dependieran tanto de las rutas comerciales de estaño, que eran muy limitadas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["prehistoria", "metales"]

respuesta: "Cobre"
tipo: completar
respuestas_validas:
  - "Cobre"

enunciado: "La primera etapa de la Edad de los Metales, caracterizada por el uso de metales nativos y la posterior fundición de aleaciones simples, es la Edad del ___."

explicacion: |
  La Edad del Cobre (Calcolítico) precede a la Edad del Bronce.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["metalurgia", "aleaciones"]

opciones_explicitas: ["Estaño", "Zinc", "Níquel", "Plomo"]
respuesta: "Estaño"
tipo: mc

enunciado: "El bronce es una aleación metálica compuesta principalmente por cobre y un segundo elemento clave, que es el ___."

explicacion: |
  El bronce se obtiene al fundir cobre con estaño, lo que permite obtener un metal más duro y resistente.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["cronologia", "edades"]

opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]
respuesta_orden: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]
tipo: ordenar

enunciado: "Ordena cronológicamente las edades de los metales, desde la más antigua hasta la más reciente."

explicacion: |
  El orden correcto es Cobre (Calcolítico), Bronce (Aleación) e Hierro (Metal más duro y abundante).
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["tecnologia", "hierro"]

respuesta: "Edad del Hierro"
tipo: mc
opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

enunciado: "La etapa que se caracteriza por la aparición de herramientas y armas mucho más resistentes y duraderas debido a la alta temperatura necesaria para su fundición es la ___."

explicacion: |
  El hierro requiere temperaturas de fundición mucho más elevadas que el cobre o el bronce, marcando un salto tecnológico importante.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["metalurgia"]

respuesta: "Bronce"
tipo: mc
opciones_explicitas: ["Cobre puro", "Bronce", "Acero"]

enunciado: "Si mezclamos (aleamos) cobre y estaño, ¿qué material obtenemos, el que da nombre a la edad tecnológica posterior a la del cobre?"

explicacion: |
  La aleación de cobre y estaño define la Edad del Bronce.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["prehistoria", "metalurgia"]

variables:
  datos: [["El descubrimiento de la fundición de cobre permitió la creación de las primeras herramientas duraderas.", "Edad del Cobre"], ["El uso de aleaciones de cobre con estaño dio origen a objetos más resistentes.", "Edad del Bronce"], ["La metalurgia de este metal permitió la creación de armas y herramientas de gran dureza.", "Edad del Hierro"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

enunciado: "Un arqueólogo encuentra una pieza cuya característica principal es: {datos[idx][0]}"

explicacion: |
  La respuesta correcta es {datos[idx][1]}. La transición entre edades se define por el metal predominante en la tecnología de la época.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["transicion", "tecnologia"]

variables:
  datos: [["Cobre", "Edad del Cobre"], ["Bronce", "Edad del Bronce"], ["Hierro", "Edad del Hierro"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Edad del Cobre"
  - "Edad del Bronce"
  - "Edad del Hierro"

enunciado: "Si un yacimiento presenta una abundancia de herramientas hechas de {datos[idx][0]}, estamos ante la ___."

explicacion: |
  El uso de {datos[idx][0]} es el indicador clave de la {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "basico"
  tags: ["cronologia", "edades"]

variables:
  orden_correcto: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

respuesta_orden: orden_correcto
tipo: ordenar
opciones_explicitas: ["Edad del Cobre", "Edad del Bronce", "Edad del Hierro"]

enunciado: "Ordena cronológicamente las edades de los metales, desde la más antigua a la más reciente:"

explicacion: |
  El orden correcto es: {orden_correcto}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "avanzado"
  tags: ["propiedades", "quimica_antigua"]

variables:
  datos: [["La baja temperatura de fusión del cobre facilitó su primer uso.", "Cobre"], ["La necesidad de alear estaño con cobre para obtener mayor dureza.", "Bronce"], ["La abundancia de este metal y su gran dureza tras la fundición.", "Hierro"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Cobre", "Bronce", "Hierro"]

enunciado: "Identifica el metal asociado al siguiente proceso: {datos[idx][0]}"

explicacion: |
  El proceso descrito corresponde al uso de {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "metalurgia_cobre_hierro"
  nivel: "intermedio"
  tags: ["impacto_social", "hierro"]

variables:
  datos: [["La democratización de las herramientas debido a la abundancia del metal.", "Edad del Hierro"], ["El auge del comercio de estaño para la aleación.", "Edad del Bronce"], ["El inicio de la metalurgia con metales nativos.", "Edad del Cobre"]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "El fenómeno de {datos[idx][0]} es característico de la ___."

explicacion: |
  La descripción corresponde a la {datos[idx][1]}.
```

## Sección: propiedad-jerarquia-estado (25 preguntas)

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

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["revolucion_neolitica", "acumulacion"]

respuesta: "propiedad privada"
tipo: "mc"
opciones_explicitas: ["propiedad colectiva", "propiedad privada"]

enunciado: "En un sistema de asentamientos fijos con excedentes, la organización social tiende a transicionar de una propiedad colectiva (típica de comunidades nómadas) hacia una ___."

explicacion: |
  El control sobre el excedente y la tierra delimita territorios y derechos de uso, consolidando la propiedad privada frente al modelo de uso común de las tribus nómadas.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["derecho", "propiedad"]

respuesta: "delito"
tipo: "mc"
opciones_explicitas: ["acto social", "delito"]

enunciado: "En una sociedad con propiedad privada consolidada, el acto de apropiarse de la tierra de otro sin permiso es considerado un ___ bajo el código del Estado."

explicacion: |
  La creación de leyes penales es fundamental para proteger la propiedad privada, transformando la apropiación de bienes ajenos en un delito contra el orden establecido.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["excedente", "poder", "clases_sociales"]

opciones_explicitas: ["el control de la tierra", "el control de la fuerza", "el control de la religión", "el control de la tecnología"]

respuesta: "el control de la tierra"
tipo: "mc"

enunciado: "En las primeras sociedades con excedente agrícola, la jerarquía social se consolidó principalmente a través de ___."

explicacion: |
  La propiedad de la tierra (medio de producción) permitió a unas familias acumular riqueza, mientras que la capacidad de ejercer fuerza o autoridad religiosa legitimaba ese control sobre el resto de la población.
```

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

```
metadata:
  materia: "historia_profucha"
  tema: "propiedad_jerarquia_estado"
  nivel: "basico"
  tags: ["propiedad", "desigualdad"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [["Familia A posee tierras y herramientas, mientras que Familia B posee sólo su fuerza de trabajo", "dominante"], ["Familia C posee excedentes almacenados, mientras que Familia D posee tierras comunales", "dominante"]]

enunciado: "Considerando que {datos[caso_idx][0]}, la relación social resultante para la familia que posee más recursos es de carácter ___."

respuesta: datos[caso_idx][1]
tipo: "mc"

opciones_explicitas: ["dominante", "subordinada"]

explicacion: |
  La posesión de los medios de producción (tierra, herramientas, excedente) establece una relación asimétrica de poder entre quienes poseen y quienes solo pueden ofrecer su trabajo.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["jerarquia", "orden"]

respuesta_orden: ["recaudación de tributos", "imposición de normas", "mantenimiento del orden"]
tipo: ordenar
opciones_explicitas: ["imposición de normas", "recaudación de tributos", "mantenimiento del orden"]

enunciado: "Ordene los procesos que consolidan la autoridad de un Estado centralizado, desde la base económica hasta la cohesión social:"

explicacion: |
  Primero se extrae el excedente (tributos), luego se establecen reglas (normas) y finalmente se asegura la estabilidad (orden).
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "intermedio"
  tags: ["propiedad_privada", "desigualdad"]

enunciado: "Según el proceso de transición histórica, la aparición de la propiedad privada es la consecuencia directa de la acumulación de excedentes, que permitió que la tierra y los bienes pasaran de ser de uso común a ser de uso individual."

opciones_explicitas: ["propiedad común", "propiedad privada", "propiedad estatal"]
respuesta: "propiedad privada"
tipo: mc

explicacion: |
  Al existir un exceso de producción, surge la necesidad de delimitar quién es dueño de qué, transformando el acceso a los recursos en un derecho de propiedad privada.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "propiedad_jerarquia_estado"
  nivel: "avanzado"
  tags: ["estado", "poder"]

enunciado: "En el proceso histórico estudiado, la fase final de la organización social compleja es la aparición del Estado organizado, que surge para proteger la propiedad y administrar la fuerza."

opciones_explicitas: ["comunidad tribal", "Estado organizado", "anarquía"]
respuesta: "Estado organizado"
tipo: mc

explicacion: |
  El Estado surge como la institución que institucionaliza la jerarquía, establece leyes para la propiedad y administra el excedente y la defensa.
```

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

## Sección: escritura-primeras-ciudades (25 preguntas)

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["mesopotamia", "sumerios", "cuneiforme"]

respuesta: "Mesopotamia"
tipo: completar
respuestas_validas:
  - "Mesopotamia"

enunciado: "La escritura surgió en la región de ___ hace aproximadamente 5000 años."

explicacion: |
  La escritura se desarrolló en Mesopotamia, en la región de Sumer, para satisfacer necesidades de registro.
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["contabilidad", "administracion"]

respuesta: "administrativos"
tipo: mc
opciones_explicitas: ["poéticos", "administrativos", "religiosos", "militares"]

enunciado: "Originalmente, la escritura no se inventó para la literatura, sino para llevar registros ___."

explicacion: |
  Las primeras tablillas se utilizaban principalmente para la contabilidad y la administración de recursos en las ciudades-estado.
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["cuneiforme", "sumerios"]

variables:
  datos: [["sumerios", "cuneiforme"], ["egipcios", "jeroglíficos"], ["fenicios", "alfabeto"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["cuneiforme", "jeroglíficos", "alfabeto"]

enunciado: "El pueblo de {datos[idx][0]} desarrolló el sistema de escritura conocido como {datos[idx][1]}."

explicacion: |
  Los sumerios en Mesopotamia crearon la escritura cuneiforme, caracterizada por marcas en forma de cuña sobre arcilla.
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["proceso", "evolucion"]

respuesta_orden: ["Pictogramas", "Ideogramas", "Fonogramas"]
tipo: ordenar
opciones_explicitas: ["Pictogramas", "Ideogramas", "Fonogramas"]

enunciado: "Ordena cronológicamente la evolución conceptual de los signos en la escritura antigua:"

explicacion: |
  La escritura evolucionó desde dibujos de objetos (pictogramas), pasando por conceptos (ideogramas), hasta representar sonidos (fonogramas).
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["tiempo", "mesopotamia"]

respuesta: 5000
tipo: completar
tolerancia_abs: 100

enunciado: "Se estima que la escritura surgió hace aproximadamente ___ años."

explicacion: |
  La invención de la escritura en Mesopotamia se sitúa hace unos 5000 años, marcando el inicio de la Edad Antigua.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["escritura", "prehistoria", "historia"]

respuesta: "historia"
tipo: completar
respuestas_validas:
  - "historia"

enunciado: "La aparición de la escritura marca la transición de la prehistoria al inicio de la ___."

explicacion: |
  La prehistoria se define por la ausencia de registros escritos. Con la invención de la escritura, los seres humanos pueden dejar testimonios directos de sus leyes, mitos y transacciones, permitiendo el estudio de la historia documentada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["arqueologia", "metodologia"]

variables:
  escenario: uno_de([["restos materiales (huesos, herramientas)", "arqueología"], ["registros escritos (tablillas, papiros)", "historia"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["arqueología", "historia"]

enunciado: "Si un investigador encuentra una serie de tablillas de arcilla con nombres y cantidades de grano, está estudiando principalmente la ___."

explicacion: |
  El uso de registros escritos permite pasar de la reconstrucción basada en restos materiales (arqueología) al análisis de la historia documentada.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["cronologia", "transicion"]

respuesta: "verdadero"
tipo: completar
enunciado: "¿La escritura permite conocer la mentalidad de una civilización de forma directa, a diferencia de los restos materiales que requieren interpretación indirecta?"

explicacion: |
  Verdadero. Los objetos nos dicen qué tenían o cómo vivían, pero los textos nos dicen qué pensaban, qué leyes tenían y cómo se llamaban a sí mismos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["metodologia", "transicion"]

respuesta: "documental"
tipo: completar
respuestas_validas:
  - "documental"

enunciado: "Cuando un historiador utiliza textos antiguos para reconstruir un evento, está realizando un análisis de tipo ___."

explicacion: |
  El análisis documental se basa en el uso de fuentes escritas (documentos) para la reconstrucción de procesos sociales y políticos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["evidencia", "metodologia"]

respuesta_orden: ["restos materiales", "escritura", "historia documentada"]
tipo: ordenar
opciones_explicitas: ["restos materiales", "escritura", "historia documentada"]

enunciado: "Ordena los niveles de evidencia según el grado de complejidad en la reconstrucción de la vida social, desde lo más material hasta lo más intelectual/directo:"

explicacion: |
  La escala comienza con la cultura material (objetos), sigue con la capacidad de registrar (escritura) y culmina en la capacidad de estudiar la historia a través de testimonios directos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["mesopotamia", "escritura", "uruk"]

respuesta: "excedente"
tipo: "completar"
respuestas_validas:
  - "excedente"

enunciado: "El surgimiento de las primeras ciudades en Mesopotamia, como Uruk, estuvo estrechamente ligado a la capacidad de producir un ___ agrícola que permitía sostener a poblaciones no dedicadas a la agricultura."

explicacion: |
  La capacidad de producir más alimento del que se consume inmediatamente (excedente) permitió que parte de la población se especializara en otras tareas (artesanos, escribas, sacerdotes), dando origen a la estructura urbana y la necesidad de registrar estas cantidades mediante la escritura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["causalidad", "sociedad"]

respuesta: "excedente agrícola"
tipo: "mc"
opciones_explicitas: ["excedente agrícola", "escritura", "estratificación social"]

enunciado: "En el contexto de las primeras ciudades mesopotámicas, la aparición de la escritura fue una respuesta directa a la necesidad de gestionar el ___."

explicacion: |
  La escritura no nació como un medio de expresión literaria, sino como una herramienta contable para registrar el excedente agrícola y los bienes que entraban en los templos o palacios.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["estado", "jerarquia"]

respuesta: "estatal"
tipo: "completar"
respuestas_validas:
  - "estatal"

enunciado: "La gestión de los recursos excedentes y la redistribución de bienes exigieron una organización ___ compleja, lo que consolidó el poder de las élites en las primeras ciudades."

explicacion: |
  La complejidad de la vida urbana y la gestión de excedentes impulsaron la creación de estructuras de poder centralizadas o estados primordiales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["contabilidad", "uruk"]

respuesta: "contabilidad"
tipo: "completar"
respuestas_validas:
  - "contabilidad"

enunciado: "Antes de convertirse en un sistema de escritura fonética, los primeros signos en las ciudades de Mesopotamia servían para la ___ de bienes y ganado."

explicacion: |
  Los proto-escrituras (tokens o fichas de arcilla) eran herramientas de contabilidad para llevar el control de los inventarios en los centros de redistribución.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["secuencia", "causalidad"]

respuesta_orden: ["excedente agrícola", "especialización del trabajo", "aparición de la escritura"]
tipo: "ordenar"
opciones_explicitas: ["excedente agrícola", "especialización del trabajo", "aparición de la escritura"]

enunciado: "Ordena cronológicamente los fenómenos que permitieron el desarrollo de la civilización urbana en Mesopotamia:"

explicacion: |
  Primero se produce el excedente (producción de más comida de la necesaria), esto permite que no todos tengan que cultivar (especialización), y esa especialización genera la necesidad de registrar la producción (escritura).
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["escritura", "sociedad", "memoria"]

tipo: mc
opciones_explicitas: ["Permitió la transmisión de conocimiento más allá de la memoria oral", "Eliminó la necesidad de la comunicación verbal", "Redujo el tamaño de las poblaciones", "Hizo que la historia fuera irrelevante"]
respuesta: "Permitió la transmisión de conocimiento más allá de la memoria oral"

enunciado: "La invención de la escritura en las primeras civilizaciones permitió que el conocimiento fuera ___________."

explicacion: |
  La escritura permitió que la información no dependiera únicamente de la memoria de los individuos, facilitando la acumulación de saber a través de las generaciones.
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["administracion", "burocracia", "estado"]

tipo: completar
respuestas_validas:
  - "administrar"
  - "controlar"

enunciado: "El desarrollo de sistemas de escritura fue fundamental para poder ___________ las excedentes de producción y los tributos en sociedades cada vez más complejas."

explicacion: |
  La complejidad social de las primeras ciudades requería un registro preciso de recursos, lo que impulsó la creación de sistemas de contabilidad y administración.
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["evolucion", "comunicacion"]

tipo: ordenar
opciones_explicitas: ["Tradición oral", "Signos pictográficos", "Escritura fonética"]

enunciado: "Ordena cronológicamente la evolución de los sistemas de registro de información en las primeras civilizaciones:"

explicacion: |
  La evolución comenzó con la comunicación oral, pasó por representaciones de objetos (pictogramas) y finalmente hacia sistemas que representaban sonidos (fonética).
respuesta_orden: ["Tradición oral", "Signos pictográficos", "Escritura fonética"]
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["estado", "leyes", "orden"]

tipo: mc
respuesta: "Estabilidad y orden social"
opciones_explicitas: ["Estabilidad y orden social", "Inestabilidad constante", "Desigualdad extrema"]

enunciado: "Cuando las sociedades pasaron de leyes orales a leyes escritas, el resultado principal fue la ___________."

explicacion: |
  La codificación de leyes por escrito permitió una aplicación más uniforme y predecible de la justicia, contribuyendo a la estabilidad del Estado.
```

```
metadata:
  materia: "historia"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["memoria", "registro", "tiempo"]

tipo: completar
tolerancia_abs: 0

enunciado: "Antes de la escritura, la historia dependía de la memoria. Con la escritura, la historia se convierte en un ___ que trasciende el tiempo."

respuesta: "registro"

explicacion: |
  La escritura transformó la memoria humana en un registro físico, permitiendo que la historia fuera un objeto de estudio permanente y no algo sujeto al olvido biológico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["mesopotamia", "sumerios"]

respuesta: "Mesopotamia"
tipo: mc
opciones_explicitas: ["Mesopotamia", "Egipto", "China", "India"]

enunciado: "El sistema de escritura basado en marcas en forma de cuña (cuneiforme) se desarrolló en la región de ___."

explicacion: |
  La escritura cuneiforme fue desarrollada por los sumerios en la antigua Mesopotamia alrededor del 3200 a.C.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "basico"
  tags: ["egipto", "jeroglíficos"]

respuesta: "Egipto"
tipo: mc
opciones_explicitas: ["Egipto", "Mesopotamia", "Fenicia", "China"]

enunciado: "Los jeroglíficos fueron utilizados por las civilizaciones del valle del Nilo."

explicacion: |
  Los jeroglíficos egipcios combinaban logogramas y signos fonéticos para representar el lenguaje.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["cronologia", "origen"]

variables:
  datos: [["Mesopotamia", "Sumerios"], ["Egipto", "Egipcios"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Sumerios", "Egipcios"]

enunciado: "La escritura en la región de {datos[idx][0]} fue desarrollada originalmente por los {datos[idx][1]}."

explicacion: |
  La transición de la proto-escritura a sistemas complejos fue fundamental para la administración de las primeras ciudades-estado.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "avanzado"
  tags: ["orden", "evolucion"]

respuesta_orden: ["Tokens", "Escritura Cuneiforme", "Tablillas"]
tipo: ordenar
opciones_explicitas: ["Tokens", "Escritura Cuneiforme", "Tablillas"]

enunciado: "Ordena la evolución de los soportes y formas de registro en el contexto de Mesopotamia:"

explicacion: |
  El proceso comenzó con objetos de arcilla (tokens) para contar, evolucionando hacia signos abstractos en tablillas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "escritura_primeras_ciudades"
  nivel: "intermedio"
  tags: ["fenicia", "alfabeto"]

respuesta: "Fenicia"
tipo: mc
opciones_explicitas: ["Fenicia", "China", "Mesopotamia", "Egipto"]

enunciado: "A diferencia de los sistemas complejos, el sistema alfabético fue perfeccionado por los fenicios en la región de ___."

explicacion: |
  El alfabeto fenicio fue un sistema fonético que facilitó el comercio y fue la base de muchos alfabetos modernos.
```

## Sección: antigua-grecia (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["guerra", "atenas", "esparta"]
tipo: mc
enunciado: "El conflicto que marcó el declive de la hegemonía ateniense y reconfiguró el mapa político griego en el siglo V a.C. fue causado principalmente por el temor de los estados del Peloponeso a:"
opciones_explicitas:
  - "El crecimiento económico de Corinto"
  - "El poder naval y político de Atenas"
  - "La invasión persa de 480 a.C."
  - "La alianza de Tebas con Esparta"
respuesta: "El poder naval y político de Atenas"
explicacion: "La Guerra del Peloponeso (431-404 a.C.) estalló debido al miedo de Esparta y sus aliados al creciente poder de Atenas, especialmente después de la formación de la Liga de Delos."
```

```
metadata:
  materia: "historia_profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["batalla", "naval", "salamina"]
tipo: vf
enunciado: "La Batalla de Salamina (480 a.C.) fue una victoria decisiva de la flota griega unida sobre la armada persa, evitando la conquista de Grecia continental por Jerjes I."
respuesta: verdadero
explicacion: "La batalla de Salamina frenó el avance persa y permitió a los griegos consolidar su resistencia, siendo un punto de inflexión crucial en las Guerras Médicas."
```

```
metadata:
  materia: "historia_profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["esparta", "agoge", "sociedad"]
tipo: completar
enunciado: "En Esparta, el sistema educativo y militar obligatorio para los varones ciudadanos desde los 7 años se denominaba __________."
respuesta: "agoge"
respuestas_validas:
  - "Agoge"
  - "agoge"
  - "AGOGE"
explicacion: "El Agoge era el programa de entrenamiento físico y moral diseñado para crear soldados disciplinados y leales al estado espartano."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["filosofia", "socrates", "etica"]
tipo: mc
enunciado: "¿Qué filósofo ateniense es conocido por su método de interrogatorio dialéctico (mayéutica) y su ejecución por impiedad en 399 a.C.?"
opciones_explicitas:
  - "Platón"
  - "Aristóteles"
  - "Sócrates"
  - "Diógenes"
respuesta: "Sócrates"
explicacion: "Sócrates no escribió obras propias; su pensamiento se conoce a través de sus discípulos, principalmente Platón. Fue condenado a beber cicuta."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["sociedad", "atenas", "mujeres"]
tipo: completar
enunciado: "En la democracia ateniense clásica, las mujeres, los esclavos y los metecos (extranjeros residentes) estaban __________ del proceso político directo."
respuesta: "excluidos"
respuestas_validas:
  - "excluidos"
  - "Excluidos"
  - "EXCLUIDOS"
explicacion: "Solo los varones adultos hijos de padres atenienses tenían derechos políticos plenos, a pesar de que Atenas es considerada la cuna de la democracia."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["arte", "partenon", "pericles"]
tipo: mc
enunciado: "Durante el gobierno de Pericles, ¿qué arquitecto supervisó la construcción del Partenón en la Acrópolis de Atenas?"
opciones_explicitas:
  - "Fidias"
  - "Ictino"
  - "Calícrates"
  - "Praxíteles"
respuesta: "Ictino"
explicacion: "Ictino, junto con Calícrates, diseñó el Partenón, mientras que Fidias supervisó las esculturas y la estatua crisoelefantina de Atenea."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["mitologia", "troya", "homero"]
tipo: vf
enunciado: "La Ilíada de Homero narra principalmente los últimos días de la guerra de Troya, centrada en la cólera del héroe Aquiles, no toda la guerra."
respuesta: verdadero
explicacion: "La Ilíada se concentra en la \"cólera de Aquiles\" durante un breve periodo al final de la guerra, dejando otros eventos fuera de su narrativa inmediata."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["termopilas", "leonidas", "persas"]
tipo: completar
enunciado: "El rey __________ de Esparta lideró a un pequeño grupo de hoplitas y aliados en la defensa del Paso de las Termópilas contra el ejército persa de Jerjes."
respuesta: "leonidas"
respuestas_validas:
  - "Leonidas"
  - "leonidas"
  - "LEONIDAS"
explicacion: "Leonidas I murió junto con sus 300 espartanos (y otros aliados) en 480 a.C., simbolizando la resistencia heroica contra la invasión persa."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["filosofia", "aristoteles", "logica"]
tipo: mc
enunciado: "¿Quién fue el fundador del Liceo y sistematizó la lógica formal, siendo discípulo de Platón?"
opciones_explicitas:
  - "Sócrates"
  - "Aristóteles"
  - "Epicuro"
  - "Zenón de Citio"
respuesta: "Aristóteles"
explicacion: "Aristóteles amplió el conocimiento en biología, física, metafísica y ética, estableciendo las bases del pensamiento lógico occidental."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["democracia", "eklesia", "atenas"]
tipo: completar
enunciado: "La asamblea popular ateniense, donde los ciudadanos votaban directamente las leyes y decisiones de estado, se llamaba __________."
respuesta: "ekklesia"
respuestas_validas:
  - "ekklesia"
  - "Ekklesia"
  - "EKKELESIA"
explicacion: "La Ekklesia era el órgano soberano de la democracia ateniense, reunida regularmente en la Pnice para deliberar."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["guerra", "derrota", "atenas"]
tipo: vf
enunciado: "Atenas perdió la Guerra del Peloponeso en 404 a.C. debido al bloqueo naval espartano liderado por Lisandro, que cortó su suministro de grano de Hellesponto."
respuesta: verdadero
explicacion: "La flota ateniense fue destruida en la batalla de Egospótamos, lo que llevó al asedio y rendición de Atenas, poniendo fin a la guerra."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["politica", "demagogos", "atenas"]
tipo: mc
enunciado: "¿Qué político ateniense fue considerado un demagogo influyente que promovió el empoderamiento de la Asamblea sobre el Areópago?"
opciones_explicitas:
  - "Címon"
  - "Mirónides"
  - "Efialtes"
  - "Temístocles"
respuesta: "Efialtes"
explicacion: "Efialtes, junto con Pericles, redujo el poder del Areópago (aristocracia) y fortaleció la democracia radical en Atenas."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["arte", "escultura", "mirón"]
tipo: completar
enunciado: "La escultura __________, que representa a un atleta lanzando un disco, es una obra maestra del periodo clásico de Mirón, conocida por su contrapposto inicial."
respuesta: "discóbolo"
respuestas_validas:
  - "discóbolo"
  - "Discóbolo"
  - "DISCOBOLO"
explicacion: "El Discóbolo de Mirón captura el momento de máxima tensión antes del lanzamiento, mostrando movimiento y equilibrio."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["filosofia", "estoicismo", "zenon"]
tipo: mc
enunciado: "¿Quién fundó la escuela estoica en Atenas, enseñando que la virtud es el único bien y que se debe vivir conforme a la naturaleza?"
opciones_explicitas:
  - "Epicuro"
  - "Zenón de Citio"
  - "Pitágoras"
  - "Heráclito"
respuesta: "Zenón de Citio"
explicacion: "Zenón de Citio estableció el estoicismo en el Pórtico Pintado (Stoa Poikile) de Atenas tras el 300 a.C. aproximadamente."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["batalla", "maraton", "miltiades"]
tipo: completar
enunciado: "La primera invasión persa de Grecia fue detenida por los atenienses en la Batalla de __________ en 490 a.C., bajo el mando de Miltíades."
respuesta: "maratón"
respuestas_validas:
  - "maratón"
  - "Maraton"
  - "MARATON"
explicacion: "La victoria en Maratón demostró que los persas podían ser derrotados y consolidó la confianza de Atenas en su poder naval."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["teatro", "tragedia", "esquilo"]
tipo: mc
enunciado: "¿Qué dramaturgo es considerado el padre de la tragedia griega y escribió la obra \"Los persas\", la única tragedia que sobrevive con tema contemporáneo a su autor?"
opciones_explicitas:
  - "Sófocles"
  - "Eurípides"
  - "Esquilo"
  - "Aristófanes"
respuesta: "Esquilo"
explicacion: "Esquilo introdujo el segundo actor, permitiendo el diálogo dramático. \"Los persas\" se basa en la batalla de Salamina."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["alianza", "delos", "tesoro"]
tipo: completar
enunciado: "La __________ de Delos era una alianza militar de ciudades griegas liderada por Atenas, cuyo tesoro estaba originalmente en la isla de Delos."
respuesta: "liga"
respuestas_validas:
  - "liga"
  - "Liga"
  - "LIGA"
explicacion: "La Liga de Delos evolucionó hacia el primer imperio ateniense, con el tesoro trasladado a Atenas y los fondos usados para construir el Partenón."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["filosofia", "pitagoras", "matematica"]
tipo: mc
enunciado: "¿Qué filósofo y matemático fundó una escuela en Crotona que combinaba matemáticas, música y misticismo, y es famoso por el teorema que lleva su nombre?"
opciones_explicitas:
  - "Tales de Mileto"
  - "Pitágoras"
  - "Anaximandro"
  - "Parménides"
respuesta: "Pitágoras"
explicacion: "Pitágoras y su secta creían que la realidad es fundamentalmente matemática y practicaban la metempsicosis (reencarnación)."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["batalla", "filipo", "macedonia"]
tipo: vf
enunciado: "La Batalla de Queronea (338 a.C.) puso fin a la independencia de las polis griegas y estableció la hegemonía de Filipo II de Macedonia."
respuesta: verdadero
explicacion: "La victoria macedonia en Queronea obligó a las ciudades griegas a unirse en la Liga de Corinto bajo liderazgo macedonio."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["historiografia", "herodoto", "persas"]
tipo: completar
enunciado: "__________, conocido como el padre de la Historia, escribió \"Historias\" detallando las Guerras Médicas y describiendo las costumbres de los pueblos conocidos."
respuesta: "Herodoto"
respuestas_validas:
  - "Herodoto"
  - "herodoto"
  - "HERODOTO"
explicacion: "Herodoto recopiló relatos orales y observaciones para documentar el conflicto entre Grecia y Persia, aunque a veces incluía mitos."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["filosofia", "talos", "agua"]
tipo: mc
enunciado: "¿Qué filósofo de Mileto fue considerado el primer pensador occidental al proponer que el agua es el arjé (principio) de todas las cosas?"
opciones_explicitas:
  - "Anaxímenes"
  - "Tales de Mileto"
  - "Anaximandro"
  - "Heráclito"
respuesta: "Tales de Mileto"
explicacion: "Tales buscó una explicación natural y material para el origen del universo, alejándose de las explicaciones mitológicas."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["batalla", "temistocles", "estrategia"]
tipo: completar
enunciado: "El almirante ateniense __________ persuadió a los griegos de luchar en las estrechas aguas de Salamina, neutralizando la ventaja numérica persa."
respuesta: "temistocles"
respuestas_validas:
  - "temistocles"
  - "Temistocles"
  - "TEMISTOCLES"
explicacion: "Temístocles, creador de la flota ateniense, argumentó que el estrecho canal impediría la maniobra de la flota persa más grande."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["filosofia", "epicuro", "placer"]
tipo: mc
enunciado: "¿Qué filósofo fundó una escuela en su jardín en Atenas, enseñando que el fin último de la vida es la búsqueda del placer (aponía) y la ausencia de dolor?"
opciones_explicitas:
  - "Zenón"
  - "Epicuro"
  - "Aristóteles"
  - "Platón"
respuesta: "Epicuro"
explicacion: "Epicuro promovía una vida sencilla y tranquila, evitando el miedo a los dioses y a la muerte, definiendo el placer como la ausencia de sufrimiento."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["guerra", "inicio", "431"]
tipo: completar
enunciado: "La Guerra del Peloponeso comenzó oficialmente en el año __________ a.C., tras una serie de incidentes diplomáticos y la disputa por Corcira y Potidea."
respuesta: 431
respuestas_validas:
  - 431
  - "431 a.C."
  - "431 AC"
explicacion: "El año 431 a.C. marca el inicio formal del conflicto, aunque las tensiones habían crecido durante décadas."
```

```
metadata:
  materia: "historia-profunda"
  tema: "antigua-grecia"
  nivel: "intermedio"
  tags: ["filosofia", "heraclito", "cambio"]
tipo: mc
enunciado: "¿Qué filósofo de Éfeso es famoso por su doctrina de que \"todo fluye\" y que \"no te puedes bañar dos veces en el mismo río\"?"
opciones_explicitas:
  - "Parménides"
  - "Heráclito"
  - "Demócrito"
  - "Empédocles"
respuesta: "Heráclito"
explicacion: "Heráclito enfatizaba el cambio constante y el conflicto como la fuente de toda realidad, opuesto a la estática de Parménides."
```

