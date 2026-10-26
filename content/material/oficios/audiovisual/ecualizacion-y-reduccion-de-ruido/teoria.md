# Audiovisual — Ecualización y reducción de ruido (teoria)

> Tema de los finales de ruta de `oficios-orientacion-vocacional-PLANIFICACION.md`. Depende de `../edicion-de-audio/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es la ecualización

Todo sonido está formado por frecuencias, medidas en hertz. Los graves están por debajo de unos 250 Hz, los medios entre ese valor y unos 4 kHz y los agudos por encima. El oído humano percibe aproximadamente entre 20 Hz y 20 kHz. La ecualización (EQ) permite subir o bajar el nivel de ciertas zonas del espectro, para que la voz o el instrumento suenen más claros, más cálidos o menos molestos.

Un ecualizador paramétrico trabaja con bandas que se ajustan en tres parámetros: la frecuencia central, la ganancia (cuánto se sube o baja) y el ancho de banda o factor Q. Un Q alto afecta una zona muy estrecha; un Q bajo afecta una zona amplia y suena más natural.

## 2. Filtros y ajustes típicos para la voz

El filtro pasa-altos (high-pass) elimina las frecuencias por debajo de un punto de corte. En una voz hablada se suele aplicar uno alrededor de 80 a 100 Hz para quitar rumores de fondo, golpes de aire y vibraciones que no aportan nada. El filtro pasa-bajos hace lo contrario y se usa menos en voz.

Algunas orientaciones habituales: la zona de los 200 a 400 Hz puede sonar turbia o embotada si hay exceso; la zona de los 2 a 5 kHz aporta claridad e inteligibilidad, y un exceso la vuelve áspera; las eses estridentes, llamadas sibilancias, se concentran por encima de los 5 kHz. Estas cifras son puntos de partida y no reglas: cada voz y cada micrófono son distintos, y se decide escuchando. Es mejor recortar un problema que subir todo lo demás, y los cambios pequeños suelen sonar mejor que los extremos.

## 3. Compresión de dinámica

La dinámica es la diferencia entre los sonidos fuertes y los suaves. Una persona que habla se acerca y se aleja del micrófono, y su voz sube y baja. El compresor reduce automáticamente esa diferencia: cuando el nivel supera un umbral (threshold), lo baja según una proporción (ratio). Un ratio de 3 a 1 significa que por cada 3 dB que la señal pasa del umbral, solo salen 1 dB por encima.

El tiempo de ataque (attack) indica qué rápido empieza a actuar, y el de liberación (release) cuánto tarda en soltar. Después de comprimir se sube la ganancia de salida para recuperar volumen. Una compresión suave deja la voz más pareja y fácil de escuchar, incluso en un celular o en un auto; una compresión excesiva le quita naturalidad.

## 4. Reducción de ruido

El ruido de fondo, como el zumbido de un ventilador, el siseo de un micrófono económico o un aire acondicionado, es continuo y se puede atenuar. La técnica habitual consiste en elegir un fragmento donde solo se oiga el ruido y que el programa aprenda su perfil, y luego aplicar la reducción a todo el audio. Se regula con mesura: una reducción exagerada deja la voz con un sonido metálico y artificial, como bajo el agua.

Lo que cambia en el tiempo, como ladridos, bocinas o golpes, es más difícil de eliminar con estos filtros. Y el ruido eléctrico de 50 Hz de la red con sus armónicos se puede atenuar con filtros muy estrechos, llamados notch. Lo ideal es siempre prevenir: grabar en un lugar silencioso, con el micrófono cerca de la boca. Ninguna herramienta repara del todo una mala grabación.

## 5. Eco, reverberación y sibilancias

El eco y la reverberación son reflejos del sonido en las paredes. Se perciben en habitaciones vacías, con superficies duras. Hay herramientas de reducción de reverberación, pero sus resultados son limitados; es más efectivo grabar en un lugar con cortinas, alfombras y muebles que absorban. El mismo recurso, aplicado como efecto, sirve para dar ambiente en la mezcla.

Las sibilancias se tratan con un de-esser, un compresor que actúa solo en la zona de las eses. Y el clipping, es decir el recorte de la señal por exceso de nivel, no se corrige bien después; por eso se graba con margen. Después de cada ajuste conviene comparar con el original y escuchar el resultado con auriculares y con parlantes pequeños.
