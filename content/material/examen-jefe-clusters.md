# Clusters reales del examen-jefe (regenerado 2026-10-03) — generado automáticamente

**Agrupamiento por conocimientos previos (2026-10-03)**: las 22 materias se ordenan por
partición topológica sobre su `dependencias.md` (5-15 temas por cluster, el último
tramo absorbe el resto), no por orden alfabético. Diseño y prueba en
`examen-jefe-REDISEÑO-PLANIFICACION.md`; algoritmo en
`_qa_tools/gen_examen_jefe_prereq_clusters.py`; ids en bloques reservados por materia
(601-953). Para regenerar una materia tras tocar su `dependencias.md`:
`python3 _qa_tools/gen_examen_jefe_prereq_clusters.py <carpeta> "<Título>" <id_inicial>`
(los logros de los clusters que cambien de composición hay que reescribirlos y retraducirlos).

Antes del 2026-10-03 había 8 materias sin `dependencias.md` y otras con tablas
incompletas o con nombres que no coincidían con ninguna carpeta; se completaron todas.
Además, Química y Biología escribían las dependencias como `./tema` y el parser las
descartaba (0 aristas): hasta esa fecha esas dos estaban en la práctica alfabéticas.

Cobertura actual (temas reales con fila / aristas intra-materia que lee el script):

| Materia | Temas | Con fila en `dependencias.md` | Aristas de prerrequisito |
|---|---:|---:|---:|
| Matemática | 161 | 160 | 198 |
| Lengua | 75 | 75 | 76 |
| Historia profunda | 109 | 109 | 132 |
| Historia | 28 | 28 | 24 |
| Geografía | 40 | 40 | 35 |
| Cívica | 31 | 31 | 23 |
| Química | 42 | 42 | 30 |
| Biología | 37 | 37 | 32 |
| Física | 77 | 77 | 73 |
| Informática | 62 | 62 | 61 |
| Ingeniería | 11 | 11 | 10 |
| Investigación | 12 | 12 | 11 |
| Economía | 85 | 85 | 90 |
| Derecho | 21 | 21 | 27 |
| Dibujo Técnico | 5 | 5 | 4 |
| Psicología | 10 | 10 | 10 |
| Comunicación | 5 | 5 | 3 |
| Electrónica | 5 | 5 | 4 |
| Ciencia de Materiales | 6 | 6 | 3 |
| Automatización | 5 | 5 | 3 |
| UX/Diseño | 5 | 5 | 4 |
| Arte | 15 | 15 | 10 |

Los prerrequisitos salen del grafo de `troncos.md`; los que no tenían flecha ahí se
dedujeron del `teoria.md` de cada tema y están marcados como "deducido" en la columna
"Por qué" de cada `dependencias.md`, para revisión.

## Matemática (161 temas, 32 clusters)

- **Cluster 1** (5): razones-trigonometricas, teorema-del-seno-y-del-coseno, conjuntos-pertenencia-e-inclusion, conteo, valor-posicional
- **Cluster 2** (5): grafos-vertices-y-aristas, union-interseccion-y-diferencia, arboles-grafo-sin-ciclos, grafos-dirigidos-no-dirigidos-y-ponderados, leer-una-tabla
- **Cluster 3** (5): caminos-y-ciclos, leer-grafico/barras, algoritmos-de-recorrido-bfs-dfs, leer-grafico/lineas, leer-grafico/torta
- **Cluster 4** (5): magnitud-unidad-instrumento, construir-un-grafico, grafico-eje-truncado, media-mediana-y-moda, vectores-modulo-y-direccion
- **Cluster 5** (5): cual-miente-y-cuando, funciones-trigonometricas-seno-coseno, suma-de-vectores-y-descomposicion, identidades-y-ecuaciones-trigonometricas, regresion-lineal
- **Cluster 6** (5): sistema-metrico-y-conversiones, correlacion-no-es-causalidad, analisis-dimensional, angulos, cifras-significativas-y-error
- **Cluster 7** (5): circunferencia-y-circulo, error-sistematico-vs-aleatorio, perimetro-y-area, poligonos, tablas-de-frecuencia-cuartiles-percentiles-y-varianza
- **Cluster 8** (5): area-poligonos-regulares-y-compuestas, dispersion-rango-y-desvio, volumen-y-capacidad, distribucion-normal, variable-aleatoria-discreta-continua
- **Cluster 9** (5): muestreo-y-sesgo, triangulos, teorema-central-del-limite, congruencia-de-triangulos, intervalo-de-confianza
- **Cluster 10** (5): semejanza-y-teorema-de-thales, teorema-de-pitagoras, test-de-hipotesis, transformaciones-geometricas/homotecia, transformaciones-geometricas/reflexion
- **Cluster 11** (5): transformaciones-geometricas/rotacion, transformaciones-geometricas/traslacion, distribucion-de-poisson, distribucion-exponencial, diagramas-de-venn
- **Cluster 12** (5): suma, principio-multiplicativo-de-conteo, multiplicacion, combinaciones, permutaciones
- **Cluster 13** (5): independencia-de-eventos-y-diagrama-de-arbol, potencias, probabilidad-simple, logaritmos, probabilidad-compuesta
- **Cluster 14** (5): raices, distribucion-binomial, esperanza-matematica-valor-esperado, irracionales-y-reales, probabilidad-condicional
- **Cluster 15** (5): resta, sucesiones-aritmeticas, dinero, division, hora-y-reloj
- **Cluster 16** (5): jerarquia-operaciones, numeros-enteros, divisibilidad/multiplos, lenguaje-algebraico, divisibilidad/divisores
- **Cluster 17** (5): expresiones-equivalentes, divisibilidad/regla-del-2, divisibilidad/regla-del-3, divisibilidad/regla-del-4, divisibilidad/regla-del-5
- **Cluster 18** (5): divisibilidad/regla-del-6, divisibilidad/regla-del-10, divisibilidad/regla-del-8, divisibilidad/regla-del-9, ecuacion-primer-grado
- **Cluster 19** (5): numeros-primos, demostracion-contraejemplo, demostracion-deduccion, demostracion-induccion, demostracion-reduccion-al-absurdo
- **Cluster 20** (5): despejar-formula, funcion-dominio, funcion-imagen, inecuaciones, funcion-inversa-composicion
- **Cluster 21** (5): funcion-lineal-pendiente, mcd, operaciones-enteros, fracciones, mcm
- **Cluster 22** (5): plano-cartesiano, operaciones-fracciones, coordenadas-de-un-punto, decimales, distancia-entre-dos-puntos
- **Cluster 23** (5): notacion-cientifica, ecuacion-de-la-recta, polinomios-factoreo, proporcionalidad-funcion, division-polinomios-ruffini
- **Cluster 24** (5): ecuacion-cuadratica, punto-medio-de-un-segmento, funcion-cuadratica-parabola, numeros-complejos, familias-exponencial-logaritmica
- **Cluster 25** (5): forma-polar-complejos, ecuaciones-exponenciales-logaritmicas, limite, razon, continuidad
- **Cluster 26** (5): proporcion, derivada, rectas-paralelas-y-perpendiculares, integral, optimizacion
- **Cluster 27** (5): ecuaciones-diferenciales, redondeo, regla-de-tres-directa, secciones-conicas-circunferencia, porcentaje
- **Cluster 28** (5): regla-de-tres-inversa, sistemas-dos-ecuaciones, sucesiones-y-series, matrices/operaciones, series-geometricas
- **Cluster 29** (5): matrices/sistemas-nxn, tecnicas-de-integracion, determinante, teorema-de-bayes, matriz-inversa
- **Cluster 30** (5): riesgo-relativo-vs-absoluto, teorema-del-binomio, concavidad-y-puntos-de-inflexion, variaciones, integral-definida-y-area-bajo-la-curva
- **Cluster 31** (5): divisibilidad/regla-del-7-opcional, asintotas, teorema-de-bolzano, regla-de-lhopital, cuerpos-redondos-y-poliedros/cilindros
- **Cluster 32** (6): cuerpos-redondos-y-poliedros/conos, cuerpos-redondos-y-poliedros/esferas, cuerpos-redondos-y-poliedros/piramides, cuerpos-redondos-y-poliedros/prismas, producto-escalar, cuerpos-redondos-y-poliedros/desarrollo-plano

