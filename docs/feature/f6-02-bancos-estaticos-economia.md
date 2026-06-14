# F6-02 — Migrar pools BANCO de economía a bancos estáticos

Plan K1/G3 (migración BANCO → modelo de slots/bancos estáticas). F6-02
es **sólo la extracción**: los `.ts` originales de los 4 generadores de
economía siguen vivos hasta F6-06 (que los borra tras migrar a bancos).

## Alcance

Los 4 generadores de `apps/web/src/generadoresV2/economia/`:

| Generador | Subtipos totales | Subtipos migrados | Total preguntas |
|---|---:|---:|---:|
| `EconomiaGeneral` | 25 | 7 | 41 |
| `EconomiaAR` | 10 | 5 | 31 |
| `Finanzas` | 13 | 10 | 97 |
| `Contabilidad` | 8 | 7 | 76 |
| **Total** | **56** | **29** | **245** |

**29 bancos / 245 preguntas únicas** después de deduplicar los 6
duplicados `quiz_*` de EconomíaGeneral que tenían canónicos en
Finanzas o Contabilidad.

### Criterio de inclusión (BANCO)

- `pickOne` de un array hardcoded → **BANCO** → migrado.
- PRNG (`randInt`, `dificultadFactor`, `generarOpcionesIncorrectas`)
  computando la respuesta → **PARAMETrizable** → queda en la fuente
  (F6-06 los borra tras upgrade a generador paramétrico real).

### Discrepancias con `AUDITORIA_GENERADORES.md`

La auditoría (anclada por Javier el 13/Jun) tiene clasificaciones que
discrepan con el código fuente en 5 subtipos:

| Subtipo | Auditoría | Código fuente | Decisión F6-02 |
|---|---|---|---|
| `cft_vs_interes` (Finanzas) | PARAM | BANCO (lookup puro en CASOS_CFT) | **Migrar** |
| `liquidez_personal` (Finanzas) | PARAM | BANCO (lookup puro en ITEMS_LIQUIDEZ) | **Migrar** |
| `presupuesto_familiar` (Finanzas) | PARAM | BANCO (lookup puro en ITEMS_PRESUPUESTO) | **Migrar** |
| `variaciones_patrimoniales` (Contab) | PARAM | BANCO (lookup puro en VARIACIONES_PATRIMONIALES) | **Migrar** |
| `aportes_contribuciones` (Contab) | PARAM | BANCO (lookup puro en CONCEPTOS_APORTES) | **Migrar** |
| `saldo_normal` (Contab) | BANCO | PARAM (randInt para débitos/créditos) | **No migrar** |

La auditoría misma admite que algunos veredictos son "juicio semántico,
confirmar al implementar" — el código fuente es la fuente de verdad.

## Deduplicación (6 canónicos)

Los 6 `quiz_*` de EconomíaGeneral que duplican conceptualmente a
bancos más grandes de Finanzas o Contabilidad:

| Dropped (EconomiaGeneral) | Canónico (Finanzas/Contab) | Tamaño |
|---|---|---:|
| `quiz_aportes_contribuciones` (3) | `contabilidad_aportes_contribuciones` | 8 |
| `quiz_deuda_buena_mala` (2) | `finanzas_deuda_buena_mala` | 10 |
| `quiz_cft_interes` (2) | `finanzas_cft_vs_interes` | 8 |
| `quiz_gastos_esenciales` (2) | `finanzas_gastos_esenciales_no_esenciales` | 12 |
| `quiz_liquidez` (2) | `finanzas_liquidez_personal` | 11 |
| `quiz_publicidad_enganosa` (2) | `finanzas_publicidad_enganosa` | 8 |

Los 2 `quiz_*` SIN canónico (`quiz_ganancia_equilibrio`,
`quiz_interes_simple_compuesto`) sí se migran — son standalone.

## Reporte de correspondencia subtipo → banco

