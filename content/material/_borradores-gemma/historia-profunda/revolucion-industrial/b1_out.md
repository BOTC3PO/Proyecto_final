### 1 — El motor del cambio
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

### 2 — El sistema de trabajo
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

### 3 — Transformación del paisaje
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

respuesta: ["Producción artesanal en talleres pequeños", "Introducción de maquinaria textil mecánica", "Consolidación del sistema de fábricas y ferrocarril"]
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