### 1 — El derecho a las vacaciones
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["derechos_laborales", "peronismo"]

variables:
  escenario: uno_de([["implementacion_vacaciones", "descanso_pago"], ["seguro_vida", "proteccion_familia"], ["estatuto_obrero", "estabilidad_laboral"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["descanso_pago", "proteccion_familia", "estabilidad_laboral"]

enunciado: "Durante el primer peronismo, la legislación laboral garantizó que los trabajadores tuvieran derecho a un periodo de ___."

explicacion: |
  La Ley de Vacaciones Pagas fue uno de los pilares de la justicia social, permitiendo el descanso remunerado de la clase obrera.
```

### 2 — El rol de la mujer en la política
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["voto_femenino", "derechos_civiles"]

variables:
  caso: uno_de([["Ley_1420", "educacion_comun"], ["Ley_13.001", "voto_femenino"], ["Ley_Estatuto", "derechos_sociales"]])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["descanso_pago", "voto_femenino", "estabilidad_laboral"]

enunciado: "La promulgación de la Ley 14.240 en 1947 permitió que las mujeres ejercieran su derecho al ___ en Argentina."

explicacion: |
  La Ley de Sufragio Femenino fue fundamental para la integración de la mujer a la vida política y ciudadana del país.
```

### 3 — La justicia social y la distribución
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["justicia_social", "distribucion_riqueza"]

variables:
  concepto: uno_de([["reparto_ganancias", "justicia_social"], ["salario_minimo", "poder_pobres"], ["seguridad_social", "bienestar_general"]])
  idx: uno_de([0, 1, 2])

respuesta: concepto[idx][1]
tipo: mc
opciones_explicitas: ["justicia_social", "poder_pobres", "bienestar_general"]

enunciado: "El objetivo central de la política de redistribución de la riqueza durante este periodo era alcanzar la ___."

explicacion: |
  El peronismo promovió la idea de que la riqueza debe ser distribuida para garantizar una vida digna a los sectores trabajadores.
```

### 4 — Secuencia de conquistas sociales
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "avanzado"
  tags: ["secuencia_historica", "derechos"]

variables:
  orden_correcta: ["Estatuto del Peón", "Ley de Vacaciones", "Voto Femenino", "Seguros de Vida"]

respuesta: orden_correcta
tipo: ordenar
opciones_explicitas: ["Estatuto del Peón", "Ley de Vacaciones", "Voto Femenino", "Seguros de Vida"]

enunciado: "Ordene cronológicamente las siguientes conquistas sociales del ámbito de los derechos laborales y civiles durante el primer peronismo:"

explicacion: |
  La secuencia refleja la expansión de derechos desde el ámbito rural y laboral hacia la plena ciudadanía política.
```

### 5 — El concepto de la dignidad laboral
```
metadata:
  materia: "historia_profunda"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["trabajo", "dignidad"]

variables:
  valor: uno_de([["salario_justo", "dignidad"], ["jornada_8h", "salud"], ["afiliacion_sindicato", "poder"]])
  idx: uno_de([0, 1, 2])

respuesta: valor[idx][1]
tipo: input
tolerancia_abs: 0

enunciado: "Para el peronismo, el trabajo no era solo una mercancía, sino un medio para alcanzar la ___ del trabajador."

explicacion: |
  La noción de 'dignidad' fue el eje transversal de todas las reformas laborales impulsadas por el Estado.
```