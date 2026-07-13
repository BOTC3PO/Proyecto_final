# DIAG-ITEM-45 — Editor de mapas (PLAN-G §5)

**Fecha**: 2026-07-04 · **Alcance de esta ronda**: sólo §5 (mapas), a pedido explícito del usuario — el resto de PLAN-G (§1-4) queda para otra sesión.

Todo lo de abajo se reprodujo en vivo contra el editor real (`/herramientas/mapa-editor`, Chrome vía MCP), no sólo leyendo código.

## §5.a — Escalado con zoom (5 síntomas de una raíz)

**Causa confirmada**: el zoom (`useViewBoxZoom`) se implementa achicando el
`viewBox` del SVG. Marcadores (`AnnotationLayer.tsx`), rutas/áreas/textos
(mismo archivo), capas GeoJSON (`GeoJsonLayer.tsx`) y los bordes de países
(`MapaEditorFull.tsx`/`MapaStandalone.tsx`) dibujaban radios/grosores/
tamaños de fuente con un valor FIJO en unidades del mapa. Al acercar, cada
unidad del mapa ocupa más píxeles de pantalla → todo eso crecía sin límite.
Medido en vivo: con zoom máximo (viewBox 80/1000 ≈ 12.5×), un marcador
seleccionado (r=8 sin escalar) se veía ~12.5× más grande que a zoom normal.

**Fix**: `apps/web/src/lib/maps/escala-por-zoom.ts` — `escalaPorZoom(viewBox.w, anchoBase)`
devuelve el factor (1 = sin zoom) para multiplicar cualquier tamaño "de
pantalla". Aplicado en `AnnotationLayer.tsx`, `GeoJsonLayer.tsx`,
`MapaEditorFull.tsx` (países + los overlays de "dibujando en curso":
área/ruta/medición) y `MapaStandalone.tsx` (países + preview de flecha).
Verificado en vivo: a zoom máximo, r pasó de 8 a 0.64 (8 × 0.08), que a
12.5× de magnificación vuelve a verse como 8 — tamaño visual constante.

Tests: `AnnotationLayer.spec.tsx` (zoom=0.5 y default), `escala-por-zoom.spec.ts`.

## §5.c — Desplazamiento que se bloquea

**Causa confirmada** (no era un conflicto de bajo nivel entre drags): el
pan sólo se activaba con la herramienta "Mover" (`active: activeTool ===
"select"`). Con cualquier otra herramienta (Ruta, Área, Marcador, Texto,
Medir) el pan estaba MUERTO — un arrastre no movía el lienzo, y al soltar
el mouse el `onClick` agregaba un punto en la posición final del arrastre.
Reproducido en vivo: dibujando una ruta con 2 puntos pendientes, un
arrastre de "pan" agregaba un 3er punto no deseado en vez de desplazar el
mapa. Para desplazarse había que cambiar a "Mover" — lo que CANCELA los
puntos pendientes (hay un `useEffect` que limpia `pendingArea`/
`pendingRuta`/`pendingMedir` al cambiar de herramienta). Ese era el
"bloqueo" real: no había forma de pan sin perder el dibujo en curso.

**Fix**: pan activo SIEMPRE (`active: true`), con el mismo patrón que ya
usaba `MarcarMapaRenderer.tsx` para distinguir un arrastre de un click
(`wasPanRef` + umbral de 4px de movimiento entre pointerdown/pointerup).
Verificado en vivo: arrastrar durante "Ruta" con 2 puntos pendientes ahora
desplaza el mapa sin agregar un 3er punto; un click normal (sin arrastre)
sigue agregando puntos con normalidad.

Test: caso `ITEM-45.c` en `MapaEditorFull.tools.spec.tsx`.

## §5.d — La leyenda no refleja los colores reales

