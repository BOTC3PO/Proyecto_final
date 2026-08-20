# Procedimiento para agregar un tema nuevo a `material/`

Instrucciones para cualquier agente (Claude u otro) que continúe este
trabajo. Está en `material/` (no dentro de una materia puntual) porque
aplica por igual a las materias que ya tienen carpeta acá: `matematica/`,
`economia/`, `vida-cotidiana/`, `geografia/`, `informatica/`, `quimica/`,
`fisica/`, `arte/`, `biologia/`, `civica/`, `esi/`, `ed-fisica/`,
`lengua/`, `filosofia/`, `ciudadania-digital/`, `historia/`, `derecho/`,
`antropologia/`, `investigacion/`, `oficios/` — cada una tiene su propio
`dependencias.md`, que referencia este archivo. Esta lista crece cuando
aparece un tag de materia real sin carpeta todavía (ver Paso 1) —
confirmar con el usuario antes de crear una carpeta de materia nueva.

**`oficios/` (agregado 2026-08-13)**: mismo patrón exacto que el resto —
`material/oficios/<oficio-kebab-case>/<subtema-kebab-case>/teoria.md`,
NO el formato Ruta A/B que usa `Cocina/Gastronomía` (ese quedó como caso
especial anterior a esta decisión, no se retrofitea). El "nodo MAPA" de
`dependencias.md` para un oficio es su ID `OFxx` de `troncos.md` más el
número de sub-ítem de `oficios-orientacion-vocacional-PLANIFICACION.md`
(ej. `OF20.1a` para el primer sub-tema de la sección 1 de `OF20`), ya que
esos nodos no están en el diagrama mermaid con ID propio por sub-tema.

## Regla 0: esperar el tema, no elegirlo solo

**No avances al siguiente tema de `../lista-temas-plana.md` por tu cuenta.**
Terminá el tema que te pidieron, reportá en 2-3 líneas qué quedó armado
(cantidad de preguntas, carpeta, dependencia), y **esperá** a que el
usuario diga cuál sigue — aunque el orden "obvio" según la lista plana o
el árbol de `troncos.md` parezca claro. Varias veces en esta sesión el
tema "obvio" no era el que correspondía (ver ejemplo de "Números primos"
vs. "MCD y MCM", o el pedido explícito de investigar bien antes de
"Descuentos y recargos sucesivos").

## Paso 1 — ¿A qué materia pertenece?

Mirar `../lista-temas-plana.md` / `../troncos.md`: los nodos que cuelgan
del tronco numérico de Matemática a veces están tageados con la materia
real entre paréntesis — `(Economía)`, `(Vida Cotidiana)`, etc. Sin tag,
por default es la materia del tronco (Matemática). **No asumir**: un tag
distinto significa una carpeta de materia distinta
(`material/<materia>/`), no una subcarpeta de Matemática. Ejemplo real:
"Descuentos y recargos sucesivos (Vida Cotidiana)" fue una materia nueva
(`vida-cotidiana/`), no economía.

## Paso 2 — ¿Se separa en más de un módulo?

Un nodo del MAPA se separa en varias carpetas de tema cuando:

- El título tiene "X y Y" y las dos partes son **habilidades separables**
  que se enseñan como lecciones distintas en la escuela real (conteo y
  valor posicional, suma y resta, multiplicación y división, razón y
  proporción, regla de tres directa e inversa, IVA y precio final...).
- Dentro de un tema "grande" hay sub-reglas que se enseñan una por vez
  (las 8 reglas de divisibilidad del set clásico — pero el 7 quedó como
  módulo opcional sin cuestionario, sin dependencias, por pedido
  explícito).
- Una cosa es EL CÁLCULO (ya resuelto en otro módulo) y otra es EL POR QUÉ
  Y CÓMO se usa lo calculado (ejemplo: "Descuentos obligatorios" no
  repite el cálculo del 11%/3% ya hecho en `recibo-de-sueldo/argentina/`
  — explica el sistema jubilatorio y la obra social en sí).
- Un concepto es UNIVERSAL y otro es LOCAL/de una jurisdicción puntual
  (ejemplo: `recibo-de-sueldo/general/` vs. `recibo-de-sueldo/argentina/`).

