### 1 — Ciclo de Carnot y Eficiencia
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "intermedio"
  tags: ["termodinamica", "carnot", "eficiencia"]

variables:
  temp_caliente: uno_de([600, 800, 1000])
  temp_fria: 300

respuesta: (temp_caliente / (temp_caliente + temp_fria)) * 100

tipo: input
tolerancia_abs: 0.1

enunciado: "Una máquina térmica opera entre una fuente caliente a {temp_caliente} K y una fuente fría a {temp_fria} K. Si la máquina opera bajo un ciclo de Carnot, ¿cuál es su eficiencia térmica expresada en porcentaje (%)?"

pasos:
  - "Calcular la eficiencia de Carnot usando la fórmula: η = 1 - (T_fria / T_caliente)"
  - "Multiplicar el resultado por 100 para obtener el porcentaje."

explicacion: |
  La eficiencia máxima teórica de una máquina térmica está limitada por la diferencia de temperaturas entre las fuentes, según el ciclo de Carnot.
```

### 2 — Primera Ley en Máquinas Térmicas
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "basico"
  tags: ["primera_ley", "calor", "trabajo"]

opciones_explicitas: ["W = Q_H - Q_C", "W = Q_H + Q_C", "W = Q_H / Q_C", "W = Q_C - Q_H"]

respuesta: "W = Q_H - Q_C"

tipo: mc

enunciado: "Según la primera ley de la termodinámica aplicada a una máquina térmica en ciclo, ¿cuál es la expresión que relaciona el trabajo neto (W) con el calor absorbido de la fuente caliente (Q_H) y el calor cedido a la fuente fría (Q_C)?"

explicacion: |
  En un ciclo, la variación de la energía interna es cero, por lo que el calor neto absorbido es igual al trabajo neto realizado por la máquina.
```

### 3 — Conversión de Energía
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "intermedio"
  tags: ["energia", "calor", "trabajo"]

variables:
  calor_absorbido: uno_de([5000, 8000, 12000])
  eficiencia: 0.25

respuesta: calor_absorbido * eficiencia

tipo: input
tolerancia_abs: 0.1

enunciado: "Una máquina térmica absorbe {calor_absorbido} J de calor de una fuente caliente. Si su eficiencia térmica es del {eficiencia * 100}%, ¿cuánto trabajo mecánico (W) realiza la máquina?"

explicacion: |
  El trabajo realizado es el producto de la energía térmica absorbida por la eficiencia del dispositivo: W = Q_H * η.
```

### 4 — Componentes de una Máquina de Vapor
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "basico"
  tags: ["historia", "componentes", "vapor"]

opciones_explicitas: ["Caldera", "Condensador", "Cilindro", "Pistón"]

respuesta: ["Caldera", "Cilindro", "Pistón", "Condensador"]

tipo: ordenar

enunciado: "Ordene los componentes de una máquina de vapor clásica siguiendo el flujo lógico de la energía: desde la generación de vapor hasta la liberación de calor al ambiente."

explicacion: |
  El vapor se genera en la caldera, expande en el cilindro moviendo el pistón, y finalmente el vapor residual se enfría en el condensador.
```

### 5 — El Segundo Principio y la Entropía
```
metadata:
  materia: "fisica"
  tema: "maquina_termodinamica_nivel2"
  nivel: "avanzado"
  tags: ["entropia", "segundo_principio", "irreversibilidad"]

opciones_explicitas: ["aumento", "disminución", "constancia", "cero"]

respuesta: "aumento"

tipo: mc

enunciado: "En una máquina térmica real (no ideal), debido a las fricciones y las transferencias de calor irreversibles, la entropía total del universo experimenta un/a ___."

explicacion: |
  El segundo principio de la termodinámica establece que en cualquier proceso real e irreversible, la entropía total del sistema más el entorno siempre aumenta.
```