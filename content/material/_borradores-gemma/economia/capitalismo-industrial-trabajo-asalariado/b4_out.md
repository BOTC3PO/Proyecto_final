### 1 — El impacto de la jornada laboral
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["revolucion_industrial", "condiciones_laborales"]

variables:
  escenario: uno_de([
    ["14 horas", "16 horas", "12 horas"],
    ["12 horas", "15 horas", "13 horas"],
    ["15 horas", "14 horas", "16 horas"]
  ])

enunciado: "Durante el auge de la Revolución Industrial, era común que los obreros enfrentaran jornadas laborales de aproximadamente {escenario[0]} diarias, lo que derivaba en un agotamiento físico extremo."

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["14 horas", "16 horas", "12 horas"]

explicacion: |
  Las jornadas de 14 a 16 horas eran la norma en las fábricas textiles y minas, lo que impulsó la lucha por la jornada de 8 horas.
```

### 2 — El trabajo infantil en la industria
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["trabajo_infantil", "historia_economica"]

variables:
  contexto: uno_de([
    ["minas y textiles", "ferrocarriles y minas", "textiles y minería"],
    ["textiles y minas", "ferrocarriles y textiles", "minería y textiles"],
    ["minería y textiles", "textiles y ferrocarriles", "minería y ferrocarriles"]
  ])

enunciado: "El trabajo infantil fue una práctica extendida en sectores como las {contexto[0]}, donde los niños eran empleados debido a su pequeño tamaño y bajos costos."

respuesta: contexto[0]
tipo: mc
opciones_explicitas: ["minas y textiles", "ferrocarriles y minas", "textiles y minería"]

explicacion: |
  Los niños eran utilizados en minas para entrar en túneles estrechos y en fábricas textiles para reparar maquinaria en movimiento.
```

### 3 — Causas de la organización sindical
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["sindicatos", "lucha_de_clases"]

variables:
  causa_idx: uno_de([0, 1, 2])
  causas: [
    ["la falta de regulación de salarios", "la falta de regulación de salarios", "la falta de regulación de salarios"],
    ["la falta de seguridad social", "la falta de seguridad social", "la falta de seguridad social"],
    ["la falta de límites a la jornada", "la falta de límites a la jornada", "la falta de límites a la jornada"]
  ]

enunciado: "La organización de los primeros sindicatos fue una respuesta directa a la precariedad, especialmente ante la ___."

respuesta: causas[causa_idx]
tipo: completar
respuestas_validas: ["la falta de regulación de salarios", "la falta de seguridad social", "la falta de límites a la jornada"]

explicacion: |
  La unión de los trabajadores permitía negociar colectivamente para mejorar salarios y reducir las jornadas inhumanas.
```

### 4 — Evolución de la legislación laboral
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["leyes_laborales", "estado"]

variables:
  orden_legal: ["prohibición de trabajo infantil", "limitación de jornada laboral", "derecho a la huelga"]

enunciado: "Ordena cronológicamente los hitos que marcaron la transición de la explotación absoluta hacia la regulación estatal del trabajo:"

pasos:
  - "Primero: Se prohibió el trabajo de niños menores de ciertas edades."
  - "Segundo: Se establecieron límites máximos de horas por día."
  - "Tercero: Se reconoció legalmente el derecho de los trabajadores a la huelga."

respuesta: orden_legal
tipo: ordenar
opciones_explicitas: ["prohibición de trabajo infantil", "limitación de jornada laboral", "derecho a la huelga"]

explicacion: |
  La regulación comenzó con la protección de los más vulnerables (niños), siguió con la gestión del tiempo (jornada) y culminó con el reconocimiento de la acción colectiva (huelga).
```

### 5 — El salario real en la era industrial
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "avanzado"
  tags: ["salario_real", "pobreza"]

variables:
  situacion: uno_de([
    ["subsistencia", "subsistencia", "subsistencia"]
  ])

enunciado: "En el modelo de capitalismo industrial temprano, el salario pagado a la clase obrera se caracterizaba por ser de ___."

respuesta: situacion[0]
tipo: mc
opciones_explicitas: ["subsistencia", "competitivo", "alto"]

explicacion: |
  El salario de subsistencia apenas cubría las necesidades básicas de alimentación y vivienda, manteniendo a la clase obrera en un ciclo de pobreza.
```