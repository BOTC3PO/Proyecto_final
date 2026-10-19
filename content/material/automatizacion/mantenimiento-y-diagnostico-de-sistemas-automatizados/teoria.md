# Automatizacion — Mantenimiento y diagnóstico de sistemas automatizados (teoría)

> Tema del MAPA: `automatizacion/mantenimiento-y-diagnostico-de-sistemas-automatizados`. Depende de `instrumentacion-industrial-y-lazos-4-20-ma/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Tipos de mantenimiento, indicadores de confiabilidad y cómo se diagnostica un lazo o un PLC.

---

## 1. Tipos de mantenimiento

El mantenimiento busca que los equipos funcionen cuando se los necesita. Se distinguen cuatro enfoques:

- **Correctivo**: se actúa cuando la falla ya ocurrió. Es lo más caro y lo menos previsible, porque la parada llega sin aviso.
- **Preventivo**: se interviene según un calendario o por horas de uso, aunque el equipo parezca estar bien: lubricar, cambiar filtros, ajustar conexiones, reemplazar piezas de desgaste.
- **Predictivo**: se mide el estado del equipo (vibraciones, temperatura, corriente, análisis de aceite, termografía) para intervenir cuando los datos muestran que la falla se acerca.
- **Proactivo**: busca eliminar las causas de raíz de las fallas, por ejemplo corrigiendo una mala alineación o un diseño que recalienta.

Lo habitual es combinarlos: preventivo y predictivo para lo crítico, correctivo para lo que no justifica otra cosa.

## 2. Indicadores de confiabilidad

Dos tiempos describen la historia de un equipo reparable:

- **MTBF** (tiempo medio entre fallas): cuánto funciona en promedio entre una falla y la siguiente.
- **MTTR** (tiempo medio de reparación): cuánto tarda en promedio en volver a funcionar después de fallar.

La **disponibilidad** se calcula como MTBF / (MTBF + MTTR). Aumenta si las fallas son menos frecuentes (más MTBF) o si se reparan más rápido (menos MTTR). Un equipo muy confiable pero difícil de reparar puede tener peor disponibilidad que uno menos confiable pero fácil de arreglar.

## 3. Diagnóstico de un lazo de control

Cuando un lazo no funciona bien, conviene revisarlo en orden desde la señal, y no cambiar parámetros al azar:

1. **Observar** el síntoma: ¿oscila?, ¿no llega al valor?, ¿está clavado?, ¿empezó de golpe o fue gradual?
2. **Verificar la medición**: ¿el sensor indica un valor creíble?, ¿coincide con un patrón o con otra medición? En un lazo de 4-20 mA, medir la corriente con un multímetro en serie. Una lectura por debajo de 4 mA o cercana a 0 sugiere cable cortado o instrumento sin alimentación. Muchos transmisores usan valores por debajo de 3,6 mA o por encima de 21 mA para señalar una falla propia.
3. **Revisar el actuador**: ¿la válvula o el variador responden a la orden?, ¿están trabados, saturados o con holgura?
4. **Revisar el controlador**: modo (manual o automático), valor deseado, parámetros y límites de salida.
5. **Recién entonces** pensar en la sintonía.

Muchos problemas atribuidos al control son en realidad del instrumento o del actuador.

## 4. Diagnóstico de un PLC

Cuando una máquina para, se parte de las indicaciones del propio PLC: luces de estado (marcha, error, batería), los códigos de falla y la información de diagnóstico del programa. Una buena práctica es ver en línea el estado de las entradas y salidas: si el sensor está activo y la entrada del PLC no lo refleja, el problema está en el cableado o en la entrada; si la entrada está bien y la salida no responde, hay que revisar el programa o la salida. Se sigue la cadena entre causa y efecto: sensor, cable, módulo de entrada, programa, módulo de salida, actuador.

Las alarmas bien configuradas ayudan: un mensaje que dice qué condición no se cumple vale más que una luz roja genérica.

## 5. Registros e historial

Un buen mantenimiento deja registro: qué falló, cuándo, por qué y cómo se arregló. Con ese historial se detectan fallas repetidas, se ajustan los intervalos preventivos y se justifican mejoras. También se guardan los respaldos de los programas del PLC y de los parámetros de variadores y controladores, de modo que un equipo reemplazado se pueda configurar en minutos.

## 6. Seguridad en la intervención

Antes de tocar un equipo se aplica el bloqueo y etiquetado, se verifica la ausencia de energía y se usan las protecciones personales adecuadas. Algunos diagnósticos exigen medir con el equipo energizado: solo deben hacerlos personas capacitadas, con instrumentos adecuados y siguiendo los procedimientos.
