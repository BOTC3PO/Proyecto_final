# Examen jefe — Maestro del POO y Patrones

> Logro #177. Completaste el examen sobre POO, patrones, paginación, permisos y planificación de procesos. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **121 preguntas totales** en 5/5 secciones.

---

## Sección: paginacion (21 preguntas)

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "basico"
  tags: ["conceptos", "memoria-virtual"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación es un mecanismo que permite a un programa utilizar más espacio de memoria del que físicamente está disponible en la RAM."

explicacion: |
  Correcto. La paginación gestiona la memoria virtual, dividiendo la memoria lógica en páginas y la física en marcos, permitiendo usar el disco duro como extensión de la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["fallos", "procesos"]

respuesta: verdadero
tipo: vf

enunciado: "Un 'fallo de página' ocurre cuando un programa intenta acceder a una página que no se encuentra actualmente en la RAM."

explicacion: |
  Verdadero. El sistema operativo debe entonces detener el proceso, buscar un marco libre (o liberar uno), cargar la página desde el disco y actualizar la tabla de páginas.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["estructura", "traduccion"]

respuesta: verdadero
tipo: vf

enunciado: "La tabla de páginas es una estructura de datos utilizada por el sistema operativo para mapear las páginas virtuales a los marcos de página físicos."

explicacion: |
  Verdadero. Esta tabla es esencial para que la MMU sepa dónde está cada página en la memoria física.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["rendimiento", "discos"]

respuesta: verdadero
tipo: vf

enunciado: "El intercambio constante de datos entre la RAM y el disco duro debido a fallos de página puede degradar significativamente el rendimiento del sistema."

explicacion: |
  Verdadero. El disco duro es mucho más lento que la RAM. Si hay muchos fallos de página (thrashing), el sistema pasa más tiempo moviendo datos que ejecutando instrucciones.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "basico"
  tags: ["conceptos", "ilusion"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación crea la ilusión de tener una memoria infinita, aunque la RAM física sea limitada."

explicacion: |
  Correcto. Esta ilusión se llama memoria virtual y permite ejecutar programas que son más grandes que la memoria física disponible.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["eficiencia", "tipos"]

respuesta: falso
tipo: vf

enunciado: "La paginación introduce fragmentación externa porque los bloques de memoria asignados pueden ser de tamaños variables."

explicacion: |
  Falso. La paginación elimina la fragmentación externa porque las páginas y marcos tienen tamaños fijos. Sin embargo, puede haber fragmentación interna (espacio desperdiciado dentro de un marco).
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["problemas", "rendimiento"]

respuesta: verdadero
tipo: vf

enunciado: "El 'thrashing' o agotamiento de memoria ocurre cuando el sistema pasa más tiempo gestionando fallos de página que ejecutando procesos útiles."

explicacion: |
  Verdadero. Es una condición crítica donde la actividad de paginación impide el progreso real de los programas.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["procesos", "mmu"]

respuesta: verdadero
tipo: vf

enunciado: "La traducción de direcciones virtuales a físicas se realiza completamente por software, sin intervención del hardware."

explicacion: |
  Falso. La MMU (hardware) realiza la traducción en tiempo real. El sistema operativo (software) gestiona las tablas, pero la traducción es hardware.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["eficiencia", "desperdicio"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación puede causar fragmentación interna, que es el espacio desperdiciado dentro del último marco de página de un proceso si este no llena el marco completamente."

explicacion: |
  Verdadero. Como el tamaño de la última página lógica puede ser menor que el tamaño del marco físico, el espacio restante en ese marco se pierde.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["comparacion", "segmentacion"]

respuesta: verdadero
tipo: vf

enunciado: "Una ventaja clave de la paginación sobre la segmentación es que no requiere que el espacio de direcciones del programa sea contiguo en la memoria física."

explicacion: |
  Correcto. Las páginas pueden estar dispersas en la RAM, mientras que los segmentos suelen requerir bloques contiguos.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["optimizacion", "estructuras"]

respuesta: verdadero
tipo: vf

enunciado: "Una tabla de páginas invertida indexa por marcos de página físicos en lugar de por direcciones virtuales, lo que puede ahorrar memoria en sistemas con mucho espacio de direcciones."

explicacion: |
  Verdadero. En lugar de una entrada por página virtual, hay una entrada por marco físico, reduciendo el tamaño de la tabla en sistemas con grandes espacios virtuales.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["algoritmos", "reemplazo"]

respuesta: verdadero
tipo: vf

enunciado: "El algoritmo LRU (Least Recently Used) selecciona para reemplazo la página que no se ha utilizado durante el periodo de tiempo más largo."

explicacion: |
  Verdadero. Se basa en la premisa de que las páginas usadas recientemente probablemente se usarán de nuevo pronto, y las no usadas en mucho tiempo, menos.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["hardware", "caché"]

respuesta: verdadero
tipo: vf

enunciado: "La TLB es una caché de hardware que almacena las traducciones más recientes de direcciones virtuales a físicas para acelerar el acceso."

explicacion: |
  Verdadero. Sin la TLB, cada acceso a memoria requeriría dos accesos a la RAM (uno para la tabla de páginas y otro para el dato), lo cual es muy lento.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["procesos", "io"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando ocurre un fallo de página, el sistema operativo debe realizar una operación de entrada/salida (I/O) desde el disco para cargar la página."

explicacion: |
  Verdadero. La página debe ser leída desde el archivo de paginación o swap en el disco hasta un marco libre en la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "basico"
  tags: ["conceptos", "disco"]

respuesta: verdadero
tipo: vf

enunciado: "El área del disco duro utilizada para guardar páginas que no están en la RAM se denomina comúnmente 'swap' o archivo de paginación."

explicacion: |
  Verdadero. Es el espacio de memoria virtual en el disco que actúa como extensión de la RAM.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "intermedio"
  tags: ["algoritmos", "reemplazo"]

respuesta: verdadero
tipo: vf

enunciado: "El algoritmo FIFO (First-In, First-Out) reemplaza la página que ha estado en la memoria física por el mayor tiempo, independientemente de su frecuencia de uso."

explicacion: |
  Verdadero. Es simple pero puede tener un comportamiento subóptimo comparado con LRU, ya que no considera el patrón de acceso.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["eficiencia", "recursos"]

respuesta: verdadero
tipo: vf

enunciado: "Un inconveniente de la paginación es el consumo de memoria RAM para almacenar las tablas de páginas de cada proceso."

explicacion: |
  Verdadero. Cada proceso necesita su propia tabla de páginas, lo que consume memoria física, especialmente si el espacio de direcciones es muy grande.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["estructuras", "comparacion"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación directa usa tablas indexadas por dirección virtual, mientras que la paginación inversa usa tablas indexadas por dirección física."

explicacion: |
  Verdadero. Esto cambia la forma en que se busca la traducción y el tamaño de la estructura de datos.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "basico"
  tags: ["seguridad", "aislamiento"]

respuesta: verdadero
tipo: vf

enunciado: "La paginación ayuda al aislamiento de procesos porque cada proceso tiene su propio espacio de direcciones virtuales."

explicacion: |
  Verdadero. Un proceso no puede acceder directamente a la memoria de otro, ya que sus direcciones virtuales se traducen a marcos físicos diferentes o no mapeados.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["algoritmos", "teoria"]

respuesta: verdadero
tipo: vf

enunciado: "El algoritmo de reemplazo óptimo (OPT) reemplaza la página que no se usará durante el periodo de tiempo más largo en el futuro. Es ideal pero no implementable en la práctica."

explicacion: |
  Verdadero. OPT requiere conocer la secuencia futura de accesos a memoria, lo cual es imposible de predecir con certeza en un sistema en ejecución.
```

```
metadata:
  materia: "informatica"
  tema: "paginacion"
  nivel: "avanzado"
  tags: ["consistencia", "hardware"]

respuesta: verdadero
tipo: vf

enunciado: "Cuando el sistema operativo modifica la tabla de páginas, puede ser necesario invalidar las entradas correspondientes en la TLB para evitar que se usen direcciones obsoletas."

explicacion: |
  Verdadero. La TLB puede tener caché de traducciones antiguas. Si la tabla de páginas cambia, esas entradas en la TLB deben ser descartadas o actualizadas.
```

## Sección: patrones-y-buenas-practicas (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "patrones_y_buenas_practicas"
  nivel: "basico"
  tags: ["conceptos", "patrones"]

respuesta: "solucion"
tipo: "completar"
respuestas_validas: ["solucion", "soluciones"]

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

variables:
  idx: uno_de([0, 1, 2])
  escenario: [
    ["Creacionales", "se enfocan en la creación de objetos."],
    ["Estructurales", "se enfocan en cómo se componen las clases y objetos."],
    ["De Comportamiento", "se enfocan en la comunicación entre objetos."]
  ]

respuesta: escenario[idx][1
tipo: "mc"
opciones_explicitas: ["creacionales", "estructurales", "de comportamiento"]

enunciado: "Si un programador utiliza el patrón 'Singleton' para asegurar que una clase tenga una única instancia, está utilizando un patrón de tipo: {escenario[idx][0]}."

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

respuesta: ["Identificar el problema", "Analizar la solución existente", "Implementar el patrón", "Refactorizar el código"]
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

variables:
  idx: uno_de([0, 1])
  ejemplo: [
    ["reutilizar", "reutilizar"],
    ["copiar", "copiar"]
  ]

respuesta: ejemplo[idx][0
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
  escenario: uno_de([
    ["Gestión de conexión a base de datos", "DatabaseConnection"],
    ["Gestión de configuración global", "ConfigManager"],
    ["Gestión de sistema de logs", "LoggerInstance"]
  ])

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

respuestas_validas: ["observadores", "observers", "subscriptores"]
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
  caso: uno_de([
    ["un método que calcula el IVA, aplica un descuento y luego imprime el total", "calcular_total_con_impuestos"],
    ["un método que valida datos, conecta a la red y procesa un archivo", "procesar_archivo_seguro"]
  ])

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
  clase_mala: uno_de([
    ["Clase Usuario que guarda datos en BD y también envía emails", "Usuario"],
    ["Clase Factura que calcula totales y también genera un PDF", "Factura"]
  ])

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

opciones_explicitas: [
    "Definir el Command con el método execute()",
    "Crear el Receiver que contiene la lógica real",
    "El Invoker solicita la ejecución al Command",
    "El Cliente instancia el Command y lo vincula al Receiver"
]
respuesta: [
    "Definir el Command con el método execute()",
    "Crear el Receiver que contiene la lógica real",
    "El Invoker solicita la ejecución al Command",
    "El Cliente instancia el Command y lo vincula al Receiver"
]
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

variables:
  idx: uno_de([0, 1])
  escenario: uno_de([
    ["Instancia única garantizada", "Permite múltiples instancias"],
    ["Dificulta el testing unitario", "Facilita el testing unitario"]
  ])[idx]

enunciado: "El patrón Singleton se utiliza para asegurar que una clase tenga una única instancia y proporciona un punto de acceso global a ella. Sin embargo, una crítica común es que su uso excesivo puede ___."

opciones_explicitas: ["mejorar la modularidad", "crear un estado global difícil de testear", "aumentar la velocidad de ejecución", "eliminar la necesidad de clases"]

respuesta: escenario[1
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

variables:
  caso: uno_de([
    ["El objeto crea sus propias dependencias internamente.", "El objeto recibe sus dependencias desde el exterior."],
    ["El objeto recibe sus dependencias desde el exterior.", "El objeto crea sus propias dependencias internamente."]
  ])[0]

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

respuesta: ["Definir la interfaz del producto", "Crear las implementaciones concretas del producto", "Implementar la clase creadora con el método factory"]
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

variables:
  valor: uno_de([0, 1])
  objetivo_acoplamiento: uno_de(["alto", "bajo"])
  objetivo_cohesion: uno_de(["baja", "alta"])

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
respuestas_validas: ["algoritmo"]

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

variables:
  escenario_idx: uno_de([0, 1])

respuesta: uno_de(["Singleton", "Factory"])
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

respuesta: ["Identificar el problema", "Elegir el patrón adecuado", "Implementar la solución", "Refactorizar si es necesario"]
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

variables:
  caso_idx: uno_de([0, 1])
  datos: [["interfaz", "interfaz"], ["clase_abstracta", "clase_abstracta"]]

respuesta: datos[caso_idx][1]
tipo: mc
opciones_explicitas: ["interfaz", "clase_abstracta"]

enunciado: "Si necesitamos definir un contrato que solo especifique comportamientos (métodos sin implementación) sin poseer estado o lógica compartida, lo más adecuado es usar una {datos[caso_idx][0]}."

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
  escenario: uno_de([
    ["Se requiere que una clase de conexión a base de datos solo tenga una instancia única en toda la aplicación.", "Singleton"],
    ["Se requiere que un objeto pueda tener múltiples representaciones (como un checkbox o un botón) según el contexto.", "Flyweight"],
    ["Se requiere que un objeto delegue la creación de otros objetos a una subclase.", "Factory Method"]
  ])
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["Singleton", "Flyweight", "Factory Method", "Observer"]

enunciado: "Un desarrollador necesita asegurar que una clase de gestión de configuración no permita la creación de múltiples instancias, garantizando un único punto de acceso. ¿Qué patrón de diseño debe aplicar para resolver este escenario: {escenario[idx][0]}?"

respuesta: escenario[idx][1

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
  caso: uno_de([
    ["Una función tiene 150 líneas de código y realiza tres tareas distintas.", "Dividir la función en funciones más pequeñas."],
    ["Una variable se llama 'x' y su valor cambia constantemente sin contexto claro.", "Renombrar la variable con un nombre descriptivo."],
    ["Un bloque de código se repite exactamente igual en tres archivos diferentes.", "Extraer el código repetido a una función o clase común."]
  ])
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas: ["Dividir la función en funciones más pequeñas.", "Renombrar la variable con un nombre descriptivo.", "Extraer el código repetido a una función o clase común."]

enunciado: "Para mejorar la mantenibilidad del software, se detecta que: {caso[idx][0]} La acción recomendada es: ___"

respuesta: caso[idx][1

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
  escenario: uno_de([
    ["Un sistema de clima donde varios sensores notifican cambios a una pantalla y a una base de datos simultáneamente.", "Observer"],
    ["Un sistema donde un objeto complejo se construye paso a paso mediante varios métodos.", "Builder"],
    ["Un sistema donde se envían mensajes de un emisor a múltiples receptores sin que estos se conozcan."]
  ])
  idx: uno_de([0, 1, 2])

tipo: vf
respuesta: verdadero

enunciado: "En el escenario: {escenario[idx][0]}, el patrón de diseño que permite que un objeto (sujeto) notifique automáticamente a otros objetos (observadores) sobre cambios en su estado es el patrón {escenario[idx][0]}."

explicacion: |
  El patrón Observer define una relación de uno a muchos, de modo que cuando el objeto cambia de estado, todos sus dependientes son notificados.
```

```
metadata:
  materia: "informatica"
  tema: "buenas_practicas"
  nivel: "intermedio"
  tags: ["solid", "arquitectura"]

variables:
  error_clase: uno_de([
    ["Una clase 'Usuario' que gestiona los datos del perfil Y también se encarga de guardar el archivo en el disco.", "Responsabilidad Única"],
    ["Una clase 'Calculadora' que solo realiza operaciones matemáticas.", "Responsabilidad Única"],
    ["Una clase 'Reporte' que solo formatea datos para la vista."]
  ])
  idx: uno_de([0, 1, 2])

tipo: mc
opciones_explicitas: ["Responsabilidad Única", "Acoplamiento Fuerte", "Cohesión Baja", "Incapacidad de Testeo"]

enunciado: "Analizando el siguiente caso: {error_clase[idx][0]}. La clase está violando el principio de: ___"

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

variables:
  flujo: [
    ["Reportar error", "Asignar a desarrollador", "Corregir error", "Verificar solución", "Cerrar ticket"],
    "Flujo de resolución de errores"
  ]
  idx: 0

tipo: ordenar
opciones_explicitas: ["Reportar error", "Asignar a desarrollador", "Corregir error", "Verificar solución", "Cerrar ticket"]
respuesta: ["Reportar error", "Asignar a desarrollador", "Corregir error", "Verificar solución", "Cerrar ticket"]

enunciado: "Para asegurar la calidad de software, el proceso estándar de gestión de un defecto (bug) debe seguir este orden lógico: ___"

explicacion: |
  Un flujo de trabajo ordenado permite la trazabilidad del error desde su detección hasta su validación final por parte de QA.
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
respuestas_validas: ["permisos"]

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
  opciones: [["lectura", "escritura", "ejecución"], ["lectura", "escritura", "modificación"], ["lectura", "escritura", "borrado"]]
  idx: uno_de([0, 1])

respuesta: opciones[idx][2
tipo: mc
opciones_explicitas: ["lectura", "escritura", "modificación", "ejecución"]

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

variables:
  escenario: [["Usuario común", "Grupo", "Propietario"], ["Usuario común", "Propietario", "Grupo"], ["Usuario común", "Grupo", "Administrador"]]
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][2
tipo: ordenar

opciones_explicitas: ["Usuario común", "Grupo", "Propietario"]

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

variables:
  tabla: [["Lista de Control de Acceso", "permisos estándar"], ["Lista de Control de Acceso", "permisos de red"], ["Lista de Control de Acceso", "permisos de hardware"]]
  idx: uno_de([0, 1, 2])

respuesta: tabla[idx][1
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

respuesta: falso
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
  comando_ejemplo: uno_de(["chmod u+x", "chmod g-w", "chmod o+r"])
  resultado_esperado: uno_de(["u+x", "g-w", "o+r"])

enunciado: "Si aplicamos el comando {comando_ejemplo} a un archivo, estamos modificando los permisos de forma simbólica."

pasos:
  - "Identificar el usuario (u=user, g=group, o=others)"
  - "Identificar la acción (+ para añadir, - para quitar)"
  - "Identificar el permiso (r, w, x)"

respuesta: "resultado_esperado"
tipo: "completar"
respuestas_validas: ["u+x", "g-w", "o+r"]

explicacion: |
  El modo simbólico permite modificar permisos específicos sin redefinir todos los valores. 
  En el caso de {comando_ejemplo}, estamos operando directamente sobre la categoría seleccionada.
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "intermedio"
  tags: ["secuencia", "ejecucion"]

enunciado: "Para que un script de Bash sea ejecutable por un usuario después de haberlo creado, se deben seguir estos pasos en orden:"

opciones_explicitas: ["Crear el archivo con un editor", "Asignar permisos de ejecución con chmod", "Ejecutar el script con ./script.sh"]
respuesta: ["Crear el archivo con un editor", "Asignar permisos de ejecución con chmod", "Ejecutar el script con ./script.sh"]
tipo: "ordenar"

explicacion: |
  Primero el archivo debe existir (creación), luego el sistema operativo debe permitir su ejecución (permisos) y finalmente se puede lanzar el proceso (ejecución).
```

```
metadata:
  materia: "informatica"
  tema: "permisos_y_usuarios"
  nivel: "avanzado"
  tags: ["binario", "permisos"]

variables:
  valor_permiso: uno_de([6, 7, 5])
  valor_binario: uno_de(["110", "111", "101"])

enunciado: "Un archivo tiene permisos de lectura y escritura para el dueño, pero ningún permiso para el grupo ni para otros. ¿Cuál es su valor decimal y su representación binaria?"

respuesta: "valor_permiso"
tipo: "completar"
respuestas_validas: ["6", "7", "5"]

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
  escenario: uno_de([
    ["archivo_A", "usuario_1", "grupo_admin"],
    ["archivo_B", "usuario_2", "grupo_staff"],
    ["archivo_C", "usuario_3", "grupo_dev"]
  ])

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
respuestas_validas: ["root", "superuser", "administrador"]

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

respuesta: ["identificar el archivo y sus permisos actuales", "aplicar el comando chmod con los nuevos permisos", "verificar que los cambios se aplicaron correctamente"]

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
respuestas_validas: ["grupo"]

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
  escenarios: [
    ["Un usuario estándar intenta modificar archivos del sistema.", "denegado"],
    ["El superusuario (root) intenta modificar archivos del sistema.", "permitido"]
  ]

respuesta: escenarios[escenario_idx][1
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

respuesta: ["Identificar el usuario", "Asignar permisos mínimos", "Auditar el acceso"]
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
  comparacion: [
    ["permisos_tradicionales", "solo permiten definir dueño, grupo y otros"],
    ["ACL", "permiten definir permisos específicos para múltiples usuarios"]
  ]

respuesta: comparacion[es_acl][1
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
  datos: [["archivo_secreto.txt", "600"], ["config.sys", "644"], ["script.sh", "755"]]
  idx: uno_de([0, 1, 2])

enunciado: "Se desea que el archivo {datos[idx][0]} tenga permisos donde el dueño tenga lectura y escritura, pero nadie más tenga acceso. El modo octal correspondiente es ___."

respuestas_validas:
  - "600"

respuesta: datos[idx][1]
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
  datos: [["rwx r-- ---", "754"], ["rw- r-- r--", "644"], ["rwx rwx ---", "770"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si un comando 'ls -l' muestra que un archivo tiene los permisos {datos[idx][0]}, ¿cuál es su representación en formato octal?"

opciones_explicitas:
  - "754"
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

respuesta: ["Crear el archivo con el contenido necesario", "Cambiar el propietario con 'chown' si es necesario", "Restringir permisos con 'chmod 600'", "Verificar la configuración de la umask del sistema"]
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

## Sección: planificacion-de-procesos (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["conceptos", "so"]

respuesta: "scheduler"
tipo: completar
respuestas_validas: ["scheduler", "planificador"]

enunciado: "El componente del sistema operativo encargado de decidir qué proceso en la cola de listos tendrá el control de la CPU se denomina ___."

explicacion: |
  El scheduler (o planificador) es el algoritmo que decide la asignación de recursos de la CPU para maximizar la eficiencia del sistema.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["tipos", "algoritmos"]

variables:
  tipo_idx: uno_de([0, 1])
  escenario: [[0, "Preemptiva"], [1, "No preemptiva"]]

respuesta: escenario[tipo_idx][1
tipo: mc
opciones_explicitas: ["Preemptiva", "No preemptiva"]

enunciado: "En un modelo de planificación {escenario[tipo_idx][1]}, una vez que un proceso toma el control de la CPU, no puede ser retirado de él hasta que finalice o se bloquee por una operación de E/S."

explicacion: |
  En la planificación no preemptiva, el proceso mantiene la CPU hasta que termina su ejecución o realiza una llamada al sistema que lo deja en estado de espera.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["estados", "ciclo_de_vida"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que un proceso en estado 'Ready' (Listo) tiene todos los recursos necesarios para ejecutarse y solo está esperando que el planificador le asigne la CPU?"

explicacion: |
  Verdadero. Un proceso en estado 'Listo' está preparado para ejecutarse, pero la CPU está siendo utilizada por otro proceso.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["estados", "secuencia"]

respuesta: ["Nuevo", "Listo", "Ejecución", "Terminado"]
tipo: ordenar
opciones_explicitas: ["Nuevo", "Listo", "Ejecución", "Terminado", "Esperando"]

enunciado: "Ordene cronológicamente los estados típicos de un proceso desde su creación hasta su finalización, omitiendo el estado de espera (I/O wait):"

explicacion: |
  La secuencia lógica es: Creación (Nuevo) -> Cola de espera de CPU (Listo) -> Uso de CPU (Ejecución) -> Fin de vida (Terminado).
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "avanzado"
  tags: ["metricas", "rendimiento"]

variables:
  metrica_idx: uno_de([0, 1])
  metrica_nombre: [["Tiempo de respuesta", "Turnaround"], ["Response Time", "Turnaround"]]

respuesta: metrica_nombre[metrica_idx][0
tipo: mc
opciones_explicitas: ["Tiempo de respuesta", "Turnaround"]

enunciado: "El tiempo que transcurre desde que se envía una solicitud hasta que se produce la primera respuesta es una métrica clave llamada {metrica_nombre[metrica_idx][0]}."

explicacion: |
  El 'Response Time' es vital en sistemas interactivos para garantizar que el usuario sienta que el sistema responde rápidamente.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["scheduling", "fcfs", "cpu"]

variables:
  escenario: uno_de([
    [10, 5, 8],
    [2, 7, 4],
    [5, 5, 5]
  ])

enunciado: "En un sistema con planificación FCFS, tres procesos llegan en el orden dado con los siguientes tiempos de ráfaga (burst time): P1: {escenario[0]}, P2: {escenario[1]} y P3: {escenario[2]}. Si el tiempo de llegada de todos es 0, ¿cuál es el tiempo de espera promedio?"

pasos:
  - "Calcular el tiempo de espera de cada proceso: P1=0, P2=P1_burst, P3=P1_burst+P2_burst."
  - "Sumar los tiempos de espera y dividir por la cantidad de procesos."

respuesta: (0 + escenario[0] + (escenario[0] + escenario[1])) / 3
tipo: completar
tolerancia_abs: 0.1

explicacion: |
  En FCFS, el primer proceso no espera nada. El segundo espera lo que dure el primero, y el tercero la suma de los dos anteriores. El promedio es la suma de esperas dividida por el total de procesos.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["sjf", "scheduling", "optimal"]

variables:
  procesos: [
    ["P1", 8],
    ["P2", 3],
    ["P3", 6],
    ["P4", 2]
  ]

enunciado: "Se tiene una cola de procesos con los siguientes tiempos de ráfaga: P1: 8ms, P2: 3ms, P3: 6ms y P4: 2ms. Si el planificador utiliza el algoritmo SJF (Non-preemptive), ¿cuál es el orden de ejecución de los procesos?"

opciones_explicitas: ["P1, P2, P3, P4", "P4, P2, P3, P1", "P4, P2, P1, P3", "P2, P4, P3, P1"]
respuesta: "P4, P2, P3, P1"
tipo: mc

explicacion: |
  El algoritmo SJF selecciona siempre el proceso con la ráfaga de CPU más corta disponible. Ordenando de menor a mayor ráfaga obtenemos: P4 (2), P2 (3), P3 (6) y P1 (8).
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["priority", "scheduling"]

variables:
  caso: uno_de([
    [1, 5],
    [10, 2],
    [5, 8]
  ])

enunciado: "En un sistema operativo con planificación por prioridades (donde un número menor indica mayor prioridad), se tienen dos procesos: P1 con prioridad {caso[0]} y P2 con prioridad {caso[1]}. Si P1 llega primero, pero P2 tiene una prioridad más alta, en un sistema de planificación por prioridades NO PREEMPTIVE, ¿cuál es la prioridad del proceso que se está ejecutando actualmente si P1 ya tomó la CPU?"

respuesta: "falso"
tipo: completar
explicacion: |
  En la planificación por prioridades NO PREEMPTIVE, una vez que un proceso toma la CPU, no puede ser expulsado por uno de mayor prioridad; debe esperar a que termine su ráfaga actual.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "avanzado"
  tags: ["round_robin", "quantum"]

variables:
  quantum: 4
  p_burst: 10

enunciado: "Un proceso tiene una ráfaga de CPU de {p_burst} ms. Si el sistema utiliza un algoritmo Round Robin con un quantum de {quantum} ms, ¿cuántas veces será el proceso movido de vuelta a la cola de listos (ready queue) debido a que se le agota su quantum antes de terminar?"

respuesta: 2
tipo: completar
tolerancia_abs: 0

explicacion: |
  El proceso consume: 4ms (1ra vez), 4ms (2da vez), y le quedan 2ms. Al terminar los 2ms finales, el proceso finaliza y no vuelve a la cola. Por lo tanto, fue expulsado por quantum 2 veces.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["process_states", "os"]

enunciado: "Ordena correctamente los estados por los que pasa un proceso desde que se crea hasta que termina su ejecución en un sistema operativo estándar:"

opciones_explicitas: ["Nuevo, Listo, Ejecución, Bloqueado, Terminado", "Nuevo, Ejecución, Listo, Bloqueado, Terminado", "Nuevo, Listo, Bloqueado, Ejecución, Terminado", "Nuevo, Listo, Ejecución, Terminado, Bloqueado"]
respuesta: ["Nuevo, Listo, Ejecución, Bloqueado, Terminado"]
tipo: ordenar

explicacion: |
  El ciclo de vida estándar es: se crea (Nuevo), espera turno (Listo), usa la CPU (Ejecución), espera un evento de E/S (Bloqueado) y finalmente finaliza (Terminado).
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["conceptos_basicos", "hilos", "procesos"]

respuesta: falso

tipo: vf

enunciado: "Un hilo (thread) es una unidad de ejecución independiente que posee su propio espacio de direccionamiento de memoria, separado del proceso que lo contiene."

explicacion: |
  Falso. Los hilos comparten el espacio de direccionamiento de su proceso padre (memoria, archivos abiertos, etc.), lo que permite una comunicación más rápida pero también requiere mayor sincronización para evitar condiciones de carrera.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["overhead", "context_switch"]

variables:
  escenario: uno_de([
    ["El sistema operativo guarda el estado de los registros del proceso A para cargar el proceso B.", "Cambio de contexto"],
    ["El procesador ejecuta instrucciones de un proceso de usuario de forma continua.", "Ejecución"],
    ["Un proceso solicita acceso a un recurso de E/S y queda bloqueado.", "Espera de E/S"]
  ])

enunciado: "En el siguiente escenario, ¿qué acción se está describiendo?: {escenario[0]}"

opciones_explicitas: ["Cambio de contexto", "Ejecución", "Espera de E/S"]

respuesta: escenario[1

tipo: mc

explicacion: |
  El cambio de contexto (context switch) es la operación de guardar el estado (contexto) de un proceso o hilo para que pueda ser reanudado más tarde, permitiendo que la CPU pase a otro proceso.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "avanzado"
  tags: ["algoritmos", "sjf", "eficiencia"]

variables:
  caso: uno_de([
    [10, 2, 5],
    [1, 8, 4],
    [5, 5, 5]
  ])

enunciado: "Se tienen tres procesos con tiempos de ráfaga de CPU (burst time) de {caso[0]}, {caso[1]} y {caso[2]} ms respectivamente. Si aplicamos el algoritmo Shortest Job First (SJF) sin preempción, el orden de ejecución de los procesos será el indicado por sus tiempos de ráfaga (de menor a mayor):"

opciones_explicitas: ["{caso[1]}, {caso[2]}, {caso[0]}", "{caso[0]}, {caso[1]}, {caso[2]}", "{caso[2]}, {caso[1]}, {caso[0]}"]

respuesta: ["{caso[1]}", "{caso[2]}", "{caso[0]}"]

tipo: ordenar

explicacion: |
  El algoritmo SJF (Shortest Job First) selecciona siempre el proceso con el tiempo de ráfaga más corto para minimizar el tiempo de espera promedio.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["starvation", "prioridades"]

respuesta: "inanición"

tipo: completar

enunciado: "En un sistema de planificación basado en prioridades, si los procesos de alta prioridad llegan constantemente, los procesos de baja prioridad pueden no recibir tiempo de CPU nunca, un fenómeno conocido como ___."

respuestas_validas: ["inanición", "starvation"]

explicacion: |
  La inanición ocurre cuando un proceso es ignorado indefinidamente porque el planificador siempre elige otros procesos con mayor prioridad o que se ajustan mejor a un criterio específico.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["preemption", "kernel"]

respuesta: verdadero

tipo: vf

enunciado: "En la planificación no apropiativa (non-preemptive), una vez que un proceso toma el control de la CPU, no puede ser retirado de ella hasta que termine su ejecución o pase a un estado de espera."

explicacion: |
  Verdadero. A diferencia de la planificación apropiativa (preemptive), donde el SO puede interrumpir un proceso para dar paso a otro, en la no apropiativa el proceso retiene la CPU hasta que libera el recurso voluntariamente.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["so", "cpu", "gestion"]

respuesta: falso
tipo: vf

enunciado: "La planificación de procesos es un mecanismo de hardware diseñado exclusivamente para que el procesador pueda pausar una tarea ante un evento externo."

explicacion: |
  Falso. La planificación de procesos es una función del Sistema Operativo (software) para gestionar el tiempo de CPU. Las interrupciones son señales de hardware o software que alteran el flujo de ejecución actual.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["algoritmos", "scheduling"]

variables:
  escenario: uno_de([["Round Robin", "FCFS"], ["FCFS", "Round Robin"]])

respuesta: escenario[0
tipo: mc

opciones_explicitas: ["Round Robin", "FCFS"]

enunciado: "Si un sistema operativo utiliza un algoritmo de planificación que garantiza un tiempo de respuesta equitativo mediante el uso de una cuota de tiempo (quantum) para cada proceso, ¿qué algoritmo está utilizando y en qué se diferencia del FCFS (First-Come, First-Served)?"

explicacion: |
  El algoritmo Round Robin utiliza un quantum de tiempo para evitar que un proceso largo monopolice la CPU, mientras que en FCFS los procesos se ejecutan estrictamente en el orden en que llegan, lo que puede causar el efecto de 'convoy'.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["estados", "ciclo_de_vida"]

respuesta: ["Creado", "Listo", "Ejecución", "Bloqueado", "Terminado"]
tipo: ordenar

opciones_explicitas: ["Creado", "Listo", "Ejecución", "Bloqueado", "Terminado"]

enunciado: "Ordene cronológicamente los estados típicos de un proceso en un sistema operativo, desde que se instancia hasta que finaliza su ejecución."

explicacion: |
  El ciclo de vida estándar comienza con la creación, pasa por la cola de listos, la ejecución en CPU, el bloqueo por espera de I/O y finalmente el término.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "avanzado"
  tags: ["overhead", "contexto"]

respuesta: "cambio de contexto"
tipo: completar

respuestas_validas: ["cambio de contexto", "context switch"]

enunciado: "El proceso de guardar el estado de un proceso que está en uso por la CPU para cargar el estado de un nuevo proceso se denomina ___."

explicacion: |
  El cambio de contexto (context switch) es una operación necesaria para la multiprogramación, pero implica un 'overhead' o costo de tiempo de CPU que no se realiza en trabajo útil del usuario.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["prioridad", "scheduling"]

variables:
  caso: uno_de([[10, "Prioridad"], [5, "Tiempo de ráfaga"]])

respuesta: caso[1
tipo: mc

opciones_explicitas: ["Prioridad", "Tiempo de ráfaga"]

enunciado: "En un algoritmo de planificación basado en el tiempo de ráfaga (Shortest Job First), el criterio de decisión para elegir el siguiente proceso es el valor de {caso[0]}. ¿En qué se diferencia este criterio de un algoritmo basado en {caso[1]}?"

explicacion: |
  En SJF se busca minimizar el tiempo de espera promedio priorizando procesos cortos. En el de prioridad, se busca atender primero tareas críticas independientemente de su duración.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["scheduler", "round_robin", "cpu"]

variables:
  datos: [[10, 4], [15, 5], [8, 3]]
  idx: uno_de([0, 1, 2])
  quantum: 4

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Se tiene un proceso con un tiempo de ráfaga de {datos[idx][0]} ms. Si el planificador utiliza el algoritmo Round Robin con un quantum de {quantum} ms, ¿cuántos cortes de tiempo (context switches) se realizarán antes de que el proceso termine y se libere la CPU?"

pasos:
  - "Calcular la cantidad de ráfagas completas: ceil(tiempo_rafaga / quantum)"
  - "Restar 1 al resultado para obtener la cantidad de interrupciones/cortes antes del final."

explicacion: |
  En Round Robin, el proceso se interrumpe cada vez que alcanza el quantum. Si el tiempo es 10 y el quantum es 4, el proceso corre: [0-4], [4-8], [8-10]. Se realizaron 2 cortes de tiempo antes de terminar.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["prioridad", "scheduling"]

respuesta: "Alto"
tipo: mc
opciones_explicitas: ["Alto", "Bajo", "Medio", "Nulo"]

enunciado: "En un sistema operativo con planificación basada en prioridades, si un proceso de sistema (kernel) entra en la cola de listos, su prioridad suele ser ___ para asegurar la estabilidad del sistema."

explicacion: |
  Los procesos del núcleo o del sistema operativo tienen prioridad alta para garantizar que las tareas críticas de gestión de hardware y memoria se completen sin retrasos.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "basico"
  tags: ["estados", "process_control_block"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es verdadero que un proceso en estado 'Waiting' (Esperando) se encuentra actualmente utilizando la CPU para ejecutar sus instrucciones?"

explicacion: |
  Falso. Un proceso en estado 'Waiting' está esperando un evento externo (como la finalización de una operación de E/S) y no está utilizando la CPU.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "intermedio"
  tags: ["fifo", "fcfs"]

variables:
  orden: [[2, 5, 8], [5, 2, 8], [8, 5, 2]]
  idx: uno_de([0, 1, 2])

respuesta: orden[idx
tipo: ordenar

opciones_explicitas: [2, 5, 8]

enunciado: "Se tienen tres procesos que llegan a la cola de listos en el siguiente orden de tiempo de llegada: P1 (t=2), P2 (t=5) y P3 (t=8). Si el planificador utiliza el algoritmo FCFS (First-Come, First-Served), ordene la secuencia de ejecución de los procesos."

explicacion: |
  El algoritmo FCFS atiende los procesos estrictamente en el orden en que llegan a la cola de listos.
```

```
metadata:
  materia: "informatica"
  tema: "planificacion_de_procesos"
  nivel: "avanzado"
  tags: ["turnaround", "waiting_time"]

variables:
  datos: [[12, 5], [20, 10], [15, 7]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: [5, 10, 7]

enunciado: "Un proceso llega al sistema en el tiempo 0. Su tiempo de ráfaga de CPU es de {datos[idx][0]} ms. Si el proceso termina exactamente cuando su tiempo de ejecución se completa sin esperas adicionales de E/S, su tiempo de retorno (turnaround time) es de ___ ms."

explicacion: |
  El tiempo de retorno (turnaround time) es el tiempo transcurrido desde que el proceso llega hasta que termina. En este caso simple: Turnaround = Tiempo de finalización - Tiempo de llegada.
```

## Sección: poo-clases-y-objetos (25 preguntas)

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "clases", "conceptos"]

respuesta: "molde"
tipo: completar
respuestas_validas: ["molde", "plantilla"]

enunciado: "En la programación orientada a objetos, una clase se define como un ___ para crear objetos."

explicacion: |
  Una clase actúa como un plano o molde que define la estructura (atributos) y el comportamiento (métodos) que tendrán los objetos creados a partir de ella.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "atributos", "metodos"]

opciones_explicitas: ["Estado (datos)", "Acciones (comportamiento)", "Ambas anteriores"]
respuesta: "Ambas anteriores"
tipo: mc

enunciado: "Un objeto se compone de atributos que representan su {estado} y métodos que representan su {comportamiento}. ¿Qué representan los atributos?"

explicacion: |
  Los atributos son variables que almacenan el estado o las características de un objeto, mientras que los métodos son funciones que definen lo que el objeto puede hacer.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "objetos", "instancia"]

respuesta: verdadero
tipo: vf

enunciado: "El proceso de crear un objeto a partir de una clase se denomina instanciación."

explicacion: |
  Correcto. El objeto resultante de este proceso es una 'instancia' de la clase.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "clases", "objetos"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["Perro", "Fido"], ["Auto", "Toyota"]]
  respuestas: [["Fido es una instancia de Perro", "Toyota es una instancia de Auto"]]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["datos[escenario_idx][0]", "datos[escenario_idx][1]"]

enunciado: "Si tenemos la clase {datos[escenario_idx][0]}, la afirmación correcta sobre un objeto es que {datos[escenario_idx][1]}."

explicacion: |
  La clase es la definición abstracta (Perro), mientras que el objeto es la realización concreta con datos específicos (Fido).
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "ordenar", "proceso"]

