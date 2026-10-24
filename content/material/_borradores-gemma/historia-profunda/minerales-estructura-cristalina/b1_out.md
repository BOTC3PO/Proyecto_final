### 1 — Definición de mineral
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["definicion", "geologia"]

tipo: mc
opciones_explicitas: ["Una sustancia sólida, inorgánica, de origen natural, con composición química definida y estructura cristalina ordenada.", "Una sustancia sólida, orgánica, de origen volcánico, con composición variable y estructura amorfa.", "Un compuesto químico formado exclusivamente por elementos metálicos en estado sólido.", "Cualquier material sólido encontrado en la corteza terrestre."]

enunciado: "Según la mineralogía clásica, ¿cuál es la definición científica de un mineral?"

explicacion: |
  Un mineral debe cumplir cinco condiciones: ser sólido, inorgánico, de origen natural, tener una fórmula química definida y una estructura atómica interna ordenada (cristalina).
```

### 2 — El carácter inorgánico
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "basico"
  tags: ["propiedades", "inorganico"]

variables:
  escenario: uno_de([
    ["El carbón (formado por restos vegetales)", "falso"],
    ["El cuarzo (formado por silicatos de silicio y oxígeno)", "verdadero"]
  ])

tipo: mc
opciones_explicitas: ["verdadero", "falso"]

enunciado: "Considerando que un mineral debe ser inorgánico, ¿es la afirmación '{escenario[0]}' verdadera o falsa para la definición de mineral?"

respuesta: escenario[1]

explicacion: |
  Los materiales de origen orgánico (como el carbón derivado de plantas) no se consideran minerales, aunque sean sólidos y naturales.
```

### 3 — Estructura interna
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["estructura", "cristalografia"]

tipo: completar
respuestas_validas: ["cristalina"]

enunciado: "Para que una sustancia sea considerada mineral, sus átomos deben estar dispuestos en una estructura ___."

respuesta: "cristalina"

explicacion: |
  La estructura cristalina es el ordenamiento tridimensional repetitivo de los átomos, lo que diferencia a un mineral de un vidrio (sólido amorfo).
```

### 4 — Composición química
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "intermedio"
  tags: ["quimica", "composicion"]

variables:
  caso: uno_de([
    ["El diamante (C)", "C"],
    ["La sal común (NaCl)", "NaCl"],
    ["La calcita (CaCO3)", "CaCO3"]
  ])

tipo: completar
respuestas_validas: ["C", "NaCl", "CaCO3"]

enunciado: "Un mineral debe tener una composición química definida. Si tomamos el caso de {caso[0]}, su fórmula química es ___."

respuesta: caso[1]

explicacion: |
  Cada mineral tiene una proporción fija de elementos que determina su identidad química.
```

### 5 — Orden de propiedades
```
metadata:
  materia: "historia_profunda"
  tema: "minerales_estructura_cristalina"
  nivel: "avanzado"
  tags: ["conceptos", "ordenamiento"]

tipo: ordenar
opciones_explicitas: ["Origen natural", "Sólido", "Estructura cristalina", "Composición química definida", "Inorgánico"]

enunciado: "Ordena los criterios fundamentales que definen a un mineral, desde el origen hasta su organización interna:"

respuesta: ["Origen natural", "Sólido", "Inorgánico", "Composición química definida", "Estructura cristalina"]

explicacion: |
  La definición integral requiere la suma de estas cinco características esenciales para distinguir un mineral de otros materiales terrestres.
```