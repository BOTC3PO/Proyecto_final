-- ============================================================
-- Seed: generator_configs — Física, Matemáticas, Química
-- Agregar al final de api/src/base/seed_minimal.sql
-- ============================================================

-- ── Física ────────────────────────────────────────────────────

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'fisica/cinematica', 'Física', 'Cinemática',
  'MRU, MRUV, caída libre y movimiento en dos dimensiones.',
  1,
  '[{"id":"MRU","label":"Movimiento rectilíneo uniforme","activo":true,"peso":1},{"id":"MRUV","label":"Movimiento rectilíneo uniformemente variado","activo":true,"peso":1},{"id":"caida_libre","label":"Caída libre","activo":true,"peso":1},{"id":"movimiento_vertical","label":"Movimiento vertical","activo":true,"peso":1},{"id":"movimiento_horizontal","label":"Movimiento horizontal","activo":true,"peso":1},{"id":"relacion_distancia_tiempo","label":"Relación distancia-tiempo","activo":true,"peso":1},{"id":"conversion_unidades","label":"Conversión de unidades","activo":true,"peso":1}]'
);

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'fisica/dinamica', 'Física', 'Dinámica',
  'Fuerzas, fricción, plano inclinado y ley de Hooke.',
  1,
  '[{"id":"suma_fuerzas","label":"Suma de fuerzas","activo":true,"peso":1},{"id":"peso","label":"Peso","activo":true,"peso":1},{"id":"friccion","label":"Fricción","activo":true,"peso":1},{"id":"plano_inclinado","label":"Plano inclinado","activo":true,"peso":1},{"id":"ley_hooke","label":"Ley de Hooke","activo":true,"peso":1}]'
);

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'fisica/energia', 'Física', 'Energía y trabajo',
  'Trabajo mecánico, energías cinética y potencial, potencia.',
  1,
  '[{"id":"trabajo_mecanico","label":"Trabajo mecánico","activo":true,"peso":1},{"id":"energia_cinetica","label":"Energía cinética","activo":true,"peso":1},{"id":"energia_potencial","label":"Energía potencial","activo":true,"peso":1},{"id":"conservacion_energia","label":"Conservación de energía","activo":true,"peso":1},{"id":"potencia_mecanica","label":"Potencia mecánica","activo":true,"peso":1}]'
);

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'fisica/electricidad', 'Física', 'Electricidad',
  'Ley de Ohm, circuitos serie y paralelo, potencia eléctrica.',
  1,
  '[{"id":"ley_ohm","label":"Ley de Ohm","activo":true,"peso":1},{"id":"resistencia_serie","label":"Resistencias en serie","activo":true,"peso":1},{"id":"resistencia_paralelo","label":"Resistencias en paralelo","activo":true,"peso":1},{"id":"potencia_electrica","label":"Potencia eléctrica","activo":true,"peso":1},{"id":"consumo_electrico","label":"Consumo eléctrico","activo":true,"peso":1}]'
);

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'fisica/termodinamica', 'Física', 'Termodinámica',
  'Calor, temperatura, cambios de estado y dilatación térmica.',
  1,
  '[{"id":"calor","label":"Calor","activo":true,"peso":1},{"id":"conversion_temperatura","label":"Conversión de temperatura","activo":true,"peso":1},{"id":"cambios_estado","label":"Cambios de estado","activo":true,"peso":1},{"id":"dilatacion_termica","label":"Dilatación térmica","activo":true,"peso":1}]'
);

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'fisica/ondas', 'Física', 'Ondas',
  'Velocidad de ondas, longitud de onda y frecuencia.',
  1,
  '[{"id":"velocidad_ondas","label":"Velocidad de ondas","activo":true,"peso":1},{"id":"longitud_onda","label":"Longitud de onda","activo":true,"peso":1},{"id":"frecuencia_periodo","label":"Frecuencia y período","activo":true,"peso":1}]'
);

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'fisica/fluidos', 'Física', 'Fluidos',
  'Densidad, presión hidrostática y caudal.',
  1,
  '[{"id":"densidad","label":"Densidad","activo":true,"peso":1},{"id":"presion","label":"Presión","activo":true,"peso":1},{"id":"presion_hidrostatica","label":"Presión hidrostática","activo":true,"peso":1},{"id":"caudal","label":"Caudal","activo":true,"peso":1}]'
);

