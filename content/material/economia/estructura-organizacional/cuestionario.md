# Economia — estructura organizacional (cuestionario, 28 preguntas VBLang)

> Tema: `economia/estructura-organizacional`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

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

### 2 — pregunta 2

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

### 3 — pregunta 3

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

### 4 — pregunta 4

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

### 5 — pregunta 5

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

### 6 — pregunta 6

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

### 7 — pregunta 7

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

### 8 — pregunta 8

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

### 9 — pregunta 9

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

### 10 — pregunta 10

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

### 11 — pregunta 11

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

### 12 — pregunta 12

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

### 13 — pregunta 13

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

### 14 — pregunta 14

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

### 15 — pregunta 15

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

### 16 — pregunta 16

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

### 17 — pregunta 17

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

### 18 — pregunta 18

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

### 19 — pregunta 19

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

### 20 — pregunta 20

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

### 21 — pregunta 21

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

### 22 — pregunta 22

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

### 23 — pregunta 23

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

### 24 — pregunta 24

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

### 25 — pregunta 25

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

### 26 — pregunta 26

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

### 27 — pregunta 27

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

### 28 — pregunta 28

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
