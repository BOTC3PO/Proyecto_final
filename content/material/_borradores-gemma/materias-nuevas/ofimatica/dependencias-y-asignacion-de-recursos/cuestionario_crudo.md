### 1 — Gestión de dependencias en Python con pip
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["python", "pip", "gestor-paquetes"]
respuesta: verdadero
tipo: vf
enunciado: Al instalar un paquete con `pip install`, el gestor verifica automáticamente las dependencias transitivas y las instala si no están presentes en el entorno virtual activo.
pasos:
  - "Identificar la función de `pip` en la resolución de dependencias."
  - "Verificar si `pip` gestiona dependencias indirectas por defecto."
  - "Confirmar que el comportamiento es automático en entornos aislados."
explicacion: pip resuelve e instala automáticamente las dependencias requeridas por el paquete principal, siempre que se esté utilizando un entorno virtual o se tengan permisos adecuados.
```

### 2 — Instalación de drivers de impresora vía CUPS
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["cups", "drivers", "impresion"]
respuesta: lpadmin
tipo: completar
enunciado: En sistemas Unix/Linux, el comando utilizado para agregar una impresora y asignarle un driver específico al daemon CUPS es `______ -p nombre_impresora -E -v uri -m driver_ppd`.
pasos:
  - "Recordar el comando principal de administración de CUPS."
  - "Identificar la bandera `-p` para definir el nombre de la cola."
  - "Confirmar que `lpadmin` es la herramienta estándar."
explicacion: `lpadmin` es la utilidad de línea de comandos para configurar el sistema de impresión CUPS, incluyendo la definición de colas y drivers.
```

### 3 — Resolución de conflictos de versiones en Maven
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["maven", "pom.xml", "dependencias"]
opciones_explicitas:
  - "El primero declarado en el POM gana"
  - "La versión más reciente disponible en el repositorio"
  - "La versión declarada en el módulo más cercano a la raíz del proyecto"
  - "Un error de compilación obligatorio"
respuesta: "La versión declarada en el módulo más cercano a la raíz del proyecto"
tipo: mc
enunciado: En un proyecto Maven con múltiples módulos, si dos dependencias transitivas requieren versiones diferentes de la misma librería, ¿cómo decide Maven cuál usar por defecto?
pasos:
  - "Analizar el algoritmo de 'nearest definition' de Maven."
  - "Evaluar si Maven prioriza la versión o la cercanía en el árbol de dependencias."
  - "Confirmar que la cercanía al POM raíz tiene prioridad sobre la versión."
explicacion: Maven utiliza el principio de 'nearest definition': la dependencia declarada en el módulo más cercano al proyecto raíz (o la que tiene el camino más corto en el árbol de dependencias) gana la resolución.
```

### 4 — Asignación de memoria en Excel VBA
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["vba", "memoria", "objects"]
respuesta: falso
tipo: vf
enunciado: En VBA, utilizar la palabra clave `Set` permite asignar un objeto a una variable, pero no es necesario establecer la variable a `Nothing` cuando se termina de usar el objeto para liberar la memoria de inmediato.
pasos:
  - "Verificar la sintaxis de asignación de objetos con `Set`."
  - "Analizar si la recolección de basura en VBA es automática e inmediata."
  - "Determinar si omitir `Set obj = Nothing` causa fugas de recursos en entornos de oficina."
explicacion: Aunque VBA tiene recolección de basura, no liberar explícitamente objetos COM (como libros o hojas de Excel) con `Set obj = Nothing` puede causar fugas de memoria y procesos huérfanos en el fondo.
```

### 5 — Instalación de extensiones en LibreOffice
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["libreoffice", "extensions", "xpi"]
respuesta: .oxt
tipo: completar
enunciado: El formato de archivo estándar utilizado por LibreOffice para empaquetar y distribuir extensiones (que pueden contener scripts, menús o herramientas de diagramación) es `______`.
pasos:
  - "Identificar el formato de paquete de LibreOffice."
  - "Diferenciar entre `.deb`, `.rpm` y el formato interno de extensiones."
  - "Confirmar la extensión `.oxt`."
explicacion: Las extensiones de LibreOffice se distribuyen como archivos `.oxt`, que son esencialmente archivos ZIP con una estructura específica de metadatos y código.
```

### 6 — Gestión de paquetes en Debian/Ubuntu
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["apt", "linux", "oficina"]
respuesta: apt-get install
tipo: completar
enunciado: Para instalar un paquete de software en un sistema Debian/Ubuntu resolviendo automáticamente sus dependencias, el comando base es `______ nombre_paquete`.
pasos:
  - "Recordar el gestor de paquetes por defecto en Debian."
  - "Identificar el subcomando para instalación."
  - "Confirmar que `apt-get install` maneja dependencias."
explicacion: `apt-get install` es el comando estándar que consulta los repositorios configurados e instala el paquete junto con todas sus dependencias requeridas.
```

