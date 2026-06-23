/**
 * Tests básicos de los nuevos renderers de bloques multimedia
 * (audio, video, PDF, link, fórmula). Cubren los caminos críticos:
 * placeholder cuando el bloque está vacío, render básico del
 * adjunto, link externo con `target=_blank` y `rel=noopener`, y
 * detección de provider (YouTube/Vimeo) del video.
 */
import { describe, expect, it } from "vitest"
import { render } from "@testing-library/react"
import { AudioBlockRenderer } from "../AudioBlockRenderer"
import { VideoBlockRenderer } from "../VideoBlockRenderer"
import { PdfBlockRenderer } from "../PdfBlockRenderer"
import { LinkBlockRenderer } from "../LinkBlockRenderer"
import { FormulaBlockRenderer } from "../FormulaBlockRenderer"

describe("AudioBlockRenderer", () => {
  it("muestra placeholder cuando el bloque no tiene URL", () => {
    const { container } = render(<AudioBlockRenderer block={{ id: "1", type: "audio", url: "", alt: "" }} />)
    expect(container.textContent).toContain("Sin audio")
  })

  it("renderiza un <audio> con el src correcto y aria-label del alt", () => {
    const { container } = render(
      <AudioBlockRenderer block={{ id: "1", type: "audio", url: "/api/media/abc.mp3", alt: "Audio de muestra" }} />,
    )
    const audio = container.querySelector("audio")
    expect(audio).toBeTruthy()
    expect(audio?.getAttribute("aria-label")).toBe("Audio de muestra")
    const source = audio?.querySelector("source")
    expect(source?.getAttribute("src")).toBe("/api/media/abc.mp3")
  })

  it("muestra el caption si está presente", () => {
    const { container } = render(
      <AudioBlockRenderer
        block={{ id: "1", type: "audio", url: "/api/media/abc.mp3", alt: "alt", caption: "Pie de audio" }}
      />,
    )
    expect(container.textContent).toContain("Pie de audio")
  })
})

describe("VideoBlockRenderer", () => {
  it("muestra placeholder cuando el bloque no tiene URL", () => {
    const { container } = render(
      <VideoBlockRenderer block={{ id: "1", type: "video", url: "", alt: "", provider: "file" }} />,
    )
    expect(container.textContent).toContain("Sin video")
  })

  it("renderiza un <video> nativo cuando provider=file", () => {
    const { container } = render(
      <VideoBlockRenderer
        block={{ id: "1", type: "video", url: "/api/media/abc.mp4", alt: "video", provider: "file" }}
      />,
    )
    const video = container.querySelector("video")
    expect(video).toBeTruthy()
    const source = video?.querySelector("source")
    expect(source?.getAttribute("src")).toBe("/api/media/abc.mp4")
  })

  it("renderiza un iframe embed de YouTube cuando provider=youtube", () => {
    const { container } = render(
      <VideoBlockRenderer
        block={{
          id: "1",
          type: "video",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          alt: "yt",
          provider: "youtube",
        }}
      />,
    )
    const iframe = container.querySelector("iframe")
    expect(iframe).toBeTruthy()
    expect(iframe?.getAttribute("src")).toContain("youtube.com/embed/dQw4w9WgXcQ")
  })

  it("renderiza un iframe embed de Vimeo cuando provider=vimeo", () => {
    const { container } = render(
      <VideoBlockRenderer
        block={{
          id: "1",
          type: "video",
          url: "https://vimeo.com/123456789",
          alt: "vimeo",
          provider: "vimeo",
        }}
      />,
    )
    const iframe = container.querySelector("iframe")
    expect(iframe).toBeTruthy()
    expect(iframe?.getAttribute("src")).toContain("player.vimeo.com/video/123456789")
  })
})

describe("PdfBlockRenderer", () => {
  it("muestra placeholder cuando el bloque no tiene URL", () => {
    const { container } = render(
      <PdfBlockRenderer block={{ id: "1", type: "pdf", url: "", title: "doc" }} />,
    )
    expect(container.textContent).toContain("Sin PDF")
  })

  it("renderiza un iframe y un link de descarga con target=_blank", () => {
    const { container } = render(
      <PdfBlockRenderer
        block={{ id: "1", type: "pdf", url: "/api/media/abc.pdf", title: "Capítulo 3" }}
      />,
    )
    const iframe = container.querySelector("iframe")
    expect(iframe).toBeTruthy()
    expect(iframe?.getAttribute("src")).toBe("/api/media/abc.pdf")
    const link = container.querySelector("a[href='/api/media/abc.pdf']")
    expect(link).toBeTruthy()
    expect(link?.getAttribute("target")).toBe("_blank")
    expect(link?.getAttribute("rel")).toContain("noopener")
  })
})

describe("LinkBlockRenderer", () => {
  it("muestra placeholder cuando el bloque no tiene URL o título", () => {
    const { container } = render(
      <LinkBlockRenderer block={{ id: "1", type: "link", url: "", title: "" }} />,
    )
    expect(container.textContent).toContain("Enlace incompleto")
  })

  it("renderiza un <a> con target=_blank y rel=noopener, mostrando título y URL", () => {
    const { container } = render(
      <LinkBlockRenderer
        block={{
          id: "1",
          type: "link",
          url: "https://ejemplo.com",
          title: "Sitio de ejemplo",
          description: "Una descripción",
        }}
      />,
    )
    const link = container.querySelector("a")
    expect(link).toBeTruthy()
    expect(link?.getAttribute("href")).toBe("https://ejemplo.com")
    expect(link?.getAttribute("target")).toBe("_blank")
    expect(link?.getAttribute("rel")).toContain("noopener")
    expect(link?.textContent).toContain("Sitio de ejemplo")
    expect(link?.textContent).toContain("Una descripción")
    expect(link?.textContent).toContain("https://ejemplo.com")
  })
})

describe("FormulaBlockRenderer", () => {
  it("renderiza la fórmula con KaTeX en un figure con role=img y aria-label del alt", () => {
    const { container } = render(
      <FormulaBlockRenderer
        block={{ id: "1", type: "formula", content: "a^2 + b^2 = c^2", displayMode: true, alt: "Pitágoras" }}
      />,
    )
    const figure = container.querySelector("figure")
    expect(figure).toBeTruthy()
    // KaTeX renderiza un <span class="katex"> cuando displayMode=false,
    // o un <div class="katex-display"> cuando displayMode=true.
    const katex = container.querySelector(".katex") ?? container.querySelector(".katex-display")
    expect(katex).toBeTruthy()
    const ariaFigure = container.querySelector('[role="img"]')
    expect(ariaFigure?.getAttribute("aria-label")).toBe("Pitágoras")
  })

  it("muestra el título del bloque si está presente", () => {
    const { container } = render(
      <FormulaBlockRenderer
        block={{
          id: "1",
          type: "formula",
          content: "E = mc^2",
          displayMode: true,
          title: "Energía",
          alt: "E=mc²",
        }}
      />,
    )
    expect(container.textContent).toContain("Energía")
  })
})
