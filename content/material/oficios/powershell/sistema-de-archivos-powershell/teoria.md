# PowerShell — Archivos y carpetas (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../pipeline-de-objetos/` y `../../../informatica/sistema-de-archivos/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/powershell/sistema-de-archivos-powershell/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Moverse y listar

| Cmdlet | Alias | Hace |
|:--|:--|:--|
| `Get-Location` | `pwd` | carpeta actual |
| `Set-Location` | `cd` | cambiar de carpeta |
| `Get-ChildItem` | `ls`, `dir`, `gci` | listar |
| `Test-Path` | | ¿existe? (`$true`/`$false`) |

```powershell
Get-ChildItem C:\Datos -Recurse -Filter *.log
Get-ChildItem -File -Hidden
Get-ChildItem | Sort-Object Length -Descending | Select-Object -First 5
```

`-Filter` filtra en el origen (rápido); `-Include`/`-Exclude` necesitan `-Recurse` o un comodín en la ruta. `-File` y `-Directory` limitan al tipo; `-Force` incluye ocultos y de sistema. Los objetos devueltos tienen propiedades como `Name`, `FullName`, `Length`, `LastWriteTime`, `Extension` y `Attributes`.

---

## 2. Crear, copiar, mover y borrar

```powershell
New-Item -ItemType Directory -Path C:\Respaldo
New-Item -ItemType File -Path C:\Respaldo\nota.txt
Copy-Item C:\Datos\*.txt -Destination C:\Respaldo
Move-Item nota.txt C:\Archivo\
Rename-Item nota.txt notas.txt
Remove-Item C:\Respaldo\*.tmp
```

- `Remove-Item` **no usa papelera**: lo borrado no se recupera. Probá siempre con **`-WhatIf`** y, para carpetas con contenido, se necesita `-Recurse`.
- `Copy-Item -Recurse` copia carpetas completas. `-Force` pisa archivos existentes.
- En scripts, usá `Join-Path` para armar rutas: `Join-Path $HOME "Respaldo"`. Las rutas con **espacios** van **entre comillas**.

---

## 3. Leer y escribir contenido

| Cmdlet | Hace |
|:--|:--|
| `Get-Content archivo` | lee (una línea por objeto); `-Tail 10`, `-Wait` (seguir un log) |
| `Set-Content archivo "texto"` | **reemplaza** el contenido |
| `Add-Content archivo "texto"` | **agrega** al final |
| `Out-File archivo` / `>` / `>>` | enviar la salida a un archivo (`>>` agrega) |
| `Import-Csv` / `Export-Csv` | leer y escribir CSV como objetos |
| `ConvertFrom-Json` / `ConvertTo-Json` | trabajar con JSON |

```powershell
Get-Content servidor.log -Tail 20
Get-Content servidor.log | Select-String "ERROR"
```

`Select-String` es el "grep" de PowerShell y busca texto (o una expresión regular) en archivos.

---

## 4. Rutas, unidades y proveedores

PowerShell trata muchas cosas como si fueran carpetas: `C:`, `HKLM:` (registro), `Env:` (variables de entorno), `Cert:`. Rutas útiles: `$HOME` (carpeta personal), `$PWD` (carpeta actual), `$env:TEMP` (carpeta temporal), `$env:USERNAME`. En Windows se usa `\`; PowerShell también acepta `/`.

---

## 5. Cuidados

- Borrar con **comodines** es riesgoso: mostrá antes con `Get-ChildItem` lo que se va a borrar.
- `Set-Content` y `>` **pisan** el archivo.
- Para tamaños: `(Get-ChildItem -Recurse -File | Measure-Object Length -Sum).Sum / 1MB`; `1KB`, `1MB` y `1GB` son constantes del lenguaje.
