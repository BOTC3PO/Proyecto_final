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
| Informática | 59 | 59 | 61 |
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

- **Cluster 1** (5): asintotas, concavidad-y-puntos-de-inflexion, conjuntos-pertenencia-e-inclusion, conteo, divisibilidad/regla-del-7-opcional
- **Cluster 2** (5): grafos-vertices-y-aristas, integral-definida-y-area-bajo-la-curva, arboles-grafo-sin-ciclos, grafos-dirigidos-no-dirigidos-y-ponderados, leer-una-tabla
- **Cluster 3** (5): caminos-y-ciclos, leer-grafico/barras, algoritmos-de-recorrido-bfs-dfs, leer-grafico/lineas, leer-grafico/torta
- **Cluster 4** (5): magnitud-unidad-instrumento, construir-un-grafico, grafico-eje-truncado, media-mediana-y-moda, razones-trigonometricas
- **Cluster 5** (5): cual-miente-y-cuando, funciones-trigonometricas-seno-coseno, regla-de-lhopital, identidades-y-ecuaciones-trigonometricas, regresion-lineal
- **Cluster 6** (5): sistema-metrico-y-conversiones, correlacion-no-es-causalidad, analisis-dimensional, angulos, cifras-significativas-y-error
- **Cluster 7** (5): circunferencia-y-circulo, error-sistematico-vs-aleatorio, perimetro-y-area, poligonos, tablas-de-frecuencia-cuartiles-percentiles-y-varianza
- **Cluster 8** (5): area-poligonos-regulares-y-compuestas, dispersion-rango-y-desvio, teorema-de-bolzano, distribucion-normal, teorema-del-seno-y-del-coseno
- **Cluster 9** (5): muestreo-y-sesgo, triangulos, teorema-central-del-limite, congruencia-de-triangulos, intervalo-de-confianza
- **Cluster 10** (5): semejanza-y-teorema-de-thales, teorema-de-pitagoras, test-de-hipotesis, transformaciones-geometricas/homotecia, transformaciones-geometricas/reflexion
- **Cluster 11** (5): transformaciones-geometricas/rotacion, transformaciones-geometricas/traslacion, union-interseccion-y-diferencia, valor-posicional, diagramas-de-venn
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
- **Cluster 30** (5): riesgo-relativo-vs-absoluto, teorema-del-binomio, variable-aleatoria-discreta-continua, variaciones, distribucion-de-poisson
- **Cluster 31** (5): distribucion-exponencial, vectores-modulo-y-direccion, volumen-y-capacidad, suma-de-vectores-y-descomposicion, cuerpos-redondos-y-poliedros/cilindros
- **Cluster 32** (6): cuerpos-redondos-y-poliedros/conos, cuerpos-redondos-y-poliedros/esferas, cuerpos-redondos-y-poliedros/piramides, cuerpos-redondos-y-poliedros/prismas, producto-escalar, cuerpos-redondos-y-poliedros/desarrollo-plano

## Lengua (75 temas, 15 clusters)

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

## Historia profunda (109 temas, 21 clusters)

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
- **Cluster 12** (5): mesopotamia, pueblos-originarios-territorio-argentino, civilizaciones-antiguas, expansion-del-imperio-romano, imperio-de-alejandro-magno-helenistico
- **Cluster 13** (5): imperio-han-china, imperio-persa, imperios-expansion, caida-de-roma-y-alta-edad-media, edad-media-feudalismo
- **Cluster 14** (5): imperio-bizantino, islam-y-expansion-arabe, edad-media-plena, baja-edad-media-y-crisis, renacimiento-y-reforma
- **Cluster 15** (5): ciencia-revolucion-cientifica, imprenta, navegacion, conquista-colonizacion-america, modernidad-imprenta-navegacion-ciencia
- **Cluster 16** (5): absolutismo-europeo, conquista-y-colonia-argentina, ilustracion, virreinato-y-comercio, revolucion-industrial
- **Cluster 17** (5): revolucion-de-mayo, electrificacion-fabrica-hogar, guerras-de-independencia-argentina, huella-humana-en-el-clima-inicio, guerras-civiles-unitarios-federales
- **Cluster 18** (5): revoluciones-burguesas-liberalismo, organizacion-nacional-constitucion-1853, estados-nacionales, modelo-agroexportador-inmigracion, imperialismo
- **Cluster 19** (5): ampliacion-democratica-ley-saenz-pena, sociedad-de-masas-y-democracia-liberal, primera-guerra-mundial-y-revolucion-rusa, entreguerras-y-crisis-de-1929, golpes-de-estado-interrupciones
- **Cluster 20** (5): segunda-guerra-mundial, peronismo-derechos-sociales, descolonizacion-de-africa-y-asia, guerras-mundiales, guerra-fria-descolonizacion
- **Cluster 21** (9): terrorismo-de-estado-argentina, historia-contemporanea-de-africa, guerra-de-malvinas, historia-contemporanea-de-asia-y-pacifico, historia-contemporanea-de-medio-oriente, recuperacion-democratica-memoria, globalizacion-era-digital, historia-reciente-argentina, internet-redes-globalizacion-digital

