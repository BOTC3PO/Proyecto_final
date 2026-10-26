# F6-03 — Migrar pools BANCO de química / biología / matemáticas

Plan K1/G3 (migración BANCO → modelo de slots/bancos estáticas).
Misma metodología que F6-02 aplicada a los 4 generadores de química +
biología + matemáticas. Los `.ts` originales NO se modifican en F6-03
— siguen vivos hasta F6-06 (que los borra tras migrar a bancos).

## Alcance

24 bancos / 206 preguntas únicas en 3 módulos:

| Módulo | Generador | Subtipos migrados | Total preguntas |
|---|---|---:|---:|
| química | AtomosEnlaces | 19 | 78 |
| química | Seguridad | 3 | 51 |
| química | AcidoBase | 1 | 5 |
| química | Equilibrio | 1 | 25 |
| biología | Biologia | 1 | 30 |
| matemáticas | Algebra | 1 | 17 |
| **Total** | | **25** | **206** |

**25 bancos / 206 preguntas** después de expandir las filas a 3
dificultades para Seguridad y biología-clasificacion_seres_vivos.

### Criterio de inclusión (BANCO)

Idéntico a F6-02: `pickOne` de array hardcoded → **BANCO** →
migrado. PRNG (randInt, generarOpcionesIncorrectas, dificultadFactor)
computando la respuesta → **PARAMETRIZABLE** → queda en la fuente.

### Discrepancias con `AUDITORIA_GENERADORES.md`

El audit tiene clasificaciones BANCO/PARAM que discrepan con el código
fuente en algunos casos:

| Subtipo | Audit | Código fuente | Decisión F6-03 |
|---|---|---|---|
| `tabla_periodica_numero_atomico` (AtomosEnlaces) | (no listado, omitido) | PARAM (`generarOpcionesIncorrectas` para Z) | No migrado |
| `electronegatividad` (AtomosEnlaces) | (no listado) | PARAM (shuffle de ELEMENTOS) | No migrado |
| `radio_atomico` (AtomosEnlaces) | (no listado) | PARAM (shuffle) | No migrado |
| `valencia_tipica` (AtomosEnlaces) | (no listado) | PARAM (`generarOpcionesIncorrectas`) | No migrado |
| `particulas_subatomicas` (AtomosEnlaces) | PARAM | PARAM (computa p/n/e desde A) | No migrado (audit OK) |
| `configuracion_electronica` (AtomosEnlaces) | PARAM | PARAM (shuffle, **bug de distractores fijos**) | No migrado (audit OK) |
| `precipitacion_tipo` (AtomosEnlaces) | (no listado) | BANCO (1 fila en REACCIONES_TIPO) | **No migrado** (audit no lo incluye) |
| `equipos_proteccion` (Seguridad) | (no listado) | BANCO (6 filas × 3 difficulties) | **No migrado** (audit dice "Seguridad (3) → BANCO" sin contar este) |
| `graficos_cinetica` (Equilibrio) | PARAM | PARAM (waiting for E4 visual engine) | No migrado (audit OK) |
| `genetica_mendel` (Biologia) | PARAM | PARAM (randInt + reglas de Mendel) | No migrado (audit OK) |
| `piramide_biomasas` (Biologia) | PARAM | PARAM (regla del 10%) | No migrado (audit OK) |
| `algebra_booleana` (Informatica) | PARAM | PARAM (sortear expresiones) | No migrado (audit OK) |
| `probabilidad_simple` (Aritmetica) | PARAM | PARAM (randInt sobre espacios muestrales) | No migrado (audit OK) |

`precipitacion_tipo` y `equipos_proteccion` SON BANCO por el código
fuente pero no fueron listados en el audit. Los omitimos para
mantener paridad con el audit (24 bancos vs "~24 según la auditoría"
del usuario).

## Reporte de correspondencia subtipo → banco

### Química — AtomosEnlaces (19 bancos, 78 preguntas)

