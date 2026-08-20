# Bucles en PowerShell: Repitiendo acciones con control

## Introducción
En la automatización y administración de sistemas, rara vez ejecutamos una única acción aislada. Con frecuencia, necesitamos aplicar un mismo comando a múltiples objetos: reiniciar 50 servidores, generar reportes para cada usuario o buscar archivos por fecha. Aquí es donde los **bucles** (o *loops*) entran en juego. Permiten iterar sobre una colección de datos, ejecutando un bloque de código para cada elemento hasta que se cumple una condición de finalización. En PowerShell, estos constructores son fundamentales para escribir scripts eficientes y legibles.

## Explicación central: Los cuatro pilares
PowerShell ofrece cuatro tipos de bucles principales. Aunque todos cumplen la función de repetición, su sintaxis y caso de uso varían significativamente.

### 1. `ForEach-Object` (El pipeline)
Es el más "powershellero" porque se integra con el flujo de datos (pipe). Se usa cuando ya tienes un conjunto de objetos fluyendo hacia el comando.

```powershell
# Obtiene el proceso y lo pasa al bucle
Get-Process | ForEach-Object {
    Write-Host "El proceso $($_.Name) tiene $($_.WorkingSet) bytes"
}
```
*Nota:* Aquí `$_` representa el objeto actual de la colección. Es ideal para procesamiento en tiempo real o cuando la colección es muy grande (evita cargar todo en memoria).

### 2. `foreach` (La palabra clave)
A diferencia del cmdlet anterior, `foreach` es un operador del lenguaje. Es más rápido porque no implica sobrecarga de pipeline y permite controlar mejor el flujo (como `break` o `continue`). Requiere que la colección esté definida previamente.

```powershell
$computers = "SRV01", "SRV02", "SRV03"

foreach ($computer in $computers) {
    # Intenta pinguear cada máquina
    if (Test-Connection -ComputerName $computer -Count 1 -Quiet) {
        Write-Host "$computer está en línea" -ForegroundColor Green
    } else {
        Write-Host "$computer NO responde" -ForegroundColor Red
    }
}
```

### 3. `while` y `do...while`
Se usan cuando no trabajamos con una colección fija, sino con una **condición**.

*   `while`: Evalúa la condición *antes* de ejecutar. Si es falsa al inicio, nunca entra.
*   `do...while`: Ejecuta el bloque *al menos una vez* y luego evalúa la condición.

```powershell
# Ejemplo: Esperar hasta que un servicio esté corriendo
$service = Get-Service -Name "Spooler"
while ($service.Status -ne "Running") {
    Start-Sleep -Seconds 5
    $service = Get-Service -Name "Spooler" # Actualizamos el estado
}
Write-Host "¡El servicio ya está corriendo!"
```

## Errores comunes de quien recién aprende
1.  **Confundir `foreach` (palabra clave) con `ForEach-Object` (cmdlet):** El cmdlet usa `$_` como referencia al objeto actual, mientras que la palabra clave usa la variable definida en el encabezado (`$item` en el ejemplo anterior). Mezclarlos genera errores silenciosos o de ejecución.
2.  **Olvídate de actualizar la condición:** En bucles `while` basados en estados (como esperar un proceso), es común olvidar actualizar la variable que se evalúa dentro del bucle. Esto crea un **bucle infinito** que congela la consola.
3.  **Rendimiento con `ForEach-Object` en colecciones grandes:** Usar `ForEach-Object` para iterar sobre una lista pequeña definida en una variable es menos eficiente que usar la palabra clave `foreach`, ya que introduce overhead de pipeline innecesario.

## Cuándo usarlo / Cuándo NO usarlo

| Situación | Recomendación | Razón |
| :--- | :--- | :--- |
| Procesando salida de otro cmdlet (`|`) | `ForEach-Object` | Es la forma nativa de PowerShell. |
| Iterar sobre una variable/array conocida | `foreach` (palabra clave) | Mayor velocidad y mejor depuración. |
| Esperar un evento externo o estado | `while` / `do` | La cantidad de iteraciones es desconocida. |
| **NO usar:** | Bucle anidado profundo | Si necesitas iterar sobre listas de listas, considera `Select-Object` o consultas Linq/SQL. Los bucles anidados >3 niveles son difíciles de leer y depurar. |

## Ejemplo extendido: Inventario de disco con reporte

Imagina que debes verificar el espacio libre de varios discos en múltiples servidores. No sabemos cuántos discos hay por servidor, por lo que usamos una estructura anidada.

```powershell
$servers = "Localhost", "SRV01" # Asumiendo que SRV01 es accesible por WMI/CIM

# Iteramos sobre cada servidor
foreach ($server in $servers) {
    Write-Host "=== Verificando $server ===" -ForegroundColor Cyan
    
    # Obtenemos los discos lógicos de ese servidor
    $disks = Get-CimInstance -ClassName Win32_LogicalDisk -ComputerName $server
    
    # Iteramos sobre cada disco del servidor actual
    foreach ($disk in $disks) {
        # Solo nos interesan los discos locales (tipo 3)
        if ($disk.DriveType -eq 3) {
            # Calculamos el porcentaje de espacio libre
            $sizeGB = [math]::Round($disk.Size / 1GB, 2)
            $freeGB = [math]::Round($disk.FreeSpace / 1GB, 2)
            $percentFree = [math]::Round(($freeGB / $sizeGB) * 100)
            
            # Lógica de alerta simple
            if ($percentFree -lt 10) {
                $color = "Red"
                $status = "CRÍTICO"
            } else {
                $color = "Green"
                $status = "OK"
            }
            
            # Imprimimos el reporte formateado
            Write-Host "$server : $($disk.DeviceID) - $percentFree% libre ($status)" -ForegroundColor $color
        }
    }
}
```

En este ejemplo, `foreach` externo maneja la lista de servidores, y `foreach` interno maneja la lista de discos de cada uno. Esto demuestra cómo combinar bucles para recorrer estructuras de datos jerárquicas de manera clara y eficiente.