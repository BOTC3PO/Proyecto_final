# Plan de temas faltantes — oficios con nota menor a 6,5 (lote A)

> Generado 2026-10-19 a partir de la evaluación por materia. Alcance: Backend, Audiovisual, Diseño gráfico, Mecanografía, Jardinero paisajista, Carpintero de aluminio, Modista, Tornero y Cocina/Gastronomía. **Solo plan: no se creó contenido.**
>
> Fuentes leídas: `teoria.md` de cada tema existente (títulos de sección y términos clave), `oficios-orientacion-vocacional-PLANIFICACION.md` y `oficios/dependencias.md`. Los libros de `tareas_pendientes/libros/oficios/` **no están en este checkout**, así que las fuentes se citan tal como las nombra la planificación.
>
> **Leyenda.** `[PLAN]` = el tema figura en la planificación como nodo propio y hoy quedó fundido en otro o no se escribió. `[NUEVO]` = laguna detectada al leer el contenido; no está en la planificación. Prioridad: A (hueco que rompe la ruta o deja un enlace roto), M (mejora clara), B (opcional).
>
> **Cuestionarios.** Para los oficios de obra y taller rige la decisión «cuestionario NO obligatorio» (matriz Teoría / Cuestionario / Casos / Práctica; ver líneas 7 y 47-50 de la planificación). Los finales de ruta informáticos y digitales sí llevan cuestionario de 20 o más preguntas (línea 1147).

## Diagnóstico general

Todos estos oficios tienen pocos temas **por diseño o por fusión**, no por abandono:

- Los 4 oficios manuales (Jardinero, Aluminero, Modista, Tornero) siguen el esquema de 6 a 8 secciones de la planificación. Cada sección es **un solo tema de unas 600 a 900 palabras**, aunque la planificación lista 2 a 4 nodos dentro de cada una. Ahí está el grueso de lo faltante.
- Mecanografía y Audiovisual cubren exactamente lo planificado (3 y 2 temas), pero la planificación era mínima.
- Backend cumple sus 3 temas, y la ruta no tiene tema de cierre por casos ni de bases de datos.

---

## 1. Backend (3 temas: apis-rest, arquitectura-de-servidores, autenticacion-y-autorizacion)

**Cubre hoy.** REST completo (recursos, métodos, códigos, diseño, probar). Capas, escalado, disponibilidad, monolito vs. servicios. Contraseñas, sesiones y tokens, MFA, OAuth.

**Lagunas.**
- Nada sobre cómo el backend habla con una base de datos, a pesar de que la planificación (línea 1209) dice «conecta con el nodo SQL».
- No hay tema de cierre «por casos», que sí tienen los demás oficios.
- Manejo de errores, logs y concurrencia no se tocan.

| Carpeta propuesta | Prerrequisitos | Contenido (1 línea) | Prio | Marca |
|---|---|---|---|---|
| `acceso-a-datos-desde-el-backend` | `apis-rest`, `../sql/` (tema de consultas) | Conexión, consultas parametrizadas, ORM vs. SQL directo, transacciones, migraciones. | A | NUEVO (la planificación solo dice «conecta con SQL») |
| `validacion-y-manejo-de-errores` | `apis-rest` | Validar entrada, errores controlados vs. inesperados, mensajes y códigos coherentes. | M | NUEVO |
| `logs-y-monitoreo` | `arquitectura-de-servidores` | Qué registrar, niveles de log, métricas básicas, alertas; puente con DevOps. | M | NUEVO |
| `asincronia-y-colas-de-trabajo` | `arquitectura-de-servidores` | Tareas en segundo plano, colas, reintentos, idempotencia. `dependencias.md` ya promete «colas», pero el tema no tiene sección de colas. | M | NUEVO |
| `diagnostico-backend-por-casos` | `autenticacion-y-autorizacion`, los anteriores | Casos: 500 intermitente, endpoint lento, token que expira mal; hipótesis y verificación. | A | NUEVO (patrón de cierre de todos los oficios) |

**Cuestionario:** sí, 20 o más preguntas VBLang cada uno (final de ruta informático). Fuente: no hay libro específico anotado; la planificación cita para el resto de Informática `progit`, `introduction-to-docker-light`, etc. Habría que buscar uno de backend.

