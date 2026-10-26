### 1 — El intercambio de especies
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["intercambio_colombino", "biologia", "historia"]

variables:
  escenario_idx: uno_de([0, 1, 2])
  datos: [
    ["maíz", "Eurasia", "Europa"],
    ["caballo", "América", "Europa"],
    ["viruela", "América", "Eurasia"]
  ]

enunciado: "Tras el contacto de 1492, el intercambio colombino permitió que el {datos[escenario_idx][0]} fuera llevado desde {datos[escenario_idx][1]} hacia {datos[escenario_idx][2]}."

respuesta: datos[escenario_idx][2]
tipo: mc
opciones_explicitas: ["América", "Europa", "África", "Asia"]

explicacion: |
  El intercambio colombino fue el flujo masivo de plantas, animales y patógenos entre el Viejo y el Nuevo Mundo que transformó la ecología y la demografía global.
```

### 2 — Impacto demográfico
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["demografia", "enfermedades", "impacto"]

variables:
  enfermedad_idx: uno_de([0, 1])
  enfermedades: [
    ["viruela", "catastrófico"],
    ["sarampión", "catastrófico"]
  ]

enunciado: "La llegada de la {enfermedades[enfermedad_idx][0]} a América tuvo un impacto ___ en la población indígena."

respuesta: enfermedades[enfermedad_idx][1]
tipo: completar
respuestas_validas: ["catastrófico"]

explicacion: |
  Las poblaciones indígenas de América no tenían inmunidad contra enfermedades euroasiáticas como la viruela o el sarampión, lo que causó un colapso demográfico masivo.
```

### 3 — Nuevos cultivos en Europa
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["agricultura", "europa", "papa"]

respuesta: "papa"
tipo: mc
opciones_explicitas: ["trigo", "papa", "arroz", "cebada"]

enunciado: "Un cultivo fundamental proveniente de América que revolucionó la dieta europea y permitió un crecimiento poblacional en los siglos posteriores fue la ___."

explicacion: |
  La papa (Solanum tuberosum) proporcionó una densidad calórica alta que fue clave para evitar hambrunas en Europa.
```

### 4 — Animales en el Nuevo Mundo
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["animales", "transporte"]

respuesta: "caballo"
tipo: mc
opciones_explicitas: ["vaca", "caballo", "oveja", "cerdo"]

enunciado: "La introducción de este animal transformó la cultura de las tribus de las llanuras en América, facilitando el transporte y la caza: el ___."

explicacion: |
  El caballo fue introducido por los españoles y cambió radicalmente la movilidad y las tácticas de guerra de los pueblos nativos.
```

### 5 — Secuencia del intercambio
```
metadata:
  materia: "historia_profunda"
  tema: "conquista_colonizacion_america"
  nivel: "avanzado"
  tags: ["procesos", "historia"]

respuesta: ["Llegada de Colón", "Introducción de especies", "Transformación ecológica"]
tipo: ordenar
opciones_explicitas: ["Llegada de Colón", "Introducción de especies", "Transformación ecológica", "Descubrimiento de oro"]

explicacion: |
  El proceso comenzó con el contacto inicial, seguido por la transferencia biológica de especies y culminó en una transformación ecológica y cultural permanente de ambos hemisferios.
```