## Lengua (83 temas, 16 clusters)

- **Cluster 1** (5): conciencia-fonologica, ortografia-y-tildacion, decodificacion-y-fluidez, signos-de-puntuacion, circuito-de-la-comunicacion
- **Cluster 2** (5): comprension-idea-principal, escritura-como-tecnologia, tecnicas-de-estudio-resumen-y-organizadores-graficos, tipos-textuales, variedades-de-la-lengua
- **Cluster 3** (5): genero-dramatico, genero-lirico, genero-narrativo, generos-discursivos, narrador
- **Cluster 4** (5): generos-periodisticos, paratextos, punto-de-vista, recursos-literarios, estructura-narrativa
- **Cluster 5** (5): romanticismo, tesis, realismo, argumentos, modernismo
- **Cluster 6** (5): contraargumentos, generacion-del-98, detectar-falacias, boom-latinoamericano, debate-refutar-en-vivo
- **Cluster 7** (5): exposicion-oral, negociacion, persuasion-etica-vs-manipulacion, presentacion-con-apoyo-visual, subjetivemas-y-modalizadores
- **Cluster 8** (5): texto-teatral, vocabulario-y-familia-de-palabras, clases-de-palabras, concordancia-nominal-y-verbal, conjugacion-verbal-indicativo
- **Cluster 9** (5): sujeto-y-predicado, conjugacion-verbal-subjuntivo, nucleos-y-modificadores, tipos-de-sujeto, objetos-y-circunstanciales
- **Cluster 10** (5): sintagmas-nominal-adjetivo-preposicional-adverbial-verbal, oracion-compuesta-coordinacion-y-subordinacion, oraciones-negativas-e-interrogativas, coordinadas-adversativas, coordinadas-copulativas
- **Cluster 11** (5): coordinadas-distributivas, coordinadas-disyuntivas, discurso-referido, produccion-escrita-compleja, subordinada-adjetiva-o-de-relativo
- **Cluster 12** (5): conectores-textuales, correo-formal, cv, informe-tecnico, progresion-tematica
- **Cluster 13** (5): referencia-anafora-y-catafora, subordinada-adverbial-de-lugar, subordinada-adverbial-de-modo, subordinada-adverbial-de-tiempo, subordinada-causal
- **Cluster 14** (5): subordinada-concesiva-y-final, subordinada-condicional, subordinada-consecutiva, subordinada-sustantiva-de-complemento-circunstancial, subordinada-sustantiva-de-complemento-de-regimen
- **Cluster 15** (5): subordinada-sustantiva-de-complemento-de-un-adjetivo, subordinada-sustantiva-de-complemento-del-nombre, subordinada-sustantiva-de-complemento-directo, subordinada-sustantiva-de-sujeto, voz-activa-y-pasiva
- **Cluster 16** (8): borges-y-la-literatura-fantastica-rioplatense, literatura-gauchesca-y-martin-fierro, cortazar-y-el-cuento-contemporaneo, literatura-latinoamericana-realismo-magico, mitos-y-leyendas-de-pueblos-originarios-argentinos, poesia-argentina-del-siglo-xx, vanguardias-argentinas-florida-y-boedo, narrativa-argentina-posdictadura

## Historia argentina (23 temas, 4 clusters)

- **Cluster 1** (5): pueblos-originarios-territorio-argentino, conquista-y-colonia-argentina, virreinato-y-comercio, revolucion-de-mayo, guerras-de-independencia-argentina
- **Cluster 2** (5): guerras-civiles-unitarios-federales, organizacion-nacional-constitucion-1853, rosas-y-la-confederacion, guerra-del-paraguay-y-triple-alianza, economias-regionales-tempranas
- **Cluster 3** (5): conquista-del-desierto-y-campana-al-chaco, modelo-agroexportador-inmigracion, ampliacion-democratica-ley-saenz-pena, golpes-de-estado-interrupciones, reforma-universitaria-1918
- **Cluster 4** (8): peronismo-derechos-sociales, semana-tragica-1919, terrorismo-de-estado-argentina, industrializacion-por-sustitucion-de-importaciones-isi, guerra-de-malvinas, recuperacion-democratica-memoria, historia-reciente-argentina, crisis-de-2001

