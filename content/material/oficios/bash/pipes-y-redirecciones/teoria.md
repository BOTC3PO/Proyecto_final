# Bash — Tuberías y redirecciones (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../expansion-de-shell/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/bash/pipes-y-redirecciones/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Tres canales

Todo programa tiene tres canales de comunicación:

| Canal | Número | Por defecto |
|:--|:--|:--|
| **stdin** (entrada estándar) | 0 | el teclado |
| **stdout** (salida estándar) | 1 | la pantalla |
| **stderr** (salida de errores) | 2 | la pantalla |

Con **redirecciones** se cambia hacia dónde van, y con **tuberías** se conecta la salida de un comando con la entrada de otro.

---

## 2. Redirecciones

| Símbolo | Hace | Ejemplo |
|:--|:--|:--|
| `>` | guarda la salida en un archivo (**pisa** lo que había) | `ls > lista.txt` |
| `>>` | **agrega** al final del archivo | `date >> registro.log` |
| `<` | toma la entrada desde un archivo | `sort < nombres.txt` |
| `2>` | guarda los **errores** en un archivo | `ls /nada 2> errores.txt` |
| `2>&1` | manda los errores al mismo lugar que la salida | `cmd > todo.txt 2>&1` |
| `&>` | salida y errores juntos (atajo de Bash) | `cmd &> todo.txt` |

`> /dev/null` descarta una salida (`/dev/null` es "el agujero negro" del sistema). Con `>` **se pierde el contenido anterior**: cuidado.

---

## 3. Tuberías (pipes)

El símbolo `|` conecta la salida de un comando con la entrada del siguiente:

```bash
ls | wc -l                 # cuántos archivos hay
cat log.txt | grep ERROR   # solo las líneas con ERROR
ps aux | sort -k3 -nr | head -5   # los 5 procesos que más CPU usan
```

Cada comando hace **una cosa simple**, y combinándolos se resuelven problemas complejos. Una tubería **solo pasa stdout**; los errores (stderr) siguen yendo a la pantalla, salvo que se los redirija (`2>&1 |`).

---

## 4. Herramientas típicas para tuberías

`sort` (ordena), `uniq` (quita repetidas consecutivas; se usa después de `sort`), `wc -l` (cuenta líneas), `head` / `tail` (primeras o últimas líneas), `tr` (reemplaza caracteres), `cut` (toma columnas), `tee archivo` (muestra y guarda a la vez), `xargs` (convierte líneas en argumentos).

```bash
sort nombres.txt | uniq -c | sort -nr   # ranking de repetidos
echo "hola" | tee salida.txt            # lo muestra y lo guarda
```

---

## 5. Más: here-documents y sustitución de procesos

`<<FIN` (here-document) pasa varias líneas como entrada hasta que aparezca `FIN`. `<<<"texto"` (here-string) pasa un texto. `<(comando)` usa la salida de un comando como si fuera un archivo (`diff <(ls a) <(ls b)`).