---

## 2. Audiovisual (2 temas: edicion-de-audio, edicion-de-video)

**Cubre hoy.** Audio: muestreo, niveles, flujo de trabajo, edición de voz. Video: cuadros y códec, organización, línea de tiempo, ritmo, exportar, derechos.

**Lagunas.**
- **Corrección de color** está en la planificación (línea 1282) y no aparece en ninguna sección de `edicion-de-video`.
- Ecualización, reducción de ruido y **mezcla** están listadas en la planificación, pero en `edicion-de-audio` solo hay «herramientas básicas».
- No hay nada sobre captura (cámara, micrófono, luz).

| Carpeta propuesta | Prerrequisitos | Contenido | Prio | Marca |
|---|---|---|---|---|
| `correccion-de-color-en-video` | `edicion-de-video` | Exposición, balance de blancos, curvas, LUT, coherencia entre planos. | A | PLAN (línea 1282, sin tema propio) |
| `transiciones-y-efectos` | `edicion-de-video` | Cuándo usar corte, fundido o efecto; velocidad; rotulación y títulos. | M | PLAN (transiciones, línea 1282) |
| `ecualizacion-y-reduccion-de-ruido` | `edicion-de-audio` | EQ, filtros, compresión, quitar ruido y eco. | A | PLAN (línea 1285) |
| `mezcla-y-masterizacion-basica` | `ecualizacion-y-reduccion-de-ruido` | Balance de pistas, panorama, niveles finales y normalización. | A | PLAN (mezcla básica) |
| `captura-de-audio-y-micrófonos` | `../informatica/unidades-almacenamiento/` | Tipos de micrófono, distancia, entorno, grabar limpio desde el origen. | M | NUEVO |
| `captura-de-video-luz-y-encuadre` | `../arte/narrativa-audiovisual/` (plano, encuadre, montaje) | Cámara, luz natural y artificial, encuadre aplicado al rodaje. | M | NUEVO; reutiliza lo ya escrito en Arte |
| `exportacion-por-plataforma-y-subtitulos` | `edicion-de-video` | Formatos y relaciones de aspecto por plataforma; subtitulado y accesibilidad. | M | PLAN (exportación por plataforma) + NUEVO (subtítulos) |
| `diagnostico-audiovisual-por-casos` | los anteriores | Casos: audio con eco, video pesado, desfase de audio y video. | A | NUEVO |

**Cuestionario:** sí (final de ruta digital). Fuente: la planificación no asigna libros; hay que buscarlos.

---

## 3. Diseño gráfico (3 temas: edicion-de-imagen, vectorial, prototipado)

**Cubre hoy.** Imagen digital y edición no destructiva; trazados, Bézier, logotipo, exportación; prototipo, interacciones, pruebas con usuarios, entrega.

**Lagunas.**
- Ningún tema de **tipografía** ni de **color**. Además `diseño/jerarquia-visual-e-informacion` termina diciendo que conecta con «tipografia» y «colores», y esos temas **no existen**: son enlaces rotos en la ruta.
- No hay impresión ni preimpresión, ni identidad visual.
- La planificación menciona «componentes reusables» y «handoff» (línea 1277). Prototipado los trata en una sola sección.

| Carpeta propuesta | Prerrequisitos | Contenido | Prio | Marca |
|---|---|---|---|---|
| `tipografia` | `vectorial`, `../diseño/jerarquia-visual-e-informacion/` | Familias, jerarquía, interlineado, legibilidad, pares tipográficos. | A | NUEVO (enlace roto desde `diseño/`) |
| `teoria-del-color-y-paletas` | `edicion-de-imagen` | RGB, CMYK, HSL, círculo cromático, armonías, contraste y accesibilidad. | A | NUEVO (enlace roto desde `diseño/`) |
| `composicion-y-layout` | `tipografia`, `../arte/composicion-y-proporcion/` | Grillas, márgenes, alineación y espacio en blanco, aplicados a piezas. | M | NUEVO |
| `identidad-visual-y-branding` | `vectorial`, `tipografia`, `teoria-del-color-y-paletas` | Logo, manual de marca, aplicaciones y coherencia. | M | NUEVO |
| `preimpresion-y-produccion-grafica` | `teoria-del-color-y-paletas` | Sangrado, CMYK, resolución, formatos de entrega a imprenta. | M | NUEVO |
| `componentes-y-sistemas-de-diseno` | `prototipado` | Componentes reutilizables, variantes, tokens y handoff a desarrollo. | M | PLAN (línea 1277) |
| `diagnostico-diseno-por-casos` | los anteriores | Casos: logo que no escala, texto ilegible, impreso con colores distintos. | A | NUEVO |

