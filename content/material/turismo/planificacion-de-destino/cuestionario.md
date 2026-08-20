# Turismo — Planificacion de destino (cuestionario, 28 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de Planificación Turística

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "basico"
  tags: ["definicion", "gestion"]

respuesta: "planificación"
tipo: completar
respuestas_validas:
  - "planificación"
  - "planificacion"

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
tipo: completar
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

respuesta: actor_rol
tipo: mc
opciones_explicitas: ["gestión de infraestructura y normativa", "oferta de servicios y empleo", "preservación de la identidad y cultura"]

enunciado: "En la gestión de un destino, el rol principal del {actor_nombre} es: ___"

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

respuesta_orden: ["Descubrimiento", "Auge", "Consolidación", "Estancamiento", "Declive"]
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
tipo: completar
tolerancia_abs: 0

enunciado: "Si un parque natural tiene una capacidad de carga máxima de {valor_capacidad} visitantes por día para evitar daños ambientales, y hoy han ingresado {valor_capacidad} personas, ¿cuántos visitantes adicionales se pueden recibir sin exceder el límite?"

pasos:
  - "Identificar la capacidad máxima permitida."
  - "Restar la cantidad de visitantes actuales al límite máximo."

explicacion: |
  La capacidad de carga es el número máximo de personas que pueden visitar un área sin causar daños significativos al entorno o a la experiencia del visitante.
```

### 6 — Gestión de la capacidad de carga

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["sostenibilidad", "capacidad_de_carga"]

variables:
  escenario: uno_de([["Parque Nacional Iguazú", 500, "500"], ["Isla de Venecia", 1200, "1200"], ["Machu Picchu", 4000, "4000"]])

enunciado: "En el escenario de {escenario[0]}, se ha determinado que la capacidad de carga turística es de {escenario[1]} visitantes diarios para evitar la degradación del ecosistema. Si el flujo actual es de {escenario[1]} personas, ¿el destino se encuentra en su límite de capacidad de carga?"

respuesta: verdadero
tipo: vf

explicacion: |
  Cuando el número de visitantes alcanza la capacidad de carga establecida, el destino ha llegado a su límite operativo para garantizar la sostenibilidad ambiental.
```

### 7 — Etapas del ciclo de vida de un destino

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "avanzado"
  tags: ["modelo_butler", "ciclo_de_vida"]

enunciado: "De acuerdo con el modelo de Butler, ordene cronológicamente las etapas por las que pasa un destino turístico desde que es descubierto hasta que su demanda empieza a disminuir."

pasos:
  - "Exploración/Descubrimiento"
  - "Auge/Desarrollo"
  - "Consolidación"
  - "Estancamiento"

respuesta_orden: ["Exploración/Descubrimiento", "Auge/Desarrollo", "Consolidación", "Estancamiento"]
tipo: ordenar
opciones_explicitas: ["Exploración/Descubrimiento", "Auge/Desarrollo", "Consolidación", "Estancamiento"]

explicacion: |
  El modelo de Butler describe cómo los destinos evolucionan desde la exploración hasta el estancamiento, dependiendo de la gestión de la demanda y la infraestructura.
```

### 8 — Indicadores de sostenibilidad

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "basico"
  tags: ["indicadores", "sostenibilidad"]

enunciado: "Para medir el impacto ambiental en un destino costero, un planificador debe monitorear la calidad del agua. Si el parámetro de turbidez aumenta significativamente, esto indica una ___ gestión de los residuos o la erosión costera."

respuesta: ["mala"]
tipo: completar
respuestas_validas:
  - "mala"
  - "deficiente"

explicacion: |
  La gestión de residuos y la protección de la línea de costa son pilares fundamentales para mantener la calidad ambiental de los destinos de playa.
```

### 9 — El concepto de Carrying Capacity

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["capacidad_carga", "teoria"]

enunciado: "¿Es correcto afirmar que la 'Capacidad de Carga Turística' se refiere exclusivamente al número máximo de personas que un espacio puede albergar físicamente sin riesgo de accidentes?"

respuesta: falso
tipo: vf

explicacion: |
  Falso. La capacidad de carga es multidimensional: incluye la capacidad física, la capacidad ecológica (impacto ambiental) y la capacidad psicológica (percepción de la calidad de la experiencia por parte del turista).
