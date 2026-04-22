-- CreateTable
CREATE TABLE "escuelas" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT,
    "address" TEXT,
    "subscription_status" TEXT,
    "plan" TEXT,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT,

    CONSTRAINT "escuelas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "escuela_id" TEXT,
    "password_hash" TEXT,
    "birthdate" TEXT,
    "guest_onboarding_status" TEXT,
    "privacy_consent" BOOLEAN,
    "terms_accepted" BOOLEAN,
    "consented_at" TEXT,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "password_reset_required" BOOLEAN NOT NULL DEFAULT false,
    "is_banned" BOOLEAN NOT NULL DEFAULT false,
    "warning_count" INTEGER NOT NULL DEFAULT 0,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "membresias" (
    "usuario_id" TEXT NOT NULL,
    "escuela_id" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "fecha_alta" TEXT NOT NULL,
    "fecha_baja" TEXT,
    "created_at" TEXT,
    "updated_at" TEXT,

    CONSTRAINT "membresias_pkey" PRIMARY KEY ("usuario_id","escuela_id")
);

-- CreateTable
CREATE TABLE "clases" (
    "id" TEXT NOT NULL,
    "escuela_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "code" TEXT,
    "class_code" TEXT,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "created_by" TEXT,
    "teacher_id" TEXT,
    "teacher_of_record" TEXT,
    "deleted_at" TEXT,
    "deleted_by" TEXT,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT,

    CONSTRAINT "clases_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clase_miembros" (
    "clase_id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "rol_en_clase" TEXT NOT NULL,

    CONSTRAINT "clase_miembros_pkey" PRIMARY KEY ("clase_id","usuario_id","rol_en_clase")
);

-- CreateTable
CREATE TABLE "clase_modulos" (
    "clase_id" TEXT NOT NULL,
    "modulo_id" TEXT NOT NULL,
    "assigned_at" TEXT,
    "required" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "clase_modulos_pkey" PRIMARY KEY ("clase_id","modulo_id")
);

-- CreateTable
CREATE TABLE "clase_publicaciones" (
    "id" TEXT NOT NULL,
    "clase_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "links_json" TEXT,
    "is_pinned" BOOLEAN NOT NULL DEFAULT false,
    "published_at" TEXT NOT NULL,

    CONSTRAINT "clase_publicaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversaciones" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "parent_id" TEXT NOT NULL,
    "class_id" TEXT NOT NULL,
    "last_message_from" TEXT,
    "last_message_preview" TEXT,
    "unread_for_admin" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT,

    CONSTRAINT "conversaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mensajes_items" (
    "id" TEXT NOT NULL,
    "conversation_id" TEXT NOT NULL,
    "sender_id" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "sent_at" TEXT NOT NULL,

    CONSTRAINT "mensajes_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transferencias" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "from_school_id" TEXT NOT NULL,
    "to_school_id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT,

    CONSTRAINT "transferencias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "economia_config" (
    "id" TEXT NOT NULL DEFAULT 'default',
    "json" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "economia_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saldos_usuario" (
    "usuario_id" TEXT NOT NULL,
    "moneda" TEXT NOT NULL,
    "saldo" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "saldos_usuario_pkey" PRIMARY KEY ("usuario_id","moneda")
);

-- CreateTable
CREATE TABLE "ledger_movimientos" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "moneda" TEXT NOT NULL,
    "motivo" TEXT NOT NULL,
    "origen" TEXT,
    "referencia_id" TEXT,
    "referencia_tipo" TEXT,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "ledger_movimientos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "economia_recompensas" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "referencia_id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "monto" DOUBLE PRECISION NOT NULL,
    "moneda" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TEXT,
    "deleted_by" TEXT,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "economia_recompensas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "economia_modulos" (
    "modulo_id" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "economia_modulos_pkey" PRIMARY KEY ("modulo_id")
);

-- CreateTable
CREATE TABLE "economia_eventos" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descripcion" TEXT,
    "tasa" DOUBLE PRECISION,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_at" TEXT,
    "deleted_by" TEXT,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "economia_eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "economia_riesgo_cursos" (
    "aula_id" TEXT NOT NULL,
    "riesgo_base" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "riesgo_mercado" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "riesgo_credito" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "economia_riesgo_cursos_pkey" PRIMARY KEY ("aula_id")
);

-- CreateTable
CREATE TABLE "teoria_json" (
    "id" TEXT NOT NULL,
    "schema_version" INTEGER NOT NULL DEFAULT 1,
    "content" TEXT NOT NULL,
    "content_hash" TEXT,
    "created_at" TEXT NOT NULL DEFAULT '',
    "updated_at" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "teoria_json_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tuesdayjs_docs" (
    "id" TEXT NOT NULL,
    "schema_version" INTEGER NOT NULL DEFAULT 1,
    "doc" TEXT NOT NULL,
    "content_hash" TEXT,
    "created_at" TEXT NOT NULL DEFAULT '',
    "updated_at" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "tuesdayjs_docs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "libros_json" (
    "id" TEXT NOT NULL,
    "schema_version" INTEGER NOT NULL DEFAULT 1,
    "book" TEXT NOT NULL,
    "content_hash" TEXT,
    "created_at" TEXT NOT NULL DEFAULT '',
    "updated_at" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "libros_json_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bloques_json" (
    "id" TEXT NOT NULL,
    "schema_version" INTEGER NOT NULL DEFAULT 1,
    "content" TEXT NOT NULL,
    "content_hash" TEXT,
    "created_at" TEXT NOT NULL DEFAULT '',
    "updated_at" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "bloques_json_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modulos" (
    "id" TEXT NOT NULL,
    "slug" TEXT,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "visibility" TEXT NOT NULL DEFAULT 'private',
    "school_id" TEXT,
    "owner_user_id" TEXT,
    "teoria_id" TEXT,
    "tuesday_doc_id" TEXT,
    "libro_id" TEXT,
    "default_question_count" INTEGER,
    "dependencies" TEXT,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TEXT NOT NULL DEFAULT '',
    "updated_at" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "modulos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quiz_question_sets" (
    "id" TEXT NOT NULL,
    "schema_version" INTEGER NOT NULL DEFAULT 1,
    "quiz_type" TEXT,
    "questions" TEXT NOT NULL,
    "content_hash" TEXT,
    "created_at" TEXT NOT NULL DEFAULT '',
    "created_by" TEXT,

    CONSTRAINT "quiz_question_sets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quizzes" (
    "id" TEXT NOT NULL,
    "module_id" TEXT NOT NULL,
    "title" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "current_version_id" TEXT,
    "created_at" TEXT NOT NULL DEFAULT '',
    "updated_at" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "quizzes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quiz_versions" (
    "id" TEXT NOT NULL,
    "quiz_id" TEXT NOT NULL,
    "version_number" INTEGER NOT NULL,
    "schema_version" INTEGER NOT NULL DEFAULT 1,
    "question_set_id" TEXT,
    "questions" TEXT,
    "generator_id" TEXT,
    "generator_version" TEXT,
    "params" TEXT,
    "count" INTEGER,
    "seed_policy" INTEGER NOT NULL DEFAULT 0,
    "fixed_seed" TEXT,
    "settings" TEXT,
    "content_hash" TEXT,
    "created_at" TEXT NOT NULL DEFAULT '',
    "created_by" TEXT,

    CONSTRAINT "quiz_versions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quiz_attempts" (
    "id" TEXT NOT NULL,
    "quiz_id" TEXT NOT NULL,
    "quiz_version_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "started_at" TEXT NOT NULL DEFAULT '',
    "submitted_at" TEXT,
    "score" DOUBLE PRECISION,
    "max_score" DOUBLE PRECISION,
    "answers" TEXT NOT NULL,
    "feedback" TEXT,
    "grading" TEXT,
    "seed" TEXT,
    "seed_policy" INTEGER NOT NULL DEFAULT 0,
    "attempt_no" INTEGER,

    CONSTRAINT "quiz_attempts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actividades_aula" (
    "id" TEXT NOT NULL,
    "aula_id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha" TEXT NOT NULL,
    "fecha_fin" TEXT,
    "created_by" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "actividades_aula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "calendario_escuela" (
    "id" TEXT NOT NULL,
    "escuela_id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "fecha_inicio" TEXT NOT NULL,
    "fecha_fin" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "calendario_escuela_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "modo_aula" (
    "aula_id" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT false,
    "restricciones" TEXT NOT NULL DEFAULT 'tienda,economia',
    "activado_by" TEXT NOT NULL,
    "activado_at" TEXT NOT NULL,
    "desactivado_at" TEXT,

    CONSTRAINT "modo_aula_pkey" PRIMARY KEY ("aula_id")
);

-- CreateTable
CREATE TABLE "quiz_umbrales" (
    "quiz_id" TEXT NOT NULL,
    "modulo_id" TEXT NOT NULL,
    "umbral" INTEGER NOT NULL DEFAULT 60,
    "creado_by" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "quiz_umbrales_pkey" PRIMARY KEY ("quiz_id")
);

-- CreateTable
CREATE TABLE "desbloqueos_manuales" (
    "id" TEXT NOT NULL,
    "modulo_id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "aula_id" TEXT NOT NULL,
    "desbloqueado_by" TEXT NOT NULL,
    "motivo" TEXT,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "desbloqueos_manuales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sync_queue" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "intento" INTEGER NOT NULL DEFAULT 0,
    "max_intentos" INTEGER NOT NULL DEFAULT 5,
    "estado" TEXT NOT NULL DEFAULT 'pendiente',
    "error" TEXT,
    "created_at" TEXT NOT NULL,
    "procesado_at" TEXT,

    CONSTRAINT "sync_queue_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sync_snapshots" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "aula_id" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,
    "hash" TEXT,
    "descargado_at" TEXT NOT NULL,

    CONSTRAINT "sync_snapshots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sync_conflictos" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "payload_local" TEXT NOT NULL,
    "payload_server" TEXT NOT NULL,
    "resolucion" TEXT NOT NULL DEFAULT 'server_wins',
    "resuelto_at" TEXT NOT NULL,

    CONSTRAINT "sync_conflictos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "generator_configs" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "created_at" TEXT NOT NULL DEFAULT '',
    "updated_at" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "generator_configs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suggestions" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "created_at" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "suggestions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "progreso_modulos" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "modulo_id" TEXT NOT NULL,
    "aula_id" TEXT,
    "status" TEXT NOT NULL,
    "score" DOUBLE PRECISION,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "completed_at" TEXT,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "progreso_modulos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "economia_saldos" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "saldo" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "moneda" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "economia_saldos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "economia_transacciones" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "aula_id" TEXT NOT NULL,
    "school_id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "moneda" TEXT NOT NULL,
    "motivo" TEXT NOT NULL,
    "referencia_id" TEXT,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "economia_transacciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encuestas" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "classroom_id" TEXT NOT NULL,
    "classroom_name" TEXT,
    "type" TEXT NOT NULL,
    "options" TEXT NOT NULL,
    "max_options" INTEGER,
    "start_at" TEXT NOT NULL,
    "end_at" TEXT NOT NULL,
    "show_results_before_close" BOOLEAN NOT NULL DEFAULT false,
    "show_results_realtime" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL,
    "responses_count" INTEGER NOT NULL DEFAULT 0,
    "created_by" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,
    "archived_at" TEXT,

    CONSTRAINT "encuestas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "encuestas_respuestas" (
    "id" TEXT NOT NULL,
    "survey_id" TEXT NOT NULL,
    "classroom_id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "option_id" TEXT,
    "scores" TEXT,
    "ranking" TEXT,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "encuestas_respuestas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publicaciones" (
    "id" TEXT NOT NULL,
    "aula_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "archivos" TEXT,
    "is_pinned" BOOLEAN NOT NULL DEFAULT false,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "deleted_by" TEXT,
    "published_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "publicaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vinculos_padre_hijo" (
    "id" TEXT NOT NULL,
    "parent_id" TEXT NOT NULL,
    "child_id" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "nombre" TEXT,
    "usuario" TEXT,
    "grado" TEXT,
    "escuela" TEXT,
    "notas" TEXT,
    "permisos" TEXT,
    "solicitado_at" TEXT,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "vinculos_padre_hijo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proposals" (
    "id" TEXT NOT NULL,
    "target_type" TEXT NOT NULL,
    "target_id" TEXT NOT NULL,
    "proposal_type" TEXT NOT NULL,
    "payload" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "rationale" TEXT,

    CONSTRAINT "proposals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "votes" (
    "id" TEXT NOT NULL,
    "proposal_id" TEXT NOT NULL,
    "voter_id" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "votes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prompts" (
    "id" TEXT NOT NULL,
    "target_type" TEXT NOT NULL,
    "target_id" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "body_text" TEXT NOT NULL,
    "params_schema" TEXT NOT NULL DEFAULT '{}',
    "status" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "source" TEXT NOT NULL,

    CONSTRAINT "prompts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resource_links" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "visibility" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,
    "school_id" TEXT NOT NULL,
    "aula_id" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "resource_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auditoria_aulas" (
    "id" TEXT NOT NULL,
    "aula_id" TEXT NOT NULL,
    "actor_id" TEXT,
    "action" TEXT,
    "previous_status" TEXT,
    "new_status" TEXT,
    "previous_is_deleted" BOOLEAN,
    "new_is_deleted" BOOLEAN,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "auditoria_aulas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moderacion_eventos" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "publicacion_id" TEXT,
    "aula_id" TEXT,
    "usuario_id" TEXT,
    "motivo" TEXT,
    "severidad" TEXT,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "moderacion_eventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "config_modulos" (
    "id" TEXT NOT NULL,
    "items" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "config_modulos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pages" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "content" TEXT,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT,

    CONSTRAINT "pages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "generadores_admin" (
    "id" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "status" TEXT,
    "updated_at" TEXT NOT NULL,
    "updated_by" TEXT,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "generadores_admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tareas" (
    "id" TEXT NOT NULL,
    "aula_id" TEXT,
    "school_id" TEXT,
    "json" TEXT NOT NULL,

    CONSTRAINT "tareas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "economia_examenes" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT,

    CONSTRAINT "economia_examenes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "economia_examen_pujas" (
    "id" TEXT NOT NULL,
    "examen_id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "economia_examen_pujas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "economia_examen_puntos" (
    "id" TEXT NOT NULL,
    "examen_id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,

    CONSTRAINT "economia_examen_puntos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "economia_intercambios" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "economia_intercambios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "economia_compras" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "economia_compras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "economia_auditoria" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "economia_auditoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "billeteras" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "updated_at" TEXT,

    CONSTRAINT "billeteras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enterprise_contratos" (
    "id" TEXT NOT NULL,
    "school_id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "enterprise_contratos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enterprise_billing_cycles" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "enterprise_billing_cycles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enterprise_reportes" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "enterprise_reportes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entregas" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "entregas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eventos_reportes_padres" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "eventos_reportes_padres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eventos_suscripciones" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "eventos_suscripciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "foros_respuestas" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "foros_respuestas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accesos" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "accesos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comentarios" (
    "id" TEXT NOT NULL,
    "publicacion_id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "comentarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "materias" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,

    CONSTRAINT "materias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "libros" (
    "id" TEXT NOT NULL,
    "json" TEXT NOT NULL,
    "updated_at" TEXT,

    CONSTRAINT "libros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "audit_logs" (
    "id" TEXT NOT NULL,
    "actor_id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "target_type" TEXT NOT NULL,
    "target_id" TEXT,
    "timestamp" TEXT NOT NULL,
    "metadata" TEXT,

    CONSTRAINT "audit_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "escuelas_code_key" ON "escuelas"("code");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_username_key" ON "usuarios"("username");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "modulos_slug_key" ON "modulos"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "quiz_question_sets_content_hash_key" ON "quiz_question_sets"("content_hash");

-- CreateIndex
CREATE UNIQUE INDEX "quiz_versions_quiz_id_version_number_key" ON "quiz_versions"("quiz_id", "version_number");

-- CreateIndex
CREATE UNIQUE INDEX "desbloqueos_manuales_modulo_id_usuario_id_aula_id_key" ON "desbloqueos_manuales"("modulo_id", "usuario_id", "aula_id");

-- CreateIndex
CREATE UNIQUE INDEX "sync_snapshots_usuario_id_tipo_aula_id_key" ON "sync_snapshots"("usuario_id", "tipo", "aula_id");

-- CreateIndex
CREATE INDEX "progreso_modulos_usuario_id_aula_id_idx" ON "progreso_modulos"("usuario_id", "aula_id");

-- CreateIndex
CREATE UNIQUE INDEX "progreso_modulos_usuario_id_modulo_id_aula_id_key" ON "progreso_modulos"("usuario_id", "modulo_id", "aula_id");

-- CreateIndex
CREATE UNIQUE INDEX "economia_saldos_usuario_id_key" ON "economia_saldos"("usuario_id");

-- CreateIndex
CREATE INDEX "economia_transacciones_usuario_id_idx" ON "economia_transacciones"("usuario_id");

-- CreateIndex
CREATE INDEX "encuestas_respuestas_survey_id_idx" ON "encuestas_respuestas"("survey_id");

-- CreateIndex
CREATE INDEX "publicaciones_aula_id_idx" ON "publicaciones"("aula_id");

-- CreateIndex
CREATE INDEX "resource_links_aula_id_idx" ON "resource_links"("aula_id");

-- CreateIndex
CREATE UNIQUE INDEX "generadores_admin_subject_topic_key" ON "generadores_admin"("subject", "topic");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_escuela_id_fkey" FOREIGN KEY ("escuela_id") REFERENCES "escuelas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membresias" ADD CONSTRAINT "membresias_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membresias" ADD CONSTRAINT "membresias_escuela_id_fkey" FOREIGN KEY ("escuela_id") REFERENCES "escuelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clases" ADD CONSTRAINT "clases_escuela_id_fkey" FOREIGN KEY ("escuela_id") REFERENCES "escuelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clase_miembros" ADD CONSTRAINT "clase_miembros_clase_id_fkey" FOREIGN KEY ("clase_id") REFERENCES "clases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clase_modulos" ADD CONSTRAINT "clase_modulos_clase_id_fkey" FOREIGN KEY ("clase_id") REFERENCES "clases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clase_publicaciones" ADD CONSTRAINT "clase_publicaciones_clase_id_fkey" FOREIGN KEY ("clase_id") REFERENCES "clases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mensajes_items" ADD CONSTRAINT "mensajes_items_conversation_id_fkey" FOREIGN KEY ("conversation_id") REFERENCES "conversaciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "modulos" ADD CONSTRAINT "modulos_teoria_id_fkey" FOREIGN KEY ("teoria_id") REFERENCES "teoria_json"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quizzes" ADD CONSTRAINT "quizzes_module_id_fkey" FOREIGN KEY ("module_id") REFERENCES "modulos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quiz_versions" ADD CONSTRAINT "quiz_versions_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "quizzes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quiz_versions" ADD CONSTRAINT "quiz_versions_question_set_id_fkey" FOREIGN KEY ("question_set_id") REFERENCES "quiz_question_sets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quiz_attempts" ADD CONSTRAINT "quiz_attempts_quiz_id_fkey" FOREIGN KEY ("quiz_id") REFERENCES "quizzes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quiz_attempts" ADD CONSTRAINT "quiz_attempts_quiz_version_id_fkey" FOREIGN KEY ("quiz_version_id") REFERENCES "quiz_versions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encuestas_respuestas" ADD CONSTRAINT "encuestas_respuestas_survey_id_fkey" FOREIGN KEY ("survey_id") REFERENCES "encuestas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "votes" ADD CONSTRAINT "votes_proposal_id_fkey" FOREIGN KEY ("proposal_id") REFERENCES "proposals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
