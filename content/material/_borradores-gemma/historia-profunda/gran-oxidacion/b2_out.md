### 1 — La Gran Oxidación
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["extincion", "oxigeno", "anaerobico"]

respuesta: "extinción masiva"
tipo: completar
respuestas_validas: ["extinción masiva"]

enunciado: "El aumento repentino de oxígeno en la atmósfera terrestre durante la Gran Oxidación es considerado la primera ___ de la historia."

explicacion: |
  La acumulación de oxígeno, producto de la fotosíntesis oxigénica, fue letal para la mayoría de los organismos anaeróbicos que dominaban la Tierra primitiva.
```

### 2 — Organismos afectados
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["anaerobico", "oxigeno"]

variables:
  tipo_organismo: uno_de(["anaeróbicos", "aeróbicos"])

respuesta: "anaeróbicos"
tipo: mc
opciones_explicitas: ["anaeróbicos", "aeróbicos", "fotosintéticos", "eucariotas"])

enunciado: "Antes de la Gran Oxidación, la atmósfera era rica en gases reductores y la vida estaba compuesta mayoritariamente por organismos de tipo {tipo_organismo}."

explicacion: |
  Los organismos anaeróbicos no poseen mecanismos para neutralizar el oxígeno, por lo que este actuó como un veneno oxidante para ellos.
```

### 3 — Causas de la liberación de oxígeno
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["fotosintesis", "cianobacterias"]

respuesta: "cianobacterias"
tipo: mc
opciones_explicitas: ["cianobacterias", "volcanes", "asteroides", "metano"])

enunciado: "La principal causa biológica del aumento de oxígeno atmosférico fue la aparición de las:"

explicacion: |
  Las cianobacterias desarrollaron la fotosíntesis oxigénica, liberando oxígeno como subproducto, lo que alteró la química global del planeta.
```

### 4 — Secuencia de la crisis
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["secuencia", "oxigeno", "vida"])

respuesta: ["producción de oxígeno", "acumulación de oxígeno", "extinción de anaerobios", "aparición de la vida aeróbica"]
tipo: ordenar
opciones_explicitas: ["producción de oxígeno", "acumulación de oxígeno", "extinción de anaerobios", "aparición de la vida aeróbica"]

enunciado: "Ordena cronológicamente los eventos que caracterizaron la Gran Oxidación:"

explicacion: |
  Primero se produjo el oxígeno, luego se acumuló en la atmósfera tras saturar los sumideros químicos, provocando la muerte masiva de anaerobios y permitiendo finalmente la evolución de la respiración aeróbica.
```

### 5 — Efecto químico
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["quimica_atmosferica", "oxigeno"])

variables:
  estado_oxigeno: uno_de(["tóxico", "vital"])

respuesta: "tóxico"
tipo: mc
opciones_explicitas: ["tóxico", "vital", "neutro", "incoloro"])

enunciado: "Para la vida predominante en el Arcaico, el oxígeno atmosférico no era un elemento vital, sino un agente ___."

explicacion: |
  Debido a la ausencia de enzimas antioxidantes en los organismos de la época, el oxígeno libre causaba daños oxidativos letales en sus estructuras celulares.
```