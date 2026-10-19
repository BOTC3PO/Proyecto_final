# Huecos y solapes detectados leyendo solo los títulos de los temas (2026-10-19)

> **Estado (2026-10-19):** los temas de las tablas «Materias grandes» ya se escribieron: Geografía 7 (Europa/UE, Asia, Medio Oriente, África, Oceanía y Antártida, cambio climático, redes globales), Física 4 (Bernoulli, 1.ª ley, MAS y ondas estacionarias, energías renovables), Química 5 (leyes ponderales, ácido-base, neutralización, orgánica básica, agua), Biología 6, Lengua 4 (literatura argentina), Informática 3 (LAN/Wi-Fi, NoSQL, página web; «HTML y CSS básico» se reemplazó por una visión conceptual porque `oficios/frontend` ya los cubre) y Ed. Física 6 (capacidades, reglamentos de fútbol/básquet/vóley/handball, nutrición). Sin escribir: futsal, rugby y hockey, y los solapes de la sección siguiente. Dudas por materia en `confirmar-huecos-*.md`.

Lectura de las 2.078 carpetas de tema (sin abrir el contenido). Son **candidatos**: antes de crear un tema hay que revisar que no exista ya con otro nombre en `troncos.md` (regla de `PROCEDIMIENTO.md`).

## Materias grandes: temas que parecen faltar
| Materia | Hoy | Candidatos |
|---|---:|---|
| Geografía | 40 | **Regional mundial sin cubrir:** solo hay América (anglosajona y latina). Faltan Europa (Unión Europea), Asia (China, India, Medio Oriente), África y Oceanía. También cambio climático como tema propio (hoy solo huella de carbono, riesgos ambientales) y redes de transporte/comunicación. |
| Física | 77 | Ecuación de Bernoulli (hay caudal, Pascal, Arquímedes, hidrostática, pero no dinámica de fluidos); primera ley de la termodinámica (hay segunda ley y máquina térmica); movimiento armónico simple / ondas estacionarias; energías renovables. |
| Química | 42 | Leyes ponderales (Lavoisier, Proust), teorías ácido-base (Arrhenius, Brønsted-Lowry) y neutralización (hoy solo pH/pOH), reacciones orgánicas básicas (hay grupos funcionales e hidrocarburos), química del agua. |
| Biología | 37 | Relaciones interespecíficas (simbiosis, parasitismo, competencia), reproducción sexual/asexual, homeostasis, nutrición y sistema digestivo/respiratorio/circulatorio por separado (hoy un solo tema de sistemas del cuerpo). |
| Lengua | 75 | Literatura argentina y latinoamericana (gauchesca, Borges, Cortázar; ya figura como sub-plan pendiente en `PLAN-REPARACIONES-TRONCOS.md`): hay movimientos (romanticismo, realismo, modernismo, boom) pero no autores/obras argentinos. |
| Informática | 62 | Redes locales e inalámbricas (hay TCP/IP y DNS), bases de datos no relacionales, HTML/CSS básico (hoy solo en oficios/frontend). |
| Historia | 28 | Las secciones coloniales y del siglo XIX temprano están en historia-profunda; conviene revisar la división entre `historia/` e `historia-profunda/` (ambas tratan historia argentina). |
| Ed. Física | 16 | Reglamentos y fundamentos de deportes concretos (fútbol, básquet, vóley, handball), nutrición deportiva, capacidades físicas (fuerza, resistencia, flexibilidad). |

## Solapes y nombres a revisar
- **Mismo nombre en dos materias:** `sueldo-promedio-pais` (civica y economia; es un *split* intencional de Javier, ver ambas `dependencias.md`) y `generos-periodisticos` (lengua y comunicacion: dos textos distintos de 681 y 486 palabras sobre lo mismo; conviene decidir uno y enlazar el otro).
- **Salud ↔ Ed. Física:** `salud/primeros-auxilios-basicos` y `ed-fisica/primeros-auxilios-rcp-dea`; `salud/consumos-problematicos` y `ed-fisica/{politicas-de-drogas,prevencion-adicciones-ley-26586}`. Ya se enlazan, pero hay tres temas de adicciones en dos materias.
- **Matemática:** `numeros-enteros` y `operaciones-enteros`; `despejar-formula` (matemática) y `formulas-con-literales` (física).
- **Geografía:** `coordenadas-geograficas` y `coordenadas-y-husos-horarios`; `escala-de-mapa` y `mapa-plano-escala`.
- **Informática:** `sistema-de-archivos` y `sistema-de-archivos-por-bitacora`.
- **Historia profunda:** tres temas `*-nivel2` (`tabla-periodica-nivel2-cosmologico`, `fotosintesis-cambio-atmosfera-nivel2`, `seleccion-natural-evidencias-nivel2`) repiten lo que ya hay en química y biología; es un cruce intencional pero el nombre expone la jerga interna.
- **Nombres de carpeta:** `diseño/` conserva la «ñ»; todas las demás materias están en ASCII (`senalizacion-vial`, `campana-al-chaco`). Renombrarla exige cambiar referencias (p. ej. el mapa `CARPETAS` de `verificar_examen_jefe.py`).
- **Carpetas contenedor** sin `teoria.md` propia (`narrativa-audiovisual/`, `divisibilidad/`, `leer-grafico/`, `matrices/`, `transformaciones-geometricas/`, `cuerpos-redondos-y-poliedros/`, `estatica/`, `leyes-de-newton/`, `recibo-de-sueldo/`, `descuentos-obligatorios/`): correcto por diseño, pero la mayoría no tiene fila propia en su `dependencias.md`.

## Materias pequeñas: ver `academicas.md`, `tecnicas.md` e `idiomas.md` (ya ejecutados).
