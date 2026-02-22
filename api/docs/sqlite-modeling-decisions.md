# Decisiones de Modelado SQLite — Plataforma Educativa

> **Fecha:** 2026-02-22
> **Fuentes analizadas:** `api/src/schema/*.ts`, `api/src/routes/*.ts`
> **Propósito:** Definir el modelo relacional SQLite para las entidades principales, justificando cada decisión en función de los patrones de consulta detectados.

---

## Resumen ejecutivo de estrategias

| Entidad | Estrategia | Razón principal |
|---|---|---|
| `usuarios` | JSON-híbrida | Perfiles opcionales (parent/teacher) no consultados individualmente |
| `escuelas` | 100% relacional | Tabla pequeña, esquema estable, queries simples |
| `membresias_escuela` | 100% relacional | Tabla puente — consultada frecuentemente por `schoolId` y `userId` |
| `aulas` | JSON-híbrida | Metadatos relacionales; `members[]` → tabla separada |
| `aula_members` | 100% relacional | Filtro `members.userId` es el access-check más frecuente del sistema |
| `modulos` | JSON-híbrida | Hot columns relacionales; contenido educativo (quizzes, recursos, niveles) como JSON |
| `quizzes` | JSON-híbrida | Metadata relacional; preguntas en `quiz_versions` |
| `quiz_versions` | JSON-híbrida | Lookup por `(quizId, version)`; `questions[]` y `params` como JSON |
| `quiz_attempts` | JSON-híbrida | Score/status relacionales; `answers` y `feedback` como JSON |
| `progreso_modulos` | 100% relacional | Upsert `(usuarioId, moduloId, aulaId)`; todos sus campos son hot |

---

## 1. `usuarios`

### Decisión: JSON-híbrida

**Patrones de consulta detectados:**
- Login: `WHERE (email = ? OR username = ?) AND isDeleted != 1`
- Autorización: `WHERE _id = ?` + proyección `role`, `schoolId`
- Validación registro: unicidad de `email`, `username`
- Búsqueda docente en reasignación: `WHERE _id = ? AND isDeleted != 1` → proyección `role`, `escuelaId`
- Parent flow: `WHERE _id IN (childIds)` → proyección `fullName`, `username`, `birthdate`

**Tamaño esperado:** Plataforma educativa regional → ~10k–100k filas. Escala media.

| Aspecto | Detalle |
|---|---|
| **Clave primaria** | `id INTEGER PRIMARY KEY` (sustituye al ObjectId de Mongo) |
| **Claves foráneas** | `school_id → escuelas(id)` (nullable) |
| **Columnas "hot"** | `email`, `username`, `role`, `school_id`, `is_deleted`, `birthdate` |
| **Índices** | `UNIQUE(email)`, `UNIQUE(username)`, `INDEX(school_id)`, `INDEX(role)`, `INDEX(is_deleted)` |
| **Columnas JSON** | `consents JSON` (3 campos opcionales, nunca filtrados), `parent_profile JSON` (childrenIds — sincronizado con `vinculos_padre_hijo`), `teacher_profile JSON` (managedClassIds — sincronizado con `aula_members`) |
| **Trade-offs** | (+) Queries de login y auth son O(1) por índice. (−) `parentProfile.childrenIds` y `teacherProfile.managedClassIds` son datos denormalizados; la fuente de verdad son `vinculos_padre_hijo` y `aula_members` respectivamente. Actualizar ambos en una transacción evita inconsistencias. |

```sql
CREATE TABLE usuarios (
  id           INTEGER PRIMARY KEY,
  username     TEXT NOT NULL,
  email        TEXT NOT NULL,
  full_name    TEXT NOT NULL,
  password_hash TEXT,
  role         TEXT NOT NULL CHECK(role IN ('ADMIN','USER','PARENT','TEACHER','DIRECTIVO','GUEST')),
  school_id    INTEGER REFERENCES escuelas(id),
  birthdate    TEXT,  -- ISO-8601
  guest_onboarding_status TEXT,
  is_deleted   INTEGER NOT NULL DEFAULT 0,
  deleted_at   TEXT,
  consents     JSON,          -- {privacyConsent, termsAccepted, consentedAt}
  parent_profile  JSON,       -- {childrenIds[]}  — denormalizado
  teacher_profile JSON,       -- {managedClassIds[]} — denormalizado
  created_at   TEXT NOT NULL,
  updated_at   TEXT NOT NULL
);

CREATE UNIQUE INDEX idx_usuarios_email    ON usuarios(email);
CREATE UNIQUE INDEX idx_usuarios_username ON usuarios(username);
CREATE INDEX idx_usuarios_school_id       ON usuarios(school_id);
CREATE INDEX idx_usuarios_role            ON usuarios(role);
CREATE INDEX idx_usuarios_is_deleted      ON usuarios(is_deleted);
```

