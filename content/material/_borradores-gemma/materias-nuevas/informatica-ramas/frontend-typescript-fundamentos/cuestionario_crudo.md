### 1 — Inferencia de Tipos con `as const`
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["tipos-inmutables", "const-assertion"]
respuesta: verdadero
tipo: vf
enunciado: Al aplicar la aserción `as const` a un literal de objeto, TypeScript convierte las propiedades de cadena en literales de tipo de cadena en lugar de `string`, permitiendo que la estructura sea tratada como inmutable y de tipo más específico.
pasos:
  - "Definir un literal de objeto con propiedades de cadena."
  - "Aplicar la aserción `as const` al final de la expresión."
  - "Verificar que el tipo inferido contenga literales exactos (ej: 'rojo' en vez de `string`)."
explicacion: "La aserción `as const` es esencial en TypeScript para crear tipos inmutables y precisos a partir de literales, evitando la inferencia de tipos amplios como `string[]` o `{}`."
```

### 2 — Completar: Tipo `keyof` en Clases
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["keyof", "clases", "index-signatures"]
respuesta: keyof
tipo: completar
enunciado: Para obtener un tipo unión de las claves públicas de una clase `User`, se utiliza el operador `keyof` sobre el tipo de la clase: `type UserKeys = _____ User;`.
pasos:
  - "Definir una clase `User` con propiedades públicas."
  - "Aplicar el operador `keyof` al tipo `User`."
  - "Asignar el resultado a una nueva alias de tipo."
explicacion: "El operador `keyof` opera sobre tipos de objetos y clases para extraer las claves de sus propiedades públicas accesibles."
respuestas_validas:
  - keyof
  - keyof
```

### 3 — Selección Múltiple: Decoradores de Clase
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["decoradores", "clase", "metadata"]
respuesta: "C. La función del decorador recibe el constructor de la clase como primer argumento."
tipo: mc
enunciado: ¿Cuál de las siguientes afirmaciones describe correctamente el comportamiento de un decorador de clase en TypeScript?
opciones_explicitas:
  - "A. El decorador se ejecuta en tiempo de compilación y elimina la clase si devuelve `false`."
  - "B. El decorador reemplaza la clase original por una nueva función anónima."
  - "C. La función del decorador recibe el constructor de la clase como primer argumento."
  - "D. Los decoradores de clase no pueden modificar las propiedades estáticas de la clase."
pasos:
  - "Analizar la firma de la función del decorador de clase."
  - "Verificar la especificación de decoradores en TypeScript."
  - "Identificar el argumento principal pasado al decorador."
explicacion: "Los decoradores de clase son funciones que reciben el constructor de la clase como primer parámetro, permitiendo modificar, reemplazar o envolver la clase."
```

### 4 — Verdadero/Falso: `Readonly` vs `as const`
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["inmutabilidad", "readonly", "const"]
respuesta: falso
tipo: vf
enunciado: `Readonly<T>` y `as const` son intercambiables en todos los contextos; usar `as const` en una declaración de variable de tipo complejo no garantiza que las propiedades anidadas sean inmutables en tiempo de ejecución.
pasos:
  - "Comparar la semántica de `Readonly<T>` (tiempo de compilación) con `as const` (inferencia de tipo)."
  - "Verificar si `as const` previene la mutación en tiempo de ejecución."
  - "Concluir que `as const` es una aserción de tipo, no una protección de ejecución."
explicacion: "`as const` es una aserción de tipo que ayuda al compilador a inferir tipos literales e inmutables, pero no genera código que bloquee la mutación en tiempo de ejecución. `Readonly` es un modificador de tipo en tiempo de compilación."
```

### 5 — Completar: Mapeo de Tipos con `Record`
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["record", "mapeo", "tipos"]
respuesta: Record
tipo: completar
enunciado: Para definir un tipo que tenga claves de tipo `string` y valores de tipo `number`, se utiliza el tipo utilitario `_____ <string, number>`.
pasos:
  - "Identificar la necesidad de un diccionario con claves fijas o variables."
  - "Seleccionar el tipo utilitario estándar para mapear claves a valores."
  - "Aplicar `Record<K, V>` con `K` como `string` y `V` como `number`."
explicacion: "`Record<K, V>` es un tipo utilitario que construye un tipo de objeto con un conjunto de claves de tipo `K` y valores de tipo `V`."
respuestas_validas:
  - Record
  - record
