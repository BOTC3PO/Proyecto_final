### 1 — Colonización vegetal
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "basico"
  tags: ["evolucion", "plantas"]

respuesta: "plantas"
tipo: completar
respuestas_validas: ["plantas"]

enunciado: "Las primeras formas de vida en colonizar la tierra firme fueron las ___."

explicacion: |
  Hace aproximadamente 470 millones de años, las plantas fueron las pioneras en la transición del medio acuático al terrestre.
```

### 2 — Cronología de la conquista
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["cronologia", "evolucion"]

variables:
  escenario: uno_de([
    ["plantas", "470", "artrópodos"],
    ["artrópodos", "370", "plantas"],
    ["tetrápodos", "370", "artrópodos"]
  ])

respuesta: escenario[0]
tipo: mc
opciones_explicitas: ["plantas", "artrópodos", "tetrápodos"]

enunciado: "De acuerdo con el registro fósil, ¿qué grupo fue el primero en colonizar la tierra firme hace {escenario[2]} millones de años?"

explicacion: |
  El orden de colonización fue: 1° Plantas (~470 Ma), 2° Artrópodos y 3° Tetrápodos (~370 Ma).
```

### 3 — El ascenso de los tetrápodos
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "basico"
  tags: ["tetrapodos", "evolucion"]

respuesta: 370
tipo: input
tolerancia_abs: 5

enunciado: "Los primeros tetrápodos comenzaron su expansión por tierra firme hace aproximadamente ___ millones de años."

pasos:
  - "Identificar el grupo de vertebrados con cuatro extremidades."
  - "Localizar su aparición en la línea de tiempo de la conquista terrestre."

explicacion: |
  Los tetrápodos aparecieron en el registro fósil hace unos 370 millones de años, mucho después de las plantas y los artrópodos.
```

### 4 — Orden evolutivo terrestre
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "avanzado"
  tags: ["orden", "evolucion"]

respuesta: ["plantas", "artrópodos", "tetrápodos"]
tipo: ordenar
opciones_explicitas: ["plantas", "artrópodos", "tetrápodos"]

enunciado: "Ordene cronológicamente los grupos que colonizaron la tierra firme, desde el más antiguo al más reciente:"

explicacion: |
  La secuencia correcta es: Plantas (470 Ma) -> Artrópodos -> Tetrápodos (370 Ma).
```

### 5 — Relación temporal
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_tierra_firme"
  nivel: "intermedio"
  tags: ["comparacion", "tiempo"]

variables:
  datos: uno_de([
    ["plantas", "artrópodos"],
    ["artrópodos", "tetrápodos"],
    ["plantas", "tetrápodos"]
  ])

respuesta: datos[1]
tipo: mc
opciones_explicitas: ["plantas", "artrópodos", "tetrápodos"]

enunciado: "Si las {datos[0]} colonizaron la tierra hace 470 millones de años, ¿qué grupo colonizó después de ellas pero antes que los tetrápodos?"

explicacion: |
  El orden cronológico es: Plantas -> Artrópodos -> Tetrápodos.
```