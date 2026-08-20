# Examen jefe — Maestro de la Estructura Económica

> Logro #194. Completaste el examen analizando la estructura organizacional, la dependencia productiva y los índices financieros con total maestría. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **123 preguntas totales** en 5/5 secciones.

---

## Sección: estructura-organizacional (28 preguntas)

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["organigrama", "definicion", "estructura"]

respuesta: verdadero
tipo: vf

enunciado: "Un organigrama es una representación gráfica que muestra la estructura formal de una organización, incluyendo la jerarquía y las relaciones de autoridad entre sus miembros."

explicacion: |
  El organigrama funciona como el 'esqueleto' visual de la empresa. Permite identificar quiénes reportan a quién, delimitando la cadena de mando y facilitando la comprensión de cómo se distribuyen las responsabilidades y la autoridad dentro del sistema organizacional.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["jerarquia", "niveles", "autoridad"]

respuesta: 1
tipo: input

variables:
  nivel_superior: random(1, 3)
  nivel_medio: random(4, 6)
  nivel_inferior: random(7, 10)

enunciado: "En un organigrama vertical tradicional, si los niveles se numeran del 1 al 10, ¿cuál es el nivel más alto que corresponde a la alta dirección?"

explicacion: |
  La jerarquía se representa mediante niveles verticales. La parte superior (números bajos en este ejemplo, como el 1) corresponde a la alta dirección (directorios, gerentes generales), mientras que los niveles inferiores (números altos) incluyen mandos medios y personal operativo.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["especializacion", "departamentos", "eficiencia"]

respuesta: "Permite enfocarse en tareas específicas y aprovechar economías de escala."
tipo: completar

variables:
  area: uno_de(["Finanzas", "Marketing", "Producción", "Recursos Humanos"])

enunciado: "La agrupación de personas en departamentos como {area} se basa en la especialización. ¿Cuál es el principal beneficio económico de esta división del trabajo?"

explicacion: |
  La especialización o división del trabajo permite que cada unidad se enfoque en su tarea principal. Esto aprovecha las economías de escala y la expertise técnica, mejorando la eficiencia y reduciendo la duplicidad de esfuerzos.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["relaciones", "asesoria", "coordinacion"]

respuesta: verdadero
tipo: vf

enunciado: "En un organigrama, las líneas punteadas que conectan cuadros suelen indicar relaciones de autoridad formal directa, mientras que las líneas rectas indican asesoría."

explicacion: |
  Es falso. Generalmente, las líneas rectas indican relaciones de autoridad formal (quién manda a quién), mientras que las líneas punteadas o discontinuas representan relaciones de asesoría, coordinación o comunicación informal entre unidades.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["funciones", "clarity", "coordination"]

respuesta: "Delimitar las funciones"
tipo: completar

variables:
  beneficio: uno_de(["Delimitar las funciones", "Aumentar la burocracia", "Reducir la comunicación", "Eliminar la jerarquía"])

enunciado: "Una estructura clara ayuda a reducir la ambigüedad en la organización. ¿Qué acción clave permite esto según la teoría?"

explicacion: |
  Al definir claramente quién hace qué, la estructura delimita las funciones. Esto reduce la ambigüedad sobre las responsabilidades de cada miembro, mejora la coordinación y evita vacíos o duplicidades en la ejecución de tareas.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "avanzado"
  tags: ["recursos", "asignacion", "eficiencia"]

respuesta: "Una estructura bien definida permite una asignación más racional de los recursos."
tipo: completar

variables:
  recurso: uno_de(["humanos", "materiales", "de conocimiento"])

enunciado: "Sin una estructura clara, los recursos {recurso} se dispersarían. ¿Qué facilita una estructura bien definida en el contexto económico?"

explicacion: |
  Una estructura bien definida permite una asignación más racional de los recursos (humanos, materiales o de conocimiento). Esto facilita la toma de decisiones, evita la dispersión de esfuerzos y mejora la evaluación del desempeño individual y grupal.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["cadena de mando", "reportes", "flujo"]

respuesta: verdadero
tipo: vf

enunciado: "La cadena de mando se refiere a la secuencia de autoridad desde la alta dirección hasta el nivel operativo, mostrando quién le reporta a quién."

explicacion: |
  Verdadero. El organigrama permite comprender la cadena de mando, es decir, la ruta formal a través de la cual fluye la autoridad y la responsabilidad, definiendo claramente las líneas de reporte dentro de la compañía.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["tipos", "representacion", "flexibilidad"]

respuesta: "Dependiendo de la complejidad y el tamaño."
tipo: completar

variables:
  factor: uno_de(["complejidad", "tamaño", "industria", "ubicación"])

enunciado: "Existen diferentes formas de representar la estructura organizacional. La elección del tipo de organigrama suele depender de la {factor} de la organización."

explicacion: |
  La elección del tipo de organigrama (vertical, horizontal, matricial, etc.) depende de factores como la complejidad, el tamaño y la naturaleza de las operaciones de la organización, buscando la representación más clara y útil para su gestión.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["evaluacion", "desempeño", "gestión"]

respuesta: "Facilita la evaluación del desempeño individual y grupal."
tipo: completar

variables:
  ambito: uno_de(["individual", "grupal", "departamental", "corporativo"])

enunciado: "Más allá de la autoridad, la estructura organizacional es fundamental para la gestión. ¿Qué facilita directamente respecto al {ambito}?"

explicacion: |
  Una estructura clara facilita la evaluación del desempeño individual y grupal. Al conocerse las responsabilidades y los reportes, es posible medir la eficiencia y eficacia de cada miembro o unidad en el cumplimiento de los objetivos organizacionales.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["mandos medios", "intermediarios", "nivel"]

respuesta: falso
tipo: vf

enunciado: "En la jerarquía tradicional, los mandos medios se ubican en la parte superior del organigrama, junto a la alta dirección."

explicacion: |
  Falso. Los mandos medios se ubican en los niveles intermedios del organigrama, actuando como enlace entre la alta dirección (parte superior) y el personal operativo (parte inferior). Su rol es traducir las estrategias superiores en operaciones concretas.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["división del trabajo", "especialización", "departamentos"]

respuesta: "Departamentos o áreas funcionales"
tipo: completar

variables:
  criterio: uno_de(["habilidades", "conocimientos", "ubicación", "antigüedad"])

enunciado: "Los organigramas agrupan a las personas en {criterio} específicos. ¿En qué se basan principalmente estas agrupaciones?"

explicacion: |
  Las agrupaciones se basan en habilidades y conocimientos específicos, creando departamentos o áreas funcionales (como Finanzas, Marketing, etc.). Esto permite que cada unidad se especialice y aproveche su expertise técnica.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["sistema", "objetivos", "eficiencia"]

respuesta: verdadero
tipo: vf

enunciado: "Las organizaciones son sistemas diseñados para alcanzar objetivos específicos de manera eficiente, no grupos caóticos de personas."

explicacion: |
  Verdadero. La estructura organizacional existe precisamente para transformar un grupo de individuos en un sistema coherente y eficiente, orientado al logro de metas comunes mediante la coordinación de recursos y actividades.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["alta dirección", "dirección", "gerencia"]

respuesta: "Directorio o gerente general"
tipo: completar

variables:
  cargo: uno_de(["directorio", "gerente general", "presidente", "CEO"])

enunciado: "La parte superior del organigrama suele corresponder a la alta dirección. ¿Quiénes ocupan típicamente estos puestos?"

explicacion: |
  La alta dirección incluye cargos como el directorio, el gerente general, el presidente o el CEO. Son los responsables de la toma de decisiones estratégicas y la dirección general de la organización.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["personal operativo", "ejecución", "nivel inferior"]

respuesta: "Personal operativo"
tipo: completar

variables:
  nivel: uno_de(["operativo", "táctico", "estratégico", "administrativo"])

enunciado: "Los niveles inferiores del organigrama incluyen a los mandos medios y a los {nivel}."

explicacion: |
  Los niveles inferiores corresponden al personal operativo. Son quienes ejecutan las tareas diarias y las instrucciones derivadas de las estrategias definidas por la alta dirección y coordinadas por los mandos medios.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["integración", "coherencia", "recursos"]

respuesta: "Para funcionar como un todo coherente."
tipo: completar

variables:
  objetivo: uno_de(["funcionar como un todo coherente", "reducir costos", "aumentar ventas", "expandirse"])

enunciado: "Las líneas de conexión en el organigrama muestran cómo se integran los diferentes recursos de la organización. ¿Cuál es el propósito final de esta integración?"