## Historia profunda (95 temas, 22 clusters)

- **Cluster 1** (5): escalas-de-tiempo-profundo, origen-del-universo, formacion-de-estrellas, galaxias-tipos-escala, nucleosintesis
- **Cluster 2** (5): corrimiento-al-rojo-expansion-universo, agujeros-negros, formacion-del-sistema-solar, ley-de-hubble, movimiento-rotacion-traslacion
- **Cluster 3** (5): materia-energia-oscura, estaciones-del-ano, fases-lunares, movimiento-aparente-constelaciones, eclipses-sol-luna
- **Cluster 4** (5): tabla-periodica-nivel2-cosmologico, tierra-primitiva-diferenciacion, atmosfera-primitiva, minerales-estructura-cristalina, origen-de-la-vida
- **Cluster 5** (5): rocas-igneas-sedimentarias-metamorficas, procariotas, tiempo-geologico-eones-eras-periodos, gran-oxidacion, datacion-radiometrica
- **Cluster 6** (5): eucariotas, fotosintesis-cambio-atmosfera-nivel2, multicelularidad, tectonica-placas-deriva-continental, explosion-cambrica
- **Cluster 7** (5): ciclo-de-las-rocas, conquista-tierra-firme, distribucion-biomas, cinco-extinciones-masivas, paleoclima-glaciaciones
- **Cluster 8** (5): radiacion-mamiferos, cambio-climatico-linea-base-historica, hominizacion, relieve-sismos-volcanes, paleolitico
- **Cluster 9** (5): seleccion-natural-evidencias-nivel2, herramientas-arte-rupestre, poblamiento-planeta-america, revolucion-neolitica, sedentarizacion-excedente
- **Cluster 10** (5): division-del-trabajo, metalurgia-cobre-hierro, propiedad-jerarquia-estado, escritura-primeras-ciudades, antigua-grecia
- **Cluster 11** (5): antigua-roma, antiguo-egipto, china-antigua, civilizaciones-de-america-precolombinas, india-antigua
- **Cluster 12** (4): mesopotamia, civilizaciones-antiguas, expansion-del-imperio-romano, imperio-de-alejandro-magno-helenistico
- **Cluster 13** (5): imperio-han-china, imperio-persa, imperios-expansion, caida-de-roma-y-alta-edad-media, edad-media-feudalismo
- **Cluster 14** (5): imperio-bizantino, islam-y-expansion-arabe, edad-media-plena, baja-edad-media-y-crisis, renacimiento-y-reforma
- **Cluster 15** (5): ciencia-revolucion-cientifica, imprenta, navegacion, conquista-colonizacion-america, modernidad-imprenta-navegacion-ciencia
- **Cluster 16** (3): absolutismo-europeo, ilustracion, revolucion-industrial
- **Cluster 17** (2): electrificacion-fabrica-hogar, huella-humana-en-el-clima-inicio
- **Cluster 18** (3): revoluciones-burguesas-liberalismo, estados-nacionales, imperialismo
- **Cluster 19** (3): sociedad-de-masas-y-democracia-liberal, primera-guerra-mundial-y-revolucion-rusa, entreguerras-y-crisis-de-1929
- **Cluster 20** (4): segunda-guerra-mundial, descolonizacion-de-africa-y-asia, guerras-mundiales, guerra-fria-descolonizacion
- **Cluster 21** (5): historia-contemporanea-de-africa, historia-contemporanea-de-asia-y-pacifico, historia-contemporanea-de-medio-oriente, globalizacion-era-digital, internet-redes-globalizacion-digital
- **Cluster 22** (1): carrera-espacial-sputnik-y-apolo

## Historia (20 temas, 5 clusters)

- **Cluster 1** (3): interpretar-una-fuente-historica, linea-de-tiempo-y-antes-despues, decada-siglo-milenio
- **Cluster 2** (3): antes-y-despues-de-cristo, periodizacion-historica, causa-y-consecuencia
- **Cluster 3** (5): significancia-historica, cambio-y-continuidad, evidencia, dimension-etica, multicausalidad
- **Cluster 4** (5): escuela-de-los-annales, historia-cultural, materialismo-historico, positivismo, revoluciones
- **Cluster 5** (4): independencias, revolucion-mexicana-1910-1920, guerras, guerra-civil-espanola-1936-1939

## Geografía (51 temas, 10 clusters)

- **Cluster 1** (5): coordenadas-y-husos-horarios, densidad-poblacion, escala-de-mapa, huella-de-carbono-agua-virtual, orientacion-puntos-cardinales
- **Cluster 2** (5): mapa-plano-escala, coordenadas-geograficas, division-politica, sig-mapas-digitales, estados-y-globalizacion
- **Cluster 3** (5): region, sig-gps, relieve-clima-biomas, sig-imagenes-satelitales, recursos-actividades-economicas
- **Cluster 4** (5): regiones-naturales-de-argentina, geografia-economica-agricola-argentina, geografia-industrial-mundial, mineria-e-hidrocarburos-en-argentina, america-latina-industria-y-energia
- **Cluster 5** (5): poblacion-piramides-migraciones, produccion-agraria-mundial-y-biotecnologia, ambiente-y-recursos, america-anglosajona, ambientalismo-liberal
- **Cluster 6** (5): america-latina-formacion-poblacion, conservacionismo, decrecimiento, ecologismo-politico, indicadores-sociales-de-argentina
- **Cluster 7** (5): migraciones-internacionales, indice-de-desarrollo-humano, migraciones-internas-en-argentina, paises-de-america-latina, recursos-hidricos-y-gestion
- **Cluster 8** (5): riesgos-naturales-argentinos, trabajo-y-desempleo-mundial, riesgos-ambientales-mundiales, turismo-mundial, urbanizacion-migracion-ciudad
- **Cluster 9** (5): africa-regiones-recursos-y-desafios, asia-china-india-y-sudeste-asiatico, brasil-geografia-economia-y-relacion-con-argentina, cambio-climatico-causas-efectos-y-acuerdos, china-geografia-y-modelo-economico
- **Cluster 10** (6): europa-y-union-europea, medio-oriente-petroleo-agua-y-conflictos, oceania-y-antartida, redes-de-transporte-y-comunicacion-globales, rusia-y-asia-central, sudafrica-geografia-y-sociedad

