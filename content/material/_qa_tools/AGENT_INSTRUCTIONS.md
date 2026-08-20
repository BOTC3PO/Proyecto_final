# Reparar bloques VBLang rotos — instrucciones para agente

Contexto: `content/material/*/*/cuestionario.md` contiene preguntas en VBLang
(DSL propio para cuestionarios educativos), cada una en un bloque fenced
` ``` `...` ``` ` (a veces ` ```yaml `). Muchos bloques tienen bugs de sintaxis
o de contenido que rompen la compilación. Tu tarea: dejar TODOS los bloques
de tu lista de archivos asignada en estado `OK`.

## Herramientas ya construidas (usalas, no reinventes)

- `python3 content/material/_qa_tools/validate_file.py <ruta>` — corre desde
  la raíz del repo (`/home/javier/Proyecto_final`). Imprime `N bloques: X OK,
  Y FAIL` y el contenido completo de cada bloque roto con su error exacto.
- El validador real de fondo: `content/material/_validate_dsl.ts`, vía
  `api/node_modules/.bin/tsx`, lee UN bloque por stdin. Para probar un fix
  aislado antes de aplicarlo:
  ```bash
  api/node_modules/.bin/tsx content/material/_validate_dsl.ts < /tmp/test.txt
  ```
  Imprime `OK` o `FAIL: <razón>`.

## Flujo de trabajo (por archivo, uno a la vez — NO paralelizar tsx vos mismo)

1. `python3 content/material/_qa_tools/validate_file.py <archivo>`
2. Para cada bloque FAIL: leer el error, entender la causa real, arreglar
   preservando el sentido pedagógico de la pregunta (nunca borrar contenido
   sin más — reconstruir algo correcto y coherente).
3. Antes de aplicar el fix al archivo real, probalo aislado con el comando
   `tsx` de arriba en un archivo temporal. Sólo aplicá el cambio si da `OK`.
4. Después de editar, volvé a correr `validate_file.py` sobre el archivo
   completo para confirmar `N OK, 0 FAIL`.
5. Seguí con el próximo archivo de la lista.

No uses `head`/`tail`/pipes que trunquen la salida de `validate_file.py` —
podés perder bloques FAIL reales por el corte. Guardá el output completo o
mirá sin recortar.

## Taxonomía de bugs conocidos (la gran mayoría de lo que vas a encontrar)

1. `respuestas_validas:`/`opciones_explicitas:` aceptan tanto `[a, b]` inline
   como lista con guiones `- "a"` — ambos formatos válidos SI los items están
   entre comillas dobles. Items sin comillas → error de parseo.
2. `respuesta_orden:` (para `tipo: ordenar`) sólo acepta forma de array
   inline en una sola línea `["a", "b"]` — la lista con guiones tira
   "Se esperaba una expresión...".
3. Arrays multilínea `[\n a,\n b\n]` inválidos en cualquier lado — colapsar
   a una sola línea física.
4. `tipo: ordenar` requiere que `opciones_explicitas` y `respuesta_orden`
   sean EXACTAMENTE el mismo conjunto de elementos (mismos strings, mismo
   conteo). Si el original tenía distractores de más, hay que sacarlos y
   ajustar el enunciado para que tenga sentido como pregunta de orden real
   (no dejar una "pregunta de orden" que en realidad era mc con 2
   respuestas correctas).
5. Escapes válidos en strings con comillas dobles: sólo `\n \t \" \\ \{ \}`.
   **Secuencias LaTeX (`\Omega`, `\cdot`, `\frac{}{}`, `\text{}`, `\rho`,
   `\Delta`, etc.) son inválidas ahí** → "Escape inválido \X". Reemplazar
   por texto plano/Unicode (Ω, Δ, ·, ρ, ², etc., sin backslash).
   **OJO**: un bloque `explicacion: |` (con pipe, literal multilínea) NO
   pasa por validación de escapes — el backslash ahí es texto literal, no
   escape. Si un bloque falla específicamente por un escape inválido DENTRO
   de un `explicacion: |`, el error real es otra cosa (revisar bien cuál
   línea exacta tira el error); no asumas que hay que limpiar LaTeX de un
   `|` si no es la causa real reportada.
6. `tipo: vf` requiere el literal bare `verdadero`/`falso` para `respuesta:`
   — nunca `"verdadero"`/`"falso"` entre comillas, nunca `true`/`false` en
   inglés.
7. Marcador de blanco para `tipo: completar`: usar `___` (cualquier cantidad
   de guiones bajos) SIN llaves — `{___}` es inválido.
8. No existen los campos `tabla:`, `datos:` a nivel raíz fuera de
   `variables:`, `variables_extra:`, `variables_texto:`, `opciones_validas:`
   — mover todo adentro de `variables:` o borrar si no se usa.
9. Sólo puede haber UN bloque `variables:` por pregunta.
10. `respuesta:` es una expresión simple, nunca envuelta en `{}`.
11. **Palabras reservadas — NO se pueden usar como nombre de variable dentro
    de `variables:`**: `pasos`, `opciones`, `respuesta`, `enunciados`
    (plural). Da error `KW_PASOS`/`KW_OPCIONES`/etc. "Se esperaba un nombre
    de variable". Fix: renombrar (ej. `pasos`→`etapas`, `opciones`→
    `resultados_texto`, `enunciados`→`frases`) o borrar si no se usa.
