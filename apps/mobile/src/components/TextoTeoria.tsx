/**
 * Teoría con formato, dibujada de forma nativa: títulos, negritas, listas, tablas, citas, código y
 * fórmulas (pasadas a símbolos legibles: «V = I · R», «x²», «√2»). Ver `src/lib/teoria.ts`.
 */
import { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { bloquesTeoria, type Tramo } from "../lib/teoria";
import { colors } from "../theme/tokens";

const MONO = { fontFamily: "monospace" } as const;

function Linea({ tramos, estilo }: { tramos: Tramo[]; estilo?: object }) {
  return (
    <Text style={[{ fontSize: 14, lineHeight: 21, color: colors.text }, estilo]}>
      {tramos.map((t, i) => (
        <Text
          key={i}
          style={{
            fontWeight: t.negrita ? "700" : undefined,
            fontStyle: t.cursiva || t.formula ? "italic" : undefined,
            ...(t.codigo ? { ...MONO, fontSize: 13, backgroundColor: colors.bg } : null),
          }}
        >
          {t.texto}
        </Text>
      ))}
    </Text>
  );
}

const TAM_TITULO = [0, 20, 18, 16, 15, 14, 14];

export function TextoTeoria({ texto }: { texto: string }) {
  const bloques = useMemo(() => bloquesTeoria(texto), [texto]);
  return (
    <View style={{ gap: 10 }}>
      {bloques.map((b, i) => {
        switch (b.tipo) {
          case "titulo":
            return <Linea key={i} tramos={b.tramos} estilo={{ fontSize: TAM_TITULO[b.nivel], lineHeight: TAM_TITULO[b.nivel] * 1.3, fontWeight: "700", marginTop: i ? 6 : 0 }} />;
          case "parrafo":
            return <Linea key={i} tramos={b.tramos} />;
          case "lista":
            return (
              <View key={i} style={{ gap: 4 }}>
                {b.items.map((it, j) => (
                  <View key={j} style={{ flexDirection: "row", gap: 6 }}>
                    <Text style={{ fontSize: 14, lineHeight: 21, color: colors.muted, minWidth: 16 }}>{b.ordenada ? `${j + 1}.` : "•"}</Text>
                    <View style={{ flex: 1 }}><Linea tramos={it} /></View>
                  </View>
                ))}
              </View>
            );
          case "cita":
            return (
              <View key={i} style={{ borderLeftWidth: 3, borderLeftColor: colors.border, paddingLeft: 10 }}>
                <Linea tramos={b.tramos} estilo={{ color: colors.muted }} />
              </View>
            );
          case "tabla":
            return (
              <ScrollView key={i} horizontal showsHorizontalScrollIndicator>
                <View style={{ borderWidth: 1, borderColor: colors.border, borderRadius: 6 }}>
                  {[b.encabezados, ...b.filas].map((fila, f) => (
                    <View key={f} style={{ flexDirection: "row", backgroundColor: f === 0 ? colors.bg : undefined }}>
                      {fila.map((celda, c) => (
                        <View key={c} style={{ width: 140, padding: 6, borderTopWidth: f === 0 ? 0 : 1, borderLeftWidth: c === 0 ? 0 : 1, borderColor: colors.border }}>
                          <Linea tramos={celda} estilo={{ fontSize: 12, lineHeight: 17, fontWeight: f === 0 ? "600" : undefined }} />
                        </View>
                      ))}
                    </View>
                  ))}
                </View>
              </ScrollView>
            );
          case "codigo":
            return (
              <ScrollView key={i} horizontal style={{ backgroundColor: colors.bg, borderRadius: 8, borderWidth: 1, borderColor: colors.border }}>
                <Text style={{ ...MONO, fontSize: 12, lineHeight: 18, color: colors.text, padding: 10 }}>{b.texto}</Text>
              </ScrollView>
            );
          case "formula":
            return <Text key={i} style={{ fontSize: 16, fontStyle: "italic", textAlign: "center", color: colors.text }}>{b.texto}</Text>;
          case "separador":
            return <View key={i} style={{ height: 1, backgroundColor: colors.border }} />;
        }
      })}
    </View>
  );
}
