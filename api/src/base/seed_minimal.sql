-- =============================================================================
-- SEED MÍNIMO — SQLite
-- Una escuela + un usuario por cada rol + clase + economía básica
-- Contraseña de todos los usuarios: Password123!
--
-- Hash formato: pbkdf2$<iterations>$<salt_hex>$<derived_hex>
-- Generado con: PBKDF2 / sha256 / 100 000 iteraciones / 64 bytes
--   pbkdf2$100000$ef9c3a8767611c5f8d5270537b242995$afede45168333cd7c2d449b49c8b56f4ba9494f67e9565d503259864510c2e7d464b04b24e787e5df658ba7524ffb76ad84f23a3599152a07cc00c4954c79001
--
-- ⚠️  BUG DETECTADO en passwords.ts:
--   hashPassword()  pasa el salt como string hex  → pbkdf2Sync(password, saltHex, ...)
--   verifyPassword() lo convierte primero a Buffer → pbkdf2Sync(password, Buffer.from(saltHex,'hex'), ...)
--   Esto produce claves distintas: los hashes creados por hashPassword() NUNCA
--   pasan la verificación. El hash del seed fue generado con el salt como Buffer
--   (comportamiento de verifyPassword) para que el login funcione mientras se
--   corrige el bug. Fix sugerido en hashPassword():
--     const salt = crypto.randomBytes(16).toString('hex');
--     const saltBuf = Buffer.from(salt, 'hex');           // ← agregar esta línea
--     const derived = crypto.pbkdf2Sync(password, saltBuf, ...); // ← usar saltBuf
-- =============================================================================

PRAGMA foreign_keys = ON;

-- -----------------------------------------------------------------------------
-- IDs fijos para facilitar referencias cruzadas
-- -----------------------------------------------------------------------------
-- escuela:    esc-0001
-- admin:      usr-admin-001
-- directivo:  usr-direc-001
-- teacher:    usr-teach-001
-- student:    usr-stude-001
-- parent:     usr-paren-001
-- guest:      usr-guest-001
-- clase:      cls-0001
-- -----------------------------------------------------------------------------

-- =============================================================================
-- ESCUELA
-- =============================================================================
INSERT OR IGNORE INTO escuelas (id, name, code, address, subscription_status, plan, is_deleted, created_at, updated_at)
VALUES (
  'esc-0001',
  'Escuela Primaria Norte',
  'EPN-001',
  'Av. Siempre Viva 742, Buenos Aires',
  'ACTIVE',
  'ENTERPRISE_STD',
  0,
  '2024-01-01T00:00:00Z',
  '2024-01-01T00:00:00Z'
);

-- =============================================================================
-- USUARIOS  (un usuario por cada rol)
-- =============================================================================

-- ADMIN (superadmin de plataforma, sin escuela obligatoria)
INSERT OR IGNORE INTO usuarios (
  id, username, email, full_name, role, escuela_id,
  password_hash, privacy_consent, terms_accepted, consented_at,
  is_deleted, created_at, updated_at
) VALUES (
  'usr-admin-001', 'admin.plataforma', 'admin@plataforma.com', 'Admin Plataforma', 'ADMIN', NULL,
  'pbkdf2$100000$ef9c3a8767611c5f8d5270537b242995$afede45168333cd7c2d449b49c8b56f4ba9494f67e9565d503259864510c2e7d464b04b24e787e5df658ba7524ffb76ad84f23a3599152a07cc00c4954c79001', 1, 1, '2024-01-01T00:00:00Z',
  0, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'
);

-- DIRECTIVO
INSERT OR IGNORE INTO usuarios (
  id, username, email, full_name, role, escuela_id,
  password_hash, privacy_consent, terms_accepted, consented_at,
  is_deleted, created_at, updated_at
) VALUES (
  'usr-direc-001', 'directivo.norte', 'directivo@epnorte.edu.ar', 'María Directora', 'DIRECTIVO', 'esc-0001',
  'pbkdf2$100000$ef9c3a8767611c5f8d5270537b242995$afede45168333cd7c2d449b49c8b56f4ba9494f67e9565d503259864510c2e7d464b04b24e787e5df658ba7524ffb76ad84f23a3599152a07cc00c4954c79001', 1, 1, '2024-01-01T00:00:00Z',
  0, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'
);

-- TEACHER
INSERT OR IGNORE INTO usuarios (
  id, username, email, full_name, role, escuela_id,
  password_hash, privacy_consent, terms_accepted, consented_at,
  is_deleted, created_at, updated_at
) VALUES (
  'usr-teach-001', 'prof.garcia', 'garcia@epnorte.edu.ar', 'Carlos García', 'TEACHER', 'esc-0001',
  'pbkdf2$100000$ef9c3a8767611c5f8d5270537b242995$afede45168333cd7c2d449b49c8b56f4ba9494f67e9565d503259864510c2e7d464b04b24e787e5df658ba7524ffb76ad84f23a3599152a07cc00c4954c79001', 1, 1, '2024-01-01T00:00:00Z',
  0, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'
);

-- STUDENT
INSERT OR IGNORE INTO usuarios (
  id, username, email, full_name, role, escuela_id,
  password_hash, birthdate, privacy_consent, terms_accepted, consented_at,
  is_deleted, created_at, updated_at
) VALUES (
  'usr-stude-001', 'alumno.perez', 'perez.alumno@epnorte.edu.ar', 'Juan Pérez', 'USER', 'esc-0001',
  'pbkdf2$100000$ef9c3a8767611c5f8d5270537b242995$afede45168333cd7c2d449b49c8b56f4ba9494f67e9565d503259864510c2e7d464b04b24e787e5df658ba7524ffb76ad84f23a3599152a07cc00c4954c79001', '2014-05-20', 1, 1, '2024-01-01T00:00:00Z',
  0, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'
);