## Historia (28 temas, 5 clusters)

- **Cluster 1** (5): crisis-de-2001, interpretar-una-fuente-historica, linea-de-tiempo-y-antes-despues, reforma-universitaria-1918, decada-siglo-milenio
- **Cluster 2** (5): semana-tragica-1919, antes-y-despues-de-cristo, industrializacion-por-sustitucion-de-importaciones-isi, periodizacion-historica, causa-y-consecuencia
- **Cluster 3** (5): significancia-historica, cambio-y-continuidad, evidencia, dimension-etica, multicausalidad
- **Cluster 4** (5): escuela-de-los-annales, historia-cultural, materialismo-historico, positivismo, revoluciones
- **Cluster 5** (8): independencias, revolucion-mexicana-1910-1920, guerras, guerra-civil-espanola-1936-1939, guerra-del-paraguay-y-triple-alianza, rosas-y-la-confederacion, conquista-del-desierto-y-campana-al-chaco, economias-regionales-tempranas

## Geografía (40 temas, 8 clusters)

- **Cluster 1** (5): coordenadas-y-husos-horarios, densidad-poblacion, escala-de-mapa, huella-de-carbono-agua-virtual, orientacion-puntos-cardinales
- **Cluster 2** (5): mapa-plano-escala, coordenadas-geograficas, division-politica, sig-mapas-digitales, estados-y-globalizacion
- **Cluster 3** (5): region, sig-gps, relieve-clima-biomas, sig-imagenes-satelitales, recursos-actividades-economicas
- **Cluster 4** (5): regiones-naturales-de-argentina, geografia-economica-agricola-argentina, geografia-industrial-mundial, mineria-e-hidrocarburos-en-argentina, america-latina-industria-y-energia
- **Cluster 5** (5): poblacion-piramides-migraciones, produccion-agraria-mundial-y-biotecnologia, ambiente-y-recursos, america-anglosajona, ambientalismo-liberal
- **Cluster 6** (5): america-latina-formacion-poblacion, conservacionismo, decrecimiento, ecologismo-politico, indicadores-sociales-de-argentina
- **Cluster 7** (5): migraciones-internacionales, indice-de-desarrollo-humano, migraciones-internas-en-argentina, paises-de-america-latina, recursos-hidricos-y-gestion
- **Cluster 8** (5): riesgos-naturales-argentinos, trabajo-y-desempleo-mundial, riesgos-ambientales-mundiales, turismo-mundial, urbanizacion-migracion-ciudad

## Cívica (31 temas, 6 clusters)

- **Cluster 1** (5): derechos-nino, encuesta-electoral, derechos-indigenas, discriminacion-y-organismos-de-proteccion, derechos-genero
- **Cluster 2** (5): estado-de-derecho-por-que-importa, marchas-patrioticas, organizacion-del-estado, origen-estado-derecho, constitucion-preambulo
- **Cluster 3** (5): division-de-poderes, constitucion-nacional-jerarquia-normativa, como-se-hace-una-ley, derechos-y-garantias, documentos-y-tramites
- **Cluster 4** (5): impuestos, alcoholemia-y-conduccion, prioridades-de-paso, proyecto-ciudadano-participativo, senalizacion-vial
- **Cluster 5** (5): simbolos-patrios, sistema-de-salud, sistema-electoral-dhondt, sistemas-politicos-comparados, sueldo-promedio-pais
- **Cluster 6** (6): partidos-politicos, sufragio-restringido-universal, organismos-internacionales, teoria-del-poder, tratados-internacionales, tipos-de-estado

