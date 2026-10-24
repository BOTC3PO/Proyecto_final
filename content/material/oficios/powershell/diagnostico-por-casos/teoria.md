# PowerShell — Diagnóstico de scripts por casos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../automatizacion-ps1/` y los temas anteriores de PowerShell (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/powershell/diagnostico-por-casos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. El método

Cuando un comando o un script falla, se sigue un camino:

1. **Leer el mensaje completo** de error (muestra el comando, la línea y el motivo).
2. **Reproducirlo** con el comando más simple posible.
3. **Mirar el objeto:** qué tipo es y qué propiedades tiene (`Get-Member`, `| Select-Object *`).
4. **Pensar una hipótesis** y probarla con un cambio pequeño.
5. **Corregir una sola cosa** y volver a probar.

---

## 2. Síntomas y causas más probables

| Síntoma | Hipótesis para revisar primero |
|:--|:--|
| `running scripts is disabled on this system` | política de ejecución `Restricted` |
| `... is not recognized as the name of a cmdlet` | error de tipeo, módulo sin importar, falta `.\` o ruta |
| `Access is denied` / `Acceso denegado` | falta ejecutar como administrador |
| `Cannot find path ... because it does not exist` | ruta mal escrita, espacios sin comillas |
| se crea un archivo con un nombre raro (`5`, `100`) | se usó `>` como comparación en lugar de `-gt` |
| un `if` siempre entra | `=` en lugar de `-eq` |
| `Cannot convert value ... to type` | tipo de parámetro incorrecto |
| el CSV sale con basura | `Format-Table` antes de `Export-Csv` |
| la variable parece vacía | alcance (función/script) o error de nombre |
| una función devuelve cosas de más | instrucciones que emiten valores sin querer |

---

## 3. Herramientas

- `$Error[0] | Format-List * -Force`: el último error con todos sus detalles.
- `Get-Help comando -Examples`: ejemplos del uso correcto.
- `Get-Member` y `Select-Object *`: qué propiedades existen.
- `Write-Verbose`, `Write-Debug`, `Set-PSDebug -Trace 1`: seguir un script.
- `-WhatIf`, `-Confirm`, `-ErrorAction Stop` con `try/catch`.
- `Trace-Command` y el depurador de PowerShell ISE o VS Code (puntos de interrupción).
- `Get-Command nombre`: de dónde viene un comando; `Get-Module -ListAvailable`.

---

## 4. Un caso para pensar

`Get-ChildItem C:\Datos | Remove-Item` **borra todo lo que hay**. Si por un error de tipeo `C:\Datos` es `C:\`, el daño puede ser enorme y sin papelera. Reglas: **`-WhatIf` primero**, rutas verificadas con `Test-Path`, y nunca ejecutar borrados masivos sin ver antes la lista.
