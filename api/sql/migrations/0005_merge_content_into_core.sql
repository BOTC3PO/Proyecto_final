-- Migration 0005: Merge content DB into core
-- All content tables already exist in core_schema.sqlite (created by the dual
-- runner bug), so no CREATE TABLE statements are needed here.  This migration
-- only bumps the version and records the audit entry.

PRAGMA user_version = 5;

INSERT OR IGNORE INTO schema_migrations(version, applied_at)
  VALUES(5, datetime('now'));
