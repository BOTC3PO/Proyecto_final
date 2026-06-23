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

**Estado tras WO-11 (eje simbólico):** la **capacidad simbólica está
construida** — `respuesta_expr:` + `tipo: expresion` + chequeo de
equivalencia (`sonEquivalentes`) en el server. Ver
`docs/vblang/wo-11-eje-simbolico.md` para el diseño. **3 subtipos
portados como prueba end-to-end** (rama basico):

| subtipoOriginal             | subtipo algebra  | fórmula portada                            |
|-----------------------------|------------------|--------------------------------------------|
| `terminos_semejantes`       | basico           | agrupar 2 grupos de coefs en [-5,5]        |
| `multiplicacion_monomios`   | basico           | distributiva: `m·(c0 + c1·x) = m·c0 + m·c1·x` |
| `factorizacion_basica`      | basico           | factor común: `k·(a·x + b) = k·a·x + k·b`  |

Equivalencia verificada con `apps/web/.../algebra-equivalencia.spec.ts`
(oráculo compartido: generador real ≡ oráculo ≡ plantilla).

**Pendiente (≈73 subtipos) — porting mecánico** con el mismo patrón
de WO-7b (un archivo de plantillas + un test de validez DSL + un test
de equivalencia). Listado y prioridades en
`docs/vblang/wo-11-eje-simbolico.md` §8. Subtipo a subtipo se arman
las ramas de dificultad (basico/intermedio/avanzado); el camino
crítico es la rama basico de cada uno.

### Otras materias paramétricas

- **Física** — clasificada limpia, calculadora real. **Cinemática portada
  en WO-7b** (5 subtipos). Quedan: **Dinámica** (peso, fricción, plano
  inclinado, ley de Hooke), **Electricidad** (ley de Ohm, potencia,
  resistencias serie/paralelo), **Energía** (trabajo, Ec, Ep), **Ondas**
  (v, λ, f, T), **Fluidos** (densidad, presión, caudal), **Termodinámica**
  (calor, dilatación, cambio de estado) y **Temperatura** (conversiones).
  Siguen el mismo patrón: cada subtipo es `tipo: input` numérico con
  `tolerancia_abs` adecuada, fórmula del `calculadora.ts` ya implementada.
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