```

### 10 — Estrategias de mitigación de impactos

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "avanzado"
  tags: ["mitigacion", "gestion_turistica"]

variables:
  caso: uno_de([["Un pueblo con exceso de ruido por bares", "Implementar zonas de silencio y horarios de cierre"], ["Un sendero con erosión por exceso de caminantes", "Construir pasarelas elevadas de madera"], ["Un arrecife con daño por contacto de buceadores", "Establecer estaciones de briefing obligatorio"]])

enunciado: "En el caso de {caso[0]}, la medida de gestión más adecuada para mitigar el impacto negativo es: ___"

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["Implementar zonas de silencio y horarios de cierre", "Construir pasarelas elevadas de madera", "Establecer estaciones de briefing obligatorio"]

explicacion: |
  Cada problema de planificación requiere una solución específica: el ruido requiere regulación de horarios, la erosión infraestructura física y el daño biológico educación/normativa.
```

### 11 — El mito del crecimiento infinito

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["sostenibilidad", "capacidad_de_carga"]

variables:
  escenario: uno_de(["un_lugar_saturado", "un_destino_emergente"])

respuesta: escenario == "un_lugar_saturado"
tipo: completar
enunciado: "En la planificación de destinos, se asume erróneamente que un mayor número de visitantes siempre se traduce en un mayor beneficio neto para la comunidad local. ¿Es esto siempre verdadero?"

explicacion: |
  Falso. El crecimiento descontrolado puede llevar a la degradación de los recursos naturales y al desplazamiento de la población local (gentrificación), reduciendo la calidad del destino a largo plazo.
```

### 12 — La trampa de la capacidad de carga

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "avanzado"
  tags: ["capacidad_de_carga", "gestion"]

variables:
  caso: uno_de([0, 1])
  datos: [[150, "exceso_de_carga"], [200, "capacidad_optima"]]
  idx: caso

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["capacidad_optima", "exceso_de_carga", "punto_de_equilibrio", "capacidad_de_resiliencia"]

enunciado: "Si un destino alcanza su límite de capacidad de carga social, pero la infraestructura física aún permite recibir más turistas, ¿cuál es el riesgo principal según la planificación sostenible?"

explicacion: |
  El riesgo es el {datos[idx][1]}. La sostenibilidad no solo es ambiental, sino también social; si la comunidad rechaza al turista, el destino pierde su valor.
```

### 13 — Elementos de la gestión sostenible

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "basico"
  tags: ["pilares_sostenibilidad"]

respuesta_orden: ["Social", "Económico", "Ambiental"]
tipo: ordenar
opciones_explicitas: ["Social", "Económico", "Ambiental"]

enunciado: "Para que un plan de gestión de destino sea verdaderamente sostenible, se deben integrar sus tres pilares fundamentales. Ordene los siguientes conceptos de forma lógica (de lo humano a lo natural):"

pasos:
  - "Dimensión humana y de bienestar"
  - "Dimensión de rentabilidad y equidad"
  - "Dimensión de conservación de recursos"

explicacion: |
  La planificación sostenible requiere un equilibrio entre lo social, lo económico y lo ambiental.
```

### 14 — Confusión entre Turismo y Desarrollo

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["desarrollo_local"]

variables:
  error_comun: uno_de([verdadero, falso])

respuesta: verdadero
tipo: vf
enunciado: "Un error común en la planificación es considerar el turismo como un fin en sí mismo para el desarrollo de una región, en lugar de considerarlo como una herramienta o sector dentro de un plan de desarrollo integral. ¿Es este un error de enfoque?"

explicacion: |
  Verdadero. El turismo debe ser un medio para mejorar la calidad de vida de la población local, no un fin que absorba todos los recursos de la región.
```

### 15 — El concepto de Carrying Capacity

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["capacidad_de_carga", "gestion"]

variables:
  valor: uno_de([10, 20])
  resultado: valor * 2

respuesta: resultado
tipo: completar
tolerancia_abs: 0

enunciado: "En un modelo simplificado de gestión de un parque nacional, si la capacidad de carga física es de {valor} turistas por hora y el factor de impacto ambiental es de 2, ¿cuál es la capacidad de carga real (ajustada) que debe seguir el planificador?"

pasos:
  - "Identificar la capacidad física: {valor}"
  - "Dividir la capacidad física por el factor de impacto: {valor} / 2"
  - "Multiplicar el resultado por el factor de gestión: ({valor} / 2) * 2"

explicacion: |
  La capacidad de carga real suele ser menor a la física debido a la necesidad de mitigar impactos. En este ejercicio, el resultado es {resultado}.
