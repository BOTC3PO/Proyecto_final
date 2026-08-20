# Diagnóstico de Problemas con PowerShell: Enfoque Avanzado

## Introducción: Más allá del `Get-EventLog`

En el nivel avanzado de administración de sistemas, el diagnóstico no se trata de ejecutar comandos al azar, sino de aplicar una metodología estructurada para aislar la causa raíz de un incidente. PowerShell, al ser una herramienta nativa y profunda del ecosistema Windows, permite acceder a capas de telemetría que las interfaces gráficas ocultan. El diagnóstico avanzado implica combinar la recolección de datos (logros, métricas de rendimiento, estado de servicios) con la correlación temporal y la filtración lógica para reducir el ruido y encontrar la aguja en el pajar.

## Explicación Central: Telemetría y Correlación

El diagnóstico moderno en PowerShell se basa en dos pilares: **Event Tracing for Windows (ETW)** y **Performance Counters**. Mientras que los cmdlets tradicionales como `Get-Process` o `Get-Service` ofrecen una "foto estática" del estado actual, el diagnóstico avanzado requiere observar el comportamiento a lo largo del tiempo.

### 1. Uso de `Get-WinEvent` con Filtros Precisos
Olvídate de descargar logs completos y buscar texto plano. Usa `Hashtable` para filtrar por ID de evento, nivel de severidad y nombre del proveedor en tiempo real.

```powershell
# Ejemplo: Buscar errores críticos del sistema de archivos en las últimas 2 horas
$Filter = @{
    LogName   = 'System'
    Level     = 2  # Error
    StartTime = (Get-Date).AddHours(-2)
    ProviderName = 'NTFS'
}
Get-WinEvent -FilterHashtable $Filter -ErrorAction SilentlyContinue
```

### 2. Monitoreo de Rendimiento con `Get-Counter`
Para diagnósticos de cuellos de botella (CPU, Disk I/O, Memory), no confíes solo en el Administrador de tareas. Usa `Get-Counter` para muestrear intervalos específicos.

```powershell
# Muestra el % de uso de CPU y el tiempo de espera de disco cada segundo durante 10 segundos
Get-Counter -Counter '\Processor(_Total)\% Processor Time', '\PhysicalDisk(_Total)\Avg. Disk sec/Transfer' -SampleInterval 1 -MaxSamples 10
```

### 3. Trazado de Llamadas con `Trace-Command`
Cuando un cmdlet se comporta de manera extraña (ej. tarda 30 segundos en ejecutarse), `Trace-Command` permite ver qué subprocesos internos se están ejecutando, qué proveedores se consultan y dónde se pierde tiempo.

```powershell
Trace-Command -Name Provider, ParameterBinding, PSDebug -Expression { Get-Service -Name Spooler } -Passthru
```
*Nota: La salida de `Trace-Command` es verbose y debe redirigirse a un archivo o revisarse en una pestaña de consola dedicada.*

## Errores Comunes de Principiantes Avanzados

1.  **Filtrar en memoria en lugar de en origen**: Usar `Get-WinEvent` sin `FilterHashtable` y luego aplicar `Where-Object` es ineficiente y lento para logs grandes. Siempre filtra en el origen (el sistema operativo) si es posible.
2.  **Ignorar la jerarquía de errores**: No distinguir entre `ErrorRecord`, `Exception` y `StackTrace`. Un error de "No se encontró el objeto" (`ObjectNotFound`) es diferente a un error de permiso (`AccessDenied`).
3.  **Sobrecarga de `Write-Verbose` sin `-Verbose`**: Escribir líneas de depuración que nunca se ven porque el usuario no ejecuta el script con la bandera `-Verbose`.
4.  **No considerar la zona horaria**: Los logs de eventos y los contadores de rendimiento a menudo usan UTC. Comparar timestamps sin normalizar la zona horaria lleva a conclusiones erróneas sobre la causalidad.

## Cuándo usarlo / Cuándo NO usarlo

*   **Úsalo cuando:**
    *   El problema es intermitente o relacionado con rendimiento (latencia, I/O).
    *   Necesitas automatizar la recolección de datos para múltiples servidores.
    *   La GUI (Event Viewer, Task Manager) no ofrece la granularidad necesaria (ej. filtrar por ID de evento específico en un log de 10 millones de entradas).
*   **NO lo uses cuando:**
    *   El problema es de configuración simple de red (usa `Test-NetConnection` o `ping` primero).
    *   El servicio está caído y sabes exactamente por qué (reiniciar el servicio es la solución, no el diagnóstico profundo).
    *   Estás en un entorno crítico sin permiso de escritura en logs de auditoría (ETW puede generar overhead significativo).

## Ejemplo Extendido: Diagnóstico de Latencia en un Servicio Web

**Contexto:** Un desarrollador reporta que una aplicación web interna es lenta solo en el servidor de producción durante las horas pico.

**Paso 1: Identificar el cuello de botella.**
Primero, determinamos si es CPU, Memoria, Disco o Red.

```powershell
# Monitoreo rápido de 5 minutos
$Counters = @(
    '\Processor(_Total)\% Processor Time',
    '\Memory\Available MBytes',
    '\Network Interface(*)\Bytes Total/sec',
    '\PhysicalDisk(*)\Avg. Disk Queue Length'
)
Get-Counter -Counter $Counters -SampleInterval 5 -MaxSamples 12 | 
    Select-Object -ExpandProperty CounterSamples | 
    Group-Object -Property InstanceName | 
    ForEach-Object {
        [PSCustomObject]@{
            Component = $_.Name
            AvgValue  = [math]::Round(($_.Group | Measure-Object -Property CookedValue -Average).Average, 2)
            MaxValue  = [math]::Round(($_.Group | Measure-Object -Property CookedValue -Maximum).Maximum, 2)
        }
    }
```

**Paso 2: Correlacionar con Eventos del Sistema.**
Si el `Avg. Disk Queue Length` se dispara, revisamos qué procesos están escribiendo en disco en ese momento.

```powershell
# Buscar eventos de I/O de alto consumo en el mismo intervalo de tiempo
$StartTime = (Get-Date).AddMinutes(-5)
Get-WinEvent -FilterHashtable @{
    LogName = 'System'
    ID = 2004, 2005, 2006 # Eventos de NTFS de alto rendimiento
    StartTime = $StartTime
} | Select-Object TimeCreated, Message | Format-Table -AutoSize
```

**Paso 3: Aislar el proceso.**
Si los logs apuntan a una aplicación específica, usamos `Get-Process` con `Sort-Object` para ver el consumo de memoria y tiempo de CPU acumulado.

```powershell
Get-Process | Sort-Object WorkingSet64 -Descending | Select-Object -First 5 Name, WorkingSet64, CPU
```

Este enfoque sistemático permite pasar de "está lento" a "el disco C: tiene una cola de espera de 5 durante 3 minutos, causado por el proceso `w3wp.exe` escribiendo logs de acceso", facilitando la solución precisa.