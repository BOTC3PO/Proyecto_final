# Ofimática — Dependencias y asignación de recursos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../cronogramas-y-diagrama-de-gantt/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/ofimatica/dependencias-y-asignacion-de-recursos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Dependencias entre tareas

Una **dependencia** dice **cuándo puede empezar o terminar una tarea según otra**. Los cuatro tipos:

| Tipo | Significa | Ejemplo |
|:--|:--|:--|
| **Fin a inicio** (FS) | B empieza cuando termina A | no se pinta hasta que el revoque se seque |
| **Inicio a inicio** (SS) | B empieza cuando empieza A | se compra el material mientras se hace el plano |
| **Fin a fin** (FF) | B termina cuando termina A | la prueba termina junto con la instalación |
| **Inicio a fin** (SF) | B termina cuando empieza A | rara vez se usa |

La más común es **fin a inicio**. En el diagrama, las dependencias se dibujan con **flechas**.

**Demora (lag)**: una espera obligatoria entre tareas (el hormigón necesita 7 días de curado). **Adelanto (lead)**: permite empezar antes de que termine la anterior.

---

## 2. Qué cambia con las dependencias

- Si **A** se atrasa, las tareas que **dependen** de A se atrasan también.
- Las tareas **sin dependencia** pueden hacerse **en paralelo**, lo que acorta el proyecto.
- Las dependencias definen el **camino crítico** (ver `../cronogramas-y-diagrama-de-gantt/`).
- Cuidado con las dependencias **circulares** (A depende de B y B de A): no se puede planificar.

---

## 3. Recursos

Un **recurso** es lo que hace falta para hacer una tarea: **personas**, **equipos**, **materiales**, **dinero**, **espacios**. Cada uno tiene **disponibilidad** limitada (horas por día, cantidad, calendario) y un **costo**.

**Asignar** es decidir **quién o qué** realiza cada tarea, y con qué **dedicación** (porcentaje o horas).

La **duración** depende del trabajo y de los recursos: **Trabajo** (horas-persona) = **Duración** × **cantidad de personas** (aproximadamente). Si una tarea de 40 horas la hace una persona a 8 horas por día, dura 5 días; con 2 personas, 2,5 días... **pero** agregar gente no siempre acorta el tiempo: hay tareas que no se pueden dividir y se suma el costo de **coordinarse**.

---

## 4. Sobreasignación y nivelación

**Sobreasignación:** un recurso con más trabajo asignado que su disponibilidad (por ejemplo, 12 horas en un día para una persona con 8).

Cómo resolverla (**nivelación de recursos**):

1. **Redistribuir** a otra persona.
2. **Mover** una tarea que tiene holgura.
3. **Extender** la duración.
4. **Sumar** recursos.
5. **Reducir** el alcance.

Mover tareas **del camino crítico** afecta la fecha final.

---

## 5. Costos y presupuesto

El costo de una tarea es la suma de los costos de sus recursos: **horas × tarifa** (personas) + materiales + equipos. El presupuesto es la suma de las tareas más un **margen de contingencia**. Se compara lo **previsto** con lo **real** para detectar desvíos.

---

## 6. En la planilla

Una tabla con columnas **Tarea, Responsable, Horas, Tarifa, Costo** (`=Horas*Tarifa`) y una suma por responsable (`SUMAR.SI`) permite detectar quién tiene demasiado trabajo. Un resumen con una **tabla dinámica** muestra la carga por persona y por semana.
