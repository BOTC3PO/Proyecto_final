# Examen jefe — Maestro de la Argentina del Siglo XX y la Democracia

> Logro #1004. Dominaste el peronismo y los derechos sociales, la Semana Trágica, el terrorismo de Estado, la industrialización por sustitución de importaciones, Malvinas, la recuperación democrática, la historia reciente y la crisis de 2001, jefe. Pool agregado de los `cuestionario.md` ya validados de sus 8 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **191 preguntas totales** en 8/8 secciones.

---

## Sección: peronismo-derechos-sociales (25 preguntas)

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["peronismo", "politica", "argentina"]

respuesta: "Juan Domingo Perón"
tipo: completar
respuestas_validas:
  - "Juan Domingo Perón"

enunciado: "El líder que encabezó el movimiento que transformó la estructura política y social de Argentina a partir de 1946 fue ___."

explicacion: |
  Juan Domingo Perón consolidó su poder mediante una fuerte alianza con los sectores obreros, transformando la relación entre el Estado y la clase trabajadora.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["clase_obrera", "movimiento_sustitutivo"]

opciones_explicitas: ["La oligarquía terrateniente", "La clase trabajadora", "La burguesía industrial", "La clase media profesional"]
respuesta: "La clase trabajadora"
tipo: mc

enunciado: "¿Cuál fue el principal sector social que brindó el sustento político y electoral al peronismo en sus inicios?"

