# Ciencia de datos — Probabilidad aplicada (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../estadistica-descriptiva/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/ciencia-de-datos/probabilidad-aplicada/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es la probabilidad

La **probabilidad** mide **qué tan posible** es que ocurra un **suceso** (evento), con un número **entre 0 y 1** (o 0 % y 100 %):

- **0:** **imposible**.
- **1:** **seguro**.
- **0,5:** igual de probable que no.

**Experimento aleatorio:** un proceso con **resultados inciertos** (tirar un dado). **Espacio muestral:** el conjunto de **todos los resultados posibles**. **Suceso:** un subconjunto de resultados.

Si todos los resultados son **igualmente probables**:

**P(suceso) = casos favorables ÷ casos posibles**

Ejemplo: con un dado, **P(par)** = 3/6 = **0,5**; **P(mayor que 4)** = 2/6 ≈ **0,33**.

**Enfoque de frecuencias:** la probabilidad es lo que **se acerca la frecuencia relativa** al repetir **muchas veces** (ley de los grandes números).

---

## 2. Reglas básicas

- **Complemento:** P(no A) = 1 − P(A). Si P(llueve) = 0,3, P(no llueve) = **0,7**.
- **Sucesos excluyentes** (no pueden ocurrir juntos): P(A **o** B) = P(A) + P(B). Dado: P(1 o 2) = 1/6 + 1/6 = **1/3**.
- **Suma general:** P(A o B) = P(A) + P(B) − P(A y B).
- **Sucesos independientes** (uno no afecta al otro): P(A **y** B) = P(A) × P(B). Dos monedas: P(dos caras) = 0,5 × 0,5 = **0,25**.

---

## 3. Probabilidad condicional

**P(A | B):** la probabilidad de **A sabiendo que ocurrió B**.

**P(A | B) = P(A y B) ÷ P(B)**

Dos sucesos son **independientes** si P(A | B) = P(A): **saber B no cambia** la probabilidad de A.

Ejemplo (sin reposición): una bolsa con 3 bolitas rojas y 2 azules. P(sacar roja y luego roja) = 3/5 × 2/4 = **0,3**; la segunda saca depende de la primera.

---

## 4. Teorema de Bayes

Permite **actualizar** una probabilidad con **nueva evidencia**:

**P(A | B) = P(B | A) × P(A) ÷ P(B)**

**Ejemplo clásico:** una enfermedad afecta al **1 %** de las personas. Un test detecta al **99 %** de los enfermos y da **falso positivo** en el **1 %** de los sanos. Si el test da **positivo**, ¿cuál es la probabilidad de estar enfermo?

En **10.000** personas: **100** enfermos (99 positivos) y **9.900** sanos (**99** falsos positivos). Entre los **198** positivos, **99** están enfermos: **50 %**.

**Lección:** un test "muy bueno" **no** implica que un positivo sea casi seguro. Importa la **prevalencia** (la probabilidad **previa**). Por eso se **confirman** los positivos con otro estudio.

---

## 5. Variables aleatorias y esperanza

- Una **variable aleatoria** asigna un **número** a cada resultado (la suma de dos dados).
- **Valor esperado (esperanza):** el **promedio a largo plazo**: **Σ valor × probabilidad**.

Dado: (1+2+3+4+5+6) / 6 = **3,5**. No es un valor que salga: es el **promedio a largo plazo**.

**Juego:** pagás **$3** por tirar; si sale **6**, ganás **$12**; si no, nada. Esperanza de la **ganancia**: (1/6 × 12) + (5/6 × 0) − 3 = 2 − 3 = **−1**. **En promedio perdés $1** por jugada. Un juego es **justo** si la esperanza es 0. **El casino siempre tiene esperanza a favor.**

---

## 6. Distribuciones frecuentes

- **Binomial:** cantidad de **éxitos** en **n intentos independientes**, con probabilidad **p** de éxito (cuántas caras en 10 monedas).
- **Normal (campana):** muchos fenómenos (alturas, errores de medición) se agrupan **alrededor de un valor central**. **68 % - 95 % - 99,7 %** a ±1, ±2 y ±3 desviaciones.
- **Uniforme:** todos los valores **igualmente probables** (un dado).
- **Poisson:** cantidad de **eventos raros** por unidad de tiempo (llamadas por hora).

---

## 7. Errores comunes (sesgos)

- **Falacia del jugador:** creer que tras **5 caras seguidas** "toca cruz". **La moneda no tiene memoria**: sigue siendo 0,5.
- **Confundir P(A|B) con P(B|A):** "si es culpable, hay evidencia" **no es** "si hay evidencia, es culpable" (**falacia del fiscal**).
- **Ignorar la prevalencia** (como en el ejemplo del test).
- **Pensar que lo improbable es imposible** (**ganar la lotería** le pasa a **alguien**).
- **Coincidencias:** con **muchísimas** personas y situaciones, **las rarezas ocurren**.
- **Muestras pequeñas** dan resultados **inestables**.

---

## 8. En la práctica

Se usa para **evaluar riesgos** (seguros, clima, salud), **probar medicamentos**, **detectar fraudes**, **filtrar correo no deseado** (Bayes), **calcular probabilidades de aprobación**, **simular** (Monte Carlo) y **decidir con incertidumbre**. **Una probabilidad no dice qué pasará**, **dice con qué frecuencia** ocurriría **si se repitiera** muchas veces.
