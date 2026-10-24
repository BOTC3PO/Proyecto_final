### 1 — Diferencia entre cooperativa y sociedad comercial
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["cooperativas", "diferencias"]

respuesta: "sin fines de lucro"
tipo: completar
respuestas_validas: ["sin fines de lucro", "no lucrativa"]

enunciado: "A diferencia de las sociedades comerciales tradicionales, las cooperativas se rigen por el principio de que su actividad es ___."

explicacion: |
  Las cooperativas son entidades de economía social cuyo objetivo principal es satisfacer las necesidades de sus asociados y no la maximización de beneficios para terceros. Aunque pueden generar excedentes, estos se reinvierten o distribuyen según el uso de servicios, no como lucro comercial puro.
```

### 2 — El principio de la gestión democrática
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["gestion", "democracia"]

variables:
  es_democratica: true

respuesta: es_democratica
tipo: vf

enunciado: "En una cooperativa, el poder de decisión se distribuye según el capital aportado por cada socio (a más capital, más votos)."

explicacion: |
  Falso. El principio de democracia cooperativa establece que cada socio tiene un voto, independientemente de la cantidad de capital que haya aportado. Esto es lo que las distingue de las sociedades anónimas.
```

### 3 — Objeto de las mutualidades
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "basico"
  tags: ["mutualismo", "ayuda_mutua"]

respuesta: "ayuda mutua"
tipo: mc
opciones_explicitas: ["ayuda mutua", "maximización de dividendos", "especulación financiera", "competencia de mercado"]

enunciado: "El principio fundamental que distingue al mutualismo de otras formas de asociación es la ___ entre sus miembros para satisfacer necesidades comunes."

explicacion: |
  El mutualismo se basa en el principio de ayuda mutua, donde los asociados se asocian para prestarse servicios de previsión, asistencia o ayuda recíproca.
```

### 4 — Característica de la Ley 26.206
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "avanzado"
  tags: ["ley_26206", "marco_legal"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["La cooperativa es una sociedad de personas.", "sociedad de personas"],
    ["La cooperativa es una sociedad de capitales.", "sociedad de capitales"]
  ]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["sociedad de personas", "sociedad de capitales"]

enunciado: "Según el marco legal de las cooperativas, estas se definen esencialmente como una ___."

explicacion: |
  Las cooperativas son sociedades de personas, ya que lo fundamental es la calidad de los asociados y su voluntad de cooperación, no la cuantía de su capital.
```

### 5 — Orden de los principios cooperativos
```
metadata:
  materia: "economia"
  tema: "cooperativismo_y_mutualismo"
  nivel: "intermedio"
  tags: ["principios", "valores"]

respuesta: ["Ingreso voluntario y abierto de socios", "Control democrático de los socios", "Participación económica de los socios"]
tipo: ordenar
opciones_explicitas: ["Ingreso voluntario y abierto de socios", "Control democrático de los socios", "Participación económica de los socios"]

enunciado: "Ordene los siguientes principios cooperativos según la lógica de constitución de una organización: primero la apertura, luego la gestión y finalmente la distribución."

explicacion: |
  Para que exista una cooperativa, primero deben ingresar los socios libremente (apertura), luego deben decidir cómo gestionarse (democracia) y finalmente cómo gestionar sus recursos (participación económica).
```