12. **Bug de "doble sorteo"**: `uno_de([...])` ya hace la selección aleatoria
    — el resultado de `uno_de(...)` YA ES el elemento elegido, no la lista
    completa. Si después alguien vuelve a indexar con `[0]`/`[idx]` sobre
    ese resultado asumiendo que es la lista completa, está mal. Patrón
    típico roto: `escenario: uno_de([[a,b],[c,d]])` seguido de
    `escenario[0][1]` — eso es doble índice sobre algo que ya es UNA fila.
    Fix: `escenario[1]` directo (ya que `escenario` es la fila elegida).
    Otro patrón: si necesitás la MISMA fila para variables Y para un
    resultado precomputado alineado, usá `idx: uno_de([0,1,2])` +
    `datos: [[...],[...],[...]]` (array fijo, NO envuelto en `uno_de`) +
    accesos `datos[idx][n]`.
13. **No hay métodos de string** (`.split()`, `.strip()`) **ni funciones
    ternarias/condicionales** (`si()`, `if()`, `if(a) else b`) **ni
    operadores lógicos** (`&&`, `||`) en expresiones. Si ves
    `if(cond && cond2, "1", "0")` o similar, hay que precomputar resultados
    en un array paralelo indexado por la misma variable aleatoria: agregar
    `resultados_texto: [...]` con el valor correcto para cada combinación
    posible, y `respuesta: resultados_texto[idx]`.
14. Arrays anidados de forma heterogénea (mezclar ej. `[array, string]` en
    una fila y `[string, array]`/tipos distintos en otra, o mezclar
    `number`/`string` en la misma posición entre filas) → error de tipo
    union (`array<string> | string`, `number | string`). Fix: separar en
    arrays paralelos del mismo shape en vez de tuplas heterogéneas.
15. Strings entre comillas dobles que abarcan VARIAS líneas físicas
    (`enunciado: "...` con salto de línea literal adentro) son inválidos →
    "el string no tiene comilla de cierre". Colapsar a una sola línea física
    usando `\n` como secuencia de escape si hace falta un salto real.
16. Comillas simples dentro de arrays de strings son inválidas — VBLang
    exige comillas dobles siempre ("Los textos van entre comillas dobles,
    no simples").
17. Indexado booleano de arrays tipo `["a"][cond] + ["b"][cond2]` no es un
    patrón soportado.
18. Typos en metadata como `tags: [...]]` (doble corchete de cierre) rompen
    el parseo.
19. `abs()`, `sqrt()` son funciones builtin reales; los operadores
    aritméticos `+ - * /` funcionan bien en expresiones, incluida
    interpolación `{expr}` dentro de strings (ej. `{q / (m*c)}` es válido).
20. `respuesta:`/`respuestas_validas:` NUNCA pueden referenciar campos de
    nivel superior como `opciones_explicitas` directamente como si fueran
    variables (`respuesta: opciones_explicitas[0]` → "variable indefinida:
    opciones_explicitas"). Sólo se puede referenciar lo declarado dentro de
    `variables:`. Si la respuesta correcta es un valor fijo de
    `opciones_explicitas`, escribilo como string literal directamente.
21. `{respuesta}` (referenciar el campo `respuesta:` desde `explicacion:`)
    tampoco funciona — es "variable indefinida: respuesta". Si necesitás
    mostrar el valor calculado en la explicación, computalo en una variable
    con OTRO nombre dentro de `variables:` y referenciá esa variable.
22. Falta de cierre `]` (`respuesta: foo[idx][1` sin el corchete final) es
    un typo mecánico común — a veces junto con el bug #12 de doble índice,
    revisar ambos a la vez.
23. **Bloques con `enunciado:`/`explicacion:` con la clave sola en su línea
    y el texto en la línea siguiente (indentado), sin comillas ni `|`** —
    variante del bug de "texto sin comillas". Fix: unir a una sola línea
    `clave: "texto"`.
24. **`tipo: ordenar` requiere `respuesta_orden:`**, no `respuesta:`. Si ves
    `tipo: ordenar` con `respuesta:` en vez de `respuesta_orden:`, es sólo
    renombrar el campo (validar que además cumpla la regla #4).

## Regla de calidad de contenido (no sólo compilar, tiene que tener sentido)

**"Respuesta desconectada del sorteo"**: si `enunciado:` interpola
dinámicamente una variable elegida por `uno_de()`, `respuesta:` TIENE que
depender de esa misma variable (nunca puede quedar fija/hardcodeada a un
solo caso posible, porque estaría mal para los otros valores del sorteo).
Si ves esto, o arreglás la dependencia (patrón de arrays paralelos del
bug #13), o si el enunciado en realidad no necesita variar, sacás la
randomización entera y dejás una pregunta fija coherente.

Cuando los datos numéricos de origen están mal armados (valores que no dan
la respuesta esperada con la fórmula real), no los dejes así sólo porque
compilan — recalculá valores que sean físicamente/lógicamente correctos y
mínimamente coherentes con el resto del bloque (enunciado, pasos,
explicación).

## Disciplina de recursos

Procesá los archivos de tu lista DE A UNO, secuencial (no lances tus propios
workers en paralelo con `concurrent.futures`/`&` — ya hay otros 2 agentes
corriendo en simultáneo sobre esta misma máquina de 8 núcleos, sumar más
paralelismo puede saturarla).

## Al terminar

Reportá, por archivo: si quedó 100% OK, y si tuviste que rediseñar contenido
de forma no trivial (para que quede constancia). Si algún bloque te resultó
imposible de arreglar sin más contexto de negocio, dejalo documentado con el
error exacto en vez de forzar algo incorrecto.
