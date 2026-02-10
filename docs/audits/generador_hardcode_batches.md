# Inventario de hardcodeos en `apps/web/src/generador/**`

Cobertura total auditada para materias: `fisica`, `matematicas`, `quimica`, `economia`.

- Archivos totales auditados: **261**
- fisica: 40 archivos en 2 lotes (tamaños: 25, 15)
- matematicas: 59 archivos en 3 lotes (tamaños: 25, 25, 9)
- quimica: 102 archivos en 5 lotes (tamaños: 25, 25, 25, 25, 2)
- economia: 60 archivos en 3 lotes (tamaños: 25, 25, 10)

## Convenciones de registro

- `hardcodeType`: `TEXT`, `PARAM_LIMITS`, `EXPLANATION`, `STEPS`, `MIXED`.
- `snippetType`: tipo de evidencia detectada (consigna, límites por dificultad, explicación, pasos, tolerancias/unidades, doble fuente).
- `status`: inicializado en `PENDING` para priorización/migración posterior.

## Prioridad alta: doble fuente (`ENUNCIADOS_*` + fallback inline)

Estos archivos quedaron marcados con `snippetType=DOUBLE_SOURCE_FALLBACK` en el CSV para unificación prioritaria.

- `apps/web/src/generador/fisica/CaidaLibre.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/Calor.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/CambiosEstado.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/Caudal.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/ConservacionEnergia.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/ConsumoElectrico.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/ConversionTemperatura.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/ConversionUnidadesCinematica.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/Densidad.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/DilatacionTermica.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/EcuacionLentes.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/EnergiaCinetica.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/EnergiaPotencial.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/FrecuenciaPeriodo.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/Friccion.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/IndiceRefraccion.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/LeyHooke.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/LeyOhm.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/LongitudOnda.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/MRU.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/MRUV.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/MovimientoHorizontal.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/MovimientoVertical.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/OpticaGeometrica.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/Peso.ts` (fisica-lote-01)
- `apps/web/src/generador/fisica/PlanoInclinado.ts` (fisica-lote-02)
- `apps/web/src/generador/fisica/PotenciaElectrica.ts` (fisica-lote-02)
- `apps/web/src/generador/fisica/PotenciaMecanica.ts` (fisica-lote-02)
- `apps/web/src/generador/fisica/Presion.ts` (fisica-lote-02)
- `apps/web/src/generador/fisica/PresionHidrostatica.ts` (fisica-lote-02)
- `apps/web/src/generador/fisica/RelacionDistanciaTiempo.ts` (fisica-lote-02)
- `apps/web/src/generador/fisica/ResistenciaParalelo.ts` (fisica-lote-02)
- `apps/web/src/generador/fisica/ResistenciaSerie.ts` (fisica-lote-02)
- `apps/web/src/generador/fisica/SumaFuerzas.ts` (fisica-lote-02)
- `apps/web/src/generador/fisica/TrabajoMecanico.ts` (fisica-lote-02)
- `apps/web/src/generador/fisica/VelocidadOndas.ts` (fisica-lote-02)
