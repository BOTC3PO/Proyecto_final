# Arte — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Octava carpeta de materia, creada en esta sesión: varios nodos de
`troncos.md` (Tronco 3.a) están tageados explícitamente `(Arte)` en
`lista-temas-plana.md` — mismo criterio ya aplicado a `geografia/`,
`informatica/`, `quimica/` y `fisica/`. "Narrativa audiovisual" y
"Producción multimedial" no tienen tag propio en `lista-temas-plana.md`,
pero por decisión explícita de Javier (2026-08-04, ver sesión) quedan
también en esta carpeta en vez de crear una materia "audiovisual"
separada: comparten el mismo bloque del diagrama de `troncos.md`
(cuelgan de `AR6` vía `AR9`/`AR10`) y son, en espíritu, la continuación
aplicada de los mismos principios de diseño.

**Consolidación, decisión de Claude**: `troncos.md` dibuja "Elementos del
arte" (`AR5a`-`AR5g`, 7 nodos) y "Principios de diseño" (`AR6a`-`AR6j`,
10 nodos) como nodos individuales, y "Producción multimedial" como 4
nodos (`AR10a`-`AR10d`). Acá se armaron como UN SOLO módulo cada uno
(`elementos-del-arte/`, `principios-de-diseno/`, `produccion-multimedial/`),
a diferencia del patrón de `../matematica/cuerpos-redondos-y-poliedros/`
(que sí se separó en 5 subcarpetas). La diferencia: los cuerpos redondos
tienen una fórmula y un cálculo propio y distinto cada uno; acá cada
"elemento" o "principio" es una entrada de un mismo vocabulario/marco que
se enseña como una sola lección (igual criterio que
`../matematica/operaciones-enteros/`, que mantiene las 4 reglas de signos
juntas por ser "una unidad chica"). Si más adelante hace falta más
profundidad en un elemento o principio puntual, se puede separar
entonces. `transformaciones-geometricas/` (en `../matematica/`) y
`narrativa-audiovisual/` sí se separaron, porque cada sub-parte tiene una
técnica/fórmula propia y sustancialmente distinta (ver sus respectivas
filas más abajo y en `../matematica/dependencias.md`).

**Mantener esta tabla al día**: cada carpeta de tema nueva agrega su fila
antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `composicion-y-proporcion/` | `../matematica/perimetro-y-area/` | Nodo `AR1` de `troncos.md` (`M3 --> AR1`). La composición (cómo se organizan los elementos dentro del espacio de una obra) usa el mismo vocabulario de área y proporción entre superficies ya construido en Matemática — la regla de tercios, por ejemplo, es literalmente dividir el área de una imagen en una cuadrícula. |
| `elementos-del-arte/` | `composicion-y-proporcion/` | El MAPA marca 7 flechas entrantes desde `AR1` (`AR1 --> AR5a`...`AR5g`: línea, forma, volumen, textura, valor, espacio, color). *Consolidado en un solo módulo* (ver nota arriba): son el vocabulario básico con el que se describe cualquier obra, antes de entrar en cómo se organizan (los principios). |
| `principios-de-diseno/` | `composicion-y-proporcion/` | El MAPA marca 10 flechas entrantes desde `AR1` (`AR1 --> AR6a`...`AR6j`: contraste, equilibrio, proporción, ritmo, unidad, énfasis, movimiento, patrón, variedad, escala). *Consolidado en un solo módulo* (ver nota arriba): son las reglas de organización de los elementos, la aplicación práctica de la composición. |
| `rosetones-y-simetria/` | `../matematica/circunferencia-y-circulo/`, `../matematica/transformaciones-geometricas/rotacion/`, `../matematica/transformaciones-geometricas/reflexion/` | El MAPA marca tres flechas entrantes (`GO6 --> AR3`, `GO8b --> AR3`, `GO8c --> AR3`). Un rosetón es, matemáticamente, un patrón con simetría rotacional (`rotacion/`) y a veces axial (`reflexion/`) dibujado sobre una circunferencia (`circunferencia-y-circulo/`) — no depende de la traslación ni de la homotecia, que no participan de este patrón. |
| `narrativa-audiovisual/plano/` | `principios-de-diseno/` | El MAPA marca `AR6a...AR6j --> AR9a` (las 10 flechas de los principios de diseño convergen en "Plano") y, en paralelo, `CS1P["Teoría de la comunicación (Comunicación Social)"] --> AR9a`. *Dependencia parcial, no está construida entera*: `CS1` (Tronco 16.a, Comunicación Social) todavía no tiene carpeta en `material/` — se deja pendiente para cuando se aborde ese tronco; por ahora este módulo depende sólo de `principios-de-diseno/` (el encuadre de un plano usa directo esos principios: equilibrio, énfasis, regla de tercios). |
| `narrativa-audiovisual/encuadre/` | `narrativa-audiovisual/plano/` | El MAPA marca `AR9a --> AR9b`. El encuadre (qué se decide incluir o dejar fuera del plano, y cómo se compone dentro de él) presupone ya el concepto de plano. |
| `narrativa-audiovisual/montaje/` | `narrativa-audiovisual/encuadre/` | El MAPA marca `AR9b --> AR9c` y, en paralelo, tres flechas desde Física 9.b (`OND4a/b/c`, timbre/altura/intensidad del sonido) que tampoco están construidas en `../fisica/` todavía — se dejan pendientes por la misma razón que `CS1`. El montaje (cómo se encadenan los planos ya encuadrados) depende del encuadre, no al revés. |
| `produccion-multimedial/` | `narrativa-audiovisual/montaje/` | El MAPA marca `AR9c --> AR10a/b/c/d` (integrar texto, imagen, sonido y video). *Consolidado en un solo módulo* (ver nota arriba, mismo criterio que `elementos-del-arte/`): las 4 son la misma habilidad (elegir la técnica/formato correcto para cada tipo de recurso dentro de un proyecto multimedial ya montado), no 4 cuerpos de conocimiento independientes. |
| `teatro-dramaturgia-y-actuacion/` | `../lengua/recursos-literarios/` (y `../lengua/exposicion-oral/`) | Nodo `AR8` de `troncos.md`, con DOS padres (`P11 → AR8` y `COM1 → AR8`): dramaturgia (escribir texto teatral) reusa recursos literarios ya vistos en Lengua; actuación (interpretarlo en vivo) reusa las técnicas de exposición oral. En `dependencias.md` se referencia la dependencia de `recursos-literarios/`; la de `exposicion-oral/` se cita en la teoría. Nota: el género dramático como FORMA de texto ya se cubrió en `../lengua/genero-dramatico/` (diálogo, acotaciones, estructura en actos/escenas) — `teatro-dramaturgia-y-actuacion/` no repite eso, se enfoca en la escritura teatral como oficio y en la actuación como arte escénico. |
