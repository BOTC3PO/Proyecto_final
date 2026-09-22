# Examen jefe — [PENDIENTE #781]

> Logro #781. [PENDIENTE: descripción del logro]. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas (orden por conocimientos previos, no alfabético — ver `../../examen-jefe-REDISEÑO-PLANIFICACION.md`). **137 preguntas totales** en 5/5 secciones.

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

## Sección: default-deuda (21 preguntas)

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es un default de deuda pública?"
tipo: mc
opciones_explicitas:
  - "Cuando un Estado no cumple con los pagos comprometidos de su deuda (interés, capital, o ambos)"
  - "Cuando un Estado paga toda su deuda antes de lo previsto"
  - "Cuando un Estado sube los impuestos para financiar su deuda"
respuesta: "Cuando un Estado no cumple con los pagos comprometidos de su deuda (interés, capital, o ambos)"

explicacion: |
  Es la definición central del tema.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Por qué puede ocurrir un default?"
tipo: mc
opciones_explicitas:
  - "Porque el Estado no consigue el dinero o la moneda extranjera necesaria, o porque decide no pagar"
  - "Sólo puede ocurrir por un error administrativo, nunca por decisión ni por falta de fondos"
  - "Los Estados nunca entran en default: sólo les pasa a las empresas privadas"
respuesta: "Porque el Estado no consigue el dinero o la moneda extranjera necesaria, o porque decide no pagar"

explicacion: |
  Son las dos razones centrales mencionadas en la teoría.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un default no siempre afecta a toda la deuda de un país por igual: puede ser sólo de deuda externa, sólo de deuda interna, o de ambas."

explicacion: |
  Es la razón por la que este tema depende de entender los dos tipos
  de deuda por separado.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "problema"]

enunciado: "Un país deja de pagarle a sus acreedores extranjeros, pero sigue pagando con normalidad a los acreedores locales de deuda en moneda propia. ¿Qué tipo de default es este?"
tipo: mc
opciones_explicitas:
  - "Default de deuda externa exclusivamente"
  - "Default de deuda interna exclusivamente"
  - "No es un default: es una reestructuración automática"
respuesta: "Default de deuda externa exclusivamente"

explicacion: |
  Sólo se dejó de pagar a los acreedores de afuera: es un default
  parcial, sólo de la deuda externa.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué suele pasar con el acceso de un país al crédito internacional después de un default?"
tipo: mc
opciones_explicitas:
  - "Se vuelve mucho más difícil y más caro volver a pedir prestado"
  - "Mejora automáticamente, porque el país ya no debe nada"
  - "No tiene ningún efecto sobre el crédito futuro"
respuesta: "Se vuelve mucho más difícil y más caro volver a pedir prestado"

explicacion: |
  Los prestamistas exigen una tasa más alta para compensar el riesgo
  mayor que perciben tras un default.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es una \"reestructuración\" de deuda, después de un default?"
tipo: mc
opciones_explicitas:
  - "Una negociación con los acreedores para pagar menos del monto original (quita), extender los plazos, o ambas cosas"
  - "El pago inmediato y completo de toda la deuda original"
  - "La cancelación automática de la deuda sin ninguna negociación"
respuesta: "Una negociación con los acreedores para pagar menos del monto original (quita), extender los plazos, o ambas cosas"

explicacion: |
  Es el mecanismo habitual para salir de un default y volver a tener
  una relación de pago con los acreedores.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Qué es una \"quita\", en el contexto de una reestructuración de deuda?"
tipo: mc
opciones_explicitas:
  - "Que los acreedores acepten cobrar menos del monto originalmente pactado"
  - "Que el Estado pague el 100% de lo que debía, sin ningún descuento"
  - "Un impuesto nuevo que se cobra a los acreedores"
respuesta: "Que los acreedores acepten cobrar menos del monto originalmente pactado"

explicacion: |
  Es uno de los dos componentes centrales de una reestructuración,
  junto con la extensión de plazos.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "calculo"]

variables:
  monto_original: random(1, 20) * 100
  quita_pct: uno_de([20, 25, 30, 50])

respuesta: monto_original * (1 - quita_pct / 100)
tipo: input
tolerancia_abs: 1

enunciado: "Un país reestructura un bono de U$S {monto_original} millones con una quita del {quita_pct}%. ¿Cuántos millones de dólares terminan cobrando los acreedores?"

explicacion: |
  Con una quita del X%, los acreedores cobran el (100 - X)% del monto
  original.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "En un default de deuda externa, ¿qué puede pasar con los acreedores que NO aceptan la reestructuración?"
tipo: mc
opciones_explicitas:
  - "Pueden llevar el reclamo a tribunales extranjeros, buscando cobrar el monto original por esa vía legal"
  - "Automáticamente pierden todo derecho a reclamar cualquier cosa"
  - "El Estado está obligado por ley internacional a pagarles el doble"
respuesta: "Pueden llevar el reclamo a tribunales extranjeros, buscando cobrar el monto original por esa vía legal"

explicacion: |
  Es un riesgo real y específico de la deuda externa, que no aplica de
  la misma forma a la deuda interna.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿En qué año declaró Argentina un default de su deuda externa, en medio de una crisis económica más amplia?"
tipo: mc
opciones_explicitas:
  - "2001"
  - "1991"
  - "2015"
respuesta: "2001"

explicacion: |
  Es el ejemplo histórico real citado en la teoría.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Después del default de 2001, Argentina negoció una reestructuración con la mayoría de sus acreedores (con una quita importante), mientras que un grupo que no aceptó llevó el reclamo a tribunales de Estados Unidos."

explicacion: |
  Es el desenlace real de ese caso histórico, presentado con
  neutralidad: negociación con la mayoría, litigio con la minoría que
  no aceptó.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Este tema explica la mecánica de qué pasa en un default (consecuencias, reestructuración, litigios), sin evaluar si la decisión puntual de algún país de entrar en default fue correcta o no."

explicacion: |
  Es el mismo criterio de neutralidad ya aplicado a otros temas
  sensibles de esta materia (ver el bloque de corrientes de
  pensamiento económico, `../liberalismo-clasico-y-escuela-austriaca/`
  y afines).
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "Cuando se informa que \"las calificadoras de riesgo bajaron la nota de un país\", ¿qué suelen estar reflejando?"
tipo: mc
opciones_explicitas:
  - "Un default reciente o una mayor probabilidad de que ocurra uno"
  - "Que el país acaba de tener superávit comercial"
  - "Que el país bajó su tasa de interés de referencia"
