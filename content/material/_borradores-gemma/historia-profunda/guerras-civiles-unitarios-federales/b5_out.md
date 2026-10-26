### 1 — Posturas en el conflicto
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "basico"
  tags: ["politica", "argentina"]

variables:
  escenario: uno_de([
    ["Un grupo de caudillos busca que cada provincia mantenga su propia autonomía y leyes locales.", "federal"],
    ["Un gobierno centralizado busca concentrar todo el poder político y económico en Buenos Aires.", "unitario"]
  ])
  idx: uno_de([0,1])

respuesta: escenario[idx][1]
tipo: mc
opciones_explicitas: ["federal", "unitario"]

enunciado: "En el contexto de las guerras civiles argentinas, si se propone que {escenario[idx][0]}, ¿qué postura se está defendiendo?"

explicacion: |
  El Federalismo defendía la autonomía de las provincias, mientras que el Unitarismo buscaba un mando centralizado en Buenos Aires.
```

### 2 — El control de la Aduana
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["economia", "aduana"]

variables:
  caso: uno_de([
    ["La libre navegación de los ríos interiores es una demanda clave de las provincias.", "federal"],
    ["El control exclusivo de la renta aduanera por parte del gobierno central es la prioridad.", "unitario"]
  ])
  idx: uno_de([0,1])

respuesta: caso[idx][1]
tipo: mc
opciones_explicitas: ["federal", "unitario"]

enunciado: "Analizando la estructura económica de la época, si el objetivo es {caso[0]}, ¿qué modelo se está representando?"

explicacion: |
  Los federales necesitaban la libre navegación para comerciar por sus propios ríos; los unitarios buscaban centralizar las rentas de la aduana.
```

### 3 — El rol del Ejecutivo
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "avanzado"
  tags: ["constitucion", "poder"]

variables:
  modelo: uno_de([
    ["Un gobierno central con un poder ejecutivo fuerte que designa a los gobernadores.", "unitario"],
    ["Un sistema donde las provincias eligen a sus propios gobernadores de forma autónoma.", "federal"]
  ])
  idx: uno_de([0,1])

respuesta: modelo[idx][1]
tipo: completar
respuestas_validas: ["unitario", "federal"]

enunciado: "Si el diseño institucional busca que {modelo[0]}, el modelo de gobierno es de tipo ___."

explicacion: |
  La designación de autoridades provinciales por parte del centro es la característica principal del centralismo unitario.
```

### 4 — Causas del conflicto
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["causas"]

variables:
  conflicto: uno_de([
    ["La disputa por la distribución de los ingresos de la aduana de Buenos Aires.", "federal"],
    ["La lucha por la hegemonía política entre la élite porteña y los caudillos.", "unitario"]
  ])
  idx: uno_de([0,1])

respuesta: conflicto[idx][1]
tipo: mc
opciones_explicitas: ["federal", "unitario"]

enunciado: "Si el núcleo del conflicto es {conflicto[0]}, la demanda principal es de carácter ___."

explicacion: |
  La distribución de la renta aduanera era el principal punto de fricción entre la autonomía provincial y el control central.
```

### 5 — Orden de conceptos
```
metadata:
  materia: "historia_profunda"
  tema: "guerras_civiles_unitarios_federales"
  nivel: "intermedio"
  tags: ["orden"]

variables:
  orden_de_poder: uno_de([
    ["Provincia - Nación - Provincia", "federal"],
    ["Nación - Provincia - Nación", "unitario"]
  ])
  idx: uno_de([0,1])

respuesta: ["Provincia", "Nación", "Provincia", "Nación", "Provincia"]
tipo: ordenar
opciones_explicitas: ["Provincia", "Nación", "Provincia", "Nación", "Provincia"]

enunciado: "Ordene la jerarquía de poder según el modelo {orden_de_poder[idx][0]}."

explicacion: |
  En el federalismo la soberanía reside en las provincias que delegan facultades a la nación; en el unitarismo la nación es la fuente de autoridad sobre las provincias.
```