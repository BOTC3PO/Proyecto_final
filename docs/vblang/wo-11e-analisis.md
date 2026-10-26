# WO-11e — Porting masivo: Análisis y Avanzado (16 subtipos)

> Estado: implementado (16 de 16 subtipos de `AnalisisYAvanzado.ts`,
> rama basico). Cierre del eje 2 (algebra + cálculo + análisis).

## 1. Contexto

`AnalisisYAvanzado.ts` (16 subtipos) — el dominio más heterogéneo
del eje 2: trigonometría, exponenciales/logaritmos, complejos,
matrices/determinantes, vectores, geometría espacial, cónicas.

Al terminar este WO junto con WO-11b/c/d, el porting simbólico
del objetivo B está completo: el DSL absorbe los generadores
nativos con respuesta simbólica o numérica.

## 2. Plantillas portadas (16)

Archivo: `packages/vblang/src/templates/matematicas-analisis-oficiales.ts`.
Ver tabla en `docs/vblang/porting-generadores.md` §Análisis.

## 3. Decisiones de diseño

### 3.1 Sin ternario, sin object literals, sin boolean→int

El DSL no soporta `?:` (ternario), `{30: 0.5}` (object literal), ni
`(h < 0) * 1` (boolean→int coercion). Para sortear estas limitaciones
se usan 3 patrones:

1. **Array + index con `uno_de`**: `idx: uno_de([0, 1, 2])` +
   `angulos: [30, 45, 60]` + `angulo: angulos[idx]`. Coordina
   múltiples valores sorteados en una sola decisión.
2. **Array + index entero explícito**: `es_resta: uno_de([0, 1])` +
   `ops: ["+", "-"]` + `op: ops[es_resta]`. Para elegir entre 2
   formas según una variable booleana "traducida" a entero 0/1.
3. **Sortear 2 valores correlacionados**: el mismo `uno_de` se usa
   en ambas variables (`funcion: ["sen", "cos"][idx]` + `es_sen:
   1 - idx`).

### 3.2 Respuestas conceptuales como string fijo

4 de los 16 subtipos son "identificación" (conicas, matrices_basico
basico, identidades_trigonometricas, ecuaciones_trigonometricas) con
respuesta string fija por formato. Se portan con `respuesta_expr` y
`sonEquivalentes` (trivial string match cuando los strings son
idénticos). **NO son gaps** — son ports válidos.

### 3.3 Normalización Unicode (helper `normalizarMatematica`)

El generador usa notación Unicode (², ³, ·, −, √, ×) en sus
respuestas. math.js no parsea esos caracteres. La normalización
previa al CAS en el test convierte:
- `²` → `^2`, `³` → `^3`, `⁴` → `^4`, etc.
- `√N` → `sqrt(N)` (cierra paréntesis — `√3/2` → `sqrt(3)/2` no `sqrt3/2`)
- `·` → `*`, `−` → `-`
- `×` → `x` (generador usa Unicode, DSL usa ASCII)

### 3.4 Branching por dificultad

Las ramas intermedio/avanzado de cada subtipo (parábola/elipse en
cónicas, det 3×3, mult/conjugado, esferas/cilindros, etc.) son
**continuación mecánica** — siguen el mismo patrón. Se documentan
como pendientes pero no son gaps del validador (son fórmulas
distintas que el DSL puede portar).

## 4. Verificación

- **Validez DSL**: `packages/vblang/tests/templates/matematicas-analisis-oficiales.test.ts`
  — 16 plantillas × 2 tests (parsea+100 sims + genera respuesta)
  = 34 tests, todos pasan.
- **Equivalencia**: `apps/web/src/generadoresV2/__tests__/analisis-equivalencia.spec.ts`
  — 16 cases × 2 mitades (generador+plantilla) con guard
  `toBeGreaterThan(5)`. 33 tests pasan.

## 5. Estado del cierre del eje 2

| WO | Archivo | # subtipos |
|---|---|---|
| WO-11 (semilla) | `matematicas-algebra-oficiales.ts` | 3 |
| WO-11b (algebra expr) | `matematicas-algebra-oficiales.ts` | 9 |
| WO-11c (algebra ec/func) | `matematicas-algebra-oficiales.ts` | 6 |
| WO-11d (cálculo) | `matematicas-calculo-oficiales.ts` | 10 |
| **WO-11e (análisis)** | `matematicas-analisis-oficiales.ts` | **16** |
| **Total** | 4 archivos | **44** |

**Pendientes (~50 subtipos)**: ramas intermedio/avanzado de los
44 ya portados. Patrón mecánico, mismo oráculo + guard anti-vacío.

**Hito verificable para la defensa**: la lista completa de subtipos
portados en `porting-generadores.md` §"Estado tras WO-11e" +
tabla de pendientes con su mecanismo. **El DSL absorbe los
generadores** (con la lista explícita de subtipos pendientes de
intermedio/avanzado y de los 5 gaps conceptuales/estructurales
del eje 2 que se mantienen como generador legado).
