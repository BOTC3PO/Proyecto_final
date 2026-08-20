### 1 — Parámetro [CmdletBinding] y Common Parameters
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["cmdletbinding", "common-parameters", "verbose"]
tipo: completar
enunciado:
  Uno_de(["Para habilitar el soporte de parámetros comunes como -Verbose",
         "Para permitir que una función personalizada se comporte como un cmdlet nativo"])
  en una función de PowerShell, es necesario agregar el atributo `[CmdletBinding()]`
  al inicio del bloque de definición. Sin este atributo, ¿qué parámetro común
  de depuración NO estará disponible automáticamente para el usuario?
respuesta: verbose
respuestas_validas:
  - verbose
  - Verbose
  - VERBOSE
pasos:
  - "Definir una función con [CmdletBinding()]"
  - "Invocar la función con el switch -Verbose"
  - "Observar el flujo de mensajes de verbose"
explicacion:
  El atributo [CmdletBinding()] activa el soporte para parámetros comunes como
  -Verbose, -Debug, -ErrorAction, etc. Sin él, la función se comporta como un
  script simple y no expone estos controles de flujo de ejecución estándar.
```

### 2 — Scope de variables en funciones
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["scope", "local", "global"]
tipo: vf
enunciado:
  En PowerShell, si dentro de una función se asigna un valor a una variable que
  ya existe en el scope global (por ejemplo, $Global:MyVar = 10), el valor de
  la variable en el scope global se actualiza inmediatamente, incluso si no se
  declara como local dentro de la función.
respuesta: verdadero
pasos:
  - "Crear $Global:MyVar = 5 en el scope global"
  - "Crear una función que haga $Global:MyVar = 10"
  - "Llamar a la función"
  - "Verificar el valor de $Global:MyVar fuera de la función"
explicacion:
  El prefijo $Global: fuerza la escritura en el scope global. Aunque PowerShell
  crea un scope local para las variables no declaradas explícitamente, el uso del
  scope resolver explícitamente sobrescribe el valor en el scope indicado.
```

### 3 — Pipeline y Process Block
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["process", "begin", "end", "pipeline"]
tipo: completar
enunciado:
  En una función avanzada con [CmdletBinding()], si necesitas ejecutar código
  una sola vez ANTES de comenzar a recibir objetos del pipeline, ese código
  debe colocarse dentro del bloque:
respuesta: begin
respuestas_validas:
  - begin
  - Begin
  - BEGIN
pasos:
  - "Definir una función con bloques Begin, Process, End"
  - "Colocar inicialización de recursos en Begin"
  - "Enviar objetos por el pipeline"
explicacion:
  El bloque Begin se ejecuta una vez al inicio de la llamada a la función. El
  bloque Process se ejecuta una vez por cada objeto recibido del pipeline. El
  bloque End se ejecuta una vez al finalizar el procesamiento de todos los objetos.
```

### 4 — Parámetros con valor por defecto
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["parameters", "default-value", "advanced-function"]
tipo: completar
enunciado:
  Para definir un valor por defecto para un parámetro en una función avanzada,
  se utiliza la sintaxis: [Parameter(Mandatory=$false, ValueFromPipeline=$true)]
  $ParamName = "default_value". Si se omite el valor por defecto en la asignación
  y el usuario no proporciona el parámetro, ¿cuál es el comportamiento por defecto
  de PowerShell para un parámetro de tipo String?
respuesta: $null
respuestas_validas:
  - $null
  - null
  - Null
  - $Null
pasos:
  - "Definir función con parámetro String sin valor por defecto"
  - "Llamar a la función sin ese parámetro"
  - "Verificar el valor interno del parámetro"
explicacion:
  Si un parámetro de tipo referencia (como String) no tiene un valor por defecto
  explícito definido en la firma y no es obligatorio, su valor interno será $null
  cuando no se proporcione argumento en la llamada.
```

