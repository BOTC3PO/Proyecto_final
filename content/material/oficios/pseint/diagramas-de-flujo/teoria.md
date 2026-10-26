# PSeInt — Diagramas de flujo (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../sintaxis-y-pseudocodigo/`, `../estructuras-de-control/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/pseint/diagramas-de-flujo/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es un diagrama de flujo

Un **diagrama de flujo** muestra un algoritmo **con figuras y flechas**: cada figura es un paso y las flechas indican el orden. Ayuda a **entender**, **explicar** y **detectar errores** antes de escribir el código. PSeInt **dibuja el diagrama** del pseudocódigo (y también permite editar el diagrama).

---

## 2. Símbolos principales

| Figura | Nombre | Qué representa |
|:--|:--|:--|
| Óvalo | **Terminador** | inicio y fin |
| Paralelogramo | **Entrada / Salida** | `Leer`, `Escribir` |
| Rectángulo | **Proceso** | cálculos y asignaciones |
| Rombo | **Decisión** | pregunta con respuesta Sí/No (o Verdadero/Falso) |
| Flecha | **Flujo** | orden de ejecución |
| Círculo | **Conector** | une partes o continúa en otra página |

---

## 3. Cómo se leen las estructuras

- **Secuencia:** figuras una detrás de otra.
- **Selección:** un rombo con **dos salidas** (Sí / No) que luego **se juntan**.
- **Repetición:** una flecha que **vuelve hacia atrás** a un rombo; el bucle se repite mientras la condición lo permita.

```
Inicio → Leer n → ¿n > 0? ── Sí → Escribir "Positivo" ──┐
                    └─ No → Escribir "No positivo" ───────┴→ Fin
```

---

## 4. Reglas para dibujar

1. Un **único inicio** y al menos un **fin**.
2. El flujo va, por lo general, **de arriba hacia abajo** y de **izquierda a derecha**.
3. Cada rombo tiene **dos salidas rotuladas**.
4. **No cruzar** las flechas si se puede evitar.
5. Textos **breves** dentro de las figuras.
6. Todo camino debe llegar al **fin** (sin bucles infinitos ni caminos sin salida).

---

## 5. Del diagrama al pseudocódigo

- Un **rombo** se traduce en `Si` (o `Mientras` si hay una flecha que vuelve).
- Un **paralelogramo** en `Leer` o `Escribir`.
- Un **rectángulo** en una asignación (`total <- a + b`).
- Un **ciclo** con un contador en `Para`.

**Prueba de escritorio:** se sigue el diagrama con **datos de ejemplo** anotando cómo cambian las variables paso a paso.

---

## 6. Cuándo conviene y cuándo no

- **Sí:** para **aprender**, para **explicar** una lógica a otra persona, para **documentar** decisiones.
- **No tanto:** en programas grandes, se vuelve **inmanejable**; allí se usan **módulos** y otros diagramas (de clases, de secuencia) o directamente el código bien comentado.
