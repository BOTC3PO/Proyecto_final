# Informatica — Virtualizacion maquina virtual contenedor (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Virtualización

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["conceptos", "virtualizacion"]

respuesta: "hipervisor"
tipo: completar
respuestas_validas:
  - "hipervisor"
  - "hypervisor"

enunciado: "En la virtualización de hardware, el software encargado de gestionar los recursos físicos y permitir la ejecución de múltiples sistemas operativos sobre un mismo host se denomina ___."

explicacion: |
  El hipervisor (o Virtual Machine Monitor) es la capa de software que crea y ejecuta máquinas virtuales, abstrayendo el hardware físico para que cada VM crea tener control total sobre él.
```

### 2 — Diferencia de aislamiento

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["aislamiento", "kernel"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["maquina_virtual", "incluye un kernel propio"], ["contenedor", "comparte el kernel del host"]]

respuesta: datos[escenario_idx][0]
tipo: mc
opciones_explicitas: ["maquina_virtual", "contenedor"]

enunciado: "Un elemento fundamental que diferencia a los contenedores de las máquinas virtuales es que el {datos[escenario_idx][0]} {datos[escenario_idx][1]}."

explicacion: |
  Las máquinas virtuales son pesadas porque emulan hardware completo y cada una tiene su propio sistema operativo (kernel). Los contenedores son ligeros porque comparten el kernel del sistema operativo anfitrión.
```

