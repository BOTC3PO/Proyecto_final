# PowerShell — Bucles (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../condicionales-powershell/` y `../../../informatica/estructuras-de-control-bucles/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/powershell/bucles-powershell/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. foreach

```powershell
foreach ($archivo in Get-ChildItem *.txt) {
    "$($archivo.Name): $($archivo.Length) bytes"
}
```

La **instrucción** `foreach ($x in $lista) { ... }` carga **todos** los elementos y los recorre uno a uno. No confundir con el **cmdlet** `ForEach-Object`, que procesa cada objeto **a medida que pasa** por una tubería y usa `$_`:

```powershell
Get-ChildItem *.txt | ForEach-Object { $_.Name }
```

---

## 2. for, while, do

```powershell
for ($i = 0; $i -lt 5; $i++) { "vuelta $i" }

$n = 1
while ($n -le 3) { "n = $n"; $n++ }

do { $n--; "n = $n" } while ($n -gt 0)
do { ... } until ($n -eq 0)
```

- `for` tiene inicio, condición y paso.
- `while` evalúa **antes** de cada vuelta (puede no ejecutarse nunca).
- `do ... while` / `do ... until` evalúan **después** (se ejecutan **al menos una vez**). `until` repite mientras la condición es **falsa**.
- `$i++` suma 1; `$i += 2` suma 2.

---

## 3. Rangos

`1..5` genera `1, 2, 3, 4, 5` (y `5..1` al revés): `foreach ($n in 1..5) { $n * 2 }`.

---

## 4. break y continue

- `break` sale del bucle; `continue` salta a la siguiente vuelta.
- **Atención:** dentro de `ForEach-Object`, `break` y `continue` **no funcionan como en un bucle** (pueden terminar todo el script). Para saltar un elemento en `ForEach-Object` se usa `return`.

---

## 5. Buenas prácticas

- Preferí la **tubería** (`Where-Object`, `ForEach-Object`) cuando procesás objetos en cadena, y **`foreach`** cuando necesitás una variable y el resultado completo.
- Un bucle infinito (`while ($true)`) se corta con `Ctrl+C` o con `break`. Añadí `Start-Sleep -Seconds 5` para no saturar el procesador.
- Para recorrer **líneas de un archivo**: `Get-Content datos.txt | ForEach-Object { ... }` o `foreach ($linea in Get-Content datos.txt)`.
- Hay un `-Parallel` de `ForEach-Object` en PowerShell 7 para trabajar en paralelo.
