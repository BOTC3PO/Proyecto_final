### 1 — El contrato de trabajo
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["contrato", "relacion_laboral"]

respuesta: "subordinación"
tipo: completar
respuestas_validas: ["subordinación", "subordinacion"]

enunciado: "Para que exista un contrato de trabajo, debe existir una prestación de servicios personales por parte del trabajador, una remuneración y un elemento esencial llamado ___."

explicacion: |
  La subordinación es el elemento que distingue la relación laboral de la prestación de servicios profesionales independientes. Implica la facultad del empleador de dar órdenes y la obligación del trabajador de cumplirlas.
```

### 2 — ¿Es una relación laboral?
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["elementos_esenciales", "verificacion"]

respuesta: verdadero
tipo: vf

enunciado: "Si una persona presta servicios de forma autónoma, con sus propios medios, sin cumplir un horario impuesto y sin recibir órdenes directas, ¿se configura un contrato de trabajo?"

explicacion: |
  Falso. Al no existir subordinación ni dependencia jerárquica, se trata de una relación de carácter civil o comercial (prestación de servicios), no laboral.
```

### 3 — Indemnización por despido
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "intermedio"
  tags: ["despido", "indemnizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["despido_sin_causa", "indemnización_total"],
    ["renuncia_voluntaria", "sin_indemnización"]
  ]

respuesta: escenarios[escenario_idx][1]
tipo: mc
opciones_explicitas: ["indemnización_total", "sin_indemnización", "pago_de_salarios_pendientes", "solo_vacaciones"]

enunciado: "Un trabajador es despedido de forma arbitraria (sin causa justificada) tras 2 años de servicio. Según el escenario seleccionado, ¿qué derecho le corresponde principalmente?"

pasos:
  - "Determinar si el despido fue con o sin causa."
  - "Verificar la antigüedad del trabajador."
  - "Aplicar la normativa sobre indemnizaciones por despido injustificado."

explicacion: |
  En el caso de despido sin causa, el trabajador tiene derecho a una indemnización por los daños causados por la ruptura unilateral del vínculo.
```

### 4 — Proceso de una sanción disciplinaria
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "avanzado"
  tags: ["procedimiento", "disciplina"]

respuesta: ["Notificación de falta", "Derecho a defensa", "Aplicación de sanción"]
tipo: ordenar
opciones_explicitas: ["Notificación de falta", "Derecho a defensa", "Aplicación de sanción"]

enunciado: "Ordene cronológicamente los pasos que debe seguir un empleador para aplicar una sanción disciplinaria válida sin vulnerar el debido proceso:"

explicacion: |
  El empleador primero debe comunicar la falta, permitir que el trabajador dé su versión (derecho a defensa) y, finalmente, decidir la sanción proporcional.
```

### 5 — Salario Mínimo y Remuneración
```
metadata:
  materia: "derecho"
  tema: "derecho_laboral"
  nivel: "basico"
  tags: ["salario", "remuneracion"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["$500", "es_ilegal"],
    ["$1200", "es_legal"]
  ]
  ley_minima: 1000

respuesta: "es_ilegal"
tipo: mc
opciones_explicitas: ["es_ilegal", "es_legal"]

enunciado: "Si el salario mínimo legal vigente es de {ley_minima}, un empleador ofrece un sueldo de {casos[caso_idx][0]} por una jornada completa. ¿Cuál es la situación jurídica de este salario?"

explicacion: |
  El salario no puede ser inferior al mínimo establecido por la ley para la jornada completa. Si la oferta es menor, se considera una violación a los derechos laborales.
```