explicacion: |
  El propósito es que la organización funcione como un todo coherente. La integración de recursos humanos, materiales y de conocimiento a través de la estructura permite sinergias y un logro más efectivo de los objetivos.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "avanzado"
  tags: ["economías de escala", "eficiencia", "costos"]

respuesta: verdadero
tipo: vf

enunciado: "La especialización en departamentos permite aprovechar las economías de escala al concentrar tareas similares."

explicacion: |
  Verdadero. Al agrupar tareas similares en departamentos especializados, la organización puede optimizar el uso de recursos, reducir costos unitarios y mejorar la eficiencia operativa gracias a las economías de escala.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["expertise", "conocimiento", "especialización"]

respuesta: "Aprovechando la expertise técnica."
tipo: completar

variables:
  ventaja: uno_de(["explotando la expertise técnica", "ignorando la experiencia", "centralizando todo", "descentralizando la autoridad"])

enunciado: "La división del trabajo no solo organiza, sino que también busca {ventaja} de cada unidad."

explicacion: |
  La división del trabajo busca aprovechar la expertise técnica de cada unidad. Al enfocarse en áreas específicas, los empleados desarrollan mayor competencia y eficiencia en sus tareas asignadas.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["toma de decisiones", "rapidez", "claridad"]

respuesta: "Facilita la toma de decisiones."
tipo: completar

variables:
  proceso: uno_de(["facilita la toma de decisiones", "complica la comunicación", "aumenta la burocracia", "reduce la autoridad"])

enunciado: "Una estructura bien definida tiene un impacto directo en la gestión. ¿Qué facilita principalmente?"

explicacion: |
  Una estructura bien definida facilita la toma de decisiones. Al conocerse los roles y las líneas de autoridad, los responsables pueden actuar con mayor rapidez y certeza, evitando confusiones sobre quién tiene la competencia para decidir.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["duplicidad", "eficiencia", "recursos"]

respuesta: "Evita la duplicidad de tareas."
tipo: completar

variables:
  riesgo: uno_de(["evita la duplicidad de tareas", "promueve la competencia interna", "aumenta los costos", "reduce la calidad"])

enunciado: "Sin una estructura clara, los recursos se dispersarían. ¿Qué ayuda a prevenir una estructura definida?"

explicacion: |
  Una estructura definida ayuda a prevenir la duplicidad de tareas y los vacíos de responsabilidad. Al delimitar claramente las funciones, se asegura que cada tarea sea cubierta por una persona o unidad específica sin solapamientos innecesarios.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["información", "flujo", "comunicación"]

respuesta: "Cómo fluye la información dentro de la compañía."
tipo: completar

variables:
  elemento: uno_de(["cómo fluye la información dentro de la compañía", "cuánto gana cada empleado", "qué productos se venden", "dónde está la sede"])

enunciado: "El organigrama no es solo un dibujo; es una herramienta visual que permite comprender la cadena de mando y {elemento}."

explicacion: |
  El organigrama permite comprender cómo fluye la información dentro de la compañía. Entender los canales formales de comunicación es crucial para la coordinación y la eficiencia operativa.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["representación", "gráfica", "visual"]

respuesta: verdadero
tipo: vf

enunciado: "Un organigrama es una representación gráfica de la estructura de una organización."

explicacion: |
  Verdadero. Esta es la definición fundamental. Es la herramienta visual primaria para entender la arquitectura interna de la empresa, mostrando sus componentes y sus interrelaciones.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["responsabilidad", "vacíos", "delimitación"]

respuesta: "Vacíos de responsabilidad."
tipo: completar

variables:
  problema: uno_de(["vacíos de responsabilidad", "excedentes de presupuesto", "falta de innovación", "baja moral"])

enunciado: "Sin una estructura clara, los recursos se dispersarían, generando duplicidad de tareas o {problema}."

explicacion: |
  La falta de estructura genera vacíos de responsabilidad, donde nadie se siente encargado de ciertas tareas críticas. La delimitación clara de funciones en el organigrama previene este riesgo.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["autoridad", "formal", "poder"]

respuesta: "Refleja el poder formal y la autoridad para tomar decisiones."
tipo: completar

variables:
  concepto: uno_de(["refleja el poder formal y la autoridad para tomar decisiones", "muestra la amistad entre empleados", "indica los salarios", "describe la cultura"])

enunciado: "La disposición vertical en el organigrama {concepto}."

explicacion: |
  La disposición vertical refleja el poder formal y la autoridad para tomar decisiones. Los niveles superiores tienen mayor autoridad jerárquica sobre los inferiores, estableciendo el orden de mando.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["coordinación", "eficiencia", "trabajo en equipo"]

respuesta: "Mejora la coordinación."
tipo: completar

variables:
  beneficio: uno_de(["mejora la coordinación", "reduce la comunicación", "aísla los departamentos", "elimina la jerarquía"])

enunciado: "Al delimitar las funciones, la estructura organizacional {beneficio} entre los miembros del equipo."

explicacion: |
  Delimitar las funciones mejora la coordinación. Cuando cada miembro conoce su rol y el de los demás, se facilita el trabajo conjunto y se reducen los conflictos por superposición de funciones.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "intermedio"
  tags: ["líneas", "conexión", "relaciones"]

respuesta: "Las líneas que conectan los cuadros indican las relaciones de autoridad o de asesoría."
tipo: completar

variables:
  elemento: uno_de(["las líneas que conectan los cuadros indican las relaciones de autoridad o de asesoría", "los colores indican el presupuesto", "el tamaño indica el salario", "las formas indican la antigüedad"])

enunciado: "Además de los cuadros, {elemento}."

explicacion: |
  Las líneas que conectan los cuadros son esenciales para interpretar el organigrama. Indican las relaciones formales de autoridad (líneas rectas) o de asesoría/coordinación (líneas punteadas), mostrando la dinámica de la organización.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["analogía", "esqueleto", "mapa"]

respuesta: verdadero
tipo: vf

enunciado: "Se puede imaginar el organigrama como el 'esqueleto' o el mapa de una empresa."

explicacion: |
  Verdadero. Esta analogía ayuda a visualizar su función: así como el esqueleto da soporte y forma al cuerpo, el organigrama da soporte y forma a la estructura interna de la empresa, permitiendo su funcionamiento.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "basico"
  tags: ["miembros", "equipo", "composición"]

respuesta: "Muestra quiénes son los miembros del equipo, en qué departamentos están agrupados y cómo se relacionan entre sí."
tipo: completar

variables:
  contenido: uno_de(["muestra quiénes son los miembros del equipo, en qué departamentos están agrupados y cómo se relacionan entre sí", "indica los horarios de trabajo", "describe la decoración de la oficina", "lista los proveedores"])

enunciado: "El organigrama muestra {contenido}."

explicacion: |
  El organigrama muestra quiénes son los miembros del equipo, en qué departamentos están agrupados y cómo se relacionan entre sí en términos de autoridad y responsabilidad. Es un mapa de la composición y la dinámica interna.
```

```
metadata:
  materia: "economia"
  tema: "estructura_organizacional"
  nivel: "avanzado"
  tags: ["comprensión", "teoría", "aplicación"]

respuesta: verdadero
tipo: vf

enunciado: "Entender cómo se organiza el trabajo es tan importante como conocer los recursos que se utilizan en el estudio de la economía y la administración de empresas."

explicacion: |
  Verdadero. La estructura organizacional es fundamental porque determina cómo se utilizan los recursos. Sin una organización eficiente, incluso los mejores recursos pueden ser mal gestionados, llevando al fracaso de los objetivos económicos.
