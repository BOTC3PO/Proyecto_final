### 1 — Riesgo de la dependencia de exportaciones primarias
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["exportaciones", "primarización", "riesgo"]

variables:
  escenario_idx: uno_de([0, 1])
  datos: [["país exportador de granos", "volatilidad de precios internacionales"], ["país exportador de litio", "dependencia de la demanda tecnológica externa"]]

enunciado: "Un {datos[escenario_idx][0]} enfrenta un escenario donde su principal motor de ingresos es un commodity. El principal riesgo económico para este país es la {datos[escenario_idx][1]}."

respuesta: datos[escenario_idx][1]
tipo: mc
opciones_explicitas: ["volatilidad de precios internacionales", "dependencia de la demanda tecnológica externa", "estabilidad cambiaria", "diversificación industrial"]

explicacion: |
  La dependencia de un solo producto primario expone a la economía a las fluctuaciones de los precios internacionales, lo que genera inestabilidad en la balanza comercial y en la recaudación fiscal.
```

### 2 — Impacto de la desindustrialización
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["industria", "valor_agregado", "empleo"]

variables:
  caso_idx: uno_de([0, 1])
  casos: [["un país con baja capacidad manufacturera", "un país con alta dependencia de bienes de capital"], ["pérdida de valor agregado", "vulnerabilidad ante choques externos"]]

enunciado: "En el caso de {casos[caso_idx][0]}, el riesgo estructural más significativo es la {casos[caso_idx][1]}."

respuesta: casos[caso_idx][1]
tipo: mc
opciones_explicitas: ["pérdida de valor agregado", "vulnerabilidad ante choques externos", "exceso de ahorro interno", "estabilidad de precios"]

explicacion: |
  La falta de una base industrial sólida impide que el país capture mayor valor en la cadena de producción, limitando el crecimiento del empleo calificado y la diversificación.
```

### 3 — El fenómeno de la "Enfermedad Holandesa"
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "avanzado"
  tags: ["enfermedad_holandesa", "tipo_de_cambio", "recursos_naturales"]

variables:
  efecto_idx: uno_de([0, 1])
  efectos: [["la apreciación de la moneda local", "la caída de los precios de los commodities"]]

enunciado: "Cuando un país descubre un gran yacimiento de petróleo y aumenta sus exportaciones, se produce una apreciación de la moneda local. Este fenómeno, conocido como Enfermedad Holandesa, suele provocar la falta de competitividad de la ___."

respuesta: industria manufacturera
tipo: completar
respuestas_validas: ["industria manufacturera"]

explicacion: |
  La entrada masiva de divisas aprecia el tipo de cambio real, lo que encarece las exportaciones de bienes no tradicionales y desincentiva la actividad industrial local.
```

### 4 — Secuencia de vulnerabilidad económica
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "intermedio"
  tags: ["secuencia", "riesgo", "estructura"]

variables:
  secuencia_idx: uno_de([0, 1])
  secuencias: [
    ["Concentración de exportaciones", "Caída de demanda externa", "Crisis de balanza de pagos"],
    ["Dependencia tecnológica", "Aumento de importaciones", "Déficit de cuenta corriente"]
  ]

enunciado: "Ordene la secuencia lógica de un choque externo en una economía dependiente:"

pasos:
  - "Identificar el origen del choque"
  - "Observar el efecto en la cuenta externa"
  - "Evaluar el impacto en la estabilidad macroeconómica"

respuesta: secuencias[secuencia_idx]
tipo: ordenar
opciones_explicitas: ["Concentración de exportaciones", "Caída de demanda externa", "Crisis de balanza de pagos", "Dependencia tecnológica", "Aumento de importaciones", "Déficit de cuenta corriente"]

explicacion: |
  La estructura productiva determina la velocidad y la profundidad con la que un shock externo (como una caída de demanda) se traslada a la economía doméstica.
```

### 5 — Determinación de la dependencia
```
metadata:
  materia: "economia"
  tema: "estructura_productiva_dependencia"
  nivel: "basico"
  tags: ["indicador", "exportaciones", "concentracion"]

variables:
  escenario_val: uno_de([0, 1])
  escenarios: [[80, "alta"], [15, "baja"]]

enunciado: "Si el porcentaje de exportaciones concentrado en solo dos productos es del {escenarios[escenario_val][0]}%, se considera que la economía tiene una dependencia ___."

respuesta: escenarios[escenario_val][1]
tipo: mc
opciones_explicitas: ["alta", "baja", "nula", "moderada"]

explicacion: |
  A mayor concentración de la canasta exportadora en pocos productos, mayor es la vulnerabilidad de la economía ante cambios en los precios o volúmenes de esos bienes específicos.
```