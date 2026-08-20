# Examen jefe — Rosas, Semana Trágica y Legado

> Logro #126. Completaste el parcial analizando la Confederación Argentina, la Semana Trágica de 1919 y su significancia histórica. Pool agregado de los `cuestionario.md` ya validados de sus 3 temas. **71 preguntas totales** en 3/3 secciones.

---

## Sección: rosas-y-la-confederacion (24 preguntas)

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["confederacion", "urquiza", "constitucion"]

variables:
  anio_constitucion: 1853
  provincia_congreso: "Santa Fe"

respuesta: "1853"
tipo: input

enunciado: "Tras la batalla de Caseros, Urquiza convocó al Congreso Constituyente en {provincia_congreso}. ¿En qué año se promulgó la nueva Constitución?"

explicacion: |
  La Constitución de 1853 fue el resultado directo de la convocatoria de Urquiza para organizar la nación tras la caída de Rosas.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["unitarios", "federales", "caseros"]

variables:
  lider_unitario: "Justo José de Urquiza"
  lider_federal: "Juan Manuel de Rosas"

respuesta: "Justo José de Urquiza"
tipo: input

enunciado: "¿Quién lideró la 'Liga del Interior' que derrotó al ejército porteño de {lider_federal} en Caseros?"

explicacion: |
  Justo José de Urquiza, gobernador de Entre Ríos, lideró la coalición contra Rosas, representando intereses provinciales opuestos a la hegemonía porteña.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["soberania", "intervencion", "obligado"]

variables:
  pais_a: "Gran Bretaña"
  pais_b: "Francia"

respuesta: "Gran Bretaña y Francia"
tipo: input

enunciado: "En la batalla de la Vuelta de Obligado (1842), las fuerzas rosistas enfrentaron a una flota conjunta de {pais_a} y {pais_b}."

explicacion: |
  La intervención anglo-francesa buscaba abrir el comercio del Paraná. La resistencia simbolizó la defensa de la soberanía nacional.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["causas", "alianzas", "caseros"]

variables:
  factor_interno: "disidencia provincial"
  factor_externo: "intervencion extranjera"

respuesta: "disidencia provincial"
tipo: input

enunciado: "La caída de Rosas se debió a una alianza entre fuerzas internas motivadas por el {factor_interno} y la presión externa."

explicacion: |
  El descontento de las provincias interiores (Liga del Interior) fue clave para que Urquiza pudiera vencer a Rosas.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "avanzado"
  tags: ["simbolismo", "soberania"]

variables:
  concepto_clave: "defensa de la soberanía"

respuesta: "defensa de la soberanía"
tipo: input

enunciado: "Aunque fue una derrota militar, la Vuelta de Obligado se recuerda principalmente por su valor simbólico de {concepto_clave} frente al intervencionismo."

explicacion: |
  El sacrificio de las tropas rosistas elevó la causa de la independencia nacional a un símbolo patrio, trascendiendo el resultado táctico.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["unidad", "fragmentacion"]

variables:
  resultado_politico: "profundizó la división"

respuesta: "profundizó la división"
tipo: input

enunciado: "¿Cuál fue el efecto político inmediato de la victoria de Urquiza en Caseros: la unificación nacional o {resultado_politico}?"

explicacion: |
  La victoria no trajo unidad inmediata; por el contrario, aisló a Buenos Aires y profundizó la brecha entre la provincia y el resto del país.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["batallas", "soberania"]

variables:
  fecha_correcta: "20 de noviembre de 1842"
  fecha_falsa: "3 de febrero de 1852"

respuesta: verdadero
tipo: vf

enunciado: "La batalla de la Vuelta de Obligado, un símbolo de la resistencia contra la intervención anglo-francesa, ocurrió el {fecha_correcta}."

explicacion: |
  La Vuelta de Obligado se libró el 20 de noviembre de 1842. La fecha mencionada en el enunciado es correcta.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["constitucion", "fechas"]

variables:
  anio: 1853

respuesta: verdadero
tipo: vf

enunciado: "La Constitución Nacional argentina fue sancionada en el año {anio} como resultado del proceso iniciado tras la batalla de Caseros."

explicacion: |
  Es correcto. La Constitución de 1853 fue la primera carta magna nacional, aunque Buenos Aires no adhirió inicialmente.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["intervencion", "diplomacia"]

variables:
  paises: "Inglaterra y Francia"