## Cívica (31 temas, 6 clusters)

- **Cluster 1** (5): derechos-nino, encuesta-electoral, derechos-indigenas, discriminacion-y-organismos-de-proteccion, derechos-genero
- **Cluster 2** (5): estado-de-derecho-por-que-importa, marchas-patrioticas, organizacion-del-estado, origen-estado-derecho, constitucion-preambulo
- **Cluster 3** (5): division-de-poderes, constitucion-nacional-jerarquia-normativa, como-se-hace-una-ley, derechos-y-garantias, documentos-y-tramites
- **Cluster 4** (5): impuestos, alcoholemia-y-conduccion, prioridades-de-paso, proyecto-ciudadano-participativo, senalizacion-vial
- **Cluster 5** (5): simbolos-patrios, sistema-de-salud, sistema-electoral-dhondt, sistemas-politicos-comparados, sueldo-promedio-pais
- **Cluster 6** (6): partidos-politicos, sufragio-restringido-universal, organismos-internacionales, teoria-del-poder, tratados-internacionales, tipos-de-estado

## Química (47 temas, 9 clusters)

- **Cluster 1** (5): balanceo-ecuaciones, concentracion-de-una-solucion, densidad, dilucion-soluciones, equilibrio-quimico-kc
- **Cluster 2** (5): estados-y-cambios, cinetica-reaccion, equilibrio-solubilidad-ksp, estequiometria, medicion-de-laboratorio
- **Cluster 3** (5): mezclas-metodos-separacion, ph-poh, modelos-atomicos, propiedades-coligativas, atomo-particulas-subatomicas
- **Cluster 4** (5): quimica-analitica, numero-atomico-masico, quimica-de-la-atmosfera, configuracion-electronica, reactivo-limitante-rendimiento
- **Cluster 5** (5): seguridad-laboratorio, tabla-periodica-tendencias, tipos-reacciones-quimicas, enlace-quimico-polaridad, carbono-tetravalencia-cadenas
- **Cluster 6** (5): geometria-molecular-vsepr, hidrocarburos-alcanos-alquenos-alquinos, nanotecnologia, grupos-funcionales, nomenclatura-compuestos
- **Cluster 7** (5): biomoleculas-glucidos-lipidos-proteinas, mol-masa-molar, oxidacion-reduccion, gases-ideales, electrolisis
- **Cluster 8** (7): petroleo-como-recurso-energetico, pilas-celdas-galvanicas, polimeros-naturales-sinteticos, presiones-parciales, superconductividad, termoquimica, energia-libre-gibbs
- **Cluster 9** (5): acidos-y-bases-teorias-arrhenius-bronsted-lowry, leyes-ponderales-lavoisier-proust, neutralizacion-y-titulacion, quimica-del-agua, reacciones-organicas-basicas

## Biología (49 temas, 9 clusters)

- **Cluster 1** (5): crecimiento-poblacional, genetica-mendeliana-punnett, grupos-sanguineos, cruce-dihibrido, herencia-ligada-al-sexo
- **Cluster 2** (5): necesidades-basicas-seres-vivos, ser-vivo-caracteristicas, celula-organelas, ciclos-vida-metamorfosis, clasificacion-evolucion
- **Cluster 3** (5): fotosintesis-respiracion-celular, habitats-adaptacion, enzimas-proteina-sustrato-ph, flujo-materia-energia, microbiologia-virus-inmunitario
- **Cluster 4** (5): cadenas-redes-troficas, mal-de-chagas, ciclos-biogeoquimicos, dinamica-poblacional-capacidad-carga, mitosis-meiosis
- **Cluster 5** (5): biodiversidad-indices, adn-gen-proteina, conservacion-areas-protegidas, biotecnologia-pcr-crispr, nicho-ecologico
- **Cluster 6** (5): partes-planta-germinacion, piramide-biomasas, quimiosintesis, seleccion-natural, sistemas-cuerpo-humano
- **Cluster 7** (7): deriva-genetica-flujo-genico, especiacion, presion-arterial, filogenia-arboles-evolutivos, sistema-endocrino-hormonas-glandulas, sistema-nervioso-neurona-sinapsis, transgenicos-bioetica
- **Cluster 8** (5): homeostasis-y-regulacion, los-sentidos-vista-oido-olfato-gusto-y-tacto, relaciones-interespecificas-simbiosis-parasitismo-competencia, reproduccion-sexual-y-asexual, sistema-circulatorio-corazon-y-sangre
- **Cluster 9** (7): sistema-digestivo-y-nutricion, sistema-excretor-rinon-y-homeostasis-del-agua, sistema-inmunitario-defensas-y-memoria-inmune, sistema-muscular-y-contraccion, sistema-oseo-y-articulaciones, sistema-respiratorio-e-intercambio-gaseoso, sistema-tegumentario-piel-y-termorregulacion

## Física (81 temas, 16 clusters)