```

### 6 — Selección Múltiple: `satisfies` Operator
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["satisfies", "inferencia", "validacion"]
respuesta: "B. Mantiene el tipo más específico del literal en la inferencia mientras valida que cumple la interfaz."
tipo: mc
enunciado: ¿Cuál es la ventaja principal del operador `satisfies` introducido en TypeScript 4.9 sobre la asignación directa a una interfaz?
opciones_explicitas:
  - "A. Elimina la necesidad de declarar la interfaz."
  - "B. Mantiene el tipo más específico del literal en la inferencia mientras valida que cumple la interfaz."
  - "C. Convierte el tipo a `any` para evitar errores de compilación."
  - "D. Genera código JavaScript que verifica la forma del objeto en tiempo de ejecución."
pasos:
  - "Analizar el comportamiento de `satisfies` frente a la asignación tipada."
  - "Verificar si se pierde la especificidad del tipo literal."
  - "Confirmar que `satisfies` valida la compatibilidad sin alterar la inferencia."
explicacion: "`satisfies` permite validar que un valor cumple con una interfaz o tipo específico sin perder la información de tipo más detallada inferida del literal."
```

### 7 — Verdadero/Falso: `never` en Uniones
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["never", "uniones", "exhaustividad"]
respuesta: verdadero
tipo: vf
enunciado: En una unión de tipos, el tipo `never` actúa como un tipo bottom que representa un valor que nunca ocurre; si una unión contiene `never`, el resultado de la unión es el otro tipo en la unión.
pasos:
  - "Recordar la definición de `never` como el tipo de valores que nunca existen."
  - "Evaluar la lógica de unión: `A | never` debe ser equivalente a `A`."
  - "Confirmar que `never` se elimina en la unión."
explicacion: "`never` es el tipo inferior. En una unión, `never` no aporta ningún valor posible, por lo que se ignora, dejando el otro tipo como resultado de la unión."
```

### 8 — Completar: Tipo `Extract`
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["extract", "tipos-utilitarios", "interseccion"]
respuesta: Extract
tipo: completar
enunciado: Para obtener los miembros de la unión `type A = 'a' | 'b' | 'c'` que también están presentes en la unión `type B = 'a' | 'd'`, se usa el tipo utilitario `_____ <A, B>`.
pasos:
  - "Identificar la necesidad de filtrar una unión por miembros comunes."
  - "Seleccionar el tipo utilitario que extrae miembros de una unión que se asignan a otra."
  - "Aplicar `Extract<T, U>` con `T` como la unión origen y `U` como la unión filtro."
explicacion: "`Extract<T, U>` construye una unión consistente en todos los elementos de `T` que pueden asignarse al tipo `U`."
respuestas_validas:
  - Extract
  - extract
```

### 9 — Selección Múltiple: `Partial` vs `Required`
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["partial", "required", "modificadores"]
respuesta: "C. `Partial<T>` hace que todas las propiedades de `T` sean opcionales, mientras que `Required<T>` las hace todas obligatorias."
tipo: mc
enunciado: ¿Cuál es la diferencia fundamental entre los tipos utilitarios `Partial<T>` y `Required<T>`?
opciones_explicitas:
  - "A. `Partial<T>` elimina las propiedades opcionales, mientras que `Required<T>` las agrega."
  - "B. `Partial<T>` convierte las propiedades en `never`, mientras que `Required<T>` en `any`."
  - "C. `Partial<T>` hace que todas las propiedades de `T` sean opcionales, mientras que `Required<T>` las hace todas obligatorias."
  - "D. `Partial<T>` solo afecta a las propiedades de solo lectura, mientras que `Required<T>` a las mutables."
pasos:
  - "Definir `Partial<T>` como un mapeo que aplica `?` a cada propiedad."
  - "Definir `Required<T>` como un mapeo que elimina `?` de cada propiedad."
  - "Comparar los efectos sobre la obligatoriedad de las propiedades."
explicacion: "`Partial<T>` crea un tipo con todas las propiedades de `T` opcionales. `Required<T>` crea un tipo con todas las propiedades de `T` obligatorias, eliminando el modificador opcional si existe."
```

### 10 — Verdadero/Falso: `interface` vs `type` para Extensión
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["interface", "type", "herencia", "extencion"]
respuesta: verdadero
tipo: vf
enunciado: Tanto `interface` como `type` pueden extenderse para crear nuevos tipos, pero solo `interface` puede ser extendida por múltiples interfaces mediante la sintaxis `extends`, mientras que `type` utiliza una sintaxis de unión intersección `&` para lograr un efecto similar.
pasos:
  - "Verificar la sintaxis de extensión para `interface`."
  - "Verificar la sintaxis de combinación para `type`."
  - "Confirmar que ambas permiten composición de tipos, pero con sintaxis distinta."
explicacion: "`interface` usa `extends` para herencia simple o múltiple. `type` usa intersecciones `&` para combinar tipos, lo que permite una composición más flexible pero diferente."
```

