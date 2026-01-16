import React, { useState } from "react";

type Role = "schoolAdmin" | "teacher";

interface User {
  id: string;
  name: string;
  role: Role;
  schoolId: string;
  managedClassIds: string[]; // Clases donde es admin (profesor-admin)
}

interface SchoolClass {
  id: string;
  name: string;
  grade: string;
  schoolId: string;
  studentsCount: number;
  teachers: string[];
}

interface MessageThread {
  id: string;
  studentName: string;
  parentName: string;
  parentRegistered: boolean;
  lastMessageFrom: "parent" | "admin";
  lastMessagePreview: string;
  unreadForAdmin: boolean;
}

interface TransferRequest {
  id: string;
  studentName: string;
  fromSchool: string;
  toSchool: string;
  status: "pending" | "approved" | "rejected";
}

interface SavingsMissionAdmin {
  id: string;
  title: string;
  description: string;
  targetAmount: number;
  durationDays: number;
  rewardCoins: number;
  badgeLabel: string;
  scope: "school" | "class";
  active: boolean;
}

// ====== MOCK DATA (reemplaza luego por datos reales) ======
const mockCurrentUser: User = {
  id: "u1",
  name: "Ana López",
  role: "schoolAdmin", // cambia a "teacher" para ver el otro flujo
  schoolId: "school-1",
  managedClassIds: ["class-1"], // para teacher
};

const mockClasses: SchoolClass[] = [
  {
    id: "class-1",
    name: "5º A",
    grade: "5º Primaria",
    schoolId: "school-1",
    studentsCount: 28,
    teachers: ["Prof. García"],
  },
  {
    id: "class-2",
    name: "5º B",
    grade: "5º Primaria",
    schoolId: "school-1",
    studentsCount: 26,
    teachers: ["Prof. Pérez"],
  },
  {
    id: "class-3",
    name: "6º A",
    grade: "6º Primaria",
    schoolId: "school-2", // otra escuela, no debería verse
    studentsCount: 30,
    teachers: ["Prof. Gómez"],
  },
];

const mockThreads: MessageThread[] = [
  {
    id: "t1",
    studentName: "Juan Pérez",
    parentName: "María Pérez",
    parentRegistered: true,
    lastMessageFrom: "parent",
    lastMessagePreview: "Buenos días, quería consultar sobre las tareas...",
    unreadForAdmin: true,
  },
  {
    id: "t2",
    studentName: "Lucía Díaz",
    parentName: "Carlos Díaz",
    parentRegistered: false,
    lastMessageFrom: "admin",
    lastMessagePreview:
      "Hemos intentado contactarnos, pero el tutor aún no está registrado...",
    unreadForAdmin: false,
  },
];

const mockTransfers: TransferRequest[] = [
  {
    id: "tr1",
    studentName: "Pedro Martínez",
    fromSchool: "Escuela Nº 12",
    toSchool: "Escuela Nº 25",
    status: "pending",
  },
  {
    id: "tr2",
    studentName: "Sofía Rivas",
    fromSchool: "Escuela Nº 25",
    toSchool: "Escuela Nº 12",
    status: "approved",
  },
];

const mockSavingsMissions: SavingsMissionAdmin[] = [
  {
    id: "mission-1",
    title: "Fondo para la excursión",
    description: "Ahorrar para cubrir transporte y materiales de la salida educativa.",
    targetAmount: 80,
    durationDays: 7,
    rewardCoins: 15,
    badgeLabel: "Explorador del ahorro",
    scope: "school",
    active: true
  },
  {
    id: "mission-2",
    title: "Reto de meriendas saludables",
    description: "Guardar monedas durante dos semanas para planificar meriendas.",
    targetAmount: 120,
    durationDays: 14,
    rewardCoins: 25,
    badgeLabel: "Guardian del bolsillo",
    scope: "class",
    active: true
  },
  {
    id: "mission-3",
    title: "Meta solidaria",
    description: "Separar monedas para una acción solidaria del curso.",
    targetAmount: 60,
    durationDays: 5,
    rewardCoins: 12,
    badgeLabel: "Corazón generoso",
    scope: "class",
    active: false
  }
];

