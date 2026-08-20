### 1 — Organización social y agricultura
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["diaguitas", "agricultura", "sedentarismo"]

respuesta: "sedentaria"
tipo: completar
respuestas_validas: ["sedentaria"]

enunciado: "A diferencia de los grupos nómadas, los pueblos como los diaguitas desarrollaron una organización social ___ basada en la agricultura y el control de terrazas de cultivo."

explicacion: |
  Los diaguitas, al establecerse en valles y zonas montañosas, desarrollaron una agricultura avanzada que requería asentamientos permanentes, lo que define a una sociedad sedentaria.
```

### 2 — Movilidad y subsistencia
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "basico"
  tags: ["tehuelches", "nómadas", "caza"]

variables:
  escenario: uno_de([["Tehuelches", "Patagonia"], ["Guaraníes", "Litoral"]])
  tipo_sociedad: uno_de(["nómada", "sedentaria"])

respuesta: "nómada"
tipo: mc
opciones_explicitas: ["nómada", "sedentaria"]

enunciado: "Los {escenario[0]} se caracterizaban por un estilo de vida {tipo_sociedad}, desplazándose constantemente para la caza y la recolección."

explicacion: |
  Los pueblos de la Patagonia, como los tehuelches, dependían de la migración estacional de la fauna para su subsistencia, lo que impedía el sedentarismo.
```

### 3 — Influencia cultural en el NOA
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["diaguitas", "inca", "influencia"]

respuesta: "incaica"
tipo: mc
opciones_explicitas: ["incaica", "maya", "azteca", "guaraní"]

enunciado: "La organización política y técnica de muchos pueblos del Noroeste Argentino, como los diaguitas, estuvo fuertemente influenciada por la expansión del imperio ___."

explicacion: |
  La expansión del Tahuantinsuyo (Imperio Inca) dejó una huella profunda en la organización social, el uso de terrazas y la administración de recursos en el actual territorio argentino.
```

### 4 — Secuencia de complejidad social
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "avanzado"
  tags: ["organización", "social", "secuencia"]

respuesta: ["Cazadores-recolectores", "Pastores seminómadas", "Sociedades agrícolas complejas"]
tipo: ordenar
opciones_explicitas: ["Cazadores-recolectores", "Pastores seminómadas", "Sociedades agrícolas complejas"]

enunciado: "Ordene de menor a mayor complejidad en la organización social y permanencia en el territorio:"

explicacion: |
  La complejidad social suele estar ligada a la capacidad de producir excedentes alimentarios: desde la recolección (nómadas) hasta la agricultura intensiva (sedentarios con jerarquías).
```

### 5 — Comparación de modos de vida
```
metadata:
  materia: "historia_profunda"
  tema: "pueblos_originarios_territorio_argentino"
  nivel: "intermedio"
  tags: ["nómadas", "sedentarios", "comparación"]

variables:
  caso: uno_de([["nómadas", "caza y recolección"], ["sedentarios", "agricultura y excedente"]])

respuesta: "caza y recolección"
tipo: mc
opciones_explicitas: ["caza y recolección", "agricultura y excedente"]

enunciado: "Las sociedades con un modo de vida {caso[0]} se basaban principalmente en la {caso[1]}."

explicacion: |
  Los grupos nómadas dependen de los ciclos naturales de los recursos disponibles en el entorno, moviéndose según la disponibilidad de presas o frutos.
```