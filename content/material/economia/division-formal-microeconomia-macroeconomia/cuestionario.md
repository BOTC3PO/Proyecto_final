# Economia — division formal microeconomia macroeconomia (cuestionario, 20 preguntas VBLang)

> Tema: `economia/division-formal-microeconomia-macroeconomia`. Ver `teoria.md` en esta misma carpeta.

---

### 1 — pregunta 1

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["interdependencia"]

respuesta: falso
tipo: vf

enunciado: "La microeconomía y la macroeconomía son mundos completamente separados que no se influyen mutuamente."

explicacion: |
  Falso. Ambas son lentes diferentes de la misma realidad y están interconectadas. Las decisiones micro afectan a la macro y viceversa.
```

### 2 — pregunta 2

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["interdependencia", "politica-monetaria"]

variables:
  decision_macro: "aumento de tasas de interés"
  efecto_micro: "encarecimiento de préstamos"

respuesta: verdadero
tipo: vf

enunciado: "Una decisión macroeconómica como el aumento de tasas de interés por parte del Banco Central afecta directamente el costo de oportunidad de ahorrar vs consumir para las familias."

explicacion: |
  Correcto. La política macro cambia los incentivos y costos para los agentes microeconómicos.
```

### 3 — pregunta 3

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["complementariedad"]

respuesta: verdadero
tipo: vf

enunciado: "Las decisiones de millones de individuos (micro) terminan definiendo los grandes indicadores nacionales (macro)."

explicacion: |
  Verdadero. La macroeconomía es la suma agregada de comportamientos microeconómicos.
```

### 4 — pregunta 4

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["perspectiva"]

respuesta: verdadero
tipo: vf

enunciado: "La micro y la macroeconomía son lentes diferentes para observar la misma realidad económica."

explicacion: |
  Verdadero. No son mundos separados, sino perspectivas complementarias.
```

### 5 — pregunta 5

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["interdependencia"]

respuesta: verdadero
tipo: vf

enunciado: "Si el Banco Central sube las tasas, el costo de oportunidad de consumir hoy aumenta para las familias."

explicacion: |
  Correcto. Ahorrar se vuelve más atractivo (mayor retorno) y consumir más caro (crédito costoso).
```

### 6 — pregunta 6

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["ejemplo-clasico"]

respuesta: verdadero
tipo: vf

enunciado: "Explicar por qué sube el precio del pan en una panadería específica es un problema microeconómico."

explicacion: |
  Sí, porque se refiere a un mercado y agente específico, no al nivel general de precios.
```

### 7 — pregunta 7

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["costo-oportunidad", "macro"]

variables:
  ejemplo: "política monetaria"

respuesta: falso

tipo: vf

enunciado: "El costo de oportunidad es un concepto exclusivo de la microeconomía y no aplica a la macroeconomía."

explicacion: |
  El costo de oportunidad es fundamental en ambas ramas; la macro también evalúa renuncias al tomar políticas.
```

### 8 — pregunta 8

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["interdependencia", "politica-monetaria"]

variables:
  decision_macro: "aumento de tasas de interés"
  efecto_micro: uno_de(["mayor costo de endeudamiento para familias", "disminución del ahorro", "aumento del consumo inmediato"])

respuesta: "mayor costo de endeudamiento para familias"
tipo: mc

opciones_explicitas: ["mayor costo de endeudamiento para familias", "disminución del ahorro", "aumento del consumo inmediato", "reducción de impuestos"]

enunciado: "Si el Banco Central toma una decisión macroeconómica de {decision_macro}, ¿cuál es un efecto directo en el comportamiento microeconómico de las familias?"

explicacion: |
  Las tasas de interés más altas encarecen los préstamos, afectando directamente la decisión de consumo o ahorro de las familias.
```

### 9 — pregunta 9

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["costo-oportunidad", "micro"]

variables:
  recurso: "tiempo"
  alternativa: uno_de(["estudiar", "trabajar", "descansar"])

respuesta: "la mejor alternativa no elegida"
tipo: completar

enunciado: "El costo de oportunidad de dedicar {recurso} a {alternativa} es:"

explicacion: |
  El costo de oportunidad se define como el valor de la mejor alternativa a la que se renuncia al tomar una decisión.
```

### 10 — pregunta 10

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["interdependencia", "agregacion"]

variables:
  decision_micro: "reducir la producción"
  resultado_macro: uno_de(["caída del PBI agregado", "aumento de la inflación", "devaluación del peso"])

respuesta: "caída del PBI agregado"
tipo: mc

opciones_explicitas: ["caída del PBI agregado", "aumento de la inflación", "devaluación del peso", "reducción del desempleo"]

enunciado: "Si todas las empresas del país toman una decisión microeconómica de {decision_micro}, ¿qué consecuencia macroeconómica es probable?"

explicacion: |
  La suma de reducciones de producción individual (micro) se traduce en una contracción de la actividad económica total (macro).
```

