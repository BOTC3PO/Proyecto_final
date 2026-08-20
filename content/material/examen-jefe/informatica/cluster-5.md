# Examen jefe — Maestro de Sistemas Operativos e IA

> Logro #175. Completaste el parcial dominando la evolución de los sistemas, la inteligencia artificial y la gestión técnica. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **124 preguntas totales** en 5/5 secciones.

---

## Sección: historia-y-evolucion-de-los-sistemas-operativos (23 preguntas)

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["definicion", "concepto_basico"]

variables:
  rol: uno_de(["director_de_orquesta", "intermediario", "gestor"])

respuesta: "intermediario"
tipo: mc
opciones_explicitas: ["intermediario", "hardware", "aplicacion", "usuario"]

enunciado: "En la analogía del director de orquesta, el Sistema Operativo actúa principalmente como el {rol} entre el usuario y los componentes físicos de la computadora."

explicacion: |
  El SO no es el hardware ni el usuario, sino el software que gestiona la comunicación y los recursos, actuando como intermediario.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["historia", "batch"]

variables:
  decada: random(1950, 1960)
  caracteristica: uno_de(["secuencial", "paralelo", "interactivo"])

respuesta: "secuencial"
tipo: mc
opciones_explicitas: ["secuencial", "paralelo", "interactivo", "distribuido"]

enunciado: "En la década de {decada}, los primeros sistemas operativos utilizaban el procesamiento por lotes, donde los trabajos se ejecutaban de manera {caracteristica} sin intervención del usuario."

explicacion: |
  El procesamiento por lotes (batch) ejecutaba tareas una tras otra sin pausa ni interacción humana directa, a diferencia de los sistemas modernos interactivos.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["mainframe", "multiusuario"]

variables:
  tipo_terminal: uno_de(["tontas", "inteligentes", "graficas"])

respuesta: "tontas"
tipo: mc
opciones_explicitas: ["tontas", "inteligentes", "graficas", "touch"]

enunciado: "Con la llegada de los mainframes en los años 60, los sistemas multiusuario permitían el acceso mediante terminales {tipo_terminal}, que no procesaban datos por sí mismas."

explicacion: |
  Las terminales tontas solo enviaban y recibían datos, delegando todo el procesamiento al mainframe central.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["microprocesador", "pc"]

variables:
  decada: uno_de([70, 80])
  dispositivo: uno_de(["ordenadores_personales", "supercomputadoras", "mainframes"])

respuesta: "ordenadores_personales"
tipo: mc
opciones_explicitas: ["ordenadores_personales", "supercomputadoras", "mainframes", "minicomputadoras"]

enunciado: "La llegada de los microprocesadores en los años {decada} permitió la popularización de los {dispositivo} en los hogares."

explicacion: |
  El microprocesador abarató el costo de las computadoras, facilitando su entrada en el mercado doméstico.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["windows", "macos", "competencia"]

variables:
  sistema_estandar: uno_de(["Windows", "Mac OS"])
  caracteristica_windows: uno_de(["interfaz_grafica_accesible", "codigo_abierto", "robustez_servidor"])
  caracteristica_mac: uno_de(["experiencia_integrada", "precio_bajo", "maximo_hardware"])

respuesta: "interfaz_grafica_accesible"
tipo: mc
opciones_explicitas: ["interfaz_grafica_accesible", "codigo_abierto", "robustez_servidor", "experiencia_integrada"]

enunciado: "Durante los años 90, Windows se consolidó como el estándar corporativo y doméstico gracias a su {caracteristica_windows}, mientras que Mac OS destacaba por su experiencia más integrada."

explicacion: |
  Windows ganó mercado por su accesibilidad y compatibilidad, mientras que Mac OS se enfocaba en la integración hardware-software.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["linux", "codigo_abierto"]

variables:
  ambito: uno_de(["academico", "domestico", "gaming", "movil"])
  ventaja_linux: uno_de(["codigo_abierto", "precio_alto", "interfaz_cerrada", "hardware_exclusivo"])

respuesta: "codigo_abierto"
tipo: mc
opciones_explicitas: ["codigo_abierto", "precio_alto", "interfaz_cerrada", "hardware_exclusivo"]

enunciado: "Paralelamente a Windows y Mac OS, Linux ganaba terreno en el ámbito {ambito} gracias a su {ventaja_linux} y robustez."

explicacion: |
  Linux se popularizó en servidores y entornos académicos por su modelo de código abierto y estabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["impacto_social", "democratizacion"]

variables:
  antes: uno_de(["codigo_binario", "interfaces_graficas", "nube", "movilidad"])
  despues: uno_de(["interfaces_graficas", "codigo_binario", "lotes", "maquinas_de_escribir"])

respuesta: "interfaces_graficas"
tipo: mc
opciones_explicitas: ["interfaces_graficas", "codigo_binario", "lotes", "maquinas_de_escribir"]

enunciado: "Gracias a los sistemas operativos, la interacción pasó de escribir {antes} a usar {despues} intuitivas, democratizando el acceso a la tecnología."

explicacion: |
  Los SO reemplazaron la necesidad de programar en binario o comandos complejos por interfaces gráficas amigables.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "avanzado"
  tags: ["era_actual", "movilidad"]

variables:
  contexto: uno_de(["movilidad", "lotes", "mainframes", "binario"])

respuesta: "movilidad"
tipo: completar
enunciado: "En el siglo XXI, la evolución de los sistemas operativos se ha desplazado hacia la {contexto} y la integración en la nube."
respuestas_validas:
    - "movilidad"
    - "Movilidad"

explicacion: |
  La popularización de smartphones y la nube han redefinido los sistemas operativos modernos hacia la movilidad constante.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["gestion", "memoria"]

variables:
  recurso: uno_de(["memoria", "disco_duro", "pantalla", "teclado"])
  accion: uno_de(["asignar", "fabricar", "vender", "desmontar"])

respuesta: "asignar"
tipo: mc
opciones_explicitas: ["asignar", "fabricar", "vender", "desmontar"]

enunciado: "Una de las tareas críticas del SO es {accion} la memoria RAM para las aplicaciones en ejecución."

explicacion: |
  El SO gestiona la memoria física, asignando y liberando espacio para que las aplicaciones funcionen sin conflictos.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["terminologia", "mainframe"]

variables:
  nombre: uno_de(["terminales_tontas", "smartphones", "tablets", "laptops"])

respuesta: "tontas"
tipo: mc
opciones_explicitas: ["tontas", "inteligentes", "graficas", "touch"]

enunciado: "Las terminales que solo enviaban datos al mainframe sin procesarlos se denominaban {nombre}."

explicacion: |
  El término 'tonta' (dumb terminal) se usa para dispositivos sin capacidad de procesamiento independiente.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["conectividad", "historia"]

variables:
  evento: uno_de(["fin_del_aislamiento", "inicio_del_batch", "fin_del_grafico", "inicio_del_binario"])

respuesta: "fin_del_aislamiento"
tipo: mc
opciones_explicitas: ["fin_del_aislamiento", "inicio_del_batch", "fin_del_grafico", "inicio_del_binario"]

enunciado: "La era de los años 90 marcó el {evento} y el inicio de la conectividad masiva."

explicacion: |
  La integración de redes y la web transformaron las computadoras de herramientas aisladas en dispositivos conectados globalmente.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["linux", "servidores"]

variables:
  ventaja_linux: uno_de(["robustez", "precio_bajo", "interfaz_grafica", "juegos"])
  ventaja_windows: uno_de(["estandar_corporativo", "codigo_abierto", "estabilidad_kernel", "gratuidad"])

respuesta: "robustez"
tipo: mc
opciones_explicitas: ["robustez", "estandar_corporativo", "codigo_abierto", "gratuidad"]

enunciado: "En el ámbito de servidores, Linux se destaca por su {ventaja_linux}, mientras que Windows es el {ventaja_windows} para entornos corporativos."

explicacion: |
  Linux es preferido en servidores por su estabilidad y eficiencia, mientras que Windows domina en entornos de oficina por su estandarización.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["historia", "binario"]

variables:
  formato: uno_de(["codigo_binario", "interfaz_grafica", "nube", "cloud"])

respuesta: "codigo_binario"
tipo: completar
enunciado: "Antes de los SO, los programadores debían escribir {formato} directamente para controlar los transistores."
respuestas_validas:
    - "codigo_binario"
    - "código binario"
    - "Código binario"
    - "Código Binario"

explicacion: |
  La programación directa en binario era extremadamente compleja y propensa a errores, sin abstracción de hardware.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["mainframe", "historia"]

variables:
  decada: random(1960, 1969)
  acceso: uno_de(["multiusuario", "monousuario", "local", "remoto"])

respuesta: "multiusuario"
tipo: mc
opciones_explicitas: ["multiusuario", "monousuario", "local", "remoto"]

enunciado: "En la década de {decada}, los mainframes introdujeron el acceso {acceso} mediante terminales."

explicacion: |
  Los mainframes permitían que múltiples usuarios accedieran a la misma máquina simultáneamente, un concepto revolucionario para la época.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["windows", "corporativo"]

