### 1 — Patrón Singleton
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

### 2 — Patrón Observer (Completar)
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

### 3 — Refactorización: Extract Method
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

### 4 — Principio de Responsabilidad Única (SRP)
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

### 5 — Flujo de un Patrón Command
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