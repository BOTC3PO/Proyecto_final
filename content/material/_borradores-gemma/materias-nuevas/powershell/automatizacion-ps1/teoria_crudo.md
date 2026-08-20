# Automatización con PowerShell: Más allá de los scripts básicos

## Introducción

En el nivel intermedio de PowerShell, la automatización deja de ser simplemente "guardar comandos en un archivo" para convertirse en la construcción de soluciones robustas, mantenibles y escalables. Un script `.ps1` no es solo una secuencia de instrucciones; es una pieza de software que debe gestionar su entorno, sus errores y sus dependencias. Ya no nos conformamos con que el script funcione en nuestra máquina; debe funcionar de manera predecible en diferentes contextos, manejar fallos sin dejar el sistema en un estado inconsistente y comunicar claramente su estado al usuario o al sistema de monitoreo.

## Explicación central: Estructura y control de flujo

La automatización efectiva se basa en tres pilares: la estructura modular, la gestión de errores explícita y el uso correcto de tipos de datos.

### 1. Modularidad y Funciones
En lugar de escribir scripts lineales de cientos de líneas, debes encapsular la lógica en funciones. Esto permite reutilizar código, facilitar las pruebas unitarias y mejorar la legibilidad. Utiliza el bloque `param` para definir entradas tipadas y validadas.

```powershell
function Get-ServerStatus {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory=$true)]
        [string[]]$ComputerName
    )
    
    # Lógica de consulta
    foreach ($Computer in $ComputerName) {
        if (Test-Connection -ComputerName $Computer -Count 1 -Quiet) {
            Get-CimInstance -ClassName Win32_OperatingSystem -ComputerName $Computer
        } else {
            Write-Warning "No se pudo conectar a $Computer"
        }
    }
}
```

### 2. Gestión de Errores: `try-catch-finally`
El operador `-ErrorAction SilentlyContinue` es una trampa común. En scripts de automatización, debes usar bloques `try/catch` para manejar excepciones no terminales o terminales. Esto asegura que si un paso crítico falla (por ejemplo, la creación de un usuario), el script pueda registrar el error y decidir si continúa o aborta.

```powershell
try {
    New-ADUser -Name "JuanPerez" -ErrorAction Stop
}
catch [Microsoft.ActiveDirectory.Management.ADIdentityAlreadyExistsException] {
    Write-Error "El usuario ya existe: $_"
}
catch {
    Write-Error "Error inesperado: $_"
}
finally {
    # Código que se ejecuta siempre, útil para limpiar recursos
    Write-Verbose "Proceso finalizado."
}
```

### 3. Tipos de Datos y Casting
PowerShell es flexible con los tipos, pero esta flexibilidad puede causar bugs sutiles. En automatización, sé explícito. Usa `[int]`, `[datetime]` o `[bool]` para asegurar que las variables contengan lo que esperas.

## Errores comunes de quien recién aprende este punto

1.  **Ignorar las preferencias de error:** Usar `-ErrorAction SilentlyContinue` en comandos críticos sin verificar si hubo salida parcial. Esto puede llevar a que el script continúe procesando datos inexistentes.
2.  **Hardcoding de rutas:** Escribir `C:\Scripts\logs\report.csv` directamente en el código. Esto rompe la portabilidad. Usa `$PSScriptRoot` o variables de entorno.
3.  **Confundir `$null` con cadenas vacías:** `if ($variable)` no es lo mismo que `if ($variable -ne "")`. Un objeto vacío o una colección vacía puede ser `$true` en ciertos contextos si no se verifica correctamente con `-eq $null`.
4.  **Falta de verbos estándar:** Inventar nombres para funciones o parámetros. PowerShell tiene un glosario oficial de verbos (Obtener, Establecer, Nuevo, etc.). Usar verbos incorrectos hace que el script sea difícil de entender para otros administradores.

## Cuándo usarlo / cuándo NO usarlo

**Usa PowerShell cuando:**
*   La automatización requiere interacción profunda con el sistema operativo de Windows (registros, WMI, Active Directory, Servicios).
*   Necesitas orquestar múltiples tareas que involucran diferentes tecnologías (ej. leer un CSV, consultar SQL y actualizar AD).
*   El entorno ya tiene PowerShell integrado y no deseas instalar dependencias externas (como Python o Node.js).

**No uses PowerShell cuando:**
*   La tarea es puramente de desarrollo web o manipulación de datos complejos donde Python o Go tienen ecosistemas más maduros.
*   La seguridad requiere que el código sea independiente de la plataforma (PowerShell Core ayuda, pero la adopción varía).
*   El script es tan simple que un archivo `.bat` o un comando de línea de comandos directo es más mantenible (KISS principle).

## Ejemplo extendido en contexto

**Caso de uso:** Backup automatizado de configuraciones de red con registro de auditoría.

Imagina que necesitas respaldar las reglas de firewall de varios servidores semanalmente. Un script mal estructurado podría dejar archivos corruptos o no notificar si falla.

```powershell
# Configuración del script
$LogPath = Join-Path $PSScriptRoot "logs"
$BackupPath = Join-Path $PSScriptRoot "backups"
$dateStamp = Get-Date -Format "yyyyMMdd_HHmmss"

# Asegurar directorios
if (-not (Test-Path $LogPath)) { New-Item -ItemType Directory -Path $LogPath -Force }
if (-not (Test-Path $BackupPath)) { New-Item -ItemType Directory -Path $BackupPath -Force }

$logFile = Join-Path $LogPath "backup_$dateStamp.log"

# Función de logging centralizada
function Write-Log {
    param([string]$Message, [string]$Level = "INFO")
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    "$timestamp [$Level] $Message" | Tee-Object -FilePath $logFile -Append
}

# Proceso principal
Write-Log "Iniciando backup de reglas de firewall..."

$servers = @("SRV01", "SRV02", "SRV03")

foreach ($srv in $servers) {
    try {
        # Simulación de obtención de reglas (ej. NetSecurity)
        # En producción: Get-NetFirewallRule -CimSession $srv | Export-Clixml
        
        $backupFile = Join-Path $BackupPath "fw_$srv`_$dateStamp.xml"
        # Export-Clixml -InputObject $rules -Path $backupFile
        
        Write-Log "Backup exitoso para $srv en $backupFile" -Level "SUCCESS"
    }
    catch {
        Write-Log "Fallo al respaldar $srv: $_" -Level "ERROR"
        # Aquí podrías agregar lógica para alertar por email si es crítico
    }
}

Write-Log "Proceso finalizado."
```

Este ejemplo demuestra el uso de `$PSScriptRoot` para rutas relativas, logging estructurado, manejo de errores por servidor (sin detener todo el script por un fallo aislado) y creación de directorios si no existen. Es una base sólida para cualquier automatización corporativa.