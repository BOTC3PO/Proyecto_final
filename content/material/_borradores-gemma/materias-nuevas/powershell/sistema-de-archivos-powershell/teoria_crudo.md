# El Sistema de Archivos en PowerShell: Más allá de `dir`

## Introducción: La Consistencia del Provider Model

En PowerShell, el sistema de archivos no es solo un conjunto de comandos aislados (`Get-ChildItem`, `Copy-Item`, etc.), sino un **proveedor (Provider)** integrado dentro del motor del lenguaje. Esta es la distinción fundamental que separa a un usuario básico de uno intermedio.

Gracias a este modelo, PowerShell trata el disco duro, el registro de Windows, el certificado del sistema y las variables de entorno bajo la misma interfaz de navegación. Esto significa que las cmdlets de gestión de archivos (`ItemCmdlets`) funcionan de manera consistente, permitiendo operaciones como copiar, mover o borrar elementos sin importar si están en el disco `C:` o en el registro `HKLM:`. Para el usuario intermedio, entender esto implica dejar de pensar en "comandos para archivos" y empezar a pensar en "navegación de objetos".

## Explicación Central: Navegación y Sintaxis de Proveedores

La base de la interacción con el sistema de archivos es el proveedor `FileSystem`. A diferencia de CMD o Bash, donde los paths son cadenas de texto simples, en PowerShell los paths se resuelven como objetos que pueden ser pasados por tubería (pipeline).

### 1. El Drives Conceptual
PowerShell define unidades lógicas. La unidad `C:` es un drive real, pero `Alias:`, `Env:`, `HKLM:` o `Variable:` son drives virtuales. Puedes navegar entre ellos como si fueran carpetas:

```powershell
# Navegar al registro y listar claves
cd HKLM:\SOFTWARE
Get-ChildItem
```

### 2. Sintaxis de Paths y Comodines
PowerShell soporta comodines (`*`, `?`) en la mayoría de los cmdlets de archivos, pero con una advertencia crítica: la expansión de comodines depende de la configuración `$ConfirmPreference` y del proveedor.

```powershell
# Obtener todos los archivos .log que terminen con 'error'
Get-ChildItem -Path C:\Logs\*.log | Where-Object { $_.Name -like "*error*" }
```

Nota: `Get-ChildItem` es el equivalente de `ls` o `dir`. Su alias `ls` funciona, pero usar el nombre completo es una buena práctica para evitar confusiones en scripts complejos.

### 3. Operaciones con Objetos, no con Cadenas
El error más común es tratar los resultados de `Get-ChildItem` como texto. En realidad, devuelve objetos `FileInfo` o `DirectoryInfo`. Esto permite encadenar operaciones lógicas sin parsear strings.

```powershell
# Copiar archivos modificados en los últimos 7 días
Get-ChildItem -Path C:\Datos -Recurse | 
    Where-Object { $_.LastWriteTime -gt (Get-Date).AddDays(-7) } | 
    Copy-Item -Destination D:\Backup -WhatIf
```
El parámetro `-WhatIf` es vital aquí para simular la operación sin ejecutarla, algo que no existe en `cp` de Linux o `copy` de Windows por defecto.

## Errores Comunes del Nivel Intermedio

1.  **Confundir `Get-ChildItem` con `Get-Content`:**
    Muchos usuarios intentan ver el contenido de un archivo con `Get-ChildItem`. Recuerda: `Get-ChildItem` lista *qué* hay (metadatos), `Get-Content` lee *qué dice* (contenido).

2.  **Ignorar la jerarquía de proveedores:**
    Intentar usar `Set-Location C:\Temp` cuando el path no existe generará un error silencioso o un comportamiento inesperado si no se verifica la existencia previa. Es mejor usar `Test-Path` o `-ErrorAction SilentlyContinue` en scripts.

