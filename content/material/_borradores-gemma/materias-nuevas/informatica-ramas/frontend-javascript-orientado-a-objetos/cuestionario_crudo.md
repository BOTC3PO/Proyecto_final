### 1 — Herencia de Clases y Super
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["extends", "super", "herencia", "clases"]
enunciado: >
  Dado el siguiente código JavaScript ES6+, ¿cuál es el resultado preciso de la ejecución de `console.log`?

  class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
    hablar() {
      return `${this.nombre} hace un sonido.`;
    }
  }

  class Perro extends Animal {
    constructor(nombre, raza) {
      super(nombre);
      this.raza = raza;
    }
    hablar() {
      return `${this.nombre} ladra.`;
    }
  }

  const miPerro = new Perro("Rex", "Labrador");
  console.log(miPerro.hablar());
respuesta: Rex ladra.
tipo: completar
pasos:
  - "Identificar que miPerro es una instancia de Perro."
  - "Notar que Perro sobrescribe el método hablar()."
  - "El método hablar() de Perro retorna una cadena literal usando template literals."
explicacion: La clase Perro hereda de Animal pero redefine el método hablar(). La llamada a miPerro.hablar() invoca la versión de Perro, no la de Animal. La salida es exactamente la cadena definida en la clase hija.
```

### 2 — Prototipo y Cadena de Prototipos
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["__proto__", "prototype", "cadena-prototipos"]
enunciado: >
  Evalúa la siguiente afirmación sobre la cadena de prototipos en JavaScript:

  "Si un objeto no tiene una propiedad o método propio, el motor de JavaScript busca en su prototipo directo, y luego en el prototipo del prototipo, hasta llegar a Object.prototype."
respuesta: verdadero
tipo: vf
pasos:
  - "Recordar el mecanismo de resolución de propiedades en JS."
  - "Verificar que la descripción corresponde al comportamiento estándar de la cadena de prototipos."
explicacion: Esta es la definición exacta de cómo JavaScript resuelve las propiedades no encontradas directamente en el objeto. La búsqueda asciende por la cadena hasta null.
```

### 3 — Getters y Setters Privados
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["get", "set", "privacidad", "encapsulamiento"]
enunciado: >
  Completa el siguiente fragmento de clase para implementar un getter que retorne el valor interno de `#edad` multiplicado por 2:

  class Humano {
    #edad;
    constructor(edad) {
      this.#edad = edad;
    }
    get dobleEdad() {
      return ______;
    }
  }
respuesta: this.#edad * 2
respuestas_validas:
  - "this.#edad * 2"
  - "this.#edad*2"
  - "this[\"#edad\"] * 2"
tipo: completar
pasos:
  - "Identificar que se debe acceder al campo privado usando el prefijo #."
  - "Aplicar la lógica matemática solicitada (multiplicar por 2)."
explicacion: En JavaScript moderno, los campos privados se declaran con `#` y se acceden dentro de la clase con `this.#nombre`. El getter debe retornar el cálculo solicitado.
```

### 4 — Instancia de Clase y Constructor
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["constructor", "this", "instanciacion"]
enunciado: >
  ¿Cuál es el valor de `typeof` para el resultado de `new (class {})()` en JavaScript?
opciones_explicitas:
  - "object"
  - "function"
  - "undefined"
  - "class"
respuesta: object
tipo: mc
pasos:
  - "Evaluar que `new` siempre retorna un objeto."
  - "Considerar que incluso una clase vacía crea una instancia de objeto."
explicacion: En JavaScript, `typeof` de cualquier objeto creado con `new` (incluyendo clases) es "object", a menos que el constructor retorne explícitamente un valor primitivo diferente (lo cual no ocurre aquí).
```

### 5 — Método Static
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["static", "metodo-estatico", "acceso"]
enunciado: >
  Dado:

  class Util {
    static sumar(a, b) { return a + b; }
  }

  const u = new Util();

  ¿Qué expresión llama correctamente al método estático desde la instancia `u` sin error de runtime (aunque se desaconseje)?
respuesta: u.sumar(1, 2)
respuestas_validas:
  - "u.sumar(1, 2)"
  - "Util.sumar(1, 2)"
tipo: completar
pasos:
  - "Reconocer que los métodos static son accesibles desde la clase."
  - "Recordar que en JS, las instancias también hereden la referencia al método static en el prototipo."
