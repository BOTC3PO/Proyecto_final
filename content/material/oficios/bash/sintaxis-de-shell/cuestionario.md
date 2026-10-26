# Bash — Sintaxis de la shell (cuestionario, 23 preguntas VBLang)
> Ver `teoria.md` en esta misma carpeta. 

---
### 1 — Qué es Bash

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["shell"]

tipo: mc
opciones_explicitas: ["Un intérprete de comandos (shell): recibe órdenes escritas y las ejecuta", "Un editor de imágenes", "Un navegador web", "Un lenguaje solo para crear páginas"]
respuesta: "Un intérprete de comandos (shell): recibe órdenes escritas y las ejecuta"

enunciado: "¿Qué es Bash?"

explicacion: |
  Bash es una shell: interpreta lo que escribís en la terminal y le pide al sistema operativo que lo ejecute. También sirve para escribir scripts.
```

### 2 — Partes de un comando

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["partes"]

tipo: mc
opciones_explicitas: ["/home/ana", "ls", "-l", "Todo el comando completo"]
respuesta: "/home/ana"

enunciado: "En `ls -l /home/ana`, ¿cuál es el ARGUMENTO?"

explicacion: |
  `ls` es el comando, `-l` es una opción y `/home/ana` es el argumento: sobre qué carpeta trabaja.
```

### 3 — Una opción

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["opciones"]

tipo: mc
opciones_explicitas: ["Una opción que cambia lo que hace el comando (muestra también los archivos ocultos)", "Un archivo", "El nombre de la carpeta", "Un comentario"]
respuesta: "Una opción que cambia lo que hace el comando (muestra también los archivos ocultos)"

enunciado: "En `ls -a`, ¿qué es `-a`?"

explicacion: |
  Las opciones empiezan con `-` y modifican el comportamiento. `ls -a` incluye los archivos ocultos (los que empiezan con punto).
```

### 4 — Mayúsculas

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["mayusculas"]

tipo: vf
respuesta: falso

enunciado: "En Bash, `LS` y `ls` son el mismo comando."

explicacion: |
  Bash distingue mayúsculas de minúsculas. `ls` existe; `LS` no, y da "comando no encontrado".
```

### 5 — Dónde estoy

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["pwd"]

tipo: completar
respuesta: "pwd"
respuestas_validas:
  - "pwd"

enunciado: "El comando que muestra la carpeta actual es `___`."

explicacion: |
  `pwd` significa *print working directory* (mostrar el directorio de trabajo).
```

### 6 — Subir una carpeta

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["cd"]

tipo: completar
respuesta: ".."
respuestas_validas:
  - ".."

enunciado: "Para subir un nivel en el árbol de carpetas se escribe `cd ___`."

explicacion: |
  `..` representa la carpeta de arriba (la carpeta padre). `cd ..` sube un nivel; `.` es la carpeta actual.
```

### 7 — Ver ocultos

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["ls"]

tipo: mc
opciones_explicitas: ["ls -a", "ls -h", "ls --oculto", "ls -z"]
respuesta: "ls -a"

enunciado: "¿Qué comando lista TAMBIÉN los archivos ocultos?"

explicacion: |
  `-a` (*all*) incluye los archivos cuyo nombre empieza con punto, como `.bashrc`.
```

### 8 — Pedir ayuda

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["ayuda"]

tipo: mc
opciones_explicitas: ["man grep (o grep --help)", "ayuda grep", "help me grep", "grep?"]
respuesta: "man grep (o grep --help)"

enunciado: "¿Cómo se ve la ayuda del comando `grep` desde la terminal?"

explicacion: |
  `man` abre el manual del comando; casi todos aceptan también `--help` para un resumen corto.
```

### 9 — Código de éxito

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["exit"]

tipo: mc
opciones_explicitas: ["0", "1", "-1", "255"]
respuesta: "0"

enunciado: "¿Qué código de salida indica que un comando terminó BIEN?"

explicacion: |
  Por convención 0 es éxito y cualquier otro número indica un problema (y cada número puede significar un error distinto).
```

### 10 — Último código

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["exit"]

tipo: completar
respuesta: "?"
respuestas_validas:
  - "?"

enunciado: "La variable que guarda el código de salida del último comando es `$___`."

explicacion: |
  `$?` contiene el código de salida del último comando ejecutado. Se consulta con `echo $?`.
```

### 11 — Usar el código

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "intermedio"
  tags: ["exit"]

tipo: mc
opciones_explicitas: ["Un número distinto de 0", "0", "Nada", "El nombre de la carpeta"]
respuesta: "Un número distinto de 0"

enunciado: "Se ejecuta `ls /carpeta/que/no/existe` y después `echo $?`. ¿Qué muestra `echo`?"

explicacion: |
  El `ls` falló (la carpeta no existe), así que su código de salida es distinto de 0 (en GNU `ls` es 2).
```

### 12 — Operador ;

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["encadenado"]

tipo: mc
opciones_explicitas: ["Ejecuta cmd1 y después cmd2, siempre", "Ejecuta cmd2 solo si cmd1 salió bien", "Ejecuta cmd2 solo si cmd1 falló", "Ejecuta los dos al mismo tiempo"]
respuesta: "Ejecuta cmd1 y después cmd2, siempre"

enunciado: "¿Qué hace `cmd1 ; cmd2`?"

explicacion: |
  El punto y coma separa comandos: se ejecutan uno tras otro sin importar si el primero tuvo éxito.
```

