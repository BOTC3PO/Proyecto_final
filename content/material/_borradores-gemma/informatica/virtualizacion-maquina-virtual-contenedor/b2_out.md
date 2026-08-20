### 1 — Diferencia de aislamiento
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["virtualizacion", "conceptos_base"]

variables:
  tipo_tecnologia: uno_de(["vm", "contenedor"])

enunciado: "Si utilizamos {tipo_tecnologia}, el aislamiento se logra mediante un hipervisor que emula hardware completo, mientras que si usamos un contenedor, el aislamiento se basa en el aislamiento de procesos del kernel del sistema operativo host."

respuesta: "vm"
tipo: mc
opciones_explicitas: ["vm", "contenedor"]

explicacion: |
  Las Máquinas Virtuales (VM) incluyen un Sistema Operativo completo (Guest OS) sobre un hipervisor, lo que requiere más recursos. Los contenedores comparten el kernel del host, siendo mucho más ligeros.
```

### 2 — Capas de software
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["arquitectura", "stack_software"]

variables:
  es_contenedor: uno_de([verdadero, falso])

enunciado: "Considera el siguiente stack de software para un entorno de ejecución. Ordena los componentes desde la base (hardware) hasta la aplicación, asumiendo que el escenario seleccionado es: {es_contenedor_desc}."

pasos:
  - "Identificar la base física."
  - "Ubicar el componente de gestión de recursos (Kernel o Hypervisor)."
  - "Ubicar el entorno de ejecución (Runtime/Library)."
  - "Ubicar la aplicación final."

variables:
  es_contenedor_desc: uno_de(["un sistema con contenedores", "una máquina virtual"])
  stack_contenedor: ["Hardware", "Kernel del Host", "Motor de Contenedores", "Aplicación"]
  stack_vm: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]

respuesta: ["Hardware", "Kernel del Host", "Motor de Contenedores", "Aplicación"]
tipo: ordenar
opciones_explicitas: ["Hardware", "Kernel del Host", "Motor de Contenedores", "Aplicación"]

explicacion: |
  En contenedores, el stack es más corto porque no hay un sistema operativo completo entre el kernel y el motor de contenedores.
```

### 3 — Consumo de recursos
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["recursos", "performance"]

variables:
  escenario: uno_de([0, 1])

enunciado: "Un desarrollador necesita desplegar 50 instancias de una micro-aplicación que solo tarda 10 segundos en arrancar. Si elige la opción {escenario_tipo}, el tiempo de arranque será significativamente menor debido a que no debe cargar un kernel completo por cada instancia."

variables:
  escenario_tipo: uno_de(["contenedor", "máquina virtual"])
  es_contenedor: uno_de([verdadero, falso])

respuesta: verdadero
tipo: vf

explicacion: |
  Los contenedores son ideales para microservicios y despliegues masivos debido a su velocidad de arranque y bajo consumo de memoria RAM.
```

### 4 — El rol del Hypervisor
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["hipervisor", "vm"]

variables:
  valor_hipervisor: uno_de([1, 0])

enunciado: "En una arquitectura de virtualización de tipo 1 (Bare Metal), el hipervisor se instala directamente sobre el hardware. Si el software de virtualización se instala sobre un sistema operativo ya existente (Tipo 2), ¿el hipervisor es el componente que gestiona directamente el hardware físico? (Responde verdadero o falso)."

respuesta: falso
tipo: vf

explicacion: |
  En la virtualización Tipo 2 (Hosted), el sistema operativo host es el que gestiona el hardware, y el hipervisor corre como una aplicación más sobre él.
```

### 5 — Completar arquitectura de contenedores
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "avanzado"
  tags: ["namespaces", "cgroups"]

variables:
  tecnologia: uno_de(["docker", "vm"])

enunciado: "Para lograr el aislamiento de procesos en un contenedor como {tecnologia_nombre}, el kernel de Linux utiliza dos mecanismos críticos: los namespaces para la visibilidad de recursos y los ___ para la limitación de recursos (CPU/RAM)."

variables:
  tecnologia_nombre: uno_de(["Docker", "VMware"])
  respuesta_mecanismo: "cgroups"

respuesta_mecanismos: ["cgroups", "drivers", "kernels"]

respuesta: "cgroups"
tipo: completar
respuestas_validas: ["cgroups"]

explicacion: |
  Los namespaces proporcionan aislamiento (lo que ves), mientras que los cgroups (Control Groups) proporcionan límites (cuánto puedes usar).
```