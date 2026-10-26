### 1 — Definición de Potencia
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["definicion", "trabajo", "tiempo"]

tipo: mc
opciones_explicitas: ["El trabajo realizado por unidad de tiempo", "La energía almacenada en un sistema", "La fuerza aplicada sobre un objeto", "El cambio en la velocidad de un cuerpo"]

enunciado: "La potencia mecánica se define físicamente como ___."

explicacion: |
  La potencia mide la rapidez con la que se realiza un trabajo o se transfiere energía. Su fórmula es P = W/t.
```

### 2 — Unidades de Medida
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["unidades", "sistema_internacional"]

tipo: vf
respuesta: falso

enunciado: "¿La unidad de potencia en el Sistema Internacional de Unidades (SI) es el Joule (J)?"

explicacion: |
  Falso. El Joule (J) es la unidad de trabajo o energía. La unidad de potencia es el Vatio (W), que equivale a 1 Joule por segundo (1 J/s).
```

### 3 — Relación Trabajo y Tiempo
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["relacion", "proporcionalidad"]

variables:
  escenario: uno_de([[100, 10], [200, 20], [50, 5]])

tipo: completar
respuestas_validas: [10.0, 10.0, 10.0]
respuesta: escenario[0] / escenario[1]

enunciado: "Si un motor realiza un trabajo de {escenario[0]} J en un tiempo de {escenario[1]} s, la potencia mecánica resultante es de ___ W."

pasos:
  - "Identificar el trabajo (W): {escenario[0]} J"
  - "Identificar el tiempo (t): {escenario[1]} s"
  - "Aplicar la fórmula P = W / t"

explicacion: |
  Dividiendo el trabajo entre el tiempo obtenemos: {escenario[0]} / {escenario[1]} = {escenario[0]/escenario[1]} W.
```

### 4 — Análisis de Variables
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "intermedio"
  tags: ["proporcionalidad", "conceptos"]

tipo: mc
opciones_explicitas: ["Directamente proporcional al trabajo realizado", "Inversamente proporcional al tiempo", "Inversamente proporcional al trabajo realizado", "Directamente proporcional al tiempo"]

enunciado: "Si mantenemos el tiempo constante, la potencia es ___ al trabajo realizado. Si mantenemos el trabajo constante, la potencia es ___ al tiempo empleado."

explicacion: |
  Según la fórmula P = W/t: si W aumenta, P aumenta (directamente proporcional). Si t aumenta, P disminuye (inversamente proporcional).
```

### 5 — Orden de Conceptos
```
metadata:
  materia: "fisica"
  tema: "potencia_mecanica"
  nivel: "basico"
  tags: ["procesos", "conceptos"]

tipo: ordenar
opciones_explicitas: ["Aplicar una fuerza", "Desplazar un objeto", "Realizar un trabajo", "Calcular la potencia"]

enunciado: "Ordene lógicamente los pasos para determinar la potencia mecánica en un proceso físico:"

explicacion: |
  Primero debe existir una fuerza que cause un desplazamiento, lo cual genera un trabajo (W). Una vez obtenido el trabajo y el tiempo, se puede calcular la potencia (P).
```