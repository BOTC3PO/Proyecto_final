### 1 — El motor del cambio
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["astronomia", "tierra", "sol"]

respuesta: "traslación"
tipo: completar
respuestas_validas: ["traslación", "traslación de la Tierra"]

enunciado: "El cambio en las constelaciones visibles a lo largo de los meses ocurre debido al movimiento de ___ de la Tierra alrededor del Sol."

explicacion: |
  La Tierra se desplaza en su órbita alrededor del Sol. Esto hace que, según nuestra posición en la órbita, la parte del cielo que queda en la oscuridad (noche) cambie, permitiéndonos ver diferentes estrellas.
```

### 2 — Observación estacional
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "intermedio"
  tags: ["estaciones", "cielo_nocturno"]

variables:
  escenario: uno_de([["Orión", "invierno"], ["Escorpio", "verano"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["invierno", "verano", "primavera", "otoño"]

enunciado: "Si en una fecha determinada observamos con claridad la constelación de {escenario[0]}, esto indica que estamos en la estación de {escenario[1]}."

explicacion: |
  Las constelaciones estacionales dependen de la posición de la Tierra respecto al Sol. Por ejemplo, la constelación de Orión es típica del cielo de invierno en el hemisferio norte.
```

### 3 — La perspectiva terrestre
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["perspectiva", "sol"]

respuesta: "Sol"
tipo: completar
respuestas_validas: ["Sol", "Sol"]

enunciado: "Las constelaciones que vemos en el cielo nocturno cambian porque, al movernos en nuestra órbita, el ___ queda situado entre la Tierra y las estrellas que antes veíamos, ocultándolas durante la noche."

explicacion: |
  Durante el día, el Sol "tapa" la luz de las estrellas que se encuentran en la misma dirección. Al cambiar nuestra posición orbital, las estrellas que antes eran visibles de noche ahora están en la dirección del Sol.
```

### 4 — Secuencia de observación
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "avanzado"
  tags: ["orden", "ciclo_anual"]

respuesta: ["Eje terrestre", "Traslación", "Cambio de constelaciones"]
tipo: ordenar
opciones_explicitas: ["Eje terrestre", "Traslación", "Cambio de constelaciones"]

enunciado: "Ordena la secuencia lógica de causas que explica por qué vemos diferentes estrellas cada mes:"

pasos:
  - "La Tierra tiene un eje de rotación."
  - "La Tierra realiza un movimiento de traslación alrededor del Sol."
  - "La perspectiva de las estrellas cambia, mostrando nuevas constelaciones."

explicacion: |
  El ciclo es una consecuencia directa del movimiento orbital de la Tierra alrededor del Sol.
```

### 5 — Verdadero o Falso
```
metadata:
  materia: "historia_profunda"
  tema: "movimiento_aparente_constelaciones"
  nivel: "basico"
  tags: ["conceptos"]

respuesta: falso
tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "¿Es el movimiento de rotación (sobre su propio eje) la causa principal por la que las constelaciones cambian de una estación a otra?"

explicacion: |
  Falso. La rotación causa el ciclo día/noche, pero es la traslación la que causa el cambio de las constelaciones visibles a lo largo de los meses.
```