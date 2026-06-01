# Roadmap — incluir `basic/QuizGenerator` en el provider (Fase 3.5)

## Estado
**Hecho (WO08).** `basic/QuizGenerator` ya NO está excluido del provider. El
banco hand-authored se habilitó como fuente del pool reusando la política de
WO05. La implementación vive en `apps/web/src/generadoresV2/basic/banco.ts`
(con tests en `basic/__tests__/banco.spec.ts`):

- **Origen de templates** — `buildQuizTemplate(questions, metadata)` arma un
  `QuizTemplate` a partir de preguntas hand-authored. La fuente del pool es el
  modelo ya existente (`QuizQuestionSet` / `QuizVersion.questions`).
- **Adapter multi→single** — `mapBancoQuestion(original, generated)` expone cada
  pregunta del banco como un `ModuleQuizQuestion` individual:
  `mc → mc`, `tf → vf`, `fill-blank (1 blank) → completar`. `match` y los
  `fill-blank` multi-blank no tienen equivalente renderizable y se descartan.
- **Política de pool (WO05)** — `runBanco(template, { seed, composition })`
  genera todo el banco, adapta cada pregunta y delega la selección
  "todas | K (fijo/azar/elige_alumno)" en `domain/quiz/composition`.
- **Provider/catálogo** — `registerBancoTemplate` + `getDescriptoresBasic`
  exponen cada banco registrado como un `GeneratorDescriptor` (variante
  single-exercise del adapter). Sumado a `provider.ts` y `catalog.ts`.
- **Editor** — `components/modulos/BancoPreguntasEditor.tsx` reusa la lista
  accesible de WO06 (`AccessibleList`): una fila = una pregunta.

El detalle histórico de por qué estaba diferido y el plan original quedan abajo.

## Estado original (diferido)
No era un agregado mecánico al provider; requería trabajo de diseño de datos +
un adapter. Documentado acá para retomarlo.

## Por qué no entró en Fase 3
El provider de VBLang (`apps/web/src/vblang/provider.ts`) resuelve
`generador: <id>` delegando en descriptores que implementan
`GeneratorDescriptor` (paramétricos, deterministas por seed):

```ts
type GeneratorFn = (dificultad?, prng?, subtipo?, enunciadoTemplate?) => Ejercicio;
```

`basic/QuizGenerator` (`apps/web/src/generadoresV2/basic/basicGenerador.ts`) es
otra cosa: un **banco de preguntas**.

1. **Necesita un `QuizTemplate`** en el constructor (un pool de preguntas
   hand-authored). Hoy no existe ningún `QuizTemplate` estático ni se instancia
   `QuizGenerator` en ningún punto de la app.
2. **Devuelve un `QuizInstance` multi-pregunta** (`generate({ seed })`), con
   tipos `mc | tf | match | fill-blank`. El provider espera un
   `GeneradorAsistidoEjercicio` de **un solo ejercicio**. `match` y `fill-blank`
   no tienen equivalente en ese shape.

Registrarlo "para que aparezca en el picker" sin resolver lo anterior haría que,
al elegirlo, la generación falle (`pool vacío`) o no produzca nada: peor UX que
no mostrarlo.

## Qué haría falta para implementarlo
1. **Origen de templates.** Decidir de dónde salen los bancos `basic/`:
   - desde la DB (modelo Prisma de banco de preguntas, alimentado por
     `BancoCuestionarios`), o
   - desde archivos estáticos versionados en el repo.
2. **Registro.** Un `getDescriptoresBasic(prng)` que, por cada template
   disponible, exponga un `GeneratorDescriptor` cuyo `generate` envuelva a
   `QuizGenerator`.
3. **Adapter multi→single.** El provider entrega un ejercicio por llamada;
   habría que elegir una pregunta del `QuizInstance` (por `seed`/índice) y
   mapear su tipo:
   - `mc` → `opciones` + `indiceCorrecto`
   - `tf` → mc de 2 opciones (Verdadero/Falso)
   - `fill-blank` → `completar` (sólo si hay un único blank)
   - `match` → **sin equivalente**: o se omite, o se extiende el shape del
     reproductor.
4. **Catálogo.** `getStaticCatalog()` / `listGeneradores()` ya tienen el label
   `basic/quiz_generator`; sumar el descriptor cierra el círculo.

## Riesgo
Tocar el shape `GeneradorAsistidoEjercicio` impacta al paquete `@vb/vblang` y a
todos sus consumidores. Hacerlo bien (con tests) es un sprint propio, no parte de
la integración de Fase 3.
