# WO-7 / WO-7b / WO-7c — Porting de generadores paramétricos → plantillas DSL

Proceso reproducible para reemplazar un subtipo PARAMÉTRICO de los generadores
nativos (`apps/web/src/generadoresV2/<materia>/<Clase>.ts`) por una **plantilla
VBLang oficial**, dejando el generador como **resolutor de legado congelado**.

Es el destino 1 de la sección 4 del alcance: que el DSL haga lo que hacen los
generadores. NO aplica a los subtipos **BANCO** (esos van al banco de preguntas,
WO-6) — sólo a **PARAMÉTRICO** / **PARAMETRIZABLE** según
`docs/AUDITORIA_GENERADORES.md`.

---

## 1. El proceso, paso a paso

Para cada subtipo a portar:

1. **Leer la lógica del generador.** Ubicar `genX(dificultad)` en su `Clase.ts`.
   Anotar, por rama de dificultad: rangos de los inputs (`randInt`/`pickOne`),
   la fórmula de la respuesta correcta, y el texto del enunciado.
2. **Elegir la rama a portar.** Muchos subtipos cambian de FÓRMULA por
   dificultad (p. ej. `potencias` basico = `b^n`, avanzado = potencia de
   potencia). Cada fórmula distinta es un port distinto. Empezar por la rama de
   mayor uso (normalmente `basico`/`intermedio`).
3. **Escribir la plantilla** en `packages/vblang/src/templates/<materia>-...-oficiales.ts`
   como un `PlantillaOficial` (ver `templates/types.ts`):
   - `variables:` sortea los inputs con los **mismos rangos** que el generador
     (`random(min,max)`, `uno_de([...])`), y computa la respuesta con la fórmula.
   - `respuesta:` + `tipo:` (`input` para numérico) + `tolerancia_abs:`.
   - `enunciado:`, `pasos:`, `explicacion:` interpolando las variables.
   - `subtipoOriginal:` = el subtipo del generador (vínculo de legado).
4. **Registrar** el array exportándolo desde `packages/vblang/src/index.ts`.
   (El sembrado como `PlantillaEjercicio` con `owner = SYSTEM_OWNER_ID` sigue el
   patrón F6-01/F6-04; fuera del alcance de WO-7, que sólo define el contenido.)
5. **Verificar** (sección 2). Sin el test de equivalencia, el port NO se da por
   bueno.

### NO HACER
- ❌ No borrar el generador original (resuelve contenido viejo vía `subtipoOriginal`).
- ❌ No inventar builtins para forzar un port. Si no entra con los builtins
  actuales, anotarlo en la sección 4 (insumo de WO-8) — no hackearlo.
- ❌ No portar subtipos BANCO (van a WO-6).

---

## 2. Contrato de verificación: ORÁCULO COMPARTIDO

`generate()` de VBLang **sortea su propia aleatoriedad** y no acepta inyección
de inputs; el generador nativo usa otro PRNG. Por eso "misma seed → mismos
inputs" es imposible entre ambos, y el contrato no puede ser una comparación
bit-a-bit. El contrato honesto es:

> Una **fórmula pura `F(inputs) → respuesta`** (la matemática del subtipo),
> encarnada UNA sola vez en el test, que **tanto el generador real como la
> plantilla real** deben satisfacer sobre sus **propios** inputs sorteados.

Implementación de referencia: `apps/web/src/generadoresV2/__tests__/porting-equivalencia.spec.ts`
(vive en `apps/web` porque necesita importar el generador **y** el runtime de
`@vb/vblang`). Por subtipo se define:

- `oracle(inputs)` — la fórmula compartida.
- `inputsFromGenerator(enunciado)` — extrae los inputs del enunciado del
  generador (y devuelve `null` para variantes no portadas, que se saltean).
- `inputsFromTemplate(result.variables)` — lee los inputs ya sorteados por el
  DSL.

Y se corre, sobre N seeds:

- **Generador real ≡ oráculo:** `AritmeticaGenerator.generarEjercicio(...)`,
  respuesta correcta = `opciones[indiceCorrecto]`, comparada con `oracle(inputs)`.
- **Plantilla real ≡ oráculo:** `generate(compile(parse(dsl)), {seed})`,
  `result.respuesta` comparada con `oracle(result.variables)`.

Si AMBAS mitades pasan, la plantilla reproduce la fórmula del generador. Además
se exige un **mínimo de coincidencias** en la mitad del generador para que el
test no pase en vacío.

> **Nota de entorno:** el runtime usa `mathjs` (`createIsolatedMath`). En CI
> existe vía `pnpm install`; el symlink workspace `apps/web/node_modules/@vb/vblang`
> también lo crea `pnpm install`. En un sandbox sin esas piezas hay que
> instalarlas para correr la mitad de plantilla del test.

Complemento: cada archivo de plantillas tiene además un test de **validez DSL**
en `packages/vblang/tests/templates/` (pipeline `parse→lint→compile→validate`
con 100 simulaciones), que verifica que el DSL es válido aunque no compara con
el generador.

---

## 3. Batch portado en WO-7 (Matemáticas / Aritmética)

Archivo: `packages/vblang/src/templates/matematicas-aritmetica-oficiales.ts`.
Todos contra `AritmeticaGenerator`, fórmula numérica (`tipo: input`):

