### 1 — Ventajas de la multicelularidad
```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["biologia", "evolucion"]

tipo: mc
opciones_explicitas: ["Mayor tamaño corporal", "Menor consumo de energía", "Aumento de la superficie de contacto con el medio", "Simplificación de procesos metabólicos"]

enunciado: "Una de las principales ventajas evolutivas de la multicelularidad es que permite a los organismos alcanzar un ___."

explicacion: |
  El aumento de tamaño corporal permite una mejor interacción con el entorno y una mayor capacidad de almacenamiento de recursos.
```

### 2 — Especialización celular
```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["biologia", "evolucion"]

variables:
  escenario: uno_de([
    ["digestión", "digestiva"],
    ["movimiento", "motora"],
    ["sensorial", "sensorial"]
  ])

tipo: completar
respuestas_validas: ["digestiva", "motora", "sensorial"]
respuesta: escenario[1]

enunciado: "La división del trabajo permite que existan células con funciones específicas. Si un grupo de células se especializa en el movimiento, se dice que tiene una función ___."

explicacion: |
  La especialización celular permite que diferentes tejidos realicen tareas distintas de manera eficiente, permitiendo la complejidad biológica.
```

### 3 — Protección y tamaño
```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "basico"
  tags: ["biologia", "evolucion"]

tipo: mc
opciones_explicitas: ["Ser más visibles para los depredadores", "Ser más difíciles de ingerir para los depredadores", "Reducir la necesidad de alimento", "Aumentar la tasa de evaporación"]

enunciado: "El incremento en el tamaño corporal derivado de la multicelularidad ofrece una ventaja de supervivencia relacionada con:"

explicacion: |
  Los organismos más grandes suelen ser más difíciles de consumir para depredadores de pequeño tamaño, lo que aumenta sus posibilidades de supervivencia.
```

### 4 — Secuencia de complejidad
```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "avanzado"
  tags: ["biologia", "evolucion"]

tipo: ordenar
opciones_explicitas: ["Célula unicelular", "Agregación de células", "Colonia de células", "Organismo multicelular especializado"]

respuesta: ["Célula unicelular", "Agregación de células", "Colonia de células", "Organismo multicelular especializado"]

enunciado: "Ordena los niveles de organización biológica desde la forma más simple hasta la más compleja en el proceso evolutivo de la multicelularidad:"

explicacion: |
  La evolución hacia la multicelularidad implica pasar de células aisladas a agrupaciones que luego desarrollan una división de funciones coordinada.
```

### 5 — El costo de la especialización
```
metadata:
  materia: "historia_profunda"
  tema: "multicelularidad"
  nivel: "intermedio"
  tags: ["biologia", "evolucion"]

tipo: input
tolerancia_abs: 0

enunciado: "En un organismo multicelular, la división del trabajo implica que las células ya no pueden realizar todas las funciones por sí mismas. Este proceso de especialización se conoce como ___."

respuesta: "diferenciación"

explicacion: |
  La diferenciación celular es el proceso mediante el cual las células adquieren formas y funciones específicas dentro de un organismo complejo.
```