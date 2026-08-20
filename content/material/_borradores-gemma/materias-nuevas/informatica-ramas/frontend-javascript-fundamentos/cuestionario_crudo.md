### 1 — Destructuring de arrays con rest
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["destructuring", "arrays", "rest"]
enunciado: "Al usar desestructuración de arrays en JavaScript, ¿cuál es el resultado de la variable `rest` en el siguiente código?"
codigo: |
  const numeros = [10, 20, 30, 40];
  const [primero, ...rest] = numeros;
respuesta: "[30, 40]"
tipo: completar
respuestas_validas:
  - "[30, 40]"
  - "[ 30 , 40 ]"
  - "[30,40]"
explicacion: "El operador rest (...) recoge todos los elementos restantes del array original en una nueva array. Al extraer los dos primeros (10 y 20), el resto es [30, 40]."
pasos:
  - "Identificar la sintaxis de desestructuración."
  - "Aplicar el operador rest al final de la lista de variables."
  - "Verificar que el resultado es un array con los elementos no asignados."
```

### 2 — Operador lógico OR corto (Short-circuit)
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["logica", "or", "default-values"]
enunciado: "¿Qué valor asigna la variable `config` en el siguiente fragmento?"
codigo: |
  const defaults = { theme: 'dark', lang: 'es' };
  const userPrefs = { theme: 'light' };
  const config = { ...defaults, ...userPrefs };
respuesta: "{ theme: 'light', lang: 'es' }"
tipo: completar
respuestas_validas:
  - "{ theme: 'light', lang: 'es' }"
  - "{theme: 'light', lang: 'es'}"
  - "{ theme: 'light',lang: 'es' }"
explicacion: "El spread operator (...) fusiona objetos. Los valores de `userPrefs` sobrescriben a los de `defaults` si hay claves duplicadas. `theme` se vuelve 'light', `lang` se mantiene 'es'."
pasos:
  - "Analizar la prioridad de propiedades en la fusión de objetos."
  - "Determinar qué clave se sobrescribe."
  - "Construir el objeto resultante."
```

### 3 — Promesas y estado inicial
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["promises", "async", "estado"]
enunciado: "Verdadero o Falso: Una Promise recién creada ejecuta inmediatamente su executor function (la función pasada al constructor) antes de que se adjunte cualquier `.then()`."
respuesta: verdadero
tipo: vf
explicacion: "El executor function se ejecuta síncronamente durante la creación de la Promise. El código en `.then()` se ejecuta asíncronamente cuando la Promise cambia de estado."
pasos:
  - "Reconocer la sintaxis `new Promise(executor)`."
  - "Recordar que el executor es síncrono."
  - "Confirmar que la ejecución ocurre antes de cualquier manipulación asíncrona."
```

### 4 — Arrow functions y `this` léxico
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["arrow-functions", "this", "scope"]
enunciado: "Completa el código para que `btn.handleClick` imprima 'Hola' en la consola sin errores de `this`."
codigo: |
  class Button {
    constructor() {
      this.msg = 'Hola';
      // Aquí va la implementación
    }
  }
  const btn = new Button();
  btn.handleClick();
respuesta: "handleClick = () => { console.log(this.msg); }"
tipo: completar
respuestas_validas:
  - "handleClick = () => { console.log(this.msg); }"
  - "handleClick: () => { console.log(this.msg); }"
  - "handleClick() => { console.log(this.msg); }"
explicacion: "Las arrow functions no tienen su propio `this`, heredan el `this` del contexto léxico donde fueron definidas (en este caso, el constructor de la clase). Usar una función regular `handleClick()` haría que `this` fuera undefined o el botón en sí, dependiendo del modo estricto."
pasos:
  - "Detectar el problema potencial de `this` en métodos de clase."
  - "Seleccionar la sintaxis de arrow function para preservar el contexto."
  - "Implementar el método correctamente."
```

### 5 — Iteración con `for...of` vs `forEach`
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["loops", "break", "arrays"]
enunciado: "¿Cuál es la salida del siguiente código?"
codigo: |
  const arr = [1, 2, 3, 4];
  for (const num of arr) {
    if (num === 3) break;
    console.log(num);
  }