| subtipoOriginal     | rama       | fórmula portada                 | builtins |
|---------------------|------------|---------------------------------|----------|
| `potencias`         | basico     | `b^n`                           | `^`      |
| `unidades_medida`   | basico     | `valor × factor` (6 conv.)      | `uno_de` |
| `regla_tres`        | basico     | directa `(b·c)/a`               | `redondear` |
| `sucesiones`        | basico     | aritmética `a₁+(n−1)·d`         | —        |
| `series_simples`    | basico     | aritmética `n/2·(a₁+aₙ)`        | `redondear` |
| `angulos`           | intermedio | complementario/suplementario `tope−a` | `uno_de` |
| `coordenadas_plano` | intermedio | distancia `√(Δx²+Δy²)`          | `sqrt`, `^` |

Verificado por `porting-equivalencia.spec.ts` (generador ≡ oráculo ≡ plantilla).

## 3b. Batch portado en WO-7b

Aritmética (sigue en `matematicas-aritmetica-oficiales.ts`): los 14 subtipos
restantes de `Aritmetica.ts`, total 22 plantillas. Física (Cinemática): 5
subtipos en `fisica-cinematica-oficiales.ts`.

### Aritmética (WO-7b)

| subtipoOriginal                  | rama       | fórmula portada                            | builtins |
|----------------------------------|------------|--------------------------------------------|----------|
| `operaciones_basicas`            | basico     | `a + b` (la plantilla fija `+`)            | —        |
| `operaciones_combinadas`         | basico     | `a + b + c` (sin paréntesis significativos) | —       |
| `porcentaje`                     | basico     | `pct/100 × base` (inc=0)                  | `uno_de` |
| `proporcionalidad`               | basico     | `y = k·x` directa (incógnita = y)          | —        |
| `perimetro_area`                 | basico     | cuad/rect × área/perímetro (4 casos)       | `uno_de` |
| `decimales`                      | basico     | `a + b` con 1 decimal                      | `random_float`, `redondear` |
| `raices`                         | basico     | `√n` exacto (n ∈ {4, 9, 16, ..., 100})     | `sqrt`   |
| `divisibilidad`                  | basico     | `MCD(a,b)` o `MCM(a,b)` (sorteo 50/50)     | `mcd`, `mcm` |
| `multiplos_divisores`            | basico     | `largo(divisores(x))` (cuántos)            | `divisores`, `largo` |
| `enteros_negativos`              | basico     | `|n|` (valor absoluto)                     | `abs`    |
| `fracciones`                     | basico     | `(n1+n2)/den` simplificado                 | `fraccion` |
| `numeros_primos`                 | basico     | `es_primo(n)` (respuesta `vf`)             | `es_primo`, `divisores` |
| `estadistica_basica_media`       | basico     | `media(datos)`                             | `promedio` |
| `estadistica_basica_mediana`     | intermedio | `mediana(datos)` (forzando un valor repetido) | `mediana` |
| `estadistica_basica_moda`        | intermedio | `moda(datos)` (forzando un valor repetido, sin empates) | `moda` |

`numeros_primos` tiene respuesta booleana (tipo `vf`): el harness de números
no la cubre; queda validada por el test de validez DSL (100 sims sin
errores) en `matematicas-aritmetica-oficiales.test.ts`.

### Física — Cinemática (WO-7b)

Archivo: `packages/vblang/src/templates/fisica-cinematica-oficiales.ts`.
Verificado por `apps/web/src/generadoresV2/__tests__/porting-fisica-equivalencia.spec.ts`.

| subtipoOriginal             | rama       | fórmula portada                  | builtins |
|-----------------------------|------------|----------------------------------|----------|
| `MRU`                       | basico     | `d = v·t`                        | —        |
| `MRUV`                      | basico     | `vf = v0 + a·t`                  | —        |
| `caida_libre`               | basico     | `v = g·t` (g = 9.8 de `CONSTANTES_GLOBALES`) | — |
| `relacion_distancia_tiempo` | basico     | 3 variantes (encontrar d, v o t) | `uno_de` |
| `conversion_unidades`       | basico     | `m/s ↔ km/h` (factor 3.6)        | `uno_de` |

### Física — Las 6 áreas restantes (WO-7b-ext)

Archivos: 6 archivos en `packages/vblang/src/templates/fisica-<area>-oficiales.ts`
(Dinámica, Electricidad, Energía, Ondas, Fluidos, Termodinámica), cada uno con
sus plantillas y `subtipoOriginal` apuntando al generador legado
(`apps/web/src/generadoresV2/fisica/<Clase>.ts`). Verificados por 6 archivos
de equivalencia uno por área en
`apps/web/src/generadoresV2/__tests__/porting-fisica-<area>-equivalencia.spec.ts`
(oráculo compartido generador real ≡ oráculo ≡ plantilla real, con guard
anti-vacío `toBeGreaterThan(5)`).

23 plantillas en total (todas rama `basico`):

