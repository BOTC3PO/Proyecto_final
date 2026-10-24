# Ciberseguridad — Hardening básico (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../gestion-de-contrasenas/`, `../../../informatica/seguridad-de-red-firewall-vpn-cifrado/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/ciberseguridad/hardening-basico/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

> **Alcance:** tema **defensivo**. Se aplica **a equipos y redes propios o a cargo** de la persona.

## 1. Qué es el hardening

**Hardening** (endurecimiento) es **reducir la superficie de ataque** de un sistema: **quitar, desactivar o configurar** lo que **no hace falta** o **es inseguro**, para que haya **menos puntos débiles**. La idea: **cada función extra** es **una posible puerta**.

Principios:

- **Mínimo privilegio:** cada persona y programa tiene **solo** los permisos necesarios.
- **Mínima superficie:** **instalar y habilitar solo** lo necesario.
- **Seguro por defecto:** **cambiar** claves y configuraciones **de fábrica**.
- **Defensa en profundidad:** **varias capas**.
- **Actualizado:** **parches** al día.
- **Verificable:** **registrar** y **revisar**.

---

## 2. Actualizaciones

- **Sistema operativo, navegador y aplicaciones**: **actualizaciones automáticas** activadas.
- Las **actualizaciones de seguridad** corrigen **fallas ya conocidas** y publicadas: **los atacantes las explotan** en equipos **sin parchear**.
- **Software sin soporte** (un sistema operativo que ya **no recibe parches**) es un **riesgo permanente**: reemplazarlo.
- **Firmware** de routers, cámaras y dispositivos: **también** se actualiza.
- **Descargar** software **solo de fuentes oficiales** y **verificar** su integridad.

---

## 3. Cuentas y permisos

- **Cuentas separadas:** **una de uso diario sin privilegios** y **otra de administrador** solo cuando hace falta.
- **No usar** una cuenta de **administrador** o **root** para la tarea cotidiana.
- **Eliminar o desactivar** cuentas **sin uso** y **cuentas de invitado** innecesarias.
- **Cambiar** claves de **fábrica** (routers, cámaras, impresoras).
- **Contraseñas fuertes** y **MFA** (ver `../gestion-de-contrasenas/`).
- **Revisar permisos** de archivos, carpetas compartidas y aplicaciones.
- **UAC** (Windows) y **`sudo`** (Linux) piden **confirmación** para acciones privilegiadas: **no** deshabilitarlos.

---

## 4. Servicios y programas

- **Desinstalar** lo que **no se usa**.
- **Desactivar servicios** innecesarios (compartir archivos, escritorio remoto, Telnet, FTP sin cifrar).
- **Cerrar puertos** que **no se necesitan** y **no exponer** servicios a internet **si no hace falta**.
- **Usar versiones cifradas:** **SSH** en vez de Telnet; **HTTPS**; **SFTP**.
- **Escritorio remoto (RDP):** **no exponerlo** a internet directamente; usar **VPN** y **MFA**.
- **Ejecutar** servicios con **usuarios sin privilegios**.

---

## 5. Red

- **Firewall** activado y **reglas** de **denegación por defecto**.
- **Router:** clave de administración **cambiada**, **administración remota desactivada**, **WPS desactivado**, **Wi-Fi con WPA2/WPA3** y clave larga, **firmware actualizado**.
- **Red de invitados** separada para visitas y dispositivos **poco confiables** (domótica, cámaras).
- **Segmentación:** **separar** equipos importantes de los de menor confianza (VLAN).
- **VPN** para conectarse **desde redes públicas**.
- **DNS** confiable.
- **Evitar redes Wi-Fi abiertas** para tareas sensibles.

---

## 6. Datos

- **Cifrado de disco** (BitLocker, FileVault, LUKS): si se **pierde o roba** el equipo, **los datos siguen protegidos**.
- **Copias de seguridad:** regla **3-2-1**: **3** copias, en **2** tipos de soporte distintos, **1** fuera del lugar (o desconectada). **Probar la restauración.**
- **Borrado seguro** al desechar o vender equipos.
- **Minimizar** los datos que se guardan.
- **Bloqueo de pantalla** automático y **con clave**.

---

## 7. Protección contra malware

- **Antivirus / antimalware** activo y **actualizado** (el de **Windows** es suficiente para muchos usos).
- **No ejecutar** archivos de **origen desconocido**; **desconfiar** de adjuntos y enlaces.
- **No usar** macros de documentos recibidos.
- **Navegador** actualizado, con **pocas extensiones** (y de fuentes confiables).
- **Pendrives** desconocidos: **no conectarlos**.
- **Bloqueo de ejecución** desde carpetas temporales (en entornos corporativos).

---

## 8. Registros y monitoreo

- **Activar registros** (inicios de sesión, cambios, errores).
- **Revisar** periódicamente intentos fallidos y accesos extraños.
- **Alertas** ante eventos importantes.
- **Guardar** los registros en un lugar **protegido**.
- **Sincronizar la hora** (NTP): imprescindible para **correlacionar** eventos.

---

## 9. Guías y listas de verificación

Existen **guías de configuración segura**, como las de **CIS Benchmarks**, con **recomendaciones paso a paso** por sistema. Una **lista de verificación** (*checklist*) asegura que **no se olvide nada** y permite **auditar** y **repetir**: se **documenta** qué se cambió y por qué. **Automatizar** la configuración (**infraestructura como código**) evita **diferencias** entre equipos.

---

## 10. Equilibrio

**Más seguridad** suele significar **menos comodidad**. Hay que **balancear**: una medida **tan molesta que la gente la evade** (claves pegadas en el monitor) **vuelve el sistema menos seguro**. **Explicar el motivo** de las medidas y **elegir las que mejor protejan con menor fricción**.

**Probar los cambios** antes de aplicarlos: un hardening mal hecho puede **dejar el sistema inusable**.