// ====== COMPONENTE PRINCIPAL ======
const AdminPanelMain: React.FC = () => {
  const [currentUser] = useState<User>(mockCurrentUser);
  const [activeTab, setActiveTab] = useState<"resumen" | "clases" | "misiones" | "mensajes" | "transferencias">("resumen");
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState<"student" | "teacher">("student");
  const [newClassName, setNewClassName] = useState("");
  const [newClassGrade, setNewClassGrade] = useState("");
  const [savingsMissions, setSavingsMissions] = useState<SavingsMissionAdmin[]>(mockSavingsMissions);
  const [newMission, setNewMission] = useState<Omit<SavingsMissionAdmin, "id">>({
    title: "",
    description: "",
    targetAmount: 50,
    durationDays: 7,
    rewardCoins: 10,
    badgeLabel: "",
    scope: "class",
    active: true
  });

  const isSchoolAdmin = currentUser.role === "schoolAdmin";

  // Clases visibles según reglas:
  // - Admin de escuela: todas las clases de su escuela.
  // - Profesor: solo las clases donde es admin (managedClassIds) y sean de su escuela.
  const visibleClasses = mockClasses.filter((cls) => {
    if (cls.schoolId !== currentUser.schoolId) return false;
    if (isSchoolAdmin) return true;
    return currentUser.managedClassIds.includes(cls.id);
  });

  const selectedClass = visibleClasses.find((c) => c.id === selectedClassId) ?? visibleClasses[0] ?? null;

  const unreadMessagesCount = mockThreads.filter((t) => t.unreadForAdmin).length;
  const pendingTransfersCount = mockTransfers.filter((t) => t.status === "pending").length;

  const handleCreateClass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClassName.trim() || !newClassGrade.trim()) return;
    // Aquí iría la llamada al backend para crear la clase
    console.log("Crear clase:", { newClassName, newClassGrade, schoolId: currentUser.schoolId });
    setNewClassName("");
    setNewClassGrade("");
  };

  const handleSendInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail.trim() || !selectedClass) return;
    // Importante: el backend debe validar que el email pertenezca a la MISMA escuela.
    console.log("Enviar invitación:", {
      email: inviteEmail,
      role: inviteRole,
      classId: selectedClass.id,
      schoolId: currentUser.schoolId,
    });
    setInviteEmail("");
  };

  const handleTransferAction = (id: string, action: "approve" | "reject") => {
    // Aquí irían las llamadas al backend para aprobar/rechazar
    console.log("Acción sobre transferencia:", { id, action });
  };

  const handleToggleMission = (id: string) => {
    setSavingsMissions((prev) =>
      prev.map((mission) =>
        mission.id === id ? { ...mission, active: !mission.active } : mission
      )
    );
  };

  const handleMissionFieldChange = (
    id: string,
    field: keyof SavingsMissionAdmin,
    value: string | number | boolean
  ) => {
    setSavingsMissions((prev) =>
      prev.map((mission) =>
        mission.id === id ? { ...mission, [field]: value } : mission
      )
    );
  };

  const handleCreateMission = (event: React.FormEvent) => {
    event.preventDefault();
    if (!newMission.title.trim() || !newMission.badgeLabel.trim()) return;
    const created: SavingsMissionAdmin = {
      id: `mission-${Date.now()}`,
      ...newMission,
      title: newMission.title.trim(),
      description: newMission.description.trim()
    };
    setSavingsMissions((prev) => [created, ...prev]);
    setNewMission({
      title: "",
      description: "",
      targetAmount: 50,
      durationDays: 7,
      rewardCoins: 10,
      badgeLabel: "",
      scope: "class",
      active: true
    });
  };

  return (
    <main className="flex-1 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* HEADER */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Panel de administración
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Gestioná clases, invitaciones, mensajes con familias y transferencias entre escuelas.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">{currentUser.name}</p>
              <p className="text-xs text-gray-500">ID escuela: {currentUser.schoolId}</p>
            </div>
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                isSchoolAdmin
                  ? "bg-blue-100 text-blue-800"
                  : "bg-emerald-100 text-emerald-800"
              }`}
            >
              {isSchoolAdmin ? "Admin de escuela" : "Profesor administrador de clase"}
            </span>
          </div>
        </header>

        {/* STATS */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
            <p className="text-xs font-medium text-gray-500">Clases visibles</p>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              {visibleClasses.length}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Solo clases asociadas a tu escuela y rol.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
            <p className="text-xs font-medium text-gray-500">Total estimado de alumnos</p>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              {visibleClasses.reduce((acc, cls) => acc + cls.studentsCount, 0)}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Suma de alumnos en tus clases visibles.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
            <p className="text-xs font-medium text-gray-500">Mensajes sin leer</p>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              {unreadMessagesCount}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              De padres o tutores registrados.
            </p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
            <p className="text-xs font-medium text-gray-500">Transferencias pendientes</p>
            <p className="mt-2 text-2xl font-semibold text-gray-900">
              {pendingTransfersCount}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Deben aprobarse antes de cambiar de escuela.
            </p>
          </div>
        </section>

        {/* TABS */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="border-b border-gray-100 px-4 sm:px-6">
            <nav className="-mb-px flex space-x-6 overflow-x-auto">
              {[
                { id: "resumen", label: "Resumen" },
                { id: "clases", label: "Clases e invitaciones" },
                { id: "misiones", label: "Misiones de ahorro" },
                { id: "mensajes", label: "Mensajes con familias" },
                { id: "transferencias", label: "Transferencias" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setActiveTab(tab.id as typeof activeTab)
                  }
                  className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium transition ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="px-4 sm:px-6 py-6">
            {/* TAB: RESUMEN */}
            {activeTab === "resumen" && (
              <div className="space-y-6">
                <div className="rounded-xl bg-blue-50 border border-blue-100 p-4 text-sm text-blue-900">
                  <p className="font-medium mb-1">Reglas clave del sistema</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Cada administrador solo ve clases de su propia escuela.
                    </li>
                    <li>
                      Los profesores pueden ser administradores de una o más clases
                      y acceder al panel de esas clases.
                    </li>
                    <li>
                      Solo se pueden invitar alumnos y profesores de la misma escuela.
                    </li>
                    <li>
                      Para mover un alumno de una escuela a otra, se debe gestionar
                      una transferencia.
                    </li>
                    <li>
                      Padres/tutores pueden enviar mensajes a admins, y los admins pueden
                      responder si el tutor está registrado en el sistema.
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <div className="rounded-xl border border-gray-100 p-4">
                    <h2 className="text-sm font-semibold text-gray-800 mb-3">
                      Clases que administrás
                    </h2>
                    {visibleClasses.length === 0 ? (
                      <p className="text-sm text-gray-500">
                        Por ahora no tenés clases asignadas en esta escuela.
                      </p>
                    ) : (
                      <ul className="space-y-2">
                        {visibleClasses.map((cls) => (
                          <li
                            key={cls.id}
                            className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-sm"
                          >
                            <div>
                              <p className="font-medium text-gray-800">
                                {cls.name}{" "}
                                <span className="text-xs text-gray-500">
                                  • {cls.grade}
                                </span>
                              </p>
                              <p className="text-xs text-gray-500">
                                {cls.studentsCount} alumnos ·{" "}
                                {cls.teachers.join(", ")}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="rounded-xl border border-gray-100 p-4">
                    <h2 className="text-sm font-semibold text-gray-800 mb-3">
                      Actividad reciente
                    </h2>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• {unreadMessagesCount} conversación(es) con tutores sin leer.</li>
                      <li>• {pendingTransfersCount} solicitud(es) de transferencia pendientes.</li>
                      <li>
                        • Recordá que no se pueden invitar alumnos de otra escuela
                        sin una transferencia aprobada.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: CLASES E INVITACIONES */}
            {activeTab === "clases" && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Lista de clases */}
                <div className="lg:col-span-1 space-y-4">
                  <h2 className="text-sm font-semibold text-gray-800">
                    Clases de tu escuela
                  </h2>
                  {visibleClasses.length === 0 ? (
                    <p className="text-sm text-gray-500">
                      Todavía no tenés clases visibles en esta escuela.
                    </p>
                  ) : (
                    <ul className="space-y-2">
                      {visibleClasses.map((cls) => {
                        const isSelected =
                          (selectedClass?.id ?? null) === cls.id;
                        return (
                          <li key={cls.id}>
                            <button
                              type="button"
                              onClick={() => setSelectedClassId(cls.id)}
                              className={`w-full text-left rounded-lg border px-3 py-2 text-sm transition ${
                                isSelected
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-200 bg-white hover:bg-gray-50"
                              }`}
                            >
                              <p className="font-medium text-gray-800">
                                {cls.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {cls.grade} · {cls.studentsCount} alumnos
                              </p>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  {/* Crear clase (solo admin de escuela) */}
                  {isSchoolAdmin && (
                    <form
                      onSubmit={handleCreateClass}
                      className="mt-4 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-3 space-y-2"
                    >
                      <p className="text-xs font-semibold text-gray-700">
                        Crear nueva clase
                      </p>
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nombre de la clase (ej: 5º C)"
                        value={newClassName}
                        onChange={(e) => setNewClassName(e.target.value)}
                      />
                      <input
                        type="text"
                        className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Grado / nivel (ej: 5º Primaria)"
                        value={newClassGrade}
                        onChange={(e) => setNewClassGrade(e.target.value)}
                      />
                      <p className="text-[11px] text-gray-500">
                        La nueva clase quedará vinculada automáticamente a tu escuela.
                      </p>
                      <button
                        type="submit"
                        className="mt-1 inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
                      >
                        Crear clase
                      </button>
                    </form>
                  )}
                </div>

                {/* Detalle de clase + invitaciones */}
                <div className="lg:col-span-2 space-y-4">
                  {selectedClass ? (
                    <>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                          <h3 className="text-base font-semibold text-gray-900">
                            {selectedClass.name}{" "}
                            <span className="text-xs text-gray-500">
                              • {selectedClass.grade}
                            </span>
                          </h3>
                          <p className="text-xs text-gray-500">
                            {selectedClass.studentsCount} alumnos ·{" "}
                            {selectedClass.teachers.join(", ")}
                          </p>
                        </div>
                        <p className="text-xs text-gray-500">
                          Escuela: {currentUser.schoolId}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-lg border border-gray-200 p-4">
                          <h4 className="text-sm font-semibold text-gray-800 mb-2">
                            Invitaciones a alumnos/profesores
                          </h4>
                          <p className="text-xs text-gray-500 mb-3">
                            El sistema solo permitirá invitar usuarios asociados a tu escuela.
                            Para alumnos de otra escuela, primero debe aprobarse una
                            transferencia.
                          </p>
                          <form
                            onSubmit={handleSendInvite}
                            className="space-y-2 text-sm"
                          >
                            <div className="space-y-1">
                              <label className="block text-xs font-medium text-gray-700">
                                Correo electrónico
                              </label>
                              <input
                                type="email"
                                className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={inviteEmail}
                                onChange={(e) =>
                                  setInviteEmail(e.target.value)
                                }
                                placeholder="tutor@ejemplo.com"
                              />
                            </div>

                            <div className="space-y-1">
                              <label className="block text-xs font-medium text-gray-700">
                                Rol a invitar
                              </label>
                              <select
                                className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={inviteRole}
                                onChange={(e) =>
                                  setInviteRole(
                                    e.target.value as "student" | "teacher"
                                  )
                                }
                              >
                                <option value="student">Alumno</option>
                                <option value="teacher">Profesor</option>
                              </select>
                            </div>

                            <button
                              type="submit"
                              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
                            >
                              Enviar invitación
                            </button>
                          </form>
                        </div>

                        <div className="rounded-lg border border-gray-200 p-4">
                          <h4 className="text-sm font-semibold text-gray-800 mb-2">
                            Resumen de la clase
                          </h4>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>
                              • Alumnos:{" "}
                              <span className="font-semibold">
                                {selectedClass.studentsCount}
                              </span>
                            </li>
                            <li>
                              • Profesores:{" "}
                              <span className="font-semibold">
                                {selectedClass.teachers.join(", ")}
                              </span>
                            </li>
                            <li>
                              • Escuela:{" "}
                              <span className="font-semibold">
                                {currentUser.schoolId}
                              </span>
                            </li>
                          </ul>
                          <p className="mt-3 text-[11px] text-gray-500">
                            🎓 Podés ampliar esta sección con asistencia,
                            calificaciones o configuración avanzada del módulo.
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-gray-500">
                      Seleccioná una clase de la lista para ver el detalle e invitar
                      usuarios.
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* TAB: MISIONES DE AHORRO */}
            {activeTab === "misiones" && (
              <div className="space-y-6">
                <div className="rounded-xl border border-amber-100 bg-amber-50 p-4 text-sm text-amber-900">
                  <p className="font-semibold">Control de misiones de ahorro</p>
                  <p className="mt-1 text-xs text-amber-800">
                    Definí metas, tiempos y recompensas en badges. Estas misiones se
                    publican en el tablero del alumno cuando están activas.
                  </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-4">
                    {savingsMissions.map((mission) => (
                      <div
                        key={mission.id}
                        className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              {mission.title}
                            </p>
                            <p className="text-xs text-gray-500">
                              {mission.description || "Sin descripción aún."}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleToggleMission(mission.id)}
                            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                              mission.active
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            {mission.active ? "Activa" : "Pausada"}
                          </button>
                        </div>

                        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3 text-sm">
                          <label className="text-xs text-gray-600">
                            Meta de ahorro (🪙)
                            <input
                              type="number"
                              min={10}
                              className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                              value={mission.targetAmount}
                              onChange={(event) =>
                                handleMissionFieldChange(
                                  mission.id,
                                  "targetAmount",
                                  Number(event.target.value)
                                )
                              }
                            />
                          </label>
                          <label className="text-xs text-gray-600">
                            Tiempo (días)
                            <input
                              type="number"
                              min={1}
                              className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                              value={mission.durationDays}
                              onChange={(event) =>
                                handleMissionFieldChange(
                                  mission.id,
                                  "durationDays",
                                  Number(event.target.value)
                                )
                              }
                            />
                          </label>
                          <label className="text-xs text-gray-600">
                            Recompensa (🪙)
                            <input
                              type="number"
                              min={0}
                              className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                              value={mission.rewardCoins}
                              onChange={(event) =>
                                handleMissionFieldChange(
                                  mission.id,
                                  "rewardCoins",
                                  Number(event.target.value)
                                )
                              }
                            />
                          </label>
                          <label className="text-xs text-gray-600">
                            Badge asociado
                            <input
                              type="text"
                              className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                              value={mission.badgeLabel}
                              onChange={(event) =>
                                handleMissionFieldChange(
                                  mission.id,
                                  "badgeLabel",
                                  event.target.value
                                )
                              }
                            />
                          </label>
                          <label className="text-xs text-gray-600">
                            Alcance
                            <select
                              className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                              value={mission.scope}
                              onChange={(event) =>
                                handleMissionFieldChange(
                                  mission.id,
                                  "scope",
                                  event.target.value as SavingsMissionAdmin["scope"]
                                )
                              }
                            >
                              <option value="school">Toda la escuela</option>
                              <option value="class">Solo la clase</option>
                            </select>
                          </label>
                          <label className="text-xs text-gray-600">
                            Descripción breve
                            <input
                              type="text"
                              className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                              value={mission.description}
                              onChange={(event) =>
                                handleMissionFieldChange(
                                  mission.id,
                                  "description",
                                  event.target.value
                                )
                              }
                            />
                          </label>
                        </div>

                        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                          <span className="rounded-full bg-gray-100 px-2 py-1">
                            {mission.scope === "school"
                              ? "Aplica a toda la escuela"
                              : `Aplica a: ${selectedClass?.name ?? "clase seleccionada"}`}
                          </span>
                          <span className="rounded-full bg-blue-50 px-2 py-1 text-blue-700">
                            Badge: {mission.badgeLabel || "Sin badge definido"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <form
                    onSubmit={handleCreateMission}
                    className="rounded-xl border border-dashed border-gray-200 bg-gray-50 p-4 space-y-3"
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800">Crear nueva misión</h3>
                      <p className="text-xs text-gray-500">
                        Agregá misiones con metas y tiempos para gamificar el ahorro.
                      </p>
                    </div>
                    <label className="text-xs text-gray-600">
                      Título
                      <input
                        type="text"
                        className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                        value={newMission.title}
                        onChange={(event) =>
                          setNewMission((prev) => ({ ...prev, title: event.target.value }))
                        }
                        placeholder="Ej: Planifica tu compra"
                      />
                    </label>
                    <label className="text-xs text-gray-600">
                      Descripción
                      <input
                        type="text"
                        className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                        value={newMission.description}
                        onChange={(event) =>
                          setNewMission((prev) => ({ ...prev, description: event.target.value }))
                        }
                        placeholder="¿Qué aprenden al ahorrar?"
                      />
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="text-xs text-gray-600">
                        Meta (🪙)
                        <input
                          type="number"
                          min={10}
                          className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                          value={newMission.targetAmount}
                          onChange={(event) =>
                            setNewMission((prev) => ({
                              ...prev,
                              targetAmount: Number(event.target.value)
                            }))
                          }
                        />
                      </label>
                      <label className="text-xs text-gray-600">
                        Tiempo (días)
                        <input
                          type="number"
                          min={1}
                          className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                          value={newMission.durationDays}
                          onChange={(event) =>
                            setNewMission((prev) => ({
                              ...prev,
                              durationDays: Number(event.target.value)
                            }))
                          }
                        />
                      </label>
                      <label className="text-xs text-gray-600">
                        Recompensa (🪙)
                        <input
                          type="number"
                          min={0}
                          className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                          value={newMission.rewardCoins}
                          onChange={(event) =>
                            setNewMission((prev) => ({
                              ...prev,
                              rewardCoins: Number(event.target.value)
                            }))
                          }
                        />
                      </label>
                      <label className="text-xs text-gray-600">
                        Badge
                        <input
                          type="text"
                          className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                          value={newMission.badgeLabel}
                          onChange={(event) =>
                            setNewMission((prev) => ({ ...prev, badgeLabel: event.target.value }))
                          }
                          placeholder="Ej: Ahorrista top"
                        />
                      </label>
                    </div>
                    <label className="text-xs text-gray-600">
                      Alcance
                      <select
                        className="mt-1 w-full rounded-md border border-gray-300 px-2 py-1 text-sm"
                        value={newMission.scope}
                        onChange={(event) =>
                          setNewMission((prev) => ({
                            ...prev,
                            scope: event.target.value as SavingsMissionAdmin["scope"]
                          }))
                        }
                      >
                        <option value="school">Toda la escuela</option>
                        <option value="class">Solo la clase</option>
                      </select>
                    </label>
                    <button
                      type="submit"
                      className="w-full rounded-md bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700"
                    >
                      Crear misión
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* TAB: MENSAJES */}
            {activeTab === "mensajes" && (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="lg:col-span-1">
                  <h2 className="text-sm font-semibold text-gray-800 mb-3">
                    Conversaciones con familias
                  </h2>
                  <ul className="space-y-2">
                    {mockThreads.map((thread) => (
                      <li
                        key={thread.id}
                        className={`rounded-lg border px-3 py-2 text-sm ${
                          thread.unreadForAdmin
                            ? "border-blue-400 bg-blue-50"
                            : "border-gray-200 bg-white"
                        }`}
                      >
                        <p className="font-medium text-gray-800">
                          {thread.studentName}
                        </p>
                        <p className="text-xs text-gray-500">
                          Tutor: {thread.parentName}{" "}
                          {!thread.parentRegistered && (
                            <span className="ml-1 inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-[10px] font-medium text-yellow-800">
                              tutor no registrado
                            </span>
                          )}
                        </p>
                        <p className="mt-1 text-xs text-gray-600 line-clamp-2">
                          {thread.lastMessagePreview}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-2">
                  <div className="rounded-lg border border-gray-200 p-4 h-full flex flex-col">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                      Mensajería admin ↔ padres/tutores
                    </h3>
                    <p className="text-xs text-gray-500 mb-3">
                      Los padres o tutores pueden enviar mensajes a los administradores.
                      Los administradores pueden responder y también iniciar mensajes
                      cuando el tutor está registrado en el sistema.
                    </p>
                    <div className="flex-1 rounded-md bg-gray-50 border border-dashed border-gray-200 p-3 text-xs text-gray-500">
                      Aquí iría el hilo de mensajes seleccionado (en tiempo real).
                    </div>
                    <form className="mt-3 flex flex-col gap-2">
                      <textarea
                        className="w-full rounded-md border border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        placeholder="Escribí tu mensaje para el tutor..."
                      />
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] text-gray-500">
                          Solo se puede enviar a tutores vinculados y registrados.
                        </p>
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
                        >
                          Enviar mensaje
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: TRANSFERENCIAS */}
            {activeTab === "transferencias" && (
              <div className="space-y-4">
                <div className="rounded-lg bg-amber-50 border border-amber-200 p-3 text-xs text-amber-900">
                  <p className="font-semibold mb-1">Transferencia de alumnos entre escuelas</p>
                  <p>
                    El sistema no permite invitar alumnos de otra escuela directamente.
                    Primero se debe generar y aprobar una solicitud de transferencia.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Alumno
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          De
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          A
                        </th>
                        <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Estado
                        </th>
                        <th className="px-3 py-2"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {mockTransfers.map((tr) => (
                        <tr key={tr.id}>
                          <td className="px-3 py-2 whitespace-nowrap text-gray-800">
                            {tr.studentName}
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap text-gray-600">
                            {tr.fromSchool}
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap text-gray-600">
                            {tr.toSchool}
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap">
                            <span
                              className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                                tr.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : tr.status === "approved"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {tr.status === "pending"
                                ? "Pendiente"
                                : tr.status === "approved"
                                ? "Aprobada"
                                : "Rechazada"}
                            </span>
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap text-right text-xs">
                            {tr.status === "pending" && isSchoolAdmin ? (
                              <div className="flex gap-2 justify-end">
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleTransferAction(tr.id, "approve")
                                  }
                                  className="rounded-md bg-emerald-600 px-2 py-1 text-xs font-medium text-white hover:bg-emerald-700"
                                >
                                  Aprobar
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleTransferAction(tr.id, "reject")
                                  }
                                  className="rounded-md bg-red-600 px-2 py-1 text-xs font-medium text-white hover:bg-red-700"
                                >
                                  Rechazar
                                </button>
                              </div>
                            ) : (
                              <span className="text-[11px] text-gray-400">
                                Solo admins de escuela pueden gestionar
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AdminPanelMain;