```

## Sección: estructura-productiva-dependencia (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["historia_economica", "agroexportador"]

respuesta: "primarias"
tipo: completar
respuestas_validas: ["primarias"]

enunciado: "La estructura productiva argentina, consolidada durante el modelo agroexportador, se caracterizó por una fuerte especialización en la exportación de productos de naturaleza ___."

explicacion: |
  El modelo agroexportador (1880-1930) posicionó a Argentina como el "granero del mundo", basando su economía en la exportación de materias primas (cereales, carnes) hacia Europa, lo que generó una dependencia estructural de los sectores primarios.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["commodities", "volatilidad"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["soja", "caída"], ["trigo", "subida"]]
  efecto: [["menor ingreso de divisas", "mayor ingreso de divisas"]]

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["datos[0][1]", "datos[1][1]", "sin cambios"]

enunciado: "Si el precio internacional de la {datos[escenario_idx][0]} sufre una {datos[escenario_idx][1]}, el efecto inmediato en la balanza comercial argentina es un ___."

pasos:
  - "Identificar el commodity y la tendencia del precio."
  - "Relacionar el precio del producto de exportación con el ingreso de divisas."

explicacion: |
  Dado que Argentina es un exportador neto de commodities, la volatilidad de los precios internacionales impacta directamente en la recaudación fiscal y la disponibilidad de dólares (divisas).
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["exportaciones", "commodities"]

respuesta: "Dependencia de los precios de los commodities"
tipo: mc
opciones_explicitas: ["Diversificación industrial avanzada", "Dependencia de los precios de los commodities", "Autosuficiencia tecnológica"]

enunciado: "¿Cuál es la principal vulnerabilidad de una estructura productiva basada en la exportación de materias primas?"

explicacion: |
  La falta de valor agregado en las exportaciones hace que la economía sea altamente sensible a los ciclos de precios internacionales, fenómeno conocido como la "vulnerabilidad externa".
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["ciclos_economicos", "exportación"]

opciones_explicitas: ["Aumento de demanda externa", "Suba de precios internacionales", "Ingreso de divisas", "Crecimiento del PBI local"]
respuesta: ["Aumento de demanda externa", "Suba de precios internacionales", "Ingreso de divisas", "Crecimiento del PBI local"]
tipo: ordenar

enunciado: "Ordene cronológicamente la cadena de efectos que genera un ciclo alcista en la economía argentina basado en el modelo agroexportador:"

explicacion: |
  Un aumento en la demanda mundial de productos agrícolas eleva los precios de los commodities, lo que permite un mayor ingreso de divisas al país, impulsando finalmente el crecimiento económico interno.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["valor_agregado", "industria"]

respuesta: "bajo"
tipo: completar
respuestas_validas: ["bajo", "nulo"]

enunciado: "La estructura productiva heredada presenta un perfil de exportación con un ___ grado de valor agregado, lo que se traduce en una mayor dependencia de la demanda externa de materias primas."

explicacion: |
  A diferencia de las economías industrializadas, la estructura argentina exporta mayoritariamente bienes con poco procesamiento industrial, lo que limita la capacidad de captura de valor en la cadena global.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["teoria_economica", "desarrollo"]

tipo: mc
opciones_explicitas: ["La subordinación de la economía local a las decisiones y precios de mercados externos.", "Un sistema donde el país exporta tecnología de punta y productos manufacturados.", "Un modelo de autosuficiencia total donde no se requiere comercio exterior.", "La capacidad de un país para fijar sus propios precios internacionales sin influencia externa."]

enunciado: "Se define como dependencia económica cuando la estructura productiva de un país se encuentra ___________ por los ciclos económicos y las decisiones de precios de las economías centrales."

respuesta: "La subordinación de la economía local a las decisiones y precios de mercados externos."

explicacion: |
  La dependencia económica ocurre cuando un país carece de autonomía para determinar sus ciclos internos, ya que su producción y consumo dependen de la demanda y los precios fijados en mercados externos o países desarrollados.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["comercio_exterior", "primarización"]

variables:
  escenario: uno_de([
    ["exportación de materias primas", "vulnerabilidad a precios internacionales"],
    ["importación de tecnología", "dependencia de patentes extranjeras"],
    ["deuda externa", "dependencia de capitales volátiles"]
  ])

tipo: completar
respuestas_validas: ["vulnerabilidad a precios internacionales", "dependencia de patentes extranjeras", "dependencia de capitales volátiles"]

enunciado: "Un país que basa su matriz productiva principalmente en la {escenario[0]} suele enfrentar una alta {escenario[1]}."

respuesta: "vulnerabilidad a precios internacionales"

explicacion: |
  La especialización en productos primarios (commodities) expone a las economías a la volatilidad de los precios internacionales, lo que caracteriza a los modelos de dependencia.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["tecnologia", "desarrollo"]

tipo: mc
opciones_explicitas: ["Importación de bienes de capital y tecnología de punta.", "Exportación de servicios de alta complejidad.", "Sustitución de importaciones tecnológicas por producción local.", "Desarrollo de investigación y desarrollo (I+D) propio."]

enunciado: "La dependencia tecnológica se manifiesta principalmente a través de la ___________."

respuesta: "Importación de bienes de capital y tecnología de punta."

explicacion: |
  Cuando un país no desarrolla tecnología propia, debe importar maquinaria y conocimiento, quedando sujeto a los costos y condiciones impuestas por los países que sí poseen dicha tecnología.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["procesos", "industrializacion"]

tipo: ordenar
opciones_explicitas: ["Especialización en recursos naturales", "Importación de manufacturas", "Dependencia de la demanda externa", "Vulnerabilidad ante crisis externas"]

enunciado: "Ordene cronológicamente los elementos que suelen conformar un ciclo de dependencia económica estructural:"

respuesta: ["Especialización en recursos naturales", "Importación de manufacturas", "Dependencia de la demanda externa", "Vulnerabilidad ante crisis externas"]

explicacion: |
  El ciclo comienza con la especialización productiva, lo que genera la necesidad de importar bienes procesados, creando una dependencia de la demanda externa y resultando en vulnerabilidad ante choques externos.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["finanzas", "capitales"]

variables:
  caso: uno_de([
    ["flujos de inversión extranjera directa", "crecimiento sostenido"],
    ["salidas bruscas de capitales especulativos", "crisis de balanza de pagos"]
  ])

tipo: completar
tolerancia_abs: 0

enunciado: "En una economía dependiente, las {caso[0]} pueden ser positivas, pero las {caso[1]} suelen provocar una ___________."

respuesta: "crisis de balanza de pagos"

explicacion: |
  La volatilidad de los capitales es un rasgo de la dependencia financiera; cuando los capitales salen del país repentinamente, se generan crisis en la cuenta de pagos y devaluaciones.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["vulnerabilidad", "primarización"]

variables:
  escenario: uno_de([
    ["soja", "400"],
    ["trigo", "250"],
    ["minería de cobre", "8000"]
  ])

enunciado: "Una economía que basa su ingreso en la exportación de {escenario[0]} enfrenta una alta volatilidad cuando el precio internacional cae a ${escenario[1]} por unidad. Este fenómeno se conoce como vulnerabilidad externa."

respuesta: "vulnerabilidad externa"
tipo: mc
opciones_explicitas: ["vulnerabilidad externa", "estabilidad macroeconómica", "diversificación productiva", "proteccionismo"]

explicacion: |
  La dependencia de un solo producto primario expone a la economía a las fluctuaciones de los precios internacionales (commodities), lo que genera inestabilidad en la balanza de pagos y el tipo de cambio.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["balanza_de_pagos", "términos_de_intercambio"]

variables:
  caso: uno_de([
    ["caída del precio de la soja", "déficit"],
    ["aumento de demanda de materias primas", "superávit"]
  ])

enunciado: "Si ocurre una {caso[0]}, la cuenta corriente de la balanza de pagos tiende a presentar un ___."

pasos:
  - "Identificar el efecto del precio en el ingreso por exportaciones."
  - "Relacionar el ingreso con el saldo de la cuenta corriente."

respuestas_validas: ["déficit", "superávit"]
respuesta: caso[1
tipo: completar

explicacion: |
  Una caída en los precios de exportación reduce la entrada de divisas, lo que puede derivar en un déficit en la cuenta corriente si no se compensa con deuda o remesas.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["términos_de_intercambio", "deterioro"]

variables:
  tendencia: uno_de([
    ["deterioro", "caen"],
    ["mejora", "suben"]
  ])

enunciado: "Cuando los precios de los productos manufacturados crecen más rápido que los de los productos primarios, se produce un ___ en los términos de intercambio, lo que significa que los precios de los bienes que exporta la economía {}."

respuestas_validas: ["deterioro", "mejora"]
respuesta: tendencia[0
tipo: completar

explicacion: |
  El deterioro de los términos de intercambio implica que se necesita exportar cada vez más volumen de materias primas para comprar la misma cantidad de bienes tecnológicos o manufacturados.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["enfermedad_holandesa", "cambio_real"]

variables:
  efecto: uno_de([
    ["apreciación", "sube"],
    ["depreciación", "baja"]
  ])

enunciado: "Un boom de precios en un recurso natural (como el petróleo) genera una entrada masiva de divisas que provoca la ___ del tipo de cambio real. Esto suele afectar la competitividad de la industria local."

respuestas_validas: ["apreciación", "depreciación"]
respuesta: efecto[0
tipo: completar

explicacion: |
  La 'Enfermedad Holandesa' ocurre cuando la abundancia de un recurso natural aprecia la moneda local, haciendo que el resto de los sectores (industria, servicios) pierdan competitividad frente al exterior.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["ciclo_economico", "shock_externo"]

enunciado: "Ordene la secuencia lógica de un shock externo negativo para una economía primario-exportadora:"

opciones_explicitas: ["Caída de precios internacionales", "Menor ingreso de divisas", "Crisis de balanza de pagos", "Restricción externa"]
respuesta: ["Caída de precios internacionales", "Menor ingreso de divisas", "Crisis de balanza de pagos", "Restricción externa"]
tipo: ordenar

explicacion: |
  La cadena comienza con el shock de precios, que reduce el flujo de dólares, afectando la capacidad de pago del país y limitando la importación de insumos (restricción externa).
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["historia_economica", "agroexportacion"]

respuesta: "modelo agroexportador"
tipo: completar
respuestas_validas: ["modelo agroexportador"]

enunciado: "Antes de la industrialización por sustitución de importaciones, la economía argentina se basaba en el ___."

explicacion: |
  El modelo agroexportador consistía en la exportación de materias primas (carnes y cereales) e importación de manufacturas, consolidando una estructura de dependencia hacia los mercados centrales.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["isi", "industrializacion"]

variables:
  escenario: uno_de([["Sustitución de importaciones", "Proteccionismo"], ["Sustitución de importaciones", "Libre cambio"]])

respuesta: escenario[0
tipo: mc
opciones_explicitas: ["Sustitución de importaciones", "Libre cambio"]

enunciado: "El proceso de Industrialización por Sustitución de Importaciones (ISI) buscaba principalmente la {escenario[0]} mediante políticas de protección de la industria nacional."

explicacion: |
  La ISI buscaba que el país dejara de depender de la compra de productos manufacturados en el exterior, fomentando la producción local mediante aranceles y subsidios.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["migraciones", "urbanizacion"]

respuesta: "urbanización"
tipo: completar
respuestas_validas: ["urbanización"]

enunciado: "El crecimiento de la industria durante mediados del siglo XX impulsó un proceso de rápida ___ en la población argentina."

explicacion: |
  La demanda de mano de obra en las fábricas de los centros urbanos (especialmente en Buenos Aires, Rosario y Córdoba) fomentó grandes migraciones internas y la expansión de las ciudades.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["ciclos_economicos", "transicion"]

respuesta: ["Modelo Agroexportador", "Crisis de la demanda externa", "Industrialización por Sustitución de Importaciones"]
tipo: ordenar
opciones_explicitas: ["Modelo Agroexportador", "Crisis de la demanda externa", "Industrialización por Sustitución de Importaciones"]

enunciado: "Ordene cronológicamente los procesos económicos que marcaron la transición de la estructura productiva argentina en el siglo XX:"

explicacion: |
  La crisis de la demanda externa (causada por las Guerras Mundiales y la Gran Depresión) hizo inviable seguir importando productos, lo que forzó el salto hacia la ISI.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["estado", "politica_industrial"]

respuesta: "intervencionista"
tipo: mc
opciones_explicitas: ["intervencionista", "liberal", "ausente"]

enunciado: "Para sostener el modelo ISI, el Estado argentino adoptó un rol principalmente _________."

explicacion: |
  El Estado asumió un rol activo mediante la regulación de aranceles, la creación de empresas públicas y el fomento del mercado interno para asegurar el crecimiento industrial.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["exportaciones", "primarización", "riesgo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["país exportador de granos", "volatilidad de precios internacionales"], ["país exportador de litio", "dependencia de la demanda tecnológica externa"]]

enunciado: "Un {datos[escenario_idx][0]} enfrenta un escenario donde su principal motor de ingresos es un commodity. El principal riesgo económico para este país es la {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1
tipo: mc
opciones_explicitas: ["volatilidad de precios internacionales", "dependencia de la demanda tecnológica externa", "estabilidad cambiaria", "diversificación industrial"]

explicacion: |
  La dependencia de un solo producto primario expone a la economía a las fluctuaciones de los precios internacionales, lo que genera inestabilidad en la balanza comercial y en la recaudación fiscal.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["industria", "valor_agregado", "empleo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["un país con baja capacidad manufacturera", "un país con alta dependencia de bienes de capital"], ["pérdida de valor agregado", "vulnerabilidad ante choques externos"]]

enunciado: "En el caso de {casos[caso_idx][0]}, el riesgo estructural más significativo es la {casos[caso_idx][1]}."

respuesta: casos[caso_idx][1
tipo: mc
opciones_explicitas: ["pérdida de valor agregado", "vulnerabilidad ante choques externos", "exceso de ahorro interno", "estabilidad de precios"]

explicacion: |
  La falta de una base industrial sólida impide que el país capture mayor valor en la cadena de producción, limitando el crecimiento del empleo calificado y la diversificación.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["enfermedad_holandesa", "tipo_de_cambio", "recursos_naturales"]

variables:
  efecto_idx: uno_de([0, 1])
  efectos: [["la apreciación de la moneda local", "la caída de los precios de los commodities"]]

enunciado: "Cuando un país descubre un gran yacimiento de petróleo y aumenta sus exportaciones, se produce una apreciación de la moneda local. Este fenómeno, conocido como Enfermedad Holandesa, suele provocar la falta de competitividad de la ___."

respuesta: industria manufacturera
tipo: completar
respuestas_validas: ["industria manufacturera"]

explicacion: |
  La entrada masiva de divisas aprecia el tipo de cambio real, lo que encarece las exportaciones de bienes no tradicionales y desincentiva la actividad industrial local.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["secuencia", "riesgo", "estructura"]

variables:
  secuencia_idx: uno_de([0, 1])
  secuencias: [
    ["Concentración de exportaciones", "Caída de demanda externa", "Crisis de balanza de pagos"],
    ["Dependencia tecnológica", "Aumento de importaciones", "Déficit de cuenta corriente"]
  ]

enunciado: "Ordene la secuencia lógica de un choque externo en una economía dependiente:"

pasos:
  - "Identificar el origen del choque"
  - "Observar el efecto en la cuenta externa"
  - "Evaluar el impacto en la estabilidad macroeconómica"

respuesta: secuencias[secuencia_idx
tipo: ordenar
opciones_explicitas: ["Concentración de exportaciones", "Caída de demanda externa", "Crisis de balanza de pagos", "Dependencia tecnológica", "Aumento de importaciones", "Déficit de cuenta corriente"]

explicacion: |
  La estructura productiva determina la velocidad y la profundidad con la que un shock externo (como una caída de demanda) se traslada a la economía doméstica.
```

