# Materiales — Materiales compuestos: fibras y matrices (teoría)

> Tema del MAPA: `materiales/materiales-compuestos-fibras-y-matrices`. Depende de `familias-de-materiales-metales-ceramicos-polimeros-compuestos/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Qué es un compuesto, qué fibras y matrices se usan y cómo se estima su rigidez con la regla de las mezclas.

---

## 1. La idea de un compuesto

Un **material compuesto** combina dos o más materiales distintos, a escala macroscópica, para obtener propiedades que ninguno tiene por sí solo. La naturaleza lo hace desde siempre: la madera es un compuesto de fibras de celulosa en una matriz de lignina, y el hueso, de colágeno y mineral. En ingeniería, el hormigón armado, la fibra de vidrio y la fibra de carbono son ejemplos conocidos.

Todo compuesto tiene al menos dos partes:

- **Matriz**: el material continuo que rodea y une al refuerzo. Transmite las cargas, protege las fibras del ambiente y les da forma. Puede ser un polímero (epoxi, poliéster), un metal (aluminio) o un cerámico.
- **Refuerzo**: el material que aporta rigidez y resistencia, en forma de fibras, partículas u hojuelas.

## 2. Tipos según el refuerzo

- **Particulados**: partículas dispersas en la matriz. El hormigón (grava y arena en cemento) es el ejemplo más difundido.
- **Reforzados con fibras**: fibras largas o cortas embebidas en la matriz. Son los de mayor desempeño estructural.
- **Estructurales**: capas o paneles combinados, como los laminados y los paneles sándwich (dos láminas finas separadas por un núcleo liviano de nido de abeja o espuma).

## 3. Las fibras más usadas

- **Fibra de vidrio**: económica, resistente y aislante. Es la más usada. Se utiliza en cascos de barcos, tanques, tubos y carrocerías.
- **Fibra de carbono**: muy rígida y resistente con densidad baja. Es cara. Se la usa en aviación, automovilismo, bicicletas y artículos deportivos.
- **Fibra de aramida** (Kevlar): muy tenaz y resistente al impacto. Se usa en chalecos antibalas y cuerdas.

## 4. Anisotropía: la dirección importa

Las fibras trabajan mejor cuando la carga actúa a lo largo de ellas. En la dirección perpendicular, la resistencia depende sobre todo de la matriz, que es mucho más débil. Entonces el compuesto es **anisótropo**: sus propiedades cambian con la dirección. Los diseñadores orientan las fibras según las cargas. Un **laminado** apila capas con distintas orientaciones (por ejemplo 0°, 90° y ±45°) para obtener resistencia en varias direcciones.

## 5. La regla de las mezclas

Permite estimar el módulo de elasticidad de un compuesto con fibras continuas a partir de los de sus componentes, con Vf la fracción en volumen de fibra y Vm = 1 − Vf la de matriz.

- **Carga paralela a las fibras** (se deforman igual): E = Vf · Ef + Vm · Em
- **Carga perpendicular a las fibras**: 1/E = Vf/Ef + Vm/Em

Ejemplo: fibra de carbono con Ef = 230 GPa en matriz epoxi con Em = 3,5 GPa, con 60 % de fibra. En paralelo: E = 0,6 · 230 + 0,4 · 3,5 = 139,4 GPa. En perpendicular, el resultado es de apenas unos 8,5 GPa. La diferencia entre ambos valores muestra cuánto importa la orientación.

## 6. Ventajas y desventajas

Ventajas:

- Excelente relación resistencia-peso y rigidez-peso.
- No se corroen como los metales.
- Permiten formas complejas en una sola pieza y propiedades diseñadas a medida.

Desventajas:

- Costo mayor, sobre todo el carbono.
- Anisotropía y comportamiento más difícil de predecir.
- Fallas particulares, como la **delaminación**: separación entre capas.
- Difíciles de reparar y de reciclar, en especial con matrices termoestables.
- Sensibles a impactos que dejan daño interno poco visible.

## 7. Procesos de fabricación

Los más comunes: laminado manual con resina, moldeo con bolsa de vacío, infusión de resina, preimpregnados curados en autoclave, enrollado de filamento (tanques y tubos) y pultrusión (perfiles continuos).

## 8. Aplicaciones

Aviones modernos, palas de aerogeneradores, cascos de embarcaciones, tanques de combustible, bicicletas, cañas de pescar, palos de golf y refuerzos de estructuras de hormigón. En cada caso se busca bajar peso o aumentar rigidez sin pagar el costo que implicaría un metal más pesado.
