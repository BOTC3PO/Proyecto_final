# Auditoría del temario: comprensión y categorización

Fecha: 2026-10-22. Se midió sobre el manifiesto del importador (2.133 temas, 221 exámenes jefe, 2.609 dependencias). Los números salen del contenido real; las recomendaciones son propuestas, no cambios hechos.

## Lo que está bien
- 2.133 temas en carpetas = 2.133 filas de dependencias; sin ciclos; 0 errores en `verificar_examen_jefe.py`.
- Toda materia tiene teoría y práctica (salvo 228 temas de Oficios, que no se evalúan por diseño).
- Los vecinos de casi todos los temas están en su propia materia: solo 6 casos de categorización dudosa por vecindad (abajo).

## Problemas para entender el temario

1. **Cadenas de prerrequisitos muy largas.** La mediana de un tema es de 9 módulos previos, pero el 10 % más exigente pide 45 o más (151 temas piden 50 o más; el máximo es 104, en Ciencia de Materiales). Como el candado exige completarlos, el final de esas ramas es prácticamente inalcanzable sin desbloqueo manual. Materias más afectadas: Materiales, Ingeniería, Historia, Oficios, Historia profunda, Derecho.
   - Causa: dependencias lineales (cada tema pide al anterior) más cruces con otras materias, y la cadena transitiva se acumula.
   - Propuesta: que cada tema declare solo lo que necesita directamente; en Historia, pedir el período anterior pero no toda la línea; acotar los cruces entre materias a un tema "puente".
2. **Los exámenes jefe mezclan temas sin relación y su título no los describe.** En 137 de 208 (65 %) el título nombra menos de 6 de cada 10 de sus temas. Ejemplos: «Domina Probabilidad y Potencias» incluye Logaritmos; «Maestro de Semejanza y Pitágoras» incluye Test de hipótesis; «Maestro de las Operaciones Básicas» incluye Sucesiones, Dinero y Hora y reloj; «Maestro de Extinciones y Climas Antiguos» incluye Conquista de Tierra Firme. Causa: los grupos se arman por orden de prerrequisitos (cortes de unos 5 temas), no por afinidad temática.
   - Propuesta: agrupar por afinidad dentro de cada rama y renombrar el logro con lo que realmente cubre, o describir en la página del examen qué temas abarca (la web ya lista la composición).
3. **El campo "nivel" no informa.** 1.272 temas figuran "básico" (también temas avanzados de Matemática), 228 no tienen nivel y 51 prerrequisitos tienen un nivel más alto que el tema que los necesita (p. ej. «Cadenas y redes tróficas», intermedio, es previo de «Ciclos biogeoquímicos», básico). El alumno no puede saber la dificultad de un tema.
4. **Títulos repetidos o ambiguos:** «Géneros periodísticos» (Lengua y Comunicación), «Funciones» (Matemática e Informática), «América Latina» (Geografía e Historia), «Diagnóstico de scripts por casos» (Bash y PowerShell). 16 títulos empiezan en minúscula.

## Posibles problemas de categorización
- **Oficios mezcla tres familias**: oficios manuales (construcción, mecánica, cocina, textil, jardinería…), roles digitales (backend, bash, SQL, DBA, DevOps, ciberseguridad, redes, QA, frontend, PowerShell, PSeInt, Scratch, ciencia de datos) y servicios (guía turístico). Son 43 "oficios" y unos 150 temas son de tecnología, junto a una materia Informática. Propuesta: no mover contenido; agrupar Oficios en secciones en el menú (manuales, digitales, servicios).
- **Salud, Educación Física, ESI y Vida cotidiana se superponen**: primeros auxilios (Salud y Ed. Física), prevención de adicciones y consumos problemáticos (Salud y Ed. Física), nutrición/etiquetado (Salud, Ed. Física y 3 temas de Vida cotidiana), gestión del tiempo (Vida cotidiana y Aprendizaje). Propuesta: decidir un solo dueño por tema o dejarlos en ambos según el criterio ya acordado (el solape depende de desde dónde se mire el tema), pero enlazarlos.
- **Vida cotidiana es un cajón de sastre**: consumo (contratos, garantías, descuentos), ciencia de la cocina (Maillard, proteínas, maduración), textiles/lavado y distancia de frenado. Su nombre no dice qué hay; algunos temas encajarían en Economía, Química o Física.
- **Historia vs. Historia profunda**: «Historia profunda» suena a una versión más honda de «Historia», pero contiene historia universal desde el Big Bang, y «Historia» es historia argentina e historiografía. Propuesta: renombrar la segunda (p. ej. «Historia universal») o explicarlo en la portada de cada una.
- **Casos por vecindad** (casi todos los vecinos del tema están en otra materia): «Rosetones y simetría» (Arte, vecinos de Matemática), «Permisos y usuarios» y «Unidades de almacenamiento» (Informática, vecinos de Oficios), «Sistema de salud» (Cívica, vecinos de Economía), «Recibo de sueldo» (Economía, vecinos de Matemática), «Marchas patrióticas» (Cívica, vecinos de Historia). No son errores: el tema pertenece a una materia y se apoya en otra.
- Cívica incluye educación vial (3 temas), sistema de salud, impuestos y encuestas electorales. Es defendible (ciudadanía), pero no obvio.

## Corregido durante la auditoría
- **Error del exportador**: leía siempre la segunda columna de `dependencias.md` y Matemática usa una tabla de cuatro columnas (Tema, Nodo, Depende de, Por qué). Se perdían 202 dependencias y 101 temas de Matemática quedaban aislados. Ahora cada tabla se lee por su encabezado (2.407 → 2.609 dependencias).
