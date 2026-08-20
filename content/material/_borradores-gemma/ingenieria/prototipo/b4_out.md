### 1 — Prototipo vs Producto Final
```
metadata:
  materia: "ingenieria"
  tema: "prototipo_vs_producto_final"
  nivel: "basico"
  tags: ["diseño", "desarrollo"]

respuesta: "verificar la viabilidad de una idea"
tipo: completar
respuestas_validas: ["verificar la viabilidad de una idea", "validar conceptos", "probar ideas"]

enunciado: "A diferencia del producto final, cuyo objetivo es la producción en serie y la satisfacción del cliente, el propósito principal de un prototipo es ___."

explicacion: |
  El prototipo es una herramienta de aprendizaje y validación técnica, no un producto destinado a la venta o uso final.
```

### 2 — El objetivo del prototipo
```
metadata:
  materia: "ingenieria"
  tema: "caracteristicas_prototipo"
  nivel: "basico"
  tags: ["conceptos"]

variables:
  es_final: uno_de([verdadero, falso])

respuesta: es_final
tipo: vf

enunciado: "Un prototipo es una versión preliminar y simplificada de la solución que busca probar ideas antes de la versión final. ¿Es el prototipo la versión definitiva del diseño? {es_final}"

explicacion: |
  Si la variable sorteada es falso, la respuesta es falso. El prototipo es una etapa de experimentación, no el resultado final.
```

### 3 — Diferencias clave
```
metadata:
  materia: "ingenieria"
  tema: "comparacion_prototipo"
  nivel: "intermedio"
  tags: ["metodologia"]

respuesta: "un prototipo es una versión simplificada para probar ideas"
tipo: mc
opciones_explicitas: ["un prototipo es una versión simplificada para probar ideas", "un prototipo es el producto listo para el mercado", "un prototipo es una versión con todos los materiales finales", "un prototipo es un manual de instrucciones"]

enunciado: "¿Cuál es la distinción fundamental entre un prototipo y un producto terminado?"

explicacion: |
  El prototipo se enfoca en la funcionalidad y la validación de hipótesis de diseño, mientras que el producto terminado se enfoca en la manufacturabilidad, estética y calidad comercial.
```

### 4 — Ciclo de desarrollo de un prototipo
```
metadata:
  materia: "ingenieria"
  tema: "ciclo_prototipado"
  nivel: "intermedio"
  tags: ["procesos"]

respuesta: ["definir requerimientos", "construir prototipo", "evaluar resultados", "iterar diseño"]
tipo: ordenar
opciones_explicitas: ["definir requerimientos", "construir prototipo", "evaluar resultados", "iterar diseño"]

enunciado: "Ordene las etapas lógicas en el proceso de creación de un prototipo para validar una solución técnica:"

explicacion: |
  El proceso es cíclico e iterativo: primero se sabe qué se necesita, se construye, se prueba y se vuelve a diseñar según los errores encontrados.
```

### 5 — Fidelidad del prototipo
```
metadata:
  materia: "ingenieria"
  tema: "fidelidad_prototipo"
  nivel: "avanzado"
  tags: ["especificaciones"]

variables:
  es_alta_fidelidad: uno_de([verdadero, falso])

respuesta: es_alta_fidelidad
tipo: vf

enunciado: "Un prototipo de alta fidelidad se distingue de uno de baja fidelidad porque posee una apariencia y funcionalidad muy cercanas al producto final. ¿Es esto correcto? {es_alta_fidelidad}"

explicacion: |
  La fidelidad se refiere a qué tan cerca está el prototipo del producto real en términos de estética, interacción y precisión técnica.
```