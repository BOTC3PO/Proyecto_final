# Oficios — Tornero — Roscado en torno (teoria)

> Tema propuesto en `../../../_plan-faltantes/oficios-a.md` (PLAN, hoy 3 menciones); sin ID en `troncos.md` todavía. Depende de `cilindrado-y-refrentado/`, `calculo-torneria/` (ver `../../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Qué es una rosca y qué la define

Una rosca es una hélice tallada sobre un cilindro exterior, que se llama rosca macho, o dentro de un agujero, rosca hembra. Se la describe con pocos datos: el diámetro nominal, el paso y el perfil. El paso es la distancia, medida en paralelo al eje, entre dos crestas consecutivas; en las roscas métricas se expresa en milímetros y en otras familias se da como cantidad de hilos por pulgada. El perfil es la forma del filete: en las roscas métricas triangulares normales, el ángulo entre flancos es de 60 grados, y la herramienta de corte tiene que ser afilada con ese mismo ángulo.

Hay muchas familias de roscas, entre ellas la métrica, la Whitworth y las de tubería. Antes de tornear una rosca hay que saber exactamente cuál se necesita, porque no son intercambiables aunque se parezcan.

## Cómo se logra el paso en un torno

En el torno paralelo el paso se obtiene sincronizando el avance del carro con el giro del husillo. Para eso el torno tiene un tornillo patrón, que se acopla al carro con una tuerca partida, y una caja de engranajes con una tabla que indica la posición de las palancas para cada paso. Al accionar la tuerca partida, el carro avanza una distancia fija, el paso, por cada vuelta del plato. Por eso mientras se está roscando no se puede soltar la tuerca partida sin perder la referencia: para volver al inicio de la pasada se retira la herramienta con el carro transversal, se retrocede el carro con la máquina o con el giro invertido, y se vuelve a entrar.

En máquinas con indicador de roscas, un pequeño dial que gira con el tornillo patrón, se sabe en qué momentos se puede cerrar la tuerca partida para que la herramienta caiga exactamente en el mismo surco. Si se cierra en otro momento, el filete se corta fuera de lugar y la rosca se arruina.

## Cómo se hace una rosca exterior paso a paso

Primero se cilindra la pieza al diámetro nominal, con una pequeña tolerancia hacia abajo, y se hace un chaflán en el extremo. Después se prepara la máquina: se elige la velocidad baja, mucho menor que la de cilindrado, y se ajusta la palanca de la caja para el paso pedido. La herramienta se ubica a la altura del centro y se la alinea con una galga de ángulo, de modo que el perfil quede perpendicular al eje.

Las pasadas son muchas y cada una saca poco material. Se hace una primera pasada de marcado, se verifica el paso con un peine de roscas, y se continúa dando una profundidad pequeña por pasada, cada vez menor. La profundidad total de un filete se calcula con una fórmula del tipo de la que se ve en `calculo-torneria/`, en función del paso. Se lubrica con fluido de corte y se retira la herramienta con el carro transversal al final de cada pasada.

## Comprobación

La rosca se comprueba con el elemento que va a acoplarse: la tuerca o la pieza hembra, que debe entrar sin forzar y sin juego excesivo. En producción se usa un calibre pasa y no pasa. Si la rosca no entra, falta profundidad; si entra floja, se pasó de profundidad y no tiene arreglo.

## Seguridad

El roscado exige mucha atención porque se trabaja a baja velocidad pero con el carro en movimiento sincronizado. Hay que mantener la mano lejos del plato, no usar la lima sobre una pieza que gira sin el mango y no intentar medir con la máquina en marcha. Si se vuelve el carro con giro invertido, hay que asegurarse de que el plato esté bien trabado en el husillo, porque en algunos tornos el giro en reversa puede soltar un plato roscado.
