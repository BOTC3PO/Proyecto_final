# Automatizacion — PLC: lenguaje ladder, contactos y bobinas (teoría)

> Tema del MAPA: `automatizacion/plc-lenguaje-ladder-contactos-y-bobinas`. Depende de `plc-logica-de-control-industrial/` y `../electronica/logica-digital-puertas-and-or-not/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo se lee y escribe un programa en ladder: contactos NA y NC, bobinas, lógica y enclavamiento.

---

## 1. Qué es el lenguaje ladder

El **ladder** (diagrama de contactos o escalera) es el lenguaje gráfico más usado para programar PLC. Nació para que los electricistas que ya leían esquemas de relés pudieran programar sin aprender informática. Es uno de los lenguajes que define la norma IEC 61131-3, junto con los diagramas de bloques de función, el texto estructurado y el diagrama funcional secuencial.

Se dibuja como una escalera: dos rieles verticales, uno a cada lado, y entre ellos peldaños (rungs) horizontales. Cada peldaño es una condición lógica que, si se cumple, activa una salida. El PLC lee los peldaños de arriba hacia abajo y de izquierda a derecha en cada ciclo.

## 2. Contactos y bobinas

Los elementos básicos son:

- **Contacto normalmente abierto (NA)**: se dibuja como dos líneas verticales, y deja pasar la "corriente" lógica cuando el bit asociado vale 1. Equivale a un pulsador de marcha o a un sensor activo.
- **Contacto normalmente cerrado (NC)**: igual pero con una barra oblicua, y deja pasar cuando el bit vale 0. Equivale a un pulsador de parada o a un sensor que corta al activarse.
- **Bobina**: dibujada con paréntesis, es la salida. Se activa si hay continuidad lógica por el peldaño que la precede.

Es importante entender que un contacto no es un componente físico. Es la consulta del estado de una entrada, de una salida o de una variable interna.

## 3. Serie, paralelo y lógica

- Contactos en **serie** forman una función **AND**: todos deben cumplirse.
- Contactos en **paralelo** forman una función **OR**: basta uno.
- Un contacto NC equivale a una negación (NOT) de la variable.

Con estas tres piezas se arma cualquier lógica combinacional. Ejemplo: una lámpara se enciende si el sensor de presencia está activo Y NO está activado el modo manual: contacto NA del sensor en serie con contacto NC del modo manual, y luego la bobina de la lámpara.

## 4. El circuito de enclavamiento (arranque-parada)

El patrón más importante del ladder es el **enclavamiento** o autorretención. Sirve para que un pulsador momentáneo deje a un motor funcionando hasta que se lo pare. El peldaño tiene:

1. Un contacto NA del pulsador de marcha.
2. En paralelo con él, un contacto NA de la propia bobina del motor (se "autosostiene").
3. En serie, un contacto NC para la parada (en este ejemplo básico, el pulsador de parada entrega un 1 cuando se lo pulsa, así que el contacto NC corta al pulsarlo).
4. Al final, la bobina del motor.

Al pulsar marcha, la bobina se activa y su contacto auxiliar queda cerrado, manteniendo la señal aunque se suelte el pulsador. Al pulsar parada, se abre el contacto NC y se corta la señal. Es la versión programada del clásico circuito de contactores.

En instalaciones reales el pulsador de parada se cablea **físicamente normalmente cerrado**: su entrada vale 1 en reposo y 0 al pulsarlo (o si se corta el cable). En ese caso, en el programa se usa un contacto NA sobre esa entrada. El motor solo puede funcionar mientras la entrada de parada esté en 1. Así, un cable cortado lo detiene en lugar de dejarlo en marcha. Esto se llama lógica de falla segura.

## 5. Otras instrucciones útiles

Las bobinas pueden ser de **set** (la salida se activa y queda activa) y **reset** (se desactiva). Es otra forma de hacer un enclavamiento, con una bobina para encender y otra para apagar. Hay que prestar atención a qué bobina se evalúa último en el programa, porque si ambas están activas gana la última.

También existe el **flanco**: un contacto que está activo solo durante un ciclo cuando la señal cambia de 0 a 1 (flanco ascendente) o de 1 a 0 (descendente). Sirve para contar pulsos o para evitar que un botón apretado dispare la acción en cada ciclo.

## 6. Buenas prácticas

- Dar nombres claros a cada variable (por ejemplo, "marcha_motor_1").
- No usar la misma bobina de salida en más de un peldaño: puede producir resultados confusos.
- Agrupar funciones con comentarios y mantener cada peldaño simple.
- Probar el programa en simulación antes de conectarlo a un equipo real.
- Pensar siempre en qué ocurre si se corta un cable o falla un sensor.
