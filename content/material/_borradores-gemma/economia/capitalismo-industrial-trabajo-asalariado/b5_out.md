### 1 — Identificación de la relación de trabajo
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "basico"
  tags: ["relaciones_de_produccion", "historia_economica"]

variables:
  escenario: uno_de([["Un individuo es propiedad de otro, siendo tratado como una mercancía sin derechos legales.", "esclavo"], ["Un campesino está vinculado a la tierra y debe entregar parte de su producción al señor feudal.", "siervo"], ["Un trabajador vende su fuerza de trabajo a cambio de un salario para subsistir.", "asalariado"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["esclavo", "siervo", "asalariado"]

enunciado: "Analice la siguiente situación: {escenario[idx][0]}"

explicacion: |
  La respuesta correcta es {escenario[idx][1]}. En el sistema de {escenario[idx][1]}, la característica principal es la naturaleza del vínculo con el medio de producción y la libertad del trabajador.
```

### 2 — El concepto de fuerza de trabajo
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["plusvalia", "fuerza_de_trabajo"]

variables:
  caso: uno_de([["El trabajador vende su capacidad de trabajar por un tiempo determinado.", "fuerza de trabajo"], ["El trabajador vende el producto de su trabajo terminado.", "producto"], ["El trabajador vende su libertad personal.", "libertad"]])
  idx: uno_de([0, 1, 2])

respuesta: caso[idx][1]
tipo: completar
respuestas_validas: ["fuerza de trabajo", "producto", "libertad"]

enunciado: "En el capitalismo industrial, lo que el trabajador vende al capitalista para obtener un salario es su ___."

explicacion: |
  En el sistema capitalista, el trabajador no vende el producto final, sino su {caso[idx][1]}.
```

### 3 — Evolución de las relaciones de producción
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["transicion_feudalismo_capitalismo"]

variables:
  secuencia: ["esclavismo", "feudalismo", "capitalismo"]
  idx: uno_de([0, 1, 2])

respuesta: secuencia
tipo: ordenar
opciones_explicitas: ["esclavismo", "feudalismo", "capitalismo"]

enunciado: "Ordene cronológicamente las siguientes etapas de la organización del trabajo en la historia económica:"

explicacion: |
  La secuencia histórica estándar es: {secuencia[0]}, luego {secuencia[1]} y finalmente {secuencia[2]}.
```

### 4 — El carácter del salario
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "avanzado"
  tags: ["valor_trabajo", "salario"]

variables:
  par: [["El salario es un pago por la propiedad de la persona.", "falso"], ["El salario es un pago por el uso de la capacidad de trabajo.", "verdadero"], ["El salario es una parte del producto que pertenece al trabajador.", "falso"]]
  idx: uno_de([0, 1, 2])

respuesta: par[idx][1]
tipo: mc
opciones_explicitas: ["falso", "verdadero"]

enunciado: "Determine si la siguiente afirmación es verdadera o falsa: {par[idx][0]}"

explicacion: |
  La respuesta es {par[idx][1]}. En el trabajo asalariado, el capitalista paga por el uso de la capacidad de trabajo, no por la propiedad del individuo.
```

### 5 — Diferencia fundamental
```
metadata:
  materia: "economia"
  tema: "capitalismo_industrial_trabajo_asalariado"
  nivel: "intermedio"
  tags: ["propiedad_medios_produccion"]

variables:
  comparacion: [["El siervo tiene acceso limitado a la tierra pero no es propiedad.", "libertad_limitada"], ["El esclavo es propiedad total del amo.", "propiedad_total"], ["El asalariado es dueño de su fuerza de trabajo pero no de los medios.", "autonomia_parcial"]]
  idx: uno_de([0, 1, 2])

respuesta: comparacion[idx][1]
tipo: completar
respuestas_validas: ["libertad_limitada", "propiedad_total", "autonomia_parcial"]

enunciado: "La diferencia fundamental en el caso del esclavo es su ___."

explicacion: |
  Según el escenario, la característica del esclavo es la {comparacion[idx][1]}.
```