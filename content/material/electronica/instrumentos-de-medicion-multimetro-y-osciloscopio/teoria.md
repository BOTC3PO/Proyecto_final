# Electrónica — Instrumentos de medición: multímetro y osciloscopio (teoría)

> Tema del MAPA: `electronica/instrumentos-de-medicion-multimetro-y-osciloscopio` (nodo propuesto, ver `../dependencias.md`). Depende de `../circuitos-y-leyes-de-kirchhoff/`.

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo medir correctamente tensión, corriente y resistencia con un multímetro, y cómo leer la traza de un osciloscopio.

---

## 1. Medir es conectar un instrumento al circuito

Todo instrumento modifica un poco aquello que mide, así que hay que elegir cómo conectarlo para que su efecto sea mínimo. La regla de base depende de la magnitud: la tensión se mide en paralelo con el componente, porque se compara el potencial entre dos puntos; la corriente se mide en serie, porque el instrumento tiene que ser atravesado por la corriente que se quiere medir; y la resistencia se mide con el componente fuera del circuito y sin tensión aplicada.

## 2. El multímetro

El multímetro, o tester, mide varias magnitudes con un solo aparato. Tiene una perilla selectora, dos puntas de prueba (roja y negra) y varios jacks. La punta negra va casi siempre al borne marcado COM; la roja va al borne de tensión y resistencia, o al de corriente cuando se mide amperios. Es un error frecuente dejar las puntas en la posición de corriente al medir tensión: como la posición de corriente es casi un cortocircuito, puede quemar el fusible del instrumento o dañar el circuito.

## 3. Medir tensión, corriente y resistencia

Para medir tensión continua se elige el rango de voltios en continua y se apoyan las puntas en los dos extremos del componente; la lectura indica la diferencia de potencial. Para tensión alterna se usa el rango correspondiente. Para medir corriente hay que abrir el circuito e intercalar el instrumento, de modo que toda la corriente pase por él. Para medir resistencia se desconecta la alimentación, y si hace falta se retira un terminal del componente, porque otros elementos conectados en paralelo falsean la lectura. Y para verificar continuidad, la función de zumbador suena cuando hay un camino conductor entre las puntas.

## 4. Cuidados y rango

Si no se conoce el valor aproximado, se empieza con el rango más alto y se baja de a poco. En los multímetros automáticos, el aparato elige el rango. Nunca se debe medir resistencia en un circuito energizado ni medir corriente en paralelo con una fuente. Cada instrumento tiene una categoría de seguridad y una tensión máxima de uso; para trabajos con la red eléctrica hay que respetarlas, usar puntas en buen estado y no tocar partes metálicas.

## 5. Incertidumbre

Ninguna medición es exacta. Los instrumentos tienen una exactitud especificada por el fabricante (por ejemplo, un porcentaje de la lectura más unas cifras del último dígito), y además influyen la resolución de la pantalla, la temperatura y la forma en que se conectan las puntas. Por eso un resultado se escribe con su incertidumbre, y se repiten las mediciones para detectar errores groseros.

## 6. El osciloscopio

El osciloscopio muestra cómo varía una tensión en el tiempo. En la pantalla, el eje horizontal es el tiempo y el vertical es la tensión. Tiene dos controles esenciales: la escala vertical, en voltios por división, y la base de tiempo, en segundos (o milisegundos) por división. Con ellos se leen magnitudes contando divisiones en la cuadrícula. El período T es el tiempo de un ciclo completo y la frecuencia es f = 1 / T. La tensión pico a pico (Vpp) es la distancia vertical entre el valor más alto y el más bajo; para una señal senoidal el valor eficaz es Vrms = Vp / √2, donde Vp es la tensión de pico, la mitad de Vpp. La punta del osciloscopio tiene un cable de masa que debe conectarse con cuidado, porque la masa del instrumento suele estar conectada a tierra.

## N. Conexión con lo que sigue

Este tema continúa en `../prototipado-protoboard-soldadura-y-seguridad/`, donde se arma un circuito y se lo verifica con estos instrumentos.
