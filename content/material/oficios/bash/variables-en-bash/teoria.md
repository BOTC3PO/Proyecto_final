# Bash — Variables (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../sintaxis-de-shell/` y `../../../informatica/variables-y-tipos-de-dato/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/bash/variables-en-bash/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Crear y usar variables

Una **variable** guarda un valor con un nombre. Se crea con `=` **sin espacios** alrededor, y se lee con `$` delante del nombre:

```bash
nombre="Ana"
echo "Hola $nombre"     # Hola Ana
```

- `nombre = "Ana"` (con espacios) es un **error**: Bash cree que `nombre` es un comando.
- Los nombres usan letras, números y `_`, y no empiezan con número. Se distingue mayúsculas de minúsculas (`Nombre` y `nombre` son distintas). Por convención, las variables del sistema o exportadas van en MAYÚSCULAS.
- En Bash **todo se guarda como texto**; la shell interpreta como número solo cuando se hacen cuentas.

---

## 2. Llaves, longitud y valores por defecto

- `${nombre}` es lo mismo que `$nombre`, pero las llaves delimitan el nombre: `echo "${nombre}_final"` (sin llaves, Bash buscaría `$nombre_final`).
- `${#nombre}` da la **cantidad de caracteres**.
- `${nombre:-Anónimo}` usa `Anónimo` si `nombre` está vacía o no existe.
- `unset nombre` borra la variable.

---

## 3. Variables de entorno y especiales

Una variable **exportada** (`export PAIS=AR`) la heredan los programas que lanzás desde esa shell. Algunas ya existen: `$HOME` (tu carpeta), `$USER` (tu usuario), `$PATH` (carpetas donde se buscan comandos), `$PWD` (carpeta actual).

Dentro de un script hay variables especiales: `$0` (nombre del script), `$1`, `$2`... (argumentos), `$#` (cantidad de argumentos), `$@` (todos los argumentos), `$?` (código de salida del último comando) y `$$` (PID del proceso).

---

## 4. Resultado de un comando y cuentas

- **Sustitución de comandos:** `fecha=$(date +%F)` guarda la salida de `date` en la variable. Es la forma moderna; las comillas invertidas `` `date` `` hacen lo mismo pero son más difíciles de anidar.
- **Aritmética:** `$(( 3 + 4 ))` calcula con enteros: `total=$(( precio * cantidad ))`. Bash **no** tiene decimales nativos.
- **Leer del teclado:** `read -p "Tu nombre: " nombre` guarda lo que escribe la persona.
- **Variables de solo lectura:** `readonly PI=3` impide cambiarla después.
