# Guía de Ayuda y Descubribilidad en PowerShell

## Introducción

En el ecosistema de Windows, PowerShell se destaca no solo por su potencia de scripting, sino por su capacidad de autodescubrimiento. A diferencia de muchas herramientas de línea de comandos tradicionales donde la documentación es externa o escasa, PowerShell integra la ayuda directamente en el entorno. Esto significa que, en teoría, nunca deberías estar completamente desconectado de la información necesaria para usar un cmdlet.

La **descubribilidad** se refiere a la facilidad con la que un usuario puede encontrar, entender y aplicar los comandos disponibles. El motor de PowerShell está diseñado para que, si sabes qué hace una tarea (ej. "detener un proceso"), puedas encontrar el cmdlet correcto (`Stop-Process`) y luego descubrir cómo usarlo sin salir de la consola. Este módulo explica cómo aprovechar `Get-Help` y las herramientas de descubrimiento para mantener tu productividad.

## Cómo funciona Get-Help y la sintaxis de ayuda

`Get-Help` es el cmdlet fundamental para acceder a la documentación integrada. No es solo un manual estático; es dinámico y se actualiza según las versiones de PowerShell y los módulos instalados.

### Sintaxis básica

```powershell
Get-Help <NombreDelCmdlet>
```

Por ejemplo, para ver la ayuda de `Get-Process`:

```powershell
Get-Help Get-Process
```

Esto mostrará una vista preliminar con secciones como **SYNOPSIS** (resumen), **DESCRIPTION** (descripción detallada) y **EXAMPLES** (ejemplos de uso).

### Actualización crítica

Un error común es asumir que la ayuda es siempre actualizada. Por defecto, PowerShell no descarga automáticamente la ayuda en línea. Debes actualizarla manualmente:

```powershell
Update-Help
```

> **Nota:** Si no tienes permisos de administrador o conexión a internet, la actualización puede fallar. En entornos corporativos, a menudo se distribuye un paquete de ayuda offline.

### Uso avanzado de Get-Help

Para ver ejemplos prácticos (lo más útil para aprender), usa el parámetro `-Examples`:

```powershell
Get-Help Get-Process -Examples
```

Para ver la ayuda completa y detallada (incluyendo parámetros avanzados y tipos de entrada/salida), usa `-Full` o `-ShowWindow`:

```powershell
Get-Help Get-Process -ShowWindow
```

Esto abre una ventana de ayuda con formato HTML, mucho más legible que la salida en consola.

## Errores comunes de principiantes

1.  **No actualizar la ayuda:** Muchos usuarios se quejan de que `Get-Help` muestra información antigua o incompleta. La solución es casi siempre ejecutar `Update-Help`.
2.  **Ignorar la sección de ejemplos:** Leer toda la descripción técnica es lento y abrumador. Los ejemplos de `Get-Help -Examples` suelen ser el 80% de lo que necesitas saber para empezar.
3.  **Confundir parámetros obligatorios con opcionales:** `Get-Help` muestra los parámetros requeridos en negrita o con `[ ]` dependiendo de la versión. No asumir que todos los parámetros son opcionales.
4.  **No usar `-Full` o `-ShowWindow`:** La salida por defecto es truncada. Si no ves el parámetro que buscas, probablemente porque la vista resumida lo ocultó.

## Cuándo usarlo / Cuándo NO usarlo

**Usa `Get-Help` cuando:**
*   Estás escribiendo un script nuevo y no recuerdas la sintaxis exacta.
*   Necesitas saber qué tipos de objetos acepta un cmdlet (pipeline input).
*   Quieres ver ejemplos reales de uso (el recurso más valioso).

**No dependas exclusivamente de `Get-Help` cuando:**
*   La ayuda está desactualizada (verifica la fecha de la ayuda con `Get-Help <Cmdlet> | Select-Object LastUpdated`).
*   Necesitas entender conceptos teóricos profundos o mejores prácticas (aquí la documentación en línea de Microsoft Docs es superior).
*   Estás usando cmdlets de módulos personalizados que no tienen ayuda instalada. En ese caso, la ayuda puede estar vacía.

## Ejemplo extendido en contexto

Imagina que necesitas encontrar todos los procesos que están consumiendo más del 10% de la CPU en tu máquina y guardarlos en un archivo de registro.

**Paso 1: Descubrir el cmdlet**
No recuerdas el nombre exacto. Usas `Get-Command` para buscar:
```powershell
Get-Command *process*
```
Identificas `Get-Process`.

**Paso 2: Entender la sintaxis**
Consultas la ayuda para ver si puedes filtrar por CPU:
```powershell
Get-Help Get-Process -Parameter CPU
```
Ves que `Get-Process` no tiene un parámetro `-CPU` directo para filtrar al obtener los datos.

**Paso 3: Buscar ejemplos de uso**
```powershell
Get-Help Get-Process -Examples
```
Encuentras un ejemplo que usa `Sort-Object`. Esto te da la pista: necesitas combinar cmdlets.

**Paso 4: Construir la solución**
Sabes que puedes usar `Where-Object` para filtrar y `Sort-Object` para ordenar. Pruebas mentalmente la estructura:

```powershell
Get-Process | Sort-Object CPU -Descending | Where-Object CPU -gt 10
```

**Paso 5: Verificar con Get-Help**
Para asegurarte de la sintaxis de `Where-Object` (que es más compleja), ejecutas:
```powershell
Get-Help Where-Object -Examples
```
Confirmas que `-gt` es el operador correcto para "mayor que".

**Resultado final:**
El comando completo y funcional es:
```powershell
Get-Process | Sort-Object CPU -Descending | Where-Object { $_.CPU -gt 10 } | Format-Table Name, CPU, WorkingSet -AutoSize
```

Este flujo demuestra cómo `Get-Help` no es solo un diccionario, sino una herramienta de descubrimiento que te guía hacia la solución correcta mediante ejemplos y documentación de parámetros.