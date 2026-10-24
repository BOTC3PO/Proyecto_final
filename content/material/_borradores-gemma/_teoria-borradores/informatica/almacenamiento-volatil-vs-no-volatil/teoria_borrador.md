# Informática — Almacenamiento volátil vs no volátil (teoría)

> Tema del MAPA: `almacenamiento_volatil_vs_no_volatil`. Depende de: a determinar (ver dependencias.md).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Diferencia entre tipos de almacenamiento según su capacidad para retener datos sin energía.

---

## 1. ¿Qué es la volatilidad en el contexto del almacenamiento?

La volatilidad define si un dispositivo puede mantener información guardada incluso cuando no recibe energía eléctrica. Por ejemplo, la **memoria RAM** es volátil: al apagar la computadora, los datos que contenía se borran inmediatamente. Esto ocurre porque su funcionamiento depende del flujo constante de corriente para mantener activos los circuitos integrados.

En contraste, un **disco duro (HDD)** o una **unidad de estado sólido (SSD)** son no volátiles: incluso sin energía, conservan la información almacenada. Esta diferencia es clave en el diseño de sistemas, ya que determina qué datos se guardan a largo plazo y cuáles solo se usan temporalmente durante la ejecución de programas.

---

## 2. Ejemplos comunes de almacenamiento volátil

Los dispositivos volátiles suelen ser rápidos pero temporales. La **RAM (Memoria de Acceso Aleatorio)** es el ejemplo más conocido: permite que los procesadores accedan a datos en milisegundos, pero solo mientras la computadora está encendida. Otro caso es la **memoria caché**, usada por procesadores y tarjetas gráficas para acelerar tareas complejas, pero que también pierde su contenido al apagarse.

Estos componentes son ideales para operaciones en tiempo real, como ejecutar programas o gestionar datos dinámicos. Sin embargo, no reemplazan a los dispositivos no volátiles, ya que no son aptos para almacenar información permanente.

---

## 3. Características del almacenamiento no volátil

Los sistemas no volátiles garantizan la persistencia de datos independientemente de la energía. Un **disco duro tradicional (HDD)** almacena información en platos magnéticos, mientras que una **SSD** usa chips de memoria flash, ambos capaces de retener datos sin necesidad de electricidad constante.

Además de discos y pendrives, otros ejemplos incluyen la **ROM (Memoria de Solo Lectura)**, usada en dispositivos como consolas o computadoras para almacenar firmware. Aunque la ROM no se modifica fácilmente, su contenido permanece incluso tras múltiples apagados.

Este tipo de almacenamiento es esencial para guardar archivos, sistemas operativos y configuraciones que necesitan persistir a largo plazo.

---

## 4. ¿Por qué importa esta distinción?

La elección entre almacenamiento volátil o no volátil afecta el rendimiento y la funcionalidad de los dispositivos. Por ejemplo, un sistema operativo se carga desde un disco no volátil (como una SSD) hacia la RAM (volátil), donde se ejecuta rápidamente. Si fallara la RAM, el sistema colapsaría; si fallara el disco, perdería todos sus datos.

En aplicaciones como servidores o bases de datos, esta diferenciación es crítica: los datos críticos deben almacenarse en medios no volátiles para evitar pérdida en caso de corte de energía. Por otro lado, la RAM permite operaciones complejas sin demoras causadas por el acceso a discos.

---

## 5. Conexión con lo que sigue

Para entender cómo interactúan estos tipos de memoria en un sistema completo, es fundamental revisar cómo se integran con componentes como el **procesador** y los **periféricos**, tema desarrollado en `../componentes_hardware/`.