respuesta: "Un default reciente o una mayor probabilidad de que ocurra uno"

explicacion: |
  Es la lectura habitual de un cambio en la calificación crediticia de
  un país.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un país que vuelve a pedir prestado después de un default suele pagar una tasa de interés más alta que antes, como consecuencia directa de la pérdida de confianza que generó ese default."

explicacion: |
  Es el costo futuro de haber entrado en default: no es gratis salir
  de un incumplimiento.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Aunque es menos común que el default de deuda externa, un default (o canje forzoso) de deuda interna también puede ocurrir."

explicacion: |
  Es la aclaración explícita de la teoría: el default no es exclusivo
  de la deuda externa.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "orden"]

tipo: ordenar
enunciado: "Ordená esta secuencia de un default y su resolución."
opciones_explicitas:
  - "El país recupera acceso al crédito, generalmente a una tasa más alta que antes"
  - "El Estado negocia una reestructuración (quita y/o extensión de plazos) con sus acreedores"
  - "El Estado no puede cumplir un pago comprometido de su deuda"
  - "Se declara el default (cese de pagos)"
respuesta_orden: ["El Estado no puede cumplir un pago comprometido de su deuda", "Se declara el default (cese de pagos)", "El Estado negocia una reestructuración (quita y/o extensión de plazos) con sus acreedores", "El país recupera acceso al crédito, generalmente a una tasa más alta que antes"]

explicacion: |
  Es el ciclo típico completo: incumplimiento, default, negociación, y
  el costo futuro de haber pasado por eso.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

enunciado: "¿Por qué este tema depende de entender tanto la deuda interna como la externa?"
tipo: mc
opciones_explicitas:
  - "Porque un default puede afectar a una, a la otra, o a ambas, con consecuencias y acreedores distintos en cada caso"
  - "Porque un default siempre afecta a las dos deudas exactamente igual"
  - "Porque la deuda interna y la externa son, en realidad, la misma cosa"
respuesta: "Porque un default puede afectar a una, a la otra, o a ambas, con consecuencias y acreedores distintos en cada caso"

explicacion: |
  Es la razón de la dependencia explicada al principio de la teoría.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "avanzado"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "El riesgo de litigios en tribunales extranjeros por parte de acreedores que no aceptan una reestructuración es un riesgo específico de la deuda externa."

explicacion: |
  La deuda interna, al estar bajo jurisdicción del propio país, no
  tiene ese mismo riesgo de litigio en tribunales de otro país.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "basico"
  tags: ["deuda_publica"]

tipo: completar
enunciado: "Completá: una reestructuración de deuda combina una ___ (pagar menos del monto original) con, muchas veces, una extensión de los plazos de pago."
respuestas_validas:
  - "quita"

explicacion: |
  Es el término central de una reestructuración.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "basico"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Un default es el cese de pagos de una deuda, que puede afectar a la deuda interna, la externa, o ambas, y que suele resolverse con una reestructuración negociada con los acreedores."

explicacion: |
  Es la idea central de todo el tema.
```

```
metadata:
  materia: "economia"
  tema: "default_deuda"
  nivel: "intermedio"
  tags: ["deuda_publica", "vocabulario"]

respuesta: verdadero
tipo: vf

enunciado: "Desde la balanza comercial hasta el default de deuda, toda esta sub-rama sigue el mismo hilo: cómo un país se relaciona económicamente con el resto del mundo, y qué puede salir bien o mal en esa relación."

explicacion: |
  Es el cierre conceptual de toda la sub-rama de Economía
  Internacional (`E33`-`E37`).
