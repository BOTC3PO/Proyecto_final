import { describe, expect, it, vi } from 'vitest';
import { esErrorDeChunk, recargarSiCorresponde } from '../RouteErrorBoundary';

const almacenFalso = () => {
  const datos = new Map<string, string>();
  return { getItem: (k: string) => datos.get(k) ?? null, setItem: (k: string, v: string) => void datos.set(k, v) };
};

describe('esErrorDeChunk (C5)', () => {
  it.each([
    'Failed to fetch dynamically imported module: https://x/assets/Foo-abc.js',
    'error loading dynamically imported module',
    'Importing a module script failed.',
    'Loading chunk 12 failed.',
  ])('reconoce "%s"', (mensaje) => {
    expect(esErrorDeChunk(new Error(mensaje))).toBe(true);
  });
  it('no confunde un error común de la página', () => {
    expect(esErrorDeChunk(new TypeError("Cannot read properties of undefined (reading 'map')"))).toBe(false);
  });
});

describe('recargarSiCorresponde (C5)', () => {
  it('recarga la primera vez y no vuelve a recargar durante un minuto (evita bucles)', () => {
    const almacen = almacenFalso();
    const recargar = vi.fn();
    expect(recargarSiCorresponde(1_000_000, almacen, recargar)).toBe(true);
    expect(recargarSiCorresponde(1_030_000, almacen, recargar)).toBe(false);
    expect(recargarSiCorresponde(1_000_000 + 61_000, almacen, recargar)).toBe(true);
    expect(recargar).toHaveBeenCalledTimes(2);
  });
  it('sin almacenamiento disponible igual recarga una vez', () => {
    const recargar = vi.fn();
    expect(recargarSiCorresponde(5_000_000, null, recargar)).toBe(true);
    expect(recargar).toHaveBeenCalledTimes(1);
  });
});