- **Cluster 1** (5): cargas-electricas, estatica/centro-de-gravedad, campo-electrico, corriente-electrica, estatica/momento-de-una-fuerza
- **Cluster 2** (5): estructura-del-nucleo-atomico, estatica/equilibrio-de-cuerpo-rigido, decaimiento-radiactivo-alfa-beta-gamma, formulas-con-literales, fision-y-fusion-nuclear
- **Cluster 3** (5): iman-polos-atraccion-repulsion, ley-de-coulomb, leyes-de-newton/primera-inercia, maquinas-simples, leyes-de-newton/segunda-fma
- **Cluster 4** (5): mru, leyes-de-newton/tercera-accion-reaccion, mruv, dinamica-fuerzas-concurrentes, oscilacion-periodo
- **Cluster 5** (5): gravitacion-universal, frecuencia, momento-lineal, longitud-onda-velocidad-propagacion, impulso-cambio-momento
- **Cluster 6** (5): luz-onda-espectro-electromagnetico, movimiento-circular-y-fuerza-centripeta, dualidad-onda-particula, plano-inclinado-y-rozamiento, fisica-medica
- **Cluster 7** (5): presion-f-sobre-a, reflexion-espejos-planos-curvos, caudal-q-a-v, presion-atmosferica, presion-hidrostatica
- **Cluster 8** (5): masas-de-aire-y-frentes, principio-de-arquimedes-empuje-flotacion, formacion-de-nubes, principio-de-pascal-prensa-hidraulica, precipitacion
- **Cluster 9** (5): refraccion-indice-ley-snell, relatividad-especial-conceptual, lentes-convergentes-divergentes, resonancia-frecuencia-natural, formacion-de-imagenes-optica
- **Cluster 10** (5): semivida-desintegracion-exponencial, ojo-humano-instrumento-optico, sonido-timbre-altura-intensidad, temperatura-equilibrio-termico, decibeles-richter
- **Cluster 11** (5): calor-q-m-c-deltat, dilatacion-termica-lineal, cambios-de-estado-calor-latente, escalas-de-temperatura-c-f-k, maquina-termica-termodinamica-nivel2
- **Cluster 12** (5): tension-diferencia-potencial, entropia-segunda-ley-termodinamica, resistencia-electrica, tiro-oblicuo, ley-de-ohm
- **Cluster 13** (5): tiro-vertical, circuitos-en-paralelo, circuitos-en-serie, potencia-electrica, circuitos-mixtos
- **Cluster 14** (5): tormentas-y-fenomenos-severos, campo-magnetico-imanes-corrientes, trabajo-de-una-fuerza, induccion-electromagnetica-faraday-lenz, energia-cinetica
- **Cluster 15** (7): generador-motor-transformador, choques-elasticos-inelasticos, energia-potencial-gravitatoria, transmision-calor-conduccion-conveccion-radiacion, conservacion-energia-mecanica, velocidad-aceleracion-instantaneas, potencia-mecanica
- **Cluster 16** (4): ecuacion-de-bernoulli-dinamica-de-fluidos, energias-renovables-y-transformacion-de-energia, movimiento-armonico-simple-y-ondas-estacionarias, primera-ley-de-la-termodinamica

## Informática (65 temas, 12 clusters)

- **Cluster 1** (5): algebra-booleana, complejidad-asintotica, ofimatica-planilla-de-calculo, que-es-la-tecnica-y-la-tecnologia, revolucion-informatica
- **Cluster 2** (5): medios-tecnicos-extension-capacidades-humanas, historia-y-evolucion-de-los-sistemas-operativos, procesos-tecnicos-artesanales-e-industriales, arranque-de-la-computadora-boot, sistemas-numeracion
- **Cluster 3** (5): tipos-de-so-por-dispositivo, cpu-unidad-de-control-y-alu, unidades-almacenamiento, ciclo-de-instruccion-fetch-decode-execute, memoria-ram-cache-jerarquia
- **Cluster 4** (5): algoritmo-secuencia-de-pasos, almacenamiento-volatil-vs-no-volatil, buses-y-entrada-salida, variables-y-tipos-de-dato, estructuras-de-control-condicionales
- **Cluster 5** (8): operadores-aritmeticos, operadores-relacionales, operadores-logicos, estructuras-de-control-bucles, funciones-y-modularidad, estructuras-de-datos-listas-pilas-colas, poo-clases-y-objetos, algoritmos-busqueda-ordenamiento
- **Cluster 6** (5): archivos-y-persistencia, inteligencia-artificial-reglas-a-aprendizaje, modelo-relacional-tabla-registro-clave-primaria, etica-de-la-ia-sesgo-privacidad, criptografia-clave-simetrica-asimetrica-hash
- **Cluster 7** (5): direccionamiento-ip-dns, proceso-programa-en-ejecucion, protocolo-http-peticion-respuesta, comunicacion-entre-procesos, memoria-asignacion-memoria-virtual
- **Cluster 8** (5): planificacion-de-procesos, paginacion, interrupciones, recursividad, relaciones-y-claves-foraneas
- **Cluster 9** (5): requisitos-funcionales-no-funcionales, normalizacion-bases-datos, diseno-y-arquitectura-de-software, segmentacion, control-de-versiones
- **Cluster 10** (5): patrones-y-buenas-practicas, pruebas-unitarias-integracion, sistema-de-archivos, mantenimiento-y-deuda-tecnica, permisos-y-usuarios
- **Cluster 11** (9): sistema-de-archivos-por-bitacora, sql-consultas-joins-agregaciones, subsistema-de-entrada-y-salida, tcp-ip-capas-enrutamiento, tipos-de-licencias-de-software, seguridad-de-red-firewall-vpn-cifrado, transacciones-acid, seguridad-informatica, virtualizacion-maquina-virtual-contenedor
- **Cluster 12** (3): bases-de-datos-no-relacionales-nosql, como-se-construye-una-pagina-web-html-css-javascript, redes-locales-lan-wifi-y-topologias

## Ingeniería (11 temas, 2 clusters)

- **Cluster 1** (5): modelizacion-matematica, problema-y-restricciones, disciplinas-de-la-ingenieria, investigar-soluciones-existentes, diseno-conceptual
- **Cluster 2** (6): modelado-y-calculo, prototipo, resistencia-de-materiales, ensayo-y-medicion, optimizacion-e-iteracion, comunicar-la-solucion

## Investigación (12 temas, 2 clusters)

- **Cluster 1** (5): observacion-y-pregunta-investigable, hipotesis-buena-o-mala, metodologia-cualitativa-vs-cuantitativa, construir-y-usar-un-modelo-cientifico, trabajo-de-campo-enfoque-socioantropologico
- **Cluster 2** (7): corrientes-filosofia-de-la-ciencia, diseno-experimental-variables-y-control, tecnicas-de-investigacion-social, recoleccion-de-datos, analisis-estadistico-de-resultados, conclusion-y-comunicacion-de-resultados, argumentar-desde-evidencia

