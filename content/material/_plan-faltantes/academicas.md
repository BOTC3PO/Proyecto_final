# Plan de temas faltantes: materias académicas con nota menor a 6,5

> Documento de planificación. NO se creó ningún tema. Cada propuesta sigue `../PROCEDIMIENTO.md` (fila en `dependencias.md` primero, teoría y cuestionario de 20 o más preguntas validadas). Antes de agregar un nodo hay que revisar que no exista ya con otro nombre en `../../troncos.md`.
>
> Los prerrequisitos usan solo carpetas que **existen hoy**. Prioridad: alta = laguna evidente en lo que la materia dice cubrir; media = amplía; baja = opcional. Los temas sensibles van marcados con ⚠.
>
> Dos huecos ya estaban documentados en `../PLAN-REPARACIONES-TRONCOS.md` y se retoman acá sin duplicarlos: Historia del Arte (13 nodos) e Historia de la Filosofía (~12 nodos). Ambos esperan una decisión de alcance.

## Resumen

| Materia | Temas hoy | Faltan (mínimo) | Cobertura objetivo | Hueco principal |
|---|---:|---:|---:|---|
| Arte | 15 | 9 | 24 | Historia del arte: todo lo actual es técnica y lenguaje |
| Filosofía | 18 | 8 | 26 | Los filósofos: `historia-de-la-filosofia-y-corrientes` es un solo tema para 25 siglos |
| Psicología | 10 | 6 | 16 | Sin desarrollo (Piaget/Vygotsky), emociones, motivación, grupos |
| Ciudadanía digital | 7 | 6 | 13 | Casi todo es desinformación; faltan seguridad, ciberacoso, derechos y participación |
| Comunicación | 5 | 6 | 11 | Sin medios digitales, discurso, imagen ni comunicación institucional |
| Antropología | 5 | 5 | 10 | Sin métodos (etnografía), identidad, religión/mito, economía y poder |
| Sociología | 3 | 7 | 10 | Solo hechos, instituciones y estratificación; faltan socialización, normas, cambio social |
| Aprendizaje | 2 | 6 | 8 | Solo repaso espaciado y metacognición |
| Turismo | 4 | 6 | 10 | Falta el recorrido completo de la actividad (oferta, demanda, impacto, servicios) |
| Salud | 5 | 5 | 10 | Falta hábitos de vida (sueño, alimentación, adicciones, primeros auxilios) |
| **Total** | **74** | **64** | **138** | |

Importante: no hace falta llegar a la cobertura objetivo de golpe. Con los temas de prioridad alta (columna "Alta" abajo) cada materia sale del rango bajo.

---

## Arte

**Cubre hoy:** técnica y lenguaje del arte: elementos y principios del diseño, composición, rosetones y simetría, tres temas de narrativa audiovisual (plano, encuadre, montaje), teatro, danza, producción multimedial y cuatro de teoría musical (ritmo, pentagrama, acordes, acústica).
**Lagunas reales:** no hay historia del arte (solo `origen-del-arte`, de arte rupestre), no hay artes plásticas por técnica (dibujo, pintura, escultura, grabado) ni fotografía; la música es solo teoría, sin géneros ni historia; no hay arte argentino ni latinoamericano.

| Carpeta | Depende de | Contenido | Prioridad | Fuente sugerida |
|---|---|---|---|---|
| `arte-antiguo-egipto-y-mesopotamia` | `origen-del-arte` | Obra, técnica y función ritual | media | Manual Univ. de Extremadura |
| `arte-clasico-grecia-y-roma` | `arte-antiguo-egipto-y-mesopotamia`, `proporcion` (composicion-y-proporcion) | Canon, orden arquitectónico, escultura | alta | ídem |
| `arte-medieval-romanico-y-gotico` | `arte-clasico-grecia-y-roma` | Iconografía, catedrales, vitral | media | ídem |
| `renacimiento-y-manierismo` | `arte-medieval-romanico-y-gotico`, `composicion-y-proporcion` | Perspectiva, humanismo, maestros | alta | ídem + `ARTE UNIDAD I RENACIMIENTO` |
| `barroco` | `renacimiento-y-manierismo` | Contrarreforma, claroscuro, movimiento | media | ídem |
| `impresionismo-y-postimpresionismo` | `elementos-del-arte` | Luz, color, ruptura con la academia | alta | ídem |
| `vanguardias-del-siglo-xx` | `impresionismo-y-postimpresionismo` | Cubismo, expresionismo, surrealismo | alta | ídem + apunte de Vanguardias |
| `arte-argentino-colonial-al-siglo-xx` | `impresionismo-y-postimpresionismo` | Síntesis de las cuatro etapas propuestas en el plan viejo (colonial, Generación del 80, pintores argentinos, vanguardias); partir si crece | alta | Gutiérrez Viñuales |
| `fotografia-y-cine-como-arte` | `narrativa-audiovisual/plano` | Luz, cámara y lenguaje; historia mínima | media | por definir |

