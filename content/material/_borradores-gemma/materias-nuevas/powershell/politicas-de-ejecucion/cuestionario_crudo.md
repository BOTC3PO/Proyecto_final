### 1 — Verificar política actual
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["get-executionpolicy", "estado"]
enunciado: "Ejecuta el comando para obtener la política de ejecución actual del proceso actual."
respuesta: "Get-ExecutionPolicy"
tipo: completar
pasos:
  - "Identificar el cmdlet estándar de PowerShell para consultar la configuración de seguridad de scripts."
  - "Recordar que este cmdlet devuelve el nivel de restricción vigente."
explicacion: "Get-ExecutionPolicy es el cmdlet nativo para consultar el estado de la política de ejecución. No requiere parámetros adicionales para obtener la política a nivel de proceso por defecto."
```

### 2 — Bloquear scripts (Valor Literal)
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["executionpolicy", "restriccion"]
enunciado: "True o False: Establecer la política de ejecución en 'Restricted' impide la ejecución de cualquier script .ps1, pero permite la interacción en la consola."
respuesta: verdadero
tipo: vf
pasos:
  - "Analizar el significado de 'Restricted' en la documentación de Microsoft."
  - "Verificar si permite la entrada de comandos manuales."
explicacion: "La política 'Restricted' es la predeterminada en Windows. Bloquea la ejecución de scripts pero permite el uso interactivo de la consola (cmdlets, variables, etc.)."
```

### 3 — Establecer LocalMachine (Sintaxis)
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["set-executionpolicy", "scope"]
enunciado: "Completa el comando para establecer la política 'RemoteSigned' a nivel del equipo (LocalMachine): Set-ExecutionPolicy -Scope _____ 'RemoteSigned'"
respuesta: LocalMachine
tipo: completar
respuestas_validas:
  - LocalMachine
  - localmachine
pasos:
  - "Identificar el parámetro que define el alcance de la política."
  - "Distinguir entre User, LocalMachine, CurrentUser, etc."
explicacion: "El parámetro -Scope permite definir dónde se aplica la política. 'LocalMachine' afecta a todos los usuarios del equipo y es la configuración más común para entornos corporativos."
```

### 4 — Firma de scripts (Requisito RemoteSigned)
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["remotesigned", "firmas"]
enunciado: "Con la política 'RemoteSigned', ¿verdadero o falso? Los scripts descargados de internet deben estar firmados por un editor confiable para ejecutarse."
respuesta: verdadero
tipo: vf
pasos:
  - "Repasar la definición de 'RemoteSigned'."
  - "Diferenciar entre scripts locales y remotos."
explicacion: "RemoteSigned permite ejecutar scripts locales sin firma, pero exige que los scripts descargados de internet tengan una firma digital de un editor de confianza para garantizar su integridad."
```

### 5 — Excepción de zona (Bypass)
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["bypass", "parámetros"]
enunciado: "Completa el comando para ejecutar un script sin cargar la política de ejecución ni mostrar advertencias: powershell.exe -_____ C:\script.ps1"
respuesta: Bypass
tipo: completar
respuestas_validas:
  - Bypass
  - bypass
pasos:
  - "Identificar el switch de línea de comandos que ignora la política."
  - "Diferenciar de 'Unrestricted' que sí muestra advertencias."
explicacion: "El switch '-Bypass' permite ejecutar scripts sin restricciones ni mensajes de advertencia. Es útil para automatización donde la política ya está controlada por GPO, pero se necesita ejecutar algo específico."
```

### 6 — Almacenamiento de certificados
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["certificados", "almacenamiento"]
enunciado: "True o False: Las políticas de ejecución de PowerShell utilizan el almacén de certificados 'Trusted Publishers' del contexto del usuario o del equipo."
respuesta: verdadero
tipo: vf
pasos:
  - "Verificar dónde PowerShell valida las firmas digitales."
  - "Confirmar si depende del sistema operativo de Windows."
explicacion: "PowerShell se integra con el sistema de certificados de Windows. Para que una firma sea válida, el certificado del editor debe estar en el almacén de 'Editores de confianza' (Trusted Publishers)."
```