opciones_explicitas: ["Definir la clase", "Declarar la variable", "Instanciar el objeto"]
respuesta: ["Definir la clase", "Declarar la variable", "Instanciar el objeto"]
tipo: ordenar

enunciado: "Ordena los pasos lógicos para tener un objeto listo para usar en memoria:"

explicacion: |
  Primero se debe diseñar el plano (clase), luego reservar el nombre de la variable y finalmente ejecutar el constructor para crear la instancia en memoria.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["conceptos", "clases", "objetos"]

respuesta: "clase"
tipo: "mc"
opciones_explicitas: ["objeto", "clase", "atributo", "metodo"]

enunciado: "En programación orientada a objetos, si imaginamos que un 'Plano de una Casa' es el diseño general, el plano en sí mismo es la ___."

explicacion: |
  La clase actúa como un molde o plano que define las características y comportamientos, mientras que el objeto es la instancia concreta creada a partir de ese molde.
```

```
metadata:
  materia: "informatica"
  tema: "poo_atributos"
  nivel: "basico"
  tags: ["atributos", "estado"]

variables:
  escenario: uno_de([
    ["color", "marca", "modelo"],
    ["modelo", "color", "marca"],
    ["marca", "modelo", "color"]
  ])

respuesta: escenario[0
tipo: "completar"
respuestas_validas: ["color", "marca", "modelo"]

enunciado: "Si definimos una clase 'Auto' con las propiedades 'color', 'marca' y 'modelo', estas propiedades se conocen como ___."

explicacion: |
  Los atributos representan el estado o las características de un objeto (en este caso, las propiedades del auto).
```

```
metadata:
  materia: "informatica"
  tema: "poo_metodos"
  nivel: "basico"
  tags: ["metodos", "comportamiento"]

respuesta: verdadero
tipo: "vf"

enunciado: "En una clase llamada 'Perro', una función llamada 'ladrar()' que define una acción que el objeto puede realizar es un método."

explicacion: |
  Los métodos son las funciones definidas dentro de una clase que representan las acciones o comportamientos de los objetos.
```

```
metadata:
  materia: "informatica"
  tema: "poo_instanciacion"
  nivel: "intermedio"
  tags: ["instanciacion", "orden"]

respuesta: ["Definir la clase", "Instanciar el objeto", "Acceder a sus atributos"]
tipo: "ordenar"
opciones_explicitas: ["Acceder a sus atributos", "Instanciar el objeto", "Definir la clase"]

enunciado: "Ordena los pasos lógicos para utilizar un objeto en un programa:"

explicacion: |
  Primero debes tener el molde (clase), luego creas la instancia (objeto) y finalmente puedes interactuar con su información o acciones.
```

```
metadata:
  materia: "informatica"
  tema: "poo_calculo_metodos"
  nivel: "intermedio"
  tags: ["metodos", "calculo"]

variables:
  datos: uno_de([
    [5.0, 10.0, 50.0],
    [3.0, 4.0, 12.0],
    [2.0, 6.0, 12.0]
  ])

respuesta: datos[2
tipo: "input"
tolerancia_abs: 0

enunciado: "Tenemos una clase 'Rectangulo' con los atributos 'base' y 'altura'. Si un objeto de esta clase tiene base = {datos[0]} y altura = {datos[1]}, ¿cuál es el valor resultante del método 'calcular_area()'?"

pasos:
  - "Identificar los valores de base y altura."
  - "Aplicar la fórmula: base * altura."

explicacion: |
  El método calcula el área multiplicando los atributos internos del objeto: 5.0 * 10.0 = 50.0.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "confusiones_comunes"]

respuesta: "molde"
tipo: mc
opciones_explicitas: ["instancia", "molde", "atributo", "metodo"]

enunciado: "En el paradigma de Programación Orientada a Objetos, si comparamos la creación de un objeto con la construcción de una casa, la Clase actúa como el _________."

explicacion: |
  Una clase es un plano o molde que define la estructura y el comportamiento, mientras que el objeto es la instancia real construida a partir de ese molde.
```

```
metadata:
  materia: "informatica"
  tema: "poo_atributos"
  nivel: "intermedio"
  tags: ["memoria", "alcance"]

variables:
  escenario: uno_de([
    ["Atributo de instancia", "valor_especifico"],
    ["Atributo de clase", "valor_compartido"]
  ])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["Atributo de instancia", "Atributo de clase"]

enunciado: "Si definimos una variable dentro de una clase pero fuera de cualquier método, y dicha variable es compartida por todos los objetos de esa clase, estamos ante un: {escenario[0]}."

explicacion: |
  Los atributos de clase pertenecen a la clase misma y se comparten entre todas las instancias, mientras que los de instancia son únicos para cada objeto.
```

```
metadata:
  materia: "informatica"
  tema: "poo_constructores"
  nivel: "intermedio"
  tags: ["errores_comunes", "inicializacion"]

respuesta: "constructor"
tipo: completar
respuestas_validas: ["constructor", "init", "inicializador"]

enunciado: "Un error común al programar POO es olvidar definir el método _________ (o constructor), lo que impide que los atributos de un objeto se inicialicen correctamente al momento de su creación."

explicacion: |
  El constructor es el método especial que se ejecuta automáticamente al instanciar un objeto, permitiendo establecer su estado inicial.
```

```
metadata:
  materia: "informatica"
  tema: "poo_metodos"
  nivel: "basico"
  tags: ["comportamiento"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que un método es una característica que define las propiedades (datos) de un objeto?"

explicacion: |
  Falso. Los atributos definen las propiedades (datos/estado), mientras que los métodos definen el comportamiento (acciones).
```

```
metadata:
  materia: "informatica"
  tema: "poo_instanciacion"
  nivel: "intermedio"
  tags: ["flujo_ejecucion"]

respuesta: ["Definir clase", "Instanciar objeto", "Acceder a atributos/métodos"]
tipo: ordenar
opciones_explicitas: ["Definir clase", "Instanciar objeto", "Acceder a atributos/métodos"]

enunciado: "Ordena los pasos lógicos para poder utilizar una propiedad de un objeto en un programa:"

explicacion: |
  Primero se debe diseñar el plano (clase), luego crear el objeto en memoria (instanciar) y finalmente interactuar con él (acceder).
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "conceptos_fundamentales"]

respuesta: "molde"
tipo: completar
respuestas_validas: ["molde", "plantilla", "definicion"]

enunciado: "Si comparamos la relación entre un plano de construcción y una casa real, la clase actúa como el plano, mientras que el objeto es la ___."

explicacion: |
  La clase es la definición abstracta (el molde) que describe las propiedades y comportamientos, mientras que el objeto es la instancia concreta creada a partir de esa clase.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "atributos", "metodos"]

