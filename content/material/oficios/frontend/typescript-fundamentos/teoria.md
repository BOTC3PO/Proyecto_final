# Frontend — TypeScript fundamentos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../javascript-orientado-a-objetos/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/frontend/typescript-fundamentos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es TypeScript

**TypeScript** es **JavaScript con tipos**: un lenguaje que agrega **tipos estáticos** y que se **compila (transpila)** a JavaScript. Los navegadores **no ejecutan** TypeScript: se convierte a `.js`.

**Para qué sirve:**

- Detectar **errores antes de ejecutar** (un `string` donde va un `number`).
- **Autocompletado** y **ayuda** del editor.
- **Documentar** el código con los propios tipos.
- Facilitar los **cambios** en proyectos grandes.

Los tipos **solo existen al compilar**: en ejecución **no se comprueban** (por eso hay que **validar** los datos externos).

```bash
npm install --save-dev typescript
npx tsc --init
npx tsc
```

---

## 2. Tipos básicos

```ts
let nombre: string = "Ana";
let edad: number = 15;
let activo: boolean = true;
let notas: number[] = [8, 9];
let par: [string, number] = ["Ana", 15];     // tupla
```

- **Inferencia:** muchas veces **no hace falta escribir** el tipo (`let n = 5` ya es `number`).
- **`any`**: **desactiva** la comprobación: **evitarlo**. **`unknown`**: "no sé el tipo"; **obliga a comprobarlo** antes de usarlo.
- **`void`** (función sin retorno), **`never`** (nunca retorna), **`null`** y **`undefined`**.
- **Uniones:** `string | number`.
- **Literales:** `"admin" | "alumno"`.
- **Opcional:** `edad?: number`.

---

## 3. Funciones

```ts
function sumar(a: number, b: number): number {
  return a + b;
}

const saludar = (nombre: string, saludo = "Hola"): string => `${saludo}, ${nombre}`;
```

- Se **tipan** los **parámetros** y el **valor de retorno**.
- **Parámetros opcionales:** `(x?: number)`; **por defecto**: `(x = 0)`.

---

## 4. Interfaces y tipos

Describen la **forma** de un objeto.

```ts
interface Alumno {
  id: number;
  nombre: string;
  correo?: string;                 // opcional
  readonly creado: Date;           // no se puede cambiar
}

type Rol = "admin" | "docente" | "alumno";
type Id = number | string;
```

- **`interface`**: ideal para **objetos** y se puede **extender** (`extends`).
- **`type`**: también para **uniones**, **literales** y **combinaciones**.
- **Estructural:** un objeto es compatible si **tiene la forma** pedida (no importa de qué clase venga).

---

## 5. Uniones y estrechamiento

```ts
function mostrar(valor: string | number) {
  if (typeof valor === "string") {
    return valor.toUpperCase();     // acá es string
  }
  return valor.toFixed(2);          // acá es number
}
```

El compilador **estrecha** el tipo según las comprobaciones (`typeof`, `instanceof`, `in`, igualdad).

---

## 6. Genéricos

Permiten escribir código **para varios tipos**, sin perder la comprobación.

```ts
function primero<T>(lista: T[]): T | undefined {
  return lista[0];
}
primero([1, 2, 3]);          // number
primero(["a", "b"]);         // string
```

Se usan en `Array<number>`, `Promise<Alumno>`, `Record<string, number>`.

---

## 7. Clases

```ts
class Cuenta {
  private saldo = 0;
  constructor(public titular: string) {}
  depositar(monto: number): void { this.saldo += monto; }
}
```

- **Modificadores:** `public`, `private`, `protected`, `readonly`.
- **Interfaces** que la clase **implementa** (`implements`).

---

## 8. Configuración y buenas prácticas

- **`strict: true`** en `tsconfig.json`: activa las comprobaciones **más útiles** (recomendado).
- **Evitar `any`**; usar `unknown` y **estrechar**.
- **Tipar los límites**: lo que **entra** y **sale** de una función.
- **Validar datos externos** (API, formularios) en ejecución, porque **los tipos no existen** en ese momento.
- **Aserciones** (`as`) **con cuidado**: le dicen al compilador "confiá en mí".
- **Los errores del compilador** son **ayuda**, no un obstáculo.