explicacion: Aunque lo correcto es `Util.sumar(1, 2)`, en JavaScript llamar a un método estático desde una instancia (`u.sumar(1, 2)`) no lanza error porque el método está en el prototipo de la instancia. La pregunta pide la expresión que funciona.
```

### 6 — Symbol como Clave Única
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["Symbol", "claves-unicas", "objeto"]
enunciado: >
  Completa el código para definir una clave única para almacenamiento interno que no sea enumerable:

  const ID = Symbol("id");
  const obj = {
    nombre: "Test",
    ______: "secret-data"
  };
respuesta: [ID]
respuestas_validas:
  - "[ID]"
  - "[Symbol(\"id\")]"
tipo: completar
pasos:
  - "Identificar que para usar un Symbol como clave de propiedad en un objeto literal, debe ir entre corchetes."
  - "La clave no es la cadena 'ID' ni el valor del Symbol como string, sino el objeto Symbol."
explicacion: Las claves de Symbol en objetos literales deben estar encerradas en `[]` para que el motor las interprete como el valor del Symbol y no como una cadena literal.
```

### 7 — Object.defineProperty (Writable)
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["defineProperty", "writable", "descriptor"]
enunciado: >
  Si deseas que una propiedad definida con `Object.defineProperty` sea inmutable respecto a su valor (pero siga siendo enumerable y configurable), ¿qué valor debe tener la propiedad `writable` en el descriptor?
respuesta: false
tipo: completar
pasos:
  - "Consultar la documentación de Object.defineProperty."
  - "Identificar el descriptor `writable`."
  - "Determinar que `false` impide la reasignación del valor."
explicacion: El descriptor `writable: false` hace que la propiedad sea de solo lectura en términos de asignación de valor.
```

### 8 — Herencia de Descriptores de Propiedad
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["herencia", "descriptores", "defineProperty"]
enunciado: >
  Evalúa la siguiente afirmación:

  "Las propiedades definidas con Object.defineProperty en una clase padre se heredan automáticamente como propiedades propias (own properties) con sus descriptores intactos en las instancias de la clase hija."
respuesta: falso
tipo: vf
pasos:
  - "Analizar cómo funciona la herencia de propiedades en JS."
  - "Distinguir entre propiedades propias y propiedades heredadas vía prototipo."
explicacion: `Object.defineProperty` en el constructor de la padre crea una propiedad propia en la instancia de la padre. La hija hereda el método/constructor, pero si no define la propiedad en sí misma, no se crea una nueva propiedad propia en la hija con el mismo descriptor automáticamente a menos que se configure en el prototipo o se llame al defineProperty en la hija. Más precisamente, si se define en el prototipo de la clase padre, se hereda. Pero la afirmación dice "propiedades propias... en las instancias", lo cual es falso porque las instancias de la hija no tienen esa propiedad propia a menos que el constructor de la hija la cree o la herede vía prototipo (donde ya no es 'own property' de la instancia hija).
```

### 9 — Proxy Interceptando get
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["proxy", "handler", "get", "intercepcion"]
enunciado: >
  Completa el handler del Proxy para interceptar la lectura de propiedades y retornar un valor por defecto 0 si la propiedad no existe:

  const handler = {
    get(target, prop) {
      return prop in target
        ? target[prop]
        : ______;
    }
  };
respuesta: 0
respuestas_validas:
  - "0"
  - "Number(0)"
tipo: completar
pasos:
  - "Entender la lógica ternaria dentro del trap `get`."
  - "Si la propiedad existe, retorna el valor. Si no, retorna el valor por defecto."
explicacion: El código debe retornar el valor por defecto especificado en el enunciado (0) cuando la condición `prop in target` es falsa.
```

### 10 — WeakMap y Garbage Collection
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["WeakMap", "gc", "memoria", "referencias"]
enunciado: >
  ¿Cuál es la característica principal de las claves de un `WeakMap` que lo diferencia de un `Map` estándar?
opciones_explicitas:
  - "Las claves deben ser Strings o Symbols."
  - "Las claves son referencias débiles, permitiendo la recolección de basura."
  - "Los WeakMaps son más rápidos que los Maps."
  - "Los WeakMaps permiten claves primitivas."
respuesta: Las claves son referencias débiles, permitiendo la recolección de basura.
tipo: mc
pasos:
  - "Comparar Map vs WeakMap."
  - "Identificar que WeakMap solo acepta objetos como claves."
  - "Entender que la 'debilidad' de la referencia permite que el objeto sea eliminado si no hay otras referencias."
explicacion: WeakMap mantiene referencias débiles a sus claves. Si el objeto clave no tiene otras referencias, puede ser recolectado por el GC, liberando también la entrada del WeakMap.
```

