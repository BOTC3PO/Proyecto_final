# Bash — Expansiones de la shell (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../comillas-en-bash/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/bash/expansion-de-shell/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Quién reemplaza qué

Antes de ejecutar un comando, **la shell reemplaza** ciertos símbolos por su resultado. El programa (`ls`, `echo`, `rm`) **nunca ve** el símbolo: recibe ya la lista final. Por eso `echo *.txt` muestra los nombres de los archivos: quien los armó fue la shell, no `echo`.

---

## 2. Las expansiones, en orden

1. **Llaves**: `{a,b}` y `{1..5}` generan varias palabras.
2. **Tilde**: `~` se reemplaza por tu carpeta personal (`$HOME`).
3. **Parámetros y variables**: `$nombre`, `${nombre}`.
4. **Sustitución de comandos**: `$(comando)`.
5. **Aritmética**: `$(( 2 + 3 ))`.
6. **Separación en palabras** (se cortan por espacios lo que no está entre comillas).
7. **Comodines (globbing)** sobre nombres de archivos.

---

## 3. Llaves

```bash
echo a{b,c}d        # abd acd
echo {1..5}         # 1 2 3 4 5
echo {a..e}         # a b c d e
mkdir -p proyecto/{src,docs,tests}
cp informe.txt{,.bak}   # copia informe.txt a informe.txt.bak
```

Las llaves generan texto **sin mirar archivos**: no hace falta que existan.

---

## 4. Comodines

| Comodín | Significa | Ejemplo |
|:--|:--|:--|
| `*` | cualquier cantidad de caracteres (incluso ninguno) | `*.txt` |
| `?` | exactamente un carácter | `foto?.jpg` |
| `[abc]` | uno de esos caracteres | `[ab]*` |
| `[a-z]` | un carácter del rango | `[0-9].log` |
| `[!abc]` | uno que NO sea de esos | `[!a]*` |

Detalles: `*` **no** coincide con archivos ocultos (los que empiezan con `.`), y **no** cruza carpetas. Si ningún archivo coincide, Bash deja el patrón tal cual (`*.xyz`). Los comodines **no se expanden entre comillas**.

---

## 5. Tilde, variables y comandos

- `~` es tu carpeta personal; `~/docs` es `/home/ana/docs`. `~otro` es la de otro usuario.
- `$(ls | wc -l)` se reemplaza por la salida del comando (la cantidad de archivos).
- `$(( 7 * 3 ))` se reemplaza por 21.
- Con `set -f` se desactivan los comodines; con `set +f` se vuelven a activar.