```

## Sección: tipos-de-proyecto (36 preguntas)

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "clasificación"]

variables:
  caso: "huerta comunitaria"

respuesta: "social"
tipo: input

enunciado: "Una {caso} se clasifica como un proyecto de tipo social."

explicacion: |
  Las huertas comunitarias buscan seguridad alimentaria y lazo social, no lucro.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "clasificación"]

variables:
  caso: "fábrica de calzado"

respuesta: "productivo"
tipo: input

enunciado: "Una {caso} se clasifica como un proyecto de tipo productivo."

explicacion: |
  La fabricación de bienes para la venta es la esencia del proyecto productivo.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["evaluación", "indicadores"]

variables:
  tipo_indicador: uno_de(["financieros", "sociales", "fisicos"])

respuesta: "sociales"
tipo: completar

enunciado: "Para proyectos sociales, los indicadores de {tipo_indicador} son prioritarios sobre los financieros."

explicacion: |
  El impacto real en la vida de las personas es la métrica clave.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["evaluación", "rentabilidad"]

variables:
  tipo_indicador: uno_de(["financieros", "sociales", "ambientales"])

respuesta: "financieros"
tipo: completar

enunciado: "En proyectos productivos, la rentabilidad se mide principalmente por indicadores {tipo_indicador}."

explicacion: |
  El balance de ganancias y pérdidas determina el éxito financiero.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["producto", "bien"]

variables:
  naturaleza: uno_de(["intangible", "intercambiable", "material"])

respuesta: "intangible"
tipo: completar

enunciado: "El 'producto' de un proyecto social suele ser un bienestar {naturaleza} o una mejora en la calidad de vida."

explicacion: |
  El beneficio social es a menudo intangible (ej. salud, educación) comparado con bienes físicos.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["producto", "mercado"]

variables:
  naturaleza: uno_de(["intangible", "intercambiable", "local"])

respuesta: "intercambiable"
tipo: completar

enunciado: "Los proyectos productivos crean bienes o servicios {naturaleza} en el mercado."

explicacion: |
  La capacidad de intercambio comercial define al producto productivo.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["beneficiarios", "comunidad"]

variables:
  grupo: uno_de(["sectores vulnerables", "inversores", "accionistas"])

respuesta: "sectores vulnerables"
tipo: completar

enunciado: "Los proyectos sociales buscan garantizar acceso a servicios a {grupo}."

explicacion: |
  El foco está en quienes tienen menos acceso a recursos básicos.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["beneficiarios", "clientes"]

variables:
  grupo: uno_de(["la comunidad", "el mercado", "el gobierno"])

respuesta: "el mercado"
tipo: completar

enunciado: "Los proyectos productivos buscan satisfacer las necesidades de {grupo} a través de la venta."

explicacion: |
  El cliente final es quien determina la viabilidad del proyecto productivo.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["temporalidad", "definición"]

variables:
  duracion: uno_de(["eterna", "temporal", "cíclica"])

respuesta: "temporal"
tipo: completar

enunciado: "Todo proyecto, sea social o productivo, tiene una duración {duracion} definida."

explicacion: |
  Los proyectos tienen inicio y fin claros, a diferencia de las operaciones continuas.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "salud"]

variables:
  proyecto: "campaña de vacunación"

respuesta: "social"
tipo: input

enunciado: "Una {proyecto} es un ejemplo típico de proyecto social."

explicacion: |
  La salud pública es un bien común que busca el bienestar colectivo.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "tecnología"]

variables:
  proyecto: "startup tecnológica"

respuesta: "productivo"
tipo: input

enunciado: "Una {proyecto} es un ejemplo típico de proyecto productivo."

explicacion: |
  Las startups buscan crear valor económico y escalar en el mercado.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["completar", "tejido social"]

variables:
  accion: uno_de(["debilitar", "fortalecer", "ignorar"])

respuesta: "fortalecer"
tipo: completar

enunciado: "Los proyectos sociales buscan {accion} el tejido social de la comunidad."

explicacion: |
  La cohesión social es un resultado deseado de las intervenciones sociales.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["completar", "costos"]

variables:
  accion: uno_de(["ignorar", "cubrir", "maximizar"])

respuesta: "cubrir"
tipo: completar

enunciado: "Los proyectos productivos deben generar ingresos suficientes para {accion} los costos de producción."

explicacion: |
  Cubrir costos es el primer paso para la sostenibilidad económica.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "avanzado"
  tags: ["completar", "escala"]

variables:
  escala: uno_de(["únicamente pequeña", "pequeña, mediana o gran", "exclusivamente internacional"])

respuesta: "pequeña, mediana o gran"
tipo: completar

enunciado: "Los proyectos productivos pueden ser de escala {escala}."

explicacion: |
  No hay límite de escala inherente al modelo productivo.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["completar", "necesidades"]

variables:
  tipo_necesidad: uno_de(["de lujo", "básicas", "exclusivas"])

respuesta: "básicas"
tipo: completar

enunciado: "Los proyectos sociales suelen enfocarse en resolver {tipo_necesidad} necesidades."

explicacion: |
  El foco está en lo esencial para la dignidad humana.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["proyecto_social", "definicion"]

variables:
  objetivo: uno_de(["bienestar_comunitario", "ganancia_economica", "produccion_masiva", "exportacion"])

respuesta: verdadero
tipo: vf

enunciado: "Los proyectos sociales buscan principalmente el {objetivo} de la comunidad, no el lucro directo."

explicacion: |
  Los proyectos sociales se definen por su objetivo de mejorar la calidad de vida y el bienestar de un grupo, a diferencia de los productivos que buscan ganancias.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["financiamiento", "proyecto_social"]

variables:
  fuente: uno_de(["ventas_en_mercado", "donaciones_y_recursos_publicos", "inversion_privada", "bancos_comerciales"])

respuesta: verdadero
tipo: vf

enunciado: "Es característico que los proyectos sociales se financien comúnmente con {fuente}."

explicacion: |
  A diferencia de los proyectos productivos que dependen de la inversión privada o préstamos bancarios, los sociales suelen apoyarse en fondos públicos y donaciones.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["metricas", "proyecto_productivo"]

variables:
  indicador: uno_de(["impacto_social", "ganancia_financiera", "satisfaccion_vecinal", "cohesion_comunitaria"])

respuesta: verdadero
tipo: vf

enunciado: "En un proyecto productivo, el éxito se mide principalmente por la obtención de {indicador}."

explicacion: |
  La lógica central de los proyectos productivos es la sostenibilidad económica, por lo que la ganancia financiera es el indicador clave de viabilidad.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["definicion", "proyecto"]

variables:
  tipo_actividad: uno_de(["rutinaria", "repetitiva", "unica", "ciclica"])

respuesta: verdadero
tipo: vf

enunciado: "Un proyecto se distingue de la operación rutinaria porque es una iniciativa {tipo_actividad}."

explicacion: |
  La definición fundamental de proyecto implica que es una acción planificada, única y con un fin específico, no una actividad repetitiva.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["financiamiento", "proyecto_social"]

variables:
  a: "Recursos públicos y donaciones"
  b: "Inversión de capital privado"
  c: "Préstamos bancarios tradicionales"
  d: "Ventas al por mayor"

respuesta: a
tipo: mc

enunciado: "¿Cuál es la fuente de financiamiento típica de un proyecto social?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  Los proyectos sociales suelen financiarse con recursos públicos, impuestos o donaciones, no con capital privado de retorno.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["financiamiento", "proyecto_productivo"]

variables:
  a: "Donaciones internacionales"
  b: "Impuestos municipales"
  c: "Inversión privada y préstamos"
  d: "Subsidios gubernamentales"

respuesta: c
tipo: mc

enunciado: "¿De dónde obtienen usualmente los recursos los proyectos productivos?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  Los proyectos productivos buscan rentabilidad y se financian mediante inversión privada y créditos para cubrir costos y generar ganancias.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["metricas", "proyecto_social"]

variables:
  a: "Ganancia neta"
  b: "Cuota de mercado"
  c: "Impacto social"
  d: "Retorno de inversión"

respuesta: c
tipo: mc

enunciado: "En un proyecto social, el éxito se evalúa principalmente por:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  El éxito social se mide por indicadores de impacto (ej. familias beneficiadas), no por indicadores financieros.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["logica", "proyecto_productivo"]

variables:
  a: "Solidaridad"
  b: "Sostenibilidad económica"
  c: "Ayuda humanitaria"
  d: "Voluntariado"

respuesta: b
tipo: mc

enunciado: "¿Cuál es la lógica central de los proyectos productivos?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  La sostenibilidad económica es clave: deben generar ingresos para cubrir costos y obtener beneficios.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "proyecto_social"]

variables:
  caso: "huerta_comunitaria"

respuesta: verdadero
tipo: vf

enunciado: "Una huerta comunitaria es un ejemplo clásico de proyecto social."

explicacion: |
  Las huertas comunitarias buscan acceso a alimentos y cohesión social, no lucro, siendo un ejemplo típico de proyecto social.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "proyecto_productivo"]

variables:
  caso: "fabrica_calzado"

respuesta: verdadero
tipo: vf

enunciado: "Una fábrica de calzado que busca vender en el mercado es un proyecto productivo."

explicacion: |
  Al generar bienes para la comercialización y obtener ganancias, se clasifica como proyecto productivo.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["beneficiarios", "proyecto_social"]

variables:
  a: "Accionistas"
  b: "Socios inversores"
  c: "Comunidad o grupo vulnerable"
  d: "Clientes minoristas"

respuesta: c
tipo: mc

enunciado: "¿Quiénes son los principales beneficiarios directos de un proyecto social?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  El foco está en el grupo o comunidad, especialmente aquellos con necesidades básicas no cubiertas.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["viabilidad", "proyecto_productivo"]

variables:
  a: "Voluntad política"
  b: "Mercado"
  c: "Donantes externos"
  d: "Voluntarios"

respuesta: b
tipo: mc

enunciado: "En los proyectos productivos, ¿quién es el 'juez principal' de la viabilidad?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  El mercado determina si el producto es deseado y si el proyecto es financieramente viable.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["escala", "proyecto_productivo"]

variables:
  a: "Solo grandes corporaciones"
  b: "Solo microempresas"
  c: "Pequeña, mediana o gran escala"
  d: "Exclusivamente escala local"

respuesta: c
tipo: mc

enunciado: "Los proyectos productivos pueden ser de:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  No hay restricción de escala; pueden ser emprendimientos individuales hasta grandes industrias.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["metricas", "proyecto_social"]

variables:
  afirmacion: "medicion_unicamente_financiera"

respuesta: falso
tipo: vf

enunciado: "El éxito de un proyecto social se mide únicamente por indicadores financieros."

explicacion: |
  Se mide por indicadores de impacto social, como bienestar o acceso a derechos, no solo dinero.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["objetivo", "proyecto_social"]

variables:
  a: "Maximizar dividendos"
  b: "Transformar la realidad comunitaria"
  c: "Aumentar la cuota de mercado"
  d: "Reducir costos operativos"

respuesta: b
tipo: mc

enunciado: "¿Qué buscan transformar los proyectos sociales?"
opciones_explicitas: [a, b, c, d]

explicacion: |
  Su objetivo es mejorar la calidad de vida y la realidad social de un grupo.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "intermedio"
  tags: ["ganancias", "proyecto_productivo"]

variables:
  a: "Distribuir entre voluntarios"
  b: "Reinvertir o distribuir entre socios"
  c: "Donar completamente a ONGs"
  d: "Guardar en cuentas sin interés"

respuesta: b
tipo: mc

enunciado: "Las ganancias de un proyecto productivo suelen destinarse a:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  El beneficio obtenido permite reinvertir en el proyecto o distribuirse entre los socios/inversores.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["ejemplo", "proyecto_social"]

variables:
  caso: "acceso_salud"

respuesta: verdadero
tipo: vf

enunciado: "Garantizar acceso a salud para sectores vulnerables es un objetivo de proyectos sociales."

explicacion: |
  Los proyectos sociales cubren necesidades básicas como salud, educación y vivienda.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "avanzado"
  tags: ["financiamiento", "complejidad"]

variables:
  a: "Exclusivamente público"
  b: "Exclusivamente privado"
  c: "Público, donaciones o fondos internacionales"
  d: "Solo ventas al consumidor"

respuesta: c
tipo: mc

enunciado: "Los proyectos sociales pueden financiarse con:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  La combinación de fondos públicos, donaciones y fondos internacionales es común en el sector social.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["producto", "proyecto_productivo"]

variables:
  a: "No intercambiable"
  b: "Intercambiable en el mercado"
  c: "Solo para uso interno"
  d: "Exclusivo para el gobierno"

respuesta: b
tipo: mc

enunciado: "Los productos de un proyecto productivo son:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  Se generan bienes o servicios con el fin de ser comercializados e intercambiados.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "basico"
  tags: ["definicion", "proyecto"]

variables:
  afirmacion: "proyecto_rutinario"

respuesta: falso
tipo: vf

enunciado: "Un proyecto es una actividad rutinaria y repetitiva."

explicacion: |
  Los proyectos son iniciativas únicas, no rutinarias. Las actividades repetitivas son operaciones.
```

