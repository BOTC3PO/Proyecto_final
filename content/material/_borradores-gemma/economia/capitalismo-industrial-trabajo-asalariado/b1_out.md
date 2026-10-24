### 1 — El motor del capitalismo industrial
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["propiedad_privada", "medios_produccion"]

tipo: mc
opciones_explicitas: ["La propiedad colectiva de los medios de producción", "La propiedad privada de los medios de producción y la búsqueda de ganancia", "La regulación estatal total de la economía", "La distribución equitativa de la riqueza sin excedentes"]

enunciado: "El capitalismo industrial se define fundamentalmente como un sistema económico basado en ___."

explicacion: |
  El capitalismo industrial se caracteriza por la propiedad privada de los medios de producción (fábricas, maquinaria, tierras) y la búsqueda de la acumulación de capital a través de la ganancia.
```

### 2 — Relación laboral en la fábrica
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["trabajo_asalariado", "fuerza_de_trabajo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [
    ["el obrero vende su fuerza de trabajo a cambio de un salario", "salario"],
    ["el trabajador ofrece su tiempo para producir mercancías", "salario"]
  ]

tipo: completar
respuestas_validas: ["salario"]
respuesta: datos[escenario_idx][1]

enunciado: "En el sistema de capitalismo industrial, el trabajador que no posee medios de producción debe vender su fuerza de trabajo a cambio de un ___."

explicacion: |
  En este sistema, el trabajador solo posee su capacidad de trabajar (fuerza de trabajo), la cual alquila al capitalista a cambio de un salario para cubrir sus necesidades de subsistencia.
```

### 3 — Factores de producción
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["factores_produccion", "capital"]

tipo: ordenar
opciones_explicitas: ["Tierra", "Trabajo", "Capital"]
respuesta: ["Tierra", "Trabajo", "Capital"]

enunciado: "Para que se produzca la acumulación de capital en la era industrial, es necesario combinar los factores de producción en un orden lógico de recursos naturales, mano de obra y medios técnicos. Ordene los siguientes elementos: Tierra, Trabajo y Capital."

explicacion: |
  La producción industrial requiere la combinación de recursos naturales (tierra), la actividad humana (trabajo) y el conjunto de medios y dinero para producir (capital).
```

### 4 — El papel de la tecnología
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["tecnologia", "mecanizacion"]

tipo: mc
opciones_explicitas: ["Aumentar la productividad y reducir costos", "Eliminar la necesidad de obtener ganancias", "Garantizar el empleo pleno de forma permanente", "Reducir la propiedad privada de las máquinas"]

enunciado: "En el contexto de la Revolución Industrial, la introducción de maquinaria pesada en las fábricas tenía como objetivo principal ___."

explicacion: |
  La mecanización permitió aumentar la productividad (producir más en menos tiempo), lo que reduce los costos unitarios y maximiza la búsqueda de ganancia del capitalista.
```

### 5 — Cálculo de plusvalía básica
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "avanzado"
  tags: ["plusvalia", "valor", "trabajo"]

variables:
  valor_mercancia: 100
  salario_obrero: 40

tipo: input
tolerancia_abs: 0.01

enunciado: "Si un trabajador produce una mercancía cuyo valor de mercado es de {valor_mercancia} y el capitalista le paga un salario de {salario_obrero}, la plusvalía (el valor excedente que retiene el capitalista) es de ___."

pasos:
  - "Identificar el valor total de la mercancía producida."
  - "Restar el salario pagado al trabajador."

explicacion: |
  La plusvalía es la diferencia entre el valor creado por el trabajador y el salario que recibe. En este caso: 100 - 40 = 60.
```