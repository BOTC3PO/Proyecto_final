# Examen jefe — Evolución de la Humanidad y la Tierra

> Logro #118. Completaste el parcial dominando las grandes revoluciones y la geología del planeta, jefe. Pool agregado de los `cuestionario.md` ya validados de sus 5 temas. **123 preguntas totales** en 5/5 secciones.

---

## Sección: revolucion-industrial (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["tecnologia", "energia"]

variables:
  idx: uno_de([0, 1])
  combustible: uno_de(["carbón", "madera"])
  motor: uno_de(["máquina de vapor", "motor de combustión"])

enunciado: "La Revolución Industrial en Inglaterra se caracterizó por el uso masivo de {combustible} como fuente de energía para impulsar la nueva {motor}."

respuesta: "máquina de vapor"
tipo: mc
opciones_explicitas: ["máquina de vapor", "motor de combustión", "molino de viento", "motor eléctrico"]

explicacion: |
  El uso del carbón mineral permitió el funcionamiento de la máquina de vapor de James Watt, motor fundamental de la Primera Revolución Industrial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["social", "economia"]

variables:
  sistema: uno_de(["factory system", "domestic system"])

enunciado: "El paso del 'putting-out system' (producción doméstica) al {sistema} supuso la concentración de trabajadores en grandes edificios llamados fábricas."

respuesta: "factory system"
tipo: mc
opciones_explicitas: ["factory system", "domestic system", "guild system", "corporative system"]

explicacion: |
  El 'factory system' o sistema de fábrica centralizó la producción, la maquinaria y la mano de obra en un mismo lugar, rompiendo con la producción artesanal en el hogar.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["urbanismo", "sociedad"]

respuesta: "urbanización"
tipo: completar
respuestas_validas: ["urbanización", "ruralización", "industrialización"]

enunciado: "El desplazamiento masivo de población desde el campo hacia las ciudades para trabajar en las nuevas industrias provocó un acelerado proceso de ___."

explicacion: |
  La necesidad de mano de obra en las fábricas generó un éxodo rural sin precedentes, transformando las ciudades en centros densamente poblados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["procesos", "cronologia"]

enunciado: "Ordena cronológicamente los elementos que caracterizaron la transición hacia la producción mecanizada:"

pasos:
  - "Producción artesanal en talleres pequeños"
  - "Introducción de maquinaria textil mecánica"
  - "Consolidación del sistema de fábricas y ferrocarril"

respuesta: ["Producción artesanal en talleres pequeños", "Introducción de maquinaria textil mecánica", "Consolidación del sistema de fábricas y ferrocarril"]
tipo: ordenar
opciones_explicitas: ["Producción artesanal en talleres pequeños", "Introducción de maquinaria textil mecánica", "Consolidación del sistema de fábricas y ferrocarril"]

explicacion: |
  La transición fue un proceso gradual que comenzó con la mejora de herramientas manuales, siguió con la mecanización de la industria textil y culminó con la expansión del transporte ferroviario.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "avanzado"
  tags: ["clases_sociales", "lucha_de_clases"]

variables:
  clase_obrera: uno_de(["proletariado", "burguesía"])

enunciado: "La nueva clase social surgida de la Revolución Industrial, compuesta por quienes solo poseían su fuerza de trabajo, se denomina ___."

respuesta: "proletariado"
tipo: mc
opciones_explicitas: ["proletariado", "burguesía", "aristocracia", "campesinado"]

explicacion: |
  El proletariado urbano surgió como la clase trabajadora industrial, diferenciándose de la burguesía, que era la dueña de los medios de producción.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["tecnologia", "james_watt"]

respuesta: "James Watt"
tipo: completar
respuestas_validas: ["James Watt"]

enunciado: "El perfeccionamiento de la máquina de vapor por ___ fue el motor tecnológico que permitió la transición hacia la producción mecanizada."

explicacion: |
  James Watt no inventó la máquina de vapor, pero sus mejoras (como el condensador separado) la hicieron eficiente para la industria.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["geografia_industrial", "energia"]

variables:
  fuente_tradicional: uno_de(["agua", "animal", "humana"])

respuesta: fuente_tradicional
tipo: mc
opciones_explicitas: ["agua", "animal", "humana", "viento"]

enunciado: "Antes de la máquina de vapor, las fábricas dependían principalmente de la fuerza de {fuente_tradicional} o de la fuerza muscular. La máquina de vapor permitió que las fábricas se ubicaran lejos de las corrientes de {fuente_tradicional}."

explicacion: |
  La energía hidráulica obligaba a las fábiles a estar junto a ríos; la máquina de vapor permitió la urbanización industrial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["mecanizacion", "produccion"]

respuesta: "mecanización"
tipo: completar
respuestas_validas: ["mecanización"]

enunciado: "La implementación de la tecnología de Watt facilitó la ___ de procesos que anteriormente se realizaban de forma manual o artesanal."

explicacion: |
  La mecanización permitió aumentar la escala de producción y reducir los tiempos de fabricación de manera exponencial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "avanzado"
  tags: ["procesos", "causalidad"]

respuesta: ["Revolución Agraria", "Máquina de Vapor", "Expansión de Ferrocarriles", "Urbanización Masiva"]
tipo: ordenar
opciones_explicitas: ["Revolución Agraria", "Máquina de Vapor", "Expansión de Ferrocarriles", "Urbanización Masiva"]

enunciado: "Ordena cronológicamente los procesos que impulsaron la Revolución Industrial:"

explicacion: |
  La revolución agrícola aumentó la oferta de alimentos; la máquina de vapor mecanizó la industria y el transporte; esto finalmente provocó un éxodo rural hacia las ciudades.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["energia", "carbón"]

respuesta: "verdadero"
tipo: completar
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿La máquina de vapor permitió que la producción industrial dejara de depender exclusivamente de fuentes de energía naturales y renovables como el viento o el agua?"

explicacion: |
  Es verdadero. Al usar carbón para generar vapor, la industria ganó autonomía respecto a las condiciones climáticas o geográficas.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["urbanizacion", "migracion"]

variables:
  escenario: uno_de([
    ["el cercamiento de tierras", "la búsqueda de empleo en las fábricas"],
    ["la mecanización de la agricultura", "la oferta de salarios en los centros urbanos"],
    ["la crisis de la industria artesanal", "la promesa de una vida mejor en la ciudad"]
  ])

