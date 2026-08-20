# Macros Básicas (Nivel Avanzado): Automatización Eficiente con VBA

## Introducción: Más allá del grabador

En el entorno de ofimática, especialmente en Microsoft Excel y Word, las macros son el puente entre la interacción manual repetitiva y la automatización programática. Mientras que el "Grabador de Macros" es útil para principiantes, su salida es rígida y llena de código redundante. En un nivel avanzado, comprender la estructura subyacente de VBA (Visual Basic for Applications) permite crear soluciones escalables, mantenibles y robustas. No se trata solo de grabar pasos, sino de escribir lógica que responda a condiciones, maneje errores y manipule objetos de manera dinámica.

## Explicación Central: Objetos, Propiedades y Métodos

La base de VBA es el **Modelo de Objetos**. Cada elemento en una hoja de cálculo o documento es un objeto con propiedades (lo que es) y métodos (lo que hace).

### Sintaxis y Estructura Clave

Un procedimiento básico en VBA se define con `Sub` (subrutina) y termina con `End Sub`. A diferencia del grabador, el desarrollador avanzado utiliza referencias explícitas y variables para mejorar el rendimiento y la legibilidad.

```vba
Sub ProcesarDatosAvanzado()
    ' 1. Declaración de variables para tipado fuerte (mejor performance)
    Dim ws As Worksheet
    Dim ultimoFila As Long
    Dim i As Long
    
    ' 2. Referencia explícita al objeto (evita errores de contexto)
    Set ws = ThisWorkbook.Sheets("Datos")
    
    ' 3. Detección dinámica del rango (no usar rangos fijos como A1:A100)
    ultimoFila = ws.Cells(ws.Rows.Count, "A").End(xlUp).Row
    
    ' 4. Bucle con condición para evitar filas vacías
    For i = 2 To ultimoFila
        ' Lógica condicional compleja
        If ws.Cells(i, 1).Value > 1000 Then
            ws.Cells(i, 2).Font.Bold = True
            ws.Cells(i, 2).Interior.Color = RGB(255, 255, 0) ' Amarillo
        Else
            ' Limpieza de formato previo
            ws.Cells(i, 2).Font.Bold = False
            ws.Cells(i, 2).Interior.ColorIndex = xlNone
        End If
    Next i
    
    ' 5. Liberar memoria (buena práctica)
    Set ws = Nothing
End Sub
```

**Puntos clave de la sintaxis avanzada:**
*   **`With` Statement:** Agrupa operaciones sobre el mismo objeto para reducir la carga del procesador y limpiar el código.
    ```vba
    With ws.Range("A1")
        .Value = "Resultado"
        .Font.Size = 12
        .HorizontalAlignment = xlCenter
    End With
    ```
*   **`On Error Resume Next` vs. `On Error GoTo`:** El primero ignora errores (peligroso si no se usa con cuidado), el segundo redirige la ejecución a una etiqueta de manejo de errores para depurar fallos críticos.

## Errores Comunes de Aprendizaje

1.  **Dependencia de `Select` y `Activate`:** Los novatos escriben `Range("A1").Select` y luego `Selection.Font.Bold = True`. Esto es lento y propenso a fallos si la hoja activa cambia. La práctica avanzada exige operar directamente sobre el objeto: `Range("A1").Font.Bold = True`.
2.  **No declarar variables:** Escribir código sin `Option Explicit` al inicio del módulo permite errores de tipeo que se convierten en nuevas variables invisibles, causando comportamientos impredecibles.
3.  **Rangos Hardcoded:** Usar rangos fijos (`A1:A50`) en lugar de calcular el último uso (`End(xlUp)`). Esto hace que la macro falle o procese datos incorrectos cuando el volumen de información cambia.
4.  **Ignorar la actualización de pantalla:** Ejecutar bucles largos sin desactivar la actualización de pantalla (`Application.ScreenUpdating = False`) ralentiza la macro y molesta al usuario.

