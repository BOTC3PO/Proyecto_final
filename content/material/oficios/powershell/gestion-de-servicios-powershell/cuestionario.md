# PowerShell — Servicios (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué es un servicio

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "basico"
  tags: ["concepto"]

tipo: mc
opciones_explicitas: ["Un programa que corre en segundo plano, sin ventana, que suele arrancar con el sistema", "Un programa que se ejecuta solo una vez", "Un archivo de configuración", "Un tipo de usuario"]
respuesta: "Un programa que corre en segundo plano, sin ventana, que suele arrancar con el sistema"

enunciado: "¿Qué es un servicio de Windows?"

explicacion: |
  Ejemplos: la cola de impresión, el servidor web, las actualizaciones.
```

### 2 — Listar servicios

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "basico"
  tags: ["get-service"]

tipo: mc
opciones_explicitas: ["Get-Service", "Show-Service", "List-Daemons", "Get-Services"]
respuesta: "Get-Service"

enunciado: "¿Qué cmdlet muestra los servicios?"

explicacion: |
  En singular. Es el equivalente a la consola `services.msc`.
```

### 3 — Estados

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "basico"
  tags: ["status"]

tipo: mc
opciones_explicitas: ["Running y Stopped", "On y Off", "Open y Closed", "Up y Down"]
respuesta: "Running y Stopped"

enunciado: "¿Cuáles son los dos estados más comunes de un servicio?"

explicacion: |
  También existe `Paused` para servicios que admiten pausa.
```

### 4 — Filtrar en ejecución

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "basico"
  tags: ["where"]

tipo: mc
opciones_explicitas: ["Get-Service | Where-Object Status -eq 'Running'", "Get-Service -Running", "Get-Service | Where Running", "Get-Service -Status On"]
respuesta: "Get-Service | Where-Object Status -eq 'Running'"

enunciado: "¿Cómo se listan solo los servicios en ejecución?"

explicacion: |
  `Where-Object` filtra por la propiedad `Status`.
```

### 5 — Nombre corto y descriptivo

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "basico"
  tags: ["nombres"]

tipo: mc
opciones_explicitas: ["`Name` es el nombre corto interno; `DisplayName`, el nombre descriptivo", "Son iguales", "`DisplayName` es el nombre corto", "`Name` solo existe en Linux"]
respuesta: "`Name` es el nombre corto interno; `DisplayName`, el nombre descriptivo"

enunciado: "¿Qué diferencia hay entre `Name` y `DisplayName` de un servicio?"

explicacion: |
  Por ejemplo `Spooler` (Name) y "Cola de impresión" (DisplayName). Los cmdlets aceptan ambos con `-Name` o `-DisplayName`.
```

### 6 — Tipo de inicio

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "basico"
  tags: ["starttype"]

tipo: mc
opciones_explicitas: ["Cómo arranca el servicio: Automatic, Manual o Disabled", "Cuándo se instaló", "Quién lo creó", "Cuánta memoria usa"]
respuesta: "Cómo arranca el servicio: Automatic, Manual o Disabled"

enunciado: "¿Qué indica la propiedad `StartType`?"

explicacion: |
  `Automatic` arranca con el sistema, `Manual` solo cuando alguien lo pide y `Disabled` no arranca.
```

### 7 — Iniciar

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "basico"
  tags: ["start"]

tipo: mc
opciones_explicitas: ["Start-Service", "Run-Service", "Begin-Service", "Enable-Service"]
respuesta: "Start-Service"

enunciado: "¿Qué cmdlet inicia un servicio detenido?"

explicacion: |
  Por ejemplo, `Start-Service Spooler`.
```

### 8 — Reiniciar

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "basico"
  tags: ["restart"]

tipo: mc
opciones_explicitas: ["Restart-Service", "Reload-Service", "Reset-Service", "Refresh-Service"]
respuesta: "Restart-Service"

enunciado: "¿Qué cmdlet detiene y vuelve a iniciar un servicio?"

explicacion: |
  Es lo habitual cuando un servicio se comporta mal.
```

### 9 — Permisos

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "basico"
  tags: ["permisos"]

tipo: mc
opciones_explicitas: ["Ejecutar PowerShell como administrador", "Nada especial", "Reiniciar el equipo", "Cerrar sesión"]
respuesta: "Ejecutar PowerShell como administrador"

enunciado: "¿Qué suele hacer falta para iniciar o detener un servicio?"

explicacion: |
  Sin permisos aparece un error de acceso denegado.
```

### 10 — Deshabilitar

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "intermedio"
  tags: ["set-service"]

tipo: mc
opciones_explicitas: ["Impide que el servicio arranque; si ya está en marcha, sigue corriendo hasta detenerlo", "Lo detiene inmediatamente", "Lo borra", "Lo reinicia"]
respuesta: "Impide que el servicio arranque; si ya está en marcha, sigue corriendo hasta detenerlo"

enunciado: "¿Qué hace `Set-Service Spooler -StartupType Disabled`?"

explicacion: |
  Para detenerlo hay que usar también `Stop-Service`.
```

### 11 — Dependientes

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "intermedio"
  tags: ["dependientes"]

