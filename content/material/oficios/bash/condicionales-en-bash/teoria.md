# Bash — Condicionales: if, test y case (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../variables-en-bash/` y `../../../informatica/estructuras-de-control-condicionales/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/bash/condicionales-en-bash/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. if / elif / else

```bash
if [ "$edad" -ge 18 ]; then
  echo "Mayor de edad"
elif [ "$edad" -ge 13 ]; then
  echo "Adolescente"
else
  echo "Menor"
fi
```

- `if` ejecuta el **comando** que le sigue y mira su **código de salida**: **0 = verdadero**, otro número = falso.
- `[ ... ]` es el comando `test`: tiene **espacios** después de `[` y antes de `]`.
- Se cierra con `fi`. Cada rama lleva `then` (el `;` antes de `then` solo hace falta si va en la misma línea).

---

## 2. Pruebas con `[ ]`

| Para números | Significa | Para textos | Significa |
|:--|:--|:--|:--|
| `-eq` | igual | `=` | igual |
| `-ne` | distinto | `!=` | distinto |
| `-lt` | menor | `-z "$x"` | vacío |
| `-le` | menor o igual | `-n "$x"` | no vacío |
| `-gt` | mayor | | |
| `-ge` | mayor o igual | | |

Para **archivos**: `-e` existe, `-f` es archivo común, `-d` es carpeta, `-r` / `-w` / `-x` se puede leer / escribir / ejecutar, `-s` no está vacío.

Combinaciones: `[ A ] && [ B ]` (y), `[ A ] || [ B ]` (o), `! [ A ]` (no); dentro de `[ ]` se usan `-a` y `-o`, pero se prefiere lo anterior.

---

## 3. `[[ ]]` y `(( ))`

- `[[ ... ]]` es la versión **mejorada** de Bash: no necesita tantas comillas, admite `==`, `<`, `>`, `&&`, `||` y **patrones** (`[[ $archivo == *.txt ]]`) y expresiones regulares (`=~`).
- `(( ... ))` es para **aritmética**: `if (( edad >= 18 )); then ...`. Adentro no hace falta `$` y se usan los operadores de C (`==`, `<`, `&&`).

**Siempre entre comillas** las variables dentro de `[ ]`: `[ "$x" = "si" ]`. Si `x` está vacía y se escribe `[ $x = "si" ]`, la prueba se rompe.

---

## 4. case

Para comparar una variable con varios patrones:

```bash
case "$opcion" in
  s|S|si) echo "Confirmado" ;;
  n|N|no) echo "Cancelado" ;;
  *)      echo "Opción inválida" ;;
esac
```

Cada rama termina con `;;`, se cierra con `esac`, y `*` es la rama por defecto.

---

## 5. Usar el resultado de un comando

```bash
if grep -q "root" /etc/passwd; then echo "existe"; fi
if ! ping -c 1 sitio.com > /dev/null; then echo "sin red"; fi
```

Una condición puede ser **cualquier comando**; también `&&` y `||` sirven como un `if` corto: `[ -d carpeta ] || mkdir carpeta`.