**NO se separa** (queda en un solo módulo) cuando las partes son dos caras
de la misma cosa, no dos habilidades independientes: PEMDAS (jerarquía de
operaciones), números primos y factorización, irracionales y reales,
categoría y cuota del monotributo, sucesiones y series (series es lo
único nuevo, sucesiones ya se explicó antes), operaciones con enteros
(las 4 reglas de signos son una unidad chica). Ante la duda, se puede
tomar una decisión propia y anotarla explícitamente en `dependencias.md`
como "decisión de Claude, no pedida" — el usuario corrige si hace falta,
como pasó varias veces esta sesión.

### Caso especial: Tronco 18 — Idiomas Extranjeros

Los temas de Tronco 18 (fonética, vocabulario, gramática contrastiva,
conjugación, concordancia, comprensión, producción) NO se separan en
una sola carpeta genérica — **una carpeta por idioma soportado por el
sistema, excepto español** (que ya tiene su propia materia/contenido
aparte, no entra en Idiomas Extranjeros). Idiomas soportados hoy según
`apps/web/src/i18n/` (catálogos i18n reales del sistema, no inventar
otros): `en`, `de`, `fr`, `it`, `ja`, `ko`, `pt-BR`, `pt-PT`, `zh`,
`eo` — 10 carpetas por tema (excluidos `es`/`es-AR`, que son español).
Motivo: "qué cambia respecto de la L1" (gramática contrastiva,
fonética) depende necesariamente del idioma objetivo, no es un
contenido único parametrizable con `uno_de` dentro del DSL como en
otros temas. Decisión de Javier, 2026-08-07.

## Paso 3 — Crear la(s) carpeta(s)

```bash
mkdir -p material/<materia>/<tema-en-kebab-case>
```

Nombre de carpeta: minúsculas, guiones, sin acentos, descriptivo (no el
ID del MAPA). Si el tema tiene 2+ partes, una subcarpeta por parte.

## Paso 4 — Actualizar `dependencias.md` PRIMERO

Antes de escribir teoría o cuestionario, agregar la fila a la tabla de
`material/<materia>/dependencias.md`:

- **Nodo MAPA**: el ID real (`N4`, `NE1`, etc.) si existe, o una
  referencia al bullet de `lista-temas-plana.md` si es contenido nuevo
  (como los de Economía/Vida Cotidiana, que no tienen ID de nodo formal).
- **Depende de**: qué otras carpetas YA CREADAS hacen falta antes. Cruzar
  materias es válido (`economia/recibo-de-sueldo/` depende de
  `../matematica/porcentaje/`).
- **Por qué**: una frase. Marcar explícitamente cuándo la dependencia
  **no está en el MAPA** y se dedujo acá (es la mayoría de los casos:
  el MAPA sólo dice qué nodo combinado vino antes, no cómo se reparten
  las dependencias entre las mitades separadas).

## Paso 5 — `teoria.md`

Estructura fija:

```markdown
# <Materia> — <Tema> (teoria)

> Tema del MAPA: `<ID>` ... Depende de `../<otro-tema>/` (ver
> `../dependencias.md`).

## Tipo de teoría (si esto se carga al sistema)

<ver más abajo>

---

<contenido real>
```

**Tipo de teoría**: nota corta sobre qué tipo real del sistema
correspondería si esto se cargara a la app de verdad (no se construye,
sólo se anota). Tipos reales confirmados (no inventar otros):

- `TheoryItem.type` (selector real de la UI del editor de un Módulo):
  Texto, Presentación, Enlace, Libro, Documento, Video, Herramienta
  interactiva, Herramienta standalone, TuesdayJS (legacy).
- Herramienta standalone: sólo 4 ya construidas — Tabla periódica,
  Escalador de recetas, Línea de tiempo, Mapa histórico/geográfico.
- Herramienta interactiva (editor de bloques), 12 tipos de bloque: Texto,
  LaTeX, Tabla, Gráfico, Flujo, Función f(x), Formas, Imagen, Audio,
  Video, PDF, Enlace, Fórmula.

Regla práctica: **Presentación** si el archivo tiene 3+ secciones
temáticas separables (la mayoría); **Texto** si es una sola idea chica
(reglas puntuales, casos que dependen fuerte de otro módulo y no
necesitan repetir mucho contenido).

**Contenido real**: para temas de Matemática pura, alcanza con
conocimiento ya sólido. Para temas de Economía/Vida Cotidiana con
componente real-world (impuestos, tasas, esquemas vigentes): **investigar
con WebSearch antes de escribir**, citar qué se encontró, y evitar
hardcodear cifras que cambian seguido (categorías de monotributo,
porcentajes de promociones bancarias) — usar la estructura/mecánica en
esos casos, no el número puntual de hoy. Cuando algo cambió recientemente
(ej.: fin del Impuesto PAIS en enero 2026), decirlo explícito para no
enseñar información vieja como si fuera vigente.

