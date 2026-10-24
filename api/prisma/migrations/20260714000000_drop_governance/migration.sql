-- Retiro del sistema de gobernanza (propuestas + votos). Fue diseñado para
-- el modelo SaaS comunitario; con el pivote a intranets por escuela quedó
-- sin sujeto: las propuestas aprobadas ni siquiera se aplicaban. Las tablas
-- están vacías (beta técnica). El código vive en archive/ (web y api).
DROP TABLE IF EXISTS "votes";
DROP TABLE IF EXISTS "proposals";
