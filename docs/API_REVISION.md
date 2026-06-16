# Revisión de la API — seguridad, consistencia y bugs

Acompaña a `API_REFERENCIA.md` (los 231 endpoints auto-generados). Este documento son las **notas a mano**: lo que la extracción automática no ve. Tres ejes, como se pidió. Cada hallazgo verificado leyendo el montaje real (la heurística de grep da falsos positivos — ver nota de método).

## Nota de método (importante)
La detección automática de "endpoint sin auth" tiene **falsos positivos**: muchos routers aplican el guard a nivel router (`router.use(path, requireUser)`) en vez de por endpoint, y los nombres de middleware varían (`requireAdmin` vs `requireAdminAuth`). Cada hallazgo de abajo fue confirmado leyendo el código de montaje, NO solo por grep. Recomendación general: la auth a nivel router es más segura (no se puede olvidar en un endpoint nuevo) pero menos visible; conviene un test que verifique que todo endpoint no-público exige sesión.

---

## EJE 1 — SEGURIDAD

### ⚠️ Aclaración clave (corrige el encuadre): "dura de acceder" ≠ "segura"
La API tiene una capa de FRICCIÓN global (`api/src/index.ts:105-109`) que hace que una request desde fuera de la página suela fallar — PERO no es autorización:
- **CORS** (`cors({ origin: ENV.CORS_ORIGIN })`): solo lo aplica el NAVEGADOR. Una request desde curl/Postman/script no tiene política de origen — pasa. (Confirmado empíricamente: se logró leer endpoints "usando el formato que la API espera".)
- **helmet**: headers de seguridad, no identidad.
- **express.json**: rechaza body malformado, no verifica quién lo manda.
- **rate limiters**: solo en login/register/forgot-password/sync — NO en encuestas/block-documents/config.

Ninguna valida IDENTIDAD. Por lo tanto, un endpoint sin `requireUser` ES accesible por cualquiera que replique el formato del navegador (un alumno con devtools puede hacerlo). La "dureza" frena al curioso casual, no al motivado. **Los hallazgos de abajo siguen siendo reales: la fricción no sustituye a la auth faltante.**


### 🔴 Hallazgos reales (verificados)
1. **`encuestas` — CRUD completo sin autenticación.** `POST/PUT/PATCH/DELETE /api/encuestas` y `POST /api/encuestas/:id/votos` no importan ni usan `requireUser` (el router no tiene guard). Cualquiera sin sesión puede crear, editar, borrar encuestas y votar. **Confirmar y agregar `requireUser`** (y policy de staff para crear/editar/borrar; votar quizás solo requiere sesión).
2. **`block-documents` — crear/editar/leer sin auth.** `POST /api/block-documents`, `PATCH /api/block-documents/:id`, `GET /api/block-documents/:id` sin guard. Estos documentos son contenido de módulos (teoría). Sin auth, cualquiera crea/modifica documentos. **Revisar**: al menos escritura debe exigir sesión + ownership.
3. **`configuracion` — PATCH de materias/categorías sin auth.** `PATCH /api/config/materias` y `/api/config/categorias` sin guard: cualquiera modifica el catálogo global de materias. Debe ser admin-only.

### 🟡 Públicos por diseño (correctos, documentar como tales)
- `auth/*` (login, register, guest, refresh, forgot-password, bootstrap-admin) — deben ser públicos. ✓
- `dictionary/*`, `diccionarios/*`, `generators/*`, `consignas/*` — contenido de lectura pública. ✓ (aunque `consignas` podría querer sesión).
- `GET /api/perfil/:username`, `GET /api/escuelas/code/:code`, `GET /api/escuelas/:id` — lectura pública de perfiles/escuelas; OK si no exponen datos sensibles (verificar que el perfil no filtre email/datos privados).

### ✅ Falsos positivos del extractor (NO son bugs)
- **`economia` (20+ endpoints)** — parecían públicos pero el router aplica `economia.use(["/api/economia","/api/admin/economia"], requireUser)` (línea 119): **todos protegidos**. ✓ El extractor no liga el `.use` con array de paths.
- **`admin`** — usa `requireAdmin` (no `requireAdminAuth`); el extractor buscaba el otro nombre. Protegido. ✓

