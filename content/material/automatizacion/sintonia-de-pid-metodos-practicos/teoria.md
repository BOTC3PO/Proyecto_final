# Automatizacion — Sintonía de PID: métodos prácticos (teoría)

> Tema del MAPA: `automatizacion/sintonia-de-pid-metodos-practicos`. Depende de `control-pid-proporcional-integral-derivativo/` y `respuesta-transitoria-y-regimen-permanente/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo ajustar un PID por prueba y error y con las reglas de Ziegler-Nichols, y qué es el windup.

---

## 1. El problema de sintonizar

Un controlador PID tiene tres parámetros: la ganancia proporcional (Kp), el tiempo integral (Ti) y el tiempo derivativo (Td). Sintonizar es elegir esos valores para que el lazo responda bien: rápido, sin oscilar de más y sin error en régimen. No hay un valor universal: dependen del proceso. Un mismo PID con parámetros buenos para un horno sería desastroso en un tanque.

## 2. Qué hace cada parámetro

- **Kp** reacciona al error presente. Subirla acelera la respuesta pero aumenta el sobreimpulso y, si se exagera, causa oscilaciones.
- **Ti** (tiempo integral) fija cuán rápido actúa la integral para eliminar el error residual. Un Ti chico es una integral fuerte: corrige rápido pero puede oscilar. Un Ti grande es una integral suave.
- **Td** (tiempo derivativo) anticipa la tendencia del error. Frena los cambios bruscos y amortigua, pero amplifica el ruido de la medición, por lo que se usa con cuidado o se omite.

## 3. Sintonía por prueba y error

Es el método más común en planta. Se empieza solo con acción proporcional y se sigue un orden:

1. Con Ti infinito y Td en cero, se sube Kp hasta que la respuesta sea rápida pero con algo de sobreimpulso.
2. Se agrega la integral, bajando Ti de a poco hasta que el error residual se elimine en un tiempo razonable.
3. Si hay sobreimpulso o oscilaciones lentas, se baja un poco Kp. Si el ruido lo permite, se agrega derivativa para amortiguar.
4. Se prueba con un cambio de referencia y con una perturbación, se observa la gráfica y se vuelve a ajustar.

El inconveniente es el tiempo: en procesos lentos cada prueba puede llevar horas, y probar en una planta real tiene riesgos.

## 4. Método de Ziegler-Nichols de lazo cerrado

Propuesto por John Ziegler y Nathaniel Nichols en 1942, es una receta empírica. Se deja el controlador solo proporcional y se sube Kp hasta que la salida oscile con amplitud constante. Ese valor es la **ganancia crítica Ku**, y el período de la oscilación es el **período crítico Pu**. Con ellos, la tabla clásica da:

- Controlador P: Kp = 0,5 · Ku.
- Controlador PI: Kp = 0,45 · Ku y Ti = Pu / 1,2.
- Controlador PID: Kp = 0,6 · Ku, Ti = Pu / 2 y Td = Pu / 8.

Estos valores dan una respuesta bastante agresiva, con un sobreimpulso que a menudo ronda el 25 %, por lo que se usan como punto de partida y se afinan después. El método tiene un riesgo: llevar el lazo al borde de la inestabilidad en una planta real puede ser peligroso o inaceptable.

## 5. Método de lazo abierto o curva de reacción

Otra variante de Ziegler-Nichols no obliga a oscilar. Se pasa el controlador a manual, se da un escalón en la salida del controlador y se registra la respuesta del proceso. De la curva se leen la ganancia del proceso K, el **retardo aparente L** (tiempo hasta que empieza a responder) y la constante de tiempo τ. Para un PID, la receta da Kp = 1,2 · τ / (K · L), Ti = 2 · L y Td = 0,5 · L.

## 6. El windup de la integral

Cuando el actuador llega a su límite (válvula 100 % abierta, motor al máximo) y el error persiste, la integral sigue acumulando error aunque ya no pueda actuar. Se carga de un valor enorme. Cuando el error cambia de signo, esa integral acumulada tiene que "descargarse" y el controlador sigue empujando en el sentido equivocado durante un buen rato: eso produce un gran sobreimpulso. Es el **windup**. La defensa se llama **anti-windup**: limitar la integral o detener su acumulación mientras el actuador esté saturado. La mayoría de los controladores industriales lo traen incorporado.

## 7. Criterio práctico

Ningún método reemplaza la observación. Una sintonía es buena cuando responde a los cambios sin oscilar de más, se asienta en un tiempo aceptable y aguanta variaciones del proceso. Ante la duda, conviene una sintonía algo conservadora.
