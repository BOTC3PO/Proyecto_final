# Condicionales en PowerShell: Tomando decisiones en la terminal

## Introducción

En la programación, los scripts lineales son útiles para tareas simples, pero la verdadera potencia de PowerShell (y de cualquier lenguaje de scripting) radica en su capacidad para tomar decisiones dinámicas. Los **condicionales** permiten que el script evalúe el estado actual del sistema, del usuario o de una variable y ejecute bloques de código diferentes según se cumpla o no una condición específica.

En la práctica, esto es fundamental para validar entradas, manejar errores antes de que ocurran, o adaptar el comportamiento de un script según el entorno (por ejemplo, verificar si un servicio está corriendo antes de intentar reiniciarlo).

## Explicación central: `if`, `else` y `elseif`

La estructura condicional básica en PowerShell se basa en el comando `if`. A diferencia de otros lenguajes, PowerShell utiliza palabras clave en inglés y se apoya fuertemente en el pipeline y el tipo de dato devuelto por la evaluación.

### Sintaxis básica

```powershell
if (<condición>) {
    <bloque de comandos a ejecutar si la condición es verdadera>
}
```

La `<condición>` debe evaluar a un valor booleano (`$true` o `$false`). Si el resultado no es explícitamente booleano, PowerShell intentará convertirlo.

### Estructura completa con `else` y `elseif`

Para cubrir múltiples escenarios, utilizamos `elseif` (una sola palabra) y `else` como cláusula por defecto.

```powershell
$edad = 20

if ($edad -lt 18) {
    Write-Host "Eres menor de edad."
}
elseif ($edad -ge 18 -and $edad -le 65) {
    Write-Host "Eres un adulto en edad laboral."
}
else {
    Write-Host "Eres un adulto mayor."
}
```

### Operadores de comparación

Es crucial usar los operadores específicos de PowerShell, no los símbolos de otros lenguajes como `==` o `!=`. Los más comunes son:

*   `-eq` (equal): Igual a.
*   `-ne` (not equal): Diferente de.
*   `-gt` (greater than): Mayor que.
*   `-lt` (less than): Menor que.
*   `-ge` (greater than or equal): Mayor o igual que.
*   `-le` (less than or equal): Menor o igual que.
*   `-like` / `-notlike`: Comparación de cadenas con comodines (`*`, `?`).
*   `-contains` / `-notcontains`: Verifica si un array contiene un valor.
*   `-in` / `-notin`: Verifica si un valor está dentro de un conjunto (nuevo en PowerShell 3.0+).

## Errores comunes de quien recién aprende

1.  **Confundir asignación con comparación**: Un error clásico es usar `=` para comparar valores. En PowerShell, `=` es el operador de asignación. Usarlo en una condición (`if ($x = 5)`) asignará el valor 5 a `$x` y la condición siempre será verdadera (porque `$x` ahora contiene un valor no nulo). Siempre usa `-eq` para comparaciones.
2.  **Omitir paréntesis en condiciones complejas**: Aunque PowerShell es flexible, es buena práctica rodear la condición con paréntesis para evitar ambigüedades, especialmente cuando se combinan operadores lógicos (`-and`, `-or`, `-xor`).
3.  **Confundir `-and` con `&&`**: En PowerShell, el operador lógico es `-and`. El símbolo `&&` es un operador de flujo de control que ejecuta el segundo comando solo si el primero tiene éxito, no evalúa una condición booleana dentro de un `if`.
4.  **Comparar objetos con `-eq`**: Al comparar objetos complejos (como resultados de `Get-Process`), `-eq` puede comportarse de forma inesperada si no se especifica la propiedad correcta. Es mejor comparar propiedades específicas: `if ($process.Name -eq "notepad")`.

## Cuándo usarlo / cuándo NO usarlo

**Cuándo usar condicionales:**
*   Cuando el flujo de ejecución depende de un estado cambiante (ej. existencia de un archivo, respuesta de un comando).
*   Para validar datos de entrada antes de procesarlos (defensive programming).
*   Para manejar errores lógicos, no errores de tiempo de ejecución (usa `try/catch` para excepciones).

**Cuándo NO usar condicionales (o usar con cuidado):**
*   **Anidamiento excesivo**: Si tienes más de tres niveles de `if` anidados, tu lógica es probablemente demasiado compleja. Refactoriza usando funciones o el operador ternario (aunque PowerShell no tiene un operador ternario nativo elegante como `? :`, se puede simular con `@($false, $true)[(Test-Path $file)]` para casos muy simples).
*   **Validación de tipos**: Para verificar tipos de datos, usa `-is` (ej. `$var -is [int]`) en lugar de comparaciones de strings.
*   **Lógica de flujo simple**: Si solo necesitas ejecutar un comando si otro falla, usa `;` o `&&` en lugar de un bloque `if` completo para mantener el código conciso.

## Ejemplo extendido en contexto: Verificación de servicios

Imagina que necesitas crear un script de mantenimiento que revise si el servicio de "Spooler de impresión" está activo. Si lo está, lo detiene; si no, lo inicia.

```powershell
# Definimos el nombre del servicio
$ServiceName = "Spooler"

# Obtenemos el estado actual
$Status = (Get-Service -Name $ServiceName).Status

# Evaluamos el estado con un condicional
if ($Status -eq "Running") {
    Write-Warning "El servicio $ServiceName está corriendo. Procediendo a detenerlo..."
    Stop-Service -Name $ServiceName -Force
    Write-Host "Servicio $ServiceName detenido exitosamente."
}
elseif ($Status -eq "Stopped") {
    Write-Host "El servicio $ServiceName ya está detenido. Iniciándolo..."
    Start-Service -Name $ServiceName
    Write-Host "Servicio $ServiceName iniciado exitosamente."
}
else {
    # Caso para estados intermedios o desconocidos
    Write-Error "El estado del servicio $ServiceName es desconocido o no se puede cambiar automáticamente. Estado actual: $Status"
}
```

En este ejemplo, el condicional permite al script actuar de manera autónoma y segura, adaptándose al estado real del sistema en el momento de la ejecución, en lugar de asumir un estado fijo que podría ser incorrecto.