# PowerShell — Funciones (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../bucles-powershell/` y `../../../informatica/funciones-y-modularidad/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/powershell/funciones-powershell/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Definir y llamar

```powershell
function Saludar {
    param([string]$Nombre = "mundo")
    "Hola, $Nombre"
}

Saludar -Nombre "Ana"     # Hola, Ana
Saludar "Luis"            # por posición
Saludar                   # Hola, mundo (valor por defecto)
```

Se define con `function Nombre { ... }` y se **llama por su nombre**, **sin paréntesis** y con los parámetros separados por espacios (no por comas). Tiene que estar **definida antes** de llamarla. Por convención, el nombre sigue el patrón **Verbo-Sustantivo** (`Get-Resumen`).

---

## 2. Parámetros

El bloque `param( ... )` declara los parámetros, con tipo y valor por defecto:

```powershell
function Sumar {
    param(
        [Parameter(Mandatory)] [int]$A,
        [int]$B = 0
    )
    $A + $B
}
```

- `[Parameter(Mandatory)]` lo hace **obligatorio** (PowerShell lo pide si falta).
- `[int]` valida el tipo; `[ValidateRange(1,10)]`, `[ValidateSet('a','b')]` validan el valor.
- `[switch]$Detallado` es un parámetro interruptor.
- `[CmdletBinding()]` antes de `param` da a la función los parámetros comunes (`-Verbose`, `-ErrorAction`, `-WhatIf` con `SupportsShouldProcess`).

---

## 3. Qué devuelve una función

**Todo lo que se emite sin capturar es salida**, no solo lo que va con `return`. `return` termina la función (y emite el valor).

```powershell
function Prueba {
    "uno"          # sale
    5 + 5          # sale (10)
    return "fin"   # sale y termina
}
```

Esto da tres valores. Por eso conviene **evitar emitir cosas sin querer** (por ejemplo, una llamada que devuelve un resultado que no se necesita: `$null = ...` o `| Out-Null`).

- `Write-Output` envía a la **salida** (a la tubería).
- `Write-Host` escribe **solo en pantalla** (no pasa por la tubería): útil para mensajes, no para datos.
- `Write-Warning`, `Write-Error` y `Write-Verbose` son para avisos, errores y detalle.

---

## 4. Funciones en la tubería y reutilización

Una función puede recibir objetos de la tubería con `[Parameter(ValueFromPipeline)]` y los bloques `begin`, `process` y `end`. Para reutilizarla en otros scripts, se guarda en un archivo `.ps1` y se carga con el operador punto (`. .\funciones.ps1`) o se empaqueta en un **módulo** (`.psm1`).

**Alcance:** las variables creadas dentro de una función **son locales**; la función puede **leer** las del script, pero si las asigna crea una copia local (a diferencia de Bash).