```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["indicador", "exportaciones", "concentracion"]

variables:
  escenario_val: uno_de([0, 1])
  escenarios: [[80, "alta"], [15, "baja"]]

enunciado: "Si el porcentaje de exportaciones concentrado en solo dos productos es del {escenarios[escenario_val][0]}%, se considera que la economía tiene una dependencia ___."

respuesta: escenarios[escenario_val][1
tipo: mc
opciones_explicitas: ["alta", "baja", "nula", "moderada"]

explicacion: |
  A mayor concentración de la canasta exportadora en pocos productos, mayor es la vulnerabilidad de la economía ante cambios en los precios o volúmenes de esos bienes específicos.
```

## Sección: estudio-de-contexto-para-un-proyecto (26 preguntas)

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["comparacion", "niveles"]

respuesta: verdadero
tipo: vf

enunciado: "El nivel local se refiere al entorno inmediato y directo (normativa municipal, barrio), mientras que el nivel regional abarca un ámbito más amplio como una provincia o factores macroeconómicos."

explicacion: |
  Correcto. El nivel local es el microentorno inmediato, y el regional es el macroentorno que influye de manera más general.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["macroentorno", "control"]

respuesta: falso
tipo: vf

enunciado: "Los factores del entorno regional, como la tasa de cambio o la inflación, son controlables directamente por la organización mediante sus decisiones operativas."

explicacion: |
  Falso. Los factores del macroentorno (regional) no son controlables por la organización, solo condicionan su operación.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["definicion", "microentorno", "macroentorno"]

variables:
  nivel: uno_de(["local", "regional"])

respuesta: "entorno"
tipo: completar

enunciado: "El estudio de contexto analiza el {nivel} en el que se desarrolla una organización para identificar oportunidades y amenazas."

