# Gobernanza — documento de diseño (PLAN-C §7, ítem 32)

**Fecha**: 2026-07-03 · **Tipo**: documento de diseño, sin código. Fija las
definiciones de producto que hoy faltan sobre la base técnica ya existente
(`Proposal`/`Vote`, `api/src/routes/governance.ts`, `api/src/lib/governance.ts`,
`api/src/lib/authorization.ts`).

## 1. Ámbitos: ¿aula, escuela, o ambos?

**Decisión**: ambos, vía el mismo mecanismo genérico ya existente
(`Proposal.targetType` + `targetId`), sin un modelo nuevo:

- `targetType: "CLASE"` + `targetId: <aulaId>` → propuesta de aula (ej. "cambiar el
  modo de aula", "aprobar un prompt para este curso").
- `targetType: "GOVERNANCE" | "POLICY" | "SYSTEM_CONFIG"` → propuesta de escuela/
  plataforma (`evaluateGovernanceLevel` ya las clasifica como nivel `GOVERNANCE`
  automáticamente).
- Cualquier otro `targetType` (ej. `"MODULO"`, `"PROMPT"`) con un `targetId` que
  resuelva a una escuela → propuesta de escuela.

**Gap actual**: `validateGovernancePermissions` ya busca membresía por escuela
(`Membresia`) y por aula (`ClaseMiembro`) para decidir quién puede votar un
target no-GOVERNANCE, así que el scoping de datos ya funciona. Lo que falta es
que el propio target declare explícitamente su escuela cuando no es una clase
(hoy sólo se infiere si el lookup de aula funciona) — no bloquea el uso actual,
pero conviene resolverlo antes de exponer una UI de "crear propuesta" genérica.

## 2. Quién propone y quién vota

Ya implementado en `authorization.ts`, documentado acá para que quede como
referencia de producto (no sólo de código):

| Acción | Quién puede (código actual) |
|---|---|
| Proponer (`canProposeGovernanceChange`) | Staff: ADMIN, DIRECTIVO, TEACHER. **Alumnos y padres NO proponen hoy.** |
| Votar nivel CONTENT (`canVoteContent`) | ADMIN, DIRECTIVO, TEACHER, STUDENT (alumno). **PARENT no vota ni siquiera en CONTENT.** |
| Votar nivel GOVERNANCE (`canVoteGovernance`) | Sólo staff: ADMIN, DIRECTIVO, TEACHER. |
| Aplicar el cambio si se aprueba | Sólo ADMIN, y sólo para los `proposalType` de la lista blanca (ver §3). |

**Decisión de producto para este plan**: mantener esta matriz tal cual. Es
coherente con la matriz de PLAN-C §1 (docs/roles.md) — el PADRE no tiene
capacidades de gestión de escuela, así que no vota; el ALUMNO sí participa en
decisiones de CONTENIDO de su aula/escuela porque lo vive directamente. No se
propone ampliar esto en este plan; queda como backlog explícito si el negocio
lo pide (ver §5).

**Peso del voto**: 1 usuario = 1 voto, sin ponderación (no hay campo de peso en
`Vote`). No se propone cambiar esto — ponderar votos (ej. por antigüedad, por
rol) es una complejidad de producto que no está pedida por ningún ítem del
plan; si se necesita en el futuro, es un campo aditivo en `Vote` (`peso: Float
@default(1)`), no un rediseño.

**Quórum y mayorías**: ya configurable por `ENV.GOV_GOVERNANCE_RULE`
(`MAJORITY` | `SUPERMAJORITY_2_3` | `UNANIMOUS`, default supermayoría 2/3) para
nivel GOVERNANCE, y por `ENV.GOV_CONTENT_MIN_YES` + `GOV_CONTENT_YES_GT_NO`
para nivel CONTENT (`evaluateProposalOutcome`). No hay noción de quórum mínimo
de participación (cuántos votantes elegibles tienen que votar, no sólo cuántos
a favor) — **gap real**: hoy una propuesta con un solo voto "a favor" y cero
"en contra" se aprueba igual bajo `MAJORITY`. Si se quiere quórum mínimo, es un
parámetro nuevo (`GOV_MIN_QUORUM`) comparado contra la membresía elegible del
target, no implementado hoy.

## 3. Vinculante vs. consultivo

**Hoy, en código**: una propuesta `GOVERNANCE`-level aprobada sólo **ejecuta
algo automático** si su `proposalType` está en la lista blanca de
`applyApprovedGovernanceChange` (`ADD_PROMPT`, `UPDATE_PROMPT`, `REMOVE_PROMPT`,
`SET_PROMPT_STATUS`, `SYSTEM_CHANGE`, `UPDATE_CONFIG`) — y sólo si quien la creó
es ADMIN. **Todo lo demás que se aprueba queda en estado `APPROVED` sin ningún
efecto automático** — es de facto consultivo aunque no esté etiquetado como tal.

**Decisión de producto**: formalizar esta distinción en vez de dejarla implícita
en una lista blanca de strings:

- **Vinculante** (ejecuta un cambio real al aprobarse): los `proposalType` de la
  lista blanca actual, más cualquiera que se agregue a futuro con su propio
  handler en `applyApprovedGovernanceChange`.
- **Consultivo** (el resultado es información, no acción): todo lo demás —
  igual que las encuestas de PLAN-H §3. Se recomienda que el front lo etiquete
  explícitamente ("Esta propuesta es consultiva: el resultado no aplica
  cambios automáticos") en vez de dejar que el usuario asuma que "aprobado"
  significa "ejecutado".

## 4. Ciclo de vida de una propuesta

**Hoy, en código**: `OPEN` (al crear, `POST /api/proposals`) → `APPROVED` |
`REJECTED` (al cerrar, `POST /api/proposals/:id/close`, evalúa
`evaluateProposalOutcome`) → si vinculante y `APPROVED`, se aplica en el mismo
`close()` (no hay un paso "aplicada" separado ni reintentable).

**No existe estado "borrador"**: una propuesta nace `OPEN` (votable
inmediatamente). Si se quiere permitir editar antes de abrir a votación, hace
falta un estado `DRAFT` previo — no pedido explícitamente por ningún ítem, así
que no se agrega en este plan; queda anotado.

**No existe moderación de la propuesta en sí** (a diferencia de
publicaciones/mensajes, que sí tienen `ModeracionEvento`): cualquier actor con
permiso de proponer puede publicar cualquier `rationale`/`payload` sin revisión
previa. Gap conocido, bajo riesgo mientras "proponer" siga limitado a staff.

**Ciclo recomendado (sin cambiar código todavía)**:
`OPEN → (votación) → APPROVED|REJECTED → (si vinculante y APPROVED) APLICADA`.
El estado `APLICADA` no existe hoy como valor distinto de `APPROVED` — hoy se
infiere por la presencia de un efecto (ej. un `Prompt` nuevo). Si en el futuro
se quiere que el estado sea explícito, es un campo aditivo, no un rediseño del
flujo.

## 5. Gap analysis → backlog de implementación

Ninguno de estos gaps bloquea el uso actual de gobernanza (aula/escuela pueden
proponer y votar hoy mismo con lo que existe). Quedan priorizados por si se
retoman:

1. **Quórum mínimo de participación** (no sólo mayoría de los votos emitidos) —
   el gap más importante detectado; sin esto, una propuesta con 1 voto se
   aprueba igual que una con 100.
2. **Etiqueta explícita vinculante/consultivo** en la respuesta de la API y en
   el front, en vez de que dependa de una lista blanca interna invisible al
   usuario.
3. **Estado `DRAFT`** antes de abrir a votación, si se quiere permitir editar
   una propuesta antes de que la vean los votantes.
4. **Moderación de propuestas** (spam/contenido inapropiado en `rationale`),
   si "proponer" alguna vez se abre más allá de staff.
5. **Ampliar quién propone/vota** (alumnos proponiendo, padres votando) — sólo
   si el negocio lo pide explícitamente; hoy la matriz de permisos (§2) es
   deliberada, no un olvido.
6. **Peso de voto no uniforme** — sólo si se pide explícitamente; hoy 1
   persona = 1 voto.
