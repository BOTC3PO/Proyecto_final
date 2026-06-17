/**
 * Tests integrados de la barra de acciones en `pages/aula.tsx` (Tarea 16).
 *
 * Mockeamos los servicios externos + auth context para verificar que la
 * barra se muestra cuando `user.role === "TEACHER"` y el aula está
 * disponible, y NO se muestra para alumnos.
 */

import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

vi.mock("../../auth/use-auth", () => ({
  useAuth: vi.fn(),
}));

vi.mock("../../services/aulas", () => ({
  fetchClassroomDetail: vi.fn().mockResolvedValue({
    _id: "aula-1",
    id: "aula-1",
    name: "5°B",
    status: "activa",
    teacherId: "u-1",
    inviteCode: "ABC123",
    grade: "5°",
    section: "B",
    schoolId: "s-1",
    members: ["u-1", "u-2"],
  }),
}));

vi.mock("../../services/publicaciones", () => ({
  fetchPublications: vi.fn().mockResolvedValue([]),
  createPublication: vi.fn(),
}));

vi.mock("../../services/leaderboard", () => ({
  fetchLeaderboard: vi.fn().mockResolvedValue([]),
}));

vi.mock("../../services/actividades", () => ({
  fetchUpcomingActivities: vi.fn().mockResolvedValue([]),
}));

vi.mock("../../services/resource-links", () => ({
  fetchResourceLinks: vi.fn().mockResolvedValue({ items: [] }),
}));

vi.mock("../../services/subastas", () => ({
  fetchSubastasActivas: vi.fn().mockResolvedValue([]),
  fetchMisPujas: vi.fn().mockResolvedValue([]),
  crearPuja: vi.fn(),
}));

vi.mock("../../lib/api", () => ({
  apiGet: vi.fn(),
  apiPost: vi.fn(),
}));

const mockedApiGet = apiGet as unknown as ReturnType<typeof vi.fn>;
const mockedApiPost = apiPost as unknown as ReturnType<typeof vi.fn>;

import Aula from "../aula";
import { useAuth } from "../../auth/use-auth";
import { fetchClassroomDetail } from "../../services/aulas";
import { fetchLeaderboard } from "../../services/leaderboard";
import { fetchUpcomingActivities } from "../../services/actividades";
import { apiGet, apiPost } from "../../lib/api";

const TEACHER_USER = {
  id: "u-1",
  name: "Docente Demo",
  role: "TEACHER" as const,
  schoolId: "s-1",
};

const STUDENT_USER = {
  id: "u-2",
  name: "Alumno Demo",
  role: "USER" as const,
  schoolId: "s-1",
};

const MOCK_CLASSROOM = {
  _id: "aula-1",
  id: "aula-1",
  name: "5°B",
  status: "activa",
  teacherId: "u-1",
  inviteCode: "ABC123",
  grade: "5°",
  section: "B",
  schoolId: "s-1",
  members: ["u-1", "u-2"],
};

function setupUser(user: typeof TEACHER_USER | typeof STUDENT_USER | null) {
  (useAuth as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
    user,
    loginAs: vi.fn(),
    login: vi.fn(),
    logout: vi.fn(),
  });
}

function setupClassroom() {
  (fetchClassroomDetail as unknown as ReturnType<typeof vi.fn>).mockResolvedValue(
    MOCK_CLASSROOM,
  );
}
// Por defecto, fetchClassroomDetail ya esta mockeado en el factory.
// setupClassroom() es opcional en este test.

function renderAula() {
  return render(
    <MemoryRouter initialEntries={["/clases/aula-1?id=aula-1"]}>
      <Routes>
        <Route path="/clases/:aulaId" element={<Aula />} />
      </Routes>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  vi.clearAllMocks();
  // Re-configuramos los mocks porque `vi.clearAllMocks` borra las
  // implementaciones, y aula.tsx hace `apiGet(...).then(...)` que
  // fallaria si apiGet devolviera undefined.
  mockedApiGet.mockImplementation((url: string) => {
    // El endpoint de la matriz vive bajo /api/progreso/aula-matriz, asi
    // que hay que chequear la URL mas especifica primero (si no, el
    // fallback "/progreso" matchea antes).
    if (url.includes("/aula-matriz")) {
      return Promise.resolve({ modulos: [], alumnos: [] });
    }
    if (url.includes("/progreso")) {
      return Promise.resolve({ items: [], unlocks: [] });
    }
    return Promise.resolve({ items: [] });
  });
  mockedApiPost.mockResolvedValue({});
});

