### 1 — Destino estelar: Masa inicial
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["astronomia", "estrellas"]

variables:
  escenario: uno_de([["8 masas solares", "enana blanca"], ["15 masas solares", "estrella de neutrones"], ["40 masas solares", "agujero negro"]])
  masa_inicial: escenario[0]
  resultado_final: escenario[1]

tipo: mc
opciones_explicitas: ["enana blanca", "estrella de neutrones", "agujero negro"]

enunciado: "Una estrella con una masa inicial de {masa_inicial} evolucionará, tras agotar su combustible, convirtiéndose en un/a ___."

explicacion: |
  El destino de una estrella depende de su masa remanente. Una estrella de {masa_inicial} terminará como un/a {resultado_final}.
```

### 2 — El límite de Chandrasekhar
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["fisica_estelar"]

variables:
  caso: uno_de([["1.4", "enana blanca"], ["2.5", "estrella de neutrones"], ["5.0", "agujero negro"]])
  valor: caso[0]
  destino: caso[1]

tipo: completar
respuestas_validas: ["enana blanca", "estrella de neutrones", "agujero negro"]

enunciado: "Si el núcleo remanente de una estrella tiene una masa de {valor} masas solares, el objeto resultante será una ___."

explicacion: |
  El límite de Chandrasekhar (~1.4 M☉) determina si un remanente se convierte en enana blanca o colapsa más allá. En este caso, con {valor} M☉, el destino es {destino}.
```

### 3 — Secuencia de colapso
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "intermedio"
  tags: ["evolucion_estelar"]

tipo: ordenar
opciones_explicitas: ["Secuencia principal", "Supernova", "Remanente compacto"]
respuesta: ["Secuencia principal", "Supernova", "Remanente compacto"]

enunciado: "Ordena las etapas evolutivas de una estrella masiva que culminará en un agujero negro:"

explicacion: |
  Las estrellas masivas pasan por la secuencia principal, explotan como supernova y dejan un remanente (agujero negro si la masa es suficiente).
```

### 4 — Identificación de remanentes
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "basico"
  tags: ["astronomia"]

variables:
  datos: [["enana blanca", "presión de degeneración electrónica"], ["estrella de neutrones", "presión de degeneración de neutrones"], ["agujero negro", "colapso gravitatorio total"]]
  idx: uno_de([0, 1, 2])
  objeto: datos[idx][0]
  causa: datos[idx][1]

tipo: mc
opciones_explicitas: ["presión de degeneración electrónica", "presión de degeneración de neutrones", "colapso gravitatorio total"]

enunciado: "Un/a {objeto} se mantiene estable gracias a la {causa}."

explicacion: |
  El mecanismo de soporte depende de la masa: la {causa} es lo que define al/a {objeto}.
```

### 5 — Masa y densidad
```
metadata:
  materia: "historia_profunda"
  tema: "agujeros_negros"
  nivel: "avanzado"
  tags: ["densidad", "gravedad"]

variables:
  par: uno_de([["estrella de neutrones", "1.5"], ["agujero negro", "10.0"]])
  tipo_obj: par[0]
  masa_critica: par[1]

tipo: input
tolerancia_abs: 0.1

enunciado: "Si un objeto tiene una masa de {masa_critica} masas solares y no puede ser sostenido por la presión de degeneración de neutrones, ¿cuántas masas solares (aproximadamente) superan el límite de formación de un agujero negro en este escenario?"

pasos:
  - "Identificar la masa del objeto: {masa_critica} M☉"
  - "Comparar con el límite de Tolman-Oppenheimer-Volkoff (aprox 2-3 M☉)"

explicacion: |
  Al superar el límite crítico de ~3 M☉, la gravedad vence a todas las fuerzas conocidas, resultando en un {tipo_obj}.
```