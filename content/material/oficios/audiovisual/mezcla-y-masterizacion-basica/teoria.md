# Audiovisual — Mezcla y masterización básica (teoria)

> Tema de los finales de ruta de `oficios-orientacion-vocacional-PLANIFICACION.md`. Depende de `../ecualizacion-y-reduccion-de-ruido/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. De las pistas sueltas a un conjunto

Una mezcla combina varias pistas, como voz, música, efectos y ambiente, en un resultado único y coherente. El objetivo es que cada elemento se oiga con claridad y que el conjunto sirva a la historia. Se suele empezar por lo más importante, que casi siempre es la voz en un contenido hablado, y se acomoda lo demás a su alrededor. Conviene ordenar y nombrar las pistas, y agruparlas por tipo para controlarlas juntas.

Una regla útil es trabajar a un volumen de escucha moderado, ya que el oído percibe distinto según el volumen, y comprobar la mezcla con auriculares, con parlantes de computadora y con el celular. Si se entiende bien en el dispositivo más modesto, está bien resuelta.

## 2. Niveles y balance

El balance es la relación de volumen entre las pistas. La voz debe entenderse sin esfuerzo; la música acompaña y no compite. Cuando hay voz y música juntas, una práctica común es bajar la música mientras la voz habla y subirla en las pausas, lo que se llama ducking y puede automatizarse con un compresor activado por la voz. Los efectos de sonido deben notarse sin sobresaltar.

Las automatizaciones permiten dibujar cambios de volumen a lo largo del tiempo, en lugar de usar un nivel fijo. Evitan que una música empiece demasiado fuerte o tape una frase importante. Los picos no deben superar el máximo digital, y conviene dejar un margen para el procesamiento final.

## 3. Panorama y espacio

El panorama (pan) ubica cada sonido entre el canal izquierdo y el derecho. La voz principal normalmente va al centro, porque así se escucha parejo en cualquier sistema. Los instrumentos de apoyo o los ambientes pueden repartirse a los costados para crear amplitud. La reverberación agrega sensación de espacio, pero en exceso ensucia y aleja la voz.

Hay que cuidar la compatibilidad con mono: muchos celulares, parlantes y salas reproducen en un solo canal. Si una mezcla estéreo contiene elementos que se anulan al sumarse, algunos sonidos desaparecen o se debilitan. Por eso se verifica la mezcla en mono antes de darla por terminada.

## 4. Masterización básica y volumen percibido

La masterización es el último ajuste de la mezcla ya terminada. Incluye una ecualización suave si hace falta, un control de la dinámica con un limitador que evita que los picos superen un techo, y la fijación del volumen final. No arregla una mezcla mala, sino que la prepara para la entrega.

El volumen percibido se mide en LUFS, que tienen en cuenta cómo oye una persona. Existen referencias habituales: la norma europea de televisión EBU R128 indica un nivel de alrededor de menos 23 LUFS, y muchas plataformas de streaming normalizan hacia valores cercanos a menos 14 LUFS, aunque bajan el volumen de lo que está muy alto en lugar de subir lo que está bajo. Estos objetivos cambian y dependen de cada plataforma, por lo que hay que consultar los requisitos vigentes del destino. Además del volumen se controla el pico real (true peak), que suele dejarse un poco por debajo del máximo, por ejemplo cerca de menos 1 dBTP.

## 5. Normalización y entrega

Normalizar es ajustar el nivel total de un audio para alcanzar un objetivo. La normalización por pico lleva el pico más alto a un valor determinado; la normalización por volumen percibido apunta a un valor de LUFS. La segunda es más representativa de cómo se oye. Ninguna reemplaza el criterio: un audio con picos aislados puede quedar más bajo de lo deseado si se normaliza solo por pico.

Antes de exportar se revisa el resultado completo de principio a fin, se comprueba que no haya recortes y se guarda una copia sin comprimir del proyecto. La entrega final se hace en el formato que pida el destino, por ejemplo WAV para producción o un formato comprimido para la web, generado una sola vez para no perder calidad por conversiones repetidas.
