# Bash — Cron y tareas programadas (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../scripts-ejecutables-y-permisos/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/bash/cron-y-tareas-programadas/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es cron

**cron** es el programa que ejecuta tareas **a horarios fijos** (respaldos, limpiezas, reportes). Cada usuario tiene su tabla de tareas, el **crontab**:

| Comando | Hace |
|:--|:--|
| `crontab -e` | edita tu crontab |
| `crontab -l` | lo muestra |
| `crontab -r` | **borra todo tu crontab** (sin pedir confirmación) |

Existen también `/etc/crontab`, `/etc/cron.d/` y las carpetas `cron.daily`, `cron.hourly`, etc. del sistema.

---

## 2. Formato de una línea

```
┌───────── minuto (0-59)
│ ┌─────── hora (0-23)
│ │ ┌───── día del mes (1-31)
│ │ │ ┌─── mes (1-12)
│ │ │ │ ┌─ día de la semana (0-7; 0 y 7 son domingo)
│ │ │ │ │
* * * * *  comando
```

| Línea | Cuándo se ejecuta |
|:--|:--|
| `30 2 * * *` | todos los días a las 2:30 |
| `0 */4 * * *` | cada 4 horas, en punto |
| `*/15 * * * *` | cada 15 minutos |
| `0 9 * * 1-5` | de lunes a viernes a las 9:00 |
| `0 0 1 * *` | el día 1 de cada mes a medianoche |
| `0 3 * * 0` | los domingos a las 3:00 |
| `@reboot` | cada vez que arranca el sistema |

Símbolos: `*` (todos), `,` (lista: `1,15`), `-` (rango: `1-5`), `/` (paso: `*/10`). También existen atajos `@hourly`, `@daily`, `@weekly`, `@monthly`.

---

## 3. Por qué una tarea "funciona a mano y no en cron"

Cron arranca con un **entorno mínimo**:

- El `PATH` es corto (normalmente `/usr/bin:/bin`). Usá **rutas absolutas** (`/usr/bin/python3 /home/ana/tareas/reporte.py`) o definí `PATH=` al comienzo del crontab.
- No hay carpeta actual conocida: las rutas **relativas** no sirven.
- No carga tu `.bashrc`: las variables que dependen de él no existen.
- La **salida** no se ve en ninguna pantalla: se envía por correo (si está configurado) o se pierde. **Redirigila a un registro:** `... >> /var/log/respaldo.log 2>&1`.
- El **script** tiene que ser ejecutable y tener shebang.
- Los porcentajes `%` en la línea del crontab tienen un significado especial: hay que escapar como `\%` (por ejemplo, en `date +%F`).

---

## 4. Buenas prácticas

- Probá primero el comando **a mano** y con el mismo entorno (`env -i /bin/bash -c '...'`).
- Al probar, programalo para "cada minuto" (`* * * * *`) y volvé al horario real después.
- Registrá la salida y el código de salida.
- Cuidado con tareas que **se solapan** (una que dura más que el intervalo): se puede usar `flock`.
- Para una sola vez: `at` (`echo "comando" | at 18:00`). Para tareas modernas del sistema se usan también **timers de systemd**.
- Los horarios usan la **zona horaria del sistema**.
