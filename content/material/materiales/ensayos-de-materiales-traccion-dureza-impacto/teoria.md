# Materiales — Ensayos de materiales: tracción, dureza e impacto (teoría)

> Tema del MAPA: `materiales/ensayos-de-materiales-traccion-dureza-impacto`. Depende de `plasticidad-y-punto-de-fluencia/` y `../ingenieria/ensayo-y-medicion/` (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — Qué miden los ensayos de tracción, dureza e impacto y cómo se interpretan sus resultados.

---

## 1. Para qué se ensayan los materiales

Las propiedades de un material no se adivinan: se miden. Un **ensayo normalizado** es una prueba que se realiza siguiendo un procedimiento definido por una norma, de modo que los resultados de distintos laboratorios sean comparables. Las normas más usadas en el mundo son las ASTM y las ISO, y en la Argentina las IRAM. No hace falta memorizar sus números: lo importante es saber qué mide cada ensayo y cómo se interpretan los resultados.

## 2. Ensayo de tracción

Es el más importante. Una probeta de forma y dimensiones normalizadas se sujeta en una máquina que la estira a velocidad constante mientras registra la fuerza y el alargamiento. Con esos datos se construye la **curva tensión-deformación**:

- **Tensión de ingeniería** σ = F / A0, con A0 el área inicial de la sección.
- **Deformación** ε = ΔL / L0, con L0 la longitud inicial de referencia.

De la curva se obtienen las propiedades:

- **Módulo de elasticidad (E)**: la pendiente de la zona lineal. Mide la rigidez.
- **Límite elástico o de fluencia (σy)**: la tensión donde empieza la deformación permanente. En materiales sin fluencia marcada se usa el 0,2 % de deformación.
- **Resistencia a la tracción (σu)**: la tensión máxima de la curva.
- **Alargamiento a la rotura**: A% = (Lf − L0) / L0 × 100. Mide la ductilidad.
- **Reducción de área**: Z% = (A0 − Af) / A0 × 100, también medida de ductilidad.

## 3. Ensayos de dureza

La dureza es la resistencia de la superficie a ser penetrada o rayada. Los ensayos clavan un indentador con una carga conocida y miden la huella o la profundidad:

- **Brinell (HB)**: bola de acero o carburo; mide el diámetro de la huella. Para materiales blandos y piezas grandes.
- **Rockwell (HRB, HRC)**: mide la profundidad de penetración, de lectura directa. La escala C usa un cono de diamante y es la habitual para aceros endurecidos.
- **Vickers (HV)**: pirámide de diamante; sirve para cualquier material y para capas finas.

Son rápidos, baratos y casi no destruyen la pieza. Además hay una relación aproximada entre la dureza y la resistencia a la tracción en los aceros, de modo que sirven para estimarla.

## 4. Ensayo de impacto Charpy

Mide la tenacidad bajo carga súbita. Un péndulo golpea una probeta con una entalla en V y se mide la **energía absorbida** (en julios) hasta romperla. Mucha energía absorbida indica un material tenaz; poca, uno frágil. Repetido a distintas temperaturas muestra la **transición dúctil-frágil**: muchos aceros, que a temperatura ambiente son tenaces, se vuelven frágiles en frío. Fue un factor en roturas de barcos y puentes soldados en climas fríos.

## 5. Otros ensayos

- **Flexión** y **compresión**, importantes en cerámicos y hormigón.
- **Fatiga**: cargas repetidas hasta la falla.
- **Fluencia lenta**: carga constante a alta temperatura durante mucho tiempo.
- **Ensayos no destructivos**: ultrasonido, líquidos penetrantes, partículas magnéticas y radiografía, que detectan defectos sin dañar la pieza.

## 6. Cómo interpretar los resultados

Un solo valor no alcanza. Conviene mirar varias probetas, calcular el promedio y la dispersión, y comprobar que el ensayo se haya hecho con el equipo calibrado y las probetas bien preparadas. Un resultado fuera de lo esperado puede deberse a un defecto del material o a un error en el ensayo.

## 7. Seguridad

La rotura de una probeta puede proyectar fragmentos. Las máquinas tienen protecciones que deben usarse, y el personal debe usar lentes y seguir los procedimientos.
