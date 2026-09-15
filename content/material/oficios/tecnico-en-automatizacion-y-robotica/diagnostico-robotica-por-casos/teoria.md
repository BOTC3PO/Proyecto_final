# Oficios — Técnico en Automatización y Robótica — Diagnóstico de robot por casos (teoria)

> Tema del MAPA: `OF16.diagnostico-robotica-por-casos` (`troncos.md`).
> Depende de `../seguridad-y-comunicaciones-robotica/` (ver
> `../dependencias.md`). Cierre del oficio: acá se concentra la
> evaluación (`cuestionario.md`), a diferencia de las lecciones
> anteriores, que son informativas.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Por qué el diagnóstico de un robot es multivariable

Un robot combina mecánica, electricidad, electrónica, sensores y
software en un mismo sistema —igual que en `Técnico Electromecánico`
(`OF11`), un mismo síntoma final puede originarse en capas muy
distintas, y varias causas pueden combinarse a la vez. Diagnosticar
bien implica revisar sistemáticamente cada capa (mecánica, eléctrica,
sensores, software) en vez de asumir de entrada dónde está el
problema.

## Caso 1: el brazo no llega a la posición correcta

Cuando un brazo robótico se mueve pero el efector final termina en un
lugar distinto del calculado, las hipótesis principales son: un
**error de calibración** (los ángulos reales de las articulaciones no
coinciden con los que el sistema cree que tienen, por ejemplo por un
encoder mal calibrado), un **error en la cinemática inversa aplicada**
(el cálculo de ángulos necesarios para esa posición fue incorrecto) o
un **problema mecánico** (holgura en una articulación, ya vista como
concepto en Montador de Estructuras y Técnico Electromecánico). Una
primera verificación simple —mover el brazo a una posición conocida y
comparar el ángulo real (leído del encoder) contra el ángulo esperado—
distingue rápidamente entre un problema de calibración/mecánico
(el ángulo real no coincide) y un problema de cálculo de cinemática
inversa (el ángulo real coincide con lo pedido, pero la posición
resultante del efector final no es la deseada).

## Caso 2: el robot no detecta un obstáculo

Cuando un robot móvil no reacciona ante un obstáculo que debería haber
detectado, las hipótesis principales son: un **sensor con falla física**
(un LIDAR sucio, un cable suelto), un **problema de comunicación**
entre el sensor y el sistema de control (el dato nunca llega, aunque
el sensor funcione) o un **problema de software** en el algoritmo que
interpreta los datos del sensor (el dato llega correctamente, pero el
sistema no lo interpreta como un obstáculo). Revisar primero si el
dato del sensor llega al sistema (por ejemplo, viendo el valor crudo
que reporta, sin pasar todavía por el algoritmo de interpretación)
separa un problema de hardware/comunicación de un problema puramente
de software.

## Caso 3: comportamiento errático o inconsistente

Cuando un robot se comporta de forma distinta en ejecuciones
aparentemente idénticas, las hipótesis principales son: una
**alimentación eléctrica inestable** (afecta más a motores y sensores
sensibles que a la lógica digital, ya visto como concepto general en
Electricista), una **interferencia o pérdida intermitente de
comunicación** entre componentes, o un **algoritmo de control mal
ajustado** que amplifica pequeñas variaciones del entorno en resultados
muy distintos. Un comportamiento errático rara vez tiene una causa
obvia a simple vista — exige revisar registros (logs) del sistema a lo
largo de varias ejecuciones para encontrar el patrón que distingue las
ejecuciones que fallan de las que no.

## El método, resumido

En los tres casos se repite la misma lógica multivariable ya usada en
`Técnico Electromecánico`: revisar sistemáticamente cada capa del
sistema (mecánica, eléctrica, sensores, comunicación, software) usando
verificaciones simples y concretas, en vez de asumir de entrada una
única causa; y recordar que varias causas pueden combinarse — un
problema de calibración y uno de comunicación no son mutuamente
excluyentes.
