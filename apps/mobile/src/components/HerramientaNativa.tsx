/**
 * Ítems "Herramienta" que se pueden dibujar sin pasar por la web: imágenes (enlazadas, p. ej. de Wikimedia Commons),
 * tablas y texto. Los diagramas (flow, chart, math, shape…) siguen abriéndose en la web, que ya tiene sus renderers
 * (ver el comentario de `app/(alumno)/modulos/[id].tsx`): `docNativo` devuelve `null` en ese caso.
 */
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { colors } from "../theme/tokens";

type Bloque =
  | { id: string; type: "image"; url: string; alt: string; caption?: string }
  | { id: string; type: "table"; title?: string; headers: string[]; rows: (string | number)[][] }
  | { id: string; type: "text"; content: string };

/** Los bloques del documento si TODOS se pueden dibujar de forma nativa; si no, `null`. */
export function docNativo(detail: string): Bloque[] | null {
  try {
    const doc = JSON.parse(detail) as { version?: number; blocks?: { type: string }[] };
    if (doc?.version !== 1 || !Array.isArray(doc.blocks) || doc.blocks.length === 0) return null;
    return doc.blocks.every((b) => b.type === "image" || b.type === "table" || b.type === "text") ? (doc.blocks as Bloque[]) : null;
  } catch {
    return null;
  }
}

function Imagen({ url, alt, caption }: { url: string; alt: string; caption?: string }) {
  const [proporcion, setProporcion] = useState(4 / 3);
  const [fallo, setFallo] = useState(false);
  useEffect(() => {
    Image.getSize(url, (w, h) => h > 0 && setProporcion(w / h), () => setFallo(true));
  }, [url]);
  return (
    <View>
      {fallo ? (
        <Text className="text-sm text-vb-muted">No se pudo cargar la imagen: {alt}</Text>
      ) : (
        <Image
          source={{ uri: url }}
          accessibilityLabel={alt}
          style={{ width: "100%", aspectRatio: proporcion, backgroundColor: "#fff", borderRadius: 8 }}
          resizeMode="contain"
          onError={() => setFallo(true)}
        />
      )}
      {caption ? <Text className="text-xs text-vb-muted text-center mt-1">{caption}</Text> : null}
    </View>
  );
}

function Tabla({ title, headers, rows }: { title?: string; headers: string[]; rows: (string | number)[][] }) {
  return (
    <View>
      {title ? <Text className="text-sm font-semibold text-vb-text mb-1">{title}</Text> : null}
      <ScrollView horizontal showsHorizontalScrollIndicator>
        <View style={{ borderWidth: 1, borderColor: colors.border, borderRadius: 6 }}>
          {[headers, ...rows].map((fila, i) => (
            <View key={i} style={{ flexDirection: "row", backgroundColor: i === 0 ? colors.surface : undefined }}>
              {fila.map((celda, j) => (
                <Text
                  key={j}
                  style={{
                    width: 130, padding: 6, fontSize: 12, color: colors.text,
                    fontWeight: i === 0 ? "600" : "400",
                    borderTopWidth: i === 0 ? 0 : 1, borderLeftWidth: j === 0 ? 0 : 1, borderColor: colors.border,
                  }}
                >
                  {String(celda)}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export function HerramientaNativa({ bloques }: { bloques: Bloque[] }) {
  return (
    <View style={{ gap: 10 }}>
      {bloques.map((b) =>
        b.type === "image" ? (
          <Imagen key={b.id} url={b.url} alt={b.alt} caption={b.caption} />
        ) : b.type === "table" ? (
          <Tabla key={b.id} title={b.title} headers={b.headers} rows={b.rows} />
        ) : (
          <Text key={b.id} className="text-sm text-vb-text">{b.content}</Text>
        ),
      )}
    </View>
  );
}
