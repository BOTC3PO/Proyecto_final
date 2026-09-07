# Física — Física médica (teoria)

> Tema del MAPA: `FISM3` (`troncos.md`). Depende de del nodo `NUC4` de `troncos.md` (sin carpeta propia todavía) (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**

---

## ¿Qué es la física médica y por qué es importante?

La física médica es la disciplina que aplica los principios y métodos de la física para resolver problemas en la medicina y la salud humana. No se trata solo de entender cómo funcionan los átomos, sino de utilizar esa comprensión para diagnosticar enfermedades, tratar cánceres y monitorear la salud de las personas. Esta área es fundamental porque permite transformar conceptos abstractos de la física, como la radiación electromagnética o la desintegración nuclear, en herramientas concretas que salvan vidas. Sin la física, tecnologías como las imágenes internas del cuerpo o los tratamientos contra el cáncer no existirían tal como las conocemos hoy.

La importancia radica en la capacidad de la física para hacer visible lo invisible. El cuerpo humano es opaco a la luz visible, pero la radiación puede atravesarlo o interactuar con sus tejidos de maneras específicas. Al comprender estas interacciones, los profesionales de la salud pueden obtener información detallada sobre órganos y tejidos sin necesidad de cirugía. Además, la física médica busca siempre el equilibrio entre obtener la mejor información o el mejor tratamiento y minimizar los riesgos asociados a la exposición a la radiación, garantizando la seguridad tanto del paciente como del personal médico.

## Rayos X: Imágenes basadas en la absorción

Los rayos X son un tipo de radiación electromagnética de alta energía y longitud de onda muy corta, similar a la luz visible pero con mucha más capacidad de penetración. Cuando se generan en un tubo de rayos X, estos fotones viajan a través del cuerpo y son absorbidos en diferentes cantidades según la densidad de los tejidos. Los huesos, ricos en calcio, absorben mucha más radiación y aparecen blancos en la imagen; los tejidos blandos y el aire, como los pulmones, absorben menos y aparecen en tonos grises o negros.

Este contraste natural permite visualizar fracturas, infecciones o tumores. La física detrás de este proceso se basa en la atenuación de la radiación, que sigue una ley exponencial. Si $I_0$ es la intensidad inicial del haz y $I$ es la intensidad que sale del cuerpo, la relación depende del coeficiente de atenuación $\mu$ del tejido y del espesor $x$ que recorre la radiación, expresado matemáticamente como $I = I_0 e^{-\mu x}$. Comprender esta fórmula ayuda a ajustar la potencia del equipo para obtener imágenes claras sin exponer al paciente a dosis innecesarias.

## Tomografía por Emisión de Positrones (PET)

A diferencia de los rayos X, que muestran principalmente la estructura anatómica, la PET es una técnica funcional que revela cómo están trabajando los órganos a nivel metabólico. Se basa en la emisión de positrones, la antipartícula del electrón, que se produce cuando ciertos isótopos radiactivos se desintegran. Al inyectar un radiotracer, como una glucosa marcada con flúor, las células con alta actividad metabólica (como las tumorales) absorben más de este compuesto.

Cuando el positrón emitido choca con un electrón del tejido, ocurre un proceso llamado aniquilación. En este evento, ambas partículas desaparecen y su masa se convierte en energía, produciendo dos fotones gamma que salen en direcciones opuestas (a 180 grados). Los detectores del escáner captan simultáneamente estos fotones, permitiendo reconstruir la ubicación exacta de la actividad metabólica. Esto es crucial para detectar metástasis o evaluar la respuesta a tratamientos oncológicos con una sensibilidad mucho mayor que otras técnicas.

## Radioterapia: Control de la dosis

La radioterapia utiliza haces de radiación ionizante, como rayos X de alta energía o partículas como protones, para destruir células cancerosas. El objetivo físico es depositar la mayor cantidad de energía en el tumor mientras se protege el tejido sano circundante. La física médica calcula la "dosis" absorbida, medida en Gray (Gy), que representa la energía depositada por kilogramo de masa.

Para lograr esto, se emplean técnicas avanzadas de planificación computarizada. Se modela la interacción de la radiación con los tejidos usando algoritmos complejos que consideran la geometría del tumor y la ubicación de órganos vitales. La precisión es extrema; un error de milímetros puede significar daño a la médula espinal o a órganos críticos. Por ello, la verificación física del plan de tratamiento es un paso obligatorio antes de cualquier sesión, asegurando que la radiación siga la trayectoria diseñada y cumpla con los límites de seguridad establecidos.
