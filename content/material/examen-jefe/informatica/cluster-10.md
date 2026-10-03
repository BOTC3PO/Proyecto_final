# Examen jefe — [PENDIENTE #825]

> Logro #825. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **126 preguntas totales** en 5/5 secciones.

---

## Sección: patrones-y-buenas-practicas (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "basico"
  tags: ["conceptos", "patrones"]

respuesta: "solucion"
tipo: "completar"
respuestas_validas:
  - "solucion"
  - "soluciones"

enunciado: "Un patrón de diseño es una ________ reutilizable que sirve para resolver un problema común dentro de un contexto de diseño de software."

explicacion: |
  Los patrones de diseño no son fragmentos de código, sino descripciones de soluciones a problemas recurrentes en el desarrollo de software.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "basico"
  tags: ["clasificacion", "categorias"]

respuesta: "Creacionales"
tipo: "completar"

enunciado: "Si un programador utiliza el patrón 'Singleton' para asegurar que una clase tenga una única instancia, está utilizando un patrón de tipo: ___."

explicacion: |
  Los patrones se dividen en tres categorías principales según su propósito: Creacionales, Estructurales y de Comportamiento.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "intermedio"
  tags: ["solid", "buenas_practicas"]

respuesta: verdadero
tipo: "vf"

enunciado: "El principio de Responsabilidad Única (SRP) establece que una clase debe tener una, y solo una, razón para cambiar."

explicacion: |
  Correcto. El SRP busca que cada módulo o clase sea responsable de una única parte de la funcionalidad, facilitando el mantenimiento y la testabilidad.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "basico"
  tags: ["proceso", "desarrollo"]

respuesta_orden: ["Identificar el problema", "Analizar la solución existente", "Implementar el patrón", "Refactorizar el código"]
tipo: "ordenar"
opciones_explicitas: ["Identificar el problema", "Analizar la solución existente", "Implementar el patrón", "Refactorizar el código"]

enunciado: "Ordena los pasos lógicos para la aplicación correcta de un patrón de diseño en un sistema existente:"

explicacion: |
  Primero se debe entender el problema, luego evaluar si un patrón conocido aplica, se implementa y finalmente se refactoriza para asegurar la calidad.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practices"
  nivel: "basico"
  tags: ["reutilizacion", "eficiencia"]

respuesta: "reutilizar"
tipo: "mc"
opciones_explicitas: ["reutilizar", "copiar"]

enunciado: "El objetivo principal de aplicar buenas prácticas y patrones es poder ________ la lógica de solución en diferentes partes del sistema sin duplicar código innecesariamente."

explicacion: |
  La reutilización es un pilar de la ingeniería de software que permite aumentar la productividad y reducir la probabilidad de errores.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["creacionales", "singleton"]

variables:
  escenario: uno_de([["Gestión de conexión a base de datos", "DatabaseConnection"], ["Gestión de configuración global", "ConfigManager"], ["Gestión de sistema de logs", "LoggerInstance"]])

enunciado: "Se requiere implementar un patrón que garantice que una clase tenga una única instancia y proporcione un punto de acceso global a ella. En el caso de un {escenario[0]}, la clase sería {escenario[1]}."

opciones_explicitas: ["Singleton", "Factory", "Observer", "Strategy"]
respuesta: "Singleton"
tipo: "mc"

explicacion: |
  El patrón Singleton asegura que una clase tenga una única instancia durante toda la ejecución del programa, lo cual es ideal para recursos compartidos como conexiones a bases de datos o configuraciones.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["comportamiento", "observer"]

enunciado: "En el patrón Observer, un objeto llamado 'Subject' mantiene una lista de sus dependientes. Cuando el estado del Subject cambia, este debe notificar a sus ___ para que actualicen su estado."

respuestas_validas:
  - "observadores"
  - "observers"
  - "subscriptores"
respuesta: "observadores"
tipo: "completar"

explicacion: |
  El patrón Observer define una relación de uno a muchos, donde cuando un objeto cambia su estado, todos sus dependientes (observadores) son notificados automáticamente.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["clean_code", "refactoring"]

variables:
  caso: uno_de([["un método que calcula el IVA, aplica un descuento y luego imprime el total", "calcular_total_con_impuestos"], ["un método que valida datos, conecta a la red y procesa un archivo", "procesar_archivo_seguro"]])

enunciado: "Tienes un método llamado '{caso[0]}' que es demasiado largo y realiza múltiples tareas distintas. Para aplicar la técnica de 'Extract Method', deberías dividirlo en métodos más pequeños y específicos. ¿Cuál es el objetivo principal de esta práctica?"

opciones_explicitas: ["Aumentar la complejidad del código", "Mejorar la legibilidad y reutilización", "Hacer que el código sea más lento", "Eliminar la necesidad de comentarios"]
respuesta: "Mejorar la legibilidad y reutilización"
tipo: "mc"

explicacion: |
  La extracción de métodos permite que cada función tenga una única responsabilidad (Single Responsibility Principle), facilitando la lectura y permitiendo reutilizar fragmentos de lógica en otros lugares.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "intermedio"
  tags: ["solid", "srp"]

variables:
  clase_mala: uno_de([["Clase Usuario que guarda datos en BD y también envía emails", "Usuario"], ["Clase Factura que calcula totales y también genera un PDF", "Factura"]])

enunciado: "Si tenemos una clase llamada {clase_mala[0]} que realiza la lógica de negocio y además se encarga de la persistencia en base de datos y el envío de notificaciones, ¿está cumpliendo con el Principio de Responsabilidad Única (SRP)?"

opciones_explicitas: [verdadero, falso]
respuesta: falso
tipo: "vf"

explicacion: |
  El SRP dicta que una clase debe tener una, y solo una, razón para cambiar. Si una clase maneja lógica de negocio y también detalles de infraestructura (como BD o envío de emails), viola este principio.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "avanzado"
  tags: ["comportamiento", "command"]

enunciado: "Para implementar correctamente el patrón Command, se deben seguir estos pasos en orden para transformar una acción en un objeto ejecutable:"

opciones_explicitas: ["Definir el Command con el método execute()", "Crear el Receiver que contiene la lógica real", "El Invoker solicita la ejecución al Command", "El Cliente instancia el Command y lo vincula al Receiver"]

respuesta_orden: ["Crear el Receiver que contiene la lógica real", "Definir el Command con el método execute()", "El Cliente instancia el Command y lo vincula al Receiver", "El Invoker solicita la ejecución al Command"]

tipo: "ordenar"

explicacion: |
  El patrón Command encapsula una solicitud como un objeto, permitiendo parametrizar clientes, colar solicitudes o soportar operaciones que se pueden deshacer (undo).
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["creacionales", "singleton"]

