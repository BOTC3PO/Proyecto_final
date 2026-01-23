import { useState } from "react";
import { Link } from "react-router-dom";

const SUBJECTS = [
  "Matemáticas",
  "Lengua y Literatura",
  "Ciencias Naturales",
  "Ciencias Sociales",
  "Historia",
  "Geografía",
  "Física",
  "Química",
  "Biología",
  "Inglés",
  "Informática / TIC",
  "Educación Física",
  "Arte / Plástica",
  "Música",
  "Formación Ética y Ciudadana",
  "Economía",
  "Otro",
];

export default function EditorCuestionarios() {
  const [quizName, setQuizName] = useState("");
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("Listo. Ya podés avanzar con la carga de preguntas y secciones.");
  };

  return (
    <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="space-y-2">
          <p className="text-sm text-blue-600 font-semibold">Editor de cuestionarios</p>
          <h1 className="text-3xl font-semibold">Nuevo cuestionario</h1>
          <p className="text-sm text-gray-600">
            Comenzá definiendo el nombre y la materia. Estos campos son obligatorios para poder organizar los
            cuestionarios por área.
          </p>
        </header>

        <form className="mt-8 space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre del cuestionario <span className="text-red-500">*</span>
            </label>
            <input
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Ej: Práctica de ecuaciones lineales"
              value={quizName}
              onChange={(event) => setQuizName(event.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Materia <span className="text-red-500">*</span>
            </label>
            <select
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 bg-white focus:border-blue-500 focus:ring-blue-500"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            >
              {SUBJECTS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Crear cuestionario
            </button>
            <Link
              className="text-sm text-blue-600 hover:underline"
              to="/profesor/crear-modulo"
            >
              Volver al creador de módulos
            </Link>
          </div>

          {statusMessage && (
            <div className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              {statusMessage}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
