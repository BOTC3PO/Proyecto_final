# Matemática — Ecuaciones diferenciales: modelos básicos de crecimiento/decaimiento (teoría)

> Tema del MAPA: `A17` (Tronco 2 — Algebraico, cierre del tronco).
> Depende de `../integral/` y `../familias-exponencial-logaritmica/`
> (ver `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

**`Presentación`**: varias secciones separables (qué es una ecuación
diferencial, el modelo de crecimiento/decaimiento, verificar la
solución, vida media, errores comunes).

---

## Qué es una ecuación diferencial

Una **ecuación diferencial** es una ecuación que relaciona una función
con su **derivada** (o derivadas). En vez de preguntar "¿cuánto vale y?",
pregunta "¿cómo tiene que cambiar y para que se cumpla esta relación?".

## El modelo más importante: crecimiento proporcional a lo que ya se tiene

```
dy/dt = k·y
```

Esta ecuación dice: "la **velocidad** a la que crece (o decrece) y es
proporcional a la cantidad de y que ya hay". Es el modelo detrás de
poblaciones, interés compuesto, y decaimiento radiactivo — todos
comparten la misma estructura matemática.

**Su solución** (la función y(t) que cumple esa relación) es siempre una
función **exponencial**:

```
y(t) = y₀ · a^t
```

donde y₀ es la cantidad inicial (en t=0) y a determina si crece o decae
(ver `../familias-exponencial-logaritmica/`):

- **a > 1**: crecimiento (k>0 en la ecuación diferencial).
- **0 < a < 1**: decaimiento (k<0 en la ecuación diferencial).

## Por qué la solución es exponencial

Ya se sabe (de `../derivada/`) que la exponencial es la única familia de
funciones cuya derivada es, otra vez, proporcional a sí misma — es
exactamente lo que pide la ecuación dy/dt=ky. Por eso, cada vez que un
fenómeno crece "proporcional a lo que ya tiene", el modelo que lo
describe es exponencial, no lineal ni cuadrático.

## Verificar la solución (versión discreta)

Sin necesitar derivar formalmente, se puede verificar la idea de
"crecimiento proporcional" de forma discreta: la **razón** entre dos
valores consecutivos de y (un período después) tiene que ser siempre la
misma constante a:

```
y(t+1) / y(t) = a      (constante, para cualquier t)
```

## Vida media y tiempo de duplicación

- **Tiempo de duplicación**: cuánto tarda y en llegar a 2×y₀ (crecimiento).
- **Vida media**: cuánto tarda y en llegar a y₀/2 (decaimiento).

Se calculan resolviendo una ecuación exponencial (ver
`../ecuaciones-exponenciales-logaritmicas/`): y₀·aᵗ = 2y₀ → aᵗ=2 →
t = logₐ(2).

## Ejemplo resuelto

**Una población de 100 bacterias se duplica cada hora. ¿Cuántas hay
después de 4 horas?**

y(t) = 100×2ᵗ → y(4) = 100×16 = 1600 bacterias.

**¿Cuánto tarda en llegar a 800?**

100×2ᵗ = 800 → 2ᵗ = 8 → t = 3 horas.

## Errores comunes

- Confundir "y es proporcional a t" (lineal, y=kt) con "la TASA DE
  CAMBIO de y es proporcional a y" (exponencial, dy/dt=ky) — son modelos
  completamente distintos.
- Asumir que k negativo significa que y se vuelve negativa — en
  realidad, con k<0 (decaimiento), y se acerca a 0 sin cruzarlo nunca
  (misma asíntota horizontal de la exponencial).
- Calcular la vida media sumando en vez de usar logaritmos (el tiempo
  para llegar a la mitad no es "la mitad del tiempo total" de nada en
  particular, se despeja de la ecuación exponencial).
- Olvidar verificar que y₀ (la cantidad inicial) esté bien identificada
  antes de armar el modelo.
