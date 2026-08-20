### 1 — El encuentro de dos mundos
```
metadata:
  materia: "historia"
  tema: "conquista_colonizacion_america"
  nivel: "basico"
  tags: ["encuentro", "columbus", "europa"]

tipo: mc
opciones_explicitas: ["América", "Asia", "África", "Oceanía"]

enunciado: "En el año 1492, el viaje de Cristóbal Colón buscaba una ruta comercial hacia ___."

explicacion: |
  Colón buscaba una ruta hacia las Indias (Asia) navegando hacia el oeste, pero se encontró con un continente desconocido para los europeos.
```

### 2 — El Imperio Azteca
```
metadata:
  materia: "historia"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["aztecas", "conquista", "mexico"]

variables:
  escenario: uno_de([
    ["Hernán Cortés", "Tenochtitlán", "Mexicas"],
    ["Francisco Pizarro", "Cuzco", "Incas"]
  ])

tipo: completar
respuestas_validas: ["Hernán Cortés", "Tenochtitlán", "Mexicas"]

enunciado: "El conquistador español que lideró la caída del imperio de los {escenario[2]} fue {escenario[0]}, tomando como centro la ciudad de {escenario[1]}."

pasos:
  - "Identificar al líder de la expedición."
  - "Identificar el nombre de la capital del imperio conquistado."
  - "Identificar el nombre del pueblo originario."

explicacion: |
  {escenario[0]} lideró la expedición que sometió al imperio de los {escenario[2]} en el territorio que hoy es México.
```

### 3 — El Tratado de Tordesillas
```
metadata:
  materia: "historia"
  tema: "conquista_colonizacion_america"
  nivel: "avanzado"
  tags: ["tratado", "espana", "portugal"]

tipo: mc
opciones_explicitas: ["España", "Portugal", "Inglaterra", "Francia"]

enunciado: "El Tratado de Tordesillas (1494) dividió las zonas de exploración y conquista entre España y ___."

explicacion: |
  El tratado estableció una línea de demarcación que otorgaba a Portugal las tierras al este de la línea (lo que luego sería Brasil) y a España las tierras al oeste.
```

### 4 — Impacto demográfico
```
metadata:
  materia: "historia"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["biologia", "enfermedades", "demografia"]

tipo: input
tolerancia_abs: 0

enunciado: "Además de las guerras, un factor determinante en la caída de la población indígena fue la llegada de enfermedades como la viruela. ¿El efecto demográfico fue de aumento o disminución? (Escribe 'aumento' o 'disminución')"

respuestas_validas: ["aumento", "disminución"]

explicacion: |
  La introducción de patógenos europeos causó una catástrofe demográfica en las poblaciones originarias.
```

### 5 — Orden de los procesos de conquista
```
metadata:
  materia: "historia"
  tema: "conquista_colonizacion_america"
  nivel: "intermedio"
  tags: ["cronologia", "procesos"]

tipo: ordenar
opciones_explicitas: ["Llegada de Colón", "Caída de Tenochtitlán", "Establecimiento del Virreinato del Perú"]

enunciado: "Ordena cronológicamente los siguientes hitos de la conquista española en América:"

explicacion: |
  Primero ocurrió el viaje de Colón (1492), luego la conquista del Imperio Azteca (1521) y finalmente la organización administrativa de los territorios en virreinatos.
```