variables:
  sistema: uno_de(["Windows", "Mac OS", "Linux", "Unix"])
  rol: uno_de(["estandar_corporativo", "sistema_movil", "sistema_embebido", "sistema_educativo"])

respuesta: "Windows"
tipo: mc
opciones_explicitas: ["Windows", "Mac OS", "Linux", "Unix"]

enunciado: "El sistema {sistema} se convirtió en el {rol} gracias a su interfaz gráfica accesible y compatibilidad."

explicacion: |
  Windows logró la hegemonía en oficinas y hogares por su facilidad de uso y amplia disponibilidad de software.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["analogia", "gestion"]

variables:
  analogia: uno_de(["director_de_orquesta", "conductor_de_autobus", "juez_de_paz", "medico"])

respuesta: "director_de_orquesta"
tipo: completar
enunciado: "El SO actúa como el {analogia} de la sinfonía de hardware, asegurando que todo funcione sin conflictos."
respuestas_validas:
    - "director_de_orquesta"
    - "director de orquesta"
    - "Director de orquesta"
    - "Director_de_orquesta"

explicacion: |
  Esta analogía resalta la capacidad del SO para coordinar múltiples recursos simultáneamente de manera armoniosa.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["batch", "interactivo"]

variables:
  modelo_antiguo: uno_de(["procesamiento_por_lotes", "computacion_en_nube", "interfaz_grafica", "multiusuario"])
  modelo_nuevo: uno_de(["interactivo", "batch", "monousuario", "binario"])

respuesta: "interactivo"
tipo: mc
opciones_explicitas: ["interactivo", "batch", "monousuario", "binario"]

enunciado: "La evolución histórica pasó del {modelo_antiguo} al modelo {modelo_nuevo}, permitiendo la intervención del usuario."

explicacion: |
  El paso de lotes secuenciales a sistemas interactivos fue clave para la usabilidad moderna.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["aplicaciones", "ejecucion"]

variables:
  tarea: uno_de(["ejecutar", "compilar", "ensamblar", "grabar"])
  recurso: uno_de(["cpu", "disco", "red", "usb"])

respuesta: "ejecutar"
tipo: mc
opciones_explicitas: ["ejecutar", "compilar", "ensamblar", "grabar"]

enunciado: "El SO se encarga de {tarea} las aplicaciones y asignar el recurso {recurso} necesario."

explicacion: |
  El SO gestiona la ejecución de programas, asegurando que cada uno tenga el tiempo de CPU y memoria que necesita.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["pc", "era"]

variables:
  periodo: uno_de(["anos_70_y_80", "anos_50", "anos_90", "siglo_XXI"])
  evento: uno_de(["entrada_de_pcs", "nacimiento_de_linux", "era_de_la_nube", "mainframes"])

respuesta: "entrada_de_pcs"
tipo: completar
enunciado: "Durante los {periodo}, los ordenadores personales comenzaron a tener su {evento} en los hogares."
respuestas_validas:
    - "entrada_de_pcs"
    - "entrada de pcs"
    - "Entrada de PCs"
    - "entrada_de_PCs"

explicacion: |
  Los años 70 y 80 marcaron el inicio de la computación personal, impulsada por microprocesadores más baratos.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "intermedio"
  tags: ["macos", "windows", "comparacion"]

variables:
  sistema: uno_de(["Mac OS", "Windows"])
  caracteristica: uno_de(["experiencia_integrada", "interfaz_accesible", "codigo_abierto", "gratuidad"])

respuesta: "experiencia_integrada"
tipo: mc
opciones_explicitas: ["experiencia_integrada", "interfaz_accesible", "codigo_abierto", "gratuidad"]

enunciado: "Mac OS se diferenciaba de Windows por ofrecer una {caracteristica} más sólida y unificada."

explicacion: |
  Apple controlaba tanto hardware como software en Mac OS, lo que permitía una integración y estabilidad superior en esa época.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "basico"
  tags: ["definicion", "intermediario"]

variables:
  rol: uno_de(["intermediario", "hardware", "software", "usuario"])

respuesta: "intermediario"
tipo: completar
enunciado: "El SO actúa como el {rol} entre el usuario y el hardware."
respuestas_validas:
    - "intermediario"
    - "Intermediario"
    - "intermediario"
    - "puente"
    - "Ponte"

explicacion: |
  Sin este intermediario, el usuario tendría que interactuar directamente con la complejidad del hardware.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "avanzado"
  tags: ["seguridad", "evolucion"]

variables:
  aspecto: uno_de(["movilidad", "seguridad", "lotes", "batch"])
  importancia: uno_de(["alta", "baja", "nula", "media"])

respuesta: "alta"
tipo: mc
opciones_explicitas: ["alta", "baja", "nula", "media"]

enunciado: "En la era actual, la {aspecto} es un pilar fundamental de los sistemas operativos, con {importancia} prioridad."

explicacion: |
  Con la conectividad masiva, la seguridad (autenticación, cifrado, control de acceso) se volvió crítica en el diseño de SO.
```

```
metadata:
  materia: "informatica"
  tema: "historia_y_evolucion_de_los_sistemas_operativos"
  nivel: "avanzado"
  tags: ["resumen", "cronologia"]

variables:
  orden: uno_de([1, 2, 3, 4])
  evento: uno_de(["lotes", "mainframes", "microprocesadores", "nube"])
  decada: uno_de([1950, 1960, 1970, 2000])

respuesta: "lotes"
tipo: mc
opciones_explicitas: ["lotes", "mainframes", "microprocesadores", "nube"]

enunciado: "En la década de {decada}, el modelo predominante era el procesamiento por {evento}."

explicacion: |
  El procesamiento por lotes fue el primer paso, seguido por mainframes, luego microcomputadoras y finalmente la nube.
```

## Sección: inteligencia-artificial-reglas-a-aprendizaje (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "basico"
  tags: ["conceptos", "historia"]

respuesta: "aprendizaje automatico"
tipo: completar
respuestas_validas: ["aprendizaje automatico", "machine learning"]

enunciado: "Mientras que los sistemas tradicionales se basan en reglas programadas manualmente, la disciplina que permite a las máquinas mejorar su rendimiento mediante la experiencia con datos se denomina ___."

explicacion: |
  El paso de la IA basada en reglas (sistemas expertos) al aprendizaje automático (Machine Learning) marca la transición de la programación explícita al entrenamiento mediante datos.
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "basico"
  tags: ["sistemas-expertos", "logica"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema basado en reglas (como un sistema experto), el conocimiento es extraído y codificado manualmente por un experto humano bajo la forma de estructuras 'SI [condición] ENTONCES [acción]'."

explicacion: |
  Efectivamente, los sistemas de IA clásica dependen de que un programador o experto defina todas las reglas lógicas que el sistema debe seguir para tomar decisiones.
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "basico"
  tags: ["datos", "entrenamiento"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["un sistema de filtrado de spam basado en reglas", "palabra 'viagra'"],
    ["un modelo de reconocimiento de imágenes", "fotos de gatos"]
  ]

respuesta: escenario[idx][1
tipo: mc
opciones_explicitas: ["escenario[idx][0]", "escenario[idx][1]", "Ninguna de las anteriores"]

enunciado: "En el contexto de la IA moderna, ¿cuál de los siguientes elementos es el componente fundamental que sustituye a la regla explícita para permitir que el sistema aprenda?"

pasos:
  - "Identificar qué elemento es el insumo para el entrenamiento."
  - "Comparar con el concepto de 'regla manual' vs 'dato de entrenamiento'."

explicacion: |
  En el aprendizaje automático, el modelo no recibe la regla, sino los datos (como {escenario[idx][1]}) para que él mismo infiera los patrones.
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "intermedio"
  tags: ["terminologia", "machine-learning"]

respuesta: ["Datos", "Algoritmo", "Modelo"]
tipo: ordenar

opciones_explicitas: ["Datos", "Algoritmo", "Modelo"]

enunciado: "Ordene los componentes en el orden lógico de un proceso de aprendizaje automático: primero se requieren los ___, luego se aplica un ___ sobre ellos y finalmente se obtiene un ___ capaz de realizar predicciones."

explicacion: |
  El flujo estándar es: Datos (input) $\rightarrow$ Algoritmo (proceso de entrenamiento) $\rightarrow$ Modelo (producto final entrenado).
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia-artificial-reglas-a-aprendizaje"
  nivel: "intermedio"
  tags: ["paradigma", "comparativa"]

respuesta: "aprendizaje automatico"
tipo: mc
opciones_explicitas: ["sistemas expertos", "aprendizaje automatico", "programación lógica", "sistemas de reglas"]

enunciado: "Si un programador debe escribir cada instrucción lógica para que la IA funcione, está usando un sistema de reglas. Si el sistema descubre la lógica por sí mismo analizando patrones, está usando:"

explicacion: |
  La diferencia clave es la fuente de la lógica: en los sistemas de reglas es el humano (codificación), en el aprendizaje automático es el patrón extraído de los datos.
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas"
  nivel: "basico"
  tags: ["ia", "logica", "reglas"]

enunciado: "Un sistema experto de diagnóstico médico utiliza una regla lógica simple: 'Si el paciente tiene fiebre Y dolor de garganta, entonces el diagnóstico es Faringitis'. Si un paciente presenta fiebre pero NO presenta dolor de garganta, el sistema determinará que el diagnóstico NO es Faringitis según esta regla específica."

respuesta: falso
tipo: vf

explicacion: |
  En los sistemas basados en reglas explícitas, el conocimiento es rígido. Si no se cumplen todas las condiciones de la premisa (antecedente), la regla no se dispara, independientemente de si hay otros síntomas presentes.
```