explicacion: |
  El estudio de contexto se enfoca en analizar el entorno (local o regional) para entender las condiciones externas que afectan a la organización.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["microentorno", "actores"]

variables:
  actor: uno_de(["clientes", "proveedores", "competidores"])

respuesta: "{actor}"
tipo: input

enunciado: "Menciona un actor clave del microentorno que define la viabilidad del producto o servicio: {actor}."

explicacion: |
  Los clientes, proveedores y competidores son los tres pilares del microentorno según la teoría presentada.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["macroentorno", "herramientas", "pest"]

variables:
  siglas: uno_de(["PEST", "FODA", "SWOT"])

respuesta: "PEST"
tipo: input

enunciado: "¿Qué herramienta se utiliza comúnmente para analizar el entorno regional considerando factores Políticos, Económicos, Sociales y Tecnológicos? {siglas}."

explicacion: |
  El análisis PEST es la herramienta estándar para el macroentorno. FODA/SWOT es más general para la estrategia interna/externa combinada.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "avanzado"
  tags: ["macroentorno", "argentina", "inflacion"]

variables:
  factor: uno_de(["tasa de cambio", "inflación", "empleo"])

respuesta: "inflación"
tipo: input

enunciado: "En el contexto argentino, las fluctuaciones en {factor} son un factor macroeconómico crítico que condiciona la operación de las organizaciones."

explicacion: |
  La inflación y la tasa de cambio son factores clave del macroentorno en Argentina que afectan costos y precios.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["importancia", "estrategia"]

variables:
  riesgo: uno_de(["cimientos inestables", "errores de cálculo", "falta de visión"])

respuesta: "cimientos inestables"
tipo: completar

enunciado: "Sin un diagnóstico previo del contexto, las estrategias se construyen sobre {riesgo}."

explicacion: |
  El texto enfatiza que sin el estudio de contexto, las estrategias carecen de base real y solidez.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["oportunidades", "amenazas"]

variables:
  tipo_factor: uno_de(["oportunidades", "amenazas"])

respuesta: "amenazas"
tipo: input

enunciado: "El estudio de contexto permite identificar {tipo_factor} que podrían poner en riesgo el proyecto."

explicacion: |
  El objetivo dual del análisis es encontrar oportunidades de crecimiento y amenazas potenciales.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "geografia"]

variables:
  factor: uno_de(["accesibilidad", "mano de obra", "cultura"])

respuesta: "accesibilidad"
tipo: input

enunciado: "La {factor} a una zona comercial es un determinante clave en el análisis del entorno local."

explicacion: |
  La accesibilidad física es un elemento crítico del microentorno que afecta la llegada de clientes y proveedores.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["microentorno", "cultura"]

variables:
  elemento: uno_de(["cultura vecinal", "normativa municipal", "infraestructura"])

respuesta: "cultura vecinal"
tipo: input

enunciado: "La {elemento} puede influir en el éxito del proyecto al definir la aceptación social inmediata."

explicacion: |
  La cultura local es parte del microentorno y afecta cómo la comunidad recibe el proyecto.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "legal"]

variables:
  ambito: uno_de(["municipal", "provincial", "nacional"])

respuesta: "municipal"
tipo: input

enunciado: "La normativa {ambito} es parte del entorno local que la organización debe cumplir diariamente."

explicacion: |
  Las leyes y regulaciones locales son parte del microentorno inmediato.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "proveedores"]

variables:
  impacto: uno_de(["costos", "calidad", "innovacion"])

respuesta: "costos"
tipo: input

enunciado: "La confiabilidad y los {impacto} de los proveedores impactan directamente en la cadena de valor."

explicacion: |
  Los proveedores afectan tanto el costo final como la calidad del producto/servicio.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "competencia"]

variables:
  medio: uno_de(["precios", "calidad", "innovacion"])

respuesta: "innovacion"
tipo: input

enunciado: "La presencia de competidores obliga a diferenciarse mediante {medio}, entre otros factores."

explicacion: |
  La competencia fuerza a la organización a buscar ventajas competitivas como innovación, precio o calidad.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "avanzado"
  tags: ["macroentorno", "finanzas"]

variables:
  variable: uno_de(["tasa de cambio", "inflación", "PIB"])

respuesta: "tasa de cambio"
tipo: input

enunciado: "Las fluctuaciones en la {variable} son un ejemplo de factor macroeconómico en Argentina."

explicacion: |
  La tasa de cambio es un indicador clave del macroentorno económico argentino.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["microentorno", "clientes"]

variables:
  actor: uno_de(["clientes"])

respuesta: "clientes"
tipo: input

enunciado: "La satisfacción y comportamiento de los {actor} definen la viabilidad del producto o servicio."

explicacion: |
  Sin clientes satisfechos, el producto no es viable, independientemente de otros factores.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["estrategia", "riesgo"]

variables:
  consecuencia: uno_de(["fracaso", "éxito", "estabilidad"])

respuesta: "fracaso"
tipo: input

enunciado: "Ignorar las condiciones locales corre el riesgo de llevar al {consecuencia} del proyecto."

explicacion: |
  El texto advierte que ignorar el contexto local puede llevar al fracaso por falta de adaptación.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["planificacion", "recursos"]

variables:
  accion: uno_de(["priorizar", "desperdiciar", "ignorar"])

respuesta: "priorizar"
tipo: input

enunciado: "El análisis de niveles ayuda a {accion} los recursos de manera eficiente."

explicacion: |
  Entender el contexto permite asignar recursos donde realmente importan.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "recursos humanos"]

variables:
  disponibilidad: uno_de(["disponibilidad", "costo", "ubicacion"])

respuesta: "disponibilidad"
tipo: input

enunciado: "La {disponibilidad} de mano de obra calificada en la ciudad es un factor local determinante."

explicacion: |
  La oferta de talento local es parte del microentorno y afecta la capacidad operativa.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["herramientas", "pest"]

variables:
  componente: uno_de(["Político", "Económico", "Social", "Tecnológico"])

respuesta: "Político"
tipo: input

enunciado: "En el análisis PEST, la 'P' se refiere al factor {componente}."

explicacion: |
  PEST: Político, Económico, Social, Tecnológico.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "avanzado"
  tags: ["macroentorno", "mercado"]

variables:
  factor: uno_de(["factores macroeconómicos", "factores microeconómicos"])

respuesta: "factores macroeconómicos"
tipo: input

enunciado: "En el nivel regional, los {factor} influyen en la demanda y la oferta de manera general."

explicacion: |
  Los factores macroeconómicos afectan el mercado en su conjunto, no solo a una empresa.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["microentorno", "adaptacion"]

variables:
  riesgo: uno_de(["riesgo", "oportunidad", "ventaja"])

respuesta: "riesgo"
tipo: input

enunciado: "No adaptarse a las necesidades específicas de la comunidad inmediata es un {riesgo}."

explicacion: |
  La adaptación local es crucial para evitar riesgos de rechazo o fracaso.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "infraestructura"]

variables:
  elemento: uno_de(["infraestructura", "normativa", "cultura"])

respuesta: "infraestructura"
tipo: input

enunciado: "La {elemento} disponible juega un papel determinante en el entorno local."

explicacion: |
  La infraestructura (transporte, servicios) es parte del entorno físico local.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "basico"
  tags: ["vision", "mision", "contexto"]

variables:
  concepto: uno_de(["visión", "misión", "estrategia"])

respuesta: "visión"
tipo: input

enunciado: "No basta con saber la {concepto} o la misión; es crucial entender el escenario real."

explicacion: |
  La visión/misión son internas; el contexto es externo. Ambos deben alinearse.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["estrategia", "entorno"]

variables:
  elemento: uno_de(["reglas del juego", "costos fijos", "beneficios"])

respuesta: "reglas del juego"
tipo: input

enunciado: "Ignorar el contexto es ignorar las {elemento} económicas y sociales."

explicacion: |
  El contexto define las "reglas del juego" bajo las cuales opera la organización.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "intermedio"
  tags: ["microentorno", "calidad"]

variables:
  medio: uno_de(["calidad", "precio", "ubicacion"])

respuesta: "calidad"
tipo: input

enunciado: "La organización puede diferenciarse mediante la {medio} frente a la competencia."

explicacion: |
  La calidad es una vía de diferenciación estratégica en el microentorno.
```

```
metadata:
  materia: "economia"
  tema: "estudio_de_contexto_para_un_proyecto"
  nivel: "avanzado"
  tags: ["resumen", "importancia"]

variables:
  resultado: uno_de(["oportunidades", "amenazas", "ambas"])

