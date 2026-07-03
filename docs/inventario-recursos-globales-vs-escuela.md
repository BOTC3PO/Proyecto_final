# Inventario de recursos globales → por escuela (PLAN-C §3, ítem 26)

**Fecha**: 2026-07-03. Análisis pedido por el ítem 26: "elaborar un plan específico para
extender funciones públicas hacia funciones por escuela". Patrón objetivo: cada recurso gana
`schoolId String?` — `null` = global (visible para todos), no-null = propio de una escuela;
lectura = global ∪ propios; escritura = admin/directivo sólo sobre los de su escuela, los
globales sólo el admin de plataforma.

## Resultado del inventario: el patrón ya existe para los 3 recursos grandes

Verificado en `api/prisma/schema.prisma` y las rutas correspondientes — **no hace falta
migración**, ya están implementados con exactamente el patrón `schoolId` nullable +
`visibility` ("privada"/"escuela"/"publica"):

| Recurso | Modelo | Campo scoping | Ruta con el guard |
|---|---|---|---|
| Plantillas de ejercicios | `PlantillaEjercicio` | `schoolId String?` + `visibility` | `api/src/routes/plantillas.ts` (`canRead()`) |
| Datasets VBLang | `VblangDataset` | `schoolId String?` + `visibility` | `api/src/routes/vblang-datasets.ts` (`canReadDataset()`) |
| Libros/teoría compartida | `Libro` | `schoolId String?` + `visibility` | `api/src/routes/libros.ts` (`canReadLibro()`/`canEditLibro()`) |

Estos tres son el patrón de referencia a citar en `docs/roles.md` (ya enlazado desde la matriz
de §1) — no requieren trabajo nuevo de PLAN-C.

## Recursos que quedan global-only — por diseño, no por omisión

| Recurso | Modelo | Por qué queda global |
|---|---|---|
| Generadores de ejercicios | `GeneradorAdmin` | Son algoritmos de generación de contenido pedagógico (por materia/tema), curados centralmente como el currículum — fragmentarlos por escuela diluiría la calidad y crearía mantenimiento N-veces mayor sin pedido de negocio que lo justifique. Sigue exclusivo del admin de plataforma. |
| Diccionarios (`dictionary-*`) | tablas de diccionario | Recurso de referencia lingüística/enciclopédica, no contenido curricular de una escuela particular — no tiene sentido "el diccionario de la Escuela X". |
| `Page` (documentos TuesdayJS) | `Page` | **Hallazgo de esta auditoría**: el ítem 29 asumía que esto era "páginas públicas de la escuela", pero en el código es almacenamiento interno de escenas/canvas referenciadas por módulos y quizzes (`AdminPages.tsx` es un visor solo-ADMIN, sin ninguna ruta pública). No hay feature de "sitio público por escuela" hoy. Decisión (2026-07-03, confirmada con el usuario): no construir esa pieza en este plan — la personalización de escuela (§4) se acota a branding (logo/ícono/colores), sin página pública. Si en el futuro se pide un sitio público real por escuela, es un modelo y una ruta nuevos, no un scoping de `Page`. |

## Conclusión

El ítem 26 queda **cerrado en análisis**: la migración incremental "recurso por recurso" que
pedía el plan ya estaba hecha para los tres recursos que de verdad se comparten entre alumnos/
profesores de distintas escuelas (plantillas, datasets, libros). Lo que falta no es código de
scoping sino más bien vigilar que el código *nuevo* que se agregue a futuro para estos recursos
siga usando `schoolId`/`visibility` en vez de reinventar el chequeo (ver la "regla para código
nuevo" en `docs/admin-inventario-capacidades.md`).