### 11 — Class Fields y Inicialización
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["class-fields", "inicializacion", "this"]
enunciado: >
  ¿Qué sucede al intentar inicializar una clase field con `this` fuera del constructor en la definición de la clase?

  class Ejemplo {
    valor = this.calcular(); // Línea A
    calcular() { return 10; }
  }
respuesta: TypeError
respuestas_validas:
  - "TypeError"
  - "Uncaught TypeError"
tipo: completar
pasos:
  - "Recordar el orden de inicialización de clases en JS."
  - "Las class fields se inicializan antes de que `this` esté completamente configurado para métodos de instancia en algunos contextos o específicamente en la fase de definición de la clase estática vs instancia."
  - "En realidad, en JS moderno, `this` NO está definido en la fase de definición de la clase (fuera del constructor). Se lanza TypeError."
explicacion: Las propiedades de clase (class fields) se definen en el ámbito de la clase, no de la instancia. `this` no existe hasta que se ejecuta el constructor. Por lo tanto, `this.calcular()` lanza un TypeError: Cannot read properties of undefined (reading 'calcular').
```

### 12 — Object.is vs ===
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["Object.is", "igualdad", "NaN", "-0"]
enunciado: >
  Evalúa la siguiente afirmación:

  "Object.is(NaN, NaN) retorna true, mientras que NaN === NaN retorna false."
respuesta: verdadero
tipo: vf
pasos:
  - "Verificar el comportamiento de NaN con el operador de igualdad estricta."
  - "Verificar el comportamiento de NaN con Object.is."
explicacion: NaN es el único valor en JS que no es igual a sí mismo con `===`. `Object.is` fue diseñado para manejar este caso especial (y también `-0` vs `0`) de manera más precisa para algoritmos de comparación.
```

### 13 — Spread Operator en Objetos
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["spread", "objeto", "copia-superficial"]
enunciado: >
  Dado:

  const base = { a: 1, b: 2 };
  const copy = { ...base, b: 3 };

  ¿Cuál es el valor de `copy.b`?
respuesta: 3
respuestas_validas:
  - "3"
  - "Number(3)"
tipo: completar
pasos:
  - "Analizar el orden de propagación del spread operator."
  - "Las propiedades definidas a la derecha sobrescriben a las de la izquierda."
explicacion: El operador spread `{ ...base }` copia `a` y `b`. Luego `{ b: 3 }` se fusiona, y como `b` ya existe, el valor de la derecha (3) sobrescribe al de la izquierda (2).
```

### 14 — Object.freeze y Inmutabilidad
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["Object.freeze", "inmutabilidad", "profundidad"]
enunciado: >
  Evalúa la siguiente afirmación:

  "Object.freeze(objeto) hace que el objeto y TODOS sus objetos anidados sean inmutables."
respuesta: falso
tipo: vf
pasos:
  - "Analizar el alcance de Object.freeze."
  - "Determinar si es una copia profunda o superficial."
explicacion: `Object.freeze` realiza una congelación superficial. Las propiedades que son objetos en sí mismas siguen siendo mutables a menos que se congelen explícitamente de forma recursiva.
```

### 15 — Getters Compartidos en Prototipo
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["getters", "prototipo", "eficiencia"]
enunciado: >
  ¿Dónde es más eficiente definir un getter que calcula un valor derivado de otras propiedades de la instancia?
opciones_explicitas:
  - "Dentro del constructor, asignándolo a `this`."
  - "En el prototipo de la clase."
  - "Como una función global."
  - "En una variable estática."
respuesta: En el prototipo de la clase.
tipo: mc
pasos:
  - "Evaluar el costo de creación de propiedades en cada instancia."
  - "Si se define en `this` del constructor, se crea una nueva función por cada instancia."
  - "Si se define en el prototipo, se comparte entre todas las instancias."