-- ── Matemáticas ───────────────────────────────────────────────

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'matematicas/aritmetica', 'Matemáticas', 'Aritmética',
  'Operaciones básicas, fracciones, potencias, estadística básica y geometría elemental.',
  1,
  '[{"id":"operaciones_basicas","label":"Operaciones básicas","activo":true,"peso":1},{"id":"operaciones_combinadas","label":"Operaciones combinadas","activo":true,"peso":1},{"id":"numeros_primos","label":"Números primos","activo":true,"peso":1},{"id":"divisibilidad","label":"Divisibilidad","activo":true,"peso":1},{"id":"multiplos_divisores","label":"Múltiplos y divisores","activo":true,"peso":1},{"id":"fracciones","label":"Fracciones","activo":true,"peso":1},{"id":"decimales","label":"Decimales","activo":true,"peso":1},{"id":"potencias","label":"Potencias","activo":true,"peso":1},{"id":"raices","label":"Raíces","activo":true,"peso":1},{"id":"porcentaje","label":"Porcentaje","activo":true,"peso":1},{"id":"regla_tres","label":"Regla de tres","activo":true,"peso":1},{"id":"proporcionalidad","label":"Proporcionalidad","activo":true,"peso":1},{"id":"estadistica_basica","label":"Estadística básica","activo":true,"peso":1},{"id":"probabilidad_simple","label":"Probabilidad simple","activo":true,"peso":1},{"id":"unidades_medida","label":"Unidades de medida","activo":true,"peso":1},{"id":"perimetro_area","label":"Perímetro y área","activo":true,"peso":1},{"id":"angulos","label":"Ángulos","activo":true,"peso":1},{"id":"coordenadas_plano","label":"Coordenadas en el plano","activo":true,"peso":1},{"id":"sucesiones","label":"Sucesiones","activo":true,"peso":1},{"id":"series_simples","label":"Series simples","activo":true,"peso":1}]'
);

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'matematicas/algebra', 'Matemáticas', 'Álgebra',
  'Expresiones algebraicas, ecuaciones, sistemas y funciones.',
  1,
  '[{"id":"lenguaje_algebraico","label":"Lenguaje algebraico","activo":true,"peso":1},{"id":"terminos_semejantes","label":"Términos semejantes","activo":true,"peso":1},{"id":"evaluacion_expresiones","label":"Evaluación de expresiones","activo":true,"peso":1},{"id":"suma_resta_polinomios","label":"Suma y resta de polinomios","activo":true,"peso":1},{"id":"multiplicacion_monomios","label":"Multiplicación de monomios","activo":true,"peso":1},{"id":"grado_coeficientes","label":"Grado y coeficientes","activo":true,"peso":1},{"id":"factorizacion_basica","label":"Factorización básica","activo":true,"peso":1},{"id":"productos_notables","label":"Productos notables","activo":true,"peso":1},{"id":"ecuaciones_lineales","label":"Ecuaciones lineales","activo":true,"peso":1},{"id":"ecuaciones_parametros","label":"Ecuaciones con parámetros","activo":true,"peso":1},{"id":"inecuaciones_simples","label":"Inecuaciones simples","activo":true,"peso":1},{"id":"sistemas_2x2","label":"Sistemas 2×2","activo":true,"peso":1},{"id":"ecuaciones_cuadraticas","label":"Ecuaciones cuadráticas","activo":true,"peso":1},{"id":"sistemas_3x3","label":"Sistemas 3×3","activo":true,"peso":1},{"id":"racionales_simples","label":"Racionales simples","activo":true,"peso":1},{"id":"simplificacion_algebraica","label":"Simplificación algebraica","activo":true,"peso":1},{"id":"ecuaciones_fracciones","label":"Ecuaciones con fracciones","activo":true,"peso":1},{"id":"funciones_lineales","label":"Funciones lineales","activo":true,"peso":1},{"id":"funcion_afin","label":"Función afín","activo":true,"peso":1},{"id":"ecuacion_recta","label":"Ecuación de la recta","activo":true,"peso":1}]'
);

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'matematicas/analisis_avanzado', 'Matemáticas', 'Análisis y matemática avanzada',
  'Trigonometría, funciones exponenciales y logarítmicas, números complejos, matrices y geometría espacial.',
  1,
  '[{"id":"trigonometria_basica","label":"Trigonometría básica","activo":true,"peso":1},{"id":"trigonometria_aplicada","label":"Trigonometría aplicada","activo":true,"peso":1},{"id":"identidades_trigonometricas","label":"Identidades trigonométricas","activo":true,"peso":1},{"id":"ecuaciones_trigonometricas","label":"Ecuaciones trigonométricas","activo":true,"peso":1},{"id":"funciones_exponenciales","label":"Funciones exponenciales","activo":true,"peso":1},{"id":"funciones_logaritmicas","label":"Funciones logarítmicas","activo":true,"peso":1},{"id":"ecuaciones_exponenciales","label":"Ecuaciones exponenciales","activo":true,"peso":1},{"id":"ecuaciones_logaritmicas","label":"Ecuaciones logarítmicas","activo":true,"peso":1},{"id":"numeros_complejos","label":"Números complejos","activo":true,"peso":1},{"id":"operaciones_complejos","label":"Operaciones con complejos","activo":true,"peso":1},{"id":"matrices_basico","label":"Matrices básico","activo":true,"peso":1},{"id":"determinantes_basico","label":"Determinantes básico","activo":true,"peso":1},{"id":"sistemas_matrices","label":"Sistemas con matrices","activo":true,"peso":1},{"id":"vectores_basico","label":"Vectores básico","activo":true,"peso":1},{"id":"geometria_espacial","label":"Geometría espacial","activo":true,"peso":1},{"id":"conicas","label":"Cónicas","activo":true,"peso":1}]'
);

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'matematicas/calculo', 'Matemáticas', 'Cálculo',
  'Límites, derivadas, integrales, ecuaciones diferenciales y estadística inferencial.',
  1,
  '[{"id":"limites_funciones","label":"Límites de funciones","activo":true,"peso":1},{"id":"continuidad","label":"Continuidad","activo":true,"peso":1},{"id":"derivada_definicion","label":"Derivada por definición","activo":true,"peso":1},{"id":"derivadas_basicas","label":"Derivadas básicas","activo":true,"peso":1},{"id":"reglas_derivacion","label":"Reglas de derivación","activo":true,"peso":1},{"id":"aplicaciones_derivadas","label":"Aplicaciones de derivadas","activo":true,"peso":1},{"id":"integral_indefinida","label":"Integral indefinida","activo":true,"peso":1},{"id":"integral_definida","label":"Integral definida","activo":true,"peso":1},{"id":"aplicaciones_integrales","label":"Aplicaciones de integrales","activo":true,"peso":1},{"id":"ecuaciones_diferenciales","label":"Ecuaciones diferenciales","activo":true,"peso":1},{"id":"probabilidad_avanzada","label":"Probabilidad avanzada","activo":true,"peso":1},{"id":"variables_aleatorias","label":"Variables aleatorias","activo":true,"peso":1},{"id":"distribuciones","label":"Distribuciones","activo":true,"peso":1},{"id":"estadistica_inferencial","label":"Estadística inferencial","activo":true,"peso":1},{"id":"regresion_correlacion","label":"Regresión y correlación","activo":true,"peso":1}]'
);

