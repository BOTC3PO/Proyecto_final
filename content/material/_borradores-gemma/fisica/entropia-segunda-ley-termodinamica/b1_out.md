### 1 — Concepto de Entropía
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "entropia", "desorden"]

respuesta: "desorden"
tipo: completar
respuestas_validas: ["desorden", "caos"]

enunciado: "En términos macroscópicos, la entropía se asocia comúnmente con el grado de ___ de un sistema."

explicacion: |
  La entropía es una medida del desorden o la aleatoriedad de un sistema. Según la segunda ley, en un sistema aislado, la entropía tiende a aumentar con el tiempo.
```

### 2 — Flujo de calor espontáneo
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["calor", "segunda_ley"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[100, 20], [50, 10]]

opciones_explicitas: ["De un cuerpo a 100°C a uno a 20°C", "De un cuerpo a 20°C a uno a 100°C", "No hay flujo de calor"]

respuesta: uno_de([0, 1, 2])[escenario_idx]
tipo: mc

enunciado: "Considerando un sistema con dos cuerpos a temperaturas de {datos[escenario_idx][0]}°C y {datos[escenario_idx][1]}°C, el calor fluirá espontáneamente ___."

explicacion: |
  El calor siempre fluye de forma espontánea desde el cuerpo con mayor temperatura al de menor temperatura, un proceso que incrementa la entropía total del universo.
```

### 3 — Verdad o Falso: Sistemas Aislados
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["sistemas_aislados", "segunda_ley"]

respuesta: falso

tipo: vf

enunciado: "En un sistema aislado, la entropía total puede disminuir espontáneamente durante un proceso irreversible."

explicacion: |
  Falso. La Segunda Ley de la Termodinámica establece que en un sistema aislado, la entropía siempre aumenta o permanece constante (en procesos reversibles), pero nunca disminuye.
```

### 4 — Orden de procesos termodinámicos
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["entropia", "procesos"]

opciones_explicitas: ["Hielo derritiéndose", "Agua líquida congelándose", "Vapor de agua condensándose"]

respuesta: ["Hielo derritiéndose", "Agua líquida congelándose", "Vapor de agua condensándose"]
tipo: ordenar

enunciado: "Ordena los siguientes procesos de mayor a menor desorden (entropía) de sus estados de agregación:"

explicacion: |
  El orden de desorden (entropía) es: Gas (Vapor) > Líquido (Agua) > Sólido (Hielo). El ejercicio pide ordenar los estados de mayor a menor desorden.
```

### 5 — Relación Entropía y Probabilidad
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "avanzado"
  tags: ["microestados", "probabilidad"]

variables:
  estado_idx: uno_de([0, 1])
  escenarios: [["ordenado", "baja"], ["desordenado", "alta"]]

respuesta: uno_de([0, 1])[estado_idx][1]
tipo: mc

opciones_explicitas: ["baja", "alta", "nula"]

enunciado: "Un estado con una configuración altamente ___ tiene una probabilidad estadística más ___ de ocurrir espontáneamente."

explicacion: |
  Los sistemas evolucionan hacia estados con mayor número de microestados posibles (mayor desorden), ya que estos son estadísticamente mucho más probables.
```