# Clusters reales del examen-jefe (regenerado 2026-09-22) — generado automáticamente

**Rediseño en curso (2026-09-22)**: el corte alfabético original (documentado
como transitorio desde 2026-08-14, nunca ajustado) se está reemplazando por
partición topológica sobre los `dependencias.md` reales de cada materia —
diseño y prueba en `examen-jefe-REDISEÑO-PLANIFICACION.md`, algoritmo en
`_qa_tools/gen_examen_jefe_prereq_clusters.py`. **14 de 22 materias ya están
migradas** (ordenadas por conocimientos previos, 5-15 temas por cluster,
absorbiendo el resto en el último tramo): Matemática, Lengua, Historia
profunda, Historia, Geografía, Cívica, Química, Biología, Física,
Informática, Economía, Derecho, Arte, Investigación. **8 quedan con el corte
alfabético original** porque no tienen `dependencias.md` (nunca se escribió
— no es parte de este rediseño, es documentación de prerrequisitos que falta
de entrada): Ingeniería, Dibujo Técnico, Psicología, Comunicación,
Electrónica, Ciencia de Materiales, Automatización, UX/Diseño — casi todas
de 1 solo cluster, así que el orden interno pesa poco hasta que tengan más
contenido.

De paso, migrar contra el filesystem real (en vez de contra este mismo
documento, que podía haber quedado desactualizado) corrigió drift ya
detectado antes: Economía tenía `corrientes-pensamiento-economico` como un
solo nodo fantasma cuando en realidad ya son 9 temas reales (atomizados en
otra sesión) — pasó de 15 a 17 clusters. Historia profunda sumó 26 preguntas
que sus 109 temas ya tenían pero el agregado viejo no había recogido.

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

- **Cluster 1** (5): conciencia-fonologica, escritura-como-tecnologia, decodificacion-y-fluidez, ortografia-y-tildacion, circuito-de-la-comunicacion
- **Cluster 2** (5): comprension-idea-principal, signos-de-puntuacion, tecnicas-de-estudio-resumen-y-organizadores-graficos, tipos-textuales, variedades-de-la-lengua
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

- **Cluster 1** (5): absolutismo-europeo, agujeros-negros, ampliacion-democratica-ley-saenz-pena, antigua-grecia, antigua-roma
- **Cluster 2** (5): antiguo-egipto, atmosfera-primitiva, baja-edad-media-y-crisis, caida-de-roma-y-alta-edad-media, cambio-climatico-linea-base-historica
- **Cluster 3** (5): china-antigua, ciclo-de-las-rocas, ciencia-revolucion-cientifica, cinco-extinciones-masivas, civilizaciones-antiguas
- **Cluster 4** (5): civilizaciones-de-america-precolombinas, conquista-colonizacion-america, conquista-tierra-firme, conquista-y-colonia-argentina, corrimiento-al-rojo-expansion-universo
- **Cluster 5** (5): datacion-radiometrica, descolonizacion-de-africa-y-asia, distribucion-biomas, division-del-trabajo, eclipses-sol-luna
- **Cluster 6** (5): edad-media-feudalismo, edad-media-plena, electrificacion-fabrica-hogar, entreguerras-y-crisis-de-1929, escalas-de-tiempo-profundo
- **Cluster 7** (5): escritura-primeras-ciudades, estaciones-del-ano, estados-nacionales, eucariotas, expansion-del-imperio-romano
- **Cluster 8** (5): explosion-cambrica, fases-lunares, formacion-de-estrellas, formacion-del-sistema-solar, fotosintesis-cambio-atmosfera-nivel2
- **Cluster 9** (5): galaxias-tipos-escala, globalizacion-era-digital, golpes-de-estado-interrupciones, gran-oxidacion, guerra-de-malvinas
- **Cluster 10** (5): guerra-fria-descolonizacion, guerras-civiles-unitarios-federales, guerras-de-independencia-argentina, guerras-mundiales, herramientas-arte-rupestre
- **Cluster 11** (5): historia-contemporanea-de-africa, historia-contemporanea-de-asia-y-pacifico, historia-contemporanea-de-medio-oriente, historia-reciente-argentina, hominizacion
- **Cluster 12** (5): huella-humana-en-el-clima-inicio, ilustracion, imperialismo, imperio-bizantino, imperio-de-alejandro-magno-helenistico
- **Cluster 13** (5): imperio-han-china, imperio-persa, imperios-expansion, imprenta, india-antigua
- **Cluster 14** (5): internet-redes-globalizacion-digital, islam-y-expansion-arabe, ley-de-hubble, materia-energia-oscura, mesopotamia
- **Cluster 15** (5): metalurgia-cobre-hierro, minerales-estructura-cristalina, modelo-agroexportador-inmigracion, modernidad-imprenta-navegacion-ciencia, movimiento-aparente-constelaciones
- **Cluster 16** (5): movimiento-rotacion-traslacion, multicelularidad, navegacion, nucleosintesis, organizacion-nacional-constitucion-1853
- **Cluster 17** (5): origen-de-la-vida, origen-del-universo, paleoclima-glaciaciones, paleolitico, peronismo-derechos-sociales
- **Cluster 18** (5): poblamiento-planeta-america, primera-guerra-mundial-y-revolucion-rusa, procariotas, propiedad-jerarquia-estado, pueblos-originarios-territorio-argentino
- **Cluster 19** (5): radiacion-mamiferos, recuperacion-democratica-memoria, relieve-sismos-volcanes, renacimiento-y-reforma, revolucion-de-mayo
- **Cluster 20** (5): revolucion-industrial, revolucion-neolitica, revoluciones-burguesas-liberalismo, rocas-igneas-sedimentarias-metamorficas, sedentarizacion-excedente
- **Cluster 21** (9): segunda-guerra-mundial, seleccion-natural-evidencias-nivel2, sociedad-de-masas-y-democracia-liberal, tabla-periodica-nivel2-cosmologico, tectonica-placas-deriva-continental, terrorismo-de-estado-argentina, tiempo-geologico-eones-eras-periodos, tierra-primitiva-diferenciacion, virreinato-y-comercio