respuesta: "1\n2"
tipo: completar
respuestas_validas:
  - "1\n2"
  - "1, 2"
  - "1 2"
  - "1\n 2"
explicacion: "El bucle `for...of` permite usar `break` para salir del loop inmediatamente. Cuando `num` es 3, el loop termina, por lo que 3 y 4 nunca se imprimen."
pasos:
  - "Simular la ejecución iterativa del bucle."
  - "Identificar el punto de ruptura (`break`)."
  - "Listar los valores impresos antes de la ruptura."
```

### 6 — `Object.freeze` y inmutabilidad
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["objetos", "inmutabilidad", "freeze"]
enunciado: "Verdadero o Falso: `Object.freeze(obj)` impide la modificación de propiedades anidadas (objetos dentro del objeto) si no se usa recursivamente."
respuesta: verdadero
tipo: vf
explicacion: "Object.freeze es una inmutabilidad superficial (shallow). Si una propiedad contiene un objeto, ese objeto interno sigue siendo mutable. Se requiere una inmutabilidad profunda para bloquear toda la estructura."
pasos:
  - "Analizar el alcance de `Object.freeze`."
  - "Verificar si las propiedades son primitivas o referencias."
  - "Concluir que las referencias internas no se congelan automáticamente."
```

### 7 — `Map` vs Objeto literal para claves
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["map", "claves", "objetos"]
enunciado: "Completa la palabra clave que permite usar un Objeto como clave en un `Map`."
codigo: |
  const keyObj = { id: 1 };
  const myMap = new Map();
  myMap.set(___, "valor");
respuesta: "keyObj"
tipo: completar
respuestas_validas:
  - "keyObj"
  - "keyObj,"
explicacion: "A diferencia de los objetos literales que convierten las claves a strings, `Map` permite usar cualquier valor (incluyendo objetos) como clave, manteniendo la referencia original."
pasos:
  - "Identificar la necesidad de usar un objeto como clave."
  - "Seleccionar la estructura de datos adecuada (`Map`)."
  - "Escribir la variable que contiene el objeto clave."
```

### 8 — `setTimeout` y el Event Loop
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["event-loop", "setTimeout", "asincronia"]
enunciado: "¿Qué se imprime primero en la consola?"
codigo: |
  console.log('A');
  setTimeout(() => console.log('B'), 0);
  console.log('C');
respuesta: "A"
tipo: completar
respuestas_validas:
  - "A"
  - "A\n"
explicacion: "El primer log es síncrono. `setTimeout` se coloca en la cola de macros (macrotask queue). El segundo log síncrono se ejecuta inmediatamente después. 'B' solo se ejecuta después de que la pila de ejecución esté vacía y el evento loop procese la cola."
pasos:
  - "Ejecutar código síncrono en orden."
  - "Registrar el callback de `setTimeout` en la cola."
  - "Determinar el orden de impresión de los logs síncronos."
```

### 9 — `Promise.all` con fallos
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["promises", "all", "error-handling"]
enunciado: "¿Qué método de Promise se debe usar si se desea que el proceso continúe incluso si una de las promesas falla?"
opciones_explicitas:
  - "Promise.all"
  - "Promise.allSettled"
  - "Promise.race"
  - "Promise.any"
respuesta: "Promise.allSettled"
tipo: mc
explicacion: "`Promise.all` falla rápido (fails fast) si una promesa se rechaza. `Promise.allSettled` espera a que todas se resuelvan o rechacen y devuelve un array de resultados, permitiendo manejar fallos individuales sin detener el flujo."
pasos:
  - "Analizar el comportamiento de `Promise.all` ante errores."
  - "Identificar la necesidad de tolerancia a fallos."
  - "Seleccionar `Promise.allSettled` como la solución adecuada."
