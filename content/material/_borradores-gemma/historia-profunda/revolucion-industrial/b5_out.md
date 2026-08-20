### 1 — El motor de vapor y la locomotora
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["inventos", "transporte"]

variables:
  escenario: uno_de([["Máquina de vapor de Watt", "Revolución del transporte terrestre"], ["Telar mecánico", "Producción textil masiva"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Revolución del transporte terrestre", "Producción textil masiva", "Comunicación instantánea", "Iluminación urbana"]

enunciado: "El impacto principal de la {escenario[idx][0]} fue la {escenario[idx][1]}."

explicacion: |
  La {escenario[idx][0]} transformó la economía al permitir la {escenario[idx][1]}.
```

### 2 — La era del telégrafo
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["comunicacion", "tecnologia"]

variables:
  datos: [["Telégrafo", "Comunicación a larga distancia"], ["Ferrocarril", "Movilidad de mercancías"], ["Máquina de coser", "Producción de indumentaria"]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: completar
respuestas_validas: ["Comunicación a larga distancia", "Movilidad de mercancías", "Producción de indumentaria"]

enunciado: "El invento del ___ permitió la ___."

pasos:
  - "Identificar el invento seleccionado."
  - "Relacionar con su consecuencia social o económica."

explicacion: |
  El {datos[idx][0]} fue fundamental para la {datos[idx][1]}.
```

### 3 — Secuencia de innovaciones
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "avanzado"
  tags: ["procesos", "orden"]

opciones_explicitas: ["Máquina de vapor", "Locomotora de vapor", "Expansión ferroviaria"]

respuesta: ["Máquina de vapor", "Locomotora de vapor", "Expansión ferroviaria"]
tipo: ordenar

enunciado: "Ordene cronológicamente la evolución tecnológica que impulsó el transporte en la Revolución Industrial:"

explicacion: |
  Primero se perfeccionó la máquina de vapor, luego se aplicó al transporte con la locomotora y finalmente se consolidó la red ferroviaria.
```

### 4 — Impacto en la producción
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "basico"
  tags: ["industria", "textil"]

variables:
  caso: uno_de([["Mecanización", "Aumento de la productividad"], ["Artesanía", "Producción lenta y manual"]])
  idx: uno_de([0, 1])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["Aumento de la productividad", "Producción lenta y manual", "Reducción de costos", "Desaparición de talleres"]

enunciado: "Al comparar la {caso[idx][0]} con el modelo anterior, el resultado fue un {caso[idx][1]}."

explicacion: |
  La transición hacia la {caso[idx][0]} significó un {caso[idx][1]}.
```

### 5 — El cambio en la energía
```
metadata:
  materia: "historia_profunda"
  tema: "revolucion_industrial"
  nivel: "intermedio"
  tags: ["energia", "carbón"]

variables:
  fuente: uno_de([["Carbón mineral", "Combustible fósil"], ["Madera", "Biomasa"]])
  idx: uno_de([0, 1])

respuesta: fuente[idx][1]
tipo: completar
respuestas_validas: ["Combustible fósil", "Biomasa"]

enunciado: "El uso masivo de ___ permitió el acceso a un ___."

explicacion: |
  La transición hacia el uso de {fuente[idx][0]} fue el motor que proporcionó el {fuente[idx][1]} necesario para las fábricas.
```