| Subtipo original (source) | Archivo origen | Banco (metadata.id) | Filas |
|---|---|---|---:|
| `politica_fiscal_monetaria` | `EconomiaGeneral.ts:18-27` | `economia_general_politica_fiscal_monetaria` | 8 |
| `clasificacion_bienes` | `EconomiaGeneral.ts:31-40` | `economia_general_clasificacion_bienes` | 8 |
| `agentes_economicos` | `EconomiaGeneral.ts:46-54` | `economia_general_agentes_economicos` | 7 |
| `estructuras_mercado` | `EconomiaGeneral.ts:60-67` | `economia_general_estructuras_mercado` | 6 |
| `gastos_fijos_variables` | `EconomiaGeneral.ts:71-80` | `economia_general_gastos_fijos_variables` | 8 |
| `quiz_ganancia_equilibrio` | `EconomiaGeneral.ts:723-726` | `economia_general_quiz_ganancia_equilibrio` | 2 |
| `quiz_interes_simple_compuesto` | `EconomiaGeneral.ts:685-688` | `economia_general_quiz_interes_simple_compuesto` | 2 |
| `recibo_basico` | `EconomiaAR.ts:6-72` | `economia_ar_recibo_basico` | 5 |
| `descuentos_obligatorios` | `EconomiaAR.ts:76-105` | `economia_ar_descuentos_obligatorios` | 4 |
| `jurisdiccion_impuestos` | `EconomiaAR.ts:111-121` | `economia_ar_jurisdiccion_impuestos` | 9 |
| `formal_informal` | `EconomiaAR.ts:127-137` | `economia_ar_formal_informal` | 9 |
| `monotributo` | `EconomiaAR.ts:141-190` | `economia_ar_monotributo` | 4 |
| `presupuesto_familiar` | `Finanzas.ts:8-20` | `finanzas_presupuesto_familiar` | 11 |
| `gastos_fijos_esenciales` | `Finanzas.ts:26-38` | `finanzas_gastos_fijos_esenciales` | 11 |
| `gastos_esenciales_no_esenciales` | `Finanzas.ts:44-57` | `finanzas_gastos_esenciales_no_esenciales` | 12 |
| `ahorro_consumo` | `Finanzas.ts:63-73` | `finanzas_ahorro_consumo` | 9 |
| `deuda_buena_mala` | `Finanzas.ts:79-90` | `finanzas_deuda_buena_mala` | 10 |
| `cft_vs_interes` | `Finanzas.ts:96-105` | `finanzas_cft_vs_interes` | 8 |
| `liquidez_personal` | `Finanzas.ts:111-123` | `finanzas_liquidez_personal` | 11 |
| `ingresos_activos_pasivos` | `Finanzas.ts:129-140` | `finanzas_ingresos_activos_pasivos` | 10 |
| `publicidad_enganosa` | `Finanzas.ts:146-195` | `finanzas_publicidad_enganosa` | 8 |
| `seguros_familia` | `Finanzas.ts:199-255` | `finanzas_seguros_familia` | 7 |
| `clasificacion_cuentas` | `Contabilidad.ts:8-23` | `contabilidad_clasificacion_cuentas` | 14 |
| `naturaleza_cuentas` | `Contabilidad.ts:29-44` | `contabilidad_naturaleza_cuentas` | 14 |
| `ubicacion_estados` | `Contabilidad.ts:59-73` | `contabilidad_ubicacion_estados` | 13 |
| `hechos_patrimonio` | `Contabilidad.ts:84-138` | `contabilidad_hechos_patrimonio` | 8 |
| `bienes_derechos_obligaciones` | `Contabilidad.ts:140-200` | `contabilidad_bienes_derechos_obligaciones` | 11 |
| `aportes_contribuciones` | `Contabilidad.ts:202-247` | `contabilidad_aportes_contribuciones` | 8 |
| `variaciones_patrimoniales` | `Contabilidad.ts:249-303` | `contabilidad_variaciones_patrimoniales` | 8 |
| | | **TOTAL** | **245** |

## Estructura de archivos

```
apps/web/src/generadoresV2/economia/
├── Contabilidad.ts            (NO TOCADO — sigue vivo hasta F6-06)
├── EconomiaAR.ts              (NO TOCADO)
├── EconomiaGeneral.ts         (NO TOCADO)
├── Finanzas.ts                (NO TOCADO)
├── index.ts                   (NO TOCADO)
└── bancos/                    (NEW — nombre evita el `.gitignore:data/`)
    ├── economiaGeneral.ts     (7 bancos, 41 preguntas)
    ├── economiaAR.ts          (5 bancos, 31 preguntas)
    ├── finanzas.ts            (10 bancos, 97 preguntas)
    ├── contabilidad.ts        (7 bancos, 76 preguntas)
    ├── index.ts               (barrel + registerBancosEconomia)
    └── __tests__/
        └── bancos-economia.spec.ts  (47 tests)
```

## Decisiones de diseño

### 1) `metadata.id` sigue el patrón `<módulo>_<subtipo>`

El `metadata.id` se usa en dos lugares:
1. `buildQuizTemplate(...).metadata.id` — clave en el `TEMPLATE_REGISTRY`.
2. `getDescriptoresBasic()` lo expone como `basic/<metadata.id>` en
   `GeneratorDescriptor.id`.

