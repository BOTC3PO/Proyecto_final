# Bash — Comillas y escapes (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../variables-en-bash/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/bash/comillas-en-bash/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Por qué importan las comillas

La shell **corta** lo que escribís en palabras, separándolas por espacios, y **reemplaza** ciertos símbolos (`$`, `*`, `~`) antes de ejecutar. Las comillas controlan las dos cosas.

---

## 2. Los tres tipos

| Forma | Qué hace | Ejemplo con `n=5` |
|:--|:--|:--|
| Sin comillas | corta en palabras y expande todo | `echo hola    mundo` → `hola mundo` |
| `"dobles"` | junta en una sola palabra, pero **sigue expandiendo** `$`, `` ` `` y `\` | `echo "n vale $n"` → `n vale 5` |
| `'simples'` | **todo es texto literal**, no expande nada | `echo 'n vale $n'` → `n vale $n` |

Regla práctica: usá **comillas dobles** casi siempre, y **simples** cuando quieras escribir un `$` o un `*` literal.

---

## 3. Espacios en nombres

Un archivo llamado `mis fotos` tiene un espacio. Sin comillas, `ls mis fotos` pide dos archivos (`mis` y `fotos`). Con comillas, `ls "mis fotos"` pide uno solo. Lo mismo vale para variables: `rm $archivo` se rompe si `archivo="mis fotos"`; **`rm "$archivo"` funciona**. Por eso se **cita siempre** la expansión: `"$variable"`.

---

## 4. Escapes con barra invertida

La barra invertida `\` le quita el significado especial al carácter que sigue:

- `echo \$5` muestra `$5` (el dólar queda literal).
- `echo "Dijo \"hola\""` muestra `Dijo "hola"`.
- `\ ` (barra y espacio) deja un espacio dentro de un nombre: `ls mis\ fotos`.
- Al final de una línea, `\` continúa el comando en la siguiente.

Dentro de comillas **simples** no se puede escapar nada; para incluir una comilla simple hay que cerrar, escaparla y volver a abrir (`'it'\''s'`) o usar comillas dobles.

---

## 5. Comillas y comandos

- `"$(date)"` guarda toda la salida como un solo argumento.
- `$'...'` interpreta secuencias como `\n` (salto de línea) y `\t` (tabulación): `echo $'a\tb'`.
- Los comodines (`*.txt`) **no se expanden** dentro de comillas: `ls "*.txt"` busca un archivo que se llame literalmente `*.txt`.
