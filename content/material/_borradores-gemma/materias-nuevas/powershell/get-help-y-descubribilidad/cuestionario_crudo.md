### 1 — Sintaxis básica de Get-Help
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "sintaxis-basica"]
tipo: completar
enunciado: "Para obtener información detallada sobre el comando 'Get-Process', debes ejecutar el comando: Get-Help <HUECO>"
respuesta: "Get-Process"
respuestas_validas:
  - "Get-Process"
  - "get-process"
  - "GET-PROCESS"
pasos:
  - "Escribir el prefijo Get-Help"
  - "Agregar el nombre del cmdlet a consultar"
  - "Ejecutar la consulta"
explicacion: "La sintaxis base de Get-Help requiere el nombre del cmdlet como primer argumento. El caso no distingue mayúsculas de minúsculas en PowerShell."
```

### 2 — Visualización de ejemplos con Get-Help
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "ejemplos"]
tipo: completar
enunciado: "Para ver los ejemplos de uso del cmdlet 'New-Item', ejecuta: Get-Help New-Item -<HUECO>"
respuesta: "examples"
respuestas_validas:
  - "examples"
  - "Examples"
  - "EXAMPLES"
pasos:
  - "Identificar el cmdlet objetivo"
  - "Añadir el parámetro -examples"
  - "Revisar la salida"
explicacion: "El parámetro -examples (o -ex) muestra casos de uso prácticos del cmdlet especificado."
```

### 3 — Verificación de existencia de ayuda (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "verificacion"]
tipo: vf
enunciado: "El comando Get-Help devuelve un mensaje indicando que no se encontró ayuda para cmdlets que no tienen documentación integrada, en lugar de lanzar un error de ejecución fatal."
respuesta: verdadero
pasos:
  - "Ejecutar Get-Help sobre un cmdlet inexistente o sin ayuda"
  - "Observar el mensaje de advertencia"
  - "Confirmar que el script continúa"
explicacion: "PowerShell trata la falta de ayuda como una advertencia informativa, no como un error de ejecución que detiene el script."
```

### 4 — Actualización de información de ayuda
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "actualizacion"]
tipo: completar
enunciado: "Para descargar la ayuda más reciente para todos los módulos instalados, se usa el cmdlet: <HUECO>"
respuesta: "Update-Help"
respuestas_validas:
  - "Update-Help"
  - "update-help"
  - "UPDATE-HELP"
pasos:
  - "Identificar la necesidad de ayuda actualizada"
  - "Ejecutar Update-Help"
  - "Esperar la descarga"
explicacion: "Update-Help es el cmdlet específico diseñado para sincronizar la caché local de ayuda con Microsoft Docs."
```

### 5 — Parámetro de vista completa (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "full"]
tipo: vf
enunciado: "El parámetro -Full de Get-Help proporciona una salida más detallada que -ShowWindow, incluyendo secciones de sintaxis detallada, parámetros y ejemplos."
respuesta: verdadero
pasos:
  - "Comparar Get-Help cmdlet -Full vs Get-Help cmdlet -ShowWindow"
  - "Notar la diferencia en la cantidad de texto"
  - "Verificar que -Full no abre una ventana separada"
explicacion: "-Full muestra todo el texto en la consola actual, mientras que -ShowWindow abre un visor de texto externo."
```

### 6 — Búsqueda de cmdlets por verbo
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "verbos"]
tipo: completar
enunciado: "Para listar todos los cmdlets que comienzan con el verbo 'Get', se utiliza: Get-Command -Verb <HUECO>"
respuesta: "Get"
respuestas_validas:
  - "Get"
  - "get"
  - "GET"
pasos:
  - "Usar Get-Command"
  - "Filtrar por verbo con -Verb"
  - "Especificar el verbo deseado"
explicacion: "Get-Command permite filtrar por verbo para descubrir cmdlets relacionados con una acción específica."
```

