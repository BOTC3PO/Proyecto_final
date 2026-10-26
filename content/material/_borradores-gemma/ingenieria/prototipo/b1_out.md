### 1 — Concepto de prototipo
```
metadata:
  materia: "ingenieria"
  tema: "prototipo_conceptos_basicos"
  nivel: "basico"
  tags: ["definicion", "metodologia"]

respuesta: "versión preliminar y simplificada de la solución para probar ideas antes de la versión final"
tipo: completar
respuestas_validas: ["versión preliminar y simplificada de la solución para probar ideas antes de la versión final"]

enunciado: "Un prototipo se define como una ___."

explicacion: |
  El prototipo es una representación temprana de un producto o sistema que permite validar hipótesis de diseño y funcionalidad antes de la producción masiva.
```

### 2 — Propósito del prototipado
```
metadata:
  materia: "ingenieria"
  tema: "prototipo_objetivos"
  nivel: "basico"
  tags: ["objetivo", "validacion"]

opciones_explicitas: ["A) Maximizar la estética del producto final", "B) Probar ideas y reducir riesgos de diseño", "C) Reemplazar la fase de fabricación definitiva", "D) Aumentar el costo de producción"]

respuesta: "B) Probar ideas y reducir riesgos de diseño"
tipo: mc

enunciado: "¿Cuál es el objetivo principal de crear un prototipo en un proceso de ingeniería?"

explicacion: |
  El prototipado busca validar conceptos, detectar errores tempranos y asegurar que la solución propuesta sea viable, minimizando el riesgo antes de la inversión final.
```

### 3 — Fidelidad del prototipo
```
metadata:
  materia: "ingenieria"
  tema: "prototipo_fidelidad"
  nivel: "intermedio"
  tags: ["fidelidad", "low_fidelity", "high_fidelity"]

variables:
  idx: uno_de([0, 1])
  escenario: [
    ["Baja fidelidad", "se enfoca en la estructura y flujo básico, con pocos detalles visuales"],
    ["Alta fidelidad", "se parece mucho al producto final en apariencia y funcionalidad"]
  ]

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Baja fidelidad", "Alta fidelidad"]

enunciado: "Un prototipo de {escenario[idx][0]} es aquel que {escenario[idx][1]}."

explicacion: |
  La fidelidad se refiere al nivel de detalle y realismo del prototipo. Los de baja fidelidad son rápidos y baratos, mientras que los de alta fidelidad son casi indistinguibles del producto final.
```

### 4 — Verdad o Falso: Iteración
```
metadata:
  materia: "ingenieria"
  tema: "prototipo_iteracion"
  nivel: "basico"
  tags: ["iteracion", "mejora_continua"]

respuesta: falso
tipo: vf

enunciado: "El proceso de prototipado es lineal y no requiere volver a las etapas anteriores una vez que el prototipo ha sido construido."

explicacion: |
  Falso. El prototipado es un proceso iterativo; los resultados de las pruebas suelen llevar a rediseños y nuevas versiones del prototipo para corregir fallos.
```

### 5 — Ciclo de vida del prototipo
```
metadata:
  materia: "ingenieria"
  tema: "prototipo_ciclo_vida"
  nivel: "intermedio"
  tags: ["pasos", "proceso"]

opciones_explicitas: ["Definir requisitos", "Construir prototipo", "Probar prototipo", "Analizar resultados"]

respuesta: ["Definir requisitos", "Construir prototipo", "Probar prototipo", "Analizar resultados"]
tipo: ordenar

enunciado: "Ordene las etapas lógicas de un ciclo de prototipado funcional:"

explicacion: |
  Un ciclo estándar comienza con la definición de qué se quiere probar, seguido de la construcción, la ejecución de pruebas y finalmente el análisis de los datos obtenidos para decidir si se itera o se avanza.
```