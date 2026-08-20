### 1 — Escenario de despliegue de microservicios
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

### 2 — Aislamiento y Kernel
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

### 3 — Componentes de una VM
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["vm", "hipervisor"]

respuesta: "hipervisor"
tipo: completar
respuestas_validas: ["hipervisor"]

enunciado: "En la arquitectura de una máquina virtual, el software encargado de gestionar y distribuir los recursos físicos a las distintas máquinas virtuales se denomina ___."

explicacion: |
  El hipervisor (o VMM) es la capa de software que permite la existencia de la virtualización al gestionar el hardware para múltiples sistemas operativos.
```

### 4 — Orden de arranque
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["proceso", "arranque"]

variables:
  tipo_tecnologia: uno_de(["vm", "cont"])
  secuencia: [["Host OS", "Hypervisor", "Guest OS"], ["Host OS", "Container Engine", "Application"]]
  orden_correcto: [["Host OS", "Hypervisor", "Guest OS"], ["Host OS", "Container Engine", "Application"]]

enunciado: "Ordena los componentes según el orden de capas (desde el hardware hacia el usuario) para una {tipo_tecnologia == 'vm' ? 'máquina virtual' : 'tecnología de contenedores'}."

respuesta: tipo_tecnologia == 'vm' ? orden_correcto[0] : orden_correcto[1]
tipo: ordenar
opciones_explicitas: ["Host OS", "Hypervisor", "Guest OS", "Container Engine", "Application"]

explicacion: |
  En una VM, el hipervisor se asienta sobre el hardware/host para dar servicio al Guest OS. En contenedores, el motor de contenedores gestiona las aplicaciones sobre el OS host.
```

### 5 — Comparativa de peso y tamaño
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["recursos", "almacenamiento"]

variables:
  caso_idx: uno_de([0,1])
  comparativa: [["pesada", "maquina_virtual"], ["ligera", "contenedor"]]

enunciado: "Comparando ambas tecnologías, una {comparativa[caso_idx][0]} es considerada generalmente como una solución ___ en términos de consumo de memoria y almacenamiento."

respuesta: comparativa[caso_idx][1]
tipo: mc
opciones_explicitas: ["ligera", "pesada"]

explicacion: |
  Los contenedores son ligeros porque no emulan hardware ni incluyen un kernel completo, mientras que las máquinas virtuales son pesadas debido a la duplicación de sistemas operativos.
```