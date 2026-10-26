### 1 — Diferencia de aislamiento
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["virtualizacion", "aislamiento"]

respuesta: "sistema operativo"
tipo: completar
respuestas_validas: ["sistema operativo"]

enunciado: "A diferencia de un contenedor, que comparte el núcleo del host, una máquina virtual incluye un ___ completo para funcionar."

explicacion: |
  Las máquinas virtuales (VM) incluyen un sistema operativo completo (Guest OS), lo que requiere un hipervisor, mientras que los contenedores comparten el kernel del host, siendo mucho más ligeros.
```

### 2 — Eficiencia de recursos
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "basico"
  tags: ["recursos", "rendimiento"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["un contenedor", "una máquina virtual"],
    ["más ligero y rápido", "más pesado y lento"]
  ]

respuesta: uno_de([0, 1])
tipo: mc
opciones_explicitas: ["más ligero y rápido", "más pesado y lento"]

enunciado: "Considerando la arquitectura de virtualización, un {escenarios[escenario_idx][0]} suele ser {escenarios[escenario_idx][1]} en comparación con su contraparte."

explicacion: |
  Los contenedores son procesos aislados que comparten el kernel, por lo que no necesitan arrancar un sistema operativo completo, lo que los hace mucho más eficientes en el uso de CPU y RAM.
```

### 3 — Capas de abstracción
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

### 4 — Ciclo de vida y arranque
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "intermedio"
  tags: ["ciclo_de_vida", "velocidad"]

respuesta: ["Contenedor", "Máquina Virtual"]
tipo: ordenar
opciones_explicitas: ["Contenedor", "Máquina Virtual"]

enunciado: "Ordene los siguientes elementos de mayor a menor velocidad de arranque (del más rápido al más lento):"

explicacion: |
  Los contenedores arrancan casi instantáneamente porque son simplemente procesos del sistema operativo. Las máquinas virtuales deben realizar un proceso de boot completo del sistema operativo invitado, lo que toma segundos o minutos.
```

### 5 — Casos de uso ideales
```
metadata:
  materia: "informatica"
  tema: "virtualizacion_maquina_virtual_contenedor"
  nivel: "avanzado"
  tags: ["arquitectura", "microservicios"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["microservicios", "una aplicación monolítica que requiere un kernel de Linux específico en un host Windows"],
    ["una aplicación monolítica que requiere un kernel de Linux específico en un host Windows", "microservicios"]
  ]
  solucion: ["microservicios", "una aplicación monolítica que requiere un kernel de Linux específico en un host Windows"]

respuesta: uno_de([0, 1])
tipo: mc
opciones_explicitas: ["microservicios", "una aplicación monolítica que requiere un kernel de Linux específico en un host Windows"]

enunciado: "Si el objetivo principal es desplegar una arquitectura de {casos[caso_idx][0]}, la tecnología más adecuada es el uso de contenedores. Si el objetivo es ejecutar {casos[caso_idx][1]}, se prefiere una máquina virtual."

explicacion: |
  Los contenedores son ideales para microservicios por su agilidad y escalabilidad. Las máquinas virtuales son necesarias cuando se requiere un aislamiento total del kernel o se necesita ejecutar un sistema operativo distinto al del host.
```