tipo: mc
opciones_explicitas: ["Falla o detiene también a los dependientes, si se usa `-Force`", "Ninguno", "Se borran los dependientes", "Se reinstalan solos"]
respuesta: "Falla o detiene también a los dependientes, si se usa `-Force`"

enunciado: "¿Qué problema hay al detener un servicio del que dependen otros?"

explicacion: |
  Antes de actuar, `(Get-Service X).DependentServices` muestra quiénes lo necesitan.
```

### 12 — Detenido y automático

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "intermedio"
  tags: ["diagnostico"]

tipo: mc
opciones_explicitas: ["Que falló al iniciar o se detuvo por un problema", "Que está funcionando perfectamente", "Que está deshabilitado", "Que se instaló mal"]
respuesta: "Que falló al iniciar o se detuvo por un problema"

enunciado: "Un servicio con `StartType` Automatic y `Status` Stopped, ¿qué suele indicar?"

explicacion: |
  Es un buen punto de partida para el diagnóstico: revisar el registro de eventos.
```

### 13 — Buscar por descripción

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "basico"
  tags: ["displayname"]

tipo: mc
opciones_explicitas: ["Get-Service -DisplayName \"*actualiz*\"", "Get-Service -Like actualiz", "Find-Service actualiz", "Get-Service | Find actualiz"]
respuesta: "Get-Service -DisplayName \"*actualiz*\""

enunciado: "¿Cómo se buscan servicios cuyo nombre descriptivo contiene \"actualiz\"?"

explicacion: |
  El parámetro `-DisplayName` admite comodines.
```

### 14 — Probar antes

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "basico"
  tags: ["whatif"]

tipo: mc
opciones_explicitas: ["Con `-WhatIf`", "Con `-Dry`", "Con `-Safe`", "No se puede"]
respuesta: "Con `-WhatIf`"

enunciado: "¿Cómo se prueba `Stop-Service Spooler` sin detenerlo realmente?"

explicacion: |
  `-WhatIf` muestra qué se haría sin hacerlo.
```

### 15 — Servicios y procesos

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "intermedio"
  tags: ["procesos"]

tipo: mc
opciones_explicitas: ["Cada servicio corre dentro de un proceso, que a veces comparte con otros servicios", "Son lo mismo", "Un servicio no usa procesos", "Un proceso es un tipo de servicio"]
respuesta: "Cada servicio corre dentro de un proceso, que a veces comparte con otros servicios"

enunciado: "¿Qué relación hay entre un servicio y un proceso?"

explicacion: |
  Por eso detener un servicio no es lo mismo que terminar un proceso.
```

### 16 — Servicios por estado

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "intermedio"
  tags: ["group"]

tipo: mc
opciones_explicitas: ["Get-Service | Group-Object Status", "Get-Service -Count", "Get-Service | Measure Status", "Count-Service"]
respuesta: "Get-Service | Group-Object Status"

enunciado: "¿Cómo se cuentan los servicios por estado?"

explicacion: |
  `Group-Object` agrupa por la propiedad y muestra cuántos hay en cada grupo.
```

### 17 — Errores del sistema

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "intermedio"
  tags: ["eventos"]

tipo: mc
opciones_explicitas: ["En el registro de eventos del sistema (por ejemplo, con `Get-WinEvent`)", "En el Escritorio", "En la papelera", "En el reloj del sistema"]
respuesta: "En el registro de eventos del sistema (por ejemplo, con `Get-WinEvent`)"

enunciado: "¿Dónde se mira por qué falló un servicio?"

explicacion: |
  El Visor de eventos y `Get-WinEvent -LogName System` muestran los errores y advertencias.
```

### 18 — En Linux

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "avanzado"
  tags: ["plataformas"]

tipo: mc
opciones_explicitas: ["No: los servicios se administran con otras herramientas (como `systemctl`)", "Sí, igual que en Windows", "Solo con `sudo`", "Solo en macOS"]
respuesta: "No: los servicios se administran con otras herramientas (como `systemctl`)"

enunciado: "¿Se puede usar `Get-Service` en PowerShell para Linux?"

explicacion: |
  Los cmdlets de servicios son de Windows.
```

### 19 — Antes de tocar

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "basico"
  tags: ["buenas practicas"]

tipo: mc
opciones_explicitas: ["Anotar su estado y tipo de inicio actuales para poder volver atrás", "Nada especial", "Reiniciar el equipo", "Borrarlo"]
respuesta: "Anotar su estado y tipo de inicio actuales para poder volver atrás"

enunciado: "Antes de modificar la configuración de un servicio, ¿qué conviene hacer?"

explicacion: |
  Un cambio sin registro es difícil de deshacer, sobre todo con servicios de seguridad, red o actualización.
```

### 20 — Quién lo necesita

```
metadata:
  materia: "powershell"
  tema: "gestion_de_servicios_powershell"
  nivel: "avanzado"
  tags: ["dependencias"]

tipo: mc
opciones_explicitas: ["ServicesDependedOn", "DependentServices", "RequiredBy", "Needs"]
respuesta: "ServicesDependedOn"

enunciado: "¿Qué propiedad muestra de qué otros servicios depende uno dado?"

explicacion: |
  `ServicesDependedOn` lista de qué depende; `DependentServices` lista quién depende de él.
```