---

## 2. `escuelas`

### Decisión: 100% relacional

**Patrones de consulta detectados:**
- Lookup por `_id` (relaciones desde usuarios, aulas)
- Lookup por `code` (registro de usuario con `schoolCode`)
- Lista paginada: `WHERE isDeleted != 1 ORDER BY createdAt DESC`
- PATCH de `subscriptionStatus`, `plan`, `pricePerStudent`

**Tamaño esperado:** Muy pequeño (~10s–100s de escuelas). Cabe en cache de conexión.

| Aspecto | Detalle |
|---|---|
| **Clave primaria** | `id INTEGER PRIMARY KEY` |
| **Claves foráneas** | Ninguna (es raíz del árbol de tenants) |
| **Columnas "hot"** | `code`, `subscription_status`, `is_deleted` |
| **Índices** | `UNIQUE(code)`, `INDEX(subscription_status)` |
| **Columnas JSON** | Ninguna — todos los campos son escalares simples |
| **Trade-offs** | (+) Joins simples y baratos por ser tabla pequeña. (−) `admin_ids` podría ser tabla puente; dado que no existe ruta "dame escuelas donde soy admin", se modela como tabla separada `escuela_admins` de todas formas para mantener FK integridad referencial. |

```sql
CREATE TABLE escuelas (
  id                  INTEGER PRIMARY KEY,
  name                TEXT NOT NULL,
  code                TEXT NOT NULL,
  address             TEXT,
  subscription_status TEXT CHECK(subscription_status IN ('ACTIVE','PAST_DUE','SUSPENDED','INACTIVE')),
  plan                TEXT CHECK(plan IN ('ENTERPRISE_BASIC','ENTERPRISE_STD','ENTERPRISE_PLUS')),
  price_per_student   REAL,
  is_deleted          INTEGER NOT NULL DEFAULT 0,
  created_at          TEXT NOT NULL,
  updated_at          TEXT NOT NULL
);

CREATE UNIQUE INDEX idx_escuelas_code ON escuelas(code);
CREATE INDEX idx_escuelas_subscription ON escuelas(subscription_status);

-- Tabla puente para adminIds (1:N escuela → admins)
CREATE TABLE escuela_admins (
  escuela_id  INTEGER NOT NULL REFERENCES escuelas(id),
  usuario_id  INTEGER NOT NULL REFERENCES usuarios(id),
  PRIMARY KEY (escuela_id, usuario_id)
);
```

---

## 3. `membresias_escuela`

### Decisión: 100% relacional

**Contexto:** En MongoDB, la membresía escolar está implícita en `usuarios.schoolId`. Al migrar a SQLite, se normaliza como tabla explícita para permitir múltiples roles por usuario en el futuro y mantener integridad referencial.

**Patrones de consulta detectados:**
- Validar que un usuario pertenece a una escuela (auth de classroom scope)
- Verificar `schoolId` del docente al reasignar (`teacher.escuelaId === classroom.schoolId`)
- Registrar usuario con `schoolCode` → resolver escuela + crear membresía

| Aspecto | Detalle |
|---|---|
| **Clave primaria** | `(usuario_id, escuela_id)` compuesta |
| **Claves foráneas** | `usuario_id → usuarios(id)`, `escuela_id → escuelas(id)` |
| **Columnas "hot"** | `usuario_id`, `escuela_id`, `role`, `status` |
| **Índices** | PK compuesta, `INDEX(escuela_id)`, `INDEX(usuario_id)` |
| **Columnas JSON** | Ninguna |
| **Trade-offs** | (+) Permite consultas directas "dame todos los miembros de esta escuela". (+) Integridad referencial garantizada. (−) Añade join en queries de auth, pero el resultado es cacheable por sesión JWT. |