```
metadata:
  materia: "economia"
  tema: "tipos_de_proyecto"
  nivel: "avanzado"
  tags: ["contexto", "politicas_publicas"]

variables:
  a: "Ignorar ambos tipos"
  b: "Analizar críticamente ambos tipos"
  c: "Solo apoyar proyectos productivos"
  d: "Solo apoyar proyectos sociales"

respuesta: b
tipo: mc

enunciado: "Entender esta distinción ayuda a analizar críticamente:"
opciones_explicitas: [a, b, c, d]

explicacion: |
  Permite comprender cómo se organizan las iniciativas y las estrategias empresariales o públicas.
```

## Sección: tipos-de-sociedades (27 preguntas)

```
metadata:
  materia: "economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["definicion", "conceptos_basicos"]

variables:
  num_socios_min: 2

respuesta: "dos"
tipo: input

enunciado: "Para constituir una sociedad, se requiere como mínimo la participación de {num_socios_min} personas."

explicacion: |
  Por definición legal y económica, una sociedad implica la reunión de dos o más personas que aportan bienes o trabajo para realizar una actividad económica común. El comercio individual, en cambio, es ejercido por una sola persona.
```

```
metadata:
  materia: "economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["utilidades", "reparto"]

variables:
  total_utilidad: random(100000, 1000000)
  porcentaje_socio_a: random(30, 60)
  porcentaje_socio_b: 100 - porcentaje_socio_a

respuesta: "{redondear(total_utilidad * porcentaje_socio_a / 100, 0)}"
tipo: input

enunciado: "Si una sociedad obtiene {total_utilidad} en utilidades y el Socio A tiene un {porcentaje_socio_a}% de participación, ¿cuánto le corresponde recibir (valor entero)?"

explicacion: |
  Las utilidades se reparten generalmente en proporción al capital aportado o según lo establecido en el contrato social. El cálculo es directo: Total * Porcentaje. Esto ilustra cómo la estructura societaria define el flujo de beneficios.
```

```
metadata:
  materia: "economía"
  tema: "tipos_de_sociedades"
  nivel: "avanzado"
  tags: ["gestion", "administracion"]

variables:
  tipo_sociedad: uno_de(["S.A.", "S.R.L."])

respuesta: "S.A."
tipo: completar

enunciado: "En la sociedad {tipo_sociedad}, es común que los propietarios (accionistas/socios) deleguen la administración diaria en un directorio o gerente profesional, separando la propiedad de la gestión."

explicacion: |
  En las S.A., especialmente las grandes, la propiedad (acciones) y la gestión (directorio) suelen estar separadas. En las S.R.L., es más frecuente que los socios participen directamente en la gestión o la controlen de forma más directa.
```