```

### 10 — `WeakMap` y recolección de basura
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["weakmap", "memoria", "gc"]
enunciado: "Verdadero o Falso: Las claves de un `WeakMap` son recolectadas por el garbage collector si no hay referencias externas a ellas."
respuesta: verdadero
tipo: vf
explicacion: "Un `WeakMap` mantiene referencias 'débiles' a sus claves. Si el objeto clave pierde todas las referencias externas en el código, el GC puede eliminarlo, liberando la memoria asociada al par clave-valor."
pasos:
  - "Definir la propiedad 'débil' de las referencias."
  - "Relacionar la ausencia de referencias externas con el GC."
  - "Confirmar que el par se elimina del WeakMap."
```

### 11 — `try...catch` en async/await
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["async-await", "errores", "try-catch"]
enunciado: "Completa el bloque para capturar el error de la promesa rechazada."
codigo: |
  async function fetchData() {
    try {
      const data = await promiseThatFails();
    } catch (___) {
      console.log('Error capturado');
    }
  }
respuesta: "err"
tipo: completar
respuestas_validas:
  - "err"
  - "error"
  - "e"
  - "ex"
  - "err,"
explicacion: "En un bloque `try...catch` dentro de una función `async`, los errores de promesas rechazadas se capturan en la variable del parámetro del `catch`. El nombre de la variable es arbitrario, pero `err` o `error` son convenciones comunes."
pasos:
  - "Identificar la estructura de manejo de errores síncrono en async."
  - "Rellenar el parámetro del catch."
  - "Asegurar que la sintaxis sea válida."
```

### 12 — `Object.keys` vs `for...in`
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["iteracion", "propiedades", "prototype"]
enunciado: "¿Qué método devuelve solo las propiedades propias enumerables de un objeto, ignorando la cadena de prototipos?"
opciones_explicitas:
  - "Object.keys()"
  - "Object.getOwnPropertyNames()"
  - "Reflect.ownKeys()"
  - "Object.entries()"
respuesta: "Object.keys()"
tipo: mc
explicacion: "`Object.keys()` devuelve un array de las propiedades propias enumerables. `Object.getOwnPropertyNames` incluye las no enumerables. `Reflect.ownKeys` incluye símbolos. `for...in` recorre la cadena de prototipos."
pasos:
  - "Comparar los métodos de introspección de objetos."
  - "Filtrar por 'propias' y 'enumerables'."
  - "Seleccionar `Object.keys()`."
```

### 13 — `Symbol` para claves únicas
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["symbol", "unicidad", "claves"]
enunciado: "Verdadero o Falso: Dos símbolos creados con `Symbol('key')` son iguales entre sí."
respuesta: falso
tipo: vf
explicacion: "Cada llamada a `Symbol()` crea un valor único, incluso si se pasa el mismo descriptor (string). `Symbol('key') === Symbol('key')` es `false`. Para compartir símbolos, se usa `Symbol.for()`."
pasos:
  - "Analizar la naturaleza de los símbolos."
  - "Verificar la igualdad de instancias creadas por `Symbol()`."
  - "Confirmar que son únicos."
```

### 14 — `Array.prototype.flat`
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["arrays", "flat", "anidacion"]
enunciado: "¿Qué devuelve `[1, [2, [3]]].flat(2)`?"
opciones_explicitas:
  - "[1, 2, 3]"
  - "[1, 2, [3]]"
  - "[1, [2, 3]]"
  - "Error de tipo"
respuesta: "[1, 2, 3]"
tipo: mc
explicacion: "El argumento de `flat()` especifica la profundidad de anidación a aplanar. `flat(1)` aplanaría un nivel. `flat(2)` aplanará dos niveles, resultando en un array unidimensional `[1, 2, 3]`."
pasos:
  - "Identificar la profundidad del array original."
  - "Aplicar el nivel de aplanamiento especificado."
  - "Determinar el resultado final."
```

### 15 — `Intl.NumberFormat`
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["i18n", "number-formatting", "intl"]
enunciado: "Completa el código para formatear el número 1234.56 como moneda en español de España."
codigo: |
  const number = 1234.56;
  const formatter = new Intl.NumberFormat(____, { style: 'currency', currency: 'EUR' });