**Cuestionario:** sí. Fuente: no hay libro anotado en la planificación para esta rama.

---

## 4. Mecanografía (3 temas: qwerty-espanol, qwerty-ingles, velocidad-y-precision)

**Cubre hoy.** Exactamente lo planificado: postura, fila base, dedos, particularidades del español, diferencias con el teclado US, atajos, medición, ergonomía.

**Lagunas.** Es un oficio de alcance chico por diseño. La planificación anota el portugués como «variante rara, no prioritaria» y descarta AZERTY.

| Carpeta propuesta | Prerrequisitos | Contenido | Prio | Marca |
|---|---|---|---|---|
| `teclado-numerico-y-simbolos` | `qwerty-espanol` | Teclado numérico, fila de números, símbolos de programación y administración. | M | NUEVO |
| `qwerty-portugues` | `qwerty-espanol` | Diferencias de layout para ç y acentos. | B | PLAN (variante anotada, no prioritaria) |
| `escritura-en-celular-y-tablet` | `velocidad-y-precision` | Dictado, teclado táctil, autocorrección y límites. | B | NUEVO |
| `diagnostico-mecanografia-por-casos` | `velocidad-y-precision` | Casos: me estanqué en X ppm, muchos errores en una fila, dolor de muñeca. | M | NUEVO |

**Cuestionario:** sí. Conviene un práctico con texto y medición. Fuente: ninguna asignada.

---

## 5. Jardinero paisajista (6 temas)

**Cubre hoy.** Botánica general, seguridad, materiales (sustratos, abonos y fitosanitarios en un solo tema), herramientas y riego, técnicas (propagación, poda, canteros y praderas en un solo tema, de 683 palabras), diagnóstico por casos. Todos tienen cuestionario.

**Lagunas.** La planificación (líneas 662-690) lista unos 22 nodos y se escribieron 6 temas.
- `tecnicas-jardineria` menciona esquejes pero **nunca el injerto** (0 apariciones), y el riego solo de pasada.
- La sección 7, **Normativa** (poda en espacio público), no tiene tema.

| Carpeta propuesta | Prerrequisitos | Contenido | Prio | Marca |
|---|---|---|---|---|
| `fisiologia-de-la-planta` | `fundamentos-botanicos` | Fotosíntesis, transpiración, nutrición, ciclo vegetativo. | M | PLAN |
| `identificacion-de-especies-y-sistematica` | `fundamentos-botanicos` | Familias, nomenclatura, claves de identificación; especies comunes en Argentina. | M | PLAN |
| `sustratos-y-tierras` | `materiales-jardineria` | Tipos de suelo, textura, pH, enmiendas. | A | PLAN (hoy fundido) |
| `abonos-y-fertilizantes` | `sustratos-y-tierras` | Orgánicos y químicos, NPK, dosis y momentos. | A | PLAN (hoy fundido) |
| `productos-fitosanitarios-y-control-integrado` | `abonos-y-fertilizantes`, `seguridad-jardineria` | Plaguicidas, riesgos, manejo integrado, alternativas biológicas. | A | PLAN |
| `sistemas-de-riego` | `herramientas-y-maquinaria-jardineria` | Goteo, aspersión, programadores, caudal, mantenimiento. | A | PLAN (hoy 1 mención en técnicas) |
| `motosierra-y-cortadora-de-cesped` | `seguridad-jardineria` | Uso seguro y mantenimiento. | M | PLAN |
| `multiplicacion-de-plantas` | `fisiologia-de-la-planta` | Semilla, esqueje, injerto, acodo, división. | A | PLAN (injerto no está en el texto) |
| `poda-de-arboles-y-arbustos` | `multiplicacion-de-plantas` | Tipos de poda, épocas, cortes correctos, herramientas. | A | PLAN (hoy sección de técnicas) |
| `implantacion-y-mantenimiento-de-praderas` | `sustratos-y-tierras` | Siembra, corte, resiembra, malezas. | M | PLAN |
| `diseno-de-canteros-y-jardines` | `identificacion-de-especies-y-sistematica` | Composición, estilos, especies nativas y ornamentales argentinas. | M | PLAN (canteros) + NUEVO (estilos y plano de planta) |
| `normativa-y-arbolado-publico` | `poda-de-arboles-y-arbustos` | Ordenanzas municipales y poda en espacio público, con el disclaimer del Carpintero. | M | PLAN (sección 7 sin tema) |
| `calculo-de-jardineria` | `sistemas-de-riego`, `abonos-y-fertilizantes` | Superficie, volumen de sustrato, dosis de fertilizante, caudal de riego. | M | NUEVO (otros oficios tienen sección Cálculo) |
| `compostaje` | `abonos-y-fertilizantes` | Compost doméstico y de jardín. | B | NUEVO |

