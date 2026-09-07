# Historia Profunda — Revolucion industrial (cuestionario, 25 preguntas VBLang)

> Ver `teoria.md` en esta misma carpeta.
>
>
> Corregido automáticamente (patrones de bug conocidos: `tipo: vf` con
> respuesta de texto -> `completar`, `tipo: input` -> `completar`,
> corchetes sueltos, `explicación` con tilde). Preguntas marcadas con
> advertencia en el reporte de corrección requieren revisión manual
> adicional (doble sorteo, operadores inválidos, arrays mal indexados).

---

### 1 — El motor del cambio

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["tecnologia", "energia"]

enunciado: "La Revolución Industrial en Inglaterra se caracterizó por el uso masivo de carbón como fuente de energía para impulsar la nueva ___."

respuesta: "máquina de vapor"
tipo: mc
opciones_explicitas: ["máquina de vapor", "motor de combustión", "molino de viento", "motor eléctrico"]

explicacion: |
  El uso del carbón mineral permitió el funcionamiento de la máquina de vapor de James Watt, motor fundamental de la Primera Revolución Industrial.
```

### 2 — El sistema de trabajo

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["social", "economia"]

enunciado: "El paso del 'putting-out system' (producción doméstica) al ___ supuso la concentración de trabajadores en grandes edificios llamados fábricas."

respuesta: "factory system"
tipo: mc
opciones_explicitas: ["factory system", "domestic system", "guild system", "corporative system"]

explicacion: |
  El 'factory system' o sistema de fábrica centralizó la producción, la maquinaria y la mano de obra en un mismo lugar, rompiendo con la producción artesanal en el hogar.
```

### 3 — Transformación del paisaje

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["urbanismo", "sociedad"]

respuesta: "urbanización"
tipo: completar
respuestas_validas:
  - "urbanización"
  - "ruralización"
  - "industrialización"

enunciado: "El desplazamiento masivo de población desde el campo hacia las ciudades para trabajar en las nuevas industrias provocó un acelerado proceso de ___."

explicacion: |
  La necesidad de mano de obra en las fábricas generó un éxodo rural sin precedentes, transformando las ciudades en centros densamente poblados.
```

### 4 — Secuencia de la Revolución

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

respuesta_orden: ["Producción artesanal en talleres pequeños", "Introducción de maquinaria textil mecánica", "Consolidación del sistema de fábricas y ferrocarril"]
tipo: ordenar
opciones_explicitas: ["Producción artesanal en talleres pequeños", "Introducción de maquinaria textil mecánica", "Consolidación del sistema de fábricas y ferrocarril"]

explicacion: |
  La transición fue un proceso gradual que comenzó con la mejora de herramientas manuales, siguió con la mecanización de la industria textil y culminó con la expansión del transporte ferroviario.
```

### 5 — Impacto social

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

### 6 — El motor del cambio

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["tecnologia", "james_watt"]

respuesta: "James Watt"
tipo: completar
respuestas_validas:
  - "James Watt"

enunciado: "El perfeccionamiento de la máquina de vapor por ___ fue el motor tecnológico que permitió la transición hacia la producción mecanizada."

explicacion: |
  James Watt no inventó la máquina de vapor, pero sus mejoras (como el condensador separado) la hicieron eficiente para la industria.
```

### 7 — Independencia de la ubicación

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

### 8 — Impacto en la producción

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["mecanizacion", "produccion"]

respuesta: "mecanización"
tipo: completar
respuestas_validas:
  - "mecanización"

enunciado: "La implementación de la tecnología de Watt facilitó la ___ de procesos que anteriormente se realizaban de forma manual o artesanal."

explicacion: |
  La mecanización permitió aumentar la escala de producción y reducir los tiempos de fabricación de manera exponencial.
```

### 9 — Secuencia de la Revolución

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "avanzado"
  tags: ["procesos", "causalidad"]

respuesta_orden: ["Revolución Agraria", "Máquina de Vapor", "Expansión de Ferrocarriles", "Urbanización Masiva"]
tipo: ordenar
opciones_explicitas: ["Revolución Agraria", "Máquina de Vapor", "Expansión de Ferrocarriles", "Urbanización Masiva"]

enunciado: "Ordena cronológicamente los procesos que impulsaron la Revolución Industrial:"

explicacion: |
  La revolución agrícola aumentó la oferta de alimentos; la máquina de vapor mecanizó la industria y el transporte; esto finalmente provocó un éxodo rural hacia las ciudades.
```

### 10 — El cambio de paradigma energético

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

### 11 — El éxodo rural

```
metadata:
  materia: "historia"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["urbanizacion", "migracion"]

variables:
  escenario: uno_de([["el cercamiento de tierras", "la búsqueda de empleo en las fábricas"], ["la mecanización de la agricultura", "la oferta de salarios en los centros urbanos"], ["la crisis de la industria artesanal", "la promesa de una vida mejor en la ciudad"]])

respuesta: escenario[1]
tipo: completar

enunciado: "La Revolución Industrial provocó una migración masiva desde el campo hacia las ciudades, impulsada principalmente por {escenario[0]} y {escenario[1]}."

pasos:
  - "Analizar el proceso de cercamiento de tierras (enclosures)."
  - "Identificar la necesidad de mano de obra en las nuevas fábricas textiles y siderúrgicas."

explicacion: |
  La mecanización del campo y los cercamientos dejaron a muchos campesinos sin tierras, obligándolos a migrar a las ciudades para trabajar en las nuevas industrias.