```sql
CREATE TABLE membresias_escuela (
  usuario_id  INTEGER NOT NULL REFERENCES usuarios(id),
  escuela_id  INTEGER NOT NULL REFERENCES escuelas(id),
  role        TEXT NOT NULL DEFAULT 'member',
  status      TEXT NOT NULL DEFAULT 'active',
  joined_at   TEXT NOT NULL,
  PRIMARY KEY (usuario_id, escuela_id)
);

CREATE INDEX idx_membresias_escuela_id ON membresias_escuela(escuela_id);
CREATE INDEX idx_membresias_usuario_id ON membresias_escuela(usuario_id);
```

---

## 4. `aulas` + `aula_members`

### Decisión: JSON-híbrida (metadata relacional) + tabla separada para miembros

**Patrones de consulta detectados:**
- **Acceso learner:** `WHERE members.userId = ? AND status NOT IN ('ARCHIVED','LOCKED')` — el filtro más frecuente
- **Acceso staff:** `WHERE (schoolId = ? OR members.userId = ?) AND status ...`
- **Lookup por id:** `WHERE id = ? AND isDeleted != 1`
- **Count por creador:** `WHERE createdBy = ? AND isDeleted != 1 AND status IN ('ACTIVE','activa')`
- **Check módulos activos:** `COUNT(*) FROM modulos WHERE aulaId = ? AND isDeleted != 1`
- Sort: siempre `updatedAt DESC`

**Problema clave MongoDB→SQLite:** `members` es un array embebido con sub-campos `userId`, `roleInClass`, `schoolId`. El filtro `members.userId` implica búsqueda dentro del array — en SQLite solo es eficiente como tabla separada.

| Aspecto | Detalle |
|---|---|
| **Clave primaria `aulas`** | `id TEXT PRIMARY KEY` (el esquema usa string UUID, no ObjectId) |
| **Claves foráneas `aulas`** | `school_id → escuelas(id)` (nullable), `created_by → usuarios(id)` |
| **Columnas "hot" `aulas`** | `id`, `school_id`, `status`, `created_by`, `is_deleted`, `updated_at`, `class_code` |
| **Índices `aulas`** | `INDEX(school_id)`, `INDEX(created_by)`, `INDEX(status)`, `INDEX(is_deleted)`, `INDEX(updated_at)` |
| **Columnas JSON `aulas`** | Ninguna (todos los campos escalares son hot o raramente consultados pero simples) |
| **Clave primaria `aula_members`** | `(aula_id, user_id)` compuesta |
| **Claves foráneas `aula_members`** | `aula_id → aulas(id)`, `user_id → usuarios(id)` |
| **Índices `aula_members`** | PK compuesta, `INDEX(user_id)` (para el filtro learner), `INDEX(aula_id, role_in_class)` |
| **Trade-offs** | (+) El filtro `members.userId` pasa a ser un join O(log n) indexado. (+) Permite COUNT de alumnos sin deserializar JSON. (−) Toda operación de `members` requiere transacción multi-tabla. La lógica de "al menos 1 ADMIN y 1 TEACHER" se valida en capa de aplicación (igual que hoy). |

```sql
CREATE TABLE aulas (
  id                TEXT PRIMARY KEY,  -- UUID string del cliente
  name              TEXT NOT NULL,
  description       TEXT NOT NULL,
  school_id         INTEGER REFERENCES escuelas(id),
  category          TEXT,
  access_type       TEXT NOT NULL CHECK(access_type IN ('publica','privada')),
  status            TEXT NOT NULL DEFAULT 'ACTIVE'
                      CHECK(status IN ('ACTIVE','ARCHIVED','LOCKED')),
  class_code        TEXT,
  created_by        TEXT NOT NULL,     -- userId string
  teacher_of_record TEXT,
  is_deleted        INTEGER NOT NULL DEFAULT 0,
  deleted_at        TEXT,
  deleted_by        TEXT,
  created_at        TEXT NOT NULL,
  updated_at        TEXT NOT NULL
);

CREATE INDEX idx_aulas_school_id    ON aulas(school_id);
CREATE INDEX idx_aulas_created_by   ON aulas(created_by);
CREATE INDEX idx_aulas_status       ON aulas(status);
CREATE INDEX idx_aulas_is_deleted   ON aulas(is_deleted);
CREATE INDEX idx_aulas_updated_at   ON aulas(updated_at DESC);

CREATE TABLE aula_members (
  aula_id       TEXT NOT NULL REFERENCES aulas(id),
  user_id       TEXT NOT NULL,
  role_in_class TEXT NOT NULL CHECK(role_in_class IN ('ADMIN','TEACHER','STUDENT')),
  school_id     INTEGER REFERENCES escuelas(id),
  PRIMARY KEY (aula_id, user_id)
);

CREATE INDEX idx_aula_members_user_id   ON aula_members(user_id);
CREATE INDEX idx_aula_members_role      ON aula_members(aula_id, role_in_class);

-- Auditoría de cambios de estado (reemplaza colección auditoria_aulas)
CREATE TABLE auditoria_aulas (
  id                INTEGER PRIMARY KEY,
  aula_id           TEXT NOT NULL,
  school_id         INTEGER,
  previous_status   TEXT,
  new_status        TEXT,
  previous_is_deleted INTEGER,
  new_is_deleted    INTEGER,
  actor_id          TEXT,
  created_at        TEXT NOT NULL
);
CREATE INDEX idx_auditoria_aulas_aula_id    ON auditoria_aulas(aula_id);
CREATE INDEX idx_auditoria_aulas_created_at ON auditoria_aulas(created_at DESC);
```