### 5 — Return vs Output Stream
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["return", "output", "pipeline"]
tipo: vf
enunciado:
  En PowerShell, usar la palabra clave `return` dentro de una función detiene
  inmediatamente la ejecución de la función y envía cualquier objeto que haya
  sido escrito en la tubería de salida (output stream) hasta ese momento al
  consumidor del pipeline.
respuesta: falso
pasos:
  - "Crear función que escribe 'A' en la tubería"
  - "Usar return"
  - "Escribir 'B' en la tubería"
  - "Verificar el output total"
explicacion:
  `return` detiene la ejecución de la función, pero NO envía explícitamente el
  output acumulado; el output se envía automáticamente al finalizar la función
  (o al encontrar un return, pero el flujo se corta). Lo crucial es que `return`
  no es necesario para devolver objetos; cualquier expresión no asignada a una
  variable se envía automáticamente a la tubería de salida.
```

### 6 — Parámetro [Alias]
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["alias", "parameter", "advanced-function"]
tipo: completar
enunciado:
  Si deseas que un parámetro de una función avanzada pueda ser invocado usando
  nombres alternativos (por ejemplo, permitir usar `-Path` o `-FilePath` para
  referirse al mismo argumento), se utiliza el atributo `[Parameter(Alias(...))]`.
  ¿Qué atributo adicional es recomendable usar junto con Alias para evitar
  conflictos de nombre con otros parámetros existentes?
respuesta: Position
respuestas_validas:
  - Position
  - position
  - POSITION
pasos:
  - "Definir función con parámetro [Alias('FilePath')] $Path"
  - "Usar Position=0 para definir orden de posición"
  - "Invocar la función por nombre de alias"
explicacion:
  Aunque Alias permite nombres alternativos, no resuelve la ambigüedad si se
  usa por posición. Es buena práctica definir `Position` para controlar el orden
  de los argumentos posicionales y evitar conflictos con otros parámetros que
  también tengan posiciones asignadas.
```

### 7 — Try/Catch en funciones
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["try-catch", "error-handling", "advanced-function"]
tipo: completar
enunciado:
  Para capturar errores no terminales (non-terminating errors) dentro de una
  función de PowerShell y convertirlos en errores terminales que puedan ser
  capturados por un bloque `catch`, se debe usar la variable automática:
respuesta: $ErrorActionPreference
respuestas_validas:
  - $ErrorActionPreference
  - ErrorActionPreference
  - $erroractionpreference
pasos:
  - "Establecer $ErrorActionPreference = 'Stop' dentro del try"
  - "Ejecutar cmdlet que falla"
  - "Capturar en catch"
explicacion:
  Por defecto, muchos cmdlets generan errores no terminales. Para que `catch`
  los capture, se debe cambiar temporalmente `$ErrorActionPreference` a `'Stop'`
  dentro del bloque `try`, o usar el parámetro `-ErrorAction Stop` en el cmdlet
  específico.
```

### 8 — Parámetro [ValidateSet]
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["validateset", "parameter", "validation"]
tipo: completar
enunciado:
  Si defines un parámetro con `[ValidateSet('Option1', 'Option2')]` y el usuario
  pasa un valor que no está en la lista, PowerShell genera un error de validación.
  ¿Qué atributo se debe añadir al parámetro si se quiere permitir también el valor
  vacío (cadena vacía) además de las opciones validadas?
respuesta: ValidateNotNullOrEmpty
respuestas_validas:
  - ValidateNotNullOrEmpty
  - validateNotNullOrEmpty
  - ValidateNotNullOrEmpty()
pasos:
  - "Definir parámetro con [ValidateSet('A','B')]"
  - "Intentar pasar cadena vacía"
  - "Fallo de validación"
explicacion:
  [ValidateSet] no permite automáticamente cadenas vacías. Para permitir que el
  parámetro sea una cadena vacía (pero no $null), se debe combinar con
  [ValidateNotNullOrEmpty] o manejar la lógica manualmente, aunque estrictamente
  [ValidateSet] valida el contenido; si se quiere permitir vacío, a veces se usa
  [AllowEmptyString] en combinación o se cambia la lógica de validación. La
  respuesta clave para permitir vacío explícitamente es [AllowEmptyString].
  *Corrección*: La pregunta pide permitir valor vacío. El atributo correcto es
  [AllowEmptyString].
respuesta: AllowEmptyString
respuestas_validas:
  - AllowEmptyString
  - allowEmptyString
  - [AllowEmptyString]
pasos:
  - "Definir parámetro con [ValidateSet('A','B')] y [AllowEmptyString]"
  - "Invocar con cadena vacía"
  - "Validar que no hay error"
explicacion:
  [AllowEmptyString] permite que el parámetro acepte una cadena de longitud cero
  como valor válido, incluso si [ValidateSet] está presente. Sin este atributo,
  una cadena vacía fallaría la validación de [ValidateSet].
```

