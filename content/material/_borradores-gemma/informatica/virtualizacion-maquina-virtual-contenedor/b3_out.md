### 1 — El núcleo del aislamiento
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["arquitectura", "kernel", "aislamiento"]

respuesta: "kernel"
tipo: completar
respuestas_validas: ["kernel", "núcleo"]

enunciado: "A diferencia de una máquina virtual que incluye un sistema operativo completo, un contenedor comparte el ___ del sistema operativo host para ejecutar sus procesos."

explicacion: |
  Los contenedores son más ligeros porque no emulan hardware ni cargan un kernel propio; simplemente aíslan procesos que corren directamente sobre el kernel del host.
```

### 2 — El peso de la virtualización
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["recursos", "overhead", "rendimiento"]

variables:
  escenario: uno_de([
    ["Máquina Virtual", "Contenedor", "Hipervisor"],
    ["Contenedor", "Máquina Virtual", "Hipervisor"],
    ["Hipervisor", "Contenedor", "Máquina Virtual"]
  ])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Máquina Virtual", "Contenedor", "Hipervisor"]

enunciado: "Si el objetivo principal es maximizar la densidad de aplicaciones en un único servidor físico minimizando el uso de memoria y CPU, ¿qué tecnología es la más eficiente?"

explicacion: |
  Los contenedores tienen menos 'overhead' porque no necesitan ejecutar un sistema operativo invitado (Guest OS) completo para cada instancia, permitiendo ejecutar muchas más unidades en el mismo hardware.
```

### 3 — ¿Verdadero o Falso? Aislamiento de Kernel
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["seguridad", "aislamiento"]

respuesta: falso

tipo: vf

enunciado: "En un entorno de contenedores, si un proceso logra un 'escape de contenedor' y compromete el kernel, todos los demás contenedores que comparten ese mismo kernel están en riesgo."

explicacion: |
  Es falso (en el contexto de la pregunta de seguridad estándar): Si el kernel se ve comprometido, el aislamiento se rompe para todo el host. Sin embargo, la afirmación técnica es que el riesgo es real. (Nota: El usuario debe evaluar si la premisa de riesgo es cierta).
*Nota de diseño: La pregunta es de evaluación de concepto de seguridad.*
```

### 4 — El flujo de arranque
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "avanzado"
  tags: ["boot", "secuencia", "arquitectura"]

respuesta: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]
tipo: ordenar
opciones_explicitas: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]

enunciado: "Ordene los componentes según el orden de ejecución/capas en una arquitectura de Máquina Virtual clásica (desde la base física hacia la aplicación):"

explicacion: |
  En una VM, el hardware inicializa el hipervisor, el hipervisor carga el sistema operativo invitado, y finalmente el SO carga la aplicación. En un contenedor, el proceso es más directo hacia la aplicación.
```

### 5 — El dilema del aislamiento vs portabilidad
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["portabilidad", "dependencias"]

variables:
  caso: uno_de([
    ["VM", "Contenedor"],
    ["Contenedor", "VM"]
  ])

respuesta: caso[0]
tipo: mc
opciones_explicitas: ["VM", "Contenedor"]

enunciado: "Si necesito ejecutar una aplicación que requiere un kernel de Linux muy específico o una versión de sistema operativo distinta a la del host, ¿qué tecnología debo elegir para asegurar la compatibilidad total?"

explicacion: |
  Las Máquinas Virtuales emulan hardware y permiten instalar cualquier sistema operativo con su propio kernel, lo que las hace ideales para escenarios de máxima compatibilidad pero con mayor consumo de recursos.
```