## Cuándo usarlo / Cuándo NO usarlo

**Usar Macros (VBA) cuando:**
*   Necesitas automatizar tareas repetitivas que cruzan múltiples aplicaciones (ej. extraer datos de PDF a Excel, o de Excel a PowerPoint).
*   La lógica es compleja y requiere condiciones anidadas, bucles o manejo de archivos del sistema.
*   El entorno es corporativo donde la versión de Office es estable y todos los usuarios tienen habilitado el soporte de macros.

**NO usar Macros cuando:**
*   La tarea es simple y puntual: usa Formato Condicional o Fórmulas (XLOOKUP, SUMAR.SI). Son más rápidas de implementar y no requieren distribución de archivos `.xlsm`.
*   Trabajas en entornos cloud modernos (Office 365 web): VBA no funciona en el navegador. Usa **Power Query** o **Power Automate** para integración en la nube.
*   La seguridad es crítica: las macros pueden ser vector de malware. Si el archivo se enviará a externos, las fórmulas o Power Query son más seguras y profesionales.

## Ejemplo Extendido: Limpieza y Estandarización de Reportes

**Contexto:**
Recibes un archivo de ventas mensual con datos desordenados: fechas en formato texto, nombres de productos con mayúsculas/minúsculas mezcladas, y filas vacías intercaladas. Debes generar un reporte limpio en una nueva hoja.

**Solución Avanzada:**

```vba
Sub EstandarizarReporte()
    Dim wsOrigen As Worksheet, wsDestino As Worksheet
    Dim ultFila As Long, i As Long, j As Long
    Dim filaDestino As Long
    
    ' Desactivar actualizaciones para velocidad
    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    
    Set wsOrigen = ThisWorkbook.Sheets("Entrada")
    Set wsDestino = ThisWorkbook.Sheets("Reporte_Limpio")
    
    ' Limpiar hoja de destino previa
    wsDestino.Cells.Clear
    
    ' Copiar encabezados
    wsOrigen.Rows(1).Copy Destination:=wsDestino.Rows(1)
    filaDestino = 2
    
    ' Detectar rango de datos
    ultFila = wsOrigen.Cells(wsOrigen.Rows.Count, "A").End(xlUp).Row
    
    ' Iterar sobre datos
    For i = 2 To ultFila
        ' Saltar filas vacías en columna A
        If wsOrigen.Cells(i, 1).Value <> "" Then
            ' Copiar valores
            wsOrigen.Rows(i).Copy Destination:=wsDestino.Rows(filaDestino)
            
            ' Aplicar transformaciones en la nueva hoja
            ' 1. Estandarizar fecha (asumiendo formato texto D/M/AAAA)
            If IsDate(wsDestino.Cells(filaDestino, 1).Value) Then
                wsDestino.Cells(filaDestino, 1).NumberFormat = "dd/mm/yyyy"
            End If
            
            ' 2. Normalizar texto (Mayúsculas en Producto)
            wsDestino.Cells(filaDestino, 2).Value = UCase(wsDestino.Cells(filaDestino, 2).Value)
            
            ' 3. Formato condicional simple vía código (opcional)
            If wsDestino.Cells(filaDestino, 3).Value > 10000 Then
                wsDestino.Cells(filaDestino, 3).Interior.Color = RGB(200, 255, 200)
            End If
            
            filaDestino = filaDestino + 1
        End If
    Next i
    
    ' Restaurar configuraciones
    Application.Calculation = xlCalculationAutomatic
    Application.ScreenUpdating = True
    
    MsgBox "Proceso completado. Se procesaron " & (filaDestino - 2) & " registros.", vbInformation
End Sub
```

Este ejemplo demuestra el uso de variables para controlar el flujo, manipulación directa de objetos sin selección, manejo de formatos y optimización de rendimiento, características distintivas del desarrollo de macros a nivel avanzado.