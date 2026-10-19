# Dibujo técnico — Cortes y secciones (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `dibujo-tecnico/cortes-y-secciones`. Depende de `../vistas-frontal-superior-lateral/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo mostrar el interior de una pieza imaginando que se la corta.

---

## 1. Mostrar lo que no se ve

Con las vistas de `vistas-frontal-superior-lateral/`, lo que está dentro de una pieza (un agujero ciego, una cavidad, un hueco) se representa con **líneas de trazos**. Cuando el interior es complejo, esas líneas se acumulan y el dibujo se vuelve ilegible. La solución es el **corte**: se imagina que un plano atraviesa la pieza, se retira la parte que quedó entre el plano y la persona que mira, y se dibuja lo que queda, con el interior a la vista.

## 2. Elementos del corte

- **Plano de corte**: el plano imaginario que atraviesa la pieza. Se indica con una línea de trazo y punto, con trazo grueso en los extremos y en los cambios de dirección.
- **Flechas** en los extremos: señalan el sentido en que se mira.
- **Letras** (por ejemplo A–A) en los extremos para identificar el corte, y la misma identificación sobre la vista cortada ("Corte A–A").
- **Rayado**: las zonas de material que el plano atravesó se rellenan con líneas finas paralelas, típicamente inclinadas a 45° y equiespaciadas. Lo hueco (donde no hay material) queda sin rayar. En piezas distintas de un conjunto, el rayado cambia de dirección o de separación para distinguirlas. Hay rayados convencionales para distinguir materiales, según la norma.

Una vez hecho el corte, ya no se dibujan las líneas de trazos de lo que quedó expuesto, salvo que sean necesarias.

## 3. Tipos de corte

- **Corte total**: el plano atraviesa toda la pieza. Es el más usado.
- **Medio corte**: en piezas simétricas, la mitad se dibuja en corte y la otra mitad como vista exterior. Se separan con la línea de eje. Muestra interior y exterior en un único dibujo.
- **Corte parcial (rotura local)**: solo se muestra una zona, limitada por una línea ondulada. Útil para detalles puntuales.
- **Corte quebrado o en escalón**: el plano cambia de dirección para pasar por varios detalles que no están alineados.
- **Sección abatida o superpuesta**: muestra solo la forma de la sección transversal, girada 90° sobre el dibujo.

## 4. Corte y sección

Un **corte** representa lo que está en el plano y también lo que se ve más allá de él. Una **sección** representa únicamente la figura que el plano deja al cortar, sin lo que hay detrás. Las secciones se usan, por ejemplo, para mostrar el perfil de un nervio, de un eje con chavetero o de un rayo.

## 5. Excepciones

Por convención, en un corte longitudinal ciertas piezas **no se cortan ni se rayan**: ejes, tornillos, pernos, bulones, remaches, chavetas, nervios y rayos, porque no aportan información al ser cortados y rayarlos las confunde. Así se evita malinterpretar que la pieza está hueca.

## 6. Cuándo cortar

Se corta cuando hay interiores complejos o cuando las líneas de trazos dificultan la lectura. No se corta cuando la pieza es simple: cortar de más recarga el plano.

## N. Conexión con lo que sigue

Los cortes son indispensables en `vistas-auxiliares-y-detalles/`, en `representacion-de-roscas-tornillos-y-uniones/` y en `interpretar-planos-de-piezas-y-conjuntos/`.
