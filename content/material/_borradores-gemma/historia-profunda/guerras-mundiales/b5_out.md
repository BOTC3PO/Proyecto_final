### 1 — El estallido del conflicto
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "basico"
  tags: ["historia", "conflictos"]

variables:
  escenario: uno_de([["El asesinato del archiduque Francisco Fernando en Sarajevo desencadenó el conflicto.", "Primera Guerra Mundial"], ["La invasión de Polonia por parte de la Alemania nazi fue el detonante.", "Segunda Guerra Mundial"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Primera Guerra Mundial", "Segunda Guerra Mundial"]

enunciado: "Identifica a qué conflicto histórico corresponde el siguiente evento: {escenario[idx][0]}"

explicacion: |
  El evento descrito marca el inicio de la {escenario[idx][1]}.
```

### 2 — Tecnología de guerra
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["tecnologia", "armamento"]

variables:
  escenario: uno_de([["El uso masivo de gases venenosos en las trincheras.", "Primera Guerra Mundial"], ["El desarrollo y uso de la bomba atómica en Hiroshima y Nagasaki.", "Segunda Guerra Mundial"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Primera Guerra Mundial", "Segunda Guerra Mundial"]

enunciado: "Analiza la característica tecnológica: {escenario[idx][0]}. ¿A qué guerra pertenece?"

explicacion: |
  La característica mencionada es propia de la {escenario[idx][1]}.
```

### 3 — El orden mundial
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "avanzado"
  tags: ["geopolitica", "tratados"]

variables:
  escenario: uno_de([["La firma del Tratado de Versalles para redefinir fronteras europeas.", "Primera Guerra Mundial"], ["La creación de la Organización de las Naciones Unidas (ONU) para mantener la paz.", "Segunda Guerra Mundial"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: completar

enunciado: "El evento '{escenario[idx][0]}' es un hito fundamental de la ___."
respuestas_validas: ["Primera Guerra Mundial", "Segunda Guerra Mundial"]

explicacion: |
  El hito mencionado ocurrió durante la {escenario[idx][1]}.
```

### 4 — Alianzas militares
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "intermedio"
  tags: ["alianzas", "bloques"]

variables:
  escenario: uno_de([["La Triple Entente (Francia, Gran Bretaña y Rusia) contra las Potencias Centrales.", "Primera Guerra Mundial"], ["El Eje (Alemania, Italia y Japón) contra los Aliados.", "Segunda Guerra Mundial"]])
  idx: uno_de([0, 1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["Primera Guerra Mundial", "Segunda Guerra Mundial"]

enunciado: "Dada la formación de bloques: {escenario[idx][0]}. ¿A qué guerra corresponde?"

explicacion: |
  Corresponde a la {escenario[idx][1]}.
```

### 5 — Secuencia de eventos
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_mundiales"
  nivel: "avanzado"
  tags: ["cronologia", "eventos"]

variables:
  escenario: uno_de([
    ["La guerra de movimientos", "El Tratado de Versalles", "La creación de la Sociedad de Naciones"],
    ["La invasión de Francia", "El ataque a Pearl Harbor", "La rendición de Japón"]
  ], [0, 1])
  idx: uno_de([0, 1])

respuesta: ["La guerra de movimientos", "El Tratado de Versalles", "La creación de la Sociedad de Naciones"]
tipo: ordenar
opciones_explicitas: ["La guerra de movimientos", "El Tratado de Versalles", "La Sociedad de Naciones"]

enunciado: "Ordena cronológicamente los hitos de la {escenario[idx][0]} (si es la opción 0) o los eventos de la {escenario[idx][1]} (si es la opción 1)."

explicacion: |
  La secuencia correcta representa la cronología de la {escenario[idx][0]}.
```