### 7 — Visualización en ventana externa (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "showwindow"]
tipo: vf
enunciado: "El parámetro -ShowWindow de Get-Help abre la ayuda en una ventana de navegador web o visor de texto externo, dependiendo del sistema operativo."
respuesta: verdadero
pasos:
  - "Ejecutar Get-Help cmdlet -ShowWindow"
  - "Observar la apertura de una nueva ventana"
  - "Confirmar que la consola no se llena de texto"
explicacion: "-ShowWindow es útil para documentación extensa que sería difícil de leer en la consola."
```

### 8 — Obtener sintaxis detallada
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "syntax"]
tipo: completar
enunciado: "Para ver solo la sección de sintaxis del cmdlet 'Copy-Item', ejecuta: Get-Help Copy-Item -<HUECO>"
respuesta: "syntax"
respuestas_validas:
  - "syntax"
  - "Syntax"
  - "SYNTAX"
pasos:
  - "Identificar el cmdlet"
  - "Añadir el parámetro -syntax"
  - "Leer la estructura de parámetros"
explicacion: "El parámetro -syntax filtra la salida para mostrar únicamente las firmas válidas del cmdlet."
```

### 9 — Descubribilidad de funciones vs cmdlets (MC)
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "tipos"]
tipo: mc
enunciado: "¿Qué cmdlet es más adecuado para descubrir tanto cmdlets nativos como funciones definidas por el usuario?"
opciones_explicitas:
  - "Get-Command"
  - "Get-Help"
  - "Get-Module"
  - "Get-Content"
respuesta: "Get-Command"
pasos:
  - "Analizar la función de cada cmdlet"
  - "Identificar que Get-Command busca objetos ejecutables"
  - "Seleccionar Get-Command"
explicacion: "Get-Command busca en el path y módulos cualquier comando ejecutable, incluyendo funciones. Get-Help solo muestra ayuda si existe."
```

### 10 — Ayuda en línea (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "online"]
tipo: vf
enunciado: "El parámetro -Online de Get-Help abre directamente la documentación oficial en Microsoft Docs en el navegador predeterminado."
respuesta: verdadero
pasos:
  - "Ejecutar Get-Help cmdlet -Online"
  - "Verificar la apertura del navegador"
  - "Confirmar que es la URL oficial"
explicacion: "-Online es la forma más rápida de acceder a la documentación actualizada en la web sin buscar manualmente."
```

### 11 — Búsqueda por noun (sustantivo)
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "noun"]
tipo: completar
enunciado: "Para listar todos los cmdlets que trabajan con 'Service', se usa: Get-Command -Noun <HUECO>"
respuesta: "Service"
respuestas_validas:
  - "Service"
  - "service"
  - "SERVICE"
pasos:
  - "Usar Get-Command"
  - "Filtrar por -Noun"
  - "Especificar 'Service'"
explicacion: "-Noun permite encontrar cmdlets relacionados con un objeto específico (ej: Service, Process, File)."
```

### 12 — Parámetro de descripción breve (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "description"]
tipo: vf
enunciado: "El parámetro -Description de Get-Help muestra únicamente la descripción breve del cmdlet, sin la sintaxis ni los ejemplos."
respuesta: verdadero
pasos:
  - "Ejecutar Get-Help cmdlet -Description"
  - "Leer la salida"
  - "Confirmar que es solo texto breve"
explicacion: "-Description es útil para escanear rápidamente la funcionalidad de varios cmdlets."
```

### 13 — Cmdlet para buscar ayuda textual
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "search"]
tipo: completar
enunciado: "Para buscar cmdlets cuya descripción contenga la palabra 'Network', se utiliza: Get-Command -<HUECO> 'Network'"
respuesta: "Name"
respuestas_validas:
  - "Name"
  - "name"
  - "NAME"
pasos:
  - "Intentar filtrar por nombre"
  - "Notar que Get-Command no tiene filtro de descripción directa simple"
  - "Corregir: Usar Get-Help -Description o Get-Command | Where-Object"
  - "Nota: La pregunta pide el parámetro de Get-Command para filtrar por nombre, no descripción. Revisar lógica."
  - "Corrección de lógica: La pregunta original era ambigua. Mejor pregunta: Para buscar cmdlets por nombre parcial: Get-Command -Name '*Network*'"
  - "Nuevo enfoque: Pregunta sobre Get-Help -ShowWindow vs -Full. Ya hecha."
  - "Nueva pregunta: Uso de Get-Help -Examples. Ya hecha."
  - "Nueva pregunta: Uso de Get-Help -Parameter."
