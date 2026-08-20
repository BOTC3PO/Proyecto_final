# Gestión de Servicios en PowerShell: Más allá del `Start-Service`

En el contexto de la administración de sistemas Windows, los servicios son procesos que se ejecutan en segundo plano y son fundamentales para el funcionamiento del SO y de las aplicaciones empresariales. Mientras que las herramientas gráficas (como `services.msc`) son útiles para inspección rápida, PowerShell permite automatizar, auditar y controlar el ciclo de vida de estos procesos de manera programática.

A nivel intermedio, no basta con saber iniciar o detener un servicio; es crucial entender cómo interactuar con el **WMI (Windows Management Instrumentation)** y el **CIM (Common Information Model)**, así como cómo manejar dependencias y estados transitorios.

## Comandos Core y Sintaxis Práctica

Los cmdlets principales para esta tarea son `Get-Service`, `Start-Service`, `Stop-Service`, `Restart-Service` y `Set-Service`. Sin embargo, la potencia real reside en el filtrado y la manipulación de propiedades.

### Filtrado eficiente
Nunca ejecutes `Get-Service` sin filtros en servidores con cientos de servicios. Usa el parámetro `-Name` con comodines o `-DisplayName` para búsquedas más legibles.

```powershell
# Obtiene todos los servicios cuyo nombre comienza con 'W' y están detenidos
Get-Service -Name 'W*' -State Stopped
```

### Gestión de dependencias
Un error común es intentar detener un servicio que es crítico para otro activo. PowerShell te avisa, pero puedes forzar la acción si es necesario (con precaución).

```powershell
# Detiene el servicio 'Spooler' y sus dependencias si es posible
Stop-Service -Name 'Spooler' -Force -PassThru
```

El switch `-PassThru` es vital: por defecto, estos cmdlets no devuelven objetos a la consola después de ejecutar. `-PassThru` permite encadenar operaciones o verificar el estado resultante.

## Errores Comunes en el Nivel Intermedio

1.  **Ignorar los permisos:** Ejecutar comandos de gestión sin privilegios de administrador resultará en un `AccessDenied`. Siempre verifica el contexto de ejecución o usa `Start-Process -Verb RunAs`.
2.  **Confundir `Name` con `DisplayName`:** El nombre interno (ej. `wuauserv`) no siempre coincide con el nombre visible (ej. `Windows Update`). Usar el nombre incorrecto en `-Name` genera errores silenciosos o resultados vacíos.
3.  **No manejar tiempos de espera:** Los servicios no siempre se detienen inmediatamente. Asumir que `Stop-Service` ha finalizado el proceso en el siguiente comando puede causar condiciones de carrera. Para scripts robustos, se recomienda verificar el estado en un bucle o usar `Wait-Process` si se conoce el PID.

## Cuándo usar PowerShell vs. Cuándo no

*   **Usa PowerShell cuando:**
    *   Necesites auditar el estado de servicios en múltiples servidores (remotamente).
    *   Debas configurar parámetros avanzados (tipo de inicio, cuenta de logon) mediante `Set-Service` o `sc.exe`.
    *   Estés integrando la gestión de servicios en un pipeline de despliegue (CI/CD).
*   **No lo uses (o ten cuidado) cuando:**
    *   Estés manipulando servicios del kernel o de seguridad crítica. Un error aquí puede dejar el sistema inestable o inaccesible.
    *   La tarea sea única y esporádica para un usuario no técnico. La interfaz gráfica es más intuitiva para diagnósticos puntuales.

## Ejemplo Extendido: Auditoría y Reinicio Seguro

Imagina que debes asegurarte de que el servicio de registro de eventos (`EventLog`) esté activo en varios servidores antes de un despliegue de monitorización.

```powershell
$servers = 'SRV01', 'SRV02', 'SRV03'

foreach ($server in $servers) {
    Write-Host "Verificando $server..." -ForegroundColor Cyan
    
    try {
        # Intentamos obtener el servicio remotamente
        $svc = Get-Service -ComputerName $server -Name 'EventLog' -ErrorAction Stop
        
        if ($svc.Status -ne 'Running') {
            Write-Host "  - Servicio detenido. Iniciando..." -ForegroundColor Yellow
            
            # Iniciamos el servicio
            Start-Service -ComputerName $server -Name 'EventLog' -ErrorAction Stop
            
            # Esperamos a que cambie el estado real (no solo el comando haya terminado)
            $svc = Get-Service -ComputerName $server -Name 'EventLog'
            
            if ($svc.Status -eq 'Running') {
                Write-Host "  - Éxito: Servicio activo." -ForegroundColor Green
            } else {
                Write-Host "  - Error: El servicio no pudo iniciarse." -ForegroundColor Red
            }
        } else {
            Write-Host "  - OK: Servicio ya activo." -ForegroundColor Green
        }
    }
    catch {
        Write-Host "  - Error de conexión o permisos en $server: $_" -ForegroundColor Red
    }
}
```

Este ejemplo demuestra la importancia del manejo de errores (`try/catch`), la verificación de estado post-operación y la capacidad de escalar la gestión más allá de la máquina local.