### 1 — Origen temporal de los eucariotas
```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "basico"
  tags: ["evolucion", "cronologia"]

variables:
  escenario: uno_de([
    [3800, "procariotas"],
    [1500, "eucariotas"]
  ])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["3800 millones de años", "2000 millones de años", "1500 millones de años", "500 millones de años"]

enunciado: "Los procariotas aparecieron hace aproximadamente {escenario[0]} millones de años, mientras que los eucariotas aparecieron mucho después, hace unos {escenario[1]} millones de años."

explicacion: |
  La vida procariota es mucho más antigua, con registros de hace unos 3800 millones de años, mientras que la complejidad celular eucariota surgió mucho después.
```

### 2 — Comparativa de antigüedad
```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "basico"
  tags: ["comparacion"]

respuesta: "mucho después"
tipo: completar
respuestas_validas: ["mucho después", "antes", "al mismo tiempo"]

enunciado: "En la línea de tiempo de la vida, los eucariotas aparecieron ___ que los procariotas."

explicacion: |
  Los procariotas dominaron la Tierra durante casi 2000 millones de años antes de la aparición de las células eucariotas.
```

### 3 — Cronología evolutiva
```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "intermedio"
  tags: ["ordenar", "evolucion"]

opciones_explicitas: ["Aparición de procariotas", "Aparición de eucariotas", "Aparición de organismos multicelulares"]
respuesta: ["Aparición de procariotas", "Aparición de eucariotas", "Aparición de organismos multicelulares"]
tipo: ordenar

enunciado: "Ordena cronológicamente los siguientes hitos biológicos, desde el más antiguo al más reciente:"

explicacion: |
  Primero aparecieron las células procariotas simples, luego las eucariotas con núcleo, y finalmente la multicelularidad compleja.
```

### 4 — Estimación de la brecha temporal
```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "avanzado"
  tags: ["calculo", "tiempo"]

variables:
  t_proc: 3800
  t_euc: 1750

respuesta: t_proc - t_euc
tipo: input
tolerancia_abs: 100

enunciado: "Si los procariotas aparecieron hace {t_proc} millones de años y los eucariotas hace {t_euc} millones de años, ¿cuántos millones de años de ventaja temporal tuvieron los procariotas sobre los eucariotas?"

explicacion: |
  La diferencia es de {t_proc - t_euc} millones de años.
```

### 5 — Verdad o Falso: Aparición de la complejidad
```
metadata:
  materia: "historia_profunda"
  tema: "eucariotas"
  nivel: "basico"
  tags: ["logica"]

respuesta: falso
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es correcto afirmar que los eucariotas y los procariotas aparecieron en la Tierra en el mismo periodo geológico inicial?"

explicacion: |
  Es falso. Los procariotas precedieron a los eucariotas por un margen de aproximadamente 2000 millones de años.
```