**Para llegar a ~24:** los 9 de arriba. Las cuatro etapas del arte argentino pueden separarse más adelante (decisión de alcance pendiente: ¿Historia del Arte va aparte?). Opcional: `escultura-y-arquitectura`, `generos-musicales-y-su-historia`.

## Filosofía

**Cubre hoy:** lógica proposicional y de predicados, validez, epistemología, método racionalista, ontología (ser, existencia, realidad), ética (virtud, deontología, utilitarismo, contractualismo, bioética general) y estética (lo bello, el gusto, qué es el arte).
**Lagunas reales:** `historia-de-la-filosofia-y-corrientes` agrupa desde los presocráticos hasta el existencialismo en un solo tema; no hay ningún filósofo desarrollado. Tampoco hay filosofía política, filosofía del lenguaje, empirismo ni filosofía de la ciencia.

| Carpeta | Depende de | Contenido | Prioridad | Fuente sugerida |
|---|---|---|---|---|
| `presocraticos-y-socrates` | `historia-de-la-filosofia-y-corrientes` | Arjé, Heráclito, Parménides, método socrático | alta | Carpio |
| `platon-y-aristoteles` | `presocraticos-y-socrates` | Ideas, alma, sustancia, causas, lógica aristotélica | alta | Carpio |
| `filosofia-medieval-santo-tomas` | `platon-y-aristoteles` | Fe y razón | media | Carpio |
| `empirismo-hume` | `epistemologia` | Experiencia, causalidad | alta | Carpio |
| `kant-y-el-idealismo` | `empirismo-hume`, `metodo-cientifico-racionalismo` | Síntesis razón-experiencia, imperativo categórico | alta | Carpio |
| `marx-y-el-materialismo-historico` | `kant-y-el-idealismo` | Materialismo histórico (el tema `marxismo` de economía ya existe: marcar el cruce) | media | Carpio |
| `fenomenologia-y-existencialismo` | `existencia` | Husserl, Heidegger, Sartre | media | Carpio |
| `filosofia-politica` | `contractualismo` | Justicia, libertad, Estado | alta | por definir (Rawls introductorio) |
| `filosofia-del-lenguaje-y-ciencia` | `logica-de-predicados`, `epistemologia` | Wittgenstein, falsacionismo | baja | Carpio |

**Para llegar a ~26:** los 9 de arriba (la lista se solapa con el plan viejo de ~12 filósofos; conviene decidir la granularidad antes de crear carpetas). `historia-de-la-filosofia-y-corrientes` quedaría como introducción.

## Psicología

**Cubre hoy:** autoconocimiento, sesgos y heurísticas, lenguaje y pensamiento, salud mental (ansiedad y depresión, cuándo pedir ayuda), memoria e inconsciente, corrientes (psicoanálisis, conductismo, humanismo, cognitivismo), etapas de la vida con foco en pubertad e identidad, cognición (percepción, memoria, atención), cultura y "otro", psicología y modernidad.
**Lagunas reales:** hay mucho de filosofía del yo y poco de psicología aplicada: no hay desarrollo cognitivo (Piaget) ni social (Vygotsky), emociones, motivación, aprendizaje psicológico (condicionamiento), personalidad, ni grupos y psicología social.

| Carpeta | Depende de | Contenido | Prioridad | Fuente sugerida |
|---|---|---|---|---|
| `desarrollo-cognitivo-piaget-vygotsky` | `edades-del-ser-humano-ninez-pubertad-identidad` | Etapas, zona de desarrollo próximo | alta | manual de psicología escolar |
| `emociones-y-regulacion-emocional` | `psicologia-cognitiva-percepcion-memoria-atencion` | Emoción, función, regulación. ⚠ borde con salud mental | alta | por definir |
| `motivacion-y-necesidades` | `corrientes-psicologicas-psicoanalisis-conductismo-humanismo-cognitivismo` | Maslow, motivación intrínseca y extrínseca | media | manual |
| `condicionamiento-y-aprendizaje-psicologico` | `corrientes-psicologicas-psicoanalisis-conductismo-humanismo-cognitivismo` | Pavlov, Skinner. Cruza con `aprendizaje` | media | manual |
| `personalidad` | `autoconocimiento-como-busqueda-humana` | Rasgos, temperamento, límites de los tests | media | manual |
| `psicologia-social-grupos-y-conformidad` | `sesgos-cognitivos-heuristicas-error-sistematico` | Conformidad, obediencia, estereotipos y prejuicios | alta | por definir |

