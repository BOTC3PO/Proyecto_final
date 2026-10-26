### 1 — Identificación de nichos
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["mercado", "necesidades"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  escenarios: [["comunidad de ciclistas urbanos sin talleres cerca", "falta de servicios de reparación rápida"], ["estudiantes universitarios con poco tiempo para cocinar", "demanda de comida saludable y rápida"], ["dueños de mascotas que trabajan todo el día", "necesidad de cuidado canino a domicilio"]]
  datos: [["ciclistas", "reparación"], ["estudiantes", "comida"], ["dueños de mascotas", "cuidado"]]

enunciado: "Un emprendedor observa que en un barrio con muchos {datos[escenario_idx][0]} existe una oportunidad basada en la {datos[escenario_idx][1]}."

respuesta: escenarios[escenario_idx][1]
tipo: completar
respuestas_validas: ["reparación rápida", "comida saludable y rápida", "cuidado canino a domicilio"]

explicacion: |
  La identificación de una oportunidad surge al detectar una brecha entre una necesidad existente y la oferta actual del mercado.
```

### 2 — Validación de la demanda
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["validación", "mercado"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Se lanza un producto premium en un barrio de bajos ingresos", "falso"], ["Se detecta una queja recurrente sobre el envío de un competidor", "verdadero"]]

enunciado: "Si un emprendedor observa que los clientes de la competencia se quejan constantemente de la lentitud en la entrega, ¿es este un indicador válido para una nueva oportunidad de negocio? (Verdadero/Falso)"

respuesta: casos[caso_idx][1]
tipo: vf
explicacion: |
  Las quejas de los clientes son "puntos de dolor" (pain points) que representan oportunidades de mejora y diferenciación para un nuevo negocio.
```

### 3 — El proceso de validación
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "intermedio"
  tags: ["metodologia", "pasos"]

variables:
  pasos_orden: ["Observar el problema", "Entrevistar clientes potenciales", "Crear un Producto Mínimo Viable", "Escalar el modelo de negocio"]

enunciado: "Ordena los pasos lógicos para validar una oportunidad de negocio desde la detección hasta el crecimiento:"

opciones_explicitas: ["Observar el problema", "Entrevistar clientes potenciales", "Crear un Producto Mínimo Viable", "Escalar el modelo de negocio"]
respuesta: ["Observar el problema", "Entrevistar clientes potenciales", "Crear un Producto Mínimo Viable", "Escalar el modelo de negocio"]
tipo: ordenar

explicacion: |
  Primero se identifica el problema, luego se valida con usuarios reales, se prueba con un producto mínimo y finalmente se escala.
```

### 4 — Análisis de la competencia
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "avanzado"
  tags: ["competencia", "estrategia"]

variables:
  situacion_idx: uno_de([0, 1])
  situaciones: [["Hay muchos competidores pero todos ofrecen lo mismo", "alta"], ["Hay pocos competidores pero la demanda es muy baja", "baja"]]

enunciado: "Si el análisis de mercado muestra que la competencia es muy similar entre sí y no cubre una necesidad específica, la intensidad de la oportunidad se considera: ___"

respuesta: situaciones[situacion_idx][0]
tipo: completar
respuestas_validas: ["alta", "baja"]

explicacion: |
  La falta de diferenciación en la competencia actual indica un espacio para la innovación y la captura de mercado.
```

### 5 — El concepto de "Pain Point"
```
metadata:
  materia: "economia"
  tema: "detectar_una_oportunidad_de_negocio"
  nivel: "basico"
  tags: ["conceptos", "cliente"]

enunciado: "¿Cuál de los siguientes elementos es el motor principal para identificar una oportunidad de negocio real?"

opciones_explicitas: ["La cantidad de dinero que tiene un competidor", "La resolución de un problema o necesidad no satisfecha", "El uso de la tecnología más cara disponible", "Tener un local en la avenida principal"]
respuesta: "La resolución de un problema o necesidad no satisfecha"
tipo: mc

explicacion: |
  Una oportunidad de negocio no es solo una idea, es la capacidad de resolver un problema real para un grupo de personas dispuestas a pagar por ello.
```