respuesta: "'es-ES'"
tipo: completar
respuestas_validas:
  - "'es-ES'"
  - "es-ES"
  - "\"es-ES\""
explicacion: "El primer argumento de `Intl.NumberFormat` es el locale. Para español de España, el código correcto es 'es-ES'."
pasos:
  - "Identificar la API de internacionalización."
  - "Especificar el código de idioma y país correcto."
  - "Aplicar el formato de moneda."
```

### 16 — `WeakRef` y `FinalizationRegistry`
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["weakref", "registro", "limpieza"]
enunciado: "¿Qué objeto se usa para registrar una callback que se ejecuta cuando un objeto referenciado por un `WeakRef` es recolectado?"
opciones_explicitas:
  - "FinalizationRegistry"
  - "WeakMap"
  - "WeakSet"
  - "WeakRef"
respuesta: "FinalizationRegistry"
tipo: mc
explicacion: "`FinalizationRegistry` permite definir una función de limpieza que se ejecuta cuando el objeto referenciado por un `WeakRef` es eliminado por el GC. `WeakRef` solo mantiene la referencia débil."
pasos:
  - "Diferenciar entre mantener referencia débil y ejecutar limpieza."
  - "Identificar la clase responsable del registro de finalización."
  - "Seleccionar `FinalizationRegistry`."
```

### 17 — `Array.prototype.reduce` acumulador
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["reduce", "acumulacion", "arrays"]
enunciado: "¿Cuál es el valor inicial del acumulador en `[1, 2, 3].reduce((acc, val) => acc + val, 10)`?"
respuesta: "10"
tipo: completar
respuestas_validas:
  - "10"
  - "10,"
explicacion: "El segundo argumento de `reduce` es el valor inicial del acumulador. Si se omite, el primer elemento del array se usa como inicial y el segundo como primer valor. Aquí se especifica explícitamente 10."
pasos:
  - "Identificar la firma de `reduce`."
  - "Localizar el argumento de valor inicial."
  - "Extraer el valor numérico."
```

### 18 — `Proxy` y `Reflect`
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["proxy", "reflect", "metaprogramacion"]
enunciado: "Verdadero o Falso: Es recomendable usar `Reflect.get()` dentro de un handler `get` de un Proxy para preservar el comportamiento predeterminado de obtención de propiedades."
respuesta: verdadero
tipo: vf
explicacion: "Usar `Reflect.get(target, prop, receiver)` dentro del handler asegura que la operación de obtención se realice correctamente, respetando la cadena de prototipos y el contexto `this` (receiver), similar a cómo funciona el acceso directo a propiedades."
pasos:
  - "Analizar el propósito de los handlers de Proxy."
  - "Verificar la utilidad de `Reflect` para delegar operaciones."
  - "Confirmar la recomendación de buenas prácticas."
```

### 19 — `Map` vs `Object` para contadores
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["map", "performance", "contadores"]
enunciado: "Completa la palabra clave para crear un nuevo mapa vacío."
codigo: |
  const counts = new ___();
respuesta: "Map"
tipo: completar
respuestas_validas:
  - "Map"
  - "map"
explicacion: "La clase constructora para mapas en JavaScript es `Map` (con mayúscula inicial). Se usa `new Map()` para instanciar un nuevo objeto mapa."
pasos:
  - "Identificar la necesidad de una colección clave-valor."
  - "Seleccionar la clase constructora adecuada."
  - "Escribir el nombre de la clase."
```

### 20 — `Array.isArray` vs `typeof`
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["tipos", "arrays", "verificacion"]
enunciado: "¿Qué devuelve `typeof []`?"
respuesta: "'object'"
tipo: completar
respuestas_validas:
  - "'object'"
  - "object"
  - "\"object\""
explicacion: "En JavaScript, los arrays son objetos. `typeof` no distingue entre arrays y objetos planos, devolviendo siempre 'object' para ambos. Se debe usar `Array.isArray()` para verificar específicamente arrays."
pasos:
  - "Evaluar el tipo de un array literal."
  - "Recordar la naturaleza de los arrays como objetos."
  - "Determinar la cadena devuelta por `typeof`."
```

