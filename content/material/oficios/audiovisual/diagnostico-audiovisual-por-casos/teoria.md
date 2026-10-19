# Audiovisual — Diagnóstico audiovisual por casos (teoria)

> Tema de los finales de ruta de `oficios-orientacion-vocacional-PLANIFICACION.md`. Depende de los temas anteriores de la rama (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. El método: síntoma, causa, prueba

En producción audiovisual los problemas casi siempre tienen una causa identificable en alguna etapa: captura, edición o exportación. Diagnosticar consiste en describir el síntoma con precisión, pensar en qué etapa pudo originarse, probar con una verificación sencilla y corregir en el lugar correcto. Corregir en la etapa equivocada suele dar resultados mediocres: un eco de grabación no se arregla bien al exportar.

Una pregunta útil es si el defecto aparece en el archivo original, en el proyecto de edición o solo en el archivo exportado. Esa respuesta acota enseguida dónde buscar.

## 2. Caso 1: audio con eco

Síntoma: la voz suena distante y con rebote, como en una habitación vacía. Causa más probable: se grabó lejos del micrófono, en un espacio con superficies duras, o con un micrófono omnidireccional que capta el ambiente. Verificación: escuchar el audio original sin efectos y comparar con una prueba cerca del micrófono.

Solución: si hay posibilidad, volver a grabar más cerca y en un lugar con telas y objetos que absorban. Si no se puede, se aplica una herramienta de reducción de reverberación con mesura y una ecualización, sabiendo que el resultado será limitado. Es el ejemplo clásico de que lo mejor es arreglar el problema en origen.

## 3. Caso 2: audio con distorsión o recorte

Síntoma: la voz suena áspera y rota en los momentos fuertes. Causa: el nivel de grabación fue demasiado alto y la señal se recortó (clipping), o la mezcla superó el máximo digital. Verificación: mirar la forma de onda; si los picos aparecen aplanados contra el techo, hay recorte.

Solución: el recorte en la grabación no se repara bien; hay que volver a grabar con menos ganancia o usar una pista de respaldo si se grabó una. Si el recorte ocurrió en la mezcla, se baja el nivel de las pistas o del conjunto y se vuelve a exportar. Grabar con picos entre menos 12 y menos 6 dBFS evita el problema.

## 4. Caso 3: el video exportado pesa demasiado

Síntoma: un video de pocos minutos genera un archivo enorme que no se puede subir o enviar. Causas posibles: una tasa de bits muy alta, una resolución mayor que la necesaria, un formato de poca compresión pensado para edición, o una duración con tomas muertas. Verificación: revisar los ajustes de exportación: códec, resolución, bitrate y formato.

Solución: exportar en MP4 con H.264, una resolución acorde al destino, como Full HD, y una tasa de bits razonable para la plataforma. Quitar tramos innecesarios también reduce el peso. Se conserva siempre la copia de alta calidad por si hace falta volver a exportar.

## 5. Caso 4: desfase entre audio y video

Síntoma: los labios no coinciden con la voz, y el desfase crece a lo largo del video. Una causa muy frecuente es el material de celular grabado con cuadros por segundo variables, que el editor interpreta con una tasa fija. Otras causas son mezclar tasas de cuadros distintas en un mismo proyecto o usar un audio grabado por separado sin sincronizar.

Verificación: revisar las propiedades de los archivos, comparar la tasa de cuadros de los clips con la del proyecto, y ver si el desfase es constante o creciente. Solución: convertir primero el material a una tasa de cuadros constante, abrir el proyecto con esa tasa, y para audio externo usar una señal de referencia como una palmada al inicio, o la herramienta de sincronización automática del editor.

## 6. Caso 5: colores que cambian entre pantallas y planos que no empatan

Síntoma: el video se ve bien en el editor pero lavado u oscuro en otro dispositivo, o los planos de una misma escena tienen colores distintos. Causas: monitor sin calibrar, diferencias de balance de blancos entre tomas, exportación con un espacio de color incorrecto, o una LUT aplicada dos veces. Verificación: revisar el video en varios dispositivos y comparar con la forma de onda y el vectorscopio.

Solución: igualar los planos con referencia, verificar la configuración de espacio de color del proyecto y de la exportación y evitar aplicar estilos antes de corregir. Este último caso reúne varias etapas, y por eso recuerda la idea central de la ruta: cada decisión de captura, edición y entrega deja huella en el resultado.
