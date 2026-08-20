# Informática — Virtualización: Máquina Virtual y Contenedor  

> Tema del MAPA: `informatica/virtualizacion-maquina-virtual-contenedor`. Depende de: a determinar (ver dependencias.md).  

## Tipo de teoría  
**Presentación** — Explicación de los conceptos básicos de virtualización, máquinas virtuales y contenedores.  

---

## 1. ¿Qué es la virtualización?  

La **virtualización** es una tecnología que permite crear entornos computacionales independientes sobre un mismo hardware físico. Esto se logra mediante un software especializado llamado **hipervisor**, que actúa como intermediario entre el sistema operativo anfitrión (host) y los sistemas operativos invitados (guest).  

El hipervisor gestiona recursos del hardware, como la CPU, la memoria y el almacenamiento, distribuyéndolos entre las máquinas virtuales (VMs) o contenedores. Esto permite ejecutar múltiples sistemas operativos en paralelo sin conflictos, lo cual es útil para pruebas, desarrollo de software o optimización del uso de recursos en servidores.  

La virtualización no requiere hardware específico: todo se maneja a través de software. Por ejemplo, un servidor físico puede alojar cientos de VMs, cada una con su propio sistema operativo y aplicaciones, como si fueran computadoras independientes.  

---

## 2. Máquina Virtual vs Contenedor: ¿En qué difieren?  

La principal diferencia entre una **máquina virtual** y un **contenedor** radica en cómo interactúan con el kernel del sistema operativo anfitrión.  

Una máquina virtual emula hardware completo, incluyendo su propio procesador, memoria y almacenamiento. Para funcionar, necesita un sistema operativo independiente (con su propio kernel), lo que la hace más pesada y consume más recursos. Este aislamiento total garantiza que las VMs no interfieran entre sí, pero también las hace lentas en comparación con otros métodos.  

Por otro lado, los **contenedores** comparten el kernel del sistema operativo anfitrión. En lugar de emular hardware, crean un entorno aislado dentro del mismo kernel, usando solo las partes necesarias para ejecutar una aplicación o servicio. Esto hace que los contenedores sean más ligeros y rápidos de arrancar y detener.  

[IMAGEN: Comparación entre máquina virtual (con hardware emulado) y contenedor (sobre el kernel del host)]  

---

## 3. Ventajas de los contenedores  

Los contenedores tienen varias ventajas sobre las máquinas virtuales, especialmente en contextos modernos de desarrollo y despliegue de software:  

- **Portabilidad**: Un contenedor puede ejecutarse en cualquier sistema que soporte el mismo kernel (por ejemplo, Linux), sin necesidad de ajustes complejos. Esto facilita la migración entre entornos de desarrollo, prueba y producción.  
- **Rapidez de inicio**: Al no requerir un sistema operativo completo, los contenedores arrancan en cuestión de segundos.  
- **Uso eficiente de recursos**: Comparten el kernel del host, lo que reduce la sobrecarga de hardware y permite más instancias simultáneas.  

Estas características hacen a los contenedores ideales para microservicios, donde cada servicio puede ejecutarse en su propio contenedor sin afectar al resto del sistema.  

---

## 4. Casos de uso típicos  

Ambas tecnologías tienen aplicaciones específicas según las necesidades:  

- **Máquinas virtuales**: Se usan cuando se necesita un entorno completamente aislado, como para probar sistemas operativos antiguos, ejecutar software incompatible con el host o garantizar alta seguridad entre procesos.  
- **Contenedores**: Son esenciales en entornos de desarrollo ágil (DevOps), donde se requiere desplegar aplicaciones rápidamente y escalar servicios según la demanda. Plataformas como Docker y Kubernetes están basadas en esta tecnología.  

En resumen, la elección entre una VM o un contenedor depende del equilibrio entre aislamiento, rendimiento y flexibilidad que se necesite para cada caso.  

---

## N. Conexión con lo que sigue  

Este tema es base para entender cómo se implementan herramientas como Docker en implementacion contenedores o los hipervisores más usados en hipervisores principales.