respuesta: "ambas"
tipo: input

enunciado: "El estudio de contexto permite identificar {resultado} para el proyecto."

explicacion: |
  El estudio sirve tanto para detectar oportunidades como amenazas.
```

## Sección: fondo-emergencia-diversificacion (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["fondo_emergencia", "vocabulario"]

enunciado: "¿Qué es un fondo de emergencia?"
tipo: mc
opciones_explicitas:
  - "Una suma de plata guardada aparte, para gastos imprevistos, priorizando poder sacarla rápido"
  - "El dinero que se invierte para hacer crecer el capital a largo plazo"
  - "El monto mínimo que exige un banco para abrir una cuenta"
respuesta: "Una suma de plata guardada aparte, para gastos imprevistos, priorizando poder sacarla rápido"

explicacion: |
  No es una inversión para crecer: es una reserva para lo inesperado,
  pensada para estar disponible cuando haga falta.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "vocabulario"]

enunciado: "¿Cuál es el principal beneficio de tener un fondo de emergencia armado?"
tipo: mc
opciones_explicitas:
  - "Evita tener que pedir un préstamo caro o vender una inversión en mal momento ante un gasto imprevisto"
  - "Genera el rendimiento más alto posible de todos los ahorros"
  - "Elimina por completo la posibilidad de tener un gasto imprevisto"
respuesta: "Evita tener que pedir un préstamo caro o vender una inversión en mal momento ante un gasto imprevisto"

explicacion: |
  Sin ese fondo, un imprevisto obliga a elegir entre dos opciones malas:
  endeudarse caro, o malvender otra inversión.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El fondo de emergencia prioriza estar disponible rápido y sin riesgo, aunque eso signifique un rendimiento más bajo que otras inversiones."

explicacion: |
  Ganar menos interés es el costo aceptado a cambio de poder usarlo en
  el momento exacto en que hace falta.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "calculo"]

variables:
  gasto_mensual: random(50, 500) * 1000
  meses_cobertura: uno_de([3, 4, 5, 6])

respuesta: gasto_mensual * meses_cobertura
tipo: input
tolerancia_abs: 0

enunciado: "Los gastos esenciales mensuales de una familia son ${gasto_mensual}. Si se recomienda tener {meses_cobertura} meses de cobertura, ¿cuánto debería tener ahorrado su fondo de emergencia?"

explicacion: |
  Se multiplica el gasto mensual esencial por la cantidad de meses de
  cobertura deseada.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "calculo"]

variables:
  gasto_mensual: random(50, 500) * 1000
  meses_cobertura: uno_de([3, 4, 5, 6])
  monto_ahorrado: gasto_mensual * meses_cobertura

respuesta: meses_cobertura
tipo: input
tolerancia_abs: 0.1

enunciado: "Una familia tiene ${monto_ahorrado} ahorrados, y gasta ${gasto_mensual} por mes en lo esencial. ¿Cuántos meses de cobertura le da ese fondo de emergencia?"

explicacion: |
  Se divide el monto ahorrado por el gasto mensual esencial.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["fondo_emergencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El fondo de emergencia no es lo mismo que una inversión pensada para hacer crecer el capital a largo plazo."

explicacion: |
  Tienen objetivos distintos: uno busca estar disponible ante lo
  imprevisto, el otro busca crecer con el tiempo.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Usar el fondo de emergencia ante un gasto imprevisto evita tener que pedir un préstamo a una tasa de interés alta, como la de una tarjeta de crédito."

explicacion: |
  Es plata que ya estaba separada para ese fin, sin necesidad de
  endeudarse.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["fondo_emergencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Sin un fondo de emergencia, un gasto imprevisto puede forzar a vender otra inversión justo cuando conviene menos hacerlo (por ejemplo, con esa inversión en baja)."

explicacion: |
  El fondo de emergencia evita quedar obligado a vender algo en el peor
  momento posible.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["fondo_emergencia", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El fondo de emergencia se guarda en algo de fácil y rápido acceso, no en un instrumento difícil o lento de convertir en efectivo."

explicacion: |
  Si la plata no está disponible cuando hace falta, no cumple su
  función de fondo de emergencia.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["diversificacion", "vocabulario"]

enunciado: "¿Qué es diversificar una inversión?"
tipo: mc
opciones_explicitas:
  - "Repartir el dinero entre varias inversiones distintas, en vez de ponerlo todo en una sola"
  - "Elegir la inversión con el rendimiento esperado más alto posible"
  - "Cambiar de inversión constantemente para aprovechar cada oportunidad"
respuesta: "Repartir el dinero entre varias inversiones distintas, en vez de ponerlo todo en una sola"

explicacion: |
  Es la idea de "no poner todos los huevos en la misma canasta".
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["diversificacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Diversificar reduce el riesgo total de una cartera de inversiones, sin necesariamente reducir su valor esperado."

explicacion: |
  Es uno de los pocos "beneficios gratis" en finanzas: bajar el riesgo
  sin sacrificar el promedio esperado.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["diversificacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "\"No poner todos los huevos en la misma canasta\" es una forma popular de resumir la idea de diversificación."

explicacion: |
  Si se rompe una sola canasta con todos los huevos, se pierden todos;
  repartidos en varias, un problema en una no arrastra al resto.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["diversificacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "La diversificación reduce más el riesgo cuando los activos elegidos no reaccionan siempre de la misma forma a los mismos eventos."

explicacion: |
  Si dos activos siempre suben y bajan exactamente igual, combinarlos no
  reduce nada el riesgo.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "calculo"]

variables:
  p_sol: random(30, 70)
  ganancia_a_sol: random(30, 60) * 1000
  ganancia_a_lluvia: random(0, 15) * 1000

respuesta: (p_sol / 100) * ganancia_a_sol + (1 - p_sol / 100) * ganancia_a_lluvia
tipo: input
tolerancia_abs: 1

enunciado: "Una heladería gana ${ganancia_a_sol} en un día soleado y ${ganancia_a_lluvia} en un día lluvioso. La probabilidad de que un día sea soleado es {p_sol}%. ¿Cuál es la ganancia esperada de la heladería?"

pasos:
  - "E(heladería) = {p_sol/100} × {ganancia_a_sol} + {1 - p_sol/100} × {ganancia_a_lluvia}"

explicacion: |
  Se pondera cada resultado posible por su probabilidad, igual que
  cualquier valor esperado.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "calculo"]

variables:
  p_sol: random(30, 70)
  ganancia_b_sol: random(0, 15) * 1000
  ganancia_b_lluvia: random(30, 60) * 1000

respuesta: (p_sol / 100) * ganancia_b_sol + (1 - p_sol / 100) * ganancia_b_lluvia
tipo: input
tolerancia_abs: 1

enunciado: "Una fábrica de paraguas gana ${ganancia_b_sol} en un día soleado y ${ganancia_b_lluvia} en un día lluvioso. La probabilidad de que un día sea soleado es {p_sol}%. ¿Cuál es la ganancia esperada de la fábrica?"

pasos:
  - "E(paraguas) = {p_sol/100} × {ganancia_b_sol} + {1 - p_sol/100} × {ganancia_b_lluvia}"

explicacion: |
  Es la misma fórmula que en la heladería, con los resultados invertidos
  entre día soleado y lluvioso.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "calculo"]

variables:
  p_sol: random(30, 70)
  ganancia_a_sol: random(30, 60) * 1000
  ganancia_a_lluvia: random(0, 15) * 1000
  ganancia_b_sol: random(0, 15) * 1000
  ganancia_b_lluvia: random(30, 60) * 1000
  esperado_a: (p_sol / 100) * ganancia_a_sol + (1 - p_sol / 100) * ganancia_a_lluvia
  esperado_b: (p_sol / 100) * ganancia_b_sol + (1 - p_sol / 100) * ganancia_b_lluvia

respuesta: 0.5 * esperado_a + 0.5 * esperado_b
tipo: input
tolerancia_abs: 1

enunciado: "Con la heladería (ganancia esperada ${redondear(esperado_a, 2)}) y la fábrica de paraguas (ganancia esperada ${redondear(esperado_b, 2)}), alguien invierte la mitad de su plata en cada una. ¿Cuál es la ganancia esperada del portafolio combinado?"

pasos:
  - "E(portafolio) = 0,5 × {redondear(esperado_a, 2)} + 0,5 × {redondear(esperado_b, 2)}"

explicacion: |
  El valor esperado del portafolio es el promedio ponderado de los
  valores esperados de cada activo.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "intermedio"
  tags: ["diversificacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El valor esperado de un portafolio con varios activos es siempre el promedio ponderado (según cuánto se invirtió en cada uno) de los valores esperados individuales — eso no cambia por diversificar."

explicacion: |
  Lo que baja al diversificar es el riesgo, no el valor esperado
  combinado.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "calculo"]

variables:
  p_sol: random(30, 70)
  ganancia_a_sol: random(30, 60) * 1000
  ganancia_a_lluvia: random(0, 15) * 1000
  esperado_a: (p_sol / 100) * ganancia_a_sol + (1 - p_sol / 100) * ganancia_a_lluvia
  varianza_a: (p_sol / 100) * (ganancia_a_sol - esperado_a) ^ 2 + (1 - p_sol / 100) * (ganancia_a_lluvia - esperado_a) ^ 2

respuesta: sqrt(varianza_a)
tipo: input
tolerancia_abs: 3

enunciado: "Invirtiendo todo en la heladería (ganancia esperada ${redondear(esperado_a, 2)}, {p_sol}% de probabilidad de día soleado), ¿cuál es el desvío estándar de ese resultado?"

explicacion: |
  Se calcula la varianza ponderando cada resultado posible según su
  distancia al valor esperado, y se toma la raíz cuadrada.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "calculo"]

variables:
  p_sol: random(30, 70)
  ganancia_a_sol: random(30, 60) * 1000
  ganancia_a_lluvia: random(0, 15) * 1000
  ganancia_b_sol: random(0, 15) * 1000
  ganancia_b_lluvia: random(30, 60) * 1000
  resultado_sol: 0.5 * ganancia_a_sol + 0.5 * ganancia_b_sol
  resultado_lluvia: 0.5 * ganancia_a_lluvia + 0.5 * ganancia_b_lluvia
  esperado_portafolio: (p_sol / 100) * resultado_sol + (1 - p_sol / 100) * resultado_lluvia
  varianza_portafolio: (p_sol / 100) * (resultado_sol - esperado_portafolio) ^ 2 + (1 - p_sol / 100) * (resultado_lluvia - esperado_portafolio) ^ 2

respuesta: sqrt(varianza_portafolio)
tipo: input
tolerancia_abs: 3

enunciado: "Invirtiendo la mitad en la heladería y la mitad en la fábrica de paraguas, ¿cuál es el desvío estándar del resultado combinado?"

explicacion: |
  Como las dos ganan en climas opuestos, el resultado combinado varía
  mucho menos entre un día soleado y uno lluvioso que cualquiera de las
  dos por separado.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "avanzado"
  tags: ["diversificacion", "comparacion"]

variables:
  p_sol: random(30, 70)
  ganancia_a_sol: random(30, 60) * 1000
  ganancia_a_lluvia: random(0, 15) * 1000
  ganancia_b_sol: random(0, 15) * 1000
  ganancia_b_lluvia: random(30, 60) * 1000
  esperado_a: (p_sol / 100) * ganancia_a_sol + (1 - p_sol / 100) * ganancia_a_lluvia
  varianza_a: (p_sol / 100) * (ganancia_a_sol - esperado_a) ^ 2 + (1 - p_sol / 100) * (ganancia_a_lluvia - esperado_a) ^ 2
  resultado_sol: 0.5 * ganancia_a_sol + 0.5 * ganancia_b_sol
  resultado_lluvia: 0.5 * ganancia_a_lluvia + 0.5 * ganancia_b_lluvia
  esperado_portafolio: (p_sol / 100) * resultado_sol + (1 - p_sol / 100) * resultado_lluvia
  varianza_portafolio: (p_sol / 100) * (resultado_sol - esperado_portafolio) ^ 2 + (1 - p_sol / 100) * (resultado_lluvia - esperado_portafolio) ^ 2

respuesta: (varianza_portafolio < varianza_a)
tipo: vf

enunciado: "Comparando invertir todo en la heladería contra invertir la mitad en la heladería y la mitad en la fábrica de paraguas, ¿el portafolio combinado tiene menor riesgo (menor varianza) que invertir todo en la heladería sola?"

explicacion: |
  Como ganan en climas opuestos, combinarlas amortigua la variación
  total — el portafolio combinado queda más estable que cualquiera de
  las dos por separado.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["diversificacion", "orden"]

tipo: ordenar
enunciado: "Ordená estas tres formas de invertir de menor a mayor riesgo."
opciones_explicitas:
  - "Todo el dinero en las acciones de una sola empresa"
  - "Plazo fijo a tasa fija"
  - "Portafolio diversificado en muchas empresas distintas"
respuesta_orden: ["Plazo fijo a tasa fija", "Portafolio diversificado en muchas empresas distintas", "Todo el dinero en las acciones de una sola empresa"]

explicacion: |
  El plazo fijo prácticamente no tiene riesgo; diversificar reduce el
  riesgo frente a apostar todo a una sola empresa, pero sigue teniendo
  más riesgo que un instrumento garantizado.
```