---

## 5. `modulos`

### Decisión: JSON-híbrida

**Patrones de consulta detectados:**
- Lookup por `id`: `WHERE id = ?`
- Filtro por `aulaId`: `WHERE aulaId = ? AND isDeleted != 1`
- Búsqueda textual: `WHERE (title LIKE ? OR category LIKE ?) AND visibility IN (...)` con filtros compuestos de `schoolId`, `createdBy`
- Count para check de borrado: `COUNT(*) WHERE aulaId = ? AND isDeleted != 1`
- Sort: `updatedAt DESC`

**Problema de estructura:** `quizzes`, `levels`, `resources`, `theoryItems` son arrays profundamente anidados. Se cargan y escriben como un bloque completo — nunca se filtra por campos internos a nivel de DB. Los quizzes individuales se resuelven por la colección `quizzes` separada (ya relacional).

| Aspecto | Detalle |
|---|---|
| **Clave primaria** | `id TEXT PRIMARY KEY` (UUID string del cliente) |
| **Claves foráneas** | `aula_id → aulas(id)` (nullable), `school_id → escuelas(id)` (nullable) |
| **Columnas "hot"** | `id`, `aula_id`, `school_id`, `visibility`, `status`, `created_by`, `is_deleted`, `updated_at`, `title`, `category`, `subject` |
| **Índices** | `INDEX(aula_id)`, `INDEX(school_id)`, `INDEX(visibility)`, `INDEX(created_by)`, `INDEX(is_deleted)`, `INDEX(updated_at DESC)`, `INDEX(category)` |
| **Columnas JSON** | `quizzes JSON`, `levels JSON`, `resources JSON`, `theory_items JSON`, `dependencies JSON`, `scoring_config JSON`, `rewards_config JSON`, `visibility_config JSON`, `generator_ref JSON`, `level_order JSON` |
| **Trade-offs** | (+) Búsqueda y filtros son eficientes por índices. (+) El contenido educativo (quizzes embebidos en módulos — distinto de la colección `quizzes` independiente) se carga en una sola lectura. (−) Imposible filtrar por quiz interno sin FTS o parseo en app. (−) Documentos pueden ser grandes (~100 KB en módulos con muchos recursos); considerar `WITHOUT ROWID` o compresión de blob si esto escala. |

```sql
CREATE TABLE modulos (
  id                   TEXT PRIMARY KEY,
  aula_id              TEXT REFERENCES aulas(id),
  school_id            INTEGER REFERENCES escuelas(id),
  title                TEXT NOT NULL,
  description          TEXT NOT NULL,
  subject              TEXT NOT NULL,
  category             TEXT NOT NULL,
  level                TEXT NOT NULL,
  duration_minutes     INTEGER NOT NULL,
  recommended_course   TEXT,
  visibility           TEXT NOT NULL CHECK(visibility IN ('publico','privado','escuela')),
  status               TEXT NOT NULL DEFAULT 'ACTIVE' CHECK(status IN ('ACTIVE','ARCHIVED')),
  created_by           TEXT NOT NULL,
  created_by_role      TEXT,
  author_name          TEXT,
  is_deleted           INTEGER NOT NULL DEFAULT 0,
  created_at           TEXT NOT NULL,
  updated_at           TEXT NOT NULL,
  -- Contenido educativo — cargado/escrito como unidad
  quizzes              JSON,
  levels               JSON,
  resources            JSON,
  theory_items         JSON,
  dependencies         JSON,
  level_order          JSON,
  scoring_config       JSON,
  rewards_config       JSON,
  visibility_config    JSON,
  generator_ref        JSON
);

CREATE INDEX idx_modulos_aula_id     ON modulos(aula_id);
CREATE INDEX idx_modulos_school_id   ON modulos(school_id);
CREATE INDEX idx_modulos_visibility  ON modulos(visibility);
CREATE INDEX idx_modulos_created_by  ON modulos(created_by);
CREATE INDEX idx_modulos_is_deleted  ON modulos(is_deleted);
CREATE INDEX idx_modulos_updated_at  ON modulos(updated_at DESC);
CREATE INDEX idx_modulos_category    ON modulos(category);
-- Para búsqueda full-text opcional (SQLite FTS5):
-- CREATE VIRTUAL TABLE modulos_fts USING fts5(id UNINDEXED, title, category, content='modulos', content_rowid='rowid');
```

