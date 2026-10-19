# PowerShell — Procesos (cuestionario, 20 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Listar procesos

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "basico"
  tags: ["get-process"]

tipo: mc
opciones_explicitas: ["Get-Process", "Show-Process", "List-Tasks", "Get-Task"]
respuesta: "Get-Process"

enunciado: "¿Qué cmdlet muestra los procesos en ejecución?"

explicacion: |
  Es el equivalente de `ps` en Linux o del Administrador de tareas.
```

### 2 — Por nombre

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "basico"
  tags: ["nombre"]

tipo: mc
opciones_explicitas: ["Muestra los procesos cuyo nombre es notepad", "Inicia notepad", "Detiene notepad", "Muestra la ayuda de notepad"]
respuesta: "Muestra los procesos cuyo nombre es notepad"

enunciado: "¿Qué hace `Get-Process notepad`?"

explicacion: |
  El nombre se escribe sin `.exe`. Admite comodines: `Get-Process note*`.
```

### 3 — Qué es el Id

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "basico"
  tags: ["id"]

tipo: mc
opciones_explicitas: ["El número que identifica de forma única al proceso mientras corre (PID)", "Su contraseña", "La cantidad de CPU", "El nombre del usuario"]
respuesta: "El número que identifica de forma única al proceso mientras corre (PID)"

enunciado: "¿Qué es la propiedad `Id` de un proceso?"

explicacion: |
  Dos procesos pueden tener el mismo nombre, pero cada uno tiene su Id.
```

### 4 — La propiedad CPU

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "intermedio"
  tags: ["cpu"]

tipo: mc
opciones_explicitas: ["Los segundos de procesador usados en total desde que empezó", "El porcentaje actual de uso de CPU", "La cantidad de núcleos", "La temperatura"]
respuesta: "Los segundos de procesador usados en total desde que empezó"

enunciado: "¿Qué representa la propiedad `CPU` en `Get-Process`?"

explicacion: |
  No es un porcentaje en tiempo real. Para eso hay que medir dos veces y comparar, o usar contadores de rendimiento.
```

### 5 — Memoria

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "basico"
  tags: ["memoria"]

tipo: mc
opciones_explicitas: ["La memoria física que usa el proceso, en bytes", "El tamaño del programa en el disco", "La cantidad de archivos abiertos", "La velocidad del proceso"]
respuesta: "La memoria física que usa el proceso, en bytes"

enunciado: "¿Qué muestra la propiedad `WorkingSet`?"

explicacion: |
  Para pasarla a megabytes se divide por `1MB`.
```

### 6 — Los que más consumen

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "basico"
  tags: ["sort"]

tipo: mc
opciones_explicitas: ["Get-Process | Sort-Object CPU -Descending | Select-Object -First 5", "Get-Process -Top 5 CPU", "Get-Process | Max 5 CPU", "Get-Process | Sort-Object CPU | Select-Object -First 5"]
respuesta: "Get-Process | Sort-Object CPU -Descending | Select-Object -First 5"

enunciado: "¿Cómo se ven los 5 procesos que más CPU usaron?"

explicacion: |
  Hay que ordenar de mayor a menor (`-Descending`) y quedarse con los primeros. Sin `-Descending` saldrían los de menor uso.
```

### 7 — Colgados

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "intermedio"
  tags: ["responding"]

tipo: mc
opciones_explicitas: ["Get-Process | Where-Object { -not $_.Responding }", "Get-Process -Hung", "Get-Process | Where-Object Dead", "Get-Hang"]
respuesta: "Get-Process | Where-Object { -not $_.Responding }"

enunciado: "¿Cómo se buscan los procesos que no responden?"

explicacion: |
  `Responding` es `$false` cuando una aplicación con ventana no atiende los mensajes del sistema.
```

### 8 — Iniciar

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "basico"
  tags: ["start-process"]

tipo: mc
opciones_explicitas: ["Start-Process", "Run-Process", "Open-App", "Launch-Item"]
respuesta: "Start-Process"

enunciado: "¿Qué cmdlet inicia un programa?"

explicacion: |
  Por ejemplo, `Start-Process notepad`.
```

### 9 — Esperar

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "intermedio"
  tags: ["wait"]

tipo: mc
opciones_explicitas: ["Espera a que el programa termine antes de seguir", "Lo ejecuta en segundo plano", "Lo ejecuta dos veces", "Lo ejecuta más lento"]
respuesta: "Espera a que el programa termine antes de seguir"

enunciado: "¿Qué hace `Start-Process app.exe -Wait`?"

explicacion: |
  Sin `-Wait`, el script continúa mientras el programa sigue ejecutándose.
```

### 10 — Detener

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "basico"
  tags: ["stop-process"]

tipo: mc
opciones_explicitas: ["Termina todos los procesos llamados notepad", "Solo el primero", "Solo el que tiene el foco", "Pausa el proceso"]
respuesta: "Termina todos los procesos llamados notepad"

enunciado: "¿Qué hace `Stop-Process -Name notepad`?"

explicacion: |
  Con `-Id` se detiene un proceso en particular.
```

### 11 — Con la tubería

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "basico"
  tags: ["tuberia"]