```

### 12 — La nueva estructura social

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

### 13 — Condiciones de trabajo

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

### 14 — Causas de la urbanización acelerada

```
metadata:
  materia: "historia"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["urbanizacion", "causas"]

respuesta_orden: ["Mecanización agrícola", "Cercamientos de tierras", "Crecimiento de fábricas"]
tipo: ordenar

opciones_explicitas: ["Mecanización agrícola", "Cercamientos de tierras", "Crecimiento de fábricas"]

enunciado: "Ordene los siguientes procesos según su secuencia lógica en el fenómeno de la urbanización industrial (desde la causa rural hasta el efecto urbano):"

explicacion: |
  Primero la mecanización y cercamientos expulsan al campesino; luego, el crecimiento de fábricas en ciudades atrae a esa población desplazada.
```

### 15 — Impacto en la salud urbana

```
metadata:
  materia: "historia"
  tema: "revolucion_industrial"
  nivel: "avanzado"
  tags: ["salud_publica", "hacinamiento"]

variables:
  problema: uno_de([["el hacinamiento en barrios obreros", "la falta de sistemas de alcantarillado"], ["la contaminación del aire", "la falta de agua potable"]])

respuesta: problema[0]
tipo: mc

opciones_explicitas: ["el hacinamiento en barrios obreros", "la falta de sistemas de alcantarillado", "la contaminación del aire", "la falta de agua potable"]

enunciado: "Uno de los problemas sociales y sanitarios más graves de las ciudades industriales fue {problema[0]}."

explicacion: |
  El crecimiento descontrolado de las ciudades atrajo a tanta gente que se crearon barrios obreros con condiciones de hacinamiento extremo, facilitando la propagación de enfermedades.
```

### 16 — El motor del cambio

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["tecnologia", "economia"]

tipo: completar
enunciado: "La invención y perfeccionamiento de la ___ fue el motor tecnológico fundamental que impulsó la Primera Revolución Industrial."
respuesta: "Máquina de vapor"
explicacion: |
  La máquina de vapor, perfeccionada por James Watt, permitió mecanizar la producción y revolucionar el transporte, siendo el pilar del cambio industrial.
```

### 17 — El nuevo sistema económico

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["capitalismo", "economia"]

tipo: completar
respuestas_validas:
  - "capitalismo industrial"

enunciado: "La Revolución Industrial transformó la economía mundial, sentando las bases del ___ moderno."

explicacion: |
  El paso de una economía agraria y artesanal a una basada en la propiedad privada de los medios de producción y el trabajo asalariado definió el capitalismo industrial.
```

### 18 — Impacto en la producción

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

### 19 — Transformación social

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
opciones_explicitas: ["urbanización y crecimiento", "proletariado y clase obrera", "feudalismo y campesinado", "monarquía y aristocracia"]

enunciado: "La Revolución Industrial provocó un proceso de {datos[escenario_idx][0]} y {datos[escenario_idx][1]} sin precedentes en las ciudades europeas."

respuesta: datos[escenario_idx][0] + " y " + datos[escenario_idx][1]
explicacion: |
  El desplazamiento de la población del campo a la ciudad (éxodo rural) transformó la demografía y la estructura social.
```

### 20 — Secuencia de la Revolución

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["procesos", "orden"]

tipo: ordenar
opciones_explicitas: ["Revolución Agraria", "Mecanización Textil", "Expansión del Ferrocarril", "Segunda Revolución Industrial"]

enunciado: "Ordena cronológicamente los hitos que permitieron la consolidación de la era industrial:"

respuesta_orden: ["Revolución Agraria", "Mecanización Textil", "Expansión del Ferrocarril", "Segunda Revolución Industrial"]

explicacion: |
  Primero la agricultura permitió alimentar a más gente; luego la industria textil se mecanizó; el ferrocarril conectó mercados y finalmente la segunda fase introdujo la electricidad y el acero.
```

### 21 — El motor de vapor y la locomotora

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

### 22 — La era del telégrafo

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["comunicacion", "tecnologia"]

variables:
  datos: [["Telégrafo", "Comunicación a larga distancia"], ["Ferrocarril", "Movilidad de mercancías"], ["Máquina de coser", "Producción de indumentaria"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas:
  - "Comunicación a larga distancia"
  - "Movilidad de mercancías"
  - "Producción de indumentaria"

enunciado: "El invento del ___ permitió la ___."

pasos:
  - "Identificar el invento seleccionado."
  - "Relacionar con su consecuencia social o económica."

explicacion: |
  El {datos[idx][0]} fue fundamental para la {datos[idx][1]}.
```

### 23 — Secuencia de innovaciones

```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "avanzado"
  tags: ["procesos", "orden"]

opciones_explicitas: ["Máquina de vapor", "Locomotora de vapor", "Expansión ferroviaria"]

respuesta_orden: ["Máquina de vapor", "Locomotora de vapor", "Expansión ferroviaria"]
tipo: ordenar

enunciado: "Ordene cronológicamente la evolución tecnológica que impulsó el transporte en la Revolución Industrial:"

explicacion: |
  Primero se perfeccionó la máquina de vapor, luego se aplicó al transporte con la locomotora y finalmente se consolidó la red ferroviaria.
```

### 24 — Impacto en la producción

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

### 25 — El cambio en la energía

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
respuestas_validas:
  - "Combustible fósil"
  - "Biomasa"

enunciado: "El uso masivo de ___ permitió el acceso a un ___."

explicacion: |
  La transición hacia el uso de {datos[idx][0]} fue el motor que proporcionó el {datos[idx][1]} necesario para las fábricas.
```
