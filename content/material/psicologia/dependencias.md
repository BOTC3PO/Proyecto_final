# Psicología — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Fuente: el Tronco 15 — Psicología en `../../troncos.md` (diagrama mermaid, flechas `A --> B`).

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su
fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `psicologia-modernidad-y-el-yo/` | (ninguna — nodo raíz; cruza con Filosofía: Ser, Existencia, existencialismo) | `PS1`. Raíz del tronco; sus únicas flechas entrantes vienen de Filosofía (`../filosofia/`). |
| `autoconocimiento-como-busqueda-humana/` | `psicologia-modernidad-y-el-yo/` | `PS1 --> PS2`: primero el yo moderno, luego cómo se lo conoce. |
| `dependencia-del-otro-cultura-como-herencia/` | `autoconocimiento-como-busqueda-humana/` | `PS2 --> PS3`. |
| `memoria-y-olvido-represion-inconsciente/` | `dependencia-del-otro-cultura-como-herencia/` | `PS3 --> PS4`. |
| `lenguaje-pensamiento-y-creatividad/` | `memoria-y-olvido-represion-inconsciente/` | `PS4 --> PS5`. |
| `edades-del-ser-humano-ninez-pubertad-identidad/` | `lenguaje-pensamiento-y-creatividad/`, `../esi/anatomia-y-pubertad/` | `PS5 --> PS6a` (Niñez → Pubertad → Cuerpo e identidad); `ES2 (ESI) --> PS6b`. |
| `psicologia-cognitiva-percepcion-memoria-atencion/` | `dependencia-del-otro-cultura-como-herencia/` | `PS3 --> PS7a`; luego Percepción → Atención → Memoria → Aprendizaje (`PS7a`-`PS7d`) dentro del mismo módulo. |
| `sesgos-cognitivos-heuristicas-error-sistematico/` | `psicologia-cognitiva-percepcion-memoria-atencion/` | `PS7d --> PS8`. |
| `corrientes-psicologicas-psicoanalisis-conductismo-humanismo-cognitivismo/` | `memoria-y-olvido-represion-inconsciente/`, `psicologia-cognitiva-percepcion-memoria-atencion/` | `PS4 --> PS10a/b/c/d` y `PS7d --> PS10c` (cognitivismo). |
| `salud-mental-ansiedad-depresion-pedir-ayuda/` | `memoria-y-olvido-represion-inconsciente/` | `PS4 --> PS9a/PS9b --> PS9c`. |
