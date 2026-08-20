### 1 — Concepto de Calor
```
metadata:
  materia: "fisica"
  tema: "calor_q_m_c_deltat"
  nivel: "basico"
  tags: ["conceptos_basicos", "energia"]

tipo: mc
opciones_explicitas: ["Transferencia de energía térmica", "Temperatura de un cuerpo", "Energía cinética de las partículas", "Capacidad de un cuerpo para calentarse"]

enunciado: "El calor se define físicamente como la ________ que fluye entre dos cuerpos con diferente temperatura."

explicacion: |
  El calor es la energía en tránsito que se transfiere de un objeto con mayor temperatura a uno con menor temperatura. No es una propiedad de los cuerpos, sino un proceso de transferencia.
```

### 2 — Calor Específico
```
metadata:
  materia: "fisica"
  tema: "calor_q_m_c_deltat"
  nivel: "basico"
  tags: ["propiedades_materia"]

tipo: vf
respuesta: falso

enunciado: "¿El calor específico de una sustancia es una propiedad intensiva que depende de la cantidad de masa presente en el objeto?"

explicacion: |
  Falso. El calor específico es una propiedad intensiva (no depende de la masa). La propiedad que depende de la masa es la capacidad calorífica.
```

### 3 — Relación de Variables
```
metadata:
  materia: "fisica"
  tema: "calor_q_m_c_deltat"
  nivel: "intermedio"
  tags: ["formula", "analisis"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [[100, "aumenta", "mayor"], [50, "disminuye", "menor"]]

tipo: mc
opciones_explicitas: ["Proporcional", "Inversamente proporcional", "No tiene relación", "Exponencial"]

enunciado: "Si mantenemos la masa y el calor específico constantes, la cantidad de calor (Q) es ________ a la variación de temperatura (ΔT). En nuestro caso, si la temperatura {datos[escenario_idx][1]}, el calor {datos[escenario_idx][2]}."

explicacion: |
  Según la fórmula Q = m·c·ΔT, la cantidad de calor es directamente proporcional a la variación de temperatura.
```

### 4 — Unidades de Medida
```
metadata:
  materia: "fisica"
  tema: "calor_q_m_c_deltat"
  nivel: "basico"
  tags: ["unidades"]

tipo: completar
respuestas_validas: ["calorías", "Joules"]

enunciado: "En el sistema internacional (SI), la unidad de energía térmica es el ________, mientras que en el sistema termoquímico se utiliza la ________."

explicacion: |
  El Joule (J) es la unidad de energía en el SI, mientras que la caloría (cal) es la unidad tradicional basada en el calentamiento del agua.
```

### 5 — Orden de Proceso Térmico
```
metadata:
  materia: "fisica"
  tema: "calor_q_m_c_deltat"
  nivel: "intermedio"
  tags: ["proceso", "termodinamica"]

tipo: ordenar
opciones_explicitas: ["Medir temperaturas iniciales", "Calcular la diferencia de temperatura", "Multiplicar por masa y calor específico", "Determinar el calor transferido"]

enunciado: "Para resolver un problema práctico de transferencia de calor usando la fórmula Q = m·c·ΔT, el orden lógico de los pasos es:"

explicacion: |
  Primero se deben conocer los estados iniciales y finales para hallar ΔT, luego se aplican las constantes de la sustancia y la masa para obtener el resultado final.
```