**Causa confirmada**: el swatch de color de la leyenda (`<span
className="sw" style={{ background: c.color }} />`) usaba un className
LITERAL `"sw"`. El CSS que le da tamaño (`.canvasLegend .sw { width: 12px;
height: 12px; ... }`) vive en `MapaEditorFull.module.css` — un CSS Module,
donde `.sw` se compila a una clase hasheada que sólo recibe un elemento
con `className={styles.sw}`. El swatch de la lista de capas (que sí se ve
bien) usa una clase GLOBAL distinta (`.vb-layer .sw` en `index.css`), por
eso nadie notó que el de la leyenda estaba roto: la leyenda mostraba el
nombre de la capa con NINGÚN swatch visible (0×0, sin estilos aplicados),
no un color "equivocado".

**Fix**: `className={styles.sw}` en vez de `"sw"` (una línea).
Confirmado en vivo con zoom del navegador: antes no había ningún punto de
color junto a "Anotaciones" en la leyenda; después sí, y coincide con el
color de la capa.

Test: `MapaEditorFull.leyenda.spec.tsx` (falla contra el código viejo,
confirmado revirtiendo el fix temporalmente).

## §5.b — Datos y cobertura

- **Provincias**: `GET /api/maps/provincias` (montado, probado en vivo
  contra la API real corriendo) devuelve un catálogo de **251 países**
  con sus divisiones admin1 (`api/src/maps/provincias/*.topo.json`,
  generado por `build-provincias.mjs`). `GET /api/maps/provincias/AR`
  responde 200. Es decir: al nivel de API/datos, la cobertura de
  provincias YA es amplia — no encontré evidencia de que falten países a
  nivel de datos.
- **Geonames integrado al editor** (2026-07-04, a pedido explícito):
  se encontró `api/src/maps/geonames_index.sqlite` — un dataset GeoNames
  real (505 países/ciudades, 63k+ nombres alternativos en distintos
  idiomas) que existía en el repo pero NINGÚN endpoint lo consultaba
  (grep de `geoname_feature`/`alternate_name`/`iso_language` en todo
  `api/src` daba 0 resultados). Se armó un endpoint nuevo,
  `GET /api/maps/geonames/buscar?q=`, y un "Buscar lugar" en
  `MapaEditorFull.tsx`: el docente escribe un nombre (funciona con
  nombres en español vía `alternate_name`, ej. "Mogadiscio" → Somalia),
  elige un resultado, y el mapa se centra ahí (zoom ~120/1000 para
  ciudades, ~300/1000 para países) con un marcador agregado
  automáticamente con el nombre del lugar. Verificado en vivo (Chrome
  MCP + JS directo sobre el DOM): center/zoom y marcador correctos para
  Mogadishu (ciudad) y Argentina (país).
  - Nota de nombres: `CONTENT_SQLITE_PATH` (usado por `maps/catalog.ts`
    para el manifest-cache de TopoJSON, tabla `map_assets`) apunta HOY
    al MISMO archivo por coincidencia/legado — son dos usos no
    relacionados del mismo path. No se tocó esa lógica (sigue fallando
    en silencio y cayendo a `express.static`, sin romper nada). La
    búsqueda de lugares usa su propia env var, `GEONAMES_SQLITE_PATH`
    (mismo archivo por default).
- **Mapa base "gris, pocos detalles"**: es el TopoJSON político/físico
  propio (sin tiles de un proveedor externo tipo OSM/Mapbox). Cambiar de
  proveedor de tiles tiene implicancias de licencia/costo — el propio
  plan marca esto como una decisión a tomar CON el usuario antes de
  integrar nada (`Riesgos` de PLAN-G). Sigue sin resolver.

## Qué NO se tocó en esta ronda

PLAN-G §1 (materiales), §2 (teoría/TTS), §3 (UX de editores — requiere
sesión de observación en vivo con el usuario) y §4 (tabla periódica/
recetas) quedan pendientes; el usuario pidió enfocar sólo §5 esta vez.
