# PSeInt — Variables y tipos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../sintaxis-y-pseudocodigo/`, `../../../informatica/variables-y-tipos-de-dato/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/pseint/variables-y-tipos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es una variable

Una **variable** es un **espacio de memoria con nombre** donde se guarda un dato que puede cambiar durante la ejecución. Tiene **nombre**, **tipo** y **valor**.

```
Definir edad Como Entero
edad <- 15
edad <- edad + 1      // ahora vale 16
```

**Reglas de los nombres:** empiezan con una **letra**, pueden tener letras, números y guion bajo, **sin espacios** ni signos; no pueden ser **palabras reservadas** (`Si`, `Para`, `Leer`). Se eligen nombres que **describan** el dato.

---

## 2. Tipos de datos

| Tipo | Qué guarda | Ejemplos |
|:--|:--|:--|
| **Entero** | números sin decimales | `5`, `-12`, `0` |
| **Real** | números con decimales | `3.14`, `-0.5` |
| **Caracter** (o **Cadena**) | texto | `"Hola"`, `"A"` |
| **Logico** | verdadero o falso | `Verdadero`, `Falso` |

El separador decimal es el **punto** (`3.5`, no `3,5`). El texto va **entre comillas**: `"5"` es un texto; `5` es un número.

```
Definir nombre Como Caracter
Definir precio Como Real
Definir activo Como Logico
```

---

## 3. Declarar o no declarar

- `Definir` **declara** el tipo de una variable. Es la buena práctica: el programa sabe cuánto espacio reservar y detecta errores.
- PSeInt permite **no declarar** (según el perfil configurado) y deduce el tipo del primer valor asignado, pero **declarar** evita ambigüedades (por ejemplo, un `Leer` ingresa un número y luego se usa como texto).
- Se pueden declarar varias del mismo tipo: `Definir a, b, c Como Entero`.

---

## 4. Constantes y acumuladores

- Una **constante** es un valor que **no cambia** (el IVA, el valor de π). Se escribe en una variable con nombre en lugar de repetir el número ("números mágicos").
- Un **contador** aumenta de a uno: `i <- i + 1`.
- Un **acumulador** suma valores: `total <- total + precio`.
- Un **bandera** (*flag*) es una variable lógica que avisa si algo ocurrió.

**Se inicializan:** hay que dar un valor inicial (`total <- 0`) antes de usarlas. Una variable sin valor puede dar errores o resultados raros.

---

## 5. Conversión y errores

- **Entero entre enteros:** `7 / 2` da **3.5** en PSeInt (la división siempre da real). Para el cociente entero se usa `TRUNC(7/2)`.
- **`CONVERTIRANUMERO("12")`** pasa un texto a número; **`CONVERTIRATEXTO(12)`** lo opuesto.
- **Errores comunes:** usar una variable sin definir, escribir mal el nombre, mezclar tipos (sumar texto y número), olvidar inicializar un acumulador, comparar con tipos distintos.

---

## 6. Mapa mental

Una variable es **una caja con etiqueta**: la etiqueta es el **nombre**, el tipo dice **qué cabe** en la caja y el valor es **lo que tiene adentro ahora**. Asignar es **reemplazar** el contenido: el valor viejo se pierde.
