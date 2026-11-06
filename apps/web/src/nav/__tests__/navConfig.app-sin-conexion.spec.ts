import { describe, expect, it, vi } from "vitest";

describe("navConfig (L8): en la app sin conexión", () => {
  it("no muestra lo que necesita el servidor", async () => {
    vi.resetModules();
    vi.doMock("../../lib/sinConexion", () => ({ esAppSinConexion: true }));
    const { NAV_BY_ROLE, DROPDOWN_BY_ROLE } = await import("../navConfig");
    expect(NAV_BY_ROLE.USER.map((i) => i.id)).toEqual(["inicio", "progreso", "modulos"]);
    const menu = DROPDOWN_BY_ROLE.USER.map((i) => (i.kind === "link" ? i.id : i.kind));
    expect(menu).toEqual(["miPerfil", "divider", "logout"]);
    expect(NAV_BY_ROLE.TEACHER.map((i) => i.id)).toEqual(["panel", "modulos"]);
    vi.doUnmock("../../lib/sinConexion");
  });

  it("en la web queda todo", async () => {
    vi.resetModules();
    vi.doMock("../../lib/sinConexion", () => ({ esAppSinConexion: false }));
    const { NAV_BY_ROLE } = await import("../navConfig");
    expect(NAV_BY_ROLE.USER.map((i) => i.id)).toContain("mensajes");
    vi.doUnmock("../../lib/sinConexion");
  });
});