enunciado: "Para obtener la lista de parámetros del cmdlet 'Get-ChildItem', se usa: Get-Help Get-ChildItem -<HUECO>"
respuesta: "Parameter"
respuestas_validas:
  - "Parameter"
  - "parameter"
  - "PARAMETER"
pasos:
  - "Identificar el cmdlet"
  - "Añadir el parámetro -Parameter"
  - "Revisar la lista de parámetros"
explicacion: "-Parameter muestra todos los parámetros disponibles para el cmdlet especificado."
```

### 14 — Descubribilidad de alias (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "alias"]
tipo: vf
enunciado: "El cmdlet Get-Alias es específico para listar alias, pero Get-Command también devuelve información sobre alias cuando se busca un nombre de alias."
respuesta: verdadero
pasos:
  - "Ejecutar Get-Command dir"
  - "Observar que devuelve Get-ChildItem como comando subyacente"
  - "Confirmar que Get-Command maneja alias"
explicacion: "Get-Command es más versátil que Get-Alias porque resuelve alias a sus comandos reales."
```

### 15 — Parámetro de ejemplo detallado
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "example"]
tipo: completar
enunciado: "Para ver los ejemplos detallados del cmdlet 'Write-Host', ejecuta: Get-Help Write-Host -<HUECO>"
respuesta: "Examples"
respuestas_validas:
  - "Examples"
  - "examples"
  - "EXAMPLES"
pasos:
  - "Usar Get-Help"
  - "Añadir -Examples"
  - "Leer los casos de uso"
explicacion: "-Examples es crucial para aprender a usar un cmdlet rápidamente con casos reales."
```

### 16 — Búsqueda de cmdlets por categoría (MC)
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "categorias"]
tipo: mc
enunciado: "¿Qué parámetro de Get-Command permite filtrar cmdlets por su 'CommandType'?"
opciones_explicitas:
  - "-CommandType"
  - "-Type"
  - "-Kind"
  - "-Format"
respuesta: "-CommandType"
pasos:
  - "Analizar los parámetros de Get-Command"
  - "Identificar -CommandType como el filtro correcto"
  - "Seleccionar la opción correcta"
explicacion: "Get-Command -CommandType Cmdlet filtra solo cmdlets, excluyendo funciones o alias."
```

### 17 — Ayuda para parámetros específicos (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "parametro-especifico"]
tipo: vf
enunciado: "Es posible obtener ayuda específica para un solo parámetro de un cmdlet usando Get-Help Cmdlet -Parameter ParamName."
respuesta: verdadero
pasos:
  - "Ejecutar Get-Help Get-ChildItem -Parameter Force"
  - "Leer la descripción del parámetro 'Force'"
  - "Confirmar que funciona"
explicacion: "Este enfoque es útil cuando se necesita entender un parámetro complejo sin leer toda la ayuda."
```

### 18 — Cmdlet para listar módulos
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "modulos"]
tipo: completar
enunciado: "Para listar todos los módulos importados en la sesión actual, se usa: <HUECO>"
respuesta: "Get-Module"
respuestas_validas:
  - "Get-Module"
  - "get-module"
  - "GET-MODULE"
pasos:
  - "Identificar la necesidad de listar módulos"
  - "Ejecutar Get-Module"
  - "Revisar la salida"
explicacion: "Get-Module muestra los módulos cargados. Get-InstalledModule muestra los instalados pero no cargados."
```

### 19 — Diferencia entre Get-Help y Get-Command (MC)
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "comparacion"]
tipo: mc
enunciado: "¿Cuál es la diferencia principal entre Get-Help y Get-Command?"
opciones_explicitas:
  - "Get-Help muestra documentación; Get-Command identifica el comando."
  - "Get-Help ejecuta el comando; Get-Command lo documenta."
  - "Son idénticos."
  - "Get-Help solo funciona en Windows; Get-Command en Linux."
