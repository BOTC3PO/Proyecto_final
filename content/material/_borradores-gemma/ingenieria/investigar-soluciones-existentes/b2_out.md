### 1 — El costo de reinventar la rueda
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["eficiencia", "metodologia"]

variables:
  caso_idx: uno_de([0, 1])
  datos: [[15000, 5000], [8000, 2000]]

enunciado: "Un equipo de ingeniería decide desarrollar un sensor de temperatura desde cero en lugar de usar uno ya estandarizado. El costo de desarrollo propio es de ${datos[caso_idx][0]} USD, mientras que la licencia de una solución existente es de ${datos[caso_idx][1]} USD. ¿Cuál es el ahorro potencial al usar la solución existente?"

respuesta: datos[caso_idx][0] - datos[caso_idx][1]
tipo: input
tolerancia_abs: 0

explicacion: |
  Al investigar soluciones existentes, el ahorro fue de ${datos[caso_idx][0] - datos[caso_idx][1]} USD. Reinventar la rueda sin necesidad aumenta los costos y el tiempo de salida al mercado.
```

### 2 — El precedente técnico
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["estandar", "benchmarking"]

variables:
  estandar_nombre: uno_de(["ISO-9001", "IEEE-802.11", "ASTM-E12"])
  estandar_valor: uno_de(["Calidad", "Conectividad", "Materiales"])

enunciado: "Al diseñar un sistema de comunicación inalámbrica, el ingeniero consulta el estándar ${estandar_nombre} para evitar errores de compatibilidad. El objetivo principal de este estándar es asegurar la: ___"

respuestas_validas: ["{estandar_valor}"]
tipo: completar

explicacion: |
  Consultar estándares como el ${estandar_nombre} permite que el diseño sea compatible con el ecosistema existente, evitando el error de 'reinventar' protocolos de comunicación.
```

### 3 — Análisis de patentes
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "avanzado"
  tags: ["propiedad_intelectual", "riesgo"]

variables:
  patente_valida: uno_de([verdadero, falso])

enunciado: "Un ingeniero encuentra una solución técnica que resuelve el problema del diseño actual, pero descubre que existe una patente vigente para ese mecanismo específico. ¿Es legalmente seguro implementar esta solución sin una licencia?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "falso"
tipo: mc

explicacion: |
  La investigación de soluciones existentes no es solo técnica, sino también legal. Implementar una solución patentada sin autorización constituye infracción de propiedad intelectual.
```

### 4 — Ciclo de investigación de diseño
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "intermedio"
  tags: ["proceso", "metodologia"]

enunciado: "Ordena los pasos lógicos para integrar una solución existente en un nuevo proyecto de ingeniería:"

opciones_explicitas: ["Identificar el problema", "Buscar soluciones existentes", "Evaluar precedentes", "Adaptar solución al diseño"]
respuesta: ["Identificar el problema", "Buscar soluciones existentes", "Evaluar precedentes", "Adaptar solución al diseño"]
tipo: ordenar

explicacion: |
  El proceso correcto implica primero entender el problema, luego buscar qué se ha hecho antes, evaluar si esas soluciones sirven y finalmente adaptarlas.
```

### 5 — El mito de la originalidad absoluta
```
metadata:
  materia: "ingenieria"
  tema: "investigar_soluciones_existentes"
  nivel: "basico"
  tags: ["mentalidad", "eficiencia"]

variables:
  es_eficiente: uno_de([verdadero, falso])

enunciado: "Si un ingeniero dedica el 40% del tiempo de un proyecto a documentar soluciones que ya han sido resueltas en la industria para evitar errores previos, ¿esta práctica se considera eficiente en la gestión de ingeniería?"

opciones_explicitas: ["verdadero", "falso"]
respuesta: "verdadero"
tipo: mc

explicacion: |
  La investigación de precedentes es una inversión de tiempo que reduce la incertidumbre y el riesgo de fallos catastróficos en la fase de prototipado.
```