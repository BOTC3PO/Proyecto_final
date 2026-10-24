### 1 — El cambio en el factor de producción
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["historia_economica", "clases_sociales"]

respuesta: "burguesía"
tipo: completar
respuestas_validas: ["burguesía"]

enunciado: "En el sistema de capitalismo industrial, los dueños de los medios de producción (fábricas, maquinaria) pasaron a ser conocidos como la ___."

explicacion: |
  La burguesía industrial es la clase social que posee los medios de producción y emplea la fuerza de trabajo de otros para generar plusvalía.
```

### 2 — La nueva relación de dependencia
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["proletariado", "salario"]

variables:
  escenario: uno_de([
    ["el control del tiempo de trabajo", "la subordinación del trabajador al ritmo de la máquina"],
    ["la propiedad de las herramientas", "la venta de la fuerza de trabajo a cambio de un salario"],
    ["la gestión de la producción", "la transformación del trabajo en una mercancía"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: [escenario[0], escenario[1], escenario[2]]

enunciado: "La principal transformación en la relación laboral durante la Revolución Industrial fue ___."

explicacion: |
  El trabajador, al no poseer medios de producción, se ve obligado a vender su fuerza de trabajo como una mercancía a cambio de un salario para subsistir.
```

### 3 — El proceso de producción industrial
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["proceso_productivo"]

respuesta: "proletariado"
tipo: completar
respuestas_validas: ["proletariado"]

enunciado: "Aquella clase social que solo posee su fuerza de trabajo para vender en el mercado laboral se denomina ___."

explicacion: |
  El proletariado es la clase trabajadora que, carente de medios de producción, depende exclusivamente de la venta de su capacidad de trabajo.
```

### 4 — Factores de la Revolución Industrial
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["causas", "transformacion"]

respuesta: ["acumulación de capital", "desplazamiento de población", "mecanización de la producción"]
tipo: ordenar
opciones_explicitas: ["acumulación de capital", "desplazamiento de población", "mecanización de la producción"]

enunciado: "Ordene cronológicamente los factores que permitieron la consolidación del sistema de trabajo asalariado industrial:"

explicacion: |
  Primero se requiere la acumulación de capital, luego el desplazamiento de la población rural a las ciudades (éxodo rural) y finalmente la implementación de la tecnología mecánica.
```

### 5 — El valor de la fuerza de trabajo
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "avanzado"
  tags: ["plusvalia", "valor"]

variables:
  caso: uno_de([
    ["el salario cubre solo el costo de subsistencia", "el excedente generado por el trabajador es apropiado por el capitalista"],
    ["el tiempo de trabajo es determinado por la necesidad humana", "el tiempo de trabajo es determinado por la necesidad de acumulación de capital"],
    ["la producción es artesanal y descentralizada", "la producción es masiva y centralizada en la fábrica"]
  ])

respuesta: caso[1]
tipo: mc
opciones_explicitas: [caso[0], caso[1], caso[2]]

enunciado: "En el modelo de capitalismo industrial, la extracción de plusvalía se basa en ___."

explicacion: |
  La plusvalía surge cuando el valor creado por el trabajador durante su jornada excede el valor de su salario, siendo ese excedente capturado por el dueño de los medios de producción.
```