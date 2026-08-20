# Informática — TCP/IP: capas y enrutamiento (teoría)

> Tema del MAPA: `informatica/tcp-ip-capas-enrutamiento`. Depende de modelo tcp ip (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Explicación de las capas del modelo TCP/IP y su papel en el enrutamiento de datos.

---

## 1. Las cuatro capas del modelo TCP/IP

El modelo TCP/IP está compuesto por cuatro capas que trabajan juntas para garantizar la comunicación entre dispositivos en una red. Desde la más alta (más cercana al usuario) hasta la más baja (más cercana al hardware), estas son: **Aplicación**, **Transporte**, **Internet** y **Acceso a la red**. Cada capa tiene una función específica, pero operan de forma independiente sin conocer el contenido de las capas superiores o inferiores.

La capa de **Aplicación** se encarga del intercambio directo de datos entre aplicaciones (como un navegador y un servidor web). La capa de **Transporte** asegura que los datos lleguen completos al destino, usando protocolos como TCP o UDP. La capa de **Internet** es la responsable del enrutamiento de paquetes a través de la red, asignando direcciones lógicas (IP) y determinando la ruta óptima para cada mensaje. Finalmente, la capa de **Acceso a la red** convierte los datos en señales físicas compatibles con el medio de transmisión (cable, fibra, inalámbrico).

## 2. La capa de Internet y su rol en el enrutamiento

La capa de **Internet**, también llamada **capa de red**, es la encargada del **enrutamiento** de los datos. Cuando un dispositivo envía información a otro, esta se divide en pequeños bloques llamados **paquetes**, cada uno con una dirección IP de origen y destino. La capa de Internet analiza estas direcciones para decidir qué ruta tomar dentro de la red, usando protocolos como IPv4 o IPv6.

Este proceso no depende del contenido de los datos, sino únicamente de las direcciones lógicas asignadas a cada dispositivo. Por ejemplo, si un paquete debe ir desde Argentina hasta España, la capa de Internet determinará qué routers intermediarios usar para que el mensaje llegue eficientemente al destino final.

## 3. Encapsulamiento: cómo viajan los datos entre capas

Cuando un dato se envía por una red, pasa por cada capa del modelo TCP/IP en orden descendente (de arriba hacia abajo), y en cada paso se le agrega información adicional para que pueda ser procesado correctamente. Este proceso se llama **encapsulamiento**.

En la capa de **Transporte**, los datos se convierten en un **segmento** (si se usa TCP) o un **datagrama de transporte** (si se usa UDP). Luego, al llegar a la capa de **Internet**, este segmento se encapsula dentro de un **paquete IP**, que incluye información como la dirección de destino y el tamaño del paquete. Finalmente, en la capa de **Acceso a la red**, el paquete se transforma en una **trama** o **frame**, adaptándose al medio físico por donde viajará (como Ethernet o Wi-Fi).

[IMAGEN: Diagrama que muestra el proceso de encapsulamiento desde la capa de Aplicación hasta la capa de Acceso a la red.]

## 4. La importancia del orden de las capas

El orden de las capas en el modelo TCP/IP es fundamental para que la comunicación funcione correctamente. Si un dispositivo envía un mensaje desde la capa de **Aplicación**, este debe pasar por **Transporte** (para dividir los datos), luego por **Internet** (para asignar direcciones y rutas) y finalmente por **Acceso a la red** (para adaptarlo al medio físico). Al llegar al dispositivo receptor, el proceso se invierte: desde la capa más baja hasta la más alta.

Este orden jerárquico asegura que cada capa solo se ocupe de su tarea específica sin interferir con las funciones de otras. Por ejemplo, un firewall puede bloquear tráfico en la capa de Internet sin afectar cómo las aplicaciones envían datos a través de la red.

## N. Conexión con lo que sigue

Este tema es clave para entender el funcionamiento del **enrutamiento dinámico**, abordado en enrutamiento dinamico, donde se explicará cómo los routers deciden las rutas óptimas en tiempo real.