---

## 6. `quizzes` y `quiz_versions`

### Decisión: JSON-híbrida

**Patrones de consulta detectados:**
- `quizzes`: lookup por `id` (string): `WHERE id = ?`
- `quiz_versions`: lookup por `(quizId, version)`: `WHERE quiz_id = ? AND version = ?`
- `questions[]` y `params` se cargan siempre como bloque completo

| Aspecto | Detalle |
|---|---|
| **PK `quizzes`** | `id TEXT PRIMARY KEY` |
| **FK `quizzes`** | `module_id → modulos(id)` (nullable — quiz puede existir sin módulo) |
| **Hot `quizzes`** | `id`, `module_id`, `type`, `visibility`, `school_id`, `current_version` |
| **Índices `quizzes`** | `INDEX(module_id)`, `INDEX(visibility)` |
| **JSON `quizzes`** | Ninguno (todos escalares) |
| **PK `quiz_versions`** | `(quiz_id, version)` compuesta |
| **FK `quiz_versions`** | `quiz_id → quizzes(id)` |
| **Hot `quiz_versions`** | `quiz_id`, `version`, `generator_id` |
| **JSON `quiz_versions`** | `questions JSON`, `params JSON` |
| **Trade-offs** | (+) Separar metadata de contenido de versión permite actualizar `currentVersion` sin reescribir preguntas. (+) `questions` se carga como bloque para grading — no requiere acceso individual a nivel DB. (−) Cada intento requiere 2 SELECTs (quizzes + quiz_versions); aceptable dado el volumen. |

```sql
CREATE TABLE quizzes (
  id               TEXT PRIMARY KEY,
  module_id        TEXT REFERENCES modulos(id),
  title            TEXT NOT NULL,
  type             TEXT NOT NULL CHECK(type IN ('practica','evaluacion','competencia')),
  mode             TEXT CHECK(mode IN ('manual','generated')),
  visibility       TEXT NOT NULL DEFAULT 'publico',
  school_id        INTEGER REFERENCES escuelas(id),
  school_name      TEXT,
  competition_rules TEXT,
  competition_rules_visibility TEXT,
  current_version  INTEGER NOT NULL DEFAULT 1,
  created_by       TEXT,
  created_at       TEXT NOT NULL,
  updated_at       TEXT NOT NULL
);

CREATE INDEX idx_quizzes_module_id  ON quizzes(module_id);
CREATE INDEX idx_quizzes_visibility ON quizzes(visibility);

CREATE TABLE quiz_versions (
  quiz_id          TEXT NOT NULL REFERENCES quizzes(id),
  version          INTEGER NOT NULL,
  generator_id     TEXT,
  generator_version INTEGER,
  count            INTEGER,
  seed_policy      TEXT,
  fixed_seed       TEXT,
  questions        JSON,   -- [{id, prompt, options, answerKey, explanation, ...}]
  params           JSON,   -- generatorParams
  created_at       TEXT NOT NULL,
  PRIMARY KEY (quiz_id, version)
);
```

---

## 7. `quiz_attempts`

### Decisión: JSON-híbrida

**Patrones de consulta detectados:**
- Crear intento: INSERT
- Lookup por `(id, userId)`: `WHERE id = ? AND user_id = ?`
- Submit: UPDATE `answers`, `feedback`, `score`, `status` WHERE `id = ?`

