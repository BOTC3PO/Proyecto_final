### 1 — Identificación de la formación
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "basico"
  tags: ["geologia", "oxigeno"]

tipo: mc
opciones_explicitas: ["Formaciones de hierro bandeado (BIF)", "Capas de esquisto negro", "Depósitos de carbón", "Calizas de magnesio"]

enunciado: "Las evidencias geológicas de la Gran Oxidación se manifiestan principalmente en las llamadas ___."

explicacion: |
  Las Formaciones de Hierro Bandeado (BIF, por sus siglas en inglés) son capas de roca ricas en óxidos de hierro que se depositaron cuando el oxígeno liberado por la fotosíntesis reaccionó con el hierro disuelto en los océanos.
```

### 2 — Proceso de precipitación
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["quimica_prebiotica", "oceanos"]

variables:
  elemento_reactivo: "uno_de(['hierro disuelto', 'azufre líquido', 'silicato de magnesio'])"
  idx: "uno_de([0, 1, 2])"

tipo: completar
respuestas_validas: ["hierro disuelto"]

enunciado: "Durante la Gran Oxidación, el ___ en los océanos reaccionó con el oxígeno molecular, provocando su precipitación en el fondo marino."

explicacion: |
  El hierro estaba disuelto en los océanos en forma de Fe(II). Al aparecer el oxígeno (O2), este oxidó el hierro a Fe(III), el cual es insoluble y precipitó como óxido de hierro.
```

### 3 — Secuencia de la oxidación oceánica
```
metadata:
  materia: "historia_profucha"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["secuencia", "geologia"]

tipo: ordenar
opciones_explicitas: ["Producción de O2 por cianobacterias", "Oxidación de hierro disuelto en el océano", "Precipitación de óxidos de hierro (BIF)", "Aumento de la oxigenación atmosférica"]

enunciado: "Ordena cronológicamente los eventos que llevaron a la formación de los depósitos de hierro bandeado y la oxigenación atmosférica:"

explicacion: |
  Primero la vida fotosintética produce oxígeno; luego este oxida el hierro disponible en el agua; esto genera los depósitos BIF; finalmente, una vez saturado el sumidero de hierro, el oxígeno comienza a acumularse en la atmósfera.
```

### 4 — El papel de los sumideros
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "intermedio"
  tags: ["sumideros", "oxigeno"]

tipo: vf
opciones_explicitas: ["verdadero", "falso"]

enunciado: "La formación de las BIF actuó como un 'sumidero' que retrasó la acumulación masiva de oxígeno en la atmósfera durante millones de años."

explicacion: |
  Verdadero. El oxígeno producido se consumía rápidamente oxidando el hierro y otros compuestos en el océano antes de poder escapar a la atmósfera.
```

### 5 — Cálculo de saturación (Simulación)
```
metadata:
  materia: "historia_profunda"
  tema: "gran_oxidacion"
  nivel: "avanzado"
  tags: ["geoquimica", "oxigeno"]

variables:
  concentracion_oxigeno: "random_float(0.0, 0.01)"
  umbral_saturacion: "0.05"

tipo: input
tolerancia_abs: 0.001

enunciado: "Si la concentración de oxígeno en el océano es de {concentracion_oxigeno} moles/m³ y el umbral de saturación de los sumideros de hierro es de {umbral_saturacion} moles/m³, ¿cuál es la diferencia respecto al umbral?"

pasos:
  - "Calcular la diferencia absoluta entre el umbral y la concentración actual."

explicacion: |
  La diferencia es el margen que faltaba para que el oxígeno comenzara a acumularse en la atmósfera tras saturar los sumideros químicos.
```