### Recomendación de seguridad
- Test automatizado: enumerar todos los endpoints y verificar que los no-listados-como-públicos respondan 401 sin sesión. Esto convierte "auth a nivel router" en algo verificable y evita que un endpoint nuevo nazca sin protección.
- Revisar el patrón `usuarioId` por query (economia, progreso): varios endpoints reciben `usuarioId` como query param y confían en él. Verificar que SIEMPRE se contraste contra el usuario autenticado (un alumno no debería leer saldos/progreso de otro pasando otro `usuarioId`). El de progreso ya lo hace (chequea `requesterId === targetUsuarioId || isStaff`); confirmar que economia hace lo mismo.

---

## EJE 2 — CONSISTENCIA front↔back

### Hallazgos
1. **Nombres de params de ruta divergentes** (causa de bugs ya vistos): la ruta declara `:aulaId` pero componentes leen `id` (carga infinita de configuración, FIX-CONFIG-01). **Patrón a auditar**: cruzar cada `path: ':xxx'` del router con el `useParams()` del componente. Inconsistencia conocida también en el doble nombre `teacherId` (back) vs `teacherIds` (front, nunca poblado — Q8 calendario).
2. **`mine` ignorado** (Q4): `/api/modulos` no lee `mine`, pero `/api/modulos/buscar` sí. Dos endpoints con contrato distinto para el mismo concepto. Consolidar.
3. **Validación zod inconsistente**: 33 de 57 routers usan zod; los otros validan a mano (chequeos `if (!campo)`) o no validan. Los que validan a mano dan errores 400 con mensajes ad-hoc. Recomendación: estandarizar a zod para mensajes de error uniformes y contratos claros (esto además alimenta la doc auto-generada futura).
4. **Shapes de respuesta variados**: algunos devuelven `{items: [...]}`, otros `[...]` directo, otros `{data: ...}`. El front tiene que conocer cada uno. Documentar el shape de cada endpoint (la referencia lo puede incluir si se parsea el `res.json`).

---

## EJE 3 — BUGS FUNCIONALES (más allá de los ya conocidos)

### Confirmados o de alta sospecha
1. **`Promise.all` frágil en cargas combinadas** (aula.tsx): une `/api/modulos` + `/api/progreso`; si una falla, el `.catch` borra ambas y la pantalla queda vacía. Patrón a buscar en otras pantallas (cualquier `Promise.all` de fetches sin tolerancia a fallo parcial). Fix: `Promise.allSettled` o catch por-llamada, para que un fallo parcial no vacíe todo.
2. **Spinner infinito por early-return antes de `setLoading(false)`** (FIX-CONFIG-01): el patrón `if (!x) return` dentro de un effect que seteó `loading=true` deja el spinner colgado. Auditar otros componentes con el mismo patrón.
3. **Endpoints que confían en query `usuarioId` para identidad** (ver eje seguridad): además de riesgo, es fuente de bugs — si el front manda `usuarioId` vacío o "demo-alumno" (visto en aula.tsx) cuando la sesión no resolvió, da 400/403.

### Para diagnosticar con runtime (pendiente de captura)
- Aula: chat y leaderboard dan error (Javier los recuerda). Endpoints a capturar cuando encienda el entorno.
- Módulo: no persiste teoría/quiz/materia — sospecha de desajuste `ModuleSchema` (acepta `theoryItems`/`subject`, no `teoriaId`/`libroId`).

---

## Cómo mantener esta doc (híbrido)
- **Auto-generada** (`API_REFERENCIA.md`): se regenera corriendo el extractor (`/tmp/extract_api2.py`, conviene moverlo a `api/scripts/extract-api-reference.ts`). Captura método/path/auth/policy sin envejecer.
- **A mano** (este doc): los hallazgos y el porqué. Se actualiza cuando se arregla algo.
- **Siguiente paso sugerido**: portar el extractor a un script del repo + un test que falle si un endpoint nuevo no declara auth explícita. Eso hace la seguridad verificable en CI.

## Tareas que salen de esta revisión
- SEC-01: agregar auth a `encuestas` (CRUD), `block-documents` (escritura), `configuracion` (PATCH admin-only). 🔴
- SEC-02: test de cobertura de auth (todo endpoint no-público exige 401 sin sesión). 🟡
- CONS-01: auditar params de ruta (`:xxx` vs `useParams`) en todos los componentes. 🟡
- CONS-02: estandarizar validación zod en los 24 routers que no la usan. 🟡 (grande, opcional)
- BUG-01: reemplazar `Promise.all` por tolerancia a fallo parcial en cargas combinadas. 🟡