| subtipoOriginal                  | área         | fórmula portada                                  | builtins       |
|----------------------------------|--------------|--------------------------------------------------|----------------|
| `peso`                           | Dinámica     | `P = m·g` (2 variantes: P / m)                   | —              |
| `friccion`                       | Dinámica     | `Fr = μ·N` (3 variantes: Fr / μ / N)             | `redondear`    |
| `plano_inclinado`                | Dinámica     | `F = m·g·sin(θ)`                                 | `sin_deg`      |
| `ley_hooke`                      | Dinámica     | `F = k·x` (3 variantes: F / k / x)               | —              |
| `ley_ohm`                        | Electricidad | `V = I·R` (3 variantes: V / I / R)               | `redondear`    |
| `potencia_electrica`             | Electricidad | `P = V·I`                                        | —              |
| `consumo_electrico`              | Electricidad | `E = (P·t)/1000` [kWh]                           | `redondear`    |
| `trabajo_mecanico`               | Energía      | `W = F·d·cos(θ)` (θ ∈ {0°, 30°, 45°, 60°})       | `cos_deg`      |
| `energia_cinetica`               | Energía      | `Ec = ½·m·v²`                                    | —              |
| `energia_potencial`              | Energía      | `Ep = m·g·h`                                     | —              |
| `conservacion_energia`           | Energía      | `v = √(2·g·h)`                                   | `sqrt`         |
| `potencia_mecanica`              | Energía      | `P = W/t`                                        | `redondear`    |
| `velocidad_ondas`                | Ondas        | `v = f·λ` (3 variantes: v / f / λ)               | `redondear`    |
| `longitud_onda`                  | Ondas        | `λ = v/f` (2 variantes, v aire/agua)             | `redondear`    |
| `frecuencia_periodo`             | Ondas        | `f = 1/T` (2 variantes: f desde T / T desde f)   | `redondear`    |
| `densidad`                       | Fluidos      | `ρ = m/V` (3 variantes: ρ / m / V)               | `redondear`    |
| `presion`                        | Fluidos      | `P = F/A` (3 variantes: P / F / A)               | `redondear`    |
| `presion_hidrostatica`           | Fluidos      | `P = ρ·g·h` (ρ ∈ {1000, 1025})                   | `uno_de`       |
| `caudal`                         | Fluidos      | `Q = A·v`                                        | `redondear`    |
| `calor`                          | Termodinámica | `Q = m·c·ΔT` (3 variantes, 4 metales)           | `uno_de`       |
| `conversion_temperatura`         | Termodinámica | 4 direcciones (°C↔°F, °C↔K)                       | `uno_de`       |
| `cambios_estado`                 | Termodinámica | `Q = m·L` (fusión / vaporización)                 | `uno_de`       |
| `dilatacion_termica`             | Termodinámica | `ΔL = L₀·α·ΔT` (3 metales)                        | `uno_de`       |

**Gaps documentados (no se forzaron, quedan como insumo WO-8):**

- `suma_fuerzas` (Dinámica): array de tamaño variable (`fuerzas: number[]`
  con 2-3 elementos sorteados) — no entra con los builtins actuales.
- `resistencia_serie` (Electricidad): `Rt = ΣRi` con array variable.
- `resistencia_paralelo` (Electricidad): `1/Rt = Σ(1/Ri)` con array variable.

**Notas técnicas del porting (extiende §Limitaciones):**

- **`g` global vs `G = 9.8` del generador:** el DSL provee `g = 9.80665`
  en `CONSTANTES_GLOBALES`, pero los generadores de Física hardcodean
  `G = 9.8` en su `.ts`. Las plantillas que usan gravedad (`peso`,
  `plano_inclinado`, `energia_potencial`, `conservacion_energia`,
  `presion_hidrostatica`) hardcodean `9.8` explícito en la fórmula
  para que el match generador↔plantilla sea exacto dentro de la
  tolerancia requerida por el oráculo.
- **Drift de redondeo en variantes con 3 incógnitas (ley_ohm, ley_hooke,
  velocidad_ondas, etc.):** el generador computa la respuesta con la
  fórmula (no devuelve el valor pre-sorteado de la incógnita). Las
  plantillas reproducen esto computando desde la fórmula en el array
  `respuestas:` (p. ej. `[R * I, I, redondear(V/I, 3)]` en lugar de
  `[V, I, R]`), absorbiendo el drift de redondeo dentro de la tolerancia
  del oráculo. Sin esta convención, la tolerancia tendría que ser ~10×
  más generosa.
- **Bug de enunciado en `densidad` (generador):** el generador muestra
  `masaKg.toFixed(2)` y `(densidad * 1000).toFixed(1)` en el enunciado
  pero usa los valores SIN redondear en la respuesta (drift ~1-50).
  El test de equivalencia usa `tol: 5` para `densidad` y `tol: 0.005`
  para `caudal` para tolerar esta imprecisión del generador legacy.
  NO se arregla el generador en este WO (fuera de scope).
- **Arrays multi-línea rompen el parser:** la sintaxis `[a, b,\n c]`
  con cada elemento en su propia línea NO parsea (el lexer confunde
  el `c` con un identificador de bloque). Hay que poner arrays de
  objetos en una sola línea: `[{ a: 1 }, { a: 2 }]`.

### Limitaciones del DSL que aparecieron en WO-7b

Durante el porting se encontraron 3 restricciones del DSL que no estaban
documentadas y requirieron workarounds:

1. **Sin operador ternario (`?:`):** el lexer falla con "Carácter inesperado
   '?'" en cualquier contexto (incluso dentro de strings interpolados). Las
   plantillas que necesitan elegir entre 2 o más ramas precomputan todas
   las variantes en un array de objetos y seleccionan con `uno_de(...)`,
   accediendo al campo elegido con array access por índice.
2. **Sin interpolación dentro de variables:** la interpolación `{var}` solo
   funciona en los bloques `enunciado:`, `pasos:`, `explicacion:`, `unidad:`
   y similares. Los strings que se guardan como variables NO se interpolan
   automáticamente. Para construir strings con variables, hay que usar
   concatenación explícita: `s: "resultado = " + x + " unidades"`.
3. **Keywords reservados:** los nombres de bloque (`unidad`, `pasos`,
   `explicacion`, `metadata`, etc.) y los operadores (`y`, `o`, `no`) son
   palabras reservadas — no se pueden usar como nombres de variable.

---

