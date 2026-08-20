### 1 — El concepto de excedente
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["agricultura", "conceptos"]

tipo: mc
opciones_explicitas: ["La producción total de alimentos de una comunidad", "La producción de alimento por encima de lo necesario para la subsistencia", "El proceso de transformar granos en harina", "El intercambio de semillas entre comunidades"]

enunciado: "En el contexto de la Revolución Neolítica, ¿qué se define como excedente agrícola?"

explicacion: |
  El excedente es la cantidad de alimento que sobra después de haber cubierto las necesidades básicas de supervivencia de la población. Este sobrante es la base de la especialización del trabajo.
```

### 2 — Consecuencias del excedente
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["sociedad", "especializacion"]

variables:
  escenario_idx: uno_de([0, 1])
  escenarios: [
    ["comerciar con otros grupos", "alimentar a artesanos y sacerdotes"],
    ["almacenar para tiempos de sequía", "permitir la aparición de jerarquías sociales"]
  ]

tipo: mc
opciones_explicitas: ["Reducir el tamaño de las poblaciones", "Fomentar la autosuficiencia absoluta", "Permitir la especialización del trabajo", "Eliminar la necesidad de agricultura"]

enunciado: "La existencia de un excedente agrícola permitió que parte de la población pudiera dedicarse a actividades distintas a la producción de alimentos, como {escenarios[escenario_idx][0]} o {escenarios[escenario_idx][1]}. ¿A qué proceso social dio lugar esto?"

explicacion: |
  Al no tener que producir comida todos los días, surgieron especialistas (artesanos, guerreros, administradores) y se consolidaron las estructuras sociales complejas.
```

### 3 — El proceso de sedentarización
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "basico"
  tags: ["nomadismo", "sedentarismo"]

tipo: ordenar
opciones_explicitas: ["Domesticación de plantas y animales", "Producción de excedente agrícola", "Formación de asentamientos permanentes", "Aparición de la división social del trabajo"]

enunciado: "Ordena cronológicamente los procesos que permitieron la transición del nomadismo al sedentarismo complejo:"

explicacion: |
  Primero se domestican especies, lo que permite producir más de lo que se consume; esto permite quedarse en un lugar (sedentarismo) y finalmente permite que no todos trabajen en el campo.
```

### 4 — Relación entre excedente y comercio
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "intermedio"
  tags: ["economia_antigua"]

tipo: completar
respuestas_validas: ["comercio", "intercambio"]

enunciado: "El excedente agrícola no solo servía para el almacenamiento, sino que también facilitó el ________ con otros grupos humanos."

explicacion: |
  El sobrante de productos permite que una comunidad obtenga otros bienes que no produce, dando origen a las primeras redes de intercambio o comercio.
```

### 5 — Cálculo de excedente (Simulación)
```
metadata:
  materia: "historia_profunda"
  tema: "sedentarizacion_excedente"
  nivel: "avanzado"
  tags: ["logica", "economia"]

variables:
  datos: [
    [100, 70],
    [250, 180],
    [50, 45]
  ]
  idx: uno_de([0, 1, 2])
  produccion: datos[idx][0]
  consumo: datos[idx][1]

tipo: input
enunciado: "Si una comunidad agrícola produce {produccion} sacos de grano y el consumo necesario para su subsistencia es de {consumo} sacos, ¿cuántos sacos representan el excedente?"

pasos:
  - "Identificar la producción total"
  - "Identificar el consumo de subsistencia"
  - "Restar el consumo de la producción para hallar el sobrante"

explicacion: |
  El excedente se calcula mediante la resta: Producción - Consumo. En este caso, el resultado es {produccion - consumo}.
```