-- ── Química ───────────────────────────────────────────────────

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'quimica/atomos_enlaces', 'Química', 'Átomos y enlaces',
  'Tabla periódica, configuración electrónica, enlaces y tipos de reacciones.',
  1,
  '[{"id":"tabla_periodica_clasificacion","label":"Clasificación en tabla periódica","activo":true,"peso":1},{"id":"tabla_periodica_numero_atomico","label":"Número atómico y másico","activo":true,"peso":1},{"id":"tendencias_periodicas","label":"Tendencias periódicas","activo":true,"peso":1},{"id":"electronegatividad","label":"Electronegatividad","activo":true,"peso":1},{"id":"radio_atomico","label":"Radio atómico","activo":true,"peso":1},{"id":"valencia_tipica","label":"Valencia típica","activo":true,"peso":1},{"id":"particulas_subatomicas","label":"Partículas subatómicas","activo":true,"peso":1},{"id":"iones_cationes_aniones","label":"Iones, cationes y aniones","activo":true,"peso":1},{"id":"configuracion_electronica","label":"Configuración electrónica","activo":true,"peso":1},{"id":"niveles_subniveles","label":"Niveles y subniveles","activo":true,"peso":1},{"id":"orbitales_spdf","label":"Orbitales s, p, d, f","activo":true,"peso":1},{"id":"enlace_ionico","label":"Enlace iónico","activo":true,"peso":1},{"id":"enlace_covalente","label":"Enlace covalente","activo":true,"peso":1},{"id":"enlace_metalico","label":"Enlace metálico","activo":true,"peso":1},{"id":"polaridad_enlaces","label":"Polaridad de enlaces","activo":true,"peso":1},{"id":"geometria_molecular","label":"Geometría molecular","activo":true,"peso":1},{"id":"sustancia_pura_mezcla","label":"Sustancia pura vs mezcla","activo":true,"peso":1},{"id":"mezcla_homogenea_heterogenea","label":"Mezcla homogénea vs heterogénea","activo":true,"peso":1},{"id":"metodos_separacion","label":"Métodos de separación","activo":true,"peso":1},{"id":"propiedades_fisicas_quimicas","label":"Propiedades físicas y químicas","activo":true,"peso":1},{"id":"sintesis","label":"Síntesis","activo":true,"peso":1},{"id":"descomposicion","label":"Descomposición","activo":true,"peso":1},{"id":"desplazamiento","label":"Desplazamiento","activo":true,"peso":1},{"id":"combustion","label":"Combustión","activo":true,"peso":1},{"id":"neutralizacion_tipo","label":"Neutralización","activo":true,"peso":1},{"id":"precipitacion_tipo","label":"Precipitación","activo":true,"peso":1}]'
);

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'quimica/estequiometria', 'Química', 'Estequiometría',
  'Balanceo, cálculo de moles, reactivo limitante, rendimiento y soluciones.',
  1,
  '[{"id":"balanceo","label":"Balanceo de ecuaciones","activo":true,"peso":1},{"id":"calculo_moles","label":"Cálculo de moles","activo":true,"peso":1},{"id":"calculo_masa","label":"Cálculo de masa","activo":true,"peso":1},{"id":"numero_particulas","label":"Número de partículas","activo":true,"peso":1},{"id":"relaciones_molares","label":"Relaciones molares","activo":true,"peso":1},{"id":"reactivo_limitante","label":"Reactivo limitante","activo":true,"peso":1},{"id":"reactivo_exceso","label":"Reactivo en exceso","activo":true,"peso":1},{"id":"rendimiento_teorico","label":"Rendimiento teórico","activo":true,"peso":1},{"id":"porcentaje_rendimiento","label":"Porcentaje de rendimiento","activo":true,"peso":1},{"id":"pureza_reactivos","label":"Pureza de reactivos","activo":true,"peso":1},{"id":"ley_proporciones_multiples","label":"Ley de proporciones múltiples","activo":true,"peso":1},{"id":"ley_proporciones_definidas","label":"Ley de proporciones definidas","activo":true,"peso":1},{"id":"porcentaje_masa_masa","label":"% masa/masa","activo":true,"peso":1},{"id":"porcentaje_masa_volumen","label":"% masa/volumen","activo":true,"peso":1},{"id":"porcentaje_volumen_volumen","label":"% volumen/volumen","activo":true,"peso":1},{"id":"molaridad","label":"Molaridad","activo":true,"peso":1},{"id":"molalidad","label":"Molalidad","activo":true,"peso":1},{"id":"normalidad","label":"Normalidad","activo":true,"peso":1},{"id":"fraccion_molar","label":"Fracción molar","activo":true,"peso":1},{"id":"diluciones","label":"Diluciones","activo":true,"peso":1},{"id":"preparacion_soluciones","label":"Preparación de soluciones","activo":true,"peso":1}]'
);

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'quimica/gases', 'Química', 'Gases',
  'Leyes de los gases: Boyle, Charles, Gay-Lussac, gas ideal y mezclas.',
  1,
  '[{"id":"ley_boyle","label":"Ley de Boyle","activo":true,"peso":1},{"id":"ley_charles","label":"Ley de Charles","activo":true,"peso":1},{"id":"ley_gay_lussac","label":"Ley de Gay-Lussac","activo":true,"peso":1},{"id":"ley_combinada","label":"Ley combinada","activo":true,"peso":1},{"id":"gas_ideal","label":"Gas ideal","activo":true,"peso":1},{"id":"presiones_parciales","label":"Presiones parciales","activo":true,"peso":1},{"id":"mezcla_gases","label":"Mezcla de gases","activo":true,"peso":1}]'
);

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'quimica/acido_base', 'Química', 'Ácido-base',
  'pH, pOH, Ka, Kb, neutralización y titulaciones.',
  1,
  '[{"id":"pH","label":"pH","activo":true,"peso":1},{"id":"pOH","label":"pOH","activo":true,"peso":1},{"id":"Ka_pKa","label":"Ka y pKa","activo":true,"peso":1},{"id":"Kb_pKb","label":"Kb y pKb","activo":true,"peso":1},{"id":"concentraciones_H_OH","label":"Concentraciones H⁺ y OH⁻","activo":true,"peso":1},{"id":"fuerza_acidos_bases","label":"Fuerza de ácidos y bases","activo":true,"peso":1},{"id":"neutralizacion","label":"Neutralización","activo":true,"peso":1},{"id":"titulaciones_simples","label":"Titulaciones simples","activo":true,"peso":1}]'
);

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'quimica/termoquimica', 'Química', 'Termoquímica',
  'Calor, entalpía, ley de Hess y poder calorífico.',
  1,
  '[{"id":"calor","label":"Calor","activo":true,"peso":1},{"id":"cambio_entalpia","label":"Cambio de entalpía","activo":true,"peso":1},{"id":"ley_hess","label":"Ley de Hess","activo":true,"peso":1},{"id":"energia_reaccion","label":"Energía de reacción","activo":true,"peso":1},{"id":"poder_calorifico","label":"Poder calorífico","activo":true,"peso":1}]'
);

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'quimica/equilibrio', 'Química', 'Equilibrio y cinética',
  'Kc, Kp, electroquímica, cinética química y propiedades coligativas.',
  1,
  '[{"id":"kc","label":"Kc","activo":true,"peso":1},{"id":"kp","label":"Kp","activo":true,"peso":1},{"id":"q_direccion","label":"Q y dirección del equilibrio","activo":true,"peso":1},{"id":"problemas_ice","label":"Problemas ICE","activo":true,"peso":1},{"id":"concentraciones_equilibrio","label":"Concentraciones en equilibrio","activo":true,"peso":1},{"id":"potenciales_estandar","label":"Potenciales estándar","activo":true,"peso":1},{"id":"electroquimica_Ecelda","label":"Fem de celda","activo":true,"peso":1},{"id":"anodo_catodo","label":"Ánodo y cátodo","activo":true,"peso":1},{"id":"deltaG","label":"ΔG y espontaneidad","activo":true,"peso":1},{"id":"leyes_faraday","label":"Leyes de Faraday","activo":true,"peso":1},{"id":"masa_electrolisis","label":"Masa en electrólisis","activo":true,"peso":1},{"id":"ley_velocidad","label":"Ley de velocidad","activo":true,"peso":1},{"id":"orden_reaccion","label":"Orden de reacción","activo":true,"peso":1},{"id":"constante_k","label":"Constante de velocidad","activo":true,"peso":1},{"id":"semivida","label":"Semivida","activo":true,"peso":1},{"id":"ksp","label":"Ksp","activo":true,"peso":1},{"id":"solubilidad_molar","label":"Solubilidad molar","activo":true,"peso":1},{"id":"precipitacion","label":"Precipitación","activo":true,"peso":1},{"id":"concentracion_maxima","label":"Concentración máxima","activo":true,"peso":1},{"id":"descenso_congelacion","label":"Descenso crioscópico","activo":true,"peso":1},{"id":"elevacion_ebullicion","label":"Elevación ebulloscópica","activo":true,"peso":1},{"id":"presion_osmotica","label":"Presión osmótica","activo":true,"peso":1},{"id":"factor_vant_hoff","label":"Factor de van\'t Hoff","activo":true,"peso":1}]'
);

INSERT OR IGNORE INTO generator_configs (id, materia, label, description, version, subtipos)
VALUES (
  'quimica/seguridad', 'Química', 'Seguridad química',
  'Pictogramas GHS, materiales inflamables, riesgos tóxicos y EPP.',
  1,
  '[{"id":"pictogramas_ghs","label":"Pictogramas GHS","activo":true,"peso":1},{"id":"materiales_inflamables","label":"Materiales inflamables","activo":true,"peso":1},{"id":"riesgos_toxicos","label":"Riesgos tóxicos","activo":true,"peso":1},{"id":"equipos_proteccion","label":"Equipos de protección personal","activo":true,"peso":1}]'
);

-- ── Registrar también en MODULE_SUBJECT_CAPABILITIES ─────────
-- Nota: en apps/web/src/domain/module/module.types.ts verificar
-- que Física, Matemáticas y Química tengan:
--   supportsGenerators: true
--   supportsAutoQuizzes: true