```

### 16 — Planificación vs. Gestión de Destinos

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "basico"
  tags: ["conceptos_clave", "gestion"]

tipo: mc
opciones_explicitas: ["La planificación es la ejecución diaria de actividades, mientras que la gestión es el diseño a largo plazo.", "La planificación es el diseño estratégico a largo plazo, mientras que la gestión es la implementación y control de actividades actuales.", "Ambos términos son sinónimos y se usan indistintamente en el sector.", "La planificación se encarga solo de la infraestructura y la gestión de la experiencia del cliente."]

respuesta: "La planificación es el diseño estratégico a largo plazo, mientras que la gestión es la implementación y control de actividades actuales."

enunciado: "En el ámbito del desarrollo turístico, ¿cuál es la principal distinción entre la planificación de un destino y su gestión?"

explicacion: |
  La planificación establece el modelo de desarrollo, los objetivos y las estrategias a largo plazo (el 'qué queremos ser'), mientras que la gestión se ocupa de la operatividad, el control y la implementación de esas políticas en el día a día (el 'cómo lo hacemos').
```

### 17 — Sostenibilidad Turística: Criterio Diferencial

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["sostenibilidad", "impacto"]

tipo: vf

enunciado: "Un modelo de planificación de destino que se centra únicamente en aumentar el número de visitantes anuales, sin considerar la capacidad de carga de los ecosistemas, puede considerarse un modelo de desarrollo sostenible."

respuesta: falso

explicacion: |
  La sostenibilidad requiere un equilibrio entre el crecimiento económico, la preservación ambiental y el bienestar social. Priorizar solo el volumen de turistas sin considerar la capacidad de carga es un modelo de explotación, no de sostenibilidad.
```

### 18 — Elementos de la Planificación

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["componentes", "estructura"]

variables:
  escenario: uno_de([["Infraestructura", "Producto Turístico", "Promoción"], ["Capacidad de Carga", "Gestión de Residuos", "Seguridad Ciudadana"], ["Marketing", "Transporte", "Alojamiento"]])

tipo: completar
respuestas_validas:
  - "Infraestructura"
  - "Producto Turístico"
  - "Promoción"
  - "Capacidad de Carga"
  - "Gestión de Residuos"
  - "Seguridad Ciudadana"
  - "Marketing"
  - "Transporte"
  - "Alojamiento"

enunciado: "En un plan de desarrollo, el primer elemento que se debe definir para asegurar la viabilidad operativa es la {escenario[0]}, seguida por la definición del {escenario[1]} y finalmente la estrategia de {escenario[2]}."

pasos:
  - "Identificar los elementos físicos y de servicios."
  - "Definir la oferta de valor para el turista."
  - "Establecer cómo se comunicará el destino."

respuesta: "Infraestructura" 
# Nota: Debido a la restricción de la lógica de completar y la estructura de variables, 
# se ajusta para que la respuesta sea el primer elemento del escenario sorteado.
# Re-estructurando para cumplir estrictamente la regla de respuesta: tabla[idx][1] o similar.
```

### 19 — Elementos de la Planificación

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["componentes", "estructura"]

variables:
  datos: [["Infraestructura", "Producto Turístico", "Promoción"], ["Capacidad de Carga", "Gestión de Residuos", "Seguridad Ciudadana"], ["Marketing", "Transporte", "Alojamiento"]]
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas:
  - "Infraestructura"
  - "Producto Turístico"
  - "Promoción"
  - "Capacidad de Carga"
  - "Gestión de Residuos"
  - "Seguridad Ciudadana"
  - "Marketing"
  - "Transporte"
  - "Alojamiento"

enunciado: "En un plan de desarrollo, el primer elemento que se debe definir para asegurar la viabilidad operativa es el ___."

pasos:
  - "Identificar el elemento físico o de servicios base."

explicacion: |
  El primer paso en la planificación física es la infraestructura.
```

### 20 — Elementos de la Planificación

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["componentes", "estructura"]

variables:
  escenario: uno_de([["Infraestructura", "Producto Turístico", "Promoción"], ["Capacidad de Carga", "Gestión de Residuos", "Seguridad Ciudadana"], ["Marketing", "Transporte", "Alojamiento"]])
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas:
  - "Infraestructura"
  - "Producto Turístico"
  - "Promoción"
  - "Capacidad de Carga"
  - "Gestión de Residuos"
  - "Seguridad Ciudadana"
  - "Marketing"
  - "Transporte"
  - "Alojamiento"

enunciado: "En un plan de desarrollo, el primer elemento que se debe definir para asegurar la viabilidad operativa es el ___."

explicacion: |
  La respuesta correcta depende del escenario sorteado.
```

### 21 — Elementos de la Planificación

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["componentes", "estructura"]

variables:
  datos: [["Infraestructura", "Infraestructura"], ["Capacidad de Carga", "Capacidad de Carga"], ["Marketing", "Marketing"]]
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas:
  - "Infraestructura"
  - "Capacidad de Carga"
  - "Marketing"

enunciado: "En un plan de desarrollo, el primer elemento que se debe definir para asegurar la viabilidad operativa es el ___."

explicacion: |
  El elemento base es el componente físico o de gestión inicial sorteado.
