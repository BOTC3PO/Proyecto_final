-- I2 — impedir que un usuario tenga dos veces el mismo ítem de la tienda (compra doble
-- por pedidos simultáneos). Si ya hubiera duplicados, la migración se detiene en vez de
-- borrar compras: resolverlos a mano y volver a correrla.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM "usuario_items" GROUP BY "usuario_id", "item_id" HAVING COUNT(*) > 1
  ) THEN
    RAISE EXCEPTION 'usuario_items tiene (usuario_id, item_id) duplicados; resolver antes de aplicar el índice único';
  END IF;
END $$;

CREATE UNIQUE INDEX "usuario_items_usuario_id_item_id_key" ON "usuario_items"("usuario_id", "item_id");