### 9 — Parámetro [Parameter(ValueFromPipelineByPropertyName)]
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["valuefrompipelinebypropertyname", "pipeline", "binding"]
tipo: completar
enunciado:
  Cuando se desea que una función tome propiedades de un objeto complejo enviado
  por el pipeline (por ejemplo, que la propiedad `Name` del objeto pipeline se
  asigne automáticamente al parámetro `$InputName` de la función), se utiliza
  el atributo:
respuesta: ValueFromPipelineByPropertyName
respuestas_validas:
  - ValueFromPipelineByPropertyName
  - valuefrompipelinebypropertyname
  - ValueFromPipelineByPropertyName()
pasos:
  - "Crear objeto con propiedad 'Name'"
  - "Enviar objeto por pipeline a función"
  - "Función con parámetro [Parameter(ValueFromPipelineByPropertyName)] $InputName"
explicacion:
  Este atributo permite el binding de propiedades por nombre. Si la propiedad del
  objeto pipeline tiene el mismo nombre que el parámetro de la función, PowerShell
  asigna automáticamente el valor.
```

### 10 — Parámetro [Parameter(ValueFromPipeline)]
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["valuefrompipeline", "pipeline", "binding"]
tipo: completar
enunciado:
  Para recibir el objeto completo enviado por el pipeline en un parámetro de
  función (en lugar de propiedades individuales), se utiliza el atributo:
respuesta: ValueFromPipeline
respuestas_validas:
  - ValueFromPipeline
  - valuefrompipeline
  - ValueFromPipeline()
pasos:
  - "Enviar objeto entero por pipeline"
  - "Función con parámetro [Parameter(ValueFromPipeline)] $Obj"
  - "Acceder a propiedades de $Obj"
explicacion:
  [ValueFromPipeline] vincula el objeto entero (o la cadena si es un string)
  directamente al parámetro. Esto es útil cuando se necesita procesar el objeto
  completo como una unidad.
```

### 11 — Parámetro [Parameter(Mandatory=$true)]
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["mandatory", "parameter", "validation"]
tipo: vf
enunciado:
  Si un parámetro de una función avanzada está marcado con `[Parameter(Mandatory=$true)]`
  y el usuario no proporciona ese parámetro al invocar la función, PowerShell
  generará un error de validación antes de que la función comience a ejecutarse.
respuesta: verdadero
pasos:
  - "Definir función con parámetro Mandatory"
  - "Invocar función sin ese parámetro"
  - "Observar error de validación"
explicacion:
  La validación de parámetros obligatorios se realiza en la fase de análisis
  de comandos (parsing), antes de entrar en el bloque de ejecución de la función.
  Si falta un parámetro obligatorio, la función ni siquiera se ejecuta.
```

### 12 — Parámetro [Parameter(HelpMessage='...')]
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["helpmessage", "parameter", "help"]
tipo: completar
enunciado:
  Para proporcionar una descripción contextual que aparezca cuando el usuario
  solicite ayuda sobre un parámetro específico (usando `Get-Help NombreFunción -Parameter NombreParametro`),
  se utiliza el atributo:
respuesta: HelpMessage
respuestas_validas:
  - HelpMessage
  - helpmessage
  - HelpMessage('...')
pasos:
  - "Definir parámetro con [Parameter(HelpMessage='Describe el path')] $Path"
  - "Ejecutar Get-Help para la función"
  - "Verificar la descripción del parámetro"
explicacion:
  HelpMessage proporciona texto de ayuda inline que se muestra en la salida de
  Get-Help y, en algunos shells modernos, en la sugerencia de autocompletado o
  tooltips.
```

