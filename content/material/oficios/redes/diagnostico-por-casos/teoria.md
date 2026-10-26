# Redes — Diagnóstico de redes por casos (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../firewalls-de-red/` y los temas anteriores de Redes (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/redes/diagnostico-por-casos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. El método

Se avanza **por capas, de abajo hacia arriba**, y se descarta de a una cosa:

1. **Física:** ¿hay cable conectado, luces, Wi-Fi encendido?
2. **Enlace:** ¿se conecta al switch o a la red Wi-Fi? ¿VLAN correcta?
3. **Red (IP):** ¿tiene IP, máscara y gateway? ¿llega al gateway?
4. **Nombres (DNS):** ¿resuelve nombres?
5. **Aplicación / puertos / firewall:** ¿el servicio responde en ese puerto?

---

## 2. Herramientas

| Herramienta | Para qué |
|:--|:--|
| `ipconfig /all` (Windows) / `ip a` (Linux) | ver IP, máscara, gateway y DNS |
| `ping 127.0.0.1` | ¿funciona la pila de red del propio equipo? |
| `ping <gateway>` | ¿llegamos al router? |
| `ping 8.8.8.8` | ¿llegamos a internet por IP? |
| `ping www.ejemplo.com` | ¿resuelve nombres (DNS)? |
| `tracert` / `traceroute` | ¿en qué salto se corta? |
| `nslookup` / `dig` | consultar el DNS |
| `arp -a` | tabla MAC ↔ IP local |
| `netstat -an` / `ss -tulpn` | puertos abiertos y conexiones |
| `curl -I https://sitio` | probar el servicio web |

---

## 3. Síntomas y causas

| Síntoma | Hipótesis para revisar primero |
|:--|:--|
| no hay luces ni conexión | cable, puerto o placa de red |
| IP `169.254.x.x` | no responde el DHCP |
| tiene IP pero no llega al gateway | máscara/gateway mal, VLAN equivocada, cable, filtrado |
| llega al gateway pero no a `8.8.8.8` | problema del router, del proveedor o ruta por defecto |
| llega a `8.8.8.8` pero no a un nombre | DNS mal configurado o caído |
| "algunos sitios sí y otros no" | DNS, MTU o un filtro |
| la conexión es lenta | saturación, Wi-Fi débil, un equipo que consume todo, problema del proveedor |
| dos equipos pelean "conflicto de IP" | IP fija duplicada con la del DHCP |
| el Wi-Fi cae a ratos | señal débil, interferencias, canal saturado |
| un servicio publicado no responde desde afuera | redirección de puertos, firewall, CGNAT, servicio caído |
| un equipo de otra VLAN no responde | falta de enrutamiento entre VLAN o reglas |

---

## 4. Buenas prácticas

- **Una prueba a la vez** y anotar el resultado.
- **Comparar** con un equipo que sí funciona.
- Preguntar **qué cambió** desde la última vez que funcionó.
- **Documentar** el esquema de la red (direcciones, VLAN, equipos).
- No usar `ping` como única prueba: algunos equipos bloquean el ping aunque funcionen.