respuesta: verdadero
tipo: vf

enunciado: "La flota que fue resistida en la Vuelta de Obligado estaba compuesta por fuerzas de {paises}."

explicacion: |
  Es correcto. La intervención anglo-francesa buscaba abrir los ríos interiores al comercio libre, lo que Rosas consideraba una violación de la soberanía.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["caseros", "fechas"]

variables:
  fecha: "3 de febrero de 1852"

respuesta: verdadero
tipo: vf

enunciado: "La batalla de Caseros, que marcó el fin del segundo gobierno de Rosas, se libró el {fecha}."

explicacion: |
  Es correcto. El 3 de febrero de 1852 es la fecha oficial de la batalla.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["obligado", "soberania", "intervencion"]

respuesta: verdadero
tipo: vf

enunciado: "La batalla de la Vuelta de Obligado se interpretó históricamente como un acto de defensa de la soberanía nacional frente al intervencionismo anglo-francés."

explicacion: |
  Aunque hubo derrotas militares, el sacrificio de las tropas rosistas se convirtió en un símbolo de resistencia contra la injerencia extranjera en el río Paraná.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["caseros", "cronologia"]

variables:
  dia: 3
  mes: 2

respuesta: "3 de febrero"
tipo: completar

enunciado: "La batalla de Caseros, que marcó el fin del gobierno de Rosas, ocurrió el {dia} de {mes}."

explicacion: |
  La fecha exacta de la batalla es el 3 de febrero de 1852.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["obligado", "alianzas", "guerra"]

respuesta: falso
tipo: vf

enunciado: "En la batalla de la Vuelta de Obligado, las fuerzas argentinas contaron con el apoyo logístico de Brasil y Uruguay."

explicacion: |
  Fue al revés: Brasil y Uruguay formaban parte de la coalición anglo-francesa que invadía el río Paraná, mientras que las fuerzas de Rosas las combatían.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["obligado", "cronologia"]

variables:
  dia: 20
  mes: 11

respuesta: "20"
tipo: input

enunciado: "La batalla de la Vuelta de Obligado ocurrió el día {dia} del mes {mes} de 1842. Escribe solo el número del día."

explicacion: |
  La fecha es 20 de noviembre de 1842.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "avanzado"
  tags: ["constitucion", "buenos_aires", "integracion"]

respuesta: falso
tipo: vf

enunciado: "La provincia de Buenos Aires se integró inmediatamente al resto del país tras la sanción de la Constitución de 1853."

explicacion: |
  Buenos Aires se separó de la Confederación Argentina entre 1852 y 1861, manteniendo un estado propio hasta su reincorporación posterior.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["constitucion", "objetivo", "unidad"]

respuesta: verdadero
tipo: vf

enunciado: "Uno de los objetivos principales de la Constitución de 1853 era superar la fragmentación territorial y lograr la unidad nacional."

explicacion: |
  El texto constitucional buscaba establecer un régimen federal que integrara a las provincias, aunque Buenos Aires se mantuvo al margen inicialmente.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["cronologia", "caseros"]

variables:
  anio: 1852

respuesta: "1852"
tipo: input

enunciado: "Juan Manuel de Rosas cayó del poder en el año {anio}."

explicacion: |
  La batalla de Caseros ocurrió en 1852, poniendo fin al gobierno de Rosas.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["gobierno", "centralizacion", "buenos_aires"]

respuesta: verdadero
tipo: vf

enunciado: "Durante el gobierno de Rosas, la provincia de Buenos Aires ejerció un dominio hegemónico sobre el resto del país."

explicacion: |
  Rosas gestionaba las relaciones exteriores y el comercio portuario, centralizando el poder económico y político en Buenos Aires.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["caseros", "consecuencias", "fractura"]

respuesta: falso
tipo: vf

enunciado: "La victoria en Caseros trajo consigo la unificación inmediata del país bajo la Constitución de 1853."

explicacion: |
  La victoria de Caseros profundizó la división, llevando a la separación de Buenos Aires de la Confederación durante casi una década.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["cronologia", "caseros"]

variables:
  mes: 2

respuesta: "2"
tipo: input

enunciado: "La batalla de Caseros ocurrió en el mes {mes} del año 1852."

explicacion: |
  La fecha es 3 de febrero de 1852.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["politica", "provincias", "resentimiento"]

respuesta: verdadero
tipo: vf