```
metadata:
  materia: "economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["srl", "socios"]

variables:
  min_socios: 2
  max_socios: 50

respuesta: "entre " + min_socios + " y " + max_socios
tipo: completar

enunciado: "La ley argentina establece que una S.R.L. debe tener un número de socios comprendido entre {min_socios} y {max_socios}."

explicacion: |
  La Ley General de Sociedades (y su precursora) regula que las S.R.L. deben tener entre 2 y 50 socios. Si quedan con uno solo, debe transformarse en sociedad unipersonal o disolverse. Si supera el límite, debe convertirse en S.A.
```

```
metadata:
  materia: "economía"
  tema: "tipos_de_sociedades"
  nivel: "avanzado"
  tags: ["sa", "inversion"]

variables:
  cantidad_inversores: random(10, 100)

respuesta: "muchos"
tipo: completar

enunciado: "Las S.A. son ideales cuando se necesita atraer a {cantidad_inversores} inversores que no participan en la gestión diaria."

explicacion: |
  La estructura accionaria permite dispersar la propiedad entre muchos inversores. Estos aportan capital pero delegan la gestión operativa en profesionales (directorios), lo que es crucial para proyectos que requieren grandes capitales pero no cuentan con la confianza personal entre todos los aportantes.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["sociedad", "definicion", "concepto"]

variables:
  socios: random(2, 5)

respuesta: "sociedad"
tipo: completar

enunciado: "Cuando {socios} o más personas deciden trabajar juntas para obtener ganancias, se constituyen en una ________."

explicacion: |
  La unión de dos o más personas con fines lucrativos se denomina sociedad. Esto permite reunir capitales y conocimientos.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["SRL", "responsabilidad", "limitada"]

variables:
  capital: random(100000, 500000)

respuesta: "limitado"
tipo: completar

enunciado: "En una S.R.L., la responsabilidad de los socios se limita al {capital} pesos que han aportado como capital."

explicacion: |
  La característica clave de la S.R.L. es que los socios no responden con su patrimonio personal, solo con lo aportado a la empresa.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["unipersonal", "patrimonio", "riesgo"]

variables:
  escenario: uno_de(["unipersonal", "SRL"])

respuesta: "todo su patrimonio personal"
tipo: completar

enunciado: "Si el negocio es de un comerciante unipersonal, responde por las deudas con {escenario}."

explicacion: |
  El comerciante unipersonal responde con todo su patrimonio personal. En cambio, en una S.R.L. la responsabilidad está limitada al capital aportado.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["capital", "participacion", "calculos"]

variables:
  capital_total: random(100, 1000) * 1000
  aporte_socio: random(10, 50) * 1000
  porcentaje: redondear((aporte_socio / capital_total) * 100, 0)

respuesta: porcentaje
tipo: input

enunciado: "Si el capital total de una S.R.L. es {capital_total} pesos y un socio aporta {aporte_socio} pesos, ¿qué porcentaje de la sociedad posee?"

explicacion: |
  El porcentaje se calcula dividiendo el aporte individual por el capital total y multiplicando por 100.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["SA", "inversion", "escala"]

variables:
  monto: random(1000000, 5000000)

respuesta: "Sociedad Anónima"
tipo: completar

enunciado: "Para un proyecto que requiere una inversión inicial de {monto} pesos y atrae a muchos inversores, la estructura más adecuada es una ________."

explicacion: |
  Las Sociedades Anónimas (S.A.) son ideales para grandes proyectos que requieren mucha inversión y permiten la negociación de acciones.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["gestion", "directores", "SA"]

variables:
  rol: uno_de(["accionistas", "directores"])

respuesta: "directores"
tipo: completar

enunciado: "En una S.A., los inversores suelen delegar la administración diaria en los {rol}."

explicacion: |
  En las S.A., los accionistas no participan necesariamente en la gestión diaria; esta queda a cargo de un directorio.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["ventajas", "recursos", "capital"]

variables:
  recurso: uno_de(["capitales", "conocimientos", "recursos"])

respuesta: "reunir"
tipo: completar

enunciado: "Una ventaja principal de la sociedad es la capacidad de ________ {recurso} de varios actores."

explicacion: |
  La sociedad permite reunir capitales, conocimientos y recursos de varios actores, facilitando proyectos de mayor envergadura.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["unipersonal", "definicion", "legal"]

variables:
  numero_socios: 1

respuesta: "una sola persona"
tipo: completar

enunciado: "La sociedad unipersonal permite que ________ constituya una sociedad, combinando flexibilidad y protección patrimonial."

explicacion: |
  La sociedad unipersonal es una figura legal que permite a una sola persona constituir una sociedad con patrimonio separado.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["identificacion", "responsabilidad", "SRL"]

variables:
  tipo_respuesta: uno_de(["limitada", "ilimitada"])

respuesta: "limitada"
tipo: completar

enunciado: "Si la responsabilidad de los socios es {tipo_respuesta} al capital aportado, es probable que se trate de una S.R.L."

explicacion: |
  La S.R.L. se caracteriza por la responsabilidad limitada de los socios al capital que han aportado.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["perdida", "capital", "SRL"]

variables:
  aporte: random(5000, 50000)

respuesta: aporte
tipo: input

enunciado: "En una S.R.L., si el socio aporta {aporte} pesos y la empresa quiebra con deudas impagables, ¿cuál es su pérdida máxima?"

explicacion: |
  En una S.R.L., la pérdida máxima del socio es el capital que aportó. No responde con su patrimonio personal.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["SA", "capital", "acciones"]

variables:
  capital: random(1000000, 10000000)

respuesta: "Sociedad Anónima"
tipo: completar

enunciado: "Una empresa con capital dividido en acciones y un monto superior a {capital} pesos suele constituirse como ________."

explicacion: |
  Las Sociedades Anónimas (S.A.) son el formato estándar para grandes capitales divididos en acciones negociables.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["accionistas", "gestion", "SA"]

variables:
  participacion: uno_de(["directa", "indirecta"])

respuesta: "indirecta"
tipo: completar

enunciado: "En una S.A., los accionistas suelen tener participación ________ en la gestión diaria."

explicacion: |
  Los accionistas de una S.A. generalmente no participan directamente en la gestión; delegan esa función a los directores.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["ganancias", "fines", "sociedad"]

variables:
  fin: uno_de(["lucro", "filantropia"])

respuesta: "lucro"
tipo: completar

enunciado: "Las sociedades se constituyen con el fin de obtener ________."

explicacion: |
  El propósito fundamental de una sociedad económica es la obtención de ganancias o lucro.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["utilidades", "distribucion", "calculos"]

variables:
  utilidad: random(100000, 1000000)
  porcentaje_socio: random(10, 50)
  monto_socio: redondear(utilidad * (porcentaje_socio / 100), 0)

respuesta: monto_socio
tipo: input

enunciado: "Si la sociedad obtuvo {utilidad} pesos de utilidad y un socio tiene el {porcentaje_socio}% de participación, ¿cuánto le corresponde?"

explicacion: |
  Se calcula el porcentaje de la utilidad total según la participación accionaria o societaria del socio.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["gestion", "diferencia", "SRL", "SA"]

variables:
  tipo_sociedad: uno_de(["SRL", "SA"])

respuesta: "socios"
tipo: completar

enunciado: "En una {tipo_sociedad}, la gestión suele estar más directamente vinculada a los socios o administradores designados, a diferencia de la S.A."

explicacion: |
  En la S.R.L., la gestión es más cercana a los socios, mientras que en la S.A. hay una separación clara entre propiedad (accionistas) y gestión (directores).
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["acciones", "identificacion", "SA"]

variables:
  instrumento: uno_de(["acciones", "cuotas"])

respuesta: "Sociedad Anónima"
tipo: completar

enunciado: "Si el capital se divide en {instrumento}, la sociedad es una Sociedad Anónima."

explicacion: |
  La división del capital en acciones es la característica distintiva de las Sociedades Anónimas (S.A.).
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["riesgo", "unipersonal", "patrimonio"]

variables:
  activo: uno_de(["casa", "ahorros", "auto"])

respuesta: "todo su patrimonio"
tipo: completar

enunciado: "En el comercio unipersonal, el dueño responde con {activo} y el resto de su patrimonio por las deudas."

explicacion: |
  El comerciante unipersonal responde ilimitadamente con todo su patrimonio personal por las deudas del negocio.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["capital", "resta", "SRL"]

variables:
  total: random(200000, 1000000)
  aportado: random(50000, total - 10000)
  restante: total - aportado

respuesta: restante
tipo: input

enunciado: "Si el capital de una S.R.L. es {total} y un socio aportó {aportado}, ¿cuánto falta para completar el capital?"

explicacion: |
  Se resta el aporte realizado del capital total para determinar el monto restante a completar.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["separacion", "patrimonio", "proteccion"]

variables:
  beneficio: uno_de(["proteger", "ocultar"])

respuesta: "proteger"
tipo: completar

enunciado: "La separación patrimonial en sociedades como la S.R.L. sirve para ________ el patrimonio personal de los socios."

explicacion: |
  La separación patrimonial protege los bienes personales de los socios de las deudas de la empresa.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "intermedio"
  tags: ["SA", "inversores", "escala"]

variables:
  cantidad: random(100, 1000)

respuesta: "Sociedad Anónima"
tipo: completar

enunciado: "Para atraer a {cantidad} inversores que no participan en la gestión, se utiliza una ________."

explicacion: |
  Las S.A. permiten la captación de gran cantidad de inversores mediante la emisión de acciones, sin que estos participen en la gestión.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "basico"
  tags: ["socios", "minimo", "definicion"]

variables:
  minimo: 2

respuesta: minimo
tipo: input

enunciado: "¿Cuál es el número mínimo de socios para constituir una sociedad (excluyendo la sociedad unipersonal)?"

explicacion: |
  Por definición, una sociedad requiere dos o más personas. La sociedad unipersonal es una excepción legal específica.
```