## Historia (28 temas, 5 clusters)

- **Cluster 1** (5): conquista-del-desierto-y-campana-al-chaco, crisis-de-2001, guerra-civil-espanola-1936-1939, guerra-del-paraguay-y-triple-alianza, interpretar-una-fuente-historica
- **Cluster 2** (5): linea-de-tiempo-y-antes-despues, reforma-universitaria-1918, decada-siglo-milenio, revolucion-mexicana-1910-1920, antes-y-despues-de-cristo
- **Cluster 3** (5): rosas-y-la-confederacion, periodizacion-historica, economias-regionales-tempranas, causa-y-consecuencia, semana-tragica-1919
- **Cluster 4** (5): cambio-y-continuidad, evidencia, dimension-etica, industrializacion-por-sustitucion-de-importaciones-isi, multicausalidad
- **Cluster 5** (8): significancia-historica, escuela-de-los-annales, historia-cultural, materialismo-historico, positivismo, revoluciones, independencias, guerras

## Geografía (40 temas, 8 clusters)

- **Cluster 1** (5): america-anglosajona, coordenadas-y-husos-horarios, densidad-poblacion, escala-de-mapa, huella-de-carbono-agua-virtual
- **Cluster 2** (5): orientacion-puntos-cardinales, urbanizacion-migracion-ciudad, mapa-plano-escala, coordenadas-geograficas, division-politica
- **Cluster 3** (5): sig-mapas-digitales, estados-y-globalizacion, region, sig-gps, relieve-clima-biomas
- **Cluster 4** (5): sig-imagenes-satelitales, recursos-actividades-economicas, regiones-naturales-de-argentina, geografia-economica-agricola-argentina, geografia-industrial-mundial
- **Cluster 5** (5): mineria-e-hidrocarburos-en-argentina, america-latina-industria-y-energia, poblacion-piramides-migraciones, produccion-agraria-mundial-y-biotecnologia, ambiente-y-recursos
- **Cluster 6** (5): america-latina-formacion-poblacion, ambientalismo-liberal, conservacionismo, decrecimiento, ecologismo-politico
- **Cluster 7** (5): indicadores-sociales-de-argentina, migraciones-internacionales, indice-de-desarrollo-humano, migraciones-internas-en-argentina, paises-de-america-latina
- **Cluster 8** (5): recursos-hidricos-y-gestion, riesgos-naturales-argentinos, trabajo-y-desempleo-mundial, riesgos-ambientales-mundiales, turismo-mundial

## Cívica (31 temas, 6 clusters)

