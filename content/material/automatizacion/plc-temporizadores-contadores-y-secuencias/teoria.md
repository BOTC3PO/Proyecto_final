# Automatizacion — PLC: temporizadores, contadores y secuencias (teoría)

> Tema del MAPA: `automatizacion/plc-temporizadores-contadores-y-secuencias`. Depende de `plc-lenguaje-ladder-contactos-y-bobinas/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo se usan TON, TOF, TP y contadores en el programa de un PLC y cómo se arma una secuencia simple.

---

## 1. Más que contactos y bobinas

Con contactos y bobinas se resuelven enclavamientos, pero la automatización real casi siempre incluye tiempo y cantidad: esperar cinco segundos antes de arrancar una cinta, contar doce cajas antes de cerrar un pallet, mantener una luz encendida un rato después de que alguien salió. Para eso el PLC trae **temporizadores** y **contadores**, que son bloques de función estándar de la norma IEC 61131-3.

## 2. Temporizador a la conexión (TON)

El TON (timer on-delay) retrasa la activación. Tiene una entrada **IN**, un tiempo preseleccionado **PT**, una salida **Q** y un valor transcurrido **ET**.

- Cuando IN pasa a 1, el temporizador empieza a contar.
- Si IN permanece en 1 hasta que ET alcanza PT, Q pasa a 1.
- Si IN cae a 0 antes de cumplir el tiempo, el conteo se reinicia y Q nunca se activa.
- Cuando IN vuelve a 0, Q también vuelve a 0 inmediatamente.

Ejemplo: en un arranque secuencial de cintas transportadoras se usa un TON para que la segunda cinta arranque 3 segundos después de la primera.

## 3. Temporizador a la desconexión (TOF)

El TOF (off-delay) retrasa la desactivación.

- Cuando IN pasa a 1, Q pasa a 1 enseguida.
- Cuando IN vuelve a 0, Q sigue activo durante el tiempo PT y recién después se apaga.

Ejemplo: el ventilador de un tablero que sigue funcionando un minuto después de apagar la máquina para enfriarla; o una luz de pasillo que se apaga unos segundos después de que se suelta el interruptor.

## 4. Temporizador de pulso (TP)

El TP genera un pulso de duración fija PT cada vez que IN pasa de 0 a 1, sin importar cuánto tiempo siga IN activo. Sirve, por ejemplo, para accionar un cilindro durante un tiempo determinado ante un toque breve de un pulsador.

## 5. Contadores

Un contador lleva la cuenta de eventos, como piezas que pasan frente a un sensor.

- **CTU** (count up): suma 1 en cada flanco ascendente de la entrada CU. Cuando el valor actual CV llega al valor preseleccionado PV, la salida Q se activa. Una entrada R lo reinicia a cero.
- **CTD** (count down): resta 1 en cada flanco y activa Q cuando llega a cero.
- **CTUD**: cuenta en ambos sentidos, útil para controlar la cantidad de autos que hay en un estacionamiento.

Un detalle clave: el contador cuenta **flancos**, no niveles. Si una pieza se queda frente al sensor, el sensor sigue en 1, pero cuenta una sola vez. Y el contador conserva el valor hasta que se lo reinicie.

## 6. Secuencias simples

Con estos bloques se arma una secuencia sin ser un especialista. Un patrón común es usar bits internos como **marcas de paso**: cada paso activa el siguiente cuando se cumple una condición (un sensor o un tiempo) y desactiva el anterior. Ejemplo de una prensa: bajar, esperar 2 segundos, subir, contar una pieza.

Para no perder el hilo, conviene dibujar la secuencia antes de programar: lista de pasos, acción de cada uno y condición para pasar al siguiente. Ese dibujo, más formalizado, es el GRAFCET que se verá en otro tema.

## 7. Cuidados

- Un temporizador o contador usado en dos peldaños distintos puede comportarse de manera impredecible: usar uno por función.
- Los tiempos son valores de ajuste: documentar sus unidades y guardarlos como parámetros.
- Después de un corte de energía o una parada de emergencia, conviene definir qué pasa con los contadores y temporizadores: reiniciar o retener.
- Probar los casos límite: IN que dura menos que PT, flancos muy seguidos, reinicios durante la cuenta.