## Química (42 temas, 8 clusters)

- **Cluster 1** (5): balanceo-ecuaciones, concentracion-de-una-solucion, densidad, dilucion-soluciones, equilibrio-quimico-kc
- **Cluster 2** (5): estados-y-cambios, cinetica-reaccion, equilibrio-solubilidad-ksp, estequiometria, medicion-de-laboratorio
- **Cluster 3** (5): mezclas-metodos-separacion, ph-poh, modelos-atomicos, propiedades-coligativas, atomo-particulas-subatomicas
- **Cluster 4** (5): quimica-analitica, numero-atomico-masico, quimica-de-la-atmosfera, configuracion-electronica, reactivo-limitante-rendimiento
- **Cluster 5** (5): seguridad-laboratorio, tabla-periodica-tendencias, tipos-reacciones-quimicas, enlace-quimico-polaridad, carbono-tetravalencia-cadenas
- **Cluster 6** (5): geometria-molecular-vsepr, hidrocarburos-alcanos-alquenos-alquinos, nanotecnologia, grupos-funcionales, nomenclatura-compuestos
- **Cluster 7** (5): biomoleculas-glucidos-lipidos-proteinas, mol-masa-molar, oxidacion-reduccion, gases-ideales, electrolisis
- **Cluster 8** (7): petroleo-como-recurso-energetico, pilas-celdas-galvanicas, polimeros-naturales-sinteticos, presiones-parciales, superconductividad, termoquimica, energia-libre-gibbs

## Biología (37 temas, 7 clusters)

- **Cluster 1** (5): crecimiento-poblacional, genetica-mendeliana-punnett, grupos-sanguineos, cruce-dihibrido, herencia-ligada-al-sexo
- **Cluster 2** (5): necesidades-basicas-seres-vivos, ser-vivo-caracteristicas, celula-organelas, ciclos-vida-metamorfosis, clasificacion-evolucion
- **Cluster 3** (5): fotosintesis-respiracion-celular, habitats-adaptacion, enzimas-proteina-sustrato-ph, flujo-materia-energia, microbiologia-virus-inmunitario
- **Cluster 4** (5): cadenas-redes-troficas, mal-de-chagas, ciclos-biogeoquimicos, dinamica-poblacional-capacidad-carga, mitosis-meiosis
- **Cluster 5** (5): biodiversidad-indices, adn-gen-proteina, conservacion-areas-protegidas, biotecnologia-pcr-crispr, nicho-ecologico
- **Cluster 6** (5): partes-planta-germinacion, piramide-biomasas, quimiosintesis, seleccion-natural, sistemas-cuerpo-humano
- **Cluster 7** (7): deriva-genetica-flujo-genico, especiacion, presion-arterial, filogenia-arboles-evolutivos, sistema-endocrino-hormonas-glandulas, sistema-nervioso-neurona-sinapsis, transgenicos-bioetica

## Física (77 temas, 15 clusters)

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

## Informática (59 temas, 11 clusters)