### 7 — Compatibilidad de formatos en Word
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["word", "compatibilidad", "docx"]
respuesta: verdadero
tipo: vf
enunciado: Microsoft Word puede abrir y editar archivos en formato `.doc` (legacy) sin necesidad de instalar plugins adicionales, ya que la compatibilidad está integrada en el motor de la aplicación moderna.
pasos:
  - "Verificar si Word incluye soporte nativo para formatos antiguos."
  - "Confirmar que no se requieren componentes externos (como el Compatibility Pack antiguo) en versiones recientes."
  - "Validar que la lectura/escritura es directa."
explicacion: Las versiones modernas de Word (2007 en adelante) tienen soporte nativo completo para el formato `.doc` antiguo, permitiendo abrirlo y guardarlo sin plugins adicionales.
```

### 8 — Dependencias de Node.js para herramientas de ofimática
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["nodejs", "npm", "automatizacion"]
opciones_explicitas:
  - "npm install package.json"
  - "npm install"
  - "npm add dependencies"
  - "npm link"
respuesta: "npm install"
tipo: mc
enunciado: Si un script de automatización de documentos en Node.js requiere bibliotecas listadas en su `package.json`, ¿cuál es el comando correcto para descargar e instalar todas las dependencias definidas?
pasos:
  - "Analizar la función de `package.json`."
  - "Identificar el comando que lee este archivo e instala los módulos en `node_modules`."
  - "Confirmar que `npm install` sin argumentos instala las dependencias listadas."
explicacion: Ejecutar `npm install` en la raíz del proyecto lee `package.json` (y `package-lock.json`) e instala todas las dependencias listadas.
```

### 9 — Configuración de rutas en LaTeX
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["latex", "bibliografia", "bibtex"]
respuesta: \bibliographystyle
tipo: completar
enunciado: En un documento LaTeX, el comando utilizado para especificar el estilo de formato de la bibliografía (ej. APA, IEEE) antes de generar la lista de referencias es `______{estilo}`.
pasos:
  - "Identificar el paso previo a `\bibliography{}`."
  - "Recordar el comando que define la apariencia de las citas."
  - "Confirmar que `\bibliographystyle` establece el formato."
explicacion: `\bibliographystyle{estilo}` le dice al procesador BibTeX qué formato utilizar para las referencias. Debe ir antes de `\bibliography{}`.
```

### 10 — Instalación de fuentes en Windows
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["windows", "fuentes", "tipografia"]
respuesta: falso
tipo: vf
enunciado: Para instalar una nueva fuente tipográfica en Windows 10/11, es obligatorio reiniciar el sistema operativo para que los procesadores de ofimática (como Word) la detecten.
pasos:
  - "Verificar si las aplicaciones de Microsoft Office leen el registro de fuentes en tiempo real."
  - "Analizar si el reinicio es un requisito técnico para la detección de fuentes."
  - "Confirmar que solo cerrar y reabrir la aplicación es suficiente."
explicacion: Windows detecta las fuentes instaladas en el registro de Windows inmediatamente. No se requiere reiniciar el SO; solo cerrar y volver a abrir la aplicación de ofimática es suficiente.
```

### 11 — Gestión de librerías en R para estadística
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["r", "cran", "paquetes"]
respuesta: install.packages
tipo: completar
enunciado: En el entorno R para análisis de datos estadísticos, la función principal para descargar e instalar paquetes desde los repositorios CRAN es `______("nombre_paquete")`.
pasos:
  - "Identificar la función de instalación en R."
  - "Diferenciar entre `library()` (carga) e `install.packages()` (instalación)."
  - "Confirmar la sintaxis correcta."
explicacion: `install.packages()` descarga el paquete desde CRAN y lo instala en la librería local. `library()` se usa después para cargarlo en la sesión.
```

### 12 — Compatibilidad de macros en Excel
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["excel", "macros", "xlsm"]
respuesta: xlsm
tipo: completar
enunciado: Si un archivo de Excel contiene macros VBA, debe guardarse con la extensión `______` para preservar el código, ya que `.xlsx` no soporta scripts.
pasos:
  - "Recordar las extensiones de Excel modernas."
  - "Identificar cuál permite código binario/macros."
  - "Confirmar que `.xlsm` es el formato habilitado para macros."
explicacion: `.xlsm` es el formato de libro de Excel habilitado para macros. Guardar un archivo con macros como `.xlsx` eliminará el código VBA.
```

