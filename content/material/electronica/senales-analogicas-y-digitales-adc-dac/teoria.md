# Electrónica — Señales analógicas y digitales: ADC y DAC (teoría)

> Tema del MAPA: `electronica/senales-analogicas-y-digitales-adc-dac` (nodo propuesto, ver `../dependencias.md`). Depende de `../sensores-y-actuadores/` y de `../logica-digital-puertas-and-or-not/`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo se convierte una magnitud continua del mundo físico en números que una computadora puede procesar, y a la inversa.

---

## 1. Dos clases de señales

Una señal analógica puede tomar cualquier valor dentro de un rango y varía de forma continua en el tiempo: la tensión que entrega un sensor de temperatura o la que sale de un micrófono. Una señal digital, en cambio, solo toma un conjunto finito de valores; en el caso binario, dos: alto y bajo, que se interpretan como 1 y 0. El mundo físico es analógico, pero los microcontroladores y las computadoras trabajan con números, así que hace falta traducir entre ambos.

## 2. El conversor analógico-digital (ADC)

Un ADC mide la tensión de una señal analógica y la expresa como un número entero. Para eso hace dos operaciones. La primera es el muestreo: tomar valores de la señal a intervalos regulares de tiempo. La segunda es la cuantización: redondear cada valor medido al nivel más cercano entre un número finito de niveles posibles.

## 3. Resolución

La cantidad de niveles depende de la cantidad de bits n del conversor: son 2^n niveles. Un ADC de 8 bits distingue 256 niveles; uno de 10 bits, 1024; uno de 12 bits, 4096. La resolución, es decir, la variación de tensión más chica que el conversor puede distinguir, se calcula dividiendo el rango de medición (la tensión de referencia, Vref) por la cantidad de niveles:

resolución = Vref / 2^n

Un ADC de 10 bits con Vref de 5 V tiene una resolución de 5 / 1024, aproximadamente 4,9 mV. El número que entrega es: código = Vin / Vref × 2^n, truncado al entero (con un tope en el valor máximo, 2^n − 1). Siempre hay un error de cuantización: la señal real se redondea al nivel más próximo, con un error máximo de medio escalón.

## 4. Frecuencia de muestreo

No alcanza con tener buena resolución: hay que muestrear con la rapidez suficiente. El teorema de Nyquist-Shannon establece que, para poder reconstruir una señal, la frecuencia de muestreo debe ser mayor que el doble de la frecuencia máxima que contiene la señal. Por ejemplo, para registrar sonido hasta 20 kHz, que es lo que oye una persona, hay que muestrear a más de 40 kHz; por eso el audio de un CD usa 44,1 kHz. Si se muestrea más lento, aparece un efecto llamado aliasing: componentes de alta frecuencia se confunden con frecuencias bajas que no estaban en la señal original. Para evitarlo se coloca antes del ADC un filtro pasa bajos.

## 5. El conversor digital-analógico (DAC)

El DAC hace el camino inverso: recibe un número y genera una tensión proporcional. Se usa para producir sonido, controlar la velocidad de un motor con precisión o generar una forma de onda. La tensión de salida es Vout = código / 2^n × Vref. Muchos microcontroladores no tienen DAC y lo simulan con PWM más un filtro.

## 6. El ciclo completo

En un sistema típico, un sensor produce una señal analógica, un amplificador la acondiciona, el ADC la convierte, el microcontrolador la procesa y toma una decisión, y un actuador ejecuta la acción, a veces mediante un DAC o un transistor. Elegir la resolución y la frecuencia de muestreo es una decisión de diseño: más bits y más rapidez dan más fidelidad, pero también más costo y más datos para procesar.

## N. Conexión con lo que sigue

Este tema conecta con `../microcontrolador-entradas-y-salidas-digitales/` y con `../../automatizacion/` (instrumentación industrial).
