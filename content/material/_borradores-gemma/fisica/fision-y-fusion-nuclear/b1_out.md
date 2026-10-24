### 1 — Concepto de Fisión Nuclear
```
metadata:
  materia: "fisica"
  tema: "fision_nuclear"
  nivel: "basico"
  tags: ["nucleo", "fision", "energia"]

respuesta: "fision"
tipo: completar
respuestas_validas: ["fision", "fisión"]

enunciado: "El proceso mediante el cual un núcleo pesado se divide en dos o más núcleos más pequeños, liberando una gran cantidad de energía, se denomina ___."

explicacion: |
  La fisión nuclear ocurre cuando un núcleo pesado (como el Uranio-235) absorbe un neutrón y se divide, liberando energía y más neutrones.
```

### 2 — Fusión Nuclear y Masa
```
metadata:
  materia: "fisica"
  tema: "fusion_nuclear"
  nivel: "basico"
  tags: ["fusion", "masa", "energia"]

variables:
  es_fusion: verdadero

respuesta: es_fusion
tipo: vf

enunciado: "¿En un proceso de fusión nuclear, la masa de los núcleos resultantes es mayor que la masa de los núcleos originales?"

explicacion: |
  Falso. En la fusión (y en la fisión), la masa de los productos es menor que la de los reactivos. Esa diferencia de masa se convierte en energía según la ecuación de Einstein.
```

### 3 — La Ecuación de Einstein
```
metadata:
  materia: "fisica"
  tema: "defecto_de_masa"
  nivel: "intermedio"
  tags: ["einstein", "relatividad", "energia"]

respuesta: "E=mc^2"
tipo: mc
opciones_explicitas: ["E=mc^2", "E=m/c^2", "E=m+c^2", "E=mc"]

enunciado: "La relación matemática que describe cómo la pérdida de masa (defecto de masa) se transforma en energía es:"

explicacion: |
  La famosa ecuación de Albert Einstein establece que la energía (E) es igual a la masa (m) multiplicada por la velocidad de la luz al cuadrado (c²).
```

### 4 — El Defecto de Masa
```
metadata:
  materia: "fisica"
  tema: "defecto_de_masa"
  nivel: "intermedio"
  tags: ["masa", "energia", "nucleo"]

respuesta: "defecto de masa"
tipo: completar
respuestas_validas: ["defecto de masa", "defecto de masa"]

enunciado: "La diferencia entre la masa de los nucleones individuales y la masa del núcleo unido se conoce como ___."

explicacion: |
  Esta diferencia es la que se libera en forma de energía de enlace durante los procesos nucleares.
```

### 5 — Comparación de Procesos
```
metadata:
  materia: "fisica"
  tema: "fision_vs_fusion"
  nivel: "basico"
  tags: ["comparacion", "fision", "fusion"]

respuesta: ["Fisión", "Fusión"]
tipo: ordenar

opciones_explicitas: ["Fusión", "Fisión"]

enunciado: "Ordena los siguientes procesos desde el que ocurre en núcleos pesados hasta el que ocurre en núcleos muy ligeros:"

pasos:
  - "Proceso en núcleos pesados (ej. Uranio)"
  - "Proceso en núcleos ligeros (ej. Hidrógeno)"

explicacion: |
  La fisión divide núcleos pesados, mientras que la fusión une núcleos ligeros.
```