**Cuestionario:** conviene sí en los técnicos, porque el oficio ya los usa (más de 500 líneas por tema). Fuente: *Iniciación a la Jardinería* (Ministerio de Educación, España), la que cita la planificación.

---

## 6. Carpintero de aluminio (8 temas)

**Cubre hoy.** Es el oficio más completo del lote: fundamentos, seguridad, materiales (perfiles, DVH, herrajes y burletes), herramientas, técnicas, cálculo, planos, diagnóstico. Todos con 600 a 900 palabras.

**Lagunas.** Los temas son anchos. La planificación lista nodos más finos (líneas 747-778) que quedaron como secciones.

| Carpeta propuesta | Prerrequisitos | Contenido | Prio | Marca |
|---|---|---|---|---|
| `vidrio-y-dvh` | `materiales-carpinteria-aluminio` | Tipos de vidrio, DVH, espesores, laminado y templado. | M | PLAN (hoy sección de materiales) |
| `herrajes-y-burletes` | `materiales-carpinteria-aluminio` | Cierres, rodamientos, bisagras, burletes y selladores. | M | PLAN (hoy sección) |
| `instalacion-de-ventana-corrediza` | `tecnicas-carpinteria-aluminio` | Paso a paso: replanteo, nivelación, fijación, sellado. | A | PLAN (hoy mención en técnicas) |
| `instalacion-de-ventana-abatible-y-puertas` | `instalacion-de-ventana-corrediza` | Abatibles, oscilobatientes, puertas, balconeras. | A | PLAN |
| `sellado-e-impermeabilizacion` | `instalacion-de-ventana-corrediza` | Siliconas, espumas, cintas y puntos de filtración. | M | PLAN |
| `normas-de-calidad-iram-para-aluminio` | `calculo-carpinteria-aluminio` | Estándares IRAM de aberturas y ensayos de estanqueidad. | M | PLAN (sección 9, solo se nombra en pasadas) |
| `presupuesto-y-computo-de-obra` | `calculo-carpinteria-aluminio` | Cómputo, costos de perfiles y vidrio, presupuesto al cliente. | M | NUEVO |

**Cuestionario:** opcional, como en el resto de los oficios de obra. Fuente: *Manual de Capacitación en Carpintería de Aluminio* de ALUAR y el manual de FREMAP.

---

## 7. Modista / corte y confección (6 temas)

**Cubre hoy.** Tallas y medidas, seguridad, materiales (telas, hilos y avíos), herramientas (domésticas, industriales, overlock, moldes), técnicas (patronaje, costuras y acabados en un solo tema de 602 palabras) y diagnóstico. Es el oficio más delgado del lote en técnicas.

**Lagunas.**
- Las técnicas son un único tema para lo que la planificación (líneas 720-746) lista como 5 nodos.
- La sección 7, **etiquetado de composición textil**, no tiene tema.
- Sin `cuestionario.md` en ningún tema.