## Paso 6 — `cuestionario.md`

Formato VBLang real (no inventado — confirmado contra
`packages/vblang/src/` de este repo). Estructura del archivo:

```markdown
# <Materia> — <Tema> (cuestionario, N preguntas VBLang)

> Tema: `<ID>`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — <título corto>

\`\`\`
metadata:
  materia: "<materia>"
  tema: "<tema_snake_case>"
  nivel: "basico|intermedio|avanzado"
  tags: ["<tag1>", "<tag2>"]

variables:
  <nombre>: <expresión>

respuesta: <expresión>
tipo: input|mc|vf|completar|ordenar
tolerancia_abs: 0   # sólo si `tipo: input` y el resultado puede no ser entero exacto

enunciado: "texto con {interpolación de variables o expresiones}"

pasos:
  - "opcional, muestra el cálculo paso a paso"

explicacion: |
  Texto que se muestra después de responder.
\`\`\`
```

**Cantidad de preguntas**: 40 es el techo/objetivo, **no un piso
obligatorio**. Para un tema angosto está bien reutilizar el mismo patrón
de enunciado parametrizado varias veces en vez de forzar variedad
artificial — pero **nunca bajar de 20**. Verificar el conteo final con:

```bash
grep -c "^### " material/<materia>/<tema>/cuestionario.md
```

### Gotchas del DSL (verificados esta sesión, no asumir nada más)