### 21 — `Promise.race`
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["promises", "race", "primero"]
enunciado: "¿Qué devuelve `Promise.race([p1, p2])`?"
opciones_explicitas:
  - "La primera promesa que se resuelva o rechace"
  - "Un array con los resultados de todas"
  - "Una promesa que espera a todas"
  - "El valor de la promesa más rápida en resolverse"
respuesta: "La primera promesa que se resuelva o rechace"
tipo: mc
explicacion: "`Promise.race` devuelve una promesa que se resuelve o rechaza tan pronto como una de las promesas del iterable se resuelve o rechaza. El valor o razón es el de esa primera promisa."
pasos:
  - "Definir el comportamiento de `race`."
  - "Identificar que depende de la primera resolución/rechazo."
  - "Seleccionar la opción que refleja este comportamiento."
```

### 22 — `String.prototype.replaceAll`
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["strings", "replaceAll", "regex"]
enunciado: "Completa el método para reemplazar todas las ocurrencias de 'a' por 'b' en 'banana'."
codigo: |
  'banana'.___('a', 'b');
respuesta: "replaceAll"
tipo: completar
respuestas_validas:
  - "replaceAll"
  - "replaceAll,"
explicacion: "El método `replaceAll` reemplaza todas las instancias de una cadena o expresión regular en un string. Es la alternativa moderna a `replace` con banderas globales en regex."
pasos:
  - "Identificar la necesidad de reemplazo global."
  - "Seleccionar el método específico de string."
  - "Escribir el nombre del método."
```

### 23 — `Set` para eliminar duplicados
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["set", "duplicados", "arrays"]
enunciado: "¿Cuál es la forma más concisa de eliminar duplicados de un array `[1, 2, 2, 3]`?"
opciones_explicitas:
  - "[...new Set([1, 2, 2, 3])]"
  - "[1, 2, 3]"
  - "Set([1, 2, 2, 3])"
  - "[1, 2, 2, 3].unique()"
respuesta: "[...new Set([1, 2, 2, 3])]"
tipo: mc
explicacion: "Un `Set` solo almacena valores únicos. Al pasar un array a `new Set()`, se eliminan duplicados. El spread operator `[... ]` convierte el Set de vuelta a un array."
pasos:
  - "Identificar la estructura de datos que garantiza unicidad."
  - "Aplicar el constructor `Set` al array."
  - "Convertir el resultado a array con spread."
```

### 24 — `Object.entries` y bucle
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["entries", "bucle", "objetos"]
enunciado: "Verdadero o Falso: `Object.entries()` devuelve un array de pares [clave, valor] para un objeto."
respuesta: verdadero
tipo: vf
explicacion: "El método `Object.entries()` devuelve un array de sus propias propiedades enumerables en el formato `[key, value]`, similar a `for...in` pero en forma de array iterable."
pasos:
  - "Definir la salida de `Object.entries`."
  - "Verificar el formato de cada elemento."
  - "Confirmar que son pares clave-valor."
```

### 25 — `Symbol.iterator` personalizado
```yaml
metadata:
  materia: "informatica"
  tema: "frontend-javascript-fundamentos"
  nivel: "avanzado"
  tags: ["iterables", "symbol", "custom"]
enunciado: "Completa la clave para hacer un objeto iterable en JavaScript."
codigo: |
  const myObj = {
    [Symbol._____]() {
      return { next: () => ({ done: true, value: undefined }) };
    }
  };
respuesta: "iterator"
tipo: completar
respuestas_validas:
  - "iterator"
  - "iterator,"
explicacion: "Para que un objeto sea iterable, debe tener una propiedad con la clave `Symbol.iterator`. Esta propiedad debe ser una función que devuelva un objeto iterador con un método `next`."
pasos:
  - "Identificar el requisito de iterabilidad."
  - "Seleccionar el símbolo correcto."
  - "Escribir el nombre de la propiedad del símbolo."
```