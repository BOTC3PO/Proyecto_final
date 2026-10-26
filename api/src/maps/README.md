# Provincias por país — pipeline y servido

Filtra el GeoJSON global de provincias/estados de Natural Earth y genera un
**TopoJSON liviano por país**, más una ruta para servirlos.

Resultado verificado sobre `ne_10m_admin_1_states_provinces.geojson`:
**39 MB → 4.42 MB** en 251 archivos. Argentina = **36.8 KB** (24 divisiones).

## 1. Build (una vez, o cuando cambie el dataset)

```bash
npm install topojson-server topojson-simplify topojson-client
node build-provincias.mjs ne_10m_admin_1_states_provinces.geojson ./out
# opciones:
node build-provincias.mjs <in.geojson> <out> --simplify=0.0005 --quantize=1e5
```

Genera en `<out>/`:
- `<ISO_A2>.topo.json` por país (ej. `AR.topo.json`, `BR.topo.json`).
- `index.json` — catálogo (código, nombre, cantidad de divisiones, bytes).

Cada feature queda con properties recortadas a lo útil:
`name`, `name_es`, `iso_3166_2`, `type`, `type_en`, `adm1_code`.
El resto de las ~121 properties de Natural Earth se descartan para achicar.

**Tuning:** `--simplify` sube/baja el recorte de geometría (0 = solo cuantizar;
más alto = más liviano y bordes más rectos). `--quantize` la precisión de la
grilla. Para mapas escolares clickeables, los defaults ya andan bien.

## 2. Servido

Copiá `<out>/` a `api/src/maps/maps/political/admin1/` (o seteá
`PROVINCIAS_DIR`) y montá la ruta:

```ts
import { provinciasRouter } from "./routes/provincias";
app.use("/api/maps/provincias", provinciasRouter);
```

- `GET /api/maps/provincias` → catálogo.
- `GET /api/maps/provincias/AR` → TopoJSON de Argentina.

## 3. Cableado al renderer (provincias además de países)

El slot `world_states_provinces` ya existe en la gramática (`MapaBloque`) y
la respuesta por nombre también (`respuesta_nombre`). En el renderer, leer la
provincia clickeada de las properties igual que hoy se lee `ISO_A3` de países:

```ts
// hoy (países):   feature.properties.ISO_A3  -> compara contra respuesta_iso
// provincias:     feature.properties.name_es -> compara contra respuesta_nombre
//                 (o feature.properties.iso_3166_2 si querés código estable)
const objeto = topo.objects.provincias;          // nombre del objeto TopoJSON
const fc = feature(topo, objeto);                 // topojson-client
// onClick(prov) => prov.properties.name_es / .iso_3166_2
```

Para "mapa tipo escuela": cargás solo el país (ej. `/AR`), calculás su bbox
(`topojson-client.bbox`) y fijás el `viewBox` con pan/zoom apagado.

**Gotcha AR:** CABA (`AR-C`) es minúscula → blanco de clic difícil en vista
nacional. Considerá un affordance/zoom aparte.