- **No existen `and`/`or`/`!`** como operadores lógicos (no están en el
  lexer). Para "A y B" combinado, usar el resto/módulo directo del número
  compuesto (ej.: en vez de `resto2==0 and resto3==0` para "divisible por
  6", usar `n - floor(n/6)*6 == 0`) o comparar expresiones booleanas con
  `==`.
- Booleanos literales son `verdadero` / `falso` (no `true`/`false`).
- `{...}` en enunciado/pasos/explicacion acepta **cualquier expresión**
  (no sólo el nombre de una variable), incluye funciones y operadores:
  `{a + b}`, `{floor(x/2)}`, `{-n}` funcionan.
- **`opciones_explicitas` (mc y ordenar) y `respuestas_validas`
  (completar) son EXPRESIONES evaluadas**, no texto interpolado — se
  pueden poner variables o expresiones directo (`- a`, `- necesaria + 3`),
  no hace falta interpolación con `{}`. Para literales de texto fijo, van
  entre comillas (`- "Sumandos"`).
- **Corrección (2026-08-04): el indexado de arrays SÍ existe.** `arr[i]`
  es sintaxis real de la gramática de expresiones (`parsePostfix()` en
  `packages/vblang/src/parser/expression.ts`), soportada en
  `variables:`, `respuesta:`, `restricciones:` e interpolación `{}` —
  confirmado con tests (`packages/vblang/tests/parser/expressions.test.ts`)
  y con el patrón real usado en plantillas oficiales
  (`enuns[idx]`, `respuestas[idx]`, `unidades[idx]` en
  `packages/vblang/src/templates/fisica-electricidad-oficiales.ts`) para
  elegir entre variantes de enunciado/respuesta/unidad con un mismo
  `idx: uno_de([0, 1, ...])`. `primero()`/`ultimo()` siguen existiendo
  como builtins de conveniencia, coexisten con `[0]`/`[largo(arr)-1]`,
  no lo sustituyen. Lo que sigue valiendo: no se puede pasar un array
  entero como si fuera una sola respuesta esperada (ni en `respuesta:`
  de un `input`, ni como item suelto de `respuestas_validas`) — hay que
  indexar/construir el valor escalar específico que hace falta.
  **Matiz de Javier**: el array que se indexa tiene que venir de un
  literal `[...]` escrito directo en el DSL (como `enuns: [enun_V,
  enun_I, enun_R]` arriba) o del sistema de datasets externo — no hay
  forma de generar un array dinámicamente dentro del DSL (no hay
  `map`/`range`/comprehension); si hace falta una lista de tamaño
  variable construida en runtime, no se puede.
- **Constantes globales precargadas** (`packages/vblang/src/evaluator/constants.ts`),
  usables por nombre en cualquier expresión sin declararlas: `pi`
  (3,14159...), `e` (2,71828...), `g` (9,80665, gravedad terrestre —
  ver más abajo por qué igual se sigue usando `10` a mano en varios
  módulos), `c` (velocidad de la luz), `h` (Planck), `k_b`
  (Boltzmann), `N_A` (Avogadro), `R` (gases), `epsilon_0`, `mu_0`. Si
  se declara una variable con el mismo nombre en `variables:`, esa
  variable pisa la constante (no está reservada).
- **Trigonometría: en grados, no en radianes.** No hay `sin`/`cos`/`tan`
  a secas — son `sin_deg(x)`, `cos_deg(x)`, `tan_deg(x)` (y las inversas
  `asin_deg`, `acos_deg`, `atan_deg`), que toman/devuelven grados
  directo (`packages/vblang/src/evaluator/builtins.ts`). Para mostrar
  "sin({angulo}°)" en `pasos:`/`explicacion:`, `sin(` es texto literal
  decorativo — sólo lo que va dentro de `{}` se evalúa, y ahí adentro
  hay que llamar `sin_deg(angulo)`, nunca `sin(angulo)`.
- **`unidad: "N"` / `unidad: "{unit}"`** es un campo de nivel superior
  (junto a `respuesta:`/`tipo:`) que anota la unidad física de una
  respuesta `input` — no es obligatorio, pero ya se usa en las
  plantillas oficiales de Física/Electricidad para mostrarla junto al
  resultado esperado.
- **`factorial`/`combinations`/`permutations`/`gamma` — SÍ se pueden usar
  directo (bug corregido 2026-08-05).** El evaluador en runtime siempre
  los resolvía (fallback a math.js, `evaluator.ts` caso `evalFunCall`),
  pero el linter estático (`validator/builtin-signatures.ts`,
  `MATHJS_SIGNATURES`) no los conocía y marcaba "función desconocida" —
  desincronizado con el runtime real. Se agregaron las 4 firmas a
  `MATHJS_SIGNATURES` (mismo patrón que ya se usó para `sin`/`cos`/`pow`/
  etc.), con test de lint (`tests/validator/infer.test.ts`) y de
  ejecución (`tests/evaluator/builtins.test.ts`) — 1141 tests del
  paquete siguen en verde. `factorial(n)` es el que hace falta para
  permutaciones/combinaciones/variaciones (`nPr = factorial(n)/
  factorial(n-k)`, `nCr = combinations(n,k)`). Nota histórica: antes de
  este fix, `permutaciones/`/`variaciones/`/`combinaciones/` de este
  mismo directorio usaban como workaround una tabla-lookup de
  factoriales por array literal indexado (`factoriales: [1, 1, 2, 6, 24,
  120, 720, 5040, 40320]`, `factoriales[n]`) — ya no hace falta, pero si
  aparece en algún cuestionario viejo es por eso, no es un error.
- **No hay test de pertenencia** (`x pertenece a array`) ni forma de
  filtrar un array según pertenencia a otro. `filtrar(array, predicado)`
  existe (evaluación lazy, variable implícita `item`, ej.
  `filtrar(lista, item > 2)`), pero no anida (cada `filtrar` pisa
  `item`) y no hay builtin `incluye`/`pertenece`. Para calcular
  cardinalidad de unión/intersección/diferencia de conjuntos, usar la
  fórmula de inclusión-exclusión sobre cardinales ya dados
  (`|A∪B| = |A| + |B| − |A∩B|`), no intentar operar los conjuntos como
  arrays.
- Otros builtins confirmados que no estaban listados: `capitalizar`,
  `mayusculas`, `minusculas`, `signo(x)`, `fraccion(p,q)` (string
  `"p/q"` simplificado), `sumar(lista)`, `promedio(lista)`,
  `mediana(lista)`, `moda(lista)`, `ordenar(lista)`,
  `ordenar_por(lista,campo)`, `unico(lista)`, `es_numero`,
  `es_positivo`, `es_entero`, `unidad(string)` (delega a math.js, no
  confundir con el campo `unidad:`), `error(msg)`. Lista completa y
  autoritativa: `BUILTIN_NAMES` en
  `packages/vblang/src/evaluator/builtins.ts`.
- `mc` con auto-distractores numéricos: `opciones: N` (sin `_explicitas`)
  genera N-1 distractores automáticos cerca de la respuesta — usarlo sólo
  cuando no importa qué valores concretos aparezcan como distractores; si
  el enunciado nombra valores concretos (\"¿cuál es mayor, a o b?\"), usar
  `opciones_explicitas: [a, b]` en cambio.
- No hay forma de mostrar un número con cero a la izquierda (los minutos
  de una hora como \"05\") — para horarios, describir en palabras (\"8
  horas y 5 minutos\") en vez de \"8:05\".
- `log(x)` es logaritmo NATURAL (ln); `log10(x)` es base 10. Para
  contenido de secundaria (\"log\" = base 10 por convención), usar
  siempre `log10()`.
- Builtins confirmados y ya usados: `random(a,b)`, `random_float(a,b)`,
  `uno_de(lista)`, `n_de(lista,n)`, `mezclar(lista)`, `redondear(x,n)`,
  `floor(x)`, `ceil(x)`, `abs(x)`, `min(...)`, `max(...)`, `sqrt(x)`,
  `raiz(x,indice)`, `mcd(a,b)`, `mcm(a,b)`, `es_primo(n)`,
  `divisores(n)`, `factorizar(n)`, `largo(lista)`, `primero(lista)`,
  `ultimo(lista)`, `concatenar(...)`, `longitud(texto_o_lista)`,
  `log10(x)`, `ln(x)`, operador `^` para potencias.
- `restricciones:` (lista de condiciones booleanas) fuerza a re-sortear
  si no se cumplen — usarlo para garantizar casos válidos (ej.: que un
  resultado dé entero exacto) en vez de intentar construirlo a mano con
  fórmulas frágiles.
- Preferir **construir el escenario desde las piezas** (sortear dígitos o
  factores por separado y armar el número/resultado a partir de ellos)
  en vez de sortear un número al azar y tratar de "leerle" una
  propiedad — así la respuesta correcta sale de la misma construcción,
  sin depender de ninguna función que el DSL no tenga.

## Paso 3.5 — Modo "crudos primero" (generación masiva en background)

Cuando hay muchos temas pendientes de golpe (ej.: cerrar un tronco
entero), en vez de hacer teoria→Gemma→revisión tema por tema de forma
síncrona, se puede separar en dos fases:

1. **Fase de crudos**: para cada tema pendiente, tirar 5 llamadas a
   LM Studio (Gemma, `192.168.0.80:1234`, modelo
   `google/gemma-4-26b-a4b-qat`, `reasoning_effort: "none"`) con el
   mismo `gemma_sys.txt` de siempre (reglas del DSL) y un prompt corto
   por lote describiendo un sub-aspecto del tema. **No se escribe
   `teoria.md` ni `cuestionario.md` final en esta fase** — sólo se
   guardan los 5 outputs crudos de Gemma, tal cual salen, sin revisar.
   Guardar en `material/_borradores-gemma/<materia>/<tema-kebab>/b1_out.md`
   … `b5_out.md` (carpeta persistente en el repo, NO en `/tmp` — sobrevive
   entre sesiones). Concurrencia recomendada: **3 llamadas simultáneas**
   (5 concurrentes causó timeouts en pruebas; 3 fue estable). Si son
   muchos temas, correr todo el lote en background (`nohup`/proceso
   detached) y loguear progreso en `material/_borradores-gemma/status.log`.
2. **Fase de revisión** (Paso 5/6 de siempre, hecha después, sesión
   distinta o no): para cada tema con crudos ya generados, escribir
   `teoria.md` a mano, leer los 5 `bN_out.md` de
   `material/_borradores-gemma/<materia>/<tema>/`, corregir contra los
   *Gotchas del DSL* de más abajo (el bug más común de lejos:
   preguntas de blank `___` mal etiquetadas `tipo: vf` en vez de
   `tipo: completar`), renumerar 1-25 (o hasta 40), armar el
   `cuestionario.md` final en `material/<materia>/<tema>/`, verificar
   conteo con `grep -c "^### "`, y **borrar la carpeta de crudos de ese
   tema** en `_borradores-gemma/` una vez que el final está escrito (no
   dejar los dos copiados a la vez).

Este modo es útil para adelantar la parte cara en tiempo (esperar a
Gemma) sin bloquear la sesión en la revisión fina de cada uno — pero
**no reemplaza la revisión manual**: los crudos de Gemma tienen
siempre bugs de DSL (ver Gotchas), nunca se cargan directo.

## Paso 7 — Reportar y esperar

Mensaje corto: cantidad de preguntas (confirmada por el grep), un
resumen de 2-3 líneas de qué cubre cada módulo, y la pregunta de cuál es
el próximo tema — **sin sugerir uno por defecto salvo que el usuario
pida una recomendación**.
