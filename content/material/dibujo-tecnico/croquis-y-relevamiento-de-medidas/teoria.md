# Dibujo técnico — Croquis y relevamiento de medidas (teoría)

> Tema propuesto en `_plan-faltantes/tecnicas.md`: `dibujo-tecnico/croquis-y-relevamiento-de-medidas`. Depende de `../acotacion-normalizada/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo tomar medidas de una pieza o un local existente y dejarlo registrado.

---

## 1. Cuando no hay plano

Muchas veces hay que trabajar sobre algo que ya existe y no tiene planos: reponer una pieza rota, reformar una cocina, instalar una puerta. El primer paso es **relevar**: medir y registrar. El **croquis** es el dibujo a mano alzada, hecho en el lugar, donde se anotan las medidas. Después se pasa en limpio con instrumentos o con CAD.

## 2. Qué es un buen croquis

Un croquis no tiene que ser artístico, pero sí **claro, proporcionado y completo**:

- Las formas se dibujan **aproximadamente a escala** entre sí, aunque no tengan una escala exacta.
- Se usan las **líneas normalizadas** (contorno grueso, auxiliares finas, ejes con trazo y punto).
- Se dibujan las **vistas necesarias**, y una perspectiva simple si ayuda.
- Se **acota** con las mismas reglas del dibujo técnico (`acotacion-normalizada/`): líneas de cota, auxiliares y flechas.
- Se anota lo que no se ve: material, estado, observaciones, fecha, quién relevó y, si hace falta, la orientación.

Un croquis incompleto obliga a volver a medir.

## 3. Instrumentos de medición

- **Cinta métrica** o flexómetro: la más común; para distancias largas conviene que lo sostengan dos personas.
- **Calibre (pie de rey)**: para medidas pequeñas con precisión del orden de décimas de milímetro: diámetros, espesores, profundidades.
- **Escuadra, nivel y plomada**: para verificar ángulos rectos, horizontalidad y verticalidad.
- **Medidor láser**: mide distancias de un punto a otro con rapidez.
- **Galgas y peines de rosca**: para identificar el paso de una rosca o el radio de un empalme.

Se registra la unidad con cada medida y se mide dos veces cuando es importante.

## 4. Método de relevamiento de una pieza

1. Observar y fotografiar la pieza; entender cómo funciona.
2. Hacer el croquis de las vistas necesarias.
3. Establecer **referencias**: una cara base de la cual se miden las demás.
4. Medir las dimensiones generales y luego las de los detalles; **acotar en cadena** o desde la base, según la pieza.
5. Identificar roscas, agujeros y su posición.
6. Anotar material y observaciones.
7. Verificar: la suma de las medidas parciales debe coincidir con la total.

## 5. Relevamiento de un local

Para un ambiente se relevan **largo y ancho** midiendo cada pared y comprobando con las **diagonales** que los ángulos son rectos (si las dos diagonales son iguales en un rectángulo, el ambiente está a escuadra); las **alturas**; la posición y tamaño de **aberturas** (puertas, ventanas) con su antepecho; y los elementos fijos como columnas, instalaciones y artefactos. Se hace primero la planta y luego los cortes necesarios. Hay que marcar el norte si es relevante.

## 6. Errores frecuentes

Medir con la cinta torcida o caída; mezclar unidades; no anotar de qué cara se midió; olvidar espesores de muros; dar por supuesto que los ángulos son rectos; o hacer un croquis sin las medidas totales, que impide verificar. La regla es: **si no está anotado, no se midió**.

## N. Conexión con lo que sigue

Del croquis se pasa al dibujo definitivo con `dibujo-asistido-por-computadora-cad/`. La lectura de planos de oficio aprovecha estos criterios (`oficios/albanil-constructor/`).
