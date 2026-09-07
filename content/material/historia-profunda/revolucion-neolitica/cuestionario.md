# Historia Profunda — Revolucion neolitica (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El gran cambio

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "sedentarismo"]

tipo: mc
opciones_explicitas: ["Caza y recolección", "Agricultura y ganadería", "Comercio de especias", "Metalurgia del hierro"]

enunciado: "La Revolución Neolítica se define fundamentalmente por el paso de una economía de subsistencia basada en la caza y la recolección hacia una basada en la..."

respuesta: "Agricultura y ganadería"

explicacion: |
  El Neolítico marca la transición de la dependencia de los recursos naturales espontáneos al control de la producción de alimentos mediante la domesticación de plantas y animales.
```

### 2 — El sedentarismo

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["estilo_de_vida", "asentamientos"]

variables:
  escenario: uno_de([["nómadas", "se desplazan constantemente"], ["sedentarios", "se establecen en un lugar fijo"]])

tipo: completar
respuestas_validas:
  - "nómadas"
  - "sedentarios"

enunciado: "Antes de la agricultura, los grupos humanos eran principalmente {escenario[0]}, pero con la domesticación de especies se volvieron {escenario[1]}."

respuesta: escenario[1]

explicacion: |
  Al tener cultivos y ganado que cuidar, los grupos humanos ya no necesitaban desplazarse constantemente, dando origen a los primeros asentamientos permanentes.
```

### 3 — El excedente y la jerarquía

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["sociedad", "excedente"]

tipo: mc
opciones_explicitas: ["Desigualdad social", "Igualdad absoluta", "Desaparición de la propiedad", "Retorno a la caza"]

enunciado: "La capacidad de producir un excedente de alimentos permitió la especialización del trabajo y, consecuentemente, el surgimiento de..."

respuesta: "Desigualdad social"

explicacion: |
  El excedente alimentario permitió que no todos tuvieran que producir comida, lo que llevó a la división del trabajo y a la aparición de estructuras de poder y jerarquías sociales.
```

### 4 — Cronología del cambio

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["tiempo", "cronologia"]

tipo: ordenar
opciones_explicitas: ["Paleolítico", "Revolución Neolítica", "Edad de los Metales"]

respuesta_orden: ["Paleolítico", "Revolución Neolítica", "Edad de los Metales"]

enunciado: "Ordena cronológicamente las etapas de la historia humana según el uso de herramientas y tecnología de subsistencia:"

explicacion: |
  La Revolución Neolítica es el puente entre el Paleolítico (piedra tallada/caza) y el desarrollo de las civilizaciones complejas que usarían metales.
```

### 5 — El impacto demográfico

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["demografia", "salud"]

tipo: completar
tolerancia_abs: 0

enunciado: "Se estima que hace aproximadamente 12000 años, la transición hacia la agricultura provocó que la población mundial ___ de forma drástica."

respuesta: "aumentó"

explicacion: |
  La agricultura permitió una mayor densidad de población por unidad de superficie, aunque también trajo nuevos desafíos como enfermedades zoonóticas y carencias nutricionales específicas.
```

### 6 — Domesticación de cereales

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "cereales"]

variables:
  escenario: uno_de([["Creciente Fértil", "trigo y cebada"], ["Mesoamérica", "maíz"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["trigo y cebada", "maíz", "papa", "arroz"]

enunciado: "En la región del {escenario[0]}, los primeros agricultores se especializaron en el cultivo de {escenario[1]}."

explicacion: |
  En el Creciente Fértil (Mesopotamia y Levante), el trigo y la cebada fueron los pilares de la agricultura neolítica.
```

### 7 — Domesticación animal

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["ganaderia", "animales"]

respuesta: "oveja"
tipo: mc
opciones_explicitas: ["oveja", "vaca", "cerdo", "caballo"]

enunciado: "Uno de los animales más importantes para la obtención de lana y carne en el Neolítico fue la ___."

explicacion: |
  La domesticación de la oveja permitió no solo alimento, sino también fibras textiles para la vestimenta.
```

### 8 — Tubérculos andinos

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["america", "papa"]

respuesta: "papa"
respuestas_validas:
  - "papa"
tipo: completar

enunciado: "A diferencia de los cereales de Eurasia, en la región de los Andes el cultivo fundamental fue la ___."

explicacion: |
  La papa fue el cultivo base de las civilizaciones andinas, permitiendo el asentamiento en zonas de altura.
```

### 9 — Secuencia de domesticación

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["procesos", "orden"]

