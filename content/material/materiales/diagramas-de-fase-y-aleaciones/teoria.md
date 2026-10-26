# Materiales — Diagramas de fase y aleaciones (teoría)

> Tema del MAPA: `materiales/diagramas-de-fase-y-aleaciones`. Depende de `estructuras-cristalinas-y-celdas-unitarias/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Cómo se lee un diagrama de fases binario, qué es una solución sólida y cómo se aplica la regla de la palanca.

---

## 1. Mezclar materiales

Casi ningún metal se usa puro: el acero es hierro con carbono, el bronce es cobre con estaño, el latón es cobre con zinc. Una **aleación** es una mezcla de un metal con otros elementos que mejora sus propiedades. Un **diagrama de fases** es el mapa que dice qué fases (sólida, líquida, y qué tipos de sólido) existen en equilibrio para cada composición y temperatura. Es la herramienta principal para diseñar y tratar aleaciones.

## 2. Fase, componente y composición

- **Componente**: cada elemento o compuesto que forma la aleación (cobre y níquel, por ejemplo).
- **Fase**: una porción del material con estructura y composición uniformes. El agua con hielo tiene dos fases (líquido y sólido), aunque un solo componente.
- **Composición**: el porcentaje en peso de cada componente.

## 3. Solubilidad y solución sólida

Cuando un elemento se disuelve en otro en estado sólido, se forma una **solución sólida**, una sola fase en la que los átomos del soluto están repartidos en la red del solvente (sustitucionales o intersticiales). Para que dos metales sean solubles en todas las proporciones (como cobre y níquel), según las reglas de Hume-Rothery deben tener:

- Radios atómicos parecidos (diferencia menor a alrededor del 15 %).
- La misma estructura cristalina.
- Electronegatividades similares.
- Valencias parecidas.

Si no se cumplen, la solubilidad es limitada y aparecen otras fases.

## 4. Cómo leer un diagrama binario

El eje horizontal es la composición y el vertical la temperatura. Hay curvas que separan regiones:

- **Línea liquidus**: por encima de ella, la aleación es totalmente líquida.
- **Línea solidus**: por debajo de ella, la aleación es totalmente sólida.
- Entre ambas hay una región bifásica: coexisten líquido y sólido, y la aleación solidifica en un rango de temperaturas, no a una temperatura única como un metal puro.

Dado un punto (composición y temperatura), se leen cuántas fases hay, cuáles son y su composición. Se traza una línea horizontal (isoterma) hasta los límites de la región: los extremos dan la composición de cada fase.

## 5. La regla de la palanca

Si el punto cae dentro de una región de dos fases, la **regla de la palanca** permite hallar qué fracción de cada una hay. Si C0 es la composición de la aleación y las fases tienen composiciones C1 y C2 en los extremos de la isoterma:

- Fracción de la fase 1 = (C2 − C0) / (C2 − C1)
- Fracción de la fase 2 = (C0 − C1) / (C2 − C1)

Intuitivamente funciona como una palanca con el apoyo en C0: la fase cuya composición está más lejos de C0 pesa menos, y la que está más cerca, más.

## 6. El eutéctico

Algunos sistemas, como plomo-estaño, presentan un punto **eutéctico**: una composición específica que solidifica a una temperatura única y más baja que la de fusión de sus componentes. El líquido se transforma directamente en dos fases sólidas en un arreglo fino. Para los soldadores clásicos de estaño-plomo es una ventaja: la aleación eutéctica funde a una temperatura baja y de golpe, y pasa rápido de líquido a sólido. Se simboliza: líquido ⇄ sólido 1 + sólido 2.

## 7. Aplicaciones

- Elegir la composición y la temperatura de colada.
- Prever la microestructura que resultará de enfriar.
- Diseñar tratamientos térmicos: qué fases se forman al calentar o enfriar.
- Seleccionar soldaduras y aleaciones de bajo punto de fusión.

Los diagramas describen el **equilibrio**, que se alcanza enfriando muy lento. En la práctica, con enfriamientos más rápidos aparecen microestructuras que no están en el diagrama, algo central en el temple del acero.
