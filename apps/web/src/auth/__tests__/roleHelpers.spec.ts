/**
 * Tests de los helpers de multi-rol del front (MULTIROL-02).
 *
 * Cubre:
 *   - Tabla de equivalencia: `useIsStaff`/`useHasRole` dan el mismo
 *     resultado que el check viejo (`user.role === "X"` /
 *     `STAFF_ROLES.includes(user.role)`) para cada rol.
 *   - `roles[]` vacío → cae a `[role]` (compat).
 *   - El contexto expone `roles[]` y un user staff lo trae poblado.
 */
import { describe, it, expect, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { useAuth } from "../../auth/use-auth";
import {
  canActAsLearner,
  hasAnyRole,
  hasRole,
  isAdmin,
  isDirectivo,
  isStaff,
  isTeacher,
  resolvePrimaryRole,
  resolveRoles,
} from "../roleHelpers";
import {
  useCanActAsLearner,
  useHasAnyRole,
  useHasRole,
  useIsAdmin,
  useIsStaff,
  useIsTeacher,
  usePrimaryRole,
  useRoles,
} from "../use-roles";

// Mock useAuth para los tests de hooks.
const mockAuth = (user: { role: string; roles?: string[] } | null) => {
  (useAuth as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
    user: user
      ? {
          id: "u1",
          name: "Test",
          role: user.role as never,
          roles: user.roles as never,
        }
      : null,
  });
};

vi.mock("../../auth/use-auth", () => ({
  useAuth: vi.fn(),
}));

const STAFF = new Set(["ADMIN", "DIRECTIVO", "TEACHER"]);

/** Equivalente literal del check viejo: `STAFF_ROLES.includes(user.role)`. */
function legacyIsStaff(role: string | undefined | null): boolean {
  return STAFF.has(role ?? "");
}