| Carpeta propuesta | Prerrequisitos | Contenido | Prio | Marca |
|---|---|---|---|---|
| `patronaje-basico` | `fundamentos-confeccion` | Trazado de base de falda, pantalón y blusa; transformaciones. | A | PLAN (hoy mezclado con técnicas) |
| `corte-de-tela` | `patronaje-basico`, `materiales-confeccion` | Hilo de la tela, encaje de moldes, tizado y margen de costura. | A | PLAN |
| `costuras-basicas-y-ensamble` | `corte-de-tela` | Tipos de costura y ensamble de prenda. | A | PLAN |
| `acabados-de-prenda` | `costuras-basicas-y-ensamble` | Dobladillos, cuellos, ojales, cierres y bolsillos. | A | PLAN |
| `maquina-de-coser-ajuste-y-mantenimiento` | `herramientas-confeccion` | Tensión de hilo, agujas, limpieza y fallas típicas. | M | NUEVO |
| `entretelas-e-interfaces` | `materiales-confeccion` | Tipos de entretela y dónde se aplican. | M | PLAN (sección 3) |
| `etiquetado-de-composicion-textil` | `materiales-confeccion` | Etiquetado obligatorio, cuidados y símbolos. | M | PLAN (sección 7) |
| `confeccion-industrial-y-produccion-en-serie` | `costuras-basicas-y-ensamble` | Del molde único a la serie; tiempos y calidad. | B | PLAN (fuentes SENATI/IPACE) |

**Cuestionario:** opcional, por la regla del oficio manual. Fuente: SENA Colombia (patronaje, ensamble de blusa), SENATI/IPACE, MINEDU y Fundación Crear Puentes.

---

## 8. Tornero (8 temas)

**Cubre hoy.** Fundamentos, seguridad, materiales (936 palabras, el más profundo), herramientas de corte y sujeción, técnicas (**609 palabras para cilindrado, refrentado, roscado y taladrado juntos**), cálculo, planos y tolerancias, diagnóstico (pieza fuera de medida, acabado, vibración).

**Lagunas.** `tecnicas-torneria` es el cuello de botella: la planificación (líneas 779-808) tiene un nodo por operación. Los ángulos de herramientas ya tienen tema; el protocolo de trabajo (sección 9) se solapa con seguridad.

| Carpeta propuesta | Prerrequisitos | Contenido | Prio | Marca |
|---|---|---|---|---|
| `cilindrado-y-refrentado` | `tecnicas-torneria`, `herramientas-torneria` | Pasadas de desbaste y acabado, medición intermedia. | A | PLAN (hoy 2 menciones) |
| `roscado-en-torno` | `cilindrado-y-refrentado`, `calculo-torneria` | Pasos de rosca, engranaje, tallado y comprobación. | A | PLAN (hoy 3 menciones) |
| `taladrado-y-mandrinado` | `cilindrado-y-refrentado` | Taladro con contrapunta, escariado, mandrinado. | M | PLAN (taladrado) |
| `torneado-cónico-y-operaciones-especiales` | `cilindrado-y-refrentado` | Conos, tronzado, moleteado, ranurado. | M | NUEVO |
| `avance-y-ajuste-de-velocidades` | `calculo-torneria` | Avance por vuelta, profundidad de pasada, tablas de corte. | M | PLAN (avance-del-torno, ajuste-de-velocidades) |
| `acabado-superficial-y-metrologia` | `lectura-de-planos-torneria` | Rugosidad, calibre, micrómetro y mediciones por pieza. | A | NUEVO (diagnóstico lo menciona, no hay tema de medición) |
| `refrigeracion-y-lubricacion-de-corte` | `materiales-torneria` | Fluidos de corte y su manejo seguro. | M | NUEVO |
| `mantenimiento-del-torno` | `fundamentos-torneria` | Engrase, juegos, nivelación y detección de desgaste. | B | NUEVO |
| `protocolo-de-trabajo-en-tornos` | `seguridad-torneria` | Checklist de arranque y parada; se unifica con ACHS. | B | PLAN (sección 9) |

**Cuestionario:** opcional (oficio de taller). Fuente: *Maestro Tornero* (CEAC), *Curso Operador Básico de Torno Paralelo* y las normas ACHS.

---

## 9. Cocina / Gastronomía (Ruta A de 6 temas más Ruta B)

