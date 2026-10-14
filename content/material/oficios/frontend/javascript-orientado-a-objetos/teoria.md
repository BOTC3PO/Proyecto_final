# Frontend — JavaScript orientado a objetos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../javascript-fundamentos/`, `../../../informatica/poo-clases-y-objetos/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/frontend/javascript-orientado-a-objetos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Objetos en JavaScript

Un **objeto** agrupa **datos** (propiedades) y **comportamiento** (métodos) bajo una misma identidad.

```js
const alumno = {
  nombre: "Ana",
  notas: [8, 9],
  promedio() {
    return this.notas.reduce((a, b) => a + b, 0) / this.notas.length;
  }
};
alumno.promedio();      // 8,5
```

- **Propiedades:** `alumno.nombre` o `alumno["nombre"]`.
- **Métodos:** funciones dentro del objeto.
- **`this`** apunta al **objeto sobre el que se llama** el método.
- Se puede **agregar** o **borrar** propiedades (`delete alumno.edad`).
- Las **claves** son textos; los **valores**, de cualquier tipo.

**Copiar:** asignar un objeto a otra variable **no lo copia** (ambas apuntan al **mismo** objeto). Para una copia superficial: `{ ...alumno }`; para una **profunda**: `structuredClone(alumno)`.

---

## 2. Clases

La **clase** es una **plantilla** para crear objetos del mismo tipo (**instancias**).

```js
class Alumno {
  constructor(nombre, notas = []) {
    this.nombre = nombre;
    this.notas = notas;
  }

  agregarNota(n) {
    this.notas.push(n);
  }

  get promedio() {
    return this.notas.reduce((a, b) => a + b, 0) / this.notas.length;
  }
}

const ana = new Alumno("Ana", [8, 9]);
ana.agregarNota(10);
ana.promedio;     // 9
```

- **`constructor`**: se ejecuta al crear la instancia con **`new`**.
- **Métodos** de la clase: se comparten entre las instancias (están en el **prototipo**).
- **`get` / `set`**: acceso como si fueran propiedades.
- Las **clases** de JavaScript son una **sintaxis cómoda** sobre el sistema de **prototipos**.

---

## 3. Herencia

Una clase **hija** **extiende** a una **madre** y **reutiliza** lo suyo.

```js
class Persona {
  constructor(nombre) { this.nombre = nombre; }
  saludar() { return `Hola, soy ${this.nombre}`; }
}

class Docente extends Persona {
  constructor(nombre, materia) {
    super(nombre);              // llama al constructor de Persona
    this.materia = materia;
  }
  saludar() {
    return `${super.saludar()} y enseño ${this.materia}`;
  }
}
```

- **`extends`** indica la herencia; **`super`** accede a la clase madre.
- **Sobrescribir** un método: la hija define uno con el mismo nombre.
- **Polimorfismo:** objetos de distintas clases responden al **mismo mensaje** a su manera.
- **Preferir composición:** muchas veces conviene **armar** objetos con partes en vez de crear jerarquías profundas.

---

## 4. Encapsulamiento

Ocultar los **detalles internos** y exponer solo lo necesario.

```js
class Cuenta {
  #saldo = 0;                       // propiedad privada
  depositar(monto) {
    if (monto <= 0) throw new Error("Monto inválido");
    this.#saldo += monto;
  }
  get saldo() { return this.#saldo; }
}
```

- **`#nombre`**: miembro **privado** (solo accesible dentro de la clase).
- **Validar** en los métodos que cambian el estado.
- **Estáticos:** `static` pertenece a la **clase**, no a las instancias.

---

## 5. Prototipos

Cada objeto tiene un **prototipo**: otro objeto al que **delega** lo que no encuentra. Así funciona la herencia en JavaScript: **cadena de prototipos**. `Object.create(...)` y `Object.getPrototypeOf(...)` operan sobre ella.

---

## 6. El problema de `this`

El valor de `this` **depende de cómo se llama** la función:

```js
const f = ana.agregarNota;
f(5);              // error: this ya no es ana
```

Soluciones: **funciones flecha** (conservan el `this` del contexto), `bind`, o llamar siempre con el objeto. En los **eventos**, `this` puede ser el elemento: las **flechas** evitan sorpresas.

---

## 7. Cuándo usar clases

- Para **modelar entidades** con estado y comportamiento (un carrito, una cuenta).
- Cuando hay **varias instancias** similares.
- Para **componentes** de interfaz y bibliotecas.
- **No hace falta** una clase para todo: a veces alcanza **una función** o **un objeto simple**.

---

## 8. Buenas prácticas

- **Una clase, una responsabilidad.**
- **Nombres** de clases en `PascalCase`.
- **Evitar herencias profundas.**
- **No exponer** el estado interno.
- **Pruebas** de los métodos principales.
