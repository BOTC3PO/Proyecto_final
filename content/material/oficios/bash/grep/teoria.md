# Bash — Búsqueda de texto con grep (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../pipes-y-redirecciones/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/bash/grep/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué hace grep

`grep` recorre líneas de texto y **muestra las que coinciden con un patrón**. Su nombre viene de *global regular expression print*.

```bash
grep "error" servidor.log        # líneas que contienen "error"
cat servidor.log | grep error    # lo mismo, desde una tubería
```

Se puede dar uno o varios archivos, o leer de la entrada estándar. **Escribí el patrón entre comillas** para que la shell no lo interprete.

---

## 2. Opciones más usadas

| Opción | Hace |
|:--|:--|
| `-i` | ignora mayúsculas y minúsculas |
| `-v` | **invierte**: muestra las líneas que NO coinciden |
| `-n` | muestra el número de línea |
| `-c` | cuenta las líneas que coinciden (no las muestra) |
| `-r` | busca en subcarpetas (recursivo) |
| `-l` | muestra solo los **nombres de archivo** con coincidencias |
| `-w` | coincide con palabras completas |
| `-o` | muestra solo la parte que coincide |
| `-A n` / `-B n` / `-C n` | muestra n líneas **después** / **antes** / **alrededor** |
| `-F` | patrón de texto fijo, sin interpretar símbolos |
| `-q` | silencioso: no muestra nada, solo devuelve el código de salida |
| `-E` | usa expresiones regulares extendidas |

```bash
grep -rn "TODO" proyecto/        # todos los TODO, con archivo y línea
grep -c "ERROR" servidor.log     # cuántas líneas tienen ERROR
grep -v "^#" config.conf         # sin los comentarios
```

---

## 3. Expresiones regulares básicas

| Símbolo | Significa |
|:--|:--|
| `.` | cualquier carácter |
| `*` | cero o más repeticiones del anterior |
| `^` | comienzo de línea |
| `$` | fin de línea |
| `[abc]` | uno de esos caracteres |
| `[^abc]` | cualquiera menos esos |
| `[0-9]` | un dígito |
| `\` | escapa el siguiente símbolo (`\.` es un punto literal) |

`grep "^$" archivo` encuentra las líneas **vacías**. Con `-E` (extendidas) se pueden usar `+` (uno o más), `?` (cero o uno), `{n}` (n veces), `|` (o) y `()`: `grep -E "^[0-9]{3}-[0-9]{4}$"`.

---

## 4. Código de salida

`grep` termina con **0 si encontró** al menos una línea, **1 si no encontró** nada y **2 si hubo un error** (por ejemplo, un archivo inexistente). Por eso se usa en condiciones:

```bash
if grep -q "root" /etc/passwd; then echo "existe"; fi
```

---

## 5. Cuidados

- Con símbolos especiales, como `.` o `*`, usá `-F` o escapalos: `grep -F "3.14" datos.txt`.
- `grep -r` también recorre carpetas ocultas y binarios: se pueden limitar con `--include="*.py"` y `--exclude-dir=.git`.
- Para buscar un texto que empieza con guion, usá `--`: `grep -- "-x" archivo`.