enunciado: "El patrón Singleton se utiliza para asegurar que una clase tenga una única instancia y proporciona un punto de acceso global a ella. Sin embargo, una crítica común es que su uso excesivo puede ___."

opciones_explicitas: ["mejorar la modularidad", "crear un estado global difícil de testear", "aumentar la velocidad de ejecución", "eliminar la necesidad de clases"]

respuesta: "crear un estado global difícil de testear"
tipo: mc

explicacion: |
  El patrón Singleton es criticado frecuentemente porque introduce un estado global en la aplicación, lo que dificulta el aislamiento de componentes durante las pruebas unitarias (testing), ya que el estado de la instancia persiste entre diferentes tests.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["solid", "srp"]

variables:
  clase_nombre: uno_de(["GestorBaseDeDatos", "CalculadoraMatematica"])

enunciado: "De acuerdo al Principio de Responsabilidad Única (SRP), una clase como {clase_nombre} debe tener una única razón para cambiar. Si esta clase además de procesar datos también se encarga de la interfaz de usuario, se está violando este principio."

respuesta: falso
tipo: vf

explicacion: |
  El SRP establece que una clase debe tener una sola responsabilidad. Si una clase maneja lógica de negocio y también la presentación (UI), se vuelve rígida y difícil de mantener, violando el principio.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "avanzado"
  tags: ["inversion_de_control", "di"]

enunciado: "En el patrón de Inyección de Dependencias (DI), el comportamiento correcto es que ___"

opciones_explicitas: ["el objeto crea sus propias dependencias internamente", "el objeto recibe sus dependencias desde el exterior"]

respuesta: "el objeto recibe sus dependencias desde el exterior"
tipo: mc

explicacion: |
  La Inyección de Dependencias es una forma de Inversión de Control (IoC) donde las dependencias de un objeto se le pasan (inyectan) desde el exterior (por constructor, setter o interfaz), en lugar de que el objeto las instancie por sí mismo.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["creacionales", "factory"]

enunciado: "Para implementar correctamente un patrón Factory Method y asegurar la extensibilidad, se deben seguir estos pasos en orden:"

opciones_explicitas: ["Definir la interfaz del producto", "Crear las implementaciones concretas del producto", "Implementar la clase creadora con el método factory"]

respuesta_orden: ["Definir la interfaz del producto", "Crear las implementaciones concretas del producto", "Implementar la clase creadora con el método factory"]
tipo: ordenar

explicacion: |
  Primero se define qué es lo que se va a crear (la interfaz del producto), luego se crean las versiones específicas (productos concretos) y finalmente se crea la lógica que decide qué producto instanciar (el método factory en la clase creadora).
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["calidad_codigo", "acoplamiento"]

enunciado: "En un diseño de software de alta calidad, buscamos que el acoplamiento entre módulos sea ___ y que la cohesión dentro de un módulo sea ___."

opciones_explicitas: ["alto y baja", "bajo y alta"]

respuesta: "bajo y alta"
tipo: mc

explicacion: |
  El acoplamiento bajo significa que los módulos son independientes y cambian poco entre sí. La cohesión alta significa que los elementos de un módulo están estrechamente relacionados y trabajan para un único objetivo.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "intermedio"
  tags: ["patrones_de_diseno", "conceptos_basicos"]

respuesta: "algoritmo"
tipo: completar
respuestas_validas:
  - "algoritmo"

enunciado: "Mientras que un patrón de diseño es una solución general a un problema recurrente de diseño de software, un ___ es una secuencia de pasos finitos y precisos para resolver un problema computacional específico."

explicacion: |
  Un patrón de diseño es una plantilla de alto nivel para resolver problemas de estructura, mientras que un algoritmo es una receta paso a paso para realizar un cálculo o tarea.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["creacionales", "singleton", "factory"]

respuesta: "Singleton"
tipo: mc
opciones_explicitas: ["Singleton", "Factory"]

enunciado: "Si el objetivo principal es garantizar que una clase tenga una única instancia en toda la aplicación, estamos ante un patrón ___."

explicacion: |
  El patrón Singleton asegura una instancia única, mientras que el patrón Factory se encarga de delegar la responsabilidad de la creación de objetos a una clase especializada.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "avanzado"
  tags: ["limpieza_de_codigo", "principios"]

respuesta: falso
tipo: vf

enunciado: "En el diseño de software orientado a objetos, una buena práctica consiste en buscar un diseño con alto acoplamiento y baja cohesión."

explicacion: |
  Es exactamente lo contrario: se busca un **bajo acoplamiento** (que los módulos sean independientes) y una **alta cohesión** (que cada módulo haga una sola cosa y la haga bien).
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["procesos", "desarrollo"]

respuesta_orden: ["Identificar el problema", "Elegir el patrón adecuado", "Implementar la solución", "Refactorizar si es necesario"]
tipo: ordenar
opciones_explicitas: ["Identificar el problema", "Elegir el patrón adecuado", "Implementar la solución", "Refactorizar si es necesario"]

enunciado: "Ordene los pasos lógicos para aplicar correctamente un patrón de diseño en un proyecto de software:"

explicacion: |
  El proceso comienza con la comprensión del problema, seguido de la selección del patrón, la codificación y finalmente la revisión/refactorización para asegurar la calidad.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "avanzado"
  tags: ["oop", "herencia", "interfaces"]

respuesta: "interfaz"
tipo: mc
opciones_explicitas: ["interfaz", "clase_abstracta"]

enunciado: "Si necesitamos definir un contrato que solo especifique comportamientos (métodos sin implementación) sin poseer estado o lógica compartida, lo más adecuado es usar una ___."

explicacion: |
  Las interfaces definen "qué" puede hacer un objeto (contrato puro), mientras que las clases abstractas pueden definir "cómo" se hace algo (compartiendo código y estado) pero impidiendo la instanciación directa.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "intermedio"
  tags: ["diseño", "creacionales"]

variables:
  escenario: uno_de([["Se requiere que una clase de conexión a base de datos solo tenga una instancia única en toda la aplicación.", "Singleton"], ["Se requiere que un objeto pueda tener múltiples representaciones (como un checkbox o un botón) según el contexto.", "Flyweight"], ["Se requiere que un objeto delegue la creación de otros objetos a una subclase.", "Factory Method"]])

tipo: mc
opciones_explicitas: ["Singleton", "Flyweight", "Factory Method", "Observer"]

enunciado: "Un desarrollador debe resolver el siguiente escenario: {escenario[0]} ¿Qué patrón de diseño debe aplicar?"

respuesta: escenario[1]

explicacion: |
  El patrón Singleton garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["clean_code", "refactorizacion"]