-- PARENT
INSERT OR IGNORE INTO usuarios (
  id, username, email, full_name, role, escuela_id,
  password_hash, privacy_consent, terms_accepted, consented_at,
  is_deleted, created_at, updated_at
) VALUES (
  'usr-paren-001', 'padre.perez', 'perez.padre@gmail.com', 'Roberto Pérez', 'PARENT', 'esc-0001',
  'pbkdf2$100000$ef9c3a8767611c5f8d5270537b242995$afede45168333cd7c2d449b49c8b56f4ba9494f67e9565d503259864510c2e7d464b04b24e787e5df658ba7524ffb76ad84f23a3599152a07cc00c4954c79001', 1, 1, '2024-01-01T00:00:00Z',
  0, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'
);

-- GUEST (pendiente de onboarding)
INSERT OR IGNORE INTO usuarios (
  id, username, email, full_name, role, escuela_id,
  password_hash, guest_onboarding_status, privacy_consent, terms_accepted,
  is_deleted, created_at, updated_at
) VALUES (
  'usr-guest-001', 'invitado.lopez', 'lopez.invitado@gmail.com', 'Ana López', 'GUEST', NULL,
  NULL, 'pendiente', 0, 0,
  0, '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'
);

-- =============================================================================
-- MEMBRESÍAS  (todos excepto ADMIN y GUEST se asocian a la escuela)
-- =============================================================================
INSERT OR IGNORE INTO membresias (usuario_id, escuela_id, rol, estado, fecha_alta, created_at, updated_at)
VALUES
  ('usr-direc-001', 'esc-0001', 'DIRECTIVO', 'activa', '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
  ('usr-teach-001', 'esc-0001', 'TEACHER',   'activa', '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
  ('usr-stude-001', 'esc-0001', 'STUDENT',   'activa', '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'),
  ('usr-paren-001', 'esc-0001', 'PARENT',    'activa', '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z');

-- =============================================================================
-- CLASE
-- =============================================================================
INSERT OR IGNORE INTO clases (id, escuela_id, name, grade, code, is_deleted, created_at, updated_at)
VALUES (
  'cls-0001', 'esc-0001', '5º A', '5º Primaria', 'MAT5A-2024', 0,
  '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'
);

-- Miembros de la clase
INSERT OR IGNORE INTO clase_miembros (clase_id, usuario_id, rol_en_clase)
VALUES
  ('cls-0001', 'usr-teach-001', 'TEACHER'),
  ('cls-0001', 'usr-direc-001', 'ADMIN'),
  ('cls-0001', 'usr-stude-001', 'STUDENT');

-- Publicación de bienvenida
INSERT OR IGNORE INTO clase_publicaciones (id, clase_id, author_id, title, body, links_json, is_pinned, published_at)
VALUES (
  'pub-0001', 'cls-0001', 'usr-teach-001',
  'Bienvenidos al curso',
  'Ya pueden comenzar el módulo de fracciones. Cualquier duda, escriban por mensajes.',
  '[{"label":"Ver módulo","href":"#"}]',
  1,
  '2024-01-01T00:00:00Z'
);

-- =============================================================================
-- CONVERSACIÓN + MENSAJE (padre → clase)
-- =============================================================================
INSERT OR IGNORE INTO conversaciones (
  id, student_id, parent_id, class_id,
  last_message_from, last_message_preview, unread_for_admin,
  created_at, updated_at
) VALUES (
  'conv-0001', 'usr-stude-001', 'usr-paren-001', 'cls-0001',
  'parent', '¿Cuándo es la próxima evaluación?', 1,
  '2024-01-01T00:00:00Z', '2024-01-01T00:00:00Z'
);

INSERT OR IGNORE INTO mensajes_items (id, conversation_id, sender_id, body, sent_at)
VALUES (
  'msg-0001', 'conv-0001', 'usr-paren-001',
  '¿Cuándo es la próxima evaluación?',
  '2024-01-01T00:00:00Z'
);

-- =============================================================================
-- ECONOMÍA — configuración base
-- =============================================================================
INSERT OR IGNORE INTO economia_config (id, json, updated_at)
VALUES (
  'default',
  '{"monedaBase":"ARS","recompensasPorDefecto":true,"limiteDiario":null}',
  '2024-01-01T00:00:00Z'
);

-- Saldo inicial del alumno
INSERT OR IGNORE INTO saldos_usuario (usuario_id, moneda, saldo, updated_at)
VALUES ('usr-stude-001', 'ARS', 1500.0, '2024-01-01T00:00:00Z');

-- Movimiento de crédito inicial
INSERT OR IGNORE INTO ledger_movimientos (
  id, usuario_id, tipo, monto, moneda, motivo, origen,
  referencia_id, referencia_tipo, created_at
) VALUES (
  'mov-0001', 'usr-stude-001', 'credito', 1500.0, 'ARS',
  'Inicio de cuenta', 'registro',
  NULL, NULL,
  '2024-01-01T00:00:00Z'
);

-- =============================================================================
-- VERIFICACIÓN RÁPIDA (ejecutar manualmente si se desea)
-- SELECT 'escuelas'  AS tabla, count(*) AS filas FROM escuelas   UNION ALL
-- SELECT 'usuarios',           count(*)           FROM usuarios   UNION ALL
-- SELECT 'membresias',         count(*)           FROM membresias UNION ALL
-- SELECT 'clases',             count(*)           FROM clases     UNION ALL
-- SELECT 'clase_miembros',     count(*)           FROM clase_miembros;
-- =============================================================================
