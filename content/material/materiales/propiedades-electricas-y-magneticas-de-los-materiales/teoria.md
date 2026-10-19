# Materiales — Propiedades eléctricas y magnéticas de los materiales (teoría)

> Tema del MAPA: `materiales/propiedades-electricas-y-magneticas-de-los-materiales`. Depende de `../fisica/resistencia-electrica/`, `../fisica/campo-magnetico-imanes-corrientes/` y `enlaces-y-estructura-atomica-de-los-materiales/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Qué distingue a conductores, semiconductores y aislantes, y cómo se clasifican los materiales según su respuesta magnética.

---

## 1. Comportamiento eléctrico: una cuestión de electrones

La facilidad con que un material conduce la corriente eléctrica depende de cuántos electrones pueden moverse libremente. Según esa propiedad, los materiales se clasifican en **conductores**, **semiconductores** y **aislantes**. Un enfoque útil es el de las **bandas de energía**: los electrones de un sólido solo pueden tener ciertos valores de energía. En los conductores, hay electrones con libertad para moverse; en los aislantes, para que un electrón pueda conducir debe saltar una "brecha prohibida" muy ancha; en los semiconductores esa brecha es angosta.

## 2. Resistividad y resistencia

La **resistividad (ρ)** es una propiedad del material: cuánto se opone al paso de la corriente. Se mide en ohm por metro. La **resistencia** de un conductor depende de ella y de su forma:

R = ρ · L / A

con L la longitud y A el área de la sección. Un cable más largo o más delgado tiene más resistencia. Valores aproximados de ρ a temperatura ambiente: plata 1,6 × 10⁻⁸ Ω·m, cobre 1,7 × 10⁻⁸, aluminio 2,8 × 10⁻⁸. Por eso el cobre es el material estándar de los cables: casi tan bueno como la plata, pero mucho más barato. El aluminio, más liviano, se usa en líneas de alta tensión.

## 3. Efecto de la temperatura

- En los **metales**, la resistividad **aumenta** con la temperatura, porque las vibraciones de la red dificultan el paso de los electrones.
- En los **semiconductores**, la resistividad **disminuye** al subir la temperatura, porque más electrones logran saltar la brecha.

Esta diferencia permite fabricar termistores, sensores de temperatura a base de semiconductores.

## 4. Semiconductores

El silicio es el semiconductor más usado, con una brecha de energía de alrededor de 1,1 eV. Su conductividad se controla mediante el **dopaje**: se agregan pequeñas cantidades de impurezas.

- **Tipo n**: se agrega un elemento con un electrón extra (por ejemplo, fósforo). Aporta electrones como portadores.
- **Tipo p**: se agrega un elemento con un electrón menos (por ejemplo, boro). Genera "huecos" que actúan como portadores positivos.

La unión de un material tipo n y uno tipo p da el diodo, y la combinación de varias uniones, el transistor. De ahí surge toda la electrónica.

## 5. Superconductores y dieléctricos

Algunos materiales, por debajo de una cierta **temperatura crítica**, pierden toda su resistencia eléctrica: son **superconductores**. El fenómeno fue descubierto por Heike Kamerlingh Onnes en 1911 en mercurio, a muy baja temperatura. Se usan en imanes de resonancia magnética.

Un **dieléctrico** es un aislante que se polariza bajo un campo eléctrico, lo que permite almacenar energía en un capacitor. Algunos materiales, como el cuarzo, son **piezoeléctricos**: generan una tensión al deformarse y se deforman al aplicarles tensión; se usan en relojes y encendedores.

## 6. Propiedades magnéticas

Según su respuesta a un imán, los materiales se clasifican en:

- **Diamagnéticos**: son levemente repelidos (cobre, agua).
- **Paramagnéticos**: son levemente atraídos (aluminio).
- **Ferromagnéticos**: son fuertemente atraídos y pueden conservar la magnetización. Son el hierro, el níquel y el cobalto, y sus aleaciones.

El ferromagnetismo se debe a **dominios**: regiones donde los momentos magnéticos de los átomos están alineados. Al magnetizar, los dominios se orientan en el mismo sentido. Por encima de la **temperatura de Curie** (unos 770 °C para el hierro) el material pierde su ferromagnetismo.

## 7. Materiales magnéticos blandos y duros

- **Blandos**: se magnetizan y desmagnetizan con facilidad y tienen pocas pérdidas. Se emplean en núcleos de transformadores y motores, con acero al silicio.
- **Duros**: conservan la magnetización y son los imanes permanentes. Ejemplos: ferritas, alnico, imanes de neodimio.

La curva de **histéresis** muestra cómo responde la magnetización al campo aplicado, y el área que encierra representa la energía perdida en cada ciclo.

## 8. Aplicaciones

Cables, contactos y conectores; resistencias y sensores; chips y paneles solares; transformadores, motores y generadores; almacenamiento de datos; resonancia magnética. Para elegir un material se tienen en cuenta la conductividad, el costo, el peso, la temperatura de uso y la resistencia a la corrosión.