## 4. Continuación enumerada (trabajo mecánico) — ESTADO POST-WO-7c

### `Aritmetica.ts` (30 plantillas tras WO-7c)

Tras WO-7b los 21 subtipos de `Aritmetica.ts` tenían al menos una
plantilla. **WO-7c agregó 8 plantillas de 3ª ola** (ramas intermedio/
avanzado que ahora entran con los builtins de WO-8):

- `divisibilidad` intermedio: MCD/MCM con max=100.
- `divisibilidad` avanzado: MCD/MCM anidado con 3 números.
- `numeros_primos` avanzado: MCD/MCM vía factorización.
- `fracciones` intermedio: denominadores distintos, 4 ramas separadas
  (`+`, `−`, `×`, `÷`).
- `fracciones` avanzado: número mixto + simplificación.

**Total: 30 plantillas (WO-7b 22 + WO-7c 8).** Las ramas alternativas
restantes (fórmulas distintas que requieren más builtins o son
simbólicas) quedan enumeradas abajo como continuación opcional.

#### Ramas alternativas pendientes (fórmulas distintas, no bug)

- `potencias` avanzado (potencia de potencia `(a^m)^n = a^(m·n)`) e
  intermedio (exponente 0 / negativo).
- `operaciones_basicas` intermedio (incluye ×) y avanzado (incluye ×, ÷).
- `operaciones_combinadas` intermedio (con precedencia ×) y avanzado
  (con paréntesis).
- `regla_tres` intermedio y avanzado (inversa, `A·B = C·x`).
- `proporcionalidad` avanzado (inversa `y = k/x`).
- `porcentaje` intermedio y avanzado (las 3 variantes de incógnita: base,
  total, porcentaje).
- `perimetro_area` intermedio/avanzado (triángulo, círculo con `pi`).
- `decimales` intermedio/avanzado (resta, multiplicación, conversión
  fracción ↔ decimal).
- `raices` intermedio (simplificación de radicales `√(a²·b) = a·√b`) y
  avanzado (operaciones con radicales — simbólico, otra tarea).
- `enteros_negativos` intermedio (operación) y avanzado (comparar — este
  último produce respuesta string).