```
metadata:
  materia: "informatica"
  tema: "ia_aprendizaje_datos"
  nivel: "intermedio"
  tags: ["machine_learning", "paradigma"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[ "Reglas manuales", "Programador escribe IF/ELSE" ], [ "Aprendizaje", "El modelo extrae patrones de datos" ]]

enunciado: "En el paradigma de Machine Learning, a diferencia de la programación tradicional, el componente principal que determina la lógica del sistema es: {datos[escenario_idx][0]}"

opciones_explicitas: ["El código fuente escrito por el humano", "Los datos y los ejemplos proporcionados", "La memoria RAM del computador"]
respuesta: "Los datos y los ejemplos proporcionados"
tipo: mc

explicacion: |
  En la IA clásica (Sistemas Expertos), el humano codifica las reglas. En el Machine Learning, el humano proporciona datos y el algoritmo "aprende" las reglas (parámetros) mediante optimización.
```

```
metadata:
  materia: "informatica"
  tema: "entrenamiento_ia"
  nivel: "intermedio"
  tags: ["machine_learning", "pasos"]

enunciado: "Para que un modelo de IA aprenda a reconocer imágenes de gatos, se debe seguir un orden lógico de trabajo. Ordena los siguientes pasos:"

opciones_explicitas: ["Recolección de imágenes de gatos y perros", "Entrenamiento del modelo con los datos", "Evaluación del modelo con datos nuevos", "Implementación en una aplicación"]
respuesta: ["Recolección de imágenes de gatos y perros", "Entrenamiento del modelo con los datos", "Evaluación del modelo con datos nuevos", "Implementación en una aplicación"]
tipo: ordenar

explicacion: |
  El flujo estándar de Ciencia de Datos implica: 1. Obtener datos (Data Collection), 2. Entrenar (Training), 3. Validar/Testear (Evaluation) y 4. Desplegar (Deployment).
```

```
metadata:
  materia: "informatica"
  tema: "clasificacion_ia"
  nivel: "basico"
  tags: ["machine_learning", "conceptos"]

enunciado: "Un sistema de filtrado de SPAM analiza miles de correos electrónicos previos. Si el sistema detecta que la palabra 'Gratis' aparece en el 90% de los correos marcados como spam, aprenderá a asociar esa palabra con el spam. Este proceso de encontrar una función que asocie características con etiquetas se llama: ___"

respuestas_validas: ["Entrenamiento", "Inferencia", "Etiquetado"]
respuesta: "Entrenamiento"
tipo: completar

explicacion: |
  El entrenamiento es el proceso mediante el cual el algoritmo ajusta sus parámetros internos para minimizar el error entre sus predicciones y las etiquetas reales de los datos.
```

```
metadata:
  materia: "informatica"
  tema: "generalizacion_ia"
  nivel: "avanzado"
  tags: ["machine_learning", "error"]

variables:
  caso_idx: uno_de([0, 1])
  caso: [
    [ "El modelo memorizó los datos de entrenamiento y falla con datos nuevos", "Overfitting" ],
    [ "El modelo es muy simple y no captura la tendencia de los datos", "Underfitting" ]
  ]

enunciado: "Cuando un sistema de IA ha aprendido tan perfectamente los datos de entrenamiento que ha 'memorizado' el ruido y los detalles irrelevantes, perdiendo su capacidad de aplicarse a casos reales distintos, estamos ante un problema de: {caso[caso_idx][1]}"

opciones_explicitas: ["Overfitting", "Underfitting", "Bias", "Variance"]
respuesta: "Overfitting"
tipo: mc

explicacion: |
  El Overfitting (sobreajuste) ocurre cuando el modelo es demasiado complejo y se adapta excesivamente al ruido de los datos de entrenamiento, lo que resulta en un error muy alto cuando se le presentan datos nuevos (pérdida de generalización).
```

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "basico"
  tags: ["ia", "conceptos_base"]

respuesta: "aprendizaje automático"
tipo: "completar"
respuestas_validas: ["aprendizaje automático", "machine learning"]

enunciado: "Mientras que un sistema basado en reglas requiere que un programador defina manualmente cada condición lógica, el ___ es un paradigma donde el sistema identifica patrones directamente a partir de los datos."

explicacion: |
  En la IA clásica (sistemas expertos), el conocimiento es explícito y codificado por humanos. En el aprendizaje automático, el modelo "aprende" las reglas estadísticas a partir de la experiencia (datos).
```

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "intermedio"
  tags: ["escalabilidad", "sistemas_expertos"]

variables:
  es_complejo: true

respuesta: falso
tipo: "vf"

enunciado: "Un sistema basado en reglas explícitas es intrínsecamente más eficiente y fácil de mantener que un modelo de aprendizaje automático cuando el problema involucra miles de variables interdependientes y dinámicas."

explicacion: |
  Falso. A medida que la complejidad y el número de variables aumentan, las reglas manuales se vuelven imposibles de gestionar (explosión combinatoria), mientras que los modelos de aprendizaje están diseñados para manejar esa dimensionalidad.
```

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "intermedio"
  tags: ["naturaleza_aprendizaje"]

respuesta: "correlaciones estadísticas"
tipo: "mc"
opciones_explicitas: ["correlaciones estadísticas", "lógica formal pura", "causalidad absoluta", "sentido común humano"]

enunciado: "Es un error común pensar que un modelo de aprendizaje profundo entiende la 'causa' de un fenómeno. En realidad, lo que el modelo optimiza es la detección de ___ en los datos de entrenamiento."

explicacion: |
  Los modelos de IA actuales son excelentes encontrando patrones y correlaciones, pero no comprenden la causalidad ni el "porqué" de las cosas, a menos que se diseñen arquitecturas específicas para inferencia causal.
```

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "basico"
  tags: ["metodologia"]

respuesta: ["Definir reglas", "Escribir código de decisión", "Probar lógica"]
tipo: "ordenar"
opciones_explicitas: ["Definir reglas", "Escribir código de decisión", "Probar lógica"]

enunciado: "Ordena los pasos típicos en el desarrollo de un Sistema Experto (basado en reglas) de forma lógica:"

explicacion: |
  En el enfoque basado en reglas, primero se extrae el conocimiento del experto (reglas), luego se traduce a código y finalmente se valida la lógica.
```

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "avanzado"
  tags: ["sesgo", "datos"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["Un sistema de reglas tiene un error porque el programador olvidó una condición.", "error_programador"],
    ["Un sistema de aprendizaje tiene un error porque los datos de entrenamiento son parciales.", "error_datos"]
  ]

respuesta: "error_datos"
tipo: "mc"
opciones_explicitas: ["error_programador", "error_datos"]

enunciado: "En el escenario {escenario[idx][0]}, el problema principal es un: ___"

explicacion: |
  Si el sistema es de reglas, el error es de diseño/lógica humana. Si el sistema es de aprendizaje, el error suele provenir de la calidad o representatividad de los datos (sesgo).
```

```
metadata:
  materia: "informatica"
  tema: "ia_reglas_vs_aprendizaje"
  nivel: "basico"
  tags: ["ia", "logica", "aprendizaje_automatico"]

respuesta: "aprendizaje automático"
tipo: completar
respuestas_validas: ["aprendizaje automático"]

enunciado: "Mientras que un sistema basado en reglas requiere que un programador defina manualmente cada condición lógica, el ___ permite que el sistema descubra patrones directamente desde los datos."

explicacion: |
  En la IA tradicional (sistemas expertos), la lógica es explícita y programada por humanos. En el Machine Learning, la lógica se infiere a partir de la observación de datos.
```

```
metadata:
  materia: "informatica"
  tema: "aprendizaje_supervisado"
  nivel: "intermedio"
  tags: ["ia", "supervisado", "datos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["clasificar_imágenes", "etiquetadas"],
    ["predecir_precios", "numéricas"]
  ]

respuesta: "etiquetadas"
tipo: mc
opciones_explicitas: ["etiquetadas", "no estructuradas", "aleatorias", "puramente sintácticas"]

enunciado: "En un escenario de {escenarios[escenario_idx][0]}, el modelo requiere que los datos de entrenamiento estén {escenarios[escenario_idx][1]} para aprender la relación entre la entrada y la salida."

explicacion: |
  El aprendizaje supervisado se distingue de otros por el uso de un conjunto de datos donde la respuesta correcta (etiqueta) ya es conocida.