respuesta_orden: ["Recolección de granos silvestres", "Selección de semillas", "Cultivo de campos"]
tipo: ordenar
opciones_explicitas: ["Recolección de granos silvestres", "Selección de semillas", "Cultivo de campos"]

enunciado: "Ordena los pasos que permitieron la transición de la recolección a la agricultura intensiva:"

explicacion: |
  Primero se recolectaban granos, luego se seleccionaban las mejores semillas para la siguiente siembra, consolidando el cultivo.
```

### 10 — Impacto demográfico

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["consecuencias", "poblacion"]

respuesta: "aumento"
tipo: mc
opciones_explicitas: ["aumento", "disminución", "estancamiento", "variación"]

enunciado: "La capacidad de producir excedentes alimentarios provocó un ___ de la población humana."

explicacion: |
  La agricultura permitió alimentar a más personas en un mismo territorio, lo que derivó en un crecimiento demográfico sostenido.
```

### 11 — Origen de la agricultura

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "origen", "neolitico"]

tipo: mc
opciones_explicitas: ["En un único punto geográfico", "De forma independiente en diversas regiones", "Fue un proceso importado de Europa", "Ocurrió solo en el Creciente Fértil"]
respuesta: "De forma independiente en diversas regiones"
enunciado: "Sobre el surgimiento de la agricultura durante la Revolución Neolítica, es correcto afirmar que esta ocurrió ___."
explicacion: |
  La agricultura no fue un evento único y global, sino que surgió de manera independiente en múltiples focos como el Creciente Fértil, China, Mesoamérica y los Andes.
```

### 12 — Centros de domesticación

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["regiones", "centros_de_origen"]

variables:
  idx: uno_de([0, 1, 2, 3])
  datos: [["Creciente Fértil", "trigo y cebada"], ["China", "arroz y mijo"], ["Mesoamérica", "maíz y calabaza"], ["Andes", "papa y quinoa"]]

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "trigo y cebada"
  - "arroz y mijo"
  - "maíz y calabaza"
  - "papa y quinoa"

enunciado: "En la región de {datos[idx][0]}, los primeros cultivos domesticados fueron principalmente {datos[idx][1]}."

explicacion: |
  Cada región desarrolló sus propios cultivos base de forma autónoma: {datos[idx][0]} se centró en {datos[idx][1]}.
```

### 13 — Secuencia de domesticación

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["proceso", "secuencia"]

tipo: ordenar
opciones_explicitas: ["Recolección de granos silvestres", "Domesticación de plantas", "Sedentarismo", "Aumento de la densidad poblacional"]

enunciado: "Ordena cronológicamente las etapas que generalmente preceden a la consolidación de las sociedades agrícolas:"

explicacion: |
  El proceso comienza con la recolección, seguido de la selección de semillas (domesticación), lo que permite asentarse (sedentarismo) y finalmente permite que la población crezca.
respuesta_orden: ["Recolección de granos silvestres", "Domesticación de plantas", "Sedentarismo", "Aumento de la densidad poblacional"]
```

### 14 — El factor geográfico

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["geografia", "determinismo"]

tipo: vf

enunciado: "La existencia de múltiples centros de origen de la agricultura sugiere que el clima y la disponibilidad de especies silvestres fueron factores clave en diferentes partes del mundo."

respuesta: verdadero

explicacion: |
  Es verdadero. La diversidad de cultivos en distintas regiones demuestra que la transición neolítica fue una respuesta adaptativa a entornos locales específicos.
```

### 15 — Identificación de regiones

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["regiones", "identificacion"]

variables:
  idx: uno_de([0, 1])
  datos: [["Mesoamérica", "Maíz"], ["Andes", "Papa"]]

tipo: completar
tolerancia_abs: 0

enunciado: "Si estamos en la región de {datos[idx][0]}, el cultivo fundamental para el desarrollo de la agricultura fue la {datos[idx][1]}."

pasos:
  - "Identificar la región según el escenario."
  - "Relacionar la región con su cultivo principal."

explicacion: |
  En {datos[idx][0]}, la domesticación de la {datos[idx][1]} fue el motor del cambio neolítico.

respuesta: datos[idx][1]
```

### 16 — El excedente alimentario

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "excedente"]

respuesta: "excedente"
tipo: completar
respuestas_validas:
  - "excedente"

enunciado: "La capacidad de producir más alimento del que se consume inmediatamente se denomina ___."

explicacion: |
  Este fenómeno permitió que no todas las personas tuvieran que dedicarse a la recolección o caza, permitiendo la especialización del trabajo.
```