respuesta: "Get-Help muestra documentación; Get-Command identifica el comando."
pasos:
  - "Analizar la función de cada cmdlet"
  - "Identificar la distinción documentación vs identificación"
  - "Seleccionar la opción correcta"
explicacion: "Get-Command te dice qué es un comando y dónde está; Get-Help te dice cómo usarlo."
```

### 20 — Actualización de ayuda para módulo específico
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "actualizacion-modo"]
tipo: completar
enunciado: "Para actualizar la ayuda solo del módulo 'Microsoft.PowerShell.Management', se usa: Update-Help -Module <HUECO>"
respuesta: "Microsoft.PowerShell.Management"
respuestas_validas:
  - "Microsoft.PowerShell.Management"
  - "microsoft.powershell.management"
pasos:
  - "Identificar el módulo objetivo"
  - "Usar Update-Help con el parámetro -Module"
  - "Especificar el nombre del módulo"
explicacion: "Actualizar por módulo es más rápido y eficiente que actualizar todo el sistema."
```

### 21 — Verificar si un cmdlet tiene ayuda (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "verificacion-ayuda"]
tipo: vf
enunciado: "Si Get-Help devuelve un mensaje que dice 'El tema de ayuda para este comando no está instalado', significa que el cmdlet no existe."
respuesta: falso
pasos:
  - "Ejecutar Get-Help cmdlet-inexistente"
  - "Ejecutar Get-Help cmdlet-existente-sin-ayuda"
  - "Comparar los mensajes"
explicacion: "El mensaje indica que el cmdlet existe pero la documentación no está descargada, no que el cmdlet falte."
```

### 22 — Búsqueda de cmdlets por verbo y noun
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "busqueda-avanzada"]
tipo: completar
enunciado: "Para encontrar cmdlets que usen el verbo 'Start' y el noun 'Service', se usa: Get-Command -Verb Start -<HUECO> Service"
respuesta: "Noun"
respuestas_validas:
  - "Noun"
  - "noun"
  - "NOUN"
pasos:
  - "Usar Get-Command"
  - "Filtrar por -Verb Start"
  - "Filtrar por -Noun Service"
explicacion: "Combinar -Verb y -Noun permite una búsqueda muy precisa de cmdlets."
```

### 23 — Parámetro de muestra de ejemplo (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "muestra"]
tipo: vf
enunciado: "El parámetro -ShowWindow no muestra ejemplos, solo abre la ayuda completa en una ventana externa."
respuesta: verdadero
pasos:
  - "Ejecutar Get-Help cmdlet -ShowWindow"
  - "Observar que se abre la ventana"
  - "Confirmar que contiene ejemplos"
explicacion: "La ventana abierta por -ShowWindow contiene toda la ayuda, incluidos los ejemplos."
```

### 24 — Cmdlet para ver funciones definidas
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "funciones"]
tipo: completar
enunciado: "Para listar todas las funciones definidas en la sesión actual, se usa: Get-Command -<HUECO> Function"
respuesta: "CommandType"
respuestas_validas:
  - "CommandType"
  - "commandtype"
  - "COMMANDTYPE"
pasos:
  - "Usar Get-Command"
  - "Filtrar por -CommandType"
  - "Especificar 'Function'"
explicacion: "Get-Command -CommandType Function es la forma estándar de listar funciones."
```

### 25 — Ayuda para cmdlets de .NET (VF)
```yaml
metadata:
  materia: "powershell"
  tema: "get-help-y-descubribilidad"
  nivel: "basico"
  tags: ["get-help", "dotnet"]
tipo: vf
enunciado: "Get-Help no puede mostrar ayuda para cmdlets que son en realidad métodos de clases .NET integradas."
respuesta: verdadero
pasos:
  - "Intentar Get-Help sobre un tipo .NET genérico"
  - "Observar que no hay cmdlet asociado"
  - "Confirmar que Get-Help es para cmdlets, no tipos .NET directos"
explicacion: "Get-Help funciona con cmdlets. Para ayuda de tipos .NET, se usa Get-Member o documentación de .NET."
```