## Economía (86 temas, 17 clusters)

- **Cluster 1** (5): blockchain-claves-wallet, capitalismo-industrial-trabajo-asalariado, contratos-inteligentes, costo-marginal, debe-haber-balance
- **Cluster 2** (5): detectar-una-oportunidad-de-negocio, elasticidad, estructura-del-patrimonio, estructura-productiva-dependencia, ecuacion-contable-fundamental
- **Cluster 3** (5): interes-simple, iva, interes-compuesto, origen-excedente-moneda-mercado, cft-vs-tasa-nominal
- **Cluster 4** (5): cuota-credito-frances, dex-swap, interes-compuesto-funcion, partida-doble, plazo-fijo-vs-inflacion
- **Cluster 5** (5): libro-diario-mayor, pools-liquidez-amm, estados-contables, precio-final, contabilidad-ambiental
- **Cluster 6** (5): contabilidad-como-sistema-de-informacion, costo-de-oportunidad, indices-financieros, division-formal-microeconomia-macroeconomia, oferta-y-demanda
- **Cluster 7** (6): economia-positiva-y-normativa, fisiocracia, mercantilismo, pbi-e-inflacion, liberalismo-clasico-y-escuela-austriaca, como-se-calcula-el-ipc-argentina
- **Cluster 8** (5): balanza-comercial, recibo-de-sueldo/general, comercio-internacional-ventaja-comparativa, recibo-de-sueldo/argentina, sectores-economicos
- **Cluster 9** (5): descuentos-obligatorios/jubilacion, descuentos-obligatorios/obra-social, jubilacion-sistema-previsional, monotributo, socialismo-utopico
- **Cluster 10** (5): sueldo-promedio-pais, marxismo, tipo-cambio-fijo, economia-feminista-y-del-cuidado, keynesianismo
- **Cluster 11** (5): tipo-cambio-flotante, neoliberalismo, devaluacion, ordoliberalismo, reservas-banco-central
- **Cluster 12** (5): tipos-de-organizaciones, deuda-publica-externa, deuda-publica-interna, elementos-de-las-organizaciones, default-deuda
- **Cluster 13** (5): ambiente-interno-y-externo-organizacion, cultura-organizacional, estructura-organizacional, objetivos-y-metas, tipos-de-proyecto
- **Cluster 14** (5): cooperativismo-y-mutualismo, planificacion-administrativa, tipos-de-sociedades, coordinar-personas-y-recursos, presupuesto-administrativo
- **Cluster 15** (5): validar-con-clientes-construir-medir-aprender, control-de-gestion-e-indicadores, estado-de-resultados, mejora-continua, margenes-bruto-y-neto
- **Cluster 16** (5): mvp-producto-minimo-viable, productividad-produccion-insumos, business-model-canvas, punto-de-equilibrio, pitch-a-inversores
- **Cluster 17** (5): valor-esperado-riesgo, vision-y-mision-organizacional, fondo-emergencia-diversificacion, estudio-de-contexto-para-un-proyecto, seguros

## Derecho (21 temas, 4 clusters)

- **Cluster 1** (5): ramas-del-derecho, derecho-administrativo, derecho-civil, derecho-comercial, derecho-constitucional
- **Cluster 2** (5): derecho-internacional, derecho-laboral, derecho-penal, denuncia-y-etapa-de-instruccion, hecho-juridicamente-relevante
- **Cluster 3** (5): investigacion-prueba-y-fiscalia, fuentes-del-derecho, norma-jerarquia-y-vigencia, corrientes-interpretacion-juridica, interpretacion-normativa
- **Cluster 4** (6): politica-criminal-garantismo-mano-dura, argumentacion-juridica, resolucion-de-conflictos-y-sentencia, juicio-oral, apelacion-e-instancias, ejecucion-de-la-sentencia

## Dibujo Técnico (20 temas, 4 clusters)

- **Cluster 1** (5): sistemas-de-proyeccion, vistas-frontal-superior-lateral, perspectivas-isometrica-y-caballera, escalas-numericas-y-graficas, acotacion-normalizada
- **Cluster 2** (5): cortes-y-secciones, croquis-y-relevamiento-de-medidas, dibujo-asistido-por-computadora-cad, geometria-descriptiva-punto-recta-plano, instrumentos-de-dibujo-y-trazos-basicos
- **Cluster 3** (5): interpretar-planos-de-piezas-y-conjuntos, geometria-constructiva-tangencias-y-enlaces, representacion-de-roscas-tornillos-y-uniones, simbolos-de-soldadura-y-uniones, tipos-de-linea-formatos-y-rotulo
- **Cluster 4** (5): tolerancias-y-ajustes, dibujo-arquitectonico-plantas-cortes-y-fachadas, dibujo-electrico-y-esquemas-de-instalaciones, rugosidad-y-acabado-superficial, vistas-auxiliares-y-detalles

## Psicología (16 temas, 3 clusters)

- **Cluster 1** (5): psicologia-modernidad-y-el-yo, autoconocimiento-como-busqueda-humana, dependencia-del-otro-cultura-como-herencia, memoria-y-olvido-represion-inconsciente, psicologia-cognitiva-percepcion-memoria-atencion
- **Cluster 2** (5): lenguaje-pensamiento-y-creatividad, corrientes-psicologicas-psicoanalisis-conductismo-humanismo-cognitivismo, edades-del-ser-humano-ninez-pubertad-identidad, salud-mental-ansiedad-depresion-pedir-ayuda, sesgos-cognitivos-heuristicas-error-sistematico
- **Cluster 3** (6): condicionamiento-y-aprendizaje-psicologico, desarrollo-cognitivo-piaget-vygotsky, emociones-y-regulacion-emocional, motivacion-y-necesidades, personalidad, psicologia-social-grupos-y-conformidad

## Comunicación (11 temas, 2 clusters)

