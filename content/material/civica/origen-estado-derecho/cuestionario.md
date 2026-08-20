# Civica — Origen estado derecho (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
> Borrador generado con LM Studio (Gemma/Qwen) en lotes concurrentes.
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Definición de Estado

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["estado", "poder", "territorio"]

tipo: mc
opciones_explicitas: ["Una organización social sin fronteras", "Una institución que centraliza el poder político sobre un territorio y población", "Un grupo de personas con la misma cultura", "Un sistema de comercio internacional"]

enunciado: "El Estado se define fundamentalmente como la institución que centraliza el ___ sobre un territorio y una población determinada."

respuesta: "Una institución que centraliza el poder político sobre un territorio y población"

explicacion: |
  El Estado requiere de un poder político centralizado, un territorio delimitado y una población que lo integre.
```

### 2 — Origen del Estado y Excedente

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["excedente", "jerarquia", "historia"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [["La aparición de excedentes agrícolas permitió la especialización y la jerarquización social.", "excedente"], ["La migración constante impidió la formación de estructuras de poder fijas.", "migración"]]

tipo: completar
respuestas_validas:
  - "excedente"
  - "migración"

enunciado: "Históricamente, el surgimiento de sociedades con ___ permitió que aparecieran jerarquías sociales y, eventualmente, la formación del Estado."

respuesta: escenario[escenario_idx][1]

explicacion: |
  El control de un excedente de producción (comida, bienes) permitió que no todos los miembros de la sociedad se dedicaran a la agricultura, dando lugar a clases sociales y una autoridad centralizada.
```

### 3 — Elementos del Estado

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["elementos", "territorio", "poblacion"]

tipo: ordenar
opciones_explicitas: ["Población", "Territorio", "Poder Político"]

enunciado: "Ordene los tres elementos constitutivos del Estado desde su base social hasta su ejercicio de autoridad:"

respuesta_orden: ["Población", "Territorio", "Poder Político"]

explicacion: |
  Para que exista un Estado, primero debe haber un grupo de personas (población), un espacio físico donde habitar (territorio) y una estructura que ejerza autoridad (poder político).
```

### 4 — Evolución Social

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "avanzado"
  tags: ["jerarquia", "sociedad"]

tipo: vf

enunciado: "Las sociedades igualitarias, donde no existen jerarquías de mando ni acumulación de excedentes, son la base del surgimiento del Estado moderno."

respuesta: falso

explicacion: |
  Es falso. El Estado surge precisamente cuando las sociedades dejan de ser igualitarias y aparecen la jerarquía y la acumulación de excedentes.
```

### 5 — El concepto de Poder Político

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["poder", "control"]

tipo: completar
tolerancia_abs: 0

enunciado: "El Estado ejerce su soberanía a través del poder ___, que es la capacidad de dictar normas y hacerlas cumplir dentro de su ámbito."

respuesta: "político"

explicacion: |
  El poder político es la facultad del Estado para organizar la convivencia social mediante leyes y el uso legítimo de la fuerza.
```

### 6 — El concepto de Derecho

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["normas", "convivencia", "estado"]

respuesta: "normas escritas y obligatorias"
tipo: completar
respuestas_validas:
  - "normas escritas y obligatorias"

enunciado: "El Derecho se define como el conjunto de ___ que regulan la conducta humana en sociedad para organizar la convivencia."

explicacion: |
  El Derecho es un sistema de normas que el Estado establece para garantizar el orden y la convivencia social.
```

### 7 — El Código de Hammurabi

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["historia", "hammurabi", "babilonia"]

