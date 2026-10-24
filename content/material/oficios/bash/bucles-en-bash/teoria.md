# Bash — Bucles: for, while y until (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../condicionales-en-bash/` y `../../../informatica/estructuras-de-control-bucles/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/bash/bucles-en-bash/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. for sobre una lista

```bash
for fruta in manzana banana pera; do
  echo "Me gusta la $fruta"
done
```

- `for variable in lista; do ... done`: la variable toma **cada valor de la lista** por turno.
- La lista puede ser texto separado por espacios, el resultado de una **expansión** (`{1..5}`, `*.txt`) o de un comando (`$(ls)`; para archivos conviene usar comodines).
- Se cierra con `done`.

```bash
for n in {1..5}; do echo $n; done          # 1 2 3 4 5
for archivo in *.txt; do wc -l "$archivo"; done
for n in $(seq 1 2 9); do echo $n; done    # 1 3 5 7 9
```

---

## 2. for estilo C

```bash
for (( i = 0; i < 5; i++ )); do
  echo "vuelta $i"
done
```

Tiene **inicio**, **condición** y **paso**. Adentro no hace falta `$` en `i`. Es útil cuando se cuenta con números.

---

## 3. while y until

```bash
contador=1
while [ "$contador" -le 3 ]; do
  echo "contador = $contador"
  contador=$(( contador + 1 ))
done
```

- `while` repite **mientras** la condición sea verdadera (código de salida 0).
- `until` repite **hasta que** la condición se cumpla (mientras sea falsa).
- Si dentro del bucle no se cambia lo que se evalúa, queda **infinito** (se corta con `Ctrl+C`). `while true; do ...; done` es un bucle infinito a propósito.

---

## 4. break y continue

- `break` **sale** del bucle.
- `continue` salta a la **siguiente vuelta**.

```bash
for n in {1..10}; do
  [ $(( n % 2 )) -eq 0 ] && continue   # saltea los pares
  [ "$n" -gt 7 ] && break              # termina después del 7
  echo $n
done
```

---

## 5. Leer un archivo línea por línea

```bash
while IFS= read -r linea; do
  echo "Línea: $linea"
done < nombres.txt
```

`read -r` evita que se interpreten las barras invertidas, e `IFS=` conserva los espacios del comienzo y el final. La redirección `< archivo` va **después de `done`**. Para nombres de archivo con espacios, usá siempre `"$archivo"` entre comillas.