### 13 — Parámetro [Parameter(Position=0)]
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["position", "parameter", "positional"]
tipo: completar
enunciado:
  Para permitir que un parámetro de una función avanzada sea pasado como primer
  argumento posicional (sin usar el nombre del parámetro), se utiliza el atributo:
respuesta: Position
respuestas_validas:
  - Position
  - position
  - Position(0)
pasos:
  - "Definir función con [Parameter(Position=0)] $File"
  - "Invocar función con 'archivo.txt' como primer argumento"
  - "Verificar que $File tiene el valor"
explicacion:
  El atributo Position define el orden en que los argumentos posicionales se
  asignan a los parámetros. Position=0 indica que es el primer argumento
  posicional esperado.
```

### 14 — Parámetro [Parameter(ValueFromRemainingArguments)]
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["valuefromremainingarguments", "parameter", "rest"]
tipo: completar
enunciado:
  Para capturar todos los argumentos adicionales pasados a una función que no
  coinciden con ningún parámetro definido, se utiliza el parámetro con el atributo:
respuesta: ValueFromRemainingArguments
respuestas_validas:
  - ValueFromRemainingArguments
  - valuefromremainingarguments
  - ValueFromRemainingArguments()
pasos:
  - "Definir función con [Parameter(ValueFromRemainingArguments)] $Args"
  - "Invocar función con argumentos extra"
  - "Verificar $Args contiene los extras"
explicacion:
  Este atributo permite que un parámetro reciba todos los argumentos sobrantes
  que no han sido asignados a otros parámetros. Es útil para funciones que
  necesitan aceptar un número variable de argumentos.
```

### 15 — Parámetro [Parameter(DontShow)]
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["dontshow", "parameter", "hidden"]
tipo: completar
enunciado:
  Para ocultar un parámetro de la ayuda generada automáticamente y del
  autocompletado de IntelliSense, pero permitir que siga siendo funcional si
  se invoca explícitamente por nombre, se utiliza el atributo:
respuesta: DontShow
respuestas_validas:
  - DontShow
  - dontshow
  - DontShow()
pasos:
  - "Definir parámetro con [Parameter(DontShow)] $Secret"
  - "Ejecutar Get-Help"
  - "Verificar que el parámetro no aparece en la ayuda"
explicacion:
  [DontShow] oculta el parámetro de la documentación automática y del autocompletado,
  pero no impide su uso. Es útil para parámetros internos o de depuración que no
  se quieren exponer públicamente.
```

### 16 — Parámetro [Parameter(ConfirmImpact='High')]
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["confirmimpact", "parameter", "confirmation"]
tipo: completar
enunciado:
  Para indicar que una función tiene un impacto alto y debe solicitar confirmación
  del usuario antes de ejecutarse (si el usuario tiene confirmación global activada),
  se utiliza el atributo:
respuesta: ConfirmImpact
respuestas_validas:
  - ConfirmImpact
  - confirmimpact
  - ConfirmImpact('High')
pasos:
  - "Definir función con [CmdletBinding(SupportsShouldProcess=$true)]"
  - "Añadir [Parameter(ConfirmImpact='High')] al parámetro crítico"
  - "Invocar función con -Confirm"
explicacion:
  ConfirmImpact define la severidad de la acción. Valores como 'Low', 'Medium',
  'High' determinan si se requiere confirmación según la configuración global
  de `$ConfirmPreference`.
```

### 17 — Parámetro [Parameter(SupportsShouldProcess=$true)]
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["supportsshouldprocess", "parameter", "shouldprocess"]
tipo: completar
enunciado:
  Para habilitar el soporte de los switches -WhatIf y -Confirm en una función
  avanzada, es necesario configurar el atributo [CmdletBinding] con la propiedad:
