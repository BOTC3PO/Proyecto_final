# Automatizacion — Instrumentación industrial y lazos de 4-20 mA (teoría)

> Tema del MAPA: `automatizacion/instrumentacion-industrial-y-lazos-4-20-ma`. Depende de `../electronica/sensores-y-actuadores/` y `realimentacion-feedback/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo se mide una variable de proceso, por qué se usa la señal de 4 a 20 mA y cómo se leen los códigos de un P&ID.

---

## 1. Medir para controlar

No se puede controlar lo que no se mide. La **instrumentación industrial** reúne los instrumentos que miden las variables de un proceso (temperatura, presión, caudal, nivel) y las convierten en una señal que el sistema de control pueda leer. El eslabón central es el **transmisor**: un equipo que contiene el sensor y un circuito que convierte la medición en una señal eléctrica normalizada, lista para viajar por cable a un PLC o a un controlador.

## 2. Por qué una señal normalizada

Si cada fabricante usara su propia señal, no habría forma de intercambiar equipos. La industria adoptó señales estándar. La más difundida en la medición analógica es el **lazo de corriente de 4 a 20 mA**:

- 4 mA representa el 0 % del rango de medición.
- 20 mA representa el 100 %.
- Los valores intermedios son proporcionales.

La relación es lineal: corriente (mA) = 4 + 16 × (valor − mínimo) / (máximo − mínimo). Un transmisor de temperatura calibrado de 0 a 200 °C entrega 12 mA cuando mide 100 °C.

## 3. Ventajas del 4-20 mA

- **Cero vivo**: el valor mínimo es 4 mA y no 0. Así, si la corriente cae a 0 mA, se sabe que hay un cable cortado o el transmisor está apagado, y no que la medición es cero.
- **Inmunidad al ruido**: la corriente es la misma en todos los puntos del lazo, de modo que no la afecta la caída de tensión por la longitud del cable ni gran parte de las interferencias.
- **Dos hilos**: muchos transmisores se alimentan por el mismo par de cables por donde envían la señal (los de "lazo alimentado"), con una fuente típica de 24 V de continua.
- **Simplicidad**: es una tecnología probada y fácil de revisar con un multímetro.

El PLC convierte la corriente en tensión con una resistencia de precisión; con 250 ohm, 4-20 mA se transforma en 1-5 V. Con ese valor su entrada analógica obtiene un número que escala a unidades de ingeniería.

## 4. Calibración

Calibrar es comprobar y ajustar que el transmisor entregue la señal correcta. Se ajustan dos puntos:

- El **cero**: la salida a 4 mA cuando la variable está en el valor mínimo del rango.
- El **span** (alcance): la diferencia entre el valor máximo y el mínimo, que fija los 20 mA.

La calibración se hace con un patrón de referencia y se anota en un registro. Un instrumento que se desvía con el tiempo puede entregar un valor erróneo con aspecto de normal, por lo que se recalibra con una frecuencia definida.

## 5. Otras señales

Además del 4-20 mA se usan 0-10 V, señales digitales de dos estados (contactos) y comunicaciones digitales como HART, que superpone información digital sobre el lazo de 4-20 mA para configurar y diagnosticar el instrumento. En instalaciones más modernas se emplean buses de campo.

## 6. El diagrama P&ID

Un P&ID (diagrama de tuberías e instrumentación) es el plano que muestra el proceso con sus tanques, bombas, válvulas e instrumentos. Los instrumentos se identifican con códigos de la norma ISA: una primera letra indica la variable (T temperatura, P presión, F caudal, L nivel) y las siguientes la función (I indicador, T transmisor, C controlador, V válvula). Así, **TT** es un transmisor de temperatura, **PIC** un controlador indicador de presión y **LT** un transmisor de nivel. Un número identifica el lazo, de modo que TT-101 y TIC-101 forman parte del mismo lazo.

## 7. Cuidados de instalación

Los cables de señal se tienden separados de los de potencia, con malla puesta a tierra en un solo extremo. El instrumento se instala donde mide algo representativo. Y al revisar un lazo conviene verificar la alimentación, la polaridad y la continuidad antes de sospechar del instrumento.
