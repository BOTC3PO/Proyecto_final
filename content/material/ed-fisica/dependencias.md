# Educación Física — Dependencias entre temas

> Ver también [`../PROCEDIMIENTO.md`](../PROCEDIMIENTO.md) — el
> procedimiento completo (paso a paso, gotchas del DSL) que sigue todo
> tema nuevo, en cualquiera de las materias de `material/`.

Materia nueva, creada en esta sesión (confirmado con Javier): el nodo
`EF1` de `troncos.md` ("Frecuencia cardíaca en reposo y su promedio",
tag `(Ed. Física)` en `lista-temas-plana.md`) no es un caso suelto —
la lista plana también tiene "Fisiología del ejercicio (Ed. Física)"
(línea 409) más adelante. Mismo criterio que Geografía, Biología, ESI
o Cívica: un tag de materia real implica carpeta propia.

**Mantener esta tabla al día**: igual que en las otras materias, cada
carpeta de tema nueva agrega su fila antes de escribir teoría/cuestionario.

| Tema (carpeta) | Depende de | Por qué |
|---|---|---|
| `frecuencia-cardiaca-reposo/` | `../matematica/media-mediana-y-moda/` | Nodo `EF1` de `troncos.md` (`D4 --> EF1`). Calcular y comparar la frecuencia cardíaca en reposo de un grupo (o de una misma persona a lo largo del tiempo) presupone ya saber calcular un promedio y qué significa — es la aplicación directa del vocabulario estadístico a fisiología del ejercicio. |
| `fisiologia-del-ejercicio/` | `../biologia/sistemas-cuerpo-humano/` | Nodo `EF2` de `troncos.md` (`BK --> EF2`). Entender cómo responde el cuerpo al ejercicio (frecuencia cardíaca, respiración, temperatura) presupone ya conocer los sistemas del cuerpo humano que responden. |
| `planificacion-progresion-volumen/` | `./fisiologia-del-ejercicio/` | Nodos `EF3a/b/c` de `troncos.md` (`EF2 --> EF3a --> EF3b`, `EF2 --> EF3c`). Un solo módulo (volumen de entrenamiento, regla del 10%, recomendación OMS de 150 min/semana) — los 3 son la misma idea de "cuánto entrenar" vista desde 3 ángulos. |
| `frecuencia-cardiaca-maxima-zonas/` | `./fisiologia-del-ejercicio/`, `./frecuencia-cardiaca-reposo/` | Nodo `EF10` de `troncos.md` (`EF2 --> EF10`). Las zonas de entrenamiento se calculan a partir de la frecuencia cardíaca máxima y en relación a la de reposo ya construida. |
| `imc-indice-masa-corporal/` | `../matematica/potencias/` | Nodo `EF11` de `troncos.md` (`N12P --> EF11`). El IMC es peso dividido por la altura al cuadrado — presupone saber elevar al cuadrado. |
| `prevencion-cuidado-rice-calentamiento-ergonomia/` | `./fisiologia-del-ejercicio/` | Nodos `EF4a-e` de `troncos.md` (`EF2 --> EF4a/b/c/d/e --> EF4`). Un solo módulo (RICE, entrada en calor, sobreentrenamiento, ergonomía, sueño) — 5 sub-ejes de la misma idea de "cuidar el cuerpo antes/después de entrenar". |
| `primeros-auxilios-rcp-dea/` | `./prevencion-cuidado-rice-calentamiento-ergonomia/` | Nodos `EF9a-e` de `troncos.md` (`EF4 --> EF9a/b/c/d/e`). Un solo módulo (RCP, DEA, atragantamiento, quemaduras, golpe de calor) — situaciones de emergencia, distintas de la prevención de rutina ya vista en `EF4`. |
| `prevencion-adicciones-ley-26586/` | `./prevencion-cuidado-rice-calentamiento-ergonomia/`, `../biologia/sistema-endocrino-hormonas-glandulas/` | Nodo `EF12` de `troncos.md` (`EF4 --> EF12`, `BKEP --> EF12`). El MAPA también marca `PS8P`/`PS9cP` (Sesgos cognitivos, Salud mental — Psicología) como prerrequisitos; se omiten porque `material/psicologia/` no existe todavía en este repo (mismo criterio que Filosofía en otras materias) — queda anotado para cuando exista esa carpeta. |
| `politicas-de-drogas/` | `./prevencion-adicciones-ley-26586/` | Nodos `EF13a/b/c` de `troncos.md` (`EF12 --> EF13a/b/c`). Un solo módulo, 3 corrientes hermanas (prohibicionismo, reducción de daños, despenalización/legalización regulada) — mismo tratamiento de neutralidad que `conservacionismo/`/`ambientalismo-liberal/`/etc. en Geografía: identificar, no evaluar. |
| `alfabetizacion-corporal/` | `./fisiologia-del-ejercicio/` | Nodos `EF5a/b/c` de `troncos.md` (`EF2 --> EF5a/b/c`). Un solo módulo (grupos musculares, sistemas energéticos, mitos del entrenamiento) — vocabulario de base para entender cómo entrena el cuerpo. |
| `deportes-medidas-cancha-superficies/` | `../matematica/perimetro-y-area/` | Nodo `EF6` de `troncos.md` (`M3P --> EF6`). Comparar medidas de cancha entre deportes es una aplicación directa (paramétrica) de perímetro y área ya construidos. |
| `deportes-jugadores-posiciones-puntaje/` | `./deportes-medidas-cancha-superficies/` | Nodo `EF7` de `troncos.md` (`EF6 --> EF7`). Una vez conocida la cancha, tiene sentido ubicar en ella a los jugadores y sus posiciones. |
| `deportes-origen-historico/` | `./deportes-jugadores-posiciones-puntaje/` | Nodo `EF8` de `troncos.md` (`EF7 --> EF8`). Cierra la tríada de deportes: de la cancha, a las reglas, al origen histórico — cultura general gradable. |
| `juegos-olimpicos/` | `deportes-origen-historico/` | Nodo `EF8B` (`EF8 --> EF8B`, 2026-08-13). Institución olímpica en sí, distinta de "quién inventó cada deporte" que ya cubre `EF8`. |
| `el-pato/` | `deportes-origen-historico/` | Nodo `EF8C` (`EF8 --> EF8C`, 2026-08-13), hermano de `EF8B`. Deporte nacional argentino por decreto desde 1953. |
| `deporte-como-fenomeno-cultural-argentino/` | `deportes-origen-historico/` | Nodo `EF8D` (`EF8 --> EF8D`, 2026-08-13), hermano de `EF8B`/`EF8C`. Ángulo sociológico (Archetti), distinto del histórico-fáctico. |
| `capacidades-fisicas-fuerza-resistencia-flexibilidad-velocidad/` | `./fisiologia-del-ejercicio/`, `./alfabetizacion-corporal/` | Tema propuesto en `../_plan-faltantes/HUECOS-POR-TITULOS.md` (sin ID en `troncos.md`). Las capacidades condicionales se apoyan en la fisiología del ejercicio y en los sistemas energéticos. Decisión de Claude, no pedida: dependencia deducida. |
| `reglamento-y-fundamentos-del-futbol/` | `./deportes-jugadores-posiciones-puntaje/` | Tema propuesto en `../_plan-faltantes/HUECOS-POR-TITULOS.md` (sin ID en `troncos.md`). Una vez conocidas la cancha y las posiciones, se ven las reglas del juego. Decisión de Claude, no pedida: dependencia deducida. |
| `reglamento-y-fundamentos-del-basquet/` | `./deportes-jugadores-posiciones-puntaje/` | Tema propuesto en `../_plan-faltantes/HUECOS-POR-TITULOS.md` (sin ID en `troncos.md`). Una vez conocidas la cancha y las posiciones, se ven las reglas. Decisión de Claude, no pedida: dependencia deducida. |
| `reglamento-y-fundamentos-del-voley/` | `./deportes-jugadores-posiciones-puntaje/` | Tema propuesto en `../_plan-faltantes/HUECOS-POR-TITULOS.md` (sin ID en `troncos.md`). Una vez conocidas la cancha, las posiciones y el líbero, se ven las reglas. Decisión de Claude, no pedida: dependencia deducida. |
| `reglamento-y-fundamentos-del-handball/` | `./deportes-jugadores-posiciones-puntaje/` | Tema propuesto en `../_plan-faltantes/HUECOS-POR-TITULOS.md` (sin ID en `troncos.md`). Una vez conocidas la cancha y las posiciones, se ven las reglas. Decisión de Claude, no pedida: dependencia deducida. |
| `nutricion-e-hidratacion-en-la-actividad-fisica/` | `./fisiologia-del-ejercicio/` | Tema propuesto en `../_plan-faltantes/HUECOS-POR-TITULOS.md` (sin ID en `troncos.md`). Cruza con `../salud/alimentacion-saludable-y-etiquetado/` y `../salud/trastornos-alimentarios/`. Divulgación general, sin dietas ni calorías. Decisión de Claude, no pedida: dependencia deducida. |
| `reglamento-y-fundamentos-del-futsal/` | `./deportes-jugadores-posiciones-puntaje/` | Tema propuesto en `../_plan-faltantes/HUECOS-POR-TITULOS.md` (sin ID en `troncos.md`). Cancha, equipos y reglas del futsal (FIFA); se compara con el fútbol de once. Decisión de Claude, no pedida: dependencia deducida. |
| `reglamento-y-fundamentos-del-rugby/` | `./deportes-jugadores-posiciones-puntaje/` | Tema propuesto en `../_plan-faltantes/HUECOS-POR-TITULOS.md` (sin ID en `troncos.md`). Rugby unión (World Rugby): puntaje, formaciones y valores. Decisión de Claude, no pedida: dependencia deducida. |
| `reglamento-y-fundamentos-del-hockey/` | `./deportes-jugadores-posiciones-puntaje/` | Tema propuesto en `../_plan-faltantes/HUECOS-POR-TITULOS.md` (sin ID en `troncos.md`). Hockey sobre césped (FIH) y tradición argentina de Las Leonas y Los Leones. Decisión de Claude, no pedida: dependencia deducida. |
