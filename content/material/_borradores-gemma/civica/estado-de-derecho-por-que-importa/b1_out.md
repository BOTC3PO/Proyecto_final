### 1 — Concepto de Estado de Derecho
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "basico"
  tags: ["conceptos_fundamentales", "ley"]

respuesta: "todos están sometidos a la ley"
tipo: completar
respuestas_validas: ["todos están sometidos a la ley", "la ley es superior a todos", "nadie está por encima de la ley"]

enunciado: "El Estado de Derecho se define como un sistema en el que ___."

explicacion: |
  En un Estado de Derecho, la ley es la norma suprema y tanto los ciudadanos como los gobernantes deben respetarla sin excepciones.
```

### 2 — Control del Poder
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "intermedio"
  tags: ["division_de_poderes", "control"]

opciones_explicitas: ["Concentración de poder", "División de poderes", "Poder absoluto", "Sometimiento al líder"]

respuesta: "División de poderes"
tipo: mc

enunciado: "Para evitar el abuso de autoridad, el Estado de Derecho requiere la ___."

explicacion: |
  La división de poderes (Ejecutivo, Legislativo y Judicial) es un mecanismo esencial para que un poder controle al otro y se evite la tiranía.
```

### 3 — Mecanismos de Control
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "intermedio"
  tags: ["justicia", "mecanismos"]

variables:
  escenario_idx: uno_de([0, 1])

variables:
  datos: [["justicia independiente", "elecciones libres"], ["elecciones libres", "justicia independiente"]]

respuesta: datos[escenario_idx][0]
tipo: mc
opciones_explicitas: ["justicia independiente", "elecciones libres", "mandato vitalicio", "control policial"]

enunciado: "Para asegurar que las leyes se apliquen por igual, es fundamental contar con una ___."

explicacion: |
  La existencia de un poder judicial autónomo e independiente es la garantía de que las leyes se apliquen de manera imparcial, incluso contra el propio Estado.
```

### 4 — Elementos del Estado de Derecho
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "avanzado"
  tags: ["ordenar", "componentes"]

opciones_explicitas: ["Sometimiento a la ley", "División de poderes", "Garantía de derechos", "Control del poder"]

respuesta: ["Sometimiento a la ley", "División de poderes", "Garantía de derechos", "Control del poder"]
tipo: ordenar

enunciado: "Ordene los elementos que constituyen la arquitectura de un Estado de Derecho, desde el principio fundamental hasta su aplicación práctica:"

explicacion: |
  El orden lógico parte de la supremacía de la ley, pasa por la estructura institucional (poderes) y culmina en la protección de los derechos y el control del poder.
```

### 5 — El rol de la ley
```
metadata:
  materia: "civica"
  tema: "estado_de_derecho_por_que_importa"
  nivel: "basico"
  tags: ["gobernantes", "igualdad"]

respuesta: true
tipo: vf

enunciado: "¿En un Estado de Derecho, los gobernantes están exentos de cumplir las leyes que ellos mismos promulgan?"

explicacion: |
  Falso. El principio de legalidad establece que nadie, sin importar su cargo o poder, está por encima de la ley.
```