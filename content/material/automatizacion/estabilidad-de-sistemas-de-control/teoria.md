# Automatizacion — Estabilidad de sistemas de control (teoría)

> Tema del MAPA: `automatizacion/estabilidad-de-sistemas-de-control`. Depende de `respuesta-transitoria-y-regimen-permanente/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Qué significa que un lazo sea estable, cómo se relaciona con los polos y cómo se verifica a nivel introductorio.

---

## 1. Qué significa que un sistema sea estable

Un sistema es **estable** si, después de una perturbación o de un cambio de referencia, termina asentándose en un valor. Es **inestable** si la salida crece sin límite o oscila cada vez más. Un control inestable es peor que no tener control: una calefacción que se dispara, un brazo robótico que vibra cada vez más fuerte, un tanque que se desborda y se vacía alternativamente.

La estabilidad es la primera condición de cualquier diseño. Un sistema puede ser muy rápido y preciso, pero si no es estable no sirve.

## 2. Estable, marginalmente estable e inestable

Hay tres comportamientos típicos ante un pequeño empujón:

- **Estable**: la salida vuelve al equilibrio, ya sea de a poco o con oscilaciones que se apagan.
- **Marginalmente estable**: oscila con amplitud constante, sin apagarse ni crecer. Es un límite delicado.
- **Inestable**: la salida se aleja cada vez más del equilibrio, con oscilaciones crecientes o sin ellas.

Un ejemplo familiar es el micrófono que se acerca demasiado al parlante: un pequeño ruido se amplifica, vuelve al micrófono y se amplifica otra vez hasta el chillido. Es realimentación positiva con ganancia mayor que uno.

## 3. Polos: dónde mirar

En el análisis de sistemas lineales, la respuesta natural se descompone en términos exponenciales cuyo comportamiento lo fija un conjunto de números llamados **polos**. Cada polo es un número, real o complejo. No hace falta calcular la teoría completa para quedarse con la regla:

- Si todos los polos tienen **parte real negativa**, el sistema es estable: cada término se apaga con el tiempo.
- Si algún polo tiene **parte real positiva**, el sistema es inestable: ese término crece.
- Si hay polos con **parte real cero** (y ninguno positivo), el sistema está en el límite: oscila sin apagarse.

Los polos reales dan exponenciales sin oscilar. Los polos complejos aparecen en pares y producen oscilaciones; cuanto más cerca del eje vertical (parte real cercana a cero), más lento se apagan; cuanto más lejos del eje hacia la izquierda, más rápido.

## 4. Cómo afecta la ganancia

En un lazo con realimentación, subir la ganancia del controlador suele empujar los polos hacia la inestabilidad. Con ganancias bajas el sistema es estable pero lento; al aumentarla se vuelve más rápido y oscilante, y a partir de cierto valor, el **valor crítico**, deja de ser estable. Por eso un control demasiado agresivo termina oscilando o disparándose, y por eso los métodos de sintonía buscan acercarse a ese límite sin pasarlo.

Los retardos puros (por ejemplo el tiempo que tarda el agua en recorrer una cañería hasta el sensor) empeoran la estabilidad, porque el controlador corrige con información vieja.

## 5. Criterio de Routh, a nivel introductorio

Calcular los polos de sistemas de orden alto es trabajoso. El **criterio de Routh-Hurwitz** permite saber cuántos polos tienen parte real positiva sin calcularlos, trabajando solo con los coeficientes del polinomio característico. Una condición necesaria que se verifica de entrada: para que el sistema sea estable, todos los coeficientes del polinomio deben existir y tener el mismo signo. Si falta alguno o hay signos distintos, el sistema ya no es estable. Con el arreglo de Routh se completa la verificación: el sistema es estable si todos los elementos de la primera columna tienen el mismo signo.

Para un polinomio de segundo orden a·s² + b·s + c, la condición es simple: los tres coeficientes tienen que tener el mismo signo.

## 6. Qué se hace en la práctica

Se verifica la estabilidad con el modelo, se deja un **margen de seguridad** respecto del límite (porque el modelo no es exacto y la planta cambia con el uso) y se prueba en la planta con cuidado, aumentando la ganancia de a poco. Un sistema que apenas es estable es un sistema peligroso.
