# Auditoría de generadoresV2 — clasificación de subtipos

Auditoría solicitada en VBLang v2 (sección G3/H4). Zip auditado: última versión anclada por Javier. Método: análisis estático de los 232 subtipos mapeados en los `case` de cada generador, con clasificador por señales de código + revisión manual de ambiguos y muestreo de calibración por módulo.

## Criterio

- **PARAMÉTRICO** — sortea valores con el PRNG y **computa** la respuesta (proceso real). Ej.: `caida_libre` sortea t y llama a la calculadora física.
- **PARAMÉTRICO CON DATOS** — sortea entidades de una tabla de datos reales y computa/compara sobre ellas. Legítimo: combinatoria rica. Ej.: `electronegatividad` sortea pares de elementos y compara valores reales; `molaridad` sortea compuesto + valores y calcula.
- **POOL DISFRAZADO** — la respuesta es un atributo fijo de la fila sorteada o una opción conceptual fija. No representa proceso; la "generación" es elegir de una lista. **El hallazgo de Javier, confirmado.**

## Resultado global

| Categoría | Subtipos | % |
|---|---|---|
| Paramétrico | 138 | 59 % |
| Paramétrico con datos | 24 | 10 % |
| **Pool disfrazado** | **70** | **30 %** |
| Total | 232 | |

Física y matemáticas: limpios (paramétricos casi al 100 %). El problema se concentra en **economía (39 de 70)**, **AtomosEnlaces de química (20)**, **Seguridad química (3)**, **biología (3)** e **informática (1+)**.

## Los 70 pools, con sub-veredicto

Sub-veredictos: **BANCO** = conocimiento inherentemente de lookup; no tiene versión paramétrica honesta → migrar al modelo de slots/banco de preguntas (donde ser pool es legítimo) y sacarlo del catálogo de "generadores". **PARAMETRIZABLE** = existe un proceso computable; candidato a upgrade real. Los sub-veredictos de los no leídos línea por línea son juicio semántico por subtipo — confirmar al implementar.

### Economía (39) — el módulo más afectado
**EconomiaGeneral (16):** los `quiz_*` (aportes_contribuciones, cft_interes, deuda_buena_mala, ganancia_equilibrio, gastos_esenciales, interes_simple_compuesto, liquidez, publicidad_enganosa) son pools locales diminutos — `quiz_liquidez` tiene **2 preguntas hardcodeadas** — todos **BANCO**, y duplican conceptualmente a sus pares de Finanzas (deduplicar al migrar). `agentes_economicos`, `clasificacion_bienes`, `estructuras_mercado`, `politica_fiscal_monetaria` → **BANCO**. `cft_mayor_interes`, `ganancia_vs_equilibrio`, `simple_vs_compuesto` → **PARAMETRIZABLE** (comparar CFTs/intereses con montos sorteados es cómputo puro). `gastos_fijos_variables` → **BANCO**.
**Finanzas (10):** `deuda_buena_mala`, `publicidad_enganosa`, `seguros_familia`, `ingresos_activos_pasivos`, `gastos_*`, `ahorro_consumo` → **BANCO**. `cft_vs_interes`, `liquidez_personal`, `presupuesto_familiar` → **PARAMETRIZABLE** (montos sorteados + cómputo de presupuesto/ratio).
**Contabilidad (7):** `clasificacion_cuentas` (14 filas), `naturaleza_cuentas`, `saldo_normal`, `ubicacion_estados`, `bienes_derechos_obligaciones`, `hechos_patrimonio` → **BANCO** (clasificar cuentas ES lookup). `variaciones_patrimoniales` y `aportes_contribuciones` → **PARAMETRIZABLE** (montos y porcentajes computables).
**EconomiaAR (5):** `descuentos_obligatorios`, `monotributo`, `recibo_basico` → **PARAMETRIZABLE** (¡los tres son cálculos sobre sueldos/categorías — los más valiosos de upgradear de toda la lista!). `formal_informal`, `jurisdiccion_impuestos` → **BANCO**.

