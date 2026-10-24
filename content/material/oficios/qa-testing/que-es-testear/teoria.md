# QA y Testing — Qué es testear (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../../../informatica/requisitos-funcionales-no-funcionales/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/qa-testing/que-es-testear/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es probar un software

**Testear** es ejecutar o revisar un producto **para encontrar diferencias entre lo que debería hacer y lo que hace**, y para dar información sobre su calidad. Probar **no demuestra que no hay errores**: solo puede mostrar que *hay* errores (o que, con esas pruebas, no se encontraron). Por eso se dice que probar es reducir el riesgo, no eliminarlo.

Vocabulario básico:

| Término | Significa |
|:--|:--|
| **Error** (*error*) | equivocación humana al pensar o escribir |
| **Defecto** (*bug*, *fault*) | el problema que queda en el código o el diseño |
| **Falla** (*failure*) | lo que se ve cuando el defecto se activa y el sistema se comporta mal |
| **Caso de prueba** | datos de entrada, pasos y resultado esperado |
| **Resultado esperado** | lo que debería ocurrir según los requisitos |
| **Resultado obtenido** | lo que ocurrió realmente |
| **Oráculo** | la fuente que dice cuál es el resultado correcto (requisito, especificación, otro programa, el usuario) |

---

## 2. QA y testing no son lo mismo

- **Testing:** actividad de probar el producto.
- **QA** (*Quality Assurance*, aseguramiento de calidad): conjunto más amplio de actividades **para evitar** los defectos desde el proceso (revisiones, estándares, automatización, mejoras). QC (*Quality Control*) detecta; QA previene.

---

## 3. Para qué sirve probar

- Encontrar defectos **antes de que los encuentre el usuario** (cuanto más tarde se encuentra un defecto, más cuesta arreglarlo).
- Verificar que se cumplen los **requisitos**.
- Dar **confianza** para decidir si se puede publicar una versión.
- Evitar **regresiones**: que un cambio rompa algo que ya funcionaba.

**Verificación** responde "¿construimos el producto correctamente?" (cumple la especificación); **validación**, "¿construimos el producto correcto?" (resuelve lo que el usuario necesita).

---

## 4. Principios útiles

1. Probar muestra la presencia de defectos, no su ausencia.
2. **Probar todo es imposible**: se prioriza por riesgo.
3. Probar temprano ahorra costos.
4. Los defectos se **agrupan**: pocas partes concentran muchos.
5. Repetir siempre las mismas pruebas deja de encontrar errores nuevos (la "paradoja del pesticida"): hay que renovarlas.
6. Probar depende del contexto (un juego no se prueba como un sistema médico).
7. "Sin errores" no sirve si el producto no hace lo que el usuario necesita.

---

## 5. Quién prueba

Prueban los **programadores** (pruebas unitarias), el equipo de **QA/testers**, y también los usuarios. Una persona ajena al desarrollo suele ver errores que quien lo escribió no ve, porque tiende a probar lo que *sabe* que funciona.
