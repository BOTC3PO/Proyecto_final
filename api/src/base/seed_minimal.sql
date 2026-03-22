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
-- GENERATOR CONFIGS — seed inicial
-- =============================================================================
INSERT OR IGNORE INTO generator_configs
  (id, materia, label, description, version, subtipos, variables_schema)
VALUES(
  'biologia/biologia', 'Biología', 'Biología general',
  'Genética, pirámide de biomasas y clasificación de seres vivos', 1,
  '[{"id":"genetica_mendel","label":"Genética de Mendel","activo":true,"peso":1},{"id":"piramide_biomasas","label":"Pirámide de biomasas","activo":true,"peso":1},{"id":"clasificacion_seres_vivos","label":"Clasificación de seres vivos","activo":true,"peso":1}]',
  '{"genetica_mendel":{"padre1":"Genotipo primer progenitor. Ej: Aa","padre2":"Genotipo segundo progenitor. Ej: aa","descripcion":"Tipo de cruce. Ej: retrocruzamiento (Aa x aa)","fenotipoDom":"Proporción fenotipo dominante. Ej: 1/2","fenotipoRec":"Proporción fenotipo recesivo. Ej: 1/2"},"piramide_biomasas":{"productor":"Biomasa nivel productor en kg. Valores posibles: 100,200,500,1000,2000,5000,10000","consumidor1":"Biomasa consumidores primarios = productor / 10","consumidor2":"Biomasa consumidores secundarios = productor / 100","consumidorTerciario":"Biomasa nivel 4 en avanzado. Valores: 1,2,5,10,20"},"clasificacion_seres_vivos":{"nombre":"Nombre del ser vivo. Ej: Escherichia coli","reino":"Valores: Monera | Protista | Fungi | Plantae | Animalia","celula":"Valores: eucariota | procariota","nutricion":"Valores: autótrofo | heterótrofo"}}'
);

INSERT OR IGNORE INTO generator_configs
  (id, materia, label, description, version, subtipos, variables_schema)
VALUES(
  'informatica/informatica', 'Informática', 'Informática general',
  'Conversión de bases, operaciones lógicas y álgebra booleana', 1,
  '[{"id":"conversion_bases","label":"Conversión de bases","activo":true,"peso":1},{"id":"operaciones_logicas","label":"Operaciones lógicas","activo":true,"peso":1},{"id":"algebra_booleana","label":"Álgebra booleana","activo":true,"peso":1}]',
  '{"conversion_bases":{"n":"Valor decimal. Básico: 1-255, Intermedio: 16-255, Avanzado suma: 1-100","binario":"Binario 8 bits. Ej: 00101010","hexadecimal":"Hexadecimal. Ej: 2A"},"operaciones_logicas":{"a_b":"Operandos: 0 o 1","op":"Operación: AND | OR | XOR | NOT","c":"Tercer operando intermedio: 0 o 1","expr":"Expresión avanzada. Ej: A XOR B XOR C"},"algebra_booleana":{"expresion":"Expresión a simplificar. Ej: A AND 1","resultado":"Resultado. Ej: A","ley":"Ley aplicada. Ej: identidad, nulidad, De Morgan, absorción"}}'
);

INSERT OR IGNORE INTO generator_configs
  (id, materia, label, description, version, subtipos, variables_schema)
VALUES(
  'economia/contabilidad', 'Economía', 'Contabilidad',
  'Clasificación, naturaleza y ubicación de cuentas contables', 1,
  '[{"id":"clasificacion_cuentas","label":"Clasificación de cuentas","activo":true,"peso":1},{"id":"naturaleza_cuentas","label":"Naturaleza de cuentas","activo":true,"peso":1},{"id":"ubicacion_estados","label":"Ubicación en estados financieros","activo":true,"peso":1},{"id":"hechos_patrimonio","label":"Hechos patrimoniales","activo":true,"peso":1}]',
  '{"clasificacion_cuentas":{"nombre":"Cuenta contable. Ej: Caja, Capital, Proveedores","clasificacion":"Valores: Activo | Pasivo | Patrimonio Neto | R+ | R-"},"naturaleza_cuentas":{"nombre":"Cuenta contable","naturaleza":"Valores: Deudora | Acreedora"},"ubicacion_estados":{"nombre":"Cuenta contable","ubicacion":"Valores: Activo Corriente | Activo No Corriente | Pasivo Corriente | Pasivo No Corriente | Resultados (Ingresos) | Resultados (Costos/Gastos)"},"hechos_patrimonio":{"descripcion":"Descripción del hecho económico","respuesta":"Valores: Afecta el patrimonio | No afecta el patrimonio"}}'
);

INSERT OR IGNORE INTO generator_configs
  (id, materia, label, description, version, subtipos, variables_schema)
VALUES(
  'economia/finanzas', 'Economía', 'Finanzas personales',
  'Presupuesto, gastos, ahorro y deudas', 1,
  '[{"id":"presupuesto_familiar","label":"Presupuesto familiar","activo":true,"peso":1},{"id":"gastos_fijos","label":"Gastos fijos y variables","activo":true,"peso":1},{"id":"gastos_esenciales","label":"Gastos esenciales vs no esenciales","activo":true,"peso":1},{"id":"ahorro_vs_consumo","label":"Ahorro vs consumo responsable","activo":true,"peso":1},{"id":"deuda_buena_mala","label":"Deuda buena vs mala","activo":true,"peso":1}]',
  '{"_patron":"Todos los subtipos siguen el mismo esquema","descripcion":"Situación o ítem a clasificar (texto libre)","tipo_o_categoria":"Clasificación correcta (enum de 2-3 valores según subtipo)"}'
);

INSERT OR IGNORE INTO generator_configs
  (id, materia, label, description, version, subtipos)
VALUES(
  'geografia/basic', 'Geografía', 'Geografía',
  'Generador básico — usa referencias del servidor', 1, '[]'
);

INSERT OR IGNORE INTO generator_configs
  (id, materia, label, description, version, subtipos)
VALUES(
  'lengua_espanola/basic', 'Lengua y Literatura', 'Lengua Española',
  'Generador básico — usa referencias del servidor', 1, '[]'
);

-- =============================================================================
-- VERIFICACIÓN RÁPIDA (ejecutar manualmente si se desea)
-- SELECT 'escuelas'  AS tabla, count(*) AS filas FROM escuelas   UNION ALL
-- SELECT 'usuarios',           count(*)           FROM usuarios   UNION ALL
-- SELECT 'membresias',         count(*)           FROM membresias UNION ALL
-- SELECT 'clases',             count(*)           FROM clases     UNION ALL
-- SELECT 'clase_miembros',     count(*)           FROM clase_miembros;
-- =============================================================================