respuesta: escenario[1
tipo: completar

enunciado: "La Revolución Industrial provocó una migración masiva desde el campo hacia las ciudades, impulsada principalmente por {escenario[0]} y {escenario[1]}."

pasos:
  - "Analizar el proceso de cercamiento de tierras (enclosures)."
  - "Identificar la necesidad de mano de obra en las nuevas fábricas textiles y siderúrgicas."

explicacion: |
  La mecanización del campo y los cercamientos dejaron a muchos campesinos sin tierras, obligándolos a migrar a las ciudades para trabajar en las nuevas industrias.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["clases_sociales", "proletariado"]

variables:
  clase_social: uno_de(["proletariado", "burguesía", "aristocracia"])

respuesta: "proletariado"
tipo: mc

opciones_explicitas: ["proletariado", "burguesía", "aristocracia"]

enunciado: "El grupo social que surgió con la Revolución Industrial, compuesto por personas que solo poseían su fuerza de trabajo para vender a cambio de un salario, se denomina ________."

explicacion: |
  El proletariado es la clase trabajadora urbana que surgió como consecuencia directa de la industrialización y la pérdida de medios de producción propios.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["condiciones_laborales", "jornada"]

respuesta: 14
tipo: completar
tolerancia_abs: 1

enunciado: "Durante el apogeo de la Revolución Industrial, las jornadas laborales en las fábricas textiles eran extremadamente extensas. Si un obrero trabajaba de 06:00 a 20:00 con una hora de descanso para comer, ¿cuántas horas trabajaba efectivamente por día?"

pasos:
  - "Calcular el tiempo total transcurrido desde las 06:00 hasta las 20:00."
  - "Restar la hora de descanso."

explicacion: |
  Las jornadas de 12 a 16 horas eran la norma en la primera fase de la Revolución Industrial, lo que generaba un agotamiento extremo en la clase obrera.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["urbanizacion", "causas"]

respuesta: ["Mecanización agrícola", "Cercamientos de tierras", "Crecimiento de fábricas"]
tipo: ordenar

opciones_explicitas: ["Mecanización agrícola", "Cercamientos de tierras", "Crecimiento de fábricas"]

enunciado: "Ordene los siguientes procesos según su secuencia lógica en el fenómeno de la urbanización industrial (desde la causa rural hasta el efecto urbano):"

explicacion: |
  Primero la mecanización y cercamientos expulsan al campesino; luego, el crecimiento de fábricas en ciudades atrae a esa población desplazada.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_industrial"
  nivel: "avanzado"
  tags: ["salud_publica", "hacinamiento"]

variables:
  problema: uno_de([
    ["el hacinamiento en barrios obreros", "la falta de sistemas de alcantarillado"],
    ["la contaminación del aire", "la falta de agua potable"]
  ])

respuesta: problema[0
tipo: mc

opciones_explicitas: ["el hacinamiento en barrios obreros", "la falta de sistemas de alcantarillado", "la contaminación del aire", "la falta de agua potable"]

enunciado: "Uno de los problemas sociales y sanitarios más graves de las ciudades industriales fue {problema}."

explicacion: |
  El crecimiento descontrolado de las ciudades atrajo a tanta gente que se crearon barrios obreros con condiciones de hacinamiento extremo, facilitando la propagación de enfermedades.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["tecnologia", "economia"]

tipo: mc
opciones_explicitas: ["Máquina de vapor", "Motor de combustión", "Telégrafo", "Locomotora de vapor"]

enunciado: "La invención y perfeccionamiento de la ___ fue el motor tecnológico fundamental que impulsó la Primera Revolución Industrial."

explicacion: |
  La máquina de vapor, perfeccionada por James Watt, permitió mecanizar la producción y revolucionar el transporte, siendo el pilar del cambio industrial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["capitalismo", "economia"]

tipo: completar
respuestas_validas: ["capitalismo industrial"]

enunciado: "La Revolución Industrial transformó la economía mundial, sentando las bases del ___ moderno."

explicacion: |
  El paso de una economía agraria y artesanal a una basada en la propiedad privada de los medios de producción y el trabajo asalariado definió el capitalismo industrial.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["produccion", "manufactura"]

tipo: completar
tolerancia_abs: 0

enunciado: "Si una fábrica artesanal producía 10 unidades por día y, tras la industrialización, su capacidad se multiplica por 150, ¿cuántas unidades produce ahora?"

pasos:
  - "Identificar la producción inicial: 10"
  - "Multiplicar por el factor de escala: 10 * 150"

respuesta: 1500

explicacion: |
  La mecanización permitió un aumento exponencial en la capacidad de producción, pasando de escalas manuales a escalas masivas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "avanzado"
  tags: ["sociedad", "urbanizacion"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["urbanización", "crecimiento"], ["proletariado", "clase obrera"]]

tipo: mc
opciones_explicitas: ["urbanización y crecimiento", "proletariado y clase obrera", "feudalismo y campesinado", "monarquía y aristocracia"]]

enunciado: "La Revolución Industrial provocó un proceso de {datos[escenario_idx][0]} y {datos[escenario_idx][1]} sin precedentes en las ciudades europeas."

respuesta: datos[escenario_idx
explicacion: |
  El desplazamiento de la población del campo a la ciudad (éxodo rural) transformó la demografía y la estructura social.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

tipo: ordenar
opciones_explicitas: ["Revolución Agraria", "Mecanización Textil", "Expansión del Ferrocarril", "Segunda Revolución Industrial"]

enunciado: "Ordena cronológicamente los hitos que permitieron la consolidación de la era industrial:"

respuesta: ["Revolución Agraria", "Mecanización Textil", "Expansión del Ferrocarril", "Segunda Revolución Industrial"]

explicacion: |
  Primero la agricultura permitió alimentar a más gente; luego la industria textil se mecanizó; el ferrocarril conectó mercados y finalmente la segunda fase introdujo la electricidad y el acero.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["inventos", "transporte"]

variables:
  datos: [["Máquina de vapor de Watt", "Revolución del transporte terrestre"], ["Telar mecánico", "Producción textil masiva"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Revolución del transporte terrestre", "Producción textil masiva", "Comunicación instantánea", "Iluminación urbana"]

enunciado: "El impacto principal de la {datos[idx][0]} fue la {datos[idx][1]}."

explicacion: |
  La {datos[idx][0]} transformó la economía al permitir la {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["comunicacion", "tecnologia"]

variables:
  datos: [["Telégrafo", "Comunicación a larga distancia"], ["Ferrocarril", "Movilidad de mercancías"], ["Máquina de coser", "Producción de indumentaria"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: completar
respuestas_validas: ["Comunicación a larga distancia", "Movilidad de mercancías", "Producción de indumentaria"]

enunciado: "El invento del ___ permitió la ___."

pasos:
  - "Identificar el invento seleccionado."
  - "Relacionar con su consecuencia social o económica."

explicacion: |
  El {datos[idx][0]} fue fundamental para la {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "avanzado"
  tags: ["procesos", "orden"]

opciones_explicitas: ["Máquina de vapor", "Locomotora de vapor", "Expansión ferroviaria"]

respuesta: ["Máquina de vapor", "Locomotora de vapor", "Expansión ferroviaria"]
tipo: ordenar

enunciado: "Ordene cronológicamente la evolución tecnológica que impulsó el transporte en la Revolución Industrial:"

explicacion: |
  Primero se perfeccionó la máquina de vapor, luego se aplicó al transporte con la locomotora y finalmente se consolidó la red ferroviaria.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["industria", "textil"]

variables:
  datos: [["Mecanización", "Aumento de la productividad"], ["Artesanía", "Producción lenta y manual"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Aumento de la productividad", "Producción lenta y manual", "Reducción de costos", "Desaparición de talleres"]

enunciado: "Al comparar la {datos[idx][0]} con el modelo anterior, el resultado fue un {datos[idx][1]}."

explicacion: |
  La transición hacia la {datos[idx][0]} significó un {datos[idx][1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["energia", "carbón"]

variables:
  datos: [["Carbón mineral", "Combustible fósil"], ["Madera", "Biomasa"]]
  idx: uno_de([0, 1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["Combustible fósil", "Biomasa"]

enunciado: "El uso masivo de ___ permitió el acceso a un ___."

explicacion: |
  La transición hacia el uso de {datos[idx][0]} fue el motor que proporcionó el {datos[idx][1]} necesario para las fábricas.
```

## Sección: revolucion-neolitica (25 preguntas)

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

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["estilo_de_vida", "asentamientos"]

variables:
  escenario: uno_de([["nómadas", "se desplazan constantemente"], ["sedentarios", "se establecen en un lugar fijo"]])

tipo: completar
respuestas_validas: ["nómadas", "sedentarios"]

enunciado: "Antes de la agricultura, los grupos humanos eran principalmente {escenario[0]}, pero con la domesticación de especies se volvieron {escenario[1]}."

respuesta: escenario[1

explicacion: |
  Al tener cultivos y ganado que cuidar, los grupos humanos ya no necesitaban desplazarse constantemente, dando origen a los primeros asentamientos permanentes.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["tiempo", "cronologia"]

tipo: ordenar
opciones_explicitas: ["Paleolítico", "Revolución Neolítica", "Edad de los Metales"]

respuesta: ["Paleolítico", "Revolución Neolítica", "Edad de los Metales"]

enunciado: "Ordena cronológicamente las etapas de la historia humana según el uso de herramientas y tecnología de subsistencia:"

explicacion: |
  La Revolución Neolítica es el puente entre el Paleolítico (piedra tallada/caza) y el desarrollo de las civilizaciones complejas que usarían metales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["demografia", "salud"]

variables:
  dato: uno_de([[12000, "aumentó"], [5000, "disminuyó"]])

tipo: completar
tolerancia_abs: 0

enunciado: "Se estima que hace aproximadamente {dato[0]} años, la transición hacia la agricultura provocó que la población mundial {dato[1]} de forma drástica."

respuesta: dato[1

explicacion: |
  La agricultura permitió una mayor densidad de población por unidad de superficie, aunque también trajo nuevos desafíos como enfermedades zoonóticas y carencias nutricionales específicas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "cereales"]

variables:
  escenario: uno_de([["Creciente Fértil", "trigo y cebada"], ["Mesoamérica", "maíz"]])
  cereales: escenario[1]

respuesta: escenario[1][0
tipo: mc
opciones_explicitas: ["trigo y cebada", "maíz", "papa", "arroz"]

enunciado: "En la región del {escenario[0]}, los primeros agricultores se especializaron en el cultivo de {cereales[0]} y {cereales[1]}."

explicacion: |
  En el Creciente Fértil (Mesopotamia y Levante), el trigo y la cebada fueron los pilares de la agricultura neolítica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["ganaderia", "animales"]

variables:
  animal_base: uno_de([["oveja", "cabras"], ["vaca", "cerdos"]])

respuesta: animal_base[0
tipo: mc
opciones_explicitas: ["oveja", "vaca", "cerdo", "caballo"]

enunciado: "Uno de los animales más importantes para la obtención de lana y carne en el Neolítico fue la {animal_base[0]}."

explicacion: |
  La domesticación de la oveja permitió no solo alimento, sino también fibras textiles para la vestimenta.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["america", "papa"]

respuesta: ["papa"]
respuestas_validas: ["papa"]
tipo: completar

enunciado: "A diferencia de los cereales de Eurasia, en la región de los Andes el cultivo fundamental fue la ___."

explicacion: |
  La papa fue el cultivo base de las civilizaciones andinas, permitiendo el asentamiento en zonas de altura.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["procesos", "orden"]

respuesta: ["Recolección de granos silvestres", "Selección de semillas", "Cultivo de campos"]
tipo: ordenar
opciones_explicitas: ["Recolección de granos silvestres", "Selección de semillas", "Cultivo de campos", "Comercio de excedentes"]

enunciado: "Ordena los pasos que permitieron la transición de la recolección a la agricultura intensiva:"

explicacion: |
  Primero se recolectaban granos, luego se seleccionaban las mejores semillas para la siguiente siembra, consolidando el cultivo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["consecuencias", "poblacion"]

variables:
  cambio: uno_de([["aumento", "crecimiento"], ["disminución", "caída"]])

respuesta: cambio[0
tipo: mc
opciones_explicitas: ["aumento", "disminución", "estancamiento", "variación"]

enunciado: "La capacidad de producir excedentes alimentarios provocó un {cambio} de la población humana."

explicacion: |
  La agricultura permitió alimentar a más personas en un mismo territorio, lo que derivó en un crecimiento demográfico sostenido.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "origen", "neolitico"]

variables:
  datos: [["En un único punto geográfico", "falso"], ["De forma independiente en diversas regiones", "verdadero"], ["Fue un proceso importado de Europa", "falso"], ["Ocurrió solo en el Creciente Fértil", "falso"]]
  idx: uno_de([0,1,2,3])

tipo: mc
opciones_explicitas: [datos[idx][0], datos[0][0], datos[1][0], datos[2][0]]
respuesta: datos[idx][1]
enunciado: "Sobre el surgimiento de la agricultura durante la Revolución Neolítica, es correcto afirmar que esta ocurrió ___."
explicacion: |
  La agricultura no fue un evento único y global, sino que surgió de manera independiente en múltiples focos como el Creciente Fértil, China, Mesoamérica y los Andes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["regiones", "centros_de_origen"]

variables:
  idx: uno_de([0, 1, 2, 3])
  datos: [
    ["Creciente Fértil", "trigo y cebada"],
    ["China", "arroz y mijo"],
    ["Mesoamérica", "maíz y calabaza"],
    ["Andes", "papa y quinoa"]
  ]

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["trigo y cebada", "arroz y mijo", "maíz y calabaza", "papa y quinoa"]

enunciado: "En la región de {datos[idx][0]}, los primeros cultivos domesticados fueron principalmente {escenario[idx][1]}."

explicacion: |
  Cada región desarrolló sus propios cultivos base de forma autónoma: {datos[idx][0]} se centró en {datos[idx][1]}.
```

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
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["geografia", "determinismo"]

tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "La existencia de múltiples centros de origen de la agricultura sugiere que el clima y la disponibilidad de especies silvestres fueron factores clave en diferentes partes del mundo."

explicacion: |
  Es verdadero. La diversidad de cultivos en distintas regiones demuestra que la transición neolítica fue una respuesta adaptativa a entornos locales específicos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["regiones", "identificacion"]

variables:
  idx: uno_de([0, 1])
  datos: [
    ["Mesoamérica", "Maíz"],
    ["Andes", "Papa"]
  ]

tipo: completar
tolerancia_abs: 0

enunciado: "Si estamos en la región de {datos[idx][0]}, el cultivo fundamental para el desarrollo de la agricultura fue la {datos[idx][1]}."

pasos:
  - "Identificar la región según el escenario."
  - "Relacionar la región con su cultivo principal."

explicacion: |
  En {datos[idx][0]}, la domesticación de la {datos[idx][1]} fue el motor del cambio neolítico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "excedente"]

respuesta: "excedente"
tipo: completar
respuestas_validas: ["excedente"]

enunciado: "La capacidad de producir más alimento del que se consume inmediatamente se denomina ___."

explicacion: |
  Este fenómeno permitió que no todas las personas tuvieran que dedicarse a la recolección o caza, permitiendo la especialización del trabajo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["sedentarismo", "agricultura"]

variables:
  escenario: uno_de([["agricultura estable", "sedentarismo"], ["caza nómada", "desplazamiento constante"]])

respuesta: escenario[1
tipo: mc
opciones_explicitas: ["sedentarismo", "desplazamiento constante", "nomadismo extremo", "migración estacional"]

enunciado: "La adopción de la {escenario[0]} permitió que los grupos humanos abandonaran el nomadismo, dando paso al ___."

explicacion: |
  Al tener una fuente de alimento constante y predecible, las poblaciones pudieron establecer asentamientos permanentes.
```

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

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["secuencia", "transicion"]

respuesta: ["agricultura", "excedente", "sedentarismo", "especialización"]
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

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["causalidad", "sociedad"]

variables:
  caso: uno_de([["excedente", "sedentarismo"], ["caza", "nomadismo"]])

respuesta: caso[1
tipo: mc
opciones_explicitas: ["sedentarismo", "nomadismo", "migración", "recolección"]

enunciado: "Si la agricultura genera un {caso[0]}, la consecuencia social directa es el ___."

explicacion: |
  El excedente permite que la sociedad deje de moverse constantemente en busca de comida, fijando la población en un territorio.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "basico"
  tags: ["agricultura", "origen"]

variables:
  datos: [["Creciente Fértil", "Oriente Próximo"], ["China", "Río Amarillo"], ["Mesoamérica", "México"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["Oriente Próximo", "Río Amarillo", "México"]

enunciado: "La domesticación de cereales como el trigo y la cebada ocurrió principalmente en la región de {datos[idx][0]}."

explicacion: |
  La región del Creciente Fértil fue el núcleo de la revolución neolítica, permitiendo el sedentarismo gracias al cultivo de cereales.
```

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

```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["nomadismo", "sedentarismo"]

variables:
  datos: [["Nómadas", "recolectores"], ["Sedentarios", "agricultores"]]
  idx: uno_de([0,1])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["agricultores"]

enunciado: "Antes de la revolución neolítica, los grupos humanos eran mayoritariamente ___; tras la domesticación de plantas, se convirtieron en ___."

explicacion: |
  La capacidad de producir alimento permitió que los grupos humanos dejaran de desplazarse constantemente.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "avanzado"
  tags: ["geografia", "cultivos"]

variables:
  datos: [["China", "arroz"], ["Andes", "papa"], ["Creciente Fértil", "trigo"]]
  idx: uno_de([0,1,2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["arroz", "papa", "trigo"]

enunciado: "Si un arqueólogo encuentra restos de tubérculos domesticados en la zona de {datos[idx][0]}, lo más probable es que se trate de ___."

explicacion: |
  La domesticación de la papa es un proceso clave que ocurrió en la región andina.
```

```
metadata:
  materia: "historia"
  tema: "revolucion_neolitica"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

respuesta: ["Recolección", "Domesticación", "Sedentarismo", "Excedente"]
tipo: ordenar
opciones_explicitas: ["Recolección", "Domesticación", "Sedentarismo", "Excedente"]

enunciado: "Ordena cronológicamente los procesos que definen la transición del Paleolítico al Neolítico:"

explicacion: |
  Primero se recolectaba, luego se domesticó la especie, lo que permitió el sedentarismo y finalmente la creación de excedentes que permitieron la especialización del trabajo.
```

## Sección: revoluciones-burguesas-liberalismo (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "basico"
  tags: ["revolucion_francesa", "burguesia"]

respuesta: "burguesía"
tipo: completar
respuestas_validas: ["burguesía", "la burguesía"]

enunciado: "Durante el siglo XVIII, la clase social que lideró el desafío al Antiguo Régimen, buscando mayor participación política y la eliminación de los privilegios feudales, fue la ___."

explicacion: |
  La burguesía, compuesta por comerciantes, banqueros y profesionales, poseía poder económico pero carecía de poder político, lo que impulsó las revoluciones liberales.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["derechos_humanos", "liberalismo"]

variables:
  es_derecho_natural: uno_de([true, falso])

respuesta: uno_de([true, falso])
tipo: mc
opciones_explicitas: [true, falso]

enunciado: "En el contexto de la Revolución Francesa, el principio de que los hombres nacen y permanecen libres e iguales en derechos es un pilar del liberalismo. ¿Se considera este un derecho natural según la filosofía ilustrada que impulsó la revolución? {es_derecho_natural}"

explicacion: |
  La Ilustración promovió la idea de que la libertad y la igualdad son derechos inherentes al ser humano, rompiendo con la idea de que los derechos eran concesiones del monarca.
```

```
metadata:
  materia: "historia_profucha"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["causas", "monarquia_absoluta"]

respuesta: "Absolutismo"
tipo: mc
opciones_explicitas: ["Absolutismo", "Feudalismo", "Democracia", "Teocracia"]

enunciado: "El sistema político que la burguesía buscaba derrocar mediante la implementación de constituciones y la división de poderes era el:"

explicacion: |
  El absolutismo concentraba todo el poder en la figura del monarca, impidiendo la representación de los sectores económicos emergentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "avanzado"
  tags: ["procesos", "etapas"]

respuesta: ["Estados Generales", "Asamblea Nacional", "Convención Nacional", "Directorio"]
tipo: ordenar
opciones_explicitas: ["Estados Generales", "Asamblea Nacional", "Convención Nacional", "Directorio"]

enunciado: "Ordene cronológicamente las siguientes etapas o instituciones de la Revolución Francesa, desde el estallido de la crisis hasta la consolidación del orden burgués:"

explicacion: |
  La revolución transitó desde la crisis de los Estados Generales hacia la soberanía de la Asamblea, la radicalización de la Convención y finalmente el orden moderado del Directorio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["economia", "liberalismo"]

respuesta: "Libre mercado"
tipo: completar
respuestas_validas: ["Libre mercado", "el libre mercado"]

enunciado: "La burguesía, al consolidar su poder político, promovió la eliminación de las aduanas internas y los gremios, abogando por la libertad de comercio y el ___."

explicacion: |
  El liberalismo económico buscaba eliminar las trabas corporativas y estatales para permitir la libre competencia y la expansión del capitalismo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "basico"
  tags: ["liberalismo", "derechos"]

respuesta: "igualdad ante la ley"
tipo: completar
respuestas_validas: ["igualdad ante la ley", "igualdad jurídica"]

enunciado: "El liberalismo político postula que todos los ciudadanos deben ser tratados de la misma forma por el Estado, principio conocido como ___."

explicacion: |
  La igualdad ante la ley (o igualdad jurídica) es el pilar que busca eliminar los privilegios de la nobleza y el clero, estableciendo que la ley es la misma para todos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["poderes", "montesquieu"]

variables:
  escenario: uno_de([["Ejecutivo", "Legislativo", "Judicial"], ["Poder Real", "Parlamento", "Tribunales"]])

respuesta: "separación de poderes"
tipo: mc
opciones_explicitas: ["centralización absoluta", "separación de poderes", "supremacía monárquica", "gobierno de facciones"]

enunciado: "Para evitar la tiranía, el liberalismo clásico propone la {escenario[0]} como mecanismo de control mutuo."

explicacion: |
  La separación de poderes (Ejecutivo, Legislativo y Judicial) busca que ninguna entidad concentre todo el control del Estado.
```

```
metadata:
  materia: "historia_profucha"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["soberanía", "democracia"]

respuesta: "soberanía popular"
tipo: mc
opciones_explicitas: ["derecho divino", "soberanía popular", "voluntad del monarca", "orden natural"]

enunciado: "A diferencia del absolutismo, donde el poder emanaba de Dios hacia el Rey, el liberalismo sostiene que el poder reside en el pueblo, concepto denominado ___."

explicacion: |
  La soberanía popular establece que la legitimidad de un gobierno proviene del consentimiento de los gobernados.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "avanzado"
  tags: ["derechos", "individuo"]

respuesta: ["libertad", "propiedad", "seguridad"]
tipo: ordenar
opciones_explicitas: ["libertad", "propiedad", "seguridad"]

enunciado: "Según la tradición de las declaraciones de derechos de la era revolucionaria, se deben proteger los derechos naturales del individuo. Ordene los siguientes conceptos según la secuencia clásica de la Declaración de Derechos del Hombre y del Ciudadano (en orden de mención):"

explicacion: |
  La Declaración de 1789 establece que los hombres nacen y permanecen libres e iguales en derechos, mencionando la libertad, la propiedad, la seguridad y la resistencia a la opresión.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["estado", "derechos"]

respuesta: "derechos individuales"
tipo: mc
opciones_explicitas: ["derechos individuales", "bienestar colectivo", "interés de la corona", "estabilidad social"]

enunciado: "El objetivo principal del Estado liberal es la protección de los ___ frente a la arbitrariedad del poder público."

explicacion: |
  El liberalismo pone al individuo y sus derechos naturales (libertad, propiedad, etc.) como el fin último de la organización política.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "basico"
  tags: ["revolucion_francesa", "lema"]

tipo: mc
opciones_explicitas: ["Libertad, Igualdad, Fraternidad", "Libertad, Igualdad, Propiedad", "Igualdad, Justicia, Libertad", "Libertad, Orden, Progreso"]

enunciado: "El lema que sintetiza los ideales de la Revolución Francesa es:"

explicacion: |
  El lema 'Libertad, Igualdad, Fraternidad' (Liberté, Égalité, Fraternité) fue el pilar ideológico que impulsó la caída del Antiguo Régimen.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["derechos_humanos", "declaracion_1789"]

tipo: completar
respuestas_validas: ["1789"]

enunciado: "La Declaración de los Derechos del Hombre y del Ciudadano fue adoptada por la Asamblea Nacional Constituyente en el año ____."

explicacion: |
  La Declaración de 1789 es uno de los documentos fundacionales de la democracia moderna, estableciendo que los hombres nacen y permanecen libres e iguales en derechos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "avanzado"
  tags: ["derechos_humanos", "soberania"]

variables:
  idx: uno_de([0, 1])
  datos: [["La soberanía reside en la Nación", "La ley es la expresión de la voluntad general"], ["La ley es la expresión de la voluntad general", "La soberanía reside en la Nación"]]

tipo: mc
opciones_explicitas: ["La soberanía reside en la Nación", "La soberanía reside en el Monarca", "La soberanía reside en la Iglesia", "La soberanía reside en la Aristocracia"]]

enunciado: "Según la Declaración de 1789, el principio de soberanía establece que: {datos[idx][0]}"

explicacion: |
  El Artículo 3 de la Declaración establece que "El principio de toda soberanía reside esencialmente en la Nación".
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["cronologia", "eventos"]

tipo: ordenar
opciones_explicitas: ["Toma de la Bastilla", "Declaración de los Derechos del Hombre", "Ejecución de Luis XVI"]

enunciado: "Ordena cronológicamente los siguientes hitos de la Revolución Francesa:"

explicacion: |
  La Bastilla cayó en julio de 1789, la Declaración se aprobó en agosto de 1789 y la ejecución del Rey ocurrió en enero de 1793.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["igualdad", "derechos"]

tipo: completar
tolerancia_abs: 0

enunciado: "La Declaración de 1789 establece que los hombres nacen y permanecen libres e ____ en derechos."

explicacion: |
  El concepto de igualdad ante la ley fue fundamental para desmantelar los privilegios estamentales del feudalismo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "basico"
  tags: ["absolutismo", "soberania"]

respuesta: "soberanía_nacional"
tipo: completar
respuestas_validas: ["soberanía_nacional"]

enunciado: "Con el ascenso de las revoluciones burguesas, el principio de la ___ desplazó al concepto de la soberanía de derecho divino del monarca."

explicacion: |
  Las revoluciones burguesas (como la Revolución Francesa) trasladaron el origen del poder del monarca a la nación o al pueblo, estableciendo la soberanía nacional como base del Estado moderno.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["ciudadania", "estamentos"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [
    ["El sistema de estamentos", "La sociedad de ciudadanos"],
    ["El absolutismo monárquico", "El constitucionalismo liberal"]
  ]

respuesta: escenario[escenario_idx][1
tipo: mc
opciones_explicitas: ["escenario[0][1]", "escenario[1][1]"]

enunciado: "La burguesía buscaba reemplazar ___ por ___."

explicacion: |
  El paso fundamental fue la transición de una sociedad dividida por privilegios de nacimiento (estamentos) a una sociedad de individuos con derechos iguales ante la ley (ciudadanía).
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["constitucion", "derechos"]

respuesta: ["Constitución", "División de poderes", "Derechos individuales"]
tipo: ordenar
opciones_explicitas: ["Constitución", "División de poderes", "Derechos individuales"]

enunciado: "Ordena los pilares del Estado Liberal que surgieron para limitar el poder absoluto:"

explicacion: |
  El orden lógico y funcional del Estado Liberal implica primero una norma suprema (Constitución), la fragmentación del poder para evitar la tiranía (División de poderes) y la protección de las libertades (Derechos individuales).
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "avanzado"
  tags: ["economia", "propiedad"]

variables:
  valor_propiedad: 1
  es_derecho_fundamental: valor_propiedad == 1

respuesta: verdadero
tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "En el marco de las revoluciones burguesas, la propiedad privada se consolidó como un derecho natural e inviolable, oponiéndose a las trabas feudales."

explicacion: |
  La protección de la propiedad privada fue un motor clave de la burguesía para eliminar los derechos señoriales y los impuestos arbitrarios de la nobleza.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["parlamento", "representacion"]

variables:
  tipo_sufragio: uno_de(["universal", "censitario"])
  tipo_texto: ["universal", "censitario"]

respuesta: tipo_texto[tipo_sufragio
tipo: mc
opciones_explicitas: ["universal", "censitario"]

enunciado: "Aunque las revoluciones burguesas promovieron la representación, en la práctica inicial, la mayoría de los regímenes liberales aplicaron un sufragio ___ (basado en la renta o propiedad)."

explicacion: |
  Si bien el ideal era la igualdad, el liberalismo clásico fue inicialmente 'censitario', limitando el derecho al voto a aquellos con propiedades o ingresos suficientes, excluyendo a las masas trabajadoras.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "basico"
  tags: ["liberalismo", "poder"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["Un sistema donde el Rey dicta las leyes, las ejecuta y las juzga a su voluntad.", "Separación de poderes"],
    ["Un sistema donde el Rey tiene el control total de la justicia, el legislativo y el ejecutivo.", "Separación de poderes"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["Igualdad", "Libertad", "Separación de poderes"]

enunciado: "En el contexto de las revoluciones burguesas, un sistema donde {escenarios[escenario_idx][0]} representa una violación de qué principio liberal fundamental?"

explicacion: |
  El liberalismo político busca evitar la tiranía mediante la división de funciones del Estado en órganos distintos e independientes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "basico"
  tags: ["liberalismo", "derechos"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["la nobleza tiene privilegios legales que el campesino no posee", "Igualdad"],
    ["el nacimiento determina los derechos civiles de una persona", "Igualdad"]
  ]

respuesta: casos[caso_idx][1
tipo: mc
opciones_explicitas: ["Igualdad", "Libertad", "Propiedad"]

enunciado: "Si en una sociedad {casos[caso_idx][0]}, se está negando el principio de ___."

explicacion: |
  La igualdad ante la ley (isonomía) es un pilar del liberalismo que busca eliminar los estamentos y privilegios de la aristocracia.
```

```
metadata:
  materia: "historia_profucha"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["liberalismo", "derechos"]

variables:
  situacion_idx: uno_de([0, 1])
  situaciones: [
    ["el Estado prohíbe la libre circulación de mercancías", "Libertad"],
    ["el Estado impone censura previa a las ideas publicadas", "Libertad"]
  ]

respuesta: situaciones[situacion_idx][1
tipo: completar
respuestas_validas: ["Libertad"]

enunciado: "Cuando el Estado interviene de forma arbitraria, como cuando ___ , se está vulnerando el principio de ___."

explicacion: |
  El liberalismo defiende un ámbito de acción individual (libertad de culto, expresión, comercio) donde el Estado no debe interferir.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "intermedio"
  tags: ["liberalismo", "conceptos"]

respuesta: ["Igualdad", "Libertad", "Propiedad"]
tipo: ordenar
opciones_explicitas: ["Propiedad", "Igualdad", "Libertad"]

enunciado: "Ordena los siguientes pilares del pensamiento liberal clásico, desde el que busca la justicia social ante el privilegio, pasando por la autonomía individual, hasta la base económica burguesa:"

explicacion: |
  La tríada clásica suele entender la igualdad ante la ley, la libertad individual y el derecho a la propiedad privada como ejes de la modernidad liberal.
```

```
metadata:
  materia: "historia_profunda"
  tema: "revoluciones_burguesas_liberalismo"
  nivel: "avanzado"
  tags: ["liberalismo", "soberania"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["la soberanía reside en el monarca por derecho divino", "Libertad"],
    ["el poder emana del pueblo a través de la ley", "Libertad"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["Igualdad", "Libertad", "Propiedad"]

enunciado: "Si en una constitución se establece que {escenarios[escenario_idx][0]}, se está rompiendo con el principio de ___ política (entendida como la capacidad de autodeterminación)."

explicacion: |
  La transición de la soberanía de Dios/Rey a la soberanía nacional es el paso fundamental hacia la libertad política moderna.
```

## Sección: rocas-igneas-sedimentarias-metamorficas (23 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "basico"
  tags: ["geologia", "magma"]

tipo: mc
opciones_explicitas: ["Enfriamiento de magma o lava", "Acumulación de sedimentos", "Presión y temperatura extrema", "Evaporación de agua salada"]

enunciado: "Las rocas ígneas se originan principalmente por el proceso de ___."

explicacion: |
  Las rocas ígneas se forman cuando el material fundido (magma si es intrusivo o lava si es extrusivo) se enfría y se solidifica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "basico"
  tags: ["granito", "basalto"]

variables:
  escenario: uno_de([["granito", "intrusiva"], ["basalto", "extrusiva"]])

tipo: completar
respuestas_validas: ["intrusiva", "extrusiva"]

enunciado: "Si el magma se enfría lentamente bajo la superficie terrestre, forma una roca de tipo {escenario[0]} y su clasificación es ___."

explicacion: |
  El {escenario[0]} es una roca ígnea {escenario[1]} porque se formó en el interior de la corteza.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "intermedio"
  tags: ["clasificacion"]

tipo: mc
opciones_explicitas: ["Granito y Basalto", "Caliza y Arenisca", "Mármol y Pizarra", "Granito y Caliza"]

enunciado: "¿Cuál de los siguientes pares de rocas son ejemplos de rocas ígneas?"

explicacion: |
  El granito es una roca ígnea intrusiva y el basalto es una roca ígnea extrusiva.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "basico"
  tags: ["magma", "lava"]

tipo: mc
opciones_explicitas: ["Magma", "Lava", "Sedimento", "Cristal"]

enunciado: "Cuando el material fundido sale a la superficie terrestre, se denomina ___."

explicacion: |
  El término magma se usa para el material fundido bajo la superficie, mientras que lava es el término para el material que ya ha emergido.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas"
  nivel: "avanzado"
  tags: ["textura", "enfriamiento"]

variables:
  caso: uno_de([["lento", "cristales grandes"], ["rápido", "cristales pequeños"]])

tipo: completar
respuestas_validas: ["cristales grandes", "cristales pequeños"]

enunciado: "Un enfriamiento de tipo {caso[0]} en el interior de la corteza produce rocas con ___."

explicacion: |
  El enfriamiento {caso[0]} permite que los minerales tengan tiempo de crecer, resultando en {caso[1]}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["sedimentarias", "procesos"]

tipo: mc
opciones_explicitas: ["Fragmentación de rocas ígneas", "Enfriamiento de magma", "Presión y calor extremo", "Sublimación de gases"]

enunciado: "Las rocas sedimentarias se forman principalmente a través del proceso de acumulación y compactación de ___."

explicacion: |
  Las rocas sedimentarias se originan por la acumulación de sedimentos (fragmentos de otras rocas, restos orgánicos o sales) que se depositan en capas y se compactan con el tiempo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["ejemplos", "sedimentarias"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[["arenisca", "caliza"], ["lutita", "conglomerado"]]]

tipo: mc
opciones_explicitas: ["Arenisca y caliza", "Granito y basalto", "Mármol y pizarra", "Obsidiana y pumita"]

enunciado: "Un ejemplo clásico de rocas que se forman por la acumulación de sedimentos es el par: {datos[escenario_idx][0]}."

explicacion: |
  La arenisca (formada por granos de arena) y la caliza (frecuentemente de origen orgánico o químico) son ejemplos fundamentales de rocas sedimentarias.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["procesos", "compactacion"]

tipo: ordenar
opciones_explicitas: ["Meteorización y erosión", "Transporte de sedimentos", "Deposición en capas", "Litificación (compactación y cementación)"]

enunciado: "Ordena cronológicamente los pasos necesarios para la formación de una roca sedimentaria:"

explicacion: |
  Primero la roca madre se rompe (meteorización), los restos viajan (transporte), se asientan (deposición) y finalmente se transforman en roca sólida (litificación).
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["sedimentos", "composición"]

tipo: completar
respuestas_validas: ["restos orgánicos"]

enunciado: "Además de fragmentos de otras rocas, las rocas sedimentarias pueden formarse por la acumulación de ___."

explicacion: |
  Los restos orgánicos (como conchas de animales o materia vegetal) son componentes esenciales que, al acumularse, dan lugar a rocas como la caliza.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["estratigrafia", "calculo"]

variables:
  espesor_capa: random_float(1.5, 5.5)
  cantidad_capas: 12

tipo: completar
tolerancia_abs: 0.1

enunciado: "Si un afloramiento sedimentario presenta {cantidad_capas} capas, y cada capa tiene un espesor promedio de {espesor_capa} metros, ¿cuál es el espesor total del afloramiento en metros?"

pasos:
  - "Determinar el espesor de una capa: {espesor_capa}"
  - "Multiplicar el espesor por el número de capas: {espesor_capa} * {cantidad_capas}"

explicacion: |
  El espesor total se obtiene multiplicando el espesor de una capa individual por la cantidad total de capas depositadas.
```

```
metadata:
  materia: "geologia"
  tema: "rocas_metamorficas"
  nivel: "basico"
  tags: ["procesos", "calor", "presion"]

tipo: mc
opciones_explicitas: ["fundición completa de la roca", "transformación por calor y/o presión sin fundirse", "acumulación de sedimentos en el lecho marino", "enfriamiento de magma expuesto"]

enunciado: "Las rocas metamórficas se forman cuando una roca preexistente es sometida a condiciones de ___ sin llegar a fundirse."

respuesta: "transformación por calor y/o presión sin fundirse"

explicacion: |
  El metamorfismo es un proceso de transformación en estado sólido. Si la roca se fundiera, se convertiría en magma y daría lugar a una roca ígnea.
```

```
metadata:
  materia: "geologia"
  tema: "rocas_metamorficas"
  nivel: "basico"
  tags: ["marmol", "caliza", "transformacion"]

variables:
  datos: [["caliza", "mármol"], ["granito", "gneis"], ["arenisca", "cuarcita"]]
  idx: uno_de([0, 1, 2])

tipo: completar
respuestas_validas: ["mármol", "gneis", "cuarcita"]

enunciado: "Cuando la roca ___ se somete a procesos metamórficos, se transforma en ___."

pasos:
  - "Identificar la roca sedimentaria original."
  - "Asociar su producto metamórfico correspondiente."

respuesta: datos[idx][1]

explicacion: |
  La caliza es una roca sedimentaria que, bajo presión y temperatura, se recristaliza para formar mármol.
```

```
metadata:
  materia: "geologia"
  tema: "rocas_metamorficas"
  nivel: "intermedio"
  tags: ["clasificacion", "origen"]

tipo: ordenar
opciones_explicitas: ["Magma", "Roca Ígnea", "Roca Sedimentaria", "Roca Metamórfica"]

enunciado: "Ordena el ciclo de formación de las rocas según su origen, desde el material fundido hasta la roca transformada por presión:"

respuesta: ["Magma", "Roca Ígnea", "Roca Sedimentaria", "Roca Metamórfica"]

explicacion: |
  El ciclo comienza con el magma que al enfriarse crea rocas ígneas; estas pueden erosionarse en sedimentos (sedimentarias) y finalmente transformarse por presión en metamórficas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["fósiles", "sedimentarias"]

tipo: mc
opciones_explicitas: ["Rocas ígneas", "Rocas sedimentarias", "Rocas metamórficas"]

enunciado: "Los fósiles se encuentran casi exclusivamente en un tipo de roca llamado ________."

explicacion: |
  Los fósiles requieren la acumulación de sedimentos que entierren la materia orgánica rápidamente. Las rocas ígneas y metamórficas implican procesos de calor y presión que destruyen los restos orgánicos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["procesos", "fósiles"]

tipo: mc
opciones_explicitas: ["Calor y presión", "Erosión y sedimentación", "Cristalización y enfriamiento"]

enunciado: "Las rocas ígneas y metamórficas suelen destruir la materia orgánica debido a la acción de:"

explicacion: |
  El calor extremo de la formación de rocas ígneas y la presión de las metamórficas descomponen o funden cualquier resto orgánico que pudiera existir.
```

```
metadata:
  materia: "historia_profucha"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "avanzado"
  tags: ["geologia", "fósiles"]

variables:
  escenario_idx: uno_de([0, 1])

respuesta: tabla[escenario_idx][1
tipo: completar
respuestas_validas: ["sedimentarias", "ígneas"]

enunciado: "Si un paleontólogo busca restos de un trilobita, lo hará en rocas de tipo {tabla[escenario_idx][0]}. Si busca magma solidificado, lo hará en rocas {tabla[escenario_idx][1]}."

pasos:
  - "Identificar el tipo de roca donde se preserva la vida."
  - "Identificar el origen de las rocas ígneas."

explicacion: |
  Los fósiles son indicadores de ambientes sedimentarios. Las rocas ígneas resultan de magma y las metamórficas de transformación por calor/presión.

variables_contexto:
  tabla: [["sedimentarias", "sedimentarias"], ["ígneas", "ígneas"]]
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["clasificacion"]

tipo: ordenar
opciones_explicitas: ["Sedimentación", "Litificación", "Fosilización"]

enunciado: "Ordena los pasos típicos para la formación de un fósil en una roca sedimentaria:"

explicacion: |
  Primero los restos se cubren con sedimentos (sedimentación), luego esos sedimentos se compactan (litificación) y finalmente se preservan los restos (fosilización).
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["conceptos"]

tipo: mc
opciones_explicitas: ["Verdadero", "Falso"]

enunciado: "¿Es posible encontrar fósiles de plantas en una corriente de lava fresca?"

explicacion: |
  No, el calor extremo de la lava (roca ígnea) incineraría instantáneamente la materia orgánica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["clasificacion", "rocas"]

variables:
  datos: [["Magma enfriado lentamente bajo la superficie", "ignea"], ["Sedimentos compactados por presión", "sedimentaria"], ["Roca transformada por calor y presión", "metamorfica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["ignea", "sedimentaria", "metamorfica"]

enunciado: "Se observa una roca cuya formación se describe como: {datos[idx][0]}. ¿A qué tipo de roca pertenece?"

explicacion: |
  Las rocas se clasifican según su origen: las ígneas vienen de magma, las sedimentarias de sedimentos y las metamórficas de transformación.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["procesos", "geologia"]

variables:
  datos: [["Litificación de sedimentos", "sedimentaria"], ["Cristalización de lava", "ignea"], ["Recristalización mineral", "metamorfica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["sedimentaria", "ignea", "metamorfica"]

enunciado: "El proceso observado es la {datos[idx][0]}. Por lo tanto, la roca es de tipo ___."

explicacion: |
  Cada proceso geológico es característico de un grupo de rocas específico.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "avanzado"
  tags: ["textura", "clasificacion"]

variables:
  datos: [["presencia de fósiles", "sedimentaria"], ["textura afanítica", "ignea"], ["foliación marcada", "metamorfica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["sedimentaria", "ignea", "metamorfica"]

enunciado: "Una muestra presenta {datos[idx][0]}. Esto indica que es una roca ___."

explicacion: |
  La textura y la presencia de fósiles son indicadores clave del origen de la roca.
```

```
metadata:
  materia: "historia_profunda"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "intermedio"
  tags: ["ciclo_rocoso", "orden"]

variables:
  datos: [["Magma", "Sedimento", "Roca Metamorfica"], ["Lava", "Sedimento", "Roca Ignea"], ["Sedimento", "Roca Sedimentaria", "Roca Metamorfica"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx]
tipo: ordenar
opciones_explicitas: ["Magma", "Sedimento", "Roca Metamorfica", "Lava", "Sedimento", "Roca Ignea", "Sedimento", "Roca Sedimentaria", "Roca Metamorfica"]

enunciado: "Ordena los elementos según el proceso de formación de una roca sedimentaria a partir de material ígneo erosionado:"

explicacion: |
  El ciclo de las rocas implica la transformación constante de un tipo en otro mediante procesos geológicos.
```

```
metadata:
  materia: "historia_profucha"
  tema: "rocas_igneas_sedimentarias_metamorficas"
  nivel: "basico"
  tags: ["calor", "presion"]

variables:
  datos: [["fusión parcial", "ignea"], ["compactación", "sedimentaria"], ["reordenamiento atómico", "metamorfica"]]
  idx: uno_de([0, 1, 2])

respuestas_validas: [datos[idx][1]]
respuesta: datos[idx][1]
tipo: completar
tolerancia_abs: 0

enunciado: "Si una roca se forma por {datos[idx][0]}, su clasificación es ___."

explicacion: |
  La fusión produce magma (ígnea), la compactación produce sedimentaria y el reordenamiento por calor/presión produce metamórfica.
```

## Sección: sedentarizacion-excedente (25 preguntas)

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["sedentarizacion", "agricultura"]

respuesta: "sedentarios"
tipo: completar
respuestas_validas: ["sedentarios"]

enunciado: "Al depender de la agricultura y la domesticación de plantas, los grupos humanos dejaron de ser nómadas para convertirse en ___."

explicacion: |
  La capacidad de producir alimento de forma controlada permitió que los grupos humanos se establecieran en un lugar fijo, dando inicio a la sedentarización.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["causas", "agricultura"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["El cultivo de cereales permitió el asentamiento", "la agricultura"],
    ["La domesticación de plantas impulsó", "la agricultura"]
  ]

respuesta: escenarios[escenario_idx][1
tipo: mc
opciones_explicitas: ["la caza", "la agricultura", "la recolección", "la migración"]

enunciado: "{escenarios[escenario_idx][0]} fue el motor principal de la sedentarización."

explicacion: |
  El paso de una economía de subsistencia basada en la recolección a una basada en la producción agrícola permitió la permanencia en un territorio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["excedente", "especializacion"]

respuesta: "especialización"
tipo: completar
respuestas_validas: ["especialización", "especializacion"]

enunciado: "La generación de un ___ agrícola permitió que no todos los individuos tuvieran que dedicarse a la producción de alimentos, dando lugar a la ___ del trabajo."

explicacion: |
  El excedente alimentario permitió que surgieran otros roles sociales (artesanos, guerreros, sacerdotes), rompiendo la igualdad de la economía de subsistencia.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["procesos", "ordenar"]

respuesta: ["Domesticación de plantas", "Producción de excedentes", "Asentamientos permanentes", "Especialización social"]
tipo: ordenar
opciones_explicitas: ["Domesticación de plantas", "Producción de excedentes", "Asentamientos permanentes", "Especialización social"]

enunciado: "Ordena cronológicamente los procesos que permitieron el surgimiento de las primeras civilizaciones:"

explicacion: |
  Primero se domestican las especies, lo que genera comida de sobra (excedente), lo que permite quedarse en un lugar (sedentarismo) y finalmente permite que la sociedad se divida en clases o profesiones.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["territorio", "geografia_humana"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [
    ["El asentamiento cerca de ríos", "fueron"],
    ["La agricultura de riego", "fueron"]
  ]

respuesta: "fueron"
tipo: mc
opciones_explicitas: ["fueron", "fueron"]

enunciado: "Los asentamientos permanentes {casos[caso_idx][0]} una consecuencia directa de la necesidad de cuidar los cultivos."

explicacion: |
  La agricultura requiere una inversión de tiempo y cuidado constante en el mismo terreno, lo que obliga a la población a permanecer en un radio cercano a sus campos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["agricultura", "conceptos"]

tipo: mc
opciones_explicitas: ["La producción total de alimentos de una comunidad", "La producción de alimento por encima de lo necesario para la subsistencia", "El proceso de transformar granos en harina", "El intercambio de semillas entre comunidades"]

enunciado: "En el contexto de la Revolución Neolítica, ¿qué se define como excedente agrícola?"

explicacion: |
  El excedente es la cantidad de alimento que sobra después de haber cubierto las necesidades básicas de supervivencia de la población. Este sobrante es la base de la especialización del trabajo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["sociedad", "especializacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["comerciar con otros grupos", "alimentar a artesanos y sacerdotes"],
    ["almacenar para tiempos de sequía", "permitir la aparición de jerarquías sociales"]
  ]

tipo: mc
opciones_explicitas: ["Reducir el tamaño de las poblaciones", "Fomentar la autosuficiencia absoluta", "Permitir la especialización del trabajo", "Eliminar la necesidad de agricultura"]

enunciado: "La existencia de un excedente agrícola permitió que parte de la población pudiera dedicarse a actividades distintas a la producción de alimentos, como {escenarios[escenario_idx][0]} o {escenarios[escenario_idx][1]}. ¿A qué proceso social dio lugar esto?"

explicacion: |
  Al no tener que producir comida todos los días, surgieron especialistas (artesanos, guerreros, administradores) y se consolidaron las estructuras sociales complejas.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["nomadismo", "sedentarismo"]

tipo: ordenar
opciones_explicitas: ["Domesticación de plantas y animales", "Producción de excedente agrícola", "Formación de asentamientos permanentes", "Aparición de la división social del trabajo"]

enunciado: "Ordena cronológicamente los procesos que permitieron la transición del nomadismo al sedentarismo complejo:"

explicacion: |
  Primero se domestican especies, lo que permite producir más de lo que se consume; esto permite quedarse en un lugar (sedentarismo) y finalmente permite que no todos trabajen en el campo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["economia_antigua"]

tipo: completar
respuestas_validas: ["comercio", "intercambio"]

enunciado: "El excedente agrícola no solo servía para el almacenamiento, sino que también facilitó el ________ con otros grupos humanos."

explicacion: |
  El sobrante de productos permite que una comunidad obtenga otros bienes que no produce, dando origen a las primeras redes de intercambio o comercio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["logica", "economia"]

variables:
  datos: [
    [100, 70],
    [250, 180],
    [50, 45]
  ]
  idx: uno_de([0, 1, 2])
  produccion: datos[idx][0]
  consumo: datos[idx][1]

tipo: completar
enunciado: "Si una comunidad agrícola produce {produccion} sacos de grano y el consumo necesario para su subsistencia es de {consumo} sacos, ¿cuántos sacos representan el excedente?"

pasos:
  - "Identificar la producción total"
  - "Identificar el consumo de subsistencia"
  - "Restar el consumo de la producción para hallar el sobrante"

explicacion: |
  El excedente se calcula mediante la resta: Producción - Consumo. En este caso, el resultado es {produccion - consumo}.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["sedentarizacion", "excedente", "division_del_trabajo"]

tipo: mc
opciones_explicitas: ["La agricultura de subsistencia", "La acumulación de excedente", "La caza y recolección", "El nomadismo"]

enunciado: "El fenómeno que permitió, por primera vez, que ciertos grupos humanos se dedicaran a tareas distintas a la obtención de alimento fue..."

explicacion: |
  El excedente agrícola permitió que no toda la población tuviera que producir comida, dando lugar a la especialización del trabajo.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["clases_sociales", "especializacion"]

variables:
  escenario: uno_de([
    ["artesanos", "creadores de herramientas y objetos"],
    ["sacerdotes", "encargados de rituales y la cosmogonía"],
    ["gobernantes", "encargados de la administración y defensa"]
  ])

tipo: completar
respuestas_validas: ["artesanos", "sacerdotes", "gobernantes"]

enunciado: "Gracias al excedente, surgieron roles especializados. Un grupo dedicado a la producción de objetos se denomina {escenario[0]}, mientras que quienes gestionaban el orden político eran los {escenario[2]}."

pasos:
  - "Identificar la función social descrita."
  - "Relacionar la función con el término correspondiente."

explicacion: |
  La división del trabajo permitió la aparición de especialistas en la producción, la religión y la política.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["division_del_trabajo", "jerarquia"]

tipo: ordenar
opciones_explicitas: ["Producción de excedente", "Sedentarismo", "División del trabajo", "Especialización social"]

enunciado: "Ordena cronológicamente los procesos que permitieron la aparición de las primeras civilizaciones complejas:"

explicacion: |
  Primero se establece el sedentarismo, lo que permite producir excedentes; esto a su vez permite la división del trabajo y finalmente la especialización de roles sociales.
```

```
metadata:
  materia: "historia_profucha"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["excedente", "base_social"]

tipo: mc
opciones_explicitas: ["La escasez de recursos", "La división del trabajo", "El excedente de producción", "La guerra constante"]

enunciado: "La base fundamental que permitió la división del trabajo en las sociedades neolíticas fue..."

explicacion: |
  Sin un excedente de alimentos, cada individuo debe dedicar la mayor parte de su tiempo a asegurar la supervivencia alimentaria.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["especializacion", "clases_sociales"]

variables:
  rol: uno_de([
    ["artesano", "el que transforma la materia prima"],
    ["sacerdote", "el que media con lo sagrado"],
    ["gobernante", "el que ejerce el poder político"]
  ])

tipo: mc
opciones_explicitas: ["artesano", "sacerdote", "gobernante"]

enunciado: "Si una sociedad cuenta con excedentes y surge una clase dedicada exclusivamente a la gestión del orden y la defensa, estamos ante la figura del {rol[2]}."

explicacion: |
  La gestión del poder es una de las especializaciones más tempranas derivadas de la organización de sociedades con excedentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["sedentarizacion", "poblacion"]

respuesta: "crecimiento"
tipo: completar
respuestas_validas: ["crecimiento"]

enunciado: "La transición de la vida nómada a la sedentarización favoreció el ___ poblacional debido a la estabilidad en el suministro de alimentos."

explicacion: |
  Al establecerse en un lugar fijo y cultivar alimentos, las comunidades pudieron asegurar un suministro constante, lo que permitió que la población creciera de forma sostenida.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["aldeas", "asentamientos"]

opciones_explicitas: ["Asentamientos temporales", "Aldeas permanentes", "Migraciones constantes"]
respuesta: "Aldeas permanentes"
tipo: mc

enunciado: "La capacidad de producir excedentes agrícolas permitió que los grupos humanos abandonaran el nomadismo y fundaran:"

explicacion: |
  El excedente de comida permitió que las personas no tuvieran que desplazarse constantemente en busca de alimento, dando origen a las primeras aldeas permanentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["nutrición", "recursos"]

variables:
  escenario_idx: uno_de([0, 1])

enunciado: "Considerando el escenario de {escenarios[escenario_idx][0]}, el factor principal que impulsó el aumento de la población fue {escenarios[escenario_idx][1]}."

variables:
  escenarios: [["estabilidad de recursos", "una mejor nutrición en cantidad"], ["excedente de granos", "la reducción de la mortalidad infantil"]]

respuesta: "uno_de([escenarios[escenario_idx][1]])"
tipo: mc
opciones_explicitas: ["una mejor nutrición en cantidad", "la reducción de la mortalidad infantil"]

explicacion: |
  La estabilidad en el suministro de recursos y una nutrición más constante son pilares fundamentales para el crecimiento demográfico en la era neolítica.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["proceso", "causa_efecto"]

opciones_explicitas: ["Agricultura", "Excedente de alimentos", "Aldeas permanentes"]
respuesta: ["Agricultura", "Excedente de alimentos", "Aldeas permanentes"]
tipo: ordenar

enunciado: "Ordene cronológicamente los procesos que permitieron la transición hacia la vida sedentaria:"

explicacion: |
  Primero se desarrolla la agricultura, esto genera un excedente de comida, lo que finalmente permite que los asentamientos se vuelvan permanentes.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["excedente", "sociedad"]

respuesta: "verdadero"
tipo: completar
enunciado: "¿El excedente de alimentos permitió que no todos los miembros de la aldea tuvieran que dedicarse a la agricultura, dando paso a la especialización del trabajo?"

explicacion: |
  Exacto. Al haber comida de sobra (excedente), algunas personas pudieron dedicarse a otras tareas como la alfarería, la metalurgia o la administración.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["agricultura", "sedentarismo"]

variables:
  datos: [["el cultivo de cereales permitió almacenar comida", "la sedentarización"], ["la domesticación de animales generó excedentes", "el aumento de la población"], ["el control del riego aseguró cosechas", "la formación de los primeros asentamientos"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["la sedentarización", "el aumento de la población", "la formación de los primeros asentamientos"]

enunciado: "Si consideramos que {datos[idx][0]}, el efecto directo fue ___."

explicacion: |
  La capacidad de producir más alimento del que se consume inmediatamente (excedente) permitió que los grupos humanos dejaran de ser nómadas y se establecieran en lugares fijos.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["excedente", "especializacion"]

variables:
  datos: [["excedente alimentario", "especialización del trabajo"], ["excedente alimentario", "aparición de jerarquías"], ["excedente alimentario", "desarrollo del comercio"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1
tipo: mc
opciones_explicitas: ["especialización del trabajo", "aparición de jerarquías", "desarrollo del comercio"]

enunciado: "Cuando una sociedad logra un {datos[idx][0]}, surge como consecuencia la ___."

explicacion: |
  Al no tener que dedicar todo el tiempo a la búsqueda de alimento, algunos individuos pudieron dedicarse a otras tareas como la artesanía, la metalurgia o la administración.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["secuencia", "neolitico"]

respuesta: ["Domesticación de plantas", "Producción de excedentes", "Sedentarización", "Estratificación social"]
tipo: ordenar
opciones_explicitas: ["Domesticación de plantas", "Producción de excedentes", "Sedentarización", "Estratificación social"]

enunciado: "Ordena cronológicamente los procesos que permitieron el surgimiento de las primeras civilizaciones:"

explicacion: |
  La secuencia lógica comienza con la transformación de la dieta (domesticación), que genera sobras de comida (excedente), lo que permite vivir en un sitio fijo (sedentarización) y finalmente la división de clases (estratificación).
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["sedentarismo", "poblacion"]

variables:
  datos: [["el sedentarismo", "aumento de la densidad poblacional"], ["la agricultura", "aumento de la densidad poblacional"], ["el excedente", "aumento de la densidad poblacional"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["aumento de la densidad poblacional"]

enunciado: "La transición de la caza-recolección hacia {datos[idx][0]} provocó un ___."

explicacion: |
  La estabilidad de las fuentes de alimento permitió que las tasas de natalidad aumentaran y la mortalidad disminuyera, incrementando la densidad de habitantes en un mismo territorio.
```

```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["economia_prehistorica", "causalidad"]

variables:
  datos: [["excedente", "comercio"], ["excedente", "burocracia"], ["excedente", "urbanismo"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["comercio", "burocracia", "urbanismo"]

enunciado: "El control y la gestión del {datos[idx][0]} fue el motor que impulsó el desarrollo de la ___."

explicacion: |
  La necesidad de contabilizar y distribuir el excedente obligó a las sociedades a crear sistemas de registro y administración, dando origen a las primeras estructuras burocráticas.
```