**Cubre hoy.**
- **Ruta A (6 temas):** fundamentos, higiene y seguridad, técnicas de cocción, materia prima, cálculo (escalado, merma, costeo) y diagnóstico. Son los de menor extensión del lote (447 a 684 palabras).
- **Ruta B:** cadena harina → brioche → receta final más unas 144 recetas en 12 categorías.

**Lagunas.**
- **El README del catálogo está desactualizado.** Dice «pendiente» y la tabla de la planificación habla de «~148 recetas pendientes», pero el árbol ya trae unas 144 recetas. Falta reconciliar el estado.
- En la Ruta A, la planificación pide **un tema por cada concepto** de higiene (manipulación, cadena de frío, alérgenos, HACCP) y de materia prima (cortes, conservación, temporada). Hoy son 2 temas de 4 conceptos cada uno.
- Faltan gestión de cocina (inventario, costos de compra) y los cuestionarios de la Ruta A (solo el diagnóstico tiene uno).

| Carpeta propuesta | Prerrequisitos | Contenido | Prio | Marca |
|---|---|---|---|---|
| `manipulacion-de-alimentos-y-cadena-de-frio` | `fundamentos-cocina` | Contaminación cruzada, temperaturas y rotación de stock. | A | PLAN (hoy fundido en higiene) |
| `alergenos-en-cocina` | `manipulacion-de-alimentos-y-cadena-de-frio` | Los 14 alérgenos mayores y la comunicación al cliente. | A | PLAN |
| `haccp-basico` | `alergenos-en-cocina` | Peligros, puntos críticos de control, registros (compartido con Procesador de Alimentos). | A | PLAN |
| `metodos-de-coccion-y-puntos-de-coccion` | `haccp-basico` | Separar húmedo, seco y combinado, con puntos de cocción. | M | PLAN (hoy 1 tema) |
| `cortes-de-cocina` | `tecnicas-de-coccion` | Cortes de verdura y carne con práctica filmada. | M | PLAN (hoy fundido) |
| `tecnicas-de-conservacion` | `cortes-de-cocina` | Frío, salado, escabeche, envasado al vacío. | M | PLAN (hoy fundido) |
| `compras-inventario-y-gestion-de-cocina` | `calculo-cocina` | Fichas técnicas, stock, proveedores y control de mermas. | M | NUEVO |
| `maridaje-y-servicio` | `tecnicas-de-coccion` | Emplatado, orden de servicio, bebidas. | B | NUEVO |
| (reconciliar) `catalogo-recetas/README.md` | — | Actualizar estado real y marcar por categoría cuántas recetas hay y cuántas faltan para los 150. | A | NUEVO |

**Cuestionario:** la Ruta A podría llevarlo en los temas técnicos (hoy solo el diagnóstico tiene). La Ruta B no lleva cuestionario: se entrega por evidencia y tutor. Fuente: currículas de gastronomía citadas en el catálogo (Instituto Campechano, UABJO, UCASAL, Cocineros Patagónicos).

---

## Resumen de volumen

| Oficio | Temas nuevos propuestos | De la planificación | Nuevos detectados |
|---|---:|---:|---:|
| Backend | 5 | 0 | 5 |
| Audiovisual | 8 | 4 | 4 |
| Diseño gráfico | 7 | 1 | 6 |
| Mecanografía | 4 | 1 | 3 |
| Jardinero | 14 | 11 | 3 |
| Carpintero de aluminio | 7 | 6 | 1 |
| Modista | 8 | 6 | 2 |
| Tornero | 9 | 5 | 4 |
| Cocina/Gastronomía | 9 | 6 | 3 |
| **Total** | **71** | **40** | **31** |

## Orden de ataque sugerido

1. **Los enlaces rotos de Diseño gráfico:** `tipografia` y `teoria-del-color-y-paletas`.
2. **Los temas fundidos de los cuatro oficios manuales** (Jardinero, Aluminero, Modista, Tornero), empezando por las técnicas y las operaciones concretas.
3. **El cierre por casos** de Backend, Audiovisual, Diseño gráfico y Mecanografía.
4. **La higiene de Cocina** (alérgenos, HACCP) y la reconciliación del catálogo de recetas.
