### 1 — Concepto de Planificación Turística
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "basico"
  tags: ["definicion", "gestion"]

respuesta: "planificación"
tipo: completar
respuestas_validas: ["planificación", "planificacion"]

enunciado: "El proceso de establecer objetivos y estrategias para el desarrollo de un área geográfica con el fin de optimizar la experiencia del visitante y el bienestar local se denomina ___________ de destino."

explicacion: |
  La planificación es el proceso sistemático que permite anticipar cambios y organizar los recursos de un destino para asegurar un desarrollo ordenado.
```

### 2 — Sostenibilidad en el Turismo
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "basico"
  tags: ["sostenibilidad", "conceptos"]

variables:
  es_sostenible: uno_de([verdadero, falso])

respuesta: es_sostenible
tipo: vf

enunciado: "Un destino que prioriza el crecimiento económico inmediato de los hoteles, aunque esto implique la destrucción de ecosistemas locales y la expulsión de la población residente, se considera un modelo de turismo sostenible."

explicacion: |
  El turismo sostenible debe equilibrar tres pilares: el económico, el social y el ambiental. Si se sacrifica el entorno o la comunidad, no es sostenible.
```

### 3 — Actores en la Gestión de Destinos
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["stakeholders", "gestion"]

variables:
  idx: uno_de([0, 1, 2])
  actor_nombre: uno_de(["Sector Público", "Sector Privado", "Comunidad Local"])
  actor_rol: uno_de(["gestión de infraestructura y normativa", "oferta de servicios y empleo", "preservación de la identidad y cultura"])

respuesta: actor_rol[idx]
tipo: mc
opciones_explicitas: ["gestión de infraestructura y normativa", "oferta de servicios y empleo", "preservación de la identidad y cultura"]

enunciado: "En la gestión de un destino, el rol principal del {actor_nombre[idx]} es: ___"

explicacion: |
  Cada actor tiene un papel clave: el Estado regula, las empresas proveen servicios y la comunidad mantiene la esencia del lugar.
```

### 4 — Ciclo de Vida de un Destino (Butler)
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["modelo_butler", "etapas"]

respuesta: ["Descubrimiento", "Auge", "Consolidación", "Estancamiento", "Declive"]
tipo: ordenar
opciones_explicitas: ["Descubrimiento", "Auge", "Consolidación", "Estancamiento", "Declive"]

enunciado: "Ordene las etapas del modelo de ciclo de vida de un destino turístico de Butler, desde su aparición hasta su posible decadencia:"

explicacion: |
  El modelo de Butler describe cómo un destino evoluciona desde un lugar poco conocido hasta alcanzar un punto de saturación que puede llevar al declive si no se gestiona.
```

### 5 — Capacidad de Carga
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "avanzado"
  tags: ["capacidad_de_carga", "impacto"]

variables:
  valor_capacidad: uno_de([500, 1200, 3000])

respuesta: valor_capacidad
tipo: input
tolerancia_abs: 0

enunciado: "Si un parque natural tiene una capacidad de carga máxima de {valor_capacidad} visitantes por día para evitar daños ambientales, y hoy han ingresado {valor_capacidad} personas, ¿cuántos visitantes adicionales se pueden recibir sin exceder el límite?"

pasos:
  - "Identificar la capacidad máxima permitida."
  - "Restar la cantidad de visitantes actuales al límite máximo."

explicacion: |
  La capacidad de carga es el número máximo de personas que pueden visitar un área sin causar daños significativos al entorno o a la experiencia del visitante.
```