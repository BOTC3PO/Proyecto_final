# Comunicación — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Fuente: el Tronco 16.a — Comunicación Social en `../../troncos.md` (diagrama mermaid, flechas `A --> B`).

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su
fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `teoria-de-la-comunicacion-emisor-receptor-canal-ruido/` | `../lengua/exposicion-oral/` | `COM1P --> CS1a..CS1d --> CS1`: emisor, receptor, canal y ruido se sintetizan en `CS1`. |
| `generos-periodisticos/` | `../lengua/produccion-escrita-compleja/` | `P14P --> CS2`. |
| `etica-y-responsabilidad-de-los-medios/` | `generos-periodisticos/` | `CS2 --> CS3`; además `AMI3P` (Alfabetización Mediática, sin carpeta propia). |
| `publicidad-y-persuasion/` | `etica-y-responsabilidad-de-los-medios/` | `CS3 --> CS4`. |
| `corrientes-de-la-comunicacion/` | `teoria-de-la-comunicacion-emisor-receptor-canal-ruido/` | `CS1 --> CS5a/b/c` (funcionalismo, teoría crítica, estudios culturales). |
