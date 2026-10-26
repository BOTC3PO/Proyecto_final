/**
 * Round-trip de los bloques nuevos: serializar y deserializar un
 * BlockDocument con bloques multimedia (audio, video, PDF, link,
 * formula) debe preservar la información intacta. Cubre el camino
 * "editar → guardar → reabrir" que pide el WO-12.
 */
import { describe, expect, it } from "vitest"
import {
  serializeBlockDocument,
  deserializeBlockDocument,
  createEmptyBlockDocument,
} from "../utils"
import type { AudioBlock, VideoBlock, PdfBlock, LinkBlock, FormulaBlock, BlockDocument } from "../types"

describe("BlockDocument round-trip con bloques multimedia", () => {
  it("preserva un AudioBlock con todos sus campos", () => {
    const doc: BlockDocument = {
      version: 1,
      blocks: [
        {
          id: "a-1",
          type: "audio",
          url: "/api/media/abc.mp3",
          alt: "Audio de muestra",
          caption: "Pie de audio",
          mimeType: "audio/mpeg",
        } satisfies AudioBlock,
      ],
    }
    const serialized = serializeBlockDocument(doc)
    const deserialized = deserializeBlockDocument(serialized)
    expect(deserialized).toEqual(doc)
  })

  it("preserva un VideoBlock file con provider", () => {
    const doc: BlockDocument = {
      version: 1,
      blocks: [
        {
          id: "v-1",
          type: "video",
          url: "/api/media/abc.mp4",
          alt: "Video de muestra",
          caption: "Demo",
          provider: "file",
        } satisfies VideoBlock,
      ],
    }
    const deserialized = deserializeBlockDocument(serializeBlockDocument(doc))
    expect(deserialized).toEqual(doc)
  })

  it("preserva un VideoBlock youtube", () => {
    const doc: BlockDocument = {
      version: 1,
      blocks: [
        {
          id: "v-2",
          type: "video",
          url: "https://www.youtube.com/watch?v=abc123",
          alt: "yt",
          provider: "youtube",
        } satisfies VideoBlock,
      ],
    }
    const deserialized = deserializeBlockDocument(serializeBlockDocument(doc))
    expect(deserialized).toEqual(doc)
  })

  it("preserva un PdfBlock con título y caption", () => {
    const doc: BlockDocument = {
      version: 1,
      blocks: [
        {
          id: "p-1",
          type: "pdf",
          url: "/api/media/libro.pdf",
          title: "Capítulo 3",
          caption: "Apuntes de la clase",
        } satisfies PdfBlock,
      ],
    }
    const deserialized = deserializeBlockDocument(serializeBlockDocument(doc))
    expect(deserialized).toEqual(doc)
  })

  it("preserva un LinkBlock con descripción", () => {
    const doc: BlockDocument = {
      version: 1,
      blocks: [
        {
          id: "l-1",
          type: "link",
          url: "https://wikipedia.org",
          title: "Wikipedia",
          description: "Enciclopedia libre",
        } satisfies LinkBlock,
      ],
    }
    const deserialized = deserializeBlockDocument(serializeBlockDocument(doc))
    expect(deserialized).toEqual(doc)
  })

  it("preserva un FormulaBlock con título y displayMode", () => {
    const doc: BlockDocument = {
      version: 1,
      blocks: [
        {
          id: "f-1",
          type: "formula",
          content: "\\sum_{i=1}^{n} x_i",
          displayMode: true,
          title: "Sumatoria",
          alt: "Sumatoria de x_i",
        } satisfies FormulaBlock,
      ],
    }
    const deserialized = deserializeBlockDocument(serializeBlockDocument(doc))
    expect(deserialized).toEqual(doc)
  })

  it("preserva una mezcla de todos los tipos nuevos en un solo documento", () => {
    const doc: BlockDocument = {
      version: 1,
      blocks: [
        { id: "a-1", type: "audio", url: "/api/media/a.mp3", alt: "audio" } satisfies AudioBlock,
        { id: "v-1", type: "video", url: "/api/media/v.mp4", alt: "video", provider: "file" } satisfies VideoBlock,
        { id: "p-1", type: "pdf", url: "/api/media/p.pdf", title: "PDF" } satisfies PdfBlock,
        { id: "l-1", type: "link", url: "https://x.com", title: "X" } satisfies LinkBlock,
        { id: "f-1", type: "formula", content: "E=mc^2", displayMode: true, alt: "E=mc²" } satisfies FormulaBlock,
      ],
    }
    const deserialized = deserializeBlockDocument(serializeBlockDocument(doc))
    expect(deserialized).toEqual(doc)
  })

  it("devuelve un documento vacío cuando el JSON es inválido", () => {
    const deserialized = deserializeBlockDocument("esto no es json")
    expect(deserialized).toEqual(createEmptyBlockDocument())
  })

  it("devuelve un documento vacío cuando el JSON no tiene la shape esperada", () => {
    const deserialized = deserializeBlockDocument(JSON.stringify({ foo: "bar" }))
    expect(deserialized).toEqual(createEmptyBlockDocument())
  })
})
