### 1 — El Aguinaldo
```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "basico"
  tags: ["derechos_laborales", "peronismo"]

respuesta: "Sueldo Anual Complementario"
tipo: completar
respuestas_validas: ["Sueldo Anual Complementario", "sueldo anual complementario", "Aguinaldo"]

enunciado: "El beneficio laboral que consiste en la percepción de una parte del sueldo en dos cuotas durante el año se conoce formalmente como ___."

explicacion: |
  El aguinaldo, o Sueldo Anual Complementario (SAC), fue consolidado como un derecho adquirido para asegurar una compensación extra al trabajador.
```

### 2 — El descanso anual
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

### 3 — El rol de los sindicatos
```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["sindicatos", "derechos_laborales"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["fortalecimiento de la negociación colectiva", "mayor poder de presión sindical"], ["protección de la actividad gremial", "reconocimiento de la personería gremial"]]

respuesta: uno_de(datos[escenario_idx][0])
tipo: mc
opciones_explicitas: ["Debilitamiento de la negociación colectiva", "Pérdida de autonomía sindical", "Debilitamiento de la actividad gremial", "Fragmentación de los sectores obreros"]

enunciado: "Uno de los pilares de la reforma laboral peronista fue el ___."

explicacion: |
  El fortalecimiento de los sindicatos permitió que los trabajadores tuvieran una voz institucionalizada en la negociación de sus condiciones de vida.
```

### 4 — Sistema de Seguridad Social
```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "intermedio"
  tags: ["jubilaciones", "seguridad_social"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["jubilaciones", "pensiones"], ["ancianos", "retirados"]]

respuesta: uno_de(casos[caso_idx][0])
tipo: mc
opciones_explicitas: ["seguros de vida", "jubilaciones", "créditos hipotecarios", "asistencia escolar"]

enunciado: "La ampliación de la cobertura de la seguridad social se manifestó principalmente en la expansión de las ___ para la clase trabajadora."

explicacion: |
  La universalización de las jubilaciones permitió que una gran parte de la población pudiera acceder a una vejez digna y protegida por el Estado.
```

### 5 — Evolución de la legislación laboral
```
metadata:
  materia: "historia"
  tema: "peronismo_derechos_sociales"
  nivel: "avanzado"
  tags: ["ordenar", "derechos_laborales"]

opciones_explicitas: ["Preexistencia de leyes", "Promulgación de leyes de protección", "Consolidación de derechos sociales"]
respuesta: ["Preexistencia de leyes", "Promulgación de leyes de protección", "Consolidación de derechos sociales"]
tipo: ordenar

enunciado: "Ordene cronológicamente la evolución de la situación de los derechos laborales en Argentina durante el proceso de transformación social de mediados del siglo XX:"

explicacion: |
  El proceso comenzó con la existencia de leyes previas, continuó con una intensa actividad legislativa de protección y culminó con la consolidación de un sistema de derechos sociales robusto.
```