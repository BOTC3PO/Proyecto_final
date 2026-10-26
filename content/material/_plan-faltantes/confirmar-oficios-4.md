# A confirmar — Albañil, Carpintero, Electricista, Gasista y Plomero

Generado al ejecutar `oficios-b.md` para estos cinco oficios (19 temas nuevos, solo `teoria.md`, más 6 preguntas nuevas en cada `diagnostico-*`). Lo que sigue **no se pudo verificar** o **necesita una decisión de Javier**. Las búsquedas web solo confirmaron lo marcado como "verificado".

## Verificado (por búsqueda web, con matices)
- La **AEA 90364** es la reglamentación de instalaciones eléctricas en inmuebles; las categorías de habilitación del electricista **varían por jurisdicción** (se vieron Córdoba/ERSeP, CABA/COPIME y una ordenanza municipal con categorías A/B/C; las fuentes no coinciden entre sí).
- El **Decreto 911/96** (higiene y seguridad en construcción), el **legajo técnico** (art. 20, cap. 4), la **Res. SRT 231/96** y la **Res. SRT 62/23** (trabajos en altura) existen. No se pudo leer el articulado sobre andamios.
- Para gas, la matrícula la administran las **distribuidoras** bajo regulación del ENARGAS y la **Res. ENARGAS 219/2022** creó las figuras de montador y de auxiliar. Una fuente de baja confiabilidad dice que esa resolución fue derogada por la 21/2025 y que la NAG-200 está en actualización por la 753/2025: **no verificado**.

## Decisiones de Javier
1. **Gasista**: la lección de normativa **no enumera categorías ni horas** de matrícula porque las fuentes se contradicen (3ª de 404 h, 2ª de 577 h, 1ª con título universitario según una guía; otra atribuye las categorías a la NAG-225). ¿Querés que se agreguen cuando se confirmen en el ENARGAS?
2. **Gasista**: la prueba de hermeticidad se escribió **sin presiones ni tiempos** (los fija la NAG-200). ¿Se prefiere dejarlo así o citar los valores de la versión vigente?
3. **Carpintero**: se afirma que **no hay matrícula obligatoria nacional** para carpintero de muebles/aberturas (así lo pedía el diseño en `OF4 §8`). No se verificó contra una fuente legal; conviene confirmarlo y revisar si hay requisitos municipales de habilitación de taller.
4. **Electricista**: los dos temas compartidos con Electromecánico (`electricidad-trifasica-y-baja-tension-industrial` y `instalaciones-especiales-motores-y-bombas`) quedaron en `electricista/`. El agente de Electromecánico debe **referenciarlos**, no reescribirlos.
5. **Plomero**: la lección de normativa es **general** (no hay una norma nacional única). ¿Se quiere una versión por jurisdicción (por ejemplo AySA/CABA/PBA)?
6. **Ninguno de los 19 temas tiene ID en `troncos.md`**: solo fila en `oficios/dependencias.md`. ¿Se agregan nodos al grafo?

## Datos sin verificar (escritos de memoria; revisar contra la fuente)
### Albañil
- **IRAM 11605** (valores máximos de transmitancia térmica) se menciona solo como "normas IRAM de acondicionamiento térmico", **sin número**. Las normas IRAM 11556 y 11561 del plan (bloques de hormigón) **no se citan** por no poder verificarlas.
- Medida de bloque **19 × 19 × 39 cm** como "frecuente".
- Que los bloques de hormigón **no se mojan en exceso** antes de asentarlos y que en cada hilada las juntas se traban media pieza.
- **Curado**: no se da un número de días (el reglamento CIRSOC y el pliego lo fijan). Resistencia a los **28 días** como convención.
- **Ley 19.587**, **Decreto 911/96** y **Res. SRT 62/2023** se citan; falta revisar si hubo cambios posteriores. La **ART** (Ley de Riesgos del Trabajo) se menciona sin número.
- Equivalencias de títulos: arquitecto, ingeniero civil y **maestro mayor de obra** como profesionales que firman, según incumbencias y código local: verificar por jurisdicción.

### Carpintero
- **Ley 24.240** (Defensa del Consumidor) y **Ley 26.331** (bosques nativos) citadas de memoria.
- Punto de saturación de fibras **25–30 %** y humedad de equilibrio interior de **10–12 %** (orientativos).
- Obligaciones fiscales y habilitación de taller: dichas en general, sin norma.

### Electricista
- Colores de conductores (**marrón, negro y rojo** fases; **celeste** neutro; **verde-amarillo** tierra) y sistema **3 × 380/220 V, 50 Hz**: verificar contra AEA/IRAM vigentes.
- Que el **Decreto 351/79** incluye exigencias para instalaciones eléctricas.
- Clasificación de circuitos (iluminación de uso general, tomacorrientes de uso general y de uso especial): verificar los nombres y las secciones mínimas en la AEA 90364 vigente (no se citan secciones).
- Relación aproximada de corriente de arranque estrella-triángulo (≈ 1/3 del directo).

### Gasista
- **ENARGAS**, **Ley 24.076** y **NAG-200** ("disposiciones y normas mínimas de seguridad para instalaciones domiciliarias de gas"): redacción de memoria.
- Que el **calefón/termotanque de tiro natural no se puede instalar en baños o dormitorios** (se dice en general, sin artículo).
- Vida útil de los **flexibles de conexión** y exigencia de **sello de certificación** de los artefactos.
- **Teléfono de emergencias de gas**: no se menciona número a propósito.

### Plomero
- **AySA** como prestadora del AMBA; la afirmación de que en algunas jurisdicciones **conviven registros de la prestadora y del gobierno local** (una fuente comercial dice que pasa en CABA; no se pudo confirmar oficialmente).
- La **guía del ERAS** (Ente Regulador de Agua y Saneamiento) sobre instalaciones sanitarias domiciliarias apareció en la búsqueda pero no se pudo leer: las pendientes mínimas, diámetros y ventilaciones **no se citan**.
- Temperaturas de acumulación y de entrega del agua caliente (riesgo de Legionella y quemaduras) **no se dan en números**.

## Pendientes de producción
- Los 19 temas **no tienen cuestionario propio** (decisión de Javier, 2026-09-15: solo `teoria.md` y evaluación concentrada en `diagnostico-*`). Se agregaron 6 preguntas por oficio a los diagnósticos (de 18-20 a 24-26).
- No existen libros ni exámenes jefe de oficios: no se crearon.
- No se generó audio.