**Para llegar a ~16:** los 6. Sensible: `emociones-...` y todo lo que roce salud mental debe usar el mismo criterio que el tema de salud mental existente (sin diagnósticos).

## Ciudadanía digital

**Cubre hoy:** desinformación, verificación de noticias, fuentes primarias y secundarias, confiabilidad de fuentes, deepfakes y sesgo, publicidad engañosa, huella digital y privacidad.
**Lagunas reales:** casi todo es un solo eje (verificar información). No hay seguridad personal (contraseñas, phishing, estafas), ciberacoso, derechos y marco legal, participación digital, ni economía de la atención.

| Carpeta | Depende de | Contenido | Prioridad | Fuente sugerida |
|---|---|---|---|---|
| `contrasenas-y-autenticacion` | `ciudadania-digital-privacidad-huella-digital` | Contraseñas, 2FA | alta | guías de seguridad públicas |
| `phishing-y-estafas-en-linea` | `contrasenas-y-autenticacion` | Señales, ingeniería social | alta | Argentina.gob.ar |
| `ciberacoso-y-convivencia-en-redes` | `ciudadania-digital-privacidad-huella-digital` | Qué es, qué hacer, cómo ayudar. Cruza con `salud/bullying-y-acoso-escolar` ⚠ | alta | Ley 26.892, guías oficiales |
| `derechos-digitales-y-proteccion-de-datos` | `ciudadania-digital-privacidad-huella-digital` | Ley 25.326, consentimiento | media | texto de la ley |
| `algoritmos-burbujas-y-economia-de-la-atencion` | `desinformacion-en-red` | Recomendación, burbujas de filtro | media | por definir |
| `participacion-ciudadana-en-linea` | `confiabilidad-y-verificacion-de-una-fuente` | Peticiones, debate público, límites | baja | Cívica (proyecto ciudadano) |

**Para llegar a ~13:** los 6. `grooming` ya está en ESI (`cuidado-vinculo-grooming`): enlazar, no duplicar.

## Comunicación

**Cubre hoy:** modelo emisor-receptor-canal-ruido, corrientes de la comunicación, publicidad y persuasión, géneros periodísticos y ética de los medios.
**Lagunas reales:** el tronco 16 de `troncos.md` prometía más que cinco temas. Faltan lenguaje de los medios (radio, TV, digitales), análisis del discurso, comunicación no verbal, comunicación institucional y de crisis, imagen y comunicación visual.

| Carpeta | Depende de | Contenido | Prioridad | Fuente sugerida |
|---|---|---|---|---|
| `medios-masivos-y-medios-digitales` | `corrientes-de-la-comunicacion` | Historia, medios masivos vs. redes | alta | manual de comunicación social |
| `comunicacion-verbal-y-no-verbal` | `teoria-de-la-comunicacion-emisor-receptor-canal-ruido` | Gestos, paralenguaje | media | por definir |
| `analisis-del-discurso-y-encuadre-mediatico` | `generos-periodisticos` | Agenda, framing | alta | por definir |
| `comunicacion-visual-e-imagen` | `publicidad-y-persuasion` | Imagen, color, símbolos (cruza con UX) | media | por definir |
| `comunicacion-institucional-y-de-crisis` | `etica-y-responsabilidad-de-los-medios` | Prensa, vocería, comunicado | media | por definir |
| `comunicacion-oral-y-hablar-en-publico` | `teoria-de-la-comunicacion-emisor-receptor-canal-ruido` | Estructura, voz, nervios | baja | por definir |

**Para llegar a ~11:** los 6. Revisar cruces con `lengua/circuito-de-la-comunicacion` y `lengua/generos-discursivos` antes de crear.

## Antropología

**Cubre hoy:** cultura, diversidad cultural, etnocentrismo, parentesco y subcampos. Los cinco son conceptuales.
**Lagunas reales:** no hay método (etnografía), identidad, religión y mito, economía y poder, ni casos. `investigacion/trabajo-de-campo-enfoque-socioantropologico` ya cubre algo del método.

