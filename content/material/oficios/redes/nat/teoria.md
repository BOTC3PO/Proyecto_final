# Redes — NAT (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../routers/`, `../subredes/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/redes/nat/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. El problema

Las direcciones IPv4 **públicas** son escasas (unos 4300 millones en total) y no alcanzan para todos los dispositivos. Las redes internas usan direcciones **privadas** (`192.168.x.x`, `10.x.x.x`, `172.16–31.x.x`), que **no se enrutan en internet**: la IP privada de tu celular no sirve fuera de tu casa.

El **NAT** (*Network Address Translation*) **traduce direcciones** en el router: cambia la IP privada de origen por la **IP pública** del router al salir, y hace el cambio inverso al volver la respuesta.

---

## 2. Cómo funciona (PAT)

La forma más común es **PAT** o *NAT con sobrecarga*: **muchos equipos comparten una IP pública**, distinguidos por el **número de puerto**.

| Dentro de la red | Después del NAT |
|:--|:--|
| 192.168.1.10:51000 → 142.250.1.1:443 | 200.45.12.5:40001 → 142.250.1.1:443 |
| 192.168.1.11:51000 → 142.250.1.1:443 | 200.45.12.5:40002 → 142.250.1.1:443 |

El router guarda una **tabla de traducciones** y, cuando vuelve la respuesta al puerto 40002, sabe que es para `192.168.1.11`.

---

## 3. Tipos

- **NAT estático** (uno a uno): una IP privada ↔ una IP pública fija.
- **NAT dinámico:** un conjunto de IP públicas asignado a pedido.
- **PAT:** muchas privadas ↔ una pública, por puertos (el del hogar).

---

## 4. Conexiones entrantes: redirección de puertos

El NAT **protege** de forma incidental: los equipos internos no son accesibles desde afuera, porque el router no sabe a quién entregar una conexión que nadie inició. Para **publicar un servicio** (un servidor web, una cámara) hace falta una regla de **redirección de puertos** (*port forwarding*): "lo que llegue al puerto 8080 de la IP pública, enviarlo a `192.168.1.50:80`".

Cuidados al abrir puertos:

- Abrir **solo** lo necesario y hacia **un** equipo.
- Ese equipo debe estar **actualizado** y con **contraseñas fuertes**.
- Un puerto abierto a internet será **escaneado por otros** en minutos.
- Alternativas más seguras: una **VPN**.

---

## 5. Límites del NAT

- **No es un firewall**: no inspecciona ni decide qué es seguro (ver `../firewalls-de-red/`).
- Complica aplicaciones que necesitan conexiones entrantes (juegos, videollamadas P2P).
- **CGNAT:** algunos proveedores comparten una misma IP pública entre **varios clientes**; en ese caso no se puede abrir puertos hacia adentro.
- **IPv6** tiene direcciones de sobra, por lo que **no necesita NAT**.

---

## 6. Cómo ver cada dirección

- La IP **privada** de tu equipo: `ipconfig` (Windows) o `ip a` (Linux).
- La IP **pública**: la que ven los sitios; se consulta en una página de "mi IP". Si difiere de la **WAN** del router, hay un doble NAT o un CGNAT.
