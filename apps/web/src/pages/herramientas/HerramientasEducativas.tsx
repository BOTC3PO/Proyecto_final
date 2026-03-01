import { Link } from "react-router-dom";

const subjects = [
  {
    path: "/herramientas/estadistica",
    name: "Estadística",
    description: "Distribuciones, regresión y análisis descriptivo",
    icon: "📊",
  },
  {
    path: "/herramientas/ciencias-sociales",
    name: "Ciencias Sociales",
    description: "Pirámides de población y mapas temáticos",
    icon: "🌍",
  },
  {
    path: "/herramientas/filosofia",
    name: "Filosofía",
    description: "Mapas de argumentos y dilemas éticos",
    icon: "🧠",
  },
  {
    path: "/herramientas/arte",
    name: "Arte",
    description: "Rueda de colores y composición visual",
    icon: "🎨",
  },
  {
    path: "/herramientas/biologia",
    name: "Biología",
    description: "Diagramas celulares, genética y dinámica poblacional",
    icon: "🔬",
  },
  {
    path: "/herramientas/musica",
    name: "Música",
    description: "Ondas sonoras y grillas rítmicas",
    icon: "🎵",
  },
  {
    path: "/herramientas/politica",
    name: "Política",
    description: "Sistemas de votación y distribución de poder",
    icon: "🗳️",
  },
  {
    path: "/herramientas/civica",
    name: "Educación Cívica",
    description: "Árbol de derechos y presupuesto participativo",
    icon: "⚖️",
  },
  {
    path: "/herramientas/ambiental",
    name: "Ciencias Ambientales",
    description: "Ciclo del carbono y ecosistemas",
    icon: "🌱",
  },
  {
    path: "/herramientas/informatica",
    name: "Informática",
    description: "Algoritmos de ordenamiento y recorrido de grafos",
    icon: "💻",
  },
  {
    path: "/herramientas/naturales",
    name: "Ciencias Naturales",
    description: "Variables meteorológicas y ciclo del agua",
    icon: "🌤️",
  },
  {
    path: "/herramientas/cocina",
    name: "Cocina",
    description: "Escalado de recetas y reacciones de Maillard",
    icon: "🍳",
  },
  {
    path: "/herramientas/vida-practica",
    name: "Vida Práctica",
    description: "Presupuesto personal y matriz Eisenhower",
    icon: "📋",
  },
];

export default function HerramientasEducativas() {
  return (
    <div className="space-y-6 px-6 py-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">
          Herramientas Educativas
        </h1>
        <p className="text-sm text-slate-600">
          Selecciona una materia para explorar sus herramientas interactivas de visualización.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {subjects.map((subject) => (
          <Link
            key={subject.path}
            to={subject.path}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <div className="mb-3 text-3xl">{subject.icon}</div>
            <h2 className="text-base font-semibold text-slate-800">
              {subject.name}
            </h2>
            <p className="mt-1 text-sm text-slate-500">{subject.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