variables:
  es_estado: uno_de([true, false])

respuesta: uno_de(["estado", "comportamiento"])
tipo: mc
opciones_explicitas: ["estado", "comportamiento"]

enunciado: "En el paradigma de POO, la principal distinción es que los atributos representan el {es_estado}, mientras que los métodos representan el comportamiento."

pasos:
  - "Identificar qué elemento define las características (datos)."
  - "Identificar qué elemento define las acciones (funciones)."

explicacion: |
  Los atributos almacenan el estado o las propiedades de un objeto (datos), mientras que los métodos definen las acciones que el objeto puede realizar (comportamiento).
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "instanciacion"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es posible que dos objetos distintos, creados a partir de la misma clase, tengan valores diferentes en sus atributos?"

explicacion: |
  Verdadero. Aunque comparten la misma estructura definida por la clase, cada instancia (objeto) posee su propio espacio en memoria para sus atributos, permitiendo que cada objeto tenga su propio estado.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "ciclo_de_vida"]

respuesta: ["Definición de clase", "Instanciación de objeto", "Llamada a método"]
tipo: ordenar
opciones_explicitas: ["Definición de clase", "Instanciación de objeto", "Llamada a método"]

enunciado: "Ordene los pasos lógicos para que un objeto pueda interactuar con su entorno:"

