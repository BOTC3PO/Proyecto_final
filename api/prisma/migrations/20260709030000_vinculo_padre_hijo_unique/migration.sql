-- Bug: seed_demo.ts inserta el vínculo demo con `createMany({
-- skipDuplicates: true })`, pero sin una unique constraint sobre
-- (parent_id, child_id) ese skipDuplicates no tenía nada que
-- detectar, así que cada corrida del seed sumaba una fila nueva (se
-- encontraron 15 copias idénticas para el mismo padre-hijo). Se
-- limpian los duplicados existentes, quedándonos con la fila más
-- antigua de cada par, y se agrega la constraint para que no vuelva a
-- pasar (ahora sí, ni el seed ni una carrera entre requests concurrentes
-- de vincularHijoCore pueden crear una segunda fila activa).

DELETE FROM "vinculos_padre_hijo" a
USING "vinculos_padre_hijo" b
WHERE a."parent_id" = b."parent_id"
  AND a."child_id" = b."child_id"
  AND (a."created_at" > b."created_at"
       OR (a."created_at" = b."created_at" AND a."id" > b."id"));

CREATE UNIQUE INDEX "vinculos_padre_hijo_parent_id_child_id_key"
  ON "vinculos_padre_hijo"("parent_id", "child_id");
