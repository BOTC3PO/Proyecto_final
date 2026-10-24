# Frontend — JavaScript fundamentos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../css-y-maquetacion/`, `../../../informatica/estructuras-de-control-condicionales/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/frontend/javascript-fundamentos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es JavaScript

**JavaScript** es el lenguaje de **programación de la web**: da **comportamiento** a las páginas (responder a clics, validar, cambiar el contenido). Se ejecuta en el **navegador** y también en servidores (**Node.js**). No tiene relación con Java.

Se incluye con `<script src="app.js" defer></script>` (`defer`: se ejecuta cuando el HTML ya está cargado).

---

## 2. Variables y tipos

```js
const nombre = "Ana";     // no se reasigna
let edad = 15;            // se puede reasignar
edad = edad + 1;
```

- **`const`**: valor que **no se reasigna** (preferirlo). **`let`**: variable que cambia. **Evitar `var`** (tiene reglas de alcance confusas).
- **Tipos primitivos:** `string` (texto), `number` (números), `boolean` (`true`/`false`), `undefined`, `null`, `bigint`, `symbol`.
- **Objetos y arreglos** son tipos de **referencia**.
- `typeof` indica el tipo.
- Los **nombres** usan `camelCase`.

---

## 3. Operadores

- Aritméticos: `+ - * / % **`.
- **Comparación:** usar **`===`** y **`!==`** (igualdad **estricta**: compara valor **y tipo**). `==` convierte tipos y da resultados sorpresivos (`"5" == 5` es `true`).
- Lógicos: `&&` (y), `||` (o), `!` (no).
- **Texto:** `+` concatena; las **plantillas** con comillas invertidas son más claras:

```js
const saludo = `Hola, ${nombre}. Tenés ${edad} años.`;
```

- **Cuidado:** `"5" + 3` da `"53"`; `"5" - 3` da `2`.
- **Valores "falsos"** (*falsy*): `false`, `0`, `""`, `null`, `undefined`, `NaN`. El resto es "verdadero".

---

## 4. Control de flujo

```js
if (edad >= 18) {
  console.log("Mayor");
} else if (edad >= 13) {
  console.log("Adolescente");
} else {
  console.log("Menor");
}

for (let i = 0; i < 5; i++) { console.log(i); }

let n = 3;
while (n > 0) { n--; }
```

- **`switch`** para varios casos.
- **Operador ternario:** `const estado = edad >= 18 ? "mayor" : "menor";`.
- `for...of` recorre los **elementos** de un arreglo; `for...in` las **claves** de un objeto.

---

## 5. Funciones

```js
function sumar(a, b) {
  return a + b;
}

const doble = (n) => n * 2;     // función flecha
```

- **Parámetros** (lo que recibe) y **valor de retorno** (`return`).
- **Funciones flecha**: forma corta.
- **Valores por defecto:** `function saludar(nombre = "amigo")`.
- Las funciones **son valores**: se pueden guardar en variables y **pasar a otras funciones** (*callbacks*).
- **Alcance:** una variable declarada **dentro** de una función no existe fuera de ella.

---

## 6. Arreglos y objetos

```js
const notas = [8, 6, 9];
notas.push(7);                        // agrega al final
notas.length;                         // 4

const alumno = { nombre: "Ana", edad: 15 };
alumno.edad;                          // 15
alumno["nombre"];
```

**Métodos de arreglos** muy usados:

| Método | Hace |
|:--|:--|
| `map(f)` | **transforma** cada elemento y devuelve un arreglo nuevo |
| `filter(f)` | **se queda** con los que cumplen la condición |
| `reduce(f, inicial)` | **acumula** en un solo valor |
| `find(f)` | **primer** elemento que cumple |
| `forEach(f)` | **ejecuta** algo para cada uno |
| `includes(x)` | ¿contiene `x`? |
| `sort()` | ordena (por defecto, **como texto**) |

```js
const aprobadas = notas.filter(n => n >= 6);
const dobles = notas.map(n => n * 2);
```

---

## 7. El DOM y los eventos

El **DOM** es la **representación en objetos** de la página; con JavaScript se **lee y modifica**.

```js
const boton = document.querySelector("#guardar");
boton.addEventListener("click", () => {
  document.querySelector("#mensaje").textContent = "¡Guardado!";
});
```

- **`querySelector`** elige elementos con un selector CSS.
- **`textContent`** cambia el **texto** (seguro); **`innerHTML`** inserta **HTML** y, con **datos de usuarios**, **permite ataques XSS**: **evitarlo**.
- **Eventos:** `click`, `input`, `submit`, `keydown`... Con `event.preventDefault()` se **evita** el comportamiento por defecto (por ejemplo, enviar un formulario).

---

## 8. Asincronía y errores

- **JavaScript** ejecuta una cosa a la vez; las tareas lentas (red, temporizadores) son **asíncronas**.
- **`fetch`** pide datos a una API y devuelve una **promesa**; se usa con **`async/await`**:

```js
async function cargar() {
  try {
    const respuesta = await fetch("/api/alumnos");
    if (!respuesta.ok) throw new Error("Error " + respuesta.status);
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.error(error);
  }
}
```

- `try/catch` captura **errores**; **comprobar** `respuesta.ok`.
- **Consola del navegador** (F12): ver mensajes y errores.

---

## 9. Buenas prácticas

- **`const` por defecto**, `===`, **nombres claros**, **funciones pequeñas**.
- **No confiar en los datos** que llegan del usuario.
- Evitar **variables globales**.
- **Depurar** con `console.log` y el **depurador** del navegador.