| Carpeta | Depende de | Contenido | Prioridad | Fuente sugerida |
|---|---|---|---|---|
| `etnografia-y-observacion-participante` | `cultura`, `diversidad-cultural` | Cómo trabaja la disciplina. Enlazar con el tema de Investigación | alta | manual de antropología |
| `identidad-y-etnicidad` | `diversidad-cultural` | Identidad colectiva, minorías | alta | manual |
| `mito-ritual-y-religion` | `cultura` | Función simbólica, ritos de paso | media | manual |
| `pueblos-originarios-de-argentina` | `diversidad-cultural` | Panorama contemporáneo y derechos | alta | INAI, Constitución art. 75 inc. 17 |
| `economia-y-poder-en-las-sociedades` | `relaciones-de-parentesco` | Reciprocidad, don, jefaturas | baja | manual |

**Para llegar a ~10:** los 5. Pendiente de decisión de producto: diccionarios de lenguas indígenas (ver plan viejo).

## Sociología

**Cubre hoy:** hechos sociales, instituciones y estratificación (3 temas, ~400 palabras cada uno).
**Lagunas reales:** faltan todos los conceptos que permiten usarlos: socialización, roles y normas, desviación, cambio social, desigualdad contemporánea, metodología y las grandes teorías.

| Carpeta | Depende de | Contenido | Prioridad | Fuente sugerida |
|---|---|---|---|---|
| `socializacion-y-roles` | `instituciones` | Primaria y secundaria | alta | manual de sociología |
| `normas-valores-y-control-social` | `socializacion-y-roles` | Sanción, desviación | alta | manual |
| `clasicos-durkheim-weber-marx` | `hechos-sociales` | Tres enfoques | alta | manual. ⚠ cruce con `filosofia/marx...` |
| `cambio-social-y-movimientos` | `instituciones` | Revoluciones, movimientos | media | manual |
| `desigualdad-y-clases-hoy` | `estratificacion` | Pobreza, movilidad (cruza con `geografia/indicadores-sociales-de-argentina`) | alta | INDEC |
| `genero-como-categoria-social` | `normas-valores-y-control-social` | Roles de género y su construcción. Cruza con ESI | media | ESI es la fuente rectora |
| `metodos-de-investigacion-social` | `hechos-sociales` | Encuesta, entrevista (cruza con `investigacion/tecnicas-de-investigacion-social`) | baja | enlazar |

**Para llegar a ~10:** los 7 (la materia más delgada en volumen y profundidad).

## Aprendizaje

**Cubre hoy:** repaso espaciado y recuperación, y metacognición.
**Lagunas reales:** faltan planificación del estudio, atención y concentración, motivación para estudiar, lectura y toma de apuntes, el error como parte del aprendizaje y el trabajo en grupo.

| Carpeta | Depende de | Contenido | Prioridad | Fuente sugerida |
|---|---|---|---|---|
| `planificar-el-estudio-y-gestionar-el-tiempo` | `metacognicion-saber-que-se-y-que-no-se` | Metas, agenda, procrastinación | alta | psicología educativa |
| `lectura-activa-y-toma-de-apuntes` | `tecnicas-de-estudio-repaso-espaciado-recuperacion` | Subrayado, esquemas, resumen | alta | idem |
| `atencion-concentracion-y-distracciones` | `metacognicion-saber-que-se-y-que-no-se` | Multitarea, celular | alta | `psicologia/...atencion` |
| `motivacion-para-aprender` | `metacognicion-saber-que-se-y-que-no-se` | Mentalidad de crecimiento, metas | media | por definir |
| `el-error-y-la-retroalimentacion` | `tecnicas-de-estudio-repaso-espaciado-recuperacion` | Aprender de equivocarse | media | por definir |
| `estudiar-con-otros` | `planificar-el-estudio-y-gestionar-el-tiempo` | Grupos, explicar para aprender | baja | por definir |

**Para llegar a ~8:** los 6. Materia chica por naturaleza: no inflar más allá de 8–10.

## Turismo

**Cubre hoy:** patrimonio turístico, planificación de destino, circuitos e itinerarios y comunicación para promoción (sección 1 de Fundamentos y secciones 2–5 del oficio Guía Turístico están en `oficios/guia-turistico/`; `geografia/turismo-mundial` cubre flujos mundiales).
**Lagunas reales:** el carpeta `turismo/` no tiene lo básico: qué es el turismo, tipos, oferta y demanda, alojamiento y servicios, impacto económico y sostenibilidad. Verificar primero qué de eso ya está en `oficios/guia-turistico/` antes de crear (el propio plan dice "Fundamentos ya estaba en `material/turismo/`").

