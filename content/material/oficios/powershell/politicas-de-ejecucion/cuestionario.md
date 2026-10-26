# PowerShell — Políticas de ejecución (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Para qué sirve

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Para controlar qué scripts se pueden ejecutar y de qué origen", "Para acelerar los scripts", "Para ocultar errores", "Para cifrar archivos"]
respuesta: "Para controlar qué scripts se pueden ejecutar y de qué origen"

enunciado: "¿Para qué sirve la política de ejecución de PowerShell?"

explicacion: |
  Ayuda a evitar la ejecución accidental de scripts, pero no es una barrera de seguridad infalible.
```

### 2 — Es una barrera

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "basico"
  tags: ["seguridad"]

tipo: vf
respuesta: falso

enunciado: "La política de ejecución impide de manera segura que un usuario malintencionado ejecute código."

explicacion: |
  Es una ayuda para evitar errores: se puede saltear fácilmente (por ejemplo, con `-ExecutionPolicy Bypass` o pegando el código en la consola). No reemplaza otros controles de seguridad.
```

### 3 — Ver la política

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "basico"
  tags: ["get"]

tipo: mc
opciones_explicitas: ["Get-ExecutionPolicy", "Show-Policy", "Get-Policy", "Test-Execution"]
respuesta: "Get-ExecutionPolicy"

enunciado: "¿Qué cmdlet muestra la política de ejecución actual?"

explicacion: |
  Con `-List` se ven las políticas de cada ámbito.
```

### 4 — Restricted

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "basico"
  tags: ["restricted"]

tipo: mc
opciones_explicitas: ["No permite ejecutar ningún script (solo comandos sueltos)", "Permite todo", "Solo permite scripts firmados", "Solo permite scripts locales"]
respuesta: "No permite ejecutar ningún script (solo comandos sueltos)"

enunciado: "¿Qué hace la política `Restricted`?"

explicacion: |
  Es la predeterminada en Windows de escritorio: de ahí el error "running scripts is disabled".
```

### 5 — RemoteSigned

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "basico"
  tags: ["remotesigned"]

tipo: mc
opciones_explicitas: ["Scripts locales, y los descargados solo si están firmados", "Solo los firmados", "Ninguno", "Todos los de internet"]
respuesta: "Scripts locales, y los descargados solo si están firmados"

enunciado: "¿Qué permite la política `RemoteSigned`?"

explicacion: |
  Es el equilibrio habitual para quien escribe sus propios scripts.
```

### 6 — AllSigned

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "intermedio"
  tags: ["allsigned"]

tipo: mc
opciones_explicitas: ["Que todo script esté firmado por un editor confiable", "Que ningún script esté firmado", "Que el script sea de la carpeta actual", "Que se ejecute como administrador"]
respuesta: "Que todo script esté firmado por un editor confiable"

enunciado: "¿Qué exige `AllSigned`?"

explicacion: |
  Es la política más estricta que permite scripts.
```

### 7 — Bypass

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "basico"
  tags: ["bypass"]

tipo: mc
opciones_explicitas: ["No bloquea nada y no muestra advertencias", "Bloquea todo", "Pregunta cada vez", "Solo funciona con scripts firmados"]
respuesta: "No bloquea nada y no muestra advertencias"

enunciado: "¿Qué hace `Bypass`?"

explicacion: |
  Es útil para tareas automáticas controladas, pero quita la protección contra errores.
```

### 8 — Cambiarla

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "basico"
  tags: ["set"]

tipo: mc
opciones_explicitas: ["Set-ExecutionPolicy RemoteSigned -Scope CurrentUser", "Set-ExecutionPolicy RemoteSigned -Scope LocalMachine", "Set-Policy RemoteSigned", "Change-ExecutionPolicy -All"]
respuesta: "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser"

enunciado: "¿Cómo se cambia la política solo para el usuario actual, sin ser administrador?"

explicacion: |
  `-Scope CurrentUser` solo afecta al usuario actual y no requiere permisos de administrador (que sí exige `LocalMachine`).
```

### 9 — Por proceso

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "intermedio"
  tags: ["scope"]

tipo: mc
opciones_explicitas: ["Cambia la política solo en esa ventana de PowerShell, hasta que se cierre", "Cambia la política para toda la máquina", "Cambia la política para siempre", "No cambia nada"]
respuesta: "Cambia la política solo en esa ventana de PowerShell, hasta que se cierre"

enunciado: "¿Qué efecto tiene `Set-ExecutionPolicy Bypass -Scope Process`?"

explicacion: |
  El ámbito `Process` no deja huella: al cerrar la ventana vuelve a la política anterior.
```

### 10 — Error típico

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "basico"
  tags: ["error"]

tipo: mc
opciones_explicitas: ["running scripts is disabled on this system", "command not found", "access denied", "file not found"]
respuesta: "running scripts is disabled on this system"

enunciado: "¿Qué mensaje aparece al ejecutar un script con `Restricted`?"

explicacion: |
  Se resuelve cambiando la política a una menos restrictiva (por ejemplo, `RemoteSigned`).
```

### 11 — Antes de cambiar

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Leerlo y entender qué hace", "Ejecutarlo como administrador", "Desactivar el antivirus", "Poner la política en `Bypass`"]
respuesta: "Leerlo y entender qué hace"

