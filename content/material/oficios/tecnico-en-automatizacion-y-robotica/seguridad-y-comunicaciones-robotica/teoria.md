# Oficios — Técnico en Automatización y Robótica — Seguridad y comunicaciones (teoria)

> Tema del MAPA: `OF16.seguridad-y-comunicaciones-robotica`
> (`troncos.md`). Depende de `../ia-y-software-robotico/` (ver
> `../dependencias.md`). Lección informativa — la evaluación del
> oficio se concentra en `diagnostico-robotica-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Seguridad en robótica industrial

Un robot industrial tradicional se mueve con fuerza y velocidad
suficientes para lastimar seriamente a una persona, y a diferencia de
una máquina simple, su movimiento puede ser difícil de anticipar desde
afuera. La seguridad en robótica industrial combina barreras físicas
(vallado perimetral, puertas con sensor que detienen el robot al
abrirse), **paradas de emergencia** accesibles, y —en el caso de los
cobots ya presentados— límites de fuerza y sensores de contacto que
permiten un trabajo compartido seguro con personas. Un error de
seguridad en robótica rara vez es sólo un defecto de programación: casi
siempre implica también una falla en una barrera física o un
procedimiento que debería haberlo evitado.

## Protocolos de comunicación en robótica

Además de los protocolos entre chips ya vistos (UART, I2C, SPI), un
sistema robótico más grande suele comunicarse a través de redes
industriales o inalámbricas —desde un simple Wi-Fi para telemetría no
crítica, hasta protocolos industriales más robustos y con tiempos de
respuesta garantizados, necesarios cuando una comunicación demorada
podría significar que el robot no reciba a tiempo una orden de
detenerse.

## Por qué seguridad y comunicaciones van juntas

Muchos incidentes reales de seguridad en robótica no se originan en un
componente mecánico roto, sino en una falla de comunicación: una señal
de parada de emergencia que no llega a tiempo, una pérdida de conexión
entre un sensor y el controlador que el sistema no detecta a tiempo.
Diseñar comunicaciones confiables es, en la práctica, una parte
central de diseñar un sistema robótico seguro, no un tema aparte.