### 17 — Consecuencia del sedentarismo

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["sedentarismo", "agricultura"]

respuesta: "sedentarismo"
tipo: mc
opciones_explicitas: ["sedentarismo", "desplazamiento constante", "nomadismo extremo", "migración estacional"]

enunciado: "La adopción de la agricultura estable permitió que los grupos humanos abandonaran el nomadismo, dando paso al ___."

explicacion: |
  Al tener una fuente de alimento constante y predecible, las poblaciones pudieron establecer asentamientos permanentes.
```

### 18 — Impacto demográfico

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["demografia", "neolitico"]

respuesta: "aumento"
tipo: mc
opciones_explicitas: ["aumento", "disminución", "estancamiento", "inestabilidad"]

enunciado: "La disponibilidad de excedentes alimentarios provocó un ___ de la población humana."

explicacion: |
  La mayor disponibilidad de calorías y la estabilidad de los asentamientos permitieron un crecimiento demográfico sostenido.
```

### 19 — El proceso de transición

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["secuencia", "transicion"]

respuesta_orden: ["agricultura", "excedente", "sedentarismo", "especialización"]
tipo: ordenar
opciones_explicitas: ["agricultura", "excedente", "sedentarismo", "especialización"]

enunciado: "Ordena la siguiente secuencia lógica de la Revolución Neolítica:"

pasos:
  - "Primero, la domesticación de plantas y animales."
  - "Segundo, la acumulación de comida sobrante."
  - "Tercero, el establecimiento de asentamientos permanentes."
  - "Cuarto, la aparición de artesanos y guerreros."

explicacion: |
  La secuencia muestra cómo la producción de alimentos (agricultura) genera excedentes, lo que permite el sedentarismo y, finalmente, la división del trabajo (especialización).
```

### 20 — Relación causa-efecto

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["causalidad", "sociedad"]

respuesta: "sedentarismo"
tipo: mc
opciones_explicitas: ["sedentarismo", "nomadismo", "migración", "recolección"]

enunciado: "Si la agricultura genera un excedente, la consecuencia social directa es el ___."

explicacion: |
  El excedente permite que la sociedad deje de moverse constantemente en busca de comida, fijando la población en un territorio.
```

### 21 — Origen de la agricultura

```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "origen"]

respuesta: "Oriente Próximo"
tipo: mc
opciones_explicitas: ["Oriente Próximo", "Río Amarillo", "México"]

enunciado: "La domesticación de cereales como el trigo y la cebada ocurrió principalmente en la región del Creciente Fértil, también conocida como ___."

explicacion: |
  La región del Creciente Fértil fue el núcleo de la revolución neolítica, permitiendo el sedentarismo gracias al cultivo de cereales.
```

### 22 — Domesticación del maíz

```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["america", "maiz"]

variables:
  datos: [["Mesoamérica", "maíz"], ["Andes", "papa"], ["China", "arroz"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["maíz", "papa", "arroz"]

enunciado: "En la región de {datos[idx][0]}, el cultivo fundamental que transformó la dieta humana fue el ___."

explicacion: |
  El maíz es el pilar de la agricultura en Mesoamérica, derivado del teosinte.
```

### 23 — El proceso de sedentarización

```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["nomadismo", "sedentarismo"]

respuesta: "agricultores"
tipo: completar
respuestas_validas:
  - "agricultores"

enunciado: "Antes de la revolución neolítica, los grupos humanos eran mayoritariamente nómadas y recolectores; tras la domesticación de plantas, se convirtieron en ___."

explicacion: |
  La capacidad de producir alimento permitió que los grupos humanos dejaran de desplazarse constantemente.
```

### 24 — Centros de domesticación

```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["geografia", "cultivos"]

respuesta: "papa"
tipo: mc
opciones_explicitas: ["arroz", "papa", "trigo"]

enunciado: "Si un arqueólogo encuentra restos de tubérculos domesticados en la zona de los Andes, lo más probable es que se trate de ___."

explicacion: |
  La domesticación de la papa es un proceso clave que ocurrió en la región andina.
```

### 25 — Secuencia de la revolución

```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta_orden: ["Recolección", "Domesticación", "Sedentarismo", "Excedente"]
tipo: ordenar
opciones_explicitas: ["Recolección", "Domesticación", "Sedentarismo", "Excedente"]

enunciado: "Ordena cronológicamente los procesos que definen la transición del Paleolítico al Neolítico:"

explicacion: |
  Primero se recolectaba, luego se domesticó la especie, lo que permitió el sedentarismo y finalmente la creación de excedentes que permitieron la especialización del trabajo.
```
