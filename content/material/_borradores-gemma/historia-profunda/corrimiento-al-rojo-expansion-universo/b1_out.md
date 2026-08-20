### 1 — El concepto de Redshift
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["astronomia", "luz", "doppler"]

tipo: mc
opciones_explicitas: ["El acortamiento de la longitud de onda de la luz", "El estiramiento de la longitud de onda de la luz", "El cambio de color de la luz hacia el azul", "La pérdida de intensidad de la luz"]

enunciado: "En astronomía, el corrimiento al rojo (redshift) se define como ___ de la luz de un objeto que se aleja de un observador."

explicacion: |
  El corrimiento al rojo ocurre cuando la longitud de onda de la radiación electromagnética emitida por un objeto se desplaza hacia valores más largos (hacia el rojo del espectro) debido a que la fuente se aleja.
```

### 2 — Analogía con el sonido
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "basico"
  tags: ["analogia", "doppler"]

tipo: completar
respuestas_validas: ["Efecto Doppler", "Efecto Doppler"]

enunciado: "El fenómeno del corrimiento al rojo es para la luz lo que el ___ es para el sonido."

explicacion: |
  Así como una ambulancia que se aleja produce un sonido más grave (menor frecuencia), la luz de una galaxia que se aleja presenta un corrimiento al rojo (menor frecuencia/mayor longitud de onda).
```

### 3 — Relación con la velocidad de alejamiento
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["velocidad", "observacion"]

variables:
  escenario: uno_de([[10, "mayor"], [50, "mayor"], [100, "mayor"]])

tipo: mc
opciones_explicitas: ["menor", "mayor", "igual"]

enunciado: "Si observamos que el corrimiento al rojo de una galaxia es de {escenario[0]} unidades, esto indica que su velocidad de alejamiento es ___ que la de una galaxia con corrimiento nulo."

respuesta: escenario[1]

explicacion: |
  A mayor corrimiento al rojo, mayor es la velocidad a la que el objeto se está alejando de nosotros (según la ley de Hubble-Lemaître).
```

### 4 — El espectro electromagnético
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "intermedio"
  tags: ["espectro", "longitud_de_onda"]

tipo: ordenar
opciones_explicitas: ["Violeta", "Verde", "Amarillo", "Rojo", "Infrarrojo"]

enunciado: "Ordena las longitudes de onda de la luz en orden CRECIENTE (de menor a mayor longitud de onda) para entender cómo se desplaza el espectro hacia el rojo."

respuesta: ["Violeta", "Verde", "Amarillo", "Rojo", "Infrarrojo"]

explicacion: |
  El corrimiento al rojo consiste en desplazarse desde las longitudes de onda cortas (violeta/azul) hacia las longitudes de onda largas (rojo/infrarrojo).
```

### 5 — Cálculo de la longitud de onda
```
metadata:
  materia: "historia_profunda"
  tema: "corrimiento_al_rojo_expansion_universo"
  nivel: "avanzado"
  tags: ["calculo", "fisica"]

variables:
  datos: uno_de([[500, 510], [600, 610], [700, 710]])

tipo: input
tolerancia_abs: 0.1

enunciado: "Una estrella emite luz en una longitud de onda de {datos[0]} nm. Debido al corrimiento al rojo, la longitud de onda observada es de ___ nm."

respuesta: datos[1]

explicacion: |
  El corrimiento al rojo aumenta la longitud de onda observada respecto a la emitida. En este caso, el valor observado es el segundo elemento de nuestra tabla de datos.
```