### 3 — Verdad o Falso: Portabilidad

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["portabilidad", "contenedor"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es cierto que los contenedores ofrecen una mayor portabilidad y rapidez de inicio en comparación con las máquinas virtuales debido a su arquitectura ligera?"

explicacion: |
  Verdadero. Al no tener que arrancar un sistema operativo completo desde cero, los contenedores se inician en milisegundos y son mucho más fáciles de mover entre entornos.
```

### 4 — Componentes de una VM

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["componentes", "vm"]

respuesta_orden: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]
tipo: ordenar

opciones_explicitas: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]

enunciado: "Ordene las capas de abstracción desde la base física hasta el nivel de usuario en una arquitectura de máquina virtual estándar:"

explicacion: |
  La jerarquía comienza en el hardware físico, sobre el cual actúa el hipervisor para crear la capa virtualizada, donde reside el SO invitado, permitiendo finalmente la ejecución de la aplicación.
```

### 5 — Uso de Contenedores

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["usos", "microservicios"]

respuesta: "microservicios"
tipo: mc
opciones_explicitas: ["microservicios", "emular hardware antiguo", "aislamiento total de kernel"]

enunciado: "Debido a su naturaleza ligera y eficiente, los contenedores son la tecnología preferida para implementar arquitecturas de ___."

explicacion: |
  Los microservicios se benefician de los contenedores porque permiten desplegar, escalar y destruir pequeñas unidades de software de forma extremadamente rápida y aislada.
```

### 6 — Diferencia de aislamiento

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

### 7 — Capas de software

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["arquitectura", "stack_software"]

enunciado: "Considera el siguiente stack de software para un entorno de ejecución basado en contenedores. Ordena los componentes desde la base (hardware) hasta la aplicación:"

pasos:
  - "Identificar la base física."
  - "Ubicar el componente de gestión de recursos (Kernel o Hypervisor)."
  - "Ubicar el entorno de ejecución (Runtime/Library)."
  - "Ubicar la aplicación final."

tipo: ordenar
opciones_explicitas: ["Hardware", "Kernel del Host", "Motor de Contenedores", "Aplicación"]
respuesta_orden: ["Hardware", "Kernel del Host", "Motor de Contenedores", "Aplicación"]

explicacion: |
  En contenedores, el stack es más corto porque no hay un sistema operativo completo entre el kernel y el motor de contenedores.
```

### 8 — Consumo de recursos

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["recursos", "performance"]

variables:
  escenario_tipo: uno_de(["contenedor", "máquina virtual"])
  es_contenedor: uno_de([verdadero, falso])

enunciado: "Un desarrollador necesita desplegar 50 instancias de una micro-aplicación que solo tarda 10 segundos en arrancar. Si elige la opción {escenario_tipo}, el tiempo de arranque será significativamente menor debido a que no debe cargar un kernel completo por cada instancia."

respuesta: es_contenedor
tipo: vf

explicacion: |
  Los contenedores son ideales para microservicios y despliegues masivos debido a su velocidad de arranque y bajo consumo de memoria RAM.
```

### 9 — El rol del Hypervisor

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

### 10 — Completar arquitectura de contenedores

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "avanzado"
  tags: ["namespaces", "cgroups"]

variables:
  tecnologia_nombre: uno_de(["Docker", "VMware"])

enunciado: "Para lograr el aislamiento de procesos en un contenedor como {tecnologia_nombre}, el kernel de Linux utiliza dos mecanismos críticos: los namespaces para la visibilidad de recursos y los ___ para la limitación de recursos (CPU/RAM)."

respuesta: "cgroups"
tipo: completar
respuestas_validas:
  - "cgroups"

explicacion: |
  Los namespaces proporcionan aislamiento (lo que ves), mientras que los cgroups (Control Groups) proporcionan límites (cuánto puedes usar).
```

### 11 — El núcleo del aislamiento

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["arquitectura", "kernel", "aislamiento"]

respuesta: "kernel"
tipo: completar
respuestas_validas:
  - "kernel"
  - "núcleo"

enunciado: "A diferencia de una máquina virtual que incluye un sistema operativo completo, un contenedor comparte el ___ del sistema operativo host para ejecutar sus procesos."

explicacion: |
  Los contenedores son más ligeros porque no emulan hardware ni cargan un kernel propio; simplemente aíslan procesos que corren directamente sobre el kernel del host.
```

### 12 — El peso de la virtualización

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["recursos", "overhead", "rendimiento"]

variables:
  escenario: uno_de([["Máquina Virtual", "Contenedor", "Hipervisor"], ["Contenedor", "Máquina Virtual", "Hipervisor"], ["Hipervisor", "Contenedor", "Máquina Virtual"]])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["Máquina Virtual", "Contenedor", "Hipervisor"]

enunciado: "Si el objetivo principal es maximizar la densidad de aplicaciones en un único servidor físico minimizando el uso de memoria y CPU, ¿qué tecnología es la más eficiente?"

explicacion: |
  Los contenedores tienen menos 'overhead' porque no necesitan ejecutar un sistema operativo invitado (Guest OS) completo para cada instancia, permitiendo ejecutar muchas más unidades en el mismo hardware.
```

### 13 — ¿Verdadero o Falso? Aislamiento de Kernel

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["seguridad", "aislamiento"]

tipo: vf

respuesta: verdadero

enunciado: "En un entorno de contenedores, si un proceso logra un 'escape de contenedor' y compromete el kernel, todos los demás contenedores que comparten ese mismo kernel están en riesgo."

explicacion: "Si el kernel del host es comprometido mediante un escape de contenedor, el aislamiento que protege a los demás contenedores se rompe, poniendo en riesgo a todos los procesos y datos en el host."
```

### 14 — El flujo de arranque

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "avanzado"
  tags: ["boot", "secuencia", "arquitectura"]

respuesta_orden: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]
tipo: ordenar
opciones_explicitas: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]

enunciado: "Ordene los componentes según el orden de ejecución/capas en una arquitectura de Máquina Virtual clásica (desde la base física hacia la aplicación):"

explicacion: |
  En una VM, el hardware inicializa el hipervisor, el hipervisor carga el sistema operativo invitado, y finalmente el SO carga la aplicación. En un contenedor, el proceso es más directo hacia la aplicación.
```

### 15 — El dilema del aislamiento vs portabilidad

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["portabilidad", "dependencias"]

variables:
  caso: uno_de([["VM", "Contenedor"], ["Contenedor", "VM"]])

respuesta: caso[0]
tipo: mc
opciones_explicitas: ["VM", "Contenedor"]

enunciado: "Si necesito ejecutar una aplicación que requiere un kernel de Linux muy específico o una versión de sistema operativo distinta a la del host, ¿qué tecnología debo elegir para asegurar la compatibilidad total?"

explicacion: |
  Las Máquinas Virtuales emulan hardware y permiten instalar cualquier sistema operativo con su propio kernel, lo que las hace ideales para escenarios de máxima compatibilidad pero con mayor consumo de recursos.
```

### 16 — Diferencia de aislamiento

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["virtualizacion", "aislamiento"]

respuesta: "sistema operativo"
tipo: completar
respuestas_validas:
  - "sistema operativo"

enunciado: "A diferencia de un contenedor, que comparte el núcleo del host, una máquina virtual incluye un ___ completo para funcionar."

explicacion: |
  Las máquinas virtuales (VM) incluyen un sistema operativo completo (Guest OS), lo que requiere un hipervisor, mientras que los contenedores comparten el kernel del host, siendo mucho más ligeros.
```

### 17 — Eficiencia de recursos

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["recursos", "rendimiento"]

variables:
  escenario: uno_de([["un contenedor", "más ligero y rápido"], ["una máquina virtual", "más pesado y lento"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["más ligero y rápido", "más pesado y lento"]

enunciado: "Considerando la arquitectura de virtualización, el uso de {escenario[0]} suele resultar {escenario[1]} en comparación con su contraparte."

explicacion: |
  Los contenedores son procesos aislados que comparten el kernel, por lo que no necesitan arrancar un sistema operativo completo, lo que los hace mucho más eficientes en el uso de CPU y RAM.
```

### 18 — Capas de abstracción

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["abstraccion", "arquitectura"]

respuesta: verdadero
tipo: vf

enunciado: "¿Es correcto afirmar que la virtualización a nivel de sistema operativo (contenedores) ofrece un aislamiento más fuerte que la virtualización a nivel de hardware (máquinas virtuales)?"

explicacion: |
  Falso. La virtualización de hardware (VM) ofrece un aislamiento superior porque cada VM tiene su propio kernel independiente, mientras que los contenedores comparten el mismo kernel del host, lo que representa un mayor riesgo de seguridad si el kernel es vulnerado.
```

### 19 — Ciclo de vida y arranque

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["ciclo_de_vida", "velocidad"]

respuesta_orden: ["Contenedor", "Máquina Virtual"]
tipo: ordenar
opciones_explicitas: ["Contenedor", "Máquina Virtual"]

enunciado: "Ordene los siguientes elementos de mayor a menor velocidad de arranque (del más rápido al más lento):"

explicacion: |
  Los contenedores arrancan casi instantáneamente porque son simplemente procesos del sistema operativo. Las máquinas virtuales deben realizar un proceso de boot completo del sistema operativo invitado, lo que toma segundos o minutos.
```

### 20 — Casos de uso ideales

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "avanzado"
  tags: ["arquitectura", "microservicios"]

variables:
  casos: [["microservicios", "una aplicación monolítica que requiere un kernel de Linux específico en un host Windows"], ["una aplicación monolítica que requiere un kernel de Linux específico en un host Windows", "microservicios"]]
  caso_idx: uno_de([0, 1])
  caso_actual: casos[caso_idx]
  tecnologia_correcta: caso_actual[0]
  objetivo_correcto: caso_actual[1]

respuesta: tecnologia_correcta
tipo: mc
opciones_explicitas: ["microservicios", "una aplicación monolítica que requiere un kernel de Linux específico en un host Windows"]

enunciado: "Si el objetivo principal es desplegar una arquitectura de {objetivo_correcto}, la tecnología más adecuada es el uso de contenedores. Si el objetivo es ejecutar {tecnologia_correcta}, se prefiere una máquina virtual."

explicacion: |
  Los contenedores son ideales para microservicios por su agilidad y escalabilidad. Las máquinas virtuales son necesarias cuando se requiere un aislamiento total del kernel o se necesita ejecutar un sistema operativo distinto al del host.
```

### 21 — Escenario de despliegue de microservicios

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["contenedores", "docker", "microservicios"]

variables:
  escenario_idx: uno_de([0,1])
  datos: [["un microservicio ligero que necesita escalar rápido", "contenedor"], ["un sistema operativo completo con kernel propio", "maquina_virtual"]]

enunciado: "Si el objetivo principal es desplegar {datos[escenario_idx][0]} para maximizar la eficiencia de recursos, la tecnología más adecuada es un {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["contenedor", "maquina_virtual"]

explicacion: |
  Los contenedores comparten el kernel del sistema operativo host, lo que los hace ideales para microservicios y escalado rápido, a diferencia de las máquinas virtuales que emulan hardware completo.
```

### 22 — Aislamiento y Kernel

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["kernel", "aislamiento"]

respuesta: falso
tipo: vf

enunciado: "Un contenedor de software incluye un kernel de sistema operativo completo e independiente para cada instancia ejecutada."

explicacion: |
  Falso. Los contenedores comparten el kernel del host, mientras que las máquinas virtuales sí ejecutan un kernel propio dentro de cada instancia.
```

### 23 — Componentes de una VM

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["vm", "hipervisor"]

respuesta: "hipervisor"
tipo: completar
respuestas_validas:
  - "hipervisor"

enunciado: "En la arquitectura de una máquina virtual, el software encargado de gestionar y distribuir los recursos físicos a las distintas máquinas virtuales se denomina ___."

explicacion: |
  El hipervisor (o VMM) es la capa de software que permite la existencia de la virtualización al gestionar el hardware para múltiples sistemas operativos.
```

### 24 — Orden de arranque

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["proceso", "arranque"]

enunciado: "Ordena los componentes según el orden de capas (desde el hardware hacia el usuario) para una máquina virtual."

respuesta_orden: ["Host OS", "Hypervisor", "Guest OS"]
tipo: ordenar
opciones_explicitas: ["Host OS", "Hypervisor", "Guest OS"]

explicacion: |
  En una VM, el hipervisor se asienta sobre el hardware/host para dar servicio al Guest OS. En contenedores, el motor de contenedores gestiona las aplicaciones sobre el OS host.
```

### 25 — Comparativa de peso y tamaño

```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["recursos", "almacenamiento"]

variables:
  comparativa: uno_de([["una máquina virtual", "pesada"], ["un contenedor", "ligera"]])

enunciado: "En términos de consumo de memoria y almacenamiento, {comparativa[0]} se considera generalmente una solución ___."

respuesta: comparativa[1]
tipo: mc
opciones_explicitas: ["ligera", "pesada"]

explicacion: |
  Los contenedores son ligeros porque no emulan hardware ni incluyen un kernel completo, mientras que las máquinas virtuales son pesadas debido a la duplicación de sistemas operativos.
```