```
metadata:
  materia: "Economía"
  tema: "tipos_de_sociedades"
  nivel: "avanzado"
  tags: ["comparacion", "SRL", "SA", "estructura"]

variables:
  estructura: uno_de(["SRL", "SA"])

respuesta: "SRL"
tipo: completar

enunciado: "La ________ es más flexible y común para PYMES, mientras que la S.A. es más compleja y para grandes capitales."

explicacion: |
  La S.R.L. es más ágil y adecuada para pequeñas y medianas empresas, mientras que la S.A. está diseñada para grandes proyectos y capital abierto.
```

## Sección: validar-con-clientes-construir-medir-aprender (25 preguntas)

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["lean_startup", "metodologia"]

respuesta: "Construir-Medir-Aprender"
tipo: completar
respuestas_validas:
  - "Construir-Medir-Aprender"
  - "construir-medir-aprender"

enunciado: "El ciclo fundamental de la metodología Lean Startup para validar hipótesis de negocio se denomina ciclo ___."

explicacion: |
  El ciclo Construir-Medir-Aprender es la base de la metodología Lean Startup. El objetivo es minimizar el tiempo total de este ciclo para aprender lo más rápido posible sobre lo que los clientes realmente quieren.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["mvp", "validacion"]

respuesta: "probar_hipotesis"
tipo: mc
opciones_explicitas: ["probar_hipotesis", "maximizar_ganancias", "perfeccionar_producto"]

enunciado: "El propósito principal de un Producto Mínimo Viable (MVP) es ___."

explicacion: |
  Un MVP no es un producto incompleto, sino una versión con las características mínimas necesarias para recolectar la máxima cantidad de aprendizaje validado con el menor esfuerzo posible.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "intermedio"
  tags: ["pivotar", "estrategia"]

respuesta: falso
tipo: vf

enunciado: "¿Pivotar consiste en mantener la estrategia actual de la empresa a pesar de que los datos del ciclo de aprendizaje indiquen que la hipótesis fundamental es incorrecta?"

explicacion: |
  Falso. Pivotar es un cambio estratégico en la dirección del producto, del modelo de negocio o del segmento de clientes, basado en lo aprendido durante la fase de medición.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["proceso", "metodologia"]

respuesta_orden: ["Construir", "Medir", "Aprender"]
tipo: ordenar
opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Ordene las etapas del ciclo de aprendizaje de Lean Startup en el orden correcto:"

explicacion: |
  Primero se construye un experimento (MVP), luego se mide cómo reaccionan los clientes y finalmente se aprende de esos datos para decidir si se continúa o se pivota.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "intermedio"
  tags: ["aprendizaje_validado", "metrica"]

respuesta: "métricas de vanidad"
tipo: mc
opciones_explicitas: ["aprendizaje_validado", "métricas de vanidad", "intuición pura"]

enunciado: "Si una startup se enfoca en datos que solo muestran crecimiento superficial (como número de likes) pero no prueban si el modelo de negocio funciona, está utilizando ___."