### 11 — pregunta 11

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["conceptos-basicos", "vf"]

variables:
  afirmacion: "micro y macro son mundos completamente separados"

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La micro y la macroeconomía son mundos completamente separados e independientes."

explicacion: |
  Falso. Son lentes complementarios para observar la misma realidad; las decisiones de uno afectan al otro.
```

### 12 — pregunta 12

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["microeconomia", "enfoque"]

variables:
  analogia: "los árboles"
  analogia_macro: "el bosque"

respuesta: "los árboles"
tipo: completar

enunciado: "Se dice que la microeconomía estudia '{analogia}', mientras que la macroeconomía estudia '{analogia_macro}'."

explicacion: |
  La analogía clásica: la micro se enfoca en los detalles individuales (árboles) y la macro en el panorama general (bosque).
```

### 13 — pregunta 13

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["costo-oportunidad", "calculo"]

variables:
  ganancia_trabajo: random(10000, 50000)
  ganancia_estudio: 0

respuesta: ganancia_trabajo
tipo: input

enunciado: "Si un estudiante deja de trabajar para estudiar y pierde una ganancia potencial de ${ganancia_trabajo}, ¿cuál es el costo de oportunidad monetario directo?"

explicacion: |
  El costo de oportunidad es el beneficio de la mejor alternativa no elegida (en este caso, el salario dejado de percibir).
```

### 14 — pregunta 14

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["politica-fiscal", "interdependencia"]

variables:
  politica: "subida de impuestos corporativos"
  efecto_agregado: uno_de(["reducción del consumo agregado", "aumento de la productividad", "disminución de la inflación"])

respuesta: "reducción del consumo agregado"
tipo: mc

opciones_explicitas: ["reducción del consumo agregado", "aumento de la productividad", "disminución de la inflación", "incremento de las exportaciones"]

enunciado: "Una política fiscal macroeconómica de {politica} puede llevar a un efecto microeconómico que, agregado, resulta en:"

explicacion: |
  Al reducirse el ingreso disponible o las ganancias de las empresas, el consumo y la inversión individuales bajan, afectando el agregado.
```

### 15 — pregunta 15

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["conceptos-basicos", "escasez"]

variables:
  concepto: "recursos escasos"
  necesidad: "necesidades ilimitadas"

respuesta: "escasa"
tipo: completar

enunciado: "La economía estudia cómo administrar {concepto} para satisfacer {necesidad}."

explicacion: |
  La definición fundamental de la economía gira en torno a la escasez de recursos frente a deseos ilimitados.
```

### 16 — pregunta 16

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["conceptos-basicos", "vf"]

variables:
  lente: "macroeconomía"
  objeto: "el comportamiento de una familia"

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: El lente de la {lente} es el adecuado para analizar el comportamiento específico de una familia."

explicacion: |
  Falso. El comportamiento individual de una familia es objeto de estudio de la microeconomía.
```

### 17 — pregunta 17

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "avanzado"
  tags: ["politica-monetaria", "costo-oportunidad"]

variables:
  cambio_macro: "aumento de tasas de interés"
  cambio_costo: "el costo de oportunidad de gastar"
  direccion: uno_de(["aumenta", "disminuye", "se mantiene"])

respuesta: "aumenta"
tipo: mc

opciones_explicitas: ["aumenta", "disminuye", "se mantiene", "es irrelevante"]

enunciado: "Si hay un {cambio_macro}, el {cambio_costo} de gastar dinero en lugar de ahorrar:"

explicacion: |
  Con tasas más altas, el interés que se deja de ganar por gastar (costo de oportunidad) es mayor.
```

### 18 — pregunta 18

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["macroeconomia", "definicion", "vf"]

variables:
  definicion: "estudio de unidades individuales"

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: La macroeconomía se define como el {definicion}."

explicacion: |
  Falso. Eso es la microeconomía. La macro estudia el conjunto.
```

### 19 — pregunta 19

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "basico"
  tags: ["microeconomia", "definicion", "vf"]

variables:
  definicion: "estudio de unidades individuales"

respuesta: verdadero
tipo: vf

enunciado: "Verdadero o Falso: La microeconomía se define como el {definicion}."

explicacion: |
  Verdadero. Se enfoca en familias, trabajadores y empresas.
```

### 20 — pregunta 20

```
metadata:
  materia: "economia"
  tema: "division_formal_microeconomia_macroeconomia"
  nivel: "intermedio"
  tags: ["costo-oportunidad", "vf"]

variables:
  concepto: "costo de oportunidad"
  definicion: "lo que se gana al elegir una opción"

respuesta: falso
tipo: vf

enunciado: "Verdadero o Falso: El {concepto} es {definicion}."

explicacion: |
  Falso. Es lo que se RENUNCIA (pierde) al elegir una opción.
```