enunciado: "Las provincias interiores sentían que sus intereses estaban subordinados a los de Buenos Aires durante el gobierno de Rosas."

explicacion: |
  El control portuario y las aduanas por parte de Buenos Aires generaba un fuerte resentimiento en las provincias del interior.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["obligado", "identidad", "sacrificio"]

respuesta: verdadero
tipo: vf

enunciado: "A pesar de la derrota militar, la batalla de la Vuelta de Obligado dejó una huella profunda en la identidad nacional como símbolo de sacrificio."

explicacion: |
  El heroísmo de las tropas y civiles en Obligado fue reinterpretado como un acto de defensa de la soberanía.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "basico"
  tags: ["cronologia", "constitucion"]

variables:
  anio: 1853

respuesta: "1853"
tipo: input

enunciado: "La Constitución Nacional fue sancionada en el año {anio}."

explicacion: |
  La primera Constitución Nacional de Argentina se sancionó en 1853.
```

```
metadata:
  materia: "Historia"
  tema: "rosas_y_la_confederacion"
  nivel: "intermedio"
  tags: ["caseros", "inestabilidad", "guerra_civil"]

respuesta: verdadero
tipo: vf

enunciado: "La caída de Rosas no trajo la unidad nacional deseada, sino que abrió la puerta a un período de inestabilidad y guerra civil."

explicacion: |
  Tras Caseros, Argentina vivió una larga etapa de fragmentación política y conflictos entre Buenos Aires y la Confederación.
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
  tags: ["huelga", "fora", "liniers"]

variables:
  lugar_huelga: "El Progreso"

respuesta: "El Progreso"
tipo: input

enunciado: "La FORA organizó una huelga general que tuvo como detonante inicial la situación laboral en la fábrica de muebles {lugar_huelga}, ubicada en Liniers."

explicacion: |
  La huelga comenzó en la fábrica de muebles El Progreso en Liniers, escalando rápidamente hacia una huelga general en Buenos Aires.
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
  presidente: "Hipólito Yrigoyan"

respuesta: "Hipólito Yrigoyan"
tipo: input

enunciado: "El presidente de la Nación durante la Semana Trágica, {presidente}, del Partido Radical, intervino militarmente para restablecer el orden."

explicacion: |
  Aunque Yrigoyan tenía apoyo popular, su gobierno se alió con las fuerzas conservadoras para reprimir la huelga, priorizando la estabilidad sobre los derechos laborales.
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

enunciado: "Inicialmente, la huelga en Liniers fue una {tipo_conflicto}, pero pronto se transformó en un choque político más amplio."

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

enunciado: "La represión de la Semana Trágica marcó una {ruptura} para el gobierno de Yrigoyan, alienando a sus antiguos aliados obreros."

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