### 11 — Completar: Tipo `ReturnType`
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["returntype", "inferencia", "funciones"]
respuesta: ReturnType
tipo: completar
enunciado: Para inferir el tipo de retorno de una función `const fn = () => 42;`, se utiliza el tipo utilitario `_____ <typeof fn>`.
pasos:
  - "Obtener el tipo de la función usando `typeof`."
  - "Aplicar el tipo utilitario que extrae el tipo de retorno de una firma de función."
  - "Usar `ReturnType<T>` donde `T` es la firma de la función."
explicacion: "`ReturnType<T>` extrae el tipo de retorno de la función `T`. Si `T` no es un tipo de función, genera un error."
respuestas_validas:
  - ReturnType
  - returntype
```

### 12 — Selección Múltiple: `Exclude` vs `Omit`
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["exclude", "omit", "utilitarios"]
respuesta: "B. `Exclude` opera sobre uniones de tipos para eliminar miembros, mientras que `Omit` opera sobre objetos para eliminar propiedades."
tipo: mc
enunciado: ¿Cuál es la distinción correcta entre los tipos utilitarios `Exclude<T, U>` y `Omit<T, Keys>`?
opciones_explicitas:
  - "A. Ambos operan sobre uniones de tipos."
  - "B. `Exclude` opera sobre uniones de tipos para eliminar miembros, mientras que `Omit` opera sobre objetos para eliminar propiedades."
  - "C. `Exclude` opera sobre objetos para eliminar propiedades, mientras que `Omit` opera sobre uniones de tipos."
  - "D. `Exclude` es sinónimo de `Pick` y `Omit` es sinónimo de `Partial`."
pasos:
  - "Analizar el dominio de `Exclude` (tipos de unión)."
  - "Analizar el dominio de `Omit` (tipos de objeto/interfaz)."
  - "Diferenciar su propósito: filtrar valores vs filtrar claves."
explicacion: "`Exclude<T, U>` construye una unión de todos los miembros de `T` que no se asignan a `U`. `Omit<T, Keys>` construye un tipo omitiendo las claves especificadas de `T`."
```

### 13 — Verdadero/Falso: `readonly` en Parámetros
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["readonly", "parametros", "inmutabilidad"]
respuesta: verdadero
tipo: vf
enunciado: El modificador `readonly` en un parámetro de función (`readonly param: Type`) impide que el cuerpo de la función reasigne la variable `param`, pero no impide la mutación de las propiedades internas del objeto si este es mutable.
pasos:
  - "Distinguir entre la reasignación de la variable y la mutación del valor."
  - "Verificar si `readonly` en parámetros afecta a la estructura del objeto."
  - "Confirmar que `readonly` en parámetros solo bloquea la reasignación de la referencia."
explicacion: "`readonly` en parámetros de función previene la reasignación de la variable del parámetro dentro del cuerpo. No hace el objeto en sí inmutable; para eso se necesita `Readonly<T>` en el tipo del parámetro."
```

### 14 — Completar: Tipo `NonNullable`
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["nonnullable", "uniones", "null", "undefined"]
respuesta: NonNullable
tipo: completar
enunciado: Para eliminar `null` y `undefined` de una unión `type A = string | null | undefined`, se utiliza `_____ <A>`.
pasos:
  - "Identificar la necesidad de filtrar `null` y `undefined` de una unión."
  - "Seleccionar el tipo utilitario que excluye estos dos tipos específicos."
  - "Aplicar `NonNullable<T>` a la unión `A`."
explicacion: "`NonNullable<T>` construye una unión excluyendo `null` y `undefined` de `T`."
respuestas_validas:
  - NonNullable
  - nonnullable
```

### 15 — Selección Múltiple: `infer` en Condicionales
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["infer", "condicional", "avanzado"]
respuesta: "C. Permite extraer tipos de dentro de otros tipos complejos dentro de una condición."
tipo: mc
enunciado: ¿Cuál es el propósito principal de la palabra clave `infer` en las condiciones de tipo de TypeScript?
opciones_explicitas:
  - "A. Declarar variables locales dentro de una condición de tipo."
  - "B. Forzar que un tipo sea `any`."
  - "C. Permite extraer tipos de dentro de otros tipos complejos dentro de una condición."
  - "D. Reemplazar el tipo de una interfaz en tiempo de compilación."
