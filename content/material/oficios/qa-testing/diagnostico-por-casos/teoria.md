# QA y Testing — Diagnóstico por casos en QA (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../reporte-de-bugs/` y los temas anteriores de QA (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/qa-testing/diagnostico-por-casos/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. El método

1. **Reproducir** el problema con pasos claros.
2. **Aislar:** ¿ocurre siempre? ¿en otros navegadores? ¿con otros datos? ¿con otro usuario?
3. **Reducir** los pasos a los mínimos.
4. **Comparar** lo esperado con lo obtenido (¿qué requisito se incumple?).
5. **Clasificar** (¿defecto, mala configuración, mal uso, requisito ambiguo?).
6. **Reportar** con evidencia, o **pedir información** si falta.

---

## 2. Casos típicos

| Situación | Qué hacer primero |
|:--|:--|
| "A veces falla, a veces no" | buscar qué cambia entre una vez y otra: datos, hora, orden, estado previo, red |
| "En mi equipo no pasa" | comparar entornos: versión, navegador, configuración, datos, permisos |
| el error aparece solo con datos reales | pedir datos de ejemplo (anonimizados) y mirar los casos borde del dato |
| tras una versión nueva algo dejó de funcionar | regresión: identificar qué cambió, repetir con la versión anterior |
| la pantalla se ve distinta en el celular | compatibilidad: tamaño de pantalla, navegador, zoom |
| el sistema es lento | ¿desde cuándo?, ¿con cuánta información?, ¿en qué paso?, ¿en cuántos usuarios? |
| el resultado de un cálculo es distinto | revisar redondeos, tipos (entero/decimal), fechas y zonas horarias |
| "se perdió un dato" | ¿se llegó a guardar? ¿hay un error silencioso? ¿otro usuario lo modificó? |
| el requisito no está claro | **preguntar** antes de decidir si es defecto |

---

## 3. Preguntas útiles

- ¿Qué se esperaba y por qué?
- ¿Qué cambió desde la última vez que funcionó?
- ¿A cuántas personas afecta?
- ¿Hay una forma de evitarlo (alternativa)?
- ¿Se puede reproducir en otro entorno?

---

## 4. Defecto o no defecto

No todo lo inesperado es un defecto: puede ser **un cambio solicitado**, **una mala configuración**, **un mal uso**, **una limitación conocida** o **un requisito ambiguo**. Decidir con base en el **requisito** (y, si falta, preguntar) evita reportes inútiles y discusiones.

---

## 5. Riesgo y prioridad

Con poco tiempo, se prueba y arregla **primero lo que más daña**: pérdida de datos, dinero, seguridad, accesos y funciones muy usadas. Un defecto cosmético no detiene una versión; uno que pierde datos, sí.
