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
| `medios-masivos-y-medios-digitales/` | `corrientes-de-la-comunicacion/` | Tema propuesto en `../_plan-faltantes/academicas.md` (sin ID en `troncos.md`). Las corrientes dan el marco para analizar el rol de los medios. Decisión de Claude, no pedida. |
| `comunicacion-verbal-y-no-verbal/` | `teoria-de-la-comunicacion-emisor-receptor-canal-ruido/` | Tema propuesto en el plan de faltantes. Profundiza el canal y el código del modelo. Cruza con `../lengua/circuito-de-la-comunicacion/`. Decisión de Claude, no pedida. |
| `analisis-del-discurso-y-encuadre-mediatico/` | `generos-periodisticos/` | Tema propuesto en el plan de faltantes. Se analizan los géneros ya vistos. Cruza con `../lengua/generos-discursivos/`. Decisión de Claude, no pedida. |
| `comunicacion-visual-e-imagen/` | `publicidad-y-persuasion/` | Tema propuesto en el plan de faltantes. Retoma recursos de la publicidad; cruza con `../diseño/jerarquia-visual-e-informacion/` y `../diseño/accesibilidad-wcag-contraste-lectores-de-pantalla/`. Decisión de Claude, no pedida. |
| `comunicacion-institucional-y-de-crisis/` | `etica-y-responsabilidad-de-los-medios/` | Tema propuesto en el plan de faltantes. Veracidad y responsabilidad son la base ética de la comunicación de crisis. Decisión de Claude, no pedida. |
| `comunicacion-oral-y-hablar-en-publico/` | `teoria-de-la-comunicacion-emisor-receptor-canal-ruido/` | Tema propuesto en el plan de faltantes. Cruza con `../lengua/exposicion-oral/` y `comunicacion-verbal-y-no-verbal/`. Decisión de Claude, no pedida. |