explicacion: |
  El peronismo se caracterizó por la integración política de la clase trabajadora, que hasta entonces había sido marginada de los procesos de decisión estatal.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["justicia_social", "derechos_laborales"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [["vacaciones pagas", "la implementación de las vacaciones pagas"], ["aguinaldo", "la instauración del aguinaldo"]]
  respuestas: [["vacaciones pagas", "la implementación de las vacaciones pagas"], ["aguinaldo", "la instauración del aguinaldo"]]

respuesta: "la implementación de las vacaciones pagas"
tipo: completar
respuestas_validas:
  - "la implementación de las vacaciones pagas"
  - "la instauración del aguinaldo"

enunciado: "Uno de los grandes hitos de la justicia social peronista fue {escenarios[escenario_idx][1]}."

explicacion: |
  La extensión de derechos como las vacaciones pagas o el aguinaldo permitió una redistribución de la riqueza hacia el consumo interno.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["doctrina", "peronismo"]

opciones_explicitas: ["Justicia Social, Independencia Económica y Soberanía Política", "Libertad de mercado, Propiedad privada y Globalización", "Estado ausente, Libre comercio y Individualismo", "Autoritarismo, Centralismo y Proteccionismo"]
respuesta: "Justicia Social, Independencia Económica y Soberanía Política"
tipo: mc

enunciado: "¿Cuáles son las tres columnas fundamentales de la doctrina peronista?"

explicacion: |
  Estas tres consignas definieron el programa político de Perón durante sus mandatos, buscando un equilibrio entre el capital y el trabajo.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "avanzado"
  tags: ["proceso_historico", "ordenar"]

opciones_explicitas: ["Surgimiento del movimiento obrero", "Llegada al poder en 1946", "Consolidación de derechos sociales", "Expansión de la industria nacional"]
respuesta_orden: ["Surgimiento del movimiento obrero", "Llegada al poder en 1946", "Consolidación de derechos sociales", "Expansión de la industria nacional"]
tipo: ordenar

enunciado: "Ordene cronológicamente los procesos que permitieron el ascenso y consolidación del peronismo:"

explicacion: |
  El proceso comenzó con la organización de los sindicatos, seguido por la victoria electoral, la implementación de medidas de bienestar y el fomento de la industria para sostener dicho modelo.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["derechos_laborales", "peronismo"]

respuesta: "Sueldo Anual Complementario"
tipo: completar
respuestas_validas:
  - "Sueldo Anual Complementario"
  - "sueldo anual complementario"
  - "Aguinaldo"

enunciado: "El beneficio laboral que consiste en la percepción de una parte del sueldo en dos cuotas durante el año se conoce formalmente como ___."

explicacion: |
  El aguinaldo, o Sueldo Anual Complementario (SAC), fue consolidado como un derecho adquirido para asegurar una compensación extra al trabajador.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["derechos_laborales", "vacaciones"]

opciones_explicitas: ["Vacaciones pagas", "Licencia por enfermedad", "Día de la familia", "Feriado religioso"]
respuesta: "Vacaciones pagas"
tipo: mc

enunciado: "Durante los primeros gobiernos peronistas, se garantizó el derecho al descanso mediante la implementación de las:"

explicacion: |
  Las vacaciones pagas permitieron que el trabajador disfrutara de su tiempo libre sin perder su remuneración, un pilar de la justicia social.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["sindicatos", "derechos_laborales"]

tipo: completar
enunciado: "Uno de los pilares de la reforma laboral peronista fue el ___ sindical, que dio a los trabajadores mayor poder de negociación colectiva."
respuesta: "fortalecimiento"
respuestas_validas:
  - "fortalecimiento"
  - "fortalecimiento sindical"

explicacion: |
  El fortalecimiento de los sindicatos permitió que los trabajadores tuvieran una voz institucionalizada en la negociación de sus condiciones de vida.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["jubilaciones", "seguridad_social"]

tipo: mc
opciones_explicitas: ["seguros de vida", "jubilaciones", "créditos hipotecarios", "asistencia escolar"]
respuesta: "jubilaciones"

enunciado: "La ampliación de la cobertura de la seguridad social se manifestó principalmente en la expansión de las ___ para la clase trabajadora."

explicacion: |
  La universalización de las jubilaciones permitió que una gran parte de la población pudiera acceder a una vejez digna y protegida por el Estado.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "peronismo_derechos_sociales"
  nivel: "avanzado"
  tags: ["ordenar", "derechos_laborales"]

opciones_explicitas: ["Preexistencia de leyes", "Promulgación de leyes de protección", "Consolidación de derechos sociales"]
respuesta_orden: ["Preexistencia de leyes", "Promulgación de leyes de protección", "Consolidación de derechos sociales"]
tipo: ordenar

enunciado: "Ordene cronológicamente la evolución de la situación de los derechos laborales en Argentina durante el proceso de transformación social de mediados del siglo XX:"

explicacion: |
  El proceso comenzó con la existencia de leyes previas, continuó con una intensa actividad legislativa de protección y culminó con la consolidación de un sistema de derechos sociales robusto.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["derechos", "voto_femenino", "eva_peron"]

respuesta: "1947"
tipo: "completar"
respuestas_validas:
  - "1947"

enunciado: "La Ley de Sufragio Femenino en Argentina, que garantizó el derecho político de las mujeres, fue sancionada en el año ___."

explicacion: |
  La Ley 13.010 fue sancionada el 9 de septiembre de 1947, marcando un hito en la democracia argentina.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["eva_peron", "liderazgo"]

respuesta: "Eva Perón"
tipo: "mc"
opciones_explicitas: ["Eva Perón", "Isabel Perón", "Alicia Moreau de Justo", "Victoria Ocampo"]

enunciado: "¿Qué figura política fue la principal impulsora y referente del reclamo por el voto femenino durante el primer peronismo?"

explicacion: |
  Eva Perón (Evita) fue la líder indiscutida del movimiento sufragista, logrando que el proyecto fuera una política de Estado.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["elecciones", "hitos"]

variables:
  escenario: uno_de([["1951", "primeras elecciones con voto femenino"]])

respuesta: "1951"
tipo: "input"
tolerancia_abs: 0

enunciado: "Si bien la ley se sancionó en 1947, las mujeres argentinas ejercieron el derecho al voto por primera vez en las elecciones de el año {escenario[0]}."

explicacion: |
  En 1951, las mujeres votaron por primera vez en elecciones nacionales, incluyendo a las candidatas a diputadas y senadoras.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["derechos_civiles", "ciudadania"]

respuesta_orden: ["Ley 13.010", "Sufragio Femenino", "Ciudadanía Plena"]
tipo: "ordenar"
opciones_explicitas: ["Ley 13.010", "Sufragio Femenino", "Ciudadanía Plena"]

enunciado: "Ordena cronológicamente los procesos que permitieron la integración política de la mujer en Argentina:"

explicacion: |
  Primero se sanciona la ley, luego se implementa el sufragio y finalmente se consolida la ciudadanía plena de la mujer.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "avanzado"
  tags: ["democracia", "participacion"]

respuesta: "se amplió la base electoral"
tipo: mc
opciones_explicitas: ["se amplió la base electoral", "se redujo la participación"]

enunciado: "Considerando el impacto del voto femenino en la democracia argentina, ¿qué ocurrió con la participación política?"

explicacion: |
  La incorporación de las mujeres como electoras amplió significativamente la base de representatividad del sistema democrático.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["polarizacion", "sociedad"]

variables:
  idx: uno_de([0,1])
  escenario: [["El peronismo generó una división entre sectores que lo veían como una herramienta de justicia social y sectores que lo veían como una amenaza a las instituciones.", "La polarización fue un rasgo distintivo del periodo."], ["El apoyo masivo de los trabajadores consolidó una nueva base política, mientras que la oposición se concentró en las clases medias y élites.", "La base social del movimiento fue transformadora."]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["La polarización fue un rasgo distintivo del periodo.", "La base social del movimiento fue transformadora."]

enunciado: "{escenario[idx][0]}"

explicacion: |
  El peronismo introdujo una nueva dinámica de participación política que fracturó la estructura social tradicional argentina, creando una división que ha persistido en la cultura política del país.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["clases_sociales", "trabajadores"]

respuesta: "clase_obrera"
tipo: completar
respuestas_validas:
  - "clase_obrera"
  - "clase trabajadora"

enunciado: "El principal sector social que brindó el apoyo masivo y sostenido al movimiento peronista fue la ___."

explicacion: |
  La incorporación de la clase obrera a la vida política activa fue el pilar fundamental del movimiento, otorgándole un poder de movilización sin precedentes en la historia argentina.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["oposición", "sectores_sociales"]

variables:
  opcion_correcta: uno_de(["clases_medias_urbanas", "sectores_rurales_oligárquicos", "sindicatos_tradicionales"])
  opcion_incorrecta_1: "sectores_rurales_oligárquicos"
  opcion_incorrecta_2: "sindicatos_tradicionales"

respuesta: opcion_correcta
tipo: mc
opciones_explicitas: ["clases_medias_urbanas", "sectores_rurales_oligárquicos", "sindicatos_tradicionales"]

enunciado: "Históricamente, uno de los sectores que manifestó una oposición más estructurada y constante a la hegemonía peronista fue el de las ___."

explicacion: |
  La oposición peronista fue heterogénea, pero las clases medias urbanas y la élite tradicional conformaron los núcleos de resistencia más significativos durante el periodo.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "avanzado"
  tags: ["legado", "politica_argentina"]

respuesta: "identidad_politica"
tipo: completar
respuestas_validas:
  - "identidad_politica"
  - "identidad política"

enunciado: "El peronismo no solo fue un gobierno, sino que configuró una nueva ___ que sigue siendo un eje central en la política argentina contemporánea."

explicacion: |
  La capacidad de la identidad peronista para reorganizarse y permanecer como un actor central demuestra la profundidad de su impacto en la estructura política nacional.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["proceso_historico", "derechos"]

respuesta_orden: ["Reivindicación de derechos laborales", "Fortalecimiento del rol sindical", "Polarización de la estructura social"]
tipo: ordenar
opciones_explicitas: ["Reivindicación de derechos laborales", "Fortalecimiento del rol sindical", "Polarización de la estructura social"]

enunciado: "Ordene cronológicamente los efectos sociales derivados del ascenso del peronismo en la Argentina:"

explicacion: |
  El proceso comenzó con la conquista de derechos, continuó con la institucionalización de la fuerza sindical y culminó en una división social profunda entre partidarios y detractores.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["derechos_laborales", "peronismo"]

variables:
  datos: [["implementacion_vacaciones", "descanso_pago"], ["seguro_vida", "proteccion_familia"], ["estatuto_obrero", "estabilidad_laboral"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["descanso_pago", "proteccion_familia", "estabilidad_laboral"]

enunciado: "Durante el primer peronismo, la legislación laboral garantizó que los trabajadores tuvieran derecho a un periodo de ___."

explicacion: |
  La Ley de Vacaciones Pagas fue uno de los pilares de la justicia social, permitiendo el descanso remunerado de la clase obrera.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["voto_femenino", "derechos_civiles"]

respuesta: "voto_femenino"
tipo: completar
respuestas_validas:
  - "voto_femenino"

enunciado: "La promulgación de la Ley 13.010 en 1947 permitió que las mujeres ejercieran su derecho al ___ en Argentina."

explicacion: |
  La Ley de Sufragio Femenino fue fundamental para la integración de la mujer a la vida política y ciudadana del país.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["justicia_social", "distribucion_riqueza"]

variables:
  datos: [["reparto_ganancias", "justicia_social"], ["salario_minimo", "poder_pobres"], ["seguridad_social", "bienestar_general"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["justicia_social", "poder_pobres", "bienestar_general"]

enunciado: "El objetivo central de la política de redistribución de la riqueza durante este periodo era alcanzar la ___."

explicacion: |
  El peronismo promovió la idea de que la riqueza debe ser distribuida para garantizar una vida digna a los sectores trabajadores.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "avanzado"
  tags: ["secuencia_historica", "derechos"]

variables:
  orden_correcta: ["Estatuto del Peón", "Ley de Vacaciones", "Voto Femenino", "Seguros de Vida"]

respuesta_orden: orden_correcta
tipo: ordenar
opciones_explicitas: ["Estatuto del Peón", "Ley de Vacaciones", "Voto Femenino", "Seguros de Vida"]

enunciado: "Ordene cronológicamente las siguientes conquistas sociales del ámbito de los derechos laborales y civiles durante el primer peronismo:"

explicacion: |
  La secuencia refleja la expansión de derechos desde el ámbito rural y laboral hacia la plena ciudadanía política.
```

```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["trabajo", "dignidad"]

variables:
  datos: [["salario_justo", "dignidad"], ["jornada_8h", "salud"], ["afiliacion_sindicato", "poder"]]
  idx: uno_de([0, 1, 2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Para el peronismo, el trabajo no era solo una mercancía, sino un medio para alcanzar la ___ del trabajador."

explicacion: |
  La noción de 'dignidad' fue el eje transversal de todas las reformas laborales impulsadas por el Estado.
```

## Sección: semana-tragica-1919 (27 preguntas)

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["semana_tragica", "contexto", "primera_guerra"]

variables:
  anio_fin_guerra: 1918

respuesta: "1918"
tipo: input

enunciado: "La Primera Guerra Mundial concluyó en el año {anio_fin_guerra}, momento en que los precios de los alimentos comenzaron a caer drásticamente, afectando la economía argentina."

explicacion: |
  El fin de la Primera Guerra Mundial en 1918 provocó un colapso en la demanda de productos agropecuarios, lo que llevó a los empresarios a recortar salarios para mantener sus ganancias.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["huelga", "fora", "vasena"]

variables:
  lugar_huelga: "los Talleres Metalúrgicos Vasena"

respuesta: "los Talleres Metalúrgicos Vasena"
tipo: input

enunciado: "El conflicto tuvo como detonante inicial una huelga en {lugar_huelga}, en el barrio de Nueva Pompeya."

explicacion: |
  La huelga comenzó en los Talleres Metalúrgicos Vasena; la represión policial al piquete y el entierro de las víctimas escalaron hacia una huelga general convocada por la FORA en Buenos Aires.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["liga_patriota", "extrema_derecha"]

variables:
  tipo_organizacion: "extrema derecha"

respuesta: "extrema derecha"
tipo: input

enunciado: "La Liga Patriótica Argentina fue una organización de {tipo_organizacion} compuesta por sectores conservadores, nacionalistas y militares."

explicacion: |
  La Liga Patriótica actuó como una milicia privada de extrema derecha para defender los intereses de las clases dominantes contra el movimiento obrero.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["yrigoyen", "partido_radical", "intervencion"]

variables:
  presidente: "Hipólito Yrigoyen"

respuesta: "Hipólito Yrigoyen"
tipo: input

enunciado: "El presidente de la Nación durante la Semana Trágica, {presidente}, del Partido Radical, intervino militarmente para restablecer el orden."

explicacion: |
  Aunque Yrigoyen tenía apoyo popular, su gobierno se alió con las fuerzas conservadoras para reprimir la huelga, priorizando la estabilidad sobre los derechos laborales.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["ideologias", "anarquismo", "socialismo"]

variables:
  ideas_influyentes: "anarquistas y socialistas"

respuesta: "anarquistas y socialistas"
tipo: input

enunciado: "El movimiento obrero argentino en 1919 estaba influenciado principalmente por las ideas {ideas_influyentes}."

explicacion: |
  La FORA y otros grupos obreros estaban fuertemente influenciados por corrientes anarquistas y socialistas que buscaban la justicia social.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["liga_patriota", "objetivo"]

variables:
  objetivo_liga: "defender la civilización"

respuesta: "defender la civilización"
tipo: input

enunciado: "La Liga Patriótica justificaba sus acciones violentas como una necesidad para {objetivo_liga} contra el 'peligro rojo'."

explicacion: |
  La retórica de la Liga se basaba en la defensa de la 'civilización' occidental contra lo que percibían como una amenaza bolchevique o roja.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["cronologia", "fechas"]

variables:
  inicio: 7
  fin: 13

respuesta: "7 y 13"
tipo: input

enunciado: "La Semana Trágica ocurrió entre el día {inicio} y el día {fin} de enero de 1919."

explicacion: |
  El conflicto violento se extendió durante una semana, específicamente del 7 al 13 de enero de 1919.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["liga_patriota", "milicia"]

variables:
  caracterizacion: "milicia privada"

respuesta: "milicia privada"
tipo: input

enunciado: "La Liga Patriótica actuaba efectivamente como una {caracterizacion} encargada de atacar a huelguistas e inmigrantes."

explicacion: |
  No era un cuerpo oficial del estado, sino una organización civil de extrema derecha que operaba como una milicia paramilitar.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["clases_sociales", "trabajadores"]

variables:
  sector: "trabajadores"

respuesta: "trabajadores"
tipo: input

enunciado: "Los recortes salariales y el aumento de la jornada laboral afectaron directamente a los {sector}."

explicacion: |
  La crisis económica post-guerra llevó a los empresarios a trasladar la carga a los trabajadores mediante peores condiciones laborales.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["burguesia", "socialismo"]

variables:
  amenaza_percebida: "socialismo"

respuesta: "socialismo"
tipo: input

enunciado: "La burguesía conservadora temía principalmente la expansión del {amenaza_percebida} durante este período."

explicacion: |
  El auge del movimiento obrero organizado era visto por las élites como una amenaza directa al orden capitalista y social establecido.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["huelga", "conflicto"]

variables:
  tipo_conflicto: "disputa económica"

respuesta: "disputa económica"
tipo: input

enunciado: "Inicialmente, la huelga en los Talleres Vasena fue una {tipo_conflicto}, pero pronto se transformó en un choque político más amplio."

explicacion: |
  El conflicto comenzó por demandas salariales y de condiciones laborales, escalando a una crisis política nacional.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["liga_patriota", "violencia", "inmigrantes"]

variables:
  grupo_objetivo: "inmigrantes"

respuesta: "inmigrantes"
tipo: input

enunciado: "Los grupos de choque de la Liga Patriótica atacaban no solo a huelguistas, sino también a {grupo_objetivo} y sospechosos de izquierda."

explicacion: |
  La xenofobia fue un componente clave de la Liga, que asociaba a los inmigrantes europeos con el anarquismo y el bolchevismo.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["represión", "ejecuciones"]

variables:
  metodo: "ejecuciones extrajudiciales"

respuesta: "ejecuciones extrajudiciales"
tipo: input

enunciado: "La violencia de la Liga Patriótica incluyó detenciones arbitrarias, torturas y {metodo} contra los trabajadores."

explicacion: |
  La represión fue brutal y muchas víctimas fueron asesinadas sin proceso legal alguno por parte de los grupos de choque.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["migración", "boom_económico"]

variables:
  causa_migracion: "boom económico"

respuesta: "boom económico"
tipo: input

enunciado: "Durante la Primera Guerra Mundial, la demanda de productos argentinos generó un {causa_migracion} que atrajo a miles de personas a las ciudades."

explicacion: |
  La guerra creó una coyuntura económica favorable para Argentina, impulsando la urbanización y el crecimiento de la clase obrera.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["fora", "organización"]

variables:
  rol_fora: "organizar"

respuesta: "organizar"
tipo: input

enunciado: "La FORA tuvo un rol central en {rol_fora} la huelga general que desencadenó la Semana Trágica."

explicacion: |
  La Federación Obrera Regional Argentina fue la principal entidad que coordinó la acción obrera durante este período.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["gobierno", "justificación"]

variables:
  justificacion: "restablecer el orden"

respuesta: "restablecer el orden"
tipo: input

enunciado: "El gobierno de Yrigoyen justificó la intervención militar como necesaria para {justificacion} en la capital."

explicacion: |
  La narrativa oficial presentaba la represión como una medida de emergencia para proteger la seguridad pública.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["economía", "precios"]

variables:
  tendencia_precios: "cayeron drásticamente"

respuesta: "cayeron drásticamente"
tipo: input

enunciado: "Al terminar la guerra, los precios de los alimentos {tendencia_precios}, desestabilizando la economía."

explicacion: |
  El fin de la demanda bélica provocó una caída abrupta en los ingresos del sector agroexportador, clave para la economía argentina.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["liga_patriota", "composición"]

variables:
  miembros: "conservadores, nacionalistas y militares"

respuesta: "conservadores, nacionalistas y militares"
tipo: input

enunciado: "La Liga Patriótica estaba compuesta por {miembros} que buscaban proteger sus privilegios."

explicacion: |
  Fue una coalición heterogénea de élites que unieron sus fuerzas contra el movimiento obrero.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["burguesía", "objetivo"]

variables:
  objetivo_burguesia: "mantener sus ganancias"

respuesta: "mantener sus ganancias"
tipo: input

enunciado: "Los empresarios recortaron salarios para {objetivo_burguesia} frente a la caída de los precios de exportación."

explicacion: |
  La lógica empresarial priorizó la rentabilidad sobre las condiciones de vida de los trabajadores.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "avanzado"
  tags: ["conflicto", "visión_sociedad"]

variables:
  naturaleza: "choque frontal"

respuesta: "choque frontal"
tipo: input

enunciado: "La huelga general representó un {naturaleza} entre dos visiones de sociedad: la burguesía y el proletariado."

explicacion: |
  Fue más que una disputa laboral; fue un enfrentamiento ideológico y político por la dirección del país.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["liga_patriota", "víctimas"]

variables:
  victimas: "huelguistas"

respuesta: "huelguistas"
tipo: input

enunciado: "Los grupos de choque de la Liga Patriótica recorrían las calles atacando principalmente a {victimas}."

explicacion: |
  Los huelguistas eran el blanco principal de la violencia paramilitar organizada por la Liga.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["derechos", "consecuencias"]

variables:
  resultado_derechos: "restringidos"

respuesta: "restringidos"
tipo: input

enunciado: "Como consecuencia de la Semana Trágica, los derechos laborales fueron fuertemente {resultado_derechos} por la represión estatal y paramilitar."

explicacion: |
  La victoria de la Liga y la intervención militar marcaron un retroceso significativo para la organización obrera.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["cronologia", "huelga"]

variables:
  mes: "enero"

respuesta: "enero"
tipo: input

enunciado: "La huelga general que derivó en la Semana Trágica ocurrió en el mes de {mes} de 1919."

explicacion: |
  Los eventos centrales ocurrieron en la primera quincena de enero de 1919.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "intermedio"
  tags: ["ideología", "anticomunismo"]

variables:
  concepto: "peligro rojo"

respuesta: "peligro rojo"
tipo: input

enunciado: "La Liga Patriótica utilizaba el concepto del {concepto} para justificar su violencia contra la izquierda."

explicacion: |
  El "peligro rojo" era una retórica que asociaba cualquier protesta social con el comunismo bolchevique ruso.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["geografía", "buenos_aires"]

variables:
  ciudad: "Buenos Aires"

respuesta: "Buenos Aires"
tipo: input

enunciado: "La violencia de la Semana Trágica se concentró principalmente en la ciudad de {ciudad}."

explicacion: |
  Aunque hubo ecos en otras ciudades, el epicentro del conflicto fue la capital federal.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "avanzado"
  tags: ["yrigoyen", "legado", "partido_radical"]

variables:
  ruptura: "ruptura con la base popular"

respuesta: "ruptura con la base popular"
tipo: input

enunciado: "La represión de la Semana Trágica marcó una {ruptura} para el gobierno de Yrigoyen, alienando a sus antiguos aliados obreros."

explicacion: |
  Este evento es visto como un punto de inflexión donde el radicalismo se alejó de sus orígenes más progresistas.
```

```
metadata:
  materia: "Historia"
  tema: "semana_tragica_1919"
  nivel: "basico"
  tags: ["contexto", "primera_guerra_mundial"]

variables:
  guerra_previa: "Primera Guerra Mundial"

respuesta: "Primera Guerra Mundial"
tipo: input

enunciado: "El contexto inmediato previo a la crisis de 1919 fue el fin de la {guerra_previa} (1914-1918)."

explicacion: |
  La Primera Guerra Mundial fue el catalizador económico y social que llevó a la crisis de 1919.
```

## Sección: terrorismo-de-estado-argentina (23 preguntas)

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["conceptos", "derechos_humanos"]

respuesta: "uso sistemático de la violencia ilegal por parte del Estado contra su población"
tipo: completar
respuestas_validas:
  - "uso sistemático de la violencia ilegal por parte del Estado contra su población"

enunciado: "El terrorismo de Estado se define como el ___."

explicacion: |
  El terrorismo de Estado ocurre cuando las instituciones que deben proteger a los ciudadanos utilizan su poder y recursos para ejercer violencia, desapariciones y tortura de manera sistemática contra la población.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["dictadura", "metodos"]

respuesta: "desapariciones forzadas"
tipo: mc
opciones_explicitas: ["desapariciones forzadas", "voto universal", "libertad de prensa", "debate parlamentario"]

enunciado: "Durante la última dictadura militar en Argentina (1976-1983), una de las prácticas sistemáticas de represión fue la:"

explicacion: |
  La desaparición forzada de personas fue una de las modalidades principales de la represión estatal, donde el Estado negaba la detención de la persona, impidiendo el acceso a la justicia y a la protección legal.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "avanzado"
  tags: ["proceso", "metodologia"]

tipo: ordenar
opciones_explicitas: ["Captura/Secuestro", "Detención clandestina", "Eliminación/Desaparición"]
respuesta_orden: ["Captura/Secuestro", "Detención clandestina", "Eliminación/Desaparición"]

enunciado: "Ordene la secuencia típica de un operativo de represión sistemática en un centro clandestino de detención:"

pasos:
  - "Observe el orden lógico de los eventos presentados en las opciones."

explicacion: |
  El terrorismo de Estado operaba mediante ciclos de violencia que comenzaban con la identificación y captura, seguían con la detención en lugares no registrados y culminaban en la eliminación de la persona para evitar la responsabilidad legal.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["robo_identidad", "economía"]

respuesta: "falso"
tipo: completar
enunciado: "¿El terrorismo de Estado en Argentina se limitó únicamente a la represión física de opositores políticos, sin afectar el patrimonio de las víctimas o la identidad de sus descendientes?"

explicacion: |
  Falso. El terrorismo de Estado también incluyó el robo de bienes, la expropiación de empresas y el robo sistemático de bebés (hijos de desaparecidas), lo cual constituye un crimen de lesa humanidad adicional.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "avanzado"
  tags: ["derecho", "ilegalidad"]

variables:
  caso_idx: uno_de([0, 1])
  escenario: [["La tortura aplicada en centros clandestinos"], ["El asesinato de una persona sin juicio previo"]]
  resultado: ["ilegal", "ilegal"]

respuesta: resultado[caso_idx]
tipo: mc
opciones_explicitas: ["legal", "ilegal"]

enunciado: "En el contexto del terrorismo de Estado, {escenario[caso_idx]} es una acción considerada:"

explicacion: |
  Cualquier acción que rompa el debido proceso y utilice la violencia estatal fuera del marco de la ley para suprimir derechos fundamentales es una acción ilegal y un crimen de lesa humanidad.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["dictadura", "derechos_humanos"]

tipo: mc
opciones_explicitas: ["El exilio voluntario", "La detención ilegal con destino desconocido", "La migración por motivos económicos", "La persecución política en el extranjero"]
respuesta: "La detención ilegal con destino desconocido"

enunciado: "Durante la última dictadura militar en Argentina, la práctica de 'desaparecer' personas se definía como:"

explicacion: |
  La desaparición forzada fue una práctica sistemática donde el Estado secuestraba a ciudadanos, los mantenía en centros clandestinos de detención y ocultaba su paradero, impidiendo cualquier tipo de proceso legal o reconocimiento de su detención.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["madres_de_plaza_de_mayo", "resistencia"]

tipo: completar
respuestas_validas:
  - "Plaza de Mayo"

enunciado: "Ante la falta de información sobre el paradero de sus hijos, las Madres comenzaron a realizar sus históricas marchas en la _______."

explicacion: |
  Las Madres de Plaza de Mayo se convirtieron en un símbolo mundial de resistencia al exigir la aparición con vida de sus hijos frente a la Casa Rosada.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "avanzado"
  tags: ["vuelos_de_la_muerte", "exterminio"]

variables:
  escenarios: [["vuelos de la muerte", "vuelos de la muerte"], ["centros clandestinos", "centros clandestinos"]]
  escenario: uno_de(escenarios)

tipo: mc
opciones_explicitas: ["Vuelos de la muerte", "Traslados legales", "Exilio forzado", "Centros clandestinos"]

enunciado: "Una de las formas sistemáticas de ocultar los asesinatos de los desaparecidos fue el uso de los {escenario[0]}."

respuesta: "Vuelos de la muerte"

explicacion: |
  Los 'vuelos de la muerte' consistían en transportar a los detenidos en aviones hacia el mar para arrojarlos al agua, evitando así dejar rastros físicos de los cuerpos.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["procedimiento", "represion"]

tipo: ordenar
opciones_explicitas: ["Secuestro/Detención", "Traslado a un CCD", "Interrogatorio y tortura", "Eliminación/Desaparición"]

enunciado: "Ordene cronológicamente el procedimiento sistemático aplicado a los desaparecidos durante la represión:"

explicacion: |
  El ciclo comenzaba con el secuestro en la vía pública o domicilio, seguido del traslado a Centros Clandestinos de Detención (CCD), donde se aplicaba la tortura para obtener información, culminando en la eliminación del individuo para asegurar el secreto del crimen.
respuesta_orden: ["Secuestro/Detención", "Traslado a un CCD", "Interrogatorio y tortura", "Eliminación/Desaparición"]
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["dictadura", "derechos_humanos", "argentina"]

opciones_explicitas: ["ESMA", "El Campito", "La Perla", "Todos los anteriores"]

respuesta: "Todos los anteriores"
tipo: mc

enunciado: "Durante la última dictadura militar en Argentina, se utilizaron diversos Centros Clandestinos de Detención (CCD). ¿Cuál de los siguientes fue un centro de detención conocido?"

explicacion: |
  Tanto la ESMA (Escuela de Mecánica de la Armada) como El Campito y La Perla fueron centros fundamentales donde se practicó la detención ilegal y la tortura.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["dictadura", "derechos_humanos"]

opciones_explicitas: ["legal", "clandestino"]

respuesta: "clandestino"
tipo: mc

enunciado: "Los centros utilizados para la detención, tortura y desaparición de personas durante la dictadura militar se denominaban centros de detención ___."

explicacion: |
  Se llamaban "clandestinos" porque operaban fuera de todo marco legal, sin orden judicial y ocultando la existencia de los detenidos.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "terrorismo_oficial_estado"
  nivel: "avanzado"
  tags: ["derechos_humanos", "memoria"]

variables:
  escenario_idx: uno_de([0, 1])

enunciado: "En el contexto de la represión, el proceso de 'desaparición' implicaba que la persona era trasladada a un centro donde su paradero era ___."

pasos:
  - "La víctima era secuestrada por fuerzas de seguridad."
  - "Se le negaba el acceso a la justicia y a su familia."

respuesta: [["desconocido", "negado"], ["oculto", "negado"]][escenario_idx][0]
tipo: completar
respuestas_validas:
  - ["desconocido", "negado"]
  - ["oculto", "negado"]

explicacion: |
  La sistemática de la desaparición forzada buscaba que el Estado pudiera negar la responsabilidad sobre el destino de las víctimas.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["dictadura", "instituciones"]

opciones_explicitas: ["El Estado", "Las Fuerzas Armadas", "La Justicia", "El Congreso"]

respuesta: "Las Fuerzas Armadas"
tipo: mc

enunciado: "¿Qué institución ejerció el control operativo y la gestión de la represión mediante los centros clandestinos de detención?"

explicacion: |
  Si bien el Estado como estructura permitió el terrorismo, la ejecución directa en los CCD fue responsabilidad de las Fuerzas Armadas y de Seguridad.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["derechos_humanos", "memoria"]

opciones_explicitas: ["Secuestro", "Detención en CCD", "Desaparición/Eliminación"]

respuesta_orden: ["Secuestro", "Detención en CCD", "Desaparición/Eliminación"]
tipo: ordenar

enunciado: "Ordene cronológicamente las etapas típicas de una operación de represión sistemática aplicada por la dictadura:"

explicacion: |
  El ciclo comenzaba con el secuestro en la vía pública o domicilios, seguido por la internación en un centro clandestino y culminaba con la desaparición definitiva de la persona.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["derechos_humanos", "madres", "abuelas"]

tipo: mc
opciones_explicitas: ["Madres de Plaza de Mayo", "Abuelas de Plaza de Mayo", "Hijas de Plaza de Mayo", "Asamblea Permanente por los Derechos Humanos"]

enunciado: "El organismo constituido por mujeres que comenzaron a marchar en la Plaza de Mayo para exigir la aparición con vida de sus hijos desaparecidos se denomina:"

respuesta: "Madres de Plaza de Mayo"

explicacion: |
  Las Madres de Plaza de Mayo surgieron en 1977 como una respuesta directa a la desaparición sistemática de personas durante la última dictadura militar.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["abuelas", "identidad", "derechos_humanos"]

tipo: completar
respuestas_validas:
  - "restitución"
  - "identidad"

enunciado: "El objetivo principal de las Abuelas de Plaza de Mayo es la búsqueda y la ___ de los niños, niñas y adolescentes que fueron apropiados ilegalmente durante la dictadura, garantizando su derecho a la ___."

respuesta: ["restitución", "identidad"]

explicacion: |
  Las Abuelas se enfocan específicamente en la búsqueda de los nietos desaparecidos, trabajando con el Banco Nacional de Datos Genéticos para restituir su identidad original.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["historia", "cronologia", "derechos_humanos"]

tipo: ordenar
opciones_explicitas: ["Surgimiento de las Madres de Plaza de Mayo", "Dictadura Militar (Proceso de Reorganización Nacional)", "Juicio a las Juntas"]

enunciado: "Ordene cronológicamente los siguientes hitos relacionados con la lucha por los derechos humanos en Argentina:"

respuesta_orden: ["Dictadura Militar (Proceso de Reorganización Nacional)", "Surgimiento de las Madres de Plaza de Mayo", "Juicio a las Juntas"]

explicacion: |
  La dictadura (1976-1983) fue el contexto de la represión; las Madres surgieron durante el proceso (1977) y el Juicio a las Juntas fue el hito judicial clave tras el retorno a la democracia (1985).
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "avanzado"
  tags: ["terminologia", "derechos_humanos"]

tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "El término 'desaparecido' se utiliza para describir a las personas que fueron secuestradas por fuerzas de seguridad o grupos paramilitares y de las cuales no se tiene rastro, siendo una práctica sistemática del terrorismo de Estado."

respuesta: verdadero

explicacion: |
  La desaparición forzada es un crimen de lesa humanidad que se caracteriza por la falta de información sobre el paradero de la víctima y la participación del Estado en el secuestro.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["dictadura", "derechos_humanos"]

variables:
  datos: [["Un grupo de civiles es secuestrado por fuerzas de seguridad sin orden judicial y llevado a un lugar clandestino.", "secuestro_exprés"], ["Se prohíbe la actividad política y se censuran libros en las escuelas.", "censura_cultural"], ["Se establece un control estricto sobre el movimiento de personas mediante el uso de documentos de identidad.", "control_documental"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["secuestro_exprés", "censura_cultural", "control_documental"]

enunciado: "Durante la última dictadura militar en Argentina, se implementaron diversas tácticas de control social. Si ocurre lo siguiente: {datos[idx][0]}, ¿cómo se denomina esta práctica?"

explicacion: |
  El escenario descrito corresponde a la práctica de detención clandestina o secuestro exprés, una característica central del terrorismo de Estado para evitar la visibilidad de la detención.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "avanzado"
  tags: ["derechos_humanos", "identidad"]

variables:
  datos: [["Un hijo de una desaparecida es entregado a una familia de militares para ser criado con una identidad falsa.", "robo_identidad"], ["Un niño es separado de sus padres pero permanece en un hogar estatal.", "desarraigo"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "robo_identidad"
  - "desarraigo"

enunciado: "En el contexto de la apropiación de menores, cuando ___ ocurre, se está vulnerando el derecho a la identidad."

pasos:
  - "Identificar la acción realizada sobre el menor."
  - "Relacionar la acción con el concepto de robo de identidad."

explicacion: |
  El robo de identidad consistió en la apropiación sistemática de niños nacidos en cautiverio o hijos de desaparecidos, entregándolos a familias vinculadas al régimen.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["instituciones", "dictadura"]

variables:
  datos: [["El Estado utiliza centros clandestinos de detención para torturar.", "centros_clandestinos"], ["El Estado utiliza medios de comunicación para difundir propaganda.", "propaganda_mediatica"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["centros_clandestinos", "propaganda_mediatica"]

enunciado: "Si el Estado utiliza {datos[idx][0]} para llevar a cabo la represión sistemática, estamos ante una práctica de..."

explicacion: |
  Los Centros Clandestinos de Detención (CCD) fueron espacios donde se ejecutó la represión sistemática fuera de la legalidad.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "intermedio"
  tags: ["secuencia", "represion"]

variables:
  secuencia: ["Desaparición de la persona", "Detención en centro clandestino", "Eliminación sistemática"]

respuesta_orden: secuencia
tipo: ordenar
opciones_explicitas: ["Desaparición de la persona", "Detención en centro clandestino", "Eliminación sistemática"]

enunciado: "Ordene cronológicamente las etapas típicas de un operativo de represión sistemática durante el terrorismo de Estado:"

explicacion: |
  El ciclo de la represión solía comenzar con el secuestro (desaparición), seguido por la permanencia en un centro clandestino y, finalmente, la ejecución o desaparición definitiva.
```

```
metadata:
  materia: "historia"
  tema: "terrorismo_de_estado_argentina"
  nivel: "basico"
  tags: ["terminologia", "memoria"]

variables:
  datos: [["El término se aplica a quienes fueron detenidos sin dejar rastro legal.", "desaparecido"], ["El término se aplica a quienes huyeron del país.", "exiliado"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["desaparecido", "exiliado"]

enunciado: "En Argentina, una persona que ha sido secuestrada por fuerzas de seguridad y cuyo paradero es desconocido por el Estado se denomina ___."

explicacion: |
  La figura del 'desaparecido' es el eje central del terrorismo de Estado, caracterizado por la negación de la existencia del detenido por parte de las autoridades.
```

## Sección: industrializacion-por-sustitucion-de-importaciones-isi (22 preguntas)

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "basico"
  tags: ["definicion"]

variables:
  n: uno_de([1, 1])

respuesta: "producir localmente lo que antes se importaba"
tipo: mc
opciones_explicitas: ["exportar más materias primas", "producir localmente lo que antes se importaba", "abrir la economía sin aranceles"]

enunciado: "La ISI (Industrialización por Sustitución de Importaciones) buscaba principalmente..."

explicacion: |
  La idea central era fabricar dentro del país los bienes manufacturados
  que antes se compraban al exterior, para generar empleo y reducir la
  dependencia económica.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "basico"
  tags: ["cronologia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ISI alcanzó su mayor impulso en Argentina durante el primer gobierno de Juan Domingo Perón (1946-1955)."

explicacion: |
  Aunque el proceso empezó a cobrar relevancia desde la década de 1930,
  fue durante el primer peronismo cuando alcanzó su mayor impulso.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["contexto"]

variables:
  evento: uno_de(["la crisis mundial de 1929", "la Segunda Guerra Mundial"])

respuesta: verdadero
tipo: vf

enunciado: "\"{evento}\" fue uno de los eventos que impulsó el surgimiento de la ISI, al interrumpir el comercio internacional."

explicacion: |
  Ambos eventos cortaron el acceso de los países latinoamericanos a
  productos industriales importados, empujando a producir localmente.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["politica economica"]

variables:
  n: uno_de([1, 1])

respuesta: "aranceles altos a la importación"
tipo: mc
opciones_explicitas: ["aranceles altos a la importación", "subsidios a productos importados", "eliminación de impuestos al comercio exterior"]

enunciado: "Para proteger a las fábricas nacientes, el Estado argentino implementó principalmente..."

explicacion: |
  Los aranceles altos encarecían los productos extranjeros, incentivando
  a comprar lo producido localmente.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "basico"
  tags: ["organismos"]

variables:
  n: uno_de([1, 1])

respuesta: "IAPI"
tipo: completar

enunciado: "El organismo estatal creado para controlar la compra de materias primas agrarias y su venta al exterior fue el ___ (Instituto Argentino de Promoción del Intercambio)."

respuestas_validas:
  - "IAPI"

explicacion: |
  El IAPI centralizaba el comercio exterior agrario, usando ese margen
  para financiar la industrialización.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["nacionalizaciones"]

variables:
  servicio: uno_de(["los ferrocarriles", "las empresas de gas"])

respuesta: verdadero
tipo: vf

enunciado: "Durante la ISI, {servicio} fueron nacionalizados por el Estado argentino."

explicacion: |
  El Estado nacionalizó servicios públicos clave para fortalecer su
  control sobre la infraestructura económica del país.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "basico"
  tags: ["estructura productiva"]

variables:
  n: uno_de([1, 1])

respuesta: "agroexportadora a una con base industrial"
tipo: mc
opciones_explicitas: ["industrial a agroexportadora", "agroexportadora a una con base industrial", "minera a financiera"]

enunciado: "Con la ISI, Argentina pasó de ser una nación principalmente..."

explicacion: |
  El país desarrolló sectores como el alimenticio, textil, químico y
  automotor, sumando una base industrial a su perfil agroexportador previo.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["efectos sociales"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El crecimiento del empleo industrial durante la ISI se acompañó de un movimiento sindical más fuerte, con mayor poder de negociación para los trabajadores."

explicacion: |
  El auge industrial fortaleció al movimiento obrero organizado, que ganó
  poder de negociación frente a las patronales.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "avanzado"
  tags: ["debilidades estructurales"]

variables:
  n: uno_de([1, 1])

respuesta: "se volvían ineficientes al depender de la protección estatal"
tipo: mc
opciones_explicitas: ["se volvían ineficientes al depender de la protección estatal", "se volvían más competitivas que las extranjeras", "dejaban de necesitar maquinaria importada"]

enunciado: "Una debilidad estructural clave del modelo ISI era que las industrias protegidas..."

explicacion: |
  Al no competir en mercados abiertos, muchas industrias locales se
  volvían costosas e ineficientes, incapaces de competir sin protección.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "avanzado"
  tags: ["restriccion externa"]

variables:
  n: uno_de([1, 1])

respuesta: "de la exportación de productos primarios"
tipo: mc
opciones_explicitas: ["de la exportación de productos primarios", "de préstamos internacionales exclusivamente", "de impuestos internos únicamente"]

enunciado: "Para conseguir los dólares necesarios para importar maquinaria industrial, la economía argentina seguía dependiendo principalmente..."

explicacion: |
  El país seguía necesitando exportar carne, trigo y maíz para conseguir
  las divisas con las que importar equipos y tecnología.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "avanzado"
  tags: ["restriccion externa"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Una caída en los precios internacionales de la soja o la carne podía afectar directamente la capacidad argentina de importar insumos industriales durante la ISI."

explicacion: |
  Como los dólares venían de exportar productos primarios, una baja en
  sus precios reducía la capacidad de importar lo que la industria
  necesitaba, generando inflación y desabastecimiento.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["declive"]

variables:
  factor: uno_de(["la ineficiencia industrial", "la deuda externa", "la hiperinflación"])

respuesta: verdadero
tipo: vf

enunciado: "\"{factor}\" fue uno de los factores que hicieron insostenible el modelo ISI en las décadas de 1970 y 1980."

explicacion: |
  Los tres factores combinados (ineficiencia, deuda, hiperinflación)
  llevaron al declive del modelo hacia fines del siglo XX.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "basico"
  tags: ["alcance regional"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ISI se extendió por gran parte de América Latina en el siglo XX, y Argentina fue uno de sus ejemplos más tempranos."

explicacion: |
  No fue un fenómeno exclusivamente argentino: varios países
  latinoamericanos aplicaron modelos similares, aunque Argentina estuvo
  entre los pioneros.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["industria automotriz"]

variables:
  marca: uno_de(["Ford", "Volkswagen"])

respuesta: verdadero
tipo: vf

enunciado: "La llegada de la marca \"{marca}\" a Argentina es un ejemplo del desarrollo de la industria automotriz durante la ISI."

explicacion: |
  La instalación de terminales automotrices extranjeras en el país fue
  uno de los hitos que muestran el esfuerzo por generar producción
  industrial interna.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "basico"
  tags: ["industria siderurgica"]

variables:
  n: uno_de([1, 1])

respuesta: "SOMISA"
tipo: completar

enunciado: "La empresa estatal que ejemplifica el desarrollo de la industria siderúrgica argentina durante este período es ___."

respuestas_validas:
  - "SOMISA"

explicacion: |
  SOMISA (Sociedad Mixta Siderúrgica Argentina, fundada en 1947) es el
  hito mencionado como ejemplo del desarrollo de la industria del acero
  nacional en esa etapa (Siderar, en cambio, nace recién en 1993 de la
  privatización de SOMISA — es posterior a la era ISI, no un ejemplo de ella).
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["propaganda"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La propaganda de la época de la ISI solía promover el consumo de productos nacionales como un acto patriótico."

explicacion: |
  Comprar lo producido en el país se presentaba como una forma de apoyar
  el desarrollo nacional, reforzando el discurso oficial.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "avanzado"
  tags: ["legado"]

variables:
  n: uno_de([1, 1])

respuesta: "la estructura urbana y la distribución de la riqueza"
tipo: mc
opciones_explicitas: ["la estructura urbana y la distribución de la riqueza", "el sistema electoral vigente hoy", "el idioma oficial del país"]

enunciado: "El legado de la ISI en la Argentina contemporánea se nota especialmente en..."

explicacion: |
  La estructura urbana, la distribución de la riqueza y la identidad
  nacional están profundamente marcadas por ese período de
  industrialización.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["sectores industriales"]

variables:
  sector: uno_de(["alimenticio", "textil", "químico", "automotor"])

respuesta: verdadero
tipo: vf

enunciado: "El sector \"{sector}\" fue uno de los que se desarrolló con fuerza durante la ISI en Argentina."

explicacion: |
  Estos cuatro sectores están mencionados explícitamente como los que
  ganaron peso en la nueva estructura industrial del país.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "basico"
  tags: ["debates actuales"]

variables:
  n: uno_de([1, 1])

respuesta: "protección industrial, comercio exterior y desarrollo tecnológico"
tipo: mc
opciones_explicitas: ["protección industrial, comercio exterior y desarrollo tecnológico", "el sistema previsional exclusivamente", "la política exterior con Europa"]

enunciado: "Muchas discusiones actuales sobre... tienen sus raíces en los debates y experiencias de la era ISI."

explicacion: |
  Los debates de hoy sobre proteccionismo, apertura comercial y
  tecnología nacional se conectan directamente con lo vivido durante
  la ISI.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "intermedio"
  tags: ["consumo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La ISI permitió que las clases medias y populares se insertaran en el consumo de bienes duraderos, mejorando temporalmente su nivel de vida."

explicacion: |
  El crecimiento industrial amplió el acceso de amplios sectores sociales
  a bienes de consumo antes reservados a minorías, aunque el efecto fue
  temporal.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "basico"
  tags: ["sigla"]

variables:
  n: uno_de([1, 1])

respuesta: "Industrialización por Sustitución de Importaciones"
tipo: completar

enunciado: "La sigla ISI significa ___."

respuestas_validas:
  - "Industrialización por Sustitución de Importaciones"

explicacion: |
  ISI es la sigla de Industrialización por Sustitución de Importaciones,
  el modelo económico que buscaba producir localmente lo antes importado.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "industrializacion_por_sustitucion_de_importaciones_isi"
  nivel: "avanzado"
  tags: ["ciclo economico"]

variables:
  n: uno_de([1, 1])

respuesta: "inflación y desabastecimiento"
tipo: mc
opciones_explicitas: ["inflación y desabastecimiento", "deflación sostenida", "superávit comercial permanente"]

enunciado: "La combinación de dependencia de divisas agrarias y necesidad de importar tecnología generaba, según el modelo ISI, ciclos de..."

explicacion: |
  Cuando caían los precios de las exportaciones primarias, escaseaban
  los dólares para importar insumos, lo que derivaba en inflación y
  desabastecimiento.
```

## Sección: guerra-de-malvinas (25 preguntas)

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["conflictos", "soberania", "1982"]

respuesta: "Argentina"
tipo: "mc"
opciones_explicitas: ["Reino Unido", "Argentina", "Chile", "Francia"]

enunciado: "La Guerra de Malvinas, iniciada en 1982, fue un conflicto armado entre ___ y el Reino Unido por la soberanía de las islas."

explicacion: |
  El conflicto se desató tras la invasión de las fuerzas argentinas a las islas, lo que provocó la respuesta militar británica.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["cronologia", "eventos"]

variables:
  eventos: [["Invasión de las islas", "Fuerzas argentinas ocupan las islas"], ["Desembarco en San Carlos", "Fuerzas británicas desembarcan en la isla"], ["Rendición argentina", "Fuerzas argentinas se rinden en Puerto Argentino"]]

respuesta_orden: ["Invasión de las islas", "Desembarco en San Carlos", "Rendición argentina"]
tipo: "ordenar"
opciones_explicitas: ["Invasión de las islas", "Desembarco en San Carlos", "Rendición argentina"]

enunciado: "Ordene cronológicamente los eventos clave del conflicto:"

explicacion: |
  La secuencia lógica fue la ocupación inicial, el desembarco de la Task Force británica y la rendición final.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["naval", "tactic"]

respuesta: 200
tipo: "input"
tolerancia_abs: 1

enunciado: "El crucero ARA General Belgrano fue hundido por un submarino británico el 2 de mayo de 1982. Si, hipotéticamente, el submarino se encontraba a una profundidad de 200 metros y el crucero estaba en la superficie, ¿cuál sería la distancia vertical (en metros) entre ambos?"

pasos:
  - "Identificar la profundidad del submarino: 200m"
  - "Identificar la posición del crucero: 0m"
  - "Calcular la diferencia: 200 - 0 = 200"

explicacion: |
  La distancia vertical es la diferencia entre la superficie (0m) y la profundidad del submarino (200m).
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["diplomacia", "soberania"]

respuesta: "soberanía"
tipo: "completar"
respuestas_validas:
  - "soberanía"
  - "territorio"
  - "recursos"

enunciado: "El reclamo argentino por las islas se fundamenta en el principio de ___ territorial."

explicacion: |
  Argentina sostiene su derecho basado en la integridad territorial y la herencia de la corona española.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["politica", "dictadura"]

respuesta: "Junta Militar"
tipo: "mc"
opciones_explicitas: ["Gobierno Democrático", "Junta Militar", "Frente Popular", "Estado de Sitio"]

enunciado: "En 1982, la guerra se desarrolló bajo el mando de la ___ en Argentina."

explicacion: |
  El país se encontraba bajo un proceso de dictadura militar liderado por la Junta Militar en aquel entonces.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["soberania", "historia", "argentina"]

tipo: mc
opciones_explicitas: ["1833", "1982", "1776", "1810"]
respuesta: "1833"

enunciado: "El Reino Unido ocupó las Islas Malvinas de forma efectiva en el año ___."

explicacion: |
  La ocupación británica de las islas comenzó en 1833, interrumpiendo la presencia argentina en el archipiélago.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["derecho_internacional", "soberania"]

tipo: mc
opciones_explicitas: ["Territorial", "Económica", "Religiosa", "Cultural"]
respuesta: "Territorial"

enunciado: "El reclamo argentino sobre las Islas Malvinas es de carácter ___."

explicacion: |
  Argentina sostiene un reclamo de soberanía territorial basado en la herencia de los estados sucesores de España y la continuidad geográfica.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["cronologia", "conflictos"]

variables:
  escenario: uno_de(["A", "B"])
  datos: [["1833", "Ocupación británica", "Inicio de la disputa"], ["1982", "Conflicto bélico", "Guerra de Malvinas"]]

tipo: ordenar
opciones_explicitas: ["1833", "1982", "Actualidad"]

enunciado: "Ordene cronológicamente los hitos clave de la disputa por las islas:"

explicacion: |
  La cronología marca desde la ocupación británica en 1833, pasando por el conflicto armado en 1982, hasta el reclamo diplomático actual.
respuesta_orden: ["1833", "1982", "Actualidad"]
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["derecho_internacional", "onu"]

tipo: completar
respuestas_validas:
  - "integridad"

enunciado: "Argentina sostiene que el principio de ___ territorial debe prevalecer sobre el principio de autodeterminación en el caso de las Malvinas."

explicacion: |
  Argentina argumenta que la población actual es una población implantada, por lo que el principio de autodeterminación no es aplicable, debiendo prevalecer la integridad territorial.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["guerra", "1982"]

tipo: mc
opciones_explicitas: ["desembarco", "cese", "tratado", "armisticio"]
respuesta: "cese"

enunciado: "El conflicto bélico de 1982 se caracterizó por el cese de las tropas argentinas en las islas."

explicacion: |
  El conflicto terminó con el cese de las hostilidades y la rendición de las fuerzas argentinas en junio de 1982.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["dictadura", "contexto"]

respuesta: "dictadura militar"
tipo: completar
respuestas_validas:
  - "dictadura militar"

enunciado: "En 1982, Argentina se encontraba bajo el gobierno de una ___ que enfrentaba una profunda crisis interna."

explicacion: |
  La última dictadura militar argentina buscaba recuperar legitimidad mediante una acción bélica ante el desgaste social y económico.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["legitimidad", "objetivos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [[ "reforzar la legitimidad", "recuperar el apoyo popular" ], [ "distraer de la crisis", "ocultar el malestar social" ]]

respuesta: escenario[escenario_idx][1]
tipo: mc
opciones_explicitas: ["reforzar la legitimidad", "recuperar el apoyo popular", "ocultar el malestar social", "evitar la crisis económica"]

enunciado: "Uno de los objetivos estratégicos de la junta militar al ordenar el desembarco en las islas era ___."

explicacion: |
  La dictadura intentó utilizar el conflicto bélico para generar un sentimiento de unidad nacional y así recuperar el apoyo popular que había perdido por la crisis económica y la represión.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["cronologia", "fechas"]

respuesta_orden: ["Crisis interna de la dictadura", "Orden de desembarco", "Inicio de la guerra"]
tipo: ordenar
opciones_explicitas: ["Crisis interna de la dictadura", "Orden de desembarco", "Inicio de la guerra"]

enunciado: "Ordene cronológicamente los hechos que llevaron al conflicto de 1982:"

explicacion: |
  Primero existió una crisis de legitimidad, luego la junta ordenó el desembarco en abril y finalmente se inició el conflicto armado.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["causas", "crisis"]

respuesta: "crisis"
tipo: mc
opciones_explicitas: ["crisis", "estabilidad", "bonanza", "prosperidad"]

enunciado: "El contexto socio-político de Argentina en abril de 1982 se caracterizaba por una profunda ___."

explicacion: |
  La crisis política y económica de la dictadura fue un motor fundamental para la decisión de iniciar el conflicto en las islas.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["junta_militar", "decisión"]

respuesta: "abril 1982"
tipo: completar
respuestas_validas:
  - "abril 1982"

enunciado: "La orden de desembarco en las islas Malvinas se produjo en ___."

explicacion: |
  El desembarco ocurrió en abril de 1982, marcando el inicio de la disputa armada con el Reino Unido.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["politica", "dictadura", "democracia"]

respuesta: "aceleró"
tipo: completar
respuestas_validas:
  - "aceleró"
  - "acelerar"
  - "aceleración"

enunciado: "La derrota militar argentina en la guerra de Malvinas en junio de 1982 ___ el proceso de deslegitimación de la Junta Militar y ___ el retorno a la democracia en 1983."

explicacion: |
  La derrota bélica destruyó el prestigio de la Junta Militar, que había iniciado el conflicto para consolidar su poder, acelerando la crisis del régimen y la transición democrática.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["consecuencias", "dictadura"]

opciones_explicitas: ["Consolidación de la dictadura", "Crisis del régimen militar", "Guerra civil inmediata", "Alianza con el Reino Unido"]
respuesta: "Crisis del régimen militar"
tipo: mc

enunciado: "¿Cuál fue la principal consecuencia política interna de la derrota en Malvinas para el gobierno de facto?"

explicacion: |
  La pérdida de la guerra expuso la incapacidad de gestión de la dictadura, provocando una crisis de autoridad que hizo insostenible la continuidad del mando militar.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["democracia", "elecciones"]

variables:
  datos: [["Dictadura", "Democracia"]]

respuesta: datos[0][1]
tipo: mc
opciones_explicitas: ["Dictadura", "Democracia"]

enunciado: "Tras la derrota en Malvinas, el proceso político argentino se desplazó desde el mando de una {datos[0][0]} hacia la restauración de la {datos[0][1]} en 1983."

pasos:
  - "Analizar el cambio de régimen tras la crisis de junio de 1982."
  - "Identificar el sistema de gobierno que se restauró en 1983."

explicacion: |
  La transición democrática fue impulsada por el vacío de poder y la presión social surgida tras el fracaso bélico.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["orden", "cronologia"]

opciones_explicitas: ["Conflicto bélico", "Retorno a la democracia", "Inicio de la dictadura"]
respuesta_orden: ["Inicio de la dictadura", "Conflicto bélico", "Retorno a la democracia"]
tipo: ordenar

enunciado: "Ordene cronológicamente los siguientes hitos de la historia argentina reciente:"

explicacion: |
  La secuencia correcta es: Golpe de Estado (1976), Guerra de Malvinas (1982) y Elecciones de 1983.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["legitimidad", "juicio"]

respuesta: 0
tipo: completar
tolerancia_abs: 0

enunciado: "En una escala del 0 al 10, donde 0 es 'nula' y 10 es 'total', ¿cómo se podría calificar la legitimidad política que la Junta Militar intentó recuperar tras la derrota? (Responda con el número 0 para indicar que fue nula)"

explicacion: |
  La derrota eliminó cualquier base de apoyo social para la Junta, dejando su legitimidad en un nivel prácticamente nulo (0).
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["cronologia", "conflicto"]

respuesta: "2 de abril de 1982"
tipo: completar
respuestas_validas:
  - "2 de abril de 1982"

enunciado: "La operación de desembarco de las fuerzas argentinas en las islas Malvinas tuvo lugar el ___."

explicacion: |
  El desembarco de las fuerzas argentinas en las islas Malvinas ocurrió el 2 de abril de 1982, marcando el inicio del conflicto bélico.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["hechos", "maritimo"]

respuesta: "2 de mayo de 1982"
tipo: completar
respuestas_validas:
  - "2 de mayo de 1982"

enunciado: "El hundimiento del crucero ARA General Belgrano por parte de un submarino británico ocurrió el ___."

explicacion: |
  El ataque al crucero General Belgrano fue uno de los eventos más significativos del conflicto, ocurrido el 2 de mayo de 1982.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "avanzado"
  tags: ["ordenar", "cronologia"]

variables:
  orden_correcta: ["Desembarco en las islas", "Hundimiento del Belgrano", "Rendición argentina"]

respuesta_orden: orden_correcta
tipo: ordenar
opciones_explicitas: ["Desembarco en las islas", "Hundimiento del Belgrano", "Rendición argentina"]

enunciado: "Ordene cronológicamente los siguientes hitos de la guerra:"

explicacion: |
  La secuencia correcta es: Desembarco (2 de abril), Hundimiento del Belgrano (2 de mayo) y la Rendición (14 de junio).
```

```
metadata:
  materia: "historia_profucha"
  tema: "guerra_de_malvinas"
  nivel: "basico"
  tags: ["final", "rendicion"]

respuesta: "14 de junio de 1982"
tipo: completar
respuestas_validas:
  - "14 de junio de 1982"

enunciado: "La firma de la rendición de las fuerzas argentinas en las islas Malvinas se produjo el ___."

explicacion: |
  El conflicto terminó formalmente el 14 de junio de 1982 con la rendición de las fuerzas argentinas ante las británicas.
```

```
metadata:
  materia: "historia"
  tema: "guerra_de_malvinas"
  nivel: "intermedio"
  tags: ["inicio", "fecha"]

variables:
  escenario: uno_de([[0, "2 de abril de 1982"], [1, "1 de mayo de 1982"]])
  fecha_inicio: escenario[1]

respuesta: "2 de abril de 1982"
tipo: mc
opciones_explicitas: ["2 de abril de 1982", "1 de mayo de 1982", "2 de mayo de 1982", "14 de junio de 1982"]

enunciado: "¿En qué fecha se produjo el desembarco argentino que dio inicio al conflicto?"

explicacion: |
  El conflicto bélico comenzó con el desembarco argentino el 2 de abril de 1982.
```

## Sección: recuperacion-democratica-memoria (23 preguntas)

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "dictadura", "argentina"]

respuesta: "democracia"
tipo: completar
respuestas_validas:
  - "democracia"

enunciado: "Tras el fin de la última dictadura militar en Argentina, las elecciones de 1983 marcaron el retorno a la ________."

explicacion: |
  Las elecciones de octubre de 1983 pusieron fin a la última dictadura cívico-militar, devolviendo el poder a los representantes elegidos por el pueblo.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "1983"]

enunciado: "El primer presidente elegido por voto popular tras la última dictadura militar, que asumió el 10 de diciembre de 1983, fue:"
tipo: mc
opciones_explicitas:
  - "Raúl Alfonsín"
  - "Carlos Menem"
  - "Fernando de la Rúa"
respuesta: "Raúl Alfonsín"

explicacion: |
  Alfonsín, de la Unión Cívica Radical, ganó las elecciones de octubre de 1983.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["derechos-humanos", "1985"]

enunciado: "El proceso judicial de 1985 contra las cúpulas militares de la última dictadura se conoce como:"
tipo: mc
opciones_explicitas:
  - "Juicio a las Juntas"
  - "Juicio de Núremberg"
  - "Juicio a los Comandantes de Malvinas"
respuesta: "Juicio a las Juntas"

explicacion: |
  El Juicio a las Juntas condenó a los máximos responsables y fue un hito mundial en el juzgamiento de crímenes de lesa humanidad por tribunales propios.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["transicion", "procesos", "orden"]

opciones_explicitas: ["Fin de la dictadura", "Elecciones de 1983", "Asunción de Alfonsín"]
respuesta_orden: ["Fin de la dictadura", "Elecciones de 1983", "Asunción de Alfonsín"]
tipo: ordenar

enunciado: "Ordena cronológicamente los siguientes hitos del proceso de democratización:"

explicacion: |
  Primero terminó la dictadura, luego se realizaron las elecciones y finalmente el presidente electo asumió su cargo.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["derechos_humanos", "etica", "memoria"]

variables:
  escenario: uno_de([["reparación", "reparación"], ["olvido", "olvido"], ["justicia", "justicia"]])

respuesta: "justicia"
tipo: mc
opciones_explicitas: ["reparación", "olvido", "justicia"]

enunciado: "En el marco de los Derechos Humanos, la política de Estado para evitar la repetición de los crímenes de la dictadura se basa en el trípode: Memoria, Verdad y {escenario[0]}."

explicacion: |
  El lema "Memoria, Verdad y Justicia" es el pilar fundamental de los organismos de Derechos Humanos en Argentina para la reconstrucción del tejido social.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["juicio_a_las_juntas", "derechos_humanos", "argentina"]

respuesta: "Juicio a las Juntas"
tipo: completar
respuestas_validas:
  - "Juicio a las Juntas"

enunciado: "El proceso judicial histórico llevado a cabo en 1985 para juzgar a los máximos responsables de la dictadura militar argentina se conoce como el ___."

explicacion: |
  El Juicio a las Juntas fue un hito mundial, siendo la primera vez que un tribunal civil juzgó a las cúpulas militares de su propio país por delitos de lesa humanidad.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "justicia"]

variables:
  tipo_tribunal: uno_de(["civil", "militar"])

respuesta: "civil"
tipo: mc
opciones_explicitas: ["civil", "militar"]

enunciado: "A diferencia de otros procesos de transición, el juicio de 1985 fue llevado a cabo por un tribunal de carácter {tipo_tribunal}."

explicacion: |
  La naturaleza civil del tribunal fue fundamental para consolidar la supremacía de la Constitución y el Estado de Derecho sobre el poder militar.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["delitos", "terrorismo_de_estado"]

respuesta_orden: ["terrorismo de Estado", "secuestro", "tortura", "homicidio"]
tipo: ordenar
opciones_explicitas: ["terrorismo de Estado", "secuestro", "tortura", "homicidio"]

enunciado: "Ordene de lo más general a lo más específico los conceptos que definen la naturaleza de los crímenes juzgados:"

explicacion: |
  El juicio condenó a los responsables por la planificación y ejecución de un sistema de terrorismo de Estado que se manifestó a través de secuestros, torturas y homicidios.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["conadep", "derechos_humanos"]

respuesta: "CONADEP"
tipo: completar
respuestas_validas:
  - "CONADEP"

enunciado: "El informe fundamental que recopiló testimonios sobre la represión sistemática durante la última dictadura militar fue elaborado por la ___."

explicacion: |
  La Comisión Nacional sobre la Desaparición de Personas (CONADEP) elaboró el informe 'Nunca Más', que fue clave para el posterior Juicio a las Juntas.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["sitios_de_memoria", "museos"]

variables:
  idx: uno_de([0, 1])
  datos: [["ESMA", "Ex Centro de Detención de la ESMA"], ["El Olimpo", "Ex Centro de Detención El Olimpo"]]

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Ex Centro de Detención de la ESMA", "Ex Centro de Detención El Olimpo", "Ex Base Naval Puerto Belgrano", "Ex Escuela de Mecánica de la Armada"]

enunciado: "El sitio de memoria conocido como {datos[idx][0]} es un ejemplo de un espacio que funcionó como centro clandestino de detención y hoy es un museo dedicado a la memoria."

explicacion: |
  Los Sitios de Memoria son lugares que fueron utilizados para la represión y que han sido recuperados para la memoria colectiva, transformándose en museos o centros culturales.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["verdad", "justicia", "derechos_humanos"]

respuesta: "Verdad"
tipo: mc
opciones_explicitas: ["Verdad", "Justicia", "Memoria", "Reparación"]

enunciado: "En el marco de las políticas de Derechos Humanos, el derecho a conocer la realidad de lo sucedido con las víctimas se denomina derecho a la ___."

explicacion: |
  El derecho a la Verdad, a la Justicia y a la Memoria son pilares fundamentales de la política de Derechos Humanos en Argentina tras la recuperación democrática.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["cronologia", "democracia"]

respuesta_orden: ["Fin de la dictadura", "Informe Nunca Más", "Juicio a las Juntas"]
tipo: ordenar
opciones_explicitas: ["Fin de la dictadura", "Informe Nunca Más", "Juicio a las Juntas"]

enunciado: "Ordene cronológicamente los hitos fundamentales del proceso de justicia y memoria tras el retorno a la democracia en Argentina:"

explicacion: |
  Primero se produjo la salida de la dictadura, luego la CONADEP presentó su informe y posteriormente se llevó a cabo el histórico Juicio a las Juntas en 1985.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["justicia", "impunidad"]

respuesta: "imprescindible"
tipo: completar
respuestas_validas:
  - "imprescindible"
  - "fundamental"
  - "clave"

enunciado: "Para el proceso de reconstrucción del Estado de Derecho, la aplicación de la ___ para juzgar los crímenes de lesa humanidad fue considerada ___."

explicacion: |
  La justicia es un componente esencial para romper el ciclo de impunidad y garantizar que los crímenes contra la humanidad no queden sin castigo.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "argentina", "1983"]

respuesta: "1983"
tipo: completar
respuestas_validas:
  - "1983"

enunciado: "El año en que se produjo el retorno a la democracia y se inició el período democrático ininterrumpido más largo de la historia argentina fue en ___."

explicacion: |
  En 1983, tras la dictadura militar, se llevaron a cabo elecciones que marcaron el inicio de la era democrática más extensa del país.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["presidencia", "democracia", "alfonsin"]

variables:
  idx: uno_de([0, 1])
  datos: [["Raúl Alfonsín", "Presidente de la Nación"], ["Raúl Alfonsín", "Dictador militar"]]

respuesta: datos[idx][0]
tipo: mc
opciones_explicitas: ["Raúl Alfonsín", "Dictador militar", "Juan Carlos Onganía", "Jorge Rafael Videla"]

enunciado: "El primer presidente elegido tras el fin de la dictadura militar fue {datos[idx][0]}."

explicacion: |
  {datos[idx][0]} asumió la presidencia en 1983, marcando el inicio del proceso de recuperación democrática.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["procesos", "historia"]

respuesta_orden: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas"]
tipo: ordenar

opciones_explicitas: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas"]

enunciado: "Ordene cronológicamente los siguientes hitos de la historia argentina reciente:"

pasos:
  - "Identifique el período de gobierno de facto."
  - "Identifique el proceso electoral de retorno."
  - "Identifique el proceso judicial emblemático de la post-dictadura."

explicacion: |
  Primero fue la dictadura, luego las elecciones de 1983 y finalmente el histórico Juicio a las Juntas.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["democracia", "continuidad"]

respuesta: "largo"
tipo: mc
opciones_explicitas: ["largo", "corto", "inestable", "interrumpido"]

enunciado: "El período democrático iniciado en 1983 es el más ___ de la historia argentina hasta la actualidad."

explicacion: |
  A diferencia de los quiebres institucionales previos, este período se caracteriza por su continuidad y duración.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["derechos_humanos", "memoria"]

variables:
  idx: uno_de([0, 1, 2])
  escenarios: [["El proceso de Memoria, Verdad y Justicia busca...", "reparar el tejido social y la verdad histórica"], ["El proceso de Memoria, Verdad y Justicia busca...", "la reconstrucción de la identidad democrática"], ["El proceso de Memoria, Verdad y Justicia busca...", "la aplicación de la justicia sobre los crímenes de lesa humanidad"]]

respuesta: escenarios[idx][1]
tipo: mc
opciones_explicitas: ["reparar el tejido social y la verdad histórica", "la reconstrucción de la identidad democrática", "la aplicación de la justicia sobre los crímenes de lesa humanidad", "la restauración del orden militar"]

enunciado: "Dentro del marco de la recuperación democrática, el proceso de Memoria, Verdad y Justicia busca {escenarios[idx][1]}."

explicacion: |
  La reconstrucción de la identidad democrática es un pilar fundamental para consolidar el Estado de Derecho tras la dictadura.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["memoria", "conadep"]

enunciado: "La comisión creada en 1983 que investigó las desapariciones forzadas y produjo el informe «Nunca Más» fue la:"
tipo: mc
opciones_explicitas:
  - "CONADEP"
  - "CIDH"
  - "Comisión Bicameral de Inteligencia"
respuesta: "CONADEP"

explicacion: |
  La Comisión Nacional sobre la Desaparición de Personas, presidida por Ernesto Sabato, entregó su informe en septiembre de 1984.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["justicia", "derechos_humanos"]

variables:
  evento: uno_de([["El proceso de juzgar a las cúpulas militares se conoce como el...", "Juicio a las Juntas"], ["El proceso de juzgar a las cúpulas militares se conoce como el...", "Juicio a las Juntas"], ["El proceso de juzgar a las cúpulas militares se conoce como el...", "Juicio a las Juntas"]])

respuesta: evento[1]
tipo: completar
respuestas_validas:
  - "Juicio a las Juntas"

enunciado: "El proceso histórico fundamental para la memoria y la justicia en 1985 fue el ___."

explicacion: |
  El Juicio a las Juntas fue un hito mundial donde la justicia civil juzgó a los comandantes militares por crímenes de lesa humanidad.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "basico"
  tags: ["conceptos", "derechos_humanos"]

respuesta: "Derechos Humanos"
tipo: mc
opciones_explicitas: ["Derechos Humanos", "Derechos Civiles", "Derechos Sociales", "Derechos Políticos"]

enunciado: "La recuperación democrática puso en el centro del debate nacional la defensa de los ___."

explicacion: |
  La democracia argentina se construyó sobre el pilar fundamental de la vigencia y defensa de los Derechos Humanos.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "avanzado"
  tags: ["cronologia", "transicion"]

respuesta_orden: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas", "Ley de Obediencia Debida"]
tipo: ordenar
opciones_explicitas: ["Dictadura Militar", "Elecciones de 1983", "Juicio a las Juntas", "Ley de Obediencia Debida"]

enunciado: "Ordene cronológicamente los siguientes hitos del proceso de transición y memoria:"

explicacion: |
  La secuencia parte del fin del régimen militar (1976-1983), pasando por el triunfo electoral de Alfonsín, el juicio histórico de 1985 y las posteriores leyes de impunidad que marcaron la etapa posterior.
```

```
metadata:
  materia: "historia"
  tema: "recuperacion_democratica_memoria"
  nivel: "intermedio"
  tags: ["movimientos_sociales", "memoria"]

variables:
  sujeto: uno_de([["¿Qué colectivo social luchó por la aparición con vida de los desaparecidos?", "Madres de Plaza de Mayo"], ["¿Qué colectivo social luchó por la aparición con vida de los desaparecidos?", "Madres de Plaza de Mayo"], ["¿Qué colectivo social luchó por la aparición con vida de los desaparecidos?", "Madres de Plaza de Mayo"]])

respuesta: sujeto[1]
tipo: completar
opciones_explicitas: [verdadero, falso]

enunciado: "Las {sujeto[0]} fueron actores fundamentales en la exigencia de justicia durante la transición democrática."

explicacion: |
  Las Madres de Plaza de Mayo fueron un símbolo global de la lucha por la verdad y la justicia durante y después de la dictadura.
```

## Sección: historia-reciente-argentina (25 preguntas)

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["conceptos", "memoria"]

tipo: mc
opciones_explicitas: ["El estudio de procesos de larga duración como la formación del Estado", "El estudio de procesos cercanos con actores sociales presentes y memoria activa", "El estudio de la historia colonial y la independencia", "El estudio de la historia económica del siglo XIX"]
respuesta: "El estudio de procesos cercanos con actores sociales presentes y memoria activa"

enunciado: "En el contexto historiográfico, ¿qué define principalmente al concepto de 'historia reciente'?"

explicacion: |
  La historia reciente se distingue de la historia tradicional porque los sujetos sociales (protagonistas) suelen estar vivos o haber dejado testimonios directos, y existe una memoria social que mantiene el debate en la agenda pública actual.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["memoria", "sujetos"]

tipo: completar
respuestas_validas:
  - "memoria"
  - "pasado"
  - "archivo"

enunciado: "A diferencia de la historia que analiza el ______, la historia reciente se nutre fundamentalmente de la ______ social y el testimonio."

explicacion: |
  La historia reciente no solo busca el dato objetivo, sino que interactúa con la memoria colectiva de las sociedades, donde los hechos aún tienen una carga emocional y política latente.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["temporalidad"]

variables:
  escenarios: [["1976", "Dictadura Militar"], ["1983", "Retorno a la Democracia"]]
  idx: uno_de([0, 1])
  anio: escenarios[idx][0]
  evento: escenarios[idx][1]

tipo: mc
respuesta: "El escenario de la Dictadura Militar"
opciones_explicitas: ["El escenario de la Dictadura Militar", "El escenario de la independencia", "El escenario de la conquista española"]

enunciado: "Un tema central de la historia reciente en Argentina es el proceso iniciado en el año {anio} relacionado con {evento}."

explicacion: |
  La delimitación temporal de la historia reciente es flexible, pero suele centrarse en los procesos de la segunda mitad del siglo XX que impactan en la identidad política actual.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["metodologia"]

tipo: ordenar
opciones_explicitas: ["Recolección de testimonios orales", "Análisis de archivos estatales", "Construcción del relato historiográfico"]

enunciado: "Para abordar la historia reciente, un historiador suele seguir un orden metodológico que parte de la fuente directa hacia la síntesis. Ordena estos pasos:"

explicacion: |
  El trabajo con la historia reciente requiere primero capturar la voz de los protagonistas (oralidad), luego contrastarla con documentos oficiales (archivos) para finalmente construir un conocimiento histórico crítico.
respuesta_orden: ["Recolección de testimonios orales", "Análisis de archivos estatales", "Construcción del relato historiográfico"]
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["sujetos", "testimonio"]

tipo: completar
tolerancia_abs: 0

enunciado: "Cuando un historiador entrevista a una persona que vivió un proceso político de hace 40 años, está utilizando una fuente primaria llamada ______."

respuesta: "testimonio"

explicacion: |
  El testimonio es la herramienta fundamental de la historia reciente, permitiendo que la subjetividad de los actores sociales sea parte del proceso de investigación.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["crisis_2001", "economia"]

respuesta: "corralito"
tipo: completar
respuestas_validas:
  - "corralito"
  - "corralito bancario"

enunciado: "La medida implementada por el gobierno de Fernando de la Rúa que restringió la extracción de efectivo de los depósitos bancarios se conoció como ___."

explicacion: |
  El 'corralito' fue la medida que limitó la disponibilidad de dinero en efectivo, lo que desencadenó una crisis de confianza masiva y protestas sociales.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["protestas", "social"]

respuesta: "que se vayan todos"
tipo: mc
opciones_explicitas: ["que se vayan todos", "viva la patria", "justicia social", "libertad para todos"]

enunciado: "Durante las protestas de diciembre de 2001, un lema se volvió icónico para expresar el descontento social hacia la clase política: '___'."

explicacion: |
  El grito '¡Que se vayan todos, que no queda ni uno solo!' reflejaba el hartazgo generalizado de la sociedad hacia la dirigencia política de todos los sectores.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["politica", "sucesion"]

respuesta: "Adolfo Rodríguez Saá"
tipo: mc
opciones_explicitas: ["Adolfo Rodríguez Saá", "Eduardo Duhalde", "Eduardo Crescimbeni", "Ramón Puerta"]

enunciado: "Tras la renuncia de De la Rúa, el presidente que asumió el cargo por apenas una semana (23 al 30 de diciembre de 2001) fue ___."

explicacion: |
  La crisis política fue tan aguda que Argentina tuvo tres presidentes en una semana: De la Rúa, Rodríguez Saá y finalmente Duhalde.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["economia", "convertibilidad"]

respuesta: "11"
tipo: mc
opciones_explicitas: ["3", "7", "11", "20"]

enunciado: "¿Cuántos años duró aproximadamente el Plan de Convertibilidad (1 peso = 1 dólar) que colapsó durante la crisis de 2001?"

explicacion: |
  El Plan de Convertibilidad se implementó en 1991 y su salida forzosa ocurrió en 2002, tras el estallido de la crisis de 2001.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["cronologia", "crisis"]

respuesta_orden: ["Corralito", "Cacerolazos", "Renuncia de De la Rúa", "Devaluación"]
tipo: ordenar
opciones_explicitas: ["Corralito", "Cacerolazos", "Renuncia de De la Rúa", "Devaluación"]

enunciado: "Ordena cronológicamente los eventos que marcaron el clímax de la crisis de 2001 en Argentina:"

explicacion: |
  Primero se impuso el corralito, lo que provocó los cacerolazos; esto derivó en la renuncia del presidente y, finalmente, la devaluación del peso.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["metodologia", "temporalidad"]

variables:
  distancia: uno_de(["corta", "media", "larga"])

respuesta: "corta"
tipo: mc
opciones_explicitas: ["corta", "media", "larga"]

enunciado: "Uno de los principales desafíos para el historiador al abordar la historia reciente es la {distancia} distancia temporal con los hechos, lo que puede afectar la objetividad."

explicacion: |
  La cercanía temporal en la historia reciente puede dificultar la perspectiva crítica debido a la persistencia de la carga emocional y los intereses de los actores involucrados.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["fuentes", "metodologia"]

variables:
  escenario: uno_de([["testimonios orales en disputa", "documentos oficiales", "diarios de la época"], ["fuentes en disputa", "fuentes estables", "fuentes consolidadas"]])

respuesta: "fuentes en disputa"
tipo: completar
respuestas_validas:
  - "fuentes en disputa"

enunciado: "En el estudio de procesos recientes, es común encontrarse con ___ que aún no han sido validadas por un consenso historiográfico o que presentan versiones contradictorias."

explicacion: |
  A diferencia de la historia antigua, en la reciente las fuentes (como testimonios o archivos desclasificados) suelen estar en disputa o bajo revisión constante.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["politica", "interpretacion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["la construcción de la memoria", "el rol de los organismos"], ["políticamente sensibles", "técnicamente complejas"]]

respuesta: "políticamente sensibles"
tipo: mc
opciones_explicitas: ["políticamente sensibles", "técnicamente complejas", "irrelevantes"]

enunciado: "El estudio de la historia reciente argentina se caracteriza por tratar interpretaciones que suelen ser ___."

explicacion: |
  Debido a que los procesos históricos recientes siguen impactando en el debate público actual, las interpretaciones suelen estar atravesadas por tensiones políticas.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["metodologia", "procesos"]

respuesta_orden: ["distancia temporal", "fuentes en disputa", "interpretaciones sensibles"]
tipo: ordenar
opciones_explicitas: ["distancia temporal", "fuentes en disputa", "interpretaciones sensibles"]

enunciado: "Ordene los factores que incrementan la complejidad del estudio de la historia reciente, desde el factor cronológico hasta el factor interpretativo:"

explicacion: |
  El proceso comienza con la cercanía de los hechos (tiempo), sigue con la dificultad de procesar la evidencia (fuentes) y culmina en la tensión de los sentidos asignados (interpretación).
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["metodologia"]

variables:
  valor: uno_de([0, 1])
  datos: [[10, "objetividad"], [20, "subjetividad"]]

respuesta: "subjetividad"
tipo: completar
tolerancia_abs: 0

enunciado: "Debido a la carga emocional y política, el historiador debe trabajar con mayor cuidado para no ser arrastrado por la {datos[valor][1]} del presente."

explicacion: |
  La proximidad de los hechos aumenta el riesgo de que la subjetividad de los actores o del propio investigador nuble el análisis crítico.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["metodologia", "fuentes", "pensamiento_critico"]

respuesta: "multicausalidad"
tipo: completar
respuestas_validas:
  - "multicausalidad"

enunciado: "Para evitar que el estudio de la historia reciente se convierta en un mero relato emocional o de opinión, el historiador debe aplicar el principio de __________, reconociendo que los procesos sociales no responden a una única causa aislada."

explicacion: |
  El análisis histórico profesional exige la multicausalidad: entender que un fenómeno es el resultado de múltiples factores (económicos, políticos, sociales, culturales) interactuando entre sí, evitando explicaciones simplistas o unidimensionales.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["fuentes", "evidencia"]

variables:
  caso_idx: uno_de([0, 1])
  escenarios: [["un testimonio oral sin contrastar", "un relato basado solo en la memoria emocional"], ["un documento desclasificado con datos objetivos", "una evidencia contrastada mediante múltiples fuentes"]]
  respuestas: [["relato subjetivo", "evidencia científica"], ["relato subjetivo", "evidencia científica"]]

respuesta: respuestas[caso_idx][1]
tipo: mc
opciones_explicitas: ["relato subjetivo", "evidencia científica"]

enunciado: "Si un investigador busca construir conocimiento histórico riguroso sobre la última dictadura militar, debe priorizar el uso de: {escenarios[caso_idx][1]} sobre {escenarios[caso_idx][0]}."

explicacion: |
  La historia científica se construye sobre la evidencia y el contraste de fuentes, no sobre la validación de una única perspectiva subjetiva, garantizando la objetividad del proceso de investigación.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["metodologia", "critica"]

respuesta_orden: ["análisis de fuentes", "contextualización", "contraste de evidencias", "evitar el anacronismo"]
tipo: ordenar
opciones_explicitas: ["análisis de fuentes", "contextualización", "contraste de evidencias", "evitar el anacronismo"]

enunciado: "Ordene los pasos lógicos para abordar un proceso histórico reciente desde una perspectiva académica y crítica:"

explicacion: |
  El método histórico requiere primero identificar las fuentes, luego entender el contexto en que se produjeron, contrastar la información para verificar veracidad y, finalmente, evitar juzgar el pasado con valores exclusivamente actuales (anacronismo).
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["subjetividad", "metodologia"]

respuesta: falso
tipo: vf

enunciado: "¿Es metodológicamente correcto validar una tesis histórica sobre la historia reciente basándose exclusivamente en la intensidad emocional de un testimonio, prescindiendo del análisis de otras fuentes?"

explicacion: |
  Falso. La emoción es un componente válido para entender la subjetividad de los actores, pero la construcción del conocimiento histórico requiere la validación de la evidencia y la pluralidad de fuentes para evitar el sesgo.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["causalidad", "complejidad"]

variables:
  factor_idx: uno_de([0, 1])
  factores: [["político", "económico"], ["social", "cultural"]]
  causas: [["causa única", "causa compleja"], ["causa única", "causa compleja"]]

respuesta: causas[factor_idx][1]
tipo: mc
opciones_explicitas: ["causa única", "causa compleja"]

enunciado: "Al estudiar la crisis de las instituciones democráticas en la Argentina de los años 70, un historiador crítico busca identificar una causa _______, integrando factores como el {factores[factor_idx][0]} y el {factores[factor_idx][1]}."

explicacion: |
  La historia no es una sucesión de eventos causados por un solo factor; es un tejido complejo donde factores políticos, económicos y sociales se entrelazan, exigiendo un análisis de causalidad múltiple.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "basico"
  tags: ["democracia", "politica"]

respuesta: "Raúl Alfonsín"
tipo: mc
opciones_explicitas: ["Raúl Alfonsín", "Carlos Menem", "Fernando de la Rúa", "Néstor Kirchner"]

enunciado: "En el año 1983, la presidencia de la Nación fue asumida por ___ tras el fin de la dictadura."

explicacion: |
  El proceso de democratización se consolidó con la asunción de Raúl Alfonsín en 1983.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["crisis", "economia"]

variables:
  datos: [["el estallido del 2001", "Plan de Convertibilidad"], ["la crisis de 2001", "Plan de Convertibilidad"], ["el default de 2001", "Plan de Convertibilidad"]]
  idx: uno_de([0, 1, 2])

respuesta: "Plan de Convertibilidad"
tipo: mc
opciones_explicitas: ["Plan de Convertibilidad", "Ley de Convertibilidad", "Plan de Estabilización", "Plan de Austeridad"]

enunciado: "El contexto de {datos[idx][0]} puso fin a un modelo económico basado en el {datos[idx][1]}."

explicacion: |
  La crisis de 2001 marcó el fin de la convertibilidad (1 peso = 1 dólar) implementada en los años 90.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["derechos_humanos", "justicia"]

variables:
  juicio: uno_de([["Juicio a las Juntas", "1985"], ["Juicio a las Juntas", "1985"], ["Juicio a las Juntas", "1985"]])

respuesta: juicio[1]
tipo: completar
respuestas_validas:
  - "1985"

enunciado: "El histórico {juicio[0]} que sentó un precedente mundial en justicia por derechos humanos ocurrió en el año ___."

explicacion: |
  El Juicio a las Juntas de 1985 fue un hito fundamental en la historia reciente argentina para el juicio a los responsables de la última dictadura.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "intermedio"
  tags: ["politica", "gobierno"]

variables:
  periodo: uno_de([["el mandato de Néstor Kirchner", "2003"], ["el mandato de Néstor Kirchner", "2003"], ["el mandato de Néstor Kirchner", "2003"]])

respuesta: "2003"
tipo: completar
tolerancia_abs: 0

enunciado: "Néstor Kirchner asumió la presidencia de la República en el año ___."

explicacion: |
  Néstor Kirchner asumió el cargo en 2003, iniciando un periodo de transformación política y económica.
```

```
metadata:
  materia: "historia"
  tema: "historia_reciente_argentina"
  nivel: "avanzado"
  tags: ["ordenar", "presidencias"]

variables:
  secuencia: ["Raúl Alfonsín", "Carlos Menem", "Fernando de la Rúa"]

respuesta_orden: ["Raúl Alfonsín", "Carlos Menem", "Fernando de la Rúa"]
tipo: ordenar
opciones_explicitas: ["Raúl Alfonsín", "Carlos Menem", "Fernando de la Rúa"]

enunciado: "Ordene cronológicamente los siguientes presidentes argentinos (de menor a mayor antigüedad):"

pasos:
  - "Identifique el año de inicio de cada mandato."
  - "Coloque el primero en la posición 1."

explicacion: |
  La secuencia correcta es Alfonsín (1983), Menem (1989) y De la Rúa (1999).
```

## Sección: crisis-de-2001 (21 preguntas)

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["corralito", "fechas"]

variables:
  dia: 1
  mes: 12
  anio: 2001

respuesta: dia + "/" + mes + "/" + anio
tipo: input

enunciado: "¿En qué fecha (dd/mm/aaaa) se decretó el Corralito?"

explicacion: |
  El Corralito fue decretado el 1 de diciembre de 2001 por el ministro de Economía Domingo Cavallo, mediante la Resolución 1570/2001, que restringió la extracción de efectivo de los bancos.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["convertibilidad", "déficit_fiscal"]

respuesta: "uno a uno"
tipo: completar
respuestas_validas:
  - "uno a uno"
  - "1 a 1"
  - "1:1"

enunciado: "Durante la década de los noventa, la convertibilidad vinculaba el peso argentino al dólar estadounidense a una paridad de ___."

explicacion: |
  La paridad era de 1:1, lo que significaba que un dólar estadounidense equivalía exactamente a un peso argentino.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["inflación", "déficit"]

respuesta: "déficit fiscal crónico"
tipo: completar

enunciado: "Aunque frenó la hiperinflación, la convertibilidad generó un problema estructural principal: un _______________ que obligó al endeudamiento."

explicacion: |
  El texto indica que la convertibilidad generó desequilibrios estructurales, específicamente un déficit fiscal crónico.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["estancamiento", "desempleo"]

variables:
  condicion: random(0, 1)

respuesta: "insostenible"
tipo: completar

enunciado: "Para el año 2001, la situación económica se había tornado _______________ debido al estancamiento y el alto desempleo."

explicacion: |
  El contexto describe que para 2001 la situación era insostenible por la acumulación de problemas estructurales.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["fmi", "ajuste"]

respuesta: "Fondo Monetario Internacional"
tipo: completar
respuestas_validas:
  - "Fondo Monetario Internacional"
  - "FMI"

enunciado: "El gobierno intentó negociar un nuevo plan de ajuste con el _______________ (FMI), pero las negociaciones colapsaron."

explicacion: |
  Las negociaciones con el FMI fueron clave y terminaron en fracaso, acelerando la crisis de confianza.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["reservas", "déficit"]

respuesta: "falta"
tipo: completar
respuestas_validas:
  - "falta"
  - "escasez"
  - "carencia"

enunciado: "La _______________ de reservas para defender la moneda fue un factor clave del pánico financiero."

explicacion: |
  La falta de reservas impidió al gobierno sostener la paridad del peso frente al dólar.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["fuga de capitales", "pánico"]

variables:
  accion: "retirar"

respuesta: "retirar"
tipo: completar

enunciado: "Los ciudadanos comenzaron a _______________ sus ahorros de los bancos por miedo al colapso."

explicacion: |
  La fuga de capitales consistió en la retirada masiva de dinero de las cuentas bancarias.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["corralito", "medidas"]

variables:
  medida: "Corralito"

respuesta: "Corralito"
tipo: completar

enunciado: "El congelamiento de depósitos bancarios fue conocido popularmente como el '_______________'."

explicacion: |
  El término "Corralito" se refiere a las restricciones de retiro de dinero implementadas por el gobierno.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["liquidez", "banco"]

variables:
  objetivo: "evitar"

respuesta: "evitar"
tipo: completar

enunciado: "El objetivo declarado del Corralito era _______________ el vaciamiento total del sistema financiero."

explicacion: |
  Se justificó como una medida para proteger las reservas y evitar el colapso bancario.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["actividad económica", "restricción"]

variables:
  efecto: "paralizar"

respuesta: "paralizar"
tipo: completar

enunciado: "El efecto inmediato del Corralito fue _______________ la actividad económica cotidiana."

explicacion: |
  Las restricciones de retiro y transferencia paralizaron el flujo de caja de comercios y empresas.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["empresas", "liquidez"]

variables:
  afectado: "comercios"

respuesta: "comercios"
tipo: completar

enunciado: "Las restricciones afectaron tanto a ahorristas como a _______________ y empresas que necesitaban flujo de caja."

explicacion: |
  El Corralito no solo afectó a los ahorristas, sino también a la operatividad de los comercios.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["derechos", "legitimidad"]

variables:
  percepcion: "violación"

respuesta: "violación"
tipo: completar

enunciado: "Muchos vieron el Corralito como una _______________ de sus derechos patrimoniales."

explicacion: |
  La medida fue percibida como una invasión a la propiedad privada y los derechos de los ciudadanos.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["protesta", "social"]

respuesta: "transformadora"
tipo: completar

enunciado: "La indignación creció, buscando una salida _______________ a la crisis."

explicacion: |
  El descontento económico se convirtió en malestar social con demandas políticas concretas.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["política", "gobierno"]

variables:
  nivel: "extrema"

respuesta: "extrema"
tipo: completar

enunciado: "La crisis derivó en una inestabilidad política _______________."

explicacion: |
  La incapacidad de resolver la crisis generó una crisis política severa.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["presidencia", "tiempo"]

respuesta: "11"
tipo: input

enunciado: "Entre el 19 y el 30 de diciembre de 2001, Argentina tuvo cinco presidentes o figuras de poder en apenas ___ días."

explicacion: |
  El periodo de sucesión presidencial rápida duró 11 días en diciembre de 2001.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["fechas", "diciembre"]

respuesta: "19"
tipo: input

enunciado: "La sucesión presidencial crítica comenzó el ___ de diciembre de 2001."

explicacion: |
  El 19 de diciembre fue el inicio de los eventos que llevaron a la renuncia de De la Rúa.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "basico"
  tags: ["fechas", "diciembre"]

respuesta: "30"
tipo: input

enunciado: "La sucesión presidencial crítica finalizó el ___ de diciembre de 2001."

explicacion: |
  El 30 de diciembre marca el final del periodo de cinco presidentes en tan pocos días.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["de la rúa", "presidencia"]

variables:
  presidente: "Fernando de la Rúa"

respuesta: "Fernando de la Rúa"
tipo: completar

enunciado: "El gobierno que intentó negociar con el FMI estaba presidido por _______________."

explicacion: |
  Fernando de la Rúa fue el presidente durante el estallido de la crisis en diciembre de 2001.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["vicepresidente", "renuncia"]

respuesta: "Carlos Álvarez"
tipo: completar
respuestas_validas:
  - "Carlos Álvarez"
  - "Chacho Álvarez"
  - "Carlos \"Chacho\" Álvarez"

enunciado: "La renuncia del vicepresidente _______________ en octubre de 2000, en medio de denuncias de sobornos en el Senado, debilitó políticamente al gobierno de la Alianza y sentó las bases de la crisis de diciembre de 2001."

explicacion: |
  Carlos "Chacho" Álvarez renunció a la vicepresidencia en octubre de 2000, más de un año antes del estallido de diciembre de 2001, pero su salida profundizó la crisis política del gobierno de De la Rúa.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["confianza", "pánico"]

variables:
  causa: "incapacidad"

respuesta: "incapacidad"
tipo: completar

enunciado: "La _______________ de pagar la deuda externa erosionó la confianza de la población."

explicacion: |
  La incapacidad de cumplir con la deuda fue un detonante clave de la pérdida de confianza.
```

```
metadata:
  materia: "pensamiento_historico"
  tema: "crisis_de_2001"
  nivel: "intermedio"
  tags: ["síntoma", "corralito"]

variables:
  sintoma: "síntoma"

respuesta: "síntoma"
tipo: completar

enunciado: "El Corralito fue visto como un _______________ de la incapacidad del Estado para gestionar la economía."

explicacion: |
  La medida no solo fue económica, sino un indicador de la debilidad institucional.
```