```

```
metadata:
  materia: "informatica"
  tema: "generalizacion_ia"
  nivel: "avanzado"
  tags: ["ia", "generalizacion", "overfitting"]

respuesta: verdadero
tipo: vf

enunciado: "Un sistema basado en reglas es capaz de manejar situaciones que no fueron explícitamente programadas mediante una regla 'si-entonces', a diferencia de un modelo de aprendizaje que puede generalizar patrones nuevos."

explicacion: |
  Falso. Un sistema de reglas es rígido: si no existe una regla para un caso específico, el sistema no puede decidir. El aprendizaje busca la generalización para manejar datos no vistos.
```

```
metadata:
  materia: "informatica"
  tema: "flujo_desarrollo_ia"
  nivel: "intermedio"
  tags: ["ia", "workflow", "datos"]

respuesta: ["Recolección de datos", "Preprocesamiento", "Entrenamiento del modelo", "Evaluación de precisión"]
tipo: ordenar
opciones_explicitas: ["Recolección de datos", "Preprocesamiento", "Entrenamiento del modelo", "Evaluación de precisión"]

enunciado: "Ordene las etapas típicas del ciclo de vida de un proyecto de aprendizaje automático, desde la obtención de información hasta la validación del modelo."

explicacion: |
  A diferencia del desarrollo de software tradicional donde el centro es el código, en IA el flujo comienza con la gestión de datos y termina validando la capacidad de predicción.
```

```
metadata:
  materia: "informatica"
  tema: "fuente_conocimiento"
  nivel: "basico"
  tags: ["ia", "conocimiento", "datos"]

respuesta: "datos"
tipo: mc
opciones_explicitas: ["conocimiento experto", "datos", "reglas lógicas", "hardware"]

enunciado: "En la IA clásica, el conocimiento proviene de la codificación de la experiencia humana; en la IA moderna basada en aprendizaje, el conocimiento se extrae de los ___."

