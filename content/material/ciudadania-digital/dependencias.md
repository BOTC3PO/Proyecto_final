# Ciudadanía Digital — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Primera carpeta de Ciudadanía Digital, creada en esta sesión
(2026-08-05): `CD1`/`CD2` de `troncos.md` están tageados
explícitamente `(Ciudadanía Digital)`, mismo criterio ya aplicado a
`filosofia/` cuando apareció por primera vez — confirmado con Javier
antes de crear la carpeta (`AskUserQuestion`, 2026-08-05).

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su
fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `verificacion-de-una-noticia/` | `../lengua/detectar-falacias/` | Nodo `CD1` de `troncos.md` (`P13 → CD1`). Verificar una noticia reusa directo el vocabulario de falacias/argumentos ya visto en Lengua (fuente confiable = argumento de autoridad pertinente, viralidad ≠ verdad = apelación a la popularidad) aplicado ahora a un caso concreto: una noticia real. Nota: `troncos.md` también anota `IN11 → CD1P` (Seguridad informática) como referencia cruzada en otra sección del mapa — la dependencia primaria elegida acá es la de Lengua (`P13 → CD1`), que es la que define el nodo en su tronco de origen. |
| `publicidad-enganosa/` | `../lengua/detectar-falacias/` | Nodo `CD2` de `troncos.md` (`P13 → CD2`), hermano de `CD1` (no depende de él). Marcar "lo que no dice nada" en publicidad es la aplicación práctica directa de reconocer falacias y vacíos argumentativos ya vistos en `detectar-falacias/`. |
| `contrasenas-y-autenticacion/` | `ciudadania-digital-privacidad-huella-digital/` | Tema propuesto en `../_plan-faltantes/academicas.md` (sin ID en `troncos.md`). Enfoque defensivo (claves únicas y largas, gestores, 2FA). Decisión de Claude, no pedida: dependencia deducida. |
| `phishing-y-estafas-en-linea/` | `contrasenas-y-autenticacion/` | Tema propuesto en `../_plan-faltantes/academicas.md` (sin ID en `troncos.md`). Ingeniería social y estafas frecuentes en Argentina. Enlaza con `../esi/cuidado-vinculo-grooming/` (no se duplica). Decisión de Claude, no pedida. |
| `ciberacoso-y-convivencia-en-redes/` | `ciudadania-digital-privacidad-huella-digital/` | Tema propuesto en `../_plan-faltantes/academicas.md` (sin ID en `troncos.md`). SENSIBLE: sin métodos de agresión; foco en ayuda y marco legal (Leyes 26.892, 26.904, 27.590, 27.736). Cruza con `../salud/bullying-y-acoso-escolar/` y `../esi/cuidado-vinculo-grooming/`. Línea 102: verificar vigencia. |
| `derechos-digitales-y-proteccion-de-datos/` | `ciudadania-digital-privacidad-huella-digital/` | Tema propuesto en `../_plan-faltantes/academicas.md` (sin ID en `troncos.md`). Ley 25.326, hábeas data, AAIP, consentimiento y otros derechos digitales. Información general, no asesoramiento legal. Decisión de Claude, no pedida. |
| `algoritmos-burbujas-y-economia-de-la-atencion/` | `desinformacion-en-red/` | Tema propuesto en `../_plan-faltantes/academicas.md` (sin ID en `troncos.md`). Cruza con `../salud/consumos-problematicos/`. Decisión de Claude, no pedida. |
| `participacion-ciudadana-en-linea/` | `confiabilidad-y-verificacion-de-una-fuente/` | Tema propuesto en `../_plan-faltantes/academicas.md` (sin ID en `troncos.md`). Derecho de petición, Ley 27.275 y límites de la participación digital. Enlaza con `../civica/proyecto-ciudadano-participativo/`. Decisión de Claude, no pedida. |
| `ciudadania-digital-privacidad-huella-digital/` | — (sin prerrequisito declarado) | Fila reconstruida el 2026-10-19: la carpeta existía sin fila en esta tabla. Dependencia tomada del encabezado de su `teoria.md` (no declara una carpeta; se asume raíz de la materia). |
| `confiabilidad-y-verificacion-de-una-fuente/` | — (sin prerrequisito declarado) | Fila reconstruida el 2026-10-19: la carpeta existía sin fila en esta tabla. Dependencia tomada del encabezado de su `teoria.md` (no declara una carpeta; se asume raíz de la materia). |
| `desinformacion-en-red/` | — (sin prerrequisito declarado) | Fila reconstruida el 2026-10-19: la carpeta existía sin fila en esta tabla. Dependencia tomada del encabezado de su `teoria.md` (no declara una carpeta; se asume raíz de la materia). |
| `detectar-desinformacion-sesgo-deepfakes/` | — (sin prerrequisito declarado) | Fila reconstruida el 2026-10-19: la carpeta existía sin fila en esta tabla. Dependencia tomada del encabezado de su `teoria.md` (no declara una carpeta; se asume raíz de la materia). |
| `fuente-primaria-vs-secundaria/` | — (sin prerrequisito declarado) | Fila reconstruida el 2026-10-19: la carpeta existía sin fila en esta tabla. Dependencia tomada del encabezado de su `teoria.md` (no declara una carpeta; se asume raíz de la materia). |