variables:
  caso: uno_de([["Una función tiene 150 líneas de código y realiza tres tareas distintas.", "Dividir la función en funciones más pequeñas."], ["Una variable se llama 'x' y su valor cambia constantemente sin contexto claro.", "Renombrar la variable con un nombre descriptivo."], ["Un bloque de código se repite exactamente igual en tres archivos diferentes.", "Extraer el código repetido a una función o clase común."]])

tipo: completar
respuestas_validas:
  - "Dividir la función en funciones más pequeñas."
  - "Renombrar la variable con un nombre descriptivo."
  - "Extraer el código repetido a una función o clase común."

enunciado: "Para mejorar la mantenibilidad del software, se detecta que: {caso[0]} La acción recomendada es: ___"

respuesta: caso[1]

explicacion: |
  La legibilidad y la reutilización son pilares de las buenas prácticas. Cada caso presentado requiere una acción de refactorización específica para cumplir con principios como SOLID o Clean Code.
```

```
metadata:
  materia: "informatica"
  tema: "patrones_de_diseno"
  nivel: "avanzado"
  tags: ["comportamiento", "eventos"]

variables:
  escenario: uno_de([["Un sistema de clima donde varios sensores notifican cambios a una pantalla y a una base de datos simultáneamente.", "Observer"], ["Un sistema donde un objeto complejo se construye paso a paso mediante varios métodos.", "Builder"], ["Un sistema donde se envían mensajes de un emisor a múltiples receptores sin que estos se conozcan.", "PubSub"]])

tipo: vf
respuesta: verdadero

enunciado: "En el escenario: {escenario[0]}, el patrón de diseño que permite que un objeto (sujeto) notifique automáticamente a otros objetos (observadores) sobre cambios en su estado es el patrón {escenario[1]}."

explicacion: |
  El patrón Observer define una relación de uno a muchos, de modo que cuando el objeto cambia de estado, todos sus dependientes son notificados.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "intermedio"
  tags: ["solid", "arquitectura"]

tipo: mc
opciones_explicitas: ["Responsabilidad Única", "Acoplamiento Fuerte", "Cohesión Baja", "Incapacidad de Testeo"]

enunciado: "Analizando el siguiente caso: Una clase 'Usuario' que gestiona los datos del perfil Y también se encarga de guardar el archivo en el disco. La clase está violando el principio de: ___"

respuesta: "Responsabilidad Única"

explicacion: |
  El Principio de Responsabilidad Única (SRP) establece que una clase debe tener una única razón para cambiar. Si una clase gestiona datos y además la persistencia, tiene dos responsabilidades.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "basico"
  tags: ["calidad", "procesos"]

tipo: ordenar
opciones_explicitas: ["Reportar error", "Asignar a desarrollador", "Corregir error", "Verificar solución", "Cerrar ticket"]
respuesta_orden: ["Reportar error", "Asignar a desarrollador", "Corregir error", "Verificar solución", "Cerrar ticket"]

enunciado: "Para asegurar la calidad de software, el proceso estándar de gestión de un defecto (bug) debe seguir este orden lógico: ___"

explicacion: |
  Un flujo de trabajo ordenado permite la trazabilidad del error desde su detección hasta su validación final por parte de QA.
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

## Sección: sistema-de-archivos (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["conceptos", "so"]

respuesta: "software"
tipo: completar
respuestas_validas:
  - "software"
  - "sistema"

enunciado: "El sistema de archivos es el ___ que permite al sistema operativo gestionar la organización, almacenamiento y recuperación de datos en un dispositivo de almacenamiento."

explicacion: |
  El sistema de archivos es una parte del software del sistema operativo que controla cómo se almacenan y se recuperan los datos en un disco o unidad de almacenamiento.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["jerarquia", "directorios"]

respuesta: "Estructura jerárquica"
tipo: mc
opciones_explicitas: ["Estructura lineal", "Estructura jerárquica", "Estructura aleatoria", "Estructura plana"]

enunciado: "¿Qué tipo de estructura de archivos utiliza la mayoría de los sistemas operativos modernos para organizar la información?"

explicacion: |
  Una estructura jerárquica permite organizar archivos en directorios y subdirectorios, creando una "rama" o árbol de información.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["metadatos", "atributos"]

respuesta: verdadero
tipo: vf

enunciado: "¿Los metadatos de un archivo incluyen información como la fecha de creación, el tamaño y los permisos de acceso?"

explicacion: |
  Correcto. Los metadatos son 'datos sobre los datos' que describen las propiedades del archivo pero no su contenido real.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["componentes", "estructura"]

respuesta_orden: ["Extensión", "Nombre", "Ruta", "Metadatos"]
tipo: ordenar

opciones_explicitas: ["Extensión", "Nombre", "Ruta", "Metadatos"]

enunciado: "Ordena los elementos que componen la identificación completa y la ubicación de un archivo en un sistema operativo, desde lo más específico a lo más general (considerando la ruta completa):"

explicacion: |
  La ruta indica la ubicación, el nombre identifica el archivo, la extensión indica el formato y los metadatos describen sus propiedades.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["sectores", "clúster"]

respuesta: "Clúster"
tipo: mc
opciones_explicitas: ["Sector", "Clúster", "Pista", "Cilindro"]

enunciado: "En un sistema de archivos, la unidad lógica mínima de asignación de espacio en el disco, que puede estar compuesta por varios sectores físicos, se denomina ___."

explicacion: |
  Un clúster es la unidad de asignación de espacio que utiliza el sistema de archivos para gestionar bloques de datos en el disco.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["linux", "unix", "inode"]

respuesta: "metadatos"
tipo: completar
respuestas_validas:
  - "metadatos"
  - "metadato"

enunciado: "En sistemas de archivos tipo Unix/Linux, la estructura que contiene la información sobre el tamaño, permisos y ubicación de los bloques de datos de un archivo, pero no su nombre, se denomina ___."

