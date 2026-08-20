### 1 — Concepto de Virtualización
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["conceptos", "virtualizacion"]

respuesta: "hipervisor"
tipo: completar
respuestas_validas: ["hipervisor", "hypervisor"]

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

respuesta: uno_de([0, 1])
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

respuesta: ["Hardware", "Hipervisor", "Sistema Operativo Invitado", "Aplicación"]
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