pasos:
  - "Analizar la sintaxis `T extends U ? infer V : W`."
  - "Identificar que `infer` introduce una variable de tipo desconocida que se infiere de `U`."
  - "Confirmar que esto permite descomponer tipos genéricos."
explicacion: "`infer` se usa en condiciones de tipo para inferir un tipo desconocido de una expresión más compleja, permitiendo la descomposición de firmas de función, clases, etc."
```

### 16 — Verdadero/Falso: `declare` en Módulos
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["declare", "ambient", "módulos"]
respuesta: verdadero
tipo: vf
enunciado: Una declaración `declare const x: number;` en un módulo de TypeScript no genera código JavaScript, pero informa al compilador sobre la existencia de `x` en el entorno global o del módulo.
pasos:
  - "Verificar si `declare` genera código."
  - "Confirmar que `declare` es solo para información de tipos."
  - "Validar que se usa para describir código existente en JS."
explicacion: "`declare` se usa para proporcionar información de tipos sobre entidades que existen en el entorno pero no están definidas en TypeScript, sin generar código."
```

### 17 — Completar: Tipo `Parameters`
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["parameters", "inferencia", "tuplas"]
respuesta: Parameters
tipo: completar
enunciado: Para obtener una tupla de los tipos de parámetros de una función `const fn = (a: string, b: number) => void`, se usa `_____ <typeof fn>`.
pasos:
  - "Obtener el tipo de la función."
  - "Aplicar el tipo utilitario que extrae los tipos de los parámetros como una tupla."
  - "Usar `Parameters<T>`."
explicacion: "`Parameters<T>` extrae los tipos de los argumentos de la función `T` y los devuelve como una tupla."
respuestas_validas:
  - Parameters
  - parameters
```

### 18 — Selección Múltiple: `Pick` vs `Omit`
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["pick", "omit", "subconjuntos"]
respuesta: "A. `Pick` crea un tipo con un subconjunto de propiedades, mientras que `Omit` crea un tipo con todas las propiedades excepto las especificadas."
tipo: mc
enunciado: ¿Cuál es la diferencia entre `Pick<T, K>` y `Omit<T, K>`?
opciones_explicitas:
  - "A. `Pick` crea un tipo con un subconjunto de propiedades, mientras que `Omit` crea un tipo con todas las propiedades excepto las especificadas."
  - "B. `Pick` elimina propiedades, mientras que `Omit` las agrega."
  - "C. `Pick` solo funciona con interfaces, `Omit` con tipos."
  - "D. Son idénticos pero con nombres diferentes."
pasos:
  - "Definir `Pick<T, K>` como selección de claves."
  - "Definir `Omit<T, K>` como exclusión de claves."
  - "Contrastar la lógica de inclusión vs exclusión."
explicacion: "`Pick<T, K>` construye un tipo mapeando las claves de `K` en `T`. `Omit<T, K>` construye un tipo excluyendo las claves de `K` de `T`."
```

### 19 — Verdadero/Falso: `interface` con Implementación
```
metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["interface", "implementacion", "clase"]
respuesta: verdadero
tipo: vf
enunciado: Una clase puede implementar múltiples interfaces, pero una interfaz no puede extender una clase; solo puede extender otras interfaces o tipos.
pasos:
  - "Verificar la capacidad de una clase para implementar múltiples interfaces."
  - "Verificar si una interfaz puede heredar de una clase."
  - "Confirmar que las interfaces solo pueden extender interfaces o tipos."
explicacion: "Las clases pueden implementar múltiples interfaces. Las interfaces solo pueden extender otras interfaces o tipos, no clases, ya que las interfaces solo definen contratos de forma, no implementación."
```

### 20 — Completar: Tipo `Required`
```metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["required", "opcionales", "obligatorios"]
respuesta: Required
tipo: completar
enunciado: Para hacer que todas las propiedades opcionales de un tipo `type A = { x?: number }` sean obligatorias, se usa `_____ <A>`.
pasos:
  - "Identificar la necesidad de convertir propiedades opcionales en obligatorias."
  - "Seleccionar el tipo utilitario que elimina el modificador opcional."
  - "Aplicar `Required<T>`."
explicacion: "`Required<T>` construye un tipo con todas las propiedades de `T` obligatorias, eliminando el modificador `?`."
respuestas_validas:
  - Required
  - required
```

