# Historia Profunda — Peronismo derechos sociales (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El ascenso de Perón

```
metadata:
  materia: "historia_profunda"
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

### 2 — Base social del movimiento

```
metadata:
  materia: "historia_profunda"
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

### 3 — Derechos laborales y justicia social

```
metadata:
  materia: "historia_profunda"
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

### 4 — Pilares de la doctrina

```
metadata:
  materia: "historia_profunda"
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

### 5 — Secuencia de consolidación

```
metadata:
  materia: "historia_profunda"
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

### 6 — El Aguinaldo

```
metadata:
  materia: "historia"
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

### 7 — El descanso anual

```
metadata:
  materia: "historia"
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

### 8 — El rol de los sindicatos

```
metadata:
  materia: "historia"
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

### 9 — Sistema de Seguridad Social

```
metadata:
  materia: "historia"
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

### 10 — Evolución de la legislación laboral

```
metadata:
  materia: "historia"
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

### 11 — El sufragio femenino

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["derechos", "voto_femenino", "eva_peron"]

respuesta: "1947"
tipo: "completar"
respuestas_validas:
  - "1947"

enunciado: "La Ley de Sufragio Femenino en Argentina, que garantizó el derecho político de las mujeres, fue sancionada en el año ___."

explicacion: |
  La Ley 13.510 fue sancionada el 9 de septiembre de 1947, marcando un hito en la democracia argentina.
```

### 12 — El rol de Eva Perón

```
metadata:
  materia: "historia_profunda"
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

### 13 — El primer ejercicio del voto

```
metadata:
  materia: "historia_profunda"
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

### 14 — Conceptos clave del sufragio

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["derechos_civiles", "ciudadania"]

respuesta_orden: ["Ley 13.510", "Sufragio Femenino", "Ciudadanía Plena"]
tipo: "ordenar"
opciones_explicitas: ["Ley 13.510", "Sufragio Femenino", "Ciudadanía Plena"]

enunciado: "Ordena cronológicamente los procesos que permitieron la integración política de la mujer en Argentina:"

explicacion: |
  Primero se sanciona la ley, luego se implementa el sufragio y finalmente se consolida la ciudadanía plena de la mujer.
```

### 15 — Consecuencias políticas

```
metadata:
  materia: "historia_profunda"
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

### 16 — La polarización social

```
metadata:
  materia: "historia_profunda"
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

### 17 — La base del apoyo popular

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["clases_sociales", "trabajadores"]

respuesta: "clase_obrera"
tipo: completar
respuestas_validas:
  - "clase_obrera"
  - "clases_medias"
  - "élite_terrateniente"

enunciado: "El principal sector social que brindó el apoyo masivo y sostenido al movimiento peronista fue la ___."

explicacion: |
  La incorporación de la clase obrera a la vida política activa fue el pilar fundamental del movimiento, otorgándole un poder de movilización sin precedentes en la historia argentina.
```

### 18 — Sectores de oposición

```
metadata:
  materia: "historia_profunda"
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

### 19 — La huella en la política actual

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "avanzado"
  tags: ["legado", "politica_argentina"]

respuesta: "identidad_politica"
tipo: completar
respuestas_validas:
  - "identidad_politica"
  - "estabilidad_institucional"
  - "sistema_partidario_unicos"

enunciado: "El peronismo no solo fue un gobierno, sino que configuró una nueva ___ que sigue siendo un eje central en la política argentina contemporánea."

explicacion: |
  La capacidad de la identidad peronista para reorganizarse y permanecer como un actor central demuestra la profundidad de su impacto en la estructura política nacional.
```

### 20 — Secuencia de impacto social

```
metadata:
  materia: "historia_profunda"
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

### 21 — El derecho a las vacaciones

```
metadata:
  materia: "historia_profunda"
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

### 22 — El rol de la mujer en la política

```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["voto_femenino", "derechos_civiles"]

variables:
  datos: [["Ley_1420", "educacion_comun"], ["Ley_13.001", "voto_femenino"], ["Ley_Estatuto", "derechos_sociales"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "descanso_pago"
  - "voto_femenino"
  - "estabilidad_laboral"

enunciado: "La promulgación de la Ley 14.240 en 1947 permitió que las mujeres ejercieran su derecho al ___ en Argentina."

explicacion: |
  La Ley de Sufragio Femenino fue fundamental para la integración de la mujer a la vida política y ciudadana del país.
```

### 23 — La justicia social y la distribución

```
metadata:
  materia: "historia_profunda"
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

### 24 — Secuencia de conquistas sociales

```
metadata:
  materia: "historia_profunda"
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

### 25 — El concepto de la dignidad laboral

```
metadata:
  materia: "historia_profunda"
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