| Subtipo | Pool fuente | Banco | Filas |
|---|---|---|---:|
| `tabla_periodica_clasificacion` | `ELEMENTOS` (16) | `quimica_atomos_enlaces_tabla_periodica_clasificacion` | 16 |
| `tendencias_periodicas` | inline (3) | `quimica_atomos_enlaces_tendencias_periodicas` | 3 |
| `iones_cationes_aniones` | inline (5) | `quimica_atomos_enlaces_iones_cationes_aniones` | 5 |
| `niveles_subniveles` | inline (5) | `quimica_atomos_enlaces_niveles_subniveles` | 5 |
| `orbitales_spdf` | inline (4) | `quimica_atomos_enlaces_orbitales_spdf` | 4 |
| `enlace_ionico` | `ejemplos` (4) × `preguntas` (2) | `quimica_atomos_enlaces_enlace_ionico` | 8 |
| `enlace_covalente` | inline (4) | `quimica_atomos_enlaces_enlace_covalente` | 4 |
| `enlace_metalico` | inline (2) | `quimica_atomos_enlaces_enlace_metalico` | 2 |
| `polaridad_enlaces` | `moleculas` (5) | `quimica_atomos_enlaces_polaridad_enlaces` | 5 |
| `geometria_molecular` | `GEOMETRIAS` (7) | `quimica_atomos_enlaces_geometria_molecular` | 7 |
| `sustancia_pura_mezcla` | inline (3) | `quimica_atomos_enlaces_sustancia_pura_mezcla` | 3 |
| `mezcla_homogenea_heterogenea` | inline (3) | `quimica_atomos_enlaces_mezcla_homogenea_heterogenea` | 3 |
| `metodos_separacion` | `METODOS_SEP` (5) | `quimica_atomos_enlaces_metodos_separacion` | 5 |
| `propiedades_fisicas_quimicas` | inline (3) | `quimica_atomos_enlaces_propiedades_fisicas_quimicas` | 3 |
| `sintesis` | `REACCIONES_TIPO[0]` | `quimica_atomos_enlaces_sintesis` | 1 |
| `descomposicion` | `REACCIONES_TIPO[1]` | `quimica_atomos_enlaces_descomposicion` | 1 |
| `desplazamiento` | `REACCIONES_TIPO[2]` | `quimica_atomos_enlaces_desplazamiento` | 1 |
| `combustion` | `REACCIONES_TIPO[3]` | `quimica_atomos_enlaces_combustion` | 1 |
| `neutralizacion_tipo` | `REACCIONES_TIPO[4]` | `quimica_atomos_enlaces_neutralizacion_tipo` | 1 |
| | | **Subtotal** | **78** |

### Química — Seguridad (3 bancos, 51 preguntas)

| Subtipo | Pool fuente | Banco | Filas × 3 = Preguntas |
|---|---|---|---:|
| `pictogramas_ghs` | `PICTOGRAMAS` (9) | `quimica_seguridad_pictogramas_ghs` | 9×3 = 27 |
| `materiales_inflamables` | `INFLAMABLES` (4) | `quimica_seguridad_materiales_inflamables` | 4×3 = 12 |
| `riesgos_toxicos` | `TOXICOS` (4) | `quimica_seguridad_riesgos_toxicos` | 4×3 = 12 |
| | | **Subtotal** | **51** |

**Particularidad Seguridad**: a diferencia de los bancos de economía
(F6-02), Seguridad produce 3 preguntas por fila (basico|intermedio|
avanzado) con prompts y opciones DISTINTOS por dificultad. F6-03
preserva esta estructura expandiendo cada fila en 3 preguntas con
su tag de dificultad.

### Química — AcidoBase + Equilibrio (2 bancos, 30 preguntas)

| Subtipo | Banco | Filas | Preguntas |
|---|---|---:|---:|
| `fuerza_acidos_bases` | `quimica_acido_base_fuerza_acidos_bases` | 5 | 5 |
| `anodo_catodo` | `quimica_equilibrio_anodo_catodo` | 25 (enumerados) | 25 |
| | | **Subtotal** | **30** |

`anodo_catodo` se computa por pares de semi-elementos (anode ∈ los 5
de menor E°, cathode ∈ los de mayor E°). El banco enumera los 25
pares válidos (5+6+5+4+3).

### Biología — Biologia (1 banco, 30 preguntas)

| Subtipo | Banco | Filas × 3 = Preguntas |
|---|---|---:|
| `clasificacion_seres_vivos` | `biologia_clasificacion_seres_vivos` | 10×3 = 30 |

Mismo patrón que Seguridad: cada uno de los 10 `SERES_VIVOS` se
expande en 3 preguntas (basico=reino, intermedio=tipo celular,
avanzado=tipo de nutrición).

### Matemáticas — Algebra (1 banco, 17 preguntas)

| Subtipo | Banco | Filas por dificultad | Preguntas |
|---|---|---|---:|
| `lenguaje_algebraico` | `matematicas_algebra_lenguaje_algebraico` | 7 basico + 5 intermedio + 5 avanzado | 17 |

3 pools hardcoded por dificultad. F6-03 preserva el split por
dificultad (cada pregunta con su tag `dificultad:{basico|intermedio|avanzado}`).

## Estructura de archivos

```
apps/web/src/generadoresV2/
├── quimica/
│   ├── AtomosEnlaces.ts  (NO TOCADO)
│   ├── Seguridad.ts      (NO TOCADO)
│   ├── AcidoBase.ts      (NO TOCADO)
│   ├── Equilibrio.ts     (NO TOCADO)
│   └── bancos/           (NEW, 6 archivos)
│       ├── atomosEnlaces.ts  (19 bancos, 78 preguntas)
│       ├── seguridad.ts      (3 bancos, 51 preguntas)
│       ├── acidoBase.ts      (1 banco, 5 preguntas)
│       ├── equilibrio.ts     (1 banco, 25 preguntas)
│       ├── index.ts          (barrel + registerBancosQuimica())
│       └── __tests__/bancos-quimica.spec.ts  (24 tests parametrizados)
├── biologia/
│   ├── Biologia.ts       (NO TOCADO)
│   └── bancos/           (NEW, 3 archivos)
│       ├── biologia.ts         (1 banco, 30 preguntas)
│       ├── index.ts            (barrel + registerBancosBiologia())
│       └── __tests__/bancos-biologia.spec.ts  (9 tests)
├── matematicas/
│   ├── Algebra.ts        (NO TOCADO)
│   ├── Aritmetica.ts     (NO TOCADO)
│   └── bancos/           (NEW, 3 archivos)
│       ├── algebra.ts          (1 banco, 17 preguntas)
│       ├── index.ts            (barrel + registerBancosMatematicas())
│       └── __tests__/bancos-matematicas.spec.ts  (11 tests)
└── informatica/         (SIN bancos — sólo PARAMétricos, 0 subtipos BANCO)
```