Patrón elegido: `<módulo>_<subtipo>` donde `<módulo>` ∈
`{economia_general, economia_ar, finanzas, contabilidad}`. Ejemplo:
`economia_general_politica_fiscal_monetaria` →
`basic/economia_general_politica_fiscal_monetaria`.

### 2) ID estable por pregunta

Cada pregunta tiene un id estable:
`<banco_id>_<n>` donde `<n>` es el índice 1-based en el array. La
estabilidad importa porque el banco se identifica por estos ids en
los slots (F3): un alumno que ya respondió `politica_fiscal_monetaria_3`
no debe recibirla de nuevo si el docente quiere variantes sin esa.

### 3) Tags incluyen `subtipo:<nombre>`, `dificultad:<nivel>`, `economia`

Los tags alimentan la `SelectionConfig.byTags` (`basic/types.ts:60`):
un docente puede armar un quiz que sólo incluya preguntas
`dificultad:basico` o filtrar por subtipo. Los tags siguen el
handbook de F4-04 + F5-04.

### 4) `explanation` se preserva textual

Cada pregunta conserva la `explicacion` original del .ts (texto
idéntico). El alumno debe ver la misma explicación que veía con el
generador. Esto preserva la voz pedagógica del autor original.

### 5) `options[].because` queda VACÍO

Los .ts originales no tienen justificación POR OPCIÓN (tienen una
explicación general por pregunta). F6-02 deja `options[].because = ""`
para todas. Si en el futuro se quiere justificar cada distractor (W3+
quiz explanations mejoradas), se puede poblar.

### 6) Sin mirror byte-a-byte a `api/`

Los bancos son UI-only (los consume el editor y el runtime web, que
vive en `apps/web/`). El backend los persiste a través de
`QuizVersion.questions` (el modelo pre-existente). No hay un mirror
en `api/src/lib/` — el patrón "mirror" de F4-04/F5-04 no aplica
porque los bancos no son lógica compartida, son datos.

### 7) `registerBancosEconomia()` es EXPLICITO, no auto-llamado

El `TEMPLATE_REGISTRY` se llena con `registerBancoTemplate(t)` en
cada llamada a `registerBancosEconomia()`. No se llama
automáticamente al importar el módulo — el caller decide cuándo
inscribirlos. Esto evita "side effects" en imports (que complican
tests y tree-shaking).

### 8) Tests sin DB

`bancos-economia.spec.ts` es puro (sin Prisma, sin servidor, sin
fetch). Sigue el patrón de `banco.spec.ts:1-243` (F4-03) — testea
el shape, la paridad, la unicidad, la validez MC, y la integración
con el framework `basic/banco`. No testea persistencia (eso es
F3-04/quiz-attempts, fuera de scope).

## Aceptación

- `pnpm test:web` → **664/664** (era 617; +47 F6-02). 0 fallidos, 0
  regresiones.
- `pnpm test:api` → **232/232** (sin cambios).
- Typecheck web: sin errores introducidos por F6-02.

## Lo que F6-02 **no** cubre

- **Borrar los .ts originales**. F6-02 sólo EXTRAE los datos. El
  borrado es F6-06, que también migrará los subtipos PARAMétricos a
  generadores paramétricos reales (F6-07+). Hasta entonces, los dos
  sistemas conviven.
- **Persistencia en DB**. Los bancos viven en `MCQuestion[]` en el
  bundle. Para sembrarlos en la DB (`QuizQuestionSet` /
  `QuizVersion`), hay que exportar a JSON y usar el importador
  (`QuizImportJson.tsx`). Eso es F6-03+ si surge la necesidad.
- **Mirror al `api/`**. F6-02 es UI-only. El backend consume los
  bancos indirectamente (a través del modelo `QuizVersion.questions`).
- **UI de browse/selección**. El `BancoCuestionarios.tsx` ya existe y
  consume el endpoint `GET /api/quizzes/banco` (que lee de la DB).
  Si los bancos quieren exponerse ahí, hay que sembrarlos (F6-03+).

## Limitaciones

- **`dificultadMinima` se preserva como tag** pero el `poolPor(...)`
  de cada generador NO se respeta en el banco. El banco tiene todas
  las preguntas mezcladas por dificultad; el filtro por dificultad
  se delega a la `SelectionConfig.byTags` del template.
- **Sin distinción de variantes por `basico|intermedio|avanzado`**.
  Los generadores originales a veces cambiaban las opciones o el
  enunciado por dificultad. F6-02 fija las opciones por pregunta; un
  quiz de dificultad `basico` ve las mismas opciones que uno de
  `avanzado`. Es una simplificación aceptable (el banco es
  estático por diseño).
- **No hay integración con el `BancoCuestionarios.tsx`** todavía
  (requiere sembrar en DB primero).