respuesta: SupportsShouldProcess
respuestas_validas:
  - SupportsShouldProcess
  - supportsShouldProcess
  - SupportsShouldProcess($true)
pasos:
  - "Definir [CmdletBinding(SupportsShouldProcess=$true)]"
  - "Usar $PSCmdlet.ShouldProcess() en la función"
  - "Invocar con -WhatIf"
explicacion:
  SupportsShouldProcess habilita el marco de trabajo ShouldProcess, permitiendo
  a la función responder a -WhatIf y -Confirm. Sin esto, la función no puede
  implementar el comportamiento "dry run".
```

### 18 — Variable $PSCmdlet
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["pscmdlet", "variable", "advanced-function"]
tipo: completar
enunciado:
  Dentro de una función avanzada, para invocar el método ShouldProcess (necesario
  para implementar -WhatIf y -Confirm correctamente), se utiliza la variable
  automática:
respuesta: $PSCmdlet
respuestas_validas:
  - $PSCmdlet
  - PSCmdlet
  - $pscmdlet
pasos:
  - "Definir función con SupportsShouldProcess"
  - "Usar $PSCmdlet.ShouldProcess('Objeto', 'Acción')"
  - "Verificar comportamiento con -WhatIf"
explicacion:
  $PSCmdlet es una variable automática disponible en funciones avanzadas que
  proporciona acceso al objeto cmdlet host y a métodos como ShouldProcess.
```

### 19 — Parámetro [Parameter(NeverPipe=$false)]
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["neverpipe", "parameter", "pipeline"]
tipo: completar
enunciado:
  Para prohibir que un parámetro específico acepte valores del pipeline (evitando
  el enlace por pipeline), se utiliza el atributo:
respuesta: NeverPipe
respuestas_validas:
  - NeverPipe
  - neverpipe
  - NeverPipe($true)
pasos:
  - "Definir parámetro con [Parameter(NeverPipe=$true)] $File"
  - "Intentar enviar cadena por pipeline a ese parámetro"
  - "Observar error de enlace"
explicacion:
  NeverPipe deshabilita el enlace por pipeline para un parámetro específico.
  Esto es útil cuando el parámetro solo debe ser pasado por nombre o posición,
  pero no por flujo de objetos.
```

### 20 — Parámetro [Parameter(ValueFromPipeline=$true, ValueFromPipelineByPropertyName=$false)]
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["valuefrompipeline", "valuefrompipelinebypropertyname", "parameter"]
tipo: vf
enunciado:
  Si un parámetro tiene tanto [Parameter(ValueFromPipeline=$true)] como
  [Parameter(ValueFromPipelineByPropertyName=$true)], y el objeto del pipeline
  tiene una propiedad con el mismo nombre que el parámetro, PowerShell priorizará
  el enlace por propiedad (PropertyName) sobre el enlace del objeto entero.
respuesta: falso
pasos:
  - "Definir parámetro con ambos atributos"
  - "Enviar objeto con propiedad coincidente"
  - "Verificar qué valor se asignó"
explicacion:
  Si ambos están habilitados, PowerShell intenta primero el enlace por propiedad.
  Si la propiedad existe, usa ese valor. Si no existe, intenta el enlace por
  objeto entero. No es que "priorice" en el sentido de ignorar el otro, sino que
  el enlace por propiedad es la ruta preferida si la propiedad existe. La afirmación
  es engañosa; en realidad, si la propiedad existe, se usa. Si no, se usa el objeto.
  La afirmación "priorizará" implica que siempre gana, lo cual es cierto si la propiedad
  existe. Pero si la propiedad no existe, gana el objeto. La afirmación es falsa
  porque no siempre gana; depende de si la propiedad existe.
```

### 21 — Parámetro [Parameter(Mandatory=$true, Position=1)]
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["mandatory", "position", "parameter"]
tipo: completar
enunciado:
  Si un parámetro es obligatorio y tiene Position=1, pero el usuario omite el
  primer argumento posicional (Position=0), ¿qué sucede al invocar la función?