| Carpeta | Depende de | Contenido | Prioridad | Fuente sugerida |
|---|---|---|---|---|
| `que-es-el-turismo-y-tipos-de-turismo` | `patrimonio-turistico-natural-y-cultural` | Definición, turismo receptivo y emisivo, modalidades | alta | Ley Nacional de Turismo 25.997 |
| `oferta-y-demanda-turistica` | `que-es-el-turismo-y-tipos-de-turismo` | Productos, temporada | alta | manual de turismo |
| `servicios-turisticos-alojamiento-y-transporte` | `oferta-y-demanda-turistica` | Hotelería, agencias, transporte | media | manual |
| `impacto-economico-del-turismo` | `oferta-y-demanda-turistica` | Empleo, balanza de servicios. Cruza con `economia/balanza-comercial` | media | INDEC / Ministerio de Turismo |
| `turismo-sostenible-y-comunitario` | `planificacion-de-destino` | Impactos, capacidad de carga | alta | OMT |
| `turismo-en-argentina-regiones-y-destinos` | `circuitos-e-itinerarios-turisticos` | Regiones turísticas (cruza con Geografía) | media | Ministerio de Turismo |

**Para llegar a ~10:** los 6. Hay que desduplicar con `oficios/guia-turistico/` antes de empezar.

## Salud

**Cubre hoy:** bullying, discapacidad e inclusión, trastornos alimentarios ⚠, prevención del suicidio ⚠ y dosis por peso corporal (1 de matemática aplicada).
**Lagunas reales:** el plan viejo ya traía 4 temas; con eso solo hay salud mental y convivencia. Faltan hábitos de vida, adicciones, primeros auxilios y sistema de salud (este último en Cívica: `sistema-de-salud`).

| Carpeta | Depende de | Contenido | Prioridad | Fuente sugerida |
|---|---|---|---|---|
| `sueno-y-descanso` | `../biologia/sistemas-cuerpo-humano` | Higiene del sueño en adolescentes | alta | OMS / Ministerio de Salud |
| `alimentacion-saludable-y-etiquetado` | `trastornos-alimentarios` | Guías alimentarias argentinas (GAPA), etiquetado frontal. Enlazar con `vida-cotidiana/seguridad-alimentaria` | alta | GAPA |
| `consumos-problematicos` | `../ed-fisica/politicas-de-drogas` | Alcohol, tabaco, apuestas y pantallas. ⚠ sin consumos detallados | alta | Ley 26.934 |
| `primeros-auxilios-basicos` | `../biologia/sistemas-cuerpo-humano` | RCP, atragantamiento, heridas | alta | Cruz Roja / Ministerio |
| `actividad-fisica-y-salud` | `../ed-fisica` (carpeta existente) | Beneficios, sedentarismo | media | OMS |
| `vacunas-y-prevencion` | `../biologia/sistemas-cuerpo-humano` | Calendario nacional, inmunidad | media | Ministerio de Salud |

**Para llegar a ~10:** los 6 (ya con 5 actuales; el más urgente es `primeros-auxilios-basicos` y `sueno-y-descanso`). Reglas: para todo lo sensible, mismas restricciones que los temas ya creados.

---

## Orden de ejecución sugerido (mayor impacto primero)

1. Sociología, Aprendizaje, Salud: tres materias con menos de 6 temas y huecos básicos evidentes.
2. Ciudadanía digital (seguridad, ciberacoso) y Psicología (desarrollo, psicología social): temas de alto uso escolar.
3. Antropología, Comunicación y Turismo (con desduplicación previa de `oficios/guia-turistico/`).
4. Arte (Historia del Arte) y Filosofía (filósofos): requieren las dos decisiones de alcance abiertas en `PLAN-REPARACIONES-TRONCOS.md`.

## Decisiones que hacen falta de Javier

- ¿Historia del Arte entra en `arte/` o es una materia aparte?
- Granularidad de Filosofía: un tema por período o uno por filósofo.
- Turismo: ¿qué queda en `turismo/` y qué en `oficios/guia-turistico/`?
- Verificar si `troncos.md` necesita nodos nuevos (los de este plan no tienen ID en el grafo).
