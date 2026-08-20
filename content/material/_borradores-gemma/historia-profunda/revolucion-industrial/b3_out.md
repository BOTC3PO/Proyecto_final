### 1 — El éxodo rural
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

respuesta: escenario[1]
tipo: completar

enunciado: "La Revolución Industrial provocó una migración masiva desde el campo hacia las ciudades, impulsada principalmente por {escenario[0]} y {escenario[1]}."

pasos:
  - "Analizar el proceso de cercamiento de tierras (enclosures)."
  - "Identificar la necesidad de mano de obra en las nuevas fábricas textiles y siderúrgicas."

explicacion: |
  La mecanización del campo y los cercamientos dejaron a muchos campesinos sin tierras, obligándolos a migrar a las ciudades para trabajar en las nuevas industrias.
```

### 2 — La nueva estructura social
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

### 3 — Condiciones de trabajo
```
metadata:
  materia: "historia"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["condiciones_laborales", "jornada"]

respuesta: 14
tipo: input
tolerancia_abs: 1

enunciado: "Durante el apogeo de la Revolución Industrial, las jornadas laborales en las fábricas textiles eran extremadamente extensas. Si un obrero trabajaba de 06:00 a 20:00 con una hora de descanso para comer, ¿cuántas horas trabajaba efectivamente por día?"

pasos:
  - "Calcular el tiempo total transcurrido desde las 06:00 hasta las 20:00."
  - "Restar la hora de descanso."

explicacion: |
  Las jornadas de 12 a 16 horas eran la norma en la primera fase de la Revolución Industrial, lo que generaba un agotamiento extremo en la clase obrera.
```

### 4 — Causas de la urbanización acelerada
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

### 5 — Impacto en la salud urbana
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

respuesta: problema[0]
tipo: mc

opciones_explicitas: ["el hacinamiento en barrios obreros", "la falta de sistemas de alcantarillado", "la contaminación del aire", "la falta de agua potable"]

enunciado: "Uno de los problemas sociales y sanitarios más graves de las ciudades industriales fue {problema}."

explicacion: |
  El crecimiento descontrolado de las ciudades atrajo a tanta gente que se crearon barrios obreros con condiciones de hacinamiento extremo, facilitando la propagación de enfermedades.
```