explicacion: |
  La transición fundamental es pasar de la "codificación de reglas" (conocimiento manual) a la "extracción de patrones" (conocimiento derivado de datos).
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "basico"
  tags: ["ia", "conceptos", "aprendizaje"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Un sistema de diagnóstico médico basado en un árbol de decisión con reglas 'SI fiebre Y tos ENTONCES gripe'", "Un sistema de reconocimiento de imágenes que identifica gatos tras ver 10.000 fotos de gatos"], ["Un sistema de filtrado de spam basado en palabras prohibidas como 'oferta' o 'gratis'", "Un modelo de lenguaje que predice la siguiente palabra basándose en patrones estadísticos de texto"]]

enunciado: "Identifica si el siguiente escenario representa un sistema basado en reglas explícitas o un sistema que aprende de datos: {datos[escenario_idx][0]}"

opciones_explicitas: ["Basado en reglas explícitas", "Aprendizaje basado en datos"]
respuesta: datos[escenario_idx][1
tipo: mc

explicacion: |
  Los sistemas basados en reglas dependen de la lógica programada manualmente por expertos (IF-THEN), mientras que el aprendizaje automático (Machine Learning) extrae patrones directamente de los datos.
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "intermedio"
  tags: ["machine_learning", "datos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Un modelo de detección de fraude que analiza millones de transacciones para encontrar anomalías."], ["Un chatbot que responde preguntas siguiendo un guion predefinido de 'si el usuario dice X, responde Y'."]]
  respuestas: [["Aprendizaje basado en datos", "Basado en reglas explícitas"], ["Basado en reglas explícitas", "Aprendizaje basado en datos"]]

enunciado: "En el caso: {casos[caso_idx][0]}, el paradigma predominante es ___."

respuestas_validas: [casos[caso_idx][0], ""]
respuesta: respuestas[caso_idx][0
tipo: completar

explicacion: |
  En el primer caso, el sistema descubre la estructura de los datos (aprendizaje), mientras que en el segundo, la estructura ya está definida por el programador (reglas).
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "avanzado"
  tags: ["generalizacion", "ia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Un sistema de reglas que no reconoce un nuevo tipo de spam porque la palabra clave no está en su lista.", "Un modelo de IA que, al ver un objeto nunca visto, estima su categoría basándose en su similitud con datos previos."], ["Un sistema de reglas que es muy preciso en su dominio pero rígido.", "Un sistema de aprendizaje que puede generalizar ante datos nuevos."]]

enunciado: "Analiza la situación: {escenarios[escenario_idx][0]}. ¿Es esta una característica típica de un sistema que aprende de datos?"

respuesta: escenarios[escenario_idx][1] == "Un sistema de aprendizaje que puede generalizar ante datos nuevos."
tipo: completar
explicacion: |
  La generalización es la capacidad de un modelo de aprendizaje para aplicar lo aprendido a datos no vistos durante el entrenamiento, algo que los sistemas de reglas puras no pueden hacer sin intervención humana.
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "intermedio"
  tags: ["flujo_trabajo", "datos"]

enunciado: "Ordena los pasos típicos para desarrollar un sistema de aprendizaje automático (Machine Learning):"

opciones_explicitas: ["Recolección de datos", "Entrenamiento del modelo", "Evaluación de precisión", "Implementación en producción"]
respuesta: ["Recolección de datos", "Entrenamiento del modelo", "Evaluación de precisión", "Implementación en producción"]
tipo: ordenar

explicacion: |
  A diferencia de los sistemas basados en reglas donde el paso principal es el "diseño de la lógica", en ML el flujo gira en torno a la gestión de datos y la optimización del modelo.
```

```
metadata:
  materia: "informatica"
  tema: "inteligencia_artificial_reglas_a_aprendizaje"
  nivel: "basico"
  tags: ["datos", "requisitos"]

variables:
  ejemplo_idx: uno_de([0, 1])
  ejemplos: [["Un algoritmo de visión artificial sin acceso a imágenes previas."], ["Un algoritmo de recomendación de música sin historial de reproducciones del usuario."]]
  resultado: ["No puede aprender", "No puede aprender"]

enunciado: "Si tenemos el siguiente escenario: {ejemplos[ejemplo_idx][0]}, el sistema ___."

respuestas_validas: ["No puede aprender", "No puede aprender"]
respuesta: resultado[ejemplo_idx
tipo: completar

explicacion: |
  El aprendizaje automático requiere obligatoriamente de datos para identificar patrones; sin datos, el sistema no tiene materia prima para "aprender".
```

## Sección: interrupciones (24 preguntas)

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["definicion", "concepto"]

respuesta: "una señal que detiene la ejecución actual"
tipo: completar

enunciado: "Una interrupción es, básicamente, ___ que detiene momentáneamente la ejecución actual del procesador para atender una prioridad más urgente."

explicacion: |
  Las interrupciones son señales (de hardware o software) que permiten al procesador responder a eventos externos o internos de manera prioritaria, pausando temporalmente la tarea en curso.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["procesador", "ejecucion"]

variables:
  instruccion_actual: random(1, 100)

respuesta: "terminar"
tipo: completar

enunciado: "Cuando un dispositivo envía una señal de interrupción, el procesador ___ de ejecutar la instrucción actual por seguridad antes de atender la solicitud."

explicacion: |
  Por razones de seguridad y consistencia del estado, el procesador completa la instrucción en curso antes de cambiar el flujo de control hacia el vector de interrupción.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["vector", "memoria", "hardware"]

variables:
  tipo_vector: uno_de(["dirección", "registro", "puerto"])

respuesta: "dirección"
tipo: completar

enunciado: "El procesador busca una ___ de memoria especial llamada Vector de Interrupción, la cual apunta al Controlador de Interrupción."

explicacion: |
  El Vector de Interrupción es una tabla en la memoria que mapea cada tipo de interrupción a la dirección de memoria de su respectivo manejador (ISR).
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["isr", "software", "hardware"]

respuesta: "Controlador de Interrupción"
tipo: completar

enunciado: "La dirección del Vector de Interrupción apunta a un pequeño programa específico conocido como el ___ (o ISR)."

explicacion: |
  El Controlador de Interrupción (Interrupt Service Routine) es el código que se ejecuta para manejar el evento de interrupción específico.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["hardware", "ejemplos"]

variables:
  dispositivo: uno_de(["teclado", "mouse", "disco duro"])

respuesta: "hardware"
tipo: completar

enunciado: "La señal generada por el clic de un botón del mouse o el ingreso de datos por un ___ es un ejemplo clásico de interrupción de hardware."

explicacion: |
  Las interrupciones de hardware son generadas por dispositivos físicos externos para informar al procesador de que necesitan atención.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["software", "excepciones"]

variables:
  error: uno_de(["dividir por cero", "acceso ilegal", "memoria llena"])

respuesta: "software"
tipo: completar

enunciado: "Las interrupciones generadas por el propio programa o sistema operativo para reportar errores como dividir por cero se llaman interrupciones de ___."

explicacion: |
  Estas se denominan interrupciones de software, traps o excepciones, y surgen de la ejecución del código o del OS, no de un dispositivo físico externo.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["estado", "pila", "registros"]

variables:
  componente: uno_de(["registros", "memoria cache", "disco"])

respuesta: "registros"
tipo: completar

enunciado: "El controlador de interrupción guarda el estado actual del procesador, como los valores de los ___, en la pila de memoria."

explicacion: |
  Guardar el estado de los registros es crucial para que el programa principal pueda reanudarse sin notar la pausa, restaurando los valores exactos previos.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["comparacion", "clasificacion"]

variables:
  origen_hw: "dispositivo fisico"
  origen_sw: "programa o OS"

respuesta: "dispositivo fisico"
tipo: completar

enunciado: "Las interrupciones de hardware son generadas por ___, mientras que las de software son generadas por el propio programa o el sistema operativo."

explicacion: |
  La distinción clave es el origen: hardware proviene de señales eléctricas externas; software proviene de instrucciones ejecutadas o condiciones del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["ejemplos", "software"]

variables:
  accion: uno_de(["solicitar servicio del sistema", "leer teclado", "enviar datos a red"])

respuesta: "solicitar servicio del sistema"
tipo: completar

enunciado: "Un ejemplo común de interrupción de software es cuando un programa necesita ___ del sistema operativo."

explicacion: |
  Las llamadas al sistema (syscalls) a menudo se implementan mediante interrupciones de software para pasar el control al kernel de manera segura.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["vector", "estructura"]

variables:
  funcion: uno_de(["identificar", "ejecutar", "borrar"])

respuesta: "identificar"
tipo: completar

enunciado: "El Vector de Interrupción ayuda al procesador a ___ qué dispositivo solicitó la atención mediante la dirección correspondiente."

explicacion: |
  Cada entrada en la tabla de vectores apunta a la rutina específica para manejar ese tipo de interrupción, facilitando su identificación y procesamiento.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["hardware", "redes"]

variables:
  evento: uno_de(["llegada de datos", "pérdida de energía", "actualización de driver"])

respuesta: "llegada de datos"
tipo: completar

enunciado: "La ___ por una tarjeta de red es un evento que genera una interrupción de hardware."

explicacion: |
  Cuando la NIC (Network Interface Card) recibe paquetes, envía una señal de interrupción al CPU para procesar la información sin esperar polling.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

variables:
  paso1: "pausa"
  paso2: "atender"
  paso3: "reanudar"

respuesta: "pausa"
tipo: completar

enunciado: "El proceso sigue esta secuencia: 1. La interrupción ___ la tarea actual. 2. Se atiende la prioridad. 3. Se reanuda la tarea original."

explicacion: |
  La secuencia lógica es siempre: interrupción (pausa), servicio (atención) y retorno (reanudación).
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["hardware", "dispositivos"]

respuesta: "dispositivo físico externo"
tipo: completar

enunciado: "El clic del mouse es generado por un ___."

explicacion: |
  El mouse es un periférico externo que envía señales eléctricas al controlador de interrupciones del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["software", "errores"]

respuesta: "el propio programa o el sistema operativo"
tipo: completar

enunciado: "Una división por cero es generada por ___."

explicacion: |
  Es un error de ejecución detectado por la CPU o el OS, clasificándose como interrupción de software (trap).
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["memoria", "direccion"]

variables:
  tipo_memoria: uno_de(["especial", "común", "virtual"])

respuesta: "especial"
tipo: completar

enunciado: "El procesador busca una dirección de memoria ___ llamada Vector de Interrupción."

explicacion: |
  Esta dirección es parte de una tabla reservada y especial en la memoria, no memoria de usuario común.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["hardware", "almacenamiento"]

variables:
  evento: uno_de(["fin de lectura", "inicio de formateo", "cambio de nombre"])

respuesta: "fin de lectura"
tipo: completar

enunciado: "El ___ por un disco duro es un evento que genera una interrupción de hardware."

explicacion: |
  Cuando el disco termina de leer/escribir datos, envía una interrupción al CPU para informar que está listo para la siguiente operación.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["estado", "registros"]

variables:
  dato: uno_de(["valores de los registros", "código del programa", "datos del usuario"])

respuesta: "valores de los registros"
tipo: completar

enunciado: "El controlador de interrupción guarda en la pila los ___ del procesador."

explicacion: |
  Los registros contienen el estado de ejecución (PC, flags, datos temporales) y deben preservarse para la reanudación.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["definicion", "señal"]

respuesta: "señal"
tipo: completar

enunciado: "Una interrupción es una ___ de hardware o software."

explicacion: |
  Es una señal eléctrica (hardware) o una instrucción especial (software) que notifica al CPU.
```

```
metadata:
  materia: "informatica"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["comparacion", "origen"]

variables:
  origen_hw: "externo"
  origen_sw: "interno"

respuesta: "externo"
tipo: completar

enunciado: "Las interrupciones de hardware tienen un origen ___, mientras que las de software son internas."

explicacion: |
  Hardware: externo (periféricos). Software: interno (CPU/OS).
```

```
metadata:
  materia: "informática"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["analogia", "comprension"]

variables:
  situacion: uno_de(["leer un libro", "cocinar", "conducir"])

respuesta: verdadero

tipo: vf

enunciado: "La analogía de dejar de leer un libro para contestar el teléfono y luego retomar la lectura ilustra correctamente el concepto de pausa y recuperación de estado en las interrupciones."

explicacion: |
  La analogía es precisa: la tarea principal (leer) se pausa, se atiende la prioridad (teléfono) y luego se restaura el estado (continuar leyendo desde donde se quedó).
```

```
metadata:
  materia: "informática"
  tema: "interrupciones"
  nivel: "basico"
  tags: ["espera_pasiva", "concepto"]

respuesta: falso

tipo: vf

enunciado: "Sin interrupciones, el procesador actuaría de manera activa, ejecutando tareas paralelas sin detenerse."

explicacion: |
  Falso. Sin interrupciones, el procesador tendría que esperar pasivamente o hacer polling (preguntar constantemente), lo cual es ineficiente y no es "actividad paralela" en el sentido moderno.
```

```
metadata:
  materia: "informática"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["vector", "memoria"]

respuesta: verdadero

tipo: vf

enunciado: "El Vector de Interrupción apunta a la dirección de memoria donde comienza el código del Controlador de Interrupción."

explicacion: |
  Verdadero. Es la tabla que mapea cada tipo de interrupción a su rutina de servicio correspondiente.
```

```
metadata:
  materia: "informática"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["polling", "comparacion"]

respuesta: verdadero

tipo: vf

enunciado: "El método de 'preguntar constantemente' a los dispositivos si tienen datos se conoce como polling y es menos eficiente que el uso de interrupciones."

explicacion: |
  Verdadero. El polling consume ciclos de CPU innecesariamente, mientras que las interrupciones son eventos asíncronos que despiertan al CPU solo cuando es necesario.
```

```
metadata:
  materia: "informática"
  tema: "interrupciones"
  nivel: "intermedio"
  tags: ["transparencia", "recuperacion"]

respuesta: verdadero

tipo: vf

enunciado: "El objetivo de guardar y restaurar el estado es que el programa principal no note que hubo una pausa."

explicacion: |
  Verdadero. La interrupción debe ser transparente para el programa en ejecución, devolviéndolo a un estado idéntico al previo.
```

## Sección: mantenimiento-y-deuda-tecnica (26 preguntas)

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["conceptos", "deuda_tecnica"]

respuesta: "deuda_tecnica"
tipo: completar
respuestas_validas: ["deuda_tecnica"]

enunciado: "El concepto que describe el coste adicional de realizar cambios en el software debido a decisiones de diseño rápidas o deficientes se conoce como ___."

explicacion: |
  La deuda técnica es una metáfora que compara las decisiones de desarrollo apresuradas con la deuda financiera: si no se "paga" (refactorizando), los "intereses" (dificultad de mantenimiento) aumentan.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["mantenimiento", "tipos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["corregir un error que causa un cierre inesperado", "correctivo"],
    ["añadir una nueva funcionalidad solicitada por el cliente", "evolutivo"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["correctivo", "adaptativo", "evolutivo", "preventivo"]

enunciado: "Se debe realizar un mantenimiento tipo {escenarios[escenario_idx][0]} cuando el objetivo es {escenarios[escenario_idx][0]}."

explicacion: |
  El mantenimiento correctivo busca arreglar fallos; el adaptativo ajusta el software a nuevos entornos; el evolutivo añade funciones y el preventivo busca evitar fallos futuros.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["impacto", "calidad"]

respuesta: falso
tipo: vf

enunciado: "La presencia de deuda técnica en un proyecto de software siempre implica que el código es de mala calidad y no tiene utilidad."

explicacion: |
  Falso. A veces se toma deuda técnica de forma estratégica para cumplir con una fecha de lanzamiento crítica, con el plan de pagarla (refactorizar) más adelante.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta: ["Detección del problema", "Análisis de la causa", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]
tipo: ordenar
opciones_explicitas: ["Detección del problema", "Análisis de la causa", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]

enunciado: "Ordena las etapas típicas de un proceso de mantenimiento correctivo:"

explicacion: |
  Un ciclo de mantenimiento debe seguir un orden lógico: primero se identifica el error, se entiende por qué ocurre, se planea el arreglo, se aplica y finalmente se verifica que no se haya roto nada más.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "avanzado"
  tags: ["refactorizacion", "calidad"]

variables:
  valor_refactor: uno_de([0, 1])
  datos: [
    ["Cambiar la estructura interna del código sin alterar su comportamiento externo", "refactorizar"],
    ["Añadir un nuevo módulo de seguridad al sistema", "extender"]
  ]

respuesta: datos[valor_refactor][1
tipo: mc
opciones_explicitas: ["refactorizar", "extender", "optimizar", "reparar"]

enunciado: "La acción de {datos[valor_refactor][0]} se define como ___."

explicacion: |
  La refactorización es la técnica principal para reducir la deuda técnica, mejorando la legibilidad y la estructura sin cambiar lo que el código hace para el usuario.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["deuda_tecnica", "mantenimiento"]

variables:
  es_mantenimiento_preventivo: falso

respuesta: es_mantenimiento_preventivo
tipo: completar
enunciado: "Si un equipo de desarrollo decide no refactorizar un módulo complejo para cumplir con una fecha de entrega, está acumulando deuda técnica. Esta acción, si no se paga pronto, aumenta el costo de mantenimiento futuro. ¿Es el refactorizado una forma de mantenimiento preventivo? {es_mantenimiento_preventivo}"

explicacion: |
  El refactorizado busca mejorar la estructura interna del código sin cambiar su comportamiento externo, lo cual es una actividad de mantenimiento preventivo para evitar la acumulación de deuda técnica.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["deuda_tecnica", "conceptos"]

opciones_explicitas: ["Código mal documentado", "Cambio de requerimientos", "Nueva funcionalidad", "Actualización de dependencias"]

respuesta: "Código mal documentado"
tipo: mc

enunciado: "Un desarrollador nota que el sistema funciona correctamente, pero la lógica de negocio está dispersa y no hay comentarios en las funciones críticas, lo que dificultará cambios futuros. ¿Cuál de estos es un ejemplo claro de deuda técnica?"

explicacion: |
  La falta de documentación y la mala estructura del código (código espagueti) son formas de deuda técnica que incrementan el esfuerzo necesario para realizar mantenimientos correctivos o evolutivos.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenimiento", "tipos"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: tabla[escenario_idx][1
tipo: ordenar

opciones_explicitas: ["Detectar error", "Corregir error", "Implementar nueva función", "Optimizar rendimiento", "Documentar sistema"]

enunciado: "Se presenta un caso de mantenimiento según el escenario seleccionado:"

pasos:
  - "Escenario A: El sistema falla al procesar un pago (Mantenimiento Correctivo)."
  - "Escenario B: El cliente solicita un nuevo reporte de ventas (Mantenimiento Evolutivo)."

explicacion: |
  El orden depende del tipo de mantenimiento: el correctivo requiere detectar y corregir; el evolutivo requiere implementar nuevas funciones.
  
  Tabla de referencia:
  [ ["Detectar error", "Corregir error", "Implementar nueva función", "Optimizar rendimiento", "Documentar sistema"], ["Detectar error", "Corregir error", "Implementar nueva función", "Optimizar rendimiento", "Documentar sistema"] ]
  (Nota: Para el ejercicio de ordenar, el usuario debe seguir la secuencia lógica del escenario asignado).
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenimiento", "tipos"]

variables:
  tipo_mantenimiento_idx: uno_de([0, 1])

respuesta: tabla[tipo_mantenimiento_idx][1
tipo: completar

enunciado: "Si el objetivo es mejorar la velocidad de una consulta SQL que tarda 10 segundos, estamos realizando un mantenimiento de tipo ___."

pasos:
  - "Identificar el cuello-de-bote en la base de datos."
  - "Aplicar índices o reescribir la consulta."

opciones_explicitas: ["correctivo", "evolutivo", "adaptativo", "perfectivo"]
respuestas_validas: ["perfectivo"]

explicacion: |
  El mantenimiento perfectivo se encarga de mejorar el rendimiento o la eficiencia de un software que ya funciona correctamente.
  
  Tabla de referencia:
  [ ["correctivo", "correctivo"], ["evolutivo", "evolutivo"], ["adaptativo", "adaptativo"], ["perfectivo", "perfectivo"] ]
  *Nota: El ejemplo usa el índice para validar la respuesta correcta según el enunciado de optimización.*
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "avanzado"
  tags: ["deuda_tecnica", "costos"]

variables:
  caso_idx: uno_de([0, 1])

respuesta: tabla[caso_idx][1
tipo: completar

enunciado: "En el caso seleccionado, el equipo decide ignorar las pruebas unitarias para lanzar una versión hoy. Esto genera una deuda técnica que se traduce en ___."

pasos:
  - "Se lanza el producto con deuda técnica."
  - "Aparecen bugs en producción debido a la falta de tests."
  - "El tiempo de desarrollo de la siguiente funcionalidad aumenta drásticamente."

respuestas_validas: ["intereses"]

explicacion: |
  La deuda técnica funciona como un préstamo financiero: el 'principal' es el tiempo ahorrado hoy, y los 'intereses' es el tiempo extra que se perderá mañana arreglando errores o lidiando con código complejo.

  Tabla de referencia:
  [ ["intereses", "intereses"], ["intereses", "intereses"] ]
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["mantenimiento", "adaptativo"]

opciones_explicitas: ["Cambio de Sistema Operativo", "Arreglar un crash", "Añadir un botón", "Cambiar el color de la interfaz"]

respuesta: "Cambio de Sistema Operativo"
tipo: mc

enunciado: "Una aplicación de escritorio debe actualizarse para ser compatible con la nueva versión de Windows que salió este mes. ¿Qué tipo de mantenimiento es este?"

explicacion: |
  El mantenimiento adaptativo ocurre cuando el software debe ajustarse a cambios en su entorno (sistema operativo, hardware, bases de datos o leyes externas) para seguir siendo funcional.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["deuda_tecnica", "costo_software"]

variables:
  escenario: uno_de([
    ["reparar_bug", "reparar un error crítico", "reparar un error crítico"],
    ["agregar_feature", "implementar una nueva funcionalidad", "implementar una nueva funcionalidad"],
    ["refactorizar", "refactorizar un módulo heredado", "refactorizar un módulo heredado"]
  ])

respuesta: escenario[idx][2
tipo: mc
opciones_explicitas: ["reparar un error crítico", "implementar una nueva funcionalidad", "refactorizar un módulo heredado"]

enunciado: "Cuando la deuda técnica es muy alta, el tiempo dedicado a {escenario[idx][1]} suele aumentar drásticamente debido a la complejidad del código existente."

explicacion: |
  La deuda técnica actúa como un interés compuesto: cuanta más deuda se acumula, más tiempo y esfuerzo requiere cada nueva tarea (ya sea corregir errores o añadir funciones) debido a la fragilidad del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["conceptos", "gestion_de_proyectos"]

respuesta: verdadero
tipo: vf

enunciado: "La deuda técnica es siempre un error de programación que debe evitarse a toda costa desde el primer día del proyecto."

explicacion: |
  Falso. La deuda técnica puede ser una decisión estratégica (deuda consciente) para acelerar el lanzamiento al mercado (Time-to-Market), siempre que se planifique su posterior pago.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenimiento_software"]

respuesta: "correctivo"
tipo: completar
respuestas_validas: ["correctivo", "adaptativo", "perfectivo", "preventivo"]

enunciado: "El tipo de mantenimiento que se realiza exclusivamente para corregir fallos detectados en el software ya en producción se denomina mantenimiento ___."

explicacion: |
  El mantenimiento correctivo se enfoca en solucionar errores (bugs) que impiden el funcionamiento correcto del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "avanzado"
  tags: ["ciclo_vida", "deuda_tecnica"]

respuesta: ["Implementación rápida", "Acumulación de deuda", "Aumento de complejidad", "Refactorización necesaria"]
tipo: ordenar
opciones_explicitas: ["Implementación rápida", "Acumulación de deuda", "Aumento de complejidad", "Refactorización necesaria"]

enunciado: "Ordene cronológicamente los eventos que describen el proceso de degradación de la calidad de software por deuda técnica no gestionada:"

explicacion: |
  El proceso comienza con una decisión de velocidad, lo que genera deuda; esto aumenta la complejidad del código y finalmente obliga a realizar refactorizaciones costosas para recuperar la mantenibilidad.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenibilidad", "calidad_software"]

variables:
  impacto: uno_de([
    ["bajo", "bajo", "bajo"],
    ["medio", "medio", "medio"],
    ["alto", "alto", "alto"]
  ])

respuesta: impacto[idx][2
tipo: mc
opciones_explicitas: ["bajo", "medio", "alto"]

enunciado: "Si un módulo tiene una alta complejidad ciclomática y falta de documentación, el esfuerzo requerido para realizar mantenimiento sobre él será ___."

explicacion: |
  La falta de estándares y la complejidad excesiva aumentan la carga cognitiva de los desarrolladores, elevando el esfuerzo de mantenimiento.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["conceptos", "ciclo_de_vida"]

respuesta: "evolución"
tipo: "completar"
respuestas_validas: ["evolución", "evolucion"]

enunciado: "Mientras que el mantenimiento correctivo se enfoca en reparar errores, el proceso de añadir nuevas funcionalidades o adaptar el software a nuevos entornos se denomina ___."

explicacion: |
  El mantenimiento correctivo busca solucionar fallos existentes, mientras que la evolución (o mantenimiento evolutivo) busca expandir las capacidades del sistema para satisfacer nuevas necesidades del usuario.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["deuda_tecnica", "calidad"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: uno_de([datos[escenario_idx][1]])
tipo: "mc"
opciones_explicitas: ["Aumento de la velocidad de entrega inicial", "Reducción del costo de mantenimiento", "Mejora de la legibilidad del código", "Reducción de la complejidad ciclomática"]

enunciado: "En el escenario de {datos[escenario_idx][0]}, la principal consecuencia a largo plazo es:"

variables:
  datos: [
    ["decidir tomar un atajo en el diseño para cumplir con una fecha de entrega inmediata", "Aumento de la velocidad de entrega inicial"],
    ["ignorar las pruebas unitarias para acelerar el despliegue", "Aumento de la velocidad de entrega inicial"]
  ]

explicacion: |
  La deuda técnica suele ser una decisión consciente (o no) para ganar velocidad de entrega a corto plazo, pero genera un "interés" en forma de mayor dificultad para realizar cambios en el futuro.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["mantenimiento", "tipos"]

respuesta: "preventivo"
tipo: "mc"
opciones_explicitas: ["correctivo", "evolutivo", "preventivo", "adaptativo"]

enunciado: "Si un equipo de desarrollo realiza una refactorización para mejorar la estructura interna del código sin cambiar su comportamiento externo, está realizando mantenimiento ___."

explicacion: |
  El mantenimiento preventivo busca mejorar la estructura del software para evitar problemas futuros (como la degradación por deuda técnica), sin alterar la funcionalidad actual.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["deuda_tecnica", "costo"]

respuesta: verdadero
tipo: "vf"

enunciado: "¿Es correcto afirmar que la deuda técnica se diferencia de la mala calidad de software en que la deuda suele ser una decisión estratégica para acelerar el desarrollo?"

explicacion: |
  Exacto. La mala calidad es un error o descuido, mientras que la deuda técnica es a menudo una decisión deliberada de "pedir prestado" tiempo de diseño para ganar tiempo de mercado.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "avanzado"
  tags: ["refactorizacion", "deuda_tecnica"]

opciones_explicitas: ["Identificar deuda técnica", "Escribir pruebas unitarias", "Ejecutar refactorización", "Verificar integridad"]

respuesta: ["Identificar deuda técnica", "Escribir pruebas unitas", "Ejecutar refactorización", "Verificar integridad"]
tipo: "ordenar"

enunciado: "Ordena los pasos lógicos para abordar una deuda técnica mediante refactorización de forma segura:"

explicacion: |
  Para refactorizar sin introducir nuevos errores, primero se debe identificar el problema, asegurar la existencia de pruebas (test suite) para garantizar el comportamiento actual, realizar el cambio y finalmente verificar que todo siga funcionando.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["refactorizacion", "deuda_tecnica"]

variables:
  escenario: uno_de([
    ["El equipo decide ignorar la implementación de pruebas unitarias para cumplir con la fecha de entrega.", "deuda_tecnica"],
    ["El equipo decide reescribir un módulo complejo para mejorar su legibilidad sin cambiar su comportamiento.", "refactorizacion"],
    ["El equipo decide parchar un error crítico con un código temporal que no sigue los estándares.", "deuda_tecnica"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "En el escenario descrito: '{escenario[idx][0]}', la acción realizada se clasifica como: ___"

respuestas_validas: ["deuda_tecnica", "refactorizacion"]
respuesta: escenario[idx][1
tipo: completar

explicacion: |
  La deuda técnica surge cuando se toman caminos de desarrollo rápidos o de baja calidad que facilitan la entrega inmediata pero aumentan el costo de mantenimiento futuro. La refactorización, en cambio, es una práctica deliberada para mejorar la estructura interna sin alterar la funcionalidad.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["mantenimiento_correctivo", "mantenimiento_evolutivo"]

variables:
  caso: uno_de([
    ["Corregir un error que causa que la aplicación se cierre inesperadamente.", "correctivo"],
    ["Añadir una nueva funcionalidad de exportación a PDF que el cliente solicitó.", "evolutivo"],
    ["Optimizar el uso de memoria de una función existente para que sea más rápida.", "perfectivo"]
  ])
  idx: uno_de([0, 1, 2])

enunciado: "Si el objetivo es '{caso[idx][0]}', estamos realizando un mantenimiento de tipo: ___"

respuestas_validas: ["correctivo", "evolutivo", "perfectivo"]
respuesta: caso[idx][1
tipo: completar

explicacion: |
  El mantenimiento correctivo soluciona fallos; el evolutivo añade nuevas capacidades; y el perfectivo mejora aspectos no funcionales como el rendimiento o la eficiencia.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["costo", "deuda_tecnica"]

variables:
  impacto: uno_de([
    ["Aumentar", "false"],
    ["Disminuir", "true"]
  ])
  idx: uno_de([0, 1])

enunciado: "A medida que la deuda técnica en un proyecto de software aumenta, el costo de implementar nuevos cambios tiende a ___."

opciones_explicitas: ["Aumentar", "Disminuir"]
respuesta: impacto[idx][0
tipo: mc

explicacion: |
  La deuda técnica actúa como un interés compuesto: cuanto más se acumula, más difícil y costoso es trabajar sobre el código, ya que las dependencias y la complejidad no gestionada frenan el desarrollo.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["ciclo_de_vida"]

variables:
  orden: [
    "Detección del problema",
    "Análisis de la causa raíz",
    "Diseño de la solución",
    "Implementación del cambio",
    "Pruebas de regresión"
  ]

enunciado: "Ordene los pasos típicos de un proceso de mantenimiento correctivo, desde el inicio hasta la verificación final."

opciones_explicitas: ["Detección del problema", "Análisis de la causa raíz", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]
respuesta: ["Detección del problema", "Análisis de la causa raíz", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]
tipo: ordenar

explicacion: |
  Un proceso de mantenimiento estructurado requiere primero identificar el fallo, entender por qué sucede, planear la solución, aplicarla y, crucialmente, verificar que el cambio no haya roto otras partes del sistema (regresión).
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["calidad", "mantenimiento"]

variables:
  estandar: uno_de([
    ["El código sigue las convenciones de estilo y es fácil de leer.", "verdadero"],
    ["El código funciona pero tiene múltiples funciones de 500 líneas sin comentarios.", "falso"]
  ])
  idx: uno_de([0, 1])

enunciado: "Si un software tiene un alto nivel de deuda técnica, es ___ que su código sea fácil de mantener a largo plazo."

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: completar
explicacion: |
  La mantenibilidad es la facilidad con la que un sistema puede ser modificado. Una alta deuda técnica degrada la calidad del código, haciendo que la mantenibilidad sea baja.
```

## Sección: medios-tecnicos-extension-capacidades-humanas (26 preguntas)

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "basico"
  tags: ["sentidos", "cámara", "extensión"]

respuesta: "cámara digital"
tipo: completar

enunciado: "Según la teoría, ¿qué dispositivo actúa como una extensión de la visión humana al capturar ondas electromagnéticas que el ojo no puede ver completamente?"

explicacion: |
  La cámara digital permite "ver" lo invisible al procesar el espectro de luz más allá de las limitaciones biológicas del ojo humano.
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "basico"
  tags: ["memoria", "almacenamiento", "cerebro"]

respuesta: "sistemas informáticos"
tipo: completar

enunciado: "Los sistemas informáticos actúan como una extensión de nuestra capacidad de almacenamiento, funcionando como una memoria externa de capacidad {n}."

explicacion: |
  A diferencia del cerebro humano, que tiene una capacidad finita, los sistemas informáticos ofrecen una memoria externa ilimitada.
variables:
  n: random(1, 1)
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "intermedio"
  tags: ["procesador de textos", "escritura", "delegación"]

respuesta: "correción ortográfica"
tipo: completar

enunciado: "Al usar un procesador de textos, delegamos la mecánica de la escritura y la {palabra} en el software."

explicacion: |
  El software se encarga de la corrección ortográfica, lo que libera al usuario para centrarse en el contenido y la estructura del texto.
variables:
  palabra: "correción"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "intermedio"
  tags: ["precisión", "errores", "procesamiento"]

respuesta: "imposible"
tipo: completar

enunciado: "Los sistemas informáticos permiten manejar grandes volúmenes de información con una precisión que sería {adjetivo} para la mente humana sola."

explicacion: |
  La mente humana comete errores al procesar grandes volúmenes de datos, mientras que los sistemas informáticos mantienen una alta precisión.
variables:
  adjetivo: "imposible"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "avanzado"
  tags: ["autonomía", "pensamiento", "estructura cognitiva"]

respuesta: "transforma"
tipo: completar

enunciado: "Al ampliar nuestras capacidades, los medios técnicos no solo dan más fuerza, sino que {verbo} la forma en que pensamos y resolvemos problemas."

explicacion: |
  La tecnología cambia nuestra estructura cognitiva, afectando cómo buscamos información y resolvemos problemas.
variables:
  verbo: "transforma"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "intermedio"
  tags: ["información", "acceso", "velocidad"]

respuesta: "instantánea"
tipo: completar

enunciado: "La capacidad de acceder a información de forma {adjetivo} ha modificado nuestra forma de buscar datos."

explicacion: |
  La inmediatez en el acceso a la información altera los procesos cognitivos tradicionales de búsqueda y retención.
variables:
  adjetivo: "instantánea"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "basico"
  tags: ["historia", "herramientas", "evolución"]

respuesta: "antigua"
tipo: completar

enunciado: "La noción de que las herramientas son extensiones humanas no es nueva; se remonta a una idea {adjetivo} como la rueda o el martillo."

explicacion: |
  Las herramientas históricas, desde la rueda hasta el martillo, han servido para potenciar lo que el cuerpo no puede hacer por sí solo.
variables:
  adjetivo: "antigua"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "intermedio"
  tags: ["creatividad", "análisis", "tareas de alto nivel"]

respuesta: "creatividad"
tipo: completar

enunciado: "Al delegar tareas mecánicas, liberamos energía mental para enfocarnos en tareas de mayor nivel, como la {sustantivo} y el análisis crítico."

explicacion: |
  La externalización de funciones cognitivas básicas permite al usuario enfocarse en procesos superiores como la creatividad.
variables:
  sustantivo: "creatividad"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "basico"
  tags: ["visión", "espectro", "limitaciones"]

respuesta: "completo"
tipo: completar

enunciado: "Nuestros ojos no pueden ver el espectro {adjetivo} de luz, pero una cámara digital sí puede procesarlo."

explicacion: |
  La visión humana tiene limitaciones biológicas que la tecnología puede superar, como capturar todo el espectro electromagnético visible e invisible.
variables:
  adjetivo: "completo"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "basico"
  tags: ["prótesis", "definición", "tecnología"]

respuesta: "prótesis"
tipo: completar

enunciado: "Desde una perspectiva profunda, la tecnología puede entenderse como una {sustantivo} cognitiva y física."

explicacion: |
  La tecnología actúa como una prótesis que amplifica las capacidades naturales del ser humano.
variables:
  sustantivo: "prótesis"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "intermedio"
  tags: ["lógica", "razonamiento", "procesamiento"]

respuesta: "razonamiento lógico"
tipo: completar

enunciado: "Los sistemas informáticos actúan como una extensión de nuestro {frase}."

explicacion: |
  La tecnología no solo almacena datos, sino que procesa información de manera que extiende nuestra capacidad de razonamiento lógico.
variables:
  frase: "razonamiento lógico"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "intermedio"
  tags: ["GPS", "delegación", "espacio"]

respuesta: "orientación espacial"
tipo: completar

enunciado: "Al usar un GPS, delegamos nuestra {frase} en un algoritmo."

explicacion: |
  La navegación, que antes dependía de la memoria espacial humana, ahora se delega en sistemas algorítmicos.
variables:
  frase: "orientación espacial"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "basico"
  tags: ["biología", "límites", "humanos"]

respuesta: "biológicas"
tipo: completar

enunciado: "Un medio técnico complementa al ser humano al llevar nuestras limitaciones {adjetivo} más allá de su alcance natural."

explicacion: |
  La tecnología supera las restricciones físicas y cognitivas impuestas por la biología humana.
variables:
  adjetivo: "biológicas"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "intermedio"
  tags: ["memoria", "cerebro", "capacidad"]

respuesta: "finita"
tipo: completar

enunciado: "Nuestro cerebro tiene una capacidad {adjetivo} para almacenar recuerdos, a diferencia de la memoria externa ilimitada de los sistemas informáticos."

explicacion: |
  El cerebro humano tiene límites naturales de almacenamiento, mientras que la tecnología ofrece escalabilidad.
variables:
  adjetivo: "finita"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "avanzado"
  tags: ["conciencia", "uso", "responsabilidad"]

respuesta: "consciente"
tipo: completar

enunciado: "Entender la tecnología como una extensión nos ayuda a usarla de manera más {adjetivo}."

explicacion: |
  La comprensión de la tecnología como extensión fomenta un uso más reflexivo y responsable.
variables:
  adjetivo: "consciente"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "avanzado"
  tags: ["estructura", "cognitiva", "cambio"]

respuesta: "cognitiva"
tipo: completar

enunciado: "La informática cambia nuestra estructura {adjetivo}, no solo nuestra fuerza o velocidad."

explicacion: |
  El impacto de la tecnología va más allá de lo físico; altera la forma en que estructuramos el pensamiento.
variables:
  adjetivo: "cognitiva"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "intermedio"
  tags: ["decisiones", "estrategia", "nivel superior"]

respuesta: "decisiones estratégicas"
tipo: completar

enunciado: "Al liberar energía mental, podemos enfocarnos en la toma de {frase}."

explicacion: |
  La delegación de tareas mecánicas permite al cerebro humano dedicarse a procesos de alto nivel como la estrategia.
variables:
  frase: "decisiones estratégicas"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "basico"
  tags: ["complemento", "reemplazo", "relación"]

respuesta: "complementa"
tipo: completar

enunciado: "Un medio técnico no reemplaza al ser humano, sino que lo {verbo}."

explicacion: |
  La tecnología es un complemento que potencia las capacidades humanas, no un sustituto total.
variables:
  verbo: "complementa"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "basico"
  tags: ["física", "onda", "captura"]

respuesta: "electromagnéticas"
tipo: completar

enunciado: "Una cámara digital captura y procesa esas ondas {adjetivo}, permitiéndonos ver lo invisible."

explicacion: |
  La cámara traduce la luz en señales procesables, extendiendo la percepción visual humana.
variables:
  adjetivo: "electromagnéticas"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "intermedio"
  tags: ["cálculo", "precisión", "errores"]

respuesta: "errores"
tipo: completar

enunciado: "Nuestro cerebro tiene una capacidad finita para realizar cálculos complejos sin cometer {sustantivo}."

explicacion: |
  La fatiga y los límites biológicos hacen que los cálculos humanos sean propensos a errores, algo que la tecnología mitiga.
variables:
  sustantivo: "errores"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "avanzado"
  tags: ["externalización", "funciones", "cognitivas"]

respuesta: "externalizamos"
tipo: completar

enunciado: "Al depender de estas herramientas, también {verbo} ciertas funciones cognitivas."

explicacion: |
  La dependencia tecnológica implica transferir funciones mentales a sistemas externos.
variables:
  verbo: "externalizamos"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "intermedio"
  tags: ["escritura", "mecánica", "software"]

respuesta: "mecánica"
tipo: completar

enunciado: "Al usar un procesador de textos, delegamos la {adjetivo} de la escritura en el software."

explicacion: |
  El software maneja los aspectos técnicos de la escritura, permitiendo al usuario centrarse en el mensaje.
variables:
  adjetivo: "mecánica"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "intermedio"
  tags: ["ventajas", "potencia", "beneficios"]

respuesta: "potentes"
tipo: completar

enunciado: "Entender la tecnología como una extensión nos ayuda a reconocer tanto sus {adjetivo} ventajas como la responsabilidad."

explicacion: |
  Es crucial balancear la apreciación de la potencia tecnológica con la conciencia de sus implicaciones.
variables:
  adjetivo: "potentes"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "avanzado"
  tags: ["ceder", "nativas", "máquinas"]

respuesta: "ceder"
tipo: completar

enunciado: "La tecnología implica la responsabilidad de {verbo} parte de nuestras capacidades nativas a máquinas."

explicacion: |
  El uso de tecnología requiere aceptar la transferencia de control de ciertas habilidades humanas a algoritmos.
variables:
  verbo: "ceder"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "avanzado"
  tags: ["resolución", "problemas", "estructura"]

respuesta: "problemas"
tipo: completar

enunciado: "Los medios técnicos transforman la forma en que pensamos y resolvemos {sustantivo}."

explicacion: |
  La tecnología no solo acelera procesos, sino que redefine la metodología de resolución de problemas.
variables:
  sustantivo: "problemas"
```

```
metadata:
  materia: "Informática"
  tema: "medios_tecnicos_extension_capacidades_humanas"
  nivel: "basico"
  tags: ["visión", "invisible", "tecnología"]

respuesta: "invisible"
tipo: completar

enunciado: "La cámara digital nos permite 'ver' lo {adjetivo} al procesar ondas que el ojo no capta."

explicacion: |
  La tecnología expande los límites de la percepción humana hacia lo que naturalmente es imperceptible.
variables:
  adjetivo: "invisible"
```