### 7 — Ejecutar sin firmar (Unrestricted)
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["unrestricted", "comportamiento"]
enunciado: "Completa el valor de la política que permite ejecutar todos los scripts y muestra una advertencia antes de ejecutar scripts descargados: Set-ExecutionPolicy _____"
respuesta: Unrestricted
tipo: completar
respuestas_validas:
  - Unrestricted
  - unrestricted
pasos:
  - "Identificar la política que es menos restrictiva que RemoteSigned pero más segura que Bypass."
  - "Recordar que muestra un prompt de confirmación."
explicacion: "'Unrestricted' permite la ejecución de todo script. Para scripts descargados, muestra una advertencia pidiendo confirmación. Para scripts locales, no pide confirmación."
```

### 8 — Ámbito de usuario (CurrentUser)
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["scope", "user"]
enunciado: "Para cambiar la política de ejecución solo para el usuario actual sin permisos de administrador, ¿qué valor se usa en el parámetro -Scope?"
respuesta: CurrentUser
tipo: completar
respuestas_validas:
  - CurrentUser
  - currentuser
pasos:
  - "Determinar el alcance que no requiere elevación (Run as Administrator)."
  - "Seleccionar entre User, CurrentUser, LocalMachine."
explicacion: "CurrentUser (o User) aplica la política solo al perfil del usuario logueado. Esto permite a usuarios estándar modificar su propio entorno sin necesidad de permisos de administrador."
```

### 9 — Script en memoria (ExecutionPolicy)
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["input", "stdin"]
enunciado: "True o False: La política de ejecución se aplica también al código pasado por la entrada estándar (pipe) o mediante el parámetro -Command."
respuesta: falso
tipo: vf
pasos:
  - "Analizar si 'Get-ExecutionPolicy' afecta a comandos inline."
  - "Verificar documentación sobre -Command o pipe."
explicacion: "La política de ejecución NO se aplica a scripts pasados por pipe (`|`) ni al parámetro `-Command` (`-c`). Solo afecta a archivos en disco (.ps1, .psc1, etc.)."
```

### 10 — Verificar firma de script
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["get-authenticodesignature", "firmas"]
enunciado: "Completa el cmdlet para verificar la firma digital de un script: _____-AuthenticodeSignature C:\script.ps1"
respuesta: Get
tipo: completar
respuestas_validas:
  - Get
  - get
pasos:
  - "Identificar el cmdlet para obtener metadatos o firmas."
  - "Recordar que devuelve objetos con propiedades de firma."
explicacion: "Get-AuthenticodeSignature permite inspeccionar la firma de un archivo. Devuelve información sobre el emisor, fecha de firma y si la firma es válida según los almacenes de confianza."
```

### 11 — Restricción de descarga (AllSigned)
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["allsigned", "seguridad"]
enunciado: "Completa el valor de la política que requiere que TODOS los scripts, incluso los locales, estén firmados por un editor de confianza: Set-ExecutionPolicy _____"
respuesta: AllSigned
tipo: completar
respuestas_validas:
  - AllSigned
  - allsigned
pasos:
  - "Diferenciar entre RemoteSigned (solo remotos) y AllSigned (todos)."
  - "Confirmar que es más restrictivo que RemoteSigned."
explicacion: "'AllSigned' es la política más estricta estándar. Exige firma digital válida para cualquier script ejecutado, local o remoto. Ideal para entornos altamente seguros."
```

### 12 — Herencia de políticas
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["prioridad", "gpo"]
enunciado: "True o False: Si una GPO establece la política de ejecución, el cmdlet Set-ExecutionPolicy en la consola no puede sobrescribirla para ese alcance."
respuesta: verdadero
tipo: vf
pasos:
  - "Analizar la prioridad entre GPO y configuración local."
  - "Verificar si la política aparece como 'Enforced' o bloqueada."
explicacion: "Las Políticas de Grupo (GPO) tienen prioridad sobre las configuraciones locales. Si una GPO define la política para LocalMachine, el usuario no puede cambiarla mediante Set-ExecutionPolicy."
```

