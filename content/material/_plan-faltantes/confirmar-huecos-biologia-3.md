# Biología 3 (piel y sentidos): qué se hizo y qué confirmar

Se crearon dos temas en `content/material/biologia/`, cada uno con `teoria.md`, `cuestionario.md` (23 preguntas) y fila en `dependencias.md` («decisión de Claude, no pedida», sin ID en `troncos.md`):
- `sistema-tegumentario-piel-y-termorregulacion` (teoría de unas 780 palabras, algo sobre el rango; incluye una pregunta parametrizada de conversión Celsius–Fahrenheit).
- `los-sentidos-vista-oido-olfato-gusto-y-tacto` (unas 700 palabras; una pregunta parametrizada de distancia de una tormenta con 340 m/s).

Los 2 cuestionarios dan 0 FAIL en `validar_lote.ts` y 0 problemas en `auditar_preguntas.ts`; todas las preguntas con opciones llevan `tipo: mc`; los enlaces entre temas existen.

## Verificado por búsqueda web (resultados de buscadores, no páginas oficiales)
- La piel tiene tres capas (epidermis, dermis e hipodermis); la hipodermis actúa como aislante; los melanocitos producen la melanina, con función de protección solar y de color.
- La retina tiene bastones y conos (las cifras varían según el estudio: del orden de 100 millones de bastones y unos 6 millones de conos); los receptores auditivos son células ciliadas cocleares; los receptores del olfato son neuronas del epitelio olfatorio; los del gusto están en las papilas gustativas.

## Sin fuente (de conocimiento general), a contrastar
- Los cinco sabores básicos (dulce, salado, ácido, amargo, umami) y la relación umami–glutamato.
- Los tres huesecillos (martillo, yunque, estribo); que las células ciliadas no se regeneran en humanos.
- La síntesis de vitamina D iniciada por la radiación UV; la piel de gallina como resto del mecanismo aislante en mamíferos con mucho pelo.
- Que el sudor es sobre todo agua con sales; la vasodilatación/vasoconstricción y los escalofríos como mecanismos de termorregulación.
- La velocidad del sonido de 340 m/s es una aproximación didáctica.

## Decisiones tomadas y para Javier
- No se da una cifra para la renovación de la epidermis porque las fuentes difieren (alrededor de 24 días frente a unos dos meses, según qué proceso midan); el texto dice «semanas».
- No se da una cifra de tipos de receptores olfativos (el texto dice «cientos»).
- Fotoprotección: solo medidas generales y derivación a un profesional; sin tratamientos ni cuidados dermatológicos.
- Los dos temas profundizan `sistemas-cuerpo-humano` y se enlazan a `homeostasis-y-regulacion`, `sistema-nervioso-neurona-sinapsis`, `sistema-inmunitario-defensas-y-memoria-inmune` y a Física (`ojo-humano-instrumento-optico`, `sonido-timbre-altura-intensidad`, `decibeles-richter`). Si se renombran esas carpetas hay que actualizar los enlaces.
- Con estos dos, los sistemas del cuerpo humano quedan cubiertos; no hay tema propio de reproducción humana (ver `esi/anatomia-y-pubertad`).
