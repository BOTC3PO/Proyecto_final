# Oficios — Soldador — Parámetros de soldadura: amperaje, electrodo y velocidad (teoria)

> Tema del MAPA: nodo propuesto en `../../../_plan-faltantes/oficios-b.md` (sin ID en `troncos.md` todavía). Depende de
> `procesos-soldadura/` (ver `../../dependencias.md`). Lección informativa — la
> evaluación del oficio se concentra en `diagnostico-soldadura-por-casos/`, al final.

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## Una receta, no una corazonada

Los defectos más comunes de la soldadura no vienen de falta de habilidad sino de **parámetros mal elegidos**. Corriente, tensión, velocidad de avance, tipo y diámetro del consumible y gas de protección forman una receta que hay que seguir y ajustar con criterio. Esta lección explica cómo se eligen.

## Cómo leer un electrodo revestido

Los electrodos para arco manual (SMAW) se identifican con un código. En la nomenclatura de la AWS para aceros al carbono, **E7018** significa: la **E** es electrodo; los dos primeros dígitos, **70**, indican la resistencia a la tracción mínima del metal depositado, en miles de libras por pulgada cuadrada (70 ksi, aproximadamente 480 MPa); el tercer dígito indica la **posición** en que puede usarse (1 es todas las posiciones); y los últimos dos dígitos juntos indican el **tipo de revestimiento** y la corriente que admite.

Algunos de uso común: el **E6010** y el **E6011** penetran mucho y son típicos de pasadas de raíz en cañerías; el **E6013** es fácil de usar, de bajo salpicado y buen acabado, apto para chapa fina y trabajos generales; el **E7018** es de **bajo hidrógeno**, produce soldaduras resistentes y tenaces, pero absorbe humedad del ambiente y debe conservarse en **estufa o secarse en horno** según lo indique el fabricante, porque el hidrógeno puede causar fisuras en frío.

## Diámetro y amperaje

El **diámetro del electrodo** se elige según el espesor de la pieza y la posición: más fino para chapas delgadas y para posiciones difíciles, más grueso para espesores grandes y posición plana. El **amperaje** se selecciona dentro del rango que indica el fabricante en el envase para cada diámetro. Con muy poca corriente el arco es inestable, el electrodo se pega y la penetración es insuficiente; con demasiada, el electrodo se recalienta, se salpica, hay mordeduras y el revestimiento se quema. Un rango habitual para un electrodo de 3,25 mm ronda los 100 a 140 amperes, pero **siempre hay que respetar la caja** del fabricante y el procedimiento calificado.

## Longitud de arco y velocidad

Se mantiene un arco corto, de aproximadamente el diámetro del núcleo del electrodo. Un arco largo da un cordón ancho, plano, con porosidad y salpicaduras. La **velocidad de avance** debe ser pareja: demasiado rápida deja un cordón angosto y con poca penetración; demasiado lenta acumula material, sobrecalienta y deforma. El ángulo del electrodo (de empuje o de arrastre, según el proceso) influye en la penetración y la forma del cordón.

## MIG/MAG y TIG

En **MIG/MAG** la variable principal es la **velocidad del alambre**, que determina la corriente, junto con la tensión, que determina la longitud de arco. El alambre habitual para acero al carbono (por ejemplo ER70S-6) se usa con CO2 puro o con una mezcla de argón con CO2, muy usada en 75/25. Un caudal de gas insuficiente deja porosidad; uno excesivo causa turbulencia y también poros. En **TIG** se usa un electrodo de tungsteno no consumible con argón puro en la mayoría de los casos, y la corriente se regula con un pedal o un control manual, mientras el material de aporte se agrega con la otra mano. El TIG da mucho control y buen acabado, pero es más lento.

## Corriente continua y alterna

La polaridad cambia el reparto de calor: en electrodo positivo hay más penetración en la pieza para algunos consumibles, y en negativo hay más fusión del electrodo. Cada electrodo indica la polaridad adecuada. El aluminio en TIG se suelda con corriente alterna para limpiar el óxido.

## Ajuste con criterio

Se prueba sobre un recorte del mismo material, se examina el cordón y se corrige. El calor aportado en una soldadura se puede estimar como la relación entre tensión por corriente y velocidad de avance; más calor significa más deformación y una zona afectada mayor. Dejar anotados los parámetros que funcionan es la mejor práctica del taller.