### 13 — Operador &&

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "intermedio"
  tags: ["encadenado"]

tipo: mc
opciones_explicitas: ["Entra a `fotos` solo si `mkdir` salió bien", "Entra a `fotos` aunque `mkdir` falle", "Crea la carpeta dos veces", "Ejecuta `cd` en segundo plano"]
respuesta: "Entra a `fotos` solo si `mkdir` salió bien"

enunciado: "¿Qué hace `mkdir fotos && cd fotos`?"

explicacion: |
  El `&&` ejecuta el segundo comando solo si el primero terminó con código 0. Evita entrar a una carpeta que no se pudo crear.
```

### 14 — Operador ||

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "intermedio"
  tags: ["encadenado"]

tipo: mc
opciones_explicitas: ["Muestra el mensaje solo si `ping` falla", "Muestra el mensaje siempre", "Muestra el mensaje solo si ping funciona", "No hace nada"]
respuesta: "Muestra el mensaje solo si `ping` falla"

enunciado: "¿Qué hace `ping -c 1 sitio.com || echo \"sin conexión\"`?"

explicacion: |
  El `||` ejecuta el segundo comando solo cuando el primero falla (código distinto de 0).
```

### 15 — Segundo plano

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "intermedio"
  tags: ["background"]

tipo: mc
opciones_explicitas: ["Lo ejecuta en segundo plano y te devuelve el prompt", "Lo ejecuta dos veces", "Lo cancela", "Lo hace correr con permisos de administrador"]
respuesta: "Lo ejecuta en segundo plano y te devuelve el prompt"

enunciado: "¿Qué efecto tiene un `&` al final de un comando?"

explicacion: |
  Con `&` la shell lanza el comando sin esperar a que termine: podés seguir escribiendo.
```

### 16 — Comentarios

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["comentarios"]

tipo: mc
opciones_explicitas: ["Empezando con `#`", "Empezando con `//`", "Entre `/* */`", "Empezando con `--`"]
respuesta: "Empezando con `#`"

enunciado: "¿Cómo se escribe un comentario en Bash?"

explicacion: |
  Todo lo que sigue a un `#` (hasta el final de la línea) es ignorado por la shell.
```

### 17 — Espacios

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["espacios"]

tipo: vf
respuesta: falso

enunciado: "`ls-l` (sin espacio) funciona igual que `ls -l`."

explicacion: |
  Sin el espacio, la shell busca un comando llamado `ls-l`, que no existe. Los espacios separan el comando, las opciones y los argumentos.
```

### 18 — Opciones juntas

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "intermedio"
  tags: ["opciones"]

tipo: mc
opciones_explicitas: ["Sí: las opciones cortas se pueden juntar", "No: `-la` es una opción distinta", "Solo en macOS", "No: da error"]
respuesta: "Sí: las opciones cortas se pueden juntar"

enunciado: "¿Es equivalente `ls -la` a `ls -l -a`?"

explicacion: |
  Las opciones de una letra se pueden combinar detrás de un solo guion. Las largas (`--all`) no.
```

### 19 — Archivo oculto

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["ocultos"]

tipo: mc
opciones_explicitas: ["`.bashrc`", "`bashrc`", "`bashrc.txt`", "`Bashrc`"]
respuesta: "`.bashrc`"

enunciado: "¿Cuál de estos archivos es oculto?"

explicacion: |
  En Linux un archivo es oculto si su nombre empieza con un punto. No se muestra con `ls` a secas, pero sí con `ls -a`.
```

### 20 — Volver al inicio

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["cd"]

tipo: mc
opciones_explicitas: ["Te lleva a tu carpeta personal", "Te lleva a la carpeta raíz `/`", "Te deja donde estás", "Da error"]
respuesta: "Te lleva a tu carpeta personal"

enunciado: "¿Qué hace `cd` escrito solo, sin argumentos?"

explicacion: |
  Sin argumentos, `cd` va al directorio de inicio del usuario (la variable `$HOME`).
```

### 21 — Cortar una línea larga

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "intermedio"
  tags: ["lineas"]

tipo: mc
opciones_explicitas: ["Una barra invertida `\\`", "Un punto y coma `;`", "Un guion `-`", "Una coma"]
respuesta: "Una barra invertida `\\`"

enunciado: "Un comando muy largo se puede continuar en la línea siguiente terminando la primera con:"

explicacion: |
  La barra invertida al final de la línea (sin nada detrás) le dice a la shell que el comando sigue en la línea de abajo.
```

### 22 — Ayudas del teclado

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["tab"]

tipo: mc
opciones_explicitas: ["Completa nombres de comandos, archivos y carpetas", "Cierra la terminal", "Borra la línea", "Ejecuta el último comando"]
respuesta: "Completa nombres de comandos, archivos y carpetas"

enunciado: "¿Para qué sirve la tecla Tab en la terminal?"

explicacion: |
  Tab completa lo que empezaste a escribir (y muestra opciones si hay varias). Ahorra tiempo y evita errores de tipeo.
```

### 23 — Ver el texto

```
metadata:
  materia: "bash"
  tema: "sintaxis_de_shell"
  nivel: "basico"
  tags: ["echo"]

tipo: completar
respuesta: "echo"
respuestas_validas:
  - "echo"

enunciado: "El comando que escribe un texto en pantalla es `___ \"Hola\"`."

explicacion: |
  `echo Hola` imprime el texto. Se usa mucho en scripts para mostrar mensajes y valores de variables.
```

