### 1 — El origen del oxígeno
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["biologia", "atmosfera"]

variables:
  escenario: uno_de([["cianobacterias", "fotosíntesis"], ["cianobacterias", "fotosíntesis"]])
  idx: uno_de([0,1])

enunciado: "El evento conocido como la Gran Oxidación fue impulsado por la aparición de organismos capaces de realizar la {escenario[1]}."

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["fotosíntesis", "quimiosíntesis", "respiración", "fermentación"]

explicacion: |
  Las cianobacterias fueron los primeros organismos en desarrollar la fotosíntesis oxigénica, liberando oxígeno como subproducto.
```

### 2 — Consecuencias químicas
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["quimica", "oxigeno"]

variables:
  datos: [["oxígeno", "oxidación de metano"], ["oxígeno", "oxidación de metano"]]
  idx: uno_de([0,1])

enunciado: "La acumulación de {datos[idx][0]} en la atmósfera provocó la ___ de gases reductores como el metano."

respuesta: "oxidación de metano"
tipo: completar
respuestas_validas: ["oxidación de metano"]

explicacion: |
  El oxígeno atmosférico reaccionó con el metano (un gas de efecto invernadero), alterando la química global.
```

### 3 — El impacto en la vida anaeróbica
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["extincion", "biologia"]

variables:
  caso: uno_de([["oxígeno", "extinción masiva"], ["oxígeno", "extinción masiva"]])
  tipo_efecto: uno_de(["extinción masiva", "explosión de vida"])

enunciado: "Para los organismos anaerobios de la época, el aumento de ___ representó una ___."

respuesta: "extinción masiva"
tipo: mc
opciones_explicitas: ["extinción masiva", "explosión de vida", "estabilidad climática", "mutación acelerada"]

explicacion: |
  El oxígeno era tóxico para la mayoría de las formas de vida predominantes en ese entonces, causando una extinción masiva.
```

### 4 — Secuencia del evento
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["secuencia", "procesos"]

variables:
  pasos_correctos: ["Fotosíntesis oxigénica", "Saturación de sumideros de hierro", "Liberación de O2 a la atmósfera"]

enunciado: "Ordene los eventos que llevaron a la Gran Oxidación:"

respuesta: ["Fotosíntesis oxigénica", "Saturación de sumideros de hierro", "Liberación de O2 a la atmósfera"]
tipo: ordenar
opciones_explicitas: ["Fotosíntesis oxigénica", "Saturación de sumideros de hierro", "Liberación de O2 a la atmósfera", "Formación de la capa de ozono"]

explicacion: |
  Primero se produjo el oxígeno, luego este fue absorbido por minerales (hierro) y finalmente se acumuló en la atmósfera.
```

### 5 — El cambio en el potencial redox
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["quimica", "atmosfera"]

variables:
  datos: [["oxígeno", "oxidante", "oxidante"], ["oxígeno", "oxidante", "oxidante"]]
  idx: uno_de([0,1])

enunciado: "La transición de una atmósfera reductora a una oxidante fue causada por la liberación de ___ que actuó como un potente ___."

respuesta: "oxidante"
tipo: completar
respuestas_validas: ["oxidante"]

explicacion: |
  El oxígeno es un agente oxidante fuerte que cambió radicalmente el potencial redox de la atmósfera terrestre.
```