- `multiplos_divisores` intermedio/avanzado (las otras 2 variantes: "5
  primeros múltiplos" y "¿es múltiplo?" — respuestas string/bool).
- `numeros_primos` intermedio (factorización prima, respuesta string).
- `sucesiones` intermedio/avanzado (geométrica, encontrar d o r).
- `series_simples` avanzado (geométrica).
- `angulos` avanzado (tercer ángulo de triángulo).
- `coordenadas_plano` avanzado (punto medio).
- `probabilidad_simple` rama avanzado (fracción simplificada — el
  template actual usa decimal; el upgrade a `fraccion` está pendiente).

### `Algebra.ts` (45 cases), `Calculo.ts` (15), `AnalisisYAvanzado.ts` (16)

Mayoría paramétricos pero con respuesta **simbólica** (expresiones
algebraicas como string, derivadas, factorizaciones). NO entra en el alcance
del porting numérico de WO-7/WO-7b/WO-8 — son el **eje 2** (CAS /
álgebra simbólica), tarea aparte. Antes de encarar el eje 2, se podrían
portar los pocos subtipos de respuesta numérica (evaluaciones, raíces
numéricas de cuadráticas con coeficientes sorteados, límites numéricos) con
el mismo patrón de WO-7b.

**Estado tras WO-11c (ecuaciones, funciones, recta):** WO-11 (3
subtipos semilla) + WO-11b (9 adicionales) + WO-11c (6 adicionales)
totalizan **18 plantillas** en
`packages/vblang/src/templates/matematicas-algebra-oficiales.ts`,
todas con `subtipoOriginal` apuntando al generador legado y
verificación de equivalencia con
`apps/web/.../algebra-equivalencia.spec.ts` (oráculo compartido:
generador real ≡ oráculo ≡ plantilla, con guard anti-vacío
`toBeGreaterThan(5)`):

| subtipoOriginal               | subtipo algebra | respuesta    | fórmula portada                              |
|-------------------------------|-----------------|--------------|----------------------------------------------|
| `terminos_semejantes`         | basico          | simbólica    | agrupar 2 grupos de coefs en [-5,5]          |
| `multiplicacion_monomios`     | basico          | simbólica    | distributiva: `m·(c0 + c1·x) = m·c0 + m·c1·x` |
| `factorizacion_basica`        | basico          | simbólica    | factor común: `k·(a·x + b) = k·a·x + k·b`    |
| `suma_resta_polinomios`       | basico          | simbólica    | `(c0 ± d0) + (c1 ± d1)·x` (50/50 suma/resta) |
| `multiplicacion_polinomios`   | basico          | simbólica    | `(c0 + c1·x)·(d0 + d1·x)` → grado 2           |
| `productos_notables`          | basico          | simbólica    | `(x + b)² = x² + 2bx + b²` (sólo cuadrado_suma) |
| `lenguaje_algebraico`         | basico          | simbólica    | pool de 7 frases → expr algebraica           |
| `racionales_simples`          | basico          | simbólica    | `(k·a·x) / (k·b)` cancelando factor común    |
| `division_polinomios`         | basico          | simbólica    | cociente `qa·x + qb` (sin resto)             |
| `simplificacion_algebraica`   | basico          | simbólica    | `x^m · x^n = x^(m+n)` (sólo producto)       |
| `evaluacion_expresiones`      | basico          | **numérica** | evaluar `c0 + c1·x` en un punto              |
| `grado_coeficientes`          | basico          | **numérica** | grado / coef_principal / término_ind (33/33/33) |
| `ecuaciones_lineales`         | basico          | **numérica** | `ax + b = c → x = (c-b)/a`                  |
| `ecuaciones_parametros`       | basico          | **numérica** | `kx = c, x dado → k = c/x`                  |
| `ecuaciones_fracciones`       | basico          | **numérica** | `a/x + b = c → x = a/(c-b)`                 |
| `funciones_lineales`          | basico          | **numérica** | ordenada al origen de `f(x) = mx + b`        |
| `funcion_afin`                | basico          | **numérica** | evaluar `f(x) = mx + b` (contexto taxi)      |
| `ecuacion_recta`              | basico          | simbólica    | RHS de `y = mx + b` dadas m, b               |

Distinción simbólica vs numérica: las simbólicas usan
`respuesta_expr:` + `tipo: expresion` y se comparan con
`sonEquivalentes` (CAS híbrido numérico + algebraico); las numéricas
usan `respuesta:` + `tipo: input` + `tolerancia_abs:` (patrón WO-7b).
El harness `algebra-equivalencia.spec.ts` soporta AMBOS modos con un
campo `kind: "symbolic" | "numeric"` por caso y aplica el comparador
correspondiente. Las simbólicas normalizan notación Unicode (², ³, ·,
−, √) del generador nativo antes del CAS.

### Gaps de validación (WO-11c)

Dos subtipos del batch no fueron portados porque su formato de
respuesta no entra en el validador actual (`sonEquivalentes` ni
`tolerancia_abs`):

| Subtipo | Formato respuesta | Razón del gap |
|---------|-------------------|---------------|
| `inecuaciones_simples` | String desigualdad (`"x > 3"`, `"x < 5/2"`) | `sonEquivalentes` compara expresiones, no desigualdades. Necesitaría un comparador de intervalos/desigualdades. |
| `ecuaciones_cuadraticas` | String conjunto solución (`"x₁ = 6, x₂ = -2"`, `"x = 3 (doble)"`, `"Ninguna"`) | Respuesta multi-valor con formato variable. Necesitaría un comparador de conjuntos solución (parsear raíces, comparar como set). |

Estos gaps son insumo para un futuro WO (extensión del eje simbólico
con soporte para desigualdades y conjuntos solución).

**Subtipos restantes** (intermedio / avanzado de los ya portados, o
ramas no cubiertas como cuadrado_resta / dif_cuadrados / cociente /
potencia de potencia / raíz): ~34 subtipos pendientes según
`Algebra.ts`. La mayoría son continuación mecánica con el mismo
patrón.

**Pendiente (≈34 subtipos algebra + ~5 de Cálculo + 16 de Análisis):**
porting mecánico con el mismo patrón. Cálculo (10 de 15 subtipos
portados en WO-11d, ver §Cálculo abajo). Análisis (16 de 16 subtipos
portados en WO-11e, ver §Análisis abajo).

### Cálculo (WO-11d) — 10 de 15 subtipos portados

### Cálculo (WO-11d) — 10 de 15 subtipos portados

**Estado tras WO-11d:** la rama basico de Cálculo está portada (10
subtipos de 15). Archivo: `packages/vblang/src/templates/matematicas-calculo-oficiales.ts`.
Verificación con `apps/web/.../calculo-equivalencia.spec.ts` (oráculo
compartido, guard anti-vacío).

| subtipoOriginal              | subtipo algebra | respuesta    | fórmula portada                              |
|------------------------------|-----------------|--------------|----------------------------------------------|
| `limites_funciones`          | basico          | numérica     | `lim(x→a) [coef·x²+c] = coef·a²+c` (sustitución) |
| `derivada_definicion`        | basico          | numérica     | `f'(x0) = 2·a·x0` (cuadrática)               |
| `derivadas_basicas`          | basico          | simbólica    | `f'(x) = 2·coef_x2·x + coef_x` (sin eval)    |
| `reglas_derivacion`          | basico (prod.)  | simbólica    | `(ax+b)(cx+d)' = 2ac·x + (ad+bc)`            |
| `integral_indefinida`        | basico          | simbólica    | `∫coef·xⁿ dx = (coef/(n+1))·x^(n+1)` (sin +C)|
| `integral_definida`          | basico          | numérica     | `∫[0,b] x dx = b²/2`                         |
| `aplicaciones_integrales`    | basico          | simbólica    | `Área [0,1] entre y=x, y=x² = 1/6`          |
| `probabilidad_avanzada`      | basico          | numérica     | `P(A∩B) = P(A)·P(B)` (independientes)       |
| `variables_aleatorias`       | basico          | numérica     | `E(X) = Σvᵢ·Pᵢ` (distribución fija)          |
| `distribuciones`             | basico (binom.) | numérica     | `P(X=k) = C(n,k)·(0.5)ⁿ` (p=0.5)             |

**Subtipos NO portados (5) — gaps documentados en el doc de la
plantilla**, NO hackeados:

- `continuidad` — MC conceptual ("¿es continua?", "tipo de
  discontinuidad"). No hay fórmula — son opciones de texto fijo.
- `aplicaciones_derivadas` — respuesta multi-statement
  ("x=0 y x=2.67"). math.js no parsea este formato. Para
  portarlo: partir la respuesta en campos separados o usar
  comparador `string` propio.
- `ecuaciones_diferenciales` — solución general con constante
  libre (C): "y = Ce^(kx)". math.js trata C como símbolo
  desconocido. Para portarlo: hacer que el alumno tipee la
  familia paramétrica (no hay chequeo automático posible) o
  pedir una EDO particular con y(0) dado.
- `estadistica_inferencial` — MC conceptual o intervalo ("IC 95%").
  El intervalo es string puro sin equivalencia simbólica posible.
- `regresion_correlacion` — MC conceptual (categoría de
  correlación: "fuerte", "moderada", "débil"). Mismo caso que
  `continuidad`.

**Notas técnicas del porting Cálculo:**

- `derivar(expr, var)` (WO-11) NO se usó en los ports. La razón:
  los subtipos porteados son lo suficientemente simples (regla
  de la potencia, producto de binomios) que la fórmula se puede
  precomputar en el DSL. Para subtipos más complejos (cadena,
  cociente con fracciones, derivadas de orden superior) el builtin
  `derivar` entra como herramienta principal. Las ramas
  intermedio/avanzado pendientes de `reglas_derivacion` lo usarán.
- `combinatoria` no es builtin en el DSL → en `distribuciones`
  se precomputa C(n,k) en una matriz de constantes indexada por
  `n - 3` y `k`. Es una solución ad-hoc para los 16 valores que
  cubre el rango (n ∈ [3, 6]). Si se generaliza, vale la pena
  agregar el builtin `combinatoria(n, k)` (gap WO-8+).
- `integral_indefinida`: la respuesta del generador incluye
  " + C" (constante de integración). math.js no parsea
  "x^3 + C" como expresión. La plantilla produce SOLO el
  polinomio (`x^3` o `(2/3)*x^3`) y la constante se documenta
  en la explicación. El test usa `transformGenerator: stripConstante`
  para remover el "+C" antes del CAS.

### Análisis y Avanzado (WO-11e) — 16 de 16 subtipos portados (cierre del eje 2)

**Estado tras WO-11e:** la rama basico de Análisis y Avanzado está
**completa** — los 16 subtipos de `AnalisisYAvanzado.ts` portados.
Archivo: `packages/vblang/src/templates/matematicas-analisis-oficiales.ts`.
Verificación con `apps/web/.../analisis-equivalencia.spec.ts` (oráculo
compartido, guard anti-vacío).

| subtipoOriginal                 | respuesta    | notas                                       |
|---------------------------------|--------------|---------------------------------------------|
| `trigonometria_basica`          | simbólica    | pool de sen/cos × {0,30,45,60,90}°         |
| `trigonometria_aplicada`        | numérica     | cateto opuesto (hip × sen α)                |
| `identidades_trigonometricas`   | simbólica    | sen²+cos²=1 (conceptual fijo)               |
| `ecuaciones_trigonometricas`    | simbólica    | "x = α° o x = β°" (string multi)           |
| `funciones_exponenciales`       | numérica     | f(x) = b^x                                  |
| `funciones_logaritmicas`        | numérica     | log_base(b^exp) = exp                       |
| `ecuaciones_exponenciales`      | numérica     | b^x = c → x = log_b(c)                      |
| `ecuaciones_logaritmicas`       | numérica     | log(x) = k → x = 10^k (basico: base=10)     |
| `numeros_complejos`             | numérica     | parte real (basico) / módulo (avanz, GAP)   |
| `operaciones_complejos`         | simbólica    | suma/resta (basico), mult/conj (avanz, GAP) |
| `matrices_basico`               | simbólica    | dimensión "filas×cols" (string fijo)        |
| `determinantes_basico`          | numérica     | det 2×2 (avanz: 3×3 Sarrus, GAP)            |
| `sistemas_matrices`             | numérica     | Cramer 2×2 (avanz: GAP)                     |
| `vectores_basico`               | numérica     | módulo / producto escalar / suma            |
| `geometria_espacial`            | numérica     | cubo vol (basico) / esfera,cil,cono (GAP)   |
| `conicas`                       | simbólica    | circunferencia (basico), parábola/elipse (GAP) |

**Sub-subtipos pendientes (intermedio/avanzado, no portada):**

- `trigonometria_basica` avanzado — incluye tangente.
- `trigonometria_aplicada` intermedio — coefs más amplios.
- `identidades_trigonometricas` intermedio/avanzado — pregunta por
  tan(θ) (numérico).
- `ecuaciones_trigonometricas` intermedio/avanzado — dominios acotados.
- `numeros_complejos` avanzado — pregunta por el módulo |z| = √(a²+b²).
- `operaciones_complejos` intermedio/avanzado — multiplicación,
  conjugado.
- `matrices_basico` avanzado — suma 2×2 de matrices (con
  representación string `[[a,b],[c,d]]`).
- `determinantes_basico` avanzado — det 3×3 (regla de Sarrus).
- `vectores_basico` intermedio/avanzado — producto escalar, suma.
- `geometria_espacial` intermedio/avanzado — esferas, cilindros,
  conos, superficies.
- `conicas` intermedio/avanzado — parábolas, elipses, hipérbolas.

**Notas técnicas del porting Análisis:**

- **Object literals no funcionan en el DSL** (`{30: 0.5}`) —
  sólo arrays. Solución usada en `trigonometria_aplicada` y
  `operaciones_complejos`: `uno_de([0, 1, 2])` + `arrays[idx]`
  (idx coordina el sort).
- **Boolean a int tampoco funciona** (`(h < 0) * 1` falla). Para
  elegir entre 2 formas según una condición, se usa el truco de
  indexar un array de 2 opciones con un entero explícito (no
  booleano). Ver `operaciones_complejos`: `ops: ["+", "-"]` +
  `op: ops[es_resta]`, donde `es_resta` es 0 o 1 sorteado
  directamente.
- **Sin ternario** (`?:`) en el DSL. Para 4 casos (matrix
  dimension, trigonometria basica) se usan arrays + indices.
- **`matrices_basico` y `conicas` son respuestas conceptuales**
  (string fijo "3×3" o "Circunferencia: centro (h,k), radio r").
  Se portan con `respuesta_expr` y se comparan con `sonEquivalentes`
  (trivial string match cuando son idénticas). En `matrices_basico`
  el DSL usa "x" ASCII y el generador "×" Unicode; la normalización
  en el test convierte "×" → "x" antes del CAS.
- **Equivalencias no-CAS en algunos casos**: 4 de los 16 subtipos
  son respuestas de "identificación" (conicas, matrices_basico,
  identidades_trigonometricas, ecuaciones_trigonometricas). El
  porting se hizo igualmente porque la respuesta es un string
  fijo y la DSL lo puede producir igual que el generador. NO son
  gaps — son ports válidos con comparación `sonEquivalentes`
  trivial.

**Cierre del porting (eje 2):**

- Álgebra: 18 subtipos (3 WO-11 + 9 WO-11b + 6 WO-11c)
- Cálculo: 10 de 15 subtipos
- Análisis: 16 de 16 subtipos (rama basico)
- **Total: 44 subtipos simbólicos/numéricos en el DSL**
  (más los 30 numéricos de WO-7/7b/7c en aritmética/química/economía).
- **Pendientes (~34 subtipos algebra intermedio/avanzado, ~5 cálculo,
  ~10 análisis intermedio/avanzado):** continuación mecánica con
  el mismo patrón (oráculo compartido + guard anti-vacío).

### Otras materias paramétricas

- **Física** — clasificada limpia, calculadora real. **Portada en su
  totalidad rama `basico` (28 subtipos en 7 áreas):** Cinemática (WO-7b,
  5), Dinámica (4), Electricidad (3 + 2 gaps de array), Energía (5),
  Ondas (3), Fluidos (4), Termodinámica (4). Ver tabla arriba. Las
  ramas intermedio/avanzado de los 23 subtipos basico porteados
  quedan como continuación mecánica con el mismo patrón.
- **Química** — `Estequiometria` y `Termoquimica` portada en WO-7c
  (9 subtipos numéricos en `quimica-estequeometria-oficiales.ts`).
  Quedan: `Gases` (PV=nRT, en generador pero no portada), `AcidoBase`,
  `AtomosEnlaces`, `Equilibrio`, `Seguridad` — y las ramas intermedio/
  avanzado de Estequiometria/Termoquimica (fórmulas distintas,
  continuación mecánica con el mismo patrón).
- **Economía** — `EconomiaAR` portada en F6-04. `EconomiaGeneral`
  portada en WO-7c (11 plantillas numéricas en
  `economia-general-oficiales.ts`: 8 subtipos + 3 ramas de
  `porcentajes_simples`). Quedan las ramas MC/conceptuales
  (`politica_fiscal_monetaria`, `clasificacion_bienes`,
  `agentes_economicos`, `estructuras_mercado`, `gastos_fijos_variables`,
  etc.) y las intermedias de `EconomiaAR` (F6-04 cubre solo basico).

### Gaps de builtins (insumo para WO-8)
Fórmulas que **no entran** con los builtins actuales (no inventar — anotar).

**Estado tras WO-8:** la columna "Estado" se actualiza — los builtins marcados
"cubierto por WO-8" ya están implementados en `evaluator/builtins.ts` con su
firma en `validator/builtin-signatures.ts` y su entrada en la referencia del
editor. Quedan como gap los que requieren CAS o math simbólico.

| Necesidad | Para | Estado |
|-----------|------|--------|
| `mcd` / `mcm` (GCD/LCM) | `divisibilidad`, `numeros_primos`, simplificar fracciones, `probabilidad_simple` como fracción | **cubierto por WO-8** (`mcd(a, b)`, `mcm(a, b)`) |
| `abs` (valor absoluto) | `enteros_negativos`, distancias 1D | **cubierto por WO-8** (`abs(x)`, ahora builtin de primera clase) |
| `mediana` / `moda` | `estadistica_basica` | **cubierto por WO-8** (`mediana(lista)`, `moda(lista)`) |
| `es_primo` / `factorizar` / `divisores` | teoría de números | **cubierto por WO-8** (`es_primo(n)`, `divisores(n)`, `factorizar(n)`) |
| `piso` / `techo` / `mod` (`%`) | combinaciones enteras | `floor` / `ceil` ya vienen de math.js; `%` es operador del DSL — disponible |
| salida de **fracción simplificada** (`p/q`) | fracciones, probabilidad | **cubierto por WO-8** (`fraccion(p, q)` → string `"p/q"`) |
| construcción/álgebra de **expresiones simbólicas** | `Algebra`/`Calculo` (respuesta string) | gap mayor de DSL (eje 2, otra tarea) |

### Decisión de diseño — `fraccion(p, q)`

`fraccion(p, q)` devuelve un **string** `"p/q"` ya simplificado (mediante
`mcd` y con el signo normalizado en el numerador). Se eligió string y no par
u objeto por:

- ergonomías: se puede usar directo como `respuesta:` de un `input` (la
  validación es por igualdad de string, no necesita tolerancia) y se puede
  interpolar en `enunciado` / `pasos` sin transformación;
- el usuario ya tiene `p` y `q` como variables del bloque `variables:`, no
  necesita extraerlos de un objeto;
- formato compacto y legible para el alumno: `"1/2"`, `"-3/4"`, `"4"` (cuando
  la simplificación colapsa al entero).

Casos borde documentados:

- `fraccion(0, n)` → `"0"` (mismo caso que `fraccion(4, 1)`: si el denominador
  reducido es 1, se omite el `/1`).
- `fraccion(1, 0)` → error (denominador no puede ser 0).
- Signo normalizado al numerador (`fraccion(3, -4)` → `"-3/4"`).

### Subtipos desbloqueados por WO-8 (insumo para 2ª ola de WO-7b)

Con los builtins nuevos, los siguientes subtipos paramétricos enumerados en
§4 ya entran al DSL sin necesidad de más infraestructura:

- `divisibilidad` / `multiplos_divisores` — `mcd` / `mcm` / `divisores`.
- `numeros_primos` — `es_primo` / `divisores` / `factorizar`.
- `estadistica_basica` — `mediana` / `moda` (complementan `promedio` / `sumar`).
- `enteros_negativos` — `abs` para valor absoluto y distancias 1D.
- `probabilidad_simple` — ahora con `fraccion(p, q)` se puede devolver la
  fracción simplificada exacta en lugar del decimal aproximado (ver nota
  sobre `matematicas-oficiales.ts`: el template actual usa decimal para
  no cambiar semántica, el upgrade a fracción queda para la 2ª ola de WO-7b).
- `fracciones` (simplificar) — `fraccion(p, q)`.

Mientras tanto, los subtipos que dependen de estos gaps se documentan acá y se
dejan resolviendo por el generador legado (no se fuerzan).

### WO-7c — Cierre del porting NUMÉRICO

**Estado tras WO-7c:** el porting numérico del objetivo B está CERRADO.
Los subtipos numéricos pendientes de WO-7b/8 fueron portados con el
mismo patrón (oráculo compartido, `subtipoOriginal` preservado).
Quedan sólo los subtipos con respuesta SIMBÓLICA (eje 2) que es tarea
de WO-11 (ver `docs/vblang/wo-11-eje-simbolico.md`).

**Subtipos numéricos portados en WO-7c** (todas las plantillas con
`subtipoOriginal` apuntando al generador legado y equivalencia
verificada):

- **Química** (`quimica-estequeometria-oficiales.ts`, 9 plantillas):
  - Estequiometria basico: `calculo_moles`, `calculo_masa`,
    `relaciones_molares`, `molaridad`, `diluciones`.
  - Termoquimica basico: `calor`, `cambio_entalpia`, `energia_reaccion`,
    `poder_calorifico`.
- **Economía General** (`economia-general-oficiales.ts`, 11 plantillas):
  - Numericos: `ganancia_perdida`, `resultado_bruto`, `resultado_neto`,
    `margen_bruto`, `margen_neto`, `capital_trabajo`, `punto_equilibrio`,
    `productividad`.
  - 3 ramas separadas de `porcentajes_simples`: `descuento`, `aumento`,
    `impuesto`.
- **3ª ola Aritmética** (8 plantillas en `matematicas-aritmetica-oficiales.ts`):
  - `divisibilidad` intermedio/avanzado (MCD/MCM con max=100 y anidado).
  - `numeros_primos` avanzado (MCD/MCM vía factorización).
  - `fracciones` intermedio (4 ramas: +/−/×/÷ con denominadores distintos)
    y avanzado (número mixto + simplificación).

**Equivalencia verificada** con 3 archivos de test:

- `apps/web/.../quimica-equivalencia.spec.ts` — 9 subtipos × 50 seeds × 2 mitades.
- `apps/web/.../economia-equivalencia.spec.ts` — 9 subtipos × 50 seeds × 2 mitades.
- `apps/web/.../aritmetica-3a-ola-equivalencia.spec.ts` — 2 subtipos × 50 seeds × 2 mitades.

**Ramas pendientes** (no son numéricas — son simbólicas o MC):

- **Álgebra / Cálculo / Análisis** (~76 subtipos) — son el EJE 2, tarea
  de WO-11 (`respuesta_expr` + equivalencia simbólica).
- **Química MC** (balanceo, reactivo_limitante, factorización prima
  como string, etc.) — son ramas distintas con respuesta no numérica.
- **Economía MC/conceptual** (`politica_fiscal_monetaria`,
  `clasificacion_bienes`, `agentes_economicos`, `estructuras_mercado`,
  `gastos_fijos_variables`, etc.) — ramas MC, no numéricas.
- **3ª ola Aritmética ramas string** (`numeros_primos` intermedio
  factorización prima, `multiplos_divisores` "5 primeros múltiplos" /
  "¿es múltiplo?", `enteros_negativos` comparar) — son respuesta
  string/bool, no numérica.
- **3ª ola Aritmética ramas restantes** (potencias avanzado,
  operaciones_basicas ×/÷, regla_tres inversa, etc.) — son fórmulas
  distintas que requieren más builtins o son simbólicas.

**Patrón de porting remanente**: cualquier subtipo numérico restante
sigue el patrón `quimica-equivalencia.spec.ts` (oráculo compartido en
el test) y se agrega a `matematicas-aritmetica-oficiales.ts` /
`quimica-estequeometria-oficiales.ts` / `economia-general-oficiales.ts`
como una nueva entrada del array `*_OFICIALES`. Las plantillas
siguen el formato `metadata:/variables:/respuesta:/tipo: input/
tolerancia_abs:/enunciado:/pasos:/explicacion:` (ver cualquier
template existente para el shape exacto).
