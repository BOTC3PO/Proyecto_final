# QA y Testing — Reporte de bugs (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../testing-exploratorio/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/qa-testing/reporte-de-bugs/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Para qué un buen reporte

Un reporte de bug es la **única forma de que otra persona** (programadora, líder) **entienda y arregle** un problema. Un reporte claro ahorra horas; uno vago ("no anda") se devuelve y se pierde tiempo. Hay que describir **hechos**, no culpables ni opiniones.

---

## 2. Qué debe incluir

| Campo | Contenido |
|:--|:--|
| **Título** | corto y específico: "Al pagar con una tarjeta vencida, la app se cierra" |
| **Entorno** | versión del producto, navegador/dispositivo, sistema operativo, usuario o rol, datos usados |
| **Pasos para reproducir** | numerados, mínimos y claros |
| **Resultado esperado** | qué debería ocurrir (según el requisito) |
| **Resultado obtenido** | qué ocurre realmente (con el texto exacto del error) |
| **Frecuencia** | siempre, a veces (¿cuántas de cuántas?) |
| **Evidencia** | captura, grabación, log, archivo de ejemplo |
| **Severidad / prioridad** | ver abajo |

Ejemplo de pasos:

1. Iniciar sesión como "cliente".
2. Agregar un producto al carrito.
3. En el pago, ingresar la tarjeta 4000 0000 0000 0002 con vencimiento 01/20 (de prueba).
4. Presionar "Pagar".

**Esperado:** mensaje "Tarjeta vencida". **Obtenido:** la aplicación se cierra sin mensaje. **Frecuencia:** 3 de 3.

---

## 3. Severidad y prioridad

- **Severidad:** **cuán grave** es el efecto técnico del defecto.
  - **Crítica:** se pierde información o no se puede usar el sistema.
  - **Alta:** una función importante no anda y no hay alternativa.
  - **Media:** funciona con una alternativa razonable.
  - **Baja:** cosmético (un texto, una alineación).
- **Prioridad:** **qué tan pronto** conviene arreglarlo (decisión de negocio).

Pueden diferir: un error de ortografía en el nombre de la empresa en la página principal es de **severidad baja pero prioridad alta**; un fallo grave en una función que casi nadie usa puede ser de severidad alta y prioridad baja.

---

## 4. Buenas prácticas

- **Un reporte por defecto** (no mezclar varios).
- **Reproducirlo** antes de reportar; si es intermitente, indicarlo y cuántas veces ocurrió.
- **Pasos mínimos:** quitar lo que no hace falta para que ocurra.
- **Revisar** que no esté ya reportado (duplicados).
- **No incluir datos reales o sensibles** (claves, datos personales): usar datos de prueba y ocultar lo privado en las capturas.
- **Tono neutro:** "la función devuelve 0" y no "el código está mal hecho".

---

## 5. Ciclo de vida

Un bug pasa por estados, por ejemplo: **Nuevo → Asignado → En corrección → Corregido → Verificado → Cerrado** (o **Reabierto** si el arreglo no funcionó, o **Rechazado/No es un defecto**). La persona que probó **verifica** el arreglo y busca **regresiones** alrededor.
