# Informática — Diseño y arquitectura de software (teoría)

> Tema del MAPA: `informatica/diseno-y-arquitectura-de-software`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Estudia cómo se estructuran los sistemas informáticos para cumplir funcionalidades específicas.

---

## 1. ¿Qué es la arquitectura de software?

La arquitectura de un software no es el código ni las interfaces visuales, sino la **estructura fundamental que define cómo está organizado**. Imagina un edificio: los planos muestran qué habitaciones hay, cómo se comunican entre sí y qué materiales se usan. En software, eso son sus componentes (como módulos o servicios), cómo interactúan y las reglas que guían su funcionamiento.

Por ejemplo, en una app de mensajería, la arquitectura podría dividir el sistema en capas: una para recibir mensajes del usuario, otra para procesarlos y otra para almacenarlos. Esta división no solo facilita el desarrollo, sino también la escalabilidad (agregar más usuarios) o la seguridad (proteger datos sensibles).

## 2. Requerimientos no funcionales: los "cómo" del sistema

Mientras que los requerimientos funcionales definen **qué debe hacer** un software (ej: "permitir enviar mensajes"), los atributos de calidad, o **requerimientos no funcionales**, responden a **cómo se comporta** bajo ciertas condiciones. Entre ellos:

- **Escalabilidad**: ¿Se puede manejar más usuarios sin caer?
- **Seguridad**: ¿Protege datos sensibles contra accesos no autorizados?
- **Disponibilidad**: ¿Está siempre operativo, incluso en fallos?

Estos no son solo "bonitos toques" sino decisiones críticas. Un sistema que procesa transacciones bancarias debe priorizar la seguridad y la disponibilidad, aunque eso implique costos de desarrollo mayores.

## 3. El ciclo de vida: de los planes al despliegue

El desarrollo de software no es un proceso lineal, pero se suele dividir en etapas:

1. **Análisis de requisitos**: Se reúnen las necesidades del usuario y se definen objetivos claros.
2. **Diseño de arquitectura**: Aquí se elige cómo organizar los componentes para cumplir esos requisitos, considerando escalabilidad, seguridad etc.
3. **Implementación**: Se escribe el código siguiendo las decisiones del diseño.
4. **Pruebas y despliegue**: El software se prueba en entornos controlados antes de lanzarlo al público.

El diseño arquitectónico tiene un peso crucial: si desde el comienzo no se considera, problemas como la falta de escalabilidad pueden volverse imposibles de resolver en etapas posteriores.

## 4. ¿Por qué importa la arquitectura?

La arquitectura actúa como **herramienta de comunicación** entre desarrolladores, clientes y stakeholders. Define límites claros (¿qué parte del sistema es responsabilidad de quién?) y facilita la toma de decisiones técnicas. Además, una buena arquitectura reduce riesgos: si un componente falla, el sistema no colapsa por completo.

Por ejemplo, en una aplicación que usa microservicios (componentes independientes), si uno se cae, los demás siguen funcionando. Eso es una decisión de arquitectura que impacta directamente en la disponibilidad del sistema.

## N. Conexión con lo que sigue

Este tema sienta las bases para entender cómo se eligen patrones de diseño ([patrones de diseno](patrones de diseno)) y cómo se gestiona un proyecto a gran escala ([gestion de proyectos](gestion de proyectos)).