explicacion: Definir getters en el prototipo evita la creación de múltiples funciones idénticas en memoria para cada objeto instanciado, mejorando el uso de memoria.
```

### 16 — Class Expressions
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["class-expression", "anonima", "IIFE"]
enunciado: >
  Completa el código para crear una clase anónima y asignarla a la variable `MiClase`:

  const MiClase = ______ {
    constructor() {
      this.valor = 10;
    }
  };
respuesta: class
respuestas_validas:
  - "class"
  - "class "
tipo: completar
pasos:
  - "Identificar la sintaxis de declaración de clase."
  - "Notar que para una expresión de clase (sin nombre), se usa la palabra clave `class` seguida de los corchetes."
explicacion: La sintaxis es `const nombre = class { ... }`. Esto crea una clase anónima.
```

### 17 — Symbol.iterator en Clases
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["Symbol.iterator", "iterable", "for-of"]
enunciado: >
  Para que una clase sea iterable y pueda usarse en un bucle `for...of`, debe definir una propiedad con la clave:
respuesta: Symbol.iterator
respuestas_validas:
  - "Symbol.iterator"
  - "[Symbol.iterator]"
tipo: completar
pasos:
  - "Recordar el protocolo de iteración de ES6."
  - "Identificar la clave especial requerida por el motor de JS."
explicacion: La propiedad `Symbol.iterator` debe retornar un objeto iterador (con el método `next`).
```

### 18 — Object.assign y Origen
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["Object.assign", "copia", "propiedades-enumerables"]
enunciado: >
  `Object.assign(target, ...sources)` copia propiedades de las fuentes a target. ¿Qué tipo de propiedades copia?
opciones_explicitas:
  - "Todas las propiedades, incluidas las no enumerables."
  - "Solo las propiedades enumerables y propias de las fuentes."
  - "Solo las propiedades heredadas."
  - "Solo las propiedades con valor numérico."
respuesta: Solo las propiedades enumerables y propias de las fuentes.
tipo: mc
pasos:
  - "Consultar la especificación de Object.assign."
  - "Distinguir entre `for...in` (heredadas) y propiedades propias."
explicacion: `Object.assign` utiliza `[[Get]]` y `[[Set]]` internamente y copia solo las propiedades enumerables y propias de los objetos fuente.
```

### 19 — Private Fields en Métodos Estáticos
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["private-fields", "static", "acceso"]
enunciado: >
  Evalúa la siguiente afirmación:

  "Un campo privado declarado en una clase NO es accesible desde un método static de la misma clase."
respuesta: falso
tipo: vf
pasos:
  - "Analizar el alcance de `#campo`."
  - "Verificar si `static` cambia el contexto de `this`."