- **Cluster 1** (5): algebra-booleana, complejidad-asintotica, ofimatica-planilla-de-calculo, que-es-la-tecnica-y-la-tecnologia, revolucion-informatica
- **Cluster 2** (5): medios-tecnicos-extension-capacidades-humanas, historia-y-evolucion-de-los-sistemas-operativos, procesos-tecnicos-artesanales-e-industriales, arranque-de-la-computadora-boot, sistemas-numeracion
- **Cluster 3** (5): tipos-de-so-por-dispositivo, cpu-unidad-de-control-y-alu, unidades-almacenamiento, ciclo-de-instruccion-fetch-decode-execute, memoria-ram-cache-jerarquia
- **Cluster 4** (5): algoritmo-secuencia-de-pasos, almacenamiento-volatil-vs-no-volatil, buses-y-entrada-salida, variables-y-tipos-de-dato, estructuras-de-control-condicionales
- **Cluster 5** (5): estructuras-de-control-bucles, funciones-y-modularidad, estructuras-de-datos-listas-pilas-colas, poo-clases-y-objetos, algoritmos-busqueda-ordenamiento
- **Cluster 6** (5): archivos-y-persistencia, inteligencia-artificial-reglas-a-aprendizaje, modelo-relacional-tabla-registro-clave-primaria, etica-de-la-ia-sesgo-privacidad, criptografia-clave-simetrica-asimetrica-hash
- **Cluster 7** (5): direccionamiento-ip-dns, proceso-programa-en-ejecucion, protocolo-http-peticion-respuesta, comunicacion-entre-procesos, memoria-asignacion-memoria-virtual
- **Cluster 8** (5): planificacion-de-procesos, paginacion, interrupciones, recursividad, relaciones-y-claves-foraneas
- **Cluster 9** (5): requisitos-funcionales-no-funcionales, normalizacion-bases-datos, diseno-y-arquitectura-de-software, segmentacion, control-de-versiones
- **Cluster 10** (5): patrones-y-buenas-practicas, pruebas-unitarias-integracion, sistema-de-archivos, mantenimiento-y-deuda-tecnica, permisos-y-usuarios
- **Cluster 11** (9): sistema-de-archivos-por-bitacora, sql-consultas-joins-agregaciones, subsistema-de-entrada-y-salida, tcp-ip-capas-enrutamiento, tipos-de-licencias-de-software, seguridad-de-red-firewall-vpn-cifrado, transacciones-acid, seguridad-informatica, virtualizacion-maquina-virtual-contenedor

## Ingeniería (11 temas, 2 clusters)

- **Cluster 1** (5): modelizacion-matematica, problema-y-restricciones, disciplinas-de-la-ingenieria, investigar-soluciones-existentes, diseno-conceptual
- **Cluster 2** (6): modelado-y-calculo, prototipo, resistencia-de-materiales, ensayo-y-medicion, optimizacion-e-iteracion, comunicar-la-solucion

## Investigación (12 temas, 2 clusters)

- **Cluster 1** (5): observacion-y-pregunta-investigable, hipotesis-buena-o-mala, metodologia-cualitativa-vs-cuantitativa, construir-y-usar-un-modelo-cientifico, trabajo-de-campo-enfoque-socioantropologico
- **Cluster 2** (7): corrientes-filosofia-de-la-ciencia, diseno-experimental-variables-y-control, tecnicas-de-investigacion-social, recoleccion-de-datos, analisis-estadistico-de-resultados, conclusion-y-comunicacion-de-resultados, argumentar-desde-evidencia

## Economía (85 temas, 17 clusters)

- **Cluster 1** (5): blockchain-claves-wallet, capitalismo-industrial-trabajo-asalariado, contratos-inteligentes, costo-marginal, debe-haber-balance
- **Cluster 2** (5): detectar-una-oportunidad-de-negocio, elasticidad, estructura-del-patrimonio, estructura-productiva-dependencia, ecuacion-contable-fundamental
- **Cluster 3** (5): interes-simple, iva, interes-compuesto, origen-excedente-moneda-mercado, cft-vs-tasa-nominal
- **Cluster 4** (5): cuota-credito-frances, dex-swap, interes-compuesto-funcion, partida-doble, plazo-fijo-vs-inflacion
- **Cluster 5** (5): libro-diario-mayor, pools-liquidez-amm, estados-contables, precio-final, contabilidad-ambiental
- **Cluster 6** (5): contabilidad-como-sistema-de-informacion, costo-de-oportunidad, indices-financieros, division-formal-microeconomia-macroeconomia, oferta-y-demanda
- **Cluster 7** (5): economia-positiva-y-normativa, fisiocracia, mercantilismo, pbi-e-inflacion, liberalismo-clasico-y-escuela-austriaca
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

## Dibujo Técnico (5 temas, 1 clusters)

- **Cluster 1** (5): sistemas-de-proyeccion, vistas-frontal-superior-lateral, perspectivas-isometrica-y-caballera, escalas-numericas-y-graficas, acotacion-normalizada

