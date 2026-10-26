# PowerShell — La tubería de objetos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../get-help-y-descubribilidad/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/powershell/pipeline-de-objetos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Objetos, no texto

En PowerShell, `|` conecta comandos pasando **objetos completos**, con sus propiedades. Por eso no hace falta cortar texto con `cut` o `awk`: se pide la propiedad por su nombre.

```powershell
Get-Process | Sort-Object CPU -Descending | Select-Object -First 5
```

---

## 2. Los cmdlets de la tubería

| Cmdlet | Alias | Hace |
|:--|:--|:--|
| `Where-Object` | `where`, `?` | **filtra** objetos por una condición |
| `Select-Object` | `select` | **elige** propiedades o las primeras/últimas filas |
| `Sort-Object` | `sort` | **ordena** por una propiedad |
| `ForEach-Object` | `foreach`, `%` | **ejecuta un bloque** por cada objeto |
| `Measure-Object` | `measure` | cuenta, suma, promedia |
| `Group-Object` | `group` | agrupa por una propiedad |
| `Format-Table` / `Format-List` | `ft` / `fl` | solo para **mostrar** |

```powershell
Get-Service | Where-Object { $_.Status -eq 'Running' }
Get-Service | Where-Object Status -eq 'Running'          # forma corta
Get-ChildItem | Select-Object Name, Length
Get-ChildItem -File | Measure-Object -Property Length -Sum
Get-Process | ForEach-Object { "$($_.ProcessName): $($_.Id)" }
```

`$_` (o `$PSItem`) es el objeto actual dentro del bloque `{ }`. Los operadores de comparación son `-eq`, `-ne`, `-gt`, `-lt`, `-ge`, `-le`, `-like` (con comodines), `-match` (expresión regular) y `-contains`.

---

## 3. Filtrar temprano

Es más eficiente **filtrar lo antes posible**: `Get-ChildItem -Filter *.log` es más rápido que traer todo y filtrar después con `Where-Object`. Y **`Select-Object -First 5`** corta la tubería cuando ya tiene lo que necesita.

---

## 4. Qué hacer con la salida

- `Export-Csv resultado.csv -NoTypeInformation`, `ConvertTo-Json`, `Out-File lista.txt` o `> lista.txt`.
- `Out-GridView` abre una tabla interactiva (en Windows con entorno gráfico).
- **Error clásico:** `Format-Table` y `Format-List` producen objetos de **formato**, que sirven para **mostrar** pero no para seguir procesando. Se usan **al final** de la tubería: `Get-Process | Sort-Object CPU | Format-Table`, no al revés.
- Se puede pasar la tubería a un **parámetro**: `Get-Process notepad | Stop-Process`.
