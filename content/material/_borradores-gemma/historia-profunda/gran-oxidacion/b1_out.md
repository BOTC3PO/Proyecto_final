### 1 — El origen del oxígeno
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["biologia", "atmosfera"]

tipo: mc
opciones_explicitas: ["Cianobacterias", "Dinosaurios", "Volcanes", "Asteroides"]

enunciado: "La Gran Oxidación fue causada por la actividad de un grupo de organismos fotosintéticos conocidos como ___."

explicacion: |
  Las cianobacterias fueron los primeros organismos capaces de realizar la fotosíntesis oxigénica, liberando oxígeno como subproducto.
```

### 2 — El destino del oxígeno inicial
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["geologia", "quimica"]

variables:
  escenario_idx: uno_de([0, 1])
  escenario: [
    ["el oxígeno reaccionó con el hierro disuelto en los océanos", "se formaron formaciones de hierro bandeado (BIF)"],
    ["el oxígeno se acumuló rápidamente en la atmósfera", "se produjo un efecto invernadero masivo"]
  ]

tipo: mc
opciones_explicitas: ["Escenario A", "Escenario B"]

enunciado: "Durante el inicio de la Gran Oxidación, el oxígeno liberado no fue a la atmósfera inmediatamente, sino que primero {escenario[escenario_idx][0]}."

explicacion: |
  Antes de que el oxígeno se acumulara en la atmósfera, reaccionó con el hierro disuelto en los océanos, depositándolo en el fondo marino como hierro bandeado.
```

### 3 — El impacto climático
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["clima", "extincion"]

tipo: completar
respuestas_validas: ["Glaciación", "calentamiento"]

enunciado: "La acumulación de oxígeno en la atmósfera provocó la oxidación del metano (un potente gas de efecto invernadero), lo que derivó en una de las mayores ___ de la historia de la Tierra."

explicacion: |
  La reducción de gases de efecto invernadero como el metano provocó un enfriamiento global extremo, conocido como la Glaciación Huronesiana.
```

### 4 — Secuencia de eventos
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["cronologia"]

tipo: ordenar
opciones_explicitas: ["Fotosíntesis oxigénica", "Oxidación de hierro disuelto", "Acumulación de O2 atmosférico", "Glaciación global"]

enunciado: "Ordena cronológicamente los eventos que caracterizaron el periodo de la Gran Oxidación:"

explicacion: |
  Primero surge la fotosíntesis, luego el oxígeno reacciona con el hierro (BIF), luego el oxígeno llega a la atmósfera y finalmente causa el enfriamiento global.
```

### 5 — El estado de la atmósfera
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["atmosfera"]

tipo: input
tolerancia_abs: 0

enunciado: "Antes de la Gran Oxidación, la atmósfera terrestre era predominantemente ________ (escribe 'anóxica' o 'rica' según corresponda)."

explicacion: |
  La atmósfera primordial era anóxica, es decir, carecía de niveles significativos de oxígeno libre.
```