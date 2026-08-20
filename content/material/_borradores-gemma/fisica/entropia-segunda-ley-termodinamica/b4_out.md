### 1 — Entropía vs Energía
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["termodinamica", "entropia"]

variables:
  es_sistema_aislado: uno_de([verdadero, falso])

respuesta: es_sistema_aislado
tipo: vf

enunciado: "En un sistema aislado, la entropía total siempre tiende a ___ o permanecer constante según la segunda ley de la termodinamica."

explicacion: |
  La segunda ley de la termodinámica establece que en un sistema aislado, la entropía (el desorden) siempre aumenta en procesos espontáneos, lo que significa que el universo tiende hacia un estado de mayor probabilidad y desorden.
```

### 2 — Flujo de calor y entropía
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["calor", "entropia"]

variables:
  caso: uno_de([0, 1])

respuesta: caso_datos[caso][1]
tipo: mc

opciones_explicitas: ["El calor fluye de un cuerpo frío a uno caliente", "El calor fluye de un cuerpo caliente a uno frío", "El calor fluye en ambas direcciones con igual probabilidad", "No hay flujo de calor entre cuerpos en equilibrio"]

enunciado: "Considerando el caso {caso_datos[caso][0]}, ¿cuál es la dirección espontánea del flujo de calor según la segunda ley?"

pasos:
  - "Identificar la temperatura de ambos cuerpos."
  - "Aplicar la segunda ley de la termodinámica sobre la dirección del flujo térmico."

explicacion: |
  El calor fluye espontáneamente de un cuerpo con mayor temperatura a uno de menor temperatura para aumentar la entropía total del sistema.
```

### 3 — Energía vs Entropía
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "intermedio"
  tags: ["energia", "entropia"]

respuesta: "desorden"
tipo: completar
respuestas_validas: ["desorden", "caos"]

enunciado: "Mientras que la energía se conserva según la primera ley, la entropía mide el grado de ___ de un sistema."

explicacion: |
  La energía no se crea ni se destruye (Primera Ley), pero la entropía cuantifica la parte de la energía que ya no es disponible para realizar trabajo útil debido al desorden generado.
```

### 4 — Procesos irreversibles
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "avanzado"
  tags: ["irreversibilidad", "procesos"]

respuesta: verdadero
tipo: vf

enunciado: "Un proceso natural (espontáneo) es siempre irreversible porque implica un aumento neto de la entropía del universo."

explicacion: |
  Los procesos irreversibles son aquellos que ocurren de forma espontánea y aumentan la entropía total, marcando la "flecha del tiempo" en la termodinámica.
```

### 5 — Ordenamiento de la entropía
```
metadata:
  materia: "fisica"
  tema: "entropia_segunda_ley_termodinamica"
  nivel: "basico"
  tags: ["orden", "desorden"]

respuesta: ["Cristal puro", "Líquido", "Gas", "Plasma"]
tipo: ordenar

opciones_explicitas: ["Gas", "Cristal puro", "Plasma", "Líquido"]

enunciado: "Ordena los estados de la materia de MENOR a MAYOR entropía (menor desorden a mayor desorden):"

explicacion: |
  En un cristal (sólido perfecto), las partículas están altamente ordenadas (baja entropía). A medida que pasamos a líquido, gas y finalmente plasma, el movimiento y la libertad de las partículas aumentan, incrementando el desorden y la entropía.
```