### 13 — Obtener alcance actual
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["scope", "detalle"]
enunciado: "Completa el parámetro para ver la política de ejecución con su alcance correspondiente: Get-ExecutionPolicy -_____ List"
respuesta: Scope
tipo: completar
respuestas_validas:
  - Scope
  - scope
pasos:
  - "Identificar el parámetro que lista todas las configuraciones por nivel."
  - "Recordar que devuelve una tabla con Scope y ExecutionPolicy."
explicacion: "Get-ExecutionPolicy -Scope List muestra todas las políticas definidas (LocalMachine, CurrentUser, User, MachinePolicy, UserPolicy) y sus valores, permitiendo diagnosticar conflictos de herencia."
```

### 14 — Archivo de configuración (PSSession)
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["remoting", "config"]
enunciado: "True o False: La política de ejecución se almacena en el registro de Windows (HKLM/HKCU) y no en archivos de texto."
respuesta: verdadero
tipo: vf
pasos:
  - "Verificar la fuente de persistencia de la configuración."
  - "Confirmar que es una entrada del Registro."
explicacion: "PowerShell guarda la política de ejecución en el Registro bajo `HKLM\SOFTWARE\Microsoft\PowerShell\1\ShellIds\Microsoft.PowerShell` y `HKCU\...`. No usa archivos .ps1xml para esto."
```

### 15 — Ejecutar script firmado local (AllSigned)
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["allsigned", "caso"]
enunciado: "Con la política 'AllSigned', ¿verdadero o falso? Un script local sin firma generará un error de ejecución."
respuesta: verdadero
tipo: vf
pasos:
  - "Analizar el comportamiento de AllSigned con scripts locales."
  - "Diferenciar de RemoteSigned."
explicacion: "Bajo 'AllSigned', incluso los scripts creados localmente deben tener una firma digital válida. Si no la tienen, PowerShell bloqueará la ejecución y mostrará un error."
```

### 16 — Parámetro NoProfile
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["startup", "profile"]
enunciado: "Completa el switch para iniciar PowerShell sin cargar el perfil del usuario, evitando que scripts en el perfil violen la política: powershell.exe -_____ "
respuesta: NoProfile
tipo: completar
respuestas_validas:
  - NoProfile
  - nop
  - no
  - no_profile
pasos:
  - "Identificar el switch que ignora los archivos de perfil."
  - "Notar que es útil para diagnósticos o seguridad estricta."
explicacion: "-NoProfile evita la carga de $PROFILE. Esto es crucial si el perfil contiene comandos que podrían ser bloqueados o si se quiere asegurar un entorno limpio sin configuraciones previas."
```

### 17 — Diferencia RemoteSigned vs AllSigned
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["comparacion", "firmas"]
enunciado: "Completa la palabra clave que diferencia 'RemoteSigned' de 'AllSigned': 'RemoteSigned' no requiere firma para scripts _____."
respuesta: locales
tipo: completar
respuestas_validas:
  - locales
  - local
  - localmente
pasos:
  - "Analizar el requisito de firma para scripts locales."
  - "Completar la distinción clave entre ambas políticas."
explicacion: "La diferencia principal es que RemoteSigned permite ejecutar scripts locales sin firma, mientras que AllSigned exige firma para todos los scripts, sin importar su origen."
```

### 18 — Error de permisos en Set-ExecutionPolicy
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["error", "administrador"]
enunciado: "True o False: Si intentas ejecutar Set-ExecutionPolicy -Scope LocalMachine sin privilegios de administrador, el cmdlet fallará silenciosamente."
respuesta: falso
tipo: vf
pasos:
  - "Analizar el comportamiento del cmdlet ante falta de permisos."
  - "Verificar si lanza una excepción o warning."
explicacion: "Set-ExecutionPolicy lanza una excepción (error) explícita si no se tienen permisos de administrador para cambiar la política de LocalMachine. No falla silenciosamente."
```

### 19 — Valor predeterminado en Windows
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["default", "windows"]
enunciado: "Completa el valor de la política de ejecución predeterminada en la mayoría de las instalaciones de Windows 10/11: _____"
respuesta: Restricted
tipo: completar
respuestas_validas:
  - Restricted
  - restricted
pasos:
  - "Identificar la configuración de fábrica de Windows."
  - "Recordar que es la más segura por defecto."