## Sección: significancia-historica (20 preguntas)

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "basico"
  tags: ["significancia_historica", "definicion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La significancia histórica es el criterio que usan los historiadores para decidir qué hechos merecen ser estudiados, recordados y enseñados."

pasos:
  - "Nadie puede estudiar cada detalle de todo lo que ocurrió en el pasado."

explicacion: |
  Verdadero: es la definición central de significancia histórica.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["significancia_historica", "seleccion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Todo lo que ocurrió en el pasado es, en sentido literal, \"historia\", pero nadie puede ni querría estudiar cada detalle de cada día de cada persona que vivió alguna vez."

pasos:
  - "Es la razón por la que hace falta un criterio de selección."

explicacion: |
  Verdadero: es el punto de partida de por qué existe este concepto.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["criterios", "impacto_profundo"]

variables:
  n: uno_de([1, 1])

respuesta: "impacto profundo"
tipo: mc
opciones_explicitas: ["impacto profundo", "alcance amplio", "duración de los efectos"]

enunciado: "El criterio que evalúa si un hecho afectó a las personas de forma significativa (una guerra mundial vs. una discusión de vecinos) se llama..."

pasos:
  - "Es uno de los cinco criterios de significancia mencionados en la teoría."

explicacion: |
  El impacto profundo evalúa la intensidad del efecto de un hecho
  sobre las personas afectadas.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["criterios", "alcance_amplio"]

variables:
  n: uno_de([1, 1])

respuesta: "alcance amplio"
tipo: mc
opciones_explicitas: ["impacto profundo", "alcance amplio", "resonancia hoy"]

enunciado: "El criterio que evalúa si un hecho afectó a muchas personas o regiones, o sólo a un grupo muy chico y localizado, se llama..."

pasos:
  - "Es otro de los cinco criterios de significancia mencionados en la teoría."

explicacion: |
  El alcance amplio evalúa cuántas personas o regiones se vieron
  afectadas por un hecho.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["criterios", "duracion_de_efectos"]

variables:
  n: uno_de([1, 1])

respuesta: "duración de los efectos"
tipo: mc
opciones_explicitas: ["duración de los efectos", "alcance amplio", "revela algo más general"]

enunciado: "El criterio que evalúa si las consecuencias de un hecho se sintieron sólo un momento, o durante generaciones, se llama..."

pasos:
  - "Es otro de los cinco criterios de significancia mencionados en la teoría."

explicacion: |
  La duración de los efectos evalúa por cuánto tiempo se sintieron
  las consecuencias de un hecho.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["criterios", "resonancia_hoy"]

variables:
  n: uno_de([1, 1])

respuesta: "resonancia/relevancia hoy"
tipo: mc
opciones_explicitas: ["resonancia/relevancia hoy", "impacto profundo", "alcance amplio"]

enunciado: "El criterio que evalúa si un hecho ayuda a entender el presente o problemas actuales se llama..."

pasos:
  - "Es otro de los cinco criterios de significancia mencionados en la teoría."

explicacion: |
  La resonancia/relevancia hoy evalúa si el hecho sigue siendo útil
  para entender problemas actuales.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["criterios", "revela_algo_general"]

variables:
  n: uno_de([1, 1])

respuesta: "revela algo más general"
tipo: mc
opciones_explicitas: ["revela algo más general", "duración de los efectos", "impacto profundo"]

enunciado: "El criterio que evalúa si un hecho es un ejemplo que ilumina un proceso más amplio, aunque en sí mismo sea un episodio menor, se llama..."

pasos:
  - "Es el quinto criterio de significancia mencionado en la teoría."

explicacion: |
  Un hecho puede ser significativo no por su magnitud propia, sino
  por lo que revela sobre un proceso histórico más general.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["significancia_cambiante"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un mismo hecho puede considerarse muy significativo en un momento histórico y perder relevancia después, o al revés."

pasos:
  - "La significancia histórica cambia según qué preguntas le interesan a cada generación."

explicacion: |
  Verdadero: es un matiz central sobre la naturaleza no fija de la
  significancia histórica.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["historiografia"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "La historia política tradicional prioriza reyes y batallas como significativos; la historia social prioriza la vida cotidiana de la gente común."

pasos:
  - "Ver `../../filosofia/historia-de-la-filosofia-y-corrientes/`: distintas corrientes historiográficas eligen distinto tipo de hechos como significativos."

explicacion: |
  Verdadero: es un ejemplo concreto de cómo la corriente
  historiográfica influye en qué se considera significativo.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["no_es_gusto_personal"]

variables:
  n: uno_de([1, 1])

respuesta: falso
tipo: vf

enunciado: "Decir \"me interesa la historia militar, así que sólo eso es significativo\" es un juicio válido y suficiente de significancia histórica."

pasos:
  - "La significancia se argumenta con criterios (impacto, alcance, duración, resonancia), no es una simple cuestión de gusto individual."

explicacion: |
  Falso: la significancia histórica no es una preferencia personal
  sin fundamento, requiere argumentación con criterios objetivos.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["hecho_pequeno_significativo"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "El asesinato de un solo archiduque puede desencadenar consecuencias enormes (una guerra mundial), volviéndolo altamente significativo pese a su escala aparentemente menor en el momento en que ocurrió."

pasos:
  - "El tamaño aparente de un hecho no determina por sí solo su significancia."

explicacion: |
  Verdadero: es el ejemplo central de por qué la magnitud aparente de
  un hecho no es el único criterio de significancia.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["criterios", "practica"]

variables:
  hechos: ["una reforma que cambió cómo funciona una sociedad durante siglos", "un evento que ayuda a entender debates políticos actuales"]
  criterios: ["duración de los efectos", "resonancia/relevancia hoy"]
  idx: uno_de([0, 1])

respuesta: criterios[idx]
tipo: mc
opciones_explicitas: ["impacto profundo", "alcance amplio", "duración de los efectos", "resonancia/relevancia hoy"]

enunciado: "\"{hechos[idx]}\" se evalúa principalmente con el criterio de..."

pasos:
  - "Cada descripción corresponde principalmente a uno de los criterios de significancia estudiados."

explicacion: |
  Reconocer qué criterio aplica a un caso concreto es la práctica
  central de este tema.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["prerrequisito"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Decidir qué del pasado vale la pena estudiar presupone ya tener un marco de períodos organizado donde ubicar esa selección."

pasos:
  - "Ver `../periodizacion-historica/`: es el prerrequisito directo de este tema."

explicacion: |
  Verdadero: es la conexión central entre este tema y su
  prerrequisito.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["big_six"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Significancia histórica es uno de los 6 conceptos del marco \"Big Six\" de pensamiento histórico, junto a causa/consecuencia y cambio/continuidad."

pasos:
  - "Ver `../causa-y-consecuencia/` y `../cambio-y-continuidad/`: son los otros conceptos de ese marco ya cubiertos en la cadena."

explicacion: |
  Verdadero: es el mismo marco teórico ya mencionado en temas
  anteriores de esta cadena.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["criterios", "combinacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Evaluar la significancia de un hecho suele combinar varios de los cinco criterios a la vez (impacto, alcance, duración, resonancia, revelar algo general), no basta con aplicar sólo uno."

pasos:
  - "Un hecho puede ser significativo por varias razones combinadas al mismo tiempo."

explicacion: |
  Verdadero: es una aplicación práctica de cómo se usan estos
  criterios en conjunto, no de forma aislada.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["significancia_cambiante", "practica"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Un hecho que en su momento pareció menor puede ganar significancia histórica más adelante, si se descubre que anticipaba o explicaba un proceso posterior importante."

pasos:
  - "Es la aplicación concreta de que la significancia cambia con el tiempo."

explicacion: |
  Verdadero: es la aplicación práctica del principio de significancia
  no fija estudiado en la teoría.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["seleccion", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Cualquier programa de estudio de historia, incluida esta cadena de Tronco 6, aplica implícitamente criterios de significancia al decidir qué temas incluir y cuáles dejar afuera."

pasos:
  - "Es la aplicación reflexiva de este concepto a la propia estructura del material de estudio."

explicacion: |
  Verdadero: es una aplicación autorreferencial de por qué este
  concepto es relevante más allá de la teoría abstracta.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "intermedio"
  tags: ["significancia_historica", "metodo"]

enunciado: "Ordená los pasos para evaluar si un hecho histórico es significativo."
tipo: ordenar
opciones_explicitas:
  - "Identificar el hecho y a quiénes afectó directamente"
  - "Evaluar impacto profundo y alcance amplio de ese efecto"
  - "Evaluar la duración de los efectos y su resonancia en el presente"
  - "Concluir si, combinando esos criterios, el hecho merece un lugar en el estudio histórico"
respuesta_orden:
  - "Identificar el hecho y a quiénes afectó directamente"
  - "Evaluar impacto profundo y alcance amplio de ese efecto"
  - "Evaluar la duración de los efectos y su resonancia en el presente"
  - "Concluir si, combinando esos criterios, el hecho merece un lugar en el estudio histórico"

explicacion: |
  El proceso va de identificar el hecho a evaluar los distintos
  criterios combinados de significancia.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["significancia_historica", "sintesis"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Distintos historiadores pueden argumentar distinta significancia para un mismo hecho, según qué criterios prioricen o desde qué corriente historiográfica trabajen, sin que exista una respuesta única y absoluta."

pasos:
  - "Es la síntesis de por qué la significancia es un juicio argumentado, no un hecho fijo."

explicacion: |
  Verdadero: es la conclusión central de este tema sobre la
  naturaleza del concepto de significancia histórica.
```

```
metadata:
  materia: "historia"
  tema: "significancia_historica"
  nivel: "avanzado"
  tags: ["significancia_historica", "aplicacion"]

variables:
  n: uno_de([1, 1])

respuesta: verdadero
tipo: vf

enunciado: "Al proponer un tema histórico para estudiar, conviene poder justificar su significancia con criterios concretos (impacto, alcance, duración, resonancia), en vez de sólo decir que \"parece interesante\"."

pasos:
  - "Es la aplicación práctica directa de todos los principios estudiados en este tema."

explicacion: |
  Verdadero: es la aplicación concreta de este tema al proponer o
  justificar el estudio de un hecho histórico.
```
