# Redes — Switches (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../subredes/`, `../../../informatica/tcp-ip-capas-enrutamiento/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/redes/switches/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué hace un switch

Un **switch** (conmutador) conecta equipos **dentro de una misma red local** (LAN) y reenvía las tramas (**Ethernet, capa 2**) **solo al puerto de destino**. Un **hub** (concentrador, antiguo) repetía todo a todos los puertos.

Cada tarjeta de red tiene una dirección **MAC** (48 bits, por ejemplo `3C:52:82:AB:12:09`) que identifica a la interfaz en la red local. El switch trabaja con MAC, no con direcciones IP.

---

## 2. Tabla de direcciones MAC

El switch aprende:

1. Cuando llega una trama, **anota** en qué puerto vio la MAC de **origen**.
2. Para reenviar, mira la MAC de **destino** en su tabla:
   - si la conoce → la manda **solo por ese puerto** (*unicast*);
   - si no la conoce → la manda por **todos los puertos menos por donde llegó** (*inundación* o *flooding*) hasta aprender.
3. Las difusiones (*broadcast*, destino `FF:FF:FF:FF:FF:FF`) se envían a todos los puertos.

Las entradas **caducan** si no se las vuelve a ver (por ejemplo, tras 300 segundos).

---

## 3. Dominios

- **Dominio de colisión:** un hub forma uno solo; cada puerto de un switch forma uno propio (con *full duplex*, prácticamente no hay colisiones).
- **Dominio de difusión (broadcast):** un switch **no** separa los broadcasts: todos los puertos de un switch (sin VLAN) están en el **mismo** dominio. Un **router** (o las VLAN) separa los dominios de difusión.

---

## 4. Tipos

| Tipo | Características |
|:--|:--|
| **No administrable** | no se configura; ideal para el hogar o uso básico |
| **Administrable** | se configura: VLAN, velocidad, seguridad, monitoreo |
| **PoE** | además de datos entrega **alimentación eléctrica** por el cable (cámaras IP, teléfonos IP, puntos de acceso) |
| **Capa 3** | además de conmutar, puede enrutar entre VLAN |

---

## 5. Bucles y STP

Si se conectan switches formando un **anillo**, las difusiones circulan para siempre y colapsan la red (*tormenta de difusión*). El protocolo **STP** (*Spanning Tree Protocol*) detecta los bucles y **bloquea** algunos enlaces redundantes (los reactiva si otro cae).

---

## 6. Cableado básico

- **Cable de red** (par trenzado, categorías 5e, 6): conectores **RJ45**; hasta **100 m** por tramo.
- **Fibra óptica:** mayores distancias y velocidades, inmune a interferencias eléctricas.
- **Velocidades** comunes: 100 Mbps, 1 Gbps, 10 Gbps; cada extremo negocia la mejor posible.
- Los switches actuales detectan el tipo de cable (**auto-MDIX**) y no hace falta usar un cable cruzado.
