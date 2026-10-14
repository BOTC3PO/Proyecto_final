# Ofimática — Cronogramas y diagrama de Gantt (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../formulas-y-referencias/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/ofimatica/cronogramas-y-diagrama-de-gantt/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es un cronograma

Un **cronograma** es el plan de un proyecto en el **tiempo**: qué **tareas** hay, cuándo **empiezan**, cuánto **duran** y cuándo **terminan**. Responde: **¿qué, cuándo y cuánto tarda?**

Un proyecto tiene un **objetivo**, un **alcance**, un **plazo** y **recursos** limitados.

---

## 2. Pasos para armarlo

1. **Definir el objetivo** y lo que **entra y no entra** en el proyecto (alcance).
2. **Listar las tareas**: dividir lo grande en partes manejables (**estructura de desglose del trabajo**, EDT/WBS). Una tarea debería tener un resultado claro y durar de unas horas a unas semanas.
3. **Estimar la duración** de cada una (con la experiencia previa, consultando a quien la hace, con margen).
4. **Establecer el orden y las dependencias** (`../dependencias-y-asignacion-de-recursos/`).
5. **Fijar fechas** de inicio y fin y los **hitos**.
6. **Asignar** responsables.
7. **Seguir y ajustar** el plan.

**Hito:** un punto importante sin duración (una entrega, una aprobación, la inauguración).

---

## 3. El diagrama de Gantt

Un **diagrama de Gantt** es un gráfico de barras horizontales: en el **eje vertical** van las **tareas** y en el **horizontal** el **tiempo**. Cada barra empieza donde empieza la tarea y su largo es su **duración**. Se ven de un vistazo las **superposiciones**, las **dependencias** (flechas) y el **avance** (parte rellena de la barra). Los **hitos** se marcan con rombos.

| Tarea | Inicio | Duración (días) | Fin |
|:--|:--|:--|:--|
| Diseño | 1/3 | 5 | 5/3 |
| Compras | 8/3 | 3 | 10/3 |
| Montaje | 11/3 | 7 | 17/3 |

En una **planilla** se puede armar con columnas de inicio y duración, la fórmula del **fin** (`=Inicio + Duración - 1`, o `DIA.LAB` para contar solo días hábiles) y un **formato condicional** que pinta las celdas del calendario entre el inicio y el fin. También existen programas específicos de gestión de proyectos.

---

## 4. Camino crítico

La cadena de tareas dependientes que **determina la duración total**. Si una tarea del camino crítico se atrasa, **se atrasa todo el proyecto**. Las tareas fuera del camino tienen **holgura** (pueden retrasarse un poco sin afectar el final). Hay que **vigilar** primero las críticas.

---

## 5. Buenas prácticas

- **Dejar margen** para imprevistos (los tiempos casi siempre se subestiman).
- Considerar **días hábiles, feriados y vacaciones**.
- No cargar a una persona con **tareas superpuestas** que no puede hacer a la vez.
- **Revisar el plan periódicamente** y comparar lo previsto con lo real.
- **Comunicar** los cambios al equipo.