| Aspecto | Detalle |
|---|---|
| **Clave primaria** | `id INTEGER PRIMARY KEY` (autoincrement, sustituye ObjectId) |
| **Claves foráneas** | `quiz_id → quizzes(id)`, `module_id → modulos(id)` (nullable) |
| **Columnas "hot"** | `id`, `user_id`, `quiz_id`, `status`, `score`, `max_score`, `updated_at` |
| **Índices** | `INDEX(user_id)`, `INDEX(quiz_id)`, `INDEX(user_id, status)` |
| **Columnas JSON** | `answers JSON` (mapa questionId→respuesta), `feedback JSON` (mapa questionId→{correct, expected, explanation}) |
| **Trade-offs** | (+) Score y status son consultables relacionalmente para rankings/estadísticas. (+) answers/feedback se leen y escriben como unidad en submit. (−) Sin índice en answers, imposible buscar "quién respondió X a la pregunta Y" — si se necesita en el futuro, hay que migrar a tabla `attempt_answers`. |

```sql
CREATE TABLE quiz_attempts (
  id           INTEGER PRIMARY KEY,
  quiz_id      TEXT NOT NULL REFERENCES quizzes(id),
  module_id    TEXT REFERENCES modulos(id),
  user_id      TEXT NOT NULL,
  quiz_version INTEGER NOT NULL DEFAULT 1,
  seed         TEXT,
  score        REAL NOT NULL DEFAULT 0,
  max_score    REAL NOT NULL DEFAULT 0,
  status       TEXT NOT NULL DEFAULT 'in_progress'
                 CHECK(status IN ('in_progress','submitted')),
  answers      JSON NOT NULL DEFAULT '{}',
  feedback     JSON NOT NULL DEFAULT '{}',
  created_at   TEXT NOT NULL,
  updated_at   TEXT NOT NULL
);

CREATE INDEX idx_quiz_attempts_user_id       ON quiz_attempts(user_id);
CREATE INDEX idx_quiz_attempts_quiz_id       ON quiz_attempts(quiz_id);
CREATE INDEX idx_quiz_attempts_user_status   ON quiz_attempts(user_id, status);
```

---

## 8. `progreso_modulos`

### Decisión: 100% relacional

**Patrones de consulta detectados:**
- Upsert `(usuarioId, moduloId [, aulaId])` → el patrón más frecuente de escritura
- List by `(usuarioId [, aulaId])` → leer progreso del alumno en un aula
- List by `usuarioId IN (childIds)` → panel de padres
- Filter by `status = 'completado'` → cálculo de dependencias desbloqueadas

| Aspecto | Detalle |
|---|---|
| **Clave primaria** | `id INTEGER PRIMARY KEY` |
| **Claves foráneas** | `module_id → modulos(id)`, `aula_id → aulas(id)` (nullable) |
| **Unique constraint** | `UNIQUE(usuario_id, module_id, aula_id)` — garantiza el upsert |
| **Columnas "hot"** | `usuario_id`, `module_id`, `aula_id`, `status`, `updated_at` |
| **Índices** | `UNIQUE(usuario_id, module_id, aula_id)`, `INDEX(usuario_id)`, `INDEX(aula_id)`, `INDEX(usuario_id, status)` |
| **Columnas JSON** | Ninguna |
| **Trade-offs** | (+) El upsert por clave compuesta única es nativo en SQLite con `INSERT OR REPLACE`. (+) `status` indexado permite calcular completados sin deserializar nada. (−) La constraint triple `(usuario_id, module_id, aula_id)` trata `aula_id=NULL` como valor único en SQLite — requiere normalizar NULL como string vacío `''` o usar un surrogate. |

```sql
CREATE TABLE progreso_modulos (
  id           INTEGER PRIMARY KEY,
  usuario_id   TEXT NOT NULL,
  module_id    TEXT NOT NULL REFERENCES modulos(id),
  aula_id      TEXT NOT NULL DEFAULT '' REFERENCES aulas(id),  -- '' cuando no aplica
  status       TEXT NOT NULL CHECK(status IN ('iniciado','en_progreso','completado')),
  score        REAL,
  attempts     INTEGER DEFAULT 0,
  completed_at TEXT,
  updated_at   TEXT NOT NULL,
  UNIQUE(usuario_id, module_id, aula_id)
);

CREATE INDEX idx_progreso_usuario_id       ON progreso_modulos(usuario_id);
CREATE INDEX idx_progreso_aula_id          ON progreso_modulos(aula_id);
CREATE INDEX idx_progreso_usuario_status   ON progreso_modulos(usuario_id, status);
```