enunciado: "Antes de ejecutar un script que bajaste de internet, ¿qué es lo más importante?"

explicacion: |
  La política es una ayuda, pero la responsabilidad de no ejecutar código desconocido es de quien lo corre.
```

### 12 — Ámbitos

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "intermedio"
  tags: ["scope"]

tipo: mc
opciones_explicitas: ["LocalMachine", "Process", "CurrentUser", "Session"]
respuesta: "LocalMachine"

enunciado: "¿Cuál de estos ámbitos de política afecta a TODOS los usuarios de la máquina?"

explicacion: |
  Cambiar `LocalMachine` requiere privilegios de administrador.
```

### 13 — Prioridad de ámbitos

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "avanzado"
  tags: ["scope"]

tipo: mc
opciones_explicitas: ["Tiene prioridad y las demás se ignoran", "Se suma a las demás", "No tiene ningún efecto", "Solo se aplica los lunes"]
respuesta: "Tiene prioridad y las demás se ignoran"

enunciado: "Si la política del ámbito `MachinePolicy` (directiva de grupo) está definida, ¿qué pasa con las demás?"

explicacion: |
  Los ámbitos de directiva de grupo (`MachinePolicy`, `UserPolicy`) tienen prioridad sobre `Process`, `CurrentUser` y `LocalMachine`.
```

### 14 — Una sola vez

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "intermedio"
  tags: ["bypass"]

tipo: mc
opciones_explicitas: ["powershell -ExecutionPolicy Bypass -File script.ps1", "powershell -Admin script.ps1", "powershell --force script.ps1", "No se puede"]
respuesta: "powershell -ExecutionPolicy Bypass -File script.ps1"

enunciado: "¿Cómo se ejecuta un script una sola vez saltando la política, sin cambiarla?"

explicacion: |
  El parámetro de la línea de comandos afecta solo a ese proceso.
```

### 15 — Archivo bloqueado

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "intermedio"
  tags: ["unblock"]

tipo: mc
opciones_explicitas: ["Unblock-File", "Open-File", "Remove-Lock", "Release-Script"]
respuesta: "Unblock-File"

enunciado: "Un script descargado queda bloqueado. ¿Qué cmdlet quita la marca de bloqueo, después de revisarlo?"

explicacion: |
  `Unblock-File .\script.ps1` elimina la marca de origen de internet.
```

### 16 — Qué NO afecta

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "intermedio"
  tags: ["alcance"]

tipo: mc
opciones_explicitas: ["Los comandos que se escriben directamente en la consola", "Los scripts .ps1", "Los módulos .psm1", "Los archivos de configuración .ps1xml"]
respuesta: "Los comandos que se escriben directamente en la consola"

enunciado: "¿Qué NO controla la política de ejecución?"

explicacion: |
  La política solo regula la ejecución de archivos de script; lo que se escribe en la consola se ejecuta siempre.
```

### 17 — En otros sistemas

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "avanzado"
  tags: ["plataformas"]

tipo: mc
opciones_explicitas: ["No: ahí la política es siempre `Unrestricted`", "Sí, igual que en Windows", "Solo en Linux", "Solo en macOS"]
respuesta: "No: ahí la política es siempre `Unrestricted`"

enunciado: "¿Se aplica la política de ejecución en PowerShell para Linux y macOS?"

explicacion: |
  La política de ejecución es una función de Windows.
```

### 18 — Firmar

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "avanzado"
  tags: ["firma"]

tipo: mc
opciones_explicitas: ["Quién lo escribió y que no se modificó después de firmarlo", "Que no tiene errores", "Que es rápido", "Que es seguro hacer cualquier cosa"]
respuesta: "Quién lo escribió y que no se modificó después de firmarlo"

enunciado: "¿Qué permite comprobar la firma de un script?"

explicacion: |
  La firma da autenticidad e integridad; no garantiza que el código sea bueno.
```

### 19 — Con prudencia

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "basico"
  tags: ["buenas practicas"]

tipo: mc
opciones_explicitas: ["RemoteSigned en el ámbito CurrentUser", "Bypass en LocalMachine", "Unrestricted en LocalMachine", "Dejar siempre Restricted"]
respuesta: "RemoteSigned en el ámbito CurrentUser"

enunciado: "¿Cuál es la política más prudente para empezar a escribir tus propios scripts?"

explicacion: |
  Permite ejecutar tus scripts locales sin bajar la guardia con los descargados, y sin necesidad de ser administrador.
```

### 20 — Unrestricted

```
metadata:
  materia: "powershell"
  tema: "politicas_de_ejecucion"
  nivel: "intermedio"
  tags: ["unrestricted"]

tipo: mc
opciones_explicitas: ["Lo ejecuta, pero antes pide confirmación", "Lo bloquea siempre", "Lo ejecuta sin avisar", "Lo borra"]
respuesta: "Lo ejecuta, pero antes pide confirmación"

enunciado: "¿Qué hace la política `Unrestricted` con un script descargado de internet?"

explicacion: |
  `Unrestricted` permite todos los scripts; con los que vienen de internet, advierte y pregunta. `Bypass` no avisa nada.
```