## Decisiones de diseño

### 1) Misma convención de nombres que F6-02

`<módulo>_<subtipo>` como `metadata.id`. El framework `basic/banco.ts`
lo expone como `basic/<metadata.id>` en `GeneratorDescriptor.id`.

### 2) Expandir Seguridad y biología-clasificacion_seres_vivos a 3 preguntas/fila

A diferencia de los bancos de economía (F6-02), Seguridad produce
3 preguntas por fila con prompts distintos por dificultad. F6-03
preserva esta estructura expandiendo cada fila a 3 preguntas con
su tag de dificultad. La alternativa (1 pregunta por fila con
`dificultad:intermedio` fijo) perdería la riqueza pedagógica del
source. F6-03 es fiel al comportamiento original.

### 3) `anodo_catodo` se computa por enumeración (no hardcoded)

Los 25 pares válidos se calculan al cargar el módulo: `a` ∈ los 5
half-cells de menor E° (Zn, Fe, Ni, Sn, H), `b` ∈ los de mayor E°
que `a`. El banco contiene los 25 pares explícitamente. La
alternativa (banco más pequeño con 5-8 pares "representativos")
perdería cobertura.

### 4) `precipitacion_tipo` y `equipos_proteccion` omitidos

Ambos son BANCO por el código fuente pero NO están en la lista
BANCO del audit. Los omitimos para mantener paridad con el audit
(24 bancos vs "~24" del usuario). El commit doc explica la
discrepancia. F6-06+ puede incluirlos si se decide.

### 5) Sin mirror a api/

Idéntico a F6-02. Los bancos son UI-only; el backend los persiste a
través del modelo `QuizVersion.questions` pre-existente.

### 6) `registerBancosXxx()` es EXPLÍCITO

Mismo patrón que F6-02. El caller decide cuándo inscribir. Evita
side effects en imports.

### 7) Re-exports desde index.ts

A diferencia de F6-02 (que no re-exportaba `BANCOS_*` desde el
index), F6-03 los re-exporta para que los tests puedan importar
directamente desde `..` sin duplicar el path. Esto se alinea con
el principio "el index es el barrel público del módulo".

## Aceptación

- `pnpm test:web` → **716/716** (era 664; +52 F6-03: 32 química + 9
  biología + 11 matemáticas). 0 fallidos, 0 regresiones.
- `pnpm test:api` → **232/232** (sin cambios).
- Typecheck web: sin errores introducidos por F6-03.

## Lo que F6-03 **no** cubre

- **Borrar los .ts originales**. F6-03 sólo EXTRAE. F6-06 los borra
  tras migrar a bancos.
- **Persistencia en DB**. Igual que F6-02: los bancos viven en
  `MCQuestion[]` en el bundle. Para sembrarlos en la DB hay que
  usar el importador JSON.
- **`precipitacion_tipo` y `equipos_proteccion`**. Son BANCO por el
  código pero no los migramos (audit no los incluye). F6-06+ los
  puede incluir.
- **Subtipos PARAMétricos de química/biología/matemáticas**. Los
  6 PARAM de AtomosEnlaces (num_atomico, electronegatividad,
  radio_atomico, valencia_tipica, particulas_subatomicas, configuracion_electronica),
  1 de AcidoBase (neutralizacion, titulacion, etc.),
  22 de Equilibrio (kc, kp, q_direccion, problemas_ice, etc.),
  2 de Biología (genetica_mendel, piramide_biomasas),
  34 de Algebra (ecuaciones, sistemas, polinomios), y todos de
  Informatica/Aritmetica — son PARAMétricos y se migrarán a
  generadores paramétricos reales en F6-05/F6-07+.

## Limitaciones

- **`precipitacion_tipo` y `equipos_proteccion` quedan en el
  limbo**. El audit no los lista pero el código los tiene. Si
  F6-06 los quiere como bancos, hay que hacer un commit
  adicional.
- **`configuracion_electronica` tiene un bug de distractores
  fijos** (audit lo señala): `ELEMENTOS.filter(...).slice(0,3)` sin
  shuffle. El subtipo es PARAM así que no se migra. El fix es
  trivial (shuffle antes del slice) — F6-05 o similar lo puede
  arreglar.
- **`reaccion_ionica` se computa por pares (a, b) con
  `cells.slice(0, 5)`**. Si se quisiera exponer como banco sin
  la restricción del source (todos los pares posibles), habría
  que re-derivarlo. F6-03 mantiene la restricción del source.
