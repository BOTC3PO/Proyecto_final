# Bash — Funciones (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../bucles-en-bash/` y `../../../informatica/funciones-y-modularidad/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/bash/funciones-en-bash/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Definir y llamar

Una **función** agrupa comandos con un nombre para reutilizarlos.

```bash
saludar() {
  echo "Hola, $1"
}

saludar "Ana"      # Hola, Ana
```

- Se define con `nombre() { ... }` (también existe `function nombre { ... }`).
- Se **llama escribiendo su nombre**, sin paréntesis, como si fuera un comando.
- Tiene que estar **definida antes** de que se la llame.
- Los **argumentos** llegan en `$1`, `$2`..., `$#` es la cantidad y `"$@"` son todos (como en un script).

---

## 2. Variables locales

Por defecto, las variables de Bash son **globales**: una función puede cambiar una variable del script sin querer. Con `local` queda **solo dentro de la función**:

```bash
contar() {
  local i=0      # solo existe acá
  ...
}
```

Conviene declarar con `local` todo lo que se use dentro de una función.

---

## 3. Devolver resultados: dos caminos

Una función de Bash **no puede devolver un texto con `return`**:

- `return N` devuelve un **código de salida** (0 a 255), que se lee en `$?`. Sirve para decir éxito (0) o error.
- Para **devolver un valor**, la función lo escribe con `echo` y quien llama lo captura con `$( )`.

```bash
es_par() { [ $(( $1 % 2 )) -eq 0 ]; }     # su código de salida es el resultado
if es_par 4; then echo "par"; fi

doble() { echo $(( $1 * 2 )); }
resultado=$(doble 5)                      # 10
```

Si no hay `return`, el código de salida es el del **último comando** ejecutado.

---

## 4. Buenas prácticas

- Un nombre que diga lo que hace (`respaldar_carpeta`, no `f1`).
- Validar los argumentos: `[ $# -eq 1 ] || { echo "Uso: $0 archivo"; return 1; }`.
- Usar `"$1"` entre comillas.
- Los **mensajes de error** se escriben en stderr: `echo "error" >&2`.
- Agrupar funciones en un archivo y cargarlo con `source funciones.sh` (o `. funciones.sh`).
- `declare -f` lista las funciones definidas y `unset -f nombre` borra una.
