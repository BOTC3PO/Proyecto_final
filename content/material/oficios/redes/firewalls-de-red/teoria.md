# Redes — Firewalls de red (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../nat/`, `../../../informatica/seguridad-de-red-firewall-vpn-cifrado/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/redes/firewalls-de-red/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es un firewall

Un **firewall** (cortafuegos) es un dispositivo o programa que **permite o bloquea el tráfico** según **reglas**. Se coloca entre redes de distinta confianza (por ejemplo, internet y la red interna) o entre zonas internas.

Puede ser un **aparato** dedicado, una función del router, un servicio en un servidor o el **firewall del sistema operativo** (Windows Defender Firewall, `ufw`/`nftables` en Linux).

---

## 2. Tipos

| Tipo | Qué mira |
|:--|:--|
| **De filtrado de paquetes** (sin estado) | cabeceras: IP origen/destino, protocolo, puerto; cada paquete por separado |
| **Con estado** (*stateful*) | además recuerda las **conexiones**: deja pasar las **respuestas** a lo que se inició desde adentro |
| **De aplicación / proxy** | entiende el protocolo (HTTP, DNS) y puede filtrar por contenido |
| **De nueva generación (NGFW)** | combina todo: identifica aplicaciones, usuarios, amenazas |

---

## 3. Reglas

Una regla dice: **origen, destino, protocolo/puerto, acción** (permitir o denegar). El firewall evalúa las reglas **en orden** y aplica **la primera que coincide**.

```
1) Permitir  LAN       → internet     (web 80/443, DNS 53)
2) Permitir  internet  → servidor web puerto 443
3) Denegar   todo lo demás
```

- **Denegación por defecto:** "lo que no está permitido explícitamente, está prohibido". Es la política más segura.
- **Mínimo privilegio:** permitir solo lo necesario.
- **El orden importa:** una regla general antes de una específica puede anularla.
- **Registrar** (log) los bloqueos para poder analizarlos.

---

## 4. Puertos conocidos

| Puerto | Servicio |
|:--|:--|
| 22 | SSH (acceso remoto seguro) |
| 53 | DNS |
| 80 | HTTP (web) |
| 443 | HTTPS (web cifrada) |
| 3389 | Escritorio remoto (RDP) |
| 25, 587 | Correo saliente |

---

## 5. DMZ y zonas

Una **DMZ** (zona desmilitarizada) es una red intermedia donde se ponen los **servidores que reciben conexiones de internet** (web, correo). Si alguno es comprometido, el atacante **no queda dentro** de la red interna: el firewall limita lo que la DMZ puede alcanzar. Es un ejemplo de **segmentación**.

---

## 6. Límites

- Un firewall **no reemplaza** otras medidas: actualizaciones, claves fuertes, copias de seguridad, antivirus.
- No ve **dentro del tráfico cifrado** (salvo inspección especial).
- Una regla mal puesta puede **cortar un servicio** o dejar un hueco.
- Hay que **revisar y documentar** las reglas: las reglas viejas sobran y se olvidan.