variables:
  escenario: uno_de([["Código de Hammurabi", "Babilonia"], ["Código de Ur-Nammu", "Sumeria"], ["Ley de las XII Tablas", "Roma"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Babilonia", "Sumeria", "Roma", "Egipto"]

enunciado: "El Código de Hammurabi es uno de los primeros conjuntos de leyes escritas de la historia y pertenece a la civilización de {escenario[0]}."

explicacion: |
  El Código de Hammurabi fue creado en la antigua Babilonia y es uno de los pilares del derecho histórico.
```

### 8 — Función del Estado

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["estado", "poder", "normas"]

respuesta: "organizar la convivencia"
tipo: mc
opciones_explicitas: ["imponer el miedo", "organizar la convivencia", "eliminar la libertad", "controlar la economía"]

enunciado: "Desde la perspectiva del Estado de Derecho, el objetivo principal de la creación de leyes es ___."

explicacion: |
  El Estado utiliza el derecho no solo para castigar, sino para establecer reglas que permitan la convivencia armónica entre los ciudadanos.
```

### 9 — Características de las normas

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["caracteristicas", "normas"]

respuesta: "obligatorias"
tipo: mc
opciones_explicitas: ["opcionales", "sugeridas", "obligatorias", "deseables"]

enunciado: "Para que una norma sea considerada parte del Derecho y sea aplicada por el Estado, debe poseer un carácter ___."

explicacion: |
  La obligatoriedad es la característica que distingue a la norma jurídica de una norma moral o social.
```

### 10 — Evolución de la organización social

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "avanzado"
  tags: ["orden", "caos", "derecho"]

respuesta_orden: ["caos", "normas escritas", "orden social"]
tipo: ordenar
opciones_explicitas: ["caos", "normas escritas", "orden social"]

enunciado: "El paso de una sociedad sin leyes a una organizada por el Estado sigue este proceso lógico:"

pasos:
  - "Estado de naturaleza o caos inicial"
  - "Creación de normas escritas"
  - "Establecimiento del orden social"

explicacion: |
  La transición hacia el Estado de Derecho implica pasar de la arbitrariedad (caos) a la previsibilidad mediante leyes escritas que aseguran el orden.
```

### 11 — Normas y complejidad social

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["sociologia", "derecho"]

enunciado: "En sociedades pequeñas y con pocos miembros, el orden social se mantiene principalmente mediante normas ___ que se basan en la repetición de conductas aceptadas."

respuestas_validas:
  - "informales"
  - "consuetudinarias"
tipo: completar

explicacion: |
  En grupos reducidos, la costumbre (derecho consuetudinario) es suficiente para regular la convivencia, ya que todos se conocen y la presión social es efectiva.
```

### 12 — Evolución de las normas

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["evolucion", "derecho_formal"]

variables:
  escenario: uno_de([["tribu_pequena", "costumbres"], ["estado_moderno", "leyes escritas"]])

enunciado: "Considerando el desarrollo de las sociedades, si nos encontramos en un {escenario[0]}, el control social se ejerce mediante {escenario[1]}. Sin embargo, en un {escenario[0]} de gran escala, se requiere de un sistema de {escenario[1]} para garantizar la certeza jurídica."

opciones_explicitas: ["costumbres", "leyes escritas"]
respuesta: escenario[1]
tipo: mc

explicacion: |
  A medida que la sociedad crece en complejidad y población, las costumbres se vuelven insuficientes para regular interacciones entre extraños, haciendo necesario el derecho formal escrito.
```

### 13 — Características del Derecho Formal

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["derecho_formal", "estado"]

enunciado: "El derecho formal, propio de sociedades complejas, se diferencia de la costumbre principalmente porque es:"

opciones_explicitas: ["Escrito y sancionado por el Estado", "Basado en la tradición oral", "Aplicado solo por líderes religiosos", "Difuso y poco claro"]
respuesta: "Escrito y sancionado por el Estado"
tipo: mc

explicacion: |
  El derecho formal requiere instituciones (como el Estado) que garanticen su cumplimiento mediante sanciones institucionalizadas y su publicidad mediante la escritura.
```

### 14 — Secuencia de complejidad social

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "avanzado"
  tags: ["evolucion", "complejidad"]

enunciado: "Ordene los niveles de complejidad social según la necesidad de formalización del derecho:"

opciones_explicitas: ["Sociedad de bandas (costumbres)", "Sociedades tribales (normas consuetudinarias)", "Estados modernos (derecho escrito)"]
respuesta_orden: ["Sociedad de bandas (costumbres)", "Sociedades tribales (normas consuetudinarias)", "Estados modernos (derecho escrito)"]
tipo: ordenar

explicacion: |
  La evolución sociológica sugiere que a mayor densidad poblacional y especialización de funciones, mayor es la necesidad de normas escritas, abstractas y universales.
```

### 15 — El rol del Estado en el Derecho

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["estado", "normas"]

variables:
  caso: uno_de([["sociedad_simple", "presión social"], ["sociedad_compleja", "coacción estatal"]])

enunciado: "En una {caso[0]}, la desviación de la norma se sanciona mediante la {caso[1]}. En una {caso[1]}, la sanción es ejercida por el aparato de {caso[1]}."

opciones_explicitas: ["presión social", "coacción estatal"]
respuesta: caso[1]
tipo: mc

explicacion: |
  El paso de la costumbre al derecho formal implica el paso de una sanción social (basada en la reputación o el grupo) a una sanción institucionalizada (basada en la fuerza legítima del Estado).
```

### 16 — El contrato social y la seguridad

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["contrato_social", "seguridad"]

variables:
  datos: [["un estado de naturaleza sin leyes", "la inseguridad constante"], ["un sistema de normas claras", "la convivencia pacífica"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: mc

opciones_explicitas: ["la inseguridad constante", "la convivencia pacífica"]

enunciado: "Según la teoría del contrato social, el paso del estado de naturaleza al Estado busca evitar {datos[idx][0]}."

explicacion: |
  El Estado surge para garantizar la seguridad y la vida de los ciudadanos, evitando el caos o la violencia constante propia de un estado de naturaleza sin autoridad central.
```

### 17 — Funciones del Estado

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["funciones_estado", "bienes_colectivos"]

respuesta: "provisión de bienes colectivos"
tipo: completar
respuestas_validas:
  - "provisión de bienes colectivos"

enunciado: "Una de las funciones fundamentales del Estado es la __________, que consiste en ofrecer servicios que no pueden ser provistos de manera eficiente por el mercado individualmente, como la infraestructura o la salud pública."

pasos:
  - "Identificar la función que atiende necesidades de la comunidad."
  - "Diferenciar entre bienes privados y bienes de uso público."

explicacion: |
  El Estado interviene para proveer bienes colectivos (como alumbrado, carreteras o defensa) que son esenciales para la sociedad pero que el sector privado no siempre cubre por su naturaleza no excluyente.
```

### 18 — Resolución de conflictos

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["justicia", "conflictos"]

respuesta: "Poder Judicial"
tipo: mc

opciones_explicitas: ["Poder Judicial", "Poder Ejecutivo", "Poder Legislativo"]

enunciado: "Para garantizar la resolución pacífica de conflictos entre ciudadanos, el Estado delega esta función en el:"

explicacion: |
  El Estado monopoliza el uso de la fuerza y la administración de justicia para que los conflictos se resuelvan mediante leyes y tribunales, y no mediante la venganza privada.
```

### 19 — El sostenimiento del Estado

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["recaudación", "impuestos"]

variables:
  tipo_recaudacion: uno_de(["impuestos", "tasas"])

respuesta: tipo_recaudacion

tipo: mc

opciones_explicitas: ["impuestos", "tasas", "contribuciones"]

enunciado: "Para poder cumplir con sus funciones de defensa, seguridad y provisión de servicios, el Estado requiere de la __________, que es la principal herramienta de recaudación de recursos."

explicacion: |
  La recaudación fiscal es el mecanismo mediante el cual el Estado obtiene los recursos necesarios para financiar el gasto público y el bienestar general.
```

### 20 — Orden de surgimiento de funciones

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "avanzado"
  tags: ["secuencia", "funciones"]

respuesta_orden: ["Seguridad y Defensa", "Resolución de Conflictos", "Provisión de Bienes Colectivos", "Recaudación Fiscal"]
tipo: ordenar

opciones_explicitas: ["Seguridad y Defensa", "Resolución de Conflictos", "Provisión de Bienes Colectivos", "Recaudación Fiscal"]

enunciado: "Ordene las funciones del Estado siguiendo un orden lógico de prioridad histórica y de necesidad para la consolidación de la soberanía estatal:"

explicacion: |
  Históricamente, la prioridad es la supervivencia (seguridad/defensa), seguida por la estabilidad social (resolución de conflictos), luego la organización de la vida común (bienes colectivos) y finalmente la estructura financiera para sostener todo lo anterior (recaudación).
```

### 21 — Identificación de Función Estatal

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["funciones_estado", "orden_social"]

variables:
  datos: [["Un grupo de ciudadanos no logra resolver un conflicto de límites entre propiedades", "Poder Judicial"], ["Un ciudadano es víctima de un robo y busca justicia", "Poder Judicial"], ["Dos empresas tienen una disputa contractual que no pueden solucionar solas", "Poder Judicial"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Poder Judicial", "Poder Ejecutivo", "Poder Legislativo", "Poder de la Policía"]

enunciado: "En el siguiente caso, se requiere la intervención del Estado para aplicar la ley: {datos[idx][0]}"

explicacion: |
  El Poder Judicial es el encargado de administrar justicia y resolver conflictos mediante la aplicación del derecho.
```

### 22 — El Rol de la Ley

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["normas", "derecho"]

variables:
  datos: [["La creación de una nueva norma que regula el tránsito", "Legislativo"], ["La firma de un decreto para implementar una política de salud", "Ejecutivo"], ["La sanción de una ley de presupuesto nacional", "Legislativo"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Legislativo", "Ejecutivo", "Judicial"]

enunciado: "Analice la acción: {datos[idx][0]}. ¿A qué órgano corresponde esta función primordial?"

explicacion: |
  El órgano encargado de crear, modificar o derogar las leyes es el Poder Legislativo.
```

### 23 — El Concepto de Soberanía

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["soberania", "territorio"]

variables:
  datos: [["Un Estado establece sus fronteras y límites territoriales", "Soberanía"], ["Un Estado ejerce autoridad sobre su población", "Soberanía"], ["Un Estado mantiene el orden interno sin interferencia externa", "Soberanía"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Soberanía"

enunciado: "La capacidad de un Estado para ejercer autoridad suprema sobre su territorio y población se denomina ___."

explicacion: |
  La soberanía es la facultad del Estado para autoorganizarse y ejercer poder dentro de sus límites sin subordinación a otros Estados.
```

### 24 — Orden de Elementos del Estado

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "intermedio"
  tags: ["elementos_estado", "componentes"]

variables:
  elementos: ["Población", "Territorio", "Gobierno", "Soberanía"]

respuesta_orden: elementos
tipo: ordenar
opciones_explicitas: ["Población", "Territorio", "Gobierno", "Soberanía"]

enunciado: "Ordene los elementos constitutivos del Estado desde el componente humano hasta la capacidad de mando:"

explicacion: |
  Para que exista un Estado, debe haber una población asentada en un territorio, con un gobierno que ejerza soberanía.
```

### 25 — La Función Ejecutiva

```
metadata:
  materia: "civica"
  tema: "origen_estado_derecho"
  nivel: "basico"
  tags: ["administracion", "ejecutivo"]

variables:
  datos: [["La construcción de una nueva carretera nacional", "Ejecutivo"], ["La gestión de los servicios de salud pública", "Ejecutivo"], ["La implementación de un plan de seguridad ciudadana", "Ejecutivo"]]
  idx: uno_de([0,1,2])

respuestas_validas:
  - datos[idx][1]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "El Estado debe gestionar recursos para la obra descrita: {datos[idx][0]}. ¿Qué poder se encarga de la administración y ejecución de estas políticas?"

explicacion: |
  El Poder Ejecutivo es el encargado de la gestión diaria, la administración de los recursos y la ejecución de las leyes.
```