- **Cluster 1** (5): generos-periodisticos, teoria-de-la-comunicacion-emisor-receptor-canal-ruido, etica-y-responsabilidad-de-los-medios, corrientes-de-la-comunicacion, publicidad-y-persuasion
- **Cluster 2** (6): analisis-del-discurso-y-encuadre-mediatico, comunicacion-institucional-y-de-crisis, comunicacion-oral-y-hablar-en-publico, comunicacion-verbal-y-no-verbal, comunicacion-visual-e-imagen, medios-masivos-y-medios-digitales

## Electrónica (20 temas, 4 clusters)

- **Cluster 1** (5): componentes-resistencia-capacitor-diodo-transistor, circuitos-y-leyes-de-kirchhoff, logica-digital-puertas-and-or-not, microcontroladores-y-microprocesadores, sensores-y-actuadores
- **Cluster 2** (5): capacitor-rc-carga-y-descarga, compuertas-nand-nor-xor-y-universalidad, diodo-polarizacion-rectificacion-y-fuentes, divisor-de-tension-y-codigo-de-colores, inductores-y-bobinas
- **Cluster 3** (5): instrumentos-de-medicion-multimetro-y-osciloscopio, logica-combinacional-sumadores-multiplexores, microcontrolador-entradas-y-salidas-digitales, logica-secuencial-flip-flops-y-contadores, comunicacion-serie-uart-i2c-spi
- **Cluster 4** (5): prototipado-protoboard-soldadura-y-seguridad, senales-analogicas-y-digitales-adc-dac, temporizador-555-y-osciladores, transistor-como-interruptor-y-amplificador, amplificador-operacional

## Ciencia de Materiales (21 temas, 4 clusters)

- **Cluster 1** (6): corrosion, elasticidad-ley-de-hooke-modulo-de-young, propiedades-mecanicas-dureza-tenacidad-ductilidad, plasticidad-y-punto-de-fluencia, familias-de-materiales-metales-ceramicos-polimeros-compuestos, fatiga-y-fractura
- **Cluster 2** (5): enlaces-y-estructura-atomica-de-los-materiales, ensayos-de-materiales-traccion-dureza-impacto, ceramicos-y-vidrios, estructuras-cristalinas-y-celdas-unitarias, materiales-compuestos-fibras-y-matrices
- **Cluster 3** (5): defectos-cristalinos-y-dislocaciones, diagramas-de-fase-y-aleaciones, endurecimiento-y-conformado-de-metales, diagrama-hierro-carbono-y-aceros, polimeros-termoplasticos-termoestables-elastomeros
- **Cluster 4** (5): prevencion-de-la-corrosion-y-proteccion-superficial, propiedades-electricas-y-magneticas-de-los-materiales, propiedades-termicas-dilatacion-y-conductividad, seleccion-de-materiales-y-sostenibilidad, tratamientos-termicos-temple-revenido-recocido

## Automatización (19 temas, 3 clusters)

- **Cluster 1** (5): lazo-abierto-vs-lazo-cerrado, plc-logica-de-control-industrial, realimentacion-feedback, control-pid-proporcional-integral-derivativo, servomecanismos
- **Cluster 2** (5): control-on-off-con-histeresis, instrumentacion-industrial-y-lazos-4-20-ma, modelado-de-sistemas-dinamicos-primer-orden, mantenimiento-y-diagnostico-de-sistemas-automatizados, motores-electricos-y-variadores-de-frecuencia
- **Cluster 3** (9): neumatica-e-hidraulica-basica, plc-lenguaje-ladder-contactos-y-bobinas, redes-industriales-y-scada, grafcet-y-automatismos-secuenciales, plc-temporizadores-contadores-y-secuencias, respuesta-transitoria-y-regimen-permanente, seguridad-funcional-y-paradas-de-emergencia, estabilidad-de-sistemas-de-control, sintonia-de-pid-metodos-practicos

## UX/Diseño (19 temas, 3 clusters)

- **Cluster 1** (5): usabilidad-heuristicas-de-nielsen, accesibilidad-wcag-contraste-lectores-de-pantalla, jerarquia-visual-e-informacion, prototipado-wireframe-mockup-prototipo-interactivo, pruebas-de-usuario
- **Cluster 2** (5): analisis-de-datos-de-uso-y-metricas-ux, arquitectura-de-informacion-y-navegacion, color-en-interfaces, diseno-de-interfaces-para-voz-y-conversacion, diseno-responsive-y-mobile-first
- **Cluster 3** (9): etica-del-diseno-patrones-oscuros, formularios-y-microinteracciones, heuristicas-de-nielsen-las-diez-completas, investigacion-de-usuarios-entrevistas-y-personas, evaluacion-heuristica-y-metodos-sin-usuarios, diseno-centrado-en-el-usuario-flujo-de-trabajo, niveles-wcag-a-aa-aaa-y-navegacion-por-teclado, tipografia-en-interfaces, sistemas-de-diseno-y-componentes

## Arte (24 temas, 4 clusters)

- **Cluster 1** (5): acustica-instrumento-musical, composicion-y-proporcion, origen-del-arte, elementos-del-arte, principios-de-diseno
- **Cluster 2** (5): ritmo-compas-pulso-figuras-musicales, narrativa-audiovisual/plano, danza-ritmo-tiempo-expresion-corporal, lenguaje-musical-pentagrama-escalas-intervalos, narrativa-audiovisual/encuadre
- **Cluster 3** (5): armonia-basica-acordes-tonalidad, narrativa-audiovisual/montaje, rosetones-y-simetria, produccion-multimedial, teatro-dramaturgia-y-actuacion
- **Cluster 4** (9): arte-antiguo-egipto-y-mesopotamia, arte-clasico-grecia-y-roma, arte-medieval-romanico-y-gotico, renacimiento-y-manierismo, barroco, impresionismo-y-postimpresionismo, vanguardias-del-siglo-xx, arte-argentino-colonial-al-siglo-xx, fotografia-y-cine-como-arte

## Filosofía (27 temas, 4 clusters)

