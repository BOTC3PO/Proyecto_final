# Automatizacion — Modelado de sistemas dinámicos de primer orden (teoría)

> Tema del MAPA: `automatizacion/modelado-de-sistemas-dinamicos-primer-orden`. Depende de `lazo-abierto-vs-lazo-cerrado/` y `../matematica/derivada/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo describir con una ganancia y una constante de tiempo la respuesta de un proceso simple a un escalón.

---

## 1. Qué es modelar un sistema

Para controlar un proceso hay que saber cómo responde. Un modelo es una descripción matemática de esa respuesta: dice qué le pasa a la salida cuando se mueve la entrada. Con el modelo se puede predecir, simular y diseñar el controlador antes de tocar la planta real. Todos los modelos simplifican: dejan afuera detalles para quedarse con lo que domina el comportamiento.

## 2. El sistema de primer orden

Muchos procesos cotidianos se comportan, en primera aproximación, como un sistema de primer orden: un calentador de agua, el llenado de un tanque con una salida, la velocidad de un motor ante un cambio de tensión, la carga de un capacitor a través de una resistencia. Su rasgo común es que la salida no cambia de golpe: se acerca de a poco a un valor final, cada vez más lento.

Se describe con dos números:

- La **ganancia estática K**: cuánto cambia la salida en régimen permanente por cada unidad que cambia la entrada. Si al subir la entrada 1 unidad la salida termina subiendo 3, K vale 3.
- La **constante de tiempo tau (τ)**: mide qué tan rápido responde. Se expresa en segundos, minutos u horas según el proceso. Un sistema con τ chico es rápido; uno con τ grande es lento.

La ecuación es: τ · dy/dt + y = K · u, donde u es la entrada e y es la salida. Sirve ver la derivada como "qué tan rápido cambia la salida": cuanto más lejos está la salida de su valor final, más rápido cambia.

## 3. Respuesta al escalón

La prueba más usada para conocer un sistema es el **escalón**: se cambia la entrada de golpe de un valor a otro y se registra la salida. Si el escalón vale U y el sistema parte de cero, la salida es:

y(t) = K · U · (1 − e^(−t/τ))

El valor final es K · U. Lo importante es cómo se llega:

- En t = τ la salida alcanzó alrededor del 63 % del valor final.
- En t = 2τ, alrededor del 86 %.
- En t = 3τ, alrededor del 95 %.
- En t = 4τ, alrededor del 98 %.
- En t = 5τ, más del 99 %.

Por eso en la práctica se dice que el sistema "se estabilizó" después de unas 4 o 5 constantes de tiempo. No hay un instante exacto en que llega, porque la curva solo se acerca al valor final sin tocarlo.

## 4. Cómo se obtienen K y τ de un ensayo

Con un registro de la salida ante un escalón se pueden leer los parámetros sin resolver ninguna ecuación:

1. K se calcula dividiendo el cambio final de la salida por el tamaño del escalón en la entrada.
2. τ es el tiempo que tarda la salida en llegar al 63 % de ese cambio final. Otra forma es trazar la tangente en el origen: corta el valor final en t = τ.

Ejemplo: un horno recibe un aumento de potencia de 2 kW y la temperatura sube finalmente 80 °C. La ganancia es 40 °C por kW. Si a los 12 minutos alcanzó los 50,4 °C de aumento (el 63 % de 80), la constante de tiempo es de 12 minutos.

## 5. Para qué sirve en control

Conocer K y τ permite elegir bien el controlador. Si τ es grande, el proceso es lento y el controlador debe tener paciencia o ayuda anticipativa. Si K es grande, una pequeña variación de la entrada mueve mucho la salida y conviene un controlador menos agresivo. El modelo de primer orden con retardo es además la base de los métodos prácticos de sintonía de PID que se verán en otros temas.

Hay que recordar sus límites: es una aproximación válida alrededor de un punto de trabajo. Procesos con inercia, oscilaciones o retardos largos necesitan modelos de mayor orden.
