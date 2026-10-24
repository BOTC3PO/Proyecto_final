# Historia Profunda — Multicelularidad (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — Concepto de multicelularidad

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["celulas", "organismos"]

respuesta: "cooperan y se especializan en funciones distintas"
tipo: completar
respuestas_validas:
  - "cooperan y se especializan en funciones distintas"

enunciado: "La multicelularidad se define como la organización de organismos formados por múltiples células que ___ en vez de vivir cada una de forma independiente."

explicacion: |
  En los organismos multicelulares, las células no solo coexisten, sino que trabajan juntas y desarrollan funciones específicas para asegurar la supervivencia del individuo.
```

### 2 — Diferencia fundamental

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["comparacion", "unicelulares"]

opciones_explicitas: ["Las células funcionan de forma totalmente independiente", "Las células cooperan y se especializan", "Las células son siempre idénticas", "Las células no tienen ADN"]

respuesta: "Las células cooperan y se especializan"
tipo: mc

enunciado: "¿Cuál es la característica principal que distingue a un organismo multicelular de uno unicelular?"

explicacion: |
  A diferencia de los unicelulares, donde una sola célula realiza todas las funciones vitales, los multicelulares dividen el trabajo mediante la especialización celular.
```

### 3 — Niveles de organización

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["jerarquia", "organos"]

opciones_explicitas: ["Célula -> Tejido -> Órgano -> Sistema"]

respuesta_orden: ["Célula -> Tejido -> Órgano -> Sistema"]
tipo: ordenar

enunciado: "Ordena correctamente los niveles de organización biológica que surgen gracias a la especialización en organismos multicelulares complejos:"

explicacion: |
  La especialización permite que las células se agrupen en tejidos, los tejidos en órganos, y los órganos en sistemas de órganos.
```

### 4 — Cálculo de especialización (Escenario hipotético)

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["especializacion", "funciones"]

variables:
  idx: uno_de([0, 1])
  escenario: [["un grupo de 100 células que solo se dividen", "reproducción"], ["un grupo de 100 células con formas distintas", "especialización"]]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["reproducción", "especialización"]

enunciado: "Si en un organismo multicelular las células han adquirido formas y funciones diferentes para optimizar el trabajo del individuo, estamos ante un proceso de {escenario[idx][0]}."

explicacion: |
  La especialización es el pilar de la multicelularidad, permitiendo que el organismo sea más eficiente que una colonia de células independientes.
```

### 5 — Verdad o Falso: Independencia celular

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: vf

enunciado: "¿Es correcto afirmar que en un organismo multicelular cada célula puede realizar todas las funciones vitales de manera totalmente independiente de las demás?"

explicacion: |
  Falso. Aunque algunas células pueden ser versátiles, la esencia de la multicelularidad es la interdependencia y la división de funciones.
```

### 6 — Origen de la multicelularidad

```
metadata:
  materia: "biologia"
  tema: "multicelularidad_evolutiva"
  nivel: "intermedio"
  tags: ["evolucion", "linajes"]

respuesta: "independiente"
tipo: completar
respuestas_validas:
  - "independiente"

enunciado: "La evidencia filogenética sugiere que la multicelularidad evolucionó de forma ___ en distintos linajes de la vida."

explicacion: |
  La multicelularidad no es un rasgo que surgió una sola vez en un ancestro común de todos los eucariotas; en su lugar, ocurrió múltiples veces de forma convergente en animales, plantas, hongos y algas.
```

### 7 — Linajes multicelulares

```
metadata:
  materia: "biologia"
  tema: "multicelularidad_evolutiva"
  nivel: "basico"
  tags: ["linajes", "taxonomia"]

