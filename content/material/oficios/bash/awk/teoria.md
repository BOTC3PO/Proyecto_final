# Bash — Procesamiento de columnas con awk (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../sed/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/bash/awk/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es awk

`awk` es un lenguaje pensado para **texto en columnas** (tablas, logs, CSV). Lee el archivo **línea por línea** (cada línea es un **registro**), la divide en **campos** (columnas) y ejecuta acciones. Su forma básica es:

```
awk 'condición { acción }' archivo
```

Si no hay condición, la acción se aplica a **todas** las líneas. Si no hay acción, se imprimen las líneas que cumplen la condición.

---

## 2. Campos y variables internas

| Variable | Significa |
|:--|:--|
| `$0` | la línea completa |
| `$1`, `$2`, ... | el primer campo, el segundo... |
| `NF` | cantidad de campos de la línea (`$NF` es el último) |
| `NR` | número de línea (registro) actual |
| `FS` | separador de campos de entrada (por defecto, espacios) |
| `OFS` | separador de campos de salida |

```bash
awk '{ print $1 }' ventas.txt           # primera columna
awk -F: '{ print $1 }' /etc/passwd      # separador ":" (-F)
awk '{ print $1, $NF }' ventas.txt      # primero y último campo
```

Los campos se **numeran desde 1**; `$0` es la línea entera. Un `print $1, $2` separa con espacio (OFS); `print $1 $2` los pega sin separador.

---

## 3. Condiciones (patrones)

```bash
awk '$3 > 100' ventas.txt                  # filas donde la columna 3 es mayor que 100
awk '/error/' log.txt                      # filas que contienen "error"
awk '$2 == "OK"' estado.txt                # columna 2 igual a OK
awk 'NR > 1' datos.csv                     # todas menos la primera línea
awk 'NR >= 3 && NR <= 5' datos.txt         # líneas 3 a 5
awk 'length($0) > 80' texto                # líneas de más de 80 caracteres
```

---

## 4. BEGIN y END

- `BEGIN { ... }` se ejecuta **una vez antes** de leer.
- `END { ... }` se ejecuta **una vez después** de la última línea.

```bash
awk '{ suma += $2 } END { print "Total:", suma }' ventas.txt
awk 'END { print NR }' archivo                  # cuenta las líneas
awk 'BEGIN { FS=","; OFS=";" } { print $1, $2 }' datos.csv
```

Las variables **no se declaran** y arrancan en 0 (o vacías).

---

## 5. Más herramientas

- `printf "%-10s %5.2f\n", $1, $2` da formato (como en C).
- **Arreglos asociativos**: `cuenta[$1]++` cuenta repeticiones por clave, y un `for (k in cuenta) print k, cuenta[k]` los recorre.
- Funciones: `length()`, `substr(texto, inicio, largo)`, `toupper()`, `tolower()`, `split()`, `sub()` y `gsub()` (reemplazo).
- `-v nombre=valor` pasa una variable desde la shell: `awk -v min=100 '$3 > min' ventas.txt`.
- Escribí el programa **entre comillas simples** para que la shell no toque `$1`.
