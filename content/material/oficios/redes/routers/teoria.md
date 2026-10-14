# Redes — Routers (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../switches/`, `../../informatica/tcp-ip-capas-enrutamiento/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/redes/routers/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué hace un router

Un **router** conecta **redes distintas** y decide **por dónde enviar los paquetes IP** (**capa 3**). Cada interfaz del router tiene una dirección IP en una red distinta; esa dirección es la **puerta de enlace (gateway)** de los equipos de esa red.

El router **no reenvía los broadcasts**, así que separa los dominios de difusión.

En una casa, el "router" del proveedor suele ser **varios aparatos en uno**: router, switch de 4 puertos, punto de acceso Wi-Fi, servidor DHCP, NAT y firewall básico.

---

## 2. Tabla de enrutamiento

Una lista de **rutas**: *"para llegar a la red X, enviar por la interfaz Y o al siguiente salto Z"*.

| Destino | Siguiente salto | Interfaz |
|:--|:--|:--|
| 192.168.1.0/24 | conectada directamente | LAN |
| 192.168.2.0/24 | 10.0.0.2 | WAN |
| 0.0.0.0/0 | 200.45.12.1 | WAN |

- **Redes conectadas:** el router las conoce por sus propias interfaces.
- **Rutas estáticas:** las escribe el administrador.
- **Rutas dinámicas:** se aprenden con protocolos (como OSPF o BGP).
- **Ruta por defecto** (`0.0.0.0/0`): "todo lo que no sé adónde va, mandalo por acá" (normalmente hacia el proveedor de internet).

Si hay varias rutas posibles, se elige la **más específica** (el prefijo más largo): `/24` gana a `/16` para una dirección que entra en ambas.

---

## 3. Cómo viaja un paquete

1. El equipo comprueba si el destino está en **su misma red**. Si es así, lo envía directo (por switch).
2. Si no, lo envía **al gateway** (MAC del router).
3. El router mira la **IP de destino**, busca en su tabla, **reduce el TTL en 1** y lo manda al siguiente salto con nuevas MAC. La IP de origen y destino **no cambian** (salvo NAT); las MAC **sí cambian en cada salto**.
4. Si el TTL llega a 0, el paquete se descarta (evita bucles) y se avisa con un mensaje ICMP.

`traceroute` (en Windows `tracert`) muestra la lista de saltos.

---

## 4. DHCP, DNS y la configuración de un equipo

Para funcionar en una red, un equipo necesita: **IP**, **máscara**, **gateway** y **DNS**. El router del hogar suele dar todo por **DHCP**. Puede darse una IP **fija** (estática) a servidores e impresoras, por fuera del rango que reparte el DHCP, para no repetir direcciones.

---

## 5. Seguridad básica del router

- **Cambiar** la contraseña de administración de fábrica.
- **Actualizar** el firmware.
- **Desactivar** WPS y la administración remota si no hace falta.
- Usar **WPA2 o WPA3** en el Wi-Fi (no WEP ni redes abiertas) con clave larga.
- Una **red de invitados** separada para visitas y dispositivos poco confiables.
