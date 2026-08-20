# Informática — mantenimiento y deuda técnica (teoría)

> Tema del MAPA: `informatica/mantenimiento-y-deuda-tecnica`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría

**Presentación** — Explicación sobre cómo el software evoluciona y se mantiene tras su implementación.

---

## 1. ¿Qué es la deuda técnica?

La **deuda técnica** es un concepto que compara las decisiones apresuradas durante el desarrollo de software con una deuda financiera. Cuando se toman atajos para cumplir plazos o resolver problemas a corto plazo, se genera una "deuda" que, si no se abona (mediante refactorizaciones o mejoras), aumenta los costos y dificultades del mantenimiento con el tiempo. Por ejemplo, un código mal estructurado puede hacer que futuras modificaciones requieran más esfuerzo de lo necesario.

Esta idea no significa que el software sea "malo", sino que existen compromisos entre velocidad, calidad y escalabilidad. La deuda técnica se acumula cuando se prioriza la entrega sobre la sostenibilidad a largo plazo.

---

## 2. Tipos de mantenimiento

El **mantenimiento** es el proceso continuo de mejorar, corregir o adaptar un software después de su implementación inicial. Se clasifica en varios tipos:

- **Correctivo**: Corrige errores o fallos que impiden el funcionamiento normal del sistema. Por ejemplo, arreglar un bug que hace que una aplicación se cierre inesperadamente.
- **Evolutivo**: Agrega nuevas funcionalidades o mejora características existentes según las necesidades cambiantes de los usuarios. Como cuando un cliente solicita un nuevo módulo en una plataforma.
- **Adaptativo**: Modifica el software para que funcione en nuevos entornos, como actualizarlo para compatibilidad con un sistema operativo reciente.
- **Preventivo**: Busca evitar problemas futuros mediante mejoras proactivas. Por ejemplo, optimizar código para prevenir errores de rendimiento.

Cada tipo requiere estrategias distintas y afecta la planificación del desarrollo.

---

## 3. Impacto de la deuda técnica

La presencia de deuda técnica no siempre indica un software de mala calidad, pero sí puede generar costos ocultos. A medida que se acumula, las modificaciones futuras toman más tiempo y recursos porque el código es menos claro o flexible. Por ejemplo, un sistema con deuda técnica elevada podría tardar horas en implementar una corrección simple.

Además, la deuda técnica aumenta el riesgo de errores: cambios en partes del código pueden afectar otros componentes no esperados. Esto ralentiza el desarrollo y puede llevar a decisiones aún peores para "salvar" tiempo.

---

## 4. Gestión de la deuda técnica

Para minimizar su impacto, es clave **refactorizar** regularmente: mejorar el código sin cambiar su funcionalidad. Esto incluye:

- Establecer estándares de codificación claros.
- Realizar revisiones de código (code reviews) para detectar prácticas dañinas.
- Usar herramientas automatizadas para identificar problemas comunes, como duplicados o errores de estilo.

La gestión activa de la deuda técnica no es opcional: es una práctica que garantiza que el software siga siendo útil y escalable a largo plazo.

---

## N. Conexión con lo que sigue

Este tema conecta con conceptos clave en metodologias de desarrollo, donde se analizan cómo las prácticas ágiles o el desarrollo iterativo ayudan a controlar la deuda técnica desde el inicio del proyecto.