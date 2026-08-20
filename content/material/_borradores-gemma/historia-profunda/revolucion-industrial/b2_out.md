### 1 — El motor del cambio
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

### 2 — Independencia de la ubicación
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

### 3 — Impacto en la producción
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

### 4 — Secuencia de la Revolución
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

### 5 — El cambio de paradigma energético
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["energia", "carbón"]

respuesta: "verdadero"
tipo: vf
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿La máquina de vapor permitió que la producción industrial dejara de depender exclusivamente de fuentes de energía naturales y renovables como el viento o el agua?"

explicacion: |
  Es verdadero. Al usar carbón para generar vapor, la industria ganó autonomía respecto a las condiciones climáticas o geográficas.
```