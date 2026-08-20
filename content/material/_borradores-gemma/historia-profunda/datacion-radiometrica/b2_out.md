### 1 — El límite del Carbono-14
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["carbono-14", "datacion"]

enunciado: "El método de datación por Carbono-14 es útil para datar materia orgánica con una antigüedad máxima de aproximadamente ___ años."

respuestas_validas: ["50000"]
tipo: completar

explicacion: |
  El Carbono-14 tiene una vida media de aproximadamente 5730 años. Después de unos 50,000 años, la cantidad de isótopo remanente es tan pequeña que no puede medirse con precisión, marcando el límite de este método.
```

### 2 — Vida media del Carbono-14
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "basico"
  tags: ["carbono-14", "vida_media"]

variables:
  idx: uno_de([0, 1])
  datos: [["5730", "5730"], ["5730", "5730"]]

enunciado: "La vida media del isótopo Carbono-14 es de aproximadamente {datos[idx][0]} años."

respuesta: datos[idx][1]
tipo: input
tolerancia_abs: 10

explicacion: |
  La vida media es el tiempo necesario para que la mitad de los núcleos de un isótopo radiactivo se desintegren. Para el C-14 es de ~5730 años.
```

### 3 — Métodos para rocas antiguas
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["uranio", "potasio", "rocas"]

enunciado: "¿Qué método es preferible para datar rocas de una antigüedad muy superior a los 50,000 años?"

opciones_explicitas: ["Carbono-14", "Uranio-Plomo", "Oxígeno-16"]
respuesta: "Uranio-Plomo"
tipo: mc

explicacion: |
  Para materiales muy antiguos como rocas, se requieren isótopos con vidas medias mucho más largas, como el sistema Uranio-Plomo o Potasio-Argón.
```

### 4 — Isótopos y materiales
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "intermedio"
  tags: ["isótopos", "datacion"]

enunciado: "Relaciona el isótopo con el tipo de material que se puede datar:"

pasos:
  - "Carbono-14 -> Materia orgánica"
  - "Uranio-Plomo -> Rocas antiguas"
  - "Potasio-Argón -> Rocas antiguas"

opciones_explicitas: ["Carbono-14 -> Materia orgánica", "Uranio-Plomo -> Rocas antiguas", "Potasio-Argón -> Rocas antiguas"]
respuesta: ["Carbono-14 -> Materia orgánica", "Uranio-Plomo -> Rocas antiguas", "Potasio-Argón -> Rocas antiguas"]
tipo: ordenar

explicacion: |
  La elección del isótopo depende de la escala de tiempo: el C-14 para arqueología (orgánicos) y otros isótopos para geocronología (rocas).
```

### 5 — Selección de método
```
metadata:
  materia: "historia_profunda"
  tema: "datacion_radiometrica"
  nivel: "avanzado"
  tags: ["metodologia", "geologia"]

variables:
  idx: uno_de([0, 1])
  escenario: [["fósil de madera de 40,000 años", "uranio-plomo"], ["cristal de circon en roca de 1,000 millones de años", "potasio-argón"]]

enunciado: "Si un arqueólogo encuentra {escenario[idx][0]}, el método más adecuado de datación sería el de {escenario[idx][1]}."

respuesta: escenario[idx][1]
tipo: mc

opciones_explicitas: ["uranio-plomo", "potasio-argón", "carbono-14"]

explicacion: |
  El escenario determina la escala temporal. Si el objeto es muy antiguo (roca), el C-14 no sirve; si es madera (orgánico) dentro del rango, el C-14 es ideal.
```