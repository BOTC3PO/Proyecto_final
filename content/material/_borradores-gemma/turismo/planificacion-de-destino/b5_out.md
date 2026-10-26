### 1 — Gestión de capacidad de carga
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["sostenibilidad", "capacidad_de_carga"]

variables:
  escenario: uno_de([["Parque Nacional", "300"], ["Reserva Costera", "150"], ["Pueblo Colonial", "50"]])
  idx: uno_de([0, 1, 2])
  capacidad: escenario[idx][1]

enunciado: "Un gestor de destinos debe determinar la capacidad de carga para el {escenario[idx][0]}. Si la capacidad máxima es de {capacidad} visitantes diarios y actualmente hay 45 visitantes, ¿cuántos visitantes más se pueden admitir antes de alcanzar el límite?"

pasos:
  - "Identificar la capacidad máxima actual: {capacidad}"
  - "Restar la cantidad de visitantes presentes: 45"
  - "Resultado: {capacidad} - 45"

respuesta: 255
tipo: input
tolerancia_abs: 0

explicacion: |
  La capacidad de carga es el número máximo de personas que pueden visitar un destino sin degradar el entorno. 
  En este caso: 300 - 45 = 255.
```

### 2 — Clasificación de impactos turísticos
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "basico"
  tags: ["impacto_ambiental", "sostenibilidad"]

variables:
  impactos: [["Erosión de senderos", "negativo"], ["Creación de empleos locales", "positivo"], ["Contaminación acústica", "negativo"]]
  idx: uno_de([0, 1, 2])

enunciado: "En la planificación de un destino, la ' {impactos[idx][0]} ' se clasifica generalmente como un impacto de tipo: ___ "

respuestas_validas: ["positivo", "negativo"]
tipo: completar

explicacion: |
  Los impactos positivos fomentan el desarrollo local, mientras que los negativos representan costos ambientales o sociales que la planificación debe mitigar.
```

### 3 — El modelo de gestión sostenible
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["dimensiones_sostenibilidad"]

enunciado: "Para que la planificación de un destino sea realmente sostenible, debe equilibrar tres pilares fundamentales. ¿Cuál de los siguientes grupos representa correctamente este equilibrio?"

opciones_explicitas: ["Económico, Social y Ambiental", "Económico, Turístico y Tecnológico", "Social, Cultural y Político", "Ambiental, Infraestructura y Transporte"]
respuesta: "Económico, Social y Ambiental"
tipo: mc

explicacion: |
  La sostenibilidad se basa en el triple balance: la viabilidad económica, la equidad social y la integridad ambiental.
```

### 4 — Etapas del ciclo de vida de un destino
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "avanzado"
  tags: ["ciclo_de_vida", "Butler"]

enunciado: "Ordene correctamente las etapas del ciclo de vida de un destino turístico según el modelo de Butler, partiendo desde la fase inicial de descubrimiento hasta la fase de declive."

opciones_explicitas: ["Exploración, Desarrollo, Consolidación, Estancamiento, Declive"]
respuesta: ["Exploración", "Desarrollo", "Consolidación", "Estancamiento", "Declive"]
tipo: ordenar

explicacion: |
  El modelo de Butler describe cómo los destinos pasan por diferentes fases de crecimiento, madurez y eventual declive o renovación.
```

### 5 — Veracidad de la gestión participativa
```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "basico"
  tags: ["participacion_comunitaria"]

enunciado: "¿Es verdadero o falso que la planificación participativa implica que las comunidades locales deben ser consultadas y parte activa en la toma de decisiones sobre el desarrollo turístico de su territorio?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: vf

explicacion: |
  La gestión participativa es clave en el turismo sostenible para asegurar que el beneficio sea distribuido y que la comunidad acepte el modelo de desarrollo.
```