variables:
  escenario: uno_de([["Animales", "Metazoa", "con células especializadas"], ["Plantas", "Viridiplantae", "con paredes de celulosa"], ["Hongos", "Fungi", "con paredes de quitina"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Metazoa", "Viridiplantae", "Fungi", "Protista"]

enunciado: "Si observamos el linaje de las {escenario[0]}, este se caracteriza por la presencia de {escenario[2]}."

explicacion: |
  Cada uno de estos grupos representa un evento de transición hacia la multicelularidad en un momento distinto de la historia evolutiva.
```

### 8 — Verdadero o Falso: Convergencia

```
metadata:
  materia: "biologia"
  tema: "multicelularidad_evolutiva"
  nivel: "basico"
  tags: ["convergencia", "evolucion"]

respuesta: falso
tipo: vf

enunciado: "La multicelularidad es un carácter derivado único que define a todos los organismos complejos en un solo evento evolutivo."

explicacion: |
  Esto es falso. La evolución de la multicelularidad es un ejemplo clásico de evolución convergente, donde diferentes grupos resolvieron el mismo problema biológico por separado.
```

### 9 — Grupos con multicelularidad

```
metadata:
  materia: "biologia"
  tema: "multicelularidad_evolutiva"
  nivel: "intermedio"
  tags: ["algas", "organismos"]

respuesta_orden: ["Animales", "Plantas", "Hongos", "Algas"]
tipo: ordenar

opciones_explicitas: ["Animales", "Plantas", "Hongos", "Algas"]

enunciado: "Ordena los siguientes grupos según su capacidad de haber desarrollado multicelularidad de forma independiente (de mayor a menor complejidad estructural común en la historia evolutiva):"

pasos:
  - "Identificar los linajes clave"
  - "Reconocer la independencia de sus orígenes"

explicacion: |
  Aunque todos son multicelulares, cada uno pertenece a un supergrupo eucariota distinto, lo que confirma que la transición ocurrió de forma independiente.
```

### 10 — El caso de las algas

```
metadata:
  materia: "biologia"
  tema: "multicelularidad_evolutiva"
  nivel: "avanzado"
  tags: ["algas", "evolucion"]

variables:
  caso: uno_de([["rojas", "Rhodophyta"], ["verdes", "Chlorophyta"]])

respuesta: caso[1]
tipo: mc
opciones_explicitas: ["Rhodophyta", "Chlorophyta", "Oomycota"]

enunciado: "El nombre científico (taxón) del linaje de las algas {caso[0]} es:"

explicacion: |
  Incluso dentro de los grupos que parecen similares, como las algas, la multicelularidad ha surgido en múltiples linajes distintos (algas rojas, verdes, pardas, etc.).
```

### 11 — Ventajas de la multicelularidad

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["biologia", "evolucion"]

tipo: mc
opciones_explicitas: ["Mayor tamaño corporal", "Menor consumo de energía", "Aumento de la superficie de contacto con el medio", "Simplificación de procesos metabólicos"]
respuesta: "Mayor tamaño corporal"

enunciado: "Una de las principales ventajas evolutivas de la multicelularidad es que permite a los organismos alcanzar un ___."

explicacion: |
  El aumento de tamaño corporal permite una mejor interacción con el entorno y una mayor capacidad de almacenamiento de recursos.
```

### 12 — Especialización celular

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["biologia", "evolucion"]

variables:
  escenario: uno_de([["digestión", "digestiva"], ["movimiento", "motora"], ["sensorial", "sensorial"]])

tipo: completar
respuestas_validas:
  - "digestiva"
  - "motora"
  - "sensorial"
respuesta: escenario[1]

enunciado: "La división del trabajo permite que existan células con funciones específicas. Si un grupo de células se especializa en el movimiento, se dice que tiene una función ___."

explicacion: |
  La especialización celular permite que diferentes tejidos realicen tareas distintas de manera eficiente, permitiendo la complejidad biológica.
```

### 13 — Protección y tamaño

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["biologia", "evolucion"]

tipo: mc
opciones_explicitas: ["Ser más visibles para los depredadores", "Ser más difíciles de ingerir para los depredadores", "Reducir la necesidad de alimento", "Aumentar la tasa de evaporación"]
respuesta: "Ser más difíciles de ingerir para los depredadores"

enunciado: "El incremento en el tamaño corporal derivado de la multicelularidad ofrece una ventaja de supervivencia relacionada con:"

explicacion: |
  Los organismos más grandes suelen ser más difíciles de consumir para depredadores de pequeño tamaño, lo que aumenta sus posibilidades de supervivencia.
```

### 14 — Secuencia de complejidad

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "avanzado"
  tags: ["biologia", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Célula unicelular", "Agregación de células", "Colonia de células", "Organismo multicelular especializado"]

respuesta_orden: ["Célula unicelular", "Agregación de células", "Colonia de células", "Organismo multicelular especializado"]

enunciado: "Ordena los niveles de organización biológica desde la forma más simple hasta la más compleja en el proceso evolutivo de la multicelularidad:"

explicacion: |
  La evolución hacia la multicelularidad implica pasar de células aisladas a agrupaciones que luego desarrollan una división de funciones coordinada.
```

### 15 — El costo de la especialización

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["biologia", "evolucion"]

tipo: completar
tolerancia_abs: 0

enunciado: "En un organismo multicelular, la división del trabajo implica que las células ya no pueden realizar todas las funciones por sí mismas. Este proceso de especialización se conoce como ___."

respuesta: "diferenciación"

explicacion: |
  La diferenciación celular es el proceso mediante el cual las células adquieren formas y funciones específicas dentro de un organismo complejo.
```

### 16 — Origen de la cohesión celular

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["adhesion", "evolucion"]

tipo: mc
opciones_explicitas: ["proteínas de adhesión", "paredes celulares rígidas", "flagelos de locomoción", "vacuolas contráctiles"]
respuesta: "proteínas de adhesión"

enunciado: "Para que un grupo de células pase de ser una colonia a un organismo multicelular, es indispensable el desarrollo de mecanismos de ___ que permitan mantener la cohesión entre ellas."

explicacion: |
  La multicelularidad requiere que las células se mantengan unidas físicamente mediante proteínas de adhesión (como cadherinas o integrinas), algo que no es necesario en organismos unicelulares independientes.
```

### 17 — Comunicación intercelular

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["comunicacion", "señalización"]

tipo: mc
opciones_explicitas: ["comunicación química", "reproducción asexual", "fotosíntesis", "quimiotaxis"]
respuesta: "comunicación química"

enunciado: "En un organismo multicelular, para que exista una división del trabajo, las células deben coordinar sus procesos. Esto se logra mediante la ___."

explicacion: |
  A diferencia de los unicelulares que responden a estímulos externos, los multicelulares necesitan comunicarse entre sí (comunicación química/señalización) para actuar como una unidad funcional.
```

### 18 — Diferencia fundamental

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["unicelulares", "multicelulares"]

tipo: completar
opciones_explicitas: ["adhesión", "comunicación", "metabolismo", "respiración"]
respuestas_validas:
  - "adhesión"
  - "comunicación"

enunciado: "Mientras que un organismo unicelular es una unidad autónoma, la multicelularidad requiere mecanismos de ___ y de ___ para funcionar como un todo integrado."

explicacion: |
  La transición a la multicelularidad implica dos pilares: la capacidad de pegarse (adhesión) y la capacidad de hablarse (comunicación).
```

### 19 — Secuencia de la complejidad celular

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "avanzado"
  tags: ["evolucion", "procesos"]

tipo: ordenar
opciones_explicitas: ["Agrupamiento de células", "Especialización celular", "Diferenciación de tejidos", "Organización de órganos"]

enunciado: "Ordena los procesos evolutivos que permiten pasar de una colonia de células idénticas a un organismo complejo:"

explicacion: |
  Primero las células deben estar juntas (agrupamiento), luego adquieren funciones distintas (especialización/diferenciación) y finalmente se organizan en estructuras mayores (tejidos/órganos).
respuesta_orden: ["Agrupamiento de células", "Especialización celular", "Diferenciación de tejidos", "Organización de órganos"]
```

### 20 — El rol de las proteínas

```
metadata:
  materia: "biologia"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["proteinas", "adhesion"]

variables:
  datos: [["cadherina", "unión célula-célula"], ["integrina", "unión célula-matriz"]]
  idx: uno_de([0, 1])

tipo: completar
tolerancia_abs: 0

enunciado: "Si una célula utiliza una {datos[idx][0]} para adherirse a su entorno, está ejerciendo una función de ___."

explicacion: |
  Las cadherinas median la unión célula-célula, mientras que las integrinas median la unión célula-matriz extracelular; ambas son clave para la cohesión de los tejidos en organismos multicelulares.

respuesta: datos[idx][1]
```

### 21 — Clasificación celular básica

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["biologia", "clasificacion"]

variables:
  datos: [["Amoeba proteus", "unicelular"], ["Homo sapiens", "multicelular"]]
  idx: uno_de([0, 1])

enunciado: "El organismo {datos[idx][0]} se caracteriza por ser un organismo ___________."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["unicelular", "multicelular"]

explicacion: |
  Los organismos unicelulares están formados por una sola célula que realiza todas las funciones vitales, mientras que los multicelulares están formados por múltiples células especializadas.
```

### 22 — El salto a la complejidad

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["evolucion", "celulas"]

variables:
  datos: [["un grupo de algas verdes", "multicelulares"], ["una bacteria extremófila", "unicelulares"]]
  idx: uno_de([0, 1])

enunciado: "Considerando el ejemplo de {datos[idx][0]}, podemos clasificar a este grupo como ___________."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "unicelulares"
  - "multicelulares"

explicacion: |
  La multicelularidad implica la especialización celular y la división de funciones, algo que no ocurre en los organismos unicelulares.
```

### 23 — Identificación de organismos

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["biologia", "taxonomia"]

variables:
  datos: [["Paramecium", "unicelular"], ["Fungi (hongo)", "multicelular"]]
  idx: uno_de([0, 1])

enunciado: "Si observamos un {datos[idx][0]}, su estructura es ___________."

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["unicelular", "multicelular"]

explicacion: |
  La distinción fundamental radica en el número de células que componen el individuo.
```

### 24 — Secuencia evolutiva de complejidad

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "avanzado"
  tags: ["evolucion", "orden"]

enunciado: "Ordena los niveles de organización biológica desde el más simple al más complejo:"

pasos:
  - "Organismo unicelular"
  - "Colonia de células"
  - "Organismo multicelular con tejidos"

respuesta_orden: ["Organismo unicelular", "Colonia de células", "Organismo multicelular con tejidos"]
tipo: ordenar
opciones_explicitas: ["Organismo unicelular", "Colonia de células", "Organismo multicelular con tejidos"]

explicacion: |
  La evolución hacia la multicelularidad implica pasar de células aisladas a agrupaciones con comunicación y especialización.
```

### 25 — Análisis de muestras

```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["laboratorio", "observacion"]

variables:
  datos: [["una muestra de levadura", "unicelular"], ["una muestra de musgo", "multicelular"]]
  idx: uno_de([0, 1])

enunciado: "Al analizar {datos[idx][0]} bajo el microscopio, determinamos que es ___________."

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "unicelular"
  - "multicelular"

explicacion: |
  La observación microscópica permite identificar si la unidad funcional es una célula individual o un conjunto de ellas organizadas.
```