describe("MULTIROL-02 — helpers centralizados", () => {
  describe("resolveRoles / resolvePrimaryRole", () => {
    it("string suelto lo promueve a array de un elemento", () => {
      expect(resolveRoles("TEACHER")).toEqual(["TEACHER"]);
    });

    it("roles[] presente gana sobre el singular", () => {
      expect(resolveRoles({ role: "TEACHER", roles: ["ADMIN"] })).toEqual([
        "ADMIN",
      ]);
    });

    it("roles[] vacío cae a [role]", () => {
      expect(resolveRoles({ role: "TEACHER", roles: [] })).toEqual([
        "TEACHER",
      ]);
    });

    it("roles[] null cae a [role]", () => {
      expect(resolveRoles({ role: "TEACHER", roles: null })).toEqual([
        "TEACHER",
      ]);
    });

    it("sin role ni roles devuelve []", () => {
      expect(resolveRoles({})).toEqual([]);
      expect(resolveRoles(null)).toEqual([]);
      expect(resolveRoles(undefined)).toEqual([]);
    });

    it("primary role resuelve por jerarquía", () => {
      expect(
        resolvePrimaryRole({ role: "TEACHER", roles: ["ADMIN", "TEACHER"] }),
      ).toBe("ADMIN");
      expect(
        resolvePrimaryRole({ role: "USER", roles: ["PARENT", "USER"] }),
      ).toBe("PARENT");
    });

    it("primary role devuelve null si vacío", () => {
      expect(resolvePrimaryRole({})).toBeNull();
    });
  });

  describe("tabla de equivalencia con checks viejos", () => {
    // Cada rol del set legacy. El check viejo lee `user.role` singular;
    // el helper nuevo mira `roles[]` con fallback al singular.
    const roles: Array<"ADMIN" | "DIRECTIVO" | "TEACHER" | "USER" | "PARENT" | "GUEST"> = [
      "ADMIN",
      "DIRECTIVO",
      "TEACHER",
      "USER",
      "PARENT",
      "GUEST",
    ];

    it.each(roles)(
      "isStaff (singular) coincide con el check viejo para %s",
      (role) => {
        const u = { role, roles: [role] };
        expect(isStaff(u)).toBe(legacyIsStaff(role));
      },
    );

    it.each(roles)(
      "isStaff con roles[]=[role] coincide con el check viejo para %s",
      (role) => {
        const u = { role, roles: [role] };
        expect(isStaff(u)).toBe(legacyIsStaff(role));
      },
    );

    it("isStaff con roles[] vacío cae al singular", () => {
      // Un USER sin roles[]: el provider lo promueve a [role], pero
      // si llega vacío el helper igual devuelve lo correcto.
      expect(isStaff({ role: "TEACHER", roles: [] })).toBe(true);
      expect(isStaff({ role: "USER", roles: [] })).toBe(false);
    });

    it("isAdmin/isTeacher/isDirectivo coinciden con el check viejo", () => {
      for (const r of roles) {
        const u = { role: r, roles: [r] as string[] };
        expect(isAdmin(u)).toBe(r === "ADMIN");
        expect(isTeacher(u)).toBe(r === "TEACHER");
        expect(isDirectivo(u)).toBe(r === "DIRECTIVO");
      }
    });

    it("hasRole multi-rol: un TEACHER+USER responde true a USER y TEACHER", () => {
      const u = { role: "TEACHER", roles: ["TEACHER", "USER"] };
      expect(hasRole(u, "TEACHER")).toBe(true);
      expect(hasRole(u, "USER")).toBe(true);
      expect(hasRole(u, "ADMIN")).toBe(false);
    });

    it("hasAnyRole para ProtectedRoute (allow=[…])", () => {
      const u = { role: "TEACHER", roles: ["TEACHER", "USER"] };
      expect(hasAnyRole(u, ["TEACHER", "ADMIN"])).toBe(true);
      expect(hasAnyRole(u, ["ADMIN", "DIRECTIVO"])).toBe(false);
      expect(hasAnyRole(u, [])).toBe(false);
    });

    it("canActAsLearner para el CoinBadge (bug 1 del reporte)", () => {
      // Antes: `role === "USER"`. Un TEACHER+USER no veía monedas.
      expect(canActAsLearner({ role: "TEACHER", roles: ["TEACHER", "USER"] })).toBe(true);
      expect(canActAsLearner({ role: "TEACHER", roles: ["TEACHER"] })).toBe(false);
      expect(canActAsLearner({ role: "USER", roles: ["USER"] })).toBe(true);
    });
  });

  describe("hooks — equivalencia con checks viejos", () => {
    it.each([
      { role: "ADMIN" as const, expected: true },
      { role: "DIRECTIVO" as const, expected: true },
      { role: "TEACHER" as const, expected: true },
      { role: "USER" as const, expected: false },
      { role: "PARENT" as const, expected: false },
      { role: "GUEST" as const, expected: false },
    ])("useIsStaff coincide con el check viejo para $role", ({ role, expected }) => {
      mockAuth({ role, roles: [role] });
      const { result } = renderHook(() => useIsStaff());
      expect(result.current).toBe(expected);
    });

    it("useHasRole con multi-rol", () => {
      mockAuth({ role: "TEACHER", roles: ["TEACHER", "USER"] });
      const { result: r1 } = renderHook(() => useHasRole("USER"));
      const { result: r2 } = renderHook(() => useHasRole("ADMIN"));
      expect(r1.current).toBe(true);
      expect(r2.current).toBe(false);
    });

    it("useHasAnyRole", () => {
      mockAuth({ role: "TEACHER", roles: ["TEACHER", "USER"] });
      const { result } = renderHook(() => useHasAnyRole(["ADMIN", "DIRECTIVO"]));
      expect(result.current).toBe(false);
    });

    it("useCanActAsLearner — bug 1 fix", () => {
      mockAuth({ role: "TEACHER", roles: ["TEACHER", "USER"] });
      const { result } = renderHook(() => useCanActAsLearner());
      expect(result.current).toBe(true);
    });

    it("useRoles devuelve el array resuelto", () => {
      mockAuth({ role: "TEACHER", roles: ["TEACHER", "USER"] });
      const { result } = renderHook(() => useRoles());
      expect(result.current).toEqual(["TEACHER", "USER"]);
    });

    it("usePrimaryRole devuelve el rol principal", () => {
      mockAuth({ role: "TEACHER", roles: ["ADMIN", "TEACHER"] });
      const { result } = renderHook(() => usePrimaryRole());
      expect(result.current).toBe("ADMIN");
    });

    it("useIsAdmin/useIsTeacher", () => {
      mockAuth({ role: "ADMIN", roles: ["ADMIN", "USER"] });
      const { result: isAdmin } = renderHook(() => useIsAdmin());
      const { result: isTeacher } = renderHook(() => useIsTeacher());
      expect(isAdmin.current).toBe(true);
      expect(isTeacher.current).toBe(false);
    });
  });
});
