/**
 * F6-07 — Inicialización de los bancos estáticos de F6-02/F6-03 al
 * `TEMPLATE_REGISTRY` del framework `basic/`.
 *
 * Side-effect a nivel de módulo: al ser importado, llama las 4
 * `registerBancosXxx()` (economía, química, biología, matemáticas)
 * que inscriben los 25 bancos (≈206 preguntas únicas) en el registry
 * global. A partir de ese momento, `getDescriptoresBasic(prng)` y
 * `listBancoTemplates()` los devuelven, y `getStaticCatalog()` los
 * incluye como ítems creables del catálogo.
 *
 * **Idempotencia**: `registerBancoTemplate()` usa `Map.set(id, t)` (no
 * `Map.add`), así que llamar las 4 funciones varias veces produce el
 * mismo estado final (los bancos se REEMPLAZAN por sí mismos). Tests
 * que necesiten un registry limpio deben invocar
 * `clearBancoTemplates()` (de `basic/banco`) en `beforeEach`.
 *
 * **Cableado**:
 *   - `catalog.ts` lo importa → `getStaticCatalog()` ve los bancos.
 *   - `ModuloDetail.tsx` lo importa (los editores V1/V2 que también lo
 *     hacían viven en `archive/web/pages/`) → `loadGeneratorModule("basic")`
 *     resuelve al synthetic module que envuelve a `getDescriptoresBasic`.
 *
 * **Por qué un init separado y no side-effect en cada `index.ts` de
 * banco**: cada `index.ts` se prueba aisladamente. Si el side-effect
 * estuviera en el index, el test de `BANCOS_QUIMICA` registraría
 * también los bancos de biología/matemáticas/economía (acoplamiento
 * entre tests). El init centralizado mantiene la separación: el test
 * llama explícitamente `registerBancosQuimica()` (o no, si quiere
 * registry vacío).
 */

import { registerBancosBiologia } from "./biologia/bancos";
import { registerBancosEconomia } from "./economia/bancos";
import { registerBancosMatematicas } from "./matematicas/bancos";
import { registerBancosQuimica } from "./quimica/bancos";

registerBancosEconomia();
registerBancosQuimica();
registerBancosBiologia();
registerBancosMatematicas();