3.  **Mal uso de `-Recurse`:**
    Usar `-Recurse` en carpetas con millones de archivos (como `C:\Windows` o `AppData`) puede colgar la consola o el sistema. Siempre filtra por extensión o fecha antes de recursar si es posible, o usa `Get-ChildItem` con `-Depth` (en PowerShell 7+) para limitar la profundidad.

4.  **Permisos y UAC:**
    Intentar escribir en `C:\Program Files` o `HKLM:\...` sin ejecutar PowerShell como Administrador fallará silenciosamente o lanzará excepciones. El sistema de archivos de PowerShell no eleva permisos automáticamente; el contexto del proceso debe tenerlos.

## Cuándo usarlo / Cuándo NO usarlo

*   **Usa PowerShell cuando:**
    *   Necesites automatizar tareas de archivos en Windows Server o estaciones de trabajo.
    *   Debás gestionar el registro, certificados o variables de entorno junto con archivos.
    *   Requerís filtrado complejo basado en propiedades (tamaño, fecha de modificación, atributos de solo lectura) sin depender de herramientas externas como `grep` o `find`.

*   **NO lo uses (o ten cuidado) cuando:**
    *   Trabajas con archivos binarios grandes (ISOs, imágenes de disco). PowerShell no está optimizado para leer binarios byte a byte eficientemente; usa herramientas específicas o .NET Framework directamente.
    *   Necesitas velocidad extrema en copias masivas de archivos pequeños. Las cmdlets de PowerShell tienen overhead de serialización/deserialización de objetos. Para copias masivas simples, `robocopy` (desde PowerShell) es más rápido y robusto.

## Ejemplo Extendido: Auditoría de Seguridad de Archivos

**Contexto:** Eres un administrador de sistemas y necesitas generar un informe de todos los archivos `.exe` en una unidad de red que han sido modificados por usuarios distintos al dueño original, para detectar posibles infecciones o cambios no autorizados.

**Solución:**

```powershell
# Definir la ruta raíz y el umbral de tiempo
$TargetPath = "\\Server\Compartido\Proyectos"
$DaysThreshold = 30

# Obtener archivos ejecutables modificados recientemente
$Files = Get-ChildItem -Path $TargetPath -Filter "*.exe" -File -Recurse |
    Where-Object { $_.LastWriteTime -gt (Get-Date).AddDays(-$DaysThreshold) }

# Analizar cada archivo
$Report = foreach ($File in $Files) {
    # Obtener el dueño del archivo (requiere permisos de lectura)
    $Owner = (Get-Acl $File.FullName).Owner
    
    # Determinar si el dueño es un usuario estándar o un grupo de admin
    $IsAdmin = $Owner -match "Administradores|SYSTEM|DOMAIN\\\\Admin"
    
    # Crear un objeto personalizado con la información relevante
    [PSCustomObject]@{
        File       = $File.Name
        Path       = $File.FullName
        Modified   = $File.LastWriteTime
        Owner      = $Owner
        IsAdmin    = $IsAdmin
        RiskLevel  = if ($IsAdmin) { "Bajo" } else { "Alto" }
    }
}

# Filtrar solo los de riesgo alto y exportar a CSV
$Report | Where-Object { $_.RiskLevel -eq "Alto" } | 
    Export-Csv -Path "C:\Temp\Auditoria_Riesgo.csv" -NoTypeInformation -Encoding UTF8

# Mostrar resumen en consola
Write-Host "Se encontraron $($Report.Count) archivos modificados en los últimos $DaysThreshold días."
Write-Host "De los cuales, $($Report | Where-Object { $_.RiskLevel -eq 'Alto' }).Count requieren revisión."
```

**Análisis:**
Este ejemplo demuestra el poder del pipeline: `Get-ChildItem` extrae datos, `Where-Object` filtra por tiempo, el bucle `foreach` y `Get-Acl` enriquecen el objeto con metadatos de seguridad, y finalmente se transforma la estructura para la exportación. Todo esto se hace con objetos nativos, evitando la frágil manipulación de cadenas de texto típica de los scripts por lotes (batch) antiguos.