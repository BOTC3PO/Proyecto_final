### 1 — Ríos de Mesopotamia
```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["mesopotamia", "rios"]

respuesta: "Tigris y Éufrates"
tipo: completar
respuestas_validas: ["Tigris y Éufrates"]

enunciado: "La civilización de Mesopotamia se desarrolló entre los ríos ___."

explicacion: |
  Mesopotamia significa 'tierra entre ríos', refiriéndose específicamente al Tigris y al Éufrates.
```

### 2 — El don del Nilo
```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "basico"
  tags: ["egipto", "nilo"]

variables:
  escenario: uno_de([["Nilo", "Egipto"], ["Indo", "India"], ["Huang He", "China"]])

respuesta: escenario[1]
tipo: mc
opciones_explicitas: ["Egipto", "India", "China"]

enunciado: "El río {escenario[1]} fue fundamental para el desarrollo de la civilización de {escenario[0]}."

explicacion: |
  Heródoto llamó a Egipto 'el don del Nilo' debido a sus inundaciones predecibles que permitían la agricultura.
```

### 3 — El río Amarillo
```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["china", "huang_he"]

respuesta: "Huang He"
tipo: mc
opciones_explicitas: ["Yangtsé", "Huang He", "Indo", "Ganges"]

enunciado: "La civilización china antigua se asentó principalmente a lo largo del río ___."

explicacion: |
  El Huang He (Río Amarillo) es conocido por sus sedimentos de loess que fertilizaban las tierras.
```

### 4 — Orden Cronológico de Civilizaciones
```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "avanzado"
  tags: ["cronologia", "civilizaciones"]

respuesta: ["Mesopotamia", "Egipto", "Indo", "China"]
tipo: ordenar
opciones_explicitas: ["Mesopotamia", "Egipto", "Indo", "China"]

enunciado: "Ordena cronológicamente el surgimiento de estas civilizaciones fluviales (de la más antigua a la más reciente):"

explicacion: |
  Aunque los periodos se solapan, el registro arqueológico sitúa el surgimiento de las ciudades-estado en Mesopotamia y el valle del Nilo como los más tempranos.
```

### 5 — Identificación de Ríos
```
metadata:
  materia: "historia_profunda"
  tema: "civilizaciones_antiguas"
  nivel: "intermedio"
  tags: ["india", "indo"]

variables:
  datos: [[ "Indo", "India" ], [ "Nilo", "Egipto" ], [ "Tigris", "Mesopotamia" ]]
  idx: uno_de([0, 1, 2])

respuesta: datos[idx][1]
tipo: mc
opciones_explicitas: ["India", "Egipto", "Mesopotamia"]

enunciado: "El río {datos[idx][0]} fue el eje central de la civilización de {datos[idx][1]}."

explicacion: |
  La civilización del Valle del Indo (actual Pakistán/Noroeste de India) fue una de las más avanzadas de la antigüedad.
```