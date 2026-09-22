# Examen jefe — [PENDIENTE #823]

> Logro #823. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **116 preguntas totales** en 5/5 secciones.

---

## Sección: comunicacion-entre-procesos (20 preguntas)

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["procesos", "aislamiento"]

respuesta: verdadero
tipo: vf

enunciado: "Los procesos en un sistema operativo moderno funcionan de manera completamente integrada y comparten su espacio de memoria por defecto."

explicacion: |
  Falso. Los procesos se gestionan de manera aislada por seguridad y estabilidad. Si uno falla, no necesariamente se cae el resto gracias a este aislamiento.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["estabilidad", "seguridad"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "¿Cuál es una razón clave para que el sistema operativo gestione los procesos de forma aislada?"

explicacion: |
  El aislamiento mejora la estabilidad y la seguridad. Si un proceso falla, no corrompe la memoria de otros procesos ni cae todo el sistema.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["ejemplo", "portapapeles"]

respuesta: 2
tipo: mc
opciones: 4

enunciado: "Cuando copias texto de un editor y lo pegas en otro, ¿qué mecanismo está involucrado indirectamente?"

explicacion: |
  El portapapeles es una forma de IPC. El editor A escribe en una región de memoria compartida (o envía un mensaje al gestor de portapapeles) y el editor B lee de ahí.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "avanzado"
  tags: ["seguridad", "comparacion"]

respuesta: 1
tipo: mc
opciones: 4

enunciado: "¿Qué mecanismo es generalmente más seguro por defecto al no requerir conocimiento de los detalles internos del otro proceso?"

explicacion: |
  El intercambio de mensajes es más seguro porque los procesos no compiten por el mismo espacio de memoria, reduciendo riesgos de corrupción accidental.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["lenguaje", "sintaxis"]

respuesta: verdadero
tipo: vf

enunciado: "En el lenguaje de descripción de ejercicios, los booleanos se escriben como 'true' o 'false'."

explicacion: |
  Falso. En este DSL, los booleanos literales son 'verdadero' y 'falso', sin comillas.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["diseño", "ventajas"]

respuesta: 3
tipo: mc
opciones: 4

enunciado: "¿Cuál NO es una ventaja directa de usar IPC sobre un monolito gigante?"

explicacion: |
  La complejidad de implementación es una DESVENTAJA. Las ventajas son modularidad, seguridad, estabilidad y reutilización. La opción de "menor complejidad de código" es falsa.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["ipc", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "La comunicación entre procesos (IPC) es el conjunto de mecanismos que permiten que procesos independientes intercambien información o modifiquen su comportamiento."

explicacion: |
  Correcto. La IPC es fundamental para que aplicaciones aisladas colaboren, como cuando copiar y pegar texto involucra comunicación entre el editor y el sistema de almacenamiento temporal.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["seguridad", "mensajes"]

respuesta: verdadero
tipo: vf

enunciado: "El intercambio de mensajes es considerado más seguro que la memoria compartida porque los procesos no necesitan conocer los detalles internos del otro."

explicacion: |
  Correcto. Al usar canales definidos por el SO, los procesos mantienen su aislamiento interno, reduciendo riesgos de corrupción accidental de memoria.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["proceso", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "Cada aplicación que abres en tu computadora, como un navegador o un reproductor de música, es considerada un proceso separado."

explicacion: |
  Correcto. El sistema operativo trata a cada aplicación ejecutándose como un proceso independiente con su propio espacio de memoria.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["eficiencia", "diseno"]

respuesta: verdadero
tipo: vf

enunciado: "Dividir tareas complejas en procesos pequeños que se comunican mejora la eficiencia, seguridad y mantenimiento del software."

explicacion: |
  Correcto. La modularidad mediante IPC permite crear sistemas más robustos, fáciles de actualizar y menos propensos a fallos catastróficos.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["errores", "memoria_compartida"]

respuesta: verdadero
tipo: vf

enunciado: "Si dos procesos intentan escribir en el mismo lugar de memoria compartida al mismo tiempo sin sincronización, pueden ocurrir errores."

explicacion: |
  Correcto. La condición de carrera puede llevar a corrupción de datos, por lo que se requieren mecanismos de exclusión mutua o semáforos.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["ejemplo", "portapapeles"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando copias y pegas texto, hay comunicación constante entre el editor de texto y el sistema de almacenamiento temporal."

explicacion: |
  Correcto. El portapapeles es un ejemplo cotidiano de IPC, donde un proceso escribe datos y otro los lee desde una zona compartida o canal del SO.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["estabilidad", "aislamiento"]

respuesta: verdadero
tipo: vf

enunciado: "Debido al aislamiento, si un proceso falla, no necesariamente se cae el resto del sistema."

explicacion: |
  Correcto. El aislamiento de memoria previene que un error en un proceso afecte la integridad de otros procesos o del kernel.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "avanzado"
  tags: ["aplicaciones", "rendimiento"]

respuesta: verdadero
tipo: vf

enunciado: "Para aplicaciones gráficas, la memoria compartida es preferible por su eficiencia en grandes volúmenes de datos."

explicacion: |
  Correcto. Los gráficos requieren transferir grandes cantidades de píxeles o vectores rápidamente, lo que la memoria compartida facilita mejor que los mensajes.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["mensajes", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "En el intercambio de mensajes, los datos viajan a través de un canal definido por el sistema operativo."

explicacion: |
  Correcto. El SO proporciona la infraestructura (colas de mensajes, pipes, etc.) que actúa como el canal de comunicación.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["diseno", "beneficios"]

respuesta: verdadero
tipo: vf

enunciado: "El uso de IPC mejora la capacidad de mantenimiento del software al permitir dividir tareas en partes manejables."

explicacion: |
  Correcto. Los módulos pueden desarrollarse, probarse y actualizarse independientemente, facilitando el mantenimiento a largo plazo.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["mensajes", "costo"]

respuesta: verdadero
tipo: vf

enunciado: "El intercambio de mensajes implica copiar datos de un espacio de memoria a otro, lo que puede ser lento."

explicacion: |
  Correcto. La sobrecarga de copiar datos entre espacios de usuario y kernel (o entre procesos) es el principal costo del modelo de mensajes.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "avanzado"
  tags: ["memoria_compartida", "control"]

respuesta: verdadero
tipo: vf

enunciado: "La memoria compartida requiere mecanismos de sincronización para evitar que procesos escriban simultáneamente en el mismo lugar."

explicacion: |
  Correcto. Sin sincronización (mutex, semáforos), la escritura concurrente lleva a condiciones de carrera y corrupción de datos.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "basico"
  tags: ["ejemplo", "portapapeles"]

respuesta: verdadero
tipo: vf

enunciado: "El sistema de almacenamiento temporal (portapapeles) participa en la comunicación cuando copias texto."

explicacion: |
  Correcto. El portapapeles es un servicio del SO que actúa como intermediario de datos entre el proceso que copia y el que pega.
```

```
metadata:
  materia: "informatica"
  tema: "comunicacion_entre_procesos"
  nivel: "intermedio"
  tags: ["sincronizacion", "riesgos"]

respuesta: falso
tipo: vf

enunciado: "La memoria compartida elimina por completo la necesidad de mecanismos de sincronización entre procesos, ya que el sistema operativo gestiona automáticamente la integridad de los datos sin intervención del desarrollador."

explicacion: |
  Falso. La memoria compartida introduce el desafío de la sincronización. Si dos procesos escriben simultáneamente, pueden ocurrir condiciones de carrera o corrupción de datos, requiriendo semáforos o mutex.
```

## Sección: pruebas-unitarias-integracion (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_e_integracion"
  nivel: "basico"
  tags: ["testing", "unitario"]

respuesta: "unitario"
tipo: completar
respuestas_validas:
  - "unitario"
  - "unitarias"

enunciado: "Una prueba ___ se enfoca en verificar el funcionamiento de la unidad más pequeña y aislada de código, como una función o un método, sin dependencias externas."

explicacion: |
  Las pruebas unitarias validan la lógica interna de un componente de forma aislada, asegurando que cada pieza cumpla su contrato individualmente.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_e_integracion"
  nivel: "basico"
  tags: ["conceptos", "integracion"]

opciones_explicitas: ["Verificar la comunicación entre módulos", "Verificar la sintaxis del lenguaje", "Verificar el rendimiento del hardware"]
respuesta: "Verificar la comunicación entre módulos"
tipo: mc

enunciado: "El objetivo principal de las pruebas de integración es:"

explicacion: |
  Mientras que las pruebas unitarias miran el componente solo, las de integración buscan detectar errores en la interacción y el flujo de datos entre diferentes módulos.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_e_integracion"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "En una prueba de integración, el objetivo principal es aislar completamente un componente de sus dependencias para probar su lógica interna."

explicacion: |
  Falso. El aislamiento es la característica de las pruebas unitarias. Las pruebas de integración, por el contrario, requieren que los componentes estén conectados para verificar su interacción.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_e_integracion"
  nivel: "intermedio"
  tags: ["flujo_de_trabajo"]

opciones_explicitas: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]
respuesta_orden: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]
tipo: ordenar

enunciado: "Ordena las etapas de testing de software desde el nivel más granular (más pequeño) hasta el nivel de sistema completo:"

explicacion: |
  El flujo estándar de desarrollo sigue una jerarquía: primero se asegura que cada pieza funcione (Unitarias), luego que las piezas encajen (Integración) y finalmente que el sistema completo cumpla el requisito (Sistema).
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_e_integracion"
  nivel: "intermedio"
  tags: ["diagnostico"]

respuesta: "unitario"
tipo: mc
opciones_explicitas: ["unitario", "integracion"]

enunciado: "Si una función matemática falla al calcular un resultado, pero el resto del sistema funciona bien, estamos ante un error de tipo: ___"

explicacion: |
  Como el fallo está contenido en la lógica interna de una pieza aislada, el error se identifica mediante pruebas unitarias.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "calidad_software"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["Se verifica que la función 'sumar(a, b)' devuelva correctamente el resultado de la suma de dos enteros.", "unitarias"], ["Se verifica que el módulo de 'pagos' se comunique correctamente con la 'base de datos' para registrar una transacción.", "integracion"]]

enunciado: "Si el objetivo es verificar {escenarios[escenario_idx][0]}, estamos realizando pruebas de tipo: ___"

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas:
  - "unitarias"
  - "integracion"

explicacion: |
  Las pruebas unitarias se enfocan en la lógica interna de una función o componente de forma aislada. Las pruebas de integración verifican la interacción entre diferentes módulos o componentes del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["conceptos"]

enunciado: "En una prueba de integración, el objetivo principal es asegurar que una función individual funcione correctamente de forma aislada, sin importar si sus dependencias responden bien."

respuesta: falso
tipo: vf

explicacion: |
  Falso. El objetivo de las pruebas de integración es precisamente verificar cómo interactúan los componentes entre sí, por lo que el foco no es el aislamiento, sino la comunicación y el flujo de datos entre ellos.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["flujo_de_trabajo"]

enunciado: "Ordena las etapas típicas de un ciclo de desarrollo de software orientado a calidad (Testing Pyramid):"

opciones_explicitas: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema/E2E"]
respuesta_orden: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema/E2E"]
tipo: ordenar

explicacion: |
  El flujo lógico comienza con las pruebas más granulares y rápidas (Unitarias), luego se combinan componentes (Integración) y finalmente se prueba el sistema completo en un entorno similar al real (Sistema/E2E).
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["casos_practicos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["El sistema debe validar que el módulo de 'Login' envíe las credenciales correctamente al servicio de 'Autenticación'.", "integracion"], ["El sistema debe validar que el método 'calcular_iva(monto)' devuelva el 21% del monto ingresado.", "unitarias"]]

enunciado: "Analiza el siguiente caso: '{casos[caso_idx][0]}'. ¿Qué tipo de prueba es?"

opciones_explicitas: ["unitarias", "integracion"]
respuesta: casos[caso_idx][1]
tipo: mc

explicacion: |
  Si el caso implica la interacción entre dos entidades distintas (Login -> Servicio), es de integración. Si solo valida la lógica de un método matemático o de cálculo simple, es unitaria.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "avanzado"
  tags: ["debug"]

enunciado: "En el contexto de pruebas de ___, un fallo puede indicar un problema en la interfaz entre dos componentes, no necesariamente en la lógica interna de cada uno."
tipo: completar
respuesta: "integracion"

explicacion: |
  Las pruebas de integración son cruciales para detectar errores de contrato, protocolos de comunicación o formatos de datos incorrectos que las pruebas unitarias (por su naturaleza aislada) no pueden detectar.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "unitarias"]

respuesta: "unitarias"
tipo: mc
opciones_explicitas: ["unitarias", "de_integracion", "de_sistema", "de_aceptacion"]

enunciado: "Cuando un desarrollador se enfoca exclusivamente en verificar que una única función o método funcione correctamente de forma aislada, está realizando pruebas ___."

explicacion: |
  Las pruebas unitarias se centran en la unidad mínima de software (una función, un método o una clase) de forma aislada de sus dependencias.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "integracion"]

respuesta: falso
tipo: vf

enunciado: "El objetivo principal de las pruebas de integración es verificar que cada componente individual funcione correctamente según su especificación técnica."

explicacion: |
  Falso. El objetivo de las pruebas de integración es verificar que los componentes, una vez probados individualmente, funcionen correctamente al interactuar entre sí.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "errores_comunes"]

respuesta: "de_integracion"
tipo: mc
opciones_explicitas: ["unitarias", "de_integracion"]

enunciado: "Si una prueba falla porque la interacción entre dos módulos es incorrecta, pero cada módulo funciona bien por separado, estamos ante un error de tipo: ___."

explicacion: |
  En este caso, el problema no reside en la lógica interna de los módulos (unitario), sino en el contrato o la comunicación entre ellos (integración).
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "flujo_de_trabajo"]

respuesta_orden: ["Unitarias", "Integración", "Sistema"]
tipo: ordenar
opciones_explicitas: ["Unitarias", "Integración", "Sistema"]

enunciado: "Ordena las etapas típicas de una estrategia de testing ascendente (Bottom-Up), desde lo más pequeño a lo más complejo."

explicacion: |
  El flujo lógico estándar comienza validando las piezas individuales (unitarias), luego cómo se conectan (integración) y finalmente el sistema completo.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "avanzado"
  tags: ["testing", "mocks"]

respuesta: "unitarias"
tipo: completar
respuestas_validas:
  - "unitarias"

enunciado: "Para aislar una pieza de código y evitar que dependencias externas (como una base de datos) afecten el resultado, se utilizan objetos simulados (Mocks/Stubs). Este enfoque es característico de las pruebas ___."

explicacion: |
  El uso de Mocks es fundamental en las pruebas unitarias para garantizar que el test solo evalúe la lógica de la unidad y no el comportamiento de sus dependencias.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "calidad_software"]

tipo: mc
opciones_explicitas: ["El objetivo de la prueba unitaria es verificar la interacción entre múltiples módulos.", "La prueba unitaria se enfoca en la lógica interna de un componente aislado.", "La prueba de integración busca validar la interfaz de usuario.", "Ambas pruebas tienen exactamente el mismo alcance y objetivo."]

respuesta: "La prueba unitaria se enfoca en la lógica interna de un componente aislado."

enunciado: "En el ciclo de vida de pruebas, ¿cuál es la principal distinción de una prueba unitaria respecto a una de integración?"

explicacion: |
  Las pruebas unitarias validan la unidad mínima de software (como una función o método) de forma aislada, mientras que las de integración verifican que los componentes funcionen correctamente al unirse.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "conceptos"]

tipo: vf

enunciado: "En una prueba unitaria, si el componente que estamos probando depende de una base de datos, se debe utilizar un objeto simulado (mock) para mantener el aislamiento del componente."

respuesta: verdadero

explicacion: |
  Es correcto. Para que una prueba sea puramente unitaria, no debe depender de sistemas externos (DB, APIs, archivos); se utilizan mocks o stubs para simular esos comportamientos.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "flujo_de_errores"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["error_logica", "error_interfaz"], ["error_calculo", "error_comunicacion"]]

tipo: completar
respuesta: escenarios[escenario_idx][1]
respuestas_validas:
  - "error_logica"
  - "error_interfaz"
  - "error_calculo"
  - "error_comunicacion"

enunciado: "Si una función calcula mal un impuesto debido a un error en su algoritmo interno, el tipo de error detectado es un ___; pero si la función envía el dato correcto pero el receptor no sabe interpretarlo, el problema es un ___."

pasos:
  - "Identificar si el error es interno (lógica) o de interacción (interfaz)."
  - "Relacionar el tipo de error con el nivel de prueba correspondiente."

explicacion: |
  Los errores de lógica interna se detectan en pruebas unitarias, mientras que los errores de comunicación entre módulos se detectan en pruebas de integración.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]

respuesta_orden: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]

enunciado: "Ordene los siguientes niveles de prueba según el orden lógico de ejecución en un proceso de desarrollo estándar (de lo más pequeño a lo más completo):"

explicacion: |
  El desarrollo sigue una pirámide: primero se asegura que cada pieza funcione (Unitarias), luego que las piezas encajen (Integración) y finalmente que el sistema completo cumpla su propósito (Sistema).
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "complejidad"]

tipo: mc
opciones_explicitas: ["Las pruebas unitarias son generalmente más complejas de configurar que las de integración.", "Las pruebas de integración suelen ser más rápidas de ejecutar que las unitarias.", "Las pruebas unitarias son más fáciles de aislar que las de integración.", "Las pruebas de integración no requieren de código de prueba."]

respuesta: "Las pruebas unitarias son más fáciles de aislar que las de integración."

enunciado: "Al comparar la dificultad de preparación (setup) y aislamiento, ¿cuál de las siguientes afirmaciones es correcta?"

explicacion: |
  Las pruebas unitarias son fáciles de aislar porque solo requieren el componente y sus mocks. Las de integración son más complejas porque requieren configurar múltiples módulos, bases de datos o servicios reales para que interactúen.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "calidad_software"]

variables:
  escenario: uno_de([["Se está probando si la función 'calcular_iva(monto)' devuelve el valor correcto para un número dado, sin considerar la base de datos.", "unitaria"], ["Se está probando si el módulo de 'pagos' logra comunicarse correctamente con la 'pasarela_de_pagos' externa.", "integracion"], ["Se está probando si un solo método de una clase procesa correctamente un string de entrada.", "unitaria"], ["Se está probando si la interacción entre el módulo de 'inventario' y el de 'ventas' actualiza el stock tras una compra.", "integracion"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["unitaria", "integracion"]

enunciado: "Dado el siguiente escenario: {escenario[0]}. ¿Qué tipo de prueba se está ejecutando?"

explicacion: |
  Las pruebas unitarias se enfocan en la lógica interna de una pieza mínima de código (función, método) de forma aislada. Las pruebas de integración verifican que la interacción entre diferentes módulos o componentes funcione correctamente.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "basico"
  tags: ["testing", "conceptos"]

variables:
  respuesta_correcta: falso

tipo: vf
enunciado: "Las pruebas de integración tienen como objetivo principal verificar que cada función individual cumpla con su contrato de entrada y salida, de forma aislada de otros módulos."

respuesta: falso

explicacion: |
  Falso. Eso es la definición de pruebas unitarias. Las de integración buscan detectar fallos en las interfaces y la comunicación entre componentes ya probados.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "flujo_de_datos"]

respuestas_validas:
  - "flujo"
  - "interacción"
  - "comunicación"
respuesta: "interacción"
tipo: completar

enunciado: "Mientras que las pruebas unitarias validan la lógica de un componente aislado, las pruebas de ___________ validan que los componentes funcionen correctamente cuando se combinan."

explicacion: |
  La integración se centra en la interacción entre módulos para asegurar que el flujo de datos y el control entre ellos sea el esperado.
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "intermedio"
  tags: ["testing", "metodologia"]

opciones_explicitas: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]
respuesta_orden: ["Pruebas Unitarias", "Pruebas de Integración", "Pruebas de Sistema"]
tipo: ordenar

enunciado: "Ordena las fases de testing de menor a mayor alcance (de lo más pequeño a lo más complejo):"

explicacion: |
  El proceso estándar comienza con la validación de la unidad mínima (Unitarias), luego se unen las piezas (Integración) y finalmente se prueba el sistema completo (Sistema/E2E).
```

```
metadata:
  materia: "informatica"
  tema: "pruebas_unitarias_vs_integracion"
  nivel: "avanzado"
  tags: ["testing", "debug"]

variables:
  caso: uno_de([["El módulo A envía un objeto JSON, pero el módulo B espera un XML.", "error_integracion"], ["La función 'sumar(a, b)' devuelve un resultado incorrecto debido a un error de redondeo.", "error_unitario"], ["Un método de validación de email no acepta caracteres especiales.", "error_unitario"], ["El módulo de base de datos no responde ante una consulta de un módulo de reporte.", "error_integracion"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["error_unitario", "error_integracion"]

enunciado: "Se detecta el siguiente problema: {caso[0]}. ¿A qué categoría de error pertenece principalmente?"

explicacion: |
  Si el error reside en la lógica interna de una función, es unitario. Si el error surge por la incompatibilidad de formatos o la falta de comunicación entre dos componentes que por separado funcionan bien, es un error de integración.
```

## Sección: que-es-la-tecnica-y-la-tecnologia (20 preguntas)

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["caracteristicas", "tecnica"]

respuesta: verdadero
tipo: vf

enunciado: "La técnica se describe como un conjunto de procedimientos, métodos o habilidades específicas."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["caracteristicas", "tecnologia"]

respuesta: verdadero
tipo: vf

enunciado: "La tecnología es solo la herramienta física en sí misma, sin considerar el conocimiento detrás de ella."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "avanzado"
  tags: ["critica", "neutralidad"]

respuesta: falso
tipo: vf

enunciado: "La tecnología es neutral y está libre de sesgos culturales o objetivos de diseño."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["componentes", "informatica"]

respuesta: verdadero
tipo: vf

enunciado: "En informática, la tecnología incluye hardware, software y protocolos de comunicación."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["variabilidad", "tecnica"]

respuesta: verdadero
tipo: vf

enunciado: "Las técnicas pueden variar según el contexto o la herramienta disponible."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["interdependencia", "historia"]

respuesta: verdadero
tipo: vf

enunciado: "Las nuevas técnicas surgen como respuesta a las limitaciones de la tecnología existente."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "avanzado"
  tags: ["ciclo", "computacion"]

respuesta: verdadero
tipo: vf

enunciado: "En el campo de la computación, el ciclo entre técnica y tecnología es acelerado."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "avanzado"
  tags: ["analisis", "critica"]

respuesta: verdadero
tipo: vf

enunciado: "Entender la diferencia entre técnica y tecnología ayuda a analizar críticamente el mundo digital."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["definicion", "marco"]

respuesta: verdadero
tipo: vf

enunciado: "La tecnología define el marco de posibilidades y restricciones para la acción técnica."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["definicion", "herramienta"]

respuesta: verdadero
tipo: vf

enunciado: "La técnica es descrita como la herramienta que da poder de acción inmediato."
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["diferencia", "naturaleza"]

variables:
  tipo_technica: "individual"
  tipo_tecnologia: "colectiva"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La técnica se caracteriza por ser individual y procedimental, mientras que la tecnología suele ser colectiva y sistémica."

explicacion: |
  La técnica es una habilidad o método que posee o aplica una persona (individual). La tecnología es un sistema complejo que involucra múltiples componentes, usuarios y procesos (colectivo).
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["neutralidad", "etica"]

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La tecnología es un elemento neutral, libre de sesgos culturales o objetivos de sus creadores."

explicacion: |
  La tecnología no es neutral. Está diseñada por personas con ciertos objetivos, sesgos y contextos culturales. Su diseño refleja las intenciones y valores de quienes la crean.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["interdependencia", "ciclo"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Las nuevas técnicas surgen como respuesta a limitaciones tecnológicas existentes, y a su vez, nuevas tecnologías permiten técnicas más complejas."

explicacion: |
  Existe un ciclo dinámico. Las limitaciones de la tecnología actual impulsan la creación de nuevas técnicas, y el avance tecnológico abre puertas para desarrollar técnicas más sofisticadas.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["componentes", "definicion"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: En informática, la tecnología incluye solo el hardware y el software, pero no los protocolos de comunicación."

explicacion: |
  Falso. La tecnología informática incluye hardware, software, protocolos de comunicación e infraestructura. Todos estos elementos funcionan en conjunto para permitir la operación del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["contexto", "variabilidad"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Las técnicas pueden variar según el contexto o la herramienta disponible."

explicacion: |
  Sí. Una misma tarea puede requerir diferentes técnicas dependiendo de las herramientas (software/hardware) o el entorno (contexto) en el que se realice.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["impacto", "sociedad"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Es importante comprender el impacto de la tecnología en la sociedad para pasar de ser usuarios pasivos a ciudadanos conscientes."

explicacion: |
  El análisis crítico del impacto social, ético y cultural de la tecnología es fundamental para una ciudadanía digital responsable y activa.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["definicion", "concepto"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La técnica se refiere al 'cómo' hacemos algo."

explicacion: |
  Correcto. La técnica define los métodos, procedimientos y habilidades para ejecutar una tarea. Es la parte procedimental del conocimiento.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "basico"
  tags: ["definicion", "concepto"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La tecnología es el producto o sistema resultante de aplicar conocimiento y técnicas."

explicacion: |
  Correcto. La tecnología es el resultado tangible o sistémico de la aplicación del saber técnico y científico para resolver problemas.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["metacognicion", "evaluacion"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Estudiar informática implica solo aprender a operar máquinas, sin necesidad de entender su diseño."

explicacion: |
  Falso. Estudiar informática implica entender la lógica detrás del diseño, los sesgos y el impacto, no solo la operación. Esto permite una ciudadanía digital crítica.
```

```
metadata:
  materia: "informatica"
  tema: "que_es_la_tecnica_y_la_tecnologia"
  nivel: "intermedio"
  tags: ["ciudadania", "objetivo"]

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: Entender la diferencia entre técnica y tecnología nos ayuda a analizar críticamente el mundo digital."

explicacion: |
  Sí. Esta distinción permite pasar de la mera operación (técnica) al análisis crítico del sistema (tecnología), fomentando una ciudadanía digital más consciente y capaz de innovar.
```

## Sección: recursividad (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["programacion", "conceptos"]

respuesta: "recursividad"
tipo: completar
respuestas_validas:
  - "recursividad"
  - "Recursividad"

enunciado: "La capacidad de una función para llamarse a sí misma durante su ejecución se denomina ________."

explicacion: |
  La recursividad es una técnica de programación donde una función se invoca a sí misma para resolver subproblemas del problema original.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["conceptos", "terminologia"]

respuesta: verdadero
tipo: vf

enunciado: "Para evitar un bucle infinito en una función recursiva, es indispensable contar con al menos un caso base que detenga las llamadas."

explicacion: |
  Sin un caso base, la función se llamaría a sí misma indefinidamente (causando un error de desbordamiento de pila o stack overflow).
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  escenario: uno_de([["el caso que detiene la función", "caso base"], ["la llamada a la propia función", "caso recursivo"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["caso base", "caso recursivo", "caso infinito", "caso nulo"]

enunciado: "En una función recursiva, el componente que permite que la función se divida en problemas más pequeños se conoce como el {escenario[0]}."

explicacion: |
  El caso recursivo es la parte de la función donde se realiza la llamada recursiva, reduciendo el problema hacia el caso base.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "intermedio"
  tags: ["flujo_control"]

respuesta_orden: ["Caso Base", "Caso Recursivo", "Retorno de valores"]
tipo: ordenar

opciones_explicitas: ["Caso Base", "Caso Recursivo", "Retorno de valores"]

enunciado: "Ordena los pasos lógicos que ocurren en una ejecución recursiva típica desde que se entra a la función hasta que se obtiene el resultado final:"

explicacion: |
  Primero se ejecutan las llamadas (caso recursivo) hasta alcanzar el límite (caso base), y luego los valores se devuelven hacia atrás en la pila de llamadas.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_basica"
  nivel: "basico"
  tags: ["errores", "memoria"]

respuesta: "Stack Overflow"
tipo: mc
opciones_explicitas: ["Stack Overflow", "Syntax Error", "Null Pointer Exception", "Memory Leak"]

enunciado: "Cuando una función recursiva no tiene un caso base definido correctamente, se produce un error de desbordamiento de pila conocido como ________."

explicacion: |
  Cada llamada recursiva ocupa un espacio en la pila de ejecución (stack). Si las llamadas son infinitas, la memoria asignada a la pila se agota.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["programacion", "conceptos"]

tipo: mc
opciones_explicitas: ["Una función que se llama a sí misma", "Una función que no tiene retorno", "Un bucle que nunca termina", "Una función que utiliza variables globales"]
respuesta: "Una función que se llama a sí misma"
enunciado: "En programación, ¿qué define técnicamente a una función recursiva?"
explicacion: |
  La recursividad ocurre cuando una función se invoca a sí misma dentro de su propio cuerpo para resolver una parte del problema.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_componentes"
  nivel: "basico"
  tags: ["logica", "estructura"]

tipo: completar
respuestas_validas:
  - "caso base"
  - "caso recursivo"

enunciado: "Para que una función recursiva no entre en un bucle infinito, es indispensable que exista un ___ que detenga las llamadas, y un ___ que reduzca el problema original."

explicacion: |
  El caso base es la condición de parada que devuelve un valor sin realizar más llamadas. El caso recursivo es donde la función se llama a sí misma con un argumento modificado.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_ejecucion"
  nivel: "intermedio"
  tags: ["algoritmos", "factorial"]

variables:
  n: 4
  resultado: 24

tipo: completar
tolerancia_abs: 0

enunciado: "Considera la siguiente función recursiva para calcular el factorial de n: \n`f(n) = if n == 0 then 1 else n * f(n-1)` \n\n¿Cuál es el valor de f({n})?"

respuesta: resultado
explicacion: |
  El resultado de 4! (factorial de 4) es 24.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_memoria"
  nivel: "intermedio"
  tags: ["memoria", "stack"]

tipo: vf

enunciado: "¿Es verdadero que cada llamada recursiva consume memoria adicional en la pila de llamadas (call stack) de la computadora?"

respuesta: verdadero

explicacion: |
  Verdadero. Cada llamada pendiente debe guardar su estado (variables locales, dirección de retorno) en la pila, lo que puede llevar a un error de 'stack overflow' si la recursión es muy profunda.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_orden"
  nivel: "avanzado"
  tags: ["flujo_control", "stack"]

tipo: ordenar
opciones_explicitas: ["Llamada a f(3)", "Llamada a f(2)", "Llamada a f(1)", "Llamada a f(0)", "Retorno de f(0)", "Retorno de f(1)", "Retorno de f(2)", "Retorno de f(3)"]
respuesta_orden: ["Llamada a f(3)", "Llamada a f(2)", "Llamada a f(1)", "Llamada a f(0)", "Retorno de f(0)", "Retorno de f(1)", "Retorno de f(2)", "Retorno de f(3)"]

enunciado: "Ordena cronológicamente los eventos en la ejecución de una función recursiva para f(3) donde el caso base es f(0):"

explicacion: |
  La ejecución sigue una estructura de LIFO (Last In, First Out): primero se van apilando todas las llamadas hacia el caso base y luego se van resolviendo (retornando) a medida que la pila se descarga.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["recursividad", "conceptos"]

respuesta: "caso base"
tipo: completar
respuestas_validas:
  - "caso base"
  - "caso base"

enunciado: "Para evitar que una función recursiva entre en un bucle infinito y agote la memoria (stack overflow), es indispensable definir un ___ que detenga las llamadas sucesivas."

explicacion: |
  El caso base es la condición que permite que la función deje de llamarse a sí misma, devolviendo un valor sin realizar una nueva llamada recursiva.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_errores"
  nivel: "basico"
  tags: ["stack_overflow", "errores"]

variables:
  es_infinito: verdadero

respuesta: verdadero
tipo: vf
enunciado: "Si una función recursiva no reduce el tamaño del problema en cada paso hacia el caso base, ¿se producirá un error de desbordamiento de pila (stack overflow)?"

explicacion: |
  Si el problema no se aproxima al caso base, la recursión es infinita y la pila de llamadas se llena, causando un error de ejecución.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_flujo"
  nivel: "intermedio"
  tags: ["flujo_ejecucion", "recursividad"]

respuesta: "f(3) -> f(2) -> f(1) -> f(0) -> Retorno"
tipo: mc
opciones_explicitas: ["f(3) -> f(2) -> f(1) -> f(0) -> Retorno", "f(3) -> f(4) -> f(5) -> ..."]

enunciado: "Si tenemos una función que resta 1 al argumento en cada llamada y el caso base es cuando el argumento es 0, ¿cuál es la secuencia correcta de llamadas para f(3)?"

explicacion: |
  En una recursión correcta, cada llamada debe acercarse al caso base. La secuencia f(3) -> f(2) -> f(1) -> f(0) se detiene al llegar a 0.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_estructura"
  nivel: "intermedio"
  tags: ["estructura", "recursividad"]

respuesta_orden: ["Caso base", "Caso recursivo", "Paso de parámetros"]
tipo: ordenar

opciones_explicitas: ["Caso base", "Caso recursivo", "Paso de parámetros"]

enunciado: "Ordena los componentes lógicos necesarios para que una función sea recursiva y funcional, desde lo que detiene la ejecución hasta lo que permite la progresión:"

explicacion: |
  Primero se define la condición de parada (caso base), luego la lógica de la llamada (caso recursivo) y finalmente cómo se transforma el dato (paso de parámetros).
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_errores"
  nivel: "avanzado"
  tags: ["retorno", "errores"]

variables:
  error_retorno: falso

respuesta: error_retorno
tipo: vf
enunciado: "En una función recursiva que debe devolver la suma de los elementos de una lista, si olvidamos incluir la palabra clave 'return' en la llamada recursiva, la función devolverá un valor correcto."

explicacion: |
  Es un error común: si no se retorna el resultado de la llamada recursiva, la cadena de valores se rompe y la función principal no recibe el resultado acumulado.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["recursividad", "conceptos"]

respuesta: "caso base"
tipo: completar
respuestas_validas:
  - "caso base"
  - "condicion de parada"

enunciado: "Para evitar que una función recursiva entre en un bucle infinito, es indispensable definir un ___ que detenga las llamadas sucesivas."

explicacion: |
  El caso base es la condición que permite que la función deje de llamarse a sí misma y comience a retornar valores, evitando un desbordamiento de pila (stack overflow).
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_vs_iteracion"
  nivel: "intermedio"
  tags: ["recursividad", "iteracion", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "En términos de complejidad de espacio en la memoria (stack), una función recursiva suele ser más costosa que un bucle iterativo equivalente debido al uso de la pila de llamadas."

explicacion: |
  Verdadero. Cada llamada recursiva añade un nuevo marco de pila (stack frame) con sus variables locales y dirección de retorno, mientras que la iteración reutiliza el mismo espacio de memoria.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_estructura"
  nivel: "basico"
  tags: ["recursividad", "estructura"]

respuesta_orden: ["Caso base", "Caso recursivo", "Reducción del problema"]
tipo: ordenar
opciones_explicitas: ["Caso base", "Caso recursivo", "Reducción del problema"]

enunciado: "Ordena los componentes lógicos necesarios para que un algoritmo recursivo sea correcto y termine:"

explicacion: |
  Para que la recursión funcione, primero se debe evaluar si llegamos al caso base; si no, se ejecuta el caso recursivo, el cual debe reducir el problema original hacia el caso base.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_estado"
  nivel: "intermedio"
  tags: ["recursividad", "estado", "memoria"]

respuesta: "el estado se mantiene en la pila de llamadas"
tipo: mc
opciones_explicitas: ["el estado se mantiene en la pila de llamadas", "el estado se pierde en cada llamada", "el estado se guarda en una variable global única", "el estado no es necesario en recursión"]

enunciado: "Al comparar una función recursiva con un bucle 'while', ¿en qué se diferencia la gestión de las variables locales?"

explicacion: |
  En la recursividad, cada llamada tiene su propio ámbito (scope) y sus propias variables, las cuales se almacenan en la pila de ejecución (stack).
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_identificacion"
  nivel: "basico"
  tags: ["recursividad", "logica"]

variables:
  idx: uno_de([0,1])
  escenarios: [["f(n) = n + f(n-1)", "recursivo"], ["f(n) = n + 1", "no recursivo"]]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["recursivo", "no recursivo"]

enunciado: "Analiza la siguiente definición de función: {escenarios[idx][0]}. ¿Cuál es su naturaleza?"

explicacion: |
  Una función es recursiva si su definición incluye una llamada a sí misma con un argumento modificado, como se ve en el ejemplo seleccionado.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_conceptos"
  nivel: "basico"
  tags: ["teoria", "fundamentos"]

respuesta: "caso base"
tipo: "completar"
respuestas_validas:
  - "caso base"
  - "caso recursivo"
  - "condicion de parada"

enunciado: "Para que una función recursiva no se ejecute infinitamente y cause un error de desbordamiento de pila, es indispensable que contenga un ___ que permita detener la recursión."

explicacion: |
  El caso base es la condición que se cumple cuando la función deja de llamarse a sí misma, permitiendo que la pila de llamadas se resuelva.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_estructura"
  nivel: "basico"
  tags: ["logica"]

variables:
  escenario: uno_de([["f(n) = n * f(n-1) con f(0)=1", "factorial"], ["f(n) = f(n-1) + f(n-2) con f(0)=0, f(1)=1", "fibonacci"], ["f(n) = n + f(n-1) con f(0)=0", "suma_naturales"]])

respuesta: escenario[1]
tipo: "mc"
opciones_explicitas: ["factorial", "fibonacci", "suma_naturales", "potencia"]

enunciado: "Dada la siguiente definición recursiva: {escenario[0]}, ¿cuál es el nombre del algoritmo que se está implementando?"

explicacion: |
  El algoritmo descrito corresponde a {escenario[1]}.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_logica"
  nivel: "intermedio"
  tags: ["teoria"]

respuesta: falso
tipo: "vf"

enunciado: "¿Es posible que una función recursiva sea correcta si su caso recursivo no reduce el tamaño del problema hacia el caso base?"

explicacion: |
  Falso. Si el problema no se reduce (por ejemplo, si llamamos a f(n) con f(n) en lugar de f(n-1)), nunca se alcanzará el caso base, resultando en una recursión infinita.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_ejecucion"
  nivel: "intermedio"
  tags: ["pila", "stack"]

tipo: ordenar
opciones_explicitas: ["Llamada 1", "Llamada 2", "Llamada 3", "Retorno 3", "Retorno 2", "Retorno 1"]
respuesta_orden: ["Llamada 1", "Llamada 2", "Llamada 3", "Retorno 3", "Retorno 2", "Retorno 1"]

enunciado: "Ordena cronológicamente los eventos de una función que llama a sí misma tres veces (n=3, n=2, n=1) antes de empezar a devolver valores (unwinding):"

explicacion: |
  En la recursión, primero se apilan todas las llamadas en la pila (stack) hasta llegar al caso base, y luego se procesan los retornos en orden inverso a la entrada.
```

```
metadata:
  materia: "informatica"
  tema: "recursividad_calculo"
  nivel: "avanzado"
  tags: ["calculo", "algoritmos"]

variables:
  datos: [[5, 120], [4, 24], [3, 6]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si tenemos una función para calcular el factorial de n, donde f(n) = n * f(n-1) y f(0) = 1, ¿cuál es el resultado de ejecutar la función con el valor n = {datos[idx][0]}?"

explicacion: |
  El factorial de {datos[idx][0]} es {datos[idx][1]}.
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