tipo: mc
opciones_explicitas: ["Termina los procesos notepad que recibe por la tubería", "Nada, falta un parámetro", "Muestra los procesos", "Abre notepad"]
respuesta: "Termina los procesos notepad que recibe por la tubería"

enunciado: "¿Qué hace `Get-Process notepad | Stop-Process`?"

explicacion: |
  La tubería entrega los objetos proceso a `Stop-Process`.
```

### 12 — Probar antes

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "basico"
  tags: ["whatif"]

tipo: mc
opciones_explicitas: ["Agregando `-WhatIf`", "Agregando `-Safe`", "Agregando `-Test`", "No se puede probar"]
respuesta: "Agregando `-WhatIf`"

enunciado: "¿Cómo se prueba `Stop-Process -Name chrome` sin cerrar nada?"

explicacion: |
  `-WhatIf` informa qué procesos se detendrían, sin detenerlos.
```

### 13 — Datos sin guardar

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "basico"
  tags: ["riesgo"]

tipo: mc
opciones_explicitas: ["Se pierden los cambios no guardados, porque termina el proceso de golpe", "Ninguno: pregunta si guardar", "Se guardan automáticamente", "Se envían a la papelera"]
respuesta: "Se pierden los cambios no guardados, porque termina el proceso de golpe"

enunciado: "¿Qué riesgo tiene `Stop-Process` sobre un programa con documentos abiertos?"

explicacion: |
  Antes conviene intentar un cierre ordenado con `CloseMainWindow()`.
```

### 14 — Permisos

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "intermedio"
  tags: ["permisos"]

tipo: mc
opciones_explicitas: ["Ejecutar PowerShell como administrador", "Nada especial", "Reiniciar la computadora", "Usar el alias `kill`"]
respuesta: "Ejecutar PowerShell como administrador"

enunciado: "¿Qué se necesita para detener un proceso de otro usuario o del sistema?"

explicacion: |
  Sin permisos, `Stop-Process` da "Access is denied".
```

### 15 — Varias ventanas

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "basico"
  tags: ["nombre"]

tipo: mc
opciones_explicitas: ["Se detienen todos los procesos con ese nombre", "Solo el último", "Solo el que más memoria usa", "Ninguno"]
respuesta: "Se detienen todos los procesos con ese nombre"

enunciado: "¿Qué pasa con `Stop-Process -Name chrome`, si hay muchas ventanas y procesos de Chrome?"

explicacion: |
  El navegador usa muchos procesos; `-Name` los alcanza a todos.
```

### 16 — Procesos del sistema

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "basico"
  tags: ["seguridad"]

tipo: mc
opciones_explicitas: ["Porque puede ser del sistema y detenerlo puede cerrar la sesión o reiniciar el equipo", "Porque es ilegal", "Porque no se puede", "Porque borra el disco"]
respuesta: "Porque puede ser del sistema y detenerlo puede cerrar la sesión o reiniciar el equipo"

enunciado: "¿Por qué no conviene detener un proceso que no conocés?"

explicacion: |
  Antes de detener algo, averiguá qué es (por ejemplo, con `Get-Process -Id N | Select-Object *`, su `Path` y su empresa).
```

### 17 — Iniciar como administrador

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "intermedio"
  tags: ["runas"]

tipo: mc
opciones_explicitas: ["Abre PowerShell pidiendo permisos de administrador", "Abre PowerShell con otra cuenta sin pedir nada", "Cierra PowerShell", "Abre PowerShell en segundo plano"]
respuesta: "Abre PowerShell pidiendo permisos de administrador"

enunciado: "¿Qué hace `Start-Process powershell -Verb RunAs`?"

explicacion: |
  Aparece el cuadro de control de cuentas de usuario (UAC).
```

### 18 — Esperar a un proceso

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "intermedio"
  tags: ["wait-process"]

tipo: mc
opciones_explicitas: ["Espera hasta que el proceso 1234 termine", "Lo detiene", "Lo inicia", "Lo pone en pausa"]
respuesta: "Espera hasta que el proceso 1234 termine"

enunciado: "¿Qué hace `Wait-Process -Id 1234`?"

explicacion: |
  Es útil en scripts que dependen de que otro programa termine.
```

### 19 — Ver la ruta

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "intermedio"
  tags: ["path"]

tipo: mc
opciones_explicitas: ["Con su propiedad `Path`: `(Get-Process -Id 1234).Path`", "Con `Get-Process -Where`", "Con `Show-Executable`", "No se puede"]
respuesta: "Con su propiedad `Path`: `(Get-Process -Id 1234).Path`"

enunciado: "¿Cómo se ve el archivo ejecutable de un proceso?"

explicacion: |
  La ruta ayuda a saber si es un programa legítimo o uno sospechoso.
```

### 20 — En otros sistemas

```
metadata:
  materia: "powershell"
  tema: "gestion_de_procesos_powershell"
  nivel: "avanzado"
  tags: ["plataformas"]

tipo: mc
opciones_explicitas: ["Sí, con algunas propiedades distintas", "No, solo en Windows", "Solo con permisos especiales", "Solo con módulos extra"]
respuesta: "Sí, con algunas propiedades distintas"

enunciado: "¿Funciona `Get-Process` en PowerShell para Linux?"

explicacion: |
  PowerShell 7 es multiplataforma, aunque algunas propiedades de Windows no existen en otros sistemas.
```