explicacion: Los campos privados (`#nombre`) están disponibles en toda la clase, incluyendo métodos estáticos, siempre que se accedan a través de `this` (en métodos estáticos, `this` es la clase, pero el acceso a campos privados estáticos requiere que el campo sea estático o que se use la sintaxis correcta de referencia. CORRECCIÓN: En JS actual, los campos privados NO son accesibles desde métodos estáticos directamente a menos que el campo sea `static #campo`. Si el campo es una instancia `#campo`, un método estático no tiene `this` de instancia. Sin embargo, la afirmación dice "NO es accesible". Si el campo es `static #privado`, sí es accesible. Si el campo es `#privado` (instancia), un método estático no puede acceder a él porque no hay instancia. Pero la afirmación general es demasiado amplia. Vamos a matizar: La afirmación es FALSA porque los campos privados SÍ son accesibles si son estáticos, o si el método estático recibe una instancia. Pero la regla estricta es: los campos privados de instancia no son accesibles desde métodos estáticos. Pero los campos privados ESTÁTICOS sí lo son. Por lo tanto, la afirmación "NO es accesible" es falsa en el caso de campos estáticos.
```

### 20 — Reflect API
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["Reflect", "trap", "proxy", "API"]
enunciado: >
  ¿Cuál es la ventaja principal de usar `Reflect.get(target, prop)` en un handler de Proxy en lugar de `target[prop]`?
opciones_explicitas:
  - "Es más rápido."
  - "Permite interceptar la operación de lectura de manera programática y retornar valores booleanos para validaciones."
  - "Devuelve el descriptor de la propiedad automáticamente."
  - "No requiere que `target` sea un objeto."
respuesta: Permite interceptar la operación de lectura de manera programática y retornar valores booleanos para validaciones.
tipo: mc
pasos:
  - "Analizar el propósito de Reflect."
  - "Reflect expone las operaciones internas de JS como funciones."
  - "Esto permite que los traps de Proxy devuelvan explícitamente el resultado de la operación interna, facilitando la lógica de validación."
explicacion: `Reflect` proporciona métodos que corresponden a las operaciones internas de JavaScript. En Proxies, usar `Reflect` asegura que el comportamiento sea idéntico al nativo y permite retornar explícitamente el resultado de la operación original (ej. `return Reflect.get(...)`).
```

### 21 — Inicialización de Propiedades Privadas
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["private", "initialization", "error"]
enunciado: >
  ¿Qué error se lanza si se intenta acceder a una propiedad privada (`#campo`) desde fuera de la clase que la declaró?
respuesta: SyntaxError
respuestas_validas:
  - "SyntaxError"
  - "Uncaught SyntaxError"
tipo: completar
pasos:
  - "Distinguir entre errores de runtime y de análisis (parse)."
  - "El acceso a privados no validados es un error de sintaxis en tiempo de parseo, no de ejecución."
explicacion: JavaScript valida el acceso a campos privados durante el análisis del código (parse time). Si el código se compila, significa que el acceso era válido sintácticamente. Si intentas acceder desde fuera, el parser lanza SyntaxError.
```

### 22 — Object.entries y Iteración
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["Object.entries", "array", "iteracion"]
enunciado: >
  `Object.entries(obj)` retorna un array de arrays. ¿Cuál es la estructura exacta de cada elemento interno?
respuesta: [clave, valor]
respuestas_validas:
  - "[clave, valor]"
  - "[key, value]"
  - "[propiedad, valor]"
tipo: completar
pasos:
  - "Consultar la documentación de Object.entries."
  - "Recordar que retorna un array de pares [key, value]."
explicacion: `Object.entries()` devuelve un array formado por pares `[clave, valor]` para cada propiedad enumerable y propia del objeto.
```

### 23 — Herencia de Clases con null
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["extends", "null", "prototipo"]
enunciado: >
  Evalúa la siguiente afirmación:

  "Una clase puede heredar de null usando `class A extends null {}`."
respuesta: falso
tipo: vf
pasos:
  - "Verificar la sintaxis de `extends`."
  - "Recordar que `extends` requiere un constructor o una función."
explicacion: `extends` requiere una expresión que sea una función constructora o una clase. `null` no es una función y no puede ser usado para herencia de prototipos de esta manera (aunque `Object.create(null)` crea un objeto sin prototipo, no se puede usar `extends null` en la sintaxis de clase).
```

### 24 — Getters y Setter con this
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["this", "getter", "setter", "contexto"]
enunciado: >
  Si un getter retorna una función, y esa función es llamada como método de la instancia (`obj.func()`), ¿qué representa `this` dentro de esa función retornada?
respuesta: obj
respuestas_validas:
  - "obj"
  - "la-instancia"
  - "the-instance"
tipo: completar
pasos:
  - "Analizar la vinculación de `this` en llamadas de método."
  - "Si la función es invocada como `obj.func()`, `this` es `obj`."
explicacion: La vinculación de `this` depende de cómo se llama la función. Si se llama como método de la instancia, `this` apunta a esa instancia, independientemente de que haya sido retornada por un getter.
```

### 25 — Object.preventExtensions
```
metadata:
  materia: "informatica"
  tema: "frontend-javascript-orientado-a-objetos"
  nivel: "avanzado"
  tags: ["preventExtensions", "propiedades", "agregado"]
enunciado: >
  ¿Qué impide `Object.preventExtensions(obj)` específicamente?
respuesta: agregar nuevas propiedades
respuestas_validas:
  - "agregar nuevas propiedades"
  - "agregar propiedades"
  - "nuevas propiedades"
tipo: completar
pasos:
  - "Distinguir entre `preventExtensions`, `freeze` y `seal`."
  - `preventExtensions` solo impide la adición de nuevas propiedades.
explicacion: `Object.preventExtensions` hace que el objeto no pueda recibir nuevas propiedades, pero permite eliminar y modificar propiedades existentes.
```