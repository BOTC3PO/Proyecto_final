PRAGMA user_version = 10;

CREATE TABLE IF NOT EXISTS quiz_competencia (
  id            TEXT PRIMARY KEY,
  quiz_id       TEXT NOT NULL,
  modulo_id     TEXT NULL,
  aula_id       TEXT NULL,
  usuario_id    TEXT NOT NULL,
  attempt_id    TEXT NOT NULL,
  score         INTEGER NOT NULL DEFAULT 0,
  max_score     INTEGER NOT NULL DEFAULT 0,
  tiempo_seg    INTEGER NOT NULL DEFAULT 0,
  completado_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_quiz_comp_quiz
  ON quiz_competencia(quiz_id, score DESC, tiempo_seg ASC);
CREATE INDEX IF NOT EXISTS idx_quiz_comp_aula
  ON quiz_competencia(aula_id, quiz_id);

INSERT OR IGNORE INTO schema_migrations(version, applied_at)
  VALUES(10, datetime('now'));
