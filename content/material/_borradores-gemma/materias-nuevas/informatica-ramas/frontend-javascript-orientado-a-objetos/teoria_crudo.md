# Programación Orientada a Objetos en JavaScript: Más allá de los Clásicos

JavaScript ha recorrido un largo camino desde sus inicios como un lenguaje de scripts simples para navegadores. Hoy, en el desarrollo frontend moderno, la Programación Orientada a Objetos (POO) es fundamental para estructurar aplicaciones complejas, mantener la escalabilidad y facilitar la colaboración en equipos grandes. Aunque JavaScript es un lenguaje basado en prototipos, la sintaxis de clases introducida en ES6 (ECMAScript 2015) ofrece una capa de abstracción familiar para desarrolladores de otros paradigmas, ocultando la complejidad del *prototype chain* bajo una sintaxis más limpia.

### La sintaxis de clases y sus mecanismos internos

En JavaScript, una `class` es esencialmente un "azúcar sintáctico" sobre las funciones constructoras y el sistema de prototipos. Cuando defines una clase, no estás creando una estructura de datos rígida como en Java o C++, sino una función especial con propiedades específicas.

```javascript
class Animal {
  // Propiedad estática: pertenece a la clase, no a las instancias
  static especies = 0;

  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
    Animal.especies++;
  }

  // Método de instancia
  hablar() {
    return `${this.nombre} hace un sonido.`;
  }

  // Getter y Setter para encapsulamiento básico
  get info() {
    return `${this.nombre} (${this.especie})`;
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre, 'Canino'); // Llama al constructor de la clase padre
    this.raza = raza;
  }

  hablar() {
    // Sobrescritura de método (polimorfismo)
    return '¡Guau!';
  }
}

const max = new Perro('Max', 'Labrador');
console.log(max.hablar()); // "¡Guau!"
console.log(Animal.especies); // 1
```

Es crucial entender que `extends` no crea una copia del código padre, sino que establece una cadena de prototipos. Esto permite la herencia de métodos pero también implica que las modificaciones en el prototipo de la clase padre pueden afectar a todas las subclases.

### Errores comunes en el nivel avanzado

1.  **Confundir `this` en métodos Arrow:** Los métodos definidos con sintaxis de flecha (`() => {}`) dentro de una clase no tienen su propio `this`; heredan el `this` del ámbito léxico donde se definen. Esto rompe la expectativa de que `this` apunte a la instancia de la clase.
2.  **Uso indiscriminado de propiedades privadas (`#`):** Aunque ES2022 introdujo el prefijo `#` para propiedades privadas reales, usarlo excesivamente puede dificultar la legibilidad y la depuración, ya que estas propiedades no aparecen en las inspecciones estándar del navegador ni son enumerables. Úsalas solo cuando el encapsulamiento sea crítico para la integridad del estado.
3.  **Herencia profunda innecesaria:** Crear cadenas de herencia muy largas (más de 3-4 niveles) hace que el código sea frágil y difícil de mantener. En JavaScript, la composición a menudo es superior a la herencia.

### ¿Cuándo usar POO y cuándo evitarla?

**Usa clases cuando:**
*   Necesitas crear múltiples objetos con estado similar y comportamiento común.
*   El dominio del problema se modela bien con entidades discretas (ej. Usuarios, Pedidos, Productos en un e-commerce).
*   Trabajas con librerías o frameworks que esperan instancias específicas (ej. React Hooks a menudo trabajan con clases en componentes legacy, aunque el estándar actual favorece funciones).

**Evita o reconsidera las clases cuando:**
*   El objeto es simplemente un contenedor de datos (DTO). Usa objetos literales (`{}`) o `Record` en TypeScript.
*   Buscas máxima flexibilidad y composición dinámica. Las funciones de orden superior y la programación funcional suelen ser más idiomáticas y fáciles de probar.
*   El rendimiento crítico requiere evitar la sobrecarga de instanciación de clases (aunque en motores modernos V8, la diferencia es mínima para la mayoría de casos).

### Ejemplo extendido: Sistema de Gestión de Tareas con POO y Composición

Imagina una aplicación de productividad donde las tareas pueden tener prioridades, fechas de vencimiento y estados. En lugar de una clase monolítica, usemos POO combinada con composición para mantener la cohesión.

```javascript
// Clase base para validación de estado
class EstadoBase {
  constructor(estado) {
    this.estado = estado;
  }
  
  validarNuevoEstado(nuevoEstado) {
    // Lógica de transición de estado
    return true; 
  }
}

// Módulo de notificaciones (composición)
const Notificador = {
  enviar(mensaje) {
    console.log(`[NOTIFICACIÓN]: ${mensaje}`);
  }
};

class Tarea {
  #id;
  #estado;
  #prioridad;

  constructor(id, titulo, prioridad = 'media') {
    this.#id = id;
    this.titulo = titulo;
    this.#prioridad = prioridad;
    this.#estado = new EstadoBase('pendiente');
  }

  // Método que utiliza composición para notificar
  avanzarEstado(nuevoEstado) {
    if (this.#estado.validarNuevoEstado(nuevoEstado)) {
      const mensaje = `Tarea ${this.#id} cambió a ${nuevoEstado}`;
      Notificador.enviar(mensaje);
      this.#estado = new EstadoBase(nuevoEstado);
    }
  }

  get prioridad() {
    return this.#prioridad;
  }

  set prioridad(valor) {
    if (['baja', 'media', 'alta'].includes(valor)) {
      this.#prioridad = valor;
    }
  }
}

// Uso en contexto
const tarea1 = new Tarea(101, 'Actualizar base de datos', 'alta');
tarea1.avanzarEstado('en_progreso');
tarea1.prioridad = 'critica'; // Setters para validación
```

Este patrón permite que la lógica de transición de estado y la notificación estén desacopladas de la entidad `Tarea`, facilitando pruebas unitarias y mantenimiento futuro. La POO en JavaScript, cuando se usa con discernimiento, proporciona una estructura sólida sin sacrificar la flexibilidad que hace de JS un lenguaje tan versátil.