explicacion: |
  Las métricas de vanidad son indicadores que pueden hacerte sentir bien pero no ayudan a tomar decisiones sobre la viabilidad del negocio. El objetivo es obtener aprendizaje validado.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_ciclo"
  nivel: "basico"
  tags: ["lean_startup", "metodologia"]

respuesta: "construir-medir-aprender"
tipo: completar
respuestas_validas:
  - "construir-medir-aprender"

enunciado: "El núcleo de la metodología Lean Startup es un ciclo iterativo compuesto por tres etapas fundamentales: ___, ___ y ___."

explicacion: |
  El ciclo construir-medir-aprender permite a los emprendedores minimizar el desperdicio de recursos al validar hipótesis de negocio de forma rápida.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_mvp"
  nivel: "intermedio"
  tags: ["mvp", "validacion"]

variables:
  escenario_idx: uno_de([0, 1])
  textos: ["Lanzar una app completa con todas las funciones para ver si alguien la usa.", "Crear una landing page con un botón de 'comprar' para medir el interés real."]
  valores: [falso, verdadero]

respuesta: valores[escenario_idx]
tipo: vf
enunciado: "Analiza el siguiente escenario: {textos[escenario_idx]}. ¿Es esta una forma válida de aplicar el concepto de MVP para validar una idea de forma barata y rápida?"

explicacion: |
  Un Producto Mínimo Viable (MVP) debe permitir aprender con el mínimo esfuerzo. Si el escenario es verdadero, es un MVP; si es falso, es un producto completo que ignora el ahorro de recursos.
```

```
metadata:
  materia: "economia"
  tema: "metricas_validacion"
  nivel: "intermedio"
  tags: ["metricas_vanidad", "metricas_accionables"]

respuesta: "metricas_vanidad"
tipo: mc
opciones_explicitas: ["metricas_accionables", "metricas_vanidad", "metricas_estaticas", "metricas_de_vanidad"]

enunciado: "Si un emprendedor se enfoca únicamente en el número de 'Likes' en Instagram para decidir si su modelo de negocio funciona, está utilizando ___."

explicacion: |
  Las métricas de vanidad son indicadores que se ven bien en papel pero no informan sobre la salud real del negocio o el comportamiento del cliente.
```

```
metadata:
  materia: "economia"
  tema: "ciclo_pasos"
  nivel: "basico"
  tags: ["metodologia", "orden"]

respuesta_orden: ["Construir MVP", "Medir respuesta del cliente", "Aprender y pivotar o perseverar"]
tipo: ordenar
opciones_explicitas: ["Construir MVP", "Medir respuesta del cliente", "Aprender y pivotar o perseverar"]

enunciado: "Ordena cronológicamente los pasos del ciclo de validación de una idea de negocio:"

explicacion: |
  Primero se construye algo mínimo, luego se mide cómo interactúa el cliente con ello y finalmente se aprende para decidir si se cambia la estrategia (pivotar) o se continúa (perseverar).
```

```
metadata:
  materia: "economia"
  tema: "pivotar_o_perseverar"
  nivel: "intermedio"
  tags: ["pivot", "estrategia"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["Una pizzería nota que la gente pide la masa pero no el queso, entonces decide vender solo masas artesanales.", "pivotar"], ["Una app de paseadores de perros confirma que los usuarios la descargan y la usan como se esperaba, así que decide mantener el mismo modelo de negocio.", "perseverar"]]

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["pivotar", "perseverar"]

enunciado: "Analiza el caso: {casos[caso_idx][0]}. La acción tomada por el emprendedor representa un proceso de ___."

explicacion: |
  Pivotar significa realizar un cambio estratégico en el modelo de negocio basado en lo aprendido durante la fase de medición, manteniendo la visión general pero cambiando la ejecución.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes"
  nivel: "basico"
  tags: ["lean_startup", "ciclo_aprendizaje"]

tipo: mc
opciones_explicitas: ["Optimizar el producto final antes de lanzarlo", "Minimizar el tiempo total entre ideas y aprendizaje validado", "Asegurar que el producto sea perfecto para el cliente", "Evitar cualquier tipo de gasto en marketing"]
respuesta: "Minimizar el tiempo total entre ideas y aprendizaje validado"
enunciado: "El objetivo principal del ciclo 'Construir-Medir-Aprender' es ___."
explicacion: |
  El ciclo busca maximizar el aprendizaje validado con el menor esfuerzo posible. No se trata de perfeccionar el producto, sino de validar hipótesis de negocio rápidamente para evitar desperdiciar recursos en ideas que no funcionan.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes"
  nivel: "intermedio"
  tags: ["metricas_vanidosas", "metricas_accionables"]

tipo: vf
respuesta: falso

enunciado: "Si una métrica solo muestra que el número de usuarios totales crece, pero no explica por qué vuelven o se van, se considera una 'métrica de vanidad'. ¿Es una métrica de vanidad útil para pivotar o perseverar?"

explicacion: |
  Las métricas de vanidad (como el número de seguidores o visitas totales) pueden dar una falsa sensación de éxito. Para el ciclo de aprendizaje, necesitamos métricas accionables que nos permitan tomar decisiones sobre el modelo de negocio.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

tipo: ordenar
opciones_explicitas: ["Construir un MVP", "Medir el comportamiento del usuario", "Aprender de los resultados", "Formular una hipótesis"]

enunciado: "Ordene los pasos lógicos para completar un ciclo de aprendizaje validado, comenzando desde la concepción de una hipótesis."

respuesta_orden: ["Formular una hipótesis", "Construir un MVP", "Medir el comportamiento del usuario", "Aprender de los resultados"]

explicacion: |
  El proceso comienza con una idea/hipótesis, se construye un Producto Mínimo Viable (MVP) para probarla, se miden los datos resultantes y finalmente se aprende para decidir si se debe pivotar o perseverar.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes"
  nivel: "intermedio"
  tags: ["mvp", "producto_minimo_viable"]

tipo: completar
respuestas_validas:
  - "Producto Mínimo Viable"
  - "MVP"

enunciado: "Para probar una idea de negocio rápido y barato, se utiliza un ___ que contiene solo las funciones esenciales para aprender sobre el cliente."

explicacion: |
  El MVP (Minimum Viable Product) no es un producto incompleto, sino la versión más simple de una idea que permite recolectar la máxima cantidad de aprendizaje validado con el menor esfuerzo.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes"
  nivel: "avanzado"
  tags: ["riesgo", "pivotar"]

