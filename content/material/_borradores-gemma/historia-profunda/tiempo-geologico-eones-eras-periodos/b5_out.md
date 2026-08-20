### 1 — La explosión de la vida
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["paleontologia", "cambrian"]

variables:
  escenario: uno_de([["Explosión Cámbrica", "Paleozoico"], ["Extinción masiva del Permo-Triásico", "Mesozoico"], ["Aparición de los mamíferos", "Cenozoico"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "El evento conocido como la {escenario[idx][0]} marcó un hito evolutivo fundamental. ¿A qué era geológica pertenece este evento?"

explicacion: |
  El evento {escenario[idx][0]} ocurrió durante la era {escenario[idx][1]}.
```

### 2 — El reinado de los dinosaurios
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["dinosaurios", "mesozoico"]

variables:
  escenario: uno_de([["dominio de los dinosaurios", "Mesozoico"], ["aparición de las plantas terrestres", "Paleozoico"], ["formación de la Luna", "Hadeano"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: completar
respuestas_validas: ["Mesozoico", "Paleozoico", "Hadeano"]

enunciado: "El periodo caracterizado por el {escenario[idx][0]} se sitúa en la era ___."

explicacion: |
  La era correspondiente al {escenario[idx][0]} es la era {escenario[idx][1]}.
```

### 3 — Secuencia de Eras
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "avanzado"
  tags: ["cronologia", "geologia"]

variables:
  secuencia: [["Paleozoico", "Mesozoico", "Cenozoico"], ["Mesozoico", "Cenozoico", "Paleozoico"], ["Cenozoico", "Paleozoico", "Mesozoico"]]
  idx: uno_de([0, 1, 2])

respuesta: secuencia[idx]
tipo: ordenar
opciones_explicitas: ["Paleozoico", "Mesozoico", "Cenozoico"]

enunciado: "Ordena las siguientes eras desde la más antigua a la más reciente según la cronología geológica estándar."

explicacion: |
  El orden correcto de las eras es: Paleozoico, Mesozoico y Cenozoico.
```

### 4 — El origen de la vida
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "intermedio"
  tags: ["precambrico", "vida"]

variables:
  escenario: uno_de([["aparición de las primeras células procariotas", "Precámbrico"], ["aparición de los primeros animales complejos", "Paleozoico"], ["extinción de los dinosaurios", "Mesozoico"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Precámbrico", "Paleozoico", "Mesozoico"]

enunciado: "La {escenario[idx][0]} tuvo lugar durante el eón ___."

explicacion: |
  La {escenario[idx][0]} es un evento característico del eón {escenario[idx][1]}.
```

### 5 — El auge de los mamíferos
```
metadata:
  materia: "historia_profunda"
  tema: "tiempo_geologico_eones_eras_periodos"
  nivel: "basico"
  tags: ["mamiferos", "cenozoico"]

variables:
  escenario: uno_de([["dominio de los mamíferos", "Cenozoico"], ["dominio de los reptiles", "Mesozoico"], ["dominio de los peces", "Paleozoico"]])
  idx: uno_de([0, 1, 2])

respuesta: escenario[idx][1]
tipo: vf
opciones_explicitas: [verdadero, falso]

enunciado: "El {escenario[idx][0]} es un evento que define la era ___."

explicacion: |
  La era correcta es la {escenario[idx][1]}.
```