```
metadata:
  materia: "economia"
  tema: "fondo_emergencia_diversificacion"
  nivel: "basico"
  tags: ["fondo_emergencia", "diversificacion", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El fondo de emergencia es la reserva líquida y de bajo riesgo para lo imprevisto; la diversificación es repartir el resto de las inversiones para reducir el riesgo total sin sacrificar el valor esperado — las dos son piezas del mismo objetivo: manejar mejor el riesgo de la vida financiera de una persona."

explicacion: |
  Es la idea central de todo el tema.
```

## Sección: indices-financieros (22 preguntas)

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["liquidez", "corriente"]

variables:
  ac: random(100, 500)
  pc: random(50, 150)
  resultado: redondear(ac / pc, 2)

respuesta: "{resultado}"
tipo: input

enunciado: "Una empresa tiene Activos Corrientes de {ac} y Pasivos Corrientes de {pc}. Calculá el índice de Liquidez Corriente. Redondeá a 2 decimales."

explicacion: |
  La Liquidez Corriente se calcula dividiendo los Activos Corrientes entre los Pasivos Corrientes.
  Fórmula: AC / PC.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rotacion", "stock"]

variables:
  costo: random(1000, 5000)
  inventario: random(100, 500)
  resultado: redondear(costo / inventario, 2)

respuesta: "{resultado}"
tipo: input

enunciado: "El Costo de Mercadería Vendida es {costo} y el Inventario Promedio es {inventario}. Calculá la rotación de stock."

explicacion: |
  La rotación de stock mide cuántas veces se renueva el inventario. Se calcula como Costo de Mercadería Vendida / Inventario Promedio.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["balance", "activos"]

variables:
  ac: random(100, 300)
  af: random(400, 900)
  resultado: ac + af

respuesta: "{resultado}"
tipo: input

enunciado: "Los Activos Corrientes son {ac} y los Activos Fijos son {af}. ¿Cuál es el total de Activos?"

explicacion: |
  Activos Totales = Activos Corrientes + Activos Fijos.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["liquidez", "acida"]

variables:
  ac: random(200, 500)
  inventario: random(50, 150)
  pc: random(100, 300)
  numerador: ac - inventario
  resultado: redondear(numerador / pc, 2)

respuesta: "{resultado}"
tipo: input

enunciado: "Activos Corrientes: {ac}, Inventario: {inventario}, Pasivos Corrientes: {pc}. Calculá la Liquidez Ácida."

explicacion: |
  Liquidez Ácida = (Activos Corrientes - Inventario) / Pasivos Corrientes.
  Elimina el inventario porque es el activo menos líquido.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["conceptos", "costo"]

variables:
  tasa: random(5, 15)
  monto: random(1000, 5000)
  interes: redondear(monto * (tasa / 100), 0)

respuesta: "{interes}"
tipo: completar

enunciado: "Si inviertes {monto} a una tasa del {tasa}% anual, el rendimiento futuro es {interes}. Este monto representa el costo de oportunidad de no tener el dinero disponible hoy."

explicacion: |
  El costo de oportunidad en finanzas suele referirse al retorno perdido al elegir una alternativa sobre otra. Aquí se calcula el interés generado.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rotacion", "cuentas_cobrar"]

variables:
  ventas_credito: random(10000, 50000)
  cuentas_cobrar: random(1000, 5000)
  dias: 360
  rotacion: ventas_credito / cuentas_cobrar
  resultado: floor(dias / rotacion)

respuesta: "{resultado}"
tipo: input

enunciado: "Ventas a Crédito: {ventas_credito}, Cuentas por Cobrar: {cuentas_cobrar}. Usando un año de 360 días, calculá el período promedio de cobro en días."