describe("aula.tsx — barra de acciones del docente (Tarea 16)", () => {
  it("muestra la barra con 3 acciones cuando el usuario es TEACHER del aula", async () => {
    setupUser(TEACHER_USER);
    setupClassroom();
    renderAula();
    // esperamos a que se resuelva fetchClassroomDetail + render
    await waitFor(
      () => {
        expect(fetchClassroomDetail).toHaveBeenCalled();
        expect(screen.getByTestId("aula-publication-form")).toBeInTheDocument();
        expect(screen.getByTestId("aula-actions-bar")).toBeInTheDocument();
      },
      { timeout: 3000 },
    );
    expect(screen.getByTestId("aula-action-asistencia")).toBeInTheDocument();
    expect(screen.getByTestId("aula-action-publicar")).toBeInTheDocument();
    expect(screen.getByTestId("aula-action-estadisticas")).toBeInTheDocument();
  });

  it("no muestra la barra cuando el usuario es USER (alumno)", async () => {
    setupUser(STUDENT_USER);
    setupClassroom();
    renderAula();
    // Esperá a que cargue el aula.
    await waitFor(() => {
      expect(
        screen.getByTestId("aula-publication-form"),
      ).toBeInTheDocument();
    });
    expect(screen.queryByTestId("aula-actions-bar")).not.toBeInTheDocument();
    // Tarea 18: la matriz de progreso tampoco debe verse para alumnos.
    expect(screen.queryByTestId("progreso-curso-details")).not.toBeInTheDocument();
  });

  it("Tarea 21: feed sin publicaciones muestra el mensaje 'aún no hay publicaciones'", async () => {
    setupUser(STUDENT_USER);
    setupClassroom();
    // El mock de publicaciones (in-memory) devuelve [] por defecto, eso
    // ya dispara el render del estado vacio.
    renderAula();
    await waitFor(() => {
      expect(screen.getByTestId("aula-publication-form")).toBeInTheDocument();
    });
    // El feed vacio aparece una vez que deja de estar en loading.
    await waitFor(() => {
      expect(screen.getByTestId("feed-empty")).toBeInTheDocument();
    });
    expect(screen.getByTestId("feed-empty").textContent).toMatch(
      /todav\u00eda no hay publicaciones/i,
    );
    // Para un alumno, el boton "escribir la primera publicacion" NO aparece.
    expect(
      screen.queryByText(/escribir la primera publicaci\u00f3n/i),
    ).not.toBeInTheDocument();
  });

  it("Tarea 21: como docente, el feed vacio ofrece el boton 'escribir la primera publicacion'", async () => {
    setupUser(TEACHER_USER);
    setupClassroom();
    renderAula();
    // Esperamos a que la clase este cargada (la barra de acciones
    // del docente solo aparece con isTeacherOfClass=true, que requiere
    // `classroom` resuelto).
    await screen.findByTestId("aula-actions-bar", {}, { timeout: 5000 });
    await screen.findByTestId("feed-empty", {}, { timeout: 5000 });
    expect(
      await screen.findByRole(
        "button",
        { name: /escribir la primera publicaci\u00f3n/i },
        { timeout: 5000 },
      ),
    ).toBeInTheDocument();
  });

  it("Tarea 21: leaderboard y actividades vacias muestran sus mensajes", async () => {
    setupUser(STUDENT_USER);
    setupClassroom();
    renderAula();
    await waitFor(() => {
      expect(screen.getByTestId("feed-empty")).toBeInTheDocument();
    });
    // El mock por defecto de leaderboard/actividades es [], asi que
    // aparecen los placeholders con data-testid.
    expect(screen.getByTestId("leaderboard-empty")).toBeInTheDocument();
    expect(screen.getByTestId("upcoming-empty")).toBeInTheDocument();
  });

  it("no muestra la barra cuando no hay usuario logueado", () => {
    setupUser(null);
    setupClassroom();
    renderAula();
    expect(screen.queryByTestId("aula-actions-bar")).not.toBeInTheDocument();
  });
});

