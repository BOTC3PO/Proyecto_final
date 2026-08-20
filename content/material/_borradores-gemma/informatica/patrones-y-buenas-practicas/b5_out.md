### 1 — El patrón Singleton
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

respuesta: escenario[idx][1]

explicacion: |
  El patrón Singleton garantiza que una clase tenga una única instancia y proporciona un punto de acceso global a ella.
```

### 2 — Refactorización de código
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

respuesta: caso[idx][1]

explicacion: |
  La legibilidad y la reutilización son pilares de las buenas prácticas. Cada caso presentado requiere una acción de refactorización específica para cumplir con principios como SOLID o Clean Code.
```

### 3 — Patrón Observer
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

### 4 — Principio de Responsabilidad Única (SRP)
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

### 5 — Ciclo de vida de un Bug
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