### Química (25)
**AtomosEnlaces (20):** `configuracion_electronica` → **PARAMETRIZABLE** (computable desde Z con Aufbau) — además tiene **bug: distractores fijos**, `.slice(0,3)` sin barajar, siempre los mismos 3. `particulas_subatomicas` → **PARAMETRIZABLE** (p/n/e desde Z y A es resta). `combustion`, `sintesis`, `descomposicion`, `desplazamiento`, `neutralizacion_tipo` → **BANCO** salvo que se generen ecuaciones (caro). `geometria_molecular`, `metodos_separacion`, `enlace_*`, `polaridad_enlaces`, `iones_cationes_aniones`, `niveles_subniveles`, `orbitales_spdf`, `mezcla_*`, `sustancia_pura_mezcla`, `propiedades_fisicas_quimicas`, `tabla_periodica_clasificacion`, `tendencias_periodicas` → **BANCO** (conocimiento clasificatorio).
**Seguridad (3):** `pictogramas_ghs`, `materiales_inflamables`, `riesgos_toxicos` → **BANCO** puro (es memorización normativa, está bien que lo sea).
**AcidoBase (1):** `fuerza_acidos_bases` → **BANCO**. (Nota: `Ka_pKa`/`Kb_pKb` resultaron mixtos al releer — verificar: pKa = −log Ka es cómputo trivial; si eligen de tabla, upgrade de 10 líneas.)
**Equilibrio (2):** `anodo_catodo` → **BANCO**; `graficos_cinetica` → **PARAMETRIZABLE** cuando exista el motor visual (E4 — generaría el gráfico con parámetros sorteados).

### Biología (3)
`clasificacion_seres_vivos` → **BANCO**. `genetica_mendel` → **PARAMETRIZABLE** (cuadros de Punnett son computables — upgrade muy lindo pedagógicamente). `piramide_biomasas` → **PARAMETRIZABLE** (regla del 10 % con valores sorteados).

### Informática (1)
`algebra_booleana` → **PARAMETRIZABLE** (generar expresiones booleanas y evaluarlas es exactamente lo que un generador debería hacer).

### Matemáticas (2)
`lenguaje_algebraico` → **BANCO** (traducción enunciado↔expresión de lista). `probabilidad_simple` → **PARAMETRIZABLE** (sortear el experimento y computar la probabilidad — raro que esté como pool).

## Hallazgos colaterales

1. **`crearQuiz` está bien:** baraja centralizadamente con el PRNG y recalcula `indiceCorrecto` — descartado el bug sistémico de "la primera opción siempre es la correcta".
2. **Bug puntual:** `configuracion_electronica` arma distractores con `ELEMENTOS.filter(...).slice(0, 3)` — deterministas, siempre los mismos tres. Tras dos ejercicios, el alumno los reconoce por descarte. Fix de una línea (shuffle antes del slice) aunque el subtipo se upgradee después.
3. **Duplicación EconomiaGeneral↔Finanzas:** al menos 6 subtipos conceptualmente repetidos entre ambos módulos (`deuda_buena_mala`, `cft`, `liquidez`, `gastos_esenciales`, `publicidad_enganosa`, `aportes`). Al migrar a bancos, consolidar.

## Recomendación

1. **No borrar nada.** Los 70 pools son contenido válido con el mecanismo equivocado. El destino natural de los **BANCO (~48)** es exactamente el modelo de slots de VBLang v2: migrarlos como bancos de preguntas estáticas por tema (donde ser pool es el diseño, no un disfraz) y retirarlos del catálogo de "generadores automáticos".
2. **Upgradear los PARAMETRIZABLE (~22) por valor:** primero `recibo_basico`/`descuentos_obligatorios`/`monotributo` (EconomiaAR — cálculos reales del programa argentino, los más demo-relevantes), después `genetica_mendel`, `algebra_booleana`, `configuracion_electronica`, `particulas_subatomicas`, `presupuesto_familiar`.
3. **Fix inmediato** del bug de distractores fijos (1 línea), independiente de todo lo demás.
4. La migración a bancos puede ser mayormente **mecánica** (extraer las tablas a JSON del formato del banco) — buen trabajo para MM3 con una tarea por módulo, una vez que exista el modelo de slots.
