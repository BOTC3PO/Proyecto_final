# Sintaxis Verbo-Sustantivo en PowerShell

## Introducción
En el mundo de la línea de comandos tradicional (como CMD o Bash), es común encontrarse con opciones complejas y banderas largas para ejecutar una tarea. PowerShell rompe con esa tradición adoptando una estructura gramatical mucho más intuitiva: **Verbos-Sustantivos**.

Esta convención no es solo estética; es el corazón de la filosofía de PowerShell. Al utilizar nombres compuestos que describen claramente la acción (verbo) y el objeto (sustantivo), el sistema hace que los comandos sean fáciles de recordar, leer y, crucialmente, descubribles mediante autocompletado.

## Explicación Central
La sintaxis básica de PowerShell sigue el patrón:

`<Verbo>-<Sustantivo>`

### 1. El Verbo (La Acción)
El verbo indica qué operación deseas realizar. PowerShell tiene un conjunto estricto de verbos aprobados por la comunidad (conocidos como *Approved Verbs*). No puedes inventar verbos arbitrariamente si quieres que tu script sea compatible con el ecosistema estándar o que otros usuarios lo entiendan inmediatamente.

Ejemplos comunes:
*   `Get`: Recuperar información.
*   `Set`: Modificar o configurar.
*   `New`: Crear algo nuevo.
*   `Remove`: Eliminar.
*   `Start`: Iniciar un proceso o servicio.

### 2. El Sustantivo (El Objeto)
El sustantivo especifica sobre qué se aplica la acción. Es el recurso, archivo, proceso o servicio con el que interactúas.

### Ejemplos Reales de Sintaxis
Veamos cómo se traduce esto a comandos prácticos:

*   **Listar archivos:**
    ```powershell
    Get-ChildItem -Path "C:\Usuarios"
    ```
    Aquí, `Get` es el verbo y `ChildItem` es el sustantivo (que representa archivos y carpetas). Nota que se usa *PascalCase* (mayúscula la primera letra de cada palabra compuesta).

*   **Crear un directorio:**
    ```powershell
    New-Item -Path "C:\NuevaCarpeta" -ItemType Directory
    ```
    `New` indica creación, e `Item` es el objeto genérico.

*   **Detener un proceso:**
    ```powershell
    Stop-Process -Name "notepad"
    ```
    `Stop` es la acción, `Process` es el objeto.

*   **Obtener ayuda:**
    ```powershell
    Get-Help Get-Process
    ```
    Incluso la ayuda sigue la convención.

**Importante sobre la nomenclatura:**
A diferencia de otros lenguajes que usan guiones bajos (`_`) o camelCase, PowerShell prefiere el **PascalCase** para los nombres de los cmdlets. Esto no es obligatorio para que el código funcione, pero es la norma de estilo oficial y ayuda a distinguir los cmdlets de las variables o funciones definidas por el usuario.

## Errores Comunes de Principiantes
1.  **Inventar verbos:** Intentar usar `Fetch-Data` o `Show-File`. PowerShell no reconocerá estos comandos nativamente porque `Fetch` y `Show` no están en la lista de verbos aprobados. Deberías usar `Get-Data` o `Get-Content`.
2.  **Confundir mayúsculas y minúsculas:** Aunque PowerShell no es sensible a mayúsculas/minúsculas en la sintaxis (`get-childitem` funciona), escribirlo como `Get-ChildItem` es fundamental para la legibilidad y el seguimiento de estándares.
3.  **Olvidar el guion:** Escribir `Get ChildItem` en lugar de `Get-ChildItem`. El guion es el separador obligatorio entre el verbo y el sustantivo.
4.  **Usar sustantivos ambiguos:** Intentar usar nombres muy genéricos que no reflejen el tipo de objeto. Por ejemplo, en lugar de `New-File`, se usa `New-Item` porque puede crear archivos, carpetas, registros del registro, etc.

## Cuándo usarlo / Cuándo NO usarlo
*   **Usa cmdlets (Verbo-Sustantivo):** Cuando necesitas interactuar con el sistema operativo, archivos, registros, servicios, o cualquier recurso que PowerShell gestione nativamente. Es la forma más robusta y mantenible de escribir scripts.
*   **No lo fuerces para scripts personalizados simples:** Si estás escribiendo un script rápido para uso personal que no espera ser compartido o integrado con otros módulos, puedes usar funciones o alias. Sin embargo, incluso para scripts propios, adherirse a esta convención es una excelente práctica profesional.
*   **Trade-off:** La rigidez de los verbos aprobados puede sentirse limitante al principio. A veces no hay un verbo perfecto para tu acción específica. En esos casos, se suele elegir el verbo más cercano (ej. `Update` en lugar de `Modify` si no hay `Update-Item` disponible para ese contexto específico, aunque `Set` es más común para modificaciones).

## Ejemplo Extendido en Contexto
Imagina que necesitas automatizar el mantenimiento de un servidor: crear un log, detener un servicio específico y verificar si el disco tiene espacio.

**Escenario:**
Quieres escribir un script que verifique el espacio en disco del sistema, y si hay menos de 10GB libres, detenga el servicio "Print Spooler" y registre el evento.

**Código:**

```powershell
# 1. Obtener información del disco (Get-Volume es el cmdlet moderno)
$DiscoSistema = Get-Volume -DriveLetter C

# Verificar el espacio disponible (FreeSpace está en bytes)
if ($DiscoSistema.FreeSpace -lt 10GB) {
    
    # 2. Detener el servicio (Stop-Service)
    Write-Host "Espacio bajo. Deteniendo servicio de impresión..."
    Stop-Service -Name "Spooler" -Force
    
    # 3. Registrar el evento en el Log de Aplicaciones (New-EventLog y Write-EventLog)
    # Primero verificamos si el log existe, si no, lo creamos
    if (-not (Get-EventLog -LogName "Application" -Source "MyScript" -ErrorAction SilentlyContinue)) {
        New-EventLog -LogName "Application" -Source "MyScript"
    }
    
    Write-EventLog -LogName "Application" -Source "MyScript" -EventId 1001 -EntryType Warning -Message "Disco C: con espacio crítico. Servicio Spooler detenido."
}
```

En este ejemplo, cada acción sigue estrictamente la estructura `Verbo-Sustantivo`. Esto permite que cualquier administrador de sistemas que lea el código entienda inmediatamente qué hace cada línea sin necesidad de comentarios extensos, gracias a la consistencia de la sintaxis.