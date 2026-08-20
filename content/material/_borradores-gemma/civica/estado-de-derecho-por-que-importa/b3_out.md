### 1 — El Estado de Derecho y la Democracia
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "intermedio"
  tags: ["democracia", "derechos", "reglas"]

respuesta: "condicion_necesaria"
tipo: mc

opciones_explicitas: ["condicion_suficiente", "condicion_necesaria", "obstáculo_democrático", "sistema_opcional"]

enunciado: "En un sistema democrático, el Estado de derecho se considera una ________, ya que sin un marco legal que limite el poder, la voluntad de la mayoría podría vulnerar los derechos de las minorías."

explicacion: |
  El Estado de derecho es necesario para garantizar que la democracia no se convierta en una "tiranía de la mayoría". Sin embargo, no es suficiente por sí solo, ya que un país puede tener leyes pero carecer de cultura democrática o participación ciudadana real.
```

### 2 — Protección de Derechos Individuales
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "basico"
  tags: ["derechos_humanos", "proteccion"]

variables:
  escenario_idx: uno_de([0, 1])

enunciado: "Si un gobierno decide confiscar la propiedad privada de un grupo específico sin seguir los procedimientos legales establecidos, está violando el principio de ___."

pasos:
  - "Identificar qué principio del Estado de derecho protege la propiedad frente a decisiones arbitrarias."

respuesta: tabla[escenario_idx][1]
tipo: completar

respuestas_validas: ["legalidad", "arbitrariedad"]

explicacion: |
  El principio de legalidad asegura que todas las acciones del Estado estén sujetas a leyes preexistentes y no a la voluntad arbitraria de quienes gobiernan.
```

### 3 — Elementos del Estado de Derecho
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "intermedio"
  tags: ["elementos", "orden"]

respuesta: ["Igualdad ante la ley", "División de poderes", "Sometimiento de la autoridad a la ley"]
tipo: ordenar

opciones_explicitas: ["Sometimiento de la autoridad a la ley", "Igualdad ante la ley", "División de poderes"]

enunciado: "Para que un Estado sea considerado un verdadero Estado de Derecho, se deben consolidar sus pilares fundamentales. Ordene los siguientes conceptos de mayor a menor jerarquía conceptual en la estructura del Estado de Derecho (empezando por la base que permite la existencia de los otros dos):"

explicacion: |
  Aunque son interdependientes, la jerarquía lógica parte del sometimiento de la autoridad a la ley, que permite la igualdad de todos los ciudadanos y la división de poderes para controlar dicho sometimiento.
```

### 4 — El riesgo de la ausencia de reglas
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "basico"
  tags: ["arbitrariedad", "seguridad_juridica"]

respuesta: "arbitrariedad"
tipo: completar

respuestas_validas: ["arbitrariedad", "caos"]

enunciado: "Cuando las decisiones de los gobernantes no están sujetas a leyes claras y preestablecidas, el ejercicio del poder se vuelve _____, lo que pone en riesgo la seguridad jurídica de los ciudadanos."

explicacion: |
  La arbitrariedad es el ejercicio del poder sin sujeción a la razón o a la ley, siendo el principal antónimo del Estado de Derecho.
```

### 5 — Relación: Estado de Derecho y Derechos Humanos
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "avanzado"
  tags: ["derechos_humanos", "limitacion_poder"]

variables:
  caso_idx: uno_de([0, 1])

enunciado: "Analice el caso: {caso_datos[caso_idx][0]}. En este escenario, la ausencia de un Estado de derecho efectivo resulta en: ___."

variables:
  caso_datos: [["Un país con leyes estrictas pero donde los jueces son parte del partido gobernante", "vulneración de derechos"], ["Un país con elecciones libres pero donde el presidente puede cambiar la constitución cada mes", "vulneración de derechos"]]

respuesta: tabla[caso_idx][1]
tipo: mc

opciones_explicitas: ["vulneración de derechos", "fortalecimiento democrático", "estabilidad institucional", "soberanía popular"]

explicacion: |
  Incluso con elecciones (democracia procedimental), si no hay independencia judicial o límites constitucionales claros, los derechos individuales quedan desprotegidos ante el poder de turno.
```