- **Cluster 1** (5): logica-proposicional, metodo-cientifico-racionalismo, el-gusto-estetico, epistemologia, etica-como-rama-propia
- **Cluster 2** (5): existencia, contractualismo, deontologia, etica-de-la-virtud, historia-de-la-filosofia-y-corrientes
- **Cluster 3** (8): lo-bello, que-es-el-arte, realidad, ser-ontologia, utilitarismo, validez-de-un-razonamiento, bioetica-general, logica-de-predicados
- **Cluster 4** (9): empirismo-hume, fenomenologia-y-existencialismo, filosofia-del-lenguaje-y-ciencia, filosofia-politica, kant-y-el-idealismo, presocraticos-y-socrates, marx-y-el-materialismo-historico, platon-y-aristoteles, filosofia-medieval-santo-tomas

## Antropología (10 temas, 2 clusters)

- **Cluster 1** (5): cultura, diversidad-cultural, subcampos-de-la-antropologia, etnocentrismo, relaciones-de-parentesco
- **Cluster 2** (5): economia-y-poder-en-las-sociedades, etnografia-y-observacion-participante, identidad-y-etnicidad, mito-ritual-y-religion, pueblos-originarios-de-argentina

## Sociología (10 temas, 2 clusters)

- **Cluster 1** (3): hechos-sociales, instituciones, estratificacion
- **Cluster 2** (7): cambio-social-y-movimientos, clasicos-durkheim-weber-marx, desigualdad-y-clases-hoy, metodos-de-investigacion-social, socializacion-y-roles, normas-valores-y-control-social, genero-como-categoria-social

## Aprendizaje (8 temas, 2 clusters)

- **Cluster 1** (2): metacognicion-saber-que-se-y-que-no-se, tecnicas-de-estudio-repaso-espaciado-recuperacion
- **Cluster 2** (6): atencion-concentracion-y-distracciones, el-error-y-la-retroalimentacion, lectura-activa-y-toma-de-apuntes, motivacion-para-aprender, planificar-el-estudio-y-gestionar-el-tiempo, estudiar-con-otros

## Ciudadanía Digital (14 temas, 2 clusters)

- **Cluster 1** (7): ciudadania-digital-privacidad-huella-digital, confiabilidad-y-verificacion-de-una-fuente, desinformacion-en-red, detectar-desinformacion-sesgo-deepfakes, fuente-primaria-vs-secundaria, publicidad-enganosa, verificacion-de-una-noticia
- **Cluster 2** (7): algoritmos-burbujas-y-economia-de-la-atencion, ciberacoso-y-convivencia-en-redes, contrasenas-y-autenticacion, derechos-digitales-y-proteccion-de-datos, participacion-ciudadana-en-linea, phishing-y-estafas-en-linea, propiedad-intelectual-y-licencias-digitales

## Resolución de Problemas (15 temas, 3 clusters)

- **Cluster 1** (5): detectar-el-problema, analizar-causas-y-restricciones, disenar-posibles-soluciones, identificar-alternativas, implementar-la-solucion
- **Cluster 2** (5): costo-beneficio, definir-alcance-y-objetivos, evaluar-el-resultado, planificacion-tareas-e-hitos, mejorar-o-iterar
- **Cluster 3** (5): asignacion-de-recursos, riesgo-e-incertidumbre, seguimiento-y-control, trade-offs-y-priorizacion, cierre-y-lecciones-aprendidas

## Ed. Física (25 temas, 4 clusters)

- **Cluster 1** (5): deportes-medidas-cancha-superficies, fisiologia-del-ejercicio, deportes-jugadores-posiciones-puntaje, alfabetizacion-corporal, deportes-origen-historico
- **Cluster 2** (5): frecuencia-cardiaca-reposo, deporte-como-fenomeno-cultural-argentino, el-pato, frecuencia-cardiaca-maxima-zonas, imc-indice-masa-corporal
- **Cluster 3** (6): juegos-olimpicos, planificacion-progresion-volumen, prevencion-cuidado-rice-calentamiento-ergonomia, prevencion-adicciones-ley-26586, primeros-auxilios-rcp-dea, politicas-de-drogas
- **Cluster 4** (9): capacidades-fisicas-fuerza-resistencia-flexibilidad-velocidad, nutricion-e-hidratacion-en-la-actividad-fisica, reglamento-y-fundamentos-del-basquet, reglamento-y-fundamentos-del-futbol, reglamento-y-fundamentos-del-futsal, reglamento-y-fundamentos-del-handball, reglamento-y-fundamentos-del-hockey, reglamento-y-fundamentos-del-rugby, reglamento-y-fundamentos-del-voley

## Resumen

| Materia | Temas | Clusters |
|---|---:|---:|
| Matemática | 161 | 32 |
| Lengua | 75 | 15 |
| Historia profunda | 109 | 21 |
| Historia | 28 | 5 |
| Geografía | 40 | 8 |
| Cívica | 31 | 6 |
| Química | 42 | 8 |
| Biología | 37 | 7 |
| Física | 77 | 15 |
| Informática | 62 | 11 |
| Ingeniería | 11 | 2 |
| Investigación | 12 | 2 |
| Economía | 86 | 17 |
| Derecho | 21 | 4 |
| Dibujo Técnico | 5 | 1 |
| Psicología | 10 | 2 |
| Comunicación | 5 | 1 |
| Electrónica | 5 | 1 |
| Ciencia de Materiales | 6 | 1 |
| Automatización | 5 | 1 |
| UX/Diseño | 5 | 1 |
| Arte | 15 | 3 |
| Filosofía | 18 | 3 |
| Antropología | 5 | 1 |
| Sociología | 3 | 1 |
| Aprendizaje | 2 | 1 |
| Ciudadanía Digital | 7 | 1 |
| Resolución de Problemas | 15 | 3 |
| Ed. Física | 16 | 3 |
| **Total** | **911** | **177** |

## Fuera del alcance (decisión 2026-10: no se gamifican)

Estas materias tienen contenido real en `material/` pero **no** tienen examen jefe a propósito (misma decisión que Oficios: no certifican nada y un tier de logro en estos temas suena raro). Filosofía, Antropología, Sociología, Aprendizaje, Ciudadanía Digital, Resolución de Problemas y Ed. Física sí entraron (ids 951-963).

| Materia | Temas |
|---|---:|
| Vida Cotidiana | 28 |
| Salud | 1 |
| ESI | 8 |
