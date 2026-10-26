# A confirmar — oficios Jardinero, Carpintero de aluminio, Modista y Tornero

Generado al ejecutar `oficios-a.md` para estos cuatro oficios (38 temas). No hay libros ni exámenes jefe para oficios, y no se crearon.

## Decisiones de producto tomadas por Claude (corregir si no coinciden)
- **Cuestionarios:** solo los 8 temas técnicos de Jardinero llevan cuestionario (sustratos, abonos, fitosanitarios, riego, multiplicación, poda, praderas, cálculo). El resto de Jardinero, y todo Aluminio, Modista y Tornero, queda solo con `teoria.md`, por la regla «cuestionario no obligatorio» de los oficios de obra y taller.
- **Dependencias:** todas deducidas de `oficios-a.md`; ninguna tiene ID en `troncos.md`.
- **Mecanizado compartido con Electromecánico:** el contenido de torno quedó en `tornero/` (cilindrado, roscado, taladrado, cónico, avance, metrología, refrigeración). El tema `mecanizado-torno-fresadora-cnc` de Electromecánico debería enlazar a estos y limitarse a fresadora y CNC. Fresadora y CNC no se escribieron (no estaban en `oficios-a.md`).
- **Prioridad B incluidas:** compostaje, mantenimiento del torno, protocolo de trabajo y confección industrial se escribieron igual.

## Datos sin verificar con fuente oficial
**Tornero**
- Ley 24.051 (residuos peligrosos), Ley 19.587 y Decreto 351/79: citadas de memoria.
- Valores de velocidad de corte, avance y paso: no se dan cifras; solo método. Las tablas de corte deben salir del fabricante.
- Las normas ACHS citadas en el plan no están en el repo.

**Carpintero de aluminio**
- Normas IRAM 11507 (requisitos y clasificación), 11523 (aire), 11590 (viento), 11591 (agua): el vínculo norma-ensayo salió de un pliego de licitación público encontrado por búsqueda web, no de IRAM. Verificar títulos, números y vigencia en IRAM antes de publicar.
- Norma IRAM de vidrios de seguridad y reglas por municipio: no se citó número; verificar.
- Se usó la distinción siliconas neutras/ácidas y las funciones de selladores y espumas: conocimiento general, sin fuente del repo.

**Modista**
- Etiquetado textil: la búsqueda web confirmó la Resolución 62/2018 (reglamento técnico), el Decreto 274/2019 (lealtad comercial) y la DJCP de la Resolución 244/2019, pero **no** si la DJCP sigue vigente ni el detalle de la etiqueta de cuidado. El tema no cita números de resolución; verificar el texto vigente en el Boletín Oficial.
- Símbolos de cuidado: norma internacional no identificada por número.
- Condiciones laborales del sector: mención genérica, sin cifras.

**Jardinero**
- Ley 27.279 (envases vacíos de fitosanitarios): confirmada por búsqueda web; el procedimiento exacto de triple lavado (IRAM 12.069 según un documento del Ministerio de Agricultura) no se detalló.
- Ley 3.263 (arbolado de la Ciudad de Buenos Aires): confirmada en general (causales de extracción y cartel previo); los trámites de poda y las multas no se verificaron en fuente oficial.
- Ley 26.331 (bosques nativos), bandas de color toxicológicas (roja, amarilla, azul, verde) y clasificación NPK: de memoria.
- Épocas de poda, siembra y estacas por especie: reglas generales; ajustar por región.

## Para decidir
- ¿Escribir fresadora y CNC como temas propios de Tornero o dejarlos solo en Electromecánico?
- ¿Cuestionarios para los temas de Aluminio, Modista y Tornero, a pesar de la regla de oficios manuales?
- ¿Los temas de Jardinero que no llevaron cuestionario (fisiología, identificación, motosierra, diseño, normativa, compostaje) deberían llevarlo?
- Normativa de arbolado: ¿se amplía con ordenanzas de otras ciudades además de la Ciudad de Buenos Aires?
