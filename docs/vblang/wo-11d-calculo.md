# WO-11d — Porting masivo: Cálculo (15 subtipos)

> Estado: implementado (10 de 15 subtipos). Habilita la rama basico
> de Cálculo en el DSL con `subtipoOriginal` preservado y equivalencia
> verificada contra el generador legado.

## 1. Contexto

`Calculo.ts` (15 subtipos). La mayoría de respuesta simbólica o
numérica — y la buena noticia es que `derivar(expr, var)` ya existe
(WO-11), aunque para los subtipos porteados (regla de la potencia
+ producto de binomios) la fórmula se precomputa en el DSL y
`derivar` queda como herramienta para las ramas intermedio/avanzado
pendientes.

**Rama portada:** sólo `basico` de cada subtipo. Las ramas
`intermedio` / `avanzado` son continuación mecánica con el mismo
patrón (`mismo PRNG → misma fórmula`, `sonEquivalentes` o
`tolerancia_abs`).

## 2. Capacidad usada

- **`derivar(expr, var)`** (WO-11) — disponible pero no usado en
  los 10 ports (la fórmula de los ports es precomputable). Será
  la herramienta principal para `reglas_derivacion` intermedio
  (cociente, cadena) y `derivadas_basicas` avanzado (orden
  superior).
- **`simplificar_expr(expr)`** (WO-11) — disponible. No usado
  en los ports (las fórmulas precomputadas ya están en forma
  canónica).
- **`evaluar_en(expr, var, valor)`** (WO-11) — disponible. No
  usado (los ports numéricos usan el patrón `tipo: input`).
- **`sonEquivalentes(a, b)`** — usado por las 4 ports simbólicas
  (con la normalización Unicode previa del generador).
- **`fraccion(p, q)`** (WO-8) — usado por `aplicaciones_integrales`
  para la respuesta exacta "1/6".

## 3. Plantillas portadas (10)

Archivo: `packages/vblang/src/templates/matematicas-calculo-oficiales.ts`.
Cada plantilla reproduce la FÓRMULA del subtipo (no la presentación):
6 numéricos + 4 simbólicos. Ver tabla en
`docs/vblang/porting-generadores.md` §Cálculo.

## 4. Gaps documentados (5 subtipos NO portados)

NO se hackearon. Documentados con la razón:

1. **`continuidad`** — MC conceptual fijo. Sin fórmula.
2. **`aplicaciones_derivadas`** — respuesta multi-statement
   ("x=0 y x=2.67"). math.js no parsea este formato.
3. **`ecuaciones_diferenciales`** — solución general con
   constante libre (C): "y = Ce^(kx)". math.js trata C como
   símbolo desconocido.
4. **`estadistica_inferencial`** — MC conceptual o intervalo
   string puro ("[77.28, 82.72]").
5. **`regresion_correlacion`** — MC conceptual (categoría de
   correlación: "fuerte", "moderada", "débil").

**Para retomar**: cada gap tiene una estrategia clara (comparador
`string` con `sonEquivalentes` trivial, partir en campos, etc.).
Son trabajos futuros, no bloqueantes para el resto del porting.

## 5. Decisiones de diseño

### 5.1 `integral_indefinida`: la "+C" se excluye de la respuesta

El generador produce `${sn}x^${exp} + C`. math.js no parsea
`x^3 + C` (C no es símbolo). La plantilla produce SOLO el
polinomio (`x^3` o `(2/3)*x^3`); la "+C" se documenta en la
explicación y en el enunciado. El test usa un hook
`transformGenerator: stripConstante` para limpiar la respuesta
del generador antes del CAS.

### 5.2 `derivadas_basicas`: la evaluación numérica se mueve a la explicación

El generador produce `f'(x) = 4x + 1; f'(2) = 9` (fórmula + eval).
La plantilla produce SOLO la fórmula `4*x+1`. La evaluación se
documenta en la explicación como "Evaluando en x = 2: f'(2) = 9".
El test extrae la fórmula de la respuesta del generador con
`transformGenerator: (ans) => ans.split(";")[0]...`.

Razón: el CAS no parsea multi-statement (`;` es separador en
math.js, no concat de expresiones). Si se quisiera la respuesta
completa, habría que partirla en dos campos separados en el
adapter (`fórmulaExpr` + `evalNum`), lo que es WO-11e+
(mejoras del adapter).

### 5.3 `distribuciones`: C(n,k) precomputada en matriz

`combinatoria(n, k)` no es builtin en el DSL. Solución ad-hoc:
matriz 2D indexada por `(n - 3, k)` con los 16 valores posibles
para `n ∈ [3, 6]`. Cubre exactamente el rango del generador. Si
se extiende, agregar el builtin `combinatoria(n, k)` (gap WO-8+).

### 5.4 Sin `derivar` en los ports

`derivar` está disponible pero no se usó. La razón: las fórmulas
de los 10 ports son precomputables en el DSL. Para subtipos
más complejos (cadena con fracciones, cociente, derivadas
sucesivas) el builtin entra como herramienta principal.

## 6. Verificación

- **Validez DSL**: `packages/vblang/tests/templates/matematicas-calculo-oficiales.test.ts`
  — 10 plantillas × 2 tests (parsea+valida 100 sims + genera
  respuesta correcta) = 22 tests, todos pasan.
- **Equivalencia**: `apps/web/src/generadoresV2/__tests__/calculo-equivalencia.spec.ts`
  — 10 cases × 2 mitades (generador+plantilla) con guard
  `toBeGreaterThan(5)`. 21 tests pasan.

## 7. Limitaciones

- Sólo rama `basico` de cada subtipo. Las ramas
  `intermedio` / `avanzado` siguen al generador legado. Son
  continuación mecánica con el mismo patrón.
- Las 4 ports simbólicas usan normalización Unicode (², ³, ·, −)
  previa al CAS — ver `normalizarMatematica` en el test
  (mismo helper que `algebra-equivalencia.spec.ts`).
- `distribuciones` está limitado a `n ∈ [3, 6]` y `p = 0.5` (rango
  del generador en basico). Extender requiere el builtin
  `combinatoria(n, k)`.

## 8. Pendiente

- 5 subtipos NO portados (gaps documentados §4).
- Ramas `intermedio` / `avanzado` de los 10 subtipos porteados
  (mayoría son continuación mecánica).
- Análisis (16 subtipos) — WO-11e (independiente).
- Cálculo/Análisis restantes en Cálculo.ts (5 subtipos + avanzado) —
  no incluidos en WO-11d (gaps explícitos).