tipo: vf
respuesta: verdadero

enunciado: "Invertir grandes cantidades de capital en el desarrollo de todas las funcionalidades de un producto antes de validar si el mercado tiene interés es un error común en el emprendimiento."

explicacion: |
  Este error se conoce como "desperdicio de recursos". La metodología Lean Startup sugiere validar primero la propuesta de valor antes de escalar la inversión en ingeniería o marketing masivo.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["lean_startup", "validacion"]

respuesta: "aprendizaje validado"
tipo: completar
respuestas_validas:
  - "aprendizaje validado"

enunciado: "A diferencia de la planificación tradicional basada en suposiciones, el objetivo principal del ciclo construir-medir-aprender es obtener ___."

explicacion: |
  El ciclo no busca simplemente 'hacer productos', sino maximizar el aprendizaje validado sobre lo que los clientes realmente necesitan y están dispuestos a usar.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "intermedio"
  tags: ["mvp", "iteracion"]

respuesta: "El MVP es una versión simplificada para aprender; el producto final es la solución completa para escalar."
tipo: mc
opciones_explicitas: 
  - "El MVP es una versión simplificada para aprender; el producto final es la solución completa para escalar."
  - "El MVP es el producto terminado tras muchas iteraciones; el producto final es un prototipo."

enunciado: "Según la metodología Lean Startup, ¿cuál es la distinción fundamental entre un MVP y un producto final?"

explicacion: |
  El MVP (Producto Mínimo Viable) se centra en la velocidad de aprendizaje y la validación de hipótesis, mientras que el producto final busca la excelencia operativa y la satisfacción total del mercado.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "intermedio"
  tags: ["metricas", "vanity_metrics"]

respuesta: falso
tipo: vf

enunciado: "En el ciclo construir-medir-aprender, el enfoque principal de la fase 'Medir' debe ser la acumulación de 'métricas de vanidad' (como likes o descargas totales) para asegurar el éxito del modelo de negocio."

explicacion: |
  Falso. Las métricas de vanidad no informan sobre la salud real del negocio. Se deben medir métricas accionables que permitan tomar decisiones sobre si pivotar o perseverar.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

respuesta_orden: ["Construir", "Medir", "Aprender"]
tipo: ordenar

opciones_explicitas: ["Construir", "Medir", "Aprender"]

enunciado: "Ordene los pasos fundamentales que componen el bucle de retroalimentación del ciclo de aprendizaje de Lean Startup:"

explicacion: |
  El ciclo es un bucle continuo: se construye un experimento (MVP), se miden los resultados con métricas accionables y se aprende de esos datos para decidir si se mantiene la estrategia o se cambia (pivotar).
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "avanzado"
  tags: ["riesgo", "inversion"]

respuesta: "Validar con clientes reduce el riesgo de desperdicio de capital."
tipo: mc
opciones_explicitas: ["Validar con clientes reduce el riesgo de desperdicio de capital.", "Validar con clientes aumenta la inversión inicial necesaria."]

enunciado: "Considerando la relación entre validación y gestión de recursos, si aplicamos el ciclo de forma temprana, ¿cuál es el efecto sobre la inversión?"

explicacion: |
  La validación temprana actúa como un seguro contra el desperdicio de recursos, permitiendo que la inversión se dirija solo hacia lo que el mercado realmente demanda.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["lean_startup", "ciclo_feedback"]

variables:
  escenario: uno_de([["Lanzar un MVP para probar una funcionalidad de pago", "Construir"], ["Analizar métricas de retención tras el lanzamiento", "Medir"], ["Decidir si pivotar o perseverar tras ver resultados", "Aprender"]])

enunciado: "En el ciclo de Lean Startup, la acción de '{escenario[0]}' corresponde a la fase de: ___"

respuestas_validas:
  - "Construir"
  - "Medir"
  - "Aprender"
respuesta: escenario[1]
tipo: completar

explicacion: |
  El ciclo consiste en Construir (crear el experimento/MVP), Medir (recolectar datos) y Aprender (decidir el siguiente paso).
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["mvp", "validacion"]

enunciado: "¿Cuál es el objetivo principal de utilizar un Producto Mínimo Viable (MVP) en una startup?"

opciones_explicitas: ["Maximizar la funcionalidad para atraer inversores", "Validar hipótesis de negocio con el menor esfuerzo posible", "Construir un producto perfecto antes de salir al mercado", "Evitar la competencia mediante patentes inmediatas"]
respuesta: "Validar hipótesis de negocio con el menor esfuerzo posible"
tipo: mc

explicacion: |
  El MVP no busca ser un producto final, sino una herramienta de aprendizaje para validar si el mercado realmente tiene el problema que intentamos resolver.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "intermedio"
  tags: ["riesgo", "inversion"]

enunciado: "Invertir grandes sumas de capital en el desarrollo de un producto completo antes de validar la demanda con clientes reales reduce el riesgo de fracaso."

respuesta: falso
tipo: vf

explicacion: |
  Al contrario, invertir demasiado pronto sin validación aumenta el riesgo de "construir algo que nadie quiere". El objetivo es fallar rápido y barato.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "basico"
  tags: ["metodologia", "pasos"]

enunciado: "Ordene las etapas del ciclo de aprendizaje de Lean Startup en el orden correcto:"

opciones_explicitas: ["Construir", "Medir", "Aprender"]
respuesta_orden: ["Construir", "Medir", "Aprender"]
tipo: ordenar

explicacion: |
  El flujo es iterativo: se construye un experimento, se miden los resultados y se aprende de ellos para reiniciar el ciclo.
```

```
metadata:
  materia: "economia"
  tema: "validar_con_clientes_construir_medir_aprender"
  nivel: "avanzado"
  tags: ["pivot", "estrategia"]

variables:
  caso: uno_de([["Los datos muestran que los usuarios usan la app solo para chatear, no para comprar", "Pivotar"], ["Los datos muestran que la métrica de retención es mayor a la esperada", "Perseverar"], ["Los datos muestran que el costo de adquisición es mayor al valor de vida del cliente", "Pivotar"]])

enunciado: "Si tras la fase de 'Medir', los datos indican que: '{caso[0]}', la decisión estratégica más probable es: ___"

respuestas_validas:
  - "Pivotar"
  - "Perseverar"
respuesta: caso[1]
tipo: completar

explicacion: |
  Si la hipótesis se confirma (Perseverar) o si los datos obligan a un cambio de estrategia (Pivotar), la decisión depende de la alineación con el modelo de negocio.
```