### 13 — Resolución de dependencias en Conda
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["conda", "entornos", "python"]
respuesta: conda env create
tipo: completar
enunciado: Para crear un nuevo entorno virtual en Anaconda/Miniconda basado en un archivo `environment.yml`, el comando es `conda env create -f environment.yml`.
pasos:
  - "Identificar el subcomando de `conda` para gestión de entornos."
  - "Verificar la bandera `-f` para especificar el archivo de configuración."
  - "Confirmar la sintaxis completa."
explicacion: `conda env create -f environment.yml` lee el archivo YAML y crea un entorno aislado con las dependencias especificadas.
```

### 14 — Instalación de drivers de escáner en Linux
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["sane", "linux", "escaneo"]
respuesta: sane
tipo: completar
enunciado: El marco de trabajo estándar (framework) en Linux para acceder a dispositivos de escaneo e imprimir es conocido por sus siglas `______` (Scanner Access Now Easy).
pasos:
  - "Recordar el nombre del subsistema de escaneo en Linux."
  - "Identificar si es un demonio, librería o framework."
  - "Confirmar que SANE es el estándar."
explicacion: SANE (Scanner Access Now Easy) es la API y el framework que permite a las aplicaciones de Linux comunicarse con escáneres.
```

### 15 — Dependencias de Java para herramientas de ofimática
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["java", "jre", "exec"]
respuesta: JRE
tipo: completar
enunciado: Muchas herramientas de automatización de ofimática basadas en Java requieren que esté instalado el `______` (Java Runtime Environment) en el sistema para ejecutar sus binarios.
pasos:
  - "Identificar el componente mínimo necesario para ejecutar código Java."
  - "Diferenciar entre JDK (desarrollo) y JRE (ejecución)."
  - "Confirmar que para usuarios finales se requiere el JRE."
explicacion: El JRE contiene la máquina virtual (JVM) y las librerías necesarias para ejecutar aplicaciones Java, pero no las herramientas de compilación del JDK.
```

### 16 — Gestión de paquetes en macOS (Homebrew)
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["macos", "homebrew", "cli"]
respuesta: brew install
tipo: completar
enunciado: En macOS, el gestor de paquetes más común para instalar herramientas de línea de comandos útiles para ofimática (como `pandoc` o `ghostscript`) es `______ nombre_paquete`.
pasos:
  - "Identificar el gestor de paquetes estándar de facto en macOS."
  - "Recordar el comando base para instalación."
  - "Confirmar que `brew install` es la sintaxis correcta."
explicacion: Homebrew (`brew`) es el gestor de paquetes predominante en macOS. `brew install` descarga, compila e instala el software y sus dependencias.
```

### 17 — Compatibilidad de PDF en navegadores
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["pdf", "navegadores", "plugins"]
respuesta: verdadero
tipo: vf
enunciado: Los navegadores web modernos (Chrome, Firefox, Edge) tienen un visor de PDF integrado nativo que permite visualizar documentos PDF sin necesidad de instalar plugins externos como Adobe Reader.
pasos:
  - "Verificar si los navegadores actuales incluyen un motor de renderizado PDF."
  - "Analizar si se requiere una extensión de terceros para la visualización básica."
  - "Confirmar que el soporte es nativo y automático."
explicacion: Desde hace años, los navegadores principales incluyen un visualizador PDF nativo basado en tecnologías web, eliminando la necesidad de plugins externos para la visualización.
```

### 18 — Instalación de extensiones en Chrome para ofimática
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["chrome", "extensions", "web"]
respuesta: chrome://extensions
tipo: completar
enunciado: Para gestionar manualmente las extensiones instaladas en Google Chrome (activarlas, desactivarlas o eliminarlas), se debe navegar a la URL interna `______`.
pasos:
  - "Identificar la página de configuración avanzada de Chrome."
  - "Recordar la URL especial para la gestión de complementos."
  - "Confirmar que `chrome://extensions` es el punto de acceso."
explicacion: `chrome://extensions` es la página de gestión de complementos donde se controla el ciclo de vida de las extensiones instaladas.
```

### 19 — Gestión de dependencias en R (CRAN)
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["r", "cran", "dependencias"]
respuesta: true
tipo: completar
enunciado: Cuando se instala un paquete en R desde CRAN, el sistema verifica y descarga automáticamente las dependencias faltantes si `______` es `true` (valor por defecto).
pasos:
  - "Analizar el comportamiento por defecto de `install.packages`."
  - "Identificar el parámetro que controla la instalación de dependencias."
  - "Confirmar que el valor por defecto es `TRUE`."
explicacion: Por defecto, `install.packages` tiene `dependencies = TRUE`, lo que asegura que se instalen todas las dependencias requeridas por el paquete.
```

