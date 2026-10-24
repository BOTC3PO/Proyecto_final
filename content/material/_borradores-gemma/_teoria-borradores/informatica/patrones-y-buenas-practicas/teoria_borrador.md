# Informática — Patrones y buenas prácticas (teoría)

> Tema del MAPA: `patrones_y_buenas_practicas`. Depende de `../conceptos_basicos_de_programacion/` (ver `../dependencias.md`).

## Tipo de teoría

**Presentación** — Introducción a los patrones de diseño y principios que guían el desarrollo de software mantenible.

---

## 1. ¿Qué son los patrones de diseño?

Un patrón de diseño es una **solución reutilizable** para resolver problemas comunes en el diseño de software, no un fragmento de código específico. Surge cuando múltiples desarrolladores enfrentan situaciones similares y encuentran formas eficientes de abordarlas. Por ejemplo, si varias aplicaciones necesitan garantizar que una clase tenga solo una instancia activa (como una conexión a base de datos), el patrón **Singleton** se propone como respuesta. Estos patrones no son reglas rígidas: son guías que ayudan a estructurar soluciones sin limitar la creatividad del programador.

## 2. Cómo se clasifican los patrones

Los patrones de diseño se agrupan en tres categorías según su propósito:

- **Creacionales**: Se enfocan en cómo se crean objetos, como el patrón *Singleton* (una sola instancia) o *Factory Method* (creación dinámica).  
- **Estructurales**: Trabajan con la organización de clases y objetos para formar estructuras más eficientes. Un ejemplo es el patrón *Adapter*, que permite que dos componentes incompatibles colaboren.  
- **De comportamiento**: Se centran en cómo los objetos comunican o coordinan acciones, como el patrón *Observer* (notificación de cambios) o *Strategy* (diseño flexible de algoritmos).

Cada categoría aborda aspectos distintos del desarrollo: creación, estructura y comunicación.

## 3. ¿Por qué importa la calidad del código?

Las buenas prácticas no solo mejoran el funcionamiento del software, sino también su mantenibilidad. Un código limpio permite que otros programadores lo entiendan rápido, evita errores futuros y facilita actualizaciones. Por ejemplo, si una clase maneja tanto la lógica de negocio como la persistencia de datos, cualquier cambio en uno afectará al otro. Eso complica el mantenimiento.

## 4. El principio de responsabilidad única (SRP)

El **principio de Responsabilidad Única** (SRP) establece que una clase debe tener un único motivo para cambiar. Si una clase se encarga de múltiples tareas, cualquier modificación en una de ellas puede generar efectos no deseados en las demás. Por ejemplo, si una clase gestiona tanto la validación de datos como su almacenamiento en base de datos, un cambio en el formato de los datos requerirá ajustes en ambas áreas. Separar estas responsabilidades en clases distintas reduce riesgos y simplifica el mantenimiento.

## 5. Herramientas para aplicar buenas prácticas

Además de SRP, existen otros principios como **Open/Closed** (abiertos a extensión, cerrados a modificación) o **Liskov Substitution** (sustitución de Liskov), que también forman parte del acrónimo SOLID. Estas reglas no son obligatorias, pero guían el diseño hacia sistemas más escalables y fáciles de probar. Por ejemplo, al usar interfaces en lugar de implementaciones concretas, se facilita la sustitución de componentes sin alterar el código existente.

## N. Conexión con lo que sigue

Este tema prepara para entender cómo aplicar patrones específicos (como *MVC* o *Repository*) y profundizar en principios SOLID más allá del SRP, en `../principios_solid/`.