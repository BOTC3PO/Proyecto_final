/**
 * pages/Creditos.tsx — huevo de pascua: ruta pública sin link en ningún
 * nav/footer, sólo se llega escribiendo /creditos a mano.
 */
type Grupo = { titulo: string; items: { nombre: string; nota?: string }[] };

const GRUPOS: Grupo[] = [
  {
    titulo: "Asistencia de desarrollo",
    items: [
      { nombre: "Claude (Anthropic)", nota: "gran parte del código, contenido educativo y diseño de este repo se escribió con su ayuda" },
    ],
  },
  {
    titulo: "Plataforma y lenguaje",
    items: [
      { nombre: "TypeScript" },
      { nombre: "Node.js" },
    ],
  },
  {
    titulo: "API",
    items: [
      { nombre: "Express" },
      { nombre: "Prisma" },
      { nombre: "PostgreSQL" },
      { nombre: "Zod" },
      { nombre: "ioredis / Redis" },
      { nombre: "better-sqlite3" },
      { nombre: "bcryptjs" },
      { nombre: "Helmet" },
      { nombre: "AWS SDK (S3)" },
    ],
  },
  {
    titulo: "Web",
    items: [
      { nombre: "React" },
      { nombre: "Vite" },
      { nombre: "Tailwind CSS" },
      { nombre: "React Router" },
      { nombre: "Recharts" },
      { nombre: "@xyflow/react", nota: "editor de mapas de temas" },
      { nombre: "dnd-kit" },
      { nombre: "KaTeX", nota: "notación matemática" },
      { nombre: "mathjs" },
      { nombre: "marked + DOMPurify" },
      { nombre: "anime.js" },
      { nombre: "d3-geo / topojson-client" },
      { nombre: "Fontsource", nota: "las tipografías de los temas visuales" },
    ],
  },
  {
    titulo: "Pagos",
    items: [
      { nombre: "Mercado Pago" },
      { nombre: "Cryptomus" },
    ],
  },
];

export default function Creditos() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="mx-auto max-w-2xl space-y-10">
        <div className="text-center space-y-2">
          <div className="text-4xl">🥚</div>
          <h1 className="text-2xl font-semibold text-gray-900">Créditos</h1>
          <p className="text-sm text-gray-500">
            Nadie te mandó acá — llegaste escribiendo la URL a mano. Esta es la
            lista real de con qué está hecho Virtual Book.
          </p>
        </div>

        {GRUPOS.map((grupo) => (
          <div key={grupo.titulo} className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              {grupo.titulo}
            </h2>
            <ul className="space-y-1.5">
              {grupo.items.map((item) => (
                <li key={item.nombre} className="text-gray-700">
                  <span className="font-medium">{item.nombre}</span>
                  {item.nota && <span className="text-gray-500"> — {item.nota}</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <p className="text-center text-xs text-gray-400 pt-6">
          Gracias a todos los que mantienen software libre y open source —
          este proyecto no existiría sin eso.
        </p>
      </div>
    </div>
  );
}