### 20 — Instalación de Ghostscript para conversión de PDF
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["ghostscript", "pdf", "conversor"]
respuesta: ghostscript
tipo: completar
enunciado: La herramienta de código abierto fundamental para convertir, comprimir y manipular archivos PDF desde la línea de comandos se llama `______`.
pasos:
  - "Identificar el motor de renderizado PostScript/PDF de código abierto."
  - "Recordar el nombre del comando principal."
  - "Confirmar que `gs` o `ghostscript` es la herramienta."
explicacion: Ghostscript es el motor estándar de código abierto para procesar PostScript y PDF, ampliamente utilizado en herramientas de ofimática para conversión.
```

### 21 — Gestión de paquetes en Fedora
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["fedora", "dnf", "linux"]
respuesta: dnf install
tipo: completar
enunciado: En distribuciones Fedora y RHEL modernas, el gestor de paquetes que reemplazó a `yum` para instalar software es `______ nombre_paquete`.
pasos:
  - "Identificar el gestor de paquetes nativo de Fedora."
  - "Recordar el comando principal de instalación."
  - "Confirmar que `dnf install` es la sintaxis actual."
explicacion: DNF (Dandified YUM) es el gestor de paquetes de nueva generación en Fedora/RHEL, manejando dependencias de forma más eficiente que yum.
```

### 22 — Compatibilidad de macros en LibreOffice
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["libreoffice", "macros", "macro"]
respuesta: macro
tipo: completar
enunciado: En LibreOffice Calc, las macros escritas en Basic o Python se guardan dentro del archivo de hoja de cálculo bajo la categoría `______`.
pasos:
  - "Analizar cómo LibreOffice organiza el contenido interno."
  - "Identificar el contenedor lógico para el código ejecutable."
  - "Confirmar que la sección se llama `macro`."
explicacion: Las macros en LibreOffice se almacenan dentro del archivo ODF (que es un ZIP) en una estructura interna accesible como `macro`.
```

### 23 — Instalación de Pandoc para conversión de documentos
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["pandoc", "conversor", "markdown"]
respuesta: pandoc
tipo: completar
enunciado: La herramienta de línea de comandos universal para convertir documentos entre formatos como Markdown, DOCX, PDF y LaTeX se llama `______`.
pasos:
  - "Identificar el 'suizo suizo' de la conversión de documentos."
  - "Recordar el nombre del binario principal."
  - "Confirmar que `pandoc` es la herramienta estándar."
explicacion: Pandoc es el conversor de documentos más potente y utilizado en entornos académicos y de ofimática técnica.
```

### 24 — Gestión de dependencias en npm (lock file)
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["npm", "package-lock.json", "versionado"]
respuesta: package-lock.json
tipo: completar
enunciado: En Node.js, el archivo que garantiza que las versiones exactas de las dependencias instaladas sean consistentes entre diferentes máquinas es `______`.
pasos:
  - "Identificar el archivo de bloqueo de versiones en npm."
  - "Diferenciar entre `package.json` (lógica) y el archivo de bloqueo (ejecución)."
  - "Confirmar que `package-lock.json` asegura la consistencia."
explicacion: `package-lock.json` fija las versiones exactas de las dependencias directas e indirectas para evitar cambios inesperados en la instalación.
```

### 25 — Instalación de drivers de impresora en macOS
```
metadata:
  materia: "ofimatica"
  tema: "dependencias-y-asignacion-de-recursos"
  nivel: "intermedio"
  tags: ["macos", "cups", "impresion"]
respuesta: verdadero
tipo: vf
enunciado: En macOS, la mayoría de las impresoras modernas se instalan automáticamente mediante AirPrint o descargando el controlador desde el sitio del fabricante, sin necesidad de intervención manual compleja en el sistema de archivos.
pasos:
  - "Verificar la capacidad de detección automática de macOS para impresoras."
  - "Analizar si AirPrint elimina la necesidad de drivers manuales en muchos casos."
  - "Confirmar que el proceso es mayormente automático o guiado por el sistema."
explicacion: macOS utiliza AirPrint para impresoras compatibles (sin drivers) y ofrece descargas automáticas para otras, haciendo el proceso de asignación de recursos de impresión muy automatizado.
```