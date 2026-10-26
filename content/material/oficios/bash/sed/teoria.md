# Bash — Edición de flujos con sed (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../grep/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/bash/sed/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es sed

`sed` (*stream editor*) lee texto **línea por línea**, aplica comandos de edición y escribe el resultado en la salida. **No modifica el archivo original** salvo que se use `-i`. Se usa para reemplazar texto, borrar líneas o mostrar solo algunas.

```bash
sed 's/gato/perro/' animales.txt
```

---

## 2. Sustituir: `s/buscar/reemplazar/`

| Comando | Hace |
|:--|:--|
| `s/a/b/` | reemplaza la **primera** a de cada línea |
| `s/a/b/g` | reemplaza **todas** (flag `g` = global) |
| `s/a/b/2` | reemplaza la **segunda** aparición |
| `s/a/b/I` | ignora mayúsculas (en GNU sed) |
| `s\|/usr\|/opt\|` | cambia el delimitador cuando el texto lleva `/` |

En el reemplazo, `&` es **todo lo que coincidió** (`s/[0-9]+/<&>/`) y `\1`, `\2` son los **grupos** entre paréntesis (`s/\(.*\)@\(.*\)/\2: \1/`). Con `-E` los paréntesis no se escapan.

---

## 3. Borrar, imprimir y direcciones

- `d` borra la línea; `p` la imprime. Con `-n` solo se muestra lo que se imprime con `p`.
- Una **dirección** limita dónde se aplica: un número de línea (`3d`), un rango (`2,4d`), la última línea (`$d`) o un patrón (`/error/d`).

```bash
sed '1d' datos.csv            # quita la primera línea (encabezado)
sed -n '5p' archivo           # muestra solo la línea 5
sed -n '2,4p' archivo         # muestra de la 2 a la 4
sed '/^#/d' config            # quita comentarios
sed '/^$/d' texto             # quita líneas vacías
```

---

## 4. Guardar los cambios

- `sed -i 's/a/b/' archivo` **modifica el archivo** (en GNU/Linux). En macOS hay que escribir `-i ''`.
- `sed -i.bak ...` hace antes una copia de respaldo `archivo.bak`.
- Con `-e` se encadenan varios comandos: `sed -e 's/a/b/' -e '/x/d'`.
- También se puede redirigir: `sed 's/a/b/' original > nuevo`.

**Siempre probá primero sin `-i`** para ver el resultado antes de cambiar el archivo.

---

## 5. Otros comandos útiles

`y/abc/xyz/` traduce carácter por carácter (a→x, b→y, c→z). `a texto` agrega una línea después; `i texto` antes; `c texto` reemplaza la línea. `s/^[ \t]*//` quita los espacios del comienzo de línea.
