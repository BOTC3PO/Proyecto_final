# A confirmar: Backend, Audiovisual, Diseño gráfico y Mecanografía

Temas creados a partir de `oficios-a.md` (24 temas, entre 22 y 23 preguntas validadas cada uno, salvo el estado de validación indicado abajo). No se crearon libros ni exámenes jefe (no existen para oficios).

## Decisiones tuyas
- Todos los temas son «decisión de Claude, no pedida» en `oficios/dependencias.md`: las dependencias son deducidas.
- **Cuestionarios:** estas cuatro rutas son finales de ruta digitales, que según la planificación sí llevan cuestionario (20 o más preguntas). Si preferís que algún tema de baja prioridad (`qwerty-portugues`, `escritura-en-celular-y-tablet`) no tenga cuestionario, avisá.
- `qwerty-portugues` y `escritura-en-celular-y-tablet` figuraban como baja prioridad / «variante rara»: se escribieron igual porque pediste completar los planes.
- **Backend:** `acceso-a-datos-desde-el-backend` depende de `../sql/select-y-where/` y `../sql/transacciones-sql/`; se supuso que esas rutas son las que corresponden.
- **Diseño gráfico:** `tipografia` y `teoria-del-color-y-paletas` cierran los enlaces rotos de `diseño/jerarquia-visual-e-informacion`, que remitía a «tipografia» y «colores». Ese tema de `diseño/` todavía dice esos nombres a secas; no lo toqué (fuera de mi carpeta). Conviene actualizar el enlace.
- **Metadatos:** la materia `diseno_grafico` en los cuestionarios usa guion bajo; el resto de las rutas usa el nombre de la carpeta.

## Datos a verificar contra fuente oficial
Confirmados por búsqueda web: 3 mm de sangrado (rango 3–5 mm según imprenta), 300 ppp, CMYK, PDF/X según imprenta, referencias de volumen (EBU R128, aprox. −23 LUFS; plataformas aprox. −14 LUFS, YouTube solo baja), ç en la distribución brasileña. El resto sale de conocimiento propio:

- **Audiovisual**
  - Frecuencias orientativas de ecualización de voz (corte pasa-altos 80–100 Hz; claridad 2–5 kHz; sibilancias sobre 5 kHz).
  - Regla de los 180 grados (obturación ≈ el doble de los fps, p. ej. 1/50 para 25 fps).
  - Longitud de línea de subtítulos (35–42 caracteres, dos líneas) y velocidad de lectura.
  - Que la mayoría de las plataformas aceptan H.264/AAC en MP4; las recomendaciones de cada plataforma cambian.
  - Distancias de micrófono (unos 20–30 cm según el micrófono).
  - Nivel de pico de grabación (−12 a −6 dBFS).
- **Backend:** buenas prácticas generales (consultas parametrizadas, niveles de log, backoff exponencial, idempotencia, percentiles de latencia). No hay cifras ni versiones puntuales.
- **Diseño gráfico**
  - Interlineado 120–150 %, línea de 45–75 caracteres, 16 px de base en pantalla.
  - Límite de tinta total y negro 100 % K en texto chico (la búsqueda indica solo el criterio general).
  - Razones de contraste 4,5:1 y 3:1 (WCAG).
  - Regla 60-30-10.
- **Mecanografía**
  - Ubicación de las teclas muertas y de los símbolos con AltGr en teclados latinoamericano, español y portugués: se dejó en términos generales a propósito.
  - La disposición de la distribución de Portugal no se verificó en detalle.
  - Marca en relieve en el 5 del bloque numérico (es lo habitual, no universal).

## Pendiente
- Si algún cuestionario figura abajo como no validado, hay que correr `python3 content/material/_qa_tools/validar_cuestionario.py <ruta>`.
- Las rutas con fuentes de libros (`tareas_pendientes/libros/oficios/`) no están en este checkout: los temas no citan libros.