---

## Sección "No especificado" — Variables de entorno desconocidas

### A. Tamaño de base de datos

| Escenario | Filas estimadas (tabla mayor: `progreso_modulos`) | Tamaño aproximado | Recomendación |
|---|---|---|---|
| **Piloto / institucional pequeño** | < 50k filas | < 50 MB | Configuración por defecto — ninguna acción especial |
| **Regional medio** | 50k–500k filas | 50–500 MB | Activar `PRAGMA journal_mode=WAL` y `PRAGMA cache_size=-64000` (64 MB) |
| **Nacional / multi-tenant** | > 500k filas | > 500 MB | Considerar sharding por `school_id` en archivos SQLite separados, o migrar a PostgreSQL |

**Columna de mayor riesgo de tamaño:** `modulos.quizzes` y `modulos.levels` pueden contener cientos de KB de JSON por fila. Si la plataforma tiene miles de módulos con niveles y recursos, la tabla `modulos` puede superar 1 GB. **Alternativa segura:** externalizar el contenido educativo a tabla `modulo_contenido (modulo_id PK, payload JSON)` con acceso lazy.

### B. Concurrencia y WAL

SQLite soporta múltiples lectores concurrentes pero **un solo escritor a la vez**. En una plataforma educativa con picos de entrega de quizzes simultáneos:

| Carga | Comportamiento | Mitigación |
|---|---|---|
| < 20 req/s de escritura | Sin problema con WAL | `PRAGMA journal_mode=WAL` (ya recomendado) |
| 20–100 req/s de escritura | Colas de 5–50 ms aceptables | Pool de conexión serializado + `PRAGMA busy_timeout=5000` |
| > 100 req/s de escritura sostenidas | Riesgo de "database is locked" | Migrar `quiz_attempts` y `progreso_modulos` a PostgreSQL |

**Pragmas recomendados para producción:**
```sql
PRAGMA journal_mode=WAL;
PRAGMA synchronous=NORMAL;
PRAGMA foreign_keys=ON;
PRAGMA busy_timeout=5000;
PRAGMA cache_size=-32000;  -- 32 MB
```

### C. Sistema operativo y persistencia

| OS | Consideración |
|---|---|
| **Linux (servidor)** | Ruta por defecto del `.env`: `SQLITE_PATH=./data/diccionario.sqlite`. Recomendado: volumen persistente fuera del contenedor. |
| **Windows (dev local)** | Separadores de ruta y permisos de archivo distintos. El `.env.example` ya usa rutas relativas — funciona en ambos OS con `path.resolve()`. |
| **Docker/container** | Montar `/data` como volumen nombrado. Sin volumen, los datos se pierden en cada restart. |

### D. Opciones de sistema de tipos para IDs

El proyecto mezcla tres estilos de ID según la colección MongoDB de origen:

| Colección | ID en Mongo | Recomendación SQLite |
|---|---|---|
| `usuarios`, `escuelas` | ObjectId (24 hex) | `INTEGER PRIMARY KEY` autoincrement + columna `mongo_id TEXT` para migración |
| `aulas`, `modulos`, `quizzes` | UUID string generado en cliente | `TEXT PRIMARY KEY` (mantener tal cual) |
| `quiz_attempts` | ObjectId | `INTEGER PRIMARY KEY` autoincrement |
| `progreso_modulos` | Sin _id propio | `INTEGER PRIMARY KEY` + UNIQUE compuesto |

**Decisión de opción segura:** mantener `TEXT` para las entidades con UUID client-side (aulas, modulos, quizzes) e `INTEGER AUTOINCREMENT` para las demás, para evitar dependencia de ObjectIds de MongoDB durante la transición.

---

## Diagrama de relaciones (simplificado)

```
escuelas ──< membresias_escuela >── usuarios
    │                                   │
    └──< aulas ──< aula_members >───────┘
             │
             └──< modulos ──< quiz_versions
                     │              │
                     └──< quizzes ──┘
                               │
                               └──< quiz_attempts (user_id → usuarios)
             │
             └──< progreso_modulos (usuario_id → usuarios)
```

---

*Documento generado el 2026-02-22 a partir de análisis estático de schemas Zod y patrones de consulta en routes.*
