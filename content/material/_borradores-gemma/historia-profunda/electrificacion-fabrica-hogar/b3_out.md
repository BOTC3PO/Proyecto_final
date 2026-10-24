### 1 — El cambio en la iluminación
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_hogar"
  nivel: "basico"
  tags: ["iluminacion", "siglo_XX"]

respuesta: "bombilla"
tipo: mc
opciones_explicitas: ["vela", "lámpara de aceite", "bombilla", "gas"]

enunciado: "Antes de la electrificación masiva, la iluminación nocturna en los hogares dependía de fuentes de combustión. La llegada de la _______ permitió extender las actividades humanas durante la noche de forma segura."

explicacion: |
  La bombilla incandescente permitió que los hogares dejaran de depender de la luz de gas o aceite, reduciendo riesgos de incendio y mejorando la calidad del aire interior.
```

### 2 — La era de los electrodomésticos
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_hogar"
  nivel: "intermedio"
  tags: ["electrodomesticos", "vida_cotidiana"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [["lavadora", "lavado de ropa"], ["refrigerador", "conservación de alimentos"]]

respuesta: escenario[escenario_idx][1]
tipo: completar
respuestas_validas: ["lavado de ropa", "conservación de alimentos"]

enunciado: "La adopción de la {escenario[escenario_idx][0]} transformó radicalmente el ___."

pasos:
  - "Identifica el electrodoméstico seleccionado."
  - "Determina qué actividad doméstica fue impactada directamente."

explicacion: |
  La {escenario[escenario_idx][0]} fue clave para la automatización de tareas que antes requerían mucho esfuerzo manual o tiempo.
```

### 3 — Secuencia de adopción tecnológica
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_hogar"
  nivel: "intermedio"
  tags: ["secuencia", "tecnologia"]

respuesta: ["iluminación", "refrigeración", "comunicación"]
tipo: ordenar
opciones_explicitas: ["iluminación", "refrigeración", "comunicación"]

enunciado: "Ordena cronológicamente la adopción masiva de tecnologías eléctricas en los hogares del siglo XX, desde la más temprana a la más tardía."

explicacion: |
  Primero se electrificaron las ciudades para la luz (iluminación), luego los grandes electrodomésticos de cocina (refrigeración) y finalmente los dispositivos de entretenimiento y comunicación.
```

### 4 --- El impacto en el tiempo doméstico
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_hogar"
  nivel: "avanzado"
  tags: ["sociedad", "impacto_social"]

respuesta: "reducido"
tipo: completar
respuestas_validas: ["reducido", "aumentado", "nulo"]

enunciado: "La introducción de electrodomésticos como la aspiradora y la lavadora automática tuvo como principal efecto social el tiempo dedicado a las tareas del hogar, el cual se vio ___."

explicacion: |
  Aunque la tecnología prometía liberar tiempo, la sociología histórica sugiere que la carga de trabajo doméstico se reestructuró en lugar de simplemente eliminarse.
```

### 5 --- El motor de la revolución eléctrica
```
metadata:
  materia: "historia_profunda"
  tema: "electrificacion_hogar"
  nivel: "basico"
  tags: ["infraestructura", "urbanismo"]

respuesta: "red eléctrica"
tipo: mc
opciones_explicitas: ["red eléctrica", "batería", "generador manual", "carbón"]

enunciado: "Para que los electrodomésticos fueran viables en los hogares, fue necesaria la construcción de una ___ que conectara las ciudades con las centrales de generación."

explicacion: |
  Sin una infraestructura de red distribuida, la electricidad habría sido un lujo limitado a dispositivos aislados o motores de combustión.
```