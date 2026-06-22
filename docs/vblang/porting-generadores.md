# WO-7 — Porting de generadores paramétricos → plantillas DSL

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

---

## 4. Continuación enumerada (trabajo mecánico)

Matemáticas está clasificada **limpia / casi 100% paramétrica** por la
auditoría, así que casi todos sus subtipos son candidatos a porting (ninguno es
BANCO). Pendientes, por archivo:

### `Aritmetica.ts` (21 subtipos; 7 portados arriba)
Pendientes que entran con builtins actuales (port mecánico):
- `operaciones_basicas`, `operaciones_combinadas` — `+ − × ÷` con incógnita
  (variar la posición de la incógnita con `uno_de`).
- `porcentaje` — `pct/100·base` (3 variantes de incógnita).
- `proporcionalidad` — directa `k·x` / inversa `k/x`.
- `estadistica_basica` — `promedio` (builtin); `mediana`/`moda` ver §gaps.
- `perimetro_area` — cuadrado/rectángulo/triángulo (área/perímetro);
  círculo necesita `π` (`PI` está en `CONSTANTES_GLOBALES`).
- `decimales` — operaciones con `random_float` + `redondear`.
- `enteros_negativos` — operación/valor absoluto (`abs` ver §gaps)/comparar.
- `divisibilidad`, `multiplos_divisores`, `numeros_primos` — ver §gaps (mcd/mcm,
  primos, divisores).
- `raices` — exactas con `raiz`/`sqrt`; simplificación de radicales = formato
  algebraico (string), evaluar caso a caso.

### `Algebra.ts` (45 cases), `Calculo.ts` (15), `AnalisisYAvanzado.ts` (16)
Mayoría paramétricos. El cuello de botella no es la fórmula sino la SALIDA
simbólica (expresiones algebraicas, derivadas, factorizaciones como string) y
los distractores algebraicos. Priorizar primero los de respuesta numérica
(evaluaciones, límites numéricos, raíces de cuadráticas con coeficientes
sorteados) antes que los de respuesta simbólica.

### Otras materias paramétricas
- **Física** — clasificada limpia (paramétrica casi al 100%): calculadora
  física real. Alto valor, mismo patrón numérico.
- **Química/Economía** — sus PARAMÉTRICOS reales (los BANCO ya fueron a WO-6).
  `EconomiaAR` (`recibo_basico`, `descuentos_obligatorios`, `monotributo`) ya
  está portada (F6-04).

### Gaps de builtins (insumo para WO-8)
Fórmulas que **no entran** con los builtins actuales (no inventar — anotar):

| Necesidad | Para | Estado |
|-----------|------|--------|
| `mcd` / `mcm` (GCD/LCM) | `divisibilidad`, `numeros_primos`, simplificar fracciones, `probabilidad_simple` como fracción | falta (ya señalado en `matematicas-oficiales.ts`) |
| `abs` (valor absoluto) | `enteros_negativos`, distancias 1D | falta (hay `signo`, no `abs`) |
| `mediana` / `moda` | `estadistica_basica` | falta (hay `promedio`/`sumar`/`ordenar`) |
| `es_primo` / `factorizar` / `divisores` | teoría de números | falta |
| `piso` / `techo` / `mod` (`%`) | combinaciones enteras | verificar disponibilidad en math.js |
| salida de **fracción simplificada** (`p/q`) | fracciones, probabilidad | requiere `mcd` + formato fracción |
| construcción/álgebra de **expresiones simbólicas** | `Algebra`/`Calculo` (respuesta string) | gap mayor de DSL |

Mientras tanto, los subtipos que dependen de estos gaps se documentan acá y se
dejan resolviendo por el generador legado (no se fuerzan).