explicacion: |
  El inodo (index node) es una estructura de datos que contiene la información descriptiva del archivo (metadatos). El nombre del archivo se almacena en el directorio, no en el inodo.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["almacenamiento", "fragmentacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["archivo_A", "40KB", "en bloques no adyacentes, ya que el espacio libre está disperso", "fragmentado"], ["archivo_B", "12KB", "en un único bloque de espacio libre contiguo", "contiguo"]]

respuesta: datos[escenario_idx][3]
tipo: mc
opciones_explicitas: ["fragmentado", "contiguo"]

enunciado: "Un archivo de {datos[escenario_idx][0]} tiene un tamaño de {datos[escenario_idx][1]}. El sistema de archivos lo guarda {datos[escenario_idx][2]}. Por lo tanto, el archivo se encuentra ___."

explicacion: |
  Cuando un archivo no se puede almacenar en bloques contiguos y debe repartirse por diferentes partes del disco, se produce la fragmentación.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["gestion", "orden"]

respuesta_orden: ["Crear", "Escribir", "Cerrar", "Eliminar"]
tipo: ordenar
opciones_explicitas: ["Crear", "Escribir", "Cerrar", "Eliminar"]

enunciado: "Ordena los pasos lógicos que sigue el sistema operativo para gestionar un archivo desde que se inicia su uso hasta que se libera el espacio en disco:"

explicacion: |
  El flujo estándar implica la asignación de inodos/bloques (Crear), la escritura de datos (Escribir), el cierre del descriptor para asegurar la integridad (Cerrar) y la liberación de recursos (Eliminar).
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["calculo", "capacidad"]

variables:
  tamaño_archivo: 1024
  tamaño_bloque: 4096
  bloques_necesarios: ceil(1024 / 4096)

respuesta: 1
tipo: completar
tolerancia_abs: 0

enunciado: "Si un sistema de archivos utiliza bloques de {tamaño_bloque} bytes y queremos guardar un archivo de {tamaño_archivo} bytes, ¿cuántos bloques físicos se deben asignar como mínimo para este archivo?"

pasos:
  - "Dividir el tamaño del archivo por el tamaño del bloque."
  - "Redondear hacia arriba (ceil) ya que un bloque no puede usarse parcialmente para otro archivo."

explicacion: |
  Aunque el archivo sea pequeño, el sistema operativo asigna bloques completos. En este caso, 1024/4096 = 0.25, lo que requiere 1 bloque completo.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["estructura", "jerarquia"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema de archivos jerárquico, un directorio es una estructura especial que contiene una lista de nombres de archivos y sus correspondientes punteros a inodos o direcciones de inicio. ¿Es esto verdadero o falso?"

explicacion: |
  Es verdadero. Un directorio actúa como un mapa que vincula un nombre legible para el usuario con la ubicación física o lógica (inodo) de los datos en el disco.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["conceptos", "directorios"]

respuesta: "una lista de archivos"
tipo: completar
respuestas_validas:
  - "una lista de archivos"
  - "una estructura que contiene archivos"

enunciado: "En un sistema de archivos, un directorio es ___ que permite organizar y localizar archivos en el disco."

explicacion: |
  Un directorio no es un archivo en sí mismo que contiene datos de usuario, sino una estructura de datos que contiene nombres de archivos y sus direcciones físicas en el disco.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["conceptos", "nombres_archivos"]

respuesta: falso
tipo: vf

enunciado: "El nombre de un archivo determina directamente la posición física de los sectores en el disco duro donde se almacenan sus datos."

explicacion: |
  Falso. El nombre es una etiqueta lógica. El sistema de archivos utiliza una tabla (como FAT o MFT) para traducir ese nombre a direcciones lógicas y físicas en el hardware.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["borrado", "espacio_disco"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [[ "el sistema marca el espacio como disponible", "el sistema sobreescribe los datos inmediatamente"], ["solo se borra el puntero en el directorio", "se limpian todos los bits del sector"]]

respuesta: escenarios[caso_idx][0]
tipo: mc
opciones_explicitas: ["el sistema marca el espacio como disponible", "el sistema sobreescribe los datos inmediatamente", "solo se borra el puntero en el directorio", "se limpian todos los bits del sector"]

enunciado: "Cuando un usuario elimina un archivo de gran tamaño en un sistema de archivos estándar, ¿qué ocurre realmente con los datos y el espacio en disco?"

explicacion: |
  En la mayoría de los sistemas de archivos modernos, borrar un archivo no borra los datos reales del disco, sino que marca los clusters/sectores como "libres" en la tabla de asignación para que el SO pueda escribir nuevos datos allí en el futuro.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["proceso", "creacion"]

respuesta_orden: ["Solicitud de creación", "Asignación de metadatos", "Asignación de bloques de datos", "Actualización del directorio"]
tipo: ordenar
opciones_explicitas: ["Solicitud de creación", "Asignación de metadatos", "Asignación de bloques de datos", "Actualización del directorio"]

enunciado: "Ordena los pasos lógicos que realiza el sistema operativo desde que una aplicación solicita crear un archivo hasta que este es visible en el explorador de archivos."

pasos:
  - "El usuario/app pide crear un archivo."
  - "El SO reserva espacio en la tabla de archivos (nombre, permisos, fecha)."
  - "El SO busca sectores libres en el disco para el contenido."
  - "El SO vincula el nombre con la dirección de los sectores en el directorio."

explicacion: |
  Primero se procesa la intención, luego se preparan los metadatos, se reserva el espacio físico y finalmente se actualiza la estructura de navegación (directorio) para que el usuario lo vea.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["nombres", "directorios"]

respuesta: verdadero
tipo: vf

enunciado: "En un mismo sistema de archivos, es posible tener dos archivos con el mismo nombre siempre y cuando se encuentren en directorios diferentes."

explicacion: |
  Verdadero. El nombre es único dentro de un directorio específico, pero cada directorio es un contenedor independiente. Por lo tanto, 'foto.jpg' puede existir en 'Carpeta_A' y 'Carpeta_B' sin conflicto.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["conceptos_basicos", "organizacion"]

respuesta: "directorio"
tipo: completar
respuestas_validas:
  - "directorio"
  - "carpeta"

enunciado: "Mientras que un archivo es una colección de datos almacenados bajo un nombre, un ___ es una estructura que permite organizar y agrupar dichos archivos."

explicacion: |
  Un archivo contiene la información propiamente dicha, mientras que el directorio (o carpeta) actúa como un contenedor lógico para organizar los archivos en una jerarquía.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["formatos", "comparacion"]

respuesta: "FAT32"
tipo: mc
opciones_explicitas: ["FAT32", "NTFS", "ext4"]

enunciado: "Si comparamos un sistema de archivos moderno como NTFS con uno antiguo como FAT32, ¿cuál es el sistema de archivos que tiene una limitación de 4GB en el tamaño de archivos individuales?"

explicacion: |
  El sistema FAT32 tiene una limitación técnica en el tamaño de los clusters que impide almacenar archivos individuales que superen los 4GB.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["metadatos", "atributos"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que los metadatos de un archivo (como fecha de creación o tamaño) forman parte del contenido de datos del archivo mismo?"

explicacion: |
  Falso. Los metadatos son información sobre el archivo que es gestionada por el sistema de archivos (como en la tabla de asignación de archivos o el MFT), pero no son parte del contenido de datos que el usuario escribe.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["operaciones", "secuencia"]

respuesta_orden: ["Solicitud de espacio", "Asignación de metadatos", "Escritura de datos", "Actualización de tabla de archivos"]
tipo: ordenar
opciones_explicitas: ["Solicitud de espacio", "Asignación de metadatos", "Escritura de datos", "Actualización de tabla de archivos"]

enunciado: "Ordena los pasos lógicos que sigue el sistema operativo desde que una aplicación solicita guardar un nuevo archivo hasta que este queda disponible:"

explicacion: |
  Primero el SO busca bloques libres (espacio), asigna la entrada en la estructura de metadatos, escribe la información y finalmente marca el archivo como disponible en la tabla del sistema de archivos.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "avanzado"
  tags: ["rendimiento", "fragmentacion"]

respuesta: "contiguo"
tipo: mc
opciones_explicitas: ["fragmentado", "contiguo"]

enunciado: "En un disco duro, si un archivo se almacena en bloques de datos que están físicamente separados en diferentes sectores del plato, el archivo se encuentra en un estado fragmentado. Si en cambio los bloques estuvieran en sectores adyacentes, se diría que el archivo está..."

explicacion: |
  La fragmentación ocurre cuando el sistema de archivos no puede asignar bloques contiguos, lo que obliga al cabezal del disco a moverse más, reduciendo el rendimiento.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["directorios", "jerarquia"]

variables:
  datos: [["Documentos/Proyectos/final.pdf", "final.pdf"], ["Fotos/Vacaciones/playa.jpg", "playa.jpg"], ["Musica/Rock/cancion.mp3", "cancion.mp3"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - datos[idx][1]

enunciado: "Si tenemos la ruta absoluta {datos[idx][0]}, el nombre del archivo es ___."

explicacion: |
  En un sistema de archivos jerárquico, la ruta indica la posición desde la raíz. El último elemento después de la última barra es el nombre del archivo.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["metadatos", "atributos"]

variables:
  datos: [["config.sys", "solo_lectura"], ["data.db", "oculto"], ["script.sh", "ejecutable"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["solo_lectura", "oculto", "ejecutable"]

enunciado: "Un archivo con el atributo {datos[idx][0]} tiene la propiedad de: ___"

explicacion: |
  Los metadatos o atributos definen permisos y propiedades del archivo (lectura, oculto, ejecución, etc.).
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "avanzado"
  tags: ["fragmentacion", "rendimiento"]

variables:
  datos: ["fragmentado", "contiguo"]
  idx: uno_de([0,1])

respuestas_validas:
  - datos[idx]
respuesta: datos[idx]
tipo: completar
enunciado: "Si un archivo se almacena en sectores no contiguos debido a que el espacio libre está disperso, el disco está ___."

explicacion: |
  La fragmentación ocurre cuando los archivos no se almacenan en bloques contiguos, lo que puede afectar el rendimiento de lectura.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "intermedio"
  tags: ["flujo_archivo", "operaciones"]

respuesta_orden: ["Crear entrada en tabla", "Asignar bloques de datos", "Actualizar metadatos", "Actualizar tabla de directorios"]
tipo: ordenar
opciones_explicitas: ["Crear entrada en tabla", "Asignar bloques de datos", "Actualizar metadatos", "Actualizar tabla de directorios"]

enunciado: "Ordena los pasos lógicos que realiza el sistema de archivos al guardar un archivo nuevo en el disco:"

explicacion: |
  El SO primero reserva espacio en la estructura de control, asigna los bloques físicos, marca los metadatos y finalmente lo hace visible en el directorio.
```

```
metadata:
  materia: "informatica"
  tema: "sistema_de_archivos"
  nivel: "basico"
  tags: ["capacidad", "unidades"]

variables:
  datos: [[1024, "1 KB"], [1048576, "1 MB"], [1073741824, "1 GB"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["1 KB", "1 MB", "1 GB"]

enunciado: "Si el sistema reporta un tamaño de {datos[idx][0]} bytes, esto equivale a: ___"

explicacion: |
  En informática, las unidades suelen basarse en potencias de 2 (binarias): 1024 bytes = 1 KB, 1024^2 = 1 MB, etc.
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
respuestas_validas:
  - "deuda_tecnica"

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
  escenarios: [["corregir un error que causa un cierre inesperado", "correctivo"], ["añadir una nueva funcionalidad solicitada por el cliente", "evolutivo"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["correctivo", "adaptativo", "evolutivo", "preventivo"]

enunciado: "Se debe realizar un mantenimiento tipo ___ cuando el objetivo es {escenarios[escenario_idx][0]}."

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

respuesta_orden: ["Detección del problema", "Análisis de la causa", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]
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
  datos: [["Cambiar la estructura interna del código sin alterar su comportamiento externo", "refactorizar"], ["Añadir un nuevo módulo de seguridad al sistema", "extender"]]

respuesta: datos[valor_refactor][1]
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

respuesta: verdadero
tipo: vf
enunciado: "Si un equipo de desarrollo decide no refactorizar un módulo complejo para cumplir con una fecha de entrega, está acumulando deuda técnica. Esta acción, si no se paga pronto, aumenta el costo de mantenimiento futuro. ¿Es el refactorizado una forma de mantenimiento preventivo?"

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

tipo: ordenar
opciones_explicitas: ["Detectar error", "Corregir error", "Optimizar rendimiento", "Implementar nueva función", "Documentar sistema"]
respuesta_orden: ["Detectar error", "Corregir error", "Optimizar rendimiento", "Implementar nueva función", "Documentar sistema"]

enunciado: "Ordena las siguientes etapas típicas del ciclo de mantenimiento de un sistema de software, desde la detección de un problema hasta la documentación final."

explicacion: |
  El mantenimiento correctivo (detectar y corregir errores) suele preceder a las mejoras de rendimiento y a las nuevas funcionalidades; documentar los cambios es siempre el último paso.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "intermedio"
  tags: ["mantenimiento", "tipos"]

respuesta: "perfectivo"
tipo: completar

enunciado: "Si el objetivo es mejorar la velocidad de una consulta SQL que tarda 10 segundos, estamos realizando un mantenimiento de tipo ___."

pasos:
  - "Identificar el cuello-de-bote en la base de datos."
  - "Aplicar índices o reescribir la consulta."

opciones_explicitas: ["correctivo", "evolutivo", "adaptativo", "perfectivo"]
respuestas_validas:
  - "perfectivo"

explicacion: |
  El mantenimiento perfectivo se encarga de mejorar el rendimiento o la eficiencia de un software que ya funciona correctamente.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "avanzado"
  tags: ["deuda_tecnica", "costos"]

tipo: completar

enunciado: "Un equipo decide ignorar las pruebas unitarias para lanzar una versión hoy. Esto genera una deuda técnica que se traduce en ___."

respuestas_validas:
  - "intereses"

explicacion: |
  La deuda técnica funciona como un préstamo financiero: el 'principal' es el tiempo ahorrado hoy, y los 'intereses' es el tiempo extra que se perderá mañana arreglando errores o lidiando con código complejo.
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
  escenario: uno_de([["reparar_bug", "reparar un error crítico", "reparar un error crítico"], ["agregar_feature", "implementar una nueva funcionalidad", "implementar una nueva funcionalidad"], ["refactorizar", "refactorizar un módulo heredado", "refactorizar un módulo heredado"]])
  tipo_accion: escenario[0]
  descripcion_accion: escenario[1]
  respuesta_correcta: escenario[2]

tipo: mc
opciones_explicitas: ["reparar un error crítico", "implementar una nueva funcionalidad", "refactorizar un módulo heredado"]
respuesta: respuesta_correcta

enunciado: "Cuando la deuda técnica es muy alta, el tiempo dedicado a {descripcion_accion} suele aumentar drásticamente debido a la complejidad del código existente."

explicacion: |
  La deuda técnica actúa como un interés compuesto: cuanta más deuda se acumula, más tiempo y esfuerzo requiere cada nueva tarea (ya sea corregir errores o añadir funciones) debido a la fragilidad del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "mantenimiento_y_deuda_tecnica"
  nivel: "basico"
  tags: ["conceptos", "gestion_de_proyectos"]

respuesta: falso
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
respuestas_validas:
  - "correctivo"
  - "adaptativo"
  - "perfectivo"
  - "preventivo"

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

respuesta_orden: ["Implementación rápida", "Acumulación de deuda", "Aumento de complejidad", "Refactorización necesaria"]
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

respuesta: "alto"
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
respuestas_validas:
  - "evolución"
  - "evolucion"

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
  datos: [["decidir tomar un atajo en el diseño para cumplir con una fecha de entrega inmediata", "Aumento de la velocidad de entrega inicial"], ["ignorar las pruebas unitarias para acelerar el despliegue", "Aumento de la velocidad de entrega inicial"]]
  escenario_idx: uno_de([0, 1])

respuesta: datos[escenario_idx][1]
tipo: "mc"
opciones_explicitas: ["Aumento de la velocidad de entrega inicial", "Reducción del costo de mantenimiento", "Mejora de la legibilidad del código", "Reducción de la complejidad ciclomática"]

enunciado: "En el escenario de {datos[escenario_idx][0]}, la principal consecuencia a largo plazo es:"

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

tipo: ordenar

opciones_explicitas: ["Identificar deuda técnica", "Escribir pruebas unitarias", "Ejecutar refactorización", "Verificar integridad"]

respuesta_orden: ["Identificar deuda técnica", "Escribir pruebas unitarias", "Ejecutar refactorización", "Verificar integridad"]

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
  escenario: uno_de([["El equipo decide ignorar la implementación de pruebas unitarias para cumplir con la fecha de entrega.", "deuda_tecnica"], ["El equipo decide reescribir un módulo complejo para mejorar su legibilidad sin cambiar su comportamiento.", "refactorizacion"], ["El equipo decide parchar un error crítico con un código temporal que no sigue los estándares.", "deuda_tecnica"]])

enunciado: "En el escenario descrito: '{escenario[0]}', la acción realizada se clasifica como: ___"

respuestas_validas:
  - "deuda_tecnica"
  - "refactorizacion"
respuesta: escenario[1]
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
  caso: uno_de([["Corregir un error que causa que la aplicación se cierre inesperadamente.", "correctivo"], ["Añadir una nueva funcionalidad de exportación a PDF que el cliente solicitó.", "evolutivo"], ["Optimizar el uso de memoria de una función existente para que sea más rápida.", "perfectivo"]])

enunciado: "Si el objetivo es '{caso[0]}', estamos realizando un mantenimiento de tipo: ___"

respuestas_validas:
  - "correctivo"
  - "evolutivo"
  - "perfectivo"
respuesta: caso[1]
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

enunciado: "A medida que la deuda técnica en un proyecto de software aumenta, el costo de implementar nuevos cambios tiende a ___."

opciones_explicitas: ["Aumentar", "Disminuir"]
respuesta: "Aumentar"
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
  orden: ["Detección del problema", "Análisis de la causa raíz", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]

enunciado: "Ordene los pasos típicos de un proceso de mantenimiento correctivo, desde el inicio hasta la verificación final."

opciones_explicitas: ["Detección del problema", "Análisis de la causa raíz", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]
respuesta_orden: ["Detección del problema", "Análisis de la causa raíz", "Diseño de la solución", "Implementación del cambio", "Pruebas de regresión"]
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

enunciado: "Si un software tiene un alto nivel de deuda técnica, es ___ que su código sea fácil de mantener a largo plazo."

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: completar
explicacion: |
  La mantenibilidad es la facilidad con la que un sistema puede ser modificado. Una alta deuda técnica degrada la calidad del código, haciendo que la mantenibilidad sea baja.
```

## Sección: permisos-y-usuarios (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["seguridad", "conceptos"]

respuesta: "permisos"
tipo: completar
respuestas_validas:
  - "permisos"

enunciado: "Las reglas que determinan qué acciones puede realizar un usuario sobre un recurso se conocen como ___."

explicacion: |
  Los permisos definen la capacidad de lectura, escritura o ejecución sobre un objeto del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["unix", "linux"]

variables:
  opciones_validas: ["lectura", "escritura", "ejecución"]

respuesta: "ejecución"
tipo: completar

enunciado: "En un sistema de archivos estándar, además de leer y escribir, un archivo puede tener permiso de ___."

explicacion: |
  El permiso de ejecución permite que un archivo sea tratado como un programa o script.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["usuarios", "seguridad"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema operativo, el usuario 'root' (o superusuario) tiene la capacidad de ignorar la mayoría de las restricciones de permisos del sistema."

explicacion: |
  El superusuario tiene privilegios totales sobre el núcleo y los archivos del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["seguridad", "jerarquia"]

tipo: ordenar

opciones_explicitas: ["Usuario común", "Grupo", "Propietario"]
respuesta_orden: ["Usuario común", "Grupo", "Propietario"]

enunciado: "Ordena los niveles de acceso de menor a mayor jerarquía de privilegios sobre un archivo específico:"

explicacion: |
  El orden jerárquico estándar es: el usuario (dueño), el grupo al que pertenece y, finalmente, los otros usuarios.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["acl", "seguridad"]

respuesta: "permisos estándar"
tipo: mc
opciones_explicitas: ["permisos estándar", "permisos de red", "permisos de hardware", "permisos de memoria"]

enunciado: "Las ACL (Access Control Lists) se utilizan para definir ___ más granulares que los permisos tradicionales de un archivo."

explicacion: |
  Las ACL permiten asignar permisos específicos a múltiples usuarios y grupos sin depender solo del modelo propietario/grupo/otros.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["linux", "permisos", "chmod"]

enunciado: "Un administrador desea que un archivo llamado 'datos.txt' sea legible por el dueño, pero que nadie más pueda leerlo, escribirlo ni ejecutarlo. ¿Cuál es la representación numérica de los permisos para este archivo?"

opciones_explicitas: ["644", "400", "755", "666"]
respuesta: "400"
tipo: "mc"

explicacion: |
  En sistemas Unix/Linux, los permisos se calculan sumando valores: Lectura (4), Escritura (2) y Ejecución (1).
  Para el dueño (Read): 4 + 0 + 0 = 4.
  Para el grupo (None): 0.
  Para otros (None): 0.
  Resultado: 400.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["usuarios", "ownership"]

enunciado: "Si un usuario intenta modificar un archivo que pertenece al 'root' y el usuario actual no tiene permisos de escritura, la operación será denegada."

respuesta: verdadero
tipo: "vf"

explicacion: |
  El sistema operativo verifica primero si el usuario es el dueño del archivo. Si no lo es, comprueba los permisos del grupo y, finalmente, los permisos para 'otros'. Si el permiso de escritura no está concedido en la categoría correspondiente, el acceso se deniega.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["chmod", "simbolico"]

variables:
  comandos: [["chmod u+x", "u+x"], ["chmod g-w", "g-w"], ["chmod o+r", "o+r"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si aplicamos el comando 'chmod {comandos[idx][1]}' a un archivo, estamos modificando los permisos de forma simbólica. El código de modificación aplicado es ___."

pasos:
  - "Identificar el usuario (u=user, g=group, o=others)"
  - "Identificar la acción (+ para añadir, - para quitar)"
  - "Identificar el permiso (r, w, x)"

respuesta: comandos[idx][1]
tipo: "completar"
respuestas_validas:
  - "u+x"
  - "g-w"
  - "o+r"

explicacion: |
  El modo simbólico permite modificar permisos específicos sin redefinir todos los valores.
  En el caso de {comandos[idx][0]}, estamos operando directamente sobre la categoría seleccionada.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["secuencia", "ejecucion"]

enunciado: "Para que un script de Bash sea ejecutable por un usuario después de haberlo creado, se deben seguir estos pasos en orden:"

opciones_explicitas: ["Crear el archivo con un editor", "Asignar permisos de ejecución con chmod", "Ejecutar el script con ./script.sh"]
respuesta_orden: ["Crear el archivo con un editor", "Asignar permisos de ejecución con chmod", "Ejecutar el script con ./script.sh"]
tipo: ordenar

explicacion: |
  Primero el archivo debe existir (creación), luego el sistema operativo debe permitir su ejecución (permisos) y finalmente se puede lanzar el proceso (ejecución).
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["binario", "permisos"]

enunciado: "Un archivo tiene permisos de lectura y escritura para el dueño, pero ningún permiso para el grupo ni para otros. ¿Cuál es su valor decimal?"

respuesta: "6"
tipo: "completar"
respuestas_validas:
  - "6"

explicacion: |
  Lectura (4) + Escritura (2) + Ejecución (0) = 6.
  En binario: 110.
  Si el valor fuera 7, sería 111 (rwx).
  Si el valor fuera 5, sería 101 (r-x).
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["linux", "permisos", "directorios"]

tipo: mc
opciones_explicitas: ["Permitir leer el contenido de los archivos dentro del directorio", "Permitir listar los nombres de archivos dentro del directorio", "Permitir entrar/acceder al directorio (hacer cd)", "Permitir ejecutar archivos binarios dentro del directorio"]

enunciado: "En sistemas tipo Unix, si un usuario tiene permisos de lectura (r) pero NO tiene permisos de ejecución (x) en un directorio, ¿qué acción NO podrá realizar?"

respuesta: "Permitir entrar/acceder al directorio (hacer cd)"

explicacion: |
  El permiso de ejecución (x) en un directorio es el que permite al usuario 'entrar' en él (hacer `cd`) y acceder a los metadatos de los archivos que contiene. Sin `x`, no puedes acceder a los archivos aunque sepas sus nombres.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["linux", "usuarios", "grupos"]

variables:
  escenario: uno_de([["archivo_A", "usuario_1", "grupo_admin"], ["archivo_B", "usuario_2", "grupo_staff"], ["archivo_C", "usuario_3", "grupo_dev"]])

tipo: vf
respuesta: falso

enunciado: "Si el archivo {escenario[0]} tiene como dueño a {escenario[1]} y pertenece al grupo {escenario[2]}, cualquier usuario que pertenezca al grupo {escenario[2]} tiene automáticamente todos los permisos de lectura, escritura y ejecución sobre el archivo, independientemente de los permisos asignados al grupo."

explicacion: |
  Falso. El hecho de pertenecer al grupo otorga los permisos definidos para el 'grupo' en la máscara de permisos (rwx), pero estos pueden estar limitados (por ejemplo, solo lectura).
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["seguridad", "linux", "lógica"]

tipo: mc
opciones_explicitas: ["Usuario -> Grupo -> Otros", "Otros -> Grupo -> Usuario", "Usuario -> Otros -> Grupo", "El que tenga el permiso más restrictivo gana"]

enunciado: "Cuando un proceso intenta acceder a un archivo, ¿en qué orden evalúa el sistema operativo los permisos de un usuario?"

respuesta: "Usuario -> Grupo -> Otros"

explicacion: |
  El sistema operativo busca la coincidencia más específica primero. Si el usuario es el dueño, se aplican sus permisos y se deja de evaluar. Si no, se mira si pertenece al grupo del archivo, y si no, se aplican los permisos de 'otros'.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["seguridad", "root", "sudo"]

tipo: completar
respuestas_validas:
  - "root"
  - "superuser"
  - "administrador"

enunciado: "En sistemas operativos basados en Linux, el usuario que posee todos los privilegios del sistema y puede saltarse cualquier restricción de permisos es conocido como ___."

respuesta: "root"

explicacion: |
  El usuario 'root' es la cuenta de superusuario por excelencia. Aunque en contextos generales se le llame administrador, el nombre técnico del usuario con UID 0 es root.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["comandos", "chmod", "linux"]

tipo: ordenar
opciones_explicitas: ["identificar el archivo y sus permisos actuales", "aplicar el comando chmod con los nuevos permisos", "verificar que los cambios se aplicaron correctamente"]

enunciado: "Ordena los pasos lógicos para cambiar de forma segura los permisos de un archivo crítico en un servidor de producción:"

respuesta_orden: ["identificar el archivo y sus permisos actuales", "aplicar el comando chmod con los nuevos permisos", "verificar que los cambios se aplicaron correctamente"]

explicacion: |
  Antes de modificar permisos en entornos críticos, es vital saber qué estamos cambiando (usando `ls -l`) para evitar bloquear el acceso a servicios esenciales o dejar brechas de seguridad.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["permisos", "usuarios", "sistemas_operativos"]

respuesta: "grupo"
tipo: completar
respuestas_validas:
  - "grupo"

enunciado: "Mientras que un usuario es una entidad individual con sus propios permisos, un ___ es una colección de usuarios que comparten los mismos privilegios de acceso a los recursos."

explicacion: |
  Los grupos permiten administrar permisos de manera colectiva. En lugar de asignar permisos a cada usuario uno por uno, se asignan al grupo y los usuarios se añaden a él.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["privilegios", "root", "seguridad"]

variables:
  escenario_idx: uno_de([0,1])
  escenarios: [["Un usuario estándar intenta modificar archivos del sistema.", "denegado"], ["El superusuario (root) intenta modificar archivos del sistema.", "permitido"]]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["denegado", "permitido", "error de sintaxis", "requiere contraseña"]

enunciado: "En un sistema basado en Unix, ante el escenario: {escenarios[escenario_idx][0]}, el acceso es ___."

explicacion: |
  El usuario 'root' tiene privilegios totales sobre el sistema, mientras que un usuario estándar está restringido a su propio directorio personal y archivos para los que tenga permisos explícitos.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["permisos", "chmod", "linux"]

respuesta: verdadero
tipo: vf

enunciado: "En un sistema de archivos Linux, el permiso de 'ejecución' (x) en un directorio permite al usuario entrar en él (hacer cd), lo cual es distinto al permiso de ejecución en un archivo, que permite correr un programa."

explicacion: |
  Es una distinción fundamental: en archivos, 'x' es ejecución; en directorios, 'x' es la capacidad de acceder al contenido del directorio (traverse).
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["seguridad", "principios"]

respuesta_orden: ["Identificar el usuario", "Asignar permisos mínimos", "Auditar el acceso"]
tipo: ordenar
opciones_explicitas: ["Identificar el usuario", "Asignar permisos mínimos", "Auditar el acceso"]

enunciado: "Para implementar correctamente el principio de menor privilegio en la gestión de recursos, se deben seguir estos pasos en orden lógico:"

explicacion: |
  Primero se define quién es el sujeto (usuario), luego se le da solo lo que necesita para su tarea (mínimo privilegio) y finalmente se supervisa que no se desvíe de su función.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["acl", "permisos", "seguridad"]

variables:
  es_acl: uno_de([0,1])
  comparacion: [["permisos_tradicionales", "solo permiten definir dueño, grupo y otros"], ["ACL", "permiten definir permisos específicos para múltiples usuarios"]]

respuesta: comparacion[es_acl][1]
tipo: mc
opciones_explicitas: ["solo permiten definir dueño, grupo y otros", "permiten definir permisos específicos para múltiples usuarios", "son solo para archivos comprimidos", "no se pueden usar en Linux"]

enunciado: "A diferencia de los {comparacion[es_acl][0]}, las listas de control de acceso (___) ofrecen una granularidad mucho mayor."

explicacion: |
  Los permisos tradicionales (rwx para owner, group, others) son limitados. Las ACL (Access Control Lists) permiten asignar permisos a un usuario específico que no es el dueño, sin necesidad de crear un grupo nuevo.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["linux", "permisos"]

variables:
  archivos: ["archivo_secreto.txt", "config.sys", "script.sh"]
  idx: uno_de([0, 1, 2])

enunciado: "Se desea que el archivo {archivos[idx]} tenga permisos donde el dueño tenga lectura y escritura, pero nadie más tenga acceso. El modo octal correspondiente es ___."

respuestas_validas:
  - "600"

respuesta: "600"
tipo: completar

explicacion: |
  En sistemas tipo Unix, el primer dígito (6) representa al dueño (lectura=4 + escritura=2), el segundo (0) al grupo y el tercero (0) a otros.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "basico"
  tags: ["usuarios", "root"]

enunciado: "¿Es el usuario 'root' el superusuario que tiene control total sobre el sistema operativo, pudiendo ignorar la mayoría de las restricciones de permisos?"

respuesta: verdadero
tipo: vf

explicacion: |
  El usuario root es el superusuario en sistemas basados en Unix/Linux y tiene privilegios máximos sobre todos los recursos del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["permisos", "octal"]

variables:
  datos: [["rwx r-- ---", "740"], ["rw- r-- r--", "644"], ["rwx rwx ---", "770"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si un comando 'ls -l' muestra que un archivo tiene los permisos {datos[idx][0]}, ¿cuál es su representación en formato octal?"

opciones_explicitas:
  - "740"
  - "644"
  - "770"

respuesta: datos[idx][1]
tipo: mc

explicacion: |
  Cada bloque de tres caracteres (dueño, grupo, otros) se suma: r=4, w=2, x=1.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["proceso", "seguridad"]

enunciado: "Ordena los pasos lógicos para asegurar un archivo recién creado en un servidor compartido para que solo el usuario actual pueda leerlo y editarlo, sin que otros puedan verlo."

opciones_explicitas:
  - "Crear el archivo con el contenido necesario"
  - "Cambiar el propietario con 'chown' si es necesario"
  - "Restringir permisos con 'chmod 600'"
  - "Verificar la configuración de la umask del sistema"

respuesta_orden: ["Crear el archivo con el contenido necesario", "Cambiar el propietario con 'chown' si es necesario", "Restringir permisos con 'chmod 600'", "Verificar la configuración de la umask del sistema"]
tipo: ordenar

explicacion: |
  Para asegurar un recurso, primero se crea, se asegura la propiedad del dueño, se aplican los permisos restrictivos y se valida que la umask no haya aplicado permisos por defecto más abiertos.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["umask", "permisos"]

variables:
  datos: [["022", "755"], ["027", "750"], ["077", "700"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si la umask del sistema está configurada como {datos[idx][0]}, un nuevo archivo creado por un usuario tendrá como permiso máximo (en modo octal) el valor ___."

respuestas_validas:
  - "755"
  - "750"
  - "700"

respuesta: datos[idx][1]
tipo: completar

explicacion: |
  La umask (User Mask) se resta de los permisos base (normalmente 777 para directorios o 666 para archivos) para determinar los permisos finales.
```

