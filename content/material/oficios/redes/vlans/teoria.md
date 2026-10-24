# Redes — VLAN (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../switches/`, `../subredes/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/redes/vlans/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es una VLAN

Una **VLAN** (*Virtual LAN*) divide **un mismo switch físico en varias redes lógicas separadas**. Los equipos de una VLAN **no ven** el tráfico (ni los broadcasts) de otra, aunque estén conectados al mismo aparato. Cada VLAN tiene un número (**VLAN ID**, de 1 a 4094) y, normalmente, **su propia subred** IP.

**Para qué:**

- **Separar** áreas: administración, docentes, alumnos, invitados, cámaras, servidores.
- **Reducir** el tráfico de difusión.
- **Seguridad:** limitar quién puede hablar con qué.
- **Flexibilidad:** agrupar por función y no por ubicación física.

---

## 2. Tipos de puerto

| Puerto | Qué hace |
|:--|:--|
| **De acceso** (*access*) | pertenece a **una sola VLAN**; se conecta un equipo final (PC, impresora). Las tramas salen **sin etiqueta**. |
| **Troncal** (*trunk*) | lleva **varias VLAN** por un mismo cable (entre switches o hacia un router); cada trama lleva una **etiqueta 802.1Q** con el ID de VLAN. |

La **VLAN nativa** de un troncal es la que viaja **sin etiqueta**; por seguridad conviene que sea una VLAN sin usar.

---

## 3. Comunicarse entre VLAN

Dos VLAN son **redes distintas**: para pasar de una a otra hace falta un dispositivo de **capa 3**:

- un **router** (con una interfaz por VLAN, o una sola interfaz troncal con subinterfaces, *router on a stick*);
- o un **switch de capa 3** (con interfaces virtuales por VLAN, SVI).

Las **reglas de filtrado** (ACL o firewall) en ese punto deciden qué tráfico puede pasar entre VLAN (por ejemplo, los invitados solo a internet y no a los servidores).

---

## 4. Ejemplo

| VLAN | Uso | Subred |
|:--|:--|:--|
| 10 | Administración | 192.168.10.0/24 |
| 20 | Docentes | 192.168.20.0/24 |
| 30 | Alumnos | 192.168.30.0/24 |
| 99 | Invitados | 192.168.99.0/24 |

Puertos 1–8 en VLAN 10, 9–16 en VLAN 20, y el puerto 24 como **troncal** hacia el router.

---

## 5. Cuidados

- Un puerto en la **VLAN equivocada** da "no tengo red" o acceso indebido: es la falla más común.
- Los troncales deben **permitir** las VLAN necesarias (si no, esa VLAN no pasa entre switches).
- Dos subredes **no** pueden coincidir en dos VLAN distintas.
- Las VLAN **no son cifrado**: separan lógicamente, pero no protegen de un equipo mal configurado ni de un ataque en el propio tramo.
