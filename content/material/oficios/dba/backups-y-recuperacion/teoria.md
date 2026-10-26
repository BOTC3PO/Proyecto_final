# DBA — Backups y recuperación (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../administracion-de-usuarios-y-permisos/`, `../../../informatica/transacciones-acid/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/dba/backups-y-recuperacion/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Por qué se hacen copias

Los datos se pierden por **fallas de hardware**, **errores humanos** (un `DELETE` sin `WHERE`), **errores de software**, **ataques** (ransomware), **desastres** (incendio, inundación) y **corrupción**. **La copia de seguridad (backup) es la última defensa**: **sin copias probadas, un incidente puede ser el fin del negocio**.

> **Un backup que nunca se restauró no es un backup, es una esperanza.**

**Copia no es replicación:** una **réplica** copia **todo lo que ocurre** (incluido un **borrado por error**) casi en **tiempo real**: **protege de la falla de un servidor**, **no de un error humano**. Hacen falta **las dos cosas**.

---

## 2. Dos números clave

- **RPO** (*Recovery Point Objective*): **cuántos datos** se pueden perder, medido en **tiempo** ("hasta 15 minutos"). Determina **cada cuánto** se copia.
- **RTO** (*Recovery Time Objective*): **cuánto tiempo** puede estar **caído** el sistema ("hasta 2 horas"). Determina **qué estrategia de restauración** se necesita.

Los **valores** los fija **el negocio** (**cuánto cuesta** perder datos o estar caídos); **la técnica** se elige para **cumplirlos**.

---

## 3. Tipos de copia

| Tipo | Qué guarda | Ventaja | Desventaja |
|:--|:--|:--|:--|
| **Completa** (*full*) | **todo** | restauración **simple** | **lenta y grande** |
| **Incremental** | solo lo que **cambió desde la última copia** (de cualquier tipo) | **rápida y chica** | restaurar exige **la cadena entera** |
| **Diferencial** | lo que **cambió desde la última completa** | restaurar necesita **dos** piezas | **crece** con el tiempo |
| **Lógica** (`pg_dump`) | **instrucciones SQL** o datos en un formato exportable | **portable**, puede restaurarse **por objeto** | **lenta** en bases grandes |
| **Física** (archivos) | **los archivos de datos** | **rápida** de restaurar, base grande | **ligada** a la versión y al motor |
| **Continua** (archivado de WAL) | **el registro de transacciones** | permite **restaurar a un momento exacto** | más compleja |

---

## 4. Restauración a un punto en el tiempo (PITR)

Los motores escriben **todos los cambios en un registro** de transacciones (**WAL** en PostgreSQL, *binlog* en MySQL) **antes** de aplicarlos. Si se **archiva** ese registro junto con una **copia base**, se puede **reconstruir** la base **hasta un instante concreto** (por ejemplo, **un minuto antes del `DELETE` accidental**). Se llama **Point-In-Time Recovery (PITR)**.

---

## 5. Ejemplos en PostgreSQL

```bash
# copia lógica de una base
pg_dump -Fc -d escuela -f escuela_2026-10-14.dump

# restaurar en una base nueva
createdb escuela_restaurada
pg_restore -d escuela_restaurada escuela_2026-10-14.dump

# copia lógica de toda la instancia
pg_dumpall > todo.sql
```

- **`-Fc`**: formato **comprimido** que permite **restaurar por partes**.
- **Probar** siempre la restauración en un **entorno aparte**.
- **Verificar** que **restaura sin errores** y que **los datos** son los **esperados** (conteos, un par de consultas de comprobación).

---

## 6. La regla 3-2-1

- **3** copias de los datos (la **original** y **dos** copias).
- **2** tipos de **soporte** distintos (disco local y nube, por ejemplo).
- **1** copia **fuera del lugar** (otra ubicación) **y** idealmente **inmutable o desconectada** (para resistir el **ransomware**).

---

## 7. Buenas prácticas

1. **Automatizar** las copias (**no depender** de que alguien se acuerde).
2. **Monitorear**: ¿**se ejecutó**? ¿**terminó bien**? ¿**cuánto pesa**? Una alerta cuando **falla**.
3. **Cifrar** las copias y **proteger las claves** (si se pierde la clave, **no hay copia**).
4. **Restricciones de acceso**: **pocas personas** pueden **borrar** copias.
5. **Retención**: **cuánto tiempo** se guarda cada copia (diarias por una semana, semanales por un mes, mensuales por un año), según **las necesidades y las leyes**.
6. **Probar la restauración** **periódicamente** (**simulacros**) y **medir cuánto tarda** (para saber si se cumple el **RTO**).
7. **Documentar** el **procedimiento** de restauración, **quién lo ejecuta** y **a quién avisar**.
8. **Copiar** también **la configuración** y **los scripts**, no solo los datos.
9. **Antes de un cambio importante** (migración, actualización): **copia** y **plan de vuelta atrás**.

---

## 8. Ante un incidente

1. **Parar el daño** (aislar, **no seguir escribiendo**).
2. **Evaluar**: ¿qué se perdió? ¿desde cuándo?
3. **Decidir** el **punto de restauración**.
4. **Restaurar** en un **entorno aparte** y **verificar** antes de volver a producción.
5. **Documentar** y **aprender**.

**No restaurar encima** de la base dañada sin **antes guardar una copia** de lo que quedó (puede contener datos **recuperables**).

---

## 9. Privacidad

Las copias **contienen datos personales**: valen **las mismas reglas** que para la base original (**cifrado**, **acceso limitado**, **eliminación** al vencer la retención). **Borrar** a una persona **de la base** **no la borra** de las **copias antiguas**: se define una **política** y se **documenta**.