/**
 * FIX-NAV-01 — el botón "Gestionar aula" del banner del docente debe
 * apuntar a una ruta que existe en el router (FIX-NAV-01 antes
 * apuntaba a `/profesor/aulas/${id}/configuracion`, que cae al
 * catch-all 404 porque la ruta es `profesor/aulas/:aulaId` pelada —
 * ya valida FIX-NAV-01 al confirmar que `to` coincide con una ruta
 * declarada en router.tsx).
 */
describe("FIX-NAV-01: link 'Gestionar aula' del banner del docente", () => {
  it("apunta a /profesor/aulas/<id> pelada (no al /configuracion que cae al 404)", async () => {
    setupUser(TEACHER_USER);
    setupClassroom();
    renderAula();
    await screen.findByTestId("aula-actions-bar", {}, { timeout: 5000 });
    const link = await screen.findByRole("link", { name: /gestionar aula/i });
    expect(link.getAttribute("href")).toBe("/profesor/aulas/aula-1");
    // Candado: el sufijo /configuracion NO debe estar presente.
    expect(link.getAttribute("href") ?? "").not.toMatch(/\/configuracion$/);
  });
});

/**
 * FIX-AULA-PARAM — `aula.tsx:69` leía `useParams().id` cuando la ruta
 * es `clases/:aulaId` (router.tsx:211), así que `routeId` era siempre
 * `undefined`. Sin query string, todos los fallbacks de la cadena
 * (`aula.tsx:105`) eran `null` → `classroomId = null` → los servicios
 * de leaderboard/actividades/publicaciones hacían request SIN
 * classroomId → el back respondía 404 con `classroom not found`, lo
 * cual despistaba el diagnóstico (parecía que la ruta no existía).
 *
 * El renderAula() de arriba navega a `/clases/aula-1?id=aula-1` y
 * enmascara el bug porque la query string rescataba el id. Estos
 * tests navegan SIN query string para forzar el camino del param.
 */
describe("FIX-AULA-PARAM: leaderboard/actividades se llaman CON el aulaId del param", () => {
  function renderAulaSinQuery() {
    return render(
      <MemoryRouter initialEntries={["/clases/aula-1"]}>
        <Routes>
          <Route path="/clases/:aulaId" element={<Aula />} />
        </Routes>
      </MemoryRouter>,
    );
  }

  it("fetchLeaderboard se llama con 'aula-1' (no con undefined)", async () => {
    setupUser(STUDENT_USER);
    setupClassroom();
    renderAulaSinQuery();
    await waitFor(() => {
      expect(
        screen.getByTestId("aula-publication-form"),
      ).toBeInTheDocument();
    });
    // Candado: el bug original hacía que se llamara con undefined.
    await waitFor(() => {
      expect(fetchLeaderboard).toHaveBeenCalledWith("aula-1");
    });
    const calls = (fetchLeaderboard as unknown as ReturnType<typeof vi.fn>).mock.calls;
    for (const call of calls) {
      expect(call[0]).toBe("aula-1");
      expect(call[0]).not.toBeUndefined();
    }
  });

  it("fetchUpcomingActivities se llama con 'aula-1' (no con undefined)", async () => {
    setupUser(STUDENT_USER);
    setupClassroom();
    renderAulaSinQuery();
    await waitFor(() => {
      expect(
        screen.getByTestId("aula-publication-form"),
      ).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(fetchUpcomingActivities).toHaveBeenCalledWith("aula-1");
    });
    const calls = (fetchUpcomingActivities as unknown as ReturnType<typeof vi.fn>).mock.calls;
    for (const call of calls) {
      expect(call[0]).toBe("aula-1");
      expect(call[0]).not.toBeUndefined();
    }
  });
});