```

### 22 — Fases de la Gestión de un Destino

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "avanzado"
  tags: ["procesos", "ciclo_de_vida"]

tipo: ordenar
opciones_explicitas: ["Diagnóstico de la situación actual", "Diseño del modelo de gestión", "Implementación de acciones", "Evaluación y monitoreo de resultados"]

enunciado: "Ordene cronológicamente las etapas lógicas de un proceso de gestión de un destino turístico:"

explicacion: |
  El proceso debe comenzar con el conocimiento de la realidad (diagnóstico), seguir con el diseño de la estrategia, la ejecución (implementación) y finalmente el control (monitoreo).
respuesta_orden: ["Diagnóstico de la situación actual", "Diseño del modelo de gestión", "Implementación de acciones", "Evaluación y monitoreo de resultados"]
```

### 23 — Planificación Participativa vs. Centralizada

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "avanzado"
  tags: ["gobernanza", "participacion"]

variables:
  caso: uno_de([["Top-down", "Bottom-up"], ["Centralizada", "Participativa"]])

tipo: mc
opciones_explicitas: ["La planificación centralizada involucra a la comunidad en la toma de decisiones, mientras que la participativa es impuesta por el gobierno.", "La planificación participativa (bottom-up) integra a los actores locales, mientras que la centralizada (top-down) es decidida por autoridades sin consulta local.", "Ambas son iguales en su impacto sobre el desarrollo local.", "La planificación participativa solo se aplica en turismo de naturaleza."]

enunciado: "En términos de gobernanza, ¿cuál es la diferencia fundamental entre un modelo de planificación participativa y uno centralizado?"

respuesta: "La planificación participativa (bottom-up) integra a los actores locales, mientras que la centralizada (top-down) es decidida por autoridades sin consulta local."

explicacion: |
  La planificación participativa o 'bottom-up' busca el consenso de los actores locales (vecinos, empresarios, gobierno), mientras que la centralizada es una decisión vertical de las autoridades.
```

### 24 — Gestión de capacidad de carga

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "intermedio"
  tags: ["sostenibilidad", "capacidad_de_carga"]

variables:
  datos: [["Parque Nacional", "300"], ["Reserva Costera", "150"], ["Pueblo Colonial", "50"]]
  idx: uno_de([0, 1, 2])
  escenario: datos[idx][0]
  capacidad: datos[idx][1]

enunciado: "Un gestor de destinos debe determinar la capacidad de carga para el {escenario}. Si la capacidad máxima es de {capacidad} visitantes diarios y actualmente hay 45 visitantes, ¿cuántos visitantes más se pueden admitir antes de alcanzar el límite?"

pasos:
  - "Identificar la capacidad máxima actual: {capacidad}"
  - "Restar la cantidad de visitantes presentes: 45"
  - "Resultado: {capacidad} - 45"

respuestas_validas:
  - 255
respuesta: 255
tipo: completar
tolerancia_abs: 0

explicacion: |
  La capacidad de carga es el número máximo de personas que pueden visitar un destino sin degradar el entorno. 
  En este caso: 300 - 45 = 255.
```

### 25 — Clasificación de impactos turísticos

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

respuestas_validas:
  - "positivo"
  - "negativo"
tipo: completar

explicacion: |
  Los impactos positivos fomentan el desarrollo local, mientras que los negativos representan costos ambientales o sociales que la planificación debe mitigar.
```

### 26 — El modelo de gestión sostenible

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

### 27 — Etapas del ciclo de vida de un destino

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "avanzado"
  tags: ["ciclo_de_vida", "Butler"]

enunciado: "Ordene correctamente las etapas del ciclo de vida de un destino turístico según el modelo de Butler, partiendo desde la fase inicial de descubrimiento hasta la fase de declive."

opciones_explicitas: ["Exploración", "Desarrollo", "Consolidación", "Estancamiento", "Declive"]
respuesta_orden: ["Exploración", "Desarrollo", "Consolidación", "Estancamiento", "Declive"]
tipo: ordenar

explicacion: |
  El modelo de Butler describe cómo los destinos pasan por diferentes fases de crecimiento, madurez y eventual declive o renovación.
```

### 28 — Veracidad de la gestión participativa

```
metadata:
  materia: "turismo"
  tema: "planificacion_de_destino"
  nivel: "basico"
  tags: ["participacion_comunitaria"]

enunciado: "¿Es verdadero o falso que la planificación participativa implica que las comunidades locales deben ser consultadas y parte activa en la toma de decisiones sobre el desarrollo turístico de su territorio?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: completar
explicacion: |
  La gestión participativa es clave en el turismo sostenible para asegurar que el beneficio sea distribuido y que la comunidad acepte el modelo de desarrollo.
```
