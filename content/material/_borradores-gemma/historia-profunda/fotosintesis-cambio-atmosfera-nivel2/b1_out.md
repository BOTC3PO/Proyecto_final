### 1 — El subproducto de la fotosíntesis
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["cianobacterias", "oxigeno", "evolucion"]

tipo: mc
opciones_explicitas: ["Dióxido de carbono", "Nitrógeno", "Oxígeno", "Metano"]

enunciado: "Durante la fotosíntesis oxigénica realizada por las cianobacterias, se produce la fotólisis del agua, liberando como subproducto gaseoso el ___."

explicacion: |
  Las cianobacterias utilizan la luz solar para romper moléculas de agua (H2O), liberando oxígeno (O2) como residuo de este proceso metabólico.
```

### 2 — El evento de la Gran Oxidación
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["gran_oxidacion", "atmosfera", "cianobacterias"]

variables:
  escenario: uno_de([["La liberación masiva de O2", "La extinción de organismos anaerobios"], ["La acumulación de metano", "La formación de la capa de ozono"]])
  resultado: uno_de(["La atmósfera se volvió oxidante", "La atmósfera se volvió reductora"])

tipo: mc
opciones_explicitas: ["La atmósfera se volvió oxidante", "La atmósfera se volvió reductora", "La atmósfera se volvió rica en metano", "La atmósfera se volvió rica en nitrógeno"]

enunciado: "El aumento de la concentración de oxígeno atmosférico debido a la actividad de las cianobacterias provocó que la atmósfera dejara de ser reductora para convertirse en {escenario[0]}."

explicacion: |
  La Gran Oxidación (o Evento de la Gran Oxidación) transformó la atmósfera primitiva de un estado reductor (rico en gases como CH4 y NH3) a uno oxidante, debido a la acumulación de O2.
```

### 3 — Impacto en la vida primitiva
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["extincion", "anaerobios", "evolucion"]

tipo: completar
respuestas_validas: ["anaerobios"]

enunciado: "La acumulación de oxígeno en la atmósfera fue un evento catastrófico para las formas de vida ___ que dominaban la Tierra primitiva."

explicacion: |
  Para los organismos anaerobios estrictos, el oxígeno era un gas altamente reactivo y tóxico, lo que provocó una extinción masiva antes de que la vida evolucionara hacia la respiración aeróbica.
```

### 4 — Secuencia del cambio atmosférico
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "intermedio"
  tags: ["secuencia", "procesos", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Evolución de la fotosíntesis oxigénica", "Liberación de O2 por cianobacterias", "Saturación de sumideros de hierro", "Aumento de O2 atmosférico"]

enunciado: "Ordena cronológicamente los eventos que llevaron a la Gran Oxidación:"

explicacion: |
  Primero surge la fotosíntesis oxigénica; el oxígeno producido es inicialmente absorbido por minerales (como el hierro en los océanos); una vez saturados estos sumideros, el oxígeno comienza a acumularse en la atmósfera.
```

### 5 — El papel del metano
```
metadata:
  materia: "biologia"
  tema: "fotosintesis_cambio_atmosfera_nivel2"
  nivel: "avanzado"
  tags: ["metano", "clima", "oxidacion"]

variables:
  factor: uno_de([["metano", "dióxido de carbono"]])
  impacto: uno_de(["disminuyó", "aumentó"])

tipo: input
tolerancia_abs: 0

enunciado: "Antes de la Gran Oxidación, la atmósfera era rica en {factor[0]}. La introducción de oxígeno causó que la concentración de este gas ___ drásticamente, afectando el efecto invernadero global."

explicacion: |
  El metano (CH4) es un potente gas de efecto invernadero. La oxidación del metano por el nuevo oxígeno atmosférico redujo el efecto invernadero, lo que posiblemente contribuyó a la primera glaciación global (Glaciación Huronesiana).
```