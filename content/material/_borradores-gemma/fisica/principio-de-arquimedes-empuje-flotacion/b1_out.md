### 1 — Concepto de Empuje
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["arquimedes", "empuje", "fuerza"]

tipo: mc
opciones_explicitas: ["La fuerza que ejerce un fluido sobre un cuerpo sumergido", "La fuerza de gravedad que atrae al objeto", "La fuerza de fricción entre el objeto y el agua", "La fuerza que mantiene al objeto en reposo"]

enunciado: "Según el principio de Arquímedes, el empuje es ___."

explicacion: |
  El empuje es la fuerza vertical hacia arriba que ejerce un fluido (líquido o gas) sobre cualquier cuerpo que esté sumergido en él.
```

### 2 — Relación de pesos y fuerzas
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "basico"
  tags: ["equilibrio", "flotacion"]

tipo: vf
respuesta: falso

enunciado: "Si un objeto se encuentra en equilibrio mientras flota en la superficie de un líquido, significa que su peso es mayor que la fuerza de empuje ejercida por el fluido."

explicacion: |
  Falso. Para que un objeto flote en equilibrio, la fuerza de empuje debe ser exactamente igual al peso del objeto (sumergido o parcialmente sumergido).
```

### 3 — El volumen desplazado
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["volumen", "desplazamiento"]

variables:
  datos: [[1.5, "1.5"], [2.0, "2.0"], [0.8, "0.8"]]
  idx: uno_de([0,1,2])

tipo: completar
respuestas_validas: ["1.5", "2.0", "0.8"]
respuesta: datos[idx][1]

enunciado: "Un objeto sumergido desplaza un volumen de fluido de {datos[idx][0]} m³. Según el principio de Arquímedes, la magnitud del empuje será equivalente al peso de una masa de fluido de ___ kg."

explicacion: |
  El volumen de fluido desplazado es igual al volumen de la parte sumergida del objeto. El empuje es igual al peso de ese fluido desplazado.
```

### 4 — Condiciones de flotación
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "intermedio"
  tags: ["densidad", "flotacion"]

tipo: mc
opciones_explicitas: ["El objeto se hunde", "El objeto flota", "El objeto se queda en equilibrio en el medio"]

enunciado: "Si la densidad del objeto es mayor que la densidad del fluido, el objeto ___."

explicacion: |
  Cuando la densidad del objeto es mayor, el peso del objeto es mayor que el empuje máximo que puede recibir (el peso del volumen de fluido desplazado por el objeto totalmente sumergido), por lo tanto, el objeto se hunde.
```

### 5 — Secuencia de análisis de flotación
```
metadata:
  materia: "fisica"
  tema: "principio_de_arquimedes_empuje_flotacion"
  nivel: "avanzado"
  tags: ["procedimiento", "analisis"]

tipo: ordenar
opciones_explicitas: ["Calcular el peso del objeto", "Calcular el empuje máximo (peso del fluido desplazado)", "Comparar peso con empuje para determinar flotación"]

enunciado: "Para determinar si un objeto flotará o se hundirá en un fluido, se debe seguir este orden lógico de análisis:"

explicacion: |
  Primero determinamos la fuerza hacia abajo (peso), luego la fuerza hacia arriba máxima posible (empuje del volumen total del objeto) y finalmente comparamos ambas magnitudes.
```