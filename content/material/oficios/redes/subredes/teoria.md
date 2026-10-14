# Redes — Subredes (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../../informatica/direccionamiento-ip-dns/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/redes/subredes/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Dirección y máscara

Una dirección IPv4 tiene **32 bits**, escritos en 4 bytes (`192.168.1.10`). Se divide en dos partes: la **red** (a qué red pertenece) y el **host** (cuál dispositivo dentro de esa red). La **máscara de subred** indica dónde se corta:

| Máscara | Notación CIDR | Bits de red | Bits de host |
|:--|:--|:--|:--|
| 255.255.255.0 | /24 | 24 | 8 |
| 255.255.255.128 | /25 | 25 | 7 |
| 255.255.255.192 | /26 | 26 | 6 |
| 255.255.255.224 | /27 | 27 | 5 |
| 255.255.255.240 | /28 | 28 | 4 |
| 255.255.0.0 | /16 | 16 | 16 |

`/24` significa "los primeros 24 bits son la red". Dos dispositivos están en la **misma red** si, aplicando la máscara, obtienen la misma dirección de red.

---

## 2. Cuántos equipos entran

Con `h` bits de host hay `2^h` direcciones, pero **dos no se pueden asignar**: la primera (**dirección de red**) y la última (**dirección de difusión o broadcast**). Los equipos útiles son **2^h − 2**.

| Prefijo | Direcciones | Equipos útiles |
|:--|:--|:--|
| /24 | 256 | 254 |
| /25 | 128 | 126 |
| /26 | 64 | 62 |
| /27 | 32 | 30 |
| /28 | 16 | 14 |
| /30 | 4 | 2 (enlaces punto a punto) |

---

## 3. Dividir una red (subnetting)

**Subnetting** es tomar bits del host para usarlos como bits de red y partir una red en **varias más chicas**. Cada bit prestado **duplica** la cantidad de subredes y **reduce a la mitad** los equipos de cada una.

Ejemplo: `192.168.1.0/24` en 4 subredes (se prestan 2 bits → `/26`, de 64 direcciones):

| Subred | Rango de direcciones | Equipos útiles | Broadcast |
|:--|:--|:--|:--|
| 192.168.1.0/26 | .0 – .63 | .1 – .62 | .63 |
| 192.168.1.64/26 | .64 – .127 | .65 – .126 | .127 |
| 192.168.1.128/26 | .128 – .191 | .129 – .190 | .191 |
| 192.168.1.192/26 | .192 – .255 | .193 – .254 | .255 |

Cada bloque empieza en un múltiplo del tamaño (64): 0, 64, 128, 192.

---

## 4. Direcciones privadas

Rangos reservados para redes internas (no se enrutan en internet; para salir se usa NAT, ver `../nat/`):

- `10.0.0.0/8`
- `172.16.0.0/12` (172.16.0.0 – 172.31.255.255)
- `192.168.0.0/16`

Además: `127.0.0.1` (la propia máquina, *loopback*) y `169.254.x.x` (autoasignada cuando falla el DHCP).

---

## 5. Para qué se subdivide

- **Reducir el tráfico de difusión** (broadcast) de cada red.
- **Separar** áreas (administración, invitados, servidores, cámaras) y **aplicar reglas** entre ellas.
- **Ordenar** el plan de direcciones y ahorrar direcciones.

Para que equipos de **subredes distintas** se comuniquen hace falta un **router** (`../routers/`). La **puerta de enlace** (*gateway*) es la dirección del router dentro de cada subred.