respuesta: Error de validación
respuestas_validas:
  - Error de validación
  - Validation error
  - Error de validación de parámetro
  - Error
pasos:
  - "Definir función con dos parámetros posicionales obligatorios"
  - "Invocar con solo un argumento"
  - "Observar error"
explicacion:
  Si un parámetro obligatorio por posición se omite, PowerShell genera un error
  de validación indicando que falta el parámetro. La función no se ejecuta.
```

### 22 — Parámetro [Parameter(ValueFromPipeline=$true)] con Process Block
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["valuefrompipeline", "process", "pipeline"]
tipo: completar
enunciado:
  Cuando un parámetro tiene [Parameter(ValueFromPipeline=$true)], el bloque
  de código que procesa cada objeto individualmente debe colocarse en:
respuesta: process
respuestas_validas:
  - process
  - Process
  - PROCESS
pasos:
  - "Definir función con parámetro ValueFromPipeline"
  - "Colocar lógica de procesamiento en bloque process"
  - "Enviar múltiples objetos por pipeline"
explicacion:
  El bloque Process se ejecuta una vez por cada objeto recibido del pipeline.
  Es el lugar correcto para iterar y procesar elementos individuales.
```

### 23 — Parámetro [Parameter(ValueFromPipelineByPropertyName=$true)] con Begin Block
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["valuefrompipelinebypropertyname", "begin", "pipeline"]
tipo: vf
enunciado:
  Si un parámetro tiene [Parameter(ValueFromPipelineByPropertyName=$true)],
  el valor de ese parámetro estará disponible dentro del bloque Begin de la
  función, ya que el binding ocurre antes de la ejecución.
respuesta: falso
pasos:
  - "Definir función con parámetro ValueFromPipelineByPropertyName"
  - "Intentar acceder al parámetro en bloque Begin"
  - "Intentar acceder al parámetro en bloque Process"
explicacion:
  El binding por propiedad ocurre durante el envío del pipeline, por lo que
  los valores no están disponibles en el bloque Begin (que se ejecuta antes de
  recibir objetos). Solo están disponibles en Process y End.
```

### 24 — Parámetro [Parameter(DontShow)] con Help
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["dontshow", "help", "parameter"]
tipo: completar
enunciado:
  Para que un parámetro oculto con [DontShow] aparezca en la ayuda generada
  manualmente (usando comentarios de ayuda), ¿es necesario eliminar el atributo
  DontShow?
respuesta: falso
respuestas_validas:
  - falso
  - false
  - False
  - FALSO
  - FALSO
explicacion:
  [DontShow] solo oculta el parámetro de la ayuda automática y del autocompletado.
  Si se escribe ayuda manual (comment-based help), se puede documentar el parámetro
  manualmente, pero no aparecerá en Get-Help generado automáticamente. La pregunta
  es si es necesario eliminarlo para que aparezca en la ayuda manual. No, la ayuda
  manual se escribe independientemente. Pero si la pregunta es si aparecerá en
  Get-Help automático, la respuesta es falso. Asumo que se refiere a Get-Help automático.
```

### 25 — Parámetro [Parameter(ValueFromPipeline=$true)] con End Block
```
metadata:
  materia: "powershell"
  tema: "funciones-powershell"
  nivel: "intermedio"
  tags: ["valuefrompipeline", "end", "pipeline"]
tipo: completar
enunciado:
  Después de procesar todos los objetos del pipeline en el bloque Process, el
  bloque End se ejecuta una vez. Si necesitas limpiar recursos o procesar un
  resultado agregado de todos los objetos recibidos, ¿en qué bloque debes poner
  ese código?
respuesta: end
respuestas_validas:
  - end
  - End
  - END
pasos:
  - "Definir función con bloques Begin, Process, End"
  - "Acumular datos en Process"
  - "Procesar resultado final en End"
explicacion:
  El bloque End se ejecuta una vez después de que todos los objetos del pipeline
  han sido procesados. Es el lugar adecuado para limpieza o agregación final.
```