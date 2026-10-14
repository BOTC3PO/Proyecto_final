# Frontend — Experiencia de usuario básica (teoria)

> Tema de los "finales de ruta técnicos/informáticos" (`oficios-orientacion-vocacional-PLANIFICACION.md`). Depende de `../css-y-maquetacion/`, `../html-semantico/` (ver `../dependencias.md`). Borrador de partida: `_borradores-gemma/materias-nuevas/frontend/experiencia-de-usuario-basica/` (reescrito y corregido a mano).

## Tipo de teoría (si esto se carga al sistema)

**Presentación** — varias secciones separables.

---

## 1. Qué es la experiencia de usuario

La **experiencia de usuario** (**UX**) es **cómo se siente y qué resultado obtiene una persona al usar un producto**: ¿encuentra lo que busca?, ¿entiende qué hacer?, ¿comete menos errores?, ¿se siente cómoda? La **interfaz de usuario** (**UI**) es **lo que se ve y se toca** (botones, colores, textos). **UI es parte de UX**.

Un diseño se evalúa por su **utilidad**, **facilidad de uso**, **eficiencia**, **seguridad** (evitar errores graves) y **agrado**.

---

## 2. Conocer a las personas

- **¿Quién lo usa?** Edad, conocimientos, **dispositivos**, **contexto** (en la calle con una mano, con internet lenta).
- **¿Qué necesita lograr?** Las **tareas** principales.
- **Observar y escuchar** a personas reales; **no suponer** que "todos son como yo".
- **Accesibilidad:** pensar en personas con **distintas capacidades** (visión, audición, movilidad, atención): **mejora la experiencia de todas**.

---

## 3. Principios de diseño de interfaces

1. **Claridad:** que se **entienda** qué es cada cosa y qué hace.
2. **Consistencia:** **lo mismo se ve y se comporta igual** en toda la aplicación.
3. **Jerarquía visual:** lo **importante** destaca (tamaño, color, posición, espacio).
4. **Retroalimentación:** **responder** a cada acción (cargando, guardado, error).
5. **Prevención de errores:** **confirmar** acciones destructivas, **deshabilitar** lo que no se puede, **sugerir** formatos.
6. **Reconocer antes que recordar:** mostrar opciones **visibles** en vez de obligar a memorizar.
7. **Control del usuario:** poder **deshacer**, **cancelar** y **volver**.
8. **Simplicidad:** **una acción principal** por pantalla; quitar lo innecesario.
9. **Ayuda para recuperarse de errores:** mensajes que **expliquen** qué pasó y **cómo arreglarlo**.

---

## 4. Diseño visual básico

- **Espacio en blanco:** da **aire** y mejora la lectura.
- **Alineación** y **cuadrícula**: orden.
- **Tipografía:** **una o dos** familias; **tamaño legible** (16 px o más para el cuerpo); **líneas** de **45–75 caracteres**; **interlineado** cómodo.
- **Color:** **pocos colores** con **propósito** (acción principal, error, éxito); **contraste suficiente** (relación mínima 4,5:1 para texto normal, WCAG AA); **no depender solo del color**.
- **Íconos** con **texto** cuando no son universales.
- **Imágenes** con **sentido** y **peso** optimizado.

---

## 5. Interacción

- **Botones** que **parecen botones**, de **tamaño táctil** (de 44 a 48 px) y con **texto** que diga la **acción** ("Guardar cambios", no "Aceptar").
- **Un único botón principal** por pantalla.
- **Formularios cortos:** pedir **solo lo necesario**; **etiquetas visibles**; **ejemplos**; **errores junto al campo**; **no borrar** lo escrito si hay un error.
- **Navegación:** clara, con **pocos niveles**; el usuario siempre sabe **dónde está** (migas de pan, elemento activo) y **cómo volver**.
- **Carga:** **indicar progreso**; si algo tarda, **no dejar la pantalla en blanco**.
- **Estados:** **vacío** (qué hacer cuando no hay datos), **cargando**, **error**, **éxito**.
- **Móvil primero:** la **mayoría** de las personas usa el **celular**.

---

## 6. Rendimiento y experiencia

Una página **lenta** es una mala experiencia: **menos peso** (imágenes optimizadas), **menos solicitudes**, **carga diferida**, **caché**. Medir con las herramientas del navegador (**Lighthouse**). Evitar que el contenido **"salte"** al cargar (reservar el espacio de imágenes).

---

## 7. Probar con personas

- **Pruebas de usabilidad:** pedirle a alguien que haga **tareas reales** **sin explicarle** cómo; **observar** dónde duda y **qué dice**.
- **Con 5 personas** se detectan **muchos** de los problemas principales.
- **Mejorar y repetir.**
- **Métricas:** tareas completadas, tiempo, errores, satisfacción.
- **Respetar la privacidad** y pedir **permiso** para grabar.

---

## 8. Ética y diseño responsable

- **No usar patrones engañosos** (*dark patterns*): botones que **ocultan** la opción de cancelar, cobros ocultos, **consentimientos forzados**.
- **Datos personales:** pedir **solo lo necesario** y **explicar** para qué.
- **Lenguaje inclusivo y claro.**
- **Diseñar pensando en el bienestar:** evitar **mecanismos adictivos** y **notificaciones abusivas**.