## Psicología (10 temas, 2 clusters)

- **Cluster 1** (5): psicologia-modernidad-y-el-yo, autoconocimiento-como-busqueda-humana, dependencia-del-otro-cultura-como-herencia, memoria-y-olvido-represion-inconsciente, psicologia-cognitiva-percepcion-memoria-atencion
- **Cluster 2** (5): lenguaje-pensamiento-y-creatividad, corrientes-psicologicas-psicoanalisis-conductismo-humanismo-cognitivismo, edades-del-ser-humano-ninez-pubertad-identidad, salud-mental-ansiedad-depresion-pedir-ayuda, sesgos-cognitivos-heuristicas-error-sistematico

## Comunicación (5 temas, 1 clusters)

- **Cluster 1** (5): generos-periodisticos, teoria-de-la-comunicacion-emisor-receptor-canal-ruido, etica-y-responsabilidad-de-los-medios, corrientes-de-la-comunicacion, publicidad-y-persuasion

## Electrónica (5 temas, 1 clusters)

- **Cluster 1** (5): componentes-resistencia-capacitor-diodo-transistor, circuitos-y-leyes-de-kirchhoff, logica-digital-puertas-and-or-not, microcontroladores-y-microprocesadores, sensores-y-actuadores

## Ciencia de Materiales (6 temas, 1 clusters)

- **Cluster 1** (6): corrosion, elasticidad-ley-de-hooke-modulo-de-young, propiedades-mecanicas-dureza-tenacidad-ductilidad, plasticidad-y-punto-de-fluencia, familias-de-materiales-metales-ceramicos-polimeros-compuestos, fatiga-y-fractura

## Automatización (5 temas, 1 clusters)

- **Cluster 1** (5): lazo-abierto-vs-lazo-cerrado, plc-logica-de-control-industrial, realimentacion-feedback, control-pid-proporcional-integral-derivativo, servomecanismos

## UX/Diseño (5 temas, 1 clusters)

- **Cluster 1** (5): usabilidad-heuristicas-de-nielsen, accesibilidad-wcag-contraste-lectores-de-pantalla, jerarquia-visual-e-informacion, prototipado-wireframe-mockup-prototipo-interactivo, pruebas-de-usuario

## Arte (15 temas, 3 clusters)

- **Cluster 1** (5): acustica-instrumento-musical, composicion-y-proporcion, origen-del-arte, elementos-del-arte, principios-de-diseno
- **Cluster 2** (5): ritmo-compas-pulso-figuras-musicales, narrativa-audiovisual/plano, danza-ritmo-tiempo-expresion-corporal, lenguaje-musical-pentagrama-escalas-intervalos, narrativa-audiovisual/encuadre
- **Cluster 3** (5): armonia-basica-acordes-tonalidad, narrativa-audiovisual/montaje, rosetones-y-simetria, produccion-multimedial, teatro-dramaturgia-y-actuacion

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
| Informática | 59 | 11 |
| Ingeniería | 11 | 2 |
| Investigación | 12 | 2 |
| Economía | 85 | 17 |
| Derecho | 21 | 4 |
| Dibujo Técnico | 5 | 1 |
| Psicología | 10 | 2 |
| Comunicación | 5 | 1 |
| Electrónica | 5 | 1 |
| Ciencia de Materiales | 6 | 1 |
| Automatización | 5 | 1 |
| UX/Diseño | 5 | 1 |
| Arte | 15 | 3 |
| **Total** | **844** | **164** |

## Fuera del alcance original (2026-08-09) — pendiente decisión de Javier

Estas materias tienen contenido real en `material/` hoy pero no estaban en la tabla de alcance de `examen-jefe-gamificacion-PLANIFICACION.md` (Tronco 1-21). No se les armó cluster todavía — falta decidir si entran (y con qué criterio, ej. ESI podría excluirse a propósito como Oficios).

| Materia | Temas |
|---|---:|
| Antropología | 5 |
| Ciudadanía Digital | 7 |
| Vida Cotidiana | 28 |
| Sociología | 3 |
| Aprendizaje | 2 |
| Resolución de Problemas | 15 |
| Salud | 1 |
| ESI | 8 |
| Ed. Física | 16 |
