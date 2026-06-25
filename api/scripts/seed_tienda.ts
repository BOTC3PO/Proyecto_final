#!/usr/bin/env ts-node
/**
 * seed_tienda.ts — items base de tienda (temas y avatares).
 * Idempotente: usa skipDuplicates.
 * Portado desde api/sql/seed_tienda.sql (eliminado).
 */
import "dotenv/config";
import { prisma } from "../src/lib/prisma";

const now = new Date().toISOString();

type ItemDef = {
  id: string;
  tipo: string;
  nombre: string;
  descripcion: string;
  precio: number;
  assetId: string;
  orden: number;
};

const TEMAS_GRATUITOS: ItemDef[] = [
  { id: "item-tema-clasico",  tipo: "tema", nombre: "Clásico",  descripcion: "Diseño limpio y familiar.",        precio: 0, assetId: "clasico",  orden: 1 },
  { id: "item-tema-nocturno", tipo: "tema", nombre: "Nocturno", descripcion: "Colores oscuros para modo noche.", precio: 0, assetId: "nocturno", orden: 3 },
];

const TEMAS_PAGO: ItemDef[] = [
  { id: "item-tema-aurora",   tipo: "tema", nombre: "Aurora",   descripcion: "Paleta suave con gradientes cálidos.",    precio: 40,  assetId: "aurora",   orden: 2 },
  { id: "item-tema-vibrante", tipo: "tema", nombre: "Vibrante", descripcion: "Acentos coloridos para destacar logros.", precio: 65,  assetId: "vibrante", orden: 4 },
  { id: "item-tema-bosque",   tipo: "tema", nombre: "Bosque",   descripcion: "Tonos naturales y verdes.",               precio: 40,  assetId: "bosque",   orden: 5 },
  { id: "item-tema-galaxy",   tipo: "tema", nombre: "Galaxy",   descripcion: "Fondo animado con gradiente espacial.",   precio: 80,  assetId: "galaxy",   orden: 6 },
  { id: "item-tema-sunset",   tipo: "tema", nombre: "Sunset",   descripcion: "Degradado cálido al atardecer.",          precio: 80,  assetId: "sunset",   orden: 7 },
  { id: "item-tema-ocean",    tipo: "tema", nombre: "Ocean",    descripcion: "Profundidades del océano animadas.",      precio: 80,  assetId: "ocean",    orden: 8 },
  { id: "item-tema-candy",    tipo: "tema", nombre: "Candy",    descripcion: "Colores pastel con navbar animado.",      precio: 90,  assetId: "candy",    orden: 9 },
  { id: "item-tema-neon",     tipo: "tema", nombre: "Neon",     descripcion: "Negro con efectos neón pulsantes.",       precio: 100, assetId: "neon",     orden: 10 },
];

const TEMAS_ESTATICOS_PAGO: ItemDef[] = [
  { id: "item-tema-obsidian", tipo: "tema", nombre: "Obsidian", descripcion: "Oscuro profundo con acentos violeta.", precio: 50, assetId: "obsidian", orden: 13 },
  { id: "item-tema-sakura",   tipo: "tema", nombre: "Sakura",   descripcion: "Rosa japonés delicado.",               precio: 55, assetId: "sakura",   orden: 14 },
  { id: "item-tema-carbon",   tipo: "tema", nombre: "Carbon",   descripcion: "Negro industrial con acento naranja.", precio: 50, assetId: "carbon",   orden: 15 },
  { id: "item-tema-arctic",   tipo: "tema", nombre: "Arctic",   descripcion: "Azul polar limpio y claro.",           precio: 45, assetId: "arctic",   orden: 16 },
  { id: "item-tema-lava",     tipo: "tema", nombre: "Lava",     descripcion: "Rojo magma oscuro e intenso.",         precio: 60, assetId: "lava",     orden: 17 },
  { id: "item-tema-emerald",  tipo: "tema", nombre: "Emerald",  descripcion: "Verde esmeralda elegante.",            precio: 45, assetId: "emerald",  orden: 18 },
  { id: "item-tema-dusk",     tipo: "tema", nombre: "Dusk",     descripcion: "Violeta nocturno suave.",              precio: 55, assetId: "dusk",     orden: 19 },
];

const TEMAS_LEGENDARIOS: ItemDef[] = [
  { id: "item-tema-aurora-boreal", tipo: "tema", nombre: "Aurora Boreal", descripcion: "Auroras boreales animadas exclusivas.",  precio: 250, assetId: "aurora-boreal", orden: 30 },
  { id: "item-tema-cosmos",        tipo: "tema", nombre: "Cosmos",        descripcion: "Universo con estrellas y nebulosas.",    precio: 300, assetId: "cosmos",        orden: 31 },
  { id: "item-tema-magma",         tipo: "tema", nombre: "Magma",         descripcion: "Lava fluyendo desde las profundidades.", precio: 280, assetId: "magma",         orden: 32 },
  { id: "item-tema-dorado",        tipo: "tema", nombre: "Dorado",        descripcion: "Oro animado legendario.",                precio: 500, assetId: "dorado",        orden: 33 },
];

const AVATARES_BASE: ItemDef[] = [
  { id: "item-avatar-iniciales", tipo: "avatar", nombre: "Iniciales", descripcion: "Avatar con tus iniciales.",          precio: 0, assetId: "iniciales", orden: 1 },
  { id: "item-avatar-identicon", tipo: "avatar", nombre: "Identicon", descripcion: "Patrón único generado desde tu ID.", precio: 0, assetId: "identicon", orden: 2 },
];

const ALL_ITEMS: ItemDef[] = [
  ...TEMAS_GRATUITOS,
  ...TEMAS_PAGO,
  ...TEMAS_ESTATICOS_PAGO,
  ...TEMAS_LEGENDARIOS,
  ...AVATARES_BASE,
];

export async function seedTienda(): Promise<void> {
  console.log("[seed_tienda] Insertando items base de tienda...");
  const result = await prisma.tiendaItem.createMany({
    skipDuplicates: true,
    data: ALL_ITEMS.map((it) => ({
      id: it.id,
      tipo: it.tipo,
      nombre: it.nombre,
      descripcion: it.descripcion,
      precio: it.precio,
      moneda: "PF",
      assetId: it.assetId,
      activo: 1,
      orden: it.orden,
      createdAt: now,
    })),
  });
  console.log(`[seed_tienda] ${result.count} items nuevos insertados.`);
}

if (require.main === module) {
  seedTienda()
    .catch((e) => { console.error("[seed_tienda] Error:", e); process.exit(1); })
    .finally(() => prisma.$disconnect());
}
