# Informática — Control de versiones (teoría)

> Tema del MAPA: `control_de_versiones`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Sistema que permite gestionar cambios en archivos y proyectos de software.

---

## 1. ¿Qué es un sistema de control de versiones?

Un sistema de control de versiones es un software que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo. Su función principal es permitir rastrear la evolución de un proyecto, recuperar estados anteriores y gestionar modificaciones hechas por múltiples personas simultáneamente. Esto facilita el trabajo colaborativo sin perder el control sobre las actualizaciones realizadas.

Los sistemas de este tipo son fundamentales en desarrollo de software, donde los archivos pueden cambiar constantemente y es crucial entender qué se modificó, cuándo y quién lo hizo. Además, permiten revertir errores o experimentar con nuevas ideas sin comprometer la estabilidad del código base.

---

## 2. Git: un ejemplo de sistema distribuido

Git es uno de los sistemas más populares de control de versiones, y se destaca por su arquitectura distribuida. A diferencia de los modelos centralizados, donde existe un único servidor que almacena todo el historial del proyecto, en Git cada desarrollador tiene una copia completa del repositorio en su máquina local. Esto permite trabajar sin conexión a internet, hacer cambios independientes y sincronizarlos con otros miembros del equipo cuando sea necesario.

Esta estructura distribuida no solo mejora la flexibilidad, sino que también aumenta la seguridad: si un servidor falla, cualquier copia local puede servir como respaldo. Además, Git permite crear ramas (branches) para explorar ideas sin afectar el código principal, lo que facilita el desarrollo paralelo.

---

## 3. El concepto de "commit"

En Git, un **commit** se entiende como una *instantánea* del estado actual de los archivos en el repositorio. Cada vez que se hace un commit, se guarda una copia completa del proyecto en ese momento, con metadatos como la fecha, el autor y un mensaje descriptivo. Esto no solo documenta qué cambió, sino también por qué se realizó el cambio.

A diferencia de otros sistemas que guardan solo las diferencias entre versiones (deltas), Git almacena snapshots completos. Esto hace que sea más eficiente recuperar estados anteriores o analizar el historial del proyecto, ya que no hay que reconstruir los archivos a partir de modificaciones parciales.

---

## 4. Ventajas de usar control de versiones

El uso de un sistema de control de versiones ofrece varias ventajas prácticas:

- **Historial detallado**: Cada cambio queda registrado, permitiendo ver quién lo realizó y cuándo.
- **Colaboración segura**: Varios desarrolladores pueden trabajar en el mismo proyecto sin sobrescribirse mutuamente.
- **Recuperación de errores**: Si un cambio introduce un problema, es posible revertir al estado anterior con precisión.
- **Experimentación controlada**: Permite probar nuevas funcionalidades en ramas independientes antes de integrarlas al código principal.

Estas características son especialmente valiosas en proyectos complejos o con múltiples participantes, donde la gestión de cambios puede volverse caótica sin un sistema estructurado.

---

## 5. Conexión con lo que sigue

Este tema conecta directamente con el análisis de flujos de trabajo (workflow) en Git, como el uso de ramas principales y secundarias, y cómo se sincronizan los cambios entre equipos. Ver `../workflow_git/`.