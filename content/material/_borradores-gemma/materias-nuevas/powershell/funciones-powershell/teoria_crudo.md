# Funciones en PowerShell: Más allá del script simple

En el ecosistema de PowerShell, las funciones son bloques de código reutilizables que permiten encapsular lógica compleja dentro de un nombre simbólico. A diferencia de los scripts tradicionales (archivos `.ps1`), las funciones se cargan en la memoria de la sesión actual, lo que las hace ideales para tareas administrativas recurrentes, transformaciones de datos y la construcción de herramientas personalizadas que se integran nativamente con el *pipeline* de PowerShell.

## Estructura y sintaxis fundamental

Una función básica se define utilizando la palabra clave `function` seguida del nombre y un bloque de código entre llaves `{}`. Sin embargo, en un nivel intermedio, es crucial entender la diferencia entre funciones estándar y funciones avanzadas (cmdlets personalizados).

### Función estándar
Es la forma más directa de agrupar comandos.

```powershell
function Get-UserStatus {
    param(
        [string]$Username
    )
    
    $user = Get-ADUser -Identity $Username -ErrorAction SilentlyContinue
    
    if ($user) {
        "El usuario $Username está activo."
    } else {
        "El usuario $Username no fue encontrado."
    }
}
```

### Función avanzada (Advanced Function)
Para escribir funciones que se comporten como cmdlets nativos (soportando `-Verbose`, `-WhatIf`, autocompletado de parámetros y validación de tipos), debes incluir el atributo `[CmdletBinding()]` al inicio del bloque. Esto habilita la integración profunda con el motor de PowerShell.

```powershell
function Set-ServiceStartup {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory=$true, ValueFromPipeline=$true)]
        [string[]]$ServiceName,
        
        [ValidateSet('Automatic', 'Manual', 'Disabled')]
        [string]$StartupType = 'Automatic'
    )

    process {
        foreach ($svc in $ServiceName) {
            try {
                Set-Service -Name $svc -StartupType $StartupType -ErrorAction Stop
                Write-Verbose "Configurado $svc como $StartupType"
            }
            catch {
                Write-Warning "Error configurando $svc : $_"
            }
        }
    }
}
```

## Flujo de ejecución y el bloque `process`

Un error común es tratar las funciones avanzadas como scripts lineales. Cuando se habilita `[CmdletBinding()]`, PowerShell organiza el código en bloques específicos: `begin`, `process` y `end`.

*   **`begin`**: Se ejecuta una sola vez antes de recibir datos. Ideal para inicializar conexiones o abrir archivos.
*   **`process`**: Se ejecuta para cada objeto que entra por el pipeline. Es el corazón de la función.
*   **`end`**: Se ejecuta una sola vez al final. Ideal para limpiar recursos o emitir resúmenes.

Ignorar esta distinción puede causar cuellos de botella si intentas procesar grandes volúmenes de datos, ya que PowerShell puede esperar a recibir todos los objetos antes de ejecutar el código si no está estructurado correctamente.

## Errores comunes

1.  **Olvidar `[CmdletBinding()]`**: Sin este atributo, la función no soportará parámetros comunes como `-Verbose` o `-Debug`, y no tendrá acceso a la variable `$PSCmdlet`, limitando su interoperabilidad con otras herramientas del sistema.
2.  **Uso incorrecto de `return`**: En PowerShell, `return` es una instrucción de salto, no un valor de retorno como en otros lenguajes. Para devolver objetos al pipeline, simplemente escribe el objeto o usa `Write-Output`. Usar `return` para devolver datos puede cortar la ejecución prematuramente.
3.  **Falta de validación de entrada**: Asumir que los parámetros siempre son del tipo correcto. Utiliza atributos como `[ValidateNotNull()]` o `[ValidateSet()]` para prevenir errores de tiempo de ejecución.

## Cuándo usarlo vs. cuándo NO usarlo

*   **Úsalo cuando**: Necesitas lógica reutilizable dentro de una sesión interactiva, quieres crear una abstracción sobre cmdlets nativos, o necesitas procesar datos en tiempo real a través del pipeline.
*   **NO lo uses cuando**: La lógica es extremadamente compleja y modular. En ese caso, es mejor crear un módulo (`*.psm1`) o un script independiente. Las funciones son excelentes para la reutilización inmediata, pero un módulo facilita la distribución, la carga diferida y la gestión de dependencias en proyectos grandes.

## Ejemplo extendido: Filtrado de logs con pipeline

Imagina que necesitas analizar logs de IIS y buscar errores específicos. Una función avanzada permite integrar este filtro directamente en la cadena de comandos.

```powershell
function Get-IISLogErrors {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory=$true)]
        [string]$LogPath,
        
        [Parameter(Mandatory=$true)]
        [int]$StatusCodeMin
    )

    begin {
        # Validamos que el archivo exista antes de empezar
        if (-not (Test-Path $LogPath)) {
            throw "El archivo de log no existe en: $LogPath"
        }
        Write-Verbose "Iniciando análisis de $LogPath"
    }

    process {
        # Leemos el archivo y procesamos línea por línea
        Get-Content $LogPath | Where-Object {
            # Asumiendo formato estándar de IIS con campos separados por espacios
            # Este es un ejemplo simplificado de parsing
            $line -match "HTTP_STATUS=(\d+)"
            $status = [int]$Matches[1]
            $status -ge $StatusCodeMin
        }
    }

    end {
        Write-Verbose "Análisis completado."
    }
}

# Uso en contexto:
# Get-IISLogErrors -LogPath "C:\inetpub\logs\LogFiles\W3SVC1\u_ex120101.log" -StatusCodeMin 400 | 
#     Select-Object -First 10
```

Este ejemplo demuestra cómo la función actúa como un filtro eficiente, permitiendo que otros cmdlets (como `Select-Object`) trabajen sobre el resultado sin necesidad de crear archivos temporales. La clave está en la estructura `process`, que permite manejar archivos grandes sin cargarlos completamente en la memoria.