### 21 — Selección Múltiple: `typeof` en Expresiones
```metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["typeof", "expresiones", "tipos"]
respuesta: "B. Permite obtener el tipo de una variable o expresión existente."
tipo: mc
enunciado: ¿Qué hace el operador `typeof` cuando se usa en un contexto de tipo (después de `:` o `<`)?
opciones_explicitas:
  - "A. Convierte el valor a `any`."
  - "B. Permite obtener el tipo de una variable o expresión existente."
  - "C. Evalúa la expresión en tiempo de ejecución."
  - "D. Declara una nueva variable de tipo."
pasos:
  - "Distinguir entre `typeof` en expresión (runtime) y en contexto de tipo (compile-time)."
  - "Identificar que en contexto de tipo, `typeof` inspecciona el tipo de una variable."
  - "Confirmar que permite reutilizar tipos de variables existentes."
explicacion: "En un contexto de tipo, `typeof` permite extraer el tipo de una variable o expresión ya existente, facilitando la creación de tipos derivados."
```

### 22 — Verdadero/Falso: `keyof` en Clases Privadas
```metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["keyof", "privado", "clases"]
respuesta: verdadero
tipo: vf
enunciado: El operador `keyof` aplicado a una clase no incluye las propiedades marcadas como `private` o `protected` en el tipo resultante.
pasos:
  - "Verificar qué miembros incluye `keyof` en clases."
  - "Confirmar que solo los miembros públicos son visibles para `keyof`."
  - "Validar que privados/protected se excluyen."
explicacion: "`keyof` para clases solo devuelve las claves de las propiedades públicas. Las propiedades privadas y protegidas no son parte del tipo clave público."
```

### 23 — Completar: Tipo `Partial`
```metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["partial", "opcionales", "mapeo"]
respuesta: Partial
tipo: completar
enunciado: Para hacer todas las propiedades de un tipo `type A = { x: number }` opcionales, se usa `_____ <A>`.
pasos:
  - "Identificar la necesidad de hacer propiedades opcionales."
  - "Seleccionar el tipo utilitario que aplica `?` a todas las propiedades."
  - "Aplicar `Partial<T>`."
explicacion: "`Partial<T>` construye un tipo con todas las propiedades de `T` opcionales."
respuestas_validas:
  - Partial
  - partial
```

### 24 — Selección Múltiple: `Record` vs `Map`
```metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["record", "map", "estructuras"]
respuesta: "C. `Record<K, V>` es un tipo de objeto estático, mientras que `Map<K, V>` es una clase de colección dinámica."
tipo: mc
enunciado: ¿Cuál es la diferencia principal entre usar el tipo `Record<K, V>` y la clase `Map<K, V>` en TypeScript?
opciones_explicitas:
  - "A. No hay diferencia, son sinónimos."
  - "B. `Record` permite claves de cualquier tipo, `Map` solo strings."
  - "C. `Record<K, V>` es un tipo de objeto estático, mientras que `Map<K, V>` es una clase de colección dinámica."
  - "D. `Record` es más eficiente en memoria que `Map`."
pasos:
  - "Definir `Record` como un tipo de objeto con claves específicas."
  - "Definir `Map` como una instancia de clase con métodos dinámicos."
  - "Contrastar la naturaleza estática vs dinámica."
explicacion: "`Record` es un tipo de objeto estático con claves de un tipo específico. `Map` es una colección dinámica con métodos como `set`, `get`, etc."
```

### 25 — Verdadero/Falso: `satisfies` y `as`
```metadata:
  materia: "informatica"
  tema: "frontend-typescript-fundamentos"
  nivel: "avanzado"
  tags: ["satisfies", "as", "aserciones"]
respuesta: verdadero
tipo: vf
enunciado: `satisfies` valida que un valor cumple con un tipo sin cambiar el tipo inferido del valor, mientras que `as` fuerza el tipo del valor a ser el especificado, potencialmente ocultando errores de tipo si la aserción es incorrecta.
pasos:
  - "Comparar el comportamiento de `satisfies` (validación sin cambio de tipo)."
  - "Comparar el comportamiento de `as` (cambio forzado de tipo)."
  - "Confirmar que `as` puede ocultar errores y `satisfies` no."
explicacion: "`satisfies` es más seguro porque valida la compatibilidad sin alterar la inferencia de tipo. `as` es una aserción que fuerza el tipo, pudiendo llevar a errores si la aserción es incorrecta."
```