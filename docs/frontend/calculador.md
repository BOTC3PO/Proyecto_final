# Frontend — Subsistema calculador

| | |
|---|---|
| **Estado** | Parcial — directorio `calculador/` en construcción; cálculo activo en `generadoresV2/fisica` |
| **Audiencia** | Frontend, contenido |
| **Última actualización** | 2026-05-30 |
| **Fuente de verdad** | `apps/web/src/calculador/`, `apps/web/src/generadoresV2/core/types.ts`, `apps/web/src/generadoresV2/fisica/calculadora.ts` |

## Estado actual

El directorio `apps/web/src/calculador/` es hoy un **scaffold vacío**: contiene cinco subcarpetas
(`core/`, `fisica/`, `matematicas/`, `economia/`, `estadistica/`) y cada una incluye un único archivo
**vacío** llamado `dir` (0 bytes, placeholder). **Ningún archivo del código importa desde
`calculador/`** (verificado con búsqueda de `import … "…/calculador"`). 🚧 En construcción.

> No documentamos APIs ni props de `calculador/` porque aún no existen — sería inventarlas. Esta
> página describe el subsistema de **cálculo real** que hoy vive bajo `generadoresV2` y que un futuro
> `calculador/` previsiblemente reemplazaría o consolidaría. `POR CONFIRMAR (calculador/)` el alcance
> y la API definitivos.

## El contrato `Calculator`

El cálculo paramétrico se modela con la interface `Calculator` (en
`generadoresV2/core/types.ts`):

```ts
interface Calculator { calcular(req: CalculoRequest): CalculoResponse }
```

- **`CalculoRequest`** — `{ tipo: string; datos: Record<string, number> }` (el `tipo` selecciona la
  fórmula; `datos` aporta las variables).
- **`CalculoResponse`** — `{ resultado: number; pasos: string[] }` (resultado numérico + pasos
  legibles del procedimiento).

Los generadores reciben un `Calculator` por inyección y lo usan dentro de `generarEjercicio(subtipo,
dificultad, calc)`. Solo **Física** instancia una calculadora real; las demás materias reciben un
stub (ver [`generadores.md`](./generadores.md)).

## Calculadora de Física — `generadoresV2/fisica/calculadora.ts`

`crearCalculadoraFisica(): Calculator` devuelve una calculadora cuyo `calcular({ tipo, datos })`
resuelve con un `switch` sobre ~60 `tipo`s y devuelve `{ resultado, pasos }`. Por defecto (tipo no
soportado) retorna `NaN` con el paso `"Tipo no soportado"`. Agrupados por tema:

| Tema | Tipos (`tipo`) soportados |
|---|---|
| **Cinemática** | `MRU_distancia`, `MRUV_velocidad_final`, `MRUV_posicion`, `caida_libre`, `movimiento_vertical_altura_max`, `movimiento_horizontal_alcance`, `relacion_distancia_tiempo_{distancia,velocidad,tiempo}` |
| **Conversiones** | `conversion_unidades`, `conversion_C_a_F`, `conversion_F_a_C`, `conversion_C_a_K`, `conversion_K_a_C` |
| **Calor / termodinámica** | `calor`, `calor_masa`, `calor_delta_t`, `cambio_estado`, `dilatacion_lineal` |
| **Electricidad** | `ley_ohm_calcular_{V,I,R}`, `potencia_electrica`, `consumo_electrico`, `resistencia_serie`, `resistencia_paralelo` |
| **Dinámica / fuerzas** | `suma_fuerzas`, `peso`, `masa_desde_peso`, `friccion`, `friccion_coeficiente`, `friccion_normal`, `plano_inclinado`, `ley_hooke`, `ley_hooke_constante`, `ley_hooke_deformacion` |
| **Trabajo y energía** | `trabajo_mecanico`, `energia_cinetica`, `energia_potencial`, `conservacion_energia`, `potencia_mecanica` |
| **Ondas** | `velocidad_ondas`, `longitud_onda`, `frecuencia_onda`, `calcular_frecuencia`, `calcular_periodo` |
| **Fluidos** | `densidad`, `masa_desde_densidad`, `volumen_desde_densidad`, `presion`, `presion_fuerza`, `presion_area`, `presion_hidrostatica`, `caudal`, `caudal_area_velocidad` |

Cada caso aplica la fórmula correspondiente sobre `datos` y construye el array `pasos` con la
explicación. Algunos casos con bloque propio (p. ej. `resistencia_serie`, `resistencia_paralelo`,
`suma_fuerzas`) operan sobre arreglos de valores en `datos`.

### Uso desde los generadores

`generadoresV2/fisica/index.ts` crea la calculadora una vez y la inyecta a cada generador de física:
`new G(prng, crearCalculadoraFisica())`. El generador, dentro de `generarEjercicio`, llama
`calc.calcular({ tipo, datos })` para obtener el resultado y los pasos que luego pueblan el
`EjercicioNumerico` (`resultado`, `toleranciaRelativa`, `unidades`).

> Por su diseño determinista (datos derivados del `DeterministicPrng`), un mismo ejercicio siempre
> arroja el mismo resultado de cálculo.

## Otras "calculadoras" en el cliente

Fuera del contrato `Calculator`, hay lógica de cálculo en otras capas (no forman parte de
`calculador/`):

- **Estadística de tablas/charts:** `blocks/stats/statsEngine.ts` (media, mediana, varianza,
  cuartiles, regresión, correlación…) y los motores de fórmulas `blocks/stats/tableFormulas.ts` y
  `tableDSL.ts` — documentados en [`editor-bloques.md`](./editor-bloques.md).
- **Helpers de matemáticas:** `generadoresV2/matematicas/helpers/` (`calculo.ts`, `estadistica.ts`,
  `polinomios.ts`, `trigonometria.ts`).
- **Funciones graficadas:** `blocks/renderers/MathBlockRenderer.tsx` evalúa expresiones con `mathjs`.

## Archivos fuente documentados

- `apps/web/src/calculador/` (scaffold vacío)
- `apps/web/src/generadoresV2/core/types.ts` (interface `Calculator`, `CalculoRequest/Response`)
- `apps/web/src/generadoresV2/fisica/calculadora.ts` (calculadora de física)
- `apps/web/src/generadoresV2/fisica/index.ts` (inyección de la calculadora)