explicacion: "Windows viene configurado con 'Restricted' por defecto para prevenir la ejecución accidental o maliciosa de scripts al inicio."
```

### 20 — Contorno de seguridad (Bypass)
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["bypass", "seguridad"]
enunciado: "True o False: El uso de 'Bypass' es recomendable para scripts de producción en entornos corporativos para evitar la gestión de firmas."
respuesta: falso
tipo: vf
pasos:
  - "Evaluar las implicaciones de seguridad de 'Bypass'."
  - "Determinar si es una práctica recomendada."
explicacion: "'Bypass' no es recomendable para producción porque elimina las protecciones de integridad. Se debe usar 'AllSigned' o 'RemoteSigned' con gestión de certificados adecuada."
```

### 21 — Verificar firma en tiempo real
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["debugging", "firma"]
enunciado: "Completa el cmdlet para ver por qué un script no se ejecuta debido a problemas de firma: _____-AuthenticodeSignature"
respuesta: Get
tipo: completar
respuestas_validas:
  - Get
  - get
pasos:
  - "Identificar el cmdlet de diagnóstico de firmas."
  - "Confirmar que es el mismo que para verificar."
explicacion: "Get-AuthenticodeSignature es la herramienta de diagnóstico. Si la firma es inválida o no confiable, el objeto devuelto indicará el estado de la firma y el emisor."
```

### 22 — Política de Máquina vs Usuario
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["scope", "jerarquia"]
enunciado: "Completa el scope que tiene prioridad sobre 'CurrentUser' pero puede ser sobrescrito por GPO de máquina: _____"
respuesta: User
tipo: completar
respuestas_validas:
  - User
  - user
pasos:
  - "Identificar el ámbito de usuario que se aplica si no hay GPO."
  - "Distinguir CurrentUser (runtime) de User (configuración persistente)."
explicacion: "El scope 'User' (o 'CurrentUser' en algunos contextos de cmdlet) se aplica al usuario. Si hay GPO de máquina (LocalMachine/MachinePolicy), esta tiene prioridad."
```

### 23 — Ejecutar script desde explorer
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["ui", "bloqueos"]
enunciado: "True o False: Al hacer doble clic en un script .ps1 descargado, Windows bloquea la ejecución independientemente de la política de PowerShell."
respuesta: verdadero
tipo: vf
pasos:
  - "Analizar el comportamiento del explorador de archivos."
  - "Verificar si hay un bloqueo a nivel de sistema operativo."
explicacion: "Windows Explorer bloquea la ejecución directa de scripts descargados mediante el 'Zona de Internet' (Mark of the Web). El usuario debe desbloquear el archivo en Propiedades antes de ejecutarlo."
```

### 24 - Desbloquear archivo (UnblockFile)
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["unblock", "zona"]
enunciado: "Completa el cmdlet para eliminar el bloqueo de zona de Internet de un archivo: _____-File C:\script.ps1"
respuesta: Unblock
tipo: completar
respuestas_validas:
  - Unblock
  - unblock
pasos:
  - "Identificar el cmdlet para quitar el atributo de zona."
  - "Recordar que permite la ejecución bajo RemoteSigned."
explicacion: "UnblockFile elimina el flujo de datos de 'Zone.Identifier', permitiendo que el script sea tratado como local o confiable, facilitando su ejecución bajo políticas restrictivas."
```

### 25 - Verificar GPO aplicada
```yaml
metadata:
  materia: "powershell"
  tema: "politicas-de-ejecucion"
  nivel: "intermedio"
  tags: ["gpo", "diagnostico"]
enunciado: "Completa el cmdlet para ver qué políticas de grupo se están aplicando al usuario/equipo: _____-ExecutionPolicy -Scope MachinePolicy"
respuesta: Get
tipo: completar
respuestas_validas:
  - Get
  - get
pasos:
  - "Identificar el cmdlet de consulta."
  - "Completar el alcance MachinePolicy para ver GPOs."
explicacion: "Get-ExecutionPolicy -Scope MachinePolicy muestra la política definida por GPO en el equipo. Si devuelve 'Unassigned', significa que no hay GPO aplicando una política de ejecución."
```