- **Cluster 1** (5): constitucion-nacional-jerarquia-normativa, derechos-nino, discriminacion-y-organismos-de-proteccion, derechos-indigenas, encuesta-electoral
- **Cluster 2** (5): derechos-genero, estado-de-derecho-por-que-importa, marchas-patrioticas, organizacion-del-estado, origen-estado-derecho
- **Cluster 3** (5): constitucion-preambulo, division-de-poderes, derechos-y-garantias, como-se-hace-una-ley, documentos-y-tramites
- **Cluster 4** (5): impuestos, alcoholemia-y-conduccion, prioridades-de-paso, proyecto-ciudadano-participativo, senalizacion-vial
- **Cluster 5** (5): simbolos-patrios, sistema-de-salud, sistema-electoral-dhondt, sistemas-politicos-comparados, sueldo-promedio-pais
- **Cluster 6** (6): partidos-politicos, sufragio-restringido-universal, organismos-internacionales, teoria-del-poder, tratados-internacionales, tipos-de-estado

## Química (42 temas, 8 clusters)

- **Cluster 1** (5): atomo-particulas-subatomicas, balanceo-ecuaciones, biomoleculas-glucidos-lipidos-proteinas, carbono-tetravalencia-cadenas, cinetica-reaccion
- **Cluster 2** (5): concentracion-de-una-solucion, configuracion-electronica, densidad, dilucion-soluciones, electrolisis
- **Cluster 3** (5): energia-libre-gibbs, enlace-quimico-polaridad, equilibrio-quimico-kc, equilibrio-solubilidad-ksp, estados-y-cambios
- **Cluster 4** (5): estequiometria, gases-ideales, geometria-molecular-vsepr, grupos-funcionales, hidrocarburos-alcanos-alquenos-alquinos
- **Cluster 5** (5): medicion-de-laboratorio, mezclas-metodos-separacion, modelos-atomicos, mol-masa-molar, nanotecnologia
- **Cluster 6** (5): nomenclatura-compuestos, numero-atomico-masico, oxidacion-reduccion, petroleo-como-recurso-energetico, ph-poh
- **Cluster 7** (5): pilas-celdas-galvanicas, polimeros-naturales-sinteticos, presiones-parciales, propiedades-coligativas, quimica-analitica
- **Cluster 8** (7): quimica-de-la-atmosfera, reactivo-limitante-rendimiento, seguridad-laboratorio, superconductividad, tabla-periodica-tendencias, termoquimica, tipos-reacciones-quimicas

## Biología (37 temas, 7 clusters)

- **Cluster 1** (5): adn-gen-proteina, biodiversidad-indices, biotecnologia-pcr-crispr, cadenas-redes-troficas, celula-organelas
- **Cluster 2** (5): ciclos-biogeoquimicos, ciclos-vida-metamorfosis, clasificacion-evolucion, conservacion-areas-protegidas, crecimiento-poblacional
- **Cluster 3** (5): cruce-dihibrido, deriva-genetica-flujo-genico, dinamica-poblacional-capacidad-carga, enzimas-proteina-sustrato-ph, especiacion
- **Cluster 4** (5): filogenia-arboles-evolutivos, flujo-materia-energia, fotosintesis-respiracion-celular, genetica-mendeliana-punnett, grupos-sanguineos
- **Cluster 5** (5): habitats-adaptacion, herencia-ligada-al-sexo, mal-de-chagas, microbiologia-virus-inmunitario, mitosis-meiosis
- **Cluster 6** (5): necesidades-basicas-seres-vivos, nicho-ecologico, partes-planta-germinacion, piramide-biomasas, presion-arterial
- **Cluster 7** (7): quimiosintesis, seleccion-natural, ser-vivo-caracteristicas, sistema-endocrino-hormonas-glandulas, sistema-nervioso-neurona-sinapsis, sistemas-cuerpo-humano, transgenicos-bioetica

## Física (77 temas, 15 clusters)

- **Cluster 1** (5): calor-q-m-c-deltat, cambios-de-estado-calor-latente, campo-electrico, campo-magnetico-imanes-corrientes, cargas-electricas
- **Cluster 2** (5): caudal-q-a-v, choques-elasticos-inelasticos, circuitos-en-paralelo, circuitos-en-serie, circuitos-mixtos
- **Cluster 3** (5): conservacion-energia-mecanica, corriente-electrica, decaimiento-radiactivo-alfa-beta-gamma, decibeles-richter, dilatacion-termica-lineal
- **Cluster 4** (5): dinamica-fuerzas-concurrentes, dualidad-onda-particula, energia-cinetica, energia-potencial-gravitatoria, entropia-segunda-ley-termodinamica
- **Cluster 5** (5): escalas-de-temperatura-c-f-k, estatica/centro-de-gravedad, estatica/equilibrio-de-cuerpo-rigido, estatica/momento-de-una-fuerza, estructura-del-nucleo-atomico
- **Cluster 6** (5): fisica-medica, fision-y-fusion-nuclear, formacion-de-imagenes-optica, formulas-con-literales, frecuencia
- **Cluster 7** (5): generador-motor-transformador, gravitacion-universal, iman-polos-atraccion-repulsion, impulso-cambio-momento, induccion-electromagnetica-faraday-lenz
- **Cluster 8** (5): lentes-convergentes-divergentes, ley-de-coulomb, ley-de-ohm, leyes-de-newton/primera-inercia, leyes-de-newton/segunda-fma
- **Cluster 9** (5): leyes-de-newton/tercera-accion-reaccion, longitud-onda-velocidad-propagacion, luz-onda-espectro-electromagnetico, maquina-termica-termodinamica-nivel2, maquinas-simples
- **Cluster 10** (5): momento-lineal, movimiento-circular-y-fuerza-centripeta, mru, ojo-humano-instrumento-optico, mruv
- **Cluster 11** (5): oscilacion-periodo, plano-inclinado-y-rozamiento, potencia-electrica, potencia-mecanica, presion-atmosferica
- **Cluster 12** (5): presion-f-sobre-a, masas-de-aire-y-frentes, presion-hidrostatica, formacion-de-nubes, principio-de-arquimedes-empuje-flotacion
- **Cluster 13** (5): precipitacion, principio-de-pascal-prensa-hidraulica, reflexion-espejos-planos-curvos, refraccion-indice-ley-snell, relatividad-especial-conceptual
- **Cluster 14** (5): resistencia-electrica, resonancia-frecuencia-natural, semivida-desintegracion-exponencial, sonido-timbre-altura-intensidad, temperatura-equilibrio-termico
- **Cluster 15** (7): tension-diferencia-potencial, tiro-oblicuo, tiro-vertical, tormentas-y-fenomenos-severos, trabajo-de-una-fuerza, transmision-calor-conduccion-conveccion-radiacion, velocidad-aceleracion-instantaneas

## Informática (59 temas, 11 clusters)

- **Cluster 1** (5): algebra-booleana, algoritmo-secuencia-de-pasos, algoritmos-busqueda-ordenamiento, almacenamiento-volatil-vs-no-volatil, archivos-y-persistencia
- **Cluster 2** (5): buses-y-entrada-salida, ciclo-de-instruccion-fetch-decode-execute, complejidad-asintotica, control-de-versiones, cpu-unidad-de-control-y-alu
- **Cluster 3** (5): criptografia-clave-simetrica-asimetrica-hash, direccionamiento-ip-dns, diseno-y-arquitectura-de-software, estructuras-de-control-bucles, estructuras-de-control-condicionales
- **Cluster 4** (5): estructuras-de-datos-listas-pilas-colas, etica-de-la-ia-sesgo-privacidad, funciones-y-modularidad, historia-y-evolucion-de-los-sistemas-operativos, inteligencia-artificial-reglas-a-aprendizaje
- **Cluster 5** (5): arranque-de-la-computadora-boot, mantenimiento-y-deuda-tecnica, memoria-asignacion-memoria-virtual, memoria-ram-cache-jerarquia, modelo-relacional-tabla-registro-clave-primaria
- **Cluster 6** (5): normalizacion-bases-datos, ofimatica-planilla-de-calculo, paginacion, patrones-y-buenas-practicas, permisos-y-usuarios
- **Cluster 7** (5): planificacion-de-procesos, poo-clases-y-objetos, interrupciones, proceso-programa-en-ejecucion, protocolo-http-peticion-respuesta
- **Cluster 8** (5): comunicacion-entre-procesos, pruebas-unitarias-integracion, que-es-la-tecnica-y-la-tecnologia, recursividad, medios-tecnicos-extension-capacidades-humanas
- **Cluster 9** (5): relaciones-y-claves-foraneas, procesos-tecnicos-artesanales-e-industriales, requisitos-funcionales-no-funcionales, revolucion-informatica, segmentacion
- **Cluster 10** (5): seguridad-de-red-firewall-vpn-cifrado, seguridad-informatica, sistema-de-archivos, sistemas-numeracion, sistema-de-archivos-por-bitacora
- **Cluster 11** (9): sql-consultas-joins-agregaciones, subsistema-de-entrada-y-salida, tcp-ip-capas-enrutamiento, tipos-de-licencias-de-software, tipos-de-so-por-dispositivo, transacciones-acid, unidades-almacenamiento, variables-y-tipos-de-dato, virtualizacion-maquina-virtual-contenedor

## Ingeniería (11 temas, 2 clusters)

- **Cluster 1** (5): comunicar-la-solucion, disciplinas-de-la-ingenieria, diseno-conceptual, ensayo-y-medicion, investigar-soluciones-existentes
- **Cluster 2** (6): modelado-y-calculo, modelizacion-matematica, optimizacion-e-iteracion, problema-y-restricciones, prototipo, resistencia-de-materiales

## Investigación (12 temas, 2 clusters)

- **Cluster 1** (5): analisis-estadistico-de-resultados, argumentar-desde-evidencia, conclusion-y-comunicacion-de-resultados, construir-y-usar-un-modelo-cientifico, corrientes-filosofia-de-la-ciencia
- **Cluster 2** (7): diseno-experimental-variables-y-control, hipotesis-buena-o-mala, observacion-y-pregunta-investigable, recoleccion-de-datos, metodologia-cualitativa-vs-cuantitativa, trabajo-de-campo-enfoque-socioantropologico, tecnicas-de-investigacion-social

## Economía (85 temas, 17 clusters)

- **Cluster 1** (5): balanza-comercial, blockchain-claves-wallet, business-model-canvas, capitalismo-industrial-trabajo-asalariado, comercio-internacional-ventaja-comparativa
- **Cluster 2** (5): contratos-inteligentes, control-de-gestion-e-indicadores, cooperativismo-y-mutualismo, coordinar-personas-y-recursos, costo-de-oportunidad
- **Cluster 3** (5): costo-marginal, debe-haber-balance, detectar-una-oportunidad-de-negocio, dex-swap, division-formal-microeconomia-macroeconomia
- **Cluster 4** (5): elasticidad, economia-positiva-y-normativa, estado-de-resultados, estructura-del-patrimonio, estructura-productiva-dependencia
- **Cluster 5** (5): ecuacion-contable-fundamental, interes-simple, iva, interes-compuesto, margenes-bruto-y-neto
- **Cluster 6** (5): cft-vs-tasa-nominal, cuota-credito-frances, interes-compuesto-funcion, mejora-continua, mvp-producto-minimo-viable
- **Cluster 7** (5): objetivos-y-metas, origen-excedente-moneda-mercado, partida-doble, pitch-a-inversores, libro-diario-mayor
- **Cluster 8** (5): planificacion-administrativa, estados-contables, plazo-fijo-vs-inflacion, contabilidad-ambiental, contabilidad-como-sistema-de-informacion
- **Cluster 9** (5): indices-financieros, pools-liquidez-amm, precio-final, presupuesto-administrativo, oferta-y-demanda
- **Cluster 10** (5): productividad-produccion-insumos, fisiocracia, mercantilismo, pbi-e-inflacion, liberalismo-clasico-y-escuela-austriaca
- **Cluster 11** (5): punto-de-equilibrio, recibo-de-sueldo/general, sectores-economicos, recibo-de-sueldo/argentina, socialismo-utopico
- **Cluster 12** (5): descuentos-obligatorios/jubilacion, descuentos-obligatorios/obra-social, jubilacion-sistema-previsional, marxismo, monotributo
- **Cluster 13** (5): economia-feminista-y-del-cuidado, keynesianismo, sueldo-promedio-pais, neoliberalismo, ordoliberalismo
- **Cluster 14** (5): tipo-cambio-fijo, tipo-cambio-flotante, tipos-de-organizaciones, devaluacion, elementos-de-las-organizaciones
- **Cluster 15** (5): reservas-banco-central, ambiente-interno-y-externo-organizacion, cultura-organizacional, deuda-publica-externa, deuda-publica-interna
- **Cluster 16** (5): estructura-organizacional, default-deuda, tipos-de-proyecto, tipos-de-sociedades, validar-con-clientes-construir-medir-aprender
- **Cluster 17** (5): valor-esperado-riesgo, vision-y-mision-organizacional, fondo-emergencia-diversificacion, estudio-de-contexto-para-un-proyecto, seguros

## Derecho (21 temas, 4 clusters)

- **Cluster 1** (5): apelacion-e-instancias, argumentacion-juridica, corrientes-interpretacion-juridica, denuncia-y-etapa-de-instruccion, derecho-administrativo
- **Cluster 2** (5): derecho-civil, derecho-comercial, derecho-constitucional, derecho-internacional, derecho-laboral
- **Cluster 3** (5): derecho-penal, ejecucion-de-la-sentencia, fuentes-del-derecho, hecho-juridicamente-relevante, interpretacion-normativa
- **Cluster 4** (6): investigacion-prueba-y-fiscalia, juicio-oral, norma-jerarquia-y-vigencia, politica-criminal-garantismo-mano-dura, ramas-del-derecho, resolucion-de-conflictos-y-sentencia

## Dibujo Técnico (5 temas, 1 clusters)

- **Cluster 1** (5): acotacion-normalizada, escalas-numericas-y-graficas, perspectivas-isometrica-y-caballera, sistemas-de-proyeccion, vistas-frontal-superior-lateral

## Psicología (10 temas, 2 clusters)

- **Cluster 1** (5): autoconocimiento-como-busqueda-humana, corrientes-psicologicas-psicoanalisis-conductismo-humanismo-cognitivismo, dependencia-del-otro-cultura-como-herencia, edades-del-ser-humano-ninez-pubertad-identidad, lenguaje-pensamiento-y-creatividad
- **Cluster 2** (5): memoria-y-olvido-represion-inconsciente, psicologia-cognitiva-percepcion-memoria-atencion, psicologia-modernidad-y-el-yo, salud-mental-ansiedad-depresion-pedir-ayuda, sesgos-cognitivos-heuristicas-error-sistematico

## Comunicación (5 temas, 1 clusters)

- **Cluster 1** (5): corrientes-de-la-comunicacion, etica-y-responsabilidad-de-los-medios, generos-periodisticos, publicidad-y-persuasion, teoria-de-la-comunicacion-emisor-receptor-canal-ruido

## Electrónica (5 temas, 1 clusters)

- **Cluster 1** (5): circuitos-y-leyes-de-kirchhoff, componentes-resistencia-capacitor-diodo-transistor, logica-digital-puertas-and-or-not, microcontroladores-y-microprocesadores, sensores-y-actuadores

## Ciencia de Materiales (6 temas, 1 clusters)

- **Cluster 1** (6): corrosion, elasticidad-ley-de-hooke-modulo-de-young, familias-de-materiales-metales-ceramicos-polimeros-compuestos, fatiga-y-fractura, plasticidad-y-punto-de-fluencia, propiedades-mecanicas-dureza-tenacidad-ductilidad

## Automatización (5 temas, 1 clusters)

- **Cluster 1** (5): control-pid-proporcional-integral-derivativo, lazo-abierto-vs-lazo-cerrado, plc-logica-de-control-industrial, realimentacion-feedback, servomecanismos

## UX/Diseño (5 temas, 1 clusters)

- **Cluster 1** (5): accesibilidad-wcag-contraste-lectores-de-pantalla, jerarquia-visual-e-informacion, prototipado-wireframe-mockup-prototipo-interactivo, pruebas-de-usuario, usabilidad-heuristicas-de-nielsen

## Arte (15 temas, 3 clusters)

- **Cluster 1** (5): acustica-instrumento-musical, armonia-basica-acordes-tonalidad, composicion-y-proporcion, danza-ritmo-tiempo-expresion-corporal, elementos-del-arte
- **Cluster 2** (5): lenguaje-musical-pentagrama-escalas-intervalos, origen-del-arte, principios-de-diseno, ritmo-compas-pulso-figuras-musicales, narrativa-audiovisual/plano
- **Cluster 3** (5): rosetones-y-simetria, narrativa-audiovisual/encuadre, teatro-dramaturgia-y-actuacion, narrativa-audiovisual/montaje, produccion-multimedial

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
