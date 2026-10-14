# Backend — Arquitectura de servidores (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../apis-rest/`, `../../../informatica/diseno-y-arquitectura-de-software/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/backend/arquitectura-de-servidores/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es un servidor

Un **servidor** es un **programa** (y, por extensión, la **máquina** que lo ejecuta) que **espera peticiones** de clientes y **responde**. Un **servicio web** típico se compone de capas:

```
Cliente  →  Proxy inverso / balanceador  →  Aplicación  →  Base de datos
(navegador)   (Nginx, HAProxy)              (Node, Python...)  (PostgreSQL)
```

---

## 2. Componentes

| Componente | Qué hace |
|:--|:--|
| **Servidor web / proxy inverso** (Nginx, Apache) | recibe las peticiones, entrega **archivos estáticos**, aplica **HTTPS** y **reenvía** a la aplicación |
| **Aplicación** | la **lógica de negocio** (rutas, validaciones, reglas) |
| **Base de datos** | guarda los **datos** de forma persistente |
| **Caché** (Redis, Memcached) | guarda en **memoria** respuestas costosas para **no repetirlas** |
| **Cola de mensajes** (RabbitMQ, Kafka) | **encola** tareas lentas (enviar un correo) para hacerlas **en segundo plano** |
| **Balanceador de carga** | **reparte** las peticiones entre varias copias de la aplicación |
| **Almacenamiento de archivos** | imágenes y documentos (disco, almacenamiento en la nube) |

---

## 3. Capas de una aplicación

Una forma habitual de **ordenar el código**:

1. **Rutas/controladores:** reciben la petición y devuelven la respuesta.
2. **Servicios:** reglas de negocio.
3. **Acceso a datos** (repositorios): conversan con la base de datos.

**Separar responsabilidades** facilita **probar** y **cambiar** el código. Los **errores** y los **permisos** se tratan en un lugar común (*middleware*).

---

## 4. Escalar

- **Escalado vertical:** darle **más recursos** (CPU, memoria) a **un** servidor. Tiene un **límite** y un punto único de falla.
- **Escalado horizontal:** **sumar servidores** detrás de un balanceador. Requiere que la aplicación sea **sin estado** (sin guardar datos de sesión en la memoria de un servidor).
- **Cuellos de botella** típicos: la **base de datos** y las **consultas lentas**. Se atacan con **índices**, **caché** y **réplicas de lectura**.

---

## 5. Disponibilidad y fallas

- **Punto único de falla:** un componente cuya caída **detiene todo**. Se reduce con **redundancia**.
- **Copias de seguridad** y **recuperación** (probadas).
- **Monitoreo** y **alertas** (CPU, memoria, errores, tiempos).
- **Registros (logs)** con **información útil** y **sin datos sensibles**.
- **Chequeos de salud** (*health checks*) para que el balanceador **saque** a un servidor que falla.
- **Despliegues sin cortes** (de a un servidor, con **vuelta atrás** si algo sale mal).

---

## 6. Monolito y servicios

- **Monolito:** **una sola aplicación** con todo. **Más simple** de empezar, probar y desplegar.
- **Microservicios:** **varios servicios pequeños**, cada uno con su base de datos. **Escalan y se despliegan por separado**, pero añaden **complejidad** (red, datos distribuidos, monitoreo).

**Empezar con un monolito bien ordenado** suele ser la mejor decisión; dividir **cuando hay una razón concreta**.

---

## 7. Seguridad básica del servidor

- **Actualizaciones** al día.
- **Cerrar puertos** innecesarios y usar **firewall**.
- **Mínimos privilegios** (servicios con usuarios sin permisos de administrador).
- **Secretos** (claves, contraseñas) en **variables de entorno** o un **gestor de secretos**, **no** en el código.
- **HTTPS** con certificados válidos.
- **Entornos separados:** desarrollo, pruebas y producción.