explicacion: |
  Primero se debe definir la estructura (Clase), luego se crea la instancia en memoria (Instanciación) y finalmente se ejecutan sus acciones (Métodos).
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "avanzado"
  tags: ["poo", "abstraccion"]

variables:
  caso: uno_de([0, 1])

respuesta: "abstracción"
tipo: mc
opciones_explicitas: ["abstracción", "implementación", "encapsulamiento"]

enunciado: "El proceso de ocultar los detalles complejos de cómo funciona un método y mostrar solo la interfaz necesaria para el usuario se conoce como ___."

explicacion: |
  La abstracción permite al programador centrarse en 'qué' hace un objeto en lugar de 'cómo' lo hace internamente, simplificando la interacción con sistemas complejos.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "clases", "atributos"]

variables:
  datos: [["Vehiculo", "color", "marca"], ["Persona", "nombre", "edad"], ["Libro", "titulo", "autor"]]
  idx: uno_de([0, 1, 2])

enunciado: "Si definimos una clase llamada {datos[idx][0]}, uno de sus atributos (propiedades) es {datos[idx][1]}."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["color", "nombre", "titulo", "no_aplica"]

explicacion: |
  Un atributo representa una característica o propiedad de un objeto de la clase. En el caso de {datos[idx][0]}, {datos[idx][1]} es una de sus propiedades fundamentales.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "metodos", "comportamiento"]

variables:
  accion: uno_de([["acelerar", "aumentar_velocidad"], ["saludar", "decir_hola"], ["abrir", "cambiar_estado"]])

enunciado: "En la programación orientada a objetos, los métodos representan el comportamiento de un objeto. Si tenemos un método llamado '{accion[0]}', su propósito funcional es {accion[1]}."

respuesta: accion[1
tipo: completar
respuestas_validas: ["aumentar_velocidad", "decir_hola", "cambiar_estado"]

explicacion: |
  Los métodos son funciones definidas dentro de una clase que operan sobre los atributos del objeto o realizan acciones específicas.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "basico"
  tags: ["poo", "objetos", "instancia"]

enunciado: "Si la clase es 'Perro', un objeto creado a partir de ella (una instancia) sería un perro real con nombre y edad específicos."

respuesta: verdadero
tipo: vf

explicacion: |
  Un objeto es una instancia concreta de una clase. Mientras la clase es el molde, el objeto es la entidad con datos reales.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "intermedio"
  tags: ["poo", "estructura", "clases"]

enunciado: "Para implementar correctamente una clase con atributos y métodos, ¿cuál es el orden lógico de definición en la estructura de la clase?"

respuesta: ["Definir atributos", "Definir métodos", "Instanciar objeto"]
tipo: ordenar
opciones_explicitas: ["Definir atributos", "Definir métodos", "Instanciar objeto"]

explicacion: |
  Primero se definen las propiedades (atributos), luego las acciones que puede realizar (métodos) y finalmente se crean los objetos (instancias) que usarán esa estructura.
```

```
metadata:
  materia: "informatica"
  tema: "poo_clases_y_objetos"
  nivel: "avanzado"
  tags: ["poo", "objetos", "identidad"]

variables:
  caso: uno_de([["perro1", "perro2"], ["auto1", "auto2"], ["usuario1", "usuario2"]])

enunciado: "Si creamos dos objetos distintos, {caso[0]} y {caso[1]}, a partir de la misma clase, aunque tengan los mismos atributos, ¿son objetos idénticos en memoria?"

respuesta: falso
tipo: vf

explicacion: |
  Aunque dos objetos tengan los mismos valores en sus atributos, cada instancia ocupa un lugar distinto en la memoria y tiene una identidad única.
```
