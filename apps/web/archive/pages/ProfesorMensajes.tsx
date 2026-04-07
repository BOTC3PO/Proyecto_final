import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";

type AttachmentMeta = {
  name: string;
  size: number;
  type: string;
};

type Publication = {
  id: string;
  title: string;
  content: string;
  attachments: AttachmentMeta[];
  links: string[];
  createdAt: string;
  updatedAt?: string;
  isRead: boolean;
};

const STORAGE_KEY = "mvp_publicaciones";

const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

export default function ProfesorMensajes() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [attachments, setAttachments] = useState<AttachmentMeta[]>([]);
  const [links, setLinks] = useState<string[]>([]);
  const [linkInput, setLinkInput] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Publication[];
        setPublications(parsed);
      } catch {
        setPublications([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(publications));
  }, [publications]);

  const orderedPublications = useMemo(() => {
    return [...publications].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
  }, [publications]);

  const resetForm = () => {
    setTitle("");
    setContent("");
    setAttachments([]);
    setLinks([]);
    setLinkInput("");
    setEditingId(null);
  };

  const handleAddLink = () => {
    const normalized = linkInput.trim();
    if (!normalized) return;
    setLinks((prev) => [...prev, normalized]);
    setLinkInput("");
  };

  const handleAddFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const files = Array.from(fileList).map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type || "Archivo",
    }));
    setAttachments((prev) => [...prev, ...files]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim() || !content.trim()) return;

    if (editingId) {
      setPublications((prev) =>
        prev.map((publication) =>
          publication.id === editingId
            ? {
                ...publication,
                title: title.trim(),
                content: content.trim(),
                attachments,
                links,
                updatedAt: new Date().toISOString(),
              }
            : publication,
        ),
      );
    } else {
      const now = new Date().toISOString();
      const newPublication: Publication = {
        id: crypto.randomUUID(),
        title: title.trim(),
        content: content.trim(),
        attachments,
        links,
        createdAt: now,
        isRead: false,
      };
      setPublications((prev) => [newPublication, ...prev]);
    }

    resetForm();
  };

  const handleEdit = (publication: Publication) => {
    setEditingId(publication.id);
    setTitle(publication.title);
    setContent(publication.content);
    setAttachments(publication.attachments);
    setLinks(publication.links);
    setLinkInput("");
  };

  const handleDelete = (publicationId: string) => {
    setPublications((prev) => prev.filter((publication) => publication.id !== publicationId));
    if (editingId === publicationId) {
      resetForm();
    }
  };

  const toggleRead = (publicationId: string) => {
    setPublications((prev) =>
      prev.map((publication) =>
        publication.id === publicationId
          ? { ...publication, isRead: !publication.isRead }
          : publication,
      ),
    );
  };

  return (
    <main className="p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">Publicaciones</h1>
        <p className="text-gray-600">
          Crea anuncios para estudiantes y familias, adjunta archivos o enlaces, y mantén un
          historial ordenado por fecha.
        </p>
      </header>

      <section className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold">
            {editingId ? "Editar publicación" : "Nueva publicación"}
          </h2>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Cancelar edición
            </button>
          )}
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700" htmlFor="titulo-publicacion">
                Título
              </label>
              <input
                id="titulo-publicacion"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="Ej: Recordatorio de evaluación"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700" htmlFor="archivos-publicacion">
                Adjuntar archivos
              </label>
              <input
                id="archivos-publicacion"
                type="file"
                multiple
                onChange={(event) => handleAddFiles(event.target.files)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              {attachments.length > 0 && (
                <ul className="space-y-1 text-xs text-gray-600">
                  {attachments.map((file, index) => (
                    <li key={`${file.name}-${index}`} className="flex items-center gap-2">
                      <span className="font-medium">{file.name}</span>
                      <span className="text-gray-400">
                        ({formatFileSize(file.size)} · {file.type || "Archivo"})
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setAttachments((prev) => prev.filter((_, idx) => idx !== index))
                        }
                        className="text-indigo-600 hover:text-indigo-700"
                      >
                        Quitar
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="contenido-publicacion">
              Contenido
            </label>
            <textarea
              id="contenido-publicacion"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              className="min-h-[120px] w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="Comparte detalles de la publicación."
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="enlace-publicacion">
              Adjuntar enlaces
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                id="enlace-publicacion"
                value={linkInput}
                onChange={(event) => setLinkInput(event.target.value)}
                className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                placeholder="https://..."
              />
              <button
                type="button"
                onClick={handleAddLink}
                className="rounded-lg border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Agregar enlace
              </button>
            </div>
            {links.length > 0 && (
              <ul className="space-y-1 text-xs text-gray-600">
                {links.map((link, index) => (
                  <li key={`${link}-${index}`} className="flex items-center gap-2">
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="truncate text-indigo-600 hover:text-indigo-700"
                    >
                      {link}
                    </a>
                    <button
                      type="button"
                      onClick={() => setLinks((prev) => prev.filter((_, idx) => idx !== index))}
                      className="text-indigo-600 hover:text-indigo-700"
                    >
                      Quitar
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              {editingId ? "Guardar cambios" : "Publicar"}
            </button>
            <span className="text-xs text-gray-500">
              Se guardará en este dispositivo para mantener el historial del tablero.
            </span>
          </div>
        </form>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Tablero de publicaciones</h2>
          <span className="text-xs text-gray-500">
            {orderedPublications.length} publicaciones
          </span>
        </div>

        {orderedPublications.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-300 p-6 text-center text-sm text-gray-500">
            Aún no hay publicaciones. Crea la primera desde el formulario superior.
          </div>
        ) : (
          <div className="grid gap-4">
            {orderedPublications.map((publication) => (
              <article
                key={publication.id}
                className={`rounded-xl border p-5 shadow-sm transition ${
                  publication.isRead ? "border-gray-200 bg-gray-50" : "border-indigo-200 bg-white"
                }`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{publication.title}</h3>
                    <p className="text-xs text-gray-500">
                      {new Date(publication.createdAt).toLocaleString()}{" "}
                      {publication.updatedAt && (
                        <span>· Editado {new Date(publication.updatedAt).toLocaleString()}</span>
                      )}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wide ${
                      publication.isRead ? "text-gray-500" : "text-indigo-600"
                    }`}
                  >
                    {publication.isRead ? "Leído" : "Nuevo"}
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-700 whitespace-pre-line">
                  {publication.content}
                </p>

                {(publication.attachments.length > 0 || publication.links.length > 0) && (
                  <div className="mt-4 space-y-3 text-xs text-gray-600">
                    {publication.attachments.length > 0 && (
                      <div>
                        <p className="font-semibold text-gray-700">Archivos adjuntos</p>
                        <ul className="space-y-1">
                          {publication.attachments.map((file, index) => (
                            <li key={`${publication.id}-file-${index}`} className="flex gap-2">
                              <span>{file.name}</span>
                              <span className="text-gray-400">
                                ({formatFileSize(file.size)} · {file.type || "Archivo"})
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {publication.links.length > 0 && (
                      <div>
                        <p className="font-semibold text-gray-700">Enlaces</p>
                        <ul className="space-y-1">
                          {publication.links.map((link, index) => (
                            <li key={`${publication.id}-link-${index}`}>
                              <a
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-indigo-600 hover:text-indigo-700"
                              >
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => toggleRead(publication.id)}
                    className="rounded-full border border-gray-300 px-3 py-1 font-medium text-gray-600 hover:border-gray-400"
                  >
                    {publication.isRead ? "Marcar como nuevo" : "Marcar como leído"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleEdit(publication)}
                    className="rounded-full border border-indigo-200 px-3 py-1 font-medium text-indigo-600 hover:border-indigo-300"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(publication.id)}
                    className="rounded-full border border-red-200 px-3 py-1 font-medium text-red-600 hover:border-red-300"
                  >
                    Borrar
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