explicacion: |
  Período de Cobro = 360 / (Ventas a Crédito / Cuentas por Cobrar).
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "avanzado"
  tags: ["valor_tiempo", "vp"]

variables:
  vf: random(1000, 5000)
  tasa: random(5, 10)
  anios: uno_de([1, 2, 3])
  resultado: redondear(vf / ((1 + tasa/100) ^ anios), 2)

respuesta: "{resultado}"
tipo: input

enunciado: "Un valor futuro de {vf} dentro de {anios} años, con una tasa de descuento del {tasa}%, tiene un Valor Presente de aproximadamente:"

explicacion: |
  VP = VF / (1 + r)^n.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["liquidez", "efectivo"]

variables:
  caja: random(100, 500)
  bancos: random(200, 800)
  resultado: caja + bancos

respuesta: "{resultado}"
tipo: input

enunciado: "Caja: {caja}, Bancos: {bancos}. ¿Cuál es el total de Efectivo y Equivalentes de Efectivo?"

explicacion: |
  Efectivo = Caja + Bancos. Es el activo más líquido.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "avanzado"
  tags: ["costo", "capital"]

variables:
  dividendo: random(2, 10)
  precio: random(20, 50)
  crecimiento: random(2, 8)
  costo: redondear((dividendo / precio) + (crecimiento / 100), 4)

respuesta: "{costo}"
tipo: input

enunciado: "Dividendo esperado: {dividendo}, Precio de la acción: {precio}, Tasa de crecimiento: {crecimiento}%. Calculá el Costo de Capital Accionario (Modelo Gordon)."

explicacion: |
  Ke = (D1 / P0) + g.
  Donde D1 es dividendo, P0 precio y g tasa de crecimiento.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["costos", "equilibrio"]

variables:
  costos_fijos: random(1000, 5000)
  precio: random(100, 300)
  costo_variable: random(40, 80)
  resultado: floor(costos_fijos / (precio - costo_variable))

respuesta: "{resultado}"
tipo: input

enunciado: "Costos Fijos: {costos_fijos}, Precio de Venta: {precio}, Costo Variable Unitario: {costo_variable}. Calculá el punto de equilibrio en unidades."

explicacion: |
  Punto de Equilibrio = Costos Fijos / (Precio - Costo Variable Unitario).
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["valor_tiempo", "vf"]

variables:
  pv: random(1000, 5000)
  tasa: random(5, 10)
  anios: uno_de([1, 2, 3])
  resultado: redondear(pv * ((1 + tasa/100) ^ anios), 2)

respuesta: "{resultado}"
tipo: input

enunciado: "Si inviertes {pv} hoy a una tasa del {tasa}% anual durante {anios} años, el Valor Futuro será:"

explicacion: |
  VF = PV * (1 + r)^n.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["liquidez", "inmediata"]

variables:
  efectivo: random(50, 200)
  pc: random(100, 400)
  resultado: redondear(efectivo / pc, 2)

respuesta: "{resultado}"
tipo: input

enunciado: "Efectivo y Equivalentes: {efectivo}, Pasivos Corrientes: {pc}. Calculá la Liquidez Inmediata."

explicacion: |
  Liquidez Inmediata = Efectivo / Pasivos Corrientes.
  Mide la capacidad de pago sin vender inventario.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["recuperacion", "inversion"]

variables:
  inversion: random(5000, 15000)
  flujo_anual: random(1000, 3000)
  resultado: floor(inversion / flujo_anual)

respuesta: "{resultado}"
tipo: input

enunciado: "Inversión Inicial: {inversion}, Flujo de Caja Anual Constante: {flujo_anual}. Calculá el periodo de recuperación simple en años."

explicacion: |
  Periodo de Recuperación = Inversión Inicial / Flujo de Caja Anual.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "avanzado"
  tags: ["wacc", "capital"]

variables:
  deuda_ratio: 0.4
  eq_ratio: 0.6
  costo_deuda: 0.08
  costo_equity: 0.12
  impuesto: 0.30
  wacc: redondear((deuda_ratio * costo_deuda * (1 - impuesto)) + (eq_ratio * costo_equity), 4)

respuesta: "{wacc}"
tipo: input

enunciado: "Estructura de Capital: 40% Deuda, 60% Equity. Costo Deuda: 8%, Costo Equity: 12%, Impuesto: 30%. Calculá el WACC."

explicacion: |
  WACC = (Wd * Kd * (1-T)) + (We * Ke).
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["liquidez", "interpretacion"]

variables:
  ac: random(100, 300)
  pc: random(301, 500)

respuesta: falso
tipo: vf

enunciado: "Si una empresa tiene Activos Corrientes de {ac} y Pasivos Corrientes de {pc}, su Liquidez Corriente indica que tiene holgura para pagar sus deudas a corto plazo."

explicacion: |
  Falso. Al ser {ac} < {pc}, el índice es menor a 1 ({redondear(ac/pc, 2)}), lo que indica dificultad potencial para cubrir obligaciones a corto plazo.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rotacion", "eficiencia"]

variables:
  costo_ventas: random(1000, 5000)
  inventario: random(100, 500)

respuesta: verdadero
tipo: vf

enunciado: "Un índice de rotación de inventario alto indica que la empresa vende su mercadería rápidamente y la mantiene poco tiempo en almacén."

explicacion: |
  Verdadero. Una rotación alta significa que el inventario se renueva frecuentemente, lo que suele ser un signo de buena gestión y demanda.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["estructura", "riesgo"]

variables:
  ratio: uno_de([0.3, 0.4, 0.5, 0.6, 0.7])

respuesta: falso
tipo: vf

enunciado: "Un ratio de endeudamiento del {ratio} se considera generalmente de muy bajo riesgo financiero para cualquier tipo de empresa."

explicacion: |
  Falso. Un ratio de {ratio} ({ratio*100}%) indica que el 40-70% de los activos está financiado con deuda, lo que representa un nivel de riesgo moderado a alto, dependiendo del sector.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["rentabilidad", "interpretacion"]

variables:
  margen: uno_de([0.05, 0.1, 0.15, 0.2, 0.3])

respuesta: verdadero
tipo: vf

enunciado: "Un margen neto del {margen*100}% significa que por cada peso vendido, la empresa se queda con {redondear(margen*100, 1)} centavos de ganancia después de todos los gastos."

explicacion: |
  Verdadero. El margen neto refleja la eficiencia global de la empresa en la conversión de ventas en ganancias.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["estructura", "riesgo"]

variables:
  ratio: uno_de([0.5, 0.8, 1.2, 1.5, 2.0])

respuesta: falso
tipo: vf

enunciado: "Un ratio Deuda/Patrimonio de {ratio} indica que la empresa está financiada principalmente con recursos propios (patrimonio)."

explicacion: |
  Falso. Si el ratio es mayor a 1 (como {ratio}), significa que la deuda es mayor que el patrimonio, por lo que la financiación es principalmente ajena.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "basico"
  tags: ["rentabilidad", "interpretacion"]

variables:
  margen: uno_de([0.05, 0.1, 0.15, 0.2, 0.3])

respuesta: verdadero
tipo: vf

enunciado: "Un margen operativo del {margen*100}% indica la eficiencia de la empresa en la gestión de sus costos y gastos operativos antes de impuestos e intereses."

explicacion: |
  Verdadero. El margen operativo refleja la rentabilidad del negocio principal, excluyendo efectos financieros y tributarios.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rentabilidad", "interpretacion"]

variables:
  roe: uno_de([0.05, 0.1, 0.15, 0.2, 0.3])

respuesta: verdadero
tipo: vf

enunciado: "Un ROE del {roe*100}% indica que por cada peso invertido por los accionistas, la empresa generó {redondear(roe*100, 1)} centavos de ganancia."

explicacion: |
  Verdadero. El ROE es una medida clave de la rentabilidad desde la perspectiva del accionista.
```

```
metadata:
  materia: "economia"
  tema: "indices_financieros"
  nivel: "intermedio"
  tags: ["rotacion", "interpretacion"]

variables:
  rotacion: uno_de([0.5, 1.0, 1.5, 2.0, 3.0])

respuesta: verdadero
tipo: vf

enunciado: "Una rotación de activo total de {rotacion} indica que la empresa genera {rotacion} pesos de ventas por cada peso de activo que posee."

explicacion: |
  Verdadero. Este